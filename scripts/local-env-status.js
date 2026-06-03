const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const envPath = path.join(root, ".env");

function parseEnv(filePath) {
  if (!fs.existsSync(filePath)) return {};
  return fs.readFileSync(filePath, "utf8").split(/\r?\n/).reduce((acc, line) => {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) return acc;
    const index = trimmed.indexOf("=");
    if (index === -1) return acc;
    acc[trimmed.slice(0, index).trim()] = trimmed.slice(index + 1).trim();
    return acc;
  }, {});
}

function hasValue(env, key) {
  const value = env[key] || "";
  return Boolean(value && !/replace-with|your-|changeme/i.test(value));
}

const env = parseEnv(envPath);
const groups = [
  {
    title: "Core local server",
    keys: ["PORT", "HOST", "PUBLIC_BASE_URL", "SESSION_SECRET", "PASSWORD_PEPPER"]
  },
  {
    title: "AI and voice",
    keys: ["OPENAI_API_KEY", "VOICE_STT_PROVIDER", "VOICE_TTS_PROVIDER", "OPENAI_TRANSCRIBE_MODEL", "OPENAI_TTS_MODEL", "OPENAI_TTS_VOICE"]
  },
  {
    title: "Phone and messaging",
    keys: ["PHONE_PROVIDER", "TWILIO_ACCOUNT_SID", "TWILIO_AUTH_TOKEN", "TWILIO_PHONE_NUMBER"]
  },
  {
    title: "Provider bridge",
    keys: ["PROVIDER_ENGINE_BASE_URL", "VOICE_PROVIDER_API_KEY", "LEARNING_PROVIDER_API_KEY", "WORKFORCE_PROVIDER_API_KEY", "HEALTH_PROVIDER_API_KEY", "TRADE_PROVIDER_API_KEY", "DRONE_PROVIDER_API_KEY"]
  },
  {
    title: "Maps and database",
    keys: ["MAP_TILE_PROVIDER", "MAP_TILE_URL", "DATABASE_URL", "AGRINEXUS_STATE_STORE"]
  }
];

console.log(`Local env file: ${fs.existsSync(envPath) ? envPath : "missing"}`);
console.log("");

let ready = 0;
let total = 0;
for (const group of groups) {
  console.log(group.title);
  for (const key of group.keys) {
    total += 1;
    const ok = hasValue(env, key);
    if (ok) ready += 1;
    const note = key.includes("KEY") || key.includes("TOKEN") || key.includes("SECRET") || key.includes("PEPPER") || key.includes("SID")
      ? (ok ? "set" : "missing")
      : (env[key] || "missing");
    console.log(`  ${ok ? "[ready]" : "[missing]"} ${key}: ${note}`);
  }
  console.log("");
}

console.log(`Summary: ${ready}/${total} local environment values are set.`);
console.log("Open .env to paste the real Render/OpenAI/Twilio values. Do not commit .env.");
