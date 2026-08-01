"use strict";

const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");
const crypto = require("node:crypto");
const { spawn } = require("node:child_process");
const { createContentActionService } = require("./nexus-core/content-action-service");
const { createOpenMapProvider } = require("./nexus-core/map-service");
const { loadLocalEnvFiles } = require("../server/local-env-loader");

const ROOT = path.resolve(__dirname, "..");
const HOST = process.env.HOST || "0.0.0.0";
const PORT = Number(process.env.PORT || 10000);
const LEGACY_PORT = Number(process.env.NEXUS_LEGACY_PORT || (PORT === 65535 ? 65534 : PORT + 1));
const CERTIFICATION_PORT = Number(process.env.NEXUS_CERTIFICATION_PORT || (PORT === 65535 ? 65533 : PORT + 2));
const LEGACY_HOST = "127.0.0.1";
const MAX_BODY = 256 * 1024;
const bridgeSessions = new Set();
if (process.env.NEXUS_DISABLE_LOCAL_ENV_FILES !== "true") loadLocalEnvFiles(ROOT);
const BRIDGE_FILES = Object.freeze({
  "/nexus-production-capability-bridge.js": [path.join(__dirname, "browser", "nexus-production-capability-bridge.js"), "application/javascript; charset=utf-8"],
  "/nexus-production-capability-bridge.css": [path.join(__dirname, "browser", "nexus-production-capability-bridge.css"), "text/css; charset=utf-8"]
});

function timeoutFetch(timeoutMs = 12000) {
  return async (url, options = {}) => {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(new Error(`Provider timed out after ${timeoutMs} ms.`)), timeoutMs);
    try {
      return await fetch(url, { ...options, signal: options.signal || controller.signal });
    } finally {
      clearTimeout(timer);
    }
  };
}

const providerFetch = timeoutFetch(Number(process.env.NEXUS_CAPABILITY_PROVIDER_TIMEOUT_MS || 12000));

function json(response, status, value) {
  response.statusCode = status;
  response.setHeader("content-type", "application/json; charset=utf-8");
  response.setHeader("cache-control", "no-store");
  response.setHeader("x-content-type-options", "nosniff");
  response.end(JSON.stringify(value));
}

function cookies(request) {
  return Object.fromEntries(String(request.headers.cookie || "").split(";").map(part => part.trim()).filter(Boolean).map(part => {
    const index = part.indexOf("=");
    return index < 0 ? [part, ""] : [part.slice(0, index), decodeURIComponent(part.slice(index + 1))];
  }));
}

function appendSetCookie(headers, value) {
  const existing = headers["set-cookie"];
  headers["set-cookie"] = [...(Array.isArray(existing) ? existing : existing ? [existing] : []), value];
}

async function readJson(request) {
  let body = "";
  for await (const chunk of request) {
    body += chunk;
    if (body.length > MAX_BODY) throw new Error("Capability request is too large.");
  }
  try { return JSON.parse(body || "{}"); } catch { throw new Error("Capability request must contain valid JSON."); }
}

function proxyRequest(request, response, { capture = false } = {}) {
  return new Promise((resolve, reject) => {
    const upstream = http.request({
      hostname: LEGACY_HOST,
      port: LEGACY_PORT,
      method: request.method,
      path: request.url,
      headers: { ...request.headers, host: `${LEGACY_HOST}:${LEGACY_PORT}` }
    }, (legacyResponse) => {
      if (!capture) {
        response.writeHead(legacyResponse.statusCode || 502, legacyResponse.headers);
        legacyResponse.pipe(response);
        legacyResponse.on("end", resolve);
        return;
      }
      const chunks = [];
      legacyResponse.on("data", chunk => chunks.push(chunk));
      legacyResponse.on("end", () => resolve({
        statusCode: legacyResponse.statusCode || 502,
        headers: legacyResponse.headers,
        body: Buffer.concat(chunks)
      }));
    });
    upstream.on("error", reject);
    request.pipe(upstream);
  });
}

function proxyCertificationRequest(request, response) {
  return new Promise((resolve, reject) => {
    const upstreamPath = request.url.replace(/^\/certification(?=\/|\?|$)/, "") || "/";
    const upstream = http.request({
      hostname: LEGACY_HOST,
      port: CERTIFICATION_PORT,
      method: request.method,
      path: upstreamPath,
      headers: { ...request.headers, host: `${LEGACY_HOST}:${CERTIFICATION_PORT}` }
    }, (certificationResponse) => {
      const headers = { ...certificationResponse.headers, "cache-control": "no-store" };
      response.writeHead(certificationResponse.statusCode || 502, headers);
      certificationResponse.pipe(response);
      certificationResponse.on("end", resolve);
    });
    upstream.on("error", reject);
    request.pipe(upstream);
  });
}

