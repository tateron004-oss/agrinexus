"use strict";

// Koach Learn course: Agriculture (Africa) -> "Selling to Supermarkets, Processors and Export Buyers: Standards and Certification" (owner's request, 29 October 2026:
// "can you add learning for farmers in africa that include these classes and beyond"). Written in the ADDIE format (model: re-entry/reentry-ai-digital-confidence.js).
// For growing commercial farmers, producer groups, young agripreneurs and extension workers: what big buyers want, Good Agricultural Practices, traceability records,
// GLOBALG.A.P. certification (cost elements and steps from globalgap.org), pesticide residue limits (MRLs) and why exports get rejected, national export bodies,
// supply offers and contracts, and outgrower schemes. Builds on agri-cooperatives-markets.js (aggregation, prices, reading a contract) and does not repeat it.
// Pesticides: registered products only, as the label says, with protective equipment; no doses or pre-harvest intervals as numbers. No figures for fees: students check with each body.

const GGAP_IFA = { name: "GLOBALG.A.P.: Integrated Farm Assurance (IFA) for fruit and vegetables (topics, producer-group option, cost elements, steps to certification)", url: "https://globalgap.org/what-we-offer/solutions/ifa-fruit-and-vegetables/" };
const GGAP_PORTAL = { name: "GLOBALG.A.P.: Supply Chain Portal (check a certificate with the GLOBALG.A.P. number)", url: "https://globalgap.org/supply-chain-portal/" };
const EU_MRL = { name: "European Commission: EU Pesticides Database (maximum residue levels by food and pesticide)", url: "https://food.ec.europa.eu/plants/pesticides/eu-pesticides-database_en" };
const CODEX = { name: "Codex Alimentarius (FAO/WHO): international food standards, including pesticide residue limits", url: "https://codex.fao.org/" };
const KE_VEG_DROP = { name: "Business Daily (KNBS data, AFA report): Kenya's vegetable export earnings down on EU pesticide rules; MRL interceptions rose from 25 (2023) to 57 (2024)", url: "https://www.businessdailyafrica.com/bd/economy/kenya-s-vegetable-export-earnings-down-on-eu-pesticide-rules-5392706" };
const FAO_PEST_REG = { name: "FAO Pesticide Registration Toolkit: national pesticide registers in Africa", url: "https://www.fao.org/pesticide-registration-toolkit/information-sources/registrations-elsewhere/africa/en" };
const KE_AFA = { name: "Kenya Agriculture and Food Authority (AFA), Horticultural Crops Directorate: export licences and registration (check current rules)", url: "https://www.afa.go.ke" };
const KEPHIS_PHYTO = { name: "KEPHIS (Kenya): Phytosanitary services and export certification", url: "https://www.kephis.go.ke/phytosanitary-services" };
const NEPC = { name: "Nigerian Export Promotion Council: exporter e-registration", url: "https://nepc.gov.ng/get-started/e-registration/" };
const GEPA = { name: "Ghana Export Promotion Authority (GEPA): register as an exporter", url: "https://www.gepaghana.org/" };

