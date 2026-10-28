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
  chapters: [
    {
      name: "Chapter 1: The rules and the basic tools",
      lessons: [
        {
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
          youCanNow: "find and follow the rules for AI tools at your workplace."
        },
        {
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
          youCanNow: "turn rough notes into a clear work message with a chat assistant."
        },
        {
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
          youCanNow: "use the AI helper in your office apps, or a safe alternative, to draft and summarize."
        }
      ],
      check: {
        title: "Knowledge Check 1: The rules and the basic tools",
        questions: [
          { q: "Before using AI at work, you should first:", options: ["Paste in customer data", "Know your employer's AI policy", "Share your password", "Use any app you find"], answer: 1, why: "Policies set what is allowed." },
          { q: "There is no policy. Which safe default should you follow?", options: ["Skip checking facts", "Paste anything", "Share passwords", "No customer or employee personal data in AI tools"], answer: 3, why: "Private data stays out." },
          { q: "A good work prompt includes:", options: ["Purpose, reader, key points and tone", "Only one word", "Your password", "A customer's address"], answer: 0, why: "Those parts give a useful draft." },
          { q: "Copilot inside Word or Outlook is available:", options: ["Never", "To everyone automatically", "Depending on your employer's plan and settings", "Only on phones"], answer: 2, why: "Access depends on licenses and settings." },
          { q: "Who owns the final version of AI-drafted work?", options: ["IT", "The AI", "You", "Nobody"], answer: 2, why: "You are responsible for what you send." }
        ]
      }
    },
    {
      name: "Chapter 2: Summaries, spreadsheets and checking",
      lessons: [
        {
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
          youCanNow: "summarize documents and meetings into clear points and action items, and check them."
        },
        {
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
          youCanNow: "get, understand and test spreadsheet formulas with AI help."
        },
        {
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
          youCanNow: "use workplace AI tools to get work done faster, safely and with your own careful check."
        }
      ],
      check: {
        title: "Knowledge Check 2: Summaries, spreadsheets and checking",
        questions: [
          { q: "A good meeting summary lists:", options: ["Decisions, action items with owners and dates, and open questions", "Only the meeting title", "Everyone's passwords", "Nothing"], answer: 0, why: "That shape makes follow-up easy." },
          { q: "Before a meeting is transcribed, people should:", options: ["Turn off their cameras", "Not be told", "Leave", "Know it is being recorded or transcribed"], answer: 3, why: "Follow workplace rules and be open." },
          { q: "What does =COUNTIF(B:B,\"Late\") do?", options: ["Adds column B", "Counts cells in column B that say Late", "Deletes Late rows", "Sorts the sheet"], answer: 1, why: "COUNTIF counts matching cells." },
          { q: "How do you know an AI formula works?", options: ["Test it on rows where you know the answer", "It looks right", "AI says so", "Nobody complains"], answer: 0, why: "Testing proves it." },
          { q: "Which is NOT one of the four checks?", options: ["Fit", "Facts", "Fame", "Safety"], answer: 2, why: "The checks are Facts, Fit, Safety and Source." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Essential AI Tools for the Workplace",
    questions: [
      { q: "Where can you usually find your workplace AI policy?", options: ["A social media post", "Handbook, intranet, or by asking your manager or IT", "An AI chat", "Nowhere"], answer: 1, why: "Policies live in official company places." },
      { q: "A work account version of an AI tool may:", options: ["Not exist", "Be less safe always", "Share your data publicly", "Have more data protection than a personal free account"], answer: 3, why: "Business versions can offer more protection; check your employer's guidance." },
      { q: "Which should never go into a personal AI account?", options: ["A general question", "\"Make this shorter\"", "A public news article", "Customer personal information"], answer: 3, why: "Customer data is private." },
      { q: "ChatGPT, Copilot and Gemini are:", options: ["Spreadsheets", "Chat assistants", "Printers", "Phones"], answer: 1, why: "They are AI chat assistants." },
      { q: "\"Under 100 words\" in a prompt sets the:", options: ["Purpose", "Reader", "Length", "Password"], answer: 2, why: "It controls length." },
      { q: "After AI drafts an email, you:", options: ["Check facts and make it sound like you", "Send it unread", "Add more facts it made up", "Delete it"], answer: 0, why: "You own the final version." },
      { q: "Copilot appears in:", options: ["Paper notebooks", "Only Gmail", "Microsoft 365 apps, on some plans", "Nothing"], answer: 2, why: "Microsoft adds Copilot to its apps on some plans." },
      { q: "Gemini appears in:", options: ["Google Workspace apps, on some plans", "Only Excel", "Fax machines", "Nothing"], answer: 0, why: "Google adds Gemini to its apps on some plans." },
      { q: "You do not see an AI icon in your office app. You can:", options: ["Install random add-ons", "Ask IT, or use an approved chat assistant with non-confidential text", "Give up", "Use a coworker's login"], answer: 1, why: "Stay within approved tools." },
      { q: "An action item should have:", options: ["Nothing", "A secret", "A password", "An owner and a due date"], answer: 3, why: "Owners and dates make it happen." },
      { q: "Why compare a summary with the original?", options: ["Summaries can leave out or change details", "To waste time", "It is not needed", "For fun"], answer: 0, why: "Checking catches mistakes." },
      { q: "To transcribe means to:", options: ["Send an email", "Delete a file", "Translate a language", "Turn speech into written text"], answer: 3, why: "Transcription writes down speech." },
      { q: "Instead of pasting confidential spreadsheet data into AI, you can:", options: ["Email it to friends", "Paste it anyway", "Describe the columns", "Post it online"], answer: 2, why: "Descriptions keep data safe." },
      { q: "A range in a spreadsheet is:", options: ["A stove", "A group of cells, like B2:B50", "A password", "A chart"], answer: 1, why: "Ranges are groups of cells." },
      { q: "A common AI formula mistake is:", options: ["Nothing", "Being too short", "Using color", "Counting the header row or using the wrong range"], answer: 3, why: "Test to catch these." },
      { q: "An AI hallucination is:", options: ["A meeting", "A screen glitch", "A made-up detail that sounds true", "A virus"], answer: 2, why: "AI can invent facts." },
      { q: "The \"Fit\" check asks whether:", options: ["The tone and length suit the reader", "The file fits on a USB", "The chair fits", "It fits in a tweet"], answer: 0, why: "Fit is about the reader." },
      { q: "The \"Source\" check asks:", options: ["Which keyboard you used", "Where any rule or number came from", "Who typed fastest", "Nothing"], answer: 1, why: "Rules and numbers need a source." },
      { q: "If your workplace requires you to say you used AI, you should:", options: ["Hide it", "Say so", "Blame a coworker", "Ignore the rule"], answer: 1, why: "Openness builds trust and follows policy." },
      { q: "Whose name is on AI-assisted work you share?", options: ["Yours", "The AI's", "IT's", "Nobody's"], answer: 0, why: "You are responsible for it." }
    ]
  }
};
