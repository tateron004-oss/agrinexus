"use strict";

// Koach Learn course: Workforce Development (wave 1, 30 October 2026) -> "Medical Billing and Coding Basics".
// Certification prep for an entry-level billing and coding job. It prepares learners; it does not grant NHA's CBCS, AAPC's CPC or AHIMA's CCA.
// Codes in this course are practice examples only: code sets change every year, so learners always check the current code book or official tool.

module.exports = {
  id: "medical-billing-coding",
  category: "Workforce Development",
  name: "Medical Billing and Coding Basics",
  skills: "Choosing a billing and coding credential, Following the billing cycle, Picking the right code set, Looking up a code the right way, Filling in a practice claim, Protecting patient privacy (HIPAA)",
  outcome: "turn a made-up doctor visit into a complete practice claim: pick the right diagnosis and service codes, fill in the main boxes of the claim form, check it before it goes out, and keep the patient's information private.",
  about: [
    "Medical billers and coders turn a doctor visit into codes and a claim, so the doctor's office gets paid by the insurance company. Many of these jobs are done in an office, and some are remote. This course is a first step for job seekers, veterans, people coming home from prison and adults changing careers.",
    "You will learn what the job is, which certifications employers ask for (such as the CBCS from NHA, the CPC from AAPC and the CCA from AHIMA), how a bill moves from check-in to payment, the three main code sets, how to look up a code the right way, how to fill in a practice claim, and how to protect patient privacy under HIPAA.",
    "This course prepares you. It does not give you a certificate. Each certification has its own rules, training, fees and exam, so you will check them on the official page. All patients and visits in this course are made up, and the codes are for practice only: codes change every year, so a real coder always uses the current code book.",
    "Each lesson takes about five minutes and ends with a \"Try it now\" task on paper or in a free spreadsheet. There is a short check after each lesson, a knowledge check after each chapter and a 20-question quiz at the end."
  ],
  finalTask: "Turn the made-up visit in Lesson 6 into a complete practice claim: write the diagnosis code and the service codes, fill in the main boxes of a practice 1500 claim form (on paper or in a spreadsheet), check it with your pre-send checklist, and write a one-page plan naming the certification you will aim for, where you will train and your target test date.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Adults looking for steady office work in health care: job seekers, veterans, people coming home from prison, young adults, immigrants and adults returning to learning. Many have never worked in a medical office. Some want remote work.",
    startingPoint: "Can read and write everyday English and use a phone or library computer. Most do not know medical words, code sets, insurance terms or how a claim is paid.",
    gap: "Billing and coding jobs ask for a credential and for basic skills on day one: knowing the billing cycle, choosing the right code set, looking codes up carefully, filling in a claim and keeping health information private. Learners need a clear map of the job and the credentials, and practice with each step, before they pay for a training program or an exam.",
    constraints: [
      "Reading level: plain words and short sentences; every medical and insurance word is explained",
      "Devices: a phone or library computer; paper works for every task",
      "Code books and some coding tools cost money; the course uses free official tools and made-up examples",
      "Codes change every year: every code shown is for practice only",
      "Privacy: no real patient information is used anywhere in the course",
      "Some certifications ask about background; learners check each program's own rules"
    ],
    prerequisites: "None. \"Excel and Spreadsheets\" and \"Health Literacy\" help but are not required."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Using the official NHA, AAPC and AHIMA pages", action: "compare three billing and coding certifications and write a study and test plan with dates", standard: "with the requirements checked on the official page, not guessed" },
    { id: "O2", condition: "Given the steps of a doctor visit out of order", action: "put the steps of the billing cycle in order, from scheduling to payment", standard: "with no step missing" },
    { id: "O3", condition: "Given five parts of a made-up visit", action: "match each part to the right code set: ICD-10-CM for the diagnosis, CPT for the doctor's service, HCPCS Level II for supplies", standard: "getting at least 4 of 5 right" },
    { id: "O4", condition: "Given a diagnosis from a made-up visit note", action: "look up a diagnosis code by finding the term in the index and then confirming it in the code list", standard: "every time, never coding from the index alone" },
    { id: "O5", condition: "Given a made-up visit and a blank practice claim form", action: "fill in the main claim boxes and find the reason a practice claim was denied", standard: "with the patient, insurance, codes and charges matching the visit" },
    { id: "O6", condition: "In practice situations at work", action: "share patient information only with people who need it, and only the minimum they need", standard: "in every situation, following HIPAA" }
  ],
  chapters: [
    {
      name: "Chapter 1: The job, the credentials and the codes",
      lessons: [
        {
          title: "The job and the certifications employers ask for",
          objectives: ["O1"],
          minutes: 5,
          goal: "Compare three billing and coding certifications and choose one to aim for.",
          text: [
            "A medical coder reads the doctor's notes and turns the diagnosis and the services into codes. A medical biller uses those codes to send a claim to the insurance company and follows it until it is paid. In small offices one person often does both.",
            "Employers often ask for a certification. Three common ones: the Certified Billing and Coding Specialist (CBCS) from NHA, the National Healthcareer Association; the Certified Professional Coder (CPC) from AAPC; and the Certified Coding Associate (CCA) from AHIMA, the American Health Information Management Association.",
            "Each has its own rules. For example, NHA's CBCS asks for a high school diploma or GED plus a training program or supervised work experience. Fees, exam rules and requirements change, so read the official page for each one before you pay for anything. This course prepares you; it does not give you a certificate.",
            "Watch out for programs that promise a job or a certificate in a few days. Ask any school which certification exam it prepares you for, and check that exam on the official page."
          ],
          steps: ["Open the official page for the CBCS (nhanow.com), the CPC (aapc.com) and the CCA (ahima.org).", "For each one, write down who gives it, what you need before the exam, and how you take the exam.", "Look at job posts near you and count which certification they ask for most.", "Pick one to aim for, and write a target month for the test."],
          words: [["Medical coder", "a person who turns the doctor's notes into standard codes."], ["Medical biller", "a person who sends claims to insurance companies and follows them until they are paid."], ["Certification", "proof from a testing organization that you passed its exam; also called a credential."], ["Claim", "a bill sent to an insurance company asking it to pay for a visit."]],
          slides: [
            { title: "Coder and biller", bullets: ["Coder: turns the doctor's notes into codes", "Biller: sends the claim and follows it until paid", "Small offices: one person often does both"] },
            { title: "Three common certifications", bullets: ["CBCS from NHA", "CPC from AAPC", "CCA from AHIMA"] },
            { title: "Check before you pay", bullets: ["Rules, fees and exams change", "Read each official page", "This course prepares you; it is not a certificate"] },
            { title: "Choose your path", bullets: ["Count what local job posts ask for", "Pick one certification", "Write a target test month"] }
          ],
          sources: [
            { name: "NHA: Certified Billing and Coding Specialist (CBCS)", url: "https://www.nhanow.com/certifications/billing-coding" },
            { name: "AAPC: Certified Professional Coder (CPC)", url: "https://www.aapc.com/certifications/cpc" },
            { name: "AHIMA: Certified Coding Associate (CCA)", url: "https://www.ahima.org/certification-careers/certifications-overview/cca/" }
          ],
          tryIt: "Make a three-column table on paper or in a spreadsheet: CBCS, CPC, CCA. For each, write who gives it and what you need before the exam, taken from the official page. Then look at five local job posts and circle the certification you will aim for.",
          youCanNow: "say what billers and coders do, name three certifications and who gives them, and pick one to aim for.",
          quickCheck: [
            { objective: "O1", q: "Who gives the CPC certification?", options: ["The doctor's office you work for", "AAPC", "Your state's motor vehicle office", "Any online school"], answer: 1, why: "The Certified Professional Coder (CPC) is AAPC's certification." },
            { objective: "O1", q: "A website says you can be a certified coder in three days for a small fee. What do you do first?", options: ["Pay quickly before the price goes up", "Tell employers you are certified", "Check the real exam's rules on the official page", "Skip training; the website is enough"], answer: 2, why: "Only the organization that gives the certification can tell you its real rules and exam." }
          ]
        },
        {
          title: "How a bill moves: the billing cycle",
          objectives: ["O2"],
          minutes: 5,
          goal: "Put the steps of the billing cycle in order, from scheduling to payment.",
          text: [
            "The billing cycle, also called the revenue cycle, is the path from the moment a patient books a visit to the moment the office is fully paid.",
            "The main steps: 1) Schedule the visit and check the insurance. 2) Check the patient in: confirm their name, date of birth and insurance card. 3) The doctor sees the patient and writes notes. 4) The coder turns the notes into codes. 5) The biller makes the claim and checks it. 6) The claim is sent to the insurance company. 7) The insurance company pays, pays part, or denies it, and sends an explanation. 8) The office bills the patient for what they owe, such as a copay, and follows up on anything unpaid.",
            "Mistakes early in the cycle cause problems later. A wrong insurance number at check-in can get a claim denied weeks later. That is why careful check-in matters as much as careful coding."
          ],
          steps: ["Schedule and check the insurance.", "Check the patient in and confirm their details.", "The doctor sees the patient and writes notes.", "Code the visit.", "Build and check the claim.", "Send the claim.", "Read the payment or denial.", "Bill the patient's share and follow up."],
          words: [["Billing cycle (revenue cycle)", "all the steps from booking a visit to being fully paid."], ["Copay", "a set amount the patient pays for a visit."], ["Deductible", "the amount a patient pays each year before the insurance starts paying for many services."], ["Payer", "the insurance company or government program that pays the claim."], ["Denial", "when the payer refuses to pay a claim."]],
          slides: [
            { title: "Booking to payment", bullets: ["Called the billing cycle or revenue cycle", "Every step affects getting paid"] },
            { title: "Front of the cycle", bullets: ["1. Schedule and check insurance", "2. Check in: name, date of birth, insurance card", "3. Doctor sees the patient and writes notes"] },
            { title: "Middle of the cycle", bullets: ["4. Code the visit", "5. Build and check the claim", "6. Send it to the payer"] },
            { title: "End of the cycle", bullets: ["7. Payer pays, pays part or denies", "8. Bill the patient's share and follow up", "Early mistakes cause late denials"] }
          ],
          tryIt: "Write the eight steps of the billing cycle on eight scraps of paper. Mix them up, then put them back in order without looking. Next to each step, write one mistake that could happen there, for example a misspelled name at check-in.",
          youCanNow: "list the steps of the billing cycle in order and say how an early mistake can cause a denial later.",
          quickCheck: [
            { objective: "O2", q: "Which step comes right after the coder turns the notes into codes?", options: ["Scheduling the visit", "Checking the patient in", "The payer sends the payment", "The biller builds and checks the claim"], answer: 3, why: "Coding comes first; then the biller builds the claim from those codes and checks it." },
            { objective: "O2", q: "At check-in, the patient's insurance number is typed wrong. What is the most likely result?", options: ["The claim may be denied later", "Nothing; the coder will notice", "The doctor gets paid faster", "The patient's copay goes down"], answer: 0, why: "The payer matches the claim to its member records; a wrong number often leads to a denial." }
          ]
        },
        {
          title: "The three code sets",
          objectives: ["O3"],
          minutes: 6,
          goal: "Match each part of a visit to the right code set.",
          text: [
            "A claim answers two questions: why did the patient come in, and what did the office do? Different code sets answer each one.",
            "ICD-10-CM codes say WHY: the diagnosis, sign or symptom. They start with a letter, then numbers, and may have a dot, for example I10 for high blood pressure with no known cause (practice example). In the US, the CDC's National Center for Health Statistics (NCHS) keeps ICD-10-CM.",
            "CPT codes say WHAT the doctor or other professional did: an office visit, a lab test, a procedure. They are five digits, for example 36415 for drawing blood from a vein (practice example). The American Medical Association (AMA) owns and updates CPT. CMS calls CPT \"HCPCS Level I\".",
            "HCPCS Level II codes cover things CPT does not, like supplies, equipment and ambulance rides. They are one letter and four digits. CMS (the Centers for Medicare & Medicaid Services) keeps them. All code sets are updated every year, so always use the current book or tool."
          ],
          words: [["Diagnosis", "the health problem the doctor finds or treats."], ["ICD-10-CM", "the code set for diagnoses in the US."], ["CPT", "the AMA's five-digit code set for services and procedures; also called HCPCS Level I."], ["HCPCS Level II", "CMS's code set for supplies, equipment and other items CPT does not cover; one letter and four digits."], ["CMS", "the Centers for Medicare & Medicaid Services, the federal agency that runs Medicare and works with states on Medicaid."]],
          slides: [
            { title: "Two questions every claim answers", bullets: ["WHY did the patient come in? (diagnosis)", "WHAT did the office do? (service or item)"] },
            { title: "ICD-10-CM: the why", bullets: ["Diagnoses, signs and symptoms", "Letter + numbers, often a dot: I10", "Kept in the US by CDC's NCHS"] },
            { title: "CPT: the what", bullets: ["Services by doctors and other professionals", "Five digits: 36415 (practice example)", "Owned by the AMA; also called HCPCS Level I"] },
            { title: "HCPCS Level II: items and extras", bullets: ["Supplies, equipment, ambulance rides", "One letter + four digits", "Kept by CMS; all sets change every year"] }
          ],
          sources: [
            { name: "CDC NCHS: ICD-10-CM", url: "https://www.cdc.gov/nchs/icd/icd-10-cm/index.html" },
            { name: "CMS: HCPCS (Level I is CPT, Level II is kept by CMS)", url: "https://www.cms.gov/medicare/coding-billing/healthcare-common-procedure-system" }
          ],
          tryIt: "Practice only. For this made-up visit, write the code set for each part: (1) sore throat, (2) office visit with the doctor, (3) rapid strep test, (4) high blood pressure, (5) a pair of crutches the patient takes home. Answers: 1 and 4 are ICD-10-CM, 2 and 3 are CPT, 5 is HCPCS Level II.",
          youCanNow: "say which code set answers why the patient came in and which answers what was done, and match parts of a visit to ICD-10-CM, CPT or HCPCS Level II.",
          quickCheck: [
            { objective: "O3", q: "Which code set do you use for the patient's diagnosis?", options: ["CPT", "HCPCS Level II", "ICD-10-CM", "A zip code"], answer: 2, why: "ICD-10-CM codes say why the patient came in: the diagnosis, sign or symptom." },
            { objective: "O3", q: "A patient goes home with a walker. Which code set usually covers the walker?", options: ["HCPCS Level II", "ICD-10-CM", "CPT", "No code is needed"], answer: 0, why: "Equipment and supplies that CPT does not cover use HCPCS Level II codes." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: The job, the credentials and the codes",
        questions: [
          { objective: "O1", q: "Which certification does NHA give for billing and coding?", options: ["CPC", "CCA", "CDL", "CBCS"], answer: 3, why: "NHA's billing and coding certification is the Certified Billing and Coding Specialist (CBCS)." },
          { objective: "O2", q: "What is the billing cycle?", options: ["The steps from booking a visit to being fully paid", "A bicycle for office workers", "The doctor's daily schedule", "The order of codes on a claim"], answer: 0, why: "The billing (revenue) cycle runs from scheduling to the last payment." },
          { objective: "O2", q: "The payer pays part of a claim. What is usually the next step?", options: ["Delete the claim", "Bill the patient for their share and follow up", "Change the diagnosis", "Schedule a new visit"], answer: 1, why: "After the payer's part, the office bills the patient's share, like a copay or deductible." },
          { objective: "O3", q: "Which is a CPT code format?", options: ["A letter and four digits", "A letter, numbers and a dot", "Five digits", "A ten-letter word"], answer: 2, why: "CPT codes are five digits; ICD-10-CM starts with a letter and HCPCS Level II is a letter plus four digits." },
          { objective: "O3", q: "Who keeps ICD-10-CM in the United States?", options: ["The CDC's National Center for Health Statistics", "The American Medical Association", "Each doctor's office", "The patient's employer"], answer: 0, why: "NCHS at the CDC keeps the US version of ICD-10, called ICD-10-CM." }
        ]
      }
    },
    {
      name: "Chapter 2: Codes, claims and privacy",
      lessons: [
        {
          title: "Looking up a code the right way",
          objectives: ["O4"],
          minutes: 5,
          goal: "Look up a diagnosis code in the index and confirm it in the code list.",
          text: [
            "ICD-10-CM has two main parts. The alphabetic index lists conditions by name, like a book index. The tabular list shows every code in order, with notes about when to use it and when not to.",
            "The rule coders follow: find the main word in the index first, then always confirm the code in the tabular list. Never code from the index alone, because the tabular list may say to add a character or use a different code.",
            "Look up the condition, not the body part. For \"acute sore throat\", the main word is pharyngitis (the medical word for a sore, swollen throat). Then read the notes in the tabular list before you pick the code. CPT has its own index and code list too, and works the same way.",
            "Free practice: the CDC's ICD-10-CM Browser Tool lets you search the code set online. In a real job, you use the current code book or the tool your employer pays for, and the doctor's notes, never a guess."
          ],
          steps: ["Read the doctor's note and find the diagnosis.", "Find the main word for the condition in the alphabetic index.", "Write down the code the index points to.", "Go to that code in the tabular list.", "Read the notes: \"includes\", \"excludes\", and whether more characters are needed.", "Pick the code that matches the note exactly."],
          words: [["Alphabetic index", "the part of the code book that lists conditions by name, A to Z."], ["Tabular list", "the part of the code book that lists every code in order, with rules for using it."], ["Main term", "the word for the condition you look up first, not the body part."], ["Specificity", "how exact a code is; coders use the most exact code the doctor's notes support."]],
          slides: [
            { title: "Two parts of the code book", bullets: ["Alphabetic index: conditions A to Z", "Tabular list: every code in order, with rules"] },
            { title: "The two-step rule", bullets: ["1. Find the main word in the index", "2. Confirm the code in the tabular list", "Never code from the index alone"] },
            { title: "Look up the condition", bullets: ["Main word = the condition, not the body part", "Read \"includes\" and \"excludes\" notes", "Use the most exact code the notes support"] },
            { title: "Practice for free", bullets: ["CDC's ICD-10-CM Browser Tool", "At work: current book or employer's tool", "Code from the doctor's notes, never a guess"] }
          ],
          sources: [
            { name: "CDC NCHS: ICD-10-CM and the ICD-10-CM Browser Tool", url: "https://www.cdc.gov/nchs/icd/icd-10-cm/index.html" }
          ],
          tryIt: "Practice only. Open the CDC's ICD-10-CM Browser Tool from the source link. Look up these made-up diagnoses: \"acute pharyngitis\", \"essential hypertension\" and \"type 2 diabetes without complications\". For each, write the main word you searched, the code you found and one note you read before choosing it.",
          youCanNow: "look up a diagnosis code in two steps, index then tabular list, and say why you never stop at the index.",
          quickCheck: [
            { objective: "O4", q: "You found a code in the alphabetic index. What do you do next?", options: ["Put it on the claim right away", "Confirm it in the tabular list and read its notes", "Ask the patient if it looks right", "Pick the shortest code nearby"], answer: 1, why: "The tabular list has the rules and may need extra characters; never code from the index alone." },
            { objective: "O4", q: "The note says \"acute bronchitis\". What is the main word to look up?", options: ["Acute", "Chest", "Lungs", "Bronchitis"], answer: 3, why: "You look up the condition (bronchitis), then find \"acute\" under it." }
          ]
        },
        {
          title: "Filling in a claim and fixing a denial",
          objectives: ["O5"],
          minutes: 6,
          goal: "Fill in the main boxes of a practice 1500 claim and find why a claim was denied.",
          text: [
            "Doctors' offices bill on the 1500 claim form, kept by the National Uniform Claim Committee (NUCC). The paper version in use is the 02/12 form. Most claims are sent electronically today, but the electronic claim has the same information, so learning the paper form teaches you the data.",
            "Main boxes to know (practice): Box 1a, the insured's ID number from the insurance card. Box 2, the patient's name. Box 21, the diagnosis codes, labeled A, B, C and so on. Box 24, the service lines: date of service (24A), the CPT or HCPCS code (24D), the diagnosis pointer that links the service to a diagnosis letter in Box 21 (24E) and the charge (24F). Box 33, the billing provider.",
            "Before a claim goes out, check it: right patient and ID, every service has a diagnosis pointer, codes are current, dates and charges match the visit. Catching mistakes now is cheaper than fixing a denial later.",
            "When a claim is denied, the payer sends a remittance (an explanation of the payment) with a reason. Common reasons: wrong ID or name, missing or invalid code, service not covered, missing prior authorization, a duplicate claim, or sent too late. Find the reason, fix it, and resend or appeal by the payer's rules."
          ],
          steps: ["Copy the insured's ID (1a) and the patient's name (2) exactly from the made-up card.", "Write the diagnosis codes in Box 21 as A, B, C.", "On each service line in Box 24, write the date, the CPT or HCPCS code, the diagnosis pointer and the charge.", "Fill in the billing provider (33).", "Check the claim with your pre-send checklist.", "If it comes back denied, read the reason, fix the cause and resend by the payer's rules."],
          words: [["1500 claim form", "the standard paper claim form for doctors' offices, kept by the NUCC."], ["Diagnosis pointer", "the letter on a service line (A, B, C) that links it to a diagnosis in Box 21."], ["Remittance (EOB or ERA)", "the payer's explanation of what it paid or denied, and why."], ["Prior authorization", "approval from the payer before some services are done."], ["Clean claim", "a claim with no errors, so it can be paid the first time."]],
          slides: [
            { title: "The 1500 claim form", bullets: ["Kept by the NUCC; paper version 02/12", "Electronic claims carry the same data"] },
            { title: "Main boxes (practice)", bullets: ["1a: insured's ID  •  2: patient's name", "21: diagnosis codes A, B, C...", "24: date, code, pointer, charge  •  33: billing provider"] },
            { title: "Check before you send", bullets: ["Right patient and ID", "Every service line has a pointer", "Current codes; dates and charges match"] },
            { title: "Common denial reasons", bullets: ["Wrong ID or name; missing or invalid code", "Not covered; no prior authorization", "Duplicate or sent too late: fix, then resend"] }
          ],
          sources: [
            { name: "NUCC: 1500 Claim Form", url: "https://www.nucc.org/index.php/1500-claim-form-mainmenu-35" }
          ],
          tryIt: "Practice only. Made-up patient: Sam Rivera, insured ID ABC123456. Visit on a date you choose: office visit (99213) for a sore throat (J02.9) with a rapid strep test (87880), charges $100 and $25 (made-up). On paper or in a spreadsheet, fill in Boxes 1a, 2, 21, 24 (two lines) and 33 (\"Practice Clinic\"). Then the claim comes back: \"invalid member ID\". Write what you would check and fix.",
          youCanNow: "fill in the main boxes of a practice claim, check it before it goes out, and find and fix the reason for a denial.",
          quickCheck: [
            { objective: "O5", q: "Where do the diagnosis codes go on the 1500 form?", options: ["Box 2", "Box 33", "Box 21", "Box 1a"], answer: 2, why: "Box 21 holds the diagnosis codes, lettered A, B, C and so on." },
            { objective: "O5", q: "A claim is denied with \"service requires prior authorization\". What was missing?", options: ["The payer's approval before the service", "The patient's middle name", "A second copy of the claim", "The doctor's signature on the paper chart"], answer: 0, why: "Prior authorization is the payer's approval before some services; without it the claim is denied." }
          ]
        },
        {
          title: "Protecting patient privacy, and your practice claim",
          objectives: ["O6"],
          minutes: 5,
          goal: "Share patient information only with people who need it, and only what they need.",
          text: [
            "Billers and coders see private health information every day: names, birth dates, diagnoses, insurance numbers. HIPAA is the federal law that protects it. Its Privacy Rule covers health plans, most doctors' offices and hospitals, and the companies that work for them, such as billing companies.",
            "Protected health information (PHI) is any health information that can identify a person. The \"minimum necessary\" rule means you use and share only what is needed for the job. A payer may need the diagnosis code on the claim; a coworker in the break room does not need to hear it.",
            "Everyday habits: lock your screen when you step away, never talk about patients in public, check the identity of anyone who calls, send claims only through approved systems, and never email or text PHI from a personal account. If you see a privacy mistake, tell your supervisor or privacy officer right away.",
            "Now put it all together in your final task: a complete practice claim and your certification plan."
          ],
          steps: ["Before sharing, ask: does this person have a work reason to know?", "Share only the minimum they need.", "Confirm who is calling before you give out anything.", "Lock your screen and use only approved systems.", "Report privacy mistakes to your supervisor or privacy officer."],
          words: [["HIPAA", "the federal law that protects the privacy and security of health information."], ["PHI", "protected health information: health information that can identify a person."], ["Minimum necessary", "the HIPAA idea of using or sharing only the information needed for the task."], ["Privacy officer", "the person at work in charge of privacy rules and reports."]],
          slides: [
            { title: "HIPAA protects patients", bullets: ["Federal privacy law for health information", "Covers health plans, most doctors and their billing companies"] },
            { title: "Minimum necessary", bullets: ["Share only with people who need it for the job", "Share only what they need"] },
            { title: "Everyday habits", bullets: ["Lock your screen", "No patient talk in public", "Confirm who is calling", "Approved systems only, never personal email"] },
            { title: "Final task", bullets: ["Complete the practice claim", "Check it with your pre-send checklist", "Write your certification plan with dates"] }
          ],
          sources: [
            { name: "HHS: HIPAA for professionals (Privacy Rule)", url: "https://www.hhs.gov/hipaa/for-professionals/privacy/index.html" }
          ],
          tryIt: "Final task, practice only. Made-up visit: Ana Lee, insured ID XYZ987654, sees the doctor (99213) for high blood pressure (I10) and has blood drawn from a vein (36415); made-up charges $100 and $15. Fill in a practice 1500 claim (Boxes 1a, 2, 21, 24, 33), check it with a pre-send checklist you write yourself, and add a one-page plan: your certification, where you will train, and a target test date. Use no real patient information.",
          youCanNow: "protect patient information with the minimum necessary rule and turn a made-up visit into a complete, checked practice claim.",
          quickCheck: [
            { objective: "O6", q: "A caller says she is a patient's sister and asks for his diagnosis. What do you do?", options: ["Read her the diagnosis to be helpful", "Text it to her later", "Tell her the diagnosis code only", "Follow your office's rules to confirm who may get information; do not share it"], answer: 3, why: "HIPAA limits who may get PHI; you follow your office's rules and share nothing until you confirm." },
            { objective: "O6", q: "What does \"minimum necessary\" mean?", options: ["Share only the information needed for the task", "Work the fewest hours possible", "Code only one diagnosis per claim", "Charge the lowest price"], answer: 0, why: "Under HIPAA you use and share only the information needed for the job." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Codes, claims and privacy",
        questions: [
          { objective: "O4", q: "Why do coders never code from the alphabetic index alone?", options: ["The index is always out of date", "The index has no codes in it", "The tabular list has rules and may need more characters", "Payers do not accept index codes"], answer: 2, why: "The tabular list's notes can change the code or require extra characters." },
          { objective: "O5", q: "What does the diagnosis pointer in Box 24E do?", options: ["Shows the payer's address", "Links a service line to a diagnosis in Box 21", "Points to the patient's home", "Lists the doctor's license"], answer: 1, why: "The pointer letter ties each service to the diagnosis that explains it." },
          { objective: "O5", q: "A claim is denied as \"duplicate\". What is the best first step?", options: ["Check whether the same claim was already sent or paid", "Send it three more times", "Change the codes so it looks different", "Bill the patient for everything"], answer: 0, why: "A duplicate denial means the payer already has it; check its status instead of resending." },
          { objective: "O6", q: "You need to step away from your desk with a claim on the screen. What do you do?", options: ["Leave it open; you will be quick", "Ask a visitor to watch it", "Turn the screen to face the wall", "Lock your screen"], answer: 3, why: "Locking your screen keeps PHI from people who should not see it." },
          { objective: "O6", q: "Which is protected health information (PHI)?", options: ["A blank claim form", "The office's opening hours", "A patient's name with their diagnosis", "The name of a code book"], answer: 2, why: "Health information that can identify a person is PHI." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Medical Billing and Coding Basics",
    questions: [
      { objective: "O1", q: "What does a medical coder do?", options: ["Turns the doctor's notes into standard codes", "Draws blood from patients", "Sells insurance plans", "Fixes office computers"], answer: 0, why: "Coders turn diagnoses and services from the notes into codes." },
      { objective: "O1", q: "Where should you check a certification's current requirements and fees?", options: ["A social media post", "A friend who took it years ago", "The certifying organization's official page", "Any training ad"], answer: 2, why: "Rules and fees change; the official page has the current ones." },
      { objective: "O1", q: "Which pair is correct?", options: ["CPC from NHA", "CBCS from AHIMA", "CCA from AAPC", "CCA from AHIMA"], answer: 3, why: "The CCA is AHIMA's; the CPC is AAPC's; the CBCS is NHA's." },
      { objective: "O1", q: "What does this course give you?", options: ["A coding license", "Preparation for a certification exam", "A guaranteed job", "A CPC certificate"], answer: 1, why: "The course prepares you; certifications come only from passing the official exam." },
      { objective: "O2", q: "Which is the first step of the billing cycle?", options: ["Schedule the visit and check the insurance", "Send the claim", "Bill the patient", "Code the visit"], answer: 0, why: "The cycle begins when the visit is booked and the insurance is checked." },
      { objective: "O2", q: "Which step comes right before sending the claim?", options: ["Patient check-in", "Building and checking the claim", "Scheduling", "The payer's payment"], answer: 1, why: "The biller builds and checks the claim, then sends it." },
      { objective: "O2", q: "What is a copay?", options: ["A copy of the claim", "A payment from the payer to the doctor", "A set amount the patient pays for a visit", "A coding error"], answer: 2, why: "A copay is a set amount the patient pays." },
      { objective: "O3", q: "A patient comes in with a cough. Which code set describes the cough?", options: ["CPT", "HCPCS Level II", "None", "ICD-10-CM"], answer: 3, why: "Signs, symptoms and diagnoses use ICD-10-CM." },
      { objective: "O3", q: "Who owns and updates the CPT code set?", options: ["The American Medical Association", "The patient's employer", "Each state", "The NUCC"], answer: 0, why: "The AMA owns CPT; CMS calls it HCPCS Level I." },
      { objective: "O3", q: "Which code looks like a HCPCS Level II code?", options: ["99213", "I10", "E0100 (practice example)", "36415"], answer: 2, why: "HCPCS Level II codes are one letter followed by four digits." },
      { objective: "O3", q: "How often do the code sets change?", options: ["Never", "Every year", "Every 50 years", "Only when a doctor asks"], answer: 1, why: "Code sets are updated every year, so coders use the current book or tool." },
      { objective: "O4", q: "In the code book, which part lists conditions from A to Z?", options: ["The alphabetic index", "The tabular list", "The claim form", "The remittance"], answer: 0, why: "The alphabetic index lists conditions by name." },
      { objective: "O4", q: "The doctor writes \"chronic sinusitis\". What do you look up first?", options: ["Chronic", "Nose", "Sinusitis", "Head"], answer: 2, why: "Look up the condition (sinusitis), then the word \"chronic\" under it." },
      { objective: "O4", q: "What is a free official tool for practicing ICD-10-CM lookups?", options: ["A random coding forum", "A social media quiz", "The 1500 claim form", "The CDC's ICD-10-CM Browser Tool"], answer: 3, why: "The CDC's NCHS offers a free ICD-10-CM Browser Tool." },
      { objective: "O5", q: "Where does the insured's ID number go on the 1500 form?", options: ["Box 21", "Box 1a", "Box 24F", "Box 33"], answer: 1, why: "Box 1a holds the insured's ID number from the insurance card." },
      { objective: "O5", q: "Who keeps the 1500 claim form?", options: ["The National Uniform Claim Committee (NUCC)", "The patient", "The AMA", "Each doctor"], answer: 0, why: "The NUCC maintains the 1500 claim form." },
      { objective: "O5", q: "What is a \"clean claim\"?", options: ["A claim printed on new paper", "A claim with no charges", "A claim with no errors that can be paid the first time", "A claim sent by email"], answer: 2, why: "A clean claim has no errors, so the payer can pay it the first time." },
      { objective: "O5", q: "What does a remittance (EOB or ERA) tell you?", options: ["The patient's home address", "Tomorrow's schedule", "The doctor's license number", "What the payer paid or denied, and why"], answer: 3, why: "The remittance explains the payment or denial and gives the reason." },
      { objective: "O6", q: "A coworker on break asks what is wrong with a patient you coded. What do you do?", options: ["Tell them; they work here too", "Do not share; they have no work reason to know", "Whisper it quietly", "Show them the claim"], answer: 1, why: "Under the minimum necessary rule, PHI goes only to people who need it for their work." },
      { objective: "O6", q: "Which habit protects PHI?", options: ["Emailing claims from your personal account", "Talking about patients on the bus", "Using only approved work systems to send claims", "Leaving claims on the printer"], answer: 2, why: "Approved systems protect PHI; personal email and public talk do not." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Pre-Test: What Do You Already Know?", from: [0, 3, 4, 7, 9, 11, 14, 17, 18] },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      { name: "Certification plan", objective: "O1", notYet: "No certification named, or requirements guessed instead of checked.", meets: "Names one certification and who gives it, with requirements and a target test date taken from the official page.", exceeds: "Also lists a training program, weekly study dates and what local job posts ask for." },
      { name: "Right code sets", objective: "O3", notYet: "A diagnosis is coded with CPT, or a service with ICD-10-CM.", meets: "The diagnosis uses ICD-10-CM and each service uses CPT.", exceeds: "Can explain why each code belongs to its code set." },
      { name: "Codes looked up the right way", objective: "O4", notYet: "Codes copied without checking, or taken from the index alone.", meets: "Each diagnosis was found in the index and confirmed in the tabular list (or the CDC tool).", exceeds: "Notes the main word searched and one rule read for each code." },
      { name: "Claim boxes filled in", objective: "O5", notYet: "Boxes are missing, or the ID, codes or charges do not match the visit.", meets: "Boxes 1a, 2, 21, 24 and 33 are filled in and match the visit; every service line has a pointer.", exceeds: "Includes a written pre-send checklist that catches at least one planted mistake." },
      { name: "Billing cycle and follow-up", objective: "O2", notYet: "Cannot say what happens after the claim is sent.", meets: "Says the steps from sending to payment, and what to do if it is denied.", exceeds: "Names two denial reasons and the fix for each." },
      { name: "Privacy kept", objective: "O6", notYet: "Uses real patient information, or shares PHI with someone who does not need it.", meets: "Uses only made-up information and keeps the claim private.", exceeds: "Lists three daily habits that protect PHI at work." }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Learners who enroll in a billing and coding training program or register for a certification exam within 90 days",
      "Learners who pass a CBCS, CPC or CCA exam (self-reported)",
      "Learners hired into billing, coding, front desk or patient registration jobs within 6 months"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A phone or computer with internet for the official certification pages and the CDC ICD-10-CM Browser Tool",
      "Paper and pen, or a free spreadsheet (Google Sheets or Excel), for the practice claim",
      "A printed or drawn practice 1500 claim layout (boxes 1a, 2, 21, 24, 33)",
      "About 75 minutes in total, in short sessions"
    ],
    facilitatorNotes: [
      "Stress that all codes in the course are practice examples; check that learners know codes change every year.",
      "Never use real patient records or real insurance cards in class; use the made-up patients only.",
      "Bring printouts of local job posts so learners can see which certifications employers ask for.",
      "Plant one mistake (a wrong ID or a missing pointer) in a sample claim and let groups find it.",
      "Score the final task with the rubric and give feedback on one Not yet row at a time.",
      "Learners with a record: tell them to ask each certifying body and training program about its own rules, and to check job requirements in their state."
    ]
  }
};
