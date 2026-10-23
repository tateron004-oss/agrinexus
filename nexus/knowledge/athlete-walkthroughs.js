"use strict";

// Step-by-step walkthroughs for six processes in the athlete guide (nexus/knowledge/athlete-guide.js): registering with Athletics Kenya, getting a US student visa as an athlete, filing whereabouts, checking a supplement, choosing a sports agent
// and registering with the NCAA Eligibility Center. Like the other walkthroughs, Kyro shows ONE step at a time with its official page and reads it out, and the PERSON does each step; Kyro never registers, applies, files or signs for them. Every
// step is a fact the guide already states from the official pages it cites (read on the guide's CHECKED_ON date); a step that is Kyro's own working practice says so. What the pages do not say is not here.
//
// athleteWalkthrough(id) -> { id, title, checkedOn, steps: [{ title, text, gather: [], link: { name, url } | null }], sources: [{ name, url }] } | null
// WALK_OF_TOPIC: the guide's topic -> the walkthrough       athleteWalkthroughFor(text) -> the walkthrough the words ask for ("walk me through registering with Athletics Kenya"), or null

const { SOURCES, CHECKED_ON } = require("./athlete-guide.js");
const { athleteTopic } = require("../../public/kyro-athlete-topics.js");

const link = key => ({ name: SOURCES[key].name, url: SOURCES[key].url });
const S = (title, text, gather, key, done, words) => ({ title, text, gather, key: key || null, done: done || null, words: Array.isArray(words) ? words : [] });
const W = (term, means) => ({ term, means });
const OWN = "This step is Kyro's own working practice, not an official page. ";