function legacyGet(pathname, request) {
  return new Promise((resolve, reject) => {
    const upstream = http.request({
      hostname: LEGACY_HOST,
      port: LEGACY_PORT,
      method: "GET",
      path: pathname,
      headers: {
        accept: "application/json",
        cookie: request.headers.cookie || "",
        authorization: request.headers.authorization || "",
        host: `${LEGACY_HOST}:${LEGACY_PORT}`
      }
    }, (legacyResponse) => {
      legacyResponse.resume();
      legacyResponse.on("end", () => resolve(legacyResponse.statusCode || 500));
    });
    upstream.on("error", reject);
    upstream.end();
  });
}

function injectBridge(html) {
  const tags = [
    '<link rel="stylesheet" href="/nexus-production-capability-bridge.css?v=production-experience-1">',
    '<script src="/nexus-production-capability-bridge.js?v=production-experience-1"></script>'
  ].join("\n  ");
  if (html.includes("/nexus-production-capability-bridge.js")) return html;
  return html.replace("<script src=\"/app.js", `${tags}\n  <script src=\"/app.js`);
}

async function handleCapability(request, response) {
  const requestCookies = cookies(request);
  const headerSession = String(request.headers["x-nexus-capability-session"] || "");
  const cookieSession = String(requestCookies.nexus_capability_sid || "");
  const protectedSessionValid = bridgeSessions.has(headerSession)
    || bridgeSessions.has(cookieSession)
    || await legacyGet("/api/state", request).then(status => status === 200).catch(() => false);
  if (!protectedSessionValid) return json(response, 401, {
    error: "capability-authentication-required",
    message: "A valid signed-in Nexus session is required.",
    authEvidence: {
      bridgeHeaderPresented: Boolean(headerSession),
      bridgeCookiePresented: Boolean(cookieSession),
      protectedCookiePresented: Boolean(requestCookies.agrinexus_sid || requestCookies.agrinexus_auth),
      noSecretValues: true
    }
  });
  const body = await readJson(request);
  const startedAt = Date.now();
  const providerTrace = [];
  const trackedFetch = async (input, options = {}) => {
    const providerStartedAt = Date.now();
    const parsed = new URL(String(input && input.url || input));
    const record = { provider: parsed.hostname, path: parsed.pathname, method: String(options.method || "GET").toUpperCase(), status: null, elapsedMs: null, error: null };
    providerTrace.push(record);
    try {
      const providerResponse = await providerFetch(input, options);
      record.status = providerResponse.status;
      return providerResponse;
    } catch (error) {
      record.error = String(error.message || "provider-request-failed").slice(0, 300);
      throw error;
    } finally {
      record.elapsedMs = Date.now() - providerStartedAt;
    }
  };
  const contentService = createContentActionService({ fetchImpl: trackedFetch });
  const mapProvider = createOpenMapProvider({ fetchImpl: trackedFetch });
  const result = await contentService.execute(body, {
    map: command => mapProvider(command)
  });
  return json(response, 200, {
    ...result,
    timing: { totalMs: Date.now() - startedAt },
    providerTrace,
    productionBridge: true
  });
}

