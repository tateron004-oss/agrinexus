"use strict";

// Koach Learn course: Youth -> "What Is AI? (for Young People)". Skill-building course for teens about 13-18: by the end the student can DO the skill in `outcome`.
// Two chapters of three micro-lessons; a knowledge check closes each chapter; a 20-question quiz closes the course. Shape: scripts/koachlearn-courses/README.md.

module.exports = {
  id: "youth-what-is-ai",
  category: "Youth",
  name: "What Is AI? (for Young People)",
  skills: "Explaining what AI is, Spotting AI in everyday apps, Following age limits and school rules, Asking an AI assistant a clear question, Fact-checking an AI answer",
  outcome: "explain what AI is in your own words, spot it in the apps you already use, and use a free AI assistant the right way: within its age limit and your school's rules, with a clear question, and with the answer checked before you trust it.",
  about: [
    "AI is already in your phone, your games, your music app and your school tools. This course is for teens about 13 to 18 who want to understand what it really is and how to use it well.",
    "You will learn what AI is and is not, where it hides in apps you use every day, how to follow age limits and your school's AI rules, how to ask a clear question, and how to check an answer before you believe it.",
    "Each lesson takes about five minutes. Read it, look at the slides, then do the \"Try it now\" task. There is a knowledge check after each chapter and a 20-question quiz at the end."
  ],
  finalTask: "Make a one-page \"AI explainer\" for a younger student or a friend: say what AI is in two sentences, name three apps you use that have AI in them, and include one question you asked an AI assistant, the answer, and how you checked it.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Teens about 13 to 18, in or out of school, who already use phones, games and apps and want to understand what AI really is and how to use it well.",
    startingPoint: "Use music, video, game and messaging apps every day and may have tried a chat assistant. Most cannot explain how AI works, where it hides in their apps, or how to check what it says.",
    gap: "AI is in the tools teens use for school and fun, but many use it without knowing its age limits, their school's rules, or that it can be wrong. Learning to ask clearly, check answers and stay safe helps them learn better, avoid cheating trouble and protect themselves and others.",
    constraints: [
      "Age limits: many AI tools need users to be 13 or over, and some need a parent or guardian's permission under 18",
      "School rules on AI differ by school and by teacher",
      "Devices: a phone or a school computer; some have limited home internet",
      "Privacy and safety: no private details or photos of real people in AI tools",
      "Plain words and short lessons for mixed reading levels"
    ],
    prerequisites: "None."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "In your own words", action: "explain what AI is, how it learns from examples, and why it can be wrong", standard: "in two sentences a younger student can follow" },
    { id: "O2", condition: "Using the apps on your phone or a school computer", action: "identify where AI suggests, sorts, guesses or creates something, including generative AI", standard: "naming at least three apps and what the AI does in each" },
    { id: "O3", condition: "Before you use a new AI tool at home or at school", action: "check the tool's age rule and your school's AI rules, and show the app to a parent or guardian", standard: "using the tool's official help or terms page" },
    { id: "O4", condition: "Given something you want to learn", action: "write a prompt that says what you want, some background and how you want the answer", standard: "so the first answer is useful" },
    { id: "O5", condition: "Given an AI answer with facts in it", action: "check names, dates and numbers against a trusted source", standard: "noting where you checked each fact" },
    { id: "O6", condition: "When you write a prompt or see AI-made content", action: "keep private information out, refuse to make fakes of real people, and question unfair answers", standard: "sharing no private details and telling a trusted adult about hurtful fakes" }
  ],
  chapters: [
    {
      name: "Chapter 1: What AI is and where you meet it",
      lessons: [
        {
          objectives: ["O1"],
          title: "What AI is, in plain words",
          minutes: 4,
          goal: "Explain in two sentences what AI is and what it is not.",
          text: [
            "AI stands for artificial intelligence. It means computer programs that do things that usually need a person's thinking, like recognizing a face, understanding speech, suggesting a song or writing an answer.",
            "Most AI learns from huge amounts of examples. A program that has seen millions of cat photos can guess whether a new photo has a cat in it. A program that has read huge amounts of writing can write sentences that sound like a person.",
            "AI is not alive, it does not have feelings, and it does not truly understand the world the way you do. It finds patterns and makes its best guess. That is why it can be very useful and still be wrong."
          ],
          words: [["AI", "artificial intelligence: computer programs that do tasks that usually need human thinking."], ["Pattern", "something that repeats in a way a program can learn and use to guess."]],
          slides: [
            { title: "AI = artificial intelligence", bullets: ["Programs that do thinking-type tasks", "Recognize faces, understand speech, write answers"] },
            { title: "How it learns", bullets: ["It studies huge numbers of examples", "It finds patterns", "It makes its best guess"] },
            { title: "What AI is NOT", bullets: ["Not alive, no feelings", "Does not understand like you do", "Can be wrong, even when it sounds sure"] }
          ],
          tryIt: "Write two sentences that explain AI to a ten-year-old. Use no word they would not know. Read it to someone and ask if it made sense.",
          youCanNow: "explain what AI is and what it is not in two plain sentences.",
          quickCheck: [
            { objective: "O1", q: "What does it mean that AI \"finds patterns\"?", options: ["It feels what you feel", "It knows everything about the world", "It learns from many examples and makes its best guess", "It reads your mind"], answer: 2, why: "AI learns from huge numbers of examples and guesses based on the patterns it found." },
            { objective: "O1", q: "Your friend says, \"AI is alive and understands me.\" What do you tell them?", options: ["AI is not alive and has no feelings; it guesses from patterns", "Yes, it has feelings like a person", "Only paid AI is alive", "AI only works on phones"], answer: 0, why: "AI is a program that finds patterns; it is not alive and does not truly understand." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Spotting AI in the apps you already use",
          minutes: 5,
          goal: "Name at least three places AI shows up in your everyday apps.",
          text: [
            "You probably use AI every day without calling it that. Music and video apps suggest what to play next based on what you liked before. That is AI looking for patterns in your choices.",
            "Phone cameras use AI to sharpen photos and blur backgrounds. Keyboards guess your next word. Maps guess traffic. Games use AI to control characters you play against. Email and messaging apps filter spam.",
            "Chat assistants, such as ChatGPT, Microsoft Copilot and Google Gemini, are a newer kind called generative AI. Instead of only sorting or suggesting, they make new text, pictures or sound."
          ],
          steps: ["Open an app you use a lot.", "Ask: is it suggesting, sorting, guessing or creating something for me?", "If yes, that is probably AI at work.", "Write the app name and what the AI does."],
          words: [["Recommendation", "a suggestion an app makes based on what you did before."], ["Generative AI", "AI that makes new things, such as text, images or music."]],
          slides: [
            { title: "AI you already use", bullets: ["Music and video suggestions", "Phone camera photo fixes", "Keyboard next-word guesses", "Game characters and spam filters"] },
            { title: "Ask yourself", bullets: ["Is the app suggesting, sorting, guessing or creating?", "If yes, it is probably AI"] },
            { title: "Generative AI", bullets: ["Makes new text, images or sound", "Examples: ChatGPT, Copilot, Gemini"] }
          ],
          tryIt: "Go through the apps on your phone or a school computer. List three that use AI and write one line for each saying what the AI does, for example \"Music app: suggests songs I might like\".",
          youCanNow: "spot AI in everyday apps and say what it is doing.",
          quickCheck: [
            { objective: "O2", q: "What makes generative AI different from a music app's song suggestions?", options: ["It only sorts emails", "It makes new text, pictures or sound", "It only works offline", "It never uses patterns"], answer: 1, why: "Generative AI creates new content instead of only sorting or suggesting." },
            { objective: "O2", q: "You want to know if an app uses AI. Which question helps most?", options: ["Is the app free?", "Is the icon blue?", "How old is the app?", "Is it suggesting, sorting, guessing or creating something for me?"], answer: 3, why: "If an app suggests, sorts, guesses or creates for you, AI is probably at work." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Age limits, school rules and your parent or guardian",
          minutes: 5,
          goal: "Check whether you may use an AI tool, at home and at school, before you sign up.",
          text: [
            "Every AI tool has rules about who can use it. Many need you to be at least 13, and some ask for a parent or guardian's permission if you are under 18. Google, for example, says you must be 13 or over (or the age that applies in your country) to use Gemini with a personal or school account. Rules change, so read the tool's own terms or help page.",
            "Your school has rules too. Some classes allow AI for brainstorming but not for writing your work. Some ban it for tests. Using it against the rules can count as cheating, even if you did not mean it to. When in doubt, ask your teacher before you use it.",
            "Before you make an account on any new app, talk with a parent or guardian. Show them the app, its age rule and what information it asks for. Many schools also give you a school account for approved tools; use that one for schoolwork."
          ],
          steps: ["Find the tool's age rule on its official help or terms page.", "Check your school's and your teacher's AI rules.", "Show a parent or guardian the app before you sign up.", "Use your school account for approved school tools."],
          words: [["Terms of use", "the rules a company sets for using its app or website."], ["Academic integrity", "being honest about your schoolwork: the work you hand in shows what you did."]],
          sources: [{ name: "Google Gemini Apps Help: what you need to sign in (age requirement)", url: "https://support.google.com/gemini/answer/13278668" }],
          slides: [
            { title: "Check the age rule first", bullets: ["Many AI tools need you to be 13 or older", "Some need a parent's OK if you are under 18", "Read the tool's own help or terms page"] },
            { title: "Know your school's rules", bullets: ["Some classes allow AI for ideas only", "Some ban it for tests", "Not sure? Ask your teacher first"] },
            { title: "Bring in a parent or guardian", bullets: ["Show them the app before you sign up", "Look at what information it asks for", "Use your school account for school tools"] }
          ],
          tryIt: "Pick one AI assistant. Find its age rule on the company's own help or terms page. Then write down your school's or one teacher's rule about AI. Show both to a parent or guardian.",
          youCanNow: "check an AI tool's age rule and your school's AI rules, and involve a parent or guardian before signing up.",
          quickCheck: [
            { objective: "O3", q: "Where is the best place to find an AI tool's age rule?", options: ["The tool's own help or terms page", "A friend's guess", "A random video comment", "The app's star rating"], answer: 0, why: "Rules change, so read them on the company's own help or terms page." },
            { objective: "O3", q: "You are not sure if AI is allowed for a class project. What do you do?", options: ["Use it and hope it is fine", "Ask a friend in another school", "Use it but do not tell anyone", "Ask your teacher before you use it"], answer: 3, why: "School rules differ, and using AI against them can count as cheating, so ask first." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: What AI is and where you meet it",
        questions: [
          { objective: "O1", q: "Which sentence best describes AI?", options: ["A robot that has feelings", "Computer programs that do tasks that usually need human thinking", "A kind of phone charger", "A website that is always right"], answer: 1, why: "AI means programs that do thinking-type tasks like recognizing, suggesting and writing." },
          { objective: "O1", q: "How does most AI learn?", options: ["By going to school", "By reading your mind", "It never learns", "By studying huge numbers of examples and finding patterns"], answer: 3, why: "AI finds patterns in large sets of examples and uses them to guess." },
          { objective: "O2", q: "Your music app suggests a new song you might like. This is:", options: ["AI making a recommendation", "A virus", "A teacher's rule", "A phone call"], answer: 0, why: "Suggestions based on your past choices are a common use of AI." },
          { objective: "O3", q: "You want to try a new AI app. What should you do first?", options: ["Sign up with any birthday", "Give it your school password", "Check its age rule and show a parent or guardian", "Download it from a pop-up ad"], answer: 2, why: "Age rules and a parent's or guardian's OK come before signing up." },
          { objective: "O3", q: "Your teacher says AI is fine for brainstorming but not for writing your essay. You:", options: ["Have AI write the essay anyway", "Ignore the rule", "Use AI only for ideas, then write the essay yourself", "Copy a friend's essay"], answer: 2, why: "Following your teacher's rule keeps your work honest." }
        ]
      }
    },
    {
      name: "Chapter 2: Using an AI assistant the smart way",
      lessons: [
        {
          objectives: ["O4"],
          title: "Asking a clear question",
          minutes: 5,
          goal: "Write a clear prompt that gets a useful answer the first time.",
          text: [
            "What you type to an AI assistant is called a prompt. Clear prompts get better answers.",
            "A good prompt has three parts: what you want, a bit of background, and how you want the answer. For example: \"I am in 9th grade and we are starting a unit on the water cycle. Explain it in 5 short steps with one everyday example.\"",
            "A weak prompt like \"water cycle\" makes the assistant guess what you need. You will usually get a long, general answer."
          ],
          steps: ["Say what you want.", "Add a bit of background (your grade, the topic, what you already know).", "Say how you want it: steps, a list, short, simple words or an example."],
          words: [["Prompt", "what you type or say to an AI assistant."]],
          slides: [
            { title: "A prompt is your request", bullets: ["Clear prompt = better answer", "Vague prompt = general answer"] },
            { title: "Three parts", bullets: ["1. What you want", "2. A bit of background", "3. How you want the answer"] },
            { title: "Weak vs clear", bullets: ["Weak: \"water cycle\"", "Clear: \"I am in 9th grade. Explain the water cycle in 5 short steps with an example.\""] }
          ],
          tryIt: "Pick something you are curious about, like how a game engine works or why the sky is blue. Write a prompt with all three parts, send it to an AI assistant you are allowed to use, and read the answer.",
          youCanNow: "write a clear three-part prompt.",
          quickCheck: [
            { objective: "O4", q: "What is the \"background\" part of a prompt?", options: ["The color of the screen", "A bit about you and the topic, like your grade or what you already know", "Your password", "The app's settings"], answer: 1, why: "Background, like your grade and topic, helps the assistant fit the answer to you." },
            { objective: "O4", q: "You typed \"volcanoes\" and got a long, general answer. What do you send next?", options: ["\"volcanoes\" again", "Nothing; give up", "\"I am in 8th grade. Explain how volcanoes erupt in 4 short steps.\"", "Your home address"], answer: 2, why: "Adding what you want, background and the format makes the prompt clear." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Checking the answer before you trust it",
          minutes: 5,
          goal: "Check an AI answer against at least one trusted source.",
          text: [
            "AI assistants sometimes make things up. They can invent a date, a quote, a book that does not exist, or a fact that sounds right but is wrong. This is called a hallucination.",
            "Check anything important, especially facts for school, health, money and news. Look in your textbook, ask your teacher or librarian, or find a trusted site, such as a museum, a science agency, an encyclopedia your school uses, or a site ending in .gov or .edu.",
            "A good habit: compare two sources. If the AI and a trusted source disagree, trust the source, and maybe tell your teacher what the AI got wrong."
          ],
          steps: ["Find the facts in the answer: names, dates, numbers.", "Look up each one in a trusted source.", "If they disagree, go with the trusted source.", "Note where you checked."],
          words: [["Hallucination", "when an AI writes something that sounds true but is made up."], ["Source", "where information comes from."]],
          slides: [
            { title: "AI can make things up", bullets: ["Wrong dates and numbers", "Fake quotes or books", "Facts that sound right but are not"] },
            { title: "Check with trusted sources", bullets: ["Your textbook, teacher or librarian", "Museums, science agencies, .gov or .edu sites"] },
            { title: "If they disagree", bullets: ["Trust the reliable source", "Write down where you checked"] }
          ],
          tryIt: "Take the answer from your last prompt. Pick two facts in it and check each one in a trusted source. Write down whether each was right and where you checked.",
          youCanNow: "spot facts that need checking and check them in a trusted source.",
          quickCheck: [
            { objective: "O5", q: "Which is a trusted source for checking a school fact?", options: ["A random comment online", "The same AI asked again", "A meme", "Your textbook or a site ending in .edu or .gov"], answer: 3, why: "Textbooks, teachers, librarians and trusted sites are good places to check facts." },
            { objective: "O5", q: "The AI names a book for your report, but you cannot find it anywhere. What do you do?", options: ["Treat it as a possible hallucination and use a source you can find", "Put it in your report anyway", "Make up a page number", "Ask the AI to promise it is real"], answer: 0, why: "AI can invent books and facts; trust sources you can actually check." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Staying safe and being fair with AI",
          minutes: 5,
          goal: "Use AI without sharing private information and without hurting anyone.",
          text: [
            "Do not type private information into an AI tool: your full name with your address, your school and schedule, phone numbers, passwords, or photos of friends without asking. What you type may be saved.",
            "AI can make fake pictures, fake voices and fake videos, sometimes called deepfakes. Never use AI to make fake or embarrassing pictures of real people. It can hurt them, break school rules and even break the law. If someone does it to you or a friend, tell a trusted adult.",
            "AI can also be unfair. It learned from human writing, so it can repeat stereotypes. If an answer seems unfair to a group of people, question it."
          ],
          steps: ["Read your prompt before you send it and remove private details.", "Never make fake images or voices of real people.", "If you see a hurtful deepfake, tell a trusted adult.", "Question answers that seem unfair."],
          words: [["Deepfake", "a fake picture, voice or video made with AI to look real."], ["Bias", "when a result is unfair to some people, often because of what the AI learned from."]],
          slides: [
            { title: "Keep it private", bullets: ["No address, schedule or phone number", "No passwords", "No photos of friends without asking"] },
            { title: "Deepfakes hurt", bullets: ["Never fake real people", "It can break school rules and laws", "Tell a trusted adult if you see one"] },
            { title: "Watch for bias", bullets: ["AI can repeat stereotypes", "Question answers that seem unfair"] }
          ],
          tryIt: "Final task: make your one-page \"AI explainer\": what AI is in two sentences, three apps you use that have AI, and one question you asked an AI assistant with the answer and how you checked it. Make sure it has no private information in it.",
          youCanNow: "use AI safely and fairly, and explain AI to someone else.",
          quickCheck: [
            { objective: "O6", q: "Why keep private information out of AI tools?", options: ["AI tools are slow", "What you type may be saved", "It makes answers shorter", "Private details make AI smarter"], answer: 1, why: "What you type may be saved, so private details like your address and schedule stay out." },
            { objective: "O6", q: "A friend wants to use AI to make a funny fake picture of a classmate. What do you do?", options: ["Help make it but do not share it", "Post it, since it is a joke", "Say no, because fakes of real people can hurt them and break rules", "Send it only to close friends"], answer: 2, why: "Fake pictures of real people can hurt them, break school rules and even break the law." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Using an AI assistant the smart way",
        questions: [
          { objective: "O4", q: "Which prompt is clearest?", options: ["\"I am in 9th grade. Explain the water cycle in 5 short steps with an example.\"", "\"science\"", "\"help\"", "\"tell me stuff\""], answer: 0, why: "It says what you want, gives background and says how you want the answer." },
          { objective: "O5", q: "What is an AI \"hallucination\"?", options: ["A video game level", "A kind of phone screen", "A school rule", "When the AI makes up something that sounds true"], answer: 3, why: "A hallucination is a made-up answer that sounds real." },
          { objective: "O5", q: "AI gives you a date for a history project. You should:", options: ["Copy it right away", "Check it in your textbook or another trusted source", "Ask the AI again and trust the second answer", "Skip the date"], answer: 1, why: "Important facts get checked in a trusted source." },
          { objective: "O6", q: "Which should you NOT type into an AI assistant?", options: ["Your home address and school schedule", "\"Explain photosynthesis simply\"", "\"Give me 3 ideas for a club poster\"", "\"Make it shorter\""], answer: 0, why: "Address and schedule are private information." },
          { objective: "O6", q: "A classmate made an AI fake photo of another student. What should you do?", options: ["Share it", "Make another one", "Tell a trusted adult", "Post a comment"], answer: 2, why: "Deepfakes of real people can hurt them; a trusted adult can help stop it." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: What Is AI? (for Young People)",
    questions: [
      { objective: "O1", q: "AI stands for:", options: ["Automatic Internet", "Artificial intelligence", "Advanced information", "App installer"], answer: 1, why: "AI is short for artificial intelligence." },
      { objective: "O1", q: "Which is true about AI?", options: ["It has feelings", "It is always right", "It is alive", "It finds patterns and makes its best guess"], answer: 3, why: "AI guesses from patterns; it is not alive and can be wrong." },
      { objective: "O1", q: "Why can AI be wrong even when it sounds sure?", options: ["It is lazy", "It wants to trick you", "Phones are slow", "It is guessing from patterns, not truly understanding"], answer: 3, why: "It predicts from patterns, so a confident answer can still be wrong." },
      { objective: "O2", q: "Your phone keyboard guesses your next word. That is:", options: ["A virus", "AI at work", "A teacher", "A password"], answer: 1, why: "Guessing the next word is a common AI feature." },
      { objective: "O2", q: "Which is an example of generative AI?", options: ["A calculator", "A light switch", "A chat assistant that writes a story", "A paper map"], answer: 2, why: "Generative AI makes new text, images or sound." },
      { objective: "O2", q: "A video app shows \"Because you watched...\". That is a:", options: ["Recommendation made by AI", "Text message", "School rule", "Game controller"], answer: 0, why: "It suggests videos from your past choices." },
      { objective: "O3", q: "Where should you find an AI tool's age rule?", options: ["A friend's guess", "The tool's own help or terms page", "A pop-up ad", "Nowhere, there are none"], answer: 1, why: "The company's own pages give the current rule." },
      { objective: "O3", q: "What does Google's help page say about using Gemini with a personal or school account?", options: ["Any age is fine", "You must be 21", "Only teachers may use it", "You must be 13 or over, or the age that applies in your country"], answer: 3, why: "Google's help page sets 13 or over, or the local age." },
      { objective: "O3", q: "Before signing up for a new app you should:", options: ["Talk with a parent or guardian", "Use a fake birthday", "Share your password with a friend", "Click every ad"], answer: 0, why: "A parent or guardian should know about new accounts." },
      { objective: "O3", q: "Using AI to write work your teacher said to write yourself is:", options: ["Fine if nobody notices", "Required", "Breaking the rules, and can count as cheating", "A good study habit"], answer: 2, why: "School rules decide how AI may be used; breaking them is dishonest." },
      { objective: "O4", q: "What is a prompt?", options: ["A game controller", "A type of password", "What you type or say to an AI assistant", "An app store"], answer: 2, why: "A prompt is your request to the AI." },
      { objective: "O4", q: "Which part makes a prompt clearer?", options: ["Saying how you want the answer, like 5 short steps", "Typing only one word", "Adding your address", "Using all capital letters"], answer: 0, why: "Saying the format helps the AI give a useful answer." },
      { objective: "O4", q: "A weak prompt like \"water cycle\" usually gets:", options: ["A perfect answer", "No answer ever", "A virus", "A long, general answer"], answer: 3, why: "The AI has to guess, so the answer is general." },
      { objective: "O5", q: "Which source is the most trusted for checking a science fact?", options: ["A random comment online", "A science agency or your textbook", "A meme", "A pop-up ad"], answer: 1, why: "Textbooks and official science sites are reliable." },
      { objective: "O5", q: "The AI and your textbook disagree. You should:", options: ["Trust the textbook or trusted source", "Trust the AI", "Flip a coin", "Use both answers"], answer: 0, why: "A reliable source beats an unchecked AI answer." },
      { objective: "O5", q: "Which facts most need checking?", options: ["Your own opinion", "A joke you asked for", "Dates, numbers and names", "A poem you asked for"], answer: 2, why: "Facts like dates and numbers are where AI often slips." },
      { objective: "O6", q: "Which is private information you should keep out of AI?", options: ["\"Explain fractions\"", "Your password", "\"Make it shorter\"", "A favorite color"], answer: 1, why: "Passwords must never be shared." },
      { objective: "O6", q: "A deepfake is:", options: ["A deep swimming pool", "A type of game", "A study guide", "A fake picture, voice or video made with AI"], answer: 3, why: "Deepfakes are AI-made fakes that look real." },
      { objective: "O6", q: "AI gives an answer that sounds unfair to a group of people. You should:", options: ["Share it", "Believe it", "Ignore all AI forever", "Question it, because AI can repeat stereotypes"], answer: 3, why: "AI can carry bias from what it learned." },
      { objective: "O6", q: "If someone makes a hurtful AI fake of you, the best step is to:", options: ["Keep it secret", "Tell a trusted adult", "Make one back", "Share it more"], answer: 1, why: "A trusted adult can help report and stop it." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Pre-Test: What Do You Already Know?",
    from: [
      0,
      2,
      3,
      6,
      9,
      10,
      13,
      14,
      16,
      17
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      {
        name: "What AI is",
        objective: "O1",
        notYet: "The explanation is missing, wrong or too hard for a younger student.",
        meets: "Two clear sentences that say what AI is and that it can be wrong.",
        exceeds: "Also says how AI learns from examples, in words a ten-year-old would know."
      },
      {
        name: "AI in my apps",
        objective: "O2",
        notYet: "Fewer than three apps, or no line on what the AI does.",
        meets: "Three apps, each with one line on what the AI does.",
        exceeds: "Also points out which one is generative AI."
      },
      {
        name: "Clear question",
        objective: "O4",
        notYet: "The prompt is one or two words.",
        meets: "The prompt says what you want, some background and how you want the answer.",
        exceeds: "The answer was useful the first time, or one follow-up made it better."
      },
      {
        name: "Answer checked",
        objective: "O5",
        notYet: "The answer was used without checking.",
        meets: "At least one fact checked in a trusted source, and the source is named.",
        exceeds: "Two facts checked in two sources, with a note on anything the AI got wrong."
      },
      {
        name: "Safe and allowed",
        objective: "O6",
        notYet: "The explainer has private details, or the tool was used against its age rule or school rules.",
        meets: "No private information, and the tool used fits its age rule and school rules.",
        exceeds: "Adds a tip for the younger reader about staying safe with AI."
      }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Learners who start another Koach Learn youth course within 30 days",
      "Learners who report checking AI answers for schoolwork in the 30-day follow-up survey",
      "Teachers or youth programs that report fewer AI-related rule problems among learners"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A phone or school computer with internet",
      "A free AI assistant the learner is old enough to use and allowed to use, such as a school-approved tool",
      "Paper or a document for the one-page explainer",
      "About 60 minutes in total: lessons, practice, checks and the final task"
    ],
    facilitatorNotes: [
      "Check the age rules of any AI tool before class, and use school-approved accounts where they exist.",
      "Share your school's or program's AI rules at the start so learners know what is allowed.",
      "Never ask learners to type private details or upload photos of real people.",
      "Learners under the age limit can do the tasks on paper or with a teacher demonstrating the tool.",
      "Have learners share their explainers with a younger student or partner and score them with the rubric."
    ]
  }
};
