"use strict";

// Koach Learn course: Agriculture (Africa) -> "Dairy Farming: Milk Production and Hygiene" (owner's request for farmer courses, 29 October 2026).
// For smallholder and growing dairy farmers with cows or dairy goats in Kenya, Nigeria, Ghana, Burkina Faso and across Africa: choosing animals, zero-grazing
// housing, feeding for milk (in depth in agri-livestock-nutrition), a clean milking routine, mastitis and the California Mastitis Test (CMT), cooling and
// selling milk that passes the buyer's tests, calf rearing, records and cost per litre.
// Safety rule: the course never gives drug, vaccine or hormone doses or withdrawal periods as numbers; it tells students to follow the vet and the label.
// Facts are sourced to ILRI, FAO's dairy pages, the Kenya Dairy Board and University of Missouri Extension (CMT). Money figures are examples only.

const ILRI_MANUAL = { name: "ILRI: Smallholder dairy farmer training manual (Goopy and Gakige, ILRI Manual 24, 2nd edition, 2019)", url: "https://hdl.handle.net/10568/77004" };
const FAO_PRESERVE = { name: "FAO Dairy production and products: milk preservation (cool to 4 °C within 3 to 4 hours of milking)", url: "https://www.fao.org/dairy-production-products/processing/milk-preservation/en" };
const FAO_TESTING = { name: "FAO Dairy production and products: milk quality and testing", url: "https://www.fao.org/dairy-production-products/products/quality-and-testing/en" };
const FAO_HEALTH = { name: "FAO Dairy production and products: animal health (mastitis lowers milk yield and quality)", url: "https://www.fao.org/dairy-production-products/production/animal-health/en" };
const MU_CMT = { name: "University of Missouri Extension: Using the California Mastitis Test (procedure and interpretation)", url: "https://extension.missouri.edu/publications/g3653" };
const KDB = { name: "Kenya Dairy Board (regulates the dairy industry; permits for milk handlers)", url: "https://www.kdb.go.ke/" };
const KDB_PERMITS = { name: "Kenya Dairy Board: licensing requirements", url: "https://www.kdb.go.ke/licensing-requirement/" };

