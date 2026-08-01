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

async function triggerDeploy({ hookUrl, fetchImpl = fetch }) {
  const url = validatedDeployHook(hookUrl);
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
  const result = await triggerDeploy({ hookUrl: process.env.RENDER_DEPLOY_HOOK_URL });
  console.log(`Render deployment accepted (HTTP ${result.status}); exact release verification is next.`);
}

if (require.main === module) {
  main().catch((error) => {
    console.error(error.message);
    process.exitCode = 1;
  });
}

module.exports = { triggerDeploy, validatedDeployHook };
