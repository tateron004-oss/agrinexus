"use strict";

// The forecast for one named place, from Open-Meteo (no key needed): geocode the name, then read each day's high, low, chance and
// amount of rain, and conditions, always in degrees Celsius and millimetres. Returns null on any trouble (place not found, network,
// timeout, odd payload) so callers leave the weather out or fall back, instead of guessing. `fetchImpl` is injectable for tests.
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

const whole = value => { const n = Number(value); return Number.isFinite(n) ? Math.round(n) : null; };

// Up to `days` days (1-7) starting today for the place. Result: { place, country, days: [{ date, high, low, rainChance, rainMm, summary }] }.
async function fetchForecast({ place, days = 3, fetchImpl = globalThis.fetch, timeoutMs = 6000 } = {}) {
  const name = String(place || "").trim();
  if (!name || typeof fetchImpl !== "function") return null;
  const span = Math.min(Math.max(Math.floor(Number(days)) || 1, 1), 7);
  try {
    const found = await getJson(fetchImpl, `${GEOCODE_URL}?name=${encodeURIComponent(name)}&count=1&language=en&format=json`, timeoutMs);
    const spot = found?.results?.[0];
    if (!spot || !Number.isFinite(Number(spot.latitude)) || !Number.isFinite(Number(spot.longitude))) return null;
    const forecast = await getJson(fetchImpl, `${FORECAST_URL}?latitude=${spot.latitude}&longitude=${spot.longitude}&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_probability_max,precipitation_sum&forecast_days=${span}&timezone=auto`, timeoutMs);
    const daily = forecast?.daily;
    if (!Array.isArray(daily?.temperature_2m_max)) return null;
    const list = [];
    for (let index = 0; index < span; index += 1) {
      const high = whole(daily.temperature_2m_max?.[index]); const low = whole(daily.temperature_2m_min?.[index]);
      if (high === null || low === null) break;
      const mm = Number(daily.precipitation_sum?.[index]);
      list.push({ date: String(daily.time?.[index] || ""), high, low, rainChance: whole(daily.precipitation_probability_max?.[index]),
        rainMm: Number.isFinite(mm) ? Math.round(mm * 10) / 10 : null, summary: describeCode(daily.weathercode?.[index]) });
    }
    if (!list.length) return null;
    return { place: spot.name || name, country: spot.country || "", days: list };
  } catch { return null; }
}

// Today only, in the shape the morning brief has always used.
async function fetchTodayForecast(options = {}) {
  const forecast = await fetchForecast({ ...options, days: 1 });
  const today = forecast?.days?.[0];
  return today ? { place: forecast.place, high: today.high, low: today.low, rainChance: today.rainChance, summary: today.summary } : null;
}

module.exports = Object.freeze({ fetchForecast, fetchTodayForecast, describeCode });
