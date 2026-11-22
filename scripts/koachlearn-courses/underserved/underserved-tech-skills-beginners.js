"use strict";

// Koach Learn course: Undeserved Community -> "Technology Skills for Beginners". Skill-building course: by the end the student can DO the skill in `outcome`.
// Two chapters of three micro-lessons; a knowledge check closes each chapter; a 20-question quiz closes the course. Shape: scripts/koachlearn-courses/README.md.

module.exports = {
  id: "underserved-tech-skills-beginners",
  category: "Undeserved Community",
  name: "Technology Skills for Beginners",
  skills: "Using a touch screen and a mouse, Getting online for free or low cost, Searching the web and spotting trustworthy sites, Sending an email with an attachment, Making a strong password, Asking AI for tech help",
  outcome: "use a phone or a free library computer to get online, search for trustworthy information, send an email with a photo or file attached, and keep your account safe with a strong password.",
  about: [
    "This course is for anyone who feels new or nervous with technology. Many people never had the chance to learn, and that is okay. We start at the very beginning and go one small step at a time.",
    "You will practice using a touch screen and a mouse, find free or low-cost ways to get online, search the web, tell a trustworthy website from a risky one, send an email with an attachment, make a strong password and ask a free AI assistant for help when you are stuck.",
    "You can use your own phone or a free computer at a public library or community center. Each lesson takes about five minutes and ends with a \"Try it now\" task. There is a knowledge check after each chapter and a 20-question quiz at the end."
  ],
  finalTask: "On a phone or library computer, search for your public library's hours on its official website, take a screenshot or photo of the hours, and email it to a family member or friend with a short, polite message. Use an account protected by a strong password, and sign out if you used a shared computer.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Adults in underserved communities who are new or nervous with technology: older adults, people who never had the chance to learn, people returning from long absences, and second-language speakers.",
    startingPoint: "May have a basic phone for calls. Little or no use of touch screens, a mouse, a keyboard, web search or email, and some have never made an account or a password.",
    gap: "Jobs, schools, clinics and benefits now expect people to get online, find information and send email. Learners need these first skills, plus safe habits with passwords and websites, so they can do everyday tasks without depending on others or falling for scams.",
    constraints: [
      "Reading level: plain words and short sentences (about grade 4 to 5)",
      "Devices: may only have a basic phone or a time-limited library computer",
      "Cost: free places to get online and free email only",
      "Privacy: no real passwords or codes shown or shared in practice; sign out of shared computers",
      "Pace: one small step at a time, with lots of hands-on practice"
    ],
    prerequisites: "None. This is the first course for people new to technology."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "On a phone or a computer", action: "tap, swipe, click, scroll and type, and fix a typing mistake", standard: "without help" },
    { id: "O2", condition: "Where you live", action: "find a free place to get online, connect a phone to Wi-Fi and check whether you qualify for Lifeline", standard: "naming the place and its hours" },
    { id: "O3", condition: "Given something you need to look up", action: "search the web and choose a trustworthy result", standard: "skipping ads and closing pages with pop-ups or prizes" },
    { id: "O4", condition: "Using a free email account", action: "send an email with a subject, a short message and a photo or file attached", standard: "checking the address, message and attachment before you send" },
    { id: "O5", condition: "When you make or use an account", action: "create a strong password and protect your accounts", standard: "never sharing a code and signing out of shared computers" },
    { id: "O6", condition: "When you are stuck with a tech task", action: "ask a free AI assistant for short steps and describe what you see when a step does not match", standard: "without typing any password, code or private number" }
  ],
  chapters: [
    {
      name: "Chapter 1: Getting comfortable and getting online",
      lessons: [
        {
          objectives: ["O1"],
          title: "Touch screens, mice and keyboards",
          minutes: 5,
          goal: "Tap, swipe, click, scroll and type on a phone or computer.",
          text: [
            "On a phone or tablet you use your finger. Tap once to open something. Swipe (slide your finger) to move up, down or sideways. Press and hold to see more choices.",
            "On a computer you use a mouse or touchpad. Move it to move the arrow on the screen. Click the left button once to choose something. Double-click to open some files. Roll the wheel, or slide two fingers on a touchpad, to scroll.",
            "The keyboard types letters. The Shift key makes a capital letter. Backspace deletes the letter before the cursor. Enter moves to a new line or sends a search."
          ],
          steps: ["Phone: tap an app to open it, swipe to scroll, press the home button or swipe up to go back home.", "Computer: move the mouse, click once to choose, scroll with the wheel.", "Keyboard: type your first name, use Shift for the capital letter, use Backspace to fix a mistake."],
          words: [["Tap", "touch the screen once quickly."], ["Swipe", "slide your finger across the screen."], ["Click", "press the mouse button once."], ["Cursor", "the blinking line that shows where your typing will appear."]],
          slides: [
            { title: "On a phone or tablet", bullets: ["Tap to open", "Swipe to move", "Press and hold for more choices"] },
            { title: "On a computer", bullets: ["Move the mouse to move the arrow", "Click once to choose", "Scroll with the wheel or two fingers"] },
            { title: "Keyboard basics", bullets: ["Shift: capital letter", "Backspace: delete a mistake", "Enter: new line or search"] }
          ],
          tryIt: "On a phone or computer, open any app or program, scroll down and back up, then type your first name with a capital letter and fix one mistake with Backspace.",
          youCanNow: "tap, swipe, click, scroll and type on a phone or computer.",
          quickCheck: [
            { objective: "O1", q: "What does \"swipe\" mean on a phone?", options: ["Slide your finger across the screen", "Tap twice fast", "Press the power button", "Shake the phone"], answer: 0, why: "Swiping is sliding your finger to move up, down or sideways." },
            { objective: "O1", q: "You need a capital letter at the start of your name. Which key do you hold?", options: ["Enter", "Shift", "Backspace", "Space"], answer: 1, why: "The Shift key makes a capital letter." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Getting online for free or low cost",
          minutes: 5,
          goal: "Find one free place to get online and know about the Lifeline discount.",
          text: [
            "Public libraries offer free computers and free Wi-Fi. Many community centers, job centers and some restaurants do too. Ask the staff how to sign up for a computer and how long you can use it.",
            "Lifeline is a federal program that lowers the monthly cost of phone or internet service for people with low income or who get help such as SNAP or Medicaid. The standard discount is up to $9.25 a month. You apply through getinternet.gov, then contact a phone or internet company that takes part. Amounts and rules can change, so check lifelinesupport.org for the latest.",
            "On public Wi-Fi, do not do banking or type passwords for important accounts if you can avoid it. Never let a shared computer save your password."
          ],
          steps: ["Call or visit your library or community center and ask about free computers and Wi-Fi.", "To connect a phone to Wi-Fi: open Settings, tap Wi-Fi, pick the network and type the password if there is one.", "If money is tight, check whether you qualify for Lifeline at lifelinesupport.org."],
          words: [["Wi-Fi", "a wireless way to connect to the internet."], ["Lifeline", "a federal program that lowers phone or internet bills for people who qualify."], ["Public Wi-Fi", "free Wi-Fi shared by many people in a public place."]],
          sources: [{ name: "Lifeline Support (USAC, under FCC oversight)", url: "https://www.lifelinesupport.org/" }],
          slides: [
            { title: "Free places to get online", bullets: ["Public library computers and Wi-Fi", "Community centers and job centers", "Ask staff how to sign up"] },
            { title: "Lifeline lowers your bill", bullets: ["For low income or SNAP, Medicaid and more", "Standard discount up to $9.25 a month", "Apply at getinternet.gov; check lifelinesupport.org"] },
            { title: "Public Wi-Fi safety", bullets: ["Avoid banking on public Wi-Fi", "Do not let shared computers save passwords"] }
          ],
          tryIt: "Find out your nearest library's or community center's hours for free computer use. If you have a phone, connect it to a Wi-Fi network using Settings, then Wi-Fi.",
          youCanNow: "find a free place to get online, connect to Wi-Fi and know where to check for a lower internet bill.",
          quickCheck: [
            { objective: "O2", q: "Besides libraries, where else can you often find free Wi-Fi?", options: ["Only at home", "At a bank vault", "Community centers and job centers", "Nowhere else"], answer: 2, why: "Many community centers, job centers and some restaurants offer free Wi-Fi." },
            { objective: "O2", q: "You are on free café Wi-Fi. What should you avoid doing?", options: ["Reading the news", "Checking the weather", "Looking up bus times", "Online banking"], answer: 3, why: "On public Wi-Fi, avoid banking and typing important passwords if you can." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Searching the web and spotting trustworthy sites",
          minutes: 5,
          goal: "Search for information and decide if a website can be trusted.",
          text: [
            "A search engine such as Google or Bing finds websites for you. Type a few key words, like \"Oakland library hours\", into the search box and press Enter.",
            "Not every result is trustworthy. Results marked \"Sponsored\" or \"Ad\" are paid ads. Official government sites end in .gov. Look for the real name of the place in the web address.",
            "Be careful with sites that have lots of pop-ups, say you won a prize, ask you to download something, or ask for personal information. Close them and go back."
          ],
          steps: ["Open a web browser and type a few key words in the search box.", "Skip results marked Sponsored or Ad.", "Choose a result whose address matches the real organization or ends in .gov.", "Close any page with pop-ups, prizes or download requests."],
          words: [["Search engine", "a website that finds other websites, like Google or Bing."], ["Sponsored", "a paid ad shown in search results."], ["Pop-up", "a window that suddenly appears on top of a page."]],
          slides: [
            { title: "How to search", bullets: ["Type a few key words", "Example: \"Oakland library hours\"", "Press Enter"] },
            { title: "Trust signs", bullets: ["Not marked Sponsored or Ad", "Address has the real name", "Government sites end in .gov"] },
            { title: "Warning signs", bullets: ["Lots of pop-ups", "\"You won a prize!\"", "Asks you to download or share personal info"] }
          ],
          tryIt: "Search for your public library's hours. Pick the result from the library's own website, not an ad, and write down the hours.",
          youCanNow: "search the web and choose a trustworthy website.",
          quickCheck: [
            { objective: "O3", q: "Which web address is most likely the official site for a U.S. government office?", options: ["One that ends in .gov", "One with lots of pop-ups", "One marked \"Sponsored\"", "One that says you won a prize"], answer: 0, why: "Official U.S. government websites usually end in .gov." },
            { objective: "O3", q: "You search for your clinic's hours. The first result is an ad. What do you do?", options: ["Click the ad", "Skip it and pick the clinic's own website", "Download what it offers", "Type your password into it"], answer: 1, why: "Ads are paid results; the clinic's own site is more trustworthy." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Getting comfortable and getting online",
        questions: [
          { objective: "O1", q: "On a phone, how do you open an app?", options: ["Shake the phone", "Tap it once", "Press Backspace", "Turn it off"], answer: 1, why: "A single tap opens an app." },
          { objective: "O1", q: "Which key deletes the letter before the cursor?", options: ["Shift", "Enter", "Backspace", "Space"], answer: 2, why: "Backspace removes the letter before the cursor." },
          { objective: "O2", q: "Where can you usually use a computer and Wi-Fi for free?", options: ["A pop-up ad", "A car dealer", "A bank vault", "A public library"], answer: 3, why: "Public libraries offer free computers and Wi-Fi." },
          { objective: "O2", q: "What is Lifeline?", options: ["A federal program that lowers phone or internet bills for people who qualify", "A free phone game", "A type of virus", "A search engine"], answer: 0, why: "Lifeline gives a monthly discount on phone or internet service." },
          { objective: "O3", q: "A search result is marked \"Sponsored\". What does that mean?", options: ["It is a government site", "It is a paid ad", "It is always the best answer", "It is your email"], answer: 1, why: "Sponsored results are ads." }
        ]
      }
    },
    {
      name: "Chapter 2: Email, passwords and getting help",
      lessons: [
        {
          objectives: ["O4"],
          title: "Sending an email with an attachment",
          minutes: 5,
          goal: "Write and send an email with a photo or file attached.",
          text: [
            "Email lets you send messages and files to anyone with an email address. Free email services include Gmail and Outlook.com. Your library can help you create an account.",
            "An email has four parts: To (the person's email address), Subject (a few words that say what it is about), the message, and attachments (files or photos you add). The paper-clip icon usually means attach.",
            "Before you press Send, check the address is right, read your message once, and make sure the right file is attached."
          ],
          steps: ["Open your email and choose Compose or New message.", "Type the person's address in To.", "Type a short Subject.", "Write a short, polite message.", "Tap or click the paper clip, choose a photo or file, then press Send."],
          words: [["Email address", "an address like name@example.com where you get email."], ["Subject", "the short title of an email."], ["Attachment", "a file or photo sent with an email."]],
          slides: [
            { title: "Four parts of an email", bullets: ["To: their email address", "Subject: a few words", "Message", "Attachment: a file or photo"] },
            { title: "Attach a file", bullets: ["Look for the paper-clip icon", "Choose the photo or file", "Wait until it finishes adding"] },
            { title: "Before you press Send", bullets: ["Address right?", "Message makes sense?", "Right file attached?"] }
          ],
          tryIt: "Send an email to a friend or family member with the subject \"Practice email\", a one-line message and one photo attached.",
          youCanNow: "write and send an email with an attachment.",
          quickCheck: [
            { objective: "O4", q: "In an email, what goes in the To line?", options: ["Your password", "The subject", "The person's email address", "The photo"], answer: 2, why: "The To line holds the email address of the person you are writing to." },
            { objective: "O4", q: "You wrote your email but forgot the photo. What do you do before sending?", options: ["Send it and hope", "Delete the email", "Write \"photo coming\"", "Click the paper clip and attach the photo"], answer: 3, why: "The paper-clip icon attaches a photo or file before you press Send." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Making a strong password and keeping accounts safe",
          minutes: 5,
          goal: "Create a strong password and know how to protect your accounts.",
          text: [
            "A strong password is long and hard to guess. One easy way: string together three or four random words with a number and a symbol, like \"Blue-Taco-River-58\". Do not use your name, birthday or \"password123\".",
            "Use a different password for your email than for other accounts. Your email is the key to resetting everything else.",
            "Turn on two-step verification if your account offers it: after your password, you also enter a code sent to your phone. Never give that code to anyone who calls or texts you, even if they say they are from the company."
          ],
          steps: ["Pick three or four random words.", "Join them and add a number and a symbol.", "Use it only for this account.", "Turn on two-step verification in your account's security settings.", "Never share the code sent to your phone."],
          words: [["Password", "a secret word or phrase that lets only you into an account."], ["Two-step verification", "a second check, usually a code sent to your phone, after your password."]],
          slides: [
            { title: "A strong password", bullets: ["Long: three or four random words", "Add a number and a symbol", "Example style: Blue-Taco-River-58"] },
            { title: "Avoid", bullets: ["Your name or birthday", "\"password123\"", "The same password everywhere"] },
            { title: "Two-step verification", bullets: ["Password plus a code to your phone", "Turn it on in security settings", "Never share the code with anyone"] }
          ],
          tryIt: "Make up a strong password using three random words, a number and a symbol. Do not use it as written here. Write a hint, not the password, somewhere safe at home.",
          youCanNow: "create a strong password and protect your account with two-step verification.",
          quickCheck: [
            { objective: "O5", q: "What is two-step verification?", options: ["A second check, like a code to your phone", "Typing your password twice", "Two email accounts", "A longer username"], answer: 0, why: "After your password, you also enter a code sent to your phone." },
            { objective: "O5", q: "You want a password for your new email. Which is best?", options: ["Your birthday", "Three random words joined with a number and a symbol", "Your first name", "The same password as your bank"], answer: 1, why: "Long, random words with a number and symbol are hard to guess." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Asking a free AI assistant for tech help",
          minutes: 5,
          goal: "Use a free AI assistant to get step-by-step help with a tech problem.",
          text: [
            "When you are stuck, a free AI assistant such as ChatGPT, Microsoft Copilot or Google Gemini can explain how to do something, step by step, in simple words. You can type or talk to it.",
            "Say what device you have and what you want to do. For example: \"I have an Android phone. How do I attach a photo to an email in Gmail? Give me short steps.\" If a step does not match your screen, tell it what you see.",
            "Never type passwords, codes, bank numbers or your Social Security number into an AI. And a library staff member is always a good person to ask too."
          ],
          steps: ["Open a free AI assistant.", "Say your device and what you want to do.", "Ask for short, simple steps.", "If a step does not match, describe what you see on your screen."],
          words: [["AI assistant", "a computer program you chat with in everyday words."], ["Device", "a phone, tablet or computer."]],
          slides: [
            { title: "AI can be your tech helper", bullets: ["Explains steps in simple words", "You can type or talk"] },
            { title: "Ask clearly", bullets: ["Say your device", "Say what you want to do", "Ask for short steps"] },
            { title: "Stay safe", bullets: ["No passwords, codes or bank numbers", "Library staff can help too"] }
          ],
          tryIt: "Final task: search for your library's hours on its official site, take a screenshot or photo, and email it to someone with a polite message. If you get stuck, ask an AI assistant for steps. Sign out if you used a shared computer.",
          youCanNow: "get online, find trustworthy information, send it by email and get help safely when you are stuck.",
          quickCheck: [
            { objective: "O6", q: "What two things should your first tech-help prompt say?", options: ["Your password and your email", "Your age and your address", "Your device and what you want to do", "Your bank and your code"], answer: 2, why: "The AI needs your device and your goal to give the right steps." },
            { objective: "O6", q: "The AI says to tap \"Settings\" but you do not see it. What do you do?", options: ["Give up", "Restart the phone", "Type your password to the AI", "Tell the AI what you see on your screen"], answer: 3, why: "Describing your screen helps the AI give steps that match." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Email, passwords and getting help",
        questions: [
          { objective: "O4", q: "What does the paper-clip icon in email usually do?", options: ["Deletes the email", "Prints the email", "Attaches a file or photo", "Changes your password"], answer: 2, why: "The paper clip adds an attachment." },
          { objective: "O5", q: "Which is the strongest password?", options: ["password123", "Your birthday", "Your first name", "Three random words with a number and symbol"], answer: 3, why: "Long, random passwords are hard to guess." },
          { objective: "O5", q: "Someone calls saying they are from your email company and asks for the code sent to your phone. You:", options: ["Never share it and hang up", "Read it to them", "Text it to them", "Post it online"], answer: 0, why: "That code protects your account; real companies do not ask for it." },
          { objective: "O5", q: "Why should your email password be different from your other passwords?", options: ["It looks nicer", "Email can reset your other accounts", "It is shorter", "It is required by law"], answer: 1, why: "If someone gets into your email, they can reset other accounts." },
          { objective: "O6", q: "Which is a good way to ask AI for tech help?", options: ["\"help\"", "\"Here is my password, fix it\"", "\"I have an Android phone. How do I attach a photo in Gmail? Short steps.\"", "\"phone\""], answer: 2, why: "It names the device, the task and the format." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Technology Skills for Beginners",
    questions: [
      { objective: "O1", q: "To move up and down a page on a phone, you:", options: ["Swipe", "Shake it", "Press Shift", "Turn it off"], answer: 0, why: "Swiping scrolls the screen." },
      { objective: "O1", q: "On a computer, clicking the left mouse button once:", options: ["Turns it off", "Chooses something", "Deletes everything", "Prints the page"], answer: 1, why: "A single click selects or chooses." },
      { objective: "O1", q: "The cursor shows:", options: ["The time", "The battery", "Where your typing will appear", "Your password"], answer: 2, why: "The blinking line marks where text goes." },
      { objective: "O2", q: "To connect a phone to Wi-Fi, you usually open:", options: ["The camera", "The calculator", "A game", "Settings, then Wi-Fi"], answer: 3, why: "Wi-Fi settings are in the Settings app." },
      { objective: "O2", q: "Who can apply for Lifeline?", options: ["People with low income or who get help like SNAP or Medicaid", "Only businesses", "Only people over 90", "Anyone who pays a fee"], answer: 0, why: "Lifeline is based on income or taking part in certain assistance programs." },
      { objective: "O2", q: "Where do you check the latest Lifeline amounts and rules?", options: ["A text from a stranger", "lifelinesupport.org", "A pop-up ad", "A social media comment"], answer: 1, why: "Lifeline Support is the official program site." },
      { objective: "O2", q: "On public Wi-Fi, it is best to avoid:", options: ["Reading the news", "Checking the weather", "Online banking", "Searching library hours"], answer: 2, why: "Sensitive tasks are safer on a private connection." },
      { objective: "O3", q: "A search engine is:", options: ["A car part", "An email app", "A password", "A site that finds other websites, like Google or Bing"], answer: 3, why: "Search engines find websites for you." },
      { objective: "O3", q: "Official U.S. government websites usually end in:", options: [".gov", ".win", ".prize", ".xyz"], answer: 0, why: ".gov is for U.S. government sites." },
      { objective: "O3", q: "A page says \"You won a prize! Download now!\" You should:", options: ["Download it", "Close the page and go back", "Type your bank number", "Share it with friends"], answer: 1, why: "Prizes and download requests are warning signs." },
      { objective: "O4", q: "In an email, the Subject is:", options: ["The person's address", "The attachment", "A few words saying what the email is about", "Your password"], answer: 2, why: "The subject is the email's short title." },
      { objective: "O4", q: "Before pressing Send, you should check:", options: ["Nothing", "Only the font", "The weather", "The address, the message and the attachment"], answer: 3, why: "A quick check prevents mistakes." },
      { objective: "O4", q: "Which is a free email service?", options: ["Gmail", "A fax machine", "A printer", "A Wi-Fi router"], answer: 0, why: "Gmail and Outlook.com are free email services." },
      { objective: "O5", q: "Which password is weakest?", options: ["Blue-Taco-River-58", "password123", "Lamp!Garden!Seven!42", "Moon-Fork-Cactus-19"], answer: 1, why: "\"password123\" is one of the most guessed passwords." },
      { objective: "O5", q: "Two-step verification means:", options: ["Typing your password twice", "Two people share an account", "A second check, like a code to your phone", "Walking two steps"], answer: 2, why: "It adds a second check after your password." },
      { objective: "O5", q: "When you finish on a library computer, you should:", options: ["Leave your email open", "Save your password", "Write your password on a sticky note", "Sign out and close the browser"], answer: 3, why: "Signing out keeps the next person out of your account." },
      { objective: "O6", q: "Which should you NEVER type into an AI assistant?", options: ["The code sent to your phone", "\"How do I attach a photo?\"", "\"I have an iPhone\"", "\"Give me short steps\""], answer: 0, why: "Codes and passwords must stay private." },
      { objective: "O6", q: "An AI's step does not match your screen. You should:", options: ["Give up", "Tell it what you see on your screen", "Restart the internet", "Type your password"], answer: 1, why: "Describing your screen helps it give the right steps." },
      { objective: "O6", q: "Who else can help you with technology for free?", options: ["A pop-up ad", "A stranger who texts you", "Library staff", "Someone who asks for your code"], answer: 2, why: "Library staff help people with computers every day." },
      { objective: "O6", q: "A good first prompt for tech help includes:", options: ["Your bank number", "Only one word", "Your Social Security number", "Your device and what you want to do"], answer: 3, why: "That gives the AI what it needs to help." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Pre-Test: What Do You Already Know?",
    from: [
      0,
      3,
      7,
      8,
      10,
      13,
      14,
      17
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      {
        name: "Trustworthy search",
        objective: "O3",
        notYet: "Used an ad or a site that is not the library's own.",
        meets: "Found the hours on the library's official website.",
        exceeds: "Can say how they knew the site was official."
      },
      {
        name: "Screenshot or photo",
        objective: "O1",
        notYet: "No screenshot or photo of the hours.",
        meets: "A clear screenshot or photo that shows the hours.",
        exceeds: "Took it without help."
      },
      {
        name: "Email sent",
        objective: "O4",
        notYet: "Email missing a subject, message or attachment.",
        meets: "Sent with a subject, a short polite message and the photo attached.",
        exceeds: "The person confirmed they got it and could see the photo."
      },
      {
        name: "Account safety",
        objective: "O5",
        notYet: "Weak password, or did not sign out of a shared computer.",
        meets: "Account has a strong password, and signed out of any shared computer.",
        exceeds: "Two-step verification is turned on."
      }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Learners who send an email or look up information on their own within 30 days (follow-up survey)",
      "Learners who apply for Lifeline or start using free library computers",
      "Learners who start another Koach Learn course within 30 days"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A smartphone, or a library or community-center computer",
      "A free email account (Gmail or Outlook.com); library staff can help make one",
      "A free AI assistant for tech help",
      "Paper and pen for notes and password hints (not the password itself)",
      "About 60 minutes in total, in short sessions: lessons, practice, checks and the final task"
    ],
    facilitatorNotes: [
      "Go slowly and let learners do every step with their own hands; do not take the mouse or phone from them.",
      "Have staff ready to help learners create an email account before Lesson 4.",
      "Never ask learners to show or say their passwords or codes.",
      "Before learners leave, check that each one signs out of shared computers.",
      "Score the final task with the rubric, and give feedback on one Not yet row at a time."
    ]
  }
};
