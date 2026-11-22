"use strict";

// Koach Learn course: Workforce Development (also Youth, Seniors and Technology, Undeserved Community, Non Profits) -> "First Aid and CPR Awareness" (wave 3, 30 October 2026).
// An AWARENESS course: it teaches what to notice, who to call and the steps, at a general level that follows American Red Cross / American Heart Association guidance.
// It does NOT certify anyone. Hands-on CPR, AED and first-aid skills are learned and certified in person with a qualified instructor. No medicine doses anywhere.

const MEDLINE_CPR = { name: "MedlinePlus (US National Library of Medicine): CPR - adult and child after onset of puberty", url: "https://medlineplus.gov/ency/article/000013.htm" };
const MEDLINE_CHOKING = { name: "MedlinePlus: Choking - adult or child over 1 year", url: "https://medlineplus.gov/ency/article/000049.htm" };
const MEDLINE_BLEEDING = { name: "MedlinePlus: Bleeding", url: "https://medlineplus.gov/ency/article/000045.htm" };
const MEDLINE_HEART = { name: "MedlinePlus: Heart attack first aid", url: "https://medlineplus.gov/ency/article/000063.htm" };
const CDC_STROKE = { name: "CDC: Signs and Symptoms of Stroke", url: "https://www.cdc.gov/stroke/signs-symptoms/index.html" };
const AHA_CPR = { name: "American Heart Association: CPR and First Aid courses", url: "https://cpr.heart.org/" };
const REDCROSS = { name: "American Red Cross: First Aid, CPR and AED classes", url: "https://www.redcross.org/take-a-class" };
const OSHA_FIRSTAID = { name: "OSHA: Medical and First Aid", url: "https://www.osha.gov/medical-first-aid" };

