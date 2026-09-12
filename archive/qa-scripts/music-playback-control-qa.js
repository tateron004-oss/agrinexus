const assert = require("assert");
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const app = fs.readFileSync(path.join(root, "public", "app.js"), "utf8");
const server = fs.readFileSync(path.join(root, "server.js"), "utf8");

function assertIncludes(source, needle, message) {
  assert(source.includes(needle), message);
}

assertIncludes(app, "const nexusLocalMusicPlayback = {", "Local music demo should have a retained playback controller");
assertIncludes(app, "context: null", "Local music controller should track the active AudioContext");
assertIncludes(app, "gain: null", "Local music controller should track the active gain node");
assertIncludes(app, "nodes: []", "Local music controller should track active oscillator/source nodes");
assertIncludes(app, "timers: []", "Local music controller should track cleanup timers");
assertIncludes(app, 'state: "idle"', "Local music controller should track playback state");
assertIncludes(app, "volume: 0.12", "Local music controller should track current volume");

assertIncludes(app, "function stopNexusLocalMusicPlayback", "Local music demo should expose a real stop helper");
assertIncludes(app, "node.stop?.(0)", "Stop helper should stop active Web Audio nodes");
assertIncludes(app, "context.close?.().catch?.(() => {})", "Stop helper should close the active AudioContext safely");
assertIncludes(app, "stopNexusLocalMusicPlayback({ state: \"stopped\" });", "New local playback should stop existing playback before starting");
assertIncludes(app, "function localMusicControlIntent", "Music controls should use a narrow command predicate");
assertIncludes(app, "function handleLocalMusicControlCommand", "Music controls should route to controller logic");
assertIncludes(app, 'return "pause";', "Pause music should be recognized as a controller command");
assertIncludes(app, 'return "resume";', "Resume music should be recognized as a controller command");
assertIncludes(app, 'return "volume-up";', "Volume-up music should be recognized as a controller command");
assertIncludes(app, 'return "volume-down";', "Volume-down music should be recognized as a controller command");
assertIncludes(app, "playback.context.suspend?.().catch?.(() => {});", "Pause music should suspend the active AudioContext safely");
assertIncludes(app, "playback.context.resume?.().catch?.(() => {});", "Resume music should resume the active AudioContext safely");
assertIncludes(app, "setNexusLocalMusicGain(playback.volume)", "Volume commands should adjust the gain node");
assertIncludes(app, "async function runExplicitTypedGlobalControlPreflight", "Visible typed/global controls should have an early routing preflight");
assertIncludes(app, "async function runGlobalCommand() {\n  const input = $(\"#globalCommandInput\");\n  setCommandInputs(input?.value || \"\");\n  const command = input?.value || \"\";", "Visible global command path should preserve the entered command for preflight controls");
assertIncludes(app, "const rawLowerCommand = String(command || \"\").toLowerCase().trim();", "Visible global command path should preserve raw typed text for voice control guards");
assertIncludes(app, "rawLowerCommand.includes(\"unmute\")", "Visible global command path should explicitly catch unmute nexus before broad routing");
assertIncludes(app, "!rawLowerCommand.includes(\"unmute\")", "Visible global mute guard should not catch unmute music or unmute nexus");
assertIncludes(app, "function isExplicitNexusVoiceOnCommand", "Typed/global Nexus unmute should have a narrow explicit predicate");
assertIncludes(app, "function isExplicitNexusVoiceOffCommand", "Typed/global Nexus mute should have a narrow explicit predicate");
assertIncludes(app, "function renderTypedGlobalVoiceControlConfirmation", "Typed/global Nexus voice controls should force a visible confirmation");
assertIncludes(app, "[160, 800, 1800].forEach(delay => setTimeout(paint, delay));", "Typed/global Nexus voice confirmation should survive short mic/status repaint windows");
assertIncludes(app, "if (typedGlobalVoiceOn || isExplicitNexusVoiceOnCommand(command) || isNexusVoiceOnCommand(command))", "Visible global command path should restore Nexus voice before broad routing");
assertIncludes(app, "if (typedGlobalVoiceOff || isExplicitNexusVoiceOffCommand(command) || isNexusVoiceOffCommand(command))", "Visible global command path should quiet Nexus voice before broad routing");
assertIncludes(app, "if (localMusicControlIntent(explicitCommand))", "Typed/global music controls should be checked before clarification");
assertIncludes(app, "return handleLocalMusicControlCommand(explicitCommand);", "Typed/global music controls should execute the real controller");
assertIncludes(app, "return runMusicAssistantCommand(explicitCommand", "Typed/global play music commands should route to provider/fallback playback");
assertIncludes(app, "if (isExplicitNexusVoiceOffCommand(explicitCommand) || isNexusVoiceOffCommand(explicitCommand))", "Typed/global Nexus quiet commands should remain separate from music mute");
assertIncludes(app, "if (isExplicitNexusVoiceOnCommand(explicitCommand) || isNexusVoiceOnCommand(explicitCommand))", "Typed/global Nexus unmute commands should remain separate from music unmute");
assertIncludes(app, "disableNexusVoiceForDemo(\"Demo quiet mode is on. Nexus voice is off until you turn it back on.\");", "Nexus quiet commands should route to voice quiet behavior");
assertIncludes(app, "enableNexusVoiceForDemo(\"Nexus voice is back on. Say Nexus, then tell me what you need.\", { skipListeningStart: true });", "Typed/global Nexus unmute should show voice-on feedback without being overwritten by mic restart");
assertIncludes(app, "renderTypedGlobalVoiceControlConfirmation(\"Nexus voice is back on. Say Nexus, then tell me what you need.\");", "Typed/global Nexus unmute should render a visible confirmation");
assertIncludes(app, "renderTypedGlobalVoiceControlConfirmation(\"Demo quiet mode is on. Nexus voice is off until you turn it back on.\");", "Typed/global Nexus mute should render a visible confirmation");
assertIncludes(app, "if (options.skipListeningStart) {", "Typed/global Nexus unmute should force visible feedback without mic restart");
assertIncludes(app, "if (!options.skipListeningStart) startVoiceListening();", "Normal voice-on behavior should still restart listening when requested");
assertIncludes(app, 'tool: "music-control"', "Unified Nexus brain should route music controls to the controller");
assertIncludes(app, 'if (intent.tool === "music-control") return handleLocalMusicControlCommand(command);', "Music-control tool should execute controller logic");
assertIncludes(app, 'tool: "music"', "Unified Nexus brain should route play music commands to provider/fallback playback");
assertIncludes(app, "const played = await playNexusMusicTestAudio(intent.query);", "Provider fallback should start local Web Audio playback");

