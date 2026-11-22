"use strict";

// Koach Learn course: Workforce Development -> "Food Handler and ServSafe Exam Preparation" (owner's request, 28 October 2026: life, people and career skills beyond AI).
// Temperatures are the FDA Food Code's retail food service figures (checked 28 Oct 2026 in FDA's Food Code inspection workbook and FDA's egg safety page);
// home cooking advice on fda.gov/foodsafety.gov uses slightly different numbers (40°F / 140°F, 160°F for ground meat), so lessons say which is which.
// California card rule checked on sonomacounty.gov and CDPH (HSC 113948). All questions are original; none are copied from ServSafe or any exam.

module.exports = {
  id: "workforce-food-handler",
  category: "Workforce Development",
  name: "Food Handler and ServSafe Exam Preparation",
  skills: "Washing hands the right way, Preventing cross-contamination, Keeping food out of the temperature danger zone, Cooking to safe temperatures, Handling allergens, Cleaning and sanitizing",
  outcome: "handle food safely on a restaurant or food service shift: wash your hands correctly, prevent cross-contamination, keep food out of the temperature danger zone, cook and hold food at safe temperatures, protect guests with allergies, and clean and sanitize a work surface, and be ready to sit a food handler exam.",
  about: [
    "This course is for anyone who works with food or wants to: restaurant and fast-food crews, cafeteria and school kitchen staff, caterers, food truck workers, bakery and deli staff, and people preparing for a food handler card or a ServSafe exam.",
    "You will learn the core food safety skills that every food handler exam covers: handwashing and personal hygiene, cross-contamination, time and temperature control, cooking temperatures, allergens, and cleaning versus sanitizing. The practice questions are our own, written to help you think like the exam; they are not copied from any real exam.",
    "Each lesson takes about five minutes. Read the lesson, look over the slides, then do the \"Try it now\" task. There is a knowledge check after each chapter and a 20-question quiz at the end. Food handler card rules are set by states and counties, and food codes are updated over time, so check your local health department for the rules where you work."
  ],
  finalTask: "Write a one-page \"Safe Shift Checklist\" for a real or practice kitchen: when and how to wash hands, how to store raw and ready-to-eat food to prevent cross-contamination, the cold-holding, hot-holding and cooking temperatures you will check with a thermometer, the cooling steps, what you will do when a guest says they have an allergy, the steps to clean and sanitize a prep table, and the illness symptoms you must report. Then find out the food handler card rule for your state or county and write it at the top.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "New and current food workers and job seekers: restaurant and fast-food crews, cafeteria and school kitchen staff, caterers, food truck, bakery and deli workers, and people preparing for a food handler card or a ServSafe exam.",
    startingPoint: "Can cook or prepare food at home and may have worked a kitchen shift, but have not learned the food service rules for handwashing, storage order, holding and cooking temperatures, allergens and sanitizing.",
    gap: "Many employers and health departments require a food handler card soon after hire, and one mistake with temperatures, cross-contamination or an allergy can make guests sick. Learners need these habits and numbers to get hired, pass the exam and keep guests safe.",
    constraints: [
      "Reading level: plain words and short sentences (about grade 6)",
      "Devices: a phone or shared computer; a food thermometer helps but is optional",
      "Time: about five-minute lessons that fit around shifts",
      "Rules differ by state and county, and food service numbers differ from home cooking advice; learners check their local health department",
      "General education only: it does not replace an accredited food handler course or manager certification"
    ],
    prerequisites: "None."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "During a kitchen shift", action: "wash your hands the right way at the right times and keep bare hands off ready-to-eat food", standard: "scrubbing for at least 20 seconds and naming at least six times to wash" },
    { id: "O2", condition: "Given raw and ready-to-eat foods to store or prepare", action: "store and prepare them so germs do not spread", standard: "putting every item on the right cooler shelf and using separate or sanitized tools" },
    { id: "O3", condition: "When a guest has a food allergy or a surface needs cleaning", action: "follow the allergy steps and clean and sanitize a surface in the right order", standard: "with every step in order and no guessing about ingredients" },
    { id: "O4", condition: "Given cold and hot TCS food and a thermometer", action: "check holding temperatures and thaw food safely", standard: "cold at 41°F or below and hot at 135°F or above, every time" },
    { id: "O5", condition: "When cooking, reheating or cooling food", action: "choose the safe temperature and time for each food and plan fast cooling", standard: "matching the FDA Food Code numbers taught in the course" },
    { id: "O6", condition: "Before and during a job in food service", action: "identify the illness symptoms you must report and find the food handler card rule where you work", standard: "naming the symptoms and the deadline, card length and accepted courses from your health department" }
  ],
  chapters: [
    {
      name: "Chapter 1: Clean hands and clean food",
      lessons: [
        {
          objectives: ["O1","O6"],
          title: "Handwashing and personal hygiene",
          minutes: 5,
          goal: "Wash your hands the right way at the right times and follow basic hygiene rules.",
          text: [
            "Hands spread more foodborne illness than almost anything else. Wash them in a handwashing sink (never a food prep or dish sink) with warm running water and soap. Scrub hands, between fingers, under nails and up the wrists for at least 20 seconds, rinse, and dry with a single-use paper towel or a hand dryer. Use the towel to turn off the tap if the sink has handles.",
            "Wash when you start work, after using the restroom, after touching raw meat, poultry or seafood, after touching your face, hair, phone or trash, after eating, drinking, smoking or coughing, after cleaning, and before putting on gloves. Gloves do not replace handwashing, and you change them when they tear, when you switch tasks, and after handling raw food.",
            "Do not touch ready-to-eat food (food that will not be cooked again, like salad, bread or a cooked burger) with bare hands. Use gloves, tongs, deli paper or utensils.",
            "Personal hygiene: wear clean clothes and a hair restraint, keep nails short and clean, and cover cuts with a bandage and a glove. Tell your manager if you have vomiting, diarrhea, yellow skin or eyes (jaundice), or a sore throat with fever, or if you are diagnosed with certain illnesses such as norovirus, hepatitis A or salmonella. You may need to stay home or away from food."
          ],
          steps: ["Use the handwashing sink only.", "Wet hands with warm running water and add soap.", "Scrub hands, fingers, nails and wrists for at least 20 seconds.", "Rinse, and dry with a paper towel or hand dryer.", "Turn off the tap with the towel.", "Put on new gloves if handling ready-to-eat food."],
          words: [["Foodborne illness", "sickness caused by eating food that has germs or toxins in it."], ["Ready-to-eat food", "food that will be eaten without more cooking, such as salad, bread or a cooked burger."], ["Jaundice", "yellowing of the skin or eyes, a sign of illnesses such as hepatitis A."]],
          slides: [
            { title: "Wash the right way", bullets: ["Handwashing sink only", "Warm water and soap", "Scrub at least 20 seconds; dry with a paper towel"] },
            { title: "When to wash", bullets: ["Start of shift and after the restroom", "After raw meat, trash, your face or phone", "Before putting on gloves"] },
            { title: "No bare hands on ready-to-eat food", bullets: ["Use gloves, tongs, deli paper or utensils", "Change gloves when torn or switching tasks"] },
            { title: "Hygiene and illness", bullets: ["Clean clothes, hair restraint, short nails", "Cover cuts with a bandage and a glove", "Report vomiting, diarrhea, jaundice, sore throat with fever"] }
          ],
          sources: [
            { name: "FDA: Safe food handling (handwashing for at least 20 seconds)", url: "https://www.fda.gov/food/buy-store-serve-safe-food/safe-food-handling" },
            { name: "FDA: Food Code 2022", url: "https://www.fda.gov/food/fda-food-code/food-code-2022" }
          ],
          tryIt: "Wash your hands the full way while timing yourself: at least 20 seconds of scrubbing. Then write down six times during a kitchen shift when you must wash your hands.",
          youCanNow: "wash your hands correctly, know when to wash, avoid bare-hand contact with ready-to-eat food, and know which symptoms to report.",
          quickCheck: [
            { objective: "O1", q: "What is ready-to-eat food?", options: ["Food that will not be cooked again, like salad or bread", "Raw chicken waiting to be cooked", "Frozen food in the freezer", "Any food in a sealed package"], answer: 0, why: "Ready-to-eat food will not be cooked again, so it must not touch bare hands." },
            { objective: "O1", q: "You just took out the trash and now need to make a sandwich. What do you do first?", options: ["Put on gloves right away", "Wash your hands, then put on new gloves", "Wipe your hands on your apron", "Use hand sanitizer only"], answer: 1, why: "Gloves do not replace handwashing; you wash after touching trash and before putting on gloves." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Preventing cross-contamination",
          minutes: 5,
          goal: "Store and prepare food so germs and allergens do not spread from one food or surface to another.",
          text: [
            "Cross-contamination is when germs move from one thing to another: from raw chicken to a salad, from a dirty cutting board to bread, or from your hands to a sandwich.",
            "Keep raw and ready-to-eat food apart. Use separate cutting boards, knives and utensils for raw meat and for produce or cooked food; many kitchens use color-coded boards. If you must use the same surface, clean and sanitize it between tasks.",
            "Store food the right way in the cooler. Keep ready-to-eat food on the top shelves. Store raw animal foods below, in order of their cooking temperature: whole cuts and fish above ground meat, and poultry on the bottom, so juices cannot drip onto foods that need less cooking. Cover and label food with the name and date.",
            "Other habits: never put cooked food back on a plate or tray that held raw meat; keep chemicals away from and below food; and use a clean scoop, not a glass or your hand, for ice."
          ],
          steps: ["Use separate boards and knives for raw meat and ready-to-eat food.", "Clean and sanitize surfaces between tasks.", "Store ready-to-eat food on top in the cooler.", "Store raw meat below: whole cuts and fish, then ground meat, then poultry at the bottom.", "Cover and label stored food with name and date.", "Keep chemicals away from and below food."],
          words: [["Cross-contamination", "when germs or allergens move from one food, surface or hand to another food."], ["Color-coded boards", "cutting boards in different colors for different foods, to keep them apart."]],
          slides: [
            { title: "What cross-contamination is", bullets: ["Germs move from one thing to another", "Raw chicken to salad; dirty board to bread"] },
            { title: "Keep raw and ready-to-eat apart", bullets: ["Separate boards, knives and utensils", "Clean and sanitize between tasks"] },
            { title: "Cooler storage, top to bottom", bullets: ["Ready-to-eat food on top", "Whole cuts and fish, then ground meat", "Poultry on the bottom shelf"] },
            { title: "Other habits", bullets: ["Never reuse a raw-meat plate for cooked food", "Chemicals away from and below food", "Use a scoop for ice"] }
          ],
          sources: [
            { name: "FDA: Safe food handling (separate raw and ready-to-eat food)", url: "https://www.fda.gov/food/buy-store-serve-safe-food/safe-food-handling" }
          ],
          tryIt: "Draw a cooler with four shelves. Place these items on the right shelves: a tray of raw chicken thighs, a container of cut lettuce, raw ground beef, and raw salmon fillets. Write one sentence saying why the order matters.",
          youCanNow: "store and prepare food so germs do not spread between raw and ready-to-eat items.",
          quickCheck: [
            { objective: "O2", q: "What is cross-contamination?", options: ["Cooking food too long", "Storing food in a freezer", "Germs moving from one food or surface to another", "Mixing two sauces together"], answer: 2, why: "Cross-contamination is when germs move from one thing, like raw chicken, to another." },
            { objective: "O2", q: "You need ice for drinks. What do you use to scoop it?", options: ["A drinking glass", "Your clean hand", "A cup from the dish rack", "A clean ice scoop"], answer: 3, why: "A clean scoop keeps hands and broken glass out of the ice." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Allergens and cleaning versus sanitizing",
          minutes: 5,
          goal: "Serve a guest with a food allergy safely and clean and sanitize a surface correctly.",
          text: [
            "A food allergy can kill. The FDA names nine major food allergens: milk, eggs, fish, crustacean shellfish (such as shrimp and crab), tree nuts, peanuts, wheat, soybeans and sesame. Sesame was added on January 1, 2023.",
            "When a guest says they have an allergy, take it seriously. Tell the manager or the chef. Check the recipe and the labels of every ingredient. Wash your hands, change gloves, and use clean and sanitized equipment and surfaces to make the food. Keep it apart from other food and deliver it separately. If you are not sure the dish is safe, say so; never guess. If a guest has signs of a reaction, such as trouble breathing or swelling, call 911.",
            "Cleaning and sanitizing are different. Cleaning removes food, dirt and grease that you can see. Sanitizing reduces germs to safe levels. You must clean first; sanitizer does not work well on a dirty surface.",
            "To clean and sanitize a prep table: scrape off food, wash with soap and water, rinse, apply sanitizer at the right strength (check with the test strips your kitchen uses and the label directions), leave it on for the contact time on the label, and let it air dry. Do not wipe it dry with a towel. Dishes in a three-compartment sink follow the same order: wash, rinse, sanitize, air dry."
          ],
          steps: ["Allergy: tell the manager or chef and check every ingredient.", "Wash hands, change gloves, use clean and sanitized tools.", "Keep the allergy order apart and deliver it separately.", "Surface: scrape, wash, rinse.", "Sanitize at the right strength (test strips) for the label's contact time.", "Air dry; do not towel dry."],
          words: [["Allergen", "a food that can cause a dangerous immune reaction in some people."], ["Sanitizing", "reducing germs on a clean surface to safe levels with heat or a chemical."], ["Contact time", "how long a sanitizer must stay wet on a surface to work."], ["Test strips", "paper strips that show whether a sanitizer solution is the right strength."]],
          slides: [
            { title: "The nine major allergens (FDA)", bullets: ["Milk, eggs, fish, crustacean shellfish", "Tree nuts, peanuts, wheat, soybeans", "Sesame (added January 1, 2023)"] },
            { title: "A guest has an allergy", bullets: ["Tell the manager or chef; check every label", "Clean hands, new gloves, sanitized tools", "Never guess; call 911 for a reaction"] },
            { title: "Cleaning vs sanitizing", bullets: ["Cleaning removes dirt you can see", "Sanitizing reduces germs to safe levels", "Always clean first"] },
            { title: "Clean and sanitize a table", bullets: ["Scrape, wash, rinse", "Sanitize at the right strength for the contact time", "Air dry; no towel"] }
          ],
          sources: [
            { name: "FDA: Food allergies (the nine major food allergens)", url: "https://www.fda.gov/food/nutrition-food-labeling-and-critical-foods/food-allergies" }
          ],
          tryIt: "Pick a menu item you know, such as a cheeseburger or a stir-fry. List which of the nine major allergens it might contain. Then write the six steps you would follow to clean and sanitize the prep table after making it.",
          youCanNow: "handle an allergy order safely and clean and sanitize a surface in the right order.",
          quickCheck: [
            { objective: "O3", q: "Why must you clean a surface before you sanitize it?", options: ["Sanitizer does not work well on a dirty surface", "Cleaning makes the sanitizer smell better", "Sanitizing removes grease by itself", "Cleaning is only needed once a week"], answer: 0, why: "Sanitizer needs a clean surface to reduce germs to safe levels." },
            { objective: "O3", q: "A guest asks if a dish has sesame and you are not sure. What do you say?", options: ["\"It should be fine.\"", "\"I am not sure; let me check with the chef and the labels.\"", "\"Just pick the sesame out.\"", "\"Nobody is allergic to sesame.\""], answer: 1, why: "Never guess about allergens; check the recipe and labels with the chef or manager." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Clean hands and clean food",
        questions: [
          { objective: "O1", q: "How long should you scrub your hands when washing?", options: ["3 seconds", "At least 20 seconds", "Only until they look clean", "2 minutes in the dish sink"], answer: 1, why: "Scrubbing for at least 20 seconds removes germs; use the handwashing sink." },
          { objective: "O1", q: "A line cook needs to put lettuce on a cooked burger. What should they use?", options: ["Bare hands, washed first", "The same gloves used for raw patties", "Clean gloves, tongs or a utensil", "Their apron"], answer: 2, why: "Ready-to-eat food must not be touched with bare hands." },
          { objective: "O2", q: "Which shelf is right for raw chicken in the cooler?", options: ["The bottom shelf", "The top shelf", "Above the salad", "Next to the bread"], answer: 0, why: "Poultry needs the highest cooking temperature, so it goes at the bottom where its juices cannot drip on other food." },
          { objective: "O3", q: "A guest says they are allergic to sesame. What do you do first?", options: ["Tell them sesame is not an allergen", "Pick the sesame seeds off the bun", "Guess that the dish is fine", "Tell the manager or chef and check every ingredient"], answer: 3, why: "Allergies must be taken seriously and checked, never guessed." },
          { objective: "O3", q: "What is the right order to treat a prep table?", options: ["Sanitize, then wash", "Scrape, wash, rinse, sanitize, air dry", "Wipe with a dry towel only", "Rinse, then towel dry"], answer: 1, why: "Sanitizer works only on a surface that has been cleaned and rinsed first." }
        ]
      }
    },
    {
      name: "Chapter 2: Time and temperature",
      lessons: [
        {
          objectives: ["O4"],
          title: "The temperature danger zone",
          minutes: 5,
          goal: "Keep cold food cold and hot food hot, and check temperatures with a thermometer.",
          text: [
            "Germs grow fastest between 41°F and 135°F. This range is called the temperature danger zone. In food service, the FDA Food Code says to hold cold food at 41°F or below and hot food at 135°F or above. (Home cooking advice from the FDA and USDA uses 40°F and 140°F; at work, follow the code your health department uses.)",
            "Foods that need this control are called TCS foods (time/temperature control for safety): meat, poultry, fish, eggs, dairy, cooked rice, beans and potatoes, cut melons, cut tomatoes, cut leafy greens, tofu and sprouts, among others.",
            "Use a clean, sanitized food thermometer. Put the tip in the thickest part of the food, not touching bone or the pan. Check holding temperatures on a schedule, such as every 2 hours, and write them on the log. Calibrate the thermometer as your kitchen trains you.",
            "Thaw food safely: in the cooler, under cold running water, in the microwave if it will be cooked right away, or as part of cooking. Never thaw food on the counter."
          ],
          steps: ["Clean and sanitize the thermometer.", "Put the tip in the thickest part of the food.", "Cold food: 41°F or below. Hot food: 135°F or above.", "Write the reading and time on the log.", "If food is in the danger zone, tell your manager."],
          words: [["Temperature danger zone", "41°F to 135°F in food service: the range where germs grow fastest."], ["TCS food", "food that needs time and temperature control to stay safe, such as meat, dairy, cooked rice and cut melon."], ["Calibrate", "check and adjust a thermometer so it reads correctly."]],
          slides: [
            { title: "The danger zone", bullets: ["41°F to 135°F (FDA Food Code)", "Cold food: 41°F or below", "Hot food: 135°F or above"] },
            { title: "TCS foods", bullets: ["Meat, poultry, fish, eggs, dairy", "Cooked rice, beans, potatoes", "Cut melons, cut tomatoes, cut leafy greens"] },
            { title: "Use a thermometer", bullets: ["Clean and sanitized", "Thickest part, not touching bone or pan", "Check and log on a schedule"] },
            { title: "Thaw safely", bullets: ["In the cooler or under cold running water", "In the microwave if cooked right away", "Never on the counter"] }
          ],
          sources: [
            { name: "FDA: Key temperatures for egg safety in food service (41°F cold holding, 135°F hot holding)", url: "https://www.fda.gov/food/retail-food-industryregulatory-assistance-training/key-temperatures-egg-safety-food-service-operations-and-retail-food-stores" },
            { name: "FDA: Food Code 2022", url: "https://www.fda.gov/food/fda-food-code/food-code-2022" }
          ],
          tryIt: "Use a food thermometer at home or work to check the temperature inside your refrigerator (put it in a glass of water in the fridge for a few minutes) and of one hot food. Write down whether each is safe for food service holding.",
          youCanNow: "name the temperature danger zone, keep TCS food out of it, and check temperatures correctly.",
          quickCheck: [
            { objective: "O4", q: "What does TCS food mean?", options: ["Food that is always served cold", "Food that comes in a can", "Food that needs time and temperature control for safety", "Food that is only sold in stores"], answer: 2, why: "TCS food needs time and temperature control because germs can grow in it." },
            { objective: "O4", q: "A hot-holding pan of beans reads 120°F at the 2-hour check. What do you do?", options: ["Write it down and keep serving", "Add more beans on top", "Turn off the warmer", "Tell your manager, because it is in the danger zone"], answer: 3, why: "Hot food must stay at 135°F or above, so a reading of 120°F is in the danger zone." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Cooking, reheating and cooling temperatures",
          minutes: 6,
          goal: "Cook, reheat and cool food to the FDA Food Code's safe temperatures.",
          text: [
            "Cooking to the right internal temperature kills germs. The FDA Food Code's main cooking temperatures for food service are: poultry (chicken, turkey) and stuffed foods: 165°F for less than 1 second (instant). Ground meat such as hamburger, and eggs that will be held for later: 155°F for 17 seconds. Whole cuts of beef and pork, fish, and eggs cooked for immediate service: 145°F for 15 seconds.",
            "Reheating: cooked food that you cooled and will hot-hold must be reheated to 165°F for 15 seconds within 2 hours. Food cooked in a microwave should reach 165°F, be stirred and covered, and stand for 2 minutes.",
            "Cooling: cooked food must cool from 135°F to 70°F within 2 hours, and from 135°F to 41°F within 6 hours in total. Cool faster by dividing food into shallow pans, using an ice bath or ice wand, and stirring. Never leave a big stockpot to cool on the counter.",
            "Your local health department may use a newer or older version of the Food Code, and home cooking advice differs (for example 160°F for ground beef at home). For an exam or a job, learn the numbers your course and your health department use."
          ],
          steps: ["Check the thickest part with a thermometer.", "Poultry and stuffed foods: 165°F.", "Ground meat and eggs held for later: 155°F for 17 seconds.", "Whole cuts, fish, eggs for immediate service: 145°F for 15 seconds.", "Reheat for hot holding: 165°F for 15 seconds within 2 hours.", "Cool: 135°F to 70°F in 2 hours, to 41°F within 6 hours total."],
          words: [["Internal temperature", "the temperature in the thickest part of the food, measured with a thermometer."], ["Ice wand", "a sealed plastic paddle filled with ice or water and frozen, used to stir and cool food fast."], ["Two-stage cooling", "cooling cooked food to 70°F within 2 hours, then to 41°F within 6 hours in total."]],
          slides: [
            { title: "Cooking temperatures (Food Code)", bullets: ["Poultry and stuffed foods: 165°F, instant", "Ground meat: 155°F for 17 seconds", "Whole cuts, fish: 145°F for 15 seconds"] },
            { title: "Reheating for hot holding", bullets: ["165°F for 15 seconds", "Within 2 hours"] },
            { title: "Two-stage cooling", bullets: ["135°F to 70°F within 2 hours", "Down to 41°F within 6 hours in total", "Shallow pans, ice bath, ice wand, stirring"] },
            { title: "Know your numbers", bullets: ["Health departments may use different Food Code versions", "Home advice differs: 160°F for ground beef", "Learn what your course and county use"] }
          ],
          sources: [
            { name: "FDA: Procedures for standardization of retail food safety inspection officers (Food Code cooking, reheating and cooling temperatures)", url: "https://www.fda.gov/media/155354/download" },
            { name: "FDA: Key temperatures for egg safety in food service", url: "https://www.fda.gov/food/retail-food-industryregulatory-assistance-training/key-temperatures-egg-safety-food-service-operations-and-retail-food-stores" }
          ],
          tryIt: "Make a pocket card with the cooking, reheating, holding and cooling temperatures from this lesson. Then plan how you would cool a full pot of chili quickly, step by step.",
          youCanNow: "cook, reheat, hold and cool food to safe Food Code temperatures and check them with a thermometer.",
          quickCheck: [
            { objective: "O5", q: "What is the food service cooking temperature for a whole cut of beef or pork?", options: ["145°F for 15 seconds", "120°F for 1 minute", "155°F for 17 seconds", "165°F for 15 seconds"], answer: 0, why: "Whole cuts of beef and pork reach 145°F for 15 seconds under the FDA Food Code." },
            { objective: "O5", q: "A full stockpot of rice must be cooled. What is the best first step?", options: ["Leave the pot on the counter overnight", "Put the hot pot straight into the cooler with a lid", "Divide the rice into shallow pans", "Cover it with a towel"], answer: 2, why: "Shallow pans let food cool through the danger zone fast enough." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Getting your food handler card and passing the exam",
          minutes: 5,
          goal: "Find your local food handler card rule and prepare for the exam.",
          text: [
            "Food handler card rules differ by state and county. Some states require a card for most food workers; some leave it to counties or cities; some have no general rule. Your local health department or environmental health office will tell you what applies where you work.",
            "Example: California. Under California Health and Safety Code section 113948, food handlers must get a California food handler card within 30 days after being hired by a food facility. The card is valid for three years, and the course must come from a training provider accredited by the American National Standards Institute (ANSI). Some places are exempt, such as certain grocery stores and school cafeterias, so check with your county.",
            "A food handler card is different from a food manager certification (such as the ServSafe Manager exam). Food handler courses are short and cover the basics in this course. Manager certification is longer, goes deeper, and is usually required for the person in charge.",
            "To prepare: take an accredited course, go over each topic in this course, use the pocket card you made, and practice with questions you write yourself or that come with your course. Read every question carefully: words like \"first\", \"best\" and \"never\" matter."
          ],
          steps: ["Search your state or county name plus \"food handler card\" and find the health department page (often ending in .gov).", "Write down the deadline after hire, how long the card lasts, and which courses are accepted.", "Choose an accredited course from the list your health department points to.", "Review handwashing, cross-contamination, temperatures, allergens and cleaning.", "Take the course and the test, and keep a copy of your card."],
          words: [["Food handler card", "proof that you finished a basic food safety course; required for food workers in some states and counties."], ["ANSI", "the American National Standards Institute, which accredits food safety training providers."], ["Food manager certification", "a more advanced food safety credential, usually for the person in charge of a kitchen."]],
          slides: [
            { title: "Rules differ by place", bullets: ["Some states require a card; some leave it to counties", "Your local health department knows"] },
            { title: "Example: California", bullets: ["Card within 30 days of hire", "Valid for three years", "Course from an ANSI-accredited provider"] },
            { title: "Handler card vs manager certification", bullets: ["Handler: short, the basics", "Manager: longer, for the person in charge"] },
            { title: "Get exam-ready", bullets: ["Take an accredited course", "Use your temperature pocket card", "Read for words like first, best, never"] }
          ],
          sources: [
            { name: "Sonoma County, California: Food handler card (30 days, three years, ANSI)", url: "https://sonomacounty.gov/Health/Environmental-Health/Food-Program/Food-Handler-Card/" },
            { name: "California Department of Public Health: Retail food safety training (HSC 113948)", url: "https://www.cdph.ca.gov/Programs/CEH/DFDCS/CDPH%20Document%20Library/FDB/FoodSafetyProgram/RetailFood/RetailFoodSafetyTraining.pdf" }
          ],
          tryIt: "Final task: write your Safe Shift Checklist (handwashing, storage, temperatures, cooling, allergy steps, clean and sanitize steps, illness symptoms to report). Then look up the food handler card rule for your state or county and write the deadline, how long the card lasts and which courses count at the top.",
          youCanNow: "find the food handler card rule where you work, choose an accepted course, and prepare for the exam.",
          quickCheck: [
            { objective: "O6", q: "What is the difference between a food handler card and a food manager certification?", options: ["They are the same thing", "A handler card covers basics; manager certification goes deeper for the person in charge", "A handler card is only for managers", "Manager certification is shorter"], answer: 1, why: "Food handler courses cover the basics; manager certification is longer and usually needed for the person in charge." },
            { objective: "O6", q: "You start a new kitchen job next week. How do you find your food handler card rule?", options: ["Ask a friend in another state", "Assume there is no rule", "Buy the first course you see online", "Check your state or county health department's page"], answer: 3, why: "Rules differ by state and county, so the local health department is the source." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Time and temperature",
        questions: [
          { objective: "O4", q: "In food service, what is the temperature danger zone under the FDA Food Code?", options: ["0°F to 32°F", "41°F to 135°F", "165°F to 212°F", "70°F to 80°F only"], answer: 1, why: "Germs grow fastest between 41°F and 135°F." },
          { objective: "O5", q: "What is the minimum cooking temperature for chicken in food service?", options: ["145°F", "135°F", "155°F", "165°F"], answer: 3, why: "Poultry must reach 165°F." },
          { objective: "O5", q: "A big pot of soup must be cooled. What is the safest method?", options: ["Divide it into shallow pans and use an ice bath", "Leave it on the counter overnight", "Put the whole hot pot deep in the cooler with a lid", "Add hot water"], answer: 0, why: "Shallow pans and ice cool food quickly through the danger zone." },
          { objective: "O5", q: "Cooked food must cool from 135°F to 70°F within:", options: ["6 hours", "12 hours", "2 hours", "24 hours"], answer: 2, why: "The first stage of cooling is 135°F to 70°F within 2 hours." },
          { objective: "O6", q: "In California, a new food handler must get a food handler card within:", options: ["30 days of hire", "One year", "Before age 21", "It is never required"], answer: 0, why: "California's rule is 30 days after hire; the card lasts three years." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Food Handler and ServSafe Exam Preparation",
    questions: [
      { objective: "O1", q: "Where should food handlers wash their hands?", options: ["The prep sink", "The dish sink", "The handwashing sink", "Any sink that is empty"], answer: 2, why: "Use the handwashing sink only, so food and dishes are not contaminated." },
      { objective: "O1", q: "When must you wash your hands before putting on gloves?", options: ["Never; gloves are enough", "Every time", "Only once a day", "Only after lunch"], answer: 1, why: "Gloves do not replace handwashing." },
      { objective: "O6", q: "A cook has diarrhea and vomited this morning. What should they do?", options: ["Tell the manager before working with food", "Work but wear two gloves", "Drink water and keep cooking", "Say nothing"], answer: 0, why: "These symptoms must be reported; the worker may need to stay away from food." },
      { objective: "O2", q: "Which is ready-to-eat food?", options: ["Raw ground beef", "Raw chicken", "Raw shrimp", "A sliced tomato for a sandwich"], answer: 3, why: "It will be eaten without more cooking, so no bare-hand contact." },
      { objective: "O1", q: "You have a small cut on your finger. You should:", options: ["Ignore it", "Cover it with a bandage and wear a glove", "Only wear a bandage", "Go home for a week"], answer: 1, why: "A bandage plus a glove keeps the wound away from food." },
      { objective: "O2", q: "Which is cross-contamination?", options: ["Cooking chicken to 165°F", "Washing hands for 20 seconds", "Cutting raw chicken, then salad, on the same unsanitized board", "Labeling food with a date"], answer: 2, why: "Germs move from the raw chicken to the salad." },
      { objective: "O2", q: "In the cooler, which goes on the TOP shelf?", options: ["Ready-to-eat food like cut fruit", "Raw poultry", "Raw ground beef", "Chemicals"], answer: 0, why: "Ready-to-eat food goes above raw foods so nothing drips on it." },
      { objective: "O2", q: "Where should cleaning chemicals be stored?", options: ["On the shelf above food", "Next to the salad bar", "In empty food containers", "Away from and below food"], answer: 3, why: "Storing chemicals away and below prevents them dripping or spilling onto food." },
      { objective: "O3", q: "How many major food allergens does the FDA list?", options: ["Five", "Nine", "Twelve", "Three"], answer: 1, why: "Milk, eggs, fish, crustacean shellfish, tree nuts, peanuts, wheat, soybeans and sesame." },
      { objective: "O3", q: "A guest with a peanut allergy orders a dish. Which step is WRONG?", options: ["Tell the chef", "Check every ingredient label", "Use clean and sanitized tools", "Scrape the peanuts off a finished dish and serve it"], answer: 3, why: "Removing the allergen does not make the dish safe; make a new one with clean tools." },
      { objective: "O3", q: "What is the difference between cleaning and sanitizing?", options: ["Cleaning removes dirt; sanitizing reduces germs to safe levels", "They are the same", "Sanitizing removes dirt; cleaning kills germs", "Cleaning is only for floors"], answer: 0, why: "You clean first, then sanitize." },
      { objective: "O3", q: "After sanitizing a cutting board, you should:", options: ["Dry it with a towel", "Rinse the sanitizer off right away", "Let it air dry", "Put it straight under raw meat"], answer: 2, why: "Air drying lets the sanitizer work for its contact time without adding germs from a towel." },
      { objective: "O3", q: "How do you know a sanitizer solution is the right strength?", options: ["By its smell", "Check it with the test strips your kitchen uses", "By its color", "Add extra to be safe"], answer: 1, why: "Test strips show the strength; too weak will not work, too strong can be unsafe." },
      { objective: "O4", q: "At what temperature or below should cold TCS food be held in food service?", options: ["50°F", "60°F", "45°F", "41°F"], answer: 3, why: "The Food Code says cold holding is 41°F or below." },
      { objective: "O4", q: "Hot TCS food on a buffet must be held at:", options: ["135°F or above", "100°F or above", "120°F or above", "Room temperature"], answer: 0, why: "Hot holding is 135°F or above under the Food Code." },
      { objective: "O4", q: "Which is a safe way to thaw frozen chicken?", options: ["On the counter overnight", "In the cooler", "In warm water on the counter", "In the sun"], answer: 1, why: "Thawing in the cooler keeps it out of the danger zone." },
      { objective: "O5", q: "Ground beef patties in a restaurant must reach:", options: ["135°F", "145°F for 15 seconds", "155°F for 17 seconds", "100°F"], answer: 2, why: "The Food Code sets 155°F for 17 seconds for ground meat." },
      { objective: "O5", q: "A pork chop or a salmon fillet must reach:", options: ["165°F for 15 seconds", "120°F", "100°F", "145°F for 15 seconds"], answer: 3, why: "Whole cuts and fish are 145°F for 15 seconds." },
      { objective: "O5", q: "Leftover chili cooled yesterday will go in the hot-holding well. Reheat it to:", options: ["165°F for 15 seconds within 2 hours", "135°F over 6 hours", "100°F", "Just until warm"], answer: 0, why: "Food cooked and cooled on site is reheated to 165°F for 15 seconds within 2 hours for hot holding." },
      { objective: "O6", q: "Where do you find the food handler card rule for your area?", options: ["A social media post", "A coworker's guess", "Your state or county health department", "Any exam website"], answer: 2, why: "Rules differ by state and county, so the local health department is the official source." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Pre-Test: What Do You Already Know?",
    from: [
      0,
      2,
      5,
      8,
      10,
      13,
      16,
      18,
      19
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      {
        name: "Handwashing",
        objective: "O1",
        notYet: "Handwashing steps or times are missing or wrong.",
        meets: "Lists the full handwashing steps and at least six times to wash.",
        exceeds: "Also says when to change gloves and how to handle ready-to-eat food."
      },
      {
        name: "Storage and cross-contamination",
        objective: "O2",
        notYet: "Raw food is stored above ready-to-eat food, or no separate tools.",
        meets: "Shows the right shelf order and separate or sanitized boards and knives.",
        exceeds: "Also covers labeling with name and date and storing chemicals below food."
      },
      {
        name: "Allergy and sanitizing steps",
        objective: "O3",
        notYet: "Allergy steps or the clean-and-sanitize order are missing.",
        meets: "Lists the allergy steps and the order: scrape, wash, rinse, sanitize, air dry.",
        exceeds: "Mentions test strips and the label's contact time for the sanitizer."
      },
      {
        name: "Holding temperatures",
        objective: "O4",
        notYet: "Holding temperatures are missing or wrong.",
        meets: "Cold at 41°F or below and hot at 135°F or above, checked with a thermometer.",
        exceeds: "Adds a check schedule and a log."
      },
      {
        name: "Cooking and cooling",
        objective: "O5",
        notYet: "Cooking or cooling numbers are missing or wrong.",
        meets: "Gives the right cooking temperatures and both cooling time limits.",
        exceeds: "Adds the reheating rule and how to cool food fast."
      },
      {
        name: "Illness and local card rule",
        objective: "O6",
        notYet: "No illness symptoms listed, or no card rule at the top.",
        meets: "Lists the symptoms to report and the local card deadline, length and accepted courses.",
        exceeds: "Names the health department page where the rule was found."
      }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Learners who earn a food handler card from an accredited course within 60 days",
      "Learners who get or keep a food service job within 90 days (follow-up survey)",
      "Employer partners report fewer food safety mistakes on health inspections or shift checks"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A phone or computer to read the lessons",
      "A sink with soap for handwashing practice",
      "A food thermometer (optional but helpful)",
      "Paper and pen for the pocket card and the Safe Shift Checklist",
      "About 60 minutes in total: lessons, practice, checks and the final task"
    ],
    facilitatorNotes: [
      "Do a live handwashing demo and time the 20 seconds together.",
      "Use pictures or empty containers for the cooler shelf exercise; no raw food is needed.",
      "Remind learners that home cooking numbers differ from food service numbers, and their health department's code is the one that counts.",
      "Help each learner look up their own state or county card rule; it differs from place to place.",
      "Score the final task with the rubric, and give feedback on one Not yet row at a time."
    ]
  }
};
