"use strict";

// Koach Learn course: Agriculture (Africa) -> "Fish Farming (Aquaculture) Basics" (owner's request for farmer courses, 29 October 2026).
// For new and small fish farmers in Ghana, Nigeria, Kenya, Côte d'Ivoire and across Africa: choosing tilapia or African catfish, siting and building a pond
// or using tanks, permits, water quality with simple tests, quality fingerlings and stocking density, feeding and feed conversion, common problems,
// harvesting and selling, and the economics of one cycle.
// Safety rule: no drug or chemical doses; sick fish -> fisheries extension officer or vet. Permits differ by country: the course names the body and says to check.
// Facts are sourced to FAO, WorldFish and partners, the Ghana Fisheries Commission and Kenya's Fisheries Management and Development Act. Money figures are examples only.

const FAO_OXYGEN = { name: "FAO, African Regional Aquaculture Centre (Kutty, 1987): dissolved oxygen in fish ponds", url: "https://www.fao.org/4/AC175E/AC175E04.htm" };
const GHANA_MANUAL = { name: "Farmers' manual on small-scale tilapia pond farming in Ghana (Agyakwah et al., 2020; CGIAR repository)", url: "https://hdl.handle.net/10568/143338" };
const WORLDFISH_NG = { name: "WorldFish: GIFT tilapia farming in Nigeria (hatcheries, growth, markets), 2025", url: "https://worldfishcenter.org/impact-story/tilapia-farming-more-lucrative-catfish-inside-nigerias-aquaculture-shift" };
const ALR_CI = { name: "Aquatic Living Resources (2001): high stocking densities reduce Nile tilapia yield in Côte d'Ivoire ponds", url: "https://www.alr-journal.org/articles/alr/abs/2001/05/alr1120/alr1120.html" };
const GHANA_FC = { name: "Fisheries Commission (Ghana): permits and licences, including aquaculture", url: "https://www.fishcom.gov.gh/" };
const KENYA_ACT = { name: "Kenya: Fisheries Management and Development Act, 2016 (registration and licensing of aquaculture), on FAOLEX", url: "https://faolex.fao.org/docs/pdf/ken160880.pdf" };

