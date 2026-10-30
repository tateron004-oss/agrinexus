"use strict";

// Koach Learn course: Workforce Development (wave 1, 30 October 2026) -> "Phlebotomy Technician Preparation".
// Teaches the knowledge, steps and safety behind blood collection and prepares learners for a certification exam (for example NHA's CPT). It does NOT teach anyone to draw blood:
// real draws are learned only in an approved, supervised training program. No clinical advice.

module.exports = {
  id: "phlebotomy-prep",
  category: "Workforce Development",
  name: "Phlebotomy Technician Preparation",
  skills: "Choosing a training program and certification, Identifying the patient and checking the order, Order of draw, The steps of a routine blood draw, Infection control and sharps safety, Labeling and handling specimens",
  outcome: "make your own pocket checklist for a routine blood draw, from identifying the patient to labeling the tubes and cleaning up, with your lab's order of draw and the safety steps, plus a plan for your training program and certification exam.",
  about: [
    "Phlebotomy technicians collect blood samples in hospitals, labs, clinics, blood donation centers and patients' homes. It is a fast way into health care, and it can lead to other lab and patient care jobs.",
    "This course teaches the knowledge behind the job: the certifications and state rules, how to identify the patient and check the order, the order of draw for tubes, the steps of a routine blood draw, infection control and sharps safety, and how to label and handle specimens so the lab can use them. It also covers patient privacy under HIPAA.",
    "Important: this course does not teach you to draw blood, and you must not practice on anyone. Blood draws are learned only in an approved training program, with an instructor watching, after you have practiced on training arms. Certification exams also ask for proof of supervised draws on real people. This course prepares you for that program and the exam; it does not give you a certificate or license.",
    "Each lesson takes about five minutes and ends with a \"Try it now\" task on paper. A short check follows each lesson, a knowledge check closes each chapter, and a 20-question quiz closes the course."
  ],
  finalTask: "Make your own pocket checklist for a routine blood draw: identify the patient and check the order, prepare and protect yourself, the order of draw for your tubes (from your program's or lab's chart), the steps of the draw, labeling in front of the patient, sharps disposal and cleanup. Add a one-page plan: the training program you will apply to, the certification exam you will aim for, what your state requires, and target dates.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Adults looking for a quick, steady way into health care: job seekers, young adults, immigrants, veterans (some with military medical experience) and adults returning to learning.",
    startingPoint: "Can read everyday English and use a phone or library computer. Most have never worked in a clinic or lab, do not know medical words, and some are nervous around needles or blood.",
    gap: "Phlebotomy programs and certification exams expect learners to know patient identification, order of draw, the venipuncture steps, infection control, specimen handling and privacy, and to have done supervised draws. Learners need this knowledge, a clear plan for training and testing, and an honest picture of the job before they enroll.",
    constraints: [
      "Reading level: plain words and short sentences; every medical word is explained",
      "Safety: no hands-on blood draws or needle practice at home; those happen only in a supervised program",
      "Devices: a phone or library computer; paper is enough for every task",
      "State rules differ (for example California issues its own phlebotomy certificates); learners check their state",
      "Tube colors and order of draw follow each lab's chart; learners use their program's chart",
      "Privacy: no real patient information in any task"
    ],
    prerequisites: "None. \"Health Literacy\" helps but is not required."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Using the official NHA page and your state health department's page", action: "write a plan for a phlebotomy training program, the supervised draws required and a certification exam date", standard: "with every requirement checked on an official page" },
    { id: "O2", condition: "Given a practice patient and a lab order", action: "confirm the patient with two identifiers and match the order before any draw", standard: "stopping every time something does not match" },
    { id: "O3", condition: "Given a set of tube colors and your program's chart", action: "put the tubes in the order of draw", standard: "with no tube out of order" },
    { id: "O4", condition: "Given the steps of a routine venipuncture out of order", action: "put the steps in order and name when to stop the draw", standard: "with no step missing" },
    { id: "O5", condition: "Given practice safety situations", action: "choose the right infection control and sharps safety step", standard: "getting every situation right" },
    { id: "O6", condition: "Given practice specimens", action: "decide whether each specimen is labeled and handled well enough for the lab to accept it", standard: "spotting every reason for rejection" }
  ],
  chapters: [
    {
      name: "Chapter 1: The job, the patient and the tubes",
      lessons: [
        {
          title: "The job, training and certification",
          objectives: ["O1"],
          minutes: 5,
          goal: "Write a plan for a training program, supervised draws and a certification exam.",
          text: [
            "A phlebotomy technician collects blood from patients for lab tests and blood donation. The job needs careful steps, a calm manner with nervous patients, and strict safety.",
            "Most people start with a phlebotomy training program at a community college, adult school or career school. You learn on training arms first, then do draws on real people with an instructor watching. This hands-on part cannot be learned online.",
            "Certification: one common choice is NHA's Certified Phlebotomy Technician (CPT). NHA asks for a high school diploma or GED (or one coming soon), a training program or supervised work experience, and proof of at least 30 venipunctures and 10 capillary (finger or heel) sticks on live people. Other groups, such as ASCP, also certify phlebotomists; check their official pages.",
            "Some states set their own rules. California, for example, issues state phlebotomy certificates through the California Department of Public Health (CDPH) and also requires a national exam from an approved group. Check your state health department before you choose a program. Rules and fees change, so read the official pages."
          ],
          steps: ["Find two phlebotomy training programs near you.", "Ask each: how many supervised draws do students do, and which certification does it prepare you for?", "Read the certification's official page for its current requirements.", "Check your state health department for state rules.", "Write target dates: start of training, end of training, exam."],
          words: [["Phlebotomy", "taking blood from a person for testing or donation."], ["Venipuncture", "putting a needle into a vein to collect blood."], ["Capillary stick", "a small puncture of the finger or heel to collect a few drops of blood."], ["Training arm", "a practice model of an arm used to learn draws safely."]],
          slides: [
            { title: "The job", bullets: ["Collect blood for tests and donation", "Careful steps, calm manner, strict safety"] },
            { title: "Training comes first", bullets: ["Approved program: college, adult or career school", "Training arms, then supervised real draws", "The hands-on part cannot be learned online"] },
            { title: "Certification", bullets: ["NHA's CPT: training or work experience", "Proof of 30 venipunctures and 10 capillary sticks", "Other groups, such as ASCP: check their pages"] },
            { title: "Check your state", bullets: ["Some states issue their own certificates", "California: CDPH plus a national exam", "Rules and fees change: read official pages"] }
          ],
          sources: [
            { name: "NHA: Certified Phlebotomy Technician (CPT)", url: "https://www.nhanow.com/certifications/phlebotomy-technician" },
            { name: "California Department of Public Health: Phlebotomy certificate", url: "https://www.cdph.ca.gov/Programs/OSPHLD/LFS/Pages/Phlebotomist.aspx" }
          ],
          tryIt: "Write a one-page plan: two training programs near you (name, length, supervised draws, which certification they prepare you for), the certification you will aim for and its requirements from the official page, your state's rules, and three target dates.",
          youCanNow: "say what a phlebotomy technician does, how training works, what NHA's CPT asks for, and where to check your state's rules.",
          quickCheck: [
            { objective: "O1", q: "Where do you learn to actually draw blood?", options: ["From videos at home", "On a friend, carefully", "In an approved training program, with an instructor watching", "On yourself"], answer: 2, why: "Draws are learned only in a supervised program, first on training arms." },
            { objective: "O1", q: "What does NHA's CPT ask for, besides training or work experience?", options: ["Proof of supervised venipunctures and capillary sticks on live people", "A nursing degree", "A driver's license", "Nothing else"], answer: 0, why: "NHA asks for proof of at least 30 venipunctures and 10 capillary sticks." }
          ]
        },
        {
          title: "The right patient and the right order",
          objectives: ["O2"],
          minutes: 5,
          goal: "Confirm the patient with two identifiers and match the lab order before any draw.",
          text: [
            "The most important step happens before the needle: making sure you have the right patient. A sample from the wrong person can lead to the wrong treatment.",
            "Use at least two identifiers, usually full name and date of birth. Ask the patient to say them (\"Please tell me your full name and date of birth\"), instead of asking \"Are you John Smith?\", because nervous or confused people may just say yes. In a hospital, also check the ID band against the order.",
            "Then read the lab order (requisition): which tests, any special instructions such as fasting or a set time, and which tubes are needed. If the name, date of birth or anything else does not match, stop and ask your supervisor. Never guess.",
            "Privacy (HIPAA): the order shows private health information. Keep it out of sight, speak quietly, and talk about the tests only with the patient and staff who need to know."
          ],
          steps: ["Introduce yourself and explain what you will do.", "Ask the patient to say their full name and date of birth.", "Compare them with the order (and the ID band in a hospital).", "Check the tests, the tubes and any special instructions such as fasting.", "If anything does not match, stop and ask your supervisor."],
          words: [["Patient identifiers", "details such as full name and date of birth used to make sure you have the right person."], ["Requisition", "the lab order that lists the patient and the tests to collect."], ["Fasting", "not eating (and sometimes not drinking anything but water) for a set time before a test."], ["HIPAA", "the federal law that protects the privacy of health information."]],
          slides: [
            { title: "Before the needle", bullets: ["The right patient matters most", "Wrong patient = wrong results, wrong care"] },
            { title: "Two identifiers", bullets: ["Full name and date of birth", "Ask the patient to SAY them", "Hospital: check the ID band too"] },
            { title: "Read the order", bullets: ["Which tests and tubes", "Fasting or timed instructions", "Anything off? Stop and ask"] },
            { title: "Privacy", bullets: ["Keep the order out of sight", "Speak quietly", "Share only with people who need it"] }
          ],
          sources: [
            { name: "HHS: HIPAA for professionals (Privacy Rule)", url: "https://www.hhs.gov/hipaa/for-professionals/privacy/index.html" }
          ],
          tryIt: "Role play with a friend, no needles. Your friend plays a patient with a made-up name and birthday; you hold a made-up lab order with one detail different. Introduce yourself, ask them to say their name and date of birth, compare with the order, and say out loud what you do when it does not match.",
          youCanNow: "identify a patient with two identifiers, check the lab order, stop when something does not match, and keep the information private.",
          quickCheck: [
            { objective: "O2", q: "What is the best way to confirm who the patient is?", options: ["Ask \"Are you Maria Lopez?\"", "Look at their face", "Ask the person in the waiting room", "Ask them to say their full name and date of birth"], answer: 3, why: "Having the patient say two identifiers avoids a nervous \"yes\" to the wrong name." },
            { objective: "O2", q: "The date of birth on the order does not match what the patient says. What do you do?", options: ["Draw anyway; the name matches", "Stop and ask your supervisor", "Change the date on the order", "Use a different patient's order"], answer: 1, why: "Any mismatch stops the draw until it is sorted out." }
          ]
        },
        {
          title: "Tubes and the order of draw",
          objectives: ["O3"],
          minutes: 6,
          goal: "Put a set of tubes in the order of draw using your program's chart.",
          text: [
            "Tubes have colored caps that tell you what is inside. Some have additives that stop blood from clotting; others help it clot. If additive from one tube gets carried into the next, it can change the test results.",
            "That is why labs follow an order of draw, based on a lab standard from CLSI. A common order is: 1) blood culture bottles, 2) light blue (sodium citrate), 3) red or gold (serum tubes, with or without gel), 4) green (heparin), 5) lavender or purple (EDTA), 6) gray (sodium fluoride and potassium oxalate).",
            "Cap colors can differ between tube makers, and labs can have extra tubes, so always use your program's or lab's own chart. Many students learn a memory line for the order and practice it until it is automatic.",
            "Tubes with additives are gently turned upside down and back (inverted) several times right after filling, as the tube maker says. Never shake them."
          ],
          words: [["Additive", "a chemical inside a tube that stops clotting or helps blood clot."], ["Order of draw", "the set order for filling tubes so additives do not carry into the next tube."], ["Serum", "the liquid part of blood after it clots."], ["Invert", "to turn a tube gently upside down and back."], ["CLSI", "the Clinical and Laboratory Standards Institute, a group that writes lab standards."]],
          slides: [
            { title: "Why order matters", bullets: ["Caps show what is inside", "Additive carried into the next tube changes results"] },
            { title: "A common order of draw", bullets: ["1. Blood cultures  2. Light blue", "3. Red or gold  4. Green", "5. Lavender  6. Gray"] },
            { title: "Use your lab's chart", bullets: ["Colors can differ between makers", "Labs can add tubes", "Learn it until it is automatic"] },
            { title: "After filling", bullets: ["Invert gently, as the maker says", "Never shake"] }
          ],
          tryIt: "Cut six slips of paper and color or label them: gray, red, blood culture, lavender, light blue, green. Mix them up and put them in the order of draw. Do it five times, faster each time. Check your answer against the order in this lesson, and later against your program's chart.",
          youCanNow: "put common tubes in the order of draw, say why the order matters, and invert tubes gently after filling.",
          quickCheck: [
            { objective: "O3", q: "In the common order of draw, which comes first?", options: ["Lavender", "Gray", "Blood culture bottles", "Green"], answer: 2, why: "Blood cultures are drawn first so they stay sterile." },
            { objective: "O3", q: "Why is there an order of draw?", options: ["So additives from one tube do not get into the next", "So the patient sees nice colors", "To use fewer tubes", "To make the draw faster"], answer: 0, why: "Additive carried into the next tube can change the test results." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: The job, the patient and the tubes",
        questions: [
          { objective: "O1", q: "Who gives the Certified Phlebotomy Technician (CPT) credential described in this course?", options: ["The DMV", "Any hospital", "NHA, the National Healthcareer Association", "The patient's doctor"], answer: 2, why: "NHA gives the CPT credential." },
          { objective: "O1", q: "You live in California. What should you also check?", options: ["The California Department of Public Health's phlebotomy rules", "Nothing; national rules are enough", "A blog post", "Your phone company"], answer: 0, why: "California issues its own phlebotomy certificates through CDPH." },
          { objective: "O2", q: "How many patient identifiers should you use at least?", options: ["None", "One", "Five", "Two"], answer: 3, why: "At least two, usually full name and date of birth." },
          { objective: "O2", q: "The order says the test needs fasting. What do you do?", options: ["Ignore it", "Check whether the patient has fasted and follow your lab's rule", "Tell the patient to eat first", "Draw an extra tube"], answer: 1, why: "Special instructions on the order must be checked before the draw." },
          { objective: "O3", q: "In the common order of draw, which tube comes right before green?", options: ["Lavender", "Gray", "Red or gold", "Blood culture"], answer: 2, why: "The order is blood culture, light blue, red or gold, green, lavender, gray." }
        ]
      }
    },
    {
      name: "Chapter 2: The draw, safety and specimens",
      lessons: [
        {
          title: "The steps of a routine blood draw",
          objectives: ["O4"],
          minutes: 6,
          goal: "Put the steps of a routine venipuncture in order and name when to stop.",
          text: [
            "This lesson teaches the steps so you know them before your training program. You will do them only with an instructor watching. Never practice on a person outside a supervised program.",
            "The main steps: identify the patient and check the order; wash your hands and put on gloves; position the patient's arm; apply the tourniquet and choose a vein (the median cubital vein in the bend of the elbow is often the first choice); clean the site and let it air dry; insert the needle at a shallow angle; fill the tubes in the order of draw; release the tourniquet; remove the needle and activate the safety device; apply pressure with gauze; label the tubes in front of the patient; clean up and check on the patient.",
            "Many programs teach not to leave a tourniquet on longer than about one minute, because it can change test results. Follow your program's rules.",
            "Know when to stop: the patient feels faint or passes out, a swelling (hematoma) forms quickly, the patient feels sharp, shooting or electric pain, or the patient asks you to stop. Remove the tourniquet and needle, apply pressure, keep the patient safe and get help."
          ],
          steps: ["Identify the patient and check the order.", "Wash hands and put on gloves.", "Position the arm and apply the tourniquet.", "Choose the vein, then clean the site and let it dry.", "Insert the needle and fill the tubes in the order of draw.", "Release the tourniquet, remove the needle and activate the safety device.", "Apply pressure with gauze.", "Label the tubes in front of the patient, clean up and check on the patient."],
          words: [["Tourniquet", "a band tied around the arm to make veins easier to find."], ["Median cubital vein", "a vein in the bend of the elbow that is often the first choice for a draw."], ["Hematoma", "a swelling of blood under the skin."], ["Syncope", "fainting: a short loss of consciousness."]],
          slides: [
            { title: "Learn the steps, practice supervised", bullets: ["Know the steps before training", "Real draws only with an instructor watching"] },
            { title: "Before the needle", bullets: ["Identify the patient, check the order", "Wash hands, gloves on", "Tourniquet, choose vein, clean and dry"] },
            { title: "The draw and after", bullets: ["Fill tubes in the order of draw", "Tourniquet off, needle out, safety device on", "Pressure, label in front of the patient"] },
            { title: "When to stop", bullets: ["Fainting or feeling faint", "Fast swelling (hematoma)", "Sharp, shooting or electric pain", "The patient asks you to stop"] }
          ],
          tryIt: "No needles. Write the eight steps of a routine draw on eight cards, mix them up and put them in order. Then, on the back of the last card, write the four signs that mean stop the draw, and what you do next.",
          youCanNow: "list the steps of a routine venipuncture in order and say when to stop a draw and what to do.",
          quickCheck: [
            { objective: "O4", q: "Which step comes right before cleaning the site?", options: ["Labeling the tubes", "Removing the needle", "Applying pressure", "Applying the tourniquet and choosing the vein"], answer: 3, why: "You find the vein first, then clean the site and let it dry." },
            { objective: "O4", q: "During a draw the patient says they feel faint. What do you do?", options: ["Finish quickly", "Stop the draw, keep them safe and get help", "Ask them to stand up", "Ignore it"], answer: 1, why: "Feeling faint is a sign to stop: tourniquet and needle out, pressure, keep the patient safe, get help." }
          ]
        },
        {
          title: "Infection control and sharps safety",
          objectives: ["O5"],
          minutes: 5,
          goal: "Choose the right infection control and sharps safety step in practice situations.",
          text: [
            "Blood can carry germs such as hepatitis B, hepatitis C and HIV, called bloodborne pathogens. OSHA's Bloodborne Pathogens Standard requires employers to have an exposure control plan, offer the hepatitis B vaccine, train workers, provide protective equipment and use safer needle devices.",
            "Your habits: clean your hands before and after every patient and when you take off gloves; wear new gloves for each patient; use needles with a safety device and activate it right away; put used needles straight into a sharps container, never recap them by hand, and never let the container get overfilled.",
            "If you get a needlestick or blood on your skin or in your eyes: wash the area with soap and water (flush eyes with water), and report it to your supervisor right away so you can get checked. Do not wait."
          ],
          steps: ["Clean hands before and after each patient.", "New gloves for each patient.", "Activate the safety device right after the needle comes out.", "Drop the needle straight into the sharps container; never recap by hand.", "Exposure: wash or flush, then report right away."],
          words: [["Bloodborne pathogens", "germs in blood that can cause disease, such as hepatitis B, hepatitis C and HIV."], ["OSHA", "the Occupational Safety and Health Administration, the federal agency for workplace safety."], ["Sharps container", "a hard, labeled box for used needles and other sharp items."], ["PPE", "personal protective equipment, such as gloves."]],
          slides: [
            { title: "Why it matters", bullets: ["Blood can carry hepatitis B, hepatitis C, HIV", "OSHA's Bloodborne Pathogens Standard protects workers"] },
            { title: "Employer must", bullets: ["Exposure control plan and training", "Offer the hepatitis B vaccine", "Provide PPE and safer needle devices"] },
            { title: "Your habits", bullets: ["Clean hands; new gloves each patient", "Safety device on right away", "Straight into sharps; never recap by hand"] },
            { title: "If you are exposed", bullets: ["Wash with soap and water; flush eyes", "Report to your supervisor right away"] }
          ],
          sources: [
            { name: "OSHA: Bloodborne pathogens and needlestick prevention", url: "https://www.osha.gov/bloodborne-pathogens" }
          ],
          tryIt: "Practice only. For each situation, write the right step: (1) you finish one patient and the next one sits down, (2) the needle is out of the vein, (3) the sharps container is full to the line, (4) you feel a stick through your glove from a used needle. Answers: clean hands and new gloves; activate the safety device and put it in the sharps container; close it and get a new one; wash the area and report it right away.",
          youCanNow: "choose the right infection control and sharps safety step and say what to do after an exposure.",
          quickCheck: [
            { objective: "O5", q: "What do you do with a used needle?", options: ["Activate the safety device and put it straight into the sharps container", "Recap it by hand", "Put it in the regular trash", "Lay it on the tray for later"], answer: 0, why: "Safety device on and straight into the sharps container prevents needlesticks." },
            { objective: "O5", q: "You get a needlestick from a used needle. What is first?", options: ["Finish your shift, then decide", "Hide it so you are not blamed", "Wash the area with soap and water and report it right away", "Put a bandage on and forget it"], answer: 2, why: "Wash, then report right away so you can be checked quickly." }
          ]
        },
        {
          title: "Labeling and handling specimens, and your checklist",
          objectives: ["O6"],
          minutes: 5,
          goal: "Decide whether a specimen is labeled and handled well enough for the lab to accept it.",
          text: [
            "A perfect draw is wasted if the lab cannot use the sample. Labs reject specimens that are unlabeled or mislabeled, in the wrong tube, not filled enough, clotted when they should not be, hemolyzed (red blood cells broken, often from a draw that was too rough or shaken tubes), or not kept at the right temperature or time.",
            "Label every tube in front of the patient, right after the draw, never before. Follow your lab's rules for what goes on the label, usually the patient's full name, date of birth or ID number, the date and time, and your initials. Then check the label against the order one more time.",
            "Send specimens the way your lab says: some go on ice, some are kept from light, some must reach the lab within a set time. Keep the patient's information private on the way.",
            "Now make your final task: your own pocket checklist, plus your training and exam plan."
          ],
          steps: ["Label each tube in front of the patient, right after the draw.", "Include what your lab requires: name, date of birth or ID, date, time, your initials.", "Check the labels against the order.", "Handle and send the tubes the way the lab says (ice, light, time).", "Report any problem instead of sending a bad sample."],
          words: [["Specimen", "a sample, such as a tube of blood, sent to the lab."], ["Hemolysis", "when red blood cells break open, which can ruin some test results."], ["Rejected specimen", "a sample the lab will not test, so the patient must be drawn again."]],
          slides: [
            { title: "Why labs reject samples", bullets: ["Unlabeled or mislabeled", "Wrong tube or not filled enough", "Clotted, hemolyzed, wrong temperature or too late"] },
            { title: "Label right", bullets: ["In front of the patient, right after the draw", "What your lab requires: name, DOB or ID, date, time, initials", "Check against the order"] },
            { title: "Handle right", bullets: ["Ice, light or time rules", "Keep information private", "Report problems; never send a bad sample"] },
            { title: "Final task", bullets: ["Your pocket checklist, start to cleanup", "Your lab's order of draw", "Your training and exam plan with dates"] }
          ],
          tryIt: "Final task. Make a pocket checklist for a routine draw: patient ID and order check, hand hygiene and gloves, order of draw, the steps of the draw, when to stop, sharps disposal, labeling in front of the patient, handling and cleanup. On the back, write your plan: training program, certification exam, your state's rules and target dates. Use no real patient information.",
          youCanNow: "label and handle specimens so the lab can use them, spot reasons for rejection, and use your own checklist and plan.",
          quickCheck: [
            { objective: "O6", q: "When do you label the tubes?", options: ["Before you meet the patient", "At the end of your shift", "In front of the patient, right after the draw", "When the lab calls"], answer: 2, why: "Labeling in front of the patient right after the draw prevents mix-ups." },
            { objective: "O6", q: "A tube arrives at the lab with no label. What happens?", options: ["The lab guesses whose it is", "The lab rejects it and the patient must be drawn again", "The lab tests it anyway", "The lab labels it from memory"], answer: 1, why: "Unlabeled specimens are rejected because no one can be sure whose blood it is." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: The draw, safety and specimens",
        questions: [
          { objective: "O4", q: "Which vein is often the first choice for a routine draw?", options: ["A vein in the foot", "A vein in the neck", "A vein on the back of the hand only", "The median cubital vein in the bend of the elbow"], answer: 3, why: "The median cubital vein is often the first choice because it is usually easy to reach." },
          { objective: "O4", q: "Which is a sign to stop the draw?", options: ["The patient feels sharp, shooting or electric pain", "The tube is filling", "The patient is quiet", "The tourniquet is on"], answer: 0, why: "Shooting or electric pain can mean a nerve is involved; stop right away." },
          { objective: "O5", q: "Which is safe sharps practice?", options: ["Recapping needles by hand", "Overfilling the sharps container", "Putting needles straight into the sharps container", "Leaving needles on the tray"], answer: 2, why: "Needles go straight into the sharps container, never recapped by hand." },
          { objective: "O5", q: "Under OSHA's Bloodborne Pathogens Standard, which vaccine must employers offer?", options: ["Flu", "Hepatitis B", "Measles", "Tetanus"], answer: 1, why: "Employers must make the hepatitis B vaccine available to exposed workers." },
          { objective: "O6", q: "What is hemolysis?", options: ["Red blood cells breaking open", "A type of tube", "A blood type", "A clean draw"], answer: 0, why: "Hemolysis is broken red blood cells, which can ruin some test results." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Phlebotomy Technician Preparation",
    questions: [
      { objective: "O1", q: "What is phlebotomy?", options: ["Taking X-rays", "Giving shots", "Taking blood for testing or donation", "Filling prescriptions"], answer: 2, why: "Phlebotomy means drawing blood." },
      { objective: "O1", q: "Can this online course alone qualify you to draw blood?", options: ["Yes, after the quiz", "No; you need a supervised training program and supervised draws", "Yes, if you watch videos", "Yes, in any state"], answer: 1, why: "Real draws are learned and proven only in a supervised program." },
      { objective: "O1", q: "Where do you check a certification's current requirements?", options: ["The certifying group's official page", "A social media post", "A friend", "An old textbook"], answer: 0, why: "Requirements and fees change; the official page is current." },
      { objective: "O2", q: "Which two identifiers are most common?", options: ["Room number and bed color", "Height and weight", "Doctor's name and test name", "Full name and date of birth"], answer: 3, why: "Full name and date of birth are the usual two identifiers." },
      { objective: "O2", q: "What is a requisition?", options: ["A blood tube", "The lab order listing the patient and tests", "A bandage", "A bill"], answer: 1, why: "The requisition is the lab order." },
      { objective: "O2", q: "Why ask the patient to say their name instead of asking \"Are you ...?\"", options: ["It is faster", "It is more polite", "A nervous patient may say yes to the wrong name", "The law says to"], answer: 2, why: "Having them say it catches mix-ups." },
      { objective: "O3", q: "In the common order of draw, which tube comes last?", options: ["Light blue", "Red", "Green", "Gray"], answer: 3, why: "Gray (sodium fluoride and potassium oxalate) comes last in the common order." },
      { objective: "O3", q: "Which comes right after blood cultures?", options: ["Light blue (sodium citrate)", "Lavender", "Gray", "Green"], answer: 0, why: "Light blue follows blood cultures in the common order." },
      { objective: "O3", q: "Tube cap colors differ at your new lab. What do you follow?", options: ["The course slide", "Your memory of an old job", "Your lab's own chart", "Whatever is fastest"], answer: 2, why: "Each lab's chart is the rule, because makers and labs differ." },
      { objective: "O3", q: "How do you mix a tube with an additive?", options: ["Shake it hard", "Invert it gently, as the maker says", "Leave it alone", "Warm it up"], answer: 1, why: "Gentle inverting mixes the additive without breaking cells." },
      { objective: "O4", q: "Which step comes first?", options: ["Identify the patient and check the order", "Apply the tourniquet", "Insert the needle", "Label the tubes"], answer: 0, why: "Every draw starts with the right patient and the right order." },
      { objective: "O4", q: "What is a hematoma?", options: ["A tube color", "A type of needle", "A clean site", "A swelling of blood under the skin"], answer: 3, why: "A hematoma is blood collecting under the skin." },
      { objective: "O4", q: "When do you release the tourniquet?", options: ["Before cleaning the site", "After labeling", "Before removing the needle", "Never"], answer: 2, why: "The tourniquet comes off before the needle comes out." },
      { objective: "O5", q: "What are bloodborne pathogens?", options: ["Germs in blood that can cause disease", "Lab machines", "Tube additives", "Types of bandages"], answer: 0, why: "Hepatitis B, hepatitis C and HIV are examples." },
      { objective: "O5", q: "Which federal agency's standard protects workers from bloodborne pathogens?", options: ["FDA", "OSHA", "DMV", "IRS"], answer: 1, why: "OSHA's Bloodborne Pathogens Standard covers this." },
      { objective: "O5", q: "Blood splashes into your eye. What do you do?", options: ["Keep working", "Rub it", "Wait until tomorrow", "Flush it with water and report it right away"], answer: 3, why: "Flush right away and report so you can be checked." },
      { objective: "O5", q: "When do you change gloves?", options: ["Once a day", "For each patient", "Only when torn", "Never"], answer: 1, why: "New gloves for each patient prevents spreading germs." },
      { objective: "O6", q: "Which is a reason a lab rejects a specimen?", options: ["It was labeled in front of the patient", "It was sent on time", "It is hemolyzed", "It is in the right tube"], answer: 2, why: "Hemolysis can ruin results, so the lab may reject it." },
      { objective: "O6", q: "What goes on the tube label?", options: ["What your lab requires, usually name, DOB or ID, date, time and your initials", "Only the tube color", "The patient's phone number", "Nothing"], answer: 0, why: "Labs set the label rules; these details are the usual ones." },
      { objective: "O6", q: "You notice a tube is not filled enough. What do you do?", options: ["Send it anyway", "Add water", "Mix it with another tube", "Report it and follow your lab's rule; never send a bad sample"], answer: 3, why: "An underfilled tube may give wrong results; follow the lab's rule." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Pre-Test: What Do You Already Know?", from: [1, 3, 6, 7, 10, 11, 14, 15, 17] },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      { name: "Training and exam plan", objective: "O1", notYet: "No program or exam named, or requirements guessed.", meets: "Names a training program, a certification exam and its requirements from the official page, the state's rules and target dates.", exceeds: "Compares two programs, including how many supervised draws each gives." },
      { name: "Patient ID and order", objective: "O2", notYet: "The checklist skips patient ID or the order check.", meets: "Starts with two identifiers said by the patient and a check of the order, with \"stop if it does not match\".", exceeds: "Also covers the ID band in a hospital and special instructions such as fasting." },
      { name: "Order of draw", objective: "O3", notYet: "Tubes missing or out of order.", meets: "All tubes in the correct order from the program's or lab's chart.", exceeds: "Adds the reason the order matters and to invert tubes gently." },
      { name: "Steps and stop signs", objective: "O4", notYet: "Steps missing or out of order, or no stop signs.", meets: "All steps in order, with the signs that mean stop the draw.", exceeds: "Adds what to do for a fainting patient." },
      { name: "Safety", objective: "O5", notYet: "No hand hygiene, gloves or sharps step.", meets: "Hand hygiene, new gloves, safety device, sharps container and what to do after an exposure.", exceeds: "Notes never recapping by hand and not overfilling the sharps container." },
      { name: "Labeling and handling", objective: "O6", notYet: "Labels before the draw or away from the patient.", meets: "Labels in front of the patient after the draw, checks against the order and follows handling rules.", exceeds: "Lists three reasons the lab rejects specimens and how to avoid each." }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Learners who enroll in an approved phlebotomy training program within 90 days",
      "Learners who pass a phlebotomy certification exam such as NHA's CPT (self-reported)",
      "Learners hired as phlebotomy technicians or lab assistants within 6 months"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A phone or computer with internet for the NHA and state health department pages",
      "Paper, colored pens or slips for the order-of-draw practice, and index cards for the checklist",
      "Your training program's order-of-draw chart, if you have one",
      "About 70 minutes in total, in short sessions"
    ],
    facilitatorNotes: [
      "No needles, tubes or blood in this course; do not let learners practice draws on each other. Hands-on practice belongs in an approved, supervised program.",
      "Learners who feel faint around blood: let them skip images and talk about whether the job fits them.",
      "Bring the order-of-draw chart from a local training program or lab, since colors can differ.",
      "Run the patient ID role play in pairs with a planted mismatch.",
      "Remind learners to check their state's rules; some states, such as California, issue their own certificates.",
      "Score the final task with the rubric and give feedback on one Not yet row at a time."
    ]
  }
};
