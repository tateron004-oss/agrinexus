"use strict";

// Koach Learn course: Africa: Life and Work -> "Clean Cooking: Safer Stoves and Smoke-Free Kitchens" (owner's request, 30 October 2026).
// For households and small food businesses across Africa that cook with firewood, charcoal or kerosene: why smoke harms, cutting smoke today,
// safety with fire, charcoal, gas and kerosene (burns, carbon monoxide, poisoning), cleaner stoves and fuels, the cost of switching, and a kitchen plan.
// Follows WHO guidance (cited). Fuel and stove prices are never given as facts: money figures are marked as examples. No medical treatment advice;
// burn first aid follows the WHO fact sheet and points to the clinic. The IEA's clean cooking pages blocked automated reading (403), so no IEA figures are used.

const WHO_HAP = { name: "WHO fact sheet: Household air pollution (polluting fuels, health effects, clean fuels, kerosene)", url: "https://www.who.int/news-room/fact-sheets/detail/household-air-pollution-and-health" };
const WHO_BURNS = { name: "WHO fact sheet: Burns (first aid and prevention at home)", url: "https://www.who.int/news-room/fact-sheets/detail/burns" };
const WHO_CHEST = { name: "WHO: Clean Household Energy Solutions Toolkit (clean, transitional and polluting fuels)", url: "https://www.who.int/tools/clean-household-energy-solutions-toolkit" };
const CCA = { name: "Clean Cooking Alliance", url: "https://www.cleancooking.org/" };

