"use strict";

// Koach Learn course (shared, bonus): "Remote Work Skills with AI". Categories: Re-Entry, Workforce Development, Undeserved Community. Shape and rules: ../README.md; model: ../re-entry/reentry-ai-digital-confidence.js.

module.exports = {
  id: "ai-remote-work",
  category: "Re-Entry",
  name: "Remote Work Skills with AI",
  skills: "Setting up a home workspace, Joining and running video calls, Writing clear work messages with AI, Working in shared documents, Managing your own time, Finding real remote jobs and avoiding scams",
  outcome: "set up to work from home, join a video call professionally, write clear updates and messages with AI help, collaborate in a shared document, plan your own workday, and tell a real remote job from a scam.",
  about: [
    "Many jobs now let people work from home some or all of the time: customer support, data entry, scheduling, virtual assistance, sales, tutoring and tech support. Remote work can open doors when transportation, childcare, disability or where you live makes commuting hard.",
    "Working remotely takes its own skills: clear writing, video calls, shared documents, managing your own time and staying safe online. AI assistants like ChatGPT, Microsoft Copilot and Google Gemini can help with much of it.",
    "This course is for people coming home, job seekers in workforce programs and community members without a nearby job market. Each lesson is about five minutes with a \"Try it now\" task. A knowledge check closes each chapter and a 20-question quiz closes the course."
  ],
  finalTask: "Build a remote work readiness kit: a photo or checklist of your workspace setup, a one-minute video call test recording or checklist, three work messages written with AI help (a status update, a question to a manager, and an \"I'm running late\" note), a shared document you edited with a comment and suggested change, a one-day time-block plan, and one real remote job post checked against the scam warning signs.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Adults coming home from prison (re-entry) who are interested in remote jobs such as customer service, data entry, admin support or call center work, often because of transport, schedule or family needs.",
    startingPoint: "Can make calls and send texts on a phone; some have an email account and have tried an AI assistant. Many have not used video meeting tools, workplace chat or shared documents, and may not have a computer or home internet yet.",
    gap: "Remote jobs can widen job options for people without a car or with family duties, but they require reliable tech, clear writing, self-managed time and the ability to spot the many work-from-home scams. Learners need these basic remote work skills to apply with confidence and keep a remote job.",
    constraints: [
      "Reading level: plain words and short sentences (about grade 5 to 6)",
      "Devices: may only have a phone or a library computer; many remote jobs need a computer and home internet",
      "Time: 5 minute lessons that fit around appointments and work",
      "Some parole or probation terms limit internet use; learners follow their own conditions",
      "High scam and privacy risk: no bank or Social Security numbers shared before a verified offer"
    ],
    prerequisites: "None. \"Introduction to AI and Digital Confidence\" is a helpful first course for learners new to AI."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "At home or in the place you plan to work", action: "set up a workspace and check your internet, headset and account security", standard: "with a speed test done, two-step sign-in on and a screen lock set" },
    { id: "O2", condition: "Given a meeting link", action: "join a video call and use mute, camera, chat and screen sharing", standard: "joining early and fixing a sound problem without help" },
    { id: "O3", condition: "Given a work situation", action: "write a short, clear work message with AI help", standard: "leading with the point, saying what you need and by when, with no customer data in unapproved AI tools" },
    { id: "O4", condition: "Given a shared document link", action: "add a comment, make a suggested change and open version history", standard: "without changing the sharing settings" },
    { id: "O5", condition: "Given a list of tasks for a workday", action: "create a time-block plan with start, break and stop times", standard: "that fits your real life and ends with a status update" },
    { id: "O6", condition: "Given a remote job post", action: "check whether the job is real or a work-from-home scam", standard: "using every warning sign before sharing any private numbers" }
  ],
  chapters: [
    {
      name: "Chapter 1: Setting up to work remotely",
      lessons: [
        {
          objectives: ["O1"],
          title: "Your home workspace and tech basics",
          minutes: 5,
          goal: "Set up a workspace and check that your tech is ready for remote work.",
          text: [
            "You need a reliable internet connection, a computer (many jobs do not allow phone-only work), a headset or earbuds with a microphone, and a quiet spot. A small table by a wall works. Good light in front of you, not behind, helps on camera.",
            "Check your internet with a free speed test before applying. If it is slow or you do not have home internet, ask your library, workforce program or internet provider about low-cost options; some programs change, so check what is available where you live.",
            "Protect work accounts like your own: strong passphrases, two-step sign-in, software updates, and no work on public computers unless your employer allows it. Lock your screen when you step away."
          ],
          steps: ["Choose a quiet spot with a table and good light in front of you.", "Get a headset or earbuds with a microphone.", "Run a free internet speed test.", "Turn on updates, two-step sign-in and a screen lock.", "Ask about low-cost internet if you need it."],
          words: [["Remote work", "doing your job from home or another place outside the employer's office."], ["Headset", "headphones with a microphone."], ["Bandwidth", "how much data your internet can carry; more is better for video."]],
          slides: [
            { title: "What you need", bullets: ["Reliable internet and a computer", "Headset with a microphone", "A quiet spot with a table"] },
            { title: "Look and sound good", bullets: ["Light in front of you, not behind", "Quiet background"] },
            { title: "Stay secure", bullets: ["Passphrases and two-step sign-in", "Updates on", "Lock your screen when you step away"] }
          ],
          tryIt: "Set up your workspace, run an internet speed test, and write a checklist of what you have and what you still need.",
          youCanNow: "set up a safe, workable home workspace.",
          quickCheck: [
            { objective: "O1", q: "Which item do many remote jobs require besides internet?", options: ["A tablet only", "A smartwatch", "A computer, not phone-only", "A printer"], answer: 2, why: "Many remote jobs do not allow phone-only work, so you need a computer." },
            { objective: "O1", q: "Your speed test shows slow internet and you want to apply for remote jobs. What do you do?", options: ["Ask your library, workforce program or internet provider about low-cost options", "Apply anyway and hope it works", "Use a stranger's Wi-Fi without asking", "Give up on remote work"], answer: 0, why: "Libraries, workforce programs and providers may know about low-cost internet options." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Joining and running video calls",
          minutes: 5,
          goal: "Join a video call professionally and handle common problems.",
          text: [
            "Most remote jobs use video tools like Zoom, Microsoft Teams or Google Meet. You usually join by clicking a link in an email or calendar invite. Join two or three minutes early to fix any problems.",
            "Know the basic controls: mute and unmute, turn the camera on and off, share your screen, and use the chat. Stay muted when you are not talking. Look at the camera when you speak, and use your name as your display name.",
            "If something breaks: check that the right microphone and speaker are selected in settings, leave and rejoin, or call in by phone if the invite has a number. Tell the host in the chat. Many tools also offer live captions and AI-made meeting summaries; follow your employer's rules about using them."
          ],
          steps: ["Click the meeting link two or three minutes early.", "Check your display name, camera and microphone.", "Stay muted when not speaking.", "Use the chat to say if you have problems.", "If audio fails, check device settings or rejoin."],
          words: [["Mute", "turn off your microphone so others cannot hear you."], ["Screen share", "show your computer screen to others on the call."], ["Captions", "words on screen showing what people say."]],
          slides: [
            { title: "Join right", bullets: ["Click the link 2-3 minutes early", "Use your real name", "Check camera and microphone"] },
            { title: "Basic controls", bullets: ["Mute and unmute", "Camera on and off", "Share screen and chat"] },
            { title: "When it breaks", bullets: ["Check device settings", "Leave and rejoin", "Tell the host in the chat"] }
          ],
          tryIt: "Start a free test meeting with a friend, family member or yourself in Zoom, Teams or Google Meet. Practice mute, camera, chat and screen share.",
          youCanNow: "join and take part in a video call professionally and fix common problems.",
          quickCheck: [
            { objective: "O2", q: "What does screen sharing do on a video call?", options: ["Mutes everyone", "Records the meeting", "Turns off your camera", "Shows your computer screen to others on the call"], answer: 3, why: "Screen sharing shows your screen to the other people on the call." },
            { objective: "O2", q: "Your audio stops working in a team meeting. What do you do?", options: ["Leave and say nothing", "Tell the host in the chat, check your device settings or rejoin", "Shout louder", "Turn off your computer"], answer: 1, why: "Use the chat to tell the host, then check settings, rejoin or call in by phone." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Writing clear work messages with AI",
          minutes: 5,
          goal: "Write short, clear, professional work messages with AI help.",
          text: [
            "In remote work, most communication is written: chat (like Teams or Slack) and email. Clear writing is the top remote skill. Lead with the point, keep it short, and say what you need and by when.",
            "AI can help: \"Turn this into a short, polite message to my manager: I finished the 40 customer records, 3 had missing phone numbers, should I call them or skip them?\" Then check it sounds like you and is not too formal.",
            "Useful message types: a daily status update (done, doing next, blocked), a clear question, and a heads-up when you are late or sick. Never paste customer data, passwords or company secrets into an AI tool your employer has not approved."
          ],
          steps: ["Start with the main point.", "Say what you need and by when.", "Ask AI to make it short and polite.", "Check it sounds like you.", "Keep customer and company data out of unapproved AI tools."],
          words: [["Status update", "a short message about what you did, what is next and any problems."], ["Chat app", "a work messaging tool like Microsoft Teams or Slack."]],
          slides: [
            { title: "Writing is the top remote skill", bullets: ["Lead with the point", "Short and clear", "What you need and by when"] },
            { title: "Three key messages", bullets: ["Status: done, next, blocked", "A clear question", "Late or sick heads-up"] },
            { title: "AI helps, safely", bullets: ["Make it short and polite", "Check it sounds like you", "No company data in unapproved tools"] }
          ],
          tryIt: "With AI help, write three messages: a status update, a question to a manager, and an \"I'm running 15 minutes late\" note. Edit each to sound like you.",
          youCanNow: "write clear, short work messages with AI help.",
          quickCheck: [
            { objective: "O3", q: "What three things go in a daily status update?", options: ["Your lunch, your mood and the weather", "What you did, what is next and anything blocking you", "Every email you read", "Your password and login time"], answer: 1, why: "A status update says what is done, what is next and what is blocked." },
            { objective: "O3", q: "You want AI to help write a message about a customer complaint. What do you leave out?", options: ["The main point", "What you need from your manager", "When you need an answer", "The customer's name and phone number"], answer: 3, why: "Never paste customer data into an AI tool your employer has not approved." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Setting up to work remotely",
        questions: [
          { objective: "O1", q: "Where should light be for video calls?", options: ["Behind you", "Nowhere", "In front of you", "Under the table"], answer: 2, why: "Light in front makes your face visible." },
          { objective: "O1", q: "What should you do when stepping away from your work computer?", options: ["Lock the screen", "Leave it open", "Post your password", "Turn off the internet"], answer: 0, why: "Locking the screen protects work data." },
          { objective: "O2", q: "When should you join a video meeting?", options: ["Ten minutes late", "Only if reminded twice", "Never", "Two or three minutes early"], answer: 3, why: "Joining early gives time to fix problems." },
          { objective: "O2", q: "Others cannot hear you on a call. What do you check first?", options: ["Your email inbox", "That you are unmuted and the right microphone is selected", "Your screen brightness", "The weather"], answer: 1, why: "Mute and device settings cause most audio problems." },
          { objective: "O3", q: "What is a good status update?", options: ["A long story about your weekend", "What I did, what is next, and anything blocking me", "Nothing", "Only emojis"], answer: 1, why: "Status updates keep the team informed." }
        ]
      }
    },
    {
      name: "Chapter 2: Working well and finding remote jobs",
      lessons: [
        {
          objectives: ["O4"],
          title: "Working in shared documents",
          minutes: 5,
          goal: "Edit, comment and suggest changes in a shared document.",
          text: [
            "Remote teams work in the same document at once using Google Docs, Google Sheets or Microsoft 365 (Word, Excel) online. You open it from a shared link and can see others' changes as they type.",
            "Learn three moves. Comment: highlight text and add a comment to ask or suggest without changing it. Suggest: Google Docs has Suggesting mode and Word has Track Changes, so your edits show for others to accept. Version history lets you see or restore earlier versions.",
            "Be careful with sharing settings: share only with the people who need it, and do not change \"anyone with the link\" settings without asking. Many tools have built-in AI (such as Gemini in Google Workspace or Copilot in Microsoft 365) if your employer turns it on."
          ],
          steps: ["Open the shared document from its link.", "Highlight text and add a comment.", "Turn on Suggesting mode (Google Docs) or Track Changes (Word) and make an edit.", "Open version history to see earlier versions.", "Check sharing settings before sharing further."],
          words: [["Shared document", "a file several people can open and edit online."], ["Comment", "a note attached to part of a document."], ["Version history", "a record of earlier versions of a file that you can view or restore."]],
          slides: [
            { title: "Work together online", bullets: ["Google Docs and Sheets", "Microsoft 365 Word and Excel online", "See changes as others type"] },
            { title: "Three moves", bullets: ["Comment", "Suggest or Track Changes", "Version history"] },
            { title: "Share carefully", bullets: ["Only people who need it", "Ask before changing link settings"] }
          ],
          tryIt: "Create a Google Doc or Word online document, share it with someone you trust, and practice a comment, a suggested edit and viewing version history together.",
          youCanNow: "collaborate in a shared document with comments, suggestions and version history.",
          quickCheck: [
            { objective: "O4", q: "What does Track Changes do in Word?", options: ["Shows your edits so others can review and accept them", "Deletes old versions", "Shares the file with everyone", "Counts the words"], answer: 0, why: "Track Changes shows edits for others to accept, like Suggesting mode in Google Docs." },
            { objective: "O4", q: "A teammate asks you to share the team document with a friend outside the company. What do you do?", options: ["Change it to \"anyone with the link\"", "Send the link right away", "Check with the document's owner before sharing further", "Copy the whole document into an email"], answer: 2, why: "Share only with people who need it, and ask before changing sharing settings." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Managing your own time",
          minutes: 5,
          goal: "Plan a remote workday with time blocks and clear start and stop times.",
          text: [
            "At home, nobody walks by your desk. You manage your own time. Set a regular start time, breaks and a stop time, and tell the people you live with when you are working.",
            "Time-blocking helps: divide the day into blocks for focused work, messages, meetings and breaks. Ask AI: \"Make a time-block plan for my workday from 9 to 5 with a 30-minute lunch. Tasks: [list]. Put focused work in the morning and check messages at set times.\"",
            "Track what you finish. At the end of the day, write a short status update. If you are struggling with distractions, childcare or health, tell your manager early; many have options if they know."
          ],
          steps: ["Set start, break and stop times.", "List today's tasks.", "Ask AI for a time-block plan.", "Adjust it to your real life.", "End the day with a short status update."],
          words: [["Time-blocking", "planning your day in blocks of time for specific tasks."], ["Focused work", "work done without interruptions."]],
          slides: [
            { title: "You manage your time", bullets: ["Regular start, breaks and stop", "Tell your household your hours"] },
            { title: "Time-blocking", bullets: ["Focused work, messages, meetings, breaks", "AI can draft the plan"] },
            { title: "Stay on track", bullets: ["End-of-day status update", "Tell your manager early about problems"] }
          ],
          tryIt: "Ask AI for a time-block plan for a real or practice workday, adjust it, and follow it for at least half a day. Write a short end-of-day update.",
          youCanNow: "plan and manage a remote workday with time blocks.",
          quickCheck: [
            { objective: "O5", q: "What is a time block?", options: ["A broken computer", "A meeting you skip", "A set part of the day for one kind of task", "A type of password"], answer: 2, why: "Time-blocking divides the day into blocks for focused work, messages, meetings and breaks." },
            { objective: "O5", q: "AI's time-block plan puts focused work at 3 pm, when your kids get home from school. What do you do?", options: ["Move focused work to a quieter time that fits your real life", "Follow it exactly", "Skip focused work", "Work until midnight instead"], answer: 0, why: "Adjust the AI plan to your real life." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Finding real remote jobs and avoiding scams",
          minutes: 6,
          goal: "Search for remote jobs on trusted sources and spot work-from-home scams.",
          text: [
            "Search trusted places: company career pages, well-known job sites, your state's job bank and your local American Job Center. Use the filter for \"remote\" and read where the job allows you to live; some remote jobs are only for certain states or countries.",
            "Work-from-home scams are common. The FTC warns about promises of big pay for little work, being asked to pay for starter kits, training or certifications, being sent a check to deposit and send part back, and reshipping packages. Honest employers do not charge you to get a job.",
            "Check before you share: look up the company yourself, make sure the email comes from the company's real domain (not a free email address), and be wary of interviews done only by text chat. Do not give bank or Social Security numbers until you have a verified offer. Report scams at ReportFraud.ftc.gov."
          ],
          steps: ["Search trusted job sources with the remote filter.", "Check where the job allows you to live.", "Look up the company on your own.", "Watch for fees, checks to deposit, reshipping and text-only interviews.", "Share private numbers only after a verified offer."],
          words: [["Work-from-home scam", "a fake remote job meant to steal money or information."], ["Domain", "the part of an email or web address after the @ or www, like company.com."]],
          slides: [
            { title: "Where to look", bullets: ["Company career pages and known job sites", "State job bank and American Job Centers", "Check where the job allows you to live"] },
            { title: "Scam signs (FTC)", bullets: ["Big pay for little work", "Pay for kits, training or certificates", "Deposit a check and send money back"] },
            { title: "Check before you share", bullets: ["Look up the company yourself", "Real company email domain", "Private numbers only after a verified offer"] }
          ],
          sources: [{ name: "FTC: Job scams", url: "https://consumer.ftc.gov/articles/job-scams" }, { name: "ReportFraud.ftc.gov", url: "https://reportfraud.ftc.gov/" }],
          tryIt: "Final task: find one real remote job post, check it against the scam signs, and save it. Add it to your workspace checklist, video call test, three messages, shared-document practice and time-block plan to finish your remote work readiness kit.",
          youCanNow: "get set up, communicate, collaborate and manage time for remote work, and find real remote jobs safely.",
          quickCheck: [
            { objective: "O6", q: "Which is a warning sign of a work-from-home scam?", options: ["The job post lists where you can live", "The recruiter emails from the company's own domain", "The company has a career page", "You must pay for a starter kit before you begin"], answer: 3, why: "Honest employers do not charge you to get a job." },
            { objective: "O6", q: "A \"company\" offers a remote job after a text-only interview and asks for your bank number now. What do you do?", options: ["Send it to get paid faster", "Do not share it; look up the company yourself and report it if it is a scam", "Send your Social Security number instead", "Ask them to text you a check"], answer: 1, why: "Text-only interviews and early requests for bank numbers are warning signs; share private numbers only after a verified offer." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Working well and finding remote jobs",
        questions: [
          { objective: "O4", q: "In Google Docs, which mode lets your edits show as suggestions for others to accept?", options: ["Delete mode", "Print mode", "Night mode", "Suggesting mode"], answer: 3, why: "Suggesting mode shows edits for approval." },
          { objective: "O4", q: "What does version history let you do?", options: ["See or restore earlier versions of a file", "Delete the file forever", "Share passwords", "Change your name"], answer: 0, why: "It keeps a record of earlier versions." },
          { objective: "O5", q: "What is time-blocking?", options: ["Blocking websites", "Turning off the clock", "Planning your day in blocks for specific tasks", "Working without breaks"], answer: 2, why: "Blocks keep focused work protected." },
          { objective: "O6", q: "A \"remote job\" asks you to buy a $200 starter kit before you begin. According to the FTC, this is:", options: ["Normal hiring", "A tax", "A benefit", "A warning sign of a scam"], answer: 3, why: "Honest employers do not charge you to get a job." },
          { objective: "O6", q: "A recruiter emails from a free email address and wants to interview only by text chat. You should:", options: ["Send your bank details", "Pay a fee", "Look up the company yourself and be cautious", "Ignore all jobs forever"], answer: 2, why: "These are common signs of a fake job." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Remote Work Skills with AI",
    questions: [
      { objective: "O1", q: "Remote work means:", options: ["Working only at night", "Doing your job from outside the employer's office", "Unpaid work", "Using a TV remote"], answer: 1, why: "It is work done from home or elsewhere." },
      { objective: "O1", q: "Which item is most important for video calls?", options: ["A headset or earbuds with a microphone", "A fancy chair", "A second TV", "A printer"], answer: 0, why: "Clear audio matters most on calls." },
      { objective: "O1", q: "How can you check if your internet is fast enough?", options: ["Guess", "Ask the AI", "Run a free internet speed test", "Count your apps"], answer: 2, why: "A speed test measures it." },
      { objective: "O1", q: "Which keeps your work account safe?", options: ["Two-step sign-in", "Sharing your password with family", "Writing it on the screen", "Turning off updates"], answer: 0, why: "Two-step sign-in blocks most attacks." },
      { objective: "O2", q: "How do you usually join a work video call?", options: ["Call a random number", "Wait for someone to visit", "Mail a letter", "Click the link in the email or calendar invite"], answer: 3, why: "Invites include a meeting link." },
      { objective: "O2", q: "When you are not speaking on a call, you should usually:", options: ["Play music", "Stay muted", "Leave the call", "Turn up the volume"], answer: 1, why: "Muting avoids background noise." },
      { objective: "O2", q: "Screen sharing means:", options: ["Breaking your screen", "Showing your computer screen to others on the call", "Buying a new screen", "Hiding your screen"], answer: 1, why: "It lets others see what you see." },
      { objective: "O3", q: "The top skill in remote work is:", options: ["Typing in all capital letters", "Long phone calls", "Avoiding messages", "Clear writing"], answer: 3, why: "Most remote communication is written." },
      { objective: "O3", q: "A clear work message:", options: ["Leads with the point and says what you need and by when", "Hides the main point at the end", "Is as long as possible", "Has no request"], answer: 0, why: "Clear messages get faster answers." },
      { objective: "O3", q: "Which should never go into an AI tool your employer has not approved?", options: ["A practice message about being late", "General grammar questions", "Customer data", "A public holiday date"], answer: 2, why: "Customer data must be protected." },
      { objective: "O3", q: "You will be late for your shift. Best action:", options: ["Say nothing", "Log in late without explaining", "Quit", "Send a short heads-up message before your start time"], answer: 3, why: "Early notice is professional." },
      { objective: "O4", q: "A comment in a shared document:", options: ["Deletes the document", "Locks everyone out", "Adds a note without changing the text", "Prints it"], answer: 2, why: "Comments ask or suggest without editing." },
      { objective: "O4", q: "In Word, the feature that shows your edits for others to review is:", options: ["Word Count", "Track Changes", "Spell Check", "Page Color"], answer: 1, why: "Track Changes records edits." },
      { objective: "O4", q: "Before changing a document's sharing to \"anyone with the link\" you should:", options: ["Ask whoever owns it", "Just do it", "Post the link publicly", "Delete the document"], answer: 0, why: "Sharing settings protect information." },
      { objective: "O5", q: "A regular stop time when working from home helps:", options: ["Nothing", "You work more hours unpaid", "Keep work and home life balanced", "Your internet speed"], answer: 2, why: "Boundaries prevent burnout." },
      { objective: "O5", q: "If childcare is making work hard, the best step is:", options: ["Tell your manager early", "Hide it", "Stop logging in", "Fake your status updates"], answer: 0, why: "Managers can help if they know early." },
      { objective: "O6", q: "Some remote jobs only hire people who:", options: ["Have no computer", "Never use email", "Work for free", "Live in certain states or countries"], answer: 3, why: "Check location rules in the job post." },
      { objective: "O6", q: "A real company's recruiter usually emails from:", options: ["A random free email address", "The company's own domain", "A text-only app", "A social media DM only"], answer: 1, why: "Company domains are a sign of a real recruiter." },
      { objective: "O6", q: "Being asked to reship packages from home is, per the FTC:", options: ["A normal remote job", "Part of a scam", "A government program", "Safe if it pays well"], answer: 1, why: "Reshipping jobs are a known scam." },
      { objective: "O6", q: "Where do you report a job scam in the U.S.?", options: ["The scammer's email", "A comment section", "Nowhere", "ReportFraud.ftc.gov"], answer: 3, why: "The FTC collects fraud reports." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Pre-Test: What Do You Already Know?",
    from: [
      1,
      3,
      5,
      6,
      8,
      9,
      11,
      12,
      14,
      17
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      {
        name: "Workspace and tech",
        objective: "O1",
        notYet: "No speed test, or two-step sign-in or screen lock is off.",
        meets: "A workspace photo or checklist with a speed test, headset, two-step sign-in and screen lock.",
        exceeds: "Light is in front of the learner and a backup plan exists if the internet fails."
      },
      {
        name: "Video call ready",
        objective: "O2",
        notYet: "The call test was not done, or mute and camera controls were not found.",
        meets: "A one-minute call test or checklist showing display name, mute, camera and chat.",
        exceeds: "Also practiced screen sharing and fixing a sound problem."
      },
      {
        name: "Work messages",
        objective: "O3",
        notYet: "Fewer than three messages, or a message buries the point or includes private data.",
        meets: "A status update, a question to a manager and a late note, each short and leading with the point.",
        exceeds: "Each says what is needed and by when, and sounds like the learner."
      },
      {
        name: "Shared document",
        objective: "O4",
        notYet: "No comment or suggested change in the document.",
        meets: "A comment and a suggested change in a shared document.",
        exceeds: "Also opened version history and left the sharing settings unchanged."
      },
      {
        name: "Time-block plan",
        objective: "O5",
        notYet: "No start, break or stop times.",
        meets: "A one-day plan with start, break and stop times and blocks for tasks.",
        exceeds: "Fits the learner's real life and ends with a status update."
      },
      {
        name: "Job post checked",
        objective: "O6",
        notYet: "The job post was not checked for scam signs.",
        meets: "One real remote job post checked against the warning signs, with the company looked up.",
        exceeds: "Also notes where the job allows people to live and the email domain used."
      }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Learners who apply for at least one remote job within 30 days (follow-up survey)",
      "Learners who get a remote job or remote interview within 90 days",
      "Learners who report spotting and avoiding a work-from-home scam"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A computer with internet (a library or program computer works for practice)",
      "A headset or earbuds with a microphone",
      "Free accounts for a video tool (Zoom, Teams or Google Meet) and Google Docs or Microsoft 365 online",
      "A free AI assistant (ChatGPT, Microsoft Copilot or Google Gemini)",
      "About 60 minutes in total, in short sessions: lessons, practice, checks and the final task"
    ],
    facilitatorNotes: [
      "Take the pre-test together, then do one chapter per session; hold a real practice video call so everyone joins, mutes and shares a screen.",
      "Set up one shared practice document so learners can comment and suggest changes on each other's work.",
      "Show real examples of work-from-home scam posts and have the group find the warning signs.",
      "Remind learners on parole or probation to follow any conditions about internet use, and to check that remote work fits them.",
      "Score the final kit with the rubric, and give feedback on one Not yet row at a time."
    ]
  }
};
