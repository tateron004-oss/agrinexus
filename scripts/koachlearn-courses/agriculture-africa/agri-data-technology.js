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
  chapters: [
    {
      name: "Chapter 1: Collecting good information",
      lessons: [
        {
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
          youCanNow: "judge whether farm advice is trustworthy and spot common scams."
        },
        {
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
          youCanNow: "record your farm's activities, inputs and harvest on a phone in a consistent way."
        },
        {
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
          youCanNow: "use official forecasts and free satellite maps alongside your own farm records."
        }
      ],
      check: {
        title: "Knowledge Check 1: Collecting good information",
        questions: [
          { q: "A WhatsApp message promotes a \"miracle fertilizer\" from an unknown seller. You should:", options: ["Buy it quickly before it runs out", "Check with a trusted source such as extension before spending", "Forward it to everyone", "Send your PIN to order"], answer: 1, why: "Unknown sellers and miracle claims are warning signs." },
          { q: "Which column is useful in a farm data sheet?", options: ["Your mobile money PIN", "Your ID number", "Date, plot and activity", "Your password"], answer: 2, why: "Records need events, not private numbers." },
          { q: "Why give each plot a fixed name?", options: ["So records can be compared over time", "It looks nice", "The phone requires it", "It is not useful"], answer: 0, why: "Consistent names let you add up and compare plots." },
          { q: "What do free Sentinel-2 images in the Copernicus Browser show?", options: ["Single insects", "Your bank balance", "Weather next year", "Fields at about 10 metres per pixel every few days"], answer: 3, why: "They are free, frequent and fairly coarse." },
          { q: "Why record the forecast in your farm sheet with the date?", options: ["To compare it later with what really happened on your farm", "The weather service requires it", "To share with buyers", "To fill space"], answer: 0, why: "Over seasons, you learn how forecasts fit your farm." }
        ]
      }
    },
    {
      name: "Chapter 2: Using information to decide",
      lessons: [
        {
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
          youCanNow: "analyse farm records in a spreadsheet and use a chart to compare plots and decide."
        },
        {
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
          youCanNow: "ask an AI assistant a clear farm question and check its answer before acting."
        },
        {
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
          youCanNow: "collect, analyse, share and protect your farm data to make better decisions."
        }
      ],
      check: {
        title: "Knowledge Check 2: Using information to decide",
        questions: [
          { q: "Which spreadsheet formula adds up a column of costs?", options: ["=SUM", "=PIN", "=PHOTO", "=RAIN"], answer: 0, why: "=SUM adds a range of cells." },
          { q: "Plot A gave 900 kg on half an acre. Its yield per acre is:", options: ["90 kg", "450 kg", "900 kg", "1,800 kg"], answer: 3, why: "900 divided by 0.5 acres is 1,800 kg per acre." },
          { q: "An AI assistant suggests a pesticide and a rate. You should:", options: ["Spray at once", "Double the rate to be safe", "Share your PIN with it", "Check registration and rate with extension, an agrovet or the label"], answer: 3, why: "AI can name wrong or unregistered products and rates." },
          { q: "Which is NOT safe to type into an AI assistant?", options: ["Your crop and area", "Your mobile money PIN", "Your season dates", "Your farm size"], answer: 1, why: "PINs and ID numbers must stay private." },
          { q: "As a group leader collecting members' farm data, you must:", options: ["Ask for consent and keep it safe", "Sell it to buyers", "Post it online", "Collect as much as possible"], answer: 0, why: "Data protection laws protect other people's personal data." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Agricultural Data and Technology",
    questions: [
      { q: "Which is usually a trustworthy source of farm advice?", options: ["An unknown account selling miracle products", "A research institute such as KALRO or a trained extension officer", "A chain message", "A pop-up ad"], answer: 1, why: "Trained, accountable sources are more reliable." },
      { q: "Before spending money on new advice, you should:", options: ["Act immediately", "Ask a stranger", "Check with a second trusted source", "Ignore all advice"], answer: 2, why: "A second source catches errors and scams." },
      { q: "A message says a government grant needs a fee and your PIN. It is:", options: ["Likely a scam", "Normal", "Required by law", "A loan"], answer: 0, why: "Real programs do not ask for your PIN." },
      { q: "Your most valuable farm data is usually:", options: ["Data about other countries", "Advertising", "Celebrity news", "Your own farm records"], answer: 3, why: "It is about your own plots, inputs and results." },
      { q: "A good farm sheet has:", options: ["One column only", "One row per event with date, plot, activity, quantity, cost, notes", "Only photos", "Passwords"], answer: 1, why: "Consistent rows and columns allow analysis." },
      { q: "A GPS pin records:", options: ["Rainfall", "Crop price", "The coordinates of a place", "Soil pH"], answer: 2, why: "Pins save a location on a map." },
      { q: "KoboToolbox helps groups to:", options: ["Fill the same form on phones, even offline", "Fly drones", "Pay loans", "Grow seeds"], answer: 0, why: "Shared offline forms make group data collection easier." },
      { q: "Five columns filled every week are:", options: ["Worse than twenty filled once", "Useless", "Against the law", "Worth more than twenty columns filled once"], answer: 3, why: "Regular, simple records are the useful ones." },
      { q: "Kenya's official agrometeorological bulletins come from:", options: ["KCAA", "The Kenya Meteorological Department", "A seed company", "ODPC"], answer: 1, why: "KMD publishes forecasts and agromet bulletins." },
      { q: "FAO's earth observation maps can show:", options: ["Your bank balance", "Market prices only", "Rainfall, vegetation and agricultural stress", "Pest names"], answer: 2, why: "FAO GIEWS maps rainfall, NDVI and stress indicators." },
      { q: "A simple rain gauge lets you:", options: ["Record your own daily rainfall", "Forecast next year", "Measure soil pH", "Count plants"], answer: 0, why: "Your own rainfall record links weather to your yields." },
      { q: "Yield per acre is:", options: ["Harvest times price", "Cost divided by income", "Plot size times rain", "Harvest divided by plot size"], answer: 3, why: "It makes plots of different sizes comparable." },
      { q: "A bar chart helps you:", options: ["Hide numbers", "See and explain differences between plots", "Store photos", "Send money"], answer: 1, why: "Bars make comparisons easy to see." },
      { q: "After finding your best plot, the next step is to:", options: ["Delete the records", "Stop recording", "Look for reasons and write one decision for next season", "Sell the phone"], answer: 2, why: "Analysis should lead to a decision you can test." },
      { q: "A clear AI prompt for farming includes:", options: ["Crop, area, season, farm size and what you want", "Your ID number", "Only one word", "Your bank details"], answer: 0, why: "Context helps the assistant give useful answers." },
      { q: "AI advice on animal medicines should be:", options: ["Followed exactly", "Ignored completely", "Shared widely", "Checked with a vet or trusted source before acting"], answer: 3, why: "AI can be wrong; medicines need expert advice." },
      { q: "In Nigeria, data protection is overseen by:", options: ["NCAA", "The Nigeria Data Protection Commission (NDPC)", "NiMet", "NAFDAC"], answer: 1, why: "NDPC oversees the Nigeria Data Protection Act 2023." },
      { q: "Before an app collects your farm data, you should:", options: ["Never read anything", "Give all data", "Read what it will do with the data and decide", "Share your PIN"], answer: 2, why: "Know what you share, why and with whom." },
      { q: "Sharing a summary such as yield per acre instead of all details:", options: ["Can be enough and protects your privacy", "Is never allowed", "Is a scam", "Is useless"], answer: 0, why: "Share only what is needed." },
      { q: "Which keeps your phone data safer?", options: ["No screen lock", "Sharing passwords", "Never backing up", "A screen lock, strong passwords and backups"], answer: 3, why: "These basic steps protect your records." }
    ]
  }
};
