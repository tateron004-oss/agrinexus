"use strict";

// Koach Learn course: Agriculture (Africa) -> "Drones for Agricultural Monitoring 5: Data Integration, GIS and Designing Programs" (owner's drone outline, modules 10 and 11).
// Fifth of the six-part monitoring track: managing drone data, combining it with GIS, satellite and farm records, protecting farmers' data under national law,
// then designing a drone-based monitoring program (for a cooperative, county or state program, NGO or agribusiness) that lasts.

const ODPC = { name: "Office of the Data Protection Commissioner (Kenya)", url: "https://www.odpc.go.ke" };
const NDPC = { name: "Nigeria Data Protection Commission (NDPC)", url: "https://ndpc.gov.ng" };
const QGIS = { name: "QGIS (free, open-source GIS)", url: "https://qgis.org/" };
const COPERNICUS = { name: "Copernicus Browser (free Sentinel satellite images)", url: "https://browser.dataspace.copernicus.eu/" };
const FAO_ITU_DRONES = { name: "FAO and ITU: E-agriculture in Action: Drones for Agriculture (2018)", url: "https://www.itu.int/pub/D-STR-E_AGRICULT.02-2018" };
const KCAA_UAS = { name: "Kenya Civil Aviation Authority (KCAA): Unmanned Aircraft Systems", url: "https://www.kcaa.or.ke/safety-security-oversight/unmanned-aircraft-systems" };
const NCAA_P21 = { name: "Nigeria Civil Aviation Authority (NCAA): Nig.CARs 2023 Part 21, Remotely Piloted Aircraft Systems", url: "https://www.ncaa.gov.ng/documents/regulations/nig-cars-2023/part-21-remotely-piloted-aircraft-system-rpas/" };

