"use strict";

// Koach Learn course: Undeserved Community -> "AI for Nonprofit Leadership" (bonus). Skill-building course: by the end the student can DO the skill in `outcome`.
// Two chapters of three micro-lessons; a knowledge check closes each chapter; a 20-question quiz closes the course. Shape: scripts/koachlearn-courses/README.md.

module.exports = {
  id: "underserved-ai-nonprofit-leadership",
  category: "Undeserved Community",
  name: "AI for Nonprofit Leadership",
  skills: "Writing a clear mission and goal, Planning a program with AI, Organizing volunteers safely, Finding and summarizing grants, Updating supporters, Setting simple AI rules for your group",
  outcome: "use a free AI assistant to write a one-page program plan for your community group (goal, timeline, volunteer roles and a short grant summary) and set simple rules for how your group uses AI safely.",
  about: [
    "This course is for people who lead or want to lead community work: a food pantry, a tenant association, a church ministry, a youth program, a block club or a small nonprofit. Often you are doing it with little money, few staff and lots of heart.",
    "You will use a free AI assistant to sharpen your mission, plan a program, organize volunteers, find grant opportunities and keep supporters updated, while protecting the people you serve. AI saves time on writing and planning; you bring the judgment, relationships and community knowledge.",
    "Each lesson takes about five minutes and ends with a \"Try it now\" task that builds your real plan. There is a knowledge check after each chapter and a 20-question quiz at the end. For legal, tax or nonprofit-status questions, check official sources such as irs.gov and your state's attorney general or secretary of state."
  ],
  finalTask: "Write a one-page program plan for a real or practice community project with help from a free AI assistant: a one-sentence mission, one measurable goal, a simple timeline, three volunteer roles (with safety steps if minors are involved), a five-sentence grant summary, and five simple rules for how your group will use AI. Remove any private information before sharing.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "People who lead or want to lead community work in underserved areas: food pantry, tenant association, church ministry, youth program and block club leaders, and staff or board members of small nonprofits.",
    startingPoint: "Run programs with little money and few staff, and write flyers, emails and reports by hand. Most have used an AI assistant little or not at all, and few have a written mission, measurable goal, volunteer roles or AI rules.",
    gap: "Small groups lose hours to paperwork and miss grants because they lack time and clear plans. AI can draft much of this work, but leaders must keep the people they serve safe, check every fact and keep decisions in human hands.",
    constraints: [
      "Reading level: plain words and short sentences (about grade 6 to 7)",
      "Devices: a smartphone or a library or office computer",
      "Cost: free or donated tools only",
      "Privacy: no names, addresses, phone numbers, health or immigration details of the people served in AI",
      "Safety with minors and vulnerable adults follows the organization's policy and state rules"
    ],
    prerequisites: "None. Learners new to AI assistants can take \"Introduction to AI and Digital Empowerment\" first."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Given the tasks your group does each month", action: "identify which ones AI can help draft and which need people", standard: "naming at least three tasks for AI and the human work it frees time for" },
    { id: "O2", condition: "Given what your group does", action: "write a one-sentence mission and one measurable goal with AI's help", standard: "edited with your team so it says who, what and why, and the goal can be counted by a date" },
    { id: "O3", condition: "Given a program or event goal", action: "create a timeline and task list with AI", standard: "adding what AI missed and putting a name and date by every task" },
    { id: "O4", condition: "Given the volunteer jobs in your plan", action: "write short volunteer role descriptions and the safety steps they need", standard: "following your organization's policy when minors or vulnerable adults are involved and using no real names in AI" },
    { id: "O5", condition: "Given a project that needs money", action: "find one grant opportunity and draft a five-sentence grant summary with AI", standard: "with every fact matching your records and the funder's rules followed" },
    { id: "O6", condition: "When you share results and use AI as a group", action: "write a supporter update and five simple AI rules for your group", standard: "using stories only with written permission and keeping decisions about people in human hands" }
  ],
  chapters: [
    {
      name: "Chapter 1: Leading and planning with AI",
      lessons: [
        {
          objectives: ["O1"],
          title: "What AI can do for a community group",
          minutes: 4,
          goal: "List three time-consuming tasks in your group that AI could help with.",
          text: [
            "Community leaders spend hours writing flyers, emails, meeting notes, sign-up lists and reports. A free AI assistant such as ChatGPT, Microsoft Copilot or Google Gemini can draft these in minutes.",
            "AI is good at first drafts, summaries, checklists, schedules, translating a flyer into plain words, and brainstorming ideas. It is not good at knowing your neighbors, judging what your community really needs or keeping private stories safe.",
            "A good leader uses AI to free up time for the human work: listening, building trust and showing up."
          ],
          words: [["Nonprofit", "an organization that serves a mission instead of making profit for owners."], ["Draft", "a first version you will improve."]],
          slides: [
            { title: "Where leaders spend time", bullets: ["Flyers, emails and meeting notes", "Sign-up lists and reports"] },
            { title: "AI is good at", bullets: ["First drafts and summaries", "Checklists and schedules", "Plain-language rewrites and ideas"] },
            { title: "AI is not good at", bullets: ["Knowing your neighbors", "Judging real community needs", "Keeping private stories safe"] }
          ],
          tryIt: "Write down three tasks that take your group the most time each month. Next to each, write how AI could help with a first draft.",
          youCanNow: "spot tasks in your group that AI can speed up, and the ones that need people.",
          quickCheck: [
            { objective: "O1", q: "Which is AI good at for a community group?", options: ["Writing a first draft of meeting notes", "Knowing your neighbors", "Judging what your community needs", "Keeping private stories safe"], answer: 0, why: "AI is good at drafts and summaries; people know the community." },
            { objective: "O1", q: "AI saves you three hours a week on paperwork. What is the best use of that time?", options: ["More paperwork", "Listening to families and building trust", "Letting AI talk to families for you", "Nothing"], answer: 1, why: "Leaders use AI to free time for human work like listening and showing up." }
          ]
        },
        {
          objectives: ["O2"],
          title: "A clear mission and a measurable goal",
          minutes: 5,
          goal: "Write a one-sentence mission and one measurable goal with AI's help.",
          text: [
            "A mission says why your group exists in one sentence: who you serve, what you do and why it matters. Example: \"We make sure no family on the East Side goes hungry by running a weekly free food pantry.\"",
            "A goal says what you will achieve and by when, in a way you can count. \"Help more people\" is not measurable. \"Serve 150 families a month by June\" is.",
            "Ask AI: \"Here is what our group does: [describe]. Write three one-sentence mission statements in plain words, and two measurable goals for the next six months.\" Then choose and edit with your team so the words sound like your community."
          ],
          steps: ["Describe who you serve, what you do and why.", "Ask AI for three mission options and two measurable goals.", "Choose one of each with your team.", "Edit so it sounds like your community."],
          words: [["Mission", "one sentence that says why your group exists."], ["Measurable goal", "a goal you can count and check by a date."]],
          slides: [
            { title: "Mission: why you exist", bullets: ["Who you serve", "What you do", "Why it matters"] },
            { title: "Goal: what you will achieve", bullets: ["Not measurable: \"Help more people\"", "Measurable: \"Serve 150 families a month by June\""] },
            { title: "Let AI draft, then decide together", bullets: ["Ask for three missions and two goals", "Choose and edit with your team"] }
          ],
          tryIt: "Ask an AI assistant for three mission statements and two measurable goals for your group. Pick one of each and edit them in your own words.",
          youCanNow: "write a clear mission and a measurable goal for your group.",
          quickCheck: [
            { objective: "O2", q: "What makes a goal measurable?", options: ["It sounds inspiring", "It is very long", "You can count it by a date", "It uses big words"], answer: 2, why: "A measurable goal says what you will achieve and by when, in a way you can count." },
            { objective: "O2", q: "AI's mission statement uses words your members would never say. What do you do?", options: ["Use it anyway", "Ask AI for a longer one", "Drop the mission", "Edit it with your team so it sounds like your community"], answer: 3, why: "The mission should sound like your community, so you edit it together." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Planning a program or event with AI",
          minutes: 5,
          goal: "Use AI to make a simple timeline and task list for a program or event.",
          text: [
            "Once you have a goal, plan the work. AI can turn a goal into a timeline (what happens when) and a task list (who does what).",
            "Example prompt: \"We are holding a back-to-school supply giveaway for 100 kids on August 10 at the community center. Make a simple 6-week timeline and a task list with three volunteer roles. Use short sentences.\"",
            "Review it with your team. Remove steps that do not fit your community, add what AI missed (like permits, translation or rides for elders), and put a name and date by each task."
          ],
          steps: ["Give AI the event, the date, the place and how many people.", "Ask for a timeline and a task list.", "Review it with your team and add what is missing.", "Put a name and a date by each task."],
          words: [["Timeline", "a list of what happens when, in order."], ["Task list", "a list of jobs with who will do each one."]],
          slides: [
            { title: "From goal to plan", bullets: ["Timeline: what happens when", "Task list: who does what"] },
            { title: "Example prompt", bullets: ["Back-to-school giveaway, 100 kids, Aug 10", "6-week timeline and task list", "Three volunteer roles, short sentences"] },
            { title: "Make it yours", bullets: ["Remove what does not fit", "Add what AI missed: permits, translation, rides", "Name and date for each task"] }
          ],
          tryIt: "Ask AI for a timeline and task list for one program or event your group could hold. Add one thing AI missed and put a name by each task.",
          youCanNow: "turn a goal into a timeline and task list with AI and your team.",
          quickCheck: [
            { objective: "O3", q: "What is a task list?", options: ["A list of who does what", "A list of donors", "A budget", "A mission statement"], answer: 0, why: "A task list shows each job and who will do it." },
            { objective: "O3", q: "AI's plan for a cookout does not mention a permit for the park. What do you do?", options: ["Skip it; AI knows best", "Add checking the permit to the task list with a name and date", "Cancel the cookout", "Ask AI to apply for it"], answer: 1, why: "You add what AI missed, like permits, and give the task an owner and date." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Leading and planning with AI",
        questions: [
          { objective: "O1", q: "Which task is AI good at for a community group?", options: ["Knowing what your neighbors need", "Drafting a flyer", "Building trust with families", "Keeping private stories safe"], answer: 1, why: "AI is good at first drafts; people do the relationship work." },
          { objective: "O2", q: "Which is a mission statement?", options: ["\"Serve 150 families by June\"", "\"Meeting Tuesday at 6\"", "\"We make sure no East Side family goes hungry by running a weekly free food pantry.\"", "\"Buy more chairs\""], answer: 2, why: "A mission says who you serve, what you do and why." },
          { objective: "O2", q: "Which goal is measurable?", options: ["\"Help more people\"", "\"Do good\"", "\"Be better\"", "\"Serve 150 families a month by June\""], answer: 3, why: "It can be counted and checked by a date." },
          { objective: "O3", q: "AI's event plan forgot rides for elders. What do you do?", options: ["Add it to the plan", "Follow the AI plan exactly", "Cancel the event", "Ask AI to remove elders"], answer: 0, why: "You know your community; add what AI missed." },
          { objective: "O3", q: "What should be next to every task on your list?", options: ["An emoji", "A name and a date", "A password", "Nothing"], answer: 1, why: "Names and dates make sure tasks get done." }
        ]
      }
    },
    {
      name: "Chapter 2: People, money and trust",
      lessons: [
        {
          objectives: ["O4"],
          title: "Organizing volunteers, and keeping everyone safe",
          minutes: 5,
          goal: "Write clear volunteer role descriptions and safety steps.",
          text: [
            "Volunteers stay when they know what to do. AI can write short role descriptions: what the job is, how long it takes, what skills help and who to ask for help. It can also draft a sign-up message and reminder texts.",
            "If your program serves children or vulnerable adults, safety comes first. Common practices include background checks for volunteers, a rule that two adults are present instead of one adult alone with a child, and clear rules for phone and social media contact. Follow your organization's policy and any state rules, and ask your insurer or a lawyer if you are unsure.",
            "Keep volunteer and client information private. Do not paste names, phone numbers or personal stories into AI tools; use roles and placeholders instead."
          ],
          steps: ["Ask AI for short role descriptions for each volunteer job.", "Add safety steps if minors or vulnerable adults are involved.", "Follow your organization's policy and state rules.", "Use placeholders, never real names or numbers, in AI prompts."],
          words: [["Background check", "a check of a person's records before they work with children or vulnerable people."], ["Two-adult rule", "a common safety practice: at least two adults are present with children, never one alone."], ["Vulnerable adult", "an adult who may need extra protection, such as some elders or people with disabilities."]],
          slides: [
            { title: "Clear roles keep volunteers", bullets: ["What the job is and how long", "Helpful skills", "Who to ask for help"] },
            { title: "Safety with children", bullets: ["Background checks", "Two adults present, never one alone", "Rules for phone and social media contact"] },
            { title: "Follow the rules", bullets: ["Your organization's policy", "State rules", "Ask your insurer or a lawyer if unsure"] },
            { title: "Protect privacy", bullets: ["No real names or numbers in AI", "Use roles and placeholders"] }
          ],
          tryIt: "Ask AI to write three short volunteer role descriptions for your plan. If minors are involved, add the safety steps your organization requires.",
          youCanNow: "write clear volunteer roles and include the safety steps your group needs.",
          quickCheck: [
            { objective: "O4", q: "What should a volunteer role description include?", options: ["The volunteer's home address", "Only the job title", "What the job is, how long it takes and who to ask for help", "The volunteer's phone number"], answer: 2, why: "Clear roles say what to do, how long and who to ask." },
            { objective: "O4", q: "You want AI to draft a reminder text for volunteers. What do you paste in?", options: ["Every volunteer's name and phone number", "Their background check results", "Their home addresses", "The role, date and time, using placeholders for names"], answer: 3, why: "Use roles and placeholders, never real names or numbers, in AI prompts." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Finding grants and writing a grant summary",
          minutes: 6,
          goal: "Find one grant opportunity and draft a five-sentence summary of your project.",
          text: [
            "Grants are money given for a purpose that you do not pay back. Local sources often fit small groups best: community foundations, local businesses, banks, faith groups and city or county programs. Your library may offer free grant research help.",
            "Grants.gov lists federal grants. Most of them are for organizations, not individuals, and none give personal financial help. Applying through Grants.gov requires registering your organization, which takes time, so read the registration steps on Grants.gov and start early.",
            "AI can help you write a short project summary: the need, what you will do, who it helps, your measurable goal and the amount you are asking for. Every fact and number must be true and match your records. Read the funder's rules and use their questions, word limits and deadline."
          ],
          steps: ["Ask your library or community foundation about local grants.", "Search Grants.gov if your organization is ready for federal grants.", "Ask AI for a five-sentence summary: need, plan, who it helps, goal, amount.", "Check every fact and follow the funder's rules."],
          words: [["Grant", "money given for a purpose that you do not pay back."], ["Funder", "the group or agency that gives the grant."], ["Community foundation", "a local charity that gives grants to groups in its area."]],
          sources: [{ name: "Grants.gov: Grant eligibility", url: "https://www.grants.gov/learn-grants/grant-eligibility" }],
          slides: [
            { title: "Where small groups find grants", bullets: ["Community foundations", "Local businesses, banks, faith groups", "City or county programs; ask your library"] },
            { title: "Federal grants: Grants.gov", bullets: ["Mostly for organizations, not individuals", "Registration takes time: start early", "Read the steps on Grants.gov"] },
            { title: "A five-sentence summary", bullets: ["The need and your plan", "Who it helps and your goal", "The amount you ask for"] },
            { title: "Stay honest", bullets: ["Every fact must be true", "Follow the funder's rules and deadline"] }
          ],
          tryIt: "Find one grant your group could apply for (local or on Grants.gov). Ask AI to draft a five-sentence summary of your project, then check every fact.",
          youCanNow: "find a grant opportunity and draft an honest project summary.",
          quickCheck: [
            { objective: "O5", q: "What is a grant?", options: ["Money for a purpose that you do not pay back", "A loan with low interest", "A donation of food", "A tax form"], answer: 0, why: "A grant is money given for a purpose, not paid back." },
            { objective: "O5", q: "A funder allows 100 words, and AI wrote 180. What do you do?", options: ["Send all 180 words", "Cut it to fit the funder's 100-word limit", "Make it 200 words", "Skip the summary"], answer: 1, why: "Follow the funder's rules, including word limits." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Updating supporters and setting AI rules for your group",
          minutes: 5,
          goal: "Write a supporter update and five simple AI rules for your group.",
          text: [
            "Supporters give again when they see results. AI can turn your numbers into a short, warm update: \"This month we served 142 families and gave out 300 backpacks. Thank you!\" Share stories only with written permission, and change names if the person wants.",
            "Every group that uses AI should agree on a few simple rules. For example: 1) Never put names, addresses, phone numbers, health or immigration details of the people we serve into AI. 2) A person reads and checks everything before it goes out. 3) We do not let AI make decisions about who gets help. 4) We tell people when a message was mostly written by AI if they ask. 5) We use only approved, free or donated tools.",
            "Write your rules down, share them with volunteers and review them once a year."
          ],
          steps: ["Ask AI to turn your results into a short thank-you update.", "Use stories only with written permission.", "Write five AI rules with your team.", "Share the rules with volunteers and review them yearly."],
          words: [["Supporter", "someone who gives time, money or help to your group."], ["Policy", "a written set of rules your group agrees to follow."]],
          slides: [
            { title: "Updates keep supporters", bullets: ["Share real numbers", "Say thank you", "Stories only with written permission"] },
            { title: "Five simple AI rules", bullets: ["No private details of people we serve", "A person checks everything", "AI does not decide who gets help"] },
            { title: "Keep the rules alive", bullets: ["Be open about AI use if asked", "Use approved tools", "Share with volunteers; review yearly"] }
          ],
          tryIt: "Final task: put it together in a one-page program plan: mission, measurable goal, timeline, three volunteer roles with safety steps, a five-sentence grant summary and your group's five AI rules. Remove anything private before sharing.",
          youCanNow: "lead a community project with a clear plan and safe, honest AI use.",
          quickCheck: [
            { objective: "O6", q: "When can you share a family's story in an update?", options: ["Whenever it helps fundraising", "If you change one word", "Only with their written permission", "If the story is short"], answer: 2, why: "Stories are shared only with written permission." },
            { objective: "O6", q: "A board member suggests letting AI choose which families get help first. What does your AI rule say?", options: ["Yes, AI is fair", "Yes, if it is faster", "Only on busy days", "No; people make decisions about who gets help"], answer: 3, why: "AI does not make decisions about who gets help; people do." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: People, money and trust",
        questions: [
          { objective: "O4", q: "Your program serves children. Which is a common safety practice?", options: ["One adult alone with each child", "Volunteers text kids privately", "Background checks and two adults present", "No rules needed"], answer: 2, why: "Background checks and the two-adult rule are common protections; follow your organization's policy." },
          { objective: "O4", q: "Can you paste a client's name and story into AI to write a report?", options: ["Yes, always", "Only if it is short", "Yes, if the AI is free", "No; use placeholders and keep private details out"], answer: 3, why: "Protect the people you serve by keeping their details out of AI tools." },
          { objective: "O5", q: "Most funding on Grants.gov is for:", options: ["Organizations", "Personal bills", "Individuals' rent", "Buying cars"], answer: 0, why: "Grants.gov says most opportunities are for organizations, not individuals." },
          { objective: "O5", q: "AI wrote that your group served 500 families, but your records say 312. You:", options: ["Keep 500, it sounds better", "Change it to 312", "Remove all numbers", "Ask AI for a bigger number"], answer: 1, why: "Every fact in a grant or update must match your records." },
          { objective: "O6", q: "Which is a good AI rule for a community group?", options: ["AI decides who gets help", "Nobody checks AI writing", "A person reads and checks everything before it goes out", "Paste all client files into AI"], answer: 2, why: "Human review keeps your group accurate and trustworthy." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: AI for Nonprofit Leadership",
    questions: [
      { objective: "O1", q: "Which task is best kept for people, not AI?", options: ["Building trust with families", "Drafting a flyer", "Making a checklist", "Summarizing meeting notes"], answer: 0, why: "Relationships and trust are human work." },
      { objective: "O1", q: "Why should leaders use AI for drafts?", options: ["To replace the team", "To free up time for listening and showing up", "To avoid checking work", "To collect private data"], answer: 1, why: "AI saves writing time so leaders can focus on people." },
      { objective: "O2", q: "A mission statement says:", options: ["The meeting time", "Your bank balance", "Who you serve, what you do and why", "Your volunteers' phone numbers"], answer: 2, why: "That is the purpose of a mission." },
      { objective: "O2", q: "Which goal can you measure?", options: ["\"Make a difference\"", "\"Help a lot\"", "\"Be known\"", "\"Give 300 backpacks by August 10\""], answer: 3, why: "It has a number and a date." },
      { objective: "O2", q: "After AI suggests mission statements, you should:", options: ["Choose and edit with your team", "Use the first one unread", "Post all three", "Ignore your team"], answer: 0, why: "Your team makes sure it sounds like your community." },
      { objective: "O3", q: "A timeline shows:", options: ["Who donated", "What happens when, in order", "Your budget only", "Volunteers' addresses"], answer: 1, why: "A timeline orders the steps." },
      { objective: "O3", q: "Which detail should you give AI to plan an event?", options: ["Volunteers' phone numbers", "Families' addresses", "The event, date, place and number of people", "Your bank login"], answer: 2, why: "Those details help without sharing private information." },
      { objective: "O3", q: "AI's plan misses translation for Spanish-speaking families. You:", options: ["Follow AI exactly", "Cancel", "Remove those families", "Add translation to the plan"], answer: 3, why: "You add what your community needs." },
      { objective: "O4", q: "A good volunteer role description includes:", options: ["What the job is, how long and who to ask", "The volunteer's Social Security number", "Nothing", "Only the event name"], answer: 0, why: "Clear roles help volunteers succeed." },
      { objective: "O4", q: "The two-adult rule means:", options: ["Two volunteers share one phone", "At least two adults are present with children, never one alone", "Two adults sign every check", "Only two adults can volunteer"], answer: 1, why: "It is a common practice that protects children and volunteers." },
      { objective: "O4", q: "When you are unsure about safety rules for working with minors, you should:", options: ["Make up your own", "Skip them", "Follow your organization's policy and state rules, and ask your insurer or a lawyer", "Ask a volunteer's friend"], answer: 2, why: "Official policy and professionals give the right answer." },
      { objective: "O5", q: "A grant is:", options: ["A loan you pay back with interest", "A credit card", "A tax bill", "Money for a purpose that you do not pay back"], answer: 3, why: "Grants are not repaid." },
      { objective: "O5", q: "Which is a local place small groups often find grants?", options: ["A community foundation", "A pop-up ad", "A payday lender", "A text from a stranger"], answer: 0, why: "Community foundations give grants to local groups." },
      { objective: "O5", q: "About registering for federal grants on Grants.gov, it is wise to:", options: ["Wait until the day before the deadline", "Start early, because registration takes time", "Skip registration", "Pay a stranger to do it"], answer: 1, why: "Registration takes time, so start early." },
      { objective: "O5", q: "A five-sentence grant summary covers:", options: ["Only your name", "Your volunteers' phone numbers", "The need, the plan, who it helps, the goal and the amount", "A list of complaints"], answer: 2, why: "Those parts tell a funder what they need to know." },
      { objective: "O5", q: "Before sending a grant summary AI helped write, you:", options: ["Send it without reading", "Add bigger numbers", "Remove the deadline", "Check every fact and follow the funder's rules"], answer: 3, why: "Honesty and following rules protect your group." },
      { objective: "O6", q: "You want to share a family's story in a newsletter. You need:", options: ["Their written permission", "Nothing", "AI's permission", "A volunteer's opinion only"], answer: 0, why: "Stories are shared only with permission." },
      { objective: "O6", q: "Which is a good AI rule?", options: ["Put immigration details into AI", "Never put names, addresses or health details of people we serve into AI", "Let AI decide who gets food", "Never check AI writing"], answer: 1, why: "Private details stay out of AI tools." },
      { objective: "O6", q: "Should AI decide who receives help from your program?", options: ["Yes, always", "Yes, if it is free", "No; people make those decisions", "Only on weekends"], answer: 2, why: "Decisions about people's help need human judgment and fairness." },
      { objective: "O6", q: "How often should your group review its AI rules?", options: ["Never", "Every ten years", "Only after a problem", "About once a year"], answer: 3, why: "Tools change, so review your rules regularly." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Pre-Test: What Do You Already Know?",
    from: [
      0,
      3,
      5,
      8,
      9,
      11,
      14,
      16,
      17
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      {
        name: "Mission and goal",
        objective: "O2",
        notYet: "No mission, or the goal cannot be counted.",
        meets: "One-sentence mission with who, what and why, and one goal with a number and a date.",
        exceeds: "Edited with the team so it sounds like the community."
      },
      {
        name: "Timeline",
        objective: "O3",
        notYet: "No timeline, or tasks without names or dates.",
        meets: "A simple timeline with a name and date by every task.",
        exceeds: "Includes something AI missed, such as permits, translation or rides."
      },
      {
        name: "Volunteer roles and safety",
        objective: "O4",
        notYet: "Fewer than three roles, or no safety steps when minors are involved.",
        meets: "Three clear roles, with the organization's safety steps where needed.",
        exceeds: "Roles say how long the job takes and who to ask for help."
      },
      {
        name: "Grant summary",
        objective: "O5",
        notYet: "Missing parts, or facts that do not match records.",
        meets: "Five sentences: need, plan, who it helps, goal and amount, all checked.",
        exceeds: "Fits a real funder's word limit and questions."
      },
      {
        name: "AI rules and privacy",
        objective: "O6",
        notYet: "Fewer than five rules, or private information left in the plan.",
        meets: "Five clear AI rules, and no private information in the plan.",
        exceeds: "Rules include a yearly review and are ready to share with volunteers."
      }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Groups that adopt written AI rules within 30 days (follow-up survey)",
      "Groups that apply for at least one grant within 90 days, and grants won",
      "Groups that report more volunteers or people served after using their plan"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A smartphone, or a library or office computer",
      "A free AI assistant: Microsoft Copilot, ChatGPT or Google Gemini",
      "Facts about a real or practice program: who it serves, results and records",
      "Paper or a free document tool for the one-page plan",
      "About 60 minutes in total: lessons, practice, checks and the final task"
    ],
    facilitatorNotes: [
      "Have teams from the same group work together so the plan and AI rules are shared.",
      "Check every prompt for names, phone numbers, health or immigration details of the people served.",
      "For programs with minors, point to the organization's own safety policy; this course does not replace it.",
      "Bring a list of local community foundations and grant help at the library.",
      "Score the final task with the rubric, and give feedback on one Not yet row at a time."
    ]
  }
};
