"use strict";

// Koach Learn course: Workforce Development -> "AI in the New Workforce". Written as a skill-building course: by the end the student can DO the skill in `outcome`.
// Two chapters of three micro-lessons; a knowledge check closes each chapter; a 20-question quiz closes the course. See scripts/koachlearn-export.js for how it is built.
// Job outlook data is not quoted; students are sent to the official source (bls.gov Occupational Outlook Handbook) to look up their own field.
//
// lesson: { title, minutes, goal, text: [paragraph], steps: [step] (optional), words: [[term, means]], slides: [{ title, bullets }], sources, tryIt, youCanNow }
// question: { q, options: [4], answer: index of the right option, why }

const BLS_OOH = { name: "US Bureau of Labor Statistics: Occupational Outlook Handbook", url: "https://www.bls.gov/ooh/" };
const CAREERONESTOP = { name: "CareerOneStop (US Department of Labor): find training and American Job Centers", url: "https://www.careeronestop.org/" };

module.exports = {
  id: "workforce-ai-new-workforce",
  category: "Workforce Development",
  name: "AI in the New Workforce",
  skills: "Understanding how AI changes tasks, Breaking your job into tasks, Spotting tasks AI can help with, Finding reliable job outlook information, Building a 90-day upskilling plan, Talking about AI skills with employers",
  outcome: "break your current or target job into tasks, mark which ones AI can help with and which depend on human skills, look up your field's outlook on an official source, and turn that into a 90-day upskilling plan and a short, honest way to describe your AI skills to an employer.",
  about: [
    "This course is for job seekers and working people who keep hearing that AI will change jobs and want to know what it means for them: warehouse and logistics workers, retail and customer service staff, office and administrative workers, healthcare support, trades and drivers.",
    "You will learn how AI tends to change tasks rather than whole jobs, look at your own job task by task, find reliable information about your field, and make a practical plan to build the skills that help you stay valuable. You will finish by practicing how to talk about AI skills in an interview or a conversation with your manager.",
    "We do not predict which jobs will disappear, and no course can promise a job or a raise. Each lesson takes about five minutes, with a knowledge check after each chapter and a 20-question quiz at the end."
  ],
  finalTask: "Make your personal AI career plan: a task list for your current or target job with each task marked \"AI can help\", \"human skill\" or \"both\"; three facts about your field from the BLS Occupational Outlook Handbook; a 90-day upskilling plan with three skills, free resources and weekly time; and a 30-second answer to \"How do you use AI in your work?\" that is honest and specific.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Job seekers and working adults who keep hearing that AI will change jobs: warehouse and logistics workers, retail and customer service staff, office and administrative workers, healthcare support, trades and drivers.",
    startingPoint: "Know their own work well and can use a smartphone or computer. Many are worried or unsure about AI, have not looked at official job outlook data, and do not have a written plan for building new skills.",
    gap: "AI is changing which tasks take time inside many jobs. Learners need to see which of their tasks AI can help with and which depend on human skills, check their field's outlook on an official source, and follow a realistic plan to build skills they can describe honestly to an employer.",
    constraints: [
      "Reading level: plain words and short sentences; no technical background assumed",
      "Devices: a smartphone or computer with internet; many use a library or American Job Center computer",
      "Time: about 5-minute lessons and a plan of a few hours a week around work and family",
      "Privacy and policy: no private information or confidential company information in AI tools; employer AI policies come first",
      "Job outlook numbers come from the official BLS page, not from AI"
    ],
    prerequisites: "None. Learners new to AI assistants can take \"Essential AI Tools for the Workplace\" alongside this course."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Given your current or last job", action: "list at least eight tasks in the job and explain how AI affects tasks rather than whole jobs", standard: "in your own words" },
    { id: "O2", condition: "Given your task list", action: "label each task \"AI can help\", \"human skill\" or \"both\"", standard: "with every task labeled and you making the final call" },
    { id: "O3", condition: "For your current or target occupation", action: "look up the job outlook in the BLS Occupational Outlook Handbook and find your nearest American Job Center", standard: "with three facts taken from the official page" },
    { id: "O4", condition: "Given three real job postings for a role you want", action: "choose three skills to build and explain why each matters", standard: "with one AI tool skill, one field skill and one human skill" },
    { id: "O5", condition: "For your three skills", action: "write a 90-day upskilling plan with a resource, weekly time and proof for each skill", standard: "with the first two weeks of study in your calendar" },
    { id: "O6", condition: "When an employer asks how you use AI", action: "give a 30-second Task-Tool-Check-Result answer", standard: "that is honest, specific and follows your employer's AI policy" }
  ],
  chapters: [
    {
      name: "Chapter 1: How AI is changing work",
      lessons: [
        {
          objectives: ["O1"],
          title: "AI changes tasks, not just jobs",
          minutes: 5,
          goal: "Explain how AI affects the tasks inside a job.",
          text: [
            "Every job is a bundle of tasks. A medical receptionist answers phones, books appointments, checks insurance, greets patients, and calms worried people. A warehouse lead plans shifts, tracks stock, trains new workers and solves problems on the floor.",
            "AI tools are good at some tasks: drafting messages, summarizing, searching through information, filling in forms, sorting and spotting patterns. They are weak at others: hands-on physical work, reading a room, building trust, handling something new, and taking responsibility.",
            "So in many jobs, AI changes which tasks take time. The people who learn to use AI for the routine tasks often have more time for the human tasks, and that can make them more valuable."
          ],
          words: [["Task", "one piece of work inside a job, like booking an appointment."], ["Routine task", "a task done the same way again and again."], ["Upskilling", "learning new skills to do your job better or move up."]],
          slides: [
            { title: "A job is a bundle of tasks", bullets: ["Receptionist: phones, booking, insurance, greeting", "Warehouse lead: shifts, stock, training, problems"] },
            { title: "What AI does well", bullets: ["Drafting and summarizing", "Searching and filling in forms", "Sorting and spotting patterns"] },
            { title: "What people do best", bullets: ["Hands-on physical work", "Reading a room and building trust", "Handling the new; taking responsibility"] }
          ],
          tryIt: "Write your current or last job title and list at least eight tasks you do (or did) in a normal week.",
          youCanNow: "explain how AI affects the tasks inside a job.",
          quickCheck: [
            { objective: "O1", q: "What is a job, when you think about how AI changes work?", options: ["One single task", "A job title only", "A bundle of tasks", "A list of tools"], answer: 2, why: "A job is a bundle of tasks, and AI changes some tasks more than others." },
            { objective: "O1", q: "You want to see how AI might affect your job. What do you do first?", options: ["List the tasks you do in a normal week", "Quit and look for a new job", "Ask the AI if you will be replaced", "Ignore AI completely"], answer: 0, why: "Listing your tasks shows which ones AI may help with and which depend on you." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Marking your tasks: AI can help, human skill, or both",
          minutes: 5,
          goal: "Sort the tasks in your job by where AI can help.",
          text: [
            "Take your task list and mark each one. \"AI can help\": writing an email, making a checklist, summarizing a long policy. \"Human skill\": calming an upset customer face to face, lifting and loading safely, fixing a machine. \"Both\": writing a report where AI drafts and you check facts, or planning a schedule where AI suggests and you decide.",
            "You can ask an AI assistant to help you think: \"I am a retail shift lead. Here are my tasks. Which could an AI assistant help with, and how?\" Then use your own judgment; you know the job better than it does.",
            "Look at the \"human skill\" tasks. These are strengths to grow and to talk about with employers: communication, teamwork, problem solving, safety, care."
          ],
          steps: ["Mark each task: AI can help, human skill, or both.", "Ask an AI assistant for ideas, then decide yourself.", "Circle two \"AI can help\" tasks to try this month.", "Underline your strongest \"human skill\" tasks."],
          words: [["Human skills", "skills like communication, teamwork, judgment and care that people do best; also called soft skills or durable skills."]],
          slides: [
            { title: "Three labels", bullets: ["AI can help: emails, checklists, summaries", "Human skill: calming people, safe lifting, repairs", "Both: AI drafts, you check and decide"] },
            { title: "Ask AI, then decide", bullets: ["\"Which of my tasks could AI help with?\"", "You know the job better than it does"] },
            { title: "Your strengths", bullets: ["Communication and teamwork", "Problem solving and safety", "Care and judgment"] }
          ],
          tryIt: "Label every task on your list. Circle two \"AI can help\" tasks you will try this month, and underline your two strongest human-skill tasks.",
          youCanNow: "sort the tasks in your job by where AI can help and where your human skills matter most.",
          quickCheck: [
            { objective: "O2", q: "Which task is a human skill?", options: ["Copying numbers into a form", "Writing the same daily report", "Sorting emails by date", "Calming an upset customer"], answer: 3, why: "Building trust and calming people depend on human skills." },
            { objective: "O2", q: "An AI labels your task \"handle customer complaints\" as \"AI can help\" only. You disagree. What do you do?", options: ["Accept the AI's label", "Make the final call yourself; it may be \"both\"", "Delete the task", "Ask a different AI until it agrees"], answer: 1, why: "You know your job best, so you make the final call on each label." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Finding reliable information about your field",
          minutes: 5,
          goal: "Look up your occupation's outlook on an official source.",
          text: [
            "Headlines about AI and jobs are often scary or hyped. Use official, data-based sources instead. In the US, the Bureau of Labor Statistics (BLS) publishes the Occupational Outlook Handbook at bls.gov/ooh. For hundreds of jobs it shows what the work involves, typical training, pay and the projected job outlook.",
            "Search for your occupation, then note: what workers do, how to become one, median pay, and job outlook. Look at related occupations too; they can show next steps.",
            "CareerOneStop, from the US Department of Labor, helps you find training programs and your local American Job Center, which can offer free career services. Ask AI to explain anything confusing on these pages, but take the numbers from the page itself."
          ],
          steps: ["Go to bls.gov/ooh and search your occupation.", "Write down: what they do, how to become one, median pay, outlook.", "Check two related occupations.", "Find your local American Job Center on CareerOneStop."],
          words: [["BLS", "Bureau of Labor Statistics: the US agency that publishes job and pay data."], ["Job outlook", "the projected change in the number of jobs in an occupation."], ["Median pay", "the middle pay: half earn more, half earn less."]],
          slides: [
            { title: "Skip the hype", bullets: ["Use official, data-based sources", "BLS Occupational Outlook Handbook: bls.gov/ooh"] },
            { title: "What to write down", bullets: ["What workers do", "How to become one", "Median pay and job outlook"] },
            { title: "Free local help", bullets: ["CareerOneStop: training and job centers", "American Job Centers offer career services", "Take numbers from the page, not AI"] }
          ],
          sources: [BLS_OOH, CAREERONESTOP],
          tryIt: "Look up your current or target occupation on bls.gov/ooh. Write three facts from the page, then find your nearest American Job Center on CareerOneStop.",
          youCanNow: "find reliable outlook and training information about your field.",
          quickCheck: [
            { objective: "O3", q: "What does the Occupational Outlook Handbook show?", options: ["What workers do, how to become one, pay and outlook", "Job openings near you today", "Your credit score", "Company reviews"], answer: 0, why: "The OOH from the BLS describes each occupation, its pay and its outlook." },
            { objective: "O3", q: "An AI tells you your field will grow 30%. What do you do?", options: ["Repeat it to friends", "Plan your career around it", "Check the number on the official BLS page", "Ignore all job data"], answer: 2, why: "Job outlook numbers come from the official page, not the AI." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: How AI is changing work",
        questions: [
          { objective: "O1", q: "In many jobs, AI mostly changes:", options: ["Nothing at all", "Which tasks take time", "Every task completely", "Only the job title"], answer: 1, why: "AI affects tasks inside jobs." },
          { objective: "O2", q: "Which task is AI usually good at?", options: ["Fixing a forklift", "Calming an upset customer face to face", "Lifting boxes safely", "Drafting a routine email"], answer: 3, why: "Drafting text is a strength of AI tools." },
          { objective: "O2", q: "Writing a report where AI drafts and you check facts is labeled:", options: ["Both", "Human skill only", "AI only", "Neither"], answer: 0, why: "AI helps and a person checks." },
          { objective: "O3", q: "Where do you find the official US job outlook for an occupation?", options: ["An AI's guess", "A viral video", "The BLS Occupational Outlook Handbook", "A comment section"], answer: 2, why: "BLS publishes official outlook data." },
          { objective: "O3", q: "What can an American Job Center offer?", options: ["Loans", "Guaranteed jobs", "Free career services and training information", "College degrees"], answer: 2, why: "They offer career services; no guarantees." }
        ]
      }
    },
    {
      name: "Chapter 2: Making your plan",
      lessons: [
        {
          objectives: ["O4"],
          title: "Choosing three skills to build",
          minutes: 5,
          goal: "Choose three skills that fit your job and your goals.",
          text: [
            "Choose a mix: one AI tool skill, one skill for your field, and one human skill. Example for a warehouse worker who wants to become a lead: (1) using an AI assistant to write clear shift notes, (2) learning the warehouse management system and inventory basics, (3) coaching and training new workers.",
            "Use what you found: the BLS \"How to become one\" section, job postings for the role you want, and your task list. Skills that appear in many job postings are worth learning.",
            "Ask AI to help compare: \"Here are five job postings for warehouse lead. Which skills appear most often?\" Paste only the postings, nothing private."
          ],
          steps: ["Collect three to five job postings for your target role.", "List the skills they ask for most.", "Choose one AI tool skill, one field skill and one human skill.", "Write why each matters."],
          words: [["Job posting", "an ad for a job that lists duties and required skills."], ["Field skill", "a skill specific to your type of work, like inventory systems or medical terms."]],
          slides: [
            { title: "Pick a mix of three", bullets: ["One AI tool skill", "One field skill", "One human skill"] },
            { title: "Where to look", bullets: ["BLS \"How to become one\"", "Job postings for your target role", "Your own task list"] },
            { title: "AI can compare postings", bullets: ["\"Which skills appear most often?\"", "Paste postings only, nothing private"] }
          ],
          tryIt: "Find three job postings for a role you want. Ask AI which skills appear most often, then choose your three skills and write why each matters.",
          youCanNow: "choose three skills to build based on real job postings and your goals.",
          quickCheck: [
            { objective: "O4", q: "Which is a good mix of three skills to build?", options: ["Three AI tools", "One AI tool skill, one field skill and one human skill", "Three skills you already have", "Any three from an ad"], answer: 1, why: "A mix covers using AI, your field and the human skills AI cannot replace." },
            { objective: "O4", q: "You want to know which skills employers want for your target role. What do you do?", options: ["Guess", "Ask a friend in a different field", "Pick the skills that sound hardest", "Read real job postings and see which skills appear most"], answer: 3, why: "Skills that appear in many real postings are worth learning." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Building a 90-day upskilling plan",
          minutes: 5,
          goal: "Turn your three skills into a realistic 90-day plan.",
          text: [
            "A plan makes learning happen. For each skill, write: a free or low-cost resource, weekly time, and a way to prove you learned it. Proof can be a certificate, a project, a work sample or your manager seeing it in action.",
            "Free resources include your local library (many offer free online courses), American Job Centers, community colleges, employer training, and free courses from major tech companies. Check costs and details on each official site.",
            "Keep it small: two or three hours a week is better than a big plan you drop. Use an AI assistant to make the weekly schedule and to quiz you, and practice the AI skill on real tasks at work if your employer allows it."
          ],
          steps: ["For each skill: resource, weekly time, proof.", "Check each resource's cost and details on its official site.", "Put weekly learning times in your calendar.", "Review at day 30, 60 and 90."],
          words: [["Proof of skill", "something that shows you can do it: a certificate, project or work sample."], ["Community college", "a local public college with low-cost courses and certificates."]],
          slides: [
            { title: "For each skill", bullets: ["A free or low-cost resource", "Weekly time", "A way to prove it"] },
            { title: "Free places to learn", bullets: ["Library online courses", "American Job Centers and community colleges", "Employer training"] },
            { title: "Keep it small", bullets: ["2-3 hours a week you can keep", "AI makes the schedule and quizzes you", "Review at 30, 60 and 90 days"] }
          ],
          sources: [CAREERONESTOP],
          tryIt: "Write your 90-day plan: for each of your three skills, a resource, weekly time and proof. Put the first two weeks of study times in your calendar.",
          youCanNow: "build a realistic 90-day plan to learn three new skills.",
          quickCheck: [
            { objective: "O5", q: "Which is proof of a skill?", options: ["Saying you are good at it", "Watching one video", "A certificate, project or work sample", "Bookmarking a course"], answer: 2, why: "Proof is something you can show, like a certificate, project or work sample." },
            { objective: "O5", q: "You work full-time. Which study plan do you write?", options: ["2 to 3 hours a week, scheduled in your calendar", "10 hours every night", "Study when you feel like it", "Study only the week before an interview"], answer: 0, why: "A small, regular amount of time in your calendar is the plan most likely to work." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Talking about AI skills with employers",
          minutes: 5,
          goal: "Give a short, honest, specific answer about how you use AI at work.",
          text: [
            "Employers increasingly ask, \"How do you use AI?\" A strong answer is specific and honest, and shows judgment. Use the pattern: Task, Tool, Check, Result.",
            "Example: \"I use Microsoft Copilot to draft my end-of-shift notes (task and tool). I always check the counts against the scanner report before I send them (check). It saves me about 15 minutes a shift, and the next lead gets clearer notes (result).\"",
            "Never overstate. Do not claim skills you do not have, and follow your employer's AI policy: do not put confidential company or customer information into AI tools. Showing that you know the limits is part of the skill."
          ],
          steps: ["Pick one real task where you used AI (or practiced it).", "Say the task, the tool, how you checked it, and the result.", "Keep it to about 30 seconds.", "Practice it out loud."],
          words: [["AI policy", "an employer's rules for how staff may use AI tools."], ["Confidential information", "company or customer information that must not be shared outside the company."]],
          slides: [
            { title: "Task, Tool, Check, Result", bullets: ["What you did", "Which AI tool", "How you checked it", "What it improved"] },
            { title: "Example", bullets: ["\"I use Copilot to draft end-of-shift notes.", "I check counts against the scanner report.", "It saves 15 minutes a shift.\""] },
            { title: "Show judgment", bullets: ["Never overstate your skills", "Follow your employer's AI policy", "Keep confidential data out of AI"] }
          ],
          tryIt: "Final task: finish your AI career plan: labeled task list, three BLS facts, your 90-day plan, and a 30-second Task-Tool-Check-Result answer you practice out loud.",
          youCanNow: "plan your growth in an AI-changed workforce and talk about your AI skills honestly with employers.",
          quickCheck: [
            { objective: "O6", q: "In a Task-Tool-Check-Result answer, what is the Result?", options: ["The AI tool's name", "How you checked the AI's work", "What you asked the AI", "What improved because of your work"], answer: 3, why: "The Result is the outcome, such as time saved or fewer errors." },
            { objective: "O6", q: "An interviewer asks if you have used AI to build reports. You have only tried it twice. What do you say?", options: ["Say you are an expert", "Honestly describe the two times: the task, tool, how you checked and the result", "Say you have never heard of AI", "Change the subject"], answer: 1, why: "An honest, specific answer builds trust; never claim skills you do not have." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Making your plan",
        questions: [
          { objective: "O4", q: "A good mix of three skills is:", options: ["One AI tool skill, one field skill, one human skill", "Three random apps", "Only AI skills", "None"], answer: 0, why: "A mix keeps you balanced and valuable." },
          { objective: "O4", q: "Where can you see which skills employers want?", options: ["A meme", "A horoscope", "AI's guess", "Real job postings for your target role"], answer: 3, why: "Postings list required skills." },
          { objective: "O5", q: "Which plan is most likely to work?", options: ["40 hours this weekend only", "2-3 hours a week, in your calendar", "Whenever you feel like it", "No plan"], answer: 1, why: "Small, steady plans get done." },
          { objective: "O6", q: "In Task, Tool, Check, Result, \"Check\" means:", options: ["How you verified the AI's work", "Your paycheck", "A bank check", "Checking email"], answer: 0, why: "Checking shows judgment." },
          { objective: "O6", q: "Which should you NOT do when describing AI skills?", options: ["Mention how you check work", "Give a specific example", "Claim skills you do not have", "Follow your employer's policy"], answer: 2, why: "Honesty matters." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: AI in the New Workforce",
    questions: [
      { objective: "O1", q: "A job is best thought of as:", options: ["One single task", "A bundle of tasks", "A title only", "A paycheck"], answer: 1, why: "Jobs contain many tasks." },
      { objective: "O1", q: "Which is a routine task?", options: ["Leading a team meeting", "Comforting a scared patient", "Handling a brand-new emergency", "Writing the same daily report"], answer: 3, why: "Routine tasks repeat the same way." },
      { objective: "O1", q: "What is upskilling?", options: ["A type of AI", "Quitting", "Working fewer hours", "Learning new skills to do better or move up"], answer: 3, why: "Upskilling builds new skills." },
      { objective: "O2", q: "Which is a human skill?", options: ["Sorting a spreadsheet", "Building trust with customers", "Summarizing a document", "Spell checking"], answer: 1, why: "Trust-building is a human strength." },
      { objective: "O2", q: "When AI labels your tasks, who makes the final call?", options: ["Your neighbor", "The AI", "You", "Nobody"], answer: 2, why: "You know the job best." },
      { objective: "O2", q: "Why underline your human-skill tasks?", options: ["They are strengths to grow and talk about", "To delete them", "To hide them", "They do not matter"], answer: 0, why: "Human skills stay valuable." },
      { objective: "O3", q: "BLS stands for:", options: ["Basic Labor Service", "Business Learning System", "Bureau of Labor Statistics", "Board of Licensed Skills"], answer: 2, why: "BLS publishes job data." },
      { objective: "O3", q: "The Occupational Outlook Handbook shows:", options: ["What workers do, how to become one, pay and outlook", "Celebrity news", "Stock tips", "Recipes"], answer: 0, why: "Those are its main sections." },
      { objective: "O3", q: "Where should you take job outlook numbers from?", options: ["An AI summary without checking", "The official page", "A headline", "A rumor"], answer: 1, why: "AI can misstate numbers." },
      { objective: "O3", q: "CareerOneStop is from:", options: ["A phone company", "A social network", "A bank", "The US Department of Labor"], answer: 3, why: "It is a Department of Labor resource." },
      { objective: "O4", q: "Skills that appear in many job postings are:", options: ["Worth learning", "Not important", "Illegal", "Outdated"], answer: 0, why: "Employers clearly want them." },
      { objective: "O4", q: "When pasting job postings into AI, leave out:", options: ["Skill lists", "The posting text", "The job title", "Your private information"], answer: 3, why: "Keep private details out." },
      { objective: "O5", q: "Which is proof of a skill?", options: ["A rumor", "A wish", "A certificate, project or work sample", "A social post saying you are good"], answer: 2, why: "Proof shows what you can do." },
      { objective: "O5", q: "Where can you often find free online courses?", options: ["Pop-up ads", "Your local library", "Spam emails", "Nowhere"], answer: 1, why: "Many libraries offer free courses." },
      { objective: "O5", q: "When should you review your 90-day plan?", options: ["Every hour", "Never", "Only at day 1", "At day 30, 60 and 90"], answer: 3, why: "Regular reviews keep you on track." },
      { objective: "O6", q: "A good answer about AI skills is:", options: ["Copied from a website", "Vague and big", "Specific and honest", "Made up"], answer: 2, why: "Specific, honest answers build trust." },
      { objective: "O6", q: "Which belongs in a Task-Tool-Check-Result answer?", options: ["\"I check counts against the scanner report.\"", "\"AI does all my work.\"", "\"I paste customer data into chatbots.\"", "\"I never check anything.\""], answer: 0, why: "It shows how you verify." },
      { objective: "O6", q: "Before using AI at work you should know:", options: ["Your coworker's password", "Your employer's AI policy", "Customer card numbers", "Nothing"], answer: 1, why: "Policies set what is allowed." },
      { objective: "O6", q: "Confidential company information should:", options: ["Be pasted into any chatbot", "Stay out of AI tools unless your employer approves", "Be posted online", "Be shared with friends"], answer: 1, why: "It must be protected." },
      { objective: "O6", q: "What does this course promise about jobs?", options: ["Nothing; it helps you plan and build skills", "A guaranteed job", "A guaranteed raise", "A promotion"], answer: 0, why: "No course can promise outcomes." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Pre-Test: What Do You Already Know?",
    from: [
      0,
      3,
      4,
      7,
      10,
      12,
      14,
      15,
      17
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      {
        name: "Labeled task list",
        objective: "O2",
        notYet: "Fewer than eight tasks, or tasks not labeled.",
        meets: "At least eight tasks, each labeled \"AI can help\", \"human skill\" or \"both\".",
        exceeds: "Two \"AI can help\" tasks are circled to try and two human-skill strengths are underlined."
      },
      {
        name: "Official field facts",
        objective: "O3",
        notYet: "Facts are missing or came from AI.",
        meets: "Three facts about the field from the BLS Occupational Outlook Handbook.",
        exceeds: "Also names the nearest American Job Center and one service it offers."
      },
      {
        name: "90-day plan",
        objective: "O5",
        notYet: "Skills have no resource, time or proof.",
        meets: "Three skills, each with a free resource, weekly time and proof, reviewed at day 30, 60 and 90.",
        exceeds: "The first two weeks of study are in the learner's calendar."
      },
      {
        name: "30-second AI answer",
        objective: "O6",
        notYet: "The answer is vague or claims skills the learner does not have.",
        meets: "An honest Task-Tool-Check-Result answer said out loud in about 30 seconds.",
        exceeds: "The answer includes a specific number or result."
      }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Learners who are still following their 90-day plan at day 30 (follow-up survey)",
      "Learners who earn a certificate or finish a course from their plan within 90 days",
      "Learners who get a new job, promotion or raise within 6 months"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A smartphone or computer with internet",
      "A free AI assistant: ChatGPT, Microsoft Copilot or Google Gemini",
      "The free bls.gov/ooh and CareerOneStop websites, and three real job postings",
      "Paper, a notes app or a calendar for the task list and 90-day plan",
      "About 60 minutes in total: lessons, practice, checks and the final task"
    ],
    facilitatorNotes: [
      "In a job center or workplace group: take the pre-test together, then label task lists in pairs so learners can challenge each other's labels.",
      "Be honest that the course promises no job; it helps learners plan and build skills.",
      "Remind learners to follow their employer's AI policy and keep confidential company information out of AI tools.",
      "Have learners say their 30-second answer out loud to a partner.",
      "Score the AI career plan with the rubric, and give feedback on one Not yet row at a time."
    ]
  }
};
