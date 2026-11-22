"use strict";

// Koach Learn course: Entrepreneurs -> "AI Marketing and Content Creation". Skill-building course in the shape of re-entry/reentry-ai-digital-confidence.js (see scripts/koachlearn-courses/README.md).

module.exports = {
  id: "entrepreneurs-ai-marketing-content",
  category: "Entrepreneurs",
  name: "AI Marketing and Content Creation",
  skills: "Describing your ideal customer, Writing a clear offer, Planning a month of content, Making posts and graphics with AI, Writing a marketing email that follows the rules",
  outcome: "describe your ideal customer, write a clear offer, and use AI to plan and create a month of social posts and one marketing email that are honest and follow US advertising and email rules.",
  about: [
    "This course is for business owners who know they should be marketing but do not have the time, the money for an agency, or the ideas. AI can help with all three if you give it the right direction.",
    "You will describe the customer you want, write an offer that speaks to them, plan a month of content, make posts and graphics with free tools like ChatGPT, Copilot, Gemini and Canva, and write a marketing email. You will also learn the basic US rules: ads must be truthful, paid endorsements must be disclosed, fake reviews are banned, and marketing emails must follow the CAN-SPAM Act.",
    "Each lesson takes about five minutes and ends with a task for your own business. There is a knowledge check after each chapter and a 20-question quiz at the end. This course explains rules in plain words; it is not legal advice."
  ],
  finalTask: "Create a one-month marketing pack for your business: a one-paragraph ideal-customer profile, a one-sentence offer, a 12-post content calendar, three finished posts with graphics, and one marketing email that has an honest subject line, your physical address and a working unsubscribe line.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "US small business owners who know they should market but have little time, no agency budget and few ideas, such as bakers, cleaners, salons, trades and online sellers.",
    startingPoint: "Post on social media now and then and may have a customer email list. Few have a written customer profile, an offer or a content plan, and many do not know the FTC and CAN-SPAM basics.",
    gap: "Random posts reach the wrong people, and AI can easily produce false claims, fake-looking results or emails that break US rules. Owners need to aim marketing at a real customer, plan a month of honest content and send email that follows the rules, so marketing brings in business without legal or trust problems.",
    constraints: [
      "Plain words; rules explained simply and not as legal advice",
      "Devices: a phone or computer with a free AI assistant and Canva",
      "Time: about five minutes per lesson plus making posts for the owner's own business",
      "Ads must be truthful, paid endorsements disclosed, fake reviews banned, and emails must follow CAN-SPAM",
      "Customer stories and photos are used only with permission"
    ],
    prerequisites: "\"Introduction to AI for Entrepreneurs\". \"AI Tools Every Entrepreneur Should Know\" helps with Canva."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Using AI and at least one real customer conversation or sales record", action: "write a one-paragraph profile of your ideal customer", standard: "with every guess checked against real people" },
    { id: "O2", condition: "Given your customer profile", action: "write a one-sentence offer that says who it is for, what they get and why it matters", standard: "with every claim true and provable" },
    { id: "O3", condition: "Given your offer", action: "create a 12-post content calendar for one month with AI", standard: "with a mix of post types on one or two platforms your customers use, saved with dates" },
    { id: "O4", condition: "Given three calendar ideas", action: "make finished posts with edited AI captions and Canva graphics", standard: "using real photos where possible and never faking results" },
    { id: "O5", condition: "When asking for reviews or working with paid promoters", action: "write a review request and disclosures that follow FTC rules", standard: "asking all customers, offering no reward for good ratings and disclosing every paid connection" },
    { id: "O6", condition: "Using AI to draft a marketing email", action: "check the email against the CAN-SPAM basics", standard: "with an honest subject line, your physical address and a working unsubscribe line" }
  ],
  chapters: [
    {
      name: "Chapter 1: Know who you are talking to",
      lessons: [
        {
          objectives: ["O1"],
          title: "Describing your ideal customer",
          minutes: 5,
          goal: "Write a one-paragraph profile of the customer you most want.",
          text: [
            "Marketing to \"everyone\" reaches no one. Your ideal customer is the person who needs what you sell, can pay for it, and is easy for you to reach. A home bakery's ideal customer might be \"busy parents within 10 miles who order birthday cakes two to four times a year.\"",
            "AI can help you think it through. Tell it what you sell and who buys now, then ask: \"Help me describe my ideal customer: their situation, their biggest problem, what they worry about before buying, and where they spend time online.\"",
            "AI is guessing from general patterns. Check its guesses against real customers: look at who has bought from you, read their messages, and ask three customers why they chose you."
          ],
          steps: ["Write what you sell and who has bought from you so far.", "Ask AI to help describe the ideal customer's situation, problem, worries and where they spend time.", "Check the guesses with three real customers or your sales records.", "Write a one-paragraph profile."],
          words: [["Ideal customer", "the person who most needs what you sell, can pay, and is easy to reach."], ["Profile", "a short description of a type of customer."]],
          slides: [
            { title: "\"Everyone\" is not a customer", bullets: ["Needs what you sell", "Can pay for it", "Is easy for you to reach"] },
            { title: "Ask AI to help describe", bullets: ["Their situation and biggest problem", "What worries them before buying", "Where they spend time online"] },
            { title: "Check with real people", bullets: ["Look at who already bought", "Ask three customers why they chose you", "Then write your profile"] }
          ],
          tryIt: "Use an AI assistant to draft your ideal-customer profile, then check it against at least one real customer conversation or your sales records. Save the final paragraph.",
          youCanNow: "describe the customer your marketing is for, checked against real people.",
          quickCheck: [
            { objective: "O1", q: "What is an ideal-customer profile?", options: ["A short description of the customer you most want to reach", "A list of every person in your town", "Your competitor's customer list", "A customer's private contact details"], answer: 0, why: "A profile describes the person your marketing is aimed at." },
            { objective: "O1", q: "AI says your customers mostly use one app, but your sales records show otherwise. What do you do?", options: ["Trust AI", "Go with what your real records show", "Use every app", "Stop marketing"], answer: 1, why: "Real customers and records beat AI's guesses." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Writing a clear, honest offer",
          minutes: 5,
          goal: "Write a one-sentence offer that says who it is for, what they get and why it matters.",
          text: [
            "An offer answers three questions fast: Who is this for? What do they get? Why should they care? Example: \"Busy parents in Decatur: custom birthday cakes delivered to your door, so the party is one less thing to worry about.\"",
            "Give AI your customer profile and ask: \"Write five one-sentence offers for this customer. Plain words, no hype.\" Pick the best and edit it in your own voice.",
            "Keep it honest. In the US the FTC says ads must be truthful, not misleading, and backed by evidence. Do not say \"best in town\", \"guaranteed results\" or \"AI-powered\" unless it is true and you can prove it."
          ],
          steps: ["Paste your customer profile into an AI assistant.", "Ask for five one-sentence offers in plain words.", "Choose one and edit it to sound like you.", "Remove any claim you cannot prove."],
          words: [["Offer", "what you are selling, who it is for and why it matters, said simply."], ["Claim", "something your ad says is true."]],
          slides: [
            { title: "An offer answers three questions", bullets: ["Who is it for?", "What do they get?", "Why should they care?"] },
            { title: "Let AI give you options", bullets: ["Paste your customer profile", "Ask for five one-sentence offers", "Choose one and edit in your voice"] },
            { title: "Keep it honest", bullets: ["FTC: ads must be truthful and not misleading", "Claims need evidence", "No \"guaranteed\" or \"best\" you cannot prove"] }
          ],
          sources: [{ name: "FTC: Advertising and Marketing Basics", url: "https://www.ftc.gov/business-guidance/advertising-marketing/advertising-marketing-basics" }],
          tryIt: "Ask AI for five offers based on your customer profile, choose one, edit it, and check that every claim in it is true and provable.",
          youCanNow: "write a short, honest offer that speaks to your ideal customer.",
          quickCheck: [
            { objective: "O2", q: "What must every claim in your offer be?", options: ["As big as possible", "Copied from a competitor", "True and provable", "Written by AI only"], answer: 2, why: "FTC rules require truthful, backed-up claims." },
            { objective: "O2", q: "AI writes \"the fastest service in town\" but you have no proof. What do you do?", options: ["Keep it", "Add an exclamation mark", "Put it in small print", "Remove it or replace it with something you can prove"], answer: 3, why: "Claims you cannot back up should not go in your offer." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Planning a month of content",
          minutes: 5,
          goal: "Use AI to build a 12-post content calendar for one month.",
          text: [
            "Posting three times a week for a month is 12 posts. A simple mix keeps it interesting: teach something useful, show your work or your team, share a customer story (with permission), and make your offer.",
            "Ask AI: \"Make a 12-post content calendar for [business] for [customer]. Mix: 4 helpful tips, 3 behind-the-scenes, 2 customer stories, 3 offer posts. Give each a date, a one-line idea and the platform.\"",
            "Choose platforms where your customer already spends time (from your profile). It is better to post well on one or two platforms than poorly on five."
          ],
          steps: ["Choose one or two platforms where your customer spends time.", "Ask AI for a 12-post calendar with a mix of post types.", "Edit ideas that do not fit your business.", "Put the calendar in a spreadsheet or document with dates."],
          words: [["Content calendar", "a plan that lists what you will post and when."], ["Platform", "a social media site or app, like Facebook, Instagram, TikTok or LinkedIn."]],
          slides: [
            { title: "12 posts = 3 a week for a month", bullets: ["Helpful tips", "Behind the scenes", "Customer stories (with permission)", "Your offer"] },
            { title: "Ask AI for the calendar", bullets: ["Business + customer + mix of post types", "Date, one-line idea and platform for each"] },
            { title: "Pick your platforms", bullets: ["Where your customer already is", "One or two done well beats five done poorly"] }
          ],
          tryIt: "Have AI build your 12-post calendar, edit it to fit your business, and save it with dates in a spreadsheet or document.",
          youCanNow: "plan a month of varied content for the platforms your customers use.",
          quickCheck: [
            { objective: "O3", q: "What does a good content mix include?", options: ["Tips, behind-the-scenes, customer stories and offers", "Only sales offers", "Only memes", "The same post every day"], answer: 0, why: "A mix keeps people interested and builds trust." },
            { objective: "O3", q: "Your customers are mostly on one platform. Where do you post?", options: ["On every platform at once", "Start where your customers already are", "Only on a new platform", "Nowhere until you have more time"], answer: 1, why: "One or two platforms where customers already are is enough to start." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Know who you are talking to",
        questions: [
          { objective: "O1", q: "Which is the best ideal-customer description for a home bakery?", options: ["Everyone who eats", "Busy parents within 10 miles who order birthday cakes a few times a year", "People on the internet", "Other bakeries"], answer: 1, why: "It names a specific person, need and reach." },
          { objective: "O1", q: "AI guessed what your customers worry about. What should you do?", options: ["Ignore your customers", "Trust it fully", "Post it as fact", "Check it against real customers or sales records"], answer: 3, why: "AI guesses from general patterns; real customers confirm." },
          { objective: "O2", q: "An offer should answer which three questions?", options: ["Who is it for, what do they get, why should they care", "How old are you, where do you live, what is your password", "What is the weather, the time, the date", "Who are your competitors, what do they charge, where are they"], answer: 0, why: "Those three make an offer clear." },
          { objective: "O2", q: "AI wrote \"Guaranteed results or your money back\" in your offer, but you do not offer refunds. What do you do?", options: ["Make it bigger", "Keep it because it sounds good", "Remove it", "Add \"AI-powered\" too"], answer: 2, why: "Ads must be truthful; remove claims you cannot keep." },
          { objective: "O3", q: "How many platforms should a small business start with?", options: ["None", "Every platform that exists", "One or two where its customers already are", "Only ones its competitors avoid"], answer: 2, why: "Doing one or two well beats spreading thin." }
        ]
      }
    },
    {
      name: "Chapter 2: Create, publish and follow the rules",
      lessons: [
        {
          objectives: ["O4"],
          title: "Making posts and graphics with AI",
          minutes: 5,
          goal: "Turn calendar ideas into finished posts with captions and graphics.",
          text: [
            "For each post, ask a chat assistant for a caption: \"Write an Instagram caption for this idea: [idea]. For [customer]. Friendly, under 80 words, one question to invite comments, and a call to action.\" Ask for two or three versions and pick one.",
            "Make the graphic in Canva from a template, using your brand colors. Use your own photos when you can; real photos of your work build trust. If you use an AI-generated image, check it for errors and never make it look like a real customer or a real result you did not deliver.",
            "Under US Copyright Office guidance, purely AI-generated material is not protected by copyright, while your own creative choices and edits can be. If owning your logo or main brand art matters, have a human designer involved and talk to a lawyer."
          ],
          steps: ["Pick a post from your calendar.", "Ask AI for two or three caption versions and choose one.", "Make the graphic in Canva from a template, with your own photo if you can.", "Check spelling, facts and images.", "Save the post ready to publish."],
          words: [["Caption", "the text that goes with a social media post."], ["Copyright", "the legal right to control copying of a creative work."]],
          slides: [
            { title: "Caption with AI", bullets: ["Give the idea and the customer", "Ask for 2-3 short versions", "Include a question and a call to action"] },
            { title: "Graphic in Canva", bullets: ["Start from a template", "Your brand colors", "Your own photos build trust"] },
            { title: "AI images: be careful", bullets: ["Check for errors", "Never fake a customer or a result"] },
            { title: "Copyright and AI", bullets: ["Purely AI-made material is not protected", "Your own creative edits can be", "For logos, involve a designer and a lawyer"] }
          ],
          sources: [{ name: "US Copyright Office: Copyright and Artificial Intelligence", url: "https://www.copyright.gov/ai/" }, { name: "US Copyright Office: Part 2 Copyrightability report announcement", url: "https://www.copyright.gov/newsnet/2025/1060.html" }],
          tryIt: "Turn three ideas from your calendar into finished posts: an AI-helped caption you edited, and a Canva graphic with your own photo where possible.",
          youCanNow: "make finished social posts with AI captions and graphics, without faking results.",
          quickCheck: [
            { objective: "O4", q: "What makes a strong caption request to AI?", options: ["Just \"write a caption\"", "Your password", "The idea, the customer, the length and a call to action", "A competitor's caption to copy"], answer: 2, why: "Specific direction gives a caption you can use." },
            { objective: "O4", q: "AI makes a perfect before-and-after photo of a kitchen you did not clean. What do you do?", options: ["Post it as your work", "Post it without a caption", "Edit it slightly and post it", "Do not use it; use a real photo of your work"], answer: 3, why: "Images must not suggest results you did not deliver." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Reviews, testimonials and endorsements: the rules",
          minutes: 5,
          goal: "Use reviews and paid promotions in a way that follows FTC rules.",
          text: [
            "Real customer reviews are powerful marketing. Fake ones are illegal. The FTC's rule on fake reviews bans creating, buying or selling fake reviews and testimonials, including AI-generated reviews that pretend to come from people who do not exist. It also bans offering a reward only for positive reviews.",
            "You CAN ask happy and unhappy customers alike to leave an honest review, and you can share real reviews with permission. Do not use AI to write reviews, and do not edit a review to change its meaning.",
            "If you pay or give free products to someone to promote you, the connection must be disclosed clearly, such as \"#ad\" or \"Sponsored\" at the start of the post, and in the video itself for videos. You are responsible for what your promoters say for you."
          ],
          steps: ["Ask all customers for honest reviews, not just happy ones.", "Share real reviews only with permission and without changing their meaning.", "Never use AI to write reviews.", "Make anyone you pay or gift disclose it clearly, like \"#ad\" at the start."],
          words: [["Testimonial", "a customer's statement about your business used in marketing."], ["Endorsement", "a message that people will think shows someone else's honest opinion, like an influencer's post."], ["Disclose", "tell people clearly."]],
          slides: [
            { title: "Fake reviews are banned", bullets: ["No buying, selling or writing fake reviews", "Includes AI-generated fake reviews", "No rewards only for positive reviews"] },
            { title: "What you can do", bullets: ["Ask every customer for an honest review", "Share real reviews with permission", "Do not change a review's meaning"] },
            { title: "Paid or gifted promotion", bullets: ["Must be disclosed clearly", "\"#ad\" or \"Sponsored\" at the start", "In the video itself for videos"] }
          ],
          sources: [{ name: "FTC: Final rule banning fake reviews and testimonials (press release)", url: "https://www.ftc.gov/news-events/news/press-releases/2024/08/federal-trade-commission-announces-final-rule-banning-fake-reviews-testimonials" }, { name: "FTC: Endorsement Guides, What People Are Asking", url: "https://www.ftc.gov/business-guidance/resources/ftcs-endorsement-guides-what-people-are-asking" }],
          tryIt: "Use AI to draft a short, honest message asking recent customers for a review (not just happy ones, and no reward for a good rating). Edit and save it.",
          youCanNow: "collect and use reviews and paid promotions the honest, legal way.",
          quickCheck: [
            { objective: "O5", q: "Which review request follows FTC rules?", options: ["Asking all recent customers for an honest review", "Offering a discount only for five-star reviews", "Writing reviews yourself", "Asking only happy customers"], answer: 0, why: "Asking everyone for honest reviews, with no reward for good ratings, is allowed." },
            { objective: "O5", q: "A friend gets free products to post about your shop. What do you ask them to do?", options: ["Hide that they got anything", "Clearly disclose it, such as \"#ad\" at the start", "Post only in the comments", "Use a fake name"], answer: 1, why: "Paid or gifted connections must be clearly disclosed." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Writing a marketing email that follows CAN-SPAM",
          minutes: 5,
          goal: "Write a marketing email with AI that meets the CAN-SPAM basics.",
          text: [
            "Email reaches people who already know you. Ask AI: \"Write a short marketing email to past customers of [business] about [offer]. Friendly, under 150 words, one clear call to action, and three honest subject line options.\"",
            "In the US, the CAN-SPAM Act covers commercial email. The FTC's guide lists the basics: accurate \"From\" information, a subject line that is not deceptive, making clear it is an ad, your valid physical postal address, and a clear way to opt out. You must honor opt-out requests within 10 business days. Penalties can be large per email, so check the FTC page.",
            "Only email people who gave you their address and agreed to hear from you, and use an email service that handles unsubscribes for you. Other countries have their own rules; check them if you email customers abroad."
          ],
          steps: ["Ask AI for the email and three honest subject lines.", "Check every fact and claim.", "Make sure it shows your business name, your physical address and an unsubscribe link.", "Send only to people who agreed to hear from you.", "Honor opt-outs within 10 business days."],
          words: [["CAN-SPAM Act", "the US law with rules for commercial (marketing) email."], ["Opt out", "ask to stop getting messages; unsubscribe."]],
          slides: [
            { title: "Write it with AI", bullets: ["Short, friendly, one call to action", "Three honest subject lines to choose from"] },
            { title: "CAN-SPAM basics (FTC)", bullets: ["Accurate From line, honest subject", "Make clear it is an ad", "Your physical postal address", "A clear way to opt out"] },
            { title: "Opt-outs", bullets: ["Honor within 10 business days", "Use an email service that handles unsubscribes"] },
            { title: "Only email people who agreed", bullets: ["Past customers and sign-ups", "Other countries have their own rules"] }
          ],
          sources: [{ name: "FTC: CAN-SPAM Act Compliance Guide for Business", url: "https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business" }],
          tryIt: "Final task: write your marketing email with AI, check it against the CAN-SPAM basics (honest subject, ad identified, address, unsubscribe), and put it together with your profile, offer, calendar and three posts as your one-month marketing pack.",
          youCanNow: "plan, create and send honest marketing that follows US advertising and email rules.",
          quickCheck: [
            { objective: "O6", q: "What must a CAN-SPAM marketing email include?", options: ["A coupon", "A photo", "A valid physical postal address", "Your home phone number"], answer: 2, why: "CAN-SPAM requires a valid physical postal address." },
            { objective: "O6", q: "You bought a list of email addresses from a stranger. What do you do?", options: ["Email them all", "Email half of them", "Add them to your newsletter quietly", "Do not use it; email only people who agreed"], answer: 3, why: "Send marketing email to people who gave you their address and agreed." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Create, publish and follow the rules",
        questions: [
          { objective: "O4", q: "Which photo builds the most trust in a post?", options: ["A real photo of your own work", "An AI image of a fake happy customer", "A competitor's photo", "A blurry stock image"], answer: 0, why: "Real photos of real work build trust; fake customers mislead." },
          { objective: "O4", q: "According to the US Copyright Office, purely AI-generated material is:", options: ["Automatically trademarked", "Always owned by you", "Owned by your customer", "Not protected by copyright"], answer: 3, why: "Copyright protects human authorship; your own creative edits can be protected." },
          { objective: "O5", q: "Can you use AI to write customer reviews for your business?", options: ["Yes, if they sound real", "No, fake reviews are banned by the FTC", "Yes, if you post them slowly", "Only on weekends"], answer: 1, why: "The FTC rule bans fake reviews, including AI-generated ones." },
          { objective: "O5", q: "You gave an influencer free products to post about you. What must happen?", options: ["The connection must be clearly disclosed, like \"#ad\" at the start", "Nothing", "Hide it in the comments", "Put it at the end of a long caption"], answer: 0, why: "Material connections must be disclosed clearly and conspicuously." },
          { objective: "O6", q: "Under CAN-SPAM, how quickly must you honor an unsubscribe request?", options: ["Never", "Within one year", "Within 10 business days", "Only if they ask twice"], answer: 2, why: "The FTC guide says opt-outs must be honored within 10 business days." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: AI Marketing and Content Creation",
    questions: [
      { objective: "O1", q: "Your ideal customer is someone who:", options: ["Lives anywhere in the world", "Needs what you sell, can pay, and is easy to reach", "Already works for you", "Is your competitor"], answer: 1, why: "That is the definition used in the course." },
      { objective: "O1", q: "Which AI request helps describe your ideal customer?", options: ["\"Find their home addresses.\"", "\"Write my taxes.\"", "\"Make up reviews.\"", "\"Describe their situation, biggest problem, worries and where they spend time online.\""], answer: 3, why: "Those questions build a useful profile." },
      { objective: "O1", q: "After AI drafts a customer profile, you should:", options: ["Sell it", "Post it publicly", "Never change it", "Check it against real customers"], answer: 3, why: "AI guesses; real customers confirm." },
      { objective: "O2", q: "Which is a clear offer?", options: ["\"We do stuff.\"", "\"Busy parents in Decatur: custom birthday cakes delivered, so the party is one less worry.\"", "\"Best ever, guaranteed!\"", "\"Call us.\""], answer: 1, why: "It says who, what and why." },
      { objective: "O2", q: "Under FTC rules, ad claims must be:", options: ["Written by AI", "Funny", "Truthful, not misleading and backed by evidence", "Very long"], answer: 2, why: "This is the basic truth-in-advertising standard." },
      { objective: "O2", q: "Should you call your service \"AI-powered\" if it does not use AI?", options: ["No, that is a false claim", "Yes, it sounds modern", "Only in small print", "Only on social media"], answer: 0, why: "False AI claims are deceptive advertising." },
      { objective: "O3", q: "A 12-post calendar for one month is about:", options: ["Twelve posts a day", "One post a month", "Three posts a week", "One post a year"], answer: 2, why: "12 posts over four weeks is three a week." },
      { objective: "O3", q: "A good content mix includes:", options: ["Tips, behind-the-scenes, customer stories and offers", "Only sales posts", "Only memes", "Only competitor news"], answer: 0, why: "A mix keeps followers interested." },
      { objective: "O3", q: "Customer stories should be shared:", options: ["Without asking", "With the customer's permission", "With their phone number", "Only if AI wrote them"], answer: 1, why: "Permission respects customers and avoids problems." },
      { objective: "O4", q: "A good caption request includes:", options: ["Someone else's caption", "Your bank details", "Only one word", "The idea, the customer, the length and a call to action"], answer: 3, why: "Clear details get a usable caption." },
      { objective: "O4", q: "When using an AI-generated image, you must not:", options: ["Make it look like a real result you did not deliver", "Check it for errors", "Use your brand colors", "Add your logo"], answer: 0, why: "Fake results mislead customers." },
      { objective: "O4", q: "Who can help if owning your logo artwork is important?", options: ["Nobody", "Only an AI image tool", "A random follower", "A human designer and a lawyer"], answer: 3, why: "Purely AI-made art is not protected by copyright." },
      { objective: "O5", q: "The FTC rule on fake reviews also bans:", options: ["Thanking customers", "Asking customers for honest reviews", "Offering rewards only for positive reviews", "Replying to reviews"], answer: 2, why: "Rewards conditioned on positive sentiment are banned." },
      { objective: "O5", q: "Which review practice is allowed?", options: ["Buying 50 five-star reviews", "Asking all customers for an honest review", "Writing reviews with AI", "Editing a bad review to sound good"], answer: 1, why: "Honest reviews from real customers are fine." },
      { objective: "O5", q: "Where should \"#ad\" go on a paid post?", options: ["Nowhere", "Hidden in the comments", "At the very end of a long caption", "At the start, where people will see it"], answer: 3, why: "Disclosures must be easy to notice." },
      { objective: "O5", q: "For a paid video, the disclosure should be:", options: ["Only in a link", "Only in the description", "In the video itself", "Not needed"], answer: 2, why: "The FTC says disclosures belong in the video." },
      { objective: "O6", q: "CAN-SPAM requires marketing emails to include:", options: ["A valid physical postal address", "Your bank account number", "A customer's address", "Your password"], answer: 0, why: "A physical address is one of the basics." },
      { objective: "O6", q: "A marketing email subject line must be:", options: ["In all capital letters", "Not deceptive", "A secret", "Written by AI"], answer: 1, why: "Deceptive subject lines are not allowed." },
      { objective: "O6", q: "Who should get your marketing emails?", options: ["Every email address you can find", "People who gave you their address and agreed", "Your competitor's customers", "Random people from a bought list"], answer: 1, why: "Email people who agreed to hear from you." },
      { objective: "O6", q: "If you email customers in other countries you should:", options: ["Check that country's rules too", "Assume US rules cover everything", "Stop marketing", "Remove your address"], answer: 0, why: "Each country can have its own email rules." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Pre-Test: What Do You Already Know?",
    from: [
      0,
      3,
      4,
      6,
      9,
      10,
      12,
      14,
      16,
      17
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      {
        name: "Ideal customer",
        objective: "O1",
        notYet: "Too broad, such as \"everyone\", or not checked against real customers.",
        meets: "One paragraph on who they are, their problem and where they spend time, checked against real people.",
        exceeds: "Notes which AI guesses were wrong and fixed."
      },
      {
        name: "Offer",
        objective: "O2",
        notYet: "Missing who, what or why, or includes a claim that cannot be proven.",
        meets: "One sentence with who it is for, what they get and why it matters, all true.",
        exceeds: "Uses the customer's own words from a real conversation."
      },
      {
        name: "Content calendar",
        objective: "O3",
        notYet: "Fewer than 12 posts, no dates, or one post type only.",
        meets: "12 dated posts with a mix of types on one or two platforms.",
        exceeds: "Each post links to the offer or the customer's problem."
      },
      {
        name: "Finished posts",
        objective: "O4",
        notYet: "Captions unedited, or images suggest results not delivered.",
        meets: "Three posts with edited captions, graphics and a call to action, honest images.",
        exceeds: "Uses real photos of the owner's work, with permission for any customer shown."
      },
      {
        name: "Rule-following email",
        objective: "O6",
        notYet: "Missing an honest subject, the address or the unsubscribe line.",
        meets: "Honest subject, identified as an ad, physical address and working unsubscribe.",
        exceeds: "Also notes how unsubscribes will be handled within 10 business days."
      }
    ]
  },
  evaluation: {
    results: [
      "Owners who finish the course and pass the final task (rubric)",
      "Owners who publish at least eight planned posts within 30 days (follow-up survey)",
      "New customer inquiries or sales the owner links to the marketing pack",
      "Learners who start another Koach Learn entrepreneur course within 30 days"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A phone or computer with a free AI assistant and a free Canva account",
      "Real photos of your work and one real customer conversation or sales record",
      "A spreadsheet or document for the content calendar",
      "About 60 to 75 minutes in total for lessons, tasks, checks and the marketing pack"
    ],
    facilitatorNotes: [
      "Have owners interview one real customer before Lesson 1 so the profile is grounded.",
      "Review every offer and post in pairs, circling any claim that cannot be proven.",
      "Explain that the course covers basic US rules in plain words and is not legal advice.",
      "Remind owners to get permission before sharing customer stories or photos.",
      "Score the marketing pack with the rubric, one Not yet row at a time."
    ]
  }
};
