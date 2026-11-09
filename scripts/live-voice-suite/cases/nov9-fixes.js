"use strict";
// 9 November 2026, the owner's own testing: "show me Cairo on a map" opened Cairo, Illinois; a place said with a comma or three places in one sentence were answered "I need a start and an end";
// and a finished task (a document, the map) stayed open for ever. The maps are checked by where they are centred, as the other map cases are.
const cairo = { lat: 30.04, lng: 31.24, within: 0.6, zoomAtLeast: 9 };
const mombasa = { lat: -4.04, lng: 39.67, within: 0.6, zoomAtLeast: 9 };
const stockton = { lat: 37.96, lng: -121.29, within: 0.5, zoomAtLeast: 9 };
module.exports = Object.freeze([
  { id: "map-cairo-is-egypt", area: "media", say: "Show me Cairo on a map.", timeoutMs: 45000, expect: { mapOpen: true, mapNear: cairo } },
  { id: "map-place-with-a-comma", area: "media", say: "Show me Mombasa, Kenya on the map.", timeoutMs: 45000, expect: { mapOpen: true, mapNear: mombasa } },
  { id: "map-three-places-one-at-a-time", area: "media", say: "Show me Stockton, Cairo or Mombasa on a map.", timeoutMs: 45000, expect: { mapOpen: true, mapNear: stockton, said: "one place at a time", notSaid: "start and|two places|two points" } },
  { id: "map-where-is-a-place", area: "media", say: "Where is Cairo on the map?", timeoutMs: 45000, expect: { mapOpen: true, mapNear: cairo } },
  { id: "route-cairo-to-alexandria-is-in-egypt", area: "media", say: "Give me directions from Cairo to Alexandria.", timeoutMs: 60000, expect: { mapOpen: true, mapNear: { lat: 30.6, lng: 30.6, within: 1.5 } } },
  { id: "map-after-a-document-opens", area: "media", writes: true, say: "Make me a flyer for my bake sale on Saturday at ten at the church hall.", timeoutMs: 120000, expect: { screen: "document" },
    then: [{ say: "Show me Mombasa on a map.", timeoutMs: 60000, expect: { mapOpen: true, mapNear: mombasa } }] },
  // a finished task nobody touches goes back to the home screen by itself (three minutes), and a card drawn over an older task clears and takes it down
  { id: "finished-document-returns-home", area: "control", writes: true, say: "Make me a flyer for my bake sale on Saturday at ten at the church hall.", timeoutMs: 120000, expect: { screen: "document" },
    then: [{ expect: { orb: true }, timeoutMs: 300000 }] },
  { id: "card-over-a-task-clears-both", area: "control", writes: true, say: "Make me a flyer for my bake sale on Saturday at ten at the church hall.", timeoutMs: 120000, expect: { screen: "document" },
    then: [{ say: "What is the weather in Nairobi?", timeoutMs: 90000, expect: { tool: "nexus_weather" } }, { expect: { orb: true }, timeoutMs: 200000 }] }
]);
