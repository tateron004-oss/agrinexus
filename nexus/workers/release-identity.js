"use strict";

function resolveWorkerReleaseSha(env = process.env) {
  const releaseSha = env.NEXUS_RELEASE_SHA || env.RENDER_GIT_COMMIT || env.GIT_SHA || "development";
  if (env.NODE_ENV === "production" && !/^[0-9a-f]{40}$/i.test(releaseSha)) {
    throw new Error("Nexus production worker requires an exact 40-character release SHA.");
  }
  return releaseSha;
}

module.exports = Object.freeze({ resolveWorkerReleaseSha });
