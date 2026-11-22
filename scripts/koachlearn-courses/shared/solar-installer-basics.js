"use strict";

// Koach Learn course: Workforce Development (wave 1, 30 October 2026) -> "Solar Panel Installer Basics".
// Certification-prep course: prepares learners for entry-level solar work and the NABCEP PV Associate credential path.
// It does not grant any credential or license. Facts that can change point to the official pages in `sources`.

module.exports = {
  id: "solar-installer-basics",
  category: "Workforce Development",
  name: "Solar Panel Installer Basics",
  skills: "Naming the parts of a solar system, Spotting solar job site hazards, Doing basic solar math, Following the install steps, Planning a solar credential path",
  outcome: "explain how a home solar system works, spot the main dangers on a solar job, do simple practice solar math, list the steps of a rooftop install in order, and write your own plan with dates for entry-level solar work and the NABCEP PV Associate credential.",
  about: [
    "Solar installers put solar panels on roofs and on the ground and help connect them. Many people start as a helper on an install crew and learn on the job. This course is for job seekers, veterans, young adults, people coming home from prison and anyone who wants to work outdoors with their hands.",
    "You will learn the parts of a solar system, the safety rules that keep installers alive, the basic math crews use, the steps of a rooftop install, and the real credentials employers look for, such as the NABCEP PV Associate. This course prepares you; it does not give you a license or credential. Those come from NABCEP, your state and approved training programs.",
    "Each lesson takes about five minutes. Read it, look at the slides, then do the \"Try it now\" task with paper and a pen or a free phone calculator. A short check follows each lesson and each chapter, and a 20-question quiz closes the course. The last lesson builds your own Solar Start Plan."
  ],
  finalTask: "Make your one-page Solar Start Plan: (1) explain in 3 to 4 sentences how a grid-tied home solar system works, naming its main parts; (2) fill in a job site safety checklist for a practice roof job; (3) solve two practice sizing problems and show your work; (4) list the steps of a rooftop install in order; (5) write your credential path with real dates (training program, NABCEP PV Associate exam target, any state or employer requirements you checked on the official page); and (6) write a 3-bullet \"Solar skills\" section for your résumé.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Adults looking for a hands-on job in clean energy: job seekers, veterans, young adults, people coming home from prison, immigrants and adults returning to learning. Most have no solar experience; some have done construction, roofing or electrical helper work.",
    startingPoint: "Can do basic arithmetic with a calculator and read short instructions. Most have never been on a solar job site and do not know the parts of a solar system, the safety rules or the credentials employers ask for.",
    gap: "Solar crews hire helpers who already know the basic words, respect the safety rules and show a plan for training. Learners need enough knowledge to talk with confidence in an interview, stay safe in the first weeks on a crew, and pick the right training and credential steps without wasting money.",
    constraints: [
      "Reading level: plain words and short sentences (about grade 6 to 8)",
      "No hands-on roof or electrical work in this course: real installs are learned on a supervised crew or in an approved training program",
      "Free tools only: paper, pen, a phone calculator and official websites",
      "Requirements for licenses, fees and credentials change and differ by state: learners check the official pages",
      "Time: 4 to 6 minute lessons that fit around work and appointments"
    ],
    prerequisites: "None. \"Skilled Trades Careers\" and \"Workplace Safety Basics (OSHA)\" are helpful but not required."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Given a drawing or list of the parts of a grid-tied home solar system", action: "name each main part and say what it does", standard: "getting at least 5 of 6 parts right" },
    { id: "O2", condition: "Given a practice solar job scenario", action: "list the hazards and the safety step for each one", standard: "naming falls, electric shock, heat and lifting, with a correct safety step for each" },
    { id: "O3", condition: "Given practice numbers for panels, volts and amps", action: "calculate watts, system size and string voltage", standard: "with no math errors, showing your work" },
    { id: "O4", condition: "Given the steps of a rooftop solar install in mixed order", action: "put the steps in the right order and say who does each one", standard: "with no more than one step out of place" },
    { id: "O5", condition: "Using the official NABCEP and state websites", action: "list the credentials and licenses for entry-level solar work where you live", standard: "naming the source page for each one" },
    { id: "O6", condition: "Using your notes from this course", action: "write a Solar Start Plan with dates and a résumé skills section", standard: "meeting every row of the rubric" }
  ],
  chapters: [
    {
      name: "Chapter 1: How solar works and how to stay safe",
      lessons: [
        {
          title: "The parts of a home solar system",
          objectives: ["O1"],
          minutes: 5,
          goal: "Name the main parts of a grid-tied solar system and say what each one does.",
          text: [
            "Solar panels, also called modules, turn sunlight into electricity. The kind of electricity they make is direct current (DC). Homes use alternating current (AC), so an inverter changes DC into AC.",
            "The panels sit on racking, a metal frame bolted to the roof or set on the ground. Wires run from the panels to the inverter, then to the home's main electrical panel. Disconnect switches let workers shut parts of the system off. A meter counts the electricity the home uses and sends to the grid.",
            "Most home systems are grid-tied: they stay connected to the power company's lines, called the grid. Extra power can flow to the grid, and the home uses grid power at night. Some homes also add a battery to store power for later or for outages."
          ],
          words: [["Solar panel (module)", "a flat panel that turns sunlight into electricity."], ["PV (photovoltaic)", "the technology that makes electricity from light; solar panels are PV panels."], ["DC (direct current)", "electricity that flows one way, like from a battery or a solar panel."], ["AC (alternating current)", "electricity that changes direction many times a second; homes use AC."], ["Inverter", "the box that changes DC from the panels into AC for the home."], ["Racking", "the metal frame that holds the panels."], ["Grid-tied", "connected to the power company's lines."], ["Disconnect", "a switch that cuts power to part of a system."]],
          slides: [
            { title: "Panels make DC power", bullets: ["Solar panels (modules) turn sunlight into DC electricity", "PV means photovoltaic: power from light"] },
            { title: "From roof to home", bullets: ["Racking holds the panels", "Wires run to the inverter", "Inverter changes DC to AC for the home"] },
            { title: "Safety switches and the meter", bullets: ["Disconnects shut parts of the system off", "The meter counts power used and sent to the grid"] },
            { title: "Grid-tied systems", bullets: ["Stay connected to the power company's lines", "Extra power can flow to the grid", "A battery is optional, for later use or outages"] }
          ],
          sources: [{ name: "U.S. Department of Energy: Homeowner's Guide to Going Solar", url: "https://www.energy.gov/eere/solar/homeowners-guide-going-solar" }],
          tryIt: "On paper, draw a simple house with panels on the roof. Draw and label six boxes in order: panels, racking, inverter, disconnect, main electrical panel, meter. Next to each one, write one short line about what it does. Then cover your labels and say each part out loud.",
          youCanNow: "name the main parts of a grid-tied solar system and say what each one does.",
          quickCheck: [
            { objective: "O1", q: "Which part changes DC from the panels into AC for the home?", options: ["The racking", "The meter", "The inverter", "The disconnect"], answer: 2, why: "The inverter changes the panels' DC into the AC that homes use." },
            { objective: "O1", q: "What does \"grid-tied\" mean?", options: ["The system is connected to the power company's lines", "The panels are tied down with rope", "The home has no meter", "The system only works at night"], answer: 0, why: "A grid-tied system stays connected to the utility grid, so extra power can flow out and grid power can flow in." }
          ]
        },
        {
          title: "Staying safe on a solar job site",
          objectives: ["O2"],
          minutes: 6,
          goal: "List the main hazards on a solar job and the safety step for each one.",
          text: [
            "Falls are the biggest danger in solar work. In construction, OSHA requires fall protection when you work 6 feet or more above a lower level. On a roof that usually means a personal fall arrest system: a full-body harness, a lanyard and a roof anchor, set up by a trained person. Inspect your harness before every use.",
            "Electric shock is the second big danger. Solar panels make electricity whenever light hits them, and you cannot switch the sun off. Wires from the panels can be live in daylight even when a switch is off. As a new helper you do not connect or touch wiring: only qualified, trained workers do electrical work, following lockout and tagout steps.",
            "Ladders: set them on firm, level ground, have the side rails reach at least 3 feet above the roof edge, and keep three points of contact. Heat: drink water often, rest in the shade, and tell your lead if you feel dizzy or sick. Lifting: panels are big and catch the wind, so carry them with two people and lift with your legs.",
            "Wear your protective gear (PPE): hard hat, safety glasses, work gloves and boots with good grip. Stop work and tell your lead whenever something feels unsafe."
          ],
          steps: ["Before you climb: check the ladder, the weather and your harness.", "On the roof: stay tied off to an anchor whenever you are 6 feet or more up.", "Treat every panel and wire as live; do not touch connections unless you are qualified.", "Drink water, take shade breaks and lift panels with a partner.", "Stop and tell your lead about any hazard."],
          words: [["OSHA", "the U.S. Occupational Safety and Health Administration, the federal agency for workplace safety."], ["Fall protection", "gear and setups that stop you from falling or stop a fall safely."], ["Personal fall arrest system", "a full-body harness, a lanyard and an anchor that catch you if you fall."], ["PPE", "personal protective equipment: safety gear you wear, like a hard hat and gloves."], ["Lockout/tagout", "steps that shut off and lock power so no one can turn it back on while work is done."], ["Live", "carrying electricity."]],
          slides: [
            { title: "Falls: the top danger", bullets: ["OSHA: fall protection at 6 feet or more in construction", "Harness, lanyard and roof anchor", "Inspect your harness before every use"] },
            { title: "Electric shock", bullets: ["Panels make power whenever light hits them", "Wires can be live even with a switch off", "Only qualified workers do electrical work"] },
            { title: "Ladders, heat and lifting", bullets: ["Ladder rails 3 feet above the roof edge; firm, level ground", "Water, shade and rest breaks", "Carry panels with two people"] },
            { title: "Gear up and speak up", bullets: ["Hard hat, safety glasses, gloves, boots with grip", "Stop work and tell your lead if anything is unsafe"] }
          ],
          sources: [
            { name: "OSHA: Fall protection", url: "https://www.osha.gov/fall-protection" },
            { name: "OSHA: 29 CFR 1926.501, duty to have fall protection (construction)", url: "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.501" },
            { name: "OSHA: 29 CFR 1926.1053, ladders", url: "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1053" },
            { name: "OSHA: Heat", url: "https://www.osha.gov/heat-exposure" },
            { name: "U.S. Bureau of Labor Statistics: Solar photovoltaic installers", url: "https://www.bls.gov/ooh/construction-and-extraction/solar-photovoltaic-installers.htm" }
          ],
          tryIt: "Practice scenario: it is a hot July morning. Your crew is putting 18 panels on a two-story roof. The ladder is on soft grass, one coworker has no harness, and a panel's wires are hanging loose. On paper, make a two-column checklist: Hazard and Safety step. Write at least four rows (falls, shock, heat, lifting, and the ladder).",
          youCanNow: "spot the main hazards on a solar job and name the safety step for each one.",
          quickCheck: [
            { objective: "O2", q: "In construction, at what height does OSHA require fall protection?", options: ["10 feet", "20 feet", "Only on the top of the roof", "6 feet"], answer: 3, why: "OSHA's construction rule calls for fall protection at 6 feet or more above a lower level." },
            { objective: "O2", q: "It is sunny and the disconnect switch is off. Are the panel wires safe to touch?", options: ["Yes, the switch makes everything safe", "No, panels make power whenever light hits them, so treat wires as live", "Yes, if you wear work gloves", "Only if the inverter is quiet"], answer: 1, why: "Panels keep making electricity in light, so wires from them can still be live." }
          ]
        },
        {
          title: "Basic solar math (practice only)",
          objectives: ["O3"],
          minutes: 6,
          goal: "Calculate watts, system size and string voltage from practice numbers.",
          text: [
            "Crews use a few simple formulas every day. All the numbers in this lesson are made up for practice only. Real designs use the panel's label, the manufacturer's data sheet and the electrical code, and are checked by a qualified designer.",
            "Power: watts = volts x amps. A practice panel making 40 volts at 10 amps makes 40 x 10 = 400 watts. 1,000 watts is 1 kilowatt (kW).",
            "System size: number of panels x watts per panel. 20 practice panels at 400 watts each = 8,000 watts, which is 8 kW.",
            "Strings: panels wired in series form a string. In series, the voltages add and the amps stay the same. Three practice panels at 40 volts each in series = 120 volts. In parallel, the amps add and the voltage stays the same."
          ],
          steps: ["Write the formula first.", "Put in the numbers with their units (V, A, W).", "Do the math on a calculator.", "Change watts to kilowatts by dividing by 1,000.", "Check: does the answer make sense?"],
          words: [["Volt (V)", "a measure of electrical push or pressure."], ["Amp (A)", "a measure of how much electricity is flowing."], ["Watt (W)", "a measure of power: volts times amps."], ["Kilowatt (kW)", "1,000 watts."], ["Series", "wired end to end in one line; voltages add."], ["Parallel", "wired side by side; amps add."], ["String", "a group of panels wired in series."]],
          slides: [
            { title: "Practice only", bullets: ["Made-up numbers to learn the method", "Real designs use the data sheet, the code and a qualified designer"] },
            { title: "Watts = volts x amps", bullets: ["40 V x 10 A = 400 W", "1,000 W = 1 kW"] },
            { title: "System size", bullets: ["Panels x watts per panel", "20 x 400 W = 8,000 W = 8 kW"] },
            { title: "Series and parallel", bullets: ["Series: volts add, amps stay the same", "3 x 40 V in series = 120 V", "Parallel: amps add, volts stay the same"] }
          ],
          tryIt: "Practice only. Solve on paper and show your work: (a) A panel makes 36 volts at 11 amps. How many watts? (b) A home has 24 panels of 350 watts. What is the system size in kW? (c) Five panels at 40 volts each are wired in series. What is the string voltage? Answers to check yourself: (a) 396 W, (b) 8,400 W = 8.4 kW, (c) 200 V.",
          youCanNow: "calculate watts, system size and string voltage from practice numbers and show your work.",
          quickCheck: [
            { objective: "O3", q: "Practice only: 15 panels at 400 watts each. What is the system size?", options: ["4 kW", "6 kW", "15 kW", "400 kW"], answer: 1, why: "15 x 400 W = 6,000 W, and 6,000 / 1,000 = 6 kW." },
            { objective: "O3", q: "Practice only: four panels at 40 volts each are wired in series. What is the string voltage?", options: ["40 V", "80 V", "10 V", "160 V"], answer: 3, why: "In series the voltages add: 4 x 40 V = 160 V." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: How solar works and how to stay safe",
        questions: [
          { objective: "O1", q: "What kind of electricity do solar panels make?", options: ["AC", "DC", "Gas power", "Battery-only power"], answer: 1, why: "Panels make direct current (DC); the inverter changes it to AC." },
          { objective: "O1", q: "What is the job of racking?", options: ["It holds the panels on the roof or ground", "It counts the power sent to the grid", "It changes DC to AC", "It stores power at night"], answer: 0, why: "Racking is the metal frame that holds the panels." },
          { objective: "O2", q: "You are on a roof 12 feet up. What must you use?", options: ["Nothing if you are careful", "Only a hard hat", "Fall protection, such as a harness tied to an anchor", "A taller ladder"], answer: 2, why: "At 6 feet or more in construction you need fall protection." },
          { objective: "O2", q: "As a new helper, a coworker asks you to connect two panel wires. What do you do?", options: ["Connect them quickly with gloves on", "Wait until a cloud passes", "Ask the customer to help", "Say no and tell your lead, because only qualified workers do electrical work"], answer: 3, why: "Electrical connections are for qualified, trained workers; new helpers do not touch wiring." },
          { objective: "O3", q: "Practice only: a panel makes 50 volts at 8 amps. How many watts is that?", options: ["58 W", "400 W", "42 W", "800 W"], answer: 1, why: "Watts = volts x amps, so 50 x 8 = 400 W." }
        ]
      }
    },
    {
      name: "Chapter 2: From the roof to your first job",
      lessons: [
        {
          title: "The steps of a rooftop install",
          objectives: ["O4"],
          minutes: 5,
          goal: "Put the steps of a rooftop solar install in order and say who does each one.",
          text: [
            "Every install follows a path. First, a site assessment: someone checks the roof's age and condition, which way it faces, shade from trees, and the home's electrical panel. Then a designer lays out the panels and the wiring.",
            "Next comes the permit. The city or county building department reviews the plans before work starts. On install day, the crew sets up safety gear, marks the roof, and fastens roof attachments into the rafters. Each attachment is flashed and sealed so the roof does not leak. Then the crew bolts on the racking and mounts the panels.",
            "A qualified electrician or licensed worker makes the electrical connections, following the National Electrical Code (NEC) and the local rules. Then the system is inspected by the local building official. Finally, the utility (power company) approves the system to connect to the grid, often called permission to operate. Only then is the system turned on.",
            "Helpers mostly carry and stage materials, help set racking and panels, keep the site clean, and follow the lead's instructions."
          ],
          steps: ["Site assessment: roof, direction, shade, electrical panel.", "Design: panel layout and wiring plan.", "Permit from the city or county.", "Safety setup, then roof attachments, flashed and sealed.", "Racking, then panels mounted.", "Electrical connections by qualified workers.", "Inspection by the local official.", "Utility approval (permission to operate), then turn on."],
          words: [["Site assessment", "a visit to check whether a roof or yard is right for solar."], ["Permit", "official permission from the city or county to do the work."], ["Flashing", "metal or other material that keeps water out where something goes through the roof."], ["Rafter", "one of the wood beams that hold up a roof."], ["NEC", "the National Electrical Code (NFPA 70), the rules for safe electrical work that states and cities adopt."], ["Inspection", "a check by an official that the work meets the code."], ["Permission to operate", "the power company's OK to turn on a grid-tied system."]],
          slides: [
            { title: "Before the crew arrives", bullets: ["Site assessment: roof, direction, shade, panel", "Design: layout and wiring", "Permit from the city or county"] },
            { title: "Install day", bullets: ["Safety setup first", "Attachments into rafters, flashed and sealed", "Racking, then panels"] },
            { title: "Finishing", bullets: ["Electrical work by qualified workers, per the NEC", "Local inspection", "Utility approval, then turn on"] },
            { title: "What helpers do", bullets: ["Carry and stage materials", "Help set racking and panels", "Keep the site clean; follow the lead"] }
          ],
          sources: [
            { name: "U.S. Department of Energy: Homeowner's Guide to Going Solar", url: "https://www.energy.gov/eere/solar/homeowners-guide-going-solar" },
            { name: "NFPA 70: National Electrical Code (check which edition your state uses)", url: "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70" }
          ],
          tryIt: "Write each of the 8 install steps on its own small piece of paper. Mix them up, then put them back in order without looking at the lesson. Next to each one, write who does it: designer, city or county, crew, qualified electrician, inspector or utility. Check your order against the lesson.",
          youCanNow: "list the steps of a rooftop solar install in order and say who does each one.",
          quickCheck: [
            { objective: "O4", q: "What usually comes right before install day?", options: ["Getting the permit", "The final inspection", "Utility permission to operate", "Turning the system on"], answer: 0, why: "The city or county permit comes before work starts on the roof." },
            { objective: "O4", q: "Why are roof attachments flashed and sealed?", options: ["To make the panels shine", "So the roof does not leak", "To speed up the inspection", "To make the panels produce more power"], answer: 1, why: "Flashing and sealing keep water out where bolts go through the roof." }
          ]
        },
        {
          title: "Credentials, licenses and training",
          objectives: ["O5"],
          minutes: 5,
          goal: "List the credentials and licenses for entry-level solar work where you live, with the official source for each.",
          text: [
            "Many installers start as helpers and learn on the job, often for one month to a year. Some take a short course at a community college, technical school or apprenticeship program first. Electricians, roofers and construction workers can often move into solar faster.",
            "NABCEP (the North American Board of Certified Energy Practitioners) offers well-known solar credentials. The entry-level one is the NABCEP PV Associate. You can qualify by finishing a course with a NABCEP Associate Registered Training Provider, or by showing at least six months of full-time solar work, and then passing the exam. Later, experienced installers can aim for NABCEP Board Certification, such as PV Installation Professional.",
            "Licenses are set by states, and some cities. Some states require a solar or electrical license for certain work; others do not. Fees, exam rules and requirements change, so check the official NABCEP page and your state licensing board yourself before you pay for anything.",
            "This course prepares you to start. It does not give you a credential or a license."
          ],
          steps: ["Read the NABCEP Associate program page.", "Find a registered training provider or count your solar work months.", "Search your state's contractor or electrical licensing board for solar rules.", "Write down each requirement and the page where you found it.", "Ask local solar employers which credentials they want."],
          words: [["NABCEP", "the North American Board of Certified Energy Practitioners, which offers solar credentials."], ["Credential", "proof that you passed a test or met a standard."], ["License", "permission from a state or city to do certain work."], ["Apprenticeship", "a paid job with training, where you learn from skilled workers."], ["Registered training provider", "a school NABCEP lists as approved to prepare you for its associate exam."]],
          slides: [
            { title: "Ways in", bullets: ["Start as a helper and learn on the job", "Short courses, community colleges, apprenticeships", "Electrical, roofing or building work helps"] },
            { title: "NABCEP PV Associate", bullets: ["Entry-level solar credential", "Qualify by a registered course or 6 months of solar work", "Then pass the exam"] },
            { title: "Licenses are local", bullets: ["Set by your state and sometimes your city", "Some states require a solar or electrical license"] },
            { title: "Check before you pay", bullets: ["Official NABCEP page and your state licensing board", "Write down each requirement and its source", "This course prepares you; it does not license you"] }
          ],
          sources: [
            { name: "NABCEP: Associate program (PV Associate)", url: "https://www.nabcep.org/certification/associate-program/" },
            { name: "NABCEP: Certifications", url: "https://www.nabcep.org/certifications/" },
            { name: "U.S. Bureau of Labor Statistics: How to become a solar photovoltaic installer", url: "https://www.bls.gov/ooh/construction-and-extraction/solar-photovoltaic-installers.htm" },
            { name: "CareerOneStop: License Finder", url: "https://www.careeronestop.org/Toolkit/Training/find-licenses.aspx" }
          ],
          tryIt: "Open the NABCEP Associate program page and write down the ways to qualify for the PV Associate. Then search your state name plus \"solar contractor license\" and find your state's official licensing board page (it often ends in .gov). Write one line on what it says, and the web address.",
          youCanNow: "name the entry-level NABCEP credential, say how to qualify for it, and find your state's licensing rules on the official page.",
          quickCheck: [
            { objective: "O5", q: "Which is NABCEP's entry-level solar PV credential?", options: ["EPA Section 608", "CDL Class A", "NABCEP PV Associate", "CompTIA A+"], answer: 2, why: "The NABCEP PV Associate is the entry-level solar PV credential." },
            { objective: "O5", q: "Where do you check whether your state requires a license for solar work?", options: ["A social media post", "An ad for a fast online course", "A friend in another state", "Your state's official licensing board page"], answer: 3, why: "Licenses are set by each state, so the state's official board page is the source to trust." }
          ]
        },
        {
          title: "Your Solar Start Plan",
          objectives: ["O6"],
          minutes: 6,
          goal: "Write a Solar Start Plan with dates and a résumé skills section.",
          text: [
            "Now put it all together into one page you can take to a training program or an interview. A plan with real dates shows an employer you are serious.",
            "Your plan has six parts: how solar works in your own words; a safety checklist; two practice math problems with your work shown; the install steps in order; your credential path with dates and sources; and a \"Solar skills\" résumé section.",
            "For the résumé section, write true things you can do now, in short bullets that start with an action word. For example: \"Know the parts of a grid-tied PV system and how DC becomes AC.\" \"Trained in solar job site hazards: fall protection, shock, heat and safe lifting.\" \"Can calculate system size and string voltage.\" Add past work that helps: construction, roofing, military, warehouse or any job with tools, heights or teamwork.",
            "Veterans and people with a record: many solar employers hire from these groups. Be honest on applications, and ask a local workforce center or reentry program about training help."
          ],
          steps: ["Write your 3 to 4 sentence explanation of a grid-tied system.", "Copy your safety checklist from Lesson 2 and finish it.", "Add two practice math problems with your work.", "List the 8 install steps in order.", "Write your credential path with target dates and source pages.", "Write 3 résumé bullets that start with an action word."],
          words: [["Résumé", "a short document that lists your skills, work and training for employers."], ["Target date", "the day you plan to finish a step."], ["Workforce center", "a free public office that helps people find jobs and training; many are called American Job Centers."]],
          slides: [
            { title: "One page, six parts", bullets: ["How solar works; safety checklist", "Practice math; install steps", "Credential path with dates; résumé section"] },
            { title: "Real dates", bullets: ["When you will start training", "When you aim to take the NABCEP PV Associate exam", "When you will apply for helper jobs"] },
            { title: "Résumé: Solar skills", bullets: ["Short bullets that start with an action word", "Only true things you can do", "Add past work with tools, heights or teamwork"] },
            { title: "Get help", bullets: ["American Job Centers and reentry programs", "Ask about training help and local employers"] }
          ],
          sources: [{ name: "CareerOneStop: Find an American Job Center", url: "https://www.careeronestop.org/LocalHelp/AmericanJobCenters/find-american-job-centers.aspx" }],
          tryIt: "Final task: make your one-page Solar Start Plan with all six parts. Put a real date next to every credential and job step, and the web address for each requirement you checked. Read your résumé bullets out loud as if you were in an interview.",
          youCanNow: "show an employer or training program a written plan for starting solar work, with dates, sources and a résumé skills section.",
          quickCheck: [
            { objective: "O6", q: "Which is the best résumé bullet for a solar helper job?", options: ["\"Hard worker.\"", "\"Trained in solar job site hazards: fall protection, shock, heat and safe lifting.\"", "\"Licensed solar electrician.\" (when you are not)", "\"I like the sun.\""], answer: 1, why: "It is true, specific and starts with an action word; never claim a license you do not have." },
            { objective: "O6", q: "What makes a Solar Start Plan stronger?", options: ["Real target dates and the source page for each requirement", "No dates, so you stay flexible", "Copying a friend's plan", "Leaving out the safety part"], answer: 0, why: "Dates and official sources turn a wish into a plan an employer can trust." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: From the roof to your first job",
        questions: [
          { objective: "O4", q: "Who gives final approval to connect a grid-tied system to the grid?", options: ["The helper", "The panel maker", "The customer's neighbor", "The utility (power company)"], answer: 3, why: "The utility gives permission to operate before the system is turned on." },
          { objective: "O4", q: "Which step comes first?", options: ["Mounting panels", "Inspection", "Site assessment", "Turning the system on"], answer: 2, why: "The site assessment checks the roof, direction, shade and electrical panel before anything else." },
          { objective: "O5", q: "What is one way to qualify for the NABCEP PV Associate exam?", options: ["Finish a course with a NABCEP Associate Registered Training Provider", "Buy a solar panel", "Watch one video online", "Work one day on a roof"], answer: 0, why: "The education pathway is a course with a registered training provider; another is at least six months of solar work." },
          { objective: "O5", q: "Does this course give you a solar license?", options: ["Yes, after the quiz", "No; it prepares you, and licenses come from your state or city", "Yes, if you finish in one day", "Only in sunny states"], answer: 1, why: "The course prepares you; credentials come from NABCEP and licenses from the state or city." },
          { objective: "O6", q: "Your plan says \"Take the PV Associate exam.\" What should you add?", options: ["Nothing", "A friend's name", "A target date and the official page you checked", "A photo of a panel"], answer: 2, why: "A date and a source make the step real and checkable." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Solar Panel Installer Basics",
    questions: [
      { objective: "O1", q: "What do solar panels turn sunlight into?", options: ["Heat only", "DC electricity", "Natural gas", "AC electricity with no inverter"], answer: 1, why: "Solar PV panels make direct current (DC) electricity." },
      { objective: "O1", q: "Which part counts the electricity a home uses and sends to the grid?", options: ["The meter", "The racking", "The flashing", "The harness"], answer: 0, why: "The meter measures power going in and out." },
      { objective: "O1", q: "A home system that stays connected to the power company's lines is called:", options: ["Off-road", "Free-standing", "Battery-only", "Grid-tied"], answer: 3, why: "Grid-tied systems are connected to the utility grid." },
      { objective: "O1", q: "What is a battery used for in some solar homes?", options: ["Holding the panels on the roof", "Changing AC to DC for the meter", "Storing power for later or for outages", "Replacing the inverter"], answer: 2, why: "A battery stores power to use later, such as at night or in an outage." },
      { objective: "O2", q: "What is the biggest danger in solar installation work?", options: ["Paper cuts", "Falls from roofs and ladders", "Loud music", "Rain on the truck"], answer: 1, why: "Falls are the top danger for solar installers." },
      { objective: "O2", q: "Which gear is part of a personal fall arrest system?", options: ["Safety glasses", "Work boots", "A full-body harness, a lanyard and an anchor", "A tool belt"], answer: 2, why: "A harness, lanyard and anchor together catch a fall." },
      { objective: "O2", q: "It is very hot and a coworker feels dizzy. What do you do?", options: ["Tell the lead, move them to shade and give them water", "Tell them to keep working", "Send them up the ladder", "Ignore it until lunch"], answer: 0, why: "Dizziness can be heat illness: shade, water, rest and telling the lead come first." },
      { objective: "O2", q: "How should you carry a large solar panel?", options: ["Alone, over your head", "On a windy roof edge", "By the wires", "With a partner, lifting with your legs"], answer: 3, why: "Panels are big and catch the wind, so two people carry them using their legs." },
      { objective: "O3", q: "Practice only: 30 volts x 9 amps = ?", options: ["39 W", "270 W", "21 W", "2,700 W"], answer: 1, why: "Watts = volts x amps: 30 x 9 = 270 W." },
      { objective: "O3", q: "Practice only: 25 panels at 400 watts. What is the system size?", options: ["10 kW", "4 kW", "25 kW", "1 kW"], answer: 0, why: "25 x 400 W = 10,000 W = 10 kW." },
      { objective: "O3", q: "In a series string, what happens to the voltage?", options: ["It stays the same", "It goes to zero", "The voltages add up", "It is cut in half"], answer: 2, why: "In series, each panel's voltage adds to the string voltage." },
      { objective: "O3", q: "How many watts are in 1 kilowatt?", options: ["10", "100", "10,000", "1,000"], answer: 3, why: "Kilo means 1,000, so 1 kW = 1,000 W." },
      { objective: "O4", q: "What happens before work starts on the roof?", options: ["The permit from the city or county", "The final inspection", "Permission to operate", "Turning the system on"], answer: 0, why: "The permit is approved before installation begins." },
      { objective: "O4", q: "Who makes the electrical connections on a solar install?", options: ["Any new helper", "The customer", "A qualified electrician or licensed worker", "The utility meter reader"], answer: 2, why: "Electrical work is done by qualified workers following the NEC and local rules." },
      { objective: "O4", q: "What is the last step before the system is turned on?", options: ["Site assessment", "Design", "Mounting racking", "Utility permission to operate"], answer: 3, why: "The utility's approval comes after inspection and before turn-on." },
      { objective: "O5", q: "What does NABCEP offer?", options: ["Driver's licenses", "Solar credentials such as the PV Associate", "Building permits", "Electric bills"], answer: 1, why: "NABCEP offers solar credentials and board certifications." },
      { objective: "O5", q: "Who sets licensing rules for solar and electrical work?", options: ["Each state, and sometimes the city", "The panel manufacturer", "NABCEP for every state", "The customer"], answer: 0, why: "Licensing is set by states and sometimes local governments." },
      { objective: "O5", q: "An online ad says you will be a \"licensed solar installer in 2 days\". What do you do?", options: ["Pay right away", "Share it with friends", "Give them your Social Security number", "Check the claim on NABCEP and your state licensing board pages"], answer: 3, why: "Official pages tell you the real requirements before you pay." },
      { objective: "O6", q: "Which belongs in your Solar Start Plan?", options: ["Your bank password", "Target dates for training and the PV Associate exam", "A list of your favorite songs", "A license you do not have"], answer: 1, why: "Dates for each step make the plan real." },
      { objective: "O6", q: "A good résumé bullet should be:", options: ["Long and vague", "Copied from a stranger", "True, specific and start with an action word", "About a skill you plan to learn someday"], answer: 2, why: "Employers trust short, true, specific bullets." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Pre-Test: What Do You Already Know About Solar?", from: [0, 2, 4, 6, 8, 10, 13, 15, 18] },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      { name: "How solar works", objective: "O1", notYet: "The explanation misses the inverter or mixes up AC and DC.", meets: "Names panels, racking, inverter, disconnect, meter and the grid, and says what each does.", exceeds: "Also explains, in their own words, why the disconnect matters for safety during service and why panels are live whenever there is daylight." },
      { name: "Safety checklist", objective: "O2", notYet: "Misses falls or electric shock, or gives no safety step.", meets: "Lists falls, shock, heat and lifting, each with a correct safety step (including fall protection at 6 feet).", exceeds: "Adds ladder setup and a stop-work rule, and says who to tell." },
      { name: "Practice math", objective: "O3", notYet: "A math error, or no work shown.", meets: "Both problems are right, with the formula and units shown.", exceeds: "Also checks that each answer makes sense and changes watts to kW correctly." },
      { name: "Install steps", objective: "O4", notYet: "Two or more steps out of order, or the permit or inspection is missing.", meets: "All 8 steps in order, with at most one out of place, and who does each.", exceeds: "Explains why flashing and the utility's approval matter." },
      { name: "Credential path", objective: "O5", notYet: "No dates, or requirements with no source.", meets: "Names the NABCEP PV Associate and a way to qualify, plus the state licensing check, each with a target date and web address.", exceeds: "Names a specific registered training provider or local employer and a backup plan." },
      { name: "Résumé section", objective: "O6", notYet: "Bullets are vague or claim a license or credential the learner does not have.", meets: "Three true bullets that start with an action word and match solar work.", exceeds: "Connects past work (construction, military, warehouse) to solar tasks." }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Learners who enroll in a solar training program or apprenticeship within 90 days",
      "Learners who pass the NABCEP PV Associate exam within 12 months (self-reported)",
      "Learners hired as solar helpers or installers within 6 months (follow-up survey or partner report)"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A phone, tablet or computer with internet to read lessons and check official pages",
      "Paper, pen and a calculator (a phone calculator is fine)",
      "Optional: a printed picture of a home solar system to label",
      "About 60 to 75 minutes in total, in short sessions"
    ],
    facilitatorNotes: [
      "No one climbs a roof or touches electrical parts in this course. If you show real equipment, keep it unplugged, unlit and on the ground.",
      "Take the pre-test together, then do one chapter per session and work the practice math on a whiteboard.",
      "Have learners look up their own state's licensing page live; requirements differ by state.",
      "Invite a local solar installer, union training center or registered NABCEP training provider to talk about hiring.",
      "Score the final task with the rubric and give feedback on one Not yet row at a time.",
      "For learners with records or on supervision: point them to reentry and workforce programs, and remind them to be honest on applications."
    ]
  }
};
