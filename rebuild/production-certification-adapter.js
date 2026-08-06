"use strict";

const http = require("node:http");
const path = require("node:path");
const { execFileSync, spawn } = require("node:child_process");
const { createCertificationIdentity } = require("./nexus-core/certification-identity");

function gitRuntimeSourceSha(root, bundleRelativePath = "rebuild/browser/nexus-clean.bundle.js") {
  try {
    return execFileSync("git", ["log", "-1", "--format=%H", "--", bundleRelativePath], {
      cwd: root,
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"]
    }).trim();
  } catch {
    return "";
  }
}

function certificationIdentity(root, env = process.env) {
  const deployedReleaseSha = String(env.RENDER_GIT_COMMIT || env.NEXUS_DEPLOYED_RELEASE_SHA || "unknown").trim();
  const runtimeSourceSha = String(
    env.NEXUS_RUNTIME_SOURCE_SHA || gitRuntimeSourceSha(root) || deployedReleaseSha
  ).trim();
  return Object.freeze({
    ...createCertificationIdentity({
      bundlePath: path.join(root, "rebuild/browser/nexus-clean.bundle.js"),
      releaseSha: runtimeSourceSha,
      deployedAt: env.RENDER_SERVICE_DEPLOYED_AT
    }),
    deployedReleaseSha,
    runtimeSourceSha
  });
}

function json(response, status, value) {
  response.writeHead(status, {
    "content-type": "application/json; charset=utf-8",
    "cache-control": "no-store",
    "x-content-type-options": "nosniff"
  });
  response.end(JSON.stringify(value));
}

function isCertificationRequest(request) {
  const url = new URL(request.url, `http://${request.headers.host || "nexus.local"}`);
  if (url.pathname === "/certification" || url.pathname.startsWith("/certification/")) return true;
  try {
    const referer = new URL(String(request.headers.referer || ""));
    return referer.pathname.startsWith("/certification") && url.pathname.startsWith("/api/");
  } catch {
    return false;
  }
}

function createProductionCertificationAdapter({
  root = path.resolve(__dirname, ".."),
  host = "127.0.0.1",
  port = Number(process.env.NEXUS_CERTIFICATION_PORT || 4318),
  env = process.env,
  startChild = true
} = {}) {
  const identity = certificationIdentity(root, env);
  const child = startChild ? spawn(process.execPath, [path.join(root, "rebuild/server.js")], {
    cwd: root,
    env: {
      ...env,
      NEXUS_CLEAN_HOST: host,
      NEXUS_CLEAN_PORT: String(port),
      NEXUS_CLEAN_CERTIFICATION: "true"
    },
    stdio: ["ignore", "inherit", "inherit"]
  }) : null;

  if (child) {
    child.on("exit", (code, signal) => {
      if (!child.killed) console.error(`Nexus certification adapter exited (${code == null ? signal : code}).`);
    });
    process.once("exit", () => { if (!child.killed) child.kill(); });
  }

  async function handle(request, response) {
    if (!isCertificationRequest(request)) return false;
    const url = new URL(request.url, `http://${request.headers.host || "nexus.local"}`);
    const upstreamPath = url.pathname.replace(/^\/certification(?=\/|$)/, "") || "/";
    if (upstreamPath === "/api/certification/identity") {
      json(response, 200, identity);
      return true;
    }
    if (!child) {
      json(response, 503, { error: "certification-runtime-unavailable" });
      return true;
    }
    await new Promise((resolve) => {
      const upstream = http.request({
        hostname: host,
        port,
        method: request.method,
        path: `${upstreamPath}${url.search}`,
        headers: { ...request.headers, host: `${host}:${port}` }
      }, (upstreamResponse) => {
        response.writeHead(upstreamResponse.statusCode || 502, {
          ...upstreamResponse.headers,
          "cache-control": "no-store"
        });
        upstreamResponse.pipe(response);
        upstreamResponse.on("end", resolve);
      });
      upstream.on("error", (error) => {
        json(response, 502, { error: "certification-runtime-unavailable", message: error.message });
        resolve();
      });
      request.pipe(upstream);
    });
    return true;
  }

  return Object.freeze({ handle, identity, child });
}

module.exports = {
  certificationIdentity,
  createProductionCertificationAdapter,
  gitRuntimeSourceSha,
  isCertificationRequest
};
