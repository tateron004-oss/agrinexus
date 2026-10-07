"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

// node --test runs test files in parallel, and two people, CI jobs or agents can run suites on the same machine at the same time.
// Two files that start a server on the same fixed port collide: the loser gets ECONNREFUSED or talks to the wrong server, and a test
// fails for no reason of its own (it happened to 4563/4564, and again to 15357 in the business-spaces tests).
// The fix is to ask the operating system for a free port (test/helpers/free-port.js) rather than choose a number. This guard
// finds any fixed port a test file uses for a server and fails (1) if two files use the same one and (2) if a file that starts
// server.js uses a fixed one at all, so a copy-pasted number cannot creep back in.
const testDir = __dirname;
const files = fs.readdirSync(testDir).filter(name => name.endsWith(".test.js") && name !== path.basename(__filename));

// Where a test file writes down a fixed port: a variable, the PORT setting for a server, a listen() call, or a local URL.
const FIXED_PORT_PATTERNS = [
  /\b(?:const|let|var)\s+\w*[pP]ort\w*\s*=\s*(\d{4,5})\b/g,
  /\bPORT\s*[:=]\s*(?:String\(\s*)?["'`]?(\d{4,5})\b/g,
  /\.listen\(\s*(\d{4,5})\b/g,
  /(?:localhost|127\.0\.0\.1):(\d{4,5})\b/g
];

function fixedPortsIn(source) {
  const found = new Set();
  for (const pattern of FIXED_PORT_PATTERNS) for (const match of source.matchAll(pattern)) found.add(match[1]);
  return found;
}
const startsServer = source => /spawn\(\s*process\.execPath\s*,\s*\[\s*["']server\.js["']/.test(source) || /\bstartServer\s*\(/.test(source);

test("no two test files use the same fixed port for a server", () => {
  const owners = new Map();
  for (const file of files) {
    for (const port of fixedPortsIn(fs.readFileSync(path.join(testDir, file), "utf8"))) {
      if (!owners.has(port)) owners.set(port, new Set());
      owners.get(port).add(file);
    }
  }
  const duplicates = [...owners].filter(([, set]) => set.size > 1).map(([port, set]) => `${port}: ${[...set].join(" and ")}`);
  assert.deepEqual(duplicates, [], "each test server needs its own port, or better, a free one from test/helpers/free-port.js");
});

test("a test file that starts server.js asks for a free port instead of fixing one", () => {
  const fixed = [];
  let startsCount = 0;
  for (const file of files) {
    const source = fs.readFileSync(path.join(testDir, file), "utf8");
    if (!startsServer(source)) continue;
    startsCount += 1;
    const ports = [...fixedPortsIn(source)];
    if (ports.length) fixed.push(`${file}: ${ports.join(", ")}`);
  }
  assert.ok(startsCount > 100, `the scan is actually finding the server-starting tests (${startsCount})`);
  assert.deepEqual(fixed, [], "use freePortSync()/freePort()/startServer() from test/helpers/free-port.js, not a fixed number");
});

test("the free-port helper hands out different, usable ports", async () => {
  const { freePort, freePortSync } = require("../helpers/free-port.js");
  const net = require("node:net");
  const asked = [await freePort(), await freePort()];
  const picked = Array.from({ length: 50 }, () => freePortSync());
  const ports = [...asked, ...picked];
  assert.equal(new Set(ports).size, ports.length, "no number is handed out twice in one run");
  for (const port of picked) assert.ok(port >= 20000 && port < 30000, `${port} is outside the range the operating system keeps for itself`);
  // A second process asking at the same time is never given the same numbers (the claims are shared through the temp folder).
  const { execFileSync } = require("node:child_process");
  const other = JSON.parse(execFileSync(process.execPath, ["-e", `const h=require(${JSON.stringify(require.resolve("../helpers/free-port.js"))});const a=[];for(let i=0;i<50;i++)a.push(h.freePortSync());console.log(JSON.stringify(a))`], { encoding: "utf8" }));
  assert.deepEqual(other.filter(port => picked.includes(port)), [], "two processes never share a number");
  for (const port of asked) {
    assert.ok(Number.isInteger(port) && port > 1023 && port < 65536, String(port));
    await new Promise((resolve, reject) => { const probe = net.createServer(); probe.once("error", reject); probe.listen(port, "127.0.0.1", () => probe.close(resolve)); });
  }
});
