"use strict";

// Koach Learn course: Entrepreneurs -> "Building AI-Powered Products and Services". Skill-building course in the shape of re-entry/reentry-ai-digital-confidence.js (see scripts/koachlearn-courses/README.md).

module.exports = {
  id: "entrepreneurs-ai-products-services",
  category: "Entrepreneurs",
  name: "Building AI-Powered Products and Services",
  skills: "Finding a problem worth solving, Designing an AI-assisted service, Writing a reusable instruction prompt, Testing with real customers, Pricing and describing it honestly",
  outcome: "design a small AI-assisted product or service for a real customer problem, build a simple working version with a free AI tool and a reusable instruction prompt, test it with three people, and describe and price it honestly.",
  about: [
    "Many new businesses now use AI to deliver a service faster or cheaper: résumé help, social media packages for local shops, menu translation, bookkeeping clean-up, meal plans, lesson plans and more. This course shows you how to build one the right way.",
    "You will start from a real customer problem, design where AI helps and where a person checks, build a simple version using a free AI assistant and a reusable instruction prompt, test it with real people, then price it and describe it without overpromising.",
    "Each lesson takes about five minutes and ends with a hands-on task. There is a knowledge check after each chapter and a 20-question quiz at the end. No coding is needed."
  ],
  finalTask: "Produce a one-page product sheet for your AI-assisted service: the customer problem, what the customer gets, the steps (marking which are AI and which are human checks), your reusable instruction prompt, the results of tests with three people, your price and how you worked it out, and an honest description with no claims you cannot prove.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "New and existing small business owners who want to offer a service that uses AI to deliver faster or cheaper, such as résumé help, social media packages, menu translation or lesson plans.",
    startingPoint: "Use an AI assistant for their own writing. Most have not designed a service around AI, written a reusable instruction prompt, tested with real customers or priced AI-assisted work.",
    gap: "Many AI services start from the tool instead of a real problem, skip human checks, are priced without counting checking time, and overpromise what AI does. Owners need to build a small, tested, honestly described service so customers pay for it, get good results and trust it.",
    constraints: [
      "No coding needed; plain words throughout",
      "Devices: a computer with a free AI assistant and a spreadsheet",
      "Time: about five minutes per lesson plus testing with real people",
      "Product claims must be true and backed by evidence (FTC); tax questions go to official sources or an accountant",
      "Testers' and customers' private details stay out of AI where possible"
    ],
    prerequisites: "\"Introduction to AI for Entrepreneurs\", or regular use of an AI assistant for business writing."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Given five customer problems you could solve", action: "choose one real, frequent and painful problem for an AI-assisted service", standard: "after asking at least one real person how they handle it today" },
    { id: "O2", condition: "Given your chosen problem", action: "map the service as numbered steps marked AI, human or tool, with inputs and a deliverable", standard: "with a human check before anything is delivered" },
    { id: "O3", condition: "Using a free AI assistant", action: "write a reusable instruction prompt with role, rules, output format and slots", standard: "giving consistent results for two pretend customers" },
    { id: "O4", condition: "With up to three real people", action: "run your service, time each step and record their feedback in their own words", standard: "writing at least one change and testing again" },
    { id: "O5", condition: "Given your costs and testers' feedback", action: "calculate a package price in a spreadsheet", standard: "covering all costs, including checking time, and leaving a profit" },
    { id: "O6", condition: "For your finished service", action: "write a product description that says honestly what AI does and what a person checks", standard: "with no claims you cannot prove" }
  ],
  chapters: [
    {
      name: "Chapter 1: Design the product",
      lessons: [
        {
          objectives: ["O1"],
          title: "Starting from a problem, not from AI",
          minutes: 5,
          goal: "Pick a real customer problem that an AI-assisted service could solve.",
          text: [
            "The most common mistake is starting with \"I want to sell something with AI\". Start instead with a problem people already pay to fix, or complain about often: \"Small restaurants don't have time to post on social media.\" \"Job seekers don't know how to describe their skills.\"",
            "Good problems are frequent, painful and specific. Ask: Who has this problem? How do they solve it now? What does that cost them in money or time? Would they pay me to solve it faster or better?",
            "AI can help you brainstorm and sort ideas, but talk to at least three real people who have the problem before you build anything."
          ],
          steps: ["List five problems you have seen people or businesses struggle with.", "Ask AI to help rate each: how often, how painful, how they solve it now.", "Pick the top one.", "Talk to three people who have it and ask how they deal with it today."],
          words: [["Problem worth solving", "a frequent, painful, specific problem people already spend money or time on."]],
          slides: [
            { title: "Start with a problem", bullets: ["Not \"I want to sell AI\"", "A problem people pay to fix or complain about"] },
            { title: "Good problems are", bullets: ["Frequent", "Painful", "Specific"] },
            { title: "Ask four questions", bullets: ["Who has it?", "How do they solve it now?", "What does it cost them?", "Would they pay you?"] },
            { title: "Talk to real people", bullets: ["At least three, before you build"] }
          ],
          tryIt: "List five problems, use AI to help rate them, pick one, and ask at least one real person who has that problem how they handle it today.",
          youCanNow: "choose a real customer problem to build an AI-assisted service around.",
          quickCheck: [
            { objective: "O1", q: "What makes a customer problem worth building a service around?", options: ["It is frequent, painful and specific", "It is something AI is famous for", "Only you have it", "It happens once a decade"], answer: 0, why: "Frequent, painful, specific problems are ones people pay to fix." },
            { objective: "O1", q: "You have a great idea but have not talked to anyone with the problem. What do you do next?", options: ["Start building right away", "Ask real people how they handle it today", "Set a price", "Buy ads"], answer: 1, why: "Talking to real people first tells you if the problem is real." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Designing where AI helps and where you check",
          minutes: 5,
          goal: "Map your service as steps, marking which are AI and which are human.",
          text: [
            "An AI-assisted service is a set of steps. Example, a social media package for a restaurant: 1) get photos and the week's specials from the owner (human), 2) draft captions (AI), 3) check facts, prices and tone (human), 4) make graphics in Canva (AI-helped), 5) send for approval (human), 6) schedule posts (tool).",
            "Put a person at every step where a mistake could hurt the customer: facts, prices, health, legal or money matters, and anything published under the customer's name. This \"human in the loop\" is what customers are paying for: speed from AI, judgment from you.",
            "Write down what goes in at the start (what you need from the customer) and what comes out at the end (exactly what they get)."
          ],
          steps: ["Write what you need from the customer at the start.", "List every step to deliver the service.", "Mark each step: AI, human, or tool.", "Add a human check before anything goes to the customer.", "Write exactly what the customer gets at the end."],
          words: [["Human in the loop", "a person checks or approves the AI's work before it is used."], ["Deliverable", "the finished thing the customer receives."]],
          slides: [
            { title: "A service is a set of steps", bullets: ["Inputs from the customer", "AI steps, human steps, tool steps", "The deliverable at the end"] },
            { title: "Example: restaurant posts", bullets: ["Owner sends photos and specials", "AI drafts captions; you check facts", "Canva graphics; owner approves"] },
            { title: "Human in the loop", bullets: ["Check facts, prices, health, legal, money", "Check anything under the customer's name", "AI for speed, you for judgment"] }
          ],
          tryIt: "Map your service as numbered steps. Mark each as AI, human or tool, and add a human check before delivery. Write the inputs and the deliverable.",
          youCanNow: "design an AI-assisted service with clear human checks.",
          quickCheck: [
            { objective: "O2", q: "What is a deliverable?", options: ["The AI tool you use", "The price", "The finished thing the customer receives", "Your instruction prompt"], answer: 2, why: "The deliverable is what the customer gets at the end." },
            { objective: "O2", q: "Your service map sends AI-written menu prices straight to the client. What do you add?", options: ["Nothing", "A second AI to check the first", "A faster tool", "A human check before delivery"], answer: 3, why: "A person checks facts and prices before anything goes out." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Writing a reusable instruction prompt",
          minutes: 6,
          goal: "Write one instruction prompt you can reuse for every customer.",
          text: [
            "To deliver the same quality every time, write one detailed instruction prompt and reuse it. It should include: the role (\"You are helping me write social posts for small restaurants\"), the rules (tone, length, what never to do), the format of the output, and a slot for each customer's details.",
            "Example rules: \"Never invent prices or menu items. Only use the specials I give you. Mark anything you are unsure about with [CHECK].\" Rules like these make the AI's mistakes easier to catch.",
            "Many assistants let you save custom instructions or build a saved assistant with your instructions; look in the tool's settings or help pages. If yours does not, keep the prompt in a document and paste it in each time."
          ],
          steps: ["Write the role.", "Write the rules, including what the AI must never do.", "Describe the output format.", "Add [slots] for each customer's details.", "Test it on two pretend customers and tighten the rules."],
          words: [["Instruction prompt", "a detailed, reusable prompt that sets the AI's role, rules and output format."], ["Slot", "a marked place in the prompt where you paste each customer's details."]],
          slides: [
            { title: "One prompt, same quality", bullets: ["Role", "Rules", "Output format", "[Slots] for customer details"] },
            { title: "Rules that catch mistakes", bullets: ["\"Never invent prices or menu items.\"", "\"Use only the details I give you.\"", "\"Mark anything unsure with [CHECK].\""] },
            { title: "Save it", bullets: ["Some assistants save custom instructions", "Or keep it in a document and paste it in"] }
          ],
          tryIt: "Write your instruction prompt with role, rules, format and slots. Run it with details for two pretend customers and improve the rules where the output went wrong.",
          youCanNow: "write a reusable instruction prompt that gives consistent results for each customer.",
          quickCheck: [
            { objective: "O3", q: "What is a slot in an instruction prompt?", options: ["A blank you fill with each customer's details", "A rule about tone", "A payment plan", "The AI's name"], answer: 0, why: "Slots let you reuse one prompt for every customer." },
            { objective: "O3", q: "Your prompt keeps inventing business hours. What do you change?", options: ["Nothing; fix it each time by hand", "Add a rule: never invent hours; mark unknowns with [CHECK]", "Use a longer role", "Remove the format section"], answer: 1, why: "Clear rules stop repeated AI mistakes." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Design the product",
        questions: [
          { objective: "O1", q: "What is the best starting point for an AI-powered service?", options: ["The newest AI tool", "A real problem people already pay to fix", "A cool name", "A logo"], answer: 1, why: "Products that solve real, painful problems sell." },
          { objective: "O1", q: "How many real people should you talk to before building?", options: ["Only AI", "None", "Only yourself", "At least three"], answer: 3, why: "Real conversations confirm the problem is real." },
          { objective: "O2", q: "Where should a human check the AI's work?", options: ["Before anything with facts, prices or the customer's name goes out", "Nowhere", "Only at the very start", "Only if the customer complains"], answer: 0, why: "Human checks catch mistakes before they hurt the customer." },
          { objective: "O3", q: "Which rule belongs in an instruction prompt for restaurant posts?", options: ["\"Use any prices you like.\"", "\"Make up specials if needed.\"", "\"Never invent prices or menu items.\"", "\"Skip the owner's details.\""], answer: 2, why: "Rules that stop invented facts reduce errors." },
          { objective: "O2", q: "What is a deliverable?", options: ["An AI model", "A delivery truck", "The finished thing the customer receives", "A tax form"], answer: 2, why: "It is exactly what the customer gets at the end." }
        ]
      }
    },
    {
      name: "Chapter 2: Test, price and launch",
      lessons: [
        {
          objectives: ["O4"],
          title: "Testing with three real people",
          minutes: 5,
          goal: "Run your service for three people and learn what to fix.",
          text: [
            "Before you sell widely, run the whole service for three real people, for free or at a test price. Watch for: where the AI got things wrong, where you spent the most time, and what the customer liked or did not understand.",
            "Ask each tester three questions: \"What was most useful?\" \"What was confusing or wrong?\" \"Would you pay for this, and how much?\" Write down their exact words.",
            "Time each step. If the human checks take longer than doing it by hand, change the instruction prompt or the steps. Fix the top problems, then test again."
          ],
          steps: ["Find three people with the problem.", "Run the full service for each one.", "Time each step and note every AI mistake.", "Ask the three questions and write down their answers.", "Fix the biggest problems and update your prompt."],
          words: [["Tester", "a real person who tries your product early and gives honest feedback."], ["Feedback", "what people tell you about what worked and what did not."]],
          slides: [
            { title: "Test before you sell", bullets: ["Three real people", "Free or a test price", "Run the whole service"] },
            { title: "Watch for", bullets: ["AI mistakes", "Steps that take the most time", "What customers liked or did not get"] },
            { title: "Ask three questions", bullets: ["What was most useful?", "What was confusing or wrong?", "Would you pay, and how much?"] }
          ],
          tryIt: "Run your service for at least one real person (three if you can). Time each step, note the AI's mistakes, ask the three questions and write one change you will make.",
          youCanNow: "test an AI-assisted service with real people and improve it from their feedback.",
          quickCheck: [
            { objective: "O4", q: "What should you write down when testers give feedback?", options: ["Only the nice comments", "Your own summary", "Their exact words", "Nothing; just remember it"], answer: 2, why: "Exact words show what customers really value and worry about." },
            { objective: "O4", q: "Two testers say the result took too long. What do you do?", options: ["Ignore them", "Raise the price", "Stop the service", "Find the slow step, change it and test again"], answer: 3, why: "Testing is for finding and fixing problems, then testing again." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Pricing your AI-assisted service",
          minutes: 5,
          goal: "Set a price that covers your costs and time and fits what customers will pay.",
          text: [
            "Add up your costs per customer: your time (including checking the AI's work), tool subscriptions shared across customers, and any other costs. Then compare with what customers pay now for other ways of solving the problem, and what testers said they would pay.",
            "Do not price only by how fast AI makes it. Customers pay for the result and your judgment, not for your minutes. A package (\"12 posts a month\") is often easier to sell than an hourly rate.",
            "Have AI help with the math and with ideas for packages, but check every number yourself in a spreadsheet. For tax and business registration, check official sources such as irs.gov and your state's business office, or an accountant."
          ],
          steps: ["List your costs per customer, including checking time.", "Find what customers pay now for other solutions.", "Note what testers said they would pay.", "Choose a package and a price, and check the math yourself.", "Make sure the price covers your costs with something left over."],
          words: [["Package", "a set bundle of work for a set price, like 12 posts a month."], ["Profit", "what is left after you pay all your costs."]],
          slides: [
            { title: "Add up your costs", bullets: ["Your time, including checking AI work", "Tool subscriptions shared across customers", "Other costs"] },
            { title: "Look at the market", bullets: ["What customers pay for other solutions", "What testers said they would pay"] },
            { title: "Price the result", bullets: ["Customers pay for results and judgment", "Packages are easier to sell", "Check the math yourself"] }
          ],
          sources: [{ name: "IRS: Self-Employed Individuals Tax Center", url: "https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center" }],
          tryIt: "Work out your cost per customer in a spreadsheet, compare with what testers said, and set a package price that leaves a profit.",
          youCanNow: "set a price for an AI-assisted service that covers your costs and fits the market.",
          quickCheck: [
            { objective: "O5", q: "What is profit?", options: ["What is left after paying all costs", "The total customers pay", "The cost of the AI tool", "The time you save"], answer: 0, why: "Profit is the money left after every cost is covered." },
            { objective: "O5", q: "Your price covers the AI tool but not the hour you spend checking. What do you do?", options: ["Keep the price", "Add your checking time to the cost and reset the price", "Stop checking", "Charge only new customers more"], answer: 1, why: "Checking time is a real cost that the price must cover." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Describing it honestly",
          minutes: 5,
          goal: "Write a product description that tells the truth about what AI does.",
          text: [
            "Customers trust you more when you are clear about how the service works: \"We use AI to draft, and a person checks every post before it goes out.\" Do not pretend AI does more than it does, or that a person does the work when AI does.",
            "The FTC enforces truth-in-advertising rules against misleading AI claims. In 2026 it finalized orders against companies that claimed an AI marketing service listened to people's conversations through smart devices when it did not. Claims about what your AI does, how accurate it is, or results customers will get must be true and backed by evidence.",
            "Avoid \"guaranteed\", \"100% accurate\" and \"replaces a lawyer/doctor/accountant\". Talk to a lawyer if you are unsure whether a claim is allowed."
          ],
          steps: ["Write what the customer gets in plain words.", "Say honestly where AI is used and where a person checks.", "Remove any claim you cannot prove with evidence.", "Have AI review it: \"Point out any claim that could be misleading.\"", "Ask a lawyer if you are unsure."],
          words: [["Misleading claim", "a statement that gives people a false idea, even if each word is technically true."], ["Evidence", "tests, results or records that prove a claim."]],
          slides: [
            { title: "Be clear how it works", bullets: ["\"AI drafts, a person checks every post\"", "Do not overstate what AI does"] },
            { title: "FTC and AI claims", bullets: ["Truth-in-advertising rules apply to AI", "2026 orders over false AI marketing claims", "Claims need evidence"] },
            { title: "Avoid", bullets: ["\"Guaranteed\" or \"100% accurate\"", "\"Replaces a lawyer, doctor or accountant\"", "Unsure? Ask a lawyer"] }
          ],
          sources: [{ name: "FTC: Advertising and Marketing Basics", url: "https://www.ftc.gov/business-guidance/advertising-marketing/advertising-marketing-basics" }, { name: "FTC: Orders against Cox Media Group and two other firms over AI marketing claims (2026)", url: "https://www.ftc.gov/news-events/news/press-releases/2026/08/ftc-finalizes-orders-cox-media-group-two-other-firms-settling-charges-they-deceived-customers-about" }],
          tryIt: "Final task: write your honest product description, then put together your one-page product sheet: problem, deliverable, steps (AI vs human), instruction prompt, test results, price and description.",
          youCanNow: "design, test, price and honestly describe an AI-assisted product or service.",
          quickCheck: [
            { objective: "O6", q: "Which product claim is honest?", options: ["\"100% accurate, guaranteed\"", "\"Fully automatic, no human needed\" when a person checks everything", "\"AI drafts, and a person checks every item before delivery\"", "\"Better than any human expert\""], answer: 2, why: "It tells the truth about what AI and people each do." },
            { objective: "O6", q: "You are unsure whether a claim on your sales page is allowed. What do you do?", options: ["Keep it and see what happens", "Make it bigger", "Ask AI to approve it", "Remove it or check with a lawyer"], answer: 3, why: "When in doubt, leave it out or get legal advice." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Test, price and launch",
        questions: [
          { objective: "O4", q: "Which question should you ask testers?", options: ["\"Would you pay for this, and how much?\"", "\"What is your bank password?\"", "\"Can you write me a review for a discount?\"", "\"Do you like AI?\""], answer: 0, why: "It tells you whether there is a real market and price." },
          { objective: "O4", q: "Human checks take longer than doing the job by hand. What should you do?", options: ["Stop testing", "Remove all checks", "Charge less", "Change the instruction prompt or the steps"], answer: 3, why: "Improve the process so AI actually saves time." },
          { objective: "O5", q: "When pricing, which cost do people often forget?", options: ["The color of the logo", "Time spent checking the AI's work", "The customer's rent", "The AI company's profits"], answer: 1, why: "Checking time is real work and must be priced in." },
          { objective: "O6", q: "Which description is honest?", options: ["\"AI drafts, and a person checks every post before it goes out.\"", "\"100% accurate AI, guaranteed.\"", "\"Replaces your accountant.\"", "\"Handmade by our team\" when AI does it"], answer: 0, why: "It truthfully says what AI does and what a person does." },
          { objective: "O6", q: "The FTC's rules on AI claims say claims must be:", options: ["Short", "Exciting", "True and backed by evidence", "Approved by the AI tool"], answer: 2, why: "Truth-in-advertising applies to AI claims too." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Building AI-Powered Products and Services",
    questions: [
      { objective: "O1", q: "The most common mistake when building an AI product is:", options: ["Talking to customers", "Starting with AI instead of a customer problem", "Testing", "Setting a price"], answer: 1, why: "Start from the problem, not the tool." },
      { objective: "O1", q: "Good problems to solve are:", options: ["Ones nobody pays for", "Rare and vague", "Only your own", "Frequent, painful and specific"], answer: 3, why: "Those problems create demand." },
      { objective: "O1", q: "\"How do they solve it now?\" helps you learn:", options: ["Nothing useful", "Their password", "Their age", "What you are competing with and what it costs them"], answer: 3, why: "Current solutions show the value of yours." },
      { objective: "O2", q: "In the restaurant example, who checks prices in the captions?", options: ["Nobody", "A human", "The AI checks itself", "The customer's customers"], answer: 1, why: "Prices are facts that need a human check." },
      { objective: "O2", q: "\"Human in the loop\" means:", options: ["A circle on a chart", "AI replaces all people", "A person checks or approves AI work before it is used", "A customer support line"], answer: 2, why: "That is the definition." },
      { objective: "O2", q: "Inputs in your service map are:", options: ["What you need from the customer at the start", "The final product", "Your profit", "The AI company"], answer: 0, why: "Inputs come in; deliverables go out." },
      { objective: "O3", q: "An instruction prompt includes:", options: ["Your bank details", "Only a greeting", "Role, rules, output format and slots", "A random question"], answer: 2, why: "Those parts make results consistent." },
      { objective: "O3", q: "Why add \"Mark anything you are unsure about with [CHECK]\"?", options: ["It makes AI mistakes easier to catch", "It makes the text longer", "It is required by law", "It hides errors"], answer: 0, why: "Flags show you where to look." },
      { objective: "O3", q: "If your AI tool cannot save instructions, you can:", options: ["Give up", "Keep the prompt in a document and paste it each time", "Rewrite it from memory differently each time", "Buy five tools"], answer: 1, why: "A saved document keeps it consistent." },
      { objective: "O4", q: "Testing with three real people helps you find:", options: ["Nothing", "Their passwords", "New logos", "AI mistakes, slow steps and what customers value"], answer: 3, why: "Tests show what to fix before selling." },
      { objective: "O4", q: "When testers give feedback, you should:", options: ["Write down their exact words", "Argue with them", "Ignore it", "Ask them to post fake reviews"], answer: 0, why: "Exact words show what really matters to them." },
      { objective: "O4", q: "After fixing problems found in testing, you should:", options: ["Raise the price tenfold", "Never change anything again", "Delete the prompt", "Test again"], answer: 3, why: "Retesting confirms the fixes worked." },
      { objective: "O5", q: "Customers mostly pay for:", options: ["Your tool subscriptions", "The minutes AI saves you", "The result and your judgment", "Your logo"], answer: 2, why: "Price the result, not just the time." },
      { objective: "O5", q: "A package price is:", options: ["A shipping fee", "A set bundle of work for a set price", "A discount code", "A tax"], answer: 1, why: "Packages are easy for customers to understand." },
      { objective: "O5", q: "Who should check the pricing math?", options: ["Your competitor", "Only the AI", "Nobody", "You, in a spreadsheet"], answer: 3, why: "AI math can be wrong." },
      { objective: "O5", q: "Profit is:", options: ["Your tool bill", "All the money customers pay", "What is left after paying all costs", "Your price"], answer: 2, why: "Profit = income minus costs." },
      { objective: "O5", q: "For tax questions about your new service, check:", options: ["Official sources like irs.gov or an accountant", "Only an AI chat", "A social media comment", "Your customer"], answer: 0, why: "Official sources and professionals are reliable." },
      { objective: "O6", q: "Which claim should you avoid?", options: ["\"A person checks every post\"", "\"100% accurate, guaranteed\"", "\"12 posts a month\"", "\"Approved by you before posting\""], answer: 1, why: "Absolute claims are hard to prove." },
      { objective: "O6", q: "In 2026 the FTC finalized orders against firms that:", options: ["Used spreadsheets", "Made false claims about what their AI marketing service did", "Hired designers", "Paid taxes on time"], answer: 1, why: "They claimed AI listened to conversations when it did not." },
      { objective: "O6", q: "If you are not sure a marketing claim is allowed, you should:", options: ["Talk to a lawyer", "Use it anyway", "Ask AI and post whatever it says", "Make it bigger"], answer: 0, why: "A lawyer can advise on your situation." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Pre-Test: What Do You Already Know?",
    from: [
      0,
      1,
      4,
      5,
      6,
      9,
      12,
      15,
      17
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      {
        name: "Customer problem",
        objective: "O1",
        notYet: "The problem is vague or not checked with a real person.",
        meets: "One specific problem and what the customer gets, checked with real people.",
        exceeds: "Includes how they solve it now and what that costs them."
      },
      {
        name: "Steps and human checks",
        objective: "O2",
        notYet: "Steps are not marked, or nothing is checked before delivery.",
        meets: "Numbered steps marked AI, human or tool, with a human check before delivery.",
        exceeds: "Says exactly what the human checks at each check point."
      },
      {
        name: "Instruction prompt",
        objective: "O3",
        notYet: "Missing rules or slots, or results vary a lot.",
        meets: "Role, rules, format and slots, giving consistent results.",
        exceeds: "Uses [CHECK] marks and has rules added from test mistakes."
      },
      {
        name: "Test results",
        objective: "O4",
        notYet: "No real person tested it, or no change was made.",
        meets: "Results from tests with real people, their own words and at least one change.",
        exceeds: "Three people tested it and a second test showed the change worked."
      },
      {
        name: "Price and description",
        objective: "O6",
        notYet: "Price ignores checking time, or the description overpromises.",
        meets: "A package price covering all costs with profit, and an honest description.",
        exceeds: "Shows the spreadsheet math and says clearly what AI does and what a person does."
      }
    ]
  },
  evaluation: {
    results: [
      "Owners who finish the course and pass the final task (rubric)",
      "Owners who sell their AI-assisted service to a first paying customer within 30 days (follow-up survey)",
      "Customer satisfaction or repeat orders reported by owners",
      "Learners who start another Koach Learn entrepreneur course within 30 days"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A computer with a free AI assistant",
      "A spreadsheet for timing and pricing",
      "Access to up to three real people who have the problem",
      "About 60 to 75 minutes for lessons and checks, plus time for tests with real people"
    ],
    facilitatorNotes: [
      "Have learners pitch their chosen problem to the group before building, and let peers ask how often it happens.",
      "Pair learners to act as test customers for each other if real testers are hard to find, then follow up with a real person.",
      "Remind learners not to paste testers' private details into AI where they can use placeholders.",
      "Review every product description for claims that cannot be proven; send tax and legal questions to the right professional.",
      "Score the product sheet with the rubric, one Not yet row at a time."
    ]
  }
};
