"use strict";
const documentsAndLists = require("./documents-and-lists.js");
const businessAndApps = require("./business-and-apps.js");
const mediaSearchHealthForms = require("./media-search-health-forms.js");
const resourcesForPeople = require("./resources-for-people.js");
const minorityAndStartupBusiness = require("./minority-and-startup-business.js");
const automations = require("./automations.js");

const ALL = Object.freeze([...documentsAndLists, ...businessAndApps, ...mediaSearchHealthForms, ...resourcesForPeople, ...minorityAndStartupBusiness, ...automations]);

// Which cases run: by default the ones that change nothing on the account; --writes adds the ones that save something, --risky the emergency words,
// --only a,b (ids) or --area documents,lists (areas) narrows it, and --no-sound leaves out the ones that need sound to start.
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