const WALKTHROUGHS = Object.freeze({
  "athletics-kenya": {
    title: "Registering with Athletics Kenya",
    topic: "athlete-kenya-registration", phrase: "registering with Athletics Kenya",
    steps: [
      S("Gather your identity papers", "Athletics Kenya's July 2024 notice says an athlete over 18 needs a valid government ID, and one under 18 needs the original birth certificate. A passport is strongly recommended.", ["A valid government ID, or an original birth certificate if you are under 18", "A passport, if you have one"], "akRegistration"),
      S("Gather your results", "To register you give your results from a World Athletics, Athletics Kenya or other national-federation sanctioned event.", ["Your results from sanctioned events"], "akRegistration"),
      S("Register and have your photo taken", "A recent passport photo is taken when you register. The offices are at Riadha House, Aerodrome Road, Nairobi West, and Daima Towers, 21st Floor, Eldoret, and the email is registration@athleticskenya.or.ke. The notice mentions no registration fee.", ["Your documents"], "akRegistration"),
      S("Check your confirmation", "After registering you get a confirmation email and a personal dashboard. Keeping your details correct is your responsibility.", ["Your email address"], "akRegistration"),
      S("Know why it matters", "The notice says that from 1 January 2025 all Athletics Kenya services are exclusively available to registered athletes, including support letters for visas, release and passports.", ["Nothing to gather"], "akRegistration"),
      S("Ask about Riadha Connect", "In July 2026 Athletics Kenya announced Riadha Connect, a single national system for athlete registration, support personnel, competitions, training camps, visa help and a national database. The pages do not say whether it has changed the 2024 steps, so confirm with Athletics Kenya.", ["Your questions for Athletics Kenya"], "akRiadha")
    ]
  },
  "us-student-visa": {
    title: "Getting a US student visa as an athlete",
    topic: "athlete-abroad-visa", phrase: "getting a US student visa as an athlete",
    steps: [
      S("Get accepted by an approved school", "The State Department's student-visa page says the school must be approved by the Student and Exchange Visitor Program, and issues a Form I-20 after you are accepted.", ["Your acceptance and the school's international office contact"], "stateStudentVisa"),
      S("Pay the SEVIS fee", "Homeland Security's Study in the States page says students with citizenship or birth in Kenya or Nigeria must pay the SEVIS fee by money order, Western Union Quick Pay or a certified check drawn on a US bank, though that page is dated June 2023. I could not read the fee amount, so ask the school's international office.", ["Your I-20"], "sevpSevisFee"),
      S("Complete the DS-160 form", "You complete the online DS-160 form. " + OWN + "Answer it carefully and keep a copy of the confirmation page.", ["Your I-20 and passport"], "stateStudentVisa"),
      S("Pay the visa application fee", "The visa application fee is $185 and non-refundable, with a further issuance fee that may apply depending on nationality.", ["$185", "A way to pay as the embassy's instructions say"], "stateVisaFees"),
      S("Attend the visa interview", "You attend a visa interview. I could not read any page giving visa wait times, or EducationUSA's pages, so ask the school's international office and an EducationUSA adviser.", ["Your passport, I-20 and DS-160 confirmation"], "stateStudentVisa"),
      S("Watch the dates", "A student visa can be issued up to 365 days before the programme starts, and you cannot enter more than 30 days before it. A rule effective 15 September 2026 ended duration of status: students are admitted for the length of the programme, not more than four years, plus 30 days to leave.", ["The programme start date"], "sevpFixedAdmission"),
      S("Know the rules on study and work", "An undergraduate on an F-1 visa must take at least 12 credit hours a term, and may work on campus up to 20 hours a week while classes are in session. Off-campus work is open only after a full academic year and in cases of economic hardship, with approvals.", ["Your course load"], "sevpWorking")
    ]
  },
  "whereabouts": {
    title: "Filing your whereabouts",
    topic: "athlete-whereabouts", phrase: "filing my whereabouts as an athlete",
    steps: [
      S("Know who must file", "The Athletics Integrity Unit says athletes in World Athletics' Registered Testing Pool must file. The pages say athletes at the highest level may be selected for the pool and give no criteria.", ["Your notice of selection, if you have one"], "aiuRtp"),
      S("Gather what you must give", "You must give your email and phone number, a full overnight address for every day of the quarter, the full address and times of regular activities such as training, and the competition schedule for the quarter.", ["Your addresses", "Your training times", "Your competition schedule"], "aiuWhereabouts"),
      S("Choose a 60-minute slot for every day", "For each day, give one 60-minute slot between 5 a.m. and 11 p.m. with a place where you can be tested.", ["A slot and a place for each day"], "aiuWhereabouts"),
      S("File through ADAMS", "You file through WADA's ADAMS system, and you are directly responsible for keeping it up to date. The pages do not define the quarters or give filing deadlines, so ask the Unit.", ["Your ADAMS login"], "aiuWhereabouts"),
      S("Know what counts against you", "A filing failure is not filing by the deadline, not updating, or filing incomplete information. A missed test is not being at the stated place in the 60-minute slot.", ["Nothing to gather"], "aiuWhereaboutsFailures"),
      S("Know the consequence", "Any combination of three such failures within 12 months is an anti-doping rule violation, with two years of ineligibility, which can be reduced to a minimum of one year depending on fault. For questions the Unit lists whereabouts@athleticsintegrity.org.", ["Nothing to gather"], "aiuWhereaboutsFailures")
    ]
  },
  "check-a-supplement": {
    title: "Checking a supplement or a medicine as an athlete",
    topic: "athlete-supplements", phrase: "checking a supplement as an athlete",
    steps: [
      S("Remember who is responsible", "USADA says athletes under its rules are responsible for what is in and on their bodies, whatever the intent, even when a substance comes from a contaminated supplement.", ["Nothing to gather"], "usadaSupplements"),
      S("Know that labels cannot be trusted", "USADA says supplements are regulated only after they are sold, some are contaminated or spiked with banned substances, and no supplement is risk-free.", ["The product's label"], "usadaSupplements"),
      S("If you use one, look for third-party certification", "USADA recommends only third-party certified products and currently names NSF Certified for Sport. Check the batch number, because some bottles showed the logo for a batch that was never certified.", ["The bottle and its batch number"], "usadaLogos"),
      S("Check a medicine on Global DRO", "Global DRO shows whether a medicine is prohibited, based on the WADA list, but it holds no information on supplements.", ["The medicine's name"], "globalDro"),
      S("Call USADA's Drug Reference Line if you are unsure", "USADA's Drug Reference Line is (719) 785-2000, option 2, Monday to Friday, 8 a.m. to 5 p.m. Mountain Time.", ["Your phone"], "usadaSupplements"),
      S("If it is prohibited, ask about an exemption", "A prohibited medicine may be allowed with a therapeutic use exemption. USADA says a request should go in at least 30 days before planned use, and WADA's page says athletes apply to their anti-doping organization, not to WADA. USADA and the NCAA do not recognize each other's exemptions, so a college athlete should ask the athletic department's medical staff. I cannot tell you whether a product or medicine is allowed for you.", ["Your doctor's letter"], "usadaTue")
    ]
  },
  "choose-an-agent": {
    title: "Choosing a sports agent",
    topic: "athlete-agent", phrase: "choosing a sports agent",
    steps: [
      S("Talk to your school's compliance office first", "Before you sign, or even agree to representation, ask your school's compliance office. For what signing with an agent does to a college athlete's eligibility, ask me about the NCAA's agent rule.", ["The compliance office's contact"], "ncaaAgentCertification"),
      S("Know that your state regulates agents", "Most states regulate agents under a Uniform Athlete Agents Act. I could not read the Act's text, so I will not state what it requires of an agent's contract or of notice to the school; your state's Secretary of State can tell you.", ["Your state's Secretary of State contact"], "uniformLawAgents"),
      S("Check that the agent is registered", "States run the registration. For example, Texas requires an agent to get a certificate from its Secretary of State before recruiting, and Alabama has a listing of registered agents.", ["The agent's full name"], "texasAgents"),
      S("Know what an agent may not do", "The federal Sports Agent Responsibility and Trust Act says an agent may not recruit a student athlete with false information, false promises or anything of value before a contract is signed.", ["Nothing to gather"], "ftcSparta"),
      S("For professionals, check the players' union", "The NBA players' union says it certifies and regulates every agent who represents NBA players, and the NFL players' union has an agent search and a disciplinary summary. The MLB players' union says an agent must complete an application, pay a $2,500 fee, pass a background investigation and a written exam, and be designated by a player.", ["The agent's name"], "nbpaAgents"),
      S("Read the contract with someone you trust", OWN + "Do not sign the day you first see it. Ask a lawyer who knows sport, or your compliance office, to read it with you.", ["The contract"], null)
    ]
  },
  "ncaa-eligibility": {
    title: "Registering with the NCAA Eligibility Center",
    topic: "athlete-eligibility", phrase: "registering with the NCAA Eligibility Center",
    steps: [
      S("Find out which division you are aiming for", "A Division I or II prospect, recruit or walk-on needs an academic and athletics certification account with the Eligibility Center. Division III schools set their own standards, and its athletes should register to get an NCAA ID.", ["The divisions of the schools you like"], "ncaaRegister"),
      S("Create your account", "Register on the NCAA's Eligibility Center page.", ["Your email and ID details"], "ncaaRegister"),
      S("Pay the fee, or ask for a waiver", "The NCAA's page lists the athletics certification fee as $85, with a fee waiver available.", ["$85, or the waiver paperwork"], "ncaaRegister"),
      S("Plan your core courses", "For Division I the NCAA requires 16 core courses, with 10 done before the seventh semester, and a core GPA of at least 2.3. For Division II it requires 16 core courses and a 2.2.", ["Your transcript"], "ncaaDivisionI"),
      S("Know the clock", "In Divisions I and II, an athlete who enters college no later than the academic year after the 19th birthday generally gets up to five years, with the clock running continuously once it starts.", ["Your birth date and school years"], "ncaaAgeRules"),
      S("Understand scholarships", "Coaches award scholarships, they are typically year to year and renewal is not guaranteed, and a school that plans to reduce or not renew must notify the student in writing by July 1. For the NAIA, which has its own rules, ask me about the NAIA.", ["Nothing to gather"], "ncaaScholarships")
    ]
  }
});

