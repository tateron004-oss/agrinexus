"use strict";

// Koach Learn course: Workforce Development -> "Warehouse and Logistics Careers" (wave 1, 30 October 2026).
// Prepares learners for entry-level warehouse work and for the MSSC Certified Logistics Associate (CLA) and Certified
// Logistics Technician (CLT) credentials. It does not grant any credential. Forklift driving is covered in "Forklift Operator Basics".
// Facts checked 30 October 2026 on bls.gov, osha.gov and msscusa.org.

const BLS_MOVERS = { name: "U.S. Bureau of Labor Statistics: Hand laborers and material movers", url: "https://www.bls.gov/ooh/transportation-and-material-moving/hand-laborers-and-material-movers.htm" };
const BLS_CLERKS = { name: "U.S. Bureau of Labor Statistics: Material recording clerks", url: "https://www.bls.gov/ooh/office-and-administrative-support/material-recording-clerks.htm" };
const MSSC_CLT = { name: "MSSC: Certified Logistics Technician (CLT) and Certified Logistics Associate (CLA)", url: "https://www.msscusa.org/certified-logistics-technician-clt/" };
const OSHA_OUTREACH = { name: "OSHA Outreach Training Program (10-hour and 30-hour classes)", url: "https://www.osha.gov/training/outreach" };
const OSHA_WAREHOUSE = { name: "OSHA: Warehousing", url: "https://www.osha.gov/warehousing" };
const OSHA_WH_HAZARDS = { name: "OSHA: Warehousing hazards and solutions", url: "https://www.osha.gov/warehousing/hazards-solutions" };
const OSHA_HEAT = { name: "OSHA: Heat exposure", url: "https://www.osha.gov/heat-exposure" };
const OSHA_178 = { name: "OSHA 29 CFR 1910.178: Powered industrial trucks (trailer brakes and wheel chocks)", url: "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.178" };
const AJC = { name: "CareerOneStop: find an American Job Center near you", url: "https://www.careeronestop.org/LocalHelp/AmericanJobCenters/find-american-job-centers.aspx" };

