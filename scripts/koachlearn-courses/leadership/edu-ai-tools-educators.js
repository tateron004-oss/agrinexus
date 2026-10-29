"use strict";

// Koach Learn course: Leadership Development -> "AI for School and Educational Leaders 2: AI Tools for Educators" (course 2 of 8).
// Shape copied from re-entry/reentry-ai-digital-confidence.js. Student-privacy resources checked on studentprivacy.ed.gov and ftc.gov on 27 October 2026.

module.exports = {
  id: "edu-ai-tools-educators",
  category: "Leadership Development",
  name: "AI for School and Educational Leaders 2: AI Tools for Educators",
  skills: "Knowing the kinds of AI tools for schools, Writing teacher prompts that work, Using AI for three everyday teacher tasks, Vetting a tool's privacy terms, Building a green-yellow-red tools list",
  outcome: "use AI tools for everyday teacher tasks with a reliable prompt pattern, vet an AI tool's privacy terms with a checklist before anyone uses it with students, and publish a short green-yellow-red list of AI tools for your school.",
  about: [
    "This course is for principals, instructional coaches, teacher leaders, technology coordinators and teachers. It is hands-on: you will use AI tools for real school tasks and then judge which tools are safe to recommend.",
    "Chapter 1 sorts the many AI tools into a few kinds, teaches a prompt pattern that works for teachers, and practices three everyday tasks. Chapter 2 teaches you to vet a tool before staff or students use it: privacy terms, age rules, data use, and how to publish a simple tools list your staff can trust.",
    "Never put student names, grades, IEP details or other identifying information into any tool your district has not approved. Practice with made-up examples. A knowledge check closes each chapter and a 20-question quiz closes the course. This is course 2 of 8 in AI for School and Educational Leaders."
  ],
  finalTask: "Create your school's starter AI toolkit: a prompt card with three tested teacher prompts (a parent email, a reading passage at three levels, and ten practice questions with an answer key), and a green-yellow-red list of at least three AI tools, each checked against a privacy checklist built from the Model Terms of Service resource on studentprivacy.ed.gov, with a one-line reason for its color.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Principals, instructional coaches, teacher leaders, technology coordinators and teachers in US schools who want hands-on practice with AI tools and a way to judge which ones are safe.",
    startingPoint: "Know what AI is and the FERPA and COPPA basics from course 1. Have tried a chatbot but do not have a reliable prompt pattern or a way to vet a tool's privacy terms.",
    gap: "Staff are trying many AI tools, some with weak privacy terms or age rules students cannot meet. Leaders need to get good results from AI for everyday teacher tasks, check tools before anyone uses them with students, and give staff a simple list they can trust.",
    constraints: [
      "Never put student names, grades, IEP details or other identifying information into a tool the district has not approved; practice uses made-up examples",
      "Tool terms and age rules change, so learners check the current terms themselves",
      "The district privacy officer or technology team confirms the final tools list",
      "Devices: a computer with internet and at least one free AI assistant",
      "Time: short lessons fitted around a school day"
    ],
    prerequisites: "\"AI for School and Educational Leaders 1: Introduction to AI in Education\"."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Given the AI tools your staff use", action: "sort each tool into general assistant, education platform or built-in feature", standard: "marking whether the district has an agreement for it" },
    { id: "O2", condition: "For a lesson you teach or support", action: "write a teacher prompt with role, learners, goal, constraints and format", standard: "with all five parts and saved on a shared prompt card" },
    { id: "O3", condition: "Using made-up details", action: "use AI for a parent email, a leveled passage and practice questions with an answer key, and check each", standard: "fixing every error before use and working every answer yourself" },
    { id: "O4", condition: "Given an AI tool staff want", action: "check its privacy policy and terms against a privacy checklist", standard: "marking each item clear, unclear or a problem for the plan you would use" },
    { id: "O5", condition: "Before students sign in to a tool", action: "check the tool's current minimum age and parental-permission rules and how COPPA applies", standard: "using the tool's own current terms" },
    { id: "O6", condition: "Given at least three vetted tools", action: "publish a green-yellow-red tools list for staff", standard: "showing each tool's color, reason, allowed uses and date checked" }
  ],
  chapters: [
    {
      name: "Chapter 1: Using AI tools for teacher tasks",
      lessons: [
        {
          objectives: ["O1"],
          title: "The kinds of AI tools in schools",
          minutes: 5,
          goal: "Sort AI tools into general assistants, education platforms and built-in features.",
          text: [
            "General AI assistants, such as ChatGPT, Microsoft Copilot, Google Gemini and Claude, can do almost any writing or thinking task. They are flexible, but they know nothing about your curriculum unless you tell them, and their data terms depend on which plan you use.",
            "Education AI platforms are built for teachers or students: lesson and quiz generators, tutoring tools, feedback tools. They may fit school tasks better and some offer district agreements, but each must be vetted for privacy and quality.",
            "Built-in AI features live inside tools you already use: Microsoft 365, Google Workspace, Canva, your learning management system. They are convenient, but they may be switched on without anyone deciding to, so check with your technology team which are on and under what agreement."
          ],
          words: [["General assistant", "an AI chat tool that can help with almost any task."], ["Education platform", "an AI tool made for teaching or learning tasks."], ["Built-in feature", "an AI function inside software you already use."]],
          slides: [
            { title: "General assistants", bullets: ["ChatGPT, Copilot, Gemini, Claude", "Flexible, but know nothing about your curriculum", "Data terms depend on the plan"] },
            { title: "Education platforms", bullets: ["Lesson, quiz, tutoring and feedback tools", "Better fit for school tasks", "Each must be vetted"] },
            { title: "Built-in features", bullets: ["Inside Microsoft 365, Google, Canva, your LMS", "May be on by default", "Check which are on and under what agreement"] }
          ],
          tryIt: "List the AI tools you or your staff use now. Put each in one of the three kinds, and mark whether your district has an agreement for it (yes, no, don't know).",
          youCanNow: "sort AI tools into three kinds and know what to check for each.",
          quickCheck: [
            { objective: "O1", q: "What is a built-in AI feature?", options: ["An AI tool you must buy separately", "An AI feature inside software you already use", "A chatbot made by a student", "A paper worksheet"], answer: 1, why: "Built-in features appear inside tools you already own, sometimes switched on by default." },
            { objective: "O1", q: "A teacher uses a new education AI platform you have not heard of. What would you do first?", options: ["Approve it, since it is made for schools", "Ban all AI platforms", "List it and check whether the district has an agreement for it", "Ask students if they like it"], answer: 2, why: "Education platforms still need to be vetted for privacy and quality." }
          ]
        },
        {
          objectives: ["O2"],
          title: "A prompt pattern that works for teachers",
          minutes: 5,
          goal: "Write teacher prompts with role, learners, goal, constraints and format.",
          text: [
            "Teachers get better results with a five-part prompt. Role: \"You are an experienced 7th-grade science teacher.\" Learners: grade, reading level, needs in general terms (no names). Goal: the learning objective or standard. Constraints: time, materials, length, what to avoid. Format: a table, numbered steps, a handout.",
            "Example: \"You are an experienced 4th-grade teacher. My class reads at a range of levels. Write a 300-word passage about the water cycle at three reading levels with the same key facts, then five comprehension questions for each. Use a table.\"",
            "Then improve it with follow-ups: \"make level 1 simpler\", \"add a vocabulary list\", \"align questions to the main idea\". Save prompts that work on a shared prompt card so colleagues can reuse them."
          ],
          steps: ["Role: who should the AI act as?", "Learners: grade, level, needs in general terms.", "Goal: objective or standard.", "Constraints: time, length, materials.", "Format: table, steps, handout."],
          words: [["Prompt", "what you type to an AI tool to ask for something."], ["Prompt card", "a shared list of tested prompts staff can reuse."]],
          slides: [
            { title: "Five-part teacher prompt", bullets: ["Role", "Learners (no names)", "Goal, constraints, format"] },
            { title: "Example", bullets: ["4th-grade teacher, range of reading levels", "Water cycle passage at three levels", "Five questions each, in a table"] },
            { title: "Improve and save", bullets: ["Follow-ups: simpler, add vocabulary", "Save winners on a shared prompt card"] }
          ],
          tryIt: "Write a five-part prompt for a lesson you will teach (or support) soon. Run it, ask one follow-up, and save the final prompt.",
          youCanNow: "write teacher prompts that get usable results the first time.",
          quickCheck: [
            { objective: "O2", q: "What goes in the \"constraints\" part of a teacher prompt?", options: ["Limits such as length, reading level or what to avoid", "The student's full name", "The teacher's password", "The name of the AI tool"], answer: 0, why: "Constraints set limits so the answer fits your class." },
            { objective: "O2", q: "AI gives a passage that is too hard for your students. What would you send?", options: ["Start over in a new tool", "Accept it and explain the hard words in class", "Paste a student's reading scores", "A follow-up such as \"Make it simpler, with shorter sentences\""], answer: 3, why: "A clear follow-up adjusts the answer without sharing student data." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Three everyday tasks, done well",
          minutes: 6,
          goal: "Use AI for a parent email, a leveled passage and practice questions, and check each.",
          text: [
            "Parent email: give the purpose, the key facts (event, date, what families need to do) and the tone. Ask for a short, warm version in plain English. If it must go out in other languages, an AI translation is a draft; have a qualified speaker check it before it reaches families.",
            "Leveled passage: ask for the same content at three reading levels with the same key facts. Check the facts yourself; AI can introduce errors when it simplifies.",
            "Practice questions: ask for ten questions with an answer key and a short explanation for each answer. Work the answers yourself; AI answer keys are wrong more often than people expect, especially in math and science. In all three, you are the editor and the final check."
          ],
          steps: ["Parent email: purpose, facts, tone; translation checked by a qualified person.", "Leveled passage: same facts at three levels; check the facts.", "Practice questions: answer key with explanations; work every answer yourself.", "Edit everything before it is used."],
          words: [["Leveled text", "the same content written at different reading levels."], ["Answer key", "the list of correct answers for questions."]],
          slides: [
            { title: "Parent email", bullets: ["Purpose, facts, tone", "Plain English", "Translations checked by a qualified speaker"] },
            { title: "Leveled passage", bullets: ["Same facts, three levels", "Check facts: simplifying can add errors"] },
            { title: "Practice questions", bullets: ["Ten questions with an answer key", "Work every answer yourself", "You are the editor and final check"] }
          ],
          tryIt: "Do all three tasks with made-up details: a parent email about a field trip, a passage at three levels, and ten questions with an answer key. Count the errors you had to fix.",
          youCanNow: "use AI for three everyday teacher tasks and check the results like an editor.",
          quickCheck: [
            { objective: "O3", q: "What is leveled text?", options: ["Text printed in large letters", "The same content written at different reading levels", "A text with no pictures", "A test with three sections"], answer: 1, why: "Leveled text lets students at different reading levels learn the same content." },
            { objective: "O3", q: "AI writes ten practice questions with an answer key. What do you do before using them?", options: ["Work every answer yourself and fix errors", "Use them as they are", "Check only the first question", "Ask the AI if its answers are right"], answer: 0, why: "AI answer keys are wrong more often than people expect, so the teacher checks every one." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Using AI tools for teacher tasks",
        questions: [
          { objective: "O1", q: "AI features inside software you already own:", options: ["Are always off", "Never touch data", "May be on by default; check with your tech team", "Need no agreement"], answer: 2, why: "Built-in features can be switched on without a decision." },
          { objective: "O2", q: "Which belongs in the \"learners\" part of a teacher prompt?", options: ["Grade and reading levels in general terms", "Students' full names", "Students' IEP goals by name", "Parents' phone numbers"], answer: 0, why: "Describe learners generally, never with identifying details." },
          { objective: "O3", q: "An AI translation of a family letter is:", options: ["Ready to send", "Always perfect", "Illegal", "A draft a qualified speaker should check"], answer: 3, why: "Translations can be wrong; families deserve accurate information." },
          { objective: "O3", q: "Why work every answer in an AI answer key yourself?", options: ["It is required by law", "AI answer keys are wrong more often than people expect", "It makes the quiz longer", "Students like it"], answer: 1, why: "Errors in keys mislead students." },
          { objective: "O2", q: "Where should you save prompts that work well?", options: ["Nowhere", "In the parent email", "In a student's account", "On a shared prompt card"], answer: 3, why: "Shared, tested prompts save colleagues time." }
        ]
      }
    },
    {
      name: "Chapter 2: Choosing tools that are safe for students",
      lessons: [
        {
          objectives: ["O4"],
          title: "Reading a tool's privacy terms with a checklist",
          minutes: 6,
          goal: "Check an AI tool's privacy policy and terms against a short checklist.",
          text: [
            "The US Department of Education's Student Privacy Policy Office publishes a Model Terms of Service checklist to help schools review an online tool's privacy policy and terms before signing up. Use it, or a checklist your district already has.",
            "Key questions: What student data does it collect? Who owns the data? Does the company use student data for advertising or to train its AI models? Can the school get data deleted, and when? Who else gets the data? How is it protected, and what happens if there is a breach? Can the company change the terms without telling you?",
            "Read the policy for the plan you would actually use; free consumer plans and education plans often have different terms. If the answers are unclear, the answer is \"not yet\". FERPA and COPPA set the floor, and your state may have stricter student-privacy laws; your district's privacy officer can tell you which apply."
          ],
          steps: ["Open the tool's privacy policy and terms for the plan you would use.", "Go through the checklist: data collected, ownership, ads and training, deletion, sharing, security, changes.", "Mark each item clear, unclear or a problem.", "Ask the vendor about unclear items in writing.", "Send the result to your district privacy officer."],
          words: [["Privacy policy", "a company's statement of what data it collects and how it uses it."], ["Terms of service", "the rules and agreement for using a product."], ["Data breach", "when data is accessed or released without permission."]],
          slides: [
            { title: "Use a checklist", bullets: ["Model Terms of Service (studentprivacy.ed.gov)", "Or your district's checklist"] },
            { title: "Key questions", bullets: ["What data, who owns it", "Ads or AI training on student data?", "Deletion, sharing, security, breach"] },
            { title: "Read the right plan", bullets: ["Consumer and education terms differ", "Unclear means \"not yet\"", "Ask your privacy officer about state laws"] }
          ],
          sources: [{ name: "Privacy and Education Technology: Model Terms of Service checklist", url: "https://studentprivacy.ed.gov/privacy-and-education-technology" }, { name: "FERPA: Protecting Student Privacy", url: "https://studentprivacy.ed.gov/ferpa" }],
          tryIt: "Pick one AI tool your staff want. Read its privacy policy for the plan you would use and mark each checklist item clear, unclear or a problem.",
          youCanNow: "vet an AI tool's privacy terms with a checklist before it is used with students.",
          quickCheck: [
            { objective: "O4", q: "Which is a privacy checklist question?", options: ["Is the tool's logo friendly?", "How many people use it?", "Does the company use student data to train its AI?", "Does it work on tablets?"], answer: 2, why: "Whether student data trains the AI is a key privacy question." },
            { objective: "O4", q: "The free plan's privacy terms differ from the education plan's. Which do you check?", options: ["Whichever is shorter", "The free plan, since it is cheaper", "Neither; terms are all the same", "The terms for the plan your school would actually use"], answer: 3, why: "Free consumer and education plans often have different terms." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Age rules and student accounts",
          minutes: 5,
          goal: "Check a tool's age rules and how COPPA applies before students sign in.",
          text: [
            "Many AI tools set minimum ages and parental-permission rules in their terms, and these change. Check each tool's current terms; do not rely on what a colleague remembers. A tool that is fine for teachers may not be allowed for students at all.",
            "For children under 13, COPPA applies to the online service. The FTC says a school may consent in place of parents only when the service collects student information for the use and benefit of the school and for no other commercial purpose. The FTC also suggests, as good practice, that schools tell parents which online services they have approved.",
            "Prefer school-managed student accounts under a district agreement over students signing up on their own with personal emails. Decide in advance what students may use AI for, and tell families."
          ],
          steps: ["Read the tool's current age and permission rules.", "If students are under 13, check how COPPA consent would work.", "Prefer school-managed accounts under an agreement.", "Tell families which services are approved.", "Decide what students may use it for."],
          words: [["Minimum age", "the youngest age a tool's terms allow to use it."], ["School-managed account", "a student account created and controlled by the school."]],
          slides: [
            { title: "Check each tool's age rules", bullets: ["Set in the tool's own terms", "They change: read the current version", "Teacher-OK is not student-OK"] },
            { title: "Under 13: COPPA", bullets: ["School consent only for school use", "No other commercial purpose", "Tell parents what you approved"] },
            { title: "Accounts", bullets: ["School-managed, under an agreement", "Not personal sign-ups", "Tell families the allowed uses"] }
          ],
          sources: [{ name: "FTC: Complying with COPPA, Frequently Asked Questions", url: "https://www.ftc.gov/business-guidance/resources/complying-coppa-frequently-asked-questions" }],
          tryIt: "For the tool from Lesson 4, find its current minimum age and parental-permission rule in its terms. Write whether students in your school could use it, and how.",
          youCanNow: "check a tool's age rules and COPPA consent before any student signs in.",
          quickCheck: [
            { objective: "O5", q: "How should student accounts on an AI tool preferably be set up?", options: ["Students sign up with personal email", "Teachers share one login with the class", "School-managed accounts under an agreement", "No accounts; students use a parent's account"], answer: 2, why: "School-managed accounts under an agreement keep student data under the school's control." },
            { objective: "O5", q: "A colleague says a tool is fine for 10-year-olds. What do you check?", options: ["The tool's current terms for its minimum age and parental-permission rule", "A review on social media", "Whether other schools use it", "Nothing; trust the colleague"], answer: 0, why: "Age rules change, so check the tool's current terms yourself." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Publishing a green-yellow-red tools list",
          minutes: 6,
          goal: "Publish a simple list that tells staff which AI tools are approved and for what.",
          text: [
            "Staff need a simple answer to \"can I use this?\". A green-yellow-red list gives it. Green: approved under a district agreement, may be used with student information as the agreement allows. Yellow: allowed for teacher tasks with no student information (lesson ideas, generic materials). Red: not allowed, because of privacy, age or quality problems.",
            "For each tool, record the color, the reason, the allowed uses, whether students may use it, and the date you checked. Your district's privacy officer or technology team should agree with the green list.",
            "Pair the list with your prompt card so staff know both what to use and how to use it well. Review both each term, because tools and terms change."
          ],
          steps: ["List the tools you checked.", "Give each a color: green, yellow or red.", "Write the reason, allowed uses, student use and date checked.", "Get the privacy officer or technology team to confirm.", "Share it with the prompt card; review each term."],
          words: [["Approved list", "a published list of tools staff may use and how."], ["Agreement", "a signed contract or data-privacy agreement between the district and a company."]],
          slides: [
            { title: "Three colors", bullets: ["Green: approved under agreement", "Yellow: teacher tasks, no student info", "Red: not allowed"] },
            { title: "For each tool record", bullets: ["Color and reason", "Allowed uses and student use", "Date checked"] },
            { title: "Keep it useful", bullets: ["Confirm with privacy or tech team", "Share with the prompt card", "Review every term"] }
          ],
          tryIt: "Final task: build your starter toolkit, a prompt card with your three tested prompts (parent email, leveled passage, practice questions) and a green-yellow-red list of at least three tools checked with the privacy checklist, each with a one-line reason.",
          youCanNow: "give staff a trusted, simple guide to which AI tools to use and how to use them.",
          quickCheck: [
            { objective: "O6", q: "What does a GREEN tool mean on the list?", options: ["It is free", "It may be used, including with student information as the district agreement allows", "It is banned", "Only students may use it"], answer: 1, why: "Green tools are approved, and student information is allowed only as the agreement allows." },
            { objective: "O6", q: "A tool's terms changed since your list was made. What would you do?", options: ["Leave the list as it is until next year", "Delete the whole list", "Recheck the tool, update its color and the date checked", "Tell staff to decide for themselves"], answer: 2, why: "The list shows a date checked so it stays current as terms change." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Choosing tools that are safe for students",
        questions: [
          { objective: "O4", q: "Where can you find the Model Terms of Service checklist?", options: ["A social media post", "A vendor's ad", "studentprivacy.ed.gov", "The tool's logo"], answer: 2, why: "The Student Privacy Policy Office lists it." },
          { objective: "O4", q: "A tool's privacy policy is unclear about training AI on student data. Your verdict?", options: ["\"Not yet\": ask the vendor in writing", "Approve it", "Let students decide", "Ignore the question"], answer: 0, why: "Unclear answers mean the tool is not ready to approve." },
          { objective: "O5", q: "A colleague says a tool's minimum age is 13. What should you do?", options: ["Trust it", "Check the tool's current terms yourself", "Ask a student", "Assume there is no limit"], answer: 1, why: "Age rules are set by each tool and change." },
          { objective: "O6", q: "What does a YELLOW tool mean on the list?", options: ["Teacher tasks only, with no student information", "Approved for all student data", "Banned", "Only for parents"], answer: 0, why: "Yellow allows generic teacher use without student data." },
          { objective: "O6", q: "How often should the tools list be reviewed?", options: ["Never", "Only after a breach", "Every ten years", "Each term"], answer: 3, why: "Tools and terms change often." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: AI for School and Educational Leaders 2: AI Tools for Educators",
    questions: [
      { objective: "O1", q: "Which is a general AI assistant?", options: ["A gradebook", "Google Gemini", "A projector", "A bell schedule"], answer: 1, why: "Gemini, ChatGPT, Copilot and Claude are general assistants." },
      { objective: "O1", q: "General assistants know your curriculum:", options: ["From your student records", "Always", "Only if you tell them", "From the bell schedule"], answer: 2, why: "They need context in the prompt." },
      { objective: "O1", q: "Education AI platforms must be:", options: ["Paid for by students", "Used without checking", "Vetted for privacy and quality", "Banned"], answer: 2, why: "Every tool needs vetting." },
      { objective: "O2", q: "The five-part teacher prompt includes:", options: ["Role, learners, goal, constraints, format", "Names, grades, IEPs, addresses, phones", "Only the topic", "A password"], answer: 0, why: "Those parts produce usable results." },
      { objective: "O2", q: "A good follow-up is:", options: ["\"Delete the answer.\"", "\"Here are my students' names.\"", "\"Grade my class.\"", "\"Make level 1 simpler.\""], answer: 3, why: "It improves the result without private data." },
      { objective: "O2", q: "A prompt card is:", options: ["A student ID", "A shared list of tested prompts", "A parking pass", "A report card"], answer: 1, why: "It lets colleagues reuse what works." },
      { objective: "O3", q: "Leveled text means:", options: ["A font size", "Text on a shelf", "A test score", "The same content at different reading levels"], answer: 3, why: "It widens access to the same ideas." },
      { objective: "O3", q: "When AI simplifies a passage, you should:", options: ["Make it longer", "Trust it", "Check that the facts stayed correct", "Remove all facts"], answer: 2, why: "Simplifying can introduce errors." },
      { objective: "O3", q: "In AI-assisted teacher tasks, the teacher is:", options: ["The editor and final check", "Not needed", "The AI's assistant", "Only a reader"], answer: 0, why: "Teachers own what reaches students." },
      { objective: "O4", q: "Which question is on a privacy checklist?", options: ["What color is the app?", "Does the company use student data to train its AI?", "How many downloads?", "Is it trendy?"], answer: 1, why: "Training use of student data is a key concern." },
      { objective: "O4", q: "Free consumer plans and education plans:", options: ["Often have different terms", "Always have the same terms", "Never collect data", "Are both unsafe"], answer: 0, why: "Read the terms for the plan you will use." },
      { objective: "O4", q: "Who should confirm your green list?", options: ["No one", "A student", "The vendor", "The district privacy officer or technology team"], answer: 3, why: "Approval needs the people responsible for privacy." },
      { objective: "O4", q: "State student-privacy laws:", options: ["Never exist", "May add requirements beyond FERPA and COPPA", "Replace federal law entirely", "Apply only to colleges"], answer: 1, why: "Federal law is the floor; states may add more." },
      { objective: "O5", q: "Under COPPA, school consent works only when data is collected:", options: ["For any reason", "For advertising", "For the school's use and benefit, with no other commercial purpose", "Never"], answer: 2, why: "That is the FTC's condition." },
      { objective: "O5", q: "The FTC suggests schools:", options: ["Let students approve tools", "Keep approvals secret", "Tell parents which online services they approved", "Avoid all tools"], answer: 2, why: "It is a recommended practice." },
      { objective: "O5", q: "Student accounts should preferably be:", options: ["School-managed under an agreement", "Personal sign-ups with home email", "Shared by the whole class", "Created by the vendor"], answer: 0, why: "School-managed accounts keep control with the school." },
      { objective: "O6", q: "A RED tool is:", options: ["Under review forever", "Approved for all uses", "For teacher tasks only", "Not allowed"], answer: 3, why: "Red means do not use." },
      { objective: "O6", q: "A GREEN tool may be used with student information:", options: ["Without any limits", "As the district agreement allows", "Never", "Only on weekends"], answer: 1, why: "The agreement sets the limits." },
      { objective: "O6", q: "Each tool on the list should show:", options: ["Its download count", "Only its logo", "Its price only", "Color, reason, allowed uses and date checked"], answer: 3, why: "Staff need the reason and the limits." },
      { objective: "O3", q: "Practice for this course should use:", options: ["Students' names", "Real student records", "Made-up examples", "IEP documents"], answer: 2, why: "Never use identifying student information in practice." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Pre-Test: What Do You Already Know?",
    from: [
      0,
      3,
      7,
      8,
      9,
      10,
      13,
      15,
      16,
      18
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      {
        name: "Prompt card",
        objective: "O2",
        notYet: "Fewer than three prompts, or prompts are missing parts.",
        meets: "Three tested prompts (parent email, leveled passage, practice questions) with role, learners, goal, constraints and format.",
        exceeds: "Each prompt includes a useful follow-up that staff can reuse."
      },
      {
        name: "Outputs checked",
        objective: "O3",
        notYet: "Outputs were used without checking, or the answer key was not worked.",
        meets: "Each output was checked and errors fixed; every answer in the key was worked.",
        exceeds: "Notes how many errors were found and what kind."
      },
      {
        name: "Privacy checklist",
        objective: "O4",
        notYet: "Tools were not checked, or the checklist is not based on the Model Terms of Service resource.",
        meets: "Each tool was checked with a privacy checklist built from the Model Terms of Service resource on studentprivacy.ed.gov.",
        exceeds: "Unclear items were sent to the vendor as written questions."
      },
      {
        name: "Age rules",
        objective: "O5",
        notYet: "Student use is allowed without checking age rules.",
        meets: "Notes each tool's current minimum age and parental-permission rule from its terms.",
        exceeds: "Explains how students could use it, such as school-managed accounts."
      },
      {
        name: "Green-yellow-red list",
        objective: "O6",
        notYet: "Fewer than three tools, or colors without reasons.",
        meets: "At least three tools, each with a color and a one-line reason.",
        exceeds: "Also shows allowed uses and date checked, and was sent to the privacy officer or technology team to confirm."
      }
    ]
  },
  evaluation: {
    results: [
      "Leaders who finish the course and pass the final task (rubric)",
      "Schools that publish a green-yellow-red AI tools list within 30 days (follow-up survey)",
      "Teachers who report using a shared prompt card for weekly tasks (follow-up survey)",
      "Leaders who go on to course 3 of AI for School and Educational Leaders"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A computer with internet and at least one free AI assistant",
      "The Model Terms of Service resource from studentprivacy.ed.gov",
      "Made-up examples for practice tasks",
      "Your district's list of approved tools and agreements, if one exists",
      "About 60 minutes in total: lessons, practice, checks and the final task"
    ],
    facilitatorNotes: [
      "Take the pre-test together, then do the three everyday tasks live with made-up details.",
      "Never use real student names, grades or IEP details in practice.",
      "Split the group so each pair vets a different tool, then combine results into one draft list.",
      "Invite the district privacy officer or technology team to review the draft list.",
      "Score the final task with the rubric, and check that each tool's date checked is recorded."
    ]
  }
};
