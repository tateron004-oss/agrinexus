"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { decodeEntities } = require("../../server/media/util.js");

// Found on the live site on 11 October 2026: the player's title (and the spoken "Playing the video ...") read "Rihanna - Diamonds (Lyrics) &quot;Shine bright like a diamond, We&#39;re beautiful ...", because the YouTube
// Data API returns titles with HTML entities in them.
test("YouTube titles are shown and spoken as plain text", () => {
  assert.equal(decodeEntities("Rihanna - Diamonds (Lyrics) &quot;Shine bright like a diamond, We&#39;re beautiful&quot;"), 'Rihanna - Diamonds (Lyrics) "Shine bright like a diamond, We\'re beautiful"');
  assert.equal(decodeEntities("Simon &amp; Garfunkel &#x2013; Mrs. Robinson"), "Simon & Garfunkel – Mrs. Robinson");
  assert.equal(decodeEntities("  a   &lt;b&gt;  "), "a <b>");
  assert.equal(decodeEntities("no entities here"), "no entities here");
  assert.equal(decodeEntities("&#0; &#99999999; &unknown;"), "&#0; &#99999999; &unknown;", "an invalid or unknown entity is left as it was");
  assert.equal(decodeEntities(undefined), "");
});

test("the YouTube provider uses it for the title, the channel and the attribution", () => {
  const source = fs.readFileSync(path.join(__dirname, "../../server/media/providers/youtube.js"), "utf8");
  assert.match(source, /title: decodeEntities\(item\.snippet\.title\), artist: decodeEntities\(item\.snippet\.channelTitle\)/);
  assert.match(source, /attribution: `\$\{decodeEntities\(item\.snippet\.title\)\}/);
});
