"use strict";

// Koach Learn course: Workforce Development -> "Manufacturing Technician Basics" (wave 3, 30 October 2026).
// Prepares learners for entry-level production work and for the MSSC Certified Production Technician (CPT 4.0) assessments.
// The course does not grant any certificate; MSSC issues CPT credentials, and machine skills are learned in person with a qualified instructor.
// Facts checked 30 October 2026 on msscusa.org (CPT 4.0 page and CPT courses page), osha.gov (1910.147, 1910.212, control of
// hazardous energy, machine guarding), dol.gov (jobs off-limits to workers under 18) and apprenticeship.gov (Apprenticeship Finder).

const MSSC_CPT = { name: "MSSC: Certified Production Technician (CPT 4.0)", url: "https://www.msscusa.org/certification/production-certification-cpt/" };
const MSSC_COURSES = { name: "MSSC: CPT 4.0 modules and courses", url: "https://www.msscusa.org/certified-production-technician-cpt-courses/" };
const OSHA_LOTO = { name: "OSHA: Control of Hazardous Energy (Lockout/Tagout)", url: "https://www.osha.gov/control-hazardous-energy" };
const OSHA_147 = { name: "OSHA 29 CFR 1910.147: The control of hazardous energy (lockout/tagout)", url: "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.147" };
const OSHA_GUARD = { name: "OSHA: Machine Guarding", url: "https://www.osha.gov/machine-guarding" };
const OSHA_212 = { name: "OSHA 29 CFR 1910.212: General requirements for all machines (guarding)", url: "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.212" };
const DOL_YOUTH = { name: "U.S. Department of Labor: Jobs that are off-limits to workers under 18", url: "https://www.dol.gov/agencies/whd/child-labor/what-jobs-are-off-limits" };
const APPRENTICE = { name: "Apprenticeship.gov: Apprenticeship Finder (U.S. Department of Labor)", url: "https://www.apprenticeship.gov/apprenticeship-job-finder" };

