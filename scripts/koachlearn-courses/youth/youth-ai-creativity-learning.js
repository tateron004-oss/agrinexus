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
  chapters: [
    {
      name: "Chapter 1: AI as your creative partner",
      lessons: [
        {
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
          youCanNow: "brainstorm with AI and turn its ideas into your own."
        },
        {
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
          youCanNow: "make a simple poster with a free design tool."
        },
        {
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
          youCanNow: "give honest credit for AI help and keep your own voice in your work."
        }
      ],
      check: {
        title: "Knowledge Check 1: AI as your creative partner",
        questions: [
          { q: "What is brainstorming?", options: ["Copying someone's work", "Coming up with lots of ideas before choosing", "Fixing a broken computer", "Deleting old files"], answer: 1, why: "Brainstorming is making many ideas fast, then choosing." },
          { q: "Which prompt will give the best brainstorm?", options: ["\"poster\"", "\"do it\"", "\"ideas\"", "\"Give me 10 different ideas for a robotics club poster: some funny, some serious\""], answer: 3, why: "It says what, for whom, how many and what styles." },
          { q: "What is a template?", options: ["A ready-made design you can change", "A password", "A type of virus", "A school rule"], answer: 0, why: "Templates give you a starting design to edit." },
          { q: "A contest says no AI-made pictures. You:", options: ["Use one anyway", "Hide that you used AI", "Follow the rule and make or use your own picture", "Skip reading the rules"], answer: 2, why: "Following the contest rules keeps your entry honest and allowed." },
          { q: "Which is a good credit note?", options: ["Nothing at all", "\"I made everything\" when AI helped", "\"Ideas brainstormed with AI; design and words by me\"", "\"Made by a robot\""], answer: 2, why: "It says honestly what AI did and what you did." }
        ]
      }
    },
    {
      name: "Chapter 2: AI as your study partner",
      lessons: [
        {
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
          youCanNow: "use AI as a step-by-step tutor at your own level."
        },
        {
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
          youCanNow: "turn notes into practice questions and quiz yourself."
        },
        {
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
          youCanNow: "use AI for creativity and learning in a way that is honest and keeps the skill yours."
        }
      ],
      check: {
        title: "Knowledge Check 2: AI as your study partner",
        questions: [
          { q: "Which prompt makes AI act like a good tutor?", options: ["\"Teach me guitar tabs in 5 small steps and quiz me after each\"", "\"Do my homework\"", "\"Answer everything\"", "\"tabs\""], answer: 0, why: "It sets the level, small steps and checks." },
          { q: "Why is quizzing yourself useful?", options: ["It wastes time", "Teachers forbid it", "It deletes notes", "It helps you remember"], answer: 3, why: "Self-testing is one of the best ways to remember." },
          { q: "AI made practice questions from your notes. Before trusting the answers you should:", options: ["Share them online", "Check them against your notes or textbook", "Delete your notes", "Ask a stranger"], answer: 1, why: "AI can still make mistakes, so check." },
          { q: "Which use of AI is skipping the learning?", options: ["Asking it to write your essay so you can copy it", "Asking it to explain a step", "Asking it to quiz you", "Asking for feedback on your draft"], answer: 0, why: "Copying AI work means you skip learning and may break rules." },
          { q: "What is the \"tomorrow test\"?", options: ["Doing homework tomorrow", "Taking a test tomorrow", "Asking if you could do the task alone tomorrow", "Turning off AI tomorrow"], answer: 2, why: "If you could do it alone, AI helped you learn." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: AI Tools for Creativity and Learning",
    questions: [
      { q: "When brainstorming with AI, you should first:", options: ["Judge every idea", "Ask for many different ideas", "Pick the first one", "Stop after one idea"], answer: 1, why: "Brainstorming is about lots of ideas first." },
      { q: "The best way to make an AI idea yours is to:", options: ["Copy it exactly", "Ask a friend to choose", "Never use AI ideas", "Change or combine ideas and add your own spark"], answer: 3, why: "Changing and mixing ideas makes the result yours." },
      { q: "Asking for \"funny, serious and bold\" ideas gives you:", options: ["A virus", "Fewer ideas", "A password", "Variety"], answer: 3, why: "Different styles give you more to choose from." },
      { q: "Canva is:", options: ["A game console", "A design tool with a free plan", "A school rule", "A music app only"], answer: 1, why: "Canva is a design tool with a free plan." },
      { q: "Before using an AI image feature you should:", options: ["Upload a friend's photo", "Share your password", "Check its age rule and your school's settings", "Skip all rules"], answer: 2, why: "AI image features may have their own age rules." },
      { q: "A good poster has:", options: ["One big title and clear date, time and place", "Lots of tiny text", "Every color at once", "No details"], answer: 0, why: "Simple design is easiest to read." },
      { q: "Honest credit for AI help looks like:", options: ["Hiding that you used AI", "\"Ideas brainstormed with AI; design by me\"", "Saying a robot did it all", "Nothing"], answer: 1, why: "It tells the truth about who did what." },
      { q: "You want to use a famous cartoon character on a poster. You should:", options: ["Use it without asking", "Ask AI to copy it exactly", "Remove the credit note", "Make your own picture instead, or get permission"], answer: 3, why: "Characters and art are protected by copyright." },
      { q: "Copyright protects:", options: ["People's creative work like art and music", "Your phone battery", "School lunch", "Wi-Fi"], answer: 0, why: "Copyright protects creators' work." },
      { q: "To learn a new skill with AI, you should tell it:", options: ["Nothing", "Your password", "The skill, your level, and to go one step at a time", "To skip to the end"], answer: 2, why: "Level and small steps make AI a good tutor." },
      { q: "If an AI explanation is confusing, a good follow-up is:", options: ["\"Never mind\"", "\"Give me my grade\"", "\"Explain that like I am 12\"", "\"Write my test\""], answer: 2, why: "Asking for simpler words helps you understand." },
      { q: "Who can tell you which AI tools are approved for school?", options: ["Your teacher", "A pop-up ad", "A stranger online", "Nobody"], answer: 0, why: "Teachers know the school's approved tools and rules." },
      { q: "What should you leave out when pasting notes into AI?", options: ["Topic words", "Key dates for the topic", "Vocabulary words", "Private information like your address"], answer: 3, why: "Never put private information into AI tools." },
      { q: "Why ask AI to hide the answers to practice questions?", options: ["To save paper", "So you answer first and actually test yourself", "It is required by law", "To trick your teacher"], answer: 1, why: "Answering first is real self-testing." },
      { q: "A flashcard has:", options: ["A question or word on one side and the answer on the other", "Only pictures", "A password", "Music notes only"], answer: 0, why: "That is how flashcards work." },
      { q: "After AI makes practice answers you should:", options: ["Trust them fully", "Post them online", "Check them against notes or a textbook", "Delete them"], answer: 2, why: "AI answers can be wrong." },
      { q: "Which is using AI to learn?", options: ["Copying an AI essay", "Asking AI for feedback on your own draft", "Having AI take your quiz", "Pasting AI homework answers"], answer: 1, why: "Feedback on your own work helps you improve." },
      { q: "You are not sure if AI is allowed for a project. You should:", options: ["Use it and hope", "Use it secretly", "Ask AI if it is allowed", "Ask your teacher first"], answer: 3, why: "Your teacher decides the rules for the class." },
      { q: "Before making a new account on a creative app, you should:", options: ["Use a fake age", "Give it your school password", "Skip the terms", "Talk with a parent or guardian and check the age rule"], answer: 3, why: "Age rules and a parent's or guardian's OK come first." },
      { q: "After using AI, you could not do the task alone tomorrow. That means:", options: ["You learned everything", "AI did the thinking; try again so you do more of it", "AI is broken", "You should stop school"], answer: 1, why: "The tomorrow test shows whether you learned." }
    ]
  }
};
