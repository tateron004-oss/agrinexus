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

// 2 to 40 lowercase letters, digits and dashes, starting and ending with a letter or digit. A few words are kept back so an id can never be mistaken for something else (or collide with a built-in property).
const RESERVED_IDS = new Set([DEFAULT_SPACE, "admin", "platform", "system", "root", "api", "constructor", "prototype", "hasownproperty", "valueof", "tostring"]);
const validSpaceId = id => typeof id === "string" && /^[a-z0-9](?:[a-z0-9-]{0,38}[a-z0-9])$/.test(id) && !RESERVED_IDS.has(id);
// The store holds the space and, for a business, what it sends as (its own settings and linked numbers; see server/businessSender.js), loaded once when the request is routed.
const contextOf = (space, info) => ({ space: space || DEFAULT_SPACE, name: (info && info.name) || "", settings: (info && info.settings) || {}, numbers: (info && info.numbers) || [] });
const currentSpace = () => store.getStore()?.space || DEFAULT_SPACE;
const currentContext = () => store.getStore() || contextOf(DEFAULT_SPACE);
const runInSpace = (space, work, info) => store.run(contextOf(space, info), work);
const enterSpace = (space, info) => store.enterWith(contextOf(space, info));

// Where a space's record lives next to the default one (file mode). Postgres mode uses the same id as the row key instead.
const spaceDbPath = (defaultPath, space) => (space === DEFAULT_SPACE ? defaultPath : path.join(path.dirname(defaultPath), `${path.basename(defaultPath, ".json")}.space-${space}.json`));

// The newer engine (tasks, memory, reminders, notifications, devices, the worker) labels every row with a tenant. The default space keeps the tenant it has always had; each business gets its own,
// derived from its id so it is the same on every server and every restart, and cannot collide with another business's.
const DEFAULT_TENANT_ID = "00000000-0000-0000-0000-000000000001";
function tenantIdFor(space) {
  if (!space || space === DEFAULT_SPACE) return DEFAULT_TENANT_ID;
  const hex = require("node:crypto").createHash("sha256").update(`kyro-business-tenant:${space}`).digest("hex").slice(0, 32).split("");
  hex[12] = "5";
  hex[16] = ((Number.parseInt(hex[16], 16) & 3) | 8).toString(16);
  const value = hex.join("");
  return `${value.slice(0, 8)}-${value.slice(8, 12)}-${value.slice(12, 16)}-${value.slice(16, 20)}-${value.slice(20)}`;
}

const emailKey = value => String(value ?? "").trim().toLowerCase();
const numberKey = value => String(value ?? "").replace(/[^\d+]/g, "");
const NAME_MAX = 80;
// Control characters, and the invisible or direction-changing ones (zero-width, left-to-right/right-to-left overrides) that could make one name look like another, are removed.
const cleanName = value => String(value ?? "").replace(/[\u0000-\u001f\u007f]/g, " ").replace(/[\u200b-\u200f\u202a-\u202e\u2060-\u2064\u2066-\u2069\ufeff]/g, "").replace(/\s+/g, " ").trim().slice(0, NAME_MAX);

// An error the directory raises on purpose (a name is taken, no such business) can be shown to a person as it is; anything else (a damaged file, a database failure) must not be, so it is not marked.
const safe = message => Object.assign(new Error(message), { userSafe: true });
const TRANSIENT_FILE_ERRORS = new Set(["EPERM", "EBUSY", "EACCES", "EMFILE"]);
const pause = ms => new Promise(resolve => setTimeout(resolve, ms));
// How long to keep trying when the file is held for a moment (another read, a virus scan, the search indexer): up to 40 tries, waiting a little longer each time but never more than 0.2 s (about 7 s in all).
// Ten short tries (under 1 s) were not enough on Windows while the platform list was being read at the same moment as a change; see test/nexus/business-spaces-adversarial.test.js.
const TRANSIENT_RETRIES = 40;
const transientWait = attempt => Math.min(15 * attempt, 200);

