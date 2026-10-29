"use strict";

// Koach Learn course: Agriculture (Africa) -> "Post-Harvest Handling and Storage" (owner's request, 28 October 2026).
// For smallholder and growing farmers, traders and agribusiness workers in Kenya, Nigeria, Ghana and across Africa: why produce is lost after harvest,
// harvesting at the right time, drying grain to safe moisture, preventing aflatoxin, hermetic storage, keeping fresh produce cool, grading and packing.
// Goes deeper than the single post-harvest lesson in agri-crop-horticulture.js. Facts are sourced to FAO, Codex, IITA and Purdue (PICS).

const FAO_LOSS = { name: "FAO: Food loss and waste reduction (about 14 percent of food lost between harvest and retail, 2019)", url: "https://www.fao.org/newsroom/detail/A-major-step-forward-in-reducing-food-loss-and-waste-is-critical-to-achieve-the-SDGs/en" };
const FAO_AFLA = { name: "FAO: Mycotoxin prevention and control in foodgrains: control of aflatoxin in maize", url: "https://www.fao.org/4/x5036e/x5036e0s.htm" };
const FAO_DRYER = { name: "FAO TECA/STI portal: Well dried maize benefits all: the solar maize dryer", url: "https://sti-portal.fao.org/innovations/well-dried-maize-benefits-all-solar-maize-dryer" };
const IITA_AFLASAFE = { name: "IITA: Aflasafe aflatoxin biocontrol products for Africa's farmers", url: "https://www.iita.org/news-item/iita-moves-to-commercialize-and-disseminate-aflatoxin-biocontrol-products-to-africas-farmers/" };
const PICS = { name: "Purdue University: Purdue Improved Crop Storage (PICS) hermetic bags", url: "https://www.purdue.edu/discoverypark/food/research/pics.php" };
const FAO_ZECC = { name: "FAO TECA/STI portal: Zero Energy Cooling Chamber for vegetables", url: "https://sti-portal.fao.org/innovations/zero-energy-cooling-chamber-vegetables" };

