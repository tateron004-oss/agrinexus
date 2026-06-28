const fs = require("node:fs");
const path = require("node:path");
const contract = require("../public/nexus-appointment-service-request-contract.js");

const fixturePath = path.resolve(__dirname, "..", "fixtures", "nexus", "appointment-service-requests.json");

function loadAppointmentServiceRequestFixtures() {
  return JSON.parse(fs.readFileSync(fixturePath, "utf8"));
}

function runAppointmentServiceRequestFixtures() {
  return loadAppointmentServiceRequestFixtures().map(fixture => {
    const validation = contract.validateAppointmentServiceRequestIntent(fixture);
    return Object.freeze({
      fixtureId: fixture.fixtureId,
      ok: validation.ok,
      previewAllowed: validation.previewAllowed,
      executionAllowed: validation.executionAllowed,
      serviceRequestType: fixture.serviceRequestType,
      requestedServiceCategory: fixture.requestedServiceCategory,
      riskTier: fixture.riskTier,
      failures: Object.freeze(validation.failures)
    });
  });
}

if (require.main === module) {
  const results = runAppointmentServiceRequestFixtures();
  const failed = results.filter(result => !result.ok);
  results.forEach(result => {
    console.log(`${result.fixtureId}: ${result.ok ? "ok" : "failed"} (${result.riskTier})`);
  });
  if (failed.length > 0) process.exitCode = 1;
}

module.exports = Object.freeze({
  loadAppointmentServiceRequestFixtures,
  runAppointmentServiceRequestFixtures
});
