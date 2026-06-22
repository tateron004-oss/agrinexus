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
assertIncludes(app, 'tool: "music-control"', "Unified Nexus brain should route music controls to the controller");
assertIncludes(app, 'if (intent.tool === "music-control") return handleLocalMusicControlCommand(command);', "Music-control tool should execute controller logic");
assertIncludes(app, 'tool: "music"', "Unified Nexus brain should route play music commands to provider/fallback playback");
assertIncludes(app, "const played = await playNexusMusicTestAudio(intent.query);", "Provider fallback should start local Web Audio playback");

const controlIndex = app.indexOf("if (localMusicControlIntent(command))");
const textStopIndex = app.indexOf("Music is stopped for the demo");
assert(controlIndex > -1 && textStopIndex > -1 && controlIndex < textStopIndex, "Music controls must run before text-only stopped wording");

assertIncludes(server, "function executeSpotifyMusicPlayback", "Spotify provider playback should remain present");
assertIncludes(server, "/api/music/spotify/login", "Spotify login route should remain present");
assertIncludes(server, "/api/music/spotify/callback", "Spotify callback route should remain present");
assertIncludes(server, "/api/music/play", "Spotify music play route should remain present");
assertIncludes(server, "music.spotify_playback_started", "Spotify playback success logging should remain present");

console.log("Music playback control QA passed");
