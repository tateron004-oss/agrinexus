const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const app = fs.readFileSync(path.join(ROOT, "public", "app.js"), "utf8");
const styles = fs.readFileSync(path.join(ROOT, "public", "styles.css"), "utf8");
const server = fs.readFileSync(path.join(ROOT, "server.js"), "utf8");
const sw = fs.readFileSync(path.join(ROOT, "public", "sw.js"), "utf8");
const packageJson = JSON.parse(fs.readFileSync(path.join(ROOT, "package.json"), "utf8"));
const qaSuite = fs.readFileSync(path.join(ROOT, "scripts", "qa-suite.js"), "utf8");

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

function extractFunction(name) {
  const start = app.indexOf(`function ${name}`);
  assert(start >= 0, `${name} exists`);
  const next = app.indexOf("\nfunction ", start + 10);
  return app.slice(start, next > start ? next : app.length);
}

function extractRenderUserWorkspace() {
  return extractFunction("renderUserWorkspace");
}

function assertAlias(name, script) {
  assert(packageJson.scripts[name] === `node scripts/${script}`, `${name} package alias exists`);
  assert(qaSuite.includes(`scripts/${script}`), `${script} is wired into safe QA suite`);
}

function assertTrueHomeOwner() {
  const workspace = extractRenderUserWorkspace();
  assert(workspace.includes('data-nexus-standard-user-render-root="true-conversational-experience"'), "Standard User root is true conversational experience");
  assert(workspace.includes('data-nexus-genesis-engine-root="true"'), "Genesis Experience Engine root exists");
  assert(workspace.includes('data-nexus-true-conversational-root="true"'), "true conversational root marker exists");
  assert(workspace.includes('data-nexus-true-experience-mode="${escapeHtml(trueExperienceMode)}"'), "root exposes current true experience mode");
  assert(!workspace.includes("renderNexusTopWelcomeArea()"), "old top welcome is not mounted by Standard User root");
  assert(!workspace.includes('renderNexusUserWorkspaceSegment("Calm helper"'), "calm helper is not mounted on startup");
  assert(!workspace.includes('renderNexusUserWorkspaceSegment("Review workspace details"'), "deferred legacy host is not mounted on startup");
}

function assertTrueHomeMarkup() {
  const home = extractFunction("renderNexusTrueHome");
  assert(home.includes('data-nexus-true-home="true"'), "true home marker exists");
  assert(home.includes('data-nexus-genesis-orb-only-home="true"'), "orb-only Home marker exists");
  assert(home.includes("renderNexusTrueCoreOrb({ home: true })"), "home renders one activated Nexus orb");
  assert(home.includes("renderNexusGenesisHomeVoiceGate()"), "home renders the separate microphone permission gate");
  assert(home.includes("Nexus Genesis home is audio-only."), "home declares audio-only status");
  assert(home.includes("non-interactive voice companion presence"), "home declares the orb is not interactive");
  assert(!home.includes("Good evening, Ron."), "idle Home does not render visible greeting");
  assert(!home.includes("renderNexusTrueCommandComposer()"), "idle Home does not render visible composer");
  assert(!home.includes("renderNexusTrueSecondaryAccess()"), "idle Home does not render visible secondary controls");
  assert(!home.includes("Activate the Nexus orb"), "home must not instruct users to activate the orb");
  assert(!home.includes("type below"), "home must not advertise a general typed fallback");
}

function assertLegacyHomeRemoved() {
  const home = extractFunction("renderNexusTrueHome");
  const workspace = extractRenderUserWorkspace();
  const forbidden = [
    "nexusCommandCenterExamples",
    "nexus-command-landing-actions",
    "nexus-command-landing-status-strip",
    "renderNexusOsUnifiedConversationSurface",
    "renderNexusOsMissionLifecycleStatus",
    "renderNexusVoiceInteractionBar",
    "renderNexusModeLauncher",
    "renderNexusSuggestedActions",
    "renderNexusAgenticBrainPanel",
    "renderNexusRightUtilityColumn"
  ];
  forbidden.forEach(token => {
    assert(!home.includes(token), `${token} is absent from true home`);
  });
  assert(!workspace.includes('renderNexusUserWorkspaceSegment("Calm helper"'), "calm helper is absent from startup root");
  assert(!workspace.includes('renderNexusUserWorkspaceSegment("Review workspace details"'), "review details are absent from startup root");
}

