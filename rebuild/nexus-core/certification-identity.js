"use strict";

const crypto = require("node:crypto");
const fs = require("node:fs");

const CERTIFICATION_CONTRACT_VERSION = "nexus.release-certification.v2";

function sha256File(file) {
  return crypto.createHash("sha256").update(fs.readFileSync(file)).digest("hex");
}

function createCertificationIdentity({ bundlePath, releaseSha, deployedAt } = {}) {
  if (!bundlePath) throw new Error("Certification identity requires bundlePath.");
  return Object.freeze({
    schema: "nexus.certification.identity.v1",
    contractVersion: CERTIFICATION_CONTRACT_VERSION,
    releaseSha: String(releaseSha || "unknown").trim(),
    bundleSha256: sha256File(bundlePath),
    deployedAt: deployedAt || null
  });
}

module.exports = {
  CERTIFICATION_CONTRACT_VERSION,
  createCertificationIdentity,
  sha256File
};
