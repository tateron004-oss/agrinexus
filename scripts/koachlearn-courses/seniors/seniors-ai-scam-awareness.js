"use strict";

// Koach Learn course: Seniors and Technology -> "AI Safety and Scam Awareness for Seniors". Shape and rules: scripts/koachlearn-courses/README.md; model: re-entry/reentry-ai-digital-confidence.js.
// Facts checked 27 October 2026: FTC scam signs and ReportFraud.ftc.gov; National Elder Fraud Hotline 833-372-8311 (DOJ Office for Victims of Crime); IC3 run by the FBI; Medicare calls guidance.

module.exports = {
  id: "seniors-ai-scam-awareness",
  category: "Seniors and Technology",
  name: "AI Safety and Scam Awareness for Seniors",
  skills: "Spotting the four signs of a scam, Recognizing AI voice and message tricks, Checking a message safely, Refusing risky payments, Reporting a scam",
  outcome: "look at a call, text or email, decide whether it shows the signs of a scam, check it safely using a number you already trust, and know where to report it.",
  about: [
    "This course is for older adults, and the people who care about them, who want to stay a step ahead of scammers. Scammers now use AI to write better messages and even copy voices, so the old warning signs are more important than ever.",
    "You will learn the four signs of a scam, how AI tricks work, a simple Stop, Check, Call habit, and where to report a scam in the United States.",
    "Each lesson takes about five minutes. Do the \"Try it now\" tasks; they build your own scam safety card. A knowledge check closes each chapter and a 20-question quiz closes the course. Being fooled is not a sign of weakness: these criminals are professionals, and anyone can be targeted."
  ],
  finalTask: "Make your own scam safety card: write down three trusted phone numbers (a family member, your bank from the back of your card, and your doctor's office), your family code word, the Stop, Check, Call steps, and the places to report a scam. Then judge two sample messages using the four signs.",
  chapters: [
    {
      name: "Chapter 1: How scams work today",
      lessons: [
        {
          title: "The four signs of a scam",
          minutes: 5,
          goal: "Name the four signs that a call, text or email is probably a scam.",
          text: [
            "The Federal Trade Commission (FTC), the US government's consumer protection agency, describes four common signs of a scam. Learn these four and you will catch most scams, with or without AI.",
            "1. They pretend to be someone you trust: a government office, your bank, a well-known company, a charity or a family member. 2. They say there is a problem or a prize: you owe money, your account is locked, or you won something but must pay a fee. 3. They pressure you to act now and may tell you not to hang up or not to tell anyone. 4. They want payment in an unusual way: gift cards, wire transfers, cryptocurrency, a payment app, or a check they want you to cash and send money back from.",
            "If you see even one of these signs, slow down and check before you do anything."
          ],
          words: [["FTC", "the Federal Trade Commission, the US government agency that protects people from scams."], ["Impersonate", "to pretend to be someone else."]],
          slides: [
            { title: "Sign 1: They pretend", bullets: ["Government, bank, company, charity", "Even a family member"] },
            { title: "Sign 2: A problem or a prize", bullets: ["\"You owe money\"", "\"Your account is locked\"", "\"You won, just pay a fee\""] },
            { title: "Sign 3: Pressure", bullets: ["\"Act now\"", "\"Don't hang up\"", "\"Don't tell anyone\""] },
            { title: "Sign 4: Strange payment", bullets: ["Gift cards or wire transfers", "Cryptocurrency or payment apps", "Cash a check and send money back"] }
          ],
          sources: [{ name: "FTC: How to avoid a scam", url: "https://consumer.ftc.gov/articles/how-avoid-scam" }],
          tryIt: "Take an index card or piece of paper. Write \"My scam safety card\" at the top, then write the four signs in your own words.",
          youCanNow: "name the four signs of a scam."
        },
        {
          title: "AI voice copies and fake family emergencies",
          minutes: 5,
          goal: "Recognize a fake emergency call that may use an AI copy of a loved one's voice.",
          text: [
            "With a short recording of someone's voice, such as a video posted online, scammers can use AI to make a copy of that voice. Then they call a grandparent, crying or panicked: \"Grandma, I've been in an accident, I need money for bail, please don't tell Mom.\"",
            "Sometimes a second person comes on the line pretending to be a lawyer or police officer. They ask for cash, gift cards or a wire transfer, and may even send a courier to pick up money at your door.",
            "The voice may sound real, but the four signs are still there: pretending, a problem, pressure and secrecy, and an unusual payment. Hang up and call your loved one, or their parent, on the number you already have. A family code word that only your family knows is a strong extra check."
          ],
          steps: ["Notice the signs: panic, secrecy, a request for money.", "Hang up, even if the voice sounds real.", "Call your loved one or their parent on the number you already have.", "Ask for your family code word if you have one."],
          words: [["Voice cloning", "using AI to copy someone's voice from a short recording."], ["Courier", "a person sent to pick up or deliver something."]],
          slides: [
            { title: "AI can copy a voice", bullets: ["From a short video or recording", "It can sound just like a grandchild"] },
            { title: "The fake emergency", bullets: ["Accident, arrest or hospital", "\"Don't tell Mom\"", "Cash, gift cards, wire, or a courier at your door"] },
            { title: "What to do", bullets: ["Hang up, even if it sounds real", "Call them on the number you have", "Ask for your family code word"] }
          ],
          tryIt: "On your safety card, write the names and phone numbers of two family members you would call to check an emergency. Then call one of them and agree on a family code word.",
          youCanNow: "recognize a fake family emergency call and check it safely."
        },
        {
          title: "Fake messages, websites and pop-ups",
          minutes: 5,
          goal: "Spot a fake text, email, website or pop-up warning.",
          text: [
            "AI helps scammers write texts and emails with perfect spelling that look like they come from your bank, a delivery company, Medicare or Amazon. Good spelling no longer proves a message is real.",
            "Common tricks: \"Your package could not be delivered, click here.\" \"Unusual activity on your account, log in now.\" A pop-up on your computer saying it has a virus and you must call a number. These links and numbers lead to the scammer.",
            "Do not click links or call numbers in unexpected messages. Close the message, and go to the company's real website by typing the address yourself, or call the number on the back of your card or on a bill you trust. Medicare says it will never call to sell you anything or visit your home."
          ],
          steps: ["Do not click the link or call the number in the message.", "Close the message or pop-up.", "Type the company's real address yourself, or call the number on your card or bill.", "If a pop-up will not close, turn off the device and ask someone you trust."],
          words: [["Link", "text you tap or click that takes you to a website."], ["Pop-up", "a box that suddenly appears on your screen."], ["Phishing", "a fake message that tries to get you to give away private information."]],
          slides: [
            { title: "Perfect spelling is not proof", bullets: ["AI writes messages that look real", "Bank, delivery, Medicare, Amazon"] },
            { title: "Common tricks", bullets: ["\"Your package could not be delivered\"", "\"Log in now, unusual activity\"", "\"Virus! Call this number\""] },
            { title: "What to do", bullets: ["Do not click or call from the message", "Type the real address yourself", "Call the number on your card or bill"] }
          ],
          sources: [{ name: "Medicare: Reporting Medicare fraud and abuse", url: "https://www.medicare.gov/basics/reporting-medicare-fraud-and-abuse" }],
          tryIt: "On your safety card, write your bank's phone number copied from the back of your bank card, and your doctor's office number from a bill or appointment card. These are your trusted numbers.",
          youCanNow: "spot fake messages and pop-ups and reach companies safely using numbers you trust."
        }
      ],
      check: {
        title: "Knowledge Check 1: How scams work today",
        questions: [
          { q: "Which is one of the four signs of a scam?", options: ["The message has a clear date", "You know the sender well and expected it", "They pressure you to act right now", "It arrived by regular mail"], answer: 2, why: "Pressure to act now is a classic scam sign." },
          { q: "Someone asks you to pay a \"government fee\" with gift cards. This is:", options: ["A scam sign", "Normal", "A tax rule", "A bank rule"], answer: 0, why: "Real offices do not take payment in gift cards." },
          { q: "A caller sounds exactly like your grandson and begs for bail money. What do you do?", options: ["Send the money fast", "Wait for the courier", "Give them your card number", "Hang up and call your grandson or his parent on the number you have"], answer: 3, why: "AI can copy voices; checking on a known number is safe." },
          { q: "An email has perfect spelling and your bank's logo. Does that prove it is real?", options: ["Yes, always", "No, AI makes fake messages look real", "Yes, if it is long", "Yes, if it has a link"], answer: 1, why: "Good spelling and logos are easy for scammers to copy." },
          { q: "A pop-up says your computer has a virus and to call a number. You should:", options: ["Call the number", "Not call; close it, or turn off the device and ask someone you trust", "Pay to fix it", "Give them remote access"], answer: 1, why: "Pop-up virus warnings with phone numbers are a common scam." }
        ]
      }
    },
    {
      name: "Chapter 2: Protecting yourself",
      lessons: [
        {
          title: "The Stop, Check, Call habit",
          minutes: 4,
          goal: "Use three steps every time a message or call worries you.",
          text: [
            "Scammers win by rushing you. Your best defense is a habit you use every time: Stop, Check, Call.",
            "Stop: do not click, pay, or give any information. It is fine to hang up on anyone, even if they say they are the police or the bank. Check: look for the four signs. Talk to someone you trust before you act. Call: contact the person or company yourself, using a number from your safety card, your bank card, a bill or the official website you typed in yourself.",
            "You can also ask an AI assistant for a second opinion. Paste the message, after removing any private details, and ask: \"Does this message show signs of a scam?\" Treat its answer as a helper, not the final word; your Stop, Check, Call steps still come first."
          ],
          steps: ["Stop: do not click, pay or share anything.", "Check: look for the four signs and talk to someone you trust.", "Call: use a number you already trust, never one from the message."],
          words: [["Second opinion", "asking someone else to look at something before you decide."]],
          slides: [
            { title: "Stop", bullets: ["Do not click, pay or share", "It is OK to hang up on anyone"] },
            { title: "Check", bullets: ["Look for the four signs", "Talk to someone you trust"] },
            { title: "Call", bullets: ["Use a number you already trust", "Never a number from the message"] },
            { title: "AI as a helper", bullets: ["Remove private details first", "Ask: \"Does this show signs of a scam?\"", "Your own steps still come first"] }
          ],
          tryIt: "Write Stop, Check, Call on your safety card. Then ask an AI assistant: \"Does this message show signs of a scam? Your package is held. Pay $1.99 at this link today or it will be returned.\" Compare its answer with the four signs.",
          youCanNow: "use the Stop, Check, Call habit and ask AI for a careful second opinion."
        },
        {
          title: "Protecting your money and your information",
          minutes: 5,
          goal: "Know which details and payments to never give to an unexpected caller or message.",
          text: [
            "Never give these to anyone who contacts you unexpectedly: your Social Security or Medicare number, bank or card numbers, passwords, or a code that was texted to your phone. Your bank already knows your account number; a real bank will not ask for your password or texted code.",
            "Never pay a stranger with gift cards, wire transfers, cryptocurrency or a payment app, and never deposit a check and send part of the money back. The FTC says real government offices will never tell you to move money to \"protect\" it, withdraw cash, or buy gold.",
            "Never let a caller connect to your computer to \"fix\" it. If you already gave money or information, act quickly: call your bank using the number on your card and tell it what happened."
          ],
          steps: ["Never share Social Security, Medicare, bank or card numbers with an unexpected contact.", "Never share passwords or texted codes.", "Never pay strangers with gift cards, wires, crypto or payment apps.", "If you already paid or shared, call your bank right away using the number on your card."],
          words: [["Texted code", "a short number sent to your phone to prove it is really you signing in."], ["Wire transfer", "sending money electronically; it is very hard to get back."]],
          slides: [
            { title: "Never share", bullets: ["Social Security or Medicare numbers", "Bank or card numbers, passwords", "Codes texted to your phone"] },
            { title: "Never pay strangers with", bullets: ["Gift cards or wire transfers", "Cryptocurrency or payment apps", "Money from a check you just cashed"] },
            { title: "Real offices never ask you to", bullets: ["Move money to \"protect\" it", "Withdraw cash or buy gold"] },
            { title: "Already paid?", bullets: ["Call your bank right away", "Use the number on your card"] }
          ],
          sources: [{ name: "FTC: How to avoid a scam", url: "https://consumer.ftc.gov/articles/how-avoid-scam" }],
          tryIt: "On your safety card, write: \"I never share my numbers, passwords or codes with anyone who contacts me first. I never pay strangers with gift cards, wires or crypto.\"",
          youCanNow: "protect your private details and refuse risky payments."
        },
        {
          title: "Reporting a scam and getting help",
          minutes: 5,
          goal: "Know where to report a scam and get support.",
          text: [
            "Reporting helps stop scammers and can help you. In the United States, you can report scams to the Federal Trade Commission at ReportFraud.ftc.gov. Internet crimes can also be reported to the FBI's Internet Crime Complaint Center at ic3.gov.",
            "If you are 60 or older, the National Elder Fraud Hotline, run by the Department of Justice, is free: call 833-FRAUD-11 (833-372-8311). When we checked, it was open Monday to Friday, 10 am to 6 pm Eastern time, with help in English, Spanish and other languages. Check the hotline's website for current hours.",
            "If someone uses your information, go to IdentityTheft.gov for a free recovery plan. If Medicare fraud is involved, call 1-800-MEDICARE (1-800-633-4227). Real reporting sites will never ask you to pay to get your money back; anyone who does is another scam."
          ],
          steps: ["Call your bank first if money was taken.", "Report at ReportFraud.ftc.gov.", "Age 60 or older: call the Elder Fraud Hotline, 833-372-8311.", "If your identity was used: go to IdentityTheft.gov.", "Beware of anyone who charges to recover your money."],
          words: [["Report", "telling the right office what happened so it can act."], ["Identity theft", "when someone uses your personal information to pretend to be you."]],
          slides: [
            { title: "Where to report", bullets: ["ReportFraud.ftc.gov", "FBI's ic3.gov for internet crime"] },
            { title: "Age 60 or older", bullets: ["National Elder Fraud Hotline", "833-FRAUD-11 (833-372-8311)", "Free; check its site for current hours"] },
            { title: "More help", bullets: ["IdentityTheft.gov if your information is used", "1-800-MEDICARE for Medicare fraud", "Never pay anyone to \"recover\" your money"] }
          ],
          sources: [{ name: "FTC: Report fraud", url: "https://reportfraud.ftc.gov/" }, { name: "DOJ Office for Victims of Crime: National Elder Fraud Hotline", url: "https://ovc.ojp.gov/program/stop-elder-fraud/providing-help-restoring-hope" }, { name: "FBI Internet Crime Complaint Center", url: "https://www.ic3.gov/" }, { name: "FTC: What to know about identity theft", url: "https://consumer.ftc.gov/articles/what-know-about-identity-theft" }, { name: "Medicare: Reporting fraud and abuse", url: "https://www.medicare.gov/basics/reporting-medicare-fraud-and-abuse" }],
          tryIt: "Final task: finish your scam safety card. Add the places to report a scam and the Elder Fraud Hotline number. Then judge these two messages with the four signs: (1) \"Hi Grandpa, new number, I'm in trouble, send $500 in gift cards\"; (2) a reminder from your pharmacy that your prescription is ready, with no link and no request for money.",
          youCanNow: "spot a scam, check it safely, protect your money, and report it to the right place."
        }
      ],
      check: {
        title: "Knowledge Check 2: Protecting yourself",
        questions: [
          { q: "What are the three steps of the safety habit?", options: ["Click, Pay, Forget", "Reply, Share, Send", "Wait, Hope, Pay", "Stop, Check, Call"], answer: 3, why: "Stop, Check, Call slows the scammer down." },
          { q: "When you call to check, which number should you use?", options: ["One from your safety card, card or bill", "The one in the message", "One the caller gives you", "One from a pop-up"], answer: 0, why: "Only numbers you already trust are safe." },
          { q: "A caller says to move your savings to a \"safe account\" to protect it. This is:", options: ["Good advice", "A bank rule", "A scam; real offices never ask this", "A tax requirement"], answer: 2, why: "The FTC says real offices never tell you to move money to protect it." },
          { q: "Where can you report a scam to the FTC?", options: ["A pop-up", "The scammer's website", "A social media post", "ReportFraud.ftc.gov"], answer: 3, why: "ReportFraud.ftc.gov is the FTC's reporting site." },
          { q: "Someone offers to recover your lost money for a fee. What is this?", options: ["A government program", "Normal help", "Probably another scam", "Free advice"], answer: 2, why: "Real reporting sites never charge to get money back." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: AI Safety and Scam Awareness for Seniors",
    questions: [
      { q: "Which US agency describes the four signs of a scam?", options: ["The weather service", "The Federal Trade Commission (FTC)", "The post office", "A phone company"], answer: 1, why: "The FTC protects consumers from scams." },
      { q: "A message says you won a prize but must pay a fee first. This is:", options: ["A scam sign", "A normal prize", "A tax rule", "A bank rule"], answer: 0, why: "A prize that needs a fee is a common scam." },
      { q: "\"Don't hang up and don't tell anyone\" is a sign of:", options: ["Pressure, a scam sign", "Good service", "A real emergency", "A doctor's call"], answer: 0, why: "Pressure and secrecy are scam signs." },
      { q: "Which payment method is a red flag when a stranger asks for it?", options: ["Paying your own utility bill on its official site", "Gift cards", "Paying at the grocery checkout", "A check you mail to your landlord"], answer: 1, why: "Scammers ask for gift cards because they are hard to trace." },
      { q: "What is voice cloning?", options: ["A singing lesson", "A phone repair", "Using AI to copy someone's voice", "A type of hearing aid"], answer: 2, why: "AI can copy a voice from a short recording." },
      { q: "In a fake emergency call, a second person may pretend to be:", options: ["A chef", "Your neighbor's dog", "A weather reporter", "A lawyer or police officer"], answer: 3, why: "Scammers add fake officials to seem real." },
      { q: "A family code word helps you:", options: ["Unlock your phone", "Pay bills", "Check who is really calling", "Reset your password"], answer: 2, why: "Only your real family knows it." },
      { q: "Does perfect spelling prove a message is real?", options: ["No", "Yes", "Only on Sundays", "Only from banks"], answer: 0, why: "AI writes fake messages with perfect spelling." },
      { q: "A text says your package is held; pay a small fee at a link. You should:", options: ["Click and pay", "Forward it to friends", "Reply with your card number", "Not click; check with the delivery company yourself"], answer: 3, why: "Links in unexpected messages lead to scammers." },
      { q: "A pop-up says \"Virus! Call this number now.\" You:", options: ["Call it", "Do not call; close it or turn off the device", "Pay for repair", "Let them connect to your computer"], answer: 1, why: "Pop-up virus warnings are a common scam." },
      { q: "According to Medicare, Medicare will never:", options: ["Mail you information", "Call to sell you anything or visit your home", "Pay for care", "Have a website"], answer: 1, why: "Medicare says it will not call to sell or visit your home." },
      { q: "In Stop, Check, Call, \"Stop\" means:", options: ["Stop paying bills", "Stop using your phone forever", "Stop talking to family", "Do not click, pay or share"], answer: 3, why: "Stopping takes away the scammer's rush." },
      { q: "Before pasting a message into AI for a second opinion, you should:", options: ["Remove private details", "Add your bank number", "Add your password", "Add your address"], answer: 0, why: "Private details never go into AI." },
      { q: "An AI assistant's opinion on a message is:", options: ["A legal decision", "Always right", "A helper, not the final word", "A bank decision"], answer: 2, why: "AI can be wrong; your own steps come first." },
      { q: "A real bank will never ask you for:", options: ["To call its number", "To visit a branch", "To read your statement", "Your password or texted code"], answer: 3, why: "Banks do not ask for passwords or codes." },
      { q: "Someone asks you to deposit their check and send part back. This is:", options: ["A bank rule", "A normal favor", "A fake check scam", "A tax refund"], answer: 2, why: "The check bounces and you lose the money you sent." },
      { q: "If you already sent money to a scammer, the first call is to:", options: ["The scammer", "Your bank, using the number on your card", "A pop-up number", "Nobody"], answer: 1, why: "Your bank may be able to stop or reverse the payment." },
      { q: "The National Elder Fraud Hotline number is:", options: ["833-372-8311", "911", "411", "A number from a text message"], answer: 0, why: "833-FRAUD-11 (833-372-8311) is the DOJ's hotline." },
      { q: "If someone uses your personal information, a free recovery plan is at:", options: ["IdentityTheft.gov", "A pop-up ad", "The scammer's site", "A social media page"], answer: 0, why: "IdentityTheft.gov is the FTC's recovery site." },
      { q: "The FBI site for reporting internet crime is:", options: ["fbi-refund.win", "ic3.gov", "a text link", "a gift card site"], answer: 1, why: "IC3 is the FBI's Internet Crime Complaint Center." }
    ]
  }
};
