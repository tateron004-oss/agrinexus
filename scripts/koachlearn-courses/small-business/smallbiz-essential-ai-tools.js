"use strict";

// Koach Learn course: Small Business -> "Essential AI Tools for Small Businesses". Written as a skill-building course: by the end the student can DO the skill in `outcome`.
// Two chapters of three micro-lessons; a knowledge check closes each chapter; a 20-question quiz closes the course. See scripts/koachlearn-export.js for how it is built.
//
// lesson: { title, minutes, goal, text: [paragraph], steps: [step] (optional), words: [[term, means]], slides: [{ title, bullets }], tryIt, youCanNow }
// question: { q, options: [4], answer: index of the right option, why }

module.exports = {
  id: "smallbiz-essential-ai-tools",
  category: "Small Business",
  name: "Essential AI Tools for Small Businesses",
  skills: "Choosing the right AI tool for a job, Using a chat assistant for business writing, Making graphics with Canva, Using AI in documents and spreadsheets, Building a starter AI toolkit",
  outcome: "pick the right free AI tool for a business job and use it: a chat assistant for writing, Canva for a flyer or post, and a document or spreadsheet tool for a price list or simple sales table, then put them together in a starter toolkit you will actually use each week.",
  about: [
    "This course is for small business owners who want a short, practical toolkit instead of chasing every new app. Our examples come from shops, restaurants, salons, cleaning and repair services, and food trucks.",
    "You will learn what kinds of AI tools exist, try a chat assistant, a design tool and the AI help inside documents and spreadsheets, and finish with your own toolkit: which tool for which job, and what you will never put into it.",
    "Prices, plan names and features change often. We describe what to do rather than exact menu names; check each tool's official site for its current free plan. Each lesson takes about five minutes, with a \"Try it now\" task, a knowledge check after each chapter and a 20-question quiz at the end."
  ],
  finalTask: "Build your starter AI toolkit: a one-page table with three to five tools you will use, the job each one does in your business, whether you use the free plan, and one safety rule for each. Then prove it works by making one real item with each tool: a customer message (chat assistant), a flyer or post (Canva), and a price list or sales table (Docs/Word or Sheets/Excel).",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Small business owners who want a short, practical AI toolkit instead of chasing every new app: shops, restaurants, salons, cleaning and repair services, and food trucks.",
    startingPoint: "Use a phone or computer for business messages and may have tried one AI chat assistant. Little experience with design tools, document AI helpers or spreadsheets with formulas.",
    gap: "Owners waste time and money trying many apps or paying for upgrades they do not need, and may put customer data into the wrong tool. They need a small set of free tools, each with a clear job and a safety rule, that they will really use each week.",
    constraints: [
      "Reading level: plain words and short sentences",
      "Devices: a smartphone or computer; spreadsheets are easier on a computer",
      "Time: about 5-minute lessons that fit into a busy workday",
      "Prices, plan names and features change; check each tool's official site for its current free plan",
      "Privacy: no customer card numbers, passwords or names in AI tools"
    ],
    prerequisites: "\"Introduction to AI for Small Business\" is helpful but not required."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Given the main kinds of AI tools", action: "match each kind of tool to a job in your business", standard: "with one job for each of the four kinds" },
    { id: "O2", condition: "Using a free chat assistant", action: "produce three different business items in one session", standard: "with your business details given once at the start and every number checked" },
    { id: "O3", condition: "Using a Canva template", action: "make a flyer or social media post for a real offer or event", standard: "with one main message, how to reach you, every word checked and only photos you have the right to use" },
    { id: "O4", condition: "Given rough notes and Google Docs or Microsoft Word", action: "turn the notes into a clean business document with AI help", standard: "saved in your document, with legal wording checked by a professional or official source" },
    { id: "O5", condition: "Using Google Sheets or Microsoft Excel", action: "build a sales or inventory table and get AI help reading it", standard: "with at least 10 rows, a SUM formula for the total and AI's answer confirmed in the sheet" },
    { id: "O6", condition: "Given the tools you tried", action: "create a starter toolkit table of three to five tools with a job and a safety rule for each", standard: "listing tool, job, plan and safety rule, with free plans used before paying" }
  ],
  chapters: [
    {
      name: "Chapter 1: The main kinds of AI tools",
      lessons: [
        {
          objectives: ["O1"],
          title: "A map of AI tools for small business",
          minutes: 5,
          goal: "Name the main kinds of AI tools and match each to a business job.",
          text: [
            "You do not need dozens of apps. Most small businesses get the most from four kinds of tools.",
            "Chat assistants (ChatGPT, Microsoft Copilot, Google Gemini) write and explain: replies, descriptions, plans, checklists. Design tools (Canva and others) make flyers, social posts, menus and logos, and many now have AI features to help with text and images. Office tools (Google Docs and Sheets, Microsoft Word and Excel) hold your documents and numbers, and both companies add AI helpers to them on some plans. Tools built into other apps, like your point-of-sale, booking or email software, may also have AI features.",
            "Start with one tool per job. Learn it well before adding another."
          ],
          words: [["Chat assistant", "an AI tool you talk to in a chat box, such as ChatGPT, Copilot or Gemini."], ["Design tool", "an app for making graphics like flyers and posts, such as Canva."], ["Point-of-sale (POS)", "the system you use to ring up sales."]],
          slides: [
            { title: "Four kinds of tools", bullets: ["Chat assistants: write and explain", "Design tools: flyers, posts, menus", "Office tools: documents and numbers", "AI inside apps you already use"] },
            { title: "Examples", bullets: ["ChatGPT, Copilot, Gemini", "Canva", "Google Docs and Sheets; Word and Excel"] },
            { title: "Keep it simple", bullets: ["One tool per job", "Learn it well first", "Add another only when you need it"] }
          ],
          tryIt: "Write the four kinds of tools down the side of a page. Next to each, write one job in your business it could do this month.",
          youCanNow: "name the main kinds of AI tools and match each to a job in your business.",
          quickCheck: [
            { objective: "O1", q: "What kind of tool are ChatGPT, Copilot and Gemini?", options: ["Design tools", "Spreadsheets", "Chat assistants", "Booking apps"], answer: 2, why: "They are chat assistants you talk with to get drafts and answers." },
            { objective: "O1", q: "You want to design a new menu board. Which kind of tool would you choose?", options: ["A design tool like Canva", "A spreadsheet", "A booking app", "A calculator"], answer: 0, why: "Design tools have templates made for menus and flyers." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Getting the most from a chat assistant",
          minutes: 5,
          goal: "Use a chat assistant to produce three different business items in one session.",
          text: [
            "A chat assistant is the most flexible tool you have. It can write, rewrite, summarize, translate and plan. Open it on your phone app or at chatgpt.com, copilot.microsoft.com or gemini.google.com.",
            "Give it your business details once at the start of a chat: \"I run a two-chair barbershop in Long Beach. Our style is friendly and neighborhood. Prices: cut $30, cut and beard $40.\" Then ask for several things in a row: a price board, a text reminder template, a reply to a review.",
            "Ask for options and tables when they help: \"Give me three versions\" or \"Put this in a table.\" Always check the numbers it repeats back to you."
          ],
          steps: ["Open a chat assistant.", "Give your business details once at the top.", "Ask for item 1, then item 2, then item 3.", "Ask for options or a table where it helps.", "Check every number before you use it."],
          words: [["Summarize", "to make a short version of something long."], ["Template", "a ready-made pattern you fill in each time."]],
          slides: [
            { title: "A flexible helper", bullets: ["Write, rewrite, summarize, translate, plan", "Phone app or web browser"] },
            { title: "Set it up once per chat", bullets: ["Your business type and town", "Your style and your prices", "Then ask for item after item"] },
            { title: "Useful requests", bullets: ["\"Give me three versions.\"", "\"Put this in a table.\"", "Check every number it repeats"] }
          ],
          tryIt: "In one chat, give your business details, then ask for: a price board, a text reminder template with \"[customer name]\", and a thank-you reply to a good review.",
          youCanNow: "use one chat session to make several business items from your own details.",
          quickCheck: [
            { objective: "O2", q: "When should you give your business details in a chat session?", options: ["Never", "Again with every request", "Only at the end", "Once at the start"], answer: 3, why: "Giving details once at the start lets every answer in the chat use them." },
            { objective: "O2", q: "The chat assistant made your price board but one price looks off. What would you do?", options: ["Print it anyway", "Check every number against your real prices and fix it", "Ask for a new design", "Remove all prices"], answer: 1, why: "AI can repeat numbers wrong, so you check every one." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Making a flyer or social post with Canva",
          minutes: 5,
          goal: "Make a simple flyer or social media post using a free design tool.",
          text: [
            "Canva is a design tool that works in a web browser and as a phone app. It has a free plan and thousands of ready-made templates for flyers, menus, social posts and business cards. Check canva.com for what the free plan includes today.",
            "Start from a template, not a blank page. Search for what you need (\"restaurant flyer\", \"salon Instagram post\"), pick one, then change the words, colors and photos to yours. Use the text from your chat assistant.",
            "Use your own photos or ones the tool allows you to use. Keep it simple: one main message, big readable words, your business name and how to reach you. Check the spelling of your address and phone number."
          ],
          steps: ["Open Canva and search for a template.", "Change the words to your message.", "Swap in your photos and colors.", "Add your name, address and how to reach you.", "Check every word, then download or share."],
          words: [["Template", "a ready-made design you change to make your own."], ["Free plan", "the version of a tool you can use without paying, usually with some limits."]],
          slides: [
            { title: "Canva", bullets: ["Browser and phone app", "Free plan with many templates", "Check canva.com for today's free features"] },
            { title: "Start from a template", bullets: ["Search \"restaurant flyer\" or \"salon post\"", "Change words, colors and photos", "Use text from your chat assistant"] },
            { title: "Keep it clear", bullets: ["One main message, big words", "Name, address, how to reach you", "Check every word before sharing"] }
          ],
          tryIt: "Make a flyer or post for one real offer or event in your business using a Canva template. Check every word and save it.",
          youCanNow: "make a clear flyer or social post from a template with a free design tool.",
          quickCheck: [
            { objective: "O3", q: "What does a clear flyer have?", options: ["One main message and how to reach you", "As much text as fits", "Every product you sell", "No contact details"], answer: 0, why: "One main message and contact details make a flyer easy to act on." },
            { objective: "O3", q: "You find a great photo online for your flyer. What would you do?", options: ["Use it because it is online", "Crop it so no one notices", "Use your own photo or one you have the right to use", "Ask AI to copy it"], answer: 2, why: "You may use only photos you took or have the right to use." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: The main kinds of AI tools",
        questions: [
          { objective: "O1", q: "Which kind of tool is best for writing a reply to a customer?", options: ["A receipt printer", "A chat assistant", "A barcode scanner", "A calculator"], answer: 1, why: "Chat assistants write and rewrite text." },
          { objective: "O1", q: "Which tool is known for flyer and social post templates?", options: ["A calculator", "A POS system", "Excel only", "Canva"], answer: 3, why: "Canva is a design tool with templates." },
          { objective: "O1", q: "What is a good way to start using AI tools?", options: ["One tool per job, learned well", "Install twenty apps at once", "Pay for every plan", "Avoid all tools"], answer: 0, why: "Start simple and learn one tool well." },
          { objective: "O2", q: "You gave your prices to the chat assistant. What do you check in its price board?", options: ["Nothing", "Only the colors", "Every number it repeats back", "Only the title"], answer: 2, why: "AI can repeat numbers wrongly." },
          { objective: "O3", q: "Making a flyer in Canva, you should start from:", options: ["A blank page every time", "A competitor's flyer", "A template you change to your own", "A photo you do not have rights to"], answer: 2, why: "Templates save time; you change them to yours." }
        ]
      }
    },
    {
      name: "Chapter 2: AI in your everyday office tools, and your toolkit",
      lessons: [
        {
          objectives: ["O4"],
          title: "AI help in documents: Google Docs and Microsoft Word",
          minutes: 5,
          goal: "Turn a rough note into a clean business document.",
          text: [
            "Most businesses keep price lists, policies and letters in Google Docs or Microsoft Word. Both are free to use in a web browser with a Google or Microsoft account. Google and Microsoft add AI helpers (Gemini and Copilot) inside them on some plans; what you see depends on your account.",
            "If your document app has an AI helper, you can ask it to draft or rewrite right on the page. If not, draft in a chat assistant and paste the text in. Either way, the document is where you keep the final, checked version.",
            "Good document jobs: a cancellation policy, a staff opening checklist, a price list, a letter to your landlord. For policies and anything legal, have a professional or the official source check it."
          ],
          steps: ["Write rough notes of what you want.", "Ask an AI helper (in the document or a chat assistant) to turn them into a clean document.", "Paste or keep it in Docs or Word.", "Check facts and fix the wording.", "Save it with a clear name."],
          words: [["Google Docs", "Google's free word processor in a web browser."], ["Microsoft Word", "Microsoft's word processor, free on the web with a Microsoft account."], ["Policy", "a written rule for your business, like how cancellations work."]],
          slides: [
            { title: "Your documents", bullets: ["Google Docs or Microsoft Word", "Free in a browser with an account", "AI helpers on some plans"] },
            { title: "Two ways to use AI here", bullets: ["Use the AI helper in the document, if you have one", "Or draft in a chat assistant and paste it in"] },
            { title: "Good document jobs", bullets: ["Cancellation policy", "Opening checklist and price list", "Have a professional check legal wording"] }
          ],
          tryIt: "Write five rough lines about your cancellation or late policy. Use AI to turn them into a clear, polite policy and save it in Docs or Word.",
          youCanNow: "turn rough notes into a clean business document using AI and an office tool.",
          quickCheck: [
            { objective: "O4", q: "Where should the final, checked version of a business policy live?", options: ["Only in the AI chat", "In your document in Docs or Word", "On a sticky note", "In a text to yourself"], answer: 1, why: "Your document keeps the checked version safe and easy to share." },
            { objective: "O4", q: "AI turned your notes into a refund policy that uses legal words. What would you do?", options: ["Post it without reading", "Delete the legal words", "Ask AI if it is legal", "Have a professional or the official source check the wording"], answer: 3, why: "Legal wording should be checked by a professional or official source." }
          ]
        },
        {
          objectives: ["O5"],
          title: "AI help in spreadsheets: Sheets and Excel",
          minutes: 5,
          goal: "Build a simple sales or inventory table and get AI help reading it.",
          text: [
            "A spreadsheet is a grid of rows and columns for numbers. Google Sheets and Microsoft Excel are the common choices. A simple table, like Date, Item, Quantity, Price, Total, already tells you a lot.",
            "AI can help in two ways. It can tell you how to do something (\"How do I total column E in Google Sheets?\"), and on some plans it can work inside the sheet. You can also paste a small table with no private details into a chat assistant and ask, \"Which item sold best?\"",
            "Check the math. AI is better at explaining than calculating, so let the spreadsheet do the totals with a SUM formula, and use AI to explain or suggest what to look at."
          ],
          steps: ["Make columns: Date, Item, Quantity, Price, Total.", "Enter one week of sales.", "Ask AI how to add a SUM total, and do it.", "Ask AI which item sold best, then confirm in the sheet."],
          words: [["Spreadsheet", "a grid of rows and columns for numbers, like Google Sheets or Excel."], ["Formula", "an instruction in a cell that calculates, like =SUM(E2:E20)."]],
          slides: [
            { title: "A simple sales table", bullets: ["Date, Item, Quantity, Price, Total", "Google Sheets or Microsoft Excel"] },
            { title: "How AI helps", bullets: ["Explains how: \"How do I total column E?\"", "Works inside the sheet on some plans", "Reads a small table with no private details"] },
            { title: "Let the sheet do the math", bullets: ["Use a SUM formula for totals", "AI explains; the sheet calculates", "Confirm what AI says in your data"] }
          ],
          tryIt: "Make a sales or inventory table with at least 10 rows. Use a SUM formula for the total, and ask AI which item sold best. Confirm the answer in your sheet.",
          youCanNow: "build a simple sales table and use AI to help you read it, while the spreadsheet does the math.",
          quickCheck: [
            { objective: "O5", q: "What is =SUM(E2:E20)?", options: ["A formula that adds up a column", "A file name", "A chat prompt", "A password"], answer: 0, why: "SUM is a spreadsheet formula that adds numbers." },
            { objective: "O5", q: "AI says your best-selling item last month was coffee. What would you do?", options: ["Order more coffee right away", "Ask AI again until it agrees", "Confirm it in your sheet", "Delete the sales table"], answer: 2, why: "You confirm AI's reading of your data in the sheet itself." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Building your starter AI toolkit",
          minutes: 5,
          goal: "Choose three to five tools, assign each a job, and set a safety rule for each.",
          text: [
            "Your toolkit is a short list: the tool, its job, which plan, and a rule. For example: ChatGPT (free) for replies and descriptions; Canva (free) for flyers; Google Sheets for weekly sales; Google Docs for policies.",
            "Before paying for any upgrade, use the free plan for a month and write down what you could not do. Pay only for a feature you truly need, and check the price on the official site.",
            "Safety rules travel with every tool: no customer card numbers, passwords or private details; check every fact before customers see it; use only photos and words you have the right to use."
          ],
          steps: ["List three to five tools.", "Write one job for each.", "Write \"free\" or the plan you pay for.", "Write one safety rule for each.", "Make one real item with each tool."],
          words: [["Toolkit", "the short list of tools you use and what each is for."], ["Upgrade", "a paid plan with more features."]],
          slides: [
            { title: "Your toolkit table", bullets: ["Tool | Job | Plan | Safety rule", "Three to five tools is enough"] },
            { title: "Before you pay", bullets: ["Use the free plan for a month", "Write down what you could not do", "Check the price on the official site"] },
            { title: "Rules for every tool", bullets: ["No card numbers, passwords or private details", "Check facts before customers see them", "Use only photos you have the right to use"] }
          ],
          tryIt: "Final task: make your toolkit table, then make one real item with each tool: a customer message, a flyer or post, and a price list or sales table.",
          youCanNow: "choose, organize and safely use a small set of AI tools for your business.",
          quickCheck: [
            { objective: "O6", q: "What does your toolkit table list?", options: ["Every app on your phone", "Tool, job, plan and safety rule", "Only the prices of tools", "Your customers' names"], answer: 1, why: "Each row says which tool, its job, its plan and its safety rule." },
            { objective: "O6", q: "A tool offers a paid upgrade. When would you pay for it?", options: ["Right away, to be safe", "Never, under any condition", "When a friend buys it", "When you need a feature the free plan lacks"], answer: 3, why: "Pay only when the free plan is missing something you really need." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Office tools and your toolkit",
        questions: [
          { objective: "O4", q: "Your document app has no AI helper. What can you do?", options: ["Draft in a chat assistant and paste it in", "Give up", "Buy a new computer", "Write it in Excel"], answer: 0, why: "A chat assistant draft can be pasted into any document." },
          { objective: "O4", q: "Who should check the wording of a legal policy?", options: ["Only the AI", "Nobody", "A customer", "A professional or the official source"], answer: 3, why: "Legal wording needs a professional check." },
          { objective: "O5", q: "What should do the totals in your sales table?", options: ["The AI's guess", "A SUM formula in the spreadsheet", "Mental math", "A social post"], answer: 1, why: "Spreadsheets calculate reliably; AI explains." },
          { objective: "O6", q: "Before paying for an AI upgrade, you should:", options: ["Use the free plan for a while and note what you are missing", "Pay right away", "Ask a pop-up ad", "Buy every plan"], answer: 0, why: "Pay only for what you truly need." },
          { objective: "O6", q: "Which is a safety rule for every tool?", options: ["Paste card numbers to save time", "Share your password with the tool", "Never put customer card numbers or passwords in it", "Use any photo online"], answer: 2, why: "Private data stays out of AI tools." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Essential AI Tools for Small Businesses",
    questions: [
      { objective: "O1", q: "ChatGPT, Copilot and Gemini are examples of:", options: ["Cash registers", "Chat assistants", "Delivery apps", "Banks"], answer: 1, why: "They are AI chat assistants." },
      { objective: "O1", q: "Which tool kind is best for a menu design?", options: ["A thermometer", "A calculator", "A bank app", "A design tool like Canva"], answer: 3, why: "Design tools make menus and flyers." },
      { objective: "O1", q: "AI features may also appear inside:", options: ["Nowhere else", "Only toys", "Printers only", "Apps you already use, like booking or POS software"], answer: 3, why: "Many business apps add AI features." },
      { objective: "O2", q: "In a chat session, when do you give your business details?", options: ["Never", "Once at the start", "Only at the end", "In every word"], answer: 1, why: "Setting them up once lets you ask for several items." },
      { objective: "O2", q: "\"Give me three versions\" helps you:", options: ["Pay less tax", "Delete the chat", "Choose the best option", "Share passwords"], answer: 2, why: "Options let you pick." },
      { objective: "O2", q: "A text reminder template should use:", options: ["\"[customer name]\" as a placeholder", "The customer's card number", "Your password", "A real customer's address"], answer: 0, why: "Placeholders keep private details out." },
      { objective: "O3", q: "Where do you check what Canva's free plan includes today?", options: ["A guess", "An old blog post", "canva.com", "A competitor"], answer: 2, why: "The official site has current plan details." },
      { objective: "O3", q: "A clear flyer has:", options: ["One main message and how to reach you", "Ten messages", "Tiny text", "No business name"], answer: 0, why: "Simple and readable works best." },
      { objective: "O3", q: "Which photos should you use?", options: ["Any photo online", "Your own or ones you have the right to use", "A competitor's", "Random social media pictures"], answer: 1, why: "Use only images you have rights to." },
      { objective: "O4", q: "Google Docs and Microsoft Word are:", options: ["Design tools only", "Phone carriers", "Payment apps", "Document tools"], answer: 3, why: "They are word processors." },
      { objective: "O4", q: "Where should the final checked version of a policy live?", options: ["In your document (Docs or Word)", "Only in the AI chat", "On a sticky note", "Nowhere"], answer: 0, why: "Documents keep the final version you can share and update." },
      { objective: "O4", q: "A good document job for AI help is:", options: ["Choosing a lawyer", "Signing a contract for you", "Filing taxes", "An opening checklist"], answer: 3, why: "Checklists are low-risk writing." },
      { objective: "O5", q: "A spreadsheet is:", options: ["A chat assistant", "A design template", "A grid of rows and columns for numbers", "A bank"], answer: 2, why: "Sheets and Excel organize numbers." },
      { objective: "O5", q: "=SUM(E2:E20) is an example of a:", options: ["Prompt", "Formula", "Template", "Password"], answer: 1, why: "Formulas calculate in cells." },
      { objective: "O5", q: "AI says your best seller is tacos. You should:", options: ["Tell customers", "Assume it is right", "Delete the sheet", "Confirm it in your sheet"], answer: 3, why: "Check AI's reading against your data." },
      { objective: "O5", q: "Before pasting a table into a chat assistant, remove:", options: ["Item names", "Dates", "Customer names and card numbers", "Totals"], answer: 2, why: "Private details stay out." },
      { objective: "O6", q: "How many tools should a starter toolkit have?", options: ["Three to five", "Fifty", "None", "One hundred"], answer: 0, why: "A short list you actually use." },
      { objective: "O6", q: "Your toolkit table lists:", options: ["Passwords", "Tool, job, plan and safety rule", "Customer card numbers", "Only prices"], answer: 1, why: "Those four columns keep it useful and safe." },
      { objective: "O6", q: "When should you pay for an upgrade?", options: ["Always on day one", "When you need a feature the free plan lacks", "When an ad says so", "Never check the price"], answer: 1, why: "Pay only for real needs, after checking the price." },
      { objective: "O6", q: "Which rule applies to every AI tool?", options: ["Check facts before customers see them", "Share passwords to save time", "Copy any photo", "Trust every number"], answer: 0, why: "Checking facts protects your business." }
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
      9,
      10,
      12,
      14,
      16,
      19
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      {
        name: "Toolkit table",
        objective: "O6",
        notYet: "Fewer than three tools, or a missing job, plan or safety rule.",
        meets: "Three to five tools, each with a job, plan and safety rule.",
        exceeds: "Notes when the owner would consider paying for an upgrade."
      },
      {
        name: "Customer message",
        objective: "O2",
        notYet: "No message, or it has a real customer's details or wrong facts.",
        meets: "A checked customer message made with the chat assistant, using placeholders.",
        exceeds: "The owner compared more than one version and chose the best."
      },
      {
        name: "Flyer or post",
        objective: "O3",
        notYet: "No flyer, or it has errors or photos without rights.",
        meets: "A flyer or post with one main message and contact details, every word checked.",
        exceeds: "Uses the owner's own photos and is ready to post or print."
      },
      {
        name: "Price list or sales table",
        objective: "O5",
        notYet: "No table, or totals typed by hand.",
        meets: "A price list in Docs or Word, or a sales table with a SUM formula.",
        exceeds: "AI's reading of the table was confirmed in the sheet."
      }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Owners who use at least two toolkit tools each week (30-day follow-up survey)",
      "Owners who report time or money saved by using free plans (follow-up survey)",
      "Owners who start another Koach Learn small business course within 30 days"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A computer or smartphone with internet (a computer is easier for spreadsheets)",
      "Free accounts for a chat assistant, Canva and Google Docs and Sheets or Microsoft Word and Excel",
      "Real business details: prices, an offer or event, and a few weeks of sales or stock numbers",
      "About 60 minutes in total: lessons, practice, checks and the final task"
    ],
    facilitatorNotes: [
      "Plan names and features change; open each tool's official site together to check its current free plan.",
      "Have owners use made-up customer names and no card numbers in practice tables and messages.",
      "Spreadsheets are new for many owners; demo one SUM formula live before Lesson 5's task.",
      "Send legal wording in policies to a professional or official source, SCORE or a Small Business Development Center.",
      "Score the toolkit and items with the rubric, and give feedback on one Not yet row at a time."
    ]
  }
};
