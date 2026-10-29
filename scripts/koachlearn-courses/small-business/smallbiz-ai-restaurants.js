"use strict";

// Koach Learn course: Small Business -> "AI for Restaurants" (bonus course). Written as a skill-building course: by the end the student can DO the skill in `outcome`.
// Two chapters of three micro-lessons; a knowledge check closes each chapter; a 20-question quiz closes the course. See scripts/koachlearn-export.js for how it is built.
// The FDA major food allergen list and the FTC review rule were checked on fda.gov and ftc.gov on 27 October 2026.
//
// lesson: { title, minutes, goal, text: [paragraph], steps: [step] (optional), words: [[term, means]], slides: [{ title, bullets }], sources, tryIt, youCanNow }
// question: { q, options: [4], answer: index of the right option, why }

const FDA_ALLERGENS = { name: "FDA: Food Allergies (the nine major food allergens)", url: "https://www.fda.gov/food/nutrition-food-labeling-and-critical-foods/food-allergies" };
const FDA_CODE = { name: "FDA: Food Code", url: "https://www.fda.gov/food/retail-food-protection/fda-food-code" };
const FTC_REVIEWS = { name: "FTC: Consumer Reviews and Testimonials Rule, Questions and Answers", url: "https://www.ftc.gov/business-guidance/resources/consumer-reviews-testimonials-rule-questions-answers" };

