(function (root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  else root.KyroEmergency = api;
})(typeof window !== "undefined" ? window : globalThis, function () {
  "use strict";

  // The phone's half of emergency location sharing. When a person asks Kyro for urgent help, the server alerts their circle at once (it never waits for
  // a location). If someone in the circle has been chosen to receive their location, the server says so in the reply (`plan.emergency.shareLocation`),
  // and only then does this ask the phone where it is, send that to the server, and keep it updated every couple of minutes for a while.
  //
  // Nothing here reads the location unless the server said so: a person who never turned emergency location on is never asked for it, and nothing is
  // sent for any message that is not an emergency alert. It stops when the person says they are safe, when the server says the emergency is closed, after
  // half an hour, or after a few failures. The page has to stay open for updates to continue: a browser cannot send them once the page is closed.

  // First position: as fast as possible. A recent cached one is fine; if the precise one is slow, a rough one (from the network) is better than none.
  const FIRST_ATTEMPTS = [{ enableHighAccuracy: true, timeout: 8000, maximumAge: 30000 }, { enableHighAccuracy: false, timeout: 8000, maximumAge: 300000 }];
  const UPDATE_ATTEMPTS = [{ enableHighAccuracy: true, timeout: 10000, maximumAge: 30000 }, { enableHighAccuracy: false, timeout: 8000, maximumAge: 120000 }];
  const EVERY_MS = 2 * 60 * 1000; const RETRY_MS = 20 * 1000; const MAX_MS = 30 * 60 * 1000; const MAX_FAILURES = 4;
  const CLOSED = /closed|no open emergency|no longer/i;

  // What the phone says, in the language the alert was raised in (English or Kiswahili; the Swahili is a first draft that needs a fluent speaker to review it).
  const TEXT = {
    en: { sent: "I've sent your location to {names}, and I'll keep it updated. Say \"I'm safe\" when you are.", warned: "I couldn't get your location yet. Your circle has still been alerted. I'll keep trying.", failed: "I couldn't get your location. Your circle was alerted without it, so please tell them where you are.", notSent: "I couldn't send your location. Your circle was alerted without it, so please tell them where you are." },
    sw: { sent: "Nimetuma eneo lako kwa {names}, na nitaendelea kulisasisha. Sema \"niko salama\" ukiwa salama.", warned: "Bado sijapata eneo lako. Mzunguko wako umeshapewa tahadhari. Nitaendelea kujaribu.", failed: "Sikuweza kupata eneo lako. Mzunguko wako ulipewa tahadhari bila eneo, kwa hivyo tafadhali wajulishe ulipo.", notSent: "Sikuweza kutuma eneo lako. Mzunguko wako ulipewa tahadhari bila eneo, kwa hivyo tafadhali wajulishe ulipo." },
    ha: { sent: "Na aika wurin da kake ga {names}, kuma zan ci gaba da sabunta shi. Ka ce \"Ina lafiya\" idan ka samu lafiya.", warned: "Ban samu wurin da kake ba tukuna. Duk da haka an sanar da mutanenka. Zan ci gaba da ƙoƙari.", failed: "Ban samu wurin da kake ba. An sanar da mutanenka ba tare da shi ba, don haka don Allah ka faɗa musu inda kake.", notSent: "Ban iya aika wurin da kake ba. An sanar da mutanenka ba tare da shi ba, don haka don Allah ka faɗa musu inda kake." },
    am: { sent: "ያሉበትን ቦታ ለ{names} ልኬያለሁ፤ እያዘመንኩም እቀጥላለሁ። ደህና ሲሆኑ \"ደህና ነኝ\" ይበሉ።", warned: "እስካሁን ያሉበትን ቦታ ማግኘት አልቻልኩም። ቢሆንም ሰዎችዎ ተነግሯቸዋል። መሞከሬን እቀጥላለሁ።", failed: "ያሉበትን ቦታ ማግኘት አልቻልኩም። ሰዎችዎ ያለ ቦታው ተነግሯቸዋል፤ ስለዚህ እባክዎ የት እንዳሉ ይንገሯቸው።", notSent: "ያሉበትን ቦታ መላክ አልቻልኩም። ሰዎችዎ ያለ ቦታው ተነግሯቸዋል፤ ስለዚህ እባክዎ የት እንዳሉ ይንገሯቸው።" },
    yo: { sent: "Mo ti fi ibi tí o wà ránṣẹ́ sí {names}, màá sì máa ṣe àtúnṣe rẹ̀. Sọ pé \"Mo wà láìléwu\" nígbà tí o bá wà láìléwu.", warned: "N kò tíì rí ibi tí o wà. Síbẹ̀, a ti kìlọ̀ fún àwọn ènìyàn rẹ. Màá máa gbìyànjú.", failed: "N kò rí ibi tí o wà. A ti kìlọ̀ fún àwọn ènìyàn rẹ láìsí i, nítorí náà jọ̀wọ́ sọ ibi tí o wà fún wọn.", notSent: "N kò lè fi ibi tí o wà ránṣẹ́. A ti kìlọ̀ fún àwọn ènìyàn rẹ láìsí i, nítorí náà jọ̀wọ́ sọ ibi tí o wà fún wọn." },
    ig: { sent: "Ezigala m ebe ị nọ nye {names}, m ga-anọgide na-emelite ya. Kwuo \"Adị m mma\" mgbe ị nọ n'udo.", warned: "Achọtabeghị m ebe ị nọ. N'agbanyeghị nke ahụ, agwala ndị gị. M ga-anọgide na-agbalị.", failed: "Achọtaghị m ebe ị nọ. Agwala ndị gị n'enweghị ya, ya mere biko gwa ha ebe ị nọ.", notSent: "Enweghị m ike iziga ebe ị nọ. Agwala ndị gị n'enweghị ya, ya mere biko gwa ha ebe ị nọ." }
  };
  const words = (language, key, params = {}) => String((TEXT[language] || TEXT.en)[key]).replace(/\{(\w+)\}/g, (whole, name) => (params[name] === undefined ? whole : String(params[name])));

  function createEmergencySharer({ geolocation, api, say = () => {}, setTimer = setTimeout, clearTimer = clearTimeout, now = () => Date.now() } = {}) {
    let running = null; // { alertId, startedAt, timer, failures, updates, told, warned }

    const locate = attempts => new Promise(resolve => {
      let index = 0;
      const next = () => {
        if (index >= attempts.length || !geolocation?.getCurrentPosition) return resolve(null);
        const options = attempts[index]; index += 1;
        try {
          geolocation.getCurrentPosition(position => resolve({ lat: position.coords.latitude, lng: position.coords.longitude, accuracy: position.coords.accuracy, ageSeconds: Number.isFinite(position.timestamp) ? Math.max(0, Math.round((now() - position.timestamp) / 1000)) : 0 }), next, options);
        } catch { next(); }
      };
      next();
    });

    function stop() { if (running) { clearTimer(running.timer); running = null; } }
    function schedule(run, ms) { if (running === run) run.timer = setTimer(() => tick(run), ms); }

    async function tick(run) {
      if (running !== run) return;
      if (now() - run.startedAt > MAX_MS) { stop(); return; }
      const position = await locate(run.updates === 0 ? FIRST_ATTEMPTS : UPDATE_ATTEMPTS);
      if (running !== run) return;
      const fail = message => {
        run.failures += 1;
        if (run.failures >= MAX_FAILURES) { say(message || words(run.language, "notSent"), { interrupt: false }); stop(); return; }
        if (!run.warned) { run.warned = true; say(words(run.language, "warned"), { interrupt: false }); }
        schedule(run, RETRY_MS);
      };
      if (!position) { fail(words(run.language, "failed")); return; }
      let result;
      try { result = await api({ alertId: run.alertId, position }); }
      catch (error) { if (error?.ended || CLOSED.test(String(error?.message || ""))) { stop(); return; } fail(); return; }
      if (running !== run) return;
      run.failures = 0;
      if (result?.shared?.length) { run.updates += 1; if (!run.told) { run.told = true; say(words(run.language, "sent", { names: result.shared.join(", ") }), { interrupt: false }); } }
      else if (result?.throttled) { /* the server just sent one; the next one is on the normal schedule */ }
      if (result?.done) { stop(); return; }
      schedule(run, EVERY_MS);
    }

    return {
      get running() { return Boolean(running); },
      // What the server said about this turn: { alertId, shareLocation } for an alert, { ended: true } once the person says they are safe.
      handle(emergency) {
        if (!emergency) return;
        if (emergency.ended) { stop(); return; }
        if (!emergency.shareLocation || !emergency.alertId) return;
        if (running && running.alertId === emergency.alertId) return;
        stop();
        running = { alertId: emergency.alertId, startedAt: now(), timer: null, failures: 0, updates: 0, told: false, warned: false, language: ((code) => (["sw", "ha", "am", "yo", "ig"].includes(code) ? code : "en"))(String(emergency.language || "").trim().toLowerCase().split(/[-_]/)[0]) };
        tick(running);
      },
      stop
    };
  }

  // The browser wiring: the real location and spoken confirmation.
  function forBrowser({ api, locale = "en", speechLang = "" } = {}) {
    const say = (text, { interrupt = false } = {}) => {
      try {
        const synth = typeof speechSynthesis !== "undefined" ? speechSynthesis : null; if (!synth || typeof SpeechSynthesisUtterance === "undefined") return;
        if (interrupt) synth.cancel();
        const utterance = new SpeechSynthesisUtterance(text); utterance.lang = speechLang || locale; synth.speak(utterance);
      } catch { /* silence is fine; the alert already went */ }
    };
    return createEmergencySharer({ geolocation: globalThis.navigator?.geolocation, api, say });
  }

  return Object.freeze({ createEmergencySharer, forBrowser, EVERY_MS, MAX_MS });
});
