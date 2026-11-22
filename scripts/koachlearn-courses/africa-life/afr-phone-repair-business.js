"use strict";

// Koach Learn course: Africa: Life and Work -> "Starting a Phone Repair Business" (owner, 30 October 2026: "are there any more courses africans can use to support there lives").
// For young people and artisans who want to earn by repairing phones in a kiosk, market stall or small shop: a safe bench, lithium battery dangers, finding the fault and
// writing a job card, protecting customers' data, pricing a repair with a warranty, refusing stolen phones, and handling e-waste. It teaches safe habits and how to run the
// business; it is not a full board-level repair course. Battery and e-waste safety follow NFPA and WHO; data-protection offices are named per country. Money figures are examples.

const NFPA = { name: "NFPA (US National Fire Protection Association): Lithium-ion battery safety (warning signs; do not put in the trash, recycle)", url: "https://www.nfpa.org/education-and-research/home-fire-safety/lithium-ion-batteries" };
const WHO_EWASTE = { name: "WHO fact sheet: Electronic waste (e-waste): 62 million tonnes in 2022, 22.3% documented as recycled; dangers of burning", url: "https://www.who.int/news-room/fact-sheets/detail/electronic-waste-(e-waste)" };
const NDPC = { name: "Nigeria Data Protection Commission (Nigeria Data Protection Act 2023)", url: "https://ndpc.gov.ng/" };
const GH_DPC = { name: "Data Protection Commission Ghana (Data Protection Act, 2012, Act 843; data controllers must register)", url: "https://dpc.gov.gh/" };
const KE_ODPC = { name: "Office of the Data Protection Commissioner, Kenya", url: "https://www.odpc.go.ke/" };

