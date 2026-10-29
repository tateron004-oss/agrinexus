"use strict";

// Koach Learn course: Small Business -> "AI for Customer Service and Communication". Written as a skill-building course: by the end the student can DO the skill in `outcome`.
// Two chapters of three micro-lessons; a knowledge check closes each chapter; a 20-question quiz closes the course. See scripts/koachlearn-export.js for how it is built.
// The FTC review rule was checked on ftc.gov on 27 October 2026.
//
// lesson: { title, minutes, goal, text: [paragraph], steps: [step] (optional), words: [[term, means]], slides: [{ title, bullets }], sources, tryIt, youCanNow }
// question: { q, options: [4], answer: index of the right option, why }

const FTC_REVIEWS = { name: "FTC: Consumer Reviews and Testimonials Rule, Questions and Answers", url: "https://www.ftc.gov/business-guidance/resources/consumer-reviews-testimonials-rule-questions-answers" };
const FTC_REVIEWS_PR = { name: "FTC: Final Rule Banning Fake Reviews and Testimonials (August 2024)", url: "https://www.ftc.gov/news-events/news/press-releases/2024/08/federal-trade-commission-announces-final-rule-banning-fake-reviews-testimonials" };

module.exports = {
  id: "smallbiz-ai-customer-service",
  category: "Small Business",
  name: "AI for Customer Service and Communication",
  skills: "Writing a customer FAQ, Building reply templates, Setting a brand voice, Answering reviews, Handling upset customers, Keeping customer data private",
  outcome: "build a customer service kit for your business with AI help: an FAQ of your ten most common questions, five reply templates in your brand voice, and a calm reply to an upset customer and to a public review, all checked by you before you use them.",
  about: [
    "This course is for small business owners and staff who answer customers by phone, text, email, social media messages and online reviews: restaurants, salons, shops, cleaners, repair services and food trucks.",
    "You will use a free AI assistant to answer the same questions faster, keep your replies friendly and consistent, respond to reviews the right way, and calm down upset customers without giving away the store. You stay in charge of every reply.",
    "Each lesson takes about five minutes with a \"Try it now\" task. There is a knowledge check after each chapter and a 20-question quiz at the end. Your tasks add up to a customer service kit you can use the next day."
  ],
  finalTask: "Build your customer service kit in one document: your brand voice (three words and a do/don't list), an FAQ with your ten most common questions and checked answers, five reply templates with placeholders, one reply to a real or sample upset customer, and one reply to a public review. Every fact is checked by you and no customer private data went into the AI tool.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Small business owners and staff who answer customers by phone, text, email, social media and online reviews: restaurants, salons, shops, cleaners, repair services and food trucks.",
    startingPoint: "Answer customer questions every day, often the same ones, and may reply to reviews. Little use of AI for replies, and no written FAQ, brand voice or templates.",
    gap: "Answering the same questions one by one takes time, replies can sound different from person to person, and a badly handled complaint or review can cost customers. Owners need a checked, consistent customer service kit made with AI help, while staying honest, following the FTC review rule and keeping customer data private.",
    constraints: [
      "Reading level: plain words and short sentences",
      "Devices: a smartphone or computer used between customers",
      "Time: about 5-minute lessons that fit into a busy workday",
      "Rules: the FTC review rule bans fake or paid-for positive reviews; injury claims go to a professional or insurer",
      "Privacy: no customer names, card details or contact information in AI tools"
    ],
    prerequisites: "\"Introduction to AI for Small Business\" is helpful but not required."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Given your most common customer questions", action: "write an FAQ with AI help", standard: "with ten questions and every answer checked against what you really do" },
    { id: "O2", condition: "Given how you want your business to sound", action: "describe your brand voice and have AI write in it", standard: "with three voice words and a do and don't list placed at the start of the chat" },
    { id: "O3", condition: "Using an AI assistant", action: "create five reusable reply templates with placeholders", standard: "in your brand voice, checked and saved where you can copy them quickly" },
    { id: "O4", condition: "Given a positive or negative online review", action: "write an honest, calm reply with AI help", standard: "with every statement true and no fake or paid-for reviews" },
    { id: "O5", condition: "Given an upset customer and your refund and redo limits", action: "write a reply using the LAST method", standard: "offering only a solution you would really give" },
    { id: "O6", condition: "Given your FAQ, templates and replies", action: "put together a customer service kit that keeps customer data private", standard: "in one document, with every fact checked and no real customer details" }
  ],
  chapters: [
    {
      name: "Chapter 1: Faster, friendlier everyday answers",
      lessons: [
        {
          objectives: ["O1"],
          title: "Finding your top customer questions and building an FAQ",
          minutes: 5,
          goal: "List your most common customer questions and turn them into a checked FAQ.",
          text: [
            "Most businesses answer the same ten questions over and over: hours, prices, parking, delivery, booking, returns, payment types, wait times, allergies or materials, and \"do you do...?\".",
            "Write them down first from memory, your texts and your messages. Then give an AI assistant your real answers in rough form and ask it to turn them into a clear FAQ: \"Here are my rough answers. Make a short FAQ for my nail salon website. Friendly, simple words.\"",
            "Check every answer against what you really do. An FAQ on your website or on a sign is a promise to customers."
          ],
          steps: ["List the ten questions you hear most.", "Write your real answer to each, roughly.", "Ask AI to turn them into a clear FAQ.", "Check every answer, then post it on your site, social page or counter."],
          words: [["FAQ", "frequently asked questions: a list of common questions and their answers."]],
          slides: [
            { title: "The same ten questions", bullets: ["Hours, prices, parking, delivery", "Booking, returns, payment types", "\"Do you do...?\""] },
            { title: "Build the FAQ", bullets: ["List the questions", "Write your real rough answers", "Ask AI to make them clear and friendly"] },
            { title: "Check before posting", bullets: ["An FAQ is a promise", "Every answer must match what you really do"] }
          ],
          tryIt: "Write your ten most common customer questions with a rough answer for each. Ask an AI assistant to make a short, friendly FAQ from them, then check every answer.",
          youCanNow: "build a checked FAQ from your real customer questions.",
          quickCheck: [
            { objective: "O1", q: "Why is an FAQ like a promise to customers?", options: ["Because customers will rely on what it says", "Because it is a legal contract", "Because AI wrote it", "Because it is posted only once"], answer: 0, why: "Customers act on your FAQ, so every answer must be true." },
            { objective: "O1", q: "AI's FAQ says you offer free parking, but you do not. What would you do?", options: ["Keep it to attract customers", "Fix the answer to match what you really do", "Add a small \"maybe\"", "Ask AI to remove all answers"], answer: 1, why: "FAQ answers come from your real policies, checked by you." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Setting your brand voice",
          minutes: 4,
          goal: "Describe how your business sounds and have AI write in that voice.",
          text: [
            "Your brand voice is how your business sounds. A family taqueria might be warm and playful; a tax preparer calm and professional; a barbershop relaxed and neighborly.",
            "Pick three words for your voice and write a short do and don't list: \"Do: use first names, say thank you, keep it short. Don't: use slang, use all caps, make promises about times.\"",
            "Give this to the AI at the top of a chat: \"Write in this voice for every reply.\" Now every answer sounds like the same business, no matter who on your team sends it."
          ],
          steps: ["Pick three words for how you want to sound.", "Write three dos and three don'ts.", "Paste them at the start of a chat.", "Ask for a sample reply and check it sounds right."],
          words: [["Brand voice", "the way a business sounds in its messages."], ["Consistent", "the same each time."]],
          slides: [
            { title: "How does your business sound?", bullets: ["Taqueria: warm, playful", "Tax preparer: calm, professional", "Barbershop: relaxed, neighborly"] },
            { title: "Write it down", bullets: ["Three voice words", "Three dos and three don'ts"] },
            { title: "Use it with AI", bullets: ["Paste it at the start of the chat", "Every reply sounds like your business"] }
          ],
          tryIt: "Write your three voice words and your dos and don'ts. Paste them into an AI assistant and ask for a reply to \"Are you open on Sunday?\" Does it sound like you?",
          youCanNow: "describe your brand voice and get AI replies that sound like your business.",
          quickCheck: [
            { objective: "O2", q: "What is a brand voice?", options: ["Your business phone number", "Your logo colors", "How your business sounds in messages", "A recorded greeting"], answer: 2, why: "Brand voice is the way your business sounds when it talks to customers." },
            { objective: "O2", q: "You want every AI reply to sound like your bakery. What would you do?", options: ["Hope it guesses", "Ask for a new tone each time", "Use all caps to sound excited", "Put your voice words and dos and don'ts at the start of the chat"], answer: 3, why: "Giving AI your voice at the start helps every reply match it." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Reply templates for messages, texts and email",
          minutes: 5,
          goal: "Make reusable reply templates with placeholders.",
          text: [
            "A reply template is a ready answer with blanks. You fill in the blanks each time, so you answer in seconds without retyping.",
            "Useful templates: booking confirmation, appointment reminder, order ready, running late, sorry we are out of an item, and thank you after a visit. Ask AI: \"Using my brand voice, write five short text templates for a mobile car-wash business. Use [customer name], [date] and [time] as blanks.\"",
            "Keep templates in your phone's notes or text shortcuts, or in your booking tool if it allows saved replies. Never paste real customer names, phone numbers or card details into the AI to make them; use the blanks."
          ],
          steps: ["Pick five situations you reply to often.", "Ask AI for a short template for each, with blanks in brackets.", "Check the wording and facts.", "Save them where you can copy them fast."],
          words: [["Reply template", "a saved answer with blanks you fill in each time."], ["Placeholder", "a blank like [customer name] that you fill in with real details later."]],
          slides: [
            { title: "Answer in seconds", bullets: ["A template is a ready reply with blanks", "Fill in [customer name], [date], [time]"] },
            { title: "Five useful templates", bullets: ["Booking confirmation and reminder", "Order ready; running late", "Sorry we are out; thank you"] },
            { title: "Keep them safe and handy", bullets: ["Phone notes, text shortcuts or saved replies", "Use blanks, not real customer details"] }
          ],
          tryIt: "Ask AI for five reply templates in your brand voice with [blanks]. Check them and save them where you can copy them quickly.",
          youCanNow: "make and save reply templates that let you answer customers fast and consistently.",
          quickCheck: [
            { objective: "O3", q: "What is a reply template?", options: ["A message you reuse with blanks to fill in", "A one-time reply", "A customer review", "A price list"], answer: 0, why: "A template is a ready reply with blanks you fill in each time." },
            { objective: "O3", q: "You want a template for \"your order is ready\". What would you give AI?", options: ["A real customer's name and phone number", "Your card number", "Blanks like [customer name] and [time]", "Nothing at all"], answer: 2, why: "Blanks keep private details out and make the template reusable." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Faster, friendlier everyday answers",
        questions: [
          { objective: "O1", q: "What does FAQ stand for?", options: ["Fast answer quote", "Frequently asked questions", "Free a question", "Final answer quiz"], answer: 1, why: "An FAQ lists common questions and answers." },
          { objective: "O1", q: "AI turned your rough answers into an FAQ. What next?", options: ["Post it without reading", "Add more promises", "Delete it", "Check every answer against what you really do"], answer: 3, why: "An FAQ is a promise to customers." },
          { objective: "O2", q: "What is a brand voice?", options: ["How your business sounds in messages", "The owner's singing voice", "Your phone number", "Your logo color"], answer: 0, why: "Brand voice is how you sound." },
          { objective: "O3", q: "Which is a good template blank?", options: ["Your password", "The customer's card number", "[customer name]", "A real home address"], answer: 2, why: "Placeholders keep private data out of AI tools." },
          { objective: "O3", q: "Why use reply templates?", options: ["To charge more", "To avoid customers", "To answer quickly and consistently", "To hide prices"], answer: 2, why: "Templates save time and keep replies the same quality." }
        ]
      }
    },
    {
      name: "Chapter 2: Reviews, hard conversations and trust",
      lessons: [
        {
          objectives: ["O4"],
          title: "Answering online reviews, good and bad",
          minutes: 5,
          goal: "Write honest replies to positive and negative reviews, and follow the FTC review rule.",
          text: [
            "Customers read how you answer reviews. Thank good reviews by name of the dish or service, briefly. For bad reviews, stay calm: thank them, say sorry for their experience, fix what you can, and invite them to contact you directly. Do not argue in public or share their private details.",
            "AI helps you write a calm reply when you are upset. Paste the review text (not the reviewer's private info) and ask: \"Write a short, polite reply. Apologize, mention we have retrained our staff on wait times, and invite them to call us.\" Only say what is true.",
            "Never write fake reviews, buy them, or use AI to make them. The Federal Trade Commission (FTC) has a rule, in effect since October 2024, banning fake reviews and testimonials, including AI-made ones, and paying for reviews only if they are positive. Read the FTC's questions and answers page to learn what is allowed."
          ],
          steps: ["Read the review twice and wait if you are angry.", "Ask AI for a short, polite draft.", "Make sure every statement is true.", "Invite unhappy customers to contact you directly.", "Never write, buy or fake reviews."],
          words: [["Review", "a customer's public rating and comment about your business."], ["FTC", "Federal Trade Commission: the US agency that protects consumers from unfair and deceptive business practices."], ["Testimonial", "a customer's statement praising a business, used in its marketing."]],
          slides: [
            { title: "Good reviews", bullets: ["Thank them, mention what they liked", "Keep it short and real"] },
            { title: "Bad reviews", bullets: ["Stay calm; wait if you are angry", "Thank, apologize, fix what you can", "Invite them to contact you directly"] },
            { title: "The FTC rule on fake reviews", bullets: ["Bans fake reviews, including AI-made ones", "Bans paying only for positive reviews", "In effect since October 2024: see ftc.gov"] }
          ],
          sources: [FTC_REVIEWS, FTC_REVIEWS_PR],
          tryIt: "Find one real review of your business (or write a sample bad review about a late order). Use AI to draft a calm reply, check every statement is true, and edit it into your voice.",
          youCanNow: "reply to good and bad reviews calmly and honestly, without breaking the FTC's fake review rule.",
          quickCheck: [
            { objective: "O4", q: "Which review practice does the FTC rule ban?", options: ["Replying to bad reviews", "Paying customers only if they leave positive reviews", "Thanking customers for reviews", "Asking all customers for honest reviews"], answer: 1, why: "Rewarding only positive reviews is banned under the FTC rule." },
            { objective: "O4", q: "A harsh review makes you angry. What would you do?", options: ["Reply right away in capital letters", "Post a fake good review to balance it", "Ask friends to argue with the reviewer", "Wait, reread it, then write a calm, true reply"], answer: 3, why: "Waiting helps you reply calmly and honestly." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Calming an upset customer",
          minutes: 5,
          goal: "Use a simple four-step method, with AI help, to answer an upset customer.",
          text: [
            "A simple method works for most complaints: Listen, Apologize, Solve, Thank (LAST). Listen to the whole complaint, apologize for the experience, offer a fair solution you can really give, and thank them for telling you.",
            "Decide your limits before you need them: when you give a refund, a redo, a discount or a free item. AI can draft the message, but you choose the solution. Do not let AI promise something you have not agreed to.",
            "If a customer threatens, harasses or mentions injury, safety or legal action, keep the reply short, do not admit fault in writing, and talk to a professional or your insurer."
          ],
          steps: ["Listen: read or hear the whole complaint.", "Apologize for the experience.", "Solve: offer a fair fix within your limits.", "Thank them for telling you.", "Ask AI to draft it, then check the promise is one you will keep."],
          words: [["LAST", "Listen, Apologize, Solve, Thank: a method for complaints."], ["Escalate", "pass a serious problem to the owner, a professional or an insurer."]],
          slides: [
            { title: "The LAST method", bullets: ["Listen", "Apologize", "Solve", "Thank"] },
            { title: "Set your limits first", bullets: ["When you refund, redo or discount", "You choose the fix, not the AI"] },
            { title: "When to escalate", bullets: ["Threats or harassment", "Injury, safety or legal claims", "Keep it short; call a professional or insurer"] }
          ],
          tryIt: "Write your refund and redo limits in three lines. Then use AI to draft a LAST reply to: \"My cake was the wrong flavor and the party is ruined.\" Check the solution is one you would really give.",
          youCanNow: "answer an upset customer with the LAST method and a fair, real solution.",
          quickCheck: [
            { objective: "O5", q: "What is the first step of the LAST method?", options: ["Solve", "Thank", "Listen", "Apologize"], answer: 2, why: "LAST starts with listening to the customer." },
            { objective: "O5", q: "AI's reply to an upset customer offers a full refund plus free service for a month, more than your limits allow. What would you do?", options: ["Change it to a fix within your limits", "Send it as it is", "Remove the apology", "Ignore the customer"], answer: 0, why: "You choose a fair fix within the limits you set, not the AI." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Privacy, honesty and your customer service kit",
          minutes: 5,
          goal: "Put your service tools together and keep customer data private.",
          text: [
            "Customers trust you with their names, phone numbers, addresses and sometimes card details. Keep those out of AI tools. Work with placeholders, and fill in the real details yourself in your phone or booking system.",
            "If you use a chatbot on your website or messages, tell customers they are talking to an automated helper and give them a way to reach a person. Review what it says regularly.",
            "Now put it all in one document: your brand voice, your FAQ, your templates, your LAST method with your limits, and your review reply. Share it with your staff so everyone answers the same way."
          ],
          steps: ["Check every template uses placeholders, not real data.", "If you use a chatbot, label it and offer a person.", "Collect voice, FAQ, templates, LAST limits and review replies in one document.", "Share it with your team."],
          words: [["Chatbot", "an automated program that answers messages."], ["Customer data", "information about your customers, such as names, phone numbers and orders."]],
          slides: [
            { title: "Keep customer data private", bullets: ["No names with phones, addresses or cards in AI", "Use placeholders; fill in details yourself"] },
            { title: "If you use a chatbot", bullets: ["Say it is automated", "Give a way to reach a person", "Review its answers often"] },
            { title: "Your customer service kit", bullets: ["Brand voice and FAQ", "Templates and LAST limits", "Review replies, shared with your team"] }
          ],
          tryIt: "Final task: put your brand voice, ten-question FAQ, five templates, one upset-customer reply and one review reply into one document. Check every fact and remove any real customer details.",
          youCanNow: "run your customer service with a checked, private, consistent kit made with AI help.",
          quickCheck: [
            { objective: "O6", q: "Why share your customer service kit with staff?", options: ["So they can change prices", "So everyone answers the same way", "So they can skip training", "So customers can edit it"], answer: 1, why: "A shared kit keeps replies consistent across your team." },
            { objective: "O6", q: "You are making templates and have a real customer's card details in your notes. What would you do?", options: ["Paste them into the AI so it understands", "Use them as an example template", "Share them with staff in the kit", "Keep them out of the AI tool and the kit"], answer: 3, why: "Customer card details must stay out of AI tools." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Reviews, hard conversations and trust",
        questions: [
          { objective: "O4", q: "A customer leaves a one-star review about a long wait. What is the best reply?", options: ["Thank them, apologize, say what you are fixing, and invite them to contact you", "Argue that they are wrong", "Post their phone number", "Ignore it forever"], answer: 0, why: "Calm, honest replies build trust." },
          { objective: "O4", q: "Under the FTC rule, which is NOT allowed?", options: ["Thanking a reviewer", "Replying to a bad review", "Asking happy customers to leave honest reviews", "Using AI to write fake customer reviews"], answer: 3, why: "The FTC rule bans fake reviews, including AI-made ones." },
          { objective: "O5", q: "What does the S in LAST stand for?", options: ["Sell", "Solve", "Stop", "Smile"], answer: 1, why: "Listen, Apologize, Solve, Thank." },
          { objective: "O5", q: "Who chooses the solution for an upset customer?", options: ["You, within limits you set", "The AI", "The customer alone", "A stranger online"], answer: 0, why: "AI drafts; you decide the fix." },
          { objective: "O6", q: "Your website chatbot should:", options: ["Pretend to be a person", "Collect card numbers in chat", "Say it is automated and offer a way to reach a person", "Never be checked"], answer: 2, why: "Honesty and a path to a person build trust." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: AI for Customer Service and Communication",
    questions: [
      { objective: "O1", q: "Which is a common customer question to put in an FAQ?", options: ["What is your password?", "What are your hours?", "What is your bank number?", "Who are your suppliers' owners?"], answer: 1, why: "Hours are a top question." },
      { objective: "O1", q: "Where do the answers in your FAQ come from?", options: ["Random reviews", "AI guesses", "A competitor's site", "Your real policies, written by you, made clear by AI"], answer: 3, why: "AI only shapes your real answers." },
      { objective: "O1", q: "Why check an FAQ before posting?", options: ["To make it longer", "AI is always right", "It is not needed", "It is a promise to customers"], answer: 3, why: "Customers will hold you to it." },
      { objective: "O2", q: "Three voice words for a family bakery might be:", options: ["Angry, rushed, cold", "Warm, cheerful, simple", "Secret, unclear, long", "Legal, strict, harsh"], answer: 1, why: "Voice words describe how you want to sound." },
      { objective: "O2", q: "Where do you put your brand voice so AI uses it?", options: ["On a receipt", "In your password", "At the start of the chat", "Nowhere"], answer: 2, why: "Pasting it at the top guides every reply." },
      { objective: "O2", q: "A \"don't\" in a brand voice list might be:", options: ["Use all caps", "Say thank you", "Use first names", "Keep it short"], answer: 0, why: "All caps can sound like shouting." },
      { objective: "O3", q: "Which is a good reply template?", options: ["\"Send me your password.\"", "\"Hi Jane Smith, 555-0101, card 4111...\"", "\"Hi [customer name], your order is ready for pickup at [time].\"", "\"No.\""], answer: 2, why: "It uses placeholders and is clear." },
      { objective: "O3", q: "Where can you keep templates for fast use?", options: ["Phone notes, text shortcuts or saved replies", "Only in your head", "In a customer's inbox", "On social media publicly"], answer: 0, why: "Saved templates are quick to copy." },
      { objective: "O3", q: "To make templates with AI you should give it:", options: ["Real customer names and numbers", "Blanks like [date] and [time]", "Card details", "Your passwords"], answer: 1, why: "Use placeholders, not real data." },
      { objective: "O4", q: "A good review thanks your \"best oxtail in town\". A good reply:", options: ["Offers cash for another review", "Ignores it", "Asks for their address", "Thanks them and mentions the oxtail"], answer: 3, why: "Short, personal thanks works best." },
      { objective: "O4", q: "Paying customers only if they leave positive reviews is:", options: ["Banned by the FTC rule", "Required", "A good idea", "Only fine on weekends"], answer: 0, why: "The rule bans rewards that depend on a positive sentiment." },
      { objective: "O4", q: "When an angry review upsets you, you should first:", options: ["Write fake good reviews", "Reply right away in all caps", "Post the customer's details", "Wait and reread it before replying"], answer: 3, why: "Calm replies are better replies." },
      { objective: "O5", q: "In the LAST method, the first step is to:", options: ["Laugh", "Leave", "Listen", "Lie"], answer: 2, why: "Listen to the whole complaint first." },
      { objective: "O5", q: "Why set refund and redo limits before a complaint?", options: ["To refuse everyone", "So you offer fair fixes you will really keep", "To confuse staff", "It is the law"], answer: 1, why: "Clear limits make fair, fast decisions." },
      { objective: "O5", q: "A customer says they were injured in your shop. You should:", options: ["Post about it online", "Have AI admit fault in detail", "Ignore it", "Keep the reply short and talk to a professional or your insurer"], answer: 3, why: "Injury and legal claims need professional advice." },
      { objective: "O5", q: "AI drafts a reply that promises a free meal for a year. You:", options: ["Add more promises", "Send it", "Remove it unless you truly agreed to that", "Ask the customer to decide"], answer: 2, why: "Only promise what you will keep." },
      { objective: "O6", q: "Customer card details should be:", options: ["Kept out of AI tools", "Pasted into chats", "Posted in replies", "Saved in templates"], answer: 0, why: "Card details are private." },
      { objective: "O6", q: "If you use a chatbot, customers should be able to:", options: ["Never reach anyone", "Reach a person", "Only pay by gift card", "Only use one word"], answer: 1, why: "A path to a person builds trust." },
      { objective: "O6", q: "Your customer service kit includes:", options: ["Passwords", "Voice, FAQ, templates, LAST limits and review replies", "Customer card numbers", "Fake reviews"], answer: 1, why: "Those parts make service fast and consistent." },
      { objective: "O6", q: "Why share the kit with staff?", options: ["So everyone answers the same way", "To slow them down", "To hide it", "It is not useful"], answer: 0, why: "Consistency builds trust." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Pre-Test: What Do You Already Know?",
    from: [
      0,
      2,
      3,
      6,
      8,
      9,
      10,
      12,
      13,
      16
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      {
        name: "Brand voice",
        objective: "O2",
        notYet: "No voice words or no do and don't list.",
        meets: "Three voice words and a do and don't list.",
        exceeds: "Sample replies clearly match the voice."
      },
      {
        name: "Checked FAQ",
        objective: "O1",
        notYet: "Fewer than ten questions, or an answer that is not true.",
        meets: "Ten common questions with answers checked against what you really do.",
        exceeds: "Answers are short and in the brand voice."
      },
      {
        name: "Reply templates",
        objective: "O3",
        notYet: "Fewer than five, or templates with real customer details.",
        meets: "Five checked templates with placeholders.",
        exceeds: "Saved where staff can copy them quickly."
      },
      {
        name: "Upset customer reply",
        objective: "O5",
        notYet: "Defensive, or offers a fix you would not give.",
        meets: "Follows LAST and offers a fix within your limits.",
        exceeds: "Your refund and redo limits are written in the kit."
      },
      {
        name: "Review reply",
        objective: "O4",
        notYet: "Argues, says something untrue, or is missing.",
        meets: "Calm, honest and in your voice.",
        exceeds: "Says what you are fixing and invites the customer to contact you."
      },
      {
        name: "Privacy and facts",
        objective: "O6",
        notYet: "Real customer details in the kit or the AI chat, or unchecked facts.",
        meets: "No customer private data used, and every fact checked.",
        exceeds: "The kit notes how a chatbot, if used, says it is automated and offers a person."
      }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Owners who use their FAQ or templates each week (30-day follow-up survey)",
      "Owners who reply to every new online review within a week (follow-up survey)",
      "Owners who report faster replies or better reviews within 90 days"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A smartphone or computer with internet",
      "A free AI assistant: Microsoft Copilot, ChatGPT or Google Gemini",
      "A free document tool such as Google Docs or Microsoft Word for the kit",
      "A list of real customer questions and your refund and redo limits",
      "About 60 minutes in total: lessons, practice, checks and the final task"
    ],
    facilitatorNotes: [
      "Ask owners to bring their real common questions and one real or sample review.",
      "Use sample customer names only; never paste real customer messages with names or numbers into AI.",
      "Role-play the LAST method in pairs with a made-up complaint before writing the reply.",
      "Remind owners that injury claims go to a professional or their insurer, not an AI reply.",
      "Score the kit with the rubric, and give feedback on one Not yet row at a time."
    ]
  }
};
