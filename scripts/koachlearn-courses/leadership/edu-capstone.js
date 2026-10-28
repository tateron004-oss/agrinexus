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
  chapters: [
    {
      name: "Chapter 1: Designing the pilot",
      lessons: [
        {
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
          youCanNow: "define a student-centered problem with evidence before choosing any AI tool."
        },
        {
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
          youCanNow: "scope a small AI pilot and choose a tool that has been properly reviewed."
        },
        {
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
          youCanNow: "check an AI pilot for privacy and equity risks before it starts."
        }
      ],
      check: {
        title: "Knowledge Check 1: Designing the pilot",
        questions: [
          { q: "What should a strong pilot start with?", options: ["A product demo", "A vendor discount", "A student-centered problem with evidence", "A press release"], answer: 2, why: "Problems first, products second." },
          { q: "Which pilot scope is best?", options: ["A few teachers in one course for 6-12 weeks", "Every school in the district for three years", "No defined group", "Only the principal"], answer: 0, why: "Small pilots are easier to support, measure and stop." },
          { q: "When should you choose the tool?", options: ["First", "After the pilot ends", "Never", "After defining the problem and scope"], answer: 3, why: "The tool must fit the problem." },
          { q: "Students in the pilot are 10 years old. Which law applies to the online service?", options: ["No law", "COPPA", "Only state traffic law", "Copyright only"], answer: 1, why: "COPPA covers children under 13." },
          { q: "AI output in your pilot could influence course placement. What must you add?", options: ["Nothing", "A faster model", "More AI", "Human review before any placement decision"], answer: 3, why: "High-stakes decisions need human review." }
        ]
      }
    },
    {
      name: "Chapter 2: People, proof and presentation",
      lessons: [
        {
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
          youCanNow: "prepare and support staff for an AI pilot."
        },
        {
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
          youCanNow: "explain an AI pilot to families clearly and honestly."
        },
        {
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
          youCanNow: "design, defend and lead a responsible AI pilot in your school or district."
        }
      ],
      check: {
        title: "Knowledge Check 2: People, proof and presentation",
        questions: [
          { q: "What makes AI training for teachers most effective?", options: ["Watching a long demo", "Reading the vendor's ad", "Hands-on use with their own non-private materials", "No training"], answer: 2, why: "People learn tools by using them on real work." },
          { q: "What should the family letter say the tool does NOT do?", options: ["Make grades or placement decisions", "Help with practice", "Save teacher time", "Give feedback"], answer: 0, why: "Families need to know decisions stay with educators." },
          { q: "Why look at pilot results by student group?", options: ["To rank students publicly", "To catch unequal effects", "It is not useful", "To save time"], answer: 1, why: "A pilot can help some students and harm others." },
          { q: "When should the go, adjust or stop rule be written?", options: ["Before the pilot starts", "After results are in", "Never", "Only if it fails"], answer: 0, why: "Deciding in advance keeps the decision honest." },
          { q: "During your presentation, a board member asks a hard question about privacy. Best response?", options: ["Avoid it", "Promise there are no risks", "End the presentation", "Welcome it and answer from your privacy check"], answer: 3, why: "Hard questions strengthen the plan." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: AI for School and Educational Leaders 8: Final Project and Capstone",
    questions: [
      { q: "A problem statement says:", options: ["Which product to buy", "What is wrong, for whom, and how much", "The budget only", "The staff list"], answer: 1, why: "It defines the problem with evidence." },
      { q: "Evidence for a problem can include:", options: ["Vendor ads", "Rumors", "Existing data, surveys and conversations", "Guesses"], answer: 2, why: "Real evidence shows the problem is real." },
      { q: "Before choosing AI, ask:", options: ["Which is cheapest?", "Which AI is most famous?", "Is AI the right answer at all?", "Which has the best logo?"], answer: 2, why: "Sometimes a non-AI fix is better." },
      { q: "A good pilot length is about:", options: ["Six to twelve weeks", "One day", "Five years", "No set length"], answer: 0, why: "Long enough to learn, short enough to manage." },
      { q: "The tool should be chosen:", options: ["By students alone", "Before anything else", "By the vendor", "After the problem and scope are clear"], answer: 3, why: "The tool must fit the problem." },
      { q: "If a tool is not yet approved, you should:", options: ["Use it anyway", "Run the vendor review", "Ask students to sign up", "Skip privacy"], answer: 1, why: "Approval comes before use." },
      { q: "The July 2025 federal letter says grant funds may support AI for:", options: ["Sports equipment", "Any purchase at all", "Replacing teachers", "Curriculum tools, high-impact tutoring and pathway advising"], answer: 3, why: "Those uses are named in the letter, as reported." },
      { q: "Before planning on federal funds, check with:", options: ["A student", "A vendor", "Your federal programs office", "Social media"], answer: 2, why: "They manage federal grant rules." },
      { q: "Under FERPA, sharing student PII with a vendor generally needs:", options: ["Consent, unless an exception applies", "Nothing", "Only a phone call", "The vendor's permission"], answer: 0, why: "Exceptions include controlled school officials." },
      { q: "Who signs off on the privacy check?", options: ["The vendor", "The district privacy officer", "A student", "No one"], answer: 1, why: "The responsible person approves." },
      { q: "Which is an equity question?", options: ["Can students with disabilities fully use the tool?", "What color is the app?", "Is it trendy?", "Is it new?"], answer: 0, why: "Accessibility is part of equity." },
      { q: "A pilot that has not passed the privacy and equity check is:", options: ["Finished", "Ready anyway", "Approved", "Not ready to start"], answer: 3, why: "The check is a gate." },
      { q: "Staff support should include:", options: ["Nothing after login", "A named contact and weekly check-ins", "Only an email", "Only the vendor's help line"], answer: 1, why: "Support keeps pilots on track." },
      { q: "Pilot teachers' notes are:", options: ["Not useful", "Private diaries", "Part of your evidence", "For the vendor only"], answer: 2, why: "They show what worked and failed." },
      { q: "The family FAQ should answer:", options: ["Who is the most popular teacher?", "What is the vendor's stock price?", "Is my child's data used to train AI?", "Nothing"], answer: 2, why: "Data use is a top family concern." },
      { q: "Translations for families should be:", options: ["Checked by qualified speakers", "Unchecked AI output", "Skipped", "Done by students"], answer: 0, why: "Families need accurate information." },
      { q: "Which is a safety measure?", options: ["Vendor revenue", "Number of logins", "Number of slides", "Number of incidents or privacy issues"], answer: 3, why: "Safety must be measured too." },
      { q: "A baseline is collected:", options: ["After the pilot", "Before the pilot", "Never", "Only if results are bad"], answer: 1, why: "It shows what changed." },
      { q: "A decision rule offers which choices?", options: ["Wait forever", "Buy or sell", "Yes only", "Go, adjust or stop"], answer: 3, why: "The pilot ends in a clear decision." },
      { q: "Your capstone presentation should last about:", options: ["One minute", "Two hours", "Ten minutes", "A full day"], answer: 2, why: "Short and focused, with time for questions." }
    ]
  }
};
