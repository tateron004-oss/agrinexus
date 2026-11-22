"use strict";

// Koach Learn course: Agriculture (Africa) -> "Farm Machinery and Mechanization Services" (owner's request for farmer courses, 29 October 2026).
// For smallholder and growing farmers, farm workers, young agripreneurs and extension workers in Nigeria, Ghana, Kenya, Senegal, Burkina Faso and across
// Africa: which tasks pay to mechanize, hiring versus owning with a worked cost comparison, tractor-hire and app-based services (Hello Tractor), small
// machines, safety, maintenance logs, and starting a mechanization service business for neighbours. Pooling machinery as a group is covered in
// agri-community-mobilization; this course is about the decision and the service business.
// Facts are sourced to FAO (sustainable mechanization, hire services), FAO and the African Union (SAMA framework), the ILO (tractor safety), Hello Tractor,
// Kenya's PCPB and Nigeria's NAFDAC (sprayers). Money figures are examples only.

const FAO_HIRE = { name: "FAO: Hire services as a business (sustainable agricultural mechanization)", url: "https://www.fao.org/sustainable-agricultural-mechanization/hire-services-as-a-business/hire-services/en/" };
const FAO_HIRE_MANUAL = { name: "FAO: Hire services as a business enterprise (training manual)", url: "https://www.fao.org/documents/card/en/c/I9207EN" };
const FAO_SAMA = { name: "FAO and African Union Commission: Sustainable Agricultural Mechanization: A Framework for Africa (2018)", url: "https://www.fao.org/documents/card/en/c/ca1136en" };
const FAO_MECH = { name: "FAO: Sustainable agricultural mechanization (from hand tools to motorized equipment)", url: "https://www.fao.org/sustainable-agricultural-mechanization/en" };
const HELLO = { name: "Hello Tractor: tractor booking by app, web or booking agent; fleet tracking; pay-as-you-go ownership", url: "https://hellotractor.com/" };
const ILO_TRACTORS = { name: "ILO: Safe construction and operation of tractors (code of practice)", url: "https://www.ilo.org/resource/safe-construction-and-operation-tractors" };
const PCPB = { name: "Pest Control Products Board (Kenya): registered products", url: "https://www.pcpb.go.ke" };
const NAFDAC = { name: "National Agency for Food and Drug Administration and Control (NAFDAC, Nigeria)", url: "https://www.nafdac.gov.ng" };

