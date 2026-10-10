"use strict";

// "How do I register an LLC in Ohio?", "what does it cost to start a nonprofit in Texas?", "I want to set up my business in California": the steps, the state's own fees and the places to go, for a small or
// minority-owned business or a nonprofit in any of the 50 states and DC. This is a LIBRARY, not a filing service: Kyro tells the owner what the state asks for and what it costs, and the owner files.
//
// Every state figure comes from state-entities-data.js, and every record there was read from the state's own official page on its `checkedOn` date (the page is listed in the record). A figure the official page did not
// confirm is null in the data and the answer says so and points to the page; nothing here is filled in from memory. The general steps come from the SBA and IRS pages named in SOURCES. To update: read the
// official page again, change the record and its checkedOn, run the tests.
//
// stateEntityIntent(text) -> { kind: "llc" | "corporation" | "nonprofit" | "business", state: "OH" | null, focus: "steps" | "fees" } or null
// stateEntityAnswer(intent) -> { text, sources: [{ name, url }], topic, title } (with no state it gives the general steps and asks which state)

const DATA = require("./state-entities-data.js");
const FEDERAL = DATA.federal || {};
const STATES = DATA.states || [];
const BY_CODE = Object.freeze(Object.fromEntries(STATES.map(record => [record.code, record])));

const SOURCES = Object.freeze({
  sbaRegister: { name: "SBA: register your business", url: "https://www.sba.gov/business-guide/launch-your-business/register-your-business" },
  sbaStructure: { name: "SBA: choose a business structure", url: "https://www.sba.gov/business-guide/launch-your-business/choose-business-structure" },
  irsExempt: { name: "IRS: applying for tax-exempt status", url: "https://www.irs.gov/charities-non-profits/applying-for-tax-exempt-status" },
  irsEin: { name: "IRS: apply for an employer identification number (EIN)", url: "https://www.irs.gov/businesses/small-businesses-self-employed/apply-for-an-employer-identification-number-ein-online" }
});

const STATE_NAMES = Object.freeze(STATES.map(record => record.name));

// ---- wake word -------------------------------------------------------------------------------------------------------------------------------------------------------------------
// "Hey Kyro, show me how to ...", "Kyro, how do I ...", "OK Kyro ...": the name the person says to get the assistant's attention is not part of the question.
const WAKE = /^\s*(?:(?:hey|hi|hello|ok|okay|yo)[,.!]?\s+)?(?:kyro|nexus)\b[,.:!]?\s*/i;
function stripWakeWord(text) {
  const value = String(text || "");
  const stripped = value.replace(WAKE, "");
  return stripped.length ? stripped : value;
}

// ---- which state -----------------------------------------------------------------------------------------------------------------------------------------------------------------
// longest name first, so "West Virginia" is found before "Virginia" and "Washington, D.C." before "Washington"
const NAME_PATTERNS = STATES.map(record => {
  const base = record.name.toLowerCase().replace(/[.]/g, "");
  const words = base.split(/\s+/).join("\\s+");
  const extra = record.code === "DC" ? "|washington,?\\s+d\\.?\\s?c\\.?|d\\.\\s?c\\." : record.code === "NY" ? "|new\\s+york\\s+(?:state|city)" : "";
  return { code: record.code, length: base.length + (extra ? 100 : 0), pattern: new RegExp(`\\b(?:${words}${extra})(?![\\w])`, "i") };
}).sort((a, b) => b.length - a.length);

// the two-letter code is taken only in capitals after a place word ("in CA", "for TX", "Austin, TX"); lower-case "in or" / "in me" / "to hi" are ordinary words
const CODE_AFTER_PLACE_WORD = /\b(?:in|for|of|to|at|from)\s+([A-Z]{2})\b/g;
const CODE_AFTER_COMMA = /,\s*([A-Z]{2})\b/g;

