const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const target = process.argv[2] || ".env.production.gapfill";
const envPath = path.resolve(root, target);
const outputPath = path.join(root, "LIVE_ENGINE_CONNECTION_REPORT.md");

function loadEnv(filePath) {
  if (!fs.existsSync(filePath)) return {};
  return Object.fromEntries(
    fs.readFileSync(filePath, "utf8")
      .split(/\r?\n/)
      .map(line => line.trim())
      .filter(line => line && !line.startsWith("#") && line.includes("="))
      .map(line => {
        const index = line.indexOf("=");
        return [line.slice(0, index), line.slice(index + 1)];
      })
  );
}

function unresolved(value) {
  return !value
    || value.includes("PASTE_")
    || value.includes("YOUR-")
    || value.includes("replace-with")
    || value.includes("your-key-here");
}

const env = loadEnv(envPath);

const engines = [
  {
    name: "Production PostgreSQL",
    purpose: "Persistent platform records",
    keys: ["DATABASE_URL", "AGRINEXUS_STATE_STORE"],
    userStep: "Create a Render PostgreSQL database, copy its internal DATABASE_URL, and set AGRINEXUS_STATE_STORE=postgres."
  },
  {
    name: "Nexus Live AI",
    purpose: "Agentic planning, command center reasoning, tutoring, triage, workforce coaching, trade guidance, and briefings",
    keys: ["OPENAI_API_KEY", "OPENAI_MODEL"],
    userStep: "Create an OpenAI API key and paste it into Render as OPENAI_API_KEY."
  },
  {
    name: "Live Translation",
    purpose: "Dynamic multilingual content translation",
    keys: ["TRANSLATION_PROVIDER", "TRANSLATION_WEBHOOK_URL", "TRANSLATION_PROVIDER_API_KEY"],
    userStep: "Deploy provider engines or connect a translation provider endpoint."
  },
  {
    name: "Jarvis-Style Voice",
    purpose: "OpenAI speech-to-text, high-quality text-to-speech, and realtime WebRTC conversation runtime",
    keys: ["VOICE_STT_PROVIDER", "VOICE_TTS_PROVIDER", "VOICE_REALTIME_PROVIDER", "OPENAI_API_KEY", "OPENAI_TRANSCRIBE_MODEL", "OPENAI_TTS_MODEL", "OPENAI_TTS_VOICE", "OPENAI_REALTIME_MODEL", "OPENAI_REALTIME_VOICE"],
    userStep: "Set VOICE_STT_PROVIDER=openai, VOICE_TTS_PROVIDER=openai, VOICE_REALTIME_PROVIDER=openai, and add OPENAI_API_KEY in Render."
  },
  {
    name: "Phone Voice Assistant",
    purpose: "Twilio phone-call assistant for speech commands and voice responses",
    keys: ["PHONE_PROVIDER", "PUBLIC_BASE_URL", "TWILIO_ACCOUNT_SID", "TWILIO_AUTH_TOKEN", "TWILIO_PHONE_NUMBER"],
    userStep: "Buy/configure a Twilio voice number and point incoming calls to PUBLIC_BASE_URL/api/voice/phone/incoming."
  },
  {
    name: "Learning Provider",
    purpose: "Courses, lessons, certificates, and readiness evidence",
    keys: ["LEARNING_COURSE_PROVIDER", "LEARNING_CERTIFICATE_PROVIDER", "LEARNING_COURSE_WEBHOOK_URL", "LEARNING_CERTIFICATE_WEBHOOK_URL", "LEARNING_PROVIDER_API_KEY"],
    userStep: "Use provider engines first, then connect a real LMS/course provider when chosen."
  },
  {
    name: "Workforce Network",
    purpose: "Jobs, HR records, calendars, shifts, applications, and notifications",
    keys: ["WORKFORCE_JOB_PROVIDER", "WORKFORCE_CALENDAR_PROVIDER", "WORKFORCE_NOTIFICATION_PROVIDER", "WORKFORCE_HRIS_PROVIDER", "WORKFORCE_SHIFT_PROVIDER", "WORKFORCE_JOB_WEBHOOK_URL", "WORKFORCE_CALENDAR_WEBHOOK_URL", "WORKFORCE_NOTIFICATION_WEBHOOK_URL", "WORKFORCE_HRIS_WEBHOOK_URL", "WORKFORCE_SHIFT_WEBHOOK_URL", "WORKFORCE_PROVIDER_API_KEY"],
    userStep: "Use provider engines first, then connect real job boards, employer systems, calendar, HRIS, or shift tools."
  },
  {
    name: "Telehealth Network",
    purpose: "Intake, accessibility needs, consent, vitals, care plans, referrals, follow-up, EHR sync, and notifications",
    keys: ["HEALTH_TELEHEALTH_PROVIDER", "HEALTH_NOTIFICATION_PROVIDER", "HEALTH_EHR_PROVIDER", "HEALTH_TELEHEALTH_WEBHOOK_URL", "HEALTH_NOTIFICATION_WEBHOOK_URL", "HEALTH_EHR_WEBHOOK_URL", "HEALTH_PROVIDER_API_KEY"],
    userStep: "Use provider engines first, then connect a compliant telehealth/EHR/notification vendor."
  },
  {
    name: "Trade, Market, Logistics, and Drone Engines",
    purpose: "Payments, logistics, market data, drone scans, crop intelligence, and route evidence",
    keys: ["TRADE_PAYMENT_PROVIDER", "TRADE_LOGISTICS_PROVIDER", "TRADE_MARKET_PROVIDER", "DRONE_PROVIDER", "TRADE_PAYMENT_WEBHOOK_URL", "TRADE_LOGISTICS_WEBHOOK_URL", "TRADE_MARKET_WEBHOOK_URL", "DRONE_WEBHOOK_URL", "TRADE_PROVIDER_API_KEY", "DRONE_PROVIDER_API_KEY"],
    userStep: "Deploy provider engines, then replace with real payment, logistics, market, and drone vendors."
  },
  {
    name: "Live Maps",
    purpose: "Field, country, route, drone, and operational map context",
    keys: ["MAP_TILE_PROVIDER"],
    userStep: "Use MAP_TILE_PROVIDER=openstreetmap for launch, or switch to custom tiles later with MAP_TILE_URL."
  },
  {
    name: "Communications",
    purpose: "Email, SMS, WhatsApp, phone reminders, and workflow alerts",
    keys: ["EMAIL_PROVIDER", "SMS_PROVIDER", "WHATSAPP_PROVIDER", "EMAIL_WEBHOOK_URL", "SMS_WEBHOOK_URL", "WHATSAPP_WEBHOOK_URL", "COMMUNICATION_PROVIDER_API_KEY"],
    userStep: "Use provider engines first, then connect SendGrid/Mailgun/Twilio/WhatsApp Business or your chosen vendor."
  },
  {
    name: "Subscriber Auth and Billing",
    purpose: "Users, password reset, subscription checkout, and client management",
    keys: ["AUTH_PROVIDER", "PASSWORD_RESET_PROVIDER", "AUTH_WEBHOOK_URL", "PASSWORD_RESET_WEBHOOK_URL", "AUTH_PROVIDER_API_KEY", "BILLING_PROVIDER", "BILLING_WEBHOOK_URL", "BILLING_PROVIDER_API_KEY", "BILLING_PRICE_ID"],
    userStep: "Deploy provider engines, then connect real auth/password reset and Stripe billing."
  }
];

