"use strict";

// Live lists from two free United States government feeds that need no key and charge nothing per lookup: the open federal grants on Grants.gov, and the newest notices and rules on the Federal Register. They give Kyro a real-time,
// sourced answer to "what federal grants are open right now for nonprofits?" and "what is the latest SBA notice?" without a paid web search. Each item is a real listing with its own web address; nothing here is generated.
//
//   feedRequest(text) -> { kind: "grants", audience, keyword } | { kind: "rules", agency, term } | null      (only a request for what is OPEN or LATEST now: "how do I find grants" stays with the checked guide)
//   createLiveFeeds({ fetchImpl, now, ttlMs }) -> { grants({ keyword, audience, rows }), rules({ term, agency, rows }) }      (a saved copy is kept for 30 minutes, so the same list costs the feed nothing twice)
//   grantsAnswer(result, request) / rulesAnswer(result, request) -> { text, sources: [{ name, url }] }

const GRANTS_API = "https://api.grants.gov/v1/api/search2";
const GRANTS_PAGE = "https://www.grants.gov/search-grants";
const FR_API = "https://www.federalregister.gov/api/v1/documents.json";
const FR_HOME = "https://www.federalregister.gov/";

// The Grants.gov eligibility codes for the audiences people ask about.
const AUDIENCES = Object.freeze({
  "small business": { code: "23", label: "small businesses" },
  nonprofit: { code: "12|13", label: "nonprofits" },
  individual: { code: "21", label: "individuals" }
});

const AGENCIES = Object.freeze({
  sba: { slug: "small-business-administration", label: "the Small Business Administration" },
  irs: { slug: "internal-revenue-service", label: "the Internal Revenue Service" }
});

