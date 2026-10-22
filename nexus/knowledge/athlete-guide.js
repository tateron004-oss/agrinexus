"use strict";

// A checked guide for athletes, from a school team to a professional, in the United States: what to eat and drink, supplements and drug testing, how much to train, sleep and a strained muscle, a concussion, heat, pressure and mental
// health, abuse in sport, who may play and how scholarships work, name-image-likeness deals, agents, taxes, endorsements, starting a business, running a youth club, and money after sport. It was asked for by the owner ("have we discovered all
// elements needed to support the athletes ... from nutrition to training, to sports management to assisting athletes with entrepreneurial endeavors") after a live check showed Kyro answering such questions from the voice model's memory, with no
// sources, and failing one outright ("help me build my personal brand as an athlete").
//
// What is an official fact and what is Kyro's: every statement of a rule or a figure was read from the pages in SOURCES on CHECKED_ON (loaded with a web fetch that day) and is said in the page's own terms. What a page does not say, the answer says it
// does not say and names who to ask (a doctor, a sports dietitian, the school's compliance office, a tax professional). Nothing here is a plan, a diagnosis, a contract or a form: Kyro diagnoses nothing, files nothing and signs nothing.
// What could NOT be read, and is therefore not stated anywhere here (the list to read next): WADA's list substance by substance (its page was read in a normal browser window; the site turns programs away with a bot check, which was not
// bypassed), the College Sports Commission's own website and any 2026-27 revenue-sharing figure (the NCAA's question-and-answer document is used instead), the Revised Uniform Athlete Agents Act text, the Academy / Dietitians of Canada / ACSM joint
// position statement, the IOC consensus statement on RED-S, NEDA's pages (blocked), investor.gov and the Social Security pages (blocked), MLB, NBA and MLS pension pages, a state attorney general's or bar's plain-words page on waivers, and for Nigeria
// any anti-doping body's own page (none resolved). Outside the United States only what an official page says is stated.
//
// athleteAnswer(id, { us, country }) -> { topic, title, text, sources: [{ name, url }] } or null.   The matching of a question to a topic is in public/kyro-athlete-topics.js.

const CHECKED_ON = "22 October 2026";

