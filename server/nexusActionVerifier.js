const connectorRuntime = require("./nexusConnectorRuntime");
const { getCapability } = require("./nexusCapabilityRegistry");

function verifyAction({ referenceId = "", capabilityId = "", connectorKey = "" } = {}, env = process.env) {
  const capability = capabilityId ? getCapability(capabilityId) : null;
  const resolvedConnector = connectorKey || capability?.connectorKey || "none";
  const verification = connectorRuntime.verify(referenceId, resolvedConnector, env);
  return {
    ok: verification.ok,
    runtime: "nexus_production_capability_runtime",
    mode: "verified",
    verification,
    referenceId,
    capabilityId: capability?.id || capabilityId || "",
    connectorKey: resolvedConnector,
    userMessage: verification.message
  };
}

module.exports = { verifyAction };
