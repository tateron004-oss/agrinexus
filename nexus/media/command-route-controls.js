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
  },
  ha: { passed: { "pause": "Na aika \"dakata\" zuwa na'urar kiɗanka. Ba zan iya gani daga nan ko wani abu na kunne ba.", "resume": "Na aika \"ci gaba\" zuwa na'urar kiɗanka. Ba zan iya gani daga nan ko wani abu na kunne ba.", "stop": "Na aika \"tsaya\" zuwa na'urar kiɗanka. Ba zan iya gani daga nan ko wani abu na kunne ba.", "next": "Na aika \"waƙa ta gaba\" zuwa na'urar kiɗanka. Ba zan iya gani daga nan ko wani abu na kunne ba.", "previous": "Na aika \"waƙar da ta gabata\" zuwa na'urar kiɗanka. Ba zan iya gani daga nan ko wani abu na kunne ba.", "volume-up": "Na aika \"ƙara sauti\" zuwa na'urar kiɗanka. Ba zan iya gani daga nan ko wani abu na kunne ba.", "volume-down": "Na aika \"rage sauti\" zuwa na'urar kiɗanka. Ba zan iya gani daga nan ko wani abu na kunne ba.", "mute": "Na aika \"kashe sauti\" zuwa na'urar kiɗanka. Ba zan iya gani daga nan ko wani abu na kunne ba.", "unmute": "Na aika \"dawo da sauti\" zuwa na'urar kiɗanka. Ba zan iya gani daga nan ko wani abu na kunne ba." }, resumeWhat: "Me zan ci gaba da shi? Babu abin da ke kunne daga nan. Za ka iya cewa \"kunna kiɗa\" ko \"kunna Capital FM\".", nothing: control => `Babu abin da ke kunne daga nan, don haka babu abin da za a ${control}. Ka ce \"kunna kiɗa\" don fara wani abu.` },
  am: { passed: { "pause": "\"ለአፍታ አቁም\" የሚለውን ወደ ሙዚቃ ማጫወቻህ ልኬአለሁ። ከዚህ ሆኜ የሚጫወት ነገር መኖሩን ማየት አልችልም።", "resume": "\"ቀጥል\" የሚለውን ወደ ሙዚቃ ማጫወቻህ ልኬአለሁ። ከዚህ ሆኜ የሚጫወት ነገር መኖሩን ማየት አልችልም።", "stop": "\"አቁም\" የሚለውን ወደ ሙዚቃ ማጫወቻህ ልኬአለሁ። ከዚህ ሆኜ የሚጫወት ነገር መኖሩን ማየት አልችልም።", "next": "\"ቀጣይ ዘፈን\" የሚለውን ወደ ሙዚቃ ማጫወቻህ ልኬአለሁ። ከዚህ ሆኜ የሚጫወት ነገር መኖሩን ማየት አልችልም።", "previous": "\"ያለፈው ዘፈን\" የሚለውን ወደ ሙዚቃ ማጫወቻህ ልኬአለሁ። ከዚህ ሆኜ የሚጫወት ነገር መኖሩን ማየት አልችልም።", "volume-up": "\"ድምፅ ጨምር\" የሚለውን ወደ ሙዚቃ ማጫወቻህ ልኬአለሁ። ከዚህ ሆኜ የሚጫወት ነገር መኖሩን ማየት አልችልም።", "volume-down": "\"ድምፅ ቀንስ\" የሚለውን ወደ ሙዚቃ ማጫወቻህ ልኬአለሁ። ከዚህ ሆኜ የሚጫወት ነገር መኖሩን ማየት አልችልም።", "mute": "\"ድምፅ አጥፋ\" የሚለውን ወደ ሙዚቃ ማጫወቻህ ልኬአለሁ። ከዚህ ሆኜ የሚጫወት ነገር መኖሩን ማየት አልችልም።", "unmute": "\"ድምፅ መልስ\" የሚለውን ወደ ሙዚቃ ማጫወቻህ ልኬአለሁ። ከዚህ ሆኜ የሚጫወት ነገር መኖሩን ማየት አልችልም።" }, resumeWhat: "ምን ልቀጥል? ከዚህ ምንም እየተጫወተ አይደለም። \"ሙዚቃ አጫውት\" ወይም \"Capital FM አጫውት\" ማለት ትችላለህ።", nothing: control => `ከዚህ ምንም እየተጫወተ አይደለም፣ ስለዚህ ${control} የሚደረግ ነገር የለም። አንድ ነገር ለመጀመር \"ሙዚቃ አጫውት\" በል።` },
  yo: { passed: { "pause": "Mo ti fi \"dúró díẹ̀\" ránṣẹ́ sí ẹ̀rọ orin rẹ. Mi ò lè rí láti ibí bóyá nǹkan kan ń dún.", "resume": "Mo ti fi \"tẹ̀síwájú\" ránṣẹ́ sí ẹ̀rọ orin rẹ. Mi ò lè rí láti ibí bóyá nǹkan kan ń dún.", "stop": "Mo ti fi \"dúró\" ránṣẹ́ sí ẹ̀rọ orin rẹ. Mi ò lè rí láti ibí bóyá nǹkan kan ń dún.", "next": "Mo ti fi \"orin tó kàn\" ránṣẹ́ sí ẹ̀rọ orin rẹ. Mi ò lè rí láti ibí bóyá nǹkan kan ń dún.", "previous": "Mo ti fi \"orin tó ṣáájú\" ránṣẹ́ sí ẹ̀rọ orin rẹ. Mi ò lè rí láti ibí bóyá nǹkan kan ń dún.", "volume-up": "Mo ti fi \"gbé ohùn sókè\" ránṣẹ́ sí ẹ̀rọ orin rẹ. Mi ò lè rí láti ibí bóyá nǹkan kan ń dún.", "volume-down": "Mo ti fi \"rẹ ohùn sílẹ̀\" ránṣẹ́ sí ẹ̀rọ orin rẹ. Mi ò lè rí láti ibí bóyá nǹkan kan ń dún.", "mute": "Mo ti fi \"pa ohùn\" ránṣẹ́ sí ẹ̀rọ orin rẹ. Mi ò lè rí láti ibí bóyá nǹkan kan ń dún.", "unmute": "Mo ti fi \"ṣí ohùn\" ránṣẹ́ sí ẹ̀rọ orin rẹ. Mi ò lè rí láti ibí bóyá nǹkan kan ń dún." }, resumeWhat: "Kí ni kí n tẹ̀síwájú? Kò sí ohun tó ń dún láti ibí. O lè sọ pé \"ṣe orin díẹ̀\" tàbí \"ṣe Capital FM\".", nothing: control => `Kò sí ohun tó ń dún láti ibí, nítorí náà kò sí nǹkan láti ${control}. Sọ pé \"ṣe orin díẹ̀\" láti bẹ̀rẹ̀ nǹkan.` },
  ig: { passed: { "pause": "Ezigala m \"kwụsịtụ\" na igwe egwu gị. Enweghị m ike ịhụ site ebe a ma ihe ọ bụla na-akpọ.", "resume": "Ezigala m \"gaa n'ihu\" na igwe egwu gị. Enweghị m ike ịhụ site ebe a ma ihe ọ bụla na-akpọ.", "stop": "Ezigala m \"kwụsị\" na igwe egwu gị. Enweghị m ike ịhụ site ebe a ma ihe ọ bụla na-akpọ.", "next": "Ezigala m \"egwu ọzọ\" na igwe egwu gị. Enweghị m ike ịhụ site ebe a ma ihe ọ bụla na-akpọ.", "previous": "Ezigala m \"egwu gara aga\" na igwe egwu gị. Enweghị m ike ịhụ site ebe a ma ihe ọ bụla na-akpọ.", "volume-up": "Ezigala m \"bulie olu\" na igwe egwu gị. Enweghị m ike ịhụ site ebe a ma ihe ọ bụla na-akpọ.", "volume-down": "Ezigala m \"wedata olu\" na igwe egwu gị. Enweghị m ike ịhụ site ebe a ma ihe ọ bụla na-akpọ.", "mute": "Ezigala m \"mechie olu\" na igwe egwu gị. Enweghị m ike ịhụ site ebe a ma ihe ọ bụla na-akpọ.", "unmute": "Ezigala m \"meghee olu\" na igwe egwu gị. Enweghị m ike ịhụ site ebe a ma ihe ọ bụla na-akpọ." }, resumeWhat: "Gịnị ka m ga-aga n'ihu? Ọ dịghị ihe na-akpọ site ebe a. Ị nwere ike ịsị \"kpọọ egwu\" ma ọ bụ \"kpọọ Capital FM\".", nothing: control => `Ọ dịghị ihe na-akpọ site ebe a, ya mere ọ dịghị ihe a ga-${control}. Kwuo \"kpọọ egwu\" iji malite ihe.` }
});
const VERB = Object.freeze({ pause: "pause", resume: "resume", stop: "stop", next: "skip", previous: "go back to", "volume-up": "turn up", "volume-down": "turn down", mute: "mute", unmute: "unmute" });

