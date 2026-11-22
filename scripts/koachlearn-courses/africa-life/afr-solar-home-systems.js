"use strict";

// Koach Learn course: Africa: Life and Work -> "Solar Home Systems: Installing, Selling and Off-Grid Energy Businesses" (owner, 30 October 2026: "are there any more courses africans can use to support there lives").
// For young people, electricians' helpers, shopkeepers and sales agents who want to earn from small off-grid solar: the parts of a solar home system and checking quality
// (VeraSol), sizing a system from a household's daily energy use, installing a small DC system safely, maintenance and fault finding, and selling honestly (cash and PAYGo,
// GOGLA consumer protection). Small home systems only: no work on the grid or mains wiring. Licensing rules differ by country (Kenya: EPRA); learners check with their
// energy regulator. Sizing figures and prices are examples, not design values.

const VERASOL = { name: "VeraSol: independent quality assurance for off-grid solar (successor of Lighting Global Quality Assurance)", url: "https://verasol.org/" };
const VERASOL_DB = { name: "VeraSol product database: search certified solar energy kits", url: "https://data.verasol.org/" };
const NFPA = { name: "NFPA: Lithium-ion battery safety (warning signs; do not put in the trash, recycle)", url: "https://www.nfpa.org/education-and-research/home-fire-safety/lithium-ion-batteries" };
const GOGLA_CP = { name: "GOGLA: Consumer protection in off-grid solar (responsible sales, transparency, fair treatment, good service, quality)", url: "https://www.gogla.org/what-we-do/business-environment-and-consumer-protection/consumer-protection/" };
const EPRA = { name: "Energy and Petroleum Regulatory Authority (EPRA), Kenya: renewable energy and licensing", url: "https://www.epra.go.ke/" };
const WHO_EWASTE = { name: "WHO fact sheet: Electronic waste (e-waste), including the dangers of burning and dumping", url: "https://www.who.int/news-room/fact-sheets/detail/electronic-waste-(e-waste)" };

