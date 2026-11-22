"use strict";

// Koach Learn course: Africa: Life and Work -> "Running a Tailoring and Fashion Business" (owner, 30 October 2026: "are there any more courses africans can use to support there lives").
// Written in the ADDIE format (model: re-entry/reentry-ai-digital-confidence.js). For tailors, seamstresses, fashion designers and apprentices across Africa who can already sew and want to run the work as a
// business: a safe workshop, measurements and order cards, costing and pricing, planning orders and deadlines, money records and mobile money safety, registration, and showing work to customers.
// It teaches business skills, not sewing techniques. Registration rules and fees change: the course names each registry and tells students to check with it. All money figures are examples, not real prices.

const KE_BRS = { name: "Business Registration Service (Kenya): business name registration through eCitizen", url: "https://brs.go.ke/" };
const NG_CAC = { name: "Corporate Affairs Commission (Nigeria): business name and company registration", url: "https://www.cac.gov.ng/" };
const GH_ORC = { name: "Office of the Registrar of Companies (Ghana): business names (sole proprietorships)", url: "https://orc.gov.gh/" };

module.exports = {
  id: "afr-tailoring-fashion-business",
  category: "Africa: Life and Work",
  name: "Running a Tailoring and Fashion Business",
  skills: "Keeping a safe workshop, Taking measurements and order cards, Costing and pricing a garment, Planning orders and deadlines, Keeping money records safely, Showing your work to customers",
  outcome: "run your sewing work as a business: keep a safe workshop, take orders on a clear order card, price each garment so it pays, plan your week so you deliver on time, keep money records, and show your work to new customers.",
  about: [
    "Many tailors and seamstresses sew beautifully but still struggle: a price that does not cover the fabric lining and thread, a customer who never comes back to collect, three wedding orders due on the same Saturday, a deposit nobody wrote down. This course is for tailors, seamstresses, fashion designers and apprentices in towns and villages in Kenya, Nigeria, Ghana, Senegal, Côte d'Ivoire, Cameroon, Morocco and across Africa.",
    "You will make your workshop safer, use an order card for every job, work out what a garment really costs and what to charge, plan your week around your hours, keep a simple money book, keep mobile money safe from scams, find out how to register your business name, and show your work on WhatsApp or in your shop.",
    "This course is about running the business, not about sewing techniques. Each lesson takes about five minutes and ends with a \"Try it now\" task for your own workshop. All money figures are examples, not real prices."
  ],
  finalTask: "Make a starter kit for your tailoring business: a price list for at least five garments you make, each with its cost worked out; a blank order card you will use for every job; a plan for one busy week that fits your real hours; a money book page with deposits and spending; and one post or catalogue item showing a finished piece, with its price and how to order.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Tailors, seamstresses, fashion designers, apprentices and young people finishing an apprenticeship, in towns and villages across Africa. Many work alone or with one or two helpers, from a small shop, a market stall or home.",
    startingPoint: "Can sew and finish garments, and already take some orders from family, neighbours and church or mosque members. Most price by habit or by what others charge, take measurements on scraps of paper and keep money in their head or one pocket.",
    gap: "Without costing, order cards, a weekly plan and money records, tailors lose money on underpriced work, miss deadlines in busy seasons, argue with customers about what was agreed and cannot show a lender or a big client how the business is doing. These simple tools turn sewing skill into a steady income.",
    constraints: [
      "Reading level: plain words and short sentences; many learners speak English as a second language",
      "Devices: a basic phone or smartphone, often with costly data; a notebook, pen and calculator",
      "Money: small budgets; no costly software or equipment needed",
      "Rules: business registration rules and fees differ by country and change; learners check with their national registry",
      "Time: 4 to 6 minute lessons that fit between customers"
    ],
    prerequisites: "Can sew at least one type of garment from start to finish. Basic adding, multiplying and dividing."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Given your own sewing space, machine and tools", action: "check a sewing workshop for safety risks from needles, scissors, irons, electricity and fire, and fix them", standard: "finding and fixing at least three risks" },
    { id: "O2", condition: "Given a customer who wants a garment made", action: "take the customer's measurements and fill in an order card with style, fabric, price, deposit and due date", standard: "with every part filled in and read back to the customer" },
    { id: "O3", condition: "Given the materials, time and running costs for one garment", action: "work out the full cost of the garment and set a price that covers it with a profit", standard: "counting materials, your time and running costs, and comparing with the local market" },
    { id: "O4", condition: "Given your open orders and the hours you can work", action: "plan a week of orders with realistic due dates", standard: "taking no more work than your hours allow, with time kept for fittings and busy seasons" },
    { id: "O5", condition: "Given a week of deposits, payments and spending", action: "record money in and money out in a money book and spot mobile money scams", standard: "with the balance correct and never sharing a PIN" },
    { id: "O6", condition: "Given a finished garment and a phone", action: "make a post or catalogue item that shows the garment, its price and how to order", standard: "with a clear photo and no customer's private details shown without permission" }
  ],
  chapters: [
    {
      name: "Chapter 1: Taking orders that pay",
      lessons: [
        {
          title: "A safe and tidy workshop",
          objectives: ["O1"],
          minutes: 5,
          goal: "Check your workshop for safety risks and fix at least three.",
          text: [
            "Your hands, eyes and back are your business. An injury can stop your work for weeks, and a fire can burn every customer's fabric. A few habits keep you and your apprentices safe.",
            "Sharp tools: keep fingers away from the needle and use the presser foot; never sew over pins; put scissors, blades and seam rippers in one place, points down; keep needles and pins in a pin cushion or tin, never in your mouth. Throw broken needles into a closed tin, not on the floor where children and customers walk.",
            "Heat and electricity: never leave a hot iron or charcoal iron alone, and stand it where it cannot fall; keep cloth and paper away from it. Check machine and iron cables for cuts and loose plugs. Do not overload one socket with many plugs. Unplug machines and irons when you close. Keep a bucket of sand or water, or a fire extinguisher if you can, near the door.",
            "Your body: sit with your back supported and the table at elbow height, use good light, and stand up and stretch every hour. Keep walkways clear of fabric rolls and cables so nobody trips."
          ],
          steps: ["Walk around your workshop slowly.", "Look for sharp tools, hot irons, damaged cables, overloaded sockets, things to trip on and poor light.", "Write each risk you find.", "Fix three today, for example a pin tin, a safe stand for the iron and clear walkways.", "Teach your apprentices the same rules."],
          words: [["Presser foot", "the part of the sewing machine that holds cloth flat under the needle."], ["Overloaded socket", "too many plugs in one power point; it can get hot and start a fire."], ["Apprentice", "a young person learning the trade by working with you."]],
          slides: [
            { title: "Your body is your business", bullets: ["An injury can stop work for weeks", "A fire can burn every customer's fabric", "Simple habits keep you safe"] },
            { title: "Sharp tools", bullets: ["Fingers away from the needle; never sew over pins", "Scissors and blades in one place, points down", "Pins in a cushion or tin, never in your mouth"] },
            { title: "Heat and electricity", bullets: ["Never leave a hot or charcoal iron alone", "Check cables; no overloaded sockets", "Unplug at closing; sand, water or extinguisher by the door"] },
            { title: "Your body and your space", bullets: ["Back supported, good light", "Stand and stretch every hour", "Clear walkways: no fabric rolls or cables underfoot"] }
          ],
          tryIt: "Walk around your workshop now. Write every safety risk you see. Fix three of them today and tick them off your list.",
          youCanNow: "check your workshop for sharp-tool, heat, electrical and trip risks, and fix them.",
          quickCheck: [
            { objective: "O1", q: "Where should you keep pins while you work?", options: ["In a pin cushion or a tin", "In your mouth, so they are quick to reach", "On the floor beside your chair", "Inside the fabric roll"], answer: 0, why: "A cushion or tin keeps pins away from your mouth, the floor and the customer's cloth." },
            { objective: "O1", q: "Five plugs are in one socket and it feels warm. What do you do?", options: ["Keep going; it is normal", "Unplug some and spread them out or use a safe extension", "Pour water on it to cool it", "Cover it with cloth"], answer: 1, why: "A warm, overloaded socket can start a fire; reduce the load and never use water near electricity." }
          ]
        },
        {
          title: "Measurements and the order card",
          objectives: ["O2"],
          minutes: 5,
          goal: "Take a customer's measurements and fill in a complete order card.",
          text: [
            "Many arguments with customers start because nothing was written down. \"I said long sleeves.\" \"You said Friday.\" \"I paid you half.\" An order card stops this. It is one page or one card for every job, with a copy or photo for the customer.",
            "An order card shows: the customer's name and phone number; the date; the style (a sketch or a photo of the style they want); the measurements; the fabric (who brings it, how many yards or metres, a small cutting stapled on); the price, the deposit paid and the balance; the fitting date and the due date; and your signature and theirs.",
            "Take measurements the same way every time, in the same order, with a good tape measure. Write the unit (cm or inches). Read the measurements and the details back to the customer before they leave. For an aso ebi order in Lagos, a kaba and slit in Kumasi or a boubou in Dakar for Tabaski, the card is the same: the customer and you both know exactly what was agreed."
          ],
          steps: ["Write the customer's name, phone number and the date.", "Sketch the style or attach a photo.", "Measure in your usual order and write the unit.", "Write the fabric details and staple a small cutting.", "Write the price, deposit, balance, fitting date and due date.", "Read it all back, both sign, and give the customer a copy or let them take a photo."],
          words: [["Order card", "a written record of one job: what, for whom, how much and when."], ["Deposit", "money paid before you start the work."], ["Balance", "the money still owed after the deposit."]],
          slides: [
            { title: "Why write it down", bullets: ["\"I said long sleeves.\" \"You said Friday.\"", "A card ends the argument", "One card per job; a copy for the customer"] },
            { title: "What the card shows", bullets: ["Name, phone, date; style sketch or photo", "Measurements with the unit", "Fabric details and a small cutting"] },
            { title: "Money and dates", bullets: ["Price, deposit paid, balance", "Fitting date and due date", "Both sign"] },
            { title: "Before the customer leaves", bullets: ["Read every detail back", "Fix any mistake now", "Customer keeps a copy or a photo"] }
          ],
          tryIt: "Draw your own order card on one page with every part from this lesson. Fill it in for a friend or family member as if they ordered a garment, then read it back to them.",
          youCanNow: "take measurements the same way each time and fill in an order card that you and the customer both agree on.",
          quickCheck: [
            { objective: "O2", q: "A customer says, \"You never told me Friday.\" What would have prevented this?", options: ["A bigger shop sign", "Sewing faster", "An order card with the due date that you both signed", "Charging less"], answer: 2, why: "A signed card with the due date shows what was agreed." },
            { objective: "O2", q: "You finish measuring. What do you do before the customer leaves?", options: ["Throw away the scrap of paper", "Ask for the full price only", "Start cutting at once", "Read every detail back and give them a copy or photo of the card"], answer: 3, why: "Reading back catches mistakes, and a copy means you both hold the same record." }
          ]
        },
        {
          title: "Costing and pricing a garment",
          objectives: ["O3"],
          minutes: 6,
          goal: "Work out the full cost of one garment and set a price that makes a profit.",
          text: [
            "Many tailors copy the price of the shop next door. But if your costs are higher, you may be working for nothing. Work out your own cost first, then decide the price.",
            "Materials: everything that goes into the garment if you buy it, such as lining, interfacing, thread, zip, buttons, embroidery thread and packaging. If the customer brings the fabric, do not count the fabric, but count everything else.",
            "Your time: how many hours the garment takes (cutting, sewing, fitting, finishing) times what you want to earn per hour. Running costs: rent, electricity or fuel for the generator, machine repairs, needles, phone data, a share for each garment. A simple way: add up one month's running costs and divide by how many garments you make in a month.",
            "Example (figures are examples only): a woman's dress in Kenya. Materials KES 450, time 4 hours at KES 200 = KES 800, running costs KES 250. Cost = KES 1,500. Add a profit, for example 30%, which is KES 450. Price = KES 1,950. Then compare with the market. If the market price is far lower, look for a cheaper method or a simpler style. Do not just drop your price below cost."
          ],
          steps: ["List and add the materials for one garment.", "Multiply the hours by what you want to earn per hour.", "Add a share of one month's running costs.", "Add the three: that is your cost.", "Add a profit to get your price.", "Compare with the market and adjust the style or method, not just the profit."],
          words: [["Cost", "all the money and time it takes to make one garment."], ["Running costs", "money you spend to keep the workshop open, like rent and electricity."], ["Profit", "what is left for you and the business after all costs are paid."], ["Margin", "the profit you add on top of cost."]],
          slides: [
            { title: "Cost first, price second", bullets: ["Copying the shop next door can mean working for nothing", "Know your own cost"] },
            { title: "Three parts of cost", bullets: ["Materials: lining, thread, zip, buttons, packaging", "Your time: hours x what you want per hour", "Running costs: rent, power, repairs, data"] },
            { title: "Example (KES, example only)", bullets: ["Materials 450 + time 800 + running 250 = 1,500", "Add 30% profit: 450", "Price: KES 1,950"] },
            { title: "If the market is lower", bullets: ["Simpler style or cheaper method", "Find customers who value your quality", "Never price below cost"] }
          ],
          tryIt: "Choose the garment you make most often. Work out its materials, your time and its share of running costs. Add a profit and write the price. Compare it with what you charge now.",
          youCanNow: "work out what one garment really costs you and set a price that pays you and the business.",
          quickCheck: [
            { objective: "O3", q: "The customer brings her own fabric. What do you still count in materials?", options: ["Nothing at all", "Lining, thread, zip and buttons that you buy", "Only the fabric", "The customer's transport"], answer: 1, why: "If you buy the lining, thread, zip and buttons, they are your costs even when the fabric is not." },
            { objective: "O3", q: "Materials GHS 60, time GHS 90, running costs GHS 30. What is the cost before profit? (Example figures.)", options: ["GHS 150", "GHS 120", "GHS 180", "GHS 90"], answer: 2, why: "60 + 90 + 30 = 180; profit is added on top of this." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Taking orders that pay",
        questions: [
          { objective: "O1", q: "Your apprentice leaves the charcoal iron standing on a pile of cloth while answering the phone. What do you teach?", options: ["Irons are fine on cloth", "Turn the iron face down on the table", "Never leave a hot iron alone, and stand it where it cannot fall, away from cloth", "Answer the phone faster"], answer: 2, why: "A hot iron left on or near cloth can start a fire in seconds." },
          { objective: "O2", q: "Which of these belongs on an order card?", options: ["The customer's PIN", "Due date, price, deposit and balance", "Your neighbour's prices", "The customer's ID number"], answer: 1, why: "The card records the job, the money and the dates; private numbers do not belong on it." },
          { objective: "O2", q: "Why staple a small cutting of the fabric to the card?", options: ["So you match the right fabric to the right order", "To use as a pin cushion", "Because the law requires it", "To charge more"], answer: 0, why: "A cutting stops mix-ups when many customers' fabrics are in the shop." },
          { objective: "O3", q: "Your neighbour charges NGN 8,000 for a style that costs you NGN 9,000 to make. What do you do? (Example figures.)", options: ["Charge NGN 7,500 to win customers", "Charge NGN 8,000 and lose NGN 1,000 each time", "Stop sewing that style for ever", "Look for a cheaper method or simpler style, and price above your cost"], answer: 3, why: "Pricing below cost loses money on every garment; change the method or style instead." },
          { objective: "O3", q: "How can you work out each garment's share of rent and electricity?", options: ["Guess a number", "Add a month's running costs and divide by the garments you make in a month", "Ask the customer to pay the rent", "Leave it out; it is small"], answer: 1, why: "Spreading monthly running costs over a month's garments gives a fair share for each one." }
        ]
      }
    },
    {
      name: "Chapter 2: Running the business",
      lessons: [
        {
          title: "Planning your week and your deadlines",
          objectives: ["O4"],
          minutes: 5,
          goal: "Plan a week of orders so every due date fits your real hours.",
          text: [
            "The busiest times, such as Christmas, Eid, Tabaski, Easter, school opening and the wedding season, are when tailors lose customers by promising too much. A simple weekly plan helps you say yes only to what you can finish.",
            "First, count your real sewing hours in a week, not counting time for customers, buying materials, power cuts and rest. Next, write how many hours each open order needs (from your costing). Then put each order on a day, earliest due date first, with the fitting before the finishing. Leave about one hour in five free for surprises such as a power cut or a broken machine.",
            "When the week is full, it is full. Offer the next free date, ask for the deposit to hold the slot, or say no politely. In a busy season, set a last day for new orders, for example two weeks before Tabaski in Dakar or before Christmas in Accra, and tell customers early on your status and in the shop."
          ],
          steps: ["Count your real sewing hours this week.", "List open orders with the hours each needs and the due date.", "Place orders on days, earliest due date first, with fittings before finishing.", "Keep about one hour in five free for surprises.", "When the week is full, offer the next free date or say no politely."],
          words: [["Due date", "the day you promised the garment will be ready."], ["Fitting", "when the customer tries the garment so you can adjust it."], ["Last day for orders", "the final day you accept new orders before a busy holiday."]],
          slides: [
            { title: "Busy seasons break promises", bullets: ["Christmas, Eid, Tabaski, Easter, weddings, school opening", "Promise only what your hours allow"] },
            { title: "Plan the week", bullets: ["Count your real sewing hours", "Hours needed for each order", "Earliest due date first; fitting before finishing"] },
            { title: "Keep some time free", bullets: ["About one hour in five for surprises", "Power cuts, broken machines, sick days"] },
            { title: "When the week is full", bullets: ["Offer the next free date", "A deposit holds the slot", "Announce your last day for holiday orders early"] }
          ],
          tryIt: "Write your real sewing hours for next week. List your open orders with the hours each needs and its due date. Put them on days. Is anything late? Decide now what you will tell that customer.",
          youCanNow: "plan a week of orders that fits your hours and set a last day for orders in a busy season.",
          quickCheck: [
            { objective: "O4", q: "You have 30 real sewing hours this week and orders that need 40. What do you do?", options: ["Promise all of them anyway", "Sew all night every night", "Ignore the due dates", "Move some due dates with the customers now, or take no new orders"], answer: 3, why: "Telling customers early and taking no more than your hours allow keeps your promises and your name." },
            { objective: "O4", q: "Why leave about one hour in five free in your plan?", options: ["For surprises like power cuts or a broken machine", "To go to the market", "Because customers like waiting", "It is not needed"], answer: 0, why: "Free time absorbs surprises so they do not make orders late." }
          ]
        },
        {
          title: "Money records, mobile money safety and registration",
          objectives: ["O5"],
          minutes: 6,
          goal: "Record money in and money out for a week and spot mobile money scams.",
          text: [
            "Keep business money and family money apart. A simple money book has four columns: date, what it was, money in, money out. Write every deposit, balance paid and purchase the same day. At the end of the week, add money in, take away money out, and check the result against the cash and mobile money you really have. In Côte d'Ivoire or Senegal you may write in XOF; in Cameroon in XAF; the method is the same.",
            "Mobile money is fast, and scammers know it. Warning signs: a message saying money was sent to you \"by mistake\" and asking you to send it back (check your real balance first, and ask your provider to reverse it, never send it yourself); anyone asking for your PIN or a code sent to your phone; a call from a \"customer care agent\" on a normal number; an urgent big order from a stranger who wants you to pay a \"delivery fee\" first. A real mobile money provider never asks for your PIN.",
            "Registering your business name can help you open a business bank account, apply for contracts with schools and companies, and look serious to customers. In Kenya, the Business Registration Service handles it through eCitizen; in Nigeria, the Corporate Affairs Commission; in Ghana, the Office of the Registrar of Companies; in Senegal, ask APIX. Rules, steps and fees change, so check the official site or office, and watch for fake agents offering \"free registration\"."
          ],
          steps: ["Open a notebook or phone note with four columns: date, what, in, out.", "Write every deposit, payment and purchase the same day.", "At week's end: total in minus total out.", "Check the result against your real cash and mobile money balance.", "Never share your PIN; check any \"wrong send\" with your provider before doing anything."],
          words: [["Money book", "a simple record of money coming in and going out."], ["PIN", "your secret number for mobile money; only you should know it."], ["Reversal", "when the provider sends back money that went to the wrong person."], ["Business name registration", "putting your business name on the official government list."]],
          slides: [
            { title: "A simple money book", bullets: ["Date, what, money in, money out", "Write it the same day", "Business money apart from family money"] },
            { title: "Check every week", bullets: ["Total in minus total out", "Compare with real cash and mobile money", "Find the gap while you still remember"] },
            { title: "Mobile money scam signs", bullets: ["\"Sent by mistake, please send it back\"", "Anyone asking for your PIN or a code", "\"Customer care\" on a normal number; fees before a big order", "A real provider never asks for your PIN"] },
            { title: "Register your business name", bullets: ["Kenya: BRS via eCitizen; Nigeria: CAC", "Ghana: Registrar of Companies; Senegal: ask APIX", "Rules and fees change: check the official site"] }
          ],
          sources: [KE_BRS, NG_CAC, GH_ORC],
          tryIt: "Start your money book today. Write every amount from the last three days that you can remember. Then write the official registry for your country and one thing you will check there.",
          youCanNow: "keep a weekly money book, spot mobile money scams and know which office registers business names in your country.",
          quickCheck: [
            { objective: "O5", q: "A text says KES 5,000 was sent to you by mistake and asks you to send it back. What do you do first?", options: ["Send it back at once", "Share your PIN so they can fix it", "Check your real balance and contact your provider through its official line", "Reply with your ID number"], answer: 2, why: "Many \"wrong send\" texts are fake; the provider handles real reversals." },
            { objective: "O5", q: "At the end of the week your money book shows more money than you really have. What do you do?", options: ["Ignore it", "Look for a payment or purchase you forgot to write", "Tear out the page", "Borrow to make it match"], answer: 1, why: "A gap usually means something was not written; find it while you still remember." }
          ]
        },
        {
          title: "Showing your work and finding customers",
          objectives: ["O6"],
          minutes: 5,
          goal: "Make a post or catalogue item that shows a finished garment, its price and how to order.",
          text: [
            "Your best advert is your work. A clear photo of a finished garment, shared on WhatsApp status, a WhatsApp Business catalogue, Facebook, Instagram or TikTok, or printed on your shop wall, brings new customers. A designer in Casablanca can show a caftan, and a tailor in Kumasi a kente dress, the same way.",
            "A good photo: daylight, a plain background, the whole garment, then one close-up of the detail or finishing. If a customer is wearing it, ask first if you may share the photo, and never share their name, phone number or measurements. Some customers say no; respect it.",
            "Every post says what it is, a price or \"from\" price, how long it takes, and how to order (your phone number or \"message me\"). A price list on the wall or as a picture on your phone helps too: five to ten of your main garments with their prices, based on your costing. Keep data costs low by sharing one good photo instead of many."
          ],
          steps: ["Choose one finished garment.", "Take a photo in daylight on a plain background, plus one close-up.", "Ask permission if a customer is in the photo.", "Write what it is, the price, how long it takes and how to order.", "Post it, or add it to your catalogue or price list."],
          words: [["Catalogue", "a list of your products with photos and prices, for example in WhatsApp Business."], ["Price list", "a list of your main garments and what each one costs to order."], ["Permission", "the customer saying yes before you share their photo."]],
          slides: [
            { title: "Your work is your advert", bullets: ["WhatsApp status or catalogue, Facebook, Instagram, TikTok", "Or printed on your shop wall"] },
            { title: "A good photo", bullets: ["Daylight, plain background", "Whole garment plus one close-up", "Customer in it? Ask first"] },
            { title: "What every post says", bullets: ["What it is", "Price or \"from\" price; how long it takes", "How to order"] },
            { title: "Protect customers", bullets: ["No names, phone numbers or measurements in posts", "If they say no, do not share"] }
          ],
          tryIt: "Take a photo of one finished garment in daylight. Write a post with what it is, the price from your costing, how long it takes and how to order. Share it on your status or save it for your catalogue.",
          youCanNow: "show your work with a clear photo, a price and how to order, while protecting your customers' privacy.",
          quickCheck: [
            { objective: "O6", q: "What must a post about your garment include?", options: ["The customer's measurements", "Only a photo, nothing else", "The price you paid for thread", "What it is, a price, how long it takes and how to order"], answer: 3, why: "Customers need to know what it is, what it costs, when they can have it and how to order." },
            { objective: "O6", q: "You want to share a photo of a customer wearing your dress. What do you do?", options: ["Ask her first, and share no name or phone number", "Post it with her name so people can ask her", "Post it; she is your customer", "Post her measurements too"], answer: 0, why: "A customer's photo and details are hers; ask first and keep private details out." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Running the business",
        questions: [
          { objective: "O4", q: "Tabaski is three weeks away and your week is already full. A new customer wants a boubou. What do you do?", options: ["Promise it for Tabaski anyway", "Offer the next free date honestly, or say no politely", "Take it and give it to an untrained helper", "Take a deposit and say nothing about the date"], answer: 1, why: "Honest dates keep your name; overpromising in a busy season loses customers." },
          { objective: "O4", q: "In your weekly plan, which order comes first?", options: ["The one with the earliest due date", "The easiest one", "The one from your friend", "The one that pays the most"], answer: 0, why: "Earliest due date first keeps every promise on time." },
          { objective: "O5", q: "Someone calling as \"mobile money customer care\" asks for your PIN to fix your account. What is true?", options: ["You must give it", "Give only half the PIN", "Give it if they know your name", "A real provider never asks for your PIN; hang up"], answer: 3, why: "Anyone asking for your PIN is a scammer, even if they know your name." },
          { objective: "O5", q: "Why keep business money apart from family money?", options: ["So you can see whether the business really makes a profit", "Because the bank says so", "So the family cannot eat", "It does not matter"], answer: 0, why: "Mixing them hides whether the business earns or loses money." },
          { objective: "O6", q: "Which photo shows your work best?", options: ["Taken at night with flash in a messy room", "Half the garment on a busy market background", "Daylight, plain background, the whole garment plus a close-up", "A photo of someone else's work"], answer: 2, why: "Clear light, a plain background and a detail shot show the quality of your work." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Running a Tailoring and Fashion Business",
    questions: [
      { objective: "O1", q: "What is the safest place for broken needles?", options: ["On the floor", "In a closed tin", "In the customer's bag", "In your pocket"], answer: 1, why: "A closed tin keeps broken needles away from feet, hands and children." },
      { objective: "O1", q: "You notice a machine cable with a cut showing wires. What do you do?", options: ["Wrap it in fabric and keep sewing", "Keep using it carefully", "Unplug it and get the cable repaired or replaced before using it", "Let the apprentice use it instead"], answer: 2, why: "Damaged cables can shock you or start a fire; stop and repair first." },
      { objective: "O1", q: "Which habit protects your back and eyes?", options: ["Sewing in a dark corner", "Sitting bent over for six hours", "Working only at night", "Good light, a supported back and a stretch every hour"], answer: 3, why: "Light, posture and breaks prevent strain over long sewing days." },
      { objective: "O2", q: "What goes on an order card?", options: ["Style, measurements, fabric, price, deposit, balance, fitting and due date", "Only the customer's name", "Only the price", "The customer's bank PIN"], answer: 0, why: "A complete card records the whole agreement; private numbers never go on it." },
      { objective: "O2", q: "Why write the unit (cm or inches) with the measurements?", options: ["It looks nice", "So you or a helper do not cut to the wrong size", "The customer asks for it", "It is not needed"], answer: 1, why: "Mixing up cm and inches ruins a garment." },
      { objective: "O2", q: "A customer says she paid more than the card shows. What helps most?", options: ["Shouting", "Refusing to finish the dress", "The signed card and your money book entries for that day", "Asking the neighbour"], answer: 2, why: "Written, signed records show what was paid and when." },
      { objective: "O2", q: "Before an aso ebi customer leaves, what do you do with the order card?", options: ["Keep it secret", "Throw it away after cutting", "Fill it in later from memory", "Read it back, both sign, and give a copy or let them take a photo"], answer: 3, why: "Reading back and sharing the card means you both agree on the same details." },
      { objective: "O3", q: "Which three parts make up the cost of a garment?", options: ["Materials, your time and running costs", "Fabric, profit and transport", "Rent, phone and food", "Only the materials"], answer: 0, why: "Materials, time and running costs together are the true cost; profit goes on top." },
      { objective: "O3", q: "Cost is GHS 200 and you add a 25% profit. What is the price? (Example figures.)", options: ["GHS 225", "GHS 250", "GHS 275", "GHS 200"], answer: 1, why: "25% of 200 is 50, so the price is 250." },
      { objective: "O3", q: "Why include your own time in the cost?", options: ["It is not needed if you own the shop", "Only apprentices' time counts", "Your work hours are worth money; without them you work for free", "Customers ask to see it"], answer: 2, why: "If your time is not in the price, the business does not pay you." },
      { objective: "O3", q: "Your price is above the market. What is a good first step?", options: ["Drop below your cost", "Close the business", "Copy another tailor's designs", "Check for a simpler style or cheaper method, or customers who value your quality"], answer: 3, why: "Change how you make it or who you sell to before cutting into your cost." },
      { objective: "O4", q: "What is the first step in planning your week?", options: ["Count your real sewing hours", "Take every order that comes", "Buy more fabric", "Post on social media"], answer: 0, why: "You cannot plan orders until you know how many hours you really have." },
      { objective: "O4", q: "Why set a last day for orders before Christmas or Eid?", options: ["To annoy customers", "So you only accept what you can finish on time", "To raise prices", "It is the law"], answer: 1, why: "A last day protects your promises in the busiest weeks." },
      { objective: "O4", q: "Where does the fitting go in your plan?", options: ["After the due date", "It is not needed", "Before the finishing, with time to adjust", "On the same hour as delivery"], answer: 2, why: "A fitting before finishing leaves time to make changes before the due date." },
      { objective: "O5", q: "Which is a sign of a mobile money scam?", options: ["Your own balance going up after a sale", "A receipt from your provider's official number", "A customer paying the balance", "A stranger asking you to pay a \"delivery fee\" before a big order"], answer: 3, why: "Asking for a fee first from a stranger is a common scam pattern." },
      { objective: "O5", q: "How often should you write in your money book?", options: ["The same day as each deposit, payment or purchase", "Once a year", "Only when there is a problem", "Never; keep it in your head"], answer: 0, why: "Writing the same day keeps the record correct and complete." },
      { objective: "O5", q: "You want to register your business name in Nigeria. Where do you check the current steps and fees?", options: ["A man at the bus stop", "The Corporate Affairs Commission's official site or office", "A random social media page", "Your customers"], answer: 1, why: "The official registry gives current rules and fees; fake agents are common." },
      { objective: "O6", q: "What should a price list show?", options: ["Your competitors' prices", "Customers' names", "Your main garments with prices based on your costing", "Your money book"], answer: 2, why: "A price list built from your costing tells customers what to expect and protects your profit." },
      { objective: "O6", q: "Data is costly for your customers. How do you post?", options: ["Send twenty videos a day", "Post nothing", "Send every photo you took", "Share one clear photo with the price and how to order"], answer: 3, why: "One good photo with clear details works and saves data." },
      { objective: "O6", q: "What must never appear in a post about a customer's garment?", options: ["Her name, phone number or measurements without permission", "The style name", "The price", "How to order"], answer: 0, why: "A customer's private details are hers; never share them without permission." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  // pre-test: these quiz questions, taken before Lesson 1, so the quiz shows how much each learner gained
  pretest: { title: "Pre-Test: What Do You Already Know?", from: [1, 3, 7, 9, 11, 14, 17, 19] },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      { name: "Safe workshop", objective: "O1", notYet: "No safety risks listed, or risks listed but none fixed.", meets: "At least three risks found and fixed, such as a pin tin, a safe iron stand and clear walkways.", exceeds: "All risks listed and fixed, and apprentices taught the rules." },
      { name: "Order card", objective: "O2", notYet: "The card misses the price, deposit, balance or due date.", meets: "The card has style, measurements with units, fabric, price, deposit, balance, fitting and due date, and space for both signatures.", exceeds: "Used with a real customer, read back and shared as a copy or photo." },
      { name: "Costed price list", objective: "O3", notYet: "Prices are copied or guessed, with no cost worked out.", meets: "At least five garments, each with materials, time and running costs worked out and a price above cost.", exceeds: "Each price is also compared with the local market, with a note on what to change if it is too high." },
      { name: "Weekly plan", objective: "O4", notYet: "The plan has more hours of work than hours available, or no due dates.", meets: "Orders placed by due date within real hours, with fittings before finishing and some time kept free.", exceeds: "Includes a last day for orders in the next busy season and how customers will be told." },
      { name: "Money book", objective: "O5", notYet: "No record, or business and family money mixed.", meets: "A week of deposits, payments and spending with a correct balance, and the PIN rule written down.", exceeds: "The balance is checked against real cash and mobile money, and the registry for the learner's country is noted." },
      { name: "Showing the work", objective: "O6", notYet: "No photo, or a photo with no price or way to order.", meets: "A clear daylight photo with what it is, price, time and how to order, and no customer's private details.", exceeds: "Added to a catalogue or price list, with permission recorded for any customer in the photo." }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Learners who use an order card for every job within 30 days (follow-up survey)",
      "Learners who raise or correct at least one price after costing it",
      "Fewer late orders and customer disputes reported in the next busy season",
      "Learners who register a business name or open a business account within 6 months"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A notebook, pen and calculator (or the phone's calculator)",
      "A tape measure and the learner's own workshop to check",
      "A phone with a camera for the final post (a basic phone and printed photos also work)",
      "About 60 to 90 minutes in total, in short sessions: lessons, practice, checks and the final task"
    ],
    facilitatorNotes: [
      "Works well with tailors' associations, women's and youth groups, vocational centres and apprenticeship programmes; take the pre-test together.",
      "Ask learners to bring their real prices and one real order; costing their own garment is where most learn they are underpriced.",
      "Use the local currency and holidays (Christmas, Eid, Tabaski, Easter, wedding season) in every example.",
      "Never ask learners to show their PIN, balance or private numbers to the group; practise with example figures.",
      "Registration rules and fees change: check the national registry's official site before the session and share only what it says.",
      "Score the final task with the rubric and give feedback on one Not yet row at a time."
    ]
  }
};
