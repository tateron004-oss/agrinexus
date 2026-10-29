"use strict";

// Koach Learn course: Athletes -> "Introduction to AI in Sports". Skill-building course: by the end the student can DO the skill in `outcome`.
// Shape: scripts/koachlearn-courses/README.md. Model: re-entry/reentry-ai-digital-confidence.js.

module.exports = {
  id: "athletes-intro-ai-sports",
  category: "Athletes",
  name: "Introduction to AI in Sports",
  skills: "Explaining what AI does in sports, Opening a free AI assistant, Writing a clear sports prompt, Checking AI answers, Protecting your private and health information",
  outcome: "use a free AI assistant to build a one-week practice-and-study plan around your team schedule: ask a clear question, improve the answer, check it with your coach, and keep private and health details out of it.",
  about: [
    "This course is for high school, college and early-career athletes, and for coaches who want a simple start with artificial intelligence (AI). No tech background is needed.",
    "You will learn where AI already shows up in sports, from game stats to video breakdowns and recruiting, and how to use a free AI assistant yourself to plan your week.",
    "Each lesson takes about five minutes. Read the lesson, watch the slides, then do the \"Try it now\" task. A knowledge check closes each chapter, and a 20-question quiz closes the course."
  ],
  finalTask: "Use a free AI assistant to build a one-week plan that fits your real practice, game and class schedule. Write a clear prompt, ask for at least two improvements, remove any private or health details, and show the plan to your coach or athletic trainer before you follow it.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "High school and college athletes, and some young adult athletes in club or amateur sport, who juggle practice, games, classes and sometimes work, recruiting or NIL.",
    startingPoint: "Use smartphones, social media and sports apps every day. Many have tried an AI assistant casually but do not write clear prompts, check answers or think about what private and health details they share.",
    gap: "AI can help athletes plan their week, study and stay organized, but wrong answers about training, injuries, nutrition or eligibility can hurt their health or their eligibility, and fake recruiters and brand deals target them. They need to use AI well and check it with their coach, athletic trainer or compliance office.",
    constraints: [
      "Reading level: plain words and short sentences",
      "Devices: a phone or a school or library computer",
      "Time: about 5 minutes per lesson, fitted around practice and classes",
      "Age rules: learners under 18 check the app's age rules and ask a parent or guardian",
      "Health and privacy: no injury reports, medications, passwords or ID numbers in prompts; training, health and eligibility advice is checked with the right professional"
    ],
    prerequisites: "None."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Given examples of technology in sports", action: "identify where AI is used in sports and what it cannot do for you", standard: "naming at least three uses and one limit" },
    { id: "O2", condition: "Using your phone or a computer", action: "open a free AI assistant from its official app or website, send a first message and sign out on a shared computer", standard: "after checking the app's age rules" },
    { id: "O3", condition: "Given your real practice, game and class schedule", action: "write a prompt with your need, your situation and the format you want", standard: "so the first answer is useful" },
    { id: "O4", condition: "Given an AI answer that does not fit your week", action: "ask follow-up prompts, one change at a time, to fix it", standard: "making at least two improvements" },
    { id: "O5", condition: "Given an AI answer with training, health, nutrition or eligibility advice", action: "check it with your coach, athletic trainer, dietitian, doctor, compliance office or an official page", standard: "before you follow it" },
    { id: "O6", condition: "When you write a prompt or get an offer online", action: "keep private and health details out and spot scams aimed at athletes", standard: "sharing no passwords, codes, ID numbers or health records" }
  ],
  chapters: [
    {
      name: "Chapter 1: Where AI shows up in sports",
      lessons: [
        {
          objectives: ["O1"],
          title: "What AI is, and where you already see it in sports",
          minutes: 4,
          goal: "Name three ways AI is used in sports today and say what AI cannot do.",
          text: [
            "AI, or artificial intelligence, means computer programs that do tasks that usually need a person, like spotting patterns, writing text or recognizing what is in a video.",
            "In sports you already see it: broadcasts that show a player's speed or a shot's chance of going in, apps that count your reps or track your runs, video tools that tag every play, and recruiting sites that sort athletes by stats.",
            "AI is a helper, not a coach, doctor or referee. It does not know your body, your team or your goals unless you tell it, and it can be wrong. Coaches and athletes still make the calls."
          ],
          words: [["AI", "short for artificial intelligence: programs that learn patterns from data and use them to answer, predict or create."], ["Data", "facts and numbers, like times, scores, reps or video."]],
          slides: [
            { title: "AI in one sentence", bullets: ["Programs that learn patterns from data", "Then answer, predict or create"] },
            { title: "Where you see it in sports", bullets: ["Broadcast stats like speed and shot chance", "Apps that track runs and reps", "Video tools that tag plays", "Recruiting sites that sort by stats"] },
            { title: "What AI is not", bullets: ["Not your coach, doctor or referee", "Can be wrong, even when it sounds sure", "You and your coach make the calls"] }
          ],
          tryIt: "Write down three places you have seen AI or smart stats in your sport this season, for example a broadcast graphic, a fitness app or a video tool your team uses.",
          youCanNow: "explain what AI is, name three ways it shows up in sports, and say why people still make the decisions.",
          quickCheck: [
            { objective: "O1", q: "What does AI mean?", options: ["A kind of sports drink", "Computer programs that do tasks that usually need a person", "A training machine", "A referee's signal"], answer: 1, why: "AI means computer programs that spot patterns, write text or recognize what is in a video." },
            { objective: "O1", q: "An AI app says you should change your position on the team. What do you do?", options: ["Talk with your coach; AI is a helper, not your coach", "Change position right away", "Quit the team", "Ignore your coach from now on"], answer: 0, why: "AI does not know your team or goals; coaches and athletes still make the calls." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Opening a free AI assistant",
          minutes: 5,
          goal: "Open a free AI assistant on your phone or a computer and send your first message.",
          text: [
            "An AI assistant is an AI program you chat with in everyday words. Well-known free ones are ChatGPT, Microsoft Copilot and Google Gemini.",
            "On a phone, get the official app from the app store, made by the real company: OpenAI for ChatGPT, Microsoft for Copilot, Google for Gemini. On a computer, open a browser and go to chatgpt.com, copilot.microsoft.com or gemini.google.com.",
            "Some assistants need an account and have age rules. If you are under 18, check the app's age rules and ask a parent or guardian first. On a school or shared computer, sign out when you finish."
          ],
          steps: ["Pick your phone or a computer.", "Phone: install the official app. Computer: type the web address.", "Find the message box near the bottom of the screen.", "Type a hello message and read the answer.", "On a shared computer, sign out and close the browser."],
          words: [["AI assistant", "an AI program you chat with by typing or talking."], ["Browser", "the program you use to visit websites, like Chrome, Edge or Safari."]],
          slides: [
            { title: "Free AI assistants", bullets: ["ChatGPT (OpenAI)", "Microsoft Copilot", "Google Gemini"] },
            { title: "How to open one", bullets: ["Phone: official app from the app store", "Computer: chatgpt.com, copilot.microsoft.com or gemini.google.com", "Find the message box at the bottom"] },
            { title: "Before you start", bullets: ["Under 18? Check age rules and ask a parent", "Shared computer: sign out when done"] }
          ],
          tryIt: "Open one free AI assistant and type: \"I play [your sport]. Explain in three short sentences how AI is used in my sport.\" Read the answer.",
          youCanNow: "open a free AI assistant, send a message and leave a shared computer safely.",
          quickCheck: [
            { objective: "O2", q: "Which web address opens Google Gemini on a computer?", options: ["gemini-free-app.net", "freeai.win", "gemini.google.com", "googleai.gift"], answer: 2, why: "gemini.google.com is the official address; use the real company's site or app." },
            { objective: "O2", q: "You used ChatGPT on a library computer to plan your week. What do you do when you finish?", options: ["Leave it open for a teammate", "Save your password", "Turn off the screen only", "Sign out and close the browser"], answer: 3, why: "Signing out on shared computers keeps others out of your chats and accounts." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Writing a clear sports prompt",
          minutes: 5,
          goal: "Write a prompt with your need, your situation and the format you want.",
          text: [
            "What you type to an AI assistant is called a prompt. A clear prompt gets a useful answer the first time.",
            "A strong prompt has three parts: what you need, your situation, and how you want the answer. Example: \"I am a high school soccer midfielder. I have practice Monday to Thursday 3:30 to 5:30 and a game Friday. Make a simple study schedule for the week around practice. Put it in a table.\"",
            "A weak prompt like \"help me get better\" makes the assistant guess. Add the sport, the position, your schedule and the format."
          ],
          steps: ["Say what you need.", "Add your sport, position, level and schedule (no private details).", "Say the format: list, table, short steps or simple words."],
          words: [["Prompt", "what you type or say to an AI assistant to ask for something."], ["Format", "the shape of the answer, like a list, a table or steps."]],
          slides: [
            { title: "Three parts of a good prompt", bullets: ["1. What you need", "2. Your sport, position, level and schedule", "3. The format you want"] },
            { title: "Weak vs clear", bullets: ["Weak: \"help me get better\"", "Clear: \"I'm a HS soccer midfielder with practice Mon-Thu...\"", "\"...make a study schedule in a table\""] },
            { title: "Add details, not secrets", bullets: ["Yes: sport, position, practice times", "No: full name, school ID, health records"] }
          ],
          tryIt: "Write a three-part prompt asking for a study or recovery-day schedule around your real practice week. Send it and read the answer.",
          youCanNow: "write a clear sports prompt that includes your need, your situation and the format.",
          quickCheck: [
            { objective: "O3", q: "What is the format part of a prompt?", options: ["How you want the answer, like a table or a short list", "Your sport", "Your coach's name", "Your password"], answer: 0, why: "The format tells the assistant how to shape the answer." },
            { objective: "O3", q: "You want help planning homework around basketball. Which prompt is best?", options: ["\"homework\"", "\"help me get better\"", "\"basketball\"", "\"I'm a high school guard with practice 3 to 5 pm Monday to Thursday and a game Friday. Make a homework schedule for the week in a table.\""], answer: 3, why: "It gives the need, the situation and the format." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Where AI shows up in sports",
        questions: [
          { objective: "O1", q: "Which is an example of AI in sports?", options: ["A whistle", "A paper scorebook", "A broadcast graphic showing a shot's chance of going in", "A team bus"], answer: 2, why: "That graphic comes from a program that learned patterns from lots of past shots." },
          { objective: "O1", q: "An AI app suggests you play through sharp knee pain. What should you do?", options: ["Stop and talk to your athletic trainer or doctor", "Follow it, because AI knows best", "Ignore your coach", "Ask a teammate to decide"], answer: 0, why: "AI is not a doctor. Pain and injury questions go to a qualified person." },
          { objective: "O2", q: "Where should you get an AI app for your phone?", options: ["A link from a stranger in your DMs", "A pop-up ad", "Any website", "The official app store, from the real company"], answer: 3, why: "Official app stores and the real company's app are the safe choice." },
          { objective: "O3", q: "What are the three parts of a clear prompt?", options: ["Name, school, ID number", "Need, situation, format", "Sport, team color, mascot", "Hello, please, thanks"], answer: 1, why: "Need, situation and format give the assistant what it needs to help." },
          { objective: "O3", q: "Which prompt will likely get the most useful answer?", options: ["\"help me get better\"", "\"I'm a college point guard with practice 6-8 am. Make a class-and-recovery schedule for the week in a table.\"", "\"basketball\"", "\"tell me everything\""], answer: 1, why: "It includes the need, the situation and the format." }
        ]
      }
    },
    {
      name: "Chapter 2: Using AI with confidence",
      lessons: [
        {
          objectives: ["O4"],
          title: "Making the answer better",
          minutes: 4,
          goal: "Use follow-up prompts to fix an answer until it fits your week.",
          text: [
            "The first answer is a draft. The assistant remembers what you said earlier in the same chat, so you can ask for changes.",
            "Useful follow-ups for athletes: \"Move study time after dinner on game days.\" \"Make it shorter.\" \"Add a rest day.\" \"Use simpler words.\" \"Explain why you put this here.\"",
            "Ask for one change at a time. If the chat goes off track, start a new chat with a clearer prompt."
          ],
          steps: ["Read the first answer.", "Find what does not fit your real schedule.", "Ask for one change.", "Repeat until it fits."],
          words: [["Follow-up", "a second request that builds on the answer you got."]],
          slides: [
            { title: "First answer = draft", bullets: ["You can ask for changes", "It remembers the same chat"] },
            { title: "Follow-ups that work", bullets: ["\"Add a rest day.\"", "\"Move study time after dinner on game days.\"", "\"Explain why you put this here.\""] },
            { title: "Off track?", bullets: ["One change at a time", "Or start a new chat with a clearer prompt"] }
          ],
          tryIt: "Take your schedule from Lesson 3. Ask for two changes, one at a time, so it matches your real week. Compare the first and last versions.",
          youCanNow: "improve an AI answer with clear follow-up prompts.",
          quickCheck: [
            { objective: "O4", q: "Why can you ask the assistant to change its answer?", options: ["It forgets each message", "It remembers what you said earlier in the same chat", "It is your coach", "It must agree with you"], answer: 1, why: "In the same chat the assistant remembers earlier messages, so you can ask for changes." },
            { objective: "O4", q: "The plan puts heavy study time right before your Friday game. What do you send?", options: ["\"Wrong.\"", "\"Start over and add more.\"", "\"Move study time on game day to after dinner.\"", "Nothing; follow it anyway"], answer: 2, why: "A clear follow-up that names one change fixes the plan." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Checking AI answers with your coach",
          minutes: 5,
          goal: "Spot the parts of an AI answer that need checking and check them with the right person or source.",
          text: [
            "AI can make things up or give old information. This is sometimes called a hallucination. In sports, that could be a wrong rule, a made-up stat, an old recruiting date or unsafe training advice.",
            "Always check training loads, injury and health advice, nutrition, supplements, eligibility, recruiting and NIL rules. Check with your coach, athletic trainer, doctor, registered dietitian, or your school's compliance office, and with official pages like ncaa.org.",
            "A good habit: ask the assistant \"What should I double-check with my coach?\" Then actually ask your coach."
          ],
          steps: ["Mark every fact, number, rule or health tip in the answer.", "Decide who should check it: coach, athletic trainer, doctor, dietitian or compliance office.", "Check official pages for rules.", "If they disagree, follow the person or the official source."],
          words: [["Hallucination", "when an AI writes something that sounds true but is made up."], ["Compliance office", "the school office that knows the athletic rules, including recruiting and NIL rules."]],
          slides: [
            { title: "AI can be wrong about", bullets: ["Rules and recruiting dates", "Stats and records", "Training, injury and nutrition advice"] },
            { title: "Who checks what", bullets: ["Training: coach", "Injury and health: athletic trainer or doctor", "Food: registered dietitian", "Rules and NIL: compliance office"] },
            { title: "A good habit", bullets: ["Ask: \"What should I double-check?\"", "Then check it with a real person"] }
          ],
          sources: [{ name: "NCAA: Name, Image and Likeness (rules for college athletes)", url: "https://www.ncaa.org/student-athletes/name-image-likeness/" }],
          tryIt: "Ask an AI assistant one rule question about your sport, for example how many timeouts each team gets. Then find the answer in your league's official rulebook or ask your coach, and see if it matches.",
          youCanNow: "spot what needs checking in an AI answer and take it to the right person or official source.",
          quickCheck: [
            { objective: "O5", q: "What is an AI hallucination?", options: ["A dream during a nap", "A video replay", "A fast answer", "Something the AI makes up that sounds true"], answer: 3, why: "AI can make up rules, stats or dates that sound real." },
            { objective: "O5", q: "The AI suggests a supplement to recover faster. Who checks it?", options: ["A teammate", "A registered dietitian, your doctor or your athletic trainer", "The supplement's website", "Nobody; AI is always right"], answer: 1, why: "Supplements and nutrition advice must be checked with the right professional, and with compliance for eligibility." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Keeping your private and health information safe",
          minutes: 5,
          goal: "Use AI for a real task without sharing private, health or account information.",
          text: [
            "Do not type private details into an AI assistant: passwords, Social Security or ID numbers, your home address, bank details, or health records like injury reports, medications or test results.",
            "You can still get help. Write \"[my school]\" or \"a hamstring injury my athletic trainer is treating\" instead of names and medical details. Ask general questions; bring the specific ones to the professional.",
            "Watch out for scams aimed at athletes: fake recruiters, fake brand deals and fake agents who rush you, ask for money up front or ask for a login code. Check them with your coach or compliance office first."
          ],
          steps: ["Read your prompt before you send it.", "Take out names, numbers, passwords and health details.", "Use placeholders like \"[my school]\".", "Treat rushed offers, upfront fees and code requests as warning signs."],
          words: [["Placeholder", "a stand-in like \"[my school]\" that keeps the real detail private."], ["Scam", "a trick to steal money, accounts or information."]],
          slides: [
            { title: "Never type into AI", bullets: ["Passwords and login codes", "ID or bank numbers, home address", "Injury reports, medications, test results"] },
            { title: "Use placeholders", bullets: ["\"[my school]\" instead of the name", "General question to AI, specific one to a pro"] },
            { title: "Scams that target athletes", bullets: ["Fake recruiters and fake agents", "Fake brand deals asking for money up front", "Anyone asking for a login code"] }
          ],
          tryIt: "Final task: build your one-week practice-and-study plan with an AI assistant. Use a three-part prompt, ask for two improvements, remove private and health details, and show the plan to your coach or athletic trainer.",
          youCanNow: "use AI to plan your week while keeping private and health information safe, and spot scams aimed at athletes.",
          quickCheck: [
            { objective: "O6", q: "Which detail should you keep out of a prompt?", options: ["Your practice times", "Your sport", "Your injury report and medication list", "That you want a table"], answer: 2, why: "Health records like injury reports and medications stay out of AI tools." },
            { objective: "O6", q: "An \"agent\" messages you with a brand deal and asks for a login code to finish today. What do you do?", options: ["Never share the code, and check with your coach or compliance office", "Send the code quickly", "Pay the fee to hold the deal", "Give them your password instead"], answer: 0, why: "Rushing you and asking for a code are warning signs of a scam." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Using AI with confidence",
        questions: [
          { objective: "O4", q: "The AI plan has no rest day. What is the best next step?", options: ["Accept it anyway", "Delete the app", "Train every day forever", "Ask: \"Add a rest day.\""], answer: 3, why: "A follow-up asks the assistant to change its answer." },
          { objective: "O5", q: "Who should check AI advice about an injury?", options: ["Your athletic trainer or doctor", "A teammate", "The AI itself", "A social media comment"], answer: 0, why: "Health and injury questions go to a qualified professional." },
          { objective: "O5", q: "What is a hallucination in AI?", options: ["A dream before a game", "A slow internet connection", "Something the AI made up that sounds true", "A type of drill"], answer: 2, why: "AI can invent facts, rules or stats that sound real." },
          { objective: "O6", q: "Which detail is fine to put in a prompt?", options: ["Your password", "Your medication list", "Your home address", "Your practice times"], answer: 3, why: "Practice times help the answer and are not private." },
          { objective: "O6", q: "A \"recruiter\" DMs you asking for a fee to send your highlights to coaches today. What do you do?", options: ["Pay fast before the spot is gone", "Check with your coach or compliance office first", "Send your login code", "Send your ID number"], answer: 1, why: "Rushing and upfront fees are warning signs. Check before you act." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Introduction to AI in Sports",
    questions: [
      { objective: "O1", q: "AI is best described as:", options: ["A new type of ball", "A referee", "Programs that learn patterns from data", "A sports league"], answer: 2, why: "AI learns patterns from data and uses them to answer or predict." },
      { objective: "O1", q: "Which is NOT an AI use in sports?", options: ["Lacing your shoes", "Tagging plays in game video", "Tracking runs with an app", "Predicting a shot's chance of going in"], answer: 0, why: "Lacing shoes is a person's job; the others use AI." },
      { objective: "O1", q: "Who makes the final call on your training?", options: ["You and your coach", "The AI", "A random app", "Nobody"], answer: 0, why: "AI helps; people decide." },
      { objective: "O2", q: "Which is a well-known free AI assistant?", options: ["A stopwatch", "A scoreboard", "Google Gemini", "A jersey"], answer: 2, why: "Gemini, ChatGPT and Copilot are free AI assistants." },
      { objective: "O2", q: "You are 15 and want to use an AI assistant. What should you do first?", options: ["Lie about your age", "Check the app's age rules and ask a parent or guardian", "Use a friend's account", "Share your password"], answer: 1, why: "Many assistants have age rules; a parent should know." },
      { objective: "O2", q: "Where do you usually type to an AI assistant?", options: ["The battery icon", "The camera", "The address of your school", "The message box near the bottom"], answer: 3, why: "The message box is where you type your prompt." },
      { objective: "O2", q: "After using a shared school computer you should:", options: ["Stay signed in", "Save your password", "Sign out and close the browser", "Leave a note with your password"], answer: 2, why: "Signing out keeps your account safe." },
      { objective: "O3", q: "What is a prompt?", options: ["A warm-up drill", "A team cheer", "A timeout", "What you type or say to an AI assistant"], answer: 3, why: "A prompt is your request to the AI." },
      { objective: "O3", q: "Which part tells the AI how to shape the answer?", options: ["The format, like a table or list", "Your jersey number", "Your password", "Your coach's phone number"], answer: 0, why: "Saying the format gets the answer in the shape you need." },
      { objective: "O3", q: "Which prompt is clearest?", options: ["\"workout\"", "\"I'm a college sprinter with practice 3-5 pm. Make a study plan for the week in a table.\"", "\"help\"", "\"sports\""], answer: 1, why: "It has the need, the situation and the format." },
      { objective: "O4", q: "The first answer does not fit your game day. You should:", options: ["Give up", "Accept it", "Ask a follow-up to change game day", "Pay for a new app"], answer: 2, why: "Follow-ups fix the parts that do not fit." },
      { objective: "O4", q: "How many changes should you ask for at once to keep it clear?", options: ["One at a time", "Ten", "None", "As many as you can type"], answer: 0, why: "One change at a time keeps the answer on track." },
      { objective: "O4", q: "A chat keeps going off track. A good move is:", options: ["Type your password", "Repeat the same words", "Stop training", "Start a new chat with a clearer prompt"], answer: 3, why: "A fresh chat with a clearer prompt usually works better." },
      { objective: "O5", q: "AI gives you a recruiting rule. You should:", options: ["Post it as fact", "Check it on ncaa.org or with your compliance office", "Ignore all rules", "Ask the AI again and trust it"], answer: 1, why: "Rules change; check the official source." },
      { objective: "O5", q: "Who is the right person to check a nutrition plan?", options: ["A random influencer", "A registered dietitian", "The AI", "A video game"], answer: 1, why: "Registered dietitians are trained to give nutrition advice." },
      { objective: "O5", q: "Who knows your school's NIL and recruiting rules?", options: ["The cafeteria", "The bus driver", "A rival team", "The compliance office"], answer: 3, why: "The compliance office handles athletic rules." },
      { objective: "O6", q: "Which should you NEVER type into an AI assistant?", options: ["Your medication list", "Your practice schedule", "Your sport", "Your position"], answer: 0, why: "Medication and health records are private." },
      { objective: "O6", q: "How can you ask about an injury without sharing records?", options: ["Paste your MRI report", "Type your doctor's notes", "Ask a general question and bring the specific one to your athletic trainer", "Share your insurance number"], answer: 2, why: "General questions are fine; specific care belongs with a professional." },
      { objective: "O6", q: "A brand deal asks you to pay a fee up front to join. This is:", options: ["Normal for all deals", "Required by the NCAA", "A good sign", "A warning sign of a scam"], answer: 3, why: "Real brands pay you; upfront fees are a common scam sign." },
      { objective: "O6", q: "Someone asks for the code just texted to your phone. You should:", options: ["Read it to them", "Never share it", "Post it", "Text it to your team"], answer: 1, why: "That code protects your account. Real recruiters and brands never ask for it." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Pre-Test: What Do You Already Know?",
    from: [
      0,
      2,
      4,
      7,
      10,
      13,
      16,
      18
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      {
        name: "Clear prompt",
        objective: "O3",
        notYet: "The prompt is vague, such as \"make me a plan\".",
        meets: "The prompt gives the need, your real practice, game and class schedule, and the format.",
        exceeds: "The first answer already fits most of your week."
      },
      {
        name: "Made it better",
        objective: "O4",
        notYet: "Used the first answer as it was.",
        meets: "Asked for at least two improvements, one at a time.",
        exceeds: "Can say what each change fixed, such as a rest day or game-day timing."
      },
      {
        name: "Private and health details out",
        objective: "O6",
        notYet: "The prompt has a name, ID number, password or health detail.",
        meets: "No private or health details in the prompt or plan.",
        exceeds: "Used placeholders like \"[my school]\" and kept health questions for the athletic trainer."
      },
      {
        name: "Checked with coach",
        objective: "O5",
        notYet: "Followed the plan without showing anyone.",
        meets: "Showed the plan to your coach or athletic trainer before following it.",
        exceeds: "Changed the plan based on their feedback and can say what changed."
      }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Learners who report using an AI-made plan for practice and study within 30 days (follow-up survey)",
      "Coaches or athletic trainers who report athletes checking AI advice with them",
      "Learners who start another Athletes course within 30 days"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A smartphone or a school or library computer with internet",
      "A free AI assistant: ChatGPT, Microsoft Copilot or Google Gemini",
      "The learner's real practice, game and class schedule for one week",
      "About 60 minutes in total, in short sessions: lessons, practice, checks and the final task"
    ],
    facilitatorNotes: [
      "Check each AI app's age rules for your group; learners under 18 need a parent or guardian's OK.",
      "Ask a coach or athletic trainer to review the final plans with athletes.",
      "Never ask athletes to type injury reports, medications or ID numbers into AI tools.",
      "Talk through fake recruiter and brand deal scams, and point athletes to their compliance office for NIL questions.",
      "Score the final task with the rubric, and give feedback on one Not yet row at a time."
    ]
  }
};
