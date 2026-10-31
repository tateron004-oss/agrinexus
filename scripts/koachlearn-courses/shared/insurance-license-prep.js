"use strict";

// Koach Learn course (wave 3, workforce development): "Insurance Agent License Exam Preparation".
// For adults preparing for a US state insurance producer (agent) license exam. ADDIE parts follow the pilot, re-entry/reentry-ai-digital-confidence.js.
// Facts checked 30 October 2026: NAIC state insurance department finder (content.naic.org), NIPR (nipr.com), Texas Department of Insurance
// general lines life/health application page (exam by Pearson VUE, fingerprints, apply through Sircon or NIPR after passing, apply within one year of passing),
// and 18 U.S.C. 1033(e) (people with certain felony convictions need a regulator's written consent) on law.cornell.edu.
// Not confirmed: the NAIC Unfair Trade Practices model act PDF could not be read as text; the ethics lesson teaches the practices in general terms and sends learners to their state's outline.

const SRC = {
  naicDepts: { name: "NAIC: Find your state insurance department", url: "https://content.naic.org/state-insurance-departments" },
  nipr: { name: "NIPR: National Insurance Producer Registry (apply for and renew producer licenses)", url: "https://nipr.com/" },
  tdiAgent: { name: "Texas Department of Insurance: Agent licenses", url: "https://www.tdi.texas.gov/agent/index.html" },
  tdiLifeApply: { name: "Texas Department of Insurance: How to apply for a general lines life, accident, health and HMO license", url: "https://www.tdi.texas.gov/agent/general-life-apply.html" },
  usc1033: { name: "18 U.S.C. 1033 (Cornell Legal Information Institute)", url: "https://www.law.cornell.edu/uscode/text/18/1033" },
  naicUtpa: { name: "NAIC Model Law 880: Unfair Trade Practices Act", url: "https://content.naic.org/sites/default/files/model-law-880.pdf" }
};

