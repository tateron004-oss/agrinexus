// Boots the REAL server (server.js) against an in-memory PostgreSQL (PGlite behind a TCP socket) with every repository migration applied, the authoritative runtime active, the same tool catalog the
// release candidate uses, and a local stand-in for the AI model. Stays up until it is stopped. See docs/REAL_RUNTIME_VERIFICATION.md.
//
//   RR_PORT      port of the app (default 15731); the database is on RR_PG_PORT (default RR_PORT - 10000), a SQL endpoint on RR_PORT + 1000 and a one-request-at-a-time front door on RR_PORT + 2000
//   RR_COMMIT    a 40-character commit to stamp as the release (RENDER_GIT_COMMIT), as the deploy workflow does
//   RR_STUB_OTHER=reply   make the stand-in model answer legacy (non-planner) AI calls with text instead of failing them
//   (create the file <RR_OUT>/model-outage to make every model call fail like a provider outage; delete it to bring the model back -- no restart needed. STUB_MODEL_FAIL=1 does the same from the start.)
//   RR_NO_PROVIDER_CATALOG=1 / RR_NO_CUTOVER=1   leave out the canonical tool catalog / the "workspace is authoritative" rows
//   RR_ENV       a JSON object of extra environment for the server
import { PGlite } from "@electric-sql/pglite";
import { pgcrypto } from "@electric-sql/pglite/contrib/pgcrypto";
import { vector } from "@electric-sql/pglite-pgvector";
import { PGLiteSocketServer } from "@electric-sql/pglite-socket";
import { spawn } from "node:child_process";
import { createRequire } from "node:module";
import http from "node:http";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { HERE, ROOT, OUT } from "./common.mjs";

const PORT_APP = Number(process.env.RR_PORT || 15731);
const PORT_PG = Number(process.env.RR_PG_PORT || PORT_APP - 10000);
const work = fs.mkdtempSync(path.join(os.tmpdir(), "kyro-rr-"));
fs.mkdirSync(OUT, { recursive: true });
fs.rmSync(path.join(OUT, "ports.json"), { force: true });
fs.copyFileSync(path.join(ROOT, "db.json"), path.join(work, "db.json"));
const requireFromRepo = createRequire(path.join(ROOT, "package.json"));

// ---- the database: every migration, vector extension included
const db = new PGlite({ extensions: { pgcrypto, vector } });
const migrations = path.join(ROOT, "foundation", "migrations");
const names = fs.readdirSync(migrations).filter(name => /^\d+.*\.sql$/.test(name)).sort();
for (const name of names) await db.exec(fs.readFileSync(path.join(migrations, name), "utf8"));
await db.exec("create table if not exists schema_migrations (name text primary key, applied_at timestamptz default now())");
for (const name of names) await db.query("insert into schema_migrations (name) values ($1) on conflict do nothing", [name]);
// In production a workspace is switched to "authoritative" by the acceptance/activation pipeline; here every registered workspace is, directly.
if (process.env.RR_NO_CUTOVER !== "1") {
  for (const app of requireFromRepo("./nexus/apps/default-manifests.js").defaultApplicationManifests()) {
    await db.query("insert into nexus_workspace_migrations(workspace_id,state,proofs,release_sha,activated_at) values ($1,'authoritative','{}','local-harness',now()) on conflict (workspace_id) do nothing", [app.applicationId]);
  }
}
const socket = new PGLiteSocketServer({ db, port: PORT_PG, host: "127.0.0.1", maxConnections: 20 });
await socket.start();

