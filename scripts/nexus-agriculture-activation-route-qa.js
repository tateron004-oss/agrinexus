const fs = require("fs");
const path = require("path");
const root = path.resolve(__dirname, "..");
const app = fs.readFileSync(path.join(root, "public", "app.js"), "utf8");
function assert(condition, message) {
  if (!condition) {
    console.error("[nexus-agriculture-activation-route-qa] " + message);
    process.exit(1);
  }
}
assert(app.includes("marketplace|agritrade|buyer|seller|sell|selling|list"), "Marketplace must require explicit commerce language.");
assert(!app.includes("marketplace|agritrade|buyer|seller|sell|selling|maize|crop"), "Crop and maize must not force Marketplace routing.");
assert(app.includes("const agricultureRequest = explicitOpen && !marketplaceRequest"), "Agriculture must retain its explicit route.");
console.log("Nexus Agriculture activation route QA passed.");
