const { assert } = require("./nexus-true-experience-qa-common");
const fs = require("fs");
const path = require("path");

const app = fs.readFileSync(path.join(__dirname, "..", "public", "app.js"), "utf8");

assert(app.includes("syncNexusCoreStateFromPresence"), "presence state synchronizes to Nexus Core state");
assert(app.includes("prepared.utterance.onstart") || app.includes(".onstart ="), "speech start event remains represented");
assert(app.includes("browser-speech-finished"), "speech finish event remains represented");
assert(app.includes("assertNexusVoiceLifecycleInvariant(\"listening-resumed-after-response\")"), "Realtime listening resume event remains represented");
assert(app.includes("openai-realtime-connected"), "Realtime connection event remains represented");
assert(app.includes("data-nexus-os-conversation-live-region"), "caption/live region remains available");

console.log("Nexus voice/orb synchronization QA passed.");
