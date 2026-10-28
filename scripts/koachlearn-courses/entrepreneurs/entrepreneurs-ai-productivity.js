"use strict";

// Koach Learn course: Entrepreneurs -> "AI for Business Productivity". Skill-building course in the shape of re-entry/reentry-ai-digital-confidence.js (see scripts/koachlearn-courses/README.md).

module.exports = {
  id: "entrepreneurs-ai-productivity",
  category: "Entrepreneurs",
  name: "AI for Business Productivity",
  skills: "Planning a week with AI, Clearing an inbox faster, Writing reusable templates, Making a standard operating procedure, Measuring time saved",
  outcome: "use AI to plan your business week, handle email faster with reusable reply templates, turn one repeated job into a written step-by-step procedure, and measure how much time you saved.",
  about: [
    "Most business owners do not run out of ideas; they run out of hours. This course is for owners who are doing everything themselves and want some time back.",
    "You will use a free AI assistant to plan your week by priority, sort and answer email faster, build templates for messages you write again and again, and write a simple procedure so a helper (or future you) can do a job the same way every time. Then you will measure the time you saved.",
    "Each lesson is about five minutes with a task you do on your real business. There is a knowledge check after each chapter and a 20-question quiz at the end."
  ],
  finalTask: "Build a \"time-back kit\" for your business: one AI-planned week with your top three priorities, three reusable reply templates, one written procedure for a repeated job, and a simple before-and-after time log showing the minutes saved on one task.",
  chapters: [
    {
      name: "Chapter 1: Plan and communicate faster",
      lessons: [
        {
          title: "Planning your week by priority",
          minutes: 5,
          goal: "Use AI to turn a messy to-do list into a week plan with three priorities.",
          text: [
            "A long to-do list hides what matters. AI is good at sorting. Paste in your list (no private customer details) and ask it to group tasks and suggest which three will most help your business this week.",
            "A simple way to judge: tasks that bring in money or keep customers happy usually come first; tasks that can wait or be handed off come later. You decide the final order, because you know your business.",
            "Then ask for a time-blocked plan: \"Put these into my week. I work 8 am to 4 pm, Monday to Friday, and do deliveries on Tuesday and Thursday mornings.\" Put the plan into your calendar."
          ],
          steps: ["Write every task in your head as a list.", "Ask AI to group the tasks and suggest the top three for the week.", "Pick your own top three.", "Ask AI to place the tasks into time blocks around your fixed hours.", "Copy the blocks into your calendar."],
          words: [["Priority", "a task that matters most right now."], ["Time block", "a set period on your calendar for one kind of work."]],
          slides: [
            { title: "Long lists hide what matters", bullets: ["Paste your list into AI (no private details)", "Ask it to group tasks", "Ask for the top three for this week"] },
            { title: "What usually comes first", bullets: ["Tasks that bring in money", "Tasks that keep customers happy", "You decide the final order"] },
            { title: "Time-block it", bullets: ["Tell AI your hours and fixed jobs", "Get a week plan", "Put it in your calendar"] }
          ],
          tryIt: "Write your full task list for next week, ask an AI assistant to group it and suggest a top three, choose your own top three, and get a time-blocked plan you put in your calendar.",
          youCanNow: "turn a messy list into a week plan with clear priorities and time blocks."
        },
        {
          title: "Clearing your inbox faster",
          minutes: 5,
          goal: "Use AI to sort emails and draft replies you check before sending.",
          text: [
            "Email eats hours. Sort it first: reply now (customers, money, urgent), reply later, read only, and delete or unsubscribe. Many email apps can also filter messages automatically into folders or labels.",
            "For replies, AI can turn your quick notes into a polite message: \"Reply to a customer asking to move their Friday booking. Say yes, offer Saturday 10 am or Monday 2 pm, and keep it short and warm.\" Gmail and Outlook may also offer built-in AI suggestions depending on your plan.",
            "Never paste a customer's full email with their phone number, address or card details into a chat tool. Summarize the question in your own words instead. And always read a reply before you send it."
          ],
          steps: ["Sort your inbox into: reply now, reply later, read only, delete.", "For each reply-now email, write a one-line note of what you want to say.", "Ask AI to turn the note into a short reply.", "Read, fix and send it yourself."],
          words: [["Filter", "an email rule that moves messages into a folder or label automatically."], ["Unsubscribe", "the link that stops a company emailing you."]],
          slides: [
            { title: "Sort first", bullets: ["Reply now: customers, money, urgent", "Reply later", "Read only, or delete and unsubscribe"] },
            { title: "AI turns notes into replies", bullets: ["Write what you want to say in one line", "Ask for a short, warm reply", "Built-in AI may help in Gmail or Outlook"] },
            { title: "Stay safe", bullets: ["Summarize the customer's question yourself", "No phone numbers, addresses or card details", "Read before you send"] }
          ],
          tryIt: "Sort today's inbox into the four groups. For two reply-now emails, write a one-line note, have AI draft the reply, check it and send it. Time how long it took.",
          youCanNow: "sort email by importance and send faster, checked replies with AI's help."
        },
        {
          title: "Reusable templates for messages you write again and again",
          minutes: 4,
          goal: "Create three reply templates for the questions customers ask most.",
          text: [
            "If you answer the same question every week (prices, hours, how to book, refund policy), write the answer once and reuse it. AI can help you write a clear, friendly template.",
            "A good template has blanks you fill in: \"Hi [name], thanks for asking about [service]. Our price for [size] is [price]. You can book at [link or number].\" Keep your real facts in the template, and check them whenever prices or policies change.",
            "Save templates where you can grab them fast: a document, your phone's notes app, or the saved-reply feature many email apps and business messaging apps offer."
          ],
          steps: ["List the five questions customers ask most.", "Pick the top three.", "Ask AI for a short, friendly template for each with [blanks].", "Fill in your real facts and check them.", "Save the templates where you can reach them quickly."],
          words: [["Template", "a ready-made message with blanks you fill in each time."], ["Saved reply", "an email or messaging feature that stores a template for one-click use."]],
          slides: [
            { title: "Write it once, reuse it", bullets: ["Prices, hours, booking, refunds", "AI helps you write it clearly"] },
            { title: "A good template", bullets: ["Friendly and short", "[Blanks] for name, service, price", "Your real facts, checked"] },
            { title: "Keep them handy", bullets: ["A document or notes app", "Saved replies in email or messaging apps", "Update when prices change"] }
          ],
          tryIt: "Write down your three most-asked customer questions and use AI to make a template for each. Fill in your real facts and save them.",
          youCanNow: "write and reuse templates for the customer questions you answer most."
        }
      ],
      check: {
        title: "Knowledge Check 1: Plan and communicate faster",
        questions: [
          { q: "Which tasks usually deserve to be in your weekly top three?", options: ["Ones that are fun", "Ones that bring in money or keep customers happy", "Ones that take 30 seconds", "Ones someone else asked for"], answer: 1, why: "Money and customer tasks keep the business running." },
          { q: "What should you tell AI to get a useful time-blocked plan?", options: ["Nothing at all", "Your bank balance", "Your password", "Your working hours and fixed jobs"], answer: 3, why: "AI needs your hours and fixed commitments to place tasks." },
          { q: "A customer's email includes their home address and card number. How do you get AI help replying?", options: ["Summarize their question in your own words", "Paste the whole email", "Forward it to the AI company", "Ignore the customer"], answer: 0, why: "Summarizing keeps private details out of the AI tool." },
          { q: "Which is a good template?", options: ["\"See website\"", "A different message from scratch each time", "\"Hi [name], our price for [service] is [price]. Book at [link].\"", "A message with a customer's card number"], answer: 2, why: "It has blanks you fill in with real facts." },
          { q: "Your prices went up. What must you do with your templates?", options: ["Delete them all", "Nothing", "Update and recheck them", "Let AI guess the new prices"], answer: 2, why: "Templates must match your current facts." }
        ]
      }
    },
    {
      name: "Chapter 2: Systems that save time",
      lessons: [
        {
          title: "Writing a standard operating procedure",
          minutes: 5,
          goal: "Turn one job you repeat into a written step-by-step procedure with AI.",
          text: [
            "A standard operating procedure (SOP) is a written list of steps for doing a job the same way every time. It lets a helper do the job without calling you, and it stops mistakes when you are busy.",
            "Easy way to make one: do the job once while saying or typing each step in rough notes. Then ask AI: \"Turn these notes into a clear numbered procedure a new helper can follow. Add a short checklist at the end.\"",
            "Test the SOP: give it to someone (or follow it yourself, word for word) and fix any step that was confusing or missing."
          ],
          steps: ["Choose a job you repeat every week, such as opening the shop or packing an order.", "Do it once while writing rough notes of each step.", "Ask AI to turn the notes into a numbered procedure and checklist.", "Test it by following it exactly, or have a helper try.", "Fix unclear steps and save the final version."],
          words: [["SOP", "standard operating procedure: written steps for doing a job the same way every time."], ["Checklist", "a short list you tick off to be sure nothing was missed."]],
          slides: [
            { title: "What an SOP does", bullets: ["Same job, same way, every time", "A helper can do it without calling you", "Fewer mistakes when you are busy"] },
            { title: "Make one with AI", bullets: ["Do the job once and write rough notes", "Ask AI for numbered steps and a checklist"] },
            { title: "Test it", bullets: ["Follow it word for word", "Or have a helper try it", "Fix confusing or missing steps"] }
          ],
          tryIt: "Pick one weekly job, write rough notes while you do it, and have AI turn them into a numbered SOP with a checklist. Test it once and fix it.",
          youCanNow: "turn a repeated job into a tested, written procedure."
        },
        {
          title: "Summaries and quick research",
          minutes: 4,
          goal: "Use AI to summarize long documents and do quick, checked research.",
          text: [
            "Business owners get long documents: supplier terms, grant rules, lease drafts, reports. AI can summarize them: \"Summarize this in 8 bullet points. List any dates, fees or things I must do.\" Remove private details first, and read the original parts that matter, especially anything about money or legal duties.",
            "AI can also speed up research: comparing suppliers, explaining a new term, or listing questions to ask an accountant. Ask it for sources, then open those sources yourself.",
            "For legal, tax or license questions, use AI to prepare good questions, then get the answer from the official agency site or a professional."
          ],
          steps: ["Remove private details from the document.", "Ask for a short summary plus dates, fees and duties.", "Read the original sections about money or legal duties.", "For research, ask for sources and open them yourself."],
          words: [["Summary", "a short version that keeps the main points."], ["Terms", "the rules and conditions in an agreement."]],
          slides: [
            { title: "Summarize long documents", bullets: ["Remove private details first", "Ask for bullets, dates, fees and duties", "Read the money and legal parts yourself"] },
            { title: "Quick research", bullets: ["Compare options, explain terms", "Ask for sources", "Open the sources yourself"] },
            { title: "Legal, tax, licenses", bullets: ["Use AI to prepare questions", "Get answers from the agency or a professional"] }
          ],
          tryIt: "Take a long business document you have (with private details removed), ask AI for an 8-bullet summary with dates, fees and duties, and compare it with the original.",
          youCanNow: "get a fast, checked summary of a long business document."
        },
        {
          title: "Measuring the time you save",
          minutes: 5,
          goal: "Log your time before and after using AI on one task to see if it really helps.",
          text: [
            "AI should save you time, not just feel busy. Measure it. Pick one task, such as answering booking questions or writing the weekly post. Write down how long it takes the old way, then how long it takes with AI, including the time to check and fix.",
            "Multiply: minutes saved per time, times how many times a week. Ten minutes saved on a task you do 15 times a week is 150 minutes, two and a half hours.",
            "If a task is not faster with AI, or needs so much fixing that it is not worth it, stop using AI for that task. Put the saved time into the tasks that grow your business."
          ],
          steps: ["Choose one task you do often.", "Time it the old way once.", "Time it with AI, including checking and fixing.", "Multiply the minutes saved by how often you do it each week.", "Keep, change or drop AI for that task."],
          words: [["Time log", "a simple record of how long tasks take."]],
          slides: [
            { title: "Measure, don't guess", bullets: ["Time the old way", "Time the AI way, including checking", "Compare"] },
            { title: "Do the math", bullets: ["Minutes saved x times per week", "10 min x 15 times = 150 min a week"] },
            { title: "Decide", bullets: ["Faster? Keep it", "Slower or too many fixes? Drop it", "Spend saved time on growth"] }
          ],
          tryIt: "Final task: build your time-back kit: your AI-planned week, your three templates, your SOP, and a before-and-after time log for one task with the weekly minutes saved.",
          youCanNow: "prove whether AI saves you time and decide where to use it in your business."
        }
      ],
      check: {
        title: "Knowledge Check 2: Systems that save time",
        questions: [
          { q: "What is an SOP?", options: ["A written step-by-step procedure for a repeated job", "A type of invoice", "A social media post", "A tax form"], answer: 0, why: "An SOP lets a job be done the same way every time." },
          { q: "How do you know your SOP works?", options: ["Ask AI if it is good", "Print it in color", "Make it longer", "Follow it word for word or have a helper try it"], answer: 3, why: "Testing shows missing or confusing steps." },
          { q: "AI summarized a lease. Which parts must you still read yourself?", options: ["Nothing", "The parts about money and legal duties", "Only the title", "The page numbers"], answer: 1, why: "Summaries can miss or misstate important details." },
          { q: "You save 5 minutes each time on a task you do 20 times a week. How much time is that?", options: ["100 minutes a week", "25 minutes a week", "5 minutes a week", "20 minutes a week"], answer: 0, why: "5 x 20 = 100 minutes." },
          { q: "Using AI on a task takes longer because of all the fixing. What should you do?", options: ["Use two AI tools at once", "Keep using it anyway", "Stop using AI for that task", "Stop checking the work"], answer: 2, why: "Use AI only where it actually saves time." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: AI for Business Productivity",
    questions: [
      { q: "The first step to planning a week with AI is:", options: ["Buying a new app", "Writing down every task", "Deleting your calendar", "Asking a customer"], answer: 1, why: "AI can only sort what you list." },
      { q: "When choosing your top three, who decides the final order?", options: ["Your email app", "The AI", "A competitor", "You"], answer: 3, why: "AI suggests; you know your business." },
      { q: "A time block is:", options: ["A kind of email", "A broken clock", "A late fee", "A set period on your calendar for one kind of work"], answer: 3, why: "Time blocks protect time for priorities." },
      { q: "Which inbox group should come first?", options: ["Newsletters", "Reply now: customers, money, urgent", "Old receipts", "Ads"], answer: 1, why: "Customer and money emails matter most." },
      { q: "An email filter:", options: ["Sends money", "Deletes your account", "Moves messages into a folder automatically", "Writes replies"], answer: 2, why: "Filters sort email without you." },
      { q: "A safe way to get AI help on a customer email is to:", options: ["Summarize the question in your own words", "Paste their card number", "Paste their home address", "Forward their password"], answer: 0, why: "Keep private customer details out of AI tools." },
      { q: "Before sending an AI-drafted reply you should:", options: ["Add a random discount", "Send it without reading", "Read and fix it", "Copy it to every customer"], answer: 2, why: "You are responsible for what you send." },
      { q: "Templates are best for:", options: ["Questions customers ask again and again", "One-time legal disputes", "Bank transfers", "Passwords"], answer: 0, why: "Write the answer once and reuse it." },
      { q: "Blanks like [name] and [price] in a template are:", options: ["Mistakes", "Places you fill in each time", "Passwords", "Links to AI"], answer: 1, why: "They make one template work for many customers." },
      { q: "Where can you keep templates handy?", options: ["In the AI chat with customer data", "Only in your head", "On a sticky note on the door", "Saved replies in email or a notes app"], answer: 3, why: "Saved replies and notes make them quick to use." },
      { q: "An SOP helps because:", options: ["A helper can do the job the same way without calling you", "It makes jobs longer", "It replaces customers", "It is a tax form"], answer: 0, why: "Written steps make work repeatable." },
      { q: "The fastest way to start an SOP is to:", options: ["Skip testing", "Guess the steps", "Copy a competitor's manual", "Do the job once while writing rough notes, then ask AI to organize them"], answer: 3, why: "Real notes plus AI organizing gives accurate steps." },
      { q: "A checklist at the end of an SOP:", options: ["Replaces the steps", "Adds a fee", "Helps make sure nothing was missed", "Is a legal contract"], answer: 2, why: "Ticking items catches missed steps." },
      { q: "Before asking AI to summarize a supplier contract, you should:", options: ["Add your bank login", "Remove private details", "Sign it", "Send it to customers"], answer: 1, why: "Keep private information out of AI tools." },
      { q: "A good summary request asks for:", options: ["A longer version", "Only the title", "Jokes", "Main points plus dates, fees and things you must do"], answer: 3, why: "Dates, fees and duties are what you act on." },
      { q: "When AI gives research sources, you should:", options: ["Never look", "Trust the links blindly", "Open and read them yourself", "Share them as facts right away"], answer: 2, why: "AI can list wrong or made-up sources." },
      { q: "For a license question, AI is best used to:", options: ["Prepare questions for the official agency or a professional", "Give the final legal answer", "Apply for you", "Pay the fee"], answer: 0, why: "Official sources and professionals give the final answer." },
      { q: "When timing the AI way, include:", options: ["Only the seconds AI takes to answer", "The time to check and fix the AI's work", "Nothing", "Your lunch break"], answer: 1, why: "Checking is part of the real cost." },
      { q: "Ten minutes saved on a task you do 15 times a week equals:", options: ["10 minutes", "25 minutes", "150 minutes", "1,500 minutes"], answer: 2, why: "10 x 15 = 150 minutes." },
      { q: "Where should saved time go?", options: ["Into tasks that grow your business", "Into more email", "Into trying every new app", "Nowhere"], answer: 0, why: "The point of saving time is to use it on growth." }
    ]
  }
};
