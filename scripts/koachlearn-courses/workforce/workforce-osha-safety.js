"use strict";

// Koach Learn course: Workforce Development -> "Workplace Safety Basics (OSHA)" (owner's request, 28 October 2026: life, people and career skills beyond AI).
// Facts from osha.gov (checked 28 Oct 2026 through osha.gov search results, because osha.gov blocked automated page reading) and dol.gov.
// Not a substitute for an OSHA Outreach course or for the job-specific training employers must give.

module.exports = {
  id: "workforce-osha-safety",
  category: "Workforce Development",
  name: "Workplace Safety Basics (OSHA)",
  skills: "Spotting hazards, Choosing and using PPE, Preventing slips, trips and falls, Lifting safely, Reading a safety data sheet, Reporting injuries and using your safety rights",
  outcome: "walk through a workplace and spot hazards, choose the right PPE, lift and move loads safely, find what you need on a safety data sheet, report an injury or hazard the right way, and explain your right to a safe job and what OSHA 10 and OSHA 30 are.",
  about: [
    "This course is for anyone starting or already working in warehouses, construction, kitchens, cleaning, retail, manufacturing, health care or any job where people can get hurt. It teaches the safety basics employers expect on day one.",
    "You will practice a hazard walk, learn how to use protective gear, prevent the most common injuries (slips, trips, falls and strains from lifting), read the safety data sheet for a chemical, and know how to report an injury or a hazard. You will also learn your rights under the Occupational Safety and Health Administration (OSHA) and what the OSHA 10-hour and 30-hour cards are.",
    "Each lesson takes about five minutes. Read the lesson, look over the slides, then do the \"Try it now\" task. There is a knowledge check after each chapter and a 20-question quiz at the end. This course is general safety education. Always follow your employer's training and rules for your specific job, and check osha.gov for current rules."
  ],
  finalTask: "Do a 10-minute hazard walk of a real place (your workplace, a store room, a garage or your home). Write a hazard report listing at least five hazards, the type of each (slip/trip/fall, lifting, chemical, machine, electrical, other), the PPE or fix needed, and who you would report each one to. Add the safety data sheet sections you would read for one chemical you found, and write the steps you would take if someone were injured.",
  chapters: [
    {
      name: "Chapter 1: Spotting and preventing hazards",
      lessons: [
        {
          title: "Spotting hazards with a hazard walk",
          minutes: 5,
          goal: "Walk an area and list the hazards you see by type.",
          text: [
            "A hazard is anything at work that could hurt someone: a wet floor, a cord across a walkway, a heavy box on a high shelf, a machine without its guard, a leaking chemical, loud noise or a blocked exit.",
            "A hazard walk is a slow, planned look around an area. Look down (floors, cords, spills), look up (high shelves, overhead loads, ladders), look around (machines, vehicles, chemicals, exits, fire extinguishers), and listen (loud noise, alarms, strange sounds from equipment).",
            "Group what you find: slips, trips and falls; lifting and strains; chemicals; machines and moving parts; electrical; vehicles such as forklifts; heat, cold and noise; and fire and exits.",
            "When you find a hazard, fix it right away if it is small and safe to do so (wipe a spill, move a box out of a walkway), then tell your supervisor. If it is not safe or you were not trained, keep people away and report it."
          ],
          steps: ["Pick an area and walk slowly.", "Look down: floors, cords, spills.", "Look up: shelves, overhead loads, ladders.", "Look around: machines, vehicles, chemicals, exits.", "Write each hazard and its type.", "Fix small ones if safe, and report everything to your supervisor."],
          words: [["Hazard", "something at work that could cause an injury or illness."], ["Hazard walk", "a slow, planned walk through an area to look for hazards."], ["Guard", "a cover or barrier on a machine that keeps hands and bodies away from moving parts."]],
          slides: [
            { title: "What a hazard is", bullets: ["Anything that could hurt someone", "Wet floors, loose cords, missing guards", "Chemicals, noise, blocked exits"] },
            { title: "Look down, up and around", bullets: ["Down: floors, cords, spills", "Up: high shelves, overhead loads", "Around: machines, vehicles, exits"] },
            { title: "Hazard types", bullets: ["Slips, trips and falls; lifting", "Chemicals; machines; electrical", "Vehicles; heat, cold, noise; fire"] },
            { title: "What to do", bullets: ["Fix small hazards if safe", "Keep people away from big ones", "Always tell your supervisor"] }
          ],
          tryIt: "Do a five-minute hazard walk in one room of your home, a store room or your workplace. Write down at least five hazards and the type of each.",
          youCanNow: "walk an area, spot hazards by type, and decide whether to fix or report each one."
        },
        {
          title: "Using PPE the right way",
          minutes: 5,
          goal: "Choose, check and wear the right protective equipment for a task.",
          text: [
            "Personal protective equipment (PPE) is gear you wear to protect your body: safety glasses or goggles, face shields, hard hats, gloves, safety-toe boots, hearing protection (earplugs or earmuffs), high-visibility vests, respirators and fall-protection harnesses.",
            "Match the gear to the hazard: glasses for flying chips or splashes; the right gloves for the job (cut-resistant for blades, chemical gloves for chemicals, as the safety data sheet says); hearing protection for loud tools; a hard hat where things can fall; a high-visibility vest near vehicles.",
            "Check it before each use: no cracks, holes or worn straps. It must fit. A respirator must be fit-tested and you must be trained before you use one.",
            "PPE is the last line of defense. It is better to remove a hazard first, for example by putting a guard on a machine or storing heavy items low. Under OSHA rules, employers generally must provide required PPE and train you to use it."
          ],
          steps: ["Look at the task and its hazards.", "Pick the PPE that matches each hazard.", "Inspect it for damage.", "Put it on and check the fit.", "Clean and store it after use; report damaged gear."],
          words: [["PPE", "personal protective equipment: gear you wear to protect yourself from hazards."], ["Respirator", "a mask that protects your lungs from dust, fumes or gases; it needs a fit test and training."], ["Fit test", "a check that a respirator seals properly on your face."]],
          slides: [
            { title: "Common PPE", bullets: ["Eye and face: glasses, goggles, shields", "Head, hands, feet: hard hats, gloves, boots", "Ears, lungs, visibility: plugs, respirators, vests"] },
            { title: "Match gear to the hazard", bullets: ["Flying chips: safety glasses", "Chemicals: the gloves the safety data sheet names", "Loud tools: hearing protection"] },
            { title: "Check before each use", bullets: ["No cracks, holes or worn straps", "Must fit", "Respirators need a fit test and training"] },
            { title: "Last line of defense", bullets: ["Remove the hazard first if you can", "Employers generally must provide required PPE"] }
          ],
          sources: [
            { name: "OSHA: Personal protective equipment", url: "https://www.osha.gov/personal-protective-equipment" }
          ],
          tryIt: "Pick three tasks: cutting boxes with a box cutter, mopping with a cleaning chemical, and running a leaf blower. For each, write the PPE you would wear and why.",
          youCanNow: "choose, check and wear the right PPE for a task, and know it is the last line of defense."
        },
        {
          title: "Slips, trips, falls and safe lifting",
          minutes: 5,
          goal: "Prevent slips, trips and falls and lift a load safely.",
          text: [
            "Slips, trips and falls are among the most common work injuries. Prevent them: clean spills right away and put out a wet floor sign; keep walkways clear of cords, boxes and hoses; use handrails; wear shoes with good grip; and keep work areas well lit.",
            "Working up high: use the right ladder, set it on firm, level ground, keep three points of contact (two hands and a foot, or two feet and a hand), and never stand on the top step. Fall protection, such as guardrails or a harness, is required at certain heights; OSHA's general rule is 4 feet in general industry and 6 feet in construction. Follow your site's training.",
            "Lifting: plan the lift and check the weight. Get help or use a cart, dolly or forklift for heavy or awkward loads. Stand close with feet apart, bend your knees, keep your back straight, hold the load close, lift with your legs, and turn with your feet instead of twisting your back.",
            "Report pain early. Small strains get worse if you keep working through them."
          ],
          steps: ["Clean spills and mark wet floors.", "Keep walkways clear.", "On a ladder: firm ground, three points of contact, not the top step.", "Before lifting: check the weight and get help or a cart if needed.", "Lift: bend knees, straight back, load close, lift with legs, turn with your feet."],
          words: [["Three points of contact", "always having two hands and a foot, or two feet and a hand, on a ladder."], ["Fall protection", "guardrails, safety nets or harnesses that stop or prevent falls from height."]],
          slides: [
            { title: "Stop slips and trips", bullets: ["Clean spills; use wet floor signs", "Clear cords and boxes from walkways", "Good shoes and good lighting"] },
            { title: "Ladders and heights", bullets: ["Firm, level ground", "Three points of contact; not the top step", "Fall protection: 4 ft general industry, 6 ft construction"] },
            { title: "Safe lifting", bullets: ["Check the weight; get help or a cart", "Bend knees, straight back, load close", "Lift with legs; turn with your feet"] },
            { title: "Report pain early", bullets: ["Small strains get worse if ignored"] }
          ],
          sources: [
            { name: "OSHA: Fall protection", url: "https://www.osha.gov/fall-protection" },
            { name: "OSHA: Walking-working surfaces", url: "https://www.osha.gov/walking-working-surfaces" }
          ],
          tryIt: "Practice a safe lift with a box of books or groceries: check the weight, stand close, bend your knees, keep your back straight, lift with your legs and turn with your feet. Then write three things you would fix to stop slips and trips where you work or live.",
          youCanNow: "prevent slips, trips and falls, use a ladder safely, and lift a load the right way."
        }
      ],
      check: {
        title: "Knowledge Check 1: Spotting and preventing hazards",
        questions: [
          { q: "You see a power cord stretched across a walkway. What type of hazard is it?", options: ["Chemical", "Noise", "Slip, trip or fall", "Heat"], answer: 2, why: "Cords across walkways cause trips." },
          { q: "What should you do with a small spill you can clean safely?", options: ["Walk around it", "Clean it, mark the floor if wet, and tell your supervisor", "Cover it with a box", "Wait for the next shift"], answer: 1, why: "Fixing small hazards right away and reporting them prevents injuries." },
          { q: "Which PPE fits a job using a loud leaf blower?", options: ["Hearing protection", "A hard hat only", "A fall harness", "Nothing"], answer: 0, why: "Hearing protection guards against loud noise." },
          { q: "Why is PPE called the last line of defense?", options: ["It is the most expensive", "It is optional", "It always stops every injury", "It is better to remove the hazard first"], answer: 3, why: "Removing or guarding a hazard protects everyone; PPE protects only the wearer." },
          { q: "Which is a safe lifting habit?", options: ["Twist your back to turn", "Hold the load far from your body", "Bend your knees, keep the load close, and turn with your feet", "Lift heavy loads alone to save time"], answer: 2, why: "This keeps the strain on your legs, not your back." }
        ]
      }
    },
    {
      name: "Chapter 2: Chemicals, injuries and your rights",
      lessons: [
        {
          title: "Chemicals and safety data sheets",
          minutes: 5,
          goal: "Find the hazards, PPE and first aid for a chemical on its safety data sheet.",
          text: [
            "Many workplaces use hazardous chemicals: cleaners, bleach, degreasers, paint, fuel, pesticides. OSHA's Hazard Communication Standard says workers have the right to know about the chemicals they work with.",
            "Containers must have labels showing the product name, pictograms (red-bordered symbols), a signal word (\"Danger\" for more serious hazards, \"Warning\" for less serious ones), and hazard and precaution statements.",
            "Every hazardous chemical has a safety data sheet (SDS) with 16 sections in the same order. Useful ones: Section 2, hazards; Section 4, first aid; Section 7, safe handling and storage; Section 8, exposure controls and PPE. Your employer must keep SDSs for the chemicals you use and train you on them. Ask where they are kept.",
            "Safe habits: never mix chemicals (bleach and ammonia make a toxic gas), keep chemicals in labeled containers, use the PPE in Section 8, and work with good air flow."
          ],
          steps: ["Read the container label: name, pictograms, signal word.", "Find the SDS for the product.", "Section 2: what are the hazards?", "Section 8: what PPE do I need?", "Section 4: what is the first aid?", "Never mix chemicals, and keep them labeled."],
          words: [["Safety data sheet (SDS)", "a 16-section document about a chemical: its hazards, safe handling, PPE and first aid."], ["Pictogram", "a symbol in a red diamond on a chemical label that shows the type of hazard."], ["Signal word", "\"Danger\" (more serious) or \"Warning\" (less serious) on a chemical label."]],
          slides: [
            { title: "Your right to know", bullets: ["Labels on every container", "A safety data sheet for every hazardous chemical", "Training on the chemicals you use"] },
            { title: "Read the label", bullets: ["Product name", "Pictograms in red diamonds", "Signal word: Danger or Warning"] },
            { title: "SDS sections to know", bullets: ["2: hazards", "4: first aid", "7: handling and storage", "8: exposure controls and PPE"] },
            { title: "Safe habits", bullets: ["Never mix chemicals", "Keep everything labeled", "Use the PPE in Section 8"] }
          ],
          sources: [
            { name: "OSHA: Hazard Communication", url: "https://www.osha.gov/hazcom" }
          ],
          tryIt: "Find a cleaning product at home or work. Read its label (pictograms and signal word). Then search the product name plus \"safety data sheet\" on the maker's website, and write down what Sections 2, 4 and 8 say.",
          youCanNow: "read a chemical label and find the hazards, PPE and first aid on its safety data sheet."
        },
        {
          title: "Reporting injuries and hazards",
          minutes: 5,
          goal: "Take the right steps when someone is hurt and report it correctly.",
          text: [
            "If someone is badly hurt, call 911 (or your site's emergency number) first. Do not move them unless they are in danger. Get the trained first-aider if your site has one.",
            "Report every work injury or illness to your supervisor right away, even small ones like a cut or a strain. Early reports get you care, protect your right to workers' compensation in your state, and help fix the hazard so it does not hurt someone else. Write down what happened, when, where and who saw it.",
            "Employers have duties too. They must report to OSHA within 8 hours if a worker dies from a work incident, and within 24 hours if a worker is admitted to a hospital as an in-patient, has an amputation or loses an eye. Many employers must also keep injury records, and workers have the right to see them.",
            "Report hazards the same way: tell your supervisor, write it down, and keep people away until it is fixed. OSHA rules make it illegal for an employer to punish you for reporting an injury or a hazard."
          ],
          steps: ["Serious injury: call 911 or the site emergency number first.", "Get first aid from a trained person.", "Tell your supervisor right away, even for small injuries.", "Write down what, when, where and who saw it.", "Ask about workers' compensation and follow up on the fix."],
          words: [["Workers' compensation", "state insurance that pays medical costs and some lost wages for work injuries."], ["Injury log", "the employer's record of work injuries and illnesses; workers have the right to see it."]],
          slides: [
            { title: "Serious injury", bullets: ["Call 911 or the site emergency number", "Do not move them unless in danger", "Get the trained first-aider"] },
            { title: "Report every injury", bullets: ["Tell your supervisor right away", "Write what, when, where, who saw it", "Protects your workers' compensation claim"] },
            { title: "Employer duties", bullets: ["Death: report to OSHA within 8 hours", "Hospital admission, amputation, eye loss: 24 hours", "Keep injury records workers can see"] },
            { title: "Reporting is protected", bullets: ["Punishing you for reporting is illegal"] }
          ],
          sources: [
            { name: "OSHA: Report a fatality or severe injury", url: "https://www.osha.gov/report" },
            { name: "OSHA: 29 CFR 1904.39 reporting rule", url: "https://www.osha.gov/laws-regs/regulations/standardnumber/1904/1904.39" }
          ],
          tryIt: "Write the steps you would take if a coworker cut their hand badly on a box cutter. Then write a short injury report: what happened, when, where, who saw it, and what should change.",
          youCanNow: "respond to an injury, report it correctly and on time, and know what your employer must report."
        },
        {
          title: "Your safety rights, OSHA 10 and OSHA 30",
          minutes: 5,
          goal: "Explain your right to a safe job, how to file an OSHA complaint, and what OSHA 10 and 30 are.",
          text: [
            "Under the Occupational Safety and Health Act, your employer must provide a workplace free from serious known hazards. You have the right to training in a language you understand, to required safety gear, to see injury records and test results about hazards, to report hazards, and to ask OSHA to inspect your workplace.",
            "If a hazard is not fixed, you can file a complaint with OSHA online, by phone at 1-800-321-OSHA (6742), by mail or at an OSHA office, and ask that your name not be shared with your employer. If your employer punishes you for raising a safety concern, file a whistleblower complaint with OSHA as soon as possible; under federal law the deadline is 30 days.",
            "OSHA 10 and OSHA 30 are courses in OSHA's voluntary Outreach Training Program. OSHA 10 is a 10-hour course for entry-level workers on hazard awareness and worker rights. OSHA 30 is a 30-hour course for supervisors and workers with safety responsibilities. There are versions for construction and for general industry. You get a course completion card.",
            "The cards are not a license or certification, but many employers, unions and some states ask for them. Only OSHA-authorized trainers can issue real cards, so take the course from an authorized trainer or provider and be wary of offers that seem too cheap or too fast."
          ],
          steps: ["Report a hazard to your supervisor first, if safe.", "If not fixed, file an OSHA complaint online or at 1-800-321-6742.", "Ask that your name be kept private if you want.", "If punished for reporting, file a whistleblower complaint within 30 days.", "Choose OSHA 10 (entry level) or OSHA 30 (supervisor), construction or general industry, from an authorized trainer."],
          words: [["OSHA", "the Occupational Safety and Health Administration, the federal agency for workplace safety."], ["Outreach Training Program", "OSHA's voluntary program of 10-hour and 30-hour safety courses taught by authorized trainers."], ["Whistleblower", "a worker who reports a problem; the law protects them from being punished for it."]],
          slides: [
            { title: "Your right to a safe job", bullets: ["Workplace free from serious known hazards", "Training in a language you understand", "See injury records; ask for an inspection"] },
            { title: "Filing a complaint", bullets: ["osha.gov or 1-800-321-6742", "You can ask to keep your name private", "Punished? Whistleblower complaint within 30 days"] },
            { title: "OSHA 10 and OSHA 30", bullets: ["10-hour: entry-level workers", "30-hour: supervisors and safety roles", "Construction or general industry versions"] },
            { title: "About the cards", bullets: ["Voluntary; not a license or certification", "Many employers and unions ask for them", "Only authorized trainers issue real cards"] }
          ],
          sources: [
            { name: "OSHA: Workers' rights", url: "https://www.osha.gov/workers" },
            { name: "OSHA: File a safety and health complaint", url: "https://www.osha.gov/workers/file-complaint" },
            { name: "OSHA: Outreach Training Program", url: "https://www.osha.gov/training/outreach" },
            { name: "OSHA: The facts about obtaining an OSHA card", url: "https://www.osha.gov/training/oshacardfacts" }
          ],
          tryIt: "Final task: do a 10-minute hazard walk and write your hazard report: five hazards, their type, the PPE or fix, who you would report each to, the SDS sections for one chemical, and your injury steps. At the bottom, write whether OSHA 10 or OSHA 30 fits your job and why.",
          youCanNow: "explain your right to a safe job, file an OSHA complaint, and choose between OSHA 10 and OSHA 30."
        }
      ],
      check: {
        title: "Knowledge Check 2: Chemicals, injuries and your rights",
        questions: [
          { q: "Which section of a safety data sheet tells you the PPE to wear?", options: ["Section 1", "Section 4", "Section 16", "Section 8"], answer: 3, why: "Section 8 covers exposure controls and personal protection." },
          { q: "On a chemical label, which signal word means the more serious hazard?", options: ["Danger", "Warning", "Caution", "Notice"], answer: 0, why: "\"Danger\" is used for more serious hazards; \"Warning\" for less serious ones." },
          { q: "You get a small cut at work. What should you do?", options: ["Hide it", "Wait until it gets worse", "Tell your supervisor right away and write down what happened", "Quit"], answer: 2, why: "Report every injury early, even small ones." },
          { q: "Within how long must an employer report a work-related death to OSHA?", options: ["30 days", "8 hours", "One week", "It does not have to"], answer: 1, why: "OSHA's rule is 8 hours for a fatality." },
          { q: "What is OSHA 10?", options: ["A required electrician license", "A fine", "A 10-hour voluntary safety course for entry-level workers", "A chemical label"], answer: 2, why: "It is an Outreach Training course with a completion card, not a license." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Workplace Safety Basics (OSHA)",
    questions: [
      { q: "What is a hazard?", options: ["Anything at work that could cause injury or illness", "A safety poster", "A type of PPE", "A break room"], answer: 0, why: "A hazard is a source of possible harm." },
      { q: "During a hazard walk, \"look up\" means checking:", options: ["The floor for spills", "Your phone", "High shelves, overhead loads and ladders", "The time"], answer: 2, why: "Things overhead can fall or cause falls." },
      { q: "A machine's guard has been removed. You should:", options: ["Use it carefully", "Do not use it, keep people away and report it", "Put your hand in to check it", "Ignore it"], answer: 1, why: "Missing guards cause serious injuries; report and stay clear." },
      { q: "Which gloves should you wear with a cleaning chemical?", options: ["Any gloves", "No gloves", "Cut-resistant gloves", "The type the safety data sheet names"], answer: 3, why: "The SDS lists the right protection for that chemical." },
      { q: "Before you use a respirator, you need:", options: ["Nothing", "A fit test and training", "Only a quick look", "A coworker's mask"], answer: 1, why: "A respirator must seal properly and be used correctly." },
      { q: "Who generally must provide required PPE?", options: ["The employer", "The worker", "A coworker", "Nobody"], answer: 0, why: "Under OSHA rules employers generally must provide required PPE." },
      { q: "Which is a good way to prevent slips?", options: ["Leave spills for later", "Wear smooth-soled shoes", "Turn off the lights", "Clean spills right away and use a wet floor sign"], answer: 3, why: "Fast clean-up and warnings prevent falls." },
      { q: "On a ladder, \"three points of contact\" means:", options: ["Three people hold the ladder", "Three ladders together", "Two hands and a foot, or two feet and a hand, on the ladder", "Standing on the top three steps"], answer: 2, why: "It keeps you stable as you climb." },
      { q: "In construction, OSHA's general height for fall protection is:", options: ["6 feet", "1 foot", "20 feet", "There is no rule"], answer: 0, why: "Construction's general trigger is 6 feet; general industry's is 4 feet." },
      { q: "A box is heavy and awkward. What do you do?", options: ["Lift it fast", "Twist as you lift", "Get help or use a cart or dolly", "Carry it far from your body"], answer: 2, why: "Help or equipment prevents back injuries." },
      { q: "What does SDS stand for?", options: ["Standard delivery slip", "Staff duty schedule", "Shift duty sign", "Safety data sheet"], answer: 3, why: "A safety data sheet describes a chemical's hazards and safe use." },
      { q: "Which SDS section gives first aid?", options: ["Section 2", "Section 4", "Section 16", "Section 8"], answer: 1, why: "Section 4 lists first-aid measures." },
      { q: "Why should you never mix bleach and ammonia?", options: ["They cost more", "They lose their smell", "They stain floors", "They make a toxic gas"], answer: 3, why: "Mixing them releases a dangerous gas." },
      { q: "A coworker is badly hurt. What is the first step?", options: ["Call 911 or the site emergency number", "Finish your task", "Post a photo", "Move them right away"], answer: 0, why: "Emergency help comes first; do not move them unless they are in danger." },
      { q: "Why report even a small injury?", options: ["To get a day off", "It is not needed", "To get care, protect your workers' compensation rights, and fix the hazard", "To blame someone"], answer: 2, why: "Early reports protect you and others." },
      { q: "A worker loses an eye in a work accident. The employer must report to OSHA within:", options: ["8 hours", "24 hours", "One year", "30 days"], answer: 1, why: "Hospital admission, amputation and loss of an eye must be reported within 24 hours." },
      { q: "Which phone number reaches OSHA?", options: ["1-800-321-6742", "1-800-669-4000", "911", "411"], answer: 0, why: "1-800-321-OSHA (6742) is OSHA's number; 1-800-669-4000 is the EEOC." },
      { q: "You were cut from the schedule for reporting a hazard. Under federal law, file a whistleblower complaint within:", options: ["One year", "There is no deadline", "Five years", "30 days"], answer: 3, why: "The federal deadline for safety retaliation complaints is 30 days." },
      { q: "Who is OSHA 30 mainly for?", options: ["Only truck drivers", "Supervisors and workers with safety responsibilities", "Children", "People who want an electrician license"], answer: 1, why: "OSHA 30 gives deeper training for supervisors and safety roles." },
      { q: "Which is true about OSHA 10 and 30 cards?", options: ["They are a license", "Anyone can print one", "They are voluntary training cards that only authorized trainers can issue", "They never expire anywhere"], answer: 2, why: "They are not certifications, and only authorized trainers issue real cards." }
    ]
  }
};
