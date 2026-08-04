"use strict";

const CANONICAL_SERVICE_NAME = "agrinexus-platform";
const CANONICAL_SERVICE_URL = "https://agrinexus-platform.onrender.com";

function validatedReleaseSha(value) {
  const releaseSha = String(value || "").trim().toLowerCase();
  if (!/^[a-f0-9]{7,40}$/.test(releaseSha)) {
    throw new Error("NEXUS_EXPECTED_DEPLOYMENT_SHA must be a Git commit SHA");
  }
  return releaseSha;
}

function requiredSecret(value, name) {
  const secret = String(value || "").trim();
  if (!secret) throw new Error(`${name} is required for canonical Render API deployment`);
  return secret;
}

function normalizedServiceUrl(service) {
  return String(service?.serviceDetails?.url || service?.url || "").replace(/\/+$/, "");
}

function assertCanonicalService(service, expectedServiceId) {
  const failures = [];
  if (String(service?.id || "") !== expectedServiceId) failures.push("service-id");
  if (String(service?.name || "") !== CANONICAL_SERVICE_NAME) failures.push("service-name");
  if (normalizedServiceUrl(service) !== CANONICAL_SERVICE_URL) failures.push("service-url");
  if (failures.length) {
    throw new Error(`RENDER_CANONICAL_SERVICE_MISMATCH: ${failures.join(", ")}`);
  }
}

async function renderRequest(path, { apiKey, fetchImpl, method = "GET", body }) {
  const response = await fetchImpl(`https://api.render.com/v1${path}`, {
    method,
    headers: {
      accept: "application/json",
      authorization: `Bearer ${apiKey}`,
      ...(body ? { "content-type": "application/json" } : {})
    },
    redirect: "error",
    ...(body ? { body: JSON.stringify(body) } : {})
  });
  if (!response.ok) throw new Error(`Render API ${method} ${path} returned HTTP ${response.status}`);
  return response.json();
}

async function deployCanonicalService({ apiKey, serviceId, releaseSha, fetchImpl = fetch }) {
  apiKey = requiredSecret(apiKey, "RENDER_API_KEY");
  serviceId = requiredSecret(serviceId, "RENDER_AGRINEXUS_PLATFORM_SERVICE_ID");
  releaseSha = validatedReleaseSha(releaseSha);

  const service = await renderRequest(`/services/${encodeURIComponent(serviceId)}`, { apiKey, fetchImpl });
  assertCanonicalService(service, serviceId);

  const deployment = await renderRequest(`/services/${encodeURIComponent(serviceId)}/deploys`, {
    apiKey,
    fetchImpl,
    method: "POST",
    body: { clearCache: "do_not_clear", commitId: releaseSha }
  });
  return { accepted: true, serviceId, serviceName: service.name, releaseSha, deploymentId: deployment?.id || null };
}

async function main() {
  const result = await deployCanonicalService({
    apiKey: process.env.RENDER_API_KEY,
    serviceId: process.env.RENDER_AGRINEXUS_PLATFORM_SERVICE_ID,
    releaseSha: process.env.NEXUS_EXPECTED_DEPLOYMENT_SHA || process.env.NEXUS_EXPECTED_RELEASE_SHA
  });
  console.log(`Render deployment ${result.deploymentId || "accepted"} bound to ${result.serviceName} (${result.serviceId}) at ${result.releaseSha}.`);
}

if (require.main === module) {
  main().catch((error) => {
    console.error(error.message);
    process.exitCode = 1;
  });
}

module.exports = {
  CANONICAL_SERVICE_NAME,
  CANONICAL_SERVICE_URL,
  assertCanonicalService,
  deployCanonicalService,
  normalizedServiceUrl,
  requiredSecret,
  validatedReleaseSha
};
