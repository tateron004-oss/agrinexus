const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const os = require("node:os");

const root = path.resolve(__dirname, "..");
const serverSource = fs.readFileSync(path.join(root, "server.js"), "utf8");
const pkg = JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8"));
const qaSuite = fs.readFileSync(path.join(root, "scripts", "qa-suite.js"), "utf8");
const {
  isPlaceholderEnvValue,
  isUsableEnvValue,
  loadLocalEnvFiles,
  resolveLocalEnvPaths
} = require("../server/local-env-loader.js");

const LOCAL_FIXTURE = "local-valid-fixture";
const PROCESS_FIXTURE = "process-valid-fixture";

function withTempRoot(files, env = {}) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "nexus-env-loader-"));
  try {
    Object.entries(files).forEach(([name, content]) => fs.writeFileSync(path.join(dir, name), content));
    const report = loadLocalEnvFiles(dir, env);
    return { env, report, paths: resolveLocalEnvPaths(dir) };
  } finally {
    fs.rmSync(dir, { recursive: true, force: true });
  }
}

assert(serverSource.includes("const APP_ROOT = __dirname;"), "server resolves env files from authoritative application root");
assert(serverSource.includes("loadLocalEnvFiles(APP_ROOT)"), "server loads local env before runtime configuration");
assert(serverSource.indexOf("loadLocalEnvFiles(APP_ROOT)") < serverSource.indexOf("const PORT ="), "env initialization precedes server configuration");

let result = withTempRoot({});
assert.equal(result.env.OPENAI_API_KEY, undefined, "missing file keeps assignment absent");
assert(result.paths.every(candidate => path.isAbsolute(candidate)), "all discovery paths are absolute");

result = withTempRoot({ ".env.txt": `OPENAI_API_KEY=${LOCAL_FIXTURE}\n` });
assert.equal(result.env.OPENAI_API_KEY, LOCAL_FIXTURE, ".env.txt naming mistake is recovered locally");

result = withTempRoot({ ".env": "OPENAI_API_KEY=\n" });
assert.equal(result.env.OPENAI_API_KEY, undefined, "blank assignment is rejected");

result = withTempRoot({ ".env": "OPENAI_API_KEY=replace-with-real-key\n" });
assert.equal(result.env.OPENAI_API_KEY, undefined, "placeholder assignment is rejected");
assert.equal(isPlaceholderEnvValue("your-api-key-here"), true, "common placeholder text is recognized");
assert.equal(isUsableEnvValue("your-api-key-here"), false, "placeholder is never configured");

result = withTempRoot({ ".env": `OPENAI_API_KEY=${LOCAL_FIXTURE}\n` });
assert.equal(result.env.OPENAI_API_KEY, LOCAL_FIXTURE, "valid nonblank local assignment loads");

result = withTempRoot({ ".env": `OPENAI_API_KEY=${LOCAL_FIXTURE}\n` }, { OPENAI_API_KEY: "" });
assert.equal(result.env.OPENAI_API_KEY, LOCAL_FIXTURE, "blank process variable does not block valid local assignment");

result = withTempRoot({ ".env": `OPENAI_API_KEY=${LOCAL_FIXTURE}\n` }, { OPENAI_API_KEY: PROCESS_FIXTURE });
assert.equal(result.env.OPENAI_API_KEY, PROCESS_FIXTURE, "nonblank process variable keeps precedence");

const outsideCwd = fs.mkdtempSync(path.join(os.tmpdir(), "nexus-env-cwd-"));
const appRoot = fs.mkdtempSync(path.join(os.tmpdir(), "nexus-env-root-"));
try {
  fs.writeFileSync(path.join(appRoot, ".env"), `OPENAI_API_KEY=${LOCAL_FIXTURE}\n`);
  const previousCwd = process.cwd();
  process.chdir(outsideCwd);
  try {
    const env = {};
    loadLocalEnvFiles(appRoot, env);
    assert.equal(env.OPENAI_API_KEY, LOCAL_FIXTURE, "different startup cwd still uses application root");
  } finally {
    process.chdir(previousCwd);
  }
} finally {
  fs.rmSync(appRoot, { recursive: true, force: true });
  fs.rmSync(outsideCwd, { recursive: true, force: true });
}

const publicReport = withTempRoot({ ".env": `OPENAI_API_KEY=${LOCAL_FIXTURE}\n` }).report;
const serialized = JSON.stringify(publicReport);
assert(!serialized.includes(LOCAL_FIXTURE), "loader report never exposes environment values");
assert.deepEqual(Object.keys(publicReport[0]).sort(), ["applied", "exists", "filePath", "skipped"], "loader report contains metadata only");
assert.equal(pkg.scripts["qa:nexus-local-env-loader"], "node scripts/nexus-local-env-loader-qa.js", "package alias exists");
assert(qaSuite.includes("scripts/nexus-local-env-loader-qa.js"), "qa-suite includes local env loader QA");

console.log(JSON.stringify({
  ok: true,
  suite: "nexus-local-env-loader",
  cases: [
    "missing file",
    ".env.txt naming mistake",
    "blank assignment",
    "placeholder assignment",
    "valid nonblank local assignment",
    "blank process variable plus valid local assignment",
    "nonblank process variable precedence",
    "server started from a different working directory",
    "secret redaction"
  ],
  noSecretValues: true
}, null, 2));
