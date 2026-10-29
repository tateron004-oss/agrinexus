"use strict";

// Koach Learn course: Seniors -> "Medicare Basics" (one of the life-skills courses the owner asked for on 28 October 2026).
// Enrollment periods and penalties are from cms.gov (Original Medicare eligibility and enrollment); Open Enrollment dates from CMS partner materials;
// SHIP from shiphelp.org. medicare.gov blocked automated reading, so students are told to confirm dates, premiums and rules there or with SHIP.
// No premium amounts are quoted: they change every year. Shape: see scripts/koachlearn-courses/README.md.

module.exports = {
  id: "seniors-medicare-basics",
  category: "Seniors and Technology",
  name: "Medicare Basics",
  skills: "Knowing Parts A, B, C and D, Comparing Original Medicare and Medicare Advantage, Protecting your Medicare number, Finding your enrollment window, Reviewing your plan each fall, Getting free help from SHIP",
  outcome: "explain what Parts A, B, C and D cover, work out your own enrollment window, list what you need to compare plans, and get free, unbiased help from your State Health Insurance Assistance Program (SHIP) or 1-800-MEDICARE.",
  about: [
    "This course is for people turning 65, people already on Medicare who find it confusing, and family members who help a parent or grandparent with health insurance.",
    "You will learn what each part of Medicare covers, the difference between Original Medicare and Medicare Advantage, when you can sign up or make changes, how to protect your Medicare number from scams, and where to get free help from a real person.",
    "Each lesson takes about five minutes and ends with a \"Try it now\" task. There is a knowledge check after each chapter and a 20-question quiz at the end. Medicare rules, dates and costs change. Always confirm them at medicare.gov, by calling 1-800-MEDICARE, or with your local SHIP counselor, and ask your doctor or pharmacist about your own care."
  ],
  finalTask: "Make a one-page Medicare plan: your enrollment window (your Initial Enrollment Period months, or this year's Open Enrollment dates if you already have Medicare), which parts you have or need, a list of your doctors, medicines and pharmacy, three questions you want answered, and the free help you will use (your local SHIP, medicare.gov and 1-800-MEDICARE). Then contact your SHIP or use the plan comparison tool on medicare.gov.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "People in the United States who are turning 65 or already on Medicare, and family members who help them. Many feel confused by the parts, the deadlines and the flood of sales calls and ads each fall.",
    startingPoint: "Know that Medicare exists and may already have a card. Most cannot explain Parts A to D, do not know their own enrollment window, and have not used the medicare.gov plan comparison tool or heard of SHIP.",
    gap: "Missing an enrollment window can mean a lifelong late penalty, and the wrong plan can leave out a person's doctors or medicines. Knowing the parts, their own dates, how to compare plans and where to get free, unbiased help protects their health and money and keeps them away from Medicare scams.",
    constraints: [
      "Reading level: plain words, short sentences and large, simple steps",
      "Devices: a phone for calls, and a computer or tablet for medicare.gov if available",
      "Time: about 5 minutes per lesson at a relaxed pace",
      "Costs and some rules change every year; learners check medicare.gov, ssa.gov or SHIP for current amounts",
      "The course does not recommend a plan; Medicare numbers are never typed into AI or shared with callers"
    ],
    prerequisites: "None."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Given the four parts of Medicare", action: "explain what Parts A, B, C and D cover and the two main paths for coverage", standard: "getting at least 4 of 5 questions right" },
    { id: "O2", condition: "When someone asks for your Medicare number or a statement shows care you never got", action: "spot a Medicare scam and report it to 1-800-MEDICARE", standard: "sharing your number only with your doctors, pharmacy and plan" },
    { id: "O3", condition: "Given the month you turn 65 and your work coverage", action: "work out your Initial Enrollment Period and whether a Special Enrollment Period may apply", standard: "with the correct start and end months, confirmed with ssa.gov, medicare.gov or SHIP" },
    { id: "O4", condition: "Given your doctors, medicines and pharmacy", action: "compare plans on medicare.gov or with SHIP during Open Enrollment", standard: "looking at total yearly cost and checking that your doctors are in the network" },
    { id: "O5", condition: "When you have Medicare questions", action: "contact your local SHIP or 1-800-MEDICARE with your questions and lists ready", standard: "taking notes of the date, the person's name and the answer" }
  ],
  chapters: [
    {
      name: "Chapter 1: The parts of Medicare",
      lessons: [
        {
          objectives: ["O1"],
          title: "Who Medicare is for, and Parts A and B",
          minutes: 5,
          goal: "Say who can get Medicare and what Parts A and B cover.",
          text: [
            "Medicare is the US government's health insurance for people 65 or older, people under 65 with certain disabilities, and people of any age with End-Stage Renal Disease (permanent kidney failure). It is run by the Centers for Medicare & Medicaid Services (CMS).",
            "Medicare has parts, named with letters. Part A is hospital insurance. It helps cover care when you are admitted to a hospital, and also hospice and some home health care.",
            "Part B is medical insurance. It helps cover doctor visits, outpatient care (care where you go home the same day), many tests and preventive services such as some screenings and shots.",
            "Together, Part A and Part B are called Original Medicare. Most people do not pay a monthly premium for Part A if they or a spouse worked and paid Medicare taxes long enough. Most people pay a monthly premium for Part B. Premiums and deductibles change every year, so look up this year's amounts on medicare.gov or ask SHIP."
          ],
          words: [["Medicare", "the US government health insurance program for people 65 and older and some younger people with disabilities."], ["Premium", "the amount you pay each month to have insurance."], ["Deductible", "the amount you pay for care before insurance starts to pay."], ["Outpatient", "care where you go home the same day, like a doctor visit."]],
          slides: [
            { title: "Who Medicare is for", bullets: ["People 65 or older", "Some people under 65 with disabilities", "People with permanent kidney failure"] },
            { title: "Part A: hospital insurance", bullets: ["Hospital stays when you are admitted", "Hospice and some home health care"] },
            { title: "Part B: medical insurance", bullets: ["Doctor visits and outpatient care", "Many tests and preventive services"] },
            { title: "A + B = Original Medicare", bullets: ["Most pay no premium for Part A", "Most pay a monthly premium for Part B", "This year's costs: medicare.gov or SHIP"] }
          ],
          sources: [{ name: "CMS: Medicare (Parts A, B and D, who is eligible)", url: "https://www.cms.gov/about-cms/what-we-do/medicare" }],
          tryIt: "Write down two kinds of care you or a family member used in the last year, such as a hospital stay, a check-up or a blood test. Next to each, write whether it falls under Part A or Part B.",
          youCanNow: "say who Medicare is for and sort everyday care into Part A or Part B.",
          quickCheck: [
            { objective: "O1", q: "What is Original Medicare?", options: ["Part A and Part B together", "Part D only", "A Medicare Advantage plan", "A Medigap policy"], answer: 0, why: "Part A (hospital) and Part B (medical) together are called Original Medicare." },
            { objective: "O1", q: "Your neighbor is admitted to the hospital for three days. Which part mainly helps cover the hospital stay?", options: ["Part D", "Part B", "Part A", "None of them"], answer: 2, why: "Part A is hospital insurance for care when you are admitted." }
          ]
        },
        {
          objectives: ["O1","O4"],
          title: "Parts C and D: Medicare Advantage and drug plans",
          minutes: 5,
          goal: "Explain the difference between Original Medicare and a Medicare Advantage plan, and what Part D covers.",
          text: [
            "Part C is Medicare Advantage. These are plans from private insurance companies approved by Medicare. A Medicare Advantage plan gives you all your Part A and Part B benefits in one plan, and most also include drug coverage. Many have networks: lists of doctors and hospitals you are expected to use.",
            "Part D is prescription drug coverage. It is available to everyone with Medicare through private plans approved by Medicare. People with Original Medicare usually add a separate Part D drug plan.",
            "So there are two main paths. Path one: Original Medicare (A and B), often with a separate Part D drug plan, and some people also buy a Medicare Supplement Insurance (Medigap) policy to help with costs Original Medicare does not pay. Path two: a Medicare Advantage plan (Part C) that bundles A, B and usually D.",
            "Neither path is best for everyone. It depends on your doctors, your medicines, where you live and travel, and your budget. That is exactly what a free SHIP counselor helps you compare."
          ],
          words: [["Medicare Advantage (Part C)", "a plan from a private company, approved by Medicare, that includes Part A and Part B and often drug coverage."], ["Part D", "Medicare prescription drug coverage, offered through private plans."], ["Network", "the doctors, hospitals and pharmacies a plan works with."], ["Medigap", "Medicare Supplement Insurance: a private policy that helps pay costs Original Medicare does not."]],
          slides: [
            { title: "Part C: Medicare Advantage", bullets: ["Private plans approved by Medicare", "Includes A and B, most include drugs", "Often uses a network of doctors"] },
            { title: "Part D: prescription drugs", bullets: ["Available to everyone with Medicare", "Through private plans", "Often added to Original Medicare"] },
            { title: "Two main paths", bullets: ["Original Medicare + Part D (+ Medigap for some)", "Or a Medicare Advantage plan"] },
            { title: "Which is best for you?", bullets: ["Your doctors and medicines", "Where you live and travel", "Your budget: ask SHIP to compare"] }
          ],
          sources: [{ name: "CMS: Medicare Advantage and Part D plans", url: "https://www.cms.gov/medicare/enrollment-renewal/health-plans" }],
          tryIt: "List every doctor you see and every medicine you take, with the dose, and the pharmacy you use. Ask a family member to help if you like. Keep this list: it is what you need to compare plans.",
          youCanNow: "explain Parts C and D, describe the two main Medicare paths, and make the list you need to compare plans.",
          quickCheck: [
            { objective: "O1", q: "What is a Part D plan?", options: ["Hospital insurance", "Prescription drug coverage from a private plan approved by Medicare", "A dental plan", "A government pension"], answer: 1, why: "Part D is prescription drug coverage through private plans approved by Medicare." },
            { objective: "O1", q: "A friend says one path, Original Medicare or Medicare Advantage, is best for everyone. What do you say?", options: ["Agree and pick that one", "Always pick the cheaper premium", "Pick whatever a sales caller suggests", "It depends on your doctors, medicines, where you live and your budget"], answer: 3, why: "Neither path is best for everyone; a free SHIP counselor helps you compare." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Protecting your Medicare card and number",
          minutes: 4,
          goal: "Spot a Medicare scam and know who to tell.",
          text: [
            "Your red, white and blue Medicare card has a Medicare number on it. Treat it like a credit card. Show it to your doctors, pharmacy and plan, and keep it safe.",
            "Scammers call, text or knock pretending to be from Medicare. They may offer a \"free\" brace, test kit or new card, or say your benefits will stop unless you give your number. A real Medicare representative will not call you out of the blue to ask for your Medicare number or bank details.",
            "Check your statements. Original Medicare sends a Medicare Summary Notice, and plans send an Explanation of Benefits. Look for care you never got. If you see something wrong, or a caller asks for your number, report it to 1-800-MEDICARE.",
            "If a grandchild or friend helps you online, sit with them, use only the official site medicare.gov, and never type your Medicare number into a chatbot or a website you reached from a text message."
          ],
          steps: ["Keep your card safe and share the number only with your doctors, pharmacy and plan.", "Hang up on unexpected calls asking for your number.", "Read each Medicare Summary Notice or Explanation of Benefits.", "Report anything wrong to 1-800-MEDICARE."],
          words: [["Medicare Summary Notice", "a statement from Original Medicare that lists the care billed under your number."], ["Explanation of Benefits", "a statement from a plan that shows what was billed and what the plan paid."], ["Scam", "a trick to steal money or personal information."]],
          slides: [
            { title: "Treat your card like a credit card", bullets: ["Show it to your doctors, pharmacy and plan", "Keep it safe"] },
            { title: "Scam signs", bullets: ["\"Free\" braces, test kits or a new card", "\"Your benefits will stop\"", "Unexpected calls asking for your number"] },
            { title: "Check your statements", bullets: ["Medicare Summary Notice or Explanation of Benefits", "Look for care you never got", "Report problems to 1-800-MEDICARE"] }
          ],
          sources: [{ name: "Medicare.gov: Report fraud (confirm current steps here)", url: "https://www.medicare.gov/fraud" }],
          tryIt: "Find your latest Medicare Summary Notice or Explanation of Benefits (or ask a family member to help find it). Check three lines: was each one care you really got?",
          youCanNow: "keep your Medicare number safe, read your statements for problems, and know where to report a scam.",
          quickCheck: [
            { objective: "O2", q: "What is a Medicare Summary Notice?", options: ["A bill you must pay at once", "An ad for a new plan", "A statement from Original Medicare listing care billed to Medicare", "A new Medicare card"], answer: 2, why: "Check your Medicare Summary Notice or Explanation of Benefits for care you never got." },
            { objective: "O2", q: "A text says your Medicare benefits will stop unless you reply with your Medicare number. What do you do?", options: ["Do not reply, and report it to 1-800-MEDICARE", "Reply quickly to keep your benefits", "Send half of the number", "Forward it to friends"], answer: 0, why: "Medicare will not contact you out of the blue for your number; report it." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: The parts of Medicare",
        questions: [
          { objective: "O1", q: "Which part of Medicare is hospital insurance?", options: ["Part D", "Part A", "Part B", "Medigap"], answer: 1, why: "Part A helps cover hospital stays, hospice and some home health care." },
          { objective: "O1", q: "Your grandmother has a doctor's check-up. Which part usually helps pay?", options: ["Part A", "Part D", "Part B", "None"], answer: 2, why: "Part B covers doctor visits and outpatient care." },
          { objective: "O1", q: "What is Medicare Advantage?", options: ["A private plan approved by Medicare that includes Parts A and B", "A free phone", "A Social Security payment", "A type of hospital"], answer: 0, why: "Part C plans are private plans that bundle A, B and usually drug coverage." },
          { objective: "O1", q: "Where should you find this year's Part B premium?", options: ["A text message from a stranger", "Last year's newspaper", "A neighbor's guess", "Medicare.gov or your SHIP counselor"], answer: 3, why: "Premiums change every year; check the official source." },
          { objective: "O2", q: "Someone calls saying they are from Medicare and need your Medicare number to send a free brace. What do you do?", options: ["Give the number", "Hang up and report it to 1-800-MEDICARE", "Give your bank number instead", "Call them back on the number they gave"], answer: 1, why: "Medicare does not call out of the blue asking for your number; this is a common scam." }
        ]
      }
    },
    {
      name: "Chapter 2: Signing up on time and getting help",
      lessons: [
        {
          objectives: ["O3"],
          title: "Finding your enrollment window",
          minutes: 6,
          goal: "Work out your own Initial Enrollment Period and know what happens if you miss it.",
          text: [
            "Your first chance to sign up is your Initial Enrollment Period. It is 7 months long: it starts 3 months before the month you turn 65, includes your birthday month, and ends 3 months after. Example from CMS: if you turn 65 in June, your window is March through September.",
            "If you already get Social Security benefits when you turn 65, you are usually signed up for Parts A and B automatically. If not, you sign up through Social Security. Check ssa.gov or call Social Security to confirm how this works for you.",
            "If you or your spouse are still working and have health insurance through that job, you may be able to wait. CMS says you can sign up while you have that coverage, or within 8 months after the job or the coverage ends, whichever comes first. This is a Special Enrollment Period. Ask your employer's benefits office and SHIP before you decide to wait.",
            "If you miss your window and do not qualify for a Special Enrollment Period, you can sign up in the General Enrollment Period, January 1 to March 31 each year, with coverage starting the month after you sign up. But you may pay a late penalty for as long as you have Part B: CMS says the premium can go up 10% for each full 12-month period you could have had Part B and did not. There can also be a penalty for going without drug coverage; ask SHIP or check medicare.gov."
          ],
          steps: ["Write the month you turn 65.", "Count back 3 months and forward 3 months: that is your 7-month window.", "If you have job-based health insurance, ask your employer and SHIP whether you can wait.", "Put the first month of your window on your calendar.", "Confirm the details at ssa.gov, medicare.gov or with SHIP."],
          words: [["Initial Enrollment Period", "your first 7-month window to sign up for Medicare, around your 65th birthday."], ["Special Enrollment Period", "a chance to sign up outside the usual windows because of a life situation, like losing job-based coverage."], ["General Enrollment Period", "January 1 to March 31 each year, for people who missed their first window."], ["Late enrollment penalty", "a higher premium you pay for signing up late."]],
          slides: [
            { title: "Initial Enrollment Period: 7 months", bullets: ["3 months before your 65th birthday month", "Your birthday month", "3 months after"] },
            { title: "Example", bullets: ["Turn 65 in June", "Window: March through September"] },
            { title: "Still working with job insurance?", bullets: ["You may be able to wait", "Sign up within 8 months after it ends", "Ask your employer and SHIP first"] },
            { title: "Missed it?", bullets: ["General Enrollment: January 1 to March 31", "Part B penalty: up to 10% for each full year late", "Confirm at medicare.gov or with SHIP"] }
          ],
          sources: [
            { name: "CMS: Original Medicare (Part A and B) eligibility and enrollment", url: "https://www.cms.gov/medicare/enrollment-renewal/original-part-a-b" },
            { name: "Social Security: Sign up for Medicare", url: "https://www.ssa.gov/medicare/sign-up" }
          ],
          tryIt: "Work out the Initial Enrollment Period for yourself or for a family member: write the birthday month, then the first and last month of the 7-month window. If that person is already on Medicare, write the General Enrollment Period dates instead.",
          youCanNow: "work out an Initial Enrollment Period, know when you may wait, and know the cost of signing up late.",
          quickCheck: [
            { objective: "O3", q: "What is the Initial Enrollment Period?", options: ["Your 7-month window: 3 months before your 65th birthday month, that month, and 3 months after", "The fall Open Enrollment", "Any time you like", "One week after your birthday"], answer: 0, why: "It is 7 months long, centered on the month you turn 65." },
            { objective: "O3", q: "You turn 65 in October and have no job-based insurance. Which months are your window?", options: ["October only", "January through March", "October 15 to December 7", "July through January"], answer: 3, why: "Count back 3 months (July) and forward 3 months (January)." }
          ]
        },
        {
          objectives: ["O4"],
          title: "Reviewing your coverage every fall",
          minutes: 5,
          goal: "Use the fall Open Enrollment period to check whether your plan still fits.",
          text: [
            "Plans change every year: costs, covered drugs and which doctors are in the network. Each fall, Medicare has an Open Enrollment period from October 15 to December 7. During this time you can change your Medicare Advantage plan or Part D drug plan, or switch between Original Medicare and Medicare Advantage. Changes start January 1. If you are happy with your coverage, you do not have to do anything.",
            "Before Open Enrollment, plans send an Annual Notice of Change. Read it for changes to your premium, your drugs and your doctors.",
            "To compare plans, use the plan comparison tool on medicare.gov. Enter your medicines and pharmacy from the list you made in Lesson 2. Look at total yearly cost, not just the monthly premium, and check that your doctors are in the network.",
            "Be careful of pushy sales calls and ads during the fall. No one should pressure you to switch. A SHIP counselor is free and does not sell plans. People with Medicare Advantage may have another chance to change plans early in the year; check the dates on medicare.gov."
          ],
          steps: ["Read your plan's Annual Notice of Change when it arrives.", "Get your list of doctors, medicines and pharmacy.", "Between October 15 and December 7, compare plans on medicare.gov or with SHIP.", "Check total yearly cost and that your doctors are in the network.", "If you switch, write down the new plan and confirmation number."],
          words: [["Open Enrollment", "October 15 to December 7 each year, when people with Medicare can change plans for next year."], ["Annual Notice of Change", "a letter from your plan each fall that lists what will change next year."], ["Formulary", "a plan's list of covered drugs."]],
          slides: [
            { title: "Plans change every year", bullets: ["Costs, covered drugs, doctor networks", "Read your Annual Notice of Change"] },
            { title: "Open Enrollment", bullets: ["October 15 to December 7", "Change plans; new plan starts January 1", "Happy? You do not have to do anything"] },
            { title: "Compare the right way", bullets: ["Enter your medicines and pharmacy", "Look at total yearly cost", "Check your doctors are in the network"] },
            { title: "No pressure", bullets: ["Ignore pushy sales calls", "SHIP is free and does not sell plans"] }
          ],
          sources: [
            { name: "CMS: Medicare Open Enrollment outreach materials", url: "https://www.cms.gov/outreach-and-education/reach-out/find-tools-to-help-you-help-others/open-enrollment-outreach-and-media-materials" },
            { name: "Medicare.gov: Find and compare plans", url: "https://www.medicare.gov/plan-compare/" }
          ],
          tryIt: "Write this year's Open Enrollment dates on your calendar. Then find your plan's Annual Notice of Change (or ask a family member to help) and write down one thing that is changing next year. If you are not on Medicare yet, write the questions you would ask about a plan.",
          youCanNow: "use the fall Open Enrollment period to review your plan and compare options with your own medicines and doctors.",
          quickCheck: [
            { objective: "O4", q: "What is the Annual Notice of Change?", options: ["A letter from your plan listing next year's changes", "A Medicare penalty", "A new card", "A tax form"], answer: 0, why: "Plans send it before Open Enrollment so you can check changes to costs, drugs and doctors." },
            { objective: "O4", q: "Two drug plans look good. One has a lower monthly premium. What do you compare?", options: ["Only the monthly premium", "The total yearly cost with your own medicines and pharmacy", "Which plan calls you most", "The logo"], answer: 1, why: "Look at total yearly cost, not just the monthly premium." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Getting free help from SHIP and Medicare",
          minutes: 5,
          goal: "Contact free, unbiased Medicare help and come prepared with your questions.",
          text: [
            "You do not have to figure out Medicare alone. Every state has a State Health Insurance Assistance Program, or SHIP. SHIP gives local, one-on-one Medicare counseling at no cost to you. Counselors are unbiased: they do not sell insurance. They can help compare plan costs, review coverage, check networks and explain your options. Find yours at shiphelp.org.",
            "Medicare's own help: the official website medicare.gov, and the phone line 1-800-MEDICARE (1-800-633-4227), which CMS says is open 24 hours a day, 7 days a week. For sign-up questions about Parts A and B, contact Social Security at ssa.gov.",
            "Prepare before you call: have your Medicare card nearby (do not read the number to anyone who called you), your list of doctors and medicines, your plan's letters, and your questions written down. Take notes: the date, the person's name and what they said.",
            "A family member can join the call with your permission. If you ask an AI assistant to explain a Medicare letter, remove your name, Medicare number and other private details first, and still confirm the answer with SHIP or medicare.gov."
          ],
          steps: ["Go to shiphelp.org and choose your state to find your local SHIP.", "Write your questions and gather your doctor and medicine list.", "Call SHIP, or 1-800-MEDICARE, or use medicare.gov.", "Take notes: date, name and answer.", "Put the next deadline on your calendar."],
          words: [["SHIP", "State Health Insurance Assistance Program: free, unbiased local Medicare counseling."], ["Unbiased", "not trying to sell you anything or push one choice."]],
          slides: [
            { title: "SHIP: free local help", bullets: ["One-on-one Medicare counseling", "No cost, does not sell insurance", "Find yours at shiphelp.org"] },
            { title: "Medicare's own help", bullets: ["medicare.gov", "1-800-MEDICARE (1-800-633-4227), 24/7", "Sign-up questions: ssa.gov"] },
            { title: "Before you call", bullets: ["Your doctor and medicine list", "Your plan's letters", "Questions written down"] },
            { title: "During the call", bullets: ["Take notes: date, name, answer", "A family member can join", "Put the next deadline on your calendar"] }
          ],
          sources: [
            { name: "SHIP: State Health Insurance Assistance Programs", url: "https://www.shiphelp.org/" },
            { name: "Medicare.gov: Talk to someone (confirm phone hours here)", url: "https://www.medicare.gov/talk-to-someone" }
          ],
          tryIt: "Final task: make your one-page Medicare plan with your enrollment window, the parts you have or need, your doctors, medicines and pharmacy, three questions, and your SHIP's phone number from shiphelp.org. Then call your SHIP to book a counseling session, or use the plan comparison tool on medicare.gov with your medicine list.",
          youCanNow: "find and contact free Medicare help and come prepared with your own plan and questions.",
          quickCheck: [
            { objective: "O5", q: "What is SHIP?", options: ["An insurance company", "A Medicare Advantage plan", "A free, unbiased Medicare counseling program in every state", "A sales call center"], answer: 2, why: "SHIP gives free, one-on-one Medicare counseling and does not sell insurance." },
            { objective: "O5", q: "You are about to call SHIP. What do you have ready?", options: ["Nothing; they know everything about you", "Your bank card", "Your questions, your doctor and medicine list, and your plan's letters", "Your Social Security number to read aloud first"], answer: 2, why: "Prepare your questions, lists and letters, and take notes during the call." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Signing up on time and getting help",
        questions: [
          { objective: "O3", q: "You turn 65 in June. When is your Initial Enrollment Period?", options: ["Only in June", "January to March", "October 15 to December 7", "March through September"], answer: 3, why: "It starts 3 months before your birthday month and ends 3 months after." },
          { objective: "O3", q: "What can happen if you sign up for Part B late without a Special Enrollment Period?", options: ["You may pay a higher premium for as long as you have Part B", "Nothing at all", "You get a refund", "You can never get Medicare"], answer: 0, why: "CMS says the Part B premium can go up 10% for each full 12 months you were late." },
          { objective: "O4", q: "When is Medicare's fall Open Enrollment?", options: ["January 1 to March 31", "Your birthday month", "October 15 to December 7", "Any day you like"], answer: 2, why: "Each fall, people with Medicare can change plans from October 15 to December 7." },
          { objective: "O4", q: "What is the best way to compare drug plans?", options: ["Pick the lowest monthly premium only", "Enter your own medicines and pharmacy and look at total yearly cost", "Choose the plan a caller recommends", "Pick the plan with the nicest ad"], answer: 1, why: "Total yearly cost with your own medicines shows the real price." },
          { objective: "O5", q: "Which is true about SHIP?", options: ["It sells insurance plans", "It charges a fee per call", "It gives free, unbiased Medicare counseling", "It only helps people under 65"], answer: 2, why: "SHIP counseling is free, local and unbiased." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Medicare Basics",
    questions: [
      { objective: "O1", q: "Who can get Medicare?", options: ["Only people under 30", "People 65 or older, and some younger people with disabilities or kidney failure", "Only veterans", "Only people who live abroad"], answer: 1, why: "Medicare covers people 65+, some people with disabilities and people with End-Stage Renal Disease." },
      { objective: "O1", q: "Part B mainly covers:", options: ["Hospital stays", "Prescription drugs only", "Dental cleanings only", "Doctor visits and outpatient care"], answer: 3, why: "Part B is medical insurance for doctors and outpatient care." },
      { objective: "O1", q: "Original Medicare is:", options: ["Part A and Part B", "Part C only", "Part D only", "A private plan"], answer: 0, why: "Original Medicare means Parts A and B together." },
      { objective: "O1", q: "Most people pay a monthly premium for:", options: ["Nothing", "Part A only", "Part B", "Their Medicare card"], answer: 2, why: "Most people pay no Part A premium but do pay one for Part B." },
      { objective: "O1", q: "Part D covers:", options: ["Prescription drugs", "Hospital stays", "Eyeglasses only", "Housing"], answer: 0, why: "Part D is Medicare prescription drug coverage." },
      { objective: "O1", q: "A Medicare Advantage plan usually:", options: ["Covers only drugs", "Includes Parts A and B and often drug coverage", "Is run by your bank", "Replaces Social Security"], answer: 1, why: "Part C plans bundle A, B and usually D." },
      { objective: "O4", q: "What is a plan's network?", options: ["Its website", "Its phone number", "The doctors, hospitals and pharmacies it works with", "Its monthly bill"], answer: 2, why: "Many plans expect you to use their network." },
      { objective: "O4", q: "What should you have ready to compare plans?", options: ["Your bank PIN", "A newspaper ad", "Nothing", "A list of your doctors, medicines and pharmacy"], answer: 3, why: "Your own doctors and medicines decide which plan fits." },
      { objective: "O2", q: "A caller offers a free test kit if you give your Medicare number. This is:", options: ["A normal Medicare service", "A likely scam", "A pharmacy refill", "A SHIP counselor"], answer: 1, why: "Medicare does not call out of the blue for your number; free offers are a common trick." },
      { objective: "O2", q: "Your Medicare Summary Notice lists a wheelchair you never got. You should:", options: ["Report it to 1-800-MEDICARE", "Ignore it", "Pay for it", "Throw away the notice"], answer: 0, why: "Care you never got can be fraud; report it." },
      { objective: "O3", q: "How long is the Initial Enrollment Period?", options: ["1 week", "1 month", "1 year", "7 months"], answer: 3, why: "3 months before, the birthday month and 3 months after." },
      { objective: "O3", q: "You get Social Security benefits before 65. Usually you are:", options: ["Never eligible", "Charged a penalty", "Signed up for Parts A and B automatically", "Moved to Part D only"], answer: 2, why: "People already on Social Security are usually enrolled automatically; confirm at ssa.gov." },
      { objective: "O3", q: "You are 66 and still covered by health insurance from your current job. What should you do before deciding to wait on Part B?", options: ["Nothing; waiting is always fine", "Cancel your job insurance", "Ask your employer's benefits office and SHIP", "Ask a sales caller"], answer: 2, why: "A Special Enrollment Period may apply, but check your situation first." },
      { objective: "O3", q: "The General Enrollment Period runs:", options: ["January 1 to March 31", "October 15 to December 7", "Only on your birthday", "June to August"], answer: 0, why: "CMS sets the General Enrollment Period as January 1 to March 31 each year." },
      { objective: "O3", q: "The Part B late penalty can raise the premium by:", options: ["1% once", "50% for one month", "Nothing", "10% for each full 12 months you could have had Part B but did not"], answer: 3, why: "CMS says the penalty is up to 10% per full 12-month period, as long as you have Part B." },
      { objective: "O4", q: "During fall Open Enrollment you can:", options: ["Change your Social Security number", "Change your Medicare Advantage or drug plan for next year", "Get cash from Medicare", "Only cancel Medicare"], answer: 1, why: "October 15 to December 7 is when you can change plans for January 1." },
      { objective: "O4", q: "Each fall your plan sends a letter listing next year's changes. It is the:", options: ["Annual Notice of Change", "Birthday card", "Tax return", "Credit report"], answer: 0, why: "Read the Annual Notice of Change before Open Enrollment." },
      { objective: "O5", q: "Where do you find your local SHIP?", options: ["A pop-up ad", "A text message link", "shiphelp.org", "Any insurance agent"], answer: 2, why: "shiphelp.org lists every state's SHIP." },
      { objective: "O5", q: "You want to ask an AI assistant to explain a Medicare letter. First you should:", options: ["Paste in your Medicare number", "Add your bank details", "Send a photo of your card", "Remove your name, Medicare number and other private details"], answer: 3, why: "Never share private numbers with AI tools; then confirm with SHIP or medicare.gov." },
      { objective: "O5", q: "When you call SHIP or 1-800-MEDICARE, a good habit is to:", options: ["Hang up quickly", "Take notes: date, name and answer", "Read your number to anyone who called you", "Forget your questions"], answer: 1, why: "Notes help you remember and follow up." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Pre-Test: What Do You Already Know?",
    from: [
      1,
      4,
      7,
      8,
      10,
      14,
      15,
      17
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      {
        name: "Enrollment window",
        objective: "O3",
        notYet: "No window, or the months or dates are wrong.",
        meets: "The correct Initial Enrollment Period months, or this year's Open Enrollment dates if already on Medicare.",
        exceeds: "Notes whether a Special Enrollment Period may apply and where it was confirmed."
      },
      {
        name: "Parts you have or need",
        objective: "O1",
        notYet: "Parts are missing or mixed up.",
        meets: "Lists which parts you have or need and what each covers.",
        exceeds: "Names which path (Original Medicare or Medicare Advantage) you are looking at, and why."
      },
      {
        name: "Ready to compare",
        objective: "O4",
        notYet: "No list of doctors, medicines or pharmacy.",
        meets: "A list of doctors, medicines and pharmacy, ready for the plan comparison tool.",
        exceeds: "Used the tool or SHIP to compare total yearly cost and networks."
      },
      {
        name: "Free help and questions",
        objective: "O5",
        notYet: "No questions, or no free help listed.",
        meets: "Three clear questions and the free help you will use: your local SHIP, medicare.gov and 1-800-MEDICARE.",
        exceeds: "Contacted SHIP or used medicare.gov, and took notes of the date, name and answer."
      }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Learners who contact their SHIP or use the medicare.gov plan comparison tool within 30 days (follow-up survey)",
      "Learners who enroll within their window and avoid a late penalty",
      "Learners who report a suspected Medicare scam or a wrong charge to 1-800-MEDICARE"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Paper and pen for the one-page Medicare plan",
      "A list of the learner's doctors, medicines and pharmacy",
      "A phone, and a computer or tablet with internet for medicare.gov and shiphelp.org if available",
      "About 60 minutes in total, in short, relaxed sessions: lessons, practice, checks and the final task"
    ],
    facilitatorNotes: [
      "Do not recommend a plan or give insurance advice; refer learners to their local SHIP, which is free and unbiased.",
      "Check this year's premiums and Open Enrollment details on medicare.gov before each session.",
      "Never ask learners to share their Medicare number; use a sample card for practice.",
      "Invite a local SHIP counselor to a session if possible, especially before October 15.",
      "Score the final task with the rubric, and give feedback on one Not yet row at a time."
    ]
  }
};
