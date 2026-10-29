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
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Teens about 13 to 18 in the United States who want to earn some money of their own through pet sitting, tutoring, lawn care, custom art, video editing for local groups or selling crafts.",
    startingPoint: "Have skills and hobbies others might pay for, and may have done odd jobs for family or neighbors. Few have set a price, made a flyer, tracked money in and out, or checked youth work, tax and safety rules.",
    gap: "Teens who start a side hustle without a plan can underprice, lose track of money, miss tax and youth work rules, or put themselves at risk with strangers. A simple plan made with a parent or guardian helps them earn safely, learn real business skills and build confidence.",
    constraints: [
      "A parent or guardian approves the plan and handles payment apps, contracts and selling accounts that need an adult",
      "Youth work and tax rules differ by state and change; learners check their state labor office and irs.gov",
      "Safety: no home address online or on flyers; new customers met with an adult",
      "Privacy: no bank or card numbers in AI tools",
      "School comes first; limited hours each week"
    ],
    prerequisites: "None."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Given your skills and the hours you really have", action: "choose a safe side hustle idea that fits your schedule and check that people would pay for it", standard: "asking at least three people" },
    { id: "O2", condition: "With a parent or guardian", action: "check the federal and state youth work rules and the IRS self-employment tax rule, and agree on safety rules", standard: "with at least two safety rules you both agree on" },
    { id: "O3", condition: "For one service", action: "set a fair price that covers your costs and your time and fits local prices", standard: "checked with real people, not only AI" },
    { id: "O4", condition: "Using AI and a free design tool", action: "create a flyer with a headline, three short points, a price and a call to action", standard: "with no home address and a contact your parent or guardian approves" },
    { id: "O5", condition: "For every job and purchase", action: "track money in and money out in a four-column tracker and calculate your profit", standard: "recording each entry the same day and checking it weekly" },
    { id: "O6", condition: "With each customer", action: "confirm each job's details in a polite message and respond to problems", standard: "telling your parent or guardian about anything unsafe or unpaid" }
  ],
  chapters: [
    {
      name: "Chapter 1: Picking and planning your side hustle",
      lessons: [
        {
          objectives: ["O1"],
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
          youCanNow: "choose a side hustle idea that fits you and that people want.",
          quickCheck: [
            { objective: "O1", q: "What makes a strong side hustle idea?", options: ["The idea that sounds coolest online", "It uses a skill you have and solves a problem for someone nearby", "The one that needs the most hours", "Anything a friend is doing"], answer: 1, why: "The best side hustle uses something you already do well and solves a nearby problem." },
            { objective: "O1", q: "You love your idea, but no one you ask would pay for it. What do you do?", options: ["Start anyway and hope", "Raise the price", "Keep asking until someone says yes", "Try another idea from your list"], answer: 3, why: "Asking people checks demand; if no one would pay, pick another idea." }
          ]
        },
        {
          objectives: ["O2"],
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
          youCanNow: "check the rules for your side hustle and set safety rules with a parent or guardian.",
          quickCheck: [
            { objective: "O2", q: "Under federal law, what kind of work may no one under 18 do?", options: ["Tutoring", "Pet sitting", "Hazardous work", "Making art"], answer: 2, why: "Federal law bars anyone under 18 from hazardous work." },
            { objective: "O2", q: "A new customer asks you to come alone to their home to meet. What do you do?", options: ["Meet them with a parent or guardian, who knows where you are", "Go alone to be polite", "Send them your home address", "Ask them to pay first"], answer: 0, why: "Meet new customers with an adult and never go into a stranger's home alone." }
          ]
        },
        {
          objectives: ["O3"],
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
          youCanNow: "set a fair, clear price for your side hustle.",
          quickCheck: [
            { objective: "O3", q: "Which three things help you set a price?", options: ["Your costs, local prices and what your time is worth", "Your friend's guess only", "The highest price you can find online", "Whatever AI says"], answer: 0, why: "A fair price covers your costs, fits local prices and pays you for your time." },
            { objective: "O3", q: "AI suggests a price for lawn mowing. What do you do before you use it?", options: ["Use it right away", "Double it", "Charge each customer differently", "Ask real people what they pay locally"], answer: 3, why: "AI does not know your neighborhood, so check local prices with real people." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Picking and planning your side hustle",
        questions: [
          { objective: "O1", q: "The best side hustle idea usually:", options: ["Takes all your school time", "Is whatever is popular online", "Uses a skill you have and solves a nearby problem", "Needs expensive equipment"], answer: 2, why: "Skills plus a real need make a good idea." },
          { objective: "O1", q: "How do you check that people want your idea?", options: ["Ask a few people if they would pay for it", "Assume they do", "Ask AI only", "Post your address online"], answer: 0, why: "Real people's answers show real demand." },
          { objective: "O2", q: "According to the IRS, self-employment tax rules:", options: ["Only apply in summer", "Only apply to adults", "Never apply to teens", "Apply no matter how old you are"], answer: 3, why: "The IRS says the rules apply regardless of age." },
          { objective: "O2", q: "Which is a good safety rule?", options: ["Go to a stranger's home alone", "Meet new customers with an adult", "Post your home address on your flyer", "Keep your plans secret"], answer: 1, why: "Having an adult with you keeps you safe." },
          { objective: "O3", q: "Why ask real people about local prices?", options: ["AI is always right", "AI does not know your neighborhood", "Prices are the same everywhere", "It is required by law"], answer: 1, why: "Local people know local prices." }
        ]
      }
    },
    {
      name: "Chapter 2: Running your side hustle",
      lessons: [
        {
          objectives: ["O4"],
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
          youCanNow: "make a clear, safe flyer for your side hustle.",
          quickCheck: [
            { objective: "O4", q: "What is the headline on a flyer?", options: ["The contact number", "The big line at the top that says what you offer", "The small print at the bottom", "The price list"], answer: 1, why: "A flyer uses one big headline so people see what you offer fast." },
            { objective: "O4", q: "Your AI flyer text includes your home street. What do you do?", options: ["Leave it so people can find you", "Make the street name smaller", "Remove it and use a contact your parent or guardian approves", "Post the flyer online only"], answer: 2, why: "Never put your home address on a flyer; use an approved contact." }
          ]
        },
        {
          objectives: ["O5"],
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
          youCanNow: "track your side hustle's money and know your profit.",
          quickCheck: [
            { objective: "O5", q: "What goes in the \"money out\" column?", options: ["Tips you received", "Payments from customers", "Your profit", "What you spent, such as supplies or travel"], answer: 3, why: "Money out is what you spend; money in is what customers pay you." },
            { objective: "O5", q: "You want AI to help build your tracker. What do you leave out?", options: ["Your bank or card numbers", "The column names", "The word \"total\"", "Your type of business"], answer: 0, why: "Never type bank or card numbers into an AI tool." }
          ]
        },
        {
          objectives: ["O6"],
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
          youCanNow: "plan and run a small, safe side hustle with AI as your helper.",
          quickCheck: [
            { objective: "O6", q: "What should a job confirmation message include?", options: ["Your home address", "The day, time, price and task", "Your school schedule", "Your bank details"], answer: 1, why: "Confirming the day, time, price and task avoids mix-ups." },
            { objective: "O6", q: "You forgot to refill a pet's water bowl. What do you do?", options: ["Hide it", "Blame the pet", "Say sorry, explain your fix and do it", "Stop answering messages"], answer: 2, why: "Owning the mistake and fixing it keeps customers' trust." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Running your side hustle",
        questions: [
          { objective: "O4", q: "What should never be on your flyer?", options: ["Your price", "A call to action", "What you do", "Your home address"], answer: 3, why: "Your home address puts your safety at risk." },
          { objective: "O4", q: "What is a call to action?", options: ["A line telling people what to do next", "A phone ringtone", "A type of price", "A school rule"], answer: 0, why: "It tells customers how to book you." },
          { objective: "O5", q: "A simple money tracker has columns for:", options: ["Passwords", "Only your favorite songs", "Date, money in, money out and notes", "Friends' names only"], answer: 2, why: "Those four columns track every dollar." },
          { objective: "O5", q: "Profit is:", options: ["Your price", "All money you received", "Money you spent", "Money in minus money out"], answer: 3, why: "Profit is what is left after costs." },
          { objective: "O6", q: "A customer asks you to do something unsafe. You:", options: ["Do it to keep the customer", "Argue online", "Stop and tell your parent or guardian", "Ignore it and keep working"], answer: 2, why: "Your safety matters more than any job." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: AI for Entrepreneurship and Side Hustles (Youth)",
    questions: [
      { objective: "O1", q: "A side hustle is:", options: ["A dance move", "A small way to earn money outside school or a main job", "A school club", "A type of test"], answer: 1, why: "It is extra work you do on your own time." },
      { objective: "O1", q: "A good AI prompt for side hustle ideas includes:", options: ["Your age, skills and hours, and \"safe for a teen\"", "Your home address", "Your bank number", "Nothing"], answer: 0, why: "Those details get ideas that fit you." },
      { objective: "O1", q: "An idea clashes with your school schedule. You should:", options: ["Do it anyway", "Skip school", "Cross it out and pick another", "Ask AI to do your homework"], answer: 2, why: "School comes first." },
      { objective: "O2", q: "Under federal law, casual babysitting:", options: ["Is not covered by the child labor rules", "Needs you to be 18", "Is banned for teens", "Requires a license"], answer: 0, why: "The Department of Labor says casual babysitting is not covered by the federal rules." },
      { objective: "O2", q: "Your state's youth work rule is stricter than federal law. You follow:", options: ["Your friend's rule", "The easier rule", "No rule", "The stricter rule"], answer: 3, why: "When both apply, the stricter standard counts." },
      { objective: "O2", q: "The IRS says you must file self-employment tax when net earnings are:", options: ["Over $1 million", "$400 or more", "Any amount over $1", "Never, for teens"], answer: 1, why: "The IRS threshold is $400 of net earnings, at any age." },
      { objective: "O2", q: "Who should handle payment apps and selling accounts that need an adult?", options: ["A stranger", "Your parent or guardian", "A friend's older cousin", "Nobody"], answer: 1, why: "Many need an adult, and your parent or guardian should know about your money." },
      { objective: "O3", q: "Your price should cover:", options: ["Your friend's costs", "Only what AI says", "Nothing", "Your costs and your time"], answer: 3, why: "A fair price pays your costs and your time." },
      { objective: "O5", q: "Profit means:", options: ["Money left after costs", "All the money you took in", "Your expenses", "A tip"], answer: 0, why: "Profit = money in minus money out." },
      { objective: "O3", q: "Why keep one clear price for each service?", options: ["It is illegal not to", "It confuses customers", "It is simple and fair to everyone", "AI requires it"], answer: 2, why: "Clear, equal prices build trust." },
      { objective: "O4", q: "When AI writes your flyer, you should:", options: ["Let AI choose your price", "Post it without reading", "Add your home address", "Edit it so it sounds like you"], answer: 3, why: "Your voice makes the flyer yours." },
      { objective: "O4", q: "Which contact belongs on a teen's flyer?", options: ["Your school schedule", "Your home address", "A contact your parent or guardian approves", "Your locker combination"], answer: 2, why: "Approved contacts keep you safe." },
      { objective: "O4", q: "Before posting flyers in a store or library you should:", options: ["Tape them anywhere", "Ask permission", "Cover other flyers", "Skip asking"], answer: 1, why: "Places have rules about their boards." },
      { objective: "O5", q: "Which free tool can hold a money tracker?", options: ["Google Sheets", "A music app", "A game console", "A photo filter"], answer: 0, why: "Spreadsheets like Google Sheets are free." },
      { objective: "O5", q: "What should you never type into an AI tool?", options: ["\"Write a flyer\"", "\"Make a money tracker table\"", "Bank or card numbers", "\"Give me ideas\""], answer: 2, why: "Bank and card numbers are private." },
      { objective: "O5", q: "How often should you check your tracker?", options: ["Every week", "Once a year", "Never", "Only when you lose money"], answer: 0, why: "Weekly checks show how you are doing." },
      { objective: "O6", q: "Before every job you should confirm:", options: ["Your favorite snack", "Only the price", "Nothing", "Day, time, price and task"], answer: 3, why: "Confirming avoids surprises." },
      { objective: "O6", q: "You were late to a job. The best response is:", options: ["Blame the customer", "Say sorry, explain your fix and keep your promise", "Ignore it", "Charge more"], answer: 1, why: "Owning mistakes keeps customers." },
      { objective: "O6", q: "A customer does not pay. You should:", options: ["Go to their house alone to demand money", "Tell your parent or guardian", "Post about them online", "Keep working for free"], answer: 1, why: "An adult can help handle it safely." },
      { objective: "O2", q: "Who should see your side hustle plan before you start?", options: ["Only AI", "Nobody", "Only strangers online", "A parent or guardian"], answer: 3, why: "A parent or guardian helps with safety, rules and money." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Pre-Test: What Do You Already Know?",
    from: [
      0,
      3,
      5,
      7,
      8,
      11,
      13,
      16,
      17,
      19
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      {
        name: "Service and customer",
        objective: "O1",
        notYet: "The service or the customer is unclear.",
        meets: "Says what the service is, who it is for, and that at least three people said they would pay.",
        exceeds: "Also shows the idea fits the learner's real weekly hours."
      },
      {
        name: "Price",
        objective: "O3",
        notYet: "No price, or no reason for it.",
        meets: "One clear price that covers costs and time, checked with local people.",
        exceeds: "Shows the cost per job and how the price compares to local options."
      },
      {
        name: "Flyer",
        objective: "O4",
        notYet: "The flyer has a home address, or no price or contact.",
        meets: "A headline, short points, the price and an approved contact, with no home address.",
        exceeds: "The words were edited to sound like the learner, and the design is easy to read."
      },
      {
        name: "Money tracker",
        objective: "O5",
        notYet: "Missing columns or no way to see profit.",
        meets: "Date, money in, money out and notes, with a total that shows profit.",
        exceeds: "Has real or practice entries and a note on when it will be checked each week."
      },
      {
        name: "Safety rules",
        objective: "O2",
        notYet: "Fewer than two safety rules, or no parent or guardian review.",
        meets: "Two safety rules agreed with a parent or guardian, who has seen the plan.",
        exceeds: "Also notes the youth work and tax rules that apply, checked on official sites."
      }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Learners who start their side hustle with a parent's or guardian's OK within 60 days",
      "Learners who keep a money tracker for at least four weeks",
      "Learners who report earnings and repeat customers in the 30-day follow-up"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A phone, school computer or library computer with internet",
      "A free AI assistant the learner is allowed to use, and Canva, Google Docs or Google Slides",
      "Google Sheets, Excel or a paper notebook for the money tracker",
      "A parent or guardian to review the plan",
      "About 60 minutes in total: lessons, practice, checks and the final task"
    ],
    facilitatorNotes: [
      "Send a note home so parents and guardians know the course asks them to review the plan and handle any adult accounts.",
      "Check flyers before learners post or print them to make sure no home address or private contact appears.",
      "Remind learners that youth work and tax rules change; have them check their state labor office and irs.gov with an adult.",
      "Never ask learners to type bank or card numbers into AI tools; practice trackers can use made-up amounts.",
      "Hold a short plan showcase and score each plan with the rubric, giving feedback on one Not yet row at a time."
    ]
  }
};