function assertOrbPrimaryInteraction() {
  const orb = extractFunction("renderNexusTrueCoreOrb");
  assert(orb.includes('data-nexus-true-core-orb="true"'), "true orb marker exists");
  assert(orb.includes('data-nexus-genesis-orb-presence="true"'), "orb is presence-only");
  assert(orb.includes('data-nexus-genesis-home-orb="true"'), "home orb marker exists for non-interactive visual presence");
  assert(orb.includes("Nexus voice companion visual status."), "orb has screen-reader presence instruction");
  assert(!orb.includes('role="button"'), "home orb must not expose button semantics");
  assert(!orb.includes('tabindex="0"'), "home orb must not be keyboard focusable");
  assert(orb.includes('role="img"'), "orb remains a status image");
  assert(!app.includes("function handleNexusGenesisOrbActivation"), "orb activation handler is removed");
  assert(!app.includes('document.addEventListener("click", handleNexusGenesisOrbActivation'), "orb click activation listener is removed");
  assert(!app.includes('document.addEventListener("keydown", handleNexusGenesisOrbActivation'), "orb keyboard activation listener is removed");
  assert(orb.includes('data-nexus-os-orb-state="${escapeHtml(coreState)}"'), "orb reflects runtime state");
  assert(orb.includes("nexusCoreStateAccessibleLabel(coreState)"), "orb has accessible status name");
  assert(styles.includes(".nexus-true-orb-stage"), "true orb stage styles exist");
  assert(styles.includes(".nexus-genesis-particle-field"), "Genesis particle field styles exist");
  assert(styles.includes("@media (prefers-reduced-motion: reduce)"), "reduced motion is supported");
  ["idle", "wake", "listening", "hearing", "processing", "reasoning", "speaking", "waiting", "confirmation", "executing", "verifying", "completed", "offline", "blocked", "error"].forEach(state => {
    assert(app.includes(`${state}:`) || app.includes(`"${state}"`), `${state} core state remains represented`);
  });
}

function assertMinimalConversation() {
  const conversation = extractFunction("renderNexusMinimalConversationExperience");
  const submitHandler = extractFunction("handleNexusPresenceCommandSendSubmit");
  const keydownHandler = extractFunction("handleNexusTrueCommandComposerKeydown");
  const bindStatic = extractFunction("bindStatic");
  assert(conversation.includes("return renderNexusAudioCompanionExperience();"), "minimal conversation redirects to the audio companion experience");
  assert(app.includes('data-nexus-audio-companion="true"'), "audio companion marker is mounted for voice-native conversation");
  assert(app.includes('data-read-only-transcript="true"'), "audio companion keeps transcript/captions read-only");
  assert(!conversation.includes("renderNexusTrueCoreOrb({ compact: true })"), "minimal compact orb route is no longer mounted");
  assert(!conversation.includes('data-nexus-os-conversation-action="retry"'), "permanent retry control is not mounted");
  assert(!conversation.includes("data-nexus-voice-preference-action"), "voice preference wall is not mounted");
  assert(submitHandler.includes("[data-nexus-command-composer]"), "submit handler accepts true composer form submissions");
  assert(submitHandler.includes("true-conversation-fallback"), "unclaimed typed commands still open a safe conversation");
  assert(submitHandler.includes("isNexusPresenceWakePhrase(command)") && submitHandler.includes("renderUserWorkspace();"), "wake phrase commands visibly re-render the true experience");
  assert(keydownHandler.includes('event.key !== "Enter"'), "true composer keydown handler is Enter-aware");
  assert(keydownHandler.includes("event.shiftKey"), "true composer preserves Shift+Enter newline behavior");
  assert(keydownHandler.includes("handleNexusPresenceCommandSendSubmit"), "Enter sends through the guarded submit handler");
  assert(bindStatic.includes('document.addEventListener("keydown", handleNexusTrueCommandComposerKeydown'), "true composer Enter-to-send event is bound");
  assert(bindStatic.includes('document.addEventListener("submit"'), "true composer submit event is bound");
}

