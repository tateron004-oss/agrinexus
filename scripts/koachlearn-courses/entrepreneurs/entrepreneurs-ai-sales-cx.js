"use strict";

// Koach Learn course: Entrepreneurs -> "AI for Sales and Customer Experience". Skill-building course in the shape of re-entry/reentry-ai-digital-confidence.js (see scripts/koachlearn-courses/README.md).

module.exports = {
  id: "entrepreneurs-ai-sales-cx",
  category: "Entrepreneurs",
  name: "AI for Sales and Customer Experience",
  skills: "Qualifying leads, Writing personal outreach, Preparing for sales conversations, Building a customer FAQ, Handling complaints, Learning from customer feedback",
  outcome: "use AI to find and qualify sales leads, write personal outreach that follows the rules, prepare for a sales conversation, and build a customer FAQ and complaint-reply guide that keeps customers happy.",
  about: [
    "Sales and customer service decide whether a business grows. This course is for owners who do their own selling and support and want to do both better and faster with AI.",
    "In Chapter 1 you will use AI to describe who to sell to, sort leads, write personal messages (not spam), and prepare for a sales call with answers to common objections. In Chapter 2 you will build a customer FAQ, learn a calm way to answer complaints, and use AI to find patterns in customer feedback.",
    "Each lesson is about five minutes with a task for your real business. There is a knowledge check after each chapter and a 20-question quiz at the end. Rules about calls, texts and email are explained in plain words; this is not legal advice."
  ],
  finalTask: "Build a sales and service kit for your business: a short list of 10 qualified leads with a reason for each, two personal outreach messages, a one-page call guide with answers to your three most common objections, a 10-question customer FAQ, and a complaint-reply template, all checked for facts and free of private customer data in any AI tool.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "US small business owners who do their own selling and customer support, such as service providers, shops and B2B sellers.",
    startingPoint: "Talk to customers every day and answer questions by phone, email or text. Few have a lead list, a call guide, an FAQ or a set way to answer complaints, and many are unsure of the rules for outreach.",
    gap: "Owners waste time on leads who will not buy, send generic messages that break email, call or text rules, and handle complaints in ways that lose customers. They need to use AI to focus their selling, reach out personally and legally, and answer customers calmly and consistently.",
    constraints: [
      "Plain words; rules explained simply and not as legal advice",
      "Devices: a phone or computer with a free AI assistant and email",
      "Time: about five minutes per lesson plus tasks on the owner's real customers",
      "Email, call and text rules apply (CAN-SPAM, TCPA consent), including for AI voices",
      "No customer names, contact details or private data in any AI tool"
    ],
    prerequisites: "\"Introduction to AI for Entrepreneurs\". \"AI Marketing and Content Creation\" helps with the ideal-customer profile."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Given 15 possible leads from public information and your network", action: "score them on problem, money, decision and timing and choose your top 10", standard: "with a written reason for each" },
    { id: "O2", condition: "Given two leads from your list", action: "write short, personal outreach messages that follow US email, call and text rules", standard: "each with a real detail about the lead, your address and an opt-out line" },
    { id: "O3", condition: "Before a sales conversation", action: "create a one-page call guide with five open questions and answers to your three most common objections", standard: "with every answer true and practiced once in an AI role-play" },
    { id: "O4", condition: "Given at least ten real customer questions with names removed", action: "create a 10-question FAQ with answers drafted from your own facts", standard: "with every answer checked" },
    { id: "O5", condition: "Given a real or made-up complaint", action: "choose a fair fix and write a calm reply using thanks, sorry, the fix and when", standard: "with the fix decided by you, not AI" },
    { id: "O6", condition: "Given at least 20 pieces of customer feedback", action: "use AI to find the main themes and choose one improvement", standard: "after checking AI's counts yourself" }
  ],
  chapters: [
    {
      name: "Chapter 1: Selling with AI",
      lessons: [
        {
          objectives: ["O1"],
          title: "Finding and qualifying leads",
          minutes: 5,
          goal: "Make a short list of leads and decide which are most likely to buy.",
          text: [
            "A lead is a person or business that might buy from you. Qualifying means deciding which leads are worth your time. A simple test: Do they have the problem you solve? Can they pay? Can they decide? Do they need it soon?",
            "AI can help you brainstorm where your leads are (\"Where do small gyms in my city look for cleaning services?\") and score a list you already have. Describe each lead in general words and ask AI to sort them by the four questions.",
            "Use public business information, not private personal data. Do not buy contact lists or scrape personal details; they are often out of date and can break privacy and marketing rules."
          ],
          steps: ["Write who your best past customers were.", "Ask AI where similar businesses or people can be found.", "List 15 to 20 possible leads from public sources and your own network.", "Score each on problem, money, decision and timing.", "Keep the top 10 with a one-line reason each."],
          words: [["Lead", "a person or business that might buy from you."], ["Qualify", "decide whether a lead is likely to buy and worth your time."]],
          slides: [
            { title: "A lead might buy", bullets: ["Qualifying = is it worth your time?", "Problem, money, decision, timing"] },
            { title: "How AI helps", bullets: ["Brainstorm where leads are", "Sort your list by the four questions"] },
            { title: "Stay clean", bullets: ["Use public business information", "No bought lists or scraped personal data"] }
          ],
          tryIt: "List 15 possible leads, score them on problem, money, decision and timing with AI's help, and keep your top 10 with a reason for each.",
          youCanNow: "find leads and focus on the ones most likely to buy.",
          quickCheck: [
            { objective: "O1", q: "What is a qualified lead?", options: ["Someone with the problem, the money, the say and a need soon", "Anyone whose email you can find", "A friend who likes your posts", "A business in another field"], answer: 0, why: "Qualified leads meet the four questions: problem, money, decision and timing." },
            { objective: "O1", q: "A lead loves your idea but has no budget until next year. What do you do?", options: ["Put them at the top of your list", "Score them lower on money and timing and follow up later", "Delete them forever", "Send them ten messages"], answer: 1, why: "Scoring helps you focus on who can buy now." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Writing personal outreach, not spam",
          minutes: 5,
          goal: "Write a short, personal first message that follows US email, call and text rules.",
          text: [
            "Good outreach is short and about them: what you noticed about their business, the problem you can help with, and one easy next step. Ask AI: \"Write a 70-word first email to a small gym owner. Mention that their reviews talk about clean locker rooms being important. Offer a free 15-minute walkthrough. No hype.\" Then add one detail only you know.",
            "For commercial email, the CAN-SPAM Act requires honest From and subject lines, your physical address and a clear way to opt out, and opt-outs must be honored within 10 business days.",
            "Calls and texts have stricter rules. Marketing texts and robocalls usually need the person's consent first, and in 2024 the FCC ruled that AI-generated voices count as \"artificial\" voices under the Telephone Consumer Protection Act. Do not use AI voice calls or mass texts without consent, and check fcc.gov or a lawyer before you start."
          ],
          steps: ["Note one real detail about the lead from public information.", "Ask AI for a short message: their situation, your help, one next step.", "Add a personal detail and check every fact.", "For email, include your address and an opt-out line.", "Do not text or AI-call anyone without their consent."],
          words: [["Outreach", "contacting a possible customer first."], ["CAN-SPAM Act", "US law with rules for commercial email."], ["TCPA", "Telephone Consumer Protection Act: US law limiting marketing calls and texts without consent."]],
          slides: [
            { title: "Short and about them", bullets: ["What you noticed", "The problem you solve", "One easy next step"] },
            { title: "Email rules (CAN-SPAM)", bullets: ["Honest From and subject lines", "Your physical address", "Opt-out honored within 10 business days"] },
            { title: "Calls and texts", bullets: ["Marketing texts and robocalls usually need consent", "AI voices count as artificial voices (FCC 2024)", "Check fcc.gov or a lawyer first"] }
          ],
          sources: [{ name: "FTC: CAN-SPAM Act Compliance Guide for Business", url: "https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business" }, { name: "FCC: AI-generated voices in robocalls ruling (2024)", url: "https://www.fcc.gov/document/fcc-makes-ai-generated-voices-robocalls-illegal" }],
          tryIt: "Write two personal outreach emails to leads from your list with AI's help. Add a real detail to each, and check they include your address and an opt-out line.",
          youCanNow: "write personal outreach that respects email, call and text rules.",
          quickCheck: [
            { objective: "O2", q: "What must a commercial email include under CAN-SPAM?", options: ["A discount", "A photo of you", "A way to opt out", "Your home phone number"], answer: 2, why: "Commercial emails must give a way to opt out." },
            { objective: "O2", q: "AI writes an outreach email that could be sent to anyone. What do you do?", options: ["Send it to everyone", "Make it longer", "Add more sales words", "Add something real you noticed about this lead"], answer: 3, why: "A real detail makes the message personal, not spam." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Preparing for a sales conversation",
          minutes: 5,
          goal: "Make a one-page call guide with questions and answers to common objections.",
          text: [
            "A sales conversation is mostly listening. Prepare five good questions about the customer's situation, problem and goals, then explain how you help in their words.",
            "Objections are reasons people give for not buying: \"It costs too much.\" \"I need to think about it.\" \"We already have someone.\" Ask AI: \"List the five most common objections for [service] and give a calm, honest answer to each.\" Edit them so they sound like you and are true.",
            "Role-play with AI: \"Pretend you are a busy gym owner who is not sure about hiring a cleaning service. Ask me hard questions.\" Practice until you can answer without reading."
          ],
          steps: ["Write five open questions about the customer's situation and goals.", "Ask AI for common objections and honest answers.", "Edit the answers so they are true and sound like you.", "Role-play the conversation with AI.", "Put it all on one page."],
          words: [["Objection", "a reason a customer gives for not buying yet."], ["Role-play", "practicing a conversation by acting it out."], ["Open question", "a question that cannot be answered with just yes or no."]],
          slides: [
            { title: "Mostly listening", bullets: ["Five open questions", "Their situation, problem, goals", "Explain your help in their words"] },
            { title: "Plan for objections", bullets: ["\"Too expensive\"", "\"I need to think\"", "\"We already have someone\""] },
            { title: "Practice with AI", bullets: ["Ask AI to play a doubtful customer", "Answer out loud", "Repeat until it feels natural"] }
          ],
          tryIt: "Build your one-page call guide: five open questions and honest answers to your three most common objections. Role-play once with AI.",
          youCanNow: "prepare for and practice a sales conversation with AI.",
          quickCheck: [
            { objective: "O3", q: "What is an open question?", options: ["One that cannot be answered with just yes or no", "A question about price only", "A question you ask AI", "A question with no answer"], answer: 0, why: "Open questions get the customer talking about their needs." },
            { objective: "O3", q: "AI's answer to the objection \"I need to think about it\" sounds pushy. What do you do?", options: ["Use it as it is", "Edit it so it is honest and sounds like you", "Drop the call guide", "Read it word for word faster"], answer: 1, why: "You edit AI answers to be true and in your own voice." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Selling with AI",
        questions: [
          { objective: "O1", q: "Which lead is best qualified?", options: ["Someone with no need for your service", "A business with the problem, the budget, a decision-maker and a need soon", "A random email address", "A competitor"], answer: 1, why: "It passes all four qualifying questions." },
          { objective: "O1", q: "Where should your lead information come from?", options: ["Customers' private files", "Scraped personal data", "A bought list of strangers", "Public business information and your own network"], answer: 3, why: "Public information avoids privacy and marketing problems." },
          { objective: "O2", q: "A good first outreach message is:", options: ["Short, about them, with one easy next step", "Long and all about you", "Copied to 1,000 people unchanged", "Full of \"guaranteed\" claims"], answer: 0, why: "Personal and short gets replies." },
          { objective: "O2", q: "Can you send AI voice robocalls to people who never gave consent?", options: ["Yes, on weekends", "Yes, AI voices are exempt", "No, consent rules apply to AI voices too", "Only to businesses in other states"], answer: 2, why: "The FCC treats AI voices as artificial voices under the TCPA." },
          { objective: "O3", q: "A customer says \"It costs too much.\" This is called:", options: ["A trigger", "A lead", "An objection", "A refund"], answer: 2, why: "Objections are reasons for not buying yet." }
        ]
      }
    },
    {
      name: "Chapter 2: Keeping customers happy",
      lessons: [
        {
          objectives: ["O4"],
          title: "Building a customer FAQ",
          minutes: 5,
          goal: "Create a 10-question FAQ from the questions customers really ask.",
          text: [
            "Customers ask the same questions again and again. A frequently asked questions (FAQ) page or document saves you time and helps customers decide faster.",
            "Collect real questions from emails, messages and calls for two weeks (remove names and contact details). Ask AI to group them and write clear, short answers using only facts you give it: prices, hours, area, policies.",
            "Check every answer. Then use the FAQ on your website, in your saved replies, and as the facts for any chatbot. If you use a chatbot, tell customers it is automated and give an easy way to reach a person."
          ],
          steps: ["Collect customer questions for two weeks, without names or contact details.", "Ask AI to group them and pick the top 10.", "Give AI your real facts and ask for short answers.", "Check each answer.", "Publish the FAQ and use it in replies."],
          words: [["FAQ", "frequently asked questions: a list of common questions with answers."], ["Chatbot", "an automated program that answers customer messages."]],
          slides: [
            { title: "Same questions, every week", bullets: ["An FAQ saves you time", "Helps customers decide faster"] },
            { title: "Build it from real questions", bullets: ["Collect for two weeks, no names", "AI groups them and drafts answers", "Only from facts you give it"] },
            { title: "Use it everywhere", bullets: ["Website and saved replies", "Facts for any chatbot", "Say when it is automated; offer a person"] }
          ],
          tryIt: "Collect at least ten real customer questions (no names), use AI to group them and draft answers from your facts, check each, and save your FAQ.",
          youCanNow: "turn real customer questions into a checked FAQ.",
          quickCheck: [
            { objective: "O4", q: "Where should FAQ questions come from?", options: ["AI's guesses", "A competitor's website", "Questions real customers ask", "Questions you wish people asked"], answer: 2, why: "Real questions make an FAQ that actually helps." },
            { objective: "O4", q: "AI's FAQ answer gives a delivery time you do not offer. What do you do?", options: ["Publish it", "Change your delivery time", "Remove the whole FAQ", "Correct it from your real facts"], answer: 3, why: "FAQ answers must be based on your facts." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Answering complaints calmly",
          minutes: 5,
          goal: "Use AI to draft a calm, fair reply to a complaint, and decide how to fix it.",
          text: [
            "A complaint handled well can win a customer for life. A simple pattern: thank them, say sorry for their experience, say what you will do, and say when. Do not argue in public; offer to continue privately.",
            "When you are upset, AI helps you stay calm. Summarize the complaint in your own words (no names or order numbers) and ask: \"Draft a calm, short reply that thanks them, apologizes, offers [fix], and invites them to message us privately.\"",
            "You decide the fix. Do not let AI promise refunds or credits you have not agreed to, and do not use AI to write fake positive reviews to bury the bad one; the FTC bans fake reviews, including AI-written ones."
          ],
          steps: ["Read the complaint and wait a few minutes before replying.", "Decide the fair fix yourself.", "Summarize the complaint for AI with no names or order numbers.", "Ask for a calm reply: thanks, sorry, the fix, when, move to private.", "Edit, check and send."],
          words: [["Complaint", "a customer telling you something went wrong."], ["Fix", "what you will do to make it right, like a redo or refund."]],
          slides: [
            { title: "A reply pattern", bullets: ["Thank them", "Say sorry for their experience", "Say what you will do and when"] },
            { title: "AI keeps you calm", bullets: ["Summarize without names or order numbers", "Ask for a short, calm draft", "Move the conversation to private"] },
            { title: "You decide", bullets: ["The fix is your choice", "No promises you did not approve", "Never fake reviews to bury a bad one"] }
          ],
          sources: [{ name: "FTC: Final rule banning fake reviews and testimonials (press release)", url: "https://www.ftc.gov/news-events/news/press-releases/2024/08/federal-trade-commission-announces-final-rule-banning-fake-reviews-testimonials" }],
          tryIt: "Take a real or made-up complaint, decide the fair fix, and use AI to draft a calm reply using the four-part pattern. Save it as your complaint-reply template.",
          youCanNow: "answer complaints calmly and fairly with AI's help, and decide the fix yourself.",
          quickCheck: [
            { objective: "O5", q: "What are the four parts of a calm complaint reply?", options: ["Thanks, sorry, the fix, when", "Deny, delay, defend, delete", "Price, product, place, promotion", "Hello, goodbye, sign, send"], answer: 0, why: "This pattern keeps replies calm, fair and clear." },
            { objective: "O5", q: "AI's draft reply offers a full refund you have not agreed to. What do you do?", options: ["Send it", "Decide the fair fix yourself and change the draft", "Let AI decide", "Ignore the complaint"], answer: 1, why: "You decide the fix; AI only drafts the words." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Learning from customer feedback",
          minutes: 5,
          goal: "Use AI to find patterns in reviews and feedback, and choose one improvement.",
          text: [
            "Reviews, survey answers and messages tell you what to fix and what to keep. Reading them one by one, you miss patterns. AI is good at grouping.",
            "Copy 20 to 50 reviews or comments (remove names) and ask: \"Group this feedback into themes. For each theme, say how many comments mention it and give one example. List the top three things customers love and the top three problems.\"",
            "Check the counts by skimming yourself, because AI can miscount. Then choose one problem to fix this month, fix it, and tell customers you listened."
          ],
          steps: ["Collect 20 to 50 reviews or comments and remove names.", "Ask AI to group them into themes with counts and examples.", "Skim to check the themes and counts.", "Choose one problem to fix this month.", "Tell customers what you changed."],
          words: [["Theme", "a topic that comes up again and again in feedback."], ["Survey", "a short set of questions you ask customers."]],
          slides: [
            { title: "Feedback shows the way", bullets: ["Reviews, surveys, messages", "One by one, you miss patterns"] },
            { title: "AI groups it", bullets: ["Remove names first", "Themes, counts and examples", "Top three loves and problems"] },
            { title: "Act on it", bullets: ["Check the counts yourself", "Fix one problem this month", "Tell customers you listened"] }
          ],
          tryIt: "Final task: analyze at least 20 pieces of feedback with AI, choose one fix, then assemble your sales and service kit: 10 qualified leads, two outreach messages, call guide, FAQ and complaint template.",
          youCanNow: "use AI across sales and service: find leads, reach out properly, prepare, answer customers and keep improving.",
          quickCheck: [
            { objective: "O6", q: "What is a theme in customer feedback?", options: ["One angry comment", "The color of your website", "A topic that comes up again and again", "A five-star review"], answer: 2, why: "Themes show the problems many customers share." },
            { objective: "O6", q: "AI says most feedback is about price, but you remember many comments about wait times. What do you do?", options: ["Trust AI", "Lower prices at once", "Ask AI to agree with you", "Skim the feedback yourself to check"], answer: 3, why: "Check AI's counts yourself before acting on them." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Keeping customers happy",
        questions: [
          { objective: "O4", q: "Where should FAQ questions come from?", options: ["Real questions customers ask", "Questions AI makes up", "A competitor's site", "Random guesses"], answer: 0, why: "Real questions make a useful FAQ." },
          { objective: "O4", q: "If you use a chatbot, you should:", options: ["Hide your contact details", "Pretend it is a person", "Let it promise refunds", "Tell customers it is automated and offer a way to reach a person"], answer: 3, why: "Honesty and an easy route to a person keep trust." },
          { objective: "O5", q: "Who decides the fix for a complaint?", options: ["The AI", "You", "The customer's friends", "Nobody"], answer: 1, why: "AI drafts the words; you decide the fix." },
          { objective: "O5", q: "A bad review appears. Which response is illegal under FTC rules?", options: ["Posting fake positive reviews to bury it", "Replying calmly", "Fixing the problem", "Inviting the customer to talk privately"], answer: 0, why: "The FTC bans fake reviews, including AI-written ones." },
          { objective: "O6", q: "AI says 30 comments mention slow delivery. What should you do?", options: ["Delete the comments", "Trust it fully", "Skim to check the count yourself", "Ignore it"], answer: 2, why: "AI can miscount; check before acting." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: AI for Sales and Customer Experience",
    questions: [
      { objective: "O1", q: "A lead is:", options: ["A paid customer", "A person or business that might buy from you", "A complaint", "A product"], answer: 1, why: "That is the definition." },
      { objective: "O1", q: "The four qualifying questions are about:", options: ["Logo, font, website and app", "Color, size, weight and shape", "Name, age, address and phone", "Problem, money, decision and timing"], answer: 3, why: "They show who is likely to buy." },
      { objective: "O1", q: "Which source of leads is fine to use?", options: ["A competitor's customer file", "A bought list of personal phone numbers", "Scraped private data", "Public business listings"], answer: 3, why: "Public business information avoids privacy problems." },
      { objective: "O2", q: "A good outreach message mentions:", options: ["Only your awards", "Something real you noticed about them", "A fake deadline", "Their home address"], answer: 1, why: "Personal details show you did your homework." },
      { objective: "O2", q: "CAN-SPAM requires commercial emails to include:", options: ["A discount", "Your bank details", "A way to opt out", "A photo"], answer: 2, why: "Opt-out is one of the basic requirements." },
      { objective: "O2", q: "Opt-out requests must be honored within:", options: ["10 business days", "1 year", "1 hour", "Never"], answer: 0, why: "The FTC guide says 10 business days." },
      { objective: "O2", q: "Under the FCC's 2024 ruling, AI-generated voices in calls are treated as:", options: ["Exempt from all rules", "Human voices", "Artificial voices under the TCPA", "Emails"], answer: 2, why: "So consent rules apply." },
      { objective: "O2", q: "Before sending marketing texts you should:", options: ["Have the person's consent and check the rules", "Text everyone in your phone", "Use an AI voice instead", "Hide your business name"], answer: 0, why: "Marketing texts usually need consent." },
      { objective: "O3", q: "A sales conversation should be mostly:", options: ["Talking about yourself", "Listening", "Reading a script fast", "Discounts"], answer: 1, why: "Listening tells you what the customer needs." },
      { objective: "O3", q: "An open question is one that:", options: ["Has no answer", "Is rude", "Is about price only", "Cannot be answered with just yes or no"], answer: 3, why: "Open questions get customers talking." },
      { objective: "O3", q: "AI role-play helps you:", options: ["Practice answering hard questions", "Sign contracts", "Skip preparing", "Write fake reviews"], answer: 0, why: "Practice builds confidence." },
      { objective: "O3", q: "When AI writes answers to objections, you should:", options: ["Never use them", "Read them word for word", "Add false guarantees", "Edit them so they are true and sound like you"], answer: 3, why: "Honest answers in your voice build trust." },
      { objective: "O4", q: "An FAQ helps because:", options: ["It hides prices", "It replaces all customer contact", "It answers common questions quickly", "It is required by law"], answer: 2, why: "It saves time for you and customers." },
      { objective: "O4", q: "Before giving customer questions to AI, you should:", options: ["Add their card numbers", "Remove names and contact details", "Ask for their passwords", "Post them publicly"], answer: 1, why: "Keep private data out of AI tools." },
      { objective: "O4", q: "FAQ answers should be based on:", options: ["Old rumors", "Whatever the AI guesses", "A competitor's prices", "Facts you give the AI"], answer: 3, why: "AI can invent facts if you do not give them." },
      { objective: "O5", q: "The four-part complaint reply is:", options: ["Discount, discount, discount, discount", "Deny, argue, block, delete", "Thanks, sorry, the fix, when", "Ignore it"], answer: 2, why: "It is calm, fair and clear." },
      { objective: "O5", q: "When a complaint is public, a good move is to:", options: ["Reply calmly and offer to continue privately", "Argue in the comments", "Post the customer's details", "Delete your account"], answer: 0, why: "Moving to private avoids a public argument." },
      { objective: "O5", q: "Can AI promise a refund in your reply without your approval?", options: ["Yes, always", "No, you decide the fix", "Only on weekends", "Only for big orders"], answer: 1, why: "Money decisions stay with you." },
      { objective: "O6", q: "A theme in feedback is:", options: ["A website design", "A topic that comes up again and again", "A single review", "A font"], answer: 1, why: "Themes show patterns." },
      { objective: "O6", q: "After finding the top problem in feedback, you should:", options: ["Fix it and tell customers you listened", "Ignore it", "Hide the reviews", "Buy new reviews"], answer: 0, why: "Acting on feedback builds loyalty." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Pre-Test: What Do You Already Know?",
    from: [
      0,
      1,
      3,
      4,
      8,
      9,
      12,
      13,
      15,
      18
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      {
        name: "Qualified leads",
        objective: "O1",
        notYet: "Fewer than 10 leads, no reasons, or leads from unapproved sources.",
        meets: "10 leads from public information or your network, each with a reason.",
        exceeds: "Each lead shows its score on problem, money, decision and timing."
      },
      {
        name: "Outreach messages",
        objective: "O2",
        notYet: "Generic, or missing the address or opt-out line.",
        meets: "Two short, personal messages with a real detail, address and opt-out.",
        exceeds: "Each ends with one easy next step and was read aloud before sending."
      },
      {
        name: "Call guide",
        objective: "O3",
        notYet: "Missing questions or objection answers, or answers overpromise.",
        meets: "Five open questions and honest answers to three objections, practiced once.",
        exceeds: "Notes what was changed after the role-play."
      },
      {
        name: "FAQ and complaint template",
        objective: "O5",
        notYet: "FAQ answers unchecked, or the complaint reply promises a fix not decided.",
        meets: "10 checked FAQ answers and a four-part complaint template with the owner's fix.",
        exceeds: "The FAQ is published or in use, and the template has a line offering to continue privately."
      },
      {
        name: "Private data",
        objective: "O4",
        notYet: "Customer names or contact details went into an AI tool.",
        meets: "All questions and feedback had names and contact details removed.",
        exceeds: "Notes the AI tool's data setting that was checked."
      }
    ]
  },
  evaluation: {
    results: [
      "Owners who finish the course and pass the final task (rubric)",
      "Sales conversations or new customers from the lead list within 30 days (follow-up survey)",
      "Owners who publish their FAQ and report fewer repeat questions",
      "Learners who start another Koach Learn entrepreneur course within 30 days"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A phone or computer with a free AI assistant and email",
      "A spreadsheet for the lead list",
      "Real customer questions and feedback with names and contact details removed",
      "About 60 to 75 minutes in total for lessons, tasks, checks and the kit"
    ],
    facilitatorNotes: [
      "Pair learners for sales role-plays after they practice with AI.",
      "Show how to remove names and contact details from customer questions before using AI.",
      "Explain that call, text and email rules are given in plain words and are not legal advice.",
      "Stress that the owner decides every complaint fix and refund, not AI.",
      "Score the sales and service kit with the rubric, one Not yet row at a time."
    ]
  }
};
