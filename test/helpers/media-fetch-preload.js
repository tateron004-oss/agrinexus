"use strict";
// node --require <this file> server.js : replaces the server's global fetch with the pretend internet from media-fake-world.js, so a spawned
// server can be exercised end to end without touching the public internet. Optional env: MEDIA_FAKE_WORLD='{"itunes":false}' (JSON of options).
const { createFakeWorld } = require("./media-fake-world.js");
const options = process.env.MEDIA_FAKE_WORLD ? JSON.parse(process.env.MEDIA_FAKE_WORLD) : {};
const world = createFakeWorld(options);
const real = globalThis.fetch;
globalThis.fetch = (input, init) => {
  const host = (() => { try { return new URL(String(input)).host; } catch { return ""; } })();
  // The test's own control traffic to the local server never goes through here (it runs in the test process), but be safe for localhost.
  if (host.startsWith("localhost") || host.startsWith("127.0.0.1")) return real(input, init);
  return world.fetch(input, init);
};
