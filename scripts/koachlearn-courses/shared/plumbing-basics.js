"use strict";

// Koach Learn course: Workforce Development (wave 3, 30 October 2026) -> "Plumbing Basics". A job-prep course that leads toward a plumber's helper or apprentice job
// and, later, a state or local plumbing license. It PREPARES learners; it does not license them. Hands-on work (soldering, gas lines, trenches) is learned in person
// with a qualified instructor. Built in the ADDIE format; the model is re-entry/reentry-ai-digital-confidence.js. See scripts/koachlearn-courses/README.md.

const BLS = "https://www.bls.gov/ooh/construction-and-extraction/plumbers-pipefitters-and-steamfitters.htm";

module.exports = {
  id: "plumbing-basics",
  category: "Workforce Development",
  name: "Plumbing Basics",
  skills: "Tracing the water supply and drain systems, Explaining traps and vents, Measuring pipe and figuring drain slope, Spotting plumbing job hazards, Putting simple repairs in safe order, Planning your path to a plumbing apprenticeship",
  outcome: "explain how water comes into a building and how waste leaves it, measure pipe and figure drain slope, name the hazards of plumbing work and how to stay safe, put a simple repair in safe order, and follow a dated plan toward a plumbing apprenticeship and license.",
  about: [
    "Plumbers bring clean water into homes, schools, hospitals and factories and take wastewater safely away. Every building needs them, and most plumbers learn the trade in a paid apprenticeship instead of college. This course is for anyone thinking about that path: young people, veterans, people coming home from prison, job seekers and adults going back to learning.",
    "You will learn the two systems in every building (water supply, and drain, waste and vent), why traps and vents keep sewer gas out, the common pipe materials and fittings, and the math plumbers use every day: cut lengths and drain slope. Then you will learn the hazards of the job, the safe order for simple repairs, and how apprenticeships and licenses work.",
    "This course prepares you. It does not give you a license or a certificate. Most states and some cities license plumbers, and they set the experience and exam rules. Hands-on skills such as cutting and joining pipe, soldering with a torch, gas line work and trench work are learned in person with a qualified instructor, never from a video alone.",
    "Each lesson takes about five minutes, with a short \"Try it now\" task and two quick questions. There is a knowledge check after each chapter and a 20-question quiz at the end. Your final product is your own plumbing starter plan with real dates."
  ],
  finalTask: "Make your plumbing starter plan: (1) a hand-drawn sketch of one bathroom or kitchen that shows the hot and cold supply lines, the shutoff valves, the trap, the drain and the vent, with arrows for the way water flows; (2) a worked math sheet with two pipe cut lengths and one drain slope, work shown; (3) a hazard list for one plumbing job with the protection for each hazard; and (4) a dated plan that names two apprenticeships or training programs near you, what your state or city requires for a plumbing license (from the official page, with its web address), and a date for each step.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Young adults and adults looking for a skilled trade that does not need a four-year degree: job seekers, veterans, people coming home from prison, immigrants and adults returning to learning. Some have done hands-on work (maintenance, construction, the military); many have never worked on pipes.",
    startingPoint: "Can read short instructions, use a tape measure or ruler and do whole-number math. Most know where the sink and toilet are, but cannot explain where the water comes from, why a drain has a trap, how pipe is measured, or how someone becomes a licensed plumber.",
    gap: "Contractors and apprenticeship programs want helpers who know the basic parts and words, can measure and do simple math, and take safety seriously. Learners need that base, plus an honest plan with dates, to apply with confidence and avoid paying for training that does not lead to a job.",
    constraints: [
      "Reading level: plain words and short sentences (about grade 6 to 8); every trade word is explained",
      "No torch, gas line, trench or sewer work in this course: those are learned in person with a qualified instructor and the right protective equipment",
      "Devices: a phone or library computer to read official pages; paper, pen and a tape measure or ruler for practice",
      "Time: 5 to 6 minute lessons that fit around work, school and appointments",
      "Licensing differs by state and city: learners check the rules on the official page for where they live"
    ],
    prerequisites: "None. \"Starting a Career in the Skilled Trades\" is a good first step for choosing a trade; this course goes deeper into plumbing."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Given a sketch or photo of a kitchen or bathroom", action: "trace the water supply and the drain, waste and vent system and name each part", standard: "with the shutoff valves, trap, drain and vent labeled and the flow arrows in the right direction" },
    { id: "O2", condition: "Given a plumbing job description", action: "list the hazards of the job and the protection for each one", standard: "naming at least five hazards, each matched to a safe step or piece of protective equipment" },
    { id: "O3", condition: "Given pipe measurements and a drain run", action: "figure pipe cut lengths and the drop a drain needs", standard: "getting at least 4 of 5 practice items right with the work shown" },
    { id: "O4", condition: "Given a simple household plumbing problem", action: "put the steps of the repair in safe order", standard: "starting with shutting off the water and ending with a leak check, with no unsafe step" },
    { id: "O5", condition: "Using official websites for your state", action: "write a dated plan to enter a plumbing apprenticeship and work toward a license", standard: "with at least five dated steps and an official source for every requirement" }
  ],
  chapters: [
    {
      name: "Chapter 1: How plumbing works",
      lessons: [
        {
          title: "The two systems: water in, waste out",
          objectives: ["O1"],
          minutes: 5,
          goal: "Trace how clean water comes into a building and how used water leaves it.",
          text: [
            "Every building has two separate plumbing systems. The water supply system brings clean water in under pressure. The drain, waste and vent system (DWV) carries used water and waste out, using gravity. The two never mix: that keeps drinking water safe.",
            "Supply: water comes from the city main or a well, through the water meter (on city water) and the main shutoff valve, then into the building. A branch goes to the water heater, so from there you have a cold line and a hot line running to each fixture. Most fixtures also have their own small shutoff valves under the sink or behind the toilet.",
            "Drain, waste and vent: when water leaves a sink, it falls through a trap and into a drain pipe. Drains join larger pipes and flow to the building sewer, then to the city sewer or a septic tank. Vent pipes run up and out through the roof to let air into the drains.",
            "Plumbers also put in and repair fixtures (sinks, toilets, tubs, showers) and appliances that use water, such as water heaters and dishwashers. Pipefitters and steamfitters do similar work on larger systems in factories and big buildings."
          ],
          steps: [
            "Start at the water meter or well and find the main shutoff valve.",
            "Follow the cold line to the water heater; from there, a hot line and a cold line run to the fixtures.",
            "At each fixture, find the small shutoff valves.",
            "Follow the used water down through the trap, into the drain, and out to the sewer or septic tank."
          ],
          words: [
            ["Water supply system", "the pipes that bring clean water into a building under pressure."],
            ["DWV (drain, waste and vent)", "the pipes that carry used water and waste out by gravity, plus the vents that let air in."],
            ["Main shutoff valve", "the valve that turns off water to the whole building."],
            ["Fixture", "anything that uses or holds water and drains it: a sink, toilet, tub or shower."],
            ["Water main", "the large public pipe under the street that brings city water."],
            ["Septic tank", "an underground tank that treats household waste where there is no city sewer."]
          ],
          slides: [
            { title: "Two systems that never mix", bullets: ["Supply: clean water in, under pressure", "DWV: used water out, by gravity"] },
            { title: "Following the supply", bullets: ["Meter or well, then the main shutoff", "Water heater makes the hot line", "Small shutoffs at each fixture"] },
            { title: "Following the drain", bullets: ["Fixture, then trap, then drain pipe", "Building sewer to city sewer or septic tank", "Vents run up through the roof"] },
            { title: "What plumbers work on", bullets: ["Pipes, fixtures and water heaters", "Pipefitters: larger systems in big buildings"] }
          ],
          sources: [
            { name: "US Bureau of Labor Statistics: Plumbers, pipefitters and steamfitters", url: BLS }
          ],
          tryIt: "Go to the kitchen or bathroom where you live. Without taking anything apart, look under the sink. On paper, sketch what you see: the two supply lines (hot and cold), the small shutoff valves, the curved trap and the drain going into the wall. Add arrows for the way the water flows. Then find out where the main shutoff valve for the building is (ask the landlord or manager if you are not sure). Keep the sketch: it is the start of part 1 of your final task.",
          youCanNow: "trace how clean water comes into a building and how used water leaves it.",
          quickCheck: [
            { objective: "O1", q: "What moves water through the drain system?", options: ["Water pressure from the city", "Gravity", "The water heater", "The shutoff valves"], answer: 1, why: "Drains carry used water out by gravity, so drain pipes must slope downhill." },
            { objective: "O1", q: "A pipe bursts and water is spraying everywhere. Which valve stops water to the whole building?", options: ["The small valve under one sink", "The drain valve on the water heater", "The vent cap on the roof", "The main shutoff valve"], answer: 3, why: "The main shutoff valve turns off the water supply to the whole building." }
          ]
        },
        {
          title: "Traps, vents and slope: keeping sewer gas out",
          objectives: ["O1", "O3"],
          minutes: 5,
          goal: "Explain what a trap and a vent do, and figure the drop a drain pipe needs.",
          text: [
            "Look under a sink and you will see a curved pipe, often shaped like a P. This is the trap. It always holds a little water. That water seal blocks sewer gas, which smells bad and can make people sick, from coming up through the drain into the room. Toilets have a trap built in.",
            "Vents are pipes that connect to the drains and run up through the roof. They let air into the drain system so water flows smoothly and does not suck the water out of the traps. If a sink gurgles or a trap dries out and the room smells like sewer, a missing or blocked vent may be the reason.",
            "Drain pipes must slope downhill so waste flows. Too flat, and waste sits and clogs. Plumbing codes set the slope. For small drain pipes, codes often call for about 1/4 inch of drop for every foot of pipe; your local code sets the exact number. To find the total drop, multiply the slope by the length: a 12-foot drain at 1/4 inch per foot needs 3 inches of drop.",
            "A plumbing code is the set of rules for safe plumbing. Many places use the International Plumbing Code or the Uniform Plumbing Code, often with local changes. The local building department tells you which code applies and checks the work with an inspection."
          ],
          steps: [
            "Find the slope your code or instructor gives (practice: 1/4 inch per foot).",
            "Measure the length of the drain run in feet.",
            "Multiply: length x slope = total drop in inches.",
            "Check: the far end must be lower than the start by that amount."
          ],
          words: [
            ["Trap", "the curved pipe under a fixture that holds water to block sewer gas."],
            ["Sewer gas", "the bad-smelling and harmful gas that forms in sewers and drains."],
            ["Vent", "a pipe that lets air into the drains and out through the roof, so traps keep their water."],
            ["Slope (or pitch)", "how much a drain pipe drops for each foot of length, so waste flows downhill."],
            ["Plumbing code", "the rules for safe plumbing that a state or city adopts and inspectors check."],
            ["Inspection", "a visit from the building department to check that the work meets code."]
          ],
          slides: [
            { title: "The trap: a water seal", bullets: ["Curved pipe that always holds water", "Blocks sewer gas from the room", "Toilets have one built in"] },
            { title: "Vents let the drains breathe", bullets: ["Run up through the roof", "Keep water in the traps", "Gurgling or sewer smell: check the vent"] },
            { title: "Drains slope downhill", bullets: ["Too flat and waste sits and clogs", "Total drop = length x slope", "Practice: 12 ft x 1/4 in = 3 in"] },
            { title: "The code and the inspector", bullets: ["Many places use the IPC or UPC, with local changes", "The building department inspects the work"] }
          ],
          tryIt: "Practice only: on paper, figure the total drop for three drains at 1/4 inch per foot: 8 feet, 10 feet and 16 feet. Show your work (for example, 8 x 1/4 = 2 inches). Then look under a sink again and point to the trap. Write one sentence on why it must always hold water. Answers: 2 inches, 2 1/2 inches, 4 inches.",
          youCanNow: "explain what a trap and a vent do and figure the drop a drain pipe needs.",
          quickCheck: [
            { objective: "O1", q: "Why does a trap always hold a little water?", options: ["To block sewer gas from coming into the room", "To keep the pipe cool", "To make the water hotter", "To measure how much water was used"], answer: 0, why: "The water in the trap is a seal that keeps sewer gas out." },
            { objective: "O3", q: "Practice only: a drain is 20 feet long and must drop 1/4 inch per foot. How much total drop does it need?", options: ["4 inches", "20 inches", "5 inches", "1/4 inch"], answer: 2, why: "20 x 1/4 = 5, so the drain needs 5 inches of drop." }
          ]
        },
        {
          title: "Pipe, fittings and measuring a cut",
          objectives: ["O3"],
          minutes: 6,
          goal: "Name common pipe materials and figure a pipe cut length from a center-to-center measurement.",
          text: [
            "Plumbers use several pipe materials. Copper is used for water supply lines; it is joined by soldering (sweating) with a torch, or with press or push-to-connect fittings. PEX is flexible plastic tubing for supply lines, joined with crimp or expansion fittings. PVC and ABS are rigid plastic pipes used mostly for drains and vents. Older homes may have galvanized steel or cast iron. Pipe and fittings for drinking water must be lead free under federal law.",
            "Fittings change direction or join pipes: an elbow turns a corner, a tee makes a branch, a coupling joins two straight pieces, and an adapter joins two different materials. Pipe sizes are nominal: a 1/2-inch pipe is a trade size, not an exact measurement of the inside or outside.",
            "Plumbers often measure center to center: from the center of one fitting to the center of the next. But the pipe does not reach the center of a fitting. Each fitting has a fitting allowance (also called take-off): the distance from its center to where the pipe stops inside it. To find the cut length, subtract the fitting allowance for each end.",
            "Example (practice only, made-up numbers): center to center is 24 inches, and each elbow has a fitting allowance of 1/2 inch. Cut length = 24 - 1/2 - 1/2 = 23 inches. Real fitting allowances come from the maker's chart or your instructor, and you always measure twice and cut once."
          ],
          steps: [
            "Measure center to center between the two fittings.",
            "Look up the fitting allowance for each fitting (maker's chart or instructor).",
            "Subtract the allowance for each end: cut length = center to center - allowance 1 - allowance 2.",
            "Measure twice, mark the pipe, then cut."
          ],
          words: [
            ["Copper", "metal pipe used for water lines, often joined by soldering."],
            ["PEX", "flexible plastic tubing used for hot and cold water lines."],
            ["PVC and ABS", "rigid plastic pipes used mostly for drains and vents."],
            ["Fitting", "a part that joins pipes or changes their direction: elbow, tee, coupling, adapter."],
            ["Nominal size", "the trade name for a pipe's size, not an exact measurement."],
            ["Center to center", "a measurement from the center of one fitting to the center of the next."],
            ["Fitting allowance (take-off)", "the distance from a fitting's center to where the pipe stops inside it."],
            ["Lead free", "under federal law, pipe and fittings with no more than a weighted average of 0.25% lead on the surfaces that touch water, and solder and flux with no more than 0.2% lead."]
          ],
          slides: [
            { title: "Common pipe materials", bullets: ["Copper and PEX: water supply", "PVC and ABS: drains and vents", "Older homes: galvanized steel, cast iron"] },
            { title: "Fittings", bullets: ["Elbow turns, tee branches", "Coupling joins, adapter changes material", "Drinking water parts must be lead free"] },
            { title: "Measuring a cut", bullets: ["Measure center to center", "Subtract the fitting allowance at each end", "Example: 24 - 1/2 - 1/2 = 23 inches"] },
            { title: "Measure twice, cut once", bullets: ["Allowances come from the maker's chart", "Sizes are nominal (trade sizes)"] }
          ],
          sources: [
            { name: "EPA: Use of lead free pipes, fittings, fixtures, solder and flux for drinking water", url: "https://www.epa.gov/sdwa/use-lead-free-pipes-fittings-fixtures-solder-and-flux-drinking-water" }
          ],
          tryIt: "Practice only, with made-up numbers: figure the cut length for two pipes. Pipe A: center to center 36 inches, each fitting allowance 3/4 inch. Pipe B: center to center 18 1/2 inches, fitting allowances 1/2 inch and 1 inch. Show your work. Then use a tape measure to mark Pipe A's cut length on a strip of paper or cardboard. Answers: 34 1/2 inches and 17 inches. Keep this sheet for part 2 of your final task.",
          youCanNow: "name common pipe materials and figure a pipe cut length from a center-to-center measurement.",
          quickCheck: [
            { objective: "O3", q: "Practice only: center to center is 30 inches and each fitting allowance is 1/2 inch. What is the cut length?", options: ["30 inches", "31 inches", "29 1/2 inches", "29 inches"], answer: 3, why: "30 - 1/2 - 1/2 = 29 inches." },
            { objective: "O3", q: "Which pipe is most often used for drains and vents in newer homes?", options: ["Copper", "PVC", "Garden hose", "PEX"], answer: 1, why: "Rigid plastic pipe such as PVC (or ABS) is used mostly for drains and vents." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: How plumbing works",
        questions: [
          { objective: "O1", q: "Which statement about the two plumbing systems is true?", options: ["Supply and drain water mix in the water heater", "The supply system works by gravity", "Supply brings clean water in under pressure; the drain system carries waste out by gravity", "Vents carry clean water to the roof"], answer: 2, why: "The supply is under pressure, the drains work by gravity, and the two never mix." },
          { objective: "O1", q: "A bathroom smells like sewer and the sink gurgles. What is one likely cause?", options: ["The water heater is too hot", "A blocked vent or a dry trap", "The main shutoff is open", "The supply pipes are copper"], answer: 1, why: "Vents keep water in the traps; if a vent is blocked or a trap dries out, sewer gas can get in." },
          { objective: "O1", q: "Where does the hot water line start?", options: ["At the water heater", "At the roof vent", "At the trap", "At the sewer"], answer: 0, why: "Cold water goes into the water heater, and the hot line runs from there to the fixtures." },
          { objective: "O3", q: "Practice only: a 16-foot drain must drop 1/4 inch per foot. What is the total drop?", options: ["2 inches", "16 inches", "8 inches", "4 inches"], answer: 3, why: "16 x 1/4 = 4 inches." },
          { objective: "O3", q: "Why do you subtract the fitting allowance from a center-to-center measurement?", options: ["To save pipe money", "Because the pipe stops inside the fitting before its center", "Because pipes shrink in cold weather", "It is only needed for PEX"], answer: 1, why: "The pipe ends where it seats in the fitting, not at the fitting's center." }
        ]
      }
    },
    {
      name: "Chapter 2: Safety, simple repairs and your path",
      lessons: [
        {
          title: "Plumbing hazards and how to stay safe",
          objectives: ["O2"],
          minutes: 6,
          goal: "List the hazards of a plumbing job and the protection for each one.",
          text: [
            "The BLS lists common injuries for plumbers: cuts from sharp tools, burns from hot pipes and soldering equipment, and falls from ladders. Plumbers also lift heavy materials, work in tight spaces and often work outdoors in all weather.",
            "Sewage carries germs. Wear gloves and eye protection when you open a drain, wash your hands before you eat or touch your face, and keep cuts covered. Hot water and steam burn, so let a water heater line cool and open it only as your instructor shows you. Torch work (soldering) can start fires inside walls: trained plumbers use a heat shield, keep a fire extinguisher close and watch the area after they finish.",
            "Gas: if you smell gas, do not light anything or flip switches. Leave the building and call the gas company or 911 from outside. Gas line work needs training and, in some states, a special license. Electricity and water are a deadly mix: never stand in water near wiring, and keep cords and tools away from wet areas.",
            "Trenches and confined spaces: OSHA says trench collapses pose the greatest risk to workers' lives in excavation work. Never enter a trench unless it has been inspected and protected with sloping, shoring or a trench box, with a safe way in and out. Crawl spaces and tight areas need a partner and good air."
          ],
          steps: [
            "Read the job: what will you open, cut, heat or lift?",
            "Write each hazard: germs, burns, fire, cuts, falls, gas, electricity, trench, heavy lifting.",
            "Match each hazard to protection: gloves, glasses, heat shield, extinguisher, ladder check, leave and call, dry area, inspected trench, lift with help.",
            "If anything is unsafe, stop and ask your supervisor."
          ],
          words: [
            ["Hazard", "anything at work that could hurt you."],
            ["PPE", "personal protective equipment: gloves, safety glasses, boots, hearing protection."],
            ["Soldering (sweating)", "joining copper pipe and fittings with melted solder heated by a torch."],
            ["Heat shield", "a fire-resistant pad placed behind a joint to protect the wall from the torch."],
            ["Trench box", "a strong steel box placed in a trench to protect workers if the sides cave in."],
            ["Confined space", "a tight area with limited ways in and out, such as a crawl space or a vault."]
          ],
          slides: [
            { title: "Common plumbing injuries", bullets: ["Cuts from sharp tools", "Burns from hot pipes and torches", "Falls from ladders"] },
            { title: "Germs, heat and fire", bullets: ["Sewage: gloves, glasses, wash hands", "Hot water and steam burn", "Torch: heat shield and extinguisher"] },
            { title: "Gas and electricity", bullets: ["Smell gas: leave, then call from outside", "Never stand in water near wiring"] },
            { title: "Trenches and tight spaces", bullets: ["Never enter an unprotected trench", "Sloping, shoring or a trench box", "Crawl spaces: a partner and good air"] }
          ],
          sources: [
            { name: "US Bureau of Labor Statistics: Plumbers, Work Environment", url: BLS + "#tab-3" },
            { name: "OSHA: Trenching and excavation", url: "https://www.osha.gov/trenching-excavation" }
          ],
          tryIt: "Pick one job: \"clear a clogged kitchen drain\", \"replace a water heater\" or \"fix a leak under a house in a crawl space\". On paper, make two columns: Hazard and Protection. Write at least five hazards for that job and the protection for each. Keep it: it is part 3 of your final task.",
          youCanNow: "list the hazards of a plumbing job and the protection for each one.",
          quickCheck: [
            { objective: "O2", q: "You smell gas in a basement where you are working. What do you do first?", options: ["Light a match to find the leak", "Turn on the lights to see better", "Keep working and tell someone later", "Leave the building and call the gas company or 911 from outside"], answer: 3, why: "Sparks or flames can ignite gas, so get out first and call from outside." },
            { objective: "O2", q: "Which protection matters most when you open a sewage drain?", options: ["Gloves and eye protection, then washing your hands", "A heat shield", "Hearing protection only", "A trench box"], answer: 0, why: "Sewage carries germs, so you protect your skin and eyes and wash your hands." }
          ]
        },
        {
          title: "Simple repairs in safe order",
          objectives: ["O4"],
          minutes: 6,
          goal: "Put the steps of a simple plumbing repair in safe order, from shutting off the water to checking for leaks.",
          text: [
            "Helpers and new apprentices often start with simple jobs. Each one follows the same safe pattern: shut off the water, relieve the pressure, protect the area, do the repair, turn the water back on slowly, and check for leaks.",
            "Running toilet: water keeps flowing into the bowl. A worn flapper (the rubber seal at the bottom of the tank) is a common cause. Turn off the toilet's shutoff valve, flush to empty the tank, swap the flapper for one that fits that toilet, turn the water back on and watch the tank fill. A drop of food coloring in the tank that shows up in the bowl without flushing means it still leaks.",
            "Slow sink drain: first try a plunger. If that fails, put a bucket under the trap, wear gloves, loosen the slip nuts by hand or with pliers, take off the trap and clear it. Put it back with the washers facing the right way, run water and check for drips.",
            "Know your limit. Gas lines, water heater burners, main sewer lines and anything that needs a permit belong to licensed plumbers. In someone else's home, do only what your supervisor assigns. Practice these steps on paper here; you learn the hands-on part with an instructor."
          ],
          steps: [
            "Shut off the water at the fixture valve (or the main if there is none).",
            "Relieve the pressure: open the faucet or flush to drain the water.",
            "Protect the area: bucket, towels, gloves and eye protection.",
            "Do the repair (swap the part or clear the trap).",
            "Turn the water back on slowly.",
            "Check for leaks and test the fixture."
          ],
          words: [
            ["Flapper", "the rubber seal at the bottom of a toilet tank that lets water into the bowl when you flush."],
            ["Slip nut", "the large nut that holds a sink trap together; it can often be loosened by hand."],
            ["Plunger", "a rubber cup on a handle that pushes and pulls water to clear a clog."],
            ["Relieve the pressure", "open a faucet or flush after shutting off the water, so water does not spray when you open the line."],
            ["Permit", "official permission from the building department to do certain plumbing work, followed by an inspection."]
          ],
          slides: [
            { title: "The safe pattern for every repair", bullets: ["Shut off, relieve pressure, protect the area", "Repair, turn on slowly, check for leaks"] },
            { title: "Running toilet", bullets: ["Shut off and flush to empty the tank", "Replace a worn flapper that fits", "Food coloring test for leaks"] },
            { title: "Slow sink drain", bullets: ["Try a plunger first", "Bucket and gloves, then remove the trap", "Reassemble and check for drips"] },
            { title: "Know your limit", bullets: ["Gas, burners, main sewer and permit work: licensed plumbers", "Do only what your supervisor assigns"] }
          ],
          tryIt: "Write each of these steps on a separate slip of paper, mix them up, then put them in safe order for a running toilet: \"Watch the tank fill\", \"Turn off the toilet's shutoff valve\", \"Replace the flapper\", \"Flush to empty the tank\", \"Do the food coloring test\", \"Turn the water back on slowly\". Then write the safe order for clearing a sink trap in your own words, starting with the bucket.",
          youCanNow: "put the steps of a simple plumbing repair in safe order, from shutting off the water to checking for leaks.",
          quickCheck: [
            { objective: "O4", q: "What is the first step before you remove a sink's supply line?", options: ["Loosen the nut quickly", "Turn on the faucet", "Turn off the shutoff valve for that sink", "Call the city"], answer: 2, why: "Shutting off the water first keeps the line from spraying when you open it." },
            { objective: "O4", q: "You finished putting a sink trap back on. What comes next?", options: ["Leave right away", "Run water and check for drips", "Paint the pipe", "Turn off the main"], answer: 1, why: "Every repair ends with a test and a leak check." }
          ]
        },
        {
          title: "Your path: apprenticeship, license and a dated plan",
          objectives: ["O5"],
          minutes: 6,
          goal: "Write a dated plan to enter a plumbing apprenticeship and work toward a license, using official sources.",
          text: [
            "The BLS says most plumbers, pipefitters and steamfitters learn the trade through a 4- or 5-year apprenticeship, with about 2,000 hours of paid on-the-job training a year plus classroom learning. Unions, trade associations and businesses sponsor apprenticeships. Some people start as helpers first. A high school diploma or equivalent is typically required.",
            "The BLS also says most states and some localities require plumbers to be licensed, often after 2 to 5 years of experience and an exam. Some states require a special license for gas line work. Rules differ, so you check the official licensing page for your state or city. CareerOneStop's License Finder can help you find it. If you have a record, ask the board how it reviews records before you pay for training.",
            "To find apprenticeships, use the Apprenticeship Job Finder on apprenticeship.gov, call the local plumbers and pipefitters union, ask plumbing contractors if they hire helpers, and ask your local workforce center (American Job Center). Veterans can ask about using their GI Bill benefits for an approved apprenticeship.",
            "Pay and job numbers change each year. Read the current numbers and their year on the BLS page instead of trusting ads or videos. Before you pay any school, ask: does it lead to an apprenticeship or job, and does it count toward the license hours in your state?"
          ],
          steps: [
            "Open your state's plumbing licensing page (try CareerOneStop's License Finder). Write the license levels, hours and exam it lists, with the web address.",
            "Search apprenticeship.gov for plumbing apprenticeships near you. Write down two, with how and when to apply.",
            "Write one helper job or contractor you could contact while you wait.",
            "List anything you need first: diploma or GED, driver's license, basic math practice.",
            "Put a date on every step and share the plan with someone who will check on you."
          ],
          words: [
            ["Apprenticeship", "a paid job where you learn the trade from experienced workers, plus classes."],
            ["Journeyworker (journeyman)", "a plumber who finished training and passed the license level that lets them work without direct supervision."],
            ["Helper", "an entry-level worker who assists plumbers and learns on the job."],
            ["License", "official permission from a state or city to do plumbing work."],
            ["American Job Center", "a free public office that helps people find training and jobs."]
          ],
          slides: [
            { title: "How most plumbers learn", bullets: ["4- or 5-year paid apprenticeship", "About 2,000 paid on-the-job hours a year", "Plus classroom learning"] },
            { title: "Licenses", bullets: ["Most states and some cities license plumbers", "Often 2 to 5 years of experience and an exam", "Check the official page for your state"] },
            { title: "Where to look", bullets: ["apprenticeship.gov Job Finder", "Local union, contractors, American Job Center"] },
            { title: "Your plan", bullets: ["Official license rules with the web address", "Two apprenticeships, one helper job", "A date on every step"] }
          ],
          sources: [
            { name: "US Bureau of Labor Statistics: Plumbers, How to Become One", url: BLS + "#tab-4" },
            { name: "Apprenticeship.gov: Apprenticeship Job Finder", url: "https://www.apprenticeship.gov/apprenticeship-job-finder" },
            { name: "CareerOneStop: License finder", url: "https://www.careeronestop.org/Toolkit/Training/find-licenses.aspx" }
          ],
          tryIt: "Follow the steps to write your plan on paper or in a free document. Write at least five steps, each with a date, and the web address of every official page you used. Put it with your sketch, math sheet and hazard list: together they are your plumbing starter plan.",
          youCanNow: "write a dated plan to enter a plumbing apprenticeship and work toward a license, using official sources.",
          quickCheck: [
            { objective: "O5", q: "Where should you check what your state requires for a plumbing license?", options: ["A video comment", "An ad for a training school", "A friend's opinion", "The state or city licensing board's official page"], answer: 3, why: "License rules differ by place, and the official page is the one that counts." },
            { objective: "O5", q: "Which plan step is written the most usefully?", options: ["\"Apply to two plumbing apprenticeships from apprenticeship.gov by March 1\"", "\"Look into plumbing\"", "\"Get a license someday\"", "\"Learn a lot\""], answer: 0, why: "A useful step names the exact action, where, and a date." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Safety, simple repairs and your path",
        questions: [
          { objective: "O2", q: "A plumber is about to solder copper pipe near a wooden wall. What protects the wall?", options: ["A trench box", "A heat shield, with a fire extinguisher close by", "Hearing protection", "A plunger"], answer: 1, why: "A heat shield blocks the flame, and an extinguisher is ready in case of fire." },
          { objective: "O2", q: "Your crew needs to work in a deep trench with straight dirt walls and no support. What do you do?", options: ["Go in quickly and get out fast", "Go in if the soil looks dry", "Do not enter until it is inspected and protected by sloping, shoring or a trench box", "Send the newest worker in first"], answer: 2, why: "OSHA says never enter a trench unless it has been inspected and protected." },
          { objective: "O4", q: "Put these in order for a running toilet: (a) replace the flapper, (b) turn off the shutoff valve, (c) check for leaks, (d) flush to empty the tank.", options: ["b, d, a, c", "a, b, c, d", "d, a, b, c", "c, b, a, d"], answer: 0, why: "Shut off, empty the tank, do the repair, then check for leaks." },
          { objective: "O4", q: "Which job should a new helper leave to a licensed plumber?", options: ["Plunging a slow sink", "Replacing a toilet flapper", "Moving a gas line to a new stove", "Putting a bucket under a trap"], answer: 2, why: "Gas line work needs training and, in some states, a special license." },
          { objective: "O5", q: "According to the BLS, how do most plumbers learn the trade?", options: ["A two-week online class", "A four-year college degree", "Watching videos at home", "A 4- or 5-year paid apprenticeship"], answer: 3, why: "The BLS says most learn through a 4- or 5-year apprenticeship with paid on-the-job training." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Plumbing Basics",
    questions: [
      { objective: "O1", q: "Which system carries used water and waste out of a building?", options: ["The water supply system", "The drain, waste and vent system", "The water meter", "The water heater"], answer: 1, why: "The DWV system carries waste out by gravity and lets air in through vents." },
      { objective: "O1", q: "Where are a sink's small shutoff valves usually found?", options: ["Under the sink", "On the roof", "Inside the trap", "At the sewer"], answer: 0, why: "Fixture shutoffs are usually under the sink or behind the toilet." },
      { objective: "O1", q: "What does a vent pipe do?", options: ["Brings hot water to the shower", "Holds water to block sewer gas", "Measures water use", "Lets air into the drains so traps keep their water"], answer: 3, why: "Vents let air in so water flows smoothly and does not siphon out of the traps." },
      { objective: "O1", q: "What blocks sewer gas from coming up through a sink drain?", options: ["The shutoff valve", "The water meter", "The water seal in the trap", "The faucet"], answer: 2, why: "The water held in the trap is a seal against sewer gas." },
      { objective: "O3", q: "Practice only: a 10-foot drain must drop 1/4 inch per foot. What is the total drop?", options: ["2 1/2 inches", "10 inches", "1/4 inch", "4 inches"], answer: 0, why: "10 x 1/4 = 2 1/2 inches." },
      { objective: "O3", q: "Practice only: center to center is 40 inches and each fitting allowance is 1 inch. What is the cut length?", options: ["40 inches", "39 inches", "42 inches", "38 inches"], answer: 3, why: "40 - 1 - 1 = 38 inches." },
      { objective: "O3", q: "Which pipe is flexible plastic tubing used for water supply lines?", options: ["Cast iron", "PEX", "ABS", "Galvanized steel"], answer: 1, why: "PEX is flexible tubing for hot and cold water lines." },
      { objective: "O3", q: "What does \"nominal size\" mean for pipe?", options: ["Its exact outside measurement", "Its weight", "A trade size, not an exact measurement", "Its price"], answer: 2, why: "Pipe sizes are trade names; the real inside and outside sizes differ." },
      { objective: "O2", q: "According to the BLS, which is a common plumbing injury?", options: ["Burns from hot pipes and soldering equipment", "Sunburn from screens", "Eye strain from reading", "Hearing loss from music"], answer: 0, why: "The BLS lists cuts, burns from hot pipes and soldering equipment, and falls from ladders." },
      { objective: "O2", q: "You are fixing a leak in a wet basement near an outlet. What is the safe choice?", options: ["Stand in the water to reach faster", "Keep away from wiring while standing in water and ask your supervisor about shutting off power", "Use a corded drill in the water", "Touch the outlet to see if it works"], answer: 1, why: "Electricity and water are a deadly mix, so you stay clear and get the power handled first." },
      { objective: "O2", q: "Why wash your hands after clearing a drain, even if you wore gloves?", options: ["To make the pipe shine", "It is only a habit", "Gloves are not allowed", "Sewage carries germs that can make you sick"], answer: 3, why: "Gloves help, but washing removes germs before you eat or touch your face." },
      { objective: "O4", q: "What is the safe pattern for a simple repair?", options: ["Repair first, then shut off the water", "Shut off, relieve pressure, protect the area, repair, turn on slowly, check for leaks", "Turn the water on full, then repair", "Check for leaks before you start, then leave"], answer: 1, why: "Every simple repair starts by shutting off the water and ends with a leak check." },
      { objective: "O4", q: "After turning off a sink's water, why open the faucet before removing a line?", options: ["To relieve the pressure so water does not spray", "To heat the pipe", "To test the vent", "To fill the trap"], answer: 0, why: "Opening the faucet drains the pressure left in the line." },
      { objective: "O4", q: "A sink drains slowly. What do you try first?", options: ["Cut the drain pipe", "Call for a permit", "A plunger", "Turn off the main gas"], answer: 2, why: "A plunger is the simple first step before taking the trap apart." },
      { objective: "O4", q: "A drop of food coloring in the toilet tank shows up in the bowl without flushing. What does that tell you?", options: ["The vent is blocked", "The water heater is broken", "The trap is dry", "The flapper still leaks"], answer: 3, why: "Color getting into the bowl without a flush means water is leaking past the flapper." },
      { objective: "O5", q: "This course will:", options: ["Give you a plumbing license", "Count as your apprenticeship", "Prepare you to train and apply; it does not license you", "Replace your state's exam"], answer: 2, why: "Licenses come from the state or city after the experience and exam they require." },
      { objective: "O5", q: "Which free site can help you find plumbing apprenticeships near you?", options: ["A pop-up ad", "apprenticeship.gov", "A random job forum", "A video comment section"], answer: 1, why: "Apprenticeship.gov is the US Department of Labor's site with an Apprenticeship Job Finder." },
      { objective: "O5", q: "What does the BLS say about plumbing licenses?", options: ["Most states and some localities require them, often after 2 to 5 years of experience and an exam", "No state requires one", "Only plumbers in big cities need one", "You get one when you buy tools"], answer: 0, why: "The BLS says most states and some localities license plumbers, often with experience and an exam." },
      { objective: "O5", q: "A school promises a fast plumbing course. Which question helps you most before you pay?", options: ["Is the building new?", "What color are the shirts?", "Can I start on a Monday?", "Does it lead to an apprenticeship or job, and do its hours count toward my state's license?"], answer: 3, why: "Good training leads to a job and counts toward the license rules where you live." },
      { objective: "O5", q: "Which plan step is complete?", options: ["\"Call the local plumbers union about the plumbing apprenticeship by April 10, after reading the state license page\"", "\"Learn plumbing\"", "\"Apply somewhere soon\"", "\"Think about a license\""], answer: 0, why: "It names the action, who, when and the official source to check first." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  // pre-test: these quiz questions, taken before Lesson 1, so the quiz shows how much each learner gained
  pretest: { title: "Pre-Test: What Do You Already Know?", from: [0, 3, 4, 5, 8, 10, 11, 14, 16, 17] },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      { name: "Supply and drain sketch", objective: "O1", notYet: "Parts are missing, or the arrows point the wrong way.", meets: "Hot and cold supply, shutoff valves, trap, drain and vent are labeled, with arrows in the right direction.", exceeds: "Also shows where the main shutoff is and explains in one sentence why the trap and vent matter." },
      { name: "Plumbing math", objective: "O3", notYet: "Cut lengths or slope have mistakes, or no work is shown.", meets: "Two cut lengths and one drain slope, at least 4 of 5 practice items right, work shown.", exceeds: "All right, and the learner explains where real fitting allowances and slopes come from." },
      { name: "Hazard list", objective: "O2", notYet: "Fewer than five hazards, or protection does not match the hazard.", meets: "At least five hazards, each matched to a safe step or the right gear.", exceeds: "Also includes what to do if you smell gas and when to stop and ask a supervisor." },
      { name: "Safe repair order", objective: "O4", notYet: "A repair starts without shutting off the water or ends without a leak check.", meets: "Both repairs are in safe order, from shutoff to leak check.", exceeds: "Also names which jobs belong to a licensed plumber and why." },
      { name: "Dated plan from official sources", objective: "O5", notYet: "Steps have no dates, or license rules come from ads or posts.", meets: "At least five dated steps, two real apprenticeships or programs, and license rules from the official page with its web address.", exceeds: "Also includes a helper job to apply for while waiting and questions to ask each program." }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Learners who apply to a plumbing apprenticeship or training program within 90 days",
      "Learners accepted into an apprenticeship or hired as plumber's helpers within 6 months",
      "Learners who stay in their apprenticeship or helper job for at least 6 months (self-reported at follow-up)",
      "Partner programs report applicants arrive knowing the basic parts, words, math and safety steps"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A phone or computer with internet to read the BLS, OSHA, EPA, apprenticeship.gov and state licensing pages",
      "Paper, pen, a tape measure or ruler and a calculator (a phone calculator is fine)",
      "Optional: a sink or toilet to look at (never take anything apart for this course), or photos of a sink trap and pipe fittings",
      "Optional, for programs: sample pipe pieces and fittings (PVC, PEX, copper) to pass around, with no tools or torches"
    ],
    facilitatorNotes: [
      "This course teaches knowledge, steps and safety. Do not have learners solder, cut pipe or work on live water, gas or drains as part of it; hands-on skills belong in a supervised shop with a qualified instructor.",
      "Look up your state's plumbing licensing page and nearby apprenticeships before the session, so learners can check them together.",
      "Practice the cut-length and slope math on a board with several made-up examples; many learners need help with fractions.",
      "Invite a local plumber, union training coordinator or apprenticeship sponsor to talk about a typical day and how to apply.",
      "For learners with records, have them ask the licensing board how it reviews records before paying for training.",
      "Score the final task with the rubric and give feedback on one Not yet row at a time."
    ]
  }
};
