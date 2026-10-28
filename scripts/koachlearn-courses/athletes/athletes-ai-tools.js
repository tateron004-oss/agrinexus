"use strict";

// Koach Learn course: Athletes -> "AI Tools for Athletes". Skill-building course: by the end the student can DO the skill in `outcome`.
// Shape: scripts/koachlearn-courses/README.md. Model: re-entry/reentry-ai-digital-confidence.js.

module.exports = {
  id: "athletes-ai-tools",
  category: "Athletes",
  name: "AI Tools for Athletes",
  skills: "Choosing the right AI tool for a job, Using an AI assistant for planning, Making graphics with Canva, Tracking stats in Google Sheets, Judging a tool's privacy and cost",
  outcome: "pick and use three free AI tools for a real athlete job: a planner, a design tool and a stats sheet, and judge whether a new app is safe and worth it before you sign up.",
  about: [
    "This course is for athletes and coaches who keep hearing about AI apps and want to know which ones are actually useful, and how to use them.",
    "You will build a small free toolkit: an AI assistant for planning and writing, a design tool for graphics, and a spreadsheet for tracking your numbers. You will also learn a quick check for any new app before you give it your data or money.",
    "Each lesson is about five minutes with a hands-on \"Try it now\". A knowledge check closes each chapter, and a 20-question quiz closes the course."
  ],
  finalTask: "Build your athlete toolkit: use an AI assistant to plan next week, make one game-day graphic in Canva, and set up a Google Sheet that tracks one stat over five sessions. Then run the five-question app check on one new sports app and write down whether you would use it.",
  chapters: [
    {
      name: "Chapter 1: Your free AI toolkit",
      lessons: [
        {
          title: "Matching the tool to the job",
          minutes: 4,
          goal: "Sort common athlete jobs into the right type of tool.",
          text: [
            "There are hundreds of AI apps, but most fit into a few types. AI assistants (ChatGPT, Microsoft Copilot, Google Gemini) write, explain and plan. Design tools (like Canva) make graphics and short videos. Spreadsheets (Google Sheets, Microsoft Excel) keep and chart your numbers. Fitness trackers and team video apps collect data from your body or your games.",
            "Start with the job, not the app. \"I need a weekly plan\" points to an assistant. \"I need a game-day post\" points to a design tool. \"I want to see if my sprint time is improving\" points to a spreadsheet.",
            "Free versions are usually enough to start. Learn one tool of each type well before adding more."
          ],
          words: [["AI assistant", "an AI program you chat with to write, explain or plan."], ["Spreadsheet", "a grid of rows and columns for keeping and charting numbers."]],
          slides: [
            { title: "Four tool types", bullets: ["AI assistant: write, explain, plan", "Design tool: graphics and short videos", "Spreadsheet: track and chart numbers", "Trackers and video apps: collect data"] },
            { title: "Start with the job", bullets: ["Weekly plan -> assistant", "Game-day post -> design tool", "Is my time improving? -> spreadsheet"] },
            { title: "Keep it simple", bullets: ["Free versions are enough to start", "Learn one tool of each type well"] }
          ],
          tryIt: "List five jobs you do as an athlete or coach each week (for example plan workouts, post on social media, track a stat). Next to each, write which tool type fits.",
          youCanNow: "match an athlete job to the right type of AI tool."
        },
        {
          title: "An AI assistant as your planner",
          minutes: 5,
          goal: "Use an AI assistant to turn your schedule into a clear weekly plan.",
          text: [
            "An AI assistant is great at turning a messy list into a plan. Give it your practices, games, classes and work shifts, and ask for a weekly plan in a table.",
            "Be specific: \"I'm a college volleyball player. Practice is 2-5 pm Monday to Friday, games Saturday. Classes are 9-12. Make a weekly table with study blocks, meals and sleep times.\" Then improve it with follow-ups like \"Add 30 minutes for film on Wednesday.\"",
            "The assistant plans; your coach sets the training. Do not ask it to change workouts your coach wrote, and check anything about health or rest with your athletic trainer."
          ],
          steps: ["List your fixed times: practices, games, classes, work.", "Ask for a weekly plan in a table.", "Ask for one change at a time.", "Copy the final plan into your calendar or notes."],
          words: [["Follow-up", "a second request that changes or builds on the answer."]],
          slides: [
            { title: "Give it your fixed times", bullets: ["Practices and games", "Classes and work shifts", "Travel days"] },
            { title: "Ask for a table", bullets: ["Study blocks, meals, sleep", "Then one change at a time"] },
            { title: "Who decides what", bullets: ["AI organizes your week", "Coach sets training", "Athletic trainer for health and rest"] }
          ],
          tryIt: "Type your real fixed times for next week into an AI assistant and ask for a weekly plan in a table. Ask for one improvement.",
          youCanNow: "turn your schedule into a weekly plan with an AI assistant."
        },
        {
          title: "Making a game-day graphic with Canva",
          minutes: 5,
          goal: "Make a simple game-day graphic using a free design template.",
          text: [
            "Canva is a free design tool on the web and as an app. It has ready-made templates for social posts, flyers and stories, and it includes AI features that can suggest text or images.",
            "A clean game-day graphic has four things: who is playing, when, where, and one strong photo. Use your team colors, big readable text, and nothing more.",
            "Use only photos you took or have permission to use. Many schools have rules about using school logos and names, so ask your athletic department before posting a graphic with official logos."
          ],
          steps: ["Open Canva and search templates for \"game day\".", "Pick a template sized for the platform you use.", "Change the text: opponent, date, time, place.", "Swap in your own photo and team colors.", "Download it and check it on your phone before posting."],
          words: [["Template", "a ready-made design you change to make your own."], ["Permission", "a yes from the owner to use their photo, logo or name."]],
          slides: [
            { title: "Canva in one line", bullets: ["Free design tool with ready templates", "Web and phone app"] },
            { title: "A clean game-day graphic", bullets: ["Who, when, where", "One strong photo", "Team colors, big text"] },
            { title: "Stay in the rules", bullets: ["Use your own photos or ones you may use", "Ask before using school logos"] }
          ],
          tryIt: "Make a game-day graphic in Canva for your next game or practice. Check it on your phone: can you read the time and place in two seconds?",
          youCanNow: "make a clean game-day graphic from a template and use photos and logos the right way."
        }
      ],
      check: {
        title: "Knowledge Check 1: Your free AI toolkit",
        questions: [
          { q: "You want to see if your sprint time is improving. Which tool type fits best?", options: ["A design tool", "A music app", "A spreadsheet", "A photo filter"], answer: 2, why: "Spreadsheets keep numbers and chart them over time." },
          { q: "What should you start with when choosing a tool?", options: ["The job you need done", "The most popular app", "The most expensive app", "Whatever a stranger recommends"], answer: 0, why: "Start with the job, then pick the tool type that fits it." },
          { q: "An AI assistant suggests changing the workout your coach wrote. What do you do?", options: ["Follow the AI", "Skip practice", "Post about it", "Keep the coach's workout and ask your coach if you have questions"], answer: 3, why: "The AI organizes your week; your coach sets training." },
          { q: "What four things belong on a game-day graphic?", options: ["Your password, address, phone, email", "Who, when, where, one strong photo", "Ten photos and five fonts", "Only a logo"], answer: 1, why: "Clear details and one strong photo make a readable graphic." },
          { q: "You want to use your school's logo on a post. What should you do first?", options: ["Copy it from the website", "Ask your athletic department", "Change the colors", "Use it and hope"], answer: 1, why: "Many schools have rules about their logos, so ask first." }
        ]
      }
    },
    {
      name: "Chapter 2: Tracking, judging and building your kit",
      lessons: [
        {
          title: "Tracking one stat in Google Sheets",
          minutes: 5,
          goal: "Set up a sheet that tracks one stat and shows it as a chart.",
          text: [
            "Pick one stat that matters to you and that you can measure the same way each time: free-throw makes out of 20, 40-yard time, mile time, or serve accuracy.",
            "In Google Sheets, make two columns: Date and your stat. Add a row after each session. When you have a few rows, select both columns and insert a chart to see the trend.",
            "You can ask an AI assistant to explain spreadsheet steps or a formula, like how to get your average. Keep the sheet private unless you choose to share it with your coach."
          ],
          steps: ["Open Google Sheets and start a blank sheet.", "Type \"Date\" in A1 and your stat in B1.", "Add one row after each session.", "Select both columns and insert a chart.", "Share it only with your coach if you want feedback."],
          words: [["Trend", "the direction your numbers move over time: up, down or flat."], ["Formula", "a short instruction in a cell that does math, like an average."]],
          slides: [
            { title: "Pick one stat", bullets: ["Measured the same way each time", "Examples: free throws out of 20, mile time"] },
            { title: "Set up the sheet", bullets: ["Column A: Date", "Column B: your stat", "One row per session"] },
            { title: "See the trend", bullets: ["Select both columns and insert a chart", "Ask AI to explain a formula if stuck"] }
          ],
          tryIt: "Set up a Google Sheet for one stat. Enter at least three past sessions (or practice numbers) and insert a chart.",
          youCanNow: "track one stat in a spreadsheet and chart it to see your trend."
        },
        {
          title: "The five-question app check",
          minutes: 5,
          goal: "Judge a new sports or AI app before you give it data or money.",
          text: [
            "New apps promise to make you faster, get you recruited or grow your following. Before signing up, run a quick five-question check.",
            "1. Who makes it, and is it in the official app store? 2. What data does it collect, and can you delete it? (Read the privacy policy summary.) 3. What does it cost after the free trial? 4. Does your coach or school already use something similar? 5. Does it promise results that sound too good, like guaranteed scholarships?",
            "Body and health data, like heart rate, sleep and location, is private. Only share it with apps you trust, and turn off location sharing you do not need."
          ],
          steps: ["Check who makes it and that it is in the official store.", "Read what data it collects and how to delete it.", "Find the price after any free trial.", "Ask your coach what the team already uses.", "Walk away from guaranteed results."],
          words: [["Privacy policy", "the app's explanation of what data it collects and what it does with it."], ["Free trial", "a short free period before the app starts charging."]],
          slides: [
            { title: "Before you sign up", bullets: ["Who makes it? Official store?", "What data does it collect?", "What does it cost after the trial?"] },
            { title: "Two more questions", bullets: ["Does my team already use something?", "Does it promise too much?"] },
            { title: "Protect body data", bullets: ["Heart rate, sleep, location are private", "Turn off location you do not need"] }
          ],
          tryIt: "Pick one sports or AI app you have seen advertised. Answer the five questions about it in a note and decide: use it, try it carefully, or skip it.",
          youCanNow: "check a new app's maker, data, cost and promises before you sign up."
        },
        {
          title: "Putting your toolkit together",
          minutes: 5,
          goal: "Use all three tools together for one real week.",
          text: [
            "Your toolkit works best as a weekly routine. Sunday: use your AI assistant to plan the week. Before a game: make the graphic. After each session: add your stat to the sheet.",
            "Write a short list of your tools and what each one is for, so you are not trying new apps every week. Add a new tool only when you have a job your kit cannot do.",
            "Coaches can use the same kit for a team: a weekly plan for the staff, one graphic per game, and a shared sheet for team stats. Share team sheets only with staff who need them."
          ],
          steps: ["Write your tool list: planner, design, sheet.", "Sunday: plan the week with the assistant.", "Game week: make one graphic.", "After each session: add your stat.", "Review the chart with your coach every few weeks."],
          words: [["Routine", "steps you repeat at the same time each week."], ["Toolkit", "the small set of tools you use again and again."]],
          slides: [
            { title: "Your weekly routine", bullets: ["Sunday: plan the week", "Game week: one graphic", "After each session: add your stat"] },
            { title: "Keep the kit small", bullets: ["Write what each tool is for", "Add a tool only for a new job"] },
            { title: "For coaches", bullets: ["Staff weekly plan", "One graphic per game", "Shared stats sheet for staff only"] }
          ],
          tryIt: "Final task: plan next week with an AI assistant, make one game-day graphic in Canva, set up a sheet that tracks one stat, and run the five-question check on one new app.",
          youCanNow: "use a small set of free AI tools together as a weekly routine."
        }
      ],
      check: {
        title: "Knowledge Check 2: Tracking, judging and building your kit",
        questions: [
          { q: "What makes a stat good for tracking?", options: ["It changes how it is measured each week", "Only your coach can see it", "It is a guess", "You can measure it the same way each time"], answer: 3, why: "Measuring the same way makes the trend meaningful." },
          { q: "In your sheet, what goes in column A?", options: ["The date", "Your password", "Your opponent's name", "Your home address"], answer: 0, why: "Date in column A and the stat in column B lets you chart the trend." },
          { q: "An app promises a guaranteed scholarship if you pay. What does the app check say?", options: ["Pay right away", "Share your location", "It promises too much, so walk away", "Give it your login code"], answer: 2, why: "Guaranteed results are a red flag." },
          { q: "Which is private body data?", options: ["Your jersey color", "Your team name", "Your favorite drill", "Your heart rate and sleep"], answer: 3, why: "Heart rate, sleep and location are private data." },
          { q: "When should you add a new tool to your kit?", options: ["Every week", "When you have a job your kit cannot do", "When a friend posts about one", "Never"], answer: 1, why: "A small kit you know well beats many apps you barely use." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: AI Tools for Athletes",
    questions: [
      { q: "Which tool type writes, explains and plans?", options: ["A stopwatch", "A spreadsheet only", "An AI assistant", "A camera"], answer: 2, why: "AI assistants like ChatGPT, Copilot and Gemini write and plan." },
      { q: "Which is a free design tool with templates?", options: ["Canva", "A calculator", "A scoreboard", "A playbook"], answer: 0, why: "Canva has free templates for posts and flyers." },
      { q: "\"I need a game-day post\" points to:", options: ["A design tool", "A spreadsheet", "A fitness tracker", "A heart-rate monitor"], answer: 0, why: "Graphics are a design-tool job." },
      { q: "How many tools of each type should you learn first?", options: ["Five", "As many as possible", "One, well", "None"], answer: 2, why: "Learning one of each type well is the fastest start." },
      { q: "What should you give an AI assistant to make a weekly plan?", options: ["Your password", "Your fixed times: practices, games, classes", "Your medical records", "Your bank number"], answer: 1, why: "Fixed times let it build the plan around your week." },
      { q: "Who sets your training?", options: ["The AI", "An ad", "A random app", "Your coach"], answer: 3, why: "The assistant organizes; the coach sets training." },
      { q: "The best way to improve the AI's plan is:", options: ["Accept the first one", "Type your password", "One change at a time", "Start a fight with it"], answer: 2, why: "One clear change at a time keeps it on track." },
      { q: "A readable game-day graphic has:", options: ["Tiny text and ten photos", "Only emojis", "Your phone number", "Who, when, where and one strong photo"], answer: 3, why: "Clear details and one photo are easy to read fast." },
      { q: "Which photos can you use in your graphic?", options: ["Your own photos or ones you have permission to use", "Any photo online", "Photos from a rival's page", "Photos of strangers"], answer: 0, why: "Use photos you own or have permission to use." },
      { q: "Before using your school's logo, you should:", options: ["Redraw it", "Ask your athletic department", "Use it anyway", "Buy it online"], answer: 1, why: "Schools often have logo rules." },
      { q: "Which stat is easy to track the same way each time?", options: ["How you felt about the bus ride", "What the crowd thought", "Free-throw makes out of 20", "Your opponent's mood"], answer: 2, why: "A fixed test like makes out of 20 is consistent." },
      { q: "How do you see your trend in Google Sheets?", options: ["Select the columns and insert a chart", "Print it", "Delete old rows", "Email it to a stranger"], answer: 0, why: "A chart shows the direction of your numbers." },
      { q: "You are stuck on a formula for your average. A good move is:", options: ["Give up tracking", "Guess the number", "Share your password", "Ask an AI assistant to explain the formula"], answer: 3, why: "AI assistants explain spreadsheet steps well." },
      { q: "Who should see your personal stats sheet?", options: ["Everyone online", "Only people you choose, like your coach", "Rival teams", "Strangers"], answer: 1, why: "Keep it private and share only by choice." },
      { q: "What does a privacy policy tell you?", options: ["The app's colors", "What data the app collects and what it does with it", "Your workout", "The game score"], answer: 1, why: "It explains how the app handles your data." },
      { q: "Before a free trial, you should check:", options: ["The app's logo", "Your rival's app", "Nothing", "The price after the trial ends"], answer: 3, why: "Many apps start charging after the trial." },
      { q: "Which app promise is a red flag?", options: ["\"Guaranteed scholarship\"", "\"Track your runs\"", "\"Make graphics\"", "\"Free templates\""], answer: 0, why: "Nobody can guarantee a scholarship." },
      { q: "Location sharing you do not need should be:", options: ["Shared with everyone", "Posted online", "Turned off", "Left on forever"], answer: 2, why: "Location is private data; share only when needed." },
      { q: "In the weekly routine, when do you plan the week?", options: ["After the season", "Never", "During the game", "Sunday, with your AI assistant"], answer: 3, why: "Planning at the start of the week sets up everything else." },
      { q: "A coach shares a team stats sheet. Who should have access?", options: ["Anyone with the link online", "Only staff who need it", "Opposing coaches", "Fans"], answer: 1, why: "Team data should go only to people who need it." }
    ]
  }
};
