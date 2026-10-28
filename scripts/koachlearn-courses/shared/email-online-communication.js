"use strict";

// Koach Learn course (shared): "Email and Online Communication". Goes in Seniors and Technology, Re-Entry, Workforce Development and Undeserved Community, so the examples are everyday ones: family, doctors,
// job applications, landlords and community groups. Shape: scripts/koachlearn-courses/README.md; model: re-entry/reentry-ai-digital-confidence.js.

module.exports = {
  id: "email-online-communication",
  category: "Seniors and Technology",
  name: "Email and Online Communication",
  skills: "Setting up a free email account, Writing a clear email, Replying and attaching a file, Spotting phishing emails, Joining a video call",
  outcome: "set up a free email account, write and send a clear, polite email with a file attached, reply to messages, spot a fake (phishing) email, and join a video call from a link.",
  about: [
    "Email and video calls are how doctors' offices, employers, landlords, schools and families reach you today. This course shows you how to use them, one small step at a time.",
    "You will make a free email account, write a clear message, reply, attach a file, keep your inbox safe from scams, and join a video call.",
    "Each lesson takes about five minutes. Read the lesson, watch the slides, then do the \"Try it now\" task. There is a short knowledge check after each chapter and a 20-question quiz at the end."
  ],
  finalTask: "Send a clear, polite email to a friend, family member or yourself with a subject line, a greeting, two or three short sentences, a sign-off and one attached file (a photo or document). Then reply to an email you received, and write down two warning signs you would look for before clicking any link.",
  chapters: [
    {
      name: "Chapter 1: Email basics",
      lessons: [
        {
          title: "Getting a free email account",
          minutes: 5,
          goal: "Create a free email account and sign in to it.",
          text: [
            "An email address is like a home address for messages. It looks like name@gmail.com: your chosen name, the @ sign, then the company that runs it.",
            "Free email services include Gmail from Google, Outlook.com from Microsoft and Yahoo Mail. To sign up, go to the company's own website or install its official app, and choose \"Create account\".",
            "Pick an address that sounds professional, like your first and last name, because employers and doctors will see it. Choose a strong password you do not use anywhere else, and add a phone number or backup email so you can get back in if you forget it."
          ],
          steps: ["Go to gmail.com, outlook.com or the official email app.", "Choose \"Create account\".", "Pick a professional address, like firstname.lastname.", "Make a long password you do not use anywhere else.", "Add a phone number or backup email for account recovery.", "Write your new address down and keep the password somewhere safe."],
          words: [["Email address", "your address for receiving messages, like name@gmail.com."], ["Password", "a secret word or phrase that lets only you into your account."], ["Account recovery", "the way to get back into your account if you forget your password, usually a code sent to your phone."]],
          slides: [
            { title: "An email address", bullets: ["Looks like name@gmail.com", "Your name, the @ sign, then the email company"] },
            { title: "Free email services", bullets: ["Gmail from Google", "Outlook.com from Microsoft", "Yahoo Mail"] },
            { title: "Signing up well", bullets: ["Pick a professional address: your first and last name", "Use a long password you use nowhere else", "Add a phone number for account recovery"] }
          ],
          tryIt: "Create a free email account (or open the one you already have). Sign out, then sign back in, so you know you can get in on your own.",
          youCanNow: "create a free email account with a professional address and sign in to it."
        },
        {
          title: "Writing a clear email",
          minutes: 5,
          goal: "Write and send an email with a subject, greeting, short message and sign-off.",
          text: [
            "A good email has five parts: who it goes to, a subject line, a greeting, a short message, and a sign-off with your name.",
            "The subject line tells the reader what the email is about before they open it, for example \"Question about my Tuesday appointment\" or \"Application for the cashier job\".",
            "Keep the message short: say why you are writing, what you need, and by when. Read it once before you press Send, and check the \"To\" address carefully, because you cannot take an email back once it is sent."
          ],
          steps: ["Press Compose or New message.", "Type the person's address in the \"To\" box.", "Write a short subject line.", "Start with a greeting, like \"Hello Ms. Lee,\".", "Write two or three short sentences: why, what you need, by when.", "End with \"Thank you,\" and your name.", "Read it once, check the address, then press Send."],
          words: [["Subject line", "a few words that tell the reader what the email is about."], ["Compose", "the button that starts a new email."], ["Sign-off", "the closing words, like \"Thank you,\" followed by your name."]],
          slides: [
            { title: "Five parts of an email", bullets: ["To: the address, then a subject line", "A greeting", "A short message", "A sign-off with your name"] },
            { title: "A good subject line", bullets: ["\"Question about my Tuesday appointment\"", "\"Application for the cashier job\""] },
            { title: "Before you press Send", bullets: ["Read it once", "Check the \"To\" address", "You cannot take it back after sending"] }
          ],
          tryIt: "Write and send an email to yourself or a family member with all five parts. Subject: \"Practice email\". Open it from the other side and see how it looks.",
          youCanNow: "write a clear email with a subject, greeting, short message and sign-off, and send it."
        },
        {
          title: "Replying, forwarding and attaching a file",
          minutes: 5,
          goal: "Reply to an email and send one with a file attached.",
          text: [
            "Reply sends your answer only to the person who wrote to you. Reply all sends it to everyone on the message, so use it only when everyone needs your answer. Forward sends the email on to someone new.",
            "An attachment is a file you send with an email, like a photo, a résumé or a form. Look for the paper clip icon. Choose the file from your phone or computer, wait until it finishes loading, then send.",
            "Only open attachments you were expecting from people you know. Files from strangers can carry harmful programs."
          ],
          steps: ["Open the email you want to answer.", "Press Reply (not Reply all, unless everyone needs it).", "Write your answer and press Send.", "To attach a file: in a new email, press the paper clip icon.", "Choose the photo or document and wait for it to load.", "Mention the file in your message, then press Send."],
          words: [["Reply all", "answers everyone who got the email, not just the sender."], ["Forward", "sends an email you got on to someone else."], ["Attachment", "a file sent along with an email."]],
          slides: [
            { title: "Reply, Reply all, Forward", bullets: ["Reply: only the sender", "Reply all: everyone on the email", "Forward: send it to someone new"] },
            { title: "Attaching a file", bullets: ["Press the paper clip icon", "Choose the photo or document", "Wait for it to finish loading, then send"] },
            { title: "Be careful", bullets: ["Open only attachments you expect", "Files from strangers can carry harmful programs"] }
          ],
          tryIt: "Reply to the practice email from Lesson 2. Then write a new email to yourself, attach one photo or document, and send it. Open it and check that the file arrived.",
          youCanNow: "reply to an email, forward one, and send a file as an attachment."
        }
      ],
      check: {
        title: "Knowledge Check 1: Email basics",
        questions: [
          { q: "Which email address is best to use for job applications?", options: ["coolcat99@gmail.com", "maria.lopez@gmail.com", "partytime@yahoo.com", "xx123xx@outlook.com"], answer: 1, why: "An address with your first and last name looks professional." },
          { q: "Why add a phone number to your email account?", options: ["So the company can call you every day", "So you can get back in if you forget your password", "It makes the email faster", "It is needed to send photos"], answer: 1, why: "A recovery phone number lets you get a code to get back in." },
          { q: "What does the subject line do?", options: ["Tells the reader what the email is about", "Holds the attached file", "Shows your password", "Deletes old emails"], answer: 0, why: "It tells the reader the topic before they open the email." },
          { q: "You got an email sent to 30 people. Only the sender needs your answer. Which button do you press?", options: ["Forward", "Reply all", "Delete", "Reply"], answer: 3, why: "Reply sends your answer only to the person who wrote." },
          { q: "How do you send a photo with an email?", options: ["Type the photo's name in the subject", "Press the paper clip icon and choose the photo", "Paste your password", "Press Reply all"], answer: 1, why: "The paper clip icon adds an attachment." }
        ]
      }
    },
    {
      name: "Chapter 2: Staying safe and talking online",
      lessons: [
        {
          title: "Spotting phishing and scam emails",
          minutes: 5,
          goal: "Check an email for warning signs before you click anything.",
          text: [
            "Phishing is a fake message that pretends to be from a bank, a store, a delivery company or a government office, to trick you into clicking a link or giving private information.",
            "The Federal Trade Commission (FTC) lists common signs: the message pretends to be from an organization you know, says there is a problem or a prize, pushes you to act right away, and asks you to pay in an unusual way such as gift cards, wire transfers, payment apps or cryptocurrency.",
            "Also look at the sender's real address: \"support@amaz0n-help.win\" is not Amazon. When in doubt, do not click. Go to the company's website yourself, or call a number you already know is real. In the United States you can report scams at reportfraud.ftc.gov."
          ],
          steps: ["Look at the sender's full address, not just the name.", "Ask: Does it pretend to be someone I know? Is there a problem or a prize? Am I being rushed? Do they want gift cards or a wire transfer?", "If yes to any, do not click links or open files.", "Check by going to the real website yourself or calling a known number.", "Delete it or mark it as spam. In the US, report it at reportfraud.ftc.gov."],
          words: [["Phishing", "a fake message made to trick you into clicking a link or giving private information."], ["Spam", "unwanted junk email."], ["FTC", "the Federal Trade Commission, the US government office that handles scam reports."]],
          slides: [
            { title: "What phishing is", bullets: ["A fake email that pretends to be a bank, store or office", "It wants you to click, pay or share private details"] },
            { title: "Four warning signs (FTC)", bullets: ["Pretends to be someone you know", "A problem or a prize", "Pressure to act right now", "Pay by gift card, wire, payment app or crypto"] },
            { title: "Check the sender", bullets: ["Look at the full address", "\"amaz0n-help.win\" is not Amazon"] },
            { title: "When in doubt", bullets: ["Do not click", "Go to the real website or call a known number", "Report at reportfraud.ftc.gov"] }
          ],
          sources: [{ name: "FTC: How to avoid a scam", url: "https://consumer.ftc.gov/articles/how-avoid-scam" }, { name: "FTC: Report fraud", url: "https://reportfraud.ftc.gov/" }],
          tryIt: "Open your spam or junk folder and pick one message. Find at least two warning signs in it. Do not click any links. Then delete it.",
          youCanNow: "check an email for the four warning signs and the sender's real address before you click."
        },
        {
          title: "Good manners online",
          minutes: 4,
          goal: "Write a polite, clear message that gets a good response.",
          text: [
            "People cannot hear your voice in a written message, so words can sound harsher than you mean. ALL CAPITAL LETTERS reads like shouting.",
            "Be polite and short. Use a greeting and \"please\" and \"thank you\". Answer important emails within a day or two, even if only to say \"I got this and will reply by Friday\".",
            "Before you send a message when you are upset, wait a little and read it again. Do not put private information like your Social Security number, bank numbers or passwords in an email or chat message."
          ],
          steps: ["Start with a greeting.", "Say what you need in short sentences.", "Use normal capital letters, not ALL CAPS.", "Say please and thank you.", "If you are upset, wait and reread before sending.", "Leave out private numbers and passwords."],
          words: [["Netiquette", "good manners for messages and posts online."], ["ALL CAPS", "writing in all capital letters, which reads like shouting."]],
          slides: [
            { title: "Words without a voice", bullets: ["Messages can sound harsher than you mean", "ALL CAPS reads like shouting"] },
            { title: "Polite and clear", bullets: ["Greeting, please and thank you", "Short sentences", "Answer within a day or two"] },
            { title: "Before you send", bullets: ["Upset? Wait and reread", "No private numbers or passwords"] }
          ],
          tryIt: "Write a short, polite email to a landlord, school, clinic or employer (you do not have to send it) asking a question. Read it out loud: does it sound friendly and clear?",
          youCanNow: "write a polite, clear message and avoid habits that cause trouble online."
        },
        {
          title: "Joining a video call",
          minutes: 5,
          goal: "Join a video call from a link and use mute and camera buttons.",
          text: [
            "Many doctors, employers, schools and families use video calls. Common free ones are Zoom, Google Meet, Microsoft Teams, and FaceTime on Apple devices. Usually someone sends you a link by email or text.",
            "Tap or click the link a few minutes early. On a phone it may ask you to install the app from the official app store. When asked, allow the microphone and camera.",
            "Learn two buttons: the microphone (mute and unmute) and the camera (on and off). Sit facing a light, in a quiet place, and mute yourself when you are not talking."
          ],
          steps: ["Find the link in the email or text from someone you know.", "Join five minutes early.", "If asked, install the official app or open it in the browser.", "Allow the microphone and camera.", "Find the mute and camera buttons.", "Face a light, find a quiet spot, and mute when not talking.", "Press Leave or the red button to hang up."],
          words: [["Video call", "a call where you can see and hear each other on a screen."], ["Mute", "turns your microphone off so others cannot hear you."], ["Meeting link", "a web address that takes you straight into a video call."]],
          slides: [
            { title: "Common video call apps", bullets: ["Zoom, Google Meet, Microsoft Teams", "FaceTime on Apple devices", "You usually get a link by email or text"] },
            { title: "Joining", bullets: ["Click the link a few minutes early", "Allow the microphone and camera"] },
            { title: "Two buttons to know", bullets: ["Microphone: mute and unmute", "Camera: on and off", "Red button or Leave: hang up"] },
            { title: "Look and sound good", bullets: ["Face a light", "Quiet place", "Mute when you are not talking"] }
          ],
          tryIt: "Final task practice: ask a friend or family member to send you a video call link (or start a Google Meet or Zoom call yourself). Join it, mute and unmute, turn the camera off and on, then leave the call.",
          youCanNow: "join a video call from a link, use the mute and camera buttons, and leave the call."
        }
      ],
      check: {
        title: "Knowledge Check 2: Staying safe and talking online",
        questions: [
          { q: "An email says your bank account is locked and you must click a link in the next hour. What do you do?", options: ["Click the link fast", "Reply with your account number", "Go to the bank's real website yourself or call a known number", "Forward it to all your friends"], answer: 2, why: "Pressure and a problem are scam signs; check through a route you already trust." },
          { q: "Which payment request is a warning sign of a scam?", options: ["Paying a bill on your bank's own website", "Paying with gift cards", "Paying a store at the register", "Paying a doctor at the front desk"], answer: 1, why: "The FTC lists gift cards as an unusual payment scammers ask for." },
          { q: "What does writing in ALL CAPS seem like to the reader?", options: ["Shouting", "Being polite", "Being quiet", "Being funny"], answer: 0, why: "All capital letters reads like shouting." },
          { q: "During a video call you are not talking and there is noise at home. What should you do?", options: ["Leave the call", "Turn up the volume", "Turn off the camera only", "Mute your microphone"], answer: 3, why: "Muting stops others hearing background noise." },
          { q: "Where can people in the US report a scam?", options: ["reportfraud.ftc.gov", "The scammer's email", "A social media comment", "freehelp.win"], answer: 0, why: "The FTC takes scam reports at reportfraud.ftc.gov." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Email and Online Communication",
    questions: [
      { q: "In the address maria@gmail.com, what does gmail.com tell you?", options: ["Maria's password", "The company that runs the email", "Maria's phone number", "Maria's home town"], answer: 1, why: "The part after the @ is the email company." },
      { q: "Which is a free email service?", options: ["Outlook.com", "A printer", "A text message", "A web browser"], answer: 0, why: "Outlook.com, Gmail and Yahoo Mail are free email services." },
      { q: "A strong email password is:", options: ["Your birthday", "\"password\"", "The same one you use everywhere", "Long and used nowhere else"], answer: 3, why: "A long, unique password is hardest to guess or steal." },
      { q: "Which button starts a new email?", options: ["Compose or New message", "Delete", "Spam", "Archive"], answer: 0, why: "Compose starts a new email." },
      { q: "Which is the best subject line for asking about a job?", options: ["\"hi\"", "No subject", "\"read this\"", "\"Application for the cashier job\""], answer: 3, why: "It tells the reader exactly what the email is about." },
      { q: "Before pressing Send, you should:", options: ["Add your bank number", "Remove the greeting", "Write it in all caps", "Check the \"To\" address and read the email once"], answer: 3, why: "You cannot take an email back, so check it first." },
      { q: "Which part comes at the end of an email?", options: ["The subject line", "The \"To\" address", "A sign-off with your name", "The paper clip"], answer: 2, why: "A sign-off like \"Thank you, Ana\" closes the email." },
      { q: "Forward means:", options: ["Answer the sender only", "Delete the email", "Send the email on to someone new", "Mark it as spam"], answer: 2, why: "Forward sends an email you got to another person." },
      { q: "The paper clip icon is used to:", options: ["Attach a file", "Change the font", "Block a sender", "Print the email"], answer: 0, why: "The paper clip adds an attachment." },
      { q: "A stranger emails you a file you were not expecting. You should:", options: ["Open it right away", "Forward it to friends", "Not open it", "Reply with your password"], answer: 2, why: "Unexpected files from strangers can carry harmful programs." },
      { q: "Reply all should be used:", options: ["Always", "Only when everyone on the email needs your answer", "Never", "To send spam"], answer: 1, why: "Reply all reaches everyone, so use it only when they all need it." },
      { q: "Phishing is:", options: ["A fake message trying to trick you", "A kind of attachment", "A video call app", "A strong password"], answer: 0, why: "Phishing messages pretend to be real to steal information or money." },
      { q: "The sender's name says \"Amazon\" but the address is support@amaz0n-help.win. This is:", options: ["Normal", "A video call link", "Amazon's main address", "A warning sign"], answer: 3, why: "The real sender address does not match the company." },
      { q: "Which is one of the FTC's four signs of a scam?", options: ["The message is short", "Pressure to act immediately", "It has a greeting", "It is from a friend you called"], answer: 1, why: "Scammers rush you so you do not stop and think." },
      { q: "You are not sure an email from your bank is real. The safest step is:", options: ["Click its link to check", "Reply and ask", "Go to the bank's website yourself or call the number on your card", "Send your account number"], answer: 2, why: "Use a route you already know is real, not the email's link." },
      { q: "You are upset and wrote an angry email. Good manners say:", options: ["Send it in all caps", "Wait and reread before sending", "Send it to everyone", "Add your bank number"], answer: 1, why: "Waiting helps you send a calmer, clearer message." },
      { q: "Which should you never put in an email?", options: ["\"Thank you\"", "A greeting", "Your Social Security number", "A subject line"], answer: 2, why: "Private numbers in email can be stolen." },
      { q: "Which is a common video call app?", options: ["Zoom", "Calculator", "Notepad", "Camera roll"], answer: 0, why: "Zoom, Google Meet, Teams and FaceTime are video call apps." },
      { q: "When joining a video call, a good habit is to:", options: ["Join 20 minutes late", "Sit with a bright window behind you", "Join a few minutes early and face a light", "Keep the TV loud"], answer: 2, why: "Joining early and facing a light helps the call go well." },
      { q: "On a video call, the microphone button lets you:", options: ["Take a photo", "Send a file", "End the internet", "Mute and unmute yourself"], answer: 3, why: "The microphone button turns your sound off and on." }
    ]
  }
};
