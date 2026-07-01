const fs = require("node:fs");
const assert = require("node:assert/strict");
const provider = require("../server/providers/communicationsBridgeProvider");

const server = fs.readFileSync("server.js", "utf8");
const app = fs.readFileSync("public/app.js", "utf8");

(async () => {
  assert(server.includes("/api/nexus/tools/communications/draft"));
  assert(server.includes("/api/nexus/tools/communications/sms/send"));
  assert(app.includes("Communications Live Bridge"));
  const status = provider.status({ NEXUS_COMMUNICATIONS_BRIDGE_ENABLED: "true", OWNER_TEST_RECIPIENT_NUMBER: "+15551234567" });
  assert.equal(status.ownerRecipient.masked.endsWith("4567"), true);
  assert(!status.ownerRecipient.masked.includes("5551234567"));
  const draft = provider.draft({ channel: "sms", message: "Safe draft" }, {});
  assert.equal(draft.body.status, "prepared");
  assert.equal(draft.body.data.sent, false);
  const blocked = provider.draft({ message: "patient medical record" }, {});
  assert.equal(blocked.body.status, "blocked");
  const sms = await provider.sendSms({ to: "+15551234567", message: "Safe draft" }, { NEXUS_COMMUNICATIONS_BRIDGE_ENABLED: "true", NEXUS_MESSAGES_ENABLED: "true" });
  assert.equal(sms.body.status, "confirmation_required");
  const call = provider.prepareCall({ to: "+15551234567" }, {});
  assert.equal(call.body.status, "prepared");
  console.log("PASS communications bridge drafts safely and live actions remain confirmation/provider gated");
})();
