const fs = require("fs");

const server = fs.readFileSync("server.js", "utf8");
const app = fs.readFileSync("public/app.js", "utf8");
const html = fs.readFileSync("public/index.html", "utf8");

function assert(condition, message) {
  if (!condition) {
    console.error(`Women/children learning QA failed: ${message}`);
    process.exit(1);
  }
}

const checks = [
  ["backend paths", server.includes("function womenChildrenLearningPaths") && server.includes("Children & Youth Safe Learning")],
  ["backend model exposed", server.includes("function womenChildrenLearningHubModel") && server.includes("womenChildrenLearningHub: womenChildrenLearningHubModel")],
  ["backend runner", server.includes("function runWomenChildrenLearningWorkflow") && server.includes("learning.women_children_plan_created")],
  ["backend endpoint", server.includes('url.pathname === "/api/learning/women-children"') && server.includes("womenChildrenLearningResult")],
  ["agent tool registry", server.includes('tool: "learning.women_children_hub"') && server.includes("Start women and children learning hub")],
  ["agent tool execution", server.includes('step.tool === "learning.women_children_hub"')],
  ["workflow bridge", server.includes('"women-children-learning": "Learning"') && server.includes('"women-children-learning:start": "learning.women_children_hub"')],
  ["impact and timeline", server.includes("Women & children learning") && server.includes("Women and children learning plan opened")],
  ["safety guardrail", server.includes("It is not work assignment, labor placement, or medical diagnosis.") && app.includes("not work assignment or medical diagnosis")],
  ["frontend panels", html.includes("womenChildrenLearningPanel") && html.includes("womenChildrenLearningPathPanel") && app.includes("womenChildrenLearningPanel")],
  ["frontend workflow config", app.includes('workflow === "women-children-learning"') && app.includes("/api/learning/women-children")],
  ["user mode button", app.includes("Family learning") && app.includes("help my child learn today")],
  ["voice/simple command", app.includes('workflow: "women-children-learning"') && app.includes("Women and children learning is ready.")],
  ["translation-ready", app.includes("translateText(path.title)") && app.includes('label: "Preferred language"')]
];

for (const [label, ok] of checks) {
  assert(ok, label);
}

console.log(`Women/children learning QA passed (${checks.length} checks)`);
