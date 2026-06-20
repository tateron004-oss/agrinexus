const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const app = fs.readFileSync(path.join(root, "public", "app.js"), "utf8");
const styles = fs.readFileSync(path.join(root, "public", "styles.css"), "utf8");

function contains(source, needle, message) {
  assert(source.includes(needle), message || `Expected source to include ${needle}`);
}

contains(app, "function renderPendingCallActionCard", "Pending call confirmation card renderer should exist");
contains(app, "function renderCallStatusCard", "Call status card renderer should exist for missing-number and duplicate states");
contains(app, "function redactCallPhoneDisplay", "Frontend should safely redact phone numbers before display");
contains(app, "pending.kind === \"call\"", "Pending call rendering should key from backend pending action shape");
contains(app, "pending.pendingActionType === \"outbound_call\"", "Pending call rendering should support outbound_call pending action type");
contains(app, "data-agent-pending-confirm=\"yes\"", "Confirm button should reuse existing agent pending confirmation path");
contains(app, "data-agent-pending-confirm=\"no\"", "Cancel button should reuse existing agent pending confirmation path");
contains(app, "No call is launched from the first request", "UI should state that first utterance does not launch a call");
contains(app, "!pending && /^call\\./.test", "Missing-number and duplicate-match call states should render only without executable pending action");
contains(app, "No executable call is available", "Missing-number or duplicate states should not imply executable confirmation");
contains(app, "handoff.fallbackText", "Provider fallback instructions should be displayed from backend handoff metadata");
contains(app, "callProviderLabel(provider)", "Provider label should be rendered for staged calls");
contains(styles, ".pending-call-card", "Pending call card styles should exist");
contains(styles, ".call-status-card", "Call status card styles should exist");
contains(styles, ".pending-call-details", "Call detail grid styles should exist");

assert(!/window\.location\s*=|location\.href\s*=|\.click\(\)/.test(app.slice(app.indexOf("function renderPendingCallActionCard"), app.indexOf("function latestOnboardingRun"))), "Pending call UI must not launch provider links or direct calls");

console.log("Pending call UI QA passed");