function assertContextualMission() {
  const workspace = extractRenderUserWorkspace();
  const activeWorkflow = extractFunction("nexusTrueExperienceHasActiveWorkflow");
  const staleReset = extractFunction("clearNexusTrueExperienceStaleWorkflowState");
  assert(workspace.includes('const showMission = trueExperienceMode === "mission";'), "mission workspace is conditional");
  assert(workspace.includes('showMission ? renderNexusUserWorkspaceSegment("Mission workspace", renderNexusAgenticMissionWorkspace) : ""'), "mission mounts only when needed");
  assert(app.includes("nexusTrueExperienceHasActiveWorkflow"), "mission mode derives from active workflow state");
  assert(activeWorkflow.includes("nexusTrueExperienceHasCurrentWorkflowState"), "mission mode ignores stale persisted workflow state");
  assert(staleReset.includes("true-experience-stale-reset"), "stale workflow state is cleared before a fresh user command");
  assert(app.includes("nexusTrueExperienceSessionStarted = false;"), "return home resets true experience session");
  assert(app.includes("nexusGenesisExperienceActivated = false;"), "return home resets orb activation");
  assert(app.includes("function resetNexusGenesisHomeViewport()"), "return home owns Genesis viewport reset");
  assert(app.includes("resetNexusGenesisHomeViewport();"), "return home calls Genesis viewport reset after render");
  assert(workspace.includes("bindNexusPrimaryVoiceControls();\n  updateNexusGenesisExperienceDom();"), "Genesis DOM state syncs immediately after workspace render");
  assert(app.includes("document.body.dataset.nexusGenesisMode = mode;"), "body tracks Genesis mode for viewport control");
  assert(styles.includes('body.user-mode[data-nexus-genesis-mode="home"]'), "Home mode hides overflow at body level");
  assert(styles.includes("position: fixed !important;"), "Home mode owns a fixed full-window orb scene");
  assert(app.includes("nexusIntentDrivenWorkflowLastRoute = null;"), "return home clears routed mission state");
}

function assertCacheResponsive() {
  assert(app.includes('const AGRINEXUS_BUILD_VERSION = "nexus-behavior-454"'), "app build version bumped");
  assert(app.includes('const AGRINEXUS_PWA_CACHE_VERSION = "agrinexus-pwa-v399"'), "app cache version bumped");
  assert(server.includes('const AGRINEXUS_WEB_BUILD_VERSION = "nexus-behavior-454"'), "server build version bumped");
  assert(server.includes('const AGRINEXUS_PWA_CACHE_VERSION = "agrinexus-pwa-v399"'), "server cache version bumped");
  assert(sw.includes('const CACHE_NAME = "agrinexus-pwa-v399"'), "service worker cache version bumped");
  assert(styles.includes("@media (max-width: 520px)"), "small mobile viewport styles exist");
  assert(styles.includes("@media (max-height: 640px) and (min-width: 700px)"), "short desktop viewport styles exist");
  assert(styles.includes("overflow-x: hidden"), "horizontal overflow is guarded");
}

function assertFinalAcceptance() {
  assertTrueHomeOwner();
  assertTrueHomeMarkup();
  assertLegacyHomeRemoved();
  assertOrbPrimaryInteraction();
  assertMinimalConversation();
  assertContextualMission();
  assertCacheResponsive();
  const composer = extractFunction("renderNexusTrueCommandComposer");
  assert((composer.match(/data-nexus-primary-voice-entry/g) || []).length === 1, "composer defines one primary voice entry");
  assert((composer.match(/data-nexus-primary-typed-entry/g) || []).length === 1, "composer defines one primary typed entry");
  assert(composer.includes("Enter workflow details..."), "typed entry is explicitly workflow-scoped");
  assert(composer.includes("Send"), "single workflow send action exists");
  assert(!extractFunction("renderNexusTrueHome").includes("Ask Nexus"), "idle home does not show old Ask Nexus branding");
}

module.exports = {
  assert,
  assertAlias,
  assertTrueHomeOwner,
  assertTrueHomeMarkup,
  assertLegacyHomeRemoved,
  assertOrbPrimaryInteraction,
  assertMinimalConversation,
  assertContextualMission,
  assertCacheResponsive,
  assertFinalAcceptance
};
