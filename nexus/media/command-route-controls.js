"use strict";

// Media controls ("pause the music", "volume up", "resume", "sitisha muziki", "endelea") on the OLDER command route (POST /api/agent/command and the phone line).
//
// Found by the phrase sweep: that route had no handling for them at all. "Resume" and "Endelea" were answered with a made-up "Done. Prepared gap review ...", "Next song" and
// "Volume up" with "I couldn't do that one just now", "Stop the music" with "Spotify is not connected". The player lives on the person's phone, and this route has no player to press
// buttons on, so (like the typed route's media.control tool) it must not guess:
//   * a control that NAMES music, radio, video or volume ("pause the music", "volume up", "sitisha muziki") returns the same media.control INSTRUCTION the typed route returns, so a client
//     that has a player carries it out, plus a short honest spoken line that says it was passed on, not done;
//   * a bare one ("resume", "next", "endelea") is only meant for a player that is already playing, so this route asks plainly what to resume, or says nothing is playing here. It never
//     claims success and never invents a player.
// The Kiswahili lines are draft wording and need a fluent speaker to review them (see the PR note).
const KyroMediaCommands = require("../../public/kyro-media-commands.js");

// A bare word is taken for a media control only when it is clearly about a player; "hold on", "skip", "continue", "last" are also ordinary conversation words, so they are left to the rest of Kyro.
const CLEAR_WHEN_BARE = /^(?:resume|unpause|pause|next|previous|endelea|endeleza|sitisha|pumzisha)$/i;

const LINES = Object.freeze({
  en: {
    passed: {
      pause: "I've sent \"pause\" to your music player. I can't see from here whether anything is playing.",
      resume: "I've sent \"resume\" to your music player. I can't see from here whether anything is playing.",
      stop: "I've sent \"stop\" to your music player. I can't see from here whether anything is playing.",
      next: "I've sent \"next song\" to your music player. I can't see from here whether anything is playing.",
      previous: "I've sent \"previous song\" to your music player. I can't see from here whether anything is playing.",
      "volume-up": "I've sent \"volume up\" to your music player. I can't see from here whether anything is playing.",
      "volume-down": "I've sent \"volume down\" to your music player. I can't see from here whether anything is playing.",
      mute: "I've sent \"mute\" to your music player. I can't see from here whether anything is playing.",
      unmute: "I've sent \"unmute\" to your music player. I can't see from here whether anything is playing."
    },
    resumeWhat: "What should I resume? Nothing is playing from here. You can say \"play some music\" or \"play Capital FM\".",
    nothing: control => `Nothing is playing from here, so there is nothing to ${control}. Say \"play some music\" to start something.`
  },
  sw: {
    passed: {
      pause: "Nimeomba kicheza muziki chako kisitishe. Siwezi kuona kutoka hapa kama kuna kinachochezwa.",
      resume: "Nimeomba kicheza muziki chako kiendelee. Siwezi kuona kutoka hapa kama kuna kinachochezwa.",
      stop: "Nimeomba kicheza muziki chako kisimame. Siwezi kuona kutoka hapa kama kuna kinachochezwa.",
      next: "Nimeomba kicheza muziki chako kicheze wimbo unaofuata. Siwezi kuona kutoka hapa kama kuna kinachochezwa.",
      previous: "Nimeomba kicheza muziki chako kirudi wimbo uliopita. Siwezi kuona kutoka hapa kama kuna kinachochezwa.",
      "volume-up": "Nimeomba kicheza muziki chako kiongeze sauti. Siwezi kuona kutoka hapa kama kuna kinachochezwa.",
      "volume-down": "Nimeomba kicheza muziki chako kipunguze sauti. Siwezi kuona kutoka hapa kama kuna kinachochezwa.",
      mute: "Nimeomba kicheza muziki chako kinyamaze. Siwezi kuona kutoka hapa kama kuna kinachochezwa.",
      unmute: "Nimeomba kicheza muziki chako kirudishe sauti. Siwezi kuona kutoka hapa kama kuna kinachochezwa."
    },
    resumeWhat: "Niendelee na nini? Hakuna kinachochezwa hapa. Unaweza kusema \"cheza muziki\" au \"weka redio Citizen\".",
    nothing: () => "Hakuna kinachochezwa hapa, kwa hiyo hakuna cha kufanya. Sema \"cheza muziki\" ili nianze."
  }
});
const VERB = Object.freeze({ pause: "pause", resume: "resume", stop: "stop", next: "skip", previous: "go back to", "volume-up": "turn up", "volume-down": "turn down", mute: "mute", unmute: "unmute" });

function isSwahiliLanguage(value) {
  return /^sw/i.test(String(value || ""));
}

// Returns null when the sentence is not a media control for this route to answer, otherwise
// { control, explicit, lang, response, status, instruction | null }.
function mediaControlWithoutPlayer(text, { language = "en" } = {}) {
  const raw = String(text || "");
  const parsed = KyroMediaCommands.parse(raw);
  if (!parsed || parsed.type !== "control") return null;
  const lang = parsed.lang === "sw" || isSwahiliLanguage(language) ? "sw" : "en";
  const lines = LINES[lang];
  // "Mute"/"Unmute" are about sound whatever else is said, so even the bare word is an instruction for the player.
  if (parsed.explicit || parsed.control === "mute" || parsed.control === "unmute") {
    return { control: parsed.control, explicit: true, lang, status: "completed", response: lines.passed[parsed.control],
      instruction: { type: "media.control", control: parsed.control } };
  }
  // A bare word: only the clearly-player ones.
  const bare = KyroMediaCommands.clean(raw).toLowerCase();
  if (!CLEAR_WHEN_BARE.test(bare)) return null;
  if (parsed.control === "resume") return { control: parsed.control, explicit: false, lang, status: "awaiting-information", response: lines.resumeWhat, instruction: null };
  return { control: parsed.control, explicit: false, lang, status: "completed", response: lines.nothing(VERB[parsed.control] || "do"), instruction: null };
}

module.exports = Object.freeze({ mediaControlWithoutPlayer });
