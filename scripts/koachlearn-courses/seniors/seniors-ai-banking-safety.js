"use strict";

// Koach Learn course: Seniors and Technology -> "AI and Online Banking Safety" (bonus). Shape and rules: scripts/koachlearn-courses/README.md; model: re-entry/reentry-ai-digital-confidence.js.
// Facts checked 27 October 2026: FTC scam signs, payment red flags and ReportFraud.ftc.gov; National Elder Fraud Hotline 833-372-8311; IdentityTheft.gov. Bank app menus differ, so lessons describe the action, not menu names.

module.exports = {
  id: "seniors-ai-banking-safety",
  category: "Seniors and Technology",
  name: "AI and Online Banking Safety",
  skills: "Getting your bank's real app, Signing in safely with two-step verification, Setting up account alerts, Spotting AI-powered bank scams, Using payment apps safely, Knowing what to do if something goes wrong",
  outcome: "sign in to your bank's official app or website safely, turn on alerts for your account, spot a fake \"bank\" call or message, and know exactly who to call if something goes wrong.",
  about: [
    "Online banking lets you check your balance, see payments and pay bills without a trip to the branch. This course is for older adults who want to use it with confidence, and to stay safe from scammers who now use AI to sound and look like your bank.",
    "You will get your bank's real app, sign in safely, set up alerts so you notice anything unusual, learn the tricks fake \"bank\" callers use, use payment apps carefully, and make a plan for what to do if something goes wrong.",
    "This course does not give financial advice, and you will never be asked to type your real account details here or into an AI assistant. A family member you trust can sit with you during setup. Each lesson takes about five minutes. A knowledge check closes each chapter and a 20-question quiz closes the course."
  ],
  finalTask: "Sign in to your bank's official app or website, turn on at least two alerts (such as for large purchases and low balance), write your bank's phone number from the back of your card on your safety card, and use the four signs to judge a sample \"bank\" text message.",
  chapters: [
    {
      name: "Chapter 1: Banking online safely",
      lessons: [
        {
          title: "Getting your bank's real app or website",
          minutes: 5,
          goal: "Find and open your bank's official app or website without being tricked by a fake.",
          text: [
            "Scammers make fake bank apps and websites that look real. AI makes the copies look even better. So start from a source you trust.",
            "For the app: open the official app store on your phone, search your bank's exact name, and check that the app is published by your bank. If you are unsure, your bank's official website or a branch employee can tell you the app's exact name. For the website: type your bank's address yourself, or use the address printed on your statement. Do not reach your bank through a link in a text or email.",
            "Your bank can also help you set up online banking at a branch or by phone, using the number on the back of your card."
          ],
          steps: ["Open the official app store.", "Search your bank's exact name.", "Check that the app is published by your bank.", "On a computer, type the address from your statement yourself.", "Never use a link in a text or email to reach your bank."],
          words: [["Online banking", "using your bank's app or website to see and manage your accounts."], ["Fake app", "an app made to look like a real one in order to steal information."]],
          slides: [
            { title: "Fakes look real", bullets: ["Fake bank apps and websites exist", "AI makes them look even better"] },
            { title: "Get the real app", bullets: ["Official app store only", "Search the bank's exact name", "Check the publisher is your bank"] },
            { title: "Get the real website", bullets: ["Type the address yourself", "Use the one on your statement", "Never from a text or email link"] }
          ],
          tryIt: "Look at a bank statement or your bank card and find your bank's website address and phone number. Write them on a card you keep at home.",
          youCanNow: "find your bank's real app or website from a trusted source."
        },
        {
          title: "Signing in safely",
          minutes: 6,
          goal: "Sign in with a strong password and two-step verification, and sign out safely.",
          text: [
            "Your password should be long and hard to guess: a phrase of several unrelated words works well. Use it only for your bank. Keep it in a safe place at home or in a password manager, never in a plain note on your phone, and never share it.",
            "Two-step verification (also called two-factor) adds a second check, usually a code texted to your phone or a prompt in the app. Even if someone learns your password, they cannot get in without that code. Turn it on in the app's security settings, or ask your bank to help.",
            "Your bank will never call or text to ask you for that code. Anyone who asks for it is a scammer. Many apps also let you sign in with your fingerprint or face, which is safe and easy. On a shared or library computer, do not save your password, and sign out when done."
          ],
          steps: ["Choose a long, unique password, such as several unrelated words.", "Keep it somewhere safe, never in a plain note.", "Turn on two-step verification.", "Never share the code with anyone.", "Sign out on shared computers."],
          words: [["Two-step verification", "a second check, such as a texted code, needed to sign in."], ["Password manager", "an app that safely stores your passwords."]],
          slides: [
            { title: "A strong password", bullets: ["Long: several unrelated words", "Only for your bank", "Kept safe, never shared"] },
            { title: "Two-step verification", bullets: ["A code or app prompt as a second check", "Stops thieves who know your password", "Turn it on in security settings"] },
            { title: "Golden rule", bullets: ["Your bank never asks for that code", "Anyone who asks is a scammer"] },
            { title: "Shared computers", bullets: ["Do not save your password", "Sign out when done"] }
          ],
          tryIt: "With a family member or bank employee if you like, open your bank's app or website and check that two-step verification is turned on. If not, turn it on. Do not share any codes with anyone, including us.",
          youCanNow: "sign in safely with a strong password and two-step verification."
        },
        {
          title: "Setting up alerts to catch problems early",
          minutes: 5,
          goal: "Turn on account alerts so you notice unusual activity quickly.",
          text: [
            "Alerts are messages your bank sends you by text, email or app notification when something happens in your account: a large purchase, a low balance, a new payee or a password change.",
            "In the bank's app or website, look for Alerts or Notifications, often under your profile or settings. Turn on alerts for purchases over an amount you choose, low balance, and any change to your sign-in details.",
            "When an alert arrives for something you did not do, do not reply to it or call a number in it. Open your bank's app yourself, or call the number on the back of your card."
          ],
          steps: ["Open your bank's app or website.", "Find Alerts or Notifications.", "Turn on alerts for large purchases, low balance and sign-in changes.", "If an alert shows something you did not do, call the number on your card."],
          words: [["Alert", "a message from your bank about activity in your account."], ["Payee", "a person or company you send money to."]],
          slides: [
            { title: "Alerts catch problems early", bullets: ["Large purchases", "Low balance", "New payee or password change"] },
            { title: "Turn them on", bullets: ["Find Alerts or Notifications", "Choose your amounts", "Text, email or app"] },
            { title: "Something you didn't do?", bullets: ["Don't reply or call a number in it", "Open the app yourself", "Or call the number on your card"] }
          ],
          tryIt: "Turn on at least two alerts in your bank's app or website: one for purchases over an amount you choose, and one for a low balance.",
          youCanNow: "set up bank alerts and respond safely when one arrives."
        }
      ],
      check: {
        title: "Knowledge Check 1: Banking online safely",
        questions: [
          { q: "A text has a link to \"update your bank details\". How should you reach your bank?", options: ["Reply with your password", "Tap the link", "Type the address yourself or use the official app", "Call the number in the text"], answer: 2, why: "Links in texts can lead to fake sites." },
          { q: "How can you tell a bank app is the real one?", options: ["It is in the official store and published by your bank", "It came from a pop-up", "A stranger sent it", "It has a nice picture"], answer: 0, why: "Check the store and the publisher." },
          { q: "What does two-step verification add?", options: ["A second password to share", "A second bank account", "Free money", "A second check, like a texted code"], answer: 3, why: "It stops thieves who only know your password." },
          { q: "Someone calls saying they are from your bank and asks for the code just texted to you. You:", options: ["Read it to them", "Hang up; your bank never asks for that code", "Text it to them", "Give half of it"], answer: 1, why: "Anyone asking for the code is a scammer." },
          { q: "An alert shows a purchase you did not make. You:", options: ["Reply to the alert", "Call the number on the back of your card", "Call a number in the alert", "Ignore it"], answer: 1, why: "Use a number you already trust." }
        ]
      }
    },
    {
      name: "Chapter 2: Spotting scams and staying protected",
      lessons: [
        {
          title: "AI-powered fake bank calls and messages",
          minutes: 5,
          goal: "Recognize a fake \"bank fraud department\" call or message.",
          text: [
            "A common scam: a call or text says it is your bank's fraud department and there is a problem with your account. The caller ID may even show your bank's name, and AI can make the voice and messages sound very professional.",
            "Then they ask you to do something: read them a code, \"verify\" your password, move your money to a \"safe account\", withdraw cash for a courier, or buy gift cards. These are the FTC's scam signs: pretending, a problem, pressure, and an unusual way to pay. The FTC says real organizations will never tell you to move money to protect it.",
            "What to do: hang up. Then call the number on the back of your card yourself. If it was real, the bank will know about it."
          ],
          steps: ["Notice: a \"bank\" contacts you about a problem.", "Notice: they ask for a code, password, money move, cash or gift cards.", "Hang up or stop replying.", "Call the number on the back of your card yourself."],
          words: [["Spoofing", "making a fake caller ID show a real company's name or number."], ["Safe account scam", "a trick telling you to move your money to \"protect\" it, straight to the scammer."]],
          slides: [
            { title: "The fake fraud call", bullets: ["\"This is your bank's fraud department\"", "Caller ID can be faked", "AI makes it sound professional"] },
            { title: "What they ask for", bullets: ["Codes or passwords", "Move money to a \"safe account\"", "Cash for a courier, or gift cards"] },
            { title: "What you do", bullets: ["Hang up", "Call the number on your card", "If it was real, the bank will know"] }
          ],
          sources: [{ name: "FTC: How to avoid a scam", url: "https://consumer.ftc.gov/articles/how-avoid-scam" }],
          tryIt: "Ask an AI assistant: \"What are signs that a call from my bank's fraud department is fake?\" Compare its answer with this lesson, and write the three you think are most important on your card.",
          youCanNow: "recognize a fake bank call or message and check it safely."
        },
        {
          title: "Using payment apps carefully",
          minutes: 5,
          goal: "Send money with a payment app only to people you know and trust.",
          text: [
            "Payment apps (such as Zelle, Venmo, PayPal and Cash App) let you send money from your phone. They are handy for paying back a family member, but the money usually moves instantly and can be very hard to get back.",
            "Only send money to people you know in person. Double-check the name, phone number or email before you send. Never pay a stranger, an online seller you do not know, or anyone who contacted you first claiming to be your bank, the government or a company.",
            "Be careful of \"accidental payment\" tricks: a stranger sends you money and asks you to send it back. Do not send it; contact your bank or the app company through its official app or website."
          ],
          steps: ["Only pay people you know in person.", "Double-check the name and number before sending.", "Never pay someone who contacted you first.", "If a stranger \"accidentally\" pays you, contact your bank or the app, do not send money back."],
          words: [["Payment app", "an app that sends money from your phone to another person."], ["Instant transfer", "money that moves right away and is hard to reverse."]],
          slides: [
            { title: "Handy, but fast", bullets: ["Zelle, Venmo, PayPal, Cash App", "Money moves instantly", "Hard to get back"] },
            { title: "Safe use", bullets: ["Only people you know in person", "Double-check name and number", "Never pay someone who contacted you first"] },
            { title: "\"Oops, I sent it to you\"", bullets: ["Do not send money back", "Contact your bank or the app"] }
          ],
          sources: [{ name: "FTC: How to avoid a scam (payment red flags)", url: "https://consumer.ftc.gov/articles/how-avoid-scam" }],
          tryIt: "Write on your card: \"I only use payment apps with people I know in person. I never pay anyone who contacts me first.\"",
          youCanNow: "use payment apps safely and avoid common payment app tricks."
        },
        {
          title: "If something goes wrong",
          minutes: 5,
          goal: "Know the steps to take quickly if money or information is stolen.",
          text: [
            "Act fast. Call your bank right away using the number on the back of your card. Tell them what happened. Ask them to stop or reverse payments if possible, change your password, and watch your account.",
            "Then report it. Report the scam to the Federal Trade Commission at ReportFraud.ftc.gov. If someone is using your identity, go to IdentityTheft.gov for a free recovery plan. If you are 60 or older, the National Elder Fraud Hotline is free: 833-FRAUD-11 (833-372-8311).",
            "Watch for a second scam: people who call offering to \"recover\" your money for a fee are usually scammers too. And there is no shame in being targeted. Telling a trusted family member helps protect you and others."
          ],
          steps: ["Call your bank on the number on your card right away.", "Change your password.", "Report at ReportFraud.ftc.gov.", "Use IdentityTheft.gov if your identity was used.", "Age 60+: call 833-372-8311.", "Ignore anyone offering to recover money for a fee."],
          words: [["Identity theft", "when someone uses your personal information to pretend to be you."], ["Recovery scam", "a trick where scammers offer to get back stolen money for a fee."]],
          slides: [
            { title: "Act fast", bullets: ["Call your bank on the number on your card", "Ask to stop or reverse payments", "Change your password"] },
            { title: "Report it", bullets: ["ReportFraud.ftc.gov", "IdentityTheft.gov", "Age 60+: 833-FRAUD-11 (833-372-8311)"] },
            { title: "Watch for a second scam", bullets: ["Fee to \"recover\" money = scam", "No shame: tell someone you trust"] }
          ],
          sources: [{ name: "FTC: Report fraud", url: "https://reportfraud.ftc.gov/" }, { name: "FTC: What to know about identity theft", url: "https://consumer.ftc.gov/articles/what-know-about-identity-theft" }, { name: "DOJ Office for Victims of Crime: National Elder Fraud Hotline", url: "https://ovc.ojp.gov/program/stop-elder-fraud/providing-help-restoring-hope" }],
          tryIt: "Final task: sign in to your bank's official app or website, turn on two alerts, write your bank's number from the back of your card on your safety card, and judge this sample text with the four signs: \"BANK ALERT: Your account is locked. Verify now at the link or it will be closed today.\"",
          youCanNow: "bank online safely, spot fake bank contacts, use payment apps carefully, and act quickly if something goes wrong."
        }
      ],
      check: {
        title: "Knowledge Check 2: Spotting scams and staying protected",
        questions: [
          { q: "The caller ID shows your bank's name. Does that prove the call is real?", options: ["Only if they know your name", "Yes, always", "Only in the morning", "No, caller ID can be faked"], answer: 3, why: "Spoofing makes fake caller IDs." },
          { q: "A caller tells you to move your savings to a \"safe account\". This is:", options: ["A scam", "Normal bank practice", "Required by law", "Good advice"], answer: 0, why: "Real organizations never ask you to move money to protect it." },
          { q: "Who should you send money to with a payment app?", options: ["Online sellers you do not know", "Anyone who asks", "Only people you know in person", "Callers from \"the government\""], answer: 2, why: "Payment app money is hard to get back." },
          { q: "A stranger sends you money \"by accident\" and asks you to send it back. You:", options: ["Give them your password", "Send it back right away", "Send double", "Contact your bank or the app instead"], answer: 3, why: "This is a common trick; let the bank handle it." },
          { q: "Someone offers to recover your stolen money for a fee. This is probably:", options: ["Your bank", "A government program", "Another scam", "Free help"], answer: 2, why: "Recovery scams target people who were already scammed." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: AI and Online Banking Safety",
    questions: [
      { q: "Online banking lets you:", options: ["Print money", "See and manage your accounts on an app or website", "Skip all bills", "Avoid passwords"], answer: 1, why: "It is your bank, on your phone or computer." },
      { q: "The safe place to get your bank's app is:", options: ["The official app store, published by your bank", "A text link", "A pop-up", "An email attachment"], answer: 0, why: "Official stores and publishers are trustworthy." },
      { q: "Where can you find your bank's real website address?", options: ["On your statement or card", "In a text from a stranger", "In a pop-up ad", "In a social media comment"], answer: 0, why: "Your statement and card come from the bank." },
      { q: "A strong password is:", options: ["Your birthday", "Long, like several unrelated words, and used only for your bank", "\"password\"", "Your pet's name"], answer: 1, why: "Long, unique passwords are hard to guess." },
      { q: "Where should you NOT keep your bank password?", options: ["In a safe place at home", "In a password manager", "In a plain note on your phone", "In your memory"], answer: 2, why: "Plain notes are not secure." },
      { q: "Two-step verification protects you because:", options: ["It removes passwords", "It shares your password", "It turns off alerts", "A thief needs the code as well as your password"], answer: 3, why: "The second check blocks thieves." },
      { q: "Does your bank ever call to ask for the code it texted you?", options: ["Only on holidays", "Yes, every week", "No", "Only for large accounts"], answer: 2, why: "Anyone asking for the code is a scammer." },
      { q: "On a library computer after banking, you should:", options: ["Sign out and not save your password", "Leave it signed in", "Save the password", "Write the password down there"], answer: 0, why: "This keeps the next person out." },
      { q: "Bank alerts tell you about:", options: ["New apps", "The weather", "Sports scores", "Activity in your account, like large purchases"], answer: 3, why: "Alerts flag account activity." },
      { q: "A useful alert to turn on is:", options: ["Daily jokes", "Low balance", "Sale ads", "None"], answer: 1, why: "Low balance alerts prevent problems." },
      { q: "An alert shows a charge you did not make. You call:", options: ["The number in the alert", "The number on the back of your card", "A friend's friend", "Nobody"], answer: 1, why: "Use a number you already trust." },
      { q: "\"Spoofing\" means:", options: ["A bank alert", "A type of savings account", "A password manager", "Faking a caller ID"], answer: 3, why: "Spoofed calls look like they come from your bank." },
      { q: "A \"fraud department\" caller asks you to withdraw cash for a courier. This is:", options: ["A scam", "A normal bank process", "A tax rule", "A safety feature"], answer: 0, why: "Banks do not send couriers for your cash." },
      { q: "What should you do with a suspicious bank call?", options: ["Give them a code", "Stay on the line", "Hang up and call the number on your card", "Move your money"], answer: 2, why: "Calling back on a trusted number reveals the truth." },
      { q: "Payment app money:", options: ["Takes a month", "Can always be refunded", "Is free to reverse", "Usually moves instantly and is hard to get back"], answer: 3, why: "That is why you only pay people you know." },
      { q: "Before sending money with an app, you should:", options: ["Skip checking", "Send quickly", "Double-check the name and number", "Ask the stranger to confirm"], answer: 2, why: "A small typo can send money to the wrong person." },
      { q: "If money is stolen, the FIRST call is to:", options: ["The scammer", "Your bank, using the number on your card", "A recovery company", "A pop-up number"], answer: 1, why: "Your bank may stop or reverse payments." },
      { q: "Where do you report a scam to the FTC?", options: ["ReportFraud.ftc.gov", "A social media post", "The scammer's site", "A text reply"], answer: 0, why: "It is the FTC's reporting site." },
      { q: "IdentityTheft.gov gives you:", options: ["A free recovery plan", "A new bank account", "Free money", "A password"], answer: 0, why: "It guides recovery from identity theft." },
      { q: "The National Elder Fraud Hotline number is:", options: ["A number from a scam text", "833-372-8311", "411", "0"], answer: 1, why: "833-FRAUD-11 (833-372-8311) is run by the DOJ." }
    ]
  }
};
