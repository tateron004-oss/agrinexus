"use strict";

// Koach Learn course: Small Business -> "AI for Service Businesses" (bonus course). Written as a skill-building course: by the end the student can DO the skill in `outcome`.
// Two chapters of three micro-lessons; a knowledge check closes each chapter; a 20-question quiz closes the course. See scripts/koachlearn-export.js for how it is built.
// CAN-SPAM requirements were checked on ftc.gov on 27 October 2026.
//
// lesson: { title, minutes, goal, text: [paragraph], steps: [step] (optional), words: [[term, means]], slides: [{ title, bullets }], sources, tryIt, youCanNow }
// question: { q, options: [4], answer: index of the right option, why }

const CAN_SPAM = { name: "FTC: CAN-SPAM Act, A Compliance Guide for Business", url: "https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business" };

const FTC_REVIEWS = { name: "FTC: Consumer Reviews and Testimonials Rule, Questions and Answers", url: "https://www.ftc.gov/business-guidance/resources/consumer-reviews-testimonials-rule-questions-answers" };

module.exports = {
  id: "smallbiz-ai-service-business",
  category: "Small Business",
  name: "AI for Service Businesses",
  skills: "Writing clear quotes and estimates, Setting booking and reminder messages, Making job checklists, Writing service descriptions, Following up after a job, Asking for reviews the right way",
  outcome: "use AI to run the paperwork of a service business from first call to repeat customer: a clear quote template, booking and reminder messages, a job checklist, a service menu with prices, and a follow-up message that asks for honest reviews and repeat work.",
  about: [
    "This course is for people who sell their time and skill: house cleaners, barbers and stylists, nail techs, landscapers, plumbers and handymen, movers, mobile mechanics, painters, pet groomers and tutors. Many of our students run one-person or family businesses.",
    "You will use a free AI assistant and simple documents and spreadsheets to answer leads faster, quote clearly, show up prepared, finish every job the same high-quality way, and turn happy customers into repeat customers and referrals.",
    "Each lesson takes about five minutes with a \"Try it now\" task. There is a knowledge check after each chapter and a 20-question quiz at the end."
  ],
  finalTask: "Build a service business kit for your trade: a service menu with prices, a quote template with scope, price, what is not included and how long the quote is good for, booking-confirmation and reminder templates, a job checklist for your most common job, and a follow-up message that thanks the customer and asks for an honest review and referral.",
  chapters: [
    {
      name: "Chapter 1: Winning the job",
      lessons: [
        {
          title: "A clear service menu",
          minutes: 5,
          goal: "Write a service menu with clear descriptions and prices.",
          text: [
            "Customers want to know what you do and roughly what it costs before they call. A service menu lists each service, what is included, how long it takes and the price or price range.",
            "Give AI your real services and prices: \"Write a service menu for my house-cleaning business: standard clean $120 for up to 2 bedrooms, deep clean $220, move-out clean from $260. Include what is included in each. Simple words.\" Check everything, especially what is and is not included.",
            "Clear menus cut down on arguments later. Say plainly what costs extra (inside the oven, pet hair, stairs, travel over 15 miles)."
          ],
          steps: ["List your services and real prices.", "Write what is included and what costs extra.", "Ask AI to format a clear menu.", "Check every price and inclusion."],
          words: [["Service menu", "a list of the services you offer with what is included and the price."], ["Add-on", "an extra service that costs more."]],
          slides: [
            { title: "What customers want first", bullets: ["What you do", "What is included", "Roughly what it costs"] },
            { title: "Build it with AI", bullets: ["Give your real services and prices", "Ask for clear, simple wording"] },
            { title: "Prevent arguments", bullets: ["Say what costs extra", "Example: oven, pet hair, travel over 15 miles"] }
          ],
          tryIt: "Write your service menu with at least three services, what is included and add-ons. Use AI to format it, then check every price.",
          youCanNow: "write a clear service menu with inclusions, add-ons and prices."
        },
        {
          title: "Writing quotes and estimates",
          minutes: 6,
          goal: "Make a quote template that is clear, fair and protects you.",
          text: [
            "A quote says exactly what you will do, for how much, and under what conditions. A good one has: customer and job address, scope of work (what you will do), materials, price, what is not included, payment terms, when work will start and how long the quote is good for.",
            "Ask AI to make a template: \"Make a one-page quote template for a small painting business with blanks for [customer], [address], [scope], [materials], [price], [not included], [payment terms], [valid until].\" Save it in Docs or Word.",
            "AI can help you describe the scope clearly, but you set the price from your own costs: materials, your hours, travel and profit. For larger jobs, contracts and licensing rules depend on your state and trade, so check your state's contractor licensing board or a professional."
          ],
          steps: ["Ask AI for a quote template with blanks.", "Fill in a real or sample job.", "Set the price from your costs plus profit.", "List what is not included and how long the quote is good for.", "Check licensing and contract rules for bigger jobs."],
          words: [["Quote", "a written price for a specific job."], ["Scope of work", "exactly what you will and will not do on a job."], ["Payment terms", "when and how the customer pays, such as a deposit and the rest on completion."]],
          slides: [
            { title: "Parts of a good quote", bullets: ["Customer, address and scope of work", "Materials and price", "Not included, payment terms, valid until"] },
            { title: "AI makes the template", bullets: ["Blanks like [scope] and [price]", "Save it in Docs or Word"] },
            { title: "You set the price", bullets: ["Materials + hours + travel + profit", "Bigger jobs: check state licensing and contract rules"] }
          ],
          tryIt: "Make your quote template with AI, then fill it in for one real or sample job. Work out the price on paper from your costs.",
          youCanNow: "write a clear quote that sets the scope, price and terms."
        },
        {
          title: "Answering new leads fast",
          minutes: 4,
          goal: "Reply to new inquiries quickly with templates that ask the right questions.",
          text: [
            "The first business to reply often wins the job. Have a template ready for each way people reach you: text, email, social messages and missed calls.",
            "A good first reply thanks them, asks the two or three questions you need to quote (\"How many bedrooms? Any pets? Which day works?\"), and gives a next step. Ask AI to write one for each channel in your voice.",
            "Keep templates on your phone so you can reply between jobs. Do not ask people to send card numbers or ID by text or social messages."
          ],
          steps: ["List the questions you need to quote.", "Ask AI for a first-reply template for each channel.", "Save them on your phone.", "Reply within an hour when you can."],
          words: [["Lead", "a person who asked about your service but has not booked yet."], ["Channel", "a way customers reach you, like text, email or social messages."]],
          slides: [
            { title: "Speed wins jobs", bullets: ["The first reply often gets the job", "A template for each channel"] },
            { title: "A good first reply", bullets: ["Thank them", "Ask the 2-3 questions you need", "Give the next step"] },
            { title: "Keep it handy and safe", bullets: ["Templates saved on your phone", "Never ask for card numbers by text"] }
          ],
          tryIt: "Write your three must-ask questions. Ask AI for a first-reply text and email template in your voice, and save them on your phone.",
          youCanNow: "answer new leads fast with templates that gather what you need to quote."
        }
      ],
      check: {
        title: "Knowledge Check 1: Winning the job",
        questions: [
          { q: "Why list what costs extra on your service menu?", options: ["To confuse customers", "To prevent arguments later", "To charge hidden fees", "It is not useful"], answer: 1, why: "Clear add-ons set expectations." },
          { q: "Which belongs in a quote?", options: ["A fake discount", "Your password", "The customer's card number", "Scope of work and how long the quote is good for"], answer: 3, why: "Scope and validity protect both sides." },
          { q: "Who sets the price on a quote?", options: ["You, from your costs and profit", "The AI", "The customer alone", "A competitor"], answer: 0, why: "Only you know your real costs." },
          { q: "Where do you check licensing rules for bigger jobs?", options: ["A neighbor", "An AI chat", "Your state's contractor licensing board or a professional", "A social post"], answer: 2, why: "Licensing depends on your state and trade." },
          { q: "What should a first reply to a lead include?", options: ["A request for their card number", "Only your price", "Thanks, the questions you need, and a next step", "Nothing; wait a week"], answer: 2, why: "That moves the lead toward a booking." }
        ]
      }
    },
    {
      name: "Chapter 2: Doing the job and keeping the customer",
      lessons: [
        {
          title: "Booking confirmations and reminders",
          minutes: 4,
          goal: "Set up booking and reminder messages that cut no-shows.",
          text: [
            "No-shows and lockouts cost you a day's pay. Clear confirmations and reminders help. A confirmation says the date, time window, address, price, what the customer should do to prepare and your cancellation policy.",
            "Ask AI: \"Write a booking confirmation and a reminder for the day before for my mobile dog grooming business. Blanks: [name], [date], [time window], [address], [price]. Include our 24-hour cancellation policy.\"",
            "Many booking tools can send reminders automatically; check your tool's settings. If you send marketing texts or emails (not just reminders), get permission first and follow the email rules, including an unsubscribe option."
          ],
          steps: ["Write your cancellation policy.", "Ask AI for a confirmation and a reminder template.", "Set automatic reminders in your booking tool if it has them.", "Send marketing only with permission and an unsubscribe."],
          words: [["No-show", "a customer who misses a booked appointment."], ["Cancellation policy", "your rules for cancelling, such as 24 hours' notice."], ["Time window", "a range of arrival times, like 9 to 11 am."]],
          slides: [
            { title: "Cut no-shows", bullets: ["Confirmation right after booking", "Reminder the day before"] },
            { title: "A good confirmation", bullets: ["Date, time window, address, price", "How to prepare", "Cancellation policy"] },
            { title: "Automate and stay legal", bullets: ["Booking tools can send reminders", "Marketing needs permission and an unsubscribe"] }
          ],
          sources: [CAN_SPAM],
          tryIt: "Write your cancellation policy in two lines. Ask AI for a confirmation and a day-before reminder template with blanks, and save them.",
          youCanNow: "send booking confirmations and reminders that reduce no-shows."
        },
        {
          title: "Job checklists for the same quality every time",
          minutes: 5,
          goal: "Turn your know-how into a job checklist you and your helpers follow.",
          text: [
            "A checklist makes every job as good as your best one, even on a tired day or when a helper does it. It also helps you train new people.",
            "Talk or type out how you do your most common job, start to finish, and ask AI: \"Turn these notes into a job checklist for a standard residential lawn service: before you arrive, on site, before you leave. Short steps.\" Add safety steps your trade requires, and check them against official safety guidance or your trade training.",
            "Add a final walk-through with the customer and before-and-after photos (with their permission) to show the work."
          ],
          steps: ["Describe your common job start to finish.", "Ask AI to turn it into a three-part checklist.", "Add your trade's safety steps.", "Add a walk-through and photos with permission.", "Test it on the next job and fix it."],
          words: [["Checklist", "a list of steps to tick off so nothing is missed."], ["Walk-through", "going over the finished job with the customer."]],
          slides: [
            { title: "Why a checklist", bullets: ["Same quality every time", "Helps train helpers"] },
            { title: "Build it with AI", bullets: ["Describe your job start to finish", "Before you arrive, on site, before you leave"] },
            { title: "Finish strong", bullets: ["Your trade's safety steps", "Walk-through with the customer", "Before-and-after photos with permission"] }
          ],
          tryIt: "Describe your most common job in a few lines. Ask AI to turn it into a three-part checklist, add safety steps, and use it on your next job.",
          youCanNow: "make and use a job checklist that keeps quality the same every time."
        },
        {
          title: "Follow-up, honest reviews and repeat work",
          minutes: 5,
          goal: "Follow up after a job to earn honest reviews, referrals and repeat bookings.",
          text: [
            "The job is not over when you leave. A thank-you message the same day, with a link to leave a review and an offer to book the next visit, brings repeat work. Ask AI to write it in your voice with [name] and [service] blanks.",
            "Ask every customer the same way, happy or not, for an honest review. Do not offer rewards only for positive reviews, and never write fake ones; the FTC's review rule bans both.",
            "Set reminders for repeat services: gutters every fall, a haircut every three weeks, a furnace check every year. A short \"Time for your next...?\" message keeps your calendar full."
          ],
          steps: ["Send a thank-you the same day.", "Include a review link and ask for honest reviews.", "Offer the next booking.", "Set reminders for repeat services."],
          words: [["Referral", "a customer sending a friend to you."], ["Repeat service", "a job customers need again on a schedule."]],
          slides: [
            { title: "Same-day thank-you", bullets: ["Thank them by name", "Review link", "Offer the next booking"] },
            { title: "Honest reviews only", bullets: ["Ask every customer the same way", "No rewards only for positive reviews", "Never fake reviews (FTC rule)"] },
            { title: "Keep the calendar full", bullets: ["Gutters every fall; haircut every 3 weeks", "\"Time for your next...?\" reminders"] }
          ],
          sources: [FTC_REVIEWS],
          tryIt: "Final task: put your service kit together: service menu, quote template, first-reply, confirmation and reminder templates, a job checklist, and a follow-up thank-you with a review request and next-booking offer.",
          youCanNow: "run a service business's paperwork from first call to repeat customer with AI help."
        }
      ],
      check: {
        title: "Knowledge Check 2: Doing the job and keeping the customer",
        questions: [
          { q: "Which belongs in a booking confirmation?", options: ["Date, time window, address, price and cancellation policy", "The customer's card number", "Your password", "Nothing"], answer: 0, why: "Those details prevent confusion and no-shows." },
          { q: "Before sending marketing emails you need:", options: ["A fake sender name", "Nothing", "The customer's ID", "Permission and an unsubscribe option"], answer: 3, why: "CAN-SPAM requires an opt-out and honesty." },
          { q: "Why use a job checklist?", options: ["To slow down", "Same quality every time and easier training", "To skip safety", "To charge more"], answer: 1, why: "Checklists keep quality consistent." },
          { q: "Before taking before-and-after photos you should:", options: ["Get the customer's permission", "Take them secretly", "Post the address", "Skip it"], answer: 0, why: "Respect customer privacy." },
          { q: "Which review request follows the FTC rule?", options: ["Writing reviews for friends' accounts", "10% off only for 5-star reviews", "Asking every customer for an honest review", "Buying reviews"], answer: 2, why: "Honest, unconditional requests are fine." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: AI for Service Businesses",
    questions: [
      { q: "A service menu lists:", options: ["Customer addresses", "Services, what is included and prices", "Passwords", "Staff Social Security numbers"], answer: 1, why: "It shows what you offer and the cost." },
      { q: "An add-on is:", options: ["A review", "A free gift", "A tax", "An extra service that costs more"], answer: 3, why: "Add-ons are extras." },
      { q: "AI formats your menu. You must check:", options: ["The colors", "Only the font", "Nothing", "Every price and what is included"], answer: 3, why: "AI can change details." },
      { q: "Scope of work means:", options: ["Your tools", "Exactly what you will and will not do", "Your truck", "Your hours"], answer: 1, why: "Scope defines the job." },
      { q: "A quote should say how long it is:", options: ["Printed", "Spoken", "Good for", "Typed"], answer: 2, why: "Prices change; the quote should expire." },
      { q: "A price from your costs includes:", options: ["Materials, hours, travel and profit", "Only materials", "Only travel", "What AI suggests"], answer: 0, why: "All costs plus profit." },
      { q: "A lead is:", options: ["A tool", "A metal", "A person who asked but has not booked", "A bill"], answer: 2, why: "Leads are possible customers." },
      { q: "Why reply to leads fast?", options: ["The first reply often wins the job", "It is required", "To annoy them", "It does not matter"], answer: 0, why: "Speed wins jobs." },
      { q: "Which should you never ask for by text?", options: ["Number of bedrooms", "A card number", "A good day", "Pets in the home"], answer: 1, why: "Card numbers are private." },
      { q: "A time window is:", options: ["A holiday", "A glass pane", "A deadline to pay", "A range of arrival times"], answer: 3, why: "It sets arrival expectations." },
      { q: "A day-before reminder helps:", options: ["Cut no-shows and lockouts", "Raise prices", "Skip the job", "Hide the policy"], answer: 0, why: "Reminders reduce missed jobs." },
      { q: "Where can automatic reminders often be set?", options: ["Nowhere", "A paper calendar", "The bank", "Your booking tool's settings"], answer: 3, why: "Many booking tools send reminders." },
      { q: "How should you build a job checklist?", options: ["Let AI invent it from nothing", "Copy a competitor", "Describe your job and have AI organize it, then test it", "Skip it"], answer: 2, why: "Your know-how, organized by AI." },
      { q: "Safety steps in your checklist should be checked against:", options: ["AI only", "Official safety guidance or your trade training", "A social post", "Nothing"], answer: 1, why: "Safety needs a reliable source." },
      { q: "A walk-through is:", options: ["A review", "A hallway", "A quote", "Going over the finished job with the customer"], answer: 3, why: "It confirms the customer is happy." },
      { q: "When should you send a thank-you?", options: ["Never", "A year later", "The same day", "Only if they complain"], answer: 2, why: "Fresh thanks gets more reviews and rebookings." },
      { q: "Offering a discount only for 5-star reviews is:", options: ["Banned under the FTC review rule", "Fine", "Required", "Smart"], answer: 0, why: "Rewards tied to positive reviews are banned." },
      { q: "A repeat service example is:", options: ["A one-time move", "Gutter cleaning every fall", "A broken window once", "A single delivery"], answer: 1, why: "It recurs on a schedule." },
      { q: "A referral is:", options: ["A fee", "A customer sending a friend to you", "A tax", "A tool"], answer: 1, why: "Referrals bring new customers." },
      { q: "Which part of the work stays with you, not AI?", options: ["Setting prices and doing the job right", "Formatting a template", "Wording a reminder", "Organizing notes"], answer: 0, why: "AI helps with words; you run the business." }
    ]
  }
};
