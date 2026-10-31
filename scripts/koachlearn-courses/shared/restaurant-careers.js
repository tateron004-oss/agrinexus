"use strict";

// Koach Learn course (wave 3, workforce development): "Restaurant Careers: Server, Cook and Kitchen Basics". Listed for Workforce Development, Youth and Re-Entry.
// Goes beyond workforce/workforce-food-handler.js (food safety temperatures, handwashing, allergens list): this course is about the jobs themselves:
// the front and back of house, taking an order, tipped pay, kitchen safety and teen equipment rules, station setup, and a plan to get hired.
// It prepares learners; it grants no certificate. Facts checked on official pages on 30 October 2026 (see each lesson's sources).

module.exports = {
  id: "restaurant-careers",
  category: "Workforce Development",
  name: "Restaurant Careers: Server, Cook and Kitchen Basics",
  skills: "Restaurant jobs and career paths, Taking and repeating back an order, Tipped pay and tip rules, Kitchen safety, Station setup and tickets, A plan to get hired",
  outcome: "pick an entry-level restaurant job that fits you, do its basic tasks the right way (take an order, set up a station, work safely), check that your tipped pay is right, and follow a 30-day plan to get hired.",
  about: [
    "Restaurants hire all year, and many hire people with no experience: young people looking for a first job, adults changing careers, and people coming home from prison. Many cooks, managers and owners started as dishwashers, bussers or hosts.",
    "In this course you will learn the jobs in the front of the house (host, busser, server, bartender) and the back of the house (dishwasher, prep cook, line cook), how to take an order without mistakes, how tipped pay works under federal law, how to stay safe around knives, heat and wet floors, and how to set up a station before a rush.",
    "This course prepares you; it does not give you a license or certificate. It points you to real credentials: a food handler card (from your state or county, or a course such as ServSafe Food Handler from the National Restaurant Association), alcohol server training where your state requires it, ProStart for high school students, and American Culinary Federation (ACF) certification for cooks later on.",
    "Each lesson takes about five minutes and ends with a \"Try it now\" task you can do at home with paper and a pen. There is a quick check after each lesson, a knowledge check after each chapter and a 20-question quiz at the end."
  ],
  finalTask: "Make your Restaurant Job Plan on one page: the job you want and two real places to apply, the credential you will get first and its official page, your weekly availability, a shift checklist for that job (setup, during the shift, closing), and a 30-second \"why hire me\" pitch with a date for each step in the next 30 days.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Mixed group: teens and young adults looking for a first job, adults changing careers, people coming home from prison, immigrants and second-language speakers. Most have eaten in restaurants but have not worked in one. Some will work in fast food, some in sit-down restaurants, some in cafeterias or hotels.",
    startingPoint: "Can follow spoken directions, do simple money math and read a short menu. Most do not know restaurant words (front of house, ticket, 86, behind), how tipped pay works, which kitchen tasks are unsafe or illegal for teens, or how to set up a station.",
    gap: "Restaurants hire fast, but new workers who do not know the basics make order mistakes, get hurt by knives, burns and falls, or quit in the first weeks. Knowing the jobs, the safety habits and the pay rules helps learners get hired, stay hired and move up, and protects them from being underpaid.",
    constraints: [
      "Reading level: plain words and short sentences (about grade 6)",
      "Devices: a phone or library computer; every practice works on paper",
      "Time: 4 to 6 minute lessons around school, work or appointments",
      "Hands-on knife, fryer and equipment skills are learned on the job or in a class with a qualified trainer, not from this course",
      "Pay and teen work rules differ by state; learners check their own state labor office",
      "Some learners have records; the course points to fair-chance employers and does not promise any job"
    ],
    prerequisites: "None. Learners who will handle food should also take \"Food Handler and ServSafe Exam Preparation\"."
  },
  // ---- ADDIE: Design ----
  objectives: [
    { id: "O1", condition: "Given a list of restaurant jobs", action: "match each entry-level job to its main duties and the first credential or training that helps you get it", standard: "getting at least 4 of 5 right" },
    { id: "O2", condition: "Given a table of guests in a role play", action: "take an order in the right order of service, ask about allergies and repeat the order back", standard: "with no missing items or changes" },
    { id: "O3", condition: "Given a sample week of hours and tips", action: "check that tipped pay meets the federal minimum and that no manager took a share of tips", standard: "using the federal rules and naming where to check your state's rule" },
    { id: "O4", condition: "Given a kitchen scene with a hazard", action: "name the hazard and the safe action for knives, hot surfaces, wet floors, heavy lifts or equipment a teen may not use", standard: "for every hazard in the scene" },
    { id: "O5", condition: "Given a prep list and a set of tickets", action: "set up a station with mise en place and call out tickets and kitchen moves clearly", standard: "with every item ready before service and no missed calls" },
    { id: "O6", condition: "Using your own goals and schedule", action: "write a 30-day restaurant job plan with a target job, a credential, availability and a pitch", standard: "with a date and an official link for each step" }
  ],
  chapters: [
    {
      name: "Chapter 1: The front of the house",
      lessons: [
        {
          title: "Restaurant jobs and the path up",
          objectives: ["O1"],
          minutes: 5,
          goal: "Match entry-level restaurant jobs to their duties and the credentials that help you get them.",
          text: [
            "A restaurant has two sides. The front of the house (FOH) is where guests are: the host greets and seats them, the busser clears and resets tables, the server takes orders and brings food, the food runner carries plates, and the bartender makes drinks. The back of the house (BOH) is the kitchen: the dishwasher keeps dishes and tools clean, the prep cook cuts and portions food before service, and the line cook cooks orders during service.",
            "Many people start as a dishwasher, busser or host and move up: dishwasher to prep cook to line cook to sous chef; busser or host to server to shift lead to manager. Showing up on time and learning every station is how you move up.",
            "Credentials help. Many states or counties require a food handler card; a course such as ServSafe Food Handler from the National Restaurant Association is one common way to train for it. Servers who pour alcohol may need state alcohol server training such as ServSafe Alcohol. High school students can join ProStart, a two-year culinary and restaurant management program. Later, cooks can earn American Culinary Federation (ACF) certifications such as Certified Fundamentals Cook. The Restaurant Ready program, run with community groups, trains people not connected to school or work.",
            "This course prepares you; it does not give you any card or certificate. Always check what your state, county and employer require."
          ],
          words: [["Front of the house (FOH)", "the part of a restaurant where guests are: host stand, dining room, bar."], ["Back of the house (BOH)", "the kitchen, dish area and storage."], ["Food handler card", "a card showing you finished approved food safety training; required in some states and counties."], ["ProStart", "a two-year high school program in culinary arts and restaurant management."], ["ACF", "the American Culinary Federation, which certifies cooks and chefs in the United States."]],
          slides: [
            { title: "Front of the house", bullets: ["Host: greets and seats guests", "Busser: clears and resets tables", "Server and runner: orders and plates", "Bartender: drinks"] },
            { title: "Back of the house", bullets: ["Dishwasher: clean dishes and tools", "Prep cook: cuts and portions before service", "Line cook: cooks orders during service"] },
            { title: "The path up", bullets: ["Dishwasher to prep cook to line cook to sous chef", "Busser or host to server to shift lead to manager"] },
            { title: "Credentials that help", bullets: ["Food handler card (state or county rule)", "Alcohol server training where required", "ProStart (high school), ACF for cooks later"] }
          ],
          sources: [
            { name: "National Restaurant Association: ServSafe Alcohol and ServSafe Food Handler", url: "https://www.servsafe.com/ServSafe-Alcohol" },
            { name: "National Restaurant Association Educational Foundation: ProStart", url: "https://chooserestaurants.org/prostart" },
            { name: "National Restaurant Association Educational Foundation: Restaurant Ready", url: "https://chooserestaurants.org/programs/restaurant-ready" },
            { name: "American Culinary Federation: certification", url: "https://www.acfchefs.org/ACF/Certify/ACF/Certify/" }
          ],
          tryIt: "Fold a paper in half. Write FOH on one side and BOH on the other. List every job from this lesson on the right side with one duty each. Circle the job you would like to start in and write the credential that would help you get it.",
          youCanNow: "name the jobs in the front and back of a restaurant, say what each does, and name a credential that helps you get hired.",
          quickCheck: [
            { objective: "O1", q: "Which job is in the back of the house?", options: ["Host", "Server", "Prep cook", "Bartender"], answer: 2, why: "The prep cook works in the kitchen; the others work where the guests are." },
            { objective: "O1", q: "You want to serve drinks with alcohol. Which training might your state require?", options: ["Alcohol server training such as ServSafe Alcohol", "A commercial driver's license", "A forklift card", "No training is ever required"], answer: 0, why: "Many states have alcohol server training rules; check your state's page." }
          ]
        },
        {
          title: "Taking an order the right way",
          objectives: ["O2"],
          minutes: 6,
          goal: "Take a table's order, ask about allergies and repeat the order back.",
          text: [
            "Most mistakes happen when an order is taken. A server who follows the same steps every time makes fewer mistakes and earns better tips.",
            "Greet the table within a minute or two, say your name, and offer drinks. When they are ready, ask: \"Does anyone have a food allergy I should know about?\" Write the order by seat number, so the runner knows who gets which plate. Write every change, such as no onions or dressing on the side.",
            "Repeat the order back to the table before you leave. Then enter it in the point-of-sale system (POS) or write the ticket clearly. If a guest has an allergy, mark it on the ticket and tell the kitchen or manager in person too. Never guess whether a dish is safe; ask the kitchen. If a guest has trouble breathing or a bad reaction, call 911 (or your local emergency number) and get the manager.",
            "Check back a few minutes after the food arrives, clear plates when everyone is done, and bring the check when the table asks or is clearly finished."
          ],
          steps: ["Greet the table, say your name and offer drinks.", "Ask about food allergies.", "Write the order by seat number, with every change.", "Repeat the order back.", "Enter it in the POS or write a clear ticket; mark any allergy and tell the kitchen in person.", "Check back after the food arrives; clear and bring the check."],
          words: [["Steps of service", "the order of tasks a server follows for every table."], ["Seat number", "a number for each chair, so the right plate goes to the right guest."], ["POS", "point-of-sale system: the screen where orders are entered and paid."], ["Ticket", "the printed or on-screen order the kitchen cooks from."], ["Modifier", "a change to a dish, like no onions or extra sauce."]],
          slides: [
            { title: "Greet and ask", bullets: ["Greet within a minute or two; say your name", "Offer drinks", "Ask: \"Does anyone have a food allergy?\""] },
            { title: "Write it right", bullets: ["Write by seat number", "Write every change (modifier)", "Repeat the order back to the table"] },
            { title: "Allergies", bullets: ["Mark it on the ticket", "Tell the kitchen or manager in person", "Never guess; a bad reaction means call 911"] },
            { title: "Finish the table", bullets: ["Check back after the food arrives", "Clear when everyone is done", "Bring the check"] }
          ],
          tryIt: "Role play with a friend or family member (or play both parts out loud). Take an order for three people from any menu, by seat number, with at least one change and one allergy. Repeat it back. Then check your paper: is every item and change there?",
          youCanNow: "take an order step by step, ask about allergies, write it by seat number and repeat it back.",
          quickCheck: [
            { objective: "O2", q: "Why write an order by seat number?", options: ["It makes the bill bigger", "So the right plate goes to the right guest", "Because the POS needs a phone number", "So you can skip repeating it back"], answer: 1, why: "Seat numbers let anyone carrying the food put each plate in front of the right person." },
            { objective: "O2", q: "A guest says she is allergic to peanuts. What do you do?", options: ["Tell her the food is probably fine", "Write it down and hope the cook sees it", "Pick a dish for her yourself", "Mark it on the ticket and tell the kitchen in person"], answer: 3, why: "An allergy is marked and said out loud to the kitchen; you never guess whether a dish is safe." }
          ]
        },
        {
          title: "Your pay: hourly wage, tips and the tip credit",
          objectives: ["O3"],
          minutes: 6,
          goal: "Check that a week of tipped pay meets the federal minimum and that tips were handled legally.",
          text: [
            "Under federal law (the Fair Labor Standards Act), an employer may pay a tipped employee a cash wage as low as $2.13 an hour and count tips toward the rest of the $7.25 federal minimum wage. This is called the tip credit. A tipped employee is someone who regularly gets more than $30 a month in tips.",
            "The rule: your cash wage plus your tips must reach at least $7.25 for every hour you work in the week. If they do not, your employer must pay the difference. Many states set a higher minimum wage, and some, such as California, Minnesota and Washington, require the full state minimum wage before tips. Check your state on the US Department of Labor's tipped wage page.",
            "Your tips are yours. An employer may not keep any part of them. A tip pool, where tips are shared among workers, is allowed, but managers and supervisors may not take tips from the pool.",
            "The IRS says to keep a daily record of your tips and to report cash tips of $20 or more in a month to your employer by the 10th of the next month. Tips are taxed income, so reporting them protects you."
          ],
          steps: ["Add up the hours you worked this week.", "Multiply hours by $7.25 (or your state's minimum, if higher).", "Add your cash wage and your tips for the week.", "If the total is less than the minimum, the employer owes the difference.", "Check your state's rule on the US Department of Labor tipped wage page."],
          words: [["Tip credit", "the part of the minimum wage an employer may cover with tips (federal: up to $5.12 an hour)."], ["Cash wage", "the hourly pay your employer pays you directly, before tips."], ["Tip pool", "a system where tips are put together and shared among workers."], ["FLSA", "the Fair Labor Standards Act, the federal law on minimum wage, overtime and child labor."]],
          slides: [
            { title: "The federal tip credit", bullets: ["Cash wage can be as low as $2.13 an hour", "Tips can count toward the $7.25 minimum", "Your state may require more"] },
            { title: "Do the check", bullets: ["Hours x $7.25 = the least you must get", "Cash wage + tips must reach it", "If not, the employer pays the difference"] },
            { title: "Your tips are yours", bullets: ["The employer may not keep any part", "Tip pools are allowed", "Managers may not take from the pool"] },
            { title: "Keep a record", bullets: ["Write your tips every day", "Report $20 or more a month to your employer", "By the 10th of the next month (IRS)"] }
          ],
          sources: [
            { name: "US Department of Labor: Fact Sheet 15, Tipped Employees under the FLSA", url: "https://www.dol.gov/agencies/whd/fact-sheets/15-tipped-employees-flsa" },
            { name: "US Department of Labor: Minimum wages for tipped employees by state", url: "https://www.dol.gov/agencies/whd/state/minimum-wage/tipped" },
            { name: "IRS: Tip recordkeeping and reporting", url: "https://www.irs.gov/businesses/small-businesses-self-employed/tip-recordkeeping-and-reporting" }
          ],
          tryIt: "Practice only, with made-up numbers. Sam worked 20 hours, was paid a $2.13 cash wage and got $70 in tips. Work it out: 20 x $7.25 = $145. Cash wage 20 x $2.13 = $42.60. $42.60 + $70 = $112.60. Is that enough? How much does the employer owe? (Answer: $32.40.) Then look up your own state on the Department of Labor tipped wage page and write its rule.",
          youCanNow: "check that a week of tipped pay reaches the minimum wage, spot an illegal tip practice, and keep a record of your tips.",
          quickCheck: [
            { objective: "O3", q: "Under federal law, what must a tipped worker's cash wage plus tips reach for each hour?", options: ["At least $7.25", "At least $2.13", "At least $30", "Whatever the manager decides"], answer: 0, why: "Cash wage plus tips must reach the $7.25 federal minimum, or the employer pays the difference." },
            { objective: "O3", q: "Your manager takes a share of the tip pool every night. What is true?", options: ["That is normal and legal", "Only on weekends is it legal", "Managers and supervisors may not take tips from a tip pool", "It is legal if the manager also busses tables"], answer: 2, why: "The FLSA bars managers and supervisors from receiving tips from a tip pool." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: The front of the house",
        questions: [
          { objective: "O1", q: "Which job usually cooks guests' orders during service?", options: ["Host", "Line cook", "Busser", "Food runner"], answer: 1, why: "Line cooks cook orders on the line during service." },
          { objective: "O1", q: "A high school student wants restaurant training with mentors and competitions. Which program fits?", options: ["A CDL course", "The GED", "Forklift training", "ProStart"], answer: 3, why: "ProStart is a two-year high school program in culinary arts and restaurant management." },
          { objective: "O2", q: "What do you do right after writing a table's order?", options: ["Repeat the order back to the table", "Bring the check", "Clear the plates", "Seat the next guests"], answer: 0, why: "Repeating it back catches mistakes before the kitchen starts cooking." },
          { objective: "O2", q: "A guest is having trouble breathing after eating. What do you do first?", options: ["Bring water and wait", "Ask the cook what was in the dish", "Call 911 (or your local emergency number) and get the manager", "Offer a free dessert"], answer: 2, why: "A bad allergic reaction is an emergency; call for help right away." },
          { objective: "O3", q: "You worked 10 hours at a $2.13 cash wage and got $20 in tips. Under federal rules, does the employer owe more?", options: ["No, $20 in tips is enough", "Yes; $21.30 + $20 = $41.30, which is less than $72.50", "No, tips never count", "Yes, but only if you ask in writing"], answer: 1, why: "10 hours x $7.25 = $72.50, so the employer must make up the $31.20 difference." }
        ]
      }
    },
    {
      name: "Chapter 2: Kitchen basics and getting hired",
      lessons: [
        {
          title: "Kitchen safety: knives, heat, floors and teen rules",
          objectives: ["O4"],
          minutes: 6,
          goal: "Name common kitchen hazards and the safe action for each.",
          text: [
            "OSHA's young worker restaurant guide lists the main kitchen dangers: cuts from knives and machines, burns from fryers, grills and hot liquids, slips and falls on wet floors, strains from heavy lifting, and electrical hazards. Your employer must give you a safe workplace and train you.",
            "Knives: use a sharp knife on a cutting board with a damp towel under it so it does not slide. Curl the fingers of your guide hand. Never try to catch a falling knife. Carry it point down at your side and say \"knife\" or \"sharp\" as you walk. Never leave a knife in a sink of water. Burns: say \"hot\" or \"hot behind\" when carrying anything hot, use dry towels or mitts (a wet towel lets heat through), and keep pan handles turned in. Floors: wear closed, slip-resistant shoes and clean up spills right away or put out a wet floor sign. Lifting: bend your knees, keep the load close, and ask for help with heavy boxes.",
            "Teens: federal child labor rules limit kitchen work. At 14 and 15 you may not bake, cook over an open flame, use most fryers (only ones that raise and lower the baskets by themselves), or use power-driven slicers, grinders, processors or mixers. At 16 and 17 you still may not use, clean or set up meat slicers, meat grinders or commercial mixers. 14 and 15 year olds also have limits on hours. Your state may have stricter rules.",
            "Knife skills, fryer use and equipment are learned in person from a trained cook or instructor. If you are hurt or see a danger, tell your manager right away."
          ],
          steps: ["Look for the hazard: blade, heat, water on the floor, heavy load, machine.", "Use the safe habit: guard hand, dry towel, call out, clean the spill, lift with your legs.", "If you are under 18, check if the task or machine is allowed for your age.", "Tell a manager about any danger or injury."],
          words: [["OSHA", "the Occupational Safety and Health Administration, the federal agency for workplace safety."], ["Guide hand", "the hand that holds the food while the other hand cuts; fingertips curled in."], ["Slip-resistant shoes", "closed work shoes with soles that grip wet or greasy floors."], ["Child labor rules", "laws on which jobs and hours are allowed for workers under 18."]],
          slides: [
            { title: "Main kitchen hazards (OSHA)", bullets: ["Cuts from knives and machines", "Burns from fryers, grills, hot liquids", "Slips, falls and strains from lifting"] },
            { title: "Knife and burn habits", bullets: ["Curl your guide hand; never catch a falling knife", "Say \"knife\", \"hot\", \"behind\" as you move", "Dry towels or mitts; handles turned in"] },
            { title: "Floors and lifting", bullets: ["Closed, slip-resistant shoes", "Clean spills now or put out a sign", "Bend your knees; ask for help with heavy loads"] },
            { title: "Teen rules (federal)", bullets: ["14-15: no baking, open flame, most fryers, power slicers or mixers", "16-17: no meat slicers, grinders or commercial mixers", "Your state may be stricter"] }
          ],
          sources: [
            { name: "OSHA: Young Worker Safety in Restaurants eTool", url: "https://www.osha.gov/etools/young-workers-restaurant-safety" },
            { name: "US Department of Labor: Fact Sheet 2A, Child labor rules for restaurants", url: "https://www.dol.gov/agencies/whd/fact-sheets/2a-child-labor-restaurants" },
            { name: "US Department of Labor: YouthRules", url: "https://www.dol.gov/agencies/whd/youthrules" }
          ],
          tryIt: "Draw a simple kitchen on paper: a stove, a fryer, a cutting board, a sink and a walk-in cooler. Mark three hazards with an X (for example a spill near the fryer, a knife in the sink, a pan handle sticking out). Next to each X, write the safe action. Then write which tasks a 15-year-old could not do in your drawing.",
          youCanNow: "spot kitchen hazards, use the safe habit for each, and say which kitchen tasks are off-limits for teens.",
          quickCheck: [
            { objective: "O4", q: "A knife slips off the counter. What do you do?", options: ["Catch it by the handle", "Kick it away", "Grab it with a towel", "Step back and let it fall"], answer: 3, why: "Never try to catch a falling knife; step back and pick it up when it has landed." },
            { objective: "O4", q: "A 15-year-old is asked to slice meat on a power slicer. What is true?", options: ["It is fine with gloves on", "Federal rules do not allow it for a 15-year-old", "It is fine on weekends", "It is fine if a friend watches"], answer: 1, why: "Federal child labor rules bar 14 and 15 year olds (and 16 and 17 year olds) from using power-driven meat slicers." }
          ]
        },
        {
          title: "Station setup, tickets and kitchen calls",
          objectives: ["O5"],
          minutes: 5,
          goal: "Set up a station from a prep list and call out tickets and moves clearly.",
          text: [
            "Mise en place (say \"meez on plahs\") is French for \"everything in its place\". Before service, a cook reads the prep list, gets every ingredient, tool and container ready, and sets them up in the same spot every day, so nothing is missing when the rush starts.",
            "During service, orders come in as tickets, printed or on a kitchen display screen. The expediter (expo) or chef calls each ticket out. You answer \"heard\" or \"yes, chef\" so they know you got it. Cook the oldest tickets first, and tell the chef right away if you are running out of something; when an item is gone, it is \"86\".",
            "Kitchens are tight and busy, so people call out their moves: \"behind\" when you walk behind someone, \"corner\" when you turn a blind corner, \"hot\" or \"sharp\" when carrying something dangerous. Clean as you go: wipe your board, put tools back and keep your station neat."
          ],
          steps: ["Read the prep list for your station.", "Gather every ingredient, tool and container on the list.", "Set them up in the same place every time; label and date containers.", "Check the list again before service: nothing missing.", "During service: answer \"heard\" to each call, cook the oldest tickets first, call out your moves, clean as you go."],
          words: [["Mise en place", "French for everything in its place: all ingredients and tools ready before cooking."], ["Prep list", "the list of what must be cut, portioned or made before service."], ["Expo (expediter)", "the person who calls tickets and checks each plate before it goes out."], ["Heard", "what a cook says to show they heard a call."], ["86", "kitchen word for an item that has run out."]],
          slides: [
            { title: "Mise en place", bullets: ["Everything in its place, before service", "Read the prep list; gather it all", "Same spot every day; label and date"] },
            { title: "Tickets", bullets: ["Expo calls the ticket", "Answer \"heard\"", "Oldest tickets first", "Running out? Tell the chef: it may be 86"] },
            { title: "Call your moves", bullets: ["\"Behind\" when you pass behind someone", "\"Corner\" at a blind corner", "\"Hot\" and \"sharp\" when carrying danger"] },
            { title: "Clean as you go", bullets: ["Wipe your board", "Put tools back", "A neat station is a fast station"] }
          ],
          tryIt: "Pick a simple dish you can make at home, like a sandwich or a salad. Write a prep list for making it for 10 people. Then set up your mise en place on a table: every ingredient and tool you need in its place before you start. Write one thing you would have forgotten without the list.",
          youCanNow: "set up a station with mise en place, answer and work tickets in order, and call out your moves in a busy kitchen.",
          quickCheck: [
            { objective: "O5", q: "What does mise en place mean?", options: ["Cook the newest ticket first", "Clean only at closing time", "Everything in its place, ready before service", "A kind of French sauce"], answer: 2, why: "Mise en place means every ingredient and tool is set up before cooking starts." },
            { objective: "O5", q: "You walk behind a cook carrying a hot pan. What do you say?", options: ["\"Hot behind\"", "\"Heard\"", "\"86\"", "Nothing, to keep quiet"], answer: 0, why: "Calling \"hot behind\" warns the cook so they do not step back into you." }
          ]
        },
        {
          title: "Getting hired: your restaurant job plan",
          objectives: ["O6", "O1"],
          minutes: 6,
          goal: "Write a 30-day plan to get your first restaurant job.",
          text: [
            "Restaurants often hire fast, sometimes the same week. Many ask you to apply online or in person and may invite you to a short interview or a working interview (a stage, said \"stahzh\"), where you work part of a shift so they can see you. Ask whether a working interview is paid; under federal law, time you spend doing productive work for the business is usually work time that must be paid.",
            "Managers care most about three things: when you can work, whether you show up on time, and whether you are friendly and willing to learn. Weekends, nights and holidays are the busiest times, so being open then helps. Apply in person between meal rushes (for example mid-afternoon), not during lunch or dinner.",
            "If you have a record, many restaurants hire people with records. Be honest when asked, keep it short, and talk about what you have done since, such as training, work and your food handler card. Programs like Restaurant Ready and local reentry and workforce centers can connect you with employers.",
            "Your plan pulls it all together: the job you want, the credential you will get first, your availability, a checklist of the shift, and a 30-second pitch."
          ],
          steps: ["Pick a starting job and two real places to apply.", "Pick one credential to get first (for example a food handler card) and find its official page.", "Write your weekly availability.", "Write a shift checklist for the job: setup, during the shift, closing.", "Write a 30-second pitch: who you are, when you can work, why you will be reliable.", "Put a date on each step in the next 30 days."],
          words: [["Working interview (stage)", "a short trial shift so the restaurant can see you work."], ["Availability", "the days and hours you can work each week."], ["Pitch", "a short spoken introduction that says why someone should hire you."], ["Fair-chance employer", "an employer willing to hire people with criminal records."]],
          slides: [
            { title: "How restaurants hire", bullets: ["Apply online or in person", "Short interview or working interview (stage)", "Ask whether the working interview is paid"] },
            { title: "What managers want", bullets: ["Your availability, especially nights and weekends", "On time, every time", "Friendly and willing to learn"] },
            { title: "If you have a record", bullets: ["Many restaurants hire people with records", "Be honest and brief", "Talk about training and work since"] },
            { title: "Your 30-day plan", bullets: ["Job and two places to apply", "First credential and its official page", "Availability, shift checklist, pitch, dates"] }
          ],
          sources: [
            { name: "National Restaurant Association Educational Foundation: Restaurant Ready", url: "https://chooserestaurants.org/programs/restaurant-ready" },
            { name: "US Department of Labor: YouthRules (work permits and hours for teens)", url: "https://www.dol.gov/agencies/whd/youthrules" },
            { name: "US Department of Labor: Fact Sheet 15, Tipped Employees under the FLSA", url: "https://www.dol.gov/agencies/whd/fact-sheets/15-tipped-employees-flsa" }
          ],
          tryIt: "Final task: make your Restaurant Job Plan on one page. Write the job you want and two real places to apply, the credential you will get first and its official page, your weekly availability, a shift checklist (setup, during, closing), and a 30-second pitch. Put a date on each step in the next 30 days. Read the pitch out loud twice.",
          youCanNow: "write a 30-day plan to get a restaurant job and give a short pitch to a hiring manager.",
          quickCheck: [
            { objective: "O6", q: "When is a good time to walk in and apply at a restaurant?", options: ["In the middle of the lunch rush", "Between meal rushes, such as mid-afternoon", "Right at closing time", "During Friday dinner"], answer: 1, why: "Managers have time to talk between rushes, not when guests are waiting." },
            { objective: "O6", q: "Which pitch is strongest?", options: ["\"I need any job.\"", "\"I don't really like mornings.\"", "\"I can work any time, I guess.\"", "\"I'm Jordan. I can work nights and weekends, I have my food handler card, and I'm always on time.\""], answer: 3, why: "It says who you are, your availability, a credential and why you will be reliable." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Kitchen basics and getting hired",
        questions: [
          { objective: "O4", q: "Which towel should you use to grab a hot pan handle?", options: ["A wet towel", "A paper napkin", "A dry towel or oven mitt", "Your apron"], answer: 2, why: "A wet towel lets heat through and can burn you; a dry towel or mitt protects you." },
          { objective: "O4", q: "You see a puddle of oil near the fryer. What do you do?", options: ["Clean it now or put out a wet floor sign and tell someone", "Step over it", "Wait for closing time", "Cover it with a towel and leave it"], answer: 0, why: "Spills cause slips and falls; clean them right away or warn others." },
          { objective: "O5", q: "The expo calls a ticket for your station. What do you answer?", options: ["\"Behind\"", "\"86\"", "\"Corner\"", "\"Heard\""], answer: 3, why: "\"Heard\" tells the expo you got the order." },
          { objective: "O5", q: "You are almost out of chicken in the middle of service. What do you do?", options: ["Say nothing and hope it lasts", "Tell the chef right away so it can be 86'd or prepped", "Use a different meat without asking", "Leave your station to cook more"], answer: 1, why: "The chef needs to know early so servers stop selling it or more can be prepped." },
          { objective: "O6", q: "A restaurant asks you to work three hours as a working interview. What is smart to ask?", options: ["Whether that time is paid", "Whether you can skip the interview", "Whether you can start as manager", "Nothing; never ask questions"], answer: 0, why: "Productive work for the business is usually paid work time under federal law, so it is fair to ask." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Restaurant Careers: Server, Cook and Kitchen Basics",
    questions: [
      { objective: "O1", q: "Which job clears and resets tables?", options: ["Line cook", "Busser", "Prep cook", "Dishwasher"], answer: 1, why: "The busser clears and resets tables in the dining room." },
      { objective: "O1", q: "Which is a common path up in the kitchen?", options: ["Host to bartender to chef", "Line cook to dishwasher to busser", "Dishwasher to prep cook to line cook", "Server to dishwasher to host"], answer: 2, why: "Many cooks start washing dishes, then move to prep and the line." },
      { objective: "O1", q: "Which organization certifies cooks and chefs, with levels such as Certified Fundamentals Cook?", options: ["The American Culinary Federation", "OSHA", "The IRS", "The DMV"], answer: 0, why: "The American Culinary Federation (ACF) grants cook and chef certifications." },
      { objective: "O1", q: "Does finishing this course give you a food handler card?", options: ["Yes, automatically", "Yes, if you pass the quiz", "Only in California", "No; it prepares you, and the card comes from an approved course or your state or county"], answer: 3, why: "The course prepares you; the card comes from approved training your state or county accepts." },
      { objective: "O2", q: "What should a server ask every table before taking the food order?", options: ["How much they plan to tip", "Whether anyone has a food allergy", "Where they work", "Whether they want the check now"], answer: 1, why: "Asking about allergies early keeps guests safe." },
      { objective: "O2", q: "A guest orders a burger with no onions. Where does \"no onions\" go?", options: ["On the ticket as a change, next to that seat number", "Nowhere; you will remember", "Only on the check", "On a sticky note for the host"], answer: 0, why: "Every change is written next to the seat and entered on the ticket so the kitchen sees it." },
      { objective: "O2", q: "Why repeat the order back to the table?", options: ["To make the table wait longer", "It is a law", "To catch mistakes before the kitchen cooks", "To get a bigger tip"], answer: 2, why: "Repeating back catches missing items and wrong changes early." },
      { objective: "O3", q: "What is the federal minimum cash wage for a tipped employee?", options: ["$7.25", "$5.12", "$30.00", "$2.13"], answer: 3, why: "Federal law allows a cash wage as low as $2.13 an hour if tips bring pay up to $7.25." },
      { objective: "O3", q: "Who may NOT take tips from a tip pool?", options: ["Servers", "Bussers", "Managers and supervisors", "Food runners"], answer: 2, why: "The FLSA bars managers and supervisors from tip pool money." },
      { objective: "O3", q: "Where can you check your own state's tipped wage rule?", options: ["The US Department of Labor's tipped wage page or your state labor office", "A social media post", "The restaurant's menu", "A guest at your table"], answer: 0, why: "The Department of Labor lists each state's rule, and the state labor office has the details." },
      { objective: "O3", q: "The IRS says you should keep what kind of tip record?", options: ["A yearly guess", "A daily record of tips", "No record at all", "Only a record of card tips"], answer: 1, why: "The IRS says to keep a daily record of tips and report $20 or more a month to your employer." },
      { objective: "O4", q: "How should you carry a knife through the kitchen?", options: ["Point up, over your head", "In your apron pocket", "Behind your back, quietly", "Point down at your side, saying \"knife\" or \"sharp\""], answer: 3, why: "Point down at your side and a call-out protect you and the people around you." },
      { objective: "O4", q: "What kind of shoes are safest in a kitchen?", options: ["Sandals", "Closed, slip-resistant shoes", "Any shoes you like", "Socks only"], answer: 1, why: "Closed, slip-resistant shoes protect feet and grip wet or greasy floors." },
      { objective: "O4", q: "Which task is a 14 or 15 year old NOT allowed to do under federal rules?", options: ["Run a dishwasher", "Clear tables", "Bake", "Use a toaster"], answer: 2, why: "Federal rules say 14 and 15 year olds may not do any baking." },
      { objective: "O4", q: "You hurt your hand on a slicer. What do you do?", options: ["Tell your manager right away", "Hide it so you are not sent home", "Keep working and tell no one", "Wait until next week"], answer: 0, why: "Reporting right away gets you care and helps stop the danger for others." },
      { objective: "O5", q: "When should mise en place be finished?", options: ["After the rush", "At closing", "Halfway through service", "Before service starts"], answer: 3, why: "Everything is set up before service so nothing is missing in the rush." },
      { objective: "O5", q: "In a kitchen, what does \"86\" mean?", options: ["The table has 86 guests", "The item has run out", "Turn the oven to 86 degrees", "The cook is on break"], answer: 1, why: "86 means an item is gone and cannot be sold." },
      { objective: "O5", q: "Which tickets should you cook first?", options: ["The oldest tickets", "The newest tickets", "The easiest ones", "The biggest ones"], answer: 0, why: "Working in order keeps wait times fair for every table." },
      { objective: "O6", q: "Which part belongs in your 30-day restaurant job plan?", options: ["Your bank password", "A list of restaurants you dislike", "Your weekly availability", "Your Social Security number"], answer: 2, why: "Availability is one of the first things a manager asks about; private numbers never go in a plan." },
      { objective: "O6", q: "A manager asks about your record. What is a good way to answer?", options: ["Make up a story", "Get angry and leave", "Talk for ten minutes about the case", "Be honest and brief, then talk about your training and work since"], answer: 3, why: "A short, honest answer that moves to what you have done since shows you are ready to work." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Pre-Test: What Do You Already Know?", from: [0, 3, 4, 7, 8, 11, 13, 16, 18] },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      { name: "Job and places to apply", objective: "O1", notYet: "No clear job, or no real places named.", meets: "Names one starting job with its main duties and two real places to apply.", exceeds: "Also names the next job up and what it takes to get there." },
      { name: "Credential with official page", objective: "O1", notYet: "No credential, or a link that is not official.", meets: "Names one credential (for example a food handler card) and its official state, county or program page.", exceeds: "Also notes whether the job needs alcohol server training or, for a teen, any state work permit." },
      { name: "Shift checklist", objective: "O5", notYet: "Missing setup, during-shift or closing tasks.", meets: "Lists setup, during-shift and closing tasks for the job, including mise en place or table setup.", exceeds: "Adds the call-outs and allergy steps the job uses." },
      { name: "Safety and pay", objective: "O4", notYet: "No safety habits or pay check in the plan.", meets: "Lists two safety habits for the job and how to check tipped pay or hourly pay against the minimum.", exceeds: "For a teen, names tasks the learner may not do at their age; for a tipped job, names the state rule." },
      { name: "Pitch and dates", objective: "O6", notYet: "No pitch, or no dates on the steps.", meets: "A 30-second pitch with availability and reliability, and a date on each step in the next 30 days.", exceeds: "The pitch was practiced out loud with another person and improved." }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Learners who earn a food handler card or alcohol server training within 30 days (follow-up survey)",
      "Learners who apply to at least two restaurants within 30 days, and who are hired",
      "Learners still employed in food service after 90 days, and partners' reports of fewer first-month injuries and order mistakes"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Paper and pen; a printed or online menu from any local restaurant for the order role play",
      "A phone or library computer to look up the official pages",
      "For Lesson 5: a few kitchen items or pictures to set up a mise en place",
      "About 60 to 75 minutes in total, in short sessions"
    ],
    facilitatorNotes: [
      "Run Lesson 2 as a live role play in pairs, one guest and one server, then switch; score it with the order checklist.",
      "Do not hand learners real knives or run equipment in this course; knife and fryer skills are taught in person by a trained cook or instructor.",
      "For youth groups, review the federal child labor rules and your state's stricter rules and work permit process before Lesson 4.",
      "For re-entry groups, invite a local fair-chance restaurant employer or the state restaurant association's Restaurant Ready partner to Lesson 6.",
      "Tip math in Lesson 3 uses made-up numbers only; check the current federal and state figures on the Department of Labor pages before teaching."
    ]
  }
};
