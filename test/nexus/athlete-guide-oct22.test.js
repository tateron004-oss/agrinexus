"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const matcher = require("../../public/kyro-athlete-topics.js");
const guide = require("../../nexus/knowledge/athlete-guide.js");
const { OpenEndedPlanner } = require("../../nexus/brain/planner.js");
const { collectSources } = require("../../scripts/check-guide-sources.js");

// A checked guide for athletes, from a school team to a professional. Every figure and rule was read from an official page loaded on 22 October 2026 and is said in the page's own terms; what a page does not say, the answer says it does
// not say. Found by asking the live Kyro an athlete's real questions: it answered a rule or a safety question from the voice model's memory with no sources, and failed one outright ("help me build my personal brand as an athlete").
const app = fs.readFileSync(path.join(__dirname, "../../public/app.js"), "utf8");
const server = fs.readFileSync(path.join(__dirname, "../../server.js"), "utf8");
const ALL = Object.keys(guide.TOPICS);

test("which questions get which topic", () => {
  const yes = [
    ["What can you do for athletes?", "athlete-overview"], ["How can you help a student athlete?", "athlete-overview"],
    ["What should I eat before and after a hard training session?", "athlete-nutrition"], ["What should a soccer player drink during a tournament?", "athlete-nutrition"],
    ["How do I know if I am not eating enough for my training?", "athlete-energy"], ["What is RED-S?", "athlete-energy"], ["What are the signs of an eating disorder in a wrestler?", "athlete-energy"],
    ["Is creatine allowed for college athletes?", "athlete-supplements"], ["Can I take a pre-workout supplement and still pass a drug test?", "athlete-supplements"], ["What is a therapeutic use exemption?", "athlete-supplements"], ["How do I check a medicine on Global DRO?", "athlete-supplements"],
    ["How much should a teenager lift?", "athlete-training"], ["How many days a week should a high school football player do strength training?", "athlete-training"],
    ["How much sleep and recovery does a college athlete need?", "athlete-recovery"], ["My hamstring tightened up during sprints, what should I do?", "athlete-recovery"], ["How many rest days should a young athlete take?", "athlete-recovery"],
    ["What is a concussion and when can an athlete return to play?", "athlete-concussion"], ["What are the signs of a concussion in a football player?", "athlete-concussion"],
    ["How do I stay safe running in the heat?", "athlete-heat"], ["What are the signs of heat exhaustion at football practice?", "athlete-heat"],
    ["I am a high school athlete and the pressure is getting to me", "athlete-mental"], ["How do I deal with performance anxiety in my sport?", "athlete-mental"],
    ["How do I report a coach who touches players inappropriately?", "athlete-safesport"], ["What is SafeSport?", "athlete-safesport"],
    ["What is the Eligibility Center?", "athlete-eligibility"], ["How do I get recruited for college basketball?", "athlete-eligibility"], ["How does a college athletic scholarship work?", "athlete-eligibility"],
    ["I am a college athlete, can I take a sponsorship deal?", "athlete-nil"], ["What does the NCAA say about NIL?", "athlete-nil"],
    ["How do I choose a sports agent and what should be in the contract?", "athlete-agent"], ["Does an athlete agent have to be registered?", "athlete-agent"],
    ["I am a pro athlete, how do taxes work when I play games in other states?", "athlete-taxes"], ["Do I owe taxes on my scholarship?", "athlete-taxes"], ["Do college athletes pay tax on NIL money?", "athlete-taxes"],
    ["Help me build my personal brand as an athlete", "athlete-brand"], ["Do I have to disclose a paid partnership on Instagram as an athlete?", "athlete-brand"], ["How do I trademark my nickname as a pro athlete?", "athlete-business"],
    ["I want to start a training academy for young athletes. Where do I start?", "athlete-business"],
    ["I manage a youth soccer club. How do I handle registration and fees?", "athlete-club"], ["Does a youth soccer league need to be a nonprofit?", "athlete-club"],
    ["What happens to my money and career after I stop playing?", "athlete-money"], ["How should an athlete handle a big signing bonus?", "athlete-money"],
    // the second pass: the prohibited list, the NAIA, amateurism, the House settlement, the NCAA's agent rule, waivers and league pensions
    ["What is on the WADA prohibited list?", "athlete-prohibited"], ["Is CBD allowed for athletes?", "athlete-prohibited"], ["Is marijuana banned in sport?", "athlete-prohibited"], ["Is a cortisone injection prohibited in competition?", "athlete-prohibited"],
    ["How much does the NAIA eligibility center cost?", "athlete-naia"], ["What GPA do I need for the NAIA?", "athlete-naia"], ["Does the NAIA give athletic scholarships?", "athlete-naia"],
    ["What makes a college athlete lose amateur status?", "athlete-amateurism"], ["How much prize money can a college athlete keep?", "athlete-amateurism"], ["If I enter the NBA draft can I still play college basketball?", "athlete-amateurism"],
    ["What is the House settlement?", "athlete-house"], ["How does NIL Go work?", "athlete-house"], ["What is the revenue sharing cap for college athletes?", "athlete-house"],
    ["Can I sign with an agent and keep playing college football?", "athlete-agent-eligibility"], ["Does an oral agreement with an agent cost a college athlete eligibility?", "athlete-agent-eligibility"],
    ["Do I need a liability waiver for my youth soccer camp?", "athlete-waiver"], ["Can parents sign a waiver for their kids in a sports league?", "athlete-waiver"],
    ["How does the NFL pension work?", "athlete-pension"], ["When do I vest in a pro athlete pension?", "athlete-pension"], ["What disability insurance does a pro athlete need?", "athlete-pension"], ["What benefits do former NFL players get?", "athlete-pension"],
    ["How do I get a fee waiver for the NCAA Eligibility Center?", "athlete-eligibility"], ["How much should a teenager lift?", "athlete-training"],
    // Kenya, Nigeria, World Athletics and the college route for international athletes
    ["How does a Kenyan athlete register with Athletics Kenya?", "athlete-kenya-registration"], ["What is Riadha Connect?", "athlete-kenya-registration"], ["How are Kenyan athletes selected for the World Championships?", "athlete-kenya-registration"],
    ["How is a runner's prize money taxed in Kenya?", "athlete-kenya-money"], ["Do I need a KRA PIN as an athlete?", "athlete-kenya-money"], ["Can a Kenyan athlete save for retirement with NSSF?", "athlete-kenya-money"],
    ["How does the Athletics Federation of Nigeria license athletes?", "athlete-nigeria"], ["What is the Elite Athletes Development and Podium Board in Nigeria?", "athlete-nigeria"],
    ["How is an athlete taxed in Nigeria on prize money?", "athlete-nigeria-money"], ["Does the Nigeria Tax Act tax a footballer's income?", "athlete-nigeria-money"],
    ["Do I need a licensed agent under World Athletics rules?", "athlete-wa-reps"], ["Can my coach be my manager in athletics?", "athlete-wa-reps"], ["Can a Kenyan runner use a manager for appearance fees?", "athlete-wa-reps"], ["What is a ranked athlete?", "athlete-wa-reps"],
    ["How does transfer of allegiance work in athletics?", "athlete-allegiance"], ["Can I change the country I represent in athletics?", "athlete-allegiance"],
    ["What are whereabouts for athletes?", "athlete-whereabouts"], ["What happens if I miss a drug test?", "athlete-whereabouts"], ["What is the Registered Testing Pool?", "athlete-whereabouts"],
    ["How does a Kenyan runner get a student visa for a US college?", "athlete-abroad-visa"], ["What is an I-20 for an international student athlete?", "athlete-abroad-visa"], ["Can an international student athlete work on campus?", "athlete-abroad-visa"],
    ["What does the NCAA need from a Nigerian student athlete?", "athlete-abroad-eligibility"], ["How do I get a track scholarship in America as an international athlete?", "athlete-abroad-eligibility"],
    ["Do international student athletes pay tax on a scholarship in the US?", "athlete-abroad-tax"], ["What is Form 8843 for an international student?", "athlete-abroad-tax"],
    ["Is this scholarship scam real? A recruiter asked a Kenyan runner to pay a fee for a US scholarship", "athlete-abroad-scams"], ["How do I avoid visa scams as an international athlete?", "athlete-abroad-scams"]
  ];
  for (const [text, id] of yes) assert.equal(matcher.athleteTopic(text), id, text);
});

