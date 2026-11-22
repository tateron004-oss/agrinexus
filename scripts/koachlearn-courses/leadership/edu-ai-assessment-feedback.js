"use strict";

// Koach Learn course: Leadership Development -> "AI for School and Educational Leaders 4: AI for Assessment and Feedback" (course 4 of 8).
// Shape copied from re-entry/reentry-ai-digital-confidence.js. FERPA facts checked on studentprivacy.ed.gov on 27 October 2026.

module.exports = {
  id: "edu-ai-assessment-feedback",
  category: "Leadership Development",
  name: "AI for School and Educational Leaders 4: AI for Assessment and Feedback",
  skills: "Writing aligned assessment questions with AI, Building rubrics, Designing quick formative checks, Drafting feedback the teacher owns, Protecting student work and grades, Handling AI-writing concerns fairly",
  outcome: "build an assessment pack with AI, aligned questions with a checked key, a four-level rubric with a student-friendly version, an exit ticket and a feedback comment bank, and use it with a feedback workflow that protects student privacy and keeps every grade in the teacher's hands.",
  about: [
    "This course is for teachers, instructional coaches, assessment leads and principals. Assessment and feedback take a large share of teacher time, and AI can help, but grades and judgments about students are high-stakes. This course shows where AI helps and where it must not decide.",
    "Chapter 1 uses AI to build assessments: aligned questions, rubrics, and quick formative checks. Chapter 2 is about feedback: a workflow where AI drafts and the teacher decides, how to protect student work under FERPA, and how to handle suspected AI use in student work fairly.",
    "Practice only with made-up student work or work with every identifying detail removed, and use only tools your district has approved for student work. A knowledge check closes each chapter and a 20-question quiz closes the course. This is course 4 of 8 in AI for School and Educational Leaders."
  ],
  finalTask: "Build an assessment pack for one objective: five aligned questions with a key you have checked, a four-level rubric with three or four criteria and a student-friendly version, a three-question exit ticket, and a feedback comment bank of at least eight comments tied to the rubric. Try the feedback workflow on three made-up student responses, change at least one AI draft comment, and write the grades yourself.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Teachers, instructional coaches, assessment leads and principals in US schools who write assessments, give feedback or support teachers who do.",
    startingPoint: "Can plan a lesson with AI and check it, and know the FERPA basics from earlier courses. Write assessments and feedback by hand, and may be unsure how to respond to suspected AI use by students.",
    gap: "Assessment and feedback take a large share of teacher time, and AI can help, but grades are high-stakes. Educators need to build aligned assessments with AI, use a workflow where AI drafts and the teacher decides, protect student work and handle suspected AI use fairly.",
    constraints: [
      "Practice only with made-up student work or work with every identifying detail removed",
      "Use only tools the district has approved for student work",
      "Teachers decide every grade; AI never scores students on its own",
      "AI-writing detector scores are never the only evidence of misuse",
      "Time: short lessons fitted around a teaching day"
    ],
    prerequisites: "\"AI for School and Educational Leaders 3: AI for Lesson Planning\"."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Given one objective", action: "generate aligned questions at three levels with AI and work every answer in the key", standard: "fixing or removing any item with an error or two possible answers" },
    { id: "O2", condition: "For a task you assign", action: "create a four-level rubric and a student-friendly version with AI", standard: "with every cell specific enough that two teachers would score the same work the same way" },
    { id: "O3", condition: "For one objective", action: "design a hinge question and a three-question exit ticket", standard: "deciding before the check what you will re-teach for each wrong answer" },
    { id: "O4", condition: "Given student responses and your rubric", action: "use AI to draft glow-and-grow comments, then edit them and write the grades yourself", standard: "with at least one AI comment changed and every grade decided by you" },
    { id: "O5", condition: "When AI tools touch student work or grades", action: "apply FERPA basics and explain to families how AI is used for feedback", standard: "using only approved tools with identifying details removed" },
    { id: "O6", condition: "When you suspect AI misuse in student work", action: "respond with a fair process and a clear AI-use rule for each task", standard: "never using a detector score as the only evidence" }
  ],
  chapters: [
    {
      name: "Chapter 1: Building assessments with AI",
      lessons: [
        {
          objectives: ["O1"],
          title: "Writing aligned questions and checking the key",
          minutes: 5,
          goal: "Generate assessment questions that match an objective and verify the answers.",
          text: [
            "Give AI the objective and success criteria (as in course 3), the grade, and the kind of questions you want: multiple choice, short answer, a problem to solve, or a task to explain thinking. Ask for questions at different levels of thinking: recall, apply, and explain or analyze.",
            "Ask for a key with a short reason for each answer, and for multiple choice, why each wrong option is tempting. Wrong options that reflect real misconceptions tell you more about student thinking.",
            "Then check every item yourself. AI keys contain errors, multiple-choice items can have two right answers, and wording can be confusing for English learners. Remove any item that does not measure the objective."
          ],
          steps: ["Give objective, success criteria, grade and question types.", "Ask for a mix: recall, apply, explain.", "Ask for a key with reasons, and why wrong options tempt.", "Work every answer and read every item for clarity.", "Remove items that do not measure the objective."],
          words: [["Aligned question", "a question that measures the objective it is meant to measure."], ["Distractor", "a wrong option in a multiple-choice question."], ["Key", "the list of correct answers."]],
          slides: [
            { title: "Tell the AI what to measure", bullets: ["Objective and success criteria", "Grade and question types", "Recall, apply, explain"] },
            { title: "Ask for a key with reasons", bullets: ["Why each answer is right", "Why each wrong option tempts", "Distractors that reveal misconceptions"] },
            { title: "Check every item", bullets: ["Keys contain errors", "Two right answers? Confusing wording?", "Cut items off the objective"] }
          ],
          tryIt: "Ask AI for six questions on one objective at three levels with a key. Work every answer yourself and count any errors or unclear items.",
          youCanNow: "write aligned assessment questions with AI and check the key.",
          quickCheck: [
            { objective: "O1", q: "What is a distractor in a multiple-choice question?", options: ["A wrong option in the list", "A question that is too hard", "A noise in the classroom", "The right answer"], answer: 0, why: "Good distractors reflect real misconceptions, which shows how students think." },
            { objective: "O1", q: "You work AI's answer key and one answer is wrong. What would you do?", options: ["Leave it; students will not notice", "Ask AI to regrade the class", "Fix the key and check the rest of the items closely", "Remove all the questions"], answer: 2, why: "Working every answer catches errors before students are scored." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Building a rubric students understand",
          minutes: 6,
          goal: "Create a four-level rubric and a student-friendly version with AI.",
          text: [
            "A rubric describes quality at each level for each criterion. Ask AI for an analytic rubric: three or four criteria from your success criteria, four levels (for example: beginning, developing, proficient, advanced), and a short description of what work looks like at each level.",
            "Good level descriptions describe what is present, not just \"more\" or \"less\": \"uses two pieces of evidence and explains how each supports the claim\" is better than \"good use of evidence\". Ask AI to rewrite vague cells.",
            "Then ask for a student-friendly version in \"I\" statements, and test both on a sample: does a piece of work clearly fit one level? Rubrics are only fair if two teachers would score the same work the same way."
          ],
          steps: ["Give the task and success criteria.", "Ask for 3-4 criteria and 4 levels.", "Rewrite vague cells into what is present in the work.", "Ask for a student-friendly \"I\" version.", "Test on a sample: would two teachers agree?"],
          words: [["Rubric", "a scoring guide that describes quality at different levels."], ["Criterion", "one quality being judged, like use of evidence."], ["Analytic rubric", "a rubric that scores each criterion separately."]],
          slides: [
            { title: "Analytic rubric", bullets: ["3-4 criteria from success criteria", "4 levels each", "Short description per cell"] },
            { title: "Describe what is present", bullets: ["Not \"good use of evidence\"", "But \"two pieces of evidence, each explained\""] },
            { title: "Make it fair and clear", bullets: ["Student-friendly \"I\" version", "Would two teachers agree?"] }
          ],
          tryIt: "Build a four-level rubric with AI for a task you assign. Rewrite any vague cell, make the student-friendly version, and test it on one made-up response.",
          youCanNow: "build a clear four-level rubric and a student-friendly version with AI.",
          quickCheck: [
            { objective: "O2", q: "What is an analytic rubric?", options: ["A rubric with one overall score", "A rubric that scores each criterion separately", "A rubric written by AI", "A checklist of materials"], answer: 1, why: "Analytic rubrics give separate levels for each criterion." },
            { objective: "O2", q: "A rubric cell says \"good use of evidence\". What would you change?", options: ["Nothing, it is clear", "Remove the cell", "Add the word \"very\"", "Say exactly what students do, such as \"uses two pieces of evidence and explains each\""], answer: 3, why: "Specific cells make scoring fair and help students know what to do." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Quick formative checks",
          minutes: 5,
          goal: "Design exit tickets and in-lesson checks that show who needs what next.",
          text: [
            "Formative assessment is checking learning during teaching so you can adjust. It is low-stakes and quick. AI is good at producing many short checks: three-question exit tickets, a single hinge question mid-lesson, quick whiteboard problems.",
            "A hinge question has answer choices designed so that each wrong answer shows a specific misconception. Ask AI: \"Write one multiple-choice hinge question for [objective]. Each wrong answer should reveal a different common misconception; explain which.\"",
            "Plan what you will do with the results before you give the check: who gets re-teaching, who moves on. A check you do not act on is just more paper."
          ],
          steps: ["Choose the moment: mid-lesson or end of lesson.", "Ask AI for a hinge question or a three-question exit ticket.", "Check that each wrong answer points to a real misconception.", "Decide in advance what you will do with each result.", "Act on it the next day."],
          words: [["Formative assessment", "low-stakes checks during learning, used to adjust teaching."], ["Exit ticket", "a short task students complete at the end of a lesson."], ["Hinge question", "a question whose wrong answers each reveal a specific misconception."]],
          slides: [
            { title: "Formative = check and adjust", bullets: ["Low-stakes and quick", "Exit tickets, hinge questions, whiteboards"] },
            { title: "Hinge questions", bullets: ["One question mid-lesson", "Each wrong answer = a misconception", "Ask AI to explain which"] },
            { title: "Plan the response", bullets: ["Who gets re-teaching?", "Who moves on?", "Unused checks are just paper"] }
          ],
          tryIt: "Ask AI for one hinge question and a three-question exit ticket for your objective. For each wrong hinge answer, write what you would re-teach.",
          youCanNow: "design quick formative checks and plan what to do with the results.",
          quickCheck: [
            { objective: "O3", q: "What is formative assessment?", options: ["The final exam", "A state test", "Low-stakes checking during learning to adjust teaching", "A grade for behavior"], answer: 2, why: "Formative checks tell you what to teach next." },
            { objective: "O3", q: "Half the class picks the same wrong hinge answer. What do you do?", options: ["Re-teach the misconception that answer reveals", "Move on to the next lesson", "Give everyone a lower grade", "Ask AI to grade the hinge question"], answer: 0, why: "Each wrong hinge answer points to a misconception you can re-teach." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Building assessments with AI",
        questions: [
          { objective: "O1", q: "Why ask AI to explain why each wrong option is tempting?", options: ["It makes the test longer", "To trick students unfairly", "Distractors that reflect misconceptions show how students think", "It is required"], answer: 2, why: "Good distractors reveal misconceptions." },
          { objective: "O1", q: "An AI multiple-choice item has two answers that could be right. You should:", options: ["Fix or remove it", "Keep it", "Accept either", "Give everyone full marks"], answer: 0, why: "Every item needs one clearly right answer." },
          { objective: "O2", q: "Which rubric cell is best written?", options: ["\"Good evidence\"", "\"More evidence\"", "\"Nice work\"", "\"Uses two pieces of evidence and explains how each supports the claim\""], answer: 3, why: "It describes what is present in the work." },
          { objective: "O3", q: "What is a hinge question?", options: ["A question about doors", "A question whose wrong answers each reveal a misconception", "A final exam question", "A homework question"], answer: 1, why: "It shows what to re-teach mid-lesson." },
          { objective: "O3", q: "When should you decide what to do with exit-ticket results?", options: ["Only if most students fail", "Never", "At the end of the year", "Before giving the check"], answer: 3, why: "Planning the response makes the check useful." }
        ]
      }
    },
    {
      name: "Chapter 2: Feedback the teacher owns",
      lessons: [
        {
          objectives: ["O4"],
          title: "A feedback workflow: AI drafts, the teacher decides",
          minutes: 6,
          goal: "Use AI to draft feedback tied to a rubric, then edit and own it.",
          text: [
            "Good feedback is specific, tied to the criteria, and tells the student what to do next. A comment bank helps: ask AI for two or three comments per rubric criterion and level, each with one strength (\"glow\") and one next step (\"grow\").",
            "Workflow: read the student's work yourself first and decide the rubric level. Then pick or draft comments, using AI to adjust wording if needed. If you use AI to draft comments on actual student work, do it only in a tool your district has approved for student work, and remove names and identifying details.",
            "You write the grade. AI scores can be inconsistent, can reward length over quality, and can be unfair to English learners and students with disabilities. Edit every comment so it sounds like you and fits the student; students notice generic feedback."
          ],
          steps: ["Build a comment bank by criterion and level: glow and grow.", "Read the work yourself and choose the rubric level.", "Pick or adjust comments; use only approved tools for real work.", "Remove names and identifying details.", "Write the grade yourself; edit every comment."],
          words: [["Comment bank", "a saved set of feedback comments you can reuse and adjust."], ["Glow and grow", "feedback with one strength and one next step."]],
          slides: [
            { title: "Good feedback", bullets: ["Specific and tied to criteria", "One strength, one next step"] },
            { title: "The workflow", bullets: ["You read the work and choose the level", "Pick or adjust comments", "Approved tools only for real work; no names"] },
            { title: "You write the grade", bullets: ["AI scores can be inconsistent", "Can reward length over quality", "Edit so it sounds like you"] }
          ],
          tryIt: "Build a comment bank of eight glow-and-grow comments for your rubric. Write three made-up student responses, score them yourself, and pick and edit comments for each.",
          youCanNow: "run a feedback workflow where AI helps draft and you decide.",
          quickCheck: [
            { objective: "O4", q: "What is a comment bank?", options: ["Feedback AI sends to students on its own", "Saved feedback comments you reuse and adjust", "A list of grades", "A bank account for school funds"], answer: 1, why: "A comment bank saves time while the teacher still chooses and edits each comment." },
            { objective: "O4", q: "AI drafts a comment that does not fit a student's work. What would you do?", options: ["Send it anyway", "Let AI change the grade", "Skip feedback for that student", "Edit the comment so it fits the work, and keep your own grade"], answer: 3, why: "AI drafts and the teacher decides, so you own every comment and grade." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Protecting student work and grades",
          minutes: 5,
          goal: "Apply FERPA basics to student work, grades and AI tools.",
          text: [
            "Student work and grades kept by the school are generally part of education records under FERPA. Disclosing personally identifiable information from them to an outside company usually needs consent, unless an exception applies; for example, a vendor can act as a school official when it performs a school service, is under the school's direct control, and follows limits on re-sharing. That is why district agreements matter.",
            "Practical rules for staff: use only district-approved tools for real student work; remove names and identifying details even then; never upload grade books, IEP or 504 documents, or discipline information to unapproved tools; and check the tool's terms on whether it keeps or trains on uploaded work.",
            "Tell families how AI is used in feedback. Parents have FERPA rights to inspect and review their child's education records, and openness builds trust. For your district's exact rules, ask your privacy officer."
          ],
          steps: ["Use only approved tools for real student work.", "Remove names and identifying details.", "Never upload grade books, IEP, 504 or discipline records to unapproved tools.", "Check whether the tool keeps or trains on uploads.", "Tell families how AI is used in feedback."],
          words: [["Education record", "a record directly related to a student and kept by the school."], ["School official exception", "a FERPA rule that lets certain vendors under the school's control access records for a school purpose."]],
          slides: [
            { title: "Work and grades are records", bullets: ["Generally education records under FERPA", "Sharing PII usually needs consent", "Unless an exception applies"] },
            { title: "Rules for staff", bullets: ["Approved tools only for real work", "Remove names anyway", "No grade books, IEPs or discipline files"] },
            { title: "Be open with families", bullets: ["Explain how AI helps with feedback", "Parents may inspect records", "Ask your privacy officer for details"] }
          ],
          sources: [{ name: "FERPA: Protecting Student Privacy (US Department of Education)", url: "https://studentprivacy.ed.gov/ferpa" }],
          tryIt: "Write a three-sentence note for families explaining how your class or school uses AI to help with feedback, what is protected, and that teachers decide all grades.",
          youCanNow: "protect student work and grades when AI is part of the feedback process.",
          quickCheck: [
            { objective: "O5", q: "Under FERPA, what is student work kept by the school generally part of?", options: ["Education records", "Public records anyone can see", "The teacher's private notes", "The vendor's property"], answer: 0, why: "Student work kept by the school is generally part of protected education records." },
            { objective: "O5", q: "A teacher wants AI help with feedback on real essays. What would you advise?", options: ["Paste the essays into any free chatbot", "Upload the grade book too, for context", "Use only a district-approved tool, with identifying details removed", "Ask students to paste their own essays into AI"], answer: 2, why: "Approved tools and removed identifiers protect student records." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Suspected AI use in student work: handling it fairly",
          minutes: 6,
          goal: "Respond to suspected AI use with clear rules and a fair process, not a detector score.",
          text: [
            "AI-writing detectors can be wrong. They can flag honest work, and research and educators have raised concerns that they flag English learners' writing more often. A detector score alone should never be the evidence for a cheating decision.",
            "Prevent first: tell students clearly which AI use is allowed on each task (for example: none, brainstorming only, or allowed with a note saying how). Design tasks where the thinking is visible: drafts, in-class writing, oral explanations, personal connections.",
            "If you suspect misuse, talk with the student: ask them to explain their work, show drafts or redo a part in class. Follow your school's academic-integrity policy, involve families as it requires, and treat it as a learning moment where you can."
          ],
          steps: ["State the allowed AI use for each task.", "Design tasks where thinking is visible.", "Never rely on a detector score alone.", "Talk with the student; ask them to explain or show drafts.", "Follow your academic-integrity policy."],
          words: [["Academic integrity", "honesty in schoolwork: doing your own work and saying when you had help."], ["False positive", "when a detector wrongly flags honest work."]],
          slides: [
            { title: "Detectors can be wrong", bullets: ["They can flag honest work", "Concerns about English learners", "Never the only evidence"] },
            { title: "Prevent first", bullets: ["Say the allowed AI use for each task", "Make thinking visible: drafts, talk, in-class work"] },
            { title: "If you suspect misuse", bullets: ["Talk with the student", "Ask them to explain or redo a part", "Follow your integrity policy"] }
          ],
          tryIt: "Final task: finish your assessment pack (five checked questions, rubric and student version, exit ticket, eight-comment bank), run the feedback workflow on three made-up responses with your own grades, and add a one-line AI-use rule for the task.",
          youCanNow: "use AI across assessment and feedback while keeping grades fair, private and in the teacher's hands.",
          quickCheck: [
            { objective: "O6", q: "What can AI-writing detectors do wrongly?", options: ["Nothing; they are always right", "Flag honest work as AI-written", "Grade essays", "Write essays"], answer: 1, why: "Detectors can wrongly flag honest work, so they are never the only evidence." },
            { objective: "O6", q: "You suspect a student used AI against the task's rule. What is a fair first step?", options: ["Give a zero right away", "Report it to the whole class", "Run three more detectors", "Ask the student to explain their work or show drafts"], answer: 3, why: "A conversation and other evidence are fairer than a detector score." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Feedback the teacher owns",
        questions: [
          { objective: "O4", q: "In the feedback workflow, what does the teacher do first?", options: ["Paste the work into any AI tool", "Let AI grade it", "Read the work and choose the rubric level", "Send it to parents"], answer: 2, why: "Teacher judgment comes first." },
          { objective: "O4", q: "Who writes the grade?", options: ["The teacher", "The AI", "The student", "The vendor"], answer: 0, why: "Grades are teacher decisions." },
          { objective: "O5", q: "Under FERPA, student work kept by the school is generally:", options: ["Public information", "Part of education records", "Owned by the AI company", "Not covered"], answer: 1, why: "Records directly related to a student and kept by the school are education records." },
          { objective: "O6", q: "A detector says an essay is 90% AI-written. What should you do?", options: ["Talk with the student and look at other evidence", "Give a zero", "Report the family", "Ignore all policies"], answer: 0, why: "Detector scores alone are not proof." },
          { objective: "O6", q: "Which best prevents AI misuse?", options: ["Saying nothing", "Banning computers forever", "Using more detectors", "Saying the allowed AI use for each task and making thinking visible"], answer: 3, why: "Clear rules and visible thinking prevent problems." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: AI for School and Educational Leaders 4: AI for Assessment and Feedback",
    questions: [
      { objective: "O1", q: "An aligned question:", options: ["Is the hardest one", "Measures the objective it is meant to measure", "Is the longest one", "Is chosen by AI alone"], answer: 1, why: "Alignment is the first test of a good item." },
      { objective: "O1", q: "A distractor is:", options: ["A phone", "A noisy student", "A wrong option in multiple choice", "A bonus question"], answer: 2, why: "Good distractors reveal misconceptions." },
      { objective: "O1", q: "After AI writes a key, you should:", options: ["Print it", "Trust it", "Work every answer yourself", "Give it to students"], answer: 2, why: "Keys contain errors." },
      { objective: "O1", q: "A mix of question levels means:", options: ["Recall, apply and explain", "Easy only", "Hard only", "True or false only"], answer: 0, why: "Different levels show different depths of learning." },
      { objective: "O2", q: "An analytic rubric:", options: ["Is written by students", "Gives one overall grade only", "Has no levels", "Scores each criterion separately"], answer: 3, why: "Each criterion gets its own level." },
      { objective: "O2", q: "A student-friendly rubric uses:", options: ["Legal language", "\"I\" statements", "Code", "Only numbers"], answer: 1, why: "Students should understand the goal." },
      { objective: "O2", q: "A rubric is fair when:", options: ["Everyone gets an A", "It is very long", "AI wrote it", "Two teachers would score the same work the same way"], answer: 3, why: "Consistency is fairness." },
      { objective: "O3", q: "Formative assessment is:", options: ["A report card", "The final exam", "Low-stakes checking during learning to adjust teaching", "A state test"], answer: 2, why: "It informs the next step." },
      { objective: "O3", q: "An exit ticket is given:", options: ["At the end of a lesson", "At the start of the year", "Only on Fridays", "Only to parents"], answer: 0, why: "It checks the day's learning." },
      { objective: "O3", q: "A check you never act on is:", options: ["The best kind", "Just more paper", "Required", "Summative"], answer: 1, why: "Formative checks matter when they change teaching." },
      { objective: "O4", q: "Glow and grow feedback gives:", options: ["One strength and one next step", "Only praise", "Only criticism", "A grade only"], answer: 0, why: "Students need both." },
      { objective: "O4", q: "A comment bank is:", options: ["A grading app", "A savings account", "A list of students", "Saved feedback comments you reuse and adjust"], answer: 3, why: "It saves time while keeping feedback specific." },
      { objective: "O4", q: "AI scores can be unfair because they may:", options: ["Always be perfect", "Reward length over quality", "Never read the work", "Use the rubric exactly"], answer: 1, why: "Length bias is a common problem." },
      { objective: "O5", q: "For real student work, use:", options: ["Social media", "Any free tool", "Only district-approved tools, with identifying details removed", "Personal email"], answer: 2, why: "Approved tools and removed details protect privacy." },
      { objective: "O5", q: "Which should never go into an unapproved AI tool?", options: ["A blank exit ticket", "A generic rubric", "A grade book", "A made-up response"], answer: 2, why: "Grade books hold identifying education records." },
      { objective: "O5", q: "Under FERPA, parents may:", options: ["Inspect and review their child's education records", "Grade the work", "Approve vendors", "Write the rubric"], answer: 0, why: "Inspection is a core FERPA right." },
      { objective: "O5", q: "A vendor can act as a school official when it:", options: ["Has many users", "Is free", "Asks nicely", "Performs a school service under the school's direct control, with limits on re-sharing"], answer: 3, why: "Those are the FERPA conditions." },
      { objective: "O6", q: "AI-writing detectors:", options: ["Are always correct", "Can wrongly flag honest work", "Are required by law", "Prove cheating"], answer: 1, why: "False positives happen." },
      { objective: "O6", q: "If you suspect AI misuse, a fair first step is:", options: ["Ignore your policy", "Give a zero", "Post about it", "Ask the student to explain their work or show drafts"], answer: 3, why: "Talking gathers real evidence." },
      { objective: "O6", q: "Each task should state:", options: ["That AI is always banned", "Nothing about AI", "What AI use is allowed", "The student's grade"], answer: 2, why: "Clear rules prevent misunderstandings." }
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
      10,
      12,
      13,
      17,
      18
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      {
        name: "Aligned questions",
        objective: "O1",
        notYet: "Fewer than five questions, or the key was not checked.",
        meets: "Five questions aligned to the objective with a key you worked yourself.",
        exceeds: "Questions mix recall, apply and explain, and distractors reflect real misconceptions."
      },
      {
        name: "Rubric",
        objective: "O2",
        notYet: "Fewer than four levels, vague cells, or no student version.",
        meets: "A four-level rubric with three or four criteria and a student-friendly version.",
        exceeds: "Every cell describes what students do, and it was tested on a made-up response."
      },
      {
        name: "Exit ticket",
        objective: "O3",
        notYet: "No exit ticket, or it does not match the objective.",
        meets: "A three-question exit ticket for the objective.",
        exceeds: "Says what you will do with each result before giving it."
      },
      {
        name: "Feedback workflow",
        objective: "O4",
        notYet: "Fewer than eight comments, AI comments used unchanged, or AI wrote the grades.",
        meets: "At least eight rubric-tied comments, three made-up responses, one AI comment changed and grades written by you.",
        exceeds: "Each response gets one glow and one grow tied to a rubric level."
      },
      {
        name: "Privacy and fair AI use",
        objective: "O6",
        notYet: "Real student details were used, or no AI-use rule for the task.",
        meets: "Only made-up work was used, and the task has a one-line AI-use rule.",
        exceeds: "Includes a short note for families on how AI helps with feedback and who decides grades."
      }
    ]
  },
  evaluation: {
    results: [
      "Educators who finish the course and pass the final task (rubric)",
      "Teachers who report using the assessment pack or comment bank with a class within 30 days (follow-up survey)",
      "Teachers who report feedback time saved while still writing every grade themselves (follow-up survey)",
      "Schools where every major task states its allowed AI use (follow-up survey)"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A computer with internet and an AI assistant approved by the district for this use",
      "One objective and a task you assign",
      "Three made-up student responses",
      "About 60 minutes in total: lessons, practice, checks and the final task"
    ],
    facilitatorNotes: [
      "Take the pre-test together, then have teachers work AI answer keys in pairs and compare errors found.",
      "Use only made-up student work; never paste real student work or grades into unapproved tools.",
      "Have two teachers score the same made-up response with each rubric to test fairness.",
      "Discuss a fair process for suspected AI use before any case comes up, and agree that detector scores are never the only evidence.",
      "Score the final task with the rubric, and check that every grade was written by the teacher."
    ]
  }
};
