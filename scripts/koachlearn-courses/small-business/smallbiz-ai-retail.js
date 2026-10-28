"use strict";

// Koach Learn course: Small Business -> "AI for Retail Businesses" (bonus course). Written as a skill-building course: by the end the student can DO the skill in `outcome`.
// Two chapters of three micro-lessons; a knowledge check closes each chapter; a 20-question quiz closes the course. See scripts/koachlearn-export.js for how it is built.
// The FTC advertising rule was checked on ftc.gov on 27 October 2026.
//
// lesson: { title, minutes, goal, text: [paragraph], steps: [step] (optional), words: [[term, means]], slides: [{ title, bullets }], sources, tryIt, youCanNow }
// question: { q, options: [4], answer: index of the right option, why }

const FTC_ADS = { name: "FTC: Advertising and Marketing basics", url: "https://www.ftc.gov/business-guidance/advertising-marketing" };

module.exports = {
  id: "smallbiz-ai-retail",
  category: "Small Business",
  name: "AI for Retail Businesses",
  skills: "Writing product descriptions, Making shelf signs, Tracking stock in a spreadsheet, Setting reorder points, Reading sales patterns, Planning a seasonal promotion",
  outcome: "run the paperwork side of a small shop with AI help: write honest product descriptions and shelf signs, keep a stock sheet with reorder points, spot your best and slowest sellers, and plan one seasonal promotion from your own numbers.",
  about: [
    "This course is for owners and staff of small retail businesses: boutiques, corner stores and bodegas, beauty supply shops, gift shops, thrift stores, and people selling online or at markets. Many of our students are minority owners running a shop with a small team.",
    "You will use a free AI assistant and a spreadsheet (Google Sheets or Excel) to write about your products, keep track of stock so you run out less, see what sells, and plan a promotion based on facts instead of guesses.",
    "Each lesson takes about five minutes with a \"Try it now\" task. There is a knowledge check after each chapter and a 20-question quiz at the end."
  ],
  finalTask: "Build a retail toolkit for your shop: five honest product descriptions, three shelf signs, a stock sheet of at least 15 items with reorder points and a reorder flag, a short note on your top three and bottom three sellers, and a one-page plan for one seasonal promotion with the items, price, dates and how you will measure it.",
  chapters: [
    {
      name: "Chapter 1: Products, signs and stock",
      lessons: [
        {
          title: "Writing product descriptions that sell, honestly",
          minutes: 5,
          goal: "Write short, honest product descriptions with AI help.",
          text: [
            "A product description tells a shopper what it is, who it is for, and why they want it. It works on a shelf tag, your website, an online marketplace or a social post.",
            "Give AI the facts: \"Write a 40-word description for a 12 oz shea butter body cream, unscented, made in Ghana, for dry skin. Warm tone. Mention the size.\" AI makes the words friendly; you supply the facts.",
            "Check every fact: size, materials, where it was made, care instructions. Remove claims you cannot prove, like \"cures eczema\" or \"best in the city\". The FTC says ad claims must be truthful and backed by evidence."
          ],
          steps: ["Write the product facts: name, size, material, origin, who it is for.", "Ask AI for a short description in your voice.", "Check every fact against the label or invoice.", "Remove claims you cannot prove."],
          words: [["Product description", "a short text that tells shoppers what a product is and why they want it."], ["Claim", "a statement of fact about a product, like what it does."]],
          slides: [
            { title: "What, who and why", bullets: ["What it is", "Who it is for", "Why they want it"] },
            { title: "You give the facts", bullets: ["Name, size, material, origin", "AI makes the words friendly"] },
            { title: "Keep it honest", bullets: ["Check against the label or invoice", "No health or \"best\" claims you cannot prove", "FTC: claims must be truthful and evidence-based"] }
          ],
          sources: [FTC_ADS],
          tryIt: "Pick five products in your shop. Write the facts for each, ask AI for a 30-to-50-word description, and check each one against the label.",
          youCanNow: "write honest product descriptions with AI help."
        },
        {
          title: "Shelf signs, price cards and store notices",
          minutes: 4,
          goal: "Make clear shelf signs and store notices quickly.",
          text: [
            "Signs answer questions before shoppers ask: price, sale, new arrivals, return policy, \"ask us about...\". Clear signs save staff time.",
            "Ask AI for short wording: \"Write five shelf signs for my beauty supply store: new braiding hair arrivals, buy 2 get 1 free on edge control through May 31, our return policy is 14 days with receipt. Under 12 words each.\" Then design them in Canva or a document and print.",
            "Prices on signs must match the register. Sale signs need the real end date and any limits. If you serve customers who speak another language, ask AI for a translation, then have a fluent speaker check it."
          ],
          steps: ["List the signs you need.", "Ask AI for short wording.", "Design and print them.", "Check every price matches the register.", "Have a fluent speaker check any translation."],
          words: [["Shelf sign", "a small sign on a shelf showing a price, sale or information."], ["Return policy", "your rules for when customers can bring items back."]],
          slides: [
            { title: "Signs save staff time", bullets: ["Price, sale and new arrivals", "Return policy and \"ask us about\""] },
            { title: "AI writes, you design", bullets: ["Ask for short wording, under 12 words", "Design in Canva or a document"] },
            { title: "Check before you hang it", bullets: ["Price matches the register", "Sale end date and limits", "Translations checked by a fluent speaker"] }
          ],
          tryIt: "Ask AI for three shelf signs for your shop. Check each price against your register, then make and print or save them.",
          youCanNow: "make clear, accurate shelf signs and store notices with AI help."
        },
        {
          title: "Keeping a stock sheet with reorder points",
          minutes: 6,
          goal: "Build a stock spreadsheet that flags what to reorder.",
          text: [
            "Running out of your best seller loses sales; too much slow stock ties up cash. A simple stock sheet helps. Columns: Item, Supplier, On hand, Sold per week, Days to arrive, Reorder point, Reorder?",
            "The reorder point is when to order again. A simple rule: sold per week x weeks to arrive + a little extra (safety stock). If you sell 10 a week, it takes 1 week to arrive, and you keep 5 extra, reorder at 15.",
            "Ask AI to help with the formula: \"In Google Sheets, write a formula that shows REORDER when column C is less than or equal to column F.\" A common answer is =IF(C2<=F2,\"REORDER\",\"\"). Test it on a few rows to make sure it works."
          ],
          steps: ["Make the seven columns.", "Fill in your top 15 items.", "Work out each reorder point: weekly sales x weeks to arrive + safety stock.", "Ask AI for an IF formula to flag reorders.", "Test it on a few rows, and update On hand each week."],
          words: [["Stock (inventory)", "the products you have on hand to sell."], ["Reorder point", "the amount left at which you order more."], ["Safety stock", "extra items kept in case sales jump or delivery is late."]],
          slides: [
            { title: "Why track stock", bullets: ["Running out loses sales", "Too much slow stock ties up cash"] },
            { title: "Stock sheet columns", bullets: ["Item, Supplier, On hand", "Sold per week, Days to arrive", "Reorder point, Reorder?"] },
            { title: "Reorder point", bullets: ["Weekly sales x weeks to arrive + safety stock", "Example: 10 x 1 + 5 = reorder at 15"] },
            { title: "Let the sheet flag it", bullets: ["=IF(C2<=F2,\"REORDER\",\"\")", "Test on a few rows", "Update On hand weekly"] }
          ],
          tryIt: "Build your stock sheet with at least 15 items, work out reorder points, and add an IF formula that shows REORDER. Test it by changing one On hand number.",
          youCanNow: "keep a stock sheet that tells you when to reorder."
        }
      ],
      check: {
        title: "Knowledge Check 1: Products, signs and stock",
        questions: [
          { q: "Who supplies the facts in a product description?", options: ["The AI's guess", "You, from the label or invoice", "A competitor", "A customer review"], answer: 1, why: "AI writes the words; you supply checked facts." },
          { q: "AI writes that your body cream \"cures eczema\". What do you do?", options: ["Add \"guaranteed\"", "Keep it", "Make it bigger", "Remove it unless you can prove it"], answer: 3, why: "The FTC requires evidence for claims." },
          { q: "A sale sign must show:", options: ["The real end date and any limits", "No price", "Your password", "A fake old price"], answer: 0, why: "Honest sale signs include dates and limits." },
          { q: "You sell 8 a week, delivery takes 2 weeks, safety stock is 4. What is the reorder point?", options: ["8", "12", "14", "20"], answer: 3, why: "8 x 2 + 4 = 20." },
          { q: "What does =IF(C2<=F2,\"REORDER\",\"\") do?", options: ["Adds up sales", "Deletes the row", "Shows REORDER when on hand is at or below the reorder point", "Sends an order to the supplier"], answer: 2, why: "It flags items that need reordering." }
        ]
      }
    },
    {
      name: "Chapter 2: Reading sales and planning promotions",
      lessons: [
        {
          title: "Finding your best and slowest sellers",
          minutes: 5,
          goal: "Use a sales report and AI help to find your top and bottom sellers.",
          text: [
            "Most point-of-sale (POS) systems can export a sales report by item as a file you open in a spreadsheet. If yours cannot, a simple weekly tally by item works.",
            "Sort by units sold and by sales dollars. Your top sellers deserve good shelf space and never running out. Your slowest sellers may need a better spot, a bundle, a markdown or to be dropped.",
            "You can paste item totals (no customer details) into an AI assistant: \"Here are 8 weeks of item sales for my gift shop. Which items are rising, falling, or seasonal? What questions should I ask?\" Treat the answers as ideas and confirm them in your report."
          ],
          steps: ["Export a sales-by-item report or tally by hand.", "Sort by units and by dollars.", "Mark your top 3 and bottom 3.", "Ask AI for patterns using item totals only.", "Confirm each pattern in your report."],
          words: [["POS", "point of sale: the system that rings up sales."], ["Export", "save data from a system as a file you can open elsewhere."], ["Markdown", "a lower price to sell slow stock."]],
          slides: [
            { title: "Get the numbers", bullets: ["Export a sales-by-item report from your POS", "Or tally sales by item each week"] },
            { title: "Sort two ways", bullets: ["By units sold", "By sales dollars", "Mark top 3 and bottom 3"] },
            { title: "AI for patterns", bullets: ["Item totals only, no customer details", "Rising, falling, seasonal?", "Confirm in your report"] }
          ],
          tryIt: "Get 4 to 8 weeks of sales by item. Find your top 3 and bottom 3, then ask AI what patterns it sees and confirm one.",
          youCanNow: "find your best and slowest sellers and check AI's ideas against your own numbers."
        },
        {
          title: "Planning a seasonal promotion from your numbers",
          minutes: 5,
          goal: "Plan a promotion with items, price, dates and a profit check.",
          text: [
            "Retail runs on seasons: back to school, holidays, graduation, summer, local festivals and cultural celebrations important to your customers. Plan promotions a month ahead.",
            "Use your numbers: promote items that sell well in that season, or bundle a slow seller with a top seller. Ask AI for ideas: \"My top seller is braiding hair; slow seller is satin bonnets. Give me three back-to-school bundle ideas that keep a profit.\"",
            "Check the math: price, cost, profit per sale, and how many you need to sell. Write the dates and limits, and order enough stock using your reorder sheet."
          ],
          steps: ["Pick a season or event.", "Choose items from your sales report.", "Ask AI for promotion or bundle ideas.", "Check profit per sale on paper.", "Set dates, limits and order stock."],
          words: [["Promotion", "a special offer for a set time."], ["Bundle", "two or more items sold together for one price."]],
          slides: [
            { title: "Plan a month ahead", bullets: ["Back to school, holidays, graduation", "Local festivals and cultural celebrations"] },
            { title: "Use your numbers", bullets: ["Promote seasonal best sellers", "Bundle a slow seller with a top seller"] },
            { title: "Check before launch", bullets: ["Price, cost and profit per sale", "Dates and limits", "Enough stock on order"] }
          ],
          tryIt: "Plan one promotion for the next season: items, price, profit per sale, dates and how much stock you need.",
          youCanNow: "plan a seasonal promotion based on your own sales numbers."
        },
        {
          title: "Measuring the promotion and protecting your shop",
          minutes: 5,
          goal: "Measure a promotion's results and keep shop data safe.",
          text: [
            "Decide how you will measure before you start: units of promoted items sold, total sales during the dates compared with the same weeks before, and profit. A promo code or a separate POS button for the bundle makes tracking easy.",
            "Afterwards, ask AI to help you write a short summary from your numbers: what worked, what did not, what to try next time. Check its math against your sheet.",
            "Keep shop data safe: do not paste customer names, card numbers, supplier passwords or staff details into AI tools. Watch for fake supplier invoices and \"urgent\" payment requests; call the supplier on a number you know."
          ],
          steps: ["Choose your measures before the promotion.", "Add a code or POS button to track it.", "Compare with the same weeks before.", "Ask AI to help summarize, and check the math.", "Keep customer and supplier data out of AI."],
          words: [["Compare period", "an earlier time you compare results with, like the same weeks last month."], ["Promo code", "a code that tracks who used an offer."]],
          slides: [
            { title: "Decide measures first", bullets: ["Units of promoted items", "Sales vs the same weeks before", "Profit"] },
            { title: "Make tracking easy", bullets: ["Promo code or a POS button for the bundle", "AI helps write the summary; you check the math"] },
            { title: "Protect your shop", bullets: ["No customer, card, supplier or staff data in AI", "Call suppliers on known numbers about invoices"] }
          ],
          tryIt: "Final task: put your retail toolkit together: five product descriptions, three shelf signs, your stock sheet with reorder flags, your top and bottom sellers, and your promotion plan with how you will measure it.",
          youCanNow: "run and measure a promotion and use AI safely across your shop's paperwork."
        }
      ],
      check: {
        title: "Knowledge Check 2: Reading sales and planning promotions",
        questions: [
          { q: "Your POS cannot export reports. What can you do?", options: ["Keep a simple weekly tally by item", "Guess", "Ask a competitor", "Stop tracking"], answer: 0, why: "A hand tally still shows patterns." },
          { q: "What might help a slow seller?", options: ["Ordering more", "Hiding it", "Raising its price a lot", "A bundle with a top seller"], answer: 3, why: "Bundles can move slow stock." },
          { q: "Before launching a bundle you should check:", options: ["Only the color", "Profit per sale", "Your horoscope", "Nothing"], answer: 1, why: "Promotions must still make money." },
          { q: "How do you track a promotion easily?", options: ["A promo code or a POS button for it", "Memory", "Asking AI to guess", "Counting customers' cars"], answer: 0, why: "Codes and buttons record each sale." },
          { q: "An email says your supplier changed bank details and to pay today. You:", options: ["Reply with your password", "Pay now", "Call the supplier on a number you know", "Forward to customers"], answer: 2, why: "Fake supplier invoices are a common scam." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: AI for Retail Businesses",
    questions: [
      { q: "A product description answers:", options: ["Your password", "What it is, who it is for, why they want it", "The supplier's bank", "Nothing"], answer: 1, why: "Those three parts help shoppers decide." },
      { q: "Where do you check product facts?", options: ["A competitor", "The AI", "A social post", "The label or invoice"], answer: 3, why: "Labels and invoices hold the real facts." },
      { q: "The FTC says ad claims must be:", options: ["In capitals", "Exciting", "Short", "Truthful and evidence-based"], answer: 3, why: "That is the FTC standard." },
      { q: "Shelf sign prices must:", options: ["Be rounded up", "Match the register", "Be hidden", "Change daily"], answer: 1, why: "Mismatched prices upset customers." },
      { q: "A translated sign should be checked by:", options: ["The printer", "Nobody", "A fluent speaker", "A random website"], answer: 2, why: "AI translations can have mistakes." },
      { q: "A good shelf sign is:", options: ["Under about 12 words", "A full page", "Blank", "In tiny print"], answer: 0, why: "Short signs are read quickly." },
      { q: "What is safety stock?", options: ["Insurance", "A locked safe", "Extra items in case sales jump or delivery is late", "Expired items"], answer: 2, why: "It protects against running out." },
      { q: "Sold 5 a week, delivery 2 weeks, safety stock 5. Reorder point?", options: ["7", "10", "15", "25"], answer: 2, why: "5 x 2 + 5 = 15." },
      { q: "After AI writes a spreadsheet formula you should:", options: ["Trust it", "Test it on a few rows", "Delete it", "Print it"], answer: 1, why: "Formulas can be wrong." },
      { q: "Why track stock?", options: ["To confuse staff", "For fun", "Because AI says so", "To run out less and avoid too much slow stock"], answer: 3, why: "Both cost you money." },
      { q: "POS stands for:", options: ["Point of sale", "Price of service", "Post office slip", "Product order sheet"], answer: 0, why: "It rings up sales." },
      { q: "Sorting by sales dollars shows:", options: ["Staff hours", "Which are heaviest", "Which are newest", "Which items bring in the most money"], answer: 3, why: "Dollars show revenue by item." },
      { q: "When pasting sales into AI, include:", options: ["Card numbers", "Customer names", "Item totals only", "Supplier passwords"], answer: 2, why: "No private data." },
      { q: "When should you plan a seasonal promotion?", options: ["The same day", "About a month ahead", "After the season", "Never"], answer: 1, why: "Time to order stock and make signs." },
      { q: "What is a bundle?", options: ["A broken item", "A tax", "A loan", "Items sold together for one price"], answer: 3, why: "Bundles combine items." },
      { q: "Before a promotion, use your reorder sheet to:", options: ["Hide prices", "Delete items", "Make sure you have enough stock", "Pay staff"], answer: 2, why: "Running out ruins a promotion." },
      { q: "Measure a promotion by comparing with:", options: ["The same weeks before", "A competitor's guess", "Nothing", "Next year"], answer: 0, why: "A compare period shows the change." },
      { q: "When AI writes your promotion summary, you:", options: ["Trust every number", "Check its math against your sheet", "Skip reading it", "Post it unread"], answer: 1, why: "AI can make math mistakes." },
      { q: "Which should never go into an AI tool?", options: ["Item names", "Supplier account passwords", "Weekly totals", "Season names"], answer: 1, why: "Passwords are private." },
      { q: "Which decision does this course leave to you, not AI?", options: ["Which items to promote and at what price", "How a caption is worded", "Ideas for bundles", "Sign wording"], answer: 0, why: "AI suggests; you decide with your numbers." }
    ]
  }
};
