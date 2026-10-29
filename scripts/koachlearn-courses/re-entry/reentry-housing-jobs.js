"use strict";

// Koach Learn course: Re-Entry -> "Finding Housing and Second-Chance Jobs" (owner's request, 28 October 2026: life, people and career skills beyond AI).
// Skill-building: by the end the student can DO the skill in `outcome`. Two chapters of three micro-lessons; a knowledge check closes each chapter; a 20-question quiz closes the course.
// Facts checked 28 Oct 2026: 211.org; public housing admission rules (24 CFR 960.204, read on law.cornell.edu because ecfr.gov blocked the fetch); hud.gov Fair Housing Act overview
// (HUD says it is ending earlier guidance that discouraged tenant background checks); calcivilrights.ca.gov housing page; irs.gov and dol.gov WOTC pages (authorized through 31 Dec 2025,
// extension not confirmed, so the lesson tells students to check); bonds4jobs.com; dol.gov reentry page. careeronestop.org blocked the fetch, so the lesson says where to look.

module.exports = {
  id: "reentry-housing-jobs",
  category: "Re-Entry",
  name: "Finding Housing and Second-Chance Jobs",
  skills: "Finding housing help through 211, Applying for housing with a record, Building a rental packet, Using American Job Centers, Finding second-chance employers, Explaining WOTC and federal bonding to an employer",
  outcome: "find housing you can apply for with a record, put together a rental packet, find second-chance employers and job help near you, and tell an employer about the hiring incentives that come with you.",
  about: [
    "A safe place to live and a steady job are the two things that help most after release. Both can feel out of reach when you have a record, but there are programs, rules and employers set up to help.",
    "In this course you will use 211 to find local housing help, learn the public housing rules about records, build a rental packet that answers a landlord's worries, find an American Job Center, look for second-chance employers, and learn how the Work Opportunity Tax Credit and the Federal Bonding Program can make an employer more willing to hire you.",
    "Rules change and are different in each state and city. Each lesson shows where to check the current rules. For legal questions, ask legal aid or a reentry counselor.",
    "Each lesson takes about five minutes and ends with a task you do right away. There is a knowledge check after each chapter and a 20-question quiz at the end."
  ],
  finalTask: "Make a one-page housing-and-jobs plan: two housing options with contact details and what to bring, your rental packet checklist, your nearest American Job Center, three second-chance employers or job leads, and a two-sentence pitch telling an employer about the Work Opportunity Tax Credit and the Federal Bonding Program.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Adults coming home from prison (re-entry) who need a safe place to live and a steady job, often with a record that makes both harder to get. Some are on parole or probation.",
    startingPoint: "Can make calls and use a basic phone. Most do not know about 211, public housing record rules, rental packets, American Job Centers, the Work Opportunity Tax Credit or the Federal Bonding Program.",
    gap: "Housing and a job are the two things that help most after release, but many people give up after early rejections or fall for rental scams. Learners need to find the programs, rules and employers set up to help, and present themselves with confidence and honesty.",
    constraints: [
      "Reading level: plain words and short sentences (about grade 5 to 6)",
      "Devices: a basic phone or smartphone, sometimes a library computer",
      "Time: about 5-minute lessons that fit around appointments and work",
      "Rules differ by state and city and change; legal questions go to legal aid or a reentry counselor",
      "Parole or probation conditions may limit where learners can live; privacy: no case numbers in AI tools"
    ],
    prerequisites: "None. \"Everyday AI Tools\" helps learners who want to use maps and reminders to get to appointments."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Using 211 and reentry programs", action: "list housing options you can apply for", standard: "with phone number, cost, rules and what to bring for each" },
    { id: "O2", condition: "Given a housing provider and the rules about records", action: "explain what the rules say about records and ask for a fair look at your application", standard: "asking whether there is a written policy and whether you can give proof of rehabilitation" },
    { id: "O3", condition: "Given the papers you have", action: "put together a rental packet and spot rental scams", standard: "with a papers checklist and a short letter about what you have done since, and no payment before seeing a place" },
    { id: "O4", condition: "Using CareerOneStop or 211", action: "find your nearest American Job Center and second-chance job leads", standard: "with address, phone, hours and questions to ask on your first visit" },
    { id: "O5", condition: "Given the Work Opportunity Tax Credit and the Federal Bonding Program", action: "explain to an employer how they can help them hire you", standard: "in a two-sentence pitch, checked against irs.gov for whether WOTC is in effect" },
    { id: "O6", condition: "Given a question about your record in an interview", action: "answer it briefly and honestly", standard: "saying what happened, what you have done since and why you are ready, with no case numbers typed into AI" }
  ],
  chapters: [
    {
      name: "Chapter 1: Finding a place to live",
      lessons: [
        {
          objectives: ["O1"],
          title: "Your housing options and where to start",
          minutes: 5,
          goal: "Use 211 and reentry programs to list three housing options you can apply for.",
          text: [
            "Most people coming home move through more than one kind of housing: staying with family, a shelter, transitional or reentry housing, sober living, renting a room, and later an apartment of their own. Each step is fine. The goal is a safe place now and a better place next.",
            "211 is the easiest place to start. You can call 211 or go to 211.org to reach a local helper who connects you with housing, food, utility help, health care and more. Calls are confidential. Tell them you are coming home from prison or jail and ask about reentry housing.",
            "Public housing and Housing Choice Vouchers (often called Section 8) are run by your local Public Housing Agency (PHA). Waiting lists can be long or closed, so get on them early and keep your contact details up to date.",
            "If you are on parole or probation, your officer may need to approve where you live. Ask before you sign anything."
          ],
          steps: ["Call 211 or visit 211.org and ask about reentry and transitional housing.", "Ask a reentry program or your parole or probation officer for housing lists.", "Find your local Public Housing Agency and ask how to join its waiting lists.", "Write down three options: name, phone, cost, rules and what to bring.", "Check with your officer that the address is allowed."],
          words: [["211", "a free, confidential phone and web service that connects you to local help."], ["Transitional housing", "short-term housing with support, often for people coming home."], ["Public Housing Agency (PHA)", "the local office that runs public housing and housing vouchers."], ["Housing Choice Voucher", "help paying rent to a private landlord, often called Section 8."]],
          slides: [
            { title: "Housing is a ladder", bullets: ["Family, shelter, reentry or sober living", "A room, then an apartment", "Safe now, better next"] },
            { title: "Start with 211", bullets: ["Call 211 or visit 211.org", "Confidential local help", "Ask about reentry housing"] },
            { title: "Public housing and vouchers", bullets: ["Run by your local Public Housing Agency", "Waiting lists can be long: apply early", "Keep your contact details up to date"] },
            { title: "On parole or probation?", bullets: ["Your officer may need to approve the address", "Ask before you sign"] }
          ],
          sources: [
            { name: "211: Find local help", url: "https://www.211.org/" },
            { name: "HUD: Public housing program", url: "https://www.hud.gov/topics/rental_assistance/phprog" }
          ],
          tryIt: "Call 211 or visit 211.org and ask for reentry or transitional housing near you. Write down three options with the phone number, cost, rules and what each asks you to bring.",
          youCanNow: "use 211 and your local Public Housing Agency to find housing options and list what each one needs.",
          quickCheck: [
            { objective: "O1", q: "What is transitional housing?", options: ["A hotel you pay by the night", "Short-term housing with support, often for people coming home", "A house you buy", "A shelter that only opens in winter"], answer: 1, why: "Transitional housing is short-term housing with support while you get settled." },
            { objective: "O1", q: "You are on parole and a friend offers you a room. What would you do before moving in?", options: ["Move in tonight", "Sign a lease right away", "Check that your officer approves the address", "Tell no one"], answer: 2, why: "Parole conditions may limit where you can live, so you check first." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Applying for housing with a record",
          minutes: 6,
          goal: "Explain what housing rules say about records and how to ask for a fair look at your application.",
          text: [
            "Federal rules require public housing agencies to deny a few groups: anyone who must register as a sex offender for life; anyone ever convicted of making methamphetamine on federally assisted housing property; and, for three years, a household evicted from federally assisted housing for drug activity, unless the person finished an approved rehab program or the situation has changed. They can also deny current illegal drug use.",
            "For most other records, the housing agency decides using its own written policy. Before it denies you because of a criminal record, it must tell you and give you a copy of the record and a chance to dispute it. It may not charge you for the records check. Ask for its policy, and ask for a review if you are denied.",
            "Private landlords can usually look at criminal history. A record is not a protected class under the federal Fair Housing Act, and HUD has said it is ending earlier federal guidance that limited background checks. State and city laws may protect you more. In California, landlords cannot use arrests that did not lead to a conviction, sealed or expunged records or juvenile records, cannot ban everyone with a record, and must show a conviction is directly related to being a good tenant.",
            "If you think a landlord in California broke these rules, you can contact the California Civil Rights Department, generally within one year. In other states, ask legal aid or your state's civil rights office."
          ],
          steps: ["Ask each housing provider for its written policy on criminal records.", "Read your own record first so nothing surprises you.", "Bring proof of rehabilitation to the application.", "If denied, ask in writing for the reason, a copy of the record used and a review.", "If you think the law was broken, contact legal aid or your state civil rights office."],
          words: [["Fair Housing Act", "the federal law against housing discrimination based on race, color, national origin, religion, sex, family status or disability."], ["Protected class", "a group the law protects from discrimination."], ["Federally assisted housing", "housing paid for in part by federal programs, like public housing."], ["Informal review", "a meeting to ask a housing agency to look again at a denial."]],
          slides: [
            { title: "Public housing: required denials", bullets: ["Lifetime sex offender registration", "Meth production on federally assisted property", "Drug-related eviction: 3 years, with exceptions"] },
            { title: "Most other records: the PHA decides", bullets: ["Ask for the written policy", "They must show you the record and let you dispute it", "Ask for a review if denied"] },
            { title: "Private landlords", bullets: ["Usually can check records", "Federal guidance has changed: check hud.gov", "State and city laws may protect you more"] },
            { title: "California protections", bullets: ["No arrests without conviction, sealed or juvenile records", "No blanket bans on everyone with a record", "Complaints: California Civil Rights Department"] }
          ],
          sources: [
            { name: "24 CFR 960.204: Denial of admission for criminal activity or drug abuse (Cornell LII)", url: "https://www.law.cornell.edu/cfr/text/24/960.204" },
            { name: "HUD: Fair Housing Act overview", url: "https://www.hud.gov/helping-americans/fair-housing-act-overview" },
            { name: "California Civil Rights Department: Housing", url: "https://calcivilrights.ca.gov/housing/" }
          ],
          tryIt: "Call or visit the website of one housing provider from your list and ask: Do you have a written policy on criminal records? Can I give you proof of rehabilitation with my application? Write down the answers.",
          youCanNow: "explain the main housing rules about records, ask a provider for its policy, and ask for a review if you are denied.",
          quickCheck: [
            { objective: "O2", q: "Who runs public housing and Housing Choice Vouchers in your area?", options: ["The local Public Housing Agency", "The police department", "Your parole officer", "The IRS"], answer: 0, why: "Your local Public Housing Agency runs these programs and sets its own policy." },
            { objective: "O2", q: "You want to apply to a housing provider but worry about your record. What would you do?", options: ["Leave the record off and hope", "Give up and not apply", "Pay extra to skip the check", "Ask for their written policy and whether you can add proof of rehabilitation"], answer: 3, why: "Asking about the policy and offering proof helps get a fair look." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Building a rental packet",
          minutes: 5,
          goal: "Put together a rental packet that answers a landlord's worries before they ask.",
          text: [
            "A landlord wants to know three things: will you pay on time, will you take care of the place, and will you get along with neighbors. A rental packet answers all three in one folder.",
            "Include: a photo ID; proof of income such as pay stubs, an offer letter or a benefits letter; references from an employer, case manager, program staff or faith leader; certificates from programs you finished; and a short letter about your record that says what happened, what you have done since, and why you will be a good tenant.",
            "Watch for rental scams. Never send money by wire, gift card or payment app before you have seen the place in person and signed a lease. Be careful with any deal that seems too cheap or rushes you.",
            "Know what you can pay. Many programs use a rule of thumb that rent should be about a third of your income or less. Ask about all move-in costs: deposit, first month and application fees."
          ],
          steps: ["Get a folder and make copies of your ID and proof of income.", "Ask two or three people for reference letters.", "Add certificates from programs you finished.", "Write a short letter about your record, ending with why you will be a good tenant.", "Before paying anything, see the place in person and get a written lease."],
          words: [["Rental packet", "a folder of papers that shows a landlord you are a good tenant."], ["Reference", "a person who can speak well about you."], ["Security deposit", "money you pay before moving in that the landlord holds in case of damage."], ["Lease", "the written rental agreement."]],
          slides: [
            { title: "What a landlord worries about", bullets: ["Will you pay on time?", "Will you take care of the place?", "Will you get along with neighbors?"] },
            { title: "Your rental packet", bullets: ["Photo ID and proof of income", "References and program certificates", "A short letter about your record"] },
            { title: "Rental scam signs", bullets: ["Pay before you see the place", "Wire, gift card or payment app only", "Too cheap, too fast"] },
            { title: "Know your numbers", bullets: ["Rent about a third of income or less", "Ask about deposit, first month and fees"] }
          ],
          tryIt: "Start your rental packet. Make a checklist of the papers you have and the ones you still need. Write the first draft of your short letter: one sentence about what happened, two about what you have done since, and one about why you will be a good tenant.",
          youCanNow: "build a rental packet that shows a landlord you will pay, take care of the place and be a good neighbor, and spot rental scams.",
          quickCheck: [
            { objective: "O3", q: "Which belongs in a rental packet?", options: ["Proof of income and reference letters", "Your full case file", "Your bank password", "A copy of your Social Security card for anyone"], answer: 0, why: "Income proof and references answer a landlord's main worries." },
            { objective: "O3", q: "A landlord wants a deposit by wire transfer before you see the apartment. What would you do?", options: ["Send it quickly before someone else does", "Send half", "Refuse and look for another place", "Send it by gift card instead"], answer: 2, why: "Asking for payment before you see the place is a scam warning sign." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Finding a place to live",
        questions: [
          { objective: "O1", q: "You just got home and need housing help tonight. What is a good first step?", options: ["Wait a month", "Call 211 or visit 211.org", "Sign any lease you see online", "Send a deposit by gift card"], answer: 1, why: "211 connects you to local housing and other help." },
          { objective: "O2", q: "Who runs public housing and Housing Choice Vouchers in your area?", options: ["The local Public Housing Agency", "The post office", "Your bank", "The DMV"], answer: 0, why: "Your local Public Housing Agency runs these programs and their waiting lists." },
          { objective: "O2", q: "Before a public housing agency denies you because of a criminal record, it must:", options: ["Charge you for the check", "Post it online", "Tell you and give you a copy of the record and a chance to dispute it", "Call your family"], answer: 2, why: "The rules require notice, a copy of the record and a chance to dispute it." },
          { objective: "O2", q: "In California, which can a landlord NOT use against you?", options: ["Your income", "Your references", "Your rental history", "A sealed record"], answer: 3, why: "California does not allow landlords to use sealed or expunged records, arrests without conviction, or juvenile records." },
          { objective: "O3", q: "A landlord asks you to pay a deposit by gift card before you see the apartment. What do you do?", options: ["Pay quickly so you do not lose it", "Pay half", "Refuse; it is a scam warning sign", "Send your bank password"], answer: 2, why: "Paying before seeing the place, with gift cards, is a classic rental scam." }
        ]
      }
    },
    {
      name: "Chapter 2: Finding second-chance work",
      lessons: [
        {
          objectives: ["O4"],
          title: "American Job Centers and reentry job programs",
          minutes: 5,
          goal: "Find your nearest American Job Center and a reentry job program and know what to ask them.",
          text: [
            "American Job Centers are public job offices found across the country. They help with job searches, résumés, training, and sometimes paid training or help with work clothes and tools. You can find the nearest one on CareerOneStop (careeronestop.org), a website from the US Department of Labor, or by calling 211.",
            "The Department of Labor also funds reentry employment programs for formerly incarcerated adults and young people. Reentry organizations, community colleges and some unions run job training and apprenticeships too.",
            "When you visit, ask: What training is free for me? Do you work with employers who hire people with records? Can you help me with a bonding letter or the Work Opportunity Tax Credit paperwork? Can you help with work clothes, tools or a bus pass?"
          ],
          steps: ["Go to careeronestop.org and search for an American Job Center near you, or call 211.", "Ask a reentry program which job programs it works with.", "Bring your ID, any résumé you have, and certificates.", "Ask the four questions in this lesson and write down the answers.", "Set a date for your next visit."],
          words: [["American Job Center", "a free public office that helps people find jobs and training."], ["CareerOneStop", "a US Department of Labor website for jobs, training and finding job centers."], ["Apprenticeship", "a paid job where you learn a trade while you work."]],
          slides: [
            { title: "American Job Centers", bullets: ["Public job offices across the country", "Job search, résumés, training", "Find one at careeronestop.org or call 211"] },
            { title: "Reentry job programs", bullets: ["Department of Labor reentry programs", "Reentry organizations and colleges", "Unions and apprenticeships"] },
            { title: "Ask them", bullets: ["What training is free for me?", "Which employers hire people with records?", "Help with bonding or tax credit papers?", "Help with clothes, tools or a bus pass?"] }
          ],
          sources: [
            { name: "CareerOneStop: Find American Job Centers", url: "https://www.careeronestop.org/LocalHelp/AmericanJobCenters/find-american-job-centers.aspx" },
            { name: "US Department of Labor: Reentry employment", url: "https://www.dol.gov/agencies/eta/reentry" }
          ],
          tryIt: "Find your nearest American Job Center. Write down its address, phone number and hours, and the four questions you will ask on your first visit.",
          youCanNow: "find an American Job Center and a reentry job program and ask them for the help you need.",
          quickCheck: [
            { objective: "O4", q: "What does an American Job Center offer?", options: ["Paid jobs only at the center", "Free help with job searches, résumés and training", "Housing vouchers", "Loans for cars"], answer: 1, why: "American Job Centers give free job search, résumé and training help." },
            { objective: "O4", q: "You are at a job center for the first time. Which question would you ask?", options: ["Can you write my record off?", "How much do you charge?", "Can I skip the application?", "Which employers here hire people with records?"], answer: 3, why: "Job center staff often know local second-chance employers." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Second-chance employers, WOTC and federal bonding",
          minutes: 6,
          goal: "Explain to an employer how the Work Opportunity Tax Credit and the Federal Bonding Program can help them hire you.",
          text: [
            "A second-chance employer is a business that is open to hiring people with records. Look for them through job centers, reentry programs, staffing agencies that work with reentry, trade unions, and job posts that say fair chance or second chance.",
            "The Work Opportunity Tax Credit (WOTC) is a federal tax credit for employers, not money paid to you. One group it covers is qualified ex-felons: people hired within a year of a felony conviction or release from prison. The employer and you fill out IRS Form 8850 on or before the day of the job offer, and the employer sends it to the state within 28 days after you start. The IRS page said the credit covered people who started work by 31 December 2025. Check irs.gov to see whether it has been renewed before you mention it.",
            "The Federal Bonding Program gives employers a free fidelity bond, a kind of insurance against employee theft, for the first six months of a job. Each bond covers up to $5,000 with no deductible, and there are no forms for you to fill out. People with records are one of the groups it serves. Your state bonding coordinator, listed on bonds4jobs.com, arranges it.",
            "Many employers have never heard of these programs. Telling them shows you have done your homework and lowers their risk."
          ],
          steps: ["Make a list of second-chance employers from job centers, reentry programs and job posts.", "Check irs.gov to see whether WOTC is in effect now.", "Find your state bonding coordinator on bonds4jobs.com.", "Practice a two-sentence pitch about WOTC and bonding.", "Bring the Form 8850 and bonding information to interviews."],
          words: [["Second-chance employer", "a business that is open to hiring people with records."], ["Work Opportunity Tax Credit (WOTC)", "a federal tax credit for employers who hire people from certain groups."], ["Fidelity bond", "insurance that protects an employer against loss from employee theft."], ["Form 8850", "the IRS form used to start the WOTC process."]],
          slides: [
            { title: "Second-chance employers", bullets: ["Open to hiring people with records", "Find them through job centers and reentry programs", "Look for fair chance or second chance in job posts"] },
            { title: "Work Opportunity Tax Credit", bullets: ["A tax credit for the employer, not pay for you", "Covers people hired within a year of conviction or release", "Form 8850 on or before the job offer; check irs.gov"] },
            { title: "Federal Bonding Program", bullets: ["Free bond for the first six months", "Up to $5,000, no deductible", "Arranged by your state bonding coordinator"] },
            { title: "Why tell the employer", bullets: ["Many have never heard of these", "It lowers their risk", "It shows you did your homework"] }
          ],
          sources: [
            { name: "IRS: Work Opportunity Tax Credit", url: "https://www.irs.gov/businesses/small-businesses-self-employed/work-opportunity-tax-credit" },
            { name: "US Department of Labor: Work Opportunity Tax Credit", url: "https://www.dol.gov/agencies/eta/wotc" },
            { name: "Federal Bonding Program: About", url: "https://bonds4jobs.com/about-us" }
          ],
          tryIt: "Write your two-sentence employer pitch. For example: If you hire me, you may be able to claim the Work Opportunity Tax Credit. I can also come with a free Federal Bonding Program bond that covers my first six months. Then find your state bonding coordinator on bonds4jobs.com.",
          youCanNow: "find second-chance employers and explain WOTC and federal bonding to an employer in plain words.",
          quickCheck: [
            { objective: "O5", q: "Who receives the Work Opportunity Tax Credit?", options: ["The worker", "The parole office", "The employer", "The job center"], answer: 2, why: "WOTC is a tax credit the employer may claim for hiring you." },
            { objective: "O5", q: "You plan to tell an employer about WOTC in an interview. What would you do first?", options: ["Check irs.gov to see whether it is in effect now", "Promise them a set dollar amount", "Ask AI to fill in Form 8850 with your details", "Skip it because employers never care"], answer: 0, why: "WOTC rules can change, so you check irs.gov before mentioning it." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Applying and answering questions about your record",
          minutes: 6,
          goal: "Apply to a second-chance job and answer questions about your record with confidence.",
          text: [
            "Apply to several jobs each week. Keep a simple list with the employer, the job, the date you applied and what happens next. Follow up after about a week if you have not heard back.",
            "Many states and cities have fair-chance or ban-the-box laws that delay record questions until later in hiring. Learn your local rule. When the question comes, be honest. Lying about a record is a common reason to lose a job later.",
            "Answer in three short parts: what happened, in one sentence and without excuses; what you have done since, such as programs, work, school and staying on track; and why you are ready for this job. Then move back to your skills. Practice it out loud until it feels calm.",
            "Bring proof: certificates, a reference letter, and your WOTC and bonding information. An AI assistant can help you practice interview questions, but never type your case numbers or other private details into it."
          ],
          steps: ["Apply to several jobs each week and track them in a list.", "Learn your state or city fair-chance rule.", "Write your three-part answer about your record.", "Practice it out loud with a person or an AI assistant, without private details.", "Bring certificates, references, and WOTC and bonding information to the interview."],
          words: [["Follow up", "contacting an employer again to check on your application."], ["Fair-chance law", "a law that limits when employers can ask about a record."], ["Reference letter", "a letter from someone who can speak well about your work or character."]],
          slides: [
            { title: "Apply steadily", bullets: ["Several applications each week", "Track employer, job, date and next step", "Follow up after about a week"] },
            { title: "When the record question comes", bullets: ["Know your local fair-chance rule", "Be honest: lying can cost the job later"] },
            { title: "Your three-part answer", bullets: ["What happened: one sentence, no excuses", "What you have done since", "Why you are ready for this job"] },
            { title: "Bring proof", bullets: ["Certificates and a reference letter", "WOTC and bonding information", "Practice with AI, but no private details"] }
          ],
          tryIt: "Final task: make your one-page housing-and-jobs plan with two housing options, your rental packet checklist, your nearest American Job Center, three second-chance employers or job leads, and your two-sentence WOTC and bonding pitch. Then say your three-part answer about your record out loud once.",
          youCanNow: "apply to second-chance jobs, track your applications, and answer questions about your record honestly and calmly.",
          quickCheck: [
            { objective: "O6", q: "What are the three parts of a good answer about your record?", options: ["Your case number, your sentence and your release date", "What happened, what you have done since and why you are ready", "Who was to blame, how unfair it was and how long ago", "Nothing, because you should not answer"], answer: 1, why: "A brief, honest three-part answer shows growth and readiness." },
            { objective: "O6", q: "You want AI to help you practice interview answers. What would you do?", options: ["Type your case numbers so it knows your history", "Paste your full record into it", "Use general words and keep case numbers out", "Ask it to invent a clean record"], answer: 2, why: "You can practice with AI without sharing private case details." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Finding second-chance work",
        questions: [
          { objective: "O4", q: "Where can you find your nearest American Job Center?", options: ["A shopping mall", "Your landlord", "CareerOneStop (careeronestop.org) or 211", "A text from a stranger"], answer: 2, why: "CareerOneStop, a Department of Labor website, and 211 can point you to a job center." },
          { objective: "O5", q: "Who receives the Work Opportunity Tax Credit?", options: ["The employer", "The job seeker as a cash payment", "The parole office", "The landlord"], answer: 0, why: "WOTC is a tax credit for employers who hire people from certain groups." },
          { objective: "O5", q: "What does the Federal Bonding Program give an employer?", options: ["A free car", "A loan", "A tax bill", "A free bond for the first six months of the job"], answer: 3, why: "The program gives a free fidelity bond covering the first six months." },
          { objective: "O6", q: "An interviewer asks about your record. What is the best approach?", options: ["Deny it", "Be honest: what happened, what you did since, why you are ready", "Get angry", "Leave the interview"], answer: 1, why: "A short, honest answer focused on change and readiness builds trust." },
          { objective: "O6", q: "Which should you NEVER type into an AI assistant while practicing for interviews?", options: ["\"Ask me a common interview question\"", "\"Make my answer shorter\"", "Your case numbers", "\"Give me feedback\""], answer: 2, why: "Case numbers and other private details should stay out of AI tools." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Finding Housing and Second-Chance Jobs",
    questions: [
      { objective: "O1", q: "What is 211?", options: ["A free, confidential service that connects you to local help", "A police line", "A bank", "A job ad website"], answer: 0, why: "211 connects people to local housing, food and other help." },
      { objective: "O1", q: "Transitional housing is:", options: ["A hotel for tourists", "Short-term housing with support, often for people coming home", "A storage unit", "A car"], answer: 1, why: "Transitional housing is a short-term step with support." },
      { objective: "O1", q: "You are on parole and found a room to rent. What should you do before signing?", options: ["Sign right away", "Keep it secret", "Check that your officer approves the address", "Pay cash to a stranger"], answer: 2, why: "Parole or probation may require your officer to approve where you live." },
      { objective: "O1", q: "Public housing waiting lists can be long. What is smart?", options: ["Never apply", "Apply only once you are homeless", "Apply once and change your phone number", "Apply early and keep your contact details up to date"], answer: 3, why: "Getting on lists early and staying reachable keeps your place." },
      { objective: "O2", q: "Which is a required denial for federal public housing?", options: ["Lifetime sex offender registration", "Any traffic ticket", "Being unemployed", "Having children"], answer: 0, why: "Federal rules require denial for anyone subject to lifetime sex offender registration." },
      { objective: "O2", q: "For most other records, who decides on a public housing application?", options: ["The FBI", "The local Public Housing Agency, using its own policy", "Your neighbors", "The applicant"], answer: 1, why: "Outside the required denials, the housing agency decides under its own written policy." },
      { objective: "O2", q: "May a public housing agency charge you for its criminal records check?", options: ["Yes, any amount", "Only on weekends", "No, it may not charge you", "Only in cash"], answer: 2, why: "The rule says the agency may not charge the applicant for the records check." },
      { objective: "O2", q: "Is a criminal record a protected class under the federal Fair Housing Act?", options: ["Yes, always", "Only for vouchers", "Only in summer", "No; state and city laws may give more protection"], answer: 3, why: "The federal Fair Housing Act does not list criminal records as a protected class." },
      { objective: "O2", q: "In California, a landlord wants to deny everyone with any record. This is:", options: ["Not allowed: blanket bans are not permitted", "Required by law", "A good policy", "Allowed only for apartments"], answer: 0, why: "California does not allow blanket bans on everyone with a criminal history." },
      { objective: "O3", q: "Which belongs in a rental packet?", options: ["Your Social Security card number written on the cover", "Proof of income and reference letters", "Your bank password", "Nothing"], answer: 1, why: "Proof of income and references answer a landlord's main worries." },
      { objective: "O3", q: "A rule of thumb many programs use for rent is:", options: ["All of your income", "Twice your income", "About a third of your income or less", "Rent does not matter"], answer: 2, why: "Keeping rent near a third of income or less leaves money for other needs." },
      { objective: "O3", q: "What is a sign of a rental scam?", options: ["You see the place in person first", "You get a written lease", "The landlord gives a receipt", "They want payment by wire before you see the place"], answer: 3, why: "Wire or gift card payment before seeing the place is a common scam." },
      { objective: "O4", q: "What does an American Job Center offer?", options: ["Free help with job searches, résumés and training", "Free cars", "Loans for vacations", "Housing deeds"], answer: 0, why: "American Job Centers are public offices that help with jobs and training." },
      { objective: "O4", q: "Which question is good to ask at a job center?", options: ["Can you lie to employers for me?", "Which employers here hire people with records?", "Can I skip work?", "Can you pay my rent forever?"], answer: 1, why: "Job centers often know local second-chance employers." },
      { objective: "O4", q: "A second-chance employer is:", options: ["An employer that hires only once", "A government jail", "A business open to hiring people with records", "A temp job that never pays"], answer: 2, why: "Second-chance employers are open to hiring people with records." },
      { objective: "O5", q: "Which IRS form starts the WOTC process?", options: ["Form 1040", "Form W-2", "Form 1099", "Form 8850"], answer: 3, why: "Form 8850 is filled out on or before the day of the job offer." },
      { objective: "O5", q: "Before telling an employer about WOTC, you should:", options: ["Check irs.gov to see whether it is in effect now", "Promise them a certain dollar amount", "Fill out their taxes", "Skip it"], answer: 0, why: "The credit has an end date and must be renewed by law, so check its current status." },
      { objective: "O5", q: "How much does a Federal Bonding Program bond cost the employer?", options: ["$500", "Nothing; it is free", "Half your pay", "$5,000"], answer: 1, why: "The bond is free to the employer and the job seeker; $5,000 is the coverage limit." },
      { objective: "O5", q: "Who arranges a federal bond in your state?", options: ["Your landlord", "The bank", "Your state bonding coordinator", "Your doctor"], answer: 2, why: "State bonding coordinators, listed on bonds4jobs.com, arrange the bonds." },
      { objective: "O6", q: "The best way to answer a question about your record is:", options: ["Say it never happened", "Tell your whole life story", "Change the subject", "Briefly say what happened, what you have done since and why you are ready"], answer: 3, why: "A short, honest three-part answer builds trust and moves back to your skills." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Pre-Test: What Do You Already Know?",
    from: [
      0,
      3,
      5,
      7,
      9,
      11,
      12,
      13,
      17,
      19
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      {
        name: "Housing options",
        objective: "O1",
        notYet: "Fewer than two options, or missing contact details.",
        meets: "Two housing options with contact details and what to bring.",
        exceeds: "Also notes cost and rules, and that the address was checked with parole if needed."
      },
      {
        name: "Rental packet checklist",
        objective: "O3",
        notYet: "No checklist.",
        meets: "A checklist of papers you have and papers you still need.",
        exceeds: "Includes a first draft of the short letter about what you have done since."
      },
      {
        name: "Job help and leads",
        objective: "O4",
        notYet: "No job center or fewer than three leads.",
        meets: "Nearest American Job Center and three second-chance employers or job leads.",
        exceeds: "Includes the questions you will ask on your first visit."
      },
      {
        name: "Employer pitch",
        objective: "O5",
        notYet: "No pitch, or it promises a set dollar amount.",
        meets: "A two-sentence pitch about WOTC and the Federal Bonding Program.",
        exceeds: "Also names the state bonding coordinator and notes WOTC was checked on irs.gov."
      },
      {
        name: "Answer about your record",
        objective: "O6",
        notYet: "Not practiced, or long, blaming or untrue.",
        meets: "Said out loud once: what happened, what you have done since, why you are ready.",
        exceeds: "Short, calm and practiced more than once."
      }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Learners who move into stable or transitional housing within 90 days (follow-up survey)",
      "Learners who visit an American Job Center or get a job within 90 days",
      "Employers who use WOTC or a federal bond to hire a learner, as reported by partners"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A phone to call 211 and job centers, or a computer with internet",
      "Paper and pen, or a folder, for the plan and rental packet",
      "About 60 minutes in total, in short sessions: lessons, practice, checks and the final task"
    ],
    facilitatorNotes: [
      "Have your local 211 number, nearest American Job Center and state bonding coordinator ready before the session.",
      "Practice the three-part record answer in pairs; it builds confidence fast.",
      "Rules differ by state and city; send legal questions to legal aid or a reentry counselor.",
      "Remind learners on parole or probation to check any new address with their officer first.",
      "Score the plan with the rubric, and give feedback on one Not yet row at a time."
    ]
  }
};
