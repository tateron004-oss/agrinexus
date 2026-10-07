"use strict";

// Backup and restore of the app's own record: the default space and every business space, with the business directory (which email, which phone number, which settings belong to which business).
//
// Why this exists: `npm run db:backup` copies the engine's tables (tasks, memory, reminders, ...), which are created by migrations. The app's main record (people, profiles, health, money, phone lists) lives in
// `agrinexus_app_state`, and the business directory in `agrinexus_business_*`: tables the app creates for itself, which the migration-driven backup cannot see. This covers them. A backup holds password
// hashes and personal records: keep the file private (the scripts write it readable by its owner only).
const fs = require("node:fs");
const path = require("node:path");
const businessSpaces = require("./businessSpaces.js");

const FORMAT = "kyro-state-backup-v1";
const DEFAULT = businessSpaces.DEFAULT_SPACE;

// Where the state lives, resolved the same way server.js does.
function resolveStateConfig(env = process.env, root = path.resolve(__dirname, "..")) {
  const store = env.AGRINEXUS_STATE_STORE || (env.DATABASE_URL ? "postgres" : "json");
  const dataDir = env.AGRINEXUS_DATA_DIR || root;
  const dbPath = env.AGRINEXUS_DB_PATH || path.join(dataDir, "db.json");
  const directoryPath = env.AGRINEXUS_SPACES_PATH || path.join(path.dirname(dbPath), "spaces-directory.json");
  return { store, dbPath, directoryPath };
}

function createFileStore({ dbPath, directoryPath }) {
  const directory = businessSpaces.createFileDirectory(directoryPath);
  return {
    kind: "json", directory,
    async readRecord(id) { try { return JSON.parse(await fs.promises.readFile(businessSpaces.spaceDbPath(dbPath, id), "utf8")); } catch { return null; } },
    async recordExists(id) { return fs.existsSync(businessSpaces.spaceDbPath(dbPath, id)); },
    async writeRecord(id, record) {
      const target = businessSpaces.spaceDbPath(dbPath, id);
      await fs.promises.mkdir(path.dirname(target), { recursive: true });
      const temp = `${target}.tmp-${process.pid}-${Date.now()}`;
      await fs.promises.writeFile(temp, JSON.stringify(record, null, 2) + "\n");
      await fs.promises.rename(temp, target);
    }
  };
}

function createPostgresStore(pool) {
  const directory = businessSpaces.createPostgresDirectory(() => pool);
  return {
    kind: "postgres", directory,
    async readRecord(id) { return (await pool.query("select state from agrinexus_app_state where id = $1", [id])).rows[0]?.state || null; },
    async recordExists(id) { return (await pool.query("select 1 from agrinexus_app_state where id = $1", [id])).rowCount > 0; },
    async writeRecord(id, record) {
      await pool.query(`insert into agrinexus_app_state (id, state) values ($1, $2::jsonb)
        on conflict (id) do update set state = excluded.state, updated_at = now()`, [id, JSON.stringify(record)]);
    }
  };
}

const looksLikeRecord = record => Boolean(record) && typeof record === "object" && !Array.isArray(record) && Array.isArray(record.users);

function validateStateBackup(backup) {
  if (backup?.format !== FORMAT) throw new Error("Unsupported backup format.");
  if (!Array.isArray(backup.spaces) || !backup.spaces.length) throw new Error("The backup holds no spaces.");
  const seen = new Set();
  for (const space of backup.spaces) {
    const id = space?.id;
    if (id !== DEFAULT && !businessSpaces.validSpaceId(id)) throw new Error(`The backup names a space with an invalid id (${JSON.stringify(id)}).`);
    if (seen.has(id)) throw new Error(`The backup holds the space ${id} twice.`);
    seen.add(id);
    if (!looksLikeRecord(space.record)) throw new Error(`The record for ${id} is missing or damaged.`);
    if (id !== DEFAULT) {
      if (!Array.isArray(space.emails) || !Array.isArray(space.numbers)) throw new Error(`The directory entries for ${id} are missing.`);
      if (space.settings && typeof space.settings !== "object") throw new Error(`The settings for ${id} are damaged.`);
    }
  }
  return true;
}

// -> the backup object. { business } limits it to one business (its record and its directory entries); otherwise the default space and every business.
async function collectState(store, { business, now = new Date(), releaseSha = null } = {}) {
  const described = await store.directory.describe();
  const wanted = business ? described.filter(item => item.id === business) : described;
  if (business && !wanted.length) throw new Error(`There is no business ${business}.`);
  const spaces = [];
  if (!business) {
    const record = await store.readRecord(DEFAULT);
    if (!looksLikeRecord(record)) throw new Error("The default record could not be read.");
    spaces.push({ id: DEFAULT, record });
  }
  for (const item of wanted) {
    const record = await store.readRecord(item.id);
    if (!looksLikeRecord(record)) throw new Error(`The record for ${item.id} could not be read.`);
    spaces.push({ id: item.id, name: item.name, createdAt: item.createdAt, closedAt: item.closedAt || null, settings: item.settings || {}, emails: item.emails, numbers: item.numbers, record });
  }
  const backup = { format: FORMAT, createdAt: now.toISOString(), releaseSha, store: store.kind, scope: business ? `business:${business}` : "all", spaces };
  validateStateBackup(backup);
  return backup;
}

// Puts a backup back. Never touches the default record unless includeDefault is true. A business that already exists is only overwritten with replace: true. Returns what it did.
async function applyState(store, backup, { business, includeDefault = false, replace = false } = {}) {
  validateStateBackup(backup);
  const chosen = backup.spaces.filter(space => (business ? space.id === business : space.id !== DEFAULT || includeDefault));
  if (business && !chosen.length) throw new Error(`The backup has no business ${business}.`);
  if (business === DEFAULT || (business && !businessSpaces.validSpaceId(business))) throw new Error("Choose a business id, not the default record.");
  const summary = { restored: [], skipped: [] };
  for (const space of chosen) {
    if (space.id === DEFAULT) { await store.writeRecord(DEFAULT, space.record); summary.restored.push(DEFAULT); continue; }
    const exists = await store.recordExists(space.id) || await store.directory.exists(space.id);
    if (exists && !replace) { summary.skipped.push({ id: space.id, reason: "already exists (use --replace to overwrite it)" }); continue; }
    if (!(await store.directory.exists(space.id))) await store.directory.createSpace(space.id, { name: space.name || "" });
    await store.writeRecord(space.id, space.record);
    await store.directory.setSettings(space.id, space.settings || {});
    await store.directory.setClosed(space.id, Boolean(space.closedAt));
    for (const email of space.emails) await store.directory.linkEmail(email, space.id);
    for (const number of space.numbers) await store.directory.linkNumber(number, space.id);
    summary.restored.push(space.id);
  }
  return summary;
}

module.exports = Object.freeze({ FORMAT, resolveStateConfig, createFileStore, createPostgresStore, validateStateBackup, collectState, applyState });
