"use strict";

// Koach Learn course: Agriculture (Africa) -> "Agricultural Data and Technology".
// For farmers, young agripreneurs, farmer-group leaders and extension officers with a low-cost smartphone: finding trustworthy information, collecting farm data,
// using free weather and satellite data, analysing records in a spreadsheet, using AI assistants responsibly, and protecting farm data.
// Drone data is covered in the drone courses; this course is the phone-and-spreadsheet foundation.

const KMD = { name: "Kenya Meteorological Department (forecasts and agrometeorological bulletins)", url: "https://meteo.go.ke" };
const NIMET = { name: "Nigerian Meteorological Agency (NiMet)", url: "https://nimet.gov.ng" };
const COPERNICUS = { name: "Copernicus Browser (free Sentinel satellite images)", url: "https://browser.dataspace.copernicus.eu/" };
const FAO_EO = { name: "FAO GIEWS Earth Observation (rainfall, NDVI and agricultural stress maps)", url: "https://www.fao.org/giews/earthobservation/index.jsp" };
const KALRO = { name: "Kenya Agricultural and Livestock Research Organization (KALRO)", url: "https://www.kalro.org" };
const KOBO = { name: "KoboToolbox (free data collection forms)", url: "https://www.kobotoolbox.org" };
const ODPC = { name: "Office of the Data Protection Commissioner (Kenya)", url: "https://www.odpc.go.ke" };
const NDPC = { name: "Nigeria Data Protection Commission (NDPC)", url: "https://ndpc.gov.ng" };

