const { assert } = require("./nexus-true-experience-qa-common");
const fs = require("fs");
const path = require("path");

const app = fs.readFileSync(path.join(__dirname, "..", "public", "app.js"), "utf8");
const styles = fs.readFileSync(path.join(__dirname, "..", "public", "styles.css"), "utf8");

[
  "idle", "wake", "listening", "hearing", "processing", "reasoning", "speaking",
  "waiting", "confirmation", "executing", "verifying", "completed", "offline",
  "blocked", "error"
].forEach(state => assert(app.includes(`"${state}"`) || app.includes(`${state}:`), `${state} state remains represented`));
assert(app.includes("setNexusCoreState(\"waiting\""), "startup presence settles into waiting state");
assert(app.includes("function handleNexusGenesisOrbActivation") && app.includes("return false;"), "orb activation handler is inert");
assert(styles.includes('data-nexus-genesis-core-state="confirmation"'), "confirmation motion style exists");
assert(styles.includes('data-nexus-genesis-core-state="error"'), "error motion style exists");

console.log("Nexus state motion engine QA passed.");