module.exports = {
  id: "manufacturing-technician",
  category: "Workforce Development",
  name: "Manufacturing Technician Basics",
  skills: "Spotting machine hazards and using lockout/tagout, Measuring parts against a tolerance, Running quality checks and finding root causes, Using 5S, lean and daily machine care, Planning for the MSSC CPT 4.0",
  outcome: "spot the hazards on a machine and choose the right protection, measure a part and decide if it is within tolerance, record defects and find a root cause, use 5S and daily machine checks on a work area, and make a dated plan to prepare for the MSSC Certified Production Technician (CPT 4.0) assessments and a first production job.",
  about: [
    "Factories make cars, food, medicine, furniture, metal parts and electronics, and they hire production workers, machine operators and technicians. This course is for job seekers, young adults, veterans, people coming home from prison and anyone who wants to start a career on the factory floor.",
    "You will learn the four areas that entry-level manufacturing work and the Manufacturing Skill Standards Council (MSSC) Certified Production Technician (CPT 4.0) are built on: safety, quality and measurement, production, and maintenance awareness. You will practice on paper and with a ruler at home.",
    "Important: this course prepares you; it does not give you the CPT 4.0 or any other certificate. MSSC gives the assessments and issues the credentials. Running machines, lockout/tagout and using precision tools are learned in person with a qualified instructor or employer trainer, with the right protective equipment. Do not practice on real machines on your own.",
    "Each lesson takes about five minutes and ends with a \"Try it now\" task. There is a quick check after each lesson, a knowledge check after each chapter and a 20-question quiz at the end."
  ],
  finalTask: "Make a manufacturing technician readiness packet: a hazard-and-protection list for one machine, a measurement log with in-or-out-of-tolerance decisions for five practice parts, a 5 Whys for one practice defect, a 5S and daily-check plan for one work area, and a dated plan to prepare for the four CPT 4.0 assessments with an honest résumé line.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Adults and young adults looking for production, machine operator, assembler or technician jobs: job seekers, veterans, people coming home from prison, immigrants and youth finishing school. Some have worked in warehouses or on assembly lines; most have not studied manufacturing.",
    startingPoint: "Can follow written steps and do basic math with whole numbers. Most have not used a caliper, read a tolerance, used lockout/tagout or heard of 5S, lean or root-cause analysis. Many do not know an industry credential exists for entry-level production work.",
    gap: "Employers want new hires who work safely around machines, measure accurately, catch bad parts and keep their area in order. Machine injuries can be severe, such as amputations, so safety habits must come first. Learners need that knowledge, and a clear path to a recognized credential such as MSSC CPT 4.0, to compete for production jobs and apprenticeships.",
    constraints: [
      "Reading level: plain words and short sentences; MSSC recommends about a ninth-grade math and tenth-grade reading level for CPT 4.0, so math is shown step by step",
      "No machine operation in this course: hands-on practice happens only with a qualified instructor or employer trainer",
      "Workers under 18 are barred from many factory machines under federal child labor rules",
      "Devices: a phone or library computer for official pages; a ruler or tape measure and paper at home",
      "Requirements, fees and testing dates for CPT 4.0 change: learners check msscusa.org or a testing site"
    ],
    prerequisites: "Basic whole-number math. \"Everyday Math\" and \"Workplace Safety Basics (OSHA)\" are helpful companion courses."
  },
  // ---- ADDIE: Design ----
  objectives: [
    { id: "O1", condition: "Given a description or picture of a machine and a task", action: "identify the hazards and choose the right protection, including lockout/tagout", standard: "naming at least 3 hazards and the correct protection for each" },
    { id: "O2", condition: "Given a ruler or caliper reading and a part tolerance", action: "measure a part and decide if it is within tolerance", standard: "getting at least 4 of 5 practice decisions right" },
    { id: "O3", condition: "Given a quality problem on a production line", action: "record the defects and find a likely root cause with the 5 Whys", standard: "separating the bad parts and reaching a cause that can be fixed" },
    { id: "O4", condition: "Given a work area and a machine", action: "apply 5S and a daily operator check to the area", standard: "listing an action for each of the 5 S's and at least 5 daily check items" },
    { id: "O5", condition: "Using the MSSC CPT 4.0 page and local training options", action: "write a dated plan to prepare for the CPT 4.0 and a first production job", standard: "that names the four required modules, a test date to confirm, and an honest résumé line" }
  ],
  chapters: [
    {
      name: "Chapter 1: The job, safety and measuring",
      lessons: [
        {
          title: "The manufacturing technician job and the CPT 4.0",
          objectives: ["O5"],
          minutes: 5,
          goal: "Explain what a production technician does and which credential shows employers you are ready.",
          text: [
            "A production technician helps make products safely and correctly. On a normal shift you may set up or run a machine, assemble parts, check parts with measuring tools, record numbers on a sheet or screen, keep your area clean, and report problems with machines or parts.",
            "Many employers look for the Certified Production Technician (CPT 4.0) from the Manufacturing Skill Standards Council (MSSC). It has five assessments: Safety; Quality Practices & Measurement; Manufacturing Process & Production; Maintenance Awareness; and Green Production. You earn a certificate for each one you pass. The first four together earn the full CPT 4.0. Green Production is optional.",
            "MSSC says the tests are multiple choice and can be given online or on paper. Training is offered through community colleges, workforce programs and some high schools. MSSC also has a hands-on option called CPT+ with Skill Boss. Check msscusa.org for current fees, testing sites and requirements; this course does not grant the credential.",
            "Other paths into the work: registered apprenticeships, where you earn while you learn (search apprenticeship.gov), and jobs where the employer trains you. Veterans who did maintenance or supply work in the military often have skills that carry over."
          ],
          words: [["Production technician", "a worker who runs, sets up, checks and cares for equipment that makes products."], ["MSSC", "the Manufacturing Skill Standards Council, the group that gives the CPT assessments and credentials."], ["Assessment", "a test that shows whether you know the material."], ["Module", "one topic area of the CPT, with its own assessment and certificate."], ["Registered apprenticeship", "a paid job with training and a mentor, recognized by the U.S. Department of Labor or a state."]],
          slides: [
            { title: "What the job looks like", bullets: ["Set up or run machines, assemble parts", "Measure and check parts, record numbers", "Keep the area clean, report problems"] },
            { title: "MSSC CPT 4.0", bullets: ["Safety", "Quality Practices & Measurement", "Manufacturing Process & Production", "Maintenance Awareness"] },
            { title: "How it works", bullets: ["A certificate for each module you pass", "First four modules = full CPT 4.0", "Green Production is optional"] },
            { title: "Other ways in", bullets: ["Registered apprenticeships: apprenticeship.gov", "Employers that train new hires", "This course prepares you; MSSC certifies"] }
          ],
          sources: [MSSC_CPT, MSSC_COURSES, APPRENTICE],
          tryIt: "On paper, write the four CPT 4.0 modules you need for the full certification. Next to each, write one thing you already know about it and one question you have. Then open msscusa.org and write where you would look for a testing site.",
          youCanNow: "explain what a production technician does and name the four CPT 4.0 modules you need for the full credential.",
          quickCheck: [
            { objective: "O5", q: "How many CPT 4.0 modules must you pass for the full certification?", options: ["Two", "All five, including Green Production", "The first four", "Only Safety"], answer: 2, why: "MSSC says candidates must earn the first four certificates for the full CPT 4.0; Green Production is optional." },
            { objective: "O5", q: "Who issues the CPT 4.0 credential?", options: ["The Manufacturing Skill Standards Council (MSSC)", "This online course", "OSHA", "Your local library"], answer: 0, why: "MSSC gives the assessments and issues the credentials; this course only prepares you." }
          ]
        },
        {
          title: "Machine safety: guards, PPE and lockout/tagout",
          objectives: ["O1"],
          minutes: 6,
          goal: "Identify the hazards on a machine and choose the right protection.",
          text: [
            "OSHA says any machine part, function or process that may cause injury must be safeguarded. Its machine rule names hazards such as the point of operation (where the machine cuts, presses or shapes), ingoing nip points (where two parts roll together and can pull you in), rotating parts, and flying chips and sparks. Injuries can include crushing, amputation, burns and blindness.",
            "Your protection, from strongest to weakest: guards that keep your body out of the danger zone (never remove or bypass one), safe procedures, and personal protective equipment (PPE) such as safety glasses, hearing protection, gloves where allowed and steel-toe shoes. Keep loose clothing, long hair and jewelry away from moving parts; gloves can be caught in rotating parts, so follow the rule for each machine.",
            "Lockout/tagout (LOTO) is OSHA's rule 29 CFR 1910.147. When a machine is serviced or a jam is cleared, its energy (electrical, mechanical, hydraulic, pneumatic, chemical or thermal) must be shut off and locked so it cannot start. Only trained, authorized employees apply locks. Everyone else is told never to remove a lock or restart locked equipment.",
            "Federal child labor rules bar workers under 18 from many power-driven machines, such as metal forming, punching and shearing machines, power saws and forklifts. Check the Department of Labor page if you are under 18."
          ],
          steps: ["Prepare: know every energy source of the machine.", "Tell the affected workers the machine is being shut down.", "Shut the machine down the normal way.", "Isolate the energy: switch off, close valves, disconnect.", "Put on your own lock and tag.", "Release or block stored energy (springs, air, pressure, heat).", "Verify: try to start it, then return the controls to off."],
          words: [["Point of operation", "the place where the machine cuts, bends, presses or shapes the material."], ["Nip point", "where two moving parts come together and can pull in fingers, hair or clothing."], ["Guard", "a barrier that keeps your body away from moving parts."], ["PPE", "personal protective equipment, like safety glasses, ear plugs and safety shoes."], ["Lockout/tagout (LOTO)", "shutting off a machine's energy and putting on a lock and tag so it cannot start while someone works on it."], ["Stored energy", "energy left in a machine after it is switched off, such as a spring, air pressure or heat."]],
          slides: [
            { title: "Where machines hurt people", bullets: ["Point of operation", "Nip points and rotating parts", "Flying chips and sparks"] },
            { title: "Your protection", bullets: ["Guards: never remove or bypass them", "Safe procedures", "PPE: glasses, hearing, shoes"] },
            { title: "Lockout/tagout", bullets: ["For servicing and clearing jams", "Shut off, isolate, lock, tag", "Release stored energy, then verify"] },
            { title: "Know the limits", bullets: ["Only authorized people apply locks", "Never remove someone else's lock", "Under 18: many machines are off-limits"] }
          ],
          sources: [OSHA_GUARD, OSHA_212, OSHA_LOTO, OSHA_147, DOL_YOUTH],
          tryIt: "Pick a machine you know or can watch in a video: a drill press, a paper shredder or a conveyor. List at least three hazards (point of operation, nip points, rotating parts, flying chips) and the protection for each. Then read this practice case: a part is jammed in a press. Write what must happen before anyone reaches in.",
          youCanNow: "identify the hazards on a machine and choose guards, PPE or lockout/tagout to protect yourself and others.",
          quickCheck: [
            { objective: "O1", q: "A guard slows you down, and a coworker says to take it off. What do you do?", options: ["Take it off when the supervisor is away", "Bend it out of the way", "Remove it for one shift only", "Keep it on and report the problem to the supervisor"], answer: 3, why: "Guards keep your body out of the danger zone and must never be removed or bypassed." },
            { objective: "O1", q: "A machine must be serviced. What step comes right after you put on your lock and tag?", options: ["Start the machine", "Release or block stored energy, then verify it will not start", "Remove the guard and begin", "Take the lock off to test it"], answer: 1, why: "After locking, you release stored energy and verify the machine cannot start." }
          ]
        },
        {
          title: "Measuring parts and reading a tolerance",
          objectives: ["O2"],
          minutes: 6,
          goal: "Measure a part and decide whether it is within tolerance.",
          text: [
            "Every part has a target size on its drawing, called the nominal size, and a tolerance: how far it may be from the target and still be good. For example, 1.250 ± 0.005 inch means any size from 1.245 to 1.255 inches is good. Anything smaller or bigger is out of tolerance.",
            "Common tools: a tape measure or steel rule for rough sizes; a caliper for outside, inside and depth sizes, often to a thousandth of an inch (0.001) or a hundredth of a millimeter (0.01); and a micrometer for even finer outside sizes. Many shops use digital calipers.",
            "Good habits: clean the part and the tool, zero the caliper with the jaws closed, hold the jaws square to the part without squeezing, read the number straight on, and write it down right away. Measure more than once if you are unsure. Learn to use precision tools with an instructor, who will also teach reading dial and vernier scales."
          ],
          steps: ["Read the drawing: nominal size and tolerance.", "Work out the limits: nominal minus and plus the tolerance.", "Clean the part and the tool; zero the caliper.", "Measure square, without squeezing; read the number.", "Write it down. Inside the limits = good; outside = out of tolerance."],
          words: [["Nominal size", "the target size shown on the drawing."], ["Tolerance", "how much a size may vary from the target and still be good."], ["Caliper", "a tool with sliding jaws that measures outside, inside and depth sizes."], ["Micrometer", "a screw-type tool that measures outside sizes very precisely."], ["Zero", "setting the tool to read 0 with the jaws closed, so readings start from the right point."]],
          slides: [
            { title: "Target and tolerance", bullets: ["Nominal: the target size", "Tolerance: how far it may vary", "1.250 ± 0.005 = 1.245 to 1.255"] },
            { title: "The tools", bullets: ["Tape or steel rule: rough sizes", "Caliper: outside, inside, depth", "Micrometer: very fine outside sizes"] },
            { title: "Measure like a pro", bullets: ["Clean part and tool; zero first", "Square jaws, no squeezing", "Read straight on; write it down"] },
            { title: "Decide", bullets: ["Inside the limits: good part", "Outside: out of tolerance, report it"] }
          ],
          sources: [MSSC_COURSES],
          tryIt: "Practice only, made-up numbers. A part is 2.000 ± 0.010 inch. Work out the limits, then decide good or out of tolerance for: 1.995, 2.012, 1.989, 2.010, 2.004. Next, measure three items at home with a ruler (a book, a phone, a spoon) twice each and write both readings.",
          youCanNow: "work out the limits of a tolerance, measure a part carefully and decide if it is good or out of tolerance.",
          quickCheck: [
            { objective: "O2", q: "A part is 0.500 ± 0.002 inch. Which range is good?", options: ["0.400 to 0.600", "0.498 to 0.502", "0.500 to 0.502 only", "0.490 to 0.510"], answer: 1, why: "Subtract and add 0.002 to 0.500: the good range is 0.498 to 0.502." },
            { objective: "O2", q: "What do you do with a digital caliper before measuring?", options: ["Squeeze the jaws hard", "Measure the part while it is dirty", "Close the jaws and zero it", "Read it at an angle"], answer: 2, why: "Zeroing with the jaws closed makes every reading start from the right point." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: The job, safety and measuring",
        questions: [
          { objective: "O5", q: "Which module is optional for the full CPT 4.0?", options: ["Safety", "Green Production", "Maintenance Awareness", "Quality Practices & Measurement"], answer: 1, why: "MSSC says Green Production is not part of the full CPT 4.0 certification." },
          { objective: "O1", q: "Where two rollers turn toward each other and can pull in your sleeve is called:", options: ["The data plate", "The tolerance", "The counterweight", "An ingoing nip point"], answer: 3, why: "An ingoing nip point is where two moving parts come together and can pull you in." },
          { objective: "O1", q: "A part is jammed in a machine. What must happen before anyone reaches in?", options: ["Lockout/tagout by an authorized person", "Turn the machine to slow speed", "Put on gloves and reach in quickly", "Ask a coworker to watch the switch"], answer: 0, why: "Clearing a jam is servicing work, so the machine's energy must be locked out first." },
          { objective: "O2", q: "A part is 25.00 ± 0.10 mm. You measure 25.14 mm. What is true?", options: ["It is good", "It is good if it looks fine", "It is out of tolerance", "Tolerance does not apply to metric parts"], answer: 2, why: "The upper limit is 25.10 mm, and 25.14 mm is above it." },
          { objective: "O2", q: "Which tool is best for measuring the inside width of a slot?", options: ["A hammer", "A level", "A paint brush", "A caliper"], answer: 3, why: "A caliper has inside jaws made for measuring inside sizes." }
        ]
      }
    },
    {
      name: "Chapter 2: Quality, production and getting hired",
      lessons: [
        {
          title: "Quality checks and finding the root cause",
          objectives: ["O3"],
          minutes: 6,
          goal: "Record defects and find a likely root cause with the 5 Whys.",
          text: [
            "Quality means every part meets its specification, the written requirements for size, look and function. A part that does not is a defect, or nonconforming part. Your job is to catch defects early, keep them away from good parts and report them.",
            "Use a check sheet: a simple table where you make a tally mark each time you see a type of defect, such as scratch, wrong size or missing hole. After a shift the tallies show which problem happens most. Put bad parts in a marked reject bin or tag them so nobody ships them by mistake.",
            "To fix a problem for good, find its root cause, not just the symptom. The 5 Whys is simple: state the problem, ask \"Why?\", then ask \"Why?\" about that answer, about five times, until you reach a cause you can fix. Many plants then use Plan-Do-Check-Act: plan a fix, try it, check the results, and make it the standard if it works."
          ],
          steps: ["Check parts against the specification.", "Tally each defect type on a check sheet.", "Tag bad parts or put them in the reject bin; report them.", "Ask \"Why?\" about five times to reach a root cause.", "Suggest a fix; check that the defects drop."],
          words: [["Specification", "the written requirements a part must meet."], ["Defect", "a part or product that does not meet the specification; also called nonconforming."], ["Check sheet", "a table for tallying how often each type of defect happens."], ["Root cause", "the real reason a problem happens; fixing it stops the problem coming back."], ["5 Whys", "asking \"Why?\" again and again to move from a symptom to its root cause."], ["Plan-Do-Check-Act", "a four-step cycle for testing a fix and making it standard."]],
          slides: [
            { title: "Quality on the line", bullets: ["Every part meets the specification", "Catch defects early", "Keep bad parts away from good ones"] },
            { title: "Check sheets", bullets: ["Tally each defect type", "See which problem happens most", "Tag or bin rejects; report them"] },
            { title: "The 5 Whys", bullets: ["State the problem", "Ask \"Why?\" about five times", "Stop at a cause you can fix"] },
            { title: "Plan-Do-Check-Act", bullets: ["Plan a fix, try it", "Check the results", "Make it the standard if it works"] }
          ],
          sources: [MSSC_COURSES],
          tryIt: "Practice case: holes drilled in brackets are in the wrong place on about one part in ten. Make a check sheet with three defect types and fill it with made-up tallies. Then write a 5 Whys chain (for example: the fixture moves, because a clamp is loose, because ...) and end with a fix you could suggest to your supervisor.",
          youCanNow: "record defects on a check sheet, separate bad parts, and use the 5 Whys to find a root cause.",
          quickCheck: [
            { objective: "O3", q: "You find five scratched parts in a bin of good parts. What do you do first?", options: ["Separate and tag them, then report it", "Ship them; scratches are small", "Throw them away and say nothing", "Polish them yourself"], answer: 0, why: "Bad parts are kept away from good ones and reported so the cause can be found." },
            { objective: "O3", q: "What is the goal of the 5 Whys?", options: ["To blame a coworker", "To count the parts", "To slow down the line", "To find a root cause you can fix"], answer: 3, why: "The 5 Whys moves from a symptom to the root cause, so the fix lasts." }
          ]
        },
        {
          title: "Lean production, 5S and daily machine care",
          objectives: ["O4"],
          minutes: 6,
          goal: "Apply 5S and a daily operator check to a work area.",
          text: [
            "Lean production means making what the customer needs with less waste. Waste includes waiting, making too much, extra moving, extra handling, too much stock, defects and steps that add no value. Spotting waste and suggesting small improvements is part of a technician's job.",
            "5S keeps a work area safe and efficient. Sort: remove what you do not need. Set in order: a marked place for every tool. Shine: clean the area and the machine, which also shows leaks and damage. Standardize: write down how the area should look. Sustain: keep doing it every shift.",
            "Maintenance awareness starts with daily operator care. Before and during your shift, look for leaks, loose bolts, worn belts, low oil or coolant, strange noises, heat, vibration and damaged guards or cords. Follow the machine's checklist. Report what you find; only trained, authorized people repair machines, and repairs need lockout/tagout.",
            "Preventive maintenance is planned care, such as oiling and changing filters on a schedule, so machines break down less. Your notes on the checklist help the maintenance team catch problems early."
          ],
          steps: ["Sort: remove what you do not need.", "Set in order: a marked place for every tool.", "Shine: clean, and look for leaks and damage as you clean.", "Standardize: write or post how the area should look.", "Sustain: do it every shift.", "Daily check: leaks, noise, heat, vibration, belts, fluids, guards; report problems."],
          words: [["Lean", "a way of working that removes waste so value flows to the customer."], ["Waste", "anything that adds time or cost but no value, like waiting or extra moving."], ["5S", "Sort, Set in order, Shine, Standardize, Sustain: a method for an orderly work area."], ["Preventive maintenance", "planned care on a schedule so machines break down less."], ["Vibration", "shaking that can be a sign of a loose or worn part."]],
          slides: [
            { title: "Lean: cut the waste", bullets: ["Waiting, extra moving, extra handling", "Making too much, too much stock", "Defects and steps with no value"] },
            { title: "5S", bullets: ["Sort and Set in order", "Shine: clean and inspect", "Standardize and Sustain"] },
            { title: "Daily machine check", bullets: ["Leaks, loose bolts, worn belts", "Noise, heat, vibration", "Fluids, guards and cords"] },
            { title: "Report, don't repair", bullets: ["Write it on the checklist", "Only authorized people repair", "Repairs need lockout/tagout"] }
          ],
          sources: [MSSC_COURSES, OSHA_147],
          tryIt: "Pick one work area you can see now: a kitchen counter, a garage shelf or a desk. Write one action for each of the 5 S's. Then write a daily check list of at least five items for a machine you know (a car, a bike, a lawn mower or a washing machine) and what you would report.",
          youCanNow: "spot waste, use 5S on a work area and do a daily operator check, reporting problems instead of fixing them yourself.",
          quickCheck: [
            { objective: "O4", q: "Which 5S step means \"a marked place for every tool\"?", options: ["Sort", "Shine", "Set in order", "Sustain"], answer: 2, why: "Set in order gives every tool a marked place so it is easy to find and return." },
            { objective: "O4", q: "During your daily check you hear a new grinding noise. What do you do?", options: ["Turn the music up", "Write it on the checklist and report it", "Take the machine apart", "Ignore it until it breaks"], answer: 1, why: "Operators report unusual noise; trained, authorized people repair it." }
          ]
        },
        {
          title: "Your plan: CPT 4.0 prep and your first production job",
          objectives: ["O5"],
          minutes: 5,
          goal: "Write a dated plan to prepare for the CPT 4.0 and apply for production jobs.",
          text: [
            "Start with the official page. On msscusa.org, check the current modules, how testing is given, the fees and where to test. Many community colleges and workforce centers (often called American Job Centers) run CPT training and may help pay for it. Ask whether the program includes hands-on practice with real tools and machines.",
            "Plan one module at a time. Safety is a good first module. For each, set study weeks, a practice method (notes, flash cards, the practice in this course) and a target test date that you confirm with the testing site.",
            "Apply while you study. Look for production associate, machine operator, assembler and manufacturing technician jobs, and search apprenticeship.gov for registered apprenticeships. Some employers hire people with a record; workforce and re-entry programs can point you to them.",
            "On your résumé, be honest. Write \"Completed Manufacturing Technician Basics (Koach Learn), 2026\" and list the CPT modules only after you pass them. In interviews, talk about safety first, measuring carefully, catching bad parts and keeping your area in order."
          ],
          steps: ["Read the CPT 4.0 page on msscusa.org; note the four required modules.", "Find one local training program or testing site and what it offers.", "Set study weeks and a target date for each module; confirm dates with the site.", "List three job titles and three employers or apprenticeships to apply to.", "Write an honest résumé line and a 30-second answer: \"Why manufacturing?\""],
          words: [["American Job Center", "a public workforce office that helps people find jobs and training."], ["Production associate", "a common entry-level job title on a factory floor."], ["Testing site", "a school or center approved to give the assessment."]],
          slides: [
            { title: "Start with MSSC", bullets: ["Check modules, testing, fees on msscusa.org", "Find a local program or testing site", "Ask about hands-on practice"] },
            { title: "One module at a time", bullets: ["Safety is a good first module", "Study weeks and practice method", "A target date you confirm"] },
            { title: "Apply while you study", bullets: ["Production associate, operator, assembler", "Registered apprenticeships", "Workforce and re-entry programs"] },
            { title: "Be honest", bullets: ["List the course you finished", "List CPT modules only after you pass", "Talk about safety and quality first"] }
          ],
          sources: [MSSC_CPT, APPRENTICE],
          tryIt: "Write your plan on one page: the four modules with a study start week and target test date for each, one program or testing site to contact, three jobs or apprenticeships to apply to, and your honest résumé line. Read your 30-second \"Why manufacturing?\" answer out loud.",
          youCanNow: "write a dated plan to prepare for the CPT 4.0 and a first production job, and describe your training honestly.",
          quickCheck: [
            { objective: "O5", q: "You passed only the Safety module. Which résumé line is honest?", options: ["\"Full CPT 4.0 certified\"", "\"Master technician\"", "\"OSHA certified machinist\"", "\"MSSC Safety certificate (CPT 4.0 module), 2026\""], answer: 3, why: "It names exactly what you earned and does not claim the full CPT 4.0." },
            { objective: "O5", q: "Where do you confirm current CPT fees and testing sites?", options: ["The official MSSC site or an approved testing site", "A social media ad", "A friend's guess", "Any job board"], answer: 0, why: "Fees and testing change, so check MSSC or the testing site directly." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Quality, production and getting hired",
        questions: [
          { objective: "O3", q: "What does a check sheet show you after a shift?", options: ["Which defect type happens most", "The machine's price", "The weather", "Who arrived late"], answer: 0, why: "Tallies on a check sheet show how often each defect type happens." },
          { objective: "O3", q: "Parts are too long. Why? The stop moved. Why? Its bolt is loose. Why? Nobody checks it. What is a good fix?", options: ["Make parts faster", "Blame the last shift", "Add the stop bolt to the daily check", "Throw away all parts"], answer: 2, why: "The fix targets the root cause the 5 Whys reached: the bolt is never checked." },
          { objective: "O4", q: "Workers wait 20 minutes each shift for parts to arrive. In lean terms this is:", options: ["Value", "Waste", "5S", "Tolerance"], answer: 1, why: "Waiting adds time but no value, so it is one of the lean wastes." },
          { objective: "O4", q: "Which 5S step also helps you spot leaks and damage?", options: ["Sort", "Sustain", "Standardize", "Shine"], answer: 3, why: "Cleaning the machine during Shine shows leaks, cracks and wear." },
          { objective: "O5", q: "Which is a good first step for a CPT 4.0 plan?", options: ["Read the CPT 4.0 page on msscusa.org and find a testing site", "Buy a certificate online", "Take all five tests the same day without study", "Wait until someone tells you"], answer: 0, why: "Starting from the official page gives you the current modules, testing and sites." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Manufacturing Technician Basics",
    questions: [
      { objective: "O5", q: "Which group gives the Certified Production Technician (CPT 4.0)?", options: ["OSHA", "Your employer only", "The Manufacturing Skill Standards Council (MSSC)", "This course"], answer: 2, why: "MSSC gives the CPT assessments and issues the credentials." },
      { objective: "O5", q: "Which modules make up the full CPT 4.0?", options: ["Safety; Quality Practices & Measurement; Manufacturing Process & Production; Maintenance Awareness", "Welding, plumbing, driving and cooking", "Green Production only", "Forklift, crane, ladder and roof"], answer: 0, why: "MSSC says the first four modules earn the full CPT 4.0." },
      { objective: "O1", q: "Which is a hazard OSHA's machine rule names?", options: ["A clean floor", "A posted 5S chart", "A sharp pencil", "Rotating parts"], answer: 3, why: "OSHA's general machine rule lists rotating parts with point of operation, nip points and flying chips." },
      { objective: "O1", q: "What is the strongest protection from a machine's moving parts?", options: ["Working faster", "A guard that keeps your body out of the danger zone", "Loose gloves", "A warning shout"], answer: 1, why: "Guards keep you away from the hazard and must never be removed or bypassed." },
      { objective: "O1", q: "You see another worker's lock on a machine you need. What do you do?", options: ["Cut the lock", "Ask your supervisor; never remove someone else's lock", "Start the machine anyway", "Remove the tag only"], answer: 1, why: "Only the worker who applied a lock, under the procedure, removes it." },
      { objective: "O1", q: "You are 17. Which job is off-limits under federal child labor rules?", options: ["Sweeping the break room", "Filing papers", "Stocking light boxes by hand", "Operating a metal punching machine"], answer: 3, why: "Workers under 18 may not operate power-driven metal forming, punching or shearing machines." },
      { objective: "O2", q: "A part is 3.000 ± 0.005 inch. You measure 2.996. Is it good?", options: ["Yes, it is within 2.995 to 3.005", "No, it must be exactly 3.000", "No, it is too big", "Only if it looks shiny"], answer: 0, why: "2.996 is inside the limits of 2.995 to 3.005." },
      { objective: "O2", q: "What is tolerance?", options: ["A part's weight", "The machine's speed", "How much a size may vary from the target and still be good", "The price of a part"], answer: 2, why: "Tolerance sets the allowed range around the nominal size." },
      { objective: "O2", q: "Which habit gives a true caliper reading?", options: ["Squeezing the jaws as hard as you can", "Cleaning the part, zeroing the tool and holding the jaws square", "Measuring through a glove", "Guessing the last digit"], answer: 1, why: "Clean surfaces, a zeroed tool and square jaws give accurate readings." },
      { objective: "O2", q: "A part is 10.00 ± 0.05 mm. Which reading is out of tolerance?", options: ["9.97 mm", "10.04 mm", "10.00 mm", "10.08 mm"], answer: 3, why: "The upper limit is 10.05 mm, so 10.08 mm is too big." },
      { objective: "O3", q: "A part that does not meet its specification is called:", options: ["Nonconforming (a defect)", "Nominal", "Lean", "Zeroed"], answer: 0, why: "A part that fails the specification is a defect, or nonconforming part." },
      { objective: "O3", q: "Why do you tag or bin bad parts right away?", options: ["To make the bin heavy", "So the parts can be painted", "So nobody mixes them with good parts or ships them", "To hide them from the supervisor"], answer: 2, why: "Separating rejects keeps bad parts from reaching the customer." },
      { objective: "O3", q: "In Plan-Do-Check-Act, what happens in \"Check\"?", options: ["You plan the fix", "You stop the line for good", "You order new machines", "You see whether the fix worked"], answer: 3, why: "Check means looking at the results to see if the fix worked." },
      { objective: "O4", q: "Which is a lean waste?", options: ["Moving parts back and forth with no need", "A good part sent to the customer", "A clean work area", "A finished safety check"], answer: 0, why: "Extra moving and handling add time and cost but no value." },
      { objective: "O4", q: "What does \"Sustain\" mean in 5S?", options: ["Throw out unused items", "Keep doing 5S every shift", "Paint the floor", "Buy new tools"], answer: 1, why: "Sustain means making 5S a habit so the area stays in order." },
      { objective: "O4", q: "During a daily check you find an oil leak under a machine. What is the right action?", options: ["Wipe it and say nothing", "Fix the hose yourself while it runs", "Report it and follow the checklist; let authorized people repair it", "Put a box over it"], answer: 2, why: "Operators report problems; authorized people repair them under lockout/tagout." },
      { objective: "O4", q: "What is preventive maintenance?", options: ["Fixing a machine only after it breaks", "Planned care on a schedule so machines break down less", "Cleaning the break room", "Buying spare uniforms"], answer: 1, why: "Preventive maintenance is scheduled care that prevents breakdowns." },
      { objective: "O5", q: "You want a paid job that includes training and a mentor. Where can you search?", options: ["A lottery site", "A coupon app", "Apprenticeship.gov's Apprenticeship Finder", "A gaming forum"], answer: 2, why: "The Department of Labor's Apprenticeship Finder lists registered apprenticeship openings." },
      { objective: "O1", q: "In lockout/tagout, why do you try to start the machine after locking it?", options: ["To warm it up", "To test the lock's color", "To finish the job faster", "To verify the energy is truly off before you work"], answer: 3, why: "Verifying shows the energy is isolated; then you return the controls to off." },
      { objective: "O3", q: "Paint is peeling on many parts. Why? The surface is oily. Why? The wash step was skipped. Which answer is closer to a root cause?", options: ["The parts are bad", "The wash step was skipped", "Paint is peeling", "The customer is picky"], answer: 1, why: "The skipped wash step is a cause you can fix; peeling paint is only the symptom." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Pre-Test: What Do You Already Know?", from: [0, 2, 4, 6, 7, 10, 12, 13, 15] },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and check again.",
    criteria: [
      { name: "Hazard-and-protection list", objective: "O1", notYet: "Fewer than three hazards, or a hazard with no protection or the wrong one.", meets: "At least three hazards on one machine, each with the right guard, PPE or procedure, and when lockout/tagout is needed.", exceeds: "Lists the lockout/tagout steps in order and names the machine's energy sources." },
      { name: "Measurement log", objective: "O2", notYet: "Limits worked out wrong, or two or more wrong decisions.", meets: "Limits are correct and at least 4 of 5 practice parts are judged right.", exceeds: "All 5 are right, with the measuring habits used written beside the log." },
      { name: "Defect record and 5 Whys", objective: "O3", notYet: "No separation of bad parts, or the chain stops at the symptom.", meets: "A check sheet, a step to tag bad parts and a 5 Whys that ends at a fixable cause.", exceeds: "Adds a Plan-Do-Check-Act note on how to check that the fix worked." },
      { name: "5S and daily-check plan", objective: "O4", notYet: "Missing one of the 5 S's, or fewer than five check items.", meets: "One action for each S and at least five daily check items with what to report.", exceeds: "Names at least two lean wastes in the area and a small improvement for each." },
      { name: "CPT 4.0 and job plan", objective: "O5", notYet: "Wrong modules, no dates, or a résumé line that claims a credential not earned.", meets: "Names the four required modules with target dates to confirm, one program or testing site, three job leads and an honest résumé line.", exceeds: "Includes a practiced 30-second answer and a backup path such as an apprenticeship." }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and a readiness packet that meets the rubric",
      "Learners who enroll in CPT 4.0 training or sit a first CPT module within 90 days (follow-up survey)",
      "Learners who pass one or more CPT 4.0 modules (self-report with the MSSC credential)",
      "Learners hired into production jobs or registered apprenticeships (partner and follow-up reports)"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A phone or computer with internet for msscusa.org, osha.gov and apprenticeship.gov",
      "A ruler or tape measure, paper and pen",
      "Optional: a digital caliper and a few small parts (bolts, washers) to measure with an instructor",
      "About 60 minutes in total"
    ],
    facilitatorNotes: [
      "Say early and often: this course prepares learners; MSSC issues CPT credentials and machine skills are taught in person.",
      "Do not have learners run machines or practice lockout/tagout on live equipment as part of this course. Use pictures, videos and unplugged demonstration pieces.",
      "Check MSSC's current fees, testing options and local testing sites before the session, and share any funding your workforce program offers.",
      "Walk through the tolerance math slowly on the board; many learners need two or three worked examples.",
      "Watch for learners under 18: they can take the course, but many factory machines are off-limits to them on the job.",
      "Score the readiness packet with the rubric and review one Not yet row at a time."
    ]
  }
};