module.exports = {
  id: "afr-phone-repair-business",
  category: "Africa: Life and Work",
  name: "Starting a Phone Repair Business",
  skills: "Setting up a safe repair bench, Handling lithium batteries safely, Finding faults and writing job cards, Protecting customers' data, Pricing repairs with a warranty, Handling e-waste safely",
  outcome: "run a small, safe and honest phone repair business: work at a safe bench, handle lithium batteries without fire risk, find common faults and record each job on a job card, protect every customer's data, price repairs with a clear warranty, and get rid of dead batteries and broken parts safely.",
  about: [
    "This course is for young people, artisans and small business owners across Africa who repair phones, or want to, in a kiosk, market stall or small shop: in Nairobi's Luthuli Avenue, Lagos's Computer Village, Accra's Circle, Abidjan's Adjamé or Douala's Akwa.",
    "Chapter 1 covers safe work: your bench and tools, the dangers of lithium batteries, and how to find a fault step by step and record it on a job card. Chapter 2 covers the business: protecting customers' data, pricing and warranties, refusing stolen phones, and handling e-waste.",
    "This is not a full electronics course. It gives you the safety habits and business skills that keep you, your customers and your shop safe, so your technical skills earn you a good name. Money figures are examples only. Each lesson takes about five minutes and ends with a task. Quick checks follow every lesson, a knowledge check closes each chapter and a 20-question quiz closes the course."
  ],
  finalTask: "Make your shop's starter pack: (1) a price list for at least five common repairs (for example screen, charging port, battery, speaker, software reset), each with parts cost, labour, price and warranty days; (2) a one-page job card you will use for every phone; (3) a customer data promise of at least four lines; and (4) a safety card for the wall with your battery rules and where your dead batteries and broken parts will go.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Young people, artisans and small business owners in towns and cities across Africa (Kenya, Nigeria, Ghana, Côte d'Ivoire, Cameroon, Senegal, Egypt and beyond) who repair phones or want to start, often in a kiosk or market stall.",
    startingPoint: "Many have learned some repairs from a friend or an apprenticeship, or have none yet. Few have a safe bench routine, know how dangerous a damaged lithium battery is, write a job card, protect customers' data, price with a warranty, or know where e-waste should go.",
    gap: "Battery fires burn shops and injure people; lost or leaked customer data ruins trust; guessing prices loses money; buying stolen phones brings trouble with the police; burning e-waste poisons families. Safe habits and simple business tools turn a skill into a trusted, lasting business.",
    constraints: [
      "Reading level: plain words and short sentences; every technical word is explained",
      "Devices: a basic Android phone; a small shared space, often without a fire extinguisher",
      "Laws on data protection, business permits and e-waste differ by country and change: learners check with the named offices",
      "Safety: no work on swollen or damaged batteries beyond safe removal; no burning of e-waste",
      "Course is also translated into French and Arabic, so examples include francophone and North African shops"
    ],
    prerequisites: "None for the safety and business skills. Hands-on repair skills come from practice or an apprenticeship."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Before and during any repair", action: "set up a safe bench and handle lithium batteries safely, spotting a swollen, hot or damaged battery", standard: "following every rule on your battery safety card" },
    { id: "O2", condition: "Given a phone a customer brings in", action: "find the likely fault with a step-by-step check and record the job on a job card", standard: "with the fault, the agreed price and the customer's consent written before work starts" },
    { id: "O3", condition: "When a customer leaves a phone with you", action: "protect the customer's data by asking for a backup and never copying, viewing or sharing their files", standard: "never asking for a PIN or password you do not need" },
    { id: "O4", condition: "Given the parts cost and the time a repair takes", action: "calculate a repair price and write a price list with warranty terms", standard: "covering parts, labour and shop costs with a profit, and a clear warranty" },
    { id: "O5", condition: "When you have dead batteries, broken screens or a phone you suspect is stolen", action: "choose the safe and legal action: store and hand e-waste to a collector, and refuse a phone without proof of ownership", standard: "with no burning, no dumping and no buying of phones without proof" }
  ],
  chapters: [
    {
      name: "Chapter 1: Safe work and finding the fault",
      lessons: [
        {
          title: "A safe repair bench",
          objectives: ["O1"],
          minutes: 4,
          goal: "Set up a repair bench that is safe, tidy and ready for work.",
          text: [
            "Your bench is where accidents happen or are prevented. A good bench is dry, well lit, and away from cooking fires, fuel and water. It has a heat-resistant mat, a small tray for screws, and a clear space so tiny parts do not get lost.",
            "Tools: the right screwdrivers, plastic opening tools (spudgers), tweezers, a suction cup, a multimeter, and a hot air tool or soldering iron if you are trained to use them. Heat tools must sit in a stand, never on paper or cloth, and be switched off when you leave the bench.",
            "Protect yourself and the phone: wear safety glasses when you open screens or work with glass, use an anti-static wrist strap or touch bare metal to release static before you touch the board, and keep a metal tin with dry sand near the bench for a damaged battery. Know the way out of your shop and keep it clear."
          ],
          steps: ["Choose a dry, well-lit place away from cooking fires, fuel and water.", "Lay a heat-resistant mat and a screw tray.", "Keep heat tools in a stand and switch them off when you leave.", "Wear safety glasses; release static before touching the board.", "Keep a metal tin of dry sand near the bench and a clear way out."],
          words: [["Spudger", "a plastic tool for opening a phone and lifting parts without scratching or shorting them."], ["Multimeter", "a tester that measures voltage, current and resistance."], ["Static", "a small electric charge on your body that can damage a phone's board."]],
          slides: [
            { title: "Where to put your bench", bullets: ["Dry and well lit", "Away from cooking fires, fuel and water", "A clear way out of the shop"] },
            { title: "Basic tools", bullets: ["Screwdrivers, plastic spudgers, tweezers, suction cup", "Multimeter", "Heat tools only if trained; always in a stand"] },
            { title: "Protect yourself and the phone", bullets: ["Safety glasses for glass and screens", "Release static before touching the board", "Metal tin of dry sand for a damaged battery"] }
          ],
          tryIt: "Draw a simple plan of your bench (or the bench you want): where each tool goes, where the heat tool stands, where the sand tin is, and the way out. List what you still need to buy.",
          youCanNow: "set up a safe, tidy repair bench with the right tools and safety items.",
          quickCheck: [
            { objective: "O1", q: "Where should a hot air tool sit when you put it down?", options: ["On a pile of paper", "On the customer's phone", "In its stand, away from cloth and paper", "On the floor"], answer: 2, why: "A stand keeps the hot tip away from things that can burn." },
            { objective: "O1", q: "Why keep a metal tin of dry sand near your bench?", options: ["To store screws", "To hold a damaged battery safely", "To clean screens", "To weigh parts"], answer: 1, why: "A metal tin of sand is a safer place for a damaged battery than the bench or a bin." }
          ]
        },
        {
          title: "Lithium battery dangers",
          objectives: ["O1"],
          minutes: 5,
          goal: "Spot a swollen, hot or damaged battery and handle it without causing a fire.",
          text: [
            "Almost every phone has a lithium-ion battery. It holds a lot of energy. If it is punctured, bent, crushed, overheated or shorted, it can catch fire very fast, give off poisonous smoke, and start burning again after it seems to stop.",
            "Warning signs: swelling (the back cover or screen is lifted), heat, a strange smell, hissing or popping noises, or smoke. A swollen battery must be replaced, never pressed flat, pierced or charged.",
            "Safe habits: disconnect the battery connector first, before you work on the board. Never pry a battery out with a metal tool; use plastic tools and the right adhesive remover, and go slowly. Never use the hot air tool near a battery. Charge phones only with good chargers, on a hard surface, where you can see them.",
            "If a battery starts to smoke or hiss: move people away and do not breathe the smoke. Only if you can do it safely, use long tongs to put it in your metal tin of sand, outside. If there is fire you cannot control, get everyone out and call the fire service."
          ],
          steps: ["Look for swelling, heat, smell, noise or smoke before you open any phone.", "Disconnect the battery before working on the board.", "Use plastic tools, never metal, to remove a battery; never bend or pierce it.", "Keep heat tools away from the battery.", "If it smokes: move people away, use tongs and the sand tin only if safe, call the fire service for a fire."],
          words: [["Lithium-ion battery", "the rechargeable battery in phones; it stores a lot of energy and can burn if damaged."], ["Swollen battery", "a battery that has puffed up because gas is building inside; it is dangerous."], ["Short circuit", "when electricity takes a wrong path, for example through a metal tool, causing heat or fire."]],
          slides: [
            { title: "Why lithium batteries are dangerous", bullets: ["Hold a lot of energy", "Damage, heat or a short can start a fire fast", "Smoke is poisonous; fire can restart"] },
            { title: "Warning signs", bullets: ["Swelling: back or screen lifted", "Heat, strange smell", "Hissing, popping or smoke"] },
            { title: "Safe habits", bullets: ["Disconnect the battery first", "Plastic tools only; never bend or pierce", "No heat tools near the battery"] },
            { title: "If it smokes", bullets: ["Move people away; do not breathe the smoke", "Only if safe: tongs, into the sand tin, outside", "Fire you cannot control: get out, call the fire service"] }
          ],
          sources: [NFPA],
          tryIt: "Write your battery safety card in five lines for the wall of your shop: the warning signs, the safe habits, and what to do if a battery smokes. Find out the phone number of your nearest fire service.",
          youCanNow: "spot a dangerous battery, handle batteries safely during a repair, and act safely if one starts to smoke.",
          quickCheck: [
            { objective: "O1", q: "A phone's back cover is lifted because the battery has puffed up. What do you do?", options: ["Press it flat and close the phone", "Charge it to test it", "Pierce it to let the gas out", "Replace it, handling it carefully without bending or piercing"], answer: 3, why: "A swollen battery is dangerous; it must be removed carefully and replaced, never pressed, pierced or charged." },
            { objective: "O1", q: "What should you do first before working on a phone's board?", options: ["Disconnect the battery", "Heat the board", "Charge the phone", "Remove the SIM tray only"], answer: 0, why: "Disconnecting the battery stops shorts that can damage the board or start a fire." }
          ]
        },
        {
          title: "Finding the fault and writing a job card",
          objectives: ["O2"],
          minutes: 6,
          goal: "Find the likely fault with a step-by-step check and record the job on a job card.",
          text: [
            "Start by listening. Ask the customer what happened: dropped, wet, slow, not charging, no sound? When did it start? Then check from the simplest cause to the hardest. Many \"dead\" phones only need a good charger, a clean charging port or a software restart.",
            "A simple order: (1) look for damage, swelling or water marks; (2) try a known good charger and cable; (3) clean the charging port gently with a plastic or wooden pick; (4) restart, and check if the problem is software; (5) only then open the phone and test parts.",
            "Before you start any paid work, write a job card and show it to the customer. It records: the date, the customer's name and phone number, the phone model and IMEI, what is wrong, any damage you see (cracks, dents), what you will do, the agreed price, the expected date, and the customer's signature or a recorded \"yes\". Give the customer a copy or a ticket number. This protects you both.",
            "Example: Kwame in Accra gets a phone that \"won't charge\". He tries a good cable, cleans lint from the port, and it charges. He charges only a small cleaning fee, and the customer comes back for every repair after that."
          ],
          steps: ["Ask what happened and when it started.", "Look for damage, swelling or water marks.", "Try a known good charger and cable; clean the port gently.", "Restart and check for a software problem.", "Write the job card with the fault, damage seen, price and date, and get the customer's yes before you open the phone."],
          words: [["Job card", "a written record of one repair: the phone, the fault, the price, the date and the customer's agreement."], ["IMEI", "the phone's unique 15-digit number; dial *#06# to see it."], ["Software fault", "a problem in the phone's programs, not its parts; often fixed by a restart or update."]],
          slides: [
            { title: "Listen first", bullets: ["What happened? Dropped, wet, slow, no charge?", "When did it start?", "Many \"dead\" phones only need a simple fix"] },
            { title: "Simplest to hardest", bullets: ["Look: damage, swelling, water marks", "Good charger; clean the port gently", "Restart for software; then open and test parts"] },
            { title: "The job card", bullets: ["Customer, phone model, IMEI (dial *#06#)", "Fault, damage seen, work to do", "Price, date, customer's yes; give a copy or ticket"] }
          ],
          tryIt: "Draw your own job card on one page with all the boxes from this lesson. Fill it in for a practice phone (yours or a friend's) with a made-up fault.",
          youCanNow: "check a phone from the simplest cause to the hardest and record every job on a job card before you start.",
          quickCheck: [
            { objective: "O2", q: "A customer says the phone won't charge. What do you check first?", options: ["Replace the board", "A known good charger and cable, and a clean port", "Replace the screen", "Sell them a new phone"], answer: 1, why: "Start with the simplest causes; a bad cable or a dirty port is common." },
            { objective: "O2", q: "Why write damage you see, like a cracked corner, on the job card before you start?", options: ["So the customer pays more", "It is not needed", "To fill space", "So no one later blames you for damage that was already there"], answer: 3, why: "Recording existing damage protects you and the customer from disputes." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Safe work and finding the fault",
        questions: [
          { objective: "O1", q: "Which is a warning sign of a dangerous battery?", options: ["The phone is new", "Swelling, heat, smell, hissing or smoke", "The battery is black", "The phone has a case"], answer: 1, why: "Swelling, heat, smell, noise and smoke are the warning signs." },
          { objective: "O1", q: "Which tool should you use to pry out a battery?", options: ["A plastic tool, slowly", "A metal screwdriver", "A kitchen knife", "Your teeth"], answer: 0, why: "Metal can pierce or short the battery; plastic tools are safer." },
          { objective: "O1", q: "A battery on your bench starts hissing and smoking. What is the right first step?", options: ["Blow on it", "Put it in your pocket", "Move people away and avoid the smoke", "Keep working"], answer: 2, why: "People's safety comes first; the smoke is poisonous." },
          { objective: "O2", q: "Where do you find a phone's IMEI quickly?", options: ["On the charger", "On the SIM card", "In the customer's bag", "By dialling *#06#"], answer: 3, why: "Dialling *#06# shows the IMEI on almost every phone." },
          { objective: "O2", q: "When should the customer agree the price?", options: ["Before you start, written on the job card", "After you finish", "Never", "When they complain"], answer: 0, why: "Agreeing first, in writing, avoids disputes." }
        ]
      }
    },
    {
      name: "Chapter 2: Running an honest, safe business",
      lessons: [
        {
          title: "Protecting your customers' data",
          objectives: ["O3"],
          minutes: 5,
          goal: "Protect each customer's data while their phone is in your shop.",
          text: [
            "A phone holds a person's life: photos, messages, mobile money, bank apps and contacts. Customers trust you with it. One leaked photo or stolen mobile money balance can destroy your shop's name, and in many countries it can break the law.",
            "Before the repair: ask the customer to back up their phone if they can, and to sign out of mobile money and bank apps or remove the SIM card. Most repairs do not need the phone's lock code. If you truly need it to test the phone, ask the customer to unlock it in front of you, or to set a temporary code and change it after. Never ask for a mobile money or bank PIN. No repair ever needs it.",
            "During and after: do not open photos, messages or apps that are not part of the repair. Do not copy anything, and do not let others handle phones. Store phones in a locked drawer. Shred or keep job cards safely, because they hold names and numbers.",
            "Countries have data protection laws and offices, for example Kenya's Office of the Data Protection Commissioner, the Nigeria Data Protection Commission, and Ghana's Data Protection Commission, where businesses that keep personal data must register. Check what your country's office expects from a small business like yours."
          ],
          steps: ["Ask the customer to back up the phone and sign out of money apps, or remove the SIM.", "Do not ask for the lock code unless you truly need it; let the customer unlock it in front of you.", "Never ask for a mobile money or bank PIN.", "Open only what the repair needs; copy nothing.", "Lock phones and job cards away; check your country's data protection rules."],
          words: [["Personal data", "information about a person, such as their name, number, photos and messages."], ["Backup", "a copy of the phone's data saved somewhere else, so nothing is lost if the repair goes wrong."], ["Data protection law", "a law that says how businesses must collect, keep and protect people's personal data."]],
          slides: [
            { title: "A phone holds a life", bullets: ["Photos, messages, contacts", "Mobile money and bank apps", "A leak can end your shop's good name"] },
            { title: "Before the repair", bullets: ["Customer backs up the phone", "Signs out of money apps, or removes the SIM", "Lock code only if truly needed; never a PIN"] },
            { title: "During and after", bullets: ["Open only what the repair needs", "Copy nothing; no one else handles phones", "Lock phones and job cards away"] },
            { title: "Know the law", bullets: ["Kenya: Office of the Data Protection Commissioner", "Nigeria: Nigeria Data Protection Commission", "Ghana: Data Protection Commission; others: your own office"] }
          ],
          sources: [KE_ODPC, NDPC, GH_DPC],
          tryIt: "Write your customer data promise: at least four short lines you will show every customer, such as \"We never ask for your mobile money PIN.\" Write the name of your country's data protection office.",
          youCanNow: "protect your customers' data before, during and after a repair, and know which office sets the rules in your country.",
          quickCheck: [
            { objective: "O3", q: "A technician asks for the customer's mobile money PIN to \"test the phone\". What is true?", options: ["It is needed for every repair", "It is fine if he is honest", "No repair needs it; never ask for it", "Only for screen repairs"], answer: 2, why: "No repair ever needs a mobile money or bank PIN." },
            { objective: "O3", q: "What should the customer do before leaving the phone, if they can?", options: ["Give you all their passwords", "Back up the phone and sign out of money apps", "Leave the phone unlocked forever", "Delete all their contacts"], answer: 1, why: "A backup and signing out of money apps protects them if anything goes wrong." }
          ]
        },
        {
          title: "Pricing repairs, warranties and refusing stolen phones",
          objectives: ["O4", "O5"],
          minutes: 6,
          goal: "Calculate a repair price and write a price list with warranty terms.",
          text: [
            "A fair price covers three things and leaves a profit: the part, your time (labour), and a share of your shop costs, such as rent, electricity, tools and data. Example (figures are examples only): a screen costs NGN 15,000. Your labour is NGN 4,000 and your share of shop costs NGN 1,000. Cost: NGN 20,000. Add NGN 3,000 profit: price NGN 23,000.",
            "Parts come in different qualities. Tell the customer honestly which part you are using (original, good copy or cheap copy) and the price of each. A cheap part that fails in a week costs you your name.",
            "A warranty is your promise: if the same repair fails within a set number of days because of your work or the part, you fix it free. Write how many days, and what is not covered (new drops, water, someone else opening the phone). Put the price list and warranty where customers can see them.",
            "Refuse phones that may be stolen. Do not buy, unlock or strip a phone unless the seller shows proof it is theirs, such as the box with a matching IMEI or a receipt. If a phone looks stolen, do not argue; refuse politely. In many countries, buying stolen goods is a crime."
          ],
          steps: ["Add the part cost, your labour and a share of shop costs.", "Add your profit to get the price.", "Offer part choices honestly, with a price for each.", "Write the warranty days and what is not covered.", "Show the price list; refuse phones without proof of ownership."],
          words: [["Labour", "the payment for your time and skill."], ["Overhead (shop costs)", "costs of running the shop, like rent, power, tools and data, shared across jobs."], ["Warranty", "a written promise to fix the same fault free for a set time."]],
          slides: [
            { title: "What a price covers", bullets: ["Part + labour + share of shop costs", "Then add your profit", "Example: NGN 20,000 cost + NGN 3,000 = NGN 23,000"] },
            { title: "Honest parts", bullets: ["Original, good copy or cheap copy", "Tell the customer which, and each price", "Cheap parts that fail cost your name"] },
            { title: "Your warranty", bullets: ["Same fault fixed free for set days", "Not covered: new drops, water, others opening it", "Show the price list and warranty"] },
            { title: "Refuse stolen phones", bullets: ["Proof: box with matching IMEI, or receipt", "No proof: refuse politely", "Buying stolen goods can be a crime"] }
          ],
          tryIt: "Write your price list for five common repairs: for each, the part cost, labour, shop-cost share, profit, price and warranty days. Use your local currency.",
          youCanNow: "price a repair so it covers all your costs and a profit, write a warranty, and refuse a phone that may be stolen.",
          quickCheck: [
            { objective: "O4", q: "Part GHS 150, labour GHS 60, shop-cost share GHS 20, profit GHS 40. What is the price?", options: ["GHS 210", "GHS 230", "GHS 150", "GHS 270"], answer: 3, why: "150 + 60 + 20 + 40 = 270." },
            { objective: "O5", q: "A young man wants to sell you a phone cheaply but has no box and no receipt. What do you do?", options: ["Refuse politely", "Buy it fast before others do", "Unlock it for him first", "Strip it for parts"], answer: 0, why: "Without proof of ownership the phone may be stolen; refuse." }
          ]
        },
        {
          title: "E-waste, dead batteries and your shop's starter pack",
          objectives: ["O5", "O1"],
          minutes: 5,
          goal: "Store dead batteries and broken parts safely and hand them to a proper collector.",
          text: [
            "Old phones, screens, boards and batteries are electronic waste (e-waste). They contain lead, mercury and other poisons. The WHO says burning e-waste is the most dangerous way to handle it, and harms children and pregnant women most. In 2022 the world made about 62 million tonnes of e-waste, and only 22.3% was documented as properly collected and recycled.",
            "Never burn e-waste to get copper, and never throw batteries in the bin, a fire or a drain. Tape the ends (terminals) of dead batteries, keep them in a closed metal tin of dry sand away from heat, and keep broken screens and boards in a separate labelled box.",
            "Hand them to an e-waste collector or recycler. Ask your county or city council, the environment agency, or phone sellers and network shops which collectors are approved where you are. Keep a note of what you handed over and when.",
            "Now make your starter pack: your price list, your job card, your data promise and your safety card with the battery rules and where your e-waste goes."
          ],
          steps: ["Tape the terminals of dead batteries.", "Keep them in a closed metal tin of dry sand, away from heat.", "Keep broken screens and boards in a labelled box.", "Ask the council or environment agency for an approved collector.", "Hand them over and write down what and when. Never burn or dump e-waste."],
          words: [["E-waste", "old or broken electronic items and parts, such as phones, screens, boards and batteries."], ["Terminals", "the metal ends of a battery where it connects; taping them stops shorts."], ["Recycler", "a business that safely takes apart e-waste and recovers materials."]],
          slides: [
            { title: "E-waste is poisonous", bullets: ["Lead, mercury and other poisons", "Burning is the most dangerous (WHO)", "Children and pregnant women are harmed most"] },
            { title: "Store it safely", bullets: ["Tape dead battery terminals", "Closed metal tin of dry sand, away from heat", "Screens and boards in a labelled box"] },
            { title: "Hand it over", bullets: ["Ask the council or environment agency", "Use an approved collector or recycler", "Note what you gave and when"] },
            { title: "Your shop starter pack", bullets: ["Price list with warranty", "Job card; customer data promise", "Safety card: battery rules and e-waste plan"] }
          ],
          sources: [WHO_EWASTE, NFPA],
          tryIt: "Make your shop's starter pack, as described in the final task. Add one line to your safety card naming who will collect your e-waste, or the office you will ask.",
          youCanNow: "store and hand over e-waste safely and put together a starter pack for an honest, safe phone repair shop.",
          quickCheck: [
            { objective: "O5", q: "What is the safest way to get rid of dead phone batteries?", options: ["Burn them", "Throw them in the bin", "Tape the terminals, store them in a sand tin, give them to an approved collector", "Bury them in the yard"], answer: 2, why: "Taping, safe storage and an approved collector stop fires and pollution." },
            { objective: "O5", q: "According to the WHO, which is the most dangerous way to handle e-waste?", options: ["Storing it in a box", "Taking it to a recycler", "Writing it down", "Burning it"], answer: 3, why: "The WHO says burning e-waste is the most hazardous practice because of its toxic fumes." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Running an honest, safe business",
        questions: [
          { objective: "O3", q: "A repair truly needs the phone unlocked to test it. What is the best way?", options: ["Ask the customer to unlock it in front of you, or set a temporary code", "Ask for their bank PIN", "Guess the code", "Reset the phone without asking"], answer: 0, why: "The customer keeps control of their code, and no money PIN is ever involved." },
          { objective: "O3", q: "What should you do with job cards that hold customers' names and numbers?", options: ["Throw them on the street", "Post them online", "Keep them locked away or shred them when no longer needed", "Give them to other shops"], answer: 2, why: "Job cards hold personal data, so they must be kept safe." },
          { objective: "O4", q: "Which cost do new repairers most often forget in their price?", options: ["The part", "Their share of shop costs like rent and power", "The screen", "The customer's name"], answer: 1, why: "Shop costs like rent, power and data must be shared across jobs, or you lose money." },
          { objective: "O4", q: "What should a warranty say?", options: ["Nothing; just smile", "That every problem is free forever", "Only the price", "How many days, and what is not covered"], answer: 3, why: "A clear warranty states the days and the exclusions." },
          { objective: "O5", q: "Why is buying a phone without proof of ownership a problem?", options: ["It may be stolen, and buying stolen goods can be a crime", "It is always too expensive", "Phones without boxes do not work", "It is not a problem"], answer: 0, why: "Without proof, the phone may be stolen, which brings legal trouble." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Starting a Phone Repair Business",
    questions: [
      { objective: "O1", q: "Where is the best place for your repair bench?", options: ["Next to the cooking fire", "Dry, well lit, away from fuel and water", "Outside in the rain", "On top of a fuel container"], answer: 1, why: "A dry, well-lit bench away from fuel and water is safest." },
      { objective: "O1", q: "What should you wear when opening a cracked screen?", options: ["Safety glasses", "Nothing special", "Gloves made of metal", "Sunglasses only at night"], answer: 0, why: "Safety glasses protect your eyes from glass pieces." },
      { objective: "O1", q: "Why must you never use a hot air tool near a battery?", options: ["It wastes electricity", "It makes the screen dirty", "Heat can make the battery catch fire", "It is too slow"], answer: 2, why: "Overheating a lithium battery can start a fire." },
      { objective: "O1", q: "What should you NEVER do to a swollen battery?", options: ["Remove it carefully", "Store it in a sand tin", "Tell the customer", "Press it flat or pierce it"], answer: 3, why: "Pressing or piercing a swollen battery can make it burn." },
      { objective: "O2", q: "What is the right order of checks?", options: ["Open the phone first, then ask questions", "Simplest causes first: look, charger, port, restart, then open", "Replace the board first", "Charge the customer first"], answer: 1, why: "Starting simple saves time and money and avoids needless opening." },
      { objective: "O2", q: "Which item belongs on a job card?", options: ["The customer's mobile money PIN", "The customer's bank password", "The phone model, IMEI, fault, damage seen, price and date", "The customer's home keys"], answer: 2, why: "A job card records the job, not secrets like PINs or passwords." },
      { objective: "O2", q: "A phone \"won't charge\". You clean lint from the port and it charges. What do you charge?", options: ["The price of a new board", "A fair small fee for the work you did", "Nothing, and refuse future jobs", "The price of a new phone"], answer: 1, why: "Honest pricing for the real work builds trust and repeat customers." },
      { objective: "O2", q: "Why get the customer's yes before opening the phone?", options: ["So they agree the work and price, which avoids disputes", "It is not needed", "So you can charge more later", "To learn their PIN"], answer: 0, why: "Written agreement protects both of you." },
      { objective: "O3", q: "Which does a phone repair never need?", options: ["The phone model", "The fault description", "The customer's phone number", "The customer's mobile money PIN"], answer: 3, why: "No repair ever needs a mobile money or bank PIN." },
      { objective: "O3", q: "While fixing a screen, you see the customer's photo gallery. What do you do?", options: ["Open only what the repair needs and look at nothing else", "Look through the photos", "Copy them to your phone", "Show them to a friend"], answer: 0, why: "Respecting privacy means opening only what the repair needs." },
      { objective: "O3", q: "Which office sets data protection rules in Nigeria?", options: ["The fire service", "The Nigeria Data Protection Commission", "The football federation", "No office"], answer: 1, why: "The Nigeria Data Protection Commission was set up under the Nigeria Data Protection Act 2023." },
      { objective: "O3", q: "Where should phones waiting for repair be kept?", options: ["On the counter for anyone to take", "In a locked drawer", "With a neighbour", "Outside the shop"], answer: 1, why: "Locking phones away protects them and the data on them." },
      { objective: "O4", q: "Part KES 2,500, labour KES 800, shop-cost share KES 200, profit KES 500. What is the price?", options: ["KES 3,300", "KES 3,500", "KES 4,000", "KES 2,500"], answer: 2, why: "2,500 + 800 + 200 + 500 = 4,000." },
      { objective: "O4", q: "A customer can pay for a cheap copy screen or an original. What is honest?", options: ["Tell them which part, and each price, and let them choose", "Say the copy is original", "Fit the cheapest and charge for the original", "Refuse to say"], answer: 0, why: "Honest part choices build trust and avoid complaints." },
      { objective: "O4", q: "Which is usually NOT covered by a repair warranty?", options: ["The same part failing from your work", "A fault in the part you fitted", "Your mistake in fitting", "A new drop or water damage"], answer: 3, why: "New damage after the repair is normally not covered; write that on your warranty." },
      { objective: "O5", q: "A seller has a box with an IMEI that matches the phone (dial *#06#) and a receipt. What does this show?", options: ["Proof that the phone is likely theirs", "That the phone is stolen", "Nothing at all", "That it is broken"], answer: 0, why: "A matching IMEI and a receipt are proof of ownership." },
      { objective: "O5", q: "Why should you never burn old boards to get copper?", options: ["Copper is worthless", "It takes too long", "The fumes are poisonous, harming children and pregnant women most", "It is too quiet"], answer: 2, why: "Burning e-waste gives toxic fumes, the most hazardous practice according to the WHO." },
      { objective: "O5", q: "How should you store dead batteries before collection?", options: ["Loose in a drawer with tools", "Terminals taped, in a closed metal tin of dry sand, away from heat", "In a bucket of water in the sun", "In your pocket"], answer: 1, why: "Taping and a sand tin stop shorts and fires." },
      { objective: "O5", q: "Who can tell you about approved e-waste collectors?", options: ["Only your customers", "Nobody", "A random roadside burner", "The council or environment agency"], answer: 3, why: "Councils and environment agencies know approved collectors." },
      { objective: "O1", q: "A battery starts burning and you cannot control it. What do you do?", options: ["Get everyone out and call the fire service", "Keep repairing", "Pour fuel on it", "Pick it up with your hands"], answer: 0, why: "Uncontrolled fire means getting out and calling the fire service." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Pre-Test: What Do You Already Know?", from: [0, 3, 4, 5, 8, 10, 12, 14, 16] },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part of your starter pack and try again.",
    criteria: [
      { name: "Battery safety card", objective: "O1", notYet: "No card, or it misses the warning signs or what to do if a battery smokes.", meets: "The card lists the warning signs, the safe habits and what to do if a battery smokes or burns.", exceeds: "It also shows the fire service number and where the sand tin is kept." },
      { name: "Job card", objective: "O2", notYet: "The job card is missing the fault, the price or the customer's agreement.", meets: "It records the customer, phone model, IMEI, fault, damage seen, work, price, date and the customer's yes.", exceeds: "It also has a ticket number and a box for the warranty end date." },
      { name: "Customer data promise", objective: "O3", notYet: "No promise, or it asks for a PIN or password.", meets: "At least four clear lines, including never asking for a money PIN and copying nothing.", exceeds: "It also names the country's data protection office and how job cards are kept safe." },
      { name: "Price list", objective: "O4", notYet: "Prices are guesses, or the arithmetic is wrong.", meets: "At least five repairs, each with part, labour, shop costs, profit, price and warranty days, adding up correctly.", exceeds: "It also shows part choices (original or copy) and what the warranty does not cover." },
      { name: "E-waste and stolen phones", objective: "O5", notYet: "No plan, or the plan includes burning or dumping.", meets: "Batteries and parts are stored safely and handed to a named collector or office; phones without proof are refused.", exceeds: "It also keeps a record of what was handed over and when." }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Learners who report using a job card and a price list in their shop within 30 days (follow-up survey)",
      "Learners who report no battery fires or data complaints in their shop over 90 days",
      "Learners who report handing e-waste to a collector instead of burning or dumping it within 90 days"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A basic phone with a calculator",
      "Paper and pen for the bench plan, job card, price list, data promise and safety card",
      "If possible, an old phone (with the battery already removed safely by a trainer) for practice with a job card",
      "About 60 minutes in total, in short sessions"
    ],
    facilitatorNotes: [
      "In a youth or vocational programme: take the pre-test together, then one chapter per session; pair the course with hands-on practice from a qualified technician.",
      "Never let learners practise on swollen or damaged batteries; show pictures instead.",
      "Before the course, find out which approved e-waste collectors and which data protection office serve your area, so learners can write real names.",
      "Never ask learners to share PINs or passwords in class.",
      "Score the final task with the rubric, and give feedback on one Not yet row at a time."
    ]
  }
};
