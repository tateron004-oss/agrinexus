const fs = require("node:fs");
const path = require("node:path");
const crypto = require("node:crypto");
const {
  clean,
  envEnabled,
  providerResponse,
  disabledResponse,
  requireConfirmation,
  blockedResponse,
  failedResponse
} = require("./providerUtils");

function status(env = process.env) {
  return {
    provider: "nexus-local-export",
    enabled: envEnabled("NEXUS_DOCUMENT_EXPORT_ENABLED", env, true),
    storageDirConfigured: Boolean(clean(env.NEXUS_EXPORT_DIR)),
    formats: ["json", "txt", "md"]
  };
}

function exportDocument(body = {}, env = process.env) {
  const provider = "nexus-local-export";
  const action = "document.export";
  if (!envEnabled("NEXUS_DOCUMENT_EXPORT_ENABLED", env, true)) return disabledResponse(provider, action, "NEXUS_DOCUMENT_EXPORT_ENABLED");
  const confirmation = requireConfirmation(body, provider, action);
  if (confirmation) return confirmation;
  const title = clean(body.title || "Nexus export");
  const content = clean(body.content || body.text || body.command);
  const format = clean(body.format || "txt").toLowerCase();
  if (!content) return blockedResponse(provider, action, "Export content is required.");
  if (!["json", "txt", "md"].includes(format)) return blockedResponse(provider, action, "Only json, txt, and md exports are currently enabled.");
  try {
    const root = path.resolve(clean(env.NEXUS_EXPORT_DIR || path.join(process.cwd(), "output", "nexus-exports")));
    fs.mkdirSync(root, { recursive: true });
    const id = crypto.randomUUID();
    const filename = `${id}.${format}`;
    const filePath = path.join(root, filename);
    const payload = format === "json"
      ? JSON.stringify({ id, title, content, createdAt: new Date().toISOString(), source: "nexus-openai-native" }, null, 2)
      : `# ${title}\n\n${content}\n`;
    fs.writeFileSync(filePath, payload, "utf8");
    return providerResponse({
      provider,
      action,
      status: "completed",
      message: "Document export created in the configured Nexus export store.",
      data: { exportId: id, filename, format, bytes: Buffer.byteLength(payload), downloadPath: `/exports/${filename}`, localPath: filePath }
    });
  } catch (error) {
    return failedResponse(provider, action, error);
  }
}

module.exports = { status, exportDocument };
