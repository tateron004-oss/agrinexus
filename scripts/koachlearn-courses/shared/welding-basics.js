"use strict";

// Koach Learn course: Workforce Development (wave 1, 30 October 2026) -> "Welding Basics". A pre-training course that leads toward welding school, an apprenticeship or a welder helper job
// and an AWS Certified Welder test. It PREPARES learners; it does not certify them, and it asks for no welding or cutting (that needs supervised training and the right protective equipment).
// Built in the ADDIE format; the model is re-entry/reentry-ai-digital-confidence.js. See scripts/koachlearn-courses/README.md.

module.exports = {
  id: "welding-basics",
  category: "Workforce Development",
  name: "Welding Basics",
  skills: "Matching jobs to welding processes, Reading joints, positions and weld symbols, Spotting common weld defects, Planning welding safety and fire precautions, Planning your path to welding certification",
  outcome: "match a job to the right welding process, read joint types, positions and a basic weld symbol, spot common weld defects, plan the protective gear and fire precautions for a welding task, and follow a dated plan to get trained and take a welder certification test.",
  about: [
    "Welders join metal for buildings, bridges, ships, pipelines, trucks, farm equipment and factories. Many get started through a trade school, a community college, an apprenticeship, the military or on-the-job training. This course is for anyone looking at that path: job seekers, young adults, people coming home from prison, veterans, immigrants and adults going back to learning.",
    "You will learn the main welding and cutting processes, the joints and positions welders use, how to read a basic weld symbol on a drawing, and how to tell a good weld from a bad one. Then you will learn how welders protect their eyes, skin, lungs and ears, how they prevent fires, and how welder certification works.",
    "This course prepares you. It does not give you a certificate or a license. You will not weld or cut in this course: welding is learned only in a supervised shop with the right protective equipment. A welder certification, such as the American Welding Society (AWS) Certified Welder, comes from passing a hands-on test at an approved test facility.",
    "Each lesson takes about five minutes, with a \"Try it now\" task and two quick questions. There is a knowledge check after each chapter and a 20-question quiz at the end. Your final product is your own welding starter plan with real dates."
  ],
  finalTask: "Make your welding starter plan: (1) a process chart that matches four welding or cutting processes to a real job each; (2) a reading sheet with the five joint types sketched, the four positions listed, and five weld defects with one likely cause each; (3) a pre-weld safety checklist for one stick or MIG task covering eyes, skin, lungs, ears, fire and electric shock; and (4) a dated plan that names two training programs near you, the process and position you will aim to certify in, where you can test (an AWS Accredited Test Facility), what your state or city requires (from the official page), and a date for each step.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Adults and young adults looking for a hands-on trade: job seekers, people coming home from prison, young adults, veterans, immigrants and adults returning to learning. Some have done shop, farm, auto or military work; most have never welded.",
    startingPoint: "Can read short instructions and do whole-number math. Most know that welding uses heat and a bright light to join metal, but cannot name the processes, read a weld symbol, judge a weld or list the safety steps.",
    gap: "Welding schools, apprenticeships and employers want people who know the basic words, take safety seriously and know what a certification test asks for. Learners need that base and a clear plan with dates so they choose good training, avoid wasting money and arrive ready to learn in the shop.",
    constraints: [
      "Reading level: plain words and short sentences (about grade 6 to 8); every trade word is explained",
      "No welding, cutting or grinding in this course: hands-on work needs a supervised shop and the right protective equipment",
      "Devices: a phone or library computer for official pages and weld photos; paper and pen for sketches and plans",
      "Time: 5 to 6 minute lessons that fit around work and appointments",
      "Rules differ by state and city: learners check licensing on the official page for where they live"
    ],
    prerequisites: "None. \"Starting a Career in the Skilled Trades\" helps learners choose a trade; this course goes deeper into welding."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Given a description of a welding or cutting job", action: "match the job to a common process: stick, MIG, flux-cored, TIG, oxy-fuel or plasma", standard: "getting at least 4 of 5 right" },
    { id: "O2", condition: "Given a drawing, photo or weld symbol", action: "name the joint type, the welding position and the basic parts of a weld symbol", standard: "getting at least 4 of 5 right" },
    { id: "O3", condition: "Given photos or descriptions of finished welds", action: "identify common weld defects and name a likely cause of each", standard: "getting at least 4 of 5 right" },
    { id: "O4", condition: "Given a welding task", action: "list the protective gear, ventilation and fire precautions the task needs", standard: "covering eyes, skin, lungs, ears, electric shock and at least three fire precautions" },
    { id: "O5", condition: "Using official websites for your area", action: "write a dated plan to get trained and take a welder certification test", standard: "with two real programs, a testing place and a date for every step" }
  ],
  chapters: [
    {
      name: "Chapter 1: How welding works",
      lessons: [
        {
          title: "What welders do, and the main processes",
          objectives: ["O1"],
          minutes: 6,
          goal: "Match a welding or cutting job to the right common process.",
          text: [
            "Welding joins pieces of metal by melting them so they flow together and harden as one piece. Most welding uses an electric arc, a very hot spark between an electrode and the metal. Often a filler metal is added, and something must shield the hot metal from the air so the weld stays strong.",
            "Stick welding (SMAW) uses a coated rod. It is simple and works outdoors and in wind, so it is common in construction, pipelines and repair. MIG welding (GMAW) feeds a wire through a gun with a shielding gas; it is fast and common in factories and auto shops. Flux-cored welding (FCAW) feeds a wire with flux inside it; it is used for thicker steel and some outdoor work. TIG welding (GTAW) uses a tungsten electrode and a separate filler rod; it is slow but very clean and precise, used on thin metal, stainless steel and aluminum.",
            "Welders also cut metal. Oxy-fuel cutting uses a flame of fuel gas and oxygen, mostly on steel. Plasma cutting uses an electric arc and a fast stream of gas and can cut many metals.",
            "Employers usually test you in a specific process and position, so knowing these names helps you read job ads and choose training."
          ],
          words: [
            ["Arc", "a very hot electric spark between the electrode and the metal that melts the metal."],
            ["Electrode", "the rod or wire that carries the current to make the arc; in some processes it also becomes filler."],
            ["Filler metal", "extra metal added to fill the joint."],
            ["Shielding", "gas or flux that keeps air away from the hot weld so it stays strong."],
            ["Stick (SMAW)", "shielded metal arc welding, using a flux-coated rod."],
            ["MIG (GMAW)", "gas metal arc welding: a wire fed through a gun with shielding gas."],
            ["Flux-cored (FCAW)", "flux-cored arc welding: a fed wire with flux inside it."],
            ["TIG (GTAW)", "gas tungsten arc welding: a tungsten electrode and a separate filler rod; slow and precise."]
          ],
          slides: [
            { title: "What welding is", bullets: ["Melting metal so it joins as one piece", "Most use an electric arc", "Shielding keeps air away from the weld"] },
            { title: "Four common processes", bullets: ["Stick (SMAW): simple, works outdoors", "MIG (GMAW): fast, factories and auto shops", "Flux-cored (FCAW): thicker steel, some outdoor", "TIG (GTAW): slow, clean, thin metal and aluminum"] },
            { title: "Cutting", bullets: ["Oxy-fuel: flame, mostly steel", "Plasma: arc and fast gas, many metals"] },
            { title: "Why names matter", bullets: ["Job ads name the process", "Tests are in a process and position"] }
          ],
          tryIt: "Search a job site for \"welder\" near you and read three job ads. For each, write down which process it asks for (stick, MIG, flux-cored or TIG), what it makes or repairs, and any certification it names. Then make a small chart: four processes down the side, and one real job next to each. Keep it: it is part 1 of your final task.",
          youCanNow: "name the main welding and cutting processes and match each one to the kind of job it fits.",
          quickCheck: [
            { objective: "O1", q: "A crew must repair a steel fence outdoors on a windy day with simple equipment. Which process fits best?", options: ["TIG", "Stick (SMAW)", "Plasma cutting", "MIG with shielding gas"], answer: 1, why: "Stick welding uses a coated rod and works outdoors and in wind, where shielding gas would blow away." },
            { objective: "O1", q: "A shop needs very clean, precise welds on thin aluminum. Which process fits best?", options: ["Oxy-fuel cutting", "Flux-cored", "Stick", "TIG (GTAW)"], answer: 3, why: "TIG is slow but very clean and precise, and is used on thin metal and aluminum." }
          ]
        },
        {
          title: "Joints, positions and weld symbols",
          objectives: ["O2"],
          minutes: 6,
          goal: "Name the joint type and welding position on a drawing and read the basic parts of a weld symbol.",
          text: [
            "There are five basic joints. Butt joint: two pieces edge to edge in a line. Tee joint: one piece standing on another like a T. Lap joint: two pieces overlapping. Corner joint: two pieces meeting at a corner like an L. Edge joint: two pieces side by side, welded along their edges.",
            "There are four welding positions. Flat: you weld from above, the easiest. Horizontal: the weld runs sideways on a wall-like surface. Vertical: the weld runs up or down. Overhead: you weld from below, the hardest. On tests these are numbered 1 to 4, with G for a groove weld and F for a fillet weld; for example, 3G is a vertical groove weld and 2F is a horizontal fillet weld.",
            "A groove weld fills a gap or a prepared groove, often in a butt joint. A fillet weld fills the corner of a tee, lap or corner joint and looks like a triangle from the side.",
            "Drawings use weld symbols. The arrow points to the joint. The weld symbol sits on a flat reference line. If the symbol is below the line, the weld goes on the arrow side; if it is above the line, it goes on the other side. A small triangle means a fillet weld, and the number next to it is usually the weld size. A tail on the end can hold extra notes, such as the process."
          ],
          steps: [
            "Find the arrow: it points to the joint.",
            "Look at the reference line: symbol below = arrow side, above = other side.",
            "Read the symbol: a triangle means fillet.",
            "Read the number beside it (size) and any note in the tail."
          ],
          words: [
            ["Joint", "the place where two pieces of metal meet to be welded."],
            ["Butt, tee, lap, corner, edge", "the five basic joint types."],
            ["Groove weld", "a weld that fills a gap or prepared groove between pieces."],
            ["Fillet weld", "a weld in a corner, triangle-shaped from the side."],
            ["Position", "the direction you weld in: flat, horizontal, vertical or overhead (1 to 4)."],
            ["Weld symbol", "a drawing code with an arrow, a reference line and symbols that tell the welder what weld to make."],
            ["Reference line", "the flat line of a weld symbol; below it means arrow side, above it means other side."]
          ],
          slides: [
            { title: "Five basic joints", bullets: ["Butt: edge to edge", "Tee: like a T; Lap: overlapping", "Corner: like an L; Edge: side by side"] },
            { title: "Four positions", bullets: ["1 Flat, 2 Horizontal", "3 Vertical, 4 Overhead", "G = groove, F = fillet (3G, 2F)"] },
            { title: "Groove vs fillet", bullets: ["Groove: fills a gap, often butt joints", "Fillet: fills a corner, triangle shape"] },
            { title: "Reading a weld symbol", bullets: ["Arrow points to the joint", "Below the line = arrow side; above = other side", "Triangle = fillet; number = size; tail = notes"] }
          ],
          tryIt: "Use paper strips or two pieces of cardboard to make each of the five joints, and sketch each one with its name. Next to the sketches, list the four positions with their numbers. Then search for a picture of a \"fillet weld symbol\" and write down: which side the weld goes on, and what the number means. Keep the sketches: they are part 2 of your final task.",
          youCanNow: "name the five joints and four positions and read the basic parts of a weld symbol.",
          quickCheck: [
            { objective: "O2", q: "One plate stands upright in the middle of another flat plate, like the letter T. What joint is it?", options: ["Tee joint", "Butt joint", "Lap joint", "Edge joint"], answer: 0, why: "A tee joint has one piece standing on another like a T." },
            { objective: "O2", q: "On a weld symbol, the triangle is below the reference line. Where does the weld go?", options: ["On the other side", "On both sides", "On the arrow side", "Nowhere; it is a note"], answer: 2, why: "A symbol below the reference line means the weld goes on the arrow side." }
          ]
        },
        {
          title: "Telling a good weld from a bad one",
          objectives: ["O3"],
          minutes: 6,
          goal: "Identify common weld defects in photos or descriptions and name a likely cause of each.",
          text: [
            "Welders and inspectors check welds by looking at them first. A good weld has an even shape and width, blends smoothly into both pieces, and has no holes or cracks. Some jobs also test welds by bending them or with special equipment, and welding inspectors are trained and certified for this.",
            "Common defects: Porosity is small holes or bubbles, often from dirty metal or poor shielding gas. Undercut is a groove melted into the metal along the edge of the weld, often from too much heat or the wrong angle. Incomplete fusion means the weld did not melt into the metal, often from too little heat or moving too fast. Cracks are lines in or next to the weld; they are serious. Too much spatter (little balls of metal around the weld) often comes from the wrong settings. Overlap is weld metal rolled onto the surface without fusing.",
            "In the shop your instructor will teach you how to fix each cause, such as cleaning the metal first, changing the settings, angle or travel speed, or checking the gas. In this course you practice the looking and the naming."
          ],
          steps: [
            "Look at the shape: is it even in width and height?",
            "Look at the edges: does it blend in, or is there a groove (undercut) or a roll (overlap)?",
            "Look at the surface: any holes (porosity) or cracks?",
            "Look around it: lots of spatter?",
            "Write the defect and a likely cause."
          ],
          words: [
            ["Defect", "a flaw that can make a weld weaker or fail inspection."],
            ["Porosity", "small holes or bubbles in a weld, often from dirt or poor shielding."],
            ["Undercut", "a groove melted into the metal along the edge of the weld."],
            ["Incomplete fusion", "the weld did not melt into the base metal."],
            ["Spatter", "small balls of metal thrown out around the weld."],
            ["Visual inspection", "checking a weld by looking at it carefully, the first test of every weld."]
          ],
          slides: [
            { title: "A good weld", bullets: ["Even shape and width", "Blends smoothly into both pieces", "No holes, no cracks"] },
            { title: "Common defects", bullets: ["Porosity: holes or bubbles", "Undercut: groove at the edge", "Incomplete fusion; cracks; spatter; overlap"] },
            { title: "Likely causes", bullets: ["Dirty metal or poor gas: porosity", "Too much heat or wrong angle: undercut", "Too little heat or too fast: no fusion"] },
            { title: "Check every weld", bullets: ["Shape, edges, surface, around it", "Name the defect and a cause", "Fixing it is taught in the shop"] }
          ],
          tryIt: "Search for photos of \"weld porosity\", \"weld undercut\" and \"good MIG weld\" from a welding school or supplier. For each photo, write what you see and name the defect (or say it looks good). Then make a list of five defects with one likely cause each. Keep the list: it goes in part 2 of your final task.",
          youCanNow: "spot common weld defects and name a likely cause of each one.",
          quickCheck: [
            { objective: "O3", q: "A weld has many small holes on its surface. What defect is this?", options: ["Undercut", "Overlap", "Porosity", "Spatter"], answer: 2, why: "Small holes or bubbles in a weld are porosity." },
            { objective: "O3", q: "There is a groove melted into the metal along the edge of the weld. What is a likely cause?", options: ["Too much heat or the wrong angle", "The metal was too clean", "The helmet was too dark", "The weld was too cold to touch"], answer: 0, why: "Undercut often comes from too much heat or a poor angle." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: How welding works",
        questions: [
          { objective: "O1", q: "Which process feeds a wire through a gun with a shielding gas?", options: ["Stick (SMAW)", "MIG (GMAW)", "Oxy-fuel cutting", "TIG (GTAW)"], answer: 1, why: "MIG (gas metal arc welding) uses a fed wire and shielding gas." },
          { objective: "O1", q: "Which is a cutting process that uses an electric arc and a fast stream of gas?", options: ["Plasma cutting", "Stick welding", "TIG welding", "Brazing"], answer: 0, why: "Plasma cutting uses an arc and a fast gas stream to cut many metals." },
          { objective: "O2", q: "Two plates overlap each other and are welded. What joint is this?", options: ["Butt joint", "Corner joint", "Tee joint", "Lap joint"], answer: 3, why: "A lap joint is made of two overlapping pieces." },
          { objective: "O2", q: "On a welding test, what does 3G mean?", options: ["A flat fillet weld", "An overhead fillet weld", "A vertical groove weld", "A horizontal groove weld"], answer: 2, why: "Position 3 is vertical, and G means a groove weld." },
          { objective: "O3", q: "A weld did not melt into the base metal. What is this defect called?", options: ["Incomplete fusion", "Porosity", "Spatter", "Undercut"], answer: 0, why: "Incomplete fusion means the weld did not join with the base metal." }
        ]
      }
    },
    {
      name: "Chapter 2: Safety and your path",
      lessons: [
        {
          title: "Protecting your eyes, skin, lungs and ears",
          objectives: ["O4"],
          minutes: 6,
          goal: "List the protective gear and ventilation a welding task needs.",
          text: [
            "Welding hazards include very bright light, very hot metal and sparks, fumes and gases, noise and electric shock. The Bureau of Labor Statistics lists welding helmets, hearing protection, heat-resistant gloves and protective clothing as the gear welders wear. You will learn to weld only in a supervised shop with this gear.",
            "Eyes and face: the arc gives off light, including ultraviolet rays, that can burn your eyes and skin, even if you only glance at it. OSHA's welding rule requires a helmet or hand shield for arc welding, with a filter lens dark enough for the process; its table lists the shade by process and size (for example, shade 12 for some common stick electrode sizes). Wear safety glasses under the helmet, and protect people nearby with screens.",
            "Skin: wear flame-resistant clothing that covers your arms and legs (no synthetic fabric that can melt), leather welding gloves, and leather boots. Lungs: welding fumes and gases can harm your health. Keep your head out of the fume plume, use the ventilation or fume extraction, and use a respirator when your employer's program requires one. Coatings such as paint and zinc on galvanized steel make extra-harmful fumes. Ears: grinding and some processes are loud, so use hearing protection.",
            "OSHA's welding rule also says oxygen must never be used for ventilation, because it makes fires burn far faster."
          ],
          steps: [
            "Eyes: helmet with the right shade, safety glasses under it, screens for others.",
            "Skin: flame-resistant clothing, leather gloves and boots, no synthetics.",
            "Lungs: ventilation or fume extraction, head out of the plume, respirator if required.",
            "Ears: hearing protection for grinding and loud work."
          ],
          words: [
            ["PPE", "personal protective equipment: helmet, glasses, gloves, clothing, boots, hearing protection, respirator."],
            ["Filter shade", "how dark a welding lens is; higher numbers are darker."],
            ["Ultraviolet (UV) rays", "invisible light from the arc that burns eyes and skin."],
            ["Fumes", "tiny metal particles and gases from welding that can harm your lungs and health."],
            ["Fume plume", "the cloud of smoke rising from the weld."],
            ["Galvanized steel", "steel coated with zinc; welding it makes harmful fumes."],
            ["Flame-resistant (FR)", "fabric made to resist catching fire."]
          ],
          slides: [
            { title: "Welding hazards", bullets: ["Bright light and UV rays", "Hot metal and sparks", "Fumes and gases; noise; shock"] },
            { title: "Eyes and face", bullets: ["Helmet with the right filter shade (OSHA table)", "Safety glasses under the helmet", "Screens protect people nearby"] },
            { title: "Skin and lungs", bullets: ["Flame-resistant clothing, leather gloves, boots", "Head out of the plume; ventilation on", "Respirator when required; beware coatings"] },
            { title: "Ears and air", bullets: ["Hearing protection for grinding", "Never use oxygen for ventilation"] }
          ],
          sources: [
            { name: "OSHA: Welding, cutting and brazing, general requirements, 29 CFR 1910.252", url: "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.252" },
            { name: "OSHA: Welding, cutting and brazing standards", url: "https://www.osha.gov/welding-cutting-brazing/standards" },
            { name: "US Bureau of Labor Statistics: Welders, cutters, solderers and brazers", url: "https://www.bls.gov/ooh/production/welders-cutters-solderers-and-brazers.htm" }
          ],
          tryIt: "Start your pre-weld safety checklist for this job: \"MIG welding steel brackets in a shop.\" Write four headings: Eyes, Skin, Lungs, Ears. Under each, list the gear or step from the lesson. Then add one line about what to check if the steel is painted or galvanized. Keep it: it becomes part 3 of your final task.",
          youCanNow: "list the gear and ventilation that protect a welder's eyes, skin, lungs and ears.",
          quickCheck: [
            { objective: "O4", q: "Which clothing is the safe choice for welding?", options: ["A polyester track suit", "Shorts and a T-shirt", "A nylon jacket", "Flame-resistant clothing covering arms and legs"], answer: 3, why: "Synthetics can melt onto skin; flame-resistant clothing that covers you protects from sparks and UV rays." },
            { objective: "O4", q: "You see smoke rising from the weld. What do you do with your head?", options: ["Lean in to see better", "Keep it out of the fume plume and use the ventilation", "Hold your breath", "Remove the helmet"], answer: 1, why: "Keeping out of the plume and using ventilation cuts the fumes you breathe." }
          ]
        },
        {
          title: "Fire, electric shock and hot work",
          objectives: ["O4"],
          minutes: 6,
          goal: "List the fire and shock precautions to take before, during and after welding.",
          text: [
            "Sparks and hot slag can fly far and start fires in places you cannot see. OSHA's welding rule (29 CFR 1910.252) says that where practical, things that can burn must be moved at least 35 feet from the work, or covered or shielded if they cannot be moved. Welding is done only in areas that are, or have been made, fire safe, after the area is checked by the person responsible; that approval is best given as a written permit, often called a hot work permit.",
            "When a fire could start, for example with things that burn within 35 feet, a fire watch is required: a person who watches for fires with an extinguisher ready. OSHA says the fire watch must stay for at least half an hour after welding or cutting is finished, because things can smolder and catch fire later.",
            "Electric shock: the arc uses electric current. Keep gloves and clothing dry, do not stand in water or on wet ground, check cables for damage before use, and never touch the electrode and the metal at the same time. OSHA electrical safety training is required for welders, according to the BLS.",
            "Gas cylinders for MIG, TIG and cutting must be handled as your training teaches, kept upright and secured so they cannot fall. Confined spaces, such as tanks, need special training, permits and ventilation; never enter one without them."
          ],
          steps: [
            "Before: get the permit, move things that burn 35 feet away or cover them, have an extinguisher ready.",
            "Set up a fire watch when a fire could start.",
            "During: keep dry, check cables, keep the area clear.",
            "After: the fire watch stays at least 30 minutes."
          ],
          words: [
            ["Hot work", "welding, cutting, grinding and other work that makes sparks or flame."],
            ["Hot work permit", "a written approval that the area was checked and made fire safe before hot work."],
            ["Fire watch", "a trained person who watches for fires during hot work and after it, with an extinguisher ready."],
            ["Slag", "the hard crust left on some welds, which is very hot when it chips off."],
            ["Confined space", "a space like a tank or pit that is hard to get in and out of; it needs special training and permits."]
          ],
          slides: [
            { title: "Before you weld", bullets: ["Hot work permit: area checked and fire safe", "Move things that burn 35 feet away, or cover them", "Extinguisher ready"] },
            { title: "Fire watch", bullets: ["Required when a fire could start", "Stays at least 30 minutes after the work"] },
            { title: "Electric shock", bullets: ["Keep gloves and clothes dry", "Never stand in water", "Check cables before use"] },
            { title: "Cylinders and confined spaces", bullets: ["Cylinders upright and secured", "Confined spaces: training and permits first"] }
          ],
          sources: [
            { name: "OSHA: Welding, cutting and brazing, general requirements (fire prevention), 29 CFR 1910.252", url: "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.252" },
            { name: "US Bureau of Labor Statistics: Welders, How to Become One", url: "https://www.bls.gov/ooh/production/welders-cutters-solderers-and-brazers.htm#tab-4" }
          ],
          tryIt: "Finish your pre-weld safety checklist. Add three new headings to the list from Lesson 4: Fire before, Fire after and Shock. Under them write: the permit, the 35-foot rule, the extinguisher, the fire watch and how long it stays, and three shock steps. Read the whole checklist out loud as if you were briefing a new helper. It is part 3 of your final task.",
          youCanNow: "list the fire and shock precautions to take before, during and after welding.",
          quickCheck: [
            { objective: "O4", q: "According to OSHA, how long must a fire watch stay after welding is finished?", options: ["5 minutes", "No time; they can leave", "At least half an hour", "Until lunch"], answer: 2, why: "OSHA requires the fire watch for at least a half hour after the work, because fires can start later." },
            { objective: "O4", q: "Cardboard boxes are 15 feet from where you will weld. What do you do?", options: ["Move them at least 35 feet away, or cover or shield them", "Weld faster", "Spray them with oxygen", "Nothing; 15 feet is enough"], answer: 0, why: "OSHA says things that can burn should be moved at least 35 feet away where practical, or covered or shielded." }
          ]
        },
        {
          title: "Training, certification and your plan",
          objectives: ["O5"],
          minutes: 6,
          goal: "Write a dated plan to get trained and take a welder certification test.",
          text: [
            "The Bureau of Labor Statistics says employers usually want a high school diploma or equivalent plus technical and on-the-job training. Training comes from high school technical classes, vocational schools, community colleges, private welding schools and the military. Some employers run apprenticeships, and even trained welders usually get several months of on-the-job training. Blueprint reading, shop math and basic electricity help.",
            "Many employers want welders certified. The American Welding Society (AWS) Certified Welder is described by AWS as the most common entry point. It is a hands-on performance test: you weld in a specific process, position and material, and your weld is inspected to a standard. You take it at an AWS Accredited Test Facility (ATF), and AWS says you cannot earn a welding certification fully online. Some certifications need to be kept up or retested, so check the rules for yours on the AWS site. Some employers pay for training and testing.",
            "Some states and cities license welders, and the rules differ, so check the official page for where you work. Before you pay for a school, ask: Does it prepare you for an AWS test, and can you test there? How many graduates get welding jobs? Veterans can ask the VA about the GI Bill. If you have a record, many welding employers hire people with records; ask the program about its job connections."
          ],
          steps: [
            "Write your goal, for example \"MIG welder job in a fabrication shop by summer\".",
            "Pick the process and position you will aim to certify in first, based on job ads near you.",
            "Find two training programs (community college, welding school or apprenticeship) and their start dates.",
            "Find an AWS Accredited Test Facility near you on the AWS site.",
            "Check your state or city rules, and add a date for every step."
          ],
          words: [
            ["AWS", "the American Welding Society, which runs the Certified Welder program and other welding certifications."],
            ["Certified Welder", "an AWS certification earned by passing a hands-on welding test in a set process, position and material."],
            ["Accredited Test Facility (ATF)", "a place approved by AWS to give welder certification tests."],
            ["Performance test", "a test where you do the skill, here welding a test piece that is then inspected."],
            ["Fabrication shop", "a shop that cuts, shapes and welds metal into parts and structures."]
          ],
          slides: [
            { title: "Ways to train", bullets: ["Community college or welding school", "High school tech classes; the military", "Apprenticeship and on-the-job training"] },
            { title: "AWS Certified Welder", bullets: ["Hands-on test: process, position, material", "At an AWS Accredited Test Facility", "Cannot be earned fully online"] },
            { title: "Before you pay", bullets: ["Does it prepare you for an AWS test?", "How many graduates get welding jobs?", "Check state or city rules"] },
            { title: "Your plan", bullets: ["Goal, process and position", "Two programs and a test facility", "A date for every step"] }
          ],
          sources: [
            { name: "American Welding Society: Certification", url: "https://www.aws.org/certification/" },
            { name: "US Bureau of Labor Statistics: Welders, How to Become One", url: "https://www.bls.gov/ooh/production/welders-cutters-solderers-and-brazers.htm#tab-4" },
            { name: "Apprenticeship.gov: Apprenticeship Job Finder", url: "https://www.apprenticeship.gov/apprenticeship-job-finder" },
            { name: "CareerOneStop: License finder", url: "https://www.careeronestop.org/Toolkit/Training/find-licenses.aspx" }
          ],
          tryIt: "Final task: make your welding starter plan. Put together your process chart (Lesson 1), your reading sheet with joints, positions and defects (Lessons 2 and 3) and your safety checklist (Lessons 4 and 5). Then write your dated plan: your goal, the process and position you will aim to certify in, two training programs near you with start dates, one AWS Accredited Test Facility, what your state or city requires (with the web address), and a date for every step.",
          youCanNow: "follow your own dated plan to get trained and take a welder certification test.",
          quickCheck: [
            { objective: "O5", q: "Where do you take an AWS Certified Welder test?", options: ["Fully online from home", "At any hardware store", "At an AWS Accredited Test Facility", "In this course"], answer: 2, why: "AWS says certification is earned by testing at an Accredited Test Facility, not fully online." },
            { objective: "O5", q: "What kind of test is the AWS Certified Welder?", options: ["A typing test", "A hands-on test where you weld a piece that is inspected", "An essay", "An interview only"], answer: 1, why: "It is a performance test in a specific process, position and material." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Safety and your path",
        questions: [
          { objective: "O4", q: "Why must you never glance at an arc without eye protection?", options: ["It is rude", "Its light, including UV rays, can burn your eyes", "It makes the weld weaker", "It uses more gas"], answer: 1, why: "The arc's light can burn your eyes even from a short glance." },
          { objective: "O4", q: "The steel you will weld is galvanized (zinc coated). Why does that matter?", options: ["It makes extra-harmful fumes, so ventilation and the right protection matter more", "It cannot be welded at all", "It makes the weld stronger", "It does not matter"], answer: 0, why: "Coatings like zinc create harmful fumes when heated." },
          { objective: "O4", q: "Which is a safe way to avoid electric shock while welding?", options: ["Weld standing in a puddle", "Wear wet gloves to stay cool", "Use a cable with cracked insulation", "Keep gloves and clothes dry and check cables first"], answer: 3, why: "Dry gear and undamaged cables keep current from passing through you." },
          { objective: "O5", q: "Which question helps you most before paying for a welding school?", options: ["What color is the logo?", "Is the parking free?", "Does it prepare you for an AWS test, and how many graduates get welding jobs?", "How big is the lobby?"], answer: 2, why: "Whether a program leads to certification and jobs tells you if it is worth the money." },
          { objective: "O5", q: "Which plan step is complete?", options: ["\"Learn welding\"", "\"Get certified someday\"", "\"Look at schools\"", "\"Take the AWS Certified Welder test in MIG, flat position, at the college ATF by May 20\""], answer: 3, why: "It names the test, the process and position, the place and a date." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Welding Basics",
    questions: [
      { objective: "O1", q: "What does welding do?", options: ["Glues metal with tape", "Melts metal so pieces join as one", "Paints metal", "Bends metal cold"], answer: 1, why: "Welding melts the metal so the pieces flow together and harden as one." },
      { objective: "O1", q: "Which process uses a flux-coated rod and works well outdoors?", options: ["Stick (SMAW)", "TIG (GTAW)", "MIG (GMAW)", "Plasma cutting"], answer: 0, why: "Stick welding uses a coated rod and does not need shielding gas that wind could blow away." },
      { objective: "O1", q: "Which process uses a tungsten electrode and a separate filler rod?", options: ["Flux-cored", "Stick", "Oxy-fuel cutting", "TIG (GTAW)"], answer: 3, why: "TIG uses a tungsten electrode, and the welder adds filler by hand." },
      { objective: "O1", q: "Why does a weld need shielding?", options: ["To make it shiny", "To cool it faster", "To keep air away so the weld stays strong", "To make it louder"], answer: 2, why: "Gas or flux keeps air away from the hot metal." },
      { objective: "O2", q: "Two pieces lie edge to edge in a straight line. What joint is it?", options: ["Lap joint", "Butt joint", "Corner joint", "Tee joint"], answer: 1, why: "A butt joint is two pieces meeting edge to edge." },
      { objective: "O2", q: "Which welding position is usually the hardest?", options: ["Flat", "Horizontal", "Overhead", "There is no hardest"], answer: 2, why: "Overhead welding works against gravity from below." },
      { objective: "O2", q: "On a weld symbol, what does a small triangle mean?", options: ["A fillet weld", "A groove weld", "Stop work", "The tail"], answer: 0, why: "The triangle is the fillet weld symbol." },
      { objective: "O2", q: "The weld symbol sits above the reference line. Where does the weld go?", options: ["On the arrow side", "On both sides", "Nowhere", "On the other side"], answer: 3, why: "Above the line means the other side; below means the arrow side." },
      { objective: "O3", q: "Which describes a good weld?", options: ["Many holes on the surface", "A groove at the edges", "Even width and shape, blending into both pieces", "Lots of spatter around it"], answer: 2, why: "A good weld is even, blends in and has no holes or cracks." },
      { objective: "O3", q: "What is a likely cause of porosity?", options: ["Dirty metal or poor shielding gas", "A dark helmet", "Clean, dry metal", "Wearing leather gloves"], answer: 0, why: "Dirt and poor shielding let gas get trapped as holes." },
      { objective: "O3", q: "Which defect is a line through or next to the weld and is very serious?", options: ["Spatter", "A crack", "Overlap", "Porosity"], answer: 1, why: "Cracks can make a weld fail and are serious defects." },
      { objective: "O3", q: "A weld did not melt into the base metal. What is a likely cause?", options: ["Too much heat", "Using a helmet", "Cleaning the metal", "Too little heat or moving too fast"], answer: 3, why: "Incomplete fusion often comes from too little heat or a fast travel speed." },
      { objective: "O4", q: "What does OSHA require for eye protection during arc welding?", options: ["Sunglasses", "A helmet or hand shield with the right filter lens", "Nothing if it is quick", "A face mask for dust"], answer: 1, why: "OSHA requires a helmet or hand shield with a filter lens for arc welding." },
      { objective: "O4", q: "What must never be used to ventilate a welding area?", options: ["A fan", "Fume extraction", "Oxygen", "Open doors"], answer: 2, why: "Oxygen makes fires burn much faster; OSHA says never use it for ventilation." },
      { objective: "O4", q: "How far does OSHA say things that can burn should be moved from welding, where practical?", options: ["At least 35 feet", "5 feet", "10 feet", "No need to move them"], answer: 0, why: "OSHA's rule says at least 35 feet, or cover or shield them." },
      { objective: "O4", q: "What is a fire watch?", options: ["A clock in the shop", "A smoke alarm", "A type of helmet", "A person watching for fires during and after hot work, with an extinguisher"], answer: 3, why: "A fire watch watches for fires and stays at least half an hour after the work." },
      { objective: "O5", q: "This course will:", options: ["Give you an AWS certification", "Give you a welding license", "Prepare you for training and testing; it does not certify you", "Let you weld at home"], answer: 2, why: "Certification comes from a hands-on test at an Accredited Test Facility." },
      { objective: "O5", q: "Can you earn an AWS welding certification fully online?", options: ["No; you test in person at an Accredited Test Facility", "Yes, with a video", "Yes, by reading a book", "Yes, by taking this quiz"], answer: 0, why: "AWS says welding certification cannot be earned fully online." },
      { objective: "O5", q: "Who says what license, if any, a welder needs where you work?", options: ["A welding video", "The state or city, on its official page", "A job ad", "Your friends"], answer: 1, why: "Some states and cities license welders; the official page has the rules." },
      { objective: "O5", q: "Which helps you choose what process to certify in first?", options: ["Your favorite color", "The cheapest helmet", "Guessing", "The processes named in job ads near you"], answer: 3, why: "Job ads show which processes local employers want." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  // pre-test: these quiz questions, taken before Lesson 1, so the quiz shows how much each learner gained
  pretest: { title: "Pre-Test: What Do You Already Know?", from: [1, 2, 4, 7, 9, 11, 12, 14, 17] },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      { name: "Process chart", objective: "O1", notYet: "Fewer than four processes, or jobs do not fit the process.", meets: "Four processes, each matched to a real job that fits it.", exceeds: "Also says why each process fits, using words like outdoors, thin metal or speed." },
      { name: "Joints, positions and symbols", objective: "O2", notYet: "Joints or positions are missing or misnamed.", meets: "All five joints sketched and named, four positions listed with numbers.", exceeds: "Also reads a weld symbol correctly: side, type and size." },
      { name: "Defect list", objective: "O3", notYet: "Fewer than five defects, or causes are wrong.", meets: "Five defects, each with a likely cause.", exceeds: "Also names how the shop would check for each defect." },
      { name: "Safety checklist", objective: "O4", notYet: "Missing eyes, skin, lungs, ears, fire or shock.", meets: "Covers eyes, skin, lungs, ears, shock and at least three fire precautions, including the 35-foot rule and the fire watch.", exceeds: "Also covers coated metal, cylinders and the hot work permit, and is clear enough to brief a new helper." },
      { name: "Dated plan from official sources", objective: "O5", notYet: "Steps have no dates, or rules come from ads or posts.", meets: "Two real programs, one AWS Accredited Test Facility, state or city rules with the official web address, and a date for every step.", exceeds: "Also names questions asked of each program and a backup, such as a helper job while training." }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Learners who enroll in a welding program or apprenticeship within 90 days",
      "Learners who pass a welder certification test within 12 months (self-reported at follow-up)",
      "Learners hired as welders or welder helpers within 6 months",
      "Partner programs report new students arrive knowing the basic words and safety steps"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A phone or computer with internet for the AWS, OSHA, BLS and state pages and for weld photos",
      "Paper, pen, scissors and paper strips or cardboard for joint models",
      "Optional: sample welds (good and bad) from a local school or shop to look at, never to make",
      "About 60 to 75 minutes in total, in short sessions: lessons, practice, checks and the final task"
    ],
    facilitatorNotes: [
      "No welding, cutting or grinding in this course. Hands-on work belongs to a supervised shop with full PPE.",
      "If you can, bring sample welds or a used helmet and gloves for learners to look at and handle (cold, clean pieces only).",
      "Invite a welding instructor, an AWS Accredited Test Facility or a local fabrication shop to talk about what they look for.",
      "Help each learner check their own state or city rules; do not give one answer for the whole group.",
      "For learners with records or veterans, connect them to reentry or veteran services; do not promise any outcome.",
      "Score the final task with the rubric and give feedback on one Not yet row at a time."
    ]
  }
};
