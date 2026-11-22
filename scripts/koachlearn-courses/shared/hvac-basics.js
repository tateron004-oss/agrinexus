"use strict";

// Koach Learn course: Workforce Development (wave 1, 30 October 2026) -> "HVAC Technician Basics". A certification-prep course that leads toward an entry-level HVAC job and the
// EPA Section 608 technician certification. It PREPARES learners; it does not certify them, and it does no hands-on refrigerant or electrical work (that needs supervised training).
// Built in the ADDIE format; the model is re-entry/reentry-ai-digital-confidence.js. See scripts/koachlearn-courses/README.md.

module.exports = {
  id: "hvac-basics",
  category: "Workforce Development",
  name: "HVAC Technician Basics",
  skills: "Naming the parts of a heating and cooling system, Tracing the refrigeration cycle, Reading nameplates and doing HVAC math, Spotting HVAC job hazards, Choosing the right EPA Section 608 certification, Planning your path into HVAC",
  outcome: "explain how a home heating and cooling system works, read its numbers, name the hazards of the job and how to stay safe, pick the EPA Section 608 certification you need, and follow a dated plan to get trained, certified and hired as an HVAC helper or apprentice.",
  about: [
    "HVAC technicians keep homes, schools, stores and hospitals warm in winter and cool in summer. The work is hands-on, it is needed in every town, and many people start as a helper or apprentice and learn on the job. This course is for anyone thinking about that path: job seekers, veterans, young adults, people coming home from prison, immigrants and adults going back to learning.",
    "You will learn the main parts of a system and how an air conditioner moves heat, read the numbers on filters and equipment labels, and do the simple math techs use every day. Then you will learn the hazards of the job, the federal EPA Section 608 certification that technicians who handle refrigerant must have, and the ways into the trade.",
    "This course prepares you. It does not give you a license or a certificate. The EPA Section 608 certification comes only from passing a test with an EPA-approved certifying organization, and some states and cities also license HVAC work. Hands-on work with refrigerant and electricity is learned only in a supervised training program, with the right protective equipment.",
    "Each lesson takes about five minutes, with a short \"Try it now\" task and two quick questions. There is a knowledge check after each chapter and a 20-question quiz at the end. Your final product is your own HVAC starter plan with real dates."
  ],
  finalTask: "Make your HVAC starter plan: (1) a hand-drawn sketch of the refrigeration cycle with the four main parts labeled in order and one sentence on what each does; (2) a hazard list for one HVAC job with the protection for each hazard; and (3) a dated plan that names the EPA Section 608 certification type you will take, one EPA-approved certifying organization, two training programs or apprenticeships near you, what your state or city requires for an HVAC license (from the official page), and a date for each step.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Adults looking for a skilled job that does not need a four-year degree: job seekers, veterans, young adults, people coming home from prison, immigrants and adults returning to learning. Some have done hands-on work (maintenance, the military, construction, auto repair); many have never worked on heating or cooling equipment.",
    startingPoint: "Can read short instructions and do whole-number math. Most know that a thermostat controls the heat and the air conditioning, but cannot name the parts of a system, explain how cooling works, or say which certification HVAC work needs.",
    gap: "Employers hiring HVAC helpers and apprentices want people who know the basic parts and words, take safety seriously and are on the way to EPA Section 608 certification. Learners need that base, plus a clear and honest plan with dates, to apply with confidence and avoid paying for training that does not lead to a job.",
    constraints: [
      "Reading level: plain words and short sentences (about grade 6 to 8); every trade word is explained",
      "No hands-on refrigerant, electrical or brazing work in this course: that needs supervised training and the right protective equipment",
      "Devices: a phone or library computer to read official pages; paper and pen for sketches and plans",
      "Time: 5 to 6 minute lessons that fit around work and appointments",
      "Rules differ by state and city: learners check licensing on the official page for where they live"
    ],
    prerequisites: "None. \"Starting a Career in the Skilled Trades\" is a good first step for choosing a trade; this course goes deeper into HVAC."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Given a sketch or photo of a home split system", action: "name the main parts of a heating and cooling system and trace the refrigeration cycle in order", standard: "with the four main cycle parts in the right order and what each one does" },
    { id: "O2", condition: "Given an HVAC job description", action: "list the hazards of the job and the protection for each one", standard: "naming at least five hazards, each matched to a safe step or piece of protective equipment" },
    { id: "O3", condition: "Given a filter, an equipment nameplate or two temperature readings", action: "read the sizes and ratings and do simple HVAC math", standard: "getting at least 4 of 5 practice items right" },
    { id: "O4", condition: "Given a list of equipment and refrigerant situations", action: "match each one to the right EPA Section 608 certification type and the refrigerant rule that applies", standard: "getting at least 4 of 5 right" },
    { id: "O5", condition: "Using official websites for your state", action: "write a dated plan to get trained, take the EPA Section 608 test and apply for an HVAC helper or apprentice job", standard: "with at least five dated steps and an official source for every requirement" }
  ],
  chapters: [
    {
      name: "Chapter 1: How heating and cooling systems work",
      lessons: [
        {
          title: "What an HVAC technician does, and the main parts",
          objectives: ["O1"],
          minutes: 5,
          goal: "Name the main parts of a home heating and cooling system and say what each one does.",
          text: [
            "HVAC stands for heating, ventilation and air conditioning. You will also see HVACR, which adds refrigeration (walk-in coolers, ice machines). HVAC technicians install new systems, do regular maintenance, find out why a system stopped working, and repair it.",
            "Many homes have a split system: one part sits outside and one part sits inside. The outdoor unit holds the compressor and the outdoor coil (the condenser). The indoor part is a furnace or an air handler with a blower fan and an indoor coil (the evaporator). Pipes called the line set carry refrigerant between them.",
            "The thermostat on the wall is the control: it tells the system when to heat or cool. The blower pushes air through the ducts. Supply vents send air into rooms, and return vents pull room air back. The air filter cleans that air before it reaches the equipment.",
            "A heat pump looks like an air conditioner but can also run in reverse to heat the home. A furnace makes heat by burning gas or oil or with electric heating parts."
          ],
          words: [
            ["HVAC", "heating, ventilation and air conditioning. HVACR adds refrigeration."],
            ["Split system", "a system with one unit outside and one inside, joined by refrigerant pipes."],
            ["Thermostat", "the control on the wall that tells the system when to heat or cool."],
            ["Ducts", "the metal or flexible tubes that carry air to and from the rooms."],
            ["Heat pump", "a system that cools in summer and can run in reverse to heat in winter."],
            ["Line set", "the pair of copper pipes that carry refrigerant between the outdoor and indoor units."]
          ],
          slides: [
            { title: "What HVAC techs do", bullets: ["Install new systems", "Do regular maintenance", "Find the problem and repair it"] },
            { title: "Outside: the outdoor unit", bullets: ["Compressor", "Outdoor coil (condenser) and fan"] },
            { title: "Inside: furnace or air handler", bullets: ["Blower fan moves the air", "Indoor coil (evaporator)", "Air filter cleans the air first"] },
            { title: "Control and air paths", bullets: ["Thermostat: tells it when to run", "Supply vents push air in; return vents pull it back", "Ducts carry the air"] }
          ],
          tryIt: "Look at the heating and cooling in your home, school or a store (from the outside only, never open a panel). Or search for a photo of a \"split system air conditioner\". On paper, list every part you can see: thermostat, vents, filter, outdoor unit, pipes. Next to each, write one line on what it does.",
          youCanNow: "name the main parts of a home heating and cooling system and say what each part does.",
          quickCheck: [
            { objective: "O1", q: "Which part tells the system when to heat or cool?", options: ["The ducts", "The air filter", "The thermostat", "The outdoor coil"], answer: 2, why: "The thermostat is the control; it signals the system to start and stop." },
            { objective: "O1", q: "In a home split system, where is the compressor usually found?", options: ["In the outdoor unit", "Inside the thermostat", "Behind the air filter", "In a return vent"], answer: 0, why: "In a split system the compressor sits in the outdoor unit with the outdoor coil." }
          ]
        },
        {
          title: "How an air conditioner moves heat",
          objectives: ["O1"],
          minutes: 6,
          goal: "Trace the refrigeration cycle through its four main parts, in order.",
          text: [
            "An air conditioner does not make cold. It moves heat from inside the home to the outside. A special fluid called refrigerant carries that heat around a closed loop of pipes. This loop is called the refrigeration cycle.",
            "1. The compressor squeezes refrigerant vapor, so it becomes hot and high-pressure. 2. In the condenser (the outdoor coil) a fan blows outdoor air across the hot coil; the refrigerant gives off its heat and turns into a liquid. 3. The metering device (often an expansion valve) lets the liquid through a small opening, so its pressure drops and it gets very cold. 4. In the evaporator (the indoor coil) warm room air blows across the cold coil; the refrigerant soaks up the heat and boils back into a vapor. Then it returns to the compressor and the loop starts again.",
            "A heat pump uses the same four parts. In winter a reversing valve sends the refrigerant the other way, so the heat is picked up outside and given off inside.",
            "Knowing the cycle is how technicians find problems. For example, if the outdoor coil is clogged with dirt, the heat cannot get out and the system cools poorly."
          ],
          steps: [
            "Compressor: squeezes the vapor so it is hot and high-pressure.",
            "Condenser (outdoor coil): gives off heat outside; the refrigerant becomes a liquid.",
            "Metering device: drops the pressure, so the liquid gets very cold.",
            "Evaporator (indoor coil): soaks up heat from room air; the refrigerant becomes a vapor and goes back to the compressor."
          ],
          words: [
            ["Refrigerant", "the fluid inside the system that carries heat from one place to another."],
            ["Refrigeration cycle", "the loop the refrigerant travels: compressor, condenser, metering device, evaporator."],
            ["Compressor", "the pump that squeezes refrigerant vapor so it gets hot and high-pressure."],
            ["Condenser", "the coil where the refrigerant gives off heat and turns into a liquid; outdoors in a home AC."],
            ["Metering device", "the part (often an expansion valve) that drops the refrigerant's pressure so it gets cold."],
            ["Evaporator", "the coil where the refrigerant soaks up heat and turns into a vapor; indoors in a home AC."],
            ["Reversing valve", "the part in a heat pump that changes the direction of the refrigerant for heating."]
          ],
          slides: [
            { title: "AC moves heat; it does not make cold", bullets: ["Refrigerant carries heat in a closed loop", "Heat goes from inside to outside"] },
            { title: "The cycle, in order", bullets: ["1. Compressor: hot, high-pressure vapor", "2. Condenser: gives off heat, becomes liquid", "3. Metering device: pressure drops, gets cold", "4. Evaporator: soaks up room heat, becomes vapor"] },
            { title: "Heat pumps", bullets: ["Same four parts", "Reversing valve runs it backward to heat"] },
            { title: "Why techs learn this", bullets: ["The cycle explains most problems", "Example: dirty outdoor coil = heat cannot get out"] }
          ],
          tryIt: "Without looking, draw a circle on paper and write the four parts of the cycle around it in order: compressor, condenser, metering device, evaporator. Draw arrows. Mark which parts are outside and which are inside, and write \"hot\" or \"cold\" next to each. Then check your sketch against the lesson. Keep it: it is part 1 of your final task.",
          youCanNow: "trace the refrigeration cycle in order and say what each of the four main parts does.",
          quickCheck: [
            { objective: "O1", q: "Which part gives off the heat outside the home?", options: ["The evaporator", "The thermostat", "The air filter", "The condenser"], answer: 3, why: "The condenser is the outdoor coil, where the refrigerant gives off its heat and turns into a liquid." },
            { objective: "O1", q: "In the cycle, what comes right after the metering device?", options: ["The compressor", "The evaporator", "The condenser", "The thermostat"], answer: 1, why: "The cold liquid from the metering device goes into the evaporator to soak up heat from room air." }
          ]
        },
        {
          title: "Reading the numbers: filters, nameplates and temperatures",
          objectives: ["O3"],
          minutes: 6,
          goal: "Read a filter size and an equipment nameplate, and do simple HVAC math.",
          text: [
            "Filters have their size printed on the edge, such as 16 x 25 x 1. That means 16 inches by 25 inches, and 1 inch thick. An arrow shows which way the air flows: it points toward the blower, away from the return vent. A filter put in backward or the wrong size lets dirt into the equipment.",
            "Every unit has a nameplate (a metal or sticker label) with the model and serial numbers, the volts it runs on, electrical ratings in amps, and the type and amount of refrigerant. Techs read the nameplate before they order parts or check the electrical supply. Cooling size is often given in BTU per hour or in tons. One ton of cooling is 12,000 BTU per hour, so a 36,000 BTU unit is a 3-ton unit.",
            "Temperature split is a simple check: measure the air going into the return and the air coming out of a supply vent, then subtract. If the return air is 75°F and the supply air is 57°F, the split is 18°F. The normal range depends on the system and conditions; your instructor and the maker's papers tell you what to expect. For now you practice the reading and the math only.",
            "Practice only: all numbers in this lesson are made up for learning. Do not open any equipment panel to find a nameplate; read one you can see from outside, or look at a photo."
          ],
          steps: [
            "Filter: read the three numbers (width x height x thickness) and find the airflow arrow.",
            "Nameplate: find the model and serial numbers, volts, amps and refrigerant type.",
            "Size: divide BTU per hour by 12,000 to get tons.",
            "Temperature split: return air temperature minus supply air temperature."
          ],
          words: [
            ["Nameplate", "the label on a unit with its model, serial number, electrical ratings and refrigerant type."],
            ["BTU", "British thermal unit: a measure of heat. Cooling and heating size is given in BTU per hour."],
            ["Ton (of cooling)", "12,000 BTU per hour of cooling. A 2-ton unit is 24,000 BTU per hour."],
            ["Volts and amps", "volts are the electrical push; amps are the amount of electric current flowing."],
            ["Return air and supply air", "return air is pulled back from the rooms; supply air is sent out to the rooms."],
            ["Temperature split", "the difference between the return air and supply air temperatures."]
          ],
          slides: [
            { title: "Filter sizes", bullets: ["16 x 25 x 1 = 16 by 25 inches, 1 inch thick", "Arrow points toward the blower", "Wrong size or backward lets dirt in"] },
            { title: "The nameplate", bullets: ["Model and serial numbers", "Volts and amps", "Refrigerant type and amount"] },
            { title: "Tons and BTU", bullets: ["1 ton = 12,000 BTU per hour", "36,000 BTU = 3 tons", "Divide BTU by 12,000"] },
            { title: "Temperature split", bullets: ["Return air minus supply air", "75°F - 57°F = 18°F", "Normal range: from your instructor and the maker"] }
          ],
          tryIt: "Practice only. Solve and write your work: (1) A filter says 20 x 20 x 1. How thick is it? (2) A unit is 24,000 BTU per hour. How many tons? (3) A unit is 60,000 BTU per hour. How many tons? (4) Return air 78°F, supply air 60°F. What is the split? (5) Find a filter in your home or a photo online and write its size and which way the arrow points. Answers: 1 inch; 2 tons; 5 tons; 18°F.",
          youCanNow: "read a filter size and a nameplate, change BTU to tons, and work out a temperature split.",
          quickCheck: [
            { objective: "O3", q: "A unit is rated 48,000 BTU per hour. How many tons is it?", options: ["3 tons", "6 tons", "5 tons", "4 tons"], answer: 3, why: "48,000 divided by 12,000 is 4, so it is a 4-ton unit." },
            { objective: "O3", q: "Return air is 76°F and supply air is 58°F. What is the temperature split?", options: ["16°F", "18°F", "134°F", "20°F"], answer: 1, why: "Subtract: 76 minus 58 is 18°F." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: How heating and cooling systems work",
        questions: [
          { objective: "O1", q: "What does HVAC stand for?", options: ["Heat, vents and coils", "High voltage air control", "Heating, ventilation and air conditioning", "Home ventilation and cooling"], answer: 2, why: "HVAC is heating, ventilation and air conditioning; HVACR adds refrigeration." },
          { objective: "O1", q: "How does an air conditioner cool a home?", options: ["It moves heat from inside to outside", "It makes cold air from nothing", "It adds new refrigerant every day", "It pulls in cold outdoor air"], answer: 0, why: "Refrigerant picks up heat inside and gives it off outside." },
          { objective: "O1", q: "Which part squeezes refrigerant vapor so it becomes hot and high-pressure?", options: ["The evaporator", "The air filter", "The metering device", "The compressor"], answer: 3, why: "The compressor is the pump that squeezes the vapor at the start of the cycle." },
          { objective: "O3", q: "A filter is marked 20 x 25 x 4. What does the 4 tell you?", options: ["It lasts 4 months", "It is 4 inches thick", "There are 4 in the box", "It is grade 4"], answer: 1, why: "The third number is the thickness in inches." },
          { objective: "O3", q: "Where do you find a unit's refrigerant type and electrical ratings?", options: ["On the thermostat screen", "On the air filter", "On the supply vent", "On the unit's nameplate"], answer: 3, why: "The nameplate lists the model, serial number, volts, amps and refrigerant." }
        ]
      }
    },
    {
      name: "Chapter 2: Safety, certification and your path",
      lessons: [
        {
          title: "Staying safe on an HVAC job",
          objectives: ["O2"],
          minutes: 6,
          goal: "List the main hazards on an HVAC job and the protection for each one.",
          text: [
            "HVAC technicians have one of the highest injury rates of all jobs, according to the US Bureau of Labor Statistics. Safety comes first on every call. Hands-on work in this trade is learned only in supervised training, with the right protective equipment.",
            "Electricity: units run on household or higher voltage, and some parts (like capacitors) can hold a charge after the power is off. On the job, trained technicians turn off the power, lock it out and tag it so no one can turn it back on, and test that it is really off before touching anything. OSHA's lockout/tagout rule (29 CFR 1910.147) sets out these steps.",
            "Refrigerant: it is under pressure and can cause frostbite and eye injuries; in a small closed space it can push out the oxygen you need to breathe. Technicians wear safety glasses or goggles and gloves, and only certified, trained people handle it.",
            "Other hazards: hot attics and cramped crawl spaces (heat illness), ladders and roofs (falls), heavy equipment (back strains), sharp sheet metal edges (cuts) and torch work called brazing (burns and fire). The protection: water and breaks, safe ladder use, lifting with your legs or with help, cut-resistant gloves, and a fire extinguisher nearby."
          ],
          steps: [
            "Read the work order and ask what the job is.",
            "Look for hazards: power, refrigerant, heat, heights, sharp edges, fire.",
            "Put on the protection the job needs: safety glasses, gloves, boots.",
            "Trained techs only: power off, lock out and tag out, then test before touching.",
            "If anything is unclear, stop and ask your lead technician."
          ],
          words: [
            ["Hazard", "anything that could hurt you or someone else."],
            ["PPE", "personal protective equipment: safety glasses, gloves, boots, hearing protection and similar gear."],
            ["Lockout/tagout", "turning off the power and putting a lock and tag on the switch so no one turns it on during the work."],
            ["Capacitor", "an electrical part that stores a charge and can shock you even after the power is off."],
            ["Brazing", "joining copper pipes with a torch and filler metal; it involves high heat and fire risk."],
            ["Heat illness", "sickness from working in high heat, such as heat exhaustion or heat stroke."]
          ],
          slides: [
            { title: "Safety first, every call", bullets: ["One of the highest injury rates of all jobs (BLS)", "Hands-on work: only in supervised training"] },
            { title: "Electricity", bullets: ["Power off, lock out, tag out", "Test before you touch", "Capacitors can hold a charge"] },
            { title: "Refrigerant", bullets: ["Under pressure: frostbite and eye injuries", "Can push out oxygen in closed spaces", "Goggles, gloves, certified techs only"] },
            { title: "Heat, heights, metal, fire", bullets: ["Hot attics: water and breaks", "Ladders and roofs: safe climbing", "Sheet metal: cut-resistant gloves", "Brazing: extinguisher nearby"] }
          ],
          sources: [
            { name: "US Bureau of Labor Statistics: Heating, air conditioning and refrigeration mechanics and installers", url: "https://www.bls.gov/ooh/installation-maintenance-and-repair/heating-air-conditioning-and-refrigeration-mechanics-and-installers.htm" },
            { name: "OSHA: Control of hazardous energy (lockout/tagout), 29 CFR 1910.147", url: "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.147" }
          ],
          tryIt: "Read this job: \"A customer's air conditioning stopped on a 95°F day. The outdoor unit is in the side yard. The air handler is in a hot attic you reach by a pull-down ladder.\" On paper, make two columns: Hazard and Protection. List at least five hazards and the safe step or gear for each. Keep it: it is part 2 of your final task.",
          youCanNow: "list the main hazards of an HVAC job and match each one to the right protection.",
          quickCheck: [
            { objective: "O2", q: "Why do trained technicians lock out and tag the power before working inside a unit?", options: ["So no one can turn the power back on during the work", "To save the customer money", "So the unit cools faster later", "Because the thermostat needs a reset"], answer: 0, why: "Lockout/tagout keeps the power off until the person who locked it removes the lock." },
            { objective: "O2", q: "Refrigerant sprays on a worker's hand. What injury can it cause?", options: ["A sunburn", "A splinter", "Frostbite", "Nothing; it is harmless"], answer: 2, why: "Refrigerant released from pressure gets very cold and can freeze skin." }
          ]
        },
        {
          title: "EPA Section 608 certification and refrigerant rules",
          objectives: ["O4"],
          minutes: 6,
          goal: "Match equipment to the right EPA Section 608 certification type and state the main refrigerant rules.",
          text: [
            "Under Section 608 of the federal Clean Air Act, technicians who maintain, service, repair or dispose of equipment that could release refrigerant into the air must be certified by the US Environmental Protection Agency (EPA) program. There are four types. Type I: small appliances (such as a window air conditioner or a household refrigerator). Type II: high-pressure and very high-pressure equipment (such as most home central air conditioners and heat pumps). Type III: low-pressure equipment (such as some large chillers in big buildings). Universal: all of these.",
            "Each test has a Core section on rules and safety plus the section for the type. Tests are given by EPA-approved certifying organizations; the EPA does not give the test or issue the card itself. According to the EPA, Section 608 certification does not expire. To get Universal certification, the Core must be taken as a proctored (watched) exam.",
            "Two rules to know now: it is against the law to intentionally vent (release) refrigerant into the air while servicing or getting rid of equipment, and refrigerant for this equipment may generally be sold only to certified technicians and their employers. Car air conditioning is covered by a different certification, Section 609.",
            "This course prepares you for the ideas on the test. It does not certify you. Check the EPA's Section 608 pages for the current rules and the list of approved certifying organizations, and ask your training program which test it offers."
          ],
          words: [
            ["EPA", "the US Environmental Protection Agency, the federal agency that makes the refrigerant rules."],
            ["Section 608", "the part of the Clean Air Act that covers refrigerant in stationary equipment such as home and building systems."],
            ["Certifying organization", "a group approved by the EPA to give the Section 608 test and issue the card."],
            ["Core", "the part of every Section 608 test that covers the rules, safety and basic refrigerant knowledge."],
            ["Venting", "letting refrigerant escape into the air. Doing it on purpose during service is against the law."],
            ["Proctored", "taken while a test monitor watches, in person or online."],
            ["Section 609", "a separate certification for working on car and truck air conditioning."]
          ],
          slides: [
            { title: "Who needs it", bullets: ["Techs who service or dispose of equipment with refrigerant", "Federal rule: Clean Air Act Section 608"] },
            { title: "The four types", bullets: ["Type I: small appliances", "Type II: high-pressure (most home central AC)", "Type III: low-pressure (some large chillers)", "Universal: all types"] },
            { title: "How you get it", bullets: ["Pass a test from an EPA-approved organization", "Core section plus your type", "EPA says it does not expire"] },
            { title: "Rules to know now", bullets: ["Never vent refrigerant on purpose", "Sales limited to certified techs and employers", "Car AC is Section 609, a different test"] }
          ],
          sources: [
            { name: "EPA: Section 608 technician certification", url: "https://www.epa.gov/section608/section-608-technician-certification-0" },
            { name: "EPA: Section 608 technician certification requirements", url: "https://www.epa.gov/section608/section-608-technician-certification-requirements" },
            { name: "EPA: Prohibition on venting refrigerants", url: "https://www.epa.gov/section608/stationary-refrigeration-prohibition-venting-refrigerants" },
            { name: "EPA: Refrigerant sales restriction", url: "https://www.epa.gov/section608/refrigerant-sales-restriction" }
          ],
          tryIt: "Match each job to a certification type and write it down: (1) fixing a window air conditioner; (2) servicing a home central air conditioner; (3) servicing a large low-pressure chiller in a hospital; (4) recovering refrigerant from an old household fridge; (5) a tech who wants to work on all of these. Answers: Type I, Type II, Type III, Type I, Universal. Then open the EPA Section 608 pages and write down the name of one approved certifying organization.",
          youCanNow: "match equipment to the right Section 608 type and state the venting and sales rules.",
          quickCheck: [
            { objective: "O4", q: "A tech will service home central air conditioners that use high-pressure refrigerant. Which certification type fits?", options: ["Type I", "Type III", "Type II", "Section 609"], answer: 2, why: "Type II covers high-pressure and very high-pressure equipment, which includes most home central AC." },
            { objective: "O4", q: "Who gives you the EPA Section 608 certification?", options: ["This course, when you finish it", "The homeowner you work for", "Any hardware store", "An EPA-approved certifying organization, after you pass its test"], answer: 3, why: "Only an EPA-approved certifying organization gives the test and the certification." }
          ]
        },
        {
          title: "Your path into HVAC, with dates",
          objectives: ["O5"],
          minutes: 6,
          goal: "Write a dated plan to get trained, certified and hired as an HVAC helper or apprentice.",
          text: [
            "There are three common ways in. Many technicians finish a program at a trade school or community college, which the Bureau of Labor Statistics says usually takes 6 months to 2 years and often includes the EPA test. Some join an apprenticeship: a paid job with a mentor plus classes, which usually lasts several years. Some employers hire helpers with a high school diploma or GED and train them on the job.",
            "Some states and cities require an HVAC license, and the rules differ. Find your state or city licensing board, or use CareerOneStop's license finder, and write down exactly what it asks for. Many employers also want a driver's license, and some prefer optional industry or manufacturer certifications later on.",
            "Before you pay for any program, ask: Does it include the EPA Section 608 test? How many graduates get HVAC jobs? Does it help with job placement? Veterans can ask the VA about using GI Bill benefits for training or apprenticeships. If you have a record, ask the licensing board how it reviews records and look for second-chance employers.",
            "A plan with dates turns a goal into steps. Write each step, where you checked it, and the date you will do it."
          ],
          steps: [
            "Write your goal, for example \"HVAC helper job by June\".",
            "Choose your EPA Section 608 type (many beginners aim for Type II or Universal) and an approved certifying organization.",
            "Find two training programs or apprenticeships near you on apprenticeship.gov or a community college site; note application dates.",
            "Check your state or city license rules on the official page and write what they require.",
            "Add dates for studying, the test, applications and a résumé update."
          ],
          words: [
            ["Apprenticeship", "a paid job where you learn the trade from experienced workers, plus classes."],
            ["Helper or trainee", "an entry-level HVAC worker who assists a technician while learning."],
            ["Licensing board", "the state or city office that decides who can do certain trade work and issues licenses."],
            ["CareerOneStop", "a free US Department of Labor website with job, training and license information."]
          ],
          slides: [
            { title: "Three ways in", bullets: ["Trade school or community college", "Apprenticeship: paid work plus classes", "Helper job with on-the-job training"] },
            { title: "Licenses differ by place", bullets: ["Some states and cities require a license", "Check the official licensing board", "Write down exactly what it asks for"] },
            { title: "Before you pay", bullets: ["Is the EPA test included?", "How many graduates get HVAC jobs?", "Veterans: ask the VA about the GI Bill"] },
            { title: "Your plan", bullets: ["Goal, EPA type, certifying organization", "Two programs with application dates", "License rules from the official page", "A date for every step"] }
          ],
          sources: [
            { name: "US Bureau of Labor Statistics: HVAC mechanics and installers, How to Become One", url: "https://www.bls.gov/ooh/installation-maintenance-and-repair/heating-air-conditioning-and-refrigeration-mechanics-and-installers.htm#tab-4" },
            { name: "Apprenticeship.gov: Apprenticeship Job Finder", url: "https://www.apprenticeship.gov/apprenticeship-job-finder" },
            { name: "CareerOneStop: License finder", url: "https://www.careeronestop.org/Toolkit/Training/find-licenses.aspx" },
            { name: "EPA: Section 608 technician certification", url: "https://www.epa.gov/section608/section-608-technician-certification-0" }
          ],
          tryIt: "Final task: make your HVAC starter plan. Put together your refrigeration cycle sketch (Lesson 2) and your hazard list (Lesson 4). Then write your dated plan: your goal, the Section 608 type you will take and one approved certifying organization, two training programs or apprenticeships near you with application dates, what your state or city requires for an HVAC license (with the web address you checked), and a date for every step.",
          youCanNow: "follow your own dated plan to get trained, take the EPA Section 608 test and apply for HVAC work.",
          quickCheck: [
            { objective: "O5", q: "Where should you check whether your state requires an HVAC license?", options: ["A social media post", "Your state or city licensing board's official page", "An ad for a training school", "A friend who once worked in HVAC"], answer: 1, why: "License rules differ by place and change, so the official board is the place to check." },
            { objective: "O5", q: "Which plan step is written the most usefully?", options: ["\"Get certified someday\"", "\"Look into HVAC\"", "\"Study a lot\"", "\"Take the EPA Type II test with an approved organization by March 15\""], answer: 3, why: "A useful step names the exact action, who it is with and a date." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Safety, certification and your path",
        questions: [
          { objective: "O2", q: "Before a trained technician touches wiring inside a unit, what is the last check?", options: ["Ask the customer if it is off", "Test that the power is really off", "Turn the thermostat down", "Wait five seconds"], answer: 1, why: "After locking and tagging out, techs test before they touch, because the wrong switch or stored charge can still shock." },
          { objective: "O2", q: "You are sent into a hot attic in summer. Which protection matters most for heat?", options: ["Water and regular breaks", "Hearing protection", "A welding helmet", "Steel-toe boots only"], answer: 0, why: "Water, breaks and watching for signs of heat illness protect you in hot spaces." },
          { objective: "O4", q: "A household refrigerator is a small appliance. Which Section 608 type covers it?", options: ["Type II", "Type III", "Type I", "Section 609"], answer: 2, why: "Type I covers small appliances such as household refrigerators and window units." },
          { objective: "O4", q: "What does the EPA say about releasing refrigerant into the air on purpose during service?", options: ["It is fine outdoors", "It is fine for small amounts", "It is fine with the owner's permission", "It is against the law"], answer: 3, why: "EPA rules prohibit intentionally venting refrigerant during service, repair or disposal." },
          { objective: "O5", q: "A school offers a fast HVAC course. Which question helps you most before you pay?", options: ["Does it include the EPA Section 608 test, and how many graduates get HVAC jobs?", "What color are the uniforms?", "Is the building new?", "Can I start on a Monday?"], answer: 0, why: "Whether the program leads to certification and jobs tells you if it is worth the money." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: HVAC Technician Basics",
    questions: [
      { objective: "O1", q: "In HVAC, what does the \"V\" stand for?", options: ["Voltage", "Ventilation", "Valve", "Vapor"], answer: 1, why: "HVAC is heating, ventilation and air conditioning." },
      { objective: "O1", q: "What does the blower fan do?", options: ["Moves air through the ducts", "Squeezes the refrigerant", "Controls the temperature setting", "Cleans the outdoor coil"], answer: 0, why: "The blower pushes air across the coil and through the ducts to the rooms." },
      { objective: "O1", q: "Which part releases heat outdoors?", options: ["The evaporator", "The return vent", "The condenser", "The thermostat"], answer: 2, why: "The condenser is the outdoor coil where heat leaves the refrigerant." },
      { objective: "O1", q: "Which is the right order of the refrigeration cycle?", options: ["Evaporator, compressor, metering device, condenser", "Compressor, metering device, condenser, evaporator", "Condenser, compressor, evaporator, metering device", "Compressor, condenser, metering device, evaporator"], answer: 3, why: "Refrigerant goes from the compressor to the condenser, through the metering device, into the evaporator and back." },
      { objective: "O1", q: "What lets a heat pump heat a home in winter?", options: ["A bigger air filter", "A reversing valve that runs the cycle backward", "A second thermostat", "Adding water to the refrigerant"], answer: 1, why: "The reversing valve sends refrigerant the other way, so heat is picked up outside and given off inside." },
      { objective: "O3", q: "A unit is rated 36,000 BTU per hour. How many tons is that?", options: ["2 tons", "4 tons", "3 tons", "36 tons"], answer: 2, why: "36,000 divided by 12,000 is 3." },
      { objective: "O3", q: "Return air is 80°F and supply air is 62°F. What is the temperature split?", options: ["22°F", "142°F", "16°F", "18°F"], answer: 3, why: "80 minus 62 is 18°F." },
      { objective: "O3", q: "Which way does the arrow on an air filter point?", options: ["Toward the blower, in the direction the air flows", "Toward the return vent grille", "Up, always", "It does not matter"], answer: 0, why: "The arrow shows airflow, toward the blower and equipment." },
      { objective: "O2", q: "Which hazard can shock a worker even after the power is switched off?", options: ["A clean air filter", "A charged capacitor", "A plastic vent cover", "A thermostat battery"], answer: 1, why: "Capacitors store a charge, which is why trained techs test before they touch." },
      { objective: "O2", q: "What is the purpose of lockout/tagout?", options: ["To lock the customer's door", "To mark which filter to buy", "To keep power off so no one turns it on during the work", "To speed up the repair"], answer: 2, why: "A lock and tag on the switch keep the equipment off until the worker who placed them removes them." },
      { objective: "O2", q: "Why is refrigerant dangerous in a small, closed space?", options: ["It smells bad", "It makes the room too bright", "It is sticky", "It can push out the oxygen you need to breathe"], answer: 3, why: "A large leak in a closed space can displace oxygen." },
      { objective: "O2", q: "You must cut and fit sheet metal duct. Which protection fits this hazard?", options: ["Cut-resistant gloves and safety glasses", "Sunglasses only", "No gear; it is quick", "Ear plugs only"], answer: 0, why: "Sheet metal edges are sharp, and bits can fly, so gloves and eye protection are needed." },
      { objective: "O4", q: "Which law requires technicians who handle refrigerant in home and building systems to be certified?", options: ["The Fair Labor Standards Act", "Section 608 of the Clean Air Act", "The Highway Safety Act", "The Clean Water Act"], answer: 1, why: "EPA's Section 608 program comes from the Clean Air Act." },
      { objective: "O4", q: "Which Section 608 type lets you work on all kinds of stationary equipment?", options: ["Type I", "Type II", "Type III", "Universal"], answer: 3, why: "Universal covers Types I, II and III." },
      { objective: "O4", q: "A large low-pressure chiller in a hospital needs service. Which type covers it?", options: ["Type III", "Type I", "Type II", "Section 609"], answer: 0, why: "Type III covers low-pressure equipment such as some large chillers." },
      { objective: "O4", q: "What does the EPA say about how long Section 608 certification lasts?", options: ["One year", "Five years", "It does not expire", "Until you change jobs"], answer: 2, why: "The EPA states that Section 608 technician certification does not expire." },
      { objective: "O5", q: "This course will:", options: ["Give you an HVAC license", "Prepare you to train and test; it does not certify or license you", "Count as your EPA test", "Replace an apprenticeship"], answer: 1, why: "Certification comes from an EPA-approved organization's test, and licenses come from your state or city." },
      { objective: "O5", q: "Which is a paid way to learn HVAC with a mentor plus classes?", options: ["A free online video", "A product warranty", "A home inspection", "A registered apprenticeship"], answer: 3, why: "An apprenticeship combines paid on-the-job training with classroom learning." },
      { objective: "O5", q: "Which free site can help you find apprenticeships near you?", options: ["apprenticeship.gov", "A random job forum", "A pop-up ad", "A video comment section"], answer: 0, why: "Apprenticeship.gov is the US Department of Labor's site with an Apprenticeship Job Finder." },
      { objective: "O5", q: "Which plan step is complete?", options: ["\"Learn HVAC\"", "\"Apply somewhere soon\"", "\"Apply to the community college HVAC program by April 1, after checking its EPA test and job placement\"", "\"Think about a license\""], answer: 2, why: "It names the action, the place, what was checked and a date." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  // pre-test: these quiz questions, taken before Lesson 1, so the quiz shows how much each learner gained
  pretest: { title: "Pre-Test: What Do You Already Know?", from: [0, 3, 5, 6, 9, 10, 13, 14, 16, 18] },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      { name: "Refrigeration cycle sketch", objective: "O1", notYet: "Parts are missing or in the wrong order.", meets: "All four parts are in the right order with one correct sentence on what each does.", exceeds: "Also marks inside and outside, hot and cold, and explains how a heat pump reverses." },
      { name: "Hazard list", objective: "O2", notYet: "Fewer than five hazards, or protection does not match the hazard.", meets: "At least five hazards, each matched to a safe step or the right gear.", exceeds: "Also puts the steps in the order a crew would do them, including lockout/tagout and test before touch." },
      { name: "HVAC numbers", objective: "O3", notYet: "Practice answers have mistakes in tons or temperature split.", meets: "At least 4 of 5 practice items right, with the work shown.", exceeds: "All right, and the learner can explain the filter arrow and read a real nameplate photo." },
      { name: "Right certification", objective: "O4", notYet: "The plan names the wrong Section 608 type for the work, or no certifying organization.", meets: "Names the right type for the jobs they want and one EPA-approved certifying organization.", exceeds: "Also states the venting rule and the sales restriction in their own words." },
      { name: "Dated plan from official sources", objective: "O5", notYet: "Steps have no dates, or license rules come from ads or posts.", meets: "At least five dated steps, two real programs, and license rules from the official page with its web address.", exceeds: "Also includes questions asked of each program and a backup plan, such as a helper job while training." }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Learners who pass an EPA Section 608 test within 6 months (self-reported at follow-up)",
      "Learners who enroll in an HVAC training program or apprenticeship within 90 days",
      "Learners hired as HVAC helpers, trainees or apprentices within 6 months",
      "Partner programs report applicants arrive knowing the basic parts, words and safety steps"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A phone or computer with internet to read the EPA, BLS, apprenticeship.gov and state licensing pages",
      "Paper, pen and a calculator (a phone calculator is fine)",
      "Optional: a used air filter or photos of a filter and an equipment nameplate",
      "About 60 to 75 minutes in total, in short sessions: lessons, practice, checks and the final task"
    ],
    facilitatorNotes: [
      "Keep all practice hands-off: no opening equipment panels, no refrigerant, no electrical work and no brazing. Those skills belong to a supervised training program with PPE.",
      "If you can, bring in a cut-away unit or photos and have learners point to each part of the cycle.",
      "Invite a local HVAC contractor, union or community college instructor to talk about helper jobs and what they look for.",
      "Help each learner find their own state or city license page; rules differ, so do not give one answer for the whole group.",
      "For learners with records or veterans, connect them to reentry or veteran services; do not promise any outcome from a licensing board.",
      "Score the final task with the rubric and give feedback on one Not yet row at a time."
    ]
  }
};
