"use strict";

// Koach Learn course: Athletes -> "Video Analysis and Game Intelligence". Skill-building course: by the end the student can DO the skill in `outcome`.
// Shape: scripts/koachlearn-courses/README.md. Model: re-entry/reentry-ai-digital-confidence.js.

module.exports = {
  id: "athletes-video-analysis",
  category: "Athletes",
  name: "Video Analysis and Game Intelligence",
  skills: "Filming usable game and practice video, Watching film with one question, Tagging plays in a spreadsheet, Using AI to summarize tagged plays, Turning film into one practice focus",
  outcome: "film a game or practice, tag at least 20 plays in a spreadsheet with a clear question in mind, use an AI assistant to summarize the patterns, and turn them into one practice focus agreed with your coach.",
  about: [
    "This course is for athletes and coaches who want to learn from video without expensive software. You will use a phone camera, a free spreadsheet and a free AI assistant.",
    "Watching film is a skill. Most people just watch the highlights. You will learn to watch with a question, tag what happens, find patterns, and turn them into something to practice.",
    "Each lesson is about five minutes with a \"Try it now\" task. A knowledge check closes each chapter, and a 20-question quiz closes the course."
  ],
  finalTask: "Film one game or practice (with permission), choose one question, tag at least 20 plays in a Google Sheet, ask an AI assistant to summarize the patterns from your tags, and write one practice focus. Review it with your coach.",
  chapters: [
    {
      name: "Chapter 1: Getting good film",
      lessons: [
        {
          title: "Filming video you can actually use",
          minutes: 5,
          goal: "Set up a phone to film usable game or practice video.",
          text: [
            "Good film starts with a good camera spot. Film from high up if you can, like the top of the bleachers, so you see the whole play and the spacing between players. Hold the phone sideways (landscape) and keep it steady with a tripod or by bracing it.",
            "Follow the ball but keep enough of the field or court in view to see what players without the ball are doing. Do not zoom in too close.",
            "Get permission. Your team, school or league may have rules about filming, and other people's children appear in youth sports video. Ask your coach before filming and before sharing anything."
          ],
          steps: ["Ask your coach for permission to film.", "Find a high, central spot.", "Turn the phone sideways and steady it.", "Keep a wide view; follow the ball.", "Check battery and storage before the game."],
          words: [["Landscape", "holding the phone sideways, so the video is wide."], ["Tripod", "a three-legged stand that holds a camera steady."]],
          slides: [
            { title: "Camera spot", bullets: ["High and central if you can", "See the whole play and spacing"] },
            { title: "Camera setup", bullets: ["Phone sideways", "Steady: tripod or brace it", "Wide view; follow the ball"] },
            { title: "Before you film", bullets: ["Ask your coach", "Check battery and storage", "Ask before sharing"] }
          ],
          tryIt: "At your next practice, with your coach's okay, film five minutes from the highest spot you can find. Watch it back: can you see everyone involved in each play?",
          youCanNow: "set up a phone to film usable game or practice video, with permission."
        },
        {
          title: "Watching film with a question",
          minutes: 5,
          goal: "Pick one clear question before you watch film.",
          text: [
            "If you watch film with no plan, you mostly notice the highlights and your worst mistakes. Coaches watch with a question.",
            "Good questions are narrow: \"Where do I lose the ball?\" \"How fast do I get back on defense?\" \"Which serve receive lineups give up points?\" \"What does the other team do on third down?\"",
            "Pick one question per viewing. Watch once at normal speed for the big picture, then again and pause on each play that answers your question."
          ],
          steps: ["Write one narrow question.", "Watch once at normal speed.", "Watch again and pause on each play linked to your question.", "Write a short note for each play."],
          words: [["Film study", "watching video of games or practice to learn and improve."], ["Game intelligence", "understanding why plays happen, not just what happened."]],
          slides: [
            { title: "No plan = highlights only", bullets: ["You see big plays and big mistakes", "You miss the patterns"] },
            { title: "Narrow questions", bullets: ["\"Where do I lose the ball?\"", "\"How fast do I get back on defense?\"", "\"What do they do on third down?\""] },
            { title: "Two viewings", bullets: ["1. Normal speed: big picture", "2. Pause on plays that answer your question"] }
          ],
          tryIt: "Write three possible questions for your sport and position. Pick one and watch five minutes of film with it, writing a note each time it shows up.",
          youCanNow: "watch film with one clear question and take notes on the plays that answer it."
        },
        {
          title: "Tagging plays in a spreadsheet",
          minutes: 6,
          goal: "Tag plays in Google Sheets so patterns can be counted.",
          text: [
            "Tagging means writing the same few labels for each play. It turns video into data you can count.",
            "Make columns: Play # , Time in video, Situation (for example \"fast break\" or \"2nd and long\"), What happened, Result (good, neutral or bad), and Note. Use the same words every time, so \"turnover\" is always \"turnover\", not sometimes \"lost ball\".",
            "Team video apps such as Hudl tag plays for many schools; if your team uses one, ask your coach how to use its tags. A spreadsheet works for anyone, for free."
          ],
          steps: ["Open Google Sheets.", "Columns: Play #, Time, Situation, What happened, Result, Note.", "Pick a short list of tag words and stick to them.", "Pause and fill one row per play.", "Tag at least 20 plays."],
          words: [["Tag", "a label you give each play, like \"turnover\" or \"fast break\"."], ["Timestamp", "the time in the video where a play starts, like 12:45."]],
          slides: [
            { title: "Tagging = video into data", bullets: ["Same labels for each play", "Now you can count patterns"] },
            { title: "Your columns", bullets: ["Play #, Time, Situation", "What happened, Result, Note"] },
            { title: "Tag rules", bullets: ["Short list of tag words", "Same word every time", "At least 20 plays"] }
          ],
          tryIt: "Set up your tagging sheet and tag 10 plays from your film using your question from Lesson 2.",
          youCanNow: "tag plays in a spreadsheet with consistent labels and timestamps."
        }
      ],
      check: {
        title: "Knowledge Check 1: Getting good film",
        questions: [
          { q: "What is the best camera spot for game film?", options: ["On the ground behind the goal only", "Inside your bag", "High and central", "Zoomed in on one player's face"], answer: 2, why: "High and central shows the whole play and spacing." },
          { q: "Before filming practice, you should:", options: ["Ask your coach for permission", "Post it live", "Film the other team's locker room", "Turn the phone vertical"], answer: 0, why: "Teams and schools often have filming rules." },
          { q: "Which is a good film-study question?", options: ["\"Was it a good game?\"", "\"Why are we bad?\"", "\"Who has the best shoes?\"", "\"Where do I lose the ball?\""], answer: 3, why: "Narrow questions point you to patterns you can fix." },
          { q: "What does tagging do?", options: ["Deletes bad plays", "Turns video into data you can count", "Adds music", "Makes the video shorter"], answer: 1, why: "Consistent labels let you count patterns." },
          { q: "Why use the same tag word every time?", options: ["To make it longer", "So counts are correct", "It looks nicer", "No reason"], answer: 1, why: "Different words for the same thing break your counts." }
        ]
      }
    },
    {
      name: "Chapter 2: Finding patterns and using them",
      lessons: [
        {
          title: "Counting patterns in your tags",
          minutes: 5,
          goal: "Count your tags and find the top patterns.",
          text: [
            "With 20 or more tagged plays, count how often each situation and result shows up. In Google Sheets you can sort by a column, use a filter, or use the COUNTIF formula to count a tag.",
            "Look for patterns, not single plays: \"7 of my 9 turnovers came when I dribbled left under pressure\" is a pattern. One bad pass is not.",
            "Small numbers can fool you. If something happened only twice, watch more film before you decide it is a real pattern."
          ],
          steps: ["Sort or filter by Result.", "Count each Situation for bad results.", "Write the top two patterns as sentences with numbers.", "Mark any pattern with few plays as \"watch more\"."],
          words: [["Pattern", "something that happens again and again in similar situations."], ["COUNTIF", "a spreadsheet formula that counts the cells that match a word or number."]],
          slides: [
            { title: "Count your tags", bullets: ["Sort or filter by Result", "COUNTIF counts a tag"] },
            { title: "Pattern vs one play", bullets: ["Pattern: 7 of 9 turnovers going left", "Not a pattern: one bad pass"] },
            { title: "Careful with small numbers", bullets: ["Only twice? Watch more film first"] }
          ],
          tryIt: "Finish tagging 20 plays. Count your results by situation and write your top two patterns as sentences with numbers.",
          youCanNow: "count tags and describe patterns with numbers."
        },
        {
          title: "Using AI to summarize your film notes",
          minutes: 5,
          goal: "Ask an AI assistant to summarize tagged plays and check its summary.",
          text: [
            "You can copy your tag table (no player names other than yours, and no private information) into an AI assistant and ask: \"Here are my tagged plays. Summarize the top three patterns with counts, and suggest one question to ask my coach.\"",
            "AI is good at spotting patterns in text tables, but it can miscount or invent things. Compare its counts with your own from the last lesson. If they differ, trust your sheet and fix the prompt.",
            "Some AI tools can look at images or video, but they can misread fast sports action. Use your own tags as the main source and AI as a helper."
          ],
          steps: ["Copy your tag table, removing other players' names and private info.", "Ask for the top three patterns with counts.", "Compare with your own counts.", "Fix any mistakes; your sheet wins."],
          words: [["Summary", "a short version that keeps the main points."]],
          slides: [
            { title: "Ask AI to summarize", bullets: ["Paste your tag table", "\"Top three patterns with counts\"", "\"One question for my coach\""] },
            { title: "Check it", bullets: ["AI can miscount or invent", "Compare with your counts", "Your sheet wins"] },
            { title: "Privacy", bullets: ["No other players' names", "No private information"] }
          ],
          tryIt: "Paste your 20 tagged plays into an AI assistant and ask for the top three patterns with counts. Check each count against your sheet.",
          youCanNow: "use AI to summarize film tags and check the summary against your own counts."
        },
        {
          title: "Turning film into a practice focus",
          minutes: 5,
          goal: "Turn your top pattern into one practice focus agreed with your coach.",
          text: [
            "Film only helps if it changes practice. Take your strongest pattern and turn it into one focus: \"Protect the ball when pressured on my left side\" or \"Get back on defense within three seconds after a turnover.\"",
            "Bring your coach the pattern, the numbers and two or three timestamps that show it. Ask: \"What drill would help this?\" Coaches love athletes who come with evidence and a question.",
            "Film again in a few weeks and re-tag the same question to see if the pattern changed. That is game intelligence: learning, practicing and checking."
          ],
          steps: ["Pick your strongest pattern.", "Write one practice focus.", "Pick two or three timestamps that show it.", "Ask your coach for a drill.", "Re-film and re-tag in a few weeks."],
          words: [["Practice focus", "one specific thing you work on in practice."], ["Evidence", "facts that show something is true, like counts and video timestamps."]],
          slides: [
            { title: "Film must change practice", bullets: ["Strongest pattern -> one focus"] },
            { title: "Bring your coach", bullets: ["The pattern and numbers", "Two or three timestamps", "\"What drill would help?\""] },
            { title: "Close the loop", bullets: ["Re-film in a few weeks", "Re-tag the same question", "Did the pattern change?"] }
          ],
          tryIt: "Final task: with your 20 tagged plays and AI summary, write one practice focus and pick two timestamps. Share it with your coach and ask for a drill.",
          youCanNow: "turn film patterns into a practice focus and check later whether it improved."
        }
      ],
      check: {
        title: "Knowledge Check 2: Finding patterns and using them",
        questions: [
          { q: "Which is a pattern?", options: ["One bad pass", "A great dunk", "The final score", "7 of 9 turnovers came dribbling left under pressure"], answer: 3, why: "A pattern repeats across many similar plays." },
          { q: "What does COUNTIF do?", options: ["Counts cells that match a tag", "Plays video", "Deletes rows", "Adds colors"], answer: 0, why: "COUNTIF counts matching cells." },
          { q: "AI's count of turnovers differs from your sheet. What do you trust?", options: ["The AI", "Whichever is higher", "Your sheet, then fix the prompt", "Neither"], answer: 2, why: "Your own tags are the main source; AI can miscount." },
          { q: "Before pasting tags into AI, remove:", options: ["Timestamps", "Results", "Situations", "Other players' names and private info"], answer: 3, why: "Protect other people's privacy." },
          { q: "What should you bring your coach?", options: ["Only complaints", "The pattern, numbers and timestamps, plus a question", "The whole video with no notes", "An AI essay"], answer: 1, why: "Evidence and a question make a useful talk." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Video Analysis and Game Intelligence",
    questions: [
      { q: "Holding the phone sideways while filming is called:", options: ["Portrait", "Selfie", "Landscape", "Zoom"], answer: 2, why: "Landscape gives a wide view." },
      { q: "Why film from high up?", options: ["To see the whole play and spacing", "To hide", "For better sound", "It's a rule"], answer: 0, why: "Height shows everyone involved." },
      { q: "What keeps the camera steady?", options: ["A tripod or bracing it", "Running with it", "Zooming in", "Shaking it"], answer: 0, why: "Steady video is easier to study." },
      { q: "Youth sports video often shows other children. So you should:", options: ["Post it anywhere", "Blur nothing", "Ask before filming and sharing", "Sell it"], answer: 2, why: "Teams and families have privacy rules." },
      { q: "Watching film with no plan usually means you notice:", options: ["Every pattern", "Only highlights and big mistakes", "Nothing", "The coach's notes"], answer: 1, why: "Without a question you miss patterns." },
      { q: "How many questions per viewing?", options: ["Ten", "None", "As many as possible", "One"], answer: 3, why: "One narrow question keeps focus." },
      { q: "On the second viewing you:", options: ["Fast-forward everything", "Mute it", "Pause on plays that answer your question", "Skip it"], answer: 2, why: "Pausing lets you note details." },
      { q: "Game intelligence means understanding:", options: ["Only the score", "Only stats", "The schedule", "Why plays happen"], answer: 3, why: "It's about the why, not just the what." },
      { q: "A timestamp is:", options: ["The time in the video where a play starts", "The game date", "A stamp on a ticket", "The final whistle"], answer: 0, why: "Timestamps let you find a play fast." },
      { q: "Which is a tag column?", options: ["Favorite song", "Situation", "Weather tomorrow", "Your password"], answer: 1, why: "Situation is a key tag." },
      { q: "How many plays should you tag at least?", options: ["1", "3", "20", "500"], answer: 2, why: "Twenty gives enough to see patterns." },
      { q: "If your team uses a video app like Hudl, you should:", options: ["Ask your coach how to use its tags", "Ignore it", "Delete it", "Share the login online"], answer: 0, why: "Use what your team uses, the way your coach wants." },
      { q: "Something happened only twice. You should:", options: ["Call it a big pattern", "Tell everyone", "Change positions", "Watch more film first"], answer: 3, why: "Small numbers can fool you." },
      { q: "To find your top patterns in Sheets, you can:", options: ["Print it", "Sort, filter or use COUNTIF", "Change fonts", "Add images"], answer: 1, why: "Those tools count and group tags." },
      { q: "What should you ask AI to do with your tags?", options: ["Pick your team", "Summarize the top patterns with counts", "Post them online", "Grade your coach"], answer: 1, why: "Summarizing is a strength of AI." },
      { q: "AI tools reading video directly may:", options: ["Never make mistakes", "Replace coaches", "Be required", "Misread fast sports action"], answer: 3, why: "Use your own tags as the main source." },
      { q: "A good practice focus is:", options: ["\"Protect the ball when pressured on my left\"", "\"Be better\"", "\"Win\"", "\"Try hard\""], answer: 0, why: "It's specific and practicable." },
      { q: "Which question to your coach is best?", options: ["\"Why don't I play more?\"", "\"Is film boring?\"", "\"Here are 3 clips of this pattern. What drill would help?\"", "\"Can I skip practice?\""], answer: 2, why: "Evidence plus a question gets a useful answer." },
      { q: "How do you know if your practice focus worked?", options: ["Guess", "Ask a fan", "Check social media", "Re-film and re-tag the same question later"], answer: 3, why: "Re-tagging shows if the pattern changed." },
      { q: "Film helps only if it:", options: ["Gets many views", "Changes what you practice", "Is long", "Has music"], answer: 1, why: "The point is better practice and play." }
    ]
  }
};