module.exports = {
  id: "agri-fish-farming",
  category: "Agriculture (Africa)",
  name: "Fish Farming (Aquaculture) Basics",
  skills: "Choosing tilapia or catfish, Siting and building a pond, Checking water quality, Buying and stocking quality fingerlings, Feeding and feed conversion, Costing one production cycle",
  outcome: "plan and run one production cycle of tilapia or African catfish in a pond or tank: choose the species and site, check the permits, test the water with simple tools, stock quality fingerlings at a safe density, feed well and track feed conversion, deal with common problems, and harvest and sell at a profit you have worked out in advance.",
  about: [
    "This course is for new and small fish farmers, farm workers, young agripreneurs and extension workers in Ghana, Nigeria, Kenya, Côte d'Ivoire and across Africa who want to farm tilapia or African catfish in ponds or tanks. Fish farming can earn well and feed families, but many first ponds fail from poor fingerlings, bad water and feed that costs more than the fish sell for.",
    "Chapter 1 plans the farm: choosing the species, siting and building the pond or tank and checking permits, and keeping water quality right with simple tests. Chapter 2 grows and sells the fish: quality fingerlings and stocking density, feeding and feed conversion with common problems, and harvesting, selling and the economics of one cycle.",
    "Rules and permits for fish farms differ by country and change; this course names the bodies to check with. It gives no drug or chemical doses: for sick fish, call your fisheries extension officer or a vet. Money figures are examples only; use your own quotes. Each lesson takes about five minutes and ends with a task for your own farm. A knowledge check closes each chapter and a 20-question quiz closes the course."
  ],
  finalTask: "Write a costed plan for one pond (or tank) cycle on your farm, or for an example such as a 300 square metre tilapia pond near Kumasi or catfish tanks near Ibadan: the species and why; the site, water source and the permit you checked; the water tests and how often you will do them; the number of fingerlings, the density and the certified hatchery you will buy from; the expected survival, harvest weight and feed needed using an expected FCR; every cost; the expected sales; the profit or loss; and your break-even price per kilogram.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "New and small fish farmers, farm workers, young agripreneurs and extension workers in Ghana, Nigeria, Kenya, francophone West Africa and elsewhere in Africa, planning or running one to a few earthen ponds, lined ponds or tanks of tilapia or African catfish.",
    startingPoint: "Know that fish can be farmed and may have a water source and some land. Many have no experience of water testing, buy fingerlings from any seller, feed by guesswork, and have not costed a cycle before starting.",
    gap: "Common failures are low-quality or mixed-sex fingerlings, overcrowding, oxygen crashes at dawn, overfeeding and feed costs higher than fish sales. Farmers need to plan a cycle on paper, keep water healthy with simple tests, stock the right number of good fingerlings, and track feed against growth so they know before harvest whether they will profit.",
    constraints: [
      "Reading level: plain words and short sentences; the course is also available in Spanish, French and Arabic",
      "Devices: a basic phone or smartphone, a calculator, and low-cost test tools (thermometer, pH strips, a home-made Secchi disk)",
      "Time: 4 to 6 minute lessons that fit around farm work",
      "Permits and species rules differ by country; learners must check with their national or county fisheries office",
      "No drug or chemical doses; sick fish go to an extension officer or vet",
      "Money figures are examples; feed and fish prices vary widely by place and season"
    ],
    prerequisites: "None. \"Farm Records and Gross Margin\" ideas from \"Agribusiness and Farm Management\" help with the costing in Lesson 6."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Given your water, land, money and local market", action: "choose tilapia or African catfish and a pond or tank system", standard: "giving at least three reasons linked to your site and buyers" },
    { id: "O2", condition: "Given a possible site", action: "check the site for water, soil, slope and flooding and list the permits to ask about", standard: "naming the fisheries body in your country you will contact" },
    { id: "O3", condition: "With a thermometer, pH strips and a Secchi disk", action: "test pond water and say what to do when oxygen, temperature or pH is out of range", standard: "recording each test with the date and time" },
    { id: "O4", condition: "Given a pond or tank size", action: "work out how many fingerlings to stock and list checks for a certified hatchery", standard: "with the arithmetic correct and the density agreed with an extension officer or hatchery" },
    { id: "O5", condition: "Given feed records and sample weights", action: "calculate the feed conversion ratio and spot common problems early", standard: "correct to one decimal place" },
    { id: "O6", condition: "Given costs, expected survival, harvest weight and price", action: "write a costed plan for one cycle with profit and break-even price", standard: "with every cost included and the sums correct" }
  ],
  chapters: [
    {
      name: "Chapter 1: Planning the fish farm",
      lessons: [
        {
          title: "Choosing a species and a system",
          objectives: ["O1"],
          minutes: 5,
          goal: "Choose tilapia or African catfish and a pond or tank system for your farm.",
          text: [
            "Two fish are farmed most in Africa. Nile tilapia is popular in Ghana, Kenya, Côte d'Ivoire and Egypt. It eats pellets and the natural food in green water, and it is sold fresh, fried or grilled. Mixed-sex tilapia breed in the pond and fill it with small fish, so farmers buy mono-sex (mostly male) fingerlings. Improved strains such as GIFT grow faster; WorldFish reports farmers in Nigeria reaching about 600 g in six months with GIFT and good feeding.",
            "African catfish (Clarias) is the main farmed fish in Nigeria and is popular fresh and smoked. It can breathe air, so it survives low oxygen better and can be kept more densely, often in tanks. But it needs more protein-rich feed, and bigger fish eat smaller ones, so you sort them by size.",
            "Choose the system: an earthen pond is cheap to run where soil holds water; a lined pond or concrete or plastic tank works on sandy soil or small plots but costs more to build and needs more water changes. Most important: before you choose, ask buyers which fish and what size they want, and at what price."
          ],
          steps: ["Ask three buyers (market sellers, hotels, smokers) which fish, size and price they want.", "Check your water: how much, all year, and how clean.", "Check your soil: does it hold water?", "Choose the species buyers want and your water can support.", "Choose pond or tank by soil, space and money."],
          words: [["Aquaculture", "farming fish and other water animals."], ["Fingerling", "a young fish, about finger size, bought for stocking."], ["Mono-sex", "fingerlings that are nearly all one sex (male tilapia), so they grow instead of breeding."], ["GIFT", "Genetically Improved Farmed Tilapia, a faster-growing tilapia strain developed by WorldFish."]],
          slides: [
            { title: "Nile tilapia", bullets: ["Popular in Ghana, Kenya, Côte d'Ivoire", "Eats pellets and green-water food", "Buy mono-sex fingerlings; GIFT grows faster"] },
            { title: "African catfish", bullets: ["Main farmed fish in Nigeria; fresh or smoked", "Breathes air; can be kept denser, in tanks", "Needs protein-rich feed; sort by size"] },
            { title: "Pond or tank", bullets: ["Earthen pond: cheap where soil holds water", "Lined pond or tank: sandy soil, small plots", "Tanks cost more and need more water changes"] },
            { title: "Start with the buyer", bullets: ["Which fish? What size? What price?", "Ask at least three buyers", "Then choose species and system"] }
          ],
          sources: [WORLDFISH_NG, GHANA_MANUAL],
          tryIt: "Ask at least three buyers near you which fish they want, at what size and price. Write down their answers, then choose tilapia or catfish and a pond or tank, with three reasons from your site and your buyers.",
          youCanNow: "choose between tilapia and African catfish, and between a pond and a tank, using your water, soil and buyers.",
          quickCheck: [
            { objective: "O1", q: "Why do tilapia farmers buy mono-sex fingerlings?", options: ["They are cheaper", "So the fish grow instead of breeding and filling the pond with small fish", "They need no feed", "They taste better"], answer: 1, why: "Mixed-sex tilapia breed in the pond and end up stunted and small." },
            { objective: "O1", q: "Your soil is sandy and does not hold water. Which system fits best?", options: ["An unlined earthen pond", "No fish farming is possible", "A pond on the river bank", "A lined pond or a tank"], answer: 3, why: "A liner or tank holds water where the soil will not." }
          ]
        },
        {
          title: "Siting and building a pond, and permits",
          objectives: ["O2"],
          minutes: 6,
          goal: "Check a pond site and list the permits to ask about.",
          text: [
            "A good pond site has: water all year, clean and not polluted by factories, mines or sprayed fields; soil with enough clay to hold water (squeeze a damp handful: if it keeps its shape, that is a good sign); a gentle slope so the pond can fill and drain by gravity; no flooding; and is close enough to watch against thieves and predators.",
            "Build the pond with a firm, sloped dike (bank) planted with grass to stop erosion, an inlet with a screen so wild fish cannot get in, and an outlet or drain pipe so you can empty the pond for harvest. A pond of a few hundred square metres is easy to manage for a beginner. Fence it if you can, and keep animals and children away. Prepare the pond before stocking: dry it, remove mud and wild fish, and lime and fertilise it if your extension officer advises.",
            "Fish farms often need registration or a permit, and sometimes a water-use or environmental approval. In Kenya, the Fisheries Management and Development Act, 2016 requires aquaculture to be registered and licensed with the Kenya Fisheries Service. In Ghana, the Fisheries Commission issues aquaculture permits. In Nigeria, ask the Federal Department of Fisheries and Aquaculture and your state ministry; in Côte d'Ivoire, the ministry in charge of fisheries. Some areas allow only certain species or strains. Rules change, so check before you dig."
          ],
          steps: ["Check the water source: enough all year, and clean.", "Do the squeeze test on the soil; ask an extension officer to confirm.", "Choose gently sloping land above flood level, near where you can watch it.", "Plan a firm dike, a screened inlet and an outlet to drain.", "Contact the fisheries office: registration, permits, water use, allowed species.", "Prepare the pond before stocking, as your extension officer advises."],
          words: [["Dike", "the earth bank around a pond."], ["Inlet and outlet", "the pipes or channels where water comes into and leaves the pond."], ["Permit", "official permission you need before you start or run the farm."]],
          slides: [
            { title: "A good site", bullets: ["Clean water all year", "Soil with clay that holds water", "Gentle slope; no flooding; easy to guard"] },
            { title: "Build it right", bullets: ["Firm, grassed dike", "Screened inlet; outlet to drain", "Fence; keep animals and children away"] },
            { title: "Permits: check first", bullets: ["Kenya: register and license with the Kenya Fisheries Service", "Ghana: Fisheries Commission aquaculture permit", "Nigeria and Côte d'Ivoire: national and state fisheries offices"] },
            { title: "Before you dig", bullets: ["Ask about water use and environment rules", "Ask which species are allowed", "Rules change: check with the office"] }
          ],
          sources: [GHANA_MANUAL, KENYA_ACT, GHANA_FC],
          tryIt: "Walk your possible site. Write down the water source, the result of the soil squeeze test, the slope, any flood risk and how you will guard it. Then find the phone number or office of your fisheries body and list three questions to ask about permits and species.",
          youCanNow: "judge whether a site suits a fish pond, plan its main parts and know which fisheries office to ask about permits.",
          quickCheck: [
            { objective: "O2", q: "You squeeze damp soil and it keeps its shape. What does this suggest?", options: ["The soil has clay and may hold water", "The soil is too sandy", "The site will flood", "The water is polluted"], answer: 0, why: "Clay soil that holds its shape usually holds pond water; ask an extension officer to confirm." },
            { objective: "O2", q: "Before digging a fish pond in Ghana, whom should you check with about permits?", options: ["The bank only", "Nobody; fish ponds need no permits", "The Fisheries Commission", "The pest control board"], answer: 2, why: "Ghana's Fisheries Commission issues aquaculture permits." }
          ]
        },
        {
          title: "Water quality with simple tests",
          objectives: ["O3"],
          minutes: 6,
          goal: "Test pond water and act when it goes wrong.",
          text: [
            "Fish live in the water, so bad water kills them fast. Watch three things. Oxygen: in green ponds it is highest in the afternoon and lowest at dawn, because plants and algae use oxygen at night. Cloudy days, too much algae, rotting feed and manure make it worse. An FAO paper notes tilapia become much less active when oxygen falls to about 1 to 2 mg per litre. Temperature: tilapia and catfish are warm-water fish; they eat and grow slowly in cool water, such as in highland areas or the cold season. pH (how acid the water is): water that is too acid or too alkaline stresses fish.",
            "Simple tests: a thermometer for temperature; pH paper strips or a kit; a Secchi disk (a white-and-black plate on a marked stick) to see how green the water is; and your eyes at dawn. Fish gasping at the surface at dawn mean oxygen is low. If you can afford one, an oxygen test kit or meter gives a number.",
            "If oxygen is low: stop or cut feeding until the fish recover, add fresh water, splash or pump water to mix in air, and remove dead fish. If the water is very green, fertilise less. If pH is wrong, ask your extension officer about liming. Record every test with the date and time."
          ],
          steps: ["Check the pond at dawn: are fish gasping at the surface?", "Take the water temperature with a thermometer.", "Test pH with strips or a kit once a week.", "Push the Secchi disk down until it disappears; note the depth.", "Low oxygen: stop feeding, add fresh water, splash or aerate, remove dead fish.", "Write every result with the date and time."],
          words: [["Dissolved oxygen", "oxygen mixed in water, which fish breathe through their gills."], ["pH", "a number that shows how acid or alkaline water is."], ["Secchi disk", "a black-and-white plate lowered into water to see how clear or green it is."], ["Aeration", "mixing air into water, with a pump, paddle or by splashing."]],
          slides: [
            { title: "Oxygen", bullets: ["Highest in afternoon, lowest at dawn", "Worse on cloudy days, with rotting feed", "Tilapia slow down near 1 to 2 mg per litre"] },
            { title: "Temperature and pH", bullets: ["Warm water: fast growth; cool: slow", "Too acid or alkaline stresses fish", "Ask the extension officer about liming"] },
            { title: "Simple tests", bullets: ["Thermometer; pH strips", "Secchi disk: how green is the water?", "Dawn check: gasping fish = low oxygen"] },
            { title: "Low oxygen: act now", bullets: ["Stop or cut feeding", "Add fresh water; splash or aerate", "Remove dead fish; record it"] }
          ],
          sources: [FAO_OXYGEN, GHANA_MANUAL],
          tryIt: "Make a Secchi disk from a white plate painted with two black quarters, tied to a stick marked every 5 cm. Then make a water-test record sheet with columns for date, time, temperature, pH, Secchi depth, fish behaviour and action taken, and fill in one line from a pond or water source near you.",
          youCanNow: "check oxygen, temperature, pH and greenness with simple tools and act quickly when the water goes wrong.",
          quickCheck: [
            { objective: "O3", q: "When is oxygen usually lowest in a green fish pond?", options: ["At noon", "In the afternoon", "At dawn", "It never changes"], answer: 2, why: "At night plants and algae use oxygen and make none, so it falls until dawn." },
            { objective: "O3", q: "At dawn you see fish gasping at the surface. What do you do first?", options: ["Feed them more", "Stop feeding, add fresh water and splash or aerate", "Add fertiliser", "Wait until tomorrow"], answer: 1, why: "Gasping means low oxygen; less feed and more fresh, mixed water bring it back up." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Planning the fish farm",
        questions: [
          { objective: "O1", q: "Which is true of African catfish?", options: ["It can breathe air and survives low oxygen better", "It eats only grass", "It breeds and overcrowds ponds like mixed-sex tilapia", "It cannot be farmed in tanks"], answer: 0, why: "Catfish have an air-breathing organ, so they cope with low oxygen and tanks." },
          { objective: "O1", q: "What should you find out first, before choosing a fish?", options: ["The colour of the fish", "What your cousin farms", "The biggest fish possible", "Which fish, size and price your buyers want"], answer: 3, why: "A fish you cannot sell at a good price is a loss, however well it grows." },
          { objective: "O2", q: "Why does a pond need an outlet or drain?", options: ["To let wild fish in", "So you can empty it for harvest and cleaning", "To keep the water warm", "It does not need one"], answer: 1, why: "Draining makes harvest and pond preparation easy." },
          { objective: "O2", q: "In Kenya, aquaculture must be registered and licensed with:", options: ["The Kenya Dairy Board", "The Kenya Wildlife Service", "The Kenya Fisheries Service", "The county road office"], answer: 2, why: "The Fisheries Management and Development Act, 2016 requires registration and licensing with the Kenya Fisheries Service." },
          { objective: "O3", q: "What does a Secchi disk show?", options: ["How green or clear the water is", "The fish's weight", "The pond's pH", "The oxygen in mg per litre"], answer: 0, why: "The depth where the disk disappears shows how much algae is in the water." }
        ]
      }
    },
    {
      name: "Chapter 2: Growing and selling fish",
      lessons: [
        {
          title: "Quality fingerlings and stocking density",
          objectives: ["O4"],
          minutes: 5,
          goal: "Work out how many fingerlings to stock and check a hatchery.",
          text: [
            "Good fingerlings are half the battle. Buy from a hatchery that is registered or certified by your fisheries authority, or recommended by your extension officer. Ask: Are the tilapia mono-sex, and which strain? Are the fingerlings all about the same size? How many die in the first weeks, and do they replace them? Can you see the hatchery? Healthy fingerlings swim actively, have no wounds, and are even in size. Wild-caught or mixed-size fish bring disease, breeding and cannibalism.",
            "Stocking density is the number of fish per square metre (ponds) or per cubic metre (tanks). Too many fish means low oxygen, slow growth and small fish. A study of tilapia ponds in Côte d'Ivoire fed only with fertiliser found that 2 to 3 fish per square metre already reduced yield. With good pellet feed, more fish can be stocked, and tanks with water flow or aeration more again, especially for catfish. Agree your density with your extension officer or hatchery for your system.",
            "Example (figures are only an example): a 20 m by 15 m pond is 300 square metres. At an example density of 3 fish per square metre, you stock 900 fingerlings. Move fingerlings in the cool of the morning, in oxygenated bags or clean water, and let the bags float in the pond for a while so the temperatures match before releasing them."
          ],
          steps: ["Measure the pond: length x width = area in square metres.", "Agree a density with your extension officer or hatchery.", "Area x density = number of fingerlings.", "Choose a registered or recommended hatchery; ask about strain, mono-sex, size and losses.", "Check the fingerlings: active, no wounds, even size.", "Transport in the cool morning; float bags to match temperature before release."],
          words: [["Stocking density", "the number of fish per square metre of pond, or per cubic metre of tank water."], ["Hatchery", "a farm that breeds fish and raises young fish to sell."], ["Cannibalism", "fish eating other fish of their own kind, common in catfish of mixed sizes."]],
          slides: [
            { title: "Good fingerlings", bullets: ["Registered or recommended hatchery", "Tilapia: mono-sex, known strain", "Active, no wounds, even size"] },
            { title: "Density matters", bullets: ["Too many: low oxygen, slow growth, small fish", "Côte d'Ivoire study: 2-3 per m2 too many with fertiliser only", "Agree density with extension officer or hatchery"] },
            { title: "Example sum", bullets: ["20 m x 15 m = 300 m2", "300 m2 x 3 fish per m2 = 900 fingerlings", "Figures are an example only"] },
            { title: "Stocking day", bullets: ["Cool morning", "Oxygenated bags or clean water", "Float bags to match temperature"] }
          ],
          sources: [ALR_CI, WORLDFISH_NG, GHANA_MANUAL],
          tryIt: "Measure your pond or tank (or use 20 m by 15 m). Ask an extension officer or hatchery for a density for your system, and work out how many fingerlings to buy. Then write five questions to ask the hatchery before you pay.",
          youCanNow: "work out the number of fingerlings for a pond and choose a hatchery that sells quality fish.",
          quickCheck: [
            { objective: "O4", q: "A pond is 25 m by 10 m and the agreed density is 2 fish per square metre. How many fingerlings?", options: ["250", "350", "500", "700"], answer: 2, why: "25 x 10 = 250 square metres, and 250 x 2 = 500 fingerlings." },
            { objective: "O4", q: "Which batch of catfish fingerlings should you refuse?", options: ["Active, even-sized fish", "Fish from a registered hatchery", "Fish with no wounds", "Fish of very mixed sizes"], answer: 3, why: "Mixed sizes lead to cannibalism, as bigger catfish eat smaller ones." }
          ]
        },
        {
          title: "Feeding, feed conversion and common problems",
          objectives: ["O5"],
          minutes: 6,
          goal: "Calculate the feed conversion ratio and spot problems early.",
          text: [
            "Feed is usually the biggest cost in fish farming. Use a good-quality feed of the right pellet size for the fish's mouth; floating pellets let you see how much is eaten. Feed at the same times each day, and give only what the fish eat in a few minutes; uneaten feed rots and uses up oxygen. The amount rises as fish grow: every two to four weeks, net and weigh a sample of fish, work out the average weight, and adjust feed using the feed maker's or extension officer's chart. Store feed dry and off the floor; mouldy feed is poison.",
            "The feed conversion ratio (FCR) shows how well feed turns into fish: FCR = feed given / weight gained. Example: you fed 400 kg and the fish gained 250 kg, so FCR = 400 / 250 = 1.6. A lower FCR means less feed per kg of fish. FCR goes up with overfeeding, poor feed, bad water and sick fish.",
            "Common problems: low oxygen at dawn; predators such as birds, snakes and otters, and thieves; tilapia breeding when fingerlings were mixed-sex; catfish eating each other when sizes differ (sort them); floods washing fish out; and disease. Signs of sick fish are not eating, sores, odd swimming or many deaths. Remove dead fish, stop feeding, check the water, and call your fisheries extension officer or a vet; do not use drugs or chemicals without their advice."
          ],
          steps: ["Feed good-quality feed of the right size at fixed times.", "Give only what the fish eat in a few minutes.", "Every 2 to 4 weeks, weigh a sample and adjust feed by the chart.", "Record all feed given.", "FCR = feed given / weight gained.", "Watch daily for problems; call the extension officer or vet for sick fish."],
          words: [["Feed conversion ratio (FCR)", "kilograms of feed used to grow one kilogram of fish."], ["Sample weighing", "netting and weighing some fish to find their average weight."], ["Predator", "an animal that eats fish, such as some birds, snakes and otters."]],
          slides: [
            { title: "Feed well", bullets: ["Good feed, right pellet size", "Fixed times; only what they eat in minutes", "Weigh a sample every 2 to 4 weeks"] },
            { title: "Feed conversion ratio", bullets: ["FCR = feed given / weight gained", "400 kg feed / 250 kg gain = 1.6", "Lower is better"] },
            { title: "Common problems", bullets: ["Low oxygen; predators and thieves", "Tilapia breeding; catfish cannibalism", "Floods; disease"] },
            { title: "Sick fish", bullets: ["Off feed, sores, odd swimming, deaths", "Remove dead fish; stop feeding; check water", "Call extension officer or vet; no drugs without advice"] }
          ],
          sources: [GHANA_MANUAL, FAO_OXYGEN],
          tryIt: "Make a feeding record with columns for date, feed given (kg), sample average weight and notes. Then work out the FCR for this example: 300 kg of feed given, fish gained 200 kg. Write one way to lower it.",
          youCanNow: "feed fish well, calculate the FCR and spot common problems early.",
          quickCheck: [
            { objective: "O5", q: "You fed 450 kg of feed and the fish gained 300 kg. What is the FCR?", options: ["0.7", "1.2", "1.5", "2.0"], answer: 2, why: "450 divided by 300 is 1.5." },
            { objective: "O5", q: "Why should you give only what fish eat in a few minutes?", options: ["Uneaten feed rots, uses up oxygen and wastes money", "Fish do not like feed", "Feed is free", "It makes the water clearer for swimming"], answer: 0, why: "Uneaten feed is wasted money and pollutes the water." }
          ]
        },
        {
          title: "Harvesting, selling and the economics of one cycle",
          objectives: ["O6"],
          minutes: 6,
          goal: "Write a costed plan for one cycle with the profit and break-even price.",
          text: [
            "Plan the sale before you stock. Agree with buyers on the size, the day and the price, and harvest in the cool morning. Stop feeding a day before so the fish travel better. Drain the pond part way and net the fish, or drain it fully for a complete harvest. Keep fish cool and clean on ice or in shade, and sell fast: fresh fish spoils within hours in the heat. Smoking or drying, common for catfish in Nigeria, adds value and time to sell. Partial harvests of the biggest fish can spread sales over several weeks.",
            "Cost one cycle on paper first. Example for a 300 square metre tilapia pond in Ghana (all figures are examples only; use your own quotes): 900 fingerlings at GHS 1.50 = GHS 1,350; feed: expected harvest 720 fish (80% survival) x 0.35 kg = 252 kg, and at an expected FCR of 1.6 that needs about 400 kg of feed at GHS 12 = GHS 4,800; pond preparation GHS 300; labour and security GHS 1,200; harvest and transport GHS 300. Total costs GHS 7,950.",
            "Sales: 252 kg at GHS 40 per kg = GHS 10,080. Profit = 10,080 - 7,950 = GHS 2,130. Break-even price = total costs / kg harvested = 7,950 / 252 = about GHS 31.50 per kg. If the buyer's price is near your break-even, change the plan: better fingerlings, less feed waste, or a better buyer."
          ],
          steps: ["Agree size, day and price with buyers before stocking.", "List every cost: fingerlings, feed, pond preparation, labour, security, harvest, transport.", "Expected harvest = fingerlings x survival x harvest weight.", "Feed needed = weight gained x expected FCR.", "Profit = sales - total costs.", "Break-even price = total costs / kg harvested."],
          words: [["Survival rate", "the share of stocked fish still alive at harvest."], ["Break-even price", "the price per kg at which sales just cover all costs."], ["Partial harvest", "taking out the biggest fish and leaving the rest to grow."]],
          slides: [
            { title: "Harvest and sell", bullets: ["Buyer, size, day and price agreed first", "Cool morning; stop feeding a day before", "Ice or shade; sell fast, or smoke or dry"] },
            { title: "Example costs (GHS)", bullets: ["Fingerlings 1,350; feed 4,800", "Pond prep 300; labour, security 1,200; harvest 300", "Total 7,950. Examples only"] },
            { title: "Example result", bullets: ["720 fish x 0.35 kg = 252 kg", "252 kg x GHS 40 = GHS 10,080", "Profit about GHS 2,130"] },
            { title: "Break-even price", bullets: ["Total costs / kg harvested", "7,950 / 252 = about GHS 31.50 per kg", "Near break-even? Change the plan"] }
          ],
          sources: [GHANA_MANUAL, WORLDFISH_NG],
          tryIt: "Final task: write a costed plan for one cycle of your own pond or tank (or the example): species, site and permit checked, water tests, fingerlings and hatchery, expected survival, harvest weight and feed, every cost, expected sales, profit and break-even price per kg.",
          youCanNow: "plan a harvest and sale and work out the profit and break-even price of one fish farming cycle.",
          quickCheck: [
            { objective: "O6", q: "Total costs are NGN 900,000 and you expect to harvest 600 kg of catfish. What is the break-even price?", options: ["NGN 600 per kg", "NGN 1,000 per kg", "NGN 1,200 per kg", "NGN 1,500 per kg"], answer: 3, why: "900,000 divided by 600 is 1,500 per kg." },
            { objective: "O6", q: "When should you agree the sale with buyers?", options: ["After harvest, when the fish are on ice", "Before stocking, and confirm before harvest", "Never; sell at the roadside", "Only if fish are left over"], answer: 1, why: "Fresh fish spoils quickly; a buyer agreed early avoids forced cheap sales." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Growing and selling fish",
        questions: [
          { objective: "O4", q: "Where should you buy fingerlings?", options: ["From a registered or recommended hatchery", "From a river near you", "From whoever is cheapest", "From any passing seller"], answer: 0, why: "Registered or recommended hatcheries give known strain, mono-sex tilapia and healthy fish." },
          { objective: "O4", q: "A 30 m by 10 m pond at 2 fish per square metre needs how many fingerlings?", options: ["300", "400", "500", "600"], answer: 3, why: "30 x 10 = 300 square metres, and 300 x 2 = 600." },
          { objective: "O5", q: "Fish are not eating, have sores and some are dying. What do you do?", options: ["Feed them more", "Buy a drug at the market and add it", "Remove dead fish, stop feeding, check the water and call the extension officer or vet", "Add more fingerlings"], answer: 2, why: "Sick fish need advice from an officer or vet; drugs without advice can harm fish and buyers." },
          { objective: "O5", q: "A falling FCR during the cycle usually means:", options: ["Feed is being wasted", "Feed is turning into fish more efficiently", "The fish are sick", "The pond is too green"], answer: 1, why: "Less feed per kg of gain means better feed conversion." },
          { objective: "O6", q: "Sales are GHS 12,000 and total costs are GHS 9,500. What is the profit?", options: ["GHS 1,500", "GHS 2,000", "GHS 2,500", "GHS 21,500"], answer: 2, why: "12,000 minus 9,500 is 2,500." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Fish Farming (Aquaculture) Basics",
    questions: [
      { objective: "O1", q: "Which fish is the main farmed fish in Nigeria?", options: ["African catfish", "Salmon", "Trout", "Carp"], answer: 0, why: "African catfish is Nigeria's main farmed fish, sold fresh and smoked." },
      { objective: "O1", q: "Mixed-sex tilapia in a pond usually lead to:", options: ["Bigger fish", "Faster sales", "Many small, stunted fish from breeding", "Less feed needed"], answer: 2, why: "Tilapia breed in the pond and overcrowd it with small fish." },
      { objective: "O1", q: "What is GIFT tilapia?", options: ["A free gift from buyers", "A fish disease", "A pond design", "An improved, faster-growing tilapia strain from WorldFish"], answer: 3, why: "GIFT means Genetically Improved Farmed Tilapia." },
      { objective: "O2", q: "Which site is best for an earthen pond?", options: ["Sandy soil on a river flood plain", "Clay soil on a gentle slope above flood level, with clean water all year", "Rocky hilltop with no water", "Next to a mine outlet"], answer: 1, why: "Clay holds water, a slope lets you fill and drain, and clean water keeps fish alive." },
      { objective: "O2", q: "Why put a screen on the pond inlet?", options: ["To keep wild fish and predators out", "To warm the water", "To feed the fish", "To slow harvesting"], answer: 0, why: "Wild fish compete for food, bring disease and eat fingerlings." },
      { objective: "O2", q: "Before building a fish pond, you should:", options: ["Start digging and ask later", "Ask only your neighbours", "Check with your national or county fisheries office about permits and allowed species", "Assume no rules apply"], answer: 2, why: "Many countries require registration or a permit, and some limit species." },
      { objective: "O3", q: "Which makes low oxygen at dawn worse?", options: ["Sunny days and little algae", "Cloudy days, too much algae and rotting feed", "Clear, fresh water", "Fewer fish"], answer: 1, why: "These cut oxygen production or use oxygen up at night." },
      { objective: "O3", q: "Tilapia and catfish grow slowly when the water is:", options: ["Cool", "Warm", "Clean", "Green"], answer: 0, why: "Both are warm-water fish; cool water slows eating and growth." },
      { objective: "O3", q: "Which tool measures how acid the pond water is?", options: ["A Secchi disk", "A thermometer", "A fishing net", "pH strips or a pH kit"], answer: 3, why: "pH strips or kits show how acid or alkaline the water is." },
      { objective: "O3", q: "If oxygen is low, which action is WRONG?", options: ["Adding fresh water", "Splashing or aerating the water", "Feeding more than usual", "Removing dead fish"], answer: 2, why: "Extra feed rots and uses up even more oxygen." },
      { objective: "O4", q: "Stocking density means:", options: ["The weight of feed per day", "The number of fish per square metre or cubic metre", "The depth of the pond", "The price per fingerling"], answer: 1, why: "Density is how many fish share each unit of space." },
      { objective: "O4", q: "A 400 square metre pond at 2.5 fish per square metre needs:", options: ["600 fingerlings", "800 fingerlings", "1,000 fingerlings", "1,600 fingerlings"], answer: 2, why: "400 x 2.5 = 1,000." },
      { objective: "O4", q: "Why float the fingerling bags in the pond before releasing them?", options: ["So the water temperatures match", "To count the fish", "To feed them", "To clean the bags"], answer: 0, why: "A sudden temperature change shocks and can kill fingerlings." },
      { objective: "O5", q: "FCR is calculated as:", options: ["Fish sold / fish stocked", "Price / cost", "Pond area x density", "Feed given / weight gained"], answer: 3, why: "It shows how many kg of feed make one kg of fish." },
      { objective: "O5", q: "You fed 600 kg and the fish gained 400 kg. FCR?", options: ["1.5", "0.7", "2.4", "1.0"], answer: 0, why: "600 divided by 400 is 1.5." },
      { objective: "O5", q: "How often should you weigh a sample of fish to adjust feeding?", options: ["Never", "Only at harvest", "Every 2 to 4 weeks", "Every hour"], answer: 2, why: "Regular sample weights show growth so feed can follow it." },
      { objective: "O5", q: "Catfish of very different sizes in one pond can lead to:", options: ["Faster growth for all", "Cannibalism", "Clearer water", "Lower feed costs"], answer: 1, why: "Big catfish eat small ones, so farmers sort them by size." },
      { objective: "O6", q: "Expected harvest weight is found by:", options: ["Feed x price", "Pond area x depth", "Fingerlings x survival x harvest weight", "Costs / price"], answer: 2, why: "Only surviving fish count, at their expected weight." },
      { objective: "O6", q: "Break-even price per kg is:", options: ["The highest market price", "Total costs / kg harvested", "Feed cost only", "The fingerling price"], answer: 1, why: "At this price, sales just cover every cost." },
      { objective: "O6", q: "Which is usually the biggest cost in a fish cycle?", options: ["The net", "The pond sign", "Water tests", "Feed"], answer: 3, why: "Feed usually takes the largest share of costs, so FCR matters." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  // pre-test: these quiz questions, taken before Lesson 1, so the quiz shows how much each learner gained
  pretest: { title: "Pre-Test: What Do You Already Know?", from: [1, 3, 5, 6, 9, 10, 12, 13, 17, 18] },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      { name: "Species and site", objective: "O1", notYet: "No reason given for the species, or no buyer asked.", meets: "Species and system chosen with three reasons from the site and buyers.", exceeds: "Names the buyers, the size they want and the price they quoted." },
      { name: "Site and permits", objective: "O2", notYet: "Site not checked or no fisheries body named.", meets: "Water, soil, slope and flooding checked; the fisheries body and permit questions listed.", exceeds: "Has contacted the fisheries office and notes the answer." },
      { name: "Water quality plan", objective: "O3", notYet: "No water tests in the plan.", meets: "Dawn checks, temperature, pH and Secchi tests with how often and what to do when out of range.", exceeds: "Includes a filled-in test record and an emergency plan for low oxygen." },
      { name: "Fingerlings and stocking", objective: "O4", notYet: "Number of fingerlings missing or wrong, or no hatchery named.", meets: "Correct number from area and agreed density; a registered or recommended hatchery named with checks.", exceeds: "Notes the strain, mono-sex status and the hatchery's replacement policy." },
      { name: "Costs, profit and break-even", objective: "O6", notYet: "Costs missing, feed not linked to FCR, or sums wrong.", meets: "All costs, feed from expected gain x FCR, profit and break-even price correct.", exceeds: "Shows a second case with lower survival or a lower price, and what the farmer would do." }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Learners who stock from a registered or recommended hatchery within 6 months (follow-up survey)",
      "Learners who keep water-test and feeding records through a cycle (follow-up survey)",
      "Survival rate and FCR reported at harvest, compared with the plan",
      "Learners who make a profit on their first cycle, where records allow"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A notebook and pen, or a phone with a spreadsheet or notes app",
      "A calculator (a phone calculator is fine)",
      "A thermometer, pH strips and a home-made Secchi disk (white plate, paint, stick)",
      "A tape measure for the pond",
      "About 75 minutes in total, in short sessions, plus practice at a pond"
    ],
    facilitatorNotes: [
      "Hold Lessons 3 and 4 at a working pond: do the dawn check, the Secchi and pH tests and a sample weighing together.",
      "Invite a fisheries extension officer to explain the permits and the registered hatcheries in your country or county.",
      "Never give drug or chemical doses; send learners with sick fish to their extension officer or a vet.",
      "Replace the example prices with local quotes for fingerlings, feed and fish before the costing lesson, and say clearly they are examples.",
      "Score the final task with the rubric and give feedback on one Not yet row at a time."
    ]
  }
};
