const fs = require("fs");
const path = require("path");

const target = process.argv[2] || ".env.production.gapfill";
const filePath = path.resolve(process.cwd(), target);

if (!fs.existsSync(filePath)) {
  console.error(`Environment file not found: ${filePath}`);
  process.exit(1);
}

const text = fs.readFileSync(filePath, "utf8");
const required = [
  "NODE_ENV=production",
  "AGRINEXUS_STATE_STORE=postgres",
  "AGRINEXUS_REQUIRE_LIVE_SERVICES=true",
  "DATABASE_URL=",
  "OPENAI_API_KEY=",
  "BILLING_PRICE_ID=",
  "VOICE_STT_PROVIDER=openai",
  "VOICE_TTS_PROVIDER=openai",
  "VOICE_REALTIME_PROVIDER=openai",
  "OPENAI_REALTIME_MODEL=",
  "OPENAI_REALTIME_VOICE=",
  "PHONE_PROVIDER=twilio",
  "PUBLIC_BASE_URL=",
  "TWILIO_ACCOUNT_SID=",
  "TWILIO_AUTH_TOKEN=",
  "TWILIO_PHONE_NUMBER=",
  "TRANSLATION_PROVIDER=webhook",
  "AUTH_PROVIDER=webhook",
  "PASSWORD_RESET_PROVIDER=webhook",
  "EMAIL_PROVIDER=webhook",
  "SMS_PROVIDER=webhook",
  "WHATSAPP_PROVIDER=webhook",
  "BILLING_PROVIDER=webhook",
  "LEARNING_COURSE_PROVIDER=webhook",
  "WORKFORCE_JOB_PROVIDER=webhook",
  "HEALTH_TELEHEALTH_PROVIDER=webhook",
  "TRADE_MARKET_PROVIDER=webhook",
  "DRONE_PROVIDER=webhook"
];

const unresolvedPatterns = [
  "PASTE_",
  "YOUR-AGRINEXUS-PROVIDER-ENGINES",
  "replace-with",
  "your-key-here"
];

const missing = required.filter(item => !text.includes(item));
const unresolved = text
  .split(/\r?\n/)
  .map(line => line.trim())
  .filter(line => line && !line.startsWith("#"))
  .filter(line => unresolvedPatterns.some(pattern => line.includes(pattern)));

console.log("AgriNexus live environment validation");
console.log(`File: ${filePath}`);
console.log(`Required signals: ${required.length - missing.length}/${required.length}`);
console.log(`Unresolved values: ${unresolved.length}`);

if (missing.length) {
  console.log("");
  console.log("Missing required signals:");
  for (const item of missing) console.log(`- ${item}`);
}

if (unresolved.length) {
  console.log("");
  console.log("Replace these before launch:");
  for (const line of unresolved) console.log(`- ${line}`);
}

if (missing.length || unresolved.length) process.exitCode = 1;
else console.log("Live environment file is ready to paste into Render.");
