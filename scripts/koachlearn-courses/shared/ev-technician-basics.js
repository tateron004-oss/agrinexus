"use strict";

// Koach Learn course: Workforce Development (wave 1, 30 October 2026) -> "Electric Vehicle (EV) Technician Basics".
// Certification-prep course: prepares learners for entry-level EV service work and the ASE path (A6, A8, then L3).
// It does not grant any certification. No high-voltage work: that is learned only in supervised, approved training.

module.exports = {
  id: "ev-technician-basics",
  category: "Workforce Development",
  name: "Electric Vehicle (EV) Technician Basics",
  skills: "Naming the parts of an EV, Following high-voltage safety rules, Doing charging math, Planning low-voltage EV service, Planning an ASE certification path",
  outcome: "explain how an electric vehicle works, follow the high-voltage safety rules a new shop worker must keep, work out practice charging times, plan the everyday service an EV needs, and write your own plan with dates toward ASE certification and EV technician work.",
  about: [
    "More electric and hybrid vehicles are on the road every year, and shops need technicians who understand them. This course is for job seekers, veterans, young adults, people who already fix cars and anyone curious about EV work.",
    "You will learn the main parts of an EV, the high-voltage dangers and the rules that keep you safe, how charging works, which service tasks EVs still need, and the real certification path: ASE tests A6 and A8, then the L3 hybrid and electric vehicle test. This course prepares you. It does not certify you, and it never asks you to touch high-voltage parts. That work is learned only in supervised, approved training with the right protective gear.",
    "Each lesson takes about five minutes. Read it, look at the slides, then do the \"Try it now\" task with paper, a pen and a phone calculator. A short check follows each lesson and each chapter, and a 20-question quiz closes the course. The last lesson builds your own EV Tech Start Plan."
  ],
  finalTask: "Make your one-page EV Tech Start Plan: (1) explain in 3 to 4 sentences how an EV works, naming its main parts; (2) write the high-voltage safety rules you will follow as a new shop worker; (3) solve two practice charging-time problems and show your work; (4) write a low-voltage service checklist for an EV; (5) write your certification path with real dates (training program, ASE A6 and A8, then L3, and any employer or manufacturer training), with the official page for each; and (6) write a 3-bullet \"EV skills\" section for your résumé.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Adults and young adults looking for a skilled job in auto service: job seekers, veterans (many with vehicle or electrical experience), young adults, immigrants and current lube or tire techs who want to move up. Some have fixed gas cars; many have never worked on an EV.",
    startingPoint: "Can do basic arithmetic with a calculator and read short instructions. Some know gas engines and basic car care; most do not know the parts of an EV, the high-voltage dangers or the certifications shops ask for.",
    gap: "Shops need workers who can service EVs safely and know when to stop. A new worker who touches orange high-voltage parts without training can be killed. Learners need the words, the safety rules, the everyday EV service tasks and a clear certification path so they can get hired and move up.",
    constraints: [
      "Reading level: plain words and short sentences (about grade 6 to 8)",
      "No hands-on high-voltage work in this course: never touch orange cables, the battery pack or chargers' inside parts",
      "Free tools only: paper, pen, a phone calculator and official websites",
      "Certification rules and fees change: learners check ase.com and other official pages",
      "Time: 4 to 6 minute lessons that fit around work and appointments"
    ],
    prerequisites: "None. \"Skilled Trades Careers\" and \"Workplace Safety Basics (OSHA)\" are helpful but not required."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Given a list or drawing of EV parts", action: "name the main parts of an electric vehicle and say what each one does", standard: "getting at least 5 of 6 parts right" },
    { id: "O2", condition: "Given a shop scenario with an EV", action: "list the high-voltage hazards and the safety rule for each one", standard: "including \"do not touch orange cables or the battery pack without training\" and lockout/tagout" },
    { id: "O3", condition: "Given practice battery and charger numbers", action: "calculate the energy needed and the charging time", standard: "with no math errors, showing your work" },
    { id: "O4", condition: "Given an EV in for routine service", action: "write a low-voltage service checklist that follows the manufacturer's service information", standard: "with at least 6 correct items and no high-voltage tasks" },
    { id: "O5", condition: "Using ase.com and other official pages", action: "list the certification steps toward EV technician work", standard: "naming the source page for each step" },
    { id: "O6", condition: "Using your notes from this course", action: "write an EV Tech Start Plan with dates and a résumé skills section", standard: "meeting every row of the rubric" }
  ],
  chapters: [
    {
      name: "Chapter 1: How EVs work and how to stay safe",
      lessons: [
        {
          title: "The parts of an electric vehicle",
          objectives: ["O1"],
          minutes: 5,
          goal: "Name the main parts of an EV and say what each one does.",
          text: [
            "An electric vehicle (EV) runs on electricity stored in a large high-voltage battery pack, usually under the floor. On many EVs this battery works at about 400 to 1,000 volts. That is far more than a home outlet, and it can kill.",
            "The battery stores DC power. An inverter changes it into the AC the electric motor uses. The motor turns the wheels. When the driver slows down, the motor works backward as a generator and puts some energy back in the battery. This is regenerative braking.",
            "The onboard charger changes AC from a charging station into DC to fill the battery. A DC-to-DC converter steps the high voltage down to charge the normal 12-volt battery, which still runs the lights, radio and computers. High-voltage cables are usually bright orange.",
            "A hybrid (HEV) has both a gas engine and an electric motor with a smaller battery. A plug-in hybrid (PHEV) has a bigger battery you can charge from a plug, plus a gas engine."
          ],
          words: [["EV (electric vehicle)", "a vehicle that runs only on electricity from a battery."], ["Hybrid (HEV)", "a vehicle with a gas engine and an electric motor that does not plug in."], ["Plug-in hybrid (PHEV)", "a hybrid with a bigger battery you can charge from a plug."], ["High-voltage battery pack", "the big battery that powers the motor; it can be deadly."], ["Inverter", "the part that changes DC from the battery into AC for the motor."], ["Regenerative braking", "slowing the car by using the motor as a generator, which puts energy back in the battery."], ["Onboard charger", "the part in the car that changes AC from a charger into DC for the battery."], ["DC-to-DC converter", "the part that steps high voltage down to charge the 12-volt battery."]],
          slides: [
            { title: "The big battery", bullets: ["High-voltage pack, usually under the floor", "Often about 400 to 1,000 volts: deadly", "Orange cables carry high voltage"] },
            { title: "Making the car move", bullets: ["Inverter: battery DC to motor AC", "Motor turns the wheels", "Regenerative braking puts energy back"] },
            { title: "Charging and the 12-volt battery", bullets: ["Onboard charger: AC from the station to DC for the pack", "DC-to-DC converter charges the 12-volt battery"] },
            { title: "EV, HEV, PHEV", bullets: ["EV: battery only", "HEV: gas engine plus motor, no plug", "PHEV: bigger battery you can plug in, plus gas engine"] }
          ],
          sources: [{ name: "U.S. Department of Energy, Alternative Fuels Data Center: Maintenance and safety of electric vehicles", url: "https://afdc.energy.gov/vehicles/electric-maintenance" }],
          tryIt: "On paper, draw a simple car from the side. Draw and label six parts: high-voltage battery pack, inverter, electric motor, onboard charger, DC-to-DC converter and 12-volt battery. Draw the orange cables in a different color. Next to each part, write one line about what it does.",
          youCanNow: "name the main parts of an EV and say what each one does.",
          quickCheck: [
            { objective: "O1", q: "What color are high-voltage cables on EVs usually?", options: ["Black", "Green", "Orange", "White"], answer: 2, why: "High-voltage cables are typically bright orange so workers can spot the danger." },
            { objective: "O1", q: "What does regenerative braking do?", options: ["Uses the motor to slow the car and put energy back in the battery", "Adds brake fluid automatically", "Charges the car from a gas tank", "Turns off the 12-volt battery"], answer: 0, why: "The motor acts as a generator when slowing, sending energy back to the battery." }
          ]
        },
        {
          title: "High-voltage safety: know when to stop",
          objectives: ["O2"],
          minutes: 6,
          goal: "List the high-voltage hazards in a shop and the safety rule for each one.",
          text: [
            "The high-voltage system can cause electric shock, burns and arc flash. It can stay dangerous after the car is turned off, and a damaged battery can catch fire, even hours or days later.",
            "The first rule for a new worker: do not touch orange cables, the battery pack, or any part with a high-voltage warning label. Only trained, authorized technicians work on the high-voltage system. They follow the manufacturer's service information to shut the system down, wait the time it gives, and test that it is dead.",
            "Trained technicians wear insulated gloves rated for the voltage, checked before every use, and use lockout/tagout so no one can turn the power back on while they work. OSHA's lockout/tagout rule is 29 CFR 1910.147.",
            "Other shop rules still apply: lift the car only at the manufacturer's lift points (the battery pack is underneath), keep the area clear, and tell a supervisor about any damaged, leaking, smoking or hot battery. Get away from it and do not try to fix it."
          ],
          steps: ["Look for orange cables and high-voltage warning labels.", "Do not touch them unless you are trained and authorized.", "Lift only at the manufacturer's lift points.", "Report any damaged, hot, smoking or leaking battery and move away.", "Trained techs: shut down, wait, test, lock out and tag out, per the service information."],
          words: [["Electric shock", "injury when electricity passes through your body."], ["Arc flash", "a sudden blast of heat and light from electricity jumping through the air."], ["Authorized", "allowed by your employer because you have the right training."], ["Insulated gloves", "special rubber gloves rated to protect against a certain voltage."], ["Lockout/tagout", "steps that shut off and lock power so no one can turn it back on while work is done."], ["Service information", "the manufacturer's official repair steps for a vehicle."], ["Lift point", "the spot under a car where it is safe to lift it."]],
          slides: [
            { title: "The dangers", bullets: ["Shock, burns and arc flash", "Can stay dangerous after the car is off", "Damaged batteries can catch fire later"] },
            { title: "Rule one for new workers", bullets: ["Do not touch orange cables or the battery pack", "Do not touch parts with high-voltage labels", "Only trained, authorized techs do that work"] },
            { title: "How trained techs work", bullets: ["Follow the manufacturer's service information", "Shut down, wait, test that it is dead", "Rated insulated gloves; lockout/tagout"] },
            { title: "Everyday shop rules", bullets: ["Lift only at the manufacturer's lift points", "Report damaged, hot or smoking batteries", "Move away; do not try to fix it"] }
          ],
          sources: [
            { name: "OSHA: Control of hazardous energy (lockout/tagout)", url: "https://www.osha.gov/control-hazardous-energy" },
            { name: "U.S. Department of Energy, Alternative Fuels Data Center: EV safety and emergency response", url: "https://afdc.energy.gov/vehicles/electric-maintenance" },
            { name: "U.S. Bureau of Labor Statistics: Automotive service technicians and mechanics", url: "https://www.bls.gov/ooh/installation-maintenance-and-repair/automotive-service-technicians-and-mechanics.htm" }
          ],
          tryIt: "Practice scenario: an EV comes in after a fender bender. There is a dent under the car near the battery and a sharp smell. A coworker says, \"Just unplug that orange cable so we can lift it.\" On paper, make a two-column list: Hazard and What I do. Write at least four rows.",
          youCanNow: "spot high-voltage hazards in a shop and say the safety rule for each one, including when to stop and get a trained technician.",
          quickCheck: [
            { objective: "O2", q: "You are new and see an orange cable under a car you are working on. What do you do?", options: ["Unplug it to be safe", "Pull it out of the way", "Wrap it in tape", "Do not touch it; tell a trained technician"], answer: 3, why: "Orange cables carry high voltage; only trained, authorized technicians work on them." },
            { objective: "O2", q: "What is lockout/tagout for?", options: ["Locking the shop at night", "Making sure no one can turn the power back on during work", "Tagging tires for storage", "Locking the customer's keys away"], answer: 1, why: "Lockout/tagout keeps power off while someone works on the system." }
          ]
        },
        {
          title: "Charging basics and charging math (practice only)",
          objectives: ["O3"],
          minutes: 6,
          goal: "Calculate the energy needed and the charging time from practice numbers.",
          text: [
            "There are three common charging levels in the US. Level 1 uses a normal 120-volt outlet and is slow. Level 2 uses 240 volts at homes or 208 volts at many businesses; it is the most common public charger. DC fast charging sends DC straight to the battery and is the fastest.",
            "Common plugs are J1772 (Level 1 and 2), CCS (J1772 plus two pins for DC fast charging) and J3400, also called NACS, based on Tesla's design. Installing a charger at a home or business is electrical work for a licensed electrician.",
            "Battery size is measured in kilowatt-hours (kWh). Charger power is in kilowatts (kW). Practice formula: hours = kWh needed / charger kW. All numbers here are made up for practice only. Real charging slows down as the battery gets full, and losses make it take longer."
          ],
          steps: ["Find the battery size in kWh.", "Work out how much of it you need: battery kWh x (percent to add / 100).", "Divide the kWh needed by the charger's kW.", "Write the answer in hours and say it is an estimate."],
          words: [["Level 1", "slow charging from a normal 120-volt outlet."], ["Level 2", "faster charging at 240 or 208 volts."], ["DC fast charging", "the fastest charging, sending DC straight to the battery."], ["Kilowatt-hour (kWh)", "a measure of energy; battery size is in kWh."], ["Kilowatt (kW)", "a measure of power; charger speed is in kW."], ["J1772, CCS, J3400 (NACS)", "names of common EV charging plugs in the US."]],
          slides: [
            { title: "Three charging levels", bullets: ["Level 1: 120-volt outlet, slow", "Level 2: 240 or 208 volts, most public chargers", "DC fast: DC straight to the battery"] },
            { title: "Plugs", bullets: ["J1772 for Level 1 and 2", "CCS adds DC fast pins", "J3400 (NACS), based on Tesla's design"] },
            { title: "Charging math (practice only)", bullets: ["Hours = kWh needed / charger kW", "Example: 60 kWh x 50% = 30 kWh; 30 / 7.5 kW = 4 hours"] },
            { title: "Real life is slower", bullets: ["Charging slows as the battery fills", "Answers are estimates", "Charger installs are for licensed electricians"] }
          ],
          sources: [
            { name: "U.S. Department of Energy, Alternative Fuels Data Center: Charging electric vehicles", url: "https://afdc.energy.gov/fuels/electricity-stations" },
            { name: "EVITP: Electric Vehicle Infrastructure Training Program (for licensed electricians)", url: "https://evitp.org/" }
          ],
          tryIt: "Practice only. Solve on paper and show your work: (a) An 80 kWh battery goes from 20% to 80%. How many kWh is that? (b) How long would that take on a 9.6 kW Level 2 charger? (c) A 40 kWh battery needs 10 kWh on a 1.25 kW Level 1 outlet. How many hours? Answers to check yourself: (a) 48 kWh, (b) 5 hours, (c) 8 hours.",
          youCanNow: "name the charging levels and plugs, and estimate charging time from practice numbers.",
          quickCheck: [
            { objective: "O3", q: "Practice only: you need 24 kWh and the charger gives 6 kW. About how long?", options: ["2 hours", "18 hours", "4 hours", "30 hours"], answer: 2, why: "Hours = kWh / kW, so 24 / 6 = 4 hours." },
            { objective: "O3", q: "Which charging level uses a normal 120-volt household outlet?", options: ["Level 1", "Level 2", "DC fast charging", "J3400 only"], answer: 0, why: "Level 1 uses a standard 120-volt outlet." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: How EVs work and how to stay safe",
        questions: [
          { objective: "O1", q: "Which part changes DC from the battery into AC for the motor?", options: ["The 12-volt battery", "The inverter", "The brake pads", "The charge port door"], answer: 1, why: "The inverter changes battery DC into AC for the motor." },
          { objective: "O1", q: "What does the DC-to-DC converter do?", options: ["Fills the big battery from the wall", "Turns the wheels", "Charges the 12-volt battery from the high-voltage system", "Cools the cabin"], answer: 2, why: "It steps high voltage down to keep the 12-volt battery charged." },
          { objective: "O2", q: "The car is turned off. Is the high-voltage system safe to touch?", options: ["Yes, always", "Yes, if the radio is off", "Yes, after one minute", "Not necessarily; only trained techs follow the shutdown and test steps"], answer: 3, why: "High voltage can stay dangerous after the car is off; trained techs shut down, wait and test first." },
          { objective: "O2", q: "A battery under a car is hot and smoking. What do you do?", options: ["Move away and tell a supervisor right away", "Spray water on it yourself", "Lift the car to look", "Unplug the orange cables"], answer: 0, why: "A damaged battery can catch fire; get away and report it." },
          { objective: "O3", q: "Practice only: 60 kWh battery, add 50%. How many kWh is that?", options: ["50 kWh", "110 kWh", "30 kWh", "10 kWh"], answer: 2, why: "60 x 50 / 100 = 30 kWh." }
        ]
      }
    },
    {
      name: "Chapter 2: Service work and your path to the job",
      lessons: [
        {
          title: "Everyday EV service tasks",
          objectives: ["O4"],
          minutes: 5,
          goal: "Write a low-voltage service checklist for an EV that follows the manufacturer's service information.",
          text: [
            "EVs need less upkeep than gas cars: no oil changes, spark plugs or exhaust. But they still need service, and much of it is low-voltage work a new technician can learn.",
            "Tires: EVs are often heavy, so check tire pressure, tread and wear, and rotate tires as the maker says. Brakes: regenerative braking means pads wear slowly, but brakes still need to be checked, and parts that are used little can rust or stick. Also check wipers, lights, suspension and steering parts, the cabin air filter and the 12-volt battery.",
            "Some EVs use liquid coolant for the battery and electronics. Checks and changes follow the manufacturer's schedule and steps; never open a high-voltage cooling part unless you are trained.",
            "Always use the manufacturer's service information for the exact car: the schedule, the lift points and the steps. If a task touches anything orange or labeled high voltage, stop and hand it to a trained technician."
          ],
          steps: ["Look up the service information for the exact make, model and year.", "Lift only at the listed lift points.", "Check tires, brakes, wipers, lights, suspension and steering.", "Check the cabin air filter and the 12-volt battery.", "Check coolant only as the service information says.", "Stop and hand off anything orange or labeled high voltage."],
          words: [["Low-voltage", "the normal 12-volt systems, like lights and the radio, which are safer to work on."], ["Tire rotation", "moving tires to different spots so they wear evenly."], ["Cabin air filter", "the filter that cleans air coming into the car's cabin."], ["Coolant", "the liquid that keeps parts from getting too hot."], ["Service schedule", "the maker's list of what to check and when."]],
          slides: [
            { title: "Less upkeep, not none", bullets: ["No oil changes, spark plugs or exhaust", "Still needs regular checks"] },
            { title: "Tires and brakes", bullets: ["Heavy cars: check pressure, tread and wear", "Brakes wear slowly but can rust or stick", "Rotate tires as the maker says"] },
            { title: "Other checks", bullets: ["Wipers, lights, suspension, steering", "Cabin air filter and 12-volt battery", "Coolant only per the service information"] },
            { title: "Know your limit", bullets: ["Use the service information for that exact car", "Lift only at the listed points", "Orange or high-voltage label? Stop and hand it off"] }
          ],
          sources: [{ name: "U.S. Department of Energy, Alternative Fuels Data Center: Maintenance of electric vehicles", url: "https://afdc.energy.gov/vehicles/electric-maintenance" }],
          tryIt: "Pick any EV model you have seen. On paper, write a service checklist with at least 8 items for a routine visit. Mark each one LV (low-voltage, OK for you) or STOP (high-voltage, hand off). Then check: did you put anything orange in the LV column? Fix it if you did.",
          youCanNow: "write a low-voltage EV service checklist and say which jobs to hand to a trained high-voltage technician.",
          quickCheck: [
            { objective: "O4", q: "Which job does an EV NOT need?", options: ["Tire rotation", "Oil changes", "Brake checks", "Cabin air filter checks"], answer: 1, why: "A battery-electric vehicle has no engine oil to change." },
            { objective: "O4", q: "Where do you find the right lift points and service schedule for an EV?", options: ["A guess from another car", "A social media video", "The customer's memory", "The manufacturer's service information for that exact car"], answer: 3, why: "The manufacturer's service information has the correct lift points and schedule." }
          ]
        },
        {
          title: "Certifications and training for EV work",
          objectives: ["O5"],
          minutes: 5,
          goal: "List the certification steps toward EV technician work, with the official source for each.",
          text: [
            "Most auto technicians start with a training program at a high school, community college or technical school, or begin as a lube or tire tech and learn on the job. Apprenticeships and manufacturer training programs are other ways in.",
            "ASE (the National Institute for Automotive Service Excellence) offers the best-known technician certifications. Its L3 test, Light Duty Hybrid/Electric Vehicle Specialist, covers diagnosing the battery system, the drive system, power electronics and more. Before you can register for L3, you must pass A6 (Electrical/Electronic Systems) and A8 (Engine Performance). ASE certification also needs hands-on work experience; check the current rules on ase.com.",
            "Many carmakers also train technicians on their own EVs. Electricians who install chargers can take EVITP training, which is for licensed electricians. Fees, test rules and experience requirements change, so check each official page before you pay.",
            "This course prepares you to start. It does not certify you."
          ],
          steps: ["Look up local auto technology programs and apprenticeships.", "Read the ASE L3 page and note its prerequisites (A6 and A8).", "Read ASE's work experience rules.", "Ask local shops and dealers which certifications and maker trainings they want.", "Write each step, a target date and the official page."],
          words: [["ASE", "the National Institute for Automotive Service Excellence, which certifies auto technicians."], ["Certification", "proof that you passed a test and met the experience rules."], ["Prerequisite", "something you must finish before you can start the next step."], ["Diagnose", "find out what is wrong and why."], ["EVITP", "the Electric Vehicle Infrastructure Training Program, which trains licensed electricians to install chargers."]],
          slides: [
            { title: "Ways in", bullets: ["School or community college auto programs", "Start as a lube or tire tech", "Apprenticeships and maker training"] },
            { title: "ASE path to EV work", bullets: ["Pass A6 Electrical/Electronic Systems", "Pass A8 Engine Performance", "Then L3 Light Duty Hybrid/Electric Vehicle Specialist"] },
            { title: "More to know", bullets: ["ASE also requires hands-on work experience", "Carmakers train on their own EVs", "EVITP is for licensed electricians who install chargers"] },
            { title: "Check before you pay", bullets: ["Rules and fees change: use ase.com", "Write each step, a date and the source", "This course prepares you; it does not certify you"] }
          ],
          sources: [
            { name: "ASE: L3 Light Duty Hybrid/Electric Vehicle Specialist test", url: "https://www.ase.com/tests/l3/" },
            { name: "ASE: Tests", url: "https://www.ase.com/tests" },
            { name: "EVITP: Electric Vehicle Infrastructure Training Program", url: "https://evitp.org/" },
            { name: "U.S. Bureau of Labor Statistics: How to become an automotive service technician", url: "https://www.bls.gov/ooh/installation-maintenance-and-repair/automotive-service-technicians-and-mechanics.htm" }
          ],
          tryIt: "Open the ASE L3 test page. Write down the two tests you must pass first and three topics L3 covers. Then search for an auto technology program or apprenticeship near you and write its name and web address.",
          youCanNow: "name the ASE path to EV work (A6, A8, then L3), say what else it needs, and find training near you on official pages.",
          quickCheck: [
            { objective: "O5", q: "Which ASE test is the hybrid/electric vehicle specialist test?", options: ["A1", "L3", "A5", "T2"], answer: 1, why: "L3 is ASE's Light Duty Hybrid/Electric Vehicle Specialist test." },
            { objective: "O5", q: "What must you pass before you register for ASE L3?", options: ["A6 and A8", "A CDL test", "The GED science test", "EPA Section 608"], answer: 0, why: "ASE requires A6 Electrical/Electronic Systems and A8 Engine Performance before L3." }
          ]
        },
        {
          title: "Your EV Tech Start Plan",
          objectives: ["O6"],
          minutes: 6,
          goal: "Write an EV Tech Start Plan with dates and a résumé skills section.",
          text: [
            "Now put it all together into one page you can take to a training program, a shop or a dealer. A plan with real dates shows you are serious.",
            "Your plan has six parts: how an EV works in your own words; your high-voltage safety rules; two practice charging problems with your work shown; a low-voltage service checklist; your certification path with dates and sources; and an \"EV skills\" résumé section.",
            "For the résumé, write true things you can do now, in short bullets that start with an action word. For example: \"Know the main parts of an EV and hybrid drive system.\" \"Trained in high-voltage safety awareness: identify orange cables and stop for a qualified tech.\" \"Can estimate charging time from battery and charger size.\" Add past work that helps: car care, tire or lube work, military vehicles, electrical helper work or warehouse equipment.",
            "Veterans: many military vehicle and electrical skills transfer. Ask a local workforce center about training help."
          ],
          steps: ["Write your 3 to 4 sentence explanation of how an EV works.", "Write your high-voltage safety rules.", "Add two practice charging problems with your work.", "Add your low-voltage service checklist.", "Write your certification path with target dates and source pages.", "Write 3 résumé bullets that start with an action word."],
          words: [["Résumé", "a short document that lists your skills, work and training for employers."], ["Target date", "the day you plan to finish a step."], ["Workforce center", "a free public office that helps people find jobs and training; many are called American Job Centers."]],
          slides: [
            { title: "One page, six parts", bullets: ["How an EV works; safety rules", "Charging math; service checklist", "Certification path with dates; résumé section"] },
            { title: "Real dates", bullets: ["When you start a training program", "When you aim to pass A6 and A8", "When you aim for L3, after work experience"] },
            { title: "Résumé: EV skills", bullets: ["Short bullets that start with an action word", "Only true things you can do", "Add past work with cars, tools or electrical"] },
            { title: "Get help", bullets: ["American Job Centers and veteran services", "Ask local shops and dealers what they want"] }
          ],
          sources: [{ name: "CareerOneStop: Find an American Job Center", url: "https://www.careeronestop.org/LocalHelp/AmericanJobCenters/find-american-job-centers.aspx" }],
          tryIt: "Final task: make your one-page EV Tech Start Plan with all six parts. Put a real date next to every training and certification step, and the web address for each requirement you checked. Read your résumé bullets out loud as if you were in an interview.",
          youCanNow: "show a shop or training program a written plan for starting EV work, with dates, sources and a résumé skills section.",
          quickCheck: [
            { objective: "O6", q: "Which is the best résumé bullet for an entry-level EV shop job?", options: ["\"ASE L3 certified.\" (when you are not)", "\"Car person.\"", "\"Can estimate charging time from battery and charger size.\"", "\"I like Teslas.\""], answer: 2, why: "It is true and specific; never claim a certification you do not have." },
            { objective: "O6", q: "Your plan says \"Get ASE certified.\" What makes it stronger?", options: ["Removing it", "Writing it in capital letters", "Adding a friend's name", "Naming A6, A8 and L3 with target dates and the ase.com page"], answer: 3, why: "Named tests, dates and the official source turn a wish into a plan." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Service work and your path to the job",
        questions: [
          { objective: "O4", q: "Why do EV brakes still need checking even though they wear slowly?", options: ["Parts that are used little can rust or stick", "EVs have no brakes", "Brakes charge the battery fully", "They never need checking"], answer: 0, why: "Regenerative braking means less use, so brake parts can rust or stick." },
          { objective: "O4", q: "On your service checklist, a task involves an orange cable. What do you mark it?", options: ["LV, OK for me", "Skip it and tell no one", "STOP: hand it to a trained high-voltage technician", "Do it quickly"], answer: 2, why: "Anything orange or labeled high voltage goes to a trained, authorized technician." },
          { objective: "O5", q: "What does ASE certification need besides passing a test?", options: ["A college degree", "Hands-on work experience", "A CDL", "Owning an EV"], answer: 1, why: "ASE certification needs work experience as well as passing the test." },
          { objective: "O5", q: "Who is EVITP charger installation training for?", options: ["Anyone with a phone", "Car salespeople", "Customers", "Licensed electricians"], answer: 3, why: "EVITP trains licensed electricians who install EV chargers." },
          { objective: "O6", q: "What should every step in your EV Tech Start Plan have?", options: ["A target date and the official page you checked", "A price you guessed", "A friend's signature", "Nothing extra"], answer: 0, why: "Dates and sources make each step real and checkable." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Electric Vehicle (EV) Technician Basics",
    questions: [
      { objective: "O1", q: "Where is the high-voltage battery pack usually found on an EV?", options: ["In the trunk lid", "Under the floor", "Behind the radio", "In the steering wheel"], answer: 1, why: "Most EV battery packs sit under the floor." },
      { objective: "O1", q: "What powers the lights and radio on an EV?", options: ["The 12-volt battery", "The tires", "The charge cable", "The gas tank"], answer: 0, why: "A normal 12-volt battery still runs the low-voltage systems." },
      { objective: "O1", q: "What is a plug-in hybrid (PHEV)?", options: ["A car with no battery", "A gas car with a phone charger", "An EV with no motor", "A hybrid with a bigger battery you can charge from a plug"], answer: 3, why: "A PHEV has a gas engine and a bigger battery that plugs in." },
      { objective: "O1", q: "Which part changes AC from a charging station into DC for the battery?", options: ["The motor", "The brake pads", "The onboard charger", "The cabin air filter"], answer: 2, why: "The onboard charger converts AC from the station into DC for the pack." },
      { objective: "O2", q: "As a new worker, which part should you NEVER touch without training?", options: ["Wiper blades", "Orange high-voltage cables", "Tire valve caps", "Cabin air filter"], answer: 1, why: "Orange cables carry deadly high voltage." },
      { objective: "O2", q: "What is arc flash?", options: ["A sudden blast of heat and light from electricity jumping through the air", "A headlight setting", "A type of tire", "A charging plug"], answer: 0, why: "Arc flash is an electrical blast that can burn and injure." },
      { objective: "O2", q: "Before a trained tech works on high voltage, what do they do?", options: ["Turn up the radio", "Only open the hood", "Wear cotton gloves", "Shut down, wait, test that it is dead and lock out per the service information"], answer: 3, why: "Shutdown, wait, test and lockout/tagout follow the manufacturer's steps." },
      { objective: "O2", q: "Where do you lift an EV on a shop lift?", options: ["Under the battery pack", "Anywhere flat", "Only at the manufacturer's lift points", "By the bumpers"], answer: 2, why: "The battery is underneath; the listed lift points protect it and you." },
      { objective: "O3", q: "Practice only: 36 kWh needed on a 9 kW charger. How long?", options: ["4 hours", "45 hours", "27 hours", "3 hours"], answer: 0, why: "36 / 9 = 4 hours." },
      { objective: "O3", q: "Battery size is measured in:", options: ["Miles per gallon", "Kilowatt-hours (kWh)", "Pounds per square inch", "Gallons"], answer: 1, why: "Battery energy is measured in kilowatt-hours." },
      { objective: "O3", q: "Which is usually the fastest way to charge?", options: ["Level 1", "Level 2", "A 12-volt jumper", "DC fast charging"], answer: 3, why: "DC fast charging sends DC straight to the battery at high power." },
      { objective: "O3", q: "Why is a charging-time answer only an estimate?", options: ["Chargers never work", "Batteries have no size", "Charging slows as the battery fills, and there are losses", "kWh and kW mean the same"], answer: 2, why: "Real charging slows near full and loses some energy." },
      { objective: "O4", q: "Which is a good item for an EV service checklist?", options: ["Check tire pressure and tread", "Change engine oil", "Replace spark plugs", "Fix the exhaust pipe"], answer: 0, why: "EVs need tire checks; they have no engine oil, spark plugs or exhaust." },
      { objective: "O4", q: "Why should you watch tire wear closely on EVs?", options: ["EVs have no tires", "EVs are often heavy", "Tires charge the battery", "EV tires never wear"], answer: 1, why: "Heavy vehicles can wear tires faster, so check them often." },
      { objective: "O4", q: "Where do you find the correct coolant steps for an EV?", options: ["Any gas car manual", "A guess", "A coworker's memory", "The manufacturer's service information"], answer: 3, why: "Each EV's coolant checks follow its maker's service information." },
      { objective: "O5", q: "What does ASE stand for?", options: ["Auto Sales Experts", "Association of Safe Electricians", "National Institute for Automotive Service Excellence", "American Solar Energy"], answer: 2, why: "ASE is the National Institute for Automotive Service Excellence." },
      { objective: "O5", q: "Where do you check current ASE test rules and fees?", options: ["ase.com", "A social media post", "A sales ad", "A friend's old notes"], answer: 0, why: "The official ASE site has the current rules." },
      { objective: "O5", q: "Does this course certify you as an EV technician?", options: ["Yes, after the quiz", "No; it prepares you, and certification comes from ASE and other programs", "Yes, if you finish in one day", "Only for hybrids"], answer: 1, why: "The course prepares you; certifications come from ASE, makers and approved programs." },
      { objective: "O6", q: "Which belongs in your EV Tech Start Plan?", options: ["Your bank password", "A certification you do not have", "Your favorite car colors", "Target dates for A6, A8 and L3"], answer: 3, why: "Dates for each step make the plan real." },
      { objective: "O6", q: "A good résumé bullet should be:", options: ["Long and vague", "About a skill you hope to learn", "True, specific and start with an action word", "Copied from a stranger"], answer: 2, why: "Employers trust short, true, specific bullets." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Pre-Test: What Do You Already Know About EVs?", from: [0, 3, 4, 7, 8, 10, 12, 15, 18] },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      { name: "How an EV works", objective: "O1", notYet: "Misses the battery pack or the inverter, or mixes up their jobs.", meets: "Names the battery pack, inverter, motor, onboard charger, DC-to-DC converter and 12-volt battery, and says what each does.", exceeds: "Also explains regenerative braking and the difference between an EV, HEV and PHEV." },
      { name: "High-voltage safety rules", objective: "O2", notYet: "Does not say to stay away from orange cables and the battery pack.", meets: "Says not to touch orange or labeled high-voltage parts without training, to use the manufacturer's lift points, and to report damaged batteries.", exceeds: "Also explains shutdown, wait, test and lockout/tagout, and who is allowed to do them." },
      { name: "Charging math", objective: "O3", notYet: "A math error, or no work shown.", meets: "Both problems are right, with the formula and units shown.", exceeds: "Also says why the real time will be longer." },
      { name: "Service checklist", objective: "O4", notYet: "Includes oil changes or a high-voltage task marked as OK.", meets: "At least 6 correct low-voltage items, with high-voltage tasks marked STOP.", exceeds: "Notes that each item follows the manufacturer's service information for the exact car." },
      { name: "Certification path", objective: "O5", notYet: "No dates, or steps with no source.", meets: "Names a training route and ASE A6, A8 and L3, each with a target date and web address.", exceeds: "Adds a maker training program or local employer and a backup plan." },
      { name: "Résumé section", objective: "O6", notYet: "Bullets are vague or claim a certification the learner does not have.", meets: "Three true bullets that start with an action word and match EV shop work.", exceeds: "Connects past work (car care, military vehicles, electrical) to EV tasks." }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Learners who enroll in an auto technology program, apprenticeship or maker training within 90 days",
      "Learners who pass ASE A6 or A8 within 12 months (self-reported)",
      "Learners hired in an auto shop or dealer service role within 6 months (follow-up survey or partner report)"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A phone, tablet or computer with internet to read lessons and check official pages",
      "Paper, pen, colored pens and a calculator (a phone calculator is fine)",
      "Optional: a printed picture of an EV's parts to label",
      "About 60 to 75 minutes in total, in short sessions"
    ],
    facilitatorNotes: [
      "No one touches a vehicle's high-voltage system in this course. If you visit a shop or show a vehicle, a trained, authorized technician leads and learners only look.",
      "Take the pre-test together, then do one chapter per session and work the charging math on a whiteboard.",
      "Have learners open the ASE L3 page live and find the prerequisites themselves.",
      "Invite a local dealer service manager, community college auto instructor or ASE-certified EV technician to talk about hiring.",
      "Score the final task with the rubric and give feedback on one Not yet row at a time.",
      "Point veterans and people returning to work to American Job Centers for training help."
    ]
  }
};
