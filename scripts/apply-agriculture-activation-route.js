const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");
const root = path.resolve(__dirname, "..");
const appPath = path.join(root, "public", "app.js");
let app = fs.readFileSync(appPath, "utf8");

function replaceExactlyOnce(oldText, newText, label) {
  const count = app.split(oldText).length - 1;
  if (count !== 1) throw new Error(`Refusing ${label}: expected exactly one reviewed source boundary, found ${count}.`);
  app = app.replace(oldText, newText);
}

replaceExactlyOnce(
  '  const marketplaceRequest = (explicitOpen || /\\b(?:sell|selling|list)\\b/.test(lower)) && /\\b(marketplace|agritrade|buyer|seller|sell|selling|maize|crop)\\b/.test(lower);',
  '  const marketplaceRequest = /\\b(?:marketplace|agritrade|buyer|seller|sell|selling|list)\\b/.test(lower)\\n    && (explicitOpen || /\\b(?:sell|selling|list)\\b/.test(lower));',
  "Agriculture/Marketplace precedence repair"
);
replaceExactlyOnce(
  '  const agricultureRequest = explicitOpen && !marketplaceRequest && /\\b(agriculture|agronomy|farm support|crop issue|pest|disease|soil|irrigation)\\b/.test(lower);',
  '  const agricultureRequest = explicitOpen && !marketplaceRequest && !knowledgeRequest && /\\b(agriculture|agronomy|farm support|crop issue|pest|disease|soil|irrigation)\\b/.test(lower);',
  "Live Knowledge/Agriculture precedence repair"
);
replaceExactlyOnce(
  '  const offlineRequest = explicitOpen && /\\b(offline|offline queue|low bandwidth|sync status)\\b/.test(lower);\\n  const knowledgeRequest = /\\b(search the internet|use the internet|live knowledge|research|find current (?:information|sources)|show sources)\\b/.test(lower);',
  '  const knowledgeRequest = /\\b(search the internet|use the internet|live knowledge|research|find current (?:information|sources)|show sources)\\b/.test(lower);\\n  const offlineRequest = explicitOpen && /\\b(offline|offline queue|low bandwidth|sync status)\\b/.test(lower);',
  "Live Knowledge declaration ordering repair"
);

fs.writeFileSync(appPath, app);
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
if (!app.includes("const agricultureRequest = explicitOpen && !marketplaceRequest && !knowledgeRequest")) {
  throw new Error("Live Knowledge must retain precedence over Agriculture.");
}