module.exports = {
  id: "warehouse-logistics",
  category: "Workforce Development",
  name: "Warehouse and Logistics Careers",
  skills: "Knowing warehouse jobs and credentials, Finding items by SKU and location, Checking in a shipment, Building a safe pallet, Working safely at pace",
  outcome: "name the main warehouse jobs and the credentials that help you get them, follow goods from receiving to shipping, find an item using its SKU and location code, check a delivery against its paperwork and record any problems, plan a safe pallet load, and make a plan to get hired.",
  about: [
    "Warehouses and distribution centers move the goods we buy every day, and they hire all year. This course is for job seekers, people coming home from prison, veterans and anyone who wants a steady first job in logistics with room to grow.",
    "You will learn the jobs in a warehouse, how goods flow from the truck to the shelf to the customer, how to read location codes, how to check in a delivery and count stock accurately, how to build a safe pallet, and how to stay safe while keeping up the pace.",
    "This course prepares you. It does not give you a credential. If you want one, the Manufacturing Skill Standards Council (MSSC) offers the Certified Logistics Associate (CLA) and Certified Logistics Technician (CLT). Forklift driving needs employer training; see our course \"Forklift Operator Basics\".",
    "Each lesson takes about five minutes and ends with a \"Try it now\" task you can do with paper and a pencil. There is a knowledge check after each chapter and a 20-question quiz at the end."
  ],
  finalTask: "Make a warehouse job starter packet: a receiving report for a practice delivery (counts checked against the packing list, with every shortage, overage and damage written up), a pick list you put in walking order using location codes, a sketch of a safe pallet load plan with weights and layers, and a one-page plan to get hired with three employers or programs, the credential you will aim for, and two honest résumé lines.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Adults seeking a first warehouse, distribution center or logistics job: job seekers, people coming home from prison, veterans and service members with supply experience, young adults and career changers.",
    startingPoint: "Can count, read numbers and labels, and follow instructions. Little experience with location codes, receiving paperwork, inventory counts or pallet building. Some have done physical work but not learned safe lifting.",
    gap: "Warehouses hire many people, but new workers who make counting mistakes, mix up locations or get hurt do not last. Learners need the core habits of accuracy and safety, and a clear path to a credential and promotion, so they get hired and stay.",
    constraints: [
      "Reading level: plain words and short sentences; every term explained",
      "Math: whole numbers, simple adding and multiplying; practice numbers are made up",
      "No equipment needed: practice with paper, household items or boxes",
      "No forklift or powered equipment use in this course",
      "Devices: a phone or library computer for official pages and job searches"
    ],
    prerequisites: "None. \"Workplace Safety Basics (OSHA)\" and \"Forklift Operator Basics\" make good next courses."
  },
  // ---- ADDIE: Design ----
  objectives: [
    { id: "O1", condition: "Given a list of warehouse job ads", action: "identify the job roles, what each one does and the credentials that help you get hired", standard: "naming at least four roles and one real credential with who grants it" },
    { id: "O2", condition: "Given a pick list with SKUs and location codes", action: "find each item's location and put the picks in walking order", standard: "with every location read correctly" },
    { id: "O3", condition: "Given a practice delivery and its packing list", action: "check in the shipment and write up any shortage, overage or damage", standard: "with every count and note correct" },
    { id: "O4", condition: "Given boxes with their weights", action: "plan a safe pallet load with heavy items low and within the weight limit", standard: "meeting every rule on the pallet checklist" },
    { id: "O5", condition: "Given a warehouse task or hazard", action: "choose the safe way to lift, move or report it while keeping pace", standard: "getting at least 4 of 5 situations right" }
  ],
  chapters: [
    {
      name: "Chapter 1: How a warehouse works",
      lessons: [
        {
          title: "Warehouse jobs and the credentials that help",
          objectives: ["O1"],
          minutes: 5,
          goal: "Identify the main warehouse jobs and one credential that can help you get hired.",
          text: [
            "Common entry jobs: material handler or warehouse associate (moving goods), picker and packer (filling customer orders), stocker or order filler, shipping and receiving clerk (checking goods in and out), inventory clerk (counting and fixing records) and forklift operator. With experience you can become a lead, a supervisor or an inventory or logistics coordinator.",
            "Most entry jobs need no degree. People usually learn on the job, often in a month or less, and learn safety rules based on OSHA standards. Employers look for people who show up on time, count carefully and work safely.",
            "Credentials can help you stand out. The Manufacturing Skill Standards Council (MSSC) offers the Certified Logistics Associate (CLA) and the Certified Logistics Technician (CLT); you pass the CLA before you take the CLT. OSHA's 10-hour Outreach class gives you a completion card; it is voluntary, and OSHA says it is not a certification. Forklift operation always needs the employer's own training and evaluation.",
            "Pay and job openings differ by place. Check the official Occupational Outlook Handbook at bls.gov for pay and outlook, and real job ads near you."
          ],
          words: [["Logistics", "planning and moving goods from where they are made to where they are needed."], ["Distribution center", "a large warehouse that ships goods out to stores or customers."], ["Credential", "a certificate or card that shows you passed a test or finished training."], ["MSSC", "the Manufacturing Skill Standards Council, a national group that gives the CLA and CLT credentials."]],
          slides: [
            { title: "Entry jobs", bullets: ["Material handler, picker, packer, stocker", "Shipping and receiving clerk, inventory clerk", "Forklift operator (with employer training)"] },
            { title: "How people start", bullets: ["Usually no degree needed", "Learn on the job, often in a month or less", "On time, careful counts, safe work"] },
            { title: "Credentials that help", bullets: ["MSSC: CLA first, then CLT", "OSHA 10-hour card: voluntary, not a certification", "Forklift: employer training and evaluation"] },
            { title: "Check the facts", bullets: ["Pay and outlook: bls.gov Occupational Outlook Handbook", "Real job ads near you"] }
          ],
          sources: [BLS_MOVERS, BLS_CLERKS, MSSC_CLT, OSHA_OUTREACH],
          tryIt: "Find three warehouse job ads near you. For each, write the job title, the shift, what the job does in one line, and any credential or skill it asks for. Then open the MSSC CLT page and write who grants the CLA and CLT.",
          youCanNow: "name the main warehouse jobs, what each does, and the credentials that can help you get hired.",
          quickCheck: [
            { objective: "O1", q: "Which job checks goods coming in and going out against the paperwork?", options: ["Shipping and receiving clerk", "Packer", "Forklift mechanic", "Security guard"], answer: 0, why: "Shipping and receiving clerks track incoming and outgoing shipments and check them." },
            { objective: "O1", q: "Who grants the Certified Logistics Technician (CLT) credential?", options: ["OSHA", "The IRS", "The Manufacturing Skill Standards Council (MSSC)", "Any staffing agency"], answer: 2, why: "The CLT, and the CLA that comes first, are MSSC credentials." }
          ]
        },
        {
          title: "The flow of goods and location codes",
          objectives: ["O2"],
          minutes: 5,
          goal: "Find an item using its SKU and location code, and put picks in walking order.",
          text: [
            "Goods move through a warehouse in the same order every day. Receiving: goods arrive and are checked. Putaway: they are stored in a set place. Storage. Picking: workers pull items for an order. Packing. Shipping: orders leave on trucks.",
            "Every product has a SKU (stock keeping unit), a code for that exact item, for example a blue shirt in size large. Every storage spot has a location code. Many warehouses use zone, aisle, rack (or bay) and level, so A-12-03-B could mean zone A, aisle 12, rack 3, level B. Your warehouse will teach you its own pattern.",
            "Most warehouses use scanners. You scan the location and the item so the computer system (a warehouse management system) knows what moved. If the item in the spot does not match the SKU, stop and tell your lead; do not grab something that looks close.",
            "To save steps, pick in walking order: sort your list by aisle, then by rack, so you walk each aisle once."
          ],
          steps: ["Read the SKU and the location code for each line.", "Split the location code into its parts: zone, aisle, rack, level.", "Sort the list by zone, then aisle, then rack.", "At each spot, scan or check that the SKU matches before you pick.", "If it does not match or the spot is empty, report it."],
          words: [["SKU", "stock keeping unit: a code for one exact product."], ["Location code", "the address of a storage spot, such as zone, aisle, rack and level."], ["Putaway", "moving received goods to their storage spot."], ["Picking", "pulling items from storage to fill an order."], ["Warehouse management system (WMS)", "the computer system that tracks where every item is."]],
          slides: [
            { title: "The flow of goods", bullets: ["Receiving, putaway, storage", "Picking, packing, shipping"] },
            { title: "Codes you use", bullets: ["SKU: the exact item", "Location: zone, aisle, rack, level", "Example: A-12-03-B"] },
            { title: "Pick right, pick smart", bullets: ["Scan the spot and the item", "Wrong item or empty spot? Report it", "Sort by aisle so you walk each aisle once"] }
          ],
          sources: [BLS_CLERKS],
          tryIt: "Practice only. Put this pick list in walking order (zone, aisle, rack, level): B-04-02-A, A-12-03-B, A-03-01-C, B-01-05-A, A-12-01-A. Then write what each part of A-12-03-B means. Check: the order starts A-03-01-C, A-12-01-A, A-12-03-B.",
          youCanNow: "read a location code, find an item by its SKU and put a pick list in walking order.",
          quickCheck: [
            { objective: "O2", q: "What is a SKU?", options: ["A type of forklift", "A code for one exact product", "A shipping truck", "A safety rule"], answer: 1, why: "A stock keeping unit is a code for one exact item." },
            { objective: "O2", q: "You go to a location and the item does not match the SKU on your list. What do you do?", options: ["Take something that looks close", "Skip the line and say nothing", "Take two of something else", "Stop and report it to your lead"], answer: 3, why: "A mismatch must be reported so the order and the records stay right." }
          ]
        },
        {
          title: "Checking in a shipment and counting stock",
          objectives: ["O3"],
          minutes: 6,
          goal: "Check a delivery against its packing list and write up any problem.",
          text: [
            "When a truck arrives, receiving checks that what came is what was ordered. You compare the goods with the packing list (and the purchase order, if you have it). The driver also hands over a bill of lading, the shipping paper you sign.",
            "Count every line. Check the SKU, the quantity and the condition. If a box is crushed, wet or open, take a photo if your site allows and write it down. If you got fewer than listed, it is a shortage; more is an overage. Write every problem on the paperwork before you sign, as your site's process says. Signing a clean receipt can mean you accepted everything as fine.",
            "Inventory counts work the same way. A cycle count is counting a few locations each day instead of the whole warehouse at once. If your count does not match the system, count again, then report it. Accuracy matters more than speed here."
          ],
          steps: ["Get the packing list (and purchase order if you have it).", "Count each line: right SKU, right quantity.", "Check the condition of every box.", "Write each shortage, overage or damage on the paperwork.", "Follow your site's process before signing the bill of lading.", "Report problems to your lead."],
          words: [["Packing list", "a list of what is in a shipment."], ["Purchase order (PO)", "the buyer's order showing what was bought and how many."], ["Bill of lading (BOL)", "the shipping paper the carrier gives; signing it says you received the goods."], ["Shortage", "fewer items arrived than the paperwork says."], ["Overage", "more items arrived than the paperwork says."], ["Cycle count", "counting a few locations at a time to keep records right."]],
          slides: [
            { title: "Receiving checks", bullets: ["Right SKU", "Right quantity", "Good condition"] },
            { title: "Problems to write up", bullets: ["Shortage: fewer than listed", "Overage: more than listed", "Damage: crushed, wet or open"] },
            { title: "Before you sign", bullets: ["Write every problem down", "Follow your site's process", "A clean signature can mean all was fine"] },
            { title: "Counting stock", bullets: ["Cycle count: a few spots each day", "No match? Count again, then report", "Accuracy before speed"] }
          ],
          sources: [BLS_CLERKS],
          tryIt: "Practice only. The packing list says: SKU 1001, 12 cases; SKU 1002, 8 cases; SKU 1003, 20 cases. You count 12 of 1001, 6 of 1002, and 21 of 1003, with one 1003 case crushed. Write a receiving report: each line, what was expected, what came, and the problem. Answer: 1002 short 2; 1003 over 1 and 1 damaged.",
          youCanNow: "check a delivery against its packing list and write up shortages, overages and damage.",
          quickCheck: [
            { objective: "O3", q: "The packing list says 10 cases, but 8 arrived. What is this called?", options: ["An overage", "A shortage", "A cycle count", "A putaway"], answer: 1, why: "Fewer items than the paperwork lists is a shortage." },
            { objective: "O3", q: "One box in a delivery is wet and torn. What do you do?", options: ["Note the damage on the paperwork before signing, as your site's process says", "Sign the paper and say nothing", "Throw the box away", "Hide it at the back"], answer: 0, why: "Damage must be written up so it can be claimed and not blamed on the warehouse." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: How a warehouse works",
        questions: [
          { objective: "O1", q: "What do you need before you operate a forklift at a warehouse?", options: ["Only an online card", "Nothing", "A car license", "The employer's own training and evaluation"], answer: 3, why: "OSHA requires the employer to train and evaluate every forklift operator." },
          { objective: "O1", q: "What is true about the OSHA 10-hour card?", options: ["It is a forklift license", "It is voluntary training and not a certification", "It is required by law for every job", "It is issued by MSSC"], answer: 1, why: "OSHA says Outreach training is voluntary and is not a certification." },
          { objective: "O2", q: "In the code A-12-03-B, what is 12 most likely?", options: ["The aisle", "The price", "The SKU", "The weight"], answer: 0, why: "In a zone-aisle-rack-level pattern, the second part is the aisle." },
          { objective: "O2", q: "Which step comes right after receiving?", options: ["Shipping", "Packing", "Putaway", "Picking"], answer: 2, why: "After goods are checked in, they are put away in their storage spot." },
          { objective: "O3", q: "Your cycle count shows 14, but the system says 16. What do you do first?", options: ["Change the system to 14", "Write 16 so it matches", "Ignore it", "Count again, then report it if it still does not match"], answer: 3, why: "Recount first; if it still does not match, report it so it can be checked." }
        ]
      }
    },
    {
      name: "Chapter 2: Working safely and getting hired",
      lessons: [
        {
          title: "Safe lifting and warehouse hazards",
          objectives: ["O5"],
          minutes: 5,
          goal: "Choose the safe way to lift, move and report hazards in a warehouse.",
          text: [
            "OSHA names the main warehouse hazards: forklifts and other powered trucks, lifting and repetitive strain, material handling, chemicals, slips, trips and falls, and robots and conveyors. The most common injuries are strains from lifting and being struck by forklifts.",
            "Lift smart. Plan the lift and the path. Get close to the load, bend your knees, keep your back straight and the load near your body, and do not twist: turn with your feet. Use a cart, a hand truck or a pallet jack when you can. For heavy or awkward items, ask for a team lift.",
            "Around equipment: stay in walkways, make eye contact with forklift drivers, and never walk under raised forks. Keep hands away from moving conveyors. In heat, drink water often, take your breaks and tell someone if you feel dizzy or sick.",
            "Pace matters, but never take a shortcut that is unsafe. Report hazards like spills, damaged racks or blocked exits to your lead right away."
          ],
          steps: ["Plan: how heavy, where to, is the path clear?", "Get close, bend your knees, back straight.", "Lift with your legs, load close to your body.", "Turn with your feet; do not twist.", "Use a cart or pallet jack, or ask for a team lift, for heavy loads.", "Report hazards right away."],
          words: [["Ergonomics", "fitting the work to the body to prevent strain and injury."], ["Pallet jack", "a hand-pushed or powered tool that lifts and moves pallets a short way."], ["Team lift", "two or more people lifting one heavy or awkward item together."], ["Heat illness", "sickness from working in heat, such as heat exhaustion or heat stroke."]],
          slides: [
            { title: "Main warehouse hazards", bullets: ["Forklifts and powered trucks", "Lifting and repetitive strain", "Slips, trips, falls, conveyors, heat"] },
            { title: "Lift smart", bullets: ["Plan, get close, bend your knees", "Load close; turn with your feet", "Cart, pallet jack or team lift for heavy loads"] },
            { title: "Around equipment", bullets: ["Stay in walkways; eye contact with drivers", "Never under raised forks", "Hands away from moving conveyors"] },
            { title: "Safe pace", bullets: ["Water and breaks in the heat", "No unsafe shortcuts", "Report hazards right away"] }
          ],
          sources: [OSHA_WAREHOUSE, OSHA_WH_HAZARDS, OSHA_HEAT],
          tryIt: "Practice with an empty or lightly packed box at home. Lift it using every step, and say each step out loud. Then write three hazards you might see in a warehouse and what you would do about each one.",
          youCanNow: "lift and move items safely and report warehouse hazards the right way.",
          quickCheck: [
            { objective: "O5", q: "You need to turn while carrying a box. How do you do it?", options: ["Twist at the waist", "Turn with your feet", "Throw the box", "Lift it over your head first"], answer: 1, why: "Turning with your feet protects your back; twisting while lifting causes injury." },
            { objective: "O5", q: "You see a forklift coming down your aisle. What is safest?", options: ["Walk behind it quickly", "Step under the raised forks", "Stay in the walkway and make eye contact with the driver", "Wave and keep walking in its path"], answer: 2, why: "Walkways and eye contact help the driver see you and keep you out of its path." }
          ]
        },
        {
          title: "Building a safe pallet load",
          objectives: ["O4"],
          minutes: 6,
          goal: "Plan a pallet load with heavy items low, even layers and a total within the weight limit.",
          text: [
            "A good pallet arrives in one piece and keeps people safe. First check the pallet itself: no broken boards or nails sticking out.",
            "Heavy boxes go on the bottom, lighter ones on top. Make even, flat layers. Keep boxes inside the pallet's edges (no hanging over). Turn every other layer so the boxes cross over each other (this is called interlocking); it helps the stack hold together. Keep under your site's height and weight limits.",
            "Add up the weight. Example (practice only): 20 boxes at 25 lb each is 500 lb, plus a pallet of about 40 lb is 540 lb. Check it is under the limit for the pallet, the rack and the equipment.",
            "Wrap the load with stretch wrap, tight from bottom to top, and wrap it to the pallet. Put labels facing out where they can be scanned. Before trucks are loaded, the trailer's brakes are set and its wheels are chocked; loads are spread evenly inside the trailer."
          ],
          steps: ["Check the pallet: no broken boards or nails.", "Heaviest boxes on the bottom layer.", "Even layers, inside the edges, interlocked.", "Add up the total weight and check the limits.", "Stretch wrap tightly, bottom to top, including the pallet.", "Labels facing out."],
          words: [["Pallet", "a flat wooden or plastic base that goods are stacked on so they can be moved together."], ["Interlocking", "turning each layer of boxes so they overlap the layer below."], ["Overhang", "boxes hanging over the edge of the pallet."], ["Stretch wrap", "thin plastic film wrapped around a load to hold it together."]],
          slides: [
            { title: "Start right", bullets: ["Check the pallet for broken boards and nails", "Heaviest boxes on the bottom"] },
            { title: "Stack right", bullets: ["Even, flat layers", "No overhang", "Interlock the layers"] },
            { title: "Check the weight", bullets: ["Boxes x weight, plus the pallet", "Under the pallet, rack and equipment limits"] },
            { title: "Finish right", bullets: ["Wrap tight, bottom to top", "Labels facing out"] }
          ],
          sources: [OSHA_WH_HAZARDS, OSHA_178],
          tryIt: "Practice only. You have 8 boxes of 50 lb, 12 boxes of 20 lb and 6 boxes of 10 lb. Sketch the pallet from the side: which boxes go on which layer. Add up the total weight with a 40 lb pallet and check it is under a 1,000 lb limit. Answer: 400 + 240 + 60 + 40 = 740 lb.",
          youCanNow: "plan a safe pallet load with heavy items low, even layers and a total within the limit.",
          quickCheck: [
            { objective: "O4", q: "Where do the heaviest boxes go on a pallet?", options: ["On the top layer", "Hanging over the edge", "In the middle layer only", "On the bottom layer"], answer: 3, why: "Heavy items low keep the load stable and protect lighter boxes." },
            { objective: "O4", q: "Practice: 30 boxes at 20 lb on a 40 lb pallet. What is the total weight?", options: ["640 lb", "600 lb", "540 lb", "60 lb"], answer: 0, why: "30 x 20 = 600 lb, plus the 40 lb pallet = 640 lb." }
          ]
        },
        {
          title: "Getting hired and moving up",
          objectives: ["O1", "O5"],
          minutes: 5,
          goal: "Write a plan to get hired with employers, a credential goal and honest résumé lines.",
          text: [
            "Where to look: large retailers' and shippers' career sites, local job boards, staffing agencies and your local American Job Center, which can also help pay for training and credentials in some cases. Many warehouses hire people with records; ask the job center about second-chance employers.",
            "What employers want: being on time, careful counting, safe habits and steady pace. Warehouses often measure your rate, such as picks per hour. Meet it by working smart (walking order, scanning carefully) and never by skipping safety.",
            "Make your résumé match the job. Use action words and real examples: \"Counted and checked deliveries against packing lists\" or \"Completed warehouse safety and logistics training (Koach Learn), 2026\". Veterans: supply, motor pool and logistics duties count, so put them in everyday words.",
            "Plan your growth. A credential like the MSSC CLA, then CLT, and employer forklift training can lead to higher-paid roles such as lead, inventory control or logistics coordinator."
          ],
          steps: ["List three employers or programs near you, including your American Job Center.", "Pick a credential goal (for example the MSSC CLA) and a target date.", "Write two honest résumé lines from this course or past work.", "Practice a 30-second answer: \"How do you keep accurate and safe at a fast pace?\""],
          words: [["Rate", "how much work you do in a set time, such as picks per hour."], ["American Job Center", "a free public office that helps people find jobs and training."], ["Second-chance employer", "a business that hires people with criminal records."]],
          slides: [
            { title: "Where to look", bullets: ["Company career sites and job boards", "Staffing agencies", "Your local American Job Center"] },
            { title: "What employers want", bullets: ["On time, accurate, safe", "Meet the rate by working smart", "Never by skipping safety"] },
            { title: "Your résumé", bullets: ["Action words and real examples", "Honest about training and credentials", "Veterans: translate supply and logistics duties"] },
            { title: "Move up", bullets: ["MSSC CLA, then CLT", "Employer forklift training", "Lead, inventory control, coordinator"] }
          ],
          sources: [AJC, MSSC_CLT, BLS_MOVERS],
          tryIt: "Write your hiring plan: three employers or programs near you, your credential goal and date, two honest résumé lines, and your 30-second answer to \"How do you stay accurate and safe at a fast pace?\" Read the answer out loud.",
          youCanNow: "write a plan to get hired in a warehouse, with a credential goal and honest résumé lines.",
          quickCheck: [
            { objective: "O5", q: "You are behind your picks-per-hour rate. What is the right way to catch up?", options: ["Skip scanning to go faster", "Run in the aisles", "Pick in walking order and scan carefully", "Climb the racks instead of using a ladder"], answer: 2, why: "Working smart saves time; unsafe shortcuts cause injuries and errors." },
            { objective: "O1", q: "Which résumé line is honest and strong?", options: ["\"MSSC CLT certified\" (before you have passed it)", "\"Hard worker\"", "\"Forklift certified\" (with no employer evaluation)", "\"Counted and checked deliveries against packing lists\""], answer: 3, why: "It uses an action word and a real task, and claims nothing you do not have." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Working safely and getting hired",
        questions: [
          { objective: "O5", q: "A box is too heavy to lift alone. What do you do?", options: ["Lift it fast before it hurts", "Use a cart or pallet jack, or ask for a team lift", "Drag it with your back bent", "Leave it in the aisle"], answer: 1, why: "Use equipment or a team lift for heavy loads to prevent back injuries." },
          { objective: "O5", q: "You see a spill in an aisle. What is the right action?", options: ["Walk around it and say nothing", "Wait for someone else to see it", "Keep people away and report it right away", "Cover it with a box"], answer: 2, why: "Report hazards right away so they are cleaned up before someone slips." },
          { objective: "O4", q: "What does interlocking the layers on a pallet do?", options: ["Helps the stack hold together", "Makes it heavier", "Hides the labels", "Lets boxes hang over the edge"], answer: 0, why: "Overlapping layers tie the stack together so it does not split apart." },
          { objective: "O4", q: "Which pallet is ready to move?", options: ["Boxes hanging over the edge", "Light boxes on the bottom", "Loose, not wrapped", "Heavy boxes low, even layers, wrapped, labels out"], answer: 3, why: "It follows every rule: heavy low, even, wrapped and labeled." },
          { objective: "O1", q: "Which office can help you find warehouse jobs and training for free?", options: ["Your local American Job Center", "A ticket office", "The DMV", "A bank"], answer: 0, why: "American Job Centers are free public offices for jobs and training." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Warehouse and Logistics Careers",
    questions: [
      { objective: "O1", q: "Which job fills customer orders by pulling items from shelves?", options: ["Receiving clerk", "Picker", "Truck mechanic", "Security guard"], answer: 1, why: "Pickers pull items from storage to fill orders." },
      { objective: "O1", q: "Which credential must you pass before taking the MSSC CLT?", options: ["A CDL", "The OSHA 30-hour card", "The MSSC Certified Logistics Associate (CLA)", "A forklift card"], answer: 2, why: "MSSC requires the CLA before the CLT assessment." },
      { objective: "O1", q: "Where should you check pay and job outlook for warehouse jobs?", options: ["The bls.gov Occupational Outlook Handbook", "A social media post", "A friend's guess", "A video game"], answer: 0, why: "The BLS handbook is the official source for pay and outlook." },
      { objective: "O2", q: "What is the right order of the flow of goods?", options: ["Shipping, picking, receiving", "Packing, receiving, putaway", "Picking, receiving, storage", "Receiving, putaway, storage, picking, packing, shipping"], answer: 3, why: "Goods come in, are stored, then are picked, packed and shipped." },
      { objective: "O2", q: "Practice: which is the first location in walking order?", options: ["B-02-01-A", "A-07-04-C", "A-02-06-B", "B-01-01-A"], answer: 2, why: "Sort by zone, then aisle: zone A aisle 02 comes before A aisle 07 and all of zone B." },
      { objective: "O2", q: "Why do you scan the location and the item when you pick?", options: ["So the system knows exactly what moved", "To slow you down", "To check the time", "It is only for fun"], answer: 0, why: "Scanning keeps the warehouse management system's records right." },
      { objective: "O2", q: "The spot for your SKU is empty. What do you do?", options: ["Take any item nearby", "Report it to your lead", "Mark the order complete", "Leave the line blank and say nothing"], answer: 1, why: "An empty spot is reported so stock can be found and records fixed." },
      { objective: "O3", q: "What is a bill of lading?", options: ["A shopping list", "A safety sign", "A pay stub", "The shipping paper you sign for a delivery"], answer: 3, why: "The bill of lading is the carrier's shipping document." },
      { objective: "O3", q: "The list says 15 cases; 17 arrived. What is it?", options: ["An overage", "A shortage", "Damage", "A putaway"], answer: 0, why: "More than the paperwork lists is an overage." },
      { objective: "O3", q: "What three things do you check on each line when receiving?", options: ["Color, size and smell", "Right SKU, right quantity, good condition", "Price, tax and tip", "Driver's name, truck color, time"], answer: 1, why: "Receiving checks the item, the count and the condition." },
      { objective: "O3", q: "What is a cycle count?", options: ["Counting bicycles", "Counting the whole warehouse once a year only", "Counting a few locations at a time to keep records right", "Counting your hours"], answer: 2, why: "Cycle counts check a few spots each day so records stay accurate." },
      { objective: "O4", q: "What do you check first when building a pallet?", options: ["The label color", "That the pallet has no broken boards or nails sticking out", "The weather", "The truck's radio"], answer: 1, why: "A damaged pallet can break and drop the load." },
      { objective: "O4", q: "Practice: 10 boxes at 30 lb and 10 boxes at 15 lb on a 40 lb pallet. Total?", options: ["450 lb", "300 lb", "490 lb", "45 lb"], answer: 2, why: "300 + 150 + 40 = 490 lb." },
      { objective: "O4", q: "Why should boxes not hang over the pallet's edge?", options: ["Overhang crushes boxes and can make the load unstable", "It looks untidy, that is all", "It makes the load lighter", "It is faster to wrap"], answer: 0, why: "Overhanging boxes lose support, get crushed and can make the load fall." },
      { objective: "O4", q: "How should stretch wrap be applied?", options: ["Only around the top layer", "Loose, so it comes off easily", "Over the labels so they cannot be read", "Tight, bottom to top, and around the pallet too"], answer: 3, why: "Wrapping tightly and to the pallet holds the whole load together." },
      { objective: "O5", q: "What are the most common warehouse injuries, according to OSHA?", options: ["Paper cuts", "Strains from lifting and being struck by forklifts", "Sunburn", "Eye strain from screens"], answer: 1, why: "OSHA names lifting strains and being struck by powered trucks as the most common." },
      { objective: "O5", q: "How should you lift a box from the floor?", options: ["Get close, bend your knees, keep your back straight and the load close", "Bend at the waist with straight legs", "Twist as you lift", "Hold it far from your body"], answer: 0, why: "Using your legs and keeping the load close protects your back." },
      { objective: "O5", q: "It is very hot in the warehouse and you feel dizzy. What do you do?", options: ["Keep working to hit your rate", "Skip your break", "Tell someone, drink water and rest in a cool place", "Go home without telling anyone"], answer: 2, why: "Dizziness can be heat illness; tell someone, cool down and drink water." },
      { objective: "O5", q: "What is the safe way to keep up your rate?", options: ["Skip the scan", "Ride on a pallet jack", "Climb racks to reach items", "Work smart: walking order, careful scans, no unsafe shortcuts"], answer: 3, why: "Smart methods save time without risking injury or errors." },
      { objective: "O1", q: "Which is true about the OSHA 10-hour Outreach card?", options: ["It is voluntary training and OSHA says it is not a certification", "It lets you drive any forklift", "It is the same as the MSSC CLT", "It is required for every warehouse job by federal law"], answer: 0, why: "OSHA says Outreach classes are voluntary and none of them is a certification." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Pre-Test: What Do You Already Know?", from: [0, 3, 4, 8, 9, 11, 12, 15, 16] },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and check again.",
    criteria: [
      { name: "Receiving report", objective: "O3", notYet: "A count is wrong or a shortage, overage or damage is missing.", meets: "Every line shows expected and received, and every problem is written up.", exceeds: "Also notes what to do before signing the bill of lading and who to tell." },
      { name: "Pick list in walking order", objective: "O2", notYet: "Locations are out of order or a code is read wrong.", meets: "All picks sorted by zone, aisle, rack and level, with each code read right.", exceeds: "Explains what to do if an item does not match or a spot is empty." },
      { name: "Pallet load plan", objective: "O4", notYet: "Heavy boxes high, overhang, or the total weight is wrong or over the limit.", meets: "Heavy boxes low, even interlocked layers, correct total under the limit, wrapped and labeled.", exceeds: "Adds the pallet check and the trailer safety steps." },
      { name: "Hiring plan", objective: "O1", notYet: "No employers, no credential goal, or a résumé line that claims something untrue.", meets: "Three employers or programs, a real credential with who grants it and a date, two honest résumé lines.", exceeds: "Includes a practiced 30-second answer about accuracy and safety." },
      { name: "Safe work", objective: "O5", notYet: "The plan suggests unsafe shortcuts to meet a rate.", meets: "The 30-second answer and plan put safety first, with safe lifting and hazard reporting.", exceeds: "Names a specific hazard from OSHA's warehousing page and how to prevent it." }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and a starter packet that meets the rubric",
      "Learners who apply to at least three warehouse jobs within 30 days (follow-up survey)",
      "Learners hired into warehouse or logistics roles within 90 days (partner and follow-up reports)",
      "Learners who register for the MSSC CLA or start employer forklift training"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Paper, pencil and a calculator (a phone calculator is fine)",
      "A phone or computer with internet for job searches and official pages",
      "Optional: a few empty boxes or sticky notes to practice pallet layers and pick paths",
      "About 60 minutes in total"
    ],
    facilitatorNotes: [
      "Set up a mini warehouse with labeled shelves (sticky notes like A-01-01-A) and run a timed pick race scored on accuracy first.",
      "Use a printed practice packing list and a box of mixed items for the receiving activity.",
      "Practice lifting only with empty or light boxes.",
      "Invite a local warehouse supervisor or American Job Center staff to talk about hiring, rates and second-chance hiring.",
      "Score the starter packet with the rubric and review one Not yet row at a time."
    ]
  }
};
