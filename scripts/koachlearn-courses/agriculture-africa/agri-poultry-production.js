"use strict";

// Koach Learn course: Agriculture (Africa) -> "Commercial Poultry Production" (owner's farmer-course list, 29 October 2026: advanced crop and livestock production).
// For farmers starting or growing a poultry business: broilers vs layers vs improved indigenous chickens (Kenbro, Kuroiler), housing and space, brooding chicks,
// feeding and water, a vaccination programme set with the vet, batch biosecurity, egg handling, records, and the economics of a batch (cost per bird or per tray,
// mortality, break-even). Goes beyond agri-livestock-health (daily checks, Newcastle disease basics) and does not repeat it. Safety rule: no vaccine or drug doses,
// no withdrawal periods as numbers; follow the vet and the label; avian influenza is notifiable. All prices are made-up examples.
// Facts checked 29 October 2026 on Kenchic, Livestock Research for Rural Development, University of Missouri Extension, WOAH, USDA APHIS and FAO.

const KENBRO = { name: "Kenchic: Kenbro (dual-purpose improved indigenous chicken)", url: "https://www.kenchic.com/kenbro/" };
const KUROILER = { name: "Sharma et al. 2015, Livestock Research for Rural Development: Kuroiler vs indigenous chickens in Uganda", url: "https://lrrd.cipav.org.co/lrrd27/9/shar27178.html" };
const MU_BROODING = { name: "University of Missouri Extension G8351: Brooding and growing chicks (temperature by week, chick behaviour)", url: "https://extension.missouri.edu/publications/g8351" };
const FAO_BIOSEC = { name: "FAO: Good biosecurity practices in small scale commercial and scavenging poultry production systems in Kenya", url: "https://www.fao.org/4/al838e/al838e00.pdf" };
const WOAH_ND = { name: "World Organisation for Animal Health (WOAH): Newcastle disease", url: "https://www.woah.org/en/disease/newcastle-disease/" };
const WOAH_AI = { name: "World Organisation for Animal Health (WOAH): Avian influenza", url: "https://www.woah.org/en/disease/avian-influenza/" };
const APHIS_AI = { name: "USDA APHIS: Avian influenza (signs in birds)", url: "https://www.aphis.usda.gov/livestock-poultry-disease/avian/avian-influenza" };
const KVB = { name: "Kenya Veterinary Board (register of vets and veterinary para-professionals)", url: "https://www.kenyavetboard.or.ke/" };
const VCN = { name: "Veterinary Council of Nigeria (register of veterinary surgeons)", url: "https://vcn.gov.ng" };
const FAO_PRUDENT = { name: "FAO: Prudent and efficient use of antimicrobials in pigs and poultry (vets, health plans, withdrawal periods)", url: "https://www.fao.org/3/ca6729en/CA6729EN.pdf" };

