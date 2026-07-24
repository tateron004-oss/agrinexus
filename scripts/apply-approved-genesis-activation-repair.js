const fs = require("fs");

const appPath = "public/app.js";
const qaPath = "scripts/nexus-genesis-voice-workspace-bridge-qa.js";
const app = fs.readFileSync(appPath, "utf8");
const marker = [
  "  const action = genesisWorkspaceActionFromFinalTranscript(command);",
  "  if (!action) return false;",
  "  lastGenesisTranscriptWorkspaceExecution = { command: normalized, at: now };"
].join("\n");
const replacement = [
  "  const action = genesisWorkspaceActionFromFinalTranscript(command);",
  "  if (!action) return false;",
  "  nexusGenesisExperienceActivated = true;",
  "  nexusTrueExperienceSessionStarted = true;",
  "  lastGenesisTranscriptWorkspaceExecution = { command: normalized, at: now };"
].join("\n");

if (!app.includes(replacement)) {
  const matches = app.split(marker).length - 1;
  if (matches !== 1) throw new Error(`Refusing repair: expected one approved insertion marker, found ${matches}.`);
  fs.writeFileSync(appPath, app.replace(marker, replacement));
}

let qa = fs.readFileSync(qaPath, "utf8");
const qaNeedle = "['final transcript execution is model independent',app.includes('function genesisWorkspaceActionFromFinalTranscript')&&app.includes('source: \"openai-realtime-final-transcript\"')],";
const qaCheck = "['final transcript activates Genesis mission renderer',app.includes('nexusGenesisExperienceActivated = true;')&&app.includes('nexusTrueExperienceSessionStarted = true;')],";
if (!qa.includes(qaCheck)) {
  if (!qa.includes(qaNeedle)) throw new Error("Refusing repair: QA insertion marker was not found.");
  qa = qa.replace(qaNeedle, qaNeedle + qaCheck);
  fs.writeFileSync(qaPath, qa);
}

const verifiedApp = fs.readFileSync(appPath, "utf8");
if (!verifiedApp.includes(replacement)) throw new Error("Approved activation repair was not applied.");
console.log("Exact approved Genesis activation repair applied and verified.");
