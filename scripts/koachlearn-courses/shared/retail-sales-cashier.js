"use strict";

// Koach Learn course: Workforce Development (also Youth, Re-Entry) -> "Retail Sales and Cashier Skills" (wave 3, 30 October 2026).
// ADDIE course built on the model in re-entry/reentry-ai-digital-confidence.js. Goes deeper than shared/customer-service-excellence.js
// (which teaches service in general) and shared/everyday-math.js (which teaches percents and paystubs): this one is the register, the
// cash drawer, restricted sales, counterfeit and gift-card scam checks, suggestive selling, returns and the shift itself.
// Facts checked 30 October 2026: BLS Occupational Outlook (cashiers), FDA Tobacco 21 (age 21; photo ID under 30),
// uscurrency.gov ($100 security features; counterfeit reporting), FTC gift card scams, OSHA workplace violence, NRF Foundation RISE Up.

module.exports = {
  id: "retail-sales-cashier",
  category: "Workforce Development",
  name: "Retail Sales and Cashier Skills",
  skills: "Ringing up a sale, Counting back change, Checking IDs and large bills, Suggesting items without pressure, Handling returns and upset customers, Running a shift",
  outcome: "work a retail register from open to close: ring up a sale, count back exact change, check ID and large bills before a sale, suggest a helpful item, handle a return or an upset customer by store policy, and follow a shift checklist.",
  about: [
    "Cashier and retail sales jobs are some of the most common first jobs in the US, and stores hire people with no experience. They are also a good first step for people coming back to work after time away. This course gets you ready for the first day.",
    "You will practice a checkout from hello to receipt, count back change the way trained cashiers do, check IDs for age-limited items, spot a fake bill and a gift card scam, suggest an item without being pushy, and handle returns and upset customers by the rules.",
    "Every store has its own register and its own policies, and the store trains you on them. This course gives you the skills that work in any store, so you learn faster and make fewer mistakes. It also shows you a real retail credential you can earn.",
    "Each lesson takes about five minutes and ends with a \"Try it now\" task you can do at home with coins, paper money from a board game, or slips of paper. There are two quick questions after each lesson, a knowledge check after each chapter and a 20-question quiz at the end."
  ],
  finalTask: "Make your own one-page Cashier Shift Card: (1) opening steps for your drawer, (2) your checkout script from greeting to receipt with one suggestion line, (3) a record of five practice sales where you counted back exact change, (4) your steps for an age-limited sale and for a large bill, (5) the three times you will call a manager, (6) closing steps, and (7) one line naming the retail credential or job you will go for and the date you will start.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Young people looking for a first job, adults coming home from prison, and adults changing careers or going back to work. Many have never worked a register; some have shopped at self-checkout but never stood behind a counter.",
    startingPoint: "Can add and subtract money with some help, and know coins and bills. Little or no experience with a point-of-sale register, a cash drawer, ID checks, store policies or selling.",
    gap: "Stores hire for attitude and train on the job, but new cashiers who are slow at change, unsure about ID checks or nervous with upset customers are the ones who come up short in the drawer or lose the job early. Learners need the core habits before the first shift so they can pass a hiring interview, get through training fast and keep the job.",
    constraints: [
      "Reading level: plain words and short sentences (about grade 5 to 7)",
      "Devices: a phone or library computer; practice uses coins, play money or paper slips, no register needed",
      "Time: 4 to 6 minute lessons",
      "Every store has its own register, policies and rules; learners follow their store's training",
      "Age-limited sales rules differ by state; teens may not be allowed to sell alcohol or tobacco in some states",
      "Safety: no chasing shoplifters and no resisting a robbery; follow store policy and call 911"
    ],
    prerequisites: "None. Learners who want more practice with percents and money can take \"Everyday Math for Work and Life\"; \"Customer Service Excellence\" goes deeper on service."
  },
  // ---- ADDIE: Design ----
  objectives: [
    { id: "O1", condition: "Given a practice sale with several items, a coupon and a payment", action: "ring up a checkout from greeting to receipt in the right order", standard: "with the right total and a thank-you every time" },
    { id: "O2", condition: "Given a total and the cash a customer hands you", action: "count back change to a customer using the count-up method", standard: "with exact change in 5 of 5 practice sales" },
    { id: "O3", condition: "Given an age-limited item, a large bill or a customer buying many gift cards", action: "check the ID, the bill or the warning signs before finishing the sale", standard: "following the law and store policy, and calling a manager when something is wrong" },
    { id: "O4", condition: "Given a customer shopping for something", action: "ask one open question and suggest one related item with its benefit", standard: "without pressure, and accepting a no politely" },
    { id: "O5", condition: "Given a return, a price problem or an upset customer", action: "handle the problem by store policy and call a manager when it is beyond your role", standard: "staying calm and keeping yourself and others safe" },
    { id: "O6", condition: "Using what you learned in this course", action: "write a one-page shift checklist for opening, running and closing a register", standard: "with every step in order and your next job step dated" }
  ],
  chapters: [
    {
      name: "Chapter 1: The register and the money",
      lessons: [
        {
          title: "Checkout from hello to receipt",
          objectives: ["O1"],
          minutes: 5,
          goal: "Ring up a practice sale in the right order, from greeting to receipt.",
          text: [
            "Cashiers scan items, take payment, give change and receipts, bag items, process returns and answer questions. Training is usually on the job and lasts up to a few weeks, according to the US Bureau of Labor Statistics. No diploma or license is required, though many stores prefer a high school diploma or GED.",
            "Every register is different, but every checkout follows the same order: greet the customer, scan each item and watch the price on the screen, apply coupons or discounts, tell the customer the total, take the payment, give change and the receipt, and thank them.",
            "Watch the screen as you scan. If an item rings up twice, or the price is not what the shelf tag says, stop and fix it before you take payment. Your trainer will show you how to remove (void) an item and how to call for a price check on your register.",
            "Customers pay with cash, cards (tap, insert or swipe), phone wallets, gift cards or benefit cards. Let the customer handle their own card and PIN. Never ask for a PIN out loud, and never keep a customer's card."
          ],
          steps: [
            "Greet the customer and make eye contact: \"Hi, did you find everything okay?\"",
            "Scan each item and watch the screen for the right name and price.",
            "Ask for coupons or a store rewards number before you total.",
            "Say the total out loud: \"Your total is $23.40.\"",
            "Take the payment and follow the register's prompts.",
            "Give change and the receipt, and thank the customer."
          ],
          words: [
            ["POS (point of sale)", "the register system: the screen, scanner, card reader and cash drawer."],
            ["Void", "removing an item from the sale before it is paid."],
            ["Price check", "asking a coworker or the system for the right price of an item."],
            ["Receipt", "the printed or emailed record of what the customer bought and paid."]
          ],
          slides: [
            { title: "What cashiers do", bullets: ["Scan items, take payment, give change and receipts", "Bag items and process returns", "Training is on the job, usually a few weeks"] },
            { title: "Same order every sale", bullets: ["Greet, scan, coupons, total", "Payment, change and receipt", "Thank the customer"] },
            { title: "Watch the screen", bullets: ["Item rang up twice? Fix it before payment", "Price different from the shelf tag? Ask for a price check", "Your trainer shows you how to void an item"] },
            { title: "Card payments", bullets: ["The customer handles their own card and PIN", "Never ask for a PIN out loud", "Never keep a customer's card"] }
          ],
          sources: [{ name: "US Bureau of Labor Statistics: Cashiers (Occupational Outlook Handbook)", url: "https://www.bls.gov/ooh/sales/cashiers.htm" }],
          tryIt: "Set five household items on a table and write a price on a paper slip for each. Play the cashier: greet an imaginary customer, \"scan\" each item by reading its price out loud and writing it down, take $2 off with a coupon, say the total, and thank the customer. Check your total with a calculator.",
          youCanNow: "ring up a sale in the right order, catch a scanning mistake before payment and take a card payment safely.",
          quickCheck: [
            { objective: "O1", q: "What comes right before you tell the customer the total?", options: ["Asking for coupons or a rewards number", "Giving the receipt", "Counting back change", "Saying goodbye"], answer: 0, why: "Coupons and rewards must be applied before the total, or the total is wrong." },
            { objective: "O1", q: "A shirt rings up twice on the screen. What do you do?", options: ["Let the customer find it on the receipt", "Charge them and fix it next time", "Stop and remove the extra item before payment", "Take the second one off the shelf"], answer: 2, why: "Fixing a double scan before payment keeps the total right and avoids a return later." }
          ]
        },
        {
          title: "Counting back change and keeping your drawer right",
          objectives: ["O2"],
          minutes: 6,
          goal: "Count back exact change by counting up from the total to the amount paid.",
          text: [
            "Even when the register shows the change, trained cashiers count it back out loud. This catches mistakes and shows the customer the change is right. It is called the count-up method: start at the total and count up to the amount the customer gave you.",
            "Example: the total is $13.47 and the customer gives you $20. Say \"$13.47\", then give 3 pennies (\"$13.50\"), 2 quarters (\"$14\"), one dollar (\"$15\") and a five (\"and $20\"). That is $6.53 in change.",
            "Keep the customer's bill on the top of the drawer, not inside, until the change is counted. If they say \"I gave you a fifty\", you can both see it was a twenty.",
            "Your drawer (also called a till) starts each shift with a set amount that you count with a manager. At the end it is counted again. Money over or under (\"over/short\") is checked, so never let anyone else use your drawer and never mix in your own money."
          ],
          steps: [
            "Say the total out loud.",
            "Put the customer's cash on top of the drawer, not inside.",
            "Count up with the smallest coins first, saying each new amount.",
            "Then count up with bills until you reach the amount they gave you.",
            "Put the customer's cash in the drawer and close it."
          ],
          words: [
            ["Count-up method", "counting change back by starting at the total and adding coins and bills until you reach the amount paid."],
            ["Drawer (till)", "the cash tray in the register that one cashier is responsible for."],
            ["Over/short", "the difference between what the drawer should hold and what is really in it at the end of a shift."]
          ],
          slides: [
            { title: "Count up, out loud", bullets: ["Start at the total", "Add coins, then bills", "Stop at the amount the customer gave you"] },
            { title: "Example: $13.47 from $20", bullets: ["3 pennies: $13.50", "2 quarters: $14. One dollar: $15", "A five: $20. Change: $6.53"] },
            { title: "Protect yourself", bullets: ["Keep their bill on top of the drawer until change is done", "Then put it away", "Settles any \"I gave you a fifty\" question"] },
            { title: "Your drawer is yours", bullets: ["Count it with a manager at start and end", "Nobody else uses your drawer", "Never mix in your own money"] }
          ],
          tryIt: "Use real coins or play money. Do these three sales out loud with the count-up method: total $7.80 paid with $10; total $4.35 paid with $5; total $26.62 paid with $30. Write the change for each, then check: $2.20, $0.65 and $3.38.",
          youCanNow: "count back exact change with the count-up method and keep your drawer safe from mistakes.",
          quickCheck: [
            { objective: "O2", q: "The total is $7.80 and the customer pays with $10. What change do you count back?", options: ["$3.20", "$2.20", "$2.80", "$1.20"], answer: 1, why: "Two dimes take you to $8.00 and two dollars to $10.00, so the change is $2.20." },
            { objective: "O2", q: "Where should the customer's $20 bill be while you count their change?", options: ["In your pocket", "Under the drawer", "Back in the customer's hand", "On top of the drawer, where you both can see it"], answer: 3, why: "Keeping it in sight until the change is done settles any question about what they paid with." }
          ]
        },
        {
          title: "IDs, large bills and scams at the register",
          objectives: ["O3"],
          minutes: 6,
          goal: "Check an ID, a large bill and the signs of a gift card scam before you finish the sale.",
          text: [
            "Some items have an age limit. Under federal law, nobody under 21 may buy tobacco or vapes, and the FDA says to check photo ID for anyone under 30. Alcohol is also 21 to buy in every state. The age to SELL alcohol or tobacco as a cashier is set by each state, and stores often add their own rules. Your store will tell you.",
            "To check an ID: look at the photo and the face, check it has not expired, and read the birth date. A quick way: if today is 15 March 2027, the customer must be born on or before 15 March 2006 to be 21. If you are not sure, or the ID looks changed, do not sell and call a manager. Selling to a minor can mean fines for you and the store.",
            "For a large bill, use the checks from uscurrency.gov. On a $100: tilt it and the blue ribbon's bells change to 100s and the 100 in the corner changes from copper to green; hold it to the light to see the watermark portrait and the security thread; feel the rough raised printing. If a bill fails, do not accuse the customer: call a manager. Stores report suspected fakes to the US Secret Service.",
            "Gift card scams happen at the register. Scammers tell people to buy gift cards to pay a \"government fee\" or a \"relative in trouble\". The FTC says no real business or agency asks to be paid in gift cards. If a customer is buying many cards while someone on the phone tells them what to do, follow your store's policy, which may be to call a manager or kindly share that warning."
          ],
          steps: [
            "Age-limited item: ask for photo ID if the customer looks under 30.",
            "Match the photo, check it has not expired, and work out the age from the birth date.",
            "Large bill: tilt it, hold it to the light and feel it.",
            "Gift cards: watch for many cards, rushing or a caller giving orders.",
            "Anything wrong: do not finish the sale; call a manager."
          ],
          words: [
            ["Age-limited (age-restricted) item", "a product the law says only people over a set age may buy, like tobacco or alcohol."],
            ["Counterfeit", "fake money made to look real."],
            ["Watermark", "a faint picture inside the paper of a bill that shows when you hold it to the light."],
            ["Gift card scam", "a trick where someone pressures a person to pay them with gift card numbers."]
          ],
          slides: [
            { title: "Age-limited sales", bullets: ["Tobacco and vapes: 21 to buy (federal law)", "FDA: check photo ID for anyone under 30", "Alcohol: 21 to buy; age to sell set by your state"] },
            { title: "Checking an ID", bullets: ["Photo matches the face", "Not expired", "Born on or before today's date, 21 years back", "Not sure? Do not sell. Call a manager."] },
            { title: "Checking a $100 bill", bullets: ["Tilt: ribbon bells turn to 100s; corner 100 copper to green", "Light: watermark portrait and security thread", "Feel: rough raised printing"] },
            { title: "Gift card scam signs", bullets: ["Many cards, rushing, a caller giving orders", "No real business or agency takes gift cards as payment", "Follow store policy; call a manager"] }
          ],
          sources: [
            { name: "FDA: Tobacco 21", url: "https://www.fda.gov/tobacco-products/retail-sales-tobacco-products/tobacco-21" },
            { name: "US Currency Education Program: $100 note security features", url: "https://www.uscurrency.gov/denominations/100" },
            { name: "US Currency Education Program: Report a counterfeit", url: "https://www.uscurrency.gov/report-counterfeit" },
            { name: "FTC: Avoiding and reporting gift card scams", url: "https://consumer.ftc.gov/articles/avoiding-and-reporting-gift-card-scams" }
          ],
          tryIt: "Take any bill you have (a $1, $5, $10 or $20). Hold it to the light, tilt it and feel it, and write down every security feature you can find. Then use today's date to write the latest birth date that is old enough to buy tobacco.",
          youCanNow: "check an ID before an age-limited sale, check a large bill and spot the signs of a gift card scam.",
          quickCheck: [
            { objective: "O3", q: "A customer who looks about 25 wants to buy vapes. What do you do?", options: ["Sell them because they look over 21", "Ask how old they are and take their word", "Ask for photo ID and check the birth date", "Refuse to sell vapes to anyone"], answer: 2, why: "The FDA says to check photo ID for anyone under 30 buying tobacco products." },
            { objective: "O3", q: "A $100 bill's corner number does not change color when you tilt it. What do you do?", options: ["Call a manager without accusing the customer", "Tell the customer they are a criminal", "Take it anyway; it is probably fine", "Tear it in half"], answer: 0, why: "A failed check goes to a manager; the store handles and reports suspected fakes." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: The register and the money",
        questions: [
          { objective: "O1", q: "What is the right order for a checkout?", options: ["Payment, scan, greet, receipt", "Scan, receipt, greet, payment", "Greet, scan, total, payment, change and receipt", "Total, greet, scan, thank"], answer: 2, why: "Every sale follows greet, scan, coupons, total, payment, change and receipt, thanks." },
          { objective: "O1", q: "A customer wants to pay by card. What is your part?", options: ["Let them handle their own card and PIN, and follow the register's prompts", "Ask them to say their PIN so you can type it", "Keep the card until the sale is finished", "Write the card number on the receipt"], answer: 0, why: "Customers handle their own card and PIN; cashiers never ask for or keep them." },
          { objective: "O2", q: "The total is $4.35 and the customer pays with $5. Which change is right?", options: ["$1.35", "$0.75", "$0.55", "$0.65"], answer: 3, why: "A nickel to $4.40, a dime to $4.50 and two quarters to $5.00 make $0.65." },
          { objective: "O3", q: "Today is 15 March 2027. To buy alcohol, a customer must be born on or before:", options: ["15 March 2009", "15 March 2006", "15 March 2007", "1 January 2006"], answer: 1, why: "21 years before 15 March 2027 is 15 March 2006." },
          { objective: "O3", q: "A customer on the phone is buying $500 in gift cards and says the caller is \"from the government\". What is this most likely?", options: ["A normal gift", "A store promotion", "A gift card scam", "A tax refund"], answer: 2, why: "The FTC says no real business or government agency asks to be paid with gift cards." }
        ]
      }
    },
    {
      name: "Chapter 2: Selling, serving and running a shift",
      lessons: [
        {
          title: "Helping customers choose, without pressure",
          objectives: ["O4"],
          minutes: 5,
          goal: "Ask one open question and suggest one related item with its benefit.",
          text: [
            "Retail sales is helping people find what they came for and something that makes it work better. Start with an open question, one that cannot be answered with yes or no: \"What will you use it for?\"",
            "Then give a benefit, not just a feature. A feature is what the item has (\"this phone case has a raised edge\"); a benefit is what it does for the customer (\"so your screen is safe if it lands face down\").",
            "A suggestion (stores call it suggestive selling or an add-on) is one related item: batteries with a toy, a case with a phone, socks with shoes. Suggest one, say why, and if they say no, smile and drop it. Pushing makes people leave and not come back.",
            "Never make up facts about a product. If you do not know, say \"Let me find out\" and ask a coworker or read the label."
          ],
          steps: [
            "Greet and ask one open question: \"What will you use it for?\"",
            "Listen to the answer.",
            "Point out one benefit that fits what they said.",
            "Suggest one related item and say why.",
            "Accept a no politely: \"No problem!\""
          ],
          words: [
            ["Open question", "a question that needs more than a yes or no answer."],
            ["Feature", "something a product has."],
            ["Benefit", "what that feature does for the customer."],
            ["Suggestive selling (add-on)", "offering one related item that helps the customer."]
          ],
          slides: [
            { title: "Start with an open question", bullets: ["\"What will you use it for?\"", "Not \"Can I help you?\" (easy to say no to)", "Listen to the answer"] },
            { title: "Feature vs benefit", bullets: ["Feature: a raised edge on the case", "Benefit: your screen is safe if it falls face down", "Customers buy benefits"] },
            { title: "One suggestion, no pressure", bullets: ["Batteries with a toy, socks with shoes", "Say why it helps", "A no is fine: smile and move on"] }
          ],
          tryIt: "Pick three items in your home. For each, write one open question you would ask a shopper, one benefit, and one related item you could suggest with a short reason. Say them out loud.",
          youCanNow: "ask an open question, explain a benefit and suggest one item without pressure.",
          quickCheck: [
            { objective: "O4", q: "Which is an open question?", options: ["\"Can I help you?\"", "\"Do you want a bag?\"", "\"Is that all?\"", "\"What will you use it for?\""], answer: 3, why: "It needs more than a yes or no, so you learn what the customer needs." },
            { objective: "O4", q: "You suggest a phone case and the customer says no thanks. What do you do?", options: ["Ask three more times", "Smile, say \"No problem\" and finish the sale", "Tell them they will be sorry", "Put it in the bag anyway"], answer: 1, why: "One suggestion is helpful; pushing after a no drives customers away." }
          ]
        },
        {
          title: "Returns, price problems and upset customers",
          objectives: ["O5"],
          minutes: 6,
          goal: "Handle a return, a price problem or an upset customer by store policy, and call a manager when needed.",
          text: [
            "Every store has a return policy: how many days, whether a receipt is needed, and how the money goes back (to the card, as cash or as store credit). Learn yours in training. Follow it the same way for everyone, and ask for a manager when a return is outside the policy.",
            "Price problems are common: the shelf tag says $4.99 and the register says $5.49. Stay calm, do a price check, and follow your store's rule. Do not argue, and do not change prices on your own.",
            "With an upset customer, use four steps: listen without cutting in, say sorry for the trouble, fix what you can or bring a manager, and thank them. The \"Customer Service Excellence\" course goes deeper.",
            "Your safety comes first. Do not chase or grab a shoplifter; tell a manager or security. If a customer threatens you, or in a robbery, do not argue or fight: follow your store's safety training, give what is asked, and call 911 when it is safe. OSHA lists handling money with the public and late-night work as risk factors for workplace violence."
          ],
          steps: [
            "Return: check the receipt, the date and the item against the policy.",
            "Price problem: do a price check and follow the store's rule.",
            "Upset customer: listen, apologize, fix or bring a manager, thank.",
            "Outside your role or not safe: call a manager, security or 911."
          ],
          words: [
            ["Return policy", "the store's rules for taking items back and giving money back."],
            ["Store credit", "money back that can only be spent at that store."],
            ["Manager override", "a manager approving something the register will not let a cashier do alone."],
            ["Shoplifting", "taking items from a store without paying."]
          ],
          slides: [
            { title: "Returns", bullets: ["Learn your store's days, receipt rule and refund type", "Same rules for everyone", "Outside the policy? Ask a manager"] },
            { title: "Price problems", bullets: ["Stay calm and do a price check", "Follow the store's rule", "Never change a price on your own"] },
            { title: "Upset customers", bullets: ["Listen without cutting in", "Say sorry for the trouble", "Fix it or bring a manager, then thank them"] },
            { title: "Safety first", bullets: ["Never chase or grab a shoplifter", "In a robbery: do not argue or fight; follow your training", "Call 911 when it is safe"] }
          ],
          sources: [{ name: "OSHA: Workplace violence", url: "https://www.osha.gov/workplace-violence" }],
          tryIt: "With a friend or by yourself out loud, role-play this: a customer is angry that a $4.99 shelf tag rang up as $5.49. Use the four steps. Then write down two kinds of returns you would send to a manager.",
          youCanNow: "handle a return, a price problem and an upset customer calmly, and know when to call a manager or 911.",
          quickCheck: [
            { objective: "O5", q: "A customer wants to return an item after the store's return window. What do you do?", options: ["Call a manager", "Give cash back anyway", "Yell that it is too late", "Hide the item"], answer: 0, why: "Anything outside the policy goes to a manager, who can decide." },
            { objective: "O5", q: "You see someone put a phone charger in their coat and walk out. What do you do?", options: ["Chase them into the parking lot", "Grab their arm", "Tell a manager or security right away", "Ignore it and say nothing"], answer: 2, why: "Your safety comes first; stores handle shoplifting through managers and security." }
          ]
        },
        {
          title: "Your shift card and your path to the job",
          objectives: ["O6"],
          minutes: 5,
          goal: "Write a one-page shift checklist and set a date for your next job step.",
          text: [
            "A good shift has three parts. Opening: clock in on time, count your drawer with a manager, check the register paper and bags, and clean your area. Running: follow the checkout order, count back change, check IDs, and keep your drawer closed between sales. Closing: count your drawer with a manager, report over/short honestly, clean up and clock out.",
            "Putting it on one card helps you learn fast and shows a hiring manager you are ready. Bring it to the interview and talk through it.",
            "A credential can help your application. The NRF Foundation (part of the National Retail Federation) runs RISE Up, a training and credential program with credentials such as Retail Industry Fundamentals, Customer Service and Sales, and Customer Conflict De-escalation. This course PREPARES you; it does not grant a credential. Check nrffoundation.org for how to enroll and what it costs, or ask a local job center or program, which may offer it.",
            "Then apply. Stores hire all year, and more before the holidays. Apply online on the store's own careers page or in person, and never pay anyone to get a job."
          ],
          steps: [
            "Write your opening steps.",
            "Write your checkout script, with one suggestion line.",
            "Add your change practice, ID and large-bill steps.",
            "List three times you will call a manager.",
            "Write your closing steps.",
            "Add one dated next step: a credential or a job application."
          ],
          words: [
            ["Clock in / clock out", "recording the time you start and stop work."],
            ["Credential", "a certificate or badge that shows you passed a test of a skill."],
            ["RISE Up", "the NRF Foundation's retail training and credential program."]
          ],
          slides: [
            { title: "Opening", bullets: ["Clock in on time", "Count your drawer with a manager", "Check paper, bags and your area"] },
            { title: "Running and closing", bullets: ["Checkout order, count-back, ID checks", "Drawer closed between sales", "Close: count with a manager, report over/short honestly"] },
            { title: "A retail credential", bullets: ["NRF Foundation RISE Up credentials", "Retail Industry Fundamentals, Customer Service and Sales", "This course prepares you; it does not grant one"] },
            { title: "Your next step", bullets: ["Bring your shift card to interviews", "Apply on the store's own careers page", "Never pay anyone to get a job"] }
          ],
          sources: [
            { name: "NRF Foundation: RISE Up", url: "https://nrffoundation.org/riseup" },
            { name: "US Bureau of Labor Statistics: Cashiers", url: "https://www.bls.gov/ooh/sales/cashiers.htm" }
          ],
          tryIt: "Make your Cashier Shift Card on one page (paper or a phone note) with all seven parts from the final task. Do five count-back sales with play money and write them on the card. Finish with one line: the credential or store you will go for and the date you will start.",
          youCanNow: "open, run and close a register shift with a checklist, and take a dated next step toward a retail job.",
          quickCheck: [
            { objective: "O6", q: "What is the first thing you do with your drawer at the start of a shift?", options: ["Start ringing up customers", "Borrow a coworker's drawer", "Add your own money to it", "Count it with a manager"], answer: 3, why: "Counting at the start sets the amount you are responsible for." },
            { objective: "O6", q: "What does this course give you toward a RISE Up credential?", options: ["The credential itself", "Preparation; the NRF Foundation runs the credential", "A state license", "Nothing at all"], answer: 1, why: "The course prepares you; the credential comes from the NRF Foundation's RISE Up program." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Selling, serving and running a shift",
        questions: [
          { objective: "O4", q: "Which is a benefit, not a feature?", options: ["The case has a raised edge", "Your screen stays safe if the phone falls face down", "The case is blue", "The case is made of plastic"], answer: 1, why: "A benefit says what the feature does for the customer." },
          { objective: "O4", q: "A customer buys a remote control car. What is a good suggestion?", options: ["A mop", "A second car they did not ask about", "Nothing; never suggest", "The batteries it needs, so it works when they get home"], answer: 3, why: "One related item with a reason helps the customer." },
          { objective: "O5", q: "The shelf tag says $4.99 but the register says $5.49. What do you do first?", options: ["Stay calm and do a price check", "Change the price on the register yourself", "Tell the customer the tag is wrong without checking", "Refuse to sell the item"], answer: 0, why: "A price check finds the right price; then you follow the store's rule." },
          { objective: "O5", q: "Someone threatens you and demands the money in your drawer. What do you do?", options: ["Fight to protect the money", "Argue with them", "Follow your safety training, do not resist, and call 911 when it is safe", "Chase them out of the store"], answer: 2, why: "Your safety comes first; money can be replaced." },
          { objective: "O6", q: "At closing your drawer is $3 short. What do you do?", options: ["Add $3 of your own money", "Report it honestly when you count with the manager", "Take $3 from another drawer", "Leave without counting"], answer: 1, why: "Over/short is counted and reported honestly; mixing money hides mistakes and breaks policy." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Retail Sales and Cashier Skills",
    questions: [
      { objective: "O1", q: "When should you ask for coupons or a rewards number?", options: ["After the receipt prints", "Before you total the sale", "The next time they shop", "Only if they complain"], answer: 1, why: "Coupons and rewards go in before the total so it is right." },
      { objective: "O1", q: "What does \"void\" mean on a register?", options: ["Giving a refund", "Opening the drawer", "Printing a receipt", "Removing an item from the sale before it is paid"], answer: 3, why: "A void takes an item off the sale before payment." },
      { objective: "O1", q: "A customer wants to pay with their card. What is right?", options: ["They tap or insert it themselves and type their own PIN", "You ask for their PIN out loud", "You keep their card behind the counter", "You write down the card number"], answer: 0, why: "The customer handles their own card and PIN." },
      { objective: "O2", q: "The total is $13.47 and the customer gives you $20. What is the change?", options: ["$7.53", "$6.47", "$6.53", "$7.47"], answer: 2, why: "3 pennies to $13.50, 2 quarters to $14, $1 to $15 and $5 to $20: $6.53." },
      { objective: "O2", q: "In the count-up method you start at:", options: ["Zero", "The total of the sale", "The amount the customer gave you", "The amount in the drawer"], answer: 1, why: "You count up from the total to the amount paid." },
      { objective: "O2", q: "Why keep a customer's bill on top of the drawer until the change is counted?", options: ["So you both can see what they paid with if there is a question", "So it does not get wet", "So the next customer can use it", "Because the drawer is full"], answer: 0, why: "It settles any \"I gave you a fifty\" question." },
      { objective: "O3", q: "What is the federal minimum age to buy tobacco or vapes?", options: ["16", "18", "19", "21"], answer: 3, why: "Tobacco 21 raised the federal age to 21 in December 2019." },
      { objective: "O3", q: "The FDA says to check photo ID for tobacco buyers who look under:", options: ["18", "21", "30", "40"], answer: 2, why: "The FDA's rule is to check photo ID for anyone under 30." },
      { objective: "O3", q: "Which is a check you can do on a $100 bill?", options: ["Tilt it and watch the corner 100 change from copper to green", "Smell it", "Fold it in half", "Check the date it was printed"], answer: 0, why: "Color-shifting ink is one of the $100's security features." },
      { objective: "O3", q: "Who decides the minimum age to SELL alcohol as a cashier?", options: ["The customer", "Each state, plus your store's rules", "The FTC", "The cashier"], answer: 1, why: "The age to sell is set by state law, and stores often add their own rules." },
      { objective: "O4", q: "Which question will tell you the most about what a shopper needs?", options: ["\"Can I help you?\"", "\"Is that all?\"", "\"What will you use it for?\"", "\"Cash or card?\""], answer: 2, why: "An open question gets more than a yes or no." },
      { objective: "O4", q: "What is suggestive selling?", options: ["Telling customers what they must buy", "Selling items that are not on the shelf", "Raising prices", "Offering one related item that helps the customer"], answer: 3, why: "It is one helpful add-on, not pressure." },
      { objective: "O4", q: "You do not know if a heater is safe to use in a bathroom. What do you say?", options: ["\"Let me find out for you\"", "\"Yes, it is fine\"", "\"I don't know\" and walk away", "\"Nobody knows\""], answer: 0, why: "Never make up product facts; find out from a coworker or the label." },
      { objective: "O5", q: "A return is outside the store's policy. What do you do?", options: ["Refund it anyway", "Call a manager", "Tell the customer to leave", "Give store credit on your own"], answer: 1, why: "Returns outside policy go to a manager." },
      { objective: "O5", q: "What are the four steps with an upset customer?", options: ["Argue, explain, refuse, leave", "Ignore, wait, smile, close", "Listen, apologize, fix or bring a manager, thank", "Call 911, close the store, wait, reopen"], answer: 2, why: "Those four steps calm most upset customers." },
      { objective: "O5", q: "You see a shoplifter leaving. What is the safe choice?", options: ["Run after them", "Block the door", "Grab the bag", "Tell a manager or security"], answer: 3, why: "Never chase or grab; safety comes first." },
      { objective: "O5", q: "During a robbery, what matters most?", options: ["Your safety and others' safety", "Keeping the money", "Getting the robber's name", "Finishing the sale"], answer: 0, why: "Follow your training and do not resist; money can be replaced." },
      { objective: "O6", q: "Which belongs in your closing steps?", options: ["Lend your drawer to a coworker", "Leave the drawer for the morning", "Count your drawer with a manager and report over/short honestly", "Take home extra cash"], answer: 2, why: "Counting and reporting honestly closes your shift correctly." },
      { objective: "O6", q: "Which is a real retail credential program?", options: ["The FTC retail license", "The NRF Foundation's RISE Up", "The OSHA cashier card", "The Secret Service sales badge"], answer: 1, why: "RISE Up is the NRF Foundation's retail training and credential program." },
      { objective: "O6", q: "A \"recruiter\" says you must pay $50 to get a cashier job. What do you do?", options: ["Pay it quickly", "Pay half now", "Give them your bank details", "Do not pay; apply on the store's own careers page"], answer: 3, why: "Real employers never ask you to pay to get a job." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Pre-Test: What Do You Already Know?", from: [0, 3, 4, 6, 8, 10, 13, 17] },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      { name: "Checkout script", objective: "O1", notYet: "Steps are missing or out of order (for example, coupons after the total).", meets: "Greet, scan, coupons, total, payment, change and receipt, thanks, in order.", exceeds: "Also says what to do when an item scans twice or the price does not match." },
      { name: "Exact change", objective: "O2", notYet: "Fewer than 5 practice sales, or any change is wrong.", meets: "5 of 5 practice sales counted back exactly with the count-up method.", exceeds: "Includes at least one sale with coins and bills and the spoken count written out." },
      { name: "ID and large-bill checks", objective: "O3", notYet: "No ID step, or the age rule is wrong.", meets: "Checks photo, expiry and birth date, and tilt-light-feel for large bills; calls a manager when unsure.", exceeds: "Also lists the gift card scam warning signs and the store's step for them." },
      { name: "Helpful suggestion", objective: "O4", notYet: "No suggestion, or a pushy one.", meets: "One suggestion line with a benefit and a polite way to accept a no.", exceeds: "Starts with an open question that leads to the suggestion." },
      { name: "When to call a manager", objective: "O5", notYet: "Fewer than three cases, or says to chase a shoplifter.", meets: "Three clear cases (for example, a return outside policy, a failed bill check, an unsure ID) and safety first.", exceeds: "Adds what to say to the customer while waiting for the manager." },
      { name: "Shift steps and next step", objective: "O6", notYet: "Opening or closing steps missing, or no dated next step.", meets: "Opening, running and closing steps in order, plus a dated credential or job step.", exceeds: "Names a specific store or program and a second dated step." }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Learners who apply for a retail or cashier job within 30 days (follow-up survey)",
      "Learners hired into retail who are still employed after 90 days",
      "Learners who enroll in or earn an NRF Foundation RISE Up credential",
      "Partner stores or job programs report fewer drawer shortages and faster training for new hires from the course"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A phone or computer to read the lessons",
      "Coins and play money (or paper slips marked with amounts) for change practice",
      "A few household items and paper price tags for practice sales",
      "Paper and pen, or a phone note, for the Cashier Shift Card",
      "About 60 to 75 minutes in total, in short sessions"
    ],
    facilitatorNotes: [
      "In a group, set up a pretend register at a table and rotate cashier, customer and manager roles.",
      "Run the change practice as a timed game once learners are accurate; accuracy first, then speed.",
      "Use only play money and made-up IDs; never ask learners to show their own ID or card details.",
      "Check your state's age to sell alcohol and tobacco and tell youth learners what applies to them.",
      "Score the Cashier Shift Card with the rubric and have learners bring it to mock interviews.",
      "Programs that are RISE Up training partners can link this course to the credential; check nrffoundation.org."
    ]
  }
};
