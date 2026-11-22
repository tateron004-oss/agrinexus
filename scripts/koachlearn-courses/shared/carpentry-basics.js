"use strict";

// Koach Learn course: Workforce Development (wave 3, 30 October 2026) -> "Carpentry Basics". A pre-apprenticeship course: measuring, lumber and fasteners, tool and ladder safety,
// reading plans and laying out a wall, making a cut list, and the path into a carpentry apprenticeship or NCCER carpentry training. It PREPARES learners; it grants no license or
// certification, and the hands-on use of saws and other power tools is learned in person with a qualified instructor. Goes deeper than shared/skilled-trades-careers.js (which
// compares trades) and workforce/workforce-osha-safety.js (general safety). Built in the ADDIE format; the model is re-entry/reentry-ai-digital-confidence.js.

module.exports = {
  id: "carpentry-basics",
  category: "Workforce Development",
  name: "Carpentry Basics",
  skills: "Reading a tape measure to 1/16 inch, Choosing lumber and fasteners, Following tool and ladder safety, Laying out a stud wall from a plan, Writing a cut list, Planning your path to a carpentry apprenticeship",
  outcome: "measure and add lengths to the nearest 1/16 inch, pick the right lumber and fasteners, explain the safety steps for saws and ladders, lay out a simple stud wall from a plan, write a cut list with little waste, and follow a dated plan into a carpentry apprenticeship or training program.",
  about: [
    "Carpenters build and repair the frames of houses and buildings, put in floors, stairs, doors, windows and trim, and build the wooden forms that hold concrete. Most learn on the job or in a paid apprenticeship. This course is for job seekers, young people, veterans, people coming home from prison and adults changing careers who want to walk into a program or a first jobsite ready.",
    "You will learn to read a tape measure and do the fraction math carpenters use every day, to tell lumber, plywood and fasteners apart, and the safety habits for saws, nail guns and ladders. Then you will read a simple plan, lay out a stud wall on paper, write a cut list for a small project, and plan how to get into training.",
    "This course prepares you. It does not give you a license or a certification. Using a saw or any power tool is learned in person, with a qualified instructor, safety glasses and hearing protection. Nothing in this course asks you to cut with a power tool at home.",
    "Each lesson takes about five minutes, with a \"Try it now\" task and two quick questions. There is a knowledge check after each chapter and a 20-question quiz at the end. Your final product is your own carpentry starter packet."
  ],
  finalTask: "Make your carpentry starter packet: (1) five tape-measure readings of objects at home to the nearest 1/16 inch, and two of them added and subtracted with the work shown; (2) a pre-use safety checklist for a circular saw and an extension ladder; (3) a paper layout of an 8-foot stud wall at 16 inches on center, with the plates, every stud mark and the number of studs; (4) a cut list for a small shelf or planter box, with actual board sizes, saw-kerf allowance and how many boards to buy; and (5) a dated plan to apply to two carpentry apprenticeship or training programs near you, from official websites.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Adults and young people who want a building trade without a four-year degree: job seekers, youth in job programs, veterans, people coming home from prison and adults changing careers. Some have done hands-on, military or prison-industry work; most have no formal carpentry training.",
    startingPoint: "Can do whole-number math and some fractions and have used a hammer or screwdriver. Most cannot yet read a tape measure to 1/16 inch, add fractional lengths, tell nominal from actual lumber sizes, read a plan or lay out a wall.",
    gap: "Apprenticeship programs and contractors expect new hires to measure accurately, know the basic materials and tools, and work safely from day one. Wrong measurements waste wood and money; unsafe habits around saws and ladders cause serious injuries. Learners need the base math, words, safety habits and a clear plan to apply.",
    constraints: [
      "Reading level: plain words and short sentences (about grade 6 to 8); every trade word is explained",
      "No power-tool cutting at home: practice uses a tape measure, paper, pencil, a ruler and scrap cardboard or wood",
      "Devices: a phone or library computer for official pages; a calculator helps but is not required",
      "Time: 5 to 6 minute lessons that fit around work and appointments",
      "Youth under 18: federal child labor rules limit power-saw and woodworking-machine work; licensing and program rules differ by state"
    ],
    prerequisites: "Whole-number math. \"Starting a Career in the Skilled Trades\" helps learners choose a trade; \"Workplace Safety Basics (OSHA)\" covers general jobsite safety. This course goes deeper into carpentry."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Given a tape measure and objects at home", action: "read measurements to the nearest 1/16 inch and add or subtract fractional lengths", standard: "getting at least 4 of 5 right, with the work shown" },
    { id: "O2", condition: "Given a simple building job", action: "choose the lumber, sheet goods and fasteners for it and give their actual sizes", standard: "with the right material and the actual size for at least 4 of 5 items" },
    { id: "O3", condition: "Before using a saw, nail gun or ladder", action: "list the safety checks and protective equipment for the tool", standard: "naming the protective gear and at least four checks for each tool" },
    { id: "O4", condition: "Given a simple wall plan", action: "lay out a stud wall at 16 inches on center and count the studs and plates", standard: "with every stud mark within 1/16 inch and the right count" },
    { id: "O5", condition: "Given a small project drawing", action: "write a cut list with actual sizes, saw-kerf allowance and the number of boards to buy", standard: "so every part fits on the boards listed" },
    { id: "O6", condition: "Using official websites for your area", action: "write a dated plan to apply to two carpentry apprenticeship or training programs", standard: "with real programs, their requirements and a date for every step" }
  ],
  chapters: [
    {
      name: "Chapter 1: Measuring, materials and safety",
      lessons: [
        {
          title: "Reading a tape measure and adding fractions",
          objectives: ["O1"],
          minutes: 6,
          goal: "Read a tape measure to the nearest 1/16 inch and add or subtract two lengths.",
          text: [
            "Carpentry runs on the tape measure. Each inch is split into 16 small spaces. The longest line in the middle of the inch is 1/2. The next longest lines are 1/4 and 3/4. Then come the eighths, and the shortest lines are sixteenths.",
            "To read a length, find the last whole inch, then count the small lines past it. Ten sixteenths past 5 inches is 5-10/16, which you simplify to 5-5/8. Many tapes also mark every 16 inches in a different color, because that is a common stud spacing.",
            "The metal hook at the end slides a little on purpose. It moves out when you hook the end of a board and in when you push against a wall, so both readings are true. Never bend it straight or file it.",
            "To add fractions, make the bottom numbers match. 5-3/8 + 2-7/16 is 5-6/16 + 2-7/16 = 7-13/16. To subtract from a whole number, borrow one inch: 10 - 3-5/8 is 9-8/8 - 3-5/8 = 6-3/8. Measure twice, cut once."
          ],
          steps: ["Hook the tape on the end of the board or push it flat against the wall.", "Find the last whole inch before the end.", "Count the sixteenth lines past that inch.", "Simplify the fraction (8/16 = 1/2, 4/16 = 1/4, 2/16 = 1/8).", "Write it down right away and measure again before you mark."],
          words: [
            ["Fraction", "a part of a whole inch, such as 1/2, 3/8 or 5/16."],
            ["Sixteenth", "1/16 inch, the smallest mark on most carpenter's tapes."],
            ["Hook", "the metal tab at the end of a tape; it slides so inside and outside readings are both correct."],
            ["Simplify", "write a fraction with smaller numbers that mean the same, like 10/16 = 5/8."]
          ],
          slides: [
            { title: "Inside one inch", bullets: ["16 small spaces", "Longest middle line: 1/2", "Then 1/4 and 3/4, then eighths, then sixteenths"] },
            { title: "Reading a length", bullets: ["Find the last whole inch", "Count the sixteenths past it", "Simplify: 10/16 = 5/8"] },
            { title: "The hook moves on purpose", bullets: ["Out when you hook a board end", "In when you push against a wall", "Never bend it or file it"] },
            { title: "Adding and subtracting", bullets: ["Make the bottom numbers match", "5-3/8 + 2-7/16 = 7-13/16", "10 - 3-5/8 = 6-3/8", "Measure twice, cut once"] }
          ],
          tryIt: "Measure five things at home (a door width, a book, a shelf, a box, a table edge) to the nearest 1/16 inch and write each one down. Then add two of them and subtract the shorter from the longer, showing your work. Keep this page for your starter packet.",
          youCanNow: "read a tape measure to the nearest 1/16 inch and add or subtract lengths with fractions.",
          quickCheck: [
            { objective: "O1", q: "The tape shows 6 whole inches and 12 sixteenths past it. What is the length?", options: ["6-1/2 inches", "6-12 inches", "6-3/4 inches", "7-1/4 inches"], answer: 2, why: "12/16 simplifies to 3/4, so the length is 6-3/4 inches." },
            { objective: "O1", q: "What is 4-1/2 + 3-3/16?", options: ["7-4/18", "7-11/16", "8-1/16", "7-1/2"], answer: 1, why: "1/2 is 8/16, and 8/16 + 3/16 = 11/16, so the total is 7-11/16." }
          ]
        },
        {
          title: "Lumber, sheet goods and fasteners",
          objectives: ["O2"],
          minutes: 5,
          goal: "Choose the right board, sheet or fastener for a job and give its actual size.",
          text: [
            "Lumber is sold by a nominal size, the name, which is bigger than the actual size. A 2x4 is really about 1-1/2 by 3-1/2 inches. A 2x6 is about 1-1/2 by 5-1/2. A 1x10 is about 3/4 by 9-1/4. Always plan with the actual size, or your project will not fit.",
            "Sheet goods come in 4-by-8-foot sheets. Plywood is thin layers of wood glued crosswise; OSB is pressed wood strands. Both cover floors, walls and roofs. Pressure-treated lumber has chemicals that resist rot and bugs, so it is used outdoors and touching concrete or the ground. Wear gloves and a dust mask when you cut it, and never burn the scraps.",
            "Nails are sized by penny (written d). A 16d common nail, about 3-1/2 inches long, is a standard framing nail. Screws hold better and come out more easily; drill a small pilot hole near a board's end so it does not split. Outdoors, use coated or stainless fasteners so they do not rust.",
            "Sight down a board before you use it. Most boards have a slight curve along the edge, called the crown. In floor joists and rafters the crown goes up, so the weight pushes it flat."
          ],
          words: [
            ["Nominal size", "the name size of lumber, like 2x4, which is bigger than its real size."],
            ["Actual size", "the real measured size, like 1-1/2 by 3-1/2 inches for a 2x4."],
            ["Plywood and OSB", "4-by-8-foot sheets for floors, walls and roofs; plywood is glued layers, OSB is pressed wood strands."],
            ["Pressure-treated", "lumber with chemicals that resist rot and insects, used outdoors and near the ground."],
            ["Penny (d)", "the size system for nails; a 16d common nail is about 3-1/2 inches long."],
            ["Crown", "the slight upward curve along a board's edge."]
          ],
          slides: [
            { title: "Nominal is not actual", bullets: ["2x4 is about 1-1/2 x 3-1/2 in.", "2x6 is about 1-1/2 x 5-1/2 in.", "1x10 is about 3/4 x 9-1/4 in.", "Plan with the actual size"] },
            { title: "Sheets and treated wood", bullets: ["Plywood and OSB: 4 x 8 ft sheets", "Pressure-treated: outdoors, near ground or concrete", "Gloves and mask when cutting it; never burn scraps"] },
            { title: "Fasteners", bullets: ["16d common nail: about 3-1/2 in., for framing", "Screws hold better; pilot hole near ends", "Outdoors: coated or stainless"] },
            { title: "Sight down every board", bullets: ["Find the crown", "Crown up on joists and rafters"] }
          ],
          tryIt: "At a store, online lumber page or in your home, find one board and one sheet. Write the nominal size, then the actual size. Then pick a fastener for each of these jobs and write why: framing a wall, a deck outdoors, a shelf near the end of a board.",
          youCanNow: "tell nominal from actual lumber sizes and choose boards, sheets and fasteners that fit the job.",
          quickCheck: [
            { objective: "O2", q: "You stack three 2x4s flat. About how thick is the stack?", options: ["4-1/2 inches", "6 inches", "3 inches", "10-1/2 inches"], answer: 0, why: "A 2x4 is really about 1-1/2 inches thick, and 3 x 1-1/2 = 4-1/2 inches." },
            { objective: "O2", q: "Which lumber do you use for a post that touches the ground outdoors?", options: ["Indoor-grade plywood", "Any untreated 2x4", "OSB", "Pressure-treated lumber"], answer: 3, why: "Pressure-treated lumber resists rot and insects, which ground contact brings." }
          ]
        },
        {
          title: "Tool and ladder safety",
          objectives: ["O3"],
          minutes: 6,
          goal: "List the protective gear and pre-use checks for a circular saw, a nail gun and a ladder.",
          text: [
            "Carpentry injuries often come from saws, nail guns, falls and lifting. Every time, wear safety glasses, hearing protection around loud tools, work boots and, on a jobsite, a hard hat. Wear a dust mask when cutting makes dust. No loose sleeves, jewelry or long hair near a blade. If you are under 18, federal rules bar most power-saw and woodworking-machine work on the job; apprentices and student-learners 16 and older in approved programs have a limited exception.",
            "Before using a circular saw: check the cord and plug or the battery, make sure the blade guard snaps back on its own, use a sharp blade made for the material, and clamp the work so it cannot move. Unplug the saw or take the battery out before you change a blade. Stand to the side of the cut line, keep both hands away from it, and let the blade stop before you lift the saw. A blade that binds can kick the saw back at you.",
            "Nail guns: keep your finger off the trigger until you are ready, never point one at anyone, and disconnect the air or battery to clear a jam. A tool with a single-shot (sequential) trigger is safer for beginners.",
            "Ladders (from OSHA's ladder safety card): inspect it first, keep three points of contact, face the ladder, set the base out about 1 foot for every 4 feet of height to the top support, extend it at least 3 feet above a landing, and do not stand on the top step unless it is made for that. Watch for power lines, especially with a metal ladder."
          ],
          steps: ["Put on safety glasses, hearing protection and boots.", "Check the cord, plug or battery and the guard.", "Clamp the work.", "Unplug or remove the battery before changing a blade or clearing a jam.", "Set and check the ladder before you climb."],
          words: [
            ["PPE", "personal protective equipment: safety glasses, hearing protection, gloves, boots, hard hat."],
            ["Blade guard", "the cover that springs back over a saw blade when the cut ends."],
            ["Kickback", "when a blade binds and the saw jumps back toward the user."],
            ["Three points of contact", "two hands and one foot, or two feet and one hand, on the ladder at all times."]
          ],
          slides: [
            { title: "Wear it every time", bullets: ["Safety glasses and hearing protection", "Work boots; hard hat on a jobsite", "Dust mask when cutting makes dust"] },
            { title: "Circular saw checks", bullets: ["Cord, plug or battery OK", "Guard springs back on its own", "Sharp blade; work clamped", "Unplug before changing a blade"] },
            { title: "While cutting", bullets: ["Stand to the side of the cut line", "Hands away from the blade", "Let the blade stop before lifting"] },
            { title: "Ladders (OSHA)", bullets: ["Inspect first; three points of contact", "1 ft out for every 4 ft up", "3 ft above the landing; no top step", "Look for power lines"] }
          ],
          sources: [
            { name: "OSHA QuickCard: Portable Ladder Safety", url: "https://www.osha.gov/sites/default/files/publications/portable_ladder_qc.pdf" },
            { name: "U.S. Department of Labor: Child labor rules for non-farm jobs (Fact Sheet 43)", url: "https://www.dol.gov/agencies/whd/fact-sheets/43-child-labor-non-agriculture" }
          ],
          tryIt: "Write a pre-use safety checklist on a card for a circular saw (at least four checks and the gear you wear) and one for an extension ladder (at least four checks). If you have a ladder at home, do only the inspection and the 1-in-4 setup check; do not use a power saw at home without training. Keep the card for your starter packet.",
          youCanNow: "list the gear and checks before using a saw, a nail gun or a ladder, and know that cutting is learned in person with a qualified instructor.",
          quickCheck: [
            { objective: "O3", q: "You need to change the blade on a corded circular saw. What do you do first?", options: ["Hold the trigger lock off", "Unplug the saw", "Wear gloves only", "Ask someone to hold the guard open"], answer: 1, why: "Unplugging (or removing the battery) means the saw cannot start while your hands are near the blade." },
            { objective: "O3", q: "The top support is 12 feet up a wall. About how far out does the ladder base go?", options: ["1 foot", "6 feet", "12 feet", "3 feet"], answer: 3, why: "OSHA's rule is about 1 foot out for every 4 feet up: 12 / 4 = 3 feet." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Measuring, materials and safety",
        questions: [
          { objective: "O1", q: "What is 10 - 4-3/8?", options: ["6-3/8", "5-5/8", "6-5/8", "5-3/8"], answer: 1, why: "Borrow an inch: 9-8/8 - 4-3/8 = 5-5/8." },
          { objective: "O2", q: "Your plan says a shelf is a 1x10. About how wide is the board really?", options: ["10 inches", "9-1/2 inches", "1 inch", "9-1/4 inches"], answer: 3, why: "A 1x10 is about 3/4 by 9-1/4 inches; plan with the actual size." },
          { objective: "O2", q: "You screw into a board 1 inch from its end. What keeps it from splitting?", options: ["Drill a pilot hole first", "Use a longer screw", "Hit the screw with a hammer", "Use OSB instead"], answer: 0, why: "A pilot hole gives the screw room so the wood near the end does not split." },
          { objective: "O3", q: "Where do you stand when you make a cut with a circular saw?", options: ["Right behind the blade", "In front of the saw", "To the side of the cut line", "On the board you are cutting"], answer: 2, why: "If the saw kicks back, it comes straight back along the cut line; standing to the side keeps you out of its path." },
          { objective: "O3", q: "Which is a correct ladder rule from OSHA?", options: ["Stand on the top step to reach higher", "Use a metal ladder near power lines", "Keep one hand on the ladder", "Keep three points of contact when you climb"], answer: 3, why: "Three points of contact (two hands and a foot, or two feet and a hand) keeps you from falling." }
        ]
      }
    },
    {
      name: "Chapter 2: Plans, layout and your path in",
      lessons: [
        {
          title: "Reading a plan and laying out a stud wall",
          objectives: ["O4"],
          minutes: 6,
          goal: "Lay out an 8-foot stud wall at 16 inches on center and count the studs and plates.",
          text: [
            "A plan is a drawing to scale. On many house plans, 1/4 inch on paper equals 1 foot in real life. A floor plan looks down from above; an elevation shows a wall from the side. Lengths are written in feet and inches, such as 12'-6\" (12 feet 6 inches). Never measure a printed plan with a ruler to get a size; use the written dimensions or ask.",
            "A basic wall frame has a bottom plate, a top plate (often doubled), and studs standing between them. Studs are usually set 16 inches on center (o.c.), which means 16 inches from the center of one stud to the center of the next. Some walls use 24 inches o.c.; follow the plan.",
            "To lay out: lay the bottom and top plates side by side, measure from one end, and mark both at once. Mark the first stud at the end, then marks at 16, 32, 48, 64, 80 inches. Many carpenters mark 3/4 inch before each line (15-1/4, 31-1/4 and so on) and put an X on the side where the stud goes, so the edges of 4-foot sheets land on stud centers. Put a last stud at the far end.",
            "Count studs: wall length in inches divided by the spacing, plus one. An 8-foot wall is 96 inches; 96 / 16 = 6 spaces, so 7 studs. Corners, doors and windows need extra studs; the plan or your supervisor shows those."
          ],
          steps: ["Read the wall length and stud spacing on the plan.", "Lay the top and bottom plates side by side, ends even.", "Mark both plates together from the same end.", "Mark an X where each stud goes, and a stud at each end.", "Count: length / spacing + 1, plus any extras the plan shows."],
          words: [
            ["Scale", "how a drawing's size relates to real size, such as 1/4 inch = 1 foot."],
            ["Floor plan and elevation", "a floor plan looks down from above; an elevation shows one side of a wall or building."],
            ["Plate", "the flat board at the bottom or top of a wall that the studs stand on and hold up."],
            ["Stud", "a vertical board in a wall frame, often a 2x4 or 2x6."],
            ["On center (o.c.)", "measured from the center of one stud to the center of the next."]
          ],
          slides: [
            { title: "Reading a plan", bullets: ["Drawn to scale, often 1/4 in. = 1 ft", "Floor plan: from above; elevation: from the side", "Use the written dimensions, not a ruler"] },
            { title: "Parts of a wall", bullets: ["Bottom plate and top plate", "Studs between them", "Usually 16 in. on center"] },
            { title: "Laying out", bullets: ["Plates side by side, mark both at once", "Marks at 16, 32, 48, 64, 80 in.", "Mark an X where each stud goes"] },
            { title: "Count the studs", bullets: ["Length in inches / spacing + 1", "8 ft wall: 96 / 16 = 6, so 7 studs", "Add extras for corners, doors, windows"] }
          ],
          tryIt: "On paper (or on a long strip of cardboard taped out to 96 inches if you have room), draw an 8-foot wall. Mark the bottom plate at 16 inches on center from the left end, put an X where each stud goes, and write how many studs and plates you need. Check every mark with your tape. Keep it for your starter packet.",
          youCanNow: "read a simple wall plan and lay out studs at 16 inches on center with the right count.",
          quickCheck: [
            { objective: "O4", q: "What does 16 inches on center mean?", options: ["16 inches between the edges of two studs", "16 inches from the center of one stud to the center of the next", "16 studs in the wall", "A 16-inch-wide wall"], answer: 1, why: "On center is measured center to center, so every stud lands at the same spacing." },
            { objective: "O4", q: "How many studs does a 12-foot wall need at 16 inches on center, with no doors or windows?", options: ["10", "9", "12", "8"], answer: 0, why: "12 feet is 144 inches; 144 / 16 = 9 spaces, plus 1 = 10 studs." }
          ]
        },
        {
          title: "Making a cut list",
          objectives: ["O5"],
          minutes: 6,
          goal: "Write a cut list for a small project with actual sizes, kerf allowance and boards to buy.",
          text: [
            "A cut list is a table of every piece you need: the part name, how many, the material, and the exact length and width. It saves wood, money and trips to the store, and on a jobsite it lets a helper cut while the lead carpenter builds.",
            "Use actual sizes. Example: a shelf 24 inches wide overall, made of 1x10. The two sides are 3/4 inch thick each, so the shelf board between them is 24 - 3/4 - 3/4 = 22-1/2 inches long.",
            "Each saw cut turns a strip of wood into dust. That strip is the kerf, about 1/8 inch for many blades. Add one kerf for every cut when you plan how many pieces fit on a board.",
            "Then plan the boards. From one 8-foot (96-inch) 1x10: two sides at 30 inches and one shelf at 22-1/2 inches use 82-1/2 inches, plus 3 kerfs (3/8 inch) is 82-7/8 inches, leaving about 13 inches of scrap. Boards are not always perfectly square or exactly 96 inches, so trim the factory end first and buy a little extra."
          ],
          steps: ["List every part with its name and how many.", "Work out each length and width from actual sizes.", "Sort the parts by material.", "Fit the parts onto standard board lengths, adding one kerf per cut.", "Write how many boards to buy, plus a little extra."],
          words: [
            ["Cut list", "a table of every piece to cut, with how many, the material and the sizes."],
            ["Kerf", "the width of wood a saw blade removes in one cut, often about 1/8 inch."],
            ["Scrap", "the leftover wood after you cut all your parts."]
          ],
          slides: [
            { title: "What a cut list holds", bullets: ["Part name and how many", "Material", "Exact length and width"] },
            { title: "Use actual sizes", bullets: ["24 in. shelf with 3/4 in. sides", "24 - 3/4 - 3/4 = 22-1/2 in. shelf board"] },
            { title: "Allow for the kerf", bullets: ["Each cut removes about 1/8 in.", "Add one kerf per cut"] },
            { title: "Fit parts on boards", bullets: ["96 in. board: 30 + 30 + 22-1/2 + 3/8", "= 82-7/8 in., about 13 in. scrap", "Trim the factory end; buy a little extra"] }
          ],
          tryIt: "Sketch a small shelf or planter box with its overall sizes. Write a cut list (part, how many, material, length, width) using actual board sizes. Then fit the parts onto 8-foot boards with 1/8 inch per cut and write how many boards to buy. Keep it for your starter packet.",
          youCanNow: "write a cut list from a small drawing and work out how many boards to buy.",
          quickCheck: [
            { objective: "O5", q: "A box is 18 inches wide overall with 3/4-inch sides. How long is the bottom board that fits between the sides?", options: ["18 inches", "17-1/4 inches", "16-1/2 inches", "18-3/4 inches"], answer: 2, why: "Subtract both side thicknesses: 18 - 3/4 - 3/4 = 16-1/2 inches." },
            { objective: "O5", q: "Why do you add about 1/8 inch for each cut?", options: ["The tape measure is wrong", "Wood grows after cutting", "Boards are always longer than sold", "The saw blade turns that much wood into dust"], answer: 3, why: "The kerf is the wood the blade removes, so the pieces need that space on the board." }
          ]
        },
        {
          title: "Your path: apprenticeship, NCCER and your first job",
          objectives: ["O6"],
          minutes: 5,
          goal: "Find two carpentry apprenticeship or training programs and write a dated plan to apply.",
          text: [
            "The U.S. Bureau of Labor Statistics says carpenters usually learn on the job or in an apprenticeship, often sponsored by unions and contractor associations. Each year of an apprenticeship mixes technical classes with paid work. A high school diploma or equivalent is typically required. Look up pay and outlook on the BLS page, not in ads.",
            "Find programs on apprenticeship.gov: the Apprenticeship Finder lists openings by career and place, and the Partner Finder shows sponsors accepting new apprentices. Also ask American Job Centers, community colleges, union training centers, Helmets to Hardhats (for veterans) and reentry pre-apprenticeship programs.",
            "NCCER is a national construction training organization. Its carpentry curriculum starts with General Carpentry (with topics such as building materials and fasteners, construction plans, site and building layout, floors, walls, roof framing and stairs). NCCER certification requires passing a written assessment and a hands-on performance verification. Check nccer.org for where to train and test near you.",
            "Many employers also ask for an OSHA 10-hour construction card. Running your own carpentry or contracting business may need a state or local license; employees usually work under the contractor's. Check your state's contractor licensing board. Under 18? Federal rules limit power-saw and roofing work; check dol.gov/youthrules."
          ],
          steps: ["Read the BLS carpenters page for training and outlook.", "Search apprenticeship.gov for carpentry near you; pick two programs.", "Write each program's requirements and application dates.", "Gather documents: ID, diploma or GED, and anything else listed.", "Put a date on every step and a reminder in your phone."],
          words: [
            ["Apprenticeship", "a paid job with classes, where you learn a trade from experienced workers."],
            ["Pre-apprenticeship", "a short program that teaches math, tools, safety and job skills to help you get into an apprenticeship."],
            ["NCCER", "the National Center for Construction Education and Research, which writes construction training and gives credentials."],
            ["Performance verification", "a hands-on test where an evaluator watches you do real tasks."]
          ],
          slides: [
            { title: "How carpenters learn", bullets: ["On the job or in an apprenticeship", "Classes plus paid work each year", "Diploma or equivalent typically required"] },
            { title: "Find programs", bullets: ["apprenticeship.gov: Apprenticeship and Partner Finders", "American Job Centers, colleges, union centers", "Helmets to Hardhats; reentry pre-apprenticeships"] },
            { title: "NCCER carpentry", bullets: ["General Carpentry: materials, plans, layout, framing", "Written assessment plus hands-on verification", "Check nccer.org for training and testing"] },
            { title: "Other steps", bullets: ["OSHA 10 card: many employers ask", "Own business: check your state licensing board", "Under 18: check dol.gov/youthrules"] }
          ],
          sources: [
            { name: "U.S. Bureau of Labor Statistics: Carpenters (Occupational Outlook Handbook)", url: "https://www.bls.gov/ooh/construction-and-extraction/carpenters.htm" },
            { name: "Apprenticeship.gov: Apprenticeship Finder", url: "https://www.apprenticeship.gov/apprenticeship-job-finder" },
            { name: "NCCER: Carpentry", url: "https://www.nccer.org/craft-catalog/carpentry/" },
            { name: "NCCER: Industry-recognized credentials", url: "https://www.nccer.org/credentials-certifications/industry-recognized-credentials/" },
            { name: "U.S. Department of Labor: YouthRules", url: "https://www.dol.gov/agencies/whd/youthrules" }
          ],
          tryIt: "Use apprenticeship.gov and the other places in this lesson to find two carpentry programs near you. For each, write the name, the requirements, how to apply and the deadline. Then write your plan with a date for every step: documents, math practice, OSHA 10, applying and following up. Keep it for your starter packet.",
          youCanNow: "find carpentry programs on official websites and follow a dated plan to apply.",
          quickCheck: [
            { objective: "O6", q: "Where do you look up carpenters' pay and job outlook?", options: ["A social media ad", "The BLS Occupational Outlook Handbook", "A training school's sales page", "A video comment"], answer: 1, why: "BLS is the official U.S. source for pay and outlook, updated regularly." },
            { objective: "O6", q: "What do you need to pass for an NCCER certification in a craft?", options: ["A written assessment and a hands-on performance verification", "Only an online video", "A payment and nothing else", "A state driving test"], answer: 0, why: "NCCER says certification requires passing both a written assessment and a performance verification." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Plans, layout and your path in",
        questions: [
          { objective: "O4", q: "On a plan drawn at 1/4 inch = 1 foot, a wall is 3 inches long on paper. How long is the real wall?", options: ["3 feet", "6 feet", "12 feet", "16 feet"], answer: 2, why: "3 inches has twelve quarter inches, and each one is 1 foot, so the wall is 12 feet." },
          { objective: "O4", q: "Why do you mark the top and bottom plates side by side at the same time?", options: ["So the studs stand straight and line up", "To save pencil", "Because the plan says so on every job", "So you need fewer studs"], answer: 0, why: "Marking both together puts each stud's top and bottom in the same place, so the studs are plumb and evenly spaced." },
          { objective: "O5", q: "Which belongs on a cut list?", options: ["The store's phone number", "Your hourly pay", "Each part's name, how many, material and size", "The color of the tape measure"], answer: 2, why: "A cut list holds every piece with its count, material and exact size." },
          { objective: "O5", q: "You need four pieces at 23-3/4 inches from one 96-inch board, with 1/8 inch per cut. Do they fit?", options: ["No, they need 100 inches", "No, there is no room for any kerf", "Only three fit", "Yes: 95 + 1/2 = 95-1/2 inches, leaving 1/2 inch"], answer: 3, why: "4 x 23-3/4 = 95 inches, plus 4 kerfs of 1/8 = 1/2 inch, is 95-1/2 inches, so they fit with 1/2 inch to spare." },
          { objective: "O6", q: "A website promises a guaranteed carpentry license if you pay today. What do you do?", options: ["Pay before the price goes up", "Share your bank details to hold a spot", "Sign up because it sounds official", "Check your state licensing board and apprenticeship.gov first"], answer: 3, why: "Licenses come from your state or city, not from a paid website; check official sources first." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Carpentry Basics",
    questions: [
      { objective: "O1", q: "The tape shows 9 whole inches and 6 sixteenths past it. What is the length?", options: ["9-1/4 inches", "9-3/8 inches", "9-6 inches", "9-1/2 inches"], answer: 1, why: "6/16 simplifies to 3/8, so the length is 9-3/8 inches." },
      { objective: "O1", q: "Why does the hook at the end of a tape measure slide a little?", options: ["It is broken and should be bent straight", "To make the tape lighter", "So it can be filed down", "So hooking a board and pushing against a wall both read true"], answer: 3, why: "The hook moves by its own thickness, so inside and outside readings are both correct." },
      { objective: "O1", q: "What is 2-5/8 + 1-3/4?", options: ["4-3/8", "3-8/12", "4-1/8", "3-7/8"], answer: 0, why: "3/4 is 6/8; 5/8 + 6/8 = 11/8 = 1-3/8, and 2 + 1 + 1-3/8 = 4-3/8." },
      { objective: "O2", q: "About what is the actual size of a 2x6?", options: ["2 by 6 inches", "1-3/4 by 6 inches", "1-1/2 by 5-1/2 inches", "1 by 5 inches"], answer: 2, why: "A 2x6 is about 1-1/2 by 5-1/2 inches; nominal sizes are bigger than actual." },
      { objective: "O2", q: "You are building a deck outdoors. Which fasteners do you choose?", options: ["Coated or stainless fasteners made for outdoor use", "Plain indoor nails", "Any screws from the junk drawer", "Wood glue only"], answer: 0, why: "Outdoor fasteners are coated or stainless so they do not rust and fail." },
      { objective: "O2", q: "You sight down a floor joist and see a slight curve. Which way does it go?", options: ["Curve down, toward the ground", "It does not matter", "Cut the curve off first", "Crown up, so the weight pushes it flat"], answer: 3, why: "Joists and rafters go crown up, so the load pushes the curve flat." },
      { objective: "O3", q: "Which gear do you wear every time you use a circular saw?", options: ["Gloves only", "Safety glasses and hearing protection", "A loose long-sleeved shirt", "Nothing if the cut is short"], answer: 1, why: "Saws throw chips and are loud, so eyes and ears are protected on every cut." },
      { objective: "O3", q: "The saw's blade guard sticks open and does not spring back. What do you do?", options: ["Tape it open and keep working", "Use it carefully this once", "Stop, unplug it and report it so it is fixed", "Remove the guard"], answer: 2, why: "A guard that does not close leaves the blade exposed; the saw is not safe until it is fixed." },
      { objective: "O3", q: "An extension ladder reaches a roof edge. How far above the edge must it extend?", options: ["At least 3 feet", "6 inches", "It should stop just below the edge", "At least 10 feet"], answer: 0, why: "OSHA's ladder card says a ladder used to reach a higher surface extends at least 3 feet above the support." },
      { objective: "O3", q: "A nail gun jams. What is the safe first step?", options: ["Look into the tip and pull the trigger", "Hit it on the floor", "Point it at a coworker to test it", "Disconnect the air or remove the battery"], answer: 3, why: "Cutting off the power means the tool cannot fire while your hands are near it." },
      { objective: "O4", q: "On a floor plan, a dimension reads 10'-6\". What does it mean?", options: ["10.6 feet", "10 feet 6 inches", "106 inches", "10 inches 6 feet"], answer: 1, why: "The ' means feet and the \" means inches: 10 feet 6 inches." },
      { objective: "O4", q: "How many studs does a 16-foot wall need at 16 inches on center, with no openings?", options: ["16", "12", "13", "11"], answer: 2, why: "16 feet is 192 inches; 192 / 16 = 12 spaces, plus 1 = 13 studs." },
      { objective: "O4", q: "Which marks belong on a plate laid out at 16 inches on center from one end?", options: ["16, 32, 48, 64, 80 inches", "12, 24, 36, 48 inches", "10, 20, 30, 40 inches", "16, 30, 46, 60 inches"], answer: 0, why: "16 inches on center means every 16 inches: 16, 32, 48, 64, 80." },
      { objective: "O5", q: "What is the kerf?", options: ["A type of nail", "The curve along a board", "The leftover scrap", "The wood a saw blade removes in one cut"], answer: 3, why: "The kerf is the strip of wood the blade turns into dust, often about 1/8 inch." },
      { objective: "O5", q: "A bookcase is 30 inches wide overall with 3/4-inch sides. How long is each shelf between the sides?", options: ["30 inches", "28-1/2 inches", "29-1/4 inches", "29-1/2 inches"], answer: 1, why: "30 - 3/4 - 3/4 = 28-1/2 inches." },
      { objective: "O5", q: "Why make a cut list before you go to the store?", options: ["The store requires one", "It makes the wood stronger", "You buy the right boards and waste less", "It replaces the plan"], answer: 2, why: "A cut list shows every part, so you buy the right number of boards and waste less wood and money." },
      { objective: "O5", q: "Your parts add up to exactly 96 inches with kerfs, and you have one 96-inch board. What do you do?", options: ["Buy an extra board, because the end needs trimming and boards vary", "Cut without measuring", "Skip the kerf", "Make every part 1 inch shorter without checking the plan"], answer: 0, why: "Factory ends are often not square and lengths vary, so a plan with zero room needs an extra board." },
      { objective: "O6", q: "Where can you search for carpentry apprenticeship openings by career and place?", options: ["A pop-up ad", "A random social media group", "A text from a stranger", "The Apprenticeship Finder on apprenticeship.gov"], answer: 3, why: "Apprenticeship.gov is the official U.S. Department of Labor site for apprenticeships." },
      { objective: "O6", q: "What is an apprenticeship?", options: ["A free class with no job", "A paid job with classes where you learn from experienced workers", "A license you buy online", "A one-day safety video"], answer: 1, why: "An apprenticeship combines paid on-the-job work with technical classes." },
      { objective: "O6", q: "You want to start your own carpentry business someday. Where do you check the license rules?", options: ["A friend's guess", "Any online forum", "Your state's contractor licensing board", "The lumber store"], answer: 2, why: "Contractor licensing is set by your state or city, so the official board has the current rules." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  // pre-test: these quiz questions, taken before Lesson 1, so the quiz shows how much each learner gained
  pretest: { title: "Pre-Test: What Do You Already Know?", from: [0, 2, 3, 6, 8, 11, 14, 17, 18] },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      { name: "Accurate measuring", objective: "O1", notYet: "Fewer than 4 of 5 readings are right to 1/16 inch, or the fraction math has no work shown.", meets: "At least 4 of 5 readings are right to 1/16 inch, and the sum and difference are right with the work shown.", exceeds: "All five readings are right, every fraction is simplified, and the learner can explain the sliding hook." },
      { name: "Safety checklist", objective: "O3", notYet: "Missing protective gear, or fewer than four checks for the saw or the ladder.", meets: "Names the gear and at least four checks each for the circular saw and the extension ladder, including unplugging and the 1-in-4 setup.", exceeds: "Also covers kickback, power lines and three points of contact, and says the saw is learned with an instructor." },
      { name: "Wall layout", objective: "O4", notYet: "Stud marks are off by more than 1/16 inch, or the stud count is wrong.", meets: "Plates marked at 16 inches on center from one end, an X on each stud, and the right count (7 studs for 8 feet).", exceeds: "Also shows the 3/4-inch offset for sheet edges and notes extra studs for corners or openings." },
      { name: "Cut list", objective: "O5", notYet: "Uses nominal sizes, leaves out the kerf, or parts do not fit the boards listed.", meets: "Every part with count, material and actual size; kerf added; all parts fit on the boards to buy.", exceeds: "Also shows the scrap left on each board and a little extra for trimming." },
      { name: "Materials chosen", objective: "O2", notYet: "Board or fastener does not fit the job (for example untreated wood touching the ground).", meets: "Lumber and fasteners fit the project, with actual sizes written.", exceeds: "Explains why each choice fits, such as outdoor-rated fasteners or crown direction." },
      { name: "Dated plan from official sources", objective: "O6", notYet: "Steps have no dates, or programs and rules come from ads or posts.", meets: "Two real programs with requirements and deadlines from official sites, and a date for every step.", exceeds: "Also names a backup program and a person or office to call with questions." }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Learners who apply to a carpentry apprenticeship, pre-apprenticeship or NCCER training program within 30 days (follow-up survey)",
      "Learners accepted into a program or hired as a carpenter's helper or apprentice within 90 days",
      "Learners who earn an OSHA 10 construction card or an NCCER credential after the course",
      "Program partners report fewer new trainees failing entry math or safety checks"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A tape measure (16 or 25 feet), a pencil, paper and a ruler; a calculator helps",
      "A phone or library computer for official websites (bls.gov, apprenticeship.gov, nccer.org, dol.gov)",
      "Optional: a long strip of cardboard or a scrap board for the wall layout practice",
      "About 60 to 75 minutes in total, in short sessions: lessons, practice, checks and the final task"
    ],
    facilitatorNotes: [
      "In a classroom or job program: take the pre-test together, then do one chapter per session with the \"Try it now\" tasks done live.",
      "Do tape-measure and fraction drills as a group; many learners need extra practice with sixteenths.",
      "Do not let learners use saws or nail guns as part of this course. Hands-on tool use is taught in person by a qualified instructor with the right protective equipment.",
      "For youth under 18, follow federal and state child labor rules; most power-saw and roofing work is off limits outside approved apprentice or student-learner programs.",
      "Score the final task with the rubric, and invite a local union training center, contractor or pre-apprenticeship program to review the starter packets."
    ]
  }
};