module.exports = {
  id: "agri-data-technology",
  category: "Agriculture (Africa)",
  name: "Agricultural Data and Technology",
  skills: "Finding and checking trustworthy farm information, Collecting farm data on a phone, Using free weather and satellite information, Analysing farm records in a spreadsheet, Using AI assistants responsibly for farm questions, Protecting your farm data",
  outcome: "use a low-cost smartphone to collect your farm's data, add free weather and satellite information, analyse it in a spreadsheet to make a better farm decision, check advice from apps and AI tools against trusted sources, and keep your data safe.",
  about: [
    "This course is for farmers, young agripreneurs, farmer-group and cooperative leaders, and extension officers in Kenya, Nigeria and across Africa who have a smartphone (even a low-cost one) and want to use it to farm better. You do not need a computer, but one helps for Chapter 2.",
    "Chapter 1 covers collecting information: finding trustworthy farm advice and avoiding scams, recording your farm's own data on a phone, and using free weather forecasts and satellite maps. Chapter 2 covers using information: analysing your records in a free spreadsheet, asking AI assistants good farm questions and checking their answers, and protecting your data.",
    "Free tools are used throughout: Google Sheets or Microsoft Excel's free web version, free form tools, national weather services, FAO's earth observation maps, and free AI assistants. Each lesson ends with a task. A knowledge check closes each chapter and a 20-question quiz closes the course."
  ],
  finalTask: "Set up a farm data sheet for one season (plots, crops, varieties, planting dates, inputs and costs, rainfall or forecast notes, scouting notes, harvest and sales), fill it with real or example data for at least three plots, make one chart that compares the plots, write one decision you will make for next season because of it, and note which sources you checked and how you keep the data safe.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Farmers, young agripreneurs, farmer-group and cooperative leaders, and extension officers in Kenya, Nigeria and across Africa who have a smartphone, even a low-cost one, and want to use it to farm better.",
    startingPoint: "Most use a phone for calls, mobile money, WhatsApp and Facebook, and get farm advice from neighbours, agrovets, radio and social media groups. Few keep written farm records, use a spreadsheet, read official forecasts or satellite maps, or check AI and app advice against a trusted source.",
    gap: "Without their own records, farmers cannot see which plot, variety or practice really pays, and wrong advice, fake inputs and data scams cost them money. Recording, analysing and checking information on a phone they already own helps them make better decisions, show their track record to lenders and buyers, and keep their data safe.",
    constraints: [
      "Reading level: plain words and short sentences; every technology term is explained",
      "Devices: a low-cost smartphone with limited data; a computer only helps in Chapter 2",
      "Network: patchy coverage in rural areas, so offline forms and saved sheets matter",
      "Time: short lessons that fit around farm work",
      "Privacy and scams: never type PINs, ID numbers or bank details into apps, sheets or AI tools"
    ],
    prerequisites: "None. Learners new to smartphones should first be able to open an app and type a message."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Given a piece of farm advice from a message, app or neighbour", action: "check who says it, whether it fits your area and crop, whether it is recent and whether they are selling something", standard: "before spending money, and spotting any scam signs" },
    { id: "O2", condition: "Using a free spreadsheet or form app on your phone", action: "set up a farm data sheet with one row per event and a fixed name for each plot", standard: "with at least date, plot, activity, quantity and cost columns" },
    { id: "O3", condition: "For your area and season", action: "find the official weather forecast and a free satellite or rainfall map and record what they show in your farm sheet", standard: "with the source and the date" },
    { id: "O4", condition: "Given records for at least three plots", action: "calculate yield and profit per acre with formulas, make a bar chart and write one decision for next season", standard: "with correct sums and the decision linked to the numbers" },
    { id: "O5", condition: "Using a free AI assistant", action: "write a clear farm question and check the answer with extension, an agrovet or the label", standard: "before acting, and typing no private information" },
    { id: "O6", condition: "When an app, buyer or group asks for farm data", action: "decide what to share, with whom and why, and protect the rest", standard: "following your country's data protection rights and asking others for consent" }
  ],
  chapters: [
    {
      name: "Chapter 1: Collecting good information",
      lessons: [
        {
          objectives: ["O1"],
          title: "Finding trustworthy farm information",
          minutes: 5,
          goal: "Judge whether a piece of farm advice is trustworthy before acting on it.",
          text: [
            "Farmers get advice from many places: extension officers, research institutes such as KALRO in Kenya, agricultural development programs in Nigeria's states, FAO and CGIAR centres, agrovets, radio and TV programs, SMS and app services, WhatsApp and Facebook groups, and neighbours. Some is excellent; some is wrong, out of date, or trying to sell you something.",
            "Ask four questions about any advice: Who says it, and do they know (a research institute or trained officer, or an unknown account)? Is it for my area and crop? Is it recent? Are they selling something? Check important advice with a second trusted source before you spend money.",
            "Watch for scams: fake seed and fertilizer, \"miracle\" products, fake jobs or grants that ask for a fee, and messages pretending to be a government program asking for your mobile money PIN. Buy inputs from registered dealers and report fakes to the right authority."
          ],
          steps: ["Ask: who says it, and do they know?", "Ask: is it for my area and crop, and is it recent?", "Ask: are they selling something?", "Check with a second trusted source before spending money.", "Buy inputs from registered dealers; never share your PIN."],
          words: [["Extension officer", "a trained adviser from the government or a project who helps farmers."], ["Research institute", "an organisation that tests and develops farming methods and varieties, such as KALRO."], ["Scam", "a trick to take your money or information."]],
          slides: [
            { title: "Many sources", bullets: ["Extension, research institutes, FAO, CGIAR", "Agrovets, radio, SMS and apps", "Social media groups and neighbours"] },
            { title: "Four questions", bullets: ["Who says it, and do they know?", "For my area and crop?", "Recent?", "Are they selling something?"] },
            { title: "Watch for scams", bullets: ["Fake seed and fertilizer, miracle products", "Grants or jobs that ask for a fee", "Never share your PIN"] }
          ],
          sources: [KALRO],
          tryIt: "Find one piece of farm advice you saw recently (on radio, WhatsApp or from a seller). Answer the four questions about it, and check it with a second trusted source. Write whether you will act on it.",
          youCanNow: "judge whether farm advice is trustworthy and spot common scams.",
          quickCheck: [
            { objective: "O1", q: "Which question helps you judge a piece of farm advice?", options: ["How many people liked the post?", "Is it for my area and crop, and is it recent?", "Is the message long?", "Does it use many pictures?"], answer: 1, why: "Checking who says it, whether it fits your area and crop, and whether it is recent shows if advice is trustworthy." },
            { objective: "O1", q: "A message says you won a farm grant and asks for your mobile money PIN. What do you do?", options: ["Send the PIN quickly", "Pay a small fee first", "Treat it as a scam and do not share the PIN", "Forward it to your group to apply"], answer: 2, why: "Real programs never ask for your PIN or a fee to release a grant." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Recording your farm's data on a phone",
          minutes: 6,
          goal: "Set up a simple phone system to record plots, inputs, scouting and harvest.",
          text: [
            "Your own records are the most valuable data you have, because they are about your farm. A spreadsheet app (Google Sheets or Microsoft Excel, both free on phones) works well: one row per event, with columns such as date, plot, crop, activity, quantity, cost and notes.",
            "Give each plot a short name or number and keep it the same. Record a GPS point or a rough boundary for each plot (many map apps let you drop a pin and share its coordinates). Take photos of problems and name them with the date and plot. For groups and cooperatives, free form tools such as KoboToolbox let many members fill the same form on their phones, even offline, and send it when they get network.",
            "Keep it simple enough to do every time. Five columns filled in every week are worth more than twenty columns filled in once. Back up the sheet (most cloud spreadsheets save automatically) and do not put private numbers such as PINs or ID numbers in it."
          ],
          steps: ["Open a free spreadsheet app and make columns: date, plot, crop, activity, quantity, cost, notes.", "Name each plot and record a GPS pin for it.", "Add a row each time you plant, apply inputs, scout, harvest or sell.", "Name photos with date and plot.", "For groups: consider a shared form that works offline."],
          words: [["Spreadsheet", "a table of rows and columns on a phone or computer for recording and calculating."], ["GPS pin", "a saved point on a map with its coordinates."], ["Offline", "working without an internet connection."]],
          slides: [
            { title: "Your own data is gold", bullets: ["It is about YOUR farm", "One row per event"] },
            { title: "Columns to start", bullets: ["Date, plot, crop, activity", "Quantity, cost, notes"] },
            { title: "Good habits", bullets: ["Same plot names every time", "GPS pin per plot, dated photos", "Simple enough to do every week"] },
            { title: "Groups and safety", bullets: ["Shared offline forms, e.g. KoboToolbox", "Back up; no PINs or ID numbers"] }
          ],
          sources: [KOBO],
          tryIt: "Create your farm sheet on your phone with the seven columns. Add your plots and at least five rows of real activities from this season. Drop a GPS pin for one plot and save its coordinates in the notes.",
          youCanNow: "record your farm's activities, inputs and harvest on a phone in a consistent way.",
          quickCheck: [
            { objective: "O2", q: "In a farm data sheet, what is one row?", options: ["One event, such as a planting or a sale", "One whole season", "One crop for all years", "One phone number"], answer: 0, why: "One row per event, with date, plot, activity, quantity and cost, keeps records easy to add up." },
            { objective: "O2", q: "Your farmer group wants members to send scouting reports from areas with poor network. What could you use?", options: ["A long phone call each week", "Paper notes that stay at home", "A different app for each member", "A shared form tool such as KoboToolbox that works offline"], answer: 3, why: "Form tools like KoboToolbox let many members fill the same form offline and send it when they get network." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Using free weather and satellite information",
          minutes: 6,
          goal: "Use official forecasts and free satellite maps to inform farm decisions.",
          text: [
            "National weather services publish forecasts for farmers: in Kenya, the Kenya Meteorological Department (KMD) publishes seasonal forecasts and agrometeorological bulletins; in Nigeria, NiMet publishes seasonal climate predictions and forecasts. Note what they say for your area in your farm sheet, with the date, so you can later see how it matched your season.",
            "Free satellite information helps too. FAO's earth observation pages show rainfall, vegetation (NDVI) and agricultural stress maps for countries and regions, useful to see whether a dry spell is local or widespread. The Copernicus Browser shows free Sentinel-2 satellite images every few days at about 10 metres per pixel, enough to see the shape of fields and whether a large field is greener or browner than last month.",
            "If you can, measure rainfall yourself with a simple rain gauge and record it every day. Your own rainfall record, next to your planting dates and yields, quickly shows what works on your farm."
          ],
          steps: ["Find your national weather service's forecast for your area.", "Write it in your farm sheet with the date.", "Look at FAO's earth observation maps for your country.", "Find your farm in the Copernicus Browser and compare two dates.", "Record daily rainfall with a simple gauge if you can."],
          words: [["Agrometeorological bulletin", "a weather report written for farmers."], ["Satellite image", "a picture of the earth taken from space."], ["Rain gauge", "a simple container with a scale that measures rainfall."]],
          slides: [
            { title: "Official forecasts", bullets: ["Kenya: KMD seasonal forecasts, agromet bulletins", "Nigeria: NiMet", "Write them in your sheet with the date"] },
            { title: "Free satellite information", bullets: ["FAO: rainfall, NDVI, stress maps", "Copernicus Browser: Sentinel-2, about 10 m", "Is a dry spell local or widespread?"] },
            { title: "Your own rain gauge", bullets: ["Record rain every day", "Compare with planting dates and yields"] }
          ],
          sources: [KMD, NIMET, FAO_EO, COPERNICUS],
          tryIt: "Find this season's forecast for your area and write it in your farm sheet. Then find your area in FAO's earth observation maps or the Copernicus Browser and write one thing you notice.",
          youCanNow: "use official forecasts and free satellite maps alongside your own farm records.",
          quickCheck: [
            { objective: "O3", q: "Where do official seasonal forecasts for farmers in Nigeria come from?", options: ["A Facebook page", "A seed company", "A neighbour", "NiMet"], answer: 3, why: "NiMet publishes Nigeria's seasonal climate predictions and forecasts." },
            { objective: "O3", q: "You want to know whether a dry spell is only on your farm or across the region. What do you check?", options: ["Your phone's battery level", "FAO's earth observation rainfall and vegetation maps", "A radio advert", "Last year's seed packet"], answer: 1, why: "FAO's earth observation maps show rainfall, vegetation and stress for countries and regions." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Collecting good information",
        questions: [
          { objective: "O1", q: "A WhatsApp message promotes a \"miracle fertilizer\" from an unknown seller. You should:", options: ["Buy it quickly before it runs out", "Check with a trusted source such as extension before spending", "Forward it to everyone", "Send your PIN to order"], answer: 1, why: "Unknown sellers and miracle claims are warning signs." },
          { objective: "O2", q: "Which column is useful in a farm data sheet?", options: ["Your mobile money PIN", "Your ID number", "Date, plot and activity", "Your password"], answer: 2, why: "Records need events, not private numbers." },
          { objective: "O2", q: "Why give each plot a fixed name?", options: ["So records can be compared over time", "It looks nice", "The phone requires it", "It is not useful"], answer: 0, why: "Consistent names let you add up and compare plots." },
          { objective: "O3", q: "What do free Sentinel-2 images in the Copernicus Browser show?", options: ["Single insects", "Your bank balance", "Weather next year", "Fields at about 10 metres per pixel every few days"], answer: 3, why: "They are free, frequent and fairly coarse." },
          { objective: "O3", q: "Why record the forecast in your farm sheet with the date?", options: ["To compare it later with what really happened on your farm", "The weather service requires it", "To share with buyers", "To fill space"], answer: 0, why: "Over seasons, you learn how forecasts fit your farm." }
        ]
      }
    },
    {
      name: "Chapter 2: Using information to decide",
      lessons: [
        {
          objectives: ["O4"],
          title: "Analysing your records in a spreadsheet",
          minutes: 6,
          goal: "Calculate yield and profit per plot and make a chart to compare them.",
          text: [
            "Records become useful when you add them up. In your spreadsheet, make a summary table: one row per plot with its size, total cost, harvest, income, and then yield per acre and profit per acre. Spreadsheets do the maths with simple formulas, for example =SUM to add costs and a division to get yield per acre.",
            "Then make a chart. Select the plot names and yield per acre (or profit per acre) and insert a bar chart. A chart makes differences easy to see and to explain to family, a group or a lender.",
            "Look for reasons: did the best plot get manure, an earlier planting date, a different variety, or more rain? Did the weakest plot have pests or waterlogging? Write one decision for next season, and keep recording so you can test it."
          ],
          steps: ["Make a summary table: plot, size, total cost, harvest, income.", "Use =SUM for totals and divide to get yield and profit per acre.", "Select plot names and yield per acre; insert a bar chart.", "Look for reasons in your notes.", "Write one decision for next season."],
          words: [["Formula", "an instruction in a spreadsheet cell that calculates, such as =SUM(B2:B10)."], ["Yield per acre", "how much a plot produced divided by its size."], ["Bar chart", "a chart with bars that compare amounts."]],
          slides: [
            { title: "Add it up", bullets: ["One row per plot", "Size, cost, harvest, income", "Yield and profit per acre"] },
            { title: "Let the sheet do the maths", bullets: ["=SUM for totals", "Divide for per-acre figures"] },
            { title: "Make a chart", bullets: ["Plot names + yield per acre", "Insert a bar chart", "Easy to explain to others"] },
            { title: "Find reasons, decide", bullets: ["Manure, timing, variety, rain, pests?", "One decision for next season"] }
          ],
          tryIt: "Make the summary table for at least three plots (real or example numbers), calculate yield and profit per acre with formulas, insert a bar chart, and write one decision for next season.",
          youCanNow: "analyse farm records in a spreadsheet and use a chart to compare plots and decide.",
          quickCheck: [
            { objective: "O4", q: "What is profit per acre?", options: ["Total harvest only", "Total cost only", "Income minus cost, divided by the plot size in acres", "The price per bag"], answer: 2, why: "Profit per acre takes income minus cost and divides it by the plot size so plots of different sizes can be compared." },
            { objective: "O4", q: "Your summary table shows one plot gave much more maize. What do you do next?", options: ["Look for reasons such as manure or planting date and write one decision", "Delete the other plots from the sheet", "Stop keeping records", "Plant only that plot forever without checking"], answer: 0, why: "Finding the reasons and writing one decision you can test next season turns records into better farming." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Using AI assistants for farm questions, responsibly",
          minutes: 5,
          goal: "Ask an AI assistant a clear farm question and check the answer before acting.",
          text: [
            "Free AI assistants such as ChatGPT, Microsoft Copilot and Google Gemini can explain farming ideas, help plan a season, draft a message to a buyer, translate, or help build a spreadsheet formula. Ask clearly: say your crop, area, season, farm size and what you want, for example: \"I farm 2 acres of maize in Bungoma. The short rains start in October. Make me a simple weekly checklist from land preparation to harvest. Use short sentences.\"",
            "AI can be wrong, out of date, or give advice for another country. It may name products not registered in your country or wrong rates. Never act on AI advice about pesticides, fertilizer rates, animal medicines or money without checking with your extension officer, agrovet, the product label or another trusted source.",
            "Do not type private information into an AI assistant: your ID number, mobile money PIN, bank details or other people's personal data. Use AI as a helpful starting point, not the final word."
          ],
          steps: ["Say your crop, area, season, farm size and what you want.", "Ask for short sentences or a checklist.", "Ask follow-ups to improve the answer.", "Check pesticide, fertilizer, medicine and money advice with a trusted source.", "Never type PINs, ID numbers or bank details."],
          words: [["AI assistant", "a computer program you chat with in everyday words that writes answers."], ["Prompt", "what you type or say to an AI assistant."]],
          slides: [
            { title: "What AI can help with", bullets: ["Explain ideas, plan a season", "Draft messages, translate", "Build spreadsheet formulas"] },
            { title: "Ask clearly", bullets: ["Crop, area, season, farm size", "What you want and how", "Short sentences, checklist"] },
            { title: "Check before acting", bullets: ["Pesticides, rates, medicines, money", "Extension, agrovet, label", "AI can be wrong or foreign"] },
            { title: "Keep private data out", bullets: ["No PINs, ID or bank numbers", "No other people's data"] }
          ],
          tryIt: "Ask a free AI assistant for a weekly checklist for your main crop this season, using the prompt pattern from this lesson. Mark every item that needs checking with a trusted source, and check one of them.",
          youCanNow: "ask an AI assistant a clear farm question and check its answer before acting.",
          quickCheck: [
            { objective: "O5", q: "Which is a clear farm question for an AI assistant?", options: ["\"I grow 1 acre of beans in Kakamega. The long rains start in March. Give me a short planting checklist.\"", "\"farming\"", "\"Tell me everything about crops.\"", "\"beans?\""], answer: 0, why: "It gives the crop, area, season, farm size and what you want." },
            { objective: "O5", q: "An AI assistant gives you a fertilizer rate for your crop. What do you do?", options: ["Use it today", "Double it to be safe", "Check it with your extension officer, agrovet or the label", "Post it in your group as fact"], answer: 2, why: "AI can give wrong rates or advice for another country, so rates must be checked first." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Protecting and sharing your farm data",
          minutes: 5,
          goal: "Decide what farm data to share, with whom, and keep the rest safe.",
          text: [
            "Your farm data has value: buyers, lenders, insurers, input companies and apps may want it. Sharing can help you get a loan, insurance or a contract, but you should know what you share, why and with whom. Read what an app or program says it will do with your data, and say no if you are not comfortable.",
            "Data protection laws give you rights over your personal data. In Kenya, the Data Protection Act 2019 is overseen by the Office of the Data Protection Commissioner (ODPC); in Nigeria, the Nigeria Data Protection Act 2023 is overseen by the Nigeria Data Protection Commission (NDPC). If you collect data from other farmers, for example as a group leader, you must also respect their rights: ask for consent and keep it safe.",
            "Keep your phone and sheets safe: a screen lock, a strong password on your accounts, backups, and care with shared phones. Share summaries (such as yield per acre) rather than everything when that is enough."
          ],
          steps: ["Before sharing, ask: what, why, with whom, and what do I get?", "Read the app's or program's data terms.", "Ask other farmers for consent before collecting their data.", "Lock your phone; use strong passwords; back up.", "Share summaries instead of all details when possible."],
          words: [["Personal data", "information about a person who can be identified."], ["Consent", "a clear yes after understanding what will happen with the data."], ["Data protection law", "a law that controls how personal data may be collected and used."]],
          slides: [
            { title: "Your data has value", bullets: ["Buyers, lenders, insurers, apps want it", "Sharing can help: loans, insurance, contracts", "Know what, why, with whom"] },
            { title: "Your rights", bullets: ["Kenya: Data Protection Act 2019, ODPC", "Nigeria: Data Protection Act 2023, NDPC", "Respect other farmers' data too"] },
            { title: "Keep it safe", bullets: ["Screen lock, strong passwords, backups", "Careful with shared phones", "Share summaries when enough"] }
          ],
          sources: [ODPC, NDPC],
          tryIt: "Final task: complete your season farm data sheet for at least three plots, make one comparison chart, write one decision for next season, list the sources you checked, and write three steps you take to keep the data safe.",
          youCanNow: "collect, analyse, share and protect your farm data to make better decisions.",
          quickCheck: [
            { objective: "O6", q: "Which body oversees data protection in Kenya?", options: ["The Kenya Meteorological Department", "The Office of the Data Protection Commissioner (ODPC)", "KALRO", "Your mobile network"], answer: 1, why: "Kenya's Data Protection Act 2019 is overseen by the ODPC." },
            { objective: "O6", q: "A lender wants to see how your farm performs. What do you share?", options: ["Your phone password", "Your mobile money PIN", "All members' personal data", "A summary such as yield per acre, after reading how they will use it"], answer: 3, why: "A summary is often enough, and you should know what you share, why and with whom." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Using information to decide",
        questions: [
          { objective: "O4", q: "Which spreadsheet formula adds up a column of costs?", options: ["=SUM", "=PIN", "=PHOTO", "=RAIN"], answer: 0, why: "=SUM adds a range of cells." },
          { objective: "O4", q: "Plot A gave 900 kg on half an acre. Its yield per acre is:", options: ["90 kg", "450 kg", "900 kg", "1,800 kg"], answer: 3, why: "900 divided by 0.5 acres is 1,800 kg per acre." },
          { objective: "O5", q: "An AI assistant suggests a pesticide and a rate. You should:", options: ["Spray at once", "Double the rate to be safe", "Share your PIN with it", "Check registration and rate with extension, an agrovet or the label"], answer: 3, why: "AI can name wrong or unregistered products and rates." },
          { objective: "O5", q: "Which is NOT safe to type into an AI assistant?", options: ["Your crop and area", "Your mobile money PIN", "Your season dates", "Your farm size"], answer: 1, why: "PINs and ID numbers must stay private." },
          { objective: "O6", q: "As a group leader collecting members' farm data, you must:", options: ["Ask for consent and keep it safe", "Sell it to buyers", "Post it online", "Collect as much as possible"], answer: 0, why: "Data protection laws protect other people's personal data." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Agricultural Data and Technology",
    questions: [
      { objective: "O1", q: "Which is usually a trustworthy source of farm advice?", options: ["An unknown account selling miracle products", "A research institute such as KALRO or a trained extension officer", "A chain message", "A pop-up ad"], answer: 1, why: "Trained, accountable sources are more reliable." },
      { objective: "O1", q: "Before spending money on new advice, you should:", options: ["Act immediately", "Ask a stranger", "Check with a second trusted source", "Ignore all advice"], answer: 2, why: "A second source catches errors and scams." },
      { objective: "O1", q: "A message says a government grant needs a fee and your PIN. It is:", options: ["Likely a scam", "Normal", "Required by law", "A loan"], answer: 0, why: "Real programs do not ask for your PIN." },
      { objective: "O2", q: "Your most valuable farm data is usually:", options: ["Data about other countries", "Advertising", "Celebrity news", "Your own farm records"], answer: 3, why: "It is about your own plots, inputs and results." },
      { objective: "O2", q: "A good farm sheet has:", options: ["One column only", "One row per event with date, plot, activity, quantity, cost, notes", "Only photos", "Passwords"], answer: 1, why: "Consistent rows and columns allow analysis." },
      { objective: "O2", q: "A GPS pin records:", options: ["Rainfall", "Crop price", "The coordinates of a place", "Soil pH"], answer: 2, why: "Pins save a location on a map." },
      { objective: "O2", q: "KoboToolbox helps groups to:", options: ["Fill the same form on phones, even offline", "Fly drones", "Pay loans", "Grow seeds"], answer: 0, why: "Shared offline forms make group data collection easier." },
      { objective: "O2", q: "Five columns filled every week are:", options: ["Worse than twenty filled once", "Useless", "Against the law", "Worth more than twenty columns filled once"], answer: 3, why: "Regular, simple records are the useful ones." },
      { objective: "O3", q: "Kenya's official agrometeorological bulletins come from:", options: ["KCAA", "The Kenya Meteorological Department", "A seed company", "ODPC"], answer: 1, why: "KMD publishes forecasts and agromet bulletins." },
      { objective: "O3", q: "FAO's earth observation maps can show:", options: ["Your bank balance", "Market prices only", "Rainfall, vegetation and agricultural stress", "Pest names"], answer: 2, why: "FAO GIEWS maps rainfall, NDVI and stress indicators." },
      { objective: "O3", q: "A simple rain gauge lets you:", options: ["Record your own daily rainfall", "Forecast next year", "Measure soil pH", "Count plants"], answer: 0, why: "Your own rainfall record links weather to your yields." },
      { objective: "O4", q: "Yield per acre is:", options: ["Harvest times price", "Cost divided by income", "Plot size times rain", "Harvest divided by plot size"], answer: 3, why: "It makes plots of different sizes comparable." },
      { objective: "O4", q: "A bar chart helps you:", options: ["Hide numbers", "See and explain differences between plots", "Store photos", "Send money"], answer: 1, why: "Bars make comparisons easy to see." },
      { objective: "O4", q: "After finding your best plot, the next step is to:", options: ["Delete the records", "Stop recording", "Look for reasons and write one decision for next season", "Sell the phone"], answer: 2, why: "Analysis should lead to a decision you can test." },
      { objective: "O5", q: "A clear AI prompt for farming includes:", options: ["Crop, area, season, farm size and what you want", "Your ID number", "Only one word", "Your bank details"], answer: 0, why: "Context helps the assistant give useful answers." },
      { objective: "O5", q: "AI advice on animal medicines should be:", options: ["Followed exactly", "Ignored completely", "Shared widely", "Checked with a vet or trusted source before acting"], answer: 3, why: "AI can be wrong; medicines need expert advice." },
      { objective: "O6", q: "In Nigeria, data protection is overseen by:", options: ["NCAA", "The Nigeria Data Protection Commission (NDPC)", "NiMet", "NAFDAC"], answer: 1, why: "NDPC oversees the Nigeria Data Protection Act 2023." },
      { objective: "O6", q: "Before an app collects your farm data, you should:", options: ["Never read anything", "Give all data", "Read what it will do with the data and decide", "Share your PIN"], answer: 2, why: "Know what you share, why and with whom." },
      { objective: "O6", q: "Sharing a summary such as yield per acre instead of all details:", options: ["Can be enough and protects your privacy", "Is never allowed", "Is a scam", "Is useless"], answer: 0, why: "Share only what is needed." },
      { objective: "O6", q: "Which keeps your phone data safer?", options: ["No screen lock", "Sharing passwords", "Never backing up", "A screen lock, strong passwords and backups"], answer: 3, why: "These basic steps protect your records." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Pre-Test: What Do You Already Know?",
    from: [
      0,
      2,
      4,
      8,
      9,
      11,
      12,
      14,
      17,
      19
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part of the sheet and check it again.",
    criteria: [
      {
        name: "Farm data sheet",
        objective: "O2",
        notYet: "Missing columns, or plots named differently in different rows.",
        meets: "One row per event with date, plot, activity, quantity and cost, and fixed plot names, for at least three plots.",
        exceeds: "Also has scouting notes, photos or GPS points linked to the plots."
      },
      {
        name: "Weather and satellite notes",
        objective: "O3",
        notYet: "No forecast or rainfall information.",
        meets: "The official forecast or a satellite or rainfall map is noted with its source and date.",
        exceeds: "Includes the learner's own rain gauge record next to the forecast."
      },
      {
        name: "Analysis and chart",
        objective: "O4",
        notYet: "No summary table, or sums are wrong.",
        meets: "Yield and profit per acre are correct for each plot and shown in a bar chart.",
        exceeds: "The chart is explained in one or two sentences to a group or lender."
      },
      {
        name: "Decision for next season",
        objective: "O4",
        notYet: "No decision, or it does not follow from the numbers.",
        meets: "One clear decision linked to what the sheet shows.",
        exceeds: "Says how next season's records will test the decision."
      },
      {
        name: "Sources checked",
        objective: "O1",
        notYet: "Advice from apps, AI or social media is used without checking.",
        meets: "Notes which trusted sources were used to check advice, including any AI answer.",
        exceeds: "Names a second source for each important piece of advice."
      },
      {
        name: "Data kept safe",
        objective: "O6",
        notYet: "The sheet holds PINs, ID numbers or other people's data without consent.",
        meets: "No private numbers; a note on backups, the screen lock and what is shared with whom.",
        exceeds: "Shows a short summary prepared for sharing instead of the whole sheet."
      }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and score Meets or Exceeds on every rubric row of the farm data sheet",
      "Learners who are still recording farm data on their phone 30 days later (follow-up survey)",
      "Learners who report making a farm decision from their own records or checking advice before buying inputs",
      "Learners who report avoiding a fake input, grant or PIN scam"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A smartphone with internet, even a low-cost one; a computer helps for Chapter 2",
      "Free tools: Google Sheets or the free web version of Microsoft Excel, a map app, and a free AI assistant",
      "Real or example farm records for at least three plots; a simple rain gauge if available",
      "About 60 minutes in total, in short sessions, plus time to fill in the farm data sheet"
    ],
    facilitatorNotes: [
      "In a farmer group or extension session: take the pre-test together, then set up one shared example sheet on a phone so everyone sees the columns.",
      "Prepare example data for learners without records yet, so everyone can practice the formulas and the chart.",
      "Never ask learners to type PINs, ID numbers or bank details into sheets, forms or AI tools; use placeholders.",
      "When a group collects members' data, explain consent and agree who can see the sheet.",
      "Score the final sheet with the rubric and give feedback on one Not yet row at a time."
    ]
  }
};
