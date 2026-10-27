"use strict";
// A sample trip itinerary for anywhere (public/kyro-trip-topics.js, nexus/trips/itinerary.js): asked for by a travel agent, and found missing on 26 October 2026 when a friend asked about travel arrangements to Africa and was talked to but shown nothing.
// The itinerary must be a document on the screen with a Download button, a region instead of a place must be asked about, and the route must be on the map (a straight line where there is no road), not the whole continent.
// The ones that make a document (writes) are saved to the throwaway guest account only, as the older "make a document" case is.
module.exports = Object.freeze([
  { id: "trip-document-kenya", area: "trips", writes: true, say: "Plan a 7 day trip to Kenya from Atlanta.", timeoutMs: 120000, expect: { screen: "document", text: "SAMPLE ITINERARY", download: true, notSaid: "no saved trip|can.t show an itinerary" } },
  { id: "trip-document-paris", area: "trips", writes: true, say: "Make me a sample itinerary for Paris for five days.", timeoutMs: 120000, expect: { screen: "document", text: "SAMPLE ITINERARY", download: true } },
  { id: "trip-region-asks-for-a-place", area: "trips", say: "Can you show me my travel itinerary to Africa?", timeoutMs: 45000, expect: { screen: ["text", "list"], text: "country or a city", notText: "no saved trip" } },
  { id: "trip-arrangements-friend", area: "trips", writes: true, say: "I am traveling to Nairobi from Atlanta next month. Can you help me with my travel arrangements?", timeoutMs: 120000, expect: { screen: "document", text: "SAMPLE ITINERARY", download: true } },
  { id: "trip-then-route", area: "trips", writes: true, say: "Plan a 5 day trip to Paris from Atlanta.", timeoutMs: 120000, expect: { screen: "document", text: "SAMPLE ITINERARY", download: true },
    then: [{ say: "Show the route on the map.", timeoutMs: 90000, expect: { mapOpen: true, routeSteps: "Trip route: Atlanta → Paris.*Atlanta to Paris: about [0-9,]+ kilometers in a straight line" } }] },
  // (the map waits for the itinerary's card to be closed: closing the card goes back to the start screen, which would take a map with it; the person is told so)
  { id: "trip-and-route-together", area: "trips", writes: true, say: "Plan a 5 day trip to Lisbon from Atlanta and show the route on the map.", timeoutMs: 150000, expect: { screen: "document", text: "SAMPLE ITINERARY", download: true },
    then: [{ tap: "^×$|^Close$" }, { expect: { mapOpen: true, routeSteps: "Trip route: Atlanta → Lisbon.*Atlanta to Lisbon: about [0-9,]+ kilometers in a straight line" }, timeoutMs: 45000 }] },
  { id: "route-intercontinental", area: "trips", say: "Show me the route from Atlanta to Nairobi.", timeoutMs: 90000, expect: { mapOpen: true, mapNear: { lat: 16, lng: -24, within: 30 } } }
]);
