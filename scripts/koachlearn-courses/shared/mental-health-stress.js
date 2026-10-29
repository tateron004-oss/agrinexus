"use strict";

// Koach Learn course (shared): "Mental Health and Stress Management". Asked for by the owner on 28 October 2026 (life, people and career skills beyond AI).
// Categories: Seniors and Technology, Athletes, Entrepreneurs, Re-Entry, Small Business, Non Profits, Youth, Veterans (military), Workforce Development,
// Undeserved Community, Agriculture (Africa), Leadership Development. Shape and rules: ../README.md; model: ../re-entry/reentry-ai-digital-confidence.js.
// Teaches coping skills and how and when to get help. It never diagnoses and never replaces a professional. Crisis lines checked 28 October 2026.

module.exports = {
  id: "mental-health-stress",
  category: "Seniors and Technology",
  name: "Mental Health and Stress Management",
  skills: "Spotting your stress signals, Calming your body with breathing and grounding, Building sleep and movement habits, Asking someone for support, Spotting warning signs and getting crisis help, Writing a personal coping plan",
  outcome: "notice your own stress signals early, calm your body in a few minutes with breathing and grounding, keep daily habits that protect your mood, ask for support, spot warning signs in yourself or someone else, and know exactly who to call, including 988 in the US, when it is serious.",
  about: [
    "Everyone feels stress: a parent with bills, a farmer waiting for rain, a player before a big game, a veteran back home, someone just out of prison looking for work, a grandparent caring for a spouse, a business owner on a slow month. Stress is normal. Too much stress for too long can hurt your sleep, your body, your work and the people around you.",
    "This course teaches skills you can use today: how to notice stress early, calm your body fast, build habits that protect you, talk to someone, and spot the signs that it is time to get more help. It does not diagnose anything and it does not replace a doctor, counselor or therapist. It helps you know when and how to reach one.",
    "If you are in danger right now or thinking about ending your life: in the US, call or text 988 (the 988 Suicide and Crisis Lifeline). Veterans and service members can call 988 and press 1. Outside the US, call your country's local crisis line or emergency number. You do not have to finish this course first.",
    "Each lesson takes about five minutes. Read the lesson, watch the slides, then do the \"Try it now\" task. There is a short knowledge check after each chapter and a 20-question quiz at the end."
  ],
  finalTask: "Write your one-page personal coping plan: three of your own early stress signals, two calming skills you have practiced, two daily habits you will keep, two people you can talk to (with how to reach them), one place to get professional help, and the crisis numbers for where you live (988 in the US, 988 then press 1 for veterans). Keep it on your phone and on paper.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Adults and older teens of every background who feel stress: parents, seniors and caregivers, farmers, athletes, veterans, people coming home from prison and small business owners.",
    startingPoint: "Know what stress feels like and have their own ways of coping, some helpful and some not. Many have not named their early stress signals, practiced a calming skill, or saved crisis numbers.",
    gap: "Too much stress for too long hurts sleep, health, work and relationships, and some people do not know the signs that it is time for more help. Learners need simple skills to notice and calm stress, ask for support and reach crisis help fast, written into a plan they can use.",
    constraints: [
      "Reading level: plain words and short sentences",
      "Not diagnosis or treatment; the course points to doctors, counselors and crisis lines",
      "Safety first: crisis numbers (988 in the US, 988 then press 1 for veterans, or the local crisis line) are given before any lesson",
      "Privacy: learners keep personal stress logs and plans to themselves unless they choose to share",
      "Time: about five-minute lessons; some learners may be in distress"
    ],
    prerequisites: "None."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "After keeping a one-day stress log", action: "name three of your own early stress signals in your body, thoughts, feelings or actions", standard: "with each signal written in your own words" },
    { id: "O2", condition: "When you feel stress building", action: "use box breathing and 5-4-3-2-1 grounding to calm your body", standard: "rating your stress from 0 to 10 before and after" },
    { id: "O3", condition: "For the coming week", action: "choose two small daily habits for sleep, movement, food or people and plan when you will do them", standard: "with a time or reminder set for each" },
    { id: "O4", condition: "With a person you trust", action: "start a conversation that says what is going on and what you need", standard: "using your own first two sentences" },
    { id: "O5", condition: "Given signs of crisis in yourself or someone else", action: "spot the warning signs of suicide and contact the right crisis help", standard: "with crisis numbers saved in your phone and the words to ask directly ready" },
    { id: "O6", condition: "Using what you practiced in this course", action: "write a one-page personal coping plan", standard: "with all six parts, saved on your phone and on paper" }
  ],
  chapters: [
    {
      name: "Chapter 1: Noticing and calming stress",
      lessons: [
        {
          objectives: ["O1"],
          title: "Spotting your own stress signals",
          minutes: 5,
          goal: "Name three early signs that stress is building in you.",
          text: [
            "Stress is your body's alarm. It speeds up your heart and breathing so you can handle a challenge. A little stress can help you focus before a test, a game or a job interview. The problem is when the alarm stays on for days or weeks.",
            "Stress shows up in four places. In your body: tight shoulders, headaches, an upset stomach, a racing heart. In your thoughts: worry that loops, trouble focusing, expecting the worst. In your feelings: short temper, sadness, feeling numb or on edge. In your actions: sleeping too much or too little, eating differently, drinking or smoking more, pulling away from people.",
            "Everyone's signals are different. A coach may notice they snap at players. A grandmother may notice she cannot sleep. If you learn your own early signals, you can act before stress gets big."
          ],
          steps: ["Think of the last time you felt very stressed.", "Ask: what did I feel in my body, think, feel and do?", "Write down the earliest signs you noticed.", "Pick your top three. These are your early warning lights."],
          words: [["Stress", "the body and mind's reaction to pressure or a challenge."], ["Signal", "a sign that tells you something is happening, like a warning light in a car."]],
          slides: [
            { title: "Stress is your body's alarm", bullets: ["A little can help you focus", "Too much, for too long, wears you down"] },
            { title: "Where stress shows up", bullets: ["Body: tight shoulders, headaches, racing heart", "Thoughts: worry loops, trouble focusing", "Feelings: short temper, sadness, on edge", "Actions: sleep, food, drinking, pulling away"] },
            { title: "Know your early signals", bullets: ["Everyone's are different", "Catch them early, act early", "Pick your top three"] }
          ],
          tryIt: "Keep a quick stress log for one day. Three times today (morning, afternoon, night), write: stress level from 0 to 10, and one thing you noticed in your body, thoughts, feelings or actions. Circle your top three signals.",
          youCanNow: "name your own early stress signals in your body, thoughts, feelings and actions.",
          quickCheck: [
            { objective: "O1", q: "Which is a stress signal in your body?", options: ["Tight shoulders or a clenched jaw", "Feeling rested after sleep", "Laughing with a friend", "Enjoying a meal"], answer: 0, why: "Tight muscles are a common early body signal of stress." },
            { objective: "O1", q: "You notice you snap at family most evenings this week. What would you do?", options: ["Ignore it; everyone does it", "Write it in your stress log as a possible signal", "Stop talking to your family", "Wait until it gets worse"], answer: 1, why: "Noticing and writing down signals helps you act before stress grows." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Calming your body fast: breathing and grounding",
          minutes: 5,
          goal: "Use slow breathing and a grounding exercise to calm down in a few minutes.",
          text: [
            "When stress hits, slow breathing tells your body it is safe to turn the alarm down. One easy method is box breathing: breathe in for 4 counts, hold for 4, breathe out for 4, hold for 4. Repeat four times. If holding feels hard, just make the out-breath longer than the in-breath, for example in for 4 and out for 6.",
            "Grounding pulls your mind back to right now when worry runs ahead. Try 5-4-3-2-1: name 5 things you see, 4 things you can touch, 3 things you hear, 2 things you smell and 1 thing you taste. You can do it anywhere: on a bus, before a meeting, in a locker room, in a waiting room.",
            "These skills work better with practice. Try them when you are calm, so they are ready when you need them. Free phone apps can guide you, but you do not need any app. If breathing exercises make you dizzy, stop and breathe normally."
          ],
          steps: ["Notice a stress signal.", "Box breathing: in 4, hold 4, out 4, hold 4. Repeat four times.", "If worry keeps running: do 5-4-3-2-1 grounding.", "Check your stress level again from 0 to 10."],
          words: [["Box breathing", "breathing in, holding, breathing out and holding, each for the same count, usually 4."], ["Grounding", "using your senses to bring your attention back to the present moment."]],
          slides: [
            { title: "Box breathing", bullets: ["In for 4", "Hold for 4", "Out for 4, hold for 4", "Repeat four times"] },
            { title: "Easier version", bullets: ["Make the out-breath longer than the in-breath", "In for 4, out for 6", "Dizzy? Stop and breathe normally"] },
            { title: "5-4-3-2-1 grounding", bullets: ["5 things you see, 4 you can touch", "3 you hear, 2 you smell, 1 you taste", "Works anywhere: bus, locker room, waiting room"] },
            { title: "Practice when calm", bullets: ["Then it is ready when you need it", "No app needed"] }
          ],
          sources: [{ name: "National Institute of Mental Health: I'm So Stressed Out! fact sheet", url: "https://www.nimh.nih.gov/health/publications/so-stressed-out-fact-sheet" }],
          tryIt: "Rate your stress from 0 to 10. Do four rounds of box breathing, then one round of 5-4-3-2-1 grounding. Rate your stress again and write down both numbers.",
          youCanNow: "calm your body in a few minutes with slow breathing and bring your mind back with grounding.",
          quickCheck: [
            { objective: "O2", q: "What does 5-4-3-2-1 grounding help you do?", options: ["Fall asleep instantly", "Count your money", "Bring your mind to the present using your senses", "Remember your phone number"], answer: 2, why: "Grounding uses your five senses to pull your attention back to the present." },
            { objective: "O2", q: "You feel your heart racing before a hard phone call. What would you do?", options: ["Hold your breath as long as you can", "Do a few rounds of box breathing, then make the call", "Drink three cups of coffee", "Cancel all calls for the week"], answer: 1, why: "Slow box breathing can calm your body in a few minutes." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Daily habits that protect you: sleep, movement, food and people",
          minutes: 5,
          goal: "Pick two small daily habits that make stress easier to handle.",
          text: [
            "Breathing helps in the moment. Habits help every day. The CDC says most adults need 7 or more hours of sleep a night, and teens 13 to 17 need 8 to 10. Good sleep habits: go to bed and wake up at the same time, keep the room dark, calm and cool, put screens away about 30 minutes before bed, and limit caffeine late in the day and alcohol near bedtime.",
            "Movement burns off stress. The CDC says adults need about 150 minutes of moderate activity a week, such as 30 minutes on 5 days, plus muscle-strengthening on 2 days. A brisk walk counts. Athletes: rest days and sleep are part of training too. Regular meals and enough water also steady your mood.",
            "People protect you. Time with someone who helps you feel better, even a short call, lowers stress. Writing in a journal and limiting news and social media when they upset you help too. Start small: one habit you can keep beats five you drop."
          ],
          steps: ["Look at your stress log from Lesson 1.", "Pick two habits: one for sleep or movement, one for people or downtime.", "Make each one small and specific (\"walk 15 minutes after lunch\").", "Do them for one week and notice the difference."],
          words: [["Habit", "something you do so often that it becomes automatic."], ["Moderate activity", "movement that makes you breathe harder but still lets you talk, like a brisk walk."]],
          slides: [
            { title: "Sleep", bullets: ["Adults: 7 or more hours; teens 13-17: 8 to 10 hours", "Same bedtime and wake time", "Screens away about 30 minutes before bed"] },
            { title: "Movement", bullets: ["Adults: about 150 minutes a week", "Example: 30 minutes on 5 days", "A brisk walk counts"] },
            { title: "Food, water and people", bullets: ["Regular meals and enough water", "Talk with someone who lifts you up", "Take breaks from upsetting news"] },
            { title: "Start small", bullets: ["Pick two habits", "Make them specific", "Try them for one week"] }
          ],
          sources: [
            { name: "CDC: About Sleep", url: "https://www.cdc.gov/sleep/about/index.html" },
            { name: "CDC: Adult Activity guidelines", url: "https://www.cdc.gov/physical-activity-basics/guidelines/adults.html" }
          ],
          tryIt: "Write down two small habits for this week, one for sleep or movement and one for people or downtime, with when you will do them. Set a phone reminder or write them on your calendar.",
          youCanNow: "choose and schedule small daily habits for sleep, movement and connection that protect you from stress.",
          quickCheck: [
            { objective: "O3", q: "Which habit goal is easiest to keep?", options: ["\"Be healthier\"", "\"Never feel stressed again\"", "\"Exercise two hours every day starting today\"", "\"Call my sister on Sunday afternoons\""], answer: 3, why: "Small, specific habits with a set time are easier to keep." },
            { objective: "O3", q: "You often scroll your phone in bed until late. What small habit would you try?", options: ["Put the phone away about 30 minutes before bed", "Use the phone more to get tired", "Sleep with the TV on", "Stay up later on weekdays"], answer: 0, why: "Putting screens away before bed is a sleep tip taught in this lesson." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Noticing and calming stress",
        questions: [
          { objective: "O1", q: "Which of these is an early stress signal in your actions?", options: ["Sleeping much less than usual", "Feeling the sun on your face", "Eating your normal lunch", "Laughing at a joke"], answer: 0, why: "Changes in sleep, eating, drinking or pulling away are stress signals in your actions." },
          { objective: "O2", q: "What is box breathing?", options: ["Breathing into a paper bag", "Holding your breath as long as you can", "Breathing in, holding, out and holding, each for about 4 counts", "Breathing fast to wake up"], answer: 2, why: "Box breathing uses four equal counts to slow your body down." },
          { objective: "O2", q: "Your mind is racing before a job interview. Which grounding skill fits?", options: ["Check social media", "Name 5 things you see, 4 you can touch, 3 you hear, 2 you smell, 1 you taste", "Drink three coffees", "Replay every past mistake"], answer: 1, why: "5-4-3-2-1 brings your attention back to right now." },
          { objective: "O3", q: "According to the CDC, how much sleep do most adults need?", options: ["4 hours", "5 hours", "6 hours", "7 or more hours"], answer: 3, why: "The CDC says adults need 7 or more hours a night." },
          { objective: "O3", q: "Which habit goal is the easiest to keep?", options: ["\"Be healthier\"", "\"Never feel stress again\"", "\"Run a marathon next week\"", "\"Walk 15 minutes after lunch on weekdays\""], answer: 3, why: "Small, specific habits are easier to start and keep." }
        ]
      }
    },
    {
      name: "Chapter 2: Getting support and helping others",
      lessons: [
        {
          objectives: ["O4"],
          title: "Talking to someone and asking for help",
          minutes: 5,
          goal: "Start a conversation to ask a person you trust for support.",
          text: [
            "Many people wait too long to talk because they feel weak, ashamed, or do not want to be a burden. Asking for help is a skill, not a weakness. Coaches, soldiers, farmers and business owners all depend on a team.",
            "Who you can talk to: a friend or family member, a faith leader, a coach, a mentor or sponsor, a case manager or reentry counselor, a teacher or school counselor, your doctor, or a counselor or therapist. Your doctor can check for health causes and help you find mental health care. In the US, the SAMHSA National Helpline (1-800-662-4357) is a free, confidential, 24/7 referral line for mental health and substance use; it connects you to local treatment and support groups but does not give counseling itself. Veterans can also ask their VA health team.",
            "How to start: pick a calm time, say it simply, and say what you need. For example: \"I have been really stressed lately and not sleeping. Can I talk to you for a few minutes? I mostly need you to listen.\" An AI chatbot can help you practice the words, but it is not a counselor. Do not type private details into it, and in a crisis, reach a real person."
          ],
          steps: ["Choose one person you trust.", "Pick a calm time and place.", "Say what is going on in one or two sentences.", "Say what you need: listening, advice, help with a task, or help finding a professional."],
          words: [["Counselor or therapist", "a trained professional who helps people with stress, feelings and mental health."], ["Referral", "being pointed or sent to the right service or professional."], ["Confidential", "kept private."]],
          slides: [
            { title: "Asking for help is a skill", bullets: ["Not a weakness", "Teams win: coaches, units, families, co-ops"] },
            { title: "People you can talk to", bullets: ["Friend, family, faith leader, coach, mentor", "Case manager, teacher, school counselor", "Your doctor, a counselor or therapist"] },
            { title: "Finding care in the US", bullets: ["SAMHSA Helpline: 1-800-662-4357, free, 24/7", "Refers you to local treatment and support groups", "Veterans: ask your VA health team"] },
            { title: "How to start", bullets: ["Calm time, simple words", "\"I've been really stressed. Can we talk?\"", "Say what you need"] }
          ],
          sources: [{ name: "SAMHSA National Helpline", url: "https://www.samhsa.gov/find-help/helplines/national-helpline" }],
          tryIt: "Write the first two sentences you would say to one person you trust about your stress, including what you need from them. If you feel ready, send the message or have the talk this week.",
          youCanNow: "choose a person to talk to, start the conversation in plain words, and say what kind of support you need.",
          quickCheck: [
            { objective: "O4", q: "What is a good first sentence when asking for support?", options: ["\"Never mind, it's nothing.\"", "\"You never help me.\"", "\"I've been really stressed lately, and I'd like to talk for a few minutes.\"", "\"Fix my problems.\""], answer: 2, why: "Saying simply what is going on and what you need opens the door to help." },
            { objective: "O4", q: "You feel stressed and use an AI chatbot at night. What would you do if you start to feel unsafe?", options: ["Keep talking only to the chatbot", "Reach a real person, such as 988 in the US or your local crisis line", "Turn off your phone and wait", "Search for more stress facts"], answer: 1, why: "A chatbot can help practice words, but in a crisis you reach a real person." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Warning signs and getting crisis help",
          minutes: 6,
          goal: "Spot serious warning signs in yourself or someone else and know who to call.",
          text: [
            "Sometimes stress turns into something more serious. The National Institute of Mental Health lists warning signs of suicide, including: talking about wanting to die, feeling hopeless or trapped, feeling like a burden, looking for ways to die, giving away important things or saying goodbye, pulling away from people, more alcohol or drug use, big mood swings, and big changes in sleep or eating. Signs that are new or getting worse need help fast.",
            "If you see signs in someone else: ask them directly and calmly, \"Are you thinking about killing yourself?\" Asking does not put the idea in their head. Listen without judging, stay with them, and help them connect to help. If someone is in immediate danger, call your emergency number (911 in the US).",
            "Crisis help in the US: call or text 988, or chat at 988lifeline.org, for the 988 Suicide and Crisis Lifeline. It is free, confidential and open 24/7, with Spanish text and chat. Veterans, service members and their families: call 988 and press 1, or text 838255, for the Veterans Crisis Line; you do not need to be enrolled in VA care. Outside the US, call your country's local crisis line or emergency number; save it in your phone today.",
            "Also get help (from your doctor or a counselor) when stress or worry does not go away, gets in the way of daily life, or makes you avoid things you need to do."
          ],
          steps: ["Notice the warning sign.", "Ask directly and listen without judging.", "Stay with the person; do not leave them alone if they are in danger.", "Call or text 988 together (veterans: 988 then press 1), or your local crisis line.", "Immediate danger: call 911 or your emergency number."],
          words: [["Crisis", "a moment when someone's safety or ability to cope is at serious risk."], ["988 Lifeline", "the US 988 Suicide and Crisis Lifeline: call or text 988 for free, private help any time."]],
          slides: [
            { title: "Warning signs", bullets: ["Talk of wanting to die, or being a burden", "Feeling hopeless or trapped", "Giving things away, saying goodbye", "Pulling away, more alcohol or drugs"] },
            { title: "If you see signs in someone", bullets: ["Ask directly and calmly", "Listen without judging", "Stay with them and connect them to help"] },
            { title: "Crisis help in the US", bullets: ["Call or text 988, or chat at 988lifeline.org", "Free, confidential, 24/7", "Veterans: 988 then press 1, or text 838255"] },
            { title: "Outside the US and emergencies", bullets: ["Save your country's crisis line or emergency number now", "Immediate danger: call 911 or your emergency number"] }
          ],
          sources: [
            { name: "988 Suicide and Crisis Lifeline", url: "https://988lifeline.org/" },
            { name: "Veterans Crisis Line", url: "https://www.veteranscrisisline.net/" },
            { name: "National Institute of Mental Health: Warning Signs of Suicide", url: "https://www.nimh.nih.gov/health/publications/warning-signs-of-suicide" }
          ],
          tryIt: "Save the crisis numbers for where you live in your phone right now: in the US, 988 (and 988 then press 1 for veterans); outside the US, your local crisis line and emergency number. Then write the exact words you would use to ask a friend if they are thinking about suicide.",
          youCanNow: "spot serious warning signs, ask someone directly, and connect them or yourself to crisis help.",
          quickCheck: [
            { objective: "O5", q: "Which of these is a warning sign of suicide?", options: ["Planning a birthday party", "Feeling tired after work", "Talking about being a burden or wanting to die", "Being busy with a new job"], answer: 2, why: "Talking about being a burden or wanting to die is a serious warning sign." },
            { objective: "O5", q: "A veteran friend tells you they have a plan to end their life. What would you do?", options: ["Change the subject", "Promise to keep it secret", "Leave them alone to rest", "Stay with them and call 988 and press 1, or 911 if they are in immediate danger"], answer: 3, why: "Stay with them and connect them to crisis help right away." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Making your personal coping plan",
          minutes: 5,
          goal: "Write a one-page plan that tells you what to do when stress builds.",
          text: [
            "When you are very stressed, it is hard to think clearly. A coping plan is a short page you write while you are calm, so you know what to do when things get hard.",
            "Your plan has six parts: your early stress signals, your calming skills, your daily habits, people you can talk to, professional help, and crisis numbers. Keep it short and in your own words.",
            "Keep the plan where you can reach it: on paper in your wallet or bag, and on your phone. Share it with one person you trust. Look at it again every few months, after a big change like a new job, a move, a season ending or coming home."
          ],
          steps: ["Write your top three early stress signals.", "Write two calming skills you have practiced.", "Write two daily habits you will keep.", "Write two people you can talk to, with how to reach them.", "Write one place for professional help, and your crisis numbers."],
          words: [["Coping plan", "a short written plan of what you will do and who you will call when stress builds."]],
          slides: [
            { title: "Why write a plan", bullets: ["Stress makes it hard to think", "Write it while you are calm"] },
            { title: "Six parts", bullets: ["Signals, calming skills, daily habits", "People, professional help, crisis numbers"] },
            { title: "Keep it close", bullets: ["Paper copy and phone copy", "Share it with one person you trust", "Update it after big changes"] }
          ],
          tryIt: "Final task: write your one-page coping plan with all six parts, including 988 (and 988 then press 1 for veterans) or your local crisis line. Save a copy on your phone and keep one on paper.",
          youCanNow: "write and use a personal coping plan that tells you exactly what to do and who to call when stress builds.",
          quickCheck: [
            { objective: "O6", q: "Which part of a coping plan comes first to help you act early?", options: ["Your own early stress signals", "Your favorite food", "Your work schedule", "Your bank balance"], answer: 0, why: "Knowing your signals tells you when to use the rest of the plan." },
            { objective: "O6", q: "Your coping plan is finished. What would you do with it?", options: ["Throw it away after reading it once", "Keep it on paper and on your phone, and share it with someone you trust", "Post it publicly online", "Hide it so no one ever sees it"], answer: 1, why: "Keeping the plan close and shared means it is there when you need it." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Getting support and helping others",
        questions: [
          { objective: "O4", q: "What is the best way to start asking a friend for support?", options: ["Wait until things are much worse", "Say what is going on simply and what you need from them", "Post about it online without telling them", "Hint at it and hope they guess"], answer: 1, why: "Plain words and a clear request help the other person help you." },
          { objective: "O5", q: "A coworker says they feel like a burden and have been giving away their things. What should you do?", options: ["Change the subject", "Tell them to cheer up", "Ask them directly if they are thinking about suicide, stay with them, and connect them to help", "Wait a month to see if it passes"], answer: 2, why: "These are warning signs. Asking directly and connecting them to help can save a life." },
          { objective: "O5", q: "In the US, how do you reach the 988 Suicide and Crisis Lifeline?", options: ["Only by email", "Call or text 988, or chat at 988lifeline.org", "Visit an office in person", "Call 411"], answer: 1, why: "988 is reachable by call, text or online chat, free and 24/7." },
          { objective: "O5", q: "How can a veteran reach the Veterans Crisis Line?", options: ["Call 988 and press 1", "Only through a VA office visit", "Only if enrolled in VA health care", "By mailing a letter"], answer: 0, why: "Veterans call 988 and press 1 (or text 838255); enrollment is not required." },
          { objective: "O6", q: "Which belongs in a personal coping plan?", options: ["Your bank password", "A list of people you are angry at", "Nothing; plans don't help", "Your crisis numbers and two people you can talk to"], answer: 3, why: "A coping plan includes your signals, skills, habits, people, professional help and crisis numbers." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Mental Health and Stress Management",
    questions: [
      { objective: "O1", q: "Stress is best described as:", options: ["Always a sign of weakness", "The body and mind's alarm reaction to pressure", "Something only adults feel", "An illness only a doctor can see"], answer: 1, why: "Stress is a normal reaction; it becomes a problem when it lasts too long or is too strong." },
      { objective: "O1", q: "Which is a stress signal in your thoughts?", options: ["Worry that keeps looping", "A sore muscle after a workout", "Feeling full after lunch", "A sunny day"], answer: 0, why: "Looping worry and trouble focusing are thought signals." },
      { objective: "O1", q: "Why learn your own early stress signals?", options: ["So you can hide them", "So you can act before stress gets big", "So you never feel stress", "So you can diagnose yourself"], answer: 1, why: "Catching signals early lets you use your skills sooner." },
      { objective: "O2", q: "Box breathing counts are usually:", options: ["In 1, out 1", "In 10, hold 30", "In 4, hold 4, out 4, hold 4", "As fast as possible"], answer: 2, why: "Four equal counts slow your breathing and calm your body." },
      { objective: "O2", q: "Breathing exercises make you dizzy. What should you do?", options: ["Breathe faster", "Hold your breath longer", "Keep going no matter what", "Stop and breathe normally"], answer: 3, why: "If you feel dizzy, stop and breathe normally." },
      { objective: "O2", q: "5-4-3-2-1 grounding uses:", options: ["Your five senses", "Five apps", "Five friends", "Five minutes of running"], answer: 0, why: "You name things you see, touch, hear, smell and taste." },
      { objective: "O2", q: "When is the best time to practice calming skills?", options: ["Only in a crisis", "Never; they work without practice", "When you are calm, so they are ready later", "Only with a paid app"], answer: 2, why: "Practice makes the skill ready when you need it." },
      { objective: "O3", q: "The CDC says teens 13 to 17 need about how much sleep?", options: ["8 to 10 hours", "5 to 6 hours", "4 hours", "12 to 14 hours"], answer: 0, why: "The CDC lists 8 to 10 hours for teens 13 to 17." },
      { objective: "O3", q: "Which is a CDC sleep tip?", options: ["Drink coffee late at night", "Change your bedtime every night", "Sleep with bright lights on", "Put screens away about 30 minutes before bed"], answer: 3, why: "Putting screens away before bed helps you sleep." },
      { objective: "O3", q: "About how much moderate activity does the CDC suggest for adults each week?", options: ["10 minutes", "150 minutes", "1,000 minutes", "None"], answer: 1, why: "Adults need about 150 minutes of moderate activity a week, plus strength work on 2 days." },
      { objective: "O4", q: "Asking for help is:", options: ["A sign you have failed", "Only for people with no friends", "A skill that strong people and teams use", "Something to avoid"], answer: 2, why: "Asking for help is a skill, not a weakness." },
      { objective: "O4", q: "What does the SAMHSA National Helpline do?", options: ["Gives free, confidential referrals to local treatment and support", "Sends police to your home", "Writes prescriptions", "Charges for each call"], answer: 0, why: "It is a free 24/7 referral line; it does not give counseling itself." },
      { objective: "O4", q: "Using an AI chatbot when you feel stressed, which is safest?", options: ["Tell it your full name, address and ID number", "Use it to practice words for a talk, and reach a real person in a crisis", "Treat it as your therapist instead of seeing anyone", "Follow any medical advice it gives without checking"], answer: 1, why: "AI can help you prepare, but it is not a counselor; a crisis needs a real person." },
      { objective: "O5", q: "Which is a warning sign of suicide?", options: ["Planning a birthday party", "Starting a new hobby", "Saying goodbye and giving away important things", "Sleeping well"], answer: 2, why: "Giving things away and saying goodbye are warning signs listed by NIMH." },
      { objective: "O5", q: "Does asking someone directly about suicide put the idea in their head?", options: ["Yes, always", "Only for teens", "Only on the phone", "No; asking calmly opens the door to help"], answer: 3, why: "Asking directly and calmly helps the person talk and get help." },
      { objective: "O5", q: "Someone is in immediate danger in the US. What do you do?", options: ["Post about it online", "Call 911", "Wait until tomorrow", "Send them a link to this course"], answer: 1, why: "Immediate danger needs emergency services: 911 in the US." },
      { objective: "O5", q: "You live outside the US and a friend is in crisis. What do you do?", options: ["Call your country's local crisis line or emergency number", "Text 988 from abroad and wait", "Do nothing", "Ask an AI to handle it"], answer: 0, why: "988 is the US line; outside the US use your local crisis line or emergency number." },
      { objective: "O6", q: "When should you see a doctor or counselor about stress, even without a crisis?", options: ["Never", "Only if a friend tells you to", "Only once a year", "When stress does not go away or gets in the way of daily life"], answer: 3, why: "Stress that lasts or gets in the way of daily life is a sign to get help." },
      { objective: "O6", q: "Where should you keep your coping plan?", options: ["Hidden where you cannot find it", "Only in your head", "On paper and on your phone, shared with someone you trust", "In a public social media post"], answer: 2, why: "Easy-to-reach copies help when stress makes it hard to think." },
      { objective: "O6", q: "Which plan part tells you who to call in an emergency?", options: ["Daily habits", "Calming skills", "Stress signals", "Crisis numbers"], answer: 3, why: "Crisis numbers such as 988, or your local line, belong in every plan." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Pre-Test: What Do You Already Know?",
    from: [
      1,
      3,
      6,
      8,
      10,
      13,
      15,
      17,
      18
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      {
        name: "Early signals",
        objective: "O1",
        notYet: "Fewer than three signals, or they are too general, such as \"stress\".",
        meets: "Three personal early signals in the learner's own words.",
        exceeds: "Signals come from a real stress log and cover body, thoughts or actions."
      },
      {
        name: "Calming skills",
        objective: "O2",
        notYet: "Calming skills listed but not practiced.",
        meets: "Two calming skills practiced, with before-and-after stress ratings.",
        exceeds: "Notes when and where each skill works best for them."
      },
      {
        name: "Daily habits",
        objective: "O3",
        notYet: "Habits are vague or have no time.",
        meets: "Two small habits with a time or reminder for each.",
        exceeds: "Habits have been tried for at least a few days."
      },
      {
        name: "Support people and help",
        objective: "O4",
        notYet: "No people listed, or no way to reach them.",
        meets: "Two people with how to reach them, and one place to get professional help.",
        exceeds: "The learner has already talked with one of them."
      },
      {
        name: "Crisis numbers",
        objective: "O5",
        notYet: "Crisis numbers are missing or wrong for where they live.",
        meets: "988 (and 988 then press 1 for veterans) or the local crisis line and emergency number are in the plan and saved in the phone.",
        exceeds: "Also knows the words to ask a friend directly about suicide."
      },
      {
        name: "Plan kept close",
        objective: "O6",
        notYet: "The plan is missing parts or is not saved.",
        meets: "All six parts on one page, kept on paper and on the phone.",
        exceeds: "Shared with a trusted person."
      }
    ]
  },
  evaluation: {
    results: [
      "Learners who report using a calming skill or their coping plan within 30 days (follow-up survey)",
      "Learners who have crisis numbers saved in their phone at 30 days",
      "Learners who reached out to a support person or professional within 30 days",
      "Learners who start another Koach Learn life-skills course within 30 days"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A phone to save crisis numbers and the plan",
      "Paper and pen for the stress log and coping plan",
      "A quiet place for breathing practice",
      "About 60 minutes in total, plus one day for the stress log"
    ],
    facilitatorNotes: [
      "Share crisis numbers at the start of every session: 988 in the US (988 then press 1 for veterans) or the local crisis line and emergency number.",
      "Have a plan for a learner in distress: know the local crisis line and who on site can help, and never leave a person at risk alone.",
      "Do not ask learners to share their stress logs or plans aloud; sharing is always optional.",
      "Remind learners this course does not diagnose or treat; encourage them to see a doctor or counselor when stress does not go away.",
      "Practice breathing and grounding together, and tell learners to stop and breathe normally if they feel dizzy."
    ]
  }
};
