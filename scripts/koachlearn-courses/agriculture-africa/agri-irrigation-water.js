"use strict";

// Koach Learn course: Agriculture (Africa) -> "Irrigation and Water Management" (owner's request, 28 October 2026).
// For smallholder and growing farmers in Kenya, Nigeria, Ghana and across Africa: knowing how much water a crop needs, harvesting and storing rainwater,
// low-cost drip kits, scheduling, avoiding waterlogging and salt build-up, and choosing pumps including solar pumps. Facts are sourced to FAO manuals and
// pages; water permits to Kenya's Water Resources Authority (other countries: students are told to check their own water authority).

const FAO_WATERNEEDS = { name: "FAO Irrigation Water Management Training Manual No. 3: Irrigation Water Needs", url: "https://www.fao.org/4/s2022e/s2022e00.htm" };
const FAO_HARVEST = { name: "FAO: Water Harvesting, a manual for the design and construction of water harvesting schemes for plant production", url: "https://www.fao.org/4/u3160e/u3160e00.htm" };
const FAO_DRIP = { name: "FAO: Technical handbook on pressurized irrigation techniques (includes low-cost family drip systems)", url: "https://www.fao.org/4/a1336e/a1336e.pdf" };
const FAO_SOLAR = { name: "FAO: Positive prospects for solar-powered irrigation systems", url: "https://www.fao.org/newsroom/detail/Positive-prospects-for-solar-powered-irrigation-systems/en" };
const FAO_SALINITY = { name: "FAO: Water quality for agriculture (salinity, leaching and drainage)", url: "https://www.fao.org/4/t0234e/t0234e03.htm" };
const WRA = { name: "Water Resources Authority, Kenya (water use permits)", url: "https://wra.go.ke" };

