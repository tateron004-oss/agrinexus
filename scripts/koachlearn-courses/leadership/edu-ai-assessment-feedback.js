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
  chapters: [
    {
      name: "Chapter 1: Building assessments with AI",
      lessons: [
        {
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
          youCanNow: "write aligned assessment questions with AI and check the key."
        },
        {
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
          youCanNow: "build a clear four-level rubric and a student-friendly version with AI."
        },
        {
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
          youCanNow: "design quick formative checks and plan what to do with the results."
        }
      ],
      check: {
        title: "Knowledge Check 1: Building assessments with AI",
        questions: [
          { q: "Why ask AI to explain why each wrong option is tempting?", options: ["It makes the test longer", "To trick students unfairly", "Distractors that reflect misconceptions show how students think", "It is required"], answer: 2, why: "Good distractors reveal misconceptions." },
          { q: "An AI multiple-choice item has two answers that could be right. You should:", options: ["Fix or remove it", "Keep it", "Accept either", "Give everyone full marks"], answer: 0, why: "Every item needs one clearly right answer." },
          { q: "Which rubric cell is best written?", options: ["\"Good evidence\"", "\"More evidence\"", "\"Nice work\"", "\"Uses two pieces of evidence and explains how each supports the claim\""], answer: 3, why: "It describes what is present in the work." },
          { q: "What is a hinge question?", options: ["A question about doors", "A question whose wrong answers each reveal a misconception", "A final exam question", "A homework question"], answer: 1, why: "It shows what to re-teach mid-lesson." },
          { q: "When should you decide what to do with exit-ticket results?", options: ["Only if most students fail", "Never", "At the end of the year", "Before giving the check"], answer: 3, why: "Planning the response makes the check useful." }
        ]
      }
    },
    {
      name: "Chapter 2: Feedback the teacher owns",
      lessons: [
        {
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
          youCanNow: "run a feedback workflow where AI helps draft and you decide."
        },
        {
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
          youCanNow: "protect student work and grades when AI is part of the feedback process."
        },
        {
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
          youCanNow: "use AI across assessment and feedback while keeping grades fair, private and in the teacher's hands."
        }
      ],
      check: {
        title: "Knowledge Check 2: Feedback the teacher owns",
        questions: [
          { q: "In the feedback workflow, what does the teacher do first?", options: ["Paste the work into any AI tool", "Let AI grade it", "Read the work and choose the rubric level", "Send it to parents"], answer: 2, why: "Teacher judgment comes first." },
          { q: "Who writes the grade?", options: ["The teacher", "The AI", "The student", "The vendor"], answer: 0, why: "Grades are teacher decisions." },
          { q: "Under FERPA, student work kept by the school is generally:", options: ["Public information", "Part of education records", "Owned by the AI company", "Not covered"], answer: 1, why: "Records directly related to a student and kept by the school are education records." },
          { q: "A detector says an essay is 90% AI-written. What should you do?", options: ["Talk with the student and look at other evidence", "Give a zero", "Report the family", "Ignore all policies"], answer: 0, why: "Detector scores alone are not proof." },
          { q: "Which best prevents AI misuse?", options: ["Saying nothing", "Banning computers forever", "Using more detectors", "Saying the allowed AI use for each task and making thinking visible"], answer: 3, why: "Clear rules and visible thinking prevent problems." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: AI for School and Educational Leaders 4: AI for Assessment and Feedback",
    questions: [
      { q: "An aligned question:", options: ["Is the hardest one", "Measures the objective it is meant to measure", "Is the longest one", "Is chosen by AI alone"], answer: 1, why: "Alignment is the first test of a good item." },
      { q: "A distractor is:", options: ["A phone", "A noisy student", "A wrong option in multiple choice", "A bonus question"], answer: 2, why: "Good distractors reveal misconceptions." },
      { q: "After AI writes a key, you should:", options: ["Print it", "Trust it", "Work every answer yourself", "Give it to students"], answer: 2, why: "Keys contain errors." },
      { q: "A mix of question levels means:", options: ["Recall, apply and explain", "Easy only", "Hard only", "True or false only"], answer: 0, why: "Different levels show different depths of learning." },
      { q: "An analytic rubric:", options: ["Is written by students", "Gives one overall grade only", "Has no levels", "Scores each criterion separately"], answer: 3, why: "Each criterion gets its own level." },
      { q: "A student-friendly rubric uses:", options: ["Legal language", "\"I\" statements", "Code", "Only numbers"], answer: 1, why: "Students should understand the goal." },
      { q: "A rubric is fair when:", options: ["Everyone gets an A", "It is very long", "AI wrote it", "Two teachers would score the same work the same way"], answer: 3, why: "Consistency is fairness." },
      { q: "Formative assessment is:", options: ["A report card", "The final exam", "Low-stakes checking during learning to adjust teaching", "A state test"], answer: 2, why: "It informs the next step." },
      { q: "An exit ticket is given:", options: ["At the end of a lesson", "At the start of the year", "Only on Fridays", "Only to parents"], answer: 0, why: "It checks the day's learning." },
      { q: "A check you never act on is:", options: ["The best kind", "Just more paper", "Required", "Summative"], answer: 1, why: "Formative checks matter when they change teaching." },
      { q: "Glow and grow feedback gives:", options: ["One strength and one next step", "Only praise", "Only criticism", "A grade only"], answer: 0, why: "Students need both." },
      { q: "A comment bank is:", options: ["A grading app", "A savings account", "A list of students", "Saved feedback comments you reuse and adjust"], answer: 3, why: "It saves time while keeping feedback specific." },
      { q: "AI scores can be unfair because they may:", options: ["Always be perfect", "Reward length over quality", "Never read the work", "Use the rubric exactly"], answer: 1, why: "Length bias is a common problem." },
      { q: "For real student work, use:", options: ["Social media", "Any free tool", "Only district-approved tools, with identifying details removed", "Personal email"], answer: 2, why: "Approved tools and removed details protect privacy." },
      { q: "Which should never go into an unapproved AI tool?", options: ["A blank exit ticket", "A generic rubric", "A grade book", "A made-up response"], answer: 2, why: "Grade books hold identifying education records." },
      { q: "Under FERPA, parents may:", options: ["Inspect and review their child's education records", "Grade the work", "Approve vendors", "Write the rubric"], answer: 0, why: "Inspection is a core FERPA right." },
      { q: "A vendor can act as a school official when it:", options: ["Has many users", "Is free", "Asks nicely", "Performs a school service under the school's direct control, with limits on re-sharing"], answer: 3, why: "Those are the FERPA conditions." },
      { q: "AI-writing detectors:", options: ["Are always correct", "Can wrongly flag honest work", "Are required by law", "Prove cheating"], answer: 1, why: "False positives happen." },
      { q: "If you suspect AI misuse, a fair first step is:", options: ["Ignore your policy", "Give a zero", "Post about it", "Ask the student to explain their work or show drafts"], answer: 3, why: "Talking gathers real evidence." },
      { q: "Each task should state:", options: ["That AI is always banned", "Nothing about AI", "What AI use is allowed", "The student's grade"], answer: 2, why: "Clear rules prevent misunderstandings." }
    ]
  }
};
