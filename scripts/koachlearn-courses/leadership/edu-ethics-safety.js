"use strict";

// Koach Learn course: Leadership Development -> "AI for School and Educational Leaders 7: Ethics, Safety and Responsible AI" (course 7 of 8).
// Shape copied from re-entry/reentry-ai-digital-confidence.js. FERPA, COPPA and federal AI guidance checked on studentprivacy.ed.gov,
// ftc.gov and K-12 Dive on 27 October 2026; NIST AI RMF on nist.gov.

module.exports = {
  id: "edu-ethics-safety",
  category: "Leadership Development",
  name: "AI for School and Educational Leaders 7: Ethics, Safety and Responsible AI",
  skills: "Applying ethical principles to school AI, Spotting bias and equity risks, Protecting student data under FERPA and COPPA, Vetting vendors and agreements, Writing responsible-use guidelines, Responding to AI incidents and deepfakes",
  outcome: "write responsible-AI guidelines for your school or district, covering principles, privacy, equity, staff and student use, vendor review and an incident response plan, and use them to review a real AI tool and a realistic incident.",
  about: [
    "This course is for principals, district leaders, technology and privacy staff, counselors and teacher leaders. It brings together the ethics, privacy and safety threads from the earlier courses into the guidelines and procedures your school needs.",
    "Chapter 1 covers the principles: fairness and equity, transparency, human oversight, privacy and security, and how they show up in real school AI uses. Chapter 2 turns principles into practice: vendor review, written guidelines, and a plan for when something goes wrong, such as a data leak or an AI-generated fake of a student or teacher.",
    "This course explains the law in plain words so you know what to ask; it is not legal advice. Your district's counsel and privacy officer have the final word, and state laws may add requirements. A knowledge check closes each chapter and a 20-question quiz closes the course. This is course 7 of 8 in AI for School and Educational Leaders."
  ],
  finalTask: "Write two-page responsible-AI guidelines for your school or district: five principles in plain words, privacy rules (FERPA, COPPA, approved tools only), equity checks, what staff and students may and may not do, the vendor review steps, and a six-step incident response plan. Then test them: review one real AI tool with your vendor steps, and walk through one realistic incident (for example, an AI-generated fake image of a student shared in a group chat) using your plan.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Principals, district leaders, technology and privacy staff, counselors and teacher leaders in US schools and districts who set rules for AI use.",
    startingPoint: "Know AI basics, FERPA and COPPA basics, tool vetting and classroom AI rules from earlier courses. Their school or district may have no written responsible-AI guidelines or incident plan.",
    gap: "Without written guidelines, AI decisions are made case by case, equity risks go unchecked, and schools are unprepared when something goes wrong, such as a data leak or an AI-generated fake of a student. Leaders need clear principles, vendor review steps, staff and student rules and an incident plan.",
    constraints: [
      "The course explains the law in plain words and is not legal advice; district counsel and the privacy officer have the final word",
      "State laws may add requirements, and laws on AI-generated images are changing quickly",
      "No real student data or images in practice; incident walk-throughs use realistic made-up cases",
      "Images of minors are never forwarded; staff follow counsel and law-enforcement guidance",
      "Time: short lessons, with the guidelines taking longer to write and test"
    ],
    prerequisites: "Courses 1 to 6 of AI for School and Educational Leaders are recommended, especially course 1 and course 2."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Given an AI use in your school", action: "apply five responsible-AI principles to it", standard: "with one sentence on how it meets or fails each principle" },
    { id: "O2", condition: "Given an AI tool that scores, flags or adapts to students", action: "identify where it could treat groups of students unfairly", standard: "writing three equity questions for the vendor and one check on your own results" },
    { id: "O3", condition: "When staff use AI tools", action: "apply FERPA, COPPA and basic security habits", standard: "with five plain-language habits, each with an example of what not to do" },
    { id: "O4", condition: "Before an AI tool is approved", action: "run a vendor review from the tool's public documents", standard: "listing what the vendor must confirm in a signed agreement" },
    { id: "O5", condition: "With input from teachers, students and families", action: "draft responsible-AI guidelines with may and may-not rules for staff and students", standard: "with at least four concrete items each, checked against district policy and state law with counsel" },
    { id: "O6", condition: "Given a realistic AI incident such as a deepfake or data leak", action: "walk through a six-step incident response plan", standard: "starting with making the student safe and ending with updating the guidelines" }
  ],
  chapters: [
    {
      name: "Chapter 1: Principles in practice",
      lessons: [
        {
          objectives: ["O1"],
          title: "Five principles for AI in schools",
          minutes: 5,
          goal: "State five responsible-AI principles and apply them to a school example.",
          text: [
            "Most responsible-AI frameworks share a few ideas. Five that fit schools: Human oversight: educators make decisions about students; AI informs, never decides. Fairness and equity: AI should not disadvantage any group of students, and should widen access. Privacy and security: collect and share as little student data as possible, and protect it.",
            "Transparency: students, staff and families know when and how AI is used. Accountability: a named person owns each AI tool and its effects, and there is a way to raise concerns.",
            "These match the principles in the US Department of Education's July 22, 2025 Dear Colleague Letter on AI, which, as reported by K-12 Dive, calls for AI initiatives that are educator-led, ethical, accessible to students with disabilities, transparent in rollout and compliant with federal privacy laws. For risk management, NIST's voluntary AI Risk Management Framework (Govern, Map, Measure, Manage) is a free reference."
          ],
          words: [["Human oversight", "people reviewing and deciding, with AI only informing."], ["Equity", "making sure every student gets what they need to succeed."], ["Transparency", "being open about when and how AI is used."]],
          slides: [
            { title: "Five principles", bullets: ["Human oversight", "Fairness and equity", "Privacy and security", "Transparency and accountability"] },
            { title: "Federal AI letter, July 2025", bullets: ["Educator-led and ethical", "Accessible to students with disabilities", "Transparent; privacy-compliant"] },
            { title: "A free risk framework", bullets: ["NIST AI RMF: Govern, Map, Measure, Manage", "Voluntary; check nist.gov for updates"] }
          ],
          sources: [{ name: "K-12 Dive: Education Department issues AI priorities (July 2025)", url: "https://www.k12dive.com/news/education-department-issues-ai-priorities-but-what-if-the-agency-closes/754015/" }, { name: "NIST AI Risk Management Framework", url: "https://www.nist.gov/itl/ai-risk-management-framework" }],
          tryIt: "Take one AI use in your school (for example, an adaptive reading program). Write one sentence on how it meets or fails each of the five principles.",
          youCanNow: "apply five responsible-AI principles to a real school use.",
          quickCheck: [
            { objective: "O1", q: "What does the transparency principle mean?", options: ["Being open about when and how AI is used", "Using only free AI tools", "Letting AI make decisions in public", "Sharing student data with families"], answer: 0, why: "Transparency means people know when and how AI is used." },
            { objective: "O1", q: "An adaptive reading program chooses each student's next book. Which principle question would you ask?", options: ["Is it the cheapest program?", "Is it the newest program?", "Can teachers see its choices and change them?", "Does it have the most features?"], answer: 2, why: "Human oversight means educators decide and AI informs." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Bias and equity risks in school AI",
          minutes: 6,
          goal: "Spot where school AI uses could treat groups of students unfairly.",
          text: [
            "AI learns from data, and data reflects the past, including unfairness. In schools, watch four places. Detectors: AI-writing detectors can wrongly flag honest work, and English learners' writing may be flagged more often. Prediction: early-warning or risk scores can label students based on patterns linked to income, disability or race.",
            "Tracking: adaptive programs that keep giving some students easier work can narrow their opportunities. Access: if AI help needs a device or home internet, students without them fall further behind; if a tool is not accessible, students with disabilities are shut out.",
            "Equity checks: ask vendors how they test for bias and accessibility; look at results by student group in your own data (with privacy protections); never use an AI score alone for placement, discipline or eligibility decisions; and make sure every student can reach the tool at school."
          ],
          steps: ["List AI uses that sort, score or flag students.", "Ask the vendor how it tests for bias and accessibility.", "Review results by student group, protecting privacy.", "Never use an AI score alone for decisions about students.", "Check every student can access the tool at school."],
          words: [["Algorithmic bias", "unfair results from an AI system, often learned from past data."], ["Risk score", "a number a system gives a student to predict a problem, like dropping out."], ["Tracking", "keeping students on different levels of work, which can limit opportunities."]],
          slides: [
            { title: "Where bias shows up", bullets: ["Detectors that wrongly flag students", "Risk scores tied to income, disability, race", "Adaptive tracking that narrows opportunity"] },
            { title: "Access is equity", bullets: ["Device and home internet gaps", "Tools not accessible for disabilities"] },
            { title: "Equity checks", bullets: ["Ask vendors about bias and accessibility testing", "Review results by group", "No AI score alone for decisions"] }
          ],
          tryIt: "Choose one AI tool that scores, flags or adapts to students in your school. Write three equity questions you would ask the vendor and one check you would run on your own results.",
          youCanNow: "spot equity risks in school AI and put practical checks in place.",
          quickCheck: [
            { objective: "O2", q: "Why can AI-writing detectors raise equity concerns?", options: ["They are too expensive", "They may flag English learners' writing more often", "They work only on phones", "They grade too slowly"], answer: 1, why: "Unequal false flags fall on some groups of students more than others." },
            { objective: "O2", q: "An adaptive tool keeps one group of students on easier work for months. What would you do?", options: ["Nothing; the tool knows best", "Turn off all AI in the school", "Move those students to another school", "Check your own results by group and ask the vendor how the tool decides"], answer: 3, why: "Checking results by group shows whether the tool narrows opportunity for some students." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Privacy and security: FERPA, COPPA and good habits",
          minutes: 6,
          goal: "Apply FERPA and COPPA and basic security habits to AI tools.",
          text: [
            "FERPA protects student education records. Schools generally need consent to disclose personally identifiable information from them, with exceptions; a vendor may act as a school official only if it performs a school service, is under the school's direct control, and follows limits on re-sharing. Parents can inspect and review records; rights move to students at 18 or in college.",
            "COPPA, enforced by the FTC, protects children under 13 online. The FTC says schools may consent for parents only when information is collected for the school's use and benefit and for no other commercial purpose. The FTC amended its COPPA Rule on April 22, 2025; check the FTC's pages for current requirements.",
            "Good habits: data minimization (share only what the task needs), approved tools only, district accounts with strong passwords and two-step sign-in, no uploading of records to personal accounts, and knowing who to call if data may have leaked. Your state may have its own student-privacy law; your privacy officer will know."
          ],
          steps: ["Use only approved tools for student information.", "Share the minimum data needed.", "Use district accounts with two-step sign-in.", "Never upload records to personal accounts.", "Know who to call about a possible leak."],
          words: [["Data minimization", "collecting and sharing only the data a task really needs."], ["Two-step sign-in", "logging in with a password plus a second check, like a code on your phone."]],
          slides: [
            { title: "FERPA", bullets: ["Protects education records", "Consent usually needed to share PII", "Vendors only as controlled school officials"] },
            { title: "COPPA", bullets: ["Under 13, enforced by the FTC", "School consent: school use only, no other commercial use", "Rule amended April 22, 2025"] },
            { title: "Good habits", bullets: ["Data minimization", "Approved tools, district accounts, two-step sign-in", "Know who to call about a leak"] }
          ],
          sources: [{ name: "FERPA: Protecting Student Privacy", url: "https://studentprivacy.ed.gov/ferpa" }, { name: "FTC: Complying with COPPA, Frequently Asked Questions", url: "https://www.ftc.gov/business-guidance/resources/complying-coppa-frequently-asked-questions" }],
          tryIt: "Write five privacy and security habits for your staff in plain words, with one example of what NOT to do for each.",
          youCanNow: "apply FERPA, COPPA and everyday security habits to staff use of AI.",
          quickCheck: [
            { objective: "O3", q: "What does two-step sign-in add?", options: ["A second check, such as a code on your phone", "A second password typed twice", "A second AI tool", "A second staff member to sign in for you"], answer: 0, why: "A second check protects accounts even if a password is stolen." },
            { objective: "O3", q: "A teacher wants to upload a whole class list to an AI tool for one small task. What would you advise?", options: ["Upload it; more data gives better results", "Upload it to two tools to compare", "Share only what the task needs, in an approved tool", "Email it to the vendor instead"], answer: 2, why: "Data minimization means sharing only what the task needs." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Principles in practice",
        questions: [
          { objective: "O1", q: "Which principle says educators make decisions about students and AI only informs?", options: ["Transparency", "Data minimization", "Human oversight", "Tracking"], answer: 2, why: "Human oversight keeps decisions with educators." },
          { objective: "O1", q: "An early-warning tool gives a student a high risk score. The right use is:", options: ["Use it as one input for educators who also know the student", "Place the student automatically", "Share the score publicly", "Ignore all data"], answer: 0, why: "No AI score alone should decide." },
          { objective: "O2", q: "Why is access an equity issue for AI tools?", options: ["Only adults use AI", "It is not", "Access makes tools slower", "Students without devices, internet or accessible tools fall behind"], answer: 3, why: "Unequal access widens gaps." },
          { objective: "O3", q: "Data minimization means:", options: ["Collecting as much as possible", "Sharing only what the task needs", "Deleting all data", "Using smaller fonts"], answer: 1, why: "Less data means less risk." },
          { objective: "O3", q: "Under COPPA, a school may consent for parents when data is collected:", options: ["For advertising", "Never", "For any reason", "For the school's use and benefit, with no other commercial purpose"], answer: 3, why: "That is the FTC's condition." }
        ]
      }
    },
    {
      name: "Chapter 2: Guidelines, vendors and incidents",
      lessons: [
        {
          objectives: ["O4"],
          title: "Vetting vendors and agreements",
          minutes: 5,
          goal: "Run a vendor review before an AI tool is approved.",
          text: [
            "Every AI tool that will touch student information needs a review before approval. Use the Student Privacy Policy Office's Model Terms of Service checklist or your district's own. Key questions: what data, who owns it, is it used for advertising or to train AI, can it be deleted on request, who else receives it, how is it secured, and what happens in a breach.",
            "Add AI-specific questions: How does the AI work and what are its limits? How is it tested for accuracy, bias and accessibility? Can teachers see and override its outputs? Does it keep student inputs, and for how long?",
            "Get commitments in a signed agreement, not just a website policy that can change. Many states and districts use data privacy agreements with vendors; your privacy officer or counsel will know the right form."
          ],
          steps: ["Use the Model Terms of Service checklist or your district's.", "Ask the AI-specific questions.", "Request written answers.", "Get commitments in a signed agreement.", "Record the decision and review date."],
          words: [["Data privacy agreement", "a signed contract setting how a vendor may use and protect student data."], ["Override", "a person changing or rejecting what the AI produced."]],
          slides: [
            { title: "Privacy questions", bullets: ["What data, who owns it", "Ads or AI training?", "Deletion, sharing, security, breach"] },
            { title: "AI questions", bullets: ["How it works and its limits", "Testing for accuracy, bias, accessibility", "Can teachers override? How long are inputs kept?"] },
            { title: "Put it in writing", bullets: ["Signed agreement, not just a web page", "Ask your privacy officer for the form"] }
          ],
          sources: [{ name: "Privacy and Education Technology: Model Terms of Service checklist", url: "https://studentprivacy.ed.gov/privacy-and-education-technology" }],
          tryIt: "Run a vendor review on one AI tool your school uses or wants: answer the privacy and AI questions from its public documents, and list what you would need the vendor to confirm in writing.",
          youCanNow: "review an AI vendor on privacy, AI quality and contract terms before approval.",
          quickCheck: [
            { objective: "O4", q: "What is a data privacy agreement?", options: ["A vendor's marketing page", "A signed contract on how a vendor uses and protects student data", "A form students sign", "A list of approved websites"], answer: 1, why: "A signed agreement holds the vendor to its commitments." },
            { objective: "O4", q: "A vendor's website says it never trains AI on student data. What would you do?", options: ["Approve the tool on that basis", "Ignore it", "Ask students if it is true", "Get that commitment in the signed agreement"], answer: 3, why: "Website policies can change; a signed agreement does not change on its own." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Writing responsible-AI guidelines",
          minutes: 6,
          goal: "Draft clear guidelines for staff and student AI use.",
          text: [
            "Guidelines turn principles into everyday rules. Keep them to about two pages and use plain words. Sections: purpose and principles; approved tools and how to request a new one; privacy rules; what staff may and may not do; what students may and may not do (link your AI use levels); academic integrity; transparency with families; and who to contact.",
            "Use concrete examples: \"Staff may use approved AI tools to draft lesson materials and family letters. Staff may not enter student names, grades, IEP or 504 information, or discipline records into any unapproved tool. Staff may not use AI to make grading, placement or discipline decisions.\"",
            "Write them with teachers, students (age-appropriately) and families, check them with counsel against district policy and state law, and set a review date. Guidelines nobody helped write are guidelines nobody follows."
          ],
          steps: ["Draft the sections: principles, tools, privacy, staff, students, integrity, transparency, contact.", "Add concrete may / may not examples.", "Involve teachers, students and families.", "Check with counsel against policy and state law.", "Publish and set a review date."],
          words: [["Guidelines", "practical rules that explain how to follow a policy day to day."], ["Board policy", "a formal rule adopted by the school board."]],
          slides: [
            { title: "Two pages, plain words", bullets: ["Principles, tools, privacy", "Staff and student may / may not", "Integrity, transparency, contact"] },
            { title: "Concrete examples", bullets: ["May: draft materials in approved tools", "May not: student data in unapproved tools", "May not: AI grading or discipline decisions"] },
            { title: "Write it together", bullets: ["Teachers, students, families", "Counsel checks policy and state law", "Set a review date"] }
          ],
          tryIt: "Draft the staff and student \"may / may not\" sections of your guidelines with at least four items each. Share them with two teachers and note their changes.",
          youCanNow: "write practical responsible-AI guidelines with the people who will follow them.",
          quickCheck: [
            { objective: "O5", q: "What makes guidelines useful to staff?", options: ["Concrete may and may-not examples", "Long legal language", "A list of every AI tool on the market", "No examples, so staff can decide"], answer: 0, why: "Concrete examples make rules easy to follow." },
            { objective: "O5", q: "Your draft guidelines are ready. What should happen before they are adopted?", options: ["Post them right away", "Ask an AI chatbot to approve them", "Get teacher, student and family input and check them against policy and law with counsel", "Keep them secret from staff"], answer: 2, why: "Guidelines need input from the people affected and a legal check." }
          ]
        },
        {
          objectives: ["O6"],
          title: "When something goes wrong: incident response",
          minutes: 6,
          goal: "Plan the steps for an AI incident, including data leaks and deepfakes.",
          text: [
            "Plan before the incident. Common AI incidents: student data entered into an unapproved tool; an AI tool giving harmful or wrong information to students; and AI-generated fake images, audio or video of students or staff (deepfakes), which can be harassment and may be a crime.",
            "A six-step plan: 1) Make safe: stop the harm (remove access, pause the tool, support the affected person). 2) Report: to the principal and the district contact named in your guidelines. 3) Preserve: keep evidence as your district directs (for images of minors, follow law-enforcement and counsel guidance; never forward or copy them). 4) Assess: what data or people are affected. 5) Notify: families and others as law and policy require. 6) Learn: fix the cause and update guidelines.",
            "For deepfakes and harassment, follow your bullying, harassment and Title IX procedures and involve counsel and, where required, law enforcement. Laws on AI-generated images are changing quickly at federal and state level; your counsel will know what applies."
          ],
          steps: ["Make safe: stop the harm and support the person.", "Report to the principal and district contact.", "Preserve evidence as directed; never forward images of minors.", "Assess what data or people are affected.", "Notify as law and policy require; then learn and update."],
          words: [["Incident response", "the planned steps for handling something that went wrong."], ["Deepfake", "a fake image, voice or video made with AI to look real."], ["Title IX", "the federal law against sex discrimination in education, including sexual harassment."]],
          slides: [
            { title: "Common AI incidents", bullets: ["Student data in an unapproved tool", "Harmful or wrong AI output to students", "Deepfakes of students or staff"] },
            { title: "Six steps", bullets: ["1 Make safe  2 Report  3 Preserve", "4 Assess  5 Notify  6 Learn"] },
            { title: "Deepfakes and harassment", bullets: ["Follow bullying, harassment, Title IX procedures", "Never forward images of minors", "Involve counsel; laws are changing"] }
          ],
          tryIt: "Final task: finish your two-page responsible-AI guidelines (principles, privacy, equity, staff and student rules, vendor steps, six-step incident plan). Test them by reviewing one real tool and walking through one realistic incident, noting any gap you found.",
          youCanNow: "lead responsible AI in your school with clear guidelines, vendor review and an incident plan.",
          quickCheck: [
            { objective: "O6", q: "What is the last step of the incident plan?", options: ["Make safe", "Learn: fix the cause and update the guidelines", "Notify the press", "Delete all records"], answer: 1, why: "Learning from each incident keeps it from happening again." },
            { objective: "O6", q: "A staff member receives an AI fake image of a student. What should they do with it?", options: ["Forward it to colleagues so they know", "Post a warning with the image", "Delete it and say nothing", "Not forward it, and follow counsel and law-enforcement guidance on preserving evidence"], answer: 3, why: "Images of minors are never forwarded; evidence is handled as counsel and law enforcement advise." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Guidelines, vendors and incidents",
        questions: [
          { objective: "O4", q: "Why get vendor commitments in a signed agreement?", options: ["Agreements are optional", "It is faster", "Website policies can change", "Vendors prefer it"], answer: 2, why: "Signed terms bind the vendor." },
          { objective: "O4", q: "Which is an AI-specific vendor question?", options: ["Can teachers see and override the AI's outputs?", "What color is the logo?", "How many staff does the vendor have?", "Where is their office?"], answer: 0, why: "Human override is key to oversight." },
          { objective: "O5", q: "Who should help write the guidelines?", options: ["Only the vendor", "Teachers, students and families, checked by counsel", "Only the principal, alone", "An AI tool alone"], answer: 1, why: "Guidelines people help write are guidelines people follow." },
          { objective: "O6", q: "A student reports an AI fake image of a classmate in a group chat. What is the first step?", options: ["Make safe: stop the harm and support the student", "Forward it to staff to show them", "Ignore it", "Post a warning with the image"], answer: 0, why: "Safety first; never spread the image." },
          { objective: "O6", q: "What is the last step of the incident plan?", options: ["Forget about it", "Blame the student", "Delete the guidelines", "Learn: fix the cause and update the guidelines"], answer: 3, why: "Incidents should improve the system." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: AI for School and Educational Leaders 7: Ethics, Safety and Responsible AI",
    questions: [
      { objective: "O1", q: "Human oversight means:", options: ["AI decides; educators watch", "Educators decide; AI informs", "No one decides", "Parents decide all AI use"], answer: 1, why: "Decisions about students stay human." },
      { objective: "O1", q: "Transparency means:", options: ["Hiding AI use", "Using clear plastic", "Being open about when and how AI is used", "Sharing student data"], answer: 2, why: "People should know when AI is involved." },
      { objective: "O1", q: "Accountability means:", options: ["No one is responsible", "The AI is responsible", "A named person owns each AI tool and its effects", "Vendors decide everything"], answer: 2, why: "Someone must answer for each tool." },
      { objective: "O1", q: "The July 2025 federal AI letter calls for AI that is:", options: ["Educator-led, ethical, accessible, transparent and privacy-compliant", "Teacher-free", "Unregulated", "Only for high schools"], answer: 0, why: "Those are its stated principles." },
      { objective: "O1", q: "The NIST AI RMF is:", options: ["A student test", "A law", "A software product", "A voluntary framework for managing AI risk"], answer: 3, why: "NIST describes it as voluntary." },
      { objective: "O2", q: "AI-writing detectors raise equity concerns because they:", options: ["Are always fair", "May flag English learners' writing more often", "Are free", "Never flag anyone"], answer: 1, why: "False positives can fall unevenly." },
      { objective: "O2", q: "Adaptive tracking can be a risk when it:", options: ["Is used by teachers", "Challenges every student", "Is turned off", "Keeps some students on easier work and narrows opportunity"], answer: 3, why: "Tracking can limit opportunity." },
      { objective: "O2", q: "An AI risk score should be used:", options: ["Publicly", "As the final decision", "As one input, never alone for decisions", "Never reviewed"], answer: 2, why: "Educators weigh it with what they know." },
      { objective: "O3", q: "Under FERPA, a vendor may act as a school official only if it:", options: ["Performs a school service under direct control, with limits on re-sharing", "Is popular", "Is free", "Has a privacy page"], answer: 0, why: "Those are the FERPA conditions." },
      { objective: "O3", q: "COPPA protects children:", options: ["Under 16", "Under 13", "Under 18", "Over 13"], answer: 1, why: "The FTC says under 13." },
      { objective: "O3", q: "The FTC amended its COPPA Rule on:", options: ["April 22, 2025", "January 1, 1990", "October 27, 2026", "July 4, 2020"], answer: 0, why: "The FTC FAQ gives April 22, 2025." },
      { objective: "O3", q: "Two-step sign-in adds:", options: ["Nothing", "A second password on paper", "A second user", "A second check, like a code on your phone"], answer: 3, why: "It protects accounts if a password leaks." },
      { objective: "O4", q: "The Model Terms of Service checklist comes from:", options: ["A vendor", "The Department of Education's Student Privacy Policy Office", "A social network", "A news site"], answer: 1, why: "It is listed on studentprivacy.ed.gov." },
      { objective: "O4", q: "A data privacy agreement is:", options: ["A student pledge", "A website banner", "A signed contract on how a vendor uses and protects student data", "A password"], answer: 2, why: "It binds the vendor in writing." },
      { objective: "O5", q: "Good guidelines include:", options: ["Vendor ads", "Only general values", "Concrete may / may not examples", "Student names"], answer: 2, why: "Examples make rules usable." },
      { objective: "O5", q: "Guidelines should be checked against:", options: ["District policy and state law, with counsel", "Social media", "Vendor blogs", "Nothing"], answer: 0, why: "They must fit existing law and policy." },
      { objective: "O6", q: "An AI deepfake of a student shared online may be:", options: ["A school project", "Harmless fun", "Always legal", "Harassment and possibly a crime"], answer: 3, why: "Treat it as serious harm." },
      { objective: "O6", q: "When preserving evidence involving images of minors, staff should:", options: ["Forward them to colleagues", "Follow counsel and law-enforcement guidance and never forward them", "Post them", "Save them to personal phones"], answer: 1, why: "Copying such images can itself cause harm or break the law." },
      { objective: "O6", q: "Notifying families after an incident should follow:", options: ["Social media comments", "Whatever is easiest", "Nothing", "Law and district policy"], answer: 3, why: "Notification duties come from law and policy." },
      { objective: "O6", q: "Laws on AI-generated images are:", options: ["The same in every state", "Fixed forever", "Changing quickly; ask counsel what applies", "Not relevant to schools"], answer: 2, why: "Federal and state rules are evolving." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Pre-Test: What Do You Already Know?",
    from: [
      0,
      1,
      5,
      7,
      8,
      9,
      12,
      14,
      16,
      17
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      {
        name: "Principles",
        objective: "O1",
        notYet: "Fewer than five principles, or they are not in plain words.",
        meets: "Five principles in plain words.",
        exceeds: "Each principle has a short school example."
      },
      {
        name: "Privacy and equity",
        objective: "O3",
        notYet: "Privacy rules or equity checks are missing.",
        meets: "Privacy rules (FERPA, COPPA, approved tools only) and equity checks are included.",
        exceeds: "Equity checks say how the school will look at its own results by group."
      },
      {
        name: "Staff and student rules",
        objective: "O5",
        notYet: "No may and may-not rules, or they are vague.",
        meets: "Says what staff and students may and may not do.",
        exceeds: "Teachers reviewed the rules and their changes were made."
      },
      {
        name: "Vendor review",
        objective: "O4",
        notYet: "No vendor steps, or no real tool was reviewed.",
        meets: "Vendor review steps, tested on one real AI tool.",
        exceeds: "Lists what the vendor must confirm in a signed agreement."
      },
      {
        name: "Incident plan",
        objective: "O6",
        notYet: "Fewer than six steps, or not tested on an incident.",
        meets: "A six-step incident plan, walked through on one realistic incident.",
        exceeds: "Notes a gap found in the walk-through and how the guidelines will change."
      }
    ]
  },
  evaluation: {
    results: [
      "Leaders who finish the course and pass the final task (rubric)",
      "Schools or districts that adopt written responsible-AI guidelines within 90 days (follow-up survey)",
      "AI tools reviewed with the vendor steps before approval (follow-up survey)",
      "Schools that have practiced the incident plan with their leadership team"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A computer with internet",
      "Your district's current technology, privacy and acceptable-use policies",
      "The Model Terms of Service resource from studentprivacy.ed.gov",
      "A realistic made-up incident case for the walk-through",
      "About 60 minutes for the lessons and checks, plus time to write and test the guidelines"
    ],
    facilitatorNotes: [
      "Take the pre-test together, then apply the five principles to one tool the group knows.",
      "Remind leaders that the course is not legal advice; invite district counsel or the privacy officer to the guidelines session.",
      "Run the incident walk-through as a tabletop exercise with roles; use made-up cases only.",
      "Handle the deepfake topic with care; make counselors available, and never show or share images of minors.",
      "Score the final task with the rubric, and ask each team to name one gap their walk-through found."
    ]
  }
};
