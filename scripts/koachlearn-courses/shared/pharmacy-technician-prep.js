"use strict";

// Koach Learn course: Workforce Development (wave 1, 30 October 2026) -> "Pharmacy Technician Preparation".
// Prepares learners for the PTCB (PTCE) or NHA (ExCPT) pharmacy technician exams; it does not certify or register anyone. State boards of pharmacy set the rules for technicians.
// Safety: no real doses or dosing advice. All prescriptions and math problems use made-up drugs ("Drug X") and are marked practice only.

module.exports = {
  id: "pharmacy-technician-prep",
  category: "Workforce Development",
  name: "Pharmacy Technician Preparation",
  skills: "Choosing a certification and checking state rules, Reading a prescription, Practice pharmacy math, Medication safety checks, Knowing what goes to the pharmacist, Protecting patient privacy (HIPAA)",
  outcome: "build a personal study and test plan for a pharmacy technician exam, and show the core skills it tests: read a practice prescription, solve practice pharmacy math, make the safety checks a technician makes, send clinical questions to the pharmacist, and keep patient information private.",
  about: [
    "Pharmacy technicians help pharmacists in retail stores, hospitals, mail-order pharmacies and clinics. They take in prescriptions, enter them, count and label medicine, manage stock and help customers. Many states require technicians to register with the state board of pharmacy, and many employers ask for a national certification.",
    "This course prepares you for that path. You will compare the two national certifications (PTCB's CPhT, earned by passing the PTCE, and NHA's CPhT, earned by passing the ExCPT), check your own state's rules, read practice prescriptions, do practice pharmacy math, learn the safety checks and the federal rules a technician follows, and protect patient privacy under HIPAA.",
    "This course does not certify or register you, and it never gives medical advice. Every prescription and math problem is made up and marked practice only. Medication questions from patients always go to the pharmacist.",
    "Each lesson takes about five minutes and ends with a \"Try it now\" task on paper. A short check follows each lesson, a knowledge check closes each chapter, and a 20-question quiz closes the course. Your final task is your own study and test plan with a practice workbook."
  ],
  finalTask: "Build your own pharmacy technician study and test plan: name the exam you will take (PTCE or ExCPT), what your state board of pharmacy requires, and weekly study dates up to a target test date. Attach a practice workbook: 5 made-up prescriptions you read and checked, 10 practice math problems with your work shown, and a list of 5 customer questions you would send to the pharmacist.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Adults looking for a steady health care job without a long degree: job seekers, young adults, immigrants, veterans and adults returning to learning. Some work in retail already. Many have never worked in a pharmacy.",
    startingPoint: "Can read everyday English, do basic arithmetic with a calculator, and use a phone or library computer. Most do not know drug names, prescription abbreviations, pharmacy math or pharmacy law.",
    gap: "Pharmacy technician jobs and exams expect accurate reading of prescriptions, careful math, safety checks, knowledge of federal and state rules and strict privacy. Mistakes can harm patients. Learners need to know the credential path and their state's rules, and to practice these skills safely before training or testing.",
    constraints: [
      "Reading level: plain words and short sentences; every pharmacy word is explained",
      "Devices: a phone or library computer; paper and a basic calculator are enough",
      "Safety: no real doses or dosing advice; all drugs and numbers are made up and marked practice only",
      "Rules differ by state: learners check their own state board of pharmacy",
      "Certification and state registration may ask about criminal records; learners check the official rules",
      "Privacy: no real patient information in any task"
    ],
    prerequisites: "Basic arithmetic: fractions, decimals and multiplying. \"Health Literacy\" helps but is not required."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Using the official PTCB, NHA and state board of pharmacy pages", action: "compare the two national technician exams and write a study and test plan that meets your state's rules", standard: "with every requirement checked on an official page" },
    { id: "O2", condition: "Given a made-up prescription", action: "name its parts and rewrite the directions in plain words", standard: "getting at least 4 of 5 practice prescriptions fully right" },
    { id: "O3", condition: "Given practice-only problems with made-up numbers and a basic calculator", action: "solve pharmacy math problems for unit conversions, quantity and days' supply", standard: "getting at least 8 of 10 right with the work shown" },
    { id: "O4", condition: "Given a filled practice order and its stock bottle", action: "check the patient, drug, strength and NDC against the prescription and flag any mismatch", standard: "catching every planted mismatch" },
    { id: "O5", condition: "Given practice pharmacy situations", action: "sort each task into technician work or pharmacist work and follow the extra rules for controlled substances", standard: "sending every clinical question to the pharmacist" },
    { id: "O6", condition: "At the pharmacy counter or on the phone", action: "share patient information only with people who need it, and only the minimum they need", standard: "in every practice situation, following HIPAA" }
  ],
  chapters: [
    {
      name: "Chapter 1: The job, prescriptions and math",
      lessons: [
        {
          title: "The job, the certifications and your state's rules",
          objectives: ["O1"],
          minutes: 5,
          goal: "Compare the PTCE and ExCPT exams and find your state's technician rules.",
          text: [
            "Pharmacy technicians take in prescriptions, type them into the computer, count and label medicine, manage stock, run the register and help customers. A pharmacist checks the work and answers every medicine question.",
            "There are two national certifications, and both give the title Certified Pharmacy Technician (CPhT). PTCB, the Pharmacy Technician Certification Board, gives it to people who pass the PTCE. Its eligibility includes a PTCB-recognized training program or enough work experience. NHA, the National Healthcareer Association, gives it to people who pass the ExCPT, with a training program or supervised work experience.",
            "Your state board of pharmacy decides what technicians may do and whether you must register or be licensed before you work. Rules differ a lot between states. The National Association of Boards of Pharmacy (NABP) lists every state board.",
            "Fees, eligibility and exam rules change, and both certifications ask you to report criminal or board actions. Read the official pages before you pay. This course prepares you; it does not certify or register you."
          ],
          steps: ["Open PTCB's CPhT page and NHA's pharmacy technician page.", "Write down for each: the exam name, how you qualify and how often you renew.", "Find your state board of pharmacy on the NABP list.", "Write what your state requires before you can work as a technician.", "Pick your exam and a target month."],
          words: [["Pharmacy technician", "a trained worker who helps the pharmacist prepare and give out medicine."], ["Pharmacist", "the licensed professional who checks prescriptions and advises patients about medicine."], ["CPhT", "Certified Pharmacy Technician, the title given by PTCB or NHA after their exams."], ["State board of pharmacy", "the state agency that licenses pharmacists and sets rules for technicians."]],
          slides: [
            { title: "What technicians do", bullets: ["Take in and enter prescriptions", "Count, label and stock medicine", "Help customers; the pharmacist checks and advises"] },
            { title: "Two national exams", bullets: ["PTCB: the PTCE exam", "NHA: the ExCPT exam", "Both give the CPhT title"] },
            { title: "Your state decides", bullets: ["Registration or license before you work", "What technicians may do", "Find your board on the NABP list"] },
            { title: "Check before you pay", bullets: ["Fees and rules change", "Both ask about criminal or board actions", "This course prepares you; it does not certify"] }
          ],
          sources: [
            { name: "PTCB: Certified Pharmacy Technician (CPhT)", url: "https://www.ptcb.org/credentials/certified-pharmacy-technician" },
            { name: "NHA: Certified Pharmacy Technician (ExCPT)", url: "https://www.nhanow.com/certifications/pharmacy-technician" },
            { name: "NABP: State boards of pharmacy", url: "https://nabp.pharmacy/about/boards-of-pharmacy/" }
          ],
          tryIt: "Make a two-column table: PTCE and ExCPT. Fill in who gives it, how you qualify and how often you renew, from the official pages. Under it, write what your state board of pharmacy requires before you can work as a technician, and the web address where you found it.",
          youCanNow: "say what technicians do, name the two national exams and who gives them, and find your state's technician rules.",
          quickCheck: [
            { objective: "O1", q: "Who gives the PTCE exam?", options: ["Your state's motor vehicle office", "Any pharmacy store", "PTCB, the Pharmacy Technician Certification Board", "The FDA"], answer: 2, why: "PTCB gives the PTCE; passing it earns PTCB's CPhT." },
            { objective: "O1", q: "Who decides whether you must register before working as a technician?", options: ["Your state board of pharmacy", "The store manager", "The customer", "A training ad"], answer: 0, why: "Each state board of pharmacy sets technician registration and practice rules." }
          ]
        },
        {
          title: "Reading a prescription",
          objectives: ["O2"],
          minutes: 6,
          goal: "Name the parts of a practice prescription and rewrite its directions in plain words.",
          text: [
            "A prescription has set parts: the patient's name and date of birth, the drug name, the strength (for example 10 mg), the dosage form (tablet, capsule, liquid), the directions (called the sig), the quantity, the number of refills, the date, and the prescriber's name and signature.",
            "Directions often use Latin abbreviations. Common ones: po (by mouth), bid (twice a day), tid (three times a day), qid (four times a day), prn (as needed), hs (at bedtime). The label must be in plain words, so \"1 tab po bid\" becomes \"Take 1 tablet by mouth twice a day.\"",
            "Some abbreviations cause errors, so safety groups say not to use them. For example, \"QD\" (daily) has been mistaken for \"QID\" (four times a day), and \"U\" for units has been read as a zero. Also watch decimals: write 0.5 mg (with a leading zero), never .5 mg, and never 5.0 mg (a trailing zero can be read as 50).",
            "If anything is unclear, missing or looks wrong, do not guess. Flag it for the pharmacist."
          ],
          steps: ["Check the patient's name and date of birth.", "Find the drug name, strength and dosage form.", "Read the sig and rewrite it in plain words.", "Check the quantity, refills, date and prescriber.", "Flag anything unclear or missing for the pharmacist."],
          words: [["Sig", "the directions on a prescription that tell the patient how to take the medicine."], ["Strength", "how much drug is in each unit, for example 10 mg in one tablet."], ["Dosage form", "the kind of medicine: tablet, capsule, liquid, cream and so on."], ["Refill", "a permitted repeat of the same prescription."], ["Prescriber", "the licensed person who wrote the prescription, such as a doctor or nurse practitioner."]],
          slides: [
            { title: "Parts of a prescription", bullets: ["Patient name and date of birth", "Drug, strength and dosage form", "Sig, quantity, refills, date, prescriber"] },
            { title: "Common abbreviations", bullets: ["po = by mouth  •  prn = as needed", "bid = twice a day  •  tid = three times", "qid = four times  •  hs = at bedtime"] },
            { title: "Error-prone writing", bullets: ["QD can be misread as QID: write \"daily\"", "U can look like 0: write \"units\"", "Write 0.5 (leading zero), never 5.0 (trailing zero)"] },
            { title: "When in doubt", bullets: ["Do not guess", "Flag it for the pharmacist"] }
          ],
          tryIt: "Practice only, made-up drugs. Rewrite each sig in plain words: (1) \"Drug X 1 tab po bid\" (2) \"Drug Y 2 caps po hs\" (3) \"Drug Z 1 tab po q6h prn\". Answers: (1) Take 1 tablet by mouth twice a day. (2) Take 2 capsules by mouth at bedtime. (3) Take 1 tablet by mouth every 6 hours as needed. Then list the parts that are missing from this note: \"Drug X 10 mg, #30, Dr. Lee\".",
          youCanNow: "name the parts of a prescription, read common sig abbreviations, spot error-prone writing and flag unclear orders.",
          quickCheck: [
            { objective: "O2", q: "In practice, what does \"1 tab po tid\" mean?", options: ["Take 1 tablet at bedtime", "Take 1 tablet by mouth three times a day", "Take 1 tablet every other day", "Take 3 tablets once"], answer: 1, why: "po means by mouth and tid means three times a day." },
            { objective: "O2", q: "A practice prescription has no directions (sig). What do you do?", options: ["Write the usual directions yourself", "Leave the label blank", "Ask the customer how they take it", "Flag it for the pharmacist"], answer: 3, why: "A missing or unclear part is never guessed; the pharmacist handles it with the prescriber." }
          ]
        },
        {
          title: "Practice pharmacy math",
          objectives: ["O3"],
          minutes: 6,
          goal: "Solve practice-only problems for conversions, quantity and days' supply.",
          text: [
            "Practice only: these are made-up numbers for exam practice, never directions for a real patient. In real work the pharmacist checks every calculation.",
            "Conversions to know: 1 gram (g) = 1,000 milligrams (mg). 1 liter (L) = 1,000 milliliters (mL). 1 kilogram (kg) is about 2.2 pounds (lb). 1 teaspoon (tsp) = 5 mL and 1 tablespoon (tbsp) = 15 mL. 1 fluid ounce is about 30 mL.",
            "Days' supply tells how long the medicine will last: days' supply = quantity ÷ amount used per day. Practice: Drug X, 1 tablet twice a day, 60 tablets. Used per day = 2. 60 ÷ 2 = 30 days. Quantity works the other way: quantity = amount per day × days. Practice: Drug Y, 1 capsule three times a day for 10 days = 3 × 10 = 30 capsules.",
            "Always write the units, set up the problem before you press the calculator, and check if the answer makes sense. A 30-day supply of 6,000 tablets does not."
          ],
          steps: ["Write what you know, with units.", "Write what you need to find.", "Convert to the same units if needed.", "Set up the problem, then calculate.", "Ask: does the answer make sense?"],
          words: [["mg", "milligram: one thousandth of a gram."], ["mL", "milliliter: one thousandth of a liter."], ["Days' supply", "how many days a prescription will last if taken as directed."], ["Conversion", "changing a number from one unit to another, like grams to milligrams."]],
          slides: [
            { title: "Practice only", bullets: ["Made-up numbers for exam practice", "The pharmacist checks every real calculation"] },
            { title: "Conversions to know", bullets: ["1 g = 1,000 mg  •  1 L = 1,000 mL", "1 kg ≈ 2.2 lb  •  1 fl oz ≈ 30 mL", "1 tsp = 5 mL  •  1 tbsp = 15 mL"] },
            { title: "Days' supply and quantity", bullets: ["Days = quantity ÷ amount per day", "60 tablets ÷ 2 a day = 30 days", "Quantity = per day × days: 3 × 10 = 30"] },
            { title: "Work like a pro", bullets: ["Write units every time", "Set up before you calculate", "Check if the answer makes sense"] }
          ],
          tryIt: "Practice only, made-up numbers. Solve and show your work: (1) 2.5 g = ? mg (2) 3 tsp = ? mL (3) 132 lb = ? kg (4) Drug X, 1 tablet 3 times a day, 90 tablets: days' supply? (5) Drug Y, 2 capsules twice a day for 14 days: quantity? Answers: 2,500 mg; 15 mL; 60 kg; 30 days; 56 capsules.",
          youCanNow: "convert common units and work out days' supply and quantity on practice problems, showing your work.",
          quickCheck: [
            { objective: "O3", q: "Practice only: how many milligrams are in 0.5 grams?", options: ["5 mg", "50 mg", "5,000 mg", "500 mg"], answer: 3, why: "1 g = 1,000 mg, so 0.5 × 1,000 = 500 mg." },
            { objective: "O3", q: "Practice only: Drug X, 1 tablet twice a day, 28 tablets. What is the days' supply?", options: ["14 days", "28 days", "56 days", "7 days"], answer: 0, why: "Days' supply = 28 tablets ÷ 2 per day = 14 days." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: The job, prescriptions and math",
        questions: [
          { objective: "O1", q: "Which exam does NHA give for pharmacy technicians?", options: ["PTCE", "CPC", "ExCPT", "NCLEX"], answer: 2, why: "NHA's pharmacy technician exam is the ExCPT." },
          { objective: "O1", q: "Where do you find your state board of pharmacy?", options: ["The NABP's list of boards of pharmacy", "A drug company ad", "A coupon website", "The back of a pill bottle"], answer: 0, why: "NABP lists every state board of pharmacy with its website." },
          { objective: "O2", q: "What does \"prn\" mean on a practice prescription?", options: ["By mouth", "At bedtime", "Twice a day", "As needed"], answer: 3, why: "prn means as needed." },
          { objective: "O2", q: "Which way of writing a strength is safe?", options: [".5 mg", "0.5 mg", "5.0 mg", "5.00 mg"], answer: 1, why: "Use a leading zero and no trailing zero, so 0.5 mg is not misread." },
          { objective: "O3", q: "Practice only: 2 tablespoons equal how many milliliters?", options: ["10 mL", "15 mL", "30 mL", "60 mL"], answer: 2, why: "1 tbsp = 15 mL, so 2 tbsp = 30 mL." }
        ]
      }
    },
    {
      name: "Chapter 2: Safety, rules and privacy",
      lessons: [
        {
          title: "Safety checks: the right drug for the right patient",
          objectives: ["O4"],
          minutes: 5,
          goal: "Check a practice order against the prescription and flag any mismatch.",
          text: [
            "Most errors come from small slips: the wrong patient, a drug with a similar name, the wrong strength, or the wrong bottle from the shelf. Technicians help catch them before the pharmacist's final check.",
            "Use two patient identifiers, such as full name and date of birth, every time you take in or hand out a prescription. Two people can have the same name.",
            "Every drug package has a National Drug Code (NDC), the FDA's three-part number that identifies the maker, the product and the package. Matching the NDC on the stock bottle to the one in the computer (often by scanning the barcode) confirms you picked the right drug, strength and package. The FDA plans to change NDCs to one 12-digit format in the future, so learn the idea, not one length.",
            "Watch for look-alike and sound-alike drug names. Read the full name, the strength and the form on the bottle, not just the first letters. If anything does not match, stop and tell the pharmacist."
          ],
          steps: ["Confirm two patient identifiers: name and date of birth.", "Compare the drug name on the bottle with the prescription, letter by letter.", "Compare the strength and the dosage form.", "Scan or compare the NDC on the stock bottle.", "Stop and flag any mismatch for the pharmacist."],
          words: [["NDC", "National Drug Code: the FDA's three-part number for a drug's maker, product and package."], ["Patient identifiers", "details such as full name and date of birth used to make sure you have the right person."], ["Look-alike, sound-alike drugs", "drugs with names that look or sound similar and are easy to mix up."], ["Stock bottle", "the large container the pharmacy counts medicine from."]],
          slides: [
            { title: "Small slips, big harm", bullets: ["Wrong patient or wrong strength", "Similar drug names", "Wrong bottle from the shelf"] },
            { title: "Two patient identifiers", bullets: ["Full name and date of birth", "At drop-off and at pick-up"] },
            { title: "Match the NDC", bullets: ["FDA's three-part number: maker, product, package", "Scan or compare it with the computer", "Confirms drug, strength and package"] },
            { title: "Read the whole label", bullets: ["Full name, strength and form", "Not just the first letters", "Mismatch? Stop and tell the pharmacist"] }
          ],
          sources: [
            { name: "FDA: National Drug Code Directory", url: "https://www.fda.gov/drugs/drug-approvals-and-databases/national-drug-code-directory" }
          ],
          tryIt: "Practice only. Write three made-up practice orders on paper, each with a patient name, date of birth, drug, strength and NDC. Have a friend copy them as \"stock bottle labels\" and secretly change one detail in two of them. Compare each pair the way you learned and circle every mismatch.",
          youCanNow: "check a practice order against the prescription with two patient identifiers and the NDC, and flag every mismatch.",
          quickCheck: [
            { objective: "O4", q: "Which pair is two patient identifiers?", options: ["Full name and date of birth", "Name and favorite color", "Drug name and strength", "Phone model and email"], answer: 0, why: "Full name and date of birth are commonly used together to confirm the right patient." },
            { objective: "O4", q: "The NDC on the stock bottle does not match the computer. What do you do?", options: ["Fill it anyway; the name is close", "Change the computer to match", "Stop and tell the pharmacist", "Give the customer a discount"], answer: 2, why: "An NDC mismatch can mean the wrong drug, strength or package, so you stop and flag it." }
          ]
        },
        {
          title: "Your role, the pharmacist's role and controlled substances",
          objectives: ["O5"],
          minutes: 5,
          goal: "Sort practice tasks into technician work or pharmacist work.",
          text: [
            "Technicians do technical work: take in and enter prescriptions, count, label, manage stock, process insurance and help at the register. Pharmacists do the clinical work: the final check, counseling about how to take a medicine, side effects, drug interactions and any \"Is this safe for me?\" question. Your state sets the exact line, so learn your state's rules.",
            "A simple rule: if a customer asks about their health or their medicine, the answer is \"Let me get the pharmacist for you.\" Never give your own advice, even if you think you know.",
            "Controlled substances are drugs the federal Drug Enforcement Administration (DEA) places in Schedules I to V, based on their accepted medical use and their risk of misuse and dependence. Schedule I drugs have no accepted medical use in the US; Schedule II drugs have a high risk of misuse; risk gets lower toward Schedule V. They have extra rules for storage, counting, records and refills, and states can add more.",
            "For exams, know the five schedules, that the pharmacy keeps careful records of every controlled drug, and that any missing count is reported to the pharmacist right away."
          ],
          steps: ["Ask: is this a technical task or a health question?", "Technical: do it carefully, following store policy and state rules.", "Health or medicine question: get the pharmacist.", "Controlled substance: follow the extra rules for counts, records and storage.", "Anything missing or odd: tell the pharmacist right away."],
          words: [["Counseling", "when the pharmacist explains to a patient how to take a medicine and what to watch for."], ["Controlled substance", "a drug the law controls more closely because it can be misused or cause dependence."], ["DEA", "the Drug Enforcement Administration, the federal agency that enforces controlled substance laws."], ["Schedule", "one of five groups (I to V) that controlled substances are placed in."]],
          slides: [
            { title: "Technician work", bullets: ["Enter, count, label, stock", "Insurance and register", "Done carefully, by state rules"] },
            { title: "Pharmacist work", bullets: ["Final check and counseling", "Side effects and interactions", "Any \"Is this safe for me?\" question"] },
            { title: "Controlled substances", bullets: ["DEA Schedules I to V", "I: no accepted medical use; II: high misuse risk", "Extra rules for storage, counts, records, refills"] },
            { title: "Say it every time", bullets: ["\"Let me get the pharmacist for you.\"", "Never give your own medical advice"] }
          ],
          sources: [
            { name: "DEA: Drug scheduling", url: "https://www.dea.gov/drug-information/drug-scheduling" },
            { name: "NABP: State boards of pharmacy (technician rules)", url: "https://nabp.pharmacy/about/boards-of-pharmacy/" }
          ],
          tryIt: "Practice only. Sort these into Technician or Pharmacist: (1) counting tablets for a filled order, (2) a customer asks if she can take her new medicine with her allergy pills, (3) restocking a delivery, (4) a customer asks what side effects to expect, (5) entering a new prescription. Answers: 1, 3 and 5 Technician; 2 and 4 Pharmacist. Then write the exact words you will say to send a question to the pharmacist.",
          youCanNow: "tell technician work from pharmacist work, send every health question to the pharmacist, and name the five controlled substance schedules.",
          quickCheck: [
            { objective: "O5", q: "A customer asks if his new medicine is safe with alcohol. What do you say?", options: ["\"It should be fine.\"", "\"Check online.\"", "\"Never drink again.\"", "\"Let me get the pharmacist for you.\""], answer: 3, why: "Questions about safety and interactions are clinical; only the pharmacist answers them." },
            { objective: "O5", q: "Which federal agency places drugs in Schedules I to V?", options: ["The DEA", "The post office", "The IRS", "The state motor vehicle office"], answer: 0, why: "The DEA enforces the controlled substance schedules." }
          ]
        },
        {
          title: "Privacy at the counter, and your study plan",
          objectives: ["O6"],
          minutes: 5,
          goal: "Share patient information only with people who need it, and only what they need.",
          text: [
            "A pharmacy holds private health information: names, birth dates, medicines, insurance. HIPAA, the federal health privacy law, protects it. Its \"minimum necessary\" idea means you use and share only what is needed for the task.",
            "At the counter: speak quietly, do not read drug names out loud for the line to hear, and confirm two identifiers before handing over a bag. On the phone: confirm who is calling before you share anything, and follow store policy on who may pick up for someone else.",
            "Never post about customers, never look up a neighbor's or a famous person's record out of curiosity, and keep screens and paperwork out of sight. Report privacy mistakes to the pharmacist or privacy officer right away.",
            "Now build your final task: your study and test plan and practice workbook."
          ],
          steps: ["Ask: does this person need this information for their job or care?", "Share only the minimum they need.", "Confirm two identifiers before handing out medicine.", "Speak quietly and keep screens and papers hidden.", "Report privacy mistakes right away."],
          words: [["HIPAA", "the federal law that protects the privacy and security of health information."], ["PHI", "protected health information: health information that can identify a person."], ["Minimum necessary", "using or sharing only the information needed for the task."]],
          slides: [
            { title: "HIPAA at the pharmacy", bullets: ["Names, birth dates, medicines, insurance", "Share only the minimum necessary"] },
            { title: "At the counter", bullets: ["Speak quietly", "Do not read drug names out loud", "Two identifiers before handing out a bag"] },
            { title: "Never", bullets: ["Post about customers", "Look up records out of curiosity", "Leave screens or papers in view"] },
            { title: "Final task", bullets: ["Your exam and your state's rules", "Weekly study dates to a test date", "Practice workbook attached"] }
          ],
          sources: [
            { name: "HHS: HIPAA for professionals (Privacy Rule)", url: "https://www.hhs.gov/hipaa/for-professionals/privacy/index.html" },
            { name: "PTCB: Certified Pharmacy Technician (CPhT)", url: "https://www.ptcb.org/credentials/certified-pharmacy-technician" }
          ],
          tryIt: "Final task. Write your study and test plan: the exam (PTCE or ExCPT), what your state board requires, and weekly study dates up to a target test date. Attach your practice workbook: 5 made-up prescriptions you read and checked, 10 practice math problems with work shown, and 5 customer questions you would send to the pharmacist. Use no real patient information.",
          youCanNow: "protect patient privacy at the counter and on the phone, and follow your own written plan toward a pharmacy technician exam.",
          quickCheck: [
            { objective: "O6", q: "A caller says he is a customer's neighbor and asks what medicine she picked up. What do you do?", options: ["Tell him; he is just being kind", "Read him her list", "Share nothing and follow store policy", "Tell him only the first medicine"], answer: 2, why: "HIPAA protects her information; a neighbor has no right to it." },
            { objective: "O6", q: "What helps protect privacy at the counter?", options: ["Reading drug names loudly", "Speaking quietly and confirming two identifiers", "Leaving bags open on the counter", "Showing the screen to the line"], answer: 1, why: "Quiet voices and identity checks keep health information private." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Safety, rules and privacy",
        questions: [
          { objective: "O4", q: "What does the NDC identify?", options: ["The patient's insurance", "The pharmacist's license", "The store's address", "The drug's maker, product and package"], answer: 3, why: "The NDC is the FDA's three-part number for maker, product and package." },
          { objective: "O4", q: "Two customers have the same name. How do you make sure you hand the bag to the right one?", options: ["Ask for the date of birth too", "Give it to whoever came first", "Ask what the medicine is for", "Check their shoes"], answer: 0, why: "A second identifier such as date of birth separates people with the same name." },
          { objective: "O5", q: "Which task is pharmacist work?", options: ["Restocking shelves", "Counseling a patient about side effects", "Running the register", "Counting tablets"], answer: 1, why: "Counseling about side effects is clinical work for the pharmacist." },
          { objective: "O5", q: "The count of a controlled substance is short. What do you do?", options: ["Fix the number in the record", "Ignore it until next month", "Tell the pharmacist right away", "Order more quietly"], answer: 2, why: "Controlled substances have strict records; any missing count is reported right away." },
          { objective: "O6", q: "What does \"minimum necessary\" mean at the pharmacy?", options: ["Use the smallest bags", "Fill the fewest orders", "Charge the lowest price", "Share only the information needed for the task"], answer: 3, why: "Under HIPAA you use and share only what is needed." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Pharmacy Technician Preparation",
    questions: [
      { objective: "O1", q: "Passing the PTCE earns which title?", options: ["Certified Pharmacy Technician (CPhT) from PTCB", "Registered Pharmacist", "Certified Professional Coder", "Licensed Practical Nurse"], answer: 0, why: "PTCB gives the CPhT to people who pass the PTCE." },
      { objective: "O1", q: "Rules for technicians are different in each state. Where do you check yours?", options: ["A drug ad", "Your state board of pharmacy", "A friend in another state", "The DEA's hiring page"], answer: 1, why: "Each state board of pharmacy sets technician rules." },
      { objective: "O1", q: "What does this course do for you?", options: ["Registers you with your state", "Gives you the CPhT", "Prepares you for a technician exam", "Lets you counsel patients"], answer: 2, why: "The course prepares you; the exam and the state give the credentials." },
      { objective: "O2", q: "Which is NOT one of the usual parts of a prescription?", options: ["Patient's name", "Drug strength", "Directions (sig)", "The patient's favorite store"], answer: 3, why: "A prescription has patient, drug, strength, form, sig, quantity, refills, date and prescriber." },
      { objective: "O2", q: "In practice, \"hs\" on a prescription means:", options: ["At bedtime", "By mouth", "As needed", "Four times a day"], answer: 0, why: "hs means at bedtime." },
      { objective: "O2", q: "Why is \"QD\" on the do-not-use lists?", options: ["It is too long", "It can be misread as QID (four times a day)", "It means by mouth", "It is a drug name"], answer: 1, why: "QD has been mistaken for QID; writing \"daily\" prevents the error." },
      { objective: "O2", q: "Practice only: \"Drug X 2 tabs po bid\" in plain words is:", options: ["Take 2 tablets at bedtime", "Take 1 tablet twice a day", "Take 2 tablets by mouth twice a day", "Take 2 tablets every 2 hours"], answer: 2, why: "po means by mouth and bid means twice a day." },
      { objective: "O3", q: "Practice only: 1 teaspoon equals how many milliliters?", options: ["1 mL", "15 mL", "30 mL", "5 mL"], answer: 3, why: "1 tsp = 5 mL." },
      { objective: "O3", q: "Practice only: Drug X, 1 capsule 4 times a day, 120 capsules. Days' supply?", options: ["30 days", "40 days", "120 days", "4 days"], answer: 0, why: "120 ÷ 4 per day = 30 days." },
      { objective: "O3", q: "Practice only: 3 grams equal how many milligrams?", options: ["30 mg", "300 mg", "3,000 mg", "0.003 mg"], answer: 2, why: "1 g = 1,000 mg, so 3 g = 3,000 mg." },
      { objective: "O3", q: "Practice only: 176 lb is about how many kilograms?", options: ["80 kg", "88 kg", "176 kg", "387 kg"], answer: 0, why: "176 ÷ 2.2 = 80 kg." },
      { objective: "O4", q: "Why match the NDC on the stock bottle?", options: ["To find the price", "To confirm the right drug, strength and package", "To find the patient's address", "It is not needed"], answer: 1, why: "The NDC identifies the exact product and package." },
      { objective: "O4", q: "Two drugs have names that start the same way. What protects the patient?", options: ["Reading only the first letters", "Picking the bottle closest to you", "Asking the customer to choose", "Reading the full name, strength and form"], answer: 3, why: "Look-alike names are caught by reading the whole label." },
      { objective: "O4", q: "You see a mismatch between the order and the bottle. What do you do?", options: ["Stop and flag it for the pharmacist", "Finish quickly and hope", "Fix the prescription yourself", "Throw the bottle away"], answer: 0, why: "Any mismatch stops the work until the pharmacist checks it." },
      { objective: "O5", q: "A customer asks whether two of her medicines are safe together. Who answers?", options: ["The technician", "Another customer", "The pharmacist", "The cashier"], answer: 2, why: "Drug interaction questions are clinical and go to the pharmacist." },
      { objective: "O5", q: "Schedule I controlled substances are:", options: ["Drugs with the lowest misuse risk", "Drugs with no accepted medical use in the US", "Vitamins", "All prescription drugs"], answer: 1, why: "Schedule I drugs have no accepted medical use in the US and a high risk of misuse." },
      { objective: "O5", q: "Which is technician work?", options: ["Counseling on side effects", "Making the final check", "Advising on interactions", "Entering a new prescription into the computer"], answer: 3, why: "Entering prescriptions is technical work; the pharmacist checks and counsels." },
      { objective: "O6", q: "Which law protects patient health information?", options: ["HIPAA", "OSHA", "The Clean Air Act", "The tax code"], answer: 0, why: "HIPAA protects the privacy of health information." },
      { objective: "O6", q: "A famous person fills a prescription at your store. What do you do?", options: ["Look up their record to see what they take", "Post that they were there", "Handle it like any customer and share nothing", "Tell your friends"], answer: 2, why: "Looking at or sharing a record without a work reason breaks HIPAA rules." },
      { objective: "O6", q: "You notice a coworker left a customer's papers on the counter. What do you do?", options: ["Leave them", "Read them", "Hand them to the next customer", "Put them out of sight and tell the pharmacist"], answer: 3, why: "Protect the information and report the privacy slip." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Pre-Test: What Do You Already Know?", from: [0, 3, 4, 7, 8, 11, 14, 15, 17] },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      { name: "Study and test plan", objective: "O1", notYet: "No exam named, or the state's rules are missing or guessed.", meets: "Names the exam and who gives it, the state board's requirement with its web address, and weekly dates to a test date.", exceeds: "Also names a training program and how the learner will meet the exam's eligibility." },
      { name: "Prescriptions read", objective: "O2", notYet: "Fewer than 4 of 5 prescriptions read correctly, or a missing part was not flagged.", meets: "At least 4 of 5 practice prescriptions have all parts named and directions in plain words.", exceeds: "All 5 are right, and every error-prone abbreviation is spotted." },
      { name: "Practice math", objective: "O3", notYet: "Fewer than 8 of 10 right, or no work shown.", meets: "At least 8 of 10 practice problems right, with units and work shown.", exceeds: "10 of 10 right, with a sense check written for each answer." },
      { name: "Safety checks", objective: "O4", notYet: "A planted mismatch was missed.", meets: "Every planted mismatch in name, strength or NDC was circled.", exceeds: "Explains how each mismatch could have harmed a patient." },
      { name: "Pharmacist questions", objective: "O5", notYet: "Gives own advice on a health question.", meets: "Lists 5 customer questions that go to the pharmacist and the words to hand them over.", exceeds: "Also explains the extra rules for controlled substances." },
      { name: "Privacy", objective: "O6", notYet: "Uses real patient information anywhere in the workbook.", meets: "Uses only made-up information.", exceeds: "Lists three counter or phone habits that protect privacy." }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Learners who enroll in a pharmacy technician training program or register with their state board within 90 days",
      "Learners who pass the PTCE or ExCPT (self-reported)",
      "Learners hired as pharmacy technicians or technician trainees within 6 months"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A phone or computer with internet for the PTCB, NHA, NABP and state board pages",
      "Paper, pen and a basic calculator",
      "Printed made-up prescriptions and stock labels for the safety-check practice",
      "About 75 minutes in total, in short sessions"
    ],
    facilitatorNotes: [
      "Keep every drug and number made up; do not answer learners' questions about their own medicines. Send them to their pharmacist.",
      "Print your state board of pharmacy's technician page so the group sees its real rules.",
      "Plant mismatches (name, strength, NDC) in the practice labels and let pairs find them.",
      "Have learners say \"Let me get the pharmacist for you\" out loud in role plays.",
      "Learners with a record: tell them to read PTCB's, NHA's and their state board's rules on background disclosure before they pay for training.",
      "Score the final task with the rubric and give feedback on one Not yet row at a time."
    ]
  }
};
