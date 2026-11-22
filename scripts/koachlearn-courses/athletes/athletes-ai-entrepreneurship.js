"use strict";

// Koach Learn course: Athletes -> "AI Entrepreneurship for Athletes". Skill-building course: by the end the student can DO the skill in `outcome`.
// Shape: scripts/koachlearn-courses/README.md. Model: re-entry/reentry-ai-digital-confidence.js.

module.exports = {
  id: "athletes-ai-entrepreneurship",
  category: "Athletes",
  name: "AI Entrepreneurship for Athletes",
  skills: "Finding a business idea from your sport, Testing an idea with real people, Writing a one-page business plan with AI, Building a simple start-up budget, Knowing the rules: NIL, trademarks, records and taxes",
  outcome: "turn one idea from your sport into a tested business idea: talk to five potential customers, write a one-page business plan and a start-up budget with AI, and list the rules you must check before launching.",
  about: [
    "This course is for athletes and coaches with a business idea, or who want one: a training business, an app idea, a product that solves a problem you have seen in sport, or a service for local teams.",
    "Entrepreneurs solve problems people will pay for. You will find a real problem, test whether people want your solution before spending money, and use AI to write a one-page plan and budget.",
    "Each lesson is about five minutes with a \"Try it now\" task. A knowledge check closes each chapter, and a 20-question quiz closes the course. This is general education; for legal, tax and NIL questions, check official sources and talk with your compliance office, a parent or guardian, and a professional."
  ],
  finalTask: "Write a one-page business plan for one idea from your sport: the problem, your solution, your customer, what five real people told you, how you'll reach customers, a start-up budget built in a spreadsheet, and a rules checklist (NIL, trademark search, records and taxes) with who you checked with.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "High school, college and early-career athletes and coaches who have a business idea, or want one: a training business, an app idea, a product for a problem seen in sport, or a service for local teams.",
    startingPoint: "Know their sport well and see its problems up close, and use a smartphone and maybe a spreadsheet. Few have interviewed customers, tested an idea cheaply, written a business plan or budget, or checked NIL, trademark, license and tax rules.",
    gap: "Athletes often build or buy before checking that anyone wants the idea, or launch without checking the rules, and lose money or eligibility. Testing with real customers, a one-page plan, a real budget and a rules checklist gives them a safe, low-cost start.",
    constraints: [
      "Plain language at about a grade 8 reading level",
      "A phone or computer with a free AI assistant and Google Sheets",
      "About 60 minutes of lessons plus time to talk to five people",
      "NIL, trademark, business license and tax rules; check with the compliance office, state association or local government",
      "Not financial or tax advice; athletes under 18 need a parent or guardian for accounts, contracts and any borrowing"
    ],
    prerequisites: "None. \"AI E-commerce Platforms for Athletes\" is a good next step for selling online."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Given problems you have seen in your sport", action: "list and rate problems by how many people have them, how painful they are and whether people already pay, then choose one", standard: "with the chosen problem one you have seen in real life" },
    { id: "O2", condition: "Given five people who have the problem", action: "interview them about past behavior and write down what they say", standard: "with no \"Would you buy?\" questions and the patterns across all five noted" },
    { id: "O3", condition: "Using what customers told you", action: "write a one-sentence solution and choose the simplest test you can run in two weeks", standard: "with a number that will show whether the test worked" },
    { id: "O4", condition: "Using your notes and an AI assistant", action: "write a one-page business plan with problem, solution, customer, what customers said, reach, money and next steps", standard: "with invented numbers removed or marked as guesses and feedback from a mentor" },
    { id: "O5", condition: "Using Google Sheets", action: "build a start-up budget with costs, expected income, totals and profit", standard: "with real vendor prices, checked formulas and a review with a trusted adult before spending" },
    { id: "O6", condition: "Before launching", action: "write a rules checklist covering NIL, names and logos, business license, records and taxes", standard: "with a USPTO search done and the person you checked each rule with named" }
  ],
  chapters: [
    {
      name: "Chapter 1: Finding and testing an idea",
      lessons: [
        {
          objectives: ["O1"],
          title: "Finding a problem worth solving",
          minutes: 5,
          goal: "List problems you have seen in sport and pick one worth solving.",
          text: [
            "Good business ideas start with a problem, not a product. Athletes see many problems up close: parents who can't find good beginner coaching, teams that lose equipment, players who can't afford quality training, coaches drowning in scheduling.",
            "Write problems you, teammates, parents or coaches complain about. For each, ask: How many people have this problem? How painful is it? Are they already paying for a bad solution?",
            "Use an AI assistant to brainstorm: \"I'm a high school volleyball player. List 15 problems players, parents and coaches have that a small business could solve.\" Then circle the ones you have actually seen."
          ],
          steps: ["Write problems you have seen in your sport.", "Ask AI to brainstorm more.", "Circle the ones you have seen in real life.", "Rate each: how many people, how painful, already paying?", "Pick one."],
          words: [["Entrepreneur", "someone who starts a business to solve a problem."], ["Pain point", "a problem that bothers people enough that they want it fixed."]],
          slides: [
            { title: "Start with a problem", bullets: ["Not a product", "Athletes see problems up close"] },
            { title: "Rate each problem", bullets: ["How many people have it?", "How painful is it?", "Already paying for a bad fix?"] },
            { title: "AI brainstorms, you choose", bullets: ["Ask for 15 problems", "Circle the ones you've seen"] }
          ],
          tryIt: "List five problems from your sport, add more with AI, rate them, and pick the one you will work on.",
          youCanNow: "find and choose a real problem worth solving.",
          quickCheck: [
            { objective: "O1", q: "Which is a sign of a problem worth solving?", options: ["Only you have it", "People are already paying for a bad solution", "It is fun to talk about", "No one complains about it"], answer: 1, why: "If people already pay for a bad solution, the problem matters to them." },
            { objective: "O1", q: "AI lists 15 problems for your sport. What do you do?", options: ["Pick the most exciting one", "Build all 15", "Circle the ones you have actually seen", "Ask AI to pick for you"], answer: 2, why: "Keep the problems you have seen in real life." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Talking to real customers",
          minutes: 6,
          goal: "Interview five potential customers about the problem before building anything.",
          text: [
            "Before spending money, talk to the people who have the problem. Your goal is to learn, not to sell. Ask about their past behavior, not what they might do someday.",
            "Good questions: \"Tell me about the last time this happened.\" \"What did you do about it?\" \"What did that cost you?\" \"What's annoying about the options you have?\" Avoid \"Would you buy my idea?\" because people say yes to be nice.",
            "Talk to five people. Write what they say in their words. If most don't care, that is great news: you saved time and money. Pick a new problem or adjust."
          ],
          steps: ["List five people who have the problem.", "Ask about the last time it happened.", "Ask what they did and what it cost.", "Write their words down.", "Look for patterns across the five."],
          words: [["Customer interview", "a short conversation to learn about someone's problem."], ["Validate", "check that a problem and solution are real before building."]],
          slides: [
            { title: "Learn, don't sell", bullets: ["Talk to people with the problem", "Before spending money"] },
            { title: "Good questions", bullets: ["\"Tell me about the last time...\"", "\"What did you do? What did it cost?\"", "Not: \"Would you buy my idea?\""] },
            { title: "After five talks", bullets: ["Write their words", "Look for patterns", "No interest? You saved money"] }
          ],
          tryIt: "Ask an AI assistant to help you write five interview questions about past behavior. Interview at least two people this week and write down what they said.",
          youCanNow: "interview potential customers to test whether a problem is real.",
          quickCheck: [
            { objective: "O2", q: "What is your goal in a customer interview?", options: ["To learn", "To sell", "To get a promise to buy", "To show off your idea"], answer: 0, why: "Talk to learn about the problem, not to sell." },
            { objective: "O2", q: "A parent says, \"I'd totally buy that someday.\" What do you ask next?", options: ["\"Great, can I put you down?\"", "\"How much would you pay?\"", "\"Would your friends buy it too?\"", "\"Tell me about the last time this problem happened.\""], answer: 3, why: "Ask about past behavior, since people say yes to be nice." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Shaping your solution and offer",
          minutes: 5,
          goal: "Write a one-sentence solution and the simplest version you could test.",
          text: [
            "Now describe your solution in one sentence: \"Saturday beginner basketball sessions for 6-to-9-year-olds, led by high school varsity players, at a price parents can afford.\"",
            "Start with the simplest test you can run, sometimes called a minimum viable product: one session instead of a full academy, a sign-up form instead of an app, ten shirts instead of 500.",
            "AI can help you think through the simplest version: \"Here's my idea and what five customers told me. What's the smallest, cheapest way to test it in two weeks?\" Then pick what you can actually do."
          ],
          steps: ["Write your solution in one sentence.", "Ask AI for the smallest test you could run.", "Choose a test you can do in two weeks.", "Decide how you'll know it worked (for example 8 sign-ups)."],
          words: [["Minimum viable product (MVP)", "the simplest version of your idea that lets you test it with real customers."], ["Offer", "exactly what customers get and what it costs."]],
          slides: [
            { title: "One-sentence solution", bullets: ["Who it's for", "What they get", "Why it's better"] },
            { title: "Test small first", bullets: ["One session, not an academy", "A form, not an app", "10 shirts, not 500"] },
            { title: "Define success", bullets: ["Smallest two-week test", "A number that means it worked"] }
          ],
          tryIt: "Write your one-sentence solution. Use AI to find the smallest two-week test, and write the number that would mean it worked.",
          youCanNow: "describe your solution and design a small, cheap test.",
          quickCheck: [
            { objective: "O3", q: "What is a minimum viable product?", options: ["Your most expensive version", "A full app", "The simplest version that lets you test with real customers", "A long business plan"], answer: 2, why: "An MVP is the smallest test you can run with real customers." },
            { objective: "O3", q: "You want to start a training academy. What is the best first test?", options: ["Rent a building for a year", "Run one session with a sign-up form", "Build a custom app", "Print 500 shirts"], answer: 1, why: "Start with the simplest test you can do in two weeks." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Finding and testing an idea",
        questions: [
          { objective: "O1", q: "Good business ideas start with:", options: ["A cool logo", "A big loan", "A problem people have", "An expensive app"], answer: 2, why: "Solving real problems is what people pay for." },
          { objective: "O2", q: "Which interview question is best?", options: ["\"Tell me about the last time this happened.\"", "\"Would you buy my idea?\"", "\"Isn't my idea great?\"", "\"How much would you pay someday?\""], answer: 0, why: "Past behavior is more honest than predictions." },
          { objective: "O2", q: "Most of the people you interview don't care about the problem. This means:", options: ["You failed", "Build it anyway", "Interview them until they agree", "You saved time and money; adjust or pick a new problem"], answer: 3, why: "Learning early is a win." },
          { objective: "O3", q: "An MVP is:", options: ["Most valuable player", "The simplest version that lets you test with real customers", "A big launch", "A trademark"], answer: 1, why: "In business, MVP means minimum viable product." },
          { objective: "O3", q: "Which is the best first test for a camp idea?", options: ["Renting a stadium for a month", "One Saturday session with a sign-up form", "Building an app", "Printing 500 shirts"], answer: 1, why: "Small tests are cheap and fast." }
        ]
      }
    },
    {
      name: "Chapter 2: Plan, budget and rules",
      lessons: [
        {
          objectives: ["O4"],
          title: "A one-page business plan with AI",
          minutes: 5,
          goal: "Write a one-page business plan with AI help.",
          text: [
            "A one-page plan keeps you focused. Sections: Problem, Solution, Customer, What customers told me, How I'll reach them, Money (costs and price), Next steps.",
            "Give an AI assistant your notes and interview results and ask: \"Turn these notes into a one-page business plan with these sections. Use plain words. Mark anything that's a guess.\"",
            "Read it carefully. AI can make your idea sound bigger than it is or invent numbers. Keep only what is true or clearly marked as a guess, and share it with a mentor, coach or teacher for feedback."
          ],
          steps: ["Gather your problem, solution and interview notes.", "Ask AI for a one-page plan with set sections.", "Remove invented numbers or mark them as guesses.", "Share with a mentor for feedback."],
          words: [["Business plan", "a written summary of how a business will work and make money."], ["Mentor", "an experienced person who gives you advice."]],
          slides: [
            { title: "One-page plan sections", bullets: ["Problem, Solution, Customer", "What customers told me", "How I'll reach them, Money, Next steps"] },
            { title: "AI drafts it", bullets: ["From your notes and interviews", "\"Mark anything that's a guess\""] },
            { title: "You check it", bullets: ["No invented numbers", "Share with a mentor"] }
          ],
          tryIt: "Use AI to turn your notes into a one-page plan. Mark every guess, then ask a mentor, coach or teacher for one piece of feedback.",
          youCanNow: "write a one-page business plan with AI and check it for accuracy.",
          quickCheck: [
            { objective: "O4", q: "Which section belongs in your one-page plan?", options: ["What customers told me", "Your favorite athletes", "Your full life story", "Your training schedule"], answer: 0, why: "The plan includes what your five interviews showed." },
            { objective: "O4", q: "AI's plan says 500 customers in the first month, but you have no evidence. What do you do?", options: ["Keep it to impress people", "Double it", "Move it to the top", "Remove it or mark it as a guess"], answer: 3, why: "Keep only what is true or clearly marked as a guess." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Building a start-up budget",
          minutes: 5,
          goal: "Build a simple start-up budget in a spreadsheet.",
          text: [
            "A start-up budget lists what you need to spend before and during your first test, and what you expect to earn. Keep it small at first.",
            "In Google Sheets, list costs (equipment, facility, website or platform fees, printing, insurance if needed, marketing) and expected income (price times expected customers). Find real prices from vendors, not guesses.",
            "Ask AI to set up formulas for totals and profit, and check them yourself. Never borrow money or use a credit card for a business test without talking to a parent, guardian or trusted adviser. This is not financial advice."
          ],
          steps: ["List every start-up cost.", "Look up real prices.", "Estimate income: price times customers.", "Add totals and profit with formulas.", "Review with a trusted adult before spending."],
          words: [["Start-up budget", "a plan of the money needed to start and what you expect to earn."], ["Expense", "money you spend to run the business."]],
          slides: [
            { title: "Costs", bullets: ["Equipment and facility", "Platform or website fees", "Printing, insurance, marketing"] },
            { title: "Income", bullets: ["Price x expected customers", "Use real prices, not guesses"] },
            { title: "Be careful", bullets: ["AI sets formulas; you check", "No borrowing without a trusted adult"] }
          ],
          tryIt: "Build a start-up budget for your two-week test in Google Sheets with real prices. Ask AI to write the total and profit formulas and check them.",
          youCanNow: "build a simple start-up budget with real numbers.",
          quickCheck: [
            { objective: "O5", q: "How do you estimate expected income?", options: ["Price times expected customers", "Costs minus price", "Followers times likes", "Guess a round number"], answer: 0, why: "Expected income is price times expected customers." },
            { objective: "O5", q: "Your budget shows you need to buy equipment. What do you do before spending?", options: ["Put it on a credit card", "Borrow from a friend", "Review the budget with a parent, guardian or trusted adviser", "Buy the cheapest option online now"], answer: 2, why: "Talk to a trusted adult before borrowing or spending on a test." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Rules every athlete-founder checks",
          minutes: 6,
          goal: "Write a rules checklist for your business.",
          text: [
            "NIL: if your business uses your name, image or likeness, it may count as NIL activity. College athletes may need to report it; Division I athletes report qualifying third-party deals through NIL Go at the time of writing. High school rules vary by state. Ask your compliance office or state athletic association.",
            "Names and logos: do not use school, team or league logos without permission. Before choosing a business name, search the USPTO trademark records and your state's business name records. Your city or state may require a business license; check your local government's website.",
            "Records and taxes: keep every receipt and payment in a spreadsheet. The IRS says you must file a tax return if your net self-employment earnings are $400 or more. Talk with a tax professional. If you are under 18, a parent or guardian will need to help with accounts and contracts."
          ],
          steps: ["Ask compliance or your state association about NIL rules.", "Make sure you use only your own logo and name.", "Search USPTO and state business name records.", "Check local business license rules.", "Set up a receipts and payments sheet.", "Talk with a tax professional."],
          words: [["Business license", "permission from a city, county or state to run a business there."], ["Self-employment", "earning money from your own business instead of a boss."]],
          slides: [
            { title: "NIL", bullets: ["Business with your name can be NIL", "College: may need reporting", "High school: check your state"] },
            { title: "Names, logos, licenses", bullets: ["No school or league logos without permission", "Search USPTO and state name records", "Check local license rules"] },
            { title: "Records and taxes", bullets: ["Keep every receipt", "IRS: file if net SE earnings are $400+", "Talk with a tax professional"] }
          ],
          sources: [
            { name: "NCAA: Name, Image and Likeness", url: "https://www.ncaa.org/student-athletes/name-image-likeness/" },
            { name: "USPTO: Trademark basics", url: "https://www.uspto.gov/trademarks/basics" },
            { name: "IRS: Self-Employed Individuals Tax Center", url: "https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center" }
          ],
          tryIt: "Final task: finish your one-page plan with budget, then write your rules checklist with who you asked about NIL, your trademark search result, your local license check and your records sheet.",
          youCanNow: "check the key rules before launching a business as an athlete.",
          quickCheck: [
            { objective: "O6", q: "Where do you check whether your city requires a business license?", options: ["Social media", "Your local government's website", "An AI chatbot", "Your coach's group chat"], answer: 1, why: "Your city or state may require a license; check your local government's website." },
            { objective: "O6", q: "You picked a business name. What do you check before using it?", options: ["Whether it rhymes", "Whether your friends like it", "Whether it has a mascot", "USPTO trademark records and your state's business name records"], answer: 3, why: "Search trademark and state business name records before choosing a name." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Plan, budget and rules",
        questions: [
          { objective: "O4", q: "AI adds \"$1 million in year one\" to your plan with no basis. You:", options: ["Keep it", "Make it $2 million", "Show investors", "Remove it or mark it as a guess"], answer: 3, why: "Only keep true numbers or clearly marked guesses." },
          { objective: "O5", q: "Expected income equals:", options: ["Price times expected customers", "Costs times two", "Followers times likes", "A guess"], answer: 0, why: "That's the basic income estimate." },
          { objective: "O5", q: "Before borrowing money for a business test, you should:", options: ["Use a credit card quickly", "Ask a stranger online", "Talk to a parent, guardian or trusted adviser", "Skip the budget"], answer: 2, why: "Debt is risky; get advice first." },
          { objective: "O6", q: "Why search USPTO records?", options: ["To get customers", "To find a coach", "To pay taxes", "To avoid using a name someone else owns"], answer: 3, why: "Trademark searches prevent conflicts." },
          { objective: "O6", q: "The IRS self-employed filing threshold for net earnings is:", options: ["$40,000", "$400", "$4", "There is none"], answer: 1, why: "That's on the IRS Self-Employed Tax Center page." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: AI Entrepreneurship for Athletes",
    questions: [
      { objective: "O1", q: "An entrepreneur:", options: ["Only plays sports", "Only invests money", "Starts a business to solve a problem", "Works for a team"], answer: 2, why: "Solving problems is the core." },
      { objective: "O1", q: "A pain point is:", options: ["A problem that bothers people enough to want it fixed", "An injury", "A scoreboard", "A penalty"], answer: 0, why: "Pain points are business opportunities." },
      { objective: "O1", q: "When rating a problem, ask:", options: ["How many people have it and how painful it is", "What color it is", "Who is famous", "How many likes it gets"], answer: 0, why: "Size and pain show if it's worth solving." },
      { objective: "O1", q: "AI brainstorms 15 problems. You:", options: ["Pick the first one", "Use all 15", "Circle the ones you've seen in real life", "Ignore them"], answer: 2, why: "Real experience beats guesses." },
      { objective: "O2", q: "Customer interviews are for:", options: ["Selling hard", "Learning", "Arguing", "Getting followers"], answer: 1, why: "Learn before you build." },
      { objective: "O2", q: "Why avoid \"Would you buy my idea?\"", options: ["It's rude", "It's illegal", "It's too short", "People say yes to be nice"], answer: 3, why: "Past behavior is more honest." },
      { objective: "O2", q: "How many people should you interview at least?", options: ["One", "None", "Five", "500"], answer: 2, why: "Five shows early patterns." },
      { objective: "O2", q: "To validate means:", options: ["Get a parking stamp", "Win a game", "Sign a contract", "Check that a problem and solution are real"], answer: 3, why: "Validation saves time and money." },
      { objective: "O3", q: "Which is an MVP for a merch idea?", options: ["10 shirts sold to people who asked", "500 shirts in storage", "A full clothing line", "A store lease"], answer: 0, why: "Start small and test." },
      { objective: "O3", q: "A test needs:", options: ["No goal", "A number that means it worked", "A huge budget", "A celebrity"], answer: 1, why: "A clear target tells you if it worked." },
      { objective: "O4", q: "A one-page plan includes:", options: ["Only a logo", "Your stats", "Problem, solution, customer, money, next steps", "Your password"], answer: 2, why: "Those sections cover how it works." },
      { objective: "O4", q: "Ask AI to mark:", options: ["Anything that's a guess", "Nothing", "Only good news", "Your rivals"], answer: 0, why: "Marked guesses keep you honest." },
      { objective: "O4", q: "A mentor is:", options: ["A competitor", "A customer", "A referee", "An experienced person who gives advice"], answer: 3, why: "Mentors help you avoid mistakes." },
      { objective: "O5", q: "Prices in your budget should come from:", options: ["Guesses", "Real vendor prices", "Old memories", "AI only"], answer: 1, why: "Real prices make real budgets." },
      { objective: "O5", q: "An expense is:", options: ["Money you earn", "Money you spend to run the business", "A trophy", "A follower"], answer: 1, why: "Expenses are costs." },
      { objective: "O6", q: "A business using your name can count as:", options: ["Pay-for-play", "A scholarship", "Nothing", "NIL activity"], answer: 3, why: "It uses your name, image or likeness." },
      { objective: "O6", q: "Can you use your school's logo on your products freely?", options: ["No, you need permission", "Yes, always", "Only on weekends", "Only online"], answer: 0, why: "Schools protect their logos." },
      { objective: "O6", q: "Where do you check if you need a business license?", options: ["A sports blog", "A rival", "Your local government's website", "Nowhere"], answer: 2, why: "Licenses are local rules." },
      { objective: "O6", q: "Why keep every receipt?", options: ["For decoration", "To throw away later", "It's not needed", "For records and taxes"], answer: 3, why: "Records help with taxes and decisions." },
      { objective: "O6", q: "If you are under 18 and starting a business:", options: ["You can sign anything alone", "A parent or guardian helps with accounts and contracts", "Hide it", "Use a fake age"], answer: 1, why: "Minors usually need adult help." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Pre-Test: What Do You Already Know?",
    from: [
      1,
      5,
      8,
      10,
      13,
      15,
      18
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      {
        name: "Problem and customer",
        objective: "O1",
        notYet: "The problem is vague or not one the learner has seen.",
        meets: "One real problem, rated for size and pain, with a clear customer.",
        exceeds: "Shows what customers already pay for a bad solution."
      },
      {
        name: "Customer interviews",
        objective: "O2",
        notYet: "Fewer than five people, or the notes are about whether they would buy.",
        meets: "Five interviews about past behavior, written in the customers' words, with patterns noted.",
        exceeds: "The plan changed because of what customers said."
      },
      {
        name: "One-page plan",
        objective: "O4",
        notYet: "Sections missing, or invented numbers left unmarked.",
        meets: "All seven sections on one page, guesses marked, and mentor feedback received.",
        exceeds: "Includes the two-week test and the number that will show it worked."
      },
      {
        name: "Start-up budget",
        objective: "O5",
        notYet: "Guessed prices or formulas not checked.",
        meets: "Every cost with a real price, expected income, totals and profit, checked and reviewed with a trusted adult.",
        exceeds: "Shows how many customers are needed to cover start-up costs."
      },
      {
        name: "Rules checklist",
        objective: "O6",
        notYet: "NIL, names, license or tax items missing, or no one named.",
        meets: "NIL, names and logos, license, records and taxes each listed with who the learner checked with.",
        exceeds: "A USPTO search result and a receipts and payments sheet are attached."
      }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the business plan and score Meets or Exceeds on every rubric row",
      "Learners who run their two-week test within 30 days and report whether it reached its number (follow-up survey)",
      "Learners who start a business or decide not to after customer interviews, saving money",
      "Learners who report checking NIL, trademark, license and tax rules before launching"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A phone or computer with internet",
      "A free AI assistant (ChatGPT, Microsoft Copilot or Google Gemini)",
      "A free Google account for Google Sheets",
      "A notebook or phone notes for customer interviews",
      "About 60 minutes of lessons plus time for five short interviews"
    ],
    facilitatorNotes: [
      "Practice customer interviews in pairs first so learners ask about past behavior, not \"Would you buy?\".",
      "Line up mentors, such as local business owners or a small business center, to give feedback on plans.",
      "Do not let learners borrow money or sign contracts as part of the course; involve parents or guardians for anyone under 18.",
      "Bring in the compliance office for NIL questions and point tax questions to a tax professional.",
      "Celebrate ideas that customers rejected: finding out early is a good result."
    ]
  }
};
