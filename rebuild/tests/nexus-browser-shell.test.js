"use strict";

const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const html = fs.readFileSync(path.join(root, "browser", "index.html"), "utf8");
const css = fs.readFileSync(path.join(root, "browser", "nexus-clean.css"), "utf8");
const entry = fs.readFileSync(path.join(root, "browser", "nexus-clean-entry.js"), "utf8");

assert.match(html, /Hello Ron, how can I help\?/);
assert.match(html, /id="nexus-orb"/);
assert.match(html, /aria-label="Speak to Nexus"/);
assert.match(html, /id="nexus-audio"/);
assert.match(html, /id="nexus-workspace-close"/);
assert.match(html, /Nexus is listening in the background/);
assert.doesNotMatch(html, /card|dashboard|navigation/i);
assert.match(css, /prefers-reduced-motion/);
assert.match(css, /\.workspace\s*\{[\s\S]*position:\s*fixed/);
assert.match(css, /\.workspace\s*\{[\s\S]*inset:\s*0/);
assert.match(css, /\.workspace\s*\{[\s\S]*height:\s*100dvh/);
assert.doesNotMatch(css, /\.workspace\s*\{[^}]*margin:\s*28px auto 0/);
assert.match(entry, /new NexusMicrophoneController/);
assert.match(entry, /new NexusRealtimeConnector/);
assert.doesNotMatch(entry, /speechSynthesis\.speak/);
assert.match(entry, /runtime\.speakText\(text, "provider-card-read"\)/);
assert.match(entry, /runtime\.cancelActiveResponse\("certification-next-command"\)/);
assert.match(entry, /createRemoteAudioUnlock/);
assert.match(entry, /new AudioContextConstructor/);
assert.match(entry, /createMediaStreamSource/);
assert.match(entry, /audioElement\.muted = false/);
assert.match(entry, /await remoteAudio\.unlock\(\)/);
assert.match(entry, /nexus\.clean\.workspace\.acknowledged/);
assert.match(entry, /document\.body\.classList\.add\("nexus-workspace-open"\)/);
assert.match(entry, /workspace\.hidden = true/);
assert.match(entry, /\/api\/voice\/session/);
assert.match(entry, /\/v1\/realtime\/calls/);
assert.doesNotMatch(entry, /public\/app\.js|legacy/i);
assert.doesNotMatch(entry, /browserVerificationSecret|NexusSessionAuthority/);

console.log("Nexus clean browser shell: PASS");
