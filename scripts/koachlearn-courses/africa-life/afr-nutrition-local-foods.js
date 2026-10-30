"use strict";

// Koach Learn course: Africa: Life and Work -> "Good Nutrition on a Budget with Local Foods" (owner's request, 30 October 2026).
// For mothers, fathers, carers, students and small food sellers across Africa: food groups with local foods, a balanced plate, less salt, sugar and oil,
// safe food, shopping on a budget, feeding young children and pregnant or breastfeeding women, and a weekly meal plan.
// Follows WHO guidance (cited in `sources`). No diets for illness, supplements or medicine doses: those questions go to the clinic or a nutritionist.
// Prices are never given as facts: every money figure is marked as an example, and learners use their own market prices.

const WHO_DIET = { name: "WHO fact sheet: Healthy diet (fruit and vegetables, salt, sugar and fat)", url: "https://www.who.int/news-room/fact-sheets/detail/healthy-diet" };
const WHO_IYCF = { name: "WHO fact sheet: Infant and young child feeding", url: "https://www.who.int/news-room/fact-sheets/detail/infant-and-young-child-feeding" };
const WHO_ANAEMIA = { name: "WHO fact sheet: Anaemia (who is at risk, iron-rich foods, foods that block iron)", url: "https://www.who.int/news-room/fact-sheets/detail/anaemia" };
const WHO_FIVE_KEYS = { name: "WHO: Five keys to safer food manual", url: "https://www.who.int/publications/i/item/9789241594639" };

