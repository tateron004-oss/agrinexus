"use strict";

// Whose clock a time means. A reminder said in Lagos is Lagos time, in Nairobi it is Nairobi time; the server's own clock (UTC) is never the answer.
// Order: the zone the device said it is in (the app sends it with the request), then the zone saved on the person, then the default for their country, then East Africa.
const DEFAULT_TIME_ZONE = "Africa/Nairobi";

const COUNTRY_ZONES = Object.freeze({
  kenya: "Africa/Nairobi", nigeria: "Africa/Lagos", ghana: "Africa/Accra", tanzania: "Africa/Dar_es_Salaam", uganda: "Africa/Kampala", rwanda: "Africa/Kigali",
  burundi: "Africa/Bujumbura", ethiopia: "Africa/Addis_Ababa", somalia: "Africa/Mogadishu", "south sudan": "Africa/Juba", sudan: "Africa/Khartoum", egypt: "Africa/Cairo",
  drc: "Africa/Kinshasa", "dr congo": "Africa/Kinshasa", "democratic republic of the congo": "Africa/Kinshasa", congo: "Africa/Brazzaville", cameroon: "Africa/Douala",
  senegal: "Africa/Dakar", "ivory coast": "Africa/Abidjan", "cote d'ivoire": "Africa/Abidjan", mali: "Africa/Bamako", niger: "Africa/Niamey", benin: "Africa/Porto-Novo",
  togo: "Africa/Lome", "sierra leone": "Africa/Freetown", liberia: "Africa/Monrovia", zambia: "Africa/Lusaka", zimbabwe: "Africa/Harare", malawi: "Africa/Blantyre",
  mozambique: "Africa/Maputo", angola: "Africa/Luanda", botswana: "Africa/Gaborone", namibia: "Africa/Windhoek", "south africa": "Africa/Johannesburg", morocco: "Africa/Casablanca",
  algeria: "Africa/Algiers", tunisia: "Africa/Tunis", madagascar: "Indian/Antananarivo", india: "Asia/Kolkata", "united kingdom": "Europe/London", uk: "Europe/London"
});

function isValidTimeZone(zone) {
  if (typeof zone !== "string" || !zone.trim() || zone.length > 64) return false;
  try { new Intl.DateTimeFormat("en", { timeZone: zone.trim() }); return true; } catch { return false; }
}

// -> { zone, source } where source says where the zone came from: "request", "user", "country" or "default".
function resolveReminderTimeZoneDetail({ requested, user, fallback = DEFAULT_TIME_ZONE } = {}) {
  if (isValidTimeZone(requested)) return { zone: String(requested).trim(), source: "request" };
  if (isValidTimeZone(user?.timeZone)) return { zone: String(user.timeZone).trim(), source: "user" };
  if (isValidTimeZone(user?.timezone)) return { zone: String(user.timezone).trim(), source: "user" };
  const country = String(user?.country || "").trim().toLowerCase();
  if (country && COUNTRY_ZONES[country]) return { zone: COUNTRY_ZONES[country], source: "country" };
  return { zone: fallback, source: "default" };
}
// -> an IANA zone name. `requested` is what the request said; `user` is the signed-in person (user.timeZone, user.country).
const resolveReminderTimeZone = args => resolveReminderTimeZoneDetail(args).zone;

module.exports = Object.freeze({ resolveReminderTimeZone, resolveReminderTimeZoneDetail, isValidTimeZone, COUNTRY_ZONES, DEFAULT_TIME_ZONE });
