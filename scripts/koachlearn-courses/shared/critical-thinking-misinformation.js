"use strict";

// Koach Learn course: shared -> "Critical Thinking and Spotting Misinformation" (new life skills course the owner asked for on 28 October 2026). Listed for Seniors and Technology, Re-Entry,
// Non Profits, Youth, Workforce Development, Undeserved Community, Artificial Intelligence and Leadership Development, so it uses mixed, everyday examples: family group chats, social media,
// health claims, job and money offers, AI-made pictures and voices.
// Two chapters of three micro-lessons; a knowledge check closes each chapter; a 20-question quiz closes the course. See scripts/koachlearn-export.js for how it is built.
// Facts that can change (Google image search steps, FTC scam advice and reporting site, lateral-reading lessons) were checked on 28 October 2026 and are in each lesson's sources.
//
// lesson: { title, minutes, goal, text: [paragraph], steps: [step] (optional), words: [[term, means]], slides: [{ title, bullets }], sources, tryIt, youCanNow }
// question: { q, options: [4], answer: index of the right option, why }

module.exports = {
  id: "critical-thinking-misinformation",
  category: "Seniors and Technology",
  name: "Critical Thinking and Spotting Misinformation",
  skills: "Pausing before you believe or share, Lateral reading, Checking a source, Reverse image search, Spotting AI fakes and deepfakes, Catching your own bias",
  outcome: "check a post, picture, video or message before you believe or share it: pause, read sideways to check the source, trace a picture with a reverse image search, spot signs of AI fakes and scams, and notice when your own feelings are steering you.",
  about: [
    "Every day we see posts, videos, forwarded messages and headlines. Some are true, some are mistakes, and some are made up on purpose to make money, sell something, scare us or divide us. AI tools now make fake pictures, videos and voices easy to create. Knowing how to check is a life skill for everyone.",
    "This course is for everyone: seniors who get forwarded messages from family, young people on social media, nonprofit staff who share news with supporters, workers and job seekers, and people coming home who are catching up on what has changed online. You do not need to be an expert. You need a few quick habits.",
    "You will learn to stop before you share, read sideways to check a source, run a reverse image search, spot AI fakes and fake-news scams, and catch your own bias. Each lesson takes about five minutes and ends with a practice on a real post. There is a knowledge check after each chapter and a 20-question quiz at the end."
  ],
  finalTask: "Find a real post, picture or forwarded message that surprised you or made you feel strongly. Check it with the steps from this course: pause, read sideways about the source, look for other trusted coverage, reverse-search any picture, and look for scam signs. Write a three-sentence verdict (true, false, misleading or not sure yet) with the evidence, and decide whether to share it.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Everyone who sees posts and messages: seniors who get forwarded messages from family, young people on social media, nonprofit staff who share news, workers and job seekers, and people coming home who are catching up on what has changed online.",
    startingPoint: "Use a phone or computer to read posts, watch videos and share messages. Most have never checked a source by reading other sites, run a reverse image search, or used a family code word against voice scams.",
    gap: "False posts, AI fakes and scams spread fast and cost people money, health and trust. Learners need a few quick checking habits so they can decide what to believe and share, protect their families from scams, and notice when their own feelings are steering them.",
    constraints: [
      "Reading level: plain words and short sentences",
      "Devices: a phone or computer with a web browser",
      "Tool menus change; lessons describe the action when exact menu names may differ",
      "Health, money and legal claims are checked with official sources or a professional",
      "Privacy: learners do not share private family messages in class"
    ],
    prerequisites: "None. Learners new to phones or browsers can take \"Using a Smartphone and Tablet\" first."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "When a post makes you feel strongly", action: "pause and ask who made it, what the evidence is and what others say", standard: "before you believe or share it" },
    { id: "O2", condition: "Given a website or account", action: "check who is behind it by reading what other trusted sources say about it", standard: "finding at least two other sources before you decide" },
    { id: "O3", condition: "Given a dramatic picture", action: "run a reverse image search to find where and when it first appeared", standard: "writing down the oldest date you find and whether it matches the post" },
    { id: "O4", condition: "Given a video, picture or voice that might be made by AI", action: "check it against the person's official account and trusted news, and use a family code word for calls", standard: "without relying only on how it looks or sounds" },
    { id: "O5", condition: "Given an ad or post that promises money, a cure or a big deal", action: "list the scam warning signs and report it", standard: "finding every warning sign before you click, pay or sign up" },
    { id: "O6", condition: "After checking a surprising post", action: "write a short verdict with evidence and note how your own feelings or beliefs may have pulled you", standard: "in three sentences with a clear true, false, misleading or not sure yet" }
  ],
  chapters: [
    {
      name: "Chapter 1: Checking what you see",
      lessons: [
        {
          objectives: ["O1"],
          title: "Stop and check a claim",
          minutes: 5,
          goal: "Pause before you believe or share, and ask three quick questions.",
          text: [
            "False posts spread fastest when they make us feel something strong: anger, fear, pride or excitement. That feeling is your signal to stop. A few seconds of checking can stop you from passing on something false to people who trust you.",
            "Ask three questions. Who is behind this? (A real news outlet, a government office, a doctor, or an account you have never heard of?) What is the evidence? (A link to a study, a document, a video of the whole event, or just someone's say-so?) What do other trusted sources say? (Is anyone else reporting this?)",
            "A useful set of steps is called SIFT: Stop; Investigate the source; Find better coverage; Trace claims, quotes and pictures back to where they first appeared. You will practise each part in this course. If you are not sure, it is fine to wait. Not sharing is always an option."
          ],
          steps: ["Notice a strong feeling: that is your signal to stop.", "Ask: who is behind this?", "Ask: what is the evidence?", "Ask: what do other trusted sources say?", "Not sure? Do not share yet."],
          words: [["Misinformation", "false information shared by people who may think it is true."], ["Disinformation", "false information made and spread on purpose to fool people."], ["Claim", "something a post says is true."]],
          slides: [
            { title: "Strong feelings = stop", bullets: ["False posts spread on anger, fear and excitement", "A few seconds of checking protects people who trust you"] },
            { title: "Three quick questions", bullets: ["Who is behind this?", "What is the evidence?", "What do other trusted sources say?"] },
            { title: "SIFT", bullets: ["Stop", "Investigate the source", "Find better coverage", "Trace it back to the original"] },
            { title: "Not sure?", bullets: ["Wait", "Not sharing is always an option"] }
          ],
          sources: [
            { name: "Digital Inquiry Group: Civic Online Reasoning (free lessons on evaluating online information)", url: "https://cor.inquirygroup.org/" }
          ],
          tryIt: "Open your social media, news app or a family group chat. Find one post that made you feel something strong. Write down the answers to the three questions: who, what evidence, what others say.",
          youCanNow: "pause when a post stirs strong feelings and ask who is behind it, what the evidence is and what others say.",
          quickCheck: [
            { objective: "O1", q: "Which question helps you check a claim?", options: ["How many likes does it have?", "Who made this, and what is their evidence?", "Is the picture colorful?", "Did my friend share it?"], answer: 1, why: "Asking who made it and what evidence they have is part of stopping to check." },
            { objective: "O1", q: "A family group chat forwards a shocking warning. What would you do first?", options: ["Forward it to everyone right away", "Delete the group chat", "Pause and check before you share", "Reply in all capitals"], answer: 2, why: "Strong feelings are a signal to stop and check first." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Lateral reading: checking the source",
          minutes: 5,
          goal: "Check who is behind a website or account by reading other sites about it.",
          text: [
            "Fake sites can look very professional, with logos, \"About us\" pages and official-sounding names. Reading the site itself will not tell you if you can trust it. Professional fact-checkers do something else: they leave the site and read sideways. This is called lateral reading.",
            "Open a new tab and search for the name of the site, the organization or the person, plus words like \"who funds\" or \"reliable\". See what others say about them: news outlets, Wikipedia's article on them, or fact-checking sites such as AP Fact Check, Reuters Fact Check, PolitiFact, FactCheck.org or Snopes. A health claim? Check what your doctor or official health sites say. A claim about a government program? Go to the official site, often ending in .gov.",
            "Also look for the same story from at least two trusted sources you already know. If only one unknown site is reporting something huge, be careful."
          ],
          steps: ["Do not judge a site by its own looks or \"About us\" page.", "Open a new tab.", "Search the site, group or person's name plus \"reliable\" or \"who funds\".", "Read what news outlets, Wikipedia or fact-checkers say about them.", "Look for the same story from two trusted sources."],
          words: [["Lateral reading", "checking a source by leaving it and reading what other sites say about it."], ["Fact-checker", "a person or group whose job is to check if claims are true."]],
          slides: [
            { title: "Fake sites can look real", bullets: ["Logos, \"About us\" pages, official names", "Reading the site itself is not enough"] },
            { title: "Read sideways", bullets: ["Open a new tab", "Search the name plus \"reliable\" or \"who funds\"", "See what others say about them"] },
            { title: "Where to look", bullets: ["News outlets and Wikipedia", "Fact-checkers: AP, Reuters, PolitiFact, FactCheck.org, Snopes", "Official sites, often ending in .gov"] },
            { title: "Two trusted sources", bullets: ["Only one unknown site reporting big news?", "Be careful"] }
          ],
          sources: [
            { name: "Digital Inquiry Group: Intro to Lateral Reading (Civic Online Reasoning)", url: "https://cor.inquirygroup.org/" }
          ],
          tryIt: "Take the post from Lesson 1. Open a new tab and search for the name of the site or account that posted it. Write one sentence about what other sources say about it, and whether any trusted outlet reports the same story.",
          youCanNow: "check a website or account by reading what other trusted sources say about it.",
          quickCheck: [
            { objective: "O2", q: "What is lateral reading?", options: ["Opening new tabs to see what other sources say about a site", "Reading a page from top to bottom slowly", "Reading only the headline", "Reading the site's About us page"], answer: 0, why: "Lateral reading checks a source by leaving it and reading others about it." },
            { objective: "O2", q: "You find a news site you have never heard of with a big story. What would you do?", options: ["Trust it because it looks professional", "Share it so others can decide", "Read only its About us page", "Search the site's name and see what trusted sources say"], answer: 3, why: "What others say about a site tells you more than what it says about itself." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Reverse image search: where did this picture come from?",
          minutes: 5,
          goal: "Use a reverse image search to find where a picture first appeared.",
          text: [
            "Many false posts use a real photo with a false story: a flood picture from years ago shared as \"today\", or a photo from another country. A reverse image search finds where else a picture appears online, often showing its real date and story.",
            "On a computer: go to google.com and click the camera icon (\"Search by image\"), then upload the picture or drag it into the search box. In the Chrome browser you can also right-click a picture on a website and choose \"Search with Google Lens\". On a phone, the Google app and Google Lens let you search with a picture or a screenshot. TinEye (tineye.com) is another free reverse image search site.",
            "Look at the results for the oldest version, the place it first appeared, and news stories or fact-checks about it. If the picture is from a different time, place or event than the post says, the post is misleading even if the photo is real."
          ],
          steps: ["Save or screenshot the picture.", "Open Google image search (camera icon) or Google Lens, or tineye.com.", "Upload the picture.", "Look for the oldest copy, where it first appeared, and any fact-checks.", "Compare: does the real story match what the post says?"],
          words: [["Reverse image search", "searching with a picture to find where else it appears online."], ["Screenshot", "a picture of what is on your screen."], ["Misleading", "using something real in a way that gives a false idea."]],
          slides: [
            { title: "Real photo, false story", bullets: ["Old pictures shared as \"today\"", "Photos from another place or event"] },
            { title: "How to search with a picture", bullets: ["google.com: click the camera icon, upload", "Chrome: right-click, \"Search with Google Lens\"", "Phone: Google app or Lens; also tineye.com"] },
            { title: "Read the results", bullets: ["Find the oldest copy", "Where did it first appear?", "Any fact-checks?"] },
            { title: "Compare", bullets: ["Different time, place or event?", "Then the post is misleading"] }
          ],
          sources: [
            { name: "Google Search Help: Search with an image", url: "https://support.google.com/websearch/answer/1325808" }
          ],
          tryIt: "Find a dramatic photo in a post or news feed. Screenshot it and run a reverse image search. Write down the oldest date you can find and whether it matches the post's story.",
          youCanNow: "run a reverse image search and tell whether a real photo is being used with a false story.",
          quickCheck: [
            { objective: "O3", q: "What does a reverse image search use to search?", options: ["A word you type", "A phone number", "A voice recording", "A picture"], answer: 3, why: "A reverse image search looks for other copies of a picture." },
            { objective: "O3", q: "A reverse search shows a \"today's storm\" photo first appeared five years ago. What would you decide?", options: ["The post is misleading", "The post is true", "The photo is fake", "Reverse search is broken"], answer: 0, why: "A real old photo shared as new is misleading." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Checking what you see",
        questions: [
          { objective: "O1", q: "A post makes you very angry. What is the best first step?", options: ["Share it right away", "Stop and check before you share", "Comment in all capital letters", "Forward it to your whole family"], answer: 1, why: "Strong feelings are the signal to stop and check." },
          { objective: "O2", q: "What does lateral reading mean?", options: ["Reading the site's \"About us\" page carefully", "Reading only headlines", "Reading the comments", "Leaving the site to see what other sources say about it"], answer: 3, why: "Fact-checkers read sideways in new tabs." },
          { objective: "O2", q: "A brand-new website with a professional logo reports huge news no one else has. What should you do?", options: ["Look for the story from two trusted sources", "Believe it; the logo looks official", "Share it so others can decide", "Pay to read more"], answer: 0, why: "Big news should be confirmed by trusted sources." },
          { objective: "O3", q: "What does a reverse image search help you find?", options: ["The photographer's password", "Who liked the photo", "Where else a picture appears online and when it first appeared", "A better camera"], answer: 2, why: "It traces a picture back to its source." },
          { objective: "O3", q: "A real flood photo from 2015 is shared as \"today\". The post is:", options: ["True, because the photo is real", "Misleading", "A deepfake", "A fact-check"], answer: 1, why: "A real photo with a false story is misleading." }
        ]
      }
    },
    {
      name: "Chapter 2: AI fakes, scams and your own mind",
      lessons: [
        {
          objectives: ["O4"],
          title: "Spotting deepfakes and AI fakes",
          minutes: 5,
          goal: "Check a picture, video or voice that might be made by AI.",
          text: [
            "AI tools can now make pictures, videos and voices that look and sound real. A deepfake might show a famous person saying something they never said. A voice clone can copy a family member from a short clip of their voice.",
            "Old tricks like counting fingers or looking for blurry ears still catch some fakes, but newer tools make fewer mistakes, so do not rely on looks alone. Check the context instead. Who posted it first? Is it on the person's or organization's real, official account? Do trusted news outlets report it? Some platforms and AI tools add labels or hidden marks to AI content, but many fakes have none, so a missing label does not prove something is real.",
            "For calls and voice messages, the FTC's advice is simple: don't trust the voice. If a \"grandchild\" or \"boss\" calls asking for money or secrets, hang up and call them back at a number you already know. Some families agree on a code word for emergencies."
          ],
          steps: ["Be extra careful with shocking videos, celebrity clips and urgent voice messages.", "Do not rely on looks alone.", "Check who posted it first and if it is on the real official account.", "Look for trusted news coverage.", "For voices: hang up and call back on a number you know."],
          words: [["Deepfake", "a fake video, picture or audio made with AI to look or sound like a real person."], ["Voice clone", "an AI copy of someone's voice."], ["AI-generated", "made by an AI tool rather than recorded from real life."]],
          slides: [
            { title: "AI can fake it", bullets: ["Pictures, videos and voices", "Famous people saying things they never said", "Voices copied from a short clip"] },
            { title: "Don't rely on looks alone", bullets: ["Odd hands or blur catch some fakes", "Newer tools make fewer mistakes", "No label does not mean real"] },
            { title: "Check the context", bullets: ["Who posted it first?", "Is it on the real official account?", "Do trusted outlets report it?"] },
            { title: "Voices: don't trust the voice", bullets: ["Hang up", "Call back on a number you know", "Consider a family code word"] }
          ],
          sources: [
            { name: "FTC consumer alert: Scammers use AI to enhance their family emergency schemes", url: "https://consumer.ftc.gov/consumer-alerts/2023/03/scammers-use-ai-enhance-their-family-emergency-schemes" }
          ],
          tryIt: "Find a viral video or picture of a famous person. Check who posted it first, whether it appears on that person's official account, and whether trusted news outlets mention it. Then agree a family code word with someone you love.",
          youCanNow: "check a possible AI fake by its context and protect yourself from cloned voices.",
          quickCheck: [
            { objective: "O4", q: "What is a family code word for?", options: ["Logging in to your bank", "Checking that a caller really is your family member", "Joining a group chat", "Making AI voices"], answer: 1, why: "A code word helps you check a caller when a voice could be faked." },
            { objective: "O4", q: "A video shows a famous person saying something shocking. What would you do?", options: ["Share it because it looks real", "Decide by looking closely at the face", "Assume it is fake and share that", "Check their official account and trusted news first"], answer: 3, why: "Check the source and trusted coverage; looks alone are not enough." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Scams that use fake news",
          minutes: 5,
          goal: "Spot fake news stories and ads that are really scams.",
          text: [
            "Many scams dress up as news. A fake article shows a famous person \"revealing\" a get-rich-quick investment, a miracle cure or a free government payment, with a link to sign up. Fake charity appeals appear right after disasters. Fake ads on social media promise huge \"limited time\" discounts. Some fake stories use AI-made video of celebrities or news anchors.",
            "Warning signs: it rushes you; it promises big money, a cure or a prize; it asks you to pay with gift cards, wire transfers or cryptocurrency; it asks for passwords, codes or ID numbers; or the link goes to a website that is not the real one. The FTC says only scammers tell you to buy a gift card to pay them.",
            "What to do: do not click the link. Go to the real organization's website by typing its address yourself, or call a number you already know. Give to charities you can look up. If you or a loved one lost money, contact your bank right away, and report the scam to the FTC at ReportFraud.ftc.gov (in the US)."
          ],
          steps: ["Watch for news-style posts that sell something or ask for money.", "Look for warning signs: rush, big promises, gift cards, wire or crypto, codes.", "Do not click the link.", "Type the real website yourself or call a number you know.", "Lost money? Call your bank, then report at ReportFraud.ftc.gov."],
          words: [["Scam", "a trick to steal money or information."], ["Phishing", "fake messages that try to get you to click a link or share private details."], ["Sponsored post", "a paid ad on social media; it may not be checked."]],
          slides: [
            { title: "Scams dressed as news", bullets: ["A celebrity \"reveals\" an investment or cure", "Fake disaster charities", "AI videos of famous people or anchors"] },
            { title: "Warning signs", bullets: ["It rushes you", "Big money, a cure or a prize", "Gift cards, wire transfers or crypto", "Asks for passwords, codes or ID numbers"] },
            { title: "What to do", bullets: ["Do not click the link", "Type the real website yourself", "Call a number you already know"] },
            { title: "Lost money?", bullets: ["Call your bank right away", "Report at ReportFraud.ftc.gov (US)"] }
          ],
          sources: [
            { name: "FTC: Avoiding and reporting gift card scams", url: "https://consumer.ftc.gov/articles/avoiding-and-reporting-gift-card-scams" },
            { name: "FTC: Government and business impersonators", url: "https://consumer.ftc.gov/government-business-impersonators" },
            { name: "FTC: ReportFraud", url: "https://reportfraud.ftc.gov/" }
          ],
          tryIt: "Look through your social media or messages for one ad or post that promises money, a cure or a big discount. List every warning sign you can see. If it is a scam, use the platform's menu to report it.",
          youCanNow: "spot scams that look like news, avoid their links and know where to report them.",
          quickCheck: [
            { objective: "O5", q: "Which is a sign that a post is a scam?", options: ["It asks you to pay with gift cards", "It links to a real .gov address you typed yourself", "It gives time to think", "It comes from a charity you know and trust"], answer: 0, why: "Requests for gift card payments are a clear scam sign." },
            { objective: "O5", q: "An ad says a famous doctor found a miracle cure and you must buy today. What would you do?", options: ["Buy it before it sells out", "Share it with sick friends", "Check with your doctor or official health sources and report the ad", "Give your card number to learn more"], answer: 2, why: "Health claims go to a doctor or official source, and scams should be reported." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Bias in your own thinking",
          minutes: 5,
          goal: "Notice when your own beliefs or feelings are steering what you accept as true.",
          text: [
            "The hardest fakes to catch are the ones we want to believe. Confirmation bias means we quickly accept things that fit what we already think and look hard for problems in things that do not. Everyone does it, whatever their age, background or politics.",
            "Social media can make it stronger. Feeds show us more of what we already click on, so we can end up seeing only one side. A post shared by a friend feels trustworthy, but your friend may not have checked it either.",
            "Three habits help. Ask: \"Would I believe this if it were about the other side?\" Ask: \"What evidence would change my mind?\" And go looking for a trusted source that might disagree. Changing your mind when the facts change is a strength, not a weakness. Before you share, take one last look: is it true, is it helpful, and is it fair?"
          ],
          steps: ["Notice when a post feels \"just right\" for what you already think.", "Ask: would I believe this if it were about the other side?", "Ask: what evidence would change my mind?", "Look for a trusted source that might disagree.", "Before sharing: is it true, helpful and fair?"],
          words: [["Bias", "a leaning that can push our thinking one way without us noticing."], ["Confirmation bias", "accepting what fits our beliefs and doubting what does not."], ["Echo chamber", "a place where you only hear views that match your own."]],
          slides: [
            { title: "We believe what we want to", bullets: ["Confirmation bias: easy yes to what fits", "Hard look at what doesn't", "Everyone does it"] },
            { title: "Feeds make it stronger", bullets: ["They show more of what we click", "We may see only one side", "Friends share without checking too"] },
            { title: "Three habits", bullets: ["\"Would I believe this about the other side?\"", "\"What evidence would change my mind?\"", "Look for a trusted source that disagrees"] },
            { title: "Before you share", bullets: ["Is it true?", "Is it helpful?", "Is it fair?"] }
          ],
          tryIt: "Final task: take one surprising post and check it with every step in this course. Write a three-sentence verdict (true, false, misleading or not sure yet) with your evidence, and note one way your own feelings might have pulled you.",
          youCanNow: "check a post from start to finish and notice when your own bias is pulling you.",
          quickCheck: [
            { objective: "O6", q: "What is an echo chamber?", options: ["A place where you only hear views like your own", "A room with loud sound", "A fact-checking website", "A type of AI tool"], answer: 0, why: "In an echo chamber you mostly hear what you already think." },
            { objective: "O6", q: "A post about a politician you dislike makes you happy and you want to share it. What would you do?", options: ["Share it because it fits what you think", "Share it with a joke", "Ask if you would believe it about the other side, and check it", "Ignore all news from now on"], answer: 2, why: "Asking that question helps catch your own bias before you share." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: AI fakes, scams and your own mind",
        questions: [
          { objective: "O4", q: "You get a call in your grandson's voice asking for money right now. What should you do?", options: ["Send the money fast", "Ask for his bank details", "Hang up and call him back on a number you know", "Buy gift cards as asked"], answer: 2, why: "Voices can be cloned; call back on a known number." },
          { objective: "O4", q: "A shocking celebrity video has no \"AI\" label. That means:", options: ["It is definitely real", "It is definitely fake", "The celebrity approved it", "Nothing yet; check who posted it first and if trusted outlets report it"], answer: 3, why: "Many fakes have no label; check the context." },
          { objective: "O5", q: "A news-style post says a famous person found a secret investment and asks you to sign up. This is most likely:", options: ["A scam", "A government program", "A fact-check", "Breaking news"], answer: 0, why: "Fake celebrity investment stories are a common scam." },
          { objective: "O5", q: "Where can people in the US report a scam?", options: ["In the scammer's comments", "ReportFraud.ftc.gov", "By replying to the scam text", "Nowhere"], answer: 1, why: "The FTC collects scam reports at ReportFraud.ftc.gov." },
          { objective: "O6", q: "Confirmation bias means:", options: ["Checking every fact", "Doubting everything", "Accepting what fits what we already think", "Only reading the news"], answer: 2, why: "We accept what fits our beliefs more easily." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Critical Thinking and Spotting Misinformation",
    questions: [
      { objective: "O1", q: "Misinformation is:", options: ["Always made on purpose", "False information people may share thinking it is true", "Only on TV", "True news"], answer: 1, why: "Misinformation can be shared by honest mistake." },
      { objective: "O1", q: "Which feeling is a signal to stop and check?", options: ["Feeling bored", "Feeling sleepy", "Feeling hungry", "Feeling angry or very excited about a post"], answer: 3, why: "False posts spread on strong emotions." },
      { objective: "O1", q: "What does the S in SIFT stand for?", options: ["Stop", "Share", "Search", "Save"], answer: 0, why: "SIFT starts with Stop." },
      { objective: "O1", q: "You are not sure a post is true. The safest choice is:", options: ["Share it with a warning", "Share it twice", "Wait and do not share yet", "Add your own guess"], answer: 2, why: "Not sharing is always an option." },
      { objective: "O2", q: "Why is a site's own \"About us\" page not enough to trust it?", options: ["It is always too long", "Fake sites can write anything about themselves", "It is in small print", "It costs money to read"], answer: 1, why: "You need what others say about the site." },
      { objective: "O2", q: "Which is a fact-checking organization?", options: ["A random blog", "A pop-up ad", "Reuters Fact Check", "A chain email"], answer: 2, why: "Reuters Fact Check is a known fact-checker." },
      { objective: "O2", q: "Official US government websites usually end in:", options: [".gov", ".win", ".xyz", ".shop"], answer: 0, why: "US government sites use .gov." },
      { objective: "O2", q: "A health post claims a fruit cures diabetes. Who should you check with?", options: ["The post's comments", "The person selling the fruit", "A friend who shared it", "Your doctor or official health sources"], answer: 3, why: "Health claims need a doctor or official source." },
      { objective: "O3", q: "On google.com, how do you start a search with a picture?", options: ["Type the word picture", "Click the camera icon and upload the image", "Call Google", "Print the picture"], answer: 1, why: "The camera icon opens search by image." },
      { objective: "O3", q: "In Chrome, right-clicking a picture lets you choose:", options: ["Search with Google Lens", "Delete the internet", "Buy the picture", "Send it to everyone"], answer: 0, why: "Chrome offers Search with Google Lens on images." },
      { objective: "O3", q: "In reverse image results, what are you mainly looking for?", options: ["The most likes", "The prettiest version", "The oldest copy and where it first appeared", "The biggest size"], answer: 2, why: "The first appearance shows the real story." },
      { objective: "O4", q: "A deepfake is:", options: ["A broken screen", "A deep sea photo", "A fact-check label", "A fake video, picture or audio made with AI"], answer: 3, why: "Deepfakes use AI to imitate real people." },
      { objective: "O4", q: "Why should you not rely only on looks to spot AI fakes?", options: ["Newer AI tools make fewer visible mistakes", "AI fakes are always obvious", "Looks never matter", "Only experts can see pictures"], answer: 0, why: "Context checks work better as fakes improve." },
      { objective: "O4", q: "A family code word helps you:", options: ["Log in to social media", "Check a caller really is your family member", "Pay bills", "Unlock your phone"], answer: 1, why: "A cloned voice will not know the code word." },
      { objective: "O5", q: "Which payment request is a clear scam sign?", options: ["Paying your known utility on its official site", "Paying a store at the counter", "\"Buy gift cards and send me the numbers\"", "A bill from your doctor's office you can verify"], answer: 2, why: "The FTC says only scammers ask for gift card payments." },
      { objective: "O5", q: "A disaster just happened and a new charity page asks for donations. What is wise?", options: ["Give to a charity you can look up and trust", "Send cash to the page right away", "Give your bank password", "Share the page without checking"], answer: 0, why: "Fake charities appear after disasters." },
      { objective: "O5", q: "A post links to a \"government payment\" sign-up. The safest step is:", options: ["Click and enter your details", "Send them your ID number", "Reply asking if it is real", "Type the real .gov address yourself to check"], answer: 3, why: "Going to the official site yourself avoids fake links." },
      { objective: "O6", q: "Which question helps catch your own bias?", options: ["\"Who agrees with me?\"", "\"Would I believe this if it were about the other side?\"", "\"How fast can I share this?\"", "\"Is it funny?\""], answer: 1, why: "Swapping sides shows if feelings are steering you." },
      { objective: "O6", q: "An echo chamber is:", options: ["A loud room", "A fact-checking site", "A place where you only hear views like your own", "A type of microphone"], answer: 2, why: "Echo chambers hide other views." },
      { objective: "O6", q: "Changing your mind when facts change is:", options: ["A weakness", "A strength of good thinking", "Not allowed", "A sign of bias"], answer: 1, why: "Good thinkers follow the evidence." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Pre-Test: What Do You Already Know?",
    from: [
      1,
      3,
      4,
      7,
      10,
      11,
      13,
      14,
      17
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      {
        name: "Paused and asked",
        objective: "O1",
        notYet: "Shared or believed it without checking.",
        meets: "Wrote who made it, the evidence and what others say.",
        exceeds: "Noted the feeling that made them want to share."
      },
      {
        name: "Source checked",
        objective: "O2",
        notYet: "Relied on the site's own page or the post alone.",
        meets: "Read what at least two other sources say about the site or account.",
        exceeds: "Found the story, or its absence, in trusted outlets and fact-checkers."
      },
      {
        name: "Picture traced",
        objective: "O3",
        notYet: "No reverse image search on a picture in the post.",
        meets: "Ran a reverse image search and wrote the oldest date found.",
        exceeds: "Explained whether the picture matches the post's time and place."
      },
      {
        name: "Scam signs",
        objective: "O5",
        notYet: "Missed clear scam signs such as pressure or gift-card payment.",
        meets: "Listed every scam sign, or confirmed there were none.",
        exceeds: "Reported it on the platform if it was a scam."
      },
      {
        name: "Verdict and bias",
        objective: "O6",
        notYet: "No clear verdict, or no evidence given.",
        meets: "A three-sentence verdict with evidence and a decision about sharing.",
        exceeds: "Also notes how their own feelings or beliefs may have pulled them."
      }
    ]
  },
  evaluation: {
    results: [
      "Learners who report checking a post before sharing it within 30 days (follow-up survey)",
      "Learners who set up a family code word",
      "Learners who report avoiding or reporting a scam",
      "Learners who start another Koach Learn digital-safety course within 30 days"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A phone or computer with a web browser",
      "Access to a reverse image search such as Google Lens",
      "A real post, picture or forwarded message to check",
      "Paper or a notes app for the verdict",
      "About 60 minutes in total"
    ],
    facilitatorNotes: [
      "Bring a few safe sample posts (an old photo shared as new, a fake ad) for learners who do not want to use their own feeds.",
      "Avoid political arguments in class; focus on the checking steps, not on who is right.",
      "Remind learners never to click links or pay in suspicious posts during practice.",
      "Help seniors set up a family code word with a relative during or after class.",
      "Score the final task with the rubric and give feedback on one Not yet row at a time."
    ]
  }
};
