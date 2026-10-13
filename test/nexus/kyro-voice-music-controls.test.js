"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const Commands = require("../../public/kyro-media-commands.js");

// Found testing the live site: by voice, "pause the music" and "stop the music" went to the music tool, which started playing songs called "Pause" and "Don't Stop The Music", and a play
// request was answered with "Spotify ... a short Nexus test audio sample" while a YouTube video played. The player is on the page, so the page does the controls; the play line is true.

const root = path.join(__dirname, "../..");
const app = fs.readFileSync(path.join(root, "public/app.js"), "utf8");
const server = fs.readFileSync(path.join(root, "server.js"), "utf8");

test("these sentences are controls (so the page, not the music tool, answers them)", () => {
  for (const text of ["Pause the music", "Stop the music", "Resume the music", "Next song", "Louder", "Volume up", "Mute"]) assert.equal(Commands.parse(text)?.type, "control", text);
  for (const text of ["Play some Kenyan music", "Play Sauti Sol"]) assert.notEqual(Commands.parse(text)?.type, "control", text);
});

test("it is wired: the model's tool call runs a control on the page player before anything is sent to the server", () => {
  const start = app.indexOf("async function callNexusOpenAiRealtimeTool");
  const body = app.slice(start, app.indexOf("const correlationId", start));
  assert.match(body, /KyroMediaCommands\?\.parse\?\.\(command\)\?\.type === "control" && await kyroMediaCommand\(command\)/);
  assert.ok(body.indexOf("kyroMediaCommand(command)") < body.indexOf("kyroShowVisualRequest"), "before the picture/video handling and the fetch");
  assert.match(body, /Say nothing more\./);
});

test("the play line no longer talks about Spotify or a test audio sample", () => {
  assert.doesNotMatch(server, /Nexus test audio sample/);
  assert.match(server, /response: `Okay\. Starting \$\{intent\.query\} in the player now\.`/);
});
