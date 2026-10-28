"use strict";

// Koach Learn course (shared): "AI for Customer Experience". Categories: Small Business, Non Profits. Shape and rules: ../README.md; model: ../re-entry/reentry-ai-digital-confidence.js.

module.exports = {
  id: "ai-customer-experience",
  category: "Small Business",
  name: "AI for Customer Experience",
  skills: "Mapping the customer journey, Writing reply templates with AI, Answering reviews and complaints, Analyzing feedback with AI, Personalizing without losing privacy, Building an improvement plan",
  outcome: "map how customers or clients experience your organization, use AI to write fast, warm replies to questions, reviews and complaints, sort feedback into the top issues, and turn them into a 30-day improvement plan.",
  about: [
    "Customer experience is how people feel at every point they deal with you: finding you, asking a question, buying or getting help, and what happens after. Happy customers come back and tell friends; unhappy ones leave quietly or leave a bad review.",
    "This course is for small business owners and staff, and for nonprofits whose \"customers\" are clients, families, donors and volunteers. Examples include a barbershop, a home repair company, a clinic front desk and a food bank.",
    "You will use free AI assistants such as ChatGPT, Microsoft Copilot or Google Gemini to write replies and study feedback, while a person stays in charge. Each lesson is about five minutes with a \"Try it now\" task, a knowledge check after each chapter and a 20-question quiz at the end."
  ],
  finalTask: "For a real or practice organization, produce a customer experience kit: a customer journey map with the three weakest moments marked, five reply templates (common question, positive review, negative review, complaint, follow-up), a feedback summary of at least 15 real or sample comments sorted into top issues, and a 30-day improvement plan with one owner and one measure per action.",
  chapters: [
    {
      name: "Chapter 1: Seeing and answering your customers",
      lessons: [
        {
          title: "Mapping the customer journey",
          minutes: 5,
          goal: "Draw a customer journey map and mark the weakest moments.",
          text: [
            "A customer journey map lists every step a person goes through with you, in order: discover (how they find you), ask (first contact), decide, buy or receive the service, and after (follow-up, review, coming back).",
            "At each step, write what the customer does, what they feel, and what could go wrong. For a food bank: a family finds the hours online, calls with a question, waits in line, receives food, and wonders when to come back.",
            "AI can help you see steps you missed. Ask: \"I run a home repair business. List every step a customer goes through from first search to after the job, and what could frustrate them at each step.\" Then compare with what you see every day."
          ],
          steps: ["List the steps: discover, ask, decide, buy or receive, after.", "For each step, write what the customer does and feels.", "Ask AI what could frustrate them at each step.", "Mark the three weakest moments."],
          words: [["Customer experience", "how people feel at every point they deal with an organization."], ["Journey map", "a step-by-step picture of a customer's experience."], ["Touchpoint", "any moment a customer deals with you: a call, a post, a visit, an email."]],
          slides: [
            { title: "The journey", bullets: ["Discover, ask, decide", "Buy or receive", "After: follow-up and return"] },
            { title: "At each step", bullets: ["What they do", "What they feel", "What could go wrong"] },
            { title: "Use AI to find gaps", bullets: ["Ask what could frustrate customers", "Compare with what you see", "Mark the three weakest moments"] }
          ],
          tryIt: "Draw a journey map for a real or practice organization with at least five steps. Use AI to find frustrations you missed and mark the three weakest moments.",
          youCanNow: "map a customer journey and find where the experience breaks down."
        },
        {
          title: "Writing fast, warm replies with AI",
          minutes: 5,
          goal: "Build reply templates with AI for the questions you get most.",
          text: [
            "Fast replies matter. A template is a ready-made reply you adjust for each person. AI can draft templates in your voice in seconds.",
            "Give the AI context: your organization, your tone and the facts. \"Write a friendly reply for a barbershop to the question 'Do you take walk-ins?' Facts: walk-ins welcome Tuesday to Thursday, appointments needed Friday and Saturday, book at our website. Under 50 words.\"",
            "Always personalize before sending: use the person's name, answer exactly what they asked, and check the facts. A reply that sounds like a robot or gets the hours wrong hurts more than it helps."
          ],
          steps: ["List your five most common questions.", "Give AI your tone and the true facts for each.", "Ask for a short, friendly template.", "Save the templates in a document.", "Personalize and check facts each time you use one."],
          words: [["Template", "a ready-made reply you adjust for each person."], ["Personalize", "change a message so it fits the specific person."]],
          slides: [
            { title: "Speed matters", bullets: ["Templates help you reply fast", "AI drafts them in seconds"] },
            { title: "Give AI the facts", bullets: ["Your tone", "The true facts", "A word limit"] },
            { title: "Personalize every time", bullets: ["Use their name", "Answer exactly what they asked", "Check the facts"] }
          ],
          tryIt: "Use AI to write templates for your three most common customer questions. Save them, then personalize one for a made-up customer.",
          youCanNow: "build and personalize AI-drafted reply templates."
        },
        {
          title: "Answering reviews and complaints",
          minutes: 6,
          goal: "Reply to a positive review, a negative review and a complaint calmly and helpfully.",
          text: [
            "Reviews are public, so your reply is for everyone reading, not only the reviewer. Thank people for positive reviews and mention something specific. For negative reviews, stay calm, apologize for their experience, do not argue, and offer to fix it offline with a phone number or email.",
            "For complaints, use a simple pattern: listen, apologize, solve, follow up. Ask AI: \"Help me reply to this complaint. Pattern: acknowledge, apologize, offer this fix: [your fix], invite them to contact [email].\"",
            "Never share private details in a public reply, such as appointment dates, health information or what someone bought. Never post fake reviews or pay for them. If a review contains threats or false claims, follow the platform's reporting process."
          ],
          steps: ["Read the review twice and wait if you feel upset.", "Thank them (positive) or acknowledge and apologize (negative).", "Offer a specific fix or a way to talk offline.", "Keep private details out of public replies.", "Follow up to make sure it was solved."],
          words: [["Review", "a public comment and rating about a business."], ["Offline", "away from the public page, such as by phone or private email."]],
          slides: [
            { title: "Replies are public", bullets: ["Everyone reads them", "Thank positive reviewers specifically"] },
            { title: "Negative reviews", bullets: ["Stay calm, do not argue", "Apologize for their experience", "Offer to fix it offline"] },
            { title: "Complaint pattern", bullets: ["Listen, apologize, solve, follow up", "No private details in public", "No fake reviews, ever"] }
          ],
          tryIt: "Write AI-assisted replies to one positive review, one negative review and one complaint (real or made up). Check each for calm tone and no private details.",
          youCanNow: "answer reviews and complaints calmly, helpfully and without sharing private details."
        }
      ],
      check: {
        title: "Knowledge Check 1: Seeing and answering your customers",
        questions: [
          { q: "What does a customer journey map show?", options: ["Your delivery truck's route only", "Your bank balance", "Every step a customer goes through with you", "Employee schedules"], answer: 2, why: "It lists each step and how the customer feels." },
          { q: "Which is a touchpoint?", options: ["A phone call with a customer", "The color of your office walls only", "Your tax return", "A supplier's invoice"], answer: 0, why: "Touchpoints are moments a customer deals with you." },
          { q: "What should you always do before sending an AI-drafted reply?", options: ["Send it unread", "Add more emojis", "Remove the customer's name", "Personalize it and check the facts"], answer: 3, why: "Personal, accurate replies build trust." },
          { q: "A customer leaves an angry review. What is the best first step?", options: ["Argue publicly", "Stay calm, apologize for their experience and offer to fix it offline", "Post their appointment details", "Ignore it forever"], answer: 1, why: "Calm, helpful replies show readers you care." },
          { q: "Which should never appear in a public review reply?", options: ["\"Thank you\"", "The customer's health information", "An offer to talk by phone", "Your business name"], answer: 1, why: "Private details stay out of public replies." }
        ]
      }
    },
    {
      name: "Chapter 2: Learning from feedback and improving",
      lessons: [
        {
          title: "Analyzing feedback with AI",
          minutes: 6,
          goal: "Use AI to sort customer comments into themes and find the top issues.",
          text: [
            "Feedback hides in many places: reviews, surveys, emails, social comments and notes from staff. Reading it all by hand takes hours. AI can sort it in minutes.",
            "Collect at least 15 comments in a document. Remove names, phone numbers and other private details. Then ask: \"Sort these comments into themes. For each theme, count how many comments mention it, say if it is positive or negative, and give one example quote.\"",
            "Check the AI's work: read a few comments in each theme to confirm they belong there. AI can miscount or merge different issues. The result is your top issues list, ranked by how often they come up and how much they hurt the experience."
          ],
          steps: ["Collect at least 15 comments from reviews, surveys and emails.", "Remove names and private details.", "Ask AI to sort them into themes with counts and examples.", "Spot-check a few comments per theme.", "Rank the top three issues."],
          words: [["Feedback", "what customers tell you about their experience."], ["Theme", "a topic that comes up again and again."], ["Sentiment", "whether a comment is positive, negative or neutral."]],
          slides: [
            { title: "Feedback is everywhere", bullets: ["Reviews, surveys, emails", "Social comments, staff notes"] },
            { title: "Let AI sort it", bullets: ["Remove private details first", "Ask for themes, counts, sentiment, an example"] },
            { title: "Check and rank", bullets: ["Spot-check each theme", "Rank by how often and how much it hurts"] }
          ],
          tryIt: "Gather at least 15 real or sample comments, remove private details, and have AI sort them into themes. Spot-check the results and list your top three issues.",
          youCanNow: "turn a pile of customer comments into a ranked list of top issues."
        },
        {
          title: "Personalizing service without losing trust",
          minutes: 5,
          goal: "Use AI to personalize messages while protecting customer privacy and staying honest.",
          text: [
            "Personal touches make people feel valued: a birthday discount, a reminder before a client's next appointment, or a thank-you note to a donor that mentions the program they supported.",
            "AI can help write these messages at scale from a template. Give it only the details it needs, like a first name and the service type, not full records. Use your own customer system or email tool to merge names in, rather than pasting customer lists into a general AI tool.",
            "Be honest: if a chatbot or AI answers customers, say so. Make it easy to reach a person. Only message people who agreed to hear from you, and make it easy to opt out."
          ],
          steps: ["Choose one personal moment: a thank-you, reminder or follow-up.", "Have AI write a template with placeholders like [First name].", "Fill in names using your own email or customer tool.", "Say clearly when a customer is talking with AI.", "Always offer a way to reach a person."],
          words: [["Placeholder", "a marker like [First name] that gets replaced with real details."], ["Opt out", "choose to stop getting messages."]],
          slides: [
            { title: "Personal touches", bullets: ["Thank-yous and reminders", "Mention what matters to them"] },
            { title: "Protect privacy", bullets: ["Use placeholders like [First name]", "Merge names in your own tool", "No customer lists in general AI tools"] },
            { title: "Stay honest", bullets: ["Say when AI is answering", "Easy to reach a person", "Easy to opt out"] }
          ],
          tryIt: "Write a personalized thank-you or follow-up template with AI using placeholders. Check that it asks for no private details and offers a way to reach a person.",
          youCanNow: "personalize customer messages with AI while protecting privacy and staying honest."
        },
        {
          title: "Turning insights into a 30-day improvement plan",
          minutes: 5,
          goal: "Turn your top issues into a 30-day plan with owners and measures.",
          text: [
            "Insights only matter if something changes. For each of your top three issues, choose one action you can take in 30 days. Example: \"Customers say they wait too long for quotes\" becomes \"Send every quote within 24 hours using an AI-drafted quote template.\"",
            "Give each action an owner and a measure: a number that will show if it worked, such as average reply time, review rating, repeat visits or complaints per week.",
            "Tell customers what you changed: \"You told us, we listened.\" After 30 days, check the measures, keep what worked and pick the next issue."
          ],
          steps: ["Write one action for each top issue.", "Give each action an owner.", "Choose one measure for each.", "Record the starting number.", "Check again after 30 days and share what changed."],
          words: [["Insight", "a useful understanding that comes from studying information."], ["Measure", "a number that shows whether a change worked."]],
          slides: [
            { title: "From insight to action", bullets: ["One action per top issue", "Doable in 30 days"] },
            { title: "Owner and measure", bullets: ["Who does it", "Reply time, ratings, repeat visits, complaints"] },
            { title: "Close the loop", bullets: ["\"You told us, we listened\"", "Check at 30 days", "Pick the next issue"] }
          ],
          tryIt: "Final task: write a 30-day improvement plan for your top three issues with an action, owner, measure and starting number for each. Add it to your journey map, templates and feedback summary to complete your customer experience kit.",
          youCanNow: "find, fix and measure customer experience problems with AI help."
        }
      ],
      check: {
        title: "Knowledge Check 2: Learning from feedback and improving",
        questions: [
          { q: "Before pasting customer comments into AI, you should:", options: ["Add their phone numbers", "Add their card numbers", "Nothing", "Remove names and private details"], answer: 3, why: "Privacy comes first." },
          { q: "AI sorts comments into themes. What should you do next?", options: ["Spot-check a few comments in each theme", "Trust it fully", "Delete the comments", "Post the themes publicly with names"], answer: 0, why: "AI can miscount or merge issues." },
          { q: "What is a placeholder?", options: ["A fake review", "A type of complaint", "A marker like [First name] replaced with real details", "A customer's password"], answer: 2, why: "Placeholders let you personalize safely." },
          { q: "A chatbot answers your customers. What should you tell them?", options: ["That it is a real employee", "Nothing", "To stop asking questions", "That it is AI and how to reach a person"], answer: 3, why: "Honesty builds trust." },
          { q: "Which is a good measure for the action \"send quotes within 24 hours\"?", options: ["Number of office plants", "Owner's age", "Average time to send a quote", "Website colors"], answer: 2, why: "The measure must show whether the action worked." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: AI for Customer Experience",
    questions: [
      { q: "Customer experience is:", options: ["Only the price", "How people feel at every point they deal with you", "Only your website", "Your staff's pay"], answer: 1, why: "It covers every touchpoint." },
      { q: "Which is the first step of a customer journey?", options: ["Discover: how they find you", "Leaving a review", "Paying", "Coming back"], answer: 0, why: "The journey starts when they find you." },
      { q: "For a nonprofit, \"customers\" can include:", options: ["Only paying shoppers", "Only the board", "Clients, families, donors and volunteers", "Nobody"], answer: 2, why: "Anyone the nonprofit serves or relies on." },
      { q: "AI can help a journey map by:", options: ["Suggesting frustrations you may have missed", "Replacing your customers", "Collecting card numbers", "Writing fake reviews"], answer: 0, why: "It brainstorms; you compare with reality." },
      { q: "A reply template is:", options: ["A legal contract", "A survey", "A review site", "A ready-made reply you adjust for each person"], answer: 3, why: "Templates speed up replies." },
      { q: "What should you give AI when drafting a template?", options: ["Customer passwords", "Your tone and the true facts", "Nothing", "A competitor's reviews"], answer: 1, why: "Facts and tone produce accurate, on-brand replies." },
      { q: "An AI template says you open at 8 am, but you open at 9. What do you do?", options: ["Send it anyway", "Fix the fact before using it", "Change your hours", "Blame the customer"], answer: 1, why: "Always check facts." },
      { q: "Who is a public reply to a review really for?", options: ["Only the reviewer", "Nobody", "The review site's owner", "Everyone reading the reviews"], answer: 3, why: "Future customers read your replies." },
      { q: "The complaint pattern in this course is:", options: ["Listen, apologize, solve, follow up", "Argue, deny, delete, ignore", "Wait, wait, wait, wait", "Refund everything always"], answer: 0, why: "That pattern turns complaints into trust." },
      { q: "Writing reviews for your own business is:", options: ["A good strategy", "Required", "Deceptive and should never be done", "Fine with AI"], answer: 2, why: "Fake reviews mislead customers." },
      { q: "A review contains threats. You should:", options: ["Threaten back", "Post their address", "Ignore all reviews", "Use the platform's reporting process"], answer: 3, why: "Platforms have processes for abusive content." },
      { q: "How many comments does the course suggest collecting for analysis?", options: ["Exactly 1", "None", "At least 15", "At least 10,000"], answer: 2, why: "Fifteen or more shows real patterns." },
      { q: "A theme is:", options: ["A website design", "A topic that comes up again and again", "A single complaint", "A discount code"], answer: 1, why: "Themes reveal common issues." },
      { q: "Sentiment means:", options: ["Whether a comment is positive, negative or neutral", "How long a comment is", "Who wrote it", "Its date"], answer: 0, why: "Sentiment is the feeling behind the comment." },
      { q: "Top issues should be ranked by:", options: ["Alphabetical order", "Who complained loudest", "How often they come up and how much they hurt", "Random choice"], answer: 2, why: "Frequency and impact show priorities." },
      { q: "The safest way to add customer names to many messages is:", options: ["Use placeholders and merge names in your own email or customer tool", "Paste the full customer list into a general AI tool", "Guess the names", "Post the list publicly"], answer: 0, why: "Your own tool keeps customer data under your control." },
      { q: "You should message customers who:", options: ["Never gave you their contact", "Asked you to stop", "You found online", "Agreed to hear from you"], answer: 3, why: "Consent matters, and opt-outs must be respected." },
      { q: "Each improvement action needs:", options: ["A new logo", "An owner and a measure", "A bigger office", "Nothing"], answer: 1, why: "Owners make it happen; measures show if it worked." },
      { q: "\"You told us, we listened\" is a way to:", options: ["Hide problems", "Show customers what you changed", "Ask for passwords", "Raise prices"], answer: 1, why: "Closing the loop builds loyalty." },
      { q: "After 30 days you should:", options: ["Stop listening to customers", "Delete the plan", "Never check", "Check the measures, keep what worked and pick the next issue"], answer: 3, why: "Improvement is a repeating cycle." }
    ]
  }
};
