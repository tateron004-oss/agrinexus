"use strict";

// The seam that lets one Kyro send as different businesses. The providers (Twilio, email) read their sender identity from an `env` argument, and almost every caller passes process.env (the agent
// engine even captures it once at start-up). So the providers ask here first: when they were handed the real process.env, the server's resolver may swap in the settings of the business the current
// request belongs to. Anything else (a test's own env object, a business-free call) is returned untouched, and with no resolver registered nothing changes at all.
let resolver = null;

module.exports = Object.freeze({
  setResolver(fn) { resolver = typeof fn === "function" ? fn : null; },
  resolve(env) { return resolver && env === process.env ? resolver(env) : env; }
});
