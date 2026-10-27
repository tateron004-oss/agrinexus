// Which spoken or typed sentence asks for one of Kyro's STARTER DOCUMENTS (a technology roadmap, an automation audit, a website brief, an app brief, vendor questions, an AI use policy, a business plan, a growth roadmap, a funding checklist)?
// "Draft a website brief for Grace's Bakery", "create a technology roadmap", "make an automation audit for Marcus as a PDF". The server makes the document (nexus/knowledge/consulting-templates.js) and the page takes the request itself so that a spoken one is made and shown
// with its Download button, as a typed one is (found on the live site on 27 October 2026: by voice, "Draft a website brief for Grace's Bakery" was answered "Okay." and nothing was shown). The matcher is the one the server always used, moved here unchanged.
(function (root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory();
  else root.KyroTemplateTopics = factory();
})(typeof self !== "undefined" ? self : this, function () {
  "use strict";

  const ALIASES = [
    ["technology-roadmap", /^(?:technology|tech|it|digital) (?:road ?map|plan)$/i],
    ["automation-audit", /^(?:business )?automation (?:audit|review|assessment)$/i],
    ["website-brief", /^(?:web ?site|website|web) (?:brief|plan|requirements)$/i],
    ["app-brief", /^(?:mobile |phone )?app (?:brief|plan|requirements)$/i],
    ["vendor-questions", /^(?:vendor|developer|designer|web host|hosting) questions$|^questions (?:for|to ask) (?:a |the |my )?(?:vendor|web designer|designer|developer|web host|host|web developer)s?$/i],
    ["ai-use-policy", /^ai (?:use |usage )?(?:policy|rules|guidelines)$|^(?:an? )?(?:artificial intelligence) (?:use )?policy$/i],
    ["business-plan", /^(?:(?:lean|simple|start-?up|new|traditional) )?business plan(?: template| outline)?$|^lean (?:start-?up )?plan$|^start-?up plan$/i],
    ["growth-roadmap", /^(?:business )?(?:growth|scaling|scale-?up|expansion) (?:road ?map|plan)$|^(?:road ?map|plan) for (?:growth|scaling|growing my business)$/i],
    ["funding-checklist", /^(?:funding|investor|loan) (?:readiness )?(?:checklist|prep(?:aration)? list)$|^funding readiness (?:checklist|list)?$/i]
  ];
  const FORMAT_WORDS = Object.freeze({ pdf: "pdf", docx: "docx", word: "docx", "word document": "docx", markdown: "md", md: "md", "text file": "txt", txt: "txt" });

  const REQUEST = /^\s*(?:please\s+|can you\s+|could you\s+)?(?:draft|create|make|write|prepare|give me|start)\s+(?:me\s+)?(?:an?\s+|the\s+|my\s+)?(.+?)(?:\s+(?:for|about|on)\s+(.+?))?(?:\s+as\s+(?:an?\s+)?(pdf|word document|word|docx|markdown|md|text file|txt))?\s*[.!]?\s*$/i;

  function templateRequest(text) {
    const match = REQUEST.exec(String(text || "").trim());
    if (!match) return null;
    const phrase = match[1].trim().replace(/\s+/g, " ");
    let hit = ALIASES.find(([, pattern]) => pattern.test(phrase));
    let clientText = match[2] || "";
    // "questions for a web designer": the "for" belongs to the name of the document, not to a client
    if (!hit && match[2]) {
      const whole = `${phrase} for ${match[2].trim()}`;
      hit = ALIASES.find(([, pattern]) => pattern.test(whole));
      if (hit) clientText = "";
    }
    if (!hit) return null;
    const client = clientText.trim().replace(/^["'“”]+|["'“”.]+$/g, "").slice(0, 80);
    return { kind: hit[0], client, format: match[3] ? FORMAT_WORDS[match[3].toLowerCase()] : "docx" };
  }

  return Object.freeze({ templateRequest });
});
