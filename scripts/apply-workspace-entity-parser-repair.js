#!/usr/bin/env node
"use strict";

const fs = require("node:fs");
const path = require("node:path");

const appPath = path.join(__dirname, "..", "public", "app.js");
const source = fs.readFileSync(appPath, "utf8");

const before = `  const product = command.match(/\\b(?:sell|selling|list)\\s+(?:some\\s+)?([\\p{L}'-]+)/iu)?.[1] || (/\\bmaize\\b/i.test(command) ? "maize" : "");
  const workspace = routeRequest ? "map" : workforceRequest ? "workforce" : marketplaceRequest ? "trade" : healthRequest ? "health" : "learning";
  const payload = routeRequest
    ? { origin: route?.[1]?.trim() || "", destination: route?.[2]?.trim() || "", country }
    : workforceRequest
      ? { query: command, jobType: /\\bfarm(?:ing)?\\b/i.test(command) ? "farming" : "", country }
      : marketplaceRequest
        ? { query: command, action: /\\b(?:sell|selling|list)\\b/i.test(command) ? "sell" : "buy", product, country }
        : healthRequest
          ? { query: command, intake: /blood[- ]?pressure|hypertension|\\bbp\\b/i.test(command) ? "blood-pressure" : "healthcare", country }`;

const after = `  const quantity = command.match(/\\b(\\d+(?:\\.\\d+)?)\\s*(bags?|tons?|kg|kilograms?|crates?)\\b/i);
  const product = command.match(/\\b(?:bags?|tons?|kg|kilograms?|crates?)\\s+of\\s+([\\p{L}'-]+)/iu)?.[1]
    || command.match(/\\b(?:sell|selling|list)\\s+(?:some\\s+)?(?:\\d+(?:\\.\\d+)?\\s*(?:bags?|tons?|kg|kilograms?|crates?)\\s+(?:of\\s+)?)?([\\p{L}'-]+)/iu)?.[1]
    || (/\\bmaize\\b/i.test(command) ? "maize" : "");
  const bloodPressure = command.match(/\\b(\\d{2,3})\\s*(?:\\/|over)\\s*(\\d{2,3})\\b/i);
  const workspace = routeRequest ? "map" : workforceRequest ? "workforce" : marketplaceRequest ? "trade" : healthRequest ? "health" : "learning";
  const payload = routeRequest
    ? { origin: route?.[1]?.trim() || "", destination: route?.[2]?.trim() || "", country }
    : workforceRequest
      ? { query: command, jobType: /\\bfarm(?:ing)?\\b/i.test(command) ? "farming" : "", country }
      : marketplaceRequest
        ? { query: command, action: /\\b(?:sell|selling|list)\\b/i.test(command) ? "sell" : "buy", quantity: quantity?.[1] || "", unit: quantity?.[2] || "", product, country }
        : healthRequest
          ? { query: command, intakeType: /blood[- ]?pressure|hypertension|\\bbp\\b/i.test(command) ? "blood-pressure" : "healthcare", systolic: bloodPressure?.[1] || "", diastolic: bloodPressure?.[2] || "", country }`;

if (source.includes(after)) {
  console.log("Nexus workspace entity parser repair is already present.");
  process.exit(0);
}
if (!source.includes(before)) {
  throw new Error("Expected Nexus workspace entity parser boundary was not found; refusing to modify app.js.");
}

fs.writeFileSync(appPath, source.replace(before, after));
console.log("Applied Nexus workspace entity parser repair.");
