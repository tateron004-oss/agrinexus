const { assert, assertOrbPrimaryInteraction } = require("./nexus-true-experience-qa-common");
const fs = require("fs");
const path = require("path");

const styles = fs.readFileSync(path.join(__dirname, "..", "public", "styles.css"), "utf8");

assertOrbPrimaryInteraction();
assert(styles.includes("nexusGenesisIdleBreath"), "premium orb breathing animation exists");
assert(styles.includes("nexusGenesisRingOrbit"), "premium orb ring orbit exists");
assert(styles.includes("nexusGenesisRingPulse"), "premium orb ring pulse exists");
assert(styles.includes("font-size: clamp(3.3rem"), "large Nexus mark is enforced");

console.log("Nexus premium orb renderer QA passed.");