function isSwahiliLanguage(value) {
  return /^sw/i.test(String(value || ""));
}

// Returns null when the sentence is not a media control for this route to answer, otherwise
// { control, explicit, lang, response, status, instruction | null }.
function mediaControlWithoutPlayer(text, { language = "en", inConversation = false } = {}) {
  const raw = String(text || "");
  const parsed = KyroMediaCommands.parse(raw);
  if (!parsed || parsed.type !== "control") return null;
  // (a Kiswahili command is answered in Kiswahili; otherwise the person's language when the lines have it: Hausa, Amharic, Yoruba and Igbo too)
  const chosen = String(language || "").trim().toLowerCase().split(/[-_]/)[0];
  const lang = parsed.lang === "sw" || isSwahiliLanguage(language) ? "sw" : (LINES[chosen] ? chosen : "en");
  const lines = LINES[lang];
  // "Mute"/"Unmute" are about sound whatever else is said, so even the bare word is an instruction for the player.
  if (parsed.explicit || parsed.control === "mute" || parsed.control === "unmute") {
    return { control: parsed.control, explicit: true, lang, status: "completed", response: lines.passed[parsed.control],
      instruction: { type: "media.control", control: parsed.control } };
  }
  // A bare word: only the clearly-player ones, and never while a practice lesson or a pending question is open (found by the full suite: "next" and "endelea" are how a lesson is carried on).
  const bare = KyroMediaCommands.clean(raw).toLowerCase();
  if (inConversation || !CLEAR_WHEN_BARE.test(bare)) return null;
  if (parsed.control === "resume") return { control: parsed.control, explicit: false, lang, status: "awaiting-information", response: lines.resumeWhat, instruction: null };
  return { control: parsed.control, explicit: false, lang, status: "completed", response: lines.nothing(VERB[parsed.control] || "do"), instruction: null };
}

module.exports = Object.freeze({ mediaControlWithoutPlayer });
