const { spawnSync } = require("child_process");
const { loadEnvFile } = require("../foundation/src/runtime/env-file");

loadEnvFile();

const liveProviderGroups = [
  {
    module: "Learning",
    providerKeys: ["LEARNING_COURSE_PROVIDER", "LEARNING_CERTIFICATE_PROVIDER"],
    credentialKeys: ["LEARNING_COURSE_WEBHOOK_URL", "LEARNING_CERTIFICATE_WEBHOOK_URL", "LEARNING_PROVIDER_API_KEY"]
  },
  {
    module: "Workforce",
    providerKeys: ["WORKFORCE_JOB_PROVIDER", "WORKFORCE_CALENDAR_PROVIDER", "WORKFORCE_NOTIFICATION_PROVIDER", "WORKFORCE_HRIS_PROVIDER", "WORKFORCE_SHIFT_PROVIDER"],
    credentialKeys: ["WORKFORCE_JOB_WEBHOOK_URL", "WORKFORCE_CALENDAR_WEBHOOK_URL", "WORKFORCE_NOTIFICATION_WEBHOOK_URL", "WORKFORCE_HRIS_WEBHOOK_URL", "WORKFORCE_SHIFT_WEBHOOK_URL", "WORKFORCE_PROVIDER_API_KEY"]
  },
  {
    module: "Healthcare",
    providerKeys: ["HEALTH_TELEHEALTH_PROVIDER", "HEALTH_NOTIFICATION_PROVIDER", "HEALTH_EHR_PROVIDER"],
    credentialKeys: ["HEALTH_TELEHEALTH_WEBHOOK_URL", "HEALTH_NOTIFICATION_WEBHOOK_URL", "HEALTH_EHR_WEBHOOK_URL", "HEALTH_PROVIDER_API_KEY"]
  },
  {
    module: "AgriTrade",
    providerKeys: ["TRADE_PAYMENT_PROVIDER", "TRADE_LOGISTICS_PROVIDER", "TRADE_MARKET_PROVIDER", "DRONE_PROVIDER"],
    credentialKeys: ["TRADE_PAYMENT_WEBHOOK_URL", "TRADE_LOGISTICS_WEBHOOK_URL", "TRADE_MARKET_WEBHOOK_URL", "TRADE_PROVIDER_API_KEY", "DRONE_WEBHOOK_URL", "DRONE_PROVIDER_API_KEY"]
  },
  {
    module: "Voice Command Center",
    providerKeys: ["VOICE_STT_PROVIDER", "VOICE_TTS_PROVIDER"],
    credentialKeys: ["OPENAI_API_KEY"],
    alternateCredentialKeys: ["VOICE_STT_WEBHOOK_URL", "VOICE_TTS_WEBHOOK_URL", "VOICE_PROVIDER_API_KEY"]
  },
  {
    module: "Phone Voice Assistant",
    providerKeys: ["PHONE_PROVIDER"],
    credentialKeys: ["TWILIO_ACCOUNT_SID", "TWILIO_AUTH_TOKEN", "TWILIO_PHONE_NUMBER", "PUBLIC_BASE_URL"]
  },
  {
    module: "Translation",
    providerKeys: ["TRANSLATION_PROVIDER"],
    credentialKeys: ["TRANSLATION_WEBHOOK_URL", "TRANSLATION_PROVIDER_API_KEY"]
  },
  {
    module: "Production Auth",
    providerKeys: ["AUTH_PROVIDER", "PASSWORD_RESET_PROVIDER"],
    credentialKeys: ["AUTH_WEBHOOK_URL", "PASSWORD_RESET_WEBHOOK_URL", "AUTH_PROVIDER_API_KEY"]
  },
  {
    module: "Communications",
    providerKeys: ["EMAIL_PROVIDER", "SMS_PROVIDER", "WHATSAPP_PROVIDER"],
    credentialKeys: ["EMAIL_WEBHOOK_URL", "SMS_WEBHOOK_URL", "WHATSAPP_WEBHOOK_URL", "COMMUNICATION_PROVIDER_API_KEY"]
  },
  {
    module: "Billing",
    providerKeys: ["BILLING_PROVIDER"],
    credentialKeys: ["BILLING_WEBHOOK_URL", "BILLING_PROVIDER_API_KEY", "BILLING_PRICE_ID"]
  }
];

function hasValue(key) {
  const value = process.env[key];
  return Boolean(value && value.trim() && !value.includes("replace-with") && value !== "your-key-here");
}

function commandExists(command) {
  const lookup = process.platform === "win32" ? "where.exe" : "command";
  const args = process.platform === "win32" ? [command] : ["-v", command];
  const result = spawnSync(lookup, args, { encoding: "utf8", windowsHide: true });
  return result.status === 0;
}

function fileExists(filePath) {
  try {
    require("fs").accessSync(filePath);
    return true;
  } catch {
    return false;
  }
}

function toolAvailable(command, knownPaths = []) {
  return commandExists(command) || knownPaths.some(fileExists);
}

function packageInstalled(name) {
  try {
    require.resolve(name, { paths: [process.cwd()] });
    return true;
  } catch {
    return false;
  }
}

function check(label, ready, detail, severity = "blocker") {
  return { label, ready, detail, severity };
}

async function postgresVerified() {
  if (!hasValue("DATABASE_URL") || !packageInstalled("pg")) return false;
  const { Client } = require("pg");
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: process.env.DATABASE_SSL === "true" ? { rejectUnauthorized: false } : false
  });
  try {
    await client.connect();
    const result = await client.query("select count(*)::int as count from schema_migrations");
    return Number(result.rows[0]?.count || 0) >= 2;
  } catch {
    return false;
  } finally {
    await client.end().catch(() => {});
  }
}

