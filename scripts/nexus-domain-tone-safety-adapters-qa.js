const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const app = fs.readFileSync(path.join(root, "public", "app.js"), "utf8");
const pkg = JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8"));
const qaSuite = fs.readFileSync(path.join(root, "scripts", "qa-suite.js"), "utf8");

function assert(condition, message) {
  if (!condition) {
    console.error(`FAIL ${message}`);
    process.exit(1);
  }
  console.log(`PASS ${message}`);
}

function includes(source, token, message) {
  assert(source.includes(token), message || `contains ${token}`);
}

function blockBetween(source, start, end) {
  const startIndex = source.indexOf(start);
  assert(startIndex >= 0, `block start exists: ${start}`);
  const endIndex = source.indexOf(end, startIndex + start.length);
  assert(endIndex > startIndex, `block end exists: ${end}`);
  return source.slice(startIndex, endIndex);
}

const contractBlock = blockBetween(app, "const NEXUS_DOMAIN_TONE_SAFETY_ADAPTER_CONTRACT", "function resolveNexusDomainToneSafetyAdapter");
[
  'schemaVersion: "nexus-domain-tone-safety-adapter.v1"',
  'adapterName: "NexusDomainToneSafetyAdapter"',
  '"health"',
  '"agriculture"',
  '"marketplace"',
  '"logistics"',
  '"workforce"',
  '"learning"',
  '"drone"',
  '"communications"',
  '"general"',
  '"plainLanguageFrame"',
  '"safetyBoundary"',
  '"forbiddenClaims"',
  '"confirmationRequirement"',
  "noDiagnosis: true",
  "noPrescribing: true",
  "noEmergencyDispatch: true",
  "noProviderHandoffClaim: true",
  "noPurchaseOrPaymentClaim: true",
  "noMessageOrCallWithoutConfirmation: true",
  "noDroneFlightOrImagingClaim: true"
].forEach(token => includes(contractBlock, token, `domain adapter contract token ${token}`));

[
  "I can organize health information for education, intake, RPM or RTM tracking, and provider review, but I do not diagnose, prescribe, change medication, contact providers, or handle emergencies.",
  "I can prepare crop, farm, weather, market, and field-visit guidance, but I do not guarantee yield, prescribe chemical use, dispatch field teams, contact buyers, or execute purchases.",
  "I can prepare review details, but I do not buy, sell, pay, or contact anyone without the required gates.",
  "I can plan route and logistics context from user-provided details, but I do not share location, book rides, dispatch transport, track people, or contact carriers automatically.",
  "I can prepare workforce, resume, interview, and training guidance, but I do not submit applications, enroll users, contact employers, or certify completion automatically.",
  "I can explain topics and prepare learning paths, but I do not enroll users, issue certificates, submit coursework, or claim official credential completion.",
  "I can prepare drone service requirements for review, but I do not control aircraft, capture imagery, launch missions, dispatch operators, or claim aviation approval.",
  "I can draft and review communication, but I do not send messages or start calls without provider setup and explicit confirmation.",
  "Every communication requires visible recipient, provider, purpose preview, cancellation path, audit event, and final confirmation."
].forEach(token => includes(contractBlock, token, `domain adapter safety copy ${token.slice(0, 42)}`));

[
  "diagnosis claim",
  "buyer contact claim",
  "payment execution claim",
  "message delivery claim",
  "provider acceptance claim",
  "live action execution claim"
].forEach(token => includes(contractBlock, token, `domain adapter forbidden claim label ${token}`));

const composerBlock = blockBetween(app, "function composeNexusConversationStyleResponse", "function normalizeNexusExperienceMode");
[
  "const domainAdapter = resolveNexusDomainToneSafetyAdapter(domain, context)",
  "plainLanguageFrame: domainAdapter.plainLanguageFrame",
  "forbiddenClaims: domainAdapter.forbiddenClaims",
  "confirmationRequirement: domainAdapter.confirmationRequirement",
  "domainTone: domainAdapter.tone",
  "domainPace: domainAdapter.pace",
  "domainAdapter,"
].forEach(token => includes(composerBlock, token, `style composer uses domain adapter ${token}`));

[
  "window.NEXUS_DOMAIN_TONE_SAFETY_ADAPTER_CONTRACT = NEXUS_DOMAIN_TONE_SAFETY_ADAPTER_CONTRACT",
  "window.resolveNexusDomainToneSafetyAdapter = resolveNexusDomainToneSafetyAdapter"
].forEach(token => includes(app, token, `domain adapter API exposure ${token}`));

assert(!/(we diagnosed|we prescribed|i diagnosed|i prescribed|i sent the message|i started the call|i completed payment|i booked the appointment|i dispatched|provider accepted)/i.test(contractBlock + composerBlock), "domain adapters avoid unsafe completion assertions");
assert(pkg.scripts["qa:nexus-domain-tone-safety-adapters"] === "node scripts/nexus-domain-tone-safety-adapters-qa.js", "package alias exists");
assert(qaSuite.includes("scripts/nexus-domain-tone-safety-adapters-qa.js"), "safe QA suite includes domain tone safety adapter QA");

console.log("Nexus domain tone safety adapters QA passed.");
