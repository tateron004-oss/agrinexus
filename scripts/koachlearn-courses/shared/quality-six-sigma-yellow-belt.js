"use strict";

// Koach Learn course (shared, wave 3): "Quality Basics (Six Sigma Yellow Belt Preparation)". Categories: Workforce Development, Small Business, Veterans (military).
// Shape and rules: ../README.md; ADDIE model: ../re-entry/reentry-ai-digital-confidence.js; brief: ../WAVE3-COURSES-BRIEF.md.
// Exam facts (ASQ CSSYB, IASSC ICYB) checked on asq.org and iassc.org on 30 October 2026. No fees are stated in the course.

const ASQ = { name: "ASQ: Certified Six Sigma Yellow Belt (requirements, exam and Body of Knowledge)", url: "https://www.asq.org/cert/six-sigma-yellow-belt" };
const IASSC = { name: "IASSC: Certified Lean Six Sigma Yellow Belt (ICYB)", url: "https://www.iassc.org/six-sigma-certification/yellow-belt-certification/" };

module.exports = {
  id: "quality-six-sigma-yellow-belt",
  category: "Workforce Development",
  name: "Quality Basics (Six Sigma Yellow Belt Preparation)",
  skills: "Using the DMAIC steps, Writing a problem statement, Collecting data on a check sheet, Finding root causes with Pareto and 5 Whys, Removing waste and keeping the gain, Planning for a Yellow Belt exam",
  outcome: "run a small quality improvement on a real process with the five DMAIC steps (Define, Measure, Analyze, Improve, Control), show it on one page, and follow a dated plan to prepare for a Six Sigma Yellow Belt exam.",
  about: [
    "Every workplace has processes that go wrong: late orders, wrong invoices, long waits, parts that do not fit. Six Sigma is a way to fix them with facts instead of guesses, and Lean is a way to remove wasted steps. Employers in manufacturing, warehouses, healthcare, government, hotels and offices look for people who know the basics.",
    "This course is for job seekers, front-line workers who want to move up, veterans moving into civilian operations jobs, and small business owners. You do not need any math beyond adding, dividing and percentages.",
    "You will pick one real process from your job, your business or your home and improve it step by step, one DMAIC step per lesson. The course PREPARES you for a Yellow Belt exam, such as the ASQ Certified Six Sigma Yellow Belt or the IASSC Certified Lean Six Sigma Yellow Belt; it does not grant a certificate. Each lesson takes about five minutes and ends with a \"Try it now\" task, a two-question quick check, and there is a knowledge check after each chapter and a 20-question quiz at the end."
  ],
  finalTask: "Make a one-page improvement project for a real process: a problem statement and goal, a simple process map, a check sheet with at least 20 data points and the defect rate, a Pareto chart and a 5 Whys for the biggest problem, one small fix you tested, and a control check to keep the gain. Add a dated study-and-test plan for the Yellow Belt exam you choose, with the official page where you checked its current rules.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Adults and young adults looking for work or a promotion in operations, manufacturing, warehouses, healthcare offices, hospitality and government; veterans moving into civilian operations and quality roles; small business owners who want fewer mistakes and less waste.",
    startingPoint: "Most have seen problems repeat at work and have ideas to fix them, but have not used a structured method, collected data on purpose or used quality words such as defect, root cause or DMAIC. Math is at an everyday level: counting, dividing and percentages.",
    gap: "Quality and continuous-improvement skills show up in many job posts, and a Yellow Belt is a common first credential. Learners need to run a small improvement with facts and show it on one page, which they can talk about in an interview, and know the real steps to a recognized exam.",
    constraints: [
      "Reading level: plain words and short sentences; every quality term is explained the first time",
      "Devices: paper and pen are enough; a free spreadsheet (Google Sheets or Excel) helps with the charts",
      "Time: 5 minute lessons, plus about one to two weeks of data collection for the final task",
      "Exam rules, formats and fees change and differ by certifying body; learners check the official page",
      "No customer names, patient details or company secrets in practice data"
    ],
    prerequisites: "None. Learners who are not comfortable with percentages can take \"Everyday Math\" first, and \"Excel and Spreadsheets\" helps with charts."
  },
  // ---- ADDIE: Design ----
  objectives: [
    { id: "O1", condition: "Given a description of an improvement project", action: "name the five DMAIC steps in order and say what happens in each", standard: "with all five correct" },
    { id: "O2", condition: "Given a process that has a repeating problem", action: "write a problem statement and a measurable goal and draw a simple process map", standard: "with what, where, when and how big, and no cause or solution in the statement" },
    { id: "O3", condition: "Given a process to watch for one to two weeks", action: "collect data on a check sheet and calculate a defect rate", standard: "with at least 20 data points and the math shown" },
    { id: "O4", condition: "Given your check-sheet data", action: "find the biggest problem with a Pareto chart and dig to its root cause with 5 Whys", standard: "so the cause found is one the team can act on" },
    { id: "O5", condition: "Given a root cause", action: "choose a fix that removes waste or mistakes, test it on a small scale and set up a control check", standard: "with data before and after the fix" },
    { id: "O6", condition: "Using the official ASQ or IASSC page", action: "make a dated study-and-test plan for a Yellow Belt exam", standard: "with the exam format and rules checked on that page" }
  ],
  chapters: [
    {
      name: "Chapter 1: Define and measure the problem",
      lessons: [
        {
          title: "Quality, Six Sigma and the five DMAIC steps",
          objectives: ["O1"],
          minutes: 5,
          goal: "Name the five DMAIC steps and say what a Yellow Belt does in each.",
          text: [
            "Quality means giving the customer what they need, the same way, every time. A defect is anything the customer would not accept: a wrong order, a late delivery, a missing part, a billing error.",
            "Six Sigma is a method for cutting defects by using data instead of guesses. Lean is a method for cutting waste, the steps that add time but no value. Many employers teach them together as Lean Six Sigma.",
            "Projects follow five steps called DMAIC: Define the problem, Measure how big it is, Analyze to find the root cause, Improve by testing a fix, and Control to keep the gain. Belts show training level: a Yellow Belt knows the basics and helps on projects, often by collecting data and mapping steps; Green and Black Belts lead bigger projects.",
            "Two well-known Yellow Belt credentials are the ASQ Certified Six Sigma Yellow Belt and the IASSC Certified Lean Six Sigma Yellow Belt. This course prepares you; only the certifying body grants the credential."
          ],
          steps: ["Define: what is the problem and the goal?", "Measure: how often does it happen now?", "Analyze: what is the root cause?", "Improve: what fix works when you test it?", "Control: how do you keep the gain?"],
          words: [["Defect", "anything the customer would not accept, such as a wrong, late or broken item."], ["Six Sigma", "a method for cutting defects by using data; very high quality means about 3.4 defects per million chances."], ["Lean", "a method for removing steps that waste time or materials."], ["DMAIC", "Define, Measure, Analyze, Improve, Control: the five steps of a Six Sigma project."], ["Yellow Belt", "a person trained in the basics who helps on improvement projects."]],
          slides: [
            { title: "Quality and defects", bullets: ["Quality: what the customer needs, the same way every time", "Defect: anything the customer would not accept"] },
            { title: "Six Sigma and Lean", bullets: ["Six Sigma: fewer defects, using data", "Lean: fewer wasted steps", "Together: Lean Six Sigma"] },
            { title: "DMAIC in order", bullets: ["Define the problem", "Measure how big it is", "Analyze the root cause", "Improve with a tested fix, then Control to keep it"] },
            { title: "Belts and credentials", bullets: ["Yellow Belt: knows the basics, helps on projects", "ASQ and IASSC offer Yellow Belt exams", "This course prepares you; it does not certify you"] }
          ],
          sources: [ASQ, IASSC],
          tryIt: "Pick one process you know that goes wrong too often, at work, in a business or at home (for example orders sent late, lunch orders wrong, or invoices sent with errors). Write it at the top of a page, then write D, M, A, I, C down the side and one question you would ask in each step.",
          youCanNow: "name the five DMAIC steps in order, say what a Yellow Belt does, and pick a process to improve.",
          quickCheck: [
            { objective: "O1", q: "Which is the right order of the DMAIC steps?", options: ["Design, Make, Assess, Inspect, Close", "Measure, Define, Improve, Analyze, Control", "Define, Measure, Analyze, Improve, Control", "Define, Manage, Act, Improve, Check"], answer: 2, why: "DMAIC stands for Define, Measure, Analyze, Improve, Control, in that order." },
            { objective: "O1", q: "Your team is testing a new way to pack orders to see if errors drop. Which step is this?", options: ["Improve", "Define", "Measure", "Control"], answer: 0, why: "Testing a fix to see whether it works happens in the Improve step." }
          ]
        },
        {
          title: "Define: the problem statement and the process map",
          objectives: ["O2"],
          minutes: 5,
          goal: "Write a problem statement and goal, and draw a simple process map.",
          text: [
            "A good project starts with a clear problem statement. It says what is wrong, where, since when and how big, and why it matters. It does NOT name a cause or a solution yet, because you have not found them. Example: \"Since June, 12 of every 100 lunch orders at the downtown cafe go out wrong, causing refunds and complaints.\"",
            "The goal says how much better, by when: \"Cut wrong lunch orders to 3 of every 100 by the end of September.\"",
            "Then map the process. Write each step in a box from start to finish and connect them with arrows. A SIPOC is a quick table of the big picture: Suppliers, Inputs, Process steps, Outputs and Customers. The voice of the customer (VOC) is what customers say they need; the parts that matter most to them are called critical to quality (CTQ)."
          ],
          steps: ["Write what is wrong, where, since when and how big.", "Add why it matters (cost, time, customers, safety).", "Check: no cause and no solution in the statement.", "Write a goal with a number and a date.", "Draw the process in 5 to 8 boxes, start to finish."],
          words: [["Problem statement", "a short, fact-based description of what is wrong, where, when and how big."], ["Process map", "a drawing of the steps of a process in order, using boxes and arrows."], ["SIPOC", "a one-page table of Suppliers, Inputs, Process, Outputs and Customers."], ["Voice of the customer (VOC)", "what customers say they need or complain about."], ["Critical to quality (CTQ)", "a feature that matters most to the customer, such as on time or correct."]],
          slides: [
            { title: "A good problem statement", bullets: ["What, where, since when, how big", "Why it matters", "No cause and no solution yet"] },
            { title: "A good goal", bullets: ["How much better, by when", "Example: wrong orders from 12 to 3 per 100 by end of September"] },
            { title: "Map the process", bullets: ["5 to 8 boxes, start to finish", "Arrows show the order", "SIPOC: Suppliers, Inputs, Process, Outputs, Customers"] },
            { title: "Listen to the customer", bullets: ["Voice of the customer: what they need", "Critical to quality: what matters most to them"] }
          ],
          tryIt: "For the process you picked, write a problem statement with what, where, since when and how big (use your best estimate for now), a goal with a number and a date, and a process map of 5 to 8 boxes on paper.",
          youCanNow: "write a problem statement and goal, and draw a simple map of the process.",
          quickCheck: [
            { objective: "O2", q: "Which is the best problem statement?", options: ["\"The new cook is careless.\"", "\"Since March, 8 of every 50 shipments from the east warehouse arrive late, causing customer refunds.\"", "\"We need a new computer system.\"", "\"Shipping is bad.\""], answer: 1, why: "It gives what, where, since when and how big, and it does not blame a cause or name a solution." },
            { objective: "O2", q: "What does the P in SIPOC stand for?", options: ["Price", "People", "Plan", "Process"], answer: 3, why: "SIPOC is Suppliers, Inputs, Process, Outputs and Customers." }
          ]
        },
        {
          title: "Measure: check sheets and defect rates",
          objectives: ["O3"],
          minutes: 6,
          goal: "Collect data on a check sheet and calculate a defect rate.",
          text: [
            "In the Measure step you find out how often the problem really happens. Guesses are often wrong, so you count.",
            "A check sheet is a simple paper or spreadsheet form. Down the side, list the kinds of defects (wrong item, missing item, late). Across the top, list the days. Make a tally mark each time one happens, and also count the total units you checked.",
            "The defect rate is defective units divided by total units, times 100. If 15 of 200 orders were wrong: 15 / 200 = 0.075, or 7.5%. Six Sigma also uses DPMO, defects per million opportunities: defects divided by (units times opportunities per unit), times 1,000,000. If 500 invoices each have 4 chances for an error and you find 10 errors: 10 / (500 x 4) = 0.005, times 1,000,000 = 5,000 DPMO.",
            "Measure the same way every time: same definition of a defect, same time of day, same person or clear rules. This is your baseline, the \"before\" number you will compare with later."
          ],
          steps: ["Write a clear definition of each defect.", "Make a check sheet: defect types down the side, days across the top.", "Tally each defect and count the total units checked.", "Defect rate = defective units / total units x 100.", "Record this as your baseline."],
          words: [["Check sheet", "a simple form for tallying how often each kind of problem happens."], ["Defect rate", "the share of units with a defect, shown as a percent."], ["DPMO", "defects per million opportunities: defects / (units x chances per unit) x 1,000,000."], ["Baseline", "how the process performs before you change it."]],
          slides: [
            { title: "Count, don't guess", bullets: ["Measure how often the problem happens", "Use one clear definition of a defect"] },
            { title: "The check sheet", bullets: ["Defect types down the side", "Days across the top", "Tally marks, plus total units checked"] },
            { title: "The math", bullets: ["Defect rate = defective / total x 100", "15 wrong of 200 = 7.5%", "DPMO = defects / (units x chances) x 1,000,000"] },
            { title: "Your baseline", bullets: ["The \"before\" number", "Measure the same way every time", "You will compare it after the fix"] }
          ],
          tryIt: "Make a check sheet for your process on paper or in a spreadsheet. Collect at least 20 data points over the next week (start today), then calculate your defect rate and show the math. Practice now: 9 late of 150 deliveries is what percent? (Answer: 9 / 150 = 0.06 = 6%.)",
          youCanNow: "collect data on a check sheet, calculate a defect rate and set your baseline.",
          quickCheck: [
            { objective: "O3", q: "You checked 80 orders and 4 were wrong. What is the defect rate?", options: ["5%", "4%", "20%", "8%"], answer: 0, why: "4 / 80 = 0.05, which is 5%." },
            { objective: "O3", q: "Why do you write one clear definition of each defect before counting?", options: ["So the chart looks nicer", "So the boss can sign it", "So everyone counts the same way and the numbers can be trusted", "So you need fewer data points"], answer: 2, why: "If people count different things, the data cannot be compared or trusted." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Define and measure the problem",
        questions: [
          { objective: "O1", q: "In which DMAIC step do you look for the root cause?", options: ["Define", "Analyze", "Control", "Measure"], answer: 1, why: "Analyze is where you use data and tools to find the root cause." },
          { objective: "O1", q: "What does a Yellow Belt usually do on a project?", options: ["Owns the company", "Grants the certificates", "Approves the budget alone", "Helps with tasks such as collecting data and mapping steps"], answer: 3, why: "Yellow Belts know the basics and support projects, often by collecting data and mapping the process." },
          { objective: "O2", q: "A problem statement says, \"Errors happen because staff do not care.\" What is wrong with it?", options: ["It blames a cause before any data was collected", "It is too short to read", "It uses numbers", "Nothing is wrong"], answer: 0, why: "A problem statement describes the problem with facts; the cause is found later, in Analyze." },
          { objective: "O3", q: "You checked 250 forms and found 10 with errors. What is the defect rate?", options: ["10%", "2.5%", "4%", "25%"], answer: 2, why: "10 / 250 = 0.04, which is 4%." },
          { objective: "O3", q: "What is a baseline?", options: ["The goal you want to reach", "The bottom line on a chart", "The final report", "How the process performs before you change it"], answer: 3, why: "The baseline is the \"before\" number you compare with after the fix." }
        ]
      }
    },
    {
      name: "Chapter 2: Analyze, improve and control",
      lessons: [
        {
          title: "Analyze: Pareto charts, fishbones and 5 Whys",
          objectives: ["O4"],
          minutes: 6,
          goal: "Find the biggest problem with a Pareto chart and its root cause with 5 Whys.",
          text: [
            "A Pareto chart is a bar chart sorted from the biggest bar to the smallest. It shows that a few causes usually make most of the problems, often called the 80/20 rule. Start with the biggest bar.",
            "A fishbone diagram (also called a cause-and-effect or Ishikawa diagram) helps a team list possible causes. Write the problem at the \"head\", then draw bones for groups of causes, such as Methods, Machines, Materials, People, Measurement and Environment.",
            "Then ask \"Why?\" about five times to dig from the symptom to a root cause you can fix. Example: Orders are wrong. Why? The cook misread the ticket. Why? The ticket was handwritten. Why? The printer is broken. Why? No one is in charge of fixing it. Why? There is no maintenance check. Root cause: no maintenance check on the printer.",
            "Blame is not a root cause. If the answer is \"someone was careless\", keep asking why the process let the mistake happen."
          ],
          steps: ["Total each defect type from your check sheet.", "Sort them biggest to smallest and draw the bars.", "Pick the biggest bar.", "List possible causes on a fishbone.", "Ask \"Why?\" about five times until you reach a cause you can act on."],
          words: [["Pareto chart", "a bar chart sorted from biggest to smallest, to show which few problems matter most."], ["80/20 rule", "the pattern that a few causes often make most of the problems."], ["Fishbone diagram", "a drawing that groups possible causes of a problem; also called an Ishikawa diagram."], ["Root cause", "the real reason a problem happens; fix it and the problem stops or drops."], ["5 Whys", "asking \"Why?\" again and again, about five times, to reach the root cause."]],
          slides: [
            { title: "Pareto chart", bullets: ["Bars sorted biggest to smallest", "A few causes make most problems (80/20)", "Start with the biggest bar"] },
            { title: "Fishbone diagram", bullets: ["Problem at the head", "Bones: Methods, Machines, Materials, People, Measurement, Environment"] },
            { title: "5 Whys", bullets: ["Ask \"Why?\" about five times", "Wrong orders, then handwritten tickets, then broken printer, then no check"] },
            { title: "Blame is not a root cause", bullets: ["Ask why the process let the mistake happen", "Find a cause you can act on"] }
          ],
          tryIt: "Total each defect type from your check sheet, sort them and draw a Pareto chart on paper or in a spreadsheet. Then write a 5 Whys for the biggest bar. Stop when you reach a cause you can fix and that does not blame a person.",
          youCanNow: "draw a Pareto chart, pick the biggest problem and dig to its root cause with 5 Whys.",
          quickCheck: [
            { objective: "O4", q: "Your Pareto chart shows: wrong size 40, missing item 25, late 10, damaged 5. Where do you start?", options: ["Damaged, because it is easiest", "All four at the same time", "Late, because customers hate waiting", "Wrong size, the biggest bar"], answer: 3, why: "A Pareto chart tells you to start with the biggest bar, where a fix helps most." },
            { objective: "O4", q: "Your 5 Whys ends at \"the worker was careless\". What should you do?", options: ["Stop there and write up the worker", "Keep asking why the process let the mistake happen", "Start a new project", "Remove the worker from the chart"], answer: 1, why: "Blame is not a root cause; look for what in the process allowed the mistake." }
          ]
        },
        {
          title: "Improve: remove waste and mistake-proof the work",
          objectives: ["O5"],
          minutes: 5,
          goal: "Choose a fix that removes waste or mistakes and test it on a small scale.",
          text: [
            "Lean names eight kinds of waste. An easy way to remember them is DOWNTIME: Defects, Overproduction, Waiting, Non-used talent, Transportation, Inventory (too much stock), Motion (extra walking or reaching) and Extra processing.",
            "Good fixes often make the right way the easy way. 5S organizes a work area: Sort, Set in order, Shine, Standardize, Sustain. Mistake-proofing (poka-yoke in Japanese) makes errors hard or impossible, such as a plug that fits only one way, a form that will not submit with a blank box, or a color-coded bin.",
            "Test the fix on a small scale first: one shift, one desk or one week. This is a pilot. Measure the same way as your baseline and compare. If the numbers got better, roll it out; if not, try the next idea."
          ],
          steps: ["List fixes that attack the root cause.", "Prefer fixes that remove waste or make mistakes hard.", "Run a small pilot: one shift, one desk or one week.", "Measure the same way as the baseline.", "Compare before and after."],
          words: [["Waste", "any step that uses time or materials but adds no value for the customer."], ["DOWNTIME", "a memory aid for the eight wastes: Defects, Overproduction, Waiting, Non-used talent, Transportation, Inventory, Motion, Extra processing."], ["5S", "Sort, Set in order, Shine, Standardize, Sustain: a way to organize a work area."], ["Mistake-proofing (poka-yoke)", "a design that makes errors hard or impossible."], ["Pilot", "a small, short test of a fix before using it everywhere."]],
          slides: [
            { title: "The eight wastes: DOWNTIME", bullets: ["Defects, Overproduction, Waiting, Non-used talent", "Transportation, Inventory, Motion, Extra processing"] },
            { title: "5S", bullets: ["Sort, Set in order, Shine", "Standardize, Sustain"] },
            { title: "Mistake-proofing", bullets: ["Make the right way the easy way", "A plug that fits one way; a form that blocks blank boxes"] },
            { title: "Pilot first", bullets: ["One shift, one desk or one week", "Measure like the baseline", "Better? Roll it out. Not better? Try the next idea"] }
          ],
          tryIt: "Write three possible fixes for your root cause. Mark which waste each removes or how it mistake-proofs the work. Pick one, plan a small pilot (where, how long, who), and start measuring it the same way as your baseline.",
          youCanNow: "spot the eight wastes, choose a fix that removes waste or mistakes, and test it with a small pilot.",
          quickCheck: [
            { objective: "O5", q: "Workers walk across the warehouse many times a day to get tape. Which waste is this?", options: ["Overproduction", "Defects", "Motion", "Inventory"], answer: 2, why: "Extra walking and reaching by people is the waste of motion." },
            { objective: "O5", q: "You have a fix you think will work. What is the best next step?", options: ["Test it on a small scale and compare with the baseline", "Roll it out to every site at once", "Skip measuring, since you are sure", "Wait a year to see"], answer: 0, why: "A small pilot measured like the baseline shows whether the fix really works." }
          ]
        },
        {
          title: "Control the gain, and plan your Yellow Belt exam",
          objectives: ["O5", "O6"],
          minutes: 6,
          goal: "Set up a control check for the fix and make a dated study-and-test plan.",
          text: [
            "Many fixes fade when people slip back into old habits. In the Control step you keep the gain: write the new way as standard work (a short checklist or picture of the right steps), train people on it, and keep measuring. A run chart plots your numbers over time with a center line; a control chart adds limits that show when the process has changed more than normal. Write a simple control plan: what to check, how often, who checks, and what to do if the number gets worse.",
            "Now plan your credential. The ASQ Certified Six Sigma Yellow Belt has no experience or education requirement, and its exams are open book with your own bound reference materials, according to asq.org. The IASSC Certified Lean Six Sigma Yellow Belt has no prerequisites, and its exam is closed book and proctored, according to iassc.org. Formats, fees and rules change, so read the official page before you register. Some employers also run their own in-house Yellow Belt training.",
            "Download the certifying body's Body of Knowledge (the list of topics the exam can cover), mark each topic you know, and plan study time for the rest. Put real dates on the calendar and book the exam only when your practice scores are steady."
          ],
          steps: ["Write the new way as standard work.", "Make a control plan: what, how often, who, and what to do if it gets worse.", "Keep a run chart going for at least a few weeks.", "Choose an exam and read its official page.", "Use the Body of Knowledge to plan study dates and a target test date."],
          words: [["Standard work", "the agreed best way to do a task, written as simple steps or pictures."], ["Run chart", "a line chart of a measure over time, used to see trends."], ["Control chart", "a run chart with limits that show when a process changes more than normal."], ["Control plan", "a short plan saying what to check, how often, who checks and what to do if it slips."], ["Body of Knowledge", "the official list of topics an exam can cover."]],
          slides: [
            { title: "Keep the gain", bullets: ["Write the new way as standard work", "Train people on it", "Keep measuring"] },
            { title: "Charts that watch the process", bullets: ["Run chart: numbers over time with a center line", "Control chart: adds limits for normal variation"] },
            { title: "Two Yellow Belt exams", bullets: ["ASQ CSSYB: open book, no experience required", "IASSC ICYB: closed book, proctored, no prerequisites", "Check the official page: rules change"] },
            { title: "Your study-and-test plan", bullets: ["Download the Body of Knowledge", "Mark what you know; plan the rest", "Real dates; book when practice scores hold"] }
          ],
          sources: [ASQ, IASSC],
          tryIt: "Final task: finish your one-page project (problem statement and goal, process map, check sheet and defect rate, Pareto chart and 5 Whys, the fix you piloted with before and after numbers, and a control plan). Then open the ASQ or IASSC Yellow Belt page, write the exam format you found there, and make a study plan with at least four dated study sessions and a target test date.",
          youCanNow: "keep a gain with standard work and a control plan, and follow a dated plan toward a Yellow Belt exam.",
          quickCheck: [
            { objective: "O5", q: "Three months after a fix, errors are creeping back up. Which step was missing?", options: ["Define", "Control", "Measure", "Analyze"], answer: 1, why: "Control keeps the gain with standard work, training and ongoing checks." },
            { objective: "O6", q: "Where should you check the current rules and format of a Yellow Belt exam?", options: ["A social media post", "A friend who passed years ago", "An ad for a cheap course", "The certifying body's official page, such as asq.org or iassc.org"], answer: 3, why: "Exam rules, formats and fees change; the certifying body's own page is the source to trust." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Analyze, improve and control",
        questions: [
          { objective: "O4", q: "What does a Pareto chart show?", options: ["Which few problems cause most of the trouble", "The steps of a process in order", "The budget for a project", "Who is to blame"], answer: 0, why: "A Pareto chart sorts problems biggest to smallest so you can see the vital few." },
          { objective: "O4", q: "Which tool groups possible causes into bones such as Methods, Machines and Materials?", options: ["A check sheet", "A run chart", "A fishbone diagram", "A SIPOC"], answer: 2, why: "The fishbone (Ishikawa) diagram groups possible causes of one problem." },
          { objective: "O5", q: "A form will not submit until every required box is filled in. This is an example of:", options: ["Overproduction", "Mistake-proofing", "Inventory", "A control chart"], answer: 1, why: "Mistake-proofing (poka-yoke) makes the error hard or impossible." },
          { objective: "O5", q: "What are the 5S steps?", options: ["Sell, Ship, Save, Serve, Smile", "See, Say, Stop, Start, Sign", "Scan, Score, Solve, Sort, Send", "Sort, Set in order, Shine, Standardize, Sustain"], answer: 3, why: "5S is Sort, Set in order, Shine, Standardize, Sustain." },
          { objective: "O6", q: "What is a Body of Knowledge?", options: ["The official list of topics an exam can cover", "A medical textbook", "The company handbook", "A list of past test answers"], answer: 0, why: "The certifying body publishes the Body of Knowledge so you know what to study." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Quality Basics (Six Sigma Yellow Belt Preparation)",
    questions: [
      { objective: "O1", q: "What does DMAIC stand for?", options: ["Do, Make, Ask, Inspect, Close", "Design, Monitor, Act, Inform, Check", "Define, Measure, Analyze, Improve, Control", "Decide, Measure, Approve, Install, Count"], answer: 2, why: "The five Six Sigma project steps are Define, Measure, Analyze, Improve and Control." },
      { objective: "O1", q: "Writing the problem statement and the goal happens in which step?", options: ["Define", "Improve", "Control", "Analyze"], answer: 0, why: "Define sets out the problem, the goal and the process." },
      { objective: "O1", q: "Which statement about a Yellow Belt course like this one is true?", options: ["Finishing it grants the ASQ certificate", "It replaces any exam", "Only Black Belts may take it", "It prepares you; the certifying body grants the credential"], answer: 3, why: "A course prepares you; only the certifying body, such as ASQ or IASSC, grants the credential." },
      { objective: "O2", q: "What does a good problem statement include?", options: ["The solution you prefer", "What, where, since when and how big", "The name of the worker to blame", "Only the word \"problem\""], answer: 1, why: "It gives the facts of the problem without naming a cause or solution." },
      { objective: "O2", q: "Which is a measurable goal?", options: ["\"Do better on orders\"", "\"Try harder\"", "\"Cut late deliveries from 10% to 3% by December 31\"", "\"Make customers happier someday\""], answer: 2, why: "It has a number and a date, so you can tell if you reached it." },
      { objective: "O2", q: "A process map shows:", options: ["The steps of a process in order, with boxes and arrows", "The company's profits", "Where the office is on a street map", "Which worker is fastest"], answer: 0, why: "A process map draws each step from start to finish." },
      { objective: "O3", q: "What is a check sheet used for?", options: ["Paying workers", "Signing contracts", "Writing the goal", "Tallying how often each kind of problem happens"], answer: 3, why: "A check sheet is a simple form for counting defects by type." },
      { objective: "O3", q: "You checked 400 invoices and 12 had errors. What is the defect rate?", options: ["12%", "3%", "4%", "0.3%"], answer: 1, why: "12 / 400 = 0.03, which is 3%." },
      { objective: "O3", q: "100 units, each with 5 chances for an error, have 2 errors in total. What is the DPMO?", options: ["2,000", "400", "4,000", "20,000"], answer: 2, why: "2 / (100 x 5) = 0.004, and 0.004 x 1,000,000 = 4,000." },
      { objective: "O4", q: "The 80/20 rule in a Pareto chart means:", options: ["A few causes often make most of the problems", "80 workers make 20 errors", "Fix 20 problems a day", "Every cause matters the same"], answer: 0, why: "Pareto shows the vital few causes, so you start with the biggest bar." },
      { objective: "O4", q: "Why do you ask \"Why?\" about five times?", options: ["To slow the meeting down", "To find someone to blame", "Because the exam requires exactly five", "To dig past the symptom to a root cause you can fix"], answer: 3, why: "Each \"why\" goes one level deeper until you reach a cause you can act on." },
      { objective: "O4", q: "Which answer is a root cause you can act on?", options: ["\"People are lazy\"", "\"There is no maintenance check on the ticket printer\"", "\"Bad luck\"", "\"Customers are difficult\""], answer: 1, why: "A root cause is a process gap you can fix, not blame or luck." },
      { objective: "O5", q: "Boxes of extra stock fill the back room and some expire. Which waste is this?", options: ["Motion", "Waiting", "Inventory", "Non-used talent"], answer: 2, why: "Too much stock on hand is the waste of inventory." },
      { objective: "O5", q: "Before rolling out a fix everywhere, you should:", options: ["Test it in a small pilot and compare with the baseline", "Skip measuring", "Change five things at once", "Ask customers to wait"], answer: 0, why: "A pilot shows whether the fix works before you spend time and money spreading it." },
      { objective: "O5", q: "What does a control plan say?", options: ["Who gets a bonus", "The project's start date only", "How to write a problem statement", "What to check, how often, who checks and what to do if it slips"], answer: 3, why: "A control plan keeps the gain by setting regular checks and a response." },
      { objective: "O5", q: "A run chart is:", options: ["A list of the eight wastes", "A line chart of a measure over time", "A drawing of causes", "A map of the building"], answer: 1, why: "A run chart plots data over time so you can see whether the gain holds." },
      { objective: "O6", q: "According to asq.org, the ASQ Certified Six Sigma Yellow Belt exam is:", options: ["Only for people with five years of experience", "Given only in a classroom by your employer", "Open book, with no experience or education requirement", "Closed book with no notes"], answer: 2, why: "ASQ says the CSSYB has no experience or education requirement and its exams are open book." },
      { objective: "O6", q: "According to iassc.org, the IASSC Yellow Belt exam is:", options: ["Closed book and proctored", "Open book with any notes", "Taken without any time limit", "Only for ASQ members"], answer: 0, why: "IASSC lists the ICYB exam as closed book and proctored." },
      { objective: "O6", q: "What is the best first step in building your study plan?", options: ["Book the exam for tomorrow", "Buy the most expensive course", "Memorize old test answers from a website", "Download the Body of Knowledge and mark the topics you need to study"], answer: 3, why: "The Body of Knowledge shows what the exam covers, so you can plan study time for your gaps." },
      { objective: "O6", q: "When should you book your exam date?", options: ["Before you study anything", "When your practice scores are steady and you have checked the official rules", "Never; certificates are not needed", "Only after your employer tells you to"], answer: 1, why: "Steady practice scores and up-to-date rules mean you are ready to test." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Pre-Test: What Do You Already Know?", from: [0, 3, 4, 7, 9, 10, 12, 16] },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      { name: "Problem and goal", objective: "O2", notYet: "The statement is vague or names a cause or solution; the goal has no number or date.", meets: "The statement gives what, where, since when and how big; the goal has a number and a date; a process map of 5 to 8 steps is included.", exceeds: "Also includes a SIPOC or names what the customer cares about most (CTQ)." },
      { name: "Data and defect rate", objective: "O3", notYet: "Fewer than 20 data points, or no clear definition of a defect.", meets: "A check sheet with at least 20 data points and the defect rate with the math shown.", exceeds: "Also gives DPMO, or shows the same counting rules were used every day." },
      { name: "Root cause", objective: "O4", notYet: "No Pareto chart, or the 5 Whys ends in blame.", meets: "A Pareto chart sorted biggest to smallest and a 5 Whys that ends in a process cause someone can act on.", exceeds: "Also uses a fishbone to show other causes the team ruled out." },
      { name: "Fix and control", objective: "O5", notYet: "The fix was not tested, or there are no before and after numbers.", meets: "A piloted fix with before and after numbers and a control plan (what, how often, who, what if it slips).", exceeds: "Also includes standard work or a run chart covering several weeks." },
      { name: "DMAIC story", objective: "O1", notYet: "The page jumps around and the steps are missing or out of order.", meets: "The page follows Define, Measure, Analyze, Improve, Control in order.", exceeds: "The learner can explain the project in under two minutes, as in a job interview." },
      { name: "Study-and-test plan", objective: "O6", notYet: "No dates, or no official page checked.", meets: "Names an exam, the format checked on its official page, at least four dated study sessions and a target test date.", exceeds: "Also maps study sessions to Body of Knowledge topics and includes practice-test dates." }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Learners who sit for and pass a Yellow Belt exam within 6 months (follow-up survey)",
      "Learners who use their one-page project in an interview, or get a job, promotion or role on an improvement team (follow-up survey)",
      "Learners and small business owners who report a lower defect rate or less waste on their chosen process 30 days later"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Paper, pen and a ruler for check sheets, charts and process maps",
      "Optional: a free spreadsheet (Google Sheets or Microsoft Excel) for Pareto and run charts",
      "A real process to watch for one to two weeks (at work, in a business, or at home)",
      "Internet access to read the official ASQ or IASSC Yellow Belt page",
      "About 60 minutes of lessons and checks, plus one to two weeks of data collection for the final task"
    ],
    facilitatorNotes: [
      "In a group: take the pre-test together, then do one chapter per session. Have each learner pick their process in session one so data collection starts early.",
      "Practice a Pareto chart and a 5 Whys as a group on one shared example (such as wrong cafe orders) before learners do their own.",
      "Stop any 5 Whys that ends in blame and ask what in the process let the mistake happen.",
      "Remind learners not to record customer names, patient details or company secrets in their data.",
      "Score the final task with the rubric and give feedback on one Not yet row at a time; have learners practice explaining their project as an interview answer.",
      "Do not quote exam fees or pass marks from memory; send learners to asq.org or iassc.org for the current rules."
    ]
  }
};