module.exports = {
  id: "agri-mechanization",
  category: "Agriculture (Africa)",
  name: "Farm Machinery and Mechanization Services",
  skills: "Choosing which tasks to mechanize, Comparing the cost of hiring and owning, Booking and checking tractor-hire services, Choosing small machines, Working safely and keeping maintenance logs, Planning a mechanization service business",
  outcome: "decide, with numbers, whether to hire or buy a machine for a farm task: pick the tasks that pay to mechanize, compare the cost of hiring and owning, book and check a hire service, choose the right small machine, run it safely with a maintenance log, and plan a hire service for your neighbours if owning only pays that way.",
  about: [
    "This course is for smallholder and growing farmers, farm workers, young agripreneurs and extension workers in Nigeria, Ghana, Kenya, Senegal, Burkina Faso and across Africa. Most farm work in Africa is still done by hand. Machines can plant on time, cut hard labour and reduce losses, but a machine that sits idle most of the year can sink a farm into debt.",
    "Chapter 1 is about the decision: which tasks pay to mechanize, hiring versus owning with a worked cost comparison, and booking tractor-hire services, including app-based ones such as Hello Tractor. Chapter 2 is about running machines: small machines such as two-wheel tractors, shellers, threshers and motorized sprayers; safety and maintenance logs; and starting a mechanization service business for your neighbours. Pooling machinery as a group is covered in \"Community Mobilization: Pooling Machinery and Bargaining for Inputs\".",
    "Money figures in this course are examples only; use real quotes from dealers, hire services and lenders. This course explains how loans and lease deals work but gives no investment advice: read every contract fully and ask a trusted adviser. Each lesson takes about five minutes and ends with a task for your own farm. A knowledge check closes each chapter and a 20-question quiz closes the course."
  ],
  finalTask: "Make a hire-versus-buy decision sheet for one machine and one task on your farm (or an example such as a tractor for ploughing 10 hectares of maize in Kaduna, or a maize sheller for a farmer group near Tamale): the task and why it pays to mechanize; the yearly cost of owning (fixed and per-hectare costs); the cost of hiring; the break-even area; your decision; and the safety rules and maintenance log you will use. If you decide to buy, add a one-page plan to hire the machine out to neighbours: services, customers and hectares, price, costs, break-even, bookings and payment, and the main risks.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Smallholder and growing farmers, farm workers, farmer group leaders, young agripreneurs and extension workers in Nigeria, Ghana, Kenya, francophone West Africa and elsewhere in Africa who hire, or are thinking of buying, a tractor or a small machine.",
    startingPoint: "Do most work by hand or with oxen, and sometimes hire a tractor through a broker. Few have compared the full cost of owning with hiring, checked the work they paid for, or kept a maintenance log. Some young people see machine hire as a business but have not costed it.",
    gap: "Farmers buy machines that are under-used and expensive to run, or wait for late tractors and plant late. They need to choose the tasks that pay to mechanize, compare hiring and owning with real numbers, book and check hire services, run machines safely, and, if they buy, earn from neighbours' work.",
    constraints: [
      "Reading level: plain words and short sentences; the course is also available in Spanish, French and Arabic",
      "Devices: a basic phone or smartphone and a calculator; booking apps need a smartphone or a booking agent",
      "Time: 4 to 6 minute lessons that fit around farm work",
      "Money figures are examples; prices, interest rates and hire rates differ by place and change",
      "Finance: explain loans and leases and their risks; no investment advice",
      "Safety: machines can kill; no child labour near machines; sprayers only with registered pesticides as the label says"
    ],
    prerequisites: "None. \"Agribusiness and Farm Management\" helps with costing."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Given the tasks on your farm", action: "identify which tasks pay to mechanize", standard: "giving a reason for each: timeliness, labour, losses or volume" },
    { id: "O2", condition: "Given the price, running costs and hire rate of a machine", action: "calculate the yearly cost of owning, the cost of hiring and the break-even area", standard: "with the sums correct and a clear hire or buy decision" },
    { id: "O3", condition: "When you hire a tractor or machine service", action: "agree the price, area, date and quality in advance and check the work before paying", standard: "measuring the field and getting a receipt" },
    { id: "O4", condition: "Given a farm task and your local market", action: "choose a small machine that fits the task, the volume of work and the spare parts and mechanics nearby", standard: "listing at least four checks before buying" },
    { id: "O5", condition: "Before and after each use of a machine", action: "carry out the safety checks and record the work and maintenance in a logbook", standard: "with no safety rule skipped and every entry dated" },
    { id: "O6", condition: "Given a machine and the farms around you", action: "write a one-page plan for a mechanization hire service", standard: "with services, customers, price, costs, break-even and risks" }
  ],
  chapters: [
    {
      name: "Chapter 1: Hire or buy?",
      lessons: [
        {
          title: "Which tasks pay to mechanize",
          objectives: ["O1"],
          minutes: 5,
          goal: "Identify the tasks on your farm that pay to mechanize.",
          text: [
            "Mechanization means using tools and machines, from improved hand tools and animal traction to tractors and motorized machines, to do farm work. FAO stresses choosing what fits the farm, the people and the place. A machine pays when it earns or saves more than it costs.",
            "Tasks that often pay: land preparation, when ploughing or ripping on time after the first rains lets you plant on time; threshing and shelling, where a machine does in hours what takes many people days and loses less grain on the ground; transport of harvest and inputs; pumping water; and processing such as grating cassava or milling. Tasks that pay less: small plots, work that is cheap and quick by hand, or tasks you do only once a year for a few hours.",
            "Ask four questions about each task. Timeliness: does doing it late cut the yield? Labour: is labour short or costly at that time? Losses: does doing it by hand lose crop? Volume: is there enough work to keep a machine busy? Then compare the cost by hand and by machine. Example (figures are only an example): ploughing 1 hectare by hand takes 25 person-days at GHS 50 = GHS 1,250, while hiring a tractor costs GHS 600 per hectare."
          ],
          steps: ["List every big task on your farm through the year.", "For each, ask: timeliness, labour, losses, volume.", "Work out the cost by hand: person-days x daily wage.", "Find the cost by machine: hire rate x hectares.", "Mark the tasks where the machine costs less or earns more."],
          words: [["Mechanization", "using tools and machines, from better hand tools to tractors, to do farm work."], ["Timeliness", "doing a task at the right time, such as planting soon after the rains start."], ["Person-day", "the work one person does in one day."]],
          slides: [
            { title: "When a machine pays", bullets: ["It earns or saves more than it costs", "From better hand tools to tractors", "Fit the farm, the people and the place"] },
            { title: "Tasks that often pay", bullets: ["Land preparation on time", "Threshing and shelling: fast, fewer losses", "Transport, pumping, processing"] },
            { title: "Four questions", bullets: ["Timeliness: does late cut yield?", "Labour: short or costly?", "Losses? Volume of work?"] },
            { title: "Compare the cost", bullets: ["By hand: person-days x wage", "Example: 25 days x GHS 50 = GHS 1,250 per ha", "Machine hire example: GHS 600 per ha"] }
          ],
          sources: [FAO_MECH, FAO_SAMA],
          tryIt: "List five big tasks on your farm. For each, answer the four questions (timeliness, labour, losses, volume) and compare the cost by hand with the cost by machine. Circle the two tasks that pay most to mechanize.",
          youCanNow: "pick the tasks on your farm that pay to mechanize and say why.",
          quickCheck: [
            { objective: "O1", q: "Why does ploughing on time often pay?", options: ["Tractors are cheaper in the dry season", "Planting on time after the rains can raise yield", "Late ploughing kills weeds better", "It makes the field look neat"], answer: 1, why: "Timeliness matters: late planting often cuts yield." },
            { objective: "O1", q: "Shelling 2 tonnes of maize by hand takes 20 person-days at NGN 4,000. A sheller service costs NGN 50,000. Which is cheaper?", options: ["The sheller service", "Hand shelling", "They cost the same", "You cannot tell"], answer: 0, why: "Hand shelling costs 20 x 4,000 = NGN 80,000, more than NGN 50,000." }
          ]
        },
        {
          title: "Hiring versus owning: a worked cost comparison",
          objectives: ["O2"],
          minutes: 6,
          goal: "Calculate the cost of owning and hiring and find the break-even area.",
          text: [
            "Owning a machine has fixed costs you pay every year even if it never moves: the loss in value over its life (depreciation), the interest on a loan or what the money could have earned elsewhere, insurance, and a shed. It also has running costs per hectare: fuel, oil, repairs and the operator. Hiring has one cost: the hire rate per hectare.",
            "Worked example for a tractor and plough in Nigeria (all figures are examples only; use real quotes and your lender's real rate): price NGN 30,000,000, worth NGN 6,000,000 after 10 years, so depreciation = (30,000,000 - 6,000,000) / 10 = NGN 2,400,000 a year. Loan interest (example) NGN 1,800,000 a year, insurance and shed NGN 600,000. Fixed costs = NGN 4,800,000 a year. Running costs = NGN 25,000 per hectare. Hire rate = NGN 60,000 per hectare.",
            "Each hectare you plough with your own tractor saves 60,000 - 25,000 = NGN 35,000 compared with hiring. Break-even area = fixed costs / saving per hectare = 4,800,000 / 35,000 = about 137 hectares a year. A farmer with 10 hectares should hire; owning only pays if the tractor also works on neighbours' farms. Also weigh what numbers miss: owning means you plough on time, while hiring means no loan and no repairs. Leasing and pay-as-you-go deals are other options; read every contract fully and ask a trusted adviser."
          ],
          steps: ["Depreciation per year = (price - value at the end) / years of use.", "Add interest, insurance and shed: these are fixed costs per year.", "Add fuel, oil, repairs and operator per hectare: running costs.", "Saving per hectare = hire rate - running costs.", "Break-even area = fixed costs / saving per hectare.", "Compare with your hectares and decide; note timeliness and risk."],
          words: [["Depreciation", "the value a machine loses each year as it ages."], ["Fixed costs", "costs you pay each year whether or not the machine works."], ["Break-even area", "the hectares a year at which owning costs the same as hiring."]],
          slides: [
            { title: "Owning costs", bullets: ["Fixed: depreciation, interest, insurance, shed", "Running per hectare: fuel, oil, repairs, operator", "Hiring: one hire rate per hectare"] },
            { title: "Example: tractor in Nigeria", bullets: ["Depreciation (30M - 6M) / 10 = NGN 2.4M a year", "Fixed costs in all NGN 4.8M a year", "Running NGN 25,000 per ha; hire NGN 60,000 per ha"] },
            { title: "Break-even area", bullets: ["Saving per ha: 60,000 - 25,000 = 35,000", "4,800,000 / 35,000 = about 137 ha a year", "10 ha farm: hire. Examples only"] },
            { title: "Beyond the numbers", bullets: ["Owning: you plough on time", "Hiring: no loan, no repairs", "Leases and loans: read fully, ask an adviser"] }
          ],
          sources: [FAO_HIRE, FAO_SAMA],
          tryIt: "Get real quotes for one machine you are thinking of (price, expected life and value at the end, running costs and the local hire rate). Work out its fixed costs per year, the saving per hectare and the break-even area, and write whether you should hire or buy.",
          youCanNow: "compare the cost of owning and hiring a machine and find the break-even area.",
          quickCheck: [
            { objective: "O2", q: "A sheller costs GHS 20,000 and is worth GHS 4,000 after 8 years. What is its depreciation per year?", options: ["GHS 1,500", "GHS 2,500", "GHS 2,000", "GHS 3,000"], answer: 2, why: "(20,000 - 4,000) / 8 = 2,000 a year." },
            { objective: "O2", q: "Fixed costs are KES 300,000 a year and owning saves KES 6,000 per hectare. What is the break-even area?", options: ["30 hectares", "40 hectares", "60 hectares", "50 hectares"], answer: 3, why: "300,000 / 6,000 = 50 hectares a year." }
          ]
        },
        {
          title: "Tractor-hire and app-based services",
          objectives: ["O3"],
          minutes: 5,
          goal: "Book a hire service and check the work before you pay.",
          text: [
            "You can hire machines from a neighbour or tractor owner, a cooperative or farmer group, a government or private hire centre, or an app-based service. Hello Tractor is one example: farmers book tractor services through its mobile app or web app or through booking agents (extension and field agents who book for farmers), and tractor owners use it to track their tractors and fuel by GPS. It also offers pay-as-you-go deals to help people own tractors. The company says it works in more than 20 African countries, including Nigeria; check what is available in your area.",
            "Tractors go first where there is a lot of work in one place. Booking together with neighbours, so the tractor can do many farms in one trip, makes it more likely to come on time.",
            "Before work starts, agree in writing or by message: the price per acre or hectare, how the area will be measured, the date, the depth and type of work, and who pays for fuel. Measure the field yourself, with a tape or a phone GPS app. After the work, check it: right depth, no strips missed, the whole field done. Pay only after checking, through the official app, mobile money or with a receipt. Never pay a stranger in advance outside the official app, and never share PINs or codes."
          ],
          steps: ["Choose a service: neighbour, group, hire centre or app (for example Hello Tractor).", "Book early, together with neighbours if you can.", "Agree price, area measurement, date, depth and fuel in advance.", "Measure the field yourself.", "Check the work: depth, no missed strips, whole field.", "Pay after checking; get a receipt or app record; never share PINs."],
          words: [["Booking agent", "a person who books machine services for farmers, often using an app."], ["Pay-as-you-go (PAYG)", "paying for something in small amounts over time while you use it, until you own it."], ["Hire rate", "the price the service charges, often per acre or per hectare."]],
          slides: [
            { title: "Where to hire", bullets: ["Neighbours, groups, hire centres", "Apps such as Hello Tractor: app, web or booking agent", "Check what works in your area"] },
            { title: "Get the tractor on time", bullets: ["Book early", "Book together with neighbours", "Many farms in one trip"] },
            { title: "Agree before work", bullets: ["Price per acre or hectare; how area is measured", "Date, depth, type of work, fuel", "In writing or by message"] },
            { title: "Check, then pay", bullets: ["Measure the field yourself", "Right depth; no strips missed", "Pay via app, mobile money or receipt; no PINs"] }
          ],
          sources: [HELLO, FAO_HIRE],
          tryIt: "Find two hire services near you (a tractor owner, a group, a hire centre or an app). Ask each for the price per hectare, how they measure the area, when they can come, and how you pay. Write a short booking message that sets out all the terms.",
          youCanNow: "book a tractor or machine service with clear terms and check the work before you pay.",
          quickCheck: [
            { objective: "O3", q: "When should you pay for tractor ploughing?", options: ["After checking the work and the area, with a receipt or app record", "Before the tractor arrives, in cash to whoever calls", "Half to a stranger by text", "Never"], answer: 0, why: "Checking first and getting a record protects you from poor work and scams." },
            { objective: "O3", q: "How can you make a hired tractor more likely to come on time?", options: ["Book at the last minute", "Book alone for a tiny plot", "Book early, together with neighbours", "Pay a stranger extra in advance"], answer: 2, why: "Many farms in one place make the trip worth it for the tractor owner." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Hire or buy?",
        questions: [
          { objective: "O1", q: "Which task usually pays LEAST to mechanize?", options: ["Ploughing 20 hectares on time", "Threshing a large rice harvest", "A one-hour job once a year on a tiny plot", "Transporting harvest to market"], answer: 2, why: "A machine for tiny, rare jobs costs more than it saves." },
          { objective: "O1", q: "Which question checks timeliness?", options: ["Is the machine red?", "Does doing the task late cut the yield?", "Is the dealer friendly?", "How old is the farmer?"], answer: 1, why: "Timeliness is about whether doing the work late costs yield." },
          { objective: "O2", q: "Which is a fixed cost of owning a tractor?", options: ["Insurance", "Fuel per hectare", "The operator's pay per hectare", "Oil per hour"], answer: 0, why: "Insurance is paid every year whether or not the tractor works." },
          { objective: "O2", q: "Break-even area is 137 hectares a year and you farm 10. What should you do?", options: ["Buy at once", "Buy two tractors", "Stop farming", "Hire, or buy only if you can also serve neighbours"], answer: 3, why: "Well below break-even, owning costs more than hiring unless the machine works elsewhere too." },
          { objective: "O3", q: "Before a hired tractor starts, which should you agree?", options: ["Only the operator's name", "Price per hectare, how area is measured, date, depth and fuel", "Nothing; trust them", "Your mobile money PIN"], answer: 1, why: "Clear terms prevent arguments and bad work; PINs are never shared." }
        ]
      }
    },
    {
      name: "Chapter 2: Running machines and a service business",
      lessons: [
        {
          title: "Small machines for smallholders",
          objectives: ["O4"],
          minutes: 5,
          goal: "Choose a small machine that fits your task and your area.",
          text: [
            "Not every farm needs a four-wheel tractor. A two-wheel tractor (power tiller) can plough, rotavate, pump water and pull a trailer on small plots. A motorized maize sheller or a multi-crop thresher (for rice, sorghum, millet, beans or soybeans) saves days of labour and loses less grain. A motorized knapsack sprayer or mistblower covers more ground than a hand sprayer. Other examples are cassava graters, rice reapers and chaff cutters for fodder.",
            "Before buying, check: Is there enough work, on your farm and your neighbours', to keep it busy? Can a nearby mechanic repair it, and are spare parts sold near you? Does the dealer train you and give a warranty? Can it be moved between farms? Can the people who will use it, including women and young people, operate it safely? FAO has published a catalogue of machines suited to women farmers.",
            "Sprayers: use only pesticides registered in your country, as the label says, with protective equipment. In Kenya check the Pest Control Products Board list; in Nigeria, NAFDAC. A motorized sprayer puts out more chemical faster, so set it up (calibrate it) as its manual says before each season."
          ],
          steps: ["Name the task and how many hectares or tonnes a year.", "Choose the machine type for that task.", "Check spare parts and a mechanic near you.", "Ask the dealer about training and warranty.", "Check it can be moved and safely used by your operators.", "For sprayers: registered pesticides only, label and protective equipment."],
          words: [["Two-wheel tractor", "a small walk-behind tractor, also called a power tiller, that pulls tools and powers pumps."], ["Thresher", "a machine that separates grain from the plant stalks."], ["Calibrate", "set a sprayer so it puts out the right amount, as its manual and the pesticide label say."]],
          slides: [
            { title: "Small machines", bullets: ["Two-wheel tractor: plough, pump, trailer", "Maize sheller; multi-crop thresher", "Motorized sprayer; cassava grater; chaff cutter"] },
            { title: "Before buying", bullets: ["Enough work to keep it busy?", "Spare parts and a mechanic nearby?", "Training, warranty, easy to move?"] },
            { title: "Who will use it?", bullets: ["Safe for your operators", "Women and young people too", "FAO catalogue of machines for women farmers"] },
            { title: "Sprayers", bullets: ["Registered pesticides only, as the label says", "Kenya: PCPB list. Nigeria: NAFDAC", "Protective equipment; calibrate first"] }
          ],
          sources: [FAO_MECH, PCPB, NAFDAC],
          tryIt: "Pick one task from Lesson 1. Choose a small machine for it and visit or phone a dealer. Ask the price, where spare parts and repairs are, what training and warranty they give, and how much work it can do in a day. Write the answers down.",
          youCanNow: "choose a small machine that fits your task, your area and the people who will use it.",
          quickCheck: [
            { objective: "O4", q: "Which machine fits ploughing and pumping on small plots?", options: ["A combine harvester", "A two-wheel tractor (power tiller)", "A maize sheller", "A chaff cutter"], answer: 1, why: "A power tiller ploughs small plots and can drive a pump." },
            { objective: "O4", q: "The cheapest sheller has no spare parts or mechanic within 200 km. What is the risk?", options: ["None; machines never break", "It will shell too fast", "When it breaks, it may stand idle for weeks", "It will use too little fuel"], answer: 2, why: "A machine with no nearby parts or repairs can be idle when you need it most." }
          ]
        },
        {
          title: "Safety and maintenance logs",
          objectives: ["O5"],
          minutes: 6,
          goal: "Run a machine safely and keep its maintenance log.",
          text: [
            "Machines can kill or maim in seconds. Tractor overturns, people falling under wheels, and clothes caught in spinning shafts are common causes of death on farms. The ILO publishes a code of practice on safe tractor use. The main rules: only trained adults operate machines; no children near working machines; no passengers on the tractor or implements; use the roll-over protection and seat belt where fitted; go slowly and straight across slopes and away from ditches; keep all guards in place, especially on the power take-off (PTO) shaft; and wear close-fitting clothes with hair tied back.",
            "Threshers and shellers: never put your hand into the feed opening or a blockage. Stop the engine and wait for all parts to stop before clearing it. Protect ears and lungs from noise and dust. Refuel only with the engine off and cool, with no smoking. Keep a first-aid kit and a phone nearby.",
            "A machine that is looked after lasts longer and breaks down less in the busy season. Do daily checks before work: engine oil, fuel, water or coolant, air filter, tyres, loose nuts and bolts, and grease points. Service it by the hours on its meter as the manual says. Keep a logbook with: date, hours, job and hectares or tonnes, fuel, repairs and parts, cost, and the operator's name. The log shows the real running cost per hectare."
          ],
          steps: ["Trained adult operator only; no children, no passengers.", "Guards on, roll-over protection and seat belt used where fitted.", "Go slowly on slopes; keep away from ditches.", "Stop the engine and wait before clearing any blockage.", "Daily checks: oil, fuel, coolant, air filter, tyres, bolts, grease.", "Write each day's work, fuel, repairs and costs in the logbook."],
          words: [["PTO (power take-off) shaft", "a spinning shaft on a tractor that drives tools; it can catch clothes and kill."], ["Roll-over protection", "a frame over the driver's seat that protects them if the tractor tips over."], ["Logbook", "a book where you record every job, fuel, repair and cost for a machine."]],
          slides: [
            { title: "People first", bullets: ["Trained adults only; no children near", "No passengers", "Roll-over protection and seat belt"] },
            { title: "Danger points", bullets: ["Slopes and ditches: go slow", "PTO shaft: guards on; tight clothes, hair tied", "Blockages: stop engine, wait, then clear"] },
            { title: "Daily checks", bullets: ["Oil, fuel, coolant, air filter", "Tyres, nuts and bolts, grease", "Service by the hours, as the manual says"] },
            { title: "The logbook", bullets: ["Date, hours, job, hectares or tonnes", "Fuel, repairs, parts, cost, operator", "Shows the real cost per hectare"] }
          ],
          sources: [ILO_TRACTORS],
          tryIt: "Make a one-page safety checklist for one machine you use or hire, and a logbook page with columns for date, hours, job, hectares or tonnes, fuel, repairs and parts, cost, and operator. Fill in one line from a real or example job.",
          youCanNow: "run a machine with the key safety rules and keep a maintenance log that shows its true running cost.",
          quickCheck: [
            { objective: "O5", q: "A thresher is blocked. What do you do?", options: ["Push the crop in with your hand while it runs", "Ask a child to pull it out", "Kick the machine", "Stop the engine, wait for all parts to stop, then clear it"], answer: 3, why: "Moving parts can take a hand in a second; only clear a stopped machine." },
            { objective: "O5", q: "Which belongs in a machine logbook?", options: ["Date, hours, job, fuel, repairs and cost", "The operator's mobile money PIN", "Only the colour of the machine", "Nothing; memory is enough"], answer: 0, why: "These records show the real running cost and when service is due." }
          ]
        },
        {
          title: "Starting a mechanization service business",
          objectives: ["O6"],
          minutes: 6,
          goal: "Write a one-page plan for a machine hire service.",
          text: [
            "Many hire services are run by farmers who bought a machine for their own farm and then offer it to neighbours, for cash or in exchange for other work or crops. FAO and the African Union's framework for mechanization in Africa see young people running hire services as a key way to bring machines to smallholders. FAO also publishes a training manual on hire services as a business.",
            "A one-page plan answers: What services, in which seasons (ploughing, shelling, threshing, transport, pumping)? Who are the customers, and how many hectares or tonnes in total? What price, and how does it compare with other services? What are the costs (fixed per year and running per hectare, from Lessons 2 and 5)? What is the break-even? How will you take bookings and payment (deposits, mobile money, receipts)? Who is the operator, and are they trained? What are the risks: breakdowns in the peak season, unpaid jobs, accidents, theft? How will you reduce them (maintenance, written terms, insurance, a GPS tracker)?",
            "Example for a power tiller service in Senegal or Burkina Faso (all figures are examples only): fixed costs XOF 600,000 a year, running costs XOF 15,000 per hectare, price XOF 35,000 per hectare. Break-even = 600,000 / (35,000 - 15,000) = 30 hectares. With 50 hectares booked, profit = 50 x 20,000 - 600,000 = XOF 400,000. Group nearby farms together to cut travel, and add off-season work such as shelling and transport. Finance options include loans, leases and pay-as-you-go deals: read every contract fully and ask a trusted adviser."
          ],
          steps: ["List your services and seasons.", "List customers and total hectares or tonnes.", "Set a price that covers cost per hectare plus a margin; compare with others.", "Work out break-even: fixed costs / (price - running cost per hectare).", "Plan bookings, operator, payment and records.", "List the risks and how you will reduce each one."],
          words: [["Hire service", "a business that does farm work with its machines for other farmers, for a fee."], ["Margin", "the part of the price left after costs."], ["Off-season work", "jobs a machine can do outside the main season, such as transport or shelling."]],
          slides: [
            { title: "Hire services", bullets: ["Farmers serve neighbours for a fee", "Key way to bring machines to smallholders", "FAO training manual: hire services as a business"] },
            { title: "One-page plan", bullets: ["Services, seasons, customers, hectares", "Price, costs, break-even", "Bookings, operator, payment, risks"] },
            { title: "Example: power tiller (XOF)", bullets: ["Fixed 600,000; running 15,000 per ha; price 35,000", "Break-even 600,000 / 20,000 = 30 ha", "50 ha: profit XOF 400,000. Examples only"] },
            { title: "Make it work", bullets: ["Group nearby farms; cut travel", "Add off-season jobs", "Loans and leases: read fully, ask an adviser"] }
          ],
          sources: [FAO_HIRE, FAO_HIRE_MANUAL, FAO_SAMA, HELLO],
          tryIt: "Final task: make your hire-versus-buy decision sheet for one machine and task. If owning only pays with neighbours' work, add a one-page hire service plan: services, customers and hectares, price, costs, break-even, bookings and payment, and the main risks.",
          youCanNow: "plan a machine hire service with prices, costs, break-even and risks.",
          quickCheck: [
            { objective: "O6", q: "Fixed costs are XOF 400,000 a year, running costs XOF 10,000 per hectare and the price XOF 30,000 per hectare. What is the break-even area?", options: ["10 hectares", "13 hectares", "40 hectares", "20 hectares"], answer: 3, why: "400,000 / (30,000 - 10,000) = 20 hectares." },
            { objective: "O6", q: "Which step lowers the travel cost of a tractor hire service?", options: ["Grouping bookings from nearby farms", "Taking jobs far apart on the same day", "Refusing small farms", "Never planning bookings"], answer: 0, why: "Doing nearby farms together saves fuel and time on the road." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Running machines and a service business",
        questions: [
          { objective: "O4", q: "Before buying a small machine, which check matters most for keeping it working?", options: ["Its colour", "Spare parts and a mechanic near you", "What the neighbour paid", "Its brand sticker"], answer: 1, why: "Without nearby parts and repairs, a broken machine stands idle." },
          { objective: "O4", q: "You will use a motorized sprayer. Which is right?", options: ["Any pesticide from the market", "Mix two pesticides to save time", "Registered pesticides only, as the label says, with protective equipment", "Spray without calibrating"], answer: 2, why: "Only registered products, used as the label says, are safe and legal." },
          { objective: "O5", q: "Which is a tractor safety rule?", options: ["No passengers on the tractor or implements", "Children may ride if careful", "Remove the PTO guard to work faster", "Drive fast across slopes"], answer: 0, why: "Passengers fall under wheels; this is a common cause of farm deaths." },
          { objective: "O5", q: "Why keep a machine logbook?", options: ["It is only for the bank", "To show the machine's colour", "To make the operator work slower", "To see the real cost per hectare and when service is due"], answer: 3, why: "Recording work, fuel and repairs shows true costs and service times." },
          { objective: "O6", q: "Which belongs in a hire service plan?", options: ["Only the machine's price", "Services, customers, price, costs, break-even and risks", "The owner's PIN", "Only a logo"], answer: 1, why: "A plan shows whether the service earns more than it costs and how risks are handled." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Farm Machinery and Mechanization Services",
    questions: [
      { objective: "O1", q: "Mechanization includes:", options: ["Only big tractors", "Only imported machines", "Tools and machines from better hand tools to tractors", "Only drones"], answer: 2, why: "FAO counts every level, from hand tools to motorized equipment." },
      { objective: "O1", q: "Which is a strong reason to mechanize threshing?", options: ["It does in hours what takes many people days, with less grain lost", "Machines look modern", "Threshing by hand is illegal", "Neighbours have machines"], answer: 0, why: "Time saved and lower losses make threshing a good task to mechanize." },
      { objective: "O1", q: "Hand weeding 1 hectare costs KES 6,000 and a machine service costs KES 9,000. On cost alone:", options: ["The machine is cheaper", "They are equal", "You cannot compare them", "Hand weeding is cheaper"], answer: 3, why: "KES 6,000 is less than KES 9,000, so the machine does not pay on cost alone." },
      { objective: "O2", q: "Depreciation is:", options: ["The fuel a machine uses", "The value a machine loses each year", "The hire rate", "The operator's wage"], answer: 1, why: "Depreciation spreads the loss in value over the machine's life." },
      { objective: "O2", q: "Which is a running cost per hectare?", options: ["Insurance", "The shed", "Fuel", "Loan interest per year"], answer: 2, why: "Fuel rises with every hectare worked; the others are fixed." },
      { objective: "O2", q: "Fixed costs NGN 2,000,000 a year; hire rate NGN 50,000 per ha; running cost NGN 25,000 per ha. Break-even area?", options: ["80 hectares", "40 hectares", "50 hectares", "100 hectares"], answer: 0, why: "2,000,000 / (50,000 - 25,000) = 80 hectares." },
      { objective: "O2", q: "Which benefit of owning do the cost numbers often miss?", options: ["Paying more interest", "Ploughing on time without waiting for a hired tractor", "Higher insurance", "More repairs"], answer: 1, why: "Timeliness has value even when hiring is cheaper on paper." },
      { objective: "O3", q: "Hello Tractor lets farmers book tractor services:", options: ["Only by post", "Only at a bank", "Only in person at a factory", "Through a mobile app, a web app or booking agents"], answer: 3, why: "Hello Tractor says farmers book through its apps or booking agents." },
      { objective: "O3", q: "How should you measure the field for a hire job?", options: ["Trust the operator's guess", "Measure it yourself with a tape or phone GPS app", "Count the trees", "Do not measure"], answer: 1, why: "Your own measure protects you from paying for more area than was worked." },
      { objective: "O3", q: "A caller says he is a tractor agent and asks for full payment in advance by mobile money. You:", options: ["Pay at once", "Send your PIN", "Book through the official app or a known agent, and pay after checking the work", "Pay double to be sure"], answer: 2, why: "Unknown callers asking for advance payment are a common scam." },
      { objective: "O4", q: "A multi-crop thresher can thresh:", options: ["Rice, sorghum, millet, beans or soybeans", "Only cassava", "Only coffee", "Only grass"], answer: 0, why: "Multi-crop threshers work with many grains and legumes." },
      { objective: "O4", q: "Which is NOT a key check before buying a small machine?", options: ["Spare parts nearby", "Dealer training and warranty", "Enough work to keep it busy", "The colour of its paint"], answer: 3, why: "Parts, training and use decide value; paint colour does not." },
      { objective: "O4", q: "In Kenya, which body's list shows registered pesticides for sprayers?", options: ["Kenya Dairy Board", "Kenya Fisheries Service", "Pest Control Products Board", "Kenya Wildlife Service"], answer: 2, why: "The Pest Control Products Board registers pesticides in Kenya." },
      { objective: "O5", q: "Who may operate a tractor?", options: ["Any child who is careful", "A trained adult", "Anyone with a phone", "A passenger"], answer: 1, why: "Only trained adults should run machines." },
      { objective: "O5", q: "Why must guards stay on the PTO shaft?", options: ["The spinning shaft can catch clothes and kill", "They make the tractor faster", "They are only decoration", "They save fuel"], answer: 0, why: "PTO entanglement is a common cause of serious farm injury and death." },
      { objective: "O5", q: "When should you refuel a machine?", options: ["While it runs", "While smoking", "Near an open fire", "With the engine off and cool, no smoking"], answer: 3, why: "Fuel on a hot engine or near flames can catch fire." },
      { objective: "O5", q: "How often should you do the basic checks (oil, fuel, coolant, tyres, bolts)?", options: ["Once a year", "Only when it breaks", "Every day before work", "Never"], answer: 2, why: "Daily checks catch small problems before they stop the machine in the busy season." },
      { objective: "O6", q: "Fixed costs XOF 500,000 a year; running cost XOF 15,000 per ha; price XOF 40,000 per ha. Break-even area?", options: ["12 hectares", "20 hectares", "25 hectares", "33 hectares"], answer: 1, why: "500,000 / (40,000 - 15,000) = 20 hectares." },
      { objective: "O6", q: "Which reduces the risk of a breakdown in the peak season?", options: ["Skipping maintenance to save money", "Lending it without a log", "Regular maintenance and spare parts in stock", "Working it day and night with no checks"], answer: 2, why: "Maintenance and spares keep the machine working when customers need it most." },
      { objective: "O6", q: "Before signing a lease or loan for a machine, you should:", options: ["Read the whole contract and ask a trusted adviser", "Sign quickly before the offer ends", "Only read the first page", "Let the dealer fill it in for you"], answer: 0, why: "Contracts carry costs and risks; read them fully and get advice." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  // pre-test: these quiz questions, taken before Lesson 1, so the quiz shows how much each learner gained
  pretest: { title: "Pre-Test: What Do You Already Know?", from: [1, 3, 5, 8, 9, 11, 14, 15, 17, 19] },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      { name: "Task choice", objective: "O1", notYet: "No reason given for mechanizing the task.", meets: "The task is chosen with reasons (timeliness, labour, losses or volume) and a cost by hand.", exceeds: "Compares two or more tasks and explains why this one pays most." },
      { name: "Cost comparison", objective: "O2", notYet: "Fixed or running costs missing, or the sums are wrong.", meets: "Depreciation, fixed costs, running costs, hire cost and break-even area correct, with a clear decision.", exceeds: "Uses real quotes and notes timeliness and risk beside the numbers." },
      { name: "Machine and hire checks", objective: "O4", notYet: "No checks on parts, repairs or the hire service.", meets: "Lists checks on parts, mechanic, training and warranty, or on the hire service's terms.", exceeds: "Has asked a dealer or hire service and records the answers." },
      { name: "Safety and maintenance", objective: "O5", notYet: "No safety rules or no logbook.", meets: "Key safety rules and a logbook with date, hours, job, fuel, repairs and cost.", exceeds: "Names who is trained to operate and when the first service is due." },
      { name: "Decision and business plan", objective: "O6", notYet: "No decision, or a buy decision with no plan to keep the machine busy.", meets: "Clear decision; if buying, a one-page hire plan with services, customers, price, costs, break-even and risks.", exceeds: "Shows the plan still works with 20% fewer hectares booked, or says what would change." }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Learners who make a hire or buy decision using the decision sheet within 3 months (follow-up survey)",
      "Learners who report planting on time because of booked or owned mechanization in the next season",
      "Learners who start or grow a hire service, and the hectares they serve, within 12 months",
      "Machine-related injuries reported by learners (target: none)"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A notebook and pen, or a phone with a spreadsheet or notes app",
      "A calculator (a phone calculator is fine)",
      "A tape measure or a phone with a GPS area app",
      "Real quotes from a local dealer and hire services, gathered during the course",
      "About 75 minutes in total, in short sessions, plus a visit to a machine"
    ],
    facilitatorNotes: [
      "Arrange a demonstration with a local hire service or dealer: daily checks, guards, and safe clearing of a blocked sheller or thresher with the engine stopped.",
      "Replace the example prices with local quotes before Lessons 2 and 6, and say clearly they are examples.",
      "Explain loans, leases and pay-as-you-go deals and their risks, but give no investment advice; point learners to a trusted adviser.",
      "Keep children away from all machine demonstrations.",
      "Score the final task with the rubric and give feedback on one Not yet row at a time.",
      "Link groups that want to share machines to \"Community Mobilization: Pooling Machinery and Bargaining for Inputs\"."
    ]
  }
};
