"use strict";

// Today's forecast for one named place, from Open-Meteo (no key needed): geocode the name, then read the day's high, low, chance of
// rain and conditions. Returns null on any trouble (place not found, network, timeout, odd payload) so the brief simply leaves
// the weather out instead of guessing. `fetchImpl` is injectable for tests.
const GEOCODE_URL = "https://geocoding-api.open-meteo.com/v1/search";
const FORECAST_URL = "https://api.open-meteo.com/v1/forecast";

// WMO weather codes, in plain words.
function describeCode(code) {
  const c = Number(code);
  if (c === 0) return "clear skies";
  if (c === 1 || c === 2) return "partly cloudy";
  if (c === 3) return "overcast";
  if (c === 45 || c === 48) return "foggy";
  if (c >= 51 && c <= 57) return "drizzle";
  if (c >= 61 && c <= 67) return "rain";
  if (c >= 71 && c <= 77) return "snow";
  if (c >= 80 && c <= 82) return "showers";
  if (c === 95 || c === 96 || c === 99) return "thunderstorms";
  return "";
}

async function getJson(fetchImpl, url, timeoutMs) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetchImpl(url, { signal: controller.signal, headers: { accept: "application/json" } });
    if (!response?.ok) return null;
    return await response.json();
  } finally { clearTimeout(timer); }
}

async function fetchTodayForecast({ place, fetchImpl = globalThis.fetch, timeoutMs = 6000 } = {}) {
  const name = String(place || "").trim();
  if (!name || typeof fetchImpl !== "function") return null;
  try {
    const found = await getJson(fetchImpl, `${GEOCODE_URL}?name=${encodeURIComponent(name)}&count=1&language=en&format=json`, timeoutMs);
    const spot = found?.results?.[0];
    if (!spot || !Number.isFinite(Number(spot.latitude)) || !Number.isFinite(Number(spot.longitude))) return null;
    const forecast = await getJson(fetchImpl, `${FORECAST_URL}?latitude=${spot.latitude}&longitude=${spot.longitude}&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_probability_max&forecast_days=1&timezone=auto`, timeoutMs);
    const day = forecast?.daily;
    const high = Number(day?.temperature_2m_max?.[0]); const low = Number(day?.temperature_2m_min?.[0]);
    if (!Number.isFinite(high) || !Number.isFinite(low)) return null;
    const rain = Number(day?.precipitation_probability_max?.[0]);
    return { place: spot.name || name, high: Math.round(high), low: Math.round(low), rainChance: Number.isFinite(rain) ? Math.round(rain) : null, summary: describeCode(day?.weathercode?.[0]) };
  } catch { return null; }
}

module.exports = Object.freeze({ fetchTodayForecast, describeCode });
