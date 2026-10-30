"use strict";

// Koach Learn course: Workforce Development -> "Commercial Driver's License (CDL) Preparation" (wave 1, 30 October 2026).
// Prepares learners for the CDL path: the right class and endorsements, the steps from permit to license, the state knowledge
// tests, the pre-trip inspection and safe driving. It does not grant a license: the federal rules are FMCSA's, the tests are
// the state's, and entry-level driver training (ELDT) comes from a provider on FMCSA's Training Provider Registry.
// Facts checked 30 October 2026 on law.cornell.edu (49 CFR text; ecfr.gov and fmcsa.dot.gov blocked automated reading),
// tpr.fmcsa.dot.gov and bls.gov.

const CFR_CLASSES = { name: "49 CFR 383.91: Commercial motor vehicle groups (Cornell LII copy of the federal rule)", url: "https://www.law.cornell.edu/cfr/text/49/383.91" };
const CFR_ENDORSE = { name: "49 CFR 383.153: Endorsement codes on the CDL and CLP", url: "https://www.law.cornell.edu/cfr/text/49/383.153" };
const CFR_CLP = { name: "49 CFR 383.25: Commercial learner's permit (CLP)", url: "https://www.law.cornell.edu/cfr/text/49/383.25" };
const CFR_ELDT = { name: "49 CFR 380.603: Who must complete entry-level driver training", url: "https://www.law.cornell.edu/cfr/text/49/380.603" };
const TPR = { name: "FMCSA Training Provider Registry (ELDT)", url: "https://tpr.fmcsa.dot.gov/" };
const FMCSA_CDL = { name: "FMCSA: Commercial Driver's License (the official federal CDL pages)", url: "https://www.fmcsa.dot.gov/registration/commercial-drivers-license" };
const CFR_AGE = { name: "49 CFR 391.11: Driver qualifications (age, English, medical)", url: "https://www.law.cornell.edu/cfr/text/49/391.11" };
const CFR_MED = { name: "49 CFR 391.45: When drivers must be medically examined", url: "https://www.law.cornell.edu/cfr/text/49/391.45" };
const CFR_SKILLS = { name: "49 CFR 383.113: What the CDL skills test covers", url: "https://www.law.cornell.edu/cfr/text/49/383.113" };
const CFR_INSPECT = { name: "49 CFR 396.13: Driver inspection before driving", url: "https://www.law.cornell.edu/cfr/text/49/396.13" };
const FMCSA_HOS = { name: "FMCSA: Hours of service rules", url: "https://www.fmcsa.dot.gov/regulations/hours-of-service" };
const CFR_MIL = { name: "49 CFR 383.77: Skills test waiver for military drivers", url: "https://www.law.cornell.edu/cfr/text/49/383.77" };
const BLS_TRUCK = { name: "U.S. Bureau of Labor Statistics: Heavy and tractor-trailer truck drivers", url: "https://www.bls.gov/ooh/transportation-and-material-moving/heavy-and-tractor-trailer-truck-drivers.htm" };

