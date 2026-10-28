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
  chapters: [
    {
      name: "Chapter 1: Setting up to work remotely",
      lessons: [
        {
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
          youCanNow: "set up a safe, workable home workspace."
        },
        {
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
          youCanNow: "join and take part in a video call professionally and fix common problems."
        },
        {
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
          youCanNow: "write clear, short work messages with AI help."
        }
      ],
      check: {
        title: "Knowledge Check 1: Setting up to work remotely",
        questions: [
          { q: "Where should light be for video calls?", options: ["Behind you", "Nowhere", "In front of you", "Under the table"], answer: 2, why: "Light in front makes your face visible." },
          { q: "What should you do when stepping away from your work computer?", options: ["Lock the screen", "Leave it open", "Post your password", "Turn off the internet"], answer: 0, why: "Locking the screen protects work data." },
          { q: "When should you join a video meeting?", options: ["Ten minutes late", "Only if reminded twice", "Never", "Two or three minutes early"], answer: 3, why: "Joining early gives time to fix problems." },
          { q: "Others cannot hear you on a call. What do you check first?", options: ["Your email inbox", "That you are unmuted and the right microphone is selected", "Your screen brightness", "The weather"], answer: 1, why: "Mute and device settings cause most audio problems." },
          { q: "What is a good status update?", options: ["A long story about your weekend", "What I did, what is next, and anything blocking me", "Nothing", "Only emojis"], answer: 1, why: "Status updates keep the team informed." }
        ]
      }
    },
    {
      name: "Chapter 2: Working well and finding remote jobs",
      lessons: [
        {
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
          youCanNow: "collaborate in a shared document with comments, suggestions and version history."
        },
        {
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
          youCanNow: "plan and manage a remote workday with time blocks."
        },
        {
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
          youCanNow: "get set up, communicate, collaborate and manage time for remote work, and find real remote jobs safely."
        }
      ],
      check: {
        title: "Knowledge Check 2: Working well and finding remote jobs",
        questions: [
          { q: "In Google Docs, which mode lets your edits show as suggestions for others to accept?", options: ["Delete mode", "Print mode", "Night mode", "Suggesting mode"], answer: 3, why: "Suggesting mode shows edits for approval." },
          { q: "What does version history let you do?", options: ["See or restore earlier versions of a file", "Delete the file forever", "Share passwords", "Change your name"], answer: 0, why: "It keeps a record of earlier versions." },
          { q: "What is time-blocking?", options: ["Blocking websites", "Turning off the clock", "Planning your day in blocks for specific tasks", "Working without breaks"], answer: 2, why: "Blocks keep focused work protected." },
          { q: "A \"remote job\" asks you to buy a $200 starter kit before you begin. According to the FTC, this is:", options: ["Normal hiring", "A tax", "A benefit", "A warning sign of a scam"], answer: 3, why: "Honest employers do not charge you to get a job." },
          { q: "A recruiter emails from a free email address and wants to interview only by text chat. You should:", options: ["Send your bank details", "Pay a fee", "Look up the company yourself and be cautious", "Ignore all jobs forever"], answer: 2, why: "These are common signs of a fake job." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Remote Work Skills with AI",
    questions: [
      { q: "Remote work means:", options: ["Working only at night", "Doing your job from outside the employer's office", "Unpaid work", "Using a TV remote"], answer: 1, why: "It is work done from home or elsewhere." },
      { q: "Which item is most important for video calls?", options: ["A headset or earbuds with a microphone", "A fancy chair", "A second TV", "A printer"], answer: 0, why: "Clear audio matters most on calls." },
      { q: "How can you check if your internet is fast enough?", options: ["Guess", "Ask the AI", "Run a free internet speed test", "Count your apps"], answer: 2, why: "A speed test measures it." },
      { q: "Which keeps your work account safe?", options: ["Two-step sign-in", "Sharing your password with family", "Writing it on the screen", "Turning off updates"], answer: 0, why: "Two-step sign-in blocks most attacks." },
      { q: "How do you usually join a work video call?", options: ["Call a random number", "Wait for someone to visit", "Mail a letter", "Click the link in the email or calendar invite"], answer: 3, why: "Invites include a meeting link." },
      { q: "When you are not speaking on a call, you should usually:", options: ["Play music", "Stay muted", "Leave the call", "Turn up the volume"], answer: 1, why: "Muting avoids background noise." },
      { q: "Screen sharing means:", options: ["Breaking your screen", "Showing your computer screen to others on the call", "Buying a new screen", "Hiding your screen"], answer: 1, why: "It lets others see what you see." },
      { q: "The top skill in remote work is:", options: ["Typing in all capital letters", "Long phone calls", "Avoiding messages", "Clear writing"], answer: 3, why: "Most remote communication is written." },
      { q: "A clear work message:", options: ["Leads with the point and says what you need and by when", "Hides the main point at the end", "Is as long as possible", "Has no request"], answer: 0, why: "Clear messages get faster answers." },
      { q: "Which should never go into an AI tool your employer has not approved?", options: ["A practice message about being late", "General grammar questions", "Customer data", "A public holiday date"], answer: 2, why: "Customer data must be protected." },
      { q: "You will be late for your shift. Best action:", options: ["Say nothing", "Log in late without explaining", "Quit", "Send a short heads-up message before your start time"], answer: 3, why: "Early notice is professional." },
      { q: "A comment in a shared document:", options: ["Deletes the document", "Locks everyone out", "Adds a note without changing the text", "Prints it"], answer: 2, why: "Comments ask or suggest without editing." },
      { q: "In Word, the feature that shows your edits for others to review is:", options: ["Word Count", "Track Changes", "Spell Check", "Page Color"], answer: 1, why: "Track Changes records edits." },
      { q: "Before changing a document's sharing to \"anyone with the link\" you should:", options: ["Ask whoever owns it", "Just do it", "Post the link publicly", "Delete the document"], answer: 0, why: "Sharing settings protect information." },
      { q: "A regular stop time when working from home helps:", options: ["Nothing", "You work more hours unpaid", "Keep work and home life balanced", "Your internet speed"], answer: 2, why: "Boundaries prevent burnout." },
      { q: "If childcare is making work hard, the best step is:", options: ["Tell your manager early", "Hide it", "Stop logging in", "Fake your status updates"], answer: 0, why: "Managers can help if they know early." },
      { q: "Some remote jobs only hire people who:", options: ["Have no computer", "Never use email", "Work for free", "Live in certain states or countries"], answer: 3, why: "Check location rules in the job post." },
      { q: "A real company's recruiter usually emails from:", options: ["A random free email address", "The company's own domain", "A text-only app", "A social media DM only"], answer: 1, why: "Company domains are a sign of a real recruiter." },
      { q: "Being asked to reship packages from home is, per the FTC:", options: ["A normal remote job", "Part of a scam", "A government program", "Safe if it pays well"], answer: 1, why: "Reshipping jobs are a known scam." },
      { q: "Where do you report a job scam in the U.S.?", options: ["The scammer's email", "A comment section", "Nowhere", "ReportFraud.ftc.gov"], answer: 3, why: "The FTC collects fraud reports." }
    ]
  }
};
