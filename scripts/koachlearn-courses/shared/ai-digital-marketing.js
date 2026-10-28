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
  chapters: [
    {
      name: "Chapter 1: Planning and creating content",
      lessons: [
        {
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
          youCanNow: "write a target customer profile and a clear marketing message."
        },
        {
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
          youCanNow: "draft social posts with AI and edit them to be accurate, honest and in your voice."
        },
        {
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
          youCanNow: "create consistent, honest graphics for social posts with a free design tool."
        }
      ],
      check: {
        title: "Knowledge Check 1: Planning and creating content",
        questions: [
          { q: "What is a target customer profile?", options: ["Your bank statement", "A list of competitors", "A description of the specific kind of person your marketing is aimed at", "A social media password"], answer: 2, why: "Marketing works better when it speaks to a specific person." },
          { q: "Which is the clearest marketing message?", options: ["\"Veteran-owned mobile detailing that comes to your driveway in Fayetteville. Book in two minutes.\"", "\"We do stuff.\"", "\"Best ever!!!\"", "\"Call us maybe.\""], answer: 0, why: "It says what, for whom and why, with a next step." },
          { q: "The AI writes \"Voted best detailer in the state\" but that never happened. What do you do?", options: ["Post it anyway", "Make it bigger", "Add a fake award photo", "Remove the claim"], answer: 3, why: "Never publish claims you cannot back up." },
          { q: "What is a call to action?", options: ["A phone ringtone", "The step you want the reader to take, like \"Book now\"", "A legal notice", "A type of font"], answer: 1, why: "It tells the reader what to do next." },
          { q: "What builds the most trust on a graphic?", options: ["AI images of fake happy customers", "Real photos of your own work", "Photos copied from a competitor", "No pictures at all"], answer: 1, why: "Real pictures of real work are honest and convincing." }
        ]
      }
    },
    {
      name: "Chapter 2: Email, honesty rules and results",
      lessons: [
        {
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
          youCanNow: "write a marketing email with AI help that meets the main CAN-SPAM rules."
        },
        {
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
          youCanNow: "spot when marketing needs a disclosure and keep reviews and AI content honest."
        },
        {
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
          youCanNow: "plan, create, check and measure one week of AI-assisted digital marketing."
        }
      ],
      check: {
        title: "Knowledge Check 2: Email, honesty rules and results",
        questions: [
          { q: "Under CAN-SPAM, which must a U.S. marketing email include?", options: ["The customer's Social Security number", "A fake urgent subject line", "No sender name", "A valid physical postal address and a way to opt out"], answer: 3, why: "The FTC lists a physical address and an opt-out among the requirements." },
          { q: "How fast must you honor an unsubscribe request under CAN-SPAM, per the FTC?", options: ["Within 10 business days", "Within one year", "Never", "Only if they call you"], answer: 0, why: "The FTC guide says opt-outs must be honored within 10 business days." },
          { q: "A friend got a free product from you and posts about it. What should their post include?", options: ["Nothing", "A fake five-star review", "A clear disclosure such as \"#ad\" or \"Gifted\"", "Your bank details"], answer: 2, why: "Connections like free products must be disclosed." },
          { q: "Which is honest marketing?", options: ["Having AI write reviews", "Paying for fake reviews", "Reviewing your own business under fake names", "Asking real customers for honest reviews"], answer: 3, why: "Only real reviews from real customers are honest." },
          { q: "What is a conversion?", options: ["Changing a photo's size", "A type of font", "When someone takes the action you want, like booking", "Turning off comments"], answer: 2, why: "Conversions are the real business goal." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: AI Digital Marketing",
    questions: [
      { q: "Digital marketing means:", options: ["Only printing flyers", "Reaching customers online", "Selling door to door", "Running a cash register"], answer: 1, why: "It uses social media, email, websites and search." },
      { q: "Why write a target customer profile?", options: ["So your marketing speaks to a specific person", "To fill time", "Because AI requires it", "To share private data"], answer: 0, why: "Specific marketing works better than general marketing." },
      { q: "A clear message says:", options: ["Only your phone number", "Your life story", "What you offer, who it is for and why choose you", "Nothing specific"], answer: 2, why: "Those three parts make a message clear." },
      { q: "AI suggests three customer types. You should:", options: ["Pick the one that fits real customers and edit it", "Use all three without reading", "Ignore your own knowledge", "Post them as ads"], answer: 0, why: "AI brainstorms; you decide using what you know." },
      { q: "Which is a good mix for a week of posts?", options: ["Five identical offers", "Only memes", "Only your logo", "A tip, behind the scenes, a customer story, an offer and a question"], answer: 3, why: "Variety keeps people interested." },
      { q: "\"Book now\" at the end of a post is a:", options: ["Disclosure", "Call to action", "Template", "Conversion"], answer: 1, why: "It tells the reader the next step." },
      { q: "Before posting an AI-drafted post, check:", options: ["Only the emoji", "Facts, prices, dates and claims", "Nothing", "Your password"], answer: 1, why: "AI can get facts wrong or exaggerate." },
      { q: "In Canva, a template is:", options: ["A legal document", "A paid ad", "A customer list", "A ready-made design you customize"], answer: 3, why: "Templates save time and are sized for each site." },
      { q: "A simple brand uses:", options: ["The same few colors, fonts and your name on every graphic", "New colors every day", "No name at all", "Copied logos"], answer: 0, why: "Consistency makes you recognizable." },
      { q: "Which image is NOT okay to use?", options: ["Your own photo of your work", "A properly licensed image", "A photo you copied from another company's site", "A Canva template element you are allowed to use"], answer: 2, why: "Only use images you have the right to use." },
      { q: "Who should get your marketing emails?", options: ["Every address you can find", "Bought email lists", "Random strangers", "People who agreed to hear from you"], answer: 3, why: "Email people who chose to hear from you." },
      { q: "Which U.S. agency's guide explains CAN-SPAM for businesses?", options: ["The Department of Transportation", "NASA", "The Federal Trade Commission (FTC)", "The Postal Service only"], answer: 2, why: "The FTC publishes the CAN-SPAM compliance guide." },
      { q: "A subject line says \"Your account is suspended\" for a sale email. This is:", options: ["Good marketing", "Misleading and against CAN-SPAM", "Required", "A disclosure"], answer: 1, why: "Subject lines must reflect what the message is about." },
      { q: "If a vendor sends your marketing emails, who is responsible for following CAN-SPAM?", options: ["You still are", "Only the vendor", "Nobody", "The customer"], answer: 0, why: "The FTC says you remain responsible." },
      { q: "\"#ad\" at the start of a post is an example of:", options: ["A call to action", "A template", "A disclosure", "Reach"], answer: 2, why: "It tells readers there is a paid connection." },
      { q: "Using AI to write five-star reviews for your shop is:", options: ["Deceptive and not allowed", "Smart marketing", "Required", "Fine if they sound real"], answer: 0, why: "Fake reviews deceive customers." },
      { q: "Where should you check for current U.S. advertising rules?", options: ["A random comment thread", "Only an AI chat", "A competitor", "The FTC's business guidance pages"], answer: 3, why: "Rules change; the FTC is the official source." },
      { q: "Reach measures:", options: ["How many bought", "How many people saw your post", "Your profit", "Your follower's age"], answer: 1, why: "Reach is how many people saw it." },
      { q: "An offer post's main goal number is usually:", options: ["Saves only", "Clicks or bookings", "Font size", "Number of hashtags"], answer: 1, why: "Offers aim to get people to act." },
      { q: "When asking AI to analyze your results, you should share:", options: ["Customer names and phone numbers", "Your passwords", "Card numbers", "Numbers only, no customer names"], answer: 3, why: "Keep private information out of AI tools." }
    ]
  }
};
