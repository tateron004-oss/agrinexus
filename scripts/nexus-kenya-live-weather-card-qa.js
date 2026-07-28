const assert = require("node:assert/strict");
const fs = require("node:fs");
const vm = require("node:vm");

const source = fs.readFileSync("public/browser-action-controller.js", "utf8");
const created = [];
function element(tagName) {
  return {
    tagName, dataset: {}, children: [], innerHTML: "",
    appendChild(child) { this.children.push(child); return child; },
    addEventListener(name, callback) { this.listeners = { ...(this.listeners || {}), [name]: callback }; },
    querySelector(selector) {
      if (selector === ".nexus-live-weather-body") {
        this.weatherBody ||= { innerHTML: "" };
        return this.weatherBody;
      }
      return { focus() {}, requestFullscreen() {} };
    },
    setAttribute() {}, remove() {}, click() {}
  };
}
const document = {
  body: { appendChild(node) { created.push(node); return node; } },
  head: { appendChild(node) { created.push(node); return node; } },
  documentElement: { lang: "en" },
  createElement: element,
  getElementById() { return null; },
  querySelector() { return null; },
  addEventListener() {}
};
const calls = [];
const window = {
  document,
  localStorage: { getItem() { return null; }, setItem() {} },
  fetch: async url => {
    calls.push(String(url));
    if (String(url).includes("geocoding-api.open-meteo.com")) return {
      ok: true,
      json: async () => ({ results: [{ name: "Nairobi", admin1: "Nairobi County", country: "Kenya", latitude: -1.286389, longitude: 36.817223 }] })
    };
    return {
      ok: true,
      json: async () => ({
        current: { temperature_2m: 24, apparent_temperature: 25, precipitation: 0, weather_code: 2, wind_speed_10m: 9, time: "2026-07-28T15:00" },
        current_units: { temperature_2m: "°C", apparent_temperature: "°C", precipitation: "mm", wind_speed_10m: "km/h" },
        daily: { temperature_2m_max: [26], temperature_2m_min: [15], precipitation_probability_max: [20] },
        daily_units: { temperature_2m_max: "°C", temperature_2m_min: "°C" }
      })
    };
  },
  CustomEvent: function CustomEvent(name, options) { this.type = name; this.detail = options?.detail; },
  dispatchEvent(event) { this.dispatched = [...(this.dispatched || []), event]; },
  addEventListener() {},
  setTimeout,
  URL,
  Blob
};
window.window = window;
vm.runInNewContext(source, { window, document, URL, Blob, Date, Map, Math, Set, setTimeout, console, encodeURIComponent });

const controller = window.NexusBrowserActionController;
assert.equal(controller.isWeatherRequest("Nexus, show today's weather in Nairobi, Kenya."), true);
assert.equal(controller.isWeatherRequest("Nexus, open Maps."), false);
assert.equal(controller.getWeatherLocation("Nexus, show today's weather in Nairobi, Kenya."), "Nairobi, Kenya");
assert.equal(controller.getWeatherLocation("What is the weather in Mombasa?"), "Mombasa");

const handled = controller.handleFinalUserTranscript({
  transcript: "Nexus, show today's weather in Nairobi, Kenya.",
  transcriptId: "weather-1", sessionId: "session-1", role: "user", isFinal: true
}, () => null);
assert.equal(handled.handled, true);
assert.equal(handled.weatherCardRequested, true);

setImmediate(async () => {
  assert.equal(calls.length, 2);
  assert.match(calls[0], /geocoding-api\.open-meteo\.com/);
  assert.match(calls[0], /Nairobi%2C%20Kenya/);
  assert.match(calls[1], /api\.open-meteo\.com\/v1\/forecast/);
  const shell = created.find(node => node.dataset?.nexusLiveWeatherShell === "true");
  assert(shell);
  assert.match(shell.weatherBody.innerHTML, /24/);
  assert.match(shell.weatherBody.innerHTML, /Nairobi County, Kenya/);
  assert.match(shell.weatherBody.innerHTML, /Open‑Meteo/);
  assert.match(shell.weatherBody.innerHTML, /View exact weather data/);
  assert.match(shell.weatherBody.innerHTML, /Close and keep listening/);
  assert(window.dispatched.some(event => event.type === "nexus.weather.opened" && event.detail.visible === true));
  console.log("Nexus Kenya live weather card QA passed.");
});
