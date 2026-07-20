const fs = require("node:fs");
const path = require("node:path");

// `.env.txt` is a deliberate local-only recovery path for Windows clients that
// silently append a text extension. Process environment variables still win.
const LOCAL_ENV_FILENAMES = Object.freeze([".env", ".env.local", ".env.txt"]);

function normalizeEnvFileValue(value = "") {
  const trimmed = String(value ?? "").trim();
  if ((trimmed.startsWith('"') && trimmed.endsWith('"')) || (trimmed.startsWith("'") && trimmed.endsWith("'"))) {
    return trimmed.slice(1, -1).trim();
  }
  return trimmed;
}

function isPlaceholderEnvValue(value = "") {
  const normalized = normalizeEnvFileValue(value).toLowerCase();
  if (!normalized) return false;
  const unwrapped = normalized.replace(/^[<{\[]\s*/, "").replace(/\s*[>}\]]$/, "").trim();
  return [
    /^replace[-_ ]?with(?:[-_ ].*)?$/,
    /^(?:placeholder|change[-_ ]?me|todo|example)$/,
    /^your[-_ ]+(?:(?:openai|real)[-_ ]+)?api[-_ ]+key(?:[-_ ]+here)?$/,
    /^(?:openai[-_ ]+)?api[-_ ]+key[-_ ]+here$/,
    /^insert[-_ ].*[-_ ]here$/,
    /^sk-(?:x+|your[-_ ].*|placeholder)$/
  ].some(pattern => pattern.test(unwrapped));
}

function isUsableEnvValue(value) {
  return normalizeEnvFileValue(value) !== "" && !isPlaceholderEnvValue(value);
}

function shouldApplyEnvFileValue(key, value, env = process.env) {
  if (!key || !isUsableEnvValue(value)) return false;
  // Test/strict startup mode can intentionally preserve an empty environment
  // value so missing-credential paths cannot be repopulated from local files.
  if (env.NEXUS_PRESERVE_EMPTY_ENV === "1" && Object.prototype.hasOwnProperty.call(env, key)) return false;
  return !isUsableEnvValue(env[key]);
}

function loadEnvFile(filePath, env = process.env) {
  const absolutePath = path.resolve(filePath);
  const result = { filePath: absolutePath, exists: fs.existsSync(absolutePath), applied: [], skipped: [] };
  if (!result.exists) return result;

  const lines = fs.readFileSync(absolutePath, "utf8").split(/\r?\n/);
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const index = trimmed.indexOf("=");
    if (index === -1) continue;
    const key = trimmed.slice(0, index).trim().replace(/^\uFEFF/, "").replace(/^export\s+/, "");
    const value = normalizeEnvFileValue(trimmed.slice(index + 1));
    if (shouldApplyEnvFileValue(key, value, env)) {
      env[key] = value;
      result.applied.push(key);
    } else if (key) {
      result.skipped.push(key);
    }
  }
  return result;
}

function resolveLocalEnvPaths(appRoot) {
  const authoritativeRoot = path.resolve(appRoot);
  return LOCAL_ENV_FILENAMES.map(filename => path.join(authoritativeRoot, filename));
}

function loadLocalEnvFiles(appRoot, env = process.env) {
  return resolveLocalEnvPaths(appRoot).map(filePath => loadEnvFile(filePath, env));
}

module.exports = {
  LOCAL_ENV_FILENAMES,
  isPlaceholderEnvValue,
  isUsableEnvValue,
  loadEnvFile,
  loadLocalEnvFiles,
  normalizeEnvFileValue,
  resolveLocalEnvPaths,
  shouldApplyEnvFileValue
};
