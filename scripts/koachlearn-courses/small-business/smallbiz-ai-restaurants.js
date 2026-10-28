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
  chapters: [
    {
      name: "Chapter 1: Menu, allergens and kitchen lists",
      lessons: [
        {
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
          youCanNow: "write accurate, appealing menu descriptions with AI help."
        },
        {
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
          youCanNow: "build and maintain an allergen chart from your own recipes and labels."
        },
        {
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
          youCanNow: "build prep and order lists from your own sales numbers."
        }
      ],
      check: {
        title: "Knowledge Check 1: Menu, allergens and kitchen lists",
        questions: [
          { q: "AI's menu description adds \"with cashews\" but your dish has none. What do you do?", options: ["Keep it; it sounds nice", "Remove it", "Add cashews", "Ignore it"], answer: 1, why: "Wrong ingredients can hurt allergic guests and mislead everyone." },
          { q: "How many major food allergens does the FDA list?", options: ["Twenty", "Three", "Fourteen", "Nine"], answer: 3, why: "The FDA lists nine, including sesame." },
          { q: "Where does the allergen information in your chart come from?", options: ["Your recipes and the labels of what you buy", "AI's guess", "A competitor's menu", "Customers"], answer: 0, why: "Only your recipes and labels show what is really in your food." },
          { q: "A guest asks if a dish has sesame and you are not sure. You:", options: ["Ask AI", "Guess no", "Say \"Let me check\" and ask the kitchen and chart", "Say it is fine"], answer: 2, why: "Never guess about allergens." },
          { q: "You sell 22 a day and a batch makes 8. With ROUNDUP, how many batches?", options: ["2", "3", "4", "22"], answer: 1, why: "22 / 8 = 2.75, rounded up to 3." }
        ]
      }
    },
    {
      name: "Chapter 2: Staff, guests and growth",
      lessons: [
        {
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
          youCanNow: "draft a staff schedule with AI and check it against your own needs and labor rules."
        },
        {
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
          youCanNow: "answer guest questions and reviews quickly, calmly and honestly."
        },
        {
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
          youCanNow: "use AI across your restaurant's planning, paperwork and guest communication, safely."
        }
      ],
      check: {
        title: "Knowledge Check 2: Staff, guests and growth",
        questions: [
          { q: "Where do you check break and overtime rules?", options: ["Your state labor department or a professional", "The AI's draft", "A customer", "A social media post"], answer: 0, why: "Labor rules depend on your state and city." },
          { q: "Which worker information should go into the AI schedule prompt?", options: ["Home addresses", "Social Security numbers", "Pay rates with names", "First names and availability"], answer: 3, why: "Only what is needed, nothing private." },
          { q: "A guest messages asking if a dish is peanut-free. Your reply should be based on:", options: ["AI's guess", "Your checked allergen chart and staff", "The menu photo", "Your memory only"], answer: 1, why: "Allergen answers come from your checked chart." },
          { q: "Under the FTC rule, which is banned?", options: ["Writing fake reviews with AI", "Thanking a reviewer", "Replying to a bad review", "Asking guests for honest reviews"], answer: 0, why: "Fake reviews, including AI-written ones, are banned." },
          { q: "A special uses $3.50 of ingredients and sells for $14. What is the food cost percentage?", options: ["14%", "25%", "35%", "50%"], answer: 1, why: "3.50 / 14 = 0.25, or 25%." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: AI for Restaurants",
    questions: [
      { q: "A good menu description is about:", options: ["200 words", "10 to 25 words", "One letter", "A full page"], answer: 1, why: "Short descriptions are read quickly." },
      { q: "What do you give AI to write a menu description?", options: ["Nothing", "Your bank details", "Guests' names", "The real ingredients and method"], answer: 3, why: "Real facts make accurate descriptions." },
      { q: "Why check every ingredient word AI writes?", options: ["It is not needed", "To make it longer", "For spelling only", "A wrong ingredient can hurt a guest with an allergy"], answer: 3, why: "Accuracy is a safety issue." },
      { q: "Which is one of the FDA's nine major allergens?", options: ["Rice", "Sesame", "Corn", "Chicken"], answer: 1, why: "Sesame was added as the ninth." },
      { q: "Why read the label of every bought ingredient?", options: ["For fun", "To find the price", "Sauces and mixes can hide allergens", "It is not needed"], answer: 2, why: "Hidden allergens are common in prepared ingredients." },
      { q: "When should you update your allergen chart?", options: ["When a recipe or supplier changes", "Once every ten years", "Never", "Only after a complaint"], answer: 0, why: "Changes can add allergens." },
      { q: "What is cross-contact?", options: ["A phone call", "Two staff talking", "An allergen getting into another food via shared tools or oil", "A menu change"], answer: 2, why: "Shared surfaces can spread allergens." },
      { q: "Who sets food safety rules for your restaurant?", options: ["Your local health department, often based on the FDA Food Code", "The AI", "Your customers", "A review site"], answer: 0, why: "Official agencies set the rules." },
      { q: "A prep list is:", options: ["A staff schedule", "What the kitchen must prepare before service", "A review", "A tax form"], answer: 1, why: "It guides kitchen prep." },
      { q: "=ROUNDUP(B2/C2,0) gives:", options: ["Allergens", "Profit", "Staff hours", "Whole batches needed, rounded up"], answer: 3, why: "It rounds the batch count up." },
      { q: "Who sets the final prep amounts?", options: ["You, from your numbers and experience", "The AI alone", "A supplier", "Guests"], answer: 0, why: "AI helps with layout; you decide amounts." },
      { q: "Which is a good reason to adjust prep?", options: ["Nothing", "A new font", "AI says so", "A local event this weekend"], answer: 3, why: "Events change demand." },
      { q: "AI's schedule draft gives one worker 7 shifts. You:", options: ["Ignore it", "Post it", "Check fairness and labor rules, then fix it", "Ask the worker to quit"], answer: 2, why: "You check every draft." },
      { q: "Is AI a reliable source for your state's overtime law?", options: ["Yes, always", "No, check the state labor department", "Only on weekends", "Only for minors"], answer: 1, why: "Labor law needs an official source." },
      { q: "A bad review complains of cold food. A good reply:", options: ["Offers cash for a better review", "Argues publicly", "Shares the guest's details", "Apologizes, says what you are fixing, invites contact"], answer: 3, why: "Calm, honest replies build trust." },
      { q: "Paying guests only if they leave 5 stars is:", options: ["Required", "Smart marketing", "Banned under the FTC review rule", "Fine"], answer: 2, why: "Rewards tied to positive sentiment are banned." },
      { q: "A good use of a special is to:", options: ["Use extra stock before it spoils", "Hide old food", "Raise all prices", "Skip allergen checks"], answer: 0, why: "Specials cut waste." },
      { q: "What is plate cost?", options: ["The price of dishes", "The cost of ingredients in one serving", "Rent", "A tip"], answer: 1, why: "It is ingredient cost per plate." },
      { q: "Before posting a special you should:", options: ["Skip pricing", "Check allergens and add it to the prep list", "Use a stock photo of another dish", "Promise it is organic"], answer: 1, why: "Safety and planning come first." },
      { q: "Food cost percentage is:", options: ["Plate cost divided by menu price, times 100", "Rent divided by sales", "Tips times staff", "Price plus tax"], answer: 0, why: "It shows how much of the price is ingredients." }
    ]
  }
};
