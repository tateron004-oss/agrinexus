"use strict";
const documentsAndLists = require("./documents-and-lists.js");
const businessAndApps = require("./business-and-apps.js");
const mediaSearchHealthForms = require("./media-search-health-forms.js");
const resourcesForPeople = require("./resources-for-people.js");
const minorityAndStartupBusiness = require("./minority-and-startup-business.js");
const spanishBusiness = require("./spanish-business.js");
const automations = require("./automations.js");
const californiaBusiness = require("./california-business.js");
const athletes = require("./athletes.js");
const money = require("./money.js");
const moneyAfrica = require("./money-africa.js");
const athleteDocuments = require("./athlete-documents.js");
const moneyDocuments = require("./money-documents.js");
const walkthroughs = require("./walkthroughs.js");
const walkthroughsGuides = require("./walkthroughs-guides.js");
const safety = require("./safety.js");
const specialEd = require("./special-ed.js");
const reentry = require("./reentry.js");
const trips = require("./trips.js");
const spokenDocuments = require("./spoken-documents.js");
const spokenSweep = require("./spoken-sweep.js");
const tutorCases = require("./tutor.js");
const nov5Platform = require("./nov5-everyday-platform.js");
const typingCases = require("./typing.js");
const nov5Business = require("./nov5-business-farm-health.js");
const nov4Fixes = require("./nov4-fixes.js");
const documentPictures = require("./document-pictures.js");
const businessFrontDesk = require("./business-front-desk.js");
const businessMarketing = require("./business-marketing.js");
const businessContracts = require("./business-contracts.js");
const businessCampaigns = require("./business-campaigns.js");
const doctorVisit = require("./doctor-visit.js");


// Which cases run: by default the ones that change nothing on the account; --writes adds the ones that save something, --risky the emergency words,
// --only a,b (ids) or --area documents,lists (areas) narrows it, and --no-sound leaves out the ones that need sound to start.
const ALL = Object.freeze([...documentsAndLists, ...businessAndApps, ...mediaSearchHealthForms, ...resourcesForPeople, ...minorityAndStartupBusiness, ...spanishBusiness, ...automations, ...californiaBusiness, ...athletes, ...money, ...moneyAfrica, ...athleteDocuments, ...moneyDocuments, ...walkthroughs, ...walkthroughsGuides, ...safety, ...specialEd, ...reentry, ...trips, ...spokenDocuments, ...spokenSweep, ...tutorCases, ...typingCases, ...nov4Fixes, ...nov5Platform, ...nov5Business, ...documentPictures, ...businessFrontDesk, ...businessMarketing, ...businessContracts, ...businessCampaigns, ...doctorVisit]);

function select(options = {}) {
  const only = new Set(String(options.only || "").split(",").map(item => item.trim()).filter(Boolean));
  const areas = new Set(String(options.area || "").split(",").map(item => item.trim()).filter(Boolean));
  return ALL.filter(entry => {
    if (only.size) return only.has(entry.id);
    if (areas.size && !areas.has(entry.area)) return false;
    if (entry.writes && !options.writes) return false;
    if (entry.risky && !options.risky) return false;
    if (entry.needs === "sound" && options.sound === false) return false;
    return true;
  });
}

module.exports = { ALL, select };
