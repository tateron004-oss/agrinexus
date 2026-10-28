"use strict";

// Koach Learn course (shared): "Strategies for Integrating AI into Your Organization" (also Digital Transformation with AI). Categories: Athletes, Small Business, Non Profits.
// Shape and rules: ../README.md; model: ../re-entry/reentry-ai-digital-confidence.js.

module.exports = {
  id: "ai-integration-strategy",
  category: "Athletes",
  name: "Strategies for Integrating AI into Your Organization",
  skills: "Checking AI readiness, Setting goals tied to the mission, Writing an AI use policy, Managing AI risk, Leading people through change, Building a 90-day roadmap",
  outcome: "write a 90-day AI integration plan for an organization: a readiness check, goals tied to its mission, a one-page AI use policy, a risk check, a training and communication plan, and a roadmap with owners and dates.",
  about: [
    "Using one AI tool is easy. Bringing AI into a whole organization, so that people use it well, safely and for the right reasons, takes a plan. This course gives you that plan, step by step.",
    "It is for athletes building a brand or business and the teams, academies and leagues around them, for small business owners, and for nonprofit leaders and boards. Examples include a youth basketball academy, a pro athlete's training and media business, a family restaurant and a community nonprofit.",
    "You will build a real 90-day AI plan for one organization as you go. Each lesson takes about five minutes and ends with a \"Try it now\" task. A knowledge check closes each chapter and a 20-question quiz closes the course."
  ],
  finalTask: "Write a 90-day AI integration plan for a real or practice organization (for example an athlete's brand business, a sports academy, a small business or a nonprofit). Include a readiness score, three goals tied to the mission, a one-page AI use policy, a risk table, a training and communication plan, and a roadmap with an owner and date for each step.",
  chapters: [
    {
      name: "Chapter 1: Getting ready for AI",
      lessons: [
        {
          title: "Checking your organization's AI readiness",
          minutes: 5,
          goal: "Score an organization's readiness for AI in five areas.",
          text: [
            "Before buying tools, check readiness. Many AI efforts fail not because the tool is bad but because the people, data or rules were not ready.",
            "Score five areas from 1 (not ready) to 5 (ready). Leadership: do leaders support it and set time aside? People: do staff, players or volunteers have basic digital skills? Data: is your information organized and stored safely? Processes: are your main tasks written down? Rules: do you have privacy and security rules?",
            "Low scores are not a reason to stop. They tell you where to start. An athlete's business with great social media skills but messy records might start by organizing files before using AI on them."
          ],
          steps: ["Score leadership, people, data, processes and rules from 1 to 5.", "Write one sentence of evidence for each score.", "Circle the two lowest scores.", "Note one fix for each low score."],
          words: [["Readiness", "how prepared an organization is to start something new."], ["Data", "the information an organization keeps, like schedules, records and files."]],
          slides: [
            { title: "Why check readiness", bullets: ["Tools rarely cause failure", "Unready people, data or rules do"] },
            { title: "Score five areas, 1 to 5", bullets: ["Leadership and people", "Data and processes", "Rules for privacy and security"] },
            { title: "Low scores show where to start", bullets: ["Fix the basics first", "Example: organize files before using AI on them"] }
          ],
          tryIt: "Pick a real or practice organization. Score its readiness in the five areas with one sentence of evidence each, and name the first fix for the two lowest.",
          youCanNow: "score an organization's AI readiness and find where to start."
        },
        {
          title: "Setting AI goals tied to the mission",
          minutes: 5,
          goal: "Write three measurable AI goals that serve the organization's mission.",
          text: [
            "AI should serve the mission, not the other way around. Start with what the organization exists to do: develop young athletes, grow a brand, serve meals, sell great products.",
            "Then ask where AI could help that mission: more time with athletes or clients, faster replies to families or customers, better use of data, lower costs. Turn each into a measurable goal: \"Cut weekly admin time for coaches from 6 hours to 3 by March.\"",
            "Use the SMART check: specific, measurable, achievable, relevant to the mission and time-bound. Three goals are enough for 90 days."
          ],
          steps: ["Write the mission in one sentence.", "List three ways AI could support it.", "Turn each into a SMART goal with a number and a date."],
          words: [["Mission", "the main purpose an organization exists for."], ["SMART goal", "a goal that is specific, measurable, achievable, relevant and time-bound."]],
          slides: [
            { title: "Mission first", bullets: ["AI serves the mission", "Not the other way around"] },
            { title: "Where AI can help", bullets: ["More time with athletes or clients", "Faster replies", "Lower costs, better use of data"] },
            { title: "SMART goals", bullets: ["Specific, measurable, achievable", "Relevant to the mission, time-bound", "Three goals for 90 days"] }
          ],
          tryIt: "Write the organization's mission in one sentence and three SMART AI goals that support it.",
          youCanNow: "set measurable AI goals that serve an organization's mission."
        },
        {
          title: "Writing a one-page AI use policy",
          minutes: 6,
          goal: "Write a short AI use policy that tells people what is allowed, what is not and who to ask.",
          text: [
            "An AI use policy is a short set of rules for how people in the organization use AI. Without one, people guess, and someone may paste private player, client or donor information into a free tool.",
            "Keep it to one page and cover: approved tools; what may never go into AI (health records, Social Security and bank numbers, private contracts, children's information, passwords); human review before anything AI-made is published or sent; honesty about AI use where it matters; and who to ask with questions.",
            "Add special rules for your field. Sports organizations should protect athlete health and performance data and minors' information. Nonprofits should protect donor and client records. Get legal advice for contracts, endorsements and data laws that apply to you."
          ],
          steps: ["List approved AI tools.", "List information that must never go into AI.", "Require a person to review AI output before it is sent or published.", "Say when AI use should be disclosed.", "Name a contact person for questions.", "Set a date to review the policy."],
          words: [["Policy", "a written rule everyone in an organization follows."], ["Human review", "a person checking AI output before it is used."]],
          slides: [
            { title: "Why a policy", bullets: ["People stop guessing", "Private data stays out of free tools"] },
            { title: "One page covers", bullets: ["Approved tools", "What never goes into AI", "Human review and who to ask"] },
            { title: "Field-specific rules", bullets: ["Sports: athlete health data, minors", "Nonprofits: donor and client records", "Legal advice for contracts and data laws"] }
          ],
          tryIt: "Write a one-page AI use policy for your organization with all six parts. Ask an AI assistant to check it for anything unclear, then edit it yourself.",
          youCanNow: "write a short AI use policy that protects people and data."
        }
      ],
      check: {
        title: "Knowledge Check 1: Getting ready for AI",
        questions: [
          { q: "Why check readiness before buying AI tools?", options: ["Tools are always bad", "It is required by law", "Unready people, data or rules cause most failures", "To spend more money"], answer: 2, why: "Readiness gaps, not tools, usually cause trouble." },
          { q: "An academy has messy, scattered records. What is a smart first step?", options: ["Organize the files before using AI on them", "Feed everything into AI as is", "Give up on AI", "Buy the most expensive tool"], answer: 0, why: "Organized data makes AI useful and safer." },
          { q: "Which is a SMART goal?", options: ["\"Use more AI\"", "\"Be modern\"", "\"Try stuff\"", "\"Cut coaches' weekly admin time from 6 hours to 3 by March\""], answer: 3, why: "It is specific, measurable and time-bound." },
          { q: "What should an AI use policy say about athlete health records?", options: ["Paste them anywhere", "They must never go into AI tools that are not approved for them", "Post them online", "Share them with sponsors"], answer: 1, why: "Health data is private and must be protected." },
          { q: "Who should check AI-made content before it is published?", options: ["Nobody", "A person", "The AI itself only", "A random follower"], answer: 1, why: "Human review is a core policy rule." }
        ]
      }
    },
    {
      name: "Chapter 2: Rolling out AI safely",
      lessons: [
        {
          title: "Managing AI risk with a simple framework",
          minutes: 5,
          goal: "Build a risk table for an AI use and assign a control to each risk.",
          text: [
            "The U.S. National Institute of Standards and Technology (NIST) publishes a free, voluntary AI Risk Management Framework. Its four core functions are Govern, Map, Measure and Manage. You can use them in plain language even in a small organization.",
            "Govern: who is responsible and what the rules are (your policy). Map: for each AI use, what could go wrong and who could be hurt. Measure: how you will notice problems, such as spot-checking answers. Manage: what you do about each risk, such as human review or not using AI for that task.",
            "Common AI risks: wrong facts, private data leaks, unfair treatment of people, copyright problems and damage to reputation. Write each in a risk table with how likely it is, how bad it would be, and the control."
          ],
          steps: ["List each planned AI use.", "For each, write what could go wrong and who could be hurt.", "Rate likelihood and impact: low, medium or high.", "Add a control for each risk.", "Name who checks that the control works."],
          words: [["NIST", "the U.S. National Institute of Standards and Technology, which publishes technical standards and guidance."], ["Risk table", "a list of risks with how likely and how serious each is, and what you will do about it."]],
          slides: [
            { title: "NIST AI RMF: four functions", bullets: ["Govern: roles and rules", "Map: what could go wrong", "Measure: how you notice", "Manage: what you do about it"] },
            { title: "Common AI risks", bullets: ["Wrong facts and data leaks", "Unfair treatment of people", "Copyright and reputation"] },
            { title: "A simple risk table", bullets: ["Risk, likelihood, impact", "Control and who checks it"] }
          ],
          sources: [{ name: "NIST AI Risk Management Framework", url: "https://www.nist.gov/itl/ai-risk-management-framework" }],
          tryIt: "Make a risk table for two AI uses in your plan, with at least three risks each, a likelihood and impact rating, a control and a person who checks it.",
          youCanNow: "map AI risks and assign controls using the four NIST functions."
        },
        {
          title: "Leading people through the change",
          minutes: 5,
          goal: "Write a training and communication plan that helps people adopt AI.",
          text: [
            "People worry about AI: Will it replace me? Will I look foolish? Is it allowed? Ignoring those worries slows everything down. Address them openly.",
            "Communicate the why (the mission and goals), the what (which tools and rules) and the what's in it for me (less admin, more time for coaching, clients or family). Name AI champions: one or two people who learn first and help others.",
            "Train in small doses: a 30-minute hands-on session per tool, a one-page cheat sheet of good prompts, and a place to ask questions. Celebrate early wins in team meetings."
          ],
          steps: ["Write a short message: why, what, and what is in it for them.", "Choose one or two AI champions.", "Plan 30-minute hands-on training sessions.", "Make a one-page prompt cheat sheet.", "Share early wins in meetings."],
          words: [["Change management", "helping people move from the old way of working to a new one."], ["AI champion", "a team member who learns first and helps others."]],
          slides: [
            { title: "Address the worries", bullets: ["Will it replace me?", "Will I look foolish?", "Is it allowed?"] },
            { title: "Communicate clearly", bullets: ["Why: mission and goals", "What: tools and rules", "What is in it for them"] },
            { title: "Train in small doses", bullets: ["30-minute hands-on sessions", "Prompt cheat sheet and AI champions", "Celebrate early wins"] }
          ],
          tryIt: "Write a five-sentence announcement to your team, players, staff or volunteers about the AI plan, and a training schedule for the first month.",
          youCanNow: "plan training and communication that helps people adopt AI."
        },
        {
          title: "Building the 90-day roadmap",
          minutes: 5,
          goal: "Turn goals, policy, risks and training into a 90-day roadmap with owners and dates.",
          text: [
            "A roadmap puts everything in order with dates. Split 90 days into three 30-day phases. Days 1-30: foundations (policy approved, files organized, champions trained). Days 31-60: pilots (one or two small AI uses tested with measures). Days 61-90: review and expand (decide what to keep, scale or stop).",
            "Every step needs an owner and a due date. A step with no owner usually does not happen.",
            "Plan a check-in every two weeks and a review at day 90 against your SMART goals. Then write the next 90-day plan. AI tools and rules change fast, so review the policy at least every six months."
          ],
          steps: ["Days 1-30: foundations.", "Days 31-60: pilots with measures.", "Days 61-90: review, then expand or stop.", "Give every step an owner and date.", "Schedule check-ins every two weeks and a day-90 review."],
          words: [["Roadmap", "a plan that shows steps in order with dates."], ["Owner", "the person responsible for getting a step done."]],
          slides: [
            { title: "Three 30-day phases", bullets: ["1-30: foundations", "31-60: pilots", "61-90: review and expand"] },
            { title: "Owners and dates", bullets: ["Every step has an owner", "Every step has a due date"] },
            { title: "Keep it alive", bullets: ["Check-ins every two weeks", "Day-90 review against goals", "Review the policy every six months"] }
          ],
          tryIt: "Final task: build your 90-day roadmap in a table with phase, step, owner and date, and attach your readiness score, goals, policy, risk table and training plan to complete your AI integration plan.",
          youCanNow: "write a complete 90-day plan to bring AI into an organization safely."
        }
      ],
      check: {
        title: "Knowledge Check 2: Rolling out AI safely",
        questions: [
          { q: "What are the four core functions of the NIST AI Risk Management Framework?", options: ["Buy, Build, Sell, Repeat", "Plan, Do, Check, Act", "Read, Write, Test, Ship", "Govern, Map, Measure, Manage"], answer: 3, why: "NIST names Govern, Map, Measure and Manage." },
          { q: "Is the NIST AI Risk Management Framework required by law for small organizations?", options: ["No, NIST says it is voluntary", "Yes, with heavy fines", "Only for athletes", "Only in Kenya"], answer: 0, why: "NIST describes it as intended for voluntary use." },
          { q: "A coach worries AI will replace them. What is the best response?", options: ["Ignore it", "Tell them to stop asking", "Explain openly how AI frees time for coaching and what will not change", "Hide the plan"], answer: 2, why: "Addressing worries openly speeds adoption." },
          { q: "What is an AI champion?", options: ["An AI that wins games", "A paid influencer", "The most expensive tool", "A team member who learns first and helps others"], answer: 3, why: "Champions spread skills and confidence." },
          { q: "A roadmap step has no owner. What usually happens?", options: ["It finishes early", "The AI does it", "It does not get done", "Nothing changes"], answer: 2, why: "Steps need an owner to happen." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Strategies for Integrating AI into Your Organization",
    questions: [
      { q: "Most AI efforts fail because:", options: ["The tools never work", "People, data or rules were not ready", "AI is illegal", "Computers are too slow"], answer: 1, why: "Readiness gaps cause most failures." },
      { q: "Which is one of the five readiness areas?", options: ["Data", "Team colors", "Office size", "Stock price"], answer: 0, why: "Leadership, people, data, processes and rules." },
      { q: "A low readiness score means:", options: ["Stop forever", "Ignore it", "Start by fixing that area", "Buy more tools"], answer: 2, why: "Low scores show where to start." },
      { q: "AI goals should be tied to:", options: ["The organization's mission", "What competitors post", "The newest trend", "Nothing in particular"], answer: 0, why: "AI serves the mission." },
      { q: "SMART stands for:", options: ["Simple, modern, automatic, rapid, technical", "Smart, mobile, AI, robot, tech", "Sales, marketing, admin, retail, tax", "Specific, measurable, achievable, relevant, time-bound"], answer: 3, why: "Those are the five SMART checks." },
      { q: "How many goals does the course suggest for 90 days?", options: ["Thirty", "Three", "One hundred", "Zero"], answer: 1, why: "Three goals keep the plan focused." },
      { q: "An AI use policy is:", options: ["A software license key", "A short set of rules for how people use AI", "An insurance plan", "A marketing post"], answer: 1, why: "It tells people what is allowed and not." },
      { q: "Which should never go into an unapproved AI tool?", options: ["A generic practice schedule", "A public event date", "A sample social post", "A minor athlete's health information"], answer: 3, why: "Health data and minors' information are highly private." },
      { q: "Where should an organization get advice on endorsement contracts and data laws?", options: ["A qualified lawyer", "A random AI chat", "A social media comment", "A competitor"], answer: 0, why: "Legal questions need a professional." },
      { q: "In NIST terms, deciding who is responsible and what the rules are is:", options: ["Map", "Measure", "Govern", "Manage"], answer: 2, why: "Govern covers roles and rules." },
      { q: "Listing what could go wrong with each AI use is:", options: ["Govern", "Manage", "Measure", "Map"], answer: 3, why: "Map identifies risks and who could be hurt." },
      { q: "Spot-checking AI answers weekly is an example of:", options: ["Govern", "Map", "Measure", "Mission"], answer: 2, why: "Measure is how you notice problems." },
      { q: "A risk table includes:", options: ["Only the tool's price", "Risk, likelihood, impact, control and who checks", "Player statistics", "Social media handles"], answer: 1, why: "Those columns make risks manageable." },
      { q: "Which is a common AI risk?", options: ["Unfair treatment of people", "Too much free time", "Better replies", "Lower costs"], answer: 0, why: "AI can treat people unfairly if not checked." },
      { q: "\"What's in it for me\" in change communication means:", options: ["Bonus pay only", "The vendor's profit", "How AI helps the people being asked to use it", "A legal clause"], answer: 2, why: "People adopt change when they see the benefit." },
      { q: "A good way to train staff on AI is:", options: ["Short hands-on sessions and a prompt cheat sheet", "One three-day lecture with no practice", "No training", "A memo with no examples"], answer: 0, why: "Small, hands-on doses work best." },
      { q: "Days 1-30 of the roadmap focus on:", options: ["Expanding everywhere", "The final review", "Firing staff", "Foundations: policy, files, champions"], answer: 3, why: "Foundations come first." },
      { q: "Days 31-60 of the roadmap focus on:", options: ["Writing the mission", "Small pilots with measures", "Nothing", "Buying every tool"], answer: 1, why: "The middle phase tests AI uses." },
      { q: "How often should check-ins happen during the 90 days?", options: ["Once a year", "Every two weeks", "Never", "Every hour"], answer: 1, why: "Regular check-ins keep the plan on track." },
      { q: "How often should the AI policy be reviewed?", options: ["Never", "Every ten years", "Only after a scandal", "At least every six months"], answer: 3, why: "AI tools and rules change fast." }
    ]
  }
};
