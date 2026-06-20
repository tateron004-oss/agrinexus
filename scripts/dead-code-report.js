const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const serverPath = path.join(root, "server.js");
const appPath = path.join(root, "public", "app.js");
const packagePath = path.join(root, "package.json");
const scriptsReadmePath = path.join(root, "scripts", "README.md");

const allowlist = {
  auditOnlyHelpers: new Set([
    "runUserModeSelfTest",
    "ruralSpeechProfileSummary",
    "userSceneVisualHtml",
    "nexusIntroLanguageNote",
    "nexusUtilityAssistantResponse",
    "healthHotspotHtml"
  ]),
  manualScripts: new Set([
    "capture-investor-screenshots.js",
    "local-env-status.js",
    "utility-assistant-smoke.js"
  ]),
  demoExportScripts: new Set([
    "capture-investor-screenshots.js"
  ]),
  nativeEndpointPrefixes: [
    "/api/native/",
    "/api/voice/phone/",
    "/api/music/spotify/"
  ],
  webhookProviderPrefixes: [
    "/api/integrations",
    "/api/providers",
    "/api/communications",
    "/api/voice/",
    "/api/auth/password-reset"
  ],
  externalOrTestOnlyRoutes: new Set([
    "/api/config",
    "/api/engines/manifest",
    "/api/engines/render-env-plan",
    "/api/healthz",
    "/api/music/play",
    "/api/music/spotify/status",
    "/api/production/activation-guide",
    "/api/production/complete-check",
    "/api/production/operations-plan",
    "/api/providers/candidates",
    "/api/readiness",
    "/api/state"
  ])
};

function read(relativeOrAbsolute) {
  return fs.readFileSync(relativeOrAbsolute, "utf8");
}

function countReferences(source, name) {
  const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return (source.match(new RegExp(`\\b${escaped}\\b`, "g")) || []).length;
}

