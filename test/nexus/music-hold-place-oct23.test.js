"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const Media = require("../../public/kyro-media-commands.js");

// 23 October 2026, from the owner: "while I am listening to YouTube through Kyro and a call comes in on the phone or I am using WhatsApp on my desktop and I want to answer, I should be able to tell Kyro to pause or stop, and once I am
// finished say Kyro play and it continues to play the song again where it stopped." Stop holds the place, like pause; play carries on; only turning it off or closing it puts the music away.
const control = text => { const parsed = Media.parse(text); return parsed && parsed.type === "control" ? parsed.control : null; };

test("pause and stop both hold the place, and play, resume and continue carry on", () => {
  for (const say of ["Pause", "Pause the music", "Hold on", "Stop the music", "Stop playing", "Stop the song", "Kyro, pause", "Kyro, stop the music"]) assert.ok(["pause", "stop"].includes(control(say)), say);
  for (const say of ["Stop the music", "Stop playing"]) assert.equal(control(say), "stop", say);
  for (const say of ["Play", "Kyro play", "Kyro, play.", "Hey Kyro, play", "Resume", "Continue", "Keep playing", "Play it again", "Play the song again", "Play that again", "Kyro, play the song again", "Unpause the music"]) assert.equal(control(say), "resume", say);
});

test("turning it off, closing it and ending it put the music away", () => {
  for (const say of ["Turn off the music", "Turn the music off", "Close the music", "Shut off the music", "End the music", "Switch the radio off"]) assert.equal(control(say), "close", say);
  assert.equal(control("zima muziki"), "close"); assert.equal(control("simamisha muziki"), "stop");
});

test("speech recognition often writes the name Kyro as Cairo, Kiro or Kairo: a control still works; a place name never does", () => {
  for (const say of ["Cairo play", "Kiro, pause", "Kairo, resume", "Cairo, stop the music"]) assert.ok(control(say), say);
  for (const say of ["Cairo", "What is the weather in Cairo", "Show me Cairo on the map", "Cairo is a big city", "Cairo hello"]) assert.equal(control(say), null, say);
  assert.equal(Media.parse("play music in Cairo").type, "play");
});

test("a request for music is still a request for music, and a bare stop is still not a music control (it also means stop talking)", () => {
  assert.equal(Media.parse("Play some music").type, "play"); assert.equal(Media.parse("Play music").type, "play");
  assert.equal(Media.parse("Play Burna Boy").type, "play");
  assert.equal(Media.parse("stop"), null);
});
