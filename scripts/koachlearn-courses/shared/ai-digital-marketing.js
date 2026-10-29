"use strict";

// Koach Learn course (shared): "AI Digital Marketing". Categories: Veterans (military), Workforce Development, Undeserved Community. Shape and rules: ../README.md; model: ../re-entry/reentry-ai-digital-confidence.js.

module.exports = {
  id: "ai-digital-marketing",
  category: "Veterans (military)",
  name: "AI Digital Marketing",
  skills: "Defining a target customer, Writing posts with AI, Making graphics in Canva, Writing a marketing email that follows the law, Disclosing ads honestly, Reading results",
  outcome: "plan and create one week of digital marketing for a small business with AI help: a target customer profile, five social posts with graphics, one marketing email that follows the CAN-SPAM rules, and a simple way to measure what worked.",
  about: [
    "Digital marketing means reaching customers online: social media, email, websites and search. AI tools can draft posts, suggest ideas and help make graphics in minutes, so a one-person business can market like a bigger one.",
    "This course is for veterans starting a business or looking for marketing work, job seekers building a marketable skill, and community members promoting a local shop, food stand, church or service. You need a phone or computer and free tools such as ChatGPT, Microsoft Copilot or Google Gemini, and Canva.",
    "You will build a real one-week marketing plan for a business you choose. Each lesson takes about five minutes and ends with a \"Try it now\" task. A knowledge check closes each chapter and a 20-question quiz closes the course."
  ],
  finalTask: "For a real or practice small business, put together a one-week marketing kit: a one-paragraph target customer profile, five social posts with captions and Canva graphics checked for accuracy, one marketing email with a clear subject line, physical address and unsubscribe option, and a tracking sheet listing the number you will watch for each post.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Veterans and military spouses who own or are starting a small business, such as a service, trade, food or online shop, and want more customers without hiring a marketing agency.",
    startingPoint: "Use social media and email personally and may have a business page. Most post without a plan, have not used AI or Canva for marketing, and do not know the email and advertising rules.",
    gap: "Small businesses live or die on steady customers, and online marketing takes time owners do not have. Learners need to plan and produce a week of honest, on-target marketing with AI help, follow the CAN-SPAM and FTC rules, and measure results so their effort turns into bookings and sales.",
    constraints: [
      "Reading level: plain words; marketing terms explained the first time",
      "Devices: a phone or computer; a computer is easier for Canva and spreadsheets",
      "Cost: free tools only (an AI assistant, Canva's free plan, Google Sheets or Excel)",
      "Rules: U.S. CAN-SPAM and FTC guidance apply; learners outside the U.S. check their own country's rules",
      "Privacy: no customer names or contact details pasted into AI tools"
    ],
    prerequisites: "None. Learners new to AI assistants can take an introduction to AI course first."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "For a real or practice small business", action: "write a target customer profile and a one-sentence marketing message", standard: "saying who the customer is, what they need, and what you offer, for whom and why you" },
    { id: "O2", condition: "Using an AI assistant and your customer profile", action: "write five social posts of different types, each with a call to action", standard: "with every fact, price and date checked and no claims you cannot prove" },
    { id: "O3", condition: "Using Canva's free plan", action: "create an on-brand graphic for each post", standard: "using the same colors and fonts, few words and only images you have the right to use" },
    { id: "O4", condition: "Given an offer for past customers", action: "write a marketing email that meets the main CAN-SPAM requirements", standard: "with an honest subject line, a physical address and a clear unsubscribe option" },
    { id: "O5", condition: "Given an ad, a review or AI-made content", action: "identify when a disclosure is needed and keep reviews and testimonials honest", standard: "getting at least 4 of 5 cases right" },
    { id: "O6", condition: "After a week of posts", action: "choose one number to track for each post and use the results to plan next week", standard: "with a tracking sheet that has a goal number and a result for every post" }
  ],
  chapters: [
    {
      name: "Chapter 1: Planning and creating content",
      lessons: [
        {
          objectives: ["O1"],
          title: "Knowing your customer and your message",
          minutes: 5,
          goal: "Write a target customer profile and one clear message for a business.",
          text: [
            "Marketing works when it speaks to a specific person. A target customer profile describes your best customer: who they are, what they need, what worries them and where they spend time online.",
            "Then write one clear message: what you offer, who it is for and why they should choose you. Example: \"Veteran-owned mobile detailing that comes to your driveway in Fayetteville. Book in two minutes.\"",
            "AI can help you brainstorm. Ask: \"I run a mobile car detailing business. Describe three types of likely customers and what each one cares about.\" Pick the one that matches the customers you actually have or want, and edit it with what you know."
          ],
          steps: ["Name the business and what it sells.", "Ask an AI assistant to suggest three customer types.", "Choose one and write a short profile: who, needs, worries, where online.", "Write a one-sentence message: what, for whom, why you."],
          words: [["Target customer", "the specific kind of person your marketing is aimed at."], ["Profile", "a short description of a person or group."], ["Message", "the main thing you want customers to know and remember."]],
          slides: [
            { title: "Speak to one person", bullets: ["Who they are and what they need", "What worries them", "Where they spend time online"] },
            { title: "One clear message", bullets: ["What you offer", "Who it is for", "Why choose you"] },
            { title: "Use AI to brainstorm", bullets: ["Ask for three customer types", "Pick one, then edit with what you know"] }
          ],
          tryIt: "Pick a real or practice business. Use an AI assistant to brainstorm customer types, then write a one-paragraph target customer profile and a one-sentence message.",
          youCanNow: "write a target customer profile and a clear marketing message.",
          quickCheck: [
            { objective: "O1", q: "What does a target customer profile describe?", options: ["Every person who uses the internet", "Your best customer: who they are, what they need, what worries them and where they are online", "Your prices for the year", "Your competitors' logos"], answer: 1, why: "A profile describes one specific kind of customer so your marketing speaks to them." },
            { objective: "O1", q: "AI suggests three customer types for your landscaping business. Only one matches who actually calls you. What do you do?", options: ["Use all three in every post", "Pick the most exciting one", "Ignore the AI and post nothing", "Choose the one that matches real customers and edit it with what you know"], answer: 3, why: "Pick the type that matches your real or wanted customers and add what you know." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Writing social media posts with AI",
          minutes: 5,
          goal: "Use AI to draft five posts, then edit them so they are accurate and sound like you.",
          text: [
            "Good posts teach, show or invite. Mix them: a tip (\"3 ways to keep your car's interior clean\"), a behind-the-scenes photo, a customer story (with permission), an offer, and a question that invites comments.",
            "Give the AI your profile and message, then ask: \"Write five short Instagram and Facebook posts for this customer. One tip, one behind the scenes, one customer story, one offer, one question. Friendly tone, under 60 words each, with a call to action.\"",
            "Always edit. Check every fact, price and date. Remove claims you cannot back up, like \"best in the state\". Make it sound like you, and never post a review or result that did not happen."
          ],
          steps: ["Paste your customer profile and message into the AI assistant.", "Ask for five posts of different types with a call to action.", "Check each fact, price and date.", "Cut claims you cannot prove.", "Rewrite in your own voice."],
          words: [["Call to action", "the step you want the reader to take, like \"Book now\" or \"Call today\"."], ["Caption", "the text that goes with a social media picture or video."]],
          slides: [
            { title: "Mix your posts", bullets: ["A tip and a behind-the-scenes look", "A customer story (with permission)", "An offer and a question"] },
            { title: "A strong AI request", bullets: ["Include your profile and message", "Ask for five types, under 60 words", "Ask for a call to action"] },
            { title: "Always edit", bullets: ["Check facts, prices and dates", "Cut claims you cannot prove", "Make it sound like you"] }
          ],
          tryIt: "Ask an AI assistant to draft five posts for your business using the prompt pattern above. Edit each one for facts and voice, and mark what you changed.",
          youCanNow: "draft social posts with AI and edit them to be accurate, honest and in your voice.",
          quickCheck: [
            { objective: "O2", q: "Which post is a \"behind the scenes\" post?", options: ["A photo of your team setting up for a job", "A 20% off coupon", "A question asking followers their favorite color", "A customer's review"], answer: 0, why: "Behind-the-scenes posts show how your work happens." },
            { objective: "O2", q: "An AI-drafted post lists a price you changed last month. What do you do?", options: ["Post it; customers will ask", "Delete the whole post", "Fix the price before posting", "Add \"prices may vary\" and post it"], answer: 2, why: "Always check and correct every fact, price and date before posting." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Making graphics with Canva and AI",
          minutes: 5,
          goal: "Make a clean, on-brand graphic for each post using a free design tool.",
          text: [
            "Canva has a free plan with templates sized for each social site. Search for the post type you need, such as \"Instagram post\", pick a template and replace the words and pictures.",
            "Keep a simple brand: the same two or three colors, one or two fonts and your logo or business name on every graphic. Use few words on the image; the caption carries the details.",
            "Use your own photos when you can; real pictures of your work build trust. If you use AI-generated images, do not make them look like real customers or results you did not deliver, and only use pictures you have the right to use."
          ],
          steps: ["Open Canva and search for the template size you need.", "Pick a template and change the colors to your brand colors.", "Replace the text with a short headline.", "Add your own photo or a properly licensed image.", "Download it and save it with the post's name."],
          words: [["Template", "a ready-made design you change to fit your needs."], ["Brand", "the look and feel that makes your business recognizable."], ["License", "permission to use an image or other work."]],
          slides: [
            { title: "Canva basics", bullets: ["Free plan with social-size templates", "Pick a template, swap words and pictures"] },
            { title: "A simple brand", bullets: ["Same two or three colors", "One or two fonts", "Your name or logo on every graphic"] },
            { title: "Honest images", bullets: ["Your own photos build trust", "No fake customers or results", "Only images you have the right to use"] }
          ],
          sources: [{ name: "Canva", url: "https://www.canva.com/" }],
          tryIt: "Make a Canva graphic for each of your five posts using the same colors and fonts. Use at least one real photo of your work or product.",
          youCanNow: "create consistent, honest graphics for social posts with a free design tool.",
          quickCheck: [
            { objective: "O3", q: "Where should most of the details for a post go?", options: ["Packed onto the graphic", "In tiny print at the bottom of the image", "In a second graphic", "In the caption, with few words on the image"], answer: 3, why: "Keep few words on the image; the caption carries the details." },
            { objective: "O3", q: "You want a picture of a happy customer, but you have none. What is the honest choice?", options: ["Use an AI image made to look like a real customer", "Use a photo of your own work or a properly licensed image", "Copy a photo from another company's site", "Use a stranger's photo from social media"], answer: 1, why: "Use your own photos or images you have the right to use, and do not fake customers." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Planning and creating content",
        questions: [
          { objective: "O1", q: "What is a target customer profile?", options: ["Your bank statement", "A list of competitors", "A description of the specific kind of person your marketing is aimed at", "A social media password"], answer: 2, why: "Marketing works better when it speaks to a specific person." },
          { objective: "O1", q: "Which is the clearest marketing message?", options: ["\"Veteran-owned mobile detailing that comes to your driveway in Fayetteville. Book in two minutes.\"", "\"We do stuff.\"", "\"Best ever!!!\"", "\"Call us maybe.\""], answer: 0, why: "It says what, for whom and why, with a next step." },
          { objective: "O2", q: "The AI writes \"Voted best detailer in the state\" but that never happened. What do you do?", options: ["Post it anyway", "Make it bigger", "Add a fake award photo", "Remove the claim"], answer: 3, why: "Never publish claims you cannot back up." },
          { objective: "O2", q: "What is a call to action?", options: ["A phone ringtone", "The step you want the reader to take, like \"Book now\"", "A legal notice", "A type of font"], answer: 1, why: "It tells the reader what to do next." },
          { objective: "O3", q: "What builds the most trust on a graphic?", options: ["AI images of fake happy customers", "Real photos of your own work", "Photos copied from a competitor", "No pictures at all"], answer: 1, why: "Real pictures of real work are honest and convincing." }
        ]
      }
    },
    {
      name: "Chapter 2: Email, honesty rules and results",
      lessons: [
        {
          objectives: ["O4"],
          title: "Writing a marketing email that follows the law",
          minutes: 6,
          goal: "Draft a marketing email with AI that meets the main U.S. CAN-SPAM requirements.",
          text: [
            "Email reaches people who already chose to hear from you, so it often sells better than social media. Only email people who gave you their address and agreed to hear from you.",
            "In the United States, the CAN-SPAM Act sets rules for commercial email. According to the Federal Trade Commission, you must not use false or misleading header information or subject lines, you must identify the message as an ad, include your valid physical postal address, give a clear way to opt out, and honor opt-outs within 10 business days. You stay responsible even if someone else sends it for you.",
            "Ask AI for a draft: \"Write a short marketing email for [business] offering [deal] to past customers. Honest subject line, friendly tone, one call to action.\" Then add your address and unsubscribe link, and check the facts. Outside the U.S., check your own country's email and privacy rules."
          ],
          steps: ["Ask AI for a short email with an honest subject line and one call to action.", "Check every fact, price and date.", "Make it clear this is an advertisement or offer.", "Add your valid physical postal address.", "Add a clear unsubscribe option and honor requests within 10 business days."],
          words: [["CAN-SPAM Act", "the U.S. law that sets rules for commercial email."], ["Opt out / unsubscribe", "a way for people to stop getting your emails."], ["Subject line", "the short title people see before opening an email."]],
          slides: [
            { title: "Email the right people", bullets: ["Only people who agreed to hear from you"] },
            { title: "CAN-SPAM basics (FTC)", bullets: ["Honest sender info and subject line", "Identify it as an ad", "Include your physical postal address"] },
            { title: "Unsubscribe rules", bullets: ["A clear way to opt out", "Honor it within 10 business days", "You are responsible even if a vendor sends it"] }
          ],
          sources: [{ name: "FTC: CAN-SPAM Act Compliance Guide for Business", url: "https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business" }],
          tryIt: "Use AI to draft a marketing email for your business. Edit it, then check it against the CAN-SPAM list: honest subject line, identified as an ad, physical address, unsubscribe option.",
          youCanNow: "write a marketing email with AI help that meets the main CAN-SPAM rules.",
          quickCheck: [
            { objective: "O4", q: "Who should be on your marketing email list?", options: ["Anyone whose email you can find", "Email addresses you bought online", "People who gave you their address and agreed to hear from you", "Every business in your town"], answer: 2, why: "Only email people who gave you their address and agreed to hear from you." },
            { objective: "O4", q: "Your AI draft has a great offer but no address or unsubscribe link. What do you do before sending?", options: ["Add your valid physical postal address and a clear unsubscribe option", "Send it; those are optional", "Add only your phone number", "Send it from a friend's account instead"], answer: 0, why: "CAN-SPAM requires a valid physical postal address and a clear way to opt out." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Honest marketing: disclosures, reviews and AI",
          minutes: 5,
          goal: "Spot when an ad needs a disclosure and keep reviews and AI content honest.",
          text: [
            "The FTC's Endorsement Guides say that if someone promoting a product has a connection to the brand, such as being paid or getting a free product, it must be disclosed clearly. The FTC suggests simple words like \"Ad:\" or \"#ad\" at the start, or \"Paid post by [brand]\".",
            "Fake reviews are deceptive. Never write reviews for your own business, pay for fake ones or have AI generate them. Ask real customers for honest reviews instead.",
            "Be careful with AI-made content: do not use AI to imitate a real person, invent testimonials or make claims about results you cannot prove. Rules change, so check the FTC's business guidance pages for the current details."
          ],
          words: [["Endorsement", "a message where someone says they like or use a product."], ["Disclosure", "a clear statement of a connection, like \"#ad\" or \"Paid post\"."], ["Testimonial", "a customer's statement about their experience."]],
          slides: [
            { title: "Disclose connections", bullets: ["Paid or given a free product? Say so", "\"Ad:\" or \"#ad\" at the start", "\"Paid post by [brand]\""] },
            { title: "Reviews must be real", bullets: ["No fake or AI-written reviews", "Ask real customers to review honestly"] },
            { title: "AI content rules of thumb", bullets: ["No imitating real people", "No invented testimonials or results", "Check FTC guidance for updates"] }
          ],
          sources: [{ name: "FTC: Endorsement Guides, What People Are Asking", url: "https://www.ftc.gov/business-guidance/resources/ftcs-endorsement-guides-what-people-are-asking" }],
          tryIt: "Review your five posts and email. Mark any that would need a disclosure (for example, a partner paid you or a friend promotes it for free product), and remove any claim or review that is not real.",
          youCanNow: "spot when marketing needs a disclosure and keep reviews and AI content honest.",
          quickCheck: [
            { objective: "O5", q: "When must a person promoting your product disclose it?", options: ["Only if they have over 10,000 followers", "When they have a connection to your brand, such as being paid or getting it free", "Never, if the review is positive", "Only on email"], answer: 1, why: "The FTC says a connection like payment or a free product must be disclosed clearly." },
            { objective: "O5", q: "Your shop has few reviews. A friend offers to have AI write twenty five-star reviews. What do you do?", options: ["Accept, since AI wrote them, not you", "Post only ten of them", "Pay a service to post them instead", "Decline and ask real customers for honest reviews"], answer: 3, why: "Fake reviews are deceptive; ask real customers instead." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Measuring what works and improving",
          minutes: 5,
          goal: "Choose a number to track for each post and use the results to plan next week.",
          text: [
            "Every social platform and email tool shows basic numbers. Reach is how many people saw it. Engagement is likes, comments, shares and saves. Clicks show who went to your link. Conversions are the real goal: bookings, calls, sales or sign-ups.",
            "Pick one main number per post based on its job: a tip post aims for saves and shares, an offer aims for clicks and bookings. Write them in a simple tracking sheet in Google Sheets or Excel.",
            "After a week, look at what did best and do more of it. You can paste your numbers (no customer names) into an AI assistant and ask: \"Which posts did best and what should I try next week?\" You make the final decision."
          ],
          steps: ["Make a sheet with columns: date, post, type, goal number, result.", "Choose one goal number for each post.", "After a week, fill in the results from the platform's insights.", "Ask AI to spot patterns, using numbers only.", "Plan next week: more of what worked."],
          words: [["Reach", "how many people saw your post."], ["Engagement", "likes, comments, shares and saves."], ["Conversion", "when someone takes the action you want, like booking or buying."]],
          slides: [
            { title: "Numbers to know", bullets: ["Reach: how many saw it", "Engagement: likes, comments, shares", "Clicks and conversions"] },
            { title: "One goal per post", bullets: ["Tip post: saves and shares", "Offer post: clicks and bookings"] },
            { title: "Learn and adjust", bullets: ["Track in a simple sheet", "Ask AI to spot patterns, numbers only", "Do more of what worked"] }
          ],
          tryIt: "Final task: build a tracking sheet for your five posts and your email, with one goal number each. Together with your profile, posts, graphics and email, this completes your one-week marketing kit.",
          youCanNow: "plan, create, check and measure one week of AI-assisted digital marketing.",
          quickCheck: [
            { objective: "O6", q: "What is engagement?", options: ["Likes, comments, shares and saves", "How many people saw the post", "The cost of the post", "The number of followers you started with"], answer: 0, why: "Engagement counts how people interact with a post; reach is how many saw it." },
            { objective: "O6", q: "Your tip posts got the most saves this week, but offers got few clicks. What is a sensible next step?", options: ["Stop posting for a month", "Delete the tip posts", "Plan more tip posts and try a new offer next week", "Post the same offer five times"], answer: 2, why: "Do more of what worked and adjust what did not." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Email, honesty rules and results",
        questions: [
          { objective: "O4", q: "Under CAN-SPAM, which must a U.S. marketing email include?", options: ["The customer's Social Security number", "A fake urgent subject line", "No sender name", "A valid physical postal address and a way to opt out"], answer: 3, why: "The FTC lists a physical address and an opt-out among the requirements." },
          { objective: "O4", q: "How fast must you honor an unsubscribe request under CAN-SPAM, per the FTC?", options: ["Within 10 business days", "Within one year", "Never", "Only if they call you"], answer: 0, why: "The FTC guide says opt-outs must be honored within 10 business days." },
          { objective: "O5", q: "A friend got a free product from you and posts about it. What should their post include?", options: ["Nothing", "A fake five-star review", "A clear disclosure such as \"#ad\" or \"Gifted\"", "Your bank details"], answer: 2, why: "Connections like free products must be disclosed." },
          { objective: "O5", q: "Which is honest marketing?", options: ["Having AI write reviews", "Paying for fake reviews", "Reviewing your own business under fake names", "Asking real customers for honest reviews"], answer: 3, why: "Only real reviews from real customers are honest." },
          { objective: "O6", q: "What is a conversion?", options: ["Changing a photo's size", "A type of font", "When someone takes the action you want, like booking", "Turning off comments"], answer: 2, why: "Conversions are the real business goal." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: AI Digital Marketing",
    questions: [
      { objective: "O1", q: "Digital marketing means:", options: ["Only printing flyers", "Reaching customers online", "Selling door to door", "Running a cash register"], answer: 1, why: "It uses social media, email, websites and search." },
      { objective: "O1", q: "Why write a target customer profile?", options: ["So your marketing speaks to a specific person", "To fill time", "Because AI requires it", "To share private data"], answer: 0, why: "Specific marketing works better than general marketing." },
      { objective: "O1", q: "A clear message says:", options: ["Only your phone number", "Your life story", "What you offer, who it is for and why choose you", "Nothing specific"], answer: 2, why: "Those three parts make a message clear." },
      { objective: "O1", q: "AI suggests three customer types. You should:", options: ["Pick the one that fits real customers and edit it", "Use all three without reading", "Ignore your own knowledge", "Post them as ads"], answer: 0, why: "AI brainstorms; you decide using what you know." },
      { objective: "O2", q: "Which is a good mix for a week of posts?", options: ["Five identical offers", "Only memes", "Only your logo", "A tip, behind the scenes, a customer story, an offer and a question"], answer: 3, why: "Variety keeps people interested." },
      { objective: "O2", q: "\"Book now\" at the end of a post is a:", options: ["Disclosure", "Call to action", "Template", "Conversion"], answer: 1, why: "It tells the reader the next step." },
      { objective: "O2", q: "Before posting an AI-drafted post, check:", options: ["Only the emoji", "Facts, prices, dates and claims", "Nothing", "Your password"], answer: 1, why: "AI can get facts wrong or exaggerate." },
      { objective: "O3", q: "In Canva, a template is:", options: ["A legal document", "A paid ad", "A customer list", "A ready-made design you customize"], answer: 3, why: "Templates save time and are sized for each site." },
      { objective: "O3", q: "A simple brand uses:", options: ["The same few colors, fonts and your name on every graphic", "New colors every day", "No name at all", "Copied logos"], answer: 0, why: "Consistency makes you recognizable." },
      { objective: "O3", q: "Which image is NOT okay to use?", options: ["Your own photo of your work", "A properly licensed image", "A photo you copied from another company's site", "A Canva template element you are allowed to use"], answer: 2, why: "Only use images you have the right to use." },
      { objective: "O4", q: "Who should get your marketing emails?", options: ["Every address you can find", "Bought email lists", "Random strangers", "People who agreed to hear from you"], answer: 3, why: "Email people who chose to hear from you." },
      { objective: "O4", q: "Which U.S. agency's guide explains CAN-SPAM for businesses?", options: ["The Department of Transportation", "NASA", "The Federal Trade Commission (FTC)", "The Postal Service only"], answer: 2, why: "The FTC publishes the CAN-SPAM compliance guide." },
      { objective: "O4", q: "A subject line says \"Your account is suspended\" for a sale email. This is:", options: ["Good marketing", "Misleading and against CAN-SPAM", "Required", "A disclosure"], answer: 1, why: "Subject lines must reflect what the message is about." },
      { objective: "O4", q: "If a vendor sends your marketing emails, who is responsible for following CAN-SPAM?", options: ["You still are", "Only the vendor", "Nobody", "The customer"], answer: 0, why: "The FTC says you remain responsible." },
      { objective: "O5", q: "\"#ad\" at the start of a post is an example of:", options: ["A call to action", "A template", "A disclosure", "Reach"], answer: 2, why: "It tells readers there is a paid connection." },
      { objective: "O5", q: "Using AI to write five-star reviews for your shop is:", options: ["Deceptive and not allowed", "Smart marketing", "Required", "Fine if they sound real"], answer: 0, why: "Fake reviews deceive customers." },
      { objective: "O5", q: "Where should you check for current U.S. advertising rules?", options: ["A random comment thread", "Only an AI chat", "A competitor", "The FTC's business guidance pages"], answer: 3, why: "Rules change; the FTC is the official source." },
      { objective: "O6", q: "Reach measures:", options: ["How many bought", "How many people saw your post", "Your profit", "Your follower's age"], answer: 1, why: "Reach is how many people saw it." },
      { objective: "O6", q: "An offer post's main goal number is usually:", options: ["Saves only", "Clicks or bookings", "Font size", "Number of hashtags"], answer: 1, why: "Offers aim to get people to act." },
      { objective: "O6", q: "When asking AI to analyze your results, you should share:", options: ["Customer names and phone numbers", "Your passwords", "Card numbers", "Numbers only, no customer names"], answer: 3, why: "Keep private information out of AI tools." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Pre-Test: What Do You Already Know?",
    from: [
      1,
      2,
      5,
      6,
      8,
      10,
      12,
      14,
      15,
      18
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      {
        name: "Customer profile",
        objective: "O1",
        notYet: "The profile is missing or describes \"everyone\".",
        meets: "One paragraph on who the customer is, their needs, worries and where they are online.",
        exceeds: "Every post and the email clearly speak to this one customer."
      },
      {
        name: "Five posts",
        objective: "O2",
        notYet: "Fewer than five posts, or a post has an unchecked fact or a claim you cannot prove.",
        meets: "Five posts of different types, each with a call to action, with facts checked.",
        exceeds: "The posts sound like the owner, not like a generic AI draft."
      },
      {
        name: "Graphics",
        objective: "O3",
        notYet: "Graphics are missing, crowded with words or use images you do not have the right to use.",
        meets: "A clean graphic for each post with the same brand colors and fonts.",
        exceeds: "Uses real photos of the business's own work."
      },
      {
        name: "Marketing email",
        objective: "O4",
        notYet: "The subject line is misleading, or the address or unsubscribe option is missing.",
        meets: "Honest subject line, clear that it is an offer, physical address and unsubscribe option.",
        exceeds: "Also says how opt-outs will be honored within 10 business days."
      },
      {
        name: "Tracking sheet",
        objective: "O6",
        notYet: "No tracking sheet, or no goal number per post.",
        meets: "A sheet listing one goal number for each post and where to find the result.",
        exceeds: "Results are filled in and next week's plan is based on them."
      }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Businesses that keep posting weekly for at least four weeks after the course (follow-up survey)",
      "Owners who report more bookings, calls or sales from online marketing within 60 days",
      "Businesses that add a CAN-SPAM-compliant footer to every marketing email"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A phone or computer with internet",
      "A free AI assistant (ChatGPT, Microsoft Copilot or Google Gemini) and Canva's free plan",
      "Google Sheets or Excel for the tracking sheet",
      "A few real photos of the business's work, if available",
      "About 60 minutes for lessons and checks, plus a week to post and track"
    ],
    facilitatorNotes: [
      "Take the pre-test together, then do one chapter per session; demonstrate a prompt and a Canva template on a shared screen.",
      "Have learners use their own business, or a practice business, so the kit is ready to use.",
      "Review each email for an honest subject line, address and unsubscribe option before anyone sends it.",
      "Remind learners never to paste customer names or contact details into AI tools.",
      "Score the final kit with the rubric, and give feedback on one Not yet row at a time."
    ]
  }
};