module.exports = {
  id: "agri-drones-programs",
  category: "Agriculture (Africa)",
  name: "Drones for Agricultural Monitoring 5: Data Integration, GIS and Designing Programs",
  skills: "Organising and backing up drone data, Combining drone maps with GIS layers and satellite images, Protecting farmers' data and getting consent, Defining a monitoring program's goal and users, Planning team, equipment, schedule and budget, Measuring and reporting results",
  outcome: "design a drone-based farm monitoring program for a group of farmers: its goal, users, data plan with GIS integration and data protection, team, schedule, budget, how it pays for itself, and how you will measure and report results.",
  about: [
    "This is Course 5 of the drone monitoring track. It is for extension managers, cooperative and farmer-group leaders, county and state agriculture staff, NGO program officers, agribusiness managers and drone entrepreneurs in Kenya, Nigeria and across Africa who want to run drone monitoring for many farms, not just one.",
    "Chapter 1 is about data: naming, storing and backing up drone data; putting drone maps together with field boundaries, satellite images and farm records in GIS; and protecting farmers' personal data under laws such as Kenya's Data Protection Act 2019 and the Nigeria Data Protection Act 2023. Chapter 2 is about program design: starting from a real problem and real users, planning people, equipment, flights and money, and proving that the program works.",
    "By the end you will have a program design you could present to a cooperative board, a county or state office, a donor or an investor. A knowledge check closes each chapter and a 20-question quiz closes the course."
  ],
  finalTask: "Write a two-page program design for drone monitoring for a cooperative of 200 smallholder farmers (for example maize and beans in Trans Nzoia, coffee in Nyeri, or cassava in Ogun State): the problem and goal, the users and what each gets, the data plan (storage, GIS layers, satellite use, consent and data protection), the team and equipment, the flight schedule for one season, a simple budget with how the service is paid for, the measures of success, and how results will be reported.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Extension managers, cooperative and farmer-group leaders, county and state agriculture staff, NGO program officers, agribusiness managers and drone entrepreneurs in Kenya, Nigeria and across Africa who want to run drone monitoring for many farms.",
    startingPoint: "Learners can make and read drone maps and have seen single-farm drone work (Courses 1 to 4). Few have organised data from hundreds of farms, combined drone maps with satellite images and records in GIS, handled farmers' personal data under the law, or planned and budgeted a program that lasts beyond a grant.",
    gap: "Many drone projects start with the drone instead of a problem, lose data, mishandle farmers' personal information or stop when the grant ends. A clear program design with a data plan, consent, team, schedule, budget and measures lets a cooperative, county or business run a service that farmers trust and that pays for itself.",
    constraints: [
      "Reading level: plain words; every data and GIS term is explained",
      "Devices: a laptop with free QGIS and a spreadsheet; drone and satellite data or examples",
      "Law: data protection laws apply (Kenya's Data Protection Act 2019, the Nigeria Data Protection Act 2023 or the learner's own country's law)",
      "Aviation rules: pilots need licences and the organisation may need an operator certificate",
      "Costs and fees differ by country and change: learners use real local quotes"
    ],
    prerequisites: "\"Drones for Agricultural Monitoring 4: Precision, Climate and Livestock Monitoring\", or equivalent experience with drone maps."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "For drone data from many farms", action: "set up a folder structure, naming rule, flight register and 3-2-1 backup", standard: "using Farm IDs instead of names and checking that backups open" },
    { id: "O2", condition: "Given drone maps, field boundaries, satellite images and farm records", action: "plan a GIS project that layers them and links records to fields by ID", standard: "with every layer in the same coordinate system" },
    { id: "O3", condition: "When a program collects farmers' personal data", action: "write a consent statement and data protection steps that follow the law", standard: "saying what is collected, why, who sees it, how long it is kept and that farmers can say no" },
    { id: "O4", condition: "For a group of farmers", action: "write a program goal with a number and a date and list the users and what each gets", standard: "starting from a problem the users care about and can act on" },
    { id: "O5", condition: "For one season of the program", action: "plan the team, equipment, flight schedule and budget and how the service is paid for", standard: "including licences, one-off and running costs, and a plan for after any grant ends" },
    { id: "O6", condition: "At the end of a season", action: "choose measures of success and report results to each user", standard: "compared with a baseline and honest about what did not work" }
  ],
  chapters: [
    {
      name: "Chapter 1: Data management and integration",
      lessons: [
        {
          objectives: ["O1"],
          title: "Organising, storing and backing up drone data",
          minutes: 5,
          goal: "Set up a folder, naming and backup system for drone data from many farms.",
          text: [
            "One mapping flight can produce hundreds of photos and several large maps. Across 200 farms and a full season, that becomes thousands of files. Without a system, data gets lost, mixed up or overwritten, and the program loses trust.",
            "Use one clear folder structure and one naming rule for everyone: for example Program / Farm ID / Field ID / Date / raw, processed, reports. Use a Farm ID number instead of the farmer's name in file names. Keep a simple register (a spreadsheet) of every flight: date, farm ID, field, pilot, drone, files, processed yes or no.",
            "Follow the 3-2-1 backup idea: three copies, on two different kinds of storage (for example a laptop and an external drive), with one copy in another place or a trusted cloud service. Check that backups open. Decide how long you keep raw photos, because they fill storage fast."
          ],
          steps: ["Agree one folder structure and naming rule for the whole team.", "Give each farm and field an ID number; keep names out of file names.", "Keep a flight register spreadsheet.", "Back up: three copies, two kinds of storage, one off-site.", "Set how long raw photos are kept."],
          words: [["Raw data", "the original photos and logs straight from the drone."], ["Backup", "an extra copy of data kept in case the original is lost."], ["Register", "a list that records every flight and its files."]],
          slides: [
            { title: "Data grows fast", bullets: ["Hundreds of photos per flight", "Thousands of files per season", "Lost or mixed data loses trust"] },
            { title: "One system for everyone", bullets: ["Program / Farm ID / Field ID / Date", "Raw, processed, reports", "IDs, not names, in file names"] },
            { title: "Keep a flight register", bullets: ["Date, farm, field, pilot, drone", "Files and processing status"] },
            { title: "3-2-1 backup", bullets: ["Three copies", "Two kinds of storage", "One copy in another place"] }
          ],
          tryIt: "Create the folder structure on your computer or phone for an example program with three farms, and start a flight register spreadsheet with the columns from this lesson. Add two example flights.",
          youCanNow: "organise, register and back up drone data for a multi-farm program.",
          quickCheck: [
            { objective: "O1", q: "Why decide how long to keep raw photos?", options: ["Raw photos are illegal to keep", "Farmers ask for them every day", "Raw photos fill storage fast", "Maps cannot be made from them"], answer: 2, why: "Raw photos fill storage fast, so the program decides how long to keep them." },
            { objective: "O1", q: "Two pilots name files differently for the same farm. What do you do?", options: ["Agree one folder structure and naming rule for everyone", "Let each pilot use their own system", "Use the farmer's name in every file", "Delete the older files"], answer: 0, why: "One clear folder structure and naming rule for everyone keeps data from being lost or mixed up." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Combining drone maps with GIS, satellite and farm records",
          minutes: 6,
          goal: "Build a GIS project that layers drone maps, field boundaries, satellite images and farm records.",
          text: [
            "GIS lets you stack different kinds of data on one map. For a program, the base layers are field boundaries (walked with a phone GPS or drawn on a drone map) and farm points. On top go drone orthomosaics and NDVI maps, free satellite images, and records such as planting date, variety, inputs and yield.",
            "Free Sentinel-2 satellite images, viewable in the Copernicus Browser, come every few days at about 10 metres per pixel. They are too coarse for single plants but good for watching all 200 farms between drone flights. Use satellites to decide which farms need a drone visit, and drones for the detail.",
            "Link records to fields with the Field ID, so you can ask questions like: did fields that got the drone advice yield more? QGIS can join a spreadsheet to a field layer by ID. Use the same coordinate system for every layer, or they will not line up."
          ],
          steps: ["Make a field boundary layer with a Field ID for each field.", "Add drone maps for the fields you flew.", "Add a free satellite image of the area for the same period.", "Join your records spreadsheet to the field layer by Field ID.", "Check that every layer lines up (same coordinate system)."],
          words: [["Field boundary", "a shape on a map that outlines a field."], ["Sentinel-2", "a pair of European satellites whose images are free; about 10 m per pixel."], ["Join", "linking a table to map shapes using a shared ID."], ["Coordinate system", "the rule a map uses to place things on the earth; layers must share one to line up."]],
          slides: [
            { title: "Stack your layers", bullets: ["Field boundaries and farm points", "Drone maps and NDVI", "Satellite images", "Planting, inputs, yield records"] },
            { title: "Satellite plus drone", bullets: ["Sentinel-2: free, every few days, about 10 m", "Watch all farms between flights", "Send the drone where detail is needed"] },
            { title: "Link records by Field ID", bullets: ["Join spreadsheets to fields in QGIS", "Ask: did advised fields yield more?", "Same coordinate system for all layers"] }
          ],
          sources: [QGIS, COPERNICUS],
          tryIt: "Open the Copernicus Browser and find your area. Then in QGIS, draw two example field boundaries, give them Field IDs, and join a small spreadsheet with planting date and variety for each.",
          youCanNow: "combine drone maps, satellite images, field boundaries and farm records in one GIS project.",
          quickCheck: [
            { objective: "O2", q: "What does GIS let you do?", options: ["Fly the drone automatically", "Stack different kinds of data on one map", "Charge batteries faster", "Pay farmers by mobile money"], answer: 1, why: "GIS stacks layers such as boundaries, drone maps, satellite images and records on one map." },
            { objective: "O2", q: "A cooperative wants to watch all 200 farms every week but has one drone. What do you plan?", options: ["Fly every farm every day", "Give up on monitoring", "Fly only the chairman's farm", "Use free satellite images to watch all farms and send the drone where they show a problem"], answer: 3, why: "Satellites watch all farms between flights; drones give the detail where it is needed." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Protecting farmers' data and getting consent",
          minutes: 5,
          goal: "Collect and use farmers' data lawfully, with clear consent and safe storage.",
          text: [
            "A monitoring program holds personal data: names, phone numbers, mobile money numbers, farm locations, yields and photos of homesteads. Data protection laws apply. In Kenya, the Data Protection Act 2019 is overseen by the Office of the Data Protection Commissioner (ODPC), which registers data controllers and processors. In Nigeria, the Nigeria Data Protection Act 2023 is overseen by the Nigeria Data Protection Commission (NDPC). Other countries have their own laws. Check whether your organisation must register and what the law requires.",
            "Get clear consent in the farmer's language: what you collect, why, who sees it, how long you keep it, and that they can say no or ask for it to be removed. Collect only what you need. Do not share data with buyers, lenders or others without permission.",
            "Keep data safe: passwords on laptops and phones, limited access, and personal details stored separately from maps where you can. Farmers should get value from their own data, such as their maps and reports, not just give it away."
          ],
          steps: ["List the personal data the program will hold.", "Check your country's data protection law and whether you must register.", "Write a short consent statement in the farmer's language.", "Collect only what you need; store it with passwords and limited access.", "Give farmers their own maps and reports."],
          words: [["Personal data", "information about a person who can be identified, such as name, phone number or farm location."], ["Consent", "a clear yes from a person, after they understand what will happen with their data."], ["Data controller", "the organisation that decides why and how personal data is used."]],
          slides: [
            { title: "Your program holds personal data", bullets: ["Names, phones, mobile money numbers", "Farm locations, yields, photos"] },
            { title: "The law applies", bullets: ["Kenya: Data Protection Act 2019, ODPC", "Nigeria: Data Protection Act 2023, NDPC", "Other countries: their own law"] },
            { title: "Consent and minimum data", bullets: ["What, why, who sees it, how long", "Farmers can say no", "Collect only what you need"] },
            { title: "Keep it safe and fair", bullets: ["Passwords, limited access", "No sharing without permission", "Farmers get their own maps"] }
          ],
          sources: [ODPC, NDPC],
          tryIt: "Write a five-sentence consent statement for farmers joining a drone monitoring program, in plain words (and in a local language if you can): what you collect, why, who sees it, how long you keep it, and how to say no.",
          youCanNow: "collect and handle farmers' data with consent, following your country's data protection law.",
          quickCheck: [
            { objective: "O3", q: "In Kenya, whom does the ODPC register?", options: ["Drone pilots", "Seed dealers", "Farm buyers only", "Data controllers and processors"], answer: 3, why: "Kenya's ODPC registers data controllers and processors under the Data Protection Act 2019." },
            { objective: "O3", q: "A farmer asks you to remove her data from the program. What do you do?", options: ["Refuse, because the data belongs to the program", "Respect the request and remove it, as the consent said she could", "Sell it first, then remove it", "Ignore the request"], answer: 1, why: "Consent tells farmers they can say no or ask for their data to be removed." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Data management and integration",
        questions: [
          { objective: "O1", q: "Why use Farm IDs instead of farmers' names in file names?", options: ["Names are too long", "It protects privacy and keeps naming consistent", "Software cannot read names", "The drone requires it"], answer: 1, why: "IDs protect personal data and keep files tidy." },
          { objective: "O1", q: "The 3-2-1 backup idea means:", options: ["Three copies, two kinds of storage, one off-site", "Three drones, two pilots, one farm", "Back up once every three years", "Delete two copies"], answer: 0, why: "Several copies in different places protect against loss." },
          { objective: "O2", q: "Free Sentinel-2 images are best used in a program to:", options: ["Count single plants", "Replace all drone flights", "Read farmers' names", "Watch all farms between flights and choose where to send the drone"], answer: 3, why: "At about 10 m they show broad patterns, not single plants." },
          { objective: "O2", q: "Two map layers do not line up. A likely cause is:", options: ["Too much overlap", "The farmer's phone", "Different coordinate systems", "Too many farms"], answer: 2, why: "Layers must share a coordinate system to line up." },
          { objective: "O3", q: "Who oversees data protection in Kenya?", options: ["The Office of the Data Protection Commissioner (ODPC)", "KCAA", "The drone seller", "The county assembly"], answer: 0, why: "ODPC oversees Kenya's Data Protection Act 2019." }
        ]
      }
    },
    {
      name: "Chapter 2: Designing a drone monitoring program",
      lessons: [
        {
          objectives: ["O4"],
          title: "Start with the problem and the users",
          minutes: 5,
          goal: "Write a clear program goal and list the users and what each one gets.",
          text: [
            "Many drone projects fail because they start with the drone, not the problem. Start with a problem that farmers and their partners care about and can act on: late detection of fall armyworm in a maize cooperative, uneven tea quality across estates, poor stand in cassava outgrowers, or flood damage in rice schemes.",
            "Write one goal sentence with a number and a date, for example: By the end of the long rains 2027, find fall armyworm hotspots on 200 member farms within one week of first damage, and get confirmed advice to each affected farmer within three days.",
            "List the users and what each gets: farmers (a map and plain advice on their phone), extension officers (where to visit first), the cooperative board (a season summary), buyers or processors (expected volumes, without personal data unless farmers agree), and the county or state agriculture office if it is a partner."
          ],
          steps: ["Name the problem in one sentence.", "Check that users care about it and can act on it.", "Write one goal with a number and a date.", "List each user group and what it receives, and in what form."],
          words: [["Program", "an organised service that runs over time for many people, not a one-off flight."], ["User", "a person or group who receives and acts on the program's results."]],
          slides: [
            { title: "Problem first, drone second", bullets: ["A problem people care about", "And can act on"] },
            { title: "A goal with a number and a date", bullets: ["Find FAW hotspots on 200 farms", "Within one week of first damage", "Advice within three days"] },
            { title: "Users and what they get", bullets: ["Farmers: map and plain advice on the phone", "Extension: where to visit first", "Board and partners: season summary"] }
          ],
          tryIt: "Write the problem, one goal sentence with a number and date, and a table of at least four user groups and what each receives for a program you could run.",
          youCanNow: "define a drone program's problem, goal and users clearly.",
          quickCheck: [
            { objective: "O4", q: "What makes a program goal clear?", options: ["One sentence with a number and a date", "A long list of everything drones can do", "The drone's brand name", "A photo of the farm"], answer: 0, why: "A clear goal is one sentence with a number and a date, so you know when it is met." },
            { objective: "O4", q: "A board member wants to buy drones first and find a use later. What do you advise?", options: ["Buy the most expensive drone", "Buy drones and decide next year", "Start from a problem farmers care about and can act on", "Ask a drone seller what to do"], answer: 2, why: "Many drone projects fail because they start with the drone, not the problem." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Planning people, equipment, schedule and money",
          minutes: 6,
          goal: "Plan the team, equipment, flight schedule and budget for one season.",
          text: [
            "People: licensed remote pilots and observers, someone to process and analyse data, extension staff to ground-truth and advise, and a coordinator. If your program flies for others or for pay, your organisation may need an operator certificate from the aviation authority, and each pilot needs the licence your rules require.",
            "Equipment: drones (and a spare), batteries for a full day, chargers (a solar or vehicle charging option where power is unreliable), a laptop that can process maps, storage, phones or tablets, safety gear and transport. Schedule: map the crop calendar and decide flights per farm per season; group farms by area so a team covers many in one day.",
            "Money: list one-off costs (drones, laptop, training, licences and certificates) and running costs (staff, transport, data bundles, repairs, insurance, fees). Then decide how it is paid: a fee per acre or hectare collected by mobile money, a cooperative levy on deliveries, a buyer or processor that benefits, a government or donor grant for a start-up period. Plan for after the grant ends."
          ],
          steps: ["List roles and the licences or certificates each needs.", "List equipment, including spares and charging.", "Draw the season schedule from the crop calendar; group farms by area.", "List one-off and running costs.", "Choose how the service is paid for, and how it continues after any grant."],
          words: [["One-off cost", "a cost paid once, such as buying a drone."], ["Running cost", "a cost that repeats, such as transport and staff."], ["Levy", "a small charge collected from members, for example per kilogram delivered."]],
          slides: [
            { title: "People", bullets: ["Licensed pilots and observers", "Data processor and analyst", "Extension staff and a coordinator", "Operator certificate if your rules need it"] },
            { title: "Equipment", bullets: ["Drones plus a spare, batteries for a day", "Solar or vehicle charging", "Laptop, storage, phones, transport"] },
            { title: "Schedule", bullets: ["Follow the crop calendar", "Flights per farm per season", "Group farms by area"] },
            { title: "Money", bullets: ["One-off and running costs", "Per-hectare fee via mobile money, levy, buyer, grant", "Plan for after the grant"] }
          ],
          sources: [KCAA_UAS, NCAA_P21, FAO_ITU_DRONES],
          tryIt: "For your program from Lesson 4, write a team list, an equipment list, a season schedule (which weeks you fly where) and a simple budget table of one-off and running costs with how each will be paid.",
          youCanNow: "plan the team, equipment, schedule and budget of a drone monitoring program.",
          quickCheck: [
            { objective: "O5", q: "Which is a one-off cost for a drone program?", options: ["Weekly transport", "Monthly data bundles", "Buying the drones and the laptop", "Staff wages"], answer: 2, why: "Equipment such as drones and a laptop is a one-off cost; transport, data and wages are running costs." },
            { objective: "O5", q: "A volunteer offers to fly for the program but has no remote pilot licence. What do you do?", options: ["Do not let them fly until they have the licence the rules require", "Let them fly on small farms only", "Let them fly if the coordinator watches", "Let them fly at weekends"], answer: 0, why: "Each pilot needs the licence the country's rules require." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Measuring results and reporting",
          minutes: 5,
          goal: "Choose measures of success and report results honestly to farmers and partners.",
          text: [
            "A program is worth continuing only if it makes a difference. Choose a few measures linked to your goal: how fast problems were found, how many farmers got advice in time, how many acted on it, yield or quality compared with farms or seasons without the program, and the cost per farm.",
            "Collect a baseline before you start (for example last season's yields or detection times), so you can compare. Ask farmers too: was the advice clear and useful, and would they pay for it? Their answers matter as much as the numbers.",
            "Report in a form each user can use: a short message to farmers, a one-page summary with a map for the board, a fuller report for partners. Be honest about what did not work. Then improve the design for next season."
          ],
          steps: ["Pick three to five measures linked to the goal.", "Record a baseline before the program starts.", "Collect the measures and farmer feedback during the season.", "Report in the right form for each user.", "List what to improve next season."],
          words: [["Baseline", "the situation before the program starts, used for comparison."], ["Measure of success", "a number that shows whether the program reached its goal."]],
          slides: [
            { title: "Measure what matters", bullets: ["Speed of detection", "Farmers advised in time, and who acted", "Yield or quality vs baseline", "Cost per farm"] },
            { title: "Baseline and feedback", bullets: ["Record the starting point", "Ask farmers: useful? would you pay?"] },
            { title: "Report and improve", bullets: ["Short messages to farmers", "One page and a map for the board", "Be honest; improve next season"] }
          ],
          tryIt: "Final task: write your two-page program design for a cooperative of 200 smallholders: problem and goal, users, data plan with GIS and consent, team and equipment, season schedule, budget and payment model, measures of success with baseline, and reporting.",
          youCanNow: "measure, report and improve a drone monitoring program, and present a full program design.",
          quickCheck: [
            { objective: "O6", q: "Which is an example of a baseline?", options: ["Next season's target", "Last season's yields or detection times, recorded before you start", "The drone's price", "The board's meeting date"], answer: 1, why: "A baseline is the situation before the program, so results can be compared." },
            { objective: "O6", q: "Farmers say the maps were accurate but the advice was hard to understand. What do you do?", options: ["Leave it out of the report", "Report only the accurate maps", "Stop the program", "Report it honestly and change how advice is given next season"], answer: 3, why: "Be honest about what did not work, then improve the design for next season." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Designing a drone monitoring program",
        questions: [
          { objective: "O4", q: "Why do many drone projects fail?", options: ["Drones are too small", "They start with the drone instead of a real problem", "Farmers dislike maps", "Batteries are too big"], answer: 1, why: "Programs work when they solve a problem users care about." },
          { objective: "O4", q: "Which is the best program goal?", options: ["Fly drones a lot", "Use technology", "Find FAW hotspots on 200 farms within one week of first damage by end of long rains 2027", "Be innovative"], answer: 2, why: "It has a clear number, timeframe and result." },
          { objective: "O5", q: "Your program will fly for paying farmers. What must you check?", options: ["Whether your organisation needs an operator certificate and pilots need licences", "Only the drone colour", "Only the weather", "Nothing; farmers agreed"], answer: 0, why: "Commercial flying usually needs an operator certificate and licensed pilots." },
          { objective: "O5", q: "Which is a running cost?", options: ["Buying the first drone", "Buying a laptop", "Initial training", "Transport to farms each week"], answer: 3, why: "Running costs repeat throughout the program." },
          { objective: "O6", q: "Why collect a baseline?", options: ["To fill a form", "To compare results with the situation before the program", "To delete old data", "To choose a drone"], answer: 1, why: "Without a starting point you cannot show change." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Drones for Agricultural Monitoring 5: Data Integration, GIS and Designing Programs",
    questions: [
      { objective: "O1", q: "Without a data system, a large drone program risks:", options: ["Lost, mixed or overwritten files", "Better maps", "Faster flights", "Cheaper drones"], answer: 0, why: "Thousands of files need a clear system." },
      { objective: "O1", q: "A flight register records:", options: ["Crop prices", "Date, farm, field, pilot, drone, files and status", "Only the weather", "Farmers' bank details"], answer: 1, why: "It tracks every flight and its data." },
      { objective: "O1", q: "Which is a good folder rule?", options: ["Random names", "Farmer's full name and phone number", "Program / Farm ID / Field ID / Date", "Everything in one folder"], answer: 2, why: "A consistent, ID-based structure keeps data tidy and private." },
      { objective: "O1", q: "In the 3-2-1 rule, the 1 means:", options: ["One drone", "One farmer", "One day", "One copy in another place"], answer: 3, why: "An off-site copy survives theft, fire or failure at the office." },
      { objective: "O2", q: "In GIS, base layers for a program usually include:", options: ["Field boundaries and farm points", "Music files", "Only photos of the team", "Invoices"], answer: 0, why: "Everything else is placed on top of fields and farms." },
      { objective: "O2", q: "Sentinel-2 images are about how many metres per pixel?", options: ["0.01", "10", "1,000", "100,000"], answer: 1, why: "Free Sentinel-2 images are about 10 m per pixel." },
      { objective: "O2", q: "Joining a spreadsheet to a field layer needs:", options: ["The same colour", "A drone", "A shared ID, such as Field ID", "A printer"], answer: 2, why: "The ID links each row to its field." },
      { objective: "O2", q: "Which question can a joined GIS project help answer?", options: ["What is the farmer's password?", "What colour is the drone?", "Who won the football match?", "Did fields that got drone advice yield more?"], answer: 3, why: "Linking records to fields allows such comparisons." },
      { objective: "O3", q: "Nigeria's data protection law is overseen by:", options: ["The Nigeria Data Protection Commission (NDPC)", "NCAA", "The drone maker", "A cooperative"], answer: 0, why: "The NDPC was set up under the Nigeria Data Protection Act 2023." },
      { objective: "O3", q: "Valid consent means the farmer:", options: ["Was not told anything", "Understands what you collect, why, who sees it, and can say no", "Signed without reading", "Gave their PIN"], answer: 1, why: "Consent must be informed and freely given." },
      { objective: "O3", q: "A buyer asks for a list of farmers' names and yields. You should:", options: ["Send it at once", "Post it publicly", "Share only with the farmers' permission", "Sell it"], answer: 2, why: "Personal data is not shared without permission." },
      { objective: "O3", q: "Collecting only what you need is called:", options: ["Data hoarding", "Backup", "Overlap", "Data minimisation"], answer: 3, why: "Less data means less risk and is a data protection principle." },
      { objective: "O4", q: "A program should start from:", options: ["A problem users care about and can act on", "The newest drone", "A logo", "A press release"], answer: 0, why: "Problem-first programs deliver value." },
      { objective: "O4", q: "What do farmers most need from the program?", options: ["Raw photo files", "A map and plain advice on their phone", "GIS software", "The pilot's licence"], answer: 1, why: "Simple, actionable information helps farmers act." },
      { objective: "O5", q: "Where power is unreliable, plan for:", options: ["No batteries", "Flying only at night", "Solar or vehicle charging", "One flight a year"], answer: 2, why: "Charging options keep the team flying for a full day." },
      { objective: "O5", q: "Grouping farms by area in the schedule helps to:", options: ["Use more fuel", "Make maps blurry", "Avoid licences", "Cover many farms in one day"], answer: 3, why: "Less travel means more farms per day and lower cost." },
      { objective: "O5", q: "A way to pay for a cooperative drone service is:", options: ["A small per-hectare fee paid by mobile money", "Free forever with no plan", "Selling farmers' data", "Skipping repairs"], answer: 0, why: "Fees, levies, buyers or grants can fund the service honestly." },
      { objective: "O5", q: "Why plan for after a grant ends?", options: ["Grants never end", "So the service continues when the grant stops", "To spend faster", "It is not needed"], answer: 1, why: "Programs that rely only on grants often stop." },
      { objective: "O6", q: "Which is a measure of success?", options: ["Number of drone photos taken", "The drone's colour", "Farmers advised within three days of detection", "Size of the office"], answer: 2, why: "It measures the result users care about." },
      { objective: "O6", q: "When reporting, you should:", options: ["Hide what did not work", "Send everyone the same 50-page report", "Report only to the donor", "Be honest and use a form each user can use"], answer: 3, why: "Honest, user-fitted reports build trust and improvement." }
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
      13,
      16,
      18
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part of the design and check it again.",
    criteria: [
      {
        name: "Problem, goal and users",
        objective: "O4",
        notYet: "Starts with the drone, or the goal has no number or date.",
        meets: "A real problem, a goal with a number and a date, and each user with what they get.",
        exceeds: "Shows the users agreed the problem, for example from a farmer meeting."
      },
      {
        name: "Data plan",
        objective: "O1",
        notYet: "No storage, naming or backup plan.",
        meets: "Folder structure, Farm IDs, a flight register and 3-2-1 backups.",
        exceeds: "Says how long raw photos are kept and who checks the backups."
      },
      {
        name: "GIS and satellite use",
        objective: "O2",
        notYet: "No GIS layers or satellite use.",
        meets: "GIS layers listed, records linked by Field ID, and satellites used to choose where to fly.",
        exceeds: "Names a question the joined data will answer, such as yield with and without advice."
      },
      {
        name: "Consent and data protection",
        objective: "O3",
        notYet: "No consent or data protection steps.",
        meets: "Consent in the farmer's language, data minimisation, safe storage and no sharing without permission, under the right law.",
        exceeds: "Checks whether the organisation must register with the data protection authority."
      },
      {
        name: "Team, schedule and budget",
        objective: "O5",
        notYet: "Missing licences, schedule or how it is paid for.",
        meets: "Licensed team, equipment, a season flight schedule, one-off and running costs, and how the service is paid for.",
        exceeds: "Shows a plan for after any grant ends."
      },
      {
        name: "Measures and reporting",
        objective: "O6",
        notYet: "No measures or baseline.",
        meets: "A few measures linked to the goal, a baseline, and a report form for each user.",
        exceeds: "Includes farmers' views on whether the advice was useful and worth paying for."
      }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and score Meets or Exceeds on every rubric row of the program design",
      "Learners who present their program design to a cooperative board, county or state office, donor or investor within 90 days (follow-up survey)",
      "Programs designed in the course that start a pilot season with written farmer consent",
      "Learners who go on to Course 6 of the drone track"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A laptop with free QGIS and a spreadsheet",
      "Example drone maps, field boundaries and farm records, or the learner's own",
      "Local cost quotes for drones, transport, data and insurance, if available",
      "About 60 minutes in total, in short sessions, plus time to write the two-page design"
    ],
    facilitatorNotes: [
      "Take the pre-test together, then work through one example cooperative as a group before learners write their own design.",
      "Use Farm IDs, not real farmers' names or numbers, in all class examples.",
      "Ask learners to check the data protection authority's site in their own country for registration rules.",
      "Encourage learners to test their goal and budget with a real cooperative or partner before finishing.",
      "Score the program design with the rubric and give feedback on one Not yet row at a time."
    ]
  }
};
