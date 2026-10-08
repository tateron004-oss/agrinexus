// Preload for the in-memory database harness ONLY (never for a real server). PGlite behind pglite-socket cannot interleave two connections' messages: the pg driver then throws "Received
// unexpected parseComplete message from backend" and the process dies. So every query on every pooled client is sent one at a time, process-wide. A real PostgreSQL does not need this.
// Every query error is also written to the server log as "[pgerr]" so that SQL a real database would refuse, but that the code catches and carries on from, cannot hide.
const { createRequire } = require("node:module");
const path = require("node:path");
const pg = createRequire(path.join(process.env.ROOT, "package.json"))("pg");
const original = pg.Client.prototype.query;
const describe = args => { const first = args[0]; const text = typeof first === "string" ? first : first && first.text; return String(text || "").replace(/\s+/g, " ").slice(0, 160); };
const logError = (args, error) => {
  if (!error) return;
  if (/duplicate key|unique constraint|could not serialize/i.test(String(error.message))) console.error("[pgerr-benign]", String(error.message).slice(0, 100));
  else console.error("[pgerr]", String(error.message).slice(0, 160), "||", describe(args));
};
let chain = Promise.resolve();
pg.Client.prototype.query = function (...args) {
  const last = args[args.length - 1];
  if (args[0] && typeof args[0].submit === "function") return original.apply(this, args);
  if (typeof last === "function") {
    const callback = last; const rest = args.slice(0, -1);
    chain = chain.then(() => new Promise(resolve => {
      try { original.apply(this, [...rest, (...done) => { resolve(); logError(args, done[0]); callback(...done); }]); }
      catch (error) { resolve(); callback(error); }
    }));
    return undefined;
  }
  const run = () => original.apply(this, args).catch(error => { logError(args, error); throw error; });
  const result = chain.then(run, run);
  chain = result.then(() => undefined, () => undefined);
  return result;
};
process.on("uncaughtException", error => {
  if (/unexpected parseComplete|Connection terminated|read ECONNRESET/.test(String(error && error.message))) { console.error("[harness] swallowed driver error:", error.message); return; }
  console.error(error); process.exit(1);
});
