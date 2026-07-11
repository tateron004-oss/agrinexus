const { assert, assertCacheResponsive } = require("./nexus-true-experience-qa-common");
const fs = require("fs");
const path = require("path");

const app = fs.readFileSync(path.join(__dirname, "..", "public", "app.js"), "utf8");
const styles = fs.readFileSync(path.join(__dirname, "..", "public", "styles.css"), "utf8");

assert(app.includes("nexusGenesisExperiencePerformanceTier"), "performance tier detection exists");
assert(app.includes("hardwareConcurrency"), "CPU capability detection exists");
assert(app.includes("deviceMemory"), "memory capability detection exists");
assert(app.includes("requestAnimationFrame"), "animation loop uses requestAnimationFrame");
assert(app.includes("cancelAnimationFrame"), "animation loop can be cancelled");
assert(styles.includes("@media (prefers-reduced-motion: reduce)"), "reduced motion CSS exists");
assert(styles.includes("@media (forced-colors: active)"), "forced-colors CSS exists");
assert(styles.includes(":focus-visible"), "keyboard focus styling exists");
assertCacheResponsive();

console.log("Nexus experience performance/accessibility QA passed.");