const SOURCES = Object.freeze({
  // food, drink, sleep, rest
  eatrightTiming: { name: "Academy of Nutrition and Dietetics: timing your pre- and post-workout nutrition", url: "https://www.eatright.org/fitness/physical-activity/exercise-nutrition/timing-your-pre-and-post-workout-nutrition" },
  eatrightGameday: { name: "Academy of Nutrition and Dietetics: gameday nutrition tips for young athletes", url: "https://www.eatright.org/fitness/sports-and-athletic-performance/beginner-and-intermediate/8-gameday-nutrition-tips-for-young-athletes" },
  ncaaFuelRecovery: { name: "NCAA Sport Science Institute: fueling for recovery", url: "https://ncaaorg.s3.amazonaws.com/ssi/nutrition/SSI_FuelingForRecovery.pdf" },
  ncaaEatingFrequency: { name: "NCAA Sport Science Institute: eating frequency for the student-athlete", url: "https://ncaaorg.s3.amazonaws.com/ssi/nutrition/SSI_EatingFrequencyFactSheet.pdf" },
  ncaaHydration: { name: "NCAA Sport Science Institute: how to maximize performance hydration (2013)", url: "https://ncaaorg.s3.amazonaws.com/ssi/nutrition/SSI_PerformanceHydrationFactSheet.pdf" },
  nedaToolkit: { name: "National Eating Disorders Association: coach and athletic trainer toolkit", url: "https://www.nationaleatingdisorders.org/wp-content/uploads/2025/10/CoachAthleticTrainerToolkit.pdf" },
  ncaaEnergy: { name: "NCAA Sport Science Institute: energy availability (2014)", url: "https://ncaaorg.s3.amazonaws.com/ssi/nutrition/SSI_EnergyAvailabilityFactSheet.pdf" },
  cdcPhysicalActivity: { name: "CDC: physical activity recommendations", url: "https://www.cdc.gov/physical-activity-basics/guidelines/index.html" },
  cdcChildActivity: { name: "CDC: child activity overview", url: "https://www.cdc.gov/physical-activity-basics/guidelines/children.html" },
  aapResistance: { name: "American Academy of Pediatrics (HealthyChildren.org): guidance on resistance training for children", url: "https://www.healthychildren.org/English/news/Pages/Guidance-on-Resistance-Training-for-Children.aspx" },
  aapWeightRisk: { name: "American Academy of Pediatrics (HealthyChildren.org): weight training, risk of injury (2009)", url: "https://www.healthychildren.org/English/healthy-living/fitness/pages/Weight-Training-Risk-of-Injury.aspx" },
  cdcSleep: { name: "CDC: about sleep", url: "https://www.cdc.gov/sleep/about/index.html" },
  ncaaSleep: { name: "NCAA Sport Science Institute: sleep and wellness for collegiate athletes", url: "https://ncaaorg.s3.amazonaws.com/ssi/performance/SSI_SleepWellnessFactSheet.pdf" },
  aapBurnout: { name: "American Academy of Pediatrics (HealthyChildren.org): burnout in young athletes", url: "https://www.healthychildren.org/English/health-issues/injuries-emergencies/sports-injuries/Pages/Too-Much-Too-Soon-Overtraining.aspx" },
  aapOveruse: { name: "American Academy of Pediatrics: how to prevent overuse injuries (2011 handout)", url: "https://www.aap.org/globalassets/publications/coya/overuse-injuries_final_secured.1.0.pdf" },
  orthoHamstring: { name: "AAOS OrthoInfo: hamstring muscle injuries", url: "https://www.orthoinfo.org/diseases--conditions/hamstring-muscle-injuries/" },
  medlineStrains: { name: "MedlinePlus (NIH): sprains and strains", url: "https://medlineplus.gov/sprainsandstrains.html" },
  // head, heat, mind
  cdcHeadsSigns: { name: "CDC HEADS UP: signs and symptoms of concussion", url: "https://www.cdc.gov/heads-up/signs-symptoms/index.html" },
  cdcHeadsBasics: { name: "CDC HEADS UP: concussion basics", url: "https://www.cdc.gov/heads-up/about/index.html" },
  cdcHeadsRecovery: { name: "CDC HEADS UP: what to do after a concussion", url: "https://www.cdc.gov/heads-up/guidelines/recovery-from-concussion.html" },
  cdcHeadsReturn: { name: "CDC HEADS UP: returning to sports", url: "https://www.cdc.gov/heads-up/guidelines/returning-to-sports.html" },
  cdcHeatIllness: { name: "CDC NIOSH: heat-related illnesses (written for workers)", url: "https://www.cdc.gov/niosh/heat-stress/about/illnesses.html" },
  cdcHeatAthletes: { name: "CDC: heat and athletes", url: "https://www.cdc.gov/heat-health/risk-factors/heat-and-athletes.html" },
  nataHeat: { name: "National Athletic Trainers' Association: exertional heat illnesses position statement (2015 news release)", url: "https://www.nata.org/press-release/092115/nata-publishes-new-exertional-heat-illnesses-position-statement" },
  lifeline988: { name: "988 Suicide & Crisis Lifeline", url: "https://988lifeline.org/get-help/" },
  nimhCaring: { name: "National Institute of Mental Health: caring for your mental health", url: "https://www.nimh.nih.gov/health/topics/caring-for-your-mental-health" },
  ncaaMentalHealth: { name: "NCAA: mental health best practices", url: "https://www.ncaa.org/what-we-do/health-safety-and-performance/mental-health/best-practices/" },
  // doping, abuse
  usadaSupplements: { name: "USADA: Supplement Connect", url: "https://www.usada.org/substances/supplement-connect/" },
  usadaLogos: { name: "USADA: always verify third-party certified logos on dietary supplements", url: "https://www.usada.org/athlete-advisory/verify-third-party-logos-supplements/" },
  usadaSubstances: { name: "USADA: substances and medications", url: "https://www.usada.org/substances/" },
  usadaAntiDoping101: { name: "USADA: anti-doping 101", url: "https://www.usada.org/antidoping101/" },
  usadaProhibitedList: { name: "USADA: the WADA Prohibited List", url: "https://www.usada.org/substances/prohibited-list/" },
  usadaTue: { name: "USADA: therapeutic use exemptions", url: "https://www.usada.org/testing/tue/" },
  globalDro: { name: "Global DRO", url: "https://www.globaldro.com/Home" },
  aiuProhibited: { name: "Athletics Integrity Unit: understand the Prohibited List", url: "https://www.athleticsintegrity.org/know-the-rules/understand-the-prohibited-list" },
  aiuIntegrityLine: { name: "Athletics Integrity Unit: integrity line", url: "https://www.athleticsintegrity.org/aiu-integrity-line" },
  aiuTue: { name: "Athletics Integrity Unit: therapeutic use exemptions", url: "https://www.athleticsintegrity.org/know-the-process/therapeutic-use-exemptions" },
  adakHome: { name: "Anti-Doping Agency of Kenya", url: "https://www.adak.or.ke/" },
  adakReport: { name: "Anti-Doping Agency of Kenya: report doping", url: "https://www.adak.or.ke/report-doping/" },
  fminoAntiDopingAct: { name: "Federal Ministry of Information and National Orientation, Nigeria: National Anti-Doping Bill signed into law (2 April 2025)", url: "https://fmino.gov.ng/nsc-thanks-president-tinubu-for-signing-national-anti-doping-bill-into-law/" },
  fminoAntiDopingCentre: { name: "Federal Ministry of Information and National Orientation, Nigeria: technical board of the Nigeria Anti-Doping Centre (2 July 2026)", url: "https://fmino.gov.ng/federal-government-inaugurates-technical-board-of-nigeria-anti-doping-centre-reaffirms-commitment-to-excellence-in-sporting-activities/" },
  safesportReport: { name: "U.S. Center for SafeSport: report a concern", url: "https://uscenterforsafesport.org/report-a-concern/" },
  safesportMaapp: { name: "U.S. Center for SafeSport: Minor Athlete Abuse Prevention Policies", url: "https://maapp.uscenterforsafesport.org/" },
  safesportAbout: { name: "U.S. Center for SafeSport: our story", url: "https://uscenterforsafesport.org/about/our-story/" },
  publicLaw115126: { name: "Protecting Young Victims from Sexual Abuse and Safe Sport Authorization Act of 2017 (Public Law 115-126)", url: "https://www.govinfo.gov/content/pkg/PLAW-115publ126/html/PLAW-115publ126.htm" },
  // who may play, who may pay, who may represent
  ncaaRegister: { name: "NCAA: Eligibility Center registration", url: "https://www.ncaa.org/eligibility-center/register/" },
  ncaaAmateurismAccount: { name: "NCAA Eligibility Center: create a certification account", url: "https://web3.ncaa.org/ecwr3/register/CERTIFICATION?accountSubType=AMATEURISM" },
  ncaaDivisionI: { name: "NCAA: Division I initial-eligibility requirements", url: "https://www.ncaa.org/eligibility-center/initial-eligibility-requirements/division-i/" },
  ncaaDivisionII: { name: "NCAA: Division II initial-eligibility requirements", url: "https://www.ncaa.org/eligibility-center/initial-eligibility-requirements/division-ii/" },
  ncaaDivisionIII: { name: "NCAA: Division III initial-eligibility requirements", url: "https://www.ncaa.org/eligibility-center/initial-eligibility-requirements/division-iii/" },
  ncaaAgeRules: { name: "NCAA: Division I and II age-based eligibility rules", url: "https://www.ncaa.org/eligibility-center/division-i-and-division-ii-age-based-eligibility-rules/" },
  ncaaScholarships: { name: "NCAA: scholarships and financial aid", url: "https://www.ncaa.org/student-athletes/scholarships-and-financial-aid/" },
  naiaHighSchool: { name: "NAIA: information for high school students", url: "https://www.naia.org/student-athletes/prospective/high-school-students/" },
  nfhsEligibility: { name: "National Federation of State High School Associations: eligibility and transfer rules (2025)", url: "https://nfhs.org/stories/supporting-high-schools-state-associations-to-determine-eligibility-transfer-rules" },
  ncaaNil: { name: "NCAA: name, image and likeness", url: "https://www.ncaa.org/student-athletes/name-image-likeness/" },
  ncaaConsentJudgment: { name: "NCAA: consent judgment on NIL opportunities for prospective and transferring student-athletes (April 2025)", url: "https://www.ncaa.org/news/media-center-consent-judgment-on-name-image-and-likeness-opportunities/" },
  ncaaBakerLetter: { name: "NCAA: a letter from the NCAA president on the House settlement (6 June 2025)", url: "https://www.ncaa.org/news/media-center-a-letter-from-ncaa-president-charlie-baker/" },
  nfhsNil: { name: "National Federation of State High School Associations: name, image and likeness for interscholastic athletes (2023)", url: "https://nfhs.org/stories/name-image-and-likeness-for-interscholastic-athletes-what-does-it-look-like" },
  ftcSparta: { name: "FTC: Sports Agent Responsibility and Trust Act", url: "https://www.ftc.gov/legal-library/browse/statutes/sports-agent-responsibility-trust-act" },
  uniformLawAgents: { name: "Uniform Law Commission: Athlete Agents Act", url: "https://www.uniformlaws.org/committees/community-home?CommunityKey=cef8ae71-2f7b-4404-9af5-309bb70e861e" },
  texasAgents: { name: "Texas Secretary of State: athlete agents", url: "https://www.sos.state.tx.us/statdoc/athlete-agents.shtml" },
  alabamaAgents: { name: "Alabama Secretary of State: athlete agents", url: "https://www.sos.alabama.gov/administrative-services/athlete-agents" },
  nbpaAgents: { name: "National Basketball Players Association: certified agents", url: "https://www.nbpa.com/agents" },
  nflpaAgents: { name: "NFL Players Association: agents", url: "https://nflpa.com/agents" },
  ncaaAgentCertification: { name: "NCAA: agent certification (Division I men's basketball)", url: "https://www.ncaa.org/division-i/governance/membership-and-institutional-resources/agent-certification/" },
  // money and business
  irsNil: { name: "IRS: name, image and likeness income", url: "https://www.irs.gov/businesses/small-businesses-self-employed/name-image-and-likeness-income" },
  irsSelfEmploymentTax: { name: "IRS: Topic no. 554, self-employment tax", url: "https://www.irs.gov/taxtopics/tc554" },
  irsEstimatedTaxes: { name: "IRS: estimated taxes", url: "https://www.irs.gov/businesses/small-businesses-self-employed/estimated-taxes" },
  irsTravel: { name: "IRS: Topic no. 511, business travel expenses", url: "https://www.irs.gov/taxtopics/tc511" },
  irsScholarships: { name: "IRS: Topic no. 421, scholarships, fellowship grants and other grants", url: "https://www.irs.gov/taxtopics/tc421" },
  irsP970: { name: "IRS: Publication 970, tax benefits for education", url: "https://www.irs.gov/publications/p970" },
  taxpayerAdvocateNil: { name: "IRS Taxpayer Advocate Service: name, image and likeness", url: "https://www.taxpayeradvocate.irs.gov/get-help/general/nil/" },
  ftcDisclosures101: { name: "FTC: Disclosures 101 for social media influencers (2019)", url: "https://www.ftc.gov/business-guidance/resources/disclosures-101-social-media-influencers" },
  ftcGuidesQuestions: { name: "FTC: the Endorsement Guides, what people are asking", url: "https://www.ftc.gov/business-guidance/resources/ftcs-endorsement-guides-what-people-are-asking" },
  usptoWhatIs: { name: "USPTO: what is a trademark?", url: "https://www.uspto.gov/trademarks/basics/what-trademark" },
  usptoProcess: { name: "USPTO: trademark process", url: "https://www.uspto.gov/trademarks/basics/trademark-process" },
  usptoScams: { name: "USPTO: protect against trademark scams", url: "https://www.uspto.gov/trademarks/protect" },
  sbaStructure: { name: "SBA: choose a business structure", url: "https://www.sba.gov/counseling/launch-your-business/#business-structure" },
  sbaRegister: { name: "SBA: register your business", url: "https://www.sba.gov/counseling/launch-your-business/#register-business" },
  sbaLicenses: { name: "SBA: apply for licenses and permits", url: "https://www.sba.gov/counseling/launch-your-business/#licenses-permits" },
  sbaInsurance: { name: "SBA: get business insurance", url: "https://www.sba.gov/counseling/launch-your-business/#business-insurance" },
  irsEin: { name: "IRS: get an employer identification number (EIN)", url: "https://www.irs.gov/businesses/small-businesses-self-employed/get-an-employer-identification-number" },
  irsExemptPurposes: { name: "IRS: exempt purposes under section 501(c)(3)", url: "https://www.irs.gov/charities-non-profits/charitable-organizations/exempt-purposes-internal-revenue-code-section-501c3" },
  irsP557: { name: "IRS: Publication 557, tax-exempt status for your organization", url: "https://www.irs.gov/publications/p557" },
  irsSocialClubs: { name: "IRS: social clubs", url: "https://www.irs.gov/charities-non-profits/other-non-profits/social-clubs" },
  cdcHeadsCoaches: { name: "CDC HEADS UP: online concussion training for youth sports coaches", url: "https://www.cdc.gov/heads-up/training/youth-sports.html" },
  cfpbEmergencyFund: { name: "CFPB: an essential guide to building an emergency fund", url: "https://www.consumerfinance.gov/an-essential-guide-to-building-an-emergency-fund/" },
  cfpbFraud: { name: "CFPB: fraud and scams", url: "https://www.consumerfinance.gov/consumer-tools/fraud/" },
  secAffinity: { name: "SEC: affinity fraud, how to avoid investment scams that target groups (2013)", url: "https://www.sec.gov/about/reports-publications/investorpubsaffinity" },
  irsRetirementSelfEmployed: { name: "IRS: retirement plans for self-employed people", url: "https://www.irs.gov/retirement-plans/retirement-plans-for-self-employed-people" },
  // second pass: the gaps of the first reading
  anadGetHelp: { name: "ANAD (Anorexia Nervosa and Associated Disorders): get help", url: "https://anad.org/get-help/" },
  samhsaHelpline: { name: "SAMHSA: National Helpline", url: "https://www.samhsa.gov/find-help/helplines/national-helpline" },
  wadaList: { name: "World Anti-Doping Agency: the Prohibited List", url: "https://www.wada-ama.org/en/prohibited-list" },
  naiaHandbook: { name: "NAIA: official and policy handbook, 2026-2027", url: "https://www.naia.org/wp-content/uploads/2026/07/2026_Official_Handbook.pdf" },
  naiaGuide: { name: "NAIA: guide for the college-bound student-athlete", url: "https://www.naia.org/wp-content/uploads/2026/05/naia_guide_college_bound_student.pdf" },
  naiaExplore: { name: "PlayNAIA: explore", url: "https://play.mynaia.org/explore" },
  naiaFeeWaiver: { name: "NAIA: fee waiver policy guide", url: "https://play.mynaia.org/media/pyejlqat/fee-waiver-policy-guide.pdf" },
  ncaaAgentBylaws: { name: "NCAA: agent-specific bylaws, exam resource (excerpt of the Division I Manual)", url: "https://ncaaorg.s3.amazonaws.com/enforcement/ecag/agent/ECAG_AgentSpecificBylaws.pdf" },
  ncaaAgentFaq: { name: "NCAA: agent certification FAQ", url: "https://ncaaorg.s3.amazonaws.com/enforcement/ecag/agent/ECAG_AgentCertificationFAQ.pdf" },
  ncaaD1Summary: { name: "NCAA: summary of key regulations, Division I (2024-25)", url: "https://ncaaorg.s3.amazonaws.com/compliance/d1/2024-25/2024-25D1Comp_SummaryofNCAARegulations.pdf" },
  ncaaNbaMemo: { name: "NCAA: information regarding the 2026 NBA Draft and Combine, agents and workouts (6 March 2026)", url: "https://ncaaorg.s3.amazonaws.com/compliance/cbreform/CBR_NBADraftCombineAgentsWorkoutsMemo.pdf" },
  ncaaNflMemo: { name: "NCAA: information regarding the 2026 NFL Draft, tryouts and agents (1 December 2025)", url: "https://ncaaorg.s3.amazonaws.com/enforcement/2026ENF_NFLEducationMemo.pdf" },
  ncaaMlbMemo: { name: "NCAA: information regarding the 2024 MLB First-Year Player Draft, agents and tryouts (4 June 2024)", url: "https://ncaaorg.s3.amazonaws.com/enforcement/2024ENF_MLBEducationalMemo.pdf" },
  ncaaHouseQa: { name: "NCAA: question and answer on implementation of the House settlement (29 May 2026)", url: "https://ncaaorg.s3.amazonaws.com/governance/d1/legislation/May2026D1Gov_PhaseEightSetQuestionandAnswer.pdf" },
  ncaaHouseQa2025: { name: "NCAA: question and answer on implementation of the House settlement (24 July 2025)", url: "https://ncaaorg.s3.amazonaws.com/governance/d1/legislation/2024-25/July2025D1Gov_PhaseFiveSetQuestionandAnswer.pdf" },
  nflpaFormer: { name: "NFL Players Association: benefits for former NFL players", url: "https://nflpa.com/former-players/benefits" },
  nflpaActive: { name: "NFL Players Association: your benefits", url: "https://nflpa.com/active-players/benefits" },
  nhlRetireeFund: { name: "NHL: NHL, NHLPA and Alumni Association unveil a healthcare and wellness fund for retirees (10 September 2025)", url: "https://www.nhl.com/news/nhl-nhlpa-alumni-association-unveil-healthcare-and-wellness-fund-for-retirees" },
  dolSpdFaq: { name: "U.S. Department of Labor: FAQs about retirement plans and ERISA", url: "https://www.dol.gov/agencies/ebsa/about-ebsa/our-activities/resource-center/faqs/retirement-plans-and-erisa" },
  dolKnowRetirement: { name: "U.S. Department of Labor: what you should know about your retirement plan", url: "https://www.dol.gov/agencies/ebsa/about-ebsa/our-activities/resource-center/publications/what-you-should-know-about-your-retirement-plan" },
  usaGovDisability: { name: "USAGov: SSDI and SSI benefits for people with disabilities", url: "https://www.usa.gov/social-security-disability" },
  naicDisability: { name: "NAIC: if a disability were to keep you from earning a living, how would you pay your bills?", url: "https://content.naic.org/article/consumer_insight_if_disability_were_keep_you_earning_living_how_would_you_pay_your_bills.htm" },
  flWaiverAnalysis: { name: "Florida Senate: bill analysis of liability releases (2010)", url: "https://www.flsenate.gov/Session/Bill/2010/2440/Analyses/20102440SJU_2010s2440.ju.pdf" },
  ohioZivich: { name: "Supreme Court of Ohio: Zivich v. Mentor Soccer Club (1998)", url: "https://www.supremecourt.ohio.gov/rod/docs/pdf/0/1998/1998-Ohio-389.pdf" },
  michiganWaiver: { name: "Michigan Legislature: release from liability for injury of a minor during recreational activity (MCL 700.5109)", url: "https://legislature.mi.gov/Laws/MCL?objectName=mcl-700-5109" },
  montanaWaiver: { name: "Montana Code 27-1-753: limitation on liability in sport or recreational opportunity", url: "https://mca.legmt.gov/bills/mca/title_0270/chapter_0010/part_0070/section_0530/0270-0010-0070-0530.html" },
  finraBasics: { name: "FINRA: investing basics", url: "https://www.finra.org/investors/investing/investing-basics" },
  finraMutualFunds: { name: "FINRA: mutual funds", url: "https://www.finra.org/investors/investing/investment-products/mutual-funds" },
  finraFraud: { name: "FINRA: avoid fraud", url: "https://www.finra.org/investors/protect-your-money/avoid-fraud" },
  cfpbAdviser: { name: "CFPB: know your financial adviser", url: "https://files.consumerfinance.gov/f/documents/cfpb_flyer_senior-financial-advisors_2021-04.pdf" }
});

