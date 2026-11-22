"use strict";

// Koach Learn course: Workforce Development -> "Forklift Operator Basics" (wave 1, 30 October 2026).
// Prepares learners for employer forklift training. Under OSHA 29 CFR 1910.178(l) the EMPLOYER must train and evaluate each
// operator on the truck and in the workplace; this course teaches the knowledge and does not certify anyone.
// Facts checked 30 October 2026 on osha.gov (1910.178 text and the Powered Industrial Trucks eTool) and law.cornell.edu (29 CFR 570.58).

const OSHA_178 = { name: "OSHA 29 CFR 1910.178: Powered industrial trucks (the federal forklift rule)", url: "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.178" };
const OSHA_ETOOL = { name: "OSHA eTool: Powered Industrial Trucks (Forklift)", url: "https://www.osha.gov/etools/powered-industrial-trucks" };
const OSHA_TYPES = { name: "OSHA eTool: Forklift types (Classes I to VII)", url: "https://www.osha.gov/etools/powered-industrial-trucks/types-fundamentals/types" };
const OSHA_PARTS = { name: "OSHA eTool: Forklift parts", url: "https://www.osha.gov/etools/powered-industrial-trucks/types-fundamentals/parts" };
const OSHA_PREOP = { name: "OSHA eTool: Pre-operation inspection", url: "https://www.osha.gov/etools/powered-industrial-trucks/operating-forklift/pre-operation" };
const OSHA_LOAD = { name: "OSHA eTool: Load handling", url: "https://www.osha.gov/etools/powered-industrial-trucks/operating-forklift/load-handling" };
const OSHA_TRAVEL = { name: "OSHA eTool: Traveling and maneuvering", url: "https://www.osha.gov/etools/powered-industrial-trucks/operating-forklift/traveling-maneuvering" };
const OSHA_DOCKS = { name: "OSHA eTool: Loading docks", url: "https://www.osha.gov/etools/powered-industrial-trucks/workplace/loading-docks" };
const OSHA_TRAINING = { name: "OSHA eTool: Operator training", url: "https://www.osha.gov/etools/powered-industrial-trucks/training" };
const AGE_RULE = { name: "29 CFR 570.58: No forklift operation by workers under 18 (U.S. Department of Labor rule, Cornell LII copy)", url: "https://www.law.cornell.edu/cfr/text/29/570.58" };