module.exports = {
  id: "afr-solar-home-systems",
  category: "Africa: Life and Work",
  name: "Solar Home Systems: Installing, Selling and Off-Grid Energy Businesses",
  skills: "Naming the parts of a solar home system and checking quality, Sizing a system from daily energy use, Installing a small DC system safely, Maintaining and troubleshooting a system, Selling honestly with cash or pay-as-you-go",
  outcome: "help a household choose, install and look after a small solar home system: check that a kit is certified, size it from the household's daily energy use, install it safely, keep it working, and sell it honestly with clear prices and terms.",
  about: [
    "This course is for young people, electricians' helpers, shopkeepers and sales agents across Africa who want to earn from small off-grid solar: lights, phone charging, radio, a small TV or fan for homes and kiosks without a reliable grid connection, in rural Kenya, northern Nigeria, Ghana's Upper East, Senegal's Casamance, or Cameroon's Far North.",
    "Chapter 1 covers how a solar home system works: the parts and how to check quality, how to size a system from what a family uses each day, and how to install a small system safely. Chapter 2 covers keeping it working and running a business: maintenance and fault finding, selling with cash or pay-as-you-go, and writing an honest quote.",
    "This course is for small home systems only. It does not teach work on the grid, mains house wiring or big systems; those need a licensed electrician. Some countries license solar technicians, so check with your energy regulator. All sizing figures and prices are examples. Each lesson takes about five minutes and ends with a task. Quick checks follow every lesson, a knowledge check closes each chapter and a 20-question quiz closes the course."
  ],
  finalTask: "Write a quote for one real or example household (for example a family of five in Kitui, Kenya, or a kiosk in Kaolack, Senegal): a table of what they want to power with watts and hours per day, the daily energy total, the panel and battery size you chose and how you worked it out, a certified kit from the VeraSol database or a kit with a clear warranty, an installation safety checklist, the cash price and any pay-as-you-go terms with the total the customer will pay, and a maintenance and warranty card for the customer.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Young people, electricians' helpers, shopkeepers and solar sales agents in towns and villages across Africa (Kenya, Nigeria, Ghana, Senegal, Cameroon, Morocco and beyond) who sell, install or want to start a small solar business.",
    startingPoint: "Many have seen solar lanterns and kits, and some sell them. Few can size a system from a household's energy use, check whether a kit is certified, install a small system safely, find simple faults, or explain pay-as-you-go terms honestly.",
    gap: "Undersized or fake kits fail fast and customers lose money and trust; poor installation causes battery fires and shocks; unclear pay-as-you-go terms trap families in debt. A trained, honest installer and seller earns repeat customers and helps families get reliable, clean light and power.",
    constraints: [
      "Reading level: plain words and short sentences; simple arithmetic (multiply, add, divide), every technical word explained",
      "Devices: a basic phone with a calculator; costly data, so database checks are short",
      "Scope and safety: small home systems only; no grid, mains wiring or large systems; licensing rules differ by country and learners check with their energy regulator",
      "Money: prices and sizing figures are examples; no investment advice; pay-as-you-go terms explained honestly",
      "Course is also translated into French and Arabic, so examples include francophone and North African customers"
    ],
    prerequisites: "Basic arithmetic. No electrical training needed to start; hands-on installation should be practised with an experienced installer."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Given a solar home system kit", action: "name each part (panel, charge controller, battery, inverter, lights and appliances) and check whether the kit is certified in the VeraSol database", standard: "naming all the parts correctly and recording the certification result" },
    { id: "O2", condition: "Given a list of what a household wants to power", action: "calculate the daily energy need in watt-hours and choose a panel and battery size", standard: "with the arithmetic correct and an allowance for losses" },
    { id: "O3", condition: "When installing a small DC solar home system", action: "follow a safety checklist for panel placement, wiring, fuses and battery placement", standard: "with no step missed and no work on the grid or mains wiring" },
    { id: "O4", condition: "When a system is not working well", action: "carry out routine maintenance and find simple faults step by step", standard: "checking the panel, connections, controller and battery in order" },
    { id: "O5", condition: "When you sell a system to a customer", action: "write an honest quote with the cash price, any pay-as-you-go terms, the total cost and the warranty", standard: "so the customer can say the total they will pay before signing" }
  ],
  chapters: [
    {
      name: "Chapter 1: How a solar home system works",
      lessons: [
        {
          title: "The parts of a solar home system, and quality",
          objectives: ["O1"],
          minutes: 5,
          goal: "Name the parts of a solar home system and check whether a kit is certified.",
          text: [
            "A solar home system turns sunlight into electricity for a home or a small shop. It has five main parts. The solar panel makes electricity from sunlight during the day. The charge controller sends that electricity safely into the battery and stops it from overcharging or draining too far. The battery stores energy for the night. The lights and appliances (loads) use the energy. Some systems have an inverter, which changes the battery's DC power into AC power for normal plugs.",
            "Many small kits come as one box with the controller and battery built in, plus DC lights, a phone charging port, and sometimes a DC radio, TV or fan. DC appliances use less energy than AC ones with an inverter, so they make a small system go further.",
            "Fake and poor-quality kits are common. Before you sell or install a kit, check whether it is certified by VeraSol, an independent quality programme that grew out of Lighting Global. Its free online database (data.verasol.org) lists certified solar energy kits. A certified kit has been tested for its real performance, durability and honest claims. If a kit is not listed, ask for its warranty in writing and test results.",
            "Example: Fatou in Kaolack, Senegal, compares two kits of the same size. One is in the VeraSol database with a written warranty; the other has no label and no warranty. She chooses the certified kit for her customers."
          ],
          words: [["Solar panel", "a flat panel that makes electricity from sunlight."], ["Charge controller", "a small box that charges the battery safely and protects it."], ["Inverter", "a device that changes DC battery power into AC power for normal plugs."], ["DC and AC", "DC is the steady power from batteries and panels; AC is the power from the grid and most normal plugs."]],
          slides: [
            { title: "Five main parts", bullets: ["Panel: makes power from sunlight", "Charge controller: charges the battery safely", "Battery: stores power for the night; loads use it"] },
            { title: "Inverter and DC appliances", bullets: ["Inverter: battery DC to AC for normal plugs", "DC lights, radio, TV, fan use less energy", "Many kits come as one box"] },
            { title: "Check quality: VeraSol", bullets: ["Independent quality programme (from Lighting Global)", "Free database: data.verasol.org", "Not listed? Ask for a written warranty and test results"] }
          ],
          sources: [VERASOL, VERASOL_DB],
          tryIt: "Look at a solar kit (in a shop, at home, or a picture online) and write the name of each part. If you have data, search for one kit in the VeraSol database and write whether it is listed.",
          youCanNow: "name each part of a solar home system and check whether a kit is certified.",
          quickCheck: [
            { objective: "O1", q: "Which part stops the battery from overcharging?", options: ["The light bulb", "The panel frame", "The charge controller", "The phone charger cable"], answer: 2, why: "The charge controller charges the battery safely and protects it from overcharging and over-draining." },
            { objective: "O1", q: "Where can you check whether a solar kit is certified?", options: ["The VeraSol product database", "The colour of the box", "A seller's word only", "The weight of the panel"], answer: 0, why: "VeraSol's free database lists independently tested and certified kits." }
          ]
        },
        {
          title: "Sizing a system from what a household uses",
          objectives: ["O2"],
          minutes: 6,
          goal: "Calculate a household's daily energy need and choose a panel and battery size.",
          text: [
            "Size a system from what the family really wants to power. For each item, multiply its power in watts (W) by the hours it is used each day. That gives watt-hours (Wh) per day. Add them up.",
            "Example (figures are examples only): 3 LED bulbs of 3 W for 5 hours = 45 Wh. Charging 2 phones, about 10 Wh each = 20 Wh. A radio, 5 W for 4 hours = 20 Wh. A DC TV, 20 W for 3 hours = 60 Wh. Total: 145 Wh per day. Add about 30% for losses in wires, the controller and the battery: about 190 Wh per day.",
            "Panel: divide the daily need by the peak sun hours where the customer lives (the hours of full-strength sun in a day). If there are about 5 peak sun hours: 190 / 5 = 38 W. Round up to the next panel size, for example a 50 W panel. Peak sun hours change with place and season; check local data or ask an experienced installer, and size for the cloudiest months.",
            "Battery: it must hold at least one night's need. Most batteries should not be emptied fully. A lithium battery is often used to about 80%; a lead-acid one to about 50% (check the maker's figure). For 190 Wh with lithium: 190 / 0.8 = about 238 Wh. For a 12 V battery, divide by 12: about 20 Ah. Add more if the family wants power on cloudy days."
          ],
          steps: ["List each item, its watts and its hours per day.", "Multiply watts by hours for each, and add: Wh per day.", "Add about 30% for losses.", "Panel: daily need / peak sun hours, then round up.", "Battery: daily need / usable share (for example 0.8), then / 12 for amp-hours at 12 V."],
          words: [["Watt (W)", "how much power an item uses at one moment."], ["Watt-hour (Wh)", "energy used: watts multiplied by hours."], ["Peak sun hours", "the number of hours of full-strength sun in a day at a place."], ["Amp-hour (Ah)", "how much charge a battery holds; Wh = Ah x volts."]],
          slides: [
            { title: "Daily energy need", bullets: ["Watts x hours = Wh for each item", "Add them all up", "Example: 145 Wh; +30% losses = about 190 Wh"] },
            { title: "Panel size", bullets: ["Daily Wh / peak sun hours", "Example: 190 / 5 = 38 W: choose 50 W", "Size for the cloudiest months"] },
            { title: "Battery size", bullets: ["Do not empty it fully: lithium about 80%, lead-acid about 50%", "Example: 190 / 0.8 = about 238 Wh", "At 12 V: 238 / 12 = about 20 Ah"] },
            { title: "Figures are examples", bullets: ["Check each appliance's watts on its label", "Check local sun hours", "Check the battery maker's figures"] }
          ],
          tryIt: "Make an energy table for your own home or a neighbour's: each item, watts, hours, Wh. Add the total, add 30%, and work out the panel and battery size using the steps.",
          youCanNow: "work out a household's daily energy need and choose a panel and battery size for it.",
          quickCheck: [
            { objective: "O2", q: "A 4 W bulb is used for 6 hours a day. How many watt-hours is that?", options: ["10 Wh", "2 Wh", "46 Wh", "24 Wh"], answer: 3, why: "4 W x 6 hours = 24 Wh." },
            { objective: "O2", q: "A household needs 200 Wh a day and there are 5 peak sun hours. What is the smallest panel size from the sum?", options: ["40 W", "1,000 W", "5 W", "200 W"], answer: 0, why: "200 / 5 = 40 W; then round up to the next panel size available." }
          ]
        },
        {
          title: "Installing a small system safely",
          objectives: ["O3"],
          minutes: 6,
          goal: "Install a small DC solar home system following a safety checklist.",
          text: [
            "Panel: put it where it gets full sun most of the day, with no shade from trees, walls or wires. Point it towards the equator: in countries north of the equator, face it south; south of the equator, face it north. Tilt it at least a little, so rain washes off dust. Fix it firmly so wind cannot lift it. On a roof, use a safe ladder, have a helper hold it, and never work in rain or wind.",
            "Battery: keep it indoors, in a dry, shaded and ventilated place, off the floor and out of children's reach, away from cooking fires. Lead-acid batteries give off flammable gas when charging and contain acid: ventilate them, wear eye protection and gloves, and keep flames away. A short circuit across a battery's terminals can melt wires and start a fire.",
            "Wiring: use the cable size the kit maker gives, keep red to positive (+) and black to negative (-), and fit the fuse or breaker the maker gives, close to the battery. For most kits with a separate controller, connect the battery to the controller first, then the panel, then the loads; follow the maker's manual if it says otherwise. Secure cables so they cannot be pulled or chewed.",
            "Limits: this course covers small DC systems only. Never connect a solar system to the grid or to the house's mains wiring, and never open an inverter. Those jobs need a licensed electrician. Some countries license solar technicians; in Kenya, check with EPRA, and elsewhere with your energy regulator."
          ],
          steps: ["Choose a sunny, shade-free spot; face the panel towards the equator with a small tilt; fix it firmly.", "Work at height only with a safe ladder and a helper; never in rain or wind.", "Place the battery indoors: dry, shaded, ventilated, off the floor, away from children and fire.", "Use the right cable, red to +, black to -, and fit the fuse near the battery.", "Connect battery to controller first, then panel, then loads, unless the manual says otherwise.", "No grid or mains connection; no opening the inverter."],
          words: [["Polarity", "which wire is positive (+) and which is negative (-). Getting it wrong can damage parts."], ["Fuse", "a small safety part that breaks the circuit if too much current flows."], ["Ventilated", "with fresh air moving through, so gases do not build up."]],
          slides: [
            { title: "Panel placement", bullets: ["Full sun, no shade", "Face the equator: south if north of it, north if south of it", "Small tilt; fixed firmly; safe ladder and a helper"] },
            { title: "Battery placement", bullets: ["Indoors: dry, shaded, ventilated, off the floor", "Away from children and cooking fires", "Lead-acid: acid and gas; goggles, gloves, no flames"] },
            { title: "Wiring", bullets: ["Right cable; red +, black -", "Fuse near the battery", "Battery to controller first, then panel, then loads (or as the manual says)"] },
            { title: "Your limits", bullets: ["Small DC systems only", "Never the grid or mains wiring; never open an inverter", "Licensing: Kenya EPRA; elsewhere your energy regulator"] }
          ],
          sources: [EPRA, NFPA],
          tryIt: "Write your installation safety checklist with at least eight lines from this lesson. If you can, walk around a home and choose the best place for the panel and the battery, and write why.",
          youCanNow: "install a small DC solar home system safely, following a checklist, and know which jobs to leave to a licensed electrician.",
          quickCheck: [
            { objective: "O3", q: "A customer's home is in Nairobi, just south of the equator. Which way should the panel face?", options: ["South", "Straight down", "North, towards the equator", "Into the shade"], answer: 2, why: "Panels face the equator; south of it, that means facing north." },
            { objective: "O3", q: "A customer asks you to connect his solar kit to the grid wiring in his house. What do you do?", options: ["Do it quickly", "Refuse: grid and mains work needs a licensed electrician", "Do it at night", "Open the inverter first"], answer: 1, why: "This course covers small DC systems only; grid and mains work need a licensed electrician." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: How a solar home system works",
        questions: [
          { objective: "O1", q: "What does an inverter do?", options: ["Stores power", "Makes power from sunlight", "Measures sunlight", "Changes DC battery power into AC power for normal plugs"], answer: 3, why: "An inverter turns DC into AC." },
          { objective: "O1", q: "Why choose a kit listed in the VeraSol database?", options: ["It has been independently tested for performance, durability and honest claims", "It is always the cheapest", "It never needs maintenance", "It works without sun"], answer: 0, why: "VeraSol certifies kits after independent testing." },
          { objective: "O2", q: "A household needs 120 Wh a day before losses. About how much with 30% added?", options: ["90 Wh", "150 Wh", "156 Wh", "360 Wh"], answer: 2, why: "120 x 1.3 = 156 Wh." },
          { objective: "O2", q: "Why should a lithium battery not be emptied fully every night?", options: ["It makes the lights brighter", "It is only for daytime", "It is illegal", "Draining it fully shortens its life, so you size for about 80% use"], answer: 3, why: "Keeping some charge in the battery protects it, so sizing allows for a usable share." },
          { objective: "O3", q: "Where should a fuse go?", options: ["Close to the battery, as the maker says", "On the roof", "Inside the light bulb", "Anywhere, or not at all"], answer: 0, why: "A fuse near the battery protects the wiring from a short at the battery." }
        ]
      }
    },
    {
      name: "Chapter 2: Keeping it working and running a solar business",
      lessons: [
        {
          title: "Maintenance and finding simple faults",
          objectives: ["O4"],
          minutes: 5,
          goal: "Carry out routine maintenance and find simple faults step by step.",
          text: [
            "A well-kept system lasts for years. Teach the customer: clean the panel with water and a soft cloth when it is dusty, early in the morning or evening when it is cool (never with soap that leaves a film, and never stand on it). Cut back new shade from trees. Keep the battery clean and dry. Switch off loads that are not needed.",
            "When a customer says \"the lights die early\", check in order: (1) Panel: is it dirty or shaded now? (2) Connections: any loose, broken or corroded wires or plugs? (3) Controller: what do its lights or screen show? Read the manual for what they mean. (4) Battery: is it old, swollen, hot or leaking? (5) Loads: has the family added a bigger TV or more bulbs than the system was sized for?",
            "Many faults are dirt, shade, loose plugs or extra loads. A swollen, very hot or leaking battery must be replaced; never charge or open it. Old batteries are e-waste: never burn, bury or dump them, and give them to an approved collector or the kit company's take-back scheme.",
            "Example: Chinedu in Kano gets a call that lights die by 8 pm. He finds a new tree branch shading the panel and a second TV added. He cuts the branch with the owner's permission and explains the system's size; the family decides to add a second panel."
          ],
          steps: ["Check the panel: clean and unshaded?", "Check connections: loose, broken or corroded?", "Check the controller lights or screen against the manual.", "Check the battery: old, swollen, hot or leaking?", "Check the loads: more or bigger items than planned?"],
          words: [["Corrosion", "green or white crust on metal connections that stops power flowing well."], ["Take-back scheme", "a company's programme to collect its old products for safe recycling."]],
          slides: [
            { title: "Routine care", bullets: ["Clean the panel with water and a soft cloth when cool", "Cut back new shade; keep the battery clean and dry", "Switch off what is not needed"] },
            { title: "Fault finding in order", bullets: ["1. Panel: dirty or shaded?", "2. Connections: loose or corroded?", "3. Controller lights; 4. Battery; 5. Extra loads"] },
            { title: "Battery warning", bullets: ["Swollen, very hot or leaking: replace it", "Never charge or open a damaged battery", "Old batteries: approved collector or take-back"] }
          ],
          sources: [NFPA, WHO_EWASTE],
          tryIt: "Write a maintenance card for a customer (four lines of routine care) and a five-step fault-finding list you will carry to every call-out.",
          youCanNow: "teach a customer how to look after their system and find simple faults in the right order.",
          quickCheck: [
            { objective: "O4", q: "Lights die early. What is the first thing to check?", options: ["The battery's colour", "Whether the panel is dirty or shaded", "The customer's phone", "The price of the kit"], answer: 1, why: "Start with the panel: dirt and new shade are common, easy causes." },
            { objective: "O4", q: "You find a battery that is swollen and hot. What do you do?", options: ["Replace it; do not charge or open it", "Charge it longer", "Open it to look inside", "Burn it"], answer: 0, why: "A swollen, hot battery is dangerous and must be replaced safely." }
          ]
        },
        {
          title: "Selling honestly: cash and pay-as-you-go",
          objectives: ["O5"],
          minutes: 5,
          goal: "Explain the cash price and pay-as-you-go terms so a customer can say the total they will pay.",
          text: [
            "Many families cannot pay the full price at once, so many companies sell kits on pay-as-you-go (PAYGo). The customer pays a deposit, then small payments, often daily, weekly or monthly by mobile money. If payments stop, the kit locks until they pay again. After the last payment, the customer owns it.",
            "PAYGo helps families get solar sooner, but the total is usually more than the cash price. An honest seller shows both. Example (figures are examples only): cash price KES 20,000. PAYGo: deposit KES 2,000, then KES 1,500 a month for 18 months: 2,000 + (1,500 x 18) = KES 29,000 in total. The customer should be able to say that total before signing.",
            "GOGLA, the off-grid solar industry association, has a consumer protection code built on responsible sales and pricing (do not sell more than the family can afford), transparency (clear, honest information), fair and respectful treatment, good service and product quality. Follow it whether or not your company has signed.",
            "Never promise more than the system can power. Never ask a customer for their mobile money PIN; payments go to the company's official number or till, and a real company never asks for a PIN."
          ],
          steps: ["Show the cash price.", "Show the PAYGo deposit, payment size, how often and for how long.", "Work out the total PAYGo cost with the customer.", "Explain what happens if a payment is missed, and the warranty.", "Check the customer can afford the payments; never ask for a PIN."],
          words: [["PAYGo (pay-as-you-go)", "buying a kit with a deposit and small payments; it locks if payments stop and is yours after the last one."], ["Deposit", "the first payment before the customer takes the kit."], ["Consumer protection", "rules and habits that treat customers fairly and honestly."]],
          slides: [
            { title: "How PAYGo works", bullets: ["Deposit, then small payments by mobile money", "Kit locks if payments stop", "Customer owns it after the last payment"] },
            { title: "Show the total", bullets: ["Total PAYGo cost is usually more than cash", "Example: 2,000 + 1,500 x 18 = KES 29,000 vs KES 20,000 cash", "Customer can say the total before signing"] },
            { title: "Sell fairly (GOGLA code)", bullets: ["Responsible sales: only what they can afford", "Transparency; fair, respectful treatment", "Good service and quality"] },
            { title: "Never", bullets: ["Promise more than the system can power", "Ask for a mobile money PIN"] }
          ],
          sources: [GOGLA_CP],
          tryIt: "For a kit you know (or the example), write the cash price and PAYGo terms side by side, and work out the total PAYGo cost. Practise explaining it out loud in under one minute.",
          youCanNow: "explain cash and pay-as-you-go prices honestly so a customer knows the total before signing.",
          quickCheck: [
            { objective: "O5", q: "PAYGo deposit XOF 10,000, then XOF 5,000 a month for 12 months. What is the total?", options: ["XOF 15,000", "XOF 60,000", "XOF 50,000", "XOF 70,000"], answer: 3, why: "10,000 + (5,000 x 12) = 70,000." },
            { objective: "O5", q: "Which is honest selling?", options: ["Hiding the total PAYGo cost", "Promising the kit will run a fridge when it cannot", "Showing the cash price and the total PAYGo cost side by side", "Selling a family more than they can pay"], answer: 2, why: "Transparency means showing both prices clearly." }
          ]
        },
        {
          title: "Writing a quote and running your solar business",
          objectives: ["O5", "O2"],
          minutes: 5,
          goal: "Write a complete, honest quote for one household.",
          text: [
            "A good quote wins trust. It shows the customer what they asked to power, the energy table, the system you chose and why, the price, the payment terms and the warranty. It also has your name and phone number, and the date.",
            "Your own price for an installation must cover the kit, cables and fittings, transport to the home, your time, and a profit. Example (figures are examples only): kit MAD 2,500, cables and fittings MAD 300, transport MAD 150, labour MAD 400: cost MAD 3,350. Add MAD 400 profit: MAD 3,750.",
            "After the installation, give the customer a card: maintenance steps, what the controller lights mean, the warranty, and your number for problems. Come back after one month to check. Happy customers send neighbours; that is how solar businesses grow in villages from Kitui to Kaolack.",
            "Keep a simple record of each job: the customer, the kit and its serial number, the date, the price and any call-backs. It helps you honour warranties and see which kits fail."
          ],
          steps: ["Write the energy table and the sizing you did.", "Name the kit, and whether it is certified or has a written warranty.", "Add your safety checklist.", "Show the cash price and any PAYGo terms with the total.", "Attach the maintenance and warranty card, with your name, number and the date."],
          words: [["Quote", "a written offer that shows what you will supply and do, and the price."], ["Serial number", "the unique number on a product, used for its warranty."], ["Call-back", "a return visit to fix a problem after the installation."]],
          slides: [
            { title: "What a quote shows", bullets: ["What they want to power: energy table", "The system and why; certified or warranty", "Price, terms, warranty; your name, number, date"] },
            { title: "Your installation price", bullets: ["Kit + cables + transport + labour + profit", "Example: MAD 3,350 cost + MAD 400 = MAD 3,750", "Figures are examples only"] },
            { title: "After the job", bullets: ["Maintenance and warranty card", "Visit again after one month", "Record: customer, kit, serial number, date, price"] }
          ],
          tryIt: "Write your full quote for one household, as described in the final task. Read it to a friend and ask them to tell you the total they would pay.",
          youCanNow: "write a complete, honest quote for a solar home system and keep good records of every job.",
          quickCheck: [
            { objective: "O5", q: "Which item belongs on every quote?", options: ["The customer's mobile money PIN", "The total the customer will pay, and the warranty", "A promise of free power forever", "Your competitor's prices only"], answer: 1, why: "The total cost and warranty let the customer decide fairly." },
            { objective: "O2", q: "Why put the energy table on the quote?", options: ["It shows how you sized the system to the family's real use", "To make the quote longer", "Customers like numbers", "It is not needed"], answer: 0, why: "The table shows the system matches what the family will power." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Keeping it working and selling",
        questions: [
          { objective: "O4", q: "How should a customer clean a dusty panel?", options: ["With soap at midday", "By standing on it and scrubbing", "With water and a soft cloth when it is cool", "With sand"], answer: 2, why: "Water and a soft cloth, when cool, clean without damage." },
          { objective: "O4", q: "Lights die early and the panel is clean and unshaded. What do you check next?", options: ["The customer's TV channel", "The connections: loose, broken or corroded wires", "The weather forecast", "Nothing more"], answer: 1, why: "Connections come next in the fault-finding order." },
          { objective: "O4", q: "What should happen to an old solar battery?", options: ["Burn it", "Bury it", "Throw it in the river", "Give it to an approved collector or take-back scheme"], answer: 3, why: "Old batteries are e-waste and need safe recycling." },
          { objective: "O5", q: "What happens on PAYGo when payments stop?", options: ["The kit locks until the customer pays again", "The customer owns it at once", "The panel breaks", "Nothing at all"], answer: 0, why: "PAYGo kits lock when payments stop and unlock when paid." },
          { objective: "O5", q: "A customer can only afford half the monthly payment. What does responsible selling mean?", options: ["Sell the big kit anyway", "Hide the payment size", "Offer a smaller kit or plan they can afford", "Ask for their PIN"], answer: 2, why: "Responsible sales means not selling more than the family can afford." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Solar Home Systems: Installing, Selling and Off-Grid Energy Businesses",
    questions: [
      { objective: "O1", q: "Which part stores energy for the night?", options: ["The panel", "The battery", "The fuse", "The light"], answer: 1, why: "The battery stores energy for use when there is no sun." },
      { objective: "O1", q: "What is VeraSol?", options: ["A brand of battery", "A solar company that sells on PAYGo", "An independent quality programme that certifies off-grid solar kits", "A government tax"], answer: 2, why: "VeraSol is an independent quality assurance programme for off-grid solar." },
      { objective: "O1", q: "A kit has no label, no certification and no warranty. What do you do?", options: ["Ask for a written warranty and test results, or choose a certified kit", "Sell it as certified", "Sell it at a higher price", "Install it without telling anyone"], answer: 0, why: "Without proof of quality, ask for a warranty and test results, or choose a certified kit." },
      { objective: "O1", q: "Why do small kits often use DC appliances?", options: ["They are louder", "They need the grid", "They are always free", "They use less energy than AC appliances with an inverter"], answer: 3, why: "DC appliances avoid inverter losses and use less energy." },
      { objective: "O2", q: "A radio uses 5 W for 6 hours a day. How many Wh?", options: ["11 Wh", "30 Wh", "56 Wh", "1 Wh"], answer: 1, why: "5 x 6 = 30 Wh." },
      { objective: "O2", q: "Why add about 30% to the daily total?", options: ["For losses in wires, the controller and the battery", "For profit", "For tax", "For the customer's phone credit"], answer: 0, why: "Energy is lost along the way, so the system must make more than the loads use." },
      { objective: "O2", q: "Daily need 300 Wh, 5 peak sun hours. What is the smallest panel from the sum?", options: ["1,500 W", "30 W", "6 W", "60 W"], answer: 3, why: "300 / 5 = 60 W; then round up to the next panel size." },
      { objective: "O2", q: "Daily need 240 Wh, lithium battery used to 80%, 12 V. About how many amp-hours?", options: ["About 25 Ah", "About 12 Ah", "About 300 Ah", "About 2 Ah"], answer: 0, why: "240 / 0.8 = 300 Wh; 300 / 12 = 25 Ah." },
      { objective: "O3", q: "A customer lives in northern Ghana, north of the equator. Which way should the panel face?", options: ["North", "Straight up with no tilt at all", "South, towards the equator", "East only"], answer: 2, why: "North of the equator, panels face south, towards the equator, with a small tilt." },
      { objective: "O3", q: "Where should the battery go?", options: ["On the roof in the sun", "Next to the cooking fire", "Indoors, dry, shaded, ventilated, off the floor, away from children", "In a closed box with no air"], answer: 2, why: "A dry, shaded, ventilated place away from children and fire is safest." },
      { objective: "O3", q: "In most kits with a separate controller, what do you connect first?", options: ["The panel to the loads", "The battery to the controller", "The loads to the grid", "The panel to the battery directly"], answer: 1, why: "Battery to controller first lets the controller set itself up; then panel, then loads, unless the manual says otherwise." },
      { objective: "O3", q: "Which job is outside this course and needs a licensed electrician?", options: ["Cleaning the panel", "Placing the battery", "Fitting the maker's fuse", "Connecting the system to the grid or mains wiring"], answer: 3, why: "Grid and mains work is for licensed electricians only." },
      { objective: "O3", q: "Why keep lead-acid batteries ventilated and away from flames?", options: ["They give off flammable gas when charging", "They get too cold", "They attract insects", "They need sunlight"], answer: 0, why: "Charging lead-acid batteries releases flammable gas." },
      { objective: "O4", q: "When is the best time to clean a panel?", options: ["Midday in full sun", "Early morning or evening, when it is cool", "During a storm", "Never"], answer: 1, why: "A cool panel is safer to touch and clean than a hot one in full sun." },
      { objective: "O4", q: "What is the right fault-finding order?", options: ["Battery, then guess", "Loads, then buy a new kit", "Panel, connections, controller, battery, loads", "Controller only"], answer: 2, why: "Checking in this order finds the common, easy causes first." },
      { objective: "O4", q: "A family added a big TV and now the lights die early. What is the likely cause?", options: ["The panel is upside down", "The sun is weaker", "The fuse is too strong", "More load than the system was sized for"], answer: 3, why: "Extra loads use more energy than the system makes and stores." },
      { objective: "O5", q: "Cash price NGN 150,000. PAYGo: deposit NGN 20,000, then NGN 12,000 a month for 12 months. What is the PAYGo total?", options: ["NGN 164,000", "NGN 144,000", "NGN 32,000", "NGN 150,000"], answer: 0, why: "20,000 + (12,000 x 12) = 164,000." },
      { objective: "O5", q: "Who will ask a customer for their mobile money PIN?", options: ["The solar company", "Your manager", "No real company: only scammers", "The installer"], answer: 2, why: "A real company never asks for a PIN." },
      { objective: "O5", q: "Which is part of the GOGLA consumer protection code?", options: ["Selling the biggest kit to everyone", "Transparency: clear, honest information", "Hiding the total price", "No after-sales service"], answer: 1, why: "Transparency and responsible sales are core principles." },
      { objective: "O5", q: "Kit EGP 4,000, cables EGP 500, transport EGP 300, labour EGP 700, profit EGP 500. What is your price?", options: ["EGP 5,500", "EGP 4,500", "EGP 5,000", "EGP 6,000"], answer: 3, why: "4,000 + 500 + 300 + 700 + 500 = 6,000." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Pre-Test: What Do You Already Know?", from: [0, 1, 4, 6, 8, 11, 14, 16, 18] },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part of your quote and try again.",
    criteria: [
      { name: "Quality checked", objective: "O1", notYet: "The kit is not named, or quality is not checked.", meets: "The kit and its parts are named, and the quote records whether it is in the VeraSol database or has a written warranty.", exceeds: "It also explains to the customer why a certified kit matters." },
      { name: "Sized correctly", objective: "O2", notYet: "No energy table, or the arithmetic is wrong.", meets: "The energy table, the 30% allowance, and the panel and battery sizes are worked out correctly.", exceeds: "It also allows for cloudy days or the cloudiest months, and says where the sun-hours figure came from." },
      { name: "Safe installation", objective: "O3", notYet: "No checklist, or it includes grid or mains work.", meets: "The checklist covers panel placement, ladder safety, battery placement, polarity, fuse and connection order, with no grid work.", exceeds: "It also names the energy regulator to check for licensing." },
      { name: "Care and faults", objective: "O4", notYet: "No maintenance card, or unsafe advice.", meets: "The card gives routine care and the five-step fault order, and says how old batteries are handled.", exceeds: "It also explains the controller's lights for this kit." },
      { name: "Honest price and terms", objective: "O5", notYet: "The total PAYGo cost or the warranty is missing, or the arithmetic is wrong.", meets: "The cash price, any PAYGo terms and the correct total are shown side by side, with the warranty and the installer's contact.", exceeds: "It also checks that the payments fit the family's budget and says what happens if a payment is missed." }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Learners who report writing a quote with an energy table for a real customer within 30 days (follow-up survey)",
      "Learners who report selling or installing a certified kit within 90 days",
      "Learners who report no battery fires, shocks or customer complaints about hidden costs over 90 days"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A basic phone with a calculator; data for a short search of the VeraSol database if possible",
      "Paper and pen for the energy table, safety checklist, maintenance card and quote",
      "If possible, a small certified solar kit to look at and name the parts",
      "About 60 to 75 minutes in total, in short sessions"
    ],
    facilitatorNotes: [
      "In a youth, vocational or women's group: take the pre-test together, then one chapter per session, with learners sizing a system for a real home they know.",
      "Hands-on installation should be practised only under an experienced installer, on small DC kits; never let learners work on the grid, mains wiring or inverters.",
      "Before the course, find out whether your country licenses solar technicians and which e-waste collectors or take-back schemes serve your area.",
      "Never ask learners to share PINs or passwords in class.",
      "Score the final task with the rubric, and give feedback on one Not yet row at a time."
    ]
  }
};
