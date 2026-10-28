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
  chapters: [
    {
      name: "Chapter 1: How AI is changing work",
      lessons: [
        {
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
          youCanNow: "explain how AI affects the tasks inside a job."
        },
        {
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
          youCanNow: "sort the tasks in your job by where AI can help and where your human skills matter most."
        },
        {
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
          youCanNow: "find reliable outlook and training information about your field."
        }
      ],
      check: {
        title: "Knowledge Check 1: How AI is changing work",
        questions: [
          { q: "In many jobs, AI mostly changes:", options: ["Nothing at all", "Which tasks take time", "Every task completely", "Only the job title"], answer: 1, why: "AI affects tasks inside jobs." },
          { q: "Which task is AI usually good at?", options: ["Fixing a forklift", "Calming an upset customer face to face", "Lifting boxes safely", "Drafting a routine email"], answer: 3, why: "Drafting text is a strength of AI tools." },
          { q: "Writing a report where AI drafts and you check facts is labeled:", options: ["Both", "Human skill only", "AI only", "Neither"], answer: 0, why: "AI helps and a person checks." },
          { q: "Where do you find the official US job outlook for an occupation?", options: ["An AI's guess", "A viral video", "The BLS Occupational Outlook Handbook", "A comment section"], answer: 2, why: "BLS publishes official outlook data." },
          { q: "What can an American Job Center offer?", options: ["Loans", "Guaranteed jobs", "Free career services and training information", "College degrees"], answer: 2, why: "They offer career services; no guarantees." }
        ]
      }
    },
    {
      name: "Chapter 2: Making your plan",
      lessons: [
        {
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
          youCanNow: "choose three skills to build based on real job postings and your goals."
        },
        {
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
          youCanNow: "build a realistic 90-day plan to learn three new skills."
        },
        {
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
          youCanNow: "plan your growth in an AI-changed workforce and talk about your AI skills honestly with employers."
        }
      ],
      check: {
        title: "Knowledge Check 2: Making your plan",
        questions: [
          { q: "A good mix of three skills is:", options: ["One AI tool skill, one field skill, one human skill", "Three random apps", "Only AI skills", "None"], answer: 0, why: "A mix keeps you balanced and valuable." },
          { q: "Where can you see which skills employers want?", options: ["A meme", "A horoscope", "AI's guess", "Real job postings for your target role"], answer: 3, why: "Postings list required skills." },
          { q: "Which plan is most likely to work?", options: ["40 hours this weekend only", "2-3 hours a week, in your calendar", "Whenever you feel like it", "No plan"], answer: 1, why: "Small, steady plans get done." },
          { q: "In Task, Tool, Check, Result, \"Check\" means:", options: ["How you verified the AI's work", "Your paycheck", "A bank check", "Checking email"], answer: 0, why: "Checking shows judgment." },
          { q: "Which should you NOT do when describing AI skills?", options: ["Mention how you check work", "Give a specific example", "Claim skills you do not have", "Follow your employer's policy"], answer: 2, why: "Honesty matters." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: AI in the New Workforce",
    questions: [
      { q: "A job is best thought of as:", options: ["One single task", "A bundle of tasks", "A title only", "A paycheck"], answer: 1, why: "Jobs contain many tasks." },
      { q: "Which is a routine task?", options: ["Leading a team meeting", "Comforting a scared patient", "Handling a brand-new emergency", "Writing the same daily report"], answer: 3, why: "Routine tasks repeat the same way." },
      { q: "What is upskilling?", options: ["A type of AI", "Quitting", "Working fewer hours", "Learning new skills to do better or move up"], answer: 3, why: "Upskilling builds new skills." },
      { q: "Which is a human skill?", options: ["Sorting a spreadsheet", "Building trust with customers", "Summarizing a document", "Spell checking"], answer: 1, why: "Trust-building is a human strength." },
      { q: "When AI labels your tasks, who makes the final call?", options: ["Your neighbor", "The AI", "You", "Nobody"], answer: 2, why: "You know the job best." },
      { q: "Why underline your human-skill tasks?", options: ["They are strengths to grow and talk about", "To delete them", "To hide them", "They do not matter"], answer: 0, why: "Human skills stay valuable." },
      { q: "BLS stands for:", options: ["Basic Labor Service", "Business Learning System", "Bureau of Labor Statistics", "Board of Licensed Skills"], answer: 2, why: "BLS publishes job data." },
      { q: "The Occupational Outlook Handbook shows:", options: ["What workers do, how to become one, pay and outlook", "Celebrity news", "Stock tips", "Recipes"], answer: 0, why: "Those are its main sections." },
      { q: "Where should you take job outlook numbers from?", options: ["An AI summary without checking", "The official page", "A headline", "A rumor"], answer: 1, why: "AI can misstate numbers." },
      { q: "CareerOneStop is from:", options: ["A phone company", "A social network", "A bank", "The US Department of Labor"], answer: 3, why: "It is a Department of Labor resource." },
      { q: "Skills that appear in many job postings are:", options: ["Worth learning", "Not important", "Illegal", "Outdated"], answer: 0, why: "Employers clearly want them." },
      { q: "When pasting job postings into AI, leave out:", options: ["Skill lists", "The posting text", "The job title", "Your private information"], answer: 3, why: "Keep private details out." },
      { q: "Which is proof of a skill?", options: ["A rumor", "A wish", "A certificate, project or work sample", "A social post saying you are good"], answer: 2, why: "Proof shows what you can do." },
      { q: "Where can you often find free online courses?", options: ["Pop-up ads", "Your local library", "Spam emails", "Nowhere"], answer: 1, why: "Many libraries offer free courses." },
      { q: "When should you review your 90-day plan?", options: ["Every hour", "Never", "Only at day 1", "At day 30, 60 and 90"], answer: 3, why: "Regular reviews keep you on track." },
      { q: "A good answer about AI skills is:", options: ["Copied from a website", "Vague and big", "Specific and honest", "Made up"], answer: 2, why: "Specific, honest answers build trust." },
      { q: "Which belongs in a Task-Tool-Check-Result answer?", options: ["\"I check counts against the scanner report.\"", "\"AI does all my work.\"", "\"I paste customer data into chatbots.\"", "\"I never check anything.\""], answer: 0, why: "It shows how you verify." },
      { q: "Before using AI at work you should know:", options: ["Your coworker's password", "Your employer's AI policy", "Customer card numbers", "Nothing"], answer: 1, why: "Policies set what is allowed." },
      { q: "Confidential company information should:", options: ["Be pasted into any chatbot", "Stay out of AI tools unless your employer approves", "Be posted online", "Be shared with friends"], answer: 1, why: "It must be protected." },
      { q: "What does this course promise about jobs?", options: ["Nothing; it helps you plan and build skills", "A guaranteed job", "A guaranteed raise", "A promotion"], answer: 0, why: "No course can promise outcomes." }
    ]
  }
};
