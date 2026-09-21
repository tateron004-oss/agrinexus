(function (root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  else root.KyroNavigation = api;
})(typeof window !== "undefined" ? window : globalThis, function () {
  "use strict";

  // Kyro as a GPS. "Where am I", "save this place as home", "take me to Kibera Clinic": the phone's own location, a route from the directions service,
  // and spoken turn-by-turn guidance that follows the person along it, reroutes if they leave it, and says when they have arrived.
  //
  // Privacy: the position is read only when the person asks, and only while guiding. It is sent to the directions service to plan a route and is not
  // kept by Kyro. Saved places live on this phone only. A browser cannot guide with the screen off, so the screen is kept awake while guiding.
  //
  // Everything here is plain code with the phone's location, speech, storage and the server passed in, so it runs the same in the browser and in tests.

  // ---------- plus codes (Open Location Code): a short code for any spot on earth, worked out on the phone with no signal ----------
  // Where there are no street addresses, "6GCRPR6C+X9" is something a person can read out so that anyone can find them (about 14 metres).
  const ALPHABET = "23456789CFGHJMPQRVWX";
  const PAIR_RESOLUTIONS = [20, 1, 0.05, 0.0025, 0.000125];

  function encodePlusCode(latitude, longitude, length = 10) {
    if (!Number.isFinite(latitude) || !Number.isFinite(longitude)) return "";
    const len = length > 10 ? 11 : 10;
    let lat = Math.min(90, Math.max(-90, latitude)); let lng = ((longitude + 180) % 360 + 360) % 360 - 180;
    if (lat === 90) lat -= 0.000125 / (len > 10 ? 5 : 1);
    let latVal = Math.floor(Math.round((lat + 90) * 25000000 * 1e6) / 1e6); let lngVal = Math.floor(Math.round((lng + 180) * 8192000 * 1e6) / 1e6);
    let code = "";
    if (len > 10) {
      for (let i = 0; i < 5; i += 1) { code = ALPHABET.charAt((latVal % 5) * 4 + (lngVal % 4)) + code; latVal = Math.floor(latVal / 5); lngVal = Math.floor(lngVal / 4); }
    } else { latVal = Math.floor(latVal / 3125); lngVal = Math.floor(lngVal / 1024); }
    for (let i = 0; i < 5; i += 1) { code = ALPHABET.charAt(lngVal % 20) + code; code = ALPHABET.charAt(latVal % 20) + code; latVal = Math.floor(latVal / 20); lngVal = Math.floor(lngVal / 20); }
    code = `${code.slice(0, 8)}+${code.slice(8)}`;
    return len > 10 ? code.slice(0, 12) : code.slice(0, 11);
  }

  // A full code (8 characters, "+", at least 2 more) -> its centre, or null.
  function decodePlusCode(input) {
    const code = String(input || "").trim().toUpperCase();
    if (!/^[23456789CFGHJMPQRVWX]{8}\+[23456789CFGHJMPQRVWX]{2,7}$/.test(code)) return null;
    const digits = code.replace("+", ""); let lat = -90; let lng = -180; let latSize = 0.000125; let lngSize = 0.000125;
    for (let i = 0; i < Math.min(10, digits.length); i += 2) { const r = PAIR_RESOLUTIONS[i / 2]; lat += ALPHABET.indexOf(digits[i]) * r; lng += ALPHABET.indexOf(digits[i + 1]) * r; }
    for (let i = 10; i < digits.length; i += 1) { latSize /= 5; lngSize /= 4; const index = ALPHABET.indexOf(digits[i]); lat += Math.floor(index / 4) * latSize; lng += (index % 4) * lngSize; }
    if (digits.length < 10) { latSize = PAIR_RESOLUTIONS[Math.floor(digits.length / 2) - 1]; lngSize = latSize; }
    const lat0 = lat; const lng0 = lng;
    if (lat0 > 90 || lng0 > 180) return null;
    return { lat: lat0 + latSize / 2, lng: lng0 + lngSize / 2 };
  }

  // ---------- distances and the line a route follows ----------
  const EARTH = 6371000; const rad = value => (value * Math.PI) / 180;
  function distanceBetween(a, b) { // { lat, lng } each
    const dLat = rad(b.lat - a.lat); const dLng = rad(b.lng - a.lng);
    const h = Math.sin(dLat / 2) ** 2 + Math.cos(rad(a.lat)) * Math.cos(rad(b.lat)) * Math.sin(dLng / 2) ** 2;
    return 2 * EARTH * Math.asin(Math.min(1, Math.sqrt(h)));
  }
  // ---------- the words, in English and Kiswahili ----------
  // English is the fallback. The Swahili is a first draft that needs a fluent speaker to review it (see nexus/i18n/sw.js). The server words each
  // turn ("Turn left onto ..."); these are the phone's own sentences around them.
  const TEXT = {
    en: {
      fewMeters: "a few meters", meters: "{n} meters", kilometer: "{n} kilometer", kilometers: "{n} kilometers",
      lessThanMinute: "less than a minute", minute: "{n} minute", minutes: "{n} minutes", hour: "{n} hour", hours: "{n} hours", hoursMinutes: "{h} and {m} minutes", hourMinutes: "{h} {m} minutes",
      about: "{distance}, about {duration}", now: "Now, {words}.", inDistance: "In {distance}, {words}.", arrived: "You have arrived.", willArrive: "you will arrive",
      denied: "I can't see your location. Allow location for this site in your browser settings, then ask again.",
      slow: "I couldn't get your location in time. Go somewhere with a clearer view of the sky and try again.",
      unknown: "I couldn't work out where you are. Check that location is switched on for your phone, then try again.",
      near: "You are near {place}. ",
      where: "{near}Your position is {lat} {ns}, {lng} {ew}, to within about {m} meters. Your plus code is {code}. Read it to anyone and they can find you. Say \"save this place as home\" to keep it.",
      north: "N", south: "S", east: "E", west: "W",
      nameIt: "What should I call this place?",
      fullPlaces: "You have fifty saved places already. Forget one first, like \"forget place market\".",
      noStorage: "I couldn't save that on this phone. Its storage may be full or switched off.",
      saved: "Saved this place as {key}. It stays on this phone only. Say \"take me {go}\" whenever you need the way.",
      goHome: "home", goTo: "to {key}",
      placesList: "You have {n} saved {word}: {names}.", placeWord: "place", placesWord: "places",
      noPlaces: "You have no saved places. Stand at a place and say \"save this place as home\".",
      noSuchPlace: "I don't have a place called {key}.", forgot: "Forgot {key}.",
      stopped: "Navigation stopped.", notGuiding: "I'm not guiding you anywhere right now.",
      off: "You are off the route. Finding a new way.", newRoute: "New route, {about}.",
      noConnection: "I can't plan a new route without a connection. Head back toward the route and I'll pick it up again.",
      askWhere: "Where would you like to go? Say \"take me to\" and a place, or \"take me home\" once you have saved home.",
      noHome: "I don't know where home is yet. Stand at home and say \"save this place as home\".",
      routeFailed: "I couldn't plan a route. Check your connection and try again.",
      walking: "Walking", taking: "Taking", destination: "your destination",
      start: "{verb} you to {label}: {about}. {first} Keep your screen on, because a browser can't guide with the screen off. {disclosure}Say \"stop navigation\" to end.",
      disclosure: "I use your phone's location only while guiding you and send it to a directions service to find the way; I don't keep it. ",
      toGo: "{distance} to go, about {duration}.",
      panelStop: "Stop navigation", panelNext: "In {distance}: {instruction}", panelTo: "To {destination}. ", panelRemaining: "{remaining} to go."
    },
    sw: {
      fewMeters: "mita chache", meters: "mita {n}", kilometer: "kilomita {n}", kilometers: "kilomita {n}",
      lessThanMinute: "chini ya dakika moja", minute: "dakika {n}", minutes: "dakika {n}", hour: "saa {n}", hours: "saa {n}", hoursMinutes: "saa {h} na dakika {m}", hourMinutes: "saa {h} na dakika {m}",
      about: "{distance}, takriban {duration}", now: "Sasa, {words}.", inDistance: "Baada ya {distance}, {words}.", arrived: "Umefika.", willArrive: "utafika",
      denied: "Siwezi kuona eneo lako. Ruhusu eneo kwa tovuti hii kwenye mipangilio ya kivinjari chako, kisha uniulize tena.",
      slow: "Sikuweza kupata eneo lako kwa wakati. Nenda mahali penye anga wazi zaidi kisha ujaribu tena.",
      unknown: "Sikuweza kujua uko wapi. Hakikisha eneo (GPS) limewashwa kwenye simu yako, kisha ujaribu tena.",
      near: "Uko karibu na {place}. ",
      where: "{near}Nafasi yako ni {lat} {ns}, {lng} {ew}, kwa usahihi wa takriban mita {m}. Msimbo wako wa eneo (plus code) ni {code}. Umsomee mtu yeyote na anaweza kukupata. Sema \"hifadhi mahali hapa kama nyumbani\" ili kuuhifadhi.",
      north: "kaskazini", south: "kusini", east: "mashariki", west: "magharibi",
      nameIt: "Nitaite mahali hapa kwa jina gani?",
      fullPlaces: "Tayari una mahali hamsini ulipohifadhi. Sahau pamoja kwanza, kwa mfano \"sahau mahali soko\".",
      noStorage: "Sikuweza kuhifadhi hilo kwenye simu hii. Huenda hifadhi yake imejaa au imezimwa.",
      saved: "Nimehifadhi mahali hapa kama {key}. Panabaki kwenye simu hii tu. Sema \"{go}\" wakati wowote unapohitaji njia.",
      goHome: "nipeleke nyumbani", goTo: "nipeleke {key}",
      placesList: "Una {word} {n} ulipohifadhi: {names}.", placeWord: "mahali", placesWord: "mahali",
      noPlaces: "Huna mahali ulipohifadhi. Simama mahali na useme \"hifadhi mahali hapa kama nyumbani\".",
      noSuchPlace: "Sina mahali paitwapo {key}.", forgot: "Nimefuta {key}.",
      stopped: "Uelekezaji umesimamishwa.", notGuiding: "Sikuelekezi popote kwa sasa.",
      off: "Umetoka kwenye njia. Natafuta njia mpya.", newRoute: "Njia mpya, {about}.",
      noConnection: "Siwezi kupanga njia mpya bila mtandao. Rudi kuelekea njia na nitaendelea tena.",
      askWhere: "Ungependa kwenda wapi? Sema \"nipeleke\" na jina la mahali, au \"nipeleke nyumbani\" ukishahifadhi nyumbani.",
      noHome: "Bado sijui nyumbani ni wapi. Simama nyumbani na useme \"hifadhi mahali hapa kama nyumbani\".",
      routeFailed: "Sikuweza kupanga njia. Angalia mtandao wako kisha ujaribu tena.",
      walking: "Ninakutembeza hadi", taking: "Ninakupeleka hadi", destination: "unakoenda",
      start: "{verb} {label}: {about}. {first} Weka skrini iwake, kwa sababu kivinjari hakiwezi kuelekeza skrini ikiwa imezimwa. {disclosure}Sema \"acha uelekezaji\" kumaliza.",
      disclosure: "Ninatumia eneo la simu yako wakati wa kukuelekeza tu, na ninalituma kwa huduma ya maelekezo ili kupata njia; silihifadhi. ",
      toGo: "Umebaki {distance}, takriban {duration}.",
      panelStop: "Acha uelekezaji", panelNext: "Baada ya {distance}: {instruction}", panelTo: "Kwenda {destination}. ", panelRemaining: "Umebaki {remaining}."
    }
  };
  const languageOf = value => (/^sw/i.test(String(value || "")) ? "sw" : "en");
  const tx = (language, key, params = {}) => String(TEXT[language]?.[key] ?? TEXT.en[key]).replace(/\{(\w+)\}/g, (whole, name) => (params[name] === undefined ? whole : String(params[name])));

  function sayDistance(meters, language = "en") {
    const m = Math.max(0, Number(meters) || 0);
    if (m < 20) return tx(language, "fewMeters");
    if (m < 100) return tx(language, "meters", { n: Math.round(m / 10) * 10 });
    if (m < 1000) return tx(language, "meters", { n: Math.round(m / 50) * 50 });
    const km = m / 1000; return tx(language, km < 1.05 ? "kilometer" : "kilometers", { n: km < 10 ? Math.round(km * 10) / 10 : Math.round(km) });
  }
  function sayDuration(seconds, language = "en") {
    const minutes = Math.round((Number(seconds) || 0) / 60);
    if (minutes < 1) return tx(language, "lessThanMinute");
    if (minutes < 60) return tx(language, minutes === 1 ? "minute" : "minutes", { n: minutes });
    const hours = Math.floor(minutes / 60); const rest = minutes % 60; const hourWord = tx(language, hours === 1 ? "hour" : "hours", { n: hours });
    return rest ? (language === "sw" ? tx(language, "hoursMinutes", { h: hours, m: rest }) : `${hourWord} ${rest} minutes`) : hourWord;
  }
  const lowerFirst = text => `${text.charAt(0).toLowerCase()}${text.slice(1)}`;
  const about = (meters, seconds, language) => tx(language, "about", { distance: sayDistance(meters, language), duration: sayDuration(seconds, language) });

  // Follows one route: given a position, where along it the person is, how far off it, what is next, and what to say.
  function createRouteFollower(route, { mode = "drive", language = "en" } = {}) {
    const g = route.geometry; const cum = [0];
    for (let i = 1; i < g.length; i += 1) cum.push(cum[i - 1] + distanceBetween({ lat: g[i - 1][1], lng: g[i - 1][0] }, { lat: g[i][1], lng: g[i][0] }));
    const total = cum[cum.length - 1];
    const walking = mode === "walk"; const thresholds = walking ? [150, 60, 20] : [500, 200, 60]; const arriveWithin = walking ? 15 : 30;
    const announced = new Set(); let lastSegment = 0; let offCount = 0; let arrived = false; let started = false;

    function project(position) {
      const test = i => {
        const a = { lat: g[i][1], lng: g[i][0] }; const b = { lat: g[i + 1][1], lng: g[i + 1][0] };
        const scaleX = Math.cos(rad(a.lat)) * 111320; const ax = 0; const ay = 0; const bx = (b.lng - a.lng) * scaleX; const by = (b.lat - a.lat) * 110540;
        const px = (position.lng - a.lng) * scaleX; const py = (position.lat - a.lat) * 110540; const len2 = bx * bx + by * by;
        const t = len2 ? Math.min(1, Math.max(0, ((px - ax) * bx + (py - ay) * by) / len2)) : 0;
        return { seg: i, cross: Math.hypot(px - t * bx, py - t * by), along: cum[i] + t * Math.sqrt(len2) };
      };
      let best = null;
      // near where the person last was first (a route can loop back past itself), and everywhere only if that finds nothing close
      for (let i = Math.max(0, lastSegment - 5); i <= Math.min(g.length - 2, lastSegment + 400); i += 1) { const r = test(i); if (!best || r.cross < best.cross) best = r; }
      if (!best || best.cross > 150) for (let i = 0; i <= g.length - 2; i += 1) { const r = test(i); if (!best || r.cross < best.cross - 20) best = r; }
      return best;
    }

    const upcoming = along => route.steps.findIndex((step, index) => index > 0 && step.alongMeters > along + 5 && !/^exit (?:roundabout|rotary)$/.test(step.type));
    const startLine = () => `${route.steps[0].instruction}.`;

    return {
      get total() { return total; },
      // -> { along, cross, remainingMeters, remainingSeconds, next: { instruction, distanceMeters }, say: [{ text, urgent }], offRoute, arrived }
      update(fix) {
        const say = [];
        if (!started) { started = true; say.push({ text: startLine(), urgent: false }); }
        const at = project(fix); lastSegment = at.seg;
        const remaining = Math.max(0, total - at.along); const index = upcoming(at.along); const step = index >= 0 ? route.steps[index] : route.steps[route.steps.length - 1];
        const toNext = Math.max(0, step.alongMeters - at.along);
        const accuracy = Number.isFinite(fix.accuracy) ? fix.accuracy : 20;
        if (!arrived && (remaining <= arriveWithin || (index < 0 && toNext <= arriveWithin)) && at.cross <= Math.max(60, accuracy * 1.5)) { arrived = true; say.push({ text: tx(language, "arrived"), urgent: true }); }
        if (!arrived && index >= 0) {
          const due = thresholds.filter(limit => toNext <= limit && !announced.has(`${index}:${limit}`));
          if (due.length) {
            const smallest = Math.min(...due); for (const limit of due) announced.add(`${index}:${limit}`);
            const last = smallest === thresholds[thresholds.length - 1]; const arriving = step.type === "arrive";
            // The end of the route is announced ahead ("you will arrive"), and its last warning is left to the arrival itself ("You have arrived.").
            const words = arriving ? lowerFirst(step.instruction).replace(/^(?:you have arrived|umefika)/, tx(language, "willArrive")) : lowerFirst(step.instruction);
            if (!(arriving && last)) say.push({ text: last && toNext <= smallest ? tx(language, "now", { words }) : tx(language, "inDistance", { distance: sayDistance(toNext, language), words }), urgent: last });
          }
        }
        // Off the route only when the fix is trustworthy and the person stays away for a few readings in a row.
        if (accuracy <= 120 && !arrived) { const allowed = Math.max(40, Math.min(accuracy * 1.5, 120)); offCount = at.cross > allowed ? offCount + 1 : 0; }
        return { along: at.along, cross: at.cross, remainingMeters: remaining, remainingSeconds: route.durationSeconds ? Math.round(route.durationSeconds * (remaining / (total || 1))) : 0,
          next: { instruction: step.instruction, distanceMeters: toNext }, say, offRoute: offCount >= 3, arrived };
      },
      resetOffRoute() { offCount = 0; }
    };
  }

  // ---------- what the person says ----------
  const NOT_A_PLACE = /^(?:the |my )?(?:settings?|dashboard|home ?page|main ?menu|menu|profile|account|farm|health|learning|marketplace|chat|kyro|app|screen|page|section|tab|orb|voice|next (?:step|page|screen)|top|start|beginning)$/i;
  const NOT_A_PLACE_SW = /^(?:mipangilio|dashibodi|ukurasa(?: wa mwanzo)?|menyu|programu|skrini|kurasa|hatua inayofuata|mwanzo)$/i;
  const WALK_WORDS = /\b(?:walk(?:ing)?|on foot|by foot)\b/gi;
  const WALK_WORDS_SW = /\b(?:kwa miguu)\b/gi;

  // Kiswahili commands. -> the same shapes as English, with language: "sw", or null.
  function parseCommandSw(t) {
    let m;
    if (/^(?:niko wapi|tuko wapi|eneo langu|nafasi yangu|onyesha eneo langu|nionyeshe eneo langu|msimbo wangu wa eneo)$/i.test(t)) return { type: "where", language: "sw" };
    if ((m = /^(?:hifadhi|weka|kumbuka) (?:mahali hapa|hapa|eneo hili|eneo langu la sasa)(?: kama| iitwe| liitwe)\s+(?:kwangu |langu )?(.{1,40})$/i.exec(t))) return { type: "save", name: m[1], language: "sw" };
    if (/^(?:onyesha|orodhesha|nionyeshe) (?:mahali|maeneo)(?: (?:nilipohifadhi|nilivyohifadhi|yangu))?$/i.test(t) || /^ni mahali gani nimehifadhi$/i.test(t)) return { type: "places", language: "sw" };
    if ((m = /^(?:sahau|futa|ondoa) (?:mahali|eneo) (?:paitwapo |liitwalo )?(.{1,40})$/i.exec(t))) return { type: "forget", name: m[1], language: "sw" };
    if (/^(?:acha|maliza|simamisha|ghairi) (?:uelekezaji|maelekezo|kuelekeza|safari)$/i.test(t)) return { type: "stop", language: "sw" };
    if (/^(?:rudia(?: hiyo)?|sema tena|kinachofuata ni nini|geuka inayofuata)$/i.test(t)) return { type: "repeat", language: "sw" };
    if (/^(?:umbali gani|bado kiasi gani|nitafika lini|nimebakiza kiasi gani|muda gani umebaki)$/i.test(t)) return { type: "status", language: "sw" };
    if ((m = /^(?:tafadhali )?(nipeleke|nielekeze|nitembeze|nifikishe|nionyeshe njia)\b\s*(.*)$/i.exec(t))) {
      let rest = m[2]; const mode = /^nitembeze/i.test(m[1]) || WALK_WORDS_SW.test(rest) ? "walk" : "drive"; WALK_WORDS_SW.lastIndex = 0;
      rest = rest.replace(WALK_WORDS_SW, " ").replace(/\s+/g, " ").trim().replace(/^(?:hadi|kwenda|mpaka|kuelekea|kwa|kule|pale|kwenye)\s+/i, "").trim();
      if (/\bkutoka\b/i.test(rest)) return null; // "kutoka A kwenda B" is a route between two named places, handled elsewhere
      if (!rest) return { type: "go", destination: "", mode, language: "sw" };
      if (NOT_A_PLACE_SW.test(rest)) return null;
      return { type: "go", destination: /^nyumbani$/i.test(rest) ? "home" : rest, mode, language: "sw" };
    }
    return null;
  }

  // -> { type: "where" | "save" | "places" | "forget" | "go" | "stop" | "repeat" | "status", ... } or null when the words are not about the GPS.
  function parseCommand(input) {
    const t = String(input || "").replace(/\s+/g, " ").replace(/[.!?]+$/g, "").trim();
    if (!t || t.length > 140) return null;
    let m;
    if (/^(?:where am i|where are we|what(?:'s| is) my (?:current )?(?:location|position)|my location|show (?:me )?my (?:location|position)|what(?:'s| is) my plus code|my plus code)$/i.test(t)) return { type: "where" };
    if ((m = /^(?:save|remember|mark|store) (?:this|here|my (?:current )?location|this (?:place|location|spot))(?: (?:place|location|spot))?(?: as| called| named)\s+(?:my |the )?(.{1,40})$/i.exec(t))) return { type: "save", name: m[1] };
    if (/^(?:show|list|read) (?:me )?(?:my )?(?:saved )?places$/i.test(t) || /^what places have i saved$/i.test(t)) return { type: "places" };
    if ((m = /^(?:forget|delete|remove) (?:my )?(?:saved )?place (?:called |named )?(?:my |the )?(.{1,40})$/i.exec(t))) return { type: "forget", name: m[1] };
    if (/^(?:stop|end|cancel|exit|quit)(?: the)?(?: navigation| navigating| directions| guidance| route)$/i.test(t) || /^stop navigating$/i.test(t)) return { type: "stop" };
    if (/^(?:repeat(?: that)?|say (?:that )?again|what(?:'s| is) (?:the )?next(?: turn| instruction| direction)?|next turn)$/i.test(t)) return { type: "repeat" };
    if (/^(?:how (?:far|long)(?: is it)?(?: to go)?|how much (?:longer|further)|when (?:will|do) i arrive|what(?:'s| is) my eta|eta)$/i.test(t)) return { type: "status" };
    if ((m = /^(?:please )?(navigate|take me|drive me|guide me|walk me|lead me|directions|give me directions|show me the way)\b\s*(.*)$/i.exec(t))) {
      let rest = m[2]; const mode = WALK_WORDS.test(`${m[1]} ${rest}`) || /^walk me/i.test(m[1]) ? "walk" : "drive"; WALK_WORDS.lastIndex = 0;
      rest = rest.replace(WALK_WORDS, " ").replace(/\s+/g, " ").trim().replace(/^(?:to|towards|toward|me to|for|back to|back)\s+/i, "").replace(/^(?:the )?/, match => match).trim();
      if (/\bfrom\b/i.test(rest)) return null; // "directions from A to B" is a route between two named places, handled elsewhere
      if (!rest) return { type: "go", destination: "", mode };
      if (NOT_A_PLACE.test(rest)) return null;
      return { type: "go", destination: rest, mode };
    }
    return parseCommandSw(t);
  }

  // ---------- saved places (on this phone only) ----------
  const PLACES_KEY = "kyro.places.v1"; const MAX_PLACES = 50;
  // "home" and "nyumbani" are the same place, whichever language it was saved or asked for in.
  const placeKey = name => { const key = String(name || "").toLowerCase().replace(/^(?:my|the|kwangu|langu)\s+/, "").replace(/\s+/g, " ").trim().slice(0, 40); return key === "nyumbani" || key === "nyumbani kwangu" ? "home" : key; };
  const placeName = (key, language) => (key === "home" && language === "sw" ? "nyumbani" : key);
  function readPlaces(storage) {
    try { const parsed = JSON.parse(storage?.getItem(PLACES_KEY) || "[]"); return Array.isArray(parsed) ? parsed.filter(item => item && typeof item.name === "string" && Number.isFinite(item.lat) && Number.isFinite(item.lng)) : []; } catch { return []; }
  }
  function writePlaces(list, storage) { try { storage?.setItem(PLACES_KEY, JSON.stringify(list)); return true; } catch { return false; } }

  // ---------- the navigator: the phone's location + the server + speech, glued together ----------
  const DISCLOSED_KEY = "kyro.nav.disclosed";
  const locationProblem = (error, language) => tx(language, error?.code === 1 ? "denied" : error?.code === 3 ? "slow" : "unknown");

  // `language` is the app's language ("en" or "sw"); a Swahili command is answered in Swahili whatever the app's language is.
  function createNavigator({ geolocation, api, speak = () => {}, storage = null, ui = null, wakeLock = null, now = () => Date.now(), language: appLanguage = "en" } = {}) {
    let active = null; // { route, follower, destination, mode, language, watchId, lastReroute, lastOffRouteNotice, lastFix, release }
    const appLang = languageOf(appLanguage);

    const locate = () => new Promise((resolve, reject) => {
      if (!geolocation?.getCurrentPosition) return reject(Object.assign(new Error("no location"), { code: 2 }));
      geolocation.getCurrentPosition(p => resolve({ lat: p.coords.latitude, lng: p.coords.longitude, accuracy: p.coords.accuracy }), reject, { enableHighAccuracy: true, timeout: 15000, maximumAge: 5000 });
    });

    async function where(language) {
      let fix; try { fix = await locate(); } catch (error) { return locationProblem(error, language); }
      const code = encodePlusCode(fix.lat, fix.lng);
      let place = ""; try { place = (await api({ action: "reverse", position: { lat: fix.lat, lng: fix.lng } }))?.place?.label || ""; } catch { /* the code and numbers are still true */ }
      return tx(language, "where", { near: place ? tx(language, "near", { place }) : "", lat: Math.abs(fix.lat).toFixed(5), ns: tx(language, fix.lat >= 0 ? "north" : "south"), lng: Math.abs(fix.lng).toFixed(5), ew: tx(language, fix.lng >= 0 ? "east" : "west"), m: Math.max(5, Math.round(fix.accuracy || 20)), code });
    }

    async function savePlace(name, language) {
      const key = placeKey(name); if (!key) return tx(language, "nameIt");
      let fix; try { fix = await locate(); } catch (error) { return locationProblem(error, language); }
      const list = readPlaces(storage).filter(item => item.name !== key);
      if (list.length >= MAX_PLACES) return tx(language, "fullPlaces");
      list.push({ name: key, lat: fix.lat, lng: fix.lng, savedAt: now() });
      if (!writePlaces(list, storage)) return tx(language, "noStorage");
      return tx(language, "saved", { key: placeName(key, language), go: key === "home" ? tx(language, "goHome") : tx(language, "goTo", { key }) });
    }
    function listPlaces(language) { const list = readPlaces(storage); return list.length ? tx(language, "placesList", { n: list.length, word: tx(language, list.length === 1 ? "placeWord" : "placesWord"), names: list.map(item => placeName(item.name, language)).join(", ") }) : tx(language, "noPlaces"); }
    function forgetPlace(name, language) { const key = placeKey(name); const list = readPlaces(storage); const kept = list.filter(item => item.name !== key); if (kept.length === list.length) return tx(language, "noSuchPlace", { key: placeName(key, language) }); writePlaces(kept, storage); return tx(language, "forgot", { key: placeName(key, language) }); }

    function stopGuidance(silent = false) {
      if (!active) return false;
      const language = active.language;
      try { geolocation?.clearWatch?.(active.watchId); } catch { /* already gone */ }
      try { active.release?.(); } catch { /* nothing held */ }
      ui?.hide?.(); active = null; if (!silent) speak(tx(language, "stopped"), { interrupt: true });
      return true;
    }

    async function reroute(fix) {
      if (!active || now() - active.lastReroute < 20000) return;
      active.lastReroute = now(); const language = active.language;
      speak(tx(language, "off"), { interrupt: true });
      try {
        const { route } = await api({ action: "route", from: { lat: fix.lat, lng: fix.lng }, to: active.destination, mode: active.mode, language });
        if (!active) return;
        active.route = route; active.follower = createRouteFollower(route, { mode: active.mode, language }); active.follower.resetOffRoute();
        speak(tx(language, "newRoute", { about: about(route.distanceMeters, route.durationSeconds, language) }));
      } catch {
        if (active && now() - active.lastOffRouteNotice > 60000) { active.lastOffRouteNotice = now(); speak(tx(language, "noConnection"), { interrupt: false }); }
      }
    }

    function panel(language, instruction, distanceMeters, remainingMeters, remainingSeconds, destination) {
      ui?.show?.({ instruction, distance: sayDistance(distanceMeters, language), remaining: about(remainingMeters, remainingSeconds, language), destination, language });
    }

    function onFix(position) {
      if (!active) return;
      const fix = { lat: position.coords.latitude, lng: position.coords.longitude, accuracy: position.coords.accuracy }; active.lastFix = fix;
      const result = active.follower.update(fix);
      for (const line of result.say) speak(line.text, { interrupt: line.urgent });
      panel(active.language, result.next.instruction, result.next.distanceMeters, result.remainingMeters, result.remainingSeconds, active.destination.label);
      if (result.arrived) { stopGuidance(true); ui?.hide?.(); return; }
      if (result.offRoute) reroute(fix);
    }

    async function go(text, mode, language) {
      let fix; try { fix = await locate(); } catch (error) { return locationProblem(error, language); }
      let destination; const named = text ? placeKey(text) : "home";
      const saved = readPlaces(storage).find(item => item.name === named);
      const code = decodePlusCode(text);
      if (saved) destination = { lat: saved.lat, lng: saved.lng, label: placeName(saved.name, language) };
      else if (code) destination = { lat: code.lat, lng: code.lng, label: String(text).toUpperCase() };
      else if (!text) return tx(language, "askWhere");
      else if (named === "home") return tx(language, "noHome");
      else destination = { query: text };
      let route;
      try { route = (await api({ action: "route", from: { lat: fix.lat, lng: fix.lng }, to: destination, mode, language })).route; }
      catch (error) { return error?.message && !/failed|network/i.test(error.message) ? error.message : tx(language, "routeFailed"); }
      if (active) stopGuidance(true);
      const target = { lat: route.destination.lat, lng: route.destination.lng, label: destination.label || route.destination.label };
      active = { route, follower: createRouteFollower(route, { mode, language }), destination: target, mode, language, watchId: null, lastReroute: 0, lastOffRouteNotice: 0, lastFix: fix, release: null };
      try { const lock = await wakeLock?.(); active.release = lock?.release ? () => lock.release() : null; } catch { /* the screen may sleep; guidance still runs while it is on */ }
      active.watchId = geolocation.watchPosition(onFix, error => { if (active && error?.code === 1) { speak(locationProblem(error, language), { interrupt: true }); stopGuidance(true); } }, { enableHighAccuracy: true, maximumAge: 1000, timeout: 20000 });
      const first = active.follower.update(fix);
      panel(language, first.next.instruction, first.next.distanceMeters, route.distanceMeters, route.durationSeconds, target.label);
      const told = storage?.getItem?.(DISCLOSED_KEY);
      try { storage?.setItem?.(DISCLOSED_KEY, "1"); } catch { /* fine */ }
      return tx(language, "start", { verb: tx(language, mode === "walk" ? "walking" : "taking"), label: target.label || tx(language, "destination"), about: about(route.distanceMeters, route.durationSeconds, language), first: first.say.map(line => line.text).join(" "), disclosure: told ? "" : tx(language, "disclosure") }).replace(/\s+/g, " ").trim();
    }

    return {
      get active() { return Boolean(active); },
      stop: stopGuidance,
      // The person's words -> what to say back (in the language they spoke, else the app's), or null when they are not about the GPS.
      async handle(text) {
        const command = parseCommand(text); if (!command) return null;
        const language = command.language || appLang;
        if (command.type === "where") return where(language);
        if (command.type === "save") return savePlace(command.name, language);
        if (command.type === "places") return listPlaces(language);
        if (command.type === "forget") return forgetPlace(command.name, language);
        if (command.type === "go") return go(command.destination, command.mode, language);
        if (command.type === "stop") return stopGuidance(true) ? tx(language, "stopped") : tx(language, "notGuiding");
        if (!active) return null; // "repeat" and "how far" belong to whatever else was going on
        const fix = active.lastFix; const at = active.follower.update({ ...fix });
        if (command.type === "repeat") return at.next.distanceMeters > 5 ? tx(language, "inDistance", { distance: sayDistance(at.next.distanceMeters, language), words: lowerFirst(at.next.instruction) }) : `${at.next.instruction}.`;
        return tx(language, "toGo", { distance: sayDistance(at.remainingMeters, language), duration: sayDuration(at.remainingSeconds, language) });
      },
      _onFix: onFix
    };
  }

  // ---------- the browser wiring: the real location, speech, storage, screen and the on-screen panel ----------
  // `locale` is the app's language ("en", "sw"); `speechLang` is the voice to speak with ("sw-KE"). Not every phone has a Swahili voice installed.
  function forBrowser({ api, locale = "en", speechLang = "" } = {}) {
    const language = languageOf(locale);
    const speakBrowser = (text, { interrupt = false } = {}) => {
      try {
        const synth = typeof speechSynthesis !== "undefined" ? speechSynthesis : null; if (!synth || typeof SpeechSynthesisUtterance === "undefined") return;
        if (interrupt) synth.cancel();
        const utterance = new SpeechSynthesisUtterance(text); utterance.lang = speechLang || locale; utterance.rate = 0.95; synth.speak(utterance);
      } catch { /* silence is better than an error while driving */ }
    };
    let panel = null;
    const ui = {
      show({ instruction, distance, remaining, destination, language: shown = language }) {
        if (typeof document === "undefined") return;
        if (!panel) {
          panel = document.createElement("div"); panel.setAttribute("role", "status"); panel.setAttribute("aria-live", "polite");
          panel.style.cssText = "position:fixed;left:8px;right:8px;bottom:8px;z-index:2147483000;background:#0f2a26;color:#fff;border-radius:12px;padding:12px 14px;font:600 18px/1.3 system-ui,sans-serif;box-shadow:0 4px 18px rgba(0,0,0,.4)";
          panel.innerHTML = '<div data-kn="instruction"></div><div data-kn="detail" style="font-weight:400;font-size:15px;opacity:.9;margin-top:4px"></div><button type="button" data-kn="stop" style="margin-top:8px;padding:8px 14px;border-radius:8px;border:0;background:#fff;color:#0f2a26;font:600 15px system-ui"></button>';
          panel.querySelector('[data-kn="stop"]').addEventListener("click", () => navigator.stop());
          document.body.appendChild(panel);
        }
        panel.querySelector('[data-kn="stop"]').textContent = tx(shown, "panelStop");
        panel.querySelector('[data-kn="instruction"]').textContent = tx(shown, "panelNext", { distance, instruction });
        panel.querySelector('[data-kn="detail"]').textContent = `${destination ? tx(shown, "panelTo", { destination }) : ""}${tx(shown, "panelRemaining", { remaining })}`;
      },
      hide() { if (panel) { panel.remove(); panel = null; } }
    };
    const wakeLock = async () => { try { return await globalThis.navigator?.wakeLock?.request("screen"); } catch { return null; } };
    let store = null; try { store = typeof localStorage !== "undefined" ? localStorage : null; } catch { store = null; }
    const navigator = createNavigator({ geolocation: globalThis.navigator?.geolocation, api, speak: speakBrowser, storage: store, ui, wakeLock, language });
    return navigator;
  }

  return Object.freeze({ encodePlusCode, decodePlusCode, distanceBetween, sayDistance, sayDuration, createRouteFollower, parseCommand, createNavigator, forBrowser, readPlaces, PLACES_KEY, TEXT });
});