module.exports = {
  id: "agri-export-gap-certification",
  category: "Agriculture (Africa)",
  name: "Selling to Supermarkets, Processors and Export Buyers: Standards and Certification",
  skills: "Reading a buyer's requirements, Using Good Agricultural Practices, Keeping traceability records, Weighing up certification, Meeting residue limits and export rules, Making a supply offer",
  outcome: "check whether your farm or group is ready to supply a supermarket, processor or export buyer, close the main gaps in practices, records and certification, and make a written supply offer you can stand behind.",
  about: [
    "Supermarkets, processors and export buyers can buy far more than a local market, and often pay more for steady quality. But they ask for things most small farms do not yet do: steady volume, the same grade every time, records that trace every crate, food safety, and sometimes a certificate such as GLOBALG.A.P. This course is for growing commercial farmers, producer groups, young agripreneurs and extension workers in Kenya, Nigeria, Ghana, Senegal and across Africa.",
    "You will learn what big buyers want, the Good Agricultural Practices behind it, how to keep records that trace produce back to the field, what certification costs and brings, why export shipments get rejected for pesticide residues, which national bodies control exports, and how to meet a buyer, negotiate a supply contract and judge an outgrower scheme.",
    "It builds on Farmer Cooperatives and Getting to Market, which covers selling as a group and reading a contract. Each lesson takes about five minutes and ends with a \"Try it now\" task. Rules, fees and limits change, so every lesson tells you where to check. Money figures are examples only."
  ],
  finalTask: "Make a buyer-readiness checklist for your farm or group for one crop and one type of buyer (supermarket, processor or exporter), marking what you already meet and what you must fix, then write a one-page supply offer to that buyer: crop and grade, volume and schedule, how you keep produce safe and traceable, any certification, price basis, and the terms you want in the contract.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Growing commercial farmers, producer groups and cooperatives, farm managers, young agripreneurs and extension workers in Kenya, Nigeria, Ghana, francophone West Africa and across Africa, selling horticulture (French beans, avocado, mango, pineapple, tomatoes) or staples (cassava, maize, sorghum, rice) to bigger buyers.",
    startingPoint: "Can grow a good crop and sell at local markets or through a group. Some keep basic farm records. Few know what a supermarket or exporter audits, how certification works, or what a residue limit is.",
    gap: "Big buyers reject farmers who cannot show steady volume and grade, traceable records and safe pesticide use. Kenya's own regulator linked a sharp fall in vegetable export earnings mainly to EU pesticide-residue interceptions. Farmers need to see their gaps, fix practices and records, weigh certification and make an offer they can deliver.",
    constraints: [
      "Reading level: plain words and short sentences; many learners speak English as a second language",
      "Devices: a basic phone or smartphone; paper record books",
      "Money: certification and testing cost money; group options matter for small farms",
      "Rules: export licences, residue limits and certification rules change and differ by country and market; learners check official sources",
      "Safety: registered pesticides only, used as the label says, with protective equipment; no dose numbers in the course"
    ],
    prerequisites: "Helpful: Farmer Cooperatives and Getting to Market, and Farm Records and Business Basics (Agribusiness and Farm Management). Basic reading and adding."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Given a supermarket, processor or export buyer's requirements", action: "list what the buyer asks for and compare it with what your farm or group supplies now", standard: "covering volume, consistency, grade, traceability and food safety, with each gap marked" },
    { id: "O2", condition: "For one crop on your farm", action: "write the Good Agricultural Practices you will follow", standard: "covering registered pesticides used as the label says, protective equipment, the label's pre-harvest interval, clean water, hygiene at harvest and worker safety" },
    { id: "O3", condition: "Given a certification such as GLOBALG.A.P.", action: "compare its costs and benefits for your farm or group and name the route you would take", standard: "naming the three cost elements, the steps to an audit and whether a group option fits" },
    { id: "O4", condition: "For one season of one crop", action: "set up traceability records that link each lot to its field, inputs and harvest date", standard: "so any crate can be traced back to the field and every spray within a few minutes" },
    { id: "O5", condition: "Given a target export market", action: "check the residue limits and the national export bodies that apply", standard: "naming where to find the limits (for example the EU Pesticides Database or Codex) and your country's export and plant-health bodies" },
    { id: "O6", condition: "Given a buyer meeting or an outgrower scheme offer", action: "write a supply offer and the contract terms you need", standard: "stating grade, volume, schedule, price basis, rejection rules, payment terms and what happens if either side fails" }
  ],
  chapters: [
    {
      name: "Chapter 1: What big buyers want, and getting your farm ready",
      lessons: [
        {
          title: "What supermarkets, processors and exporters want",
          objectives: ["O1"],
          minutes: 5,
          goal: "List a big buyer's requirements and mark where your farm falls short.",
          text: [
            "Big buyers sell to customers who expect the same product, safe and on the shelf, every week. So they want five things from you: volume (enough to fill their orders), consistency (supply week after week, not just at harvest), grade (size, colour, ripeness and defects to their specification), traceability (they can find which farm and field a crate came from) and food safety (no harmful residues, germs or dirt).",
            "Each buyer is different. A supermarket in Nairobi or Accra may want tomatoes in a set size and crate, delivered twice a week. A processor in Nigeria buying cassava for starch or tomatoes for paste wants large volumes at a set quality, and may care less about looks. An exporter shipping French beans from Kenya or mangoes from Senegal to Europe must meet the importing country's rules and often asks for a certificate.",
            "Ask the buyer for their specification in writing. Then compare it, point by point, with what you supply now. The gaps you find are your work plan. Many small farms close the volume and consistency gaps by working as a group and staggering planting dates."
          ],
          steps: ["Ask one buyer for their written specification and order size.", "List their needs under volume, consistency, grade, traceability and food safety.", "Next to each, write what your farm or group supplies now.", "Mark each gap and how you might close it (for example as a group or by staggered planting)."],
          words: [["Specification", "the buyer's written description of the product they want: size, colour, ripeness, packing and defects allowed."], ["Traceability", "being able to follow produce back to the farm, field and inputs it came from."], ["Consistency", "supplying the same quality and amount, on time, again and again."]],
          slides: [
            { title: "Five things big buyers want", bullets: ["Volume and consistency", "Grade to their specification", "Traceability and food safety"] },
            { title: "Buyers differ", bullets: ["Supermarket: set size, crate, twice a week", "Processor: big volume, set quality", "Exporter: importing country's rules, often a certificate"] },
            { title: "Find your gaps", bullets: ["Get the specification in writing", "Compare point by point with what you supply", "Gaps = your work plan; a group can close volume gaps"] }
          ],
          tryIt: "Pick one big buyer near you (a supermarket, processor or exporter). Write their needs under the five headings, what you supply now next to each, and mark the gaps. This is the start of your buyer-readiness checklist.",
          youCanNow: "list what a big buyer wants and mark where your farm or group falls short.",
          quickCheck: [
            { objective: "O1", q: "A supermarket wants tomatoes every week all year. You harvest once a season. Which need do you miss?", options: ["Grade", "Consistency of supply", "Traceability", "Food safety"], answer: 1, why: "Supplying every week, not just at harvest, is consistency." },
            { objective: "O1", q: "What is the best way to know exactly what a buyer wants?", options: ["Guess from what is in their shop", "Ask a neighbour who sold to them once", "Send produce and see if they accept it", "Ask for their specification in writing"], answer: 3, why: "A written specification shows the exact size, quality and packing the buyer will accept." }
          ]
        },
        {
          title: "Good Agricultural Practices on your farm",
          objectives: ["O2"],
          minutes: 6,
          goal: "Write the Good Agricultural Practices you will follow for one crop.",
          text: [
            "Good Agricultural Practices (GAP) are the farm habits that keep produce safe, protect workers and the environment, and make quality steady. Certification schemes and buyers audit them. You can start most of them for little money.",
            "Pesticides: use only products registered by your national body (for example Kenya's Pest Control Products Board, Nigeria's NAFDAC or Ghana's EPA), check its current list, and use them exactly as the label says. Wear the protective equipment the label asks for, store chemicals locked away from food, and respect the label's pre-harvest interval, the waiting time between the last spray and harvest. Spraying too close to harvest is a main cause of residue rejections. Use integrated pest management so you spray less.",
            "Also: clean water for spraying, washing and irrigation; clean harvest crates kept off the ground; toilets and handwashing for workers; no animals or manure near produce just before harvest; first aid and training for workers; and safe disposal of empty containers as the label or your national body says. Write these down as your farm's GAP rules."
          ],
          steps: ["Check every pesticide you use is on your national body's register.", "Write the label's protective equipment and pre-harvest interval next to each product.", "Set up handwashing, toilets and clean crates for harvest.", "Write your GAP rules and train every worker on them."],
          words: [["Good Agricultural Practices (GAP)", "farm habits that keep produce safe and protect workers and the environment."], ["Pre-harvest interval", "the waiting time on the label between the last spray and harvest."], ["Registered pesticide", "a product your national body has approved for that crop and use."], ["Integrated pest management", "controlling pests with several methods so you spray only when needed."]],
          slides: [
            { title: "What GAP covers", bullets: ["Safe produce", "Worker safety and welfare", "Environment and steady quality"] },
            { title: "Pesticides the right way", bullets: ["Registered products only: check PCPB, NAFDAC, Ghana EPA lists", "Exactly as the label says, with protective equipment", "Respect the label's pre-harvest interval"] },
            { title: "Clean harvest", bullets: ["Clean water; crates off the ground", "Toilets and handwashing for workers", "No animals or manure near produce at harvest"] },
            { title: "Write it and train it", bullets: ["Your farm's GAP rules on one page", "Train every worker", "Store chemicals locked, away from food"] }
          ],
          sources: [FAO_PEST_REG],
          tryIt: "Write your farm's GAP rules for one crop on one page: the registered pesticides you use with the label's protective equipment and pre-harvest interval, your water and harvest hygiene, and worker safety. Add the gaps to your buyer-readiness checklist.",
          youCanNow: "write Good Agricultural Practice rules for a crop, including safe, registered pesticide use.",
          quickCheck: [
            { objective: "O2", q: "Where do you find how long to wait between the last spray and harvest?", options: ["On the product label (the pre-harvest interval)", "From the buyer's driver", "From a neighbour's memory", "It does not matter for export"], answer: 0, why: "The label gives the pre-harvest interval; respecting it keeps residues within limits." },
            { objective: "O2", q: "A trader offers a cheap pesticide with no registration number. What do you do?", options: ["Buy it if it is cheap", "Mix it with a registered one", "Do not use it; use only products on your national register", "Use half the amount"], answer: 2, why: "Unregistered products may be fake or banned and can cause rejections and harm." }
          ]
        },
        {
          title: "Records that trace every crate",
          objectives: ["O4"],
          minutes: 5,
          goal: "Set up records that trace a crate back to its field, inputs and harvest date.",
          text: [
            "If a buyer finds a residue or a problem, they will ask: which farm, which field, what was sprayed and when? Traceability records answer in minutes. Without them, a buyer may drop the whole group.",
            "Give each field or plot a code, for example KB-F2 for Kiambu farm, field 2. Keep a spray and input record for each field: date, product name and registration number, amount, who sprayed and the pre-harvest interval from the label. Keep a harvest record: date, field code, crates or kilos, and a lot number. Write the lot number on every crate or delivery note.",
            "Keep the records in a notebook or a simple phone spreadsheet, and keep receipts for inputs. Producer groups keep a member register and each member's records. Kenya is rolling out digital mapping and registration of export farms, so check with AFA what your crop needs."
          ],
          steps: ["Give each field or plot a short code.", "Keep a spray and input record per field: date, product, registration number, amount, who sprayed, pre-harvest interval.", "Keep a harvest record with a lot number for each harvest.", "Write the lot number on every crate or delivery note.", "Practise: pick a crate and trace it back in minutes."],
          words: [["Lot number", "a code for one harvest from one field on one day, written on the crates."], ["Spray record", "a written list of every pesticide used: when, what, how much and by whom."], ["Audit", "a check by a buyer or certifier that you do what you say."]],
          slides: [
            { title: "Why trace?", bullets: ["Buyer finds a problem: which field, what spray, when?", "Good records answer in minutes", "No records: the whole group can be dropped"] },
            { title: "Three records", bullets: ["Field codes (for example KB-F2)", "Spray and input record per field", "Harvest record with a lot number"] },
            { title: "Keep it working", bullets: ["Lot number on every crate", "Notebook or phone spreadsheet; keep receipts", "Practise tracing a crate"] }
          ],
          sources: [KE_AFA],
          tryIt: "Draw up the three records for one crop: field codes, a spray and input record, and a harvest record with lot numbers. Fill in one real or practice line in each, then trace that crate back to the field and the last spray.",
          youCanNow: "keep field, spray and harvest records that trace any crate back to its field and inputs.",
          quickCheck: [
            { objective: "O4", q: "What links a crate on the buyer's shelf to your field?", options: ["The colour of the crate", "The driver's name", "The market price", "A lot number written on the crate and in your harvest record"], answer: 3, why: "A lot number on the crate and in your records traces it to the field and date." },
            { objective: "O4", q: "Which detail belongs in a spray record?", options: ["The buyer's phone number", "Date, product, registration number, amount and who sprayed", "The weather forecast for next month", "The price of the crop"], answer: 1, why: "These details show what was sprayed and when, which buyers and certifiers check." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: What big buyers want, and getting your farm ready",
        questions: [
          { objective: "O1", q: "Which is NOT one of the five things big buyers usually want?", options: ["Volume", "Traceability", "A gift for the buyer", "Food safety"], answer: 2, why: "Buyers want volume, consistency, grade, traceability and food safety; gifts are not a requirement." },
          { objective: "O1", q: "Your group can only fill half a buyer's weekly order. What could close the gap?", options: ["More members and staggered planting dates", "Sending lower-grade produce", "Promising more than you have", "Ignoring the order size"], answer: 0, why: "More growers and staggered planting raise volume and keep supply steady." },
          { objective: "O2", q: "Which practice is part of GAP?", options: ["Storing pesticides next to food", "Spraying the day before harvest whatever the label says", "Letting goats graze near produce at harvest", "Wearing the protective equipment the label asks for"], answer: 3, why: "Following the label, including protective equipment, protects workers and produce." },
          { objective: "O4", q: "What is a lot number?", options: ["The price per crate", "A code for one harvest from one field on one day", "The number of workers", "The size of the farm"], answer: 1, why: "A lot number identifies one harvest so it can be traced." },
          { objective: "O4", q: "A buyer reports a residue in one delivery. Good records let you:", options: ["Blame the buyer", "Change the records", "Trace it to the field and the spray, and fix the cause", "Stop selling to everyone"], answer: 2, why: "Traceability shows where the problem started so you can fix it and keep the buyer." }
        ]
      }
    },
    {
      name: "Chapter 2: Certification, export rules and supply contracts",
      lessons: [
        {
          title: "GLOBALG.A.P. and certification: cost and benefit",
          objectives: ["O3"],
          minutes: 6,
          goal: "Compare the costs and benefits of certification for your farm and choose a route.",
          text: [
            "Certification means an independent body checks your farm against a standard and gives you a certificate if you pass. GLOBALG.A.P. is the best-known farm standard asked for by many European supermarkets and exporters. Its Integrated Farm Assurance (IFA) standard for fruit and vegetables covers food safety and traceability, workers' health, safety and welfare, and the environment (water, fertilizer, pest management and plant protection products). Some buyers ask for other standards, such as organic or fair-trade schemes.",
            "GLOBALG.A.P. says there are three cost elements: your own costs to get ready (training, toilets, chemical store, records); the certification body's fees for the audit and travel; and GLOBALG.A.P.'s registration and licence fees, which depend on your area and option. Audits are yearly and a certificate lasts one year. There is an option for producer groups, including smallholders, where one group certificate covers members who follow a shared quality system with internal inspections.",
            "The steps: download the free rules and checklist, put the requirements in place, do a self-assessment, ask an approved certification body working in your country for an audit, fix any problems in the time given, and receive the certificate. Buyers can check certificates on GLOBALG.A.P.'s Supply Chain Portal. Before paying, ask your buyer: do you need this certificate, and will you buy more or pay more if I have it? Get quotes from more than one certification body."
          ],
          steps: ["Ask your buyer which certificate, if any, they require.", "Download the standard's free rules and checklist and do a self-assessment.", "List the three cost elements and get quotes from approved certification bodies.", "Compare costs with the benefit: new buyers, more volume or a better price.", "Decide: certify alone, certify as a group, or not yet."],
          words: [["Certification", "an independent check that a farm meets a standard, proved by a certificate."], ["Certification body", "the approved company that audits your farm and issues the certificate."], ["Group certification", "one certificate for a producer group whose members follow a shared quality system."], ["Self-assessment", "checking your own farm against the standard's checklist before the real audit."]],
          slides: [
            { title: "What GLOBALG.A.P. IFA covers", bullets: ["Food safety and traceability", "Workers' health, safety and welfare", "Environment: water, fertilizer, pest management"] },
            { title: "Three cost elements", bullets: ["Your costs to get ready", "Certification body's audit and travel fees", "GLOBALG.A.P. registration and licence fees"] },
            { title: "Steps to a certificate", bullets: ["Free rules and checklist; self-assessment", "Audit by an approved certification body", "Fix problems; certificate for one year"] },
            { title: "Is it worth it?", bullets: ["Ask the buyer if they need it", "Will they buy more or pay more?", "Group option for smallholders; get several quotes"] }
          ],
          sources: [GGAP_IFA, GGAP_PORTAL],
          tryIt: "For your crop and buyer, write a cost-benefit note on certification: does the buyer need it, the three cost elements (with quotes if you can get them), the benefit you expect, and your choice: alone, as a group, or not yet.",
          youCanNow: "compare the costs and benefits of a certification such as GLOBALG.A.P. and choose a route for your farm or group.",
          quickCheck: [
            { objective: "O3", q: "Which is one of GLOBALG.A.P.'s three cost elements?", options: ["The buyer's transport costs", "Your own school fees", "The certification body's audit and travel fees", "The price of the crop"], answer: 2, why: "GLOBALG.A.P. lists your preparation costs, the certification body's fees, and its own registration and licence fees." },
            { objective: "O3", q: "Twenty smallholders want certification but cannot each afford an audit. What may fit?", options: ["Group certification with a shared quality system", "Each copying a neighbour's certificate", "Skipping the audit", "Buying a certificate online"], answer: 0, why: "The producer-group option lets one certificate cover members who follow a shared system with internal inspections." }
          ]
        },
        {
          title: "Residue limits, export rules and why shipments get rejected",
          objectives: ["O5"],
          minutes: 6,
          goal: "Check the residue limits and export bodies that apply to your crop and market.",
          text: [
            "A maximum residue level (MRL) is the highest amount of a pesticide allowed to remain on a food. Each importing market sets its own. The European Union lists its limits in the EU Pesticides Database; Codex Alimentarius sets international limits that many countries use. A product can be legal at home and still be over the limit in Europe, or a pesticide may not be approved there at all.",
            "This is not a small risk. Kenya's Agriculture and Food Authority linked a sharp fall in vegetable export earnings mainly to EU interceptions for pesticide residues, which rose from 25 cases in 2023 to 57 in 2024, and the EU increased checks on Kenyan beans and peas. Common causes: spraying too close to harvest, using a product not allowed in the market, wrong mixing, spray drift from a neighbour, and mixing produce from untraced farms.",
            "Exports also need national approvals. In Kenya, the Horticultural Crops Directorate of AFA licenses exporters and registers agents, and KEPHIS issues phytosanitary certificates. In Nigeria, exporters register with the Nigerian Export Promotion Council (NEPC). In Ghana, exporters register with the Ghana Export Promotion Authority (GEPA). Plant-health inspection is done by each country's plant protection body. Rules change, so check each body before the season."
          ],
          steps: ["Name your target market (for example the EU, the UK or a regional market).", "Look up the residue limits for your crop in that market's database or Codex.", "Check each pesticide you use is allowed there, and follow the label's pre-harvest interval.", "Ask your buyer whether residue tests are needed before shipping.", "List your country's export and plant-health bodies and what they require."],
          words: [["Maximum residue level (MRL)", "the highest amount of a pesticide allowed to remain on a food in a market."], ["Interception", "when an importing country stops a shipment at the border because it breaks a rule."], ["Phytosanitary certificate", "an official paper saying a plant product is free of listed pests and diseases."]],
          slides: [
            { title: "What an MRL is", bullets: ["Highest pesticide amount allowed on a food", "Each market sets its own", "EU Pesticides Database; Codex limits"] },
            { title: "Why shipments get rejected", bullets: ["Sprayed too close to harvest", "Product not allowed in that market", "Wrong mixing, drift, untraced produce"] },
            { title: "Kenya's warning", bullets: ["AFA: EU residue interceptions 25 (2023) to 57 (2024)", "Vegetable export earnings fell sharply", "More EU checks on beans and peas"] },
            { title: "Export bodies (check current rules)", bullets: ["Kenya: AFA Horticultural Crops Directorate; KEPHIS", "Nigeria: NEPC registration", "Ghana: GEPA registration; plant protection bodies"] }
          ],
          sources: [EU_MRL, CODEX, KE_VEG_DROP, KE_AFA, KEPHIS_PHYTO, NEPC, GEPA],
          tryIt: "For your crop and target market, find where the residue limits are listed and check two pesticides you use. Then list your country's export and plant-health bodies and one question to ask each. Add the results to your checklist.",
          youCanNow: "find the residue limits for your market and name the export and plant-health bodies you must deal with.",
          quickCheck: [
            { objective: "O5", q: "Your pesticide is registered in your country. Can produce still be rejected in Europe?", options: ["No, home registration is enough", "Yes, if residues are over the EU limit or the product is not allowed there", "Only if the crates are dirty", "Only for flowers"], answer: 1, why: "Each market sets its own limits, so produce legal at home can break EU rules." },
            { objective: "O5", q: "In Kenya, who issues phytosanitary certificates for exports?", options: ["KEBS", "NAFDAC", "NEPC", "KEPHIS"], answer: 3, why: "KEPHIS handles plant-health inspection and phytosanitary certificates for Kenyan exports." }
          ]
        },
        {
          title: "Meeting buyers, supply contracts and outgrower schemes",
          objectives: ["O6"],
          minutes: 6,
          goal: "Write a supply offer and list the contract terms you need from a buyer.",
          text: [
            "When you meet a buyer, come prepared: your crop, grade, how much you can supply and when, how you keep produce safe and traced, any certificate, and samples. Promise only what you can deliver. A missed delivery hurts trust more than a smaller offer.",
            "Negotiate the terms, not just the price. Agree the grade and how it is checked, the volume and schedule, the price or how it is set (fixed, or linked to a market price), who pays transport and packing, the rejection rules (who checks, when, and what happens to rejected produce), the payment date and method, and what happens if your harvest fails or the buyer does not collect. Side-selling to another buyer breaks trust and often breaks the contract.",
            "In an outgrower scheme, a company such as a processor or exporter contracts many small farmers, often giving seed, inputs, training or credit and buying the crop. It can open a steady market, but check: are inputs deducted from your payment and at what price, who sets the grade, what if prices rise, and can you leave? Read every contract fully, keep a copy, and ask a trusted adviser, extension officer or cooperative officer before you sign."
          ],
          steps: ["Prepare your offer: crop, grade, volume, schedule, safety and traceability, certificate, samples.", "List the terms you need: grade check, price basis, transport, rejection rules, payment date, failure clauses.", "For an outgrower scheme, ask how inputs are charged, who grades, and how you can leave.", "Read the contract fully and ask a trusted adviser before signing.", "Keep a copy and deliver exactly what you promised."],
          words: [["Supply offer", "a written offer to a buyer of what you can supply, when and on what terms."], ["Outgrower scheme", "an arrangement where a company contracts many small farmers to grow for it, often giving inputs and buying the crop."], ["Side-selling", "selling contracted produce to another buyer."], ["Rejection rules", "the agreed rules for checking produce and what happens to produce the buyer refuses."]],
          slides: [
            { title: "Come prepared", bullets: ["Crop, grade, volume and schedule", "How you keep produce safe and traced", "Certificate and samples; promise only what you can deliver"] },
            { title: "Negotiate the terms", bullets: ["Grade check, price basis, transport", "Rejection rules and payment date", "What if the harvest fails or the buyer does not collect?"] },
            { title: "Outgrower schemes", bullets: ["Steady market; inputs, training or credit", "Check: input charges, who grades, can you leave?", "Side-selling breaks trust and contracts"] },
            { title: "Before you sign", bullets: ["Read every line; keep a copy", "Ask an extension or cooperative officer or adviser", "Deliver exactly what you promised"] }
          ],
          tryIt: "Final task: finish your buyer-readiness checklist, marking what you meet and what you will fix. Then write a one-page supply offer to that buyer: crop and grade, volume and schedule, safety and traceability, certification, price basis and the contract terms you want.",
          youCanNow: "make a supply offer to a big buyer and list the contract terms that protect you, including in an outgrower scheme.",
          quickCheck: [
            { objective: "O6", q: "Which term protects you if the buyer refuses part of a delivery?", options: ["Clear rejection rules: who checks, when, and what happens to refused produce", "The buyer's logo", "A low price", "A bigger delivery"], answer: 0, why: "Rejection rules prevent unfair refusals and say who bears the loss." },
            { objective: "O6", q: "An outgrower company gives seed and fertilizer on credit. What should you ask first?", options: ["What colour the bags are", "Whether neighbours have joined", "How the inputs are priced and deducted from your payment", "Whether you can side-sell"], answer: 2, why: "Input charges can take much of your payment, so know the price and how it is deducted." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Certification, export rules and supply contracts",
        questions: [
          { objective: "O3", q: "How long is a GLOBALG.A.P. IFA certificate valid?", options: ["One year, with yearly audits", "Forever", "Ten years", "Until the buyer changes"], answer: 0, why: "GLOBALG.A.P. says audits are yearly and a certificate is valid for one year." },
          { objective: "O3", q: "Before paying for certification, what should you ask your buyer?", options: ["Their home address", "Their favourite crop", "Nothing, just certify", "Do you need it, and will you buy more or pay more if I have it?"], answer: 3, why: "Certification costs money, so check it brings a market or a better price." },
          { objective: "O5", q: "Where can you look up EU residue limits for a crop?", options: ["A local radio station", "The EU Pesticides Database", "Your seed packet", "A buyer's WhatsApp status"], answer: 1, why: "The European Commission's EU Pesticides Database lists MRLs by food and pesticide." },
          { objective: "O6", q: "What is side-selling?", options: ["Selling at the side of the road", "Selling to two markets at once with permission", "Selling contracted produce to another buyer", "Selling in bulk"], answer: 2, why: "Side-selling breaks a contract and damages trust with the buyer." },
          { objective: "O6", q: "You can supply 2 tonnes a week. The buyer asks for 4. What do you do?", options: ["Promise 4 and hope", "Send unsorted produce to make up weight", "Say nothing and deliver 2", "Offer 2 tonnes, or work with a group to supply more"], answer: 3, why: "Promise only what you can deliver; a group can help reach a bigger volume." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Selling to Supermarkets, Processors and Export Buyers: Standards and Certification",
    questions: [
      { objective: "O1", q: "Which set lists what big buyers usually want?", options: ["Low price, big farm, new tractor", "Organic only, nothing else", "Gifts, credit, free transport", "Volume, consistency, grade, traceability, food safety"], answer: 3, why: "These five are the common needs of supermarkets, processors and exporters." },
      { objective: "O1", q: "A processor buying cassava for starch mainly cares about:", options: ["Large volumes at a set quality", "Pretty colour and shape", "Small packs for shoppers", "Fancy labels"], answer: 0, why: "Processors need steady volume and quality for their factory; looks matter less." },
      { objective: "O1", q: "You compared a buyer's specification with your supply. What do the gaps become?", options: ["Reasons to give up", "Secrets from the group", "Your work plan", "The buyer's problem"], answer: 2, why: "Each gap is a task to fix before you can supply that buyer." },
      { objective: "O2", q: "What does GAP stand for in this course?", options: ["Group Agricultural Payment", "Good Agricultural Practices", "Grain and Produce", "Government Approval Permit"], answer: 1, why: "Good Agricultural Practices are the farm habits buyers and certifiers check." },
      { objective: "O2", q: "Which pesticides should you use?", options: ["Any cheap product at the market", "Products a neighbour recommends", "Unlabelled products in old bottles", "Products registered by your national body, used as the label says"], answer: 3, why: "Registered products used as labelled protect people and keep residues within limits." },
      { objective: "O2", q: "Why provide toilets and handwashing for harvest workers?", options: ["To stop germs getting onto produce", "To please the neighbours", "Because buyers like buildings", "To store chemicals"], answer: 0, why: "Hygiene at harvest keeps produce free of germs, which buyers audit." },
      { objective: "O4", q: "What does a field code help with?", options: ["Paying workers", "Tracing produce back to the exact field", "Choosing a buyer", "Setting the price"], answer: 1, why: "A field code links harvest and spray records to one field." },
      { objective: "O4", q: "Where should the lot number appear?", options: ["Only in your head", "On the buyer's car", "On every crate or delivery note, and in your harvest record", "On the seed packet"], answer: 2, why: "Writing it on crates and in records lets anyone trace produce back." },
      { objective: "O4", q: "Which record shows what was sprayed on a field and when?", options: ["Member register", "Sales book", "Delivery note", "Spray and input record"], answer: 3, why: "The spray and input record lists the date, product, amount and who sprayed." },
      { objective: "O3", q: "What does GLOBALG.A.P. IFA for fruit and vegetables cover?", options: ["Food safety, worker welfare and the environment", "Only the colour of produce", "Only the price", "Only the farm's size"], answer: 0, why: "IFA covers food safety and traceability, workers' health and welfare, and the environment." },
      { objective: "O3", q: "Who carries out a GLOBALG.A.P. audit?", options: ["Your buyer's driver", "An approved certification body", "A neighbour", "The bank"], answer: 1, why: "Only an approved certification body active in your country can audit and certify." },
      { objective: "O3", q: "How can a buyer check that your certificate is real?", options: ["Ask you to swear", "Look at your farm sign", "On GLOBALG.A.P.'s Supply Chain Portal", "They cannot check"], answer: 2, why: "Certificate status is visible on GLOBALG.A.P.'s platform using your number." },
      { objective: "O3", q: "Which is the first step toward certification?", options: ["Pay the fees at once", "Print a certificate", "Tell the buyer you are certified", "Download the free rules and checklist and do a self-assessment"], answer: 3, why: "A self-assessment shows your gaps before you pay for an audit." },
      { objective: "O5", q: "What is an MRL?", options: ["A type of fertilizer", "A seed variety", "The highest amount of a pesticide allowed to remain on a food", "A transport permit"], answer: 2, why: "A maximum residue level is the legal limit of a pesticide residue on a food." },
      { objective: "O5", q: "What did Kenya's regulator say about EU residue interceptions?", options: ["They fell to zero", "They rose from 25 in 2023 to 57 in 2024", "They never happen", "They only affect flowers"], answer: 1, why: "AFA reported interceptions more than doubled, and linked them to a sharp fall in vegetable export earnings." },
      { objective: "O5", q: "Which is a common cause of residue rejections?", options: ["Spraying too close to harvest", "Keeping good records", "Using clean crates", "Training workers"], answer: 0, why: "Ignoring the pre-harvest interval leaves residues above the limit." },
      { objective: "O5", q: "A Nigerian group wants to export dried hibiscus. Which body do they register with as exporters?", options: ["KEPHIS", "GEPA", "AFA", "The Nigerian Export Promotion Council (NEPC)"], answer: 3, why: "Nigerian exporters register with NEPC, and should check its current requirements." },
      { objective: "O6", q: "What should a supply offer include?", options: ["Crop, grade, volume, schedule, safety, certificate and price basis", "Only a low price", "Your bank PIN", "A promise of any volume asked"], answer: 0, why: "A clear offer shows the buyer exactly what you can deliver and how." },
      { objective: "O6", q: "Before signing an outgrower contract you should:", options: ["Sign quickly before others do", "Read only the first page", "Read it fully, keep a copy and ask a trusted adviser", "Let the company keep the only copy"], answer: 2, why: "Reading fully and getting advice protects you from terms you did not expect." },
      { objective: "O6", q: "Your harvest fails after a drought. Which contract term matters now?", options: ["The buyer's logo", "What happens if either side cannot deliver", "The colour of the crates", "The buyer's office hours"], answer: 1, why: "A failure clause says what happens when a harvest fails, so you are not unfairly penalised." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  // pre-test: these quiz questions, taken before Lesson 1, so the quiz shows how much each learner gained
  pretest: { title: "Pre-Test: What Do You Already Know?", from: [0, 3, 6, 9, 11, 13, 15, 17, 19] },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part of the checklist or offer and try again.",
    criteria: [
      { name: "Buyer requirements and gaps", objective: "O1", notYet: "The buyer's needs are vague, or gaps are not marked.", meets: "Volume, consistency, grade, traceability and food safety are listed, with what you supply now and each gap marked.", exceeds: "Based on the buyer's written specification, with a plan and date to close each gap." },
      { name: "Good Agricultural Practices", objective: "O2", notYet: "No written GAP rules, or unregistered pesticides or no protective equipment.", meets: "Written rules: registered pesticides used as labelled, protective equipment, pre-harvest interval, water, harvest hygiene and worker safety.", exceeds: "Workers have been trained and the rules are posted where they work." },
      { name: "Traceability records", objective: "O4", notYet: "No field codes, spray record or lot numbers.", meets: "Field codes, a spray and input record and a harvest record with lot numbers; one crate can be traced back.", exceeds: "Records are kept for the whole group and a trace test was done in a few minutes." },
      { name: "Certification and export rules", objective: "O3", notYet: "Certification is assumed or ignored, or no export bodies named.", meets: "A cost-benefit note names the three cost elements and a route (alone, group or not yet).", exceeds: "Includes real quotes from certification bodies and the buyer's answer on whether it is needed." },
      { name: "Residue limits", objective: "O5", notYet: "No check of the market's residue limits.", meets: "Names where the limits are listed and checks the pesticides used against them, plus the export and plant-health bodies.", exceeds: "Has asked the buyer or a lab about residue testing before shipping." },
      { name: "Supply offer and terms", objective: "O6", notYet: "No offer, or it promises more than the farm or group can deliver.", meets: "A one-page offer with grade, volume, schedule, safety, certificate, price basis and the contract terms wanted.", exceeds: "Includes rejection rules, failure clauses and payment terms, and was shown to an adviser." }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Learners or groups who send a supply offer to a supermarket, processor or exporter within 90 days (follow-up survey)",
      "Learners or groups who win a supply contract or outgrower agreement within six months",
      "Learners who keep spray and harvest records with lot numbers for a full season",
      "Learners or groups who start or complete a certification self-assessment, or reach certification"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A phone (smartphone helpful) and a notebook for records",
      "A real buyer specification if possible (ask a local supermarket, processor or exporter)",
      "The labels of the pesticides learners use, to read the protective equipment and pre-harvest interval",
      "Optional: the free GLOBALG.A.P. checklist from globalgap.org",
      "About 90 minutes in total, in short sessions, plus time to contact buyers and bodies"
    ],
    facilitatorNotes: [
      "Run this course with producer groups where possible: volume, records and group certification work best together.",
      "Bring real pesticide labels and practise finding the protective equipment and pre-harvest interval; never give dose or interval numbers yourself.",
      "Invite a buyer, exporter or certification body to talk about what they audit; ask them for a sample specification.",
      "Check current rules with AFA and KEPHIS (Kenya), NEPC (Nigeria), GEPA (Ghana) and your country's plant-protection body before the session; rules and fees change.",
      "Score the final task with the rubric; role-play a buyer meeting where the 'buyer' pushes for more volume than the group can supply."
    ]
  }
};