module.exports = {
  id: "agri-poultry-production",
  category: "Agriculture (Africa)",
  name: "Commercial Poultry Production",
  skills: "Choosing broilers, layers or improved indigenous chickens, Preparing housing and brooding chicks, Feeding and watering by stage, Running a vaccination programme and batch biosecurity with the vet, Handling eggs and keeping flock records, Costing a batch and finding break-even",
  outcome: "plan and run a profitable batch of chickens: choose broilers, layers or improved indigenous birds for your market, prepare the house and brood the chicks, feed and water them by stage, follow a vaccination programme set with your vet and strict biosecurity, handle eggs and keep records, and cost the batch to know your break-even price.",
  about: [
    "This course is for farmers, young agripreneurs, farm workers and extension workers in Kenya, Nigeria, Ghana, Senegal, Côte d'Ivoire and across Africa who want to start or grow a poultry business with broilers, layers or improved indigenous chickens.",
    "Chapter 1 sets up the batch: choosing the type of bird, housing, space and brooding chicks, and feeding and water. Chapter 2 runs it profitably: a vaccination programme with your vet and batch biosecurity, egg handling and records, and the economics of a batch: cost per bird or per tray, mortality and break-even.",
    "This course builds on \"Livestock Health and Management\", which covers daily health checks and Newcastle disease basics. It gives no vaccine or drug doses: always follow your vet and the label. All prices are made-up examples; use your own. Each lesson takes about five minutes and ends with a task. A knowledge check closes each chapter and a 20-question quiz closes the course."
  ],
  finalTask: "Write a costed plan for one batch on your farm (or an example such as 500 broilers near Thika, 300 layers near Ibadan, 200 Kenbro or Kuroiler birds near Tamale, or 1,000 broilers near Thies): the type of bird and why; the house size and how many birds it holds; your brooding set-up; the feeds by stage and how much you expect to buy; the vaccination programme agreed with your vet and your biosecurity rules; the records you will keep; and a cost sheet with every cost, an expected mortality, the cost per bird sold or per tray of eggs, and your break-even price.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Farmers, young agripreneurs, farm workers and extension workers in East, West and Central Africa (including French-speaking countries) starting or growing a poultry business of a few hundred to a few thousand birds.",
    startingPoint: "Many keep a few village chickens or have raised one batch. Most buy chicks and feed without a written plan, brood by guesswork, rely on the agrovet for vaccines, keep few records, and do not know their cost per bird or per tray, so they cannot tell whether a batch made money.",
    gap: "Poultry can pay quickly, but high chick deaths in brooding, disease outbreaks, wasted feed and selling below cost wipe out profits. Farmers who plan the batch, brood well, vaccinate on the vet's programme, keep records and know their break-even price lose fewer birds and can price and sell with confidence.",
    constraints: [
      "Reading level: plain words and short sentences; simple arithmetic only; the course is also available in Spanish, French and Arabic",
      "Devices: paper and pen or a phone calculator; a phone spreadsheet is optional",
      "Money: prices in KES, NGN, GHS and XOF are made-up examples; learners use local prices",
      "Animal health rules: no vaccine or drug doses and no withdrawal periods as numbers; follow the vet and the label",
      "Avian influenza is notifiable: suspected cases are reported to the vet or veterinary authority at once"
    ],
    prerequisites: "Basic animal care and simple arithmetic. \"Livestock Health and Management\" is recommended first; \"Livestock Nutrition and Feed Formulation\" helps with feed costs."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Given your market, money and time", action: "choose broilers, layers or improved indigenous chickens and give reasons", standard: "naming at least three reasons that fit your farm and buyers" },
    { id: "O2", condition: "Before the chicks arrive and during brooding", action: "prepare the house, set the number of birds for the space, and adjust brooder heat by watching the chicks", standard: "with the house ready a day ahead and chicks spread evenly under the heat" },
    { id: "O3", condition: "For each stage of your batch", action: "plan the feed type, the change dates and the water supply", standard: "with clean water available all the time and every stage covered" },
    { id: "O4", condition: "With your vet or animal health officer", action: "write a vaccination programme and batch biosecurity rules, and record each vaccination", standard: "with every vaccine date set by the vet and no vaccine given outside the programme" },
    { id: "O5", condition: "Every day of the batch", action: "collect and store eggs correctly and record birds, deaths, feed, eggs and treatments", standard: "with no missing days in the record" },
    { id: "O6", condition: "Using your local prices and expected mortality", action: "calculate the cost per bird sold or per tray and the break-even price for a batch", standard: "with every cost included and correct arithmetic" }
  ],
  chapters: [
    {
      name: "Chapter 1: Setting up the batch",
      lessons: [
        {
          title: "Broilers, layers or improved indigenous chickens",
          objectives: ["O1"],
          minutes: 5,
          goal: "Choose the type of chicken that fits your market, money and time.",
          text: [
            "Broilers are bred for meat. They grow very fast and are often sold within about 5 to 7 weeks, depending on the breed and the weight buyers want. Money comes back quickly, but they need high-quality feed, close care and a ready buyer on the day they are ready: every extra day eats feed and profit.",
            "Layers are bred for eggs. They start laying at about 4 to 5 months and lay for more than a year, so you feed them for months before any income, and you need a steady egg market. Improved indigenous or dual-purpose chickens sit in between: they are hardier than broilers and layers, can scavenge with some extra feed, and sell for meat and eggs, often at a better price per bird, but grow and lay less than commercial hybrids.",
            "Examples: Kenbro, sold by Kenchic in Kenya, is a dual-purpose bird; Kenchic says it is ready for meat at about 10 to 14 weeks or lays from about 25 weeks, but will not reach the production of specialised broilers or layers. The Kuroiler, developed in India, is a dual-purpose scavenging bird; a study in Uganda found Kuroilers grew heavier than local chickens under village conditions. Buy any breed only from a hatchery your livestock office or vet trusts, and ask other farmers how it performed for them."
          ],
          steps: ["Write who will buy: live birds, meat, eggs, hotels, markets.", "Write how much money you can spend before income starts.", "Write how much time you can give each day.", "Compare broilers, layers and improved indigenous birds against your lists.", "Choose one, with three reasons, and a trusted hatchery."],
          words: [["Broiler", "a chicken bred to grow fast for meat."], ["Layer", "a chicken bred to lay many eggs."], ["Improved indigenous chicken", "a hardier dual-purpose bird bred from or for local conditions, kept for meat and eggs."], ["Hatchery", "a business that hatches and sells day-old chicks."]],
          slides: [
            { title: "Broilers", bullets: ["Meat; often sold in about 5 to 7 weeks", "Fast money; need good feed and close care", "Need a buyer ready on the day"] },
            { title: "Layers", bullets: ["Eggs; start at about 4 to 5 months", "Months of feed before income", "Need a steady egg market"] },
            { title: "Improved indigenous", bullets: ["Hardier; can scavenge with extra feed", "Meat and eggs, often a better price per bird", "Examples: Kenbro (Kenchic), Kuroiler (from India)"] },
            { title: "Choose and buy well", bullets: ["Match market, money and time", "Trusted hatchery only", "Ask farmers who kept the breed"] }
          ],
          sources: [KENBRO, KUROILER],
          tryIt: "Write your three lists: buyers, money available before income, and daily time. Choose broilers, layers or improved indigenous birds and write three reasons, plus the name of a hatchery your livestock office or vet trusts.",
          youCanNow: "choose broilers, layers or improved indigenous chickens to fit your market, money and time.",
          quickCheck: [
            { objective: "O1", q: "A farmer has little money to wait and a hotel that buys meat birds every six weeks. Which type fits best?", options: ["Layers", "Broilers", "Ducks", "Village chickens left to scavenge"], answer: 1, why: "Broilers are sold within weeks, matching a regular meat buyer and a short wait for income." },
            { objective: "O1", q: "What does Kenchic say about Kenbro compared with specialised broilers and layers?", options: ["It grows faster than broilers", "It lays more than layers", "It will not reach their production levels", "It needs no feed at all"], answer: 2, why: "Kenbro is hardier and dual-purpose but does not match the output of specialised hybrids." }
          ]
        },
        {
          title: "Housing, space and brooding chicks",
          objectives: ["O2"],
          minutes: 6,
          goal: "Prepare the house, set the number of birds for the space, and brood chicks at the right warmth.",
          text: [
            "A good poultry house is dry, airy and safe. In hot areas, open sides with strong wire mesh let air through; a long house is often set east to west so less sun shines in, with a roof overhang to keep rain out. Use deep, dry litter such as wood shavings or rice husks. Keep out rats, snakes, wild birds and thieves. Before chicks arrive, clean and disinfect the empty house and equipment and leave it empty for the rest period your vet advises.",
            "Space: crowding causes heat stress, wet litter, pecking and disease. Your hatchery, breed guide or extension officer gives the number of birds per square metre for your breed, age and house. Multiply the floor area by that number. Example only: a 5 m by 8 m house is 40 square metres; if your guide says 10 broilers per square metre at market age, it holds 400 broilers, not 500.",
            "Brooding: day-old chicks cannot keep themselves warm. Set up a brooder ring (a circle of card or metal sheet) with litter, a heat source (gas or electric brooder, bulbs, or a charcoal stove with good ventilation, because charcoal fumes can kill), feeders and drinkers, and heat it before the chicks arrive. University of Missouri Extension gives about 32 to 35 °C under the heater in the first week, then about 3 °C less each week. Watch the chicks: huddled under the heat means too cold; far away and panting means too hot; crowded on one side means a draught; spread evenly means just right."
          ],
          steps: ["Clean and disinfect the empty house and equipment; rest it as the vet advises.", "Spread deep, dry litter.", "Work out how many birds the floor holds from your breed guide.", "Set up the brooder ring, heat source, feeders and drinkers.", "Heat it before the chicks arrive.", "Watch the chicks several times a day and adjust the heat."],
          words: [["Brooding", "keeping young chicks warm and fed in their first weeks."], ["Brooder ring", "a circle of card or metal sheet that keeps chicks near the heat, feed and water."], ["Litter", "dry bedding on the floor, such as wood shavings or rice husks."], ["Stocking density", "how many birds are kept per square metre of floor."]],
          slides: [
            { title: "A good house", bullets: ["Dry, airy, open sides with wire mesh in heat", "Roof overhang; often set east to west", "Deep dry litter; keep out rats and wild birds"] },
            { title: "Space", bullets: ["Crowding = heat stress, wet litter, disease", "Birds per square metre from your breed guide", "Example: 40 square metres x 10 = 400 broilers"] },
            { title: "Brooding set-up", bullets: ["Brooder ring, heat, feeders and drinkers", "Heat it before the chicks arrive", "Charcoal: good ventilation, fumes can kill"] },
            { title: "Read the chicks", bullets: ["About 32 to 35 °C at first, about 3 °C less each week", "Huddled = cold; far away = hot", "Crowded on one side = draught; spread = right"] }
          ],
          sources: [MU_BROODING, FAO_BIOSEC],
          tryIt: "Measure your poultry house (or a planned one) and work out the floor area. Ask your hatchery or extension officer how many birds per square metre for your breed, and write how many birds it holds. Sketch your brooder set-up.",
          youCanNow: "prepare a house, set the number of birds for its space, and brood chicks by watching how they behave.",
          quickCheck: [
            { objective: "O2", q: "Your chicks are all huddled tightly under the heater. What does it mean?", options: ["They are too hot", "They are hungry", "They are ready to leave the brooder", "They are too cold; add heat or block draughts"], answer: 3, why: "Huddling under the heat means the chicks are cold." },
            { objective: "O2", q: "Your house is 6 m by 5 m. The guide says 10 birds per square metre. How many birds?", options: ["300", "110", "600", "50"], answer: 0, why: "6 x 5 = 30 square metres, x 10 = 300 birds." }
          ]
        },
        {
          title: "Feeding and water by stage",
          objectives: ["O3"],
          minutes: 5,
          goal: "Plan the feed for each stage, when to change it, and a constant supply of clean water.",
          text: [
            "Feed is the biggest cost of a batch, so feed the right feed at the right stage. Broilers: broiler starter, then broiler finisher (some programmes add a grower). Layers: chick mash, then growers mash, then layers mash from the point of lay, which has the extra calcium hens need for strong shells. Improved indigenous birds: follow the hatchery's guide; under semi-free-range they still need a balanced feed on top of scavenging to grow and lay well. Change feeds over a few days by mixing old and new.",
            "Buy feed from a trusted miller, check the bag is labelled, dry and within date, and store it on pallets in a dry place. Use enough feeders so all birds can eat at once, raise them to the height of the birds' backs as they grow, and do not fill them to the brim, because birds scratch feed out and waste it.",
            "Water matters more than feed: chickens drink more water than they eat feed, and they stop eating and laying when water runs out or gets hot. Give clean, cool water all the time, with enough drinkers, cleaned every day. A sudden drop in water use is often the first sign of sickness. If you give a vaccine or medicine in water, follow the vet and label exactly; some need water without chlorine or disinfectant."
          ],
          steps: ["Write the stages for your type of bird.", "Write the feed for each stage and the age to change.", "Plan enough feeders and drinkers for all birds at once.", "Raise feeders and drinkers as the birds grow; do not overfill.", "Clean drinkers daily; never let water run out.", "Note daily water use; a sudden drop means call the vet."],
          words: [["Starter", "the first, high-protein feed for young chicks."], ["Finisher", "the last feed for broilers before sale."], ["Layers mash", "feed for laying hens with extra calcium for eggshells."], ["Point of lay", "the age when young hens are about to start laying."]],
          slides: [
            { title: "Feeds by stage", bullets: ["Broilers: starter, then finisher", "Layers: chick, growers, then layers mash", "Change over a few days"] },
            { title: "Buy and use feed well", bullets: ["Trusted miller; labelled, dry, in date", "Enough feeders; raise as birds grow", "Do not overfill: scratching wastes feed"] },
            { title: "Water comes first", bullets: ["Birds drink more than they eat", "Clean, cool water all the time", "Sudden drop in water use = warning sign"] }
          ],
          sources: [FAO_BIOSEC],
          tryIt: "Make a feed table for your batch: stage, age, feed type, and roughly how many bags you expect to buy (ask your feed supplier or hatchery). Add how many feeders and drinkers you need and who cleans the drinkers each day.",
          youCanNow: "plan the right feed for each stage, when to change it, and a constant supply of clean water.",
          quickCheck: [
            { objective: "O3", q: "Why do laying hens need layers mash rather than growers mash?", options: ["It is cheaper", "It makes them grow taller", "It has the extra calcium needed for strong eggshells", "It replaces water"], answer: 2, why: "Laying hens need extra calcium for shells, which layers mash supplies." },
            { objective: "O3", q: "Your broilers suddenly drink much less water than yesterday. What does this suggest?", options: ["They may be getting sick; check them and call the vet", "They are healthy and full", "The feed is too good", "It is time to sell them"], answer: 0, why: "A sudden drop in water use is often the first sign of disease." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Setting up the batch",
        questions: [
          { objective: "O1", q: "What is a key risk of broilers?", options: ["They take two years to sell", "They lay too many eggs", "They cannot be eaten", "Each extra day before sale eats feed and profit, so you need a buyer ready"], answer: 3, why: "Broilers keep eating; delays in selling cut profit fast." },
          { objective: "O1", q: "Which is true of improved indigenous chickens such as Kuroiler?", options: ["They are hardier and dual-purpose but produce less than specialised hybrids", "They need no water", "They are only for eggs", "They are the fastest-growing broilers"], answer: 0, why: "Dual-purpose birds trade some production for hardiness and meat-and-egg use." },
          { objective: "O2", q: "Chicks are spread far from the heater and panting. What do you do?", options: ["Add more heat", "Block all air", "Reduce the heat or raise the heater", "Add more chicks"], answer: 2, why: "Spreading far away and panting means the chicks are too hot." },
          { objective: "O2", q: "When should you heat the brooder?", options: ["After the chicks arrive", "Before the chicks arrive", "Only at night in week 3", "Never; chicks warm themselves"], answer: 1, why: "Day-old chicks need warmth from the moment they arrive." },
          { objective: "O3", q: "How should you change from one feed to the next?", options: ["Overnight", "Stop feeding for a day first", "Only when birds look thin", "Over a few days, mixing old and new"], answer: 3, why: "A gradual change avoids upsetting the birds' eating and digestion." }
        ]
      }
    },
    {
      name: "Chapter 2: Running a profitable batch",
      lessons: [
        {
          title: "A vaccination programme and batch biosecurity",
          objectives: ["O4"],
          minutes: 6,
          goal: "Write a vaccination programme with your vet and set biosecurity rules for the batch.",
          text: [
            "Vaccination protects the batch from diseases that are common in your area. Which vaccines, at what age and how they are given (drinking water, eye drop, injection or wing stab) must be set by a registered vet or animal health officer, because diseases differ by area and season. Common examples in Africa include Newcastle disease and Gumboro, plus Marek's disease (often given at the hatchery) and fowl pox; your vet may add others. Ask the hatchery for a record of what the chicks already received.",
            "Make the vaccines work: buy from a licensed agrovet, check the expiry date, keep them cool from the shop to the birds, give them exactly as the label and vet say, vaccinate the whole flock, and write the date, vaccine, batch number and method in your records. Never treat sick birds with antibiotics on your own: the vet decides, and you record the withdrawal period from the label so no eggs or meat are sold before it ends.",
            "Batch biosecurity: buy chicks from one trusted hatchery and run the house all-in, all-out (all birds the same age, in together and out together). Between batches, remove all litter, wash and disinfect the house and equipment, and leave it empty for the rest period your vet advises. Keep visitors out, use a footbath and farm boots, keep wild birds and rats away, and never bring market birds home. Avian influenza is notifiable: sudden deaths, swollen purple combs, gasping or a sharp egg drop mean keep birds in, stop all sales and movement, and call the vet at once."
          ],
          steps: ["Ask the hatchery what vaccines the chicks already received.", "Sit with your vet and write the programme: disease, age, method.", "Buy vaccines from a licensed agrovet; check expiry; keep them cool.", "Vaccinate the whole flock exactly as the label and vet say; record it.", "Run all-in, all-out; clean, disinfect and rest the house between batches.", "Suspected avian influenza or Newcastle disease: keep birds in, stop sales, call the vet."],
          words: [["Vaccination programme", "a written plan of which vaccines the flock gets, at what age and how, set by the vet."], ["All-in, all-out", "all birds in a house are the same age, placed together and removed together."], ["Withdrawal period", "the time after a medicine before eggs or meat can be sold; it is on the label."], ["Licensed agrovet", "a shop allowed by law to sell animal medicines and vaccines."]],
          slides: [
            { title: "The vet sets the programme", bullets: ["Which vaccines, what age, which method", "Common: Newcastle, Gumboro, Marek's, fowl pox", "Ask the hatchery what chicks already had"] },
            { title: "Make vaccines work", bullets: ["Licensed agrovet; check expiry; keep cool", "Exactly as the label and vet say; whole flock", "Record date, vaccine, batch number, method"] },
            { title: "Batch biosecurity", bullets: ["One hatchery; all-in, all-out", "Clean, disinfect and rest between batches", "Footbath, farm boots, no visitors, no market birds"] },
            { title: "Avian influenza: report at once", bullets: ["Sudden deaths, purple combs, gasping, egg drop", "Keep birds in; stop sales and movement", "Call the vet or veterinary office now"] }
          ],
          sources: [WOAH_ND, WOAH_AI, APHIS_AI, FAO_BIOSEC, FAO_PRUDENT, KVB, VCN],
          tryIt: "Book a talk with your vet or animal health officer. Bring a table with columns: disease, age, method, date given, batch number. Fill in the programme the vet sets. Under it, write five biosecurity rules for your batch.",
          youCanNow: "write a vaccination programme with your vet, record each vaccination, and run strict batch biosecurity.",
          quickCheck: [
            { objective: "O4", q: "Who should decide which vaccines your flock gets and when?", options: ["The feed seller", "A registered vet or animal health officer", "A neighbour with chickens", "A social media group"], answer: 1, why: "Diseases differ by area, so a registered vet sets the programme." },
            { objective: "O4", q: "What does all-in, all-out mean?", options: ["Birds go out to scavenge every day", "Visitors may come in and out freely", "New birds are added every week", "All birds in a house are placed and removed together"], answer: 3, why: "One age group per house lets you clean and rest it fully between batches, breaking disease cycles." }
          ]
        },
        {
          title: "Egg handling and flock records",
          objectives: ["O5"],
          minutes: 5,
          goal: "Collect and store eggs correctly and keep daily flock records.",
          text: [
            "Eggs lose quality and pick up germs if they sit in nests. Collect at least twice a day, more in hot weather. Keep nests clean with fresh litter so eggs come out clean. Separate cracked, dirty and very small eggs. Clean lightly soiled eggs with a dry cloth; do not soak them in water, which can pull germs through the shell. Store eggs in trays, pointed end down, in a cool, shaded, airy place away from strong smells, and sell the oldest first.",
            "Records tell you what is happening before it is too late. Every day write: number of birds, deaths and their likely cause, feed used, water used, and eggs collected (by tray and grade). Also record each vaccination and treatment, the withdrawal end date from the label, every purchase and every sale. A paper book works; a phone spreadsheet adds the totals for you.",
            "Use the records. Mortality rate = birds dead / birds started x 100. Laying rate = eggs collected in a day / hens x 100. If deaths rise, water use falls or the laying rate drops suddenly, check the flock and call the vet. At the end of the batch, the records give you the numbers for your cost sheet."
          ],
          steps: ["Collect eggs at least twice a day.", "Separate cracked, dirty and small eggs; dry-clean lightly soiled ones.", "Store in trays, pointed end down, cool and shaded; oldest first.", "Each day record birds, deaths, feed, water and eggs.", "Record vaccinations, treatments, withdrawal end dates, purchases and sales.", "Work out mortality and laying rate each week and look for sudden changes."],
          words: [["Mortality rate", "the share of birds that died, as a percent of the birds you started with."], ["Laying rate", "eggs collected in a day as a percent of the number of hens."], ["Grade", "sorting eggs by size and quality."]],
          slides: [
            { title: "Egg handling", bullets: ["Collect at least twice a day", "Clean nests; separate cracked and dirty eggs", "Dry-clean; do not soak in water"] },
            { title: "Egg storage", bullets: ["Trays, pointed end down", "Cool, shaded, airy, no strong smells", "Sell the oldest first"] },
            { title: "Daily records", bullets: ["Birds, deaths and cause, feed, water, eggs", "Vaccinations, treatments, withdrawal end dates", "Every purchase and sale"] },
            { title: "Use the numbers", bullets: ["Mortality = dead / started x 100", "Laying rate = eggs a day / hens x 100", "Sudden change: check the flock, call the vet"] }
          ],
          sources: [FAO_BIOSEC],
          tryIt: "Make a daily record page with columns: date, birds, deaths and cause, feed used, water used, eggs collected, notes. Fill in an example week. Then work out the mortality rate and, for layers, the laying rate for one day.",
          youCanNow: "collect and store eggs correctly and keep daily records that show mortality and laying rate.",
          quickCheck: [
            { objective: "O5", q: "How should eggs be stored in trays?", options: ["Pointed end up, in the sun", "Pointed end down, in a cool, shaded place", "Washed and soaked first", "Next to paraffin and onions"], answer: 1, why: "Pointed end down, cool and shaded keeps eggs fresh longer." },
            { objective: "O5", q: "You started with 500 broilers and 25 died. What is the mortality rate?", options: ["25 percent", "2.5 percent", "50 percent", "5 percent"], answer: 3, why: "25 / 500 x 100 = 5 percent." }
          ]
        },
        {
          title: "The economics of a batch: cost per bird and break-even",
          objectives: ["O6"],
          minutes: 6,
          goal: "Calculate the cost per bird or per tray and the break-even price for a batch.",
          text: [
            "List every cost of the batch: chicks, feed, vaccines and vet, litter, brooding fuel or electricity, disinfectant, labour, transport and packaging. Example with made-up Kenya shilling prices, 500 broilers: chicks 50,000; feed 122,500; vaccines and vet 5,000; litter, brooding and power 8,000; transport and other 6,500. Total KES 192,000. Use your own quotes: prices differ by place and season, and in NGN, GHS or XOF the method is the same.",
            "Mortality changes everything, because dead birds still ate feed. If 5 percent die, you sell 475 birds. Cost per bird sold = 192,000 / 475 = KES 404. That is your break-even price: sell below it and you lose money. If 15 percent die, you sell only 425, and the break-even rises to about KES 452. At a selling price of KES 550, 475 birds bring 261,250, a profit of 69,250. To find how many birds you must sell to cover costs: 192,000 / 550 = 349.1, so 350 birds.",
            "Layers: work weekly. Example: 300 hens at an 80 percent laying rate give 300 x 0.8 x 7 = 1,680 eggs, or 56 trays of 30. If feed and other costs are KES 15,000 a week, the cost per tray is 15,000 / 56 = about KES 268. Compare it with the price buyers pay. Before you start, also read any loan or contract with a buyer or supplier fully, and ask a trusted adviser."
          ],
          steps: ["List every cost of the batch with your local prices.", "Add them up for the total cost.", "Estimate mortality and work out birds you will sell.", "Cost per bird = total cost / birds sold: your break-even price.", "Layers: cost per tray = weekly costs / trays collected.", "Compare with the selling price; work out profit or loss."],
          words: [["Break-even price", "the price per bird or tray at which income just covers all costs."], ["Profit", "income minus all costs."], ["Cost sheet", "a list of every cost of the batch with the totals."]],
          slides: [
            { title: "List every cost", bullets: ["Chicks, feed, vaccines and vet, litter, fuel", "Labour, transport, packaging", "Example total: KES 192,000 for 500 broilers"] },
            { title: "Mortality raises cost per bird", bullets: ["5 percent dead: 475 sold, KES 404 each", "15 percent dead: 425 sold, about KES 452 each", "Dead birds still ate feed"] },
            { title: "Break-even and profit", bullets: ["Break-even = total cost / birds sold", "At KES 550: 475 x 550 - 192,000 = KES 69,250", "Birds needed to cover costs: 192,000 / 550 = 350"] },
            { title: "Layers: cost per tray", bullets: ["300 hens x 0.8 x 7 = 1,680 eggs = 56 trays", "KES 15,000 / 56 = about KES 268 a tray", "Prices are examples; use your own"] }
          ],
          tryIt: "Final task: write your costed plan for one batch: type of bird, house size and number of birds, brooding set-up, feeds by stage, vaccination programme and biosecurity rules, records, and a cost sheet with every cost, expected mortality, cost per bird sold or per tray, and your break-even price.",
          youCanNow: "cost a batch, allow for mortality, and work out your cost per bird or per tray and your break-even price.",
          quickCheck: [
            { objective: "O6", q: "A batch costs NGN 900,000 and you expect to sell 450 birds. What is the break-even price per bird?", options: ["NGN 200", "NGN 450", "NGN 2,000", "NGN 20,000"], answer: 2, why: "900,000 / 450 = NGN 2,000 per bird." },
            { objective: "O6", q: "Why does higher mortality raise your cost per bird?", options: ["Dead birds ate feed and cost money but are not sold", "Dead birds are sold at a higher price", "Feed gets cheaper", "Vaccines cost less"], answer: 0, why: "The same total cost is shared by fewer birds sold." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Running a profitable batch",
        questions: [
          { objective: "O4", q: "Before buying vaccines, what should you check?", options: ["That they are the cheapest", "That they come from a licensed agrovet, are in date and have been kept cool", "That they come without a label", "That a neighbour has some left over"], answer: 1, why: "Expired or warm vaccines may not protect the flock." },
          { objective: "O4", q: "Your layers suddenly die in large numbers with purple combs. What do you do?", options: ["Sell the eggs quickly", "Give antibiotics from the shop", "Bring in new birds", "Keep birds in, stop all sales and movement, and call the vet at once"], answer: 3, why: "These signs suggest avian influenza, which is notifiable and must be reported at once." },
          { objective: "O5", q: "Why collect eggs at least twice a day?", options: ["Eggs left in nests lose quality and pick up germs", "Hens lay only at night", "It makes hens lay double", "Buyers prefer warm eggs"], answer: 0, why: "Frequent collection keeps eggs clean and fresh." },
          { objective: "O5", q: "250 hens laid 200 eggs today. What is the laying rate?", options: ["50 percent", "125 percent", "80 percent", "20 percent"], answer: 2, why: "200 / 250 x 100 = 80 percent." },
          { objective: "O6", q: "Weekly layer costs are GHS 2,400 and you collect 60 trays. What is the cost per tray?", options: ["GHS 40", "GHS 144", "GHS 4", "GHS 400"], answer: 0, why: "2,400 / 60 = GHS 40 per tray." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Commercial Poultry Production",
    questions: [
      { objective: "O1", q: "Which type of chicken gives income soonest?", options: ["Layers", "Broilers", "Breeding cocks", "Improved indigenous birds kept for eggs"], answer: 1, why: "Broilers are often sold within about 5 to 7 weeks." },
      { objective: "O1", q: "What do layers need that broilers do not?", options: ["A buyer on one fixed day", "No feed for months", "Months of feeding before income and a steady egg market", "Selling within six weeks"], answer: 2, why: "Layers only start laying at about 4 to 5 months, then need regular egg buyers." },
      { objective: "O1", q: "Where should you buy day-old chicks?", options: ["From a hatchery your livestock office or vet trusts", "From any roadside seller", "From the cheapest online advert", "From a farm with sick birds"], answer: 0, why: "A trusted hatchery gives healthy chicks of the right breed with vaccination records." },
      { objective: "O2", q: "Chicks crowd on one side of the brooder, away from the heater. What is the likely cause?", options: ["Too hot", "Too much feed", "They are sleepy", "A draught"], answer: 3, why: "Crowding on one side away from the heat suggests a draught." },
      { objective: "O2", q: "What happens if you crowd too many birds into a house?", options: ["They grow faster", "Heat stress, wet litter, pecking and disease", "They need less water", "Eggs get bigger"], answer: 1, why: "Crowding harms health and growth." },
      { objective: "O2", q: "Why must a charcoal brooder have good ventilation?", options: ["Charcoal fumes can kill chicks and people", "To cool the chicks", "To let wild birds in", "To save charcoal"], answer: 0, why: "Burning charcoal gives off deadly fumes in a closed space." },
      { objective: "O2", q: "What should you do to the house before a new batch arrives?", options: ["Add new birds to the old ones", "Leave old litter for warmth", "Clean, disinfect and rest it as the vet advises", "Nothing"], answer: 2, why: "Cleaning, disinfecting and resting breaks the disease cycle between batches." },
      { objective: "O3", q: "What is the usual feed order for broilers?", options: ["Layers mash, then starter", "Growers mash only", "Chick mash, then layers mash", "Starter, then finisher"], answer: 3, why: "Broilers start on high-protein starter and finish on finisher." },
      { objective: "O3", q: "Why not fill feeders to the brim?", options: ["Birds scratch feed out and waste it", "Feed goes cold", "It makes birds lay less", "It attracts vets"], answer: 0, why: "Overfilled feeders waste feed, the biggest cost of the batch." },
      { objective: "O3", q: "What is often the first sign that birds are getting sick?", options: ["They lay bigger eggs", "Their feathers turn white", "A sudden drop in water use", "They grow faster"], answer: 2, why: "Sick birds drink less, often before other signs show." },
      { objective: "O4", q: "Which is a common poultry vaccine in Africa set by the vet?", options: ["Newcastle disease", "Rabies", "Foot-and-mouth", "East Coast fever"], answer: 0, why: "Newcastle disease is one of the most common poultry vaccines; the vet sets the programme." },
      { objective: "O4", q: "What should you record each time you vaccinate?", options: ["Only the weather", "Nothing; the agrovet keeps records", "The price of eggs", "Date, vaccine, batch number and method"], answer: 3, why: "Full records show what the flock received and help the vet." },
      { objective: "O4", q: "Who decides whether to give antibiotics to sick birds?", options: ["The farm worker", "The vet", "The egg buyer", "The feed seller"], answer: 1, why: "The vet decides, and you record the withdrawal end date from the label." },
      { objective: "O5", q: "How should you clean a lightly soiled egg?", options: ["Soak it in water", "Scrub it with soap", "Wipe it with a dry cloth", "Leave it in the nest"], answer: 2, why: "Dry-cleaning avoids pulling germs through the shell." },
      { objective: "O5", q: "Which belongs in the daily flock record?", options: ["Birds, deaths, feed, water and eggs", "Only the eggs sold", "The neighbour's sales", "Nothing if all looks well"], answer: 0, why: "Daily numbers show problems early and feed the cost sheet." },
      { objective: "O5", q: "You started 1,000 broilers and 80 died. What is the mortality rate?", options: ["80 percent", "0.8 percent", "12.5 percent", "8 percent"], answer: 3, why: "80 / 1,000 x 100 = 8 percent." },
      { objective: "O6", q: "What is the break-even price per bird?", options: ["The highest price at the market", "Total cost divided by birds sold", "The price of one chick", "Feed cost only"], answer: 1, why: "At this price, income just covers all the costs." },
      { objective: "O6", q: "A batch costs XOF 1,500,000 and you sell 500 birds at XOF 4,000. What is the profit?", options: ["XOF 2,000,000", "XOF 1,500,000", "XOF 500,000", "XOF 4,000"], answer: 2, why: "500 x 4,000 = 2,000,000 income; minus 1,500,000 cost = XOF 500,000 profit." },
      { objective: "O6", q: "300 hens lay at 80 percent for a week. About how many trays of 30 eggs?", options: ["56", "80", "240", "1,680"], answer: 0, why: "300 x 0.8 x 7 = 1,680 eggs; 1,680 / 30 = 56 trays." },
      { objective: "O6", q: "Your cost per bird sold is KES 404 and buyers pay KES 380. What is happening?", options: ["You make KES 24 profit per bird", "You break even", "Nothing; prices do not matter", "You lose about KES 24 per bird"], answer: 3, why: "Selling below the break-even price loses money on every bird." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  // pre-test: these quiz questions, taken before Lesson 1, so the quiz shows how much each learner gained
  pretest: { title: "Pre-Test: What Do You Already Know?", from: [0, 3, 5, 7, 9, 10, 13, 15, 16] },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part of the plan and check it again.",
    criteria: [
      { name: "Type of bird and market", objective: "O1", notYet: "No reason for the choice, or no buyer named.", meets: "Names the type of bird, a trusted hatchery and at least three reasons that fit the market, money and time.", exceeds: "Names a specific buyer and when they buy, and plans the batch to match." },
      { name: "House, space and brooding", objective: "O2", notYet: "Number of birds not worked out from the floor area, or no brooding plan.", meets: "Floor area x birds per square metre from the guide; brooder set-up with heat checked by chick behaviour.", exceeds: "Also covers cleaning, disinfecting and resting the house and safe ventilation for the heat source." },
      { name: "Feed and water plan", objective: "O3", notYet: "Stages or feed types missing, or no water plan.", meets: "Feed type for each stage, change dates, enough feeders and drinkers, and clean water all the time.", exceeds: "Estimates bags of feed per stage and who checks water daily." },
      { name: "Vaccination and biosecurity", objective: "O4", notYet: "No vet involved, or doses invented, or no biosecurity rules.", meets: "Programme set by a registered vet, recorded; all-in, all-out and at least four biosecurity rules; avian influenza reporting.", exceeds: "Includes the vet's name and number and the hatchery's vaccination record." },
      { name: "Records", objective: "O5", notYet: "No daily record plan.", meets: "Daily record of birds, deaths, feed, water and eggs, plus vaccinations, treatments and sales.", exceeds: "Shows how mortality and laying rate will be checked each week." },
      { name: "Cost sheet and break-even", objective: "O6", notYet: "Costs missing, mortality ignored, or arithmetic wrong.", meets: "Every cost listed, mortality allowed for, correct cost per bird or tray and break-even price.", exceeds: "Compares break-even with real buyer prices and shows profit at two mortality levels." }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Learners who run their next batch with a written plan and daily records (30-day follow-up)",
      "Mortality per batch reported by learners before and after the course",
      "Learners who know and can state their cost per bird or per tray when they sell",
      "Suspected avian influenza or Newcastle disease cases reported by learners to the vet within one day"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Paper, pen and a phone calculator; a phone spreadsheet is optional",
      "A tape measure for the poultry house",
      "Local prices for chicks, feed, vaccines and other costs, and the name and number of a vet and a trusted hatchery",
      "About 70 to 80 minutes in total, in short sessions: lessons, practice, checks and the final task"
    ],
    facilitatorNotes: [
      "Before the session, collect local prices for chicks, feed and vaccines so learners cost a batch with real numbers.",
      "Invite a local vet or animal health officer to the Chapter 2 session to set out a vaccination programme for your area; never give vaccine or drug doses yourself.",
      "If you visit a poultry farm, follow its biosecurity rules and do not visit another poultry farm the same day.",
      "Work the break-even example on a board, then have pairs cost their own batch.",
      "Score each costed batch plan with the rubric and give feedback on one Not yet row at a time."
    ]
  }
};