module.exports = {
  id: "afr-nutrition-local-foods",
  category: "Africa: Life and Work",
  name: "Good Nutrition on a Budget with Local Foods",
  skills: "Sorting local foods into food groups, Building a balanced plate, Cutting salt, sugar and oil and keeping food safe, Comparing food prices for value, Feeding young children and pregnant or breastfeeding women, Writing a weekly meal plan on a budget",
  outcome: "write a weekly meal plan for your household that uses local foods from several food groups every day, fits your food budget, follows WHO advice on salt, sugar and safe food, and gives young children and pregnant or breastfeeding women what they need.",
  about: [
    "This course is for anyone who buys or cooks food for a household in Africa: mothers and fathers, grandmothers, students living alone, and people who sell cooked food. You do not need money for special foods. Good nutrition comes from the beans, greens, grains, fish, eggs and fruit already in your market.",
    "Chapter 1 covers knowing your foods: the food groups with local examples, building a balanced plate, and cutting salt, sugar and oil while keeping food safe. Chapter 2 covers eating well on a budget: comparing prices for value, feeding the people who need it most, and writing a weekly meal plan.",
    "This course follows World Health Organization (WHO) advice. It does not give diets for illnesses such as diabetes, HIV or malnutrition, or advice on supplements; for those, talk to a clinic, nutritionist or community health worker. All prices are examples; use the prices in your own market. Each lesson takes about five minutes. A knowledge check closes each chapter and a 20-question quiz closes the course."
  ],
  finalTask: "Write a one-week meal plan for your household (or an example, such as a family of five in Kisumu, a family of four in Ibadan, or a student in Accra): for each day, the meals and the food groups they cover, with fruit or vegetables every day; the foods for any young child or pregnant or breastfeeding woman; a shopping list with your own market prices and the week's total against your budget; and three habits you will use (less salt, less sugar, and one food safety key).",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "People who buy or cook food for a household in Kenya, Nigeria, Ghana, Senegal, Côte d'Ivoire, Cameroon, Morocco, Egypt and across Africa: parents, grandmothers, young adults living alone and small cooked-food sellers. Many have tight and changing incomes and use a basic phone.",
    startingPoint: "Most cook filling staple meals (ugali, rice, garri, fufu, banku, attiéké, bread) every day, but often with few vegetables, beans or animal foods. Many add a lot of salt, stock cubes, sugar or oil. Few compare food prices by value or plan a week of meals, and many are unsure how to feed a baby from 6 months.",
    gap: "Many families eat enough to feel full but not enough variety, which leads to anaemia, poor growth in children and, more and more, high blood pressure and diabetes in adults. Learners can eat better at the same cost by choosing local foods from several groups, cutting salt and sugar, and planning their shopping.",
    constraints: [
      "Reading level: plain words and short sentences; every nutrition word is explained",
      "Budget: tight and changing; the course never gives real prices, only examples, and learners use their own market prices",
      "Foods differ by country and season: examples come from Kenya, Nigeria, Ghana, Senegal, Côte d'Ivoire, Morocco and Egypt",
      "No diets for illness, supplements or medicine: those questions go to the clinic or a nutritionist",
      "Devices: a basic phone for a calculator and notes, or paper"
    ],
    prerequisites: "None. Simple adding and multiplying help with Lesson 4; a phone calculator is fine."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Given a list of foods sold in your market", action: "sort local foods into energy, body-building and protective food groups", standard: "getting at least 8 of 10 right" },
    { id: "O2", condition: "Given the foods in your kitchen", action: "plan a balanced plate with a staple, a body-building food and vegetables or fruit", standard: "with vegetables or fruit filling about half the plate" },
    { id: "O3", condition: "Given a household recipe or meal", action: "change the recipe to use less salt, sugar and oil and apply the WHO five keys to safer food", standard: "naming at least two changes and the five keys" },
    { id: "O4", condition: "Using prices from your own market", action: "compare the cost of foods for the same food group to find better value", standard: "choosing the cheaper option that gives the same nutrients, with the sums correct" },
    { id: "O5", condition: "For a child aged 6 to 23 months, or a pregnant or breastfeeding woman", action: "plan one day's meals that meet WHO feeding advice", standard: "with the right number of meals for the child's age, or extra iron-rich food for the woman" },
    { id: "O6", condition: "Given your household's size and food budget", action: "write a weekly meal plan and shopping list", standard: "covering several food groups every day and staying within the budget" }
  ],
  chapters: [
    {
      name: "Chapter 1: Know your foods",
      lessons: [
        {
          title: "Food groups with local foods",
          objectives: ["O1"],
          minutes: 5,
          goal: "Sort the foods sold in your market into energy, body-building and protective food groups.",
          text: [
            "No single food gives the body everything it needs. An easy way to remember is three groups. Energy foods (\"go\" foods) give strength: maize, rice, millet, sorghum, cassava, yam, plantain, sweet potato, bread, and also oil. Body-building foods (\"grow\" foods) build muscles and blood: beans, lentils, cowpeas, groundnuts, eggs, fish, meat, chicken and milk. Protective foods (\"glow\" foods) help fight sickness: vegetables and fruit.",
            "Local examples: in Kenya, ugali (energy), githeri or omena (body-building) and sukuma wiki (protective). In Nigeria, garri or yam (energy), beans or egusi (body-building) and ugu or bitter leaf (protective). In Ghana, banku or kenkey (energy), fish or groundnut soup (body-building) and kontomire (protective). In Senegal, rice or millet with niébé (cowpeas) and vegetables. In Egypt, bread with ful (fava beans) and salad.",
            "Some foods are special helpers. Dark green leaves (amaranth, cassava leaves, moringa, kontomire) and orange foods (orange sweet potato, pawpaw, mango, carrots) are rich in vitamins. Beans, small dried fish, eggs, liver and dark green leaves give iron, which prevents anaemia."
          ],
          steps: ["Write the foods your household ate yesterday.", "Mark each one: energy, body-building or protective.", "See which group is missing or small.", "Name one local food you can add for that group."],
          words: [["Food group", "foods that do a similar job in the body."], ["Staple", "the main filling food eaten most days, such as ugali, rice, garri or bread."], ["Anaemia", "weak blood, often from too little iron; it makes people tired and weak."]],
          slides: [
            { title: "Three food groups", bullets: ["Energy (go): maize, rice, cassava, yam, plantain, bread", "Body-building (grow): beans, groundnuts, eggs, fish, meat, milk", "Protective (glow): vegetables and fruit"] },
            { title: "Local plates", bullets: ["Kenya: ugali, omena, sukuma wiki", "Nigeria: garri or yam, beans, ugu", "Ghana: banku, fish, kontomire; Egypt: bread, ful, salad"] },
            { title: "Special helpers", bullets: ["Dark green leaves and orange foods: vitamins", "Beans, small dried fish, eggs, liver, greens: iron"] }
          ],
          sources: [WHO_DIET, WHO_ANAEMIA],
          tryIt: "Write everything your household ate yesterday. Mark each food E (energy), B (body-building) or P (protective). Circle the group you ate least, and write one local food you could add tomorrow.",
          youCanNow: "sort local foods into energy, body-building and protective groups and spot what is missing.",
          quickCheck: [
            { objective: "O1", q: "Which of these is a body-building food?", options: ["Cassava", "Beans", "Rice", "Sugar"], answer: 1, why: "Beans are rich in protein, which builds the body." },
            { objective: "O1", q: "A family in Accra ate banku and pepper sauce all day. Which group is missing most?", options: ["Energy foods", "Salt", "Body-building and protective foods", "Nothing"], answer: 2, why: "Banku is an energy food; the meal needs fish or beans and vegetables." }
          ]
        },
        {
          title: "Building a balanced plate",
          objectives: ["O2"],
          minutes: 5,
          goal: "Plan a balanced plate with a staple, a body-building food and vegetables or fruit.",
          text: [
            "A simple guide for each main meal: about half the plate vegetables and fruit, about a quarter a staple, and about a quarter a body-building food. You do not need a real plate; think of the bowl or the shared tray in the same parts.",
            "WHO advises adults to eat at least 400 grams of fruit and vegetables a day, which is about five handfuls. Leaves cooked in a soup or stew count. Whole grains and less-refined foods, such as brown rice, millet, sorghum or whole maize flour, keep you full for longer.",
            "Make small changes, not a new kitchen. Add a handful of greens to the stew. Add beans to the rice (waakye in Ghana, rice and beans in Nigeria, githeri in Kenya). Add a small piece of fish or an egg for the children. Eat a fruit in season instead of a sweet snack.",
            "To help the body use iron from beans and greens, eat them with a vitamin C food such as tomatoes, oranges, guava or mango. Drink tea or coffee between meals, not with them, because they make iron harder to take in."
          ],
          steps: ["Picture the plate in four parts.", "Fill about half with vegetables and fruit.", "Fill about a quarter with a staple.", "Fill about a quarter with a body-building food.", "Add a vitamin C food; keep tea for between meals."],
          words: [["Balanced", "a meal with the right mix of food groups."], ["Whole grain", "grain with the outer layer kept, such as brown rice, millet or whole maize flour."]],
          slides: [
            { title: "The balanced plate", bullets: ["About half: vegetables and fruit", "About a quarter: staple", "About a quarter: body-building food"] },
            { title: "Fruit and vegetables", bullets: ["WHO: at least 400 g a day for adults", "About five handfuls", "Leaves in soup or stew count"] },
            { title: "Small changes", bullets: ["Greens in the stew; beans in the rice", "An egg or fish for the children", "Fruit in season instead of sweets"] },
            { title: "Help iron work", bullets: ["Eat beans and greens with tomato, orange or mango", "Tea and coffee between meals, not with them"] }
          ],
          sources: [WHO_DIET, WHO_ANAEMIA],
          tryIt: "Plan tomorrow's main meal using foods you already have. Draw the plate (or bowl) and write what goes in each part. Add one vitamin C food.",
          youCanNow: "plan a balanced plate with a staple, a body-building food and plenty of vegetables or fruit.",
          quickCheck: [
            { objective: "O2", q: "On a balanced plate, about how much should be vegetables and fruit?", options: ["About half", "None", "A tiny corner", "All of it"], answer: 0, why: "About half the plate vegetables and fruit is the simple guide." },
            { objective: "O2", q: "Why eat tomatoes or an orange with beans and greens?", options: ["They add salt", "They help the body take in iron", "They replace the beans", "They make the food last longer"], answer: 1, why: "Vitamin C helps the body use iron from plant foods." }
          ]
        },
        {
          title: "Less salt, sugar and oil, and safe food",
          objectives: ["O3"],
          minutes: 5,
          goal: "Change a recipe to use less salt, sugar and oil and apply the five keys to safer food.",
          text: [
            "Too much salt raises blood pressure, which can lead to stroke and heart disease. WHO advises adults to eat less than 5 grams of salt a day, just under one level teaspoon, counting all the salt in stock cubes, seasoning powders, salted fish and bread. Use less salt and fewer cubes, and add taste with onion, garlic, ginger, pepper and herbs. If you use salt, choose iodized salt.",
            "Sugar: WHO advises keeping free sugars (sugar added to food and drinks, and sugar in honey, sodas and juices) to less than 10% of daily energy, and less is better. For most adults that is less than about 12 level teaspoons a day. Sweet tea, sodas and juice add up fast. Oil: use a little, and fry less often; boil, steam or stew instead.",
            "Food safety stops diarrhoea and food poisoning. WHO's five keys to safer food: keep clean (wash hands and surfaces); separate raw and cooked food; cook thoroughly, especially meat, fish and eggs; keep food at safe temperatures (do not leave cooked food out for hours); and use safe water and fresh, safe foods.",
            "These rules matter even more if you sell cooked food, because one mistake can make many customers sick."
          ],
          steps: ["Count the salt, cubes and sugar in one usual recipe.", "Cut each by a little, and add onion, garlic, pepper or herbs.", "Choose to stew or boil instead of frying once a week.", "Check the recipe against the five keys to safer food."],
          words: [["Iodized salt", "salt with iodine added, which the body needs."], ["Free sugars", "sugar added to food and drinks, plus sugar in honey, syrups and fruit juices."], ["Food poisoning", "sickness from eating food with germs or poison in it."]],
          slides: [
            { title: "Less salt", bullets: ["WHO: under 5 g a day, just under a level teaspoon", "Count cubes, seasoning, salted fish and bread", "Add onion, garlic, pepper, herbs; use iodized salt"] },
            { title: "Less sugar and oil", bullets: ["WHO: free sugars under 10% of energy, less is better", "Sweet tea, sodas and juice add up fast", "Fry less: boil, steam or stew"] },
            { title: "Five keys to safer food (WHO)", bullets: ["Keep clean; separate raw and cooked", "Cook thoroughly; keep food at safe temperatures", "Use safe water and safe raw foods"] }
          ],
          sources: [WHO_DIET, WHO_FIVE_KEYS],
          tryIt: "Take one dish your household eats often, such as jollof rice, egusi soup, thieboudienne or a bean stew. Write two changes that cut salt, sugar or oil, and one food safety key you will practise when cooking it.",
          youCanNow: "change a recipe to use less salt, sugar and oil and keep food safe with the five keys.",
          quickCheck: [
            { objective: "O3", q: "Which change cuts salt in a stew?", options: ["Add two more stock cubes", "Add salted fish and more salt", "Use fewer cubes and add onion, garlic and pepper", "Add more seasoning powder"], answer: 2, why: "Cubes and seasoning powders are salty; herbs and spices add taste without salt." },
            { objective: "O3", q: "Which is one of WHO's five keys to safer food?", options: ["Keep cooked food out all day", "Separate raw and cooked food", "Use the same board for raw meat and salad without washing", "Taste raw meat to check it"], answer: 1, why: "Separating raw and cooked foods stops germs spreading." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Know your foods",
        questions: [
          { objective: "O1", q: "Which is a protective (glow) food?", options: ["Kontomire (cocoyam leaves)", "Garri", "Palm oil", "White bread"], answer: 0, why: "Green leaves are protective foods full of vitamins." },
          { objective: "O1", q: "Which food gives iron to help prevent anaemia?", options: ["Sugar", "Soda", "Small dried fish such as omena", "Tea"], answer: 2, why: "Small dried fish, beans, eggs and dark greens give iron." },
          { objective: "O2", q: "Which meal is most balanced?", options: ["Rice and soda", "Ugali, beans and sukuma wiki", "Bread and sweet tea", "Garri and sugar"], answer: 1, why: "It has a staple, a body-building food and vegetables." },
          { objective: "O2", q: "About how much fruit and vegetables does WHO advise adults to eat each day?", options: ["One slice", "None", "Only on Sundays", "At least 400 g, about five handfuls"], answer: 3, why: "WHO advises at least 400 g a day for adults." },
          { objective: "O3", q: "WHO advises adults to keep salt to less than:", options: ["5 g a day, just under a level teaspoon", "One cup a day", "Ten teaspoons a day", "There is no limit"], answer: 0, why: "Less than 5 g of salt a day lowers the risk of high blood pressure." }
        ]
      }
    },
    {
      name: "Chapter 2: Eating well on a budget",
      lessons: [
        {
          title: "Comparing food prices for value",
          objectives: ["O4"],
          minutes: 5,
          goal: "Compare the cost of foods in the same group to find better value.",
          text: [
            "Good food does not have to cost more. The trick is to compare foods that do the same job. For body-building foods, compare beans, lentils, cowpeas, groundnuts, eggs, small dried fish and meat by what one family meal of each costs. Beans and small fish often give a lot for little money.",
            "How to compare: write the price and the amount you get, then work out the cost for one family meal. Example (made-up numbers, not real prices): a cup of dried beans costs NGN 600 and feeds the family once; meat for the same meal costs NGN 3,000. The beans are five times cheaper for that meal. Use your own market's prices; they change with the season.",
            "Ways to save: buy fruit and vegetables in season, when they are cheapest. Buy dry foods (beans, grains, dried fish) in bigger amounts with neighbours or your savings group and share. Grow leaves such as amaranth, kale, moringa or spinach in a small garden, a sack or a tin. Cut back on sodas, sweets and packet snacks, which cost a lot and give little.",
            "Do not waste: store dry foods in closed, dry containers away from damp and pests, and use leftovers safely the next day."
          ],
          steps: ["Pick one food group, for example body-building foods.", "Write the price and amount for three foods in that group.", "Work out the cost for one family meal of each.", "Choose the best value, and note which foods are in season."],
          words: [["Value", "how much good food you get for your money."], ["In season", "the time of year when a crop is harvested, so it is plentiful and cheaper."]],
          slides: [
            { title: "Compare like with like", bullets: ["Same food group, same job", "Cost for one family meal", "Beans and small fish often give a lot for little"] },
            { title: "How to compare", bullets: ["Write price and amount", "Work out cost per family meal", "Use your own market prices; they change"] },
            { title: "Ways to save", bullets: ["Buy in season", "Buy dry foods in bulk with neighbours", "Grow leaves in a sack or tin; fewer sodas and snacks"] }
          ],
          tryIt: "At your market or shop, write the price and amount for three body-building foods (for example beans, eggs and dried fish). Work out the cost for one family meal of each with your phone calculator. Circle the best value. Write the currency (KES, NGN, GHS, XOF, MAD or yours).",
          youCanNow: "compare food prices by cost per meal and pick the best value in each food group.",
          quickCheck: [
            { objective: "O4", q: "What is the fairest way to compare beans and meat?", options: ["The colour of the bag", "Which shop is nearest", "Which is heavier", "The cost for one family meal of each"], answer: 3, why: "Cost per meal compares what you really get for the money." },
            { objective: "O4", q: "Example only: beans for one meal cost XOF 500 and fish for one meal costs XOF 1,500. How many times cheaper are the beans?", options: ["2 times", "3 times", "5 times", "The same"], answer: 1, why: "1,500 divided by 500 is 3." }
          ]
        },
        {
          title: "Feeding young children and pregnant or breastfeeding women",
          objectives: ["O5"],
          minutes: 6,
          goal: "Plan one day's meals for a young child or a pregnant or breastfeeding woman following WHO advice.",
          text: [
            "Young children grow fast and have small stomachs, so they need small, frequent meals full of good food. WHO advises only breast milk for the first 6 months. From about 6 months, add soft, mashed family foods and keep breastfeeding to 2 years or longer. Start with small amounts and slowly give more, thicker food and more kinds.",
            "How often (WHO): 2 to 3 meals a day for babies of 6 to 8 months; 3 to 4 meals a day for children of 9 to 23 months, plus 1 to 2 snacks if needed. Make porridge thick enough to stay on the spoon, and add something from another group: mashed beans or groundnut paste, an egg, small fish ground into powder, mashed greens or pawpaw. Give the child their own bowl so you can see how much they eat.",
            "Pregnant and breastfeeding women need more good food, not just more staple. Add an extra small meal or snack each day, with iron-rich foods (beans, small fish, eggs, liver, dark greens) eaten with a vitamin C food. Go to all antenatal visits and take only the supplements the clinic gives you.",
            "When a child is sick, WHO advises more drinks and more breastfeeding, and soft favourite foods. After the illness, give extra food to help the child catch up. If a child is not growing well or is very thin or swollen, go to the clinic."
          ],
          steps: ["Check the child's age in months.", "Plan the number of meals for that age.", "Make each meal thick and add another food group.", "For a pregnant or breastfeeding woman: add a snack with an iron-rich food and vitamin C."],
          words: [["Complementary feeding", "giving family foods from about 6 months while breastfeeding continues."], ["Snack", "a small amount of food between meals, such as a banana, groundnuts or an egg."]],
          slides: [
            { title: "Babies and young children (WHO)", bullets: ["0-6 months: only breast milk", "From about 6 months: soft family foods plus breast milk", "Keep breastfeeding to 2 years or longer"] },
            { title: "How often", bullets: ["6-8 months: 2-3 meals a day", "9-23 months: 3-4 meals a day, plus 1-2 snacks", "Thick porridge plus another food group"] },
            { title: "Pregnant and breastfeeding women", bullets: ["An extra small meal or snack", "Iron-rich foods with vitamin C", "Only supplements the clinic gives"] },
            { title: "Sick child", bullets: ["More drinks and breastfeeding", "Soft favourite foods; extra food after", "Not growing well: go to the clinic"] }
          ],
          sources: [WHO_IYCF, WHO_ANAEMIA],
          tryIt: "Plan one day of food for a child of 10 months (for example in Douala or Kumasi) or for a breastfeeding mother. Write each meal and snack and the food groups it covers.",
          youCanNow: "plan a day's meals for a young child or a pregnant or breastfeeding woman that follows WHO advice.",
          quickCheck: [
            { objective: "O5", q: "How many meals a day does WHO advise for a baby of 7 months?", options: ["2 to 3", "1", "6 to 8", "None; only breast milk"], answer: 0, why: "WHO advises 2 to 3 meals a day at 6 to 8 months, with breastfeeding." },
            { objective: "O5", q: "Which porridge is best for a 9-month-old?", options: ["Thin, watery porridge with sugar", "Plain tea", "Thick porridge with groundnut paste or mashed egg", "Soda"], answer: 2, why: "Thick porridge with another food group gives more nutrients in a small stomach." }
          ]
        },
        {
          title: "Writing a weekly meal plan on a budget",
          objectives: ["O6"],
          minutes: 6,
          goal: "Write a weekly meal plan and shopping list that fits your budget.",
          text: [
            "A plan saves money and makes it easier to eat well. Start with your food budget for the week. Then plan the main meals, using cheap staples, beans or small fish most days, and vegetables every day. Plan eggs, meat or chicken for some days if the budget allows.",
            "Repeat meals your family likes, but change the vegetable or the bean so there is variety. Cook beans once and use them in two meals. Plan the child's meals and the snack for a pregnant or breastfeeding woman first, so they are never the ones left out.",
            "From the plan, write the shopping list with your own market prices, add them up and compare with the budget. If you are over, swap a costly food for a cheaper one in the same group, not for nothing. Example (made-up numbers): a family in Nakuru with a weekly budget of KES 2,500 swaps two meat meals for omena and beans to stay within it.",
            "Put the plan on the wall or save a photo on your phone. At the end of the week, check what you spent and what you threw away, and change next week's plan."
          ],
          steps: ["Write your weekly food budget.", "Plan the main meals for seven days with several food groups each day.", "Plan meals for children and pregnant or breastfeeding women first.", "Write the shopping list with your prices and add it up.", "If over budget, swap within the same food group."],
          words: [["Budget", "the amount of money you plan to spend."], ["Meal plan", "a list of what you will cook for each day."]],
          slides: [
            { title: "Start with the budget", bullets: ["Weekly food money", "Cheap staples, beans or small fish", "Vegetables every day"] },
            { title: "Plan smart", bullets: ["Repeat favourites, change the vegetable", "Cook beans once, use twice", "Children and mothers first"] },
            { title: "Shopping list", bullets: ["Your own market prices", "Add up and compare with the budget", "Over? Swap within the same food group"] },
            { title: "Check and adjust", bullets: ["What did you spend?", "What was wasted?", "Change next week's plan"] }
          ],
          tryIt: "Final task: write your one-week meal plan. For each day list the meals and food groups, with fruit or vegetables daily; mark the foods for any young child or pregnant or breastfeeding woman; write the shopping list with your prices and total it against the budget; and write three habits you will use.",
          youCanNow: "write a weekly meal plan and shopping list that feeds the household well within your budget.",
          quickCheck: [
            { objective: "O6", q: "Your shopping list is over budget. What is the best change?", options: ["Drop all vegetables", "Swap a costly food for a cheaper one in the same group", "Give the children less", "Buy more soda"], answer: 1, why: "Swapping within a food group keeps the meal balanced and cheaper." },
            { objective: "O6", q: "Whose meals should you plan first?", options: ["Visitors", "Only the adults", "Nobody in particular", "Young children and pregnant or breastfeeding women"], answer: 3, why: "They need the most good food, so they should never be left out." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Eating well on a budget",
        questions: [
          { objective: "O4", q: "Which is a good way to save on vegetables?", options: ["Buy only out of season", "Buy them in season or grow leaves in a sack", "Buy only packet snacks", "Buy less often and let them rot"], answer: 1, why: "In-season produce is cheaper, and leaves grow easily at home." },
          { objective: "O4", q: "Example only: 1 kg of lentils in Casablanca costs MAD 20 and makes 4 family meals. What is the cost per meal?", options: ["MAD 80", "MAD 4", "MAD 5", "MAD 24"], answer: 2, why: "20 divided by 4 meals is 5." },
          { objective: "O5", q: "Until what age does WHO advise continuing breastfeeding?", options: ["2 years or longer", "6 months", "1 month", "It should stop when food starts"], answer: 0, why: "Breastfeeding continues with family foods to 2 years or longer." },
          { objective: "O5", q: "What should a breastfeeding mother add each day?", options: ["More sweet tea", "Nothing", "Only more rice", "An extra small meal or snack with iron-rich food"], answer: 3, why: "She needs more good food, especially iron-rich foods." },
          { objective: "O6", q: "What is the first thing to write when planning the week's meals?", options: ["Your weekly food budget", "The visitors' list", "The soda order", "Nothing; just shop"], answer: 0, why: "The budget sets what the plan can include." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Good Nutrition on a Budget with Local Foods",
    questions: [
      { objective: "O1", q: "Which is an energy (go) food?", options: ["Sukuma wiki", "Yam", "Eggs", "Oranges"], answer: 1, why: "Yam is a staple that gives energy." },
      { objective: "O1", q: "Which is a body-building (grow) food?", options: ["Groundnuts", "Cassava", "Sugar", "Pawpaw"], answer: 0, why: "Groundnuts give protein." },
      { objective: "O1", q: "Orange sweet potato, pawpaw and mango are rich in:", options: ["Salt", "Nothing useful", "Vitamins", "Oil"], answer: 2, why: "Orange foods are rich in vitamins." },
      { objective: "O1", q: "Anaemia is often caused by too little:", options: ["Sugar", "Salt", "Oil", "Iron"], answer: 3, why: "Iron deficiency is the most common nutritional cause of anaemia." },
      { objective: "O2", q: "On the balanced plate, about a quarter is:", options: ["Sweets", "A body-building food", "Salt", "Soda"], answer: 1, why: "About a quarter staple, a quarter body-building food, half vegetables and fruit." },
      { objective: "O2", q: "When should you drink tea if you want to get iron from your meal?", options: ["Between meals", "With every meal", "Instead of eating", "It does not matter"], answer: 0, why: "Tea with meals makes iron harder to take in." },
      { objective: "O2", q: "Which small change makes rice more balanced?", options: ["Add more salt", "Add sugar", "Add beans and greens", "Add a soda"], answer: 2, why: "Beans and greens add body-building and protective foods." },
      { objective: "O3", q: "Which hides a lot of salt?", options: ["Fresh tomatoes", "Stock cubes and seasoning powder", "Plain beans", "Fresh fruit"], answer: 1, why: "Cubes and seasoning powders are very salty." },
      { objective: "O3", q: "Which drink adds the most free sugar?", options: ["Clean water", "Unsweetened tea", "Plain milk", "A bottle of soda"], answer: 3, why: "Sodas are full of added sugar." },
      { objective: "O3", q: "A food seller in Abidjan leaves cooked attiéké and fish out all afternoon in the heat. Which key is broken?", options: ["Keep food at safe temperatures", "Cook thoroughly", "Use iodized salt", "Eat more vegetables"], answer: 0, why: "Germs grow fast in cooked food left warm for hours." },
      { objective: "O3", q: "A cheaper, healthier way to cook than deep frying is:", options: ["More oil", "Stewing, boiling or steaming", "Frying twice", "Adding sugar"], answer: 1, why: "Stewing, boiling and steaming use little oil." },
      { objective: "O4", q: "To compare value, you work out:", options: ["Which bag looks biggest", "The seller's name", "The cost for one family meal", "Which shop is busiest"], answer: 2, why: "Cost per meal shows what you really get." },
      { objective: "O4", q: "Fruit and vegetables are usually cheapest:", options: ["Out of season", "When they are in season", "In packets", "At night only"], answer: 1, why: "In season, they are plentiful and cheaper." },
      { objective: "O4", q: "Example only: eggs for one meal cost GHS 30 and beans cost GHS 10. Which is better value for that meal?", options: ["Eggs", "They are the same", "Neither", "Beans"], answer: 3, why: "Both are body-building foods, and the beans cost a third as much." },
      { objective: "O5", q: "For the first 6 months, a baby needs:", options: ["Only breast milk", "Water and porridge", "Tea", "Cow's milk and sugar"], answer: 0, why: "WHO advises only breast milk for the first 6 months." },
      { objective: "O5", q: "A child of 12 months should eat about how many meals a day?", options: ["One", "3 to 4, plus 1 to 2 snacks if needed", "Only breast milk", "Ten"], answer: 1, why: "WHO advises 3 to 4 meals for 9 to 23 months, plus snacks as needed." },
      { objective: "O5", q: "When a young child is sick, WHO advises:", options: ["Stop all food", "Stop breastfeeding", "More drinks, more breastfeeding and soft favourite foods", "Only water"], answer: 2, why: "Extra fluids and food help the child recover." },
      { objective: "O6", q: "A good weekly meal plan has:", options: ["The same staple only, every day", "Vegetables only on Sundays", "No budget", "Several food groups every day"], answer: 3, why: "Variety every day is the goal." },
      { objective: "O6", q: "A cheap way to make beans go further in the plan is to:", options: ["Cook once and use in two meals", "Throw away leftovers", "Cook them every hour", "Buy them in tiny packets"], answer: 0, why: "Cooking once saves fuel and time, and leftovers kept safely make a second meal." },
      { objective: "O6", q: "At the end of the week, you should:", options: ["Throw the plan away", "Check what you spent and wasted, and change next week's plan", "Double the budget", "Stop planning"], answer: 1, why: "Checking helps you improve the next plan." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Pre-Test: What Do You Already Know?", from: [0, 3, 5, 7, 9, 11, 14, 15, 17] },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      { name: "Food groups every day", objective: "O1", notYet: "Most days have only a staple, or the groups are named wrongly.", meets: "Every day has energy, body-building and protective foods, correctly named.", exceeds: "Also includes dark green leaves or orange foods and an iron-rich food most days." },
      { name: "Balanced meals", objective: "O2", notYet: "Vegetables or fruit are missing on some days.", meets: "Vegetables or fruit every day, and main meals follow the balanced plate.", exceeds: "Iron-rich foods are paired with a vitamin C food, and tea is kept between meals." },
      { name: "Salt, sugar and safety", objective: "O3", notYet: "No habits listed, or they do not cut salt or sugar.", meets: "Lists one salt habit, one sugar habit and one of the five keys to safer food.", exceeds: "Shows the changes in named recipes from the plan." },
      { name: "Budget and shopping list", objective: "O4", notYet: "No prices, or the total is wrong or over budget with no swap.", meets: "Shopping list with own market prices and a correct total within the budget.", exceeds: "Shows at least one value swap within a food group and notes foods in season." },
      { name: "Feeding those who need most", objective: "O5", notYet: "No plan for a young child or pregnant or breastfeeding woman in the household.", meets: "Meals and snacks follow WHO advice for the child's age or for the woman.", exceeds: "Thick porridge with another food group, and the right number of meals, are written for each day." },
      { name: "Weekly plan", objective: "O6", notYet: "Some days are missing.", meets: "Seven days of meals, ready to put on the wall or phone.", exceeds: "Uses leftovers safely and repeats favourites with variety." }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Learners who report eating vegetables or fruit every day and beans or small fish most days 30 days later (follow-up survey)",
      "Households that report using a weekly meal plan and staying within their food budget",
      "Learners who report cutting stock cubes, salt or sugary drinks",
      "Partner clinics or community health workers report better feeding of children aged 6 to 23 months among learners' families"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A basic phone with a calculator, or paper and pen",
      "Prices from a local market or shop for the price lessons",
      "A plate, bowl or drawing to show the balanced plate",
      "About 60 minutes in total, in short sessions"
    ],
    facilitatorNotes: [
      "Good partners: women's groups, savings groups, schools, clinics and community health workers; a cooking demonstration with local foods works well.",
      "Use the foods and prices of your own area; the course's prices are examples only.",
      "Do not give diets for illness or advice on supplements; send those questions to the clinic or a nutritionist.",
      "Be sensitive: some learners may not have enough food. Focus on low-cost changes and point to local food support where it exists.",
      "Score the final task with the rubric and give feedback on one Not yet row at a time."
    ]
  }
};