test("orders, records, the calendar, personal emergencies, other guides' questions and words that only share a spelling are never taken", () => {
  for (const text of ["Build me a meal plan for a 180 pound soccer player in preseason", "Make me a 4 week strength and conditioning plan for basketball", "Log a 45 minute strength session", "Show my workout log", "Remind me about practice",
    "Add practice to my calendar", "My calendar for the game", "Call my coach", "Play the football game on the radio", "Send my agent a message", "Save my meal plan",
    "I want to kill myself, the pressure from my team is too much", "I passed out at practice", "I think I am having a heart attack at the gym", "My coach touched me", "I have chest pain when I run",
    "What is the weather like for the game today?", "What should I eat if I have diabetes?", "How do I lose weight?", "Why should I rotate crops?", "How do I start an LLC?", "What is a good job training course?", "Track my spending",
    "What is the price of maize?", "Does a church have to file a Form 990?", "How much protein is in an egg?", "What is a good recipe for dinner?", "I want a sports bar business plan", "How do I become a real estate agent?",
    "What does a travel agent do?", "What is the weather in Nairobi?", "How much is M-Pesa charging?", "Send money to Nigeria", "How do I pay my KRA taxes for my shop?", "Book a flight to Lagos", "What is the price of maize in Kenya?", "Tell me about Nigerian music", "Play Kenyan music", "Tell me a joke", "", "x".repeat(400)]) assert.equal(matcher.athleteTopic(text), null, text || "(empty)");
});