// Both backends answer the same questions, all async:
//   spaceForEmail(email) -> id | "default"        spaceForNumber(number) -> id | null        exists(id) -> boolean
//   createSpace(id, {name}) · linkEmail(email, id) · linkNumber(number, id) · unlinkNumber(number) · describe() -> [{ id, name, createdAt, emails[], numbers[], settings }]
//   info(id) -> { id, name, settings, numbers[], closedAt } | null        setSettings(id, settings)  (what the business sends as; see server/businessSender.js)
//   setClosed(id, closed) (a closed business is reached by nobody: sign-in, sessions and phone numbers all stop at the front door; nothing is deleted)        removeSpace(id) (the directory entries only)
function createFileDirectory(filePath) {
  // Only "there is no file yet" means an empty directory. A file that is damaged, or cannot be read just now, must never be taken for an empty one: the next change would save over it and lose every
  // business. A read that collides with a save in progress (Windows reports EPERM/EBUSY) is simply tried again.
  const load = async () => {
    for (let attempt = 1; ; attempt += 1) {
      try { return JSON.parse(await fs.promises.readFile(filePath, "utf8")); } catch (error) {
        if (error.code === "ENOENT") return { spaces: {}, emails: {}, numbers: {} };
        if (TRANSIENT_FILE_ERRORS.has(error.code) && attempt < TRANSIENT_RETRIES) { await pause(transientWait(attempt)); continue; }
        throw Object.assign(new Error("The business directory is not available right now. Nothing was changed."), { userSafe: true, httpStatus: 503, detail: error instanceof SyntaxError ? "directory file is damaged" : "directory file could not be read" });
      }
    }
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
      for (let attempt = 1; ; attempt += 1) {
        try { await fs.promises.rename(temp, filePath); break; } catch (error) {
          if (!TRANSIENT_FILE_ERRORS.has(error.code) || attempt >= TRANSIENT_RETRIES) { await fs.promises.rm(temp, { force: true }).catch(() => {}); throw error; }
          await pause(transientWait(attempt));
        }
      }
      return result;
    });
    writing = run.catch(() => {});
    return run;
  };
  return {
    kind: "file",
    exists: async id => Object.hasOwn((await load()).spaces, id),
    spaceForEmail: async email => { const data = await load(); const key = emailKey(email); const id = Object.hasOwn(data.emails, key) ? data.emails[key] : null; return id && Object.hasOwn(data.spaces, id) ? id : DEFAULT_SPACE; },
    spaceForNumber: async number => { const data = await load(); const key = numberKey(number); const id = Object.hasOwn(data.numbers, key) ? data.numbers[key] : null; return id && Object.hasOwn(data.spaces, id) ? id : null; },
    createSpace: (id, { name = "" } = {}) => change(data => {
      if (!validSpaceId(id)) throw safe("A business id is 2 to 40 lowercase letters, digits or dashes.");
      if (Object.hasOwn(data.spaces, id)) throw safe("That business already exists.");
      data.spaces[id] = { name: cleanName(name), createdAt: new Date().toISOString() };
    }),
    linkEmail: (email, id) => change(data => {
      if (!Object.hasOwn(data.spaces, id)) throw safe("No such business.");
      const key = emailKey(email);
      if (Object.hasOwn(data.emails, key) && data.emails[key] !== id) throw safe("That email already belongs to another business.");
      data.emails[key] = id;
    }),
    linkNumber: (number, id) => change(data => {
      if (!Object.hasOwn(data.spaces, id)) throw safe("No such business.");
      const key = numberKey(number);
      if (Object.hasOwn(data.numbers, key) && data.numbers[key] !== id) throw safe("That phone number already belongs to another business.");
      data.numbers[key] = id;
    }),
    unlinkNumber: number => change(data => { delete data.numbers[numberKey(number)]; }),
    info: async id => {
      const data = await load();
      const space = Object.hasOwn(data.spaces, id) ? data.spaces[id] : null;
      return space ? { id, name: space.name || "", settings: space.settings || {}, closedAt: space.closedAt || null, numbers: Object.keys(data.numbers).filter(key => data.numbers[key] === id) } : null;
    },
    setClosed: (id, closed) => change(data => {
      if (!Object.hasOwn(data.spaces, id)) throw safe("No such business.");
      if (closed) data.spaces[id].closedAt = data.spaces[id].closedAt || new Date().toISOString(); else delete data.spaces[id].closedAt;
    }),
    removeSpace: id => change(data => {
      for (const key of Object.keys(data.emails)) if (data.emails[key] === id) delete data.emails[key];
      for (const key of Object.keys(data.numbers)) if (data.numbers[key] === id) delete data.numbers[key];
      delete data.spaces[id];
    }),
    setSettings: (id, settings) => change(data => {
      if (!Object.hasOwn(data.spaces, id)) throw safe("No such business.");
      data.spaces[id].settings = settings;
    }),
    describe: async () => {
      const data = await load();
      return Object.entries(data.spaces).map(([id, info]) => ({
        id, name: info.name || "", createdAt: info.createdAt || null, closedAt: info.closedAt || null, settings: info.settings || {},
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
    await pool.query("alter table agrinexus_business_spaces add column if not exists settings jsonb not null default '{}'::jsonb");
    await pool.query("alter table agrinexus_business_spaces add column if not exists closed_at timestamptz");
    await pool.query("create table if not exists agrinexus_business_emails (email text primary key, space_id text not null references agrinexus_business_spaces(id))");
    await pool.query("create table if not exists agrinexus_business_numbers (number text primary key, space_id text not null references agrinexus_business_spaces(id))");
  })().catch(error => { ready = null; throw error; }));
  const query = async (sql, params) => { await ensure(); return getPool().query(sql, params); };
  const claim = async (table, column, key, id, label) => {
    const result = await query(`insert into ${table} (${column}, space_id) values ($1, $2) on conflict (${column}) do update set space_id = ${table}.space_id returning space_id`, [key, id]);
    if (result.rows[0].space_id !== id) throw safe(`That ${label} already belongs to another business.`);
  };
  const requireSpace = async id => { if (!(await query("select 1 from agrinexus_business_spaces where id = $1", [id])).rowCount) throw safe("No such business."); };
  return {
    kind: "postgres",
    exists: async id => (await query("select 1 from agrinexus_business_spaces where id = $1", [id])).rowCount > 0,
    spaceForEmail: async email => (await query("select space_id from agrinexus_business_emails where email = $1", [emailKey(email)])).rows[0]?.space_id || DEFAULT_SPACE,
    spaceForNumber: async number => (await query("select space_id from agrinexus_business_numbers where number = $1", [numberKey(number)])).rows[0]?.space_id || null,
    createSpace: async (id, { name = "" } = {}) => {
      if (!validSpaceId(id)) throw safe("A business id is 2 to 40 lowercase letters, digits or dashes.");
      const result = await query("insert into agrinexus_business_spaces (id, name) values ($1, $2) on conflict (id) do nothing returning id", [id, cleanName(name)]);
      if (!result.rowCount) throw safe("That business already exists.");
    },
    linkEmail: async (email, id) => { await requireSpace(id); await claim("agrinexus_business_emails", "email", emailKey(email), id, "email"); },
    linkNumber: async (number, id) => { await requireSpace(id); await claim("agrinexus_business_numbers", "number", numberKey(number), id, "phone number"); },
    unlinkNumber: async number => { await query("delete from agrinexus_business_numbers where number = $1", [numberKey(number)]); },
    info: async id => {
      const space = (await query("select id, name, settings, closed_at from agrinexus_business_spaces where id = $1", [id])).rows[0];
      if (!space) return null;
      const numbers = (await query("select number from agrinexus_business_numbers where space_id = $1 order by number", [id])).rows.map(row => row.number);
      return { id, name: space.name || "", settings: space.settings || {}, closedAt: space.closed_at ? new Date(space.closed_at).toISOString() : null, numbers };
    },
    setClosed: async (id, closed) => {
      const result = await query(closed ? "update agrinexus_business_spaces set closed_at = coalesce(closed_at, now()) where id = $1 returning id" : "update agrinexus_business_spaces set closed_at = null where id = $1 returning id", [id]);
      if (!result.rowCount) throw safe("No such business.");
    },
    removeSpace: async id => {
      await query("delete from agrinexus_business_emails where space_id = $1", [id]);
      await query("delete from agrinexus_business_numbers where space_id = $1", [id]);
      await query("delete from agrinexus_business_spaces where id = $1", [id]);
    },
    setSettings: async (id, settings) => {
      const result = await query("update agrinexus_business_spaces set settings = $2::jsonb where id = $1 returning id", [id, JSON.stringify(settings || {})]);
      if (!result.rowCount) throw safe("No such business.");
    },
    describe: async () => {
      const spaces = (await query("select id, name, settings, created_at, closed_at from agrinexus_business_spaces order by created_at", [])).rows;
      const emails = (await query("select email, space_id from agrinexus_business_emails", [])).rows;
      const numbers = (await query("select number, space_id from agrinexus_business_numbers", [])).rows;
      return spaces.map(row => ({
        id: row.id, name: row.name || "", createdAt: row.created_at ? new Date(row.created_at).toISOString() : null, closedAt: row.closed_at ? new Date(row.closed_at).toISOString() : null, settings: row.settings || {},
        emails: emails.filter(item => item.space_id === row.id).map(item => item.email),
        numbers: numbers.filter(item => item.space_id === row.id).map(item => item.number)
      }));
    }
  };
}

// A new space's profile: the SAME shape as the default profile (the app expects its lists and sections to exist), with none of its data. Lists are emptied, numbers are zero (no pretend wallet balance),
// text is blank except the few settings that point into the reference lists, and yes/no switches are kept. Always built from the seed file that ships with the app, never from live data.
const KEEP_TEXT = new Set(["activeCountryId", "activeRouteId", "activeCheckpoint", "routeStage", "activeCourseId", "learningPath", "careerTrack", "eligibility", "mentor", "candidateStage",
  "language", "bandwidth", "status", "operatingMode", "activeAudience", "activeMission"]);
function neutralProfile(source) {
  const walk = (value, key) => {
    if (Array.isArray(value)) return [];
    if (value && typeof value === "object") return Object.fromEntries(Object.entries(value).map(([name, inner]) => [name, walk(inner, name)]));
    if (typeof value === "number") return 0;
    if (typeof value === "string") return KEEP_TEXT.has(key) ? value : "";
    return value;
  };
  return walk(source && typeof source === "object" ? source : {}, "");
}

// A new space's record. Deliberately NOT a copy of the default record (that holds the demo accounts and demo data): the reference lists the app needs, an empty profile of the usual shape, and the one
// first account. No demo logins are ever added to a space (see api()).
function newSpaceRecord(template, { adminAccount }) {
  return {
    users: [adminAccount],
    countries: template.countries || [], routes: template.routes || [], courses: template.courses || [], roles: template.roles || [],
    products: template.products || [], providers: template.providers || [],
    profile: neutralProfile(template.profile)
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
  DEFAULT_SPACE, DEFAULT_TENANT_ID, tenantIdFor, validSpaceId, currentSpace, currentContext, runInSpace, enterSpace, spaceDbPath, createFileDirectory, createPostgresDirectory, newSpaceRecord, neutralProfile,
  platformOwnerEmails, isPlatformOwner, emailKey, numberKey, cleanName
});