function athleteWalkthrough(id) {
  const def = WALKTHROUGHS[id];
  if (!def) return null;
  const keys = [...new Set(def.steps.map(step => step.key).filter(Boolean))];
  return {
    id: `athlete-${id}`, title: def.title, checkedOn: CHECKED_ON,
    steps: def.steps.map(step => ({ title: step.title, text: step.text, gather: step.gather.slice(), done: step.done || null, words: (step.words || []).map(word => ({ term: word.term, means: word.means })), link: step.key ? link(step.key) : null })),
    sources: keys.map(key => link(key))
  };
}

const WALK_OF_TOPIC = Object.freeze(Object.fromEntries(Object.entries(WALKTHROUGHS).map(([id, def]) => [def.topic, id])));
const PHRASE_OF_WALK = Object.freeze(Object.fromEntries(Object.entries(WALKTHROUGHS).map(([id, def]) => [id, def.phrase])));
const PHRASE_OF_TOPIC = Object.freeze(Object.fromEntries(Object.entries(WALKTHROUGHS).map(([id, def]) => [def.topic, def.phrase])));

function athleteWalkthroughFor(text) {
  const topic = athleteTopic(text);
  const id = topic ? WALK_OF_TOPIC[topic] : null;
  return id ? athleteWalkthrough(id) : null;
}

module.exports = Object.freeze({ WALKTHROUGHS, WALK_OF_TOPIC, PHRASE_OF_WALK, PHRASE_OF_TOPIC, athleteWalkthrough, athleteWalkthroughFor });
