const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const root = path.resolve(__dirname, "..");
const app = fs.readFileSync(path.join(root, "public", "app.js"), "utf8");

function functionSource(name) {
  const start = app.indexOf(`function ${name}`);
  assert.notEqual(start, -1, `${name} exists`);
  const nextFunction = app.indexOf("\nfunction ", start + 1);
  const nextAsyncFunction = app.indexOf("\nasync function ", start + 1);
  const candidates = [nextFunction, nextAsyncFunction].filter(index => index > start);
  const end = Math.min(...candidates);
  assert.ok(Number.isFinite(end), `${name} has a source boundary`);
  return app.slice(start, end);
}

const sandbox = {};
vm.createContext(sandbox);
vm.runInContext([
  functionSource("normalizedWakeText"),
  functionSource("isNexusWakeOnlyGreetingTranscript"),
  functionSource("handleNexusWakeOnlyFinalTranscript")
].join("\n"), sandbox);

[
  "Hello Nexus",
  "Hello Nexus,",
  "Hey Nexus",
  "Hey Nexus!",
  "Nexus",
  "Nexus."
].forEach(transcript => {
  assert.equal(sandbox.isNexusWakeOnlyGreetingTranscript(transcript), true, `${transcript} is wake-only`);
});

[
  "Nexus, open a map of Kenya",
  "Hello Nexus, find farming jobs in Kenya",
  "Hey Nexus, open Workforce"
].forEach(transcript => {
  assert.equal(sandbox.isNexusWakeOnlyGreetingTranscript(transcript), false, `${transcript} remains command-bearing`);
});

let beginCount = 0;
let greetingCount = 0;
let resumeCount = 0;
let greetingOptions = null;
sandbox.voiceConversationPaused = false;
sandbox.beginNexusVoiceTurn = () => {
  beginCount += 1;
  return 41;
};
sandbox.leaveNexusConversationPause = () => {
  resumeCount += 1;
  sandbox.voiceConversationPaused = false;
};
sandbox.handleNexusPresenceWakePhrase = (_command, options) => {
  greetingCount += 1;
  greetingOptions = options;
  return true;
};
assert.equal(sandbox.handleNexusWakeOnlyFinalTranscript("Hello Nexus"), true, "wake-only transcript is handled");
assert.equal(beginCount, 1, "wake-only transcript starts exactly one turn");
assert.equal(greetingCount, 1, "wake-only transcript produces exactly one greeting");
assert.equal(greetingOptions.speak, true, "wake-only greeting is spoken");
assert.equal(greetingOptions.turnToken, 41, "wake-only greeting carries its turn token");
assert.equal(resumeCount, 0, "active listener does not receive a redundant resume");

assert.equal(
  sandbox.handleNexusWakeOnlyFinalTranscript("Nexus, open a map of Kenya"),
  false,
  "command-bearing wake phrase bypasses the greeting handler"
);
assert.equal(beginCount, 1, "command-bearing wake phrase does not start a greeting turn");
assert.equal(greetingCount, 1, "command-bearing wake phrase does not add a greeting");

sandbox.voiceConversationPaused = true;
assert.equal(sandbox.handleNexusWakeOnlyFinalTranscript("Hey Nexus"), true, "wake-only transcript resumes a paused conversation");
assert.equal(resumeCount, 1, "paused listener is resumed once");
assert.equal(greetingCount, 2, "resumed wake phrase still produces one greeting");

const finalTranscriptBlock = app.slice(
  app.indexOf("function processFinalVoiceCommand"),
  app.indexOf("function scheduleFinalVoiceCommand")
);
const wakeBranch = "handleNexusWakeOnlyFinalTranscript(localizedCommand";
const realtimeDuplicateGuard = "if (realtimeVoiceActive())";
assert.ok(finalTranscriptBlock.includes(wakeBranch), "final transcript path handles wake-only input");
assert.ok(
  finalTranscriptBlock.indexOf(wakeBranch) < finalTranscriptBlock.indexOf(realtimeDuplicateGuard),
  "wake-only greeting runs before Realtime duplicate-transcript suppression"
);

const wakeHandler = functionSource("handleNexusWakeOnlyFinalTranscript");
assert.ok(wakeHandler.includes("beginNexusVoiceTurn(command)"), "wake-only greeting starts one fresh voice turn");
assert.ok(wakeHandler.includes("handleNexusPresenceWakePhrase(command"), "wake-only greeting uses the existing natural presence response");
assert.ok(wakeHandler.includes("speak: true"), "wake-only greeting is spoken");
assert.ok(wakeHandler.includes("turnToken"), "wake-only greeting is protected from stale overlapping speech");
assert.ok(wakeHandler.includes("leaveNexusConversationPause"), "wake-only greeting resumes a paused listener");

const presenceGreeting = functionSource("nexusPresenceGreeting");
assert.ok(presenceGreeting.includes("Hello ${first}, how can I help?"), "personalized greeting text is exact");
const greetingSandbox = { userFirstName: () => "Ron" };
vm.createContext(greetingSandbox);
vm.runInContext([
  functionSource("isNexusPresenceWakePhrase"),
  functionSource("nexusPresenceUserName"),
  presenceGreeting
].join("\n"), greetingSandbox);
assert.equal(greetingSandbox.nexusPresenceGreeting(), "Hello Ron, how can I help?", "Ron receives the required exact greeting");
assert.equal(greetingSandbox.isNexusPresenceWakePhrase("Hello Nexus,"), true, "presence handler accepts a trailing comma");
assert.equal(greetingSandbox.isNexusPresenceWakePhrase("Nexus, open a map of Kenya"), false, "presence handler rejects command-bearing wake phrases");

const speechBlock = functionSource("speakVoiceResponse");
assert.ok(speechBlock.includes("resumeVoiceListeningAfterSpeech"), "existing speech completion resumes listening");

const scheduleBlock = app.slice(
  app.indexOf("function scheduleFinalVoiceCommand"),
  app.indexOf("async function startVoiceRuntimeTransport")
);
assert.ok(scheduleBlock.includes("duplicate-transcript-prevented"), "existing duplicate final-transcript guard remains active");
assert.equal(
  app.split("handleNexusWakeOnlyFinalTranscript(localizedCommand").length - 1,
  1,
  "wake-only repair is limited to the final-transcript classification path"
);

console.log("Nexus wake-only greeting regression QA passed.");
