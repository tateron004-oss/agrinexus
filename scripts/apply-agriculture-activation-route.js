const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");
const root = path.resolve(__dirname, "..");
const appPath = path.join(root, "public", "app.js");
const before = fs.readFileSync(appPath, "utf8");
const oldText = '  const marketplaceRequest = (explicitOpen || /\\b(?:sell|selling|list)\\b/.test(lower)) && /\\b(marketplace|agritrade|buyer|seller|sell|selling|maize|crop)\\b/.test(lower);';
const newText = '  const marketplaceRequest = /\\b(?:marketplace|agritrade|buyer|seller|sell|selling|list)\\b/.test(lower)\n    && (explicitOpen || /\\b(?:sell|selling|list)\\b/.test(lower));';
const count = before.split(oldText).length - 1;
if (count !== 1) throw new Error("Refusing Agriculture repair: expected exactly one reviewed marketplace route.");
fs.writeFileSync(appPath, before.replace(oldText, newText));
const commands = [
  ["node", ["--check", "public/app.js"]],
  ["node", ["scripts/nexus-agriculture-activation-route-qa.js"]],
  ["node", ["scripts/nexus-genesis-voice-workspace-bridge-qa.js"]],
  ["node", ["scripts/nexus-browser-action-controller-qa.js"]],
  ["node", ["scripts/nexus-genesis-realtime-repeated-turn-lifecycle-qa.js"]],
  ["node", ["scripts/nexus-openai-realtime-microphone-handoff-qa.js"]],
  ["node", ["scripts/nexus-realtime-microphone-visibility-qa.js"]],
  ["node", ["scripts/nexus-genesis-mission-renderer-workspace-qa.js"]],
  ["node", ["scripts/nexus-full-workflow-workspace-qa.js"]],
  ["git", ["diff", "--check"]]
];
for (const [command, args] of commands) execFileSync(command, args, { cwd: root, stdio: "inherit" });
