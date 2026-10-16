// What a person says about their outside-tool automations (Zapier, Make, n8n, IFTTT and the like). The same words are read in two places: the server's planner (nexus/brain/planner.js) and the page
// (public/app.js), so a spoken request is handled the same whether the voice model passed it on or not.
//   parseTrigger(text) -> { connection, text } | null   "send new customer Grace to my sales sheet automation", "run my weekly report automation", "test my sales sheet automation"
//   isList(text)       -> true                          "show my automations", "what automations do I have"
//   isOpen(text)       -> true                          "open automations", "set up an automation", "connect Zapier"
// Nothing here sends anything: a trigger only becomes a request the person must say yes to.
(function (root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory();
  else root.KyroAutomationCommands = factory();
})(typeof self !== "undefined" ? self : this, function () {
  "use strict";

  const LEAD = String.raw`^(?:please\s+|kyro,?\s+|nexus,?\s+|hey kyro,?\s+|can you\s+|could you\s+)?`;
  // (only words that mean an automation: "workflow" and "flow" are everyday business words and are left alone)
  const THING = String.raw`(?:automations?|zaps?|webhooks?)`;

  // "send <words> to my <name> automation"
  const SEND = new RegExp(LEAD + String.raw`(?:send|push|post|forward|log|add|share)\s+(?:this\s+|the following\s+)?(.+?)\s+(?:to|into|through|via)\s+(?:my|the)\s+(.+?)\s+${THING}\s*[.!]?$`, "i");
  // "run my <name> automation [with <words>]", "test my <name> automation"
  const RUN = new RegExp(LEAD + String.raw`(trigger|run|start|fire|test)\s+(?:my|the)\s+(.+?)\s+${THING}(?:\s+(?:with|saying|and say|that says|for)\s+(.+?))?\s*[.!]?$`, "i");
  const clean = value => String(value || "").replace(/\s+/g, " ").replace(/^["“'‘]+|["”'’.!?]+$/g, "").trim();

  function parseTrigger(text) {
    const said = String(text || "").replace(/\s+/g, " ").trim();
    if (!said || said.length > 400) return null;
    let match = SEND.exec(said);
    if (match) {
      const words = clean(match[1]); const connection = clean(match[2]);
      return words && connection ? { connection, text: words } : null;
    }
    match = RUN.exec(said);
    if (match) {
      const connection = clean(match[2]);
      if (!connection) return null;
      const verb = match[1].toLowerCase();
      return { connection, text: clean(match[3]) || (verb === "test" ? "Test from Kyro" : "Started from Kyro") };
    }
    return null;
  }

  const LIST = new RegExp(LEAD + String.raw`(?:(?:show|list|read|see|view)(?:\s+me)?\s+(?:all\s+)?(?:of\s+)?(?:my|the)\s+(?:outside\s+tool\s+)?automations?|what\s+automations?\s+(?:do\s+i|have\s+i|are\s+(?:there|set\s+up))(?:\s+(?:have|got|set up))?|which\s+automations?\s+(?:do\s+i|have\s+i)(?:\s+have)?|do\s+i\s+have\s+(?:any\s+)?automations?)\s*[?.!]*$`, "i");
  function isList(text) { return LIST.test(String(text || "").replace(/\s+/g, " ").trim()); }

  const OPEN = new RegExp(LEAD + String.raw`(?:(?:open|manage|show)\s+(?:the\s+|my\s+)?(?:outside\s+tool\s+)?automations?(?:\s+(?:screen|page|settings))?|(?:set\s*up|setup|add|connect|create|link)\s+(?:an?\s+|my\s+|the\s+|new\s+)?(?:outside\s+tool\s+)?(?:new\s+)?automations?|(?:set\s*up|setup|connect|link)\s+(?:my\s+business\s+to\s+)?(?:zapier|make\.com|make|n8n|ifttt))\s*[.!]*$`, "i");
  function isOpen(text) {
    const said = String(text || "").replace(/\s+/g, " ").trim();
    return OPEN.test(said) && !LIST.test(said);
  }

  return Object.freeze({ parseTrigger, isList, isOpen });
});
