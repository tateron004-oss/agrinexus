"use strict";

const assert = require("node:assert/strict");
const { ROUTES, routeCommand } = require("../nexus-core/router");
const { createVisualDataService, locationFromWeatherCommand } = require("../nexus-core/visual-data-service");
const {
  visualIntent,
  weatherDescription
} = require("../browser/nexus-clean-entry");

const commands = [
  ["maps", "Nexus, reset the map and show Nairobi."],
  ["maps", "Nexus, reset the map and show Mombasa."],
  ["agriculture", "Nexus, open Agriculture Help."],
  ["agriculture", "Nexus, show pictures of possible maize diseases."],
  ["workforce", "Nexus, help me create a résumé."],
  ["live-knowledge", "Nexus, show today's weather in Nairobi, Kenya."],
  ["live-knowledge", "Nexus, show me the websites and sources."],
  ["health", "Nexus, create a card I can show my doctor. My blood pressure was 160 over 100."],
  ["live-knowledge", "Nexus, open the Pilot Evidence Dashboard."],
  ["health", "Nexus, record my blood pressure as 140 over 90."],
  ["telehealth", "Nexus, open Telehealth Intake."],
  ["mobile-clinic", "Nexus, open Mobile Clinic support."],
  ["pharmacy", "Nexus, open Pharmacy Support."],
  ["learning", "Nexus, open Learning and Literacy."],
  ["workforce", "Nexus, search for farming jobs in Kenya."],
  ["marketplace", "Nexus, help me sell 50 bags of maize."],
  ["music", "Nexus, play Kenyan music."],
  ["reminders", "Nexus, remind me tomorrow morning to check my blood pressure."],
  ["offline", "Nexus, open the Offline Queue."]
];

for (const [expected, command] of commands) {
  assert.equal(routeCommand(command, "connected").workspace, expected, command);
}
assert.equal(ROUTES.length, 13);
assert.equal(visualIntent(commands[3][1]), "agriculture-images");
assert.equal(visualIntent(commands[4][1]), "resume");
assert.equal(visualIntent(commands[5][1]), "weather");
assert.equal(visualIntent(commands[6][1]), "source-directory");
assert.equal(visualIntent(commands[7][1]), "provider-card");
assert.equal(visualIntent(commands[8][1]), "pilot-dashboard");
assert.equal(weatherDescription(0), "Clear sky");
assert.equal(weatherDescription(61), "Rain");
assert.equal(locationFromWeatherCommand(commands[5][1]), "Nairobi, Kenya");

const calls = [];
const fetchImpl = async (url) => {
  calls.push(String(url));
  if (String(url).includes("geocoding-api")) {
    return { ok: true, json: async () => ({ results: [{ name: "Nairobi", admin1: "Nairobi County", country: "Kenya", latitude: -1.2864, longitude: 36.8172, timezone: "Africa/Nairobi" }] }) };
  }
  if (String(url).includes("api.open-meteo.com")) {
    return { ok: true, json: async () => ({
      timezone: "Africa/Nairobi",
      current: { time: "2026-07-28T15:00", temperature_2m: 22, apparent_temperature: 22, precipitation: 0, weather_code: 2, wind_speed_10m: 12 },
      daily: { temperature_2m_max: [25], temperature_2m_min: [14], precipitation_probability_max: [20] }
    }) };
  }
  return { ok: true, json: async () => ({ query: { pages: {
    1: { title: "File:Maize leaf.jpg", imageinfo: [{ thumburl: "https://upload.wikimedia.org/maize.jpg", descriptionurl: "https://commons.wikimedia.org/wiki/File:Maize_leaf.jpg", extmetadata: { LicenseShortName: { value: "CC BY-SA" } } }] }
  } } }) };
};

(async () => {
  const service = createVisualDataService({ fetchImpl });
  const weather = await service.weather(commands[5][1]);
  assert.equal(weather.status, "live-weather-ready");
  assert.equal(weather.location, "Nairobi, Nairobi County, Kenya");
  assert.match(weather.sourceUrl, /^https:\/\/api\.open-meteo\.com\//);
  const images = await service.images(commands[3][1]);
  assert.equal(images.status, "agriculture-images-ready");
  assert.equal(images.items.length, 1);
  assert.match(images.items[0].sourceUrl, /^https:\/\/commons\.wikimedia\.org\//);
  assert.equal(calls.length, 3);
  console.log(`Nexus complete voice visual actions: PASS (${commands.length} spoken actions)`);
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
