"use strict";

// Koach Learn course: Leadership Development -> "AI for School and Educational Leaders 8: Final Project and Capstone" (course 8 of 8).
// Shape copied from re-entry/reentry-ai-digital-confidence.js. Privacy and federal guidance sources checked 27 October 2026.

module.exports = {
  id: "edu-capstone",
  category: "Leadership Development",
  name: "AI for School and Educational Leaders 8: Final Project and Capstone",
  skills: "Choosing a student-centered problem, Designing a scoped AI pilot, Running a privacy and equity check, Planning staff training, Communicating with families, Setting success measures and presenting to leadership",
  outcome: "design a complete, ready-to-present AI pilot plan for your school or district: a real problem, a scoped pilot with a vetted tool, a privacy and equity check, a staff-training plan, a family communication, success measures and a decision rule, presented in ten minutes to a leadership team or board.",
  about: [
    "This is the final course of AI for School and Educational Leaders. You bring together everything from courses 1 to 7, the basics, tools, planning, assessment, student AI literacy, productivity and responsible use, into one plan you could actually run.",
    "Chapter 1 designs the pilot: the problem worth solving, the scope and tool, and the privacy and equity check. Chapter 2 prepares the people and the proof: staff training, family communication, success measures, and the presentation.",
    "Choose a pilot you have the authority to propose, or one you will propose to someone who does. Use the guidelines you wrote in course 7. A knowledge check closes each chapter and a 20-question quiz closes the course."
  ],
  finalTask: "Complete and present your AI pilot plan (about four pages): the problem and who it serves, with evidence; the pilot scope (who, what, how long) and the tool, with its vendor review; a privacy and equity check (FERPA, COPPA if under 13, accessibility, access); a staff-training plan; a family letter and short FAQ; three to five success measures with a baseline; and a go, adjust or stop rule. Present it in ten minutes to a leadership team, colleague group or board, and record the questions and your answers.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Principals, district leaders, instructional coaches, technology staff and teacher leaders finishing AI for School and Educational Leaders, who will propose an AI pilot in their school or district.",
    startingPoint: "Have completed courses 1 to 7: AI basics, tool vetting, planning, assessment, student AI literacy, productivity and written responsible-AI guidelines. Have not yet designed a full pilot with measures, training and family communication.",
    gap: "Many school AI efforts start with a tool instead of a problem, skip privacy and equity checks, and have no way to decide whether they worked. Leaders need a complete, honest pilot plan they can present and run, so AI is used only where it helps students.",
    constraints: [
      "The pilot must be one the learner has the authority to propose, or will propose to someone who does",
      "FERPA, COPPA for students under 13, district policy and state law apply; the privacy officer signs off",
      "No real student data in the plan documents; use summary evidence",
      "Federal funding rules change, so learners check with their federal programs office",
      "Time: short lessons, with the plan and presentation taking several sessions"
    ],
    prerequisites: "Courses 1 to 7 of AI for School and Educational Leaders, especially course 7 (\"Ethics, Safety and Responsible AI\")."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Given a challenge in your school", action: "write a student-centered problem statement with evidence", standard: "saying what is wrong, for whom and how much, and whether AI is the right answer" },
    { id: "O2", condition: "Given your problem", action: "set a small pilot scope and choose a tool that passes vendor review", standard: "naming who, what changes and how long, with the tool chosen after the scope" },
    { id: "O3", condition: "Before the pilot starts", action: "run a privacy and equity check with a guard and an owner for each risk", standard: "covering FERPA, COPPA if students are under 13, accessibility and access, signed off by the privacy officer" },
    { id: "O4", condition: "For the staff in the pilot", action: "plan hands-on training, rules and support", standard: "with a 60-minute training agenda, a named contact and the notes teachers will keep" },
    { id: "O5", condition: "For families of students in the pilot", action: "write an honest family letter and a five-question FAQ", standard: "under one page, checked by a parent or family liaison, with translations checked by qualified speakers" },
    { id: "O6", condition: "For your full pilot plan", action: "set three to five success measures with a baseline and a go, adjust or stop rule, and present the plan", standard: "in ten minutes, with the rule written before the start and the questions and answers recorded" }
  ],
  chapters: [
    {
      name: "Chapter 1: Designing the pilot",
      lessons: [
        {
          objectives: ["O1"],
          title: "Start with a student-centered problem",
          minutes: 5,
          goal: "Define the problem your pilot will solve, with evidence and the students it serves.",
          text: [
            "Strong pilots start with a problem, not a product. Ask: what is getting in the way of student learning or wellbeing, or of teachers' time with students? Examples: teachers spend hours each week on family translations; students in grade 9 algebra need more practice with feedback; new teachers struggle to differentiate.",
            "Gather evidence: data you already have (with privacy protections), teacher and student surveys, and conversations. Write the problem in one sentence with who is affected and how much: \"Our 9th-grade algebra teachers report under 10 minutes a week per student for individual feedback, and 40 percent of students failed the first unit test.\"",
            "Then ask whether AI is the right answer at all. Sometimes a schedule change, a template or more staff time solves it better. If AI is a fit, say exactly what it will do."
          ],
          steps: ["List problems that block learning, wellbeing or teacher time.", "Gather evidence: data, surveys, conversations.", "Write the problem in one sentence: who, what, how much.", "Ask whether AI is the right answer.", "If yes, say exactly what AI will do."],
          words: [["Problem statement", "one sentence that says what is wrong, for whom, and how much."], ["Evidence", "data and observations that show a problem is real."]],
          slides: [
            { title: "Problem first, product second", bullets: ["What blocks learning, wellbeing or teacher time?", "Translations, practice, differentiation"] },
            { title: "Show the evidence", bullets: ["Existing data, with privacy protections", "Surveys and conversations", "One sentence: who, what, how much"] },
            { title: "Is AI the answer?", bullets: ["Sometimes a schedule or template is better", "If AI fits, say exactly what it does"] }
          ],
          tryIt: "Write your problem statement in one sentence with evidence, and one sentence on exactly what AI would do about it, or why something else would work better.",
          youCanNow: "define a student-centered problem with evidence before choosing any AI tool.",
          quickCheck: [
            { objective: "O1", q: "What does a problem statement say?", options: ["Which AI tool you want to buy", "What is wrong, for whom, and how much", "How much the pilot will cost", "Who will present the plan"], answer: 1, why: "A clear problem statement keeps the pilot focused on students, not on a tool." },
            { objective: "O1", q: "A vendor offers your school a free AI tool. What would you do first?", options: ["Start using it, since it is free", "Pick a problem it might solve later", "Define the student problem and ask whether AI is the right answer at all", "Ask students to try it at home"], answer: 2, why: "Strong pilots start from a student-centered problem, not a tool." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Scoping the pilot and choosing the tool",
          minutes: 6,
          goal: "Set a small, clear pilot scope and choose a tool that passes vendor review.",
          text: [
            "Keep it small: a few teachers or one grade or course, for six to twelve weeks. A small pilot is easier to support, measure and stop if needed. Write who takes part, what they will do differently, and when.",
            "Choose the tool last. Prefer tools already approved in your district, or ones that pass the vendor review from course 7 (the Model Terms of Service checklist plus AI questions about accuracy, bias, accessibility and teacher override). Check the tool's age rules if students will use it.",
            "Consider funding. The Department of Education's July 2025 Dear Colleague Letter, as reported by K-12 Dive, says existing federal grant funds may support AI for high-quality curriculum tools, high-impact tutoring, and college and career pathway advising, if legal requirements are met. Check the letter on ed.gov and with your federal programs office before planning on any funds."
          ],
          steps: ["Choose a small group and six to twelve weeks.", "Write who, what changes, and when.", "Prefer approved tools; otherwise run the vendor review.", "Check age rules if students use it.", "Check funding with your federal programs office."],
          words: [["Scope", "the size and limits of a project: who, what and how long."], ["Federal programs office", "the district office that manages federal grants like Title I."]],
          slides: [
            { title: "Keep it small", bullets: ["A few teachers, one grade or course", "Six to twelve weeks", "Easy to support, measure and stop"] },
            { title: "Choose the tool last", bullets: ["Prefer district-approved tools", "Otherwise run the vendor review", "Check age rules for student use"] },
            { title: "Funding", bullets: ["July 2025 federal letter: some AI uses fundable", "Curriculum tools, tutoring, pathway advising", "Confirm with your federal programs office"] }
          ],
          sources: [{ name: "K-12 Dive: Education Department issues AI priorities (July 2025)", url: "https://www.k12dive.com/news/education-department-issues-ai-priorities-but-what-if-the-agency-closes/754015/" }, { name: "Privacy and Education Technology: Model Terms of Service checklist", url: "https://studentprivacy.ed.gov/privacy-and-education-technology" }],
          tryIt: "Write your pilot scope (who, what changes, how long) and name the tool, with its approval status or the vendor review you ran.",
          youCanNow: "scope a small AI pilot and choose a tool that has been properly reviewed.",
          quickCheck: [
            { objective: "O2", q: "What is a good pilot scope?", options: ["Every school in the district for three years", "A few teachers in one course for six to twelve weeks", "One student for one day", "No set length"], answer: 1, why: "A small, clear scope lets you learn quickly and limit risk." },
            { objective: "O2", q: "The tool you want is not yet approved by the district. What do you do?", options: ["Run the vendor review before the pilot", "Use it anyway for a short pilot", "Ask teachers to buy it themselves", "Choose a tool at random"], answer: 0, why: "Tools must pass vendor review before students or staff use them." }
          ]
        },
        {
          objectives: ["O3"],
          title: "The privacy and equity check",
          minutes: 6,
          goal: "Run a privacy and equity check on your pilot before it starts.",
          text: [
            "Privacy: list exactly what student data the pilot uses and where it goes. Under FERPA, sharing personally identifiable information from education records with a vendor generally needs consent unless an exception applies, such as a vendor acting as a school official under the school's direct control with limits on re-sharing. If students are under 13, COPPA applies; school consent works only for school use with no other commercial purpose. Get your privacy officer's sign-off.",
            "Equity: who might be left out or harmed? Check access (devices, internet, accessibility for students with disabilities, languages for families), whether results could differ by student group, and whether any AI output could affect grades, placement or discipline; if so, add human review.",
            "Write the check on one page with each risk, the guard and the owner. A pilot that has not passed this check is not ready to start."
          ],
          steps: ["List the student data, where it goes and why.", "Check FERPA, and COPPA if students are under 13.", "Get the privacy officer's sign-off.", "Check access, accessibility, languages and group differences.", "Write each risk with its guard and owner."],
          words: [["Sign-off", "formal approval from the person responsible."], ["Accessibility", "whether people with disabilities can fully use a tool."]],
          slides: [
            { title: "Privacy", bullets: ["What data, where it goes, why", "FERPA; COPPA if under 13", "Privacy officer signs off"] },
            { title: "Equity", bullets: ["Devices, internet, accessibility, languages", "Different results by group?", "Human review for anything high-stakes"] },
            { title: "One page", bullets: ["Risk, guard, owner", "Not passed = not ready"] }
          ],
          sources: [{ name: "FERPA: Protecting Student Privacy", url: "https://studentprivacy.ed.gov/ferpa" }, { name: "FTC: Complying with COPPA, Frequently Asked Questions", url: "https://www.ftc.gov/business-guidance/resources/complying-coppa-frequently-asked-questions" }],
          tryIt: "Write your one-page privacy and equity check with at least three privacy risks and three equity risks, each with a guard and an owner.",
          youCanNow: "check an AI pilot for privacy and equity risks before it starts.",
          quickCheck: [
            { objective: "O3", q: "Which is an equity question for a pilot?", options: ["Is the tool popular?", "Is the tool the newest?", "Does the tool have a nice design?", "Can students with disabilities fully use the tool?"], answer: 3, why: "Accessibility and access are part of the equity check." },
            { objective: "O3", q: "Your privacy and equity check is not finished, but the start date is tomorrow. What do you do?", options: ["Start anyway and finish the check later", "Delay the start until the check is done and signed off", "Skip the equity part", "Start with only half the students"], answer: 1, why: "A pilot that has not passed the privacy and equity check is not ready to start." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Designing the pilot",
        questions: [
          { objective: "O1", q: "What should a strong pilot start with?", options: ["A product demo", "A vendor discount", "A student-centered problem with evidence", "A press release"], answer: 2, why: "Problems first, products second." },
          { objective: "O2", q: "Which pilot scope is best?", options: ["A few teachers in one course for 6-12 weeks", "Every school in the district for three years", "No defined group", "Only the principal"], answer: 0, why: "Small pilots are easier to support, measure and stop." },
          { objective: "O2", q: "When should you choose the tool?", options: ["First", "After the pilot ends", "Never", "After defining the problem and scope"], answer: 3, why: "The tool must fit the problem." },
          { objective: "O3", q: "Students in the pilot are 10 years old. Which law applies to the online service?", options: ["No law", "COPPA", "Only state traffic law", "Copyright only"], answer: 1, why: "COPPA covers children under 13." },
          { objective: "O3", q: "AI output in your pilot could influence course placement. What must you add?", options: ["Nothing", "A faster model", "More AI", "Human review before any placement decision"], answer: 3, why: "High-stakes decisions need human review." }
        ]
      }
    },
    {
      name: "Chapter 2: People, proof and presentation",
      lessons: [
        {
          objectives: ["O4"],
          title: "Preparing staff",
          minutes: 5,
          goal: "Plan the training and support pilot staff need.",
          text: [
            "Teachers in the pilot need more than a login. Plan three things. Skills: how to use the tool well, the prompts or settings that work, and how to check its output. Rules: privacy, the AI use levels for students, and what to do when something goes wrong. Support: a named contact, a weekly check-in, and time to try things.",
            "Make training hands-on. Teachers should use the tool on their own real (non-private) materials during the session, not watch a demo. Pair early adopters with cautious colleagues.",
            "Ask pilot teachers to keep short notes: time spent, what worked, what failed, student reactions. Their notes are part of your evidence and will shape the decision at the end."
          ],
          steps: ["Plan skills: use, prompts, checking output.", "Plan rules: privacy, student use levels, incidents.", "Plan support: contact, weekly check-in, time.", "Make sessions hands-on with real materials.", "Ask teachers to keep short notes."],
          words: [["Professional development (PD)", "training and learning for teachers and staff."], ["Early adopter", "someone who tries new tools early and can help others."]],
          slides: [
            { title: "Skills, rules, support", bullets: ["Skills: use, prompts, checking", "Rules: privacy, student levels, incidents", "Support: contact, check-ins, time"] },
            { title: "Hands-on training", bullets: ["Use the tool on real, non-private materials", "Pair early adopters with cautious colleagues"] },
            { title: "Teacher notes are evidence", bullets: ["Time spent, what worked, what failed", "Student reactions"] }
          ],
          tryIt: "Write a one-page staff plan: a 60-minute hands-on training agenda, the rules teachers must follow, the support they will get, and the notes you will ask them to keep.",
          youCanNow: "prepare and support staff for an AI pilot.",
          quickCheck: [
            { objective: "O4", q: "What should staff support during the pilot include?", options: ["A named contact and weekly check-ins", "A one-time email", "An AI chatbot only", "Nothing; teachers figure it out"], answer: 0, why: "Named support and regular check-ins keep problems from growing." },
            { objective: "O4", q: "Teachers ask why they must keep notes during the pilot. What would you say?", options: ["It is a rule from the vendor", "It is to judge their teaching", "Their notes are part of the evidence for deciding what happens next", "It is optional busywork"], answer: 2, why: "Teacher notes are evidence for the go, adjust or stop decision." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Communicating with families",
          minutes: 5,
          goal: "Write a family letter and FAQ that explain the pilot honestly.",
          text: [
            "Families trust what they understand. Tell them before the pilot starts: what problem you are working on, what the AI tool does, what it does not do (it does not make grades or placement decisions), what student data is used and how it is protected, and who to contact with questions.",
            "Add a short FAQ: Will my child's data be used to train AI? (Answer from your vendor agreement.) Can my child opt out, and what is the alternative? How will you know if it is working? The FTC suggests schools tell parents which online services they have approved; FERPA gives parents the right to inspect their child's education records.",
            "Write in plain English and provide translations checked by qualified speakers for families who need them. Offer a short information session or a time to ask questions."
          ],
          steps: ["Explain the problem and what the tool does and does not do.", "Explain data use and protection.", "Add an FAQ: training, opt-out, measures.", "Translate, with checks by qualified speakers.", "Offer a time for questions."],
          words: [["FAQ", "frequently asked questions: a short list of common questions with answers."], ["Opt out", "choosing not to take part."]],
          slides: [
            { title: "Tell families first", bullets: ["The problem and what the tool does", "What it does not do", "Data used and how it is protected"] },
            { title: "A short FAQ", bullets: ["Is data used to train AI?", "Can my child opt out? Alternative?", "How will you know it works?"] },
            { title: "Reach every family", bullets: ["Plain English", "Checked translations", "A time for questions"] }
          ],
          sources: [{ name: "FTC: Complying with COPPA, Frequently Asked Questions", url: "https://www.ftc.gov/business-guidance/resources/complying-coppa-frequently-asked-questions" }, { name: "FERPA: Protecting Student Privacy", url: "https://studentprivacy.ed.gov/ferpa" }],
          tryIt: "Write the family letter (under one page) and a five-question FAQ for your pilot. Ask a parent or a family liaison to read it and tell you what is unclear.",
          youCanNow: "explain an AI pilot to families clearly and honestly.",
          quickCheck: [
            { objective: "O5", q: "What should the family letter say the tool does NOT do?", options: ["Help students practice", "Make grades or placement decisions", "Run on school computers", "Use the internet"], answer: 1, why: "Families need to know that people, not AI, make decisions about their children." },
            { objective: "O5", q: "A family liaison says your letter is hard to understand. What would you do?", options: ["Send it anyway", "Add more detail and legal terms", "Send it only in English", "Rewrite it in plain words and ask them to read it again"], answer: 3, why: "The letter only works if families can understand it." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Measuring success and presenting your plan",
          minutes: 6,
          goal: "Set measures and a decision rule, and present the plan in ten minutes.",
          text: [
            "Pick three to five measures that match your problem, with a baseline from before the pilot: a student outcome (unit test results, practice completed), a teacher measure (time saved, confidence), a student or family experience measure (a short survey), and a safety measure (incidents, privacy issues). Report results by student group where privacy allows, to catch unequal effects.",
            "Write the decision rule in advance: go (expand), adjust (change and re-test) or stop. For example: \"Expand if test results improve and teachers save time, with no serious incidents and no group doing worse.\"",
            "Present in ten minutes: the problem and evidence, the pilot and tool, the privacy and equity check, the people plan, the measures and the decision rule. Invite hard questions; they make the plan stronger."
          ],
          steps: ["Choose 3-5 measures: student, teacher, experience, safety.", "Collect a baseline.", "Plan to look at results by group where privacy allows.", "Write the go, adjust or stop rule.", "Present in ten minutes and record the questions."],
          words: [["Measure", "something you count or rate to see if a change worked."], ["Decision rule", "a rule written in advance for whether to expand, adjust or stop."]],
          slides: [
            { title: "Measures with a baseline", bullets: ["Student outcome", "Teacher time and confidence", "Experience survey and safety"] },
            { title: "Decide the rule first", bullets: ["Go, adjust or stop", "No group doing worse", "No serious incidents"] },
            { title: "Ten-minute presentation", bullets: ["Problem and evidence; pilot and tool", "Privacy and equity; people plan", "Measures and the decision rule"] }
          ],
          tryIt: "Final task: assemble your full pilot plan (problem, scope and tool, privacy and equity check, staff plan, family letter and FAQ, measures with baseline, decision rule), present it in ten minutes to a leadership team, colleague group or board, and record the questions and your answers.",
          youCanNow: "design, defend and lead a responsible AI pilot in your school or district.",
          quickCheck: [
            { objective: "O6", q: "When is the baseline collected?", options: ["Before the pilot", "Halfway through the pilot", "After the pilot ends", "Only if the pilot fails"], answer: 0, why: "A baseline before the pilot shows whether anything changed." },
            { objective: "O6", q: "Results look good overall, but one student group did worse. What does your plan do?", options: ["Report only the overall result", "Go ahead, since most students did well", "Look at results by group and choose adjust or stop as the decision rule says", "Remove that group from the data"], answer: 2, why: "Looking by group catches unequal effects, and the decision rule guides what to do." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: People, proof and presentation",
        questions: [
          { objective: "O4", q: "What makes AI training for teachers most effective?", options: ["Watching a long demo", "Reading the vendor's ad", "Hands-on use with their own non-private materials", "No training"], answer: 2, why: "People learn tools by using them on real work." },
          { objective: "O5", q: "What should the family letter say the tool does NOT do?", options: ["Make grades or placement decisions", "Help with practice", "Save teacher time", "Give feedback"], answer: 0, why: "Families need to know decisions stay with educators." },
          { objective: "O6", q: "Why look at pilot results by student group?", options: ["To rank students publicly", "To catch unequal effects", "It is not useful", "To save time"], answer: 1, why: "A pilot can help some students and harm others." },
          { objective: "O6", q: "When should the go, adjust or stop rule be written?", options: ["Before the pilot starts", "After results are in", "Never", "Only if it fails"], answer: 0, why: "Deciding in advance keeps the decision honest." },
          { objective: "O6", q: "During your presentation, a board member asks a hard question about privacy. Best response?", options: ["Avoid it", "Promise there are no risks", "End the presentation", "Welcome it and answer from your privacy check"], answer: 3, why: "Hard questions strengthen the plan." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: AI for School and Educational Leaders 8: Final Project and Capstone",
    questions: [
      { objective: "O1", q: "A problem statement says:", options: ["Which product to buy", "What is wrong, for whom, and how much", "The budget only", "The staff list"], answer: 1, why: "It defines the problem with evidence." },
      { objective: "O1", q: "Evidence for a problem can include:", options: ["Vendor ads", "Rumors", "Existing data, surveys and conversations", "Guesses"], answer: 2, why: "Real evidence shows the problem is real." },
      { objective: "O1", q: "Before choosing AI, ask:", options: ["Which is cheapest?", "Which AI is most famous?", "Is AI the right answer at all?", "Which has the best logo?"], answer: 2, why: "Sometimes a non-AI fix is better." },
      { objective: "O2", q: "A good pilot length is about:", options: ["Six to twelve weeks", "One day", "Five years", "No set length"], answer: 0, why: "Long enough to learn, short enough to manage." },
      { objective: "O2", q: "The tool should be chosen:", options: ["By students alone", "Before anything else", "By the vendor", "After the problem and scope are clear"], answer: 3, why: "The tool must fit the problem." },
      { objective: "O2", q: "If a tool is not yet approved, you should:", options: ["Use it anyway", "Run the vendor review", "Ask students to sign up", "Skip privacy"], answer: 1, why: "Approval comes before use." },
      { objective: "O2", q: "The July 2025 federal letter says grant funds may support AI for:", options: ["Sports equipment", "Any purchase at all", "Replacing teachers", "Curriculum tools, high-impact tutoring and pathway advising"], answer: 3, why: "Those uses are named in the letter, as reported." },
      { objective: "O2", q: "Before planning on federal funds, check with:", options: ["A student", "A vendor", "Your federal programs office", "Social media"], answer: 2, why: "They manage federal grant rules." },
      { objective: "O3", q: "Under FERPA, sharing student PII with a vendor generally needs:", options: ["Consent, unless an exception applies", "Nothing", "Only a phone call", "The vendor's permission"], answer: 0, why: "Exceptions include controlled school officials." },
      { objective: "O3", q: "Who signs off on the privacy check?", options: ["The vendor", "The district privacy officer", "A student", "No one"], answer: 1, why: "The responsible person approves." },
      { objective: "O3", q: "Which is an equity question?", options: ["Can students with disabilities fully use the tool?", "What color is the app?", "Is it trendy?", "Is it new?"], answer: 0, why: "Accessibility is part of equity." },
      { objective: "O3", q: "A pilot that has not passed the privacy and equity check is:", options: ["Finished", "Ready anyway", "Approved", "Not ready to start"], answer: 3, why: "The check is a gate." },
      { objective: "O4", q: "Staff support should include:", options: ["Nothing after login", "A named contact and weekly check-ins", "Only an email", "Only the vendor's help line"], answer: 1, why: "Support keeps pilots on track." },
      { objective: "O4", q: "Pilot teachers' notes are:", options: ["Not useful", "Private diaries", "Part of your evidence", "For the vendor only"], answer: 2, why: "They show what worked and failed." },
      { objective: "O5", q: "The family FAQ should answer:", options: ["Who is the most popular teacher?", "What is the vendor's stock price?", "Is my child's data used to train AI?", "Nothing"], answer: 2, why: "Data use is a top family concern." },
      { objective: "O5", q: "Translations for families should be:", options: ["Checked by qualified speakers", "Unchecked AI output", "Skipped", "Done by students"], answer: 0, why: "Families need accurate information." },
      { objective: "O6", q: "Which is a safety measure?", options: ["Vendor revenue", "Number of logins", "Number of slides", "Number of incidents or privacy issues"], answer: 3, why: "Safety must be measured too." },
      { objective: "O6", q: "A baseline is collected:", options: ["After the pilot", "Before the pilot", "Never", "Only if results are bad"], answer: 1, why: "It shows what changed." },
      { objective: "O6", q: "A decision rule offers which choices?", options: ["Wait forever", "Buy or sell", "Yes only", "Go, adjust or stop"], answer: 3, why: "The pilot ends in a clear decision." },
      { objective: "O6", q: "Your capstone presentation should last about:", options: ["One minute", "Two hours", "Ten minutes", "A full day"], answer: 2, why: "Short and focused, with time for questions." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Pre-Test: What Do You Already Know?",
    from: [
      0,
      2,
      3,
      5,
      8,
      10,
      12,
      14,
      17,
      18
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      {
        name: "Problem and evidence",
        objective: "O1",
        notYet: "Starts from a tool, or has no evidence.",
        meets: "States the problem and who it serves, with evidence.",
        exceeds: "Explains why AI is the right answer, or what else was considered."
      },
      {
        name: "Scope and tool",
        objective: "O2",
        notYet: "No clear who, what or how long, or the tool has no vendor review.",
        meets: "Pilot scope (who, what, how long) and the tool, with its vendor review.",
        exceeds: "The scope is small enough to run in six to twelve weeks."
      },
      {
        name: "Privacy and equity check",
        objective: "O3",
        notYet: "FERPA, COPPA (if under 13), accessibility or access is missing.",
        meets: "Covers FERPA, COPPA if under 13, accessibility and access.",
        exceeds: "Each risk has a guard and an owner, and the privacy officer has reviewed it."
      },
      {
        name: "Staff and families",
        objective: "O5",
        notYet: "No staff-training plan, or no family letter and FAQ.",
        meets: "A staff-training plan, and a family letter with a short FAQ.",
        exceeds: "The letter was read by a parent or family liaison and improved."
      },
      {
        name: "Measures and decision rule",
        objective: "O6",
        notYet: "Fewer than three measures, no baseline, or no decision rule.",
        meets: "Three to five success measures with a baseline, and a go, adjust or stop rule.",
        exceeds: "Includes a safety measure and a plan to look at results by student group."
      },
      {
        name: "Presentation",
        objective: "O6",
        notYet: "Not presented, or questions not recorded.",
        meets: "Presented in ten minutes, with the questions and answers recorded.",
        exceeds: "Hard questions were welcomed and answered from the plan's evidence."
      }
    ]
  },
  evaluation: {
    results: [
      "Leaders who finish the program and pass the capstone (rubric)",
      "Pilot plans presented to a leadership team or board within 60 days (follow-up survey)",
      "Pilots started with a signed-off privacy and equity check and a written decision rule (follow-up survey)",
      "Pilots that reach a go, adjust or stop decision using their baseline and measures"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A computer with internet",
      "Your responsible-AI guidelines from course 7 and your district's policies",
      "Summary data or survey results on the problem (no individual student data)",
      "A plan template of about four pages",
      "About 90 minutes for the lessons and checks, plus time to write and present the plan"
    ],
    facilitatorNotes: [
      "Take the pre-test together, then have leaders share problem statements in small groups before choosing tools.",
      "Invite the district privacy officer to review privacy and equity checks before presentations.",
      "Ask a parent or family liaison to read draft family letters.",
      "Schedule a presentation session with a real leadership team or a colleague group playing the board.",
      "Score the capstone with the rubric, and collect the recorded questions and answers."
    ]
  }
};
