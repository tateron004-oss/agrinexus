"use strict";

// Koach Learn course: Workforce Development (wave 1, 30 October 2026) -> "Electrical Trade Basics". A pre-apprenticeship course that prepares learners for an electrical apprenticeship
// and the trade's basic math, words and safety. It PREPARES learners; it does not license them, and it does no live electrical work (that needs supervised training and the right PPE).
// Built in the ADDIE format; the model is re-entry/reentry-ai-digital-confidence.js. See scripts/koachlearn-courses/README.md.

module.exports = {
  id: "electrical-basics",
  category: "Workforce Development",
  name: "Electrical Trade Basics",
  skills: "Using Ohm's law and the power formula, Reading a simple circuit diagram, Following lockout/tagout and test-before-touch, Reading a tape measure and a multimeter, Planning your path to an electrical apprenticeship",
  outcome: "do the basic electrical math, read a simple circuit, explain the safety steps that keep electricians alive, take accurate measurements, and follow a dated plan to apply for an electrical apprenticeship and work toward a license.",
  about: [
    "Electricians wire homes, offices, factories, solar systems and car chargers. Most learn the trade in a paid apprenticeship, and most states license electricians. This course is the first step: it is for job seekers, veterans, young adults, people coming home from prison, immigrants and adults going back to learning who want to get into an apprenticeship ready.",
    "You will learn what volts, amps, ohms and watts are and do the math with Ohm's law. You will read a simple circuit drawing and learn why homes are wired the way they are. Then you will learn the safety steps every electrician follows, the tools and measuring skills apprentices use on day one, and how to apply to an apprenticeship.",
    "This course prepares you. It does not give you a license or a certificate, and it never asks you to work on live electricity. Electrical work is dangerous and can kill. Real wiring is learned only in a supervised program, with the right protective equipment. Licenses come from your state or city.",
    "Each lesson takes about five minutes, with a \"Try it now\" task and two quick questions. There is a knowledge check after each chapter and a 20-question quiz at the end. Your final product is your own electrical starter packet with a dated plan."
  ],
  finalTask: "Make your electrical starter packet: (1) five Ohm's law or power problems you write yourself, solved with the work shown; (2) a sketch of a simple parallel circuit with the power source, breaker, switch, two loads, hot, neutral and ground labeled; (3) the six lockout/tagout steps written in order on a card; (4) five tape-measure readings of objects at home to the nearest 1/16 inch; and (5) a dated plan to apply to two electrical apprenticeship programs, with your state's license rules from the official page.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Adults who want a skilled trade without a four-year degree: job seekers, veterans, young adults, people coming home from prison, immigrants and adults returning to learning. Some have done hands-on or military work; most have no formal electrical training.",
    startingPoint: "Can do whole-number math and some fractions, and know that electricity can be dangerous. Most cannot yet define volts, amps or ohms, use Ohm's law, read a circuit drawing or describe lockout/tagout.",
    gap: "Apprenticeship programs often test math and reading and look for applicants who know basic terms and take safety seriously. Learners need the base math, the words, the safety habits and a clear plan to apply, so they get in and stay safe.",
    constraints: [
      "Reading level: plain words and short sentences (about grade 6 to 8); every trade word is explained",
      "No live electrical work: the only hands-on meter practice is on an ordinary household battery",
      "Devices: a phone or library computer for official pages; paper, pen, a calculator and a tape measure",
      "Time: 5 to 6 minute lessons that fit around work and appointments",
      "Licensing differs by state and city: learners check the official page for where they live"
    ],
    prerequisites: "Whole-number math and simple fractions. \"Starting a Career in the Skilled Trades\" helps learners choose a trade; this course goes deeper into the electrical trade."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Given made-up values for a circuit", action: "calculate volts, amps, ohms or watts using Ohm's law and the power formula", standard: "getting at least 4 of 5 practice problems right, with the work shown" },
    { id: "O2", condition: "Given a simple circuit drawing", action: "name each part of the circuit and say whether the loads are in series or in parallel", standard: "with every part named correctly" },
    { id: "O3", condition: "Given a job where equipment must be worked on", action: "list the lockout/tagout steps in order and name the main electrical hazards and their protection", standard: "with all six steps in the right order and at least three hazards matched to protection" },
    { id: "O4", condition: "Using a tape measure and, if you have one, a multimeter on a household battery", action: "read measurements to the nearest 1/16 inch and read a battery's voltage", standard: "getting at least 4 of 5 readings right" },
    { id: "O5", condition: "Using official websites for your state", action: "write a dated plan to apply to an electrical apprenticeship and work toward a license", standard: "with two real programs, their requirements and a date for every step" }
  ],
  chapters: [
    {
      name: "Chapter 1: How electricity works",
      lessons: [
        {
          title: "Volts, amps, ohms and watts",
          objectives: ["O1"],
          minutes: 5,
          goal: "Explain volts, amps, ohms and watts in your own words with an example of each.",
          text: [
            "Electricity is the flow of tiny charged particles (electrons) through a wire. Four words describe it, and you will use them every day in the trade.",
            "Voltage (volts, V) is the push. Current (amps, A) is how much electricity flows. Resistance (ohms, Ω) is how hard the material makes it to flow. Power (watts, W) is how much work the electricity does, such as heating, lighting or turning a motor.",
            "A garden hose helps: the water pressure is like volts, the amount of water flowing is like amps, and a kink or a narrow nozzle is like resistance. More push or less resistance means more flow.",
            "In US homes, most outlets run at about 120 volts, and big appliances such as dryers and ranges use about 240 volts. Batteries give a small, steady direct current (DC); homes use alternating current (AC), which changes direction many times a second."
          ],
          words: [
            ["Volts (V)", "the electrical push, also called voltage."],
            ["Amps (A)", "the amount of electric current flowing, also called current."],
            ["Ohms (Ω)", "resistance: how much a material holds back the flow."],
            ["Watts (W)", "power: how much work the electricity is doing."],
            ["AC and DC", "alternating current (homes and buildings) changes direction; direct current (batteries) flows one way."],
            ["Conductor", "a material that lets electricity flow easily, such as copper wire."]
          ],
          slides: [
            { title: "Four words you use every day", bullets: ["Volts: the push", "Amps: the flow", "Ohms: the resistance", "Watts: the work done"] },
            { title: "The hose picture", bullets: ["Water pressure = volts", "Water flowing = amps", "A kink or narrow nozzle = resistance"] },
            { title: "In US buildings", bullets: ["Most outlets: about 120 volts", "Dryers and ranges: about 240 volts", "Homes use AC; batteries give DC"] }
          ],
          tryIt: "On paper, write the four words (volts, amps, ohms, watts). Next to each, write what it means in your own words and one example from home. For example: watts, \"my microwave says 1,000 watts on its label\". Check a label on a lamp, phone charger or appliance (unplugged, and only the label) and copy the volts, amps or watts it lists.",
          youCanNow: "explain volts, amps, ohms and watts and find them on an appliance label.",
          quickCheck: [
            { objective: "O1", q: "Which word means the amount of electric current flowing?", options: ["Volts", "Ohms", "Amps", "Watts"], answer: 2, why: "Amps (current) measure how much electricity flows." },
            { objective: "O1", q: "In the garden hose picture, what is like resistance?", options: ["A kink or narrow nozzle", "The water pressure", "The amount of water", "The color of the hose"], answer: 0, why: "A kink holds back the flow, the way resistance holds back current." }
          ]
        },
        {
          title: "Ohm's law and power math",
          objectives: ["O1"],
          minutes: 6,
          goal: "Calculate volts, amps, ohms or watts using Ohm's law and the power formula.",
          text: [
            "Ohm's law links the push, the flow and the resistance: volts = amps × ohms, written V = I × R (I stands for current). If you know two of them, you can find the third: I = V ÷ R and R = V ÷ I.",
            "The power formula: watts = volts × amps, written P = V × I. You can also find amps from watts: I = P ÷ V.",
            "Worked examples (practice only, made-up numbers): A 12-volt battery is connected to a 4-ohm load. Amps = 12 ÷ 4 = 3 amps. A 120-volt circuit carries 15 amps. Watts = 120 × 15 = 1,800 watts. A 1,500-watt space heater on 120 volts draws 1,500 ÷ 120 = 12.5 amps.",
            "Why it matters: each circuit has a breaker sized for a certain number of amps. If too many things run at once and draw more amps than the circuit is meant for, it is overloaded and the breaker trips. Electricians do this math to size wires and breakers safely, following the electrical code."
          ],
          steps: [
            "Write what you know and what you need to find.",
            "Pick the formula: V = I × R, I = V ÷ R, R = V ÷ I, or P = V × I.",
            "Put in the numbers and do the math.",
            "Write the unit (V, A, Ω or W) and ask: does the answer make sense?"
          ],
          words: [
            ["Ohm's law", "the rule that volts = amps × ohms (V = I × R)."],
            ["Power formula", "watts = volts × amps (P = V × I)."],
            ["Load", "anything that uses electricity, such as a light, a heater or a motor."],
            ["Breaker", "a safety switch in the panel that turns off a circuit when too much current flows."],
            ["Overload", "when a circuit carries more current than it is meant to."]
          ],
          slides: [
            { title: "Ohm's law", bullets: ["V = I × R", "I = V ÷ R", "R = V ÷ I"] },
            { title: "Power", bullets: ["P = V × I (watts = volts × amps)", "I = P ÷ V"] },
            { title: "Worked examples (practice only)", bullets: ["12 V ÷ 4 Ω = 3 A", "120 V × 15 A = 1,800 W", "1,500 W ÷ 120 V = 12.5 A"] },
            { title: "Why electricians do this math", bullets: ["Breakers are sized in amps", "Too many amps = overload, breaker trips", "Math helps size wire and breakers to code"] }
          ],
          tryIt: "Practice only. Solve and show your work: (1) 9 volts and 3 ohms: how many amps? (2) 2 amps and 6 ohms: how many volts? (3) 120 volts and 10 amps: how many watts? (4) A 600-watt microwave on 120 volts: how many amps? (5) 24 volts and 4 amps: how many ohms? Answers: 3 A; 12 V; 1,200 W; 5 A; 6 Ω. Then write one problem of your own and solve it: it is the start of part 1 of your final task.",
          youCanNow: "use Ohm's law and the power formula to find volts, amps, ohms or watts.",
          quickCheck: [
            { objective: "O1", q: "Practice only: 12 volts across a 3-ohm load. How many amps flow?", options: ["36 amps", "9 amps", "15 amps", "4 amps"], answer: 3, why: "I = V ÷ R, so 12 ÷ 3 = 4 amps." },
            { objective: "O1", q: "Practice only: a 120-volt circuit carries 5 amps. How many watts is that?", options: ["24 watts", "600 watts", "125 watts", "115 watts"], answer: 1, why: "P = V × I, so 120 × 5 = 600 watts." }
          ]
        },
        {
          title: "Circuits and how to read a simple diagram",
          objectives: ["O2"],
          minutes: 6,
          goal: "Name the parts of a simple circuit and tell series from parallel on a diagram.",
          text: [
            "A circuit is a complete loop. It has a power source, conductors (wires), a load, a way to control it (a switch) and protection (a breaker or fuse). If the loop is broken, nothing flows.",
            "In a series circuit, the loads are in one line, so the current goes through each in turn; if one goes out, they all go out. In a parallel circuit, each load has its own path, so each gets the full voltage and one can go out while the others stay on. Outlets and lights in a home are wired in parallel.",
            "Most US building wiring has three kinds of wire. The hot wire carries the current to the load (often black or red). The neutral carries it back (usually white). The ground (bare copper or green) gives a safe path if something goes wrong. Electricians still test every wire, because colors can be wrong in old or poor work.",
            "Two kinds of special protection: a GFCI (ground-fault circuit interrupter) cuts power fast if current leaks, for example through a person, and is used near water such as kitchens, bathrooms and outdoors. An AFCI (arc-fault circuit interrupter) cuts power when it senses arcing that could start a fire. A short circuit happens when current takes an unplanned, easy path; it can cause sparks and fire, and the breaker should trip."
          ],
          steps: [
            "Find the power source (battery or panel).",
            "Follow the wire from the source through the breaker or fuse and the switch.",
            "Find each load and see whether it is in one line (series) or on its own branch (parallel).",
            "Follow the path back to the source."
          ],
          words: [
            ["Circuit", "a complete loop that electricity flows through."],
            ["Series circuit", "loads in one line; current passes through each one in turn."],
            ["Parallel circuit", "each load on its own branch; each gets the full voltage."],
            ["Hot, neutral and ground", "hot carries current to the load, neutral carries it back, ground is a safety path."],
            ["GFCI", "ground-fault circuit interrupter: cuts power fast if current leaks, to protect people from shock."],
            ["AFCI", "arc-fault circuit interrupter: cuts power when it senses arcing that could cause a fire."],
            ["Short circuit", "current taking an unplanned, easy path; it can cause sparks and fire."]
          ],
          slides: [
            { title: "Parts of every circuit", bullets: ["Source, wires, load", "Control: a switch", "Protection: a breaker or fuse"] },
            { title: "Series vs parallel", bullets: ["Series: one line, one out = all out", "Parallel: own branch, full voltage each", "Homes: parallel"] },
            { title: "Hot, neutral, ground", bullets: ["Hot: often black or red", "Neutral: usually white", "Ground: bare or green", "Always test; colors can be wrong"] },
            { title: "Extra protection", bullets: ["GFCI: protects people near water", "AFCI: helps prevent arcing fires", "Short circuit: breaker should trip"] }
          ],
          tryIt: "On paper, draw a battery, a switch and two light bulbs in series. Then draw the same parts in parallel. Label the source, switch and loads on both, and write what happens in each drawing if one bulb burns out. Next, draw a home circuit: panel, breaker, switch and two lights in parallel, with hot, neutral and ground labeled. Keep it: it is part 2 of your final task.",
          youCanNow: "name the parts of a simple circuit and tell series from parallel on a drawing.",
          quickCheck: [
            { objective: "O2", q: "Two bulbs are wired so that when one burns out, the other stays on. How are they wired?", options: ["In series", "In parallel", "With no switch", "Backward"], answer: 1, why: "In parallel each bulb has its own path, so one can go out while the other stays on." },
            { objective: "O2", q: "Which device protects people from shock near a kitchen sink?", options: ["An AFCI", "A light switch", "A dimmer", "A GFCI"], answer: 3, why: "A GFCI cuts power fast when current leaks, such as through a person near water." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: How electricity works",
        questions: [
          { objective: "O1", q: "Which word means the electrical push?", options: ["Volts", "Amps", "Ohms", "Watts"], answer: 0, why: "Voltage is the push that moves current through a circuit." },
          { objective: "O1", q: "Practice only: 2 amps flow through a 10-ohm load. What is the voltage?", options: ["5 volts", "12 volts", "20 volts", "8 volts"], answer: 2, why: "V = I × R, so 2 × 10 = 20 volts." },
          { objective: "O1", q: "Practice only: a 1,200-watt hair dryer runs on 120 volts. How many amps does it draw?", options: ["10 amps", "100 amps", "1,320 amps", "12 amps"], answer: 0, why: "I = P ÷ V, so 1,200 ÷ 120 = 10 amps." },
          { objective: "O2", q: "Which part of a circuit turns it off if too much current flows?", options: ["The load", "The neutral wire", "The switch plate", "The breaker or fuse"], answer: 3, why: "Breakers and fuses protect the circuit by stopping the current when it is too high." },
          { objective: "O2", q: "In most US building wiring, which wire is usually white?", options: ["The hot wire", "The neutral wire", "The ground wire", "None; colors are never used"], answer: 1, why: "Neutral is usually white, but electricians still test, because colors can be wrong." }
        ]
      }
    },
    {
      name: "Chapter 2: Safety, tools and your path",
      lessons: [
        {
          title: "Electrical safety: lockout/tagout and test before touch",
          objectives: ["O3"],
          minutes: 6,
          goal: "List the six lockout/tagout steps in order and name the main electrical hazards.",
          text: [
            "Electricity can kill. Electrical hazards include shock, electrocution, burns, arc flash (a sudden blast of heat and light from an electrical fault), fire and falls after a shock. OSHA lists common causes of electrical injuries, including contact with power lines, missing ground-fault protection, a broken path to ground, using equipment the wrong way, and misusing extension cords.",
            "The safest way to work is with the power off and locked out. OSHA's lockout/tagout rule (29 CFR 1910.147) sets the order for authorized, trained workers: 1. Prepare: know what energy is there and how to control it. 2. Shut the equipment down. 3. Isolate it: open the disconnect or breaker. 4. Apply your own lock and tag. 5. Release or block stored energy (such as charged capacitors or springs). 6. Verify: test that it is really off before you start.",
            "Test before touch: use a tester or meter that you first check on a known live source, then test the circuit, then check the tester again. Only trained, qualified workers do this, as part of an employer's program.",
            "Other habits: use non-conductive (fiberglass) ladders near electricity, keep well away from overhead power lines, use GFCI protection for power tools, never work in wet conditions on electrical equipment, and wear the safety glasses, gloves and other PPE your employer requires."
          ],
          steps: [
            "Prepare: know the energy and how to control it.",
            "Shut down the equipment.",
            "Isolate it from the power source.",
            "Apply your own lock and tag.",
            "Release or block stored energy.",
            "Verify it is off: test before you touch."
          ],
          words: [
            ["Electrocution", "death caused by electric shock."],
            ["Arc flash", "a sudden blast of heat, light and pressure from an electrical fault."],
            ["Lockout/tagout", "turning off and locking the energy source, with a tag, so no one can turn it on during the work."],
            ["Stored energy", "energy that stays after the power is off, such as in a capacitor or a spring."],
            ["Qualified worker", "someone trained to know the hazards and do the specific electrical task safely."],
            ["OSHA", "the US Occupational Safety and Health Administration, which sets workplace safety rules."]
          ],
          slides: [
            { title: "Electricity can kill", bullets: ["Shock, electrocution, burns", "Arc flash and fire", "Falls after a shock"] },
            { title: "Lockout/tagout: six steps", bullets: ["1. Prepare  2. Shut down  3. Isolate", "4. Lock and tag  5. Release stored energy", "6. Verify: test before touch"] },
            { title: "Test before touch", bullets: ["Check the tester on a known live source", "Test the circuit", "Check the tester again"] },
            { title: "Everyday habits", bullets: ["Fiberglass ladders near electricity", "Stay away from overhead power lines", "GFCI for power tools; never work wet"] }
          ],
          sources: [
            { name: "OSHA: Electrical safety", url: "https://www.osha.gov/electrical" },
            { name: "OSHA: Control of hazardous energy (lockout/tagout), 29 CFR 1910.147", url: "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.147" }
          ],
          tryIt: "On an index card, write the six lockout/tagout steps in order from memory. Check them against the lesson and fix any mistakes. On the back, write three electrical hazards and the protection for each (for example: overhead power line, stay far away and call the utility). Keep the card: it is part 3 of your final task.",
          youCanNow: "list the six lockout/tagout steps in order and match electrical hazards to the right protection.",
          quickCheck: [
            { objective: "O3", q: "What is the last lockout/tagout step before work starts?", options: ["Verify the equipment is off by testing", "Apply your lock", "Tell the customer", "Shut down the equipment"], answer: 0, why: "After locking out and releasing stored energy, you verify it is really off before touching anything." },
            { objective: "O3", q: "Which ladder is the right choice near electrical equipment?", options: ["Aluminum", "Any ladder", "Fiberglass", "A wet wooden ladder"], answer: 2, why: "Fiberglass does not conduct electricity the way metal does." }
          ]
        },
        {
          title: "Tools, measuring and the electrical code",
          objectives: ["O4"],
          minutes: 6,
          goal: "Read a tape measure to the nearest 1/16 inch and read a battery's voltage on a multimeter.",
          text: [
            "Apprentices use hand tools such as lineman's pliers, wire strippers, insulated screwdrivers, a level and a tape measure, and test tools such as a voltage tester and a multimeter. Your employer or program teaches you which tools to buy and how to use each one safely.",
            "Reading a tape measure: each inch is split into 16 small marks. The longest marks are the half inch, then quarters, then eighths, then sixteenths. Count the small marks past the last whole inch and reduce the fraction: 5 inches and 6 marks is 5 6/16, which is 5 3/8 inches. Measure twice, cut once.",
            "A multimeter measures volts, amps and ohms. Practice only on an ordinary AA battery: set the dial to DC volts, touch the red lead to the + end and the black lead to the - end, and read the screen. A fresh AA battery reads about 1.5 volts. Never practice on an outlet or any home wiring.",
            "Electricians follow the National Electrical Code (NEC), also called NFPA 70, which sets safe standards for wiring and equipment. States and cities adopt the code, sometimes with their own changes, and license tests cover the code and local rules. You will learn to use the code book in your apprenticeship."
          ],
          steps: [
            "Tape: find the last whole inch.",
            "Count the 1/16 marks past it.",
            "Reduce the fraction: 8/16 = 1/2, 4/16 = 1/4, 2/16 = 1/8.",
            "Meter (battery only): set to DC volts, red to +, black to -, read the screen."
          ],
          words: [
            ["Multimeter", "a meter that measures volts, amps and ohms."],
            ["Voltage tester", "a tool that shows whether voltage is present."],
            ["Leads", "the red and black wires with probes that connect a meter to what you test."],
            ["NEC (NFPA 70)", "the National Electrical Code: safe standards for wiring, adopted by states and cities."],
            ["Reduce a fraction", "write it in the smallest numbers, such as 6/16 = 3/8."]
          ],
          slides: [
            { title: "Starter tools", bullets: ["Lineman's pliers, wire strippers", "Insulated screwdrivers, level, tape", "Voltage tester and multimeter"] },
            { title: "Reading a tape measure", bullets: ["16 marks per inch", "Count marks past the whole inch", "5 6/16 = 5 3/8 inches"] },
            { title: "Multimeter practice: battery only", bullets: ["Dial to DC volts", "Red to +, black to -", "Fresh AA reads about 1.5 volts", "Never practice on outlets or wiring"] },
            { title: "The electrical code", bullets: ["NEC, also called NFPA 70", "States and cities adopt it", "License tests cover the code"] }
          ],
          sources: [
            { name: "NFPA: NFPA 70, National Electrical Code", url: "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70" },
            { name: "US Bureau of Labor Statistics: Electricians", url: "https://www.bls.gov/ooh/construction-and-extraction/electricians.htm" }
          ],
          tryIt: "Measure five things at home with a tape measure (a door, a book, a table, a window, a box) to the nearest 1/16 inch, and write each reading in reduced form. Then practice: 3 and 12/16 = ? 7 and 2/16 = ? 10 and 8/16 = ? (Answers: 3 3/4, 7 1/8, 10 1/2.) If you have a multimeter, read the voltage of an AA battery and write it down. Keep your readings: they are part 4 of your final task.",
          youCanNow: "read a tape measure to the nearest 1/16 inch and read a battery's voltage with a multimeter.",
          quickCheck: [
            { objective: "O4", q: "A board measures 4 inches and 12 sixteenth marks. What is that in reduced form?", options: ["4 1/2 inches", "4 3/4 inches", "4 12 inches", "4 1/4 inches"], answer: 1, why: "12/16 reduces to 3/4, so it is 4 3/4 inches." },
            { objective: "O4", q: "Where is it safe to practice with a multimeter in this course?", options: ["On a wall outlet", "On a breaker panel", "On a light switch", "On an AA battery"], answer: 3, why: "A household battery is low-voltage and safe; outlets and wiring are for trained, supervised work." }
          ]
        },
        {
          title: "Apprenticeship, license and your plan",
          objectives: ["O5"],
          minutes: 6,
          goal: "Write a dated plan to apply to an electrical apprenticeship and work toward a license.",
          text: [
            "The Bureau of Labor Statistics says most electricians learn through a 4- or 5-year apprenticeship. Each year usually includes about 2,000 hours of paid on-the-job training plus classes in electrical theory, blueprint reading and safety. A high school diploma or equivalent (such as the GED) is required, and some people attend a technical school first.",
            "Most states require electricians to pass a test and hold a license. The test covers the National Electrical Code and state and local codes. Some places also require continuing education to keep the license. Titles such as apprentice, journeyman and master differ by state, so check your state or local electrical licensing board.",
            "Apprenticeship programs are run by unions, contractor groups and employers. Many ask for a diploma or GED, an ID, sometimes a driver's license, a math and reading test and an interview, and some only take applications at certain times. Find programs on apprenticeship.gov and at American Job Centers and community colleges. Veterans can ask the VA about the GI Bill; if you have a record, ask the program and the licensing board how they review it.",
            "Your plan turns this into steps with dates: what to study, which programs to apply to, when they open, and what the license board requires."
          ],
          steps: [
            "Write your goal, for example \"start an electrical apprenticeship by next fall\".",
            "Find two programs near you; write what each asks for and when applications open.",
            "Find your state or city licensing board and write what it requires (with the web address).",
            "Gather documents: diploma or GED, ID, driver's license if needed.",
            "Add study dates for math and reading, and a date for each application."
          ],
          words: [
            ["Apprenticeship", "a paid job where you learn from experienced electricians, plus classes."],
            ["Journeyman", "in many states, an electrician who finished an apprenticeship and passed the license test; titles vary."],
            ["Licensing board", "the state or city office that issues electrical licenses."],
            ["Continuing education", "short courses some licenses require to stay current on the code and safety."],
            ["American Job Center", "a free local center for job search and training help, funded by the US Department of Labor."]
          ],
          slides: [
            { title: "How most electricians learn", bullets: ["4- or 5-year apprenticeship (BLS)", "About 2,000 paid hours a year plus classes", "Diploma or GED required"] },
            { title: "Licenses", bullets: ["Most states require a test and license", "Test covers the NEC and local codes", "Check your state or city board"] },
            { title: "Getting in", bullets: ["Union, contractor and employer programs", "Often: math and reading test, interview", "Some apply only at certain times"] },
            { title: "Your plan", bullets: ["Two programs and their requirements", "License rules from the official board", "A date for every step"] }
          ],
          sources: [
            { name: "US Bureau of Labor Statistics: Electricians, How to Become One", url: "https://www.bls.gov/ooh/construction-and-extraction/electricians.htm#tab-4" },
            { name: "Apprenticeship.gov: Apprenticeship Job Finder", url: "https://www.apprenticeship.gov/apprenticeship-job-finder" },
            { name: "CareerOneStop: License finder", url: "https://www.careeronestop.org/Toolkit/Training/find-licenses.aspx" }
          ],
          tryIt: "Final task: make your electrical starter packet. Put together your five Ohm's law problems (Lesson 2), your labeled circuit sketch (Lesson 3), your lockout/tagout card (Lesson 4) and your five tape readings (Lesson 5). Then write your dated plan: your goal, two apprenticeship programs near you with what each asks for and when it takes applications, what your state or city requires for a license (with the web address), and a date for every step.",
          youCanNow: "follow your own dated plan to apply to an electrical apprenticeship and work toward a license.",
          quickCheck: [
            { objective: "O5", q: "According to the BLS, how do most electricians learn the trade?", options: ["A one-week online class", "Watching videos at home", "A 4- or 5-year paid apprenticeship", "Only a four-year college degree"], answer: 2, why: "Most electricians learn in a 4- or 5-year apprenticeship that mixes paid work and classes." },
            { objective: "O5", q: "Where do you find out what your state requires for an electrical license?", options: ["Your state or local electrical licensing board", "A social media group", "A tool store", "This course"], answer: 0, why: "Licensing rules differ by state and city, so the official board is the source." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Safety, tools and your path",
        questions: [
          { objective: "O3", q: "Which lockout/tagout step comes right after isolating the equipment?", options: ["Verify by testing", "Apply your own lock and tag", "Release stored energy", "Prepare"], answer: 1, why: "The order is prepare, shut down, isolate, lock and tag, release stored energy, verify." },
          { objective: "O3", q: "Why do workers release or block stored energy after locking out?", options: ["To save electricity", "To make the lock fit", "To finish faster", "Because parts like capacitors can still shock after the power is off"], answer: 3, why: "Stored energy can still hurt you after the power is off." },
          { objective: "O3", q: "OSHA lists a common cause of electrical injuries. Which is it?", options: ["Contact with power lines", "Wearing safety glasses", "Using a fiberglass ladder", "Reading the code book"], answer: 0, why: "Contact with power lines is one of the common causes OSHA lists." },
          { objective: "O4", q: "What is 9/16 inch plus 7/16 inch?", options: ["1/2 inch", "16 inches", "1 inch", "2 inches"], answer: 2, why: "9/16 + 7/16 = 16/16, which is 1 inch." },
          { objective: "O5", q: "Which plan step is complete?", options: ["\"Become an electrician\"", "\"Apply someday\"", "\"Look at programs\"", "\"Apply to the county apprenticeship program by its March 1 deadline, with my GED and ID\""], answer: 3, why: "It names the program, the deadline and what to bring." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Electrical Trade Basics",
    questions: [
      { objective: "O1", q: "Which word means how much work the electricity is doing?", options: ["Watts", "Ohms", "Amps", "Volts"], answer: 0, why: "Watts measure power: the work done, such as heat or light." },
      { objective: "O1", q: "Ohm's law says:", options: ["P = V + I", "V = I × R", "R = V × I", "I = V × R"], answer: 1, why: "Volts equal amps times ohms." },
      { objective: "O1", q: "Practice only: 120 volts and 20 amps. How many watts?", options: ["140 watts", "6 watts", "2,400 watts", "100 watts"], answer: 2, why: "P = V × I, so 120 × 20 = 2,400 watts." },
      { objective: "O1", q: "Practice only: 24 volts across a 6-ohm load. How many amps?", options: ["144 amps", "18 amps", "30 amps", "4 amps"], answer: 3, why: "I = V ÷ R, so 24 ÷ 6 = 4 amps." },
      { objective: "O1", q: "What happens when a circuit draws more amps than it is meant for?", options: ["The voltage doubles", "It is overloaded and the breaker should trip", "The wires get colder", "Nothing"], answer: 1, why: "Too much current is an overload; the breaker trips to protect the wires." },
      { objective: "O2", q: "In a series circuit with three bulbs, one burns out. What happens?", options: ["They all go out", "Only that one goes out", "The others get brighter", "The breaker gets bigger"], answer: 0, why: "In series there is only one path, so a break stops the current to all of them." },
      { objective: "O2", q: "How are the outlets in a home usually wired?", options: ["In series", "With no breaker", "In parallel", "With no neutral"], answer: 2, why: "Parallel wiring gives each outlet the full voltage and its own path." },
      { objective: "O2", q: "Which wire gives a safe path if something goes wrong?", options: ["The hot wire", "The neutral wire", "The switch leg", "The ground wire"], answer: 3, why: "The ground (bare or green) is the safety path." },
      { objective: "O2", q: "Which device cuts power when it senses arcing that could start a fire?", options: ["A GFCI", "An AFCI", "A dimmer", "A plug"], answer: 1, why: "An arc-fault circuit interrupter (AFCI) helps prevent arcing fires." },
      { objective: "O3", q: "What is the first lockout/tagout step?", options: ["Prepare: know the energy and how to control it", "Apply your lock", "Verify by testing", "Shut down"], answer: 0, why: "You start by knowing what energy is there and how to control it." },
      { objective: "O3", q: "When you test before touch, why do you check the tester on a known live source first?", options: ["To warm it up", "To charge its battery", "To prove the tester works, so a \"no voltage\" reading can be trusted", "It is not needed"], answer: 2, why: "A broken tester could falsely show no voltage." },
      { objective: "O3", q: "Which is a sudden blast of heat and light from an electrical fault?", options: ["A ground", "A load", "A breaker", "An arc flash"], answer: 3, why: "Arc flash is a dangerous blast caused by an electrical fault." },
      { objective: "O3", q: "In this course, when may you work on live wiring?", options: ["Never; real wiring is learned in supervised training", "After Lesson 2", "When the breaker is on", "On weekends"], answer: 0, why: "This course does no live work; that belongs to a supervised program with PPE." },
      { objective: "O4", q: "A tape measure reads 6 inches and 4 sixteenth marks. What is that in reduced form?", options: ["6 1/2 inches", "6 1/4 inches", "6 4 inches", "6 1/8 inches"], answer: 1, why: "4/16 reduces to 1/4." },
      { objective: "O4", q: "What does a fresh AA battery usually read on a multimeter set to DC volts?", options: ["About 120 volts", "About 12 volts", "About 1.5 volts", "About 240 volts"], answer: 2, why: "A fresh AA battery is about 1.5 volts." },
      { objective: "O4", q: "What is the National Electrical Code also called?", options: ["OSHA 10", "EPA 608", "NFPA 70", "The GFCI"], answer: 2, why: "The NEC is published as NFPA 70." },
      { objective: "O5", q: "This course will:", options: ["Give you an electrical license", "Prepare you to apply; it does not license or certify you", "Count as your apprenticeship hours", "Let you wire homes"], answer: 1, why: "Licenses come from your state or city, and real training comes from an apprenticeship." },
      { objective: "O5", q: "Which free site helps you find apprenticeship programs near you?", options: ["A pop-up ad", "A comment section", "A tool store flyer", "apprenticeship.gov"], answer: 3, why: "Apprenticeship.gov has the US Department of Labor's Apprenticeship Job Finder." },
      { objective: "O5", q: "What do license tests for electricians usually cover?", options: ["The National Electrical Code and state and local codes", "Car repair", "Plumbing only", "Typing speed"], answer: 0, why: "The BLS says license tests cover the NEC and state and local codes." },
      { objective: "O5", q: "Some programs only take applications at certain times. What should your plan include?", options: ["Nothing; just show up", "A guess", "Only the program's logo", "The dates applications open and close"], answer: 3, why: "Writing the application dates keeps you from missing a window." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  // pre-test: these quiz questions, taken before Lesson 1, so the quiz shows how much each learner gained
  pretest: { title: "Pre-Test: What Do You Already Know?", from: [1, 2, 5, 7, 9, 11, 13, 15, 16, 19] },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      { name: "Ohm's law and power problems", objective: "O1", notYet: "Fewer than 4 of 5 problems right, or no work shown.", meets: "At least 4 of 5 right, each with the formula, the work and the unit.", exceeds: "All 5 right, using all four formulas, with a check that each answer makes sense." },
      { name: "Circuit sketch", objective: "O2", notYet: "Parts are missing or loads are not in parallel.", meets: "Source, breaker, switch, two parallel loads, hot, neutral and ground are all labeled.", exceeds: "Also shows where a GFCI would go and explains why." },
      { name: "Lockout/tagout card", objective: "O3", notYet: "Steps are missing or out of order.", meets: "All six steps in order, plus three hazards matched to protection.", exceeds: "Also explains test before touch with the live-dead-live check." },
      { name: "Measurements", objective: "O4", notYet: "Readings are off or fractions are not reduced.", meets: "At least 4 of 5 readings right to the nearest 1/16 inch, in reduced form.", exceeds: "All five right, plus a battery reading with the meter set correctly." },
      { name: "Dated plan from official sources", objective: "O5", notYet: "Steps have no dates, or rules come from ads or posts.", meets: "Two real programs with requirements and application dates, license rules with the official web address, and a date for every step.", exceeds: "Also has a study schedule for the entry test and a backup plan, such as a helper job." }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Learners who apply to an electrical apprenticeship or pre-apprenticeship within 90 days",
      "Learners accepted into an apprenticeship or hired as an electrical helper within 6 months",
      "Partner programs report applicants pass the entry math test and arrive knowing basic safety steps"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A phone or computer with internet for the BLS, OSHA, apprenticeship.gov and state licensing pages",
      "Paper, pen, index cards, a calculator and a tape measure",
      "Optional: a basic multimeter and an AA battery (battery practice only)",
      "About 60 to 75 minutes in total, in short sessions: lessons, practice, checks and the final task"
    ],
    facilitatorNotes: [
      "No live electrical work of any kind. The only meter practice is on a household battery; never let learners test outlets or panels.",
      "Do the math together on a board first, then have learners write and swap their own practice problems.",
      "Invite an apprenticeship coordinator or a licensed electrician to describe the application process and entry test.",
      "Help each learner find their own state or city licensing page; rules differ, so do not give one answer for the group.",
      "For learners with records or veterans, connect them to reentry or veteran services; do not promise any outcome from a program or licensing board.",
      "Score the final task with the rubric and give feedback on one Not yet row at a time."
    ]
  }
};
