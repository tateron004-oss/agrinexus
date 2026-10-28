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
  chapters: [
    {
      name: "Chapter 1: Checking what you see",
      lessons: [
        {
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
          youCanNow: "pause when a post stirs strong feelings and ask who is behind it, what the evidence is and what others say."
        },
        {
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
          youCanNow: "check a website or account by reading what other trusted sources say about it."
        },
        {
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
          youCanNow: "run a reverse image search and tell whether a real photo is being used with a false story."
        }
      ],
      check: {
        title: "Knowledge Check 1: Checking what you see",
        questions: [
          { q: "A post makes you very angry. What is the best first step?", options: ["Share it right away", "Stop and check before you share", "Comment in all capital letters", "Forward it to your whole family"], answer: 1, why: "Strong feelings are the signal to stop and check." },
          { q: "What does lateral reading mean?", options: ["Reading the site's \"About us\" page carefully", "Reading only headlines", "Reading the comments", "Leaving the site to see what other sources say about it"], answer: 3, why: "Fact-checkers read sideways in new tabs." },
          { q: "A brand-new website with a professional logo reports huge news no one else has. What should you do?", options: ["Look for the story from two trusted sources", "Believe it; the logo looks official", "Share it so others can decide", "Pay to read more"], answer: 0, why: "Big news should be confirmed by trusted sources." },
          { q: "What does a reverse image search help you find?", options: ["The photographer's password", "Who liked the photo", "Where else a picture appears online and when it first appeared", "A better camera"], answer: 2, why: "It traces a picture back to its source." },
          { q: "A real flood photo from 2015 is shared as \"today\". The post is:", options: ["True, because the photo is real", "Misleading", "A deepfake", "A fact-check"], answer: 1, why: "A real photo with a false story is misleading." }
        ]
      }
    },
    {
      name: "Chapter 2: AI fakes, scams and your own mind",
      lessons: [
        {
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
          youCanNow: "check a possible AI fake by its context and protect yourself from cloned voices."
        },
        {
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
          youCanNow: "spot scams that look like news, avoid their links and know where to report them."
        },
        {
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
          youCanNow: "check a post from start to finish and notice when your own bias is pulling you."
        }
      ],
      check: {
        title: "Knowledge Check 2: AI fakes, scams and your own mind",
        questions: [
          { q: "You get a call in your grandson's voice asking for money right now. What should you do?", options: ["Send the money fast", "Ask for his bank details", "Hang up and call him back on a number you know", "Buy gift cards as asked"], answer: 2, why: "Voices can be cloned; call back on a known number." },
          { q: "A shocking celebrity video has no \"AI\" label. That means:", options: ["It is definitely real", "It is definitely fake", "The celebrity approved it", "Nothing yet; check who posted it first and if trusted outlets report it"], answer: 3, why: "Many fakes have no label; check the context." },
          { q: "A news-style post says a famous person found a secret investment and asks you to sign up. This is most likely:", options: ["A scam", "A government program", "A fact-check", "Breaking news"], answer: 0, why: "Fake celebrity investment stories are a common scam." },
          { q: "Where can people in the US report a scam?", options: ["In the scammer's comments", "ReportFraud.ftc.gov", "By replying to the scam text", "Nowhere"], answer: 1, why: "The FTC collects scam reports at ReportFraud.ftc.gov." },
          { q: "Confirmation bias means:", options: ["Checking every fact", "Doubting everything", "Accepting what fits what we already think", "Only reading the news"], answer: 2, why: "We accept what fits our beliefs more easily." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Critical Thinking and Spotting Misinformation",
    questions: [
      { q: "Misinformation is:", options: ["Always made on purpose", "False information people may share thinking it is true", "Only on TV", "True news"], answer: 1, why: "Misinformation can be shared by honest mistake." },
      { q: "Which feeling is a signal to stop and check?", options: ["Feeling bored", "Feeling sleepy", "Feeling hungry", "Feeling angry or very excited about a post"], answer: 3, why: "False posts spread on strong emotions." },
      { q: "What does the S in SIFT stand for?", options: ["Stop", "Share", "Search", "Save"], answer: 0, why: "SIFT starts with Stop." },
      { q: "You are not sure a post is true. The safest choice is:", options: ["Share it with a warning", "Share it twice", "Wait and do not share yet", "Add your own guess"], answer: 2, why: "Not sharing is always an option." },
      { q: "Why is a site's own \"About us\" page not enough to trust it?", options: ["It is always too long", "Fake sites can write anything about themselves", "It is in small print", "It costs money to read"], answer: 1, why: "You need what others say about the site." },
      { q: "Which is a fact-checking organization?", options: ["A random blog", "A pop-up ad", "Reuters Fact Check", "A chain email"], answer: 2, why: "Reuters Fact Check is a known fact-checker." },
      { q: "Official US government websites usually end in:", options: [".gov", ".win", ".xyz", ".shop"], answer: 0, why: "US government sites use .gov." },
      { q: "A health post claims a fruit cures diabetes. Who should you check with?", options: ["The post's comments", "The person selling the fruit", "A friend who shared it", "Your doctor or official health sources"], answer: 3, why: "Health claims need a doctor or official source." },
      { q: "On google.com, how do you start a search with a picture?", options: ["Type the word picture", "Click the camera icon and upload the image", "Call Google", "Print the picture"], answer: 1, why: "The camera icon opens search by image." },
      { q: "In Chrome, right-clicking a picture lets you choose:", options: ["Search with Google Lens", "Delete the internet", "Buy the picture", "Send it to everyone"], answer: 0, why: "Chrome offers Search with Google Lens on images." },
      { q: "In reverse image results, what are you mainly looking for?", options: ["The most likes", "The prettiest version", "The oldest copy and where it first appeared", "The biggest size"], answer: 2, why: "The first appearance shows the real story." },
      { q: "A deepfake is:", options: ["A broken screen", "A deep sea photo", "A fact-check label", "A fake video, picture or audio made with AI"], answer: 3, why: "Deepfakes use AI to imitate real people." },
      { q: "Why should you not rely only on looks to spot AI fakes?", options: ["Newer AI tools make fewer visible mistakes", "AI fakes are always obvious", "Looks never matter", "Only experts can see pictures"], answer: 0, why: "Context checks work better as fakes improve." },
      { q: "A family code word helps you:", options: ["Log in to social media", "Check a caller really is your family member", "Pay bills", "Unlock your phone"], answer: 1, why: "A cloned voice will not know the code word." },
      { q: "Which payment request is a clear scam sign?", options: ["Paying your known utility on its official site", "Paying a store at the counter", "\"Buy gift cards and send me the numbers\"", "A bill from your doctor's office you can verify"], answer: 2, why: "The FTC says only scammers ask for gift card payments." },
      { q: "A disaster just happened and a new charity page asks for donations. What is wise?", options: ["Give to a charity you can look up and trust", "Send cash to the page right away", "Give your bank password", "Share the page without checking"], answer: 0, why: "Fake charities appear after disasters." },
      { q: "A post links to a \"government payment\" sign-up. The safest step is:", options: ["Click and enter your details", "Send them your ID number", "Reply asking if it is real", "Type the real .gov address yourself to check"], answer: 3, why: "Going to the official site yourself avoids fake links." },
      { q: "Which question helps catch your own bias?", options: ["\"Who agrees with me?\"", "\"Would I believe this if it were about the other side?\"", "\"How fast can I share this?\"", "\"Is it funny?\""], answer: 1, why: "Swapping sides shows if feelings are steering you." },
      { q: "An echo chamber is:", options: ["A loud room", "A fact-checking site", "A place where you only hear views like your own", "A type of microphone"], answer: 2, why: "Echo chambers hide other views." },
      { q: "Changing your mind when facts change is:", options: ["A weakness", "A strength of good thinking", "Not allowed", "A sign of bias"], answer: 1, why: "Good thinkers follow the evidence." }
    ]
  }
};