async function handler(request, response) {
  const url = new URL(request.url, `http://${request.headers.host || `${HOST}:${PORT}`}`);
  const certificationReferer = (() => {
    try { return new URL(String(request.headers.referer || "")).pathname.startsWith("/certification"); }
    catch { return false; }
  })();
  if (url.pathname === "/certification" || url.pathname.startsWith("/certification/") ||
      (certificationReferer && url.pathname.startsWith("/api/"))) {
    try { return await proxyCertificationRequest(request, response); }
    catch (error) { return json(response, 502, { error: "certification-runtime-unavailable", message: error.message }); }
  }
  if (url.pathname === "/api/login" && request.method === "POST") {
    try {
      const proxied = await proxyRequest(request, response, { capture: true });
      const headers = { ...proxied.headers };
      if (proxied.statusCode === 200) {
        const sid = crypto.randomBytes(24).toString("hex");
        bridgeSessions.add(sid);
        appendSetCookie(headers, `nexus_capability_sid=${encodeURIComponent(sid)}; Max-Age=43200; Path=/; SameSite=Lax; HttpOnly`);
        headers["x-nexus-capability-session"] = sid;
      }
      response.writeHead(proxied.statusCode, headers);
      return response.end(proxied.body);
    } catch (error) { return json(response, 502, { error: "legacy-runtime-unavailable", message: error.message }); }
  }
  if (url.pathname === "/api/logout" && request.method === "POST") {
    const sid = cookies(request).nexus_capability_sid || "";
    if (sid) bridgeSessions.delete(sid);
    try {
      const proxied = await proxyRequest(request, response, { capture: true });
      const headers = { ...proxied.headers };
      appendSetCookie(headers, "nexus_capability_sid=; Max-Age=0; Path=/; SameSite=Lax; HttpOnly");
      response.writeHead(proxied.statusCode, headers);
      return response.end(proxied.body);
    } catch (error) { return json(response, 502, { error: "legacy-runtime-unavailable", message: error.message }); }
  }
  if (BRIDGE_FILES[url.pathname] && request.method === "GET") {
    const [filePath, contentType] = BRIDGE_FILES[url.pathname];
    const data = await fs.promises.readFile(filePath);
    response.writeHead(200, { "content-type": contentType, "cache-control": "no-store", "x-content-type-options": "nosniff" });
    return response.end(data);
  }
  if (url.pathname === "/api/capability/health" && request.method === "GET") {
    return json(response, 200, {
      ok: true,
      service: "nexus-production-capability-bridge",
      baseRelease: "501a1e06",
      protectedFiles: 29
    });
  }
  if (url.pathname === "/api/capability/content" && request.method === "POST") {
    try { return await handleCapability(request, response); }
    catch (error) {
      return json(response, /too large|valid JSON/i.test(error.message) ? 400 : 502, {
        error: "capability-provider-failed",
        message: String(error.message || "The capability provider failed.")
      });
    }
  }
  const acceptsHtml = String(request.headers.accept || "").includes("text/html");
  if (request.method === "GET" && (url.pathname === "/" || acceptsHtml)) {
    try {
      const proxied = await proxyRequest(request, response, { capture: true });
      const type = String(proxied.headers["content-type"] || "");
      if (proxied.statusCode === 200 && type.includes("text/html")) {
        const headers = { ...proxied.headers };
        delete headers["content-length"];
        headers["cache-control"] = "no-store";
        response.writeHead(200, headers);
        return response.end(injectBridge(proxied.body.toString("utf8")));
      }
      response.writeHead(proxied.statusCode, proxied.headers);
      return response.end(proxied.body);
    } catch (error) {
      return json(response, 502, { error: "legacy-runtime-unavailable", message: error.message });
    }
  }
  try { return await proxyRequest(request, response); }
  catch (error) { return json(response, 502, { error: "legacy-runtime-unavailable", message: error.message }); }
}

const legacy = spawn(process.execPath, [path.join(ROOT, "server.js")], {
  cwd: ROOT,
  env: { ...process.env, HOST: LEGACY_HOST, PORT: String(LEGACY_PORT), NEXUS_PRODUCTION_CAPABILITY_CHILD: "1" },
  stdio: ["ignore", "inherit", "inherit"]
});

const certification = spawn(process.execPath, [path.join(__dirname, "server.js")], {
  cwd: ROOT,
  env: {
    ...process.env,
    NEXUS_CLEAN_HOST: LEGACY_HOST,
    NEXUS_CLEAN_PORT: String(CERTIFICATION_PORT),
    NEXUS_CLEAN_CERTIFICATION: "true"
  },
  stdio: ["ignore", "inherit", "inherit"]
});

legacy.on("exit", (code, signal) => {
  console.error(`Protected Nexus runtime exited (${code == null ? signal : code}).`);
  process.exit(code || 1);
});

certification.on("exit", (code, signal) => {
  console.error(`Nexus certification runtime exited (${code == null ? signal : code}).`);
  process.exit(code || 1);
});

const server = http.createServer((request, response) => void handler(request, response));
server.on("error", error => { console.error(`Nexus capability bridge failed: ${error.message}`); process.exit(1); });
server.listen(PORT, HOST, () => console.log(`Nexus production capability bridge listening at http://${HOST}:${PORT}; protected runtime ${LEGACY_HOST}:${LEGACY_PORT}`));

function shutdown(signal) {
  server.close(() => process.exit(0));
  if (!legacy.killed) legacy.kill(signal);
  if (!certification.killed) certification.kill(signal);
  setTimeout(() => process.exit(0), 3000).unref();
}
process.on("SIGTERM", () => shutdown("SIGTERM"));
process.on("SIGINT", () => shutdown("SIGINT"));
