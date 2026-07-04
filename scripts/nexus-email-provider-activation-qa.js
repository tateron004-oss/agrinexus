const assert = require("node:assert");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const read = relativePath => fs.readFileSync(path.join(root, relativePath), "utf8");

const server = read("server.js");
const app = read("public/app.js");
const envExample = read(".env.example");
const packageJson = JSON.parse(read("package.json"));
const qaSuite = read("scripts/qa-suite.js");

function includes(source, token, label) {
  assert(source.includes(token), `${label} should include ${token}`);
}

function excludes(source, token, label) {
  assert(!source.includes(token), `${label} must not include ${token}`);
}

[
  "nexusEmailProviderStatus",
  "NEXUS_EMAIL_PROVIDER",
  "SMTP_HOST",
  "SMTP_PORT",
  "SMTP_USER",
  "SMTP_PASS",
  "SMTP_FROM",
  "SENDGRID_API_KEY",
  "SENDGRID_FROM_EMAIL",
  "sendNexusSmtpEmail",
  "sendNexusSendGridEmail",
  "nexusEmailSendPacket",
  "/api/nexus/email/status",
  "/api/nexus/email/send-packet",
  "confirmation_required",
  "consent_required",
  "email-provider-unconfigured",
  "email-blocked",
  "No email was sent",
  "noSecretValuesReturned"
].forEach(token => includes(server, token, `server ${token}`));

[
  "NEXUS_EMAIL_PROVIDER=smtp",
  "SMTP_HOST=",
  "SMTP_PORT=",
  "SMTP_USER=",
  "SMTP_PASS=",
  "SMTP_FROM=",
  "SENDGRID_API_KEY=",
  "SENDGRID_FROM_EMAIL="
].forEach(token => includes(envExample, token, `.env.example ${token}`));

[
  "data-testid=\"nexus-email-provider-status-card\"",
  "data-testid=\"nexus-email-send-packet-panel\"",
  "data-testid=\"nexus-email-recipient\"",
  "data-testid=\"nexus-email-confirmed\"",
  "data-testid=\"nexus-email-consent\"",
  "data-testid=\"nexus-email-send-packet\"",
  "/api/nexus/email/status",
  "/api/nexus/email/send-packet"
].forEach(token => includes(app, token, `app ${token}`));

[
  "fallbackMissing",
  "SMTP_HOST",
  "SMTP_PASS",
  "SENDGRID_FROM_EMAIL",
  "nexusEmailBound",
  "stopImmediatePropagation",
  "closest?.(\"[data-testid='nexus-email-send-packet-panel']\")",
  "emailPanel.querySelector(\"[data-nexus-email-recipient]\")"
].forEach(token => includes(app, token, `app missing env display ${token}`));

[
  "Email sent by the configured provider. Message metadata was recorded safely.",
  "Email was not sent. Add a recipient email before continuing.",
  "Email was not sent. Confirm the send before continuing.",
  "Consent is required",
  "queued the packet locally"
].forEach(token => includes(app, token, `app email UI copy ${token}`));

[
  "SMTP_PASS: ",
  "SENDGRID_API_KEY: ",
  "authorization: `Bearer ${env.SENDGRID_API_KEY}`",
  "Email was sent without confirmation",
  "diagnosed the patient",
  "prescribed medication"
].forEach(token => {
  excludes(server, token, `server unsafe token ${token}`);
  excludes(app, token, `app unsafe token ${token}`);
});

assert.strictEqual(
  packageJson.scripts["qa:nexus-email-provider-activation"],
  "node scripts/nexus-email-provider-activation-qa.js",
  "package alias should run email provider activation QA"
);
includes(qaSuite, "scripts/nexus-email-provider-activation-qa.js", "qa suite should include email provider activation QA");

console.log("nexus-email-provider-activation QA passed");