// Each topic names the kind of advice it is not (the closing line), the pages it rests on, and its text.
const TOPICS = Object.freeze({
  "athlete-overview": {
    kind: "general",
    title: "What Kyro can do for an athlete",
    sources: [],
    text: "I can explain, in plain words and with the official page behind every answer, what matters most to an athlete, from a school team to a professional: what to eat and drink, eating too little for the training, supplements, the prohibited list and drug testing, how much to train, sleep and a strained muscle, a concussion, heat, pressure and mental health, abuse in sport, who may play, amateur rules and how scholarships work in the NCAA and the NAIA, name, image and likeness deals and the House settlement, agents, taxes, endorsements, starting a business, running a youth club, liability waivers, league pensions and disability cover, and money after sport. I also keep a training log by voice (say, log a 45 minute workout) and can save a meal plan or a training plan as a file. I am not a doctor, lawyer, tax adviser or agent: I diagnose nothing, file nothing and sign nothing, and I will not help anyone get around a drug test. Where an official page does not say something, I say so and tell you who to ask. For example, ask me what to eat before a game, whether a college athlete can take a sponsorship, or how to report a coach."
  },
  "athlete-nutrition": {
    kind: "health",
    title: "What to eat and drink around training",
    sources: ["eatrightTiming", "eatrightGameday", "ncaaFuelRecovery", "ncaaEatingFrequency", "ncaaHydration"],
    text: "The Academy of Nutrition and Dietetics says to eat about one to four hours before a workout, depending on how your body tolerates food, with carbohydrates and protein, for example a peanut butter and banana sandwich or Greek yogurt with berries, and not right before exercise because digestion competes with the muscles. After an intense workout it says to try to eat within an hour, again with carbohydrates and protein. For game day it says a full meal about three hours before, a small snack 30 minutes to an hour before, and not to skip lunch. Both it and the NCAA say never to try anything new on a game or race day. On fluids, the Academy says water is usually enough under an hour and a sports drink can help for longer sessions, that fluid loss over 2 percent of body weight harms performance, and that nearly clear urine means you are well hydrated. The NCAA's recovery sheet from February 2026 lists rules of thumb of about 0.75 grams of protein per pound of body weight a day, and its 2025 sheet suggests 20 to 40 grams of protein with carbohydrates in a recovery snack. An older NCAA sheet from 2013 warns that large amounts of plain water after long, hard sweating can cause dangerously low blood sodium. These pages do not give amounts for your sport, size or position, so a registered dietitian who specializes in sports, which the NCAA calls a board certified specialist in sports dietetics, can set a plan."
  },
  "athlete-energy": {
    kind: "health",
    title: "Eating too little for the training, and eating problems in sport",
    sources: ["nedaToolkit","ncaaEnergy","anadGetHelp","samhsaHelpline","lifeline988"],
    text: "The National Eating Disorders Association's 2025 toolkit says relative energy deficiency in sport, called RED-S, is caused by low energy availability, which means eating too little to support both training and the body's basic needs. It lists effects such as menstrual problems, weaker immune function, heart problems, depression or irritability, slower recovery, more injuries and lower strength and endurance. Signs it lists in athletes include difficulty taking rest days, training while injured or sick, anxiety or guilt when unable to train, rigid eating or avoiding foods, frequent strains or fractures, feeling cold and dizziness. It names weight-class sports, sports that stress appearance, and endurance sports as higher risk, and says early detection of an eating disorder is the strongest predictor of full recovery. It says RED-S needs a full evaluation by a sports medicine physician, and is treated with a physician, a sports dietitian and a mental health provider. The toolkit is written for coaches and athletic trainers, and it tells them to reassure an athlete that asking for help will not jeopardize a place on the team. An NCAA sheet says a female athlete who misses three or more periods in a row should talk to the team physician. For someone to talk to, ANAD, the Anorexia Nervosa and Associated Disorders charity, lists a helpline at 888-375-7767, Monday to Friday, 9 a.m. to 9 p.m. Central, which gives free support to anyone with a difficult relationship with eating or body image, with or without a diagnosis, can make treatment referrals, and returns messages left outside those hours. SAMHSA's National Helpline, 1-800-662-4357, is open 24 hours a day, every day, and you can text your ZIP code to 435748; its page, last updated in 2023, does not say it is only for eating disorders. If you are in crisis, call or text 988."
  },
  "athlete-supplements": {
    kind: "health",
    title: "Supplements, medicines and drug testing",
    sources: ["usadaSupplements", "usadaLogos", "usadaAntiDoping101", "usadaSubstances", "usadaProhibitedList", "usadaTue", "globalDro"],
    text: "USADA says athletes under its rules are responsible for what is in and on their bodies, and that this holds whatever the intent, even when a substance comes from a contaminated supplement. It says supplements are regulated only after they are sold, that labels cannot be relied on, that some are contaminated or spiked with banned substances, and that no supplement is risk-free. If an athlete uses one, USADA recommends only third-party certified products and currently names NSF Certified for Sport, and it warns to check the batch number, because some bottles showed the logo for a batch that was never certified. For medicines, Global DRO shows whether a medicine is prohibited, based on the WADA list, but it says it holds no information on supplements. USADA's Drug Reference Line is (719) 785-2000, option 2, Monday to Friday, 8 a.m. to 5 p.m. Mountain Time. A medicine on the prohibited list may be allowed with a therapeutic use exemption. USADA says athletes in its testing pools must get one before using the medicine, that other athletes should send a pre-check form to find out whether they need one, and that a request should go in at least 30 days before planned use. The prohibited list changes every January first. USADA's rules cover athletes in Olympic and Paralympic sport and members of national governing bodies, and USADA and the NCAA do not recognize each other's exemptions, so a college athlete should ask the athletic department's medical staff. I cannot tell you whether a product or medicine is allowed for you."
  },
  "athlete-training": {
    kind: "health",
    title: "How much to train, and strength training for young athletes",
    sources: ["cdcPhysicalActivity", "cdcChildActivity", "aapResistance", "aapWeightRisk"],
    text: "The CDC says children and teens aged 6 to 17 need at least 60 minutes a day of moderate to vigorous activity, mostly aerobic, with vigorous activity, muscle strengthening and bone strengthening each on at least 3 days a week. Adults aged 18 to 64 need at least 150 minutes a week of moderate activity plus muscle strengthening on at least 2 days a week. These are general health guidelines, not training loads for a competitive athlete, and the pages give no sets, repetitions or weekly plan for a sport. On strength training for young people, the American Academy of Pediatrics says children of all ages can benefit with proper supervision and good technique, combined with aerobic training and dynamic warm-ups. It says children with uncontrolled high blood pressure, uncontrolled seizures, certain heart conditions or a history of chemotherapy should see a medical professional first. An older AAP page from 2009 says explosive or heavy Olympic-style lifts should wait until after the growth spurt, that before puberty the advice is light weights with more repetitions, and that most serious injuries happened with unsupervised home equipment. A coach or athletic trainer who knows your sport can set the plan."
  },
  "athlete-recovery": {
    kind: "health",
    title: "Sleep, rest days, overuse and a strained muscle",
    sources: ["cdcSleep", "ncaaSleep", "aapBurnout", "aapOveruse", "orthoHamstring", "medlineStrains"],
    text: "The CDC's sleep table says teens aged 13 to 17 need 8 to 10 hours and adults 18 to 60 need 7 or more. An NCAA sheet recommends 8 hours for college athletes and says sleep-deprived athletes have a higher risk of muscle and bone injury and slower recovery after injury. For rest, the American Academy of Pediatrics says young athletes need one to two rest days a week and two to three months off during the year, and that weekly training hours should not exceed the child's age. An older 2011 AAP handout describes overuse injury in four stages, from pain after activity to constant pain even at rest, and says to increase weekly training by no more than 10 percent. On a hamstring strain, AAOS OrthoInfo says it is common in sprinters, that grade 1 is mild and grade 3 is a complete tear that can take months, and that the first steps are rest, ice for 20 minutes at a time not directly on skin, a compression bandage and raising the leg, then physical therapy once pain and swelling settle, with a return to sport only with a doctor's approval because re-injury can cause lasting problems. It says people often see a doctor for sudden pain in the back of the thigh during exercise, and that an exam and imaging show how bad it is. The pages I read do not list signs that mean see a doctor right away, so please do not wait on me for that."
  },
  "athlete-concussion": {
    kind: "health",
    title: "A blow to the head: concussion",
    sources: ["cdcHeadsSigns", "cdcHeadsBasics", "cdcHeadsRecovery", "cdcHeadsReturn"],
    text: "The CDC says a concussion is a brain injury from a bump, blow or jolt to the head, or a hit to the body that moves the head and brain fast, and that symptoms can take hours or days to appear. After a bump, blow or jolt to the head, the CDC says to call 911 or go to the nearest emergency department for any of these danger signs: seizures, not recognizing people or places, repeated vomiting, increasing confusion or agitation, loss of consciousness or being unable to wake, slurred speech, weakness or numbness, a headache that gets worse and does not go away, or one pupil larger than the other. Otherwise the CDC says to have a health care provider check the person within the first 24 to 48 hours, to limit screens and hard activity for the first day or two with light activity such as short walks fine, and not to return to sport until a provider approves. Its return-to-sport plan has six steps, from regular activities, to light aerobic, to moderate, to heavy non-contact, to full-contact practice, to competition; each step takes at least 24 hours, and if symptoms come back the person stops and goes back a step. Most children feel better in 2 to 4 weeks. These pages are written for parents of children and do not address professional athletes separately."
  },
  "athlete-heat": {
    kind: "health",
    title: "Training and playing in the heat",
    sources: ["cdcHeatIllness", "cdcHeatAthletes", "nataHeat"],
    text: "The CDC says for athletes that muscle cramping may be an early sign of heat illness, that someone who feels faint or weak should stop all activity and get to a cool place, and to drink more water than usual and not wait until thirsty. It says to get medical care right away if you or a teammate has symptoms. The CDC's page on heat illness, written for workers, says heat stroke is the most serious, with confusion, slurred speech, passing out, seizures, or very high body temperature, hot dry skin or heavy sweating, and that it can be fatal if treatment is delayed: call 911, stay with the person, move them to a cool shaded place, and cool them quickly with cold water or cold wet cloths on the head, neck, armpits and groin. For heat exhaustion, with headache, nausea, dizziness, weakness and heavy sweating, it says to get a medical evaluation, move out of the heat and sip cool water. For heat cramps, it says drink water and a sports drink or snack with carbohydrates and electrolytes every 15 to 20 minutes, avoid salt tablets, and get medical help if cramps do not go away within an hour. The National Athletic Trainers' Association says for heat stroke to cool first and transport second, and that athletes should be acclimatized over 7 to 14 days. That is for medical staff, not for an athlete to do alone."
  },
  "athlete-mental": {
    kind: "health",
    title: "Pressure, stress and mental health",
    sources: ["lifeline988", "nimhCaring", "ncaaMentalHealth"],
    text: "That sounds like a heavy thing to carry, and asking about it is a good step. In the United States, you can call or text 988, or chat at 988lifeline.org, any time, free and confidential. Its pages say you do not have to be suicidal to call, and that reasons include depression, loneliness and relationships. If life is in danger, call 911. The National Institute of Mental Health says to seek professional help when symptoms are severe or distressing or last two weeks or more, such as sleep problems, changes in appetite, trouble concentrating or loss of interest, and to start with a primary care provider who can refer you. It also lists steady sleep, exercise, breathing and relaxation, and learning to say no when overloaded. The NCAA's mental health best practices say schools should screen athletes for distress at least once a year, and its page lists the NAMI HelpLine at 1-800-950-6264 and the Trevor Project for LGBTQ young people at 1-866-488-7386. The pages I read do not speak to performance pressure in sport in particular, and none addresses professional athletes, so a team doctor, school counselor or therapist is the person to ask."
  },
  "athlete-safesport": {
    kind: "legal",
    title: "Abuse and misconduct in sport",
    sources: ["safesportReport", "safesportMaapp", "safesportAbout", "publicLaw115126"],
    text: "The U.S. Center for SafeSport takes reports of abuse and misconduct in the U.S. Olympic and Paralympic movement. You can call 833-587-7233, Monday to Friday, 6 a.m. to 6 p.m. Mountain Time, or use its online form, which allows anonymous reports. Anyone can report, including parents and coaches, and you do not have to be the athlete. If you suspect child abuse or neglect, the Center says to report it to local authorities in addition to, and before, reporting it to the Center, and in an emergency to call 911. RAINN's line, which it lists, is 1-800-656-4673. The Center's Minor Athlete Abuse Prevention Policies limit one-on-one interaction between adults and minor athletes, and organizations had to adopt the 2025 version by January first, 2025, but the page I read does not list the specific rules, so I will not describe them. Under a 2018 federal law, adults authorized to interact with minors or amateur athletes in these organizations must report suspected child abuse to the agency the law designates, and the law says as soon as possible means within a 24-hour period. Emotional and physical misconduct such as bullying, hazing and harassment can also be reported to the Center or to the sport's national governing body."
  },
  "athlete-eligibility": {
    kind: "legal",
    title: "Who may play: eligibility, recruiting and scholarships",
    sources: ["ncaaRegister","ncaaAmateurismAccount","ncaaDivisionI","ncaaDivisionII","ncaaDivisionIII","ncaaAgeRules","ncaaScholarships","naiaHighSchool","nfhsEligibility"],
    text: "The NCAA says a Division I or II prospect, recruit or walk-on needs an academic and athletics certification account with the Eligibility Center, and its page lists the athletics certification fee as $85, with a fee waiver available. For Division I it requires 16 core courses, with 10 done before the seventh semester and a core GPA of at least 2.3. For Division II it requires 16 core courses and a 2.2. Division III schools set their own standards, and its athletes should register to get an NCAA ID. The NCAA also says that in Divisions I and II, an athlete who enters college no later than the academic year after the 19th birthday generally gets up to five years, with the clock running continuously once it starts, and that redshirts and seasons of competition rules are eliminated, with a transition for current athletes. On scholarships, the NCAA says coaches award them, they are typically year to year and renewal is not guaranteed, a school that plans to reduce or not renew must notify the student in writing by July 1, and Division I ended the National Letter of Intent in 2024. For the NAIA, which has its own rules, fees and scholarship limits, ask me about the NAIA. For rules about pay, prizes, tryouts and the pro draft, ask me about amateurism. For high school, state associations set eligibility and transfer rules, so ask yours."
  },
  "athlete-nil": {
    kind: "legal",
    title: "Name, image and likeness deals for school athletes",
    sources: ["ncaaNil","ncaaConsentJudgment","nfhsNil"],
    text: "The NCAA says a college athlete's name, image and likeness deal is allowed when you are paid for the use of your NIL, the deal has a valid business purpose tied to a product, service or public event, and the pay is within a reasonable range for someone of your fame and influence. You may use an agent or marketing professional. It says pay-for-play, pay with no required promotional work, and agreements with no defined plan are not allowed. In Division I, deals of $600 or more with third parties must be reported through NIL Go, and compliance is required for eligibility, so talk to your school's compliance office and check your school's policy and your state's law before you sign. An April 2025 consent judgment lets prospective and transferring athletes negotiate commercial NIL deals before enrolling at a Division I school, but not pay for athletic performance. For the House settlement, the revenue-sharing cap and how NIL Go works, ask me about the House settlement. For high school athletes, NIL rules are set state by state, and an NFHS article from 2023 said 30 states and Washington D.C. allowed payments, so check your state association."
  },
  "athlete-agent": {
    kind: "legal",
    title: "Choosing and dealing with an agent",
    sources: ["uniformLawAgents","ftcSparta","texasAgents","alabamaAgents","nbpaAgents","nflpaAgents","ncaaAgentCertification"],
    text: "Most states regulate agents under a Uniform Athlete Agents Act, which the Uniform Law Commission lists in a 2000 version, a revised 2015 version and 2019 amendments, but I could not read the Act's text, so I will not state what it requires of an agent's contract or of notice to the school; your state's Secretary of State can tell you. The federal Sports Agent Responsibility and Trust Act says an agent may not recruit a student athlete with false information, false promises or anything of value before a contract is signed. States run the registration. For example, Texas requires an agent to get a certificate from its Secretary of State before recruiting, and Alabama has a listing of registered agents. For professionals, the NBA players' union says it certifies and regulates every agent who represents NBA players, and the NFL players' union has an agent search and an agent disciplinary summary. For what signing with an agent does to a college athlete's eligibility, ask me about the NCAA's agent rule, and before you sign, or even agree to representation, ask your school's compliance office."
  },
  "athlete-taxes": {
    kind: "tax",
    title: "Taxes on what an athlete earns or is given",
    sources: ["irsNil", "irsSelfEmploymentTax", "irsEstimatedTaxes", "irsTravel", "irsScholarships", "irsP970", "taxpayerAdvocateNil"],
    text: "The IRS says income from name, image and likeness deals is generally taxable, including things that are not cash, such as merchandise and gift cards, and that you report all of it even if the payer sends no form. It says a payer sends a Form 1099-NEC for payments of $2,000 or more for payments received in 2026, and that self-employed athletes usually have no tax withheld and may need to pay estimated tax with Form 1040-ES. Self-employment tax is 15.3 percent, made up of 12.4 percent for Social Security and 2.9 percent for Medicare, and the IRS says you usually owe it when net self-employment earnings are $400 or more. The IRS says to keep receipts and travel and mileage logs, since costs of earning NIL income may be deductible, and that travel away from home for business can be deducted if it is ordinary and necessary. On states, the IRS says to track where you perform, because you may owe state tax where you earn income, and its Taxpayer Advocate page says states where an athlete plays or makes appearances could tax a portion. The pages I read do not cover professional athletes or any state's rules. For scholarships, the IRS says the part that pays tuition and required fees and books is tax free for a degree candidate, and the part for room and board, travel or payment for required services is taxable, and that athletic scholarships follow the same rules. NIL income also counts on the FAFSA and could affect aid."
  },
  "athlete-brand": {
    kind: "legal",
    title: "Endorsements, posting about a brand, and protecting your name",
    sources: ["ftcDisclosures101", "ftcGuidesQuestions", "usptoWhatIs", "usptoProcess", "usptoScams"],
    text: "The FTC says to disclose any financial, employment, personal or family tie to a brand, including free or discounted products, even if the brand did not ask you to post. On athletes, its question-and-answer page says whether a disclosure is required depends on whether a significant share of viewers would know the post is paid, that this is hard to judge, and that the FTC recommends disclosing. It gives clear examples, such as Ad, #ad and Sponsored by the brand, and says wording like #ambassador, Gifted or a bare thank you is not enough. Put it at the start of the post, say it and show it in a video, and do not rely on a platform's tool alone. You are responsible for your own disclosures, and you cannot describe an experience with a product you have not tried. To protect a name or logo, the USPTO says a trademark identifies your goods or services and does not give exclusive rights to a word in general, that you can use the TM symbol without filing, the registered symbol only after federal registration, and that registration gives nationwide rights. It says to check whether your mark can be registered before applying, and to search its database first. It strongly encourages an attorney, and it warns about scam trademark offers, so start from the official government site. If you want a brand plan, I can save a checklist as a file."
  },
  "athlete-business": {
    kind: "money",
    title: "Starting a business: an academy, camps, a gym or apparel",
    sources: ["sbaStructure", "sbaRegister", "sbaLicenses", "sbaInsurance", "irsEin", "usptoWhatIs"],
    text: "The Small Business Administration says a sole proprietorship is easy to form but does not separate your business and personal assets, so you can be personally liable, while an LLC protects personal assets in most instances and is formed by filing with your state. It says registering the business name protects it at the state level, a trade name or DBA is registered with the state, county or city, and registration costs are usually under $300, varying by state. A federal trademark protects a name nationwide. The IRS says an EIN is free and warns to beware of websites that charge for one. The SBA says most businesses need federal, state or local licenses or permits and to check with your Secretary of State and local government. It lists general liability insurance for bodily injury and property damage and professional liability insurance for errors in a service business. Its pages do not mention sports, camps or youth programs in particular, so ask your state and city what a training academy or camp needs. If you will coach minors, ask me about safe sport as well. I can save a startup checklist for your idea as a file."
  },
  "athlete-prohibited": {
    kind: "health",
    title: "The prohibited list: what is banned",
    sources: ["wadaList","usadaProhibitedList","aiuProhibited"],
    text: "The World Anti-Doping Agency's own page says the prohibited list says what substances and methods are banned in sport and when, that it is updated at least annually, published in October and in force on 1 January, in English and French. It says a substance or method can be listed if it meets any two of three tests: it has the potential to enhance sport performance, it is an actual or potential health risk, or it violates the spirit of sport. It says substances that mask the effect or detection of banned substances are also prohibited, and that a substance not approved for human use is likely prohibited too. Its categories include anabolic agents, peptide hormones, hormone modulators, diuretics and masking agents, and blood and gene manipulation, which are banned at all times; stimulants, narcotics, cannabinoids and glucocorticoids, banned in competition; and beta-blockers, banned in particular sports. On cannabis, it says all natural and synthetic cannabinoids are prohibited except cannabidiol, CBD, but some CBD oils may also contain THC and could cause a positive test. It says clenbuterol is prohibited at all times with no threshold, that a stimulant called methylhexaneamine is a constituent of some dietary supplements, and that a substance labelled specified does not relieve an athlete of the strict liability rule, which makes the athlete responsible for all substances that enter their body. It says glucocorticoids by injection, mouth or rectum are banned in competition, with washout periods that depend on the drug, and may need a therapeutic use exemption. I did not read the list substance by substance, so I cannot tell you whether a particular substance is on it: your anti-doping organization, Global DRO for medicines, or your team doctor can."
  },
  "athlete-naia": {
    kind: "legal",
    title: "The NAIA: fees, eligibility, amateurism and aid",
    sources: ["naiaHandbook","naiaGuide","naiaExplore","naiaFeeWaiver","naiaHighSchool"],
    text: "The NAIA says every athlete must register with the NAIA Eligibility Center before competing. Its pages list a one-time, nonrefundable registration fee of $110 for a U.S. or Canadian student who enrolls full time right after high school, $145 for a student with a break after high school, $160 for a transfer with any college enrollment, and $170 for an international student, and say a different fee can apply if your student type changes. A U.S. student can ask for a fee waiver through the NAIA high school portal if they received an SAT or ACT fee waiver or use the free or reduced-price lunch program. For an entering freshman, the NAIA's 2026-27 handbook says a student is eligible with an overall high school GPA of 2.300 or higher on a 4.000 scale, or by meeting two of three: an ACT of 18 or an SAT of 970, a GPA of 2.000, or a rank in the upper half of the class. The NAIA says no core courses are necessary. On amateurism, the handbook says only amateurs are eligible, and a student loses amateur standing by taking expense reimbursement beyond actual travel, meals and lodging, signing a contract with a professional team, or competing as a professional. It says NAIA schools may give athletics aid, no more than the actual cost of tuition, fees, books and room and board, and that each sport has an overall limit. It says a transfer is not required to sit out a residency period, though conference rules may apply. These are updated every year, so confirm on PlayNAIA."
  },
  "athlete-amateurism": {
    kind: "legal",
    title: "NCAA amateurism: pay, prizes, tryouts and the pro draft",
    sources: ["ncaaAgentBylaws","ncaaD1Summary","ncaaNbaMemo","ncaaNflMemo","ncaaMlbMemo","ncaaRegister"],
    text: "The NCAA's Division I bylaw 12.1.2, in an NCAA exam-resource excerpt, says a person loses amateur status by using athletics skill for pay in any form, accepting a promise of pay, signing a professional contract, taking a salary or expenses from a professional organization, competing on a professional team, entering a professional draft after enrolling, or agreeing to be represented by an agent. A Division I summary for 2024-25 says prize money outside tennis may not exceed $300 above actual and necessary expenses, and that in tennis, before enrollment, up to $10,000 per calendar year is allowed. It says one 48-hour tryout per team after enrolling is allowed with expenses, without missing class. On the draft, the NCAA's March 2026 memo says a men's basketball player keeps eligibility if he asks for an NBA Undergraduate Advisory Committee evaluation, asks to be removed from the draft, tells his athletic director in writing within 10 days after the draft combine, and is not drafted. The NCAA's December 2025 football memo says an athlete three years out of high school may enter once and keep eligibility if he is not drafted and declares his intent to resume play within 72 hours. Its 2024 baseball memo says a draft does not by itself end eligibility, and a drafted player who does not sign can return. Those memos are for particular draft years and dates change. The Eligibility Center reviews academic records and athletics-related activities. The pages I read do not give a plain-language amateurism guide, and the summary is for 2024-25, so please confirm with the Eligibility Center or your compliance office."
  },
  "athlete-house": {
    kind: "legal",
    title: "The House settlement, the revenue-sharing cap and NIL Go",
    sources: ["ncaaHouseQa","ncaaHouseQa2025","ncaaBakerLetter","ncaaNil"],
    text: "The NCAA's question-and-answer document on the House settlement, updated 29 May 2026, says schools that take part may give athletes direct payments and benefits up to a yearly limit it calls the benefits cap. It says the cap for 2025-26 is $20.5 million, worked out as 22 percent of the average of eight revenue categories at the five defendant conferences and Notre Dame, that it is recalculated every three years, and that it rises 4 percent in the second and third year of each period. The 2026-27 dollar figure is not printed in the pages I read, and the NCAA president's June 2025 letter said 22.5 percent, so I will not state this year's number. Third-party NIL deals do not count against the cap. In Division I, deals of $600 or more with outside payors are reported through NIL Go, which the College Sports Commission runs, within five business days of agreeing the payment terms, and smaller deals from the same payor are added up. For deals with a school-associated entity or person, the Commission checks for a valid business purpose, which the July 2025 document describes as promotion or endorsement of goods or services offered to the general public for profit, and for pay within a reasonable range for similar people. If a deal is not cleared, the athlete can revise it with the payor, cancel it and refund, or appeal to a neutral arbitrator, who has 45 days and whose decision is final and binding; going ahead with a deal that was not cleared may bring enforcement, which could include loss of eligibility. I could not read the College Sports Commission's own website, and I found no official page saying whether the settlement is being appealed, so I will not say."
  },
  "athlete-agent-eligibility": {
    kind: "legal",
    title: "The NCAA's rule on agents and a college athlete's eligibility",
    sources: ["ncaaAgentBylaws","ncaaAgentFaq","ncaaAgentCertification","ncaaNil"],
    text: "The NCAA's Division I bylaws, in its agent exam resource, define an agent broadly: anyone who represents or tries to represent an athlete to market their athletics ability or reputation for financial gain, which may include a contract advisor, financial advisor, marketing representative or brand manager. Bylaw 12.3.1 says a person is ineligible in a sport if they ever agreed, orally or in writing, to be represented by an agent for that purpose, and an agreement not limited in writing to particular sports counts for all sports. Bylaw 12.3.1.4 says accepting transportation or other benefits from an agent, even one who says he has no interest in representing you, also costs eligibility, and that includes benefits to family and friends. Bylaw 12.3.2 says advice from a lawyer about a proposed professional contract is not an agent agreement unless the lawyer also negotiates for you. There are exceptions: baseball and men's ice hockey players drafted before full-time enrollment may use an agent or attorney in contract negotiations, and a men's basketball player may sign with an NCAA-certified agent after his season ends and after requesting an NBA evaluation. The NCAA's football memo says no to any agreement with an agent or runner, and says contact alone is not prohibited if there is no agreement and no benefits. The NBA, NFL and MLB memos say that under Division I rules, using an agent or professional services provider for NIL activities is permissible. The NCAA's own FAQ says prospects may sign with agents and NIL representatives before enrolling, while the bylaw text I read still says ever, and I have no dated source for the change, so confirm with your compliance office before you sign anything."
  },
  "athlete-waiver": {
    kind: "legal",
    title: "Liability waivers for youth and athletic programs",
    sources: ["flWaiverAnalysis","ohioZivich","michiganWaiver","montanaWaiver"],
    text: "I found no state attorney general, bar or court page that explains waivers in plain words. What I could read is state law and court decisions, and they show the rules differ by state and by who runs the activity. A Florida Senate analysis from 2010 says there is no general rule on parental waivers, that whether a parent's waiver for a minor is enforced depends on the state's common law and statutes, and it quotes a 2007 study finding parental waivers likely enforced under some circumstances in at least 11 states, unlikely in 14, and unanswered in about half of the states; its table is dated. The Ohio Supreme Court held in 1998 that parents may bind their minor children to waivers in favor of volunteers and sponsors of nonprofit sport activities where the claim is negligence. Michigan's law lets a parent release a person in writing for a minor's injury in a recreational activity run by a nonprofit, only for injury or death resulting solely from inherent risks, not the other party's negligence. Montana's law says a waiver before a sport or recreational opportunity can cover ordinary negligence or inherent risks if it states the known inherent risks and carries a bold warning about the right to a jury trial, and it can still be challenged; it does not mention minors. So I cannot say whether a waiver would hold where you are: a lawyer in your state can."
  },
  "athlete-pension": {
    kind: "money",
    title: "League pensions, benefits and disability cover",
    sources: ["nflpaFormer","nflpaActive","nhlRetireeFund","dolSpdFaq","dolKnowRetirement","usaGovDisability","naicDisability"],
    text: "What the players' own pages say differs a lot by league. The NFL Players Association says a player with three credited seasons is vested, and lists for former players a Pension Plan with lifetime monthly benefits for vested players starting at age 55, or deferred to 65 for a higher monthly amount, an Annuity Program, a Capital Accumulation Plan, a Second Career Savings Plan with distributions from age 45, a severance lump sum for two or more credited seasons, a disability and survivor plan, and five years of free extended medical coverage for three or more credited seasons. Its pages give no dollar amounts and do not define a credited season. For hockey, the NHL and the NHL Players' Association announced in September 2025 a retiree healthcare and wellness fund, with $2 million a year from each side, for alumni with catastrophic health problems and no insurance, and for wellness. I could not read current pension rules for Major League Baseball, the NBA or Major League Soccer from official pages, and the WNBA's agreement was only tentative, so I will not state them. For any plan you are in, the U.S. Department of Labor says you can ask for the summary plan description, which describes the plan's key rules, that a defined benefit plan sends a benefit statement every three years, and that employer contributions to such a plan generally vest 100 percent after five years or in steps from three to seven years, though a union plan's own rules govern. On disability, USAGov says Social Security disability is tied to your work history and has a five-month wait before benefits begin. The insurance regulators' association, the NAIC, says private disability insurance typically replaces about 60 percent of pre-disability income, often after a waiting period such as 30 days, and that policies differ on whether they pay if you cannot do your own occupation or only if you cannot do any work. I found nothing in these pages that is specific to athletes' disability cover."
  },
  "athlete-club": {
    kind: "legal",
    title: "Running a youth sports club or league",
    sources: ["irsExemptPurposes","irsP557","irsSocialClubs","cdcHeadsCoaches","sbaInsurance","safesportMaapp"],
    text: "The IRS lists fostering national or international amateur sports competition among the exempt purposes under section 501(c)(3). Its Publication 557 says an organization with that purpose qualifies only if none of its activities involve providing athletic facilities or equipment, and that a qualified amateur sports organization is a separate kind that can provide them. The pages I read do not say how the IRS treats a local youth league, so a tax professional can tell you. Publication 557 describes social and recreation clubs under 501(c)(7), including some sport clubs, with limited membership supported by dues, and says a small organization with assets of $250,000 or less and gross receipts of $50,000 or less can use the short Form 1023-EZ. The SBA lists general liability insurance for bodily injury and property damage. The CDC offers free online concussion training for youth sports coaches, and organizations in the Olympic and Paralympic movement must follow the Minor Athlete Abuse Prevention Policies. For waivers, ask me about liability waivers, because the rules differ by state. I found no official page on registration fees or dues, so I will not say what to charge."
  },
  "athlete-money": {
    kind: "money",
    title: "Money and a career after sport",
    sources: ["cfpbEmergencyFund","cfpbFraud","secAffinity","irsRetirementSelfEmployed","finraBasics","finraMutualFunds","finraFraud","cfpbAdviser"],
    text: "The CFPB says that without savings even a small shock can push you into credit cards or loans, gives no fixed amount to save, and says if your income is irregular or comes in one-time sums, to save part of it and move extra into savings in better weeks. It lists scam types such as imposter scams, phishing and wire fraud, and says to report fraud at reportfraud.ftc.gov. An older SEC page from 2013 says scams that target groups, including professional groups, often use trusted members of the group, and it lists the warning signs: promises of guaranteed or unusually high returns, no written details, pressure to act quickly, and reliance on someone else having made money. On investing, FINRA says owning stock makes you a part owner of a company, a bond is debt that the issuer repays with interest, and a fund can hold dozens or even thousands of securities; it says to learn about diversification so you do not bet the ranch on one investment, that all mutual funds have fees and expenses, with one kind of fee, the 12b-1 fee, capped at 1 percent of assets, and, against fraud, to decline unsolicited pitches, to check the seller's registration on BrokerCheck, and to talk to a trusted person first. The CFPB's adviser flyer lists BrokerCheck and the SEC's adviser database to check a regulated adviser, and says to ask how an adviser is paid and to get conflicts of interest in writing. For someone who is self-employed, the IRS describes retirement plans such as a SEP, a one-participant 401(k) and a SIMPLE IRA, but the dollar limits on its page were out of date, so check the IRS for this year's. For pensions and disability cover, ask me about athlete pensions."
  }
});

