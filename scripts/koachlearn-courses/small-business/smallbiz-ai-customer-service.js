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
  chapters: [
    {
      name: "Chapter 1: Faster, friendlier everyday answers",
      lessons: [
        {
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
          youCanNow: "build a checked FAQ from your real customer questions."
        },
        {
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
          youCanNow: "describe your brand voice and get AI replies that sound like your business."
        },
        {
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
          youCanNow: "make and save reply templates that let you answer customers fast and consistently."
        }
      ],
      check: {
        title: "Knowledge Check 1: Faster, friendlier everyday answers",
        questions: [
          { q: "What does FAQ stand for?", options: ["Fast answer quote", "Frequently asked questions", "Free a question", "Final answer quiz"], answer: 1, why: "An FAQ lists common questions and answers." },
          { q: "AI turned your rough answers into an FAQ. What next?", options: ["Post it without reading", "Add more promises", "Delete it", "Check every answer against what you really do"], answer: 3, why: "An FAQ is a promise to customers." },
          { q: "What is a brand voice?", options: ["How your business sounds in messages", "The owner's singing voice", "Your phone number", "Your logo color"], answer: 0, why: "Brand voice is how you sound." },
          { q: "Which is a good template blank?", options: ["Your password", "The customer's card number", "[customer name]", "A real home address"], answer: 2, why: "Placeholders keep private data out of AI tools." },
          { q: "Why use reply templates?", options: ["To charge more", "To avoid customers", "To answer quickly and consistently", "To hide prices"], answer: 2, why: "Templates save time and keep replies the same quality." }
        ]
      }
    },
    {
      name: "Chapter 2: Reviews, hard conversations and trust",
      lessons: [
        {
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
          youCanNow: "reply to good and bad reviews calmly and honestly, without breaking the FTC's fake review rule."
        },
        {
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
          youCanNow: "answer an upset customer with the LAST method and a fair, real solution."
        },
        {
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
          youCanNow: "run your customer service with a checked, private, consistent kit made with AI help."
        }
      ],
      check: {
        title: "Knowledge Check 2: Reviews, hard conversations and trust",
        questions: [
          { q: "A customer leaves a one-star review about a long wait. What is the best reply?", options: ["Thank them, apologize, say what you are fixing, and invite them to contact you", "Argue that they are wrong", "Post their phone number", "Ignore it forever"], answer: 0, why: "Calm, honest replies build trust." },
          { q: "Under the FTC rule, which is NOT allowed?", options: ["Thanking a reviewer", "Replying to a bad review", "Asking happy customers to leave honest reviews", "Using AI to write fake customer reviews"], answer: 3, why: "The FTC rule bans fake reviews, including AI-made ones." },
          { q: "What does the S in LAST stand for?", options: ["Sell", "Solve", "Stop", "Smile"], answer: 1, why: "Listen, Apologize, Solve, Thank." },
          { q: "Who chooses the solution for an upset customer?", options: ["You, within limits you set", "The AI", "The customer alone", "A stranger online"], answer: 0, why: "AI drafts; you decide the fix." },
          { q: "Your website chatbot should:", options: ["Pretend to be a person", "Collect card numbers in chat", "Say it is automated and offer a way to reach a person", "Never be checked"], answer: 2, why: "Honesty and a path to a person build trust." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: AI for Customer Service and Communication",
    questions: [
      { q: "Which is a common customer question to put in an FAQ?", options: ["What is your password?", "What are your hours?", "What is your bank number?", "Who are your suppliers' owners?"], answer: 1, why: "Hours are a top question." },
      { q: "Where do the answers in your FAQ come from?", options: ["Random reviews", "AI guesses", "A competitor's site", "Your real policies, written by you, made clear by AI"], answer: 3, why: "AI only shapes your real answers." },
      { q: "Why check an FAQ before posting?", options: ["To make it longer", "AI is always right", "It is not needed", "It is a promise to customers"], answer: 3, why: "Customers will hold you to it." },
      { q: "Three voice words for a family bakery might be:", options: ["Angry, rushed, cold", "Warm, cheerful, simple", "Secret, unclear, long", "Legal, strict, harsh"], answer: 1, why: "Voice words describe how you want to sound." },
      { q: "Where do you put your brand voice so AI uses it?", options: ["On a receipt", "In your password", "At the start of the chat", "Nowhere"], answer: 2, why: "Pasting it at the top guides every reply." },
      { q: "A \"don't\" in a brand voice list might be:", options: ["Use all caps", "Say thank you", "Use first names", "Keep it short"], answer: 0, why: "All caps can sound like shouting." },
      { q: "Which is a good reply template?", options: ["\"Send me your password.\"", "\"Hi Jane Smith, 555-0101, card 4111...\"", "\"Hi [customer name], your order is ready for pickup at [time].\"", "\"No.\""], answer: 2, why: "It uses placeholders and is clear." },
      { q: "Where can you keep templates for fast use?", options: ["Phone notes, text shortcuts or saved replies", "Only in your head", "In a customer's inbox", "On social media publicly"], answer: 0, why: "Saved templates are quick to copy." },
      { q: "To make templates with AI you should give it:", options: ["Real customer names and numbers", "Blanks like [date] and [time]", "Card details", "Your passwords"], answer: 1, why: "Use placeholders, not real data." },
      { q: "A good review thanks your \"best oxtail in town\". A good reply:", options: ["Offers cash for another review", "Ignores it", "Asks for their address", "Thanks them and mentions the oxtail"], answer: 3, why: "Short, personal thanks works best." },
      { q: "Paying customers only if they leave positive reviews is:", options: ["Banned by the FTC rule", "Required", "A good idea", "Only fine on weekends"], answer: 0, why: "The rule bans rewards that depend on a positive sentiment." },
      { q: "When an angry review upsets you, you should first:", options: ["Write fake good reviews", "Reply right away in all caps", "Post the customer's details", "Wait and reread it before replying"], answer: 3, why: "Calm replies are better replies." },
      { q: "In the LAST method, the first step is to:", options: ["Laugh", "Leave", "Listen", "Lie"], answer: 2, why: "Listen to the whole complaint first." },
      { q: "Why set refund and redo limits before a complaint?", options: ["To refuse everyone", "So you offer fair fixes you will really keep", "To confuse staff", "It is the law"], answer: 1, why: "Clear limits make fair, fast decisions." },
      { q: "A customer says they were injured in your shop. You should:", options: ["Post about it online", "Have AI admit fault in detail", "Ignore it", "Keep the reply short and talk to a professional or your insurer"], answer: 3, why: "Injury and legal claims need professional advice." },
      { q: "AI drafts a reply that promises a free meal for a year. You:", options: ["Add more promises", "Send it", "Remove it unless you truly agreed to that", "Ask the customer to decide"], answer: 2, why: "Only promise what you will keep." },
      { q: "Customer card details should be:", options: ["Kept out of AI tools", "Pasted into chats", "Posted in replies", "Saved in templates"], answer: 0, why: "Card details are private." },
      { q: "If you use a chatbot, customers should be able to:", options: ["Never reach anyone", "Reach a person", "Only pay by gift card", "Only use one word"], answer: 1, why: "A path to a person builds trust." },
      { q: "Your customer service kit includes:", options: ["Passwords", "Voice, FAQ, templates, LAST limits and review replies", "Customer card numbers", "Fake reviews"], answer: 1, why: "Those parts make service fast and consistent." },
      { q: "Why share the kit with staff?", options: ["So everyone answers the same way", "To slow them down", "To hide it", "It is not useful"], answer: 0, why: "Consistency builds trust." }
    ]
  }
};
