// Recovered from af93095c and adapted to the complete current migration chain.
const fs = require('node:fs');
const path = require('node:path');
const migrationDir = path.join(__dirname, '../../foundation/migrations');
const MIGRATIONS = Object.freeze(fs.readdirSync(migrationDir).filter(name => /^\d+.*\.sql$/.test(name)).sort());
const BACKUP_TABLES = Object.freeze([...new Set(['schema_migrations', ...MIGRATIONS.flatMap(name =>
  [...fs.readFileSync(path.join(migrationDir, name), 'utf8').matchAll(/create table(?: if not exists)?\s+(?:public\.)?([a-z_][a-z0-9_]*)/gi)].map(match => match[1]))])]);
const BACKUP_FORMAT = 'nexus-postgres-backup-v2';
function validateBackup(backup) {
  if (backup?.format !== BACKUP_FORMAT) throw new Error('Unsupported backup format.');
  const names = backup?.migrationIdentity?.applied;
  if (!Array.isArray(names) || JSON.stringify([...names].sort()) !== JSON.stringify(MIGRATIONS)) throw new Error('Backup migration identity does not match this source version.');
  if (!backup.tables || typeof backup.tables !== 'object') throw new Error('Backup tables are missing.');
  if (Object.keys(backup.tables).length !== BACKUP_TABLES.length || BACKUP_TABLES.some(name => !Array.isArray(backup.tables[name]))) throw new Error('Backup is incomplete or contains unexpected tables.');
  if (JSON.stringify(backup.tables.schema_migrations.map(row => row.name).sort()) !== JSON.stringify(MIGRATIONS)) throw new Error('Backup migration records disagree with its identity.');
  for (const rows of Object.values(backup.tables)) if (rows.some(row => !row || typeof row !== 'object' || Array.isArray(row))) throw new Error('Backup row is invalid.');
  return true;
}
function restorationOrder(dependencies) {
  const pending = new Set(BACKUP_TABLES), ordered = [];
  while (pending.size) {
    const ready = [...pending].filter(table => !dependencies.some(edge => edge.child === table && edge.parent !== table && pending.has(edge.parent)));
    if (!ready.length) throw new Error('Cyclic database dependencies require an explicit recovery plan.');
    for (const table of ready) { pending.delete(table); ordered.push(table); }
  }
  return ordered;
}
module.exports = Object.freeze({ BACKUP_TABLES, BACKUP_FORMAT, MIGRATIONS, validateBackup, restorationOrder });