module.exports = {
  id: "agri-post-harvest",
  category: "Agriculture (Africa)",
  name: "Post-Harvest Handling and Storage",
  skills: "Finding where your harvest is lost, Harvesting at the right time, Drying grain to safe moisture, Preventing aflatoxin, Storing grain in hermetic bags, Cooling, grading and packing fresh produce",
  outcome: "run a post-harvest plan for one crop: harvest it at the right time, dry grain to safe moisture, keep aflatoxin out, store it in hermetic bags, and keep fresh produce cool, graded and well packed for the buyer.",
  about: [
    "This course is for smallholder and growing farmers, farm workers, traders and young agribusiness workers in Kenya, Nigeria, Ghana and across Africa. A good harvest can still lose much of its value after it leaves the field: grain goes mouldy or weevils eat it, tomatoes are crushed, and buyers pay less or turn it away.",
    "Chapter 1 covers getting the harvest in well: where and why losses happen, harvesting at the right time, and drying grain to a safe moisture. Chapter 2 covers keeping it: preventing aflatoxin, storing grain in hermetic bags, and keeping fresh produce cool, graded and well packed.",
    "Buyers and national standards set their own quality rules, so always ask your buyer, cooperative or extension officer what they require. Each lesson takes about five minutes and ends with a task on your own farm or store. A knowledge check closes each chapter and a 20-question quiz closes the course."
  ],
  finalTask: "Write a one-page post-harvest plan for one crop (your own, or an example such as 2 acres of maize in Trans Nzoia, 1 acre of tomatoes in Kaduna, or cowpea in Tamale): when and how you will harvest, how you will dry it and check moisture (for grain), how you will keep aflatoxin out, how and where you will store it, and how you will cool, grade and pack it for your buyer, with the buyer's quality rules written at the top.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Smallholder and growing farmers, farm workers, traders and young agribusiness workers in Kenya, Nigeria, Ghana and across Africa who handle grain, legumes and fresh produce after harvest.",
    startingPoint: "Most harvest when the crop looks ready, dry grain in the sun on whatever surface is near, store it in sacks, and carry produce in sacks or piles. Few check grain moisture, know how aflatoxin forms, use hermetic bags, or grade and pack produce to a buyer's rules.",
    gap: "Much of a good harvest loses quantity or value after it leaves the field: weevils, mould and rats in store, crushed produce, and grain rejected for aflatoxin, which also harms families who eat it. A post-harvest plan keeps more of the harvest, keeps food safe and earns better prices.",
    constraints: [
      "Reading level: plain words and short sentences; every term is explained",
      "Devices: a basic phone; tarpaulins, bags and crates the learner already has or can borrow",
      "Buyers and national standards set their own quality rules: learners ask their buyer, cooperative or extension",
      "Food safety: never eat, sell or feed mouldy grain; biocontrol products only as approved and labelled",
      "Time: about 5 minute lessons that fit around harvest work"
    ],
    prerequisites: "None."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "For one crop", action: "map its path from field to buyer and mark where it loses quantity or value", standard: "naming at least three loss points and what would fix them" },
    { id: "O2", condition: "For each of your crops", action: "identify the signs that it is ready and plan harvest days with the forecast", standard: "with tools, bags or crates and labour ready before harvest" },
    { id: "O3", condition: "For freshly harvested grain", action: "dry it quickly off the soil and check that it has reached a safe moisture", standard: "about 13 to 14 percent or the buyer's limit, checked with a meter or salt test" },
    { id: "O4", condition: "For maize, groundnuts or other at-risk crops", action: "list and use the main steps that keep aflatoxin out", standard: "with mouldy and damaged grain sorted out and never eaten, sold or fed" },
    { id: "O5", condition: "With dry, clean, sorted grain", action: "fill, seal and store a hermetic bag", standard: "with each liner tied airtight and the bag off the floor, away from walls and safe from rats" },
    { id: "O6", condition: "For fresh produce", action: "keep it cool, grade it to the buyer's standard and pack it to arrive unbruised", standard: "in clean, ventilated, labelled crates" }
  ],
  chapters: [
    {
      name: "Chapter 1: Getting the harvest in well",
      lessons: [
        {
          objectives: ["O1"],
          title: "Where harvests are lost, and why",
          minutes: 4,
          goal: "Walk your crop from field to buyer and mark where it loses quantity or value.",
          text: [
            "FAO estimated in 2019 that about 14 percent of the world's food is lost between harvest and the shop, before it ever reaches a market stall. On many African farms, losses for some crops are higher. Every bag lost is seed, fertilizer and work thrown away.",
            "Losses happen at every step: harvesting too early or too late, leaving the crop in the rain, rough handling and bruising, heat, drying too slowly, insects such as weevils and the larger grain borer, rats, mould, and poor packing on bumpy roads. Some losses you can see (fewer bags); others you cannot (lower grade, lower price, or grain that is unsafe to eat).",
            "The first step is to find your own biggest losses. Follow your crop from the field to the buyer and ask at each step: what goes wrong here, how much is lost, and what would it cost to fix?"
          ],
          steps: ["List each step your crop goes through: harvest, carry, dry, thresh or shell, store, pack, transport, sell.", "At each step, write what goes wrong (rain, bruising, insects, rats, mould).", "Estimate how much is lost or how much the price drops.", "Circle the two biggest losses; they are where you start."],
          words: [["Post-harvest loss", "food or value lost between harvest and sale."], ["Larger grain borer", "a beetle that bores into stored maize and cassava and turns it to powder."], ["Grade", "a quality class, such as first or second grade, that sets the price."]],
          slides: [
            { title: "The size of the loss (FAO)", bullets: ["About 14 percent of food lost between harvest and shop", "Often higher for some crops on African farms", "Every lost bag wastes seed, fertilizer and work"] },
            { title: "Why it happens", bullets: ["Wrong harvest time, rain, slow drying", "Bruising, heat, rough transport", "Weevils, grain borers, rats, mould"] },
            { title: "Find your biggest losses", bullets: ["Follow the crop from field to buyer", "Ask what goes wrong at each step", "Start with the two biggest"] }
          ],
          sources: [FAO_LOSS],
          tryIt: "Draw your crop's path from field to buyer as a row of boxes. Under each box, write what goes wrong there and roughly how much is lost. Circle the two biggest losses.",
          youCanNow: "map where your harvest loses quantity or value and pick the losses to fix first.",
          quickCheck: [
            { objective: "O1", q: "Which insect is named as a storage pest that eats grain?", options: ["The honey bee", "The ladybird", "The larger grain borer", "The butterfly"], answer: 2, why: "Weevils and the larger grain borer are storage insects that cause grain losses." },
            { objective: "O1", q: "At the market, many of your tomatoes are rejected as crushed. What do you do?", options: ["Follow the crop back, find the step where crushing happens and what it would cost to fix", "Sell to a different buyer next time and change nothing", "Grow a different crop", "Blame the buyer"], answer: 0, why: "Following the crop step by step shows where losses happen and what to fix." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Harvesting at the right time",
          minutes: 5,
          goal: "Identify the signs that each of your crops is ready and plan harvest days.",
          text: [
            "Harvesting too early gives small, light grain or produce that will not ripen well; too late invites rain damage, insects, birds, theft and rot. Learn the signs for each crop.",
            "Maize is mature when the husks are dry and the grain is hard with a black layer at its base; it can then dry further on the stalk for a short time if the weather is dry, but do not leave it out through rains. Beans and cowpea are ready when most pods are dry and rattle. Sorghum is ready when grain is hard and cannot be dented with a fingernail. Tomatoes are picked at the colour stage your buyer wants (often just turning colour for distant markets). Coffee: pick only red, ripe cherries. Tea: pluck the tender shoot, usually two leaves and a bud. Cassava roots spoil within a few days of harvest, so lift only what you can sell or process quickly.",
            "Plan harvest days with the weather forecast. Harvest fresh produce in the cool early morning, keep it in the shade, and have bags, crates, tarpaulins and labour ready before you start."
          ],
          steps: ["Write the ready signs for each crop you grow.", "Walk the field and check the signs each week as harvest nears.", "Check the forecast and pick dry days for grain.", "Have tarpaulins, bags or crates and labour ready.", "Harvest fresh produce in the cool morning and keep it in shade."],
          words: [["Maturity", "the stage when a crop is fully grown and ready to harvest."], ["Black layer", "a dark spot at the base of a maize grain that shows it is mature."], ["Two leaves and a bud", "the tender tea shoot that pluckers pick for good-quality tea."]],
          slides: [
            { title: "Too early or too late both cost you", bullets: ["Too early: small, light, poor ripening", "Too late: rain, insects, birds, theft, rot"] },
            { title: "Ready signs", bullets: ["Maize: dry husks, hard grain, black layer", "Beans: most pods dry and rattle", "Coffee: red ripe cherries only; tea: two leaves and a bud"] },
            { title: "Fresh crops", bullets: ["Tomatoes: colour stage the buyer wants", "Cassava: lift only what you can sell soon", "Harvest in the cool morning; keep in shade"] },
            { title: "Be ready", bullets: ["Check the forecast; pick dry days", "Tarpaulins, bags, crates and labour first"] }
          ],
          tryIt: "For two crops you grow, write the ready signs and the date you expect to harvest. Ask your buyer what stage or quality they want and write it down. Set a phone reminder to check the forecast a week before.",
          youCanNow: "tell when your crops are ready and plan harvest days that protect quality.",
          quickCheck: [
            { objective: "O2", q: "How do you know sorghum is ready to harvest?", options: ["The leaves are still green", "The heads are small", "The grain is soft and milky", "The grain is hard and cannot be dented with a fingernail"], answer: 3, why: "Sorghum is ready when the grain is hard and cannot be dented with a fingernail." },
            { objective: "O2", q: "Your maize is mature and heavy rain is forecast next week. What do you do?", options: ["Leave it on the stalk through the rains", "Harvest before the rain, with tarpaulins and bags ready", "Harvest only after the rains end", "Cut it and leave it on the ground"], answer: 1, why: "Plan harvest with the forecast and do not leave mature maize out through rains." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Drying grain to a safe moisture",
          minutes: 6,
          goal: "Dry grain quickly and check that it has reached a safe moisture for storage.",
          text: [
            "Freshly harvested grain holds a lot of water. Damp grain heats up, moulds and attracts insects. FAO guidance on maize says drying it to a safe moisture of about 13 to 14 percent before mould grows is the most reliable way to prevent aflatoxin, and that drying should be fast: grain left damp for more than about two days is at much higher risk. Your buyer, cooperative or national standard may set its own maximum, so ask.",
            "Dry on a clean tarpaulin, raised platform, mat or cement floor, never on bare soil. Spread grain thinly, turn it several times a day, and cover it or bring it in before rain and at night. Shelled grain dries faster than grain on the cob. Solar dryers, simple frames with a clear plastic cover, dry faster and keep out rain, dust and animals.",
            "Check moisture before storage. The best tool is a moisture meter; cooperatives, buyers, extension offices and warehouses often have one. A rough home check is the salt test: put a handful of dry salt and some grain in a clean, dry glass bottle, shake for two to three minutes, and if salt sticks to the glass the grain is still too wet. Grain that passes can still be a little too damp, so confirm with a meter when you can."
          ],
          steps: ["Harvest in dry weather.", "Spread grain thinly on a tarpaulin, mat, platform or cement, never on bare soil.", "Turn it several times a day; cover it from rain and at night.", "Dry fast: aim to reach a safe moisture within about two days of shelling.", "Do the salt test; confirm with a moisture meter at your cooperative or buyer.", "Store only when dry."],
          words: [["Moisture content", "how much water is in the grain, as a percentage of its weight."], ["Moisture meter", "a tool that measures grain moisture."], ["Salt test", "a rough home check: dry salt sticks to the bottle if grain is too wet."], ["Solar dryer", "a frame with a clear cover that uses the sun to dry crops faster and cleaner."]],
          slides: [
            { title: "Why dry", bullets: ["Damp grain heats, moulds and draws insects", "FAO: dry maize to about 13 to 14 percent", "Fast: within about two days"] },
            { title: "How to dry", bullets: ["Tarpaulin, mat, platform or cement, never bare soil", "Thin layer, turn often", "Cover before rain and at night"] },
            { title: "Check before storing", bullets: ["Best: a moisture meter (cooperative, buyer, extension)", "Rough check: salt test in a dry bottle", "Salt sticks = too wet; keep drying"] }
          ],
          sources: [FAO_AFLA, FAO_DRYER],
          tryIt: "Do a salt test on a handful of your grain (or a neighbour's): dry bottle, dry salt, shake for two to three minutes, look at the glass. Then find out who near you has a moisture meter and the buyer's maximum moisture.",
          youCanNow: "dry grain fast on a clean surface and check it has reached a safe moisture before storage.",
          quickCheck: [
            { objective: "O3", q: "What is a solar dryer?", options: ["An electric oven", "A frame with a clear plastic cover that dries grain faster and keeps out rain and dust", "A metal storage silo", "A moisture meter"], answer: 1, why: "Solar dryers are simple frames with a clear cover that dry grain faster and protect it." },
            { objective: "O3", q: "Rain clouds build in the afternoon while your shelled maize is drying outside. What do you do?", options: ["Leave it; it will dry later", "Spread it thinner", "Pour water off it after the rain", "Cover it or bring it in before the rain"], answer: 3, why: "Cover grain or bring it in before rain and at night, so it does not get damp again." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Getting the harvest in well",
        questions: [
          { objective: "O1", q: "About what share of food did FAO estimate is lost between harvest and the shop (2019)?", options: ["1 percent", "50 percent", "About 14 percent", "None"], answer: 2, why: "FAO's 2019 estimate was about 14 percent lost between harvest and retail." },
          { objective: "O2", q: "Which is a sign that maize grain is mature?", options: ["Green, wet husks", "Soft, milky grain", "Silks just appearing", "A black layer at the base of the grain"], answer: 3, why: "The black layer shows the grain has reached maturity." },
          { objective: "O2", q: "You have 2 acres of cassava and can sell only a quarter this week. What do you do?", options: ["Lift only what you can sell or process soon", "Lift it all at once", "Lift it all and leave it in the sun", "Never harvest cassava"], answer: 0, why: "Cassava roots spoil within a few days of harvest." },
          { objective: "O3", q: "Where should you dry maize?", options: ["On bare soil", "On a clean tarpaulin, mat, platform or cement floor", "In a closed sack in the rain", "In a heap in the field"], answer: 1, why: "A clean, raised or covered surface keeps grain clean and dries it faster." },
          { objective: "O3", q: "In the salt test, salt sticks to the glass. What does it mean?", options: ["The grain is dry enough to store", "The grain has aflatoxin", "The grain is still too wet; keep drying", "The salt is bad"], answer: 2, why: "Salt sticking to the glass shows the grain still holds too much moisture." }
        ]
      }
    },
    {
      name: "Chapter 2: Keeping the harvest safe and saleable",
      lessons: [
        {
          objectives: ["O4"],
          title: "Aflatoxin: what it is and how to prevent it",
          minutes: 6,
          goal: "Use the main steps that keep aflatoxin out of your maize and groundnuts.",
          text: [
            "Aflatoxin is a poison made by certain moulds (Aspergillus) that grow on maize, groundnuts, sorghum and other crops, in the field and in storage. You often cannot see, smell or taste it. Eating it over time harms the liver and is linked to liver cancer and to stunted growth in children; large amounts can kill. It also passes from feed into milk and eggs. Buyers and national food standards bodies test for it and reject grain above the legal limit.",
            "Prevention starts in the field: healthy crops, timely planting, and control of insects that damage cobs and pods. Harvest on time, do not leave the crop lying on the ground, and dry it fast to a safe moisture. FAO notes that aflatoxin levels in stored maize rise with weevil damage, so keep stores clean and insects out.",
            "Sort before storing: remove mouldy, broken, discoloured, insect-damaged and shrivelled grains and cobs. Never eat, sell or feed animals mouldy grain. Biocontrol products such as Aflasafe, developed by IITA and registered in countries including Kenya, Nigeria and Ghana, are spread in the field before flowering to crowd out the toxic moulds; ask your extension officer or agro-dealer whether one is approved for your crop and area, and follow the label."
          ],
          steps: ["Control insects that damage cobs and pods in the field.", "Harvest on time; do not leave the crop on the ground.", "Dry fast to a safe moisture.", "Sort out mouldy, broken, discoloured and insect-damaged grain.", "Store in clean, dry, insect-proof storage.", "Ask extension about an approved biocontrol product for your area."],
          words: [["Aflatoxin", "a poison made by some moulds on crops such as maize and groundnuts."], ["Aspergillus", "the group of moulds that can make aflatoxin."], ["Biocontrol", "using a harmless living organism to crowd out a harmful one."], ["Sorting", "picking out bad grains or produce by hand or machine."]],
          slides: [
            { title: "What aflatoxin is", bullets: ["A poison made by some moulds", "Often invisible: no smell, no taste", "Harms the liver; linked to cancer and stunting"] },
            { title: "Stop it at every step", bullets: ["Healthy crop; control cob and pod pests", "Harvest on time; dry fast to a safe moisture", "Clean, dry, insect-proof storage"] },
            { title: "Sort and never use mouldy grain", bullets: ["Remove mouldy, broken, discoloured grains", "Never eat, sell or feed mouldy grain", "It passes into milk and eggs"] },
            { title: "Biocontrol", bullets: ["Aflasafe (IITA): registered in Kenya, Nigeria, Ghana", "Spread in the field before flowering", "Ask extension; follow the label"] }
          ],
          sources: [FAO_AFLA, IITA_AFLASAFE],
          tryIt: "Take a sample of stored grain or groundnuts and sort it on a tray: separate mouldy, broken, discoloured and insect-damaged grains. Weigh or count them and write the share you removed. Write two steps you will change next season to reduce it.",
          youCanNow: "explain why aflatoxin is dangerous and use field, drying, sorting and storage steps to keep it out.",
          quickCheck: [
            { objective: "O4", q: "Which crops can aflatoxin moulds grow on?", options: ["Maize, groundnuts and sorghum", "Only tomatoes", "Only tea", "Only cassava leaves"], answer: 0, why: "Aspergillus moulds grow on maize, groundnuts, sorghum and other crops." },
            { objective: "O4", q: "You find weevils in your stored maize. What do you do?", options: ["Ignore them; they do not matter", "Feed the damaged grain to chickens", "Sort out damaged grain and clean the store to keep insects out, because weevil damage raises aflatoxin", "Mix the damaged grain with good grain"], answer: 2, why: "Aflatoxin levels rise with weevil damage; damaged grain is sorted out and never fed or sold." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Storing grain in hermetic bags",
          minutes: 5,
          goal: "Fill, seal and store a hermetic bag so insects die without chemicals.",
          text: [
            "Hermetic means airtight. A hermetic bag, such as the PICS bag developed at Purdue University, has two inner plastic liners inside an outer woven sack. Once sealed, the insects and grain use up the oxygen inside and the insects die or stop breeding, with no insecticide. Purdue lists maize, sorghum, beans, cowpea, groundnut, rice and other crops as suited to the bags.",
            "The bag only works if the grain is dry and the bag is airtight. Store only dry, clean, sorted grain. Fill the inner liner, push out as much air as you can, twist the neck and tie it tightly; then do the same with the second liner and finally the outer sack. Check for holes before use; a small hole lets air in and the bag stops working.",
            "Keep bags off the floor on pallets or planks, away from walls, in a clean, dry, shaded store, and protect them from rats, which chew holes. Do not open them often: each opening lets in fresh air. Bags that are still whole can be reused next season. Other good options are metal silos and clean, raised, well-ventilated cribs for cobs."
          ],
          steps: ["Check the grain is dry, clean and sorted.", "Check the bag liners for holes.", "Fill the inner liner, push out the air, twist and tie tightly.", "Tie the second liner, then the outer sack, the same way.", "Store on pallets, away from walls, in a dry, shaded, rat-proof store.", "Open only when needed; reuse bags that are still whole."],
          words: [["Hermetic", "airtight: no air can get in or out."], ["Liner", "a plastic bag inside the outer sack."], ["Pallet", "a wooden platform that keeps bags off the floor."], ["Metal silo", "a sealed metal bin for storing grain."]],
          slides: [
            { title: "How hermetic bags work", bullets: ["Two plastic liners inside a woven sack (PICS)", "Sealed: oxygen runs out, insects die", "No insecticide needed"] },
            { title: "Seal it right", bullets: ["Only dry, clean, sorted grain", "Push out the air; twist and tie each layer", "Check liners for holes first"] },
            { title: "Store it right", bullets: ["On pallets, away from walls", "Dry, shaded, rat-proof store", "Open rarely; reuse whole bags"] }
          ],
          sources: [PICS],
          tryIt: "Look at your store. Write three changes that would protect bags (pallets, gap from walls, rat-proofing, shade). If you can, buy one hermetic bag from an agro-dealer and practise tying each layer with dry grain.",
          youCanNow: "seal and store grain in hermetic bags so it keeps without chemicals.",
          quickCheck: [
            { objective: "O5", q: "What is inside the outer woven sack of a PICS bag?", options: ["A metal lining", "Insecticide powder", "Two inner plastic liners", "Nothing"], answer: 2, why: "A PICS bag has two inner plastic liners inside an outer woven sack." },
            { objective: "O5", q: "You have filled and tied the first liner. What do you do next?", options: ["Push out air, twist and tie the second liner, then tie the outer sack", "Leave the second liner open for air", "Cut a hole to check the grain", "Store it in the sun"], answer: 0, why: "Each liner and the outer sack is tied tightly so the bag stays airtight." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Keeping produce cool, grading and packing",
          minutes: 5,
          goal: "Keep fresh produce cool, grade it to the buyer's standard and pack it to arrive unbruised.",
          text: [
            "Fresh produce such as tomatoes, kale, mangoes and avocados keeps living and breathing after harvest. Heat speeds this up, so it ripens, wilts and rots faster. Harvest in the cool morning, keep produce in the shade at all times, and get it to the buyer quickly.",
            "Without electricity, an evaporative cooler helps. The FAO-listed Zero Energy Cooling Chamber is a double brick wall with wet sand between the walls and a wet cover on top; as water evaporates it cools the inside and keeps the air moist so produce does not wilt. It works best in dry, hot places. Clay-pot coolers work the same way on a smaller scale.",
            "Grading means sorting produce into classes by size, ripeness and quality, and taking out damaged items so they do not spoil the rest. Buyers pay more for even, clean, graded produce. Pack in clean, strong, ventilated crates rather than sacks for soft produce, do not overfill, and label each crate with the grade, date and your name. A phone photo of each graded batch helps settle disputes with buyers."
          ],
          steps: ["Ask the buyer for their grades: size, ripeness, quality.", "Harvest in the cool morning and keep produce in shade.", "Sort into grades; remove damaged items.", "Use an evaporative cooler if you must hold produce.", "Pack in clean, ventilated crates; do not overfill.", "Label crates with grade, date and name; take a photo."],
          words: [["Evaporative cooler", "a store cooled by water evaporating from wet walls, sand or cloth."], ["Grading", "sorting produce into quality classes."], ["Ventilated crate", "a box with holes that lets air flow around produce."]],
          slides: [
            { title: "Heat is the enemy", bullets: ["Produce keeps breathing after harvest", "Harvest in the cool morning", "Shade at all times; sell fast"] },
            { title: "Cooling without power (FAO)", bullets: ["Zero Energy Cooling Chamber: wet sand between brick walls", "Cool and moist inside", "Best in dry, hot places"] },
            { title: "Grade and pack", bullets: ["Sort by size, ripeness and quality", "Clean, ventilated crates, not sacks", "Label grade, date, name; take a photo"] }
          ],
          sources: [FAO_ZECC],
          tryIt: "Final task: write your one-page post-harvest plan for one crop. Put the buyer's quality rules at the top, then your harvest timing, drying and moisture check (for grain), aflatoxin steps, storage, and how you will cool, grade and pack.",
          youCanNow: "keep fresh produce cool, grade and pack it to the buyer's standard, and run a full post-harvest plan for one crop.",
          quickCheck: [
            { objective: "O6", q: "Where does a Zero Energy Cooling Chamber work best?", options: ["In cold, wet places", "In dry, hot places", "Only inside a fridge", "Only at night"], answer: 1, why: "Evaporative coolers work best in dry, hot places, where water evaporates fast." },
            { objective: "O6", q: "A buyer says your crates were the wrong grade. What helps settle the dispute?", options: ["Shouting", "Lowering your price at once", "Taking the crates home", "Labels with grade and date, and a phone photo of each graded batch"], answer: 3, why: "Labelled crates and a photo of each graded batch help settle disputes with buyers." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Keeping the harvest safe and saleable",
        questions: [
          { objective: "O4", q: "What is aflatoxin?", options: ["A fertilizer", "A poison made by some moulds on crops", "A type of weevil", "A storage bag"], answer: 1, why: "Aflatoxin is a poison produced by certain Aspergillus moulds." },
          { objective: "O4", q: "Your maize has some mouldy cobs. What should you do with them?", options: ["Feed them to the chickens", "Mix them with good grain", "Sell them cheaply", "Remove them; do not eat, sell or feed them"], answer: 3, why: "Aflatoxin harms people and passes from feed into milk and eggs." },
          { objective: "O5", q: "How does a hermetic bag kill storage insects?", options: ["Oxygen inside runs out once it is sealed", "It contains poison", "It is heated", "It lets in fresh air"], answer: 0, why: "Sealed tightly, the oxygen is used up and insects die without chemicals." },
          { objective: "O5", q: "Why keep grain bags on pallets and away from walls?", options: ["It looks tidy only", "To make them heavier", "To keep out damp and make rats and pests easier to spot", "So the bags get sun"], answer: 2, why: "Pallets and a gap from walls keep bags dry and easier to check." },
          { objective: "O6", q: "What is the best way to pack ripe tomatoes for market?", options: ["Tight in a sack", "Loose on a lorry floor", "In a closed plastic bag in the sun", "In clean, ventilated crates, not overfilled"], answer: 3, why: "Crates protect soft produce from crushing and let air flow." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Post-Harvest Handling and Storage",
    questions: [
      { objective: "O1", q: "Which is a common cause of post-harvest loss?", options: ["Fast drying", "Weevils, rats and mould in storage", "Clean crates", "Grading"], answer: 1, why: "Pests and mould in storage are major causes of loss." },
      { objective: "O1", q: "Why map your crop's path from field to buyer?", options: ["To find where the biggest losses happen", "To make the path longer", "To avoid the buyer", "It is not useful"], answer: 0, why: "Knowing where losses happen tells you where to act first." },
      { objective: "O1", q: "A lower price because of poor quality is:", options: ["Not a loss", "A gain", "A hidden post-harvest loss", "A tax"], answer: 2, why: "Losing grade or price is a loss of value even if no bags are lost." },
      { objective: "O2", q: "Beans are ready to harvest when:", options: ["The flowers open", "The leaves are dark green", "The pods are still soft", "Most pods are dry and rattle"], answer: 3, why: "Dry, rattling pods show the beans are mature." },
      { objective: "O2", q: "When picking coffee, you should pick:", options: ["Only red, ripe cherries", "Green cherries", "Leaves and cherries together", "Cherries from the ground"], answer: 0, why: "Red, ripe cherries give the best quality coffee." },
      { objective: "O2", q: "The usual tea plucking standard is:", options: ["Old, hard leaves", "Two leaves and a bud", "Whole branches", "Roots"], answer: 1, why: "Tender shoots of two leaves and a bud give good tea." },
      { objective: "O2", q: "Why harvest fresh produce in the cool morning?", options: ["Buyers sleep later", "It is cheaper", "Heat speeds up ripening, wilting and rot", "Morning dew adds weight"], answer: 2, why: "Cool produce lasts longer." },
      { objective: "O3", q: "FAO guidance gives a safe moisture for storing maize of about:", options: ["13 to 14 percent", "25 percent", "40 percent", "2 percent"], answer: 0, why: "FAO says drying to about 13 to 14 percent before mould grows is the safest way to prevent aflatoxin." },
      { objective: "O3", q: "How fast should freshly shelled maize be dried?", options: ["Over about two weeks", "There is no hurry", "After the next rainy season", "Within about two days"], answer: 3, why: "FAO notes aflatoxin rises quickly if maize stays damp for more than about two days." },
      { objective: "O3", q: "The most accurate way to check grain moisture is:", options: ["Biting a grain", "A moisture meter", "Looking at the colour", "Weighing the bag"], answer: 1, why: "A moisture meter measures it; the salt test is only a rough check." },
      { objective: "O3", q: "Why not dry grain on bare soil?", options: ["It dries too fast", "It is against all laws", "Soil, damp and mould spores get into the grain", "Soil makes grain heavier and more valuable"], answer: 2, why: "Bare soil contaminates grain and keeps it damp." },
      { objective: "O4", q: "Aflatoxin is dangerous partly because:", options: ["It smells strongly so people avoid it", "You often cannot see, smell or taste it", "It only affects plants", "It disappears when grain is cooked"], answer: 1, why: "It is usually invisible, so prevention and testing matter." },
      { objective: "O4", q: "Aflatoxin in animal feed can:", options: ["Pass into milk and eggs", "Make animals grow faster", "Do nothing to animals", "Turn into fertilizer"], answer: 0, why: "Aflatoxin from feed can show up in milk and eggs." },
      { objective: "O4", q: "Aflasafe is:", options: ["A storage bag", "A moisture meter", "A brand of maize seed", "A biocontrol product that crowds out toxic moulds"], answer: 3, why: "Aflasafe, from IITA, uses harmless moulds to crowd out the toxic ones." },
      { objective: "O4", q: "Before using a biocontrol product, you should:", options: ["Mix it into stored grain", "Check with extension that it is approved for your crop and area, and follow the label", "Double the amount", "Use it after harvest only"], answer: 1, why: "Use only approved products, the way the label says." },
      { objective: "O5", q: "What must be true before grain goes into a hermetic bag?", options: ["It is dry, clean and sorted", "It is still damp", "It is mixed with insecticide", "It is warm from the sun"], answer: 0, why: "Hermetic bags do not dry grain; damp grain will still mould." },
      { objective: "O5", q: "A hermetic bag liner has a small hole. What happens?", options: ["Nothing", "It works better", "Air gets in and the bag stops working", "The grain dries faster"], answer: 2, why: "The bag must be airtight to starve insects of oxygen." },
      { objective: "O5", q: "Why should you not open hermetic bags often?", options: ["They get heavier", "Each opening lets in fresh air", "Opening them is illegal", "Insects like the light"], answer: 1, why: "Fresh air brings oxygen back for insects." },
      { objective: "O6", q: "A Zero Energy Cooling Chamber cools produce by:", options: ["Electricity", "Ice from the shop", "Gas", "Water evaporating from wet sand between brick walls"], answer: 3, why: "Evaporation cools the chamber and keeps the air moist." },
      { objective: "O6", q: "Why grade produce before selling?", options: ["Buyers pay more for even, clean, sorted produce", "It makes produce rot faster", "It hides damaged items", "It is only for exports"], answer: 0, why: "Grading meets buyer standards and removes damaged items." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Pre-Test: What Do You Already Know?",
    from: [
      0,
      1,
      3,
      7,
      9,
      11,
      14,
      15,
      16,
      18
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part of the plan and check it again.",
    criteria: [
      {
        name: "Buyer's rules and harvest timing",
        objective: "O2",
        notYet: "No buyer's rules, or no signs of readiness.",
        meets: "The buyer's quality rules are at the top, with the signs of readiness and how harvest days will be planned.",
        exceeds: "Shows tools, bags or crates and labour booked before harvest."
      },
      {
        name: "Drying and moisture",
        objective: "O3",
        notYet: "No drying surface or moisture check (for grain).",
        meets: "Drying off the soil, turning and covering, and a moisture check with a meter or salt test.",
        exceeds: "Names where a moisture meter can be used, such as a cooperative or buyer."
      },
      {
        name: "Aflatoxin prevention",
        objective: "O4",
        notYet: "No steps against aflatoxin, or mouldy grain is kept.",
        meets: "Field, drying, sorting and store steps, with mouldy grain removed and never eaten, sold or fed.",
        exceeds: "Asks extension whether an approved biocontrol product fits the crop and area."
      },
      {
        name: "Storage",
        objective: "O5",
        notYet: "Storage method missing, or grain stored damp.",
        meets: "Dry, clean, sorted grain in hermetic bags or another good store, off the floor and safe from rats.",
        exceeds: "Notes how often bags will be checked without opening them."
      },
      {
        name: "Cooling, grading and packing",
        objective: "O6",
        notYet: "Fresh produce in sacks or sun, or no grading.",
        meets: "Cool harvest times, shade, grading to the buyer's standard, and clean ventilated crates with labels.",
        exceeds: "Uses an evaporative cooler or photos of each graded batch."
      }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and score Meets or Exceeds on every rubric row of the post-harvest plan",
      "Learners who report using hermetic bags, a moisture check or crates within one season (follow-up survey)",
      "Change in storage losses, rejected loads or price per bag reported by learners or their group after one season",
      "Learners who start another Koach Learn farming course within 30 days"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A notebook, pen and a basic phone",
      "A clean glass bottle and dry salt for the salt test; a moisture meter if one can be borrowed",
      "A hermetic bag and a crate for demonstration, if available",
      "About 60 minutes in total, in short sessions, plus time to write the post-harvest plan"
    ],
    facilitatorNotes: [
      "In a farmer group or store: take the pre-test together, then walk one crop's path from field to buyer.",
      "Demonstrate the salt test and, if possible, a moisture meter from a cooperative or buyer.",
      "Practise filling and tying a hermetic bag as a group.",
      "Never taste or feed mouldy grain in a demonstration; show how to sort and remove it safely.",
      "Score the post-harvest plan with the rubric and give feedback on one Not yet row at a time."
    ]
  }
};
