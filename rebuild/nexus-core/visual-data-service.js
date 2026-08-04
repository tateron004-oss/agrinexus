"use strict";

const { extractIntentAndParameters } = require("./intent-parameter-extractor");
const { createContentActionService } = require("./content-action-service");
const { createProviderFetch } = require("./provider-fetch");
const musicProvider = require("../../server/nexus-music-media-source-provider");

function locationFromWeatherCommand(command) {
  const resolution = extractIntentAndParameters(command);
  return resolution.parameters.location || "Nairobi, Kenya";
}

function createVisualDataService({
  fetchImpl = globalThis.fetch,
  goalResolver = null,
  musicSourceProvider = musicProvider,
  now = () => Date.now(),
  weatherCacheTtlMs = 5 * 60 * 1000,
  weatherStaleTtlMs = 60 * 60 * 1000
} = {}) {
  const providerFetch = createProviderFetch({ fetchImpl });
  const contentActions = createContentActionService({ fetchImpl, musicProvider: musicSourceProvider, goalResolver });
  const weatherCache = new Map();
  const weatherRequests = new Map();

  async function retrieveWeather(requested) {
    const geocodeUrl = new URL("https://geocoding-api.open-meteo.com/v1/search");
    geocodeUrl.searchParams.set("name", requested);
    geocodeUrl.searchParams.set("count", "1");
    geocodeUrl.searchParams.set("language", "en");
    geocodeUrl.searchParams.set("format", "json");
    const geocodeResponse = await providerFetch(geocodeUrl);
    if (!geocodeResponse.ok) throw new Error(`Weather location lookup failed (${geocodeResponse.status}).`);
    const geocode = await geocodeResponse.json();
    const place = geocode && geocode.results && geocode.results[0];
    if (!place) throw new Error(`Nexus could not locate ${requested} for weather.`);
    const forecastUrl = new URL("https://api.open-meteo.com/v1/forecast");
    forecastUrl.searchParams.set("latitude", place.latitude);
    forecastUrl.searchParams.set("longitude", place.longitude);
    forecastUrl.searchParams.set("current", "temperature_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m");
    forecastUrl.searchParams.set("daily", "temperature_2m_max,temperature_2m_min,precipitation_probability_max");
    forecastUrl.searchParams.set("timezone", "auto");
    forecastUrl.searchParams.set("forecast_days", "1");
    const forecastResponse = await providerFetch(forecastUrl);
    if (!forecastResponse.ok) throw new Error(`Weather forecast retrieval failed (${forecastResponse.status}).`);
    const forecast = await forecastResponse.json();
    return Object.freeze({
      status: "live-weather-ready",
      location: [place.name, place.admin1, place.country].filter(Boolean).join(", "),
      latitude: Number(place.latitude),
      longitude: Number(place.longitude),
      timezone: forecast.timezone || place.timezone || "",
      observedAt: forecast.current && forecast.current.time || null,
      temperatureC: forecast.current && forecast.current.temperature_2m,
      apparentTemperatureC: forecast.current && forecast.current.apparent_temperature,
      precipitationMm: forecast.current && forecast.current.precipitation,
      weatherCode: forecast.current && forecast.current.weather_code,
      windKph: forecast.current && forecast.current.wind_speed_10m,
      highC: forecast.daily && forecast.daily.temperature_2m_max && forecast.daily.temperature_2m_max[0],
      lowC: forecast.daily && forecast.daily.temperature_2m_min && forecast.daily.temperature_2m_min[0],
      rainChance: forecast.daily && forecast.daily.precipitation_probability_max && forecast.daily.precipitation_probability_max[0],
      sourceName: "Open-Meteo",
      sourceUrl: forecastUrl.href
    });
  }
  const service = {
    async content(request = {}, context = {}) {
      const result = await contentActions.execute(request, {
        ...context,
        weather: (command) => service.weather(command)
      });
      const requestId = String(request.requestId || result.requestId || "").trim();
      return Object.freeze({
        ...result,
        requestId,
        receipt: Object.freeze({
          schema: "nexus.capability.receipt.v1",
          requestId,
          capability: result.capability,
          workspace: result.workspace,
          query: result.query,
          providerSucceeded: result.status === "ready",
          weather: result.capability === "weather" ? result.evidence && result.evidence.weather || null : null,
          issuedAt: new Date().toISOString()
        })
      });
    },

    async weather(command) {
      const requested = locationFromWeatherCommand(command);
      const cacheKey = requested.trim().toLocaleLowerCase("en");
      const cached = weatherCache.get(cacheKey);
      const cacheAgeMs = cached ? now() - cached.storedAt : Infinity;
      if (cached && cacheAgeMs <= weatherCacheTtlMs) return cached.value;
      if (weatherRequests.has(cacheKey)) return weatherRequests.get(cacheKey);

      const request = retrieveWeather(requested).then((weather) => {
        weatherCache.set(cacheKey, { storedAt: now(), value: weather });
        return weather;
      }).catch((error) => {
        if (cached && cacheAgeMs <= weatherStaleTtlMs && /\(429\)/.test(String(error && error.message))) {
          return Object.freeze({ ...cached.value, status: "live-weather-cached", cacheAgeMs });
        }
        throw error;
      }).finally(() => {
        weatherRequests.delete(cacheKey);
      });
      weatherRequests.set(cacheKey, request);
      return request;
    },

    async images(command) {
      const resolution = extractIntentAndParameters(command);
      const crop = resolution.parameters.crop || "crop";
      const query = `${crop} plant disease`;
      const url = new URL("https://commons.wikimedia.org/w/api.php");
      url.searchParams.set("action", "query");
      url.searchParams.set("generator", "search");
      url.searchParams.set("gsrsearch", `filetype:bitmap ${query}`);
      url.searchParams.set("gsrnamespace", "6");
      url.searchParams.set("gsrlimit", "6");
      url.searchParams.set("prop", "imageinfo");
      url.searchParams.set("iiprop", "url|extmetadata");
      url.searchParams.set("iiurlwidth", "640");
      url.searchParams.set("format", "json");
      const response = await providerFetch(url, { headers: { "user-agent": "Nexus-Genesis/1.0 (visual-support)" } });
      if (!response.ok) throw new Error(`Agriculture image retrieval failed (${response.status}).`);
      const payload = await response.json();
      const items = Object.values(payload && payload.query && payload.query.pages || {}).map((page) => {
        const info = page.imageinfo && page.imageinfo[0] || {};
        return Object.freeze({
          title: String(page.title || "").replace(/^File:/, ""),
          imageUrl: info.thumburl || info.url || "",
          sourceUrl: info.descriptionurl || "",
          license: info.extmetadata && info.extmetadata.LicenseShortName && info.extmetadata.LicenseShortName.value || "See source"
        });
      }).filter((item) => item.imageUrl && item.sourceUrl).slice(0, 6);
      if (!items.length) throw new Error("No source-labeled agriculture images were returned.");
      return Object.freeze({ status: "agriculture-images-ready", query, items });
    }
  };
  return Object.freeze(service);
}

module.exports = { createVisualDataService, locationFromWeatherCommand };
