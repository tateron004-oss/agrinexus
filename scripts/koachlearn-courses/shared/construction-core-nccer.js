"use strict";

// Koach Learn course: Workforce Development -> "Construction Core Skills (NCCER Core Preparation)" (wave 3, 30 October 2026).
// Prepares learners for NCCER Core training and testing; it does not grant an NCCER credential. Hands-on skills are learned and
// checked in person at an NCCER-accredited program with a qualified instructor. Facts checked on nccer.org and osha.gov, 30 October 2026.

module.exports = {
  id: "construction-core-nccer",
  category: "Workforce Development",
  name: "Construction Core Skills (NCCER Core Preparation)",
  skills: "Spotting job-site hazards and their controls, Reading a tape measure and doing construction math, Choosing and checking hand and power tools, Reading basic construction drawings, Handling materials safely, Planning NCCER Core training and testing",
  outcome: "get ready for NCCER Core training: name the main job-site hazards and how to control them, read a tape measure to the sixteenth of an inch, turn a simple drawing into a cut list, check a tool before you use it, plan a safe lift, and write a dated plan to train and test at an NCCER-accredited center.",
  about: [
    "NCCER Core is the starting curriculum for most construction crafts in the United States, such as carpentry, electrical, plumbing, HVAC and welding. Many high schools, community colleges, re-entry programs, veterans' programs and pre-apprenticeships teach it. This course is for anyone who wants a head start: young people, career changers, veterans and people coming home from prison.",
    "You will practice the core knowledge: job-site safety, construction math with a tape measure, hand and power tools, reading drawings, handling materials and being a good crew member. At the end you make a real prep pack: a practice cut list and a dated plan to train and test.",
    "This course PREPARES you. It does not grant an NCCER credential. NCCER credentials are earned through NCCER-accredited training locations, with written tests and hands-on tasks you perform for a qualified evaluator. Tools, ladders and lifting are learned in person with an instructor, never alone from a video.",
    "Each lesson takes about five minutes. Read it, watch the slides, then do the \"Try it now\" task with paper, a pencil and, if you have one, a tape measure. A short check follows each lesson and each chapter, and a 20-question quiz closes the course."
  ],
  finalTask: "Make your Core prep pack. Part 1: from a simple drawing of a wooden frame 36 inches wide and 24 inches tall made of boards 3/4 inch thick, write a cut list (piece, how many, length to the sixteenth of an inch), name the saw you would use and three checks you make before you use it, plan how you would carry and stack the boards, and name the Focus Four hazards that could apply on a real site with a control for each. Part 2: write a training-and-test plan: the nearest NCCER-accredited center or program (from the Find a Center page), the Core modules you will study, a start date, a weekly study time, and a target date for your Core tests.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Job seekers who want to start in construction: young adults leaving high school, career changers, veterans and people coming home from prison. Some will join a pre-apprenticeship, apprenticeship or job program that teaches NCCER Core; others want to show an employer they are ready to learn.",
    startingPoint: "Can read short instructions and do whole-number math. Many have never read a tape measure past the inch marks, worked with fractions since school, read a construction drawing or used power tools under a safety rule.",
    gap: "Construction employers and apprenticeship programs expect new workers to know basic safety, measuring, tools and drawings from day one. Learners who arrive with that knowledge learn faster in hands-on training, are safer on site and are more likely to finish Core and move into a craft.",
    constraints: [
      "Reading level: plain words and short sentences (about grade 6 to 8); every trade word explained",
      "Devices: a phone or library computer; practice works on paper, with a tape measure if the learner has one",
      "Time: 4 to 6 minute lessons that fit around work and appointments",
      "Safety: no power-tool, ladder or lifting practice alone; these are learned with an instructor",
      "The course prepares only; NCCER credentials come from accredited programs, and requirements can change"
    ],
    prerequisites: "Whole-number math and reading short instructions. \"Everyday Math\" and \"Workplace Safety Basics (OSHA)\" are helpful but not required."
  },
  // ---- ADDIE: Design ----
  objectives: [
    { id: "O1", condition: "Given a job-site scene or a list of tasks", action: "identify the Focus Four hazards and name a control for each one", standard: "getting at least 4 of 5 right, including the 6-foot fall protection rule and the ladder rules" },
    { id: "O2", condition: "Using a tape measure or a drawing of one, and paper", action: "read measurements to the nearest 1/16 inch and add, subtract and convert feet and inches", standard: "with at least 4 of 5 answers exactly right" },
    { id: "O3", condition: "Given a cutting, drilling or fastening task", action: "choose a suitable hand or power tool and list the safety checks to make before using it", standard: "naming at least three correct checks, including guards, cord and power off when changing a blade or bit" },
    { id: "O4", condition: "Given a simple construction drawing", action: "find the title block, scale, views and dimensions and turn them into a cut list", standard: "with every length correct to the nearest 1/16 inch" },
    { id: "O5", condition: "Given a load of materials to move or store", action: "plan a safe lift, carry and stack, including when to get help or equipment", standard: "covering the weight check, path, lifting posture and stacking" },
    { id: "O6", condition: "Using the NCCER website and your own calendar", action: "write a training-and-test plan for NCCER Core with a center, modules and dates", standard: "with a real center or program, every Core module listed and a target test date" }
  ],
  chapters: [
    {
      name: "Chapter 1: Safety, math and measuring",
      lessons: [
        {
          title: "What NCCER Core is and how credentials are earned",
          objectives: ["O6"],
          minutes: 5,
          goal: "Explain what NCCER Core covers and how a learner earns an NCCER credential.",
          text: [
            "NCCER is the National Center for Construction Education and Research. It writes training for construction crafts and keeps a record of the credentials people earn. Core is the starting curriculum that most crafts build on.",
            "In the Core 6th edition, the modules are: Basic Safety (Construction Site Safety Orientation), Introduction to Construction Math, Introduction to Hand Tools, Introduction to Power Tools, Introduction to Construction Drawings, Basic Communication Skills, Basic Employability Skills and Introduction to Materials Handling. Build Your Future in Construction and Introduction to Basic Rigging are electives. Check the Core page, because editions change.",
            "NCCER credentials are earned at accredited training locations. You take written tests on what you know, and you perform tasks safely while an evaluator watches. Your results are tracked under your own NCCER number so employers can check them online.",
            "Core is often taught in high schools, community colleges, job and re-entry programs and pre-apprenticeships. Use NCCER's Find a Center page to look for one near you. This course gets you ready; it does not give you the credential."
          ],
          steps: ["Open nccer.org and find the Core page in the craft catalog.", "Write down the Core modules for the current edition.", "Open the Find a Center page and search near you.", "Write down two places near you and how to contact them."],
          words: [["NCCER", "National Center for Construction Education and Research: the group that writes this construction training and tracks credentials."], ["Core", "the first NCCER curriculum; most construction crafts start with it."], ["Module", "one unit of a curriculum, like one chapter of a book, with its own test."], ["Credential", "proof that you passed training and tests, which an employer can check."], ["Accredited", "approved by NCCER to train and test learners for NCCER credentials."], ["Pre-apprenticeship", "a short program that prepares you to get into an apprenticeship."]],
          slides: [
            { title: "NCCER Core", bullets: ["The starting curriculum for most construction crafts", "Carpentry, electrical, plumbing, HVAC, welding build on it"] },
            { title: "Core 6th edition modules", bullets: ["Safety, math, hand tools, power tools, drawings", "Communication, employability, materials handling", "Electives: Build Your Future, Basic Rigging"] },
            { title: "How you earn it", bullets: ["Train at an NCCER-accredited location", "Pass written tests", "Perform tasks safely for an evaluator", "Results tracked under your NCCER number"] },
            { title: "This course", bullets: ["Gets you ready", "Does not grant the credential", "Use Find a Center to locate a program"] }
          ],
          sources: [
            { name: "NCCER: Core curriculum (craft catalog)", url: "https://www.nccer.org/craft-catalog/core/" },
            { name: "NCCER: Industry-recognized credentials", url: "https://www.nccer.org/credentials-certifications/industry-recognized-credentials/" },
            { name: "NCCER: Find a Center", url: "https://www.nccer.org/find-a-center/" },
            { name: "Apprenticeship.gov: What is a pre-apprenticeship?", url: "https://www.apprenticeship.gov/help/what-pre-apprenticeship" }
          ],
          tryIt: "Open the NCCER Core page and the Find a Center page. On paper, write the Core modules and the names of two places near you that teach or test NCCER. If you cannot get online, write the modules from this lesson and ask your local American Job Center which programs teach NCCER Core.",
          youCanNow: "say what NCCER Core covers, how its credentials are earned, and where to look for a program near you.",
          quickCheck: [
            { objective: "O6", q: "Where are NCCER credentials earned?", options: ["From any online video course", "At an NCCER-accredited training location", "By buying a certificate online", "From your state's DMV"], answer: 1, why: "NCCER credentials come from accredited locations, with written tests and hands-on tasks." },
            { objective: "O6", q: "What does this Koach Learn course do?", options: ["Grants your NCCER Core credential", "Replaces the hands-on tests", "Prepares you for Core training and testing", "Makes you a licensed contractor"], answer: 2, why: "It prepares you; the credential comes from an accredited program." }
          ]
        },
        {
          title: "Job-site safety: the Focus Four and their controls",
          objectives: ["O1"],
          minutes: 6,
          goal: "Identify the Focus Four hazards on a job site and name a control for each.",
          text: [
            "OSHA calls the four biggest killers in construction the Focus Four: falls, struck-by, caught-in or -between, and electrocution. Basic Safety in Core starts here.",
            "Falls: OSHA requires fall protection at six feet or more in construction, such as guardrails, safety nets or a personal fall arrest system. Cover or guard holes. On a portable ladder used to reach an upper level, the side rails must go at least 3 feet above the landing, and the foot sits about one foot out for every four feet of height (the 4-to-1 rule).",
            "Struck-by: wear a hard hat and high-visibility vest, stay out from under loads, and never stand behind a backing vehicle. Caught-in or -between: stay out of unprotected trenches and keep away from moving parts and swinging equipment. Electrocution: look up for power lines, use tools on GFCI-protected outlets, and never work on live circuits unless you are trained and authorized.",
            "PPE is the last line of defense. Safety glasses, hard hat, gloves, hearing protection and boots protect you, but removing or guarding the hazard comes first. If something looks unsafe, stop and tell your supervisor."
          ],
          steps: ["Look at the task and the area around it.", "Ask: can someone fall, be hit, be caught, or touch electricity?", "Name the control: guard, cover, distance, protection or shutting off power.", "Put on the right PPE.", "If you cannot control it, stop and tell your supervisor."],
          words: [["Focus Four", "OSHA's name for the four leading causes of construction deaths: falls, struck-by, caught-in or -between, and electrocution."], ["Fall protection", "guardrails, safety nets or a harness system that stop or prevent a fall."], ["GFCI", "ground-fault circuit interrupter: a device that cuts power fast when current leaks, to prevent shock."], ["PPE", "personal protective equipment: hard hat, safety glasses, gloves, boots, hearing protection, vest."], ["Control", "a way to remove or reduce a hazard."]],
          slides: [
            { title: "The Focus Four", bullets: ["Falls", "Struck-by", "Caught-in or -between", "Electrocution"] },
            { title: "Falls", bullets: ["Fall protection at 6 feet or more in construction", "Cover or guard holes", "Ladder rails 3 feet above the landing; 4-to-1 angle"] },
            { title: "Struck-by, caught-in, electrocution", bullets: ["Hard hat, vest, stay out from under loads", "No unprotected trenches; keep clear of moving parts", "Look up for power lines; use GFCI; no live work untrained"] },
            { title: "PPE is the last line", bullets: ["Remove or guard the hazard first", "Then wear the right PPE", "Unsafe? Stop and tell your supervisor"] }
          ],
          sources: [
            { name: "OSHA: Construction Focus Four training", url: "https://www.osha.gov/training/outreach/construction/focus-four" },
            { name: "OSHA: Fall protection", url: "https://www.osha.gov/fall-protection" },
            { name: "OSHA: 29 CFR 1926.1053, Ladders", url: "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1053" }
          ],
          tryIt: "Draw a simple job site on paper: a two-story house frame, a ladder, a trench, a power line and a truck. Mark one Focus Four hazard for each and write the control next to it. Then work out how far out the foot of a ladder should be if it reaches 16 feet up (answer: about 4 feet).",
          youCanNow: "name the Focus Four hazards, give a control for each, and use the 6-foot and ladder rules.",
          quickCheck: [
            { objective: "O1", q: "A worker is on a roof edge 10 feet up with no guardrail. What applies?", options: ["Nothing, it is under 20 feet", "Only a hard hat is needed", "Gloves solve the problem", "Fall protection is needed at 6 feet or more"], answer: 3, why: "OSHA requires fall protection at six feet or more in construction." },
            { objective: "O1", q: "A ladder reaches 12 feet up a wall. About how far out should its foot be?", options: ["3 feet", "6 feet", "1 foot", "12 feet"], answer: 0, why: "The 4-to-1 rule: 1 foot out for every 4 feet up, so 12 / 4 = 3 feet." }
          ]
        },
        {
          title: "Construction math: the tape measure and fractions",
          objectives: ["O2"],
          minutes: 6,
          goal: "Read a tape measure to the nearest 1/16 inch and add and convert feet and inches.",
          text: [
            "Most tape measures in US construction mark each inch in sixteenths. The longest line in the middle of an inch is 1/2. The next shorter lines are 1/4 and 3/4, then the eighths, then the shortest lines are sixteenths. Count the small lines past the last whole inch: 6 small lines past 5 inches is 5 6/16, which reduces to 5 3/8.",
            "To reduce, divide the top and bottom by 2 until the top is odd: 12/16 = 6/8 = 3/4. To add fractions, give them the same bottom number: 2 3/4 + 1 5/8 = 2 6/8 + 1 5/8 = 3 11/8 = 4 3/8.",
            "One foot is 12 inches. To change feet to inches, multiply by 12 and add the extra inches: 7 feet 4 inches = 84 + 4 = 88 inches. To change inches to feet, divide by 12; the remainder is inches: 100 inches = 8 feet 4 inches.",
            "Check square with the 3-4-5 rule: measure 3 feet along one side and 4 feet along the other; if the diagonal between those marks is 5 feet, the corner is square. Measure twice, cut once."
          ],
          steps: ["Find the last whole inch before the end of what you measure.", "Count the sixteenth lines past it.", "Write the number as sixteenths, then reduce.", "For feet and inches, multiply feet by 12 and add the inches.", "Check your answer by measuring again."],
          words: [["Sixteenth", "1/16 of an inch, the smallest mark on most construction tape measures."], ["Reduce", "write a fraction with smaller numbers that mean the same, like 8/16 = 1/2."], ["Square", "a corner of exactly 90 degrees."], ["3-4-5 rule", "a way to check a corner is square: 3 and 4 along the sides make 5 on the diagonal."]],
          slides: [
            { title: "Reading the tape", bullets: ["Each inch is split into 16", "Longest middle line: 1/2", "Then 1/4 and 3/4, then eighths, then sixteenths"] },
            { title: "Fractions on the job", bullets: ["Reduce: 12/16 = 6/8 = 3/4", "Same bottom number to add: 2 3/4 + 1 5/8 = 4 3/8"] },
            { title: "Feet and inches", bullets: ["1 foot = 12 inches", "7 ft 4 in = 88 in", "100 in = 8 ft 4 in"] },
            { title: "Check square", bullets: ["3 feet one way, 4 feet the other", "Diagonal of 5 feet = square", "Measure twice, cut once"] }
          ],
          tryIt: "On paper, solve: (1) 9 feet 7 inches in inches; (2) 3 7/16 + 2 5/8; (3) 50 inches in feet and inches; (4) 10/16 reduced. Answers: 115 inches; 6 1/16; 4 feet 2 inches; 5/8. If you have a tape measure, measure a table, a door and a book to the nearest 1/16 inch.",
          youCanNow: "read a tape measure to 1/16 inch, reduce and add fractions, convert feet and inches, and check a corner for square.",
          quickCheck: [
            { objective: "O2", q: "What is 6 feet 3 inches in inches?", options: ["63 inches", "75 inches", "72 inches", "93 inches"], answer: 1, why: "6 x 12 = 72, plus 3 = 75 inches." },
            { objective: "O2", q: "What is 2 1/2 + 1 3/8?", options: ["3 4/10", "3 1/2", "3 7/8", "4 1/8"], answer: 2, why: "2 4/8 + 1 3/8 = 3 7/8." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Safety, math and measuring",
        questions: [
          { objective: "O6", q: "Which of these is a required module in NCCER Core, 6th edition?", options: ["Introduction to Construction Math", "Advanced Pipe Welding", "Commercial Driving", "Real Estate Law"], answer: 0, why: "Introduction to Construction Math is one of the Core modules." },
          { objective: "O1", q: "Which is NOT one of OSHA's Focus Four hazards?", options: ["Falls", "Electrocution", "Paperwork errors", "Struck-by"], answer: 2, why: "The Focus Four are falls, struck-by, caught-in or -between, and electrocution." },
          { objective: "O1", q: "You plug in a saw on a job site. What protects you from shock if current leaks?", options: ["A longer cord", "Wet gloves", "Taping the plug", "A GFCI"], answer: 3, why: "A GFCI cuts power fast when current leaks." },
          { objective: "O2", q: "You count 10 sixteenth marks past 4 inches. What is the measurement?", options: ["4 1/10", "4 5/8", "4 3/4", "4 1/2"], answer: 1, why: "10/16 reduces to 5/8, so 4 5/8 inches." },
          { objective: "O2", q: "You measure 3 feet and 4 feet along two sides of a corner. The diagonal is 5 feet 2 inches. What does it mean?", options: ["The corner is square", "The tape is broken", "The corner is not square yet", "You must use 6 feet instead"], answer: 2, why: "A square corner gives exactly 5 feet on the diagonal." }
        ]
      }
    },
    {
      name: "Chapter 2: Tools, drawings and your plan",
      lessons: [
        {
          title: "Hand and power tools: choose, check and use safely",
          objectives: ["O3"],
          minutes: 6,
          goal: "Choose a suitable tool for a task and list the safety checks before using it.",
          text: [
            "Pick the tool made for the job. A claw hammer drives and pulls nails; a tape measure, speed square and level mark and check; a handsaw or circular saw cuts boards; a drill drives screws and makes holes; a utility knife scores drywall. Using the wrong tool, like a screwdriver as a chisel, causes injuries and damage.",
            "Before you use any tool, inspect it. Hand tools: no loose heads, cracked handles or mushroomed striking faces. Power tools: guards in place and working, cord and plug with no cuts or missing ground pin, switch works, blade or bit sharp and the right type.",
            "When you change a blade or bit, unplug the tool or take the battery out. Never carry a tool by its cord or yank the cord out. Keep cords out of walkways. Wear safety glasses every time, and hearing protection with loud tools.",
            "Tool use is a hands-on skill. Learn and practice each power tool with an instructor before you use it on your own, and follow the maker's manual and your site's rules."
          ],
          steps: ["Choose the tool made for the task.", "Inspect it: handle, head, guard, cord, plug, switch, blade or bit.", "Put on safety glasses and other PPE.", "Unplug or remove the battery before changing a blade or bit.", "Tag and report a damaged tool; do not use it."],
          words: [["Guard", "a cover on a power tool that keeps your hands away from the blade or moving parts."], ["Ground pin", "the round third prong on a plug that helps prevent shock."], ["Speed square", "a triangle-shaped tool for marking straight and angled lines."], ["Mushroomed", "when the striking end of a chisel or punch spreads out from being hit; pieces can fly off."]],
          slides: [
            { title: "Right tool, right job", bullets: ["Hammer: drive and pull nails", "Saw: cut; drill: holes and screws", "Square and level: mark and check"] },
            { title: "Inspect before use", bullets: ["Hand tools: no loose heads or cracked handles", "Power tools: guard, cord, plug, switch, blade"] },
            { title: "Safe habits", bullets: ["Unplug before changing a blade or bit", "Never carry by the cord", "Safety glasses every time"] },
            { title: "Hands-on with an instructor", bullets: ["Practice each power tool with a trainer first", "Follow the manual and site rules", "Tag and report damaged tools"] }
          ],
          sources: [
            { name: "OSHA: Hand and power tools", url: "https://www.osha.gov/hand-power-tools" }
          ],
          tryIt: "For each task, write the tool and three checks you would make: (1) cut a 2x4 to length; (2) drive screws into a deck board; (3) pull a bent nail. Example for (1): circular saw; guard closes on its own, cord and plug undamaged, blade sharp and tight.",
          youCanNow: "choose a tool for a task, inspect it, and follow the safe habits for hand and power tools.",
          quickCheck: [
            { objective: "O3", q: "You need to change the blade on a circular saw. What do you do first?", options: ["Unplug the saw", "Hold the trigger down", "Remove the guard for good", "Ask a coworker to hold it running"], answer: 0, why: "Unplugging, or taking the battery out, stops the saw from starting while your hands are on the blade." },
            { objective: "O3", q: "The plug on an extension cord is missing its ground pin. What do you do?", options: ["Use it if you hurry", "Tape over the hole", "Take it out of use and report it", "Cut off the plug"], answer: 2, why: "A damaged plug is a shock hazard; tag it out and report it." }
          ]
        },
        {
          title: "Reading construction drawings and making a cut list",
          objectives: ["O4", "O2"],
          minutes: 6,
          goal: "Find the title block, scale, views and dimensions on a drawing and write a cut list from it.",
          text: [
            "Construction drawings, also called plans or blueprints, show what to build. Start with the title block: the project name, sheet number, date, who drew it and the scale. The legend explains the symbols and abbreviations.",
            "Drawings show different views. A plan view looks down from above. An elevation looks straight at one side. A section is a slice through the building that shows the inside. A detail is a close-up of one part.",
            "The scale tells you how the drawing relates to real size. At 1/4 inch = 1 foot, a line 2 1/2 inches long is 10 feet. Always use the written dimensions; if a written dimension is missing or does not fit, ask your supervisor instead of measuring the paper.",
            "A cut list turns a drawing into pieces to cut: name, how many, length. For a frame 36 inches wide and 24 inches tall made of 3/4 inch boards, with the side pieces fitted between the top and bottom: top and bottom are 2 at 36 inches; the sides are 2 at 24 - 3/4 - 3/4 = 22 1/2 inches."
          ],
          steps: ["Read the title block: project, sheet, date and scale.", "Read the legend for symbols.", "Find the view you need: plan, elevation, section or detail.", "Write the dimensions for each part.", "Subtract for parts that overlap, then write the cut list: piece, how many, length."],
          words: [["Title block", "the box on a drawing with the project name, sheet number, date and scale."], ["Scale", "how the drawing size relates to real size, like 1/4 inch = 1 foot."], ["Plan view", "a drawing looking down from above."], ["Elevation", "a drawing looking straight at one side."], ["Cut list", "a list of pieces to cut, with how many and how long."]],
          slides: [
            { title: "Start with the title block", bullets: ["Project, sheet number, date", "The scale", "Then the legend for symbols"] },
            { title: "Four views", bullets: ["Plan: from above", "Elevation: one side", "Section: a slice; detail: a close-up"] },
            { title: "Scale and dimensions", bullets: ["1/4 inch = 1 foot: 2 1/2 inches on paper = 10 feet", "Use written dimensions; do not measure the paper", "Missing or wrong? Ask your supervisor"] },
            { title: "Making a cut list", bullets: ["Piece, how many, length", "Subtract where parts overlap", "36 x 24 frame: 2 at 36 in, 2 at 22 1/2 in"] }
          ],
          tryIt: "Draw a box on paper and label it 48 inches wide and 30 inches tall, made of 3/4 inch boards, with the sides fitted between the top and bottom. Write the cut list. Answer: 2 at 48 inches and 2 at 28 1/2 inches. Then: at 1/4 inch = 1 foot, how long is a wall drawn 3 3/4 inches long? (Answer: 15 feet.)",
          youCanNow: "read the title block, scale and views of a simple drawing and turn its dimensions into a cut list.",
          quickCheck: [
            { objective: "O4", q: "Where do you find the scale and sheet number on a drawing?", options: ["In the section view", "In the title block", "On the back of the sheet", "In the legend of symbols only"], answer: 1, why: "The title block holds the project name, sheet number, date and scale." },
            { objective: "O4", q: "The scale is 1/4 inch = 1 foot. A wall is drawn 2 inches long. How long is it?", options: ["2 feet", "4 feet", "6 feet", "8 feet"], answer: 3, why: "2 inches is eight quarter inches, so 8 feet." }
          ]
        },
        {
          title: "Materials handling, teamwork and your Core plan",
          objectives: ["O5", "O6"],
          minutes: 6,
          goal: "Plan a safe lift and carry of materials and write a dated training-and-test plan for NCCER Core.",
          text: [
            "Before you lift, size up the load: how heavy, how big, any sharp edges. Check your path for trips and doorways. If it is heavy or awkward, get a coworker or use a cart, dolly or other equipment you are trained on. Lift with your legs: feet apart, bend your knees, keep the load close, do not twist. Turn with your feet.",
            "Stack materials on flat, solid ground, heavy items low, and use blocking or cross-stacking so piles do not slide or roll. Keep walkways and exits clear. Carry long boards with the front end high and watch the back end when you turn.",
            "Good crew members show up on time, ready, with their PPE. They listen, repeat instructions back (\"Cut four at 22 and a half, got it\"), ask when unsure, and report hazards right away. Core teaches these as Basic Communication and Basic Employability Skills.",
            "Now make your plan. Choose a center or program, list the Core modules, pick a start date and a weekly study time, and set a target date for your tests. Put the dates in your calendar and tell someone who will check on you."
          ],
          steps: ["Size up the load and the path.", "Get help or equipment for heavy or awkward loads.", "Lift with your legs, keep it close, do not twist.", "Stack on solid ground, heavy low, walkways clear.", "Write your plan: center, modules, start date, weekly time, test date."],
          words: [["Blocking", "pieces of wood placed to keep a pile from rolling or sliding."], ["Cross-stacking", "laying each layer across the one below so the pile stays steady."], ["Repeat back", "saying an instruction back to the person who gave it, so both know it was heard right."]],
          slides: [
            { title: "Before you lift", bullets: ["Size up weight, size and edges", "Check the path", "Heavy or awkward? Get help or equipment"] },
            { title: "Lift and stack", bullets: ["Bend knees, keep it close, no twisting", "Heavy items low, blocked or cross-stacked", "Keep walkways and exits clear"] },
            { title: "Be a good crew member", bullets: ["On time, ready, with PPE", "Repeat instructions back", "Ask when unsure; report hazards"] },
            { title: "Your Core plan", bullets: ["Center or program near you", "Core modules and weekly study time", "Start date and target test date"] }
          ],
          sources: [
            { name: "NCCER: Find a Center", url: "https://www.nccer.org/find-a-center/" },
            { name: "NCCER: Core curriculum (craft catalog)", url: "https://www.nccer.org/craft-catalog/core/" },
            { name: "Apprenticeship.gov: Apprenticeship Job Finder", url: "https://www.apprenticeship.gov/apprenticeship-job-finder" }
          ],
          tryIt: "Write a lift plan for moving ten 12-foot 2x6 boards from a truck to a work area 50 feet away: the weight check, the path, who helps, how you carry, and how you stack. Then start your Core plan: write the center you found in Lesson 1, the Core modules, a start date, your weekly study time and a target test date.",
          youCanNow: "plan a safe lift, carry and stack, act as a good crew member, and write a dated plan to train and test for NCCER Core.",
          quickCheck: [
            { objective: "O5", q: "A box is heavier than you can lift comfortably. What do you do?", options: ["Lift it fast to get it over with", "Twist to swing it up", "Get a coworker or use a cart", "Drag it by one corner"], answer: 2, why: "Heavy or awkward loads need help or equipment." },
            { objective: "O6", q: "Which training plan is complete?", options: ["\"Study some time.\"", "\"Find a center later.\"", "\"Take the test someday.\"", "\"Center: county job program; Core modules; start Nov 3; Tue and Thu 6-8 pm; target test Feb 15.\""], answer: 3, why: "It names a center, the modules, a start date, weekly time and a target test date." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Tools, drawings and your plan",
        questions: [
          { objective: "O3", q: "Before using a power saw, which check matters most?", options: ["The guard works and the cord is not damaged", "The saw is a nice color", "The cord is long enough to reach your car", "The blade is dull so it cuts slowly"], answer: 0, why: "A working guard and a safe cord prevent cuts and shock." },
          { objective: "O4", q: "Which view looks straight at one side of a building?", options: ["Plan view", "Elevation", "Detail", "Title block"], answer: 1, why: "An elevation shows one side straight on." },
          { objective: "O4", q: "A frame is 40 inches tall. The sides fit between top and bottom boards 3/4 inch thick. How long are the sides?", options: ["40 inches", "39 1/4 inches", "38 1/2 inches", "41 1/2 inches"], answer: 2, why: "40 - 3/4 - 3/4 = 38 1/2 inches." },
          { objective: "O5", q: "How should you stack lumber on site?", options: ["On soft mud", "Across the exit door", "Light items at the bottom", "On solid ground, blocked or cross-stacked, walkways clear"], answer: 3, why: "Solid ground, blocking or cross-stacking and clear walkways keep piles steady and people safe." },
          { objective: "O5", q: "Your lead says \"Cut four at 22 and a half.\" What is a good reply?", options: ["\"Four at 22 and a half, got it.\"", "Nothing; just start cutting", "\"Whatever.\"", "\"I'll guess the rest.\""], answer: 0, why: "Repeating the instruction back shows it was heard right." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Construction Core Skills (NCCER Core Preparation)",
    questions: [
      { objective: "O6", q: "What does NCCER stand for?", options: ["National Council for Contractor Employment Rules", "National Center for Construction Education and Research", "New Construction Codes and Electrical Regulations", "National Committee on Carpentry and Electrical Repair"], answer: 1, why: "NCCER is the National Center for Construction Education and Research." },
      { objective: "O6", q: "How do you earn an NCCER credential?", options: ["Watch videos and print a certificate", "Pay a fee online with no test", "Pass written tests and perform tasks for an evaluator at an accredited location", "Work one day on any job site"], answer: 2, why: "Credentials need written tests and hands-on tasks at an accredited location." },
      { objective: "O6", q: "Which NCCER page helps you find a place to train or test?", options: ["Find a Center", "The legend", "A safety data sheet", "Your paystub"], answer: 0, why: "NCCER's Find a Center page lists training and testing locations." },
      { objective: "O1", q: "Which list is OSHA's Focus Four?", options: ["Noise, heat, dust and cold", "Falls, struck-by, caught-in or -between, electrocution", "Fire, flood, wind and snow", "Paperwork, overtime, breaks and pay"], answer: 1, why: "These four cause most construction deaths." },
      { objective: "O1", q: "At what height does OSHA require fall protection in construction?", options: ["2 feet", "20 feet", "10 feet", "6 feet"], answer: 3, why: "OSHA requires fall protection at six feet or more in construction." },
      { objective: "O1", q: "A ladder reaches an upper landing. How far must its side rails go above the landing?", options: ["At least 3 feet", "Exactly level with it", "6 inches", "At least 10 feet"], answer: 0, why: "OSHA's ladder rule: side rails at least 3 feet above the upper landing." },
      { objective: "O1", q: "You see a power line above where a crew wants to raise a ladder. What do you do?", options: ["Raise it quickly", "Use a metal ladder", "Stop and tell the supervisor before work goes on", "Touch the line to test it"], answer: 2, why: "Electrocution is a Focus Four hazard; stop and report it." },
      { objective: "O2", q: "How many inches is 8 feet 5 inches?", options: ["85", "96", "105", "101"], answer: 3, why: "8 x 12 = 96, plus 5 = 101 inches." },
      { objective: "O2", q: "What is 14/16 reduced?", options: ["7/8", "3/4", "1/2", "14/8"], answer: 0, why: "Divide top and bottom by 2: 7/8." },
      { objective: "O2", q: "What is 1 3/4 + 2 3/8?", options: ["3 6/12", "4 1/8", "3 3/8", "4 3/4"], answer: 1, why: "1 6/8 + 2 3/8 = 3 9/8 = 4 1/8." },
      { objective: "O3", q: "Which tool is made to drive and pull nails?", options: ["Speed square", "Utility knife", "Claw hammer", "Level"], answer: 2, why: "A claw hammer drives nails and pulls them out." },
      { objective: "O3", q: "A hammer head is loose on its handle. What do you do?", options: ["Use it carefully", "Tag it out and report it", "Wrap it in tape", "Lend it to a coworker"], answer: 1, why: "A loose head can fly off; take the tool out of use and report it." },
      { objective: "O3", q: "Which is a safe habit with corded power tools?", options: ["Carry the tool by its cord", "Remove the guard to see better", "Yank the plug out by the cord", "Keep cords out of walkways and wear safety glasses"], answer: 3, why: "Clear walkways prevent trips, and safety glasses protect your eyes." },
      { objective: "O4", q: "Which drawing view looks down from above?", options: ["Plan view", "Elevation", "Section", "Detail"], answer: 0, why: "A plan view looks down from above." },
      { objective: "O4", q: "A written dimension on a drawing does not match what you measure on the paper. What do you do?", options: ["Use your paper measurement", "Use the written dimension, or ask your supervisor if it looks wrong", "Average the two", "Skip that part"], answer: 1, why: "Written dimensions rule; ask when something does not fit." },
      { objective: "O4", q: "At 1/4 inch = 1 foot, how long is a wall drawn 5 inches long?", options: ["5 feet", "10 feet", "20 feet", "25 feet"], answer: 2, why: "5 inches is twenty quarter inches, so 20 feet." },
      { objective: "O5", q: "What is the right way to lift?", options: ["Bend at the waist with straight legs", "Twist to set the load down", "Hold the load far from your body", "Bend your knees, keep the load close, turn with your feet"], answer: 3, why: "Using your legs and keeping the load close protects your back." },
      { objective: "O5", q: "You carry a long board through a doorway. What do you watch?", options: ["The back end of the board as you turn", "Only your phone", "Nothing; boards are light", "The ceiling lights"], answer: 0, why: "The back end swings when you turn and can hit people or things." },
      { objective: "O5", q: "Before moving a load, what do you size up first?", options: ["Who is watching", "The weight, size and edges of the load, and the path", "The color of the load", "How fast you can run with it"], answer: 1, why: "Knowing the load and the path tells you whether you need help or equipment." },
      { objective: "O6", q: "Which belongs in a training-and-test plan?", options: ["Only the word \"someday\"", "Your bank PIN", "A center, the modules, a start date, weekly study time and a target test date", "A list of tools to buy before you start"], answer: 2, why: "A plan with a place, modules and dates is one you can follow." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Pre-Test: What Do You Already Know?", from: [1, 4, 5, 7, 9, 11, 13, 15, 16] },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      { name: "Cut list", objective: "O4", notYet: "Lengths are missing or ignore the 3/4 inch boards.", meets: "Two pieces at 36 inches and two at 22 1/2 inches, with piece names and counts.", exceeds: "Also notes saw kerf and marks which face to measure from." },
      { name: "Measuring and math", objective: "O2", notYet: "Fractions are wrong or not reduced.", meets: "Every length is correct to the nearest 1/16 inch and reduced.", exceeds: "Shows the math and checks the frame for square with the 3-4-5 rule." },
      { name: "Tool choice and checks", objective: "O3", notYet: "No tool named, or fewer than three checks.", meets: "Names a suitable saw and three correct checks, including guard, cord and unplugging to change the blade.", exceeds: "Also lists PPE and says the tool will be used only after instructor training." },
      { name: "Safe handling", objective: "O5", notYet: "No plan for weight, path or stacking.", meets: "Covers weight check, path, lifting posture and stacking.", exceeds: "Also says when to get a helper or equipment and how to carry long boards through turns." },
      { name: "Site hazards", objective: "O1", notYet: "No hazards named.", meets: "Names at least two Focus Four hazards that could apply and a control for each.", exceeds: "Covers all four with controls." },
      { name: "Training-and-test plan", objective: "O6", notYet: "No center or no dates.", meets: "A real center or program, the Core modules, a start date, weekly study time and a target test date.", exceeds: "Dates are in a calendar and a support person is named." }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Learners who enroll in an NCCER Core program or pre-apprenticeship within 60 days (follow-up survey)",
      "Learners who earn NCCER Core credentials, as reported by the learner or partner program",
      "Learners hired into a construction job or apprenticeship within 6 months",
      "Partner programs report fewer safety and math gaps among new Core students"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Paper, pencil and a ruler; a tape measure if available",
      "A phone or computer to open nccer.org and osha.gov",
      "Printed copies of the practice frame drawing for group sessions",
      "About 75 minutes in total, in short sessions: lessons, practice, checks and the final task"
    ],
    facilitatorNotes: [
      "Take the pre-test together, then teach one chapter per session with the \"Try it now\" tasks done live.",
      "Bring several tape measures; have learners read marks on each other's tapes and check answers in pairs.",
      "Do not let learners use power tools, ladders or lifting equipment in this course; that is taught in person by a qualified NCCER instructor.",
      "Help learners use the NCCER Find a Center page and connect them with local Core programs, pre-apprenticeships or the American Job Center.",
      "Score the final task with the rubric and give feedback on one Not yet row at a time.",
      "For re-entry learners, point to second-chance employers and programs; for veterans, check with the VA about using education benefits for apprenticeship or training."
    ]
  }
};