function extractFunctions(filePath, source) {
  const candidates = [];
  const declarationRegex = /(?:async\s+)?function\s+([A-Za-z_$][\w$]*)\s*\(/g;
  for (const match of source.matchAll(declarationRegex)) {
    const before = source.slice(0, match.index);
    const line = before.split(/\r?\n/).length;
    const referenceCount = countReferences(source, match[1]);
    const auditProtected = allowlist.auditOnlyHelpers.has(match[1]);
    if (referenceCount <= 1 || (auditProtected && referenceCount <= 2)) {
      const label = allowlist.auditOnlyHelpers.has(match[1])
        ? "candidate.audit-protected"
        : "candidate.manual-review";
      candidates.push({
        file: path.relative(root, filePath),
        line,
        name: match[1],
        referenceCount,
        label
      });
    }
  }
  return candidates;
}

function extractServerRoutes(serverSource) {
  const routes = [];
  const exact = /url\.pathname\s*(?:===|==)\s*["'`]([^"'`]+)["'`][\s\S]{0,120}?req\.method\s*===\s*["'`](GET|POST|PUT|DELETE|PATCH)["'`]/g;
  for (const match of serverSource.matchAll(exact)) {
    if (match[1].startsWith("/api/")) routes.push({ method: match[2], path: match[1], prefix: false });
  }
  const startsWith = /url\.pathname\.startsWith\(\s*["'`]([^"'`]+)["'`]\s*\)[\s\S]{0,120}?req\.method\s*===\s*["'`](GET|POST|PUT|DELETE|PATCH)["'`]/g;
  for (const match of serverSource.matchAll(startsWith)) {
    if (match[1].startsWith("/api/")) routes.push({ method: match[2], path: match[1], prefix: true });
  }
  const byKey = new Map();
  for (const route of routes) byKey.set(`${route.method} ${route.path}${route.prefix ? "*" : ""}`, route);
  return [...byKey.values()].sort((a, b) => a.path.localeCompare(b.path) || a.method.localeCompare(b.method));
}

function extractFrontendApiPaths(appSource) {
  const paths = new Set();
  const stringPathRegex = /(?:fetch|request|mutate|requestWithTimeout)\(\s*["'`]([^"'`]+)["'`]/g;
  for (const match of appSource.matchAll(stringPathRegex)) {
    if (match[1].startsWith("/api/")) paths.add(match[1].split("?")[0]);
  }
  const objectPathRegex = /\bpath:\s*["'`]([^"'`]+)["'`]/g;
  for (const match of appSource.matchAll(objectPathRegex)) {
    if (match[1].startsWith("/api/")) paths.add(match[1].split("?")[0]);
  }
  const literalApiRegex = /["'`]((?:\/api\/)[^"'`?$)\s,]+)["'`]/g;
  for (const match of appSource.matchAll(literalApiRegex)) paths.add(match[1]);
  return [...paths].sort();
}

function routeMatchesPath(route, frontendPath) {
  if (route.prefix) return frontendPath.startsWith(route.path);
  return route.path === frontendPath;
}

function isAllowedBackendOnly(routePath) {
  return allowlist.externalOrTestOnlyRoutes.has(routePath)
    || allowlist.nativeEndpointPrefixes.some(prefix => routePath.startsWith(prefix))
    || allowlist.webhookProviderPrefixes.some(prefix => routePath.startsWith(prefix));
}

function packageScriptTargets(pkg) {
  const targets = [];
  for (const [name, command] of Object.entries(pkg.scripts || {})) {
    const matches = [...command.matchAll(/node\s+((?:scripts|foundation\/scripts|foundation\\scripts)[^\s"']+)/g)];
    for (const match of matches) targets.push({ script: name, target: match[1].replace(/\\/g, "/") });
  }
  return targets;
}

function scriptReviewLabel(fileName, scriptsReadme) {
  if (allowlist.demoExportScripts.has(fileName)) return "demo/export";
  if (allowlist.manualScripts.has(fileName)) return "manual";
  if (scriptsReadme.includes(`| \`${fileName}\` | none |`)) return "manual";
  return "review-needed";
}

function printTable(rows, columns) {
  if (!rows.length) {
    console.log("  none");
    return;
  }
  for (const row of rows) {
    console.log(`  - ${columns.map(column => `${column}: ${row[column]}`).join(" | ")}`);
  }
}

function main() {
  const serverSource = read(serverPath);
  const appSource = read(appPath);
  const pkg = JSON.parse(read(packagePath));
  const scriptsReadme = fs.existsSync(scriptsReadmePath) ? read(scriptsReadmePath) : "";

  const functionCandidates = [
    ...extractFunctions(serverPath, serverSource),
    ...extractFunctions(appPath, appSource)
  ];
  const serverRoutes = extractServerRoutes(serverSource);
  const frontendPaths = extractFrontendApiPaths(appSource);
  const frontendWithoutServer = frontendPaths
    .filter(frontendPath => !serverRoutes.some(route => routeMatchesPath(route, frontendPath)))
    .map(pathname => ({ path: pathname, label: "candidate.manual-review" }));
  const serverWithoutFrontend = serverRoutes
    .filter(route => !frontendPaths.some(frontendPath => routeMatchesPath(route, frontendPath)))
    .map(route => ({
      route: `${route.method} ${route.path}${route.prefix ? "*" : ""}`,
      label: isAllowedBackendOnly(route.path) ? "allowlisted.external-or-native" : "candidate.manual-review"
    }));

  const targets = packageScriptTargets(pkg);
  const missingTargets = targets
    .filter(item => !fs.existsSync(path.join(root, item.target)))
    .map(item => ({ script: item.script, target: item.target }));
  const referencedScriptFiles = new Set(
    targets
      .map(item => item.target)
      .filter(target => target.startsWith("scripts/"))
      .map(target => path.basename(target))
  );
  const scriptFiles = fs.readdirSync(path.join(root, "scripts"))
    .filter(file => file.endsWith(".js"))
    .sort();
  const unreferencedScripts = scriptFiles
    .filter(file => !referencedScriptFiles.has(file))
    .map(file => ({ script: file, label: scriptReviewLabel(file, scriptsReadme) }));

  const manualReview = [
    ...functionCandidates.filter(item => item.label !== "candidate.audit-protected").slice(0, 20)
      .map(item => `${item.file}:${item.line} ${item.name}`),
    ...frontendWithoutServer.slice(0, 10).map(item => `frontend API ${item.path}`),
    ...serverWithoutFrontend.filter(item => !item.label.startsWith("allowlisted")).slice(0, 10).map(item => `server route ${item.route}`),
    ...unreferencedScripts.filter(item => item.label === "review-needed").map(item => `script ${item.script}`)
  ];

  console.log("AgriNexus Dead Code Report");
  console.log("==========================");
  console.log("");
  console.log("1. Summary");
  console.log(`  low-reference function candidates: ${functionCandidates.length}`);
  console.log(`  frontend API paths scanned: ${frontendPaths.length}`);
  console.log(`  server API routes scanned: ${serverRoutes.length}`);
  console.log(`  frontend paths without obvious server match: ${frontendWithoutServer.length}`);
  console.log(`  server routes without obvious frontend reference: ${serverWithoutFrontend.length}`);
  console.log(`  missing package script targets: ${missingTargets.length}`);
  console.log(`  unreferenced scripts: ${unreferencedScripts.length}`);
  console.log("");

  console.log("2. Low-reference function candidates");
  printTable(functionCandidates, ["file", "line", "name", "referenceCount", "label"]);
  console.log("");

  console.log("3. Frontend API paths without obvious server match");
  printTable(frontendWithoutServer, ["path", "label"]);
  console.log("");

  console.log("4. Server API routes without obvious frontend reference");
  printTable(serverWithoutFrontend, ["route", "label"]);
  console.log("");

  console.log("5. Package script target issues");
  printTable(missingTargets, ["script", "target"]);
  console.log("");

  console.log("6. Unreferenced scripts");
  printTable(unreferencedScripts, ["script", "label"]);
  console.log("");

  console.log("7. Recommended manual review list");
  if (!manualReview.length) {
    console.log("  none");
  } else {
    for (const item of manualReview) console.log(`  - ${item}`);
  }
  console.log("");
  console.log("This report is informational only and does not prove code is dead.");
}

main();
