"use strict";

// Koach Learn course: Agriculture (Africa) -> "Data-Driven Farm Management with Mobile Apps".
// For farmers who run a growing operation (workers, several fields or animals, sometimes from a distance): choosing a farm app or shared sheet, setting up
// a farm register with input stock, paying workers by mobile money with records, data privacy, managing a farm manager remotely, and a weekly 5-number dashboard.
// agri-data-technology already covers basic phone records, weather and satellite information and spreadsheet analysis; this course is about running the operation.
// Farm management apps are described by features, not named: products change and none is endorsed.

const KOBO = { name: "KoboToolbox (free data collection forms that work offline)", url: "https://www.kobotoolbox.org" };
const ODPC = { name: "Office of the Data Protection Commissioner (Kenya)", url: "https://www.odpc.go.ke" };
const NDPC = { name: "Nigeria Data Protection Commission (NDPC)", url: "https://ndpc.gov.ng" };
const GH_DPC = { name: "Data Protection Commission, Ghana (Data Protection Act, 2012, Act 843)", url: "https://dpc.gov.gh/" };
const FAO_CHILD = { name: "FAO: Child labour in agriculture", url: "https://www.fao.org/childlabouragriculture/en/" };

module.exports = {
  id: "agri-digital-farm-management",
  category: "Agriculture (Africa)",
  name: "Data-Driven Farm Management with Mobile Apps",
  skills: "Choosing a farm app or shared sheet, Setting up a farm register and input stock, Paying workers by mobile money with records, Protecting farm and worker data, Managing a farm manager remotely, Running a weekly five-number dashboard",
  outcome: "run your farm from your phone: keep one register of fields, animals, work, workers and input stock, pay workers by mobile money with a record for every payment, get a daily report from your manager that you can check, and look at five numbers every week to decide what to do next.",
  about: [
    "This course is for farmers who are growing: you have workers, several fields or a herd or flock, and maybe you live in town while a manager runs the farm. It suits commercial smallholders, young agripreneurs, absentee farm owners in Nairobi, Lagos, Accra or Dakar, and the farm managers who report to them.",
    "It goes further than keeping basic records. You will choose a farm management app or a shared spreadsheet, set up a register of fields, animals, activities and input stock, pay and record workers by mobile money, protect farm and worker data, set up a daily reporting routine with a manager that you can verify, and build a weekly dashboard of five numbers.",
    "The course does not recommend any app. It shows you the features to look for, so you can judge any app, or build the same system in a free spreadsheet. Money figures are examples only. Each lesson ends with a task on your own farm; a knowledge check closes each chapter and a 20-question quiz closes the course. If you have never kept farm records, take \"Agricultural Data and Technology\" first."
  ],
  finalTask: "Build a weekly farm dashboard for your own farm (real or example numbers): five numbers, each with its source in your register, a target or normal range, and the action you take if it is off. Then write a one-page reporting routine for whoever runs the farm day to day: what the daily WhatsApp report contains (photos, numbers, problems), when it is due, the weekly check-in, how you verify it (spot checks, stock counts, mobile money statements), and who can see which data.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Smallholder and growing commercial farmers, young agripreneurs, absentee farm owners and farm managers in Kenya, Nigeria, Ghana, Senegal, Côte d'Ivoire and across Africa. Many run crops and animals together (maize, tomatoes, poultry, goats, pigs, tilapia) and employ casual or permanent workers.",
    startingPoint: "Use a smartphone daily for calls, WhatsApp and mobile money. Some keep notes in a book or a simple sheet. Few have one system that joins fields, animals, workers, money and stock, and many owners rely on phone calls to know what is happening on the farm.",
    gap: "As a farm grows, money leaks through unrecorded work days, missing inputs, dead animals found late and decisions made on guesswork. Learners need a simple system that joins records, payments and reports, and a habit of checking a few numbers every week, so they can manage from a distance and spot problems early.",
    constraints: [
      "Reading level: plain words and short sentences; the course is also available in Spanish, French and Arabic",
      "Devices: a low-cost Android phone; a computer is helpful but not required",
      "Connectivity: patchy network on many farms, so tools must work offline or by WhatsApp",
      "Money: free tools first; no app is endorsed; all money figures are examples",
      "Privacy laws apply to worker data (Kenya, Nigeria, Ghana and others have data protection laws)",
      "No PINs, passwords or ID numbers in any practice task"
    ],
    prerequisites: "Comfortable with a smartphone, WhatsApp and mobile money. \"Agricultural Data and Technology\" (basic records and spreadsheets) is recommended first."
  },
  // ---- ADDIE: Design (objectives) ----
  objectives: [
    { id: "O1", condition: "Given a list of what your farm needs to track", action: "compare farm management apps or a shared spreadsheet against a feature checklist and choose one", standard: "scoring at least two options and writing the reason for your choice" },
    { id: "O2", condition: "Using the tool you chose", action: "set up a farm register of fields, animals, activities and input stock with fixed names and units", standard: "so every entry can be added up by field, animal group or input" },
    { id: "O3", condition: "Given a week of work by casual and permanent workers", action: "record each worker's days and tasks and pay them by mobile money with a matching record", standard: "so every payment has a date, worker, task, amount and transaction code" },
    { id: "O4", condition: "When a manager or family member runs the farm while you are away", action: "write a daily reporting routine with photo and WhatsApp reports, a weekly check-in and spot checks", standard: "saying what to report, by when, and how you will verify it" },
    { id: "O5", condition: "Using your farm register", action: "build a weekly dashboard of five numbers and the action each one triggers", standard: "updated every week from records, not from memory" },
    { id: "O6", condition: "When you collect data about your farm and your workers", action: "decide what to collect, who can see it and how to protect it", standard: "collecting only what you need and sharing no PINs, passwords or ID numbers" }
  ],
  chapters: [
    {
      name: "Chapter 1: Setting up your farm system",
      lessons: [
        {
          title: "Choosing a farm app or a shared spreadsheet",
          objectives: ["O1"],
          minutes: 5,
          goal: "Choose a farm management app or a shared spreadsheet by scoring it against a feature checklist.",
          text: [
            "A farm management app keeps your fields, animals, work, stock and money in one place on your phone. Many exist, and they change often, so this course does not recommend one. A free shared spreadsheet (Google Sheets or Microsoft Excel) can do the same job if you set it up well. What matters is that you and your workers actually use it every day.",
            "Start with what you need to track, then score each option. Features to look for: works offline and syncs later (many farms have weak network); fields and animal groups as separate records; a simple way to log activities and inputs; stock levels that go down when inputs are used; worker and payment records; photos; several users with different access (a worker can enter data but not see payroll); export to a spreadsheet so your data is never locked in; your language; and a clear price and privacy policy.",
            "Be careful with apps that are free because they sell your data, that need a fast connection, or that you cannot leave with your data. Ask other farmers in your area what they use, try any app for two weeks with real entries, and check the price after the free trial before you put all your records in it."
          ],
          steps: ["List what you must track: fields, animals, work, workers, stock, sales.", "Pick two or three options, including a free shared spreadsheet.", "Score each one against the checklist: offline, users and access, stock, workers, photos, export, language, price, privacy.", "Try the best one for two weeks with real entries.", "Write down your choice and why."],
          words: [["Farm management app", "a phone or web program for recording and organising a farm's fields, animals, work, stock and money."], ["Sync", "when an app sends the data saved on the phone to the internet once there is network."], ["Export", "saving your data out of an app, for example as a spreadsheet file."]],
          slides: [
            { title: "App or shared sheet?", bullets: ["Both can work", "What matters: you and your workers use it daily", "No app is endorsed here: judge by features"] },
            { title: "Features to look for", bullets: ["Works offline, syncs later", "Fields, animals, activities, stock, workers", "Several users with different access", "Export to a spreadsheet"] },
            { title: "Warning signs", bullets: ["Free because it sells your data", "Needs a fast connection", "You cannot take your data out", "Price unclear after the trial"] },
            { title: "Decide", bullets: ["Score two or three options", "Try one for two weeks", "Write your choice and reason"] }
          ],
          tryIt: "Write the list of what your farm must track. Make a scoring table with the checklist features down the side and two or three options across the top (one can be a free shared spreadsheet). Score each one and write your choice and your reason.",
          youCanNow: "judge any farm app or spreadsheet by its features and choose one with a clear reason.",
          quickCheck: [
            { objective: "O1", q: "Your farm in Kakamega often has no network. Which feature matters most?", options: ["Bright colours", "Works offline and syncs later", "A large number of downloads", "Video calls"], answer: 1, why: "If the app cannot save entries without network, workers will stop using it." },
            { objective: "O1", q: "Why check that an app can export your data?", options: ["So your records are never locked inside one app", "To make the phone faster", "Because the law requires every farmer to export", "To get a discount"], answer: 0, why: "Export lets you move your records to a spreadsheet or another app at any time." }
          ]
        },
        {
          title: "Setting up fields, animals, activities and input stock",
          objectives: ["O2"],
          minutes: 6,
          goal: "Set up a farm register with fixed names, units and an input stock list.",
          text: [
            "A register is the backbone of the system. Give every field a fixed short name and size (for example \"F1 Tomato 0.5 acre\"), and every animal group or pond a name and count (\"Layers House A, 500 birds\", \"Goats 24\", \"Pond 2 tilapia\"). Use the same names in every record so you can add up cost and output by field or group.",
            "Then make an activity log: date, field or group, activity (planting, weeding, spraying, feeding, vaccinating by the vet, harvesting, selling), quantity, unit, cost, who did it and a photo if useful. Fix the units: kilograms, litres, bags of 50 kg, crates, trays of 30 eggs. Mixed units make totals wrong.",
            "Add an input stock list: each input with its unit, stock in, stock used and stock left. When a worker records \"2 bags NPK used on F1\", the stock left should go down by two. Count the store against the list every week. If the count and the record do not match, you have found a leak, a recording mistake or theft, and you can ask why the same week."
          ],
          steps: ["Name every field with size, and every animal group, pond or house with its count.", "Fix units for each item: kg, litres, 50 kg bags, crates, trays.", "Make the activity log: date, field or group, activity, quantity, unit, cost, who, photo.", "Make the stock list: input, unit, in, used, left.", "Count the store weekly and compare with the list."],
          words: [["Register", "the master list of your fields, animal groups and inputs that every record refers to."], ["Unit", "what you measure in, such as kilograms, litres or 50 kg bags."], ["Stock count", "physically counting what is in the store and comparing it with the records."]],
          slides: [
            { title: "Fixed names", bullets: ["Fields with size: F1 Tomato 0.5 acre", "Animal groups with count: Layers House A, 500", "Same names in every record"] },
            { title: "The activity log", bullets: ["Date, field or group, activity", "Quantity, unit, cost", "Who did it, photo"] },
            { title: "Input stock", bullets: ["In, used, left for each input", "Fixed units: kg, litres, 50 kg bags"] },
            { title: "Weekly count", bullets: ["Count the store", "Compare with the list", "Mismatch? Ask why this week"] }
          ],
          tryIt: "In your chosen tool, create the register for your farm: every field or animal group with its size or count, an activity log with at least five real entries from this week, and a stock list for at least four inputs. Then count one input in your store and compare it with the list.",
          youCanNow: "set up a farm register that adds up by field, animal group and input, and check your stock against it.",
          quickCheck: [
            { objective: "O2", q: "One worker writes \"2 bags\" and another writes \"100 kg\" for the same fertilizer. What is the fix?", options: ["Ignore it; the total will be close enough", "Delete both records", "Fix one unit for that input and use it every time", "Stop recording fertilizer"], answer: 2, why: "Fixed units let you add up records correctly." },
            { objective: "O2", q: "The stock list says 6 bags of layers mash, but the store has 4. What do you do?", options: ["Change the list to 6 again", "Wait until the end of the season", "Buy 2 more bags and say nothing", "Ask this week why they differ: recording mistake, leak or theft"], answer: 3, why: "A weekly count catches gaps while they are small and easy to explain." }
          ]
        },
        {
          title: "Tracking labour and paying workers by mobile money",
          objectives: ["O3"],
          minutes: 6,
          goal: "Record each worker's days and tasks and pay them by mobile money with a matching record.",
          text: [
            "Labour is often the biggest cost on a growing farm and the least recorded. Keep a worker list (name, phone number for mobile money, daily or monthly rate, start date) and a daily attendance and task log: date, worker, field or group, task, days or hours. A supervisor can send it as a WhatsApp photo of the attendance sheet or fill a shared form every evening.",
            "Pay by mobile money where you can: M-Pesa in Kenya, MTN MoMo in Ghana, Orange Money or Wave in Senegal and Côte d'Ivoire, or a bank or mobile money transfer in Nigeria. Every payment then has a transaction code. Copy the date, worker, amount and transaction code into your payment record, next to the days worked. At the end of the week the days times the rate should equal what you paid. Example only: 6 days x KES 500 = KES 3,000, or 5 days x NGN 4,000 = NGN 20,000.",
            "Pay fairly and on time, and check the legal minimum wage and labour rules with your country's ministry of labour. Do not let children do hazardous farm work such as spraying, handling chemicals or using machines. Tell workers what you record and why, and confirm each payment with them, so the record protects both sides."
          ],
          steps: ["Keep a worker list: name, mobile money number, rate, start date.", "Log attendance and tasks every day.", "Pay by mobile money and copy the transaction code into the payment record.", "Each week check: days x rate = amount paid.", "Confirm each payment with the worker."],
          words: [["Casual worker", "a worker paid by the day or task, not on a monthly contract."], ["Transaction code", "the unique code in the mobile money message that proves a payment happened."], ["Payroll", "the record of who is paid how much and when."]],
          slides: [
            { title: "Labour: big cost, few records", bullets: ["Worker list: name, number, rate", "Daily log: date, worker, field, task, days"] },
            { title: "Pay with a trail", bullets: ["M-Pesa, MTN MoMo, Orange Money, Wave", "Copy the transaction code into the record", "Example only: 6 days x KES 500 = KES 3,000"] },
            { title: "Weekly check", bullets: ["Days x rate = amount paid", "Confirm with each worker"] },
            { title: "Pay fairly and legally", bullets: ["Check minimum wage with the labour ministry", "No hazardous work for children", "Tell workers what you record"] }
          ],
          sources: [FAO_CHILD],
          tryIt: "Make a worker list and a one-week attendance and task log for your farm (real or example). Fill a payment record with date, worker, days, rate, amount and a transaction code column, and check that days times rate equals the amount for every worker.",
          youCanNow: "track who worked, on what and for how long, and pay workers by mobile money with a record that matches.",
          quickCheck: [
            { objective: "O3", q: "Which payment record is complete?", options: ["\"Paid Juma\"", "\"12 May, Juma, 6 days weeding F2, KES 3,000 (example), code QX7...\"", "\"Workers paid this week\"", "\"KES 3,000\""], answer: 1, why: "It has the date, worker, task, days, amount and transaction code." },
            { objective: "O3", q: "A worker says she worked 6 days; the log shows 5. What helps most?", options: ["The daily attendance log and a talk with her and the supervisor", "Paying nothing until next month", "Taking the higher number without asking", "Deleting the log"], answer: 0, why: "A daily log gives both sides a record to check together." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Setting up your farm system",
        questions: [
          { objective: "O1", q: "Which is a warning sign when choosing a farm app?", options: ["It works offline", "You can export your data", "It is free because it sells your data", "Workers can enter data without seeing payroll"], answer: 2, why: "You lose control of your farm and worker data." },
          { objective: "O1", q: "Before putting all your records into an app, you should:", options: ["Try it for two weeks with real entries and check the price after the trial", "Pay for a full year at once", "Choose the one with the most adverts", "Ask the app to choose for you"], answer: 0, why: "A real trial shows whether you and your workers will use it, and what it will cost." },
          { objective: "O2", q: "Why give every field a fixed name like \"F1 Tomato 0.5 acre\"?", options: ["The app will not open otherwise", "So cost and output add up by field", "Buyers ask for it", "It is the law"], answer: 1, why: "The same name in every record lets you total each field." },
          { objective: "O2", q: "Your stock list says 10 bags of NPK left. The store count is 7. This shows:", options: ["The stock list is always right", "Nothing important", "You need a new app", "A mistake, leak or theft to look into this week"], answer: 3, why: "A mismatch is a signal to ask why while it is small." },
          { objective: "O3", q: "Why pay workers by mobile money where you can?", options: ["It is always free", "Workers prefer cash", "Every payment has a transaction code you can record", "It avoids paying minimum wage"], answer: 2, why: "The transaction code is proof of payment for both you and the worker." }
        ]
      }
    },
    {
      name: "Chapter 2: Managing with data, near or far",
      lessons: [
        {
          title: "Protecting farm and worker data",
          objectives: ["O6"],
          minutes: 5,
          goal: "Decide what data to collect, who can see it and how to protect it.",
          text: [
            "Your system now holds valuable and private information: workers' names and phone numbers, pay, your sales and your stock. Kenya (Office of the Data Protection Commissioner), Nigeria (Nigeria Data Protection Commission) and Ghana (Data Protection Commission) have data protection laws and regulators, and so do many other African countries. Larger farms and businesses may have to register; check your regulator's website.",
            "Collect only what you need. You need a worker's name, mobile money number, days and pay. You do not need their ID number in a shared sheet or a photo of their ID in a WhatsApp group. Tell workers what you keep and why. Never put mobile money PINs, passwords or ID numbers in the sheet, the app or an AI tool.",
            "Set access by role: workers enter activities; the manager sees stock and attendance; only you (and your accountant) see pay and sales. Use a phone lock and two-step sign-in, remove people who leave the farm the same day, and keep a backup. If you share data with a buyer, lender or project, share only what they need and ask how they will use it."
          ],
          steps: ["List the data you hold and cross out what you do not need.", "Tell workers what you record and why.", "Set access by role: worker, manager, owner.", "Lock phones, turn on two-step sign-in, keep a backup.", "Remove access for anyone who leaves, the same day."],
          words: [["Personal data", "information about a person, such as a name, phone number or pay."], ["Access", "who can see or change which data."], ["Two-step sign-in", "a second check, such as a code sent to your phone, when you sign in."]],
          slides: [
            { title: "You now hold private data", bullets: ["Workers' names, numbers and pay", "Your sales and stock", "Data protection laws apply"] },
            { title: "Collect only what you need", bullets: ["Name, mobile money number, days, pay", "No ID photos in WhatsApp groups", "Never PINs or passwords"] },
            { title: "Access by role", bullets: ["Workers: enter activities", "Manager: stock and attendance", "Owner: pay and sales"] },
            { title: "Keep it safe", bullets: ["Phone lock, two-step sign-in, backup", "Remove leavers the same day", "Share only what others need"] }
          ],
          sources: [ODPC, NDPC, GH_DPC],
          tryIt: "List every kind of data in your farm system. Cross out what you do not need. Write an access table: for each role (worker, manager, owner, accountant), what they can see and what they can enter.",
          youCanNow: "collect only the data your farm needs and control who can see it.",
          quickCheck: [
            { objective: "O6", q: "Which should NOT go in the shared farm sheet?", options: ["Worker names", "Days worked", "Field names", "Workers' mobile money PINs"], answer: 3, why: "PINs are secret; nobody else should ever hold them." },
            { objective: "O6", q: "Your manager leaves the farm. When do you remove his access to the farm sheet and app?", options: ["At the end of the season", "The same day", "Only if he asks", "Never; he may come back"], answer: 1, why: "Removing access the same day protects your data and your workers' data." }
          ]
        },
        {
          title: "Managing the farm from a distance",
          objectives: ["O4"],
          minutes: 6,
          goal: "Write a daily reporting routine that you can verify.",
          text: [
            "Many owners run farms from town through a manager or a relative. It works when the reporting is routine, not when you call randomly and ask \"How is everything?\". Agree a daily WhatsApp report by a fixed time, for example 6 pm: what was done in each field or house, numbers (eggs collected, birds dead, feed used, litres of milk, crates sold, workers present), problems, and three photos of the same places each day (the crop, the animals, the store).",
            "Hold a short weekly check-in by phone or video at a fixed time: go through the week's numbers, the stock count and next week's plan. Decide together and write the decisions in the group. A good manager should also be paid and trusted to make small decisions without you.",
            "Trust, but verify. Compare reports with things that are hard to fake: mobile money statements, buyer receipts, the weekly stock count and photos with the date and location. Visit without long notice now and then, and sometimes ask a trusted neighbour, vet or extension officer for a second view. When a number looks wrong, ask calmly and early. Most gaps are mistakes, and checking regularly keeps honest people honest."
          ],
          steps: ["Agree the daily report: time, numbers, problems, three fixed photos.", "Set a weekly check-in at a fixed time.", "Write decisions in the group.", "Verify with statements, receipts, stock counts and dated photos.", "Visit sometimes without long notice; ask early and calmly about odd numbers."],
          words: [["Absentee owner", "a farm owner who lives away and runs the farm through someone else."], ["Verify", "check that a report is true using a second source."], ["Check-in", "a short, regular meeting to review numbers and plans."]],
          slides: [
            { title: "Routine beats random calls", bullets: ["Daily WhatsApp report by a fixed time", "Numbers, problems, three fixed photos"] },
            { title: "Weekly check-in", bullets: ["Same time every week", "Numbers, stock count, next week's plan", "Write decisions in the group"] },
            { title: "Trust, but verify", bullets: ["Mobile money statements and receipts", "Weekly stock count, dated photos", "Visits and a trusted second view"] },
            { title: "When a number looks wrong", bullets: ["Ask early and calmly", "Most gaps are mistakes", "Regular checks keep everyone honest"] }
          ],
          tryIt: "Write the daily report template your manager will send (the numbers, the problems line and the three photo spots). Then list three ways you will verify the reports, and the day and time of your weekly check-in.",
          youCanNow: "set up a daily report and weekly check-in with a manager and verify what they tell you.",
          quickCheck: [
            { objective: "O4", q: "Which daily report is most useful from a poultry manager?", options: ["\"All is well.\"", "A voice note at any time of day", "\"6 pm: 412 eggs, 2 birds dead, 3 bags feed used, 4 workers, photos of House A, birds and store\"", "A weekly phone call only"], answer: 2, why: "Fixed numbers and photos at a fixed time can be compared day to day." },
            { objective: "O4", q: "Which is the best way to verify reported egg sales?", options: ["Compare them with mobile money statements and buyer receipts", "Ask the manager if he is sure", "Count the eggs on the WhatsApp photo", "Trust it because he is family"], answer: 0, why: "Payments and receipts are a second source that is hard to fake." }
          ]
        },
        {
          title: "Your weekly dashboard: five numbers to watch",
          objectives: ["O5", "O4"],
          minutes: 6,
          goal: "Build a weekly dashboard of five numbers, each with a normal range and an action.",
          text: [
            "A dashboard is a short page of the few numbers that tell you whether the farm is on track. Five is enough to read in two minutes every week. Choose numbers that come straight from your register, so nobody has to remember them.",
            "Good choices for most farms: (1) cash in and cash out this week; (2) output, such as kg harvested, eggs per day, litres of milk or fish growth; (3) losses, such as dead birds, sick animals or rejected crates; (4) input stock left versus what the next two weeks need; (5) labour days or cost per field or group. A layer farm in Ghana might watch eggs per day, dead birds, feed used, cash from egg sales and feed stock. A tomato farmer in Senegal might watch crates harvested, rejected crates, labour days, cash from sales in XOF and pesticide and fertilizer stock.",
            "For each number write a normal range and an action. Example: \"Dead birds above 3 a day: call the vet the same day.\" \"Feed stock below 10 days: order feed.\" Put the five numbers in a small table with one column per week, so you see the trend. Review it in the weekly check-in, and change a number if it never leads to a decision."
          ],
          steps: ["Pick five numbers that come from your register.", "Write a normal range or target for each.", "Write the action if a number is outside the range.", "Make a table with one column per week.", "Review it in the weekly check-in and act."],
          words: [["Dashboard", "a short summary of the key numbers that show how the farm is doing."], ["Trend", "the direction a number moves over several weeks."], ["Normal range", "the values you expect when things are going well."]],
          slides: [
            { title: "Five numbers, two minutes", bullets: ["Straight from your register", "Read every week"] },
            { title: "Good choices", bullets: ["Cash in and out", "Output: kg, eggs, litres", "Losses, stock left, labour cost"] },
            { title: "Range and action", bullets: ["Dead birds above normal: call the vet", "Feed below 10 days: order feed"] },
            { title: "Watch the trend", bullets: ["One column per week", "Review in the check-in", "Drop numbers that never lead to action"] }
          ],
          tryIt: "Final task: build your weekly farm dashboard with five numbers, each with its source in your register, a normal range and the action you take if it is off, and fill in at least two weeks. Then write your one-page reporting routine: the daily report, the weekly check-in, how you verify, and who sees which data.",
          youCanNow: "run your farm with a weekly five-number dashboard and a reporting routine you can check.",
          quickCheck: [
            { objective: "O5", q: "Why should dashboard numbers come straight from the register?", options: ["So they look more professional", "So nobody has to remember or guess them", "Because apps require it", "So workers cannot see them"], answer: 1, why: "Numbers from records are reliable; numbers from memory are not." },
            { objective: "O5", q: "Your dashboard says \"feed stock below 10 days: order feed\". Stock is 6 days. What now?", options: ["Wait for the monthly review", "Remove that number from the dashboard", "Ask the workers to feed less", "Order feed this week"], answer: 3, why: "Each number has an action; when it is outside the range, you act." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Managing with data, near or far",
        questions: [
          { objective: "O6", q: "Who should see workers' pay in the farm system?", options: ["Every worker", "Anyone in the farm WhatsApp group", "The owner and, if needed, the accountant", "Buyers"], answer: 2, why: "Pay is private; access by role protects it." },
          { objective: "O4", q: "What makes a daily farm report easy to check?", options: ["Fixed numbers and the same photo spots at a fixed time", "Long voice notes", "Calling whenever you remember", "Only reporting problems"], answer: 0, why: "The same content every day lets you compare and spot changes." },
          { objective: "O4", q: "A manager's reported sales are lower than the buyer's receipts. What do you do first?", options: ["Sack him at once", "Ignore it", "Post it in the workers' group", "Ask calmly and early, and compare the records together"], answer: 3, why: "Most gaps are mistakes; asking early with records finds out which." },
          { objective: "O5", q: "Which is a good dashboard number for a dairy farm?", options: ["The colour of the barn", "Litres of milk per day", "The number of WhatsApp messages", "The manager's favourite cow"], answer: 1, why: "Output numbers like litres per day show if the farm is on track." },
          { objective: "O5", q: "A dashboard number never leads to any decision. You should:", options: ["Replace it with one that does", "Keep it forever", "Add five more like it", "Hide the dashboard"], answer: 0, why: "A dashboard is for decisions; drop numbers that do not help." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Data-Driven Farm Management with Mobile Apps",
    questions: [
      { objective: "O1", q: "What is the most important test of a farm app?", options: ["It has the most features", "It is the most expensive", "It was advertised on the radio", "You and your workers use it every day"], answer: 3, why: "A tool nobody uses gives you no data." },
      { objective: "O1", q: "Which feature lets a worker record work without seeing payroll?", options: ["Several users with different access", "Dark mode", "Video calls", "Unlimited photos"], answer: 0, why: "Role-based access keeps private data private." },
      { objective: "O1", q: "Can a free shared spreadsheet replace a farm app?", options: ["No, never", "Yes, if it is set up well and used every day", "Only for very large farms", "Only if it is printed"], answer: 1, why: "A well set-up shared sheet can track fields, work, stock and pay." },
      { objective: "O2", q: "Which is a good field name in a register?", options: ["\"The one near the road\"", "\"Tomatoes\"", "\"F1 Tomato 0.5 acre\"", "A different name each week"], answer: 2, why: "A fixed short name with size lets records add up." },
      { objective: "O2", q: "Why fix units such as \"50 kg bags\" for each input?", options: ["So totals and stock left are correct", "Because suppliers require it", "So workers write less", "It does not matter"], answer: 0, why: "Mixed units make totals wrong." },
      { objective: "O2", q: "When a worker records \"2 bags NPK used on F1\", the stock list should:", options: ["Stay the same", "Go up by two", "Be deleted", "Go down by two"], answer: 3, why: "Stock left = stock in minus stock used." },
      { objective: "O2", q: "How often should you count the input store against the list?", options: ["Once a year", "Only after theft", "Every week", "Never"], answer: 2, why: "Weekly counts catch gaps early." },
      { objective: "O3", q: "What links a mobile money payment to a worker's record?", options: ["The transaction code", "The phone's colour", "The worker's ID photo in WhatsApp", "The weather"], answer: 0, why: "The code proves the payment and matches it to the record." },
      { objective: "O3", q: "A worker did 5 days at an example rate of NGN 4,000 a day. The record should show:", options: ["NGN 4,000", "NGN 20,000", "NGN 9,000", "NGN 45,000"], answer: 1, why: "5 x 4,000 = 20,000; days times rate must equal the amount paid." },
      { objective: "O3", q: "Where do you check the legal minimum wage?", options: ["A WhatsApp group", "The input dealer", "An AI assistant only", "Your country's ministry of labour"], answer: 3, why: "Wage rules come from the official labour authority and change over time." },
      { objective: "O6", q: "Which data does a farm need about a casual worker?", options: ["Name, mobile money number, days and pay", "Their PIN", "A photo of their ID in the group chat", "Their bank password"], answer: 0, why: "Collect only what you need." },
      { objective: "O6", q: "Which office regulates personal data in Kenya?", options: ["The Kenya Meteorological Department", "The Pest Control Products Board", "The Office of the Data Protection Commissioner", "KALRO"], answer: 2, why: "The ODPC is Kenya's data protection regulator." },
      { objective: "O6", q: "A buyer asks for your farm records. You should:", options: ["Send everything, including pay", "Share only what they need and ask how they will use it", "Refuse to sell to them", "Send your phone password"], answer: 1, why: "Share the minimum and know how it will be used." },
      { objective: "O4", q: "What should a daily report from the farm include?", options: ["Only good news", "Long stories", "Nothing; reports are not needed", "Numbers, problems and photos of the same spots"], answer: 3, why: "Fixed content lets you compare day to day." },
      { objective: "O4", q: "Which is hardest to fake when you verify a report?", options: ["A mobile money statement", "A voice note", "A promise", "A text saying \"all fine\""], answer: 0, why: "Statements and receipts are independent records." },
      { objective: "O4", q: "What is the purpose of the weekly check-in?", options: ["To shout at the manager", "To review numbers, stock and next week's plan together", "To replace all records", "To pay suppliers"], answer: 1, why: "It turns the numbers into decisions." },
      { objective: "O5", q: "How many numbers does this course suggest for a weekly dashboard?", options: ["One", "Twenty", "Five", "Fifty"], answer: 2, why: "Five numbers can be read and acted on in two minutes." },
      { objective: "O5", q: "Which is a loss number for a layer farm?", options: ["Eggs sold", "Feed delivered", "Workers present", "Birds dead this week"], answer: 3, why: "Losses such as dead birds warn you early." },
      { objective: "O5", q: "\"Dead birds above 3 a day: call the vet the same day\" is an example of:", options: ["A normal range with an action", "A data protection rule", "A mobile money code", "A stock count"], answer: 0, why: "Each dashboard number has a range and the action you take." },
      { objective: "O5", q: "Why put one column per week in the dashboard?", options: ["To fill the page", "To see the trend over time", "Because apps require it", "To hide bad weeks"], answer: 1, why: "Trends show problems before they become big." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Pre-Test: What Do You Already Know?", from: [0, 3, 5, 7, 8, 11, 14, 16, 17] },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      { name: "Five useful numbers", objective: "O5", notYet: "Fewer than five numbers, or numbers that lead to no decision.", meets: "Five numbers covering cash, output, losses, stock and labour, each with a normal range and an action.", exceeds: "At least two weeks filled in, and one decision already taken because of a number." },
      { name: "Numbers come from records", objective: "O2", notYet: "Numbers are guessed or remembered.", meets: "Each number names its source in the register (activity log, stock list, payment record).", exceeds: "The register uses fixed names and units, and the stock count matches the list." },
      { name: "Labour and pay recorded", objective: "O3", notYet: "Labour is missing or paid with no record.", meets: "Labour days come from the attendance log and payments have transaction codes.", exceeds: "Days x rate is checked against payments every week." },
      { name: "Reporting routine", objective: "O4", notYet: "No fixed report, or only \"call when needed\".", meets: "Daily report content and time, weekly check-in, and at least two ways to verify are written.", exceeds: "Includes unannounced visits or a trusted second view, and how odd numbers are raised." },
      { name: "Data protected", objective: "O6", notYet: "PINs, ID numbers or pay are visible to everyone.", meets: "Only needed data is collected, and access is set by role.", exceeds: "Includes backup, two-step sign-in and removing leavers the same day." }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Learners still reviewing their weekly dashboard 30 days later (follow-up survey)",
      "Learners who found and fixed a stock, labour or sales gap within 60 days",
      "Share of worker payments made with a recorded transaction code",
      "Farm groups or programs that report fewer losses or disputes over pay after the course"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A smartphone with WhatsApp and mobile money",
      "A free spreadsheet app (Google Sheets or Microsoft Excel) or a farm app the learner is trying",
      "The learner's own farm details, or the example numbers in the lessons",
      "Paper and pen for the scoring table and access table",
      "About 75 minutes in total, in short sessions"
    ],
    facilitatorNotes: [
      "Works well with farmer groups, young agripreneur programs and absentee owners' associations; one chapter per session.",
      "Do not endorse or sell any app in the session; let learners score options with the checklist.",
      "Never ask learners to show real PINs, passwords, ID numbers or other people's pay in a group.",
      "Pair owners with their managers for the Lesson 5 task when you can, so the routine is agreed by both.",
      "Remind learners that wage, labour and data protection rules differ by country and change; check the official sources.",
      "Score the final task with the rubric and give feedback on one Not yet row at a time."
    ]
  }
};
