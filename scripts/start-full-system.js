const fs = require("fs");
const path = require("path");
const { spawn } = require("child_process");

const root = path.join(__dirname, "..");
const node = process.execPath;

function start(name, script, outFile, errFile) {
  const out = fs.openSync(path.join(root, outFile), "a");
  const err = fs.openSync(path.join(root, errFile), "a");
  const child = spawn(node, [script], {
    cwd: root,
    detached: true,
    env: { ...process.env, HOST: "127.0.0.1", PROVIDER_ENGINE_HOST: "127.0.0.1" },
    stdio: ["ignore", out, err],
    windowsHide: true
  });
  child.unref();
  return { name, pid: child.pid };
}

const provider = start("provider-engines", "scripts/provider-engines.js", "provider-engines.out.log", "provider-engines.err.log");
setTimeout(() => {
  const app = start("app", "server.js", "server.out.log", "server.err.log");
  console.log(JSON.stringify({
    ok: true,
    services: [provider, app],
    appUrl: "http://localhost:4173",
    providerUrl: "http://localhost:4280"
  }, null, 2));
}, 1500);