module.exports = {
  id: "insurance-license-prep",
  category: "Workforce Development",
  name: "Insurance Agent License Exam Preparation",
  skills: "Choosing a license line, Finding your state's licensing steps, Explaining insurance terms, Working practice claims, Spotting unethical sales practices, Planning for the exam",
  outcome: "prepare for your state's insurance agent license exam: choose the right license line, find your state's official steps and exam outline, explain the core terms, work practice claims, spot unethical sales practices, and follow a dated study-and-test plan.",
  about: [
    "This course is for adults who want to sell insurance as a licensed agent, also called a producer: job seekers, career changers, people coming home from prison, veterans and people who want to open their own agency. Insurance agents are licensed by each US state, not by the federal government.",
    "You will learn the main license lines, how to find your own state's steps and exam outline, the core words and ideas the exams test, how to work practice claims with deductibles and limits, and the ethics rules that protect customers. At the end you write your own study-and-test plan with real dates.",
    "This course PREPARES you for the exam. It does not grant a license, and it does not replace any prelicensing course your state may require. Requirements, fees and exam details are set by your state's insurance department and change, so every lesson points you to the official page. Nothing here is advice on buying insurance or investments."
  ],
  finalTask: "Write a one-page Insurance License Study-and-Test Plan for your state: (1) the license line you will get and why; (2) your state's official steps in order (prelicensing education if required, exam and testing company, fingerprints or background check, application, appointment), each with the official web address; (3) the topics and weights from your state's exam content outline; (4) a weekly study schedule with dates, a target exam date and at least two practice-test dates with a score goal; (5) three practice claims you worked correctly and three ethics rules in your own words.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "US adults who want a job as an insurance agent (producer) at a call center, a bank, an agency or an insurance company, or who want to open their own agency. Mixed group: job seekers, career changers, veterans, people coming home from prison, immigrants and small-business owners.",
    startingPoint: "Have bought car, renters or health insurance but rarely read a policy. Do not know how licensing works, which license to get, or the words used on the exam. Can do simple percent math with some help.",
    gap: "Many people pay for a prelicensing course or exam without knowing which license fits the job, what their state requires, or how the exam is built, and fail or give up. Knowing the path, the core terms, the claim math and the ethics rules turns a confusing process into a plan with dates, and leads to a job that often has no degree requirement.",
    constraints: [
      "Reading level: plain words and short sentences (about grade 8); every exam word is explained",
      "Devices: a phone or a library computer; paper, pen and a basic calculator work for every task",
      "Time: 4 to 6 minute lessons",
      "Licensing is by state: steps, prelicensing hours, fees, testing company and pass marks differ, so learners check their own state's official page",
      "Background checks: some learners have a criminal record; the course explains the rule honestly and sends them to their state's department",
      "No advice on which insurance or investment product anyone should buy; practice uses made-up numbers"
    ],
    prerequisites: "None. Learners who want help with percent math can take \"Everyday Math\" first."
  },
  // ---- ADDIE: Design ----
  objectives: [
    { id: "O1", condition: "Given an insurance job or product", action: "identify which license line and which role fits it", standard: "getting at least 5 of 6 examples right" },
    { id: "O2", condition: "For your own state", action: "find the official licensing steps, the testing company and the exam content outline", standard: "writing down each step with its official web address" },
    { id: "O3", condition: "Given a list of exam words and ideas", action: "explain core insurance terms and contract principles in plain words", standard: "with the right meaning for at least 8 of 10" },
    { id: "O4", condition: "Given a practice claim with a deductible, coinsurance or a policy limit", action: "calculate how much the insurer pays and how much the insured pays", standard: "correct to the dollar on 3 practice claims" },
    { id: "O5", condition: "Given a sales or service situation", action: "spot unethical or illegal practices and choose the honest action", standard: "getting at least 4 of 5 situations right" },
    { id: "O6", condition: "Using your state's official steps and exam outline", action: "write a dated study-and-test plan for your license exam", standard: "covering every official step, every outline topic and at least two practice-test dates" }
  ],
  chapters: [
    {
      name: "Chapter 1: Your path to an insurance license",
      lessons: [
        {
          title: "What an agent does and which license line you need",
          objectives: ["O1"],
          minutes: 5,
          goal: "Choose the license line that fits the insurance job you want.",
          text: [
            "An insurance agent, called a producer in the law, sells, solicits or negotiates insurance for customers. Every state requires a license to do this. A captive agent sells for one company. An independent agent sells for several companies and often runs a small business. An agent must also be appointed by each insurance company they sell for.",
            "States issue licenses by line of authority. The four most common major lines are Life, Accident and Health (sickness), Property and Casualty. Many people start with Life and Health together, or with Property and Casualty together. Some states also offer a smaller Personal Lines license for home and car insurance only.",
            "Life covers death and some long-term savings policies. Accident and Health covers medical bills, disability income and similar costs. Property covers damage to things you own, like a house or car. Casualty covers liability, which is the money you owe if you hurt someone or damage their things.",
            "Other insurance jobs use a different license. An adjuster investigates and settles claims. Selling some investment-type products, such as variable annuities, also needs a securities license. Check your state's list of license types before you pay for any course."
          ],
          words: [["Producer", "the legal word for a licensed insurance agent or broker who sells insurance."], ["Line of authority", "a type of insurance your license lets you sell, such as Life or Property."], ["Appointment", "an insurance company's official approval for you to sell its products."], ["Liability", "the money you legally owe someone if you injure them or damage their property."], ["Adjuster", "a person who investigates and settles insurance claims; usually a separate license."]],
          slides: [
            { title: "Agents are producers", bullets: ["They sell, solicit or negotiate insurance", "Every state requires a license", "Each company you sell for must appoint you"] },
            { title: "Captive or independent", bullets: ["Captive: sells for one company", "Independent: sells for several companies, often runs a business"] },
            { title: "The four major lines", bullets: ["Life: pays when someone dies", "Accident and Health: medical bills, disability", "Property: damage to your things", "Casualty: liability when you harm others"] },
            { title: "Check before you pay", bullets: ["Adjusters need a different license", "Variable products also need a securities license", "Find your state's list of license types first"] }
          ],
          tryIt: "Write down three insurance jobs you could apply for (for example a call-center agent selling car insurance, a bank employee selling life insurance, or your own agency). Next to each, write the license line or lines it needs.",
          youCanNow: "say what an insurance producer does and choose the license line that fits a job.",
          quickCheck: [
            { objective: "O1", q: "A job ad says you will sell car and homeowners insurance. Which license lines fit?", options: ["Life and Health", "Property and Casualty", "Securities only", "Adjuster only"], answer: 1, why: "Car and home policies cover damage to property and liability to others, which are Property and Casualty." },
            { objective: "O1", q: "What is a captive agent?", options: ["An agent who sells for only one insurance company", "An agent with no license", "An agent who only settles claims", "An agent who works for the state"], answer: 0, why: "A captive agent represents one company; an independent agent represents several." }
          ]
        },
        {
          title: "Finding your state's official licensing steps",
          objectives: ["O2"],
          minutes: 6,
          goal: "Find your state's licensing steps, testing company and exam outline on official pages.",
          text: [
            "Your state's insurance department makes the rules. To find it, use the NAIC (National Association of Insurance Commissioners) page that links to every state department. Look for pages named producer licensing, agent licensing or how to apply.",
            "Most states follow a similar path: a prelicensing course (required in many states, not all), a state exam given by a testing company, fingerprints or a background check, an application, and then an appointment by an insurer. After you are licensed, you renew it and take continuing education. For example, Texas, when we checked in October 2026, gave its exam through Pearson VUE, required fingerprints, and took applications through Sircon or NIPR only after you pass the exam.",
            "The testing company publishes a candidate handbook and an exam content outline for your state. The outline lists every topic and how many questions come from each. It is the most useful study tool you have, and it is free.",
            "If you have a criminal record, be honest on the application. A federal law (18 U.S.C. 1033) says a person convicted of a felony involving dishonesty or breach of trust needs the written consent of an insurance regulator to work in insurance. Your state department explains how to ask. Do not let a course seller tell you it does not matter."
          ],
          steps: ["Open the NAIC state insurance departments page and choose your state.", "Find the producer or agent licensing page and the list of license types.", "Write down each step: prelicensing education, exam, fingerprints, application, appointment.", "Find the testing company's name and download the free candidate handbook and content outline.", "Write down the official web address for each step and the date you checked it."],
          words: [["NAIC", "National Association of Insurance Commissioners: the group of state insurance regulators."], ["Prelicensing education", "a course some states require before you may take the license exam."], ["Content outline", "the list of exam topics and how many questions come from each."], ["NIPR", "National Insurance Producer Registry: a website many states use for license applications and renewals."], ["Continuing education", "classes licensed agents must take to renew their license."]],
          slides: [
            { title: "Start at the official source", bullets: ["Your state insurance department makes the rules", "Find it from the NAIC state departments page", "Look for producer or agent licensing"] },
            { title: "The usual path", bullets: ["Prelicensing course (many states)", "State exam with a testing company", "Fingerprints or background check", "Application, then appointment by an insurer"] },
            { title: "Get the free outline", bullets: ["The testing company posts a candidate handbook", "The content outline lists topics and question counts", "Study to the outline"] },
            { title: "A record is not the end", bullets: ["Be honest on the application", "Some felonies need a regulator's written consent", "Ask your state department how"] }
          ],
          sources: [SRC.naicDepts, SRC.nipr, SRC.tdiAgent, SRC.tdiLifeApply, SRC.usc1033],
          tryIt: "Open the NAIC page, choose your state and find its producer licensing page. Write each licensing step in order, the testing company's name, and the web address of the exam content outline.",
          youCanNow: "find your state's official licensing steps, testing company and exam content outline.",
          quickCheck: [
            { objective: "O2", q: "Where do you find the real licensing steps for your state?", options: ["A social media post", "An ad for a prelicensing course", "Your state insurance department's official page", "A friend licensed in another state"], answer: 2, why: "Each state's insurance department sets and publishes its own licensing rules." },
            { objective: "O2", q: "Which free document tells you what topics are on your state's exam?", options: ["A car insurance bill", "A policy declarations page", "A recruiter's flyer", "The testing company's exam content outline"], answer: 3, why: "The content outline lists every exam topic and how many questions come from each." }
          ]
        },
        {
          title: "Core terms and how an insurance contract works",
          objectives: ["O3"],
          minutes: 6,
          goal: "Explain the core insurance terms and contract ideas in your own words.",
          text: [
            "Insurance moves risk from a person to an insurance company. The insured pays a premium. In return, the insurer promises to pay for certain losses. The policy is the written contract, and the declarations page lists who and what is covered, the limits and the premium.",
            "Exams test a few big ideas. Insurable interest: you must stand to lose money if the loss happens. Indemnity: insurance puts you back where you were, not better off. Utmost good faith: both sides must be honest, so a lie on an application (misrepresentation) can void coverage. Underwriting: the insurer studies the risk and decides whether to accept it and at what price.",
            "An insurance policy is a contract, so it needs an offer and acceptance, consideration (the premium and the promise), competent parties and a legal purpose. It is also a contract of adhesion: the insurer writes it and the customer accepts it as written, so unclear wording is usually read in the customer's favor.",
            "Learn these words with flash cards. Exams often give a short story and ask which idea it shows."
          ],
          words: [["Premium", "the money the insured pays for coverage."], ["Insurable interest", "having a real money loss if the insured event happens."], ["Indemnity", "paying back the loss so you end up where you were, not better off."], ["Underwriting", "studying a risk to decide whether to insure it and at what price."], ["Declarations page", "the page of a policy that lists who is covered, what is covered, limits and premium."], ["Contract of adhesion", "a contract written by one side and accepted as is by the other."]],
          slides: [
            { title: "Insurance moves risk", bullets: ["The insured pays a premium", "The insurer promises to pay covered losses", "The policy is the contract"] },
            { title: "Big ideas on the exam", bullets: ["Insurable interest: you stand to lose money", "Indemnity: back to where you were", "Utmost good faith: both sides honest", "Underwriting: deciding whether and at what price"] },
            { title: "A policy is a contract", bullets: ["Offer and acceptance, consideration", "Competent parties, legal purpose", "Adhesion: unclear wording favors the customer"] }
          ],
          tryIt: "Make 10 flash cards on paper or a phone: one side the word (premium, insurable interest, indemnity, underwriting, declarations page, consideration, adhesion, misrepresentation, insured, insurer), the other side your own one-line meaning. Test yourself until you get 8 of 10.",
          youCanNow: "explain the core insurance words and the parts of an insurance contract in plain words.",
          quickCheck: [
            { objective: "O3", q: "A man wants to buy fire insurance on a stranger's house. Which idea stops him?", options: ["Indemnity", "Underwriting", "Consideration", "Insurable interest"], answer: 3, why: "He would lose no money if the stranger's house burned, so he has no insurable interest." },
            { objective: "O3", q: "After a covered theft, the insurer pays the value of the stolen TV, not a bigger TV. Which idea is this?", options: ["Indemnity", "Adhesion", "Appointment", "Liability"], answer: 0, why: "Indemnity puts the insured back where they were, not better off." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Your path to an insurance license",
        questions: [
          { objective: "O1", q: "You will sell term life policies and disability income insurance. Which lines fit?", options: ["Property and Casualty", "Life and Accident and Health", "Personal Lines only", "Adjuster"], answer: 1, why: "Life policies need the Life line and disability income is Accident and Health." },
          { objective: "O1", q: "What does an insurance company's appointment do?", options: ["Replaces the state exam", "Grants a securities license", "Officially approves you to sell that company's products", "Sets your state's licensing fee"], answer: 2, why: "The license comes from the state; each insurer then appoints you to sell for it." },
          { objective: "O2", q: "Who issues insurance agent licenses in the US?", options: ["Each state's insurance department", "The federal government", "The insurance company you work for", "The testing company"], answer: 0, why: "Insurance producers are licensed state by state." },
          { objective: "O2", q: "You have a past felony conviction for fraud. What is the honest first step?", options: ["Leave it off the application", "Give up on insurance work", "Use a friend's name", "Ask your state department how to request a regulator's written consent"], answer: 3, why: "Federal law requires written consent for some convictions, and the state department explains how to ask." },
          { objective: "O3", q: "On an application, a buyer hides a serious health condition. Which principle did they break?", options: ["Indemnity", "Insurable interest", "Utmost good faith", "Adhesion"], answer: 2, why: "Both sides must be honest; a material lie can void the coverage." }
        ]
      }
    },
    {
      name: "Chapter 2: Exam content and test readiness",
      lessons: [
        {
          title: "Life and health basics and the health claim math",
          objectives: ["O3", "O4"],
          minutes: 6,
          goal: "Calculate who pays what on a practice health claim with a deductible and coinsurance.",
          text: [
            "Life insurance: term life covers a set number of years and has no cash value. Permanent life, such as whole life, can last for life and builds cash value. The beneficiary is the person who gets the death benefit; a contingent beneficiary gets it if the first one has died. The policyowner controls the policy and may be a different person from the insured.",
            "Health insurance has its own words. The deductible is what you pay each year before the plan starts sharing costs. Coinsurance is the percent you share after that, such as 80/20: the plan pays 80% and you pay 20%. A copay is a set dollar amount for a visit. The out-of-pocket maximum is the most you pay in a year for covered care.",
            "Practice only, made-up numbers: a $3,000 covered bill, a $1,000 deductible not yet met, 80/20 coinsurance. You pay the first $1,000. The remaining $2,000 is shared: the plan pays 80% ($1,600) and you pay 20% ($400). You pay $1,400 in total; the plan pays $1,600. Check: $1,400 + $1,600 = $3,000."
          ],
          steps: ["Write the covered bill amount.", "Subtract the part of the deductible still owed; the insured pays that part.", "Split what is left by the coinsurance percents.", "Add the insured's deductible and coinsurance; stop at the out-of-pocket maximum.", "Check that the two shares add up to the bill."],
          words: [["Beneficiary", "the person who receives the money when the insured person dies."], ["Cash value", "savings built inside a permanent life policy."], ["Deductible", "the amount you pay before the insurance starts to pay."], ["Coinsurance", "the percent of the cost you share with the plan after the deductible."], ["Out-of-pocket maximum", "the most you pay in a plan year for covered care."]],
          slides: [
            { title: "Life insurance words", bullets: ["Term: set years, no cash value", "Whole life: lifelong, builds cash value", "Beneficiary and contingent beneficiary"] },
            { title: "Health insurance words", bullets: ["Deductible: you pay first", "Coinsurance: shared percent, like 80/20", "Copay: set amount per visit", "Out-of-pocket maximum: the yearly cap"] },
            { title: "Practice claim (made-up)", bullets: ["$3,000 bill, $1,000 deductible, 80/20", "You: $1,000 + 20% of $2,000 = $1,400", "Plan: 80% of $2,000 = $1,600"] }
          ],
          tryIt: "Practice only: work this claim on paper. A $5,000 covered bill, a $500 deductible not yet met, 80/20 coinsurance. How much does the insured pay, and how much does the plan pay? (Answer: insured $500 + $900 = $1,400; plan $3,600.)",
          youCanNow: "explain the main life and health insurance words and work a health claim with a deductible and coinsurance.",
          quickCheck: [
            { objective: "O4", q: "Practice only: a $2,000 covered bill, a $500 deductible not yet met, 80/20 coinsurance. What does the insured pay?", options: ["$400", "$500", "$800", "$1,500"], answer: 2, why: "$500 deductible plus 20% of the remaining $1,500 ($300) is $800." },
            { objective: "O3", q: "Which life insurance policy builds cash value?", options: ["Whole life", "Ten-year term", "Twenty-year term", "Travel accident"], answer: 0, why: "Permanent policies like whole life build cash value; term policies do not." }
          ]
        },
        {
          title: "Property and casualty basics and the property claim math",
          objectives: ["O1", "O4"],
          minutes: 6,
          goal: "Calculate what a property or auto liability policy pays on a practice claim.",
          text: [
            "Property policies pay for damage to things you own. Replacement cost pays to replace the item with a new one of like kind. Actual cash value pays replacement cost minus depreciation (wear and age). Practice only: a sofa costs $1,200 new and has $500 of depreciation, so its actual cash value is $700. A deductible comes off the payment.",
            "Casualty (liability) coverage pays others when you are legally responsible for harming them. Auto liability limits are often written as three numbers, such as 25/50/25: up to $25,000 for one person's injuries, up to $50,000 for all injuries in one accident, and up to $25,000 for property damage. Your state sets the minimums; check them.",
            "Practice only: a driver with 25/50/25 limits injures one person, whose bills are $40,000. The policy pays $25,000, its per-person limit. The driver may have to pay the other $15,000 personally. That is why agents explain limits carefully."
          ],
          steps: ["Find the loss amount and the type of coverage.", "For actual cash value, subtract depreciation from replacement cost.", "Subtract the deductible.", "Compare with the policy limit; the insurer never pays more than the limit.", "Anything above the limit is the insured's to pay."],
          words: [["Replacement cost", "the cost to replace an item with a new one of like kind and quality."], ["Actual cash value", "replacement cost minus depreciation."], ["Depreciation", "the loss in value from age and wear."], ["Policy limit", "the most the insurer will pay for a covered loss."], ["Split limits", "auto liability limits written as three numbers, like 25/50/25."]],
          slides: [
            { title: "Property: two ways to pay", bullets: ["Replacement cost: new item of like kind", "Actual cash value: replacement cost minus depreciation", "The deductible comes off the payment"] },
            { title: "Casualty: liability to others", bullets: ["Pays when you legally harm others", "Auto limits like 25/50/25", "Your state sets the minimums"] },
            { title: "Practice claim (made-up)", bullets: ["25/50/25, one person hurt, $40,000 in bills", "Policy pays the $25,000 per-person limit", "The driver may owe the other $15,000"] }
          ],
          tryIt: "Practice only: a kitchen fire causes $18,000 of covered damage. The homeowners policy pays replacement cost, the deductible is $1,000, and the dwelling limit is $250,000. Write what the insurer pays and what the homeowner pays. (Answer: insurer $17,000; homeowner $1,000.)",
          youCanNow: "tell property from casualty coverage and work practice claims with depreciation, deductibles and limits.",
          quickCheck: [
            { objective: "O4", q: "Practice only: a TV costs $900 new and has $300 of depreciation. What is its actual cash value?", options: ["$300", "$900", "$1,200", "$600"], answer: 3, why: "Actual cash value is replacement cost minus depreciation: $900 - $300 = $600." },
            { objective: "O1", q: "A customer accidentally injures a delivery driver at home and is sued. Which kind of coverage responds?", options: ["Life", "Casualty (liability)", "Disability income", "Property damage to the home"], answer: 1, why: "Liability coverage pays others when the insured is legally responsible for harming them." }
          ]
        },
        {
          title: "Ethics rules and your study-and-test plan",
          objectives: ["O5", "O6"],
          minutes: 6,
          goal: "Spot unethical sales practices and write a dated study-and-test plan.",
          text: [
            "States have unfair trade practice laws, and every exam tests them. Misrepresentation is lying about or hiding what a policy does. Twisting is talking a customer into replacing a policy with a lie or a misleading comparison, to their harm. Churning is replacing policies again and again mainly to earn new commissions. Rebating is giving part of your commission or a gift to get a sale; it is illegal in many states, so check your state's rule. Premiums you collect belong to the customer and insurer: an agent holds them in trust (a fiduciary duty) and must not mix them with personal money (commingling).",
            "Honest action is simple: tell the truth about coverage, put the customer's needs first, compare policies fairly, write things down, and keep premium money separate. If you are not sure, ask your manager or the state department.",
            "Now plan. Use your state's content outline to list each topic and its number of questions. Give more study days to the heavy topics. Set a target exam date, two or more practice-test dates and a score goal. Finish any required prelicensing course before you book the exam. Read every exam question twice and watch for words like EXCEPT and NOT.",
            "Final task: write your one-page Study-and-Test Plan with your license line, your state's official steps with web addresses, the outline topics and weights, a dated weekly schedule, practice-test dates, three practice claims and three ethics rules."
          ],
          steps: ["List your state's official steps in order with their web addresses.", "Copy each outline topic and its number of questions.", "Give more study days to the topics with the most questions.", "Pick a target exam date and at least two practice-test dates with a score goal.", "Add three practice claims and three ethics rules in your own words."],
          words: [["Misrepresentation", "lying about or hiding what a policy does or costs."], ["Twisting", "using lies or misleading comparisons to get a customer to replace a policy."], ["Churning", "replacing policies again and again mainly to earn commissions."], ["Rebating", "giving back part of a commission or a gift to win a sale; illegal in many states."], ["Fiduciary", "a person trusted to handle someone else's money honestly."], ["Commingling", "mixing customer premium money with your own money."]],
          slides: [
            { title: "Practices the exam tests", bullets: ["Misrepresentation: lying about a policy", "Twisting: misleading a customer into replacing one", "Churning: replacing to earn commissions", "Rebating: illegal in many states, check yours"] },
            { title: "Premium money", bullets: ["You hold it in trust: fiduciary duty", "Never mix it with your own money"] },
            { title: "Build your plan", bullets: ["Steps and web addresses from your state", "Outline topics and weights", "Dated weekly schedule and practice tests"] },
            { title: "On test day", bullets: ["Read each question twice", "Watch for EXCEPT and NOT", "Bring the ID the handbook asks for"] }
          ],
          sources: [SRC.naicUtpa, SRC.naicDepts],
          tryIt: "Final task: write your Insurance License Study-and-Test Plan on one page, using your state's official steps and content outline, with real dates for each study week, two practice tests and your target exam date.",
          youCanNow: "spot unethical sales practices, choose the honest action, and follow a dated study-and-test plan for your license exam.",
          quickCheck: [
            { objective: "O5", q: "An agent tells a senior her old policy is \"worthless\" so she will buy a new one that pays the agent more. What is this?", options: ["Underwriting", "Indemnity", "Twisting", "An appointment"], answer: 2, why: "Using a misleading claim to get a customer to replace a policy is twisting." },
            { objective: "O6", q: "Your state's outline gives one topic far more questions than the others. What do you do in your plan?", options: ["Give that topic more study days", "Skip it because it is long", "Study only the smallest topics", "Ignore the outline"], answer: 0, why: "Topics with more questions earn more study time." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Exam content and test readiness",
        questions: [
          { objective: "O4", q: "Practice only: a $4,000 covered bill, the deductible already met, 80/20 coinsurance. What does the plan pay?", options: ["$800", "$4,000", "$3,000", "$3,200"], answer: 3, why: "With the deductible met, the plan pays 80% of $4,000, which is $3,200." },
          { objective: "O4", q: "Practice only: $12,000 of covered storm damage, replacement cost, a $2,000 deductible. What does the insurer pay?", options: ["$10,000", "$12,000", "$14,000", "$2,000"], answer: 0, why: "The deductible comes off the loss: $12,000 - $2,000 = $10,000." },
          { objective: "O3", q: "Who receives the death benefit if the primary beneficiary has already died?", options: ["The agent", "The contingent beneficiary", "The insurer", "The state"], answer: 1, why: "A contingent beneficiary is next in line when the primary beneficiary has died." },
          { objective: "O5", q: "A customer pays you a premium in cash. What do you do with it?", options: ["Put it in your personal account for now", "Spend it and repay it later", "Handle it as trust money, kept separate as your agency and state require", "Give some back to the customer as thanks"], answer: 2, why: "Premiums are held in trust; mixing them with your own money is commingling." },
          { objective: "O6", q: "What belongs in a good study-and-test plan?", options: ["Only the exam date", "Official steps, outline topics, dated study weeks and practice tests", "A list of the agent's commissions", "Answers copied from a website"], answer: 1, why: "A complete plan covers the official steps, the outline topics and real dates for study and practice." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Insurance Agent License Exam Preparation",
    questions: [
      { objective: "O1", q: "What is the legal word for a licensed insurance agent who sells insurance?", options: ["Producer", "Underwriter", "Adjuster", "Actuary"], answer: 0, why: "State laws call licensed agents and brokers producers." },
      { objective: "O1", q: "A bank hires you to sell life insurance and long-term disability coverage. Which lines do you need?", options: ["Property and Casualty", "Personal Lines", "Life and Accident and Health", "Adjuster"], answer: 2, why: "Life policies need Life, and disability coverage is Accident and Health." },
      { objective: "O1", q: "Which job usually needs a separate license from an agent's license?", options: ["Selling renters insurance", "Selling term life", "Selling car insurance", "Investigating and settling claims as an adjuster"], answer: 3, why: "Adjusters investigate and settle claims and usually need their own license." },
      { objective: "O2", q: "Which website helps you find every state's insurance department?", options: ["The NAIC state insurance departments page", "A course seller's blog", "A social media group", "An online forum"], answer: 0, why: "The NAIC, the group of state regulators, links to every state department." },
      { objective: "O2", q: "In Texas, when we checked, when could you apply for a general lines license?", options: ["Before taking any exam", "After passing the state exam", "Only after five years of work", "Only through the insurance company"], answer: 1, why: "TDI said to pass the exam first and then apply through Sircon or NIPR." },
      { objective: "O2", q: "Your friend says a 20-hour course is required everywhere. What do you do?", options: ["Believe it", "Pay for the longest course you can find", "Check your own state department's page", "Skip any course"], answer: 2, why: "Prelicensing rules differ by state, so check the official page." },
      { objective: "O3", q: "What is a premium?", options: ["The amount the insurer pays on a claim", "The money the insured pays for coverage", "The agent's license", "The policy limit"], answer: 1, why: "The premium is what the insured pays to buy coverage." },
      { objective: "O3", q: "Which page of a policy lists who is covered, the limits and the premium?", options: ["The cover letter", "The claim form", "The application", "The declarations page"], answer: 3, why: "The declarations page summarizes who and what is covered, the limits and the premium." },
      { objective: "O3", q: "Why is unclear wording in a policy usually read in the customer's favor?", options: ["Because the policy is a contract of adhesion written by the insurer", "Because the agent wrote it", "Because the customer is always right", "Because of indemnity"], answer: 0, why: "The insurer writes the contract and the customer accepts it as is, so unclear terms favor the customer." },
      { objective: "O3", q: "Which life policy covers a set number of years and has no cash value?", options: ["Whole life", "Universal life", "Term life", "Permanent life"], answer: 2, why: "Term life covers a set period and builds no cash value." },
      { objective: "O4", q: "Practice only: a $6,000 covered bill, a $1,000 deductible not yet met, 80/20 coinsurance. What does the insured pay?", options: ["$1,200", "$2,000", "$1,000", "$5,000"], answer: 1, why: "$1,000 deductible plus 20% of the remaining $5,000 ($1,000) is $2,000." },
      { objective: "O4", q: "Practice only: a driver with 25/50/25 limits injures one person whose bills are $30,000. What does the policy pay for that person?", options: ["$30,000", "$50,000", "$5,000", "$25,000"], answer: 3, why: "The per-person injury limit is $25,000; the driver may owe the other $5,000." },
      { objective: "O4", q: "Practice only: a laptop costs $1,000 new and has $400 of depreciation; the deductible is $100. What does an actual cash value policy pay?", options: ["$500", "$600", "$900", "$1,000"], answer: 0, why: "Actual cash value is $1,000 - $400 = $600, minus the $100 deductible, which is $500." },
      { objective: "O4", q: "Which amount caps what a person pays for covered health care in a year?", options: ["The copay", "The premium", "The out-of-pocket maximum", "The deductible"], answer: 2, why: "The out-of-pocket maximum is the most the insured pays in a plan year for covered care." },
      { objective: "O5", q: "An agent offers a customer a $100 gift card to buy a policy. What is this called?", options: ["Twisting", "Rebating", "Underwriting", "Indemnity"], answer: 1, why: "Giving value to win a sale is rebating, which is illegal in many states." },
      { objective: "O5", q: "An agent replaces a client's policy every year mainly to earn new commissions. What is this?", options: ["Churning", "Coinsurance", "Appointment", "Utmost good faith"], answer: 0, why: "Repeated replacement mainly for commissions is churning." },
      { objective: "O5", q: "A customer asks whether a cheap policy covers flood damage and you are not sure. What do you do?", options: ["Say yes to close the sale", "Change the subject", "Say flood is always covered", "Check the policy wording or ask the company before you answer"], answer: 3, why: "Guessing about coverage risks misrepresentation; check first and tell the truth." },
      { objective: "O6", q: "What is the best first step when building your exam study plan?", options: ["Book the exam for tomorrow", "Buy the most expensive course", "Get your state's official steps and exam content outline", "Memorize random practice questions"], answer: 2, why: "The official steps and outline show what to do and what to study." },
      { objective: "O6", q: "Your first practice test score is below your goal. What do you change in your plan?", options: ["Add study days to your weakest outline topics and set another practice test", "Cancel the plan", "Take the real exam right away", "Study only the topics you already know"], answer: 0, why: "Practice tests show weak topics; add time there and test again before the real exam." },
      { objective: "O6", q: "On the exam, a question asks which item is covered \"EXCEPT\". What should you do?", options: ["Pick the first true statement", "Skip it", "Guess quickly", "Read it twice and choose the item that is NOT covered"], answer: 3, why: "EXCEPT asks for the one choice that does not fit; reading twice prevents a careless mistake." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  // pre-test: these quiz questions, taken before Lesson 1, so the quiz shows how much each learner gained
  pretest: { title: "Pre-Test: What Do You Already Know?", from: [1, 3, 6, 8, 10, 12, 14, 16, 17] },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      { name: "Right license line", objective: "O1", notYet: "No line named, or a line that does not fit the job.", meets: "Names the license line that fits the job and says why.", exceeds: "Also names a second line or license the learner may need later and why." },
      { name: "Official steps", objective: "O2", notYet: "Steps are missing or come from ads or friends.", meets: "Every step from the state's official page, in order, with web addresses.", exceeds: "Adds the date checked, the testing company's handbook and any background-check steps." },
      { name: "Outline topics and terms", objective: "O3", notYet: "No outline topics, or core terms explained wrongly.", meets: "Lists every outline topic with its weight and explains the key terms correctly.", exceeds: "Flags the learner's weakest topics and adds flash cards for them." },
      { name: "Practice claims", objective: "O4", notYet: "Fewer than three claims, or wrong answers.", meets: "Three practice claims worked correctly, showing each step.", exceeds: "Claims cover a deductible, coinsurance and a policy limit, each with a check of the math." },
      { name: "Ethics rules", objective: "O5", notYet: "Rules missing or wrong.", meets: "Three ethics rules explained correctly in the learner's own words.", exceeds: "Each rule comes with a short example of the honest action." },
      { name: "Dated plan", objective: "O6", notYet: "No dates, or no practice tests.", meets: "A weekly schedule with dates, a target exam date and two practice tests with a score goal.", exceeds: "More study days go to the heaviest outline topics, with a backup exam date." }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Learners who book their state license exam within 60 days (follow-up survey)",
      "Learners who report passing the state exam and getting licensed (follow-up survey)",
      "Learners who report a job offer or appointment as an insurance agent, or opening their own agency"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A phone or computer with internet to open the state's official pages",
      "Paper, pen and a basic calculator",
      "The learner's state exam content outline and candidate handbook (free from the testing company)",
      "About 60 to 75 minutes in total, in short sessions, plus time for the final plan"
    ],
    facilitatorNotes: [
      "Group learners by state if you can, and open each state's licensing page together; do not give one state's rules as if they apply everywhere.",
      "Make clear the course prepares learners and does not replace a state-required prelicensing course or grant a license.",
      "For learners with a criminal record, explain the written-consent rule honestly and send them to their state department; do not guess about their case.",
      "All claim math uses made-up numbers; do not give advice on which policy anyone should buy.",
      "Score the final plan with the rubric, and check that every step has an official web address."
    ]
  }
};
