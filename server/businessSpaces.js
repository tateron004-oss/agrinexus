"use strict";

// Separate business spaces inside one Kyro.
//
// A business space is its own copy of the shared record (users, profile, phone-caller list, ...). The current record is the "default" space: it keeps all existing data and does not move.
// Which space a request runs in is decided once, before the record is read (from the session, the remember-me cookie, the email being signed in, or the number that was dialled) and is carried
// through the request with an AsyncLocalStorage store, so the few places that read the record and the one function that saves it can pick the right copy without changing the hundreds of callers
// that pass the record along.
//
// The directory says which email, and which phone number, belongs to which space. An email belongs to exactly one space; a number belongs to exactly one space. It lives in the database next
// to the shared record when the database is in use, and in one JSON file next to it otherwise (local use and tests).
const fs = require("node:fs");
const path = require("node:path");
const { AsyncLocalStorage } = require("node:async_hooks");

const DEFAULT_SPACE = "default";
const store = new AsyncLocalStorage();

const validSpaceId = id => typeof id === "string" && /^[a-z0-9][a-z0-9-]{1,39}$/.test(id) && id !== DEFAULT_SPACE;
const currentSpace = () => store.getStore()?.space || DEFAULT_SPACE;
const runInSpace = (space, work) => store.run({ space: space || DEFAULT_SPACE }, work);
const enterSpace = space => store.enterWith({ space: space || DEFAULT_SPACE });

// Where a space's record lives next to the default one (file mode). Postgres mode uses the same id as the row key instead.
const spaceDbPath = (defaultPath, space) => (space === DEFAULT_SPACE ? defaultPath : path.join(path.dirname(defaultPath), `${path.basename(defaultPath, ".json")}.space-${space}.json`));

const emailKey = value => String(value ?? "").trim().toLowerCase();
const numberKey = value => String(value ?? "").replace(/[^\d+]/g, "");
const NAME_MAX = 80;
const cleanName = value => String(value ?? "").replace(/[\u0000-\u001f\u007f]/g, " ").replace(/\s+/g, " ").trim().slice(0, NAME_MAX);

// Both backends answer the same questions, all async:
//   spaceForEmail(email) -> id | "default"        spaceForNumber(number) -> id | null        exists(id) -> boolean
//   createSpace(id, {name}) · linkEmail(email, id) · linkNumber(number, id) · unlinkNumber(number) · describe() -> [{ id, name, createdAt, emails[], numbers[] }]
function createFileDirectory(filePath) {
  const load = async () => {
    try { return JSON.parse(await fs.promises.readFile(filePath, "utf8")); } catch { return { spaces: {}, emails: {}, numbers: {} }; }
  };
  let writing = Promise.resolve();
  // Changes are serialised so two at once cannot overwrite each other.
  const change = work => {
    const run = writing.then(async () => {
      const data = await load();
      const result = await work(data);
      const temp = `${filePath}.tmp-${process.pid}-${Date.now()}`;
      await fs.promises.mkdir(path.dirname(filePath), { recursive: true });
      await fs.promises.writeFile(temp, JSON.stringify(data, null, 2));
      await fs.promises.rename(temp, filePath);
      return result;
    });
    writing = run.catch(() => {});
    return run;
  };
  return {
    kind: "file",
    exists: async id => Boolean((await load()).spaces[id]),
    spaceForEmail: async email => { const data = await load(); const id = data.emails[emailKey(email)]; return id && data.spaces[id] ? id : DEFAULT_SPACE; },
    spaceForNumber: async number => { const data = await load(); const id = data.numbers[numberKey(number)]; return id && data.spaces[id] ? id : null; },
    createSpace: (id, { name = "" } = {}) => change(data => {
      if (!validSpaceId(id)) throw new Error("A business id is 2 to 40 lowercase letters, digits or dashes.");
      if (data.spaces[id]) throw new Error("That business already exists.");
      data.spaces[id] = { name: cleanName(name), createdAt: new Date().toISOString() };
    }),
    linkEmail: (email, id) => change(data => {
      if (!data.spaces[id]) throw new Error("No such business.");
      const key = emailKey(email);
      if (data.emails[key] && data.emails[key] !== id) throw new Error("That email already belongs to another business.");
      data.emails[key] = id;
    }),
    linkNumber: (number, id) => change(data => {
      if (!data.spaces[id]) throw new Error("No such business.");
      const key = numberKey(number);
      if (data.numbers[key] && data.numbers[key] !== id) throw new Error("That phone number already belongs to another business.");
      data.numbers[key] = id;
    }),
    unlinkNumber: number => change(data => { delete data.numbers[numberKey(number)]; }),
    describe: async () => {
      const data = await load();
      return Object.entries(data.spaces).map(([id, info]) => ({
        id, name: info.name || "", createdAt: info.createdAt || null,
        emails: Object.keys(data.emails).filter(key => data.emails[key] === id),
        numbers: Object.keys(data.numbers).filter(key => data.numbers[key] === id)
      }));
    }
  };
}

