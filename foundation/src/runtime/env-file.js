const path = require("path");
const localEnvLoader = require("../../../server/local-env-loader.js");

function loadEnvFile(filePath = path.join(__dirname, "..", "..", "..", ".env"), env = process.env) {
  const result = localEnvLoader.loadEnvFile(filePath, env);
  return { ...result, loaded: result.exists, path: result.filePath };
}

module.exports = { loadEnvFile };