module.exports = {
  id: "first-aid-cpr-awareness",
  category: "Workforce Development",
  name: "First Aid and CPR Awareness",
  skills: "Checking the scene and calling 911, Hands-Only CPR steps, Using an AED, Helping a choking person, Stopping severe bleeding, Spotting heart attack and stroke",
  outcome: "act calmly in the first minutes of an emergency: check that it is safe, call 911 (or your local emergency number), follow the steps of Hands-Only CPR and an AED, help with choking and severe bleeding, spot a heart attack or stroke, and sign up for an in-person CPR and first aid class that gives a real certificate.",
  about: [
    "This course is for anyone who wants to be ready to help: young people looking for a first job, parents and grandparents, workers in child care, food service, retail, security and the trades, and volunteers at nonprofits and churches. Many of these jobs ask for a CPR and first aid certificate.",
    "You will learn the order to act in an emergency, the steps of Hands-Only CPR, how an AED talks you through a shock, and what to do for choking, severe bleeding, a heart attack and a stroke. The steps follow general guidance from the American Red Cross, the American Heart Association and the US National Library of Medicine.",
    "This is an awareness course. It PREPARES you; it does not give you a CPR or first aid certificate. Real hands-on skills, like pushing on a chest at the right depth, are learned and tested in person with a qualified instructor, using a practice manikin. The last lesson shows you how to find that class.",
    "Each lesson takes about five minutes. Read it, look at the slides, then do the \"Try it now\" task with paper or a pillow. There is a quick check after each lesson, a knowledge check after each chapter and a 20-question quiz at the end."
  ],
  finalTask: "Make your own First Aid and CPR Readiness Plan on one page: (1) your emergency number and how to say your address clearly; (2) where the nearest AED and first aid kit are at home, work, school or your place of worship; (3) the emergency steps, written from memory in the right order (check, call, CPR and AED, choking, bleeding, B.E. F.A.S.T.); and (4) an in-person CPR, AED and first aid class you choose from the American Red Cross or the American Heart Association, with its name, who gives the certificate, where it is, and the date you will take it.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Mixed learners: teens and young adults looking for a first job, adults in or entering jobs that ask for CPR and first aid (child care, food service, retail, security, trades, home care), seniors who look after a partner or grandchildren, and nonprofit and church volunteers. Some are second-language speakers.",
    startingPoint: "Most know to call 911 but freeze or are unsure what to do next. Many have seen CPR on TV but never practiced it. Few know where the nearest AED is or how one works. Some think they could get in trouble for helping.",
    gap: "In a cardiac arrest, choking or severe bleeding, the first few minutes before help arrives matter most. Learners need a clear order of steps, the confidence to start, and a plan to get certified in person, because many jobs require a current certificate from a recognized provider.",
    constraints: [
      "Reading level: plain words and short sentences (about grade 6)",
      "Devices: a phone or a library computer; practice uses paper, a pillow or a rolled towel",
      "Time: 4 to 6 minute lessons",
      "Safety: awareness only; no practice on a real person; hands-on skills and certification happen in person with a qualified instructor",
      "No medicine doses or clinical advice; follow the 911 dispatcher and emergency crews",
      "Emergency numbers differ by country: 911 in the US; learners abroad use their local number"
    ],
    prerequisites: "None. Learners who want more on reading health information can also take \"Health Literacy\"."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Given an emergency scene described in words", action: "check the scene for danger, check whether the person responds, and call 911 or the local emergency number", standard: "in the right order, saying the address and what happened in one clear sentence" },
    { id: "O2", condition: "Given an adult who collapses and is not breathing normally", action: "list the steps of Hands-Only CPR and of using an AED", standard: "in the right order, with hand position, a rate of 100 to 120 a minute and a depth of about 2 inches" },
    { id: "O3", condition: "Given a description of an adult who may be choking", action: "identify the signs of choking and describe the first aid", standard: "telling apart a person who can cough and talk from one who cannot" },
    { id: "O4", condition: "Given a wound that is bleeding heavily", action: "describe how to control the bleeding with firm, direct pressure", standard: "naming gloves or a barrier, pressure that does not stop, and adding layers instead of lifting the cloth" },
    { id: "O5", condition: "Given a list of symptoms", action: "recognize the warning signs of a heart attack and of a stroke using B.E. F.A.S.T.", standard: "getting at least 4 of 5 right and calling 911 instead of driving the person" },
    { id: "O6", condition: "Using the American Red Cross or American Heart Association class finder", action: "choose an in-person CPR, AED and first aid class and write a training plan with a date", standard: "naming the course, who grants the certificate and whether your job needs it" }
  ],
  chapters: [
    {
      name: "Chapter 1: Act fast and keep a heart going",
      lessons: [
        {
          title: "Check, call, care: the first minute",
          objectives: ["O1"],
          minutes: 5,
          goal: "Check the scene and the person, then call 911 with a clear message.",
          text: [
            "In any emergency, start with three words: check, call, care. First CHECK that the scene is safe for you: traffic, fire, smoke, electricity, an angry person or deep water. If it is not safe, stay back and call. You cannot help anyone if you get hurt too.",
            "Then check the person. Tap their shoulder and shout, \"Are you okay?\" Look at their chest for normal breathing. Gasping now and then is NOT normal breathing.",
            "Next CALL 911 (or your local emergency number outside the US). If someone is with you, point at them and say, \"You, call 911 and bring an AED.\" Put the phone on speaker. Say the address first, then what happened, and do not hang up until the dispatcher tells you to. The dispatcher can coach you through CPR.",
            "Then CARE: give the help you can until trained help arrives. Use gloves or a barrier if you have them. Many US states have Good Samaritan laws that protect people who help in good faith; the details differ by state."
          ],
          steps: ["Check the scene: is it safe for me?", "Check the person: tap, shout \"Are you okay?\", look for normal breathing.", "Call 911 (or your local number), or point at one person to call and another to bring an AED.", "Phone on speaker: address first, then what happened. Stay on the line.", "Care: help until trained help arrives."],
          words: [["Dispatcher", "the trained person who answers 911 calls, sends help and can tell you what to do."], ["Unresponsive", "a person who does not move, open their eyes or answer when you tap and shout."], ["Good Samaritan law", "a state law that protects people who help in an emergency in good faith; the details differ by state."]],
          slides: [
            { title: "Check, call, care", bullets: ["Check: is the scene safe? Does the person respond?", "Call: 911 or your local emergency number", "Care: help until trained help arrives"] },
            { title: "Check the person", bullets: ["Tap the shoulder and shout \"Are you okay?\"", "Look at the chest for normal breathing", "Gasping is NOT normal breathing"] },
            { title: "Call clearly", bullets: ["Point at one person: \"You, call 911\"", "Ask another to bring an AED", "Address first, then what happened", "Stay on the line; the dispatcher helps you"] }
          ],
          sources: [MEDLINE_CPR, REDCROSS],
          tryIt: "Write the one sentence you would say to 911 from your home: your full address with the nearest cross street, then \"a man collapsed and is not breathing\". Read it out loud twice until you can say it without looking.",
          youCanNow: "check the scene and the person, and call 911 with a clear message.",
          quickCheck: [
            { objective: "O1", q: "You see a man lying in the road and cars are passing. What do you do first?", options: ["Run to him right away", "Make sure the scene is safe for you, then call 911", "Start CPR in the road", "Take a video of him"], answer: 1, why: "Checking that the scene is safe comes first; if it is not safe, stay back and call." },
            { objective: "O1", q: "On the call to 911, what do you say first?", options: ["Your life story", "The person's medical history", "The address or location", "Your phone model"], answer: 2, why: "The address comes first so help can be sent even if the call drops." }
          ]
        },
        {
          title: "Hands-Only CPR: push hard and fast",
          objectives: ["O2"],
          minutes: 6,
          goal: "List the steps of Hands-Only CPR in the right order.",
          text: [
            "When an adult suddenly collapses, is unresponsive and is not breathing normally, the heart may have stopped. This is called cardiac arrest. CPR pushes blood to the brain until an AED and emergency crews arrive.",
            "The American Heart Association teaches Hands-Only CPR for anyone not trained or not confident giving breaths: call 911, then push hard and fast in the center of the chest. You do not need to check for a pulse unless you are a health professional.",
            "Kneel beside the person on a firm, flat surface. Put the heel of one hand in the center of the chest, the other hand on top, arms straight, shoulders over your hands. Press down about 2 inches (5 centimeters), at 100 to 120 pushes a minute, and let the chest come all the way back up each time.",
            "Keep going until an AED is ready, trained help takes over, or the person starts to breathe normally. CPR is tiring: if someone else knows how, switch about every two minutes with little pause. A class lets you practice the depth on a manikin; never practice on a real person."
          ],
          steps: ["Unresponsive and not breathing normally: call 911 and send for an AED.", "Lay the person on their back on a firm, flat surface.", "Heel of one hand in the center of the chest, other hand on top.", "Arms straight, shoulders over hands.", "Push about 2 inches deep, 100 to 120 times a minute; let the chest rise all the way.", "Do not stop until an AED, trained help, or normal breathing."],
          words: [["CPR", "cardiopulmonary resuscitation: chest compressions (and sometimes rescue breaths) that keep blood moving when the heart stops."], ["Cardiac arrest", "when the heart suddenly stops pumping; the person collapses and does not breathe normally."], ["Compression", "one push down on the chest."], ["Manikin", "a practice body used in CPR classes."]],
          slides: [
            { title: "When to start CPR", bullets: ["Adult collapses and does not respond", "Not breathing normally, or only gasping", "Call 911 and send for an AED first"] },
            { title: "Hands in the right place", bullets: ["Heel of one hand in the center of the chest", "Other hand on top", "Arms straight, shoulders over hands"] },
            { title: "Hard and fast", bullets: ["About 2 inches (5 cm) deep", "100 to 120 pushes a minute", "Let the chest come all the way back up"] },
            { title: "Keep going", bullets: ["Until an AED is ready or help takes over", "Switch with a helper about every 2 minutes", "Practice depth on a manikin in a class"] }
          ],
          sources: [MEDLINE_CPR, AHA_CPR],
          tryIt: "Kneel by a firm pillow or a rolled towel on the floor (never a person). Place your hands as shown, arms straight. Set a phone timer for 30 seconds and count your pushes out loud. Aim for 50 to 60 pushes in 30 seconds, which matches 100 to 120 a minute.",
          youCanNow: "list the steps of Hands-Only CPR and keep the right rate.",
          quickCheck: [
            { objective: "O2", q: "Where do your hands go for adult CPR?", options: ["On the stomach", "On the left shoulder", "On the neck", "In the center of the chest"], answer: 3, why: "The heel of one hand goes in the center of the chest with the other hand on top." },
            { objective: "O2", q: "How fast do you push in CPR?", options: ["100 to 120 times a minute", "About 20 times a minute", "Once every 10 seconds", "As slowly as you can"], answer: 0, why: "Guidance is 100 to 120 compressions a minute, letting the chest rise each time." }
          ]
        },
        {
          title: "Using an AED, and what a full CPR class adds",
          objectives: ["O2"],
          minutes: 5,
          goal: "List the steps of using an AED with CPR.",
          text: [
            "An AED (automated external defibrillator) is a small box that can shock a heart back into a normal rhythm. You find them in schools, gyms, airports, offices, malls and places of worship, often in a wall case with a heart and lightning sign.",
            "AEDs are made for people with no training. Turn it on and it talks to you. Bare the chest, wipe it dry, put the pads where the pictures show, and plug in the cable if needed. Everyone stands clear while it checks the heart. If it says to shock, make sure no one is touching the person and press the button. Then go straight back to CPR, as the AED tells you.",
            "Use the AED as soon as it arrives, and follow its voice exactly. Do not stop CPR to go and look for one yourself if someone else can bring it.",
            "In a full CPR class you also learn rescue breaths: 30 compressions, then 2 breaths, repeated. You also learn CPR for children and babies, which is different. Practice those steps in class with an instructor."
          ],
          steps: ["Keep CPR going while someone brings the AED.", "Turn the AED on and listen.", "Bare and dry the chest; put the pads where the pictures show.", "Stand clear while it checks; no one touches the person.", "If it says shock: everyone clear, press the button.", "Go straight back to CPR as it tells you."],
          words: [["AED", "automated external defibrillator: a box that checks the heart and, if needed, gives a shock to reset its rhythm. It talks you through each step."], ["Pads", "sticky patches with wires that go on the bare chest so the AED can check the heart and shock it."], ["Rescue breaths", "breaths you give into the person's mouth during CPR; learned in a full class."]],
          slides: [
            { title: "What an AED does", bullets: ["Checks the heart rhythm", "Gives a shock only if it is needed", "Talks you through every step"] },
            { title: "AED steps", bullets: ["Turn it on and listen", "Bare, dry chest; pads where the pictures show", "Stand clear while it checks"] },
            { title: "If it says shock", bullets: ["Make sure no one touches the person", "Press the shock button", "Go straight back to CPR"] },
            { title: "A full class adds", bullets: ["Rescue breaths: 30 pushes, then 2 breaths", "CPR for children and babies", "Hands-on practice with an instructor"] }
          ],
          sources: [MEDLINE_CPR, AHA_CPR, REDCROSS],
          tryIt: "Find out where the nearest AED is at your work, school, gym or place of worship. Ask a manager or look for the sign. Write down exactly where it is, and draw the two pad places on a stick figure from memory.",
          youCanNow: "list the steps of using an AED with CPR and say where the nearest one is.",
          quickCheck: [
            { objective: "O2", q: "The AED says a shock is advised. What do you do before you press the button?", options: ["Hold the person's hand", "Take the pads off", "Make sure no one is touching the person", "Give the person water"], answer: 2, why: "Everyone must be clear so the shock goes only to the person." },
            { objective: "O2", q: "The AED has given a shock. What next?", options: ["Wait quietly for the ambulance", "Go back to CPR as the AED tells you", "Turn the AED off", "Sit the person up"], answer: 1, why: "After a shock you go straight back to CPR, following the AED's voice." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Act fast and keep a heart going",
        questions: [
          { objective: "O1", q: "What are the three first words for any emergency?", options: ["Wait, watch, walk", "Check, call, care", "Run, hide, tell", "Ask, film, post"], answer: 1, why: "Check the scene and person, call 911, then care until help arrives." },
          { objective: "O1", q: "Three people are watching a woman who collapsed. How do you get help fastest?", options: ["Point at one person: \"You, call 911,\" and ask another to bring an AED", "Shout \"Someone call!\" to the crowd", "Wait for someone else to do it", "Post on social media"], answer: 0, why: "Giving one person a clear job stops everyone from thinking someone else called." },
          { objective: "O2", q: "How deep do you push on an adult's chest in CPR?", options: ["Barely touching", "About half an inch", "As deep as you possibly can", "About 2 inches (5 cm)"], answer: 3, why: "Adult compressions are about 2 inches deep, letting the chest come back up." },
          { objective: "O2", q: "When should you start Hands-Only CPR on an adult?", options: ["When they are talking but tired", "When they are unresponsive and not breathing normally", "When they have a small cut", "When they are coughing hard"], answer: 1, why: "CPR is for someone who does not respond and is not breathing normally, or only gasping." },
          { objective: "O2", q: "Who can use an AED?", options: ["Anyone; it talks you through the steps", "Only doctors", "Only firefighters", "Only people over 30"], answer: 0, why: "AEDs are built for people with no training and give spoken instructions." }
        ]
      }
    },
    {
      name: "Chapter 2: Common emergencies and getting certified",
      lessons: [
        {
          title: "Choking and severe bleeding",
          objectives: ["O3", "O4"],
          minutes: 6,
          goal: "Identify choking, and describe how to stop severe bleeding with direct pressure.",
          text: [
            "Choking: a person may grab their throat, be unable to talk, cough weakly, make a high-pitched sound or turn bluish. Ask, \"Are you choking? Can you speak?\" If they can cough hard and talk, do not hit them; tell them to keep coughing.",
            "If they cannot speak, cough or breathe, have someone call 911. US guidance shows two ways to push the object out: firm blows between the shoulder blades with the heel of your hand (back blows), and quick inward-and-upward pushes just above the belly button (abdominal thrusts). Pregnant or very large people get chest thrusts instead. If the person passes out, call 911, lower them to the floor and start CPR. Learn and practice these moves in class; do not practice thrusts on a real person.",
            "Severe bleeding: call 911. Put on gloves if you have them, or use a plastic bag as a barrier. Press hard, right on the wound, with a clean cloth, gauze or even a piece of clothing, and keep pressing. Do not lift it to look. If blood soaks through, add more cloth on top and keep pressing.",
            "Do not pull out an object stuck in a wound; pad around it. A tourniquet is for life-threatening bleeding on an arm or leg when pressure is not enough; Stop the Bleed and first aid classes teach how to use one."
          ],
          steps: ["Choking: ask \"Are you choking? Can you speak?\"", "Can cough and talk: let them keep coughing.", "Cannot speak or breathe: call 911 and give the first aid you learned in class (back blows and abdominal thrusts).", "Passes out: lower to the floor, start CPR.", "Bleeding: call 911, gloves or a barrier, press hard on the wound with a clean cloth.", "Soaks through: add layers on top; do not lift the first cloth."],
          words: [["Abdominal thrusts", "quick inward and upward pushes just above the belly button to force out a blockage; sometimes called the Heimlich maneuver."], ["Back blows", "firm blows between the shoulder blades with the heel of the hand to loosen a blockage."], ["Direct pressure", "pressing firmly right on a wound to slow and stop bleeding."], ["Tourniquet", "a tight band put on an arm or leg above a wound to stop life-threatening bleeding; taught in class."]],
          slides: [
            { title: "Signs of choking", bullets: ["Grabs the throat, cannot talk", "Weak cough or high-pitched sound", "Turning bluish"] },
            { title: "Choking: what to do", bullets: ["Can cough and talk: let them cough", "Cannot speak: call 911, back blows and thrusts", "Passes out: lower to the floor, start CPR"] },
            { title: "Severe bleeding", bullets: ["Call 911; gloves or a barrier", "Press hard, right on the wound", "Soaks through: add layers, keep pressing"] },
            { title: "Do not", bullets: ["Do not lift the cloth to look", "Do not pull out a stuck object", "Do not practice thrusts on a real person"] }
          ],
          sources: [MEDLINE_CHOKING, MEDLINE_BLEEDING, REDCROSS],
          tryIt: "Put a folded towel on your own forearm. Press down hard with the flat of your hand for 60 seconds by the clock without lifting. Then add a second towel on top and keep pressing. Write two lines: how hard it was to keep pressure, and the three choking signs from this lesson.",
          youCanNow: "spot the signs of choking and stop severe bleeding with firm, direct pressure.",
          quickCheck: [
            { objective: "O3", q: "A woman at lunch is coughing hard and can still talk. What do you do?", options: ["Hit her back hard right away", "Give her abdominal thrusts", "Encourage her to keep coughing and stay with her", "Lay her on the floor"], answer: 2, why: "If a person can cough hard and talk, let them keep coughing; do not hit them." },
            { objective: "O4", q: "Blood soaks through the cloth you are pressing on a wound. What do you do?", options: ["Lift the cloth to look", "Stop pressing", "Wash the wound with water", "Put more cloth on top and keep pressing"], answer: 3, why: "Adding layers keeps pressure on; lifting the cloth can start the bleeding again." }
          ]
        },
        {
          title: "Spotting a heart attack and a stroke",
          objectives: ["O5"],
          minutes: 5,
          goal: "Recognize the warning signs of a heart attack and a stroke.",
          text: [
            "A heart attack is when blood flow to part of the heart is blocked. Common signs: chest pain or pressure that may spread to the jaw, arm, back or stomach, shortness of breath, cold sweat, feeling sick or dizzy, and unusual tiredness. Women, older adults and people with diabetes may have milder or different signs.",
            "If you think it is a heart attack, call 911 right away. Do not wait to see if it passes, and do not let the person talk you out of it. Have them sit and rest, loosen tight clothes, and stay with them. Give no medicine unless it is their own prescribed medicine or the 911 dispatcher tells you to. If they become unresponsive and stop breathing normally, start CPR and use an AED.",
            "A stroke is when blood flow to part of the brain is blocked or a blood vessel bursts. The CDC teaches B.E. F.A.S.T.: Balance (sudden dizziness or loss of balance), Eyes (sudden trouble seeing), Face (ask them to smile; does one side droop?), Arms (ask them to raise both arms; does one drift down?), Speech (is it slurred or strange?), Time (call 911 right away).",
            "Note the time the signs started and tell the crew. Call an ambulance; do not drive the person to the hospital yourself."
          ],
          steps: ["Heart attack signs: chest pain or pressure, short of breath, cold sweat, sick, dizzy.", "Call 911 right away; sit them down, loosen clothes, stay with them.", "No medicine unless it is theirs or the dispatcher says so.", "Stroke: check B.E. F.A.S.T.", "Note the time the signs started; call an ambulance, do not drive them."],
          words: [["Heart attack", "when blood flow to part of the heart is blocked; the person is usually awake and has chest pain or pressure."], ["Stroke", "when blood flow to part of the brain is blocked or a blood vessel in the brain bursts."], ["B.E. F.A.S.T.", "Balance, Eyes, Face, Arms, Speech, Time: a way to spot a stroke and remember to call 911."]],
          slides: [
            { title: "Heart attack signs", bullets: ["Chest pain or pressure; may spread to jaw, arm, back", "Short of breath, cold sweat, feeling sick", "Women and older adults may have milder signs"] },
            { title: "Heart attack: what to do", bullets: ["Call 911 now; do not wait", "Sit, rest, loosen clothes, stay with them", "No medicine unless theirs or the dispatcher says"] },
            { title: "Stroke: B.E. F.A.S.T.", bullets: ["Balance and Eyes: sudden dizziness or vision trouble", "Face droops, Arm drifts down, Speech slurred", "Time: call 911 right away"] },
            { title: "Time matters", bullets: ["Note when the signs started", "Call an ambulance; do not drive them"] }
          ],
          sources: [MEDLINE_HEART, CDC_STROKE],
          tryIt: "Write B.E. F.A.S.T. down the side of a page. Next to each letter, write the question or test you would use, from memory. Then teach it to one friend or family member in under one minute.",
          youCanNow: "recognize the warning signs of a heart attack and a stroke and call 911 fast.",
          quickCheck: [
            { objective: "O5", q: "Your uncle's smile droops on one side and his words are slurred. What do you do?", options: ["Call 911 right away and note the time", "Let him lie down and sleep it off", "Drive him to the hospital yourself", "Give him a pain pill"], answer: 0, why: "These are stroke signs; call 911 at once, note the time, and let the ambulance take him." },
            { objective: "O5", q: "Which is a common sign of a heart attack?", options: ["A small cut on the hand", "Chest pain or pressure that spreads to the arm or jaw", "A sneeze", "An itchy rash on the leg"], answer: 1, why: "Chest pain or pressure that may spread is a common heart attack sign." }
          ]
        },
        {
          title: "Getting certified: your readiness plan",
          objectives: ["O6"],
          minutes: 5,
          goal: "Choose an in-person CPR and first aid class and write a training plan with a date.",
          text: [
            "This course gives awareness, not a certificate. Employers who ask for CPR and first aid usually want a card from a recognized provider. In the US the best known are the American Red Cross and the American Heart Association. Both have class finders on their websites.",
            "Pick the right class for your path. Many workplace and community jobs (child care, coaching, security, food service, nonprofits) accept an adult and pediatric First Aid, CPR and AED class. Healthcare jobs (nurse aide, EMT, pharmacy and medical students) usually need Basic Life Support (BLS). Ask your employer or program which one they accept before you pay.",
            "Many classes are blended: part online, then an in-person skills session with an instructor and manikins. A fully online class with no hands-on test may not be accepted. Prices, class length and how long the card lasts differ: check the provider's page and the date on your card, and renew before it runs out.",
            "Ask about free or low-cost classes: some employers, workforce programs, fire departments, hospitals and community groups offer them. OSHA says employers must have first aid people and supplies that fit the hazards of the workplace."
          ],
          steps: ["Ask your employer or program which class they accept (for example First Aid, CPR and AED, or BLS).", "Open the Red Cross or American Heart Association class finder.", "Choose an in-person or blended class near you.", "Write the course name, who grants the card, place, date and cost.", "Put the date in your calendar and set a reminder before the card expires."],
          words: [["Certification card", "proof from the training provider that you passed the skills test; employers ask to see it."], ["BLS", "Basic Life Support: the CPR class for healthcare workers and students."], ["Blended learning", "a class that is part online and part in person, with a hands-on skills test."], ["Pediatric", "for children and babies."]],
          slides: [
            { title: "This course is awareness", bullets: ["It prepares you; it does not certify you", "Certificates come from a recognized provider", "In the US: American Red Cross, American Heart Association"] },
            { title: "Pick the right class", bullets: ["Most jobs: First Aid, CPR and AED (adult and pediatric)", "Healthcare: Basic Life Support (BLS)", "Ask your employer which one they accept"] },
            { title: "Before you sign up", bullets: ["Needs an in-person skills test", "Check price, length and how long the card lasts", "Ask about free or low-cost classes"] }
          ],
          sources: [REDCROSS, AHA_CPR, OSHA_FIRSTAID],
          tryIt: "Final task: make your one-page First Aid and CPR Readiness Plan. Write your emergency number and address sentence, where the nearest AED and first aid kit are, the emergency steps from memory, and an in-person class you found on the Red Cross or AHA site: name, who grants it, place and date.",
          youCanNow: "choose a recognized in-person CPR and first aid class and plan when you will take it.",
          quickCheck: [
            { objective: "O6", q: "You finished this awareness course. What does it give you?", options: ["A CPR card your employer must accept", "A nursing license", "Knowledge to prepare you for an in-person certification class", "Permission to teach CPR"], answer: 2, why: "This course prepares you; the certificate comes from an in-person class with a recognized provider." },
            { objective: "O6", q: "You are starting a nurse aide program. Which CPR class do they most likely want?", options: ["A fully online video with no skills test", "No class at all", "A class from a social media post", "Basic Life Support (BLS), after checking with the program"], answer: 3, why: "Healthcare programs usually require BLS; ask the program to confirm which one they accept." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Common emergencies and getting certified",
        questions: [
          { objective: "O3", q: "A man grabs his throat and cannot speak or cough. What do you do?", options: ["Wait for him to feel better", "Have someone call 911 and give choking first aid", "Give him water to drink", "Ask him to lie down and rest"], answer: 1, why: "A person who cannot speak or cough is badly choked; call 911 and act." },
          { objective: "O4", q: "What is the first thing to do for a deep cut that is bleeding a lot (after calling 911)?", options: ["Press hard, right on the wound, with a clean cloth", "Let it bleed to clean it", "Put ice on it", "Ask the person to walk around"], answer: 0, why: "Firm, direct pressure is the main way to stop severe bleeding." },
          { objective: "O4", q: "A piece of glass is stuck in a wound. What should you do?", options: ["Pull it out fast", "Push it in deeper", "Leave it in and pad around it", "Pour water on it until it comes out"], answer: 2, why: "Pulling it out can make bleeding worse; pad around it and let professionals remove it." },
          { objective: "O5", q: "In B.E. F.A.S.T., what does the A stand for?", options: ["Allergy", "Address", "Ambulance", "Arms: does one arm drift down?"], answer: 3, why: "A is for Arms: ask the person to raise both arms and see if one drifts down." },
          { objective: "O6", q: "Which is the best way to get a CPR certificate a job will accept?", options: ["An in-person or blended class from the Red Cross or AHA", "Watching a video online with no test", "Reading this course twice", "Asking a friend to sign a note"], answer: 0, why: "Employers usually want a card from a recognized provider with a hands-on skills test." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: First Aid and CPR Awareness",
    questions: [
      { objective: "O1", q: "You find a coworker on the floor near a sparking electrical cord. What do you do first?", options: ["Grab the coworker's arm and pull", "Stay back, call 911 and have the power shut off", "Pour water on the cord", "Start CPR right where they are"], answer: 1, why: "The scene is not safe; stay back, call and make it safe before you touch anyone." },
      { objective: "O1", q: "How do you check whether a person responds?", options: ["Tap the shoulder and shout \"Are you okay?\"", "Pour cold water on their face", "Shake their head hard", "Wait five minutes"], answer: 0, why: "Tap and shout is the safe way to check if someone responds." },
      { objective: "O1", q: "You are calling 911. When can you hang up?", options: ["As soon as you give the address", "After one minute", "When the dispatcher tells you to", "When the person opens their eyes"], answer: 2, why: "Stay on the line; the dispatcher may need more details or coach you through CPR." },
      { objective: "O1", q: "Outside the US, which number do you call?", options: ["Always 911, everywhere", "A friend's number", "The hospital's main office", "Your country's local emergency number"], answer: 3, why: "Emergency numbers differ by country; learn your local one." },
      { objective: "O2", q: "An adult collapses, does not respond and is only gasping. What is happening?", options: ["They are probably asleep", "Their heart may have stopped; call 911 and start CPR", "They are choking but fine", "They need a glass of water"], answer: 1, why: "Gasping is not normal breathing; treat it as cardiac arrest." },
      { objective: "O2", q: "What does Hands-Only CPR mean?", options: ["Call 911 and push hard and fast in the center of the chest", "Rub the person's hands", "Only give rescue breaths", "Hold the person's hands until help comes"], answer: 0, why: "Hands-Only CPR is chest compressions without breaths, after calling 911." },
      { objective: "O2", q: "After each push in CPR, what do you let the chest do?", options: ["Stay pressed down", "Shake", "Come all the way back up", "Turn to the side"], answer: 2, why: "Letting the chest rise fully lets the heart fill with blood before the next push." },
      { objective: "O2", q: "Someone brings an AED. What do you do?", options: ["Wait for the ambulance to use it", "Read the full manual first", "Put it under the person's head", "Turn it on and follow its voice"], answer: 3, why: "AEDs talk you through each step; use it as soon as it arrives." },
      { objective: "O3", q: "Which is a sign that an adult is choking?", options: ["They are laughing loudly", "They grab their throat and cannot talk", "They are sneezing", "They ask for a napkin"], answer: 1, why: "Grabbing the throat and being unable to talk are classic choking signs." },
      { objective: "O3", q: "A choking person passes out. What do you do?", options: ["Call 911, lower them to the floor and start CPR", "Keep doing back blows while they lie there", "Leave them to rest", "Give them water"], answer: 0, why: "If a choking person becomes unresponsive, call 911 and start CPR." },
      { objective: "O3", q: "Where should you learn back blows and abdominal thrusts properly?", options: ["By practicing hard on a friend", "From a random video comment", "In a hands-on class with an instructor", "You do not need to learn them"], answer: 2, why: "These moves are practiced safely in class; never practice thrusts on a real person." },
      { objective: "O4", q: "Before you press on someone's bleeding wound, what protects you?", options: ["Gloves, or a plastic bag as a barrier", "Nothing is needed", "Washing your hands for five minutes first", "Closing your eyes"], answer: 0, why: "Gloves or a barrier protect you from blood while you help." },
      { objective: "O4", q: "You are pressing on a wound. How long do you keep pressing?", options: ["Ten seconds", "Until you get tired", "Until you check under the cloth", "Until the bleeding stops or help takes over, without lifting"], answer: 3, why: "Steady pressure without peeking gives the blood time to clot." },
      { objective: "O4", q: "When is a tourniquet used?", options: ["For any small cut", "For life-threatening bleeding on an arm or leg when pressure is not enough", "For a nosebleed", "For a bruise"], answer: 1, why: "A tourniquet is for life-threatening limb bleeding and is taught in class." },
      { objective: "O5", q: "Your grandmother says she has chest pressure and a cold sweat but wants to wait. What do you do?", options: ["Wait an hour to see", "Call 911 now and stay with her", "Drive her yourself after dinner", "Give her any pill in the house"], answer: 1, why: "These are heart attack signs; call 911 now and do not let her talk you out of it." },
      { objective: "O5", q: "In B.E. F.A.S.T., what does T remind you to do?", options: ["Take a photo", "Text a friend", "Tell them to sleep", "Time: call 911 right away and note when signs started"], answer: 3, why: "T is for Time: call 911 at once and note when the signs started." },
      { objective: "O5", q: "Why call an ambulance for a stroke instead of driving the person?", options: ["The crew can start care on the way and tell the hospital", "Ambulances are always free", "Hospitals do not take walk-ins", "It is against the law to drive someone"], answer: 0, why: "Emergency crews start care early and alert the hospital; the CDC says to call 911, not drive." },
      { objective: "O6", q: "Which two US organizations are best known for CPR and first aid certification?", options: ["The DMV and the post office", "The IRS and the SBA", "The American Red Cross and the American Heart Association", "Any social media group"], answer: 2, why: "The Red Cross and the AHA are the best-known CPR and first aid providers in the US." },
      { objective: "O6", q: "Before you pay for a CPR class for a job, what should you ask?", options: ["Which class and provider the employer accepts", "Whether you can skip the skills test", "If a friend can take it for you", "Nothing; all classes are the same"], answer: 0, why: "Jobs differ: some accept First Aid, CPR and AED, healthcare often needs BLS." },
      { objective: "O6", q: "Your CPR card has a date on it. What do you do?", options: ["Ignore it", "Throw the card away", "Laminate it so it never expires", "Set a reminder to renew before it runs out"], answer: 3, why: "Cards expire; renew before the date so you stay certified." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Pre-Test: What Do You Already Know?", from: [0, 2, 4, 6, 8, 11, 15, 17, 18] },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      { name: "Emergency call ready", objective: "O1", notYet: "No emergency number or address sentence, or the address is unclear.", meets: "Has the right emergency number and a clear sentence with the address first, then what happened.", exceeds: "Also adds a cross street or landmark and practices saying it out loud." },
      { name: "AED and kit located", objective: "O2", notYet: "Does not know where an AED or first aid kit is.", meets: "Names where the nearest AED and first aid kit are at home, work, school or place of worship.", exceeds: "Names two places, and checked that the AED case is reachable." },
      { name: "Steps in order", objective: "O2", notYet: "Steps are missing or in the wrong order, or CPR rate and depth are wrong.", meets: "Writes check, call, CPR and AED in order, with center-of-chest hands, 100 to 120 a minute and about 2 inches.", exceeds: "Also writes the AED steps and when to switch rescuers." },
      { name: "Choking and bleeding", objective: "O4", notYet: "Mixes up what to do, or says to lift the cloth or pull out an object.", meets: "Writes the choking signs (O3) and firm, direct pressure with layers for bleeding.", exceeds: "Also says when a choking person needs CPR and what a tourniquet is for." },
      { name: "Heart attack and stroke", objective: "O5", notYet: "Cannot list B.E. F.A.S.T. or heart attack signs.", meets: "Lists B.E. F.A.S.T. and three heart attack signs, with \"call 911\".", exceeds: "Also notes to record the time signs started and not to drive the person." },
      { name: "Certification plan", objective: "O6", notYet: "No class chosen, or an online-only class with no skills test.", meets: "Names an in-person or blended class, who grants the card, the place and a date.", exceeds: "Also confirmed with the employer or program that the class is accepted, and set a renewal reminder." }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Learners who complete an in-person Red Cross or AHA CPR, AED and first aid class within 60 days (follow-up survey, card shown)",
      "Learners who list a current CPR and first aid card on a job application or résumé",
      "Workplaces and nonprofits in the program that report more staff and volunteers certified and AED locations known"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A phone or computer with internet to view lessons and the class finders",
      "Paper and pen; a firm pillow or rolled towel for the CPR-rate practice; a towel for the pressure practice",
      "A phone timer or clock",
      "About 60 to 75 minutes in total, in short sessions"
    ],
    facilitatorNotes: [
      "This is awareness only. Say often that it does not certify, and point learners to an in-person class with a qualified Red Cross or AHA instructor.",
      "Never let learners practice compressions, back blows or abdominal thrusts on each other; use pillows or, if you have them, manikins with a certified instructor.",
      "Give no medicine doses or clinical advice; send health questions to a doctor or the 911 dispatcher.",
      "Some learners may have lived through an emergency or lost someone; allow breaks and let them step out.",
      "For groups abroad, swap 911 for the local emergency number and local training providers (for example national Red Cross or Red Crescent societies).",
      "Partner with a local fire department, hospital or Red Cross chapter to offer a certification class right after the course."
    ]
  }
};
