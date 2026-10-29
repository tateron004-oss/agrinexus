"use strict";

// Koach Learn course (Youth): "Digital Wellbeing and Healthy Screen Time". Asked for by the owner on 28 October 2026 (life skills beyond AI).
// Category: Youth. Shape and rules: ../README.md; model: ../re-entry/reentry-ai-digital-confidence.js. Sleep figures checked on cdc.gov 28 October 2026.
// Phone menu names change between models and versions, so lessons describe the action ("open Settings and look for Screen Time or Digital Wellbeing").

module.exports = {
  id: "youth-digital-wellbeing",
  category: "Youth",
  name: "Digital Wellbeing and Healthy Screen Time",
  skills: "Checking your real screen time, Spotting features built to keep you scrolling, Protecting your sleep from screens, Taming notifications and setting app limits, Building a healthier feed, Making and testing a screen plan",
  outcome: "check how you really use your phone, spot the features that pull you back in, change your settings and habits to protect your sleep, focus and mood, and follow a personal screen plan for a week.",
  about: [
    "Phones, games and social media can be great: friends, music, learning, creating, getting help. They are also designed to keep you on them as long as possible. Digital wellbeing means using screens in a way that helps you, not one that takes over your sleep, schoolwork, sports, job or mood.",
    "This course is for young people who want more control, not a lecture. Nobody is going to tell you to throw your phone away. You will look at your own numbers, learn the tricks apps use, change a few settings and build a plan that fits your life.",
    "Each lesson takes about five minutes. Read the lesson, watch the slides, then do the \"Try it now\" task on your own phone or device. There is a short knowledge check after each chapter and a 20-question quiz at the end."
  ],
  finalTask: "Write your personal screen plan and test it for seven days: your screen time goal, your top two apps to limit (with limits set in your phone), your notification changes, a screens-off time before bed and a phone parking spot at night, two things to do instead of scrolling, and one change to your feed. At the end of the week, compare your screen time and sleep with the week before.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Young people, mostly teens, who use phones, games and social media every day and want more control over their screen time without being lectured.",
    startingPoint: "Use their phones confidently for apps, games and messages. Most guess their screen time low, have most notifications on, scroll late at night and have never set app limits or changed their feed on purpose.",
    gap: "Apps are designed to keep people on them, which can cut into sleep, schoolwork, sports, jobs and mood. Young people need to see their real numbers, spot the hooks, change their settings and habits, and test a plan, so screens help them instead of taking over.",
    constraints: [
      "Own phone or device needed for the practice tasks; menus differ by phone",
      "No lecturing: learners choose their own goals",
      "Mental health: learners who often feel low are pointed to a trusted adult, a doctor or a crisis line, not treated in the course",
      "Privacy: learners keep their numbers and notes to themselves unless they choose to share",
      "Short lessons and plain words"
    ],
    prerequisites: "None."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Using your own phone's settings", action: "find your daily screen time, top apps and pickups or notifications, and compare them with your goals", standard: "writing down all three numbers" },
    { id: "O2", condition: "In an app you use often", action: "identify the design hooks that pull you back in and turn off or work around one", standard: "naming at least three hooks" },
    { id: "O3", condition: "For your nights", action: "set a screens-off time, a phone parking spot away from your bed and a sleep mode", standard: "with screens away about 30 minutes before your bedtime" },
    { id: "O4", condition: "Using your phone's settings", action: "turn off non-essential notifications and set a daily limit on your top app", standard: "turning off at least three apps' notifications" },
    { id: "O5", condition: "On your main social app", action: "change your feed by muting or unfollowing accounts that make you feel worse and following ones that help you grow", standard: "changing at least two accounts each way" },
    { id: "O6", condition: "Using what you set up in this course", action: "write a personal screen plan, follow it for seven days and compare your results with your starting numbers", standard: "with every part of the plan and a before-and-after comparison" }
  ],
  chapters: [
    {
      name: "Chapter 1: Knowing your screen habits",
      lessons: [
        {
          objectives: ["O1"],
          title: "Checking your real screen time",
          minutes: 4,
          goal: "Find your daily screen time and top apps on your own phone.",
          text: [
            "Most people guess their screen time low. Your phone already tracks it. On an iPhone, open Settings and look for Screen Time. On many Android phones, open Settings and look for Digital Wellbeing. Names can differ by phone; if you can't find it, search Settings for \"screen time\".",
            "Look at three numbers: your daily average, your top apps, and how many times you pick up your phone or get notifications. Pickups and notifications show how often your phone pulls you back.",
            "There is no single perfect number. What matters is whether your screen time fits your goals: enough sleep, schoolwork or job done, time for friends in person, sports, rest and hobbies. Your numbers are a starting point, not a grade."
          ],
          steps: ["Open Settings on your phone.", "Find Screen Time (iPhone) or Digital Wellbeing (many Android phones), or search Settings for \"screen time\".", "Write down your daily average, your top three apps and your pickups or notifications.", "Ask: does this fit my goals?"],
          words: [["Screen time", "the amount of time you spend looking at a screen."], ["Pickup", "each time you pick up or unlock your phone."], ["Digital wellbeing", "using technology in a way that supports your health, goals and mood."]],
          slides: [
            { title: "Your phone already tracks it", bullets: ["iPhone: Settings, then Screen Time", "Many Android phones: Settings, then Digital Wellbeing", "Can't find it? Search Settings for \"screen time\""] },
            { title: "Three numbers to check", bullets: ["Daily average", "Top apps", "Pickups and notifications"] },
            { title: "No perfect number", bullets: ["Does it fit your goals?", "Sleep, school or work, friends, sports, rest", "A starting point, not a grade"] }
          ],
          tryIt: "Open your phone's screen time page. Write down your daily average, your top three apps and your daily pickups or notifications. Then write one goal screens are getting in the way of, if any.",
          youCanNow: "find your real screen time, top apps and pickups on your own phone.",
          quickCheck: [
            { objective: "O1", q: "What does your phone's \"pickups\" number show?", options: ["How much your phone weighs", "How many apps you have", "How often your phone pulls you back", "Your battery level"], answer: 2, why: "Pickups and notifications show how often your phone pulls you back." },
            { objective: "O1", q: "You cannot find Screen Time or Digital Wellbeing on your phone. What do you do?", options: ["Search Settings for \"screen time\"", "Guess the number", "Give up", "Download a random app from a pop-up ad"], answer: 0, why: "Names differ by phone, so search Settings for \"screen time\"." }
          ]
        },
        {
          objectives: ["O2"],
          title: "How apps keep you scrolling",
          minutes: 5,
          goal: "Spot the design features that pull you back in.",
          text: [
            "Many apps make money from your attention: the longer you stay, the more ads they show. So they are built to be hard to put down. Knowing the tricks makes it easier to choose for yourself.",
            "Common hooks: endless scroll (there is never a bottom), autoplay (the next video starts on its own), notifications and red badges (they make you check), streaks (fear of losing them), likes and view counts (you keep checking for more), and \"for you\" feeds that learn exactly what keeps you watching.",
            "None of this means you are weak. These features are designed by teams of experts. The answer is to add your own stopping points: turn off autoplay, set time limits, and decide before you open an app what you came to do."
          ],
          steps: ["Open your top app from Lesson 1.", "Find each hook: endless scroll, autoplay, notifications, streaks, likes.", "Pick one hook to turn off or work around.", "Before opening an app, say what you came to do."],
          words: [["Endless scroll", "a feed that keeps loading more so there is no natural stopping point."], ["Autoplay", "when the next video starts by itself."], ["Algorithm", "the computer rules an app uses to choose what to show you next."]],
          slides: [
            { title: "Your attention is the product", bullets: ["Longer on the app = more ads", "So apps are built to be hard to put down"] },
            { title: "Common hooks", bullets: ["Endless scroll and autoplay", "Notifications and red badges", "Streaks, likes and view counts", "\"For you\" feeds"] },
            { title: "Add your own stopping points", bullets: ["Turn off autoplay", "Set time limits", "Decide what you came to do first"] }
          ],
          tryIt: "Open your most-used app and list every hook you can find. Turn off one (for example autoplay or one type of notification) if the app lets you. Write which one you changed.",
          youCanNow: "spot the features apps use to keep you scrolling and add your own stopping points.",
          quickCheck: [
            { objective: "O2", q: "What is autoplay?", options: ["A game mode", "The next video starting on its own", "A battery saver", "A privacy setting"], answer: 1, why: "Autoplay starts the next video without you choosing, which makes it hard to stop." },
            { objective: "O2", q: "You open an app to reply to one message and end up scrolling for an hour. What habit helps next time?", options: ["Turn on more notifications", "Open more apps at once", "Keep a streak going", "Decide what you came to do before opening the app"], answer: 3, why: "Deciding what you came to do adds your own stopping point." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Screens, sleep and your mood",
          minutes: 5,
          goal: "Set a screens-off time and a phone parking spot for the night.",
          text: [
            "Sleep is when your body and brain recover. The CDC says teens 13 to 17 need 8 to 10 hours a night, and adults 18 and up need 7 or more. Late-night scrolling, gaming and messages are some of the biggest sleep thieves: you stay up later and wake up to notifications.",
            "The CDC's sleep tips include keeping a regular bedtime and wake time, keeping your bedroom dark, calm and cool, and putting screens away about 30 minutes before bed. A phone parking spot outside your bed, or across the room, makes this easier. Use a cheap alarm clock if your phone is your alarm.",
            "Notice how screens affect your mood too. If certain apps leave you anxious, angry or feeling worse about yourself, that is useful information. If you often feel low, can't sleep or feel hopeless, talk to a trusted adult or doctor. In the US you can call or text 988 any time; outside the US, call your local crisis line or emergency number."
          ],
          steps: ["Choose your bedtime and count back 30 minutes: that is screens-off time.", "Pick a phone parking spot away from your bed.", "Turn on your phone's sleep or do not disturb mode for the night.", "Notice which apps change your mood, and how."],
          words: [["Do not disturb", "a phone setting that silences calls and notifications for a set time."], ["Sleep schedule", "going to bed and waking up at about the same time each day."]],
          slides: [
            { title: "How much sleep (CDC)", bullets: ["Teens 13-17: 8 to 10 hours", "Adults 18+: 7 or more hours"] },
            { title: "Protect your sleep", bullets: ["Same bedtime and wake time", "Dark, calm, cool room", "Screens away about 30 minutes before bed"] },
            { title: "Park your phone", bullets: ["Away from your bed", "Sleep or do not disturb mode on", "Use an alarm clock if needed"] },
            { title: "Check your mood", bullets: ["Which apps leave you feeling worse?", "Often low or can't sleep? Talk to someone", "US: call or text 988 any time"] }
          ],
          sources: [{ name: "CDC: About Sleep", url: "https://www.cdc.gov/sleep/about/index.html" }, { name: "988 Suicide and Crisis Lifeline", url: "https://988lifeline.org/" }],
          tryIt: "Set your screens-off time and phone parking spot for tonight. Turn on sleep or do not disturb mode. Tomorrow, write how you slept and how you felt in the morning.",
          youCanNow: "protect your sleep with a screens-off time, a phone parking spot and do not disturb mode.",
          quickCheck: [
            { objective: "O3", q: "What is a phone parking spot?", options: ["A case for your phone", "A charging cable", "An app setting", "A place away from your bed where the phone stays at night"], answer: 3, why: "Parking the phone away from your bed makes late-night scrolling harder." },
            { objective: "O3", q: "Your bedtime is 10:30 pm. When do you put screens away?", options: ["At 10:30 pm", "About 10 pm", "Whenever you feel tired", "After one more video"], answer: 1, why: "Putting screens away about 30 minutes before bed helps you sleep." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Knowing your screen habits",
        questions: [
          { objective: "O1", q: "Where can you usually find your screen time on an iPhone?", options: ["The camera app", "Settings, then Screen Time", "The calculator", "The App Store"], answer: 1, why: "iPhones track it under Screen Time in Settings." },
          { objective: "O1", q: "What does a high number of pickups tell you?", options: ["Your battery is old", "Your phone pulls you back very often", "You have a fast phone", "Nothing at all"], answer: 1, why: "Pickups show how often you go back to your phone." },
          { objective: "O2", q: "Why do many apps use endless scroll and autoplay?", options: ["To keep you on the app longer", "To save your battery", "To help you sleep", "Because the law requires it"], answer: 0, why: "More time on the app means more ads and money for the app." },
          { objective: "O3", q: "How many hours of sleep does the CDC say teens 13 to 17 need?", options: ["4 to 5", "5 to 6", "12 to 14", "8 to 10"], answer: 3, why: "The CDC lists 8 to 10 hours for teens 13 to 17." },
          { objective: "O3", q: "Which habit protects your sleep?", options: ["Scrolling in bed until you fall asleep", "Leaving notifications on loud", "Putting screens away about 30 minutes before bed", "Gaming until 2 am on school nights"], answer: 2, why: "The CDC suggests putting screens away before bed." }
        ]
      }
    },
    {
      name: "Chapter 2: Taking control",
      lessons: [
        {
          objectives: ["O4"],
          title: "Taming notifications and setting app limits",
          minutes: 5,
          goal: "Turn off non-essential notifications and set a limit on one app.",
          text: [
            "Every notification is an interruption. It can take a while to get your focus back after checking your phone, which slows down homework, practice, studying or work. You decide which apps get to interrupt you.",
            "Keep notifications for people and things that matter (calls and messages from family, school or work alerts, your ride). Turn them off for games, shopping and most social media. You can usually do this in Settings, under Notifications, app by app.",
            "Both iPhone and Android let you set daily time limits on apps, and focus or do not disturb modes for school, work or practice. When you hit a limit, the phone reminds you. You can override it, but the pause gives you a choice. Some people also move tempting apps off the home screen or log out after use, so opening them takes a little more effort."
          ],
          steps: ["Open Settings, then Notifications.", "Keep people and important alerts; turn off games, shopping and most social media.", "Set a daily limit on your top app (Screen Time or Digital Wellbeing).", "Turn on a focus or do not disturb mode during school, work or practice.", "Move one tempting app off your home screen."],
          words: [["Notification", "a message or alert that pops up on your phone from an app."], ["App limit", "a daily time limit you set for an app."], ["Focus mode", "a setting that silences distractions while you work, study or rest."]],
          slides: [
            { title: "You choose who interrupts you", bullets: ["Every alert breaks your focus", "Keep people and important alerts", "Turn off games, shopping, most social"] },
            { title: "Set app limits", bullets: ["Daily limit on your top app", "The reminder gives you a choice"] },
            { title: "Focus modes", bullets: ["School, work or practice time", "Silence the noise"] },
            { title: "Add a little effort", bullets: ["Move tempting apps off the home screen", "Log out after use"] }
          ],
          tryIt: "Go through your notifications and turn off at least three apps that don't need to interrupt you. Then set a daily time limit on your top app from Lesson 1.",
          youCanNow: "control which apps can interrupt you, set app limits and use focus modes.",
          quickCheck: [
            { objective: "O4", q: "Why can notifications slow down your homework?", options: ["Each one interrupts you, and it takes time to get your focus back", "They use up storage", "They make the screen dimmer", "They change your grades"], answer: 0, why: "Every notification is an interruption that pulls your focus away." },
            { objective: "O4", q: "A shopping app sends you sale alerts all day. What do you do?", options: ["Keep them; you might miss a deal", "Check each one right away", "Turn off that app's notifications in Settings", "Turn off your calls and messages instead"], answer: 2, why: "Keep notifications for people and important alerts; turn off shopping and games." }
          ]
        },
        {
          objectives: ["O5"],
          title: "A healthier feed and less comparison",
          minutes: 5,
          goal: "Change your feed so it leaves you feeling better, not worse.",
          text: [
            "Social media shows highlight reels: the best photos, filters and edits. Comparing your everyday life to someone else's best moments can leave you feeling you are not enough. Remember what you see is chosen and edited.",
            "You can train your feed. Unfollow or mute accounts that make you feel bad about your body, money or life. Follow people who teach you something, make you laugh or support your goals: your sport, music, art, a career you want, your culture. Use \"not interested\" options when the app offers them. The algorithm learns from what you watch, so watch on purpose.",
            "Check in with yourself: \"How do I feel after 10 minutes on this app?\" If the answer is often worse, change what you follow or how long you stay. If someone online is being cruel to you, tell a trusted adult; the Koach Learn course Staying Safe from Cyberbullying shows you what to do."
          ],
          steps: ["Scroll your feed for two minutes and notice how each account makes you feel.", "Unfollow or mute two accounts that make you feel worse.", "Follow two accounts that teach, inspire or make you laugh.", "Use \"not interested\" on content you don't want."],
          words: [["Highlight reel", "only the best moments, chosen and edited to look good."], ["Mute", "hide someone's posts without unfollowing or telling them."]],
          slides: [
            { title: "It's a highlight reel", bullets: ["Best photos, filters and edits", "Don't compare your everyday to their best"] },
            { title: "Train your feed", bullets: ["Unfollow or mute what makes you feel worse", "Follow what teaches, inspires or makes you laugh", "Use \"not interested\""] },
            { title: "Check in", bullets: ["How do I feel after 10 minutes?", "Often worse? Change what you follow"] }
          ],
          tryIt: "Spend two minutes on your main app and rate how each of the first ten posts makes you feel (better, same, worse). Mute or unfollow two \"worse\" accounts and follow two that help you grow.",
          youCanNow: "shape your feed so it supports your mood and goals instead of making you compare.",
          quickCheck: [
            { objective: "O5", q: "What does the app's algorithm learn from?", options: ["What you watch and do in the app", "Your school grades", "The weather", "Nothing; feeds are random"], answer: 0, why: "The algorithm learns from what you watch, so watching on purpose shapes your feed." },
            { objective: "O5", q: "You feel worse after 10 minutes on an app most days. What do you try?", options: ["Scroll longer to feel better", "Follow more accounts like the ones that upset you", "Ignore how you feel", "Change who you follow or how long you stay"], answer: 3, why: "If an app often leaves you feeling worse, change your feed or your time on it." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Making and testing your screen plan",
          minutes: 6,
          goal: "Write a screen plan and test it for seven days.",
          text: [
            "A plan turns good ideas into habits. Your screen plan is short and specific, and it is yours: you choose the goals.",
            "Include: your daily screen time goal, your top two apps to limit (with limits set in your phone), your notification changes, your screens-off time and phone parking spot, two things to do instead of scrolling when you are bored (walk, practice your sport, draw, call a friend, read, cook), and one feed change.",
            "Test it for seven days, then compare your screen time, pickups and sleep with your numbers from Lesson 1. Keep what worked and change what didn't. Slipping up one day is normal; just start again the next day. Telling a friend or family member about your plan, or doing it together, makes it easier."
          ],
          steps: ["Write your screen time goal.", "Set limits on your top two apps.", "List your notification changes and screens-off time.", "Write two things to do instead of scrolling.", "Test for seven days and compare with Lesson 1."],
          words: [["Screen plan", "your own written rules for when, where and how much you use screens."]],
          slides: [
            { title: "Your screen plan", bullets: ["Screen time goal and two app limits", "Notification changes", "Screens-off time and parking spot"] },
            { title: "Instead of scrolling", bullets: ["Walk, practice, draw, read, cook", "Call or hang out with a friend"] },
            { title: "Test for seven days", bullets: ["Compare with your Lesson 1 numbers", "Keep what works, change what doesn't", "Slip up? Start again tomorrow"] }
          ],
          tryIt: "Final task: write your screen plan with all the parts, set the limits in your phone, and follow it for seven days. On day seven, compare your screen time, pickups and sleep with your numbers from Lesson 1.",
          youCanNow: "make, follow and adjust a personal screen plan that protects your sleep, focus and mood.",
          quickCheck: [
            { objective: "O6", q: "What do you compare at the end of your seven-day test?", options: ["Your screen time, pickups and sleep with your Lesson 1 numbers", "Your friends' screen time", "Your phone's price", "Your number of followers"], answer: 0, why: "Comparing with your starting numbers shows what worked." },
            { objective: "O6", q: "You get bored and reach for your phone. What does your plan say to do?", options: ["Open your top app", "Turn off app limits", "Do one of your two things instead of scrolling, like a walk or a call", "Stay up later"], answer: 2, why: "Your plan lists two things to do instead of scrolling when you are bored." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Taking control",
        questions: [
          { objective: "O4", q: "Which notifications are usually worth keeping on?", options: ["Messages from family and school or work alerts", "Every game", "Shopping deals", "All social media likes"], answer: 0, why: "Keep alerts that matter; turn off the rest." },
          { objective: "O4", q: "What happens when you reach an app limit you set?", options: ["Your phone is locked forever", "The app is deleted", "Your phone reminds you, giving you a choice", "Your account is banned"], answer: 2, why: "The limit adds a pause so you can choose." },
          { objective: "O5", q: "Why is comparing yourself to social media posts unfair to you?", options: ["Posts are always fake", "Phones are too small", "Nobody posts anything real", "Posts are often highlight reels: chosen and edited best moments"], answer: 3, why: "You are comparing your everyday to someone else's best moments." },
          { objective: "O5", q: "An account often makes you feel worse about yourself. What can you do?", options: ["Watch it more", "Mute or unfollow it", "Send it your password", "Delete your phone"], answer: 1, why: "Muting or unfollowing changes what your feed shows you." },
          { objective: "O6", q: "You broke your screen plan on day three. What now?", options: ["Give up for good", "Delete all your apps", "Start again the next day and adjust if needed", "Hide it from everyone"], answer: 2, why: "Slips are normal; keep going and adjust the plan." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Digital Wellbeing and Healthy Screen Time",
    questions: [
      { objective: "O1", q: "Digital wellbeing means:", options: ["Never using a phone", "Using screens in a way that supports your health, goals and mood", "Having the newest phone", "Getting the most followers"], answer: 1, why: "It is about screens helping you, not taking over." },
      { objective: "O1", q: "On many Android phones, screen time is found in Settings under:", options: ["Digital Wellbeing", "Camera", "Wallpaper", "Bluetooth"], answer: 0, why: "Many Android phones call it Digital Wellbeing; names can vary." },
      { objective: "O1", q: "Which three numbers are most useful to check first?", options: ["Battery, storage, brightness", "Followers, likes, comments", "Daily average, top apps, pickups or notifications", "Phone price, age, color"], answer: 2, why: "These show how much and how often you use your phone." },
      { objective: "O1", q: "Is there one perfect screen time number for everyone?", options: ["Yes, exactly 1 hour", "Yes, exactly 3 hours", "Yes, zero", "No; what matters is whether it fits your goals"], answer: 3, why: "Your screen time should fit your sleep, school, work and life." },
      { objective: "O2", q: "Endless scroll is a hook because:", options: ["There is no natural stopping point", "It saves data", "It is required by law", "It makes the screen brighter"], answer: 0, why: "Without a bottom, it's easy to keep going." },
      { objective: "O2", q: "An \"algorithm\" in an app is:", options: ["A type of phone case", "A person who reads your messages", "The computer rules that choose what to show you next", "A game level"], answer: 2, why: "Algorithms learn what keeps you watching." },
      { objective: "O2", q: "Which is a good stopping point to add?", options: ["Turn on autoplay", "Turn off autoplay", "Add more notifications", "Remove all limits"], answer: 1, why: "Turning off autoplay stops the next video starting by itself." },
      { objective: "O2", q: "Before opening an app, a helpful habit is to:", options: ["Turn sound to max", "Open five other apps", "Check every notification", "Decide what you came to do"], answer: 3, why: "A clear purpose makes it easier to close the app." },
      { objective: "O3", q: "How many hours of sleep does the CDC say adults 18 and older need?", options: ["7 or more", "4", "5", "3 to 4"], answer: 0, why: "The CDC says adults need 7 or more hours." },
      { objective: "O3", q: "A phone parking spot at night should be:", options: ["Under your pillow", "In your hand", "Away from your bed", "On loud"], answer: 2, why: "Distance from your bed protects your sleep." },
      { objective: "O3", q: "You often feel low and can't sleep. In the US, what is one place to reach out any time?", options: ["Post it in a comment section", "Call or text 988", "Wait and tell no one", "Ask a random app"], answer: 1, why: "988 is free and open 24/7; also talk to a trusted adult or doctor." },
      { objective: "O4", q: "Which notification is best to turn off?", options: ["Your ride is here", "A message from your parent", "A school alert", "A game telling you to come back"], answer: 3, why: "Games and shopping alerts rarely need to interrupt you." },
      { objective: "O4", q: "What is a focus mode?", options: ["A setting that silences distractions while you study, work or rest", "A camera filter", "A paid app", "A game"], answer: 0, why: "Focus modes silence alerts for a set time." },
      { objective: "O4", q: "Moving a tempting app off your home screen helps because:", options: ["It deletes your account", "It makes opening it take a little more effort", "It makes the app faster", "It earns you points"], answer: 1, why: "A small extra step gives you time to choose." },
      { objective: "O5", q: "A \"highlight reel\" is:", options: ["A fishing tool", "A live, unedited stream", "Your screen time report", "Only the best moments, chosen and edited"], answer: 3, why: "Social media often shows only the best, edited moments." },
      { objective: "O5", q: "What does muting an account do?", options: ["Reports them to police", "Deletes their account", "Hides their posts without unfollowing or telling them", "Sends them a message"], answer: 2, why: "Muting quietly hides their posts." },
      { objective: "O5", q: "A good check-in question after using an app is:", options: ["How many likes did I get?", "How do I feel after 10 minutes on this app?", "Who has more followers?", "What should I buy?"], answer: 1, why: "Noticing how you feel helps you change what you use." },
      { objective: "O6", q: "Which belongs in your screen plan?", options: ["Your passwords", "A list of people to argue with", "Turning on every notification", "Two things to do instead of scrolling"], answer: 3, why: "Having other activities ready makes it easier to put the phone down." },
      { objective: "O6", q: "How long should you test your screen plan before judging it?", options: ["One minute", "One hour", "Seven days", "Never test it"], answer: 2, why: "A week gives you real numbers to compare." },
      { objective: "O6", q: "What makes sticking to a screen plan easier?", options: ["Telling a friend or family member, or doing it together", "Keeping it a secret", "Making it as strict as possible", "Changing it every hour"], answer: 0, why: "Support from others helps you keep going." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Pre-Test: What Do You Already Know?",
    from: [
      0,
      2,
      4,
      6,
      9,
      10,
      11,
      14,
      16,
      17
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      {
        name: "Goal and app limits",
        objective: "O4",
        notYet: "No screen time goal, or limits not set in the phone.",
        meets: "A daily screen time goal and limits set on the top two apps.",
        exceeds: "Also uses a focus mode for school, work or practice."
      },
      {
        name: "Notifications",
        objective: "O4",
        notYet: "No notification changes.",
        meets: "At least three non-essential apps' notifications turned off, keeping people and important alerts.",
        exceeds: "Also moved a tempting app off the home screen."
      },
      {
        name: "Sleep plan",
        objective: "O3",
        notYet: "No screens-off time or phone parking spot.",
        meets: "A screens-off time about 30 minutes before bed and a parking spot away from the bed.",
        exceeds: "Sleep or do not disturb mode is on every night of the test."
      },
      {
        name: "Feed and alternatives",
        objective: "O5",
        notYet: "No feed change, or no alternatives to scrolling.",
        meets: "One feed change and two things to do instead of scrolling.",
        exceeds: "Notes how the feed change affected their mood."
      },
      {
        name: "Seven-day test",
        objective: "O6",
        notYet: "The plan was not tested, or results were not compared.",
        meets: "Followed for seven days, with screen time, pickups and sleep compared with Lesson 1.",
        exceeds: "Says what to keep and what to change for next week."
      }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Learners whose screen time or pickups go down after the seven-day test (self-reported)",
      "Learners who report more hours of sleep in the 30-day follow-up",
      "Learners still using their screen plan after 30 days (follow-up survey)"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "The learner's own phone or device",
      "Paper or a notes app for the screen plan and daily notes",
      "A cheap alarm clock if the phone is used as an alarm (optional)",
      "About 60 minutes in total, plus a seven-day test"
    ],
    facilitatorNotes: [
      "Keep it a choice, not a lecture: learners set their own goals and keep their numbers private unless they want to share.",
      "Help learners who have different phones find the right settings; menus differ by device.",
      "Share local mental health and crisis resources, including 988 in the US, and tell learners who to talk to if they often feel low.",
      "Run the seven-day test as a group challenge with a check-in at the end of the week.",
      "Score the screen plan with the rubric and give feedback on one Not yet row at a time."
    ]
  }
};
