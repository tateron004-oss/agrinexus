"use strict";

// Koach Learn course: Non Profits -> "AI for Faith-Based Organizations" (bonus course). Written as a skill-building course: by the end the student can DO the skill in `outcome`.
// Two chapters of three micro-lessons; a knowledge check closes each chapter; a 20-question quiz closes the course. See scripts/koachlearn-export.js for how it is built.
//
// lesson: { title, minutes, goal, text: [paragraph], steps: [step] (optional), words: [[term, means]], slides: [{ title, bullets }], sources (optional), tryIt, youCanNow }
// question: { q, options: [4], answer: index of the right option, why }

module.exports = {
  id: "nonprofit-ai-faith-based",
  category: "Non Profits",
  name: "AI for Faith-Based Organizations",
  skills: "Setting ground rules for AI in ministry, Drafting announcements and bulletins, Planning volunteer and event schedules, Protecting member privacy, Reviewing AI drafts for faith and tone",
  outcome: "use a free AI assistant to draft a weekly announcement and a volunteer schedule for your congregation or faith-based program, keep member information private, and review every draft so it fits your faith tradition and voice.",
  about: [
    "This course is for pastors, imams, rabbis, ministry leaders, church office staff and volunteers in churches, mosques, temples, synagogues and faith-based nonprofits.",
    "You will learn where AI can save time in the office work of ministry (announcements, bulletins, schedules, newsletters, grant drafts) and where it should not be used: pastoral care, confidential conversations and decisions about people.",
    "Each lesson takes about five minutes. Read the lesson, watch the slides, then do the \"Try it now\" task. There is a short knowledge check after each chapter and a 20-question quiz at the end."
  ],
  finalTask: "Write a one-page \"How we use AI\" note for your congregation's leaders, then use an AI assistant to draft this week's announcement and a volunteer schedule with placeholders instead of names. Review both drafts for accuracy, faith and tone, and mark what you changed.",
  chapters: [
    {
      name: "Chapter 1: Using AI wisely in ministry",
      lessons: [
        {
          title: "Where AI helps a congregation, and where it does not",
          minutes: 4,
          goal: "Sort ministry tasks into \"AI can draft this\" and \"people only\".",
          text: [
            "An AI assistant, such as ChatGPT, Microsoft Copilot or Google Gemini, is a computer program you chat with in everyday words. It writes drafts, lists and plans in seconds.",
            "In a congregation, it is useful for office work: weekly announcements, bulletin text, newsletters, event plans, volunteer sign-up messages, thank-you notes to donors and first drafts of grant applications.",
            "It should not replace people in pastoral care, prayer requests, counseling, confession, conflict between members, or decisions about who serves or who receives help. Those need a trusted person, not a program."
          ],
          words: [["AI assistant", "a computer program you chat with by typing or talking; it writes answers back."], ["Pastoral care", "the personal care a faith leader gives members: visits, counsel, comfort and prayer."]],
          slides: [
            { title: "AI can draft", bullets: ["Announcements and bulletins", "Newsletters and event plans", "Volunteer sign-up messages and thank-you notes"] },
            { title: "People only", bullets: ["Pastoral care and counseling", "Prayer requests and confidential talks", "Decisions about members and who receives help"] },
            { title: "The rule of thumb", bullets: ["AI helps with words and plans", "People handle hearts and decisions"] }
          ],
          tryIt: "List ten tasks your congregation's office does in a month. Mark each one \"AI can draft\" or \"people only\".",
          youCanNow: "name the ministry tasks where AI can help and the ones that must stay with people."
        },
        {
          title: "Writing simple ground rules for AI",
          minutes: 5,
          goal: "Write a short \"How we use AI\" note your leaders can agree on.",
          text: [
            "Before staff and volunteers use AI, agree on a few simple rules. This keeps everyone safe and avoids surprises.",
            "A good note answers four questions: What may we use AI for? What must never go into AI (names, prayer requests, giving records, health or family details)? Who reviews AI drafts before they are shared? Do we tell people when AI helped write something?",
            "Keep it to one page and in plain words. Share it with your board, elders or ministry council and review it once a year."
          ],
          steps: ["List the tasks AI may help with.", "List what must never be typed into AI.", "Name who reviews every AI draft before it is shared.", "Decide whether and how you say that AI helped.", "Get your leaders to agree and set a yearly review date."],
          words: [["Ground rules", "a short list of agreed rules everyone follows."], ["Review", "reading a draft carefully and fixing it before it is shared."]],
          slides: [
            { title: "Why ground rules", bullets: ["Everyone knows what is allowed", "Members' trust stays protected"] },
            { title: "Four questions to answer", bullets: ["What may we use AI for?", "What never goes into AI?", "Who reviews drafts?", "Do we say AI helped?"] },
            { title: "Keep it simple", bullets: ["One page, plain words", "Agreed by your leaders", "Reviewed once a year"] }
          ],
          tryIt: "Draft your congregation's one-page \"How we use AI\" note by answering the four questions. You may ask an AI assistant to make your draft clearer, but write the rules yourself.",
          youCanNow: "write a short set of AI ground rules for a congregation or faith-based program."
        },
        {
          title: "Keeping member information private",
          minutes: 5,
          goal: "Turn a request that has private details into a safe prompt with placeholders.",
          text: [
            "Members trust you with private things: prayer requests, illness, family troubles, giving amounts, addresses and phone numbers. Many AI tools may keep what you type, so treat a prompt like a postcard anyone could read.",
            "Never type names, prayer requests, giving records, health details, children's information or contact details into an AI assistant. Use placeholders such as [member name] or [amount] and fill them in yourself afterward, in your own document.",
            "If your organization pays for a business or education version of an AI tool, ask your administrator what its privacy settings are. Even then, keep confidential pastoral matters out."
          ],
          steps: ["Write what you want the AI to help with.", "Read it for names, amounts, health, family and contact details.", "Replace each one with a placeholder like [member name].", "Send the prompt, then fill in the real details yourself outside the AI tool."],
          words: [["Placeholder", "a stand-in such as [member name] that you replace with the real detail later."], ["Confidential", "private information shared in trust that must not be passed on."]],
          slides: [
            { title: "Treat a prompt like a postcard", bullets: ["Assume someone else could read it", "Keep trust with your members"] },
            { title: "Never type into AI", bullets: ["Names and contact details", "Prayer requests, health or family troubles", "Giving records and amounts", "Children's information"] },
            { title: "Use placeholders", bullets: ["[member name], [amount], [date]", "Fill in real details yourself afterward"] }
          ],
          tryIt: "Take this request: \"Write a get-well card for Sister Mary Jones, who had heart surgery at County Hospital.\" Rewrite it with placeholders so no private detail goes into the AI, then send it.",
          youCanNow: "remove private member details from a prompt and use placeholders instead."
        }
      ],
      check: {
        title: "Knowledge Check 1: Using AI wisely in ministry",
        questions: [
          { q: "Which task is a good fit for an AI assistant in a church office?", options: ["Drafting the weekly announcement", "Counseling a grieving member", "Deciding who receives the benevolence fund", "Answering a confidential prayer request"], answer: 0, why: "Announcements are office writing; the others need a trusted person." },
          { q: "What should a \"How we use AI\" note include?", options: ["Every member's phone number", "A list of AI company prices", "What AI may be used for and what never goes into it", "The pastor's passwords"], answer: 2, why: "Ground rules say what is allowed and what must stay out." },
          { q: "A volunteer wants to paste the prayer list into AI to \"tidy it up\". What do you say?", options: ["Go ahead, it saves time", "Only paste half of it", "Paste it but delete the chat later", "No. Prayer requests are confidential and stay out of AI"], answer: 3, why: "Prayer requests are private and must not be typed into AI tools." },
          { q: "What is a placeholder?", options: ["A seat saved in the sanctuary", "A stand-in like [member name] you fill in later", "A type of AI app", "A password"], answer: 1, why: "Placeholders let you get help without sharing private details." },
          { q: "Who should review an AI draft before it is shared with the congregation?", options: ["Nobody, AI is always right", "The AI itself", "A named person your leaders agreed on", "Any visitor"], answer: 2, why: "Your ground rules name who reviews drafts so mistakes are caught." }
        ]
      }
    },
    {
      name: "Chapter 2: Putting AI to work for your congregation",
      lessons: [
        {
          title: "Drafting announcements and bulletins",
          minutes: 5,
          goal: "Use a clear prompt to draft a weekly announcement in your congregation's voice.",
          text: [
            "A clear prompt gets a better draft. Tell the AI what you need, a little about your congregation (no private details), and how you want it written.",
            "For example: \"Write a warm, short announcement for our Sunday bulletin. Events: food pantry Saturday 9 am to noon, youth group Wednesday 6 pm, choir needs two more voices. Friendly, welcoming tone, under 120 words.\"",
            "Then ask for changes: \"Make it shorter.\" \"Add a line welcoming visitors.\" \"Use simpler words.\" Check every date, time and place yourself before it goes out."
          ],
          steps: ["List the events with dates, times and places.", "Say the tone you want and the length.", "Ask the AI for a draft.", "Ask for one or two changes.", "Check every date, time and place against your calendar."],
          words: [["Prompt", "what you type or say to an AI assistant to ask for something."], ["Tone", "how writing sounds: warm, formal, joyful, calm."]],
          slides: [
            { title: "A clear prompt has", bullets: ["What you need", "The events, dates and places", "Tone and length"] },
            { title: "Then improve it", bullets: ["\"Make it shorter.\"", "\"Add a welcome for visitors.\"", "\"Use simpler words.\""] },
            { title: "Before it goes out", bullets: ["Check every date and time", "Check every place and contact", "Make sure it sounds like you"] }
          ],
          tryIt: "Write a prompt for this week's real announcements at your congregation or program. Get a draft, ask for one change, then check every date and time against your calendar.",
          youCanNow: "draft a congregation announcement with AI and check it before it is shared."
        },
        {
          title: "Planning volunteer schedules and events",
          minutes: 5,
          goal: "Use AI to build a volunteer schedule with roles and placeholders, not names.",
          text: [
            "Ushers, greeters, nursery helpers, food pantry teams and drivers all need schedules. AI can turn a list of roles and dates into a clear table in seconds.",
            "Give it roles, dates and how many people each role needs, and use [Volunteer 1], [Volunteer 2] instead of real names. Then copy the table into your own document or spreadsheet and add names there.",
            "AI can also make event checklists, for example for a revival, a fundraising dinner or a community health fair: what to do six weeks, two weeks and one day before."
          ],
          steps: ["List the roles and how many people each needs.", "List the dates.", "Ask the AI for a table using [Volunteer 1], [Volunteer 2] placeholders.", "Copy it into your own document and add real names there.", "Ask for an event checklist if you are planning an event."],
          words: [["Table", "information set out in rows and columns."], ["Checklist", "a list of tasks you tick off as they are done."]],
          slides: [
            { title: "AI can build", bullets: ["Volunteer schedules as tables", "Event checklists by week", "Reminder messages for volunteers"] },
            { title: "Keep names out", bullets: ["Use [Volunteer 1], [Volunteer 2]", "Add real names in your own file"] },
            { title: "Event checklist", bullets: ["Six weeks before", "Two weeks before", "The day before and the day of"] }
          ],
          tryIt: "Ask an AI assistant for a four-week schedule for three roles (for example greeter, usher, nursery) with two people each, using placeholders. Copy it into your own document.",
          youCanNow: "make a volunteer schedule and event checklist with AI while keeping names private."
        },
        {
          title: "Checking drafts for faith, accuracy and tone",
          minutes: 5,
          goal: "Review an AI draft and fix anything that does not fit your tradition, facts or voice.",
          text: [
            "AI can make mistakes. It may quote a scripture wrongly, use words from a different tradition, get a holy day wrong, or sound stiff. It can also make up facts that sound true.",
            "Read every draft for three things: faith (does it fit our beliefs and words?), accuracy (are quotes, dates and facts right?), and tone (does it sound like us and treat everyone with respect?). Check scripture and teachings in your own sacred texts, not in the AI.",
            "If your organization is a tax-exempt charity, AI drafts should not endorse or oppose political candidates. The IRS explains the rules for churches and religious organizations in Publication 1828; ask your leaders or an advisor if you are unsure."
          ],
          steps: ["Read for faith: does it match our beliefs and words?", "Check every quote, scripture and date in your own sources.", "Read it out loud for tone.", "Fix what is wrong, and note what you changed.", "Have the agreed reviewer approve it."],
          words: [["Hallucination", "when an AI writes something that sounds true but is made up."], ["Tax-exempt", "an organization the IRS recognizes as not paying federal income tax, with rules it must follow."]],
          sources: [{ name: "IRS Publication 1828, Tax Guide for Churches and Religious Organizations", url: "https://www.irs.gov/pub/irs-pdf/p1828.pdf" }],
          slides: [
            { title: "AI can get faith wrong", bullets: ["Misquoted scripture", "Words from another tradition", "Wrong holy days or made-up facts"] },
            { title: "Three checks", bullets: ["Faith: fits our beliefs", "Accuracy: quotes, dates, facts", "Tone: sounds like us, respectful"] },
            { title: "Stay within the rules", bullets: ["No endorsing political candidates", "See IRS Publication 1828", "Ask your leaders when unsure"] }
          ],
          tryIt: "Final task: draft your \"How we use AI\" note, then use AI to draft this week's announcement and a volunteer schedule with placeholders. Review both for faith, accuracy and tone, and mark what you changed.",
          youCanNow: "review AI drafts for faith, accuracy and tone before they reach your congregation."
        }
      ],
      check: {
        title: "Knowledge Check 2: Putting AI to work for your congregation",
        questions: [
          { q: "Which prompt will give the best bulletin draft?", options: ["\"Write a warm 100-word announcement: food pantry Sat 9-12, youth Wed 6 pm, choir needs voices.\"", "\"bulletin\"", "\"church stuff\"", "\"write everything\""], answer: 0, why: "It gives the events, tone and length." },
          { q: "How should names appear in an AI-made volunteer schedule?", options: ["As placeholders like [Volunteer 1]", "Full names and phone numbers", "Only first names and addresses", "Names with email addresses"], answer: 0, why: "Placeholders keep volunteers' details out of the AI tool." },
          { q: "The AI quoted a scripture in your announcement. What do you do?", options: ["Trust it", "Ask the AI if it is sure", "Check the quote in your own sacred text", "Delete the whole announcement"], answer: 2, why: "AI can misquote; check your own sources." },
          { q: "Which is one of the three review checks in this course?", options: ["Speed", "Tone", "Price", "Font size"], answer: 1, why: "Faith, accuracy and tone are the three checks." },
          { q: "Where can a church learn the IRS rules for religious organizations?", options: ["A social media post", "The AI assistant alone", "A random blog", "IRS Publication 1828"], answer: 3, why: "Publication 1828 is the IRS tax guide for churches and religious organizations." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: AI for Faith-Based Organizations",
    questions: [
      { q: "Which task should stay with people, not AI?", options: ["Drafting an event checklist", "Counseling a member in crisis", "Writing a newsletter draft", "Making a volunteer table"], answer: 1, why: "Pastoral care needs a trusted person." },
      { q: "AI is most helpful in ministry for:", options: ["Office writing and planning", "Hearing confessions", "Deciding who receives help", "Keeping prayer secrets"], answer: 0, why: "AI drafts words and plans; people handle care and decisions." },
      { q: "A good rule of thumb is:", options: ["AI decides, people follow", "AI handles everything", "Never read AI drafts", "AI helps with words and plans; people handle hearts and decisions"], answer: 3, why: "That keeps care and judgment with people." },
      { q: "How long should a \"How we use AI\" note be?", options: ["Fifty pages", "One word", "About one page in plain words", "As long as the AI wants"], answer: 2, why: "Short and plain means people will read and follow it." },
      { q: "Who should agree to the AI ground rules?", options: ["Only the AI company", "One visitor", "Your board, elders or ministry council", "Nobody"], answer: 2, why: "Leaders agreeing gives the rules authority." },
      { q: "How often should you review your AI ground rules?", options: ["About once a year", "Never", "Every hour", "Only if the AI asks"], answer: 0, why: "Tools change, so a yearly review keeps rules current." },
      { q: "Which should NEVER be typed into an AI assistant?", options: ["\"Make it shorter\"", "A list of event dates", "\"Use a warm tone\"", "A member's prayer request with their name"], answer: 3, why: "Prayer requests and names are confidential." },
      { q: "Why treat a prompt like a postcard?", options: ["Postcards are short", "Someone else could read what you type", "AI only reads postcards", "It is faster"], answer: 1, why: "AI tools may keep what you type." },
      { q: "You need a thank-you note for a donor's gift. How do you prompt safely?", options: ["Include their name and the amount", "Use [donor name] and [amount] and fill them in yourself", "Paste the giving record", "Include their address"], answer: 1, why: "Placeholders keep giving records private." },
      { q: "Your church pays for a business AI plan. Should you type confidential pastoral matters into it?", options: ["Yes, it is paid", "Only on Sundays", "Only if it is short", "No, keep confidential pastoral matters out"], answer: 3, why: "Confidential care stays out of AI even on paid plans." },
      { q: "A clear announcement prompt includes:", options: ["Events, dates, tone and length", "Only the word \"announcement\"", "Members' phone numbers", "The pastor's password"], answer: 0, why: "Those details let AI write a useful draft." },
      { q: "After getting a draft, which follow-up is useful?", options: ["\"Here is our member list.\"", "\"Decide our budget.\"", "\"Add a line welcoming visitors.\"", "\"Send it to everyone now.\""], answer: 2, why: "It asks for a clear improvement." },
      { q: "Before an announcement goes out you must:", options: ["Add more AI text", "Remove all dates", "Skip reading it", "Check every date, time and place"], answer: 3, why: "AI can get facts wrong." },
      { q: "Where do you add real volunteer names?", options: ["In the AI prompt", "In your own document after copying the table", "In a public post", "Nowhere"], answer: 1, why: "Names stay in your own files, not the AI tool." },
      { q: "An event checklist usually lists tasks:", options: ["By member income", "In random order", "By time before the event, such as six weeks and two weeks", "Only after the event"], answer: 2, why: "Working back from the date keeps planning on track." },
      { q: "AI uses words from a different faith tradition in your draft. You should:", options: ["Fix it so it fits your tradition", "Leave it", "Ask members to vote", "Post it anyway"], answer: 0, why: "The faith check makes sure it fits your beliefs and words." },
      { q: "What is a hallucination in AI?", options: ["Something the AI writes that sounds true but is made up", "A vision during prayer", "A slow internet connection", "A type of app"], answer: 0, why: "AI can invent facts that sound real." },
      { q: "Reading a draft out loud helps you check:", options: ["The internet speed", "The AI's price", "Tone", "The weather"], answer: 2, why: "Hearing it shows whether it sounds like you." },
      { q: "An AI draft for a tax-exempt church endorses a political candidate. You should:", options: ["Publish it", "Remove it and check IRS Publication 1828 or ask your leaders", "Add a second candidate", "Ignore it"], answer: 1, why: "Tax-exempt charities have IRS rules about political campaigns." },
      { q: "Who gives final approval before an AI draft is shared?", options: ["The AI", "Whoever is nearest", "No one", "The reviewer your leaders agreed on"], answer: 3, why: "A named reviewer catches mistakes and keeps trust." }
    ]
  }
};
