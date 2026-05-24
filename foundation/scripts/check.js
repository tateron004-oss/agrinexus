const fs = require("fs");
const path = require("path");
const { describeFoundation } = require("../src/app");
const { readConfig, validateConfig } = require("../src/config");
const { listMigrationFiles } = require("../src/runtime/migrations");
const { hashPasswordForDev, verifyPasswordForDev } = require("../src/modules/auth/passwords");
const { createSessionToken, verifySessionToken } = require("../src/modules/auth/sessions");

const root = path.join(__dirname, "..");
const srcDir = path.join(root, "src");

function jsFiles(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return jsFiles(full);
    return entry.name.endsWith(".js") ? [full] : [];
  });
}

for (const file of jsFiles(srcDir)) {
  // Syntax-only check without spawning child processes, which can be blocked by some Windows sandboxes.
  new Function(fs.readFileSync(file, "utf8"));
}

const foundation = describeFoundation();
const expectedModules = ["auth", "core", "learning", "workforce", "health", "trade", "ai", "maps", "system", "admin"];
const moduleNames = foundation.modules.map(module => module.name);
const missingModules = expectedModules.filter(name => !moduleNames.includes(name));
if (missingModules.length) throw new Error(`Missing foundation modules: ${missingModules.join(", ")}`);

const config = readConfig();
const warnings = validateConfig(config);
const migrations = listMigrationFiles(config.database.migrationsDir);
if (migrations.length < 2) throw new Error("Expected initial and seed migrations.");

const passwordHash = hashPasswordForDev("Prototype2026!", { pepper: "test", salt: "1234567890abcdef" });
if (!verifyPasswordForDev("Prototype2026!", passwordHash, { pepper: "test" })) {
  throw new Error("Password verification failed.");
}

const token = createSessionToken({ userId: "u1", tenantId: "t1", ttlMinutes: 5, secret: "secret" });
const session = verifySessionToken(token, "secret");
if (!session || session.sub !== "u1" || session.tid !== "t1") {
  throw new Error("Session verification failed.");
}

console.log("Foundation check passed");
if (warnings.length) {
  console.log("Warnings:");
  for (const warning of warnings) console.log(`- ${warning}`);
}
