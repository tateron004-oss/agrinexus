const { loadEnvFile } = require("../foundation/src/runtime/env-file");

loadEnvFile();

const checks = [
  {
    label: "Live job network provider mode",
    keys: ["WORKFORCE_JOB_PROVIDER"],
    ready: value => value && value !== "sandbox",
    detail: "Set WORKFORCE_JOB_PROVIDER=webhook or a named live job network provider."
  },
  {
    label: "Live job network endpoint",
    keys: ["WORKFORCE_JOB_WEBHOOK_URL"],
    ready: value => /^https?:\/\//.test(value || ""),
    detail: "Set WORKFORCE_JOB_WEBHOOK_URL to the hosted job network endpoint."
  },
  {
    label: "Calendar provider mode",
    keys: ["WORKFORCE_CALENDAR_PROVIDER"],
    ready: value => value && value !== "sandbox",
    detail: "Set WORKFORCE_CALENDAR_PROVIDER=webhook or a named live calendar provider."
  },
  {
    label: "Calendar endpoint",
    keys: ["WORKFORCE_CALENDAR_WEBHOOK_URL"],
    ready: value => /^https?:\/\//.test(value || ""),
    detail: "Set WORKFORCE_CALENDAR_WEBHOOK_URL to the hosted calendar integration endpoint."
  },
  {
    label: "Notification provider mode",
    keys: ["WORKFORCE_NOTIFICATION_PROVIDER"],
    ready: value => value && value !== "sandbox",
    detail: "Set WORKFORCE_NOTIFICATION_PROVIDER=webhook or a named live notification provider."
  },
  {
    label: "Notification endpoint",
    keys: ["WORKFORCE_NOTIFICATION_WEBHOOK_URL"],
    ready: value => /^https?:\/\//.test(value || ""),
    detail: "Set WORKFORCE_NOTIFICATION_WEBHOOK_URL to the hosted SMS/email/WhatsApp endpoint."
  },
  {
    label: "HRIS provider mode",
    keys: ["WORKFORCE_HRIS_PROVIDER"],
    ready: value => value && value !== "sandbox",
    detail: "Set WORKFORCE_HRIS_PROVIDER=webhook or a named live HRIS provider."
  },
  {
    label: "HRIS endpoint",
    keys: ["WORKFORCE_HRIS_WEBHOOK_URL"],
    ready: value => /^https?:\/\//.test(value || ""),
    detail: "Set WORKFORCE_HRIS_WEBHOOK_URL to the hosted applicant/HRIS integration endpoint."
  },
  {
    label: "Shift scheduling provider mode",
    keys: ["WORKFORCE_SHIFT_PROVIDER"],
    ready: value => value && value !== "sandbox",
    detail: "Set WORKFORCE_SHIFT_PROVIDER=webhook or a named live scheduler provider."
  },
  {
    label: "Shift scheduling endpoint",
    keys: ["WORKFORCE_SHIFT_WEBHOOK_URL"],
    ready: value => /^https?:\/\//.test(value || ""),
    detail: "Set WORKFORCE_SHIFT_WEBHOOK_URL to the hosted shift scheduling endpoint."
  },
  {
    label: "Workforce provider API key",
    keys: ["WORKFORCE_PROVIDER_API_KEY"],
    ready: value => Boolean(value && value.length >= 24 && !value.includes("replace-with")),
    detail: "Set WORKFORCE_PROVIDER_API_KEY to the shared secret expected by workforce endpoints."
  }
];

let readyCount = 0;

console.log("AgriNexus Workforce Live Network Check");
for (const check of checks) {
  const values = check.keys.map(key => process.env[key] || "");
  const ready = values.some(check.ready);
  if (ready) readyCount += 1;
  console.log(`[${ready ? "READY" : "NEEDS SETUP"}] ${check.label}`);
  console.log(`  ${ready ? check.keys.map(key => `${key}=configured`).join(", ") : check.detail}`);
}

console.log("");
console.log(`Ready checks: ${readyCount}/${checks.length}`);
if (readyCount !== checks.length) {
  console.log("Workforce is not fully live until every provider mode, endpoint, and API key is configured in hosting.");
  process.exitCode = 1;
} else {
  console.log("Workforce live network configuration is complete.");
}
