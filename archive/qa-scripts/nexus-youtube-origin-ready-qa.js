"use strict";
const fs=require("node:fs");const assert=require("node:assert/strict");const app=fs.readFileSync("public/app.js","utf8");
assert.match(app,/enablejsapi=1[^"]*origin=\$\{encodeURIComponent\(window\.location\.origin\)\}/);
const start=app.indexOf("function verifyNexusYouTubePlaybackStarted");const end=app.indexOf("\n}\n",start)+2;const block=app.slice(start,end);
assert.match(block,/payload\?\.event === "onReady"/);assert.match(block,/ready = true/);
assert.ok(block.indexOf('payload?.event === "onReady"') < block.indexOf('youtubePlayerCommand("playVideo")'));
assert.match(block,/state === 1/);assert.match(block,/payload\?\.info\?\.playerState/);
console.log("Nexus YouTube origin and ready lifecycle QA passed.");