module.exports = {
  id: "forklift-operator",
  category: "Workforce Development",
  name: "Forklift Operator Basics",
  skills: "Knowing forklift types and parts, Doing a pre-shift inspection, Reading the data plate, Handling loads safely, Driving safely around people and docks",
  outcome: "name the main forklift types and parts, do a full pre-shift inspection and take an unsafe truck out of service, decide whether a load is safe to lift using the data plate, choose the safe action when driving, stacking, docking and parking, and make a plan to get trained and evaluated by an employer.",
  about: [
    "Forklift operators move goods in warehouses, stores, factories, farms and building sites. This course is for job seekers, people coming home from prison, veterans and anyone who wants to start that work.",
    "You will learn the types and parts of a forklift, the daily inspection, how to read the data plate and judge a load, the rules for driving around people, ramps and loading docks, and how to park safely.",
    "Important: this course prepares you but does not certify you. Under OSHA's forklift rule (29 CFR 1910.178), your employer must train you, watch you drive their truck in their workplace, and evaluate you before you operate on your own. An online course or a card alone is not enough. You must be at least 18. Do not drive a forklift to practice until you are in supervised training.",
    "Each lesson takes about five minutes and ends with a \"Try it now\" task on paper. There is a knowledge check after each chapter and a 20-question quiz at the end."
  ],
  finalTask: "Make a forklift readiness packet: a pre-shift inspection checklist for one forklift type, three load decisions from practice data plates with your reason for each, a pocket card of the parking and dock steps, and a plan to get employer training and evaluation with an honest résumé line.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Adults seeking warehouse, distribution, retail stockroom or factory jobs: job seekers, people coming home from prison, veterans and young adults aged 18 and over. Some have driven forklifts informally; most have not.",
    startingPoint: "Can drive a car or ride a bike and follow a checklist. Little knowledge of forklift parts, stability, load capacity or OSHA rules. Some believe an online card alone makes them certified.",
    gap: "Forklifts are behind many serious warehouse injuries, such as tipovers, people struck and falls from docks. Employers must train and evaluate every operator, and they hire people who already know the inspection, the load rules and the safety habits. Learners need that knowledge, and a true picture of how certification works, so they are ready for employer training and do not pay for misleading \"instant certification\".",
    constraints: [
      "Reading level: plain words and short sentences; every term explained",
      "No forklift driving in this course: hands-on practice happens only in supervised employer training",
      "Learners must be at least 18 to operate a forklift for work",
      "Devices: a phone or library computer for the OSHA pages; paper for the checklists",
      "Rules here are federal OSHA; some states run their own OSHA plans with rules at least as strict"
    ],
    prerequisites: "None. \"Workplace Safety Basics (OSHA)\" is a helpful companion course."
  },
  // ---- ADDIE: Design ----
  objectives: [
    { id: "O1", condition: "Given pictures or descriptions of forklifts", action: "identify the forklift type and point out the main parts", standard: "naming at least 6 parts and what each one does" },
    { id: "O2", condition: "Using an inspection checklist", action: "complete a pre-shift inspection and decide whether the truck can be used", standard: "checking every item and taking any unsafe truck out of service" },
    { id: "O3", condition: "Given a data plate and a load description", action: "decide whether the load is safe to lift and explain why", standard: "getting at least 4 of 5 load decisions right" },
    { id: "O4", condition: "Given a driving, stacking, dock or parking situation", action: "choose the safe action under OSHA rules", standard: "getting at least 4 of 5 situations right" },
    { id: "O5", condition: "Using what OSHA requires of employers", action: "write a plan to get trained and evaluated and an honest résumé line", standard: "that names the employer's role and claims no certification you do not have" }
  ],
  chapters: [
    {
      name: "Chapter 1: The job, the truck and the daily check",
      lessons: [
        {
          title: "The forklift job and the OSHA training rule",
          objectives: ["O5"],
          minutes: 5,
          goal: "Explain who trains and certifies a forklift operator and when retraining is needed.",
          text: [
            "OSHA calls forklifts \"powered industrial trucks\". Its rule, 29 CFR 1910.178, says the employer must make sure every operator is competent. That means training (classroom and hands-on practice under a qualified trainer) and an evaluation of you driving in the actual workplace.",
            "The employer then certifies that you were trained and evaluated. The record shows your name, the dates of training and evaluation, and who did them. Your evaluation must be repeated at least once every three years.",
            "You also get refresher training if you are seen driving unsafely, have an accident or near miss, get a poor evaluation, are moved to a different type of truck, or the workplace changes in a way that affects safety.",
            "Federal labor rules do not allow anyone under 18 to operate a forklift on the job. And an online course or wallet card alone does not make you certified: only your employer's training and evaluation do."
          ],
          words: [["OSHA", "the Occupational Safety and Health Administration, the U.S. agency for workplace safety."], ["Powered industrial truck", "OSHA's name for forklifts and similar machines that lift and move loads."], ["Evaluation", "a qualified person watching you operate in the workplace to judge if you are safe."], ["Refresher training", "extra training to fix a problem or prepare you for a new truck or workplace."], ["Near miss", "an event where nobody got hurt but someone could have."]],
          slides: [
            { title: "Who certifies you?", bullets: ["Your employer, not a website", "Training: classroom plus hands-on under a trainer", "Evaluation: you driving in the real workplace"] },
            { title: "The record", bullets: ["Your name", "Dates of training and evaluation", "Who trained and evaluated you"] },
            { title: "When you train again", bullets: ["At least every three years: a new evaluation", "After an accident, near miss or unsafe driving", "New type of truck or a changed workplace"] },
            { title: "Before you start", bullets: ["You must be at least 18", "No practice driving without a trainer"] }
          ],
          sources: [OSHA_178, OSHA_TRAINING, AGE_RULE],
          tryIt: "On paper, write three sentences in your own words: who trains and evaluates a forklift operator, how often the evaluation is repeated, and two events that mean you need refresher training.",
          youCanNow: "explain who trains and certifies a forklift operator, how often you are evaluated, and when you need refresher training.",
          quickCheck: [
            { objective: "O5", q: "Who must train and evaluate you before you operate a forklift at work?", options: ["Any website that sells cards", "Your employer, in your workplace", "A friend who drives forklifts", "Nobody"], answer: 1, why: "OSHA's rule puts training and evaluation on the employer, in the actual workplace." },
            { objective: "O5", q: "You bump a rack with your forklift. Nobody is hurt. What is true?", options: ["Nothing needs to happen", "You lose your job automatically", "You must buy a new card online", "It is a reason for refresher training"], answer: 3, why: "An accident or near miss is one of OSHA's triggers for refresher training." }
          ]
        },
        {
          title: "Forklift types and parts",
          objectives: ["O1"],
          minutes: 5,
          goal: "Identify the forklift type and name its main parts.",
          text: [
            "OSHA groups forklifts into seven classes. Class I: electric rider trucks. Class II: electric narrow-aisle trucks. Class III: electric hand trucks, including walk-behind pallet jacks. Classes IV and V: engine-powered trucks, with cushion tires for smooth indoor floors (IV) or air-filled tires for outdoors (V). Class VI: tractors that tow. Class VII: rough-terrain forklifts for building sites and farms.",
            "Most counterbalance forklifts have the same main parts. The forks lift the load. The forks hang on the carriage, which moves up and down the mast. The load backrest stops the load from falling back toward you. The overhead guard protects you from falling objects. The counterweight at the back balances the load.",
            "In the seat you have the steering, the direction control (forward and reverse), the lift and tilt levers, the horn, the brakes and the seatbelt. The data plate (also called the capacity plate or nameplate) tells you how much the truck can lift."
          ],
          words: [["Mast", "the upright frame the forks travel up and down on."], ["Carriage", "the plate on the mast that holds the forks."], ["Load backrest", "a frame above the forks that stops the load falling back toward the operator."], ["Overhead guard", "the roof frame that protects the operator from falling objects."], ["Counterweight", "a heavy weight at the back of the truck that balances the load."], ["Data plate", "the plate on the truck that shows its model and how much it can lift."]],
          slides: [
            { title: "Seven classes", bullets: ["I, II, III: electric (rider, narrow-aisle, hand trucks)", "IV, V: engine trucks for indoors or outdoors", "VI: towing tractors; VII: rough terrain"] },
            { title: "Lifting parts", bullets: ["Forks on the carriage", "Carriage moves on the mast", "Load backrest keeps the load off you"] },
            { title: "Protecting parts", bullets: ["Overhead guard over your head", "Counterweight at the back", "Seatbelt, horn and lights"] },
            { title: "The data plate", bullets: ["Shows the truck's model", "Shows how much it can lift", "Must be in place and readable"] }
          ],
          sources: [OSHA_TYPES, OSHA_PARTS],
          tryIt: "Draw a simple side view of a sit-down forklift (boxes and lines are fine). Label at least six parts: forks, carriage, mast, load backrest, overhead guard, counterweight. Next to each, write one line on what it does.",
          youCanNow: "say which class a forklift is in and name its main parts and what they do.",
          quickCheck: [
            { objective: "O1", q: "Which part stops a load from falling back toward the operator?", options: ["The load backrest", "The counterweight", "The tires", "The horn"], answer: 0, why: "The load backrest sits above the forks and keeps the load from falling toward you." },
            { objective: "O1", q: "A forklift built for uneven ground on a building site is which class?", options: ["Class I", "Class III", "Class VII", "Class IV"], answer: 2, why: "Class VII are rough-terrain forklifts for uneven outdoor ground." }
          ]
        },
        {
          title: "The pre-shift inspection",
          objectives: ["O2"],
          minutes: 6,
          goal: "Complete a pre-shift inspection checklist and decide if the truck is safe to use.",
          text: [
            "OSHA requires every forklift to be examined before it is used, at least once a day; if trucks run around the clock, after every shift. If anything makes the truck unsafe, it is taken out of service until it is repaired.",
            "Start with the key off. Look at fluid levels and for leaks, cracks and damaged hoses or mast chains (never put your hands inside the mast). Check the tires, the forks, the load backrest, the overhead guard, and that the data plate and warning decals are in place and readable. Check the seatbelt.",
            "Electric trucks: look at cables, connectors and the battery restraint. Propane trucks: check the tank is mounted right, the relief valve points up and there are no leaks.",
            "Then, with the truck running, test the brakes, steering, forward and reverse, lift, lower, tilt, horn, lights and back-up alarm. If something is wrong: do not use the truck, tag or report it, write it on the checklist and tell your supervisor. Only trained, authorized people make repairs."
          ],
          steps: ["Key off: fluids, leaks, hoses and chains (look, don't reach in).", "Tires, forks, load backrest, overhead guard.", "Data plate and warning decals present and readable; seatbelt works.", "Key on: brakes, steering, forward and reverse.", "Lift, lower, tilt, horn, lights, back-up alarm.", "Sign the checklist; report and tag any defect and do not use the truck."],
          words: [["Pre-shift inspection", "the check of a forklift before it is used for the shift."], ["Out of service", "not to be used until it is repaired, usually marked with a tag."], ["Mast chains", "the chains that lift the carriage and forks up the mast."]],
          slides: [
            { title: "When to inspect", bullets: ["Before use, at least daily", "After every shift if trucks run all day and night"] },
            { title: "Key off", bullets: ["Fluids, leaks, hoses, chains: look, don't reach in", "Tires, forks, backrest, overhead guard", "Data plate, decals, seatbelt"] },
            { title: "Key on", bullets: ["Brakes, steering, forward and reverse", "Lift, lower, tilt", "Horn, lights, back-up alarm"] },
            { title: "Found a problem?", bullets: ["Do not use the truck", "Tag it, write it down, tell your supervisor", "Only authorized people repair it"] }
          ],
          sources: [OSHA_PREOP, OSHA_178],
          tryIt: "Write your own pre-shift checklist with two columns, \"Key off\" and \"Key on\", using the OSHA pre-operation page. Then read this practice case: the horn does not work and one fork has a crack. Write what you do, step by step.",
          youCanNow: "complete a pre-shift inspection checklist and take an unsafe truck out of service.",
          quickCheck: [
            { objective: "O2", q: "How often must a forklift be examined before use?", options: ["Once a month", "Once a year", "Only when it breaks", "At least daily, before use"], answer: 3, why: "OSHA requires an examination before use, at least daily, and after each shift for round-the-clock use." },
            { objective: "O2", q: "During your check, the brakes feel weak. What do you do?", options: ["Use it carefully today", "Report it, tag it out of service and do not use it", "Fix the brakes yourself", "Tell a coworker to use it"], answer: 1, why: "An unsafe truck is taken out of service and reported; only authorized people repair it." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: The job, the truck and the daily check",
        questions: [
          { objective: "O5", q: "You took a forklift course online and got a card. Can you now drive any forklift at a new job?", options: ["No; the employer must train and evaluate you on its truck and site", "Yes, the card is all you need", "Yes, if the card is laminated", "Only on weekends"], answer: 0, why: "OSHA requires the employer to train and evaluate each operator in the workplace." },
          { objective: "O5", q: "How often must an operator's evaluation be repeated at least?", options: ["Every month", "Every ten years", "Once every three years", "Never"], answer: 2, why: "OSHA says each operator's evaluation is done at least once every three years." },
          { objective: "O1", q: "What does the counterweight do?", options: ["Lifts the forks", "Holds the horn", "Protects your head", "Balances the load at the front"], answer: 3, why: "The heavy counterweight at the back balances the weight on the forks." },
          { objective: "O1", q: "Where do you find how much a forklift can lift?", options: ["On the tires", "On the data plate", "On the horn", "On the seat"], answer: 1, why: "The data plate shows the truck's lifting capacity." },
          { objective: "O2", q: "Which check is done with the truck running?", options: ["Testing the brakes, steering, lift and tilt", "Looking at the tires", "Reading the decals", "Checking fluid levels"], answer: 0, why: "Brakes, steering, lift and tilt are operational checks done with the truck running." }
        ]
      }
    },
    {
      name: "Chapter 2: Loads, driving and getting hired",
      lessons: [
        {
          title: "Reading the data plate and judging a load",
          objectives: ["O3"],
          minutes: 6,
          goal: "Decide whether a load is safe to lift using the data plate and load center.",
          text: [
            "The data plate shows the most the truck can lift at a certain load center. The load center is the distance from the front face of the forks to the middle (center of gravity) of the load. Many forklifts are rated for a 24-inch load center. If the load's middle is farther out than that, or the truck has an attachment, the safe capacity is lower: check the plate and ask your supervisor.",
            "A forklift balances like a seesaw on its front wheels. The load on the forks is on one side; the truck and counterweight are on the other. Too much weight, a load too far out, or a load raised and tilted forward can tip the truck forward. Turning too fast can tip it sideways.",
            "Lift only stable loads within the capacity. Center the load between the forks and put the forks under it at least two-thirds of the load's length. Lift a little, tilt the mast back slightly so the load rests against the backrest, and keep it low."
          ],
          steps: ["Find the weight of the load (label, paperwork or ask).", "Read the data plate: capacity and load center.", "Is the load's middle within the load center? Is the weight under the capacity?", "Is the load stable, wrapped and not damaged?", "If yes: center it, forks at least two-thirds under, lift a little, tilt back. If no or unsure: stop and ask."],
          words: [["Capacity", "the most weight a forklift can safely lift, shown on the data plate."], ["Load center", "the distance from the front of the forks to the middle of the load."], ["Center of gravity", "the point where an object's weight is balanced."], ["Tipover", "when a forklift falls over forward or onto its side."]],
          slides: [
            { title: "The data plate tells you", bullets: ["Capacity: the most the truck can lift", "At a load center, often 24 inches", "Load farther out = less it can lift"] },
            { title: "Like a seesaw", bullets: ["Front wheels are the pivot", "Load on one side, counterweight on the other", "Too heavy or too far out: it tips"] },
            { title: "Pick it up right", bullets: ["Stable load, within capacity", "Centered, forks two-thirds under", "Lift a little, tilt back, keep it low"] },
            { title: "Unsure? Stop and ask", bullets: ["Unknown weight", "Damaged or leaning load", "Attachments change the capacity"] }
          ],
          sources: [OSHA_LOAD, OSHA_178],
          tryIt: "Practice only, made-up numbers. A truck's plate says 4,000 lb at a 24-inch load center. Decide yes or no, with a reason: (1) a 3,200 lb pallet, centered and wrapped; (2) a 4,600 lb crate; (3) a 2,500 lb load that is leaning and torn; (4) a 3,000 lb load whose middle is far out past 24 inches. Write what you would do for each.",
          youCanNow: "read a data plate and decide whether a load is safe to lift, and say why.",
          quickCheck: [
            { objective: "O3", q: "The plate says 5,000 lb at 24 inches. The load is 5,800 lb. What do you do?", options: ["Lift it slowly", "Add a person on the back as extra weight", "Do not lift it; tell your supervisor", "Lift it high so it balances"], answer: 2, why: "Never lift more than the rated capacity; extra riders are never allowed." },
            { objective: "O3", q: "How far should the forks go under a load?", options: ["Just the tips", "At least two-thirds of the load's length", "Through to the next pallet behind it", "It does not matter"], answer: 1, why: "OSHA's guidance is at least two-thirds of the load length, without hitting loads behind it." }
          ]
        },
        {
          title: "Driving, docks and parking safely",
          objectives: ["O4"],
          minutes: 6,
          goal: "Choose the safe action when driving, at a dock and when parking.",
          text: [
            "Travel with the load low and tilted back, never raised or tilted forward. Drive at a speed that lets you stop safely, and slow down on wet floors, at turns and at cross aisles. Sound the horn at cross aisles and blind corners. Look where you are going. If the load blocks your view, drive in reverse. Keep about three truck lengths behind another truck.",
            "People: nobody stands or walks under raised forks, loaded or empty. No riders unless the truck has a safe place for them and they are allowed. Never drive toward someone standing in front of a wall or rack.",
            "Ramps: go slowly. With a load, keep the load uphill: drive forward going up and in reverse going down. Never turn on a ramp. Docks: before driving into a trailer, the trailer's brakes must be set and its rear wheels chocked; check the trailer floor for breaks or weak spots; stay away from the dock edge.",
            "Parking: if you leave the truck (or are 25 feet or more away, or it is out of sight), lower the forks all the way, put the controls in neutral, shut it off and set the brake; block the wheels on a slope. If a sit-down truck starts to tip: do not jump. Stay in the seat with the seatbelt on, hold the wheel, brace your feet and lean away from the fall."
          ],
          steps: ["Load low, tilted back; horn at cross aisles; look where you drive.", "Load blocks your view: drive in reverse.", "Ramps: load uphill, no turning on the ramp.", "Docks: trailer brakes set, wheels chocked, floor checked.", "Parking: forks down, neutral, power off, brake set.", "Tipping: stay in, belt on, hold on, lean away."],
          words: [["Cross aisle", "where two aisles meet, like an intersection."], ["Wheel chock", "a wedge put against a wheel so a trailer cannot roll."], ["Dock edge", "the edge of the loading dock where the floor drops off."], ["Unattended", "left alone: 25 feet or more away from the truck, or out of sight of it."]],
          slides: [
            { title: "Driving", bullets: ["Load low and tilted back", "Horn at cross aisles and blind spots", "Can't see past the load? Drive in reverse"] },
            { title: "People", bullets: ["Nobody under raised forks", "No riders", "Never pin someone against a wall or rack"] },
            { title: "Ramps and docks", bullets: ["Load uphill; no turns on ramps", "Trailer brakes set and wheels chocked", "Check the trailer floor; stay off the edge"] },
            { title: "Park and tipover", bullets: ["Forks down, neutral, off, brake set", "Tipping: stay in, belt on, lean away"] }
          ],
          sources: [OSHA_TRAVEL, OSHA_DOCKS, OSHA_178],
          tryIt: "Make a pocket card with two lists: \"Before I drive into a trailer\" and \"When I park\". Then answer this practice case in writing: you are carrying a tall load that blocks your view and you must go down a ramp. What do you do?",
          youCanNow: "choose the safe action when driving, at a dock, on a ramp, when parking and if a truck starts to tip.",
          quickCheck: [
            { objective: "O4", q: "A coworker wants to stand under your raised forks to fix a label. What do you say?", options: ["\"Go ahead, be quick.\"", "\"Only if the forks are empty.\"", "\"Only if you wear a hard hat.\"", "\"No. Nobody goes under raised forks. I'll lower them first.\""], answer: 3, why: "OSHA forbids anyone standing or passing under the raised forks, loaded or empty." },
            { objective: "O4", q: "Your sit-down forklift starts to tip over. What do you do?", options: ["Stay in the seat, belt on, hold the wheel and lean away", "Jump out fast", "Grab the mast", "Raise the forks"], answer: 0, why: "On a sit-down truck, staying in with the seatbelt on is how you avoid being crushed." }
          ]
        },
        {
          title: "Getting trained and hired as a forklift operator",
          objectives: ["O5"],
          minutes: 5,
          goal: "Write a plan to get trained and evaluated, and an honest résumé line.",
          text: [
            "Many warehouse, distribution and retail employers hire people for general warehouse work and then train them on forklifts. Some staffing agencies, workforce centers and community colleges also run forklift training with hands-on practice. Ask whether it includes driving under a trainer and a practical evaluation.",
            "Remember: wherever you train, each new employer must make sure you are trained and evaluated for its trucks and its workplace before you drive alone. Prior training helps, and an employer may not need to repeat topics you already learned and were evaluated on.",
            "On your résumé, be honest. If you finished this course, write that you completed forklift safety knowledge training. If an employer trained and evaluated you, write the truck types and the year. Never write \"certified\" if you were not.",
            "In an interview, talk about the pre-shift check, the data plate and pedestrian safety. Employers want operators who are careful first and fast second."
          ],
          steps: ["List three local employers or programs that train forklift operators (job sites, workforce center, community college).", "Ask each: does it include supervised driving and an evaluation?", "Write an honest résumé line for what you have done so far.", "Practice a 30-second answer: \"How do you keep safe on a forklift?\""],
          words: [["Staffing agency", "a company that places workers in jobs with other businesses."], ["Workforce center", "a public office (often called an American Job Center) that helps people find jobs and training."]],
          slides: [
            { title: "Where training happens", bullets: ["Employers that hire and then train", "Workforce centers and community colleges", "Ask: supervised driving and an evaluation?"] },
            { title: "Each employer evaluates you", bullets: ["For its trucks and its workplace", "Before you drive alone"] },
            { title: "Be honest on your résumé", bullets: ["Course: forklift safety knowledge training", "Employer-trained: truck types and the year", "Never claim \"certified\" if you are not"] }
          ],
          sources: [OSHA_178, OSHA_TRAINING],
          tryIt: "Write your plan: three places that could train you, the question you will ask each, one honest résumé line, and your 30-second answer to \"How do you keep safe on a forklift?\" Read the answer out loud.",
          youCanNow: "write a plan to get forklift training and evaluation and describe your training honestly on a résumé.",
          quickCheck: [
            { objective: "O5", q: "You finished this course but no employer has evaluated you. Which résumé line is honest?", options: ["\"Certified forklift operator, all classes\"", "\"Completed forklift safety knowledge training (Koach Learn), 2026\"", "\"OSHA licensed forklift driver\"", "\"Forklift expert, 10 years\""], answer: 1, why: "It says exactly what you did, without claiming a certification you do not have." },
            { objective: "O5", q: "What should you ask a forklift training program?", options: ["Whether it includes supervised driving and a practical evaluation", "Whether it gives a fancy card", "Whether you can skip the hands-on part", "Whether it is the cheapest online"], answer: 0, why: "OSHA training includes hands-on practice and an evaluation, so check the program has them." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Loads, driving and getting hired",
        questions: [
          { objective: "O3", q: "What is the load center?", options: ["The middle of the warehouse", "The center of the steering wheel", "The distance from the fork face to the middle of the load", "The height of the mast"], answer: 2, why: "Load center is measured from the front face of the forks to the load's center of gravity." },
          { objective: "O3", q: "A load is leaning and its wrap is torn. What do you do?", options: ["Lift it fast", "Lift it high so you can see", "Push it with the forks", "Do not lift it; report it so it can be fixed or restacked"], answer: 3, why: "Only stable, safely arranged loads should be handled." },
          { objective: "O4", q: "Your load blocks your view ahead. How do you travel?", options: ["In reverse, looking where you are going", "Forward, with the load raised", "Forward, faster", "With a coworker riding on the forks"], answer: 0, why: "If the load blocks your view, travel with the load trailing (in reverse)." },
          { objective: "O4", q: "Before driving into a truck trailer at a dock, what must be done?", options: ["Nothing", "Open the trailer's back windows", "Set the trailer's brakes, chock its wheels and check the floor", "Honk three times"], answer: 2, why: "OSHA requires brakes set and wheels chocked, and the trailer floor checked before driving onto it." },
          { objective: "O5", q: "You move to a job using a different type of forklift. What is true?", options: ["You need training and evaluation for the new type", "Your old card covers everything", "You can learn it alone after hours", "Nothing changes"], answer: 0, why: "A different type of truck is a reason for training and evaluation on that truck." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Forklift Operator Basics",
    questions: [
      { objective: "O5", q: "Under OSHA's rule, who certifies that a forklift operator was trained and evaluated?", options: ["The operator", "A website", "The employer", "The forklift maker"], answer: 2, why: "The employer certifies the operator's training and evaluation." },
      { objective: "O5", q: "What is the youngest age to operate a forklift on the job?", options: ["16", "18", "14", "21"], answer: 1, why: "Federal labor rules ban operating forklifts for workers under 18." },
      { objective: "O5", q: "Which is a reason for refresher training?", options: ["A near miss with a pedestrian", "A new uniform", "A pay raise", "A holiday"], answer: 0, why: "An accident or near miss is one of OSHA's refresher triggers." },
      { objective: "O1", q: "What does the overhead guard do?", options: ["Holds the load", "Balances the truck", "Steers the truck", "Protects the operator from falling objects"], answer: 3, why: "The overhead guard shields the operator from objects falling from above." },
      { objective: "O1", q: "The forks hang on which part?", options: ["The counterweight", "The carriage", "The tires", "The seat"], answer: 1, why: "The forks hang on the carriage, which moves up and down the mast." },
      { objective: "O1", q: "A walk-behind electric pallet jack is in which class?", options: ["Class VII", "Class V", "Class III", "Class VI"], answer: 2, why: "Class III covers electric hand trucks, including walk-behind models." },
      { objective: "O2", q: "When must a forklift be examined?", options: ["Before use, at least daily", "Once a year", "Only after an accident", "Only when new"], answer: 0, why: "OSHA requires examination before use, at least daily." },
      { objective: "O2", q: "Why do you not put your hands inside the mast to check the chains?", options: ["It is dirty", "It is not part of the check", "The supervisor does it", "The mast can move and crush your hands"], answer: 3, why: "Moving mast parts can crush hands; OSHA's guidance is to look, or use a stick to check tension." },
      { objective: "O2", q: "The data plate is missing from a forklift. What do you do?", options: ["Guess the capacity", "Report it; the plate must be in place and readable", "Use a phone photo of another truck's plate", "Ignore it"], answer: 1, why: "Nameplates and markings must stay in place and readable; report it before use." },
      { objective: "O2", q: "Who may repair a forklift?", options: ["Only trained, authorized people", "Any operator", "Anyone with tools", "The newest worker"], answer: 0, why: "Only authorized, trained people should make repairs." },
      { objective: "O3", q: "The plate says 3,000 lb at 24 inches. Which load can you lift (practice only)?", options: ["A 3,500 lb crate", "A 3,000 lb load whose middle is 40 inches out", "A torn, leaning 1,000 lb load", "A 2,400 lb wrapped pallet, centered"], answer: 3, why: "It is under capacity, stable and centered within the rated load center." },
      { objective: "O3", q: "What happens when the load's middle is farther out than the rated load center?", options: ["The truck can lift more", "The safe capacity goes down", "Nothing changes", "The truck goes faster"], answer: 1, why: "A longer load center makes the truck less stable, so it can lift less." },
      { objective: "O3", q: "After lifting a load a little, what do you do before you travel?", options: ["Tilt the mast back slightly so the load rests on the backrest", "Tilt it forward", "Raise it as high as you can", "Let someone hold it"], answer: 0, why: "Tilting back slightly steadies the load against the backrest." },
      { objective: "O4", q: "How should you carry a load while driving?", options: ["High, so you can see", "Tilted forward", "Low and tilted back", "With a person holding it"], answer: 2, why: "A low load tilted back keeps the truck stable; never travel raised or tilted forward." },
      { objective: "O4", q: "You come to a cross aisle where you cannot see around the corner. What do you do?", options: ["Speed up to pass quickly", "Slow down and sound the horn", "Raise the forks", "Close your eyes and go"], answer: 1, why: "OSHA says slow down and sound the horn where your view is blocked." },
      { objective: "O4", q: "You drive a loaded forklift down a ramp. Which way?", options: ["Forward, load first", "Sideways", "Turn around halfway down", "In reverse, so the load stays uphill"], answer: 3, why: "Keep the load uphill: forward going up, reverse going down, and never turn on a ramp." },
      { objective: "O4", q: "You walk away from your forklift for a break. What must you do?", options: ["Lower the forks, put it in neutral, shut it off and set the brake", "Leave it running so it is ready", "Leave the forks up", "Ask a coworker to watch it"], answer: 0, why: "An unattended truck has its forks down, controls neutral, power off and brake set." },
      { objective: "O4", q: "How far behind another forklift should you stay?", options: ["One foot", "As close as possible", "About three truck lengths", "It does not matter"], answer: 2, why: "OSHA asks for about three truck lengths between trucks." },
      { objective: "O5", q: "A website says its online video makes you \"OSHA certified\" in 20 minutes. What is true?", options: ["It replaces employer training", "OSHA sells the card", "It is enough for every job", "Employer hands-on training and evaluation are still required"], answer: 3, why: "Only the employer's training and evaluation in the workplace meet OSHA's rule." },
      { objective: "O1", q: "What does the data plate show?", options: ["The truck's model and how much it can lift", "The operator's name", "The warehouse address", "The fuel price"], answer: 0, why: "The data plate shows the model and capacity information." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Pre-Test: What Do You Already Know?", from: [0, 3, 6, 8, 10, 11, 13, 15, 18] },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and check again.",
    criteria: [
      { name: "Inspection checklist", objective: "O2", notYet: "Missing key-off or key-on checks, or no step for an unsafe truck.", meets: "Covers every key-off and key-on item for the chosen truck type and says what to do with a defect.", exceeds: "Adds the extra checks for electric or propane trucks." },
      { name: "Parts named", objective: "O1", notYet: "Fewer than six parts named, or wrong uses.", meets: "At least six parts named with what each does, and the truck's class.", exceeds: "Explains how the counterweight and load backrest keep the operator safe." },
      { name: "Load decisions", objective: "O3", notYet: "A load over capacity or unstable is marked safe.", meets: "All three load decisions are right, with a reason using the data plate.", exceeds: "Notes when to ask a supervisor, such as an unknown weight or an attachment." },
      { name: "Driving, dock and parking card", objective: "O4", notYet: "Missing the dock check or a parking step.", meets: "Lists the dock steps (brakes, chocks, floor) and all four parking steps.", exceeds: "Adds ramp, pedestrian and tipover rules." },
      { name: "Training plan and résumé line", objective: "O5", notYet: "Claims to be certified, or says no employer training is needed.", meets: "Names three places to train, says the employer must evaluate, and gives an honest résumé line.", exceeds: "Includes a practiced 30-second safety answer for interviews." }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and a readiness packet that meets the rubric",
      "Learners who start employer or program forklift training within 60 days (follow-up survey)",
      "Learners hired into warehouse or forklift roles (partner and follow-up reports)",
      "Partner employers report new hires who pass their practical evaluation the first time"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A phone or computer with internet for the OSHA eTool pages",
      "Paper and pen for the drawing, checklist and pocket card",
      "Optional: printed pictures of forklifts and a sample data plate",
      "About 60 minutes in total"
    ],
    facilitatorNotes: [
      "Make it clear early: this course does not certify anyone; the employer trains and evaluates.",
      "Do not let learners practice on real forklifts as part of this course. If your program has a training truck, hands-on practice happens only with a qualified trainer.",
      "Use printed data plates with made-up numbers for the load practice.",
      "Watch for learners under 18; they can take the course but cannot operate forklifts on the job.",
      "Score the readiness packet with the rubric and review one Not yet row at a time."
    ]
  }
};