module.exports = {
  id: "cdl-prep",
  category: "Workforce Development",
  name: "Commercial Driver's License (CDL) Preparation",
  skills: "Choosing the right CDL class and endorsements, Planning the steps from permit to license, Studying the state CDL manual, Doing a pre-trip inspection, Making safe driving choices",
  outcome: "choose the CDL class and endorsements your target job needs, list every step from the learner's permit to the license, study for the state knowledge tests with the official manual, talk through a pre-trip inspection, and turn it all into a dated CDL study and test plan.",
  about: [
    "This course is for anyone who wants a job driving a truck or bus: job seekers, veterans, young adults, people coming home from prison and adults changing careers. You do not need any driving experience beyond a regular license.",
    "You will learn which commercial driver's license (CDL) you need, the steps to get it, how to study for the written tests, how to do the pre-trip inspection that starts the driving test, and the safe driving habits examiners look for.",
    "This course prepares you. It does not give you a license or permit. The federal rules come from FMCSA (the Federal Motor Carrier Safety Administration), the tests are given by your state's driver licensing office, and most new drivers must also finish entry-level driver training with a registered provider. Each lesson tells you where to check the official rules.",
    "Each lesson takes about five minutes, with a \"Try it now\" task. A short knowledge check closes each chapter, and a 20-question quiz closes the course. At the end you make your own CDL study and test plan with real dates."
  ],
  finalTask: "Make your own one-page CDL study and test plan: the job you want, the CDL class and any endorsements it needs, the steps from medical exam to skills test in order with a target date for each, three registered training providers you found on the Training Provider Registry, the state manual sections you will study each week, and a written pre-trip inspection checklist for the vehicle type you will test in.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Adults aiming for a first truck or bus driving job: job seekers, veterans and service members leaving the military, young adults, people coming home from prison and career changers. Many have a regular driver's license but no commercial driving experience.",
    startingPoint: "Can drive a car and read a basic manual. Most do not know the CDL classes, the permit steps, the training rule or what the pre-trip inspection is. Some have been told wrong facts by friends or by ads.",
    gap: "Driving jobs pay steady wages and have many openings, but people waste time and money when they pick the wrong class, sign up with a training school that is not registered, or show up for tests unprepared. Learners need a correct picture of the path and a plan they can follow, before they pay for training.",
    constraints: [
      "Reading level: plain words and short sentences; every technical term explained",
      "Devices: a phone or library computer to read the state CDL manual and the official registry",
      "Rules differ by state: the course points to the state manual and office for fees, forms and test booking",
      "No real driving in this course; behind-the-wheel skills come from a registered training provider",
      "Some learners have records or health conditions: they check eligibility with the state and a medical examiner, not with this course"
    ],
    prerequisites: "A valid regular driver's license, or a plan to get one first. Basic reading in English, since federal rules require drivers to read and speak English well enough for the job."
  },
  // ---- ADDIE: Design ----
  objectives: [
    { id: "O1", condition: "Given a description of a driving job", action: "identify the CDL class (A, B or C) and any endorsements the job needs", standard: "getting at least 4 of 5 job descriptions right" },
    { id: "O2", condition: "Using the official FMCSA and state sources", action: "list the steps from medical exam to CDL skills test in the right order", standard: "with no step missing and the waiting time and training rule included" },
    { id: "O3", condition: "Using your state's free CDL manual", action: "set up a study routine for the knowledge tests you need and score a practice set", standard: "reaching at least 8 of 10 on practice questions before you book the test" },
    { id: "O4", condition: "Standing at a truck or using a picture of one", action: "name each part you check in a pre-trip inspection and say what you check on it", standard: "covering all the main areas in order with no area skipped" },
    { id: "O5", condition: "Given a driving situation", action: "choose the safe action for space, speed, backing and driver fitness", standard: "getting at least 4 of 5 situations right" }
  ],
  chapters: [
    {
      name: "Chapter 1: The CDL path",
      lessons: [
        {
          title: "CDL classes and endorsements: which one do you need?",
          objectives: ["O1"],
          minutes: 5,
          goal: "Match a driving job to the CDL class and endorsements it needs.",
          text: [
            "A commercial driver's license (CDL) lets you drive large or special vehicles for work. There are three classes, based on the vehicle.",
            "Class A is for combination vehicles, like a tractor pulling a trailer, when the combination is rated at 26,001 pounds or more and the towed trailer is rated over 10,000 pounds. Class B is for one big vehicle rated at 26,001 pounds or more, like a dump truck, box truck or city bus; it may tow a small trailer rated 10,000 pounds or less. Class C is for smaller vehicles that carry 16 or more people (counting the driver) or carry hazardous materials that need placards.",
            "Endorsements are extra letters on your license for special work. T: double or triple trailers. P: passengers. N: tank vehicles. H: hazardous materials. X: tank plus hazardous materials. S: school bus. Each needs its own test, and the H endorsement also needs a security background check.",
            "Start from the job you want. Read real job ads near you and look for the class and endorsements they ask for."
          ],
          steps: ["Pick a job you want, such as long-haul, local delivery, bus or dump truck.", "Ask: does it pull a big trailer? That is usually Class A.", "Is it one big truck or bus? That is usually Class B.", "Does it carry passengers, liquids in a tank, double trailers or hazardous materials? Add the endorsement."],
          words: [["CDL", "commercial driver's license: the license needed to drive large or special vehicles for work."], ["Combination vehicle", "a truck that pulls a trailer, like a tractor-trailer."], ["Weight rating", "the most a vehicle is built to weigh fully loaded, set by the maker (often called GVWR)."], ["Endorsement", "an extra permission on your CDL for special work, such as passengers or tanks."], ["Hazardous materials (hazmat)", "goods that can hurt people or property, like fuel or chemicals, that need warning signs called placards."]],
          slides: [
            { title: "Three CDL classes", bullets: ["Class A: truck pulling a heavy trailer (tractor-trailer)", "Class B: one heavy truck or bus (dump truck, city bus)", "Class C: smaller vehicle with 16+ people or placarded hazmat"] },
            { title: "Endorsements: extra letters", bullets: ["T doubles/triples, P passengers, N tank", "H hazmat, X tank plus hazmat, S school bus", "Each one needs its own test"] },
            { title: "Start from the job", bullets: ["Read three real job ads near you", "Write down the class and endorsements they ask for", "That is your target license"] }
          ],
          sources: [CFR_CLASSES, CFR_ENDORSE, FMCSA_CDL],
          tryIt: "Find three real driving job ads near you (on a job site or a company's own site). For each, write the job, the CDL class it asks for and any endorsements. Circle the job you want most.",
          youCanNow: "match a driving job to Class A, B or C and name the endorsements it needs.",
          quickCheck: [
            { objective: "O1", q: "A job is driving a tractor pulling a 53-foot trailer. Which class is it usually?", options: ["Class C", "Class B", "Class A", "No CDL needed"], answer: 2, why: "A tractor pulling a heavy trailer is a combination vehicle, which is Class A." },
            { objective: "O1", q: "Which endorsement do you add to drive a school bus?", options: ["S", "T", "N", "X"], answer: 0, why: "S is the school bus endorsement; the P passenger endorsement is also needed for buses." }
          ]
        },
        {
          title: "The steps from permit to license",
          objectives: ["O2"],
          minutes: 6,
          goal: "List the steps to a CDL in order and who handles each one.",
          text: [
            "Most new drivers follow the same steps. The federal rules come from FMCSA; your state's driver licensing office runs the tests and sets the fees and forms.",
            "First, a medical exam (often called a DOT physical) from a certified medical examiner. Most drivers must pass it again at least every 24 months. Second, pass the state's written knowledge tests to get a commercial learner's permit (CLP). Federal rules say a CLP holder must be at least 18 and must wait at least 14 days before the skills test. While you practice on public roads, a CDL holder with the right class must sit next to you.",
            "Since February 7, 2022, most people getting a first Class A or B CDL, or a first P, S or H endorsement, must finish entry-level driver training (ELDT) with a provider listed on FMCSA's Training Provider Registry before the test. Then you take the state skills test: pre-trip inspection, basic vehicle control and on-road driving.",
            "Age: to drive across state lines you must be at least 21. Some states allow drivers aged 18 to 20 inside the state only. Check your state's rules."
          ],
          steps: ["Medical exam with a certified medical examiner.", "Study the state CDL manual and pass the knowledge tests.", "Get your commercial learner's permit (CLP).", "Finish entry-level driver training with a registered provider, if it applies to you.", "Practice with a qualified CDL holder beside you; wait at least 14 days.", "Take the skills test: pre-trip inspection, basic control, on-road driving."],
          words: [["FMCSA", "the Federal Motor Carrier Safety Administration, the U.S. agency that sets the rules for trucks and buses."], ["CLP", "commercial learner's permit: lets you practice driving a commercial vehicle with a qualified CDL holder beside you."], ["ELDT", "entry-level driver training: the federal training most new CDL drivers must finish before testing."], ["Training Provider Registry", "FMCSA's official list of schools and employers allowed to give ELDT."], ["Medical examiner", "a health professional certified to do the DOT physical for commercial drivers."]],
          slides: [
            { title: "Who does what", bullets: ["FMCSA: the federal rules", "Your state: the tests, fees and forms", "Registered provider: the required training"] },
            { title: "The steps in order", bullets: ["Medical exam, then knowledge tests, then the CLP", "Entry-level driver training if it applies", "Wait at least 14 days, then the skills test"] },
            { title: "The rules to remember", bullets: ["CLP: at least 18, CDL holder beside you", "Across state lines: at least 21", "Training provider must be on FMCSA's registry"] }
          ],
          sources: [CFR_CLP, CFR_ELDT, TPR, CFR_AGE, CFR_MED, CFR_SKILLS],
          tryIt: "Look up your state's CDL page (search your state name plus \"CDL\" and open the .gov site). Write the six steps in order and, next to each, what your state says about it: the forms, where to go and the fees it lists.",
          youCanNow: "list the steps from medical exam to skills test in order and say who handles each one.",
          quickCheck: [
            { objective: "O2", q: "You just got your CLP. How soon can you take the skills test under federal rules?", options: ["The same day", "The next day", "After 6 months", "After at least 14 days"], answer: 3, why: "Federal rules say a CLP holder must wait at least 14 days before taking the skills test." },
            { objective: "O2", q: "Where do you find a school that can give the required entry-level driver training?", options: ["Any ad on social media", "FMCSA's Training Provider Registry", "A friend who drives trucks", "The car dealership"], answer: 1, why: "Only providers on FMCSA's Training Provider Registry can give the required training." }
          ]
        },
        {
          title: "Studying for the knowledge tests",
          objectives: ["O3"],
          minutes: 5,
          goal: "Set up a study routine with your state's CDL manual and score a practice set.",
          text: [
            "Every state has a free CDL manual on its driver licensing website. The written tests come from it, so it is the best study book you can have.",
            "Most new drivers take General Knowledge. Many also take Air Brakes (most big trucks use air brakes) and Combination Vehicles (for Class A). Each endorsement has its own test. Your state manual lists which sections go with which test.",
            "Study one section at a time. Read it, close the manual, and write three things you learned. Then use the practice questions in the manual or on your state's site. Aim for at least 8 of 10 right before you book the real test.",
            "Be careful with paid apps and websites that promise the \"real test questions\". Free practice from your state is enough for most people."
          ],
          steps: ["Download your state's CDL manual from the official .gov site.", "Mark the sections you need: General Knowledge plus the ones for your class and endorsements.", "Plan one section per study session, 20 to 30 minutes.", "After each section, write three things you learned without looking.", "Do practice questions until you get at least 8 of 10 right."],
          words: [["Knowledge test", "the written (often computer) test you pass to get your CLP."], ["Air brakes", "brakes worked by compressed air, used on most heavy trucks and buses."], ["CDL manual", "your state's official study book for the CDL tests."]],
          slides: [
            { title: "Your study book is free", bullets: ["Every state has a CDL manual on its .gov site", "The written tests come from it"] },
            { title: "Which tests?", bullets: ["General Knowledge for everyone", "Air Brakes and Combination Vehicles for most Class A", "One test per endorsement"] },
            { title: "How to study", bullets: ["One section per session", "Close the book and write three things you learned", "Practice until you score 8 of 10"] }
          ],
          sources: [FMCSA_CDL],
          tryIt: "Download your state's CDL manual. Read the first part of the General Knowledge section about vehicle inspection. Close it and write three things you remember. Then write five practice questions of your own with answers, and swap with a study partner or check them against the manual.",
          youCanNow: "find your state's CDL manual, pick the sections you need, and study them in short sessions until you score 8 of 10.",
          quickCheck: [
            { objective: "O3", q: "What is the best free study book for your CDL knowledge tests?", options: ["A paid app with \"real test answers\"", "A video from a stranger online", "Your state's official CDL manual", "A car driver's handbook"], answer: 2, why: "The written tests come from your state's official CDL manual." },
            { objective: "O3", q: "You want a Class A for tractor-trailers with air brakes. Which tests do you usually need?", options: ["Only School Bus", "Only Passenger", "Only Hazardous Materials", "General Knowledge, Air Brakes and Combination Vehicles"], answer: 3, why: "Most Class A tractor-trailer drivers take General Knowledge, Air Brakes and Combination Vehicles." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: The CDL path",
        questions: [
          { objective: "O1", q: "A job is driving a single dump truck rated at 33,000 pounds. Which class is it usually?", options: ["Class B", "Class A", "Class C", "A regular car license"], answer: 0, why: "One heavy vehicle rated at 26,001 pounds or more is Class B." },
          { objective: "O1", q: "Which endorsement lets you pull double or triple trailers?", options: ["P", "S", "T", "N"], answer: 2, why: "T is the double and triple trailers endorsement." },
          { objective: "O2", q: "Which step usually comes first on the CDL path?", options: ["The on-road skills test", "The medical exam and the knowledge tests for the CLP", "Buying a truck", "Getting the H endorsement"], answer: 1, why: "You pass a medical exam and the knowledge tests to get a CLP before you train and test on the road." },
          { objective: "O2", q: "While you practice with a CLP on public roads, who must be with you?", options: ["Nobody", "Any friend with a car license", "A family member", "A CDL holder with the right class, beside you"], answer: 3, why: "A qualified CDL holder for that vehicle must sit beside you and supervise." },
          { objective: "O3", q: "You score 5 of 10 on practice questions for Air Brakes. What should you do?", options: ["Book the real test today", "Skip Air Brakes", "Pay for an app with test answers", "Study that section again and practice until you reach 8 of 10"], answer: 3, why: "Practice until you are scoring well before you book the real test." }
        ]
      }
    },
    {
      name: "Chapter 2: Skills and your plan",
      lessons: [
        {
          title: "The pre-trip inspection",
          objectives: ["O4"],
          minutes: 6,
          goal: "Name each area of a pre-trip inspection and what you check there.",
          text: [
            "The skills test starts with a pre-trip inspection. You walk around the vehicle, point to each part, and say out loud what you are checking. Federal rules also say every driver must make sure the vehicle is safe before driving it, so this is a habit for your whole career.",
            "Go in the same order every time, so you never skip a part. A common order is: engine compartment, cab and engine start, steering, suspension, brakes, wheels and tires, the sides and rear with lights, and the coupling area on a combination vehicle. On air-brake vehicles you also check the air brake gauges and warnings.",
            "For each part, say what makes it safe: \"Mounted securely, not cracked or bent, no leaks.\" Your state manual has the full list for your vehicle type. Your training provider will show you on a real truck.",
            "If you find a defect, the truck does not move until it is fixed. Report it and write it down."
          ],
          steps: ["Use the checklist from your state manual for your vehicle type.", "Start at the engine compartment, then the cab, then walk around the truck in the same order every time.", "Point to each part and say what you check: mounted, not damaged, no leaks.", "Check lights, reflectors and tires on every side.", "Write down and report any defect; do not drive until it is fixed."],
          words: [["Pre-trip inspection", "the safety check a driver does on a vehicle before driving it."], ["Defect", "a broken, worn or missing part that makes a vehicle unsafe."], ["Coupling", "the parts that connect a tractor to a trailer, like the fifth wheel and kingpin."], ["Fifth wheel", "the flat, round plate on a tractor that the trailer locks onto."]],
          slides: [
            { title: "Why the pre-trip matters", bullets: ["The skills test starts with it", "The law says check before you drive", "A defect means you do not drive"] },
            { title: "Same order every time", bullets: ["Engine compartment, then cab and start", "Steering, suspension, brakes, wheels", "Sides, rear, lights, coupling"] },
            { title: "Say what you check", bullets: ["Mounted securely", "Not cracked, bent or worn", "No leaks"] }
          ],
          sources: [CFR_SKILLS, CFR_INSPECT],
          tryIt: "Using the inspection section of your state CDL manual, write a pre-trip checklist for the vehicle you plan to test in. Then practice saying it out loud on a car, a picture of a truck, or a toy truck: point to each area and say what you check.",
          youCanNow: "walk through a pre-trip inspection in order and say what you check on each part.",
          quickCheck: [
            { objective: "O4", q: "Why do you inspect in the same order every time?", options: ["So you never skip a part", "Because it is faster to skip parts", "Because the examiner chooses the order", "It does not matter"], answer: 0, why: "A fixed order means no area gets missed." },
            { objective: "O4", q: "During your pre-trip you find a cracked brake hose. What do you do?", options: ["Drive slowly to the next stop", "Tape it and go", "Report it, write it down and do not drive until it is fixed", "Ignore it if the brakes still work"], answer: 2, why: "A safety defect means the vehicle does not move until it is repaired." }
          ]
        },
        {
          title: "Basic control and safe driving habits",
          objectives: ["O5"],
          minutes: 5,
          goal: "Choose the safe action in common truck driving situations.",
          text: [
            "After the pre-trip, the skills test checks basic vehicle control (moving forward and backward, backing in a straight line and around a curve, and turning) and on-road driving.",
            "Examiners look for safe habits. Keep a big space cushion: trucks need much more room to stop than cars. Slow down for rain, snow, curves, work zones and heavy traffic, even below the speed limit. Scan far ahead and check your mirrors often. Make wide right turns carefully so the trailer does not hit the curb or a car.",
            "Back up as little as possible. If you are not sure what is behind you, get out and look. Many drivers remember G.O.A.L.: Get Out And Look.",
            "You must also be fit to drive. Federal hours of service rules limit how long you can drive and work before you rest, and drivers are tested for drugs and alcohol. Never drive tired, ill or impaired."
          ],
          steps: ["Keep a large gap in front; add more in bad weather.", "Set your speed for the road, weather and load, not just the sign.", "Check your mirrors every few seconds and before every lane change.", "Before backing: Get Out And Look, then back slowly.", "Stop and rest when you are tired; follow hours of service rules."],
          words: [["Space cushion", "the empty space you keep around your vehicle so you have room to stop or steer."], ["Off-tracking", "when the rear wheels of a long vehicle follow a shorter path than the front wheels in a turn."], ["Hours of service", "FMCSA rules on how long a driver may drive and work before resting."]],
          slides: [
            { title: "What the skills test checks", bullets: ["Pre-trip inspection", "Basic control: backing, turning, stopping", "On-road driving"] },
            { title: "Room and speed", bullets: ["Trucks need much more room to stop", "Slow down for weather, curves and work zones", "Scan far ahead; check mirrors often"] },
            { title: "Backing: G.O.A.L.", bullets: ["Get Out And Look", "Back slowly, as little as possible"] },
            { title: "Be fit to drive", bullets: ["Follow hours of service rules", "Never drive tired, ill or impaired"] }
          ],
          sources: [CFR_SKILLS, FMCSA_HOS],
          tryIt: "Write down five situations from your state manual's safe driving section (for example rain at night, a work zone, backing into a dock). For each, write the safe action in one sentence. Ask a study partner to quiz you on them.",
          youCanNow: "choose the safe action for space, speed, backing and fitness to drive.",
          quickCheck: [
            { objective: "O5", q: "You are backing into a loading dock and cannot see a corner. What do you do?", options: ["Back faster to finish quickly", "Get out and look before you keep backing", "Honk and keep going", "Use only the radio"], answer: 1, why: "G.O.A.L.: Get Out And Look when you are not sure what is behind you." },
            { objective: "O5", q: "It starts to rain hard on the highway. What is the safe choice?", options: ["Keep the same speed and gap", "Follow the car ahead more closely to see its lights", "Speed up to get out of the rain", "Slow down and increase your following distance"], answer: 3, why: "Wet roads mean longer stopping distances, so slow down and leave more space." }
          ]
        },
        {
          title: "Choosing training and making your CDL plan",
          objectives: ["O2", "O3"],
          minutes: 5,
          goal: "Write a dated CDL plan with registered training providers you can contact.",
          text: [
            "Before you pay for or sign up for any training, check that the school or employer is listed on FMCSA's Training Provider Registry. You can search the registry by location.",
            "Some trucking companies pay for training if you agree to drive for them for a set time. Read the contract carefully: what happens if you leave early? Will you have to pay the training back? Ask before you sign.",
            "Veterans: if you drove heavy military vehicles, ask your state about a military skills test waiver; FMCSA allows states to offer one to qualifying service members and recent veterans. If you have a record, call the state licensing office and ask employers about their hiring rules early; a hazmat endorsement also needs a security check.",
            "Now turn it into a plan. A plan with dates is much more likely to happen than a wish."
          ],
          steps: ["Write the job you want and the class and endorsements it needs.", "Search the Training Provider Registry and list three providers near you.", "Call or visit; ask about the schedule, the total cost, the contract and job placement.", "Put a target date next to every step, from the medical exam to the skills test.", "Plan which manual sections you will study each week."],
          words: [["Training contract", "an agreement that a company pays for your training if you work for it for a set time."], ["Skills test waiver", "a choice some states offer to skip the CDL skills test for qualifying military drivers."]],
          slides: [
            { title: "Check before you pay", bullets: ["Is the provider on FMCSA's Training Provider Registry?", "Search the registry by location"] },
            { title: "Company-paid training", bullets: ["Read the contract", "What if you leave early? Do you pay it back?"] },
            { title: "Ask early", bullets: ["Veterans: ask about the military skills test waiver", "With a record: ask the state and employers early"] },
            { title: "Plan with dates", bullets: ["Every step gets a target date", "Study sections each week", "Three providers to call"] }
          ],
          sources: [TPR, CFR_MIL, CFR_ELDT, BLS_TRUCK],
          tryIt: "Search the Training Provider Registry for three providers near you. Write their names, how to contact them, and three questions you will ask each one. Then put a target date next to each step of your CDL path.",
          youCanNow: "check that a training provider is registered and write a CDL plan with a date for every step.",
          quickCheck: [
            { objective: "O2", q: "A school says it gives CDL training but is not on the Training Provider Registry. What should you do?", options: ["Sign up fast before the price goes up", "Pay cash so it is cheaper", "Choose a provider that is on the registry", "Ask a friend to check it for you later"], answer: 2, why: "Training that counts for most new drivers must come from a provider on FMCSA's registry." },
            { objective: "O3", q: "Which plan is most likely to work?", options: ["\"I'll get my CDL someday.\"", "\"Medical exam by May 3, knowledge tests by May 24, study one manual section each week.\"", "\"I'll study when I have time.\"", "\"I'll take the test and see what happens.\""], answer: 1, why: "A plan with dates and weekly study steps turns a goal into actions." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Skills and your plan",
        questions: [
          { objective: "O4", q: "What does the CDL skills test start with?", options: ["The pre-trip inspection", "The on-road drive", "Backing around a curve", "A written essay"], answer: 0, why: "The skills test starts with the pre-trip inspection." },
          { objective: "O4", q: "During a pre-trip, what do you say about each part?", options: ["Only its name", "Its price", "What you check: mounted securely, not damaged, no leaks", "Nothing; you just look"], answer: 2, why: "You point to each part and say what makes it safe." },
          { objective: "O5", q: "Why do trucks keep a bigger gap than cars?", options: ["To save fuel only", "They need much more room to stop", "It is only a habit", "So other drivers can pass"], answer: 1, why: "Heavy vehicles take much longer to stop, so they need a bigger space cushion." },
          { objective: "O5", q: "You feel very sleepy two hours into a drive. What is the safe action?", options: ["Open the window and keep going", "Drink more coffee and speed up", "Turn up the radio", "Stop in a safe place and rest"], answer: 3, why: "Never drive tired; stop safely and rest, and follow hours of service rules." },
          { objective: "O2", q: "A company offers free CDL training if you drive for it for one year. What do you do first?", options: ["Read the contract and ask what happens if you leave early", "Sign right away", "Tell them you will decide after training", "Ignore the contract"], answer: 0, why: "Company-paid training often has a payback rule, so read and ask before you sign." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Commercial Driver's License (CDL) Preparation",
    questions: [
      { objective: "O1", q: "A job driving a city bus that carries 40 passengers. Which class and endorsement are most likely?", options: ["Class C with T", "Class A with H", "Class B with P", "No CDL needed"], answer: 2, why: "A heavy single bus is usually Class B, and carrying passengers needs the P endorsement." },
      { objective: "O1", q: "What does the H endorsement allow?", options: ["Hauling hazardous materials", "Driving a school bus", "Pulling double trailers", "Driving a tank vehicle only"], answer: 0, why: "H is the hazardous materials endorsement; it also needs a security background check." },
      { objective: "O1", q: "Which vehicle is usually Class A?", options: ["A 15-passenger van", "A single box truck rated 30,000 pounds", "A pickup truck", "A tractor pulling a trailer rated over 10,000 pounds"], answer: 3, why: "A combination rated 26,001 pounds or more, with a trailer rated over 10,000 pounds, is Class A." },
      { objective: "O1", q: "You want to haul fuel in a tanker that carries placarded hazardous materials. Which endorsement covers both?", options: ["S", "X", "P", "T"], answer: 1, why: "X combines the tank vehicle and hazardous materials endorsements." },
      { objective: "O2", q: "Who makes the federal rules for commercial drivers?", options: ["FMCSA", "The IRS", "OSHA", "Your training school"], answer: 0, why: "FMCSA, the Federal Motor Carrier Safety Administration, sets the federal rules." },
      { objective: "O2", q: "Who gives the CDL knowledge and skills tests?", options: ["FMCSA in Washington, D.C.", "Any trucking company", "The federal court", "Your state's driver licensing office or its approved testers"], answer: 3, why: "The state runs the tests and sets the fees and forms." },
      { objective: "O2", q: "Under federal rules, what is the youngest age to drive a commercial vehicle across state lines?", options: ["16", "18", "21", "25"], answer: 2, why: "Drivers must be at least 21 to drive commercial vehicles across state lines." },
      { objective: "O2", q: "Which order is right?", options: ["Skills test, then CLP, then medical exam", "Medical exam and knowledge tests, CLP, training, then skills test", "Training, skills test, then knowledge tests", "CLP, skills test the same day, then training"], answer: 1, why: "Medical exam and knowledge tests lead to the CLP; training and the 14-day wait come before the skills test." },
      { objective: "O2", q: "How often must most drivers pass the DOT medical exam again?", options: ["At least every 24 months", "Only once in their life", "Every 10 years", "Never after age 30"], answer: 0, why: "Most drivers must be re-examined and certified at least every 24 months; some need it more often." },
      { objective: "O3", q: "Where do the CDL written test questions come from?", options: ["News articles", "Your state's CDL manual", "Social media", "The truck's radio"], answer: 1, why: "The knowledge tests are based on the state's official CDL manual." },
      { objective: "O3", q: "What is a good study routine for the knowledge tests?", options: ["Read the whole manual the night before", "Only watch videos", "Memorize answers from a paid app", "One manual section per session, then write three things you learned and practice questions"], answer: 3, why: "Short sessions, recall in writing and practice questions help you remember." },
      { objective: "O3", q: "When are you ready to book a knowledge test?", options: ["When you have read the title page", "When you are scoring at least 8 of 10 on practice questions", "When a friend says you are", "As soon as you get the manual"], answer: 1, why: "Scoring well on practice questions is a good sign you are ready." },
      { objective: "O4", q: "What is a pre-trip inspection?", options: ["A safety check of the vehicle before you drive it", "A test of your eyesight", "A look at the weather", "A check of your paycheck"], answer: 0, why: "It is the check a driver does to make sure the vehicle is safe before driving." },
      { objective: "O4", q: "Which is a good way to talk through a part in your pre-trip?", options: ["\"That's a tire.\"", "\"Looks fine, I guess.\"", "\"Mounted securely, not cracked or bent, no leaks.\"", "\"I'll check it later.\""], answer: 2, why: "You name the part and say exactly what makes it safe." },
      { objective: "O4", q: "On a tractor-trailer, which area connects the tractor to the trailer?", options: ["The mirrors", "The coupling area, such as the fifth wheel", "The fuel tank", "The radio"], answer: 1, why: "The coupling area, including the fifth wheel and kingpin, holds the trailer to the tractor." },
      { objective: "O5", q: "What does G.O.A.L. stand for when backing?", options: ["Go On And Leave", "Get Over All Lanes", "Gas Off At Lights", "Get Out And Look"], answer: 3, why: "Get Out And Look: check what is behind you before backing." },
      { objective: "O5", q: "You are driving through a work zone. What do you do?", options: ["Slow down and leave more space", "Keep highway speed", "Change lanes often", "Follow the car ahead closely"], answer: 0, why: "Work zones have workers, narrow lanes and sudden stops, so slow down and leave space." },
      { objective: "O5", q: "What do hours of service rules do?", options: ["Set your pay", "Limit how long you drive and work before you rest", "Tell you which roads to use", "Decide your test date"], answer: 1, why: "Hours of service rules limit driving and work time so drivers are not too tired." },
      { objective: "O5", q: "You are making a right turn in a long truck. What is the risk?", options: ["The trailer can cut the corner and hit the curb or a car", "The engine will stop", "The mirrors will fold", "There is no risk"], answer: 0, why: "Off-tracking means the rear wheels follow a shorter path, so the trailer can hit what is inside the turn." },
      { objective: "O4", q: "You find a light not working in your pre-trip. What do you do?", options: ["Drive at night anyway", "Ignore it if it is daytime", "Report it and get it fixed before you drive", "Cover it with tape"], answer: 2, why: "A defect is reported and fixed before the vehicle moves." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Pre-Test: What Do You Already Know?", from: [0, 2, 5, 7, 9, 12, 13, 15, 17] },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and check your plan again.",
    criteria: [
      { name: "Right license", objective: "O1", notYet: "The class or endorsements do not match the job, or are missing.", meets: "The class and every endorsement match the target job and a real job ad.", exceeds: "Also notes a second job the same license would open, or an endorsement to add later." },
      { name: "Steps in order", objective: "O2", notYet: "Steps are missing or out of order, or the training rule or 14-day wait is left out.", meets: "All steps are in order with a target date each, including the medical exam, CLP, training and 14-day wait.", exceeds: "Each step also names the office or website that handles it." },
      { name: "Registered training", objective: "O2", notYet: "No providers, or providers not checked on the registry.", meets: "Three providers from the Training Provider Registry with contact details.", exceeds: "Includes the answers to questions asked: cost, schedule, contract terms." },
      { name: "Study plan", objective: "O3", notYet: "No study plan, or it does not use the state manual.", meets: "Weekly sections of the state manual for every test needed, with a practice score goal.", exceeds: "Includes practice scores already reached." },
      { name: "Pre-trip checklist", objective: "O4", notYet: "The checklist skips main areas or is not in a fixed order.", meets: "Covers every main area in a fixed order, with what to check on each part.", exceeds: "The learner can say it out loud, pointing to the parts, without reading." }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and a CDL plan that meets the rubric",
      "Learners who pass the state knowledge tests and get a CLP within 90 days (follow-up survey)",
      "Learners who enroll with a provider on the Training Provider Registry",
      "Learners who earn a CDL and start a driving job (partner and follow-up reports)"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A phone or computer with internet to open the state CDL manual and FMCSA's Training Provider Registry",
      "Your state's CDL manual (free on the state .gov site)",
      "Paper, pen and a calendar for the plan",
      "Optional: a picture or model of a truck, or a car, to practice the pre-trip talk-through",
      "About 60 to 75 minutes in total, plus weekly study time"
    ],
    facilitatorNotes: [
      "In a group, print the state's inspection checklist and have learners practice the talk-through in pairs.",
      "Do not recommend a specific school or company; show learners how to check the Training Provider Registry and compare.",
      "Remind learners that state rules, fees and forms differ; always check the state .gov site.",
      "For veterans, point to the state's military skills test waiver page; for learners with records, connect them with a reentry or workforce counselor.",
      "Score the final plan with the rubric and help the learner fix one Not yet row at a time."
    ]
  }
};
