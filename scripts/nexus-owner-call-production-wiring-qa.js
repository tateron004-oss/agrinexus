const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const server = fs.readFileSync(path.join(__dirname, "..", "server.js"), "utf8");
const app = fs.readFileSync(path.join(__dirname, "..", "public", "app.js"), "utf8");

assert.match(
  server,
  /body\.ownerTestRecipient === true[\s\S]{0,500}OWNER_TEST_RECIPIENT_NUMBER/,
  "The outbound-call resolver must use the private owner recipient only after an explicit owner-recipient request."
);
assert.match(
  server,
  /ownerTestRecipient: target\.displayName === "owner test recipient"/,
  "The confirmed spoken-call path must pass the resolved owner-recipient identity to the server call workflow."
);
assert.match(
  server,
  /\/api\/voice\/phone\/outbound-call"[\s\S]{0,500}body\.confirmed !== true[\s\S]{0,300}confirmation-required/,
  "The authenticated direct production endpoint must reject calls without explicit confirmation."
);
assert.match(
  server,
  /body\.confirmed !== true[\s\S]{0,300}noCallPlaced: true/,
  "A rejected unconfirmed request must state that no call was placed."
);
assert.match(
  app,
  /path: "\/api\/voice\/phone\/outbound-call"[\s\S]{0,500}confirmed: true/,
  "The visible Place call confirmation must mark the authenticated request as explicitly confirmed."
);

console.log("Nexus owner call production wiring QA passed");
