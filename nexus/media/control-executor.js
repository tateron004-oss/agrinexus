"use strict";

// "media.control": pause / resume / stop / next / previous / volume up / volume down / mute / unmute for the music or video that is playing.
//
// The player lives on the person's phone, so the server cannot press its buttons. This tool therefore returns an INSTRUCTION that the phone's
// player (public/kyro-media-player.js) carries out, and it says so honestly: the outcome is "instructed", never "paused" or "stopped" -- only
// the phone can see whether anything was playing, and it tells the person ("Nothing is playing right now") when there was not.
const CONTROLS = Object.freeze(["pause", "resume", "stop", "next", "previous", "volume-up", "volume-down", "mute", "unmute"]);

function createMediaControlExecutor() {
  return async function execute({ input = {} }) {
    const control = String(input.control || "").trim().toLowerCase();
    if (!CONTROLS.includes(control)) return { ok: false, resolved: false, reason: "unknown_media_control", requestedMedia: control };
    return {
      ok: true, resolved: true, action: "control", control, requestedMedia: control, resolvedMedia: "current playback",
      playbackState: "instructed", instruction: { type: "media.control", control }, executedBy: "client-player"
    };
  };
}

function verifyMediaControlOutcome({ result }) {
  const verified = result?.ok === true && CONTROLS.includes(result?.instruction?.control) && result?.instruction?.type === "media.control";
  return { verified, method: "client_player_instruction", reason: verified ? null : (result?.reason || "no_valid_control_instruction") };
}

module.exports = Object.freeze({ CONTROLS, createMediaControlExecutor, verifyMediaControlOutcome });
