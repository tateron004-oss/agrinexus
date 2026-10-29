"use strict";

// Koach Learn course: Leadership Development -> "AI for Special Education" (advanced topic in AI for School and Educational Leaders).
// Shape copied from re-entry/reentry-ai-digital-confidence.js. IDEA basics from the Department of Education's IDEA site (via search) and
// NCLD; FERPA from studentprivacy.ed.gov; checked 27 October 2026.

module.exports = {
  id: "edu-ai-special-education",
  category: "Leadership Development",
  name: "AI for Special Education",
  skills: "Knowing where AI fits and does not fit in special education, Making accessible versions of materials, Building visual supports and chunked tasks, Writing plain-language explanations for families, Protecting IEP and 504 information, Setting team rules",
  outcome: "use AI to make classroom materials more accessible, plain-language versions, chunked steps, visual schedules and practice at several levels, and to explain special education processes to families in plain words, while keeping every IEP and 504 decision and all student information with the team.",
  about: [
    "This course is for special education teachers, general education teachers who teach students with disabilities, related-service providers, coordinators and principals. AI can save time on adapting materials and explaining processes. It must never write or decide the content of a student's IEP or 504 plan.",
    "Chapter 1 sets the boundaries (what IDEA requires of the team, and why AI cannot fill that role) and practices making accessible materials. Chapter 2 covers communication with families, protecting student information, and the rules your team will follow.",
    "This course explains the law in plain words so you know what to ask; it is not legal advice. Your district's special education director and counsel have the final word. Practice only with made-up or general materials. A knowledge check closes each chapter and a 20-question quiz closes the course."
  ],
  finalTask: "Create an accessibility pack for one general lesson (no student information): a plain-language version of the main reading, the task broken into numbered chunks with a checklist, a visual schedule for the lesson, and practice at two levels; plus a one-page plain-language explanation for families of a general special education step (for example, \"what happens at an annual IEP meeting\"). Check everything for accuracy, and write five team rules for AI use in special education.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Special education teachers, general education teachers who teach students with disabilities, related-service providers, coordinators and principals in US schools.",
    startingPoint: "Adapt materials and explain special education processes by hand, which takes a lot of time. May have tried AI but are unsure where it fits under IDEA and Section 504 and how to keep IEP and 504 information safe.",
    gap: "AI can save time on accessible materials and plain-language family explanations, but it must never write or decide a student's IEP or 504 content, and student information is highly sensitive. Educators need to use AI for the right tasks, check its output and follow clear team rules.",
    constraints: [
      "The course explains the law in plain words and is not legal advice; the district's special education director and counsel have the final word",
      "Practice only with made-up or general materials; no student information in any AI tool that is not approved",
      "IEP and 504 decisions and required accommodations stay with the team and are provided as written",
      "Family materials stay general and are checked against district materials; translations are checked by qualified speakers",
      "Time: short lessons fitted around a teaching day"
    ],
    prerequisites: "None. \"AI for School and Educational Leaders 2: AI Tools for Educators\" is a helpful start."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Given a list of special education tasks", action: "sort each task into \"AI may help\" or \"team only\"", standard: "placing every IEP and 504 decision with the team" },
    { id: "O2", condition: "Given a general reading and assignment", action: "create a plain-language version and a chunked checklist with AI", standard: "comparing each with the original and fixing every dropped or changed fact" },
    { id: "O3", condition: "For one general lesson", action: "create a visual schedule and practice at two levels", standard: "with alt text on every image, every answer checked, and required accommodations still provided as written" },
    { id: "O4", condition: "Given a general special education step", action: "write a one-page plain-language explanation for families", standard: "checked against your district's official materials and read by a colleague for tone" },
    { id: "O5", condition: "When staff want AI help with special education information", action: "choose a safe way to get the help without sharing IEP, 504 or evaluation details", standard: "using only approved tools with minimum information" },
    { id: "O6", condition: "For your team", action: "write five team rules for AI use in special education", standard: "with an example for each, shared with teachers, paraprofessionals and related-service providers" }
  ],
  chapters: [
    {
      name: "Chapter 1: Boundaries and accessible materials",
      lessons: [
        {
          objectives: ["O1"],
          title: "Where AI fits, and where it does not",
          minutes: 6,
          goal: "Explain what AI may help with in special education and what stays with the IEP team.",
          text: [
            "The Individuals with Disabilities Education Act (IDEA) requires that eligible children with disabilities receive a free appropriate public education (FAPE). Under Part B, which covers ages 3 through 21, services are set out in an Individualized Education Program (IEP) developed by a team that includes the child's parents and school staff. Part C covers early intervention for infants and toddlers. Section 504 plans are a separate path for some students with disabilities.",
            "These are individual, legal, team decisions based on evaluation and knowledge of the child. AI cannot attend the meeting, does not know the child, and can produce generic or wrong content. So AI must not write present levels, goals, services, accommodations or placement, and AI output must never be used to decide eligibility.",
            "Where AI helps: adapting general classroom materials, creating practice at several levels, making visual supports, drafting general explanations of processes for families, and organizing your own schedule and paperwork templates (without student data)."
          ],
          words: [["IDEA", "the federal law that requires a free appropriate public education for eligible children with disabilities."], ["FAPE", "free appropriate public education: what IDEA guarantees eligible students."], ["IEP", "Individualized Education Program: the written plan of a student's special education services, made by a team including parents."], ["Section 504 plan", "a plan that provides accommodations for a student with a disability under a different federal law."]],
          slides: [
            { title: "What IDEA requires", bullets: ["FAPE for eligible children with disabilities", "Part B: ages 3 through 21, through an IEP", "IEP made by a team including parents"] },
            { title: "AI does NOT", bullets: ["Write goals, services or accommodations", "Decide eligibility or placement", "Replace the team's knowledge of the child"] },
            { title: "AI CAN help", bullets: ["Adapt general materials", "Practice at several levels; visual supports", "General explanations for families"] }
          ],
          sources: [{ name: "US Department of Education: Annual Report to Congress on IDEA (Part B ages 3 through 21)", url: "https://sites.ed.gov/idea/2021-individuals-with-disabilities-education-act-annual-report-to-congress/" }, { name: "NCLD: Individuals with Disabilities Education Act", url: "https://ncld.org/understand-the-issues/learn-the-law/individuals-with-disabilities-education-act" }],
          tryIt: "Make two columns: \"AI may help\" and \"Team only\". Place at least ten special education tasks from your week in the right column.",
          youCanNow: "draw a clear line between AI support tasks and IEP team decisions.",
          quickCheck: [
            { objective: "O1", q: "Who develops a student's IEP?", options: ["An AI tool approved by the district", "A team including parents and school staff", "The principal alone", "The student's general education teacher alone"], answer: 1, why: "The IEP is developed by a team that includes parents." },
            { objective: "O1", q: "A colleague asks AI to suggest which accommodations a student should get. What would you say?", options: ["Good idea; use its list", "Ask a second AI tool to check", "Accommodation decisions are for the IEP or 504 team, not AI", "Use AI's list only for younger students"], answer: 2, why: "IEP and 504 decisions stay with the team." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Plain-language versions and chunked tasks",
          minutes: 5,
          goal: "Use AI to make a plain-language version of a reading and break a task into chunks.",
          text: [
            "Many students benefit from text that keeps the ideas but lowers the reading load: shorter sentences, common words, key terms explained, headings and bullet points. Prompt: \"Rewrite this passage at about a 3rd-grade reading level. Keep every key fact and these vocabulary words: [list]. Use short sentences and headings. Add a box defining each vocabulary word.\"",
            "Chunking breaks a multi-step task into small numbered steps with a checklist. Prompt: \"Break this assignment into 5 to 8 numbered steps, one action per step, with a checkbox for each and an estimated time.\"",
            "Check every version against the original: AI sometimes drops or changes facts when it simplifies. Keep the grade-level ideas; lowering the reading level should not lower the learning goal."
          ],
          steps: ["Paste the general passage or assignment (no student info).", "Ask for the plain-language version, keeping key facts and vocabulary.", "Ask for numbered chunks with checkboxes and times.", "Compare with the original; fix dropped or changed facts.", "Keep the same learning goal."],
          words: [["Plain language", "clear writing with short sentences and common words."], ["Chunking", "breaking a task into small, manageable steps."]],
          slides: [
            { title: "Plain-language version", bullets: ["Same ideas, lower reading load", "Short sentences, common words, headings", "Keep key vocabulary, with definitions"] },
            { title: "Chunk the task", bullets: ["5-8 numbered steps", "One action per step", "Checkbox and time for each"] },
            { title: "Check against the original", bullets: ["Simplifying can drop facts", "Same learning goal"] }
          ],
          tryIt: "Take a general reading and an assignment from an upcoming lesson. Make a plain-language version and a chunked checklist with AI, then compare each with the original and fix any errors.",
          youCanNow: "make accurate plain-language and chunked versions of class materials.",
          quickCheck: [
            { objective: "O2", q: "What is plain language?", options: ["Short sentences and common words that keep the same ideas", "A shorter text with fewer ideas", "A text with no punctuation", "A translation into another language"], answer: 0, why: "Plain language makes the text easier to read without changing its content." },
            { objective: "O2", q: "AI's chunked checklist skips one step of the assignment. What do you do?", options: ["Use it; students will figure it out", "Remove the step from the assignment", "Ask students to find the missing step", "Compare it with the original task and add the missing step"], answer: 3, why: "Checking against the original catches dropped steps and facts." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Visual supports and practice at several levels",
          minutes: 5,
          goal: "Create a visual schedule and two levels of practice for a lesson.",
          text: [
            "Visual schedules and supports help many students know what is coming and what to do. AI can draft the text of a visual schedule (\"1. Warm-up, 5 minutes; 2. Mini-lesson...\") and suggest simple icons; tools like Canva can lay it out. For images, check that pictures are clear, respectful and match the words.",
            "Practice at several levels lets every student work on the same skill: ask AI for a set with more support (worked example first, fewer steps, word bank) and a set on level. Check every answer.",
            "Remember that accommodations listed in a student's IEP or 504 plan must be provided as written; your materials add support for everyone but do not replace required accommodations. Check accessibility too: readable fonts, good contrast, alt text for images, and text that works with text-to-speech."
          ],
          steps: ["Draft the visual schedule text with AI.", "Lay it out with clear, respectful icons.", "Ask for practice with more support and on level.", "Check every answer.", "Check accessibility: font, contrast, alt text, text-to-speech."],
          words: [["Visual schedule", "a picture-and-word list of what will happen, in order."], ["Alt text", "a short written description of an image for people using screen readers."], ["Text-to-speech", "technology that reads text aloud."]],
          slides: [
            { title: "Visual schedules", bullets: ["AI drafts the steps and times", "Lay out with clear, respectful icons"] },
            { title: "Two levels of practice", bullets: ["More support: worked example, word bank", "On level: same skill", "Check every answer"] },
            { title: "Accessibility and accommodations", bullets: ["Readable font, contrast, alt text", "Works with text-to-speech", "Required accommodations still apply"] }
          ],
          tryIt: "Make a visual schedule for one lesson and two levels of practice for its main skill. Add alt text to any image and check every answer.",
          youCanNow: "create visual supports and leveled practice that make lessons more accessible.",
          quickCheck: [
            { objective: "O3", q: "What does a visual schedule show?", options: ["Students' grades", "The teacher's calendar", "What will happen, in order, with pictures and words", "A seating chart"], answer: 2, why: "Visual schedules help students know what comes next." },
            { objective: "O3", q: "Your two-level practice includes a word bank, but a student's IEP requires extended time. What applies?", options: ["Provide the extended time as written in the IEP", "The word bank replaces the extended time", "Ask AI which support is better", "Use extended time only on tests"], answer: 0, why: "Required IEP accommodations must be provided as written, whatever other supports you add." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Boundaries and accessible materials",
        questions: [
          { objective: "O1", q: "Under IDEA Part B, special education services for eligible students ages 3 through 21 are set out in:", options: ["A report card", "An AI summary", "An IEP developed by a team including parents", "A newsletter"], answer: 2, why: "The IEP is the team's written plan." },
          { objective: "O1", q: "Which task should AI NOT do?", options: ["Write a student's IEP goals", "Make a plain-language version of a general reading", "Draft a visual schedule", "Create practice at two levels"], answer: 0, why: "IEP content is a team decision." },
          { objective: "O2", q: "AI simplified a science passage and changed a fact. What should you do?", options: ["Use it anyway", "Delete the original", "Simplify it more", "Compare with the original and fix it"], answer: 3, why: "Simplifying can introduce errors." },
          { objective: "O3", q: "What is alt text?", options: ["A different font", "A written description of an image for screen readers", "An alternative test", "A text message"], answer: 1, why: "Alt text makes images accessible." },
          { objective: "O3", q: "Your leveled materials offer more support. Do required IEP accommodations still apply?", options: ["No, the materials replace them", "Only on test days", "Only if parents ask", "Yes, they must be provided as written"], answer: 3, why: "Required accommodations are not replaced." }
        ]
      }
    },
    {
      name: "Chapter 2: Families, privacy and team rules",
      lessons: [
        {
          objectives: ["O4"],
          title: "Explaining processes to families in plain words",
          minutes: 5,
          goal: "Draft a plain-language family explanation of a general special education step.",
          text: [
            "Special education paperwork is full of terms families may not know: evaluation, eligibility, present levels, least restrictive environment, procedural safeguards. AI is good at drafting general, plain-language explanations of these terms and of what happens at each step.",
            "Prompt: \"Explain to a parent, in plain English at about a 6th-grade reading level, what happens at an annual IEP meeting: who attends, what is discussed, what they can ask, and how to prepare. Warm and respectful tone. Under 400 words.\" Then check it against your district's procedures and official materials, because AI may describe another state's process or get details wrong.",
            "Keep these general. Do not use AI to write anything about a specific child. Offer translations checked by qualified speakers, and remember that your district's official procedural safeguards notice is the legal document; your explainer helps families understand it, not replace it."
          ],
          steps: ["Choose a general step or term families ask about.", "Ask for a plain-language explanation with tone and length.", "Check it against district procedures and official materials.", "Keep it general: no specific child.", "Offer checked translations; point to the official notice."],
          words: [["Procedural safeguards", "the rights parents have in special education, explained in an official notice."], ["Least restrictive environment", "the IDEA idea that students with disabilities learn with peers without disabilities as much as appropriate."]],
          slides: [
            { title: "Jargon families meet", bullets: ["Evaluation, eligibility, present levels", "Least restrictive environment", "Procedural safeguards"] },
            { title: "A general explainer", bullets: ["Plain English, warm tone, short", "Who attends, what happens, how to prepare", "Check against district procedures"] },
            { title: "Keep it general", bullets: ["Nothing about a specific child", "Checked translations", "The official notice stays the legal document"] }
          ],
          tryIt: "Draft a one-page plain-language explanation of one general special education step for families, check it against your district's materials, and have a colleague read it for tone.",
          youCanNow: "help families understand special education processes with clear, checked explanations.",
          quickCheck: [
            { objective: "O4", q: "What should a family explainer made with AI be about?", options: ["A specific child's evaluation", "A general step, not a specific child", "A teacher's opinion of a family", "The district's budget"], answer: 1, why: "Family explainers stay general so no student information goes into AI." },
            { objective: "O4", q: "AI's explanation of an annual IEP meeting differs from your district's materials. What would you do?", options: ["Share AI's version since it is clearer", "Share both and let families choose", "Ask AI which is right", "Correct it to match the district's procedures before sharing"], answer: 3, why: "District procedures and official notices are the source, not the AI." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Protecting IEP and 504 information",
          minutes: 5,
          goal: "Apply privacy rules to special education information and AI tools.",
          text: [
            "IEPs, 504 plans, evaluations, disability information and related notes are part of a student's education records, protected by FERPA, and among the most sensitive information a school holds. Disclosing personally identifiable information from them to an outside company generally needs consent unless an exception applies.",
            "Rules for staff: never paste IEP or 504 content, evaluation results, diagnoses, behavior plans or names into unapproved AI tools. If your district has approved an AI tool for special education work, use it only as the agreement allows, and still use the minimum information needed.",
            "Be careful with AI note-takers and recording in meetings about students: IEP meetings should not be recorded or transcribed by unapproved tools. Your special education director and privacy officer can tell you what your district and state allow."
          ],
          steps: ["Treat IEP, 504, evaluation and disability information as highly sensitive.", "Never put it into unapproved AI tools.", "Use approved tools only as the agreement allows.", "Use the minimum information needed.", "No unapproved recording or AI notes in student meetings."],
          words: [["Education record", "a record directly related to a student and kept by the school."], ["Sensitive information", "information that could cause serious harm if shared, such as disability or health details."]],
          slides: [
            { title: "Among the most sensitive records", bullets: ["IEPs, 504 plans, evaluations", "Diagnoses, behavior plans", "Protected by FERPA"] },
            { title: "Staff rules", bullets: ["Never in unapproved AI tools", "Approved tools only as the agreement allows", "Minimum information needed"] },
            { title: "Meetings about students", bullets: ["No unapproved recording or AI notes", "Ask your director and privacy officer"] }
          ],
          sources: [{ name: "FERPA: Protecting Student Privacy", url: "https://studentprivacy.ed.gov/ferpa" }],
          tryIt: "Write three realistic examples of special education information staff might be tempted to paste into AI, and for each, a safe way to get the same help without it.",
          youCanNow: "protect IEP, 504 and disability information when AI tools are in use.",
          quickCheck: [
            { objective: "O5", q: "Which law protects IEPs and evaluation records as education records?", options: ["FERPA", "COPPA only", "No law", "Copyright law"], answer: 0, why: "IEPs and evaluations are education records protected by FERPA." },
            { objective: "O5", q: "A teacher wants AI to rewrite a behavior plan for clarity. What is a safe way?", options: ["Paste the plan into a free chatbot", "Remove the name but keep the diagnosis", "Ask for help with a general, made-up example, or use an approved tool as the agreement allows", "Email it to a friend who uses AI"], answer: 2, why: "Behavior plans and diagnoses never go into unapproved tools." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Team rules for AI in special education",
          minutes: 6,
          goal: "Write five clear team rules and model them with colleagues.",
          text: [
            "Your team needs shared rules, written down. Five that cover most situations: 1) AI never writes or decides IEP or 504 content, eligibility or placement. 2) No student information in unapproved tools. 3) Every AI-made material is checked for accuracy and accessibility before students see it. 4) AI supports never replace required accommodations. 5) Family explanations are general, checked against official materials, and translated by qualified speakers.",
            "Share them in a team meeting, with examples of what is and is not allowed. Invite questions from paraprofessionals and related-service providers, who are often left out of AI guidance.",
            "Collect good prompts and materials in a shared folder so the time saved reaches the whole team, and review the rules each year with your special education director."
          ],
          steps: ["Write the five rules in plain words.", "Add an example for each.", "Share in a team meeting, including paraprofessionals.", "Start a shared folder of good prompts and materials.", "Review yearly with the special education director."],
          words: [["Paraprofessional", "a school staff member who supports students and teachers, often in special education."], ["Related services", "supports such as speech, occupational or physical therapy that help a student benefit from special education."]],
          slides: [
            { title: "Five team rules", bullets: ["1 No AI on IEP or 504 decisions", "2 No student info in unapproved tools", "3 Check accuracy and accessibility", "4 Accommodations still apply; 5 Family texts checked"] },
            { title: "Share them well", bullets: ["Examples of allowed and not allowed", "Include paraprofessionals and therapists"] },
            { title: "Share the gains", bullets: ["Shared prompt and materials folder", "Review yearly"] }
          ],
          tryIt: "Final task: build your accessibility pack (plain-language reading, chunked checklist, visual schedule, two levels of practice), write your one-page family explanation, check everything, and write your team's five AI rules with an example for each.",
          youCanNow: "use AI to make special education materials more accessible while protecting students and keeping decisions with the team.",
          quickCheck: [
            { objective: "O6", q: "Who has the final word on your district's special education rules?", options: ["The AI vendor", "The special education director and counsel", "Each teacher", "The parent group"], answer: 1, why: "District leaders and counsel decide how rules apply locally." },
            { objective: "O6", q: "You wrote five AI rules. How do you help the whole team use them?", options: ["Share them with teachers, paraprofessionals and related-service providers, with examples", "Email them to principals only", "Keep them in your own files", "Post them once and never review them"], answer: 0, why: "Everyone who works with students needs the rules and examples." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Families, privacy and team rules",
        questions: [
          { objective: "O4", q: "AI drafted a family explanation of the IEP process. Before sharing it, you should:", options: ["Send it as is", "Add a student's name", "Check it against your district's procedures and official materials", "Remove all headings"], answer: 2, why: "AI may describe another state's process or get details wrong." },
          { objective: "O4", q: "Which document remains the legal statement of parents' rights?", options: ["The district's official procedural safeguards notice", "Your AI explainer", "A newsletter", "A text message"], answer: 0, why: "The explainer helps families understand the official notice." },
          { objective: "O5", q: "A teacher wants AI to summarize a student's evaluation report in a free tool. Best answer?", options: ["Go ahead", "No: evaluation results are sensitive education records; do not use unapproved tools", "Only the first page", "Only if anonymous-looking"], answer: 1, why: "Evaluations are protected and highly sensitive." },
          { objective: "O5", q: "Should an unapproved AI note-taker record an IEP meeting?", options: ["No", "Yes, it saves time", "Only half the meeting", "Only if the vendor agrees"], answer: 0, why: "Student meetings must not be recorded by unapproved tools." },
          { objective: "O6", q: "Who should be included when sharing AI team rules?", options: ["Only teachers", "Only vendors", "Only the principal", "Teachers, paraprofessionals and related-service providers"], answer: 3, why: "Everyone supporting students needs the rules." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: AI for Special Education",
    questions: [
      { objective: "O1", q: "IDEA guarantees eligible children with disabilities:", options: ["A free laptop", "A free appropriate public education", "Private school tuition", "AI tutoring"], answer: 1, why: "FAPE is IDEA's core guarantee." },
      { objective: "O1", q: "Part B of IDEA covers eligible children ages:", options: ["13 to 18 only", "Birth to 2 only", "3 through 21", "Adults only"], answer: 2, why: "Part B serves ages 3 through 21; Part C serves infants and toddlers." },
      { objective: "O1", q: "Who develops the IEP?", options: ["The principal alone", "An AI tool", "A team including parents and school staff", "A vendor"], answer: 2, why: "The IEP is a team decision." },
      { objective: "O1", q: "A Section 504 plan provides:", options: ["Accommodations for a student with a disability under another federal law", "A grade", "A field trip", "A tool license"], answer: 0, why: "504 is a separate path from IDEA." },
      { objective: "O2", q: "Which is a good AI task?", options: ["Choosing placement", "Writing IEP goals", "Deciding eligibility", "A plain-language version of a general reading"], answer: 3, why: "Adapting general materials is a safe use." },
      { objective: "O2", q: "Plain language means:", options: ["Fewer ideas", "Short sentences and common words, same ideas", "No vocabulary", "Lower expectations"], answer: 1, why: "Lower reading load, same learning goal." },
      { objective: "O2", q: "Chunking a task means:", options: ["Grading it", "Making it longer", "Removing it", "Breaking it into small numbered steps"], answer: 3, why: "Small steps make tasks manageable." },
      { objective: "O2", q: "After AI simplifies a text, check that:", options: ["It has more pictures", "It is longer", "No key facts were dropped or changed", "It sounds formal"], answer: 2, why: "Simplifying can introduce errors." },
      { objective: "O3", q: "A visual schedule shows:", options: ["What will happen, in order, with pictures and words", "Bus routes", "Report cards", "Staff salaries"], answer: 0, why: "It helps students know what comes next." },
      { objective: "O3", q: "Text-to-speech:", options: ["Writes essays", "Reads text aloud", "Grades work", "Translates speech"], answer: 1, why: "It supports students who benefit from hearing text." },
      { objective: "O3", q: "Practice with more support might include:", options: ["A worked example and a word bank", "Fewer ideas", "A harder test", "No instructions"], answer: 0, why: "Scaffolds help students reach the same skill." },
      { objective: "O3", q: "Required IEP accommodations:", options: ["Apply only on tests", "Can be replaced by AI materials", "Are optional", "Must be provided as written"], answer: 3, why: "They are legally required." },
      { objective: "O4", q: "Family explainers should be:", options: ["About one named student", "General, not about a specific child", "Written only in English", "Sent without checking"], answer: 1, why: "Keep student information out of AI." },
      { objective: "O4", q: "Translations for families should be:", options: ["Skipped", "Unchecked AI output", "Checked by qualified speakers", "Done by students"], answer: 2, why: "Families need accurate information." },
      { objective: "O5", q: "IEPs and evaluations are protected by:", options: ["No law", "Copyright only", "FERPA", "Traffic law"], answer: 2, why: "They are education records." },
      { objective: "O5", q: "Diagnoses and behavior plans in an unapproved AI tool are:", options: ["Never allowed", "Fine if short", "Fine on weekends", "Required"], answer: 0, why: "They are highly sensitive." },
      { objective: "O5", q: "With an approved AI tool for special education, staff should:", options: ["Skip checking", "Upload everything", "Share logins", "Use it only as the agreement allows, with minimum information"], answer: 3, why: "Agreements and minimization still apply." },
      { objective: "O1", q: "Least restrictive environment means students with disabilities learn:", options: ["Always alone", "With peers without disabilities as much as appropriate", "Only online", "Only at home"], answer: 1, why: "It is a core IDEA idea." },
      { objective: "O6", q: "Who has the final word on your district's special education rules?", options: ["A student", "A chatbot", "A vendor", "The special education director and counsel"], answer: 3, why: "Qualified people decide." },
      { objective: "O6", q: "A shared folder of good prompts and materials helps:", options: ["Share student data", "Hide materials", "The time saved reach the whole team", "Replace the IEP team"], answer: 2, why: "Sharing multiplies the benefit." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Pre-Test: What Do You Already Know?",
    from: [
      0,
      2,
      4,
      6,
      7,
      8,
      11,
      12,
      15,
      18
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      {
        name: "Plain-language reading and chunks",
        objective: "O2",
        notYet: "A fact was dropped or changed, or the task is not chunked.",
        meets: "A plain-language version and a numbered chunked checklist, checked against the original.",
        exceeds: "Notes which errors AI made and how they were fixed."
      },
      {
        name: "Visual schedule and practice",
        objective: "O3",
        notYet: "The schedule or a practice level is missing, or answers were not checked.",
        meets: "A visual schedule and practice at two levels, with every answer checked.",
        exceeds: "Every image has alt text, and supports like worked examples or word banks are included."
      },
      {
        name: "Family explanation",
        objective: "O4",
        notYet: "It is about a specific child, or was not checked against district materials.",
        meets: "A one-page plain-language explanation of a general step, checked for accuracy.",
        exceeds: "A colleague read it for tone, and it points families to the official procedural safeguards notice."
      },
      {
        name: "No student information",
        objective: "O5",
        notYet: "Any student information appears in the pack or prompts.",
        meets: "The whole pack uses only general or made-up material.",
        exceeds: "Includes safe ways to get AI help without sharing student details."
      },
      {
        name: "Team rules",
        objective: "O6",
        notYet: "Fewer than five rules, or rules that let AI decide IEP or 504 content.",
        meets: "Five clear rules for AI use in special education.",
        exceeds: "Each rule has an example and keeps every IEP and 504 decision with the team."
      }
    ]
  },
  evaluation: {
    results: [
      "Educators who finish the course and pass the final task (rubric)",
      "Teachers who report using AI-made accessible materials in a lesson within 30 days (follow-up survey)",
      "Special education teams that adopt written AI rules within 60 days (follow-up survey)",
      "Reported cases of student information entered into unapproved tools (aim: none)"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A computer with internet and a district-approved AI assistant",
      "A general reading and assignment from an upcoming lesson (no student information)",
      "Your district's official family materials and procedural safeguards notice",
      "About 60 minutes in total: lessons, practice, checks and the final task"
    ],
    facilitatorNotes: [
      "Take the pre-test together, then sort the \"AI may help\" and \"team only\" tasks as a group.",
      "Use only made-up or general materials; never paste IEPs, 504 plans, evaluations or behavior plans into unapproved tools.",
      "Remind participants that the course is not legal advice; invite the special education director to review the team rules.",
      "Have colleagues read each other's family explanations for tone and accuracy.",
      "Score the final task with the rubric, and check that no student information appears anywhere in the pack."
    ]
  }
};