module.exports = {
  id: "agri-irrigation-water",
  category: "Agriculture (Africa)",
  name: "Irrigation and Water Management",
  skills: "Working out when a crop needs water, Harvesting rainwater, Storing water safely, Setting up a low-cost drip kit, Scheduling irrigation without waterlogging or salt build-up, Choosing a pump including solar",
  outcome: "plan irrigation for a small plot: estimate when your crop needs water most, collect and store rainwater, set up and run a low-cost drip kit on a schedule, avoid waterlogging and salt build-up, and choose a suitable pump.",
  about: [
    "This course is for smallholder and growing farmers, farm workers and young farmers in Kenya, Nigeria, Ghana and across Africa who want to grow through dry spells, grow a second crop in the dry season, or use the water they have more wisely. It focuses on low-cost methods you can start on a small plot, such as a kitchen garden of tomatoes and kale or a nursery of coffee seedlings.",
    "Chapter 1 covers where water comes from: how much water crops need and when, harvesting rainwater from roofs and fields, and storing it safely. Chapter 2 covers putting it on the crop: low-cost drip irrigation, scheduling without waterlogging or salt build-up, and choosing a pump, including solar pumps.",
    "Water rules and permits differ by country, so check with your water authority and extension officer before you dig a borehole, pump from a river or build a large pond. Each lesson takes about five minutes and ends with a task on your own farm. A knowledge check closes each chapter and a 20-question quiz closes the course."
  ],
  finalTask: "Write a one-page irrigation plan for a small plot (your own, or an example such as 200 square metres of tomatoes near Nakuru, or 500 square metres of onions and peppers near Kano): the crop and its thirstiest growth stages, where the water will come from and how much you can store, the drip or other system you will use, a weekly watering schedule with how you will check the soil, how you will avoid waterlogging and salt build-up, and the pump you would choose and why.",
  chapters: [
    {
      name: "Chapter 1: Finding and keeping water",
      lessons: [
        {
          title: "How much water does your crop need, and when?",
          minutes: 5,
          goal: "Name the thirstiest growth stages of your crop and check soil moisture by hand.",
          text: [
            "FAO's training manual on irrigation water needs explains that a crop's water need depends on three things: the climate, the type of crop, and its growth stage. Hot, sunny, dry and windy days make crops use more water; cool, cloudy, still days less. Tall, leafy crops use more than small ones.",
            "Growth stage matters most for planning. A crop needs little water when small, the most during flowering and when grain or fruit is forming, and less as it ripens. Maize is hurt most by drought at tasselling and silking; tomatoes at flowering and fruit set; beans at flowering and pod fill. A dry spell at these stages costs the most yield.",
            "Check the soil, not just the surface. Push a finger or a small stick into the soil near the roots, about 10 to 15 cm deep, or dig a small hole and squeeze a handful. If it holds together and feels moist, wait. If it crumbles and feels dry at root depth, it is time to water. Part of the rain that falls is lost to runoff or drains too deep; the part the crop can use is called effective rainfall."
          ],
          steps: ["Write your crop and how many days from planting to harvest.", "Mark its thirstiest stages (for example maize: tasselling and silking).", "Each week, check the soil at root depth with a finger, stick or hole.", "Note the weather: hot, windy, dry days mean more water use.", "Water before the soil at root depth dries out, especially at the thirsty stages."],
          words: [["Crop water need", "the amount of water a crop uses to grow well."], ["Growth stage", "a period in a crop's life, such as seedling, flowering or ripening."], ["Effective rainfall", "the part of the rain that stays in the root zone and the crop can use."], ["Root zone", "the layer of soil where most of the crop's roots are."]],
          slides: [
            { title: "Three things set water need (FAO)", bullets: ["Climate: hot, sunny, dry, windy = more water", "Crop type: tall and leafy = more water", "Growth stage: most at flowering and fruit/grain fill"] },
            { title: "Thirstiest stages", bullets: ["Maize: tasselling and silking", "Tomatoes: flowering and fruit set", "Beans: flowering and pod fill"] },
            { title: "Check the soil, not the surface", bullets: ["Finger or stick 10 to 15 cm deep near roots", "Holds together and moist: wait", "Crumbles and dry: time to water"] }
          ],
          sources: [FAO_WATERNEEDS],
          tryIt: "For one crop you grow, write the weeks after planting when it reaches its thirstiest stages. Then check your soil at root depth today with a finger, stick or small hole and write: moist or dry.",
          youCanNow: "say when your crop needs water most and check soil moisture at root depth."
        },
        {
          title: "Harvesting rainwater from roofs and fields",
          minutes: 5,
          goal: "Work out how much rain your roof can collect and choose a field method to keep rain on your land.",
          text: [
            "Water harvesting means catching rain where it falls or runs, and keeping it for crops, animals or the home. FAO's water harvesting manual describes many field methods used in dry areas: planting pits (such as zai pits), semi-circular bunds, contour ridges, small diamond-shaped catchments around trees (negarim) and stone bunds.",
            "Roof catchment is the simplest start. Every 1 millimetre of rain on 1 square metre of roof gives about 1 litre of water. A roof of 50 square metres in a place with 600 mm of rain a year can give up to 30,000 litres a year, though some is always lost, so plan on less. Fit gutters, a first-flush pipe that throws away the first dirty water, and a covered tank.",
            "Runoff from roads, paths and slopes can be led into a lined water pan or farm pond. Planting pits filled with compost or manure catch rain right at the roots of maize, sorghum or young fruit trees. Start small and watch where water flows on your land in the next storm."
          ],
          steps: ["Measure your roof: length times width in metres.", "Find your yearly rainfall from your weather service or extension officer.", "Multiply roof area by rainfall in mm to get litres, then plan on less for losses.", "Fit gutters, a first-flush pipe and a covered tank.", "Choose one field method (pits, bunds or contour ridges) for one plot."],
          words: [["Water harvesting", "catching and keeping rainwater or runoff for later use."], ["Roof catchment", "collecting rain from a roof through gutters into a tank."], ["First flush", "a pipe that throws away the first, dirtiest rain from the roof."], ["Zai pit", "a small planting pit filled with manure that catches rain at the roots."]],
          slides: [
            { title: "Catch rain where it falls", bullets: ["Planting pits (zai), semi-circular bunds", "Contour ridges, stone bunds", "Negarim catchments around trees (FAO)"] },
            { title: "Roof maths", bullets: ["1 mm of rain on 1 square metre = about 1 litre", "50 m2 roof x 600 mm = up to 30,000 litres a year", "Plan on less: some is always lost"] },
            { title: "Set it up", bullets: ["Gutters and a first-flush pipe", "Covered tank", "Lead road runoff to a lined water pan"] }
          ],
          sources: [FAO_HARVEST],
          tryIt: "Measure your house or store roof and find your yearly rainfall. Work out how many litres it could collect in a year. Use your phone calculator, or ask a phone AI assistant to check your sum.",
          youCanNow: "estimate how much rainwater you can harvest and choose a field method to keep rain on your land."
        },
        {
          title: "Storing water safely",
          minutes: 4,
          goal: "Choose a water store and keep it clean, covered and legal.",
          text: [
            "Common stores are plastic or ferro-cement tanks, underground tanks, and water pans or farm ponds. Ponds lose a lot of water into the ground unless they are lined (for example with a dam liner) and a lot to the sun unless shaded or covered.",
            "Keep stored water clean and safe. Cover tanks and ponds to keep out dirt, animals and children, and to stop mosquitoes breeding. Fence ponds. Clean gutters and tanks before the rains. Water for drinking needs more care than water for crops; ask your health office how to treat it.",
            "Bigger water use may need a permit. In Kenya, the Water Resources Authority (WRA) regulates water use and issues permits, for example for boreholes and pumping from rivers. Other countries have their own water authorities. Check before you drill, dam or pump."
          ],
          steps: ["Decide what the water is for: crops, animals or home.", "Choose a store: tank, underground tank, or lined pond.", "Cover it and fence ponds.", "Clean gutters and tanks before each rainy season.", "Before drilling or pumping from a river, check with your water authority."],
          words: [["Water pan", "a dug pond that collects runoff."], ["Dam liner", "a strong plastic sheet that stops a pond leaking into the ground."], ["Permit", "official permission to use or take water."]],
          slides: [
            { title: "Stores", bullets: ["Plastic or ferro-cement tanks", "Underground tanks", "Lined water pans and farm ponds"] },
            { title: "Keep it safe", bullets: ["Cover: dirt, animals, mosquitoes", "Fence ponds; children drown in ponds", "Clean gutters and tanks before rains"] },
            { title: "Check the rules", bullets: ["Kenya: Water Resources Authority (WRA)", "Other countries: your water authority", "Ask before drilling, damming or pumping"] }
          ],
          sources: [WRA],
          tryIt: "Write which store suits your farm and your budget, how you will cover and fence it, and the name of the office in your country that you would ask before drilling or pumping.",
          youCanNow: "choose a water store, keep it safe, and know when you need a permit."
        }
      ],
      check: {
        title: "Knowledge Check 1: Finding and keeping water",
        questions: [
          { q: "When does maize suffer most from drought?", options: ["At tasselling and silking", "Right after harvest", "Before planting", "When the cobs are dry"], answer: 0, why: "Flowering stages are the most sensitive; a dry spell then costs the most yield." },
          { q: "How should you check if a crop needs water?", options: ["Look only at the top of the soil", "Wait until leaves die", "Check moisture at root depth with a finger, stick or small hole", "Water every hour"], answer: 2, why: "The roots feel the soil below the surface, so check there." },
          { q: "A roof is 40 square metres and gets 500 mm of rain a year. About how much could it collect at most?", options: ["200 litres", "2,000 litres", "540 litres", "20,000 litres"], answer: 3, why: "40 x 500 = 20,000 litres; real collection will be a bit less." },
          { q: "What does a first-flush pipe do?", options: ["Pumps water uphill", "Throws away the first, dirtiest rain from the roof", "Heats the water", "Measures rainfall"], answer: 1, why: "It keeps dust and droppings out of the tank." },
          { q: "Why cover a water tank or pond?", options: ["To keep out dirt and animals and stop mosquitoes breeding", "To make the water warmer", "To make it heavier", "Covers are not useful"], answer: 0, why: "Covering keeps water clean and safe." }
        ]
      }
    },
    {
      name: "Chapter 2: Putting water on the crop",
      lessons: [
        {
          title: "Low-cost drip irrigation",
          minutes: 6,
          goal: "Set up and look after a bucket or drum drip kit for a small plot.",
          text: [
            "Drip irrigation puts water slowly at the base of each plant through thin pipes with small holes (emitters). Less water is lost to the sun and wind, leaves stay dry so there is less disease, and weeds between rows get less water.",
            "FAO's handbook on pressurized irrigation describes low-cost family drip systems for plots of about 100 to 500 square metres: a bucket or drum raised at least 1 metre above the beds feeds a filter, a main pipe and drip lines along each row. Gravity gives the pressure, so no pump is needed to run it. Kits are sold by agro-dealers and irrigation suppliers; compare prices and ask for spare parts.",
            "Clogging is the main problem. Use clean water, keep the filter in place and clean it often, and flush the ends of the drip lines regularly. Cover the soil with mulch over the drip lines to cut evaporation further. Check each emitter is dripping; a dry plant usually means a blocked hole."
          ],
          steps: ["Level the beds and lay drip lines along each row of plants.", "Raise the bucket or drum on a stand at least 1 metre above the beds.", "Connect drum, tap, filter, main pipe and drip lines; close the line ends.", "Fill with clean water, open the tap and check every emitter drips.", "Mulch over the lines.", "Clean the filter and flush line ends every week or two."],
          words: [["Drip irrigation", "watering plants drop by drop at the roots through thin pipes."], ["Emitter", "the small hole or dripper that lets water out near each plant."], ["Filter", "a screen that stops dirt from blocking the emitters."], ["Gravity-fed", "pushed by the height of the water tank, not by a pump."]],
          slides: [
            { title: "Why drip", bullets: ["Water goes to the roots", "Less lost to sun and wind", "Dry leaves, less disease and fewer weeds"] },
            { title: "Family drip kit (FAO)", bullets: ["For plots of about 100 to 500 square metres", "Bucket or drum at least 1 m above the beds", "Filter, main pipe, drip lines along rows"] },
            { title: "Keep it working", bullets: ["Clean water and a clean filter", "Flush line ends regularly", "Check every emitter; mulch over the lines"] }
          ],
          sources: [FAO_DRIP],
          tryIt: "Sketch a drip layout for a small plot: where the drum stands (at least 1 m high), the filter, the main pipe and each drip line. Then ask two suppliers or agro-dealers the price of a kit for that size and write both down.",
          youCanNow: "set up, run and look after a low-cost gravity drip kit."
        },
        {
          title: "Scheduling: without waterlogging or salt",
          minutes: 5,
          goal: "Make a weekly watering schedule and spot waterlogging and salt build-up early.",
          text: [
            "A schedule answers two questions: when to water and how much. Water early in the morning or late in the afternoon, when less is lost to the sun. Water more often during hot, windy weather and the thirsty stages, and skip watering after good rain. Keep checking the soil at root depth; the schedule is a guide, the soil has the final word.",
            "Too much water is as harmful as too little. Waterlogged soil has no air for roots: plants turn yellow and wilt even though the soil is wet, and roots rot. Signs are standing water, a sour smell and yellowing. Water less, open drains, and use raised beds or ridges on heavy clay.",
            "FAO explains that salt builds up when irrigation water brings in more salt than drains away, and that over-irrigation and poor drainage are common causes. Watch for a white crust on the soil, leaf edges that burn, and poor growth. Good drainage, mulch and enough (not too much) water help. If you see these signs, or use borehole water in a dry area, ask your extension officer or soil lab to test the water and soil."
          ],
          steps: ["Write a weekly plan: which days, morning or evening, how long.", "Water more at thirsty stages and in hot, windy weeks.", "Skip watering after good rain.", "Check soil at root depth before each watering.", "Look for standing water, sour smell and yellowing (waterlogging).", "Look for a white crust and burnt leaf edges (salt); ask for a water and soil test."],
          words: [["Irrigation schedule", "a plan for when and how much to water."], ["Waterlogging", "soil so full of water that roots get no air."], ["Salinity", "too much salt in the soil or water, which harms crops."], ["Drainage", "the way extra water leaves the soil."]],
          slides: [
            { title: "When and how much", bullets: ["Water early morning or late afternoon", "More at thirsty stages and hot, windy weeks", "Skip after good rain; the soil decides"] },
            { title: "Waterlogging", bullets: ["Standing water, sour smell, yellow wilting plants", "Water less and open drains", "Raised beds or ridges on heavy clay"] },
            { title: "Salt build-up (FAO)", bullets: ["Over-irrigation and poor drainage cause it", "White crust, burnt leaf edges, poor growth", "Drain well, mulch, test water and soil"] }
          ],
          sources: [FAO_WATERNEEDS, FAO_SALINITY],
          tryIt: "Write a one-week watering schedule for one crop: days, time of day and how long. Next to it, write the two warning signs of waterlogging and the two of salt build-up you will look for each time you water.",
          youCanNow: "schedule irrigation and spot waterlogging and salt build-up before they ruin a crop."
        },
        {
          title: "Choosing a pump, including solar pumps",
          minutes: 5,
          goal: "Compare treadle, fuel and solar pumps and list what to ask a supplier.",
          text: [
            "If water is below or far from your plot, you need a pump. Treadle and hand pumps are cheap and use your own effort, good for small plots near shallow water. Petrol and diesel pumps are cheap to buy and move easily, but fuel and repairs cost money every week. Solar pumps cost more to buy but use free sunlight, so running costs are very low.",
            "To choose, know three things: how much water you need each day, how high the water must be lifted (from the water level to the tank or field), and how far it must travel. A supplier needs these to size the pump. A pump that is too small will not give enough water; one that is too big wastes money.",
            "FAO points out a risk with solar pumps: because each extra hour of pumping is free, farmers may pump more than the river or groundwater can sustain. Pump only what your crop needs, share water fairly with neighbours, and follow your water authority's rules. Keep panels clean and secure, and ask for a warranty, spare parts and after-sales service in writing. Some suppliers offer pay-as-you-go plans; read the full price and terms first."
          ],
          steps: ["Work out water needed per day for your plot.", "Measure lift: from water level to tank or field.", "Measure distance from source to plot.", "Compare treadle, fuel and solar on purchase cost, running cost and work.", "Ask the supplier for sizing, warranty, spares and service in writing.", "Check water permits before pumping from a river or borehole."],
          words: [["Treadle pump", "a foot-powered pump for lifting water from shallow sources."], ["Solar pump", "a pump powered by solar panels."], ["Lift (head)", "how high the pump must raise the water."], ["Over-abstraction", "taking more water from a river or underground than nature puts back."]],
          slides: [
            { title: "Pump types", bullets: ["Treadle or hand: cheap, your own effort", "Petrol or diesel: cheap to buy, costly to run", "Solar: costly to buy, very low running cost"] },
            { title: "Size it right", bullets: ["Water needed per day", "Lift: how high", "Distance: how far"] },
            { title: "Solar: use it wisely (FAO)", bullets: ["Free pumping can mean over-pumping", "Pump only what the crop needs", "Follow your water authority's rules"] },
            { title: "Ask the supplier", bullets: ["Sizing for your lift and distance", "Warranty, spares and service in writing", "Full price and terms of any pay-as-you-go plan"] }
          ],
          sources: [FAO_SOLAR, WRA],
          tryIt: "Final task: write your one-page irrigation plan. Include your crop's thirsty stages, your water source and storage, your drip or other system, a weekly schedule, how you will avoid waterlogging and salt, and the pump you would choose with your lift, distance and daily water need.",
          youCanNow: "choose the right kind of pump and put together a full irrigation plan for a small plot."
        }
      ],
      check: {
        title: "Knowledge Check 2: Putting water on the crop",
        questions: [
          { q: "What is the main problem to prevent with drip kits?", options: ["Too much pressure", "Clogged emitters", "Too many plants", "Wet leaves"], answer: 1, why: "Dirt blocks emitters; a clean filter and flushing prevent it." },
          { q: "How high should the drum of a gravity drip kit be raised?", options: ["On the ground", "Buried below the beds", "At least 1 metre above the beds", "It does not matter"], answer: 2, why: "FAO says drums should be raised at least 1 metre to give enough pressure." },
          { q: "Plants are yellow and wilting, the soil smells sour and water is standing. What is wrong?", options: ["Too little water", "Too much sun", "Salt in the air", "Waterlogging"], answer: 3, why: "Standing water and a sour smell mean roots have no air." },
          { q: "You see a white crust on the soil and burnt leaf edges. What should you do?", options: ["Ask for a water and soil test and improve drainage", "Water much more every day", "Add more salt", "Ignore it"], answer: 0, why: "These are signs of salt build-up; FAO links it to over-irrigation and poor drainage." },
          { q: "Why does FAO warn about solar pumps?", options: ["They never work", "They are too noisy", "Free pumping can lead to taking too much water", "They need petrol"], answer: 2, why: "With almost no running cost, farmers may over-pump rivers and groundwater." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Irrigation and Water Management",
    questions: [
      { q: "According to FAO, a crop's water need depends on:", options: ["Only the price of water", "Climate, crop type and growth stage", "The colour of the crop", "The day of the week"], answer: 1, why: "FAO lists climate, crop type and growth stage." },
      { q: "Which weather makes crops use the most water?", options: ["Cool and cloudy", "Still and misty", "Hot, sunny, dry and windy", "Cold and wet"], answer: 2, why: "Heat, sun, dry air and wind increase water use." },
      { q: "Tomatoes are most sensitive to water stress at:", options: ["Flowering and fruit set", "Seed buying", "After the last harvest", "When the field is bare"], answer: 0, why: "Flowering and fruit set are the thirstiest stages." },
      { q: "Effective rainfall is:", options: ["All the rain that falls", "Rain that falls at night", "Rain measured by the radio", "The part of the rain the crop can actually use"], answer: 3, why: "Some rain runs off or drains too deep; the rest is effective." },
      { q: "About how much water does 1 mm of rain give on 1 square metre of roof?", options: ["1 litre", "10 litres", "100 litres", "1,000 litres"], answer: 0, why: "1 mm on 1 square metre is about 1 litre." },
      { q: "A zai pit is:", options: ["A borehole", "A small planting pit with manure that catches rain at the roots", "A type of pump", "A water tank"], answer: 1, why: "Zai pits concentrate rain and nutrients at the plant." },
      { q: "Why line a farm pond?", options: ["To make the water salty", "To attract animals", "To stop water leaking into the ground", "Lining is never needed"], answer: 2, why: "Unlined ponds lose much water into the soil." },
      { q: "Why should farm ponds be fenced?", options: ["To keep children and animals safe", "To make them deeper", "To stop rain", "To heat the water"], answer: 0, why: "Open ponds are a drowning risk." },
      { q: "In Kenya, which body issues water use permits, for example for boreholes?", options: ["Kenya Bureau of Standards", "Kenya Revenue Authority", "Kenya Power", "Water Resources Authority (WRA)"], answer: 3, why: "WRA regulates water use and issues permits." },
      { q: "A key benefit of drip irrigation is:", options: ["It wets the leaves", "Water goes to the roots with less lost", "It needs no water", "It makes weeds grow faster"], answer: 1, why: "Drip delivers water at the roots with little waste." },
      { q: "FAO describes family drip kits as suited to plots of about:", options: ["1 to 5 square metres", "100 hectares", "Any size of whole county", "100 to 500 square metres"], answer: 3, why: "FAO's handbook covers simplified family drip for about 100 to 500 square metres." },
      { q: "One plant in your drip line is dry. The most likely cause is:", options: ["A blocked emitter", "Too much sun on the drum", "The plant is too green", "The filter is too clean"], answer: 0, why: "A dry plant usually means its emitter is blocked." },
      { q: "Why put mulch over drip lines?", options: ["To hide them from the sun only", "To make the water hotter", "To block the emitters", "To cut evaporation from the soil"], answer: 3, why: "Mulch keeps soil moisture from evaporating." },
      { q: "The best time of day to irrigate is usually:", options: ["Midday in full sun", "Early morning or late afternoon", "Only at midnight", "Any time; it makes no difference"], answer: 1, why: "Less water is lost to the sun in the cool parts of the day." },
      { q: "It rained well last night. Your schedule says water today. What do you do?", options: ["Water double", "Water as planned anyway", "Check the soil; skip if it is moist at root depth", "Drain the field"], answer: 2, why: "The soil has the final word; skip after good rain." },
      { q: "On heavy clay that waterlogs easily, a good practice is:", options: ["Flood the field", "Add more water", "Plant in a hollow", "Raised beds or ridges and open drains"], answer: 3, why: "Raised beds and drains let extra water leave." },
      { q: "According to FAO, a common cause of salt build-up in irrigated soil is:", options: ["Mulching", "Planting legumes", "Over-irrigation and poor drainage", "Using a filter"], answer: 2, why: "More salt comes in than drains away when there is too much water and poor drainage." },
      { q: "To size a pump, a supplier needs to know:", options: ["Your favourite colour", "Daily water need, lift and distance", "Only your budget", "Your bank PIN"], answer: 1, why: "Water need, lift and distance decide the right pump." },
      { q: "Compared with a petrol pump, a solar pump usually:", options: ["Costs more to buy but very little to run", "Costs less to buy and more to run", "Needs diesel", "Works only at night"], answer: 0, why: "Solar pumps have a higher purchase price but use free sunlight." },
      { q: "A supplier offers a pay-as-you-go solar pump. What should you do first?", options: ["Sign at once", "Give them your PIN", "Read the full price, terms, warranty and service in writing", "Buy two"], answer: 2, why: "Know the full cost and what support you get before you sign." }
    ]
  }
};
