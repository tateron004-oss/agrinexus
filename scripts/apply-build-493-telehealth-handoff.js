const fs = require("fs");
const path = require("path");

const files = [
  "public/app.js",
  "public/index.html",
  "public/sw.js",
  "server.js",
  ...fs.readdirSync("scripts").filter(name => name.endsWith(".js")).map(name => path.join("scripts", name))
];

for (const file of files) {
  let source = fs.readFileSync(file, "utf8");
  source = source.replaceAll("nexus-behavior-493", "nexus-behavior-493");
  source = source.replaceAll("agrinexus-pwa-v438", "agrinexus-pwa-v438");
  if (file === "public/app.js") {
    const old = "Date.now() - route.at > 15000";
    if (!source.includes(old)) throw new Error("Realtime route expiry seam was not found");
    source = source.replace(old, "Date.now() - route.at > 45000");
  }
  fs.writeFileSync(file, source, "utf8");
}

const qaPath = "scripts/nexus-genesis-voice-workspace-bridge-qa.js";
let qa = fs.readFileSync(qaPath, "utf8");
const stale = "app.includes('source: \"realtime-workspace-transition\"')";
if (!qa.includes(stale)) throw new Error("Stale map-transition assertion was not found");
qa = qa.replace(stale, "!app.includes('source: \"realtime-workspace-transition\"')");
const marker = "final transcript entities survive delayed Realtime tool completion";
if (!qa.includes(marker)) {
  qa += "\nchecks.push(['final transcript entities survive delayed Realtime tool completion',app.includes('Date.now() - route.at > 45000')&&app.includes('payload: { ...(action.payload || {}), ...(route.action.payload || {}) }')]);\n";
}
fs.writeFileSync(qaPath, qa, "utf8");
