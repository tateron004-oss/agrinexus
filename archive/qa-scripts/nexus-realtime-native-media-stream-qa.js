const assert = require("assert");
const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const source = fs.readFileSync(path.join(root, "public", "nexus-openai-realtime-agent.js"), "utf8");

assert.match(source, /import \{ OpenAIRealtimeWebRTC, RealtimeAgent, RealtimeSession, tool \}/);
assert.match(source, /new OpenAIRealtimeWebRTC\(\{\s*mediaStream: preverifiedMicrophoneStream\s*\}\)/);
assert.match(source, /transport,\s*model:/);
assert.doesNotMatch(source, /mediaDevices\.getUserMedia\s*=/);
assert.doesNotMatch(source, /originalGetUserMedia/);
assert.match(source, /requires one preverified microphone stream/);

console.log("Nexus Realtime native MediaStream QA passed.");
