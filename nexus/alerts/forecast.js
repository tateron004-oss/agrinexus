"use strict";

// The next two days of weather for one named place, from Open-Meteo (no key needed): geocode the name, then read each day's conditions,
// rain, temperatures and wind gusts. Returns null on any trouble (place not found, network, timeout, odd payload), so an alert sweep simply
// skips that person instead of guessing. `fetchImpl` is injectable for tests.
const GEOCODE_URL = "https://geocoding-api.open-meteo.com/v1/search";
const FORECAST_URL = "https://api.open-meteo.com/v1/forecast";

async function getJson(fetchImpl, url, timeoutMs) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetchImpl(url, { signal: controller.signal, headers: { accept: "application/json" } });
    if (!response?.ok) return null;
    return await response.json();
  } finally { clearTimeout(timer); }
}
const finite = value => (value === null || value === undefined || value === "" ? null : Number.isFinite(Number(value)) ? Number(value) : null);

async function fetchAlertForecast({ place, fetchImpl = globalThis.fetch, timeoutMs = 6000 } = {}) {
  const name = String(place || "").trim();
  if (!name || typeof fetchImpl !== "function") return null;
  try {
    const found = await getJson(fetchImpl, `${GEOCODE_URL}?name=${encodeURIComponent(name)}&count=1&language=en&format=json`, timeoutMs);
    const spot = found?.results?.[0];
    if (!spot || finite(spot.latitude) === null || finite(spot.longitude) === null) return null;
    const data = await getJson(fetchImpl, `${FORECAST_URL}?latitude=${spot.latitude}&longitude=${spot.longitude}&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_sum,precipitation_probability_max,wind_gusts_10m_max&forecast_days=2&timezone=auto`, timeoutMs);
    const daily = data?.daily;
    if (!Array.isArray(daily?.time) || !daily.time.length) return null;
    const days = daily.time.slice(0, 2).map((date, i) => ({ date, code: finite(daily.weathercode?.[i]), high: finite(daily.temperature_2m_max?.[i]), low: finite(daily.temperature_2m_min?.[i]),
      rainMm: finite(daily.precipitation_sum?.[i]), rainChance: finite(daily.precipitation_probability_max?.[i]), gustKmh: finite(daily.wind_gusts_10m_max?.[i]) }));
    return { place: spot.name || name, days };
  } catch { return null; }
}

module.exports = Object.freeze({ fetchAlertForecast });
