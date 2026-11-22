"use strict";

// Koach Learn course: Leadership Development -> "AI for School and Educational Leaders 1: Introduction to AI in Education"
// (course 1 of 8). Shape copied from re-entry/reentry-ai-digital-confidence.js. Student-privacy facts checked on
// studentprivacy.ed.gov and ftc.gov on 27 October 2026.

module.exports = {
  id: "edu-intro-ai-education",
  category: "Leadership Development",
  name: "AI for School and Educational Leaders 1: Introduction to AI in Education",
  skills: "Explaining AI to staff and families, Spotting good and poor uses in schools, Knowing the student-privacy basics (FERPA, COPPA), Reading federal AI guidance, Leading a staff conversation",
  outcome: "explain to your staff what AI is and how it is already showing up in school, name the good uses and the risks, state the student-privacy basics under FERPA and COPPA, and lead a 15-minute staff conversation using a one-page \"AI at our school\" handout.",
  about: [
    "This course is for principals, assistant principals, teacher leaders, instructional coaches and district leaders. You do not need a technical background. Your teachers and students are already using AI; this course helps you lead that use instead of reacting to it.",
    "Chapter 1 explains what AI is, where it already appears in your school, and where it helps and harms learning. Chapter 2 covers what leaders must know before anything else: student privacy under FERPA and COPPA, what the US Department of Education has said about AI, and how to open the conversation with your staff.",
    "This course explains the law in plain words so you know what to ask; it is not legal advice. Your district's legal counsel and privacy officer have the final word. A knowledge check closes each chapter and a 20-question quiz closes the course. This is course 1 of 8 in AI for School and Educational Leaders."
  ],
  finalTask: "Write a one-page \"AI at our school\" handout for staff: what AI is in two sentences, three ways it can help teachers, three risks for students, the privacy rule (\"no student names, grades or other personally identifiable information in AI tools the district has not approved\"), and who to ask. Use it to lead a 15-minute staff conversation and record the top three questions staff raised.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Principals, assistant principals, teacher leaders, instructional coaches and district leaders in US schools. No technical background is needed.",
    startingPoint: "Know that teachers and students are using AI and may have tried a chatbot. Cannot yet explain AI clearly to staff, map where it is used in their school, or state the student-privacy basics that apply to AI tools.",
    gap: "AI is already in classrooms, often without guidance. Leaders need to explain it plainly, see where it is used, judge helpful and harmful uses, and know the FERPA and COPPA basics, so they can lead AI use instead of reacting to it and protect students' privacy.",
    constraints: [
      "Plain words for non-technical school leaders; the course explains the law but is not legal advice",
      "District legal counsel and privacy officer have the final word on privacy obligations",
      "No student names, grades or other personally identifiable information in unapproved AI tools, including during practice",
      "Federal and state guidance changes, so leaders check the current version themselves",
      "Time: short lessons fitted around a school day, plus a 15-minute staff conversation"
    ],
    prerequisites: "None. This is course 1 of 8 in AI for School and Educational Leaders."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "When a staff member, parent or student asks what AI is", action: "explain AI and generative AI in plain words, including why it can be wrong", standard: "in two sentences a new teacher, a parent and a fifth grader could understand" },
    { id: "O2", condition: "With your tech coordinator or two teachers", action: "map where AI already shows up in your school", standard: "listing at least six places, each marked approved or not and whether it touches student data" },
    { id: "O3", condition: "Given AI uses seen in schools", action: "sort each use into helpful, careful or harmful", standard: "with one reason for each, using the family test" },
    { id: "O4", condition: "When staff use AI tools", action: "state the FERPA and COPPA basics and rewrite a request so it contains no student information", standard: "naming when to ask your privacy officer or legal counsel" },
    { id: "O5", condition: "Given federal and state guidance on AI in schools", action: "summarize one federal principle and find your state's current guidance", standard: "noting its date and one point it makes, or that none exists yet" },
    { id: "O6", condition: "With your staff", action: "lead a 15-minute AI conversation using a one-page \"AI at our school\" handout", standard: "with every handout part included and the top three staff questions recorded" }
  ],
  chapters: [
    {
      name: "Chapter 1: AI in today's schools",
      lessons: [
        {
          objectives: ["O1"],
          title: "What AI is, in words your staff will use",
          minutes: 5,
          goal: "Explain AI and generative AI to staff in plain words.",
          text: [
            "Artificial intelligence (AI) is software that does tasks that usually need human judgment, such as recognizing speech, spotting patterns or writing. Generative AI creates new content: text, images, audio and code. Chat tools such as ChatGPT, Microsoft Copilot, Google Gemini and Claude are built on large language models (LLMs) that predict likely words.",
            "Because they predict likely words, these tools write fluently and can still be wrong, out of date or biased. They do not know your students, your curriculum or your community unless someone tells them, and they should not be told private student information.",
            "A simple way to say it to staff: \"AI is a fast first-draft partner. It does not replace the teacher's judgment, and it is never the final word on a student.\""
          ],
          words: [["Generative AI", "AI that creates new text, images, audio or code."], ["LLM", "large language model: the AI behind chat assistants."], ["Hallucination", "when AI writes something that sounds true but is made up."]],
          slides: [
            { title: "AI in two sentences", bullets: ["Software that does tasks needing judgment", "Generative AI creates text, images, code"] },
            { title: "Fluent is not the same as right", bullets: ["Can be wrong, out of date or biased", "Does not know your students or curriculum"] },
            { title: "Say it to staff", bullets: ["A fast first-draft partner", "Never replaces the teacher's judgment", "Never the final word on a student"] }
          ],
          tryIt: "Write a two-sentence explanation of AI that a new teacher, a parent and a fifth grader could all understand. Test it on one colleague.",
          youCanNow: "explain AI and generative AI in plain words to staff and families.",
          quickCheck: [
            { objective: "O1", q: "What is generative AI?", options: ["AI that creates new text, images or code", "A program that grades tests automatically", "A search engine for school records", "Software that never makes mistakes"], answer: 0, why: "Generative AI creates new content, which is why it can also produce errors." },
            { objective: "O1", q: "A parent asks why a chatbot gave their child a wrong fact. What would you explain?", options: ["The child must have typed it wrong", "AI predicts likely words and can be wrong, so its answers need checking", "The tool was broken that day", "Only paid AI tools are accurate"], answer: 1, why: "AI predicts likely text instead of checking facts, so it can sound right and still be wrong." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Where AI already shows up in your school",
          minutes: 5,
          goal: "Map where AI is already used in your school, officially and unofficially.",
          text: [
            "AI is already in your building. Teachers may use chat tools to draft lessons or parent emails. Students may use them for homework, sometimes appropriately, sometimes not. Many products your district already pays for (learning platforms, writing tools, reading programs, office software) have added AI features, sometimes switched on by default.",
            "There is also AI behind the scenes: adaptive practice programs that pick the next question, early-warning dashboards, plagiarism and AI-writing detectors, and security or monitoring tools.",
            "Leaders cannot guide what they cannot see. A quick map, built with your tech coordinator and a few teachers, shows which tools are approved, which are being used anyway, and which touch student data. That map is the starting point for every later decision."
          ],
          steps: ["Ask teachers, students and your tech coordinator which AI tools they use.", "List AI features inside products you already have.", "Mark each: approved or not, and whether it touches student data.", "Note where students meet AI without knowing it."],
          words: [["Adaptive program", "software that changes the next question or activity based on a student's answers."], ["AI-writing detector", "a tool that claims to tell whether text was written by AI; often unreliable."]],
          slides: [
            { title: "AI is already here", bullets: ["Teachers drafting lessons and emails", "Students using chat tools", "AI features added to tools you own"] },
            { title: "Behind the scenes", bullets: ["Adaptive practice programs", "Early-warning dashboards", "Detectors and monitoring tools"] },
            { title: "Map it", bullets: ["Approved or not?", "Touches student data?", "Where students meet AI unknowingly"] }
          ],
          tryIt: "With your tech coordinator or two teachers, list at least six places AI shows up in your school. Mark each approved or not, and whether it touches student data.",
          youCanNow: "map where AI is already used in your school and which uses touch student data.",
          quickCheck: [
            { objective: "O2", q: "What is an adaptive learning program?", options: ["A program teachers change by hand each day", "A program that works without internet", "A program that changes the next activity based on a student's answers", "A program that only adults can use"], answer: 2, why: "Adaptive programs use a student's answers to choose what comes next." },
            { objective: "O2", q: "You learn that a tool your school already owns has a new AI feature switched on. What would you do?", options: ["Ignore it, since the tool was already approved", "Ban the whole tool at once", "Ask teachers to stop using computers", "Add it to your AI map and check whether it touches student data"], answer: 3, why: "AI features can appear in tools you already own, so they belong on the map." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Where AI helps learning, and where it harms",
          minutes: 5,
          goal: "Sort school uses of AI into helpful, careful and harmful.",
          text: [
            "Helpful uses usually save teacher time or widen access: drafting lesson materials, creating practice questions at several reading levels, translating family letters for a qualified person to check, and giving students a patient tutor-like explainer under teacher guidance.",
            "Careful uses need clear rules: students using AI on assignments (it can replace the thinking the assignment was meant to build), AI feedback on student work (it can be generic or wrong), and AI-writing detectors (they can wrongly accuse students, including English learners).",
            "Harmful uses: entering student personal information into unapproved tools, letting AI make decisions about grades, placement, discipline or special education, and using AI in ways families were not told about. A test for staff: \"Would I be comfortable explaining this use to the student's family?\""
          ],
          words: [["Access", "whether every student can take part and benefit, including students with disabilities and English learners."], ["False accusation", "wrongly saying a student cheated, for example because a detector flagged their work."]],
          slides: [
            { title: "Helpful", bullets: ["Drafting materials and practice", "Several reading levels", "Translation drafts a person checks"] },
            { title: "Careful", bullets: ["Student use on assignments", "AI feedback on student work", "AI-writing detectors can wrongly accuse"] },
            { title: "Harmful", bullets: ["Student data in unapproved tools", "AI deciding grades, placement, discipline", "Uses families were not told about"] },
            { title: "The family test", bullets: ["Would I explain this use to the family?"] }
          ],
          tryIt: "List eight AI uses you have seen or heard of in schools. Mark each HELPFUL, CAREFUL or HARMFUL and write one reason.",
          youCanNow: "judge which school uses of AI help learning and which put students at risk.",
          quickCheck: [
            { objective: "O3", q: "What does the family test ask?", options: ["Would I explain this AI use to the student's family?", "Does the family own a computer?", "Did the family pay for the tool?", "Would the family use AI at home?"], answer: 0, why: "If you would not explain it to a family, the use needs a second look." },
            { objective: "O3", q: "A teacher wants to use an AI detector to decide whether essays were cheated. How would you mark it?", options: ["HELPFUL: it saves time", "HARMFUL: AI should never be used", "CAREFUL: detectors can wrongly accuse students, so they are never the only evidence", "Not worth discussing"], answer: 2, why: "Detectors can wrongly accuse students, including English learners." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: AI in today's schools",
        questions: [
          { objective: "O1", q: "Which is the best plain description of generative AI for staff?", options: ["A school security camera", "A new grading system", "AI that creates new text, images or code", "An attendance app"], answer: 2, why: "Generative AI creates new content." },
          { objective: "O1", q: "A teacher says, \"The AI wrote it, so it must be accurate.\" Best reply?", options: ["AI predicts likely words and can be wrong; check it", "Agree", "Only if it is long", "Only if it uses big words"], answer: 0, why: "Fluent output can still be wrong." },
          { objective: "O2", q: "Why map AI use in your school first?", options: ["To ban everything", "Vendors require it", "It is fun", "Leaders cannot guide what they cannot see"], answer: 3, why: "The map shows approved use, hidden use and student-data risk." },
          { objective: "O3", q: "Why are AI-writing detectors a CAREFUL use?", options: ["They are always right", "They can wrongly accuse students, including English learners", "They are free", "They write essays"], answer: 1, why: "False positives can harm students." },
          { objective: "O3", q: "Which use is HARMFUL?", options: ["Drafting practice questions", "Making a reading passage at three levels", "Drafting a newsletter", "Letting AI decide a student's special education placement"], answer: 3, why: "Decisions about students stay with qualified people." }
        ]
      }
    },
    {
      name: "Chapter 2: What leaders must know first",
      lessons: [
        {
          objectives: ["O4"],
          title: "Student privacy basics: FERPA and COPPA",
          minutes: 6,
          goal: "State the FERPA and COPPA basics that apply when staff use AI tools.",
          text: [
            "FERPA, the Family Educational Rights and Privacy Act, protects the privacy of students' education records: records directly related to a student and kept by the school. Parents have the right to inspect and review those records and ask for corrections; the rights move to the student at 18 or when they attend college. Schools generally need consent to disclose personally identifiable information, with exceptions such as directory information (after notice and a chance to opt out) and school officials with a legitimate educational interest. An outside vendor can count as a school official only if it performs a school service, is under the school's direct control, and follows limits on re-sharing.",
            "COPPA, the Children's Online Privacy Protection Act, enforced by the Federal Trade Commission (FTC), protects children under 13 online. The FTC says a school may give consent in place of parents only when the service collects information for the use and benefit of the school and for no other commercial purpose. The FTC amended its COPPA Rule on April 22, 2025.",
            "What this means in practice: a teacher who pastes student names, grades, IEP details or other identifying information into a free AI tool the district has not approved may be disclosing education records to a company with no agreement. The leader's rule: only district-approved tools for anything about students, and remove identifying details anyway. For your exact obligations, ask your district's privacy officer or counsel; state student-privacy laws may add more."
          ],
          words: [["FERPA", "the federal law that protects the privacy of student education records."], ["COPPA", "the federal law that protects the online privacy of children under 13."], ["Personally identifiable information (PII)", "information that identifies a student, such as name, ID number or a mix of details."], ["Directory information", "basic details like name and dates of attendance that a school may share after notice and opt-out."]],
          slides: [
            { title: "FERPA in brief", bullets: ["Protects student education records", "Parents may inspect and ask for corrections", "Rights move to the student at 18 or college"] },
            { title: "FERPA and vendors", bullets: ["Consent usually needed to share PII", "Vendor as school official: school service, direct control", "And limits on re-sharing"] },
            { title: "COPPA in brief", bullets: ["Children under 13 online; enforced by the FTC", "School consent only for school use, no other commercial use", "Rule amended April 22, 2025"] },
            { title: "The leader's rule", bullets: ["Only district-approved tools for student matters", "Remove identifying details anyway", "Ask your privacy officer; state laws may add more"] }
          ],
          sources: [{ name: "FERPA: Protecting Student Privacy (US Department of Education)", url: "https://studentprivacy.ed.gov/ferpa" }, { name: "FTC: Complying with COPPA, Frequently Asked Questions", url: "https://www.ftc.gov/business-guidance/resources/complying-coppa-frequently-asked-questions" }, { name: "FTC: Children's Privacy", url: "https://www.ftc.gov/business-guidance/privacy-security/childrens-privacy" }],
          tryIt: "Write three examples of what a teacher must NOT paste into an unapproved AI tool, and rewrite one of them so it asks for the same help without any student information.",
          youCanNow: "state the FERPA and COPPA basics that apply to staff AI use and the rule that follows from them.",
          quickCheck: [
            { objective: "O4", q: "What does COPPA protect?", options: ["Teachers' email accounts", "The online privacy of children under 13", "School buildings", "Student sports records only"], answer: 1, why: "COPPA protects the online privacy of children under 13." },
            { objective: "O4", q: "A teacher wants AI help writing feedback for a named student with a low grade. What would you suggest?", options: ["Paste the name and grade into any free tool", "Use the student's initials instead, which is always safe", "Skip feedback for that student", "Ask for help with the feedback without any student name or grade, or use a district-approved tool"], answer: 3, why: "Removing student information, or using an approved tool, protects the education record." }
          ]
        },
        {
          objectives: ["O5"],
          title: "What federal guidance says about AI in schools",
          minutes: 5,
          goal: "Summarize federal AI guidance and find the current version yourself.",
          text: [
            "On July 22, 2025, the US Department of Education sent a Dear Colleague Letter on AI. As reported by K-12 Dive, it says existing federal grant funds may support AI used for high-quality curriculum tools, high-impact tutoring, and college and career pathway advising, and it sets out principles: AI initiatives should be educator-led, ethical, accessible to students with disabilities, transparent about how new tools are rolled out, and compliant with federal data privacy laws.",
            "Guidance changes. Read the letter itself and any newer guidance on ed.gov, and check what your state education agency has published; many states have their own AI guidance for schools. The Department's Student Privacy Policy Office site (studentprivacy.ed.gov) has resources on online educational services, including a Model Terms of Service checklist.",
            "For leaders, the principles are a useful test for any AI plan: Is it educator-led? Is it accessible? Have we told families how it works? Does it protect student data?"
          ],
          steps: ["Read the Department of Education's AI letter on ed.gov.", "Check your state education agency for AI guidance.", "Look at studentprivacy.ed.gov resources on online educational services.", "Test your plans against the principles: educator-led, ethical, accessible, transparent, privacy-compliant."],
          words: [["Dear Colleague Letter", "a guidance letter from a federal agency to schools and states; guidance, not a new law."], ["State education agency", "your state's department of education."]],
          slides: [
            { title: "Federal AI letter, July 22, 2025", bullets: ["Grant funds may support AI for curriculum tools", "High-impact tutoring", "College and career pathway advising"] },
            { title: "Its principles", bullets: ["Educator-led and ethical", "Accessible to students with disabilities", "Transparent; compliant with privacy laws"] },
            { title: "Find the current version", bullets: ["ed.gov for the letter and newer guidance", "Your state education agency", "studentprivacy.ed.gov for vendor resources"] }
          ],
          sources: [{ name: "K-12 Dive: Education Department issues AI priorities (July 2025)", url: "https://www.k12dive.com/news/education-department-issues-ai-priorities-but-what-if-the-agency-closes/754015/" }, { name: "Privacy and Education Technology (Student Privacy Policy Office)", url: "https://studentprivacy.ed.gov/privacy-and-education-technology" }],
          tryIt: "Find your state education agency's page on AI (search its website for \"artificial intelligence\"). Write down the date of its latest guidance and one point it makes, or note that none exists yet.",
          youCanNow: "summarize federal AI guidance for schools and find the current federal and state versions.",
          quickCheck: [
            { objective: "O5", q: "Where do you look for your state's AI guidance for schools?", options: ["Your state education agency's website", "A social media post", "The AI tool's own answer", "A vendor's sales page"], answer: 0, why: "The state education agency is the official source for state guidance." },
            { objective: "O5", q: "A colleague quotes federal AI guidance from memory. What would you do before sharing it with staff?", options: ["Share it, since it sounds right", "Find the current official document and check its date and wording", "Ask an AI chatbot to confirm it", "Wait for another colleague to agree"], answer: 1, why: "Guidance changes, so leaders check the current official version themselves." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Opening the AI conversation with your staff",
          minutes: 6,
          goal: "Lead a 15-minute staff conversation on AI using a one-page handout.",
          text: [
            "Staff feel many things about AI: excitement, worry about cheating, fear of being replaced, or simply too busy to care. Open with listening, not a policy. Ask: \"Where have you seen AI this year, in your class or your own life?\"",
            "Then share a one-page handout: what AI is in two sentences, three ways it can help teachers, three risks for students, the privacy rule, and who to ask. Keep it to one page; you can add detail later.",
            "Close by naming one next step (for example, a short survey of tools staff use, or a volunteer group of teachers to test an approved tool) and collect the top questions. Those questions tell you what to teach next."
          ],
          steps: ["Open with a listening question.", "Share the one-page handout.", "Discuss one helpful and one risky example.", "Name one next step.", "Collect the top three questions."],
          words: [["Handout", "a short printed or shared page that people keep."], ["Next step", "one clear action the group agrees to take."]],
          slides: [
            { title: "Open with listening", bullets: ["\"Where have you seen AI this year?\"", "Excitement, worry, fatigue are all normal"] },
            { title: "The one-page handout", bullets: ["AI in two sentences", "Three helps, three risks", "The privacy rule and who to ask"] },
            { title: "Close well", bullets: ["One next step", "Collect the top three questions"] }
          ],
          tryIt: "Final task: write your one-page \"AI at our school\" handout (two-sentence definition, three helps, three risks, privacy rule, who to ask). Lead a 15-minute staff conversation with it and record the top three questions staff raised.",
          youCanNow: "open and lead your school's conversation about AI with a clear, shared starting point.",
          quickCheck: [
            { objective: "O6", q: "What is a good way to open a staff conversation on AI?", options: ["Announce a list of bans", "Show a long slide deck on how AI works", "Ask a listening question about where staff have seen AI", "Start with a quiz"], answer: 2, why: "Starting by listening shows staff their experience matters." },
            { objective: "O6", q: "At the end of your 15-minute conversation, staff still have many questions. What do you do?", options: ["Answer every one, even if it runs an hour", "Tell them to search online", "End without a next step", "Record the top three questions and give one next step"], answer: 3, why: "A clear next step and the collected questions shape what you do next." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: What leaders must know first",
        questions: [
          { objective: "O4", q: "What does FERPA protect?", options: ["Teacher salaries", "School building safety", "The privacy of student education records", "Cafeteria menus"], answer: 2, why: "FERPA protects student education records." },
          { objective: "O4", q: "COPPA protects the online privacy of children:", options: ["Under 13", "Under 18", "Under 21", "Of any age"], answer: 0, why: "The FTC says the rule protects children under age 13." },
          { objective: "O4", q: "According to the FTC, when may a school consent in place of parents under COPPA?", options: ["Any time a teacher wants", "When the service collects data only for the school's use and benefit, with no other commercial purpose", "Never", "When the app is free"], answer: 1, why: "School consent is limited to educational use with no other commercial purpose." },
          { objective: "O5", q: "Which is one principle in the Department of Education's July 2025 AI letter?", options: ["AI initiatives should be educator-led", "AI should replace teachers", "AI must be banned", "Only private schools may use AI"], answer: 0, why: "The letter calls for educator-led initiatives." },
          { objective: "O6", q: "How should you open a staff conversation on AI?", options: ["With a 30-page policy", "With a vendor sales pitch", "With a ban", "With a listening question about where staff have seen AI"], answer: 3, why: "Listening first builds trust and shows what staff need." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: AI for School and Educational Leaders 1: Introduction to AI in Education",
    questions: [
      { objective: "O1", q: "Chat tools like ChatGPT are built on:", options: ["Spreadsheets", "Large language models", "Printers", "Attendance systems"], answer: 1, why: "LLMs power chat tools." },
      { objective: "O1", q: "An AI hallucination is:", options: ["A fast answer", "A broken screen", "Made-up content that sounds true", "A school drill"], answer: 2, why: "AI can invent facts and sources." },
      { objective: "O6", q: "The best one-line message to staff is:", options: ["AI grades everything", "AI replaces lesson planning", "AI is a first-draft partner, never the final word on a student", "AI is always right"], answer: 2, why: "It keeps teacher judgment central." },
      { objective: "O2", q: "AI features can appear in tools you already own:", options: ["Sometimes switched on by default", "Never", "Only if you pay extra", "Only on phones"], answer: 0, why: "Vendors add AI features to existing products." },
      { objective: "O2", q: "An adaptive program:", options: ["Prints report cards", "Takes attendance", "Locks doors", "Changes the next activity based on a student's answers"], answer: 3, why: "It adapts to answers." },
      { objective: "O2", q: "Your AI map should mark whether each tool:", options: ["Has a nice logo", "Is approved and touches student data", "Is popular", "Is new"], answer: 1, why: "Approval and data are what leaders must know." },
      { objective: "O3", q: "Which is a HELPFUL use?", options: ["Secret monitoring", "Deciding discipline", "Pasting IEPs into a free tool", "Making practice questions at several reading levels"], answer: 3, why: "It saves time and widens access." },
      { objective: "O3", q: "Why can student AI use on assignments be a problem?", options: ["It is illegal", "It is always cheating", "It can replace the thinking the assignment builds", "It is too slow"], answer: 2, why: "Rules decide when AI supports or replaces learning." },
      { objective: "O3", q: "The family test asks:", options: ["Would I explain this AI use to the student's family?", "Does the family own a computer?", "Is the family online?", "Did the family pay?"], answer: 0, why: "Comfort explaining a use is a good check." },
      { objective: "O4", q: "FERPA rights move from parents to the student at:", options: ["Age 10", "Age 18 or attending college", "Age 13", "Never"], answer: 1, why: "The student becomes an eligible student." },
      { objective: "O4", q: "Under FERPA, parents may:", options: ["Inspect and review their child's education records", "Read teachers' private diaries", "Change grades themselves", "Nothing"], answer: 0, why: "Inspection and review are core FERPA rights." },
      { objective: "O4", q: "A vendor can be a \"school official\" under FERPA only if it:", options: ["Has an app", "Is free", "Is popular", "Performs a school service under the school's direct control, with limits on re-sharing"], answer: 3, why: "Those conditions come from FERPA guidance." },
      { objective: "O4", q: "Directory information may be shared:", options: ["Never", "After notice and a chance to opt out", "Only with vendors", "Only by students"], answer: 1, why: "Schools must give notice and allow opt-out." },
      { objective: "O4", q: "Which agency enforces COPPA?", options: ["The Postal Service", "The Department of Agriculture", "The Federal Trade Commission", "The school board"], answer: 2, why: "The FTC enforces COPPA." },
      { objective: "O4", q: "A teacher pastes students' names and grades into a free, unapproved AI tool. This:", options: ["Is required", "Is always fine", "May disclose education records to a company with no agreement", "Improves privacy"], answer: 2, why: "That is the FERPA risk with unapproved tools." },
      { objective: "O4", q: "For your district's exact privacy obligations, ask:", options: ["Your privacy officer or legal counsel", "A chatbot", "A student", "A vendor's salesperson"], answer: 0, why: "Qualified people have the final word." },
      { objective: "O5", q: "The Department of Education's AI letter is dated:", options: ["March 3, 2019", "January 1, 2000", "October 27, 2026", "July 22, 2025"], answer: 3, why: "It was sent on July 22, 2025." },
      { objective: "O5", q: "Where can you find the Model Terms of Service checklist?", options: ["A social media app", "studentprivacy.ed.gov", "A vendor ad", "A news comment section"], answer: 1, why: "It is listed on the Student Privacy Policy Office site." },
      { objective: "O5", q: "Besides federal guidance, you should check:", options: ["Only vendor blogs", "Another country's rules", "Nothing else", "Your state education agency's AI guidance"], answer: 3, why: "Many states publish their own AI guidance." },
      { objective: "O6", q: "A good staff conversation on AI ends with:", options: ["A sales pitch", "A ban", "One next step and the top questions collected", "No conclusion"], answer: 2, why: "Next steps and questions guide what to do next." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Pre-Test: What Do You Already Know?",
    from: [
      0,
      2,
      3,
      6,
      9,
      13,
      14,
      16,
      18,
      19
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      {
        name: "Plain definition",
        objective: "O1",
        notYet: "The definition uses jargon or is longer than two sentences.",
        meets: "Explains AI in two plain sentences.",
        exceeds: "A colleague who is new to AI understood it on first reading."
      },
      {
        name: "Helps and risks",
        objective: "O3",
        notYet: "Fewer than three helps or three risks, or they do not fit school.",
        meets: "Three ways AI can help teachers and three risks for students.",
        exceeds: "Each risk says what staff should do about it."
      },
      {
        name: "Privacy rule",
        objective: "O4",
        notYet: "The privacy rule is missing or unclear.",
        meets: "States that no student names, grades or other personally identifiable information go into AI tools the district has not approved.",
        exceeds: "Gives a short example of asking for help without student information."
      },
      {
        name: "Who to ask",
        objective: "O6",
        notYet: "Does not say who to ask.",
        meets: "Names who to ask with questions.",
        exceeds: "Also names the privacy officer for privacy questions."
      },
      {
        name: "Staff conversation",
        objective: "O6",
        notYet: "No conversation held, or questions not recorded.",
        meets: "Led a 15-minute conversation and recorded the top three questions.",
        exceeds: "Ended with one clear next step for staff."
      }
    ]
  },
  evaluation: {
    results: [
      "Leaders who finish the course and pass the final task (rubric)",
      "Schools where staff have received an \"AI at our school\" handout within 30 days (follow-up survey)",
      "Schools with a map of AI tools in use, marked approved or not (follow-up survey)",
      "Leaders who go on to course 2 of AI for School and Educational Leaders"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A computer with internet",
      "Your district's list of approved tools, if one exists",
      "Paper or a document for the AI map and the one-page handout",
      "About 60 minutes in total, plus a 15-minute staff conversation"
    ],
    facilitatorNotes: [
      "Take the pre-test together, then build the AI map in school teams with the tech coordinator.",
      "Remind leaders that the course explains the law in plain words and is not legal advice; invite the district privacy officer if possible.",
      "Never use real student information in practice examples.",
      "Let leaders practice opening the staff conversation in pairs before leading it at school.",
      "Score the final task with the rubric, and ask for the recorded staff questions as evidence."
    ]
  }
};