module.exports = {
  id: "agri-dairy-farming",
  category: "Agriculture (Africa)",
  name: "Dairy Farming: Milk Production and Hygiene",
  skills: "Choosing dairy cows and goats, Setting up zero-grazing housing, Milking cleanly, Spotting and testing for mastitis, Cooling and selling quality milk, Rearing calves and working out cost per litre",
  outcome: "run a small dairy that produces clean milk a buyer accepts: choose and house your cows or goats, milk them with a clean routine, find mastitis early with the California Mastitis Test, cool and sell milk that passes quality tests, raise healthy calves, and work out what each litre costs you.",
  about: [
    "This course is for smallholder and growing dairy farmers, farm workers, young agripreneurs and extension workers in Kenya, Nigeria, Ghana, Burkina Faso and across Africa who keep, or plan to keep, dairy cows or dairy goats. Clean milk sells for more, is rejected less, and keeps families safe; dirty milk and hidden mastitis quietly eat your profit.",
    "Chapter 1 sets up the dairy: choosing animals, zero-grazing housing and feeding for milk, and a clean milking routine. Chapter 2 protects and sells the milk: mastitis and the California Mastitis Test, cooling and selling to a cooperative or processor, and calf rearing, records and cost per litre. Feeding is covered in depth in the course \"Livestock Nutrition and Feed Formulation with Local Ingredients\"; here you learn how feed links to milk and cost.",
    "This course never gives drug, vaccine or hormone doses or withdrawal periods. Always follow your veterinarian or animal health officer and the product label. Money figures are examples only; use your own prices. Each lesson takes about five minutes and ends with a task on your own farm. A knowledge check closes each chapter and a 20-question quiz closes the course."
  ],
  finalTask: "Make two pages for your own dairy (or an example such as 3 cows in Kiambu or 10 dairy goats near Kumasi). Page 1, a milking-hygiene routine to pin up in the milking area: the steps from preparing the milker and utensils to cooling the milk, the mastitis signs to look for, when you do a CMT, and what happens to milk from sick or treated animals. Page 2, a cost-per-litre sheet for one month: every cost (feed and fodder, labour, vet and breeding, other), the litres produced, the cost per litre, the price your buyer pays, and one change you will make to lower the cost per litre.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Smallholder and growing dairy farmers, farm workers, young agripreneurs and extension workers in Kenya, Nigeria, Ghana, francophone West Africa and elsewhere in Africa, keeping 1 to 20 cows or a small herd of dairy goats, often under zero-grazing or semi-zero-grazing.",
    startingPoint: "Can feed, water and milk animals by hand and sell milk locally. Many milk without a fixed hygiene routine, use plastic containers, notice mastitis only when the milk looks bad, and do not know what one litre costs them to produce.",
    gap: "Buyers and cooperatives test milk and reject or pay less for milk that is sour, watered or contains drug residues. Hidden (subclinical) mastitis cuts yield without visible signs. Farmers need a routine that produces clean, cool milk, a way to find mastitis early, and records that show whether each litre makes a profit.",
    constraints: [
      "Reading level: plain words and short sentences; the course is also available in Spanish, French and Arabic",
      "Devices: a basic phone or smartphone; a calculator; paper records are fine",
      "Time: 4 to 6 minute lessons that fit around milking times",
      "No electricity or milk cooler on many farms",
      "Animal health: no drug, vaccine or hormone doses or withdrawal numbers; follow the vet and the label",
      "Money figures are examples; prices, permits and buyer rules differ by country and buyer"
    ],
    prerequisites: "None. \"Livestock Health and Management\" (daily health checks) and \"Livestock Nutrition and Feed Formulation with Local Ingredients\" (rations) are useful companions."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Given your land, money, fodder and market", action: "choose dairy cows or goats and lay out a zero-grazing unit with stall, feed trough, water and drainage", standard: "naming at least four checks you made before buying" },
    { id: "O2", condition: "At every milking", action: "carry out a clean milking routine from preparing the milker and utensils to filtering and covering the milk", standard: "doing every step in order with no step skipped" },
    { id: "O3", condition: "Given a cow or goat in milk", action: "check for the signs of mastitis and run a California Mastitis Test on each teat", standard: "recording the result for each quarter or half and calling the vet for any positive or sick animal" },
    { id: "O4", condition: "After milking, with or without a cooler", action: "cool, store and deliver milk so it passes the buyer's quality tests", standard: "reaching the cooler or buyer within the time the buyer sets, with nothing added to the milk" },
    { id: "O5", condition: "Given one month of farm records", action: "calculate the cost per litre of milk and compare it with the price your buyer pays", standard: "with every cost included and the arithmetic correct" }
  ],
  chapters: [
    {
      name: "Chapter 1: Setting up a clean dairy",
      lessons: [
        {
          title: "Choosing dairy cows and goats",
          objectives: ["O1"],
          minutes: 5,
          goal: "Choose dairy animals that fit your feed, money and market.",
          text: [
            "A dairy animal is only as good as the feed and care you can give it. A high-yielding Friesian (Holstein) cow needs a lot of good feed and water every day; if you cannot supply it, a cross with a local breed, or a smaller breed such as a Jersey or Ayrshire, may earn you more. In drier areas, hardy local breeds and crosses, such as zebu crosses in northern Nigeria or the Azawak zebu in Niger and Burkina Faso, cope better with heat and poor fodder.",
            "Dairy goats suit small plots and smaller budgets. They eat less, cost less, and goat milk has its own buyers. In Kenya, Saanen, Toggenburg and Alpine goats and their crosses with local goats are kept for milk.",
            "Before you buy, check: Do you have fodder and water all year, including the dry season? Who will buy your milk, and at what price? Can you reach a vet and an artificial insemination (AI) service? Then check the animal: buy from a known farmer with records, look for a healthy, alert animal with a well-shaped udder and four (cow) or two (goat) working teats, ask about past milk yield, calving and illness, and ask a vet or animal health officer to check her before you pay."
          ],
          steps: ["List your fodder and water for the wet and dry seasons.", "Find your buyer and the price per litre.", "Find your nearest vet and AI service.", "Choose the breed or cross your feed can support.", "Buy from a known seller with records; check udder, teats and health.", "Ask a vet to examine the animal before you pay."],
          words: [["Dairy breed", "a breed raised mainly for milk, such as Friesian, Jersey or Ayrshire cows, or Saanen and Toggenburg goats."], ["Cross", "an animal whose parents are two different breeds, often an exotic dairy breed and a local breed."], ["Artificial insemination (AI)", "putting semen from a chosen bull or buck into the female, done by a trained technician."]],
          slides: [
            { title: "Feed decides the breed", bullets: ["High yielders need lots of good feed and water", "Crosses and smaller breeds suit less feed", "Hardy local breeds cope with heat and dry seasons"] },
            { title: "Dairy goats", bullets: ["Less feed, less money, less space", "Saanen, Toggenburg, Alpine and crosses", "Find goat milk buyers first"] },
            { title: "Before you buy", bullets: ["Fodder and water all year?", "A buyer and a price per litre?", "A vet and AI service you can reach?"] },
            { title: "Check the animal", bullets: ["Known seller with records", "Healthy, alert; good udder; all teats working", "Vet examines her before you pay"] }
          ],
          sources: [ILRI_MANUAL],
          tryIt: "Write your own buying checklist: your fodder and water for the dry season, your buyer and price, your nearest vet and AI service, the breed or cross you can feed, and five things you will check on the animal before you pay.",
          youCanNow: "match a dairy breed to your feed and market and check an animal properly before you buy it.",
          quickCheck: [
            { objective: "O1", q: "You have little fodder in the dry season. Which choice is wisest?", options: ["Buy the highest-yielding Friesian you can find", "Buy a cross or smaller breed your feed can support", "Buy more cows so some survive", "Buy now and plan fodder later"], answer: 1, why: "A cow only gives what her feed allows; a cross or smaller breed fits limited fodder." },
            { objective: "O1", q: "Which check should you do before you pay for a cow?", options: ["Ask a vet to examine her and look at her records", "Count her spots", "Check only her colour", "Ask the seller if she is good"], answer: 0, why: "A vet check and records show health, past yield and calving." }
          ]
        },
        {
          title: "Zero-grazing housing and feeding for milk",
          objectives: ["O1"],
          minutes: 6,
          goal: "Lay out a zero-grazing unit and plan feed and water for milk.",
          text: [
            "In zero-grazing, the animals stay in a unit and you bring feed to them, such as cut Napier grass, other fodder and crop residues. It saves land and lets you control feed, but it needs daily labour and good hygiene.",
            "A good unit has: a roof for shade and rain; a stall or cubicle for each cow with dry, soft bedding so she can lie down; a floor that slopes so urine and water drain away; a feed trough and a water trough that are easy to clean; a clean, separate place to milk; a calf pen; a manure pit away from the milking area; and a store for feed. For goats, a raised slatted floor keeps them dry. Clean dung out every day, because dirty bedding is a main cause of mastitis.",
            "Milk is made from feed and water. A cow in milk needs plenty of clean water all day, good roughage, and extra energy, protein and minerals in balance; milk drops fast when water or feed runs short. How to build a ration from local feeds is taught in \"Livestock Nutrition and Feed Formulation with Local Ingredients\". Here, remember two things: record what each feed costs, because feed is usually your biggest cost, and change feeds slowly."
          ],
          steps: ["Mark out a roofed unit on well-drained ground.", "Give each animal a stall with dry bedding and a sloped floor.", "Place feed and water troughs where they are easy to fill and clean.", "Add a clean milking place, a calf pen and a feed store.", "Put the manure pit away from milking and water.", "Clean out dung every day; record feed bought and its cost."],
          words: [["Zero-grazing", "keeping animals in a unit and bringing all their feed to them instead of letting them graze."], ["Bedding", "dry, soft material on the floor where animals lie, such as wood shavings, dry grass or sand."], ["Roughage", "bulky feed such as grass, fodder, hay and crop residues."]],
          slides: [
            { title: "Zero-grazing", bullets: ["Animals stay in a unit; you bring feed", "Saves land; you control feed", "Needs daily labour and hygiene"] },
            { title: "A good unit", bullets: ["Roof; one stall per cow; dry bedding", "Sloped floor that drains", "Feed and water troughs easy to clean"] },
            { title: "Keep it clean", bullets: ["Separate clean milking place", "Calf pen; feed store", "Manure pit away from milking; clean daily"] },
            { title: "Feed makes milk", bullets: ["Plenty of clean water all day", "Roughage plus balanced energy, protein, minerals", "Record feed costs; change feeds slowly"] }
          ],
          sources: [ILRI_MANUAL],
          tryIt: "Draw a simple plan of your zero-grazing unit (or the one you will build): stalls, bedding, floor slope, feed trough, water trough, milking place, calf pen, feed store and manure pit. Mark one thing you will fix first.",
          youCanNow: "lay out a zero-grazing unit that keeps animals dry and clean and explain how feed and water turn into milk.",
          quickCheck: [
            { objective: "O1", q: "Why should the floor of a zero-grazing stall slope?", options: ["So the cow can slide out", "So urine and water drain away and bedding stays dry", "To save cement", "So feed rolls to the cow"], answer: 1, why: "A dry floor and bedding keep udders clean and lower mastitis." },
            { objective: "O1", q: "Where should the manure pit be?", options: ["Next to the water trough", "Inside the milking area", "Away from the milking place and water", "Under the feed store"], answer: 2, why: "Manure near milking or water spreads dirt and germs into the milk." }
          ]
        },
        {
          title: "A clean milking routine",
          objectives: ["O2"],
          minutes: 6,
          goal: "Milk a cow or goat with a clean routine, step by step.",
          text: [
            "Germs get into milk from dirty hands, dirty udders, dirty containers and the air of a dirty shed. A fixed routine, done the same way at every milking, keeps them out. Milk at the same times every day, in a clean place, calmly: a frightened animal lets down less milk.",
            "Use smooth metal containers (aluminium or stainless steel) that are easy to clean. Plastic jerricans scratch and hold dirt, and many buyers reject milk that comes in them. Wash containers after every use with clean water and detergent, rinse, and dry them upside down on a rack in the sun.",
            "Milk healthy animals first and any sick or treated animal last. Keep milk from an animal treated with a drug separate and do not sell it until the withdrawal period on the product label, or given by your vet, has passed."
          ],
          steps: ["Wear clean clothes; keep nails short; wash your hands with soap.", "Bring clean, dry metal containers, a strip cup and a filter or clean sieve.", "Tie or settle the animal calmly in the clean milking place.", "Wash the teats (and udder only if dirty) with clean warm water and dry them with a separate clean cloth or paper for each animal.", "Squirt the first milk from each teat into a strip cup and look for clots, flakes or watery milk.", "Milk quickly and fully with the whole hand, not by pulling with the fingers.", "Dip or spray the teats after milking if your vet advises it, and give feed so the animal stays standing for a while.", "Filter the milk, cover it, and start cooling it at once."],
          words: [["Strip cup", "a cup with a dark plate or cloth on top; the first squirts of milk show clots or flakes on it."], ["Teat dip", "a disinfectant liquid the teats are dipped in after milking to kill germs; use one your vet recommends, as the label says."], ["Withdrawal period", "the time after a drug is given when milk or meat must not be sold or eaten; it is written on the label or given by the vet."]],
          slides: [
            { title: "Where germs come from", bullets: ["Dirty hands and udders", "Dirty containers", "A dirty, dusty shed"] },
            { title: "Before milking", bullets: ["Clean clothes, short nails, wash hands", "Clean, dry metal containers", "Wash and dry teats: one cloth per animal"] },
            { title: "During milking", bullets: ["Strip cup: check the first milk", "Milk quickly and fully, whole hand", "Healthy animals first, sick or treated last"] },
            { title: "After milking", bullets: ["Teat dip if your vet advises", "Filter, cover and cool the milk at once", "Treated animals: no sale until label says"] }
          ],
          sources: [ILRI_MANUAL, FAO_TESTING],
          tryIt: "Watch or do one milking on your farm and tick each step in this lesson. Write down every step that was missed and one change to make tomorrow, such as one drying cloth per animal or a metal can instead of a jerrican.",
          youCanNow: "milk a cow or goat with a clean routine that keeps germs out of the milk.",
          quickCheck: [
            { objective: "O2", q: "Why squirt the first milk into a strip cup?", options: ["To feed the cat", "It is the richest milk", "To see clots or flakes that show mastitis", "To make the cow calm"], answer: 2, why: "The strip cup shows abnormal milk early, before it mixes with good milk." },
            { objective: "O2", q: "A cow was treated by the vet two days ago. What do you do with her milk?", options: ["Mix it with the rest; a little is fine", "Sell it to a different buyer", "Feed it to her own calf without asking", "Keep it separate and do not sell it until the withdrawal period on the label or from the vet has passed"], answer: 3, why: "Drug residues make milk unsafe and buyers test for them; the label or vet gives the waiting time." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Setting up a clean dairy",
        questions: [
          { objective: "O1", q: "What should decide which dairy breed you buy?", options: ["The feed, water and care you can give it all year", "The colour you like best", "What your neighbour bought", "The cheapest animal at market"], answer: 0, why: "A dairy animal only produces what its feed and care allow." },
          { objective: "O1", q: "Which is NOT part of a good zero-grazing unit?", options: ["Dry bedding in each stall", "A floor that drains", "A manure pit next to the milking place", "Feed and water troughs that are easy to clean"], answer: 2, why: "Manure must be kept away from milking to keep germs out of the milk." },
          { objective: "O2", q: "Which container is best for milk?", options: ["A plastic jerrican", "A clean, smooth aluminium or stainless steel can", "An old paint bucket", "Any container with a lid"], answer: 1, why: "Smooth metal is easy to clean; plastic scratches and holds dirt." },
          { objective: "O2", q: "How should you dry teats before milking?", options: ["With one shared towel for all animals", "Leave them wet", "With your clothes", "With a separate clean cloth or paper for each animal"], answer: 3, why: "A shared towel carries mastitis germs from one animal to the next." },
          { objective: "O2", q: "In what order should you milk your animals?", options: ["Healthy animals first, sick or treated animals last", "Sick animals first", "Any order", "Youngest first"], answer: 0, why: "Milking sick animals last stops germs spreading to healthy udders." }
        ]
      }
    },
    {
      name: "Chapter 2: Healthy udders, safe milk and profit",
      lessons: [
        {
          title: "Mastitis: signs, prevention and the CMT",
          objectives: ["O3"],
          minutes: 6,
          goal: "Check an animal for mastitis and run a California Mastitis Test.",
          text: [
            "Mastitis is an infection and swelling of the udder. It lowers milk yield and quality and is one of the costliest dairy diseases. Clinical mastitis shows: a hot, swollen or painful quarter; clots, flakes, watery or bloody milk; and sometimes fever and no appetite. Subclinical mastitis shows nothing you can see, but the animal gives less milk. That is why you test.",
            "The California Mastitis Test (CMT) finds hidden mastitis on the farm. You need a four-cup paddle and CMT liquid (reagent). Milk a little from each teat into its own cup, add the same amount of reagent, swirl, and read it within seconds. Milk that stays liquid is normal. A gel, slime or clumps mean high cell counts, which point to mastitis in that quarter. The stronger the gel, the stronger the reaction. Do not test in the first days after calving, when results are naturally high. Goat milk can react more strongly even when healthy, so ask your vet how to read results for goats.",
            "Prevent mastitis with clean, dry bedding, the clean milking routine, a teat dip if your vet advises, milking infected animals last, and treating only with your vet's advice. Never give antibiotics on your own: follow the vet and the label. Record every case and every treatment."
          ],
          steps: ["Look and feel: each quarter for heat, swelling or pain.", "Check the first milk on the strip cup for clots, flakes or blood.", "For the CMT: discard the first squirts, then milk a little from each teat into its own cup.", "Tilt the paddle so the right amount stays; add the same amount of reagent.", "Swirl gently and read within seconds: liquid is normal, gel means a reaction.", "Record the result for each quarter or half.", "Call your vet for any clinical case or positive result; follow the vet and the label."],
          words: [["Mastitis", "infection and swelling of the udder that lowers milk yield and quality."], ["Subclinical mastitis", "mastitis with no visible signs; only a test like the CMT shows it."], ["Quarter", "one of the four parts of a cow's udder, each with its own teat."], ["Reagent", "the liquid used in a test that reacts with the milk."]],
          slides: [
            { title: "Mastitis costs money", bullets: ["Udder infection and swelling", "Less milk, lower quality", "Clinical: you see it. Subclinical: you do not"] },
            { title: "Clinical signs", bullets: ["Hot, swollen or painful quarter", "Clots, flakes, watery or bloody milk", "Sometimes fever and off feed"] },
            { title: "The CMT", bullets: ["One cup per teat; same amount of reagent", "Swirl and read within seconds", "Liquid = normal; gel or slime = reaction"] },
            { title: "Prevent and act", bullets: ["Dry bedding, clean routine, teat dip if advised", "Infected animals milked last", "Vet decides treatment; follow the label"] }
          ],
          sources: [MU_CMT, FAO_HEALTH],
          tryIt: "Run a CMT on one cow or goat (borrow a paddle and reagent from your cooperative, vet or extension officer if you have none). Record the result for each quarter or half in your notebook, and write what you will do about any reaction.",
          youCanNow: "spot the signs of mastitis, run a CMT on each teat, record the result and know when to call the vet.",
          quickCheck: [
            { objective: "O3", q: "Your cow's milk looks normal, but her yield has dropped. What could find hidden mastitis?", options: ["Waiting until the milk shows clots", "A California Mastitis Test", "Feeding her more salt", "Smelling the milk"], answer: 1, why: "Subclinical mastitis has no visible signs; the CMT shows it." },
            { objective: "O3", q: "In a CMT, one cup turns into a thick gel. What does this mean?", options: ["The test was done right and the quarter is healthy", "You added too little milk", "The milk is extra rich", "A strong reaction in that quarter; record it and call the vet"], answer: 3, why: "A gel means a high cell count, a sign of mastitis in that quarter." }
          ]
        },
        {
          title: "Cooling, handling and selling milk",
          objectives: ["O4"],
          minutes: 6,
          goal: "Cool and deliver milk that passes the buyer's quality tests.",
          text: [
            "Fresh milk has natural defences that hold germs back for only about three to four hours after milking. FAO advises cooling it to 4 °C within that time to keep its quality. With no cooler, stand the covered metal can in cool, clean running or stored water in the shade, and get the milk to the collection centre's cooler quickly. Never leave milk in the sun.",
            "Most smallholders sell to a dairy cooperative, a collection centre, a processor, or a small dairy (for example, mini-dairies in Burkina Faso buy milk from herders and farmers). At delivery, the buyer tests your milk. Common tests are: look and smell; the alcohol test and the clot-on-boiling test, which show milk that is turning sour; the lactometer, which shows milk with added water; and, at some processors, a test for drug residues. Milk that fails is rejected or paid less.",
            "Never add water, flour, preservatives or anything else to milk: it is cheating, it is often illegal, and the tests catch it. Ask your buyer how they pay (per litre, sometimes with a bonus for quality or fat), when they pay (often monthly by bank or mobile money), and what deductions they make. Read any contract fully before you sign. Selling raw milk to the public may need a permit: in Kenya the Kenya Dairy Board licenses milk handlers, so check its rules or your country's dairy authority."
          ],
          steps: ["Filter and cover the milk right after milking.", "Cool it at once: cooler, or the can standing in cool water in the shade.", "Deliver to the collection centre or buyer within the time they set.", "Watch the tests and ask for the results.", "Record litres delivered, any rejection and the reason.", "Check every payment against your delivery records."],
          words: [["Lactometer", "a floating meter that measures how heavy (dense) milk is; added water makes milk lighter."], ["Alcohol test", "mixing milk with alcohol; milk that is turning sour forms clots."], ["Collection centre", "a place where farmers deliver milk to be tested, cooled and sent to a processor."]],
          slides: [
            { title: "Cool it fast", bullets: ["Natural defences last about 3 to 4 hours", "FAO: cool to 4 °C within that time", "No cooler: can in cool water, in shade"] },
            { title: "Buyer's tests", bullets: ["Look and smell", "Alcohol and clot-on-boiling: souring", "Lactometer: added water; some test for drugs"] },
            { title: "Never add anything", bullets: ["No water, flour or preservatives", "Cheating, often illegal, and tests catch it"] },
            { title: "Getting paid", bullets: ["Per litre; ask about quality bonuses", "When and how they pay; deductions", "Read contracts; check permits (Kenya: KDB)"] }
          ],
          sources: [FAO_PRESERVE, FAO_TESTING, KDB, KDB_PERMITS],
          tryIt: "Visit or phone your nearest collection centre, cooperative or buyer. Ask: which tests they do, the latest time they accept milk, how and when they pay, and what deductions they make. Write the answers down and compare them with how you handle milk now.",
          youCanNow: "cool and handle milk so it keeps its quality, explain the buyer's tests, and check how you are paid.",
          quickCheck: [
            { objective: "O4", q: "You have no milk cooler. What is the best thing to do after milking?", options: ["Stand the covered metal can in cool water in the shade and deliver quickly", "Leave the milk in the sun to stay warm", "Add a little water to keep it fresh", "Keep it until tomorrow and deliver both milkings together"], answer: 0, why: "Cooling quickly and delivering fast keeps germs from multiplying." },
            { objective: "O4", q: "What does the lactometer test at the collection centre catch?", options: ["Mastitis in one quarter", "Milk with added water", "The breed of the cow", "Milk that is too cold"], answer: 1, why: "Added water makes milk less dense, which the lactometer shows." }
          ]
        },
        {
          title: "Calf rearing, records and cost per litre",
          objectives: ["O5"],
          minutes: 6,
          goal: "Calculate your cost per litre and keep the records that feed it.",
          text: [
            "Your calves and kids are your future herd. Make sure the newborn drinks colostrum, the first thick milk, as soon as possible after birth, ideally within the first few hours, because it carries the mother's protection against disease. Keep calves in a clean, dry, separate pen, give clean water, offer good hay or soft fodder and a calf feed early so the stomach develops, and wean when your extension officer or vet says the calf is eating enough solid feed. Follow your vet's plan for navel care, deworming and vaccination.",
            "Keep simple records every day: litres per animal per milking, feed bought and its cost, heat signs and AI or service dates, calving dates, treatments with the date milk can be sold again, milk delivered, rejections and payments. A notebook works; a phone spreadsheet makes the sums easier.",
            "Cost per litre = all costs in the month divided by litres produced. Example (figures are only an example): 3 cows in Kenya produce 1,050 litres in a month. Costs: feed and fodder KES 27,000, labour KES 9,000, vet and AI KES 3,000, other KES 3,000; total KES 42,000. Cost per litre = 42,000 / 1,050 = KES 40. If your buyer pays less than your cost per litre, you lose money on every litre; look first at feed waste, mastitis losses and rejected milk."
          ],
          steps: ["Give colostrum as soon as possible after birth.", "Keep the calf in a clean, dry pen with water, hay and calf feed.", "Record litres, feed, breeding, calving, treatments, deliveries and payments.", "At month end, add up all costs.", "Divide total costs by litres produced: this is your cost per litre.", "Compare with the price paid and choose one change to lower the cost."],
          words: [["Colostrum", "the first thick, yellow milk after birth; it protects the newborn against disease."], ["Weaning", "moving a young animal from milk to solid feed."], ["Cost per litre", "all your dairy costs for a period divided by the litres you produced."]],
          slides: [
            { title: "Calves are your future herd", bullets: ["Colostrum as soon as possible after birth", "Clean, dry pen; water, hay, calf feed early", "Vet's plan for navel, worms, vaccines"] },
            { title: "Daily records", bullets: ["Litres per animal; feed and its cost", "Heat, AI, calving, treatments", "Deliveries, rejections, payments"] },
            { title: "Cost per litre", bullets: ["All costs in the month / litres produced", "Example: KES 42,000 / 1,050 L = KES 40 per litre", "Figures are examples: use your own"] },
            { title: "If it does not pay", bullets: ["Price below cost: you lose on every litre", "Check feed waste, mastitis, rejected milk", "Choose one change and track it"] }
          ],
          sources: [ILRI_MANUAL],
          tryIt: "Final task: write your milking-hygiene routine to pin up in the milking area, then fill in a cost-per-litre sheet for last month (or an example month): every cost, the litres produced, the cost per litre, your buyer's price, and one change you will make.",
          youCanNow: "raise healthy calves, keep dairy records and calculate the cost of each litre of milk.",
          quickCheck: [
            { objective: "O5", q: "When should a newborn calf drink colostrum?", options: ["After one week", "Only if it looks weak", "As soon as possible after birth, ideally in the first few hours", "Never; give water only"], answer: 2, why: "Colostrum carries the mother's protection, and the calf takes it in best in the first hours." },
            { objective: "O5", q: "Costs for the month are KES 36,000 and the cows produced 900 litres. What is the cost per litre?", options: ["KES 25", "KES 32", "KES 36", "KES 40"], answer: 3, why: "36,000 divided by 900 is 40." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Healthy udders, safe milk and profit",
        questions: [
          { objective: "O3", q: "Which is a sign of clinical mastitis?", options: ["A hot, swollen quarter and clots in the milk", "A shiny coat", "Chewing the cud", "A good appetite"], answer: 0, why: "Heat, swelling, pain and abnormal milk are signs of clinical mastitis." },
          { objective: "O3", q: "A CMT shows a reaction in one quarter. What do you do?", options: ["Give an antibiotic you have at home", "Record it and call your vet; follow their advice and the label", "Ignore it; the milk looks fine", "Sell the cow today"], answer: 1, why: "The vet decides treatment; home treatment without advice risks residues and resistance." },
          { objective: "O4", q: "According to FAO, how soon should milk be cooled to about 4 °C?", options: ["Within a week", "By the next day", "Within about three to four hours of milking", "Only in hot weather"], answer: 2, why: "Milk's natural defences hold germs back for only about three to four hours." },
          { objective: "O4", q: "The collection centre does an alcohol test. What does it show?", options: ["Added water", "The fat content", "The cow's breed", "Milk that is turning sour"], answer: 3, why: "Milk that is turning sour forms clots when mixed with alcohol." },
          { objective: "O5", q: "Your cost per litre is KES 45 and the buyer pays KES 40. What does this mean?", options: ["You lose about KES 5 on every litre", "You make KES 5 a litre", "You break even", "Nothing; prices do not matter"], answer: 0, why: "When cost per litre is above the price, each litre loses money." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Dairy Farming: Milk Production and Hygiene",
    questions: [
      { objective: "O1", q: "Before buying dairy cows, the first thing to check is:", options: ["The colour of the cows", "Whether you have fodder and water all year, including the dry season", "Which breed is most famous", "How many cows your neighbour has"], answer: 1, why: "Feed and water decide how much milk any cow can give." },
      { objective: "O1", q: "Why might a farmer choose dairy goats instead of cows?", options: ["Goats need no water", "Goats never get sick", "Goats eat less and suit small plots and budgets", "Goat milk needs no hygiene"], answer: 2, why: "Goats need less feed, space and money, which suits many smallholders." },
      { objective: "O1", q: "In zero-grazing, why must dung be cleaned out every day?", options: ["Dirty bedding is a main cause of mastitis", "To sell it daily", "Cows dislike the smell", "It is not necessary"], answer: 0, why: "Udders lie on the bedding; dirt there spreads mastitis germs." },
      { objective: "O1", q: "Which feature helps keep a zero-grazing stall dry?", options: ["A flat floor with no drain", "No roof", "Wet straw", "A floor that slopes to a drain"], answer: 3, why: "A sloped floor drains urine and water away." },
      { objective: "O2", q: "What is the first step of a clean milking routine?", options: ["Start milking at once", "Milker in clean clothes, short nails, hands washed with soap", "Pour milk into a jerrican", "Feed the calf"], answer: 1, why: "Clean hands and clothes stop germs entering the milk from the start." },
      { objective: "O2", q: "Why milk with the whole hand rather than pulling with the fingers?", options: ["It is faster to learn", "It uses less milk", "It is kinder to the teat and helps milk out fully", "Fingers are dirtier"], answer: 2, why: "Whole-hand milking avoids teat injury and empties the udder." },
      { objective: "O2", q: "After milking, what should you do with the milk first?", options: ["Filter it, cover it and start cooling it at once", "Leave it open to cool in the shed", "Add water to stretch it", "Mix in yesterday's milk"], answer: 0, why: "Filtering, covering and quick cooling keep dirt and germs out." },
      { objective: "O2", q: "Why give feed to a cow right after milking?", options: ["To make her sleep", "To increase fat", "So she stays standing while the teat closes", "It has no purpose"], answer: 2, why: "Standing while the teat canal closes keeps dirt from bedding out of it." },
      { objective: "O3", q: "Subclinical mastitis is:", options: ["Mastitis with a swollen, hot quarter", "A disease of goats only", "A feed problem", "Mastitis with no visible signs, found by a test"], answer: 3, why: "Only a test such as the CMT reveals subclinical mastitis." },
      { objective: "O3", q: "In a CMT, how do you read the result?", options: ["Wait an hour, then smell it", "Swirl and read within seconds: liquid is normal, gel is a reaction", "Taste it", "Boil it first"], answer: 1, why: "The reaction is read within seconds; gel means a high cell count." },
      { objective: "O3", q: "When should you NOT rely on a CMT for a cow?", options: ["In the first days after calving", "In the morning", "When she is calm", "After feeding"], answer: 0, why: "Cell counts are naturally high just after calving, so results mislead." },
      { objective: "O3", q: "Who decides how to treat mastitis?", options: ["The neighbour", "The milk buyer", "Your vet, with the product label followed", "An online video"], answer: 2, why: "Treatment and the waiting time before selling milk come from the vet and the label." },
      { objective: "O4", q: "Which container makes milk most likely to be rejected?", options: ["A clean aluminium can", "A stainless steel can", "A clean metal churn", "A scratched plastic jerrican"], answer: 3, why: "Plastic scratches hold dirt and germs, and many buyers reject milk in them." },
      { objective: "O4", q: "A trader suggests adding a little water to every can. You:", options: ["Refuse: it is cheating, often illegal, and the lactometer catches it", "Agree if prices are low", "Add flour instead", "Add water only in the dry season"], answer: 0, why: "Adding anything to milk is cheating and the buyer's tests catch it." },
      { objective: "O4", q: "The clot-on-boiling test checks for:", options: ["Added water", "Milk that is sour or abnormal", "The animal's age", "Fat content"], answer: 1, why: "Sour or abnormal milk clots when boiled." },
      { objective: "O4", q: "In Kenya, which body licenses milk handlers?", options: ["The Kenya Wildlife Service", "The county water office", "The Kenya Dairy Board", "The Pest Control Products Board"], answer: 2, why: "The Kenya Dairy Board regulates the dairy industry and issues permits to milk handlers." },
      { objective: "O5", q: "Cost per litre is:", options: ["The price the buyer pays", "Feed cost only", "Litres divided by cows", "All costs for the period divided by litres produced"], answer: 3, why: "It includes every cost, not only feed." },
      { objective: "O5", q: "Monthly costs are KES 50,000 and you produced 1,250 litres. Cost per litre?", options: ["KES 25", "KES 40", "KES 50", "KES 62"], answer: 1, why: "50,000 divided by 1,250 is 40." },
      { objective: "O5", q: "Which record do you need to know when a treated cow's milk can be sold again?", options: ["The treatment date and the withdrawal period from the label or vet", "Her colour", "The weather", "The price of feed"], answer: 0, why: "Recording the treatment and its withdrawal time stops drug residues reaching buyers." },
      { objective: "O5", q: "Your cost per litre is higher than the price. A good first place to look is:", options: ["Buying more cows at once", "Selling milk without testing", "Feed waste, mastitis losses and rejected milk", "Stopping all records"], answer: 2, why: "Feed is usually the biggest cost, and mastitis and rejections waste milk you paid to produce." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  // pre-test: these quiz questions, taken before Lesson 1, so the quiz shows how much each learner gained
  pretest: { title: "Pre-Test: What Do You Already Know?", from: [0, 2, 4, 6, 8, 9, 13, 14, 16, 18] },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      { name: "Animals and housing", objective: "O1", notYet: "No link between the animals, the housing and the feed the farm has.", meets: "The routine fits the farm's animals and unit: a clean milking place, dry bedding and manure kept away.", exceeds: "Notes one housing fix with a date, such as better drainage or a separate milking place." },
      { name: "Milking routine", objective: "O2", notYet: "Steps are missing or out of order, for example no hand washing or no teat drying.", meets: "All steps from milker and utensils to filtering, covering and cooling, in order.", exceeds: "Says who does each step and how the routine is checked each week." },
      { name: "Mastitis checks", objective: "O3", notYet: "No mastitis signs or CMT in the routine, or home treatment without the vet.", meets: "Lists the signs, when a CMT is done, how results are recorded, and calling the vet for positives; treated animals' milk kept out until the label or vet allows.", exceeds: "Includes a simple CMT record table for each animal and quarter." },
      { name: "Cooling and delivery", objective: "O4", notYet: "Milk is left warm or delivered late; plastic containers used.", meets: "Milk is cooled at once and delivered within the buyer's time, in metal containers, with nothing added.", exceeds: "Records delivery times, test results and any rejection with its cause." },
      { name: "Cost per litre", objective: "O5", notYet: "Costs are missing or the sum is wrong.", meets: "All costs listed, correct cost per litre, compared with the buyer's price.", exceeds: "Names one change to lower the cost per litre and how its effect will be measured next month." }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Fewer milk rejections at the collection centre or buyer within 3 months (delivery records)",
      "Learners who run a CMT on their animals at least once a month (follow-up survey)",
      "Learners who know and track their cost per litre after 30 days (follow-up survey)",
      "Change in average milk delivered per animal over 3 months, where records allow"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A notebook and pen, or a phone with a spreadsheet or notes app",
      "A calculator (a phone calculator is fine)",
      "Access to a milking animal for the practice tasks, or a demonstration farm",
      "A CMT paddle and reagent, borrowed from a cooperative, vet or extension office if needed",
      "About 75 minutes in total, in short sessions, plus practice at milking times"
    ],
    facilitatorNotes: [
      "Run the milking routine and the CMT as live demonstrations at a member's farm or a cooperative; let each learner do the CMT themselves.",
      "Invite the local collection centre or cooperative to show its milk tests (alcohol, clot-on-boiling, lactometer).",
      "Never give drug, vaccine or hormone doses or withdrawal periods; send learners to their vet and the product label.",
      "Ask learners to bring last month's feed receipts and milk delivery slips for the cost-per-litre task; use example figures for those without records.",
      "Score the final task with the rubric and give feedback on one Not yet row at a time.",
      "Pair this course with \"Livestock Nutrition and Feed Formulation with Local Ingredients\" for learners whose cost per litre is high because of feed."
    ]
  }
};