function stateFromText(text) {
  const value = String(text || "");
  for (const entry of NAME_PATTERNS) if (entry.pattern.test(value)) return entry.code;
  for (const pattern of [CODE_AFTER_PLACE_WORD, CODE_AFTER_COMMA]) {
    pattern.lastIndex = 0;
    let match;
    while ((match = pattern.exec(value))) if (BY_CODE[match[1]]) return match[1];
  }
  return null;
}

// ---- which question --------------------------------------------------------------------------------------------------------------------------------------------------------------
const ASKS = /(?:[?]|^(?:please\s+|can you\s+|could you\s+)?(?:how|what|which|where|when|why|who|should|can|could|do|does|is|are|am|will|would|tell me|explain|help me|walk me through|show me|i need|i want|i'd like|i would like|i('| a)m (?:looking|trying|ready|planning|going)|give me|list|looking|steps|find (?:me|out))\b)/i;
const NOT_A_QUESTION = /^(?:please\s+)?(?:sold|bought|log|record|add|save|remind|draft|write|send|call|text|play|translate|export|convert|delete|forget)\b|\bworkspace\b/i;
const ACTION = /\b(?:register(?:ing|ed)?|form(?:ing)?|file|filing|set(?:ting)? up|start(?:ing)?|open(?:ing)?|establish(?:ing)?|incorporat\w*|creat(?:e|ing)|launch(?:ing)?|become|apply(?:ing)? for|organi[sz]e|make it official|make (?:my|the|our) \w+ (?:legal|official))\b/i;
const FEES = /\b(?:costs?|fees?|price|prices|pricing|how much|charges?|pay|renew\w*|annual (?:report|fee|tax)|franchise tax|requirements?|steps?|process|checklist|what do i need|what does it take)\b/i;
const FEE_FOCUS = /\b(?:costs?|fees?|price|prices|pricing|how much|charges?|renew\w*|franchise tax|annual (?:report|fee))\b/i;

const NONPROFIT = /\bnon-?profits?\b|\b501\s?\(?c\)?\s?\(?3\)?|\btax[- ]exempt\b|\bcharit(?:y|able) (?:organi[sz]ation|corporation)\b|\bfoundation\b/i;
const LLC = /\bllcs?\b|\blimited liability compan(?:y|ies)\b/i;
const CORPORATION = /\b(?:c|s)[- ]?corps?\b|\bcorporations?\b|\bincorporat\w*\b/i;
const BUSINESS = /\b(?:my|a|an|our|the|new) (?:small |new |own |startup |start-up )?(?:business(?:es)?|company|companies|start-?up|entity)\b|\bbusiness entity\b|\blegal entity\b/i;
const LEGAL_FORM = /\b(?:register\w*|form(?:ing)?|incorporat\w*|establish\w*|legal entity|business entity|make it official|make (?:my|the|our) \w+ (?:legal|official)|file (?:for|my|a|the))\b/i;

function stateEntityIntent(text) {
  const value = stripWakeWord(String(text || "")).replace(/\s+/g, " ").trim();
  if (!value || value.length > 300) return null;
  if (NOT_A_QUESTION.test(value) || !ASKS.test(value)) return null;
  const state = stateFromText(value);
  let kind = null;
  if (NONPROFIT.test(value)) kind = "nonprofit";
  else if (LLC.test(value)) kind = "llc";
  else if (CORPORATION.test(value)) kind = "corporation";
  else if (BUSINESS.test(value)) kind = "business";
  if (!kind) return null;
  const fees = FEES.test(value);
  const action = ACTION.test(value);
  if (kind === "business") {
    // "start a business in Ohio" is about setting it up in that state; without a state, "start a business" belongs to the general start-up steps and only "register / form / incorporate / legal entity" comes here
    if (!(LEGAL_FORM.test(value) || (state && (action || fees)))) return null;
  } else if (!(action || fees)) {
    return null;
  }
  return { kind, state, focus: FEE_FOCUS.test(value) ? "fees" : "steps" };
}

