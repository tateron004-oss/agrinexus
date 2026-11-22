"use strict";

// Koach Learn course: Small Business -> "Supply Chain and Inventory Basics" (owner's request, 28 October 2026: life, people and career skills beyond AI).
// Skill-building: by the end the student can DO the skill in `outcome`. Two chapters of three micro-lessons; a knowledge check closes each chapter; a 20-question quiz closes the course.
// No laws, fees or agency rules are taught here, so no lesson needs an outside source; the math (reorder point, safety stock) and FIFO are standard practice.

module.exports = {
  id: "smallbiz-supply-chain",
  category: "Small Business",
  name: "Supply Chain and Inventory Basics",
  skills: "Mapping your supply chain, Finding and comparing suppliers, Placing and checking orders, Counting inventory, Setting reorder points and safety stock, Keeping a spreadsheet inventory with first-in-first-out",
  outcome: "choose and compare suppliers, place and check orders, count your stock, work out when to reorder and how much extra to keep, and run a simple spreadsheet inventory that uses first-in-first-out.",
  about: [
    "Running out of your best seller loses sales and customers. Buying too much ties up cash on a shelf, and some stock spoils or goes out of style. Good supply chain and inventory habits keep the right amount of the right items in stock.",
    "This course is for small business owners and staff who buy and sell goods or use supplies: a corner store, a food truck, a salon, a farm stand, an online shop or a cleaning company. You will map your supply chain, find and compare suppliers, place and check orders, count stock, work out a reorder point and safety stock, and build a simple spreadsheet that flags when to reorder.",
    "You need only a pen and paper or a free spreadsheet such as Google Sheets or Microsoft Excel on the web. The examples use simple numbers, so you can follow along even if math is not your favorite.",
    "Each lesson takes about five minutes and ends with a task you do right away. There is a knowledge check after each chapter and a 20-question quiz at the end."
  ],
  finalTask: "Build a simple inventory spreadsheet for five items you buy or sell, with columns for item, SKU, main supplier, backup supplier, unit cost, on hand, average daily use, lead time in days, safety stock, reorder point (calculated with a formula) and a reorder flag, and write down how you will keep first-in-first-out on the shelf.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Owners and managers of small businesses that buy and sell goods or use supplies, such as shops, corner stores, restaurants, salons, market vendors and online sellers, many of them minority-owned.",
    startingPoint: "Buy stock and supplies regularly and know their best sellers. Most order by habit or memory, rarely count stock on a schedule, and have not used a reorder point or a spreadsheet inventory.",
    gap: "Running out of best sellers loses sales, and buying too much ties up cash and leads to spoiled or unsold stock. Learners need simple habits and a spreadsheet that tell them what to order, when and how much, and that catch mistakes and losses.",
    constraints: [
      "Basic math: multiplication and simple spreadsheet formulas, explained step by step",
      "Devices: a phone or computer with a free spreadsheet such as Google Sheets or Excel on the web",
      "Time: about 60 minutes in total, with counting done on the learner's own schedule",
      "Scam risk from new suppliers that want wire transfers, gift cards or crypto",
      "Privacy: no supplier prices or private business data needed in AI tools"
    ],
    prerequisites: "None."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Given your top five items", action: "draw your supply chain and identify the weak spots", standard: "with a backup supplier or extra stock planned for each weak spot" },
    { id: "O2", condition: "Given one item you buy", action: "compare three suppliers on landed cost, minimum order, lead time, payment terms and reliability", standard: "with a written quote from each and warning signs checked" },
    { id: "O3", condition: "Given an order to place", action: "write a purchase order and check the delivery against it", standard: "with every problem written on the slip and reported the same day" },
    { id: "O4", condition: "Given your stock and your records", action: "count your inventory and find the difference from your records", standard: "with every mismatch recounted by a second person" },
    { id: "O5", condition: "Given an item's daily use and lead time", action: "calculate its safety stock and reorder point", standard: "getting the reorder point right with the formula" },
    { id: "O6", condition: "Using a free spreadsheet", action: "build an inventory sheet that flags items to reorder, and plan how to keep first-in-first-out on the shelf", standard: "with the reorder point and status calculated by formulas" }
  ],
  chapters: [
    {
      name: "Chapter 1: Suppliers and ordering",
      lessons: [
        {
          objectives: ["O1"],
          title: "Mapping your supply chain",
          minutes: 5,
          goal: "Draw your supply chain for your top items and spot where it could break.",
          text: [
            "A supply chain is every step that gets a product to your customer: the maker, any wholesaler or distributor, shipping, your shelf or storeroom, and finally the customer. Even a small business has one.",
            "Start with your top five items: the ones that bring in the most money or that you cannot run without. For each, write who you buy from, how it gets to you, how long it takes, and where you keep it.",
            "Then look for weak spots. Do you buy an important item from only one supplier? Does it come from far away? Does it spoil quickly? Is it seasonal? A weak spot is where you should keep extra stock or line up a backup supplier.",
            "An AI assistant can help you brainstorm what could go wrong for each item, such as a supplier closing, a price jump or a shipping delay. You decide which risks are real for your business."
          ],
          steps: ["List your top five items.", "For each, write the supplier, how it ships, how long it takes and where you store it.", "Draw arrows: supplier to shipping to you to customer.", "Circle weak spots: one supplier, long distance, spoils fast, seasonal.", "Write one fix for each weak spot."],
          words: [["Supply chain", "all the steps that get a product from the maker to your customer."], ["Supplier", "a business you buy goods or materials from."], ["Wholesaler or distributor", "a business that buys in bulk from makers and sells to other businesses."], ["Weak spot", "a step where something could easily go wrong."]],
          slides: [
            { title: "What a supply chain is", bullets: ["Maker, wholesaler, shipping", "Your shelf or storeroom", "Your customer"] },
            { title: "Map your top five items", bullets: ["Who you buy from", "How it gets to you and how long it takes", "Where you keep it"] },
            { title: "Find the weak spots", bullets: ["Only one supplier", "Far away or slow shipping", "Spoils fast or is seasonal"] },
            { title: "Fix the weak spots", bullets: ["Keep a little extra stock", "Line up a backup supplier"] }
          ],
          tryIt: "Draw the supply chain for your top five items on one page. Circle every weak spot and write one fix next to each, such as find a backup supplier or keep one extra week of stock.",
          youCanNow: "map your supply chain for your most important items and point out where it could break.",
          quickCheck: [
            { objective: "O1", q: "Which items should you map first?", options: ["Your top five items that bring in the most money or you cannot run without", "Every item you have ever sold", "Only items that are on sale", "Items your competitors sell"], answer: 0, why: "Start with your top five items by money or importance." },
            { objective: "O1", q: "Your key item comes from far away and spoils fast. What do you do?", options: ["Ignore it", "Mark it as a weak spot and plan a backup supplier or extra stock", "Stop selling it right away", "Let AI decide which risks are real"], answer: 1, why: "A weak spot is where you keep extra stock or line up a backup supplier; you decide which risks are real." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Finding and comparing suppliers",
          minutes: 6,
          goal: "Find three possible suppliers for one item and compare them on more than price.",
          text: [
            "Places to find suppliers: makers and brands (ask who distributes in your area), wholesalers and distributors, trade shows, industry associations, local farms and makers, and other business owners in your field. Search online with the item name plus wholesale or distributor.",
            "Compare on more than price. Look at the unit price, the minimum order quantity, lead time, shipping cost, payment terms, quality, and how reliable they are. Add shipping and fees to the price to get the landed cost, the real cost of each unit when it reaches you.",
            "Ask each supplier for a written quote and, if you can, a sample. Ask other customers or check reviews. Keep at least one backup supplier for every important item.",
            "Be careful with new suppliers that only accept wire transfers, gift cards or crypto, that have prices far below everyone else, or that rush you. Check their address and phone number, and start with a small order."
          ],
          steps: ["List three possible suppliers for one item.", "Ask each for a written quote: unit price, minimum order, lead time, shipping and payment terms.", "Work out the landed cost per unit for each.", "Ask for a sample and check reviews or references.", "Choose a main supplier and a backup."],
          words: [["Minimum order quantity (MOQ)", "the smallest order a supplier will accept."], ["Lead time", "the time from placing an order to having it in hand."], ["Landed cost", "the full cost of a unit when it reaches you: price plus shipping and fees."], ["Payment terms", "when you must pay, for example Net 30 means within 30 days."], ["Quote", "a written price offer from a supplier."]],
          slides: [
            { title: "Where to find suppliers", bullets: ["Makers, wholesalers and distributors", "Trade shows and industry associations", "Local makers and other owners"] },
            { title: "Compare more than price", bullets: ["Unit price and minimum order", "Lead time and shipping", "Payment terms, quality, reliability"] },
            { title: "Landed cost", bullets: ["Price + shipping + fees", "Divide by the number of units", "The real cost of each unit"] },
            { title: "Stay safe", bullets: ["Get written quotes and samples", "Keep a backup supplier", "Avoid wire-only, too-cheap, rushed deals"] }
          ],
          tryIt: "Pick one item you buy. Find three possible suppliers and fill in a small table: unit price, minimum order, lead time, shipping, payment terms and landed cost per unit. Circle your main choice and your backup. Example: 100 units at $2.00 with $30 shipping is a landed cost of $2.30 a unit.",
          youCanNow: "find suppliers, compare them on landed cost, lead time, terms and reliability, and choose a main supplier and a backup.",
          quickCheck: [
            { objective: "O2", q: "Which is a good place to find suppliers?", options: ["A random social media ad promising free goods", "Only the cheapest website you find", "Trade shows and industry associations", "Emails from strangers asking for gift cards"], answer: 2, why: "Trade shows, associations, wholesalers and other owners are good places to find suppliers." },
            { objective: "O2", q: "A new supplier has a great price. What do you do before a big order?", options: ["Order a year's supply to lock in the price", "Pay by wire right away", "Skip the quote to save time", "Get a written quote and a sample, check their address and phone, and start small"], answer: 3, why: "Ask for a written quote and sample, check them out and start with a small order." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Placing and checking orders",
          minutes: 5,
          goal: "Write a clear purchase order and check a delivery against it.",
          text: [
            "A purchase order (PO) is your written order to a supplier. It prevents mix-ups. It lists a PO number, the date, the supplier, each item with its code, the quantity, the price, the delivery date and address, and the payment terms.",
            "When the delivery arrives, check it before you sign or put it away. Count the boxes and units, check that the items and sizes match the PO, look for damage, and check expiration dates on food or other goods that spoil.",
            "Write any problem on the delivery slip and tell the supplier the same day, with photos. Do not pay for what you did not receive.",
            "Keep each PO and its delivery slip and invoice together. Matching the three before you pay is called a three-way match, and it catches mistakes and overcharges."
          ],
          steps: ["Write a PO with number, date, supplier, items, quantities, prices, delivery date and terms.", "When the delivery comes, count it and compare it with the PO.", "Check for damage and expiration dates.", "Write problems on the delivery slip, take photos and tell the supplier that day.", "Before paying, match the PO, delivery slip and invoice."],
          words: [["Purchase order (PO)", "your written order to a supplier."], ["Delivery slip", "the paper that comes with a delivery listing what was sent."], ["Invoice", "the supplier's bill."], ["Three-way match", "checking the PO, delivery slip and invoice agree before paying."]],
          slides: [
            { title: "A clear purchase order", bullets: ["PO number, date and supplier", "Items, codes, quantities and prices", "Delivery date, address and terms"] },
            { title: "Check every delivery", bullets: ["Count boxes and units", "Match items and sizes to the PO", "Check damage and expiration dates"] },
            { title: "Problems?", bullets: ["Write it on the delivery slip", "Photos, and tell the supplier the same day", "Do not pay for what you did not get"] },
            { title: "Three-way match", bullets: ["PO + delivery slip + invoice", "Match them before you pay"] }
          ],
          tryIt: "Write a sample purchase order for one item from your supplier table, with every part from this lesson. Then write a five-line checklist you will use the next time a delivery arrives.",
          youCanNow: "write a clear purchase order, check a delivery against it, and match the paperwork before you pay.",
          quickCheck: [
            { objective: "O3", q: "Which belongs on a purchase order?", options: ["Each item with its code, quantity and price", "Your customers' names", "Your bank password", "Your sales goals"], answer: 0, why: "A PO lists the PO number, date, supplier, items with codes, quantities, prices, delivery and terms." },
            { objective: "O3", q: "A box of yogurt arrives with expiration dates that have passed. What do you do?", options: ["Put it on the shelf quickly", "Write it on the slip, take photos, tell the supplier that day and do not pay for it", "Sign the slip and complain next month", "Throw it out and say nothing"], answer: 1, why: "Check dates before signing, write problems on the slip and do not pay for what you did not properly receive." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Suppliers and ordering",
        questions: [
          { objective: "O1", q: "You buy your best-selling item from only one supplier. What is the risk?", options: ["None at all", "If that supplier has a problem, you run out", "Your prices will always drop", "Customers will buy more"], answer: 1, why: "One supplier is a weak spot; a backup protects you." },
          { objective: "O2", q: "What is lead time?", options: ["The time from ordering to having the goods in hand", "The time a customer waits in line", "How long a product lasts on the shelf", "The supplier's business hours"], answer: 0, why: "Lead time is how long an order takes to arrive." },
          { objective: "O2", q: "Supplier A sells 100 units for $200 with $50 shipping. What is the landed cost per unit?", options: ["$2.00", "$2.25", "$0.50", "$2.50"], answer: 3, why: "$200 plus $50 is $250; divided by 100 units is $2.50 each." },
          { objective: "O2", q: "A new supplier has very low prices and accepts only gift cards. What do you do?", options: ["Order a lot right away", "Pay with gift cards", "Be careful: check them out and avoid that payment method", "Send your bank login"], answer: 2, why: "Gift-card-only payment and too-low prices are scam warning signs." },
          { objective: "O3", q: "A delivery is missing two boxes. What should you do?", options: ["Sign and say nothing", "Pay for everything anyway", "Throw away the delivery slip", "Write it on the slip, take photos and tell the supplier that day"], answer: 3, why: "Recording problems right away lets you get what you paid for." }
        ]
      }
    },
    {
      name: "Chapter 2: Inventory control",
      lessons: [
        {
          objectives: ["O4"],
          title: "Counting your inventory",
          minutes: 5,
          goal: "Do an accurate count of your stock and find the difference from your records.",
          text: [
            "Inventory is the goods and supplies you have on hand. Your records say how much you should have; a count shows how much you really have. The difference is often called shrinkage: loss from theft, damage, spoilage or mistakes.",
            "A full physical count means counting everything, often once or twice a year, when the business is closed. A cycle count means counting a few items each week, so every item gets counted over time. Count your most valuable or fastest-selling items most often.",
            "To count well: give each item a SKU (a short code), count in the same unit you buy and sell in, count shelf by shelf, and have a second person recount anything that does not match. Write the count, the date and who counted.",
            "Then compare your count with your records. Find out why big differences happened, and fix your records to match the real count."
          ],
          steps: ["Give each item a SKU and a unit, such as each, box or pound.", "Choose a full count or weekly cycle counts.", "Count shelf by shelf and write the count, date and counter.", "Have a second person recount any mismatch.", "Compare with your records, find the reasons for big differences and update the records."],
          words: [["Inventory", "the goods and supplies you have on hand."], ["SKU", "stock keeping unit: a short code for each item you stock."], ["Cycle count", "counting a few items at a time on a regular schedule."], ["Shrinkage", "stock lost to theft, damage, spoilage or mistakes."]],
          slides: [
            { title: "Records vs reality", bullets: ["Records: what you should have", "Count: what you really have", "The gap is shrinkage"] },
            { title: "Two ways to count", bullets: ["Full count: everything, once or twice a year", "Cycle count: a few items every week", "Count valuable, fast items most often"] },
            { title: "Count well", bullets: ["A SKU and unit for every item", "Shelf by shelf; write date and counter", "Recount any mismatch"] },
            { title: "After the count", bullets: ["Compare with your records", "Find reasons for big gaps", "Update the records"] }
          ],
          tryIt: "Choose five items. Give each a SKU and a unit. Count them now and write the count, date and your name. If you have records, compare and write the difference for each.",
          youCanNow: "count your inventory accurately, run cycle counts and find shrinkage by comparing counts with records.",
          quickCheck: [
            { objective: "O4", q: "What is a full physical count?", options: ["Counting one shelf", "Counting only expensive items", "Counting everything, often once or twice a year", "Guessing from sales"], answer: 2, why: "A full physical count means counting everything, often once or twice a year." },
            { objective: "O4", q: "You find a big difference between your count and your records. What do you do after the recount?", options: ["Change the count to match the records", "Ignore it", "Delete the item", "Find out why it happened and fix your records to match the real count"], answer: 3, why: "Find out why big differences happened and fix your records to match the real count." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Reorder point and safety stock",
          minutes: 6,
          goal: "Calculate when to reorder an item and how much extra to keep.",
          text: [
            "The reorder point is the stock level that tells you to order again. If you order when you hit it, the new stock should arrive before you run out.",
            "Reorder point = average daily use x lead time in days + safety stock. Example: you sell 10 bags of rice a day, and your supplier takes 4 days to deliver. Without any extra you need 10 x 4 = 40 bags to last until the order comes.",
            "Safety stock is extra stock for surprises: a busy day or a late truck. A simple way: decide how many extra days to cover and multiply by daily use. With 2 extra days, safety stock is 10 x 2 = 20 bags. So the reorder point is 40 + 20 = 60 bags. When you get down to 60, order.",
            "Keep more safety stock for items that matter most, items with long or unreliable lead times, and items you buy from one supplier. Keep less for items that spoil fast or cost a lot to hold. Check the numbers every few months, because sales and lead times change."
          ],
          steps: ["Find the average daily use: units used over 30 days divided by 30.", "Find the lead time in days from your supplier.", "Choose extra days to cover and multiply by daily use: that is safety stock.", "Reorder point = daily use x lead time + safety stock.", "Recheck the numbers every few months."],
          words: [["Reorder point", "the stock level that tells you to order again."], ["Safety stock", "extra stock kept for surprises like busy days or late deliveries."], ["Average daily use", "how many units you use or sell on a typical day."]],
          slides: [
            { title: "The reorder point", bullets: ["The level that tells you to order", "New stock arrives before you run out"] },
            { title: "The formula", bullets: ["Daily use x lead time + safety stock"] },
            { title: "Worked example", bullets: ["10 bags a day, 4-day lead time: 40 bags", "Safety stock, 2 extra days: 20 bags", "Reorder point: 60 bags"] },
            { title: "How much safety stock", bullets: ["More: key items, slow or unreliable suppliers", "Less: items that spoil or cost a lot to hold", "Recheck every few months"] }
          ],
          tryIt: "For one item, find its average daily use and lead time. Choose extra days of cover. Work out the safety stock and the reorder point and write them on a card you keep by that item.",
          youCanNow: "calculate the reorder point and safety stock for an item and know when to keep more or less extra.",
          quickCheck: [
            { objective: "O5", q: "You use 6 units a day and want 3 extra days of cover. What is the safety stock?", options: ["18", "9", "3", "63"], answer: 0, why: "Safety stock is extra days times daily use: 3 x 6 = 18." },
            { objective: "O5", q: "Your supplier's lead time grows from 4 days to 8 days. What do you do?", options: ["Keep the same reorder point", "Recalculate the reorder point with the new lead time", "Stop using safety stock", "Order only when you run out"], answer: 1, why: "Check the numbers when lead times change, because the reorder point depends on them." }
          ]
        },
        {
          objectives: ["O6"],
          title: "A spreadsheet inventory and first-in-first-out",
          minutes: 6,
          goal: "Build a spreadsheet that flags items to reorder and keep stock moving first-in-first-out.",
          text: [
            "A free spreadsheet, such as Google Sheets or Microsoft Excel on the web, can run a small business's inventory. Make one row per item and these columns: Item, SKU, Main supplier, Backup supplier, Unit cost, On hand, Daily use, Lead time (days), Safety stock, Reorder point and Status.",
            "Let the spreadsheet do the math. If Daily use is in column G, Lead time in H and Safety stock in I, the reorder point in J2 is =G2*H2+I2. The status in K2 can be =IF(F2<=J2,\"REORDER\",\"OK\"), which shows REORDER when on hand (column F) is at or below the reorder point. Copy the formulas down. Update On hand after each count or delivery.",
            "First-in-first-out (FIFO) means you sell or use the oldest stock first. It keeps food and other goods from expiring at the back of the shelf. When new stock arrives, put it behind or under the older stock, and label boxes with the date received.",
            "An AI assistant can help you write or fix a spreadsheet formula. Describe your columns in words; you do not need to share your supplier prices or other private business data."
          ],
          steps: ["Open a free spreadsheet and add the eleven column headings.", "Fill in five items.", "In the Reorder point column, enter =G2*H2+I2 and copy it down.", "In the Status column, enter =IF(F2<=J2,\"REORDER\",\"OK\") and copy it down.", "Update On hand after each count or delivery.", "On the shelf, put new stock behind the old and date-label each box."],
          words: [["Spreadsheet", "a grid of rows and columns that can do math for you."], ["Formula", "an instruction in a spreadsheet cell that calculates a result, starting with =."], ["First-in-first-out (FIFO)", "using or selling the oldest stock first."]],
          slides: [
            { title: "One row per item", bullets: ["Item, SKU, main and backup supplier", "Unit cost, on hand, daily use, lead time", "Safety stock, reorder point, status"] },
            { title: "Let the formulas work", bullets: ["Reorder point: =G2*H2+I2", "Status: =IF(F2<=J2,\"REORDER\",\"OK\")", "Copy down; update on hand after counts"] },
            { title: "First-in-first-out", bullets: ["Sell or use the oldest stock first", "New stock goes behind or under the old", "Date-label every box"] },
            { title: "AI can help with formulas", bullets: ["Describe your columns in words", "No need to share prices or private data"] }
          ],
          tryIt: "Final task: build your inventory spreadsheet for five items with all eleven columns, the reorder point formula and the REORDER flag. Then write two sentences on how you will keep first-in-first-out on your shelf.",
          youCanNow: "run a simple spreadsheet inventory that flags when to reorder and keep stock moving first-in-first-out.",
          quickCheck: [
            { objective: "O6", q: "In this lesson's sheet, what does =G2*H2+I2 calculate?", options: ["The unit cost", "The status", "The reorder point", "The number of suppliers"], answer: 2, why: "Daily use times lead time plus safety stock gives the reorder point." },
            { objective: "O6", q: "You want AI to help fix a spreadsheet formula. What do you share?", options: ["Your supplier prices and bank details", "Your whole customer list", "Your login password", "A description of your columns in words"], answer: 3, why: "Describe your columns; you do not need to share prices or private business data." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Inventory control",
        questions: [
          { objective: "O4", q: "Counting a few items each week so every item gets counted over time is called:", options: ["A full physical count", "Shrinkage", "A cycle count", "A purchase order"], answer: 2, why: "A cycle count spreads counting across the year." },
          { objective: "O5", q: "You use 5 units a day, lead time is 6 days, and safety stock is 10. What is the reorder point?", options: ["30", "40", "11", "16"], answer: 1, why: "5 x 6 = 30, plus 10 safety stock = 40." },
          { objective: "O5", q: "Which item should usually get more safety stock?", options: ["A key item from one slow, unreliable supplier", "An item that spoils in a day", "An item you no longer sell", "A very costly item that sells once a year"], answer: 0, why: "Important items with risky supply need more cushion." },
          { objective: "O6", q: "In the spreadsheet, on hand is 25 and the reorder point is 30. What does the status show?", options: ["OK", "Error", "Nothing", "REORDER"], answer: 3, why: "On hand is at or below the reorder point, so the formula shows REORDER." },
          { objective: "O6", q: "New milk arrives. Following FIFO, where do you put it?", options: ["In front of the older milk", "Behind the older milk", "In the trash", "On top of the older milk so it sells first"], answer: 1, why: "FIFO puts new stock behind old so the oldest sells first." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Supply Chain and Inventory Basics",
    questions: [
      { objective: "O1", q: "What is a supply chain?", options: ["All the steps that get a product from the maker to your customer", "A chain that locks your storeroom", "A list of customers", "A type of loan"], answer: 0, why: "A supply chain covers every step from maker to customer." },
      { objective: "O1", q: "Which is a weak spot in a supply chain?", options: ["Two reliable suppliers", "An important item from only one supplier", "A short lead time", "Accurate counts"], answer: 1, why: "Depending on one supplier is risky." },
      { objective: "O1", q: "What is a good fix for a weak spot?", options: ["Ignore it", "Raise prices", "Line up a backup supplier or keep extra stock", "Stop counting"], answer: 2, why: "Backups and extra stock protect you from breaks." },
      { objective: "O2", q: "A minimum order quantity is:", options: ["The most you can buy", "The time an order takes", "The supplier's address", "The smallest order a supplier will accept"], answer: 3, why: "MOQ is the smallest order a supplier accepts." },
      { objective: "O2", q: "What is landed cost?", options: ["Price plus shipping and fees, per unit", "The price on the website only", "The cost of a plane ticket", "Your rent"], answer: 0, why: "Landed cost is the real cost of each unit when it reaches you." },
      { objective: "O2", q: "Net 30 payment terms mean:", options: ["Pay 30% now", "Pay within 30 days", "Pay after 30 orders", "Pay $30"], answer: 1, why: "Net 30 means the full amount is due within 30 days." },
      { objective: "O2", q: "Before choosing a new supplier, it is smart to:", options: ["Pay the full year up front", "Send your bank login", "Get a written quote and a sample, and start small", "Pay by gift card"], answer: 2, why: "Quotes, samples and small first orders lower your risk." },
      { objective: "O3", q: "What is a purchase order?", options: ["The supplier's bill", "A customer receipt", "A delivery truck", "Your written order to a supplier"], answer: 3, why: "A PO is your written order listing items, quantities and prices." },
      { objective: "O3", q: "A three-way match compares:", options: ["The PO, delivery slip and invoice", "Three suppliers' logos", "Three employees' schedules", "Three bank accounts"], answer: 0, why: "Matching the three catches mistakes before you pay." },
      { objective: "O3", q: "When a delivery arrives, you should first:", options: ["Pay the invoice", "Count it and check it against the PO", "Throw away the slip", "Put it straight on the shelf unchecked"], answer: 1, why: "Checking first catches missing or damaged goods." },
      { objective: "O4", q: "What is shrinkage?", options: ["Smaller packaging", "Lower prices", "Stock lost to theft, damage, spoilage or mistakes", "A sale"], answer: 2, why: "Shrinkage is the gap between records and real stock." },
      { objective: "O4", q: "What is a SKU?", options: ["A supplier's name", "A type of shelf", "A shipping company", "A short code for each item you stock"], answer: 3, why: "SKU stands for stock keeping unit." },
      { objective: "O4", q: "Your count does not match your records for one item. What do you do?", options: ["Have a second person recount it", "Ignore it", "Change the records without checking", "Throw the item away"], answer: 0, why: "A recount confirms the real number before you update records." },
      { objective: "O5", q: "The reorder point formula is:", options: ["Price x quantity", "Daily use x lead time + safety stock", "On hand - sales", "Safety stock x 10"], answer: 1, why: "It covers use during the lead time plus a cushion." },
      { objective: "O5", q: "You sell 8 units a day with a 5-day lead time and 16 units of safety stock. Reorder point?", options: ["40", "13", "56", "21"], answer: 2, why: "8 x 5 = 40, plus 16 = 56." },
      { objective: "O5", q: "Safety stock is:", options: ["Stock locked in a safe", "Stock you never sell", "Old stock", "Extra stock kept for surprises like late deliveries"], answer: 3, why: "Safety stock covers busy days and delays." },
      { objective: "O5", q: "Daily use was 300 units over the last 30 days. What is the average daily use?", options: ["10", "30", "300", "9,000"], answer: 0, why: "300 divided by 30 days is 10 a day." },
      { objective: "O6", q: "In a spreadsheet, a formula starts with:", options: ["#", "=", "@", "$"], answer: 1, why: "Spreadsheet formulas begin with an equals sign." },
      { objective: "O6", q: "What does first-in-first-out mean?", options: ["Sell the newest stock first", "Order from the first supplier you find", "Sell or use the oldest stock first", "Count the first shelf only"], answer: 2, why: "FIFO keeps older stock from expiring." },
      { objective: "O6", q: "How can you make FIFO easy on the shelf?", options: ["Put new stock in front", "Mix all boxes together", "Remove labels", "Date-label boxes and put new stock behind the old"], answer: 3, why: "Labels and placement make the oldest stock easy to grab first." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Pre-Test: What Do You Already Know?",
    from: [
      0,
      4,
      7,
      10,
      13,
      15,
      18
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      {
        name: "Items and suppliers",
        objective: "O2",
        notYet: "Items are missing a SKU, unit cost or main supplier.",
        meets: "Five items, each with SKU, main supplier, backup supplier and unit cost.",
        exceeds: "Unit cost is the landed cost including shipping and fees."
      },
      {
        name: "Stock and use numbers",
        objective: "O4",
        notYet: "On hand, daily use or lead time is guessed or missing.",
        meets: "On hand comes from a real count, with daily use and lead time filled in.",
        exceeds: "Notes the count date and who counted."
      },
      {
        name: "Reorder point and safety stock",
        objective: "O5",
        notYet: "Reorder point is typed in by hand or calculated wrong.",
        meets: "Safety stock set and reorder point calculated with a formula for every item.",
        exceeds: "More safety stock is kept for key or single-supplier items, with a reason."
      },
      {
        name: "Reorder flag",
        objective: "O6",
        notYet: "No status column, or it does not change when stock is low.",
        meets: "Status shows REORDER when on hand is at or below the reorder point.",
        exceeds: "The learner tests it by changing On hand and checking the flag."
      },
      {
        name: "First-in-first-out plan",
        objective: "O6",
        notYet: "No plan for rotating stock.",
        meets: "Written plan to date-label boxes and put new stock behind the old.",
        exceeds: "Names who does it and when, such as on every delivery."
      }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Owners still using the inventory sheet 30 days later (follow-up survey)",
      "Owners who report fewer stock-outs or less spoiled or wasted stock within 60 days",
      "Owners who line up a backup supplier for at least one key item"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A phone or computer with a free spreadsheet such as Google Sheets or Excel on the web",
      "A list of five items you buy or sell, with recent orders and delivery slips",
      "Paper, pen and a calculator for counting and practice math",
      "About 60 minutes in total: lessons, practice, checks and the final task"
    ],
    facilitatorNotes: [
      "Work through the reorder point example together on a board before learners use their own numbers.",
      "Bring a sample spreadsheet with the formulas already set up for learners who are new to spreadsheets.",
      "Warn learners about supplier scams that ask for wire transfers, gift cards or crypto.",
      "Let learners use sample items if they do not want to share real prices in class.",
      "Score the final task with the rubric, and give feedback on one Not yet row at a time."
    ]
  }
};