// ---- the server
const preload = file => `--require ${path.join(HERE, file).replace(/\\/g, "/")}`;
const env = {
  ...process.env, ROOT, PORT: String(PORT_APP), PGUSER: "postgres", DATABASE_URL: `postgres://127.0.0.1:${PORT_PG}/postgres`, DATABASE_SSL: "false",
  AGRINEXUS_STATE_STORE: "postgres", AGRINEXUS_DB_PATH: path.join(work, "db.json"), AGRINEXUS_SPACES_PATH: path.join(work, "spaces.json"),
  SESSION_SECRET: "local-real-runtime-session-secret-0123456789", OPENAI_API_KEY: "local-stand-in-key", NEXUS_DISABLE_LOCAL_ENV_FILES: "true",
  NEXUS_FILE_STORAGE_DIR: path.join(work, "uploads"), AGRINEXUS_TRUST_PROXY: "true", AGRINEXUS_AI_AGENT_RATE_LIMIT_PER_WINDOW: "100000", AGRINEXUS_RATE_LIMIT_PER_WINDOW: "100000",
  NEXUS_ACCEPTANCE_TOKEN: "candidate-only-token", STUB_LOG: path.join(OUT, "stub.log"), STUB_OTHER: process.env.RR_STUB_OTHER || "", STUB_FAIL_FILE: path.join(OUT, "model-outage"),
  NODE_OPTIONS: `${preload("stub-openai.cjs")} ${preload("pg-serialize.cjs")}`,
  ...(process.env.RR_ENV ? JSON.parse(process.env.RR_ENV) : {})
};
if (process.env.RR_NO_PROVIDER_CATALOG !== "1") {
  env.NEXUS_TOOL_PROVIDERS_JSON = JSON.stringify(requireFromRepo("./scripts/nexus-render-release-controller.js").canonicalToolProviders("candidate-provider-receipt-secret-0000000000000000", "https://provider.example"));
}
if (process.env.RR_COMMIT) env.RENDER_GIT_COMMIT = process.env.RR_COMMIT;
fs.writeFileSync(env.STUB_LOG, "");

let server = null; let stopping = false; let respawns = 0;
const log = fs.createWriteStream(path.join(OUT, "app.log"));
function startServer() {
  server = spawn(process.execPath, ["server.js"], { cwd: ROOT, env, stdio: ["ignore", "pipe", "pipe"], windowsHide: true });
  server.stdout.pipe(log, { end: false }); server.stderr.pipe(log, { end: false });
  server.on("exit", code => {
    log.write(`\n[harness] server exited code=${code}\n`);
    if (!stopping) { respawns += 1; fs.writeFileSync(path.join(OUT, "respawns.txt"), String(respawns)); setTimeout(startServer, 400); }
  });
}
startServer();

// ---- two small doors for the scripts: SQL, and a front door that lets one request through at a time
http.createServer((req, res) => {
  let body = ""; req.on("data", chunk => { body += chunk; });
  req.on("end", async () => {
    try { const { sql, params } = JSON.parse(body); res.end(JSON.stringify((await db.query(sql, params || [])).rows)); }
    catch (error) { res.statusCode = 500; res.end(JSON.stringify({ error: String(error.message) })); }
  });
}).listen(PORT_APP + 1000, "127.0.0.1");
// PGlite is ONE session shared by every pooled connection, so overlapping transactions from overlapping requests interfere with each other (a real PostgreSQL isolates them). A caller that fires
// many requests at once (scripts/nexus-run-production-evidence-probes.js) goes through here; everything that asks one thing at a time can use the app port directly.
let queue = Promise.resolve();
http.createServer((req, res) => {
  const chunks = []; req.on("data", chunk => chunks.push(chunk));
  req.on("end", () => {
    queue = queue.then(() => new Promise(resolve => {
      const upstream = http.request({ host: "127.0.0.1", port: PORT_APP, method: req.method, path: req.url, headers: req.headers }, answer => { res.writeHead(answer.statusCode, answer.headers); answer.pipe(res); answer.on("end", resolve); answer.on("error", resolve); });
      upstream.on("error", () => { try { res.statusCode = 502; res.end("front door error"); } catch { /* gone */ } resolve(); });
      upstream.setTimeout(120000, () => upstream.destroy());
      upstream.end(Buffer.concat(chunks));
    }));
  });
}).listen(PORT_APP + 2000, "127.0.0.1");

fs.writeFileSync(path.join(OUT, "ports.json"), JSON.stringify({ app: PORT_APP, pg: PORT_PG, sql: PORT_APP + 1000, serial: PORT_APP + 2000 }));
console.log(`harness up: app ${PORT_APP}, database ${PORT_PG}, ${names.length} migrations, output in ${OUT}`);
const stop = () => { stopping = true; try { server?.kill(); } catch { /* gone */ } setTimeout(() => process.exit(0), 300); };
process.on("SIGTERM", stop); process.on("SIGINT", stop);
