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
  chapters: [
    {
      name: "Chapter 1: Finding a place to live",
      lessons: [
        {
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
          youCanNow: "use 211 and your local Public Housing Agency to find housing options and list what each one needs."
        },
        {
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
          youCanNow: "explain the main housing rules about records, ask a provider for its policy, and ask for a review if you are denied."
        },
        {
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
          youCanNow: "build a rental packet that shows a landlord you will pay, take care of the place and be a good neighbor, and spot rental scams."
        }
      ],
      check: {
        title: "Knowledge Check 1: Finding a place to live",
        questions: [
          { q: "You just got home and need housing help tonight. What is a good first step?", options: ["Wait a month", "Call 211 or visit 211.org", "Sign any lease you see online", "Send a deposit by gift card"], answer: 1, why: "211 connects you to local housing and other help." },
          { q: "Who runs public housing and Housing Choice Vouchers in your area?", options: ["The local Public Housing Agency", "The post office", "Your bank", "The DMV"], answer: 0, why: "Your local Public Housing Agency runs these programs and their waiting lists." },
          { q: "Before a public housing agency denies you because of a criminal record, it must:", options: ["Charge you for the check", "Post it online", "Tell you and give you a copy of the record and a chance to dispute it", "Call your family"], answer: 2, why: "The rules require notice, a copy of the record and a chance to dispute it." },
          { q: "In California, which can a landlord NOT use against you?", options: ["Your income", "Your references", "Your rental history", "A sealed record"], answer: 3, why: "California does not allow landlords to use sealed or expunged records, arrests without conviction, or juvenile records." },
          { q: "A landlord asks you to pay a deposit by gift card before you see the apartment. What do you do?", options: ["Pay quickly so you do not lose it", "Pay half", "Refuse; it is a scam warning sign", "Send your bank password"], answer: 2, why: "Paying before seeing the place, with gift cards, is a classic rental scam." }
        ]
      }
    },
    {
      name: "Chapter 2: Finding second-chance work",
      lessons: [
        {
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
          youCanNow: "find an American Job Center and a reentry job program and ask them for the help you need."
        },
        {
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
          youCanNow: "find second-chance employers and explain WOTC and federal bonding to an employer in plain words."
        },
        {
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
          youCanNow: "apply to second-chance jobs, track your applications, and answer questions about your record honestly and calmly."
        }
      ],
      check: {
        title: "Knowledge Check 2: Finding second-chance work",
        questions: [
          { q: "Where can you find your nearest American Job Center?", options: ["A shopping mall", "Your landlord", "CareerOneStop (careeronestop.org) or 211", "A text from a stranger"], answer: 2, why: "CareerOneStop, a Department of Labor website, and 211 can point you to a job center." },
          { q: "Who receives the Work Opportunity Tax Credit?", options: ["The employer", "The job seeker as a cash payment", "The parole office", "The landlord"], answer: 0, why: "WOTC is a tax credit for employers who hire people from certain groups." },
          { q: "What does the Federal Bonding Program give an employer?", options: ["A free car", "A loan", "A tax bill", "A free bond for the first six months of the job"], answer: 3, why: "The program gives a free fidelity bond covering the first six months." },
          { q: "An interviewer asks about your record. What is the best approach?", options: ["Deny it", "Be honest: what happened, what you did since, why you are ready", "Get angry", "Leave the interview"], answer: 1, why: "A short, honest answer focused on change and readiness builds trust." },
          { q: "Which should you NEVER type into an AI assistant while practicing for interviews?", options: ["\"Ask me a common interview question\"", "\"Make my answer shorter\"", "Your case numbers", "\"Give me feedback\""], answer: 2, why: "Case numbers and other private details should stay out of AI tools." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Finding Housing and Second-Chance Jobs",
    questions: [
      { q: "What is 211?", options: ["A free, confidential service that connects you to local help", "A police line", "A bank", "A job ad website"], answer: 0, why: "211 connects people to local housing, food and other help." },
      { q: "Transitional housing is:", options: ["A hotel for tourists", "Short-term housing with support, often for people coming home", "A storage unit", "A car"], answer: 1, why: "Transitional housing is a short-term step with support." },
      { q: "You are on parole and found a room to rent. What should you do before signing?", options: ["Sign right away", "Keep it secret", "Check that your officer approves the address", "Pay cash to a stranger"], answer: 2, why: "Parole or probation may require your officer to approve where you live." },
      { q: "Public housing waiting lists can be long. What is smart?", options: ["Never apply", "Apply only once you are homeless", "Apply once and change your phone number", "Apply early and keep your contact details up to date"], answer: 3, why: "Getting on lists early and staying reachable keeps your place." },
      { q: "Which is a required denial for federal public housing?", options: ["Lifetime sex offender registration", "Any traffic ticket", "Being unemployed", "Having children"], answer: 0, why: "Federal rules require denial for anyone subject to lifetime sex offender registration." },
      { q: "For most other records, who decides on a public housing application?", options: ["The FBI", "The local Public Housing Agency, using its own policy", "Your neighbors", "The applicant"], answer: 1, why: "Outside the required denials, the housing agency decides under its own written policy." },
      { q: "May a public housing agency charge you for its criminal records check?", options: ["Yes, any amount", "Only on weekends", "No, it may not charge you", "Only in cash"], answer: 2, why: "The rule says the agency may not charge the applicant for the records check." },
      { q: "Is a criminal record a protected class under the federal Fair Housing Act?", options: ["Yes, always", "Only for vouchers", "Only in summer", "No; state and city laws may give more protection"], answer: 3, why: "The federal Fair Housing Act does not list criminal records as a protected class." },
      { q: "In California, a landlord wants to deny everyone with any record. This is:", options: ["Not allowed: blanket bans are not permitted", "Required by law", "A good policy", "Allowed only for apartments"], answer: 0, why: "California does not allow blanket bans on everyone with a criminal history." },
      { q: "Which belongs in a rental packet?", options: ["Your Social Security card number written on the cover", "Proof of income and reference letters", "Your bank password", "Nothing"], answer: 1, why: "Proof of income and references answer a landlord's main worries." },
      { q: "A rule of thumb many programs use for rent is:", options: ["All of your income", "Twice your income", "About a third of your income or less", "Rent does not matter"], answer: 2, why: "Keeping rent near a third of income or less leaves money for other needs." },
      { q: "What is a sign of a rental scam?", options: ["You see the place in person first", "You get a written lease", "The landlord gives a receipt", "They want payment by wire before you see the place"], answer: 3, why: "Wire or gift card payment before seeing the place is a common scam." },
      { q: "What does an American Job Center offer?", options: ["Free help with job searches, résumés and training", "Free cars", "Loans for vacations", "Housing deeds"], answer: 0, why: "American Job Centers are public offices that help with jobs and training." },
      { q: "Which question is good to ask at a job center?", options: ["Can you lie to employers for me?", "Which employers here hire people with records?", "Can I skip work?", "Can you pay my rent forever?"], answer: 1, why: "Job centers often know local second-chance employers." },
      { q: "A second-chance employer is:", options: ["An employer that hires only once", "A government jail", "A business open to hiring people with records", "A temp job that never pays"], answer: 2, why: "Second-chance employers are open to hiring people with records." },
      { q: "Which IRS form starts the WOTC process?", options: ["Form 1040", "Form W-2", "Form 1099", "Form 8850"], answer: 3, why: "Form 8850 is filled out on or before the day of the job offer." },
      { q: "Before telling an employer about WOTC, you should:", options: ["Check irs.gov to see whether it is in effect now", "Promise them a certain dollar amount", "Fill out their taxes", "Skip it"], answer: 0, why: "The credit has an end date and must be renewed by law, so check its current status." },
      { q: "How much does a Federal Bonding Program bond cost the employer?", options: ["$500", "Nothing; it is free", "Half your pay", "$5,000"], answer: 1, why: "The bond is free to the employer and the job seeker; $5,000 is the coverage limit." },
      { q: "Who arranges a federal bond in your state?", options: ["Your landlord", "The bank", "Your state bonding coordinator", "Your doctor"], answer: 2, why: "State bonding coordinators, listed on bonds4jobs.com, arrange the bonds." },
      { q: "The best way to answer a question about your record is:", options: ["Say it never happened", "Tell your whole life story", "Change the subject", "Briefly say what happened, what you have done since and why you are ready"], answer: 3, why: "A short, honest three-part answer builds trust and moves back to your skills." }
    ]
  }
};