// ---- wording ---------------------------------------------------------------------------------------------------------------------------------------------------------------------
// The research notes are written in full for a reader; read aloud, only the first sentence (or clause) of a long note is used and the official page carries the rest. A note too long to cut cleanly is left out, never cut mid-sentence.
function brief(value, max = 240) {
  const text = typeof value === "string" ? value.replace(/\s*\([^()]*https?:[^()]*\)/g, "").replace(/\s+/g, " ").trim() : "";
  if (!text) return "";
  let out = text;
  if (text.length > max) {
    const cut = text.slice(0, max);
    const stop = Math.max(cut.lastIndexOf(". "), cut.lastIndexOf("; "));
    if (stop <= 15) return "";
    out = cut.slice(0, stop);
  }
  // a cut inside a parenthesis would leave it open: back up to before the "("
  while ((out.match(/\(/g) || []).length > (out.match(/\)/g) || []).length) out = out.slice(0, out.lastIndexOf("(")).trim();
  return out.replace(/[.\s]+$/, "");
}
// "Within 90 days ..." in the middle of a sentence reads "within 90 days ..."; an acronym or a name (FTB, March) is left alone only when it is not a plain sentence-start word
const lowerFirst = value => (/^(?:Within|Before|After|On|By|Every|Each|The|At|In|Annually|Biennially)\b/.test(value) ? value.charAt(0).toLowerCase() + value.slice(1) : value);
const firstUrl = value => (/https?:\/\/[^\s)"',;]+/.exec(String(value || "")) || [""])[0].replace(/[.]+$/, "");
const sentence = value => (brief(value) ? `${brief(value)}. ` : "");
function money(amount) {
  if (typeof amount !== "number" || !Number.isFinite(amount)) return null;
  return `$${Number.isInteger(amount) ? amount.toLocaleString("en-US") : amount.toFixed(2)}`;
}
const KIND_WORD = Object.freeze({ llc: "an LLC (limited liability company)", corporation: "a corporation", nonprofit: "a nonprofit corporation", business: "a business" });
const KIND_LABEL = Object.freeze({ llc: "LLC", corporation: "Corporation", nonprofit: "Nonprofit corporation" });
const CLOSING = "This is general information, not legal, tax or financial advice, and fees and rules change, so confirm on the official site before you file. I cannot file or apply for anything for you.";
const entityOf = (record, kind) => (kind === "llc" ? record.llc : kind === "corporation" ? record.corporation : record.nonprofit);

function feeSentence(kind, entity) {
  const label = KIND_LABEL[kind];
  const doc = brief(entity?.formationDocument, 90) || "the formation document";
  const price = money(entity?.filingFee);
  if (!price) return `${label}: ${doc}. I could not confirm the filing fee on a page I could read, so check the state's filing office.`;
  const rush = brief(entity?.expeditedFeeNote, 130);
  return `${label}: ${doc}, filing fee ${price}${rush && !/^not confirmed/i.test(rush) ? `. Faster processing: ${rush}` : ""}.`;
}

function annualSentence(entity) {
  const report = entity?.annualReport;
  if (!report || (!report.name && report.fee == null && !report.due)) return "";
  const name = brief(report.name, 120) || "annual report";
  const due = lowerFirst(brief(report.due, 130));
  const late = brief(report.lateFeeNote, 110);
  const taxLike = /\btax\b/i.test(report.name || "");
  const price = money(report.fee);
  const fee = report.fee === 0 ? " has no fee" : price ? ` costs ${price}` : taxLike ? "" : " (I could not confirm the fee)";
  return `Staying in good standing: the ${name}${fee}${due ? `, due ${due}` : ""}.${late ? ` ${late}.` : ""} `;
}

function addSource(list, name, url) {
  if (url && !list.some(source => source.url === url)) list.push({ name, url });
}

function einSentence() {
  return "Get your Employer Identification Number (EIN) from the IRS. It is free, at irs.gov/ein, and a site that charges for one is not the IRS.";
}

function boiSentence() {
  return FEDERAL.boi?.whatIsTheCurrentRuleForUSDomesticCompanies
    ? "Federal beneficial ownership reporting: FinCEN's page (updated 11 August 2026) says U.S. companies are exempt and no longer need to file BOI reports; check fincen.gov/boi for any change."
    : "";
}

function nonprofitFederal() {
  const ez = money(FEDERAL.form1023EZ?.userFee);
  const full = money(FEDERAL.form1023?.userFee);
  const fees = [ez && `Form 1023-EZ costs ${ez} (if you are eligible)`, full && `Form 1023 costs ${full}`].filter(Boolean);
  return {
    fees: fees.length ? `The IRS user fee: ${fees.join(", ")}.` : "The IRS user fee is on the IRS fee page.",
    apply: `Apply to the IRS for 501(c)(3) tax-exempt status on Form 1023-EZ or Form 1023, filed online at Pay.gov. ${fees.length ? `The IRS user fee: ${fees.join(", ")}.` : "The IRS user fee is on the IRS fee page."}`,
    annual: `Every year file a Form 990-series return with the IRS: ${(brief(FEDERAL.form990?.smallOrgNote, 200) || "organizations with gross receipts normally $50,000 or less file the 990-N e-Postcard, larger ones file Form 990").replace(/^IRS:\s*/i, "")}. Failing to file for three years in a row ends tax-exempt status.`
  };
}

function helpSentences(record) {
  const parts = [];
  const license = brief(record.businessLicenseNote, 230);
  if (license) parts.push(`Licences and permits: ${license}${/https?:\/\//.test(license) || !firstUrl(record.businessLicenseNote) ? "" : ` ${firstUrl(record.businessLicenseNote)}`}.`);
  const tax = record.stateTaxRegistration;
  if (tax?.url && !(license && license.includes(tax.url)) && !String(record.businessLicenseNote || "").includes(tax.url)) parts.push(`State taxes (sales tax, employer withholding, unemployment insurance): ${brief(tax.agency, 90) || "the state tax agency"}, ${tax.url}.`);
  const help = record.smallBusinessHelp;
  parts.push(help?.url
    ? `Free local help: ${brief(help.name, 110) || "the state's small business assistance office"}, ${help.url}. SBDC counsellors and SCORE mentors are free or low cost; find them by ZIP code at sba.gov/local-assistance.`
    : "Free local help: Small Business Development Centers and SCORE mentors, found by ZIP code at sba.gov/local-assistance.");
  return parts.join(" ");
}

const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
function formatDate(iso) {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(iso || ""));
  return match ? `${Number(match[3])} ${MONTHS[Number(match[2]) - 1]} ${match[1]}` : String(iso || "");
}

