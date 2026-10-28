"use strict";

// Koach Learn course: Athletes -> "AI E-commerce Platforms for Athletes". Skill-building course: by the end the student can DO the skill in `outcome`.
// Platform names are given without prices or menu names (they change); students are told to compare current fees on each platform's own pricing page.
// Shape: scripts/koachlearn-courses/README.md. Model: re-entry/reentry-ai-digital-confidence.js.

module.exports = {
  id: "athletes-ai-ecommerce",
  category: "Athletes",
  name: "AI E-commerce Platforms for Athletes",
  skills: "Choosing what to sell, Comparing store platforms and fees, Writing product pages with AI, Pricing with real costs, Checking NIL, logo and trademark rules before selling",
  outcome: "plan and set up a simple online offer, such as merch, private lessons or a camp: pick a platform, write a product page with AI, set a price from real costs, and check NIL, logo and trademark rules before you launch.",
  about: [
    "This course is for athletes and coaches who want to sell something online: T-shirts or merch with their own design, private lessons, training plans, or camps and clinics.",
    "You will learn what to sell, how to choose a store platform, how to write a product page with AI, how to set a price that covers your costs, and how to stay within NIL, school logo and trademark rules.",
    "Each lesson is about five minutes with a \"Try it now\" task. A knowledge check closes each chapter, and a 20-question quiz closes the course. This is general education, not legal or tax advice; check with your compliance office, a parent or guardian if you are under 18, and a tax professional."
  ],
  finalTask: "Write a one-page launch plan for one product or service: what it is and who it's for, the platform you chose and its current fees (from its pricing page), a product page written with AI and edited by you, a price worked out from real costs, and a rules checklist (NIL, school logos, trademarks, taxes) with who you checked with.",
  chapters: [
    {
      name: "Chapter 1: What to sell and where",
      lessons: [
        {
          title: "Choosing what to sell",
          minutes: 5,
          goal: "Pick one product or service that fits your skills and audience.",
          text: [
            "Athletes usually sell one of three things. Physical products: T-shirts, hats, stickers or posters with your own design or logo. Services: private lessons, small-group training, camps and clinics. Digital products: training plans, video courses or workout guides.",
            "Start with one thing your audience already asks you about. If parents keep asking about lessons, sell lessons. If fans comment on your logo, try merch.",
            "Think about time and risk. Services pay for your time but need your schedule. Merch needs money up front unless you use print-on-demand. Digital products take time to make but can sell many times."
          ],
          steps: ["List what your audience asks you about.", "Sort ideas into physical, service or digital.", "Note the time and money each needs.", "Pick one to start."],
          words: [["E-commerce", "buying and selling online."], ["Print-on-demand", "a service that prints and ships an item only after someone orders it."], ["Digital product", "something sold as a file or online access, like a training plan."]],
          slides: [
            { title: "Three kinds of offers", bullets: ["Physical: merch with your design", "Services: lessons, camps, clinics", "Digital: training plans, video courses"] },
            { title: "Start with demand", bullets: ["What does your audience ask about?", "Pick one thing"] },
            { title: "Time and risk", bullets: ["Services: your time", "Merch: money up front or print-on-demand", "Digital: make once, sell many times"] }
          ],
          tryIt: "List three things people have asked you about. Ask an AI assistant to list pros and cons of selling each, then pick one.",
          youCanNow: "choose one product or service that fits your skills and audience."
        },
        {
          title: "Comparing store platforms",
          minutes: 5,
          goal: "Compare two platforms and pick one using their current fees and features.",
          text: [
            "You do not need to build a store from scratch. Store builders like Shopify, Square Online and Wix let you list products and take payments. Print-on-demand services such as Printful or Printify connect to stores and handle printing and shipping. For lessons and camps, booking and sign-up tools or a simple payment link can be enough.",
            "Every platform charges in some way: monthly plans, a percentage of each sale, payment processing fees, or all three. These change often, so read each platform's current pricing page and write the real numbers down.",
            "If you are under 18, many platforms and payment services require an adult to own or co-own the account. Involve a parent or guardian."
          ],
          steps: ["Pick two platforms that fit your offer.", "Open each one's official pricing page.", "Write the monthly cost, per-sale fee and payment fee.", "Check age rules.", "Pick the one with the lowest total cost for your expected sales."],
          words: [["Platform", "an online service you use to run your store."], ["Processing fee", "what a payment service charges to take a card payment."]],
          slides: [
            { title: "Store options", bullets: ["Store builders: Shopify, Square Online, Wix", "Print-on-demand: Printful, Printify", "Lessons and camps: booking tools or a payment link"] },
            { title: "Fees to compare", bullets: ["Monthly plan", "Per-sale fee", "Payment processing fee"] },
            { title: "Before you sign up", bullets: ["Read the current pricing page", "Under 18: an adult may need to own the account"] }
          ],
          tryIt: "Pick two platforms. From their official pricing pages, write each one's monthly cost and fees in a small table, and pick the cheaper total for 20 sales a month.",
          youCanNow: "compare store platforms by their real, current fees and pick one."
        },
        {
          title: "Rules first: NIL, logos and trademarks",
          minutes: 6,
          goal: "Check the rules that apply before selling anything with your name or a logo.",
          text: [
            "Selling things with your own name, image or likeness can count as NIL activity. College athletes may need to report it; NCAA rules say NIL pay must be for a real business purpose and not tied to performance. High school rules vary by state. Ask your compliance office or state athletic association first.",
            "Do not use your school's or team's logo, name, mascot or colors in a way that looks official unless you have written permission. Schools and leagues usually own and protect these. Pro league logos and other brands' logos are also off-limits.",
            "Make your own logo, and search the USPTO trademark records before choosing a brand name to avoid copying someone else's. Selling income is generally taxable; the IRS says you must file if net self-employment earnings are $400 or more, so keep records and talk with a tax professional."
          ],
          steps: ["Ask your compliance office or state association about NIL rules for selling.", "Do not use school, team or league logos without written permission.", "Create your own logo.", "Search USPTO trademark records for your brand name.", "Set up a simple record of sales and costs."],
          words: [["Trademark", "a name, logo or slogan that identifies a business and is protected by law."], ["Licensing", "official permission to use someone else's logo or name, often for a fee."]],
          slides: [
            { title: "NIL rules", bullets: ["Selling with your name can be NIL activity", "College: may need reporting", "High school: rules vary by state"] },
            { title: "Logos", bullets: ["School, team and league logos need written permission", "Other brands' logos: off-limits", "Make your own"] },
            { title: "Name and taxes", bullets: ["Search USPTO before choosing a brand name", "Keep records of sales and costs", "Talk with a tax professional"] }
          ],
          sources: [
            { name: "NCAA: Name, Image and Likeness", url: "https://www.ncaa.org/student-athletes/name-image-likeness/" },
            { name: "USPTO: Trademark basics", url: "https://www.uspto.gov/trademarks/basics" },
            { name: "IRS: Self-Employed Individuals Tax Center", url: "https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center" }
          ],
          tryIt: "Write a rules checklist for your product: NIL (who you asked), logos (whose, and permission), trademark search (done or not), and records (where you will keep them).",
          youCanNow: "check NIL, logo, trademark and tax basics before selling."
        }
      ],
      check: {
        title: "Knowledge Check 1: What to sell and where",
        questions: [
          { q: "Which is a service an athlete could sell?", options: ["A T-shirt", "A sticker", "Private lessons", "A poster"], answer: 2, why: "Lessons are a service that pays for your time." },
          { q: "What does print-on-demand do?", options: ["Prints and ships items only after someone orders", "Prints money", "Makes you buy 500 shirts first", "Writes your product page"], answer: 0, why: "It lowers the money you need up front." },
          { q: "Where do you find a platform's real fees?", options: ["A guess", "An old video", "An AI's memory", "Its current official pricing page"], answer: 3, why: "Fees change; the official page is current." },
          { q: "You want to sell shirts with your school's logo. What do you need first?", options: ["Nothing", "Written permission from the school", "A nicer font", "More followers"], answer: 1, why: "Schools usually own and protect their logos." },
          { q: "Why search USPTO records before naming your brand?", options: ["To get free shirts", "To avoid copying someone else's trademark", "To find customers", "It's not useful"], answer: 1, why: "It helps you avoid trademark problems." }
        ]
      }
    },
    {
      name: "Chapter 2: Building and launching your offer",
      lessons: [
        {
          title: "Writing a product page with AI",
          minutes: 5,
          goal: "Write a clear, honest product page with AI help.",
          text: [
            "A product page answers buyers' questions: What is it? Who is it for? What do I get? How much, when and how? For a camp: dates, ages, location, what kids learn, safety, what to bring, and the refund policy.",
            "Ask an AI assistant: \"Write a product page for a 1-hour private shooting lesson for players aged 10-16. Include what they'll learn, what to bring, location type, price placeholder, and a short refund policy. Friendly, clear, under 200 words.\" Then edit every detail to be true.",
            "Use real photos you own. Do not promise results like \"guaranteed starter\" or make health claims. Clear refund and cancellation rules prevent arguments later."
          ],
          steps: ["List what buyers need to know.", "Ask AI for a page draft under 200 words.", "Check every detail and fix anything untrue.", "Add real photos you own.", "Add clear refund and cancellation rules."],
          words: [["Product page", "the page that describes what you sell and lets people buy it."], ["Refund policy", "your rules for giving money back."]],
          slides: [
            { title: "Answer buyers' questions", bullets: ["What is it? Who is it for?", "What do I get?", "How much, when and how?"] },
            { title: "AI drafts, you check", bullets: ["Under 200 words", "Every detail true", "Your own photos"] },
            { title: "Avoid", bullets: ["Guaranteed results", "Health claims", "Missing refund rules"] }
          ],
          tryIt: "Use AI to draft your product page, then edit it so every detail is true and add a refund policy.",
          youCanNow: "write a clear, honest product page with AI help."
        },
        {
          title: "Pricing from real costs",
          minutes: 5,
          goal: "Set a price that covers your costs and leaves a profit.",
          text: [
            "Price starts with cost. For merch: the item cost, printing, shipping, platform fees and payment fees. For lessons: facility rental, equipment, travel, your time and fees.",
            "Add up the cost of one sale, then look at what similar products or lessons cost in your area. Choose a price above your cost that your audience can pay. The difference is your profit, before taxes.",
            "Use a spreadsheet: columns for each cost, a total, your price and profit. An AI assistant can set up the formulas, but check the math with a calculator."
          ],
          steps: ["List every cost for one sale.", "Add them up.", "Check what similar offers cost nearby.", "Set a price above cost that fits your audience.", "Check the math in a spreadsheet."],
          words: [["Cost", "the money you spend to make or deliver one sale."], ["Profit", "price minus all costs, before taxes."]],
          slides: [
            { title: "List every cost", bullets: ["Item, printing, shipping", "Platform and payment fees", "Facility, equipment, travel, time"] },
            { title: "Set a price", bullets: ["Above total cost", "Compare similar offers nearby", "What your audience can pay"] },
            { title: "Spreadsheet", bullets: ["Costs, total, price, profit", "AI sets formulas; you check"] }
          ],
          tryIt: "Build a pricing sheet for one sale of your product. Ask AI to write the total and profit formulas, then check them with a calculator.",
          youCanNow: "set a price from real costs and know your profit per sale."
        },
        {
          title: "Launching and keeping customers happy",
          minutes: 5,
          goal: "Plan a small launch and a simple customer service routine.",
          text: [
            "Start small: a soft launch to family, teammates' families and close followers. Fix problems before a big announcement. Then announce with a post, a short video and a link in your bio.",
            "If you post about your own products, that's your business, but if a brand or another person gives you anything to promote them, disclose it clearly. College athletes: report deals on time if required.",
            "Customer service builds repeat buyers: answer messages within a day, ship or confirm bookings on time, follow your refund policy, and say thank you. Ask AI to draft polite reply templates for common questions."
          ],
          steps: ["Soft launch to a small group.", "Fix any problems.", "Announce with a post, a video and a bio link.", "Reply to messages within a day.", "Use AI to draft reply templates."],
          words: [["Soft launch", "a small, quiet first release to catch problems."], ["Customer service", "how you help buyers before and after they pay."]],
          slides: [
            { title: "Start small", bullets: ["Soft launch to people you know", "Fix problems first"] },
            { title: "Then announce", bullets: ["Post, short video, bio link", "Disclose any brand ties"] },
            { title: "Keep customers happy", bullets: ["Reply within a day", "On time, follow your refund policy", "AI reply templates"] }
          ],
          tryIt: "Final task: write your one-page launch plan: offer and audience, platform and current fees, AI-drafted product page, price from real costs, and rules checklist with who you checked with.",
          youCanNow: "launch a small online offer and give good customer service."
        }
      ],
      check: {
        title: "Knowledge Check 2: Building and launching your offer",
        questions: [
          { q: "A camp product page should include:", options: ["Only a logo", "Your home address", "Guaranteed scholarships", "Dates, ages, location, what kids learn and refund policy"], answer: 3, why: "It answers what buyers need to know." },
          { q: "AI writes \"guaranteed to make varsity\" on your page. You:", options: ["Remove it", "Keep it", "Make it bigger", "Add more promises"], answer: 0, why: "Don't promise results you can't guarantee." },
          { q: "Profit is:", options: ["Price only", "Number of followers", "Price minus all costs", "Total sales without costs"], answer: 2, why: "Profit is what's left after costs." },
          { q: "Why do a soft launch?", options: ["To hide your store", "To raise prices", "It's required by law", "To catch problems before a big announcement"], answer: 3, why: "Small launches reveal problems safely." },
          { q: "How fast should you reply to customer messages?", options: ["Within a month", "Within a day", "Never", "Only if they complain twice"], answer: 1, why: "Quick replies build trust and repeat buyers." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: AI E-commerce Platforms for Athletes",
    questions: [
      { q: "E-commerce means:", options: ["Electric sports", "Email only", "Buying and selling online", "A team bus"], answer: 2, why: "It's online selling." },
      { q: "Which is a digital product?", options: ["A training plan", "A hat", "A camp", "A poster"], answer: 0, why: "It's sold as a file or online access." },
      { q: "A good way to pick your first product is:", options: ["What your audience already asks about", "Whatever is trendy", "The most expensive idea", "Something you don't know"], answer: 0, why: "Demand makes sales easier." },
      { q: "Services pay for your:", options: ["Shipping", "Printing", "Time", "Stickers"], answer: 2, why: "Lessons and camps need your time." },
      { q: "Which is a store builder?", options: ["A stopwatch", "Shopify", "A scoreboard", "A jersey"], answer: 1, why: "Shopify is a store builder." },
      { q: "Which fee might a platform charge?", options: ["A jersey fee", "A referee fee", "A timeout fee", "A payment processing fee"], answer: 3, why: "Payment fees are common." },
      { q: "If you are under 18, a store account may need:", options: ["Nothing", "A fake age", "An adult to own or co-own it", "A teammate's ID"], answer: 2, why: "Many platforms require an adult." },
      { q: "Selling merch with your name can count as:", options: ["Pay-for-play", "A scholarship", "Nothing", "NIL activity"], answer: 3, why: "It uses your name, image or likeness." },
      { q: "Who should a college athlete ask about NIL rules for selling?", options: ["The compliance office", "A random fan", "A rival", "Nobody"], answer: 0, why: "They know current school and NCAA rules." },
      { q: "Can you put an NFL logo on your merch?", options: ["Yes, always", "No, not without a license", "Only in red", "Only online"], answer: 1, why: "League logos are protected." },
      { q: "A trademark is:", options: ["A type of shoe", "A sports drink", "A protected name, logo or slogan", "A training plan"], answer: 2, why: "Trademarks identify businesses." },
      { q: "The IRS says you must file a return if net self-employment earnings are:", options: ["$400 or more", "$1 million or more", "Never", "Only if you're over 30"], answer: 0, why: "That's the IRS threshold on its self-employed page." },
      { q: "A product page should answer:", options: ["Only the price", "Your GPA", "Your password", "What, who, what you get, price, when and how"], answer: 3, why: "Buyers need those answers." },
      { q: "Product photos should be:", options: ["Copied from other stores", "Real photos you own", "Fake", "Of other athletes"], answer: 1, why: "Use photos you have rights to." },
      { q: "Why have a refund policy?", options: ["To keep all money always", "To prevent arguments later", "It's decoration", "It's not needed"], answer: 1, why: "Clear rules protect you and buyers." },
      { q: "Price should be:", options: ["Below your cost", "Random", "Free always", "Above your total cost"], answer: 3, why: "Otherwise you lose money each sale." },
      { q: "AI sets up your profit formula. You should:", options: ["Check the math with a calculator", "Trust it fully", "Delete it", "Double your price"], answer: 0, why: "AI can make math mistakes." },
      { q: "A soft launch goes to:", options: ["Everyone at once", "Only rivals", "Family, close followers and people you know", "Nobody"], answer: 2, why: "A small group helps you fix problems." },
      { q: "Where should you put your store link?", options: ["Hidden nowhere", "A rival's page", "Spam messages", "Your bio"], answer: 3, why: "Bio links are easy to find." },
      { q: "AI can help customer service by:", options: ["Keeping customer money", "Drafting polite reply templates", "Ignoring messages", "Changing refund rules secretly"], answer: 1, why: "Templates make replies fast and polite." }
    ]
  }
};
