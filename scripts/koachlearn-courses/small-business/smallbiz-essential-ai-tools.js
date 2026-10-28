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
  chapters: [
    {
      name: "Chapter 1: The main kinds of AI tools",
      lessons: [
        {
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
          youCanNow: "name the main kinds of AI tools and match each to a job in your business."
        },
        {
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
          youCanNow: "use one chat session to make several business items from your own details."
        },
        {
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
          youCanNow: "make a clear flyer or social post from a template with a free design tool."
        }
      ],
      check: {
        title: "Knowledge Check 1: The main kinds of AI tools",
        questions: [
          { q: "Which kind of tool is best for writing a reply to a customer?", options: ["A receipt printer", "A chat assistant", "A barcode scanner", "A calculator"], answer: 1, why: "Chat assistants write and rewrite text." },
          { q: "Which tool is known for flyer and social post templates?", options: ["A calculator", "A POS system", "Excel only", "Canva"], answer: 3, why: "Canva is a design tool with templates." },
          { q: "What is a good way to start using AI tools?", options: ["One tool per job, learned well", "Install twenty apps at once", "Pay for every plan", "Avoid all tools"], answer: 0, why: "Start simple and learn one tool well." },
          { q: "You gave your prices to the chat assistant. What do you check in its price board?", options: ["Nothing", "Only the colors", "Every number it repeats back", "Only the title"], answer: 2, why: "AI can repeat numbers wrongly." },
          { q: "Making a flyer in Canva, you should start from:", options: ["A blank page every time", "A competitor's flyer", "A template you change to your own", "A photo you do not have rights to"], answer: 2, why: "Templates save time; you change them to yours." }
        ]
      }
    },
    {
      name: "Chapter 2: AI in your everyday office tools, and your toolkit",
      lessons: [
        {
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
          youCanNow: "turn rough notes into a clean business document using AI and an office tool."
        },
        {
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
          youCanNow: "build a simple sales table and use AI to help you read it, while the spreadsheet does the math."
        },
        {
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
          youCanNow: "choose, organize and safely use a small set of AI tools for your business."
        }
      ],
      check: {
        title: "Knowledge Check 2: Office tools and your toolkit",
        questions: [
          { q: "Your document app has no AI helper. What can you do?", options: ["Draft in a chat assistant and paste it in", "Give up", "Buy a new computer", "Write it in Excel"], answer: 0, why: "A chat assistant draft can be pasted into any document." },
          { q: "Who should check the wording of a legal policy?", options: ["Only the AI", "Nobody", "A customer", "A professional or the official source"], answer: 3, why: "Legal wording needs a professional check." },
          { q: "What should do the totals in your sales table?", options: ["The AI's guess", "A SUM formula in the spreadsheet", "Mental math", "A social post"], answer: 1, why: "Spreadsheets calculate reliably; AI explains." },
          { q: "Before paying for an AI upgrade, you should:", options: ["Use the free plan for a while and note what you are missing", "Pay right away", "Ask a pop-up ad", "Buy every plan"], answer: 0, why: "Pay only for what you truly need." },
          { q: "Which is a safety rule for every tool?", options: ["Paste card numbers to save time", "Share your password with the tool", "Never put customer card numbers or passwords in it", "Use any photo online"], answer: 2, why: "Private data stays out of AI tools." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Essential AI Tools for Small Businesses",
    questions: [
      { q: "ChatGPT, Copilot and Gemini are examples of:", options: ["Cash registers", "Chat assistants", "Delivery apps", "Banks"], answer: 1, why: "They are AI chat assistants." },
      { q: "Which tool kind is best for a menu design?", options: ["A thermometer", "A calculator", "A bank app", "A design tool like Canva"], answer: 3, why: "Design tools make menus and flyers." },
      { q: "AI features may also appear inside:", options: ["Nowhere else", "Only toys", "Printers only", "Apps you already use, like booking or POS software"], answer: 3, why: "Many business apps add AI features." },
      { q: "In a chat session, when do you give your business details?", options: ["Never", "Once at the start", "Only at the end", "In every word"], answer: 1, why: "Setting them up once lets you ask for several items." },
      { q: "\"Give me three versions\" helps you:", options: ["Pay less tax", "Delete the chat", "Choose the best option", "Share passwords"], answer: 2, why: "Options let you pick." },
      { q: "A text reminder template should use:", options: ["\"[customer name]\" as a placeholder", "The customer's card number", "Your password", "A real customer's address"], answer: 0, why: "Placeholders keep private details out." },
      { q: "Where do you check what Canva's free plan includes today?", options: ["A guess", "An old blog post", "canva.com", "A competitor"], answer: 2, why: "The official site has current plan details." },
      { q: "A clear flyer has:", options: ["One main message and how to reach you", "Ten messages", "Tiny text", "No business name"], answer: 0, why: "Simple and readable works best." },
      { q: "Which photos should you use?", options: ["Any photo online", "Your own or ones you have the right to use", "A competitor's", "Random social media pictures"], answer: 1, why: "Use only images you have rights to." },
      { q: "Google Docs and Microsoft Word are:", options: ["Design tools only", "Phone carriers", "Payment apps", "Document tools"], answer: 3, why: "They are word processors." },
      { q: "Where should the final checked version of a policy live?", options: ["In your document (Docs or Word)", "Only in the AI chat", "On a sticky note", "Nowhere"], answer: 0, why: "Documents keep the final version you can share and update." },
      { q: "A good document job for AI help is:", options: ["Choosing a lawyer", "Signing a contract for you", "Filing taxes", "An opening checklist"], answer: 3, why: "Checklists are low-risk writing." },
      { q: "A spreadsheet is:", options: ["A chat assistant", "A design template", "A grid of rows and columns for numbers", "A bank"], answer: 2, why: "Sheets and Excel organize numbers." },
      { q: "=SUM(E2:E20) is an example of a:", options: ["Prompt", "Formula", "Template", "Password"], answer: 1, why: "Formulas calculate in cells." },
      { q: "AI says your best seller is tacos. You should:", options: ["Tell customers", "Assume it is right", "Delete the sheet", "Confirm it in your sheet"], answer: 3, why: "Check AI's reading against your data." },
      { q: "Before pasting a table into a chat assistant, remove:", options: ["Item names", "Dates", "Customer names and card numbers", "Totals"], answer: 2, why: "Private details stay out." },
      { q: "How many tools should a starter toolkit have?", options: ["Three to five", "Fifty", "None", "One hundred"], answer: 0, why: "A short list you actually use." },
      { q: "Your toolkit table lists:", options: ["Passwords", "Tool, job, plan and safety rule", "Customer card numbers", "Only prices"], answer: 1, why: "Those four columns keep it useful and safe." },
      { q: "When should you pay for an upgrade?", options: ["Always on day one", "When you need a feature the free plan lacks", "When an ad says so", "Never check the price"], answer: 1, why: "Pay only for real needs, after checking the price." },
      { q: "Which rule applies to every AI tool?", options: ["Check facts before customers see them", "Share passwords to save time", "Copy any photo", "Trust every number"], answer: 0, why: "Checking facts protects your business." }
    ]
  }
};
