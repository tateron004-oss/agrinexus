// Lets scripts/nexus-preproduction-black-box.js run its identity part where Playwright and a browser are not installed: "playwright" is replaced by a stub whose launch() says so.
const Module = require("node:module");
const load = Module._load;
Module._load = function (request, ...rest) {
  if (request === "playwright") return { chromium: { launch: async () => { throw new Error("BROWSER-NOT-AVAILABLE-HERE (the identity assertions before this step passed)"); } } };
  return load.call(this, request, ...rest);
};
