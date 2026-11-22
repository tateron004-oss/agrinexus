"use strict";

// Koach Learn course: shared -> "Customer Service Excellence" (new career skills course the owner asked for on 28 October 2026). Listed for Re-Entry, Small Business, Youth,
// Workforce Development and Undeserved Community, so it uses mixed job examples: retail, restaurants, call centres and offices, from a first job to running your own shop.
// Two chapters of three micro-lessons; a knowledge check closes each chapter; a 20-question quiz closes the course. See scripts/koachlearn-export.js for how it is built.
//
// lesson: { title, minutes, goal, text: [paragraph], steps: [step] (optional), words: [[term, means]], slides: [{ title, bullets }], tryIt, youCanNow }
// question: { q, options: [4], answer: index of the right option, why }

module.exports = {
  id: "customer-service-excellence",
  category: "Re-Entry",
  name: "Customer Service Excellence",
  skills: "Greeting customers, Listening to find the real need, Solving problems, Calming upset customers with LAST, Serving by phone, chat and email, Following up",
  outcome: "serve a customer from start to finish in person, by phone, chat or email: greet them warmly, find out what they need, solve the problem or pass it to the right person, calm an upset customer with the LAST method, and follow up so they come back.",
  about: [
    "Almost every job has customers: shoppers in a store, diners in a restaurant, callers to a call centre, visitors to an office front desk, clients of a small business. Great customer service is one of the most wanted job skills, and it helps you get hired, keep a job and move up.",
    "This course is for first-time workers, young people, people returning to work after prison, and small business owners who serve their own customers. The examples come from retail, restaurants, call centres and offices.",
    "You will practise greeting, listening, solving problems, calming upset customers with the LAST method (Listen, Apologize, Solve, Thank), serving by phone, chat and email, and following up. Each lesson takes about five minutes and ends with a practice. There is a knowledge check after each chapter and a 20-question quiz at the end."
  ],
  finalTask: "Role-play an upset customer with a friend (for example a wrong food order, a late delivery or a billing mistake). Greet them, use LAST (Listen, Apologize, Solve, Thank), agree a fix, and then write the short follow-up email or message you would send the next day.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "First-time workers, young people, people returning to work after prison and small business owners who serve their own customers in stores, restaurants, call centres and offices.",
    startingPoint: "Talk with people every day and have been customers themselves. Many have not been trained to greet, find a customer's real need, own a problem, calm an upset customer or write a service email.",
    gap: "Great customer service is one of the most wanted job skills and helps people get hired, keep a job and move up, and helps small businesses keep customers. Learners need a simple, repeatable way to serve customers in person, by phone, chat and email, and to follow up.",
    constraints: [
      "Reading level: plain words and short sentences",
      "Practice is by role-play with a friend or family member",
      "Safety: threats are handled by a manager or security, never alone",
      "Privacy: no real card numbers or customer details in practice or AI tools",
      "Time: about five-minute lessons with short practices"
    ],
    prerequisites: "None."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "When a customer arrives or calls", action: "greet them warmly within seconds, in person or on the phone", standard: "with your name or the business name and an offer to help" },
    { id: "O2", condition: "Given a vague customer request", action: "ask open and closed questions and repeat back the customer's real need", standard: "until the customer confirms you have it right" },
    { id: "O3", condition: "Given a customer problem you did not cause", action: "take ownership and offer a clear solution, choices or the right person to help", standard: "with a next step and a time you will keep" },
    { id: "O4", condition: "With an upset customer", action: "calm the customer using LAST: Listen, Apologize, Solve, Thank", standard: "using all four steps and getting help if there are threats" },
    { id: "O5", condition: "By phone, chat or email", action: "write or give a clear, friendly reply with the answer first and the next step", standard: "with every fact checked and no private details shared" },
    { id: "O6", condition: "After a problem is fixed", action: "write a follow-up message that checks the fix and invites the customer back", standard: "sent when you promised" }
  ],
  chapters: [
    {
      name: "Chapter 1: The basics of great service",
      lessons: [
        {
          objectives: ["O1"],
          title: "Greeting customers and first impressions",
          minutes: 4,
          goal: "Greet a customer warmly within seconds, in person or on the phone.",
          text: [
            "Customers decide how they feel about a business in the first few seconds. A warm greeting tells them they matter. In person, greet people quickly, even if you are busy: make eye contact, smile and say hello. If you are with someone else, a nod and \"I'll be right with you\" stops the next person feeling ignored.",
            "Use a simple, friendly opener: \"Hi, welcome in! How can I help today?\" In a restaurant: \"Good evening, welcome! Table for how many?\" At an office front desk: \"Good morning, who are you here to see?\" On the phone, say the business name and your name: \"Thanks for calling Main Street Pharmacy, this is Dana. How can I help?\"",
            "Look ready: phone away, standing or sitting up, and a clean, tidy space. Use the customer's name if they give it. Small things add up to a great first impression."
          ],
          steps: ["Notice the customer quickly.", "Make eye contact and smile.", "Say a friendly greeting and offer help.", "Busy? Nod and say \"I'll be right with you.\"", "On the phone: business name, your name, offer help."],
          words: [["First impression", "how someone feels about you or a business in the first few seconds."], ["Greeting", "the first friendly words you say to a customer."]],
          slides: [
            { title: "The first seconds matter", bullets: ["Customers decide quickly how they feel", "A warm greeting says they matter"] },
            { title: "In person", bullets: ["Eye contact and a smile", "\"Hi, welcome in! How can I help today?\"", "Busy? \"I'll be right with you.\""] },
            { title: "On the phone", bullets: ["Business name and your name", "\"Thanks for calling Main Street Pharmacy, this is Dana.\"", "\"How can I help?\""] },
            { title: "Look ready", bullets: ["Phone away", "Tidy space", "Use the customer's name"] }
          ],
          tryIt: "Write three greetings: one for a store or restaurant, one for an office front desk and one for answering the phone at a business. Say each one out loud with a smile until it sounds natural.",
          youCanNow: "greet customers warmly in person and on the phone.",
          quickCheck: [
            { objective: "O1", q: "Why does a warm greeting matter?", options: ["Customers judge the business in the first few seconds", "It makes the line move slower", "It is only needed for regular customers", "It replaces solving the problem"], answer: 0, why: "First impressions shape how customers feel about the whole visit." },
            { objective: "O1", q: "The phone rings while you are tidying a shelf. What would you say when you answer?", options: ["\"Yeah?\"", "\"Hold on.\"", "\"Thanks for calling, this is Sam. How can I help?\"", "Nothing until they speak"], answer: 2, why: "A good greeting names the business or you and offers help." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Listening to find the real need",
          minutes: 5,
          goal: "Ask questions and repeat back to understand what a customer really needs.",
          text: [
            "Customers do not always say exactly what they need. A shopper asks for \"a phone charger\" but needs one that fits an older phone. A caller says \"my bill is wrong\" but really wants to know why it went up. Listening carefully saves time and avoids mistakes.",
            "Let the customer finish without cutting in. Then ask open questions: \"What will you be using it for?\" \"When did you first notice the problem?\" Ask a closed question to confirm a detail: \"Is that the order from Tuesday?\"",
            "Then repeat back: \"So you need a charger for an iPhone 8, and you'd like it today. Is that right?\" Repeating back shows you listened and catches mistakes before they happen. In a restaurant, reading the order back prevents the wrong meal reaching the table."
          ],
          steps: ["Let the customer finish.", "Ask open questions to understand the need.", "Ask closed questions to confirm details.", "Repeat back what you heard.", "Ask: \"Is that right?\""],
          words: [["Open question", "a question that needs more than a yes or no answer."], ["Closed question", "a question answered with yes, no or a short fact."], ["Repeat back", "saying the customer's request back to check you understood."]],
          slides: [
            { title: "Find the real need", bullets: ["\"A charger\" may mean one for an older phone", "\"My bill is wrong\" may mean \"why did it go up?\""] },
            { title: "Ask good questions", bullets: ["Open: \"What will you be using it for?\"", "Closed: \"Is that the order from Tuesday?\""] },
            { title: "Repeat it back", bullets: ["\"So you need... Is that right?\"", "Restaurants: read the order back", "Catches mistakes early"] }
          ],
          tryIt: "Ask a friend or family member to pretend to be a customer with a vague request (\"I need something for my kitchen\"). Use two open questions and one closed question, then repeat back their real need.",
          youCanNow: "use questions and repeating back to find out what a customer really needs.",
          quickCheck: [
            { objective: "O2", q: "What is a closed question?", options: ["A question that invites a long story", "A question with a short answer, like yes, no or a date", "A question you ask after closing time", "A question the customer cannot answer"], answer: 1, why: "Closed questions confirm details quickly." },
            { objective: "O2", q: "A customer says, \"I need a gift for my dad.\" What would you ask first?", options: ["\"How much money do you have?\"", "\"Do you want the most expensive one?\"", "\"Can you come back later?\"", "\"What does your dad enjoy doing?\""], answer: 3, why: "An open question helps you find the real need." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Solving the problem",
          minutes: 5,
          goal: "Take ownership of a customer's problem and offer a clear solution or next step.",
          text: [
            "Customers remember how you handled their problem more than the problem itself. Own it: say \"Let me help you with that,\" even if someone else caused it. Never say \"That's not my department\" and walk away.",
            "Know what you can do. Learn your workplace's rules (policies) for returns, refunds, swaps and discounts, and who to call when something is above your level. Offer choices when you can: \"I can replace it today, or refund it to your card. Which would you prefer?\" If you need to pass the customer to someone else, explain why, introduce them, and tell the new person the details so the customer does not have to repeat everything.",
            "Never promise what you cannot deliver. \"I'll find out and call you by 3 pm\" is better than \"It'll be fine\" when you are not sure. Then keep your promise."
          ],
          steps: ["Own it: \"Let me help you with that.\"", "Check what your policy allows.", "Offer one or two clear options.", "If it is above your level, pass it on with all the details.", "Promise only what you can deliver, with a time."],
          words: [["Policy", "the business's rules, such as for returns or refunds."], ["Escalate", "pass a problem to a manager or someone who can do more."], ["Ownership", "treating the customer's problem as yours to solve."]],
          slides: [
            { title: "Own it", bullets: ["\"Let me help you with that.\"", "Never \"That's not my department\""] },
            { title: "Know your options", bullets: ["Learn the rules for returns, refunds, swaps", "Offer choices: \"Replace today or refund?\""] },
            { title: "Passing it on", bullets: ["Explain why and introduce the next person", "Give them the details", "The customer shouldn't repeat everything"] },
            { title: "Promises", bullets: ["Only promise what you can deliver", "\"I'll call you by 3 pm\" and do it"] }
          ],
          tryIt: "Pick a common problem in a job you have or want (a wrong size, a cold meal, a missed appointment, a billing question). Write what you would say to own it, two options you could offer, and who you would pass it to if needed.",
          youCanNow: "take ownership of a customer's problem and offer clear options or a next step.",
          quickCheck: [
            { objective: "O3", q: "What does taking ownership of a problem mean?", options: ["Blaming another department", "Saying it is not your job", "Treating the problem as yours to help solve", "Paying for the problem yourself"], answer: 2, why: "Ownership means you help the customer even if you did not cause the problem." },
            { objective: "O3", q: "A customer needs an answer you do not know. What would you say?", options: ["\"I'll find out and call you by 3 pm.\"", "\"I don't know.\"", "\"Look it up online.\"", "\"Someone might call you sometime.\""], answer: 0, why: "A clear promise with a time builds trust." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: The basics of great service",
        questions: [
          { objective: "O1", q: "You are helping one customer and another walks up. What do you do?", options: ["Ignore them until you finish", "Nod and say \"I'll be right with you\"", "Tell them to come back later", "Leave the first customer"], answer: 1, why: "A quick nod and word stops the next customer feeling ignored." },
          { objective: "O1", q: "Which is a good phone greeting?", options: ["\"Yeah?\"", "\"What do you want?\"", "\"Hello?\" and wait", "\"Thanks for calling Main Street Pharmacy, this is Dana. How can I help?\""], answer: 3, why: "It gives the business name, your name and offers help." },
          { objective: "O2", q: "Why repeat back a restaurant order?", options: ["To catch mistakes before the food is made", "To slow the customer down", "Because it is fun", "To show off your memory"], answer: 0, why: "Repeating back catches mistakes early." },
          { objective: "O2", q: "Which is an open question?", options: ["\"Is it the blue one?\"", "\"Did you buy it here?\"", "\"What will you be using it for?\"", "\"Is that all?\""], answer: 2, why: "It needs more than yes or no." },
          { objective: "O3", q: "A customer's problem is not caused by you. What should you say?", options: ["\"That's not my department.\"", "\"Let me help you with that.\"", "\"Not my fault.\"", "Nothing"], answer: 1, why: "Owning the problem builds trust." }
        ]
      }
    },
    {
      name: "Chapter 2: Hard moments and every channel",
      lessons: [
        {
          objectives: ["O4"],
          title: "Upset customers and the LAST method",
          minutes: 6,
          goal: "Calm an upset customer using LAST: Listen, Apologize, Solve, Thank.",
          text: [
            "Upset customers are usually upset at the situation, not at you. Staying calm is your job and your power. The LAST method gives you four simple steps.",
            "Listen: let them speak without cutting in; nod and reflect back: \"Your order came 40 minutes late and the food was cold.\" Apologize: say sorry for how it affected them, sincerely: \"I'm really sorry, that's not the experience you should have had.\" You can apologize without blaming anyone. Solve: offer a fix within your policy, or bring in a manager: \"I can remake it now, or take it off your bill.\" Thank: thank them for telling you: \"Thank you for letting us know. It helps us fix it.\"",
            "Keep your voice low and slow, don't argue or take it personally, and use their name. If a customer becomes threatening or abusive, you do not have to take it: get a manager or security and follow your workplace's safety rules."
          ],
          steps: ["Listen: let them finish, then reflect back.", "Apologize sincerely for how it affected them.", "Solve: offer a fix or bring in a manager.", "Thank them for telling you.", "Threats or abuse: get a manager or security."],
          words: [["LAST", "Listen, Apologize, Solve, Thank: four steps for an upset customer."], ["Sincere", "honest and meant from the heart."]],
          slides: [
            { title: "It's the situation, not you", bullets: ["Stay calm: it is your job and your power", "Use LAST"] },
            { title: "L and A", bullets: ["Listen: let them finish, reflect back", "Apologize: \"I'm really sorry, that's not OK.\""] },
            { title: "S and T", bullets: ["Solve: \"I can remake it or take it off the bill.\"", "Thank: \"Thanks for letting us know.\""] },
            { title: "Stay safe", bullets: ["Low, slow voice; don't argue", "Threats or abuse: get a manager or security"] }
          ],
          tryIt: "Write a LAST script for one of these: a cold meal, a package that never arrived, or an overcharge. Write one sentence for each letter, then say the whole script out loud.",
          youCanNow: "calm an upset customer with Listen, Apologize, Solve, Thank.",
          quickCheck: [
            { objective: "O4", q: "What does the S in LAST mean?", options: ["Smile", "Solve", "Stop", "Say sorry again"], answer: 1, why: "LAST is Listen, Apologize, Solve and Thank." },
            { objective: "O4", q: "A customer is upset that their package never arrived. What would you do first?", options: ["Offer a refund before they finish", "Tell them it is the delivery company's fault", "Transfer them right away", "Listen fully and repeat back what happened"], answer: 3, why: "LAST starts with listening so the customer feels heard." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Phone, chat and email service",
          minutes: 5,
          goal: "Give clear, friendly service by phone, chat and email.",
          text: [
            "Phone: customers cannot see your face, so your voice does the work. Smile while you talk; it really changes your tone. Speak clearly, and before putting someone on hold, ask: \"May I put you on a short hold while I check?\" and thank them when you come back. If you must transfer, tell them who they are going to and why.",
            "Chat: answer quickly, keep messages short, and use friendly words. Check before closing: \"Is there anything else I can help with?\" Email: use a clear subject line, greet them by name, answer the question in the first lines, give the next step and sign with your name. Read it once before you send it. An AI assistant can help you draft or polish a reply, but check every fact and never paste in the customer's private details.",
            "On every channel, protect privacy. Follow your company's steps to check who you are talking to, and never ask for a full card number or password by chat or email."
          ],
          steps: ["Phone: smile, speak clearly, ask before hold, thank them after.", "Transfers: say who and why.", "Chat: quick, short, friendly; ask \"Anything else?\"", "Email: clear subject, name, answer first, next step, your name.", "Protect privacy: follow ID checks, no card numbers or passwords by chat or email."],
          words: [["Hold", "pausing a call while you check something."], ["Transfer", "passing a call to another person or team."], ["Channel", "a way customers contact you: in person, phone, chat, email or social media."]],
          slides: [
            { title: "Phone", bullets: ["Smile: it changes your voice", "\"May I put you on a short hold?\"", "Transfers: tell them who and why"] },
            { title: "Chat", bullets: ["Answer quickly, keep it short", "Friendly words", "\"Anything else I can help with?\""] },
            { title: "Email", bullets: ["Clear subject and their name", "Answer first, then the next step", "Sign your name; read before sending"] },
            { title: "Every channel", bullets: ["AI can help draft; you check the facts", "Follow ID checks", "No card numbers or passwords by chat or email"] }
          ],
          tryIt: "A customer emails: \"I ordered a blue jacket and got a red one. What now?\" Write a short reply with a subject line, greeting, apology, solution, next step and your name.",
          youCanNow: "serve customers well by phone, chat and email while protecting their privacy.",
          quickCheck: [
            { objective: "O5", q: "What should come first in the body of a customer service email?", options: ["The answer to their question", "A long story about your company", "Your job title", "A list of rules"], answer: 0, why: "Customers want the answer first, then the next step." },
            { objective: "O5", q: "You use an AI assistant to draft a chat reply. What would you do before sending?", options: ["Send it right away", "Add the customer's card number", "Check every fact and remove private details", "Copy it to all customers"], answer: 2, why: "AI drafts must be checked and kept free of private details." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Following up and building loyalty",
          minutes: 5,
          goal: "Follow up after a problem and turn a customer into a returning one.",
          text: [
            "A problem fixed well can make a customer more loyal than if nothing had gone wrong. Following up is how you finish the job.",
            "If you promised a call or update, do it on time, even if the news is \"still working on it\". After a fix, check back when it makes sense: \"I wanted to make sure the new part arrived and works.\" Keep simple notes in your system or notebook: name, problem, what you did, and what is next, so anyone on the team can help.",
            "Small extras build loyalty: remembering a regular's usual order, thanking a long-time client, or telling a customer when the item they wanted is back in stock. If you run your own business, ask happy customers for a review, and treat complaints as free advice on what to fix."
          ],
          steps: ["Keep every promise of a call or update, on time.", "Check back after a fix.", "Write simple notes: name, problem, action, next step.", "Remember regulars and thank them.", "Use complaints to improve."],
          words: [["Follow-up", "contacting a customer again to check or update them."], ["Loyalty", "when customers keep coming back and recommend you."]],
          slides: [
            { title: "Follow-up finishes the job", bullets: ["A problem fixed well builds loyalty"] },
            { title: "Keep promises", bullets: ["Call or update on time", "Even if it's \"still working on it\"", "Check back after a fix"] },
            { title: "Take notes", bullets: ["Name, problem, action, next step", "Anyone on the team can help"] },
            { title: "Build loyalty", bullets: ["Remember regulars", "Thank long-time customers", "Complaints are free advice"] }
          ],
          tryIt: "Final task: role-play an upset customer with a friend using greeting and LAST, agree a fix, then write the follow-up message you would send the next day.",
          youCanNow: "follow up after a problem and build customer loyalty.",
          quickCheck: [
            { objective: "O6", q: "Why can a problem fixed well make a customer more loyal?", options: ["They get free things forever", "They see the business cares and keeps its promises", "They forget the problem happened", "They have no other choice"], answer: 1, why: "Handling a problem well shows the business can be trusted." },
            { objective: "O6", q: "You replaced a customer's wrong order yesterday. What would you do today?", options: ["Nothing; it is done", "Send a coupon with no message", "Ask them to post a review right away", "Send a short message checking everything is right now"], answer: 3, why: "A follow-up checks the fix and shows you care." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Hard moments and every channel",
        questions: [
          { objective: "O4", q: "What does LAST stand for?", options: ["Look, Ask, Sell, Talk", "Leave, Argue, Stop, Try", "Listen, Apologize, Solve, Thank", "Learn, Answer, Smile, Tell"], answer: 2, why: "LAST is Listen, Apologize, Solve, Thank." },
          { objective: "O4", q: "An upset diner says the food is cold. What is the first step?", options: ["Explain the kitchen was busy", "Listen and reflect back what they said", "Offer a coupon before they finish", "Walk away"], answer: 1, why: "Listening comes first in LAST." },
          { objective: "O5", q: "Before putting a caller on hold, you should:", options: ["Just press hold", "Hang up and call back", "Transfer them anywhere", "Ask \"May I put you on a short hold while I check?\""], answer: 3, why: "Asking first is polite and keeps trust." },
          { objective: "O5", q: "A chat customer offers their full card number. What do you do?", options: ["Tell them not to share it by chat and follow your company's secure steps", "Copy it into your notes", "Paste it into an AI tool", "Read it back to them"], answer: 0, why: "Card numbers should never be shared by chat or email." },
          { objective: "O6", q: "You promised a customer an update by Friday but have no news yet. What do you do?", options: ["Wait until you have news", "Contact them Friday with a \"still working on it\" update", "Ignore it", "Ask a coworker to pretend it is fixed"], answer: 1, why: "Keeping the promise on time builds trust even without news." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Customer Service Excellence",
    questions: [
      { objective: "O1", q: "Why does the greeting matter so much?", options: ["Customers judge the business in the first seconds", "It is the law", "It takes the longest", "It replaces solving problems"], answer: 0, why: "First impressions shape how customers feel." },
      { objective: "O1", q: "Which is a good greeting at an office front desk?", options: ["Keep typing and say nothing", "\"Good morning, who are you here to see?\"", "\"What?\"", "\"We're busy.\""], answer: 1, why: "It is friendly and moves to their need." },
      { objective: "O1", q: "Which shows you are ready to serve?", options: ["Scrolling your phone", "Eating at the counter", "Phone away and a tidy space", "Leaning on the wall"], answer: 2, why: "Looking ready makes a good first impression." },
      { objective: "O2", q: "A shopper asks for \"a charger\". What is the best next step?", options: ["Hand them any charger", "Say you don't have one", "Point at the aisle", "Ask what phone it is for"], answer: 3, why: "A question finds the real need." },
      { objective: "O2", q: "\"So you need two large pizzas delivered by 6. Is that right?\" is an example of:", options: ["Repeating back", "Upselling", "Escalating", "A closed greeting"], answer: 0, why: "It confirms the order before acting." },
      { objective: "O2", q: "A closed question is useful to:", options: ["Start a long story", "Confirm a detail, like a date", "Calm an angry customer", "Greet someone"], answer: 1, why: "Closed questions confirm facts quickly." },
      { objective: "O3", q: "Which phrase shows ownership?", options: ["\"That's not my job.\"", "\"Call someone else.\"", "\"Let me help you with that.\"", "\"Try the website.\""], answer: 2, why: "Owning the problem reassures the customer." },
      { objective: "O3", q: "Why offer choices like \"replace it or refund it\"?", options: ["To confuse them", "It gives the customer some control", "To delay the fix", "It is always required"], answer: 1, why: "Choices help customers feel respected." },
      { objective: "O3", q: "When you pass a customer to a manager, you should:", options: ["Make them explain it all again", "Say nothing", "Leave without explaining", "Explain why, introduce them and share the details"], answer: 3, why: "A warm handoff saves the customer from repeating." },
      { objective: "O3", q: "Which promise is best when you are not sure of an answer?", options: ["\"I'll find out and call you by 3 pm.\"", "\"It'll definitely be fine.\"", "\"It's free, don't worry.\"", "\"Nobody knows.\""], answer: 0, why: "Promise only what you can deliver, with a time." },
      { objective: "O4", q: "In LAST, the A means:", options: ["Argue", "Apologize", "Ask for ID", "Agree with everything"], answer: 1, why: "A sincere apology helps calm the customer." },
      { objective: "O4", q: "Can you apologize without blaming anyone?", options: ["No, you must name who caused it", "Only managers can apologize", "Yes: \"I'm sorry that happened to you.\"", "Apologizing is never allowed"], answer: 2, why: "A sincere apology is about the customer's experience." },
      { objective: "O4", q: "An upset customer starts making threats. What should you do?", options: ["Argue back", "Ignore it and keep serving", "Threaten them", "Get a manager or security and follow safety rules"], answer: 3, why: "Your safety comes first." },
      { objective: "O4", q: "In LAST, the T means:", options: ["Thank them for telling you", "Tell them they are wrong", "Transfer the call", "Take a break"], answer: 0, why: "Thanking them ends on a positive note." },
      { objective: "O5", q: "Why smile on the phone?", options: ["The customer can see you", "It changes the tone of your voice", "It is a company rule everywhere", "It makes calls shorter"], answer: 1, why: "A smile makes your voice sound warmer." },
      { objective: "O5", q: "Which belongs in a good customer email?", options: ["No subject line", "A long story before the answer", "A clear subject, their name, the answer first and the next step", "All capital letters"], answer: 2, why: "Clear structure makes emails easy to act on." },
      { objective: "O5", q: "Using an AI assistant to draft a reply, you should:", options: ["Paste in the customer's card number", "Send it without reading", "Let it promise refunds", "Check every fact and leave out private details"], answer: 3, why: "You stay responsible for facts and privacy." },
      { objective: "O6", q: "Why keep notes on each customer problem?", options: ["So anyone on the team can help next time", "To gossip", "To slow things down", "Notes are not useful"], answer: 0, why: "Notes keep service consistent." },
      { objective: "O6", q: "A problem fixed well can make a customer:", options: ["Never return", "More loyal than before", "Angrier", "Forget your business"], answer: 1, why: "Good recovery builds trust and loyalty." },
      { objective: "O6", q: "For a small business owner, complaints are best seen as:", options: ["Attacks to ignore", "Reasons to argue", "Free advice on what to fix", "Something to delete"], answer: 2, why: "Complaints show what to improve." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Pre-Test: What Do You Already Know?",
    from: [
      1,
      3,
      5,
      7,
      10,
      12,
      15,
      18
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      {
        name: "Greeting",
        objective: "O1",
        notYet: "No greeting, or a cold or rushed one.",
        meets: "A warm greeting within seconds with a name and an offer to help.",
        exceeds: "Greeting fits the setting and sounds natural."
      },
      {
        name: "Listen and Apologize",
        objective: "O4",
        notYet: "Interrupted, argued or blamed.",
        meets: "Listened fully, repeated back the problem and apologized without blaming.",
        exceeds: "Named the customer's feeling and stayed calm the whole time."
      },
      {
        name: "Solve",
        objective: "O3",
        notYet: "No clear fix or next step.",
        meets: "Owned the problem and agreed a clear fix or next step.",
        exceeds: "Offered choices and gave a time for any promise."
      },
      {
        name: "Thank",
        objective: "O4",
        notYet: "Ended without thanking the customer.",
        meets: "Thanked the customer for raising the problem.",
        exceeds: "Closed by checking if anything else was needed."
      },
      {
        name: "Follow-up message",
        objective: "O6",
        notYet: "No follow-up, or it has no clear purpose.",
        meets: "A short next-day message that checks the fix and invites them back.",
        exceeds: "Personal, specific and free of errors."
      }
    ]
  },
  evaluation: {
    results: [
      "Learners who get or keep a customer-facing job within 90 days (follow-up survey)",
      "Small business owners who report fewer complaints or more returning customers",
      "Learners who report using LAST with a real customer within 30 days",
      "Learners who start another Koach Learn career course within 30 days"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A partner for role-play (friend, family member or classmate)",
      "Paper and pen or a phone for scripts and the follow-up message",
      "About 60 minutes in total"
    ],
    facilitatorNotes: [
      "Run role-plays in pairs and switch roles so everyone plays the upset customer once.",
      "Use examples from local jobs learners want: stores, restaurants, call centres and front desks.",
      "Teach that threats are handled by a manager or security; learners never handle them alone.",
      "Use made-up orders and accounts only; no real card numbers in practice.",
      "Score the final role-play with the rubric and give feedback on one Not yet row at a time."
    ]
  }
};
