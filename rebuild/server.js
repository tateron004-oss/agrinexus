"use strict";

const fs = require("node:fs");
const http = require("node:http");
const path = require("node:path");
const { NexusSessionAuthority } = require("./nexus-core/session-authority");
const { NexusVoiceSessionService } = require("./nexus-core/voice-session-service");
const { NexusOpenAIRealtimeProvider } = require("./nexus-core/openai-provider");
const { createNexusCleanHttpHandler } = require("./nexus-core/http-app");
const { ApprovedEvidenceService, createTavilyEvidenceProvider } = require("./nexus-core/approved-evidence-service");
const { EvidenceReceiptStore } = require("./nexus-core/evidence-receipt-store");

const root = path.resolve(__dirname, "browser");
const port = Number(process.env.NEXUS_CLEAN_PORT || 4317);
const host = process.env.NEXUS_CLEAN_HOST || "127.0.0.1";
const authority = new NexusSessionAuthority({
  secret: process.env.NEXUS_CLEAN_SESSION_SECRET || "local-only-nexus-clean-session-secret-00000001",
  ttlSeconds: 60 * 60
});
const provider = new NexusOpenAIRealtimeProvider({ apiKey: process.env.OPENAI_API_KEY });
const service = new NexusVoiceSessionService({
  sessionAuthority: authority,
  createRealtimeSession: (context) => provider.createSession(context)
});
const evidenceService = new ApprovedEvidenceService({
  searchProvider: createTavilyEvidenceProvider(),
  receiptStore: new EvidenceReceiptStore()
});
const api = createNexusCleanHttpHandler({
  voiceSessionService: service,
  evidenceService,
  sessionAuthority: authority
});

const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8"
};

const server = http.createServer(async (request, response) => {
  const url = new URL(request.url, `http://${request.headers.host || "nexus.local"}`);
  if (url.pathname === "/health" || url.pathname === "/api/voice/session" || url.pathname.startsWith("/api/evidence/")) {
    return api(request, response);
  }
  const requested = url.pathname === "/" ? "index.html" : url.pathname.replace(/^\/+/, "");
  const file = path.resolve(root, requested);
  if (!file.startsWith(`${root}${path.sep}`) || !fs.existsSync(file) || !fs.statSync(file).isFile()) {
    response.statusCode = 404;
    response.end("not found");
    return;
  }
  response.setHeader("cache-control", "no-store");
  response.setHeader("content-type", contentTypes[path.extname(file)] || "application/octet-stream");
  if (requested === "index.html") {
    const issued = authority.issue({ userId: "windows-certification", roles: ["standard-user"] });
    const certification = process.env.NEXUS_CLEAN_CERTIFICATION === "true";
    const html = fs.readFileSync(file, "utf8").replace(
      "<script>window.NEXUS_CLEAN_CONFIG = window.NEXUS_CLEAN_CONFIG || {};</script>",
      `<script>window.NEXUS_CLEAN_CONFIG = Object.freeze({sessionToken:${JSON.stringify(issued.token)},certification:${certification}});</script>`
    );
    response.end(html);
    return;
  }
  response.end(fs.readFileSync(file));
});

server.listen(port, host, () => {
  console.log(`Nexus clean certification server listening at http://${host}:${port}`);
});
