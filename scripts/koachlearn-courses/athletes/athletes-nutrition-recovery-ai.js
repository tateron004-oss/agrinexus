"use strict";

// Koach Learn course: Athletes -> "Nutrition and Recovery with AI". Skill-building course: by the end the student can DO the skill in `outcome`.
// General education only: every health lesson sends the student to a coach, athletic trainer, doctor or registered dietitian. No doses, calorie targets or medical advice.
// Shape: scripts/koachlearn-courses/README.md. Model: re-entry/reentry-ai-digital-confidence.js.

module.exports = {
  id: "athletes-nutrition-recovery-ai",
  category: "Athletes",
  name: "Nutrition and Recovery with AI",
  skills: "Planning balanced meals around training, Building a game-day food and water routine, Using AI for grocery lists and meal ideas, Tracking sleep and recovery habits, Knowing when to see a professional",
  outcome: "use an AI assistant to plan a week of simple, balanced meals and a recovery routine around your training schedule, then check the plan with a registered dietitian, athletic trainer or doctor.",
  about: [
    "This course is for athletes and coaches who want to understand the basics of eating, drinking and recovering well, and to use AI to make planning easier. It is general education, not medical or nutrition advice.",
    "Every body is different. Your age, sport, health and goals change what you need, which is why the plan you build here is a draft to check with a registered dietitian, your athletic trainer or your doctor.",
    "Each lesson is about five minutes with a \"Try it now\" task. A knowledge check closes each chapter, and a 20-question quiz closes the course."
  ],
  finalTask: "Use an AI assistant to draft a one-week meal and recovery plan around your real practice and game schedule: balanced plates, a game-day food and water routine, a grocery list on your budget, and a sleep routine. Take out any private health details, then show the plan to a registered dietitian, athletic trainer or doctor and change it based on what they say.",
  chapters: [
    {
      name: "Chapter 1: Fueling around training",
      lessons: [
        {
          title: "The balanced athlete plate",
          minutes: 5,
          goal: "Build a balanced plate from foods you already eat.",
          text: [
            "Food gives you energy to train and the building blocks to recover. A simple way to think about a meal is a plate with three main parts: carbohydrates for energy (rice, pasta, bread, potatoes, fruit), protein to help muscles repair (eggs, beans, fish, chicken, yogurt), and fruits and vegetables for vitamins and minerals.",
            "Athletes who train hard often need more energy than non-athletes, and harder days usually call for more carbohydrates. How much you need depends on your body, sport and training, which is why a registered dietitian is the right person for your exact amounts.",
            "Skipping meals or cutting whole food groups to look a certain way can hurt your performance and health. If food, weight or body image is stressing you, talk to someone you trust and your athletic trainer or doctor."
          ],
          words: [["Carbohydrates", "foods like rice, bread, pasta, potatoes and fruit that give fast energy."], ["Protein", "foods like eggs, beans, fish, meat and yogurt that help the body repair muscle."], ["Registered dietitian (RD or RDN)", "a licensed food and nutrition professional."]],
          slides: [
            { title: "Three parts of the plate", bullets: ["Carbohydrates: energy", "Protein: repair", "Fruits and vegetables: vitamins and minerals"] },
            { title: "Hard days, more fuel", bullets: ["Training days often need more energy", "Exact amounts: ask a registered dietitian"] },
            { title: "Watch out for", bullets: ["Skipping meals", "Cutting whole food groups", "Food or body stress: talk to someone"] }
          ],
          sources: [{ name: "Academy of Nutrition and Dietetics: Find a Nutrition Expert", url: "https://www.eatright.org/find-a-nutrition-expert" }],
          tryIt: "Write down what you ate yesterday for one meal. Mark the carbohydrate, the protein and the fruit or vegetable. What could you add to make it a balanced plate?",
          youCanNow: "build a balanced plate with carbohydrates, protein and fruits and vegetables."
        },
        {
          title: "Game-day food and water routine",
          minutes: 5,
          goal: "Plan what and when you eat and drink on a game or hard-practice day.",
          text: [
            "Timing matters. Many athletes eat a normal balanced meal a few hours before a game and a small, easy snack closer to start time, like fruit or crackers. Foods you are used to are best on game day: do not try something new.",
            "Water matters all day, not just during the game. Bring a water bottle, drink regularly, and drink more in heat. Thirst, dark urine, headache and cramps can be signs you need more fluid. Feeling dizzy, confused or very sick in the heat is an emergency: stop and tell your coach or athletic trainer right away.",
            "After hard training, eating a meal or snack with carbohydrates and protein helps recovery. Your athletic trainer or dietitian can tell you what works for your body and sport."
          ],
          steps: ["Write your game or practice start time.", "Plan a normal balanced meal a few hours before.", "Plan a small familiar snack closer to start.", "Plan your water bottle for the whole day.", "Plan a recovery meal or snack after."],
          words: [["Hydration", "keeping enough water in your body."], ["Recovery meal", "food after training that helps your body refill energy and repair."]],
          slides: [
            { title: "Before the game", bullets: ["Balanced meal a few hours before", "Small familiar snack closer to start", "Nothing new on game day"] },
            { title: "Water all day", bullets: ["Carry a bottle", "More in heat", "Dizzy or confused in heat? Stop and tell staff now"] },
            { title: "After", bullets: ["Carbohydrates and protein", "Ask your athletic trainer what works for you"] }
          ],
          tryIt: "Write a game-day timeline for your next game or hard practice: meal, snack, water, and recovery food, with times.",
          youCanNow: "plan a simple game-day food and water routine."
        },
        {
          title: "Using AI for meal ideas and grocery lists",
          minutes: 5,
          goal: "Use an AI assistant to make a week of meal ideas and a grocery list on your budget.",
          text: [
            "AI assistants are good at meal ideas, recipes and grocery lists. Give them your schedule, budget, kitchen and what you like. Example: \"I'm a college athlete with a dorm microwave and a $50 weekly food budget. Practice is 3-6 pm. Give me 7 days of simple balanced meals and a grocery list.\"",
            "Tell it about food allergies or religious or cultural food rules in general words, so ideas fit you. Do not paste medical records or medications.",
            "Do not ask AI for calorie targets, weight-loss plans or supplement doses. Those depend on your health, and the answers can be wrong or unsafe. That is a registered dietitian's or doctor's job."
          ],
          steps: ["Give your schedule, budget and kitchen.", "Say what foods you like and any foods you avoid.", "Ask for balanced meal ideas for 7 days.", "Ask for a grocery list grouped by store section.", "Check prices at your store and adjust."],
          words: [["Budget", "the amount of money you plan to spend."], ["Allergy", "when your body reacts badly to a food; can be serious."]],
          slides: [
            { title: "Give AI the details", bullets: ["Schedule and budget", "Kitchen: dorm, home, none", "Foods you like and avoid"] },
            { title: "Ask for", bullets: ["7 days of balanced meal ideas", "Grocery list by store section"] },
            { title: "Do NOT ask AI for", bullets: ["Calorie targets or weight-loss plans", "Supplement doses", "Medical advice"] }
          ],
          tryIt: "Ask an AI assistant for seven days of simple balanced meals and a grocery list for your real budget and kitchen. Check three prices at your store.",
          youCanNow: "use AI to get meal ideas and a grocery list that fit your budget and schedule."
        }
      ],
      check: {
        title: "Knowledge Check 1: Fueling around training",
        questions: [
          { q: "What is the main job of carbohydrates for athletes?", options: ["Muscle repair only", "Vitamins only", "Energy", "Nothing"], answer: 2, why: "Carbohydrates are the body's main fast energy source." },
          { q: "Who is the right person for your exact food amounts?", options: ["A registered dietitian", "An AI assistant", "A social media influencer", "A teammate"], answer: 0, why: "Registered dietitians give personal nutrition advice." },
          { q: "On game day, which snack is best?", options: ["A new energy drink you've never tried", "Nothing at all all day", "A huge greasy meal right before", "A small familiar snack like fruit"], answer: 3, why: "Familiar, easy foods are safest on game day." },
          { q: "A teammate is dizzy and confused at practice in the heat. What do you do?", options: ["Tell them to push through", "Tell the coach or athletic trainer right away", "Wait until practice ends", "Give them an energy drink and leave"], answer: 1, why: "Those signs can be an emergency; staff must act now." },
          { q: "Which request should NOT go to an AI assistant?", options: ["A grocery list on a $50 budget", "A supplement dose for you", "Microwave meal ideas", "Recipes with beans"], answer: 1, why: "Doses depend on your health; ask a dietitian or doctor." }
        ]
      }
    },
    {
      name: "Chapter 2: Recovery habits",
      lessons: [
        {
          title: "Sleep: your best recovery tool",
          minutes: 5,
          goal: "Build a simple sleep routine that fits your schedule.",
          text: [
            "Sleep is when your body repairs and your brain stores what you practiced. Teens generally need more sleep than adults, and many athletes do not get enough.",
            "A sleep routine helps: a regular bedtime and wake time, screens off before bed, a cool dark room, and caffeine early in the day only. AI can help you build a bedtime plan around early practices or late games.",
            "If you often cannot sleep, snore loudly, or feel exhausted even after sleeping, talk to your doctor."
          ],
          steps: ["Pick a regular wake time.", "Count back to a bedtime that gives you enough sleep.", "Set a screens-off time before bed.", "Keep caffeine early in the day.", "Log your sleep hours for a week."],
          words: [["Sleep routine", "the same steps at the same time each night to help you fall asleep."], ["Caffeine", "a stimulant in coffee, tea, soda and energy drinks that can keep you awake."]],
          slides: [
            { title: "Why sleep matters", bullets: ["Body repairs", "Brain stores skills", "Teens need more than adults"] },
            { title: "A simple routine", bullets: ["Same bedtime and wake time", "Screens off before bed", "Cool, dark room", "Caffeine early only"] },
            { title: "See your doctor if", bullets: ["You often cannot sleep", "You snore loudly", "You are always exhausted"] }
          ],
          tryIt: "Ask an AI assistant: \"I have practice at 6 am on weekdays and games end at 9 pm Fridays. Help me make a simple sleep routine.\" Pick your bedtime and log your sleep for the next three nights.",
          youCanNow: "build and track a simple sleep routine."
        },
        {
          title: "Rest days, soreness and pain",
          minutes: 5,
          goal: "Tell normal training soreness from pain that needs a professional.",
          text: [
            "Rest days are part of training, not a break from it. Your coach plans them so your body can adapt and get stronger.",
            "Normal soreness feels like dull, general muscle tiredness a day or two after hard training, and it slowly gets better. Pain that is sharp, in a joint or bone, makes you limp, causes swelling, or gets worse is different: stop and tell your athletic trainer.",
            "Head injuries need special care. If you or a teammate take a hit and have a headache, dizziness, confusion or feel \"off\", stop playing and tell your coach or athletic trainer. The CDC's free HEADS UP training explains the signs."
          ],
          steps: ["Notice where and how it hurts.", "Dull, general and improving: normal soreness.", "Sharp, in a joint, swelling, limping or getting worse: tell your athletic trainer.", "Any head hit with symptoms: stop and tell staff."],
          words: [["Soreness", "dull muscle tiredness after hard training that fades in a day or two."], ["Concussion", "a brain injury from a hit or jolt to the head or body."]],
          slides: [
            { title: "Rest days are training", bullets: ["Your body adapts on rest days", "Follow the plan your coach sets"] },
            { title: "Soreness vs pain", bullets: ["Soreness: dull, general, fading", "Pain: sharp, joint, swelling, limping, worsening"] },
            { title: "Head hit?", bullets: ["Headache, dizzy, confused, \"off\"", "Stop playing and tell staff", "Learn signs: CDC HEADS UP"] }
          ],
          sources: [{ name: "CDC: HEADS UP concussion training", url: "https://www.cdc.gov/heads-up/index.html" }],
          tryIt: "Write two lists: signs of normal soreness and signs of pain to report. Then write who you would tell on your team and how you would reach them.",
          youCanNow: "tell normal soreness from pain that needs your athletic trainer, and know what to do after a head hit."
        },
        {
          title: "Building your recovery plan",
          minutes: 5,
          goal: "Put food, water and sleep into one weekly recovery plan and check it with a professional.",
          text: [
            "Now put it together. Your weekly plan has meals around practice, a game-day routine, a water habit and a sleep routine.",
            "Ask an AI assistant to combine them: \"Here is my practice and game schedule, my budget and my kitchen. Make a one-week table with meals, snacks, water reminders and bedtimes.\" Remove any private health details first.",
            "Then take it to a registered dietitian, your athletic trainer or your doctor. Ask: \"Does this fit my body and sport? What would you change?\" The plan they help you fix is the one to follow. A school, team or student health center may be able to connect you with one."
          ],
          steps: ["Collect your schedule, budget and kitchen info.", "Ask AI for a one-week table: meals, snacks, water, bedtimes.", "Remove private health details.", "Show it to a dietitian, athletic trainer or doctor.", "Update it with their advice."],
          words: [["Recovery plan", "your weekly routine for food, water, sleep and rest that helps your body bounce back."]],
          slides: [
            { title: "Your recovery plan", bullets: ["Meals around practice", "Game-day routine", "Water habit", "Sleep routine"] },
            { title: "AI drafts it", bullets: ["One-week table", "No private health details"] },
            { title: "A professional checks it", bullets: ["Dietitian, athletic trainer or doctor", "\"What would you change?\"", "Follow the fixed plan"] }
          ],
          sources: [{ name: "Academy of Nutrition and Dietetics: Find a Nutrition Expert", url: "https://www.eatright.org/find-a-nutrition-expert" }],
          tryIt: "Final task: use an AI assistant to draft your one-week meal and recovery plan, take out private health details, and show it to a dietitian, athletic trainer or doctor.",
          youCanNow: "build a weekly food, water and sleep plan with AI and get it checked by a professional."
        }
      ],
      check: {
        title: "Knowledge Check 2: Recovery habits",
        questions: [
          { q: "Why does sleep matter for athletes?", options: ["It doesn't", "It replaces practice", "Only for weight", "The body repairs and the brain stores skills"], answer: 3, why: "Sleep is when repair and learning happen." },
          { q: "Which is part of a good sleep routine?", options: ["Screens off before bed", "Energy drinks at night", "Different bedtime every night", "Phone in bed until you fall asleep"], answer: 0, why: "Screens off before bed helps you fall asleep." },
          { q: "Your knee has sharp pain and swelling after practice. What do you do?", options: ["Ignore it", "Ask AI for a treatment", "Tell your athletic trainer", "Run more to loosen it"], answer: 2, why: "Sharp pain and swelling need a professional." },
          { q: "A teammate feels dizzy and \"off\" after a head hit. What should happen?", options: ["Keep playing", "Take a short break and go back in", "Ask an app", "Stop playing and tell staff"], answer: 3, why: "Possible concussion: stop and tell a coach or athletic trainer." },
          { q: "Who should check your AI-drafted recovery plan?", options: ["A random comment section", "A dietitian, athletic trainer or doctor", "The AI again", "Nobody"], answer: 1, why: "A professional can fit the plan to your body and sport." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Nutrition and Recovery with AI",
    questions: [
      { q: "Which food is mainly a protein?", options: ["Rice", "Apples", "Eggs", "Bread"], answer: 2, why: "Eggs are a protein food." },
      { q: "The three main parts of a balanced plate are:", options: ["Carbohydrates, protein, fruits and vegetables", "Candy, soda, chips", "Only protein", "Only vegetables"], answer: 0, why: "Those three parts cover energy, repair and vitamins." },
      { q: "Hard training days usually call for:", options: ["More fuel", "Skipping meals", "No water", "Only snacks"], answer: 0, why: "More training usually means more energy needed." },
      { q: "Food or body image is stressing you. You should:", options: ["Stop eating", "Hide it", "Talk to someone you trust and your athletic trainer or doctor", "Ask AI for a diet"], answer: 2, why: "These worries deserve real support." },
      { q: "On game day, try:", options: ["A brand-new food", "Foods you are used to", "Nothing all day", "A new supplement"], answer: 1, why: "Familiar foods are safest." },
      { q: "When should you drink water?", options: ["Only in the game", "Never before games", "Only when told", "Throughout the day, more in heat"], answer: 3, why: "Hydration is an all-day habit." },
      { q: "Which can be a sign you need more fluid?", options: ["Feeling rested", "Clear thinking", "Dark urine and headache", "Good sleep"], answer: 2, why: "Dark urine, headache and cramps can signal low fluids." },
      { q: "After hard training, a recovery snack has:", options: ["Only water", "Only candy", "Nothing", "Carbohydrates and protein"], answer: 3, why: "Carbohydrates refill energy; protein helps repair." },
      { q: "What should you give AI to get useful meal ideas?", options: ["Your schedule, budget and kitchen", "Your medical records", "Your password", "Your bank card"], answer: 0, why: "Those details make the ideas fit your life." },
      { q: "Which should you NOT ask AI for?", options: ["Microwave recipes", "A calorie target for weight loss", "A grocery list", "Meal ideas with beans"], answer: 1, why: "Calorie targets depend on your health; ask a dietitian." },
      { q: "How should you mention a food allergy to AI?", options: ["By pasting your medical file", "By typing your doctor's notes", "In general words, like \"no peanuts\"", "Don't mention it"], answer: 2, why: "General words get safe ideas without sharing records." },
      { q: "After AI makes a grocery list, you should:", options: ["Check prices at your store", "Trust the prices", "Buy everything twice", "Post it"], answer: 0, why: "AI can't know your store's real prices." },
      { q: "Supplements are risky because:", options: ["They are always illegal", "They are free", "Coaches sell them", "They are not checked by the FDA before sale and some contain banned substances"], answer: 3, why: "USADA warns about contaminated and mislabeled supplements." },
      { q: "Which helps you fall asleep?", options: ["Caffeine late at night", "A cool, dark room", "Scrolling in bed", "A different bedtime nightly"], answer: 1, why: "A cool, dark room supports sleep." },
      { q: "You are always exhausted even after sleeping. You should:", options: ["Drink more energy drinks", "Talk to your doctor", "Ignore it", "Train harder"], answer: 1, why: "Ongoing exhaustion is a reason to see a doctor." },
      { q: "Rest days are:", options: ["Lazy", "Banned", "Only for injured players", "Part of training"], answer: 3, why: "Your body adapts and gets stronger on rest days." },
      { q: "Which sounds like normal soreness?", options: ["Dull muscle tiredness that fades in a day or two", "Sharp joint pain", "Swelling and limping", "Pain that keeps getting worse"], answer: 0, why: "Normal soreness is dull and fades." },
      { q: "Where can you learn concussion signs for free?", options: ["A random meme", "A sports drink ad", "CDC HEADS UP", "Nowhere"], answer: 2, why: "The CDC offers free HEADS UP training." },
      { q: "Before pasting your plan into AI, remove:", options: ["Practice times", "Your budget", "Your favorite foods", "Private health details"], answer: 3, why: "Health details stay private." },
      { q: "The plan you should follow is:", options: ["The AI's first draft", "The one fixed with a dietitian, athletic trainer or doctor", "An influencer's plan", "Your rival's plan"], answer: 1, why: "A professional fits the plan to you." }
    ]
  }
};
