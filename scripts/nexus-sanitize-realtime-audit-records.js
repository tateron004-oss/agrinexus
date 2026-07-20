const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const dbPath = path.resolve(process.env.AGRINEXUS_DB_PATH || path.join(root, "db.json"));
const allowedRoot = `${root}${path.sep}`.toLowerCase();

if (dbPath.toLowerCase() !== path.join(root, "db.json").toLowerCase()
  && !dbPath.toLowerCase().startsWith(allowedRoot)) {
  throw new Error("Refusing to sanitize a database outside the repository root.");
}

const db = JSON.parse(fs.readFileSync(dbPath, "utf8"));
const profile = db.profile || {};
let sanitizedRecords = 0;

for (const record of profile.voiceSessions || []) {
  if (!["openai-agents-realtime", "realtime-webrtc"].includes(record?.type)) continue;
  const category = String(record?.metadata?.errorCategory || "provider-unavailable").trim() || "provider-unavailable";
  const safeDetail = `OpenAI Realtime request failed safely (${category}).`;
  if (typeof record.detail === "string" && record.detail !== safeDetail && /failed:/i.test(record.detail)) {
    record.detail = safeDetail;
    sanitizedRecords += 1;
  }
}

for (const event of profile.integrationEvents || []) {
  if (!String(event?.action || "").startsWith("voice.openai")) continue;
  const category = String(event?.metadata?.category || event?.metadata?.errorCategory || "provider-unavailable").trim() || "provider-unavailable";
  const safeDetail = `OpenAI Realtime request failed safely (${category}).`;
  if (typeof event.detail === "string" && event.detail !== safeDetail && /failed:/i.test(event.detail)) {
    event.detail = safeDetail;
    sanitizedRecords += 1;
  }
}

if (sanitizedRecords > 0) {
  fs.writeFileSync(dbPath, `${JSON.stringify(db, null, 2)}\n`, "utf8");
}

console.log(JSON.stringify({ ok: true, sanitizedRecords, secretValuesReturned: false }));