// ---- the answer ------------------------------------------------------------------------------------------------------------------------------------------------------------------
function generalAnswer(intent) {
  const sources = [SOURCES.sbaRegister, SOURCES.sbaStructure, SOURCES.irsEin];
  const nonprofit = intent.kind === "nonprofit";
  if (nonprofit) sources.push(SOURCES.irsExempt);
  const doc = nonprofit ? "articles of incorporation for a nonprofit corporation" : intent.kind === "corporation" ? "articles of incorporation" : intent.kind === "llc" ? "articles of organization" : "the formation document for your kind of business (articles of organization for an LLC, articles of incorporation for a corporation or nonprofit)";
  const text = `Here is how to set up ${KIND_WORD[intent.kind]}, in general. `
    + "1. Register with the state where you do business. For an LLC, a corporation or a nonprofit corporation that is usually the Secretary of State's office, though some states use a business bureau or agency; some let you file online and some need paper. "
    + "2. Appoint a registered agent in that state: the person or service that receives official papers for your company. You can be your own agent or use an agent service. "
    + "3. Check that your business name is allowed and not already taken in that state. "
    + `4. File ${doc} and pay the state fee. The SBA says registration costs are usually under $300, but they vary by state and structure. `
    + "5. Write your internal rules: an operating agreement for an LLC, bylaws for a corporation (resolutions for a nonprofit, the SBA says). The SBA recommends them even where the state does not require them. "
    + `6. ${einSentence()} `
    + (nonprofit ? `7. ${nonprofitFederal().apply} ` : "7. Some states ask for an initial report or a tax registration within 30 to 90 days of registering, so check your state's tax office. ")
    + "Fees, annual reports and extra taxes differ in every state. Tell me which state and I will give you its exact fees and steps, for example: \"how much does it cost to form an LLC in Ohio?\" or \"how do I start a nonprofit in Texas?\" ";
  return { topic: `state-entity:${intent.kind}:any`, title: "Setting up your business in your state", text: `${text}Sources: ${sources.map(source => source.name).join("; ")}. ${CLOSING}`, sources };
}

