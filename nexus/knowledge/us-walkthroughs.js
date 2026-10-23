"use strict";

// Step-by-step walkthroughs for four United States processes in us-small-business.js: SBA 8(a), NMSDC certification, choosing among the certifications for a minority-owned business, and applying for a federal grant on
// Grants.gov. Like the California walkthroughs (california-walkthroughs.js), Kyro walks the person through ONE step at a time and the PERSON does each step; Kyro never applies, files or submits for them. The steps come
// from the same guide (us-small-business.js) and from the programmes' own pages, read again on CHECKED_ON; where a page lists something Kyro cannot read in full (the documents an application needs), the step sends the
// person to that list instead of listing it from memory.
//
// usWalkthrough(topicId) -> { id, title, checkedOn, steps: [{ title, text, gather: [], link: { name, url } | null }], sources: [{ name, url }] } | null     (topicId as in us-small-business.js: "8a", "nmsdc", "certification", "grants")
// usWalkTopic(text) -> a us-small-business topic id when the words ask to be walked through it ("walk me through the SBA 8(a) program"), else null

const { SOURCES } = require("./us-small-business.js");
const { walkTopic } = require("../../public/kyro-business-topics.js"); // (the words are shared with the page)

const CHECKED_ON = "19 October 2026";
const W = (term, means) => ({ term, means }); // (a word the person will meet in a step, in plain words: a step may carry done: "..." and words: [W(term, meaning)])
const link = key => ({ name: SOURCES[key].name, url: SOURCES[key].url });

