"use strict";
// Outside-tool automations (Zapier, Make, n8n, IFTTT). A guest cannot connect or send, so these check what can be heard and seen without a connection: the list, the screen, and the honest answer for a name that is not connected.
// Nothing here sends anything. (Sending needs a full account with a connected link: see nexus/automations/.)
module.exports = Object.freeze([
  { id: "automations-list", area: "automations", say: "Show my automations.", timeoutMs: 45000, expect: { screen: ["text", "list"], text: "automations", notText: "I cannot find|not sure what you" } },
  { id: "automations-open", area: "automations", say: "Open automations.", timeoutMs: 45000, expect: { screen: "automations", keep: true, text: "Outside tool automations" } },
  { id: "automations-unknown-name", area: "automations", say: "Send hello to my payroll automation.", timeoutMs: 45000, expect: { screen: ["text", "list"], text: "could not find an automation called payroll", notText: "I cannot find" } }
]);
