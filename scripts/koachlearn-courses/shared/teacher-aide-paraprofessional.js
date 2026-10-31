"use strict";

// Koach Learn course: Workforce Development -> "Teacher's Aide and Paraprofessional Preparation" (wave 3, 30 October 2026).
// Prepares learners for a paraprofessional (teacher's aide) job in a US public school and for the ParaPro Assessment from ETS,
// where their state or district uses it. ADDIE parts as in re-entry/reentry-ai-digital-confidence.js.
// Facts checked 30 October 2026: parapro.ets.org (what the test measures; qualifying scores set by state, some by district;
// Rhode Island moved to ParaPathways), 34 CFR 200.58 via law.cornell.edu (Title I paraprofessional qualifications),
// studentprivacy.ed.gov (FERPA), childwelfare.gov and childhelphotline.org (reporting; Childhelp is not a reporting line).

module.exports = {
  id: "teacher-aide-paraprofessional",
  category: "Workforce Development",
  name: "Teacher's Aide and Paraprofessional Preparation",
  skills: "Checking your state's paraprofessional requirements, Preparing for the ParaPro Assessment, Leading a small-group activity, Supporting student behavior and privacy, Keeping children safe and reporting concerns",
  outcome: "find out exactly what your state and school district ask of a paraprofessional, prepare for the reading, writing and math test many schools use, lead a small-group activity from a teacher's plan, and keep students safe and their information private.",
  about: [
    "Teacher's aides, also called paraprofessionals or paraeducators, work beside teachers to help students learn. Schools hire them for general classrooms, special education, early grades and English learners. It is a good first job in education, and many aides later become teachers.",
    "This course prepares you for the job and for the hiring steps. You will check your own state's rules, practice the kinds of reading, writing and math questions on the ParaPro Assessment from ETS, and learn the daily work: leading small groups, supporting behavior, keeping student records private and reporting when a child may be in danger.",
    "This course prepares you; it does not give you a certificate or a license. Your state and school district decide who can be hired, and they set the test and the passing score. Each lesson shows you where to check.",
    "Each lesson takes about five minutes. Read it, look at the slides, do the \"Try it now\" task, and answer two quick questions. There is a knowledge check after each chapter and a 20-question quiz at the end."
  ],
  finalTask: "Make your Paraprofessional Readiness Plan on one or two pages: (1) your state's and one district's requirements, with the official pages you checked; (2) the route you will use (college credits, a degree, or a test such as the ParaPro) and a study plan with dates; (3) a 10-minute small-group activity written from a sample teacher's plan, with the hints you will give and a note back to the teacher; and (4) the steps you would take and who you would call if you thought a child was being harmed.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Adults and young adults who want to work in schools: parents, school volunteers, bus drivers and cafeteria staff who want a classroom job, career changers, people coming home from prison (where state rules allow), and people from underserved communities who want to serve their own neighborhood schools.",
    startingPoint: "Most have a high school diploma or GED and like working with children. Many have not studied math or grammar for years, do not know the hiring rules, and have never seen how a classroom is run from the adult side.",
    gap: "Schools need aides who meet the state's rules, can pass the required test, follow a teacher's plan, handle behavior calmly and protect children. Learners need to know the rules for their own state, refresh their reading, writing and math, and learn the daily duties, so they can apply with confidence and keep the job.",
    constraints: [
      "Reading level: plain words and short sentences, with every school term explained",
      "Rules differ by state and by district; the course teaches how to check, not one national rule",
      "Devices: a phone or library computer; practice works on paper",
      "Child safety and student privacy: no real student names or details in any practice",
      "Background checks: most schools require them; the course says so and does not promise anyone a job"
    ],
    prerequisites: "A high school diploma or equivalent is expected for this job. Learners who need it can take the GED courses first. \"Everyday Math\" helps anyone who wants more math practice."
  },
  // ---- ADDIE: Design ----
  objectives: [
    { id: "O1", condition: "Given your state and a school district you want to work for", action: "list the qualifications they ask of a paraprofessional and the official pages that state them", standard: "naming the education route, any test and passing score, and the background check" },
    { id: "O2", condition: "Given practice reading, writing and math questions like those on the ParaPro Assessment", action: "answer the questions and explain each mistake", standard: "getting at least 8 of 10 right" },
    { id: "O3", condition: "Given a teacher's lesson plan for a small group", action: "lead a short practice activity that follows the plan and gives hints before answers", standard: "staying on the teacher's goal and writing a two-line note back to the teacher" },
    { id: "O4", condition: "Given a classroom behavior or privacy scenario", action: "choose calm, positive steps and share student information only with staff who need it", standard: "following the teacher's and the student's plan" },
    { id: "O5", condition: "Given a scenario where a child may be harmed or in danger", action: "describe the steps you take, who you tell and when", standard: "reporting the same day the way your state and school require, without investigating yourself" }
  ],
  chapters: [
    {
      name: "Chapter 1: Getting qualified",
      lessons: [
        {
          title: "The job, and the rules in your state",
          objectives: ["O1"],
          minutes: 6,
          goal: "List the qualifications your state and one school district ask of a paraprofessional.",
          text: [
            "A paraprofessional works under a teacher. You might help a small group read, help a student with a disability follow the lesson, watch the lunchroom or playground, or prepare materials. The teacher plans and grades; you support. Job titles include teacher's aide, instructional assistant, paraeducator and special education aide.",
            "Federal rules cover aides who help with teaching in schools paid for by Title I, the federal program for schools with many low-income families. Those aides need a high school diploma or equivalent, and one of these: two years of college study, an associate degree or higher, or passing a formal state or local test of reading, writing and math. Many schools use the ParaPro Assessment from ETS as that test.",
            "Each state, and sometimes each district, sets its own rules on top of that. ETS lists a qualifying ParaPro score for each state that uses it; in some states each district sets its own score, and some states use other tests (Rhode Island now accepts only ParaPathways). Almost every school also requires a background check and fingerprints. So always check your own state and district before you pay for a test.",
            "Where to check: your state department of education website, the job posting on the district's website, and the state requirements page on parapro.ets.org."
          ],
          steps: ["Search your state's department of education site for \"paraprofessional\" or \"paraeducator\".", "Open a real job posting from a district near you and read the requirements.", "Check parapro.ets.org for your state's test and qualifying score.", "Write down the route you already meet or will use: college credits, a degree, or the test.", "Note the background check and any other steps (health screening, training)."],
          words: [["Paraprofessional", "a school worker who helps students learn under a teacher's direction; also called a teacher's aide or paraeducator."], ["Title I", "a federal program that gives extra money to schools with many students from low-income families."], ["ParaPro Assessment", "a test from ETS of reading, writing and math skills, and of using them to help in a classroom."], ["Qualifying score", "the lowest score your state or district accepts."], ["Background check", "a check of criminal and other records that schools do before hiring."]],
          slides: [
            { title: "What a paraprofessional does", bullets: ["Works under a teacher's direction", "Helps small groups and single students", "Supports students with disabilities and English learners", "Prepares materials and helps supervise"] },
            { title: "Federal rule for Title I instructional aides", bullets: ["High school diploma or equivalent", "PLUS two years of college, an associate degree, or a passed state or local test"] },
            { title: "Your state and district add their own rules", bullets: ["Some use the ParaPro; some use other tests", "Qualifying scores differ by state, sometimes by district", "Background check and fingerprints are common"] },
            { title: "Where to check", bullets: ["Your state department of education", "The district's job posting", "parapro.ets.org: state requirements page"] }
          ],
          sources: [
            { name: "34 CFR 200.58: qualifications for Title I paraprofessionals (Cornell LII)", url: "https://www.law.cornell.edu/cfr/text/34/200.58" },
            { name: "ETS ParaPro: state requirements and qualifying scores", url: "https://parapro.ets.org/state-requirements.html" },
            { name: "ETS ParaPro: about the test", url: "https://parapro.ets.org/test-takers/about-the-test.html" }
          ],
          tryIt: "Find one real paraprofessional job posting from a school district near you. Write down: the job title, the education or test it asks for, the background check, and the pay if it is listed. Then find your state on the ETS state requirements page and write down whether it uses the ParaPro.",
          youCanNow: "list what your state and a nearby district ask of a paraprofessional, and show where you checked.",
          quickCheck: [
            { objective: "O1", q: "Which route meets the federal rule for a Title I instructional aide, along with a high school diploma?", options: ["Five years of babysitting", "A driver's license", "An associate degree", "A letter from a parent"], answer: 2, why: "The rule lists two years of college, an associate degree or higher, or a formal state or local test." },
            { objective: "O1", q: "A friend says the ParaPro passing score is the same everywhere. What do you do?", options: ["Check your state, and your district, on the official pages", "Believe it and book the test", "Skip the test and apply anyway", "Ask the friend to take it for you"], answer: 0, why: "Qualifying scores are set by each state, and in some states by each district." }
          ]
        },
        {
          title: "ParaPro practice: reading and writing",
          objectives: ["O2"],
          minutes: 5,
          goal: "Answer practice reading and writing questions and explain each mistake.",
          text: [
            "ETS says the ParaPro measures reading, writing and math skills and knowledge, and your ability to use them when helping in a classroom. So some questions ask you to read or write well, and some ask how you would help a student with reading or writing.",
            "Reading questions may ask for the main idea of a passage, a detail, what a word means from the words around it, or what the writer suggests without saying it. Read the question first, then the passage, then go back to find the proof.",
            "Writing questions may ask you to find a mistake in grammar, spelling or punctuation, or to choose the best way to fix a sentence. Classroom questions may ask how to help a student sound out a word or fix a run-on sentence.",
            "ETS offers a free Study Companion and Study Guide with sample questions on its test prep page. Use them; they show the real kind of questions better than any other source."
          ],
          steps: ["Read the question before the passage.", "Find the line in the passage that proves your answer.", "For writing items, read the sentence out loud in your head and listen for what sounds wrong.", "Cross out answers you know are wrong, then choose.", "For every mistake, write one line: why the right answer is right."],
          words: [["Main idea", "what a passage is mostly about."], ["Context clues", "the words around a new word that help you guess its meaning."], ["Run-on sentence", "two sentences joined without the right punctuation or joining word."], ["Phonics", "matching letters to their sounds to read words."]],
          slides: [
            { title: "What the ParaPro measures", bullets: ["Reading, writing and math", "Using those skills to help students in class"] },
            { title: "Reading questions", bullets: ["Main idea and details", "Word meaning from context clues", "What the writer suggests", "Find the proof in the passage"] },
            { title: "Writing questions", bullets: ["Find the grammar, spelling or punctuation error", "Choose the best fix for a sentence", "How to help a student fix their writing"] },
            { title: "Study smart", bullets: ["Use the free ETS Study Companion and Study Guide", "Write why for every mistake"] }
          ],
          sources: [
            { name: "ETS ParaPro: test prep (Study Companion and Study Guide)", url: "https://parapro.ets.org/parapro-test-prep.html" },
            { name: "ETS ParaPro: about the test", url: "https://parapro.ets.org/test-takers/about-the-test.html" }
          ],
          tryIt: "Practice now. 1) Fix this sentence: \"The students was excited, they ran to the window.\" 2) In \"The path was so narrow that two people could not walk side by side,\" what does narrow mean? 3) Write one sentence on how you would help a child who reads \"ship\" as \"sip\". Check: \"The students were excited, so they ran to the window\" (or use a period); narrow means not wide; point to the \"sh\" and practice its sound together.",
          youCanNow: "answer practice reading and writing questions, find the proof, and explain your mistakes.",
          quickCheck: [
            { objective: "O2", q: "Which sentence is written correctly?", options: ["Her and me helped the class.", "The children was ready.", "Each of the boys have a book.", "The teacher and I set up the tables."], answer: 3, why: "\"The teacher and I\" is the subject, and \"set up\" fits it; the others have subject or verb errors." },
            { objective: "O2", q: "A passage says, \"The garden was barren; nothing grew there.\" What does barren mean?", options: ["Full of flowers", "Producing nothing", "Very wet", "Newly planted"], answer: 1, why: "The clue \"nothing grew there\" tells you barren means producing nothing." }
          ]
        },
        {
          title: "ParaPro practice: math, and your study plan",
          objectives: ["O2", "O1"],
          minutes: 6,
          goal: "Answer practice math questions and write a study plan with a test date.",
          text: [
            "Math on the ParaPro covers the basics you would help students with: number sense, adding, subtracting, multiplying and dividing, fractions, decimals and percents, simple measurement, reading charts and graphs, and simple equations. Some questions ask how you would explain a math idea to a child.",
            "Work slowly and show your steps on scrap paper. For word problems: find the question, pull out the numbers, decide the operation, solve, then ask \"Does this answer make sense?\"",
            "A study plan turns \"someday\" into a date. Find out how to register (at a test center or at home, where offered), check the fee and ID rules on the official site, pick a test date three to six weeks away, and give each week one focus: reading, writing, math, then a full practice set."
          ],
          steps: ["Read the word problem twice and circle the question.", "Write the numbers you need.", "Choose the operation and solve on paper.", "Check that the answer makes sense.", "Put a test date and weekly study focus on a calendar."],
          words: [["Fraction", "a part of a whole, like 3/4."], ["Percent", "a number out of 100; 25% means 25 out of 100."], ["Equation", "a math sentence with an equals sign, like 3 + x = 10."]],
          slides: [
            { title: "Math on the ParaPro", bullets: ["Number sense and the four operations", "Fractions, decimals and percents", "Measurement, charts and simple equations", "How to explain math to a child"] },
            { title: "Solving word problems", bullets: ["Circle the question", "Pull out the numbers", "Choose the operation and solve", "Does the answer make sense?"] },
            { title: "Your study plan", bullets: ["Check registration, fee and ID rules on the official site", "Pick a date 3 to 6 weeks away", "One focus per week, then a full practice set"] }
          ],
          sources: [
            { name: "ETS ParaPro: how to register", url: "https://parapro.ets.org/how-to-register.html" },
            { name: "ETS ParaPro: ID requirements", url: "https://parapro.ets.org/test-takers/register-requirements.html" }
          ],
          tryIt: "Practice now. 1) 24 students share 6 tables equally. How many per table? 2) What is 3/4 written as a percent? 3) 3 + x = 10; what is x? 4) A class reads 12 pages on Monday and 15 on Tuesday. How many pages in all? Answers: 4, 75%, 7, 27. Then write your study plan: test date, and one focus for each week.",
          youCanNow: "solve basic word problems step by step and set a study plan with a real test date.",
          quickCheck: [
            { objective: "O2", q: "Shirts cost $8 each. A teacher buys 5. What is the total?", options: ["$13", "$35", "$40", "$45"], answer: 2, why: "5 x $8 = $40." },
            { objective: "O1", q: "What should you do BEFORE paying for the ParaPro?", options: ["Check that your state or district accepts it and what score it needs", "Buy a new calculator", "Quit your current job", "Ask a student to quiz you"], answer: 0, why: "ETS advises confirming your state or local agency accepts the test before you schedule." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Getting qualified",
        questions: [
          { objective: "O1", q: "Who decides the qualifying ParaPro score you need?", options: ["Your state, and in some states your district", "The teacher you work with", "Each student's parents", "Any website that sells test prep"], answer: 0, why: "ETS lists qualifying scores by state; in some states, districts set their own." },
          { objective: "O1", q: "Which is the best place to check a district's requirements?", options: ["A social media post", "The district's own job posting or website", "A friend who worked there years ago", "A test prep ad"], answer: 1, why: "The district's own posting is the official and current source." },
          { objective: "O2", q: "Which sentence fixes the run-on \"I finished my work I went to recess\"?", options: ["I finished my work I, went to recess.", "I finished, my work I went to recess.", "I finished my work, then I went to recess.", "I finished my work, so I went to recess."], answer: 3, why: "A comma plus the joining word \"so\" correctly joins two complete sentences." },
          { objective: "O2", q: "What is 20% of 50?", options: ["5", "25", "10", "70"], answer: 2, why: "20% is 0.2, and 0.2 x 50 = 10." },
          { objective: "O2", q: "In a reading question, where should you look for proof of your answer?", options: ["In the passage itself", "In your own opinion", "In the longest answer choice", "In the title of the test"], answer: 0, why: "The right answer is backed by words in the passage." }
        ]
      }
    },
    {
      name: "Chapter 2: Working in the classroom",
      lessons: [
        {
          title: "Leading a small group from the teacher's plan",
          objectives: ["O3"],
          minutes: 5,
          goal: "Lead a short small-group practice activity that follows a teacher's plan.",
          text: [
            "The teacher decides what students learn; you help them practice it. Before the group starts, ask the teacher: What is the goal? What should students be able to do at the end? What help is OK to give?",
            "Give hints before answers. A good order is: wait a few seconds, ask a question that points the way (\"What sound does this start with?\"), show a similar example, and only then show the answer. This is called scaffolding: you give support, then take it away bit by bit.",
            "Praise effort with exact words (\"You checked your work, that is how you caught it\"). Keep the group on task with short, clear directions. At the end, write a short note for the teacher: who got it, who struggled and with what."
          ],
          steps: ["Ask the teacher for the goal and what help is allowed.", "Get materials ready before students arrive.", "Explain the task in one or two short sentences.", "Give hints before answers: wait, ask, show an example, then show.", "Write a two-line note for the teacher at the end."],
          words: [["Lesson plan", "the teacher's written plan for what students will learn and how."], ["Scaffolding", "help that lets a student do a task, then is taken away step by step."], ["Wait time", "a few seconds of silence after a question so students can think."]],
          slides: [
            { title: "The teacher leads; you support", bullets: ["Ask: what is the goal?", "Ask: what help is OK to give?"] },
            { title: "Hints before answers", bullets: ["Wait a few seconds", "Ask a question that points the way", "Show a similar example", "Only then show the answer"] },
            { title: "Keep the group moving", bullets: ["Short, clear directions", "Praise effort with exact words", "Two-line note to the teacher at the end"] }
          ],
          tryIt: "Here is a sample teacher's plan: \"Goal: students add two-digit numbers with regrouping. Group: 4 students, 10 minutes.\" Write your activity: how you explain it in two sentences, three practice problems, two hints you will give before showing an answer, and a two-line note to the teacher. Use made-up first initials, never real student names.",
          youCanNow: "turn a teacher's plan into a short small-group activity with hints and a note back.",
          quickCheck: [
            { objective: "O3", q: "A student is stuck on a word. What is your FIRST move?", options: ["Say the word for them right away", "Wait, then ask what sound it starts with", "Move to the next student", "Tell them to guess"], answer: 1, why: "Wait time and a pointing question let the student do the thinking first." },
            { objective: "O3", q: "Who decides what the small group should learn?", options: ["The aide", "The students", "The teacher", "The parents"], answer: 2, why: "The teacher plans the lesson; the aide helps students practice it." }
          ]
        },
        {
          title: "Behavior support, special education and privacy",
          objectives: ["O4"],
          minutes: 6,
          goal: "Choose calm, positive steps for a behavior and share student information only with staff who need it.",
          text: [
            "Behavior is a way students communicate. Stay calm and use a low, steady voice. Remind students of the rule in a positive way (\"Walking feet\" instead of \"Don't run\"). Notice and praise students who are doing the right thing. Give choices when you can (\"Do you want to start with the red or blue page?\"). Follow the teacher's classroom plan, and get the teacher or school staff right away if anyone may get hurt.",
            "Many aides work with students who have an IEP, an Individualized Education Program under the federal special education law (IDEA). The IEP or a behavior plan may say exactly what supports a student gets, like extra time, a quiet break or a picture schedule. Ask the teacher what parts of the plan you carry out, and follow them every time.",
            "Student information is private. FERPA is a federal law that gives parents the right to see their child's education records and some control over who else sees them. As an aide, you share grades, behavior, health or IEP details only with school staff who need them for their work. Never talk about students in the community, post about them online or take photos of them on your phone."
          ],
          steps: ["Stay calm and use a low voice.", "State the rule as what to do, not what not to do.", "Praise students who are following it.", "Follow the teacher's plan and the student's IEP or behavior plan.", "Get help right away if anyone may get hurt.", "Share student details only with staff who need them."],
          words: [["IEP", "Individualized Education Program: a written plan for a student with a disability, under the federal law IDEA."], ["IDEA", "Individuals with Disabilities Education Act, the federal special education law."], ["FERPA", "a federal law that protects the privacy of student education records."], ["Positive behavior support", "teaching and praising the behavior you want, not only reacting to problems."]],
          slides: [
            { title: "Calm, positive behavior support", bullets: ["Low, steady voice", "Say what TO do: \"Walking feet\"", "Praise students doing it right", "Offer choices when you can"] },
            { title: "Students with an IEP", bullets: ["IEP: a written plan under IDEA", "Ask which parts you carry out", "Follow it every time"] },
            { title: "Keep student information private", bullets: ["FERPA protects education records", "Share only with staff who need it", "No talk in the community, no posts, no photos"] }
          ],
          sources: [
            { name: "US Department of Education: What is FERPA?", url: "https://studentprivacy.ed.gov/faq/what-ferpa" },
            { name: "US Department of Education: IDEA", url: "https://sites.ed.gov/idea/" }
          ],
          tryIt: "Scenario: during reading, a student (call him J.) throws his book and says \"This is stupid.\" His behavior plan says he may take a two-minute break at the calm corner. Write what you say and do, in order. Then write who you would tell about it later, and who you would NOT tell.",
          youCanNow: "respond to behavior calmly and positively, follow a student's plan, and keep student information private.",
          quickCheck: [
            { objective: "O4", q: "Which direction is stated in a positive way?", options: ["\"Stop yelling!\"", "\"Don't touch that.\"", "\"Quit running.\"", "\"Use a quiet voice, please.\""], answer: 3, why: "It tells the student what to do instead of only what not to do." },
            { objective: "O4", q: "A neighbor at the store asks how a student in your class is doing. You:", options: ["Share a few details since it is a neighbor", "Politely say you can't talk about students", "Show them the student's work on your phone", "Describe the student's IEP"], answer: 1, why: "Student information is private and shared only with school staff who need it." }
          ]
        },
        {
          title: "Keeping children safe and reporting concerns",
          objectives: ["O5", "O1"],
          minutes: 6,
          goal: "Describe the steps you take when you think a child may be harmed, and who you tell.",
          text: [
            "Every adult in a school helps keep children safe. If a child is in danger right now, call 911 (or your local emergency number) and get help at once.",
            "State laws name the people who must report suspected child abuse or neglect, called mandated reporters. In many states school staff, including aides, are on that list. Your duty is to report what you saw or heard, not to prove it. Learn your state's law and your school's policy in your training: who you report to (often the state's child abuse reporting line or child protective services) and how fast. In some states, telling a teacher or principal does not take the place of your own report.",
            "If a child tells you something: stay calm, listen, and thank them for telling you. Do not ask leading questions or investigate. Do not promise to keep it secret; say you will get help from people whose job is to keep kids safe. Write down the child's exact words, the date and time, and report the same day. Keep it private from everyone who does not need to know.",
            "Childhelp's National Child Abuse Hotline, 1-800-422-4453, gives counseling and help any time; it is not itself a reporting line, but it can help you find where to report in your state."
          ],
          steps: ["If the child is in danger now, call 911.", "Listen calmly; do not investigate or ask leading questions.", "Do not promise to keep it secret.", "Write down the child's exact words, the date and the time.", "Report the same day the way your state law and school policy say.", "Keep it private from everyone who does not need to know."],
          words: [["Mandated reporter", "a person the law requires to report suspected child abuse or neglect."], ["Neglect", "when a child's basic needs, like food, shelter, care or supervision, are not met."], ["Child protective services (CPS)", "the state or county agency that looks into reports of child abuse and neglect."], ["Leading question", "a question that suggests the answer, like \"Did your dad hit you?\""]],
          slides: [
            { title: "Danger right now?", bullets: ["Call 911 or your local emergency number", "Get help at once"] },
            { title: "Mandated reporters", bullets: ["State laws name who must report", "In many states this includes school staff", "Report what you saw or heard; you don't prove it"] },
            { title: "If a child tells you", bullets: ["Stay calm, listen, thank them", "No leading questions, no investigating", "Don't promise secrecy", "Write their exact words, date and time"] },
            { title: "Report the same day", bullets: ["Follow your state law and school policy", "Often the state reporting line or CPS", "Keep it private"] }
          ],
          sources: [
            { name: "Child Welfare Information Gateway: mandatory reporting of child abuse and neglect", url: "https://www.childwelfare.gov/resources/mandatory-reporting-child-abuse-and-neglect/" },
            { name: "Child Welfare Information Gateway: how to report child abuse and neglect", url: "https://www.childwelfare.gov/how-report-child-abuse-and-neglect/" },
            { name: "Child Welfare Information Gateway: state statutes search", url: "https://www.childwelfare.gov/resources/states-territories-tribes/state-statutes/" },
            { name: "Childhelp National Child Abuse Hotline", url: "https://www.childhelphotline.org/" }
          ],
          tryIt: "Final task: write your Paraprofessional Readiness Plan. Put in your state and district requirements with links, your route and study dates, your small-group activity from Lesson 4, and the safety steps from this lesson with your state's child abuse reporting number (look it up on the Child Welfare Information Gateway \"how to report\" page).",
          youCanNow: "say what to do when a child may be harmed, who you report to and when, and put your whole path to a paraprofessional job on paper.",
          quickCheck: [
            { objective: "O5", q: "A child tells you an adult at home hurts them and asks you not to tell. What do you say?", options: ["\"I promise I won't tell anyone.\"", "\"Are you sure? That doesn't sound true.\"", "\"Thank you for telling me. I need to tell people whose job is to keep you safe.\"", "\"Tell me every detail so I can decide.\""], answer: 2, why: "You never promise secrecy, and you don't question or judge; you get help from the right people." },
            { objective: "O5", q: "When should a mandated reporter report a concern?", options: ["Only after finding proof", "After talking to the family first", "At the end of the school year", "The same day, the way state law and school policy say"], answer: 3, why: "You report what you saw or heard, quickly; proving it is CPS's or the police's job." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Working in the classroom",
        questions: [
          { objective: "O3", q: "What is scaffolding?", options: ["Help that lets a student do a task, then is taken away bit by bit", "Doing the work for the student", "A punishment for wrong answers", "Building materials for the classroom"], answer: 0, why: "Scaffolding gives support and slowly removes it as the student learns." },
          { objective: "O3", q: "Your group finishes. What do you give the teacher?", options: ["Nothing; the teacher will guess", "A short note: who got it and who struggled with what", "Every student's home phone number", "A new lesson plan you wrote"], answer: 1, why: "A short note helps the teacher plan what comes next." },
          { objective: "O4", q: "A student's IEP says she gets extra time on tests. The teacher asks you to run the test. You:", options: ["Give her the same time as everyone to be fair", "Ask her if she wants extra time today", "Give her the extra time, as the IEP says", "Let her skip the test"], answer: 2, why: "The supports in an IEP are required and must be followed every time." },
          { objective: "O4", q: "Which is a FERPA-safe choice?", options: ["Posting a funny class photo on your social media", "Talking about a student's grades at a family dinner", "Texting a student's behavior report to your friend", "Discussing a student's progress only with the teacher"], answer: 3, why: "Student records and details are shared only with school staff who need them." },
          { objective: "O5", q: "You see a child with a serious injury who says they are afraid to go home today. What comes first?", options: ["Get help right away, calling 911 if the child is in danger now, and report the same day", "Call the parents to ask what happened", "Wait a week to see if it happens again", "Ask the child's classmates what they know"], answer: 0, why: "Danger now means emergency help; then report as your state and school require, without investigating yourself." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Teacher's Aide and Paraprofessional Preparation",
    questions: [
      { objective: "O1", q: "Which best describes a paraprofessional?", options: ["A school worker who helps students learn under a teacher's direction", "The person who plans and grades all lessons", "The school principal's assistant only", "A substitute teacher with a full license"], answer: 0, why: "Aides support learning; the teacher plans and grades." },
      { objective: "O1", q: "Under the federal rule, a Title I instructional aide with a diploma also needs one of these. Which is NOT one of the options?", options: ["Two years of college study", "An associate degree or higher", "Passing a formal state or local test", "A year of volunteering at the school"], answer: 3, why: "The three options are two years of college, a degree, or a formal academic test." },
      { objective: "O1", q: "What do almost all schools require before hiring an aide?", options: ["A teaching license", "A background check", "A master's degree", "A car"], answer: 1, why: "Schools check backgrounds to protect children." },
      { objective: "O1", q: "Which source tells you your state's ParaPro qualifying score?", options: ["A test prep ad", "A classmate", "The state requirements page on parapro.ets.org and your state or district", "Any online forum"], answer: 2, why: "ETS lists qualifying scores by state; your state or district confirms them." },
      { objective: "O2", q: "The ParaPro measures:", options: ["Science and history facts", "Typing speed", "Only classroom rules", "Reading, writing and math, and using them to help in class"], answer: 3, why: "ETS says it measures reading, writing and math and applying them in classroom instruction." },
      { objective: "O2", q: "Which word fits? \"Neither the teacher nor the students ___ ready.\"", options: ["were", "was", "is", "be"], answer: 0, why: "With \"neither...nor\", the verb agrees with the closer subject, \"students\", so \"were\"." },
      { objective: "O2", q: "What is 1/2 + 1/4?", options: ["2/6", "3/4", "1/8", "2/4"], answer: 1, why: "1/2 is 2/4, and 2/4 + 1/4 = 3/4." },
      { objective: "O2", q: "A class of 28 goes on a trip. Each van holds 8. How many vans are needed?", options: ["3", "3.5", "4", "5"], answer: 2, why: "28 / 8 = 3.5, and you can't take half a van, so you need 4." },
      { objective: "O2", q: "What is the best way to use the free ETS Study Companion?", options: ["Read only the answers", "Skip the questions you got wrong", "Use it the night before only", "Do the sample questions and write why for each mistake"], answer: 3, why: "Explaining each mistake shows you what to study next." },
      { objective: "O3", q: "Before leading a small group, what should you ask the teacher?", options: ["The goal and what help is OK to give", "Whether you can leave early", "Which students are the smartest", "If you can change the lesson"], answer: 0, why: "Knowing the goal and the allowed help keeps you on the teacher's plan." },
      { objective: "O3", q: "A student gives a wrong answer. What is the best next step?", options: ["Say \"Wrong\" and move on", "Ask a question that points to the mistake", "Give the answer right away", "Let another student laugh"], answer: 1, why: "A pointing question lets the student find and fix the mistake." },
      { objective: "O3", q: "Which praise helps the most?", options: ["\"Good.\"", "\"You're so smart.\"", "\"You checked your work, and that is how you caught the mistake.\"", "\"Finally.\""], answer: 2, why: "Exact praise of effort tells the student what to keep doing." },
      { objective: "O4", q: "A student is getting upset. Which is a calm, positive step?", options: ["Raise your voice so they listen", "Use a low voice and offer a choice", "Ignore them completely", "Threaten to call their parents"], answer: 1, why: "A calm voice and a choice help a student settle." },
      { objective: "O4", q: "What is an IEP?", options: ["A written plan for a student with a disability, under IDEA", "A school lunch program", "A teacher's pay plan", "A test for aides"], answer: 0, why: "IEP means Individualized Education Program, a plan under the federal law IDEA." },
      { objective: "O4", q: "A parent of another student asks you about a classmate's behavior. You:", options: ["Explain what happened", "Share the classmate's behavior plan", "Show them the incident notes", "Say you can't share other students' information and refer them to the teacher"], answer: 3, why: "Student information is private; share it only with staff who need it." },
      { objective: "O4", q: "Is it OK to take photos of students on your own phone?", options: ["Yes, if they are cute", "Yes, if you don't post them", "No; follow the school's policy and keep student images private", "Only during field trips"], answer: 2, why: "Photos are student information; follow the school's policy." },
      { objective: "O5", q: "What is a mandated reporter?", options: ["A person the law requires to report suspected child abuse or neglect", "A news reporter at school events", "A student who reports bullying", "A parent volunteer"], answer: 0, why: "State laws name professionals who must report suspected abuse or neglect." },
      { objective: "O5", q: "As a mandated reporter, what is your job?", options: ["Prove the abuse happened", "Question the family", "Report what you saw or heard, as your state and school require", "Wait until you are certain"], answer: 2, why: "You report; CPS or the police investigate." },
      { objective: "O5", q: "A child in front of you is in danger right now. You:", options: ["Email the principal", "Call 911 or your local emergency number", "Write a note for tomorrow", "Ask the child to wait"], answer: 1, why: "Immediate danger means emergency help first." },
      { objective: "O5", q: "What should you write down after a child tells you about harm?", options: ["Your guess about who did it", "Questions to ask the family", "Nothing; just remember it", "The child's exact words, the date and the time"], answer: 3, why: "Exact words, date and time make a clear, fair report." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Pre-Test: What Do You Already Know?", from: [0, 3, 5, 7, 9, 12, 14, 16, 17] },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      { name: "Requirements checked", objective: "O1", notYet: "Requirements are guessed or come from an unofficial source.", meets: "Lists the state and one district's education route, test and score (if any) and background check, with official links.", exceeds: "Also compares two districts and notes pay or other steps such as training." },
      { name: "Study plan", objective: "O2", notYet: "No test date, or no plan for what to study.", meets: "A real test date (or a route without a test) and one study focus per week.", exceeds: "Includes scores from practice sets and the weak areas they showed." },
      { name: "Small-group activity", objective: "O3", notYet: "The activity does not match the teacher's goal, or gives answers first.", meets: "Follows the goal, has practice items, two hints before answers, and a note to the teacher.", exceeds: "Also plans a quick way to see which students need more help." },
      { name: "Behavior and privacy", objective: "O4", notYet: "Uses real student names or details, or plans to share them outside school staff.", meets: "Uses made-up initials and says who may and may not see student information.", exceeds: "Adds a calm, positive response to one behavior that follows a student's plan." },
      { name: "Safety steps", objective: "O5", notYet: "Missing the emergency step, promises secrecy, or plans to investigate.", meets: "Lists the steps in order with the state's reporting number and the same-day timing.", exceeds: "Notes what the school's own policy adds, after asking the school or reading it." }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Learners who take and pass the ParaPro or their state's required test, or meet the requirement another way, within 90 days",
      "Learners who apply for and are hired as paraprofessionals, substitutes or school support staff (follow-up survey)",
      "Partner schools report new aides who follow lesson plans, handle behavior calmly and protect student privacy"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A phone or computer with internet for the official pages; paper, pencil and scrap paper for practice",
      "The free ETS ParaPro Study Companion and Study Guide (from parapro.ets.org)",
      "A real job posting from a nearby school district",
      "About 75 minutes in total, in short sessions, plus extra study time before the test"
    ],
    facilitatorNotes: [
      "Before the course, look up your state's paraprofessional rules and a local district posting so you can answer questions about them.",
      "Never use real student names or details in practice; use made-up initials.",
      "Run Lesson 4 as a role play: one learner leads, others play students, and the group gives feedback with the rubric.",
      "Lesson 6 can be hard for people who were harmed as children. Say so before it starts, let learners step out, and have local support information ready.",
      "Tell learners with past convictions to check the state's and district's background check rules directly; do not guess whether they qualify.",
      "Invite a working paraprofessional or a district hiring staff member to answer questions."
    ]
  }
};