const rows = engines.map(engine => {
  const missing = engine.keys.filter(key => unresolved(env[key]));
  return {
    ...engine,
    ready: missing.length === 0,
    missing
  };
});

const readyCount = rows.filter(row => row.ready).length;
const lines = [
  "# AgriNexus Live Engine Connection Report",
  "",
  `Source env file: \`${target}\``,
  `Generated: ${new Date().toISOString()}`,
  `Ready engines: ${readyCount}/${rows.length}`,
  "",
  "This report is the non-developer checklist for connecting real services in Render. Values marked missing must be added in Render before this is a true live production platform.",
  "",
  "| Engine | Purpose | Status | Missing Values | Next Step |",
  "| --- | --- | --- | --- | --- |",
  ...rows.map(row => `| ${row.name} | ${row.purpose} | ${row.ready ? "Ready" : "Needs values"} | ${row.missing.length ? row.missing.map(key => `\`${key}\``).join("<br>") : "None"} | ${row.userStep} |`),
  "",
  "## Fastest Safe Launch Path",
  "",
  "1. Deploy the provider-engine service from `render.yaml`.",
  "2. Copy its Render URL into `PROVIDER_BASE_URL`, then run `npm run production:gapfill` again.",
  "3. Add Render PostgreSQL and paste `DATABASE_URL`.",
  "4. Add `OPENAI_API_KEY`.",
  "5. Add `BILLING_PRICE_ID` when subscriptions are ready.",
  "6. Paste the generated values into the main Render web service.",
  "7. Open `/api/engines/manifest` and `/status.html` to confirm live status.",
  ""
];

fs.writeFileSync(outputPath, lines.join("\n"));
console.log(`Generated ${outputPath}`);
console.log(`Ready engines: ${readyCount}/${rows.length}`);
if (readyCount !== rows.length) {
  console.log("Missing values:");
  for (const row of rows.filter(item => !item.ready)) {
    console.log(`- ${row.name}: ${row.missing.join(", ")}`);
  }
}