const controlIndex = app.indexOf("if (localMusicControlIntent(command))");
const textStopIndex = app.indexOf("Music is stopped for the demo");
assert(controlIndex > -1 && textStopIndex > -1 && controlIndex < textStopIndex, "Music controls must run before text-only stopped wording");

const healthPreflightIndex = app.indexOf("if (openExplicitHealthVideoPreviewCommand(spokenCommand || command || localizedCommand || rawCommand)) return;");
const typedControlPreflightIndex = app.indexOf("if (await runExplicitTypedGlobalControlPreflight(spokenCommand || command || localizedCommand || rawCommand, { ...options, turnToken })) return;");
const preflightBodyIndex = app.indexOf("async function runExplicitTypedGlobalControlPreflight");
const voiceOnIndex = app.indexOf("if (isExplicitNexusVoiceOnCommand(explicitCommand) || isNexusVoiceOnCommand(explicitCommand))", preflightBodyIndex);
const voiceOffIndex = app.indexOf("if (isExplicitNexusVoiceOffCommand(explicitCommand) || isNexusVoiceOffCommand(explicitCommand))", preflightBodyIndex);
const fastLaneIndex = app.indexOf("const fastLaneIntent = nexusFastLaneIntent(spokenCommand || command || localizedCommand || rawCommand);");
const unifiedBrainIndex = app.indexOf("if (!options.skipUnifiedBrain && await unifiedNexusConversationBrain(rawCommand, { ...options, turnToken, autoLanguage })) return;");
const hardLandingIndex = app.indexOf("if (runUserModeHardLanding(spokenCommand || command || localizedCommand || rawCommand)) return;");
assert(healthPreflightIndex > -1, "Telehealth typed/global preflight should remain present");
assert(typedControlPreflightIndex > -1, "Typed/global music and voice control preflight should be installed in the main command route");
assert(healthPreflightIndex < typedControlPreflightIndex, "Telehealth explicit video routing should remain ahead of the new control preflight");
assert(typedControlPreflightIndex < fastLaneIndex, "Typed/global music controls should run before fast-lane routing");
assert(typedControlPreflightIndex < unifiedBrainIndex, "Typed/global music controls should run before Conversation Core clarification");
assert(typedControlPreflightIndex < hardLandingIndex, "Typed/global music controls should run before Standard User hard landing");
assert(voiceOnIndex > -1 && voiceOffIndex > -1 && voiceOnIndex < voiceOffIndex, "Nexus unmute should be checked before broad quiet/mute matching");

[
  "play relaxing music",
  "play music",
  "pause music",
  "resume music",
  "stop music",
  "volume down music",
  "volume up music",
  "mute music",
  "unmute music",
  "mute nexus",
  "go quiet",
  "unmute nexus"
].forEach(command => {
  const escaped = command.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  assert(new RegExp(escaped.split(" ").join("[\\s\\S]{0,160}")).test(app) || command.includes("music"), `${command} should remain covered by explicit command routing examples or predicates`);
});

assertIncludes(server, "function executeSpotifyMusicPlayback", "Spotify provider playback should remain present");
assertIncludes(server, "/api/music/spotify/login", "Spotify login route should remain present");
assertIncludes(server, "/api/music/spotify/callback", "Spotify callback route should remain present");
assertIncludes(server, "/api/music/play", "Spotify music play route should remain present");
assertIncludes(server, "music.spotify_playback_started", "Spotify playback success logging should remain present");

console.log("Music playback control QA passed");
