"use strict";

// Koach Learn course: Workforce Development (wave 3, 30 October 2026) -> "CNC Machining Basics". A pre-training course that leads toward a CNC operator job, a machining program at a
// community college or technical school, a registered apprenticeship, and NIMS machining credentials. It PREPARES learners; it does not certify them, and it asks for no machine work
// (running a mill or lathe is learned only in a supervised shop with a qualified instructor). Built in the ADDIE format; the model is re-entry/reentry-ai-digital-confidence.js.

module.exports = {
  id: "cnc-machining-basics",
  category: "Workforce Development",
  name: "CNC Machining Basics",
  skills: "Naming CNC machines and their axes, Reading dimensions and tolerances on a print, Reading basic G-code and M-code, Ordering the steps of a safe setup and first part, Spotting shop hazards and their controls, Planning your path to machining training and credentials",
  outcome: "name the main CNC machines and their axes, read the dimensions and tolerances on a simple part print, read a short G-code program and sketch its toolpath on graph paper, put the steps of a safe setup and first part in order, name the controls for common shop hazards, and follow a dated plan to get trained and earn a machining credential.",
  about: [
    "CNC machinists and operators make the metal and plastic parts inside cars, airplanes, farm equipment, medical devices and the machines in every factory. Many start as machine operators and move up to setup, programming and inspection. This course is for anyone looking at that path: job seekers, young people, veterans, people coming home from prison, immigrants and adults going back to learning.",
    "You will learn what CNC machines do and how their axes move, how to read the sizes and tolerances on a part drawing, how to read a short CNC program line by line, and the order of a safe setup and first part. Then you will learn the shop hazards and how machinists control them, and how training and credentials work.",
    "This course prepares you. It does not give you a certificate or a license, and you will not run a machine in it. Running a mill or a lathe is learned only in a supervised shop with a qualified instructor. Machining credentials, such as those from the National Institute for Metalworking Skills (NIMS), usually need a written exam and a hands-on performance check.",
    "Each lesson takes about five minutes, with a \"Try it now\" task on paper or a computer and two quick questions. There is a knowledge check after each chapter and a 20-question quiz at the end. Your final product is your own CNC starter plan with real dates."
  ],
  finalTask: "Make your CNC starter plan: (1) a one-page sketch of a mill and a lathe with the X, Y and Z axes marked; (2) a print-reading sheet for a practice part with the size limits worked out for three toleranced dimensions; (3) a short practice program (8 to 12 lines) that cuts a simple square or slot, with each line explained in your own words and the toolpath sketched on graph paper; (4) a setup and safety checklist for a first part that covers guards, eye protection, clothing, chips, coolant, workholding, offsets, a dry run and first-article inspection; and (5) a dated plan naming two training programs or apprenticeships near you, the NIMS credential you will aim for (from the official site), and a date for each step.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Young people and adults looking for a hands-on manufacturing job: job seekers, high school students and graduates, veterans, people coming home from prison, immigrants and adults returning to learning. Some have done shop class, auto, farm or military maintenance work; most have never run a CNC machine.",
    startingPoint: "Can read short instructions, read a tape measure and do whole-number and decimal math. Most know that factories use computer-controlled machines, but cannot name the machines or axes, read a tolerance, read a line of G-code, or list the steps of a safe setup.",
    gap: "Employers, apprenticeship sponsors and machining programs want people who know the basic words, can read a print and a simple program, and take safety seriously. Learners need that base and a dated plan, so they choose good training, avoid wasting money and arrive ready to learn on the machine.",
    constraints: [
      "Reading level: plain words and short sentences (about grade 6 to 8); every shop word is explained",
      "No machine work in this course: running a mill or lathe needs a supervised shop and a qualified instructor",
      "Devices: a phone or library computer for official pages; graph paper, a pencil and a ruler for sketches and toolpaths",
      "Math: decimals to three places (thousandths of an inch) and simple millimeters; worked examples are given",
      "Time: 5 to 6 minute lessons that fit around school, work and appointments",
      "G-code differs by machine control: learners follow the manual for the machine they train on"
    ],
    prerequisites: "None. \"Everyday Math\" helps with decimals; \"Starting a Career in the Skilled Trades\" helps learners choose a trade, and this course goes deeper into machining."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Given pictures or descriptions of shop machines and parts", action: "name the CNC machine that makes each part and point to its X, Y and Z axes", standard: "getting at least 4 of 5 right" },
    { id: "O2", condition: "Given a simple part print with toleranced dimensions", action: "write the smallest and largest allowed size for each dimension and decide if a measured part passes", standard: "with no math errors on 3 dimensions" },
    { id: "O3", condition: "Given a short CNC program of 8 to 12 lines", action: "explain what each G-code and M-code line does and sketch the toolpath on graph paper", standard: "with the moves and the start and end points correct" },
    { id: "O4", condition: "Given the steps of a setup and first part in mixed order", action: "put the steps of a safe setup and first part in the right order", standard: "with the dry run and first-article inspection before production" },
    { id: "O5", condition: "Given five common machine shop hazards", action: "name a control for each hazard: guard, protective gear, safe habit or lockout", standard: "naming a correct control for all five" },
    { id: "O6", condition: "Using official training, apprenticeship and NIMS pages", action: "write a dated plan to get trained and earn a machining credential", standard: "with two programs, one credential and a date for each step" }
  ],
  chapters: [
    {
      name: "Chapter 1: Machines, prints and programs",
      lessons: [
        {
          title: "What CNC machines do and how they move",
          objectives: ["O1"],
          minutes: 5,
          goal: "Name the main CNC machines and point to their X, Y and Z axes.",
          text: [
            "CNC stands for computer numerical control. A CNC machine follows a program to move a cutting tool or a part along exact paths. Machining means cutting material away, in chips, until the part is the right shape and size.",
            "A CNC mill (or machining center) holds the part still on a table while a spinning tool cuts it. It makes flat faces, pockets, slots and holes, like a bracket or an engine plate. A CNC lathe (or turning center) spins the part while a still tool cuts it. It makes round parts, like shafts, pins and bushings. Shops also use CNC routers for wood and plastic, and CNC plasma and laser cutters for sheet metal.",
            "Each direction a machine can move is an axis. On a typical vertical mill, X moves left and right, Y moves toward you and away from you, and Z moves up and down with the spindle. On a lathe, Z runs along the length of the spinning part and X runs across it, which sets the diameter. Bigger machines add rotary axes, so a \"5-axis\" machine can tilt and turn the part too."
          ],
          words: [["CNC", "computer numerical control: a machine that follows a program of numbers and codes."], ["Mill", "a machine where a spinning tool cuts a part held on a table."], ["Lathe", "a machine where the part spins and a still tool cuts it; makes round parts."], ["Spindle", "the part of the machine that spins the tool (mill) or the part (lathe)."], ["Axis", "one direction a machine can move, such as X, Y or Z."]],
          slides: [
            { title: "CNC = computer numerical control", bullets: ["A program moves the tool or the part on exact paths", "Machining cuts material away in chips"] },
            { title: "Mill vs lathe", bullets: ["Mill: part held still, spinning tool cuts: faces, pockets, slots, holes", "Lathe: part spins, still tool cuts: shafts, pins, bushings"] },
            { title: "Axes on a vertical mill", bullets: ["X: left and right", "Y: toward you and away", "Z: up and down with the spindle"] },
            { title: "Axes on a lathe", bullets: ["Z: along the length of the part", "X: across the part; sets the diameter", "5-axis machines add tilting and turning"] }
          ],
          tryIt: "Find three metal or plastic parts at home (a bolt, a door hinge, a pen cap, a bike part). For each, write \"mill\" or \"lathe\" and why. Then sketch a vertical mill as a box with a spindle on top and mark X, Y and Z with arrows.",
          youCanNow: "say what a CNC mill and a CNC lathe make and point to the X, Y and Z axes on each.",
          quickCheck: [
            { objective: "O1", q: "A shop needs 500 round steel pins. Which machine fits best?", options: ["A CNC plasma cutter", "A CNC lathe", "A CNC router for wood", "A sheet metal brake"], answer: 1, why: "A lathe spins the part, so it makes round parts like pins and shafts." },
            { objective: "O1", q: "On a typical vertical mill, which axis moves the spindle up and down?", options: ["X", "Y", "A", "Z"], answer: 3, why: "On a vertical mill, Z is the up-and-down axis of the spindle." }
          ]
        },
        {
          title: "Reading a print: dimensions and tolerances",
          objectives: ["O2"],
          minutes: 6,
          goal: "Write the smallest and largest allowed size for a toleranced dimension and decide if a part passes.",
          text: [
            "A print (also called a blueprint or drawing) shows the part from different sides and gives every size you need. Each size is a dimension. US shops often use inches written to three or four decimal places; many shops use millimeters. The title block, in a corner of the print, shows the part name, the material, the units and the general tolerance.",
            "No part can be made perfectly, so the print says how far off a size may be. That allowance is the tolerance. \"1.000 ±0.005\" means the size may be from 0.995 to 1.005 inches. These two numbers are the limits. If a dimension has no tolerance written next to it, the general tolerance in the title block applies.",
            "Machinists check sizes with measuring tools. Calipers measure outside, inside and depth sizes quickly. A micrometer measures more precisely over a small range. Tools are kept clean and checked against a known standard, because a dirty or dropped tool can give a wrong reading."
          ],
          steps: ["Find the dimension and its units (inch or mm) on the print.", "Find its tolerance next to it, or the general tolerance in the title block.", "Subtract the tolerance for the smallest size; add it for the largest size.", "Compare the measured size: if it is between the limits, the dimension passes."],
          words: [["Print", "a drawing of a part with all its sizes; also called a blueprint."], ["Dimension", "a size shown on a print, such as a length, width or hole diameter."], ["Tolerance", "how far a size may be off and still be good, such as ±0.005."], ["Limits", "the smallest and largest allowed size."], ["Title block", "the box on a print with the part name, material, units and general tolerance."], ["Caliper / micrometer", "measuring tools; the micrometer is more precise over a small range."]],
          slides: [
            { title: "A print gives every size", bullets: ["Each size is a dimension", "Inches (often 3 or 4 decimals) or millimeters", "Title block: part, material, units, general tolerance"] },
            { title: "Tolerance = allowed error", bullets: ["1.000 ±0.005 means 0.995 to 1.005", "No tolerance written? Use the title block's"] },
            { title: "Work out the limits", bullets: ["Smallest = size minus tolerance", "Largest = size plus tolerance", "Between the limits = passes"] },
            { title: "Measuring tools", bullets: ["Calipers: quick outside, inside and depth sizes", "Micrometer: more precise over a small range", "Keep tools clean and checked"] }
          ],
          tryIt: "Practice only. Work out the limits for: (a) 2.500 ±0.010, (b) 0.750 ±0.002, (c) 25.0 ±0.1 mm. Then decide: a part measured at 0.753 for (b), does it pass? (Answers: a 2.490 to 2.510; b 0.748 to 0.752; c 24.9 to 25.1 mm; 0.753 is too big, so it fails.)",
          youCanNow: "find a dimension and its tolerance on a print, work out its limits, and decide if a measured part passes.",
          quickCheck: [
            { objective: "O2", q: "A print says 1.250 ±0.003. What are the limits?", options: ["1.247 to 1.253", "1.250 to 1.253", "1.220 to 1.280", "1.247 to 1.250"], answer: 0, why: "Subtract 0.003 for the smallest size and add 0.003 for the largest." },
            { objective: "O2", q: "A dimension has no tolerance written next to it. Where do you look?", options: ["Ask the machine", "Guess ±0.1", "The general tolerance in the title block", "Any tolerance is fine"], answer: 2, why: "The title block gives the general tolerance for dimensions without their own." }
          ]
        },
        {
          title: "Reading a short CNC program",
          objectives: ["O3"],
          minutes: 6,
          goal: "Explain what each line of a short G-code program does and sketch its toolpath.",
          text: [
            "Most CNC machines read a program written in G-code. Each line, called a block, gives one or a few instructions. G-codes mostly tell the machine how to move. M-codes turn machine functions on and off. Letters with numbers give the details: X, Y and Z are positions, F is the feed rate (how fast the tool moves while cutting), S is the spindle speed, and T picks a tool.",
            "Common codes on many machines: G00 is a rapid move (fast, not cutting). G01 is a straight cutting move at the feed rate. G02 and G03 cut arcs, clockwise and counterclockwise. G20 sets inches and G21 sets millimeters. G90 means positions are measured from the part's zero point (absolute). M03 starts the spindle clockwise, M05 stops it, M08 turns coolant on, M09 turns it off, and M30 ends the program.",
            "Codes can differ from one machine control to another, so a machinist always checks the manual for the machine in front of them. Many shops write programs with CAM software, but machinists still read the code to catch mistakes before the tool moves. A free browser G-code viewer can draw a program's path, but graph paper works just as well for practice."
          ],
          steps: ["Read the first lines: units (G20 or G21) and absolute mode (G90).", "Find the tool (T), spindle speed (S) and spindle start (M03).", "For each move, note the code (G00 or G01) and the X, Y and Z position.", "Plot each X and Y point on graph paper and join them in order: dashed for rapid, solid for cutting.", "Find the end: spindle stop (M05), coolant off (M09) and program end (M30)."],
          words: [["G-code", "the codes, mostly for moves, that a CNC machine reads."], ["M-code", "codes that turn machine functions on or off, like the spindle or coolant."], ["Block", "one line of a CNC program."], ["Feed rate (F)", "how fast the tool moves while it cuts."], ["Spindle speed (S)", "how fast the spindle turns, in revolutions per minute."], ["Toolpath", "the path the tool follows."], ["CAM", "software that turns a 3D model into a CNC program."]],
          slides: [
            { title: "A program is a list of blocks", bullets: ["G-codes: mostly moves", "M-codes: machine functions on and off", "X, Y, Z positions; F feed; S speed; T tool"] },
            { title: "Common G-codes", bullets: ["G00 rapid move, not cutting", "G01 straight cutting move", "G02 / G03 arcs, clockwise / counterclockwise", "G20 inch, G21 mm, G90 absolute"] },
            { title: "Common M-codes", bullets: ["M03 spindle on clockwise, M05 spindle stop", "M08 coolant on, M09 coolant off", "M30 end of program"] },
            { title: "Read it, then plot it", bullets: ["Plot each X and Y point on graph paper", "Dashed line = rapid, solid line = cut", "Codes differ by control: check the machine's manual"] }
          ],
          tryIt: "Practice only, on graph paper (1 square = 0.1 inch). Explain each line, then plot it: G20 G90 / T1 M06 / S1500 M03 / G00 X0 Y0 / G00 Z0.1 / G01 Z-0.05 F5.0 / G01 X1.0 / G01 Y1.0 / G01 X0 / G01 Y0 / G00 Z1.0 / M05 / M30. You should get a 1-inch square cut 0.05 inch deep.",
          youCanNow: "read a short CNC program line by line and sketch the path the tool will follow.",
          quickCheck: [
            { objective: "O3", q: "What does G01 X2.0 F10.0 tell the machine to do?", options: ["Rapid move to X2.0 without cutting", "Stop the spindle", "Turn the coolant on", "Cut in a straight line to X2.0 at feed rate 10"], answer: 3, why: "G01 is a straight cutting move, and F sets the feed rate." },
            { objective: "O3", q: "Which code usually starts the spindle turning clockwise?", options: ["M30", "M03", "G00", "M09"], answer: 1, why: "M03 is spindle on clockwise on most controls; M30 ends the program and M09 is coolant off." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Machines, prints and programs",
        questions: [
          { objective: "O1", q: "A part is a flat aluminum plate with a pocket and four holes. Which machine fits best?", options: ["A CNC lathe", "A CNC mill", "A tape measure", "A drill press only"], answer: 1, why: "A mill makes flat faces, pockets and holes on a part held still on the table." },
          { objective: "O1", q: "On a lathe, which axis runs along the length of the spinning part?", options: ["Z", "X", "Y", "B"], answer: 0, why: "On a lathe, Z runs along the part and X runs across it, setting the diameter." },
          { objective: "O2", q: "A shaft must be 0.500 ±0.001. It measures 0.4995. Does it pass?", options: ["No, it is too small", "No, any size under 0.500 fails", "Yes, it is between 0.499 and 0.501", "You cannot tell"], answer: 2, why: "The limits are 0.499 to 0.501, and 0.4995 is between them." },
          { objective: "O3", q: "A program line reads G00 Z1.0. What happens?", options: ["The tool cuts down 1 inch", "Coolant turns on", "The program ends", "The tool moves fast, not cutting, to Z1.0"], answer: 3, why: "G00 is a rapid move; here it lifts the tool clear to Z1.0." },
          { objective: "O3", q: "Your training machine uses a code you have not seen. What do you do?", options: ["Guess from another machine", "Check the manual for that machine's control", "Delete the line", "Run it and watch"], answer: 1, why: "Codes differ by control, so the machine's own manual is the source." }
        ]
      }
    },
    {
      name: "Chapter 2: Setup, safety and your path",
      lessons: [
        {
          title: "Setting up and making a first part",
          objectives: ["O4"],
          minutes: 6,
          goal: "Put the steps of a safe setup and first part in the right order.",
          text: [
            "Before a shop makes many parts, someone sets up the machine and proves the program. New operators often start by loading parts and checking sizes, then learn setup under a lead machinist.",
            "Setup means: read the print and the setup sheet, clean the table or chuck, hold the part firmly (workholding, such as a vise or chuck), load the right tools, and set the offsets. The work offset tells the machine where the part's zero point is. The tool offset tells it how long each tool is, so the tip lands in the right place.",
            "Then the program is proven slowly. A dry run moves the machine with the tool safely above the part. Single block runs one line at a time. The feed override knob slows the moves, and the operator keeps a hand near the feed hold or emergency stop. After the first part is cut, it is measured against every dimension on the print. This is the first-article inspection. Only when it passes do production parts begin."
          ],
          steps: ["Read the print, setup sheet and program.", "Clean the table, vise or chuck and hold the part firmly.", "Load the tools listed on the setup sheet.", "Set the work offset and tool offsets.", "Dry run above the part, then run single block with the feed override turned down.", "Measure the first part against every dimension (first-article inspection).", "Start production only after the first part passes; keep checking parts as you go."],
          words: [["Setup sheet", "the paper that lists the tools, workholding and offsets for a job."], ["Workholding", "what holds the part still, such as a vise, clamps or a chuck."], ["Work offset", "the setting that tells the machine where the part's zero point is."], ["Tool offset", "the setting for each tool's length (and size), so the tip lands in the right place."], ["Dry run", "running the program with the tool safely clear of the part."], ["First-article inspection", "measuring the first part against the whole print before making more."]],
          slides: [
            { title: "Get ready", bullets: ["Read the print, setup sheet and program", "Clean and hold the part firmly", "Load the right tools"] },
            { title: "Set the offsets", bullets: ["Work offset: where the part's zero is", "Tool offsets: how long each tool is"] },
            { title: "Prove it slowly", bullets: ["Dry run with the tool clear of the part", "Single block, feed override turned down", "Hand near feed hold or emergency stop"] },
            { title: "First part first", bullets: ["Measure every dimension on the print", "Production starts only when it passes", "Keep checking parts during the run"] }
          ],
          tryIt: "Write each of these on a slip of paper, mix them up, then put them in order: set tool offsets; first-article inspection; clean and hold the part; dry run; read the print and setup sheet; single block run; set the work offset; load tools; start production. Check your order against the steps in this lesson.",
          youCanNow: "put the steps of a setup and first part in order and say why the dry run and first-article inspection come before production.",
          quickCheck: [
            { objective: "O4", q: "Which setting tells the machine where the part's zero point is?", options: ["The feed rate", "The tool offset", "The work offset", "The spindle speed"], answer: 2, why: "The work offset locates the part's zero; tool offsets set each tool's length." },
            { objective: "O4", q: "The first part is cut. What comes before running the rest of the job?", options: ["Measure it against every dimension on the print", "Turn the feed override to the maximum", "Remove the guards to see better", "Delete the program"], answer: 0, why: "First-article inspection proves the setup and program before production." }
          ]
        },
        {
          title: "Staying safe in the machine shop",
          objectives: ["O5"],
          minutes: 5,
          goal: "Name a control for each common machine shop hazard.",
          text: [
            "Machines can cause crushed fingers or hands, amputations, burns and blindness. The main hazards are the spinning spindle, chuck and tool, flying chips, sharp hot chips and edges, coolant on the skin, heavy parts and noise. OSHA's machine guarding rules (29 CFR 1910.212) require guards that protect workers from these hazards.",
            "Shop habits: wear safety glasses with side shields at all times, and hearing protection where it is loud. Keep the machine doors and guards closed while it runs, and never reach in until the spindle has fully stopped. Most shops do not allow gloves, loose sleeves, jewelry or loose long hair near a turning spindle, because they can be caught and pull you in. Remove chips with a chip hook or brush, never your hands, and never blow chips at yourself or others. Wash coolant off your skin and read the safety data sheet (SDS).",
            "When a machine is cleaned, repaired or serviced, its power is shut off and locked so no one can start it. This is lockout/tagout, covered by OSHA's rule on hazardous energy (29 CFR 1910.147), and only trained, authorized workers do it. Hands-on safety is taught in the shop by a qualified instructor; follow your shop's rules every time."
          ],
          steps: ["Put on safety glasses with side shields, and hearing protection where needed.", "Remove gloves, jewelry and loose sleeves; tie back long hair.", "Check that guards and doors are in place and closed.", "Wait for the spindle to stop fully before opening the door or reaching in.", "Clear chips with a chip hook or brush, not your hands.", "For cleaning or repairs, follow the shop's lockout/tagout steps."],
          words: [["Guard", "a cover or door that keeps hands and chips away from moving parts."], ["Chips", "the small curls and bits of metal or plastic the tool cuts off; often sharp and hot."], ["Coolant", "the liquid that cools the tool and part and washes chips away."], ["SDS", "safety data sheet: the paper that lists a product's dangers and protection."], ["Lockout/tagout", "shutting off and locking a machine's power so no one can start it during service."]],
          slides: [
            { title: "Machine hazards", bullets: ["Spinning spindle, chuck and tool", "Flying, sharp and hot chips", "Coolant on skin, heavy parts, noise"] },
            { title: "Protect yourself", bullets: ["Safety glasses with side shields, always", "Hearing protection where it is loud", "No gloves, jewelry or loose sleeves near a turning spindle; tie back hair"] },
            { title: "Safe habits", bullets: ["Guards and doors closed while running", "Wait for a full stop before reaching in", "Chip hook or brush, never your hands"] },
            { title: "Service = lockout/tagout", bullets: ["Power off and locked before cleaning or repair", "OSHA 29 CFR 1910.147; trained workers only", "Follow your shop's rules every time"] }
          ],
          sources: [
            { name: "OSHA: Machine Guarding standards", url: "https://www.osha.gov/machine-guarding/standards" },
            { name: "OSHA: Control of Hazardous Energy (Lockout/Tagout)", url: "https://www.osha.gov/control-hazardous-energy" }
          ],
          tryIt: "Make a two-column table on paper: Hazard and Control. Fill in five rows: spinning spindle, flying chips, sharp hot chips, coolant on skin, machine being repaired. Write one control for each, then check them against this lesson.",
          youCanNow: "name the main machine shop hazards and a control for each one.",
          quickCheck: [
            { objective: "O5", q: "A pile of hot chips is building up near the vise. How do you clear it?", options: ["Brush them off with your hand", "Blow them off with air toward a coworker", "Reach in while the spindle turns", "Wait for a full stop, then use a chip hook or brush"], answer: 3, why: "Chips are sharp and hot; a chip hook or brush keeps your hands safe." },
            { objective: "O5", q: "A machine needs a repair inside. What must happen first?", options: ["Turn the feed override down", "Its power is shut off and locked out by an authorized worker", "Open the door while it runs", "Put on gloves"], answer: 1, why: "Lockout/tagout keeps anyone from starting the machine during service." }
          ]
        },
        {
          title: "Training, credentials and your CNC plan",
          objectives: ["O6"],
          minutes: 6,
          goal: "Write a dated plan to get trained and earn a machining credential.",
          text: [
            "Most machinists learn on the job, often starting as machine operators. Community colleges and technical schools offer certificates and two-year degrees that cover blueprint reading and CNC programming and operation. Registered apprenticeships combine paid work with classes and usually last several years. Search for one with the Apprenticeship Job Finder on apprenticeship.gov. Veterans can ask about using their education benefits, and young people can ask about programs at their school or job center.",
            "Credentials show an employer what you can do. The National Institute for Metalworking Skills (NIMS) sets standards and credentials for machining job roles. Most NIMS credentials have two parts: an exam on the knowledge for the role, and a hands-on performance check, such as machining a part to the print. Check the current credential names and requirements on nims-skills.org. Some employers also value CNC or CAD/CAM certificates from a school or a machine maker.",
            "This course prepares you; it does not certify you. Be careful with any program that promises a job or a credential fast for a big fee. Ask the school about shop time on real machines, which credentials it prepares you for, and how many graduates get hired."
          ],
          steps: ["Choose a first goal: operator job, school program or apprenticeship.", "Find two programs near you: a community college or technical school, and an apprenticeship on apprenticeship.gov.", "Look up the NIMS credential for the job role you want on nims-skills.org.", "Ask each program about machine time, credentials, cost and job placement.", "Write a date for each step: apply, start, practice, test."],
          words: [["Apprenticeship", "a paid job with on-the-job training and classes, often for several years."], ["Credential", "proof, such as a certificate, that you passed a test of your skills."], ["NIMS", "the National Institute for Metalworking Skills, which sets machining standards and credentials."], ["Performance check", "a hands-on test where you do the task, such as machining a part to the print."]],
          slides: [
            { title: "Ways in", bullets: ["Start as a machine operator and learn on the job", "Community college or technical school certificate", "Registered apprenticeship: paid work plus classes"] },
            { title: "Credentials", bullets: ["NIMS: machining standards and credentials", "Usually an exam plus a hands-on performance check", "Check current names and steps on nims-skills.org"] },
            { title: "Choose a program wisely", bullets: ["Ask about time on real machines", "Ask which credentials it prepares you for", "Be careful with fast, expensive promises"] },
            { title: "Your dated plan", bullets: ["Two programs, one credential", "A date to apply, start, practice and test"] }
          ],
          tryIt: "Final task: make your CNC starter plan. Sketch a mill and a lathe with their axes, work out the limits for three toleranced sizes, write and explain a short program for a square or slot and plot it, write your setup and safety checklist, and write a dated plan with two programs near you and one NIMS credential from the official site.",
          youCanNow: "find machining training near you, name the credential you will aim for, and follow a dated plan to get there.",
          quickCheck: [
            { objective: "O6", q: "Where can you search for registered apprenticeships in the US?", options: ["A job ad that asks for a fee to apply", "A social media post", "The Apprenticeship Job Finder on apprenticeship.gov", "A text from a stranger"], answer: 2, why: "Apprenticeship.gov is the official US Department of Labor site with a job finder." },
            { objective: "O6", q: "What do most NIMS credentials include?", options: ["An exam and a hands-on performance check", "Only an online video", "Only a fee", "A note from a friend"], answer: 0, why: "NIMS describes an exam on the role's knowledge plus a performance evaluation." }
          ],
          sources: [
            { name: "NIMS: Credentialing", url: "https://www.nims-skills.org/credentialing" },
            { name: "Apprenticeship.gov (US Department of Labor)", url: "https://www.apprenticeship.gov/" },
            { name: "BLS Occupational Outlook Handbook: Machinists and Tool and Die Makers", url: "https://www.bls.gov/ooh/production/machinists-and-tool-and-die-makers.htm" }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Setup, safety and your path",
        questions: [
          { objective: "O4", q: "Why do a dry run before cutting the first part?", options: ["To find program mistakes with the tool safely clear of the part", "To make the machine faster", "To skip the first-article inspection", "To warm up the coolant"], answer: 0, why: "A dry run shows the moves without cutting, so mistakes are caught safely." },
          { objective: "O4", q: "Which step comes right after holding the part and loading the tools?", options: ["Start production", "First-article inspection", "Set the work offset and tool offsets", "Ship the parts"], answer: 2, why: "Offsets must be set before the program can be proven and the first part cut." },
          { objective: "O5", q: "Why do most shops ban gloves near a turning spindle?", options: ["They make your hands cold", "They can be caught and pull your hand in", "They cost too much", "They hide your tattoos"], answer: 1, why: "A spinning spindle or tool can grab a glove and pull the hand in." },
          { objective: "O5", q: "Which protection do you wear at all times in a machine shop?", options: ["A hard hat only", "Gloves", "Sandals", "Safety glasses with side shields"], answer: 3, why: "Flying chips can blind you, so eye protection is worn at all times." },
          { objective: "O6", q: "A school promises a CNC job in one week for a large fee. What do you do?", options: ["Ask about machine time, credentials and hiring, and compare other programs", "Pay right away", "Give them your bank login", "Sign without reading"], answer: 0, why: "Checking what a program really offers protects your time and money." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: CNC Machining Basics",
    questions: [
      { objective: "O1", q: "What does CNC stand for?", options: ["Central number cutting", "Computer numerical control", "Cut now carefully", "Cold nickel coating"], answer: 1, why: "CNC means computer numerical control." },
      { objective: "O1", q: "Which part is most likely made on a CNC lathe?", options: ["A flat bracket with slots", "A sheet metal box", "A round shaft", "A wooden sign"], answer: 2, why: "A lathe spins the part, so it makes round parts like shafts." },
      { objective: "O1", q: "On a vertical mill, which axis moves toward you and away from you?", options: ["Y", "Z", "X", "C"], answer: 0, why: "On a vertical mill, Y moves toward and away from the operator." },
      { objective: "O2", q: "What is a tolerance?", options: ["The part's material", "The machine's speed", "How far a size may be off and still be good", "The name of the part"], answer: 2, why: "A tolerance is the allowed error on a size." },
      { objective: "O2", q: "A print says 3.000 ±0.005. Which measured size fails?", options: ["2.996", "3.004", "3.000", "3.006"], answer: 3, why: "The limits are 2.995 to 3.005, so 3.006 is too big." },
      { objective: "O2", q: "Where do you find the units and the general tolerance on a print?", options: ["In the program", "In the title block", "On the machine door", "On the setup sheet only"], answer: 1, why: "The title block lists the part, material, units and general tolerance." },
      { objective: "O2", q: "Which tool measures more precisely over a small range?", options: ["A micrometer", "A tape measure", "A ruler", "A chip hook"], answer: 0, why: "A micrometer is more precise than calipers or a ruler over its small range." },
      { objective: "O3", q: "Which code is usually a rapid move, not cutting?", options: ["G01", "G02", "M08", "G00"], answer: 3, why: "G00 is a rapid positioning move." },
      { objective: "O3", q: "In a CNC program, what does the F word set?", options: ["The tool number", "The feed rate while cutting", "The spindle speed", "The file name"], answer: 1, why: "F is the feed rate; S is spindle speed and T is the tool." },
      { objective: "O3", q: "A program starts with G21. What does that set?", options: ["Inches", "Coolant on", "Millimeters", "End of program"], answer: 2, why: "G21 sets millimeters; G20 sets inches." },
      { objective: "O3", q: "Which code usually ends the program?", options: ["M30", "M03", "G01", "G90"], answer: 0, why: "M30 ends the program on most controls." },
      { objective: "O4", q: "What does the tool offset tell the machine?", options: ["Where the part's zero point is", "How fast to cut", "Which coolant to use", "How long each tool is, so the tip lands right"], answer: 3, why: "Tool offsets set each tool's length; the work offset sets the part zero." },
      { objective: "O4", q: "When proving a new program, which is a safe way to run it?", options: ["Full speed with the door open", "Single block with the feed override turned down", "Skip the dry run", "Leave the machine while it runs"], answer: 1, why: "Single block and a low feed override let you stop before a mistake." },
      { objective: "O4", q: "What is first-article inspection?", options: ["Reading the first page of the manual", "Cleaning the first chip", "Measuring the first part against every dimension on the print", "Loading the first tool"], answer: 2, why: "The first part is measured fully before production starts." },
      { objective: "O5", q: "The spindle is slowing down but has not stopped. What do you do?", options: ["Wait until it fully stops before opening the door", "Reach in to grab the part", "Stop it with your hand", "Open the door to look closer"], answer: 0, why: "Never reach in until the spindle has fully stopped." },
      { objective: "O5", q: "Which OSHA rule covers lockout/tagout of hazardous energy?", options: ["29 CFR 1910.212", "29 CFR 1910.178", "29 CFR 1910.215", "29 CFR 1910.147"], answer: 3, why: "29 CFR 1910.147 is OSHA's control of hazardous energy (lockout/tagout) rule." },
      { objective: "O5", q: "Coolant got on your arms. What do you do?", options: ["Ignore it", "Wash it off and check the SDS for protection", "Wipe it on your shirt", "Add more coolant"], answer: 1, why: "Coolant can irritate skin; wash it off and follow the SDS." },
      { objective: "O6", q: "What does this course give you?", options: ["A NIMS credential", "A state license", "Preparation for training and a credential test", "A guaranteed job"], answer: 2, why: "The course prepares you; credentials come from passing tests such as NIMS exams and performance checks." },
      { objective: "O6", q: "Where do you check the current NIMS credential names and requirements?", options: ["A social media post", "nims-skills.org", "A video comment", "Any job ad"], answer: 1, why: "The official NIMS site has the current credentials and requirements." },
      { objective: "O6", q: "Which belongs in a good CNC starter plan?", options: ["Two programs, one credential and a date for each step", "Only a wish to work in a factory", "A fee paid to a stranger", "No dates, so it stays flexible"], answer: 0, why: "A plan with named programs, a credential and dates turns the goal into steps." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Pre-Test: What Do You Already Know?", from: [1, 2, 4, 5, 7, 9, 11, 14, 15, 17] },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      { name: "Machines and axes", objective: "O1", notYet: "The sketch mixes up the mill and the lathe, or the axes are missing or wrong.", meets: "The mill and lathe are sketched with X, Y and Z marked correctly.", exceeds: "Also names a part each machine makes and where a 5-axis machine adds motion." },
      { name: "Print reading", objective: "O2", notYet: "One or more limits are wrong, or the pass/fail call is wrong.", meets: "All three dimensions have the right limits and a correct pass/fail call.", exceeds: "Also shows a millimeter example and says which tool they would measure each size with." },
      { name: "Program and toolpath", objective: "O3", notYet: "Lines are not explained, or the plotted path does not match the code.", meets: "Each line is explained and the sketched path matches the code, rapids and cuts marked.", exceeds: "Also spots and fixes one mistake planted in the program by a partner or instructor." },
      { name: "Setup and safety checklist", objective: "O5", notYet: "The checklist leaves out guards, eye protection, clothing or chips.", meets: "Covers guards, eye and hearing protection, clothing, chips, coolant and lockout for service.", exceeds: "Also explains why each item matters in one short line." },
      { name: "Setup order", objective: "O4", notYet: "Production starts before the dry run or first-article inspection.", meets: "Steps are in order, with offsets, a dry run and first-article inspection before production.", exceeds: "Also adds in-process checks during the run." },
      { name: "Dated plan", objective: "O6", notYet: "No real programs, no credential, or no dates.", meets: "Two real programs near the learner, one NIMS credential from the official site and a date for each step.", exceeds: "Also lists questions asked of each program and the answers." }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Learners who apply to a machining program, apprenticeship or operator job within 90 days",
      "Learners who earn a NIMS or other machining credential within one year",
      "Learners hired as a machine operator, CNC operator or apprentice, and partner employers' reports of new hires' readiness"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A phone or library computer for official pages (nims-skills.org, apprenticeship.gov)",
      "Graph paper, a pencil, a ruler and a calculator",
      "Optional: a free browser G-code viewer to check plotted toolpaths",
      "Optional, with an instructor: calipers and a micrometer to practice reading on sample parts",
      "About 75 minutes in total, in short sessions: lessons, practice, checks and the final task"
    ],
    facilitatorNotes: [
      "Take the pre-test together, then do one chapter per session with the \"Try it now\" tasks done live.",
      "No machine work in this course. If you run it in a shop, learners only look and do not touch machines unless a qualified instructor is supervising with all guards and safety gear in place.",
      "Remind learners that G-code differs by control; if your program uses a specific machine, hand out its code list.",
      "For the toolpath task, plant one mistake in a short program (a missing M05 or a wrong X value) and have partners find it.",
      "Score the final task with the rubric and give feedback on one Not yet row at a time.",
      "Invite a local machinist, apprenticeship sponsor or community college instructor to talk about real jobs and training in your area."
    ]
  }
};
