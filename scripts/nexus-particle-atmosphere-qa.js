const { assert } = require("./nexus-true-experience-qa-common");
const fs = require("fs");
const path = require("path");

const app = fs.readFileSync(path.join(__dirname, "..", "public", "app.js"), "utf8");
const styles = fs.readFileSync(path.join(__dirname, "..", "public", "styles.css"), "utf8");

assert(app.includes('data-nexus-genesis-particles="true"'), "particle field is rendered with the orb");
const particleBlock = app.slice(app.indexOf('data-nexus-genesis-particles="true"'), app.indexOf("</span>", app.indexOf('data-nexus-genesis-particles="true"')));
assert((particleBlock.match(/<i>/g) || []).length === 8, "particle count is capped");
assert(styles.includes("nexusGenesisParticleDrift"), "particle drift animation exists");
assert(styles.includes("document.hidden") || app.includes("document.hidden"), "animation pauses when document is hidden");
assert(styles.includes("prefers-reduced-motion") && styles.includes("nexus-genesis-particle-field"), "particles are disabled for reduced motion");

console.log("Nexus particle atmosphere QA passed.");