function createPostgresDirectory(getPool) {
  let ready = null;
  const ensure = () => ready || (ready = (async () => {
    const pool = getPool();
    await pool.query("create table if not exists agrinexus_business_spaces (id text primary key, name text not null default '', created_at timestamptz not null default now())");
    await pool.query("create table if not exists agrinexus_business_emails (email text primary key, space_id text not null references agrinexus_business_spaces(id))");
    await pool.query("create table if not exists agrinexus_business_numbers (number text primary key, space_id text not null references agrinexus_business_spaces(id))");
  })().catch(error => { ready = null; throw error; }));
  const query = async (sql, params) => { await ensure(); return getPool().query(sql, params); };
  const claim = async (table, column, key, id, label) => {
    const result = await query(`insert into ${table} (${column}, space_id) values ($1, $2) on conflict (${column}) do update set space_id = ${table}.space_id returning space_id`, [key, id]);
    if (result.rows[0].space_id !== id) throw new Error(`That ${label} already belongs to another business.`);
  };
  const requireSpace = async id => { if (!(await query("select 1 from agrinexus_business_spaces where id = $1", [id])).rowCount) throw new Error("No such business."); };
  return {
    kind: "postgres",
    exists: async id => (await query("select 1 from agrinexus_business_spaces where id = $1", [id])).rowCount > 0,
    spaceForEmail: async email => (await query("select space_id from agrinexus_business_emails where email = $1", [emailKey(email)])).rows[0]?.space_id || DEFAULT_SPACE,
    spaceForNumber: async number => (await query("select space_id from agrinexus_business_numbers where number = $1", [numberKey(number)])).rows[0]?.space_id || null,
    createSpace: async (id, { name = "" } = {}) => {
      if (!validSpaceId(id)) throw new Error("A business id is 2 to 40 lowercase letters, digits or dashes.");
      const result = await query("insert into agrinexus_business_spaces (id, name) values ($1, $2) on conflict (id) do nothing returning id", [id, cleanName(name)]);
      if (!result.rowCount) throw new Error("That business already exists.");
    },
    linkEmail: async (email, id) => { await requireSpace(id); await claim("agrinexus_business_emails", "email", emailKey(email), id, "email"); },
    linkNumber: async (number, id) => { await requireSpace(id); await claim("agrinexus_business_numbers", "number", numberKey(number), id, "phone number"); },
    unlinkNumber: async number => { await query("delete from agrinexus_business_numbers where number = $1", [numberKey(number)]); },
    describe: async () => {
      const spaces = (await query("select id, name, created_at from agrinexus_business_spaces order by created_at", [])).rows;
      const emails = (await query("select email, space_id from agrinexus_business_emails", [])).rows;
      const numbers = (await query("select number, space_id from agrinexus_business_numbers", [])).rows;
      return spaces.map(row => ({
        id: row.id, name: row.name || "", createdAt: row.created_at ? new Date(row.created_at).toISOString() : null,
        emails: emails.filter(item => item.space_id === row.id).map(item => item.email),
        numbers: numbers.filter(item => item.space_id === row.id).map(item => item.number)
      }));
    }
  };
}

// A new space's record. Deliberately NOT a copy of the default record (that holds the demo accounts and demo data): only the reference lists the app needs, an empty profile (the app fills in its
// own defaults), and the one first account. No demo logins are ever added to a space (see api()).
function newSpaceRecord(template, { adminAccount }) {
  return {
    users: [adminAccount],
    countries: template.countries || [], routes: template.routes || [], courses: template.courses || [], roles: template.roles || [],
    products: template.products || [], providers: template.providers || [],
    profile: {}
  };
}

// Who owns the platform: an Admin in the default space, named in PLATFORM_OWNER_EMAILS (comma separated, so a second login can be added). With the setting empty, every Admin of the default
// space counts, which is exactly who could do platform things before business spaces existed. A business's own Admin is never a platform owner.
function platformOwnerEmails(env = process.env) {
  return String(env.PLATFORM_OWNER_EMAILS || "").split(",").map(emailKey).filter(Boolean);
}
function isPlatformOwner(user, env = process.env, space = currentSpace()) {
  if (!user || space !== DEFAULT_SPACE || user.role !== "Admin" || user.guest === true) return false;
  if (user.status === "disabled" || user.status === "deleted") return false;
  const listed = platformOwnerEmails(env);
  return !listed.length || listed.includes(emailKey(user.email));
}

module.exports = Object.freeze({
  DEFAULT_SPACE, validSpaceId, currentSpace, runInSpace, enterSpace, spaceDbPath, createFileDirectory, createPostgresDirectory, newSpaceRecord,
  platformOwnerEmails, isPlatformOwner, emailKey, numberKey, cleanName
});