module.exports = {
  id: "afr-clean-cooking",
  category: "Africa: Life and Work",
  name: "Clean Cooking: Safer Stoves and Smoke-Free Kitchens",
  skills: "Explaining how cooking smoke harms health, Cutting smoke in the kitchen today, Using fire, charcoal, gas and kerosene safely, Comparing cleaner stoves and fuels, Working out the cost of switching, Writing a kitchen safety and switch plan",
  outcome: "make your kitchen safer and less smoky: explain how smoke harms your family, cut smoke today with what you have, use fire, charcoal, gas and kerosene safely, compare cleaner stoves and fuels by cost and safety, and write a plan your household agrees to.",
  about: [
    "This course is for anyone who cooks with firewood, charcoal or kerosene, at home or in a small food business, in towns and villages across Africa: mothers, fathers, grandmothers, older children who help cook, and food sellers.",
    "Chapter 1 covers smoke and safety: how cooking smoke harms health, how to cut smoke today with what you already have, and how to stay safe with fire, charcoal, gas and kerosene. Chapter 2 covers switching to cleaner cooking: comparing stoves and fuels, working out the cost, and writing a kitchen plan with your household.",
    "This course follows World Health Organization (WHO) advice. It does not recommend a brand or a seller. Stove and fuel prices change and differ by place; every figure in the course is an example, so use your own prices. Each lesson takes about five minutes. A knowledge check closes each chapter and a 20-question quiz closes the course."
  ],
  finalTask: "Write a one-page kitchen safety and switch plan for your household or food business (or an example, such as a family in Kisumu cooking on a charcoal jiko, a food seller in Lagos using firewood, or a family in Ouagadougou cooking on three stones): what you cook with now and what it costs each month; three steps to cut smoke this week; your safety rules for fire, charcoal, gas or kerosene and children; two cleaner options compared on cost, fuel supply and safety; your choice, how you will pay for it, and the date you will switch; and who in the household agreed.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "People who cook for a household or a small food business in Kenya, Nigeria, Ghana, Burkina Faso, Senegal, Cameroon, Egypt and across Africa, mostly with firewood, charcoal or kerosene. Many are women and girls who also collect fuel, and many have a basic phone and a tight budget.",
    startingPoint: "Most cook over an open fire, three stones, a charcoal stove or a kerosene stove, often inside a small kitchen with little air. Many know the smoke stings their eyes but do not link it with chest illness in children. Few have compared what they spend on fuel each month with the cost of a cleaner stove, and some fear gas.",
    gap: "WHO counts about 2.1 billion people worldwide who cook with polluting fuels and stoves, and millions of deaths each year from household air pollution, with women and young children most exposed. Open fires, charcoal and kerosene also cause burns, carbon monoxide poisoning and child poisonings. Learners who cut smoke, cook safely and plan a switch protect their family's health and often save time and money.",
    constraints: [
      "Reading level: plain words and short sentences; every term is explained",
      "Budget: tight; the course never gives real prices, only examples, and learners use local prices",
      "Fuel supply differs by place: gas, electricity and improved stoves are not available everywhere, so learners choose what fits",
      "Safety: no work on gas pipes, electrical wiring or the grid; learners use licensed sellers and follow the maker's instructions",
      "No medical treatment advice: burns and breathing problems go to the clinic"
    ],
    prerequisites: "None. Simple adding and multiplying help in Lesson 5; a phone calculator is fine."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Given a kitchen that cooks with firewood, charcoal or kerosene", action: "explain how cooking smoke harms health and who it hurts most", standard: "naming at least three health effects and the people most exposed" },
    { id: "O2", condition: "Using the stove and fuel you have now", action: "list steps that cut smoke in your kitchen this week", standard: "with at least three steps that cost little or nothing" },
    { id: "O3", condition: "When cooking with fire, charcoal, gas or kerosene", action: "follow safety rules that prevent burns, carbon monoxide poisoning, gas fires and kerosene poisoning", standard: "choosing the safe action in at least 4 of 5 situations" },
    { id: "O4", condition: "Given two or more stove and fuel options available where you live", action: "compare cleaner stoves and fuels by smoke, cost, fuel supply and safety", standard: "with a correct reason for the option you choose" },
    { id: "O5", condition: "Using your own fuel spending and local prices", action: "calculate your monthly fuel cost and compare it with the cost of a cleaner option", standard: "with the sums correct and the payment risks named" },
    { id: "O6", condition: "With your household or business", action: "write a kitchen safety and switch plan that the household agrees to", standard: "with every part filled in and a date to switch" }
  ],
  chapters: [
    {
      name: "Chapter 1: Smoke and safety in the kitchen",
      lessons: [
        {
          title: "How cooking smoke harms your family",
          objectives: ["O1"],
          minutes: 5,
          goal: "Explain how cooking smoke harms health and who it hurts most.",
          text: [
            "Smoke from firewood, charcoal, crop waste, dung and kerosene is full of tiny particles and gases. You cannot see most of them, but they go deep into the lungs. This is called household air pollution.",
            "WHO says household air pollution causes pneumonia and other chest infections in children, and stroke, heart disease, long-term lung disease and lung cancer in adults. It is also linked with low birth weight and eye disease. WHO counts about 2.1 billion people worldwide who cook with polluting fuels and stoves, most of them in Africa and Asia.",
            "Women and young children breathe the most smoke, because they spend the most time near the fire, and babies are often carried on the back while the mother cooks. Girls and women also lose hours collecting firewood, time that could go to school, work or rest.",
            "Smoke you cannot see still harms. A smell of smoke, stinging eyes, coughing while cooking, and black walls or roof are signs that your family breathes too much of it."
          ],
          words: [["Household air pollution", "smoke and gases in and around the home, mostly from cooking, heating and lighting with polluting fuels."], ["Polluting fuels", "fuels that make a lot of smoke when burned in simple stoves: wood, charcoal, crop waste, dung, coal and kerosene."], ["Pneumonia", "a serious chest infection; it is a leading killer of young children."]],
          slides: [
            { title: "What is in the smoke", bullets: ["Tiny particles and gases", "They go deep into the lungs", "You cannot see most of them"] },
            { title: "How it harms (WHO)", bullets: ["Children: pneumonia and chest infections", "Adults: stroke, heart and lung disease, lung cancer", "Linked with low birth weight and eye disease"] },
            { title: "Who breathes the most", bullets: ["Women who cook", "Babies on the back and young children", "Girls who collect wood lose school time"] },
            { title: "Signs of too much smoke", bullets: ["Stinging eyes, coughing while cooking", "Black walls or roof", "Smoke smell in clothes"] }
          ],
          sources: [WHO_HAP],
          tryIt: "Watch your kitchen during one meal. Write how long the fire burns, who is near it, whether a baby or young child is there, and the signs of smoke you see. Write three ways the smoke could harm your family.",
          youCanNow: "explain how cooking smoke harms health and who in your home breathes the most.",
          quickCheck: [
            { objective: "O1", q: "Which illness in young children does WHO link with cooking smoke?", options: ["Pneumonia and chest infections", "Broken bones", "Toothache", "Chickenpox"], answer: 0, why: "Household air pollution causes lower respiratory infections such as pneumonia." },
            { objective: "O1", q: "Who usually breathes the most cooking smoke?", options: ["Visitors", "Men working in the fields", "Women who cook and the young children near them", "Nobody; smoke goes up"], answer: 2, why: "Women and young children spend the most time near the fire." }
          ]
        },
        {
          title: "Cutting smoke today with what you have",
          objectives: ["O2"],
          minutes: 5,
          goal: "List steps that cut smoke in your kitchen this week, with the stove you have now.",
          text: [
            "A new stove helps most, but you can cut smoke today. Let air in and smoke out: cook outside or under a shelter when you can, keep doors and windows open while cooking, and if you can, make a window, eave gap or chimney opening near the fire.",
            "Burn less and burn cleaner. Use dry wood: wet wood makes much more smoke. Split wood into thin pieces and push it in slowly. Use a lid on the pot, soak beans and maize before cooking, and put out the fire as soon as the food is ready.",
            "Keep children away. Keep babies and young children out of the kitchen while the fire burns, and do not cook with a baby on your back if someone else can hold the baby.",
            "Never burn plastic, rubber or painted wood: their smoke is poisonous."
          ],
          steps: ["Let air in: cook outside or open doors and windows.", "Use dry, split wood and push it in slowly.", "Cover pots; soak beans and maize first.", "Put the fire out when the food is ready.", "Keep babies and young children away from the smoke."],
          words: [["Ventilation", "letting fresh air in and smoky air out."], ["Eave gap", "an opening between the top of the wall and the roof that lets smoke out."]],
          slides: [
            { title: "Let air in, smoke out", bullets: ["Cook outside or under a shelter", "Open doors and windows", "Make a window or eave gap near the fire"] },
            { title: "Burn less, burn cleaner", bullets: ["Dry, thin wood", "Lids on pots; soak beans and maize", "Put the fire out when the food is ready"] },
            { title: "Protect children", bullets: ["Keep them out of the smoky kitchen", "Someone else holds the baby", "Never burn plastic or rubber"] }
          ],
          sources: [WHO_HAP],
          tryIt: "Choose three steps from this lesson you can start this week with no money or very little. Write them down, try them for three days, and note what changed (less smoke, less wood, less time).",
          youCanNow: "cut smoke in your kitchen with steps that cost little or nothing.",
          quickCheck: [
            { objective: "O2", q: "Which wood makes the least smoke?", options: ["Wet, green wood", "Large logs pushed in all at once", "Painted wood from an old door", "Dry, thin pieces pushed in slowly"], answer: 3, why: "Dry, thin wood burns more fully and makes less smoke." },
            { objective: "O2", q: "Which step cuts smoke and fuel at the same time?", options: ["Cooking with a lid on the pot", "Leaving the fire burning after cooking", "Closing the windows", "Burning plastic to start the fire"], answer: 0, why: "A lid cooks food faster, so you burn less fuel and make less smoke." }
          ]
        },
        {
          title: "Staying safe with fire, charcoal, gas and kerosene",
          objectives: ["O3"],
          minutes: 6,
          goal: "Follow safety rules that prevent burns, carbon monoxide poisoning, gas fires and kerosene poisoning.",
          text: [
            "Burns: keep the stove stable and, if you can, raised off the floor with a guard around an open fire. Turn pot handles inward. Keep children away from the cooking area. If someone is burned, WHO first aid is: stop the burning, cool the burn under cool running water (about 20 minutes for small burns), take off rings and tight clothes, and cover it with a clean cloth. Do not put butter, oil, toothpaste or traditional pastes on it. Go to the clinic for large or deep burns, or burns on the face, hands, feet or private parts.",
            "Charcoal: a burning charcoal stove gives off carbon monoxide, a gas you cannot see or smell that can kill. Never bring a burning charcoal stove into a closed room to cook or to warm the room, and never sleep with one inside. Headache, dizziness and sleepiness near the stove are warning signs: get everyone into fresh air.",
            "Gas (LPG): buy cylinders from a licensed seller, keep the cylinder upright, and check the hose and regulator. If you smell gas: do not light a match or turn on any switch, turn off the cylinder valve, open doors and windows, and get people outside. Turn the valve off after cooking.",
            "Kerosene: WHO advises against kerosene for cooking and lighting, and swallowing kerosene is a leading cause of child poisoning. Keep it in a closed, labelled container, never in a drink bottle, and out of children's reach. If a child swallows it, go to the clinic now."
          ],
          steps: ["Keep the stove stable and children away; turn handles inward.", "Never use charcoal in a closed room or while sleeping.", "Gas: licensed seller, upright cylinder, valve off after cooking.", "Smell gas: no flames or switches, valve off, open up, get out.", "Kerosene: labelled container, never a drink bottle, out of reach."],
          words: [["Carbon monoxide", "a poisonous gas from burning fuel; you cannot see or smell it."], ["LPG", "liquefied petroleum gas: cooking gas sold in cylinders."], ["Regulator", "the part on top of the gas cylinder that controls the gas going to the stove."]],
          slides: [
            { title: "Burns", bullets: ["Stable stove, handles in, children away", "First aid: cool running water about 20 minutes, clean cloth", "No butter, oil or pastes; big burns to the clinic"] },
            { title: "Charcoal", bullets: ["Gives off carbon monoxide: no colour, no smell", "Never in a closed room; never while sleeping", "Headache or dizzy near it: get into fresh air"] },
            { title: "Gas (LPG)", bullets: ["Licensed seller; cylinder upright", "Smell gas: no flame or switch, valve off, open up, get out", "Valve off after cooking"] },
            { title: "Kerosene", bullets: ["WHO advises against it", "Labelled container, never a drink bottle", "Child swallows it: clinic now"] }
          ],
          sources: [WHO_BURNS, WHO_HAP],
          tryIt: "Walk through your kitchen and write five safety rules for your home: one for burns and children, one for charcoal, one for gas or kerosene (whichever you use), one for storing fuel, and one for what to do in an emergency, with the nearest clinic.",
          youCanNow: "cook safely with fire, charcoal, gas and kerosene and act fast if something goes wrong.",
          quickCheck: [
            { objective: "O3", q: "It is cold in Ouagadougou at night. Is it safe to bring the burning charcoal stove into the closed bedroom?", options: ["Yes, if the door is shut", "Yes, if the charcoal is good quality", "Yes, if you sleep far from it", "No: it gives off carbon monoxide, which can kill"], answer: 3, why: "Carbon monoxide builds up in a closed room and can kill sleeping people." },
            { objective: "O3", q: "You smell gas in the kitchen. What do you do first?", options: ["Light a match to find the leak", "Turn off the valve and open the doors and windows", "Turn on the light", "Ignore it"], answer: 1, why: "No flames or switches; shut off the gas and let it out." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Smoke and safety in the kitchen",
        questions: [
          { objective: "O1", q: "Which adult illness does WHO link with household air pollution?", options: ["Stroke and heart disease", "Malaria", "Typhoid", "Broken bones"], answer: 0, why: "WHO lists stroke, heart disease, lung disease and lung cancer." },
          { objective: "O1", q: "Why do girls lose out from firewood cooking, besides the smoke?", options: ["They earn more", "They lose time collecting wood, which can cost them school", "They sleep more", "It does not affect them"], answer: 1, why: "Fuel collection takes time from school and work." },
          { objective: "O2", q: "Which step cuts smoke in the kitchen today?", options: ["Closing all windows", "Using wet wood", "Cooking outside or opening doors and windows", "Burning old plastic"], answer: 2, why: "Ventilation lets smoke out." },
          { objective: "O3", q: "A child in Yaoundé is burned by hot soup. What is the right first aid?", options: ["Put butter on it", "Cover it with toothpaste", "Pop the blisters", "Cool it under cool running water and cover it with a clean cloth"], answer: 3, why: "WHO first aid is cool running water and a clean cover; no butter or pastes." },
          { objective: "O3", q: "Where should kerosene be kept?", options: ["In a closed, labelled container out of children's reach", "In an old soda bottle", "On the floor by the bed", "In a cup on the table"], answer: 0, why: "Children drink kerosene from drink bottles and cups; it is a leading cause of child poisoning." }
        ]
      }
    },
    {
      name: "Chapter 2: Switching to cleaner cooking",
      lessons: [
        {
          title: "Cleaner stoves and fuels",
          objectives: ["O4"],
          minutes: 6,
          goal: "Compare cleaner stoves and fuels by smoke, cost, fuel supply and safety.",
          text: [
            "WHO lists the cleanest options: solar, electricity, biogas, LPG (cooking gas), natural gas, alcohol fuels such as ethanol, and biomass stoves that meet WHO emission targets. WHO advises against kerosene and unprocessed coal.",
            "Improved wood or charcoal stoves (also called efficient or improved cookstoves) burn less fuel and make less smoke than three stones or an open fire. They are a step forward, but most still make a lot of smoke, so keep the kitchen well ventilated. Ask the seller whether the model has been tested.",
            "Gas (LPG) and electric cooking make almost no smoke in the kitchen. An electric pressure cooker or a hot plate can be cheap to run where power is reliable, and is good for beans and stews. Biogas fits a farm with cattle and space for a digester. A retained-heat cooker (a well-insulated basket or box) finishes cooking with no extra fuel and works with any stove.",
            "Choose what fits your place: Is the fuel sold near you all year? Can you pay for refills? Is it safe for your home? In many towns gas or electricity may fit; in villages far from supply, an improved stove plus good ventilation may be the first step."
          ],
          steps: ["List the stoves and fuels sold near you.", "For each, note smoke (a lot, some, almost none).", "Note the fuel supply: always available, sometimes, rarely.", "Note safety needs and the upfront and running cost.", "Pick the cleanest option you can supply and afford."],
          words: [["Improved cookstove", "a wood or charcoal stove designed to burn less fuel and make less smoke than an open fire."], ["Biogas", "gas made from animal dung and plant waste in a closed tank called a digester."], ["Retained-heat cooker", "an insulated basket or box that keeps a hot pot cooking without more fuel."]],
          slides: [
            { title: "Cleanest options (WHO)", bullets: ["Solar, electricity, biogas, LPG, natural gas, ethanol", "Biomass stoves that meet WHO emission targets", "WHO advises against kerosene and coal"] },
            { title: "Improved wood and charcoal stoves", bullets: ["Less fuel and less smoke than an open fire", "Still smoky: keep ventilating", "Ask if the model has been tested"] },
            { title: "Gas and electric", bullets: ["Almost no smoke in the kitchen", "Electric pressure cooker: good for beans and stews", "Retained-heat cooker saves fuel with any stove"] },
            { title: "Choose what fits", bullets: ["Fuel sold near you all year?", "Can you pay for refills?", "Safe for your home?"] }
          ],
          sources: [WHO_HAP, WHO_CHEST, CCA],
          tryIt: "Ask at your local market, shop or gas seller which stoves and fuels are sold near you. Make a small table of two or three options with four columns: smoke, fuel supply, safety needs and cost (use the real prices you are told).",
          youCanNow: "compare cleaner stoves and fuels by smoke, cost, fuel supply and safety, and pick one that fits.",
          quickCheck: [
            { objective: "O4", q: "Which of these does WHO list as a clean cooking fuel?", options: ["Kerosene", "Unprocessed coal", "LPG (cooking gas)", "Plastic waste"], answer: 2, why: "WHO lists LPG, electricity, biogas, solar and ethanol among clean fuels." },
            { objective: "O4", q: "A family in a village far from any gas seller wants less smoke now. What is a sensible first step?", options: ["An improved stove plus good ventilation", "Buy a gas cylinder they cannot refill", "Switch to kerosene", "Cook indoors with the windows shut"], answer: 0, why: "An improved stove with ventilation cuts smoke where cleaner fuels are not yet supplied." }
          ]
        },
        {
          title: "Counting the cost and paying for a switch",
          objectives: ["O5"],
          minutes: 6,
          goal: "Calculate your monthly fuel cost and compare it with the cost of a cleaner option.",
          text: [
            "Many families think clean cooking is too costly, but they never add up what they already spend. Write what you spend on firewood, charcoal or kerosene in a normal week, and multiply by 4 for a rough monthly cost. If you collect wood, also count the hours spent.",
            "For the cleaner option, count two costs: the upfront cost (the stove, the cylinder and regulator) and the running cost (refills or electricity each month). Then compare the running cost with what you spend now, and work out how many months it takes for any saving to pay back the upfront cost.",
            "Example with made-up numbers, not real prices: a family in Kisumu spends KES 300 a week on charcoal, about KES 1,200 a month. A cleaner option costs KES 900 a month to run and KES 3,600 upfront. They save KES 300 a month, so the upfront cost is paid back in 12 months (3,600 divided by 300). Use your own prices.",
            "Ways to pay: save a little each week, buy together through a savings group or chama, tontine or esusu, or ask about pay-as-you-go gas or stove plans offered where you live. Before you sign, ask the full price, what happens if you miss a payment, and who repairs it. Do not pay a stranger who promises a free stove for a fee, and buy gas only from licensed sellers."
          ],
          steps: ["Write your weekly fuel spend and multiply by 4.", "Write the upfront and monthly cost of a cleaner option.", "Subtract to find the monthly saving (or extra cost).", "Divide the upfront cost by the monthly saving to find the months to pay back.", "Choose how to pay and check the terms."],
          words: [["Upfront cost", "the money you pay once at the start, such as for the stove."], ["Running cost", "the money you pay again and again, such as fuel refills."], ["Pay back", "the time it takes for savings to cover what you paid at the start."], ["Pay-as-you-go", "paying in small amounts, often by mobile money, as you use the fuel or stove."]],
          slides: [
            { title: "What do you spend now?", bullets: ["Weekly fuel spend x 4 = monthly cost", "Count wood-collecting hours too"] },
            { title: "Two costs of switching", bullets: ["Upfront: stove, cylinder, regulator", "Running: refills or electricity each month"] },
            { title: "Example (made-up numbers)", bullets: ["Charcoal KES 1,200 a month; cleaner option KES 900", "Saving KES 300 a month", "Upfront KES 3,600 / 300 = 12 months to pay back"] },
            { title: "Paying safely", bullets: ["Save weekly or buy through your savings group", "Ask the full price and missed-payment rules", "No fees for \"free stoves\"; licensed gas sellers only"] }
          ],
          tryIt: "Write what your household spends on cooking fuel in a normal week (in your currency, for example NGN, GHS, XOF, XAF or EGP) and work out the month. Then use real prices you found in Lesson 4 to work out the monthly saving and the months to pay back for one cleaner option.",
          youCanNow: "work out what cooking fuel costs you each month and whether a cleaner option pays back.",
          quickCheck: [
            { objective: "O5", q: "Example only: a family spends GHS 50 a week on charcoal. About how much is that a month?", options: ["GHS 50", "GHS 100", "GHS 500", "GHS 200"], answer: 3, why: "50 a week times 4 weeks is about 200 a month." },
            { objective: "O5", q: "A man phones offering a \"free government stove\" if you first send a fee by mobile money. What is this?", options: ["A good deal", "A warning sign of a scam; do not pay", "A normal tax", "A required deposit"], answer: 1, why: "Asking for a fee to receive something free is a common scam sign." }
          ]
        },
        {
          title: "Your kitchen safety and switch plan",
          objectives: ["O6"],
          minutes: 5,
          goal: "Write a kitchen safety and switch plan that your household agrees to.",
          text: [
            "A plan turns what you learned into action. It has six parts: what you cook with now and its monthly cost; three steps to cut smoke this week; your safety rules; two cleaner options compared; your choice, how you will pay and the date you will switch; and who agreed.",
            "Talk with the whole household. The person who pays and the person who cooks may see things differently. Share what smoke does to the children's chests, the money you counted, and the time saved from collecting wood. Ask everyone what worries them, such as fear of gas or the taste of food, and answer it.",
            "If you run a food business, such as a chop bar in Kumasi, a mama put in Lagos or a dibiterie in Dakar, add your customers and staff: less smoke means a cleaner place and healthier workers, and fuel is often one of your biggest costs.",
            "Put the plan on the wall. After one month, check: is there less smoke, and what did fuel cost? Change the plan if needed."
          ],
          steps: ["Write the six parts of the plan.", "Talk it through with the household or staff.", "Answer their worries.", "Agree the choice, the payment and the switch date.", "Check after one month and adjust."],
          words: [["Switch plan", "a written plan for moving to a cleaner, safer way of cooking."]],
          slides: [
            { title: "Six parts of the plan", bullets: ["Now: fuel and monthly cost", "Three smoke-cutting steps; safety rules", "Two options compared; choice, payment, date; who agreed"] },
            { title: "Agree it together", bullets: ["The cook and the payer may differ", "Share health, money and time facts", "Answer worries, such as fear of gas"] },
            { title: "For food businesses", bullets: ["Cleaner place, healthier staff", "Fuel is often a big cost"] },
            { title: "Check after a month", bullets: ["Less smoke?", "What did fuel cost?", "Change the plan if needed"] }
          ],
          tryIt: "Final task: write your one-page kitchen safety and switch plan with all six parts. Talk it through with your household or staff and write the names of who agreed.",
          youCanNow: "write a kitchen safety and switch plan and agree it with your household.",
          quickCheck: [
            { objective: "O6", q: "Which belongs in a kitchen switch plan?", options: ["A date to switch and how you will pay", "Only the colour of the stove", "Nothing about safety", "A promise to cook indoors with charcoal"], answer: 0, why: "The plan needs a choice, a payment plan and a date to make the switch happen." },
            { objective: "O6", q: "The person who cooks wants gas, but the person who pays is worried about cost. What helps most?", options: ["Ignore the worry", "Buy without telling them", "Show the monthly fuel cost you counted and the health facts", "Give up"], answer: 2, why: "Real numbers and health facts help the household agree." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Switching to cleaner cooking",
        questions: [
          { objective: "O4", q: "Which makes almost no smoke in the kitchen?", options: ["Three stones", "Kerosene stove", "Open fire", "Electric pressure cooker"], answer: 3, why: "Electric and gas cooking make almost no smoke in the kitchen." },
          { objective: "O4", q: "What does a retained-heat cooker do?", options: ["Makes gas from dung", "Keeps a hot pot cooking with no extra fuel", "Burns plastic cleanly", "Charges a phone"], answer: 1, why: "Insulation keeps the heat in so food finishes cooking without more fuel." },
          { objective: "O5", q: "Example only: a cleaner option saves XAF 5,000 a month and costs XAF 30,000 upfront. How many months to pay back?", options: ["6 months", "3 months", "25 months", "35 months"], answer: 0, why: "30,000 divided by 5,000 is 6." },
          { objective: "O5", q: "Before signing a pay-as-you-go stove plan, what should you ask?", options: ["Nothing", "Only the colour", "The full price and what happens if you miss a payment", "The seller's favourite food"], answer: 2, why: "The full cost and missed-payment rules show the real risk." },
          { objective: "O6", q: "After switching, what should the household do?", options: ["Never think about it again", "Check after a month for smoke and cost, and adjust", "Go back to kerosene", "Throw the plan away"], answer: 1, why: "Checking shows whether the plan worked and what to change." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Clean Cooking: Safer Stoves and Smoke-Free Kitchens",
    questions: [
      { objective: "O1", q: "Household air pollution mainly comes from:", options: ["Car horns", "Cooking with polluting fuels in simple stoves", "Mobile phones", "Drinking water"], answer: 1, why: "Smoke from wood, charcoal, dung and kerosene is the main source." },
      { objective: "O1", q: "Which is a sign your family breathes too much smoke?", options: ["Stinging eyes and coughing while cooking", "Clean white walls", "No smell in clothes", "Fresh air in the kitchen"], answer: 0, why: "Stinging eyes, coughing and black walls are signs of heavy smoke." },
      { objective: "O1", q: "Why is it risky to cook with a baby on your back over an open fire?", options: ["The baby gets bored", "It is not risky", "The baby breathes a lot of smoke", "The food cooks slower"], answer: 2, why: "Babies near the fire breathe the smoke and can get chest infections." },
      { objective: "O2", q: "Which cuts smoke for free?", options: ["Closing the door", "Using wet wood", "Burning rubber", "Opening doors and windows while cooking"], answer: 3, why: "Ventilation lets smoke out at no cost." },
      { objective: "O2", q: "Soaking beans before cooking helps because:", options: ["They cook faster, using less fuel and making less smoke", "It adds salt", "It makes more smoke", "It is not useful"], answer: 0, why: "Shorter cooking means less fuel and less smoke." },
      { objective: "O2", q: "Which should you never burn?", options: ["Dry wood", "Charcoal in an open space", "Plastic and rubber", "Maize cobs"], answer: 2, why: "Burning plastic and rubber gives off poisonous smoke." },
      { objective: "O3", q: "Carbon monoxide from charcoal is dangerous because:", options: ["It smells strongly", "You cannot see or smell it, and it can kill", "It is coloured", "It only affects plants"], answer: 1, why: "It gives no warning, so people can be poisoned in closed rooms." },
      { objective: "O3", q: "WHO burn first aid says to:", options: ["Put butter on it", "Use ice", "Pop the blisters", "Cool it under cool running water"], answer: 3, why: "Cool running water for about 20 minutes is WHO's advice for small burns." },
      { objective: "O3", q: "If you smell gas, you should NOT:", options: ["Open the windows", "Turn off the cylinder valve", "Light a match or turn on a switch", "Get people outside"], answer: 2, why: "A flame or spark can set off the gas." },
      { objective: "O3", q: "A child in Kano drank kerosene from a soda bottle. The family should:", options: ["Go to the clinic now", "Wait and see", "Give the child oil", "Make the child vomit"], answer: 0, why: "Kerosene poisoning needs care now; the clinic decides the treatment." },
      { objective: "O4", q: "Which does WHO advise against for cooking?", options: ["LPG", "Electricity", "Kerosene", "Biogas"], answer: 2, why: "WHO advises against kerosene and unprocessed coal." },
      { objective: "O4", q: "An improved charcoal stove:", options: ["Makes no smoke at all", "Uses less fuel and makes less smoke, but still needs ventilation", "Is the same as an open fire", "Can be used in a closed bedroom"], answer: 1, why: "Improved stoves help, but most still make smoke and carbon monoxide." },
      { objective: "O4", q: "Biogas fits best for:", options: ["A farm with cattle and space for a digester", "A flat with no animals", "A market stall with no space", "A car"], answer: 0, why: "Biogas is made from dung and plant waste in a digester." },
      { objective: "O4", q: "Before choosing a fuel, the most important question is:", options: ["What colour is the stove?", "Is it sold near me all year, and can I pay for refills?", "What do my neighbours think of the brand?", "Is the box big?"], answer: 1, why: "A clean stove only helps if you can keep buying its fuel." },
      { objective: "O5", q: "To find your monthly fuel cost, you can:", options: ["Guess", "Multiply your weekly spend by 4", "Divide by 4", "Ask a stranger"], answer: 1, why: "Weekly spend times 4 gives a rough monthly cost." },
      { objective: "O5", q: "Example only: monthly saving EGP 100, upfront cost EGP 800. Months to pay back?", options: ["100", "900", "700", "8"], answer: 3, why: "800 divided by 100 is 8." },
      { objective: "O5", q: "Where should you buy gas cylinders?", options: ["From a licensed seller", "From anyone on the roadside", "From an unlabelled refill shop at night", "From a stranger online who wants payment first"], answer: 0, why: "Licensed sellers follow safety rules for cylinders and refills." },
      { objective: "O6", q: "Who should agree the kitchen switch plan?", options: ["Only the seller", "Nobody", "The household, including the person who cooks and the person who pays", "Only the children"], answer: 2, why: "Everyone affected should agree so the plan works." },
      { objective: "O6", q: "A good switch plan includes:", options: ["No date", "Only the brand name", "Nothing about safety", "Two options compared, a choice, how to pay and a switch date"], answer: 3, why: "These parts make the plan clear and doable." },
      { objective: "O6", q: "A food seller in Dakar adds which extra point to her plan?", options: ["Less smoke for her staff and customers, and her fuel costs", "The colour of the plates", "Nothing", "More kerosene"], answer: 0, why: "For a business, staff health and fuel cost matter." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Pre-Test: What Do You Already Know?", from: [0, 3, 6, 8, 10, 13, 14, 15, 18] },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      { name: "Why it matters", objective: "O1", notYet: "No health reason given, or the reasons are wrong.", meets: "Names at least three health effects of smoke and who in the home breathes the most.", exceeds: "Also names time lost collecting fuel and who it affects." },
      { name: "Smoke cut this week", objective: "O2", notYet: "Fewer than three steps, or steps that cost a lot.", meets: "Three steps that cost little or nothing, such as ventilation, dry wood and lids.", exceeds: "Steps have been tried, with a note of what changed." },
      { name: "Safety rules", objective: "O3", notYet: "Missing rules for the fuel used, or an unsafe rule.", meets: "Clear rules for burns and children and for the fuels the household uses, with the nearest clinic.", exceeds: "Includes the gas-leak steps or the charcoal carbon monoxide rule, and fuel storage." },
      { name: "Options compared", objective: "O4", notYet: "Only one option, or no comparison.", meets: "Two options compared on smoke, fuel supply, safety and cost, with a correct reason for the choice.", exceeds: "Prices come from real local sellers and fuel supply is checked." },
      { name: "Cost and payment", objective: "O5", notYet: "No monthly cost, or the sums are wrong.", meets: "Monthly fuel cost now, the cleaner option's costs and a payment way, with correct sums.", exceeds: "Shows the months to pay back and names the questions to ask before signing." },
      { name: "Plan agreed", objective: "O6", notYet: "No switch date, or nobody else has seen it.", meets: "All six parts are filled in, with a switch date and the names of who agreed.", exceeds: "Includes a one-month check of smoke and cost." }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Households that report at least three smoke-cutting steps in use 30 days later (follow-up survey)",
      "Households that report no charcoal stove used in closed rooms and kerosene stored safely",
      "Households or food businesses that switch to a cleaner stove or fuel within 6 months",
      "Learners who report less money or time spent on cooking fuel"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A basic phone with a calculator, or paper and pen",
      "Local prices for stoves and fuels, collected by the learner or the facilitator",
      "If possible, an improved stove, a gas stove or a retained-heat basket to show the group",
      "About 60 minutes in total, in short sessions"
    ],
    facilitatorNotes: [
      "Good partners: women's groups, savings groups, schools, clinics, community health workers and local clean cooking enterprises (do not promote one brand).",
      "Collect real local stove and fuel prices before the session; the course uses only made-up example numbers.",
      "A demonstration outdoors works well: compare smoke from wet and dry wood, or from three stones and an improved stove.",
      "Gas safety: demonstrate turning the valve off and checking the hose; never test for leaks with a flame. Do not let learners work on wiring or gas pipes.",
      "Burns and poisoning: teach first aid from WHO and send learners to the clinic; give no treatment advice.",
      "Score the final task with the rubric and give feedback on one Not yet row at a time."
    ]
  }
};