const WALKTHROUGHS = Object.freeze({
  "8a": {
    title: "The SBA 8(a) Business Development program",
    sources: ["sba8a", "fr8a", "sbaCertPortal", "samUei"],
    steps: [
      { title: "Check that you fit", text: "The 8(a) program is for a small business, at least 51% owned and controlled by U.S. citizens who are socially and economically disadvantaged, that has not taken part in 8(a) before: a person can take part only once in their lifetime. The owner's personal net worth must be $850,000 or less, adjusted gross income $400,000 or less, and total assets $6.5 million or less. SBA also looks for good character and potential for success, such as having been in business for two years. It does not guarantee any contract.", gather: [], link: link("sba8a") },
      { title: "Know the rule on social disadvantage", text: "Since 10 September 2026, an individually owned applicant is no longer presumed socially disadvantaged because of race or ethnicity, and must show it with verifiable evidence. Firms already admitted are not affected. The federal rules (13 CFR Part 124) say who qualifies, and the Federal Register notice explains the change.", gather: ["Verifiable evidence of social disadvantage"], link: link("fr8a") },
      { title: "Find your main NAICS code", text: "A NAICS code names your kind of business. SBA asks you to identify your primary NAICS codes before you apply.", gather: ["Your primary NAICS code"], link: link("sba8a") },
      { title: "Register in SAM.gov", text: "Register your business in SAM.gov, the federal government's contracting registration, yourself. SAM.gov assigns your business its Unique Entity ID.", gather: [], link: link("samUei") },
      { title: "Try the questionnaire and get free help", text: "The SBA Certifications site has an eligibility questionnaire for a preliminary check, checklists, and an Application Tips for Success Guide. SBA also suggests meeting with a counselor at a local SBA district office or an APEX Accelerator first.", gather: [], link: link("sbaCertPortal") },
      { title: "Apply yourself", text: "Apply for 8(a) certification on the SBA Certifications site. It is your application: I cannot submit it for you. Share sensitive information only on the official, secure site. If the application is incomplete, SBA tells you in writing there; once it is complete, SBA has 90 days to decide. Certification lasts at most nine years: four years of development, then five of transition.", gather: [], link: link("sbaCertPortal") }
    ]
  },
  nmsdc: {
    title: "NMSDC Minority Business Enterprise (MBE) certification",
    sources: ["nmsdc", "nmsdcDefinition", "nmsdcProcess", "nmsdcCouncils"],
    steps: [
      { title: "Know what it is", text: "NMSDC, the National Minority Supplier Development Council, certifies Minority Business Enterprises. It describes MBE certification as ownership-based. It is a private programme, not a government one: it helps corporate buyers find qualified suppliers, and it does not award contracts or guarantee business.", gather: [], link: link("nmsdc") },
      { title: "Check that you fit", text: "NMSDC says a business is generally at least 51% owned, operated and controlled by U.S. citizens who belong to the minority groups it lists. Its page on the definition of an MBE has the exact criteria; read it there.", gather: [], link: link("nmsdcDefinition") },
      { title: "Find your regional council", text: "NMSDC's 23 regional councils certify businesses. Choose your state in NMSDC's directory to find yours.", gather: [], link: link("nmsdcCouncils") },
      { title: "Ask what your council needs", text: "Ask your regional council for the exact requirements, the documents and any fees. I cannot list them for you from memory, so read them there and gather what they ask for.", gather: ["The documents your regional council lists", "The fee, if your council charges one"], link: link("nmsdcProcess") },
      { title: "Apply yourself", text: "Start the application from NMSDC's certification process page. It is your application: I cannot submit it for you. If you are stuck, NMSDC's website has a way to contact its certification team.", gather: [], link: link("nmsdcProcess") }
    ]
  },
  certification: {
    title: "Choosing a certification for a minority-owned, women-owned, veteran-owned or other small business",
    sources: ["sbaCerts", "sbaCertPortal", "nmsdc", "fr8a"],
    steps: [
      { title: "Know there are three kinds", text: "Calling your business minority-owned is not a certification. There are three kinds: SBA programmes for federal contracting, NMSDC Minority Business Enterprise certification (a private programme that corporate buyers use), and state, city and transportation certifications, which differ by place.", gather: [], link: link("sbaCerts") },
      { title: "SBA programmes", text: "SBA runs 8(a) for socially and economically disadvantaged owners, Women-Owned Small Business (WOSB), HUBZone, and veteran-owned and service-disabled veteran-owned certification. You apply for them on the SBA Certifications site, which has checklists and pre-application guides. Women-owned certification benefits apply only to federal contracting. For HUBZone, check the HUBZone map for your principal office and your employees' homes, and know you must recertify every three years. Share sensitive information only on official, secure sites. For 8(a), ask me to walk you through the SBA 8(a) program.", gather: [], link: link("sbaCertPortal") },
      { title: "NMSDC certification", text: "NMSDC certification is ownership-based and is handled by NMSDC's regional councils. To go through it, ask me to walk you through NMSDC minority business certification.", gather: [], link: link("nmsdc") },
      { title: "State, city and transportation", text: "These differ by place, so check your state's business or transportation office. In California, ask me to walk you through California small business certification, or DBE certification in California.", gather: [], link: link("sbaCerts") },
      { title: "Check the current rules", text: "The rules for showing disadvantage have changed recently, so check each programme's current requirements before you apply. Free help with this is available from SBA district offices and APEX Accelerators, and from SBDCs and SCORE mentors. Each application is your own to make: I cannot submit one for you.", gather: [], link: link("fr8a") }
    ]
  },
  grants: {
    title: "Applying for a federal grant on Grants.gov",
    sources: ["grants", "grantsQuickStart", "samUei"],
    steps: [
      { title: "Find out whether you can apply", text: "Federal agencies post their grant opportunities at Grants.gov, and whether a business can apply depends on each opportunity's own eligibility section, so read it before you spend time on an application. Grants.gov's Search Grants page has an Eligibility filter. Ask me what federal grants are open right now for small businesses or for nonprofits and I will list them. Be careful with anyone who charges a fee to find you a grant or to guarantee one.", gather: [], link: link("grants") },
      { title: "Start your SAM.gov registration early", text: "Your organization must be registered with SAM.gov, which assigns its Unique Entity ID. Grants.gov says to allow up to 10 business days if you already have your validated address and Tax ID. Use the same email address for your organization's electronic business point of contact in SAM.gov that you will use on Grants.gov.", gather: ["Your organization's validated address", "Your Tax ID", "The email address for your electronic business point of contact"], link: link("samUei") },
      { title: "Register with Grants.gov", text: "You also need a Login.gov account. On Grants.gov, choose Register and follow the instructions. Enter the temporary code emailed to you, choose Add Organizational Profile, enter your Unique Entity ID from SAM.gov, name the profile and save it. Do this yourself: I cannot register for you.", gather: ["A Login.gov account", "Your Unique Entity ID"], link: link("grantsQuickStart") },
      { title: "Find and read the opportunity", text: "Use Search Grants, or enter an opportunity number you already have. Read the notice of funding opportunity all the way through: it may have special file-naming instructions for what you upload, and file names should be 50 characters or fewer.", gather: [], link: link("grantsQuickStart") },
      { title: "Make a workspace and fill in the forms", text: "Select the opportunity, choose Apply, name your application and choose Create Workspace. You must create a different workspace for each grant application. Add the people who will work on it on the Participants tab, complete the forms online or offline, and use Check for Errors or Check Application before you submit.", gather: [], link: link("grantsQuickStart") },
      { title: "Submit it yourself, well before the deadline", text: "Sign and Submit needs a person with the Authorized Organization Representative role or a similar one, a deadline that has not passed, and an active SAM.gov registration. Grants.gov says to submit well before the deadline in case of a submission error. Afterwards, use Check Application Status to see whether the agency received it. It is your application: I cannot submit it for you.", gather: [], link: link("grantsQuickStart") }
    ]
  }
});

function usWalkthrough(topicId) {
  const def = WALKTHROUGHS[topicId];
  if (!def) return null;
  return { id: `us-${topicId}`, title: def.title, checkedOn: CHECKED_ON, steps: def.steps.map(step => ({ title: step.title, text: step.text, gather: step.gather.slice(), done: step.done || null, words: (step.words || []).map(word => ({ term: word.term, means: word.means })), link: step.link })), sources: def.sources.map(key => link(key)) };
}

function usWalkTopic(text) {
  const id = walkTopic(text);
  return id && WALKTHROUGHS[id] ? id : null;
}

module.exports = Object.freeze({ WALKTHROUGHS, CHECKED_ON, usWalkthrough, usWalkTopic });
