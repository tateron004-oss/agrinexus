"use strict";

// Koach Learn course: Youth -> "AI Tools for Creativity and Learning". Skill-building course for teens about 13-18: by the end the student can DO the skill in `outcome`.
// Two chapters of three micro-lessons; a knowledge check closes each chapter; a 20-question quiz closes the course. Shape: scripts/koachlearn-courses/README.md.

module.exports = {
  id: "youth-ai-creativity-learning",
  category: "Youth",
  name: "AI Tools for Creativity and Learning",
  skills: "Brainstorming ideas with AI, Making a design with Canva, Learning a new skill with an AI tutor, Making practice questions, Giving credit and staying original",
  outcome: "use free AI tools to brainstorm a creative project, design something with it, and teach yourself a new skill with an AI study partner, while keeping the work your own and giving credit where AI helped.",
  about: [
    "This course is for teens about 13 to 18 who like to make things (posters, stories, beats, game ideas, club flyers) and who want to learn faster.",
    "You will use AI as a creative partner and as a study partner. You will brainstorm, design a poster, learn something new step by step and quiz yourself. You will also learn how to keep your own voice and be honest about what AI did.",
    "Before you start: check each tool's age rule, follow your school's rules on AI, and talk with a parent or guardian before you make any new account. Each lesson takes about five minutes and ends with a \"Try it now\" task."
  ],
  finalTask: "Make a poster for a real or pretend school club or event. Use AI to brainstorm at least five ideas, pick one and make it your own, design the poster in Canva or Google Slides, then add a small note at the bottom that says how AI helped.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Teens about 13 to 18 who like to make things such as posters, stories, beats, game ideas and club flyers, and who want to learn faster.",
    startingPoint: "Use phones and school computers and may have tried a chat assistant or a design app. Few use AI on purpose to brainstorm, study step by step or quiz themselves, and many are unsure what counts as honest AI use.",
    gap: "Teens can use AI to get unstuck, design faster and study smarter, but using it to copy work skips the learning and can break school rules. They need to use AI as a creative and study partner while keeping their own voice and giving credit.",
    constraints: [
      "Age limits: tools and AI image features have their own age rules; a parent or guardian approves new accounts",
      "School rules on AI and AI-made pictures differ by school, class and contest",
      "Devices: a phone, school computer or library computer; free plans only",
      "Privacy: no private information in prompts or pasted notes",
      "Short lessons and plain words for mixed reading levels"
    ],
    prerequisites: "\"What Is AI? (for Young People)\" is a helpful first course but not required."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Given a creative project", action: "use an AI assistant to list many varied ideas, then change or combine them into your own idea", standard: "getting at least five ideas and making one your own" },
    { id: "O2", condition: "Using a free design tool such as Canva or Google Slides", action: "make a simple poster from a template, after checking the tool's age rule and school settings", standard: "with one big title and a clear date, time and place" },
    { id: "O3", condition: "For any work where AI helped", action: "write a credit note that says what AI did and what you did, and add something only you could make", standard: "following the class or contest rules on AI and using no one else's art without permission" },
    { id: "O4", condition: "Given a small skill you want to learn", action: "ask an AI assistant to teach you in small steps at your level and quiz you after each one", standard: "naming the skill, your level and the one-step-at-a-time request" },
    { id: "O5", condition: "Given your own class notes", action: "create practice questions or flashcards with AI, answer them first, and check the answers", standard: "with no private information and every answer checked against your notes or textbook" },
    { id: "O6", condition: "Before and after you use AI for schoolwork", action: "decide whether an AI use helps you learn or skips the learning, using the tomorrow test and your teacher's rules", standard: "asking your teacher first whenever you are not sure" }
  ],
  chapters: [
    {
      name: "Chapter 1: AI as your creative partner",
      lessons: [
        {
          objectives: ["O1"],
          title: "Brainstorming ideas with AI",
          minutes: 5,
          goal: "Use an AI assistant to get many ideas, then pick and improve the best one.",
          text: [
            "Brainstorming means coming up with lots of ideas fast, without judging them yet. AI assistants like ChatGPT, Microsoft Copilot and Google Gemini are good at this because they can list many ideas in seconds.",
            "Ask for quantity and variety: \"Give me 10 different ideas for a poster for our school's robotics club. Make some funny, some serious and some bold.\" Then you choose. The best results come when you mix AI ideas with your own.",
            "Treat AI ideas as a starting point. Change them, combine two, or use one to spark something new. That way the final idea is truly yours."
          ],
          steps: ["Say what you are making and who it is for.", "Ask for many ideas with different styles.", "Circle the two or three you like.", "Change or combine them into your own idea."],
          words: [["Brainstorm", "coming up with lots of ideas quickly before choosing one."]],
          slides: [
            { title: "Brainstorm = many ideas, fast", bullets: ["Do not judge ideas yet", "AI can list 10 ideas in seconds"] },
            { title: "Ask for variety", bullets: ["Say what you are making and for whom", "Ask for funny, serious and bold ideas"] },
            { title: "Make it yours", bullets: ["Pick two or three you like", "Change or combine them", "Add your own spark"] }
          ],
          tryIt: "Pick a project: a club poster, a short story, a game level or a song theme. Ask an AI assistant you are allowed to use for 10 different ideas. Pick your favorite two and write how you would change them.",
          youCanNow: "brainstorm with AI and turn its ideas into your own.",
          quickCheck: [
            { objective: "O1", q: "What is the main rule while brainstorming?", options: ["Pick the first idea", "Only use AI ideas", "Judge each idea right away", "Come up with lots of ideas before judging them"], answer: 3, why: "Brainstorming means many ideas fast, without judging them yet." },
            { objective: "O1", q: "AI gave you 10 poster ideas and two are close to what you want. What do you do?", options: ["Copy the first one exactly", "Combine or change them and add your own spark", "Ask for 100 more and never choose", "Give up on the poster"], answer: 1, why: "Mixing AI ideas with your own makes the final idea truly yours." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Designing with free AI tools",
          minutes: 5,
          goal: "Make a simple poster or graphic using a free design tool.",
          text: [
            "Canva is a design tool with a free plan that runs in a web browser or app. Some schools also give students access through a school account, so ask your teacher. Google Slides and Microsoft PowerPoint also work for simple posters.",
            "Start from a template (a ready-made design), then change the words, colors and pictures. Some tools can make a picture from words you type. These AI image features may have their own age rules or be turned off on school accounts, so check before you use them.",
            "Good design is simple: one big title, a few short lines, clear colors that are easy to read, and the important facts like date, time and place."
          ],
          steps: ["Open Canva, Google Slides or PowerPoint (use your school account if your school gives you one).", "Choose a poster template.", "Change the title, the details and the colors.", "Add or make one picture.", "Check that the date, time and place are easy to read."],
          words: [["Template", "a ready-made design you can change."], ["AI image generator", "a tool that makes a picture from words you type."]],
          slides: [
            { title: "Free tools to design with", bullets: ["Canva (free plan; ask if your school gives access)", "Google Slides", "Microsoft PowerPoint"] },
            { title: "Start from a template", bullets: ["Change words, colors and pictures", "AI image features may have their own age rules"] },
            { title: "Simple design wins", bullets: ["One big title", "A few short lines", "Easy-to-read colors", "Date, time and place"] }
          ],
          tryIt: "Open a free design tool and pick a poster template. Put in a title and the date, time and place for your idea from Lesson 1. Save it.",
          youCanNow: "make a simple poster with a free design tool.",
          quickCheck: [
            { objective: "O2", q: "What makes a poster easy to read?", options: ["One big title, a few short lines and clear colors", "Lots of small text", "Ten different fonts", "Dark text on a dark background"], answer: 0, why: "Good design is simple, with a big title and the key facts easy to see." },
            { objective: "O2", q: "You want to use an AI image feature in a design tool on your school account. What do you do first?", options: ["Use a friend's account", "Make a new account without telling anyone", "Check its age rule and whether your school allows it", "Skip the poster"], answer: 2, why: "AI image features can have their own age rules or be turned off on school accounts." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Keeping your work original and giving credit",
          minutes: 4,
          goal: "Say honestly how AI helped and keep your own voice in the work.",
          text: [
            "If AI helped you make something, say so. A short note like \"Ideas brainstormed with Microsoft Copilot; design and words by me\" is honest and shows you know how to use the tool.",
            "Do not use other people's art, music, logos or characters without permission, and do not ask AI to copy a real artist's work exactly. Some schools and contests do not allow AI-made pictures at all, so read the rules.",
            "Your voice matters. Add something only you could add: an inside joke from your club, a photo you took, a drawing, or your own words."
          ],
          steps: ["Write down what AI did and what you did.", "Add a short credit note.", "Read the contest or class rules on AI.", "Add one thing only you could make."],
          words: [["Credit", "saying who or what helped make something."], ["Copyright", "the law that protects people's creative work, like art, music and writing."]],
          slides: [
            { title: "Say how AI helped", bullets: ["\"Ideas brainstormed with AI; design by me\"", "Honest and shows skill"] },
            { title: "Respect other creators", bullets: ["No copying art, logos or characters", "Some contests ban AI images: read the rules"] },
            { title: "Add your own voice", bullets: ["A photo you took", "A drawing or your own words", "Something only you could add"] }
          ],
          tryIt: "Add a one-line credit note to the poster you started. Then add one thing only you could add, such as your own photo or slogan.",
          youCanNow: "give honest credit for AI help and keep your own voice in your work.",
          quickCheck: [
            { objective: "O3", q: "Why add a credit note when AI helped?", options: ["To make the poster longer", "Contests require AI pictures", "It hides what you did", "It is honest and shows how you used the tool"], answer: 3, why: "A short credit note is honest about what AI did and what you did." },
            { objective: "O3", q: "Your poster looks a lot like every other AI poster. How do you add your own voice?", options: ["Add your own photo, drawing, slogan or club inside joke", "Ask AI to copy a famous artist exactly", "Use a famous logo", "Remove your name"], answer: 0, why: "Adding something only you could make keeps the work yours." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: AI as your creative partner",
        questions: [
          { objective: "O1", q: "What is brainstorming?", options: ["Copying someone's work", "Coming up with lots of ideas before choosing", "Fixing a broken computer", "Deleting old files"], answer: 1, why: "Brainstorming is making many ideas fast, then choosing." },
          { objective: "O1", q: "Which prompt will give the best brainstorm?", options: ["\"poster\"", "\"do it\"", "\"ideas\"", "\"Give me 10 different ideas for a robotics club poster: some funny, some serious\""], answer: 3, why: "It says what, for whom, how many and what styles." },
          { objective: "O2", q: "What is a template?", options: ["A ready-made design you can change", "A password", "A type of virus", "A school rule"], answer: 0, why: "Templates give you a starting design to edit." },
          { objective: "O3", q: "A contest says no AI-made pictures. You:", options: ["Use one anyway", "Hide that you used AI", "Follow the rule and make or use your own picture", "Skip reading the rules"], answer: 2, why: "Following the contest rules keeps your entry honest and allowed." },
          { objective: "O3", q: "Which is a good credit note?", options: ["Nothing at all", "\"I made everything\" when AI helped", "\"Ideas brainstormed with AI; design and words by me\"", "\"Made by a robot\""], answer: 2, why: "It says honestly what AI did and what you did." }
        ]
      }
    },
    {
      name: "Chapter 2: AI as your study partner",
      lessons: [
        {
          objectives: ["O4"],
          title: "Learning a new skill step by step",
          minutes: 5,
          goal: "Ask AI to teach you a new skill in small steps at your level.",
          text: [
            "AI can act like a patient tutor. Tell it what you want to learn, what you already know, and ask it to go one step at a time. For example: \"I want to learn to read guitar tabs. I know nothing yet. Teach me in 5 small steps and wait for me after each one.\"",
            "Ask it to check your understanding: \"Ask me one question before moving on.\" If something is confusing, say so: \"Explain that like I am 12\" or \"Give me an example from basketball.\"",
            "Free learning sites like Khan Academy have lessons and practice you can use alongside an AI assistant. Your school may have approved tools, so ask your teacher which ones to use."
          ],
          steps: ["Name the skill and your level.", "Ask for small steps, one at a time.", "Ask it to quiz you before moving on.", "Ask for examples from things you like."],
          words: [["Tutor", "someone (or a tool) who helps you learn one-on-one."]],
          slides: [
            { title: "AI as a tutor", bullets: ["Say what you want to learn", "Say what you already know", "Ask for one step at a time"] },
            { title: "Make it check you", bullets: ["\"Ask me one question before moving on\"", "\"Explain that like I am 12\""] },
            { title: "Use examples you like", bullets: ["Sports, games, music", "Ask your teacher about approved tools"] }
          ],
          tryIt: "Choose a small skill you want to learn this week (a chord, a math method, a drawing technique, a word in a new language). Ask an AI assistant to teach you in small steps and to quiz you after each one.",
          youCanNow: "use AI as a step-by-step tutor at your own level.",
          quickCheck: [
            { objective: "O4", q: "What should a prompt for learning a new skill include?", options: ["Only the word \"teach\"", "The skill, your level and a request to go one step at a time", "Your password", "The answer you want"], answer: 1, why: "Telling AI the skill, your level and to go step by step makes it act like a patient tutor." },
            { objective: "O4", q: "The AI's explanation of a math method confuses you. What do you send?", options: ["Nothing; close the app", "\"Do my homework.\"", "\"Explain that like I am 12, with an example from basketball.\"", "The same question again"], answer: 2, why: "Asking for simpler words or an example you like helps you understand." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Making practice questions and flashcards",
          minutes: 5,
          goal: "Turn your notes into practice questions and quiz yourself.",
          text: [
            "Testing yourself is one of the best ways to remember things. AI can turn your own notes into quiz questions in seconds.",
            "Paste or type your class notes (no private information) and ask: \"Make 8 practice questions from these notes. Do not show the answers until I reply.\" Then answer them yourself before you look.",
            "You can also ask for flashcards: a word on one side, its meaning on the other. Free tools like Google Docs or paper cards work fine. Check the answers against your notes or textbook, because AI can still make mistakes."
          ],
          steps: ["Collect your notes on one topic.", "Ask AI for practice questions, answers hidden.", "Answer them yourself first.", "Check the answers against your notes or textbook."],
          words: [["Flashcard", "a card with a question or word on one side and the answer on the other."], ["Self-testing", "quizzing yourself to help you remember."]],
          slides: [
            { title: "Test yourself to remember", bullets: ["Quizzing beats rereading", "AI can make questions from your notes"] },
            { title: "Ask the right way", bullets: ["\"Make 8 questions from these notes\"", "\"Hide the answers until I reply\""] },
            { title: "Check the answers", bullets: ["Use your notes or textbook", "AI can still be wrong"] }
          ],
          tryIt: "Take notes from one class this week. Ask AI for 5 practice questions with the answers hidden. Answer them, then check yourself against your notes.",
          youCanNow: "turn notes into practice questions and quiz yourself.",
          quickCheck: [
            { objective: "O5", q: "Why ask AI to hide the answers when it makes practice questions?", options: ["To save paper", "So the AI can grade itself", "Because answers are private", "So you answer first and really test yourself"], answer: 3, why: "Testing yourself before seeing the answer helps you remember." },
            { objective: "O5", q: "AI's answer to one practice question does not match your notes. What do you do?", options: ["Check your notes or textbook and trust them", "Always trust the AI", "Delete your notes", "Skip that topic"], answer: 0, why: "AI can still make mistakes, so check against your notes or textbook." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Using AI to learn, not to skip learning",
          minutes: 4,
          goal: "Decide when AI help is learning and when it is skipping the work.",
          text: [
            "There is a difference between AI helping you learn and AI doing the work for you. If you ask it to explain, quiz you or give feedback, you are learning. If you ask it to write your essay or solve your homework so you can copy it, you are skipping the learning, and it may break school rules.",
            "A good test: after using AI, could you do the task alone tomorrow? If yes, AI helped you learn. If no, try again in a way that makes you do the thinking.",
            "Always follow your teacher's rules. If you are not sure whether something is allowed, ask before you use AI, and be ready to say how you used it."
          ],
          steps: ["Ask AI to explain, quiz or give feedback, not to do the work.", "Check: could I do this alone tomorrow?", "Follow your teacher's AI rules.", "Be ready to say how you used AI."],
          words: [["Feedback", "comments that help you improve your own work."]],
          slides: [
            { title: "Learning vs skipping", bullets: ["Learning: explain, quiz, feedback", "Skipping: AI writes it, you copy it"] },
            { title: "The tomorrow test", bullets: ["Could you do it alone tomorrow?", "If not, do more of the thinking"] },
            { title: "Follow the rules", bullets: ["Ask your teacher when unsure", "Be ready to say how you used AI"] }
          ],
          tryIt: "Final task: make your club or event poster. Brainstorm at least five ideas with AI, make one your own, design it in Canva or Google Slides, and add a credit note saying how AI helped.",
          youCanNow: "use AI for creativity and learning in a way that is honest and keeps the skill yours.",
          quickCheck: [
            { objective: "O6", q: "Which is using AI to learn?", options: ["Copying an AI essay", "Asking AI to explain a step you missed, then trying it yourself", "Having AI solve every homework problem", "Pasting AI answers into a test"], answer: 1, why: "Explanations, quizzes and feedback help you learn; copying skips the learning." },
            { objective: "O6", q: "After AI helped, you could not do the task alone tomorrow. What do you do?", options: ["Turn in the AI work", "Stop using AI forever", "Try again so you do more of the thinking", "Hide that you used AI"], answer: 2, why: "The tomorrow test shows AI did the thinking, so redo it in a way that makes you learn." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: AI as your study partner",
        questions: [
          { objective: "O4", q: "Which prompt makes AI act like a good tutor?", options: ["\"Teach me guitar tabs in 5 small steps and quiz me after each\"", "\"Do my homework\"", "\"Answer everything\"", "\"tabs\""], answer: 0, why: "It sets the level, small steps and checks." },
          { objective: "O5", q: "Why is quizzing yourself useful?", options: ["It wastes time", "Teachers forbid it", "It deletes notes", "It helps you remember"], answer: 3, why: "Self-testing is one of the best ways to remember." },
          { objective: "O5", q: "AI made practice questions from your notes. Before trusting the answers you should:", options: ["Share them online", "Check them against your notes or textbook", "Delete your notes", "Ask a stranger"], answer: 1, why: "AI can still make mistakes, so check." },
          { objective: "O6", q: "Which use of AI is skipping the learning?", options: ["Asking it to write your essay so you can copy it", "Asking it to explain a step", "Asking it to quiz you", "Asking for feedback on your draft"], answer: 0, why: "Copying AI work means you skip learning and may break rules." },
          { objective: "O6", q: "What is the \"tomorrow test\"?", options: ["Doing homework tomorrow", "Taking a test tomorrow", "Asking if you could do the task alone tomorrow", "Turning off AI tomorrow"], answer: 2, why: "If you could do it alone, AI helped you learn." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: AI Tools for Creativity and Learning",
    questions: [
      { objective: "O1", q: "When brainstorming with AI, you should first:", options: ["Judge every idea", "Ask for many different ideas", "Pick the first one", "Stop after one idea"], answer: 1, why: "Brainstorming is about lots of ideas first." },
      { objective: "O1", q: "The best way to make an AI idea yours is to:", options: ["Copy it exactly", "Ask a friend to choose", "Never use AI ideas", "Change or combine ideas and add your own spark"], answer: 3, why: "Changing and mixing ideas makes the result yours." },
      { objective: "O1", q: "Asking for \"funny, serious and bold\" ideas gives you:", options: ["A virus", "Fewer ideas", "A password", "Variety"], answer: 3, why: "Different styles give you more to choose from." },
      { objective: "O2", q: "Canva is:", options: ["A game console", "A design tool with a free plan", "A school rule", "A music app only"], answer: 1, why: "Canva is a design tool with a free plan." },
      { objective: "O2", q: "Before using an AI image feature you should:", options: ["Upload a friend's photo", "Share your password", "Check its age rule and your school's settings", "Skip all rules"], answer: 2, why: "AI image features may have their own age rules." },
      { objective: "O2", q: "A good poster has:", options: ["One big title and clear date, time and place", "Lots of tiny text", "Every color at once", "No details"], answer: 0, why: "Simple design is easiest to read." },
      { objective: "O3", q: "Honest credit for AI help looks like:", options: ["Hiding that you used AI", "\"Ideas brainstormed with AI; design by me\"", "Saying a robot did it all", "Nothing"], answer: 1, why: "It tells the truth about who did what." },
      { objective: "O3", q: "You want to use a famous cartoon character on a poster. You should:", options: ["Use it without asking", "Ask AI to copy it exactly", "Remove the credit note", "Make your own picture instead, or get permission"], answer: 3, why: "Characters and art are protected by copyright." },
      { objective: "O3", q: "Copyright protects:", options: ["People's creative work like art and music", "Your phone battery", "School lunch", "Wi-Fi"], answer: 0, why: "Copyright protects creators' work." },
      { objective: "O4", q: "To learn a new skill with AI, you should tell it:", options: ["Nothing", "Your password", "The skill, your level, and to go one step at a time", "To skip to the end"], answer: 2, why: "Level and small steps make AI a good tutor." },
      { objective: "O4", q: "If an AI explanation is confusing, a good follow-up is:", options: ["\"Never mind\"", "\"Give me my grade\"", "\"Explain that like I am 12\"", "\"Write my test\""], answer: 2, why: "Asking for simpler words helps you understand." },
      { objective: "O4", q: "Who can tell you which AI tools are approved for school?", options: ["Your teacher", "A pop-up ad", "A stranger online", "Nobody"], answer: 0, why: "Teachers know the school's approved tools and rules." },
      { objective: "O5", q: "What should you leave out when pasting notes into AI?", options: ["Topic words", "Key dates for the topic", "Vocabulary words", "Private information like your address"], answer: 3, why: "Never put private information into AI tools." },
      { objective: "O5", q: "Why ask AI to hide the answers to practice questions?", options: ["To save paper", "So you answer first and actually test yourself", "It is required by law", "To trick your teacher"], answer: 1, why: "Answering first is real self-testing." },
      { objective: "O5", q: "A flashcard has:", options: ["A question or word on one side and the answer on the other", "Only pictures", "A password", "Music notes only"], answer: 0, why: "That is how flashcards work." },
      { objective: "O5", q: "After AI makes practice answers you should:", options: ["Trust them fully", "Post them online", "Check them against notes or a textbook", "Delete them"], answer: 2, why: "AI answers can be wrong." },
      { objective: "O6", q: "Which is using AI to learn?", options: ["Copying an AI essay", "Asking AI for feedback on your own draft", "Having AI take your quiz", "Pasting AI homework answers"], answer: 1, why: "Feedback on your own work helps you improve." },
      { objective: "O6", q: "You are not sure if AI is allowed for a project. You should:", options: ["Use it and hope", "Use it secretly", "Ask AI if it is allowed", "Ask your teacher first"], answer: 3, why: "Your teacher decides the rules for the class." },
      { objective: "O2", q: "Before making a new account on a creative app, you should:", options: ["Use a fake age", "Give it your school password", "Skip the terms", "Talk with a parent or guardian and check the age rule"], answer: 3, why: "Age rules and a parent's or guardian's OK come first." },
      { objective: "O6", q: "After using AI, you could not do the task alone tomorrow. That means:", options: ["You learned everything", "AI did the thinking; try again so you do more of it", "AI is broken", "You should stop school"], answer: 1, why: "The tomorrow test shows whether you learned." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Pre-Test: What Do You Already Know?",
    from: [
      0,
      1,
      3,
      6,
      7,
      9,
      13,
      15,
      16,
      19
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      {
        name: "Brainstorm",
        objective: "O1",
        notYet: "Fewer than five ideas, or the first AI idea was used as it was.",
        meets: "At least five ideas, with one changed or combined into your own.",
        exceeds: "Can show which ideas were combined and why that one was picked."
      },
      {
        name: "Poster design",
        objective: "O2",
        notYet: "The title or the date, time and place are missing or hard to read.",
        meets: "One big title, a few short lines, clear colors, and the date, time and place easy to read.",
        exceeds: "The design fits the club or event, and a classmate can read it from across the room."
      },
      {
        name: "Own voice",
        objective: "O3",
        notYet: "Nothing on the poster is the learner's own, or it uses someone else's art or logo.",
        meets: "Includes one thing only the learner could add, such as a photo, drawing or slogan.",
        exceeds: "Most words and choices are clearly the learner's own."
      },
      {
        name: "Credit note",
        objective: "O3",
        notYet: "No note, or it hides how AI helped.",
        meets: "A short note says what AI did and what the learner did.",
        exceeds: "The note is specific, such as which tool brainstormed the ideas."
      },
      {
        name: "Followed the rules",
        objective: "O6",
        notYet: "Used a tool or feature against its age rule, the school rules or the contest rules.",
        meets: "Every tool and feature used is allowed for the learner's age and school.",
        exceeds: "Can explain which rules they checked and where."
      }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Learners who report using AI to quiz themselves or learn a skill in the 30-day follow-up survey",
      "Posters or projects made in the course that are actually used by a club, event or class",
      "Learners who start another Koach Learn youth course within 30 days"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A phone, school computer or library computer with internet",
      "A free AI assistant the learner is allowed to use, and Canva, Google Slides or PowerPoint",
      "Class notes from one subject for the study lessons",
      "About 60 minutes in total: lessons, practice, checks and the final task"
    ],
    facilitatorNotes: [
      "Check the age rules of each tool and AI image feature before class, and use school accounts where the school provides them.",
      "Share your school's or program's AI rules at the start, including whether AI-made pictures are allowed.",
      "Remind learners not to paste private information when they turn notes into practice questions.",
      "Hold a short poster show where learners explain their credit note and the part that is their own.",
      "Score the poster with the rubric and give feedback on one Not yet row at a time."
    ]
  }
};
