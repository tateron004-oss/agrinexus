"use strict";

// Koach Learn course: Youth -> "AI for Gaming and Esports" (bonus). Skill-building: by the end the student can use an AI assistant as a practice coach for a game they play, review a match, and game safely and fairly.
// Shape: scripts/koachlearn-courses/README.md; model: re-entry/reentry-ai-digital-confidence.js.

module.exports = {
  id: "youth-ai-gaming-esports",
  category: "Youth",
  name: "AI for Gaming and Esports",
  skills: "Setting a practice goal, Building a practice plan with AI, Reviewing a match, Team communication, Gaming safely and fairly, Exploring esports careers",
  outcome: "use a free AI assistant as a practice coach: set one clear goal for a game you play, build a one-week practice plan, review a match with notes, and keep your gaming safe, fair and balanced with school and sleep.",
  about: [
    "This course is for teens who play video games, from casual players to people on a school or club esports team. You do not need expensive gear. You need a game you play and a free AI assistant.",
    "You will learn how AI already shows up inside games, then how to use an AI assistant like a coach: to set a goal, plan practice and spot patterns in your matches. You will also learn how to talk well with a team, how to stay safe and fair online, and what jobs exist around esports.",
    "Check your school's rules on AI, the age rating of your games, and each app's minimum age, and involve a parent or guardian before you sign up for anything. Each lesson ends with a \"Try it now\" task. There is a knowledge check after each chapter and a 20-question quiz at the end."
  ],
  finalTask: "Pick one game you play and one skill to improve. Use an AI assistant to build a one-week practice plan that fits around school, homework and sleep. Play and review one match with three written notes, ask the AI to find a pattern and suggest one drill, and write a short team or club message about what you will work on next.",
  chapters: [
    {
      name: "Chapter 1: Practicing smarter with AI",
      lessons: [
        {
          title: "Where AI shows up in games, and how it can coach you",
          minutes: 4,
          goal: "Name ways AI is used in games and ways an AI assistant can help you practice.",
          text: [
            "Games have used AI for a long time. The computer-controlled characters you play against, the system that matches you with players near your skill, and tools that catch cheaters can all use AI.",
            "An AI assistant such as ChatGPT, Microsoft Copilot or Google Gemini is different. It cannot see your screen or play for you, but it can help you think: set goals, plan practice, explain strategy ideas and find patterns in notes you give it.",
            "It does not know every game patch or update, and it can be wrong. Check strategy tips against the game's official notes, your team captain or coach, and your own results."
          ],
          words: [["AI", "artificial intelligence: computer programs that do tasks that usually need a person."], ["Matchmaking", "the system that picks who you play with or against."], ["Patch", "an update that changes a game."]],
          slides: [
            { title: "AI inside games", bullets: ["Computer-controlled characters", "Matchmaking by skill", "Tools that catch cheaters"] },
            { title: "An AI assistant as a coach", bullets: ["Helps set goals and plan practice", "Explains strategy ideas", "Finds patterns in your notes"] },
            { title: "Its limits", bullets: ["It cannot see your screen or play for you", "It may not know the latest patch", "Check tips against real results"] }
          ],
          tryIt: "Write down the game you play most and three things in it you would like to get better at. Circle the one that matters most to you right now.",
          youCanNow: "name ways AI is used in games and explain what an AI assistant can and cannot do as a practice coach."
        },
        {
          title: "Setting a goal and building a practice plan",
          minutes: 5,
          goal: "Use an AI assistant to turn one goal into a weekly practice plan that fits your life.",
          text: [
            "Getting better comes from practicing one thing on purpose, not just playing more. A good goal is small and measurable: \"Land more of my shots in practice mode\" or \"Call out enemy positions every round\", not \"get good\".",
            "Give the AI your game, your goal, your current level and your real schedule. For example: \"I play Rocket League. I want better aerial hits. I can practice 30 minutes on 4 school nights after homework. Make a simple one-week plan with short drills and a way to track progress.\"",
            "Put school, homework, sleep and family time in first. Esports players at every level take breaks, stretch and rest their eyes. A plan you can actually keep beats a huge plan you quit."
          ],
          steps: ["Choose one small, measurable goal.", "Tell the AI your game, goal, level and real free time.", "Ask for a one-week plan with short drills and a way to track progress.", "Check it leaves time for school, homework and sleep.", "Ask for one change if it is too much."],
          words: [["Measurable goal", "a goal you can check with a number or a yes or no."], ["Drill", "a short exercise that practices one skill."]],
          slides: [
            { title: "Practice on purpose", bullets: ["One skill at a time", "Small and measurable", "Not just \"get good\""] },
            { title: "What to tell the AI", bullets: ["Your game and goal", "Your level", "Your real free time"] },
            { title: "A plan you can keep", bullets: ["School, homework and sleep first", "Short drills, short breaks", "Track progress each day"] }
          ],
          tryIt: "Ask an AI assistant for a one-week practice plan for the skill you circled in Lesson 1, using your real schedule. Ask it to make the plan shorter if it takes more than 30 to 45 minutes a day.",
          youCanNow: "turn one gaming goal into a realistic weekly practice plan with an AI assistant."
        },
        {
          title: "Reviewing a match with AI",
          minutes: 5,
          goal: "Write notes from a match and use AI to find a pattern and suggest a drill.",
          text: [
            "Top players review their matches. After a match, or while watching a replay if your game has one, write three short notes: one thing that went well, one mistake, and when it happened.",
            "Paste the notes into an AI assistant and ask: \"Here are my notes from three matches. What patterns do you see, and what is one drill that would help?\" The AI is good at spotting repeats you might miss.",
            "Keep notes about the game, not about other people. Do not paste other players' usernames, private messages or anything personal. And be kind to yourself: the goal is to learn, not to feel bad."
          ],
          steps: ["Play or watch a replay of one match.", "Write three notes: something good, a mistake, and when it happened.", "Collect notes from two or three matches.", "Ask the AI for patterns and one drill.", "Add the drill to your practice plan."],
          words: [["Replay", "a recording of a match you can watch again."], ["Pattern", "something that happens again and again."]],
          slides: [
            { title: "Three notes per match", bullets: ["One thing that went well", "One mistake", "When it happened"] },
            { title: "Ask AI for patterns", bullets: ["Paste notes from 2-3 matches", "\"What patterns do you see?\"", "\"What is one drill that would help?\""] },
            { title: "Keep it about the game", bullets: ["No other players' names or messages", "Learn, do not beat yourself up"] }
          ],
          tryIt: "Play one match, write three notes, and ask an AI assistant what it notices and what one drill it suggests. Add that drill to your plan.",
          youCanNow: "review a match with notes and use AI to find a pattern and choose a drill."
        }
      ],
      check: {
        title: "Knowledge Check 1: Practicing smarter with AI",
        questions: [
          { q: "Which is an example of AI inside a game?", options: ["The power cord", "Computer-controlled characters you play against", "The game's box", "Your headset"], answer: 1, why: "Computer-controlled characters often use AI." },
          { q: "Which is the best practice goal?", options: ["\"Get good\"", "\"Play all night\"", "\"Call out enemy positions every round this week\"", "\"Win everything\""], answer: 2, why: "It is small and measurable." },
          { q: "What should you tell the AI to get a useful practice plan?", options: ["Your game, goal, level and real free time", "Your password", "Only the word \"plan\"", "Your home address"], answer: 0, why: "Those details let it build a plan that fits you." },
          { q: "Your AI plan takes 3 hours every school night. What do you do?", options: ["Skip homework", "Stay up late", "Ask the AI to make it shorter and fit around school and sleep", "Follow it anyway"], answer: 2, why: "A plan you can keep puts school and sleep first." },
          { q: "What should you leave out of match notes you give an AI?", options: ["When a mistake happened", "What went well", "Other players' usernames and private messages", "The name of the game"], answer: 2, why: "Keep notes about the game, not about other people's personal details." }
        ]
      }
    },
    {
      name: "Chapter 2: Teams, safety and esports futures",
      lessons: [
        {
          title: "Talking well with your team",
          minutes: 5,
          goal: "Use AI to help write short team callouts and a clear club or team message.",
          text: [
            "Good teams talk clearly and kindly. Callouts are short words the team agrees on, like \"two left\" or \"rotating mid\". Short, calm callouts beat long or angry ones.",
            "An AI assistant can help you make a callout list for your game, or write a message for your school club: practice times, what you will work on, and a reminder to be respectful. Ask: \"Write a short, friendly message to my school esports club about Thursday practice. Keep it under 80 words.\"",
            "If a teammate makes a mistake, focus on the next play, not blame. Teams that stay positive play better and have more fun."
          ],
          steps: ["List the most common moments in your game that need a callout.", "Ask the AI for short, clear callout words for each.", "Agree on the list with your team.", "Use AI to draft a short, friendly team or club message.", "Read it, change it to sound like you, then share it."],
          words: [["Callout", "a short word or phrase that tells teammates what is happening."], ["Esports", "organized, competitive video gaming, often with teams and leagues."]],
          slides: [
            { title: "Clear callouts", bullets: ["Short words the team agrees on", "Calm beats loud", "Example: \"two left\""] },
            { title: "AI for team messages", bullets: ["Practice time and place", "What you will work on", "A reminder to be respectful"] },
            { title: "Stay positive", bullets: ["Focus on the next play", "No blame", "Make it sound like you"] }
          ],
          tryIt: "Ask an AI assistant to help you make a list of five callouts for your game. Then have it draft a short message to your team or club about your next practice, and rewrite it in your own voice.",
          youCanNow: "create clear team callouts and a friendly team message with AI's help."
        },
        {
          title: "Gaming safely and fairly",
          minutes: 5,
          goal: "Spot cheats, scams and unsafe chats, and know what to do.",
          text: [
            "Cheats such as aimbots or hacked files break a game's rules and can get your account banned. Sites that promise free game currency, skins or \"AI cheats\" often steal accounts or install harmful software. Never download them or give your login to anyone.",
            "Be careful in chats. Do not share your real name, school, address, phone number or photos with people you only know online. If someone pressures you, asks for secrets, or makes you uncomfortable, block them, report them in the game, and tell a parent, guardian or trusted adult.",
            "Games carry age ratings. In the United States the ESRB rates games, for example T (Teen) for about 13 and up and M (Mature) for 17 and up. Talk with your family about which games and how much screen time are right for you."
          ],
          steps: ["Never use cheats or download \"free currency\" tools.", "Never give your login or the code sent to your phone to anyone.", "Keep your real name, school and address out of chats.", "Block, report and tell a trusted adult when something feels wrong.", "Check a game's age rating with your family."],
          words: [["Aimbot", "a cheat that aims for you; it breaks game rules."], ["Ban", "when a game blocks your account for breaking rules."], ["Age rating", "a label that says which ages a game is meant for."]],
          slides: [
            { title: "Play fair", bullets: ["Cheats can get your account banned", "\"Free currency\" sites steal accounts", "Never share your login or phone code"] },
            { title: "Chat safety", bullets: ["No real name, school or address", "No photos to strangers", "Block, report, tell a trusted adult"] },
            { title: "Age ratings", bullets: ["ESRB T: generally 13 and up", "ESRB M: generally 17 and up", "Talk with your family about games and time"] }
          ],
          sources: [{ name: "ESRB: Ratings guide", url: "https://www.esrb.org/ratings-guide/" }],
          tryIt: "Open the settings of a game or platform you use and find where to block and report a player. Then look up the age rating of your favorite game on the ESRB website.",
          youCanNow: "spot cheats, account scams and unsafe chats, and know how to block, report and get help."
        },
        {
          title: "Esports careers and putting it all together",
          minutes: 6,
          goal: "Explore jobs around esports and complete your practice plan and match review.",
          text: [
            "Only a few people become professional players, but esports needs many other people: coaches, team managers, shoutcasters who commentate matches, video editors, graphic designers, event organizers, and the people who design and test games.",
            "Ask an AI assistant: \"What jobs exist in esports besides being a pro player? What school subjects and clubs help with each?\" Then check the answers with a school counselor or a real job listing, because AI can be out of date.",
            "Many schools have esports clubs or teams. If yours does not, a club advisor or teacher may help you start one. Now put it all together: goal, plan, match review and a team message."
          ],
          steps: ["Ask AI to list esports jobs and the skills each needs.", "Pick one job that interests you.", "Check it with a counselor or a real job listing.", "Complete your goal, plan, match review and team message."],
          words: [["Shoutcaster", "a person who commentates esports matches live."], ["Event organizer", "a person who plans and runs tournaments."]],
          slides: [
            { title: "More than pro players", bullets: ["Coaches and team managers", "Shoutcasters and video editors", "Designers, testers, event organizers"] },
            { title: "Explore with AI, then check", bullets: ["Ask which skills each job needs", "Check with a counselor or job listing"] },
            { title: "Your final task", bullets: ["One goal and a one-week plan", "One match reviewed with three notes", "One drill and a team message"] }
          ],
          tryIt: "Final task: build a one-week practice plan with AI that fits around school and sleep, review one match with three notes, ask the AI for a pattern and one drill, and write a short team or club message about what you will work on next.",
          youCanNow: "use AI as a practice coach, game safely and fairly, and name esports jobs beyond being a pro player."
        }
      ],
      check: {
        title: "Knowledge Check 2: Teams, safety and esports futures",
        questions: [
          { q: "What makes a good callout?", options: ["Long and detailed", "Short, calm and agreed by the team", "Loud and angry", "Different every time"], answer: 1, why: "Short agreed callouts are fast and clear." },
          { q: "A website offers free game currency if you enter your login. What do you do?", options: ["Enter it quickly", "Share the link with friends", "Give them your phone code", "Do not enter it; it is likely a scam"], answer: 3, why: "Free-currency sites often steal accounts." },
          { q: "Someone you only know online asks what school you go to. What do you do?", options: ["Tell them", "Send a photo of your uniform", "Do not share it; block and tell a trusted adult if they pressure you", "Give your address instead"], answer: 2, why: "Keep personal details private online." },
          { q: "An ESRB rating of M means a game is generally for ages:", options: ["17 and up", "6 and up", "10 and up", "Everyone"], answer: 0, why: "M (Mature) is generally for 17 and up." },
          { q: "Which is an esports job besides pro player?", options: ["Shoutcaster", "Aimbot maker", "Account seller", "Cheat tester"], answer: 0, why: "Shoutcasters commentate matches; the others break rules." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: AI for Gaming and Esports",
    questions: [
      { q: "Matchmaking in a game is:", options: ["A way to buy skins", "The system that picks who you play with or against", "A cheat", "A type of controller"], answer: 1, why: "Matchmaking pairs players, often by skill." },
      { q: "What can an AI assistant NOT do for your gaming?", options: ["Help plan practice", "Explain strategy ideas", "See your screen and play for you", "Find patterns in your notes"], answer: 2, why: "A chat assistant helps you think; it does not play for you." },
      { q: "Why check AI strategy tips against official game notes?", options: ["AI may not know the latest patch", "AI is always right", "Official notes are illegal", "It is a school rule"], answer: 0, why: "Games change with patches and AI can be out of date." },
      { q: "A measurable goal is one you can:", options: ["Never finish", "Only feel", "Check with a number or a yes or no", "Forget"], answer: 2, why: "Measurable means you can check it." },
      { q: "Which belongs in your practice plan first?", options: ["Late-night sessions", "School, homework and sleep", "Buying new gear", "Playing other games"], answer: 1, why: "A good plan fits around school and rest." },
      { q: "A drill is:", options: ["A short exercise that practices one skill", "A cheat code", "A team name", "A game rating"], answer: 0, why: "Drills practice one skill at a time." },
      { q: "Your plan feels like too much. What do you do?", options: ["Quit gaming", "Ask the AI to make it shorter", "Skip sleep", "Ignore it"], answer: 1, why: "Follow-up requests adjust the plan." },
      { q: "Which three notes should you write after a match?", options: ["Score, weather, snack", "Other players' names and messages", "Something good, a mistake, and when it happened", "Nothing"], answer: 2, why: "These notes help you learn from the match." },
      { q: "Why give the AI notes from several matches?", options: ["So it can spot patterns that repeat", "To make it slower", "So it can log in for you", "It needs your password"], answer: 0, why: "Patterns show up across several matches." },
      { q: "What should you do with the drill the AI suggests?", options: ["Ignore it", "Post it publicly", "Delete your notes", "Add it to your practice plan"], answer: 3, why: "A drill helps only if you practice it." },
      { q: "A callout is:", options: ["A short phrase telling teammates what is happening", "A cheat", "A ban", "A rating"], answer: 0, why: "Callouts help teams talk fast." },
      { q: "A teammate makes a mistake. The best response is:", options: ["Blame them in chat", "Leave the match", "Focus on the next play", "Report them"], answer: 2, why: "Positive teams play better." },
      { q: "Before sharing an AI-drafted club message, you should:", options: ["Send it unread", "Read it and make it sound like you", "Add your password", "Make it longer"], answer: 1, why: "You are responsible for what you send." },
      { q: "Using an aimbot can:", options: ["Get your account banned", "Help you learn faster", "Raise your age rating", "Make you a coach"], answer: 0, why: "Cheats break rules and can lead to a ban." },
      { q: "Someone asks for the code that was just sent to your phone. You:", options: ["Read it to them", "Never share it", "Post it in chat", "Send it to your team"], answer: 1, why: "That code protects your account." },
      { q: "A player online makes you uncomfortable. What do you do?", options: ["Keep chatting", "Give them your number", "Block, report and tell a trusted adult", "Send a photo"], answer: 2, why: "Blocking, reporting and telling an adult keeps you safe." },
      { q: "ESRB T (Teen) is generally for ages:", options: ["3 and up", "13 and up", "18 and up only", "Under 10"], answer: 1, why: "T is generally appropriate for 13 and up." },
      { q: "Before signing up for a new gaming or AI app, a teen should:", options: ["Use a fake birthday", "Skip the terms", "Share a parent's password", "Check the minimum age and involve a parent or guardian"], answer: 3, why: "Age limits and parent involvement keep you safe and within the rules." },
      { q: "A shoutcaster:", options: ["Commentates esports matches", "Makes cheats", "Bans players", "Rates games"], answer: 0, why: "Shoutcasters are the voices of esports broadcasts." },
      { q: "AI lists esports jobs for you. What next?", options: ["Believe every detail", "Quit school", "Check with a counselor or a real job listing", "Pay for a course right away"], answer: 2, why: "AI can be out of date; check with real sources." }
    ]
  }
};
