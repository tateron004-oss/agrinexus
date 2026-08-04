"use strict";

function validatedDeployHook(value) {
  let url;
  try {
    url = new URL(String(value || ""));
  } catch {
    throw new Error("RENDER_DEPLOY_HOOK_URL is not configured as a valid HTTPS GitHub Actions secret");
  }
  if (url.protocol !== "https:" || url.hostname !== "api.render.com" || !url.pathname.startsWith("/deploy/")) {
    throw new Error("RENDER_DEPLOY_HOOK_URL must be an official https://api.render.com/deploy/... hook");
  }
  return url;
}

function validatedReleaseSha(value) {
  const releaseSha = String(value || "").trim().toLowerCase();
  if (!/^[a-f0-9]{7,40}$/.test(releaseSha)) {
    throw new Error("NEXUS_EXPECTED_DEPLOYMENT_SHA must be a Git commit SHA");
  }
  return releaseSha;
}

async function triggerDeploy({ hookUrl, releaseSha, fetchImpl = fetch }) {
  const url = validatedDeployHook(hookUrl);
  url.searchParams.set("ref", validatedReleaseSha(releaseSha));
  const response = await fetchImpl(url, {
    method: "POST",
    headers: { accept: "application/json" },
    redirect: "error"
  });
  if (!response.ok) {
    throw new Error(`Render deploy hook returned HTTP ${response.status}`);
  }
  return { accepted: true, status: response.status };
}

async function main() {
  const result = await triggerDeploy({
    hookUrl: process.env.RENDER_DEPLOY_HOOK_URL,
    releaseSha: process.env.NEXUS_EXPECTED_DEPLOYMENT_SHA || process.env.NEXUS_EXPECTED_RELEASE_SHA
  });
  console.log(`Render deployment accepted (HTTP ${result.status}); exact release verification is next.`);
}

if (require.main === module) {
  main().catch((error) => {
    console.error(error.message);
    process.exitCode = 1;
  });
}

module.exports = { triggerDeploy, validatedDeployHook, validatedReleaseSha };
