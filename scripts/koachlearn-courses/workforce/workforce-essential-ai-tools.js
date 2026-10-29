"use strict";

// Koach Learn course: Workforce Development -> "Essential AI Tools for the Workplace". Written as a skill-building course: by the end the student can DO the skill in `outcome`.
// Two chapters of three micro-lessons; a knowledge check closes each chapter; a 20-question quiz closes the course. See scripts/koachlearn-export.js for how it is built.
//
// lesson: { title, minutes, goal, text: [paragraph], steps: [step] (optional), words: [[term, means]], slides: [{ title, bullets }], tryIt, youCanNow }
// question: { q, options: [4], answer: index of the right option, why }

module.exports = {
  id: "workforce-essential-ai-tools",
  category: "Workforce Development",
  name: "Essential AI Tools for the Workplace",
  skills: "Following your employer's AI policy, Using a chat assistant for work writing, Using AI inside Microsoft 365 or Google Workspace, Summarizing documents and meetings, Getting help with spreadsheets, Checking AI work before you share it",
  outcome: "use the AI tools your workplace allows to finish everyday work faster: draft and polish a work message, summarize a long document or meeting notes, get spreadsheet help, and check every result before you share it, without putting confidential information where it does not belong.",
  about: [
    "This course is for working people and job seekers who want practical AI skills for the job: office and admin staff, retail and warehouse leads, healthcare support, customer service, and anyone who writes emails, reads policies or uses spreadsheets at work.",
    "You will start with the most important rule, your employer's AI policy, then practice with chat assistants (ChatGPT, Microsoft Copilot, Google Gemini) and the AI help built into Microsoft 365 and Google Workspace on some plans. You will summarize, draft, analyze and, always, check.",
    "Which features you see depends on your employer's licenses and settings, so we describe what to do instead of exact button names. Each lesson takes about five minutes, with a knowledge check after each chapter and a 20-question quiz at the end."
  ],
  finalTask: "Complete a workplace AI task set using only tools your workplace allows (or free tools with made-up data if you are job seeking): (1) write down the three key rules of your workplace AI policy, or the three rules you would follow; (2) turn rough notes into a clear work email; (3) summarize a long document into five bullet points and three action items; (4) get AI help to add a formula to a spreadsheet; and (5) mark what you checked in each before sharing.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Working people and job seekers who want practical AI skills for the job: office and admin staff, retail and warehouse leads, healthcare support, customer service, and anyone who writes emails, reads policies or uses spreadsheets at work.",
    startingPoint: "Use email, documents and sometimes spreadsheets at work, on a computer or phone. Many have seen AI tools but have not used them for work tasks, and may not know their employer's AI policy.",
    gap: "Employers increasingly expect staff to use approved AI tools to save time, and mistakes or leaked confidential information can cost a job. Learners need to use the tools their workplace allows for writing, summarizing and spreadsheets, and check every result before sharing it.",
    constraints: [
      "Reading level: plain words and short sentences",
      "Devices: a computer is best for documents and spreadsheets; tools depend on what the employer allows",
      "Policy and privacy: the employer's AI policy comes first; no customer or employee personal data in AI tools; job seekers use free tools with made-up data",
      "Built-in AI features in Microsoft 365 and Google Workspace depend on the employer's plan and settings",
      "Time: about 5-minute lessons that fit around a working day"
    ],
    prerequisites: "None. \"AI and the New Workforce\" is a helpful companion course."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Before you use AI at work", action: "find your workplace AI policy and write down its three key rules, or three safe-default rules if there is none", standard: "with no customer or employee personal data going into AI tools" },
    { id: "O2", condition: "Given rough notes for a work message", action: "write a clear work email with a chat assistant using a prompt with purpose, reader, key points and tone", standard: "with every fact checked and the email sounding like you" },
    { id: "O3", condition: "In the office apps you use", action: "find and use the built-in AI helper, or an approved chat assistant if your account does not have one", standard: "using only non-confidential text in any tool your workplace has not approved" },
    { id: "O4", condition: "Given a long document or meeting notes", action: "summarize it into five key points and three action items with owners", standard: "checked against the original" },
    { id: "O5", condition: "Given a small spreadsheet", action: "use AI to write and explain a formula, then test it", standard: "against an answer you worked out by hand" },
    { id: "O6", condition: "Before you share any AI output", action: "check it for facts, fit, safety and source", standard: "and take responsibility for the final version" }
  ],
  chapters: [
    {
      name: "Chapter 1: The rules and the basic tools",
      lessons: [
        {
          objectives: ["O1"],
          title: "Your employer's AI policy comes first",
          minutes: 5,
          goal: "Find and follow your workplace's rules for AI tools.",
          text: [
            "Many employers have rules about AI tools: which tools are approved, what information can go into them, and when you must say you used AI. Breaking these rules can get you in trouble, even if you meant well.",
            "Look in your employee handbook, intranet or IT pages, or ask your manager or IT: \"Which AI tools are we allowed to use, and what information can I put in them?\" Some employers provide a business version of a tool, such as Microsoft Copilot with a work account, that has more data protection than a personal free account.",
            "If there is no policy, follow safe defaults: no customer or patient information, no employee personal data, no passwords, no confidential plans or financial numbers in personal AI accounts. Check every fact before sharing."
          ],
          steps: ["Search your handbook or intranet for \"AI\".", "Ask your manager or IT which tools are approved.", "Ask what information is allowed.", "If there is no policy, use the safe defaults."],
          words: [["AI policy", "an employer's rules for using AI tools at work."], ["Approved tool", "a tool your employer allows for work."], ["Confidential", "information meant only for people inside the company."]],
          slides: [
            { title: "Rules come first", bullets: ["Which tools are approved", "What information can go in", "When to say you used AI"] },
            { title: "Where to find them", bullets: ["Employee handbook or intranet", "Ask your manager or IT", "Work accounts may have more protection"] },
            { title: "Safe defaults", bullets: ["No customer, patient or employee data", "No passwords or confidential plans", "Check every fact before sharing"] }
          ],
          tryIt: "Find your workplace AI policy, or ask about it. Write down the three most important rules. If you are job seeking, write the three safe-default rules you will follow.",
          youCanNow: "find and follow the rules for AI tools at your workplace.",
          quickCheck: [
            { objective: "O1", q: "Where can you usually find your workplace AI policy?", options: ["On a social media page", "In the handbook or intranet, or by asking your manager or IT", "In the AI tool's ads", "Nowhere; policies do not exist"], answer: 1, why: "Policies are usually in the handbook or intranet, and your manager or IT can tell you." },
            { objective: "O1", q: "Your workplace has no AI policy and you want help with a customer complaint reply. What do you do?", options: ["Paste the customer's name, address and order history", "Use AI with any data you like", "Never write replies again", "Leave the customer's personal details out and use a safe default"], answer: 3, why: "With no policy, the safe default is to keep customer and employee personal data out." }
          ]
        },
        {
          objectives: ["O2"],
          title: "A chat assistant for everyday work writing",
          minutes: 5,
          goal: "Turn rough notes into a clear work message with a chat assistant.",
          text: [
            "Chat assistants such as ChatGPT, Microsoft Copilot and Google Gemini turn rough notes into clear writing. Use the one your workplace allows.",
            "A good work prompt says the purpose, the reader, the key points and the tone: \"Write a short email to my team. Purpose: the loading dock is closed Thursday for repairs. Use dock B instead. Deliveries arrive 7-11 am. Tone: clear and friendly. Under 100 words.\"",
            "Then ask for changes (\"shorter\", \"more formal\", \"add a bullet list\"), check every fact, and make it sound like you before sending."
          ],
          steps: ["Write your rough notes.", "Prompt with purpose, reader, key points and tone.", "Ask for one change at a time.", "Check names, dates, times and numbers.", "Edit to sound like you, then send."],
          words: [["Prompt", "what you type to ask an AI tool for something."], ["Tone", "how writing sounds: friendly, formal, firm."]],
          slides: [
            { title: "Notes in, clear message out", bullets: ["ChatGPT, Copilot or Gemini", "Use the tool your workplace allows"] },
            { title: "A good work prompt", bullets: ["Purpose and reader", "Key points", "Tone and length"] },
            { title: "Before you send", bullets: ["Ask for changes one at a time", "Check names, dates, times, numbers", "Make it sound like you"] }
          ],
          tryIt: "Write rough notes for a real or sample work message. Use a chat assistant to turn them into a clear email, ask for one change, and check every fact.",
          youCanNow: "turn rough notes into a clear work message with a chat assistant.",
          quickCheck: [
            { objective: "O2", q: "What does \"for my manager, friendly tone\" set in a prompt?", options: ["The reader and the tone", "The length", "The deadline", "The file type"], answer: 0, why: "Naming the reader and the tone helps the AI write the right kind of message." },
            { objective: "O2", q: "The AI's email draft says the meeting is Thursday, but your notes say Wednesday. What do you do?", options: ["Send it; the AI is probably right", "Delete your notes", "Fix the day before you send it", "Add both days"], answer: 2, why: "You check every fact against your notes before sending." }
          ]
        },
        {
          objectives: ["O3"],
          title: "AI inside Microsoft 365 and Google Workspace",
          minutes: 5,
          goal: "Find and use the AI helper in the office apps you use, if your account has it.",
          text: [
            "Microsoft adds Copilot to apps like Word, Outlook, Excel, PowerPoint and Teams, and Google adds Gemini to Gmail, Docs, Sheets and Meet. Whether you have these depends on your employer's plan and settings.",
            "Where you have them, the AI can work on what is already open: \"Summarize this document\", \"Draft a reply to this email\", \"Suggest a formula for this column\". Look for the AI icon or panel in the app, or ask IT how to turn it on.",
            "If you do not have it, you can still copy non-confidential text into an approved chat assistant and paste the result back. Either way, you own the final version and you check it."
          ],
          steps: ["Open Word, Outlook, Docs or Gmail with your work account.", "Look for the AI icon or panel, or ask IT.", "Ask it to summarize or draft from the open file.", "If not available, use an approved chat assistant with non-confidential text.", "Check and edit the result."],
          words: [["Microsoft 365", "Microsoft's set of work apps: Word, Excel, Outlook, Teams and more."], ["Google Workspace", "Google's set of work apps: Gmail, Docs, Sheets, Meet and more."]],
          slides: [
            { title: "AI built into office apps", bullets: ["Microsoft: Copilot in Word, Outlook, Excel, Teams", "Google: Gemini in Gmail, Docs, Sheets, Meet", "Depends on your employer's plan"] },
            { title: "Works on what is open", bullets: ["\"Summarize this document\"", "\"Draft a reply to this email\"", "Look for the AI icon or ask IT"] },
            { title: "No built-in AI?", bullets: ["Use an approved chat assistant", "Only non-confidential text", "You check the final version"] }
          ],
          tryIt: "Open a work document or email (or a sample one). Use the built-in AI helper if you have it, or an approved chat assistant if not, to draft a reply or a summary. Check it.",
          youCanNow: "use the AI helper in your office apps, or a safe alternative, to draft and summarize.",
          quickCheck: [
            { objective: "O3", q: "What is Copilot in Word or Outlook?", options: ["A free add-on everyone has", "A spreadsheet formula", "A virus", "An AI helper built into Microsoft 365, on some plans"], answer: 3, why: "Copilot is built into Microsoft 365 apps, depending on the employer's plan and settings." },
            { objective: "O3", q: "You do not see an AI icon in your office app. What do you do?", options: ["Install any AI extension you find", "Ask IT, or use an approved chat assistant with non-confidential text", "Paste confidential files into a personal AI account", "Give up on AI"], answer: 1, why: "IT can tell you what is available, and an approved assistant works with non-confidential text." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: The rules and the basic tools",
        questions: [
          { objective: "O1", q: "Before using AI at work, you should first:", options: ["Paste in customer data", "Know your employer's AI policy", "Share your password", "Use any app you find"], answer: 1, why: "Policies set what is allowed." },
          { objective: "O1", q: "There is no policy. Which safe default should you follow?", options: ["Skip checking facts", "Paste anything", "Share passwords", "No customer or employee personal data in AI tools"], answer: 3, why: "Private data stays out." },
          { objective: "O2", q: "A good work prompt includes:", options: ["Purpose, reader, key points and tone", "Only one word", "Your password", "A customer's address"], answer: 0, why: "Those parts give a useful draft." },
          { objective: "O3", q: "Copilot inside Word or Outlook is available:", options: ["Never", "To everyone automatically", "Depending on your employer's plan and settings", "Only on phones"], answer: 2, why: "Access depends on licenses and settings." },
          { objective: "O6", q: "Who owns the final version of AI-drafted work?", options: ["IT", "The AI", "You", "Nobody"], answer: 2, why: "You are responsible for what you send." }
        ]
      }
    },
    {
      name: "Chapter 2: Summaries, spreadsheets and checking",
      lessons: [
        {
          objectives: ["O4"],
          title: "Summarizing documents and meetings",
          minutes: 5,
          goal: "Turn a long document or meeting notes into key points and action items.",
          text: [
            "A summary saves everyone time. Ask for a specific shape: \"Summarize this policy in five bullet points for a new hire, then list three action items.\" Or for meeting notes: \"List decisions, action items with owners and due dates, and open questions.\"",
            "Some meeting tools can transcribe and summarize meetings when your employer turns that on. Everyone in the meeting should know it is being recorded or transcribed; follow your workplace rules.",
            "Summaries can leave out something important or get a detail wrong. Check the key facts against the original, especially numbers, dates, names and who agreed to do what."
          ],
          steps: ["Paste or open the document (if allowed).", "Ask for bullets, decisions and action items with owners and dates.", "Compare key facts with the original.", "Fix anything missing or wrong before sharing."],
          words: [["Summary", "a short version that keeps the main points."], ["Action item", "a task someone agreed to do, ideally with an owner and a due date."], ["Transcribe", "turn speech into written text."]],
          slides: [
            { title: "Ask for a shape", bullets: ["Five bullets for a new hire", "Decisions, action items, open questions", "Owners and due dates"] },
            { title: "Meeting tools", bullets: ["Some transcribe and summarize meetings", "Everyone should know it is recording", "Follow your workplace rules"] },
            { title: "Check against the original", bullets: ["Numbers, dates and names", "Who agreed to do what", "Anything important left out"] }
          ],
          tryIt: "Take a long work document or meeting notes (or a public policy if job seeking). Ask AI for five bullets and three action items with owners, then check them against the original.",
          youCanNow: "summarize documents and meetings into clear points and action items, and check them.",
          quickCheck: [
            { objective: "O4", q: "What is an action item?", options: ["A summary of the whole meeting", "A question nobody answered", "A task with an owner and a due date", "The meeting's start time"], answer: 2, why: "Action items say who does what by when." },
            { objective: "O4", q: "The AI's summary leaves out a deadline that is in the original document. What do you do?", options: ["Add the deadline after comparing with the original", "Share the summary as it is", "Delete the original", "Ask for a longer summary and do not check it"], answer: 0, why: "Summaries can leave out details, so you compare with the original and fix it." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Getting spreadsheet help from AI",
          minutes: 5,
          goal: "Use AI to write and explain a spreadsheet formula, then test it.",
          text: [
            "Many workers lose time on spreadsheets. AI is a good tutor: \"In Excel, how do I count how many rows in column B say 'Late'?\" It might answer =COUNTIF(B:B,\"Late\") and explain each part.",
            "Describe your columns instead of pasting confidential data: \"Column A is date, B is status, C is hours.\" If your employer allows built-in AI in Excel or Sheets, you can ask it about the open file.",
            "Always test a formula on a few rows where you know the answer. AI formulas can be close but wrong, for example counting the header row or using the wrong range."
          ],
          steps: ["Describe your columns and what you want to know.", "Ask AI for a formula and an explanation.", "Paste the formula into your sheet.", "Test it on rows where you know the answer.", "Ask AI to fix it if it is wrong."],
          words: [["Formula", "an instruction in a spreadsheet cell that calculates something."], ["COUNTIF", "a formula that counts cells that match a condition."], ["Range", "a group of cells, like B2:B50."]],
          slides: [
            { title: "AI as a spreadsheet tutor", bullets: ["\"How do I count rows that say Late?\"", "=COUNTIF(B:B,\"Late\")", "Ask it to explain each part"] },
            { title: "Describe, do not paste", bullets: ["\"Column A is date, B is status\"", "Built-in AI only if allowed"] },
            { title: "Test it", bullets: ["Check rows where you know the answer", "Watch for header rows and wrong ranges"] }
          ],
          tryIt: "Make a small sheet with 10 rows of sample data. Ask AI for one formula (count, sum or average), paste it in and test it against an answer you work out by hand.",
          youCanNow: "get, understand and test spreadsheet formulas with AI help.",
          quickCheck: [
            { objective: "O5", q: "What is a range in a spreadsheet?", options: ["A chart", "A group of cells, like B2:B50", "A file name", "A formula error"], answer: 1, why: "A range is a group of cells that a formula works on." },
            { objective: "O5", q: "The AI's COUNTIF formula gives 11, but you count 10 \"Late\" rows by hand. What do you do?", options: ["Use 11 anyway", "Delete the data", "Ask for a different AI", "Check the range, for example whether it includes the header row, and fix it"], answer: 3, why: "A common mistake is the wrong range or counting the header, so you test and fix." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Checking AI work before you share it",
          minutes: 5,
          goal: "Use a short checklist to review any AI output before it goes to others.",
          text: [
            "At work, your name is on what you share. Use a four-point check every time: Facts (numbers, names, dates, policies match the source), Fit (right tone and length for the reader), Safety (no confidential or personal data that should not be there), and Source (if it states a rule or a statistic, you know where it came from).",
            "AI can make up details that sound right, called hallucinations. It can also copy bias, for example in a job description. Read it as if you were the person receiving it.",
            "If your workplace asks you to say when you used AI, do it. Being open about how you work builds trust."
          ],
          steps: ["Facts: check against the source.", "Fit: right tone and length for the reader.", "Safety: no data that should not be there.", "Source: know where any rule or number came from.", "Say you used AI if your workplace requires it."],
          words: [["Hallucination", "when AI writes something that sounds true but is made up."], ["Bias", "an unfair slant for or against a group."]],
          slides: [
            { title: "Your name is on it", bullets: ["Check every AI output before sharing"] },
            { title: "The four-point check", bullets: ["Facts", "Fit", "Safety", "Source"] },
            { title: "Watch for", bullets: ["Made-up details (hallucinations)", "Bias, such as in job descriptions", "Say you used AI if required"] }
          ],
          tryIt: "Final task: complete your workplace AI task set: three policy rules, a clear email from notes, a five-bullet summary with action items, a tested spreadsheet formula, and a note of what you checked in each using Facts, Fit, Safety and Source.",
          youCanNow: "use workplace AI tools to get work done faster, safely and with your own careful check.",
          quickCheck: [
            { objective: "O6", q: "What does the Safety check ask before you share AI work?", options: ["Whether it contains confidential or personal information that should not be shared", "Whether it is long enough", "Whether it uses big words", "Whether the AI liked it"], answer: 0, why: "The Safety check makes sure nothing confidential or personal goes where it does not belong." },
            { objective: "O6", q: "AI wrote a policy summary that quotes a rule. What do you do before sharing?", options: ["Share it fast", "Remove your name from it", "Check where the rule came from (Source) and that it is correct", "Add more rules"], answer: 2, why: "The Source check confirms where any rule or number came from." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Summaries, spreadsheets and checking",
        questions: [
          { objective: "O4", q: "A good meeting summary lists:", options: ["Decisions, action items with owners and dates, and open questions", "Only the meeting title", "Everyone's passwords", "Nothing"], answer: 0, why: "That shape makes follow-up easy." },
          { objective: "O4", q: "Before a meeting is transcribed, people should:", options: ["Turn off their cameras", "Not be told", "Leave", "Know it is being recorded or transcribed"], answer: 3, why: "Follow workplace rules and be open." },
          { objective: "O5", q: "What does =COUNTIF(B:B,\"Late\") do?", options: ["Adds column B", "Counts cells in column B that say Late", "Deletes Late rows", "Sorts the sheet"], answer: 1, why: "COUNTIF counts matching cells." },
          { objective: "O5", q: "How do you know an AI formula works?", options: ["Test it on rows where you know the answer", "It looks right", "AI says so", "Nobody complains"], answer: 0, why: "Testing proves it." },
          { objective: "O6", q: "Which is NOT one of the four checks?", options: ["Fit", "Facts", "Fame", "Safety"], answer: 2, why: "The checks are Facts, Fit, Safety and Source." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Essential AI Tools for the Workplace",
    questions: [
      { objective: "O1", q: "Where can you usually find your workplace AI policy?", options: ["A social media post", "Handbook, intranet, or by asking your manager or IT", "An AI chat", "Nowhere"], answer: 1, why: "Policies live in official company places." },
      { objective: "O1", q: "A work account version of an AI tool may:", options: ["Not exist", "Be less safe always", "Share your data publicly", "Have more data protection than a personal free account"], answer: 3, why: "Business versions can offer more protection; check your employer's guidance." },
      { objective: "O1", q: "Which should never go into a personal AI account?", options: ["A general question", "\"Make this shorter\"", "A public news article", "Customer personal information"], answer: 3, why: "Customer data is private." },
      { objective: "O2", q: "ChatGPT, Copilot and Gemini are:", options: ["Spreadsheets", "Chat assistants", "Printers", "Phones"], answer: 1, why: "They are AI chat assistants." },
      { objective: "O2", q: "\"Under 100 words\" in a prompt sets the:", options: ["Purpose", "Reader", "Length", "Password"], answer: 2, why: "It controls length." },
      { objective: "O2", q: "After AI drafts an email, you:", options: ["Check facts and make it sound like you", "Send it unread", "Add more facts it made up", "Delete it"], answer: 0, why: "You own the final version." },
      { objective: "O3", q: "Copilot appears in:", options: ["Paper notebooks", "Only Gmail", "Microsoft 365 apps, on some plans", "Nothing"], answer: 2, why: "Microsoft adds Copilot to its apps on some plans." },
      { objective: "O3", q: "Gemini appears in:", options: ["Google Workspace apps, on some plans", "Only Excel", "Fax machines", "Nothing"], answer: 0, why: "Google adds Gemini to its apps on some plans." },
      { objective: "O3", q: "You do not see an AI icon in your office app. You can:", options: ["Install random add-ons", "Ask IT, or use an approved chat assistant with non-confidential text", "Give up", "Use a coworker's login"], answer: 1, why: "Stay within approved tools." },
      { objective: "O4", q: "An action item should have:", options: ["Nothing", "A secret", "A password", "An owner and a due date"], answer: 3, why: "Owners and dates make it happen." },
      { objective: "O4", q: "Why compare a summary with the original?", options: ["Summaries can leave out or change details", "To waste time", "It is not needed", "For fun"], answer: 0, why: "Checking catches mistakes." },
      { objective: "O4", q: "To transcribe means to:", options: ["Send an email", "Delete a file", "Translate a language", "Turn speech into written text"], answer: 3, why: "Transcription writes down speech." },
      { objective: "O5", q: "Instead of pasting confidential spreadsheet data into AI, you can:", options: ["Email it to friends", "Paste it anyway", "Describe the columns", "Post it online"], answer: 2, why: "Descriptions keep data safe." },
      { objective: "O5", q: "A range in a spreadsheet is:", options: ["A stove", "A group of cells, like B2:B50", "A password", "A chart"], answer: 1, why: "Ranges are groups of cells." },
      { objective: "O5", q: "A common AI formula mistake is:", options: ["Nothing", "Being too short", "Using color", "Counting the header row or using the wrong range"], answer: 3, why: "Test to catch these." },
      { objective: "O6", q: "An AI hallucination is:", options: ["A meeting", "A screen glitch", "A made-up detail that sounds true", "A virus"], answer: 2, why: "AI can invent facts." },
      { objective: "O6", q: "The \"Fit\" check asks whether:", options: ["The tone and length suit the reader", "The file fits on a USB", "The chair fits", "It fits in a tweet"], answer: 0, why: "Fit is about the reader." },
      { objective: "O6", q: "The \"Source\" check asks:", options: ["Which keyboard you used", "Where any rule or number came from", "Who typed fastest", "Nothing"], answer: 1, why: "Rules and numbers need a source." },
      { objective: "O6", q: "If your workplace requires you to say you used AI, you should:", options: ["Hide it", "Say so", "Blame a coworker", "Ignore the rule"], answer: 1, why: "Openness builds trust and follows policy." },
      { objective: "O6", q: "Whose name is on AI-assisted work you share?", options: ["Yours", "The AI's", "IT's", "Nobody's"], answer: 0, why: "You are responsible for it." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Pre-Test: What Do You Already Know?",
    from: [
      0,
      2,
      4,
      8,
      9,
      10,
      14,
      15,
      17
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      {
        name: "Policy rules",
        objective: "O1",
        notYet: "No rules written, or rules that allow personal data in AI tools.",
        meets: "Three key rules from the workplace AI policy, or three safe-default rules.",
        exceeds: "Says where the policy is and who to ask about it."
      },
      {
        name: "Clear email",
        objective: "O2",
        notYet: "The email is unclear, or a fact is wrong.",
        meets: "A clear email from rough notes, with facts checked against the notes.",
        exceeds: "The learner asked for one change and made it sound like them."
      },
      {
        name: "Summary and action items",
        objective: "O4",
        notYet: "Fewer than five points, or action items without owners.",
        meets: "Five bullet points and three action items with owners, checked against the original.",
        exceeds: "Action items also have due dates, and a missing detail was found and added."
      },
      {
        name: "Tested formula",
        objective: "O5",
        notYet: "The formula was not tested or gives a wrong answer.",
        meets: "A working formula tested against an answer worked out by hand.",
        exceeds: "The learner can explain what each part of the formula does."
      },
      {
        name: "Checks before sharing",
        objective: "O6",
        notYet: "No note of what was checked.",
        meets: "Each item has a note of the Facts, Fit, Safety and Source checks.",
        exceeds: "The notes name a specific fix made after a check."
      }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Learners who report using an approved AI tool for a work task each week, 30 days later (follow-up survey)",
      "Learners or managers who report time saved on emails, summaries or spreadsheets",
      "Learners who start another Koach Learn workforce course within 30 days"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A computer with internet",
      "The AI tools the workplace allows, or a free chat assistant (ChatGPT, Microsoft Copilot or Google Gemini) with made-up data for job seekers",
      "A free spreadsheet: Google Sheets or Microsoft Excel online",
      "A sample long document or meeting notes with no confidential information",
      "About 60 minutes in total: lessons, practice, checks and the final task"
    ],
    facilitatorNotes: [
      "In a workplace group, bring the employer's AI policy to the first session and go over it together.",
      "Provide sample notes, documents and spreadsheet data so no one uses confidential information.",
      "Built-in tools vary by plan; have a free chat assistant ready for learners whose accounts lack them.",
      "Have learners swap outputs and run the Facts, Fit, Safety and Source checks on each other's work.",
      "Score the task set with the rubric, and give feedback on one Not yet row at a time."
    ]
  }
};
