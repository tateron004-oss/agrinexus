// Kyro help specs: what Kyro can really do for work, learning, health, the farm and trade, in a few plain words, and the sentences to say for each. A plain "open health" (or "open the farm", "open work"...)
// shows this as ONE screen of text (public/kyro-result-screen.js, helpModel), not a menu: there is nothing to tap. The same sentences are what you can say or type to get the answer on the screen.
//
//   workSpec / learnSpec / healthSpec / farmSpec / tradeSpec ({ roles, lang }) -> { id, title, lines, choices: [{ id, label, say, tool? }] }      (pure; no DOM)
//   specFor(workspace, options), isGeneralFor(workspace, text)
//
// Honest by design: Kyro cannot search live job listings, so the work help says so and lists what it can really do (make a CV, practise an interview, learn to read or count). The roles named
// are only the short list loaded on the platform, said as that, never as vacancies.
(function (root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory();
  else root.KyroAnswerCard = factory();
})(typeof self !== "undefined" ? self : this, function () {
  "use strict";

  const TEXT = {
    en: {
      title: "Work",
      noSearch: "I can't search live job listings, so I won't guess what is open near you.",
      roles: roles => `Roles loaded on Kyro: ${roles.join(", ")}.`,
      cv: "Make my CV", interview: "Practise a job interview", letters: "Learn to read or count",
      cvSay: "Make my CV", interviewSay: "Give me a practice interview", lettersSay: "Teach me letters",
      learnTitle: "Learn",
      learnLine: "I teach short practice lessons by voice, one small step at a time. They are not certified courses, and nothing is enrolled or certified.",
      learnLetters: "Learn the letters", learnLettersSay: "Teach me letters",
      learnMaths: "Learn numbers and adding", learnMathsSay: "Teach me maths",
      learnAi: "AI basics for small business", learnAiSay: "Start the AI basics course",
      healthTitle: "Health",
      healthLine: "I record what you tell me and help you get ready for a visit. I do not diagnose or give treatment advice.",
      healthSay: "To save a reading, just say it, for example: my blood pressure is 120 over 80.",
      healthEmergency: "In an emergency, call your local emergency number now.",
      healthReadings: "My readings", healthReadingsSay: "Show my blood pressure readings",
      healthSummary: "Summary for my provider", healthSummarySay: "Prepare a provider summary of my readings",
      healthClinic: "Find a clinic", healthClinicSay: "Find a clinic near me",
      healthPharmacy: "Find a pharmacy", healthPharmacySay: "Find a pharmacy near me",
      healthNumber: "Emergency number", healthNumberSay: "What is the emergency number?",
      farmTitle: "Farm",
      farmLine: "I keep your farm records and give general crop guidance. I do not name a spray or a dose.",
      farmSay: "To log something, just say it, for example: it rained 12 mm, or I harvested 50 kg of maize.",
      farmProblem: "For a crop problem, tell me what you see.",
      farmLog: "My farm log", farmLogSay: "Show my farm log",
      farmRain: "Rain this month", farmRainSay: "How much rain did I get this month?",
      farmMonth: "This month's money", farmMonthSay: "Give me my summary for this month",
      tradeTitle: "Trade",
      tradeLine: "I keep a community board where you can post what you have for sale, and your buyers' orders. I do not take payments, buy anything or arrange delivery from here.",
      tradeSell: "To sell something, say: post for sale: 500 kg of maize at 40 per kg.",
      tradeOrder: "To note a buyer's order, say: add an order from Amina Traders for 200 kg of maize at 45 per kg.",
      tradeBoard: "What is for sale", tradeBoardSay: "What is for sale?",
      tradeListings: "My listings", tradeListingsSay: "Show my listings",
      tradeOrders: "My orders", tradeOrdersSay: "Show my orders",
      close: "Close"
    },
    sw: {
      title: "Kazi",
      noSearch: "Siwezi kutafuta orodha za kazi za moja kwa moja, kwa hivyo sitakisia ni zipi zipo karibu nawe.",
      roles: roles => `Kazi zilizopakiwa kwenye Kyro: ${roles.join(", ")}.`,
      cv: "Tengeneza CV yangu", interview: "Fanya mazoezi ya mahojiano", letters: "Jifunze kusoma au kuhesabu",
      cvSay: "Nataka CV", interviewSay: "Nipe mazoezi ya mahojiano", lettersSay: "Nifundishe herufi",
      learnTitle: "Jifunze",
      learnLine: "Ninafundisha masomo mafupi ya mazoezi kwa sauti, hatua ndogo moja baada ya nyingine. Si kozi zenye cheti, na hakuna anayeandikishwa wala kupewa cheti.",
      learnLetters: "Jifunze herufi", learnLettersSay: "Nifundishe herufi",
      learnMaths: "Jifunze namba na kujumlisha", learnMathsSay: "Nifundishe hesabu",
      healthTitle: "Afya",
      healthLine: "Ninarekodi unachoniambia na kukusaidia kujiandaa kwa ziara ya daktari. Sifanyi uchunguzi wala kutoa ushauri wa matibabu.",
      healthSay: "Kuhifadhi kipimo, kitaje tu, kwa mfano: shinikizo langu la damu ni 120 juu ya 80.",
      healthEmergency: "Dharura ikitokea, piga namba ya dharura ya eneo lako sasa.",
      healthReadings: "Vipimo vyangu", healthReadingsSay: "Onyesha vipimo vyangu vya shinikizo la damu",
      healthClinic: "Tafuta kliniki", healthClinicSay: "Tafuta kliniki karibu nami",
      healthNumber: "Namba ya dharura", healthNumberSay: "Nambari ya dharura ni ipi?",
      farmTitle: "Shamba",
      farmLine: "Ninatunza kumbukumbu za shamba lako na kutoa mwongozo wa jumla kuhusu mazao. Sitaji dawa wala kipimo.",
      farmSay: "Kuandika kitu, kisema tu, kwa mfano: nimepata mvua milimita 12, au nimevuna kilo 50 za mahindi.",
      farmProblem: "Kwa tatizo la zao, niambie unachokiona.",
      farmMonth: "Pesa za mwezi huu", farmMonthSay: "muhtasari wa mwezi",
      tradeTitle: "Biashara",
      tradeLine: "Ninatunza ubao wa jamii ambapo unaweza kuweka unachouza, na maagizo ya wanunuzi wako. Sipokei malipo, sinunui chochote wala kupanga usafirishaji kutoka hapa.",
      tradeEnglishOnly: "Ubao wa mauzo na maagizo hufanya kazi kwa Kiingereza kwa sasa.",
      close: "Funga"
    }
  };

  function workSpec({ roles, lang } = {}) {
    const t = TEXT[lang === "sw" ? "sw" : "en"];
    const titles = Array.from(new Set((Array.isArray(roles) ? roles : []).map(role => String(typeof role === "string" ? role : (role && role.title) || "").trim()).filter(Boolean))).slice(0, 6);
    return {
      id: "work", title: t.title, closeLabel: t.close,
      lines: [t.noSearch].concat(titles.length ? [t.roles(titles)] : []),
      choices: [
        { id: "cv", label: t.cv, say: t.cvSay },
        { id: "interview", label: t.interview, say: t.interviewSay },
        { id: "letters", label: t.letters, say: t.lettersSay }
      ]
    };
  }

  // Learn: the short practice lessons Kyro really has (letters; counting, adding and taking away) and the AI basics course for a small business (English only for now).
  function learnSpec({ lang } = {}) {
    const sw = lang === "sw";
    const t = TEXT[sw ? "sw" : "en"];
    const choices = [
      { id: "letters", label: t.learnLetters, say: t.learnLettersSay },
      { id: "maths", label: t.learnMaths, say: t.learnMathsSay }
    ];
    if (!sw) choices.push({ id: "ai-basics", label: t.learnAi, say: t.learnAiSay });
    return { id: "learning", title: t.learnTitle, closeLabel: t.close, lines: [t.learnLine], choices };
  }

  // Health: what Kyro really does (records readings after a yes, shows them, prepares a summary for a provider, finds a clinic or pharmacy, says the local emergency number) and what it does not
  // (diagnose, advise on treatment). Each choice names the route that answers it: `tool` is the voice tool that holds the answer (readings and the emergency number are on the everyday route).
  function healthSpec({ lang } = {}) {
    const sw = lang === "sw";
    const t = TEXT[sw ? "sw" : "en"];
    const choices = [{ id: "readings", label: t.healthReadings, say: t.healthReadingsSay, tool: "nexus_everyday_records" }];
    if (!sw) choices.push({ id: "summary", label: t.healthSummary, say: t.healthSummarySay, tool: "nexus_health_preparation" });
    choices.push({ id: "clinic", label: t.healthClinic, say: t.healthClinicSay, tool: "nexus_health_preparation" });
    if (!sw) choices.push({ id: "pharmacy", label: t.healthPharmacy, say: t.healthPharmacySay, tool: "nexus_health_preparation" });
    choices.push({ id: "emergency-number", label: t.healthNumber, say: t.healthNumberSay, tool: "nexus_everyday_records" });
    return { id: "health", title: t.healthTitle, closeLabel: t.close, lines: [t.healthLine, t.healthSay, t.healthEmergency], choices };
  }

  // A health request that names something specific (a reading, a visit, a clinic, a symptom) has its own flow and is not answered with the general card.
  const HEALTH_SPECIFIC = /telehealth|tele-health|virtual|video visit|intake|doctor|nurse|appointment|\bvisit\b|blood[\s-]?pressure|hypertension|\bbp\b|sugar|glucose|diabetes|obesity|\brpm\b|\brtm\b|pulse|oxygen|\bweight\b|medicine|medication|pharmac|clinic|refill|symptom|\bpain\b|fever|emergency|chronic|dawa|kliniki|shinikizo|sukari|dharura|daktari/i;
  function healthIsGeneral(text) { return !HEALTH_SPECIFIC.test(String(text || "")); }

  // Farm: the records Kyro really keeps (the farm log, the rain total, the month's money) and general crop guidance that never names a spray or a dose. Said things are logged by saying them, so they
  // are lines, not buttons; the choices are the reads that answer without the AI model.
  function farmSpec({ lang } = {}) {
    const sw = lang === "sw";
    const t = TEXT[sw ? "sw" : "en"];
    const choices = sw
      ? [{ id: "month", label: t.farmMonth, say: t.farmMonthSay, tool: "nexus_everyday_records" }]
      : [{ id: "log", label: t.farmLog, say: t.farmLogSay, tool: "nexus_everyday_records" },
         { id: "rain", label: t.farmRain, say: t.farmRainSay, tool: "nexus_everyday_records" },
         { id: "month", label: t.farmMonth, say: t.farmMonthSay, tool: "nexus_everyday_records" }];
    return { id: "agriculture", title: t.farmTitle, closeLabel: t.close, lines: [t.farmLine, t.farmSay, t.farmProblem], choices };
  }

  // A farm request that names something specific (a crop problem, a price, the weather, a thing to log, a sale, a drone) has its own flow and is not answered with the general card.
  const FARM_SPECIFIC = /leaf|leaves|spot|yellow|wilt|blight|rot\b|mould|mold|pest|disease|insect|worm|caterpillar|aphid|locust|armyworm|drone|scan|price|market|sell|\bsold\b|\bsale\b|\bbuy|weather|forecast|\brain|storm|harvest|plant(ed|ing)?\b|sow|\blog\b|record|water|irrigat|soil|fertili[sz]|manure|tank|egg|milk|\bcow|goat|chicken|sheep|loan|budget|expense|income|\bpaid\b|\bowe|mvua|mavuno|mbolea|shamba la|ugonjwa|wadudu/i;
  function farmIsGeneral(text) { return !FARM_SPECIFIC.test(String(text || "")); }

  // Trade: the community board and the buyer orders Kyro really keeps; no payments, purchases or delivery. The board and the orders answer in English today, so the Kiswahili card says so and has no choices.
  function tradeSpec({ lang } = {}) {
    const sw = lang === "sw";
    const t = TEXT[sw ? "sw" : "en"];
    if (sw) return { id: "trade", title: t.tradeTitle, closeLabel: t.close, lines: [t.tradeLine, t.tradeEnglishOnly], choices: [] };
    return { id: "trade", title: t.tradeTitle, closeLabel: t.close, lines: [t.tradeLine, t.tradeSell, t.tradeOrder], choices: [
      { id: "board", label: t.tradeBoard, say: t.tradeBoardSay, tool: "nexus_everyday_records" },
      { id: "listings", label: t.tradeListings, say: t.tradeListingsSay, tool: "nexus_everyday_records" },
      { id: "orders", label: t.tradeOrders, say: t.tradeOrdersSay, tool: "nexus_everyday_records" }
    ] };
  }

  // A trade request that names something specific (selling or buying something, a price, a shipment, a payment, an order, a crop and an amount) is a real flow of its own and is not answered with the general card.
  const TRADE_SPECIFIC = /sell|\bsold\b|\bbuy|purchase|price|\bship|deliver|track|route|invoice|\bpay|payment|wallet|escrow|checkout|\bpost\b|listing|\border|\bkg\b|\bbags?\b|\btons?\b|maize|coffee|cassava|rice|beans|wheat|tomato|kuuza|nunua|bei|mahindi/i;
  function tradeIsGeneral(text) { return !TRADE_SPECIFIC.test(String(text || "")); }

  // The card for a workspace that has one (null when it does not: the usual window opens).
  function specFor(workspace, options) {
    if (workspace === "workforce") return workSpec(options);
    if (workspace === "learning") return learnSpec(options);
    if (workspace === "health") return healthSpec(options);
    if (workspace === "agriculture") return farmSpec(options);
    if (workspace === "trade") return tradeSpec(options);
    return null;
  }

  // Whether a request to open a workspace is general enough for its card (true for workspaces whose card is always right, false-able for health, farm and trade, which have specific flows of their own).
  function isGeneralFor(workspace, text) {
    if (workspace === "health") return healthIsGeneral(text);
    if (workspace === "agriculture") return farmIsGeneral(text);
    if (workspace === "trade") return tradeIsGeneral(text);
    return true;
  }

  return Object.freeze({ workSpec, learnSpec, healthSpec, healthIsGeneral, farmSpec, farmIsGeneral, tradeSpec, tradeIsGeneral, isGeneralFor, specFor, TEXT });
});