test("every answer names official pages, the date they were read, and the closing line; none promises or files anything", () => {
  const known = /^https?:\/\/(?:www\.)?(?:irs\.gov|taxpayeradvocate\.irs\.gov|cdc\.gov|ncaa\.org|web3\.ncaa\.org|ncaaorg\.s3\.amazonaws\.com|eatright\.org|usada\.org|globaldro\.com|athleticsintegrity\.org|adak\.or\.ke|fmino\.gov\.ng|uscenterforsafesport\.org|maapp\.uscenterforsafesport\.org|govinfo\.gov|naia\.org|nfhs\.org|ftc\.gov|uspto\.gov|sba\.gov|consumerfinance\.gov|sec\.gov|nimh\.nih\.gov|medlineplus\.gov|988lifeline\.org|orthoinfo\.org|healthychildren\.org|aap\.org|nationaleatingdisorders\.org|nbpa\.com|nflpa\.com|sos\.state\.tx\.us|sos\.alabama\.gov|nata\.org|wada-ama\.org|anad\.org|samhsa\.gov|usa\.gov|content\.naic\.org|dol\.gov|nhl\.com|flsenate\.gov|supremecourt\.ohio\.gov|legislature\.mi\.gov|mca\.legmt\.gov|finra\.org|files\.consumerfinance\.gov|play\.mynaia\.org|uniformlaws\.org|mlbplayers\.com|ssa\.gov|investor\.gov|collegesportscommission\.org|worldathletics\.org|athleticskenya\.or\.ke|kra\.go\.ke|nssf\.or\.ke|athleticsnigeria\.org|von\.gov\.ng|adoption\.state\.gov|studyinthestates\.dhs\.gov|nass\.gov\.ng|consumer\.ftc\.gov)(?:\/|$)/;
  for (const id of ALL) {
    const answer = guide.athleteAnswer(id);
    assert.ok(answer && answer.topic === id, id);
    if (id === "athlete-overview") { assert.equal(answer.sources.length, 0); assert.doesNotMatch(answer.text, /Sources:/); continue; }
    assert.ok(answer.sources.length >= 1 && answer.sources.every(source => known.test(source.url)), `${id}: official pages only`);
    assert.match(answer.text, /Sources: .+ \(checked 22 October 2026\)\. This is general information, not (?:medical|legal|tax or legal|financial, tax or legal) advice/, id);
    assert.doesNotMatch(answer.text, /\byou must (?:file|apply)\b|\bguarantee\b|\bwill (?:definitely|certainly)\b|\bI (?:will|can) (?:file|send|apply|sign)\b|\byou (?:should|need to) (?:take|buy|use) /i, id);
  }
  assert.equal(guide.athleteAnswer("nonsense"), null);
  for (const key of Object.keys(guide.SOURCES)) assert.match(guide.SOURCES[key].url, /^https?:\/\//, key);
  for (const id of ALL) for (const key of guide.TOPICS[id].sources) assert.ok(guide.SOURCES[key], `${id} names an unknown source ${key}`);
});

test("the figures are the ones the pages gave, and what a page does not say is said not to be said", () => {
  const text = id => guide.athleteAnswer(id).text;
  for (const fact of [/one to four hours before a workout/, /within an hour/, /about three hours before/, /2 percent of body weight/, /0\.75 grams of protein per pound/, /20 to 40 grams of protein/, /do not give amounts for your sport/]) assert.match(text("athlete-nutrition"), fact);
  for (const fact of [/relative energy deficiency in sport, called RED-S/, /three or more periods in a row/, /written for coaches and athletic trainers/, /888-375-7767/, /Monday to Friday, 9 a\.m\. to 9 p\.m\. Central/, /1-800-662-4357/, /does not say it is only for eating disorders/, /lists no helpline/, /call or text 988/]) assert.match(text("athlete-energy"), fact);
  for (const fact of [/\(719\) 785-2000, option 2/, /NSF Certified for Sport/, /holds no information on supplements/, /at least 30 days before planned use/, /do not recognize each other's exemptions/, /I cannot tell you whether a product or medicine is allowed for you/, /athletes do not apply to WADA/]) assert.match(text("athlete-supplements"), fact);
  for (const fact of [/at least 60 minutes a day/, /at least 150 minutes a week/, /not training loads for a competitive athlete/, /uncontrolled high blood pressure/, /unsupervised home equipment/]) assert.match(text("athlete-training"), fact);
  for (const fact of [/8 to 10 hours/, /one to two rest days a week/, /no more than 10 percent/, /20 minutes at a time not directly on skin/, /do not list signs that mean see a doctor right away/]) assert.match(text("athlete-recovery"), fact);
  for (const fact of [/call 911 or go to the nearest emergency department/, /one pupil larger than the other/, /24 to 48 hours/, /six steps/, /at least 24 hours/, /do not address professional athletes separately/]) assert.match(text("athlete-concussion"), fact);
  for (const fact of [/stop all activity and get to a cool place/, /call 911/, /cool first and transport second/, /avoid salt tablets/, /within an hour/]) assert.match(text("athlete-heat"), fact);
  for (const fact of [/call or text 988/, /1-800-950-6264/, /1-866-488-7386/, /two weeks or more/, /do not speak to performance pressure/]) assert.match(text("athlete-mental"), fact);
  for (const fact of [/833-587-7233/, /anonymous reports/, /in addition to, and before/, /1-800-656-4673/, /within a 24-hour period/, /I will not describe them/]) assert.match(text("athlete-safesport"), fact);
  for (const fact of [/\$85/, /core GPA of at least 2\.3/, /a 2\.2/, /up to five years/, /by July 1/, /National Letter of Intent in 2024/, /ask me about the NAIA/, /ask me about amateurism/]) assert.match(text("athlete-eligibility"), fact);
  for (const fact of [/valid business purpose/, /\$600 or more/, /through NIL Go/, /ask me about the House settlement/, /state by state/]) assert.match(text("athlete-nil"), fact);
  for (const fact of [/Uniform Athlete Agents Act/, /a revised 2015 version/, /I will not state what it requires of an agent's contract/, /Sports Agent Responsibility and Trust Act/, /ask me about the NCAA's agent rule/, /\$2,500 fee/]) assert.match(text("athlete-agent"), fact);
  for (const fact of [/\$2,000 or more/, /15\.3 percent/, /\$400 or more/, /Form 1040-ES/, /do not cover professional athletes or any state's rules/, /FAFSA/]) assert.match(text("athlete-taxes"), fact);
  for (const fact of [/#ad/, /#ambassador/, /nationwide/, /strongly encourages an attorney/]) assert.match(text("athlete-brand"), fact);
  for (const fact of [/under \$300/, /never pay|free and warns/, /do not mention sports, camps or youth programs/]) assert.match(text("athlete-business"), fact);
  for (const fact of [/\$250,000 or less/, /do not say how the IRS treats a local youth league/, /ask me about liability waivers/, /no official page on registration fees or dues/]) assert.match(text("athlete-club"), fact);
  for (const fact of [/reportfraud\.ftc\.gov/, /2013/, /12b-1 fee, capped at 1 percent/, /BrokerCheck/, /no set rate of return/, /ask me about athlete pensions/]) assert.match(text("athlete-money"), fact);
  for (const fact of [/any two of three tests/, /updated at least annually/, /in force on 1 January/, /except cannabidiol, CBD/, /clenbuterol is prohibited at all times with no threshold/, /strict liability rule/, /I did not read the list substance by substance/]) assert.match(text("athlete-prohibited"), fact);
  for (const fact of [/\$110/, /\$145/, /\$160/, /\$170/, /nonrefundable/, /2\.300 or higher/, /ACT of 18 or an SAT of 970/, /no core courses are necessary/, /signing a contract with a professional team/, /not required to sit out a residency period/]) assert.match(text("athlete-naia"), fact);
  for (const fact of [/pay in any form/, /\$300 above actual and necessary expenses/, /\$10,000 per calendar year/, /48-hour tryout/, /within 10 days after the draft combine/, /within 72 hours/, /confirm with the Eligibility Center/]) assert.match(text("athlete-amateurism"), fact);
  for (const fact of [/\$20\.5 million/, /22 percent/, /rises 4 percent/, /approximately \$21\.58 million for the 2026-27 academic year/, /22 percent of the average revenue/, /the pages differ slightly on the percentage/, /College Athlete Payment System/, /20 cents for every dollar over/, /\$600 or more/, /five business days/, /45 days/, /final and binding/, /loss of eligibility/, /no official page saying whether the settlement is being appealed/]) assert.match(text("athlete-house"), fact);
  for (const fact of [/Bylaw 12\.3\.1 says a person is ineligible/, /orally or in writing/, /12\.3\.1\.4/, /12\.3\.2/, /NCAA-certified agent/, /NIL activities is permissible/, /15 April 2026/, /prospects may now sign with professional sports agents before enrolling/, /predates that change/]) assert.match(text("athlete-agent-eligibility"), fact);
  for (const fact of [/April 2026 that prospects enrolling in 2026-27 may now accept prize money/]) assert.match(text("athlete-amateurism"), fact);
  for (const fact of [/14 August 2023/, /1 September 2023/, /1 January 2024/, /top 100 in a track event/, /top 35 in combined events/, /may not run longer than two years/, /independent legal advice/, /set no percentage cap/, /six months before the legal working age/, /coach or anyone in an athlete's entourage/, /I did not find Kenya on it and could not confirm Nigeria/]) assert.match(text("athlete-wa-reps"), fact);
  for (const fact of [/an athlete cannot apply directly/, /three years from the date the application is made/, /at least 20/, /genuine, close, credible and established link/, /starts again from that date/, /at most ten applications/, /thirty days/, /cannot tell you whether a particular transfer would be approved/]) assert.match(text("athlete-allegiance"), fact);
  for (const fact of [/60-minute slot between 5 a.m. and 11 p.m./, /three such failures within 12 months/, /two years of ineligibility/, /minimum of one year/, /whereabouts@athleticsintegrity.org/]) assert.match(text("athlete-whereabouts"), fact);
  for (const fact of [/three stages/, /original birth certificate/, /from 1 January 2025 all Athletics Kenya services are exclusively available to registered athletes/, /Riadha Connect/, /top two at the national trials/, /mentions no registration fee/, /could not read Kenya's Sports Act/]) assert.match(text("athlete-kenya-registration"), fact);
  for (const fact of [/288,000 shillings/, /35 percent above 9,600,000/, /28,800 shillings/, /between 1 January and 30 June/, /5 percent of the tax due or 2,000 shillings/, /no rate for sportspeople, appearance fees or race prize money/, /200 shillings as the minimum/, /may have changed since the dates on those pages/]) assert.match(text("athlete-kenya-money"), fact);
  for (const fact of [/governing body for athletics in Nigeria/, /Roster Athletics/, /one licence number for their whole career/, /no fees, no date when licensing becomes compulsory and no penalties/, /Elite Athletes Development and Podium Board/, /training grants/, /mentions no scholarships/, /Commission's own website would not load/]) assert.match(text("athlete-nigeria"), fact);
  for (const fact of [/Nigeria Tax Act, 2025/, /prizes, winnings, honoraria, grants and awards/, /800,000 naira/, /25 percent above 50 million/, /20 percent of annual rent, up to 500,000 naira/, /found no sport-specific provision/, /could not read the Nigeria Tax Administration Act/]) assert.match(text("athlete-nigeria-money"), fact);
  for (const fact of [/\$185 and non-refundable/, /365 days/, /money order, Western Union Quick Pay or a certified check/, /dated June 2023/, /15 September 2026/, /30 days to leave, down from 60 days/, /at least 12 credit hours/, /20 hours a week/, /could not read EducationUSA/]) assert.match(text("athlete-abroad-visa"), fact);
  for (const fact of [/16 core courses and a core GPA of at least 2.3/, /word-for-word certified English translation/, /15 April 2026/, /did not say whether this applies to international prospects/, /\$170/, /InCred evaluation/, /could not read the NJCAA's rules/]) assert.match(text("athlete-abroad-eligibility"), fact);
  for (const fact of [/Form 1040-NR/, /Form 8843/, /14 percent/, /does not include Kenya or Nigeria/, /Egypt, Morocco, South Africa and Tunisia/, /15 April, or 15 June/, /did not read the last part of Publication 519/]) assert.match(text("athlete-abroad-tax"), fact);
  for (const fact of [/May 2021/, /never to pay to apply for a scholarship/, /ReportFraud.ftc.gov/, /gift cards or cryptocurrency/, /not ending in .gov/, /could not read EducationUSA/]) assert.match(text("athlete-abroad-scams"), fact);
  for (const fact of [/no state attorney general, bar or court page/, /at least 11 states/, /Ohio Supreme Court held in 1998/, /Michigan's law/, /Montana's law/, /does not mention minors/, /a lawyer in your state can/]) assert.match(text("athlete-waiver"), fact);
  for (const fact of [/three credited seasons is vested/, /starting at age 55/, /Second Career Savings Plan with distributions from age 45/, /Its pages give no dollar amounts/, /\$2 million a year from each side/, /Major League Baseball, the NBA or Major League Soccer/, /summary plan description/, /every three years/, /five-month waiting period/, /40 work credits/, /\$1,890/, /about 60 percent/, /nothing in these pages that is specific to athletes/]) assert.match(text("athlete-pension"), fact);
  assert.match(text("athlete-overview"), /I diagnose nothing, file nothing and sign nothing, and I will not help anyone get around a drug test/);
});

test("outside the United States only what an official page says is stated; Kenya and Nigeria get the drug-testing and abuse pages that were read", () => {
  const kenya = guide.athleteAnswer("athlete-supplements", { us: false, country: "ke" });
  assert.match(kenya.text, /^These are United States rules and guidance, from American pages\./);
  assert.match(kenya.text, /Anti-Doping Agency of Kenya is the national anti-doping body/); assert.match(kenya.text, /info@adak\.or\.ke/);
  assert.ok(kenya.sources.some(source => source.url === "https://www.adak.or.ke/report-doping/"));
  const nigeria = guide.athleteAnswer("athlete-supplements", { us: false, country: "ng" });
  assert.match(nigeria.text, /National Anti-Doping Act of 2025 set up the Nigeria Anti-Doping Centre/); assert.match(nigeria.text, /I could not read the Centre's own page, so I cannot give you a reporting line/);
  assert.ok(nigeria.sources.some(source => /fmino\.gov\.ng/.test(source.url)));
  assert.match(guide.athleteAnswer("athlete-safesport", { us: false, country: "ke" }).text, /Athletics Integrity Unit's integrity line takes reports of doping/);
  assert.match(guide.athleteAnswer("athlete-mental", { us: false, country: "ng" }).text, /The 988 line is for the United States/);
  assert.match(guide.athleteAnswer("athlete-nil", { us: false, country: null }).text, /^These are United States rules and guidance/);
  assert.doesNotMatch(guide.athleteAnswer("athlete-nil").text, /^These are United States rules/, "a person in the United States is not told that");
  assert.doesNotMatch(guide.athleteAnswer("athlete-overview", { us: false, country: "ke" }).text, /^These are United States rules/);
  for (const id of ["athlete-wa-reps", "athlete-allegiance", "athlete-whereabouts", "athlete-kenya-registration", "athlete-kenya-money", "athlete-nigeria", "athlete-nigeria-money", "athlete-abroad-visa", "athlete-abroad-eligibility", "athlete-abroad-tax", "athlete-abroad-scams"]) {
    assert.doesNotMatch(guide.athleteAnswer(id, { us: false, country: "ke" }).text, /^These are United States rules/, id + " is about Kenya, Nigeria, World Athletics or the United States college route, not a United States rule");
  }
});

const planner = () => new OpenEndedPlanner({ model: { plan: async () => { throw new Error("must not reach the AI planning model"); }, respond: async () => { throw new Error("the guide must answer without the model"); } }, tools: { list: async () => [] }, applications: { list: () => [] } });
const ask = (text, context = { timeZone: "America/Chicago" }) => planner().plan({ command: { text, tenantId: "t1", actorId: "u1", locale: "en", channel: "typed" }, context });

test("through the planner, with no AI model; an athlete's question is answered from the checked guide", async () => {
  for (const [text, id] of [["What should I eat before and after a hard training session?", "athlete-nutrition"], ["Is creatine allowed for college athletes?", "athlete-supplements"], ["What is a concussion and when can an athlete return to play?", "athlete-concussion"],
    ["I am a college athlete, can I take a sponsorship deal?", "athlete-nil"], ["Help me build my personal brand as an athlete", "athlete-brand"], ["I am a pro athlete, how do taxes work when I play games in other states?", "athlete-taxes"]]) {
    const plan = await ask(text);
    assert.equal(plan.knowledge, `athlete-guide:${id}`, text); assert.deepEqual(plan.steps, []); assert.equal(plan.guardrail, "professional-advice");
    assert.ok(plan.sources.length >= 1); assert.match(plan.response, /checked 22 October 2026/);
    assert.doesNotMatch(plan.response, /^These are United States rules/, "in the United States");
  }
  // a question that names Kenya, or a device in Nairobi's time zone, is not answered as if American rules applied
  const named = await ask("Is creatine allowed for athletes in Kenya?", { timeZone: "America/Los_Angeles" });
  assert.equal(named.knowledge, "athlete-guide:athlete-supplements"); assert.match(named.response, /^These are United States rules and guidance/); assert.match(named.response, /Anti-Doping Agency of Kenya/);
  const nairobi = await ask("What are the signs of a concussion in a football player?", { timeZone: "Africa/Nairobi" });
  assert.equal(nairobi.knowledge, "athlete-guide:athlete-concussion"); assert.match(nairobi.response, /^These are United States rules and guidance/);
  // what is not the guide's keeps its own route (here it reaches the AI model, which this test forbids)
  for (const text of ["Make me a 4 week strength and conditioning plan for basketball", "Log a 45 minute strength session", "I want to kill myself, the pressure from my team is too much", "I passed out at practice"]) await assert.rejects(ask(text), /must not reach the AI planning model|guide must answer/, text);
});

test("on the page and the server: the question is the page's own, the server tries the person's words first, the scripts are loaded before app.js and cached, and the pages are in the weekly check", () => {
  const start = app.indexOf("function kyroAthleteQuestion(text) {");
  const end = app.indexOf("\n}\n", start) + 2;
  assert.ok(start > 0 && end > start);
  const context = { window: { KyroAthleteTopics: matcher } };
  vm.runInNewContext(`${app.slice(start, end)}\nthis.ask = kyroAthleteQuestion;`, context);
  for (const say of ["What should I eat before a game?", "Is creatine allowed for college athletes?"]) assert.equal(context.ask(say), true, say);
  for (const say of ["Call my coach", "Play some music", "What is the weather"]) assert.equal(context.ask(say), false, say);
  const none = { window: {} };
  vm.runInNewContext(`${app.slice(start, end)}\nthis.ask = kyroAthleteQuestion;`, none);
  assert.equal(none.ask("What should I eat before a game?"), false, "no matcher loaded, no claim");
  assert.match(app, /\(typeof kyroAthleteQuestion === "function" && kyroAthleteQuestion\(trimmed\)\) \|\| \(typeof kyroMoneyQuestion === "function" && kyroMoneyQuestion\(trimmed\)\) \|\| \(typeof kyroHowtoQuestion === "function" && kyroHowtoQuestion\(trimmed\)\)\)\) \{\s+if \(!heardAgain\) \{\s+try \{ kyroTakeOverTurn\(\); \}/);
  assert.match(server, /const athleteAsk = typeof athleteTopic === "function" && rawCallerText && athleteTopic\(rawCallerText\) \? rawCallerText : command;/);
  assert.match(server, /athleteTopic\(athleteAsk\) && effectiveMentalHealthSignal\.state !== "medical_emergency" && typeof deterministicVoiceAnswer === "function"/);
  assert.match(server, /text: athleteAsk, language, timeZone: args\?\.timeZone/);
  assert.ok(server.includes('const { athleteTopic } = require("./public/kyro-athlete-topics.js");'));
  const index = fs.readFileSync(path.join(__dirname, "../../public/index.html"), "utf8");
  const sw = fs.readFileSync(path.join(__dirname, "../../public/sw.js"), "utf8");
  const tag = '<script src="/kyro-athlete-topics.js?v=kyro-athlete-topics-3"></script>';
  assert.ok(index.includes(tag) && index.indexOf(tag) < index.search(/<script[^>]+src="\/app\.js/));
  assert.match(sw, /`\/kyro-athlete-topics\.js\?v=kyro-athlete-topics-3`/);
  const check = fs.readFileSync(path.join(__dirname, "../../scripts/check-guide-sources.js"), "utf8");
  assert.match(check, /const GUIDES = \[[^\]]*"athlete-guide"/);
  const collected = collectSources(path.join(__dirname, "../../nexus/knowledge"));
  const nil = collected.find(entry => entry.url === "https://www.irs.gov/businesses/small-businesses-self-employed/name-image-and-likeness-income");
  assert.ok(nil && nil.guides.includes("athlete-guide"), "the weekly check sees the athlete guide's pages");
  for (const key of Object.keys(guide.SOURCES)) assert.ok(collected.some(entry => entry.url === guide.SOURCES[key].url && entry.guides.includes("athlete-guide")), `${key} is checked weekly (https only)`);
});

test("each athlete case in the live voice list is answered by the guide with the key fact it expects on the screen", () => {
  const cases = require("../../scripts/live-voice-suite/cases/athletes.js");
  assert.equal(cases.length, 36);
  const seen = new Set();
  for (const entry of cases) {
    const id = matcher.athleteTopic(entry.say);
    assert.ok(id, entry.say); seen.add(id);
    assert.ok(guide.athleteAnswer(id).text.includes(entry.expect.text), `${entry.id}: ${entry.expect.text}`);
  }
  assert.deepEqual([...seen].sort(), [...ALL].sort(), "every topic has a live case");
});
