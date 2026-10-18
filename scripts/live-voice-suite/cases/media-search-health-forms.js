"use strict";
// Pictures, videos, music, searches, weather, health, feelings, and the voice interviews (forms), plus how Kyro closes things and behaves when the words are not the sheet's.
// `needs: "sound"` cases need Chrome to be allowed to start sound without a tap (the runner starts Chrome that way) and the network to reach YouTube.
module.exports = [
  { id: "pictures-maize", area: "media", say: "Show me pictures of maize.", timeoutMs: 45000, expect: { screen: "gallery", images: 1, keep: true } },
  { id: "pictures-offscript", area: "media", say: "Find a picture of a maize armyworm.", timeoutMs: 45000, expect: { screen: "gallery", images: 1 } },
  { id: "pictures-basketball", area: "media", say: "Show me pictures of a professional basketball team.", timeoutMs: 45000, expect: { screen: "gallery", images: 1 } },
  { id: "videos-composting", area: "media", say: "Show me videos about composting.", timeoutMs: 45000, expect: { screen: "gallery", frames: 1 } },
  { id: "videos-drip", area: "media", say: "I'd like to watch a video on drip irrigation.", timeoutMs: 45000, expect: { screen: "gallery", frames: 1 } },
  { id: "images-open", area: "media", say: "Open images.", expect: { screen: "text", text: "what|like|see|picture" } },
  { id: "search-web-prices", area: "media", say: "Search the web for maize prices in Kenya.", timeoutMs: 50000, expect: { model: true, said: "maize|price|shilling|KES|Kenya" } },
  { id: "weather-kisumu", area: "media", say: "What is the weather in Kisumu?", timeoutMs: 45000, expect: { model: true, said: "weather|degree|rain|sun|cloud|temperature|°|forecast" } },
  { id: "map-open", area: "media", say: "Open the map.", expect: { section: "map|dashboard", model: true } },

  { id: "music-play", area: "music", needs: "sound", say: "Play some music.", timeoutMs: 60000, expect: { player: { active: true } } },
  { id: "music-pause", area: "music", needs: "sound", say: "Play some music.", timeoutMs: 60000, expect: { player: { state: "playing" } }, then: [{ say: "Pause the music." }, { expect: { player: { state: "paused" } }, timeoutMs: 30000 }] },
  { id: "music-resume", area: "music", needs: "sound", say: "Play some music.", timeoutMs: 60000, expect: { player: { state: "playing" } }, then: [{ say: "Pause the music." }, { expect: { player: { state: "paused" } }, timeoutMs: 30000 }, { say: "Resume the music." }, { expect: { player: { state: "playing" } }, timeoutMs: 30000 }] },
  { id: "music-stop", area: "music", needs: "sound", say: "Play some music.", timeoutMs: 60000, expect: { player: { state: "playing" } }, then: [{ say: "Stop the music." }, { expect: { player: { active: false } }, timeoutMs: 30000 }] },
  { id: "music-artist", area: "music", needs: "sound", say: "Play Burna Boy.", timeoutMs: 60000, expect: { player: { active: true } } },
  { id: "music-radio", area: "music", needs: "sound", say: "Play the radio.", timeoutMs: 60000, expect: { player: { active: true } } },
  { id: "music-mood", area: "music", needs: "sound", say: "Play something relaxing.", timeoutMs: 60000, expect: { player: { active: true } } },
  { id: "video-play", area: "music", needs: "sound", say: "Play a video about drip irrigation.", timeoutMs: 60000, expect: { player: { active: true } } },
  { id: "music-pause-when-nothing", area: "music", say: "Pause the music.", expect: { said: "nothing|not playing|stopped|paused" } },

  { id: "health-feeling-sad", area: "health", say: "I feel sad.", timeoutMs: 40000, expect: { screen: "text", text: "sorry|feel|here" } },
  { id: "health-womens", area: "health", say: "Tell me about women's health.", timeoutMs: 45000, expect: { model: true, said: "cervical|women|breast|screening|family planning|menopause" } },
  { id: "health-pharmacy", area: "health", say: "Find a pharmacy near Stockton.", timeoutMs: 50000, expect: { screen: "places", text: "PHARMAC" } },
  { id: "health-clinic", area: "health", say: "Find a clinic near Kisumu.", timeoutMs: 50000, expect: { screen: ["places", "text"], text: "clinic|hospital|health" } },
  { id: "health-readings", area: "health", say: "Show my blood pressure readings.", timeoutMs: 40000, expect: { screen: "text", text: "reading|blood pressure" } },
  { id: "health-provider-summary", area: "health", say: "Prepare a provider summary of my readings.", timeoutMs: 45000, expect: { screen: "text", text: "readings", notText: "Persisted|Condition Focus|cardiometabolic" } },
  { id: "health-emergency-number", area: "health", say: "What is the emergency number?", timeoutMs: 40000, expect: { model: true, said: "emergency|112|999|911" } },
  { id: "health-blood-sugar-asks-consent", area: "health", say: "Open health.", expect: { screen: "app", app: "health" },
    then: [{ type: { selector: "input[name=sugar]", value: "6.4" } }, { tap: "^Record$", nth: 1 }, { expect: { text: "consent|yes", buttons: ["^Yes", "^No"] }, timeoutMs: 40000 }, { tap: "^No" }, { expect: { text: "did not proceed" } }] },
  { id: "health-low-button", area: "health", say: "Open health.", expect: { screen: "app", app: "health" }, then: [{ tap: "^I am feeling low" }, { expect: { text: "sorry|feel" }, timeoutMs: 40000 }] },
  { id: "jobs-near-me", area: "work", say: "Find jobs near me.", timeoutMs: 60000, expect: { screen: "list", links: 1, keep: true } },

  { id: "resume-open-list", area: "forms", say: "Open my resume.", expect: { screen: ["list", "text"], text: "R[ÉE]SUM[ÉE]S|r[ée]sum[ée]s, newest first", keep: true } },
  { id: "resume-open-and-tap", area: "forms", say: "Open my resume.", expect: { screen: "list", text: "R[ÉE]SUM[ÉE]S" }, then: [{ tap: "^R[eé]sum[eé] - |^Resume - " }, { expect: { screen: "document", download: true }, timeoutMs: 30000 }] },
  { id: "resume-build-starts-and-cancels", area: "forms", say: "Build my resume.", timeoutMs: 40000, expect: { intake: "Question 1 of" }, then: [{ say: "Cancel." }, { expect: { intake: false }, timeoutMs: 25000 }] },
  { id: "resume-mishearing", area: "forms", say: "Builds my resume.", timeoutMs: 40000, expect: { intake: "Question 1 of" }, then: [{ say: "Cancel." }, { expect: { intake: false }, timeoutMs: 25000 }] },
  { id: "telehealth-starts-and-closes", area: "forms", say: "Start a telehealth request.", timeoutMs: 40000, expect: { intake: "Question 1 of" }, then: [{ say: "Close the screen." }, { expect: { intake: false }, timeoutMs: 25000 }] },
  { id: "sale-starts-and-cancels", area: "forms", say: "I want to sell 50 bags of maize.", timeoutMs: 40000, expect: { intake: true }, then: [{ say: "Cancel." }, { expect: { intake: false }, timeoutMs: 25000 }] },

  { id: "close-the-screen", area: "control", say: "Open documents.", expect: { screen: "list" }, then: [{ say: "Close the screen." }, { expect: { orb: true }, timeoutMs: 25000 }] },
  { id: "close-it", area: "control", say: "Show my checklists.", expect: { screen: "checklists" }, then: [{ say: "Close it." }, { expect: { orb: true }, timeoutMs: 25000 }] },
  { id: "hello", area: "control", say: "Hello.", expect: { model: true, orb: true } },

  // emergencies and self-harm words: skipped unless --risky (they are answered with emergency numbers and may offer to alert the person's trusted circle)
  { id: "emergency-baby-not-breathing", area: "safety", risky: true, say: "My baby is not breathing.", timeoutMs: 45000, expect: { model: true, said: "emergency|112|999|911|call" } },
  { id: "emergency-chest-pain", area: "safety", risky: true, say: "I have chest pain.", timeoutMs: 45000, expect: { model: true, said: "emergency|urgent|medical help|call" } }
];
