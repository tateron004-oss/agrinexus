"use strict";

// Koach Learn course: Entrepreneurs (bonus) -> "AI-Powered eCommerce". Skill-building course in the shape of re-entry/reentry-ai-digital-confidence.js (see scripts/koachlearn-courses/README.md).

module.exports = {
  id: "entrepreneurs-ai-ecommerce",
  category: "Entrepreneurs",
  name: "AI-Powered eCommerce",
  skills: "Researching a product niche, Writing product listings with AI, Making product images, Setting shipping and returns policies, Answering customers with AI help, Using email and reviews the legal way",
  outcome: "research a product niche, use AI to write honest product listings and make clean product images, set shipping and returns policies that follow the FTC's mail order rule, and set up AI-assisted customer replies, follow-up emails and review requests that follow US rules.",
  about: [
    "Selling online is easier to start than ever: you can sell through your own store (on platforms like Shopify, Square Online or Wix), on marketplaces (Etsy, Amazon, eBay), or on social shops. AI can help with almost every step, from finding a niche to writing listings to answering customers.",
    "This course is for people starting or growing an online shop. In Chapter 1 you will research a niche, write listings and create product images with AI. In Chapter 2 you will set shipping and return policies, handle customer questions, and use email and reviews to grow, following US rules from the FTC.",
    "Each lesson takes about five minutes with a hands-on task. There is a knowledge check after each chapter and a 20-question quiz at the end. Platform fees and features change often, so check each platform's own pricing and help pages before choosing."
  ],
  finalTask: "Build a launch kit for one product line: a one-paragraph niche summary with evidence of demand, three finished product listings (title, description, key details) with clean images, written shipping and returns policies with shipping times you can really meet, five AI-assisted customer reply templates, and one follow-up email plus a review request that follow CAN-SPAM and the FTC's review rules.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "People starting or growing a small online shop in the US: makers, resellers and side-business owners selling through their own store, a marketplace or a social shop.",
    startingPoint: "Can use a phone or computer, browse online shops and type into a free AI assistant. Little experience researching demand, writing listings or writing store policies.",
    gap: "New sellers often guess at what to sell, copy AI text that makes untrue claims, and promise shipping times they cannot meet. Learners need to use AI to work faster while staying honest with buyers and following FTC rules, so they avoid refunds, bad reviews and legal trouble.",
    constraints: [
      "Reading level: plain words and short sentences",
      "Devices: a phone or computer with internet; a phone camera for product photos",
      "Time: about 5-minute lessons that fit around running a business",
      "Rules: FTC mail order rule, FTC review rules and CAN-SPAM apply to US sellers",
      "Privacy: never paste a customer's address, card or order details into an AI tool"
    ],
    prerequisites: "None. Learners new to AI tools can take \"Introduction to AI and Digital Confidence\" first."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Using an AI assistant and a real marketplace", action: "choose a product niche and show evidence that people are already buying in it", standard: "with at least three real marketplace examples as evidence" },
    { id: "O2", condition: "Given the real facts about a product", action: "write a product listing with AI help that is clear, searchable and true", standard: "with every claim checked and nothing untrue left in" },
    { id: "O3", condition: "Using a phone camera and an AI editing tool", action: "create product images that show the real product clearly", standard: "with a size photo and no edit that changes how the product looks" },
    { id: "O4", condition: "Using the FTC mail order rule", action: "write shipping and returns policies and a delay message", standard: "with shipping times you can really meet and a refund offer in the delay message" },
    { id: "O5", condition: "Given your shop's most common customer questions", action: "create reply templates with AI help that use only your real policies", standard: "with five checked templates and no customer private details shared with the AI" },
    { id: "O6", condition: "Using CAN-SPAM and the FTC review rules", action: "write a follow-up email and a review request", standard: "with an address, an opt-out and no fake or paid-for reviews" }
  ],
  chapters: [
    {
      name: "Chapter 1: Set up products that sell",
      lessons: [
        {
          objectives: ["O1"],
          title: "Researching a product niche",
          minutes: 5,
          goal: "Choose a product niche and check that people are already buying.",
          text: [
            "A niche is a specific group of buyers with a specific need: \"handmade dog collars for large breeds\", \"natural hair-care kits for kids\", \"gardening tools for small balconies\". Niches are easier to win than general categories.",
            "Use AI to brainstorm: \"I can make or source [products]. Suggest ten niches, the buyer for each, and what problem the product solves.\" Then check real demand yourself: search the marketplace for similar products, look at how many reviews top sellers have, read their 3-star reviews for complaints you could fix, and look at search suggestions.",
            "AI cannot see live sales data reliably and may invent numbers. Use it for ideas and questions; use real marketplace pages and your own conversations for evidence."
          ],
          steps: ["Ask AI for ten niche ideas based on what you can make or source.", "Search a marketplace for each top idea.", "Note top sellers' review counts and prices.", "Read 3-star reviews for problems you could fix.", "Pick one niche with clear demand."],
          words: [["Niche", "a specific group of buyers with a specific need."], ["Demand", "how many people want to buy something."], ["Marketplace", "a website where many sellers list products, like Etsy, Amazon or eBay."]],
          slides: [
            { title: "Go specific", bullets: ["\"Dog collars for large breeds\"", "Easier to win than general categories"] },
            { title: "AI for ideas", bullets: ["Ten niches, buyers and problems", "Based on what you can make or source"] },
            { title: "Real evidence", bullets: ["Search the marketplace", "Top sellers' review counts and prices", "3-star reviews show problems to fix"] },
            { title: "Careful", bullets: ["AI may invent sales numbers", "Use real pages for evidence"] }
          ],
          tryIt: "Use AI to brainstorm ten niches, check three of them on a real marketplace, and write a one-paragraph summary of the niche you choose with your evidence of demand.",
          youCanNow: "choose a product niche based on real evidence of demand.",
          quickCheck: [
            { objective: "O1", q: "What counts as evidence that people are already buying in a niche?", options: ["An AI tool saying the niche is popular", "Real marketplace listings with sales and reviews", "Your friends saying they like the idea", "A niche with no sellers at all"], answer: 1, why: "Real listings with sales and reviews show actual demand, while AI can invent numbers." },
            { objective: "O1", q: "You have ten niche ideas from AI. What would you do next?", options: ["Pick the one AI listed first", "Start buying stock for all ten", "Check a few of them on a real marketplace before choosing", "Choose the one with the longest name"], answer: 2, why: "Checking ideas on a real marketplace turns AI brainstorming into evidence." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Writing honest product listings",
          minutes: 5,
          goal: "Write a product title and description with AI that is clear, searchable and true.",
          text: [
            "A good listing answers the buyer's questions before they ask: what it is, who it is for, size, materials, what is included, care instructions and shipping time. The title should use the words buyers search for, without stuffing in keywords.",
            "Give AI the real facts and ask: \"Write a product title under 80 characters and a description with a short intro, 5 bullet points and care instructions. Use only these facts: [facts].\" AI often adds features you did not mention; delete anything that is not true.",
            "The FTC says ads must be truthful and backed by evidence. Do not claim \"organic\", \"handmade\", \"made in USA\", health benefits or \"best seller\" unless it is true and you can prove it. Check each platform's own listing rules too."
          ],
          steps: ["Write down every real fact about the product.", "Ask AI for a title and description using only those facts.", "Delete anything AI added that is not true.", "Check claims like organic, handmade or made in USA.", "Check the platform's listing rules."],
          words: [["Listing", "a product's page on a store or marketplace."], ["Keyword", "a word or phrase buyers type into search."]],
          slides: [
            { title: "Answer buyer questions", bullets: ["What, who for, size, materials", "What is included, care, shipping time"] },
            { title: "AI with your facts only", bullets: ["Title under 80 characters", "Intro, 5 bullets, care instructions", "Delete anything that is not true"] },
            { title: "Claims need proof", bullets: ["\"Organic\", \"handmade\", \"made in USA\"", "Health benefits, \"best seller\"", "Check platform rules too"] }
          ],
          sources: [{ name: "FTC: Advertising and Marketing Basics", url: "https://www.ftc.gov/business-guidance/advertising-marketing/advertising-marketing-basics" }],
          tryIt: "Write the facts for three products and use AI to draft each listing. Remove anything untrue and check every claim.",
          youCanNow: "write clear, searchable product listings that tell the truth.",
          quickCheck: [
            { objective: "O2", q: "What should you give AI when you ask it to draft a listing?", options: ["Only the product's real facts, and ask it to use only those", "A competitor's listing to copy word for word", "Nothing, so it can be creative", "Claims you hope are true"], answer: 0, why: "AI drafts honest listings only when it works from your real facts." },
            { objective: "O2", q: "AI's draft says your mug is \"dishwasher safe\", but you never tested it. What would you do?", options: ["Keep it because buyers like it", "Add \"probably\" in front of it", "Move it to the end of the description", "Remove the claim until you can back it up"], answer: 3, why: "Product claims must be true and backed by evidence before you use them." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Making clean product images",
          minutes: 5,
          goal: "Create product photos and graphics that show the real product clearly.",
          text: [
            "Photos sell products. Use your phone in daylight near a window, on a plain background, and take several angles plus a close-up and a photo showing size (in a hand or next to a common object).",
            "AI tools can help: removing or changing backgrounds, fixing lighting, resizing for each platform, and making lifestyle graphics in tools like Canva. Many marketplaces have rules for the main image, such as a plain background; check the platform's image rules.",
            "Never use AI to make the product look different from what the buyer will get: no fake colors, sizes, features or results. Misleading images can lead to returns, bad reviews, platform penalties and deceptive-advertising problems."
          ],
          steps: ["Shoot in daylight on a plain background.", "Take several angles, a close-up and a size photo.", "Use AI tools to clean backgrounds and resize.", "Check the platform's image rules.", "Compare every image with the real product."],
          words: [["Lifestyle image", "a photo or graphic showing the product being used."], ["Background removal", "an editing tool that cuts the product out of its background."]],
          slides: [
            { title: "Shoot it well", bullets: ["Daylight near a window", "Plain background", "Angles, close-up, size photo"] },
            { title: "AI helps edit", bullets: ["Remove or change backgrounds", "Fix light, resize per platform", "Lifestyle graphics in Canva"] },
            { title: "Never mislead", bullets: ["No fake colors, sizes or features", "Check each platform's image rules"] }
          ],
          tryIt: "Photograph one product (angles, close-up, size), clean up the main image with an AI background tool, and compare it with the real product before using it.",
          youCanNow: "create clean, honest product images with AI editing help.",
          quickCheck: [
            { objective: "O3", q: "Which set of photos shows a product honestly and clearly?", options: ["One dark photo taken at night", "A few angles, a close-up and a size photo", "A single AI-made picture of a similar product", "A photo with a busy background full of other items"], answer: 1, why: "Several angles, a close-up and a size photo show buyers what they will really get." },
            { objective: "O3", q: "An AI tool made the color of your scarf brighter than it really is. What would you do?", options: ["Use it because it looks better", "Use it but add a filter to the others too", "Fix it so the image matches the real product", "Delete all your photos and use stock images"], answer: 2, why: "Images must match the real product, or buyers will be misled and ask for refunds." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Set up products that sell",
        questions: [
          { objective: "O1", q: "Which is a niche?", options: ["Stuff", "Gardening tools for small balconies", "Everything for everyone", "Products"], answer: 1, why: "It names specific buyers and a specific need." },
          { objective: "O1", q: "AI says a product sells 10,000 units a month. What do you do?", options: ["Post the number as fact", "Trust it", "Order 10,000 units", "Check real marketplace evidence; AI may invent numbers"], answer: 3, why: "AI cannot reliably see live sales data." },
          { objective: "O2", q: "AI added \"waterproof\" to your listing, but the product is not. What do you do?", options: ["Delete it", "Keep it", "Make it bold", "Add \"guaranteed\""], answer: 0, why: "Listings must be true." },
          { objective: "O2", q: "Which claim needs proof before you use it?", options: ["\"Ships in a box\"", "\"Blue\"", "\"Made in USA\"", "\"Comes with a card\""], answer: 2, why: "Origin claims like made in USA must be true and provable." },
          { objective: "O3", q: "Which use of AI on product images is NOT okay?", options: ["Fixing the lighting", "Removing the background", "Making the product look bigger than it is", "Resizing for the platform"], answer: 2, why: "Misleading images deceive buyers." }
        ]
      }
    },
    {
      name: "Chapter 2: Serve and grow",
      lessons: [
        {
          objectives: ["O4"],
          title: "Shipping and returns policies",
          minutes: 6,
          goal: "Write shipping and returns policies that follow the FTC's mail order rule.",
          text: [
            "The FTC's Mail, Internet, or Telephone Order Merchandise Rule says: if you state a shipping time, you need a reasonable basis to believe you can meet it; if you do not state one, you must have a reasonable basis to ship within 30 days.",
            "If you cannot ship on time, you must tell the buyer, give a revised date, and offer the choice to cancel for a prompt refund. Refunds for cash, check, money order or third-party credit cards must be made within seven working days after cancellation, and store credit cannot replace a required refund.",
            "AI can draft clear policy pages: \"Write a friendly shipping and returns policy for a small online shop. We ship in 3 to 5 business days. Returns accepted within 30 days for unused items; buyer pays return shipping.\" Then check it matches what you really do, and the platform's rules."
          ],
          steps: ["Decide a shipping time you can really meet.", "Decide your returns rules.", "Ask AI to draft both policies in plain words.", "Check them against the FTC rule and your platform's rules.", "Write a delay message template that offers cancel-and-refund."],
          words: [["Mail order rule", "the FTC rule on shipping times, delay notices and refunds for orders by mail, internet or phone."], ["Revised date", "a new shipping date you give a buyer after a delay."]],
          slides: [
            { title: "Shipping time (FTC rule)", bullets: ["Stated time: reasonable basis to meet it", "No stated time: ship within 30 days"] },
            { title: "Delays", bullets: ["Tell the buyer, give a revised date", "Offer cancel and prompt refund", "Refund within 7 working days (cash, card)"] },
            { title: "Draft with AI", bullets: ["Plain, friendly policy pages", "Match what you really do", "Check platform rules too"] }
          ],
          sources: [{ name: "FTC: Business Guide to the Mail, Internet, or Telephone Order Merchandise Rule", url: "https://www.ftc.gov/business-guidance/resources/business-guide-ftcs-mail-internet-or-telephone-order-merchandise-rule" }],
          tryIt: "Write your shipping and returns policies with AI, check them against the FTC rule, and write a delay message that gives a revised date and offers cancellation with a refund.",
          youCanNow: "set shipping and returns policies that are clear, honest and follow the FTC rule.",
          quickCheck: [
            { objective: "O4", q: "What should a shipping policy promise?", options: ["The fastest time any seller offers", "No time at all, so you are never late", "Next-day delivery for every order", "A shipping time you have a real basis to meet"], answer: 3, why: "The FTC rule says you need a reasonable basis to meet any shipping time you state." },
            { objective: "O4", q: "A supplier delay means an order will ship late. What would you do?", options: ["Tell the buyer, give a new date and offer to cancel with a refund", "Say nothing and hope they do not notice", "Offer only store credit", "Cancel the order without telling them"], answer: 0, why: "The rule requires a delay notice with a revised date and the choice to cancel for a refund." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Answering customers with AI help",
          minutes: 5,
          goal: "Create reply templates for the five questions your customers ask most.",
          text: [
            "Online shops get the same questions again and again: Where is my order? Can I return this? What size should I get? Do you ship to my area? Is this in stock? Write templates for each, with blanks for details.",
            "AI can draft friendly templates from your real policies. For new questions, summarize the question without the customer's name, address or order number and ask AI for a reply, then fill in details yourself.",
            "If you add a chatbot to your store, give it only your real policies and product facts, tell customers it is automated, and make it easy to reach a person. Check what the chatbot service does with customer data."
          ],
          steps: ["List the five questions customers ask most.", "Give AI your real policies and ask for templates with [blanks].", "Check each template against your policies.", "For new questions, summarize without private details.", "If using a chatbot, give it real facts and a route to a person."],
          words: [["Reply template", "a ready-made answer with blanks you fill in."], ["Chatbot", "an automated program that answers customer messages."]],
          slides: [
            { title: "The usual questions", bullets: ["Where is my order? Returns?", "Sizing, shipping area, stock"] },
            { title: "Templates from your policies", bullets: ["Friendly, with [blanks]", "Check against what you really do"] },
            { title: "Chatbots", bullets: ["Only real policies and facts", "Say it is automated", "Easy route to a person"] }
          ],
          tryIt: "Write five reply templates for your most common customer questions with AI, using only your real policies, and check each one.",
          youCanNow: "answer customer questions quickly and accurately with AI-drafted templates.",
          quickCheck: [
            { objective: "O5", q: "What makes a customer reply template safe to use?", options: ["It sounds friendly, even if facts are guessed", "It is based on your real policies and checked by you", "AI wrote it, so it must be right", "It promises whatever the customer wants"], answer: 1, why: "Templates must match your real policies, so you check every one AI drafts." },
            { objective: "O5", q: "A customer email includes their order number and home address. How would you get AI help with the reply?", options: ["Paste the whole email into the AI", "Ask the customer to send the address again", "Summarize the question without the private details", "Post it in a public forum for advice"], answer: 2, why: "Leaving out private details protects the customer while still getting AI help." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Follow-up emails and reviews, the legal way",
          minutes: 5,
          goal: "Write a follow-up email and a review request that follow CAN-SPAM and the FTC review rules.",
          text: [
            "Email to past buyers (thank-yous, restock news, offers) brings repeat sales. Use AI to draft short emails, and follow CAN-SPAM: honest From and subject lines, make clear it is an ad when it is, include your physical address and a clear opt-out, and honor opt-outs within 10 business days. Most store and email platforms add unsubscribe links for you.",
            "Reviews build trust. Ask every buyer for an honest review, not only happy ones. The FTC's rule bans fake reviews and testimonials (including AI-generated ones from people who do not exist) and bans rewards given only for positive reviews. Never buy reviews or use AI to write them.",
            "Use AI to read your reviews for patterns: what buyers love and what they complain about. Fix the top complaint, and mention the fix in your listings or emails."
          ],
          steps: ["Draft a short follow-up email to past buyers with AI.", "Check it for CAN-SPAM basics: honest lines, address, opt-out.", "Draft an honest review request for every buyer.", "Never reward only good reviews or write reviews with AI.", "Use AI to find patterns in your real reviews."],
          words: [["Repeat sale", "a sale to someone who has bought before."], ["Opt-out", "a way to stop getting emails; unsubscribe."]],
          slides: [
            { title: "Email past buyers", bullets: ["Thank-yous, restocks, offers", "AI drafts short emails"] },
            { title: "CAN-SPAM basics", bullets: ["Honest From and subject lines", "Your physical address", "Opt-out honored within 10 business days"] },
            { title: "Reviews", bullets: ["Ask every buyer for an honest review", "No fake or AI-written reviews", "No rewards only for good reviews"] }
          ],
          sources: [{ name: "FTC: CAN-SPAM Act Compliance Guide for Business", url: "https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business" }, { name: "FTC: Final rule banning fake reviews and testimonials (press release)", url: "https://www.ftc.gov/news-events/news/press-releases/2024/08/federal-trade-commission-announces-final-rule-banning-fake-reviews-testimonials" }],
          tryIt: "Final task: write one follow-up email and one review request that follow the rules, then assemble your launch kit: niche summary, three listings with images, policies, five reply templates, email and review request.",
          youCanNow: "run an online shop with AI help that is honest with buyers and follows US rules.",
          quickCheck: [
            { objective: "O6", q: "What must a marketing email to customers include?", options: ["A discount code", "Your physical address and a way to opt out", "A photo of every product", "The customer's order history"], answer: 1, why: "CAN-SPAM requires a physical address and a working opt-out in marketing emails." },
            { objective: "O6", q: "A friend offers to write five-star reviews for your shop. What would you do?", options: ["Accept, since they mean well", "Accept only three of them", "Ask AI to write a few more like them", "Say no and ask real buyers for honest reviews"], answer: 3, why: "The FTC bans fake reviews, so you ask real buyers for honest ones." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Serve and grow",
        questions: [
          { objective: "O4", q: "You state no shipping time. Under the FTC rule, you need a reasonable basis to ship within:", options: ["1 year", "1 day", "30 days", "90 days"], answer: 2, why: "This is the FTC's \"30-day Rule\"." },
          { objective: "O4", q: "You cannot ship on time. What must you do?", options: ["Cancel without telling them", "Say nothing", "Offer only store credit", "Tell the buyer, give a revised date and offer cancellation with a refund"], answer: 3, why: "The rule requires a delay notice and a cancel option." },
          { objective: "O5", q: "A customer question includes their home address. How do you get AI help?", options: ["Paste it all", "Summarize the question without the address", "Post it publicly", "Ignore the customer"], answer: 1, why: "Keep private details out of AI tools." },
          { objective: "O6", q: "Which review practice is allowed?", options: ["Asking every buyer for an honest review", "Offering a gift only for 5-star reviews", "Writing reviews with AI", "Buying reviews"], answer: 0, why: "Honest reviews from real buyers are fine." },
          { objective: "O6", q: "How quickly must you honor an email unsubscribe request?", options: ["Never", "Within a year", "Within 10 business days", "Only if asked twice"], answer: 2, why: "That is the CAN-SPAM requirement in the FTC guide." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: AI-Powered eCommerce",
    questions: [
      { objective: "O1", q: "Which is a marketplace?", options: ["A spreadsheet", "Etsy", "A printer", "An email account"], answer: 1, why: "Etsy, Amazon and eBay are marketplaces." },
      { objective: "O1", q: "Where should you check platform fees?", options: ["A customer", "A guess", "An old video", "The platform's own pricing and help pages"], answer: 3, why: "Fees change often." },
      { objective: "O1", q: "Reading competitors' 3-star reviews helps you:", options: ["Find their passwords", "Copy their photos", "Write fake reviews", "Find problems you could fix"], answer: 3, why: "Complaints show unmet needs." },
      { objective: "O1", q: "AI is best used in niche research for:", options: ["Exact live sales numbers", "Ideas and questions, with real pages as evidence", "Final decisions", "Buying stock"], answer: 1, why: "AI may invent numbers." },
      { objective: "O2", q: "A good listing answers:", options: ["Nothing", "Only the price", "What it is, who it is for, size, materials, shipping time", "Your life story"], answer: 2, why: "It answers buyer questions before they ask." },
      { objective: "O2", q: "When asking AI for a listing, give it:", options: ["Only the real facts and ask it to use only those", "Nothing, let it guess", "A competitor's listing to copy", "Your bank details"], answer: 0, why: "Facts prevent invented features." },
      { objective: "O2", q: "A keyword is:", options: ["A discount code", "A password", "A word buyers type into search", "A product photo"], answer: 2, why: "Keywords help buyers find listings." },
      { objective: "O2", q: "Under FTC rules, product claims must be:", options: ["Truthful and backed by evidence", "Exciting", "Short", "Written by AI"], answer: 0, why: "Truth-in-advertising applies to listings." },
      { objective: "O3", q: "For product photos, a good setup is:", options: ["A dark room", "Daylight and a plain background", "A busy background", "Only one blurry photo"], answer: 1, why: "Clear photos sell." },
      { objective: "O3", q: "A size photo shows:", options: ["The price", "Only the logo", "The shipping box", "The product next to a hand or common object"], answer: 3, why: "It helps buyers understand scale." },
      { objective: "O3", q: "Which AI image edit is fine?", options: ["Removing the background", "Changing the product's color to one you do not sell", "Adding features it lacks", "Making it look bigger"], answer: 0, why: "Cleaning backgrounds does not mislead." },
      { objective: "O4", q: "If you state a shipping time, you need:", options: ["AI approval", "Nothing", "A celebrity endorsement", "A reasonable basis to believe you can meet it"], answer: 3, why: "The FTC rule requires a reasonable basis." },
      { objective: "O4", q: "A delay notice must offer the buyer:", options: ["A higher price", "Only store credit", "The choice to cancel for a prompt refund", "Nothing"], answer: 2, why: "Buyers can choose to cancel." },
      { objective: "O4", q: "Refunds for card or cash orders after cancellation are due within:", options: ["Six months", "Seven working days", "One year", "Never"], answer: 1, why: "The FTC guide says seven working days." },
      { objective: "O4", q: "Can store credit replace a required refund under the rule?", options: ["Only on weekends", "Yes, always", "Only for small orders", "No"], answer: 3, why: "The guide says store credit cannot replace a required refund." },
      { objective: "O5", q: "Reply templates should be based on:", options: ["Competitors' policies", "What AI imagines", "Your real policies", "Nothing"], answer: 2, why: "Templates must match what you really do." },
      { objective: "O5", q: "A store chatbot should:", options: ["Say it is automated and offer a way to reach a person", "Pretend to be a person", "Promise any refund", "Have no facts"], answer: 0, why: "Honesty and a human route build trust." },
      { objective: "O6", q: "Marketing emails must include:", options: ["The buyer's password", "Your physical address and an opt-out", "A fake deadline", "Hidden ads"], answer: 1, why: "These are CAN-SPAM basics." },
      { objective: "O6", q: "The FTC's fake-review rule bans:", options: ["Asking for honest reviews", "AI-generated reviews from people who do not exist", "Replying to reviews", "Showing real reviews"], answer: 1, why: "Fake reviews, including AI-made ones, are banned." },
      { objective: "O6", q: "Using AI on your real reviews can help you:", options: ["Find patterns in what buyers love and complain about", "Delete bad reviews", "Write more reviews", "Change ratings"], answer: 0, why: "Patterns show what to fix." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Pre-Test: What Do You Already Know?",
    from: [
      0,
      2,
      4,
      7,
      8,
      11,
      12,
      15,
      17
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      {
        name: "Niche with evidence",
        objective: "O1",
        notYet: "The niche is a guess, or the only evidence is what AI said.",
        meets: "The summary names the niche and gives real marketplace evidence of demand.",
        exceeds: "It also names a problem from competitors' reviews that your product could fix."
      },
      {
        name: "Honest listings",
        objective: "O2",
        notYet: "A listing has a claim that is untrue or not checked.",
        meets: "Three listings with a clear title, description and key details, all true.",
        exceeds: "Each listing also uses the words buyers search for and answers size, materials and shipping time."
      },
      {
        name: "Clear, real images",
        objective: "O3",
        notYet: "Images are unclear, or an edit changes how the product looks.",
        meets: "Each product has a clean main image and a size photo that match the real product.",
        exceeds: "Each product also has several angles and a close-up of the details."
      },
      {
        name: "Shipping and returns",
        objective: "O4",
        notYet: "No shipping time, or a time you cannot meet; no delay plan.",
        meets: "Written policies with a shipping time you can meet and a delay message that offers a refund.",
        exceeds: "The returns policy also says clearly who pays return shipping and how fast refunds are sent."
      },
      {
        name: "Customer replies",
        objective: "O5",
        notYet: "Fewer than five templates, or a template that does not match your policies.",
        meets: "Five checked templates based on your real policies.",
        exceeds: "Templates also say when the customer will hear back and how to reach a person."
      },
      {
        name: "Email and review request",
        objective: "O6",
        notYet: "The email has no address or opt-out, or the review request offers a reward for good reviews.",
        meets: "The email has your address and an opt-out, and the review request asks for honest reviews.",
        exceeds: "The review request goes to every buyer, not only happy ones."
      }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Learners who publish at least one product listing within 30 days (follow-up survey)",
      "Learners who make a first online sale within 90 days",
      "Learners who start another Koach Learn business course within 30 days"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A phone or computer with internet",
      "A phone camera and a plain background for product photos",
      "A free AI assistant (such as ChatGPT, Microsoft Copilot or Google Gemini) and a free background-removal tool",
      "One real product, or a product you plan to sell",
      "About 60 minutes in total: lessons, practice, checks and the final task"
    ],
    facilitatorNotes: [
      "Ask each learner to bring one real product or a clear product idea so the practice builds a real launch kit.",
      "Look up the FTC mail order rule, review rules and CAN-SPAM pages together on ftc.gov rather than relying on AI summaries.",
      "Remind learners never to paste customer names, addresses or order details into AI tools.",
      "Platform fees change often; have learners check each platform's own pricing page before choosing one.",
      "Score the launch kit with the rubric and give feedback on one Not yet row at a time."
    ]
  }
};
