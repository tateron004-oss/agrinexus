const fs = require("fs");

function assert(condition, message) {
  if (!condition) {
    console.error(`Cross-platform functions QA failed: ${message}`);
    process.exit(1);
  }
}

const server = fs.readFileSync("server.js", "utf8");
const app = fs.readFileSync("public/app.js", "utf8");
const html = fs.readFileSync("public/index.html", "utf8");
const pkg = fs.readFileSync("package.json", "utf8");

const requiredIds = [
  "remote-country-focus",
  "crop-sale-simulation",
  "field-intelligence",
  "telehealth-navigation",
  "learning-workforce",
  "live-credential-path"
];

assert(server.includes("function crossPlatformFunctionDefinitions"), "Backend must define selected cross-platform functions");
assert(server.includes("function crossPlatformFunctionPack"), "Backend must expose selected cross-platform function pack");
assert(server.includes("async function runCrossPlatformFunction"), "Backend must execute selected cross-platform functions");
assert(server.includes('url.pathname === "/api/platform/cross-function"'), "Backend must expose /api/platform/cross-function");
assert(server.includes('tool: "platform.cross_function"'), "Agent registry must include platform.cross_function");
assert(server.includes('if (step.tool === "platform.cross_function")'), "Agent executor must run platform.cross_function");
assert(server.includes("profile.crossPlatformFunctionRuns = profile.crossPlatformFunctionRuns || []"), "Profile initializer must include crossPlatformFunctionRuns");

requiredIds.forEach(id => {
  assert(server.includes(id), `Backend missing ${id}`);
  assert(app.includes(id), `Frontend missing ${id}`);
});

assert(html.includes("crossPlatformFunctionPanel"), "Dashboard must include cross-platform function panel");
assert(html.includes("crossPlatformFunctionRunPanel"), "Dashboard must include cross-platform run evidence panel");
assert(app.includes("renderCrossPlatformFunctionPanels"), "Frontend must render cross-platform panels");
assert(app.includes('workflow === "cross-platform"'), "Workflow config must handle cross-platform actions");
assert(app.includes('path: "/api/platform/cross-function"'), "Cross-platform modal must call backend endpoint");
assert(app.includes('"cross-platform:crop-sale-simulation"'), "Voice aliases must include crop sale function");
assert(app.includes('"cross-platform:learning-workforce"'), "Voice aliases must include learning to income function");
assert(pkg.includes('"cross-platform:qa"'), "package.json must expose cross-platform QA script");

console.log("Cross-platform functions QA passed");