module.exports = {
  id: "smallbiz-ai-restaurants",
  category: "Small Business",
  name: "AI for Restaurants",
  skills: "Writing menu descriptions, Building an allergen chart from recipes, Making prep and order lists, Drafting staff schedules, Answering reviews, Planning specials",
  outcome: "use AI to run the back-office of a small restaurant or food truck: write menu descriptions, build an allergen chart from your own recipes and check it, make prep and order lists from your sales, draft a fair staff schedule, and answer reviews honestly.",
  about: [
    "This course is for owners, managers and cooks at small restaurants, cafés, food trucks, caterers and home-style kitchens. Many of our students run family and minority-owned restaurants where the owner also cooks, orders and answers the phone.",
    "You will use a free AI assistant and a spreadsheet to save time on writing, planning and paperwork. Food safety and allergen rules come from official sources and your local health department, not from AI; this course shows you where to look.",
    "Each lesson takes about five minutes with a \"Try it now\" task. There is a knowledge check after each chapter and a 20-question quiz at the end."
  ],
  finalTask: "Build a restaurant kit: menu descriptions for five dishes, an allergen chart for those five dishes built from your real recipes and ingredient labels (checked by you against the FDA's nine major allergens), a prep list and an order list for one week based on your sales, a draft staff schedule, and replies to one good and one bad review.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Owners, managers and cooks at small restaurants, cafés, food trucks, caterers and home-style kitchens, many of them family and minority-owned, where the owner also cooks, orders and answers the phone.",
    startingPoint: "Can cook, run a shift and take orders. Many use a phone and a point-of-sale system, but have little or no experience with AI assistants or spreadsheet formulas.",
    gap: "Writing, planning and paperwork eat hours the owner does not have. Learners need to use AI to save that time while keeping allergen information, labor rules and reviews accurate and honest, because a mistake can hurt a guest or break a rule.",
    constraints: [
      "Time: owners work long shifts, so lessons are about 5 minutes each",
      "Devices: often a phone or one shared office computer",
      "Food safety and allergen rules come from the FDA and the local health department, not from AI",
      "Labor rules on breaks, overtime and minors depend on the state and city",
      "Privacy: no Social Security numbers, pay with names or private notes about workers in AI tools"
    ],
    prerequisites: "None. Learners new to AI assistants can take an introduction to AI course first."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Given the real ingredients and method for a dish", action: "write a short menu description with AI help and remove anything that is not true", standard: "with every ingredient word matching your recipe" },
    { id: "O2", condition: "Using your own recipes and the labels of what you buy", action: "build an allergen chart that marks the FDA's nine major allergens for each dish", standard: "with every dish checked by a second person" },
    { id: "O3", condition: "Given your average sales per day and portions per batch", action: "create a weekly prep list and order list in a spreadsheet", standard: "with batches rounded up and adjusted for events, weekends and weather" },
    { id: "O4", condition: "Given your hours, shifts and workers' first names and availability", action: "draft a weekly staff schedule with AI and check it for coverage, fairness and labor rules", standard: "with no private worker details in the prompt" },
    { id: "O5", condition: "Given a guest question or a good or bad review", action: "write a calm, honest reply with AI help", standard: "with every statement true and no fake or paid-for reviews" },
    { id: "O6", condition: "Given extra or seasonal ingredients", action: "plan a weekly special, calculate its plate cost and set a price with a profit", standard: "with allergens checked and the special added to the prep list" }
  ],
  chapters: [
    {
      name: "Chapter 1: Menu, allergens and kitchen lists",
      lessons: [
        {
          objectives: ["O1"],
          title: "Writing menu descriptions",
          minutes: 5,
          goal: "Write short, mouth-watering and accurate menu descriptions with AI help.",
          text: [
            "A good menu description says what is in the dish, how it is cooked, and why it is special, in 10 to 25 words. \"Jollof rice slow-cooked in tomato and pepper sauce, served with fried plantain and grilled chicken thigh.\"",
            "Give AI the real ingredients and method: \"Write a 20-word menu description for: goat curry, bone-in, slow-cooked 4 hours with scotch bonnet, thyme and potatoes, served with white rice. Warm, simple words.\" Ask for three versions and pick one.",
            "Check it. AI may add ingredients you do not use (\"with cashews\") or words like \"organic\" or \"house-made\" that are not true. A wrong ingredient on a menu can hurt someone with an allergy."
          ],
          steps: ["Write the real ingredients and cooking method.", "Ask AI for three short descriptions.", "Pick one and check every ingredient word.", "Remove anything not true, like \"organic\"."],
          words: [["Menu description", "the short text under a dish name that tells guests what it is."]],
          slides: [
            { title: "A good description", bullets: ["What is in it", "How it is cooked", "Why it is special, in 10 to 25 words"] },
            { title: "Give AI the real recipe", bullets: ["Ingredients and method", "Ask for three versions"] },
            { title: "Check every word", bullets: ["No ingredients you do not use", "No \"organic\" or \"house-made\" unless true", "Wrong ingredients can hurt allergic guests"] }
          ],
          tryIt: "Write menu descriptions for five of your dishes with AI help. Check every ingredient word against your recipe.",
          youCanNow: "write accurate, appealing menu descriptions with AI help.",
          quickCheck: [
            { objective: "O1", q: "What three things does a good menu description say?", options: ["What is in the dish, how it is cooked, and why it is special", "The price, the cook's name and the plate size", "The calories, the supplier and the date", "Only the name of the dish in capital letters"], answer: 0, why: "The lesson says a good description covers what is in it, how it is cooked and why it is special." },
            { objective: "O1", q: "AI writes \"house-made organic tortillas\" but you buy regular tortillas. What do you do?", options: ["Keep it because it sounds better", "Remove \"house-made\" and \"organic\" because they are not true", "Add more words like \"artisan\"", "Ask AI to write it in capital letters"], answer: 1, why: "Menu words must be true, so you remove anything AI added that you do not do." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Building an allergen chart, safely",
          minutes: 6,
          goal: "Build an allergen chart from your own recipes and labels, checked by you.",
          text: [
            "The FDA lists nine major food allergens: milk, eggs, fish, crustacean shellfish, tree nuts, peanuts, wheat, soybeans and sesame. Guests with allergies rely on you to know what is in each dish.",
            "Make a chart: dishes down the side, the nine allergens across the top. Fill it from your actual recipes AND the ingredient labels of everything you buy, because sauces, spice mixes and breads often hide allergens. AI can help you set up the table and remind you which ingredients commonly contain an allergen, but it does not know your suppliers' products. You and your labels do.",
            "Update the chart whenever a recipe or supplier changes. Train staff to say \"Let me check\" and ask the kitchen, never guess. Your local health department and the FDA Food Code have rules on food safety and allergen awareness; check what applies where you are."
          ],
          steps: ["List your dishes and every ingredient in each.", "Read the label of each bought ingredient.", "Mark each of the nine allergens per dish.", "Have a second person check the chart.", "Update it when recipes or suppliers change."],
          words: [["Allergen", "a food that can cause a serious allergic reaction in some people."], ["Cross-contact", "when an allergen gets into another food by shared surfaces, oil or tools."], ["Food Code", "the FDA's model food safety rules that many states and counties adopt."]],
          slides: [
            { title: "The FDA's nine major allergens", bullets: ["Milk, eggs, fish, crustacean shellfish", "Tree nuts, peanuts, wheat", "Soybeans, sesame"] },
            { title: "Build the chart from facts", bullets: ["Dishes down the side, allergens across", "Your recipes AND every ingredient label", "AI sets up the table; it does not know your suppliers"] },
            { title: "Keep it right", bullets: ["A second person checks it", "Update when recipes or suppliers change", "Staff never guess: \"Let me check\""] },
            { title: "Rules where you are", bullets: ["Your local health department", "The FDA Food Code"] }
          ],
          sources: [FDA_ALLERGENS, FDA_CODE],
          tryIt: "Ask AI to set up an empty allergen chart for five dishes with the nine allergens as columns. Fill it in yourself from your recipes and ingredient labels, then have someone check it.",
          youCanNow: "build and maintain an allergen chart from your own recipes and labels.",
          quickCheck: [
            { objective: "O2", q: "What goes across the top of the allergen chart in this lesson?", options: ["Your prices", "Your suppliers' names", "The nine major allergens", "Your staff's names"], answer: 2, why: "Dishes go down the side and the nine allergens go across the top." },
            { objective: "O2", q: "Your supplier changes the brand of spice mix you use. What do you do?", options: ["Nothing, spice mixes never have allergens", "Ask AI if the new brand has allergens and trust it", "Wait until a guest asks", "Read the new label and update the chart"], answer: 3, why: "AI does not know your suppliers' products; you update the chart from the new label." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Prep lists and order lists from your sales",
          minutes: 5,
          goal: "Make a weekly prep list and order list from your sales numbers.",
          text: [
            "Over-prepping wastes food; under-prepping means \"sorry, we're out\". Start with how many of each dish you sell per day. Your POS can often show this, or keep a simple tally.",
            "In a spreadsheet: Dish, Average sold per day, Portions per batch, Batches needed. Then list the ingredients per portion to see what to order. Ask AI for help with the formulas: \"Write a Google Sheets formula to round up batches needed: average sold divided by portions per batch.\" (=ROUNDUP(B2/C2,0) is one way.)",
            "Adjust for what you know: weekends, events, weather, holidays. AI can suggest a prep list layout and a checklist, but your numbers and experience set the amounts."
          ],
          steps: ["Get average sold per day for each dish.", "Add portions per batch and calculate batches with ROUNDUP.", "List ingredients per portion and total the order.", "Adjust for weekends, events and weather."],
          words: [["Prep list", "a list of what the kitchen must prepare before service."], ["Par level", "the amount of an item you want on hand at the start of service."], ["Batch", "one cooking of a recipe that makes a set number of portions."]],
          slides: [
            { title: "Waste vs running out", bullets: ["Over-prep wastes food", "Under-prep disappoints guests", "Start from sales per dish"] },
            { title: "A simple prep sheet", bullets: ["Dish, sold per day, portions per batch", "Batches = ROUNDUP(sold / portions, 0)", "Ingredients per portion -> order list"] },
            { title: "Use what you know", bullets: ["Weekends, events, weather", "AI helps with layout; you set the amounts"] }
          ],
          tryIt: "Make a prep sheet for five dishes with sold-per-day, portions per batch and a ROUNDUP formula for batches. Turn it into an order list for one week.",
          youCanNow: "build prep and order lists from your own sales numbers.",
          quickCheck: [
            { objective: "O3", q: "What problem does over-prepping cause?", options: ["Wasted food", "Running out of a dish", "Longer opening hours", "Higher rent"], answer: 0, why: "The lesson says over-prepping wastes food and under-prepping means running out." },
            { objective: "O3", q: "A big festival is in town this weekend. What do you do with your prep list?", options: ["Use the usual numbers exactly", "Adjust the amounts up based on what you know", "Let AI set the amounts with no changes", "Stop making a prep list"], answer: 1, why: "You adjust for events, weekends and weather, because your experience sets the amounts." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Menu, allergens and kitchen lists",
        questions: [
          { objective: "O1", q: "AI's menu description adds \"with cashews\" but your dish has none. What do you do?", options: ["Keep it; it sounds nice", "Remove it", "Add cashews", "Ignore it"], answer: 1, why: "Wrong ingredients can hurt allergic guests and mislead everyone." },
          { objective: "O2", q: "How many major food allergens does the FDA list?", options: ["Twenty", "Three", "Fourteen", "Nine"], answer: 3, why: "The FDA lists nine, including sesame." },
          { objective: "O2", q: "Where does the allergen information in your chart come from?", options: ["Your recipes and the labels of what you buy", "AI's guess", "A competitor's menu", "Customers"], answer: 0, why: "Only your recipes and labels show what is really in your food." },
          { objective: "O2", q: "A guest asks if a dish has sesame and you are not sure. You:", options: ["Ask AI", "Guess no", "Say \"Let me check\" and ask the kitchen and chart", "Say it is fine"], answer: 2, why: "Never guess about allergens." },
          { objective: "O3", q: "You sell 22 a day and a batch makes 8. With ROUNDUP, how many batches?", options: ["2", "3", "4", "22"], answer: 1, why: "22 / 8 = 2.75, rounded up to 3." }
        ]
      }
    },
    {
      name: "Chapter 2: Staff, guests and growth",
      lessons: [
        {
          objectives: ["O4"],
          title: "Drafting a staff schedule",
          minutes: 5,
          goal: "Draft a weekly schedule with AI help, then check it against your rules.",
          text: [
            "Give AI the facts: your hours, how many people you need each shift, each worker's availability and roles, and your rules. \"Draft a weekly schedule for my taqueria, open 11-9 Tuesday-Sunday. Need 2 cooks and 2 front staff at lunch and dinner. Here are availabilities: [first names only].\"",
            "Check the draft yourself. Make sure it is fair, covers busy times, and follows labor laws on breaks, overtime and minors. Those rules depend on your state and city; check your state labor department or a professional. AI does not know them reliably.",
            "Do not put Social Security numbers, pay rates with names or private notes about workers into AI tools. First names and availability are enough."
          ],
          steps: ["List shifts and people needed.", "List workers by first name with availability and roles.", "Ask AI for a draft.", "Check fairness, coverage and labor rules for your state.", "Post the final schedule."],
          words: [["Availability", "the days and times a worker can work."], ["Overtime", "extra hours that may require higher pay under labor law."], ["Coverage", "having enough staff on each shift."]],
          slides: [
            { title: "Give AI the facts", bullets: ["Hours and staff needed per shift", "First names, availability and roles"] },
            { title: "You check the draft", bullets: ["Fair and covers busy times", "Breaks, overtime and minors: check your state's rules"] },
            { title: "Keep worker data private", bullets: ["No SSNs or pay rates with names", "First names and availability are enough"] }
          ],
          tryIt: "Draft next week's schedule with AI using first names and availability. Check coverage and fairness, and write where you will check your state's break and overtime rules.",
          youCanNow: "draft a staff schedule with AI and check it against your own needs and labor rules.",
          quickCheck: [
            { objective: "O4", q: "What facts does AI need to draft a schedule?", options: ["Workers' Social Security numbers and pay", "Only the restaurant's name", "Your hours, people needed per shift, and workers' availability and roles", "Private notes about each worker"], answer: 2, why: "Hours, shift needs, availability and roles are enough; private details stay out." },
            { objective: "O4", q: "AI's draft schedules a 16-year-old on a late shift. What do you do?", options: ["Post it as it is", "Ask AI if it is legal and trust the answer", "Remove the worker from the schedule forever", "Check your state's rules for minors and fix the draft"], answer: 3, why: "Rules on minors depend on your state, so you check them and fix the schedule yourself." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Answering reviews and guest messages",
          minutes: 5,
          goal: "Reply to reviews and common guest questions quickly and honestly.",
          text: [
            "Guests ask the same things: hours, parking, reservations, catering, vegan options, allergies. Use AI to turn your real answers into short replies you can paste. For allergy questions, always point to your checked allergen chart and staff.",
            "For reviews: thank good reviews briefly and mention the dish. For bad ones, stay calm, apologize for the experience, say what you are fixing, and invite them to contact you. Do not argue publicly. Let AI draft a calm version if you are upset, then check every statement is true.",
            "Never write fake reviews or pay only for positive ones. The FTC's rule on consumer reviews bans this, including AI-written fakes."
          ],
          steps: ["Write real answers to your top guest questions.", "Ask AI to make short paste-ready replies.", "Draft review replies calmly with AI, then check them.", "Never fake or buy reviews."],
          words: [["Review", "a guest's public rating and comment."], ["Catering", "providing food for an event outside the normal dine-in service."]],
          slides: [
            { title: "Paste-ready answers", bullets: ["Hours, parking, reservations, catering", "Allergy questions: use your checked chart"] },
            { title: "Review replies", bullets: ["Good: thank them, mention the dish", "Bad: calm, apologize, fix, invite contact", "Check every statement is true"] },
            { title: "No fake reviews", bullets: ["The FTC rule bans fake reviews", "Includes AI-written ones"] }
          ],
          sources: [FTC_REVIEWS],
          tryIt: "Ask AI to draft replies to one good and one bad review (real or sample, such as cold food on a busy Friday). Make every statement true and in your voice.",
          youCanNow: "answer guest questions and reviews quickly, calmly and honestly.",
          quickCheck: [
            { objective: "O5", q: "How should you answer a good review?", options: ["Thank them briefly and mention the dish", "Ignore it", "Offer them money for another review", "Write a long story about your restaurant"], answer: 0, why: "The lesson says to thank good reviews briefly and mention the dish." },
            { objective: "O5", q: "You are angry about an unfair bad review. What do you do?", options: ["Argue with the guest in public", "Let AI draft a calm reply, then check every statement is true", "Post fake good reviews to hide it", "Delete your business page"], answer: 1, why: "AI can help you stay calm, and you check the reply is true; you never argue publicly or fake reviews." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Planning specials that use what you have",
          minutes: 5,
          goal: "Plan a weekly special that cuts waste and keeps a profit.",
          text: [
            "Specials can sell extra stock before it spoils, test new dishes and bring regulars back. Look at what you over-ordered or what is in season.",
            "Ask AI: \"I have extra plantains, black beans and chicken thighs this week. Suggest three specials that fit my Caribbean menu and use mostly these.\" Pick one, cost it out (ingredients per plate), and set a price with a profit.",
            "Write the special's description, check its allergens against your chart method, add it to your prep list, and post it with a photo of the real dish."
          ],
          steps: ["List extra or seasonal ingredients.", "Ask AI for special ideas that fit your menu.", "Cost the plate and set a price with profit.", "Check allergens and add to the prep list.", "Post with a real photo."],
          words: [["Plate cost", "the cost of the ingredients in one serving."], ["Food cost percentage", "plate cost divided by menu price, times 100."]],
          slides: [
            { title: "Why specials", bullets: ["Use extra stock before it spoils", "Test new dishes", "Bring regulars back"] },
            { title: "AI for ideas", bullets: ["List what you have extra", "Ask for specials that fit your menu"] },
            { title: "Before you post", bullets: ["Cost the plate and set a price", "Check allergens; add to prep list", "Use a real photo"] }
          ],
          tryIt: "Final task: build your restaurant kit: five menu descriptions, an allergen chart from your recipes and labels, a week's prep and order lists, a draft schedule, two review replies, and one special with its plate cost.",
          youCanNow: "use AI across your restaurant's planning, paperwork and guest communication, safely.",
          quickCheck: [
            { objective: "O6", q: "What is one reason to run a special?", options: ["To raise prices on everything", "To use up staff hours", "To sell extra stock before it spoils", "To avoid checking allergens"], answer: 2, why: "Specials can sell extra stock, test new dishes and bring regulars back." },
            { objective: "O6", q: "AI suggests three specials from your extra plantains. What do you do next?", options: ["Post all three right away with stock photos", "Ask AI to set the price", "Skip costing because it is only for one week", "Pick one, cost the plate and set a price with a profit"], answer: 3, why: "You cost the plate and price it for a profit, then check allergens and add it to the prep list." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Staff, guests and growth",
        questions: [
          { objective: "O4", q: "Where do you check break and overtime rules?", options: ["Your state labor department or a professional", "The AI's draft", "A customer", "A social media post"], answer: 0, why: "Labor rules depend on your state and city." },
          { objective: "O4", q: "Which worker information should go into the AI schedule prompt?", options: ["Home addresses", "Social Security numbers", "Pay rates with names", "First names and availability"], answer: 3, why: "Only what is needed, nothing private." },
          { objective: "O5", q: "A guest messages asking if a dish is peanut-free. Your reply should be based on:", options: ["AI's guess", "Your checked allergen chart and staff", "The menu photo", "Your memory only"], answer: 1, why: "Allergen answers come from your checked chart." },
          { objective: "O5", q: "Under the FTC rule, which is banned?", options: ["Writing fake reviews with AI", "Thanking a reviewer", "Replying to a bad review", "Asking guests for honest reviews"], answer: 0, why: "Fake reviews, including AI-written ones, are banned." },
          { objective: "O6", q: "A special uses $3.50 of ingredients and sells for $14. What is the food cost percentage?", options: ["14%", "25%", "35%", "50%"], answer: 1, why: "3.50 / 14 = 0.25, or 25%." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: AI for Restaurants",
    questions: [
      { objective: "O1", q: "A good menu description is about:", options: ["200 words", "10 to 25 words", "One letter", "A full page"], answer: 1, why: "Short descriptions are read quickly." },
      { objective: "O1", q: "What do you give AI to write a menu description?", options: ["Nothing", "Your bank details", "Guests' names", "The real ingredients and method"], answer: 3, why: "Real facts make accurate descriptions." },
      { objective: "O1", q: "Why check every ingredient word AI writes?", options: ["It is not needed", "To make it longer", "For spelling only", "A wrong ingredient can hurt a guest with an allergy"], answer: 3, why: "Accuracy is a safety issue." },
      { objective: "O2", q: "Which is one of the FDA's nine major allergens?", options: ["Rice", "Sesame", "Corn", "Chicken"], answer: 1, why: "Sesame was added as the ninth." },
      { objective: "O2", q: "Why read the label of every bought ingredient?", options: ["For fun", "To find the price", "Sauces and mixes can hide allergens", "It is not needed"], answer: 2, why: "Hidden allergens are common in prepared ingredients." },
      { objective: "O2", q: "When should you update your allergen chart?", options: ["When a recipe or supplier changes", "Once every ten years", "Never", "Only after a complaint"], answer: 0, why: "Changes can add allergens." },
      { objective: "O2", q: "What is cross-contact?", options: ["A phone call", "Two staff talking", "An allergen getting into another food via shared tools or oil", "A menu change"], answer: 2, why: "Shared surfaces can spread allergens." },
      { objective: "O2", q: "Who sets food safety rules for your restaurant?", options: ["Your local health department, often based on the FDA Food Code", "The AI", "Your customers", "A review site"], answer: 0, why: "Official agencies set the rules." },
      { objective: "O3", q: "A prep list is:", options: ["A staff schedule", "What the kitchen must prepare before service", "A review", "A tax form"], answer: 1, why: "It guides kitchen prep." },
      { objective: "O3", q: "=ROUNDUP(B2/C2,0) gives:", options: ["Allergens", "Profit", "Staff hours", "Whole batches needed, rounded up"], answer: 3, why: "It rounds the batch count up." },
      { objective: "O3", q: "Who sets the final prep amounts?", options: ["You, from your numbers and experience", "The AI alone", "A supplier", "Guests"], answer: 0, why: "AI helps with layout; you decide amounts." },
      { objective: "O3", q: "Which is a good reason to adjust prep?", options: ["Nothing", "A new font", "AI says so", "A local event this weekend"], answer: 3, why: "Events change demand." },
      { objective: "O4", q: "AI's schedule draft gives one worker 7 shifts. You:", options: ["Ignore it", "Post it", "Check fairness and labor rules, then fix it", "Ask the worker to quit"], answer: 2, why: "You check every draft." },
      { objective: "O4", q: "Is AI a reliable source for your state's overtime law?", options: ["Yes, always", "No, check the state labor department", "Only on weekends", "Only for minors"], answer: 1, why: "Labor law needs an official source." },
      { objective: "O5", q: "A bad review complains of cold food. A good reply:", options: ["Offers cash for a better review", "Argues publicly", "Shares the guest's details", "Apologizes, says what you are fixing, invites contact"], answer: 3, why: "Calm, honest replies build trust." },
      { objective: "O5", q: "Paying guests only if they leave 5 stars is:", options: ["Required", "Smart marketing", "Banned under the FTC review rule", "Fine"], answer: 2, why: "Rewards tied to positive sentiment are banned." },
      { objective: "O6", q: "A good use of a special is to:", options: ["Use extra stock before it spoils", "Hide old food", "Raise all prices", "Skip allergen checks"], answer: 0, why: "Specials cut waste." },
      { objective: "O6", q: "What is plate cost?", options: ["The price of dishes", "The cost of ingredients in one serving", "Rent", "A tip"], answer: 1, why: "It is ingredient cost per plate." },
      { objective: "O6", q: "Before posting a special you should:", options: ["Skip pricing", "Check allergens and add it to the prep list", "Use a stock photo of another dish", "Promise it is organic"], answer: 1, why: "Safety and planning come first." },
      { objective: "O6", q: "Food cost percentage is:", options: ["Plate cost divided by menu price, times 100", "Rent divided by sales", "Tips times staff", "Price plus tax"], answer: 0, why: "It shows how much of the price is ingredients." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Pre-Test: What Do You Already Know?",
    from: [
      1,
      3,
      6,
      9,
      12,
      14,
      17
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      {
        name: "Accurate menu descriptions",
        objective: "O1",
        notYet: "A description lists an ingredient or claim that is not in the dish.",
        meets: "Five short descriptions, every ingredient word matching the recipe.",
        exceeds: "Each one also says how the dish is cooked and why it is special."
      },
      {
        name: "Checked allergen chart",
        objective: "O2",
        notYet: "The chart is copied from AI or missing a dish or allergen.",
        meets: "All five dishes marked for the nine allergens from recipes and labels, checked by a second person.",
        exceeds: "Notes which bought items hide allergens and when the chart was last updated."
      },
      {
        name: "Prep and order lists",
        objective: "O3",
        notYet: "Amounts are guessed or batches are not rounded up.",
        meets: "A week's prep and order lists built from sales with batches rounded up.",
        exceeds: "Amounts are adjusted for a named event, weekend or weather."
      },
      {
        name: "Fair, checked schedule",
        objective: "O4",
        notYet: "The schedule leaves a busy shift short or used private worker details.",
        meets: "Covers every shift fairly, uses first names only, and notes where labor rules were checked.",
        exceeds: "Also notes breaks and any rules for minors from the state source."
      },
      {
        name: "Honest review replies",
        objective: "O5",
        notYet: "A reply argues, makes a false promise or offers a reward for reviews.",
        meets: "One good and one bad review answered calmly with only true statements.",
        exceeds: "The bad-review reply names a real fix and invites the guest to make contact."
      },
      {
        name: "Costed special",
        objective: "O6",
        notYet: "The special has no plate cost or price.",
        meets: "One special with plate cost, a price with profit, and allergens checked.",
        exceeds: "Also added to the prep list and uses extra or seasonal stock."
      }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Owners who report using their allergen chart and prep lists in the kitchen within 30 days (follow-up survey)",
      "Owners who report less food waste or fewer items running out within 30 days",
      "Learners who start another Koach Learn small business course within 30 days"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A phone or computer with internet",
      "A free AI assistant and a free spreadsheet such as Google Sheets",
      "Your own recipes, ingredient labels and a week of sales numbers",
      "About 60 minutes in total: lessons, practice, checks and the final task"
    ],
    facilitatorNotes: [
      "Ask owners to bring real recipes and labels, or use sample ones, so the allergen chart is built from real information.",
      "Stress that allergen, food safety and labor rules come from the FDA, the local health department and the state labor department, not from AI.",
      "Remind learners to use first names only for staff and never type Social Security numbers or pay with names.",
      "Schedule sessions outside meal rushes, for example mid-afternoon.",
      "Score the final task with the rubric, and give feedback on one Not yet row at a time."
    ]
  }
};
