"use strict";

// Koach Learn course: Entrepreneurs -> "AI Tools Every Entrepreneur Should Know". Skill-building course in the shape of re-entry/reentry-ai-digital-confidence.js (see scripts/koachlearn-courses/README.md).

module.exports = {
  id: "entrepreneurs-ai-tools",
  category: "Entrepreneurs",
  name: "AI Tools Every Entrepreneur Should Know",
  skills: "Choosing the right kind of AI tool, Using a chat assistant for writing, Making graphics with Canva, Using AI in documents and spreadsheets, Building a simple AI toolkit",
  outcome: "choose and use free AI tools for the main jobs in your business (writing, design, documents and spreadsheets, and meetings) and put together a one-page toolkit that says which tool you use for which job.",
  about: [
    "There are thousands of AI tools, and new ones appear every week. This course is for business owners who want a short, practical toolkit instead of chasing every new app.",
    "You will learn the main kinds of AI tools, then practice with real, widely used free options: chat assistants (ChatGPT, Microsoft Copilot, Google Gemini), design (Canva), documents and spreadsheets (Google Docs and Sheets, Microsoft 365), and note-taking and meeting help.",
    "Each lesson is about five minutes and ends with a task you do on your own business. There is a knowledge check after each chapter and a 20-question quiz at the end. Tool names, features and prices change often, so the course tells you how to check what is current."
  ],
  finalTask: "Make a one-page \"My AI Toolkit\" for your business: list four jobs (writing, design, documents or numbers, and meetings or notes), the free tool you will use for each, one thing you made with it during this course, and one rule for keeping customer data safe in that tool.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Small business owners and side-hustlers who want a short, practical set of AI tools instead of chasing every new app.",
    startingPoint: "Use email, a phone and perhaps Google or Microsoft office tools. Some have tried a chat assistant. Most have no plan for which tool does which job, or rules for customer data in those tools.",
    gap: "New AI tools appear every week, and owners waste time and money trying too many or paying twice for the same job. Others put customer data into tools without checking settings. Owners need one tested free tool per main job and a safety rule for each.",
    constraints: [
      "Plain words; no technical background needed",
      "Devices: a phone or computer; free plans only",
      "Time: about five minutes per lesson plus a short task on the owner's own business",
      "Tool names, features and prices change often; check each tool's own pricing page",
      "Ask permission before recording anyone, and keep customer data out of AI chats"
    ],
    prerequisites: "\"Introduction to AI for Entrepreneurs\", or some experience asking an AI assistant for help."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Given any AI tool", action: "identify which of four business jobs it does: writing, design, documents and numbers, or meetings and notes", standard: "and check its job, cost and fit before adding it" },
    { id: "O2", condition: "Using the accounts your business already has", action: "choose a free chat assistant and use it for a real business writing job", standard: "after comparing the same prompt in two assistants" },
    { id: "O3", condition: "Using a Canva template", action: "make a branded graphic with one message, one picture and one call to action", standard: "with every AI image checked for errors and copied logos before use" },
    { id: "O4", condition: "Given a simple sales sheet or document", action: "use AI to write a spreadsheet formula and draft a document", standard: "testing the formula on rows checked by hand and sending legal documents for review" },
    { id: "O5", condition: "Given a meeting or voice memo", action: "turn it into written notes and an action list with AI", standard: "with who, what and by when for each item, and permission before recording others" },
    { id: "O6", condition: "At the end of the course", action: "create a one-page AI toolkit with one tool per job and a safety rule for each", standard: "listing something you made with each tool" }
  ],
  chapters: [
    {
      name: "Chapter 1: The main kinds of AI tools",
      lessons: [
        {
          objectives: ["O1"],
          title: "The AI tool map: four jobs, not four hundred apps",
          minutes: 4,
          goal: "Sort AI tools by the job they do for your business.",
          text: [
            "Most AI tools a small business needs fall into four jobs. Writing and thinking: chat assistants like ChatGPT, Microsoft Copilot and Google Gemini. Design: tools like Canva that make graphics, flyers and social images. Documents and numbers: AI built into Google Docs and Sheets or Microsoft Word and Excel. Meetings and notes: tools that record, transcribe and summarize.",
            "Many tools now do more than one job. A chat assistant can also make an image or read a spreadsheet you upload. That is fine, but starting with one tool per job keeps things simple.",
            "Before you add any new tool, ask: What job does it do? Do I already have a tool for that job? Is there a free plan? What happens to the data I put in?"
          ],
          words: [["Chat assistant", "an AI tool you talk to in a chat window, such as ChatGPT, Copilot or Gemini."], ["Transcribe", "turn spoken words into written text."]],
          slides: [
            { title: "Four jobs", bullets: ["Writing and thinking: chat assistants", "Design: Canva and similar", "Documents and numbers: Docs, Sheets, Word, Excel", "Meetings and notes: transcribe and summarize"] },
            { title: "Start simple", bullets: ["One tool per job at first", "Many tools overlap, and that is fine"] },
            { title: "Before adding a tool, ask", bullets: ["What job does it do?", "Do I already have one?", "Is there a free plan? Where does my data go?"] }
          ],
          tryIt: "Write the four jobs on a page. Next to each, write any tool you already use for it (even a non-AI one). Leave blanks where you have none.",
          youCanNow: "sort AI tools into four business jobs and ask four questions before adding a new one.",
          quickCheck: [
            { objective: "O1", q: "Which job does a transcription tool do?", options: ["Meetings and notes", "Design", "Writing ads", "Payments"], answer: 0, why: "Transcription turns speech into notes, which is the meetings and notes job." },
            { objective: "O1", q: "A new AI app promises to write social posts, but you already have a chat assistant that does it. What do you do?", options: ["Sign up for it at once", "Skip it unless it does the job clearly better", "Pay for both", "Delete your chat assistant"], answer: 1, why: "One tool per job keeps things simple and avoids paying twice." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Chat assistants: picking one and using it well",
          minutes: 5,
          goal: "Open a free chat assistant and use it for a real business writing job.",
          text: [
            "ChatGPT (chatgpt.com), Microsoft Copilot (copilot.microsoft.com) and Google Gemini (gemini.google.com) all have free versions. They all write, summarize, brainstorm and explain. Pick the one that fits the accounts you already use: Copilot if your business runs on Microsoft, Gemini if it runs on Google, or any of them if you are not sure.",
            "Use the same three-part prompt for each: the task, your business context, and the format. Then improve it with follow-ups such as \"shorter\", \"friendlier\" or \"give me three options\".",
            "Try the same prompt in two assistants and compare. You will quickly see which one fits your style. Free plans have limits that change; check the tool's own pricing page for what is included today."
          ],
          steps: ["Open one assistant in a web browser or its official app.", "Write a three-part prompt for a real business job.", "Ask for one improvement.", "Paste the same prompt into a second assistant and compare."],
          words: [["Free plan", "a version of a tool you can use without paying, usually with limits."]],
          slides: [
            { title: "Three free chat assistants", bullets: ["ChatGPT: chatgpt.com", "Microsoft Copilot: copilot.microsoft.com", "Google Gemini: gemini.google.com"] },
            { title: "Which one?", bullets: ["Microsoft accounts: try Copilot", "Google accounts: try Gemini", "Not sure: try two and compare"] },
            { title: "Use it well", bullets: ["Task + context + format", "Ask for one change at a time", "Check limits on the tool's own pricing page"] }
          ],
          tryIt: "Write a prompt asking for a 50-word description of your business for a social media profile. Run it in two chat assistants. Keep the better one and note which tool you chose.",
          youCanNow: "choose a chat assistant that fits your accounts and use it for real business writing.",
          quickCheck: [
            { objective: "O2", q: "What is a fair way to compare two chat assistants?", options: ["Pick the one with the nicest logo", "Ask a different question in each", "Run the same prompt in both", "Use whichever opens first"], answer: 2, why: "The same prompt shows which tool answers your need better." },
            { objective: "O2", q: "Your shop uses Outlook and Word every day. Which chat assistant do you try first?", options: ["One that needs a new account", "A paid tool you have never heard of", "None", "Microsoft Copilot"], answer: 3, why: "A tool that fits the accounts you already use is a natural first choice." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Design with AI in Canva",
          minutes: 5,
          goal: "Make a simple branded graphic for your business with Canva.",
          text: [
            "Canva (canva.com) is a design tool with a free plan, thousands of templates and AI features that can suggest text, generate images and resize designs. You do not need design training to make a clean flyer or social post.",
            "Start from a template, not a blank page. Search for what you need, such as \"Instagram post bakery\" or \"flyer cleaning service\". Change the words, swap in your colors and logo, and keep it simple: one message, one picture, one call to action.",
            "If you use an AI-generated image, look closely for errors such as strange hands or misspelled words, and do not make an image that copies someone else's logo, brand or a real person without permission."
          ],
          steps: ["Open canva.com and sign in or create a free account.", "Search for a template for the design you need.", "Change the text to your message and call to action.", "Add your colors and logo.", "Check spelling and images, then download."],
          words: [["Template", "a ready-made design you change to fit your business."], ["Brand colors", "the two or three colors you always use so customers recognize you."]],
          slides: [
            { title: "Canva for business", bullets: ["Free plan with templates", "AI to suggest text and make images", "No design training needed"] },
            { title: "Start from a template", bullets: ["Search \"flyer cleaning service\" or similar", "Change the words", "Add your colors and logo"] },
            { title: "Keep it simple", bullets: ["One message", "One picture", "One call to action"] },
            { title: "Check AI images", bullets: ["Look for strange hands or misspelled words", "Do not copy other brands or real people"] }
          ],
          tryIt: "Make one social post or flyer for your business in Canva from a template. Use your business description from the last lesson and one call to action. Download it.",
          youCanNow: "make a clean, branded graphic in Canva and check AI images before you use them.",
          quickCheck: [
            { objective: "O3", q: "What is a call to action on a flyer?", options: ["A clear next step, such as \"Text us to book\"", "The picture", "The font size", "Your logo"], answer: 0, why: "A call to action tells people what to do next." },
            { objective: "O3", q: "AI makes an image for you that looks like a famous brand's logo. What do you do?", options: ["Use it; AI made it", "Do not use it and make a different image", "Shrink it so no one notices", "Add your name on top"], answer: 1, why: "You should not use images that copy another company's logo." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: The main kinds of AI tools",
        questions: [
          { objective: "O1", q: "Which tool fits the \"design\" job?", options: ["A calculator", "Canva", "An email inbox", "A bank app"], answer: 1, why: "Canva makes flyers, social images and other graphics." },
          { objective: "O2", q: "Your business uses Microsoft Outlook and Word. Which chat assistant is a natural first choice?", options: ["A map app", "A drawing app", "A music app", "Microsoft Copilot"], answer: 3, why: "Copilot fits businesses that already use Microsoft accounts." },
          { objective: "O1", q: "Before adding a new AI tool, which question matters most?", options: ["What job does it do, and do I already have a tool for it?", "Is the logo nice?", "Is it popular on TikTok?", "Does it have dark mode?"], answer: 0, why: "Start from the job; avoid paying for tools that repeat what you have." },
          { objective: "O3", q: "What is the best way to start a design in Canva?", options: ["A blank page", "Copying a competitor's flyer", "A template you change", "Typing your bank details"], answer: 2, why: "Templates give you a clean layout to adapt." },
          { objective: "O3", q: "An AI image for your flyer has a misspelled word in the sign. What do you do?", options: ["Use it anyway", "Post it twice", "Fix it or make a new image before using it", "Blame the customer"], answer: 2, why: "Check AI images for errors before they go out." }
        ]
      }
    },
    {
      name: "Chapter 2: AI in your daily business tools",
      lessons: [
        {
          objectives: ["O4"],
          title: "AI in documents and spreadsheets",
          minutes: 5,
          goal: "Use AI to draft a document and to understand a spreadsheet.",
          text: [
            "Google Docs and Sheets and Microsoft Word and Excel now include AI helpers on many plans (Gemini in Google Workspace, Copilot in Microsoft 365). Which features you get depends on your plan, and that changes, so check the help pages for your account.",
            "If your plan does not include the built-in helper, you can still use a free chat assistant: paste in text with no private details, or describe your columns, and ask for a draft, a formula or an explanation.",
            "Useful asks: \"Turn these notes into a one-page service agreement draft for my lawyer to review.\" \"Write a spreadsheet formula that adds up column C when column B says Paid.\" \"Explain what this formula does.\" Always test a formula on a few rows you can check by hand."
          ],
          steps: ["Open a document or spreadsheet you already use.", "Look for the built-in AI helper; if there is none, open a chat assistant.", "Ask for a draft or a formula, describing your columns without private data.", "Test any formula on a few rows you can check yourself."],
          words: [["Formula", "an instruction in a spreadsheet cell that calculates something, like a total."], ["Google Workspace / Microsoft 365", "the paid business versions of Google's and Microsoft's office tools."]],
          slides: [
            { title: "Built-in AI helpers", bullets: ["Gemini in Google Workspace", "Copilot in Microsoft 365", "Features depend on your plan; check help pages"] },
            { title: "No built-in helper?", bullets: ["Use a free chat assistant", "Describe your columns, no private data", "Ask for a draft, formula or explanation"] },
            { title: "Test before you trust", bullets: ["Try the formula on a few rows", "Check the answer by hand", "Have a lawyer review legal drafts"] }
          ],
          sources: [{ name: "Google Workspace: Gemini features", url: "https://workspace.google.com/solutions/ai/" }, { name: "Microsoft Support: Copilot", url: "https://support.microsoft.com/en-us/copilot" }],
          tryIt: "Describe a simple sales sheet (date, item, amount, paid or not) to an AI assistant and ask for a formula that totals only the paid sales. Make a five-row test sheet and check the formula by hand.",
          youCanNow: "use AI to draft documents and write and test spreadsheet formulas.",
          quickCheck: [
            { objective: "O4", q: "What is a spreadsheet formula?", options: ["A chart", "A font", "An instruction in a cell that calculates something", "A file name"], answer: 2, why: "Formulas calculate results from the data in your sheet." },
            { objective: "O4", q: "You want AI to write a formula for your customer sales sheet. What do you share?", options: ["The full sheet with customer names", "Customer phone numbers", "Your bank login", "A description of the columns without private data"], answer: 3, why: "Describing the columns gets you the formula without sharing private data." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Meeting notes and transcription",
          minutes: 4,
          goal: "Turn a meeting or voice memo into clear notes and action items with AI.",
          text: [
            "Many tools can now turn speech into text: the voice recorder on many phones, the transcription features in Microsoft Teams, Google Meet and Zoom on some plans, and voice typing in Google Docs (Tools, then Voice typing) or dictation in Word.",
            "Once you have the text, a chat assistant can turn it into a summary with decisions and action items: who does what by when. Remove private customer details before you paste.",
            "Always tell people before you record or transcribe a call. Laws about recording calls differ by state and country, and some require everyone's consent, so asking first is the safe habit."
          ],
          steps: ["Tell everyone you want to record or transcribe, and get a yes.", "Record or transcribe the meeting or a voice memo.", "Remove private details from the text.", "Ask AI: \"Summarize this into decisions and action items: who, what, by when.\"", "Check the summary against what you remember."],
          words: [["Action item", "a task from a meeting with a person and a due date."], ["Consent", "permission given by a person before something is done."]],
          slides: [
            { title: "Speech to text", bullets: ["Phone voice recorders", "Teams, Meet and Zoom on some plans", "Voice typing in Docs, dictation in Word"] },
            { title: "Text to action items", bullets: ["Paste the text, minus private details", "Ask for decisions and action items", "Who, what, by when"] },
            { title: "Always ask first", bullets: ["Tell people before recording", "Recording laws differ by place", "Some places require everyone's consent"] }
          ],
          tryIt: "Record a two-minute voice memo about what your business must do this week. Transcribe it with voice typing or your phone, then ask an AI assistant to turn it into an action list with dates.",
          youCanNow: "turn spoken notes into a written action list, and ask permission before recording others.",
          quickCheck: [
            { objective: "O5", q: "What three things should each action item say?", options: ["Who, what and by when", "Where, why and how much", "The date, the weather and the topic", "Only the topic"], answer: 0, why: "Who does what by when makes an action item clear." },
            { objective: "O5", q: "You want to record a call with a supplier to make notes. What do you do first?", options: ["Record it quietly", "Tell them and ask their permission", "Record only half the call", "Ask AI if it is allowed"], answer: 1, why: "Tell people and get permission before recording." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Building your toolkit and keeping it safe",
          minutes: 5,
          goal: "Choose one tool per job and set a safety rule for each.",
          text: [
            "A toolkit you actually use beats a long list of apps you tried once. For each of the four jobs, pick one tool, note whether you are on a free or paid plan, and write one thing you made with it.",
            "Check each tool's data settings. Many let you turn off chat history or stop your content being used to train the AI. Business plans often have stronger privacy terms; read the tool's privacy page before putting business documents in.",
            "Set one simple rule per tool, such as \"No customer phone numbers in ChatGPT\" or \"Only download Canva images I have checked\". Review your toolkit every few months, because tools, features and prices change."
          ],
          steps: ["List the four jobs.", "Pick one tool for each and note free or paid.", "Open each tool's settings and find its data or privacy options.", "Write one safety rule per tool.", "Put a reminder to review the toolkit in three months."],
          words: [["Toolkit", "the short list of tools you rely on, with what each is for."], ["Privacy settings", "options that control what a tool keeps and how it uses your data."]],
          slides: [
            { title: "One tool per job", bullets: ["Writing, design, documents, meetings", "Free or paid?", "One thing you made with it"] },
            { title: "Check data settings", bullets: ["Turn off history or training if offered", "Business plans may protect data better", "Read the privacy page first"] },
            { title: "One safety rule per tool", bullets: ["\"No customer phone numbers in chats\"", "\"Only use images I have checked\""] },
            { title: "Review every few months", bullets: ["Tools, features and prices change"] }
          ],
          tryIt: "Final task: make your one-page \"My AI Toolkit\": four jobs, one tool each, one thing you made with it in this course, and one safety rule for each tool.",
          youCanNow: "run your business with a small, safe AI toolkit that you review over time.",
          quickCheck: [
            { objective: "O6", q: "What is a toolkit safety rule?", options: ["A list of prices", "A tool's login page", "A rule such as \"no customer phone numbers in AI chats\"", "A backup of your files"], answer: 2, why: "A safety rule says how you protect data in each tool." },
            { objective: "O6", q: "Six months after making your toolkit, a tool changes its free plan. What do you do?", options: ["Ignore it", "Delete the toolkit", "Keep paying without looking", "Check the tool's own pricing page and update your toolkit"], answer: 3, why: "Tools and prices change, so you review the toolkit over time." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: AI in your daily business tools",
        questions: [
          { objective: "O4", q: "Your spreadsheet plan has no built-in AI helper. What can you do?", options: ["Describe your columns to a free chat assistant and ask for a formula", "Give up", "Paste your customers' card numbers into AI", "Buy every AI app"], answer: 0, why: "A chat assistant can write formulas from a description without private data." },
          { objective: "O4", q: "AI wrote you a spreadsheet formula. What should you do before trusting it?", options: ["Delete the sheet", "Use it on the whole year at once", "Send it to customers", "Test it on a few rows you can check by hand"], answer: 3, why: "Testing on a few rows catches mistakes." },
          { objective: "O5", q: "What should you do before recording a call with a client?", options: ["Record secretly", "Tell them and get their permission", "Only record the first minute", "Post it online"], answer: 1, why: "Recording laws differ, and some require everyone's consent." },
          { objective: "O5", q: "An action item should say:", options: ["Who does what by when", "Only the meeting date", "How long the meeting was", "Who was late"], answer: 0, why: "Action items name a person, a task and a due date." },
          { objective: "O6", q: "Why review your AI toolkit every few months?", options: ["To delete your business", "It is required by law", "Tools, features and prices change", "Because AI forgets"], answer: 2, why: "Regular reviews keep your toolkit current and affordable." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: AI Tools Every Entrepreneur Should Know",
    questions: [
      { objective: "O1", q: "The four AI tool jobs in this course are:", options: ["Banking, shipping, hiring, taxes", "Writing, design, documents and numbers, meetings and notes", "Music, games, movies, sports", "Phones, laptops, tablets, watches"], answer: 1, why: "Those four jobs cover most small business needs." },
      { objective: "O2", q: "Which is a chat assistant?", options: ["A delivery van", "A barcode scanner", "A cash drawer", "Google Gemini"], answer: 3, why: "Gemini, ChatGPT and Copilot are chat assistants." },
      { objective: "O1", q: "Why start with one tool per job?", options: ["So customers can see your apps", "It is the law", "AI tools cannot share jobs", "It keeps things simple and avoids paying twice"], answer: 3, why: "A small toolkit is easier to learn and cheaper." },
      { objective: "O1", q: "Where should you check what a tool's free plan includes today?", options: ["A random video comment", "The tool's own pricing page", "Your customer", "An old flyer"], answer: 1, why: "Plans change; the official page is current." },
      { objective: "O2", q: "Your business runs on Gmail and Google Drive. A natural chat assistant to try first is:", options: ["A fax machine", "A photo filter", "Google Gemini", "A word counter"], answer: 2, why: "Gemini fits businesses that use Google accounts." },
      { objective: "O2", q: "A good way to compare two chat assistants is to:", options: ["Run the same prompt in both", "Read only their ads", "Ask a stranger", "Pick the newest one"], answer: 0, why: "Same prompt, two tools shows which fits your style." },
      { objective: "O3", q: "In Canva, the fastest way to a clean design is to:", options: ["Copy another brand's logo", "Start from a blank page", "Start from a template", "Use ten fonts"], answer: 2, why: "Templates give you a ready layout." },
      { objective: "O3", q: "A simple flyer should have:", options: ["One message, one picture, one call to action", "Every product you sell", "Small text only", "No business name"], answer: 0, why: "Simple designs are easier to read." },
      { objective: "O3", q: "You should NOT use AI to make an image that:", options: ["Shows your own product", "Copies another company's logo", "Uses your brand colors", "Has your shop name spelled right"], answer: 1, why: "Copying another brand can break trademark or copyright rules." },
      { objective: "O4", q: "Gemini in Google Workspace and Copilot in Microsoft 365 are:", options: ["Delivery services", "Printers", "Payment apps", "AI helpers built into office tools on many plans"], answer: 3, why: "They add AI to documents, email and spreadsheets." },
      { objective: "O4", q: "When asking AI for a spreadsheet formula, you should share:", options: ["A description of the columns, without private data", "Customers' card numbers", "Your bank password", "Your tax ID"], answer: 0, why: "Describing columns is enough to get a formula." },
      { objective: "O4", q: "A spreadsheet formula is:", options: ["An email address", "A type of chart", "A font", "An instruction in a cell that calculates something"], answer: 3, why: "Formulas calculate values like totals." },
      { objective: "O4", q: "AI drafted a service agreement for you. What next?", options: ["Post it online", "Sign it with clients right away", "Have a lawyer review it before using it", "Delete your old one without reading"], answer: 2, why: "Legal documents should be reviewed by a professional." },
      { objective: "O5", q: "Voice typing in Google Docs lets you:", options: ["Pay bills", "Speak and have your words typed", "Design logos", "Ship products"], answer: 1, why: "It turns speech into text." },
      { objective: "O5", q: "After transcribing a meeting, a useful AI request is:", options: ["\"Translate into code.\"", "\"Make it longer.\"", "\"Add random facts.\"", "\"Summarize this into decisions and action items: who, what, by when.\""], answer: 3, why: "This turns a long transcript into clear next steps." },
      { objective: "O5", q: "Before recording a call, you should:", options: ["Record only the other person", "Hide the recorder", "Tell people and get their permission", "Ask AI if it is legal and skip asking them"], answer: 2, why: "Consent rules differ by place; asking first is safe." },
      { objective: "O6", q: "Many AI tools let you change data settings so that:", options: ["Your chats are not kept or used for training", "Your prices go up", "Your customers get emails", "Your logo changes"], answer: 0, why: "Privacy settings control what the tool keeps." },
      { objective: "O6", q: "Which is a good toolkit safety rule?", options: ["\"Share passwords with AI\"", "\"No customer phone numbers in AI chats\"", "\"Never check AI images\"", "\"Use every new app\""], answer: 1, why: "Simple rules protect your customers." },
      { objective: "O6", q: "Your one-page toolkit lists for each job:", options: ["Your bank balance", "The tool, free or paid, something you made, a safety rule", "Your competitors' passwords", "Every app you ever tried"], answer: 1, why: "That makes the toolkit practical and safe." },
      { objective: "O6", q: "Why might you choose a business plan of an AI tool?", options: ["It may give stronger privacy terms for business documents", "It is always free", "It removes the need to check work", "It writes your taxes"], answer: 0, why: "Business plans often protect data better; read the privacy page." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Pre-Test: What Do You Already Know?",
    from: [
      0,
      4,
      6,
      8,
      10,
      11,
      14,
      15,
      17
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      {
        name: "Four jobs covered",
        objective: "O1",
        notYet: "A job is missing or two tools do the same job.",
        meets: "Writing, design, documents or numbers, and meetings or notes, with one tool each.",
        exceeds: "Says why each tool was chosen over another."
      },
      {
        name: "Made with each tool",
        objective: "O3",
        notYet: "One or more tools has nothing made with it.",
        meets: "Lists one real thing made with each tool, such as a profile text, a flyer, a formula and an action list.",
        exceeds: "The things made are already in use in the business."
      },
      {
        name: "Checked results",
        objective: "O4",
        notYet: "A formula, image or document was used without checking.",
        meets: "Formula tested on rows checked by hand; images and documents checked before use.",
        exceeds: "Notes which documents need a lawyer or professional review."
      },
      {
        name: "Safety rules",
        objective: "O6",
        notYet: "A tool has no safety rule, or a rule is vague.",
        meets: "Each tool has one clear rule for customer data.",
        exceeds: "Also notes the data setting changed in each tool and when to review the toolkit."
      },
      {
        name: "Free plan and fit",
        objective: "O2",
        notYet: "Free or paid is not stated, or the tool does not fit the business accounts.",
        meets: "Free or paid noted for each tool, checked on its pricing page.",
        exceeds: "Notes what a paid plan would add and whether it is worth it."
      }
    ]
  },
  evaluation: {
    results: [
      "Owners who finish the course and pass the final task (rubric)",
      "Owners still using their four toolkit tools after 30 days (follow-up survey)",
      "Owners who report cancelling a duplicate or unused paid tool",
      "Learners who start another Koach Learn entrepreneur course within 30 days"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A phone or computer with internet",
      "Free accounts: a chat assistant, Canva, and Google Docs and Sheets or Microsoft 365",
      "A phone for a short voice memo",
      "About 60 minutes in total for lessons, tasks, checks and the toolkit page"
    ],
    facilitatorNotes: [
      "Have owners bring their real business description; it is reused in Lessons 2 and 3.",
      "Check current free plans on each tool's own pricing page before the session, since they change often.",
      "Remind learners to ask permission before recording anyone and to keep customer data out of AI chats.",
      "Use a five-row test sheet with made-up data for the formula practice.",
      "Score the toolkit page with the rubric, one Not yet row at a time."
    ]
  }
};