const ASKS = /(?:[?]|^(?:please\s+|kyro,?\s+)?(?:what|which|show|list|find|are there|is there|any|give|tell|look up|search|get|pull up|i (?:need|want|am looking|'m looking)))/i;
const GRANTS_NOW = /\b(?:open|current|available|latest|newest|new|upcoming|posted|live|right now|this week|today)\b[^.?!]{0,40}\bgrants?\b|\bgrants?\b[^.?!]{0,30}\b(?:open|available|posted|right now|this week|today)\b|\bfederal grants?\b/i;
const RULES_NOW = /\b(?:latest|newest|new|recent|current|any)\b[^.?!]{0,30}\b(?:sba |irs |federal )?(?:rules?|regulations?|notices?|rulemakings?|federal register)\b|\bfederal register\b/i;
const NOT_STATIC = /^(?:how do i|how can i|where do i|where can i|what is a|what are grants)\b/i;

function feedRequest(text) {
  const said = String(text || "").trim();
  if (!said || said.length > 220 || !ASKS.test(said)) return null;
  if (RULES_NOW.test(said) && /\b(?:sba|small business administration|irs|internal revenue|federal register|rules?|regulations?|notices?)\b/i.test(said)) {
    const agency = /\birs\b|internal revenue/i.test(said) ? "irs" : "sba";
    const term = said.replace(/\b(?:what|which|show|list|find|are|is|there|any|give|me|tell|look up|search|get|pull up|the|latest|newest|new|recent|current|sba|irs|small business administration|internal revenue service|federal register|rules?|regulations?|notices?|rulemakings?|from|about|on|for|in|please|kyro)\b/gi, " ").replace(/[^\p{L}\p{N}\s-]/gu, " ").replace(/\s+/g, " ").trim();
    return { kind: "rules", agency, term: term.length >= 3 ? term : "" };
  }
  if (GRANTS_NOW.test(said) && !NOT_STATIC.test(said)) {
    const audience = /\bnon-?profits?|charit\w*|501\s?\(?c\)?\s?\(?3\)?\b/i.test(said) ? "nonprofit" : /\bsmall business(?:es)?|start-?ups?|entrepreneurs?|\bbusiness(?:es)?\b/i.test(said) ? "small business" : /\bindividuals?\b/i.test(said) ? "individual" : "";
    // what is left after the request words and the audience is the subject ("clean energy", "agriculture"); nothing left means all of them
    const keyword = said.replace(/\b(?:what|which|show|list|find|are|is|there|any|give|me|tell|look up|search|get|pull up|the|open|current|available|latest|newest|new|upcoming|posted|live|right now|this week|today|federal|grants?|opportunit\w+|for|to|in|on|about|with|that|i|can|apply|small business(?:es)?|start-?ups?|entrepreneurs?|business(?:es)?|non-?profits?|charit\w+|individuals?|please|kyro|a|an|of|and|or|my|our)\b/gi, " ").replace(/[^\p{L}\p{N}\s-]/gu, " ").replace(/\s+/g, " ").trim();
    return { kind: "grants", audience, keyword: keyword.length >= 3 ? keyword.slice(0, 80) : "" };
  }
  return null;
}

const decode = text => String(text || "").replace(/&amp;/g, "&").replace(/&ndash;/g, "-").replace(/&mdash;/g, "-").replace(/&quot;/g, "\"").replace(/&#39;|&rsquo;|&lsquo;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&nbsp;/g, " ").replace(/\s+/g, " ").trim();

function createLiveFeeds({ fetchImpl = (...args) => fetch(...args), now = () => Date.now(), ttlMs = 30 * 60000, timeoutMs = 9000 } = {}) {
  const saved = new Map();
  const keep = (key, run) => {
    const hit = saved.get(key);
    if (hit && now() - hit.at < ttlMs) return Promise.resolve({ ...hit.value, fromSavedCopy: true });
    return run().then(value => { saved.delete(key); saved.set(key, { at: now(), value }); while (saved.size > 100) saved.delete(saved.keys().next().value); return value; });
  };
  const timed = async (url, options = {}) => {
    const controller = new AbortController(); const timer = setTimeout(() => controller.abort(), timeoutMs);
    try { const response = await fetchImpl(url, { ...options, signal: controller.signal }); if (!response.ok) throw new Error(`the feed answered ${response.status}`); return await response.json(); } finally { clearTimeout(timer); }
  };
  return {
    grants({ keyword = "", audience = "", rows = 5 } = {}) {
      const key = `grants|${audience}|${String(keyword).toLowerCase()}|${rows}`;
      return keep(key, async () => {
        const body = { keyword: String(keyword || ""), oppStatuses: "posted", sortBy: "openDate|desc", rows: Math.min(10, Math.max(1, rows)), startRecordNum: 0, ...(AUDIENCES[audience] ? { eligibilities: AUDIENCES[audience].code } : {}) };
        const payload = await timed(GRANTS_API, { method: "POST", headers: { "content-type": "application/json", accept: "application/json" }, body: JSON.stringify(body) });
        if (payload?.errorcode !== 0 || !payload.data) throw new Error("the grants feed did not answer");
        const items = (payload.data.oppHits || []).slice(0, body.rows).map(hit => ({ id: String(hit.id), number: decode(hit.number), title: decode(hit.title), agency: decode(hit.agency), openDate: String(hit.openDate || ""), closeDate: String(hit.closeDate || ""), url: `https://www.grants.gov/search-results-detail/${encodeURIComponent(String(hit.id))}` })).filter(item => item.id && item.title);
        return { hitCount: Number(payload.data.hitCount) || items.length, items, readAt: new Date(now()).toISOString() };
      });
    },
    rules({ term = "", agency = "sba", rows = 5 } = {}) {
      const slug = (AGENCIES[agency] || AGENCIES.sba).slug;
      const key = `rules|${slug}|${String(term).toLowerCase()}|${rows}`;
      return keep(key, async () => {
        const url = new URL(FR_API);
        url.searchParams.set("per_page", String(Math.min(10, Math.max(1, rows)))); url.searchParams.set("order", "newest");
        url.searchParams.append("conditions[agencies][]", slug);
        if (term) url.searchParams.set("conditions[term]", term);
        for (const field of ["title", "type", "publication_date", "html_url", "abstract"]) url.searchParams.append("fields[]", field);
        const payload = await timed(url.toString(), { headers: { accept: "application/json" } });
        const items = (payload.results || []).slice(0, rows).map(item => ({ title: decode(item.title), type: decode(item.type), date: String(item.publication_date || ""), abstract: decode(item.abstract).slice(0, 220), url: String(item.html_url || "") })).filter(item => item.title && /^https:\/\//.test(item.url));
        return { total: Number(payload.count) || items.length, items, readAt: new Date(now()).toISOString() };
      });
    }
  };
}

const CLOSING = "I cannot apply for you.";

function grantsAnswer(result, request = {}) {
  const who = AUDIENCES[request.audience] ? ` open to ${AUDIENCES[request.audience].label}` : "";
  const about = request.keyword ? ` about "${request.keyword}"` : "";
  const sources = [{ name: "Grants.gov: search federal grants", url: GRANTS_PAGE }];
  if (!result.items.length) return { text: `I found no federal grants posted on Grants.gov right now${who}${about}. Try fewer or different words, or search on Grants.gov yourself. ${CLOSING}`, sources };
  const lines = result.items.map((item, index) => `${index + 1}. ${item.title} (${item.agency}), opened ${item.openDate}${item.closeDate ? `, closes ${item.closeDate}` : ", no closing date listed"}.`);
  for (const item of result.items) sources.push({ name: `${item.title.slice(0, 90)} (${item.number || item.id})`, url: item.url });
  const readNote = result.fromSavedCopy ? "read a little while ago" : "read just now";
  return { text: `Here are the newest federal grants posted on Grants.gov${who}${about}: ${lines.join(" ")} There are ${result.hitCount} posted in all. Most federal grants go to organizations such as nonprofits, governments and research institutions, so read each listing's eligibility before you spend time on it. Sources: Grants.gov (${readNote}). This is general information, not legal, tax or financial advice. ${CLOSING}`, sources };
}

function rulesAnswer(result, request = {}) {
  const agency = (AGENCIES[request.agency] || AGENCIES.sba).label;
  const about = request.term ? ` about "${request.term}"` : "";
  const sources = [{ name: "Federal Register", url: FR_HOME }];
  if (!result.items.length) return { text: `I found no recent Federal Register notices or rules from ${agency}${about}. You can search the Federal Register yourself. ${CLOSING}`, sources };
  const lines = result.items.map((item, index) => `${index + 1}. ${item.title} (${item.type}, ${item.date}).${item.abstract ? ` ${item.abstract}` : ""}`);
  for (const item of result.items) sources.push({ name: `${item.title.slice(0, 90)} (${item.date})`, url: item.url });
  const readNote = result.fromSavedCopy ? "read a little while ago" : "read just now";
  return { text: `Here are the newest Federal Register notices and rules from ${agency}${about}: ${lines.join(" ")} Sources: Federal Register (${readNote}). This is general information, not legal, tax or financial advice, and rules change, so confirm on the official site. ${CLOSING}`, sources };
}

module.exports = Object.freeze({ feedRequest, createLiveFeeds, grantsAnswer, rulesAnswer, AUDIENCES });
