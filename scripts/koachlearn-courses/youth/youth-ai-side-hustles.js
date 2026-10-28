"use strict";

// Koach Learn course: Youth -> "AI for Entrepreneurship and Side Hustles (Youth)". Skill-building course for teens about 13-18: by the end the student can DO the skill in `outcome`.
// Two chapters of three micro-lessons; a knowledge check closes each chapter; a 20-question quiz closes the course. Shape: scripts/koachlearn-courses/README.md.

module.exports = {
  id: "youth-ai-side-hustles",
  category: "Youth",
  name: "AI for Entrepreneurship and Side Hustles (Youth)",
  skills: "Finding a side hustle idea that fits you, Checking youth work rules and getting a parent's OK, Pricing a service, Making a simple flyer with AI, Tracking money in and out, Treating customers well",
  outcome: "plan a small, safe side hustle with a parent's or guardian's OK: choose an idea that fits your skills, set a fair price, make a simple flyer with AI's help, and track every dollar you earn and spend.",
  about: [
    "This course is for teens about 13 to 18 who want to earn some money of their own: pet sitting, tutoring younger kids, lawn care, making custom art, editing videos for local groups, or selling crafts.",
    "You will find an idea that fits your skills and schedule, check the rules for young workers, set a price, make a flyer, track your money and learn how to treat customers so they come back. AI is your planning partner the whole way.",
    "Important: talk with a parent or guardian before you start, and let them handle any money apps, contracts or online selling accounts that need an adult. Check each AI tool's age rule and keep school first. Each lesson is about five minutes and ends with a \"Try it now\" task."
  ],
  finalTask: "Make a one-page side hustle plan and show it to a parent or guardian: your service and who it is for, your price and why, a flyer made with AI's help (with no home address on it), a simple money tracker with columns for date, money in, money out and notes, and two safety rules you will follow.",
  chapters: [
    {
      name: "Chapter 1: Picking and planning your side hustle",
      lessons: [
        {
          title: "Finding an idea that fits you",
          minutes: 5,
          goal: "Pick a side hustle idea that fits your skills, time and neighborhood.",
          text: [
            "The best side hustle uses something you already do well and solves a problem for someone nearby. Good at math? Tutor younger kids. Love animals? Pet sit or walk dogs. Good with video? Edit clips for a local team or church.",
            "Ask AI: \"I am 15, I have 5 hours a week, I am good at drawing and video games, and I live near a park. Give me 10 side hustle ideas that are safe for a teen.\" Then pick ideas that fit your real time and school schedule.",
            "Check that there are people who want it. Ask three neighbors, family friends or classmates: \"Would you pay for this?\""
          ],
          steps: ["List your skills and the hours you really have.", "Ask AI for 10 safe ideas that match.", "Cross out ideas that do not fit school or your schedule.", "Ask three people if they would pay for your top idea."],
          words: [["Side hustle", "a small way to earn money outside school or a main job."], ["Customer", "the person who pays for what you offer."]],
          slides: [
            { title: "Start with what you do well", bullets: ["Math: tutoring", "Animals: pet sitting", "Video: editing for local groups"] },
            { title: "Ask AI for ideas", bullets: ["Your age, skills and hours", "\"Safe for a teen\"", "Cross out what clashes with school"] },
            { title: "Check people want it", bullets: ["Ask three people", "\"Would you pay for this?\""] }
          ],
          tryIt: "Write your skills and the hours you really have each week. Ask AI for 10 safe side hustle ideas, pick your top one, and ask three people if they would pay for it.",
          youCanNow: "choose a side hustle idea that fits you and that people want."
        },
        {
          title: "Rules, safety and your parent or guardian",
          minutes: 5,
          goal: "Check the youth work rules and agree on safety rules with a parent or guardian.",
          text: [
            "Some work has age rules. Under federal law, casual babysitting and small chores around private homes are not covered by the child labor rules, and work for a business wholly owned by your parents has special rules. Most other jobs need you to be 14 or older, and no one under 18 may do hazardous work. States can have stricter rules, so check your state's labor office.",
            "Money rules: if your net earnings from self-employment are $400 or more in a year, the IRS says you must file and pay self-employment tax, no matter how old you are. Ask a parent or guardian to help you keep records and check irs.gov.",
            "Safety rules matter most: a parent or guardian knows where you are and who you are working for, you meet new customers with an adult, you never go into a stranger's home alone, and you never post your home address online. Many payment apps and selling sites require an adult, so let your parent or guardian handle them."
          ],
          steps: ["Check the federal youth work rules and your state's rules.", "Show your plan to a parent or guardian.", "Agree on safety rules together.", "Let an adult handle payment apps and selling accounts."],
          words: [["Self-employed", "working for yourself instead of for a boss."], ["Net earnings", "money you made minus what you spent to make it."]],
          sources: [
            { name: "U.S. Department of Labor Fact Sheet #43: Child labor rules for nonagricultural jobs", url: "https://www.dol.gov/agencies/whd/fact-sheets/43-child-labor-non-agriculture" },
            { name: "IRS: Self-employment tax (Social Security and Medicare taxes)", url: "https://www.irs.gov/businesses/small-businesses-self-employed/self-employment-tax-social-security-and-medicare-taxes" }
          ],
          slides: [
            { title: "Youth work rules", bullets: ["Casual babysitting and home chores: not covered by federal child labor rules", "Most other jobs: 14 and up", "No hazardous work under 18", "Check your state's rules"] },
            { title: "Money rules", bullets: ["IRS: $400+ net self-employment earnings means filing", "Age does not matter", "Keep records with a parent's help"] },
            { title: "Safety first", bullets: ["An adult knows where you are", "Meet new customers with an adult", "Never post your home address"] }
          ],
          tryIt: "Look up your state's youth work rules and read the IRS self-employment tax page with a parent or guardian. Write three safety rules you both agree on.",
          youCanNow: "check the rules for your side hustle and set safety rules with a parent or guardian."
        },
        {
          title: "Setting a fair price",
          minutes: 5,
          goal: "Set a price that covers your costs, pays you fairly and fits your customers.",
          text: [
            "To set a price, look at three things: what it costs you (supplies, travel), what similar teens or local services charge, and how much your time is worth.",
            "Ask AI to help you think, not to decide: \"I walk dogs for 30 minutes. Help me think about a fair price for a teen in a small town. What questions should I ask?\" Then ask real people what they pay locally, because AI does not know your neighborhood.",
            "Write your price clearly, for example \"Dog walk, 30 minutes\" with the amount. Keep it simple and the same for everyone."
          ],
          steps: ["Add up your costs per job.", "Ask people what similar services cost locally.", "Decide what your time is worth.", "Write one clear price for each service."],
          words: [["Cost", "what you spend to do the job."], ["Profit", "money left after you pay your costs."]],
          slides: [
            { title: "Three things set your price", bullets: ["Your costs", "What others charge locally", "What your time is worth"] },
            { title: "AI helps you think", bullets: ["Ask what questions to consider", "Ask real people local prices", "AI does not know your neighborhood"] },
            { title: "Keep it clear", bullets: ["One price per service", "Same for everyone"] }
          ],
          tryIt: "List your costs for one job, ask two people what they pay for something similar, and write one clear price for your service.",
          youCanNow: "set a fair, clear price for your side hustle."
        }
      ],
      check: {
        title: "Knowledge Check 1: Picking and planning your side hustle",
        questions: [
          { q: "The best side hustle idea usually:", options: ["Takes all your school time", "Is whatever is popular online", "Uses a skill you have and solves a nearby problem", "Needs expensive equipment"], answer: 2, why: "Skills plus a real need make a good idea." },
          { q: "How do you check that people want your idea?", options: ["Ask a few people if they would pay for it", "Assume they do", "Ask AI only", "Post your address online"], answer: 0, why: "Real people's answers show real demand." },
          { q: "According to the IRS, self-employment tax rules:", options: ["Only apply in summer", "Only apply to adults", "Never apply to teens", "Apply no matter how old you are"], answer: 3, why: "The IRS says the rules apply regardless of age." },
          { q: "Which is a good safety rule?", options: ["Go to a stranger's home alone", "Meet new customers with an adult", "Post your home address on your flyer", "Keep your plans secret"], answer: 1, why: "Having an adult with you keeps you safe." },
          { q: "Why ask real people about local prices?", options: ["AI is always right", "AI does not know your neighborhood", "Prices are the same everywhere", "It is required by law"], answer: 1, why: "Local people know local prices." }
        ]
      }
    },
    {
      name: "Chapter 2: Running your side hustle",
      lessons: [
        {
          title: "Making a simple flyer with AI",
          minutes: 5,
          goal: "Write and design a clear flyer for your service.",
          text: [
            "A flyer tells people what you do, how much it costs and how to reach you. AI can help with the words: \"Write a short, friendly flyer for a teen dog-walking service. Include a headline, 3 bullet points and a call to action.\"",
            "Design it in a free tool like Canva, Google Docs or Google Slides. Use one big headline, short lines and easy-to-read colors.",
            "Safety: never put your home address on a flyer. Use a parent's or guardian's phone number or email, or a contact they approve. Ask before you post flyers on boards in stores, libraries or community centers."
          ],
          steps: ["Ask AI for a headline, 3 bullets and a call to action.", "Edit the words so they sound like you.", "Design it in a free tool.", "Use a contact a parent or guardian approves, never your address."],
          words: [["Call to action", "a line that tells people what to do next, like \"Text to book a walk\"."], ["Headline", "the big title at the top."]],
          slides: [
            { title: "A flyer says", bullets: ["What you do", "How much it costs", "How to reach you"] },
            { title: "AI writes, you edit", bullets: ["Headline, 3 bullets, call to action", "Make it sound like you", "Design it in Canva or Google Docs"] },
            { title: "Stay safe", bullets: ["No home address", "Use a contact your parent approves", "Ask before posting flyers"] }
          ],
          tryIt: "Ask AI to write flyer text for your service. Edit it so it sounds like you, design it in a free tool, and add a contact your parent or guardian approves.",
          youCanNow: "make a clear, safe flyer for your side hustle."
        },
        {
          title: "Tracking money in and money out",
          minutes: 5,
          goal: "Set up a simple money tracker and use it for every job.",
          text: [
            "Business owners track every dollar. A simple tracker has four columns: date, money in, money out, and notes (who paid, what you bought).",
            "Make it in Google Sheets, Microsoft Excel, or a paper notebook. AI can help: \"Make a simple money tracker table for a teen pet-sitting business with a total at the bottom.\" Never type bank or card numbers into AI.",
            "Look at it every week. Money in minus money out is your profit. Your records also help a parent or guardian with any tax questions."
          ],
          steps: ["Make four columns: date, money in, money out, notes.", "Write every job and every purchase the same day.", "Add a total row.", "Check it weekly: money in minus money out is profit."],
          words: [["Spreadsheet", "a table on a computer, like Google Sheets or Excel."], ["Profit", "money in minus money out."]],
          slides: [
            { title: "Track every dollar", bullets: ["Date", "Money in", "Money out", "Notes"] },
            { title: "Free tools", bullets: ["Google Sheets or Excel", "A paper notebook works too", "Never put bank numbers in AI"] },
            { title: "Check weekly", bullets: ["Money in minus money out = profit", "Records help with tax questions"] }
          ],
          tryIt: "Make a money tracker with the four columns. Add two pretend or real jobs and one purchase, and work out your profit.",
          youCanNow: "track your side hustle's money and know your profit."
        },
        {
          title: "Treating customers well",
          minutes: 5,
          goal: "Write clear, polite messages and handle a problem with a customer.",
          text: [
            "Customers come back, and tell friends, when you are on time, polite and honest. Confirm each job: day, time, price and what you will do.",
            "AI can help you write messages, with your parent or guardian copied on them: \"Write a polite message confirming a dog walk on Saturday at 10 am for the agreed price.\" If something goes wrong, say sorry, explain what you will do to fix it, and keep your promise.",
            "If a customer is rude, asks you to do something unsafe or does not pay, stop and tell your parent or guardian. You do not have to handle it alone."
          ],
          steps: ["Confirm day, time, price and task before every job.", "Be on time and do what you promised.", "If something goes wrong: say sorry, say your fix, do it.", "Unsafe or unpaid? Tell your parent or guardian."],
          words: [["Confirm", "check and agree on details before the job."], ["Review", "what a customer says about your work."]],
          slides: [
            { title: "Customers come back when you are", bullets: ["On time", "Polite", "Honest"] },
            { title: "Confirm every job", bullets: ["Day and time", "Price", "What you will do"] },
            { title: "When things go wrong", bullets: ["Say sorry and give your fix", "Unsafe or unpaid? Tell your parent or guardian"] }
          ],
          tryIt: "Final task: make your one-page side hustle plan: service and customer, price and why, your flyer, your money tracker, and two safety rules. Show it to a parent or guardian and ask what they would change.",
          youCanNow: "plan and run a small, safe side hustle with AI as your helper."
        }
      ],
      check: {
        title: "Knowledge Check 2: Running your side hustle",
        questions: [
          { q: "What should never be on your flyer?", options: ["Your price", "A call to action", "What you do", "Your home address"], answer: 3, why: "Your home address puts your safety at risk." },
          { q: "What is a call to action?", options: ["A line telling people what to do next", "A phone ringtone", "A type of price", "A school rule"], answer: 0, why: "It tells customers how to book you." },
          { q: "A simple money tracker has columns for:", options: ["Passwords", "Only your favorite songs", "Date, money in, money out and notes", "Friends' names only"], answer: 2, why: "Those four columns track every dollar." },
          { q: "Profit is:", options: ["Your price", "All money you received", "Money you spent", "Money in minus money out"], answer: 3, why: "Profit is what is left after costs." },
          { q: "A customer asks you to do something unsafe. You:", options: ["Do it to keep the customer", "Argue online", "Stop and tell your parent or guardian", "Ignore it and keep working"], answer: 2, why: "Your safety matters more than any job." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: AI for Entrepreneurship and Side Hustles (Youth)",
    questions: [
      { q: "A side hustle is:", options: ["A dance move", "A small way to earn money outside school or a main job", "A school club", "A type of test"], answer: 1, why: "It is extra work you do on your own time." },
      { q: "A good AI prompt for side hustle ideas includes:", options: ["Your age, skills and hours, and \"safe for a teen\"", "Your home address", "Your bank number", "Nothing"], answer: 0, why: "Those details get ideas that fit you." },
      { q: "An idea clashes with your school schedule. You should:", options: ["Do it anyway", "Skip school", "Cross it out and pick another", "Ask AI to do your homework"], answer: 2, why: "School comes first." },
      { q: "Under federal law, casual babysitting:", options: ["Is not covered by the child labor rules", "Needs you to be 18", "Is banned for teens", "Requires a license"], answer: 0, why: "The Department of Labor says casual babysitting is not covered by the federal rules." },
      { q: "Your state's youth work rule is stricter than federal law. You follow:", options: ["Your friend's rule", "The easier rule", "No rule", "The stricter rule"], answer: 3, why: "When both apply, the stricter standard counts." },
      { q: "The IRS says you must file self-employment tax when net earnings are:", options: ["Over $1 million", "$400 or more", "Any amount over $1", "Never, for teens"], answer: 1, why: "The IRS threshold is $400 of net earnings, at any age." },
      { q: "Who should handle payment apps and selling accounts that need an adult?", options: ["A stranger", "Your parent or guardian", "A friend's older cousin", "Nobody"], answer: 1, why: "Many need an adult, and your parent or guardian should know about your money." },
      { q: "Your price should cover:", options: ["Your friend's costs", "Only what AI says", "Nothing", "Your costs and your time"], answer: 3, why: "A fair price pays your costs and your time." },
      { q: "Profit means:", options: ["Money left after costs", "All the money you took in", "Your expenses", "A tip"], answer: 0, why: "Profit = money in minus money out." },
      { q: "Why keep one clear price for each service?", options: ["It is illegal not to", "It confuses customers", "It is simple and fair to everyone", "AI requires it"], answer: 2, why: "Clear, equal prices build trust." },
      { q: "When AI writes your flyer, you should:", options: ["Let AI choose your price", "Post it without reading", "Add your home address", "Edit it so it sounds like you"], answer: 3, why: "Your voice makes the flyer yours." },
      { q: "Which contact belongs on a teen's flyer?", options: ["Your school schedule", "Your home address", "A contact your parent or guardian approves", "Your locker combination"], answer: 2, why: "Approved contacts keep you safe." },
      { q: "Before posting flyers in a store or library you should:", options: ["Tape them anywhere", "Ask permission", "Cover other flyers", "Skip asking"], answer: 1, why: "Places have rules about their boards." },
      { q: "Which free tool can hold a money tracker?", options: ["Google Sheets", "A music app", "A game console", "A photo filter"], answer: 0, why: "Spreadsheets like Google Sheets are free." },
      { q: "What should you never type into an AI tool?", options: ["\"Write a flyer\"", "\"Make a money tracker table\"", "Bank or card numbers", "\"Give me ideas\""], answer: 2, why: "Bank and card numbers are private." },
      { q: "How often should you check your tracker?", options: ["Every week", "Once a year", "Never", "Only when you lose money"], answer: 0, why: "Weekly checks show how you are doing." },
      { q: "Before every job you should confirm:", options: ["Your favorite snack", "Only the price", "Nothing", "Day, time, price and task"], answer: 3, why: "Confirming avoids surprises." },
      { q: "You were late to a job. The best response is:", options: ["Blame the customer", "Say sorry, explain your fix and keep your promise", "Ignore it", "Charge more"], answer: 1, why: "Owning mistakes keeps customers." },
      { q: "A customer does not pay. You should:", options: ["Go to their house alone to demand money", "Tell your parent or guardian", "Post about them online", "Keep working for free"], answer: 1, why: "An adult can help handle it safely." },
      { q: "Who should see your side hustle plan before you start?", options: ["Only AI", "Nobody", "Only strangers online", "A parent or guardian"], answer: 3, why: "A parent or guardian helps with safety, rules and money." }
    ]
  }
};