const CLOSINGS = Object.freeze({
  health: "This is general information, not medical advice, and it does not replace a doctor, athletic trainer or sports dietitian who knows you. Guidance changes, so confirm on the official pages.",
  legal: "This is general information, not legal advice, and it does not replace your school's compliance office, your sport's governing body or a lawyer who knows sport. Rules change, so confirm on the official pages.",
  tax: "This is general information, not tax or legal advice, and it does not replace a tax professional who knows athletes. Rules change, so confirm on the official pages.",
  money: "This is general information, not financial, tax or legal advice, and it does not replace a professional who knows your situation. Rules change, so confirm on the official pages.",
  general: "I am not a doctor, lawyer, tax adviser or agent, and rules change, so please confirm anything that matters on the official pages."
});

// Outside the United States only what an official page says is stated: the pages above are American. Kenya and Nigeria get what was read about drug testing and abuse in sport; every other topic is said not to be stated.
function outsideNote(country, id) {
  const base = "These are United States rules and guidance, from American pages. Where you live is governed by its own country's rules, so please ask your own national body before you decide anything.";
  const extra = [];
  let more = "";
  const antiDoping = id === "athlete-supplements";
  const abuse = id === "athlete-safesport";
  if (id === "athlete-mental") more = " The 988 line is for the United States. I have not read an official page about crisis lines in your country, so if you are in danger, please call your local emergency number.";
  if (country === "ke") {
    if (antiDoping) { extra.push("adakHome", "adakReport", "aiuProhibited", "aiuTue"); more = " For Kenya, the Anti-Doping Agency of Kenya is the national anti-doping body: its site lists education, testing, results management and therapeutic use exemptions, and you can report doping on its report page, by email to info@adak.or.ke, or by phone on +254 722 269 584 or +254 733 837 385. For athletics, the Athletics Integrity Unit says athletes are strictly responsible for any prohibited substance found in their body, and that its 2026 prohibited list took effect on 1 January 2026."; }
    else if (abuse) { extra.push("aiuIntegrityLine"); more = " For athletics, the Athletics Integrity Unit's integrity line takes reports of doping, age manipulation, competition manipulation, bribery, betting and safeguarding concerns, by web form, email or WhatsApp, and says anonymous reports are possible. I have not read an official page about reporting abuse in sport inside Kenya."; }
  } else if (country === "ng") {
    if (antiDoping) { extra.push("fminoAntiDopingAct", "fminoAntiDopingCentre", "aiuProhibited"); more = " For Nigeria, the Federal Ministry of Information says the National Anti-Doping Act of 2025 set up the Nigeria Anti-Doping Centre, and its technical board was inaugurated on 2 July 2026. I could not read the Centre's own page, so I cannot give you a reporting line or its exemption process. For athletics, the Athletics Integrity Unit says athletes are strictly responsible for any prohibited substance found in their body."; }
    else if (abuse) { extra.push("aiuIntegrityLine"); more = " For athletics, the Athletics Integrity Unit's integrity line takes reports of doping, age manipulation, competition manipulation, bribery, betting and safeguarding concerns, by web form, email or WhatsApp, and says anonymous reports are possible. I have not read an official page about reporting abuse in sport inside Nigeria."; }
  } else if (antiDoping) {
    extra.push("aiuProhibited");
    more = " For athletics at the international level, the Athletics Integrity Unit says athletes are strictly responsible for any prohibited substance found in their body.";
  }
  return { text: base + more, extra };
}

function athleteAnswer(id, { us = true, country = null } = {}) {
  const topic = TOPICS[id];
  if (!topic) return null;
  const keys = [...topic.sources];
  let lead = "";
  if (!us && id !== "athlete-overview") {
    const note = outsideNote(country, id);
    lead = `${note.text} `;
    for (const key of note.extra) if (!keys.includes(key)) keys.push(key);
  }
  const sources = keys.map(key => SOURCES[key]);
  const cited = sources.length ? ` Sources: ${sources.map(source => source.name).join("; ")} (checked ${CHECKED_ON}).` : "";
  return { topic: id, title: topic.title, text: `${lead}${topic.text}${cited} ${CLOSINGS[topic.kind]}`, sources };
}

module.exports = Object.freeze({ CHECKED_ON, SOURCES, TOPICS, athleteAnswer });
