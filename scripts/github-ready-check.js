const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");

const requiredFiles = [
  "server.js",
  "index.html",
  "public/index.html",
  "public/status.html",
  "public/status.js",
  "public/app.js",
  "public/styles.css",
  "scripts/workforce-live-check.js",
  "package.json",
  "package-lock.json",
  ".env.example",
  ".gitignore",
  ".dockerignore",
  "README.md",
  "GITHUB_UPLOAD_GUIDE.md",
  "AGRINEXUS_VIDEO_PRESENTATION_SCRIPT.md",
  "render.yaml"
];

const requiredGitignorePatterns = [
  ".env",
  ".env.*",
  "!.env.example",
  "node_modules/",
  "backups/",
  "provider-events.json",
  "*.log",
  "*.err",
  "*.out",
  "tmp-server-*"
];

const skippedDirs = new Set([
  ".git",
  "node_modules",
  "backups",
  "chrome-profile"
]);

const skippedFiles = new Set([
  ".env",
  "provider-events.json"
]);

const skippedExtensions = new Set([
  ".log",
  ".err",
  ".out",
  ".pid",
  ".png",
  ".jpg",
  ".jpeg",
  ".gif",
  ".webp",
  ".ico",
  ".pdf",
  ".zip",
  ".mp4",
  ".pptx"
]);

const allowedSecretLines = [
  "Prototype2026!",
  "your-key-here",
  "your-",
  "<provider-api-key>",
  "replace-with-",
  "agrinexus_dev_password",
  "postgres://agrinexus:agrinexus_dev_password@localhost:5432/agrinexus",
  "postgres://user:password@localhost:5432/agrinexus"
];

const secretPatterns = [
  { label: "OpenAI key", regex: /\bsk-[A-Za-z0-9_-]{20,}\b/ },
  { label: "GitHub token", regex: /\bgh[pousr]_[A-Za-z0-9_]{20,}\b/ },
  { label: "AWS access key", regex: /\bAKIA[0-9A-Z]{16}\b/ },
  { label: "Private key", regex: /-----BEGIN (RSA |EC |OPENSSH |DSA )?PRIVATE KEY-----/ },
  {
    label: "Filled secret environment value",
    regex: /(?:^|\s)(?:OPENAI_API_KEY|SESSION_SECRET|DATABASE_URL|WEBHOOK_API_KEY|API_KEY|SECRET|TOKEN|PASSWORD)=["']?(?!$|your-|changeme|postgres:\/\/user:password|postgres:\/\/agrinexus:agrinexus_dev_password)([^"'\s#]+)/
  }
];

function rel(filePath) {
  return path.relative(root, filePath).replace(/\\/g, "/");
}

function fail(message) {
  failures.push(message);
}

function readText(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    const relative = rel(fullPath);

    if (entry.isDirectory()) {
      if (!skippedDirs.has(entry.name)) {
        walk(fullPath, files);
      }
      continue;
    }

    if (skippedFiles.has(entry.name)) continue;
    if (entry.name.startsWith(".env.") && entry.name !== ".env.example") continue;
    if (entry.name.startsWith("tmp-server-")) continue;
    if (skippedExtensions.has(path.extname(entry.name).toLowerCase())) continue;
    if (relative.startsWith("foundation/node_modules/")) continue;

    files.push(fullPath);
  }

  return files;
}

const failures = [];
const warnings = [];

for (const file of requiredFiles) {
  if (!fs.existsSync(path.join(root, file))) {
    fail(`Missing required file: ${file}`);
  }
}

const gitignorePath = path.join(root, ".gitignore");
if (fs.existsSync(gitignorePath)) {
  const gitignore = readText(gitignorePath);
  for (const pattern of requiredGitignorePatterns) {
    if (!gitignore.includes(pattern)) {
      fail(`.gitignore is missing required pattern: ${pattern}`);
    }
  }
} else {
  fail("Missing .gitignore");
}

if (fs.existsSync(path.join(root, ".env"))) {
  warnings.push(".env exists locally and is correctly intended to stay out of GitHub.");
}

if (fs.existsSync(path.join(root, "node_modules"))) {
  warnings.push("node_modules exists locally and should not be uploaded.");
}

if (fs.existsSync(path.join(root, "backups"))) {
  warnings.push("backups exists locally and should not be uploaded.");
}

const scannedFiles = walk(root);
for (const file of scannedFiles) {
  const relative = rel(file);
  let text;
  try {
    text = readText(file);
  } catch (error) {
    warnings.push(`Skipped unreadable file: ${relative}`);
    continue;
  }

  const lines = text.split(/\r?\n/);
  lines.forEach((line, index) => {
    if (allowedSecretLines.some((allowed) => line.includes(allowed))) return;

    for (const pattern of secretPatterns) {
      if (pattern.regex.test(line)) {
        fail(`${pattern.label} may be present in ${relative}:${index + 1}`);
      }
    }
  });
}

console.log("AgriNexus GitHub readiness check");
console.log(`Checked ${requiredFiles.length} required files and scanned ${scannedFiles.length} source files.`);

for (const warning of warnings) {
  console.log(`WARN: ${warning}`);
}

if (failures.length) {
  console.error("\nGitHub readiness check failed:");
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log("GitHub readiness check passed.");
