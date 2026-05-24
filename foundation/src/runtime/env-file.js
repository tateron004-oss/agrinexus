const fs = require("fs");
const path = require("path");

function loadEnvFile(filePath = path.join(__dirname, "..", "..", "..", ".env")) {
  if (!fs.existsSync(filePath)) return { loaded: false, path: filePath };
  const lines = fs.readFileSync(filePath, "utf8").split(/\r?\n/);
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const equals = trimmed.indexOf("=");
    if (equals === -1) continue;
    const key = trimmed.slice(0, equals).trim();
    const rawValue = trimmed.slice(equals + 1).trim();
    const value = stripQuotes(rawValue);
    if (key && process.env[key] === undefined) process.env[key] = value;
  }
  return { loaded: true, path: filePath };
}

function stripQuotes(value) {
  if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
    return value.slice(1, -1);
  }
  return value;
}

module.exports = { loadEnvFile };
