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
  function sayDistance(meters) {
    const m = Math.max(0, Number(meters) || 0);
    if (m < 20) return "a few meters";
    if (m < 100) return `${Math.round(m / 10) * 10} meters`;
    if (m < 1000) return `${Math.round(m / 50) * 50} meters`;
    const km = m / 1000; return `${km < 10 ? Math.round(km * 10) / 10 : Math.round(km)} ${km < 1.05 ? "kilometer" : "kilometers"}`;
  }
  function sayDuration(seconds) {
    const minutes = Math.round((Number(seconds) || 0) / 60);
    if (minutes < 1) return "less than a minute";
    if (minutes < 60) return `${minutes} ${minutes === 1 ? "minute" : "minutes"}`;
    const hours = Math.floor(minutes / 60); const rest = minutes % 60;
    return `${hours} ${hours === 1 ? "hour" : "hours"}${rest ? ` ${rest} minutes` : ""}`;
  }
  const lowerFirst = text => `${text.charAt(0).toLowerCase()}${text.slice(1)}`;

  // Follows one route: given a position, where along it the person is, how far off it, what is next, and what to say.
  function createRouteFollower(route, { mode = "drive" } = {}) {
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
        if (!arrived && (remaining <= arriveWithin || (index < 0 && toNext <= arriveWithin)) && at.cross <= Math.max(60, accuracy * 1.5)) { arrived = true; say.push({ text: "You have arrived.", urgent: true }); }
        if (!arrived && index >= 0) {
          const due = thresholds.filter(limit => toNext <= limit && !announced.has(`${index}:${limit}`));
          if (due.length) {
            const smallest = Math.min(...due); for (const limit of due) announced.add(`${index}:${limit}`);
            const last = smallest === thresholds[thresholds.length - 1]; const arriving = step.type === "arrive";
            // The end of the route is announced ahead ("you will arrive"), and its last warning is left to the arrival itself ("You have arrived.").
            const words = arriving ? lowerFirst(step.instruction).replace(/^you have arrived/, "you will arrive") : lowerFirst(step.instruction);
            if (!(arriving && last)) say.push({ text: last && toNext <= smallest ? `Now, ${words}.` : `In ${sayDistance(toNext)}, ${words}.`, urgent: last });
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
  const WALK_WORDS = /\b(?:walk(?:ing)?|on foot|by foot)\b/gi;

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
      rest = rest.replace(WALK_WORDS, " ").replace(/\s+/g, " ").trim().replace(/^(?:to|towards|toward|me to|for|back to|back)\s+/i, "").replace(/^(?:the )?/, m => m).trim();
      if (/\bfrom\b/i.test(rest)) return null; // "directions from A to B" is a route between two named places, handled elsewhere
      if (!rest) return { type: "go", destination: "", mode };
      if (NOT_A_PLACE.test(rest)) return null;
      return { type: "go", destination: rest, mode };
    }
    return null;
  }

  // ---------- saved places (on this phone only) ----------
  const PLACES_KEY = "kyro.places.v1"; const MAX_PLACES = 50;
  const placeKey = name => String(name || "").toLowerCase().replace(/^(?:my|the)\s+/, "").replace(/\s+/g, " ").trim().slice(0, 40);
  function readPlaces(storage) {
    try { const parsed = JSON.parse(storage?.getItem(PLACES_KEY) || "[]"); return Array.isArray(parsed) ? parsed.filter(item => item && typeof item.name === "string" && Number.isFinite(item.lat) && Number.isFinite(item.lng)) : []; } catch { return []; }
  }
  function writePlaces(list, storage) { try { storage?.setItem(PLACES_KEY, JSON.stringify(list)); return true; } catch { return false; } }

  // ---------- the navigator: the phone's location + the server + speech, glued together ----------
  const DISCLOSED_KEY = "kyro.nav.disclosed";
  const locationProblem = error => (error?.code === 1 ? "I can't see your location. Allow location for this site in your browser settings, then ask again."
    : error?.code === 3 ? "I couldn't get your location in time. Go somewhere with a clearer view of the sky and try again."
    : "I couldn't work out where you are. Check that location is switched on for your phone, then try again.");

  function createNavigator({ geolocation, api, speak = () => {}, storage = null, ui = null, wakeLock = null, now = () => Date.now() } = {}) {
    let active = null; // { route, follower, destination, mode, watchId, lastReroute, lastOffRouteNotice, lastFix, release }

    const locate = () => new Promise((resolve, reject) => {
      if (!geolocation?.getCurrentPosition) return reject(Object.assign(new Error("no location"), { code: 2 }));
      geolocation.getCurrentPosition(p => resolve({ lat: p.coords.latitude, lng: p.coords.longitude, accuracy: p.coords.accuracy }), reject, { enableHighAccuracy: true, timeout: 15000, maximumAge: 5000 });
    });

    async function where() {
      let fix; try { fix = await locate(); } catch (error) { return locationProblem(error); }
      const code = encodePlusCode(fix.lat, fix.lng);
      let place = ""; try { place = (await api({ action: "reverse", position: { lat: fix.lat, lng: fix.lng } }))?.place?.label || ""; } catch { /* the code and numbers are still true */ }
      const north = fix.lat >= 0 ? "N" : "S"; const east = fix.lng >= 0 ? "E" : "W";
      return `${place ? `You are near ${place}. ` : ""}Your position is ${Math.abs(fix.lat).toFixed(5)} ${north}, ${Math.abs(fix.lng).toFixed(5)} ${east}, to within about ${Math.max(5, Math.round(fix.accuracy || 20))} meters. Your plus code is ${code}. Read it to anyone and they can find you. Say "save this place as home" to keep it.`;
    }

    async function savePlace(name) {
      const key = placeKey(name); if (!key) return "What should I call this place?";
      let fix; try { fix = await locate(); } catch (error) { return locationProblem(error); }
      const list = readPlaces(storage).filter(item => item.name !== key);
      if (list.length >= MAX_PLACES) return "You have fifty saved places already. Forget one first, like \"forget place market\".";
      list.push({ name: key, lat: fix.lat, lng: fix.lng, savedAt: now() });
      if (!writePlaces(list, storage)) return "I couldn't save that on this phone. Its storage may be full or switched off.";
      return `Saved this place as ${key}. It stays on this phone only. Say "take me ${key === "home" ? "home" : `to ${key}`}" whenever you need the way.`;
    }
    function listPlaces() { const list = readPlaces(storage); return list.length ? `You have ${list.length} saved ${list.length === 1 ? "place" : "places"}: ${list.map(item => item.name).join(", ")}.` : 'You have no saved places. Stand at a place and say "save this place as home".'; }
    function forgetPlace(name) { const key = placeKey(name); const list = readPlaces(storage); const kept = list.filter(item => item.name !== key); if (kept.length === list.length) return `I don't have a place called ${key}.`; writePlaces(kept, storage); return `Forgot ${key}.`; }

    function stopGuidance(silent = false) {
      if (!active) return false;
      try { geolocation?.clearWatch?.(active.watchId); } catch { /* already gone */ }
      try { active.release?.(); } catch { /* nothing held */ }
      ui?.hide?.(); active = null; if (!silent) speak("Navigation stopped.", { interrupt: true });
      return true;
    }

    async function reroute(fix) {
      if (!active || now() - active.lastReroute < 20000) return;
      active.lastReroute = now();
      speak("You are off the route. Finding a new way.", { interrupt: true });
      try {
        const { route } = await api({ action: "route", from: { lat: fix.lat, lng: fix.lng }, to: active.destination, mode: active.mode });
        if (!active) return;
        active.route = route; active.follower = createRouteFollower(route, { mode: active.mode }); active.follower.resetOffRoute();
        speak(`New route, ${sayDistance(route.distanceMeters)}, about ${sayDuration(route.durationSeconds)}.`);
      } catch {
        if (active && now() - active.lastOffRouteNotice > 60000) { active.lastOffRouteNotice = now(); speak("I can't plan a new route without a connection. Head back toward the route and I'll pick it up again.", { interrupt: false }); }
      }
    }

    function onFix(position) {
      if (!active) return;
      const fix = { lat: position.coords.latitude, lng: position.coords.longitude, accuracy: position.coords.accuracy }; active.lastFix = fix;
      const result = active.follower.update(fix);
      for (const line of result.say) speak(line.text, { interrupt: line.urgent });
      ui?.show?.({ instruction: result.next.instruction, distance: sayDistance(result.next.distanceMeters), remaining: `${sayDistance(result.remainingMeters)}, about ${sayDuration(result.remainingSeconds)}`, destination: active.destination.label });
      if (result.arrived) { stopGuidance(true); ui?.hide?.(); return; }
      if (result.offRoute) reroute(fix);
    }

    async function go(text, mode) {
      let fix; try { fix = await locate(); } catch (error) { return locationProblem(error); }
      let destination; const named = text ? placeKey(text) : "home";
      const saved = readPlaces(storage).find(item => item.name === named);
      const code = decodePlusCode(text);
      if (saved) destination = { lat: saved.lat, lng: saved.lng, label: saved.name };
      else if (code) destination = { lat: code.lat, lng: code.lng, label: String(text).toUpperCase() };
      else if (!text) return "Where would you like to go? Say \"take me to\" and a place, or \"take me home\" once you have saved home.";
      else if (named === "home") return 'I don\'t know where home is yet. Stand at home and say "save this place as home".';
      else destination = { query: text };
      let route;
      try { route = (await api({ action: "route", from: { lat: fix.lat, lng: fix.lng }, to: destination, mode })).route; }
      catch (error) { return error?.message && !/failed|network/i.test(error.message) ? error.message : "I couldn't plan a route. Check your connection and try again."; }
      if (active) stopGuidance(true);
      const target = { lat: route.destination.lat, lng: route.destination.lng, label: destination.label || route.destination.label };
      active = { route, follower: createRouteFollower(route, { mode }), destination: target, mode, watchId: null, lastReroute: 0, lastOffRouteNotice: 0, lastFix: fix, release: null };
      try { const lock = await wakeLock?.(); active.release = lock?.release ? () => lock.release() : null; } catch { /* the screen may sleep; guidance still runs while it is on */ }
      active.watchId = geolocation.watchPosition(onFix, error => { if (active && error?.code === 1) { speak(locationProblem(error), { interrupt: true }); stopGuidance(true); } }, { enableHighAccuracy: true, maximumAge: 1000, timeout: 20000 });
      const first = active.follower.update(fix);
      ui?.show?.({ instruction: first.next.instruction, distance: sayDistance(first.next.distanceMeters), remaining: `${sayDistance(route.distanceMeters)}, about ${sayDuration(route.durationSeconds)}`, destination: target.label });
      const told = storage?.getItem?.(DISCLOSED_KEY);
      try { storage?.setItem?.(DISCLOSED_KEY, "1"); } catch { /* fine */ }
      return `${mode === "walk" ? "Walking" : "Taking"} you to ${target.label || "your destination"}: ${sayDistance(route.distanceMeters)}, about ${sayDuration(route.durationSeconds)}. ${first.say.map(line => line.text).join(" ")} Keep your screen on, because a browser can't guide with the screen off. ${told ? "" : "I use your phone's location only while guiding you and send it to a directions service to find the way; I don't keep it. "}Say "stop navigation" to end.`.replace(/\s+/g, " ").trim();
    }

    return {
      get active() { return Boolean(active); },
      stop: stopGuidance,
      // The person's words -> what to say back, or null when they are not about the GPS.
      async handle(text) {
        const command = parseCommand(text); if (!command) return null;
        if (command.type === "where") return where();
        if (command.type === "save") return savePlace(command.name);
        if (command.type === "places") return listPlaces();
        if (command.type === "forget") return forgetPlace(command.name);
        if (command.type === "go") return go(command.destination, command.mode);
        if (command.type === "stop") return stopGuidance(true) ? "Navigation stopped." : "I'm not guiding you anywhere right now.";
        if (!active) return null; // "repeat" and "how far" belong to whatever else was going on
        const fix = active.lastFix; const at = active.follower.update({ ...fix });
        if (command.type === "repeat") return `${at.next.distanceMeters > 5 ? `In ${sayDistance(at.next.distanceMeters)}, ${lowerFirst(at.next.instruction)}.` : `${at.next.instruction}.`}`;
        return `${sayDistance(at.remainingMeters)} to go, about ${sayDuration(at.remainingSeconds)}.`;
      },
      _onFix: onFix
    };
  }

  // ---------- the browser wiring: the real location, speech, storage, screen and the on-screen panel ----------
  function forBrowser({ api, locale = "en" } = {}) {
    const speakBrowser = (text, { interrupt = false } = {}) => {
      try {
        const synth = typeof speechSynthesis !== "undefined" ? speechSynthesis : null; if (!synth || typeof SpeechSynthesisUtterance === "undefined") return;
        if (interrupt) synth.cancel();
        const utterance = new SpeechSynthesisUtterance(text); utterance.lang = locale; utterance.rate = 0.95; synth.speak(utterance);
      } catch { /* silence is better than an error while driving */ }
    };
    let panel = null;
    const ui = {
      show({ instruction, distance, remaining, destination }) {
        if (typeof document === "undefined") return;
        if (!panel) {
          panel = document.createElement("div"); panel.setAttribute("role", "status"); panel.setAttribute("aria-live", "polite");
          panel.style.cssText = "position:fixed;left:8px;right:8px;bottom:8px;z-index:2147483000;background:#0f2a26;color:#fff;border-radius:12px;padding:12px 14px;font:600 18px/1.3 system-ui,sans-serif;box-shadow:0 4px 18px rgba(0,0,0,.4)";
          panel.innerHTML = '<div data-kn="instruction"></div><div data-kn="detail" style="font-weight:400;font-size:15px;opacity:.9;margin-top:4px"></div><button type="button" data-kn="stop" style="margin-top:8px;padding:8px 14px;border-radius:8px;border:0;background:#fff;color:#0f2a26;font:600 15px system-ui">Stop navigation</button>';
          panel.querySelector('[data-kn="stop"]').addEventListener("click", () => navigator.stop());
          document.body.appendChild(panel);
        }
        panel.querySelector('[data-kn="instruction"]').textContent = `In ${distance}: ${instruction}`;
        panel.querySelector('[data-kn="detail"]').textContent = `${destination ? `To ${destination}. ` : ""}${remaining} to go.`;
      },
      hide() { if (panel) { panel.remove(); panel = null; } }
    };
    const wakeLock = async () => { try { return await globalThis.navigator?.wakeLock?.request("screen"); } catch { return null; } };
    let store = null; try { store = typeof localStorage !== "undefined" ? localStorage : null; } catch { store = null; }
    const navigator = createNavigator({ geolocation: globalThis.navigator?.geolocation, api, speak: speakBrowser, storage: store, ui, wakeLock });
    return navigator;
  }

  return Object.freeze({ encodePlusCode, decodePlusCode, distanceBetween, sayDistance, sayDuration, createRouteFollower, parseCommand, createNavigator, forBrowser, readPlaces, PLACES_KEY });
});
