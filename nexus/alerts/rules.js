"use strict";

// When a forecast is worth interrupting someone for. Deliberately conservative: a person who turns weather alerts on wants the few days a
// year that matter (a storm, flooding rain, dangerous heat, gales, frost), not a daily forecast. Each alert says what to do about it.
const THRESHOLDS = Object.freeze({ heavyRainMm: 30, heavyRainChance: 50, stormChance: 40, heatC: 35, gustKmh: 60, frostC: 2 });
const STORM_CODES = new Set([95, 96, 99]);

const round = value => Math.round(value);

// forecast: { place, days: [{ date, code, high, low, rainMm, rainChance, gustKmh }] }, today first. today: the place's local date (YYYY-MM-DD).
// Returns [{ kind, date, when: "today"|"tomorrow", text }], today's before tomorrow's, at most one per kind per day.
function evaluateForecast(forecast, today) {
  const alerts = [];
  const place = forecast?.place || "your area";
  for (const day of forecast?.days || []) {
    if (!day?.date) continue;
    const dayIndex = day.date === today ? 0 : (new Date(`${day.date}T12:00:00Z`) - new Date(`${today}T12:00:00Z`)) / 86400000;
    if (dayIndex !== 0 && dayIndex !== 1) continue;
    const when = dayIndex === 0 ? "today" : "tomorrow";
    const add = (kind, text) => alerts.push({ kind, date: day.date, when, text });
    if (day.rainMm !== null && day.rainMm >= THRESHOLDS.heavyRainMm && (day.rainChance ?? 100) >= THRESHOLDS.heavyRainChance)
      add("heavy_rain", `Heavy rain ${when} in ${place}: about ${round(day.rainMm)} mm. Cover harvested crops and clear drains.`);
    if (STORM_CODES.has(day.code) && (day.rainChance ?? 100) >= THRESHOLDS.stormChance)
      add("storm", `Thunderstorms likely ${when} in ${place}. Move animals to shelter and stay off open ground.`);
    if (day.gustKmh !== null && day.gustKmh >= THRESHOLDS.gustKmh)
      add("wind", `Strong winds ${when} in ${place}: gusts near ${round(day.gustKmh)} km/h. Secure roofs, nets and young trees.`);
    if (day.high !== null && day.high >= THRESHOLDS.heatC)
      add("heat", `Very hot ${when} in ${place}: up to ${round(day.high)}°C. Water crops and animals early and give them shade.`);
    if (day.low !== null && day.low <= THRESHOLDS.frostC)
      add("frost", `Frost risk ${when} in ${place}: down to ${round(day.low)}°C. Cover young plants.`);
  }
  return alerts;
}

module.exports = Object.freeze({ evaluateForecast, THRESHOLDS });