function providerChecks() {
  return liveProviderGroups.map(group => {
    const modes = group.providerKeys.map(key => process.env[key] || "sandbox");
    const liveModes = modes.filter(mode => mode !== "sandbox");
    const bridgeReady = hasValue("PROVIDER_ENGINE_BASE_URL") && group.credentialKeys.some(key => key.endsWith("_API_KEY") && hasValue(key));
    const hasCredentials = group.credentialKeys.every(hasValue) || bridgeReady || Boolean(group.alternateCredentialKeys?.every(hasValue));
    const ready = liveModes.length === group.providerKeys.length && hasCredentials;
    const detail = ready
      ? `${group.module} live providers are configured.`
      : `${group.module} remains sandbox/local until provider modes and credentials are set. Use PROVIDER_ENGINE_BASE_URL plus the module API key as the fastest bridge path.`;
    return check(`${group.module} live providers`, ready, detail, "live-provider");
  });
}

function aiReady() {
  return hasValue("OPENAI_API_KEY") || (
    process.env.AI_PROVIDER === "webhook"
    && hasValue("AI_WEBHOOK_URL")
    && hasValue("AI_PROVIDER_API_KEY")
  );
}

function mapReady() {
  return process.env.MAP_TILE_PROVIDER === "custom-tile" && hasValue("MAP_TILE_URL");
}

async function main() {
  const checks = [
    check("Node runtime", Boolean(process.execPath) || toolAvailable("node", ["C:\\Program Files\\nodejs\\node.exe"]), `Node is required to run the app. Current runtime: ${process.version}.`, "blocker"),
    check("npm", toolAvailable("npm", ["C:\\Program Files\\nodejs\\npm.cmd"]), "npm is required to install production dependencies.", "blocker"),
    check("git", toolAvailable("git", ["C:\\Program Files\\Git\\cmd\\git.exe"]), "git is required for release branches and deployment workflows.", "release"),
    check("Docker or psql", toolAvailable("docker", ["C:\\Program Files\\Docker\\Docker\\resources\\bin\\docker.exe"]) || toolAvailable("psql", ["C:\\Program Files\\PostgreSQL\\17\\bin\\psql.exe"]), "Docker Desktop or psql/PostgreSQL is required to apply database migrations.", "blocker"),
    check("pg package", packageInstalled("pg"), "Install dependencies with npm install so PostgreSQL runtime can load pg.", "blocker"),
    check("DATABASE_URL", hasValue("DATABASE_URL"), "DATABASE_URL must point to the production PostgreSQL database.", "blocker"),
    check("PostgreSQL workflow state", process.env.AGRINEXUS_STATE_STORE === "postgres", "Set AGRINEXUS_STATE_STORE=postgres so learning and workforce records persist to PostgreSQL.", "blocker"),
    check("PostgreSQL verified", await postgresVerified(), "Foundation migrations and seed data must verify against PostgreSQL.", "blocker"),
    check("SESSION_SECRET", hasValue("SESSION_SECRET") && process.env.SESSION_SECRET.length >= 48, "SESSION_SECRET should be a strong production secret.", "blocker"),
    check("PASSWORD_PEPPER", hasValue("PASSWORD_PEPPER") && process.env.PASSWORD_PEPPER.length >= 32, "PASSWORD_PEPPER should be a strong production secret.", "blocker"),
    check("Legal pages", ["terms.html", "privacy.html", "refund.html"].every(file => fileExists(`public/${file}`)), "Terms, Privacy, and Refund Policy must be present.", "release"),
    check("Click-through audit", fileExists("scripts/production-clickthrough.js"), "Production click-through audit must be available.", "release"),
    check("AI provider", aiReady(), "Set OPENAI_API_KEY for OpenAI or configure AI_PROVIDER=webhook with AI_WEBHOOK_URL and AI_PROVIDER_API_KEY.", "live-provider"),
    check("Map provider", mapReady(), "Set MAP_TILE_PROVIDER=custom-tile and MAP_TILE_URL for live map tiles.", "live-provider"),
    ...providerChecks()
  ];

  const ready = checks.filter(item => item.ready).length;
  const blockers = checks.filter(item => !item.ready && item.severity === "blocker");
  const liveGaps = checks.filter(item => !item.ready && item.severity === "live-provider");
  const releaseGaps = checks.filter(item => !item.ready && item.severity === "release");

  console.log("AgriNexus Production Preflight");
  console.log(`Ready checks: ${ready}/${checks.length}`);
  console.log("");

  for (const item of checks) {
    const status = item.ready ? "READY" : "NEEDS SETUP";
    console.log(`[${status}] ${item.label}`);
    console.log(`  ${item.detail}`);
  }

  console.log("");
  if (!blockers.length && !liveGaps.length && !releaseGaps.length) {
    console.log("Production preflight passed.");
  } else {
    if (blockers.length) console.log(`Blocking infrastructure gaps: ${blockers.map(item => item.label).join(", ")}`);
    if (liveGaps.length) console.log(`Live integration gaps: ${liveGaps.map(item => item.label).join(", ")}`);
    if (releaseGaps.length) console.log(`Release workflow gaps: ${releaseGaps.map(item => item.label).join(", ")}`);
    process.exitCode = 1;
  }
}

main().catch(error => {
  console.error(error.message || error);
  process.exit(1);
});