function stateAnswer(intent, record) {
  const sources = [];
  addSource(sources, `${brief(record.agency, 100) || record.name} (official)`, record.agencyUrl);
  const kinds = intent.kind === "business" ? ["llc", "corporation", "nonprofit"] : [intent.kind];
  const office = brief(record.agency, 130) || `${record.name}'s filing office`;
  const parts = [];
  const online = record.onlineFilingUrl && record.onlineFilingUrl !== record.agencyUrl ? ` File online at ${record.onlineFilingUrl}.` : "";

  for (const kind of kinds) {
    const entity = entityOf(record, kind);
    if (entity?.source) addSource(sources, `${record.name} ${kind === "llc" ? "LLC" : kind === "corporation" ? "corporation" : "nonprofit"} filing information (official)`, entity.source);
  }

  if (intent.kind === "business") {
    parts.push(`Setting up a business in ${record.name}: the filing office is ${office} (${record.agencyUrl}).${online}`);
    parts.push(`State fees at a glance. ${kinds.map(kind => feeSentence(kind, entityOf(record, kind))).join(" ")}`);
    for (const kind of kinds) {
      const line = annualSentence(entityOf(record, kind));
      if (line) parts.push(`${KIND_LABEL[kind]}: ${line.trim()}`);
    }
    const extra = sentence(record.llc?.otherStateTaxNote);
    if (extra) parts.push(`Extra state tax for LLCs: ${extra.trim()}`);
    parts.push(`Which one fits? An LLC and a corporation are for businesses that aim to earn a profit; a nonprofit corporation is for an organization with a charitable or public purpose that applies for tax-exempt status. Ask me "LLC or corporation" or "how do I start a nonprofit in ${record.name}" and I will go step by step.`);
    parts.push(`${sentence(record.registeredAgentNote)}${einSentence()}`);
    parts.push(helpSentences(record));
  } else {
    const kind = intent.kind;
    const entity = entityOf(record, kind);
    const noun = kind === "llc" ? "an LLC" : kind === "corporation" ? "a corporation" : "a nonprofit corporation";
    const publication = kind === "llc" ? brief(record.llc?.publicationRequirement, 300) : "";
    const extra = sentence(entity?.otherStateTaxNote);
    if (intent.focus === "fees") {
      parts.push(`What it costs to set up ${noun} in ${record.name}. The filing office is ${office} (${record.agencyUrl}).${online}`);
      parts.push(`${feeSentence(kind, entity)} ${annualSentence(entity)}`.trim());
      if (extra) parts.push(`Extra state tax: ${extra.trim()}`);
      if (publication) parts.push(`Publication: ${publication}.`);
      if (kind === "nonprofit") parts.push(`Federal: ${nonprofitFederal().fees}`);
      parts.push(`Other costs to plan for: a registered agent service if you hire one, local licences and permits, and any extra state taxes. The EIN from the IRS is free. Ask me "how do I set up ${noun} in ${record.name}" for the step-by-step.`);
    } else {
      parts.push(`Setting up ${noun} in ${record.name}. The filing office is ${office} (${record.agencyUrl}).${online}`);
      parts.push(`What it costs. ${feeSentence(kind, entity)} ${annualSentence(entity)}`.trim());
      if (extra) parts.push(`Extra state tax: ${extra.trim()}`);
      if (publication) parts.push(`Publication: ${publication}.`);
      const steps = [];
      steps.push(`Check that the name is available in ${record.name} and follows the state's rules for business names.`);
      // (a state's registered-agent note is sometimes written about LLCs only; it is not shown on a corporation's or nonprofit's steps)
      const agentNote = brief(record.registeredAgentNote, 340);
      steps.push(`Appoint a registered agent, the person or service that receives official papers for the company. ${kind !== "llc" && /\bLLCs?\b/.test(agentNote) && !/corporation|nonprofit/i.test(agentNote) ? "" : agentNote}`.trim());
      steps.push(`File the ${brief(entity?.formationDocument, 90) || (kind === "llc" ? "articles of organization" : "articles of incorporation")} and pay the filing fee.`);
      steps.push(kind === "llc"
        ? "Write an operating agreement. The SBA recommends one even where the state does not require it."
        : "Write your bylaws (the SBA calls a nonprofit's governing document its resolutions) and keep minutes of your first meetings. The SBA recommends them even where the state does not require them.");
      steps.push(einSentence());
      if (kind === "nonprofit") {
        const federal = nonprofitFederal();
        steps.push(federal.apply);
        const exempt = brief(entity?.stateTaxExemptionNote, 300);
        steps.push(exempt ? `State tax exemption: ${exempt}` : `State tax exemption: ask the ${record.name} tax agency whether your organization needs a separate state exemption, because federal tax-exempt status may not cover state taxes by itself`);
        const charity = entity?.charitableSolicitationRegistration;
        const charityText = [brief(charity?.agency, 110), brief(charity?.feeNote, 240)].filter(Boolean).join(": ");
        if (charityText) steps.push(`Before you ask the public for donations: ${charityText}${charity?.url ? ` (${charity.url})` : ""}`);
        steps.push(federal.annual);
      } else {
        const boi = boiSentence();
        if (boi) steps.push(boi);
      }
      parts.push(`The steps. ${steps.map((step, index) => `${index + 1}. ${step.replace(/[.\s]+$/, "")}.`).join(" ")}`);
      parts.push(helpSentences(record));
    }
  }
  addSource(sources, SOURCES.sbaRegister.name, SOURCES.sbaRegister.url);
  if (intent.kind === "nonprofit" || intent.kind === "business") addSource(sources, SOURCES.irsExempt.name, SOURCES.irsExempt.url);
  addSource(sources, SOURCES.irsEin.name, SOURCES.irsEin.url);
  const checked = record.checkedOn ? ` (state pages checked ${formatDate(record.checkedOn)})` : "";
  return {
    topic: `state-entity:${intent.kind}:${record.code}`,
    title: `${record.name}: setting up ${KIND_WORD[intent.kind]}`,
    text: `${parts.filter(Boolean).join(" ")} Sources: ${sources.map(source => source.name).join("; ")}${checked}. ${CLOSING}`,
    sources
  };
}

function stateEntityAnswer(intent) {
  if (!intent || !intent.kind) return null;
  const record = intent.state ? BY_CODE[intent.state] : null;
  return record ? stateAnswer(intent, record) : generalAnswer(intent);
}

module.exports = Object.freeze({ SOURCES, STATE_NAMES, stripWakeWord, stateFromText, stateEntityIntent, stateEntityAnswer, states: STATES, federal: FEDERAL });
