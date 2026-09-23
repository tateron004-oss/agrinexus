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
const nexusUploads = require("../uploads.js");

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

// Kept as a thin wrapper over the shared uploads module so both places that
// need to resolve a fileId to a path (this file, and server/uploads.js's own
// upload/download handlers) can never disagree about where a file lives.
function resolveLocalFile(fileId = "", env = process.env) {
  return nexusUploads.resolveUploadedFilePath(nexusUploads.uploadDir(env), clean(fileId));
}

async function extractPdfText(buffer) {
  const { PDFParse } = require("pdf-parse");
  const parser = new PDFParse({ data: buffer });
  try {
    const result = await parser.getText();
    return String(result?.text || "").trim();
  } finally {
    await parser.destroy().catch(() => {});
  }
}

// A real OpenAI vision call -- confirmed by nexusUploadReadiness's own
// safetyWarning ("Nexus does not diagnose images..."), this must describe
// what it sees, not diagnose a medical or plant-disease condition, so the
// prompt says so explicitly rather than relying on the model to infer it.
async function describeImage(buffer, mimeType, env = process.env) {
  if (!clean(env.OPENAI_API_KEY)) {
    return { ok: false, missingConfig: ["OPENAI_API_KEY"] };
  }
  const base64 = buffer.toString("base64");
  const response = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      authorization: `Bearer ${env.OPENAI_API_KEY}`,
      "content-type": "application/json"
    },
    body: JSON.stringify({
      model: env.OPENAI_VISION_MODEL || "gpt-4o-mini",
      input: [
        {
          role: "system",
          content: "Describe what is visibly shown in this user-uploaded image in plain, concise language. Note anything that looks agriculturally, medically, or business-relevant, but never diagnose a plant disease or a medical condition -- describe symptoms/appearance only and suggest the user ask a qualified person to confirm. Do not invent details you cannot actually see."
        },
        {
          role: "user",
          content: [{ type: "input_image", image_url: `data:${mimeType};base64,${base64}` }]
        }
      ],
      max_output_tokens: 400
    })
  });
  const payload = await safeJson(response);
  if (!response.ok) {
    return { ok: false, error: payload?.error?.message || `OpenAI vision request failed: ${response.status}` };
  }
  const text = (payload.output || [])
    .flatMap(item => item.content || [])
    .filter(part => part.type === "output_text")
    .map(part => part.text)
    .join(" ")
    .trim();
  return { ok: true, text: text || "The image was received but no description was returned." };
}

async function analyze(body = {}, env = process.env, user = null) {
  const action = "document.analyze";
  const readiness = status(env);
  if (!readiness.enabled) return disabledResponse(readiness.provider, action, "NEXUS_FILE_UPLOAD_ENABLED");
  if (readiness.missingConfig.length) return missingConfigResponse(readiness.provider, action, readiness.missingConfig);
  const fileId = clean(body.fileId || body.documentId || body.attachmentId);
  const text = clean(body.text || body.content);
  if (!fileId && !text) return blockedResponse(readiness.provider, action, "A user-supplied file reference or document text is required.");
  try {
    if (!fileId) {
      const words = text.split(/\s+/).filter(Boolean);
      return providerResponse({
        provider: readiness.provider,
        action,
        status: "completed",
        message: "Document text analyzed from a user-supplied source. Nexus did not infer missing document contents.",
        data: {
          source: "user-supplied-text",
          characters: text.length,
          words: words.length,
          excerpt: text.slice(0, 500),
          citations: [{ title: "user-supplied-text", snippet: text.slice(0, 180), sourceType: "user-supplied-document" }],
          providerVerified: true
        }
      });
    }
    const filePath = resolveLocalFile(fileId, env);
    if (!filePath || !fs.existsSync(filePath)) return blockedResponse(readiness.provider, action, "The referenced document was not found in the configured Nexus file store.");
    // Real ownership check: a fileId is a random, hard-to-guess id, but that
    // is obscurity, not access control. Only the uploader (or an Admin) may
    // have it analyzed -- see canAccessUpload's own comment for why this
    // cannot be skipped now that uploads are a reachable feature.
    const meta = nexusUploads.readMeta(nexusUploads.uploadDir(env), fileId);
    if (!nexusUploads.canAccessUpload(meta, user)) {
      return blockedResponse(readiness.provider, action, "You do not have access to that uploaded file.");
    }
    const stats = fs.statSync(filePath);
    if (stats.size > Number(env.NEXUS_FILE_ANALYSIS_MAX_BYTES || 5_000_000)) {
      return blockedResponse(readiness.provider, action, "The referenced document exceeds the configured analysis size limit.");
    }
    const mimeType = meta.mimeType || "";
    const source = `uploaded-file:${meta.originalFilename || path.basename(filePath)}`;
    if (mimeType === "application/pdf") {
      const extracted = await extractPdfText(fs.readFileSync(filePath));
      if (!extracted) return blockedResponse(readiness.provider, action, "Nexus could not extract any text from that PDF -- it may be a scanned image with no selectable text.");
      const words = extracted.split(/\s+/).filter(Boolean);
      return providerResponse({
        provider: readiness.provider, action, status: "completed",
        message: "PDF text extracted and analyzed from a real, user-uploaded document.",
        data: { source, characters: extracted.length, words: words.length, excerpt: extracted.slice(0, 500),
          citations: [{ title: source, snippet: extracted.slice(0, 180), sourceType: "user-supplied-document" }], providerVerified: true }
      });
    }
    if (mimeType.startsWith("image/")) {
      const described = await describeImage(fs.readFileSync(filePath), mimeType, env);
      if (!described.ok) {
        return described.missingConfig
          ? missingConfigResponse("openai-vision", action, described.missingConfig)
          : failedResponse("openai-vision", action, new Error(described.error || "Vision analysis failed."));
      }
      return providerResponse({
        provider: "openai-vision", action, status: "completed",
        message: "Image described by a real vision model call. This is a description, not a diagnosis.",
        data: { source, description: described.text, citations: [{ title: source, snippet: described.text.slice(0, 180), sourceType: "user-supplied-image" }], providerVerified: true }
      });
    }
    // Plain text or any other accepted-but-unhandled type: read as text, same
    // behavior as before uploads existed.
    const extracted = fs.readFileSync(filePath, "utf8");
    const words = extracted.split(/\s+/).filter(Boolean);
    return providerResponse({
      provider: readiness.provider, action, status: "completed",
      message: "Document text analyzed from a user-supplied source. Nexus did not infer missing document contents.",
      data: { source, characters: extracted.length, words: words.length, excerpt: extracted.slice(0, 500),
        citations: [{ title: source, snippet: extracted.slice(0, 180), sourceType: "user-supplied-document" }], providerVerified: true }
    });
  } catch (error) {
    return failedResponse(readiness.provider, action, error);
  }
}

module.exports = { status, analyze };
