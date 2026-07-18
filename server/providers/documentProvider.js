const fs = require("node:fs");
const path = require("node:path");
const {
  clean,
  envEnabled,
  missingEnv,
  providerResponse,
  disabledResponse,
  missingConfigResponse,
  blockedResponse,
  failedResponse,
  safeJson
} = require("./providerUtils");

function status(env = process.env) {
  const localEnabled = envEnabled("NEXUS_FILE_UPLOAD_ENABLED", env);
  const openAiEnabled = envEnabled("NEXUS_OPENAI_FILE_ANALYSIS_ENABLED", env);
  return {
    provider: openAiEnabled ? "openai-files" : "local-document-store",
    enabled: localEnabled || openAiEnabled,
    localEnabled,
    openAiEnabled,
    missingConfig: openAiEnabled ? missingEnv(["OPENAI_API_KEY"], env) : localEnabled ? [] : ["NEXUS_FILE_UPLOAD_ENABLED"],
    storageRootConfigured: Boolean(clean(env.NEXUS_FILE_STORAGE_DIR))
  };
}

function resolveLocalFile(fileId = "", env = process.env) {
  const root = path.resolve(clean(env.NEXUS_FILE_STORAGE_DIR || path.join(process.cwd(), "uploads")));
  const safeName = path.basename(clean(fileId));
  const candidate = path.resolve(root, safeName);
  if (!candidate.startsWith(root)) return null;
  return candidate;
}

async function analyze(body = {}, env = process.env) {
  const action = "document.analyze";
  const readiness = status(env);
  if (!readiness.enabled) return disabledResponse(readiness.provider, action, "NEXUS_FILE_UPLOAD_ENABLED");
  if (readiness.missingConfig.length) return missingConfigResponse(readiness.provider, action, readiness.missingConfig);
  const fileId = clean(body.fileId || body.documentId || body.attachmentId);
  const text = clean(body.text || body.content);
  if (!fileId && !text) return blockedResponse(readiness.provider, action, "A user-supplied file reference or document text is required.");
  try {
    let extracted = text;
    let source = "user-supplied-text";
    if (!extracted && fileId) {
      const filePath = resolveLocalFile(fileId, env);
      if (!filePath || !fs.existsSync(filePath)) return blockedResponse(readiness.provider, action, "The referenced document was not found in the configured Nexus file store.");
      const stats = fs.statSync(filePath);
      if (stats.size > Number(env.NEXUS_FILE_ANALYSIS_MAX_BYTES || 250000)) return blockedResponse(readiness.provider, action, "The referenced document exceeds the configured analysis size limit.");
      extracted = fs.readFileSync(filePath, "utf8");
      source = `local-file:${path.basename(filePath)}`;
    }
    const words = extracted.split(/\s+/).filter(Boolean);
    return providerResponse({
      provider: readiness.provider,
      action,
      status: "completed",
      message: "Document text analyzed from a user-supplied source. Nexus did not infer missing document contents.",
      data: {
        source,
        characters: extracted.length,
        words: words.length,
        excerpt: extracted.slice(0, 500),
        citations: [{ title: source, snippet: extracted.slice(0, 180), sourceType: "user-supplied-document" }],
        providerVerified: true
      }
    });
  } catch (error) {
    return failedResponse(readiness.provider, action, error);
  }
}

module.exports = { status, analyze };
