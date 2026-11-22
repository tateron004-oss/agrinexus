"use strict";

// Koach Learn course (shared, bonus): "AI for Customer Service Careers". Categories: Re-Entry, Workforce Development. Shape and rules: ../README.md; model: ../re-entry/reentry-ai-digital-confidence.js.

module.exports = {
  id: "ai-customer-service-careers",
  category: "Re-Entry",
  name: "AI for Customer Service Careers",
  skills: "Handling a customer contact start to finish, Calming upset customers, Using AI suggested replies and knowledge bases, Writing ticket notes, Protecting customer data, Interviewing for customer service jobs",
  outcome: "handle a customer call or chat from greeting to close, calm an upset customer, use AI tools the way support agents do while checking their answers, write clear ticket notes, and show these skills in a customer service job interview.",
  about: [
    "Customer service jobs are everywhere: call centers, chat support, retail, banks, hospitals, utilities, delivery companies and tech firms. Many are entry level, offer training, and some are remote. AI is changing the work: chatbots answer easy questions, and human agents handle harder ones with AI help.",
    "This course is for people coming home, job seekers in workforce programs and anyone who wants a customer service career. People skills you already have, like staying calm, listening and solving problems, are the heart of it.",
    "You will practice with an AI assistant playing the customer. Each lesson is about five minutes with a \"Try it now\" task. A knowledge check closes each chapter and a 20-question quiz closes the course."
  ],
  finalTask: "Role-play three customer contacts with an AI assistant playing the customer: a simple question, an upset customer and a problem you cannot solve on the first try. Use the five-step contact flow, write ticket notes for each, then write three résumé bullet points and a STAR interview answer about calming an upset customer.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "People coming home from prison, job seekers in workforce programs and anyone who wants an entry-level customer service job in a call center, chat team, store, bank, clinic or delivery company.",
    startingPoint: "Can talk with people, stay calm and solve everyday problems. Many have used a phone and text messages; few have used a support desk, ticket system or AI assistant at work.",
    gap: "Customer service jobs now mix human contact with AI tools. Learners need a clear way to handle a contact, calm upset customers, check AI suggestions, write ticket notes and show these skills in an interview, so they can get hired and keep the job.",
    constraints: [
      "Reading level: plain words and short sentences",
      "Devices: a phone or a shared library or program computer",
      "Time: about five-minute lessons with short practice tasks",
      "Privacy: practice uses made-up customers and no real account details",
      "Company rules and tools differ; learners follow each employer's policy"
    ],
    prerequisites: "None. Learners new to AI tools can take \"Introduction to AI and Digital Confidence\" first."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Given three customer service job posts", action: "describe the main customer service jobs and how agents use AI tools such as chatbots, suggested replies and knowledge bases", standard: "naming at least one tool and one human task for each job" },
    { id: "O2", condition: "In a role-play with a customer", action: "handle the contact from greeting to close using the five steps: greet, listen, confirm, solve and close", standard: "using all five steps in order" },
    { id: "O3", condition: "In a role-play with an upset customer", action: "calm the customer with the HEAT steps and decide when to escalate", standard: "without arguing or saying \"calm down\"" },
    { id: "O4", condition: "Given an AI-suggested reply", action: "check the reply against the knowledge base and policy and edit it before sending", standard: "so every fact and promise matches policy" },
    { id: "O5", condition: "After a customer contact", action: "write ticket notes that record the issue, what you did, what was promised and the follow-up", standard: "with every required part and no passwords or private data" },
    { id: "O6", condition: "Given a job post", action: "write résumé bullets and a STAR interview answer that show your customer service skills", standard: "with three bullets and one complete STAR story" }
  ],
  chapters: [
    {
      name: "Chapter 1: Serving customers well",
      lessons: [
        {
          objectives: ["O1"],
          title: "What customer service work looks like with AI",
          minutes: 4,
          goal: "Describe customer service jobs and how AI tools are used in them.",
          text: [
            "Customer service agents help people by phone, chat, email, social media or in person. Common job titles: customer service representative, support agent, call center agent, help desk technician and client care specialist.",
            "AI now handles many simple questions through chatbots, so human agents get the harder, more emotional or unusual cases. Agents often use AI tools that suggest replies, search the company's knowledge base, summarize long conversations and write ticket notes.",
            "That makes human skills more valuable: listening, empathy, staying calm, judgment and solving problems. AI suggests; you decide what is right for the customer and follow company policy."
          ],
          words: [["Customer service representative", "a person whose job is helping customers with questions and problems."], ["Knowledge base", "a company's library of answers and how-to articles."], ["Ticket", "a record of one customer issue and what was done about it."]],
          slides: [
            { title: "Where the jobs are", bullets: ["Phone, chat, email, social media, in person", "Retail, banks, hospitals, utilities, tech"] },
            { title: "AI in the job", bullets: ["Chatbots handle simple questions", "Suggested replies and knowledge search", "Summaries and ticket notes"] },
            { title: "Human skills matter more", bullets: ["Listening and empathy", "Calm and judgment", "You decide; AI suggests"] }
          ],
          tryIt: "Look at three customer service job posts. Write down the job titles, whether they mention AI, chat or specific tools, and three skills each one asks for.",
          youCanNow: "describe customer service jobs and how agents use AI tools.",
          quickCheck: [
            { objective: "O1", q: "What does a human support agent usually handle when a company uses chatbots?", options: ["Only password resets", "Nothing, because chatbots do all the work", "Harder and more emotional cases", "Only cases in another language"], answer: 2, why: "Chatbots take simple questions, so people get the harder cases that need care and judgment." },
            { objective: "O1", q: "A job post asks for \"experience with a ticketing system.\" You have never used one. What would you do?", options: ["Skip the job because you do not qualify", "Apply and show related skills, and learn what a ticket system does", "Say on your résumé that you used one", "Ask a chatbot to apply for you"], answer: 1, why: "You can apply honestly, show related skills and learn the tool; lying on a résumé is never the answer." }
          ]
        },
        {
          objectives: ["O2"],
          title: "The five-step customer contact",
          minutes: 5,
          goal: "Handle a customer contact from greeting to close using five steps.",
          text: [
            "Most good contacts follow five steps. Greet: say your name and offer help. Listen: let them explain without interrupting, and ask questions to understand. Confirm: repeat the problem back in your own words. Solve: give the answer or next steps, clearly. Close: check it is solved, ask if there is anything else, and thank them.",
            "Example: \"Thanks for calling, this is Dee. How can I help?\" ... \"So your order shows delivered but you didn't get it. Let me check.\" ... \"I've sent a replacement; it arrives Thursday. Is there anything else I can help with?\"",
            "Verify identity using the company's process before sharing account details. Never ask for information the process does not require, and never ask for a full password."
          ],
          steps: ["Greet with your name and an offer to help.", "Listen without interrupting; ask questions.", "Confirm the problem in your own words.", "Solve or explain next steps clearly.", "Close: check, ask if anything else, thank them."],
          words: [["Verify identity", "confirm the customer is who they say they are using the company's steps."], ["Resolution", "the solution to the customer's problem."]],
          slides: [
            { title: "Five steps", bullets: ["Greet and listen", "Confirm the problem", "Solve and close"] },
            { title: "Sound like this", bullets: ["\"This is Dee. How can I help?\"", "\"So your order shows delivered but didn't arrive.\"", "\"Anything else I can help with?\""] },
            { title: "Protect the account", bullets: ["Verify identity the company's way", "Ask only for what is required", "Never ask for a full password"] }
          ],
          tryIt: "Ask an AI assistant: \"Play a customer whose package says delivered but never arrived. Stay in character. After we finish, rate me on greet, listen, confirm, solve and close.\" Run the role-play.",
          youCanNow: "handle a customer contact from greeting to close using five steps.",
          quickCheck: [
            { objective: "O2", q: "Which step comes right after you greet the customer?", options: ["Solve", "Close", "Confirm", "Listen"], answer: 3, why: "After the greeting you listen to the whole problem before you confirm or solve it." },
            { objective: "O2", q: "You think the problem is solved. What would you do before ending the contact?", options: ["Check it is solved, ask if anything else is needed and thank them", "Hang up quickly to take the next call", "Tell them to call back if it breaks", "Ask them to rate you five stars"], answer: 0, why: "A good close checks the fix, asks if anything else is needed and thanks the customer." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Calming an upset customer",
          minutes: 6,
          goal: "Use de-escalation steps to calm an upset customer and find a solution.",
          text: [
            "Upset customers are usually upset at the situation, not at you. Stay calm, keep your voice low and slow, and do not argue or take it personally.",
            "Use the HEAT steps: Hear them out, Empathize (\"I understand how frustrating that is\"), Apologize for the experience, and Take action (tell them exactly what you will do). Avoid \"calm down\" and \"that's not my job\".",
            "Know your limits. If someone is abusive or threatening, follow your company's policy, which often allows a warning and then ending the contact, or handing it to a supervisor. Taking short breaks and talking with coworkers after hard calls helps you stay well."
          ],
          steps: ["Stay calm and do not take it personally.", "Hear them out fully.", "Empathize and apologize for the experience.", "Take action: say exactly what you will do.", "If abusive, follow company policy or get a supervisor."],
          words: [["De-escalation", "calming a tense situation."], ["Empathy", "showing you understand how someone feels."], ["Escalate", "pass a case to a supervisor or specialist."]],
          slides: [
            { title: "It is not about you", bullets: ["They are upset at the situation", "Low, slow voice; no arguing"] },
            { title: "HEAT", bullets: ["Hear them out", "Empathize and Apologize", "Take action"] },
            { title: "Know your limits", bullets: ["Abuse or threats: follow policy", "Get a supervisor", "Take care of yourself after hard calls"] }
          ],
          tryIt: "Ask an AI assistant to play an angry customer whose bill was charged twice. Use HEAT. Then ask the AI which phrases worked and which to change.",
          youCanNow: "calm an upset customer with HEAT and know when to escalate.",
          quickCheck: [
            { objective: "O3", q: "What does the T in HEAT stand for?", options: ["Talk faster", "Transfer", "Take action", "Thank"], answer: 2, why: "HEAT is Hear, Empathize, Apologize and Take action." },
            { objective: "O3", q: "A customer is shouting about a double charge. What would you say first?", options: ["\"I hear you, and I'm sorry this happened. Let me look at it now.\"", "\"Calm down so I can help you.\"", "\"That's not my department.\"", "\"You must have clicked twice.\""], answer: 0, why: "Hearing and empathizing first lowers the heat; blaming or saying calm down raises it." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Serving customers well",
        questions: [
          { objective: "O1", q: "What is a knowledge base?", options: ["A customer's bank account", "A type of chatbot", "A company's library of answers and how-to articles", "A training video only"], answer: 2, why: "Agents search it to find correct answers." },
          { objective: "O1", q: "Why do human skills matter more as AI grows in customer service?", options: ["Humans get the harder, more emotional cases", "AI is banned", "Customers never use chat", "Humans answer only simple questions"], answer: 0, why: "Chatbots take simple cases; people handle hard ones." },
          { objective: "O2", q: "Which step comes right after listening?", options: ["Close the call", "Ask for their password", "Transfer them", "Confirm the problem in your own words"], answer: 3, why: "Confirming shows you understood." },
          { objective: "O3", q: "What does the E in HEAT stand for?", options: ["Escalate", "Empathize", "Exit", "Email"], answer: 1, why: "HEAT: Hear, Empathize, Apologize, Take action." },
          { objective: "O3", q: "Which phrase should you avoid with an upset customer?", options: ["\"I understand how frustrating that is.\"", "\"Calm down.\"", "\"Here is what I will do.\"", "\"Thank you for your patience.\""], answer: 1, why: "\"Calm down\" usually makes people angrier." }
        ]
      }
    },
    {
      name: "Chapter 2: AI tools and getting hired",
      lessons: [
        {
          objectives: ["O4"],
          title: "Using AI suggested replies and the knowledge base",
          minutes: 5,
          goal: "Use AI suggestions as a starting point and check them before sending.",
          text: [
            "Many support systems show AI-suggested replies or answers pulled from the knowledge base. They save time, but they can be wrong, out of date, or not fit this customer's situation.",
            "Before you send: read it fully, check facts against the knowledge base or policy (dates, prices, refund rules), make it fit this person (use their name, answer what they asked), and fix the tone. If AI suggests something against policy, like a refund you are not allowed to give, do not send it.",
            "To practice at home, paste a made-up customer message into a free AI assistant and ask: \"Draft a friendly reply. Our policy: refunds within 30 days with receipt.\" Then edit it as if you were the agent."
          ],
          steps: ["Read the suggested reply fully.", "Check facts against the knowledge base or policy.", "Personalize it for this customer.", "Fix the tone.", "Do not send anything against policy."],
          words: [["Suggested reply", "a reply drafted by AI that an agent can edit and send."], ["Policy", "the company's official rules."]],
          slides: [
            { title: "AI suggestions save time", bullets: ["But can be wrong or out of date", "May not fit this customer"] },
            { title: "Before you send", bullets: ["Check facts against policy", "Personalize and fix the tone", "Never send what breaks policy"] },
            { title: "Practice at home", bullets: ["Paste a made-up message into AI", "Give it the policy", "Edit like an agent"] }
          ],
          tryIt: "Write a made-up customer email about a late refund. Ask AI to draft a reply using a policy you make up, then edit it and mark every change you made.",
          youCanNow: "use AI-suggested replies safely by checking, personalizing and following policy.",
          quickCheck: [
            { objective: "O4", q: "What is an AI-suggested reply?", options: ["A final answer you must send", "A draft the AI writes that you check and edit", "A message from your supervisor", "A survey the customer fills in"], answer: 1, why: "The suggestion is only a starting point; you check it and decide what to send." },
            { objective: "O4", q: "An AI draft promises a refund in two days, but policy says five to seven days. What would you do?", options: ["Send it because the AI wrote it", "Delete the whole reply and send nothing", "Change the timing to match policy before sending", "Ask the customer which timing they prefer"], answer: 2, why: "Every fact and promise must match policy before you send." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Writing ticket notes and protecting customer data",
          minutes: 5,
          goal: "Write clear ticket notes and handle customer information safely.",
          text: [
            "Every contact needs notes so the next agent knows what happened. Good ticket notes are short and factual: the issue, what you checked, what you did, what was promised and any follow-up date. Example: \"Customer reports missing package, order shows delivered 10/12. Checked carrier tracking. Sent replacement, arrives 10/16. Follow up if not received.\"",
            "Some tools let AI summarize the conversation into notes. Check the summary: AI may miss a promise or add something that did not happen.",
            "Protect data: only access accounts you are helping, never share customer details with anyone not allowed, never paste customer information into AI tools your company has not approved, and never write full card numbers or passwords in notes. Following privacy rules is part of the job."
          ],
          steps: ["Write the issue in one line.", "Write what you checked and what you did.", "Write anything promised and the follow-up date.", "Check any AI summary for missing or wrong details.", "Leave out full card numbers and passwords."],
          words: [["Ticket notes", "a short written record of a customer contact."], ["Data privacy", "keeping people's personal information safe and only using it as allowed."]],
          slides: [
            { title: "Good ticket notes", bullets: ["Issue, what you checked, what you did", "What was promised and follow-up date", "Short and factual"] },
            { title: "AI summaries", bullets: ["Save time", "Check for missing promises or errors"] },
            { title: "Protect customer data", bullets: ["Only accounts you are helping", "No customer data in unapproved AI tools", "No card numbers or passwords in notes"] }
          ],
          tryIt: "Write ticket notes for the two role-plays you did in Chapter 1. Then ask AI to summarize one role-play and compare its summary with your notes.",
          youCanNow: "write clear ticket notes and protect customer information.",
          quickCheck: [
            { objective: "O5", q: "Why do ticket notes matter?", options: ["They let the next agent pick up the case without asking the customer again", "They are only for the company's lawyers", "They replace talking to the customer", "They are a place to write your opinion of the customer"], answer: 0, why: "Clear notes let anyone continue the case without making the customer repeat everything." },
            { objective: "O5", q: "A customer reads you their card number by mistake. What would you write in the notes?", options: ["The full card number so it is saved", "The card number and their password", "Nothing at all about the call", "The issue and actions taken, with no card number"], answer: 3, why: "Notes record the issue and actions, never full card numbers or passwords." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Getting hired in customer service",
          minutes: 5,
          goal: "Show your customer service skills on a résumé and in an interview.",
          text: [
            "Employers want reliability, a calm attitude, clear communication, basic computer skills and a willingness to learn. Experience from retail, food service, caregiving, church, the military or work inside all counts.",
            "Write résumé bullets that show results: \"Helped 60+ customers a day in a busy kitchen line with a calm, friendly attitude.\" Ask AI to help turn your experience into customer service bullets, and keep them true.",
            "Expect role-play questions: \"A customer is yelling about a late order. What do you do?\" Answer with your steps (HEAT and the five-step contact). Prepare a STAR story about a time you calmed someone or solved a problem. Some employers give a typing or computer skills test, so practice typing with a free online typing test."
          ],
          steps: ["List experience where you helped people.", "Ask AI to turn it into true résumé bullets with numbers.", "Prepare a STAR story about calming someone or solving a problem.", "Practice a role-play answer with HEAT.", "Practice typing with a free online typing test."],
          words: [["Role-play question", "an interview question where you show how you would handle a situation."], ["Typing test", "a test of how fast and accurately you type."]],
          slides: [
            { title: "What employers want", bullets: ["Reliable and calm", "Clear communication", "Basic computer skills; willing to learn"] },
            { title: "Résumé bullets", bullets: ["Show results with numbers", "All helping experience counts", "Keep them true"] },
            { title: "Interview prep", bullets: ["Role-play answers with HEAT", "A STAR story about calming someone", "Practice typing"] }
          ],
          tryIt: "Final task: role-play three customer contacts with AI (simple question, upset customer, problem not solved on first try), write ticket notes for each, then write three résumé bullets and a STAR answer about calming an upset customer.",
          youCanNow: "handle customers with AI tools like a support agent and show those skills to get hired.",
          quickCheck: [
            { objective: "O6", q: "What does the R in a STAR answer stand for?", options: ["Reason", "Reply", "Rating", "Result"], answer: 3, why: "STAR is Situation, Task, Action and Result." },
            { objective: "O6", q: "You worked in a prison kitchen serving 200 people a day. How would you use it on a customer service résumé?", options: ["Leave it off because it does not count", "Write a bullet about serving 200 people a day quickly and politely", "Say only that you were busy", "Describe it as a manager job"], answer: 1, why: "Real experience serving people counts; describe it honestly with a number." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: AI tools and getting hired",
        questions: [
          { objective: "O4", q: "An AI-suggested reply offers a refund your policy does not allow. What do you do?", options: ["Send it anyway", "Ask the customer to decide", "Delete the ticket", "Do not send it; follow policy"], answer: 3, why: "Agents follow policy, not AI guesses." },
          { objective: "O5", q: "Good ticket notes include:", options: ["The issue, what you did, what was promised and follow-up", "The customer's full card number", "Your opinion of the customer", "Nothing"], answer: 0, why: "Notes help the next agent." },
          { objective: "O5", q: "An AI summary leaves out a promise you made. You should:", options: ["Leave it out", "Delete all notes", "Add the promise to the notes", "Blame the AI later"], answer: 2, why: "Check and correct AI summaries." },
          { objective: "O5", q: "Which should never be written in ticket notes?", options: ["The order date", "The follow-up date", "What you checked", "A customer's full password"], answer: 3, why: "Passwords must never be recorded." },
          { objective: "O6", q: "In an interview you are asked how you would handle a yelling customer. Best answer:", options: ["\"I'd yell back.\"", "\"I'd hang up right away.\"", "Walk through HEAT and the steps you would take", "\"I don't know.\""], answer: 2, why: "Showing your steps proves the skill." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: AI for Customer Service Careers",
    questions: [
      { objective: "O1", q: "Which is a customer service job title?", options: ["Forklift operator", "Support agent", "Welder", "Pilot"], answer: 1, why: "Support agents help customers." },
      { objective: "O1", q: "In many companies today, simple questions are often answered by:", options: ["Chatbots", "Mail only", "Nobody", "The CEO"], answer: 0, why: "Chatbots handle simple, common questions." },
      { objective: "O1", q: "A ticket is:", options: ["A movie pass", "A parking fine", "A record of one customer issue and what was done", "A paycheck"], answer: 2, why: "Tickets track each issue." },
      { objective: "O4", q: "Who makes the final decision on what to tell a customer?", options: ["You, following policy", "The AI", "The customer", "A random coworker"], answer: 0, why: "AI suggests; agents decide." },
      { objective: "O2", q: "The first step of a customer contact is:", options: ["Close", "Solve", "Transfer", "Greet with your name and offer help"], answer: 3, why: "A warm greeting starts it well." },
      { objective: "O2", q: "\"So your order shows delivered but didn't arrive\" is an example of:", options: ["Closing", "Confirming the problem", "Escalating", "Verifying identity"], answer: 1, why: "Repeating the problem back confirms it." },
      { objective: "O2", q: "Before sharing account details, you should:", options: ["Share right away", "Verify identity using the company's process", "Ask for their full password", "Ask a coworker to guess"], answer: 1, why: "Verification protects the account." },
      { objective: "O2", q: "How should you close a contact?", options: ["Hang up suddenly", "Say nothing", "Ask for a tip", "Check it is solved, ask if anything else, thank them"], answer: 3, why: "A good close leaves the customer satisfied." },
      { objective: "O3", q: "Upset customers are usually upset at:", options: ["The situation, not you", "You personally", "The weather", "Nothing"], answer: 0, why: "Remembering this helps you stay calm." },
      { objective: "O3", q: "HEAT stands for:", options: ["Help, End, Ask, Transfer", "Hurry, Explain, Argue, Talk", "Hear, Empathize, Apologize, Take action", "Hold, Email, Answer, Thank"], answer: 2, why: "Those are the four HEAT steps." },
      { objective: "O3", q: "A customer becomes abusive and threatening. You should:", options: ["Threaten them back", "Share their address", "Keep taking abuse forever", "Follow company policy, which may mean a warning, ending the contact or a supervisor"], answer: 3, why: "Policies protect agents and customers." },
      { objective: "O3", q: "To escalate means to:", options: ["Ride an escalator", "Raise your voice", "Pass a case to a supervisor or specialist", "Close the case"], answer: 2, why: "Escalation sends hard cases up." },
      { objective: "O4", q: "AI-suggested replies can be:", options: ["Always perfect", "Wrong, out of date or not fit the customer", "Illegal to read", "Only in other languages"], answer: 1, why: "Always check them." },
      { objective: "O4", q: "Before sending an AI-suggested reply, check facts against:", options: ["The knowledge base or policy", "Social media", "Your memory only", "A competitor's site"], answer: 0, why: "Official sources keep answers correct." },
      { objective: "O5", q: "Which should never go into an AI tool your company has not approved?", options: ["A made-up practice message", "A grammar question", "Customer information", "A general greeting"], answer: 2, why: "Customer data must be protected." },
      { objective: "O5", q: "Data privacy means:", options: ["Keeping personal information safe and using it only as allowed", "Sharing data with friends", "Deleting all data", "Posting data online"], answer: 0, why: "It is a core job duty." },
      { objective: "O6", q: "Which résumé bullet is strongest for customer service?", options: ["\"Did stuff\"", "\"Worked sometimes\"", "\"Good person\"", "\"Helped 60+ customers a day with a calm, friendly attitude\""], answer: 3, why: "It shows numbers and the skill." },
      { objective: "O6", q: "Experience from which place can count toward customer service?", options: ["Only call centers", "Food service, caregiving, church or work inside", "Only college", "None"], answer: 1, why: "Helping people anywhere builds the skill." },
      { objective: "O6", q: "A STAR story about calming someone shows:", options: ["Your salary history", "Situation, Task, Action and Result", "Your favorite movies", "Nothing"], answer: 1, why: "STAR proves the skill with an example." },
      { objective: "O6", q: "Some employers test which skill before hiring?", options: ["Juggling", "Swimming", "Singing", "Typing speed and accuracy"], answer: 3, why: "Agents type a lot; practice with a free typing test." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Pre-Test: What Do You Already Know?",
    from: [
      1,
      4,
      7,
      9,
      11,
      13,
      14,
      16,
      18
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      {
        name: "Contact flow",
        objective: "O2",
        notYet: "Skipped steps, such as solving before listening or ending without a close.",
        meets: "Used greet, listen, confirm, solve and close in all three contacts.",
        exceeds: "Also verified identity where needed and set a clear next step on the unsolved problem."
      },
      {
        name: "Calming the upset customer",
        objective: "O3",
        notYet: "Argued, blamed or said \"calm down\".",
        meets: "Used Hear, Empathize, Apologize and Take action, and the customer calmed down.",
        exceeds: "Also knew when to escalate and explained the next step clearly."
      },
      {
        name: "AI checked",
        objective: "O4",
        notYet: "Sent an AI suggestion that did not match policy.",
        meets: "Checked every AI suggestion against the knowledge base or policy before using it.",
        exceeds: "Can point to each change made and say why."
      },
      {
        name: "Ticket notes",
        objective: "O5",
        notYet: "Notes are missing the issue, actions, promise or follow-up, or include private data.",
        meets: "Each ticket has the issue, what was done, what was promised and the follow-up, with no private data.",
        exceeds: "Notes are short enough that another agent could continue without asking anything."
      },
      {
        name: "Ready to get hired",
        objective: "O6",
        notYet: "Bullets are vague, or the STAR answer is missing a part.",
        meets: "Three clear résumé bullets and a STAR answer with all four parts.",
        exceeds: "Bullets include numbers, and the STAR answer ends with a real result."
      }
    ]
  },
  evaluation: {
    results: [
      "Learners who apply for a customer service job within 30 days (follow-up survey)",
      "Learners who get a customer service interview or job offer within 90 days",
      "Learners who pass the final task with the rubric",
      "Learners who start another Koach Learn career course within 30 days"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A phone or computer with internet",
      "A free AI assistant such as ChatGPT, Microsoft Copilot or Google Gemini to play the customer",
      "Three real customer service job posts from a job site",
      "Paper and pen for ticket notes and résumé bullets",
      "About 60 minutes in total: lessons, role-plays, checks and the final task"
    ],
    facilitatorNotes: [
      "Run role-plays in pairs: one learner plays the customer, one the agent, then switch; AI can play the customer for learners working alone.",
      "Use made-up customers and accounts only; never practice with real card numbers or passwords.",
      "Score the final task with the rubric and give feedback on one Not yet row at a time.",
      "Help learners who were inside find honest ways to describe work experience from food service, caregiving or jobs inside.",
      "Invite a local employer or call center recruiter to watch the final role-plays if possible."
    ]
  }
};
