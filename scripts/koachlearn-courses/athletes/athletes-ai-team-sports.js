"use strict";

// Koach Learn course: Athletes -> "AI for Team Sports" (bonus). Skill-building course: by the end the student can DO the skill in `outcome`.
// Shape: scripts/koachlearn-courses/README.md. Model: re-entry/reentry-ai-digital-confidence.js.

module.exports = {
  id: "athletes-ai-team-sports",
  category: "Athletes",
  name: "AI for Team Sports",
  skills: "Tracking simple team stats, Finding lineup and play patterns, Writing an opponent scouting summary with AI, Planning team communication, Protecting player privacy and fairness",
  outcome: "use a shared spreadsheet and an AI assistant to track a team's simple stats, find one lineup or play pattern, write a one-page opponent scouting summary, and share it with the team in a way that protects player privacy.",
  about: [
    "This course is for coaches, team managers, captains and team analysts in any team sport: basketball, soccer, volleyball, football, hockey, baseball, softball and more.",
    "Pro teams have analytics departments. You can do a simple version with a spreadsheet and a free AI assistant: track what matters, spot patterns, scout opponents, and communicate clearly with players and families.",
    "Each lesson is about five minutes with a \"Try it now\" task. A knowledge check closes each chapter, and a 20-question quiz closes the course. Data supports the coach's judgment; it never replaces it."
  ],
  finalTask: "For your team, set up a shared stats sheet for three games or practices, find one lineup or play pattern with AI help, write a one-page scouting summary of a real opponent using public game film or results, and write a team message that shares the key point without exposing any player's private information.",
  chapters: [
    {
      name: "Chapter 1: Team data",
      lessons: [
        {
          title: "Choosing team stats that matter",
          minutes: 5,
          goal: "Pick three to five team stats tied to how your team wants to play.",
          text: [
            "Team analytics starts with your team's identity. A fast-break basketball team cares about transition points and turnovers. A possession soccer team cares about completed passes and shots from the box. A volleyball team cares about serve receive and side-out percentage.",
            "Pick three to five stats you can actually collect every game with the people you have: a manager, a parent volunteer, an injured player, or video afterward.",
            "Write a clear definition for each so everyone counts it the same way: \"A turnover is any possession lost without a shot.\""
          ],
          steps: ["Write your team's identity in one sentence.", "List stats that match it.", "Pick three to five you can collect every game.", "Write a clear definition for each.", "Assign who collects them."],
          words: [["Team analytics", "using numbers about a team to understand and improve how it plays."], ["Definition", "a clear rule for exactly what counts."]],
          slides: [
            { title: "Start with identity", bullets: ["Fast break? Possession? Defense first?", "Stats that match how you play"] },
            { title: "Pick 3-5 stats", bullets: ["You can collect every game", "With the people you have"] },
            { title: "Define each one", bullets: ["Everyone counts it the same way", "Assign who collects it"] }
          ],
          tryIt: "Write your team's identity in one sentence. Ask an AI assistant to suggest stats that match it, then pick three to five and write definitions.",
          youCanNow: "choose and define team stats that match how your team plays."
        },
        {
          title: "A shared team stats sheet",
          minutes: 5,
          goal: "Set up a shared Google Sheet for team stats with safe access.",
          text: [
            "Use one Google Sheet with a tab per game, or one long table with columns: Date, Opponent, Quarter or Set, Lineup, and your stats. A summary tab can total the season.",
            "Share it only with the coaching staff and managers who need to edit. Use view-only links for others, and never make a sheet with player information public on the web.",
            "Keep only game stats in this sheet. Do not put medical notes, grades, family information or contact details in a team stats sheet; those belong in your school's official systems with the right privacy protections."
          ],
          steps: ["Create a Google Sheet with clear columns.", "Add a summary tab for season totals.", "Share edit access only with staff who collect.", "Use view-only for others; never public.", "Keep medical, grades and contact info out."],
          words: [["Shared sheet", "a spreadsheet several people can open, with access you control."], ["View-only", "people can see but cannot change it."]],
          slides: [
            { title: "Sheet layout", bullets: ["Date, Opponent, Period, Lineup", "Your 3-5 stats", "Summary tab for the season"] },
            { title: "Access", bullets: ["Edit: staff who collect", "View-only for others", "Never public"] },
            { title: "Keep out", bullets: ["Medical notes", "Grades and family info", "Contact details"] }
          ],
          tryIt: "Create your team stats sheet, enter one past game from memory or a box score, and check the sharing settings.",
          youCanNow: "set up a shared team stats sheet with safe access."
        },
        {
          title: "Finding lineup and play patterns",
          minutes: 6,
          goal: "Use your sheet and an AI assistant to spot one lineup or play pattern.",
          text: [
            "After a few games, look for patterns: Which lineups are outscoring opponents? Which quarter or set do we struggle in? Which play type leads to the most points?",
            "Use sorting, filters or a pivot table in Google Sheets. Or copy the table (with player initials or numbers instead of full names) into an AI assistant and ask: \"Which lineups have the best point difference? Which period is weakest? Show your math.\" Check its math against the sheet.",
            "Small samples mislead. A lineup that played four minutes is not proven. Treat patterns as questions for practice and film, not final answers, and the coach decides."
          ],
          steps: ["Sort or filter by lineup and period.", "Use player numbers or initials, not full names, with AI.", "Ask AI to find patterns and show its math.", "Check its math.", "Turn one pattern into a question for practice or film."],
          words: [["Point differential", "points scored minus points allowed."], ["Pivot table", "a spreadsheet tool that groups and totals data, like points by lineup."], ["Sample size", "how much data you have; small samples can mislead."]],
          slides: [
            { title: "Pattern questions", bullets: ["Which lineups outscore opponents?", "Which period is weakest?", "Which play type scores most?"] },
            { title: "Find them", bullets: ["Sort, filter or pivot table", "AI with initials, not full names", "\"Show your math\" and check it"] },
            { title: "Careful", bullets: ["Small samples mislead", "Patterns are questions", "The coach decides"] }
          ],
          tryIt: "Enter at least two games in your sheet. Ask an AI assistant to find the best and worst period or lineup and show its math. Check it and write one question for practice.",
          youCanNow: "find lineup and play patterns and treat them as questions for the coach."
        }
      ],
      check: {
        title: "Knowledge Check 1: Team data",
        questions: [
          { q: "Where should team analytics start?", options: ["Whatever pros track", "Every stat possible", "Your team's identity and how you want to play", "Social media numbers"], answer: 2, why: "Stats should match your style of play." },
          { q: "Why write a definition for each stat?", options: ["So everyone counts it the same way", "To make it longer", "To confuse opponents", "It's not needed"], answer: 0, why: "Consistent counting makes data reliable." },
          { q: "Who should have edit access to the team stats sheet?", options: ["Everyone on the internet", "Opposing coaches", "Fans", "Staff who collect the stats"], answer: 3, why: "Limit editing to the people who need it." },
          { q: "Which should NOT go in a team stats sheet?", options: ["Points by quarter", "A player's medical notes", "Turnovers", "Lineups"], answer: 1, why: "Medical info belongs in protected official systems." },
          { q: "A lineup played four minutes and was +6. You should:", options: ["Start them every game", "Treat it as a question to look at more", "Ignore all data", "Post it online"], answer: 1, why: "Small samples can mislead." }
        ]
      }
    },
    {
      name: "Chapter 2: Scouting and communication",
      lessons: [
        {
          title: "Scouting an opponent with AI",
          minutes: 6,
          goal: "Write a one-page opponent scouting summary from public information.",
          text: [
            "Scouting means learning how an opponent plays before you face them. Use public sources: past results, published box scores, league stats pages, and game film your team has or that is publicly posted. Follow your league's rules on film exchange and scouting.",
            "Watch with three questions: What do they do most on offense? What do they do most on defense? Who are their key players, and what do those players like to do?",
            "Paste your notes into an AI assistant and ask: \"Turn these scouting notes into a one-page summary: their offense, defense, key players, three keys to beat them. Short bullets.\" Check that every point came from your notes, not the AI's guesses."
          ],
          steps: ["Collect public results, stats and allowed film.", "Watch with three questions.", "Write notes with timestamps.", "Ask AI for a one-page summary from your notes only.", "Check every bullet against your notes."],
          words: [["Scouting report", "a summary of how an opponent plays and how to beat them."], ["Tendency", "something a team or player does often in a certain situation."]],
          slides: [
            { title: "Public sources", bullets: ["Results and box scores", "League stats pages", "Allowed game film"] },
            { title: "Three questions", bullets: ["Their offense", "Their defense", "Key players and what they like to do"] },
            { title: "AI summary", bullets: ["From your notes only", "Three keys to beat them", "Check every bullet"] }
          ],
          tryIt: "Pick a real upcoming opponent. Gather public info, write notes with three questions, and use AI to make a one-page summary. Check every bullet.",
          youCanNow: "write a one-page opponent scouting summary from public sources with AI help."
        },
        {
          title: "Clear team communication",
          minutes: 5,
          goal: "Turn data and scouting into short, clear team messages.",
          text: [
            "Players don't need every number. They need one to three clear points: \"They press after every made basket. Inbound to the middle.\" Short messages stick.",
            "Use AI to turn your summary into different versions: a 30-second talk for the locker room, a one-slide graphic for film session, and a short message for the team's official communication app. Match your school's rules on how coaches contact players, especially minors.",
            "Praise in public, correct in private. Team messages talk about the team, not one player's mistakes."
          ],
          steps: ["Pick one to three key points.", "Ask AI for a 30-second talk, one slide and a short message.", "Send through your team's official channel.", "Keep individual feedback private."],
          words: [["Key point", "the one thing players must remember."], ["Official channel", "the communication method your school or club approves for team messages."]],
          slides: [
            { title: "Less is more", bullets: ["One to three points", "Short messages stick"] },
            { title: "Three versions with AI", bullets: ["30-second locker room talk", "One-slide graphic", "Short team message"] },
            { title: "Respect", bullets: ["Use official channels", "Praise in public, correct in private"] }
          ],
          tryIt: "Take your scouting summary and use AI to make a 30-second talk and a three-sentence team message with no more than three key points.",
          youCanNow: "turn data into short, clear and respectful team messages."
        },
        {
          title: "Privacy and fairness in team data",
          minutes: 5,
          goal: "Set team data rules that protect players and keep decisions fair.",
          text: [
            "Player data is personal. Stats, video, and especially health, wearable and academic information need care. Collect only what you need, keep it in approved places, and delete what you no longer need according to your school's rules.",
            "Do not paste full names, health information or private details into AI tools. Use numbers or initials. Many schools and leagues have rules about student data and approved apps; ask your athletic director.",
            "Fairness: numbers can miss things like effort, leadership or defense that doesn't show in a box score, and small samples can be unfair to bench players. Use data to ask better questions, and explain decisions to players as people."
          ],
          steps: ["Collect only what you need.", "Store it in approved places.", "Use numbers or initials with AI.", "Ask your athletic director about data and app rules.", "Explain decisions to players as people."],
          words: [["Student data", "information about students, which schools must protect."], ["Bias", "unfairness that can come from incomplete data or assumptions."]],
          slides: [
            { title: "Player data is personal", bullets: ["Collect only what you need", "Approved places only", "Delete what you no longer need"] },
            { title: "With AI", bullets: ["Numbers or initials", "No health or private info", "Check school app rules"] },
            { title: "Fairness", bullets: ["Numbers miss effort and leadership", "Small samples can be unfair", "Explain decisions to players"] }
          ],
          tryIt: "Final task: write five team data rules, then finish your stats sheet, one pattern, your one-page scouting summary and a team message that protects player privacy.",
          youCanNow: "use team data in a way that protects players and keeps decisions fair."
        }
      ],
      check: {
        title: "Knowledge Check 2: Scouting and communication",
        questions: [
          { q: "Which is a fair source for scouting?", options: ["Secretly filming their closed practice", "Hacking their app", "Asking their players for passwords", "Public box scores and allowed game film"], answer: 3, why: "Use public and allowed sources, following league rules." },
          { q: "AI adds a key point that isn't in your notes. You:", options: ["Remove it or check it yourself", "Keep it", "Make it bold", "Tell the team it's true"], answer: 0, why: "Only use what your notes support." },
          { q: "How many key points should a team message have?", options: ["Twenty", "None", "One to three", "Every stat"], answer: 2, why: "Short messages stick." },
          { q: "Where should individual corrections happen?", options: ["In the team group chat", "On social media", "In front of fans", "In private"], answer: 3, why: "Praise in public, correct in private." },
          { q: "What should you paste into AI instead of player names?", options: ["Full names and birthdays", "Numbers or initials", "Medical notes", "Home addresses"], answer: 1, why: "This protects player privacy." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: AI for Team Sports",
    questions: [
      { q: "Team analytics means:", options: ["Only counting fans", "Replacing the coach", "Using numbers to understand and improve how a team plays", "Selling tickets"], answer: 2, why: "It supports better team decisions." },
      { q: "A fast-break team should track:", options: ["Transition points and turnovers", "Jersey colors", "Bus times", "Crowd size"], answer: 0, why: "Those match a fast-break style." },
      { q: "How many team stats should you start with?", options: ["Three to five", "Fifty", "None", "One hundred"], answer: 0, why: "Few stats you can collect every game." },
      { q: "Who can help collect stats?", options: ["The referee", "The opponent", "A manager, volunteer or injured player", "Nobody"], answer: 2, why: "Use the people you have." },
      { q: "A team stats sheet should be:", options: ["Public on the web", "Shared only with people who need it", "Emailed to opponents", "Printed for fans"], answer: 1, why: "Limit access to protect players." },
      { q: "View-only access means people:", options: ["Can delete it", "Can edit everything", "Can't open it", "Can see but not change it"], answer: 3, why: "It protects your data." },
      { q: "Point differential is:", options: ["Total points", "Free throws only", "Points scored minus points allowed", "Your follower count"], answer: 2, why: "It shows how a lineup does." },
      { q: "A pivot table:", options: ["Is a type of drill", "Is a basketball move", "Deletes rows", "Groups and totals data"], answer: 3, why: "It summarizes data quickly." },
      { q: "When asking AI about lineups, also ask it to:", options: ["Show its math", "Pick the starters", "Post the results", "Guess"], answer: 0, why: "You need to check its work." },
      { q: "Patterns from data are best treated as:", options: ["Final answers", "Questions for practice and film", "Secrets", "Social posts"], answer: 1, why: "Data supports the coach's judgment." },
      { q: "A scouting report summarizes:", options: ["Your own stats only", "Team snacks", "How an opponent plays and how to beat them", "Referee names"], answer: 2, why: "It prepares your team." },
      { q: "A tendency is:", options: ["Something a team does often in a situation", "A one-time play", "A rule", "A score"], answer: 0, why: "Tendencies help predict what they'll do." },
      { q: "Scouting should follow:", options: ["No rules", "The opponent's wishes", "Social media trends", "Your league's rules on film and scouting"], answer: 3, why: "Leagues set fair scouting rules." },
      { q: "AI scouting summaries should come from:", options: ["AI guesses", "Your own notes only", "Rumors", "Fan comments"], answer: 1, why: "Notes are your evidence." },
      { q: "A 30-second locker room talk should have:", options: ["Every stat", "One to three key points", "No point", "Ten slides"], answer: 1, why: "Players remember a few clear points." },
      { q: "Coaches should contact players through:", options: ["Any random app", "Secret accounts", "Public comments", "The school's or club's approved channel"], answer: 3, why: "Rules protect minors and coaches." },
      { q: "Which data needs the most care?", options: ["Health and academic information", "Final scores", "Game dates", "Team colors"], answer: 0, why: "It's private and protected." },
      { q: "Who can tell you which apps your school allows for student data?", options: ["A fan", "An AI", "The athletic director", "An opponent"], answer: 2, why: "Schools set data rules." },
      { q: "Box scores can miss:", options: ["Points", "Rebounds", "Final scores", "Effort, leadership and off-ball defense"], answer: 3, why: "Not everything shows in numbers." },
      { q: "When a decision uses data, coaches should:", options: ["Hide it", "Explain it to players as people", "Blame the spreadsheet", "Post it publicly"], answer: 1, why: "Players deserve respect and clarity." }
    ]
  }
};
