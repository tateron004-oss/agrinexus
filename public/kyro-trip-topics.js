// Is this a request for a TRIP ITINERARY? "Plan a 7 day trip to Kenya", "make me a sample itinerary for Paris", "I am traveling to Nairobi from Atlanta, help me with my travel arrangements", "show me a travel plan for Japan for two people". Asked by a travel agent who wants to show
// a client a simulated itinerary for anywhere (26 October 2026), and by a friend who asked for "travel arrangements to Africa" and was talked to but shown nothing. The same words are used by the server (nexus/trips/itinerary.js writes the sample itinerary as a document)
// and by the page (public/app.js), which takes such a request itself so that the answer is always put on the screen, and so that the route can be shown on the map afterwards.
// It is deliberately narrow: a request to make or show a plan with a PLACE in it. Never an order to book, buy, reserve, cancel, change or remember ("book me a flight to Nairobi", "open my Kenya trip itinerary", "remind me about my trip"), never a personal emergency.
// A region instead of a place ("a trip to Africa") is not guessed: it comes back as { needsPlace: true } so that Kyro asks which country or city.
(function (root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory();
  else root.KyroTripTopics = factory();
})(typeof self !== "undefined" ? self : this, function () {
  "use strict";

  // tripRequest(text) -> null | { needsPlace: true, region } | { destination, origin, stops, days, travelers, style }. A pure text matcher: no places looked up, nothing saved.
  const NOT_A_PLAN_REQUEST = /^(?:please\s+)?(?:open|remind|save|delete|remove|cancel|change|update|edit|call|text|email|message|send|book|buy|purchase|reserve|order|pay|log|add|set|schedule|forget|translate|play|read|export|print|share)\b(?!\s+(?:me|us)\s+(?:how|through)\b)/i;
  const PERSONAL_EMERGENCY = /\b(?:suicid\w*|kill (?:myself|himself|herself|themselves)|end my life|hurt(?:ing)? (?:myself|himself|herself|themselves)|self[- ]harm|overdos\w+|911|ambulance|can'?t breathe|cannot breathe|chest pain|abus(?:e[ds]?|ing)|in danger right now|being (?:hurt|attacked|threatened))\b/i;
  // a list is not an itinerary: "make me a packing checklist for a trip to Kenya" is a checklist (found by the spoken-document probe on 27 October 2026: it was made into a seven day itinerary)
  const LIST_WORDS = /\b(?:check ?lists?|to-?do lists?|packing lists?|shopping lists?|lists?)\b/i;
  const PLAN_WORDS = /\b(?:itinerar(?:y|ies)|plan(?:s|ning)?|travel arrangements?|arrangements?|schedule)\b/i;
  const BOOKING_ORDER = /\b(?:book|buy|purchase|reserve|order)\b[^.!?]{0,30}\b(?:ticket|tickets|flight|flights|hotel|room|seat|car|cruise|tour)\b/i;
  // what is being asked for: a trip, an itinerary, a travel plan or the arrangements for travel
  const THING = /\b(?:itinerar(?:y|ies)|trip|trips|vacation|holiday|getaway|honeymoon|safari|tour|journey|travel(?:l?ing)? (?:plans?|arrangements?|schedule|ideas?|options?)|plan(?:s)? for (?:the |my |our )?travel|travel(?:l?ing)? to)\b/i;
  const MAKE = /\b(?:plan|planning|make|build|create|put together|draft|prepare|design|write|show|give|sketch|map out|come up with|suggest|what(?:'s| is| are)|help(?:ing)? (?:me|us|them|my clients?|our clients?|a client|my customers?) (?:plan|with|put|build|make|see)|need|want|looking for|what would|can you)\b/i;
  const REGIONS = /^(?:africa|east africa|west africa|southern africa|north africa|europe|asia|south asia|southeast asia|east asia|the middle east|middle east|south america|north america|central america|latin america|the caribbean|caribbean|oceania|the pacific|scandinavia|the world|anywhere|somewhere|abroad|overseas|another country|a foreign country)$/i;
  const NOT_A_PLACE = /^(?:me|us|my|our|you|it|them|a|an|the|this|that|next|last|some|any|one|two|three|four|five|six|seven|eight|nine|ten|week|weeks|day|days|month|months|year|years|night|nights|friend|friends|family|clients?|customers?|people|trip|trips|plan|work|school|vacation|holiday)$/i;
  const NUMBER_WORDS = { a: 1, an: 1, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10, eleven: 11, twelve: 12, fourteen: 14, fortnight: 14 };
  const STYLES = ["budget", "luxury", "family", "honeymoon", "romantic", "adventure", "safari", "beach", "culture", "cultural", "food", "foodie", "wildlife", "history", "hiking", "relaxing", "business"];

  const tidy = value => String(value || "").replace(/[’]/g, "'").replace(/\s+/g, " ").trim();
  // a place name: letters, spaces, apostrophes, periods, hyphens, commas inside (as in "Nairobi, Kenya"); kept short
  const placeFrom = raw => {
    const value = tidy(raw).replace(/^(?:the\s+)?(?:city|town|island|country|state)\s+of\s+/i, "").replace(/[.,;:!?]+$/, "").trim();
    if (!value || value.length < 2 || value.length > 48 || /\d/.test(value) || NOT_A_PLACE.test(value) || /\b(?:day|days|week|weeks|weekend|month|months|night|nights|year|years|trip|trips|vacation|holiday|tour|itinerary|plan|plans|arrangements?|travel|travelling|traveling)\b/i.test(value)) return "";
    if (value.split(" ").length > 5) return "";
    return value;
  };
  const toNumber = word => /^\d+$/.test(word) ? Number(word) : NUMBER_WORDS[String(word).toLowerCase()] || 0;

  function daysOf(text) {
    let match = /\b(\d{1,2}|a|an|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|fourteen)[- ](day|days|night|nights|week|weeks)\b/i.exec(text);
    if (!match) match = /\b(?:for|over)\s+(a|an|one|two|three|four|five|six|seven|eight|nine|ten|twelve)\s+(weeks?|days?)\b/i.exec(text);
    if (match) {
      const count = toNumber(match[1]); const unit = match[2].toLowerCase();
      const days = unit.startsWith("week") ? count * 7 : count;
      if (days >= 1) return Math.min(days, 14);
    }
    if (/\bfortnight\b/i.test(text)) return 14;
    if (/\bweekend\b/i.test(text)) return 3;
    return 7;
  }
  function travelersOf(text) {
    const match = /\bfor\s+(\d{1,2}|two|three|four|five|six|seven|eight|nine|ten)\s+(?:people|persons|adults|travell?ers|guests|of us|passengers|pax)\b/i.exec(text) || /\bfamily of\s+(\d{1,2}|two|three|four|five|six|seven|eight)\b/i.exec(text);
    if (match) return Math.min(toNumber(match[1]) || 2, 20);
    if (/\b(?:couple|honeymoon|two of us)\b/i.test(text)) return 2;
    if (/\b(?:solo|by myself|on my own|alone)\b/i.test(text)) return 1;
    return 0;
  }
  function styleOf(text) {
    const found = STYLES.filter(word => new RegExp(`\\b${word}\\b`, "i").test(text));
    return found.length ? found[0].toLowerCase() : "";
  }

  // the places named after "from", "to"/"in"/"visit", and "via"/"stopping in": the first of each is the origin, the destination and the stops
  const STOP_WORDS = "(?:\\s+(?:for|from|with|in|on|during|next|this|over|that|which|and then|starting|leaving|departing|under|around|by|using|including|then|please|so|because|if)\\b|[,.?!;:]|$)";
  function destinationOf(text) {
    const patterns = [
      new RegExp(`\\b(?:trip|vacation|holiday|getaway|honeymoon|safari|tour|journey|itinerary|visit|visiting|travel(?:l?ing)?|going|go|fly(?:ing)?|flight|arrangements?|plans?)\\s+(?:to|in|for|around|through)\\s+(?:the\\s+)?([A-Za-z][A-Za-z' .-]{1,46}?)${STOP_WORDS}`, "i"),
      new RegExp(`\\b(?:to|in|visit|visiting)\\s+(?:the\\s+)?([A-Z][A-Za-z' .-]{1,46}?)${STOP_WORDS}`),
      new RegExp(`\\b(?:to|in|visit|visiting)\\s+(?:the\\s+)?([A-Za-z][A-Za-z' .-]{1,46}?)${STOP_WORDS}`, "i")
    ];
    for (const pattern of patterns) { const match = pattern.exec(text); const place = match ? placeFrom(match[1]) : ""; if (place) return place; }
    return "";
  }
  function originOf(text) {
    const match = new RegExp(`\\bfrom\\s+(?:the\\s+)?([A-Za-z][A-Za-z' .-]{1,46}?)(?:\\s+(?:to|and|for|with|in|on|via|through|next|this|at|around|during|starting|leaving|departing|that|which|then)\\b|[,.?!;:]|$)`, "i").exec(text);
    return match ? placeFrom(match[1]) : "";
  }
  function stopsOf(text) {
    const match = /\b(?:via|through|stopping (?:at|in|by)|with stops? (?:at|in)|stop(?:s)? in)\s+(.+?)(?:\s+(?:for|with|on|during|next)\b|[.?!;]|$)/i.exec(text);
    if (!match) return [];
    return match[1].split(/\s*,\s*(?:and\s+)?|\s+and\s+/i).map(placeFrom).filter(Boolean).slice(0, 6);
  }

  function tripRequest(text) {
    const value = tidy(text);
    if (!value || value.length > 300) return null;
    if (NOT_A_PLAN_REQUEST.test(value) || PERSONAL_EMERGENCY.test(value) || BOOKING_ORDER.test(value)) return null;
    if (!THING.test(value) || !MAKE.test(value)) return null;
    if (LIST_WORDS.test(value) && !PLAN_WORDS.test(value)) return null;
    // "my saved trip", "open my itinerary": not a request to make one (Kyro keeps no trips)
    const destination = destinationOf(value);
    const origin = originOf(value);
    if (!destination) return null;
    if (REGIONS.test(destination)) return { needsPlace: true, region: destination };
    if (origin && origin.toLowerCase() === destination.toLowerCase()) return null;
    return { destination, origin, stops: stopsOf(value), days: daysOf(value), travelers: travelersOf(value), style: styleOf(value), wantsMap: /\b(?:map|route)\b/i.test(value) };
  }

  // "Show me the route", "show it on the map", "show the trip on the map": the follow-up that puts the last trip's route on the map
  const SHOW_ROUTE = /^(?:please\s+)?(?:can you\s+|could you\s+)?(?:show|put|display|draw|open|map)\b[^.!?]{0,30}\b(?:route|trip|itinerary|journey|it|that|this)\b[^.!?]{0,30}\b(?:map|route)\b|^(?:please\s+)?(?:show|display|draw)\s+(?:me\s+)?(?:the\s+|my\s+|that\s+|this\s+)?(?:trip\s+|travel\s+)?route\b[.!?\s]*$|^(?:please\s+)?(?:show|open)\s+(?:me\s+)?(?:the\s+|my\s+)?map\s+of\s+(?:the|my)\s+(?:trip|itinerary|route|journey)\b/i;
  function wantsTripRoute(text) { return SHOW_ROUTE.test(tidy(text)) && !/\bfrom\b[^.!?]+\bto\b/i.test(tidy(text)); }

  return Object.freeze({ tripRequest, wantsTripRoute, REGIONS });
});
