const assert = require("node:assert/strict");
const fs = require("node:fs");

const source = fs.readFileSync("public/browser-action-controller.js", "utf8");

[
  "visualExperienceIntent",
  "openVisualExperience",
  "openReliableMap",
  "openAgricultureHelp",
  "openMaizeDiseaseImages",
  "openResumeBuilder",
  "openSourceWebsites"
].forEach(name => assert.match(source, new RegExp(`function ${name}\\b`), `${name} must exist`));

[
  "Nairobi", "Mombasa", "Kenya", "OpenStreetMap", "reset-safe",
  "Agriculture Help", "Plantwise Knowledge Bank", "Kenya Agricultural & Livestock Research Organization",
  "commons.wikimedia.org/w/api.php", "Possible Maize Disease Pictures", "not a diagnosis",
  "Résumé Builder", "Print / Save PDF", "Download résumé",
  "Websites and Sources", "Open exact website", "Close and keep listening"
].forEach(value => assert.ok(source.includes(value), `visual experience must include ${value}`));

assert.match(source, /if \(weatherRequest\(value\)\) return "";/, "weather commands must not also open the map");
assert.match(source, /document\.querySelector\("\[data-nexus-visual-shell\]"\)\?\.remove\(\)/, "each visual command must replace stale visual state");
assert.match(source, /Nexus did not show a substitute location/, "map failures must never show the wrong location");
assert.match(source, /Nexus will not invent or mislabel disease pictures/, "image failures must be honest");
assert.match(source, /does not apply for a job or share the résumé without your permission/, "resume must preserve user control");
assert.match(source, /if \(visualIntent\) void openVisualExperience\(transcript/, "final voice transcripts must activate visual experiences");
assert.match(source, /if \(visualExperienceIntent\(command\)\) setTimeout/, "typed commands must activate visual experiences");

const protectedFiles = [
  "server.js", "public/app.js", "public/index.html", "public/styles.css",
  "public/service-worker.js", "public/voice-agent.js", "public/realtime-voice.js",
  "public/nexus-agent-runtime.js", "scripts/certify-nexus.js", "scripts/qa-suite.js"
];
const changed = require("node:child_process").execFileSync("git", ["diff", "--name-only", "HEAD"], { encoding: "utf8" }).trim().split(/\r?\n/).filter(Boolean);
protectedFiles.forEach(file => assert.ok(!changed.includes(file), `protected file changed: ${file}`));

console.log("Nexus universal visual experience QA passed.");
