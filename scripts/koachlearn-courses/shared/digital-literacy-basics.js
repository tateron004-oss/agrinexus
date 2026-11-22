"use strict";

// Koach Learn course (shared): "Digital Literacy Basics". Goes in Re-Entry (first) and Undeserved Community, so the examples are everyday tasks: job applications, benefits, the DMV, a clinic, the library.
// Shape: scripts/koachlearn-courses/README.md; model: re-entry/reentry-ai-digital-confidence.js.

module.exports = {
  id: "digital-literacy-basics",
  category: "Re-Entry",
  name: "Digital Literacy Basics",
  skills: "Getting online for free or low cost, Searching well, Checking if information is true, Filling out online forms, Scanning and uploading documents, Protecting your digital footprint",
  outcome: "find the real official website for a service you need, check that its information is trustworthy, and get a task done there: fill in the form, scan and upload a document with a clear file name, and keep your private information and online reputation safe.",
  about: [
    "Digital literacy means being able to find, judge and use information on phones and computers, and to get real things done online: applying for jobs, renewing an ID, using benefits or making a clinic appointment. Many services are now online first, so these skills open doors.",
    "In Chapter 1 you learn where to get online for free or low cost, how to search well and how to tell true information from false. In Chapter 2 you fill out forms, scan and upload documents, and protect your privacy and reputation online.",
    "No experience is needed. Each lesson takes about five minutes. Read, watch the slides, then do the \"Try it now\" task. A knowledge check ends each chapter and a 20-question quiz ends the course."
  ],
  finalTask: "Pick one service you need, such as your state's job center, motor vehicle office, a benefits office or a clinic. Search for it, prove the site is the official one, and find the page with the form or steps. Then scan a practice document (a letter or a page you wrote, not a real ID) with your phone, save it as a PDF with a clear file name, and write three lines on how you checked the site and kept your private information safe.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Adults who need to get things done online, especially people returning home from incarceration, and also job seekers, seniors and community members who have been away from technology or never used it much.",
    startingPoint: "Can use a phone for calls and texts and may have a basic email account. Many have not used a search engine to find an official site, judged whether information is true, filled in a long online form, scanned a document or checked their privacy settings.",
    gap: "Jobs, IDs, benefits, housing and health care are now applied for online, often with documents to upload. Without these skills people get stuck, pay fake sites for free services, share ID numbers with scammers, or harm their chances through what others can find about them online.",
    constraints: [
      "Reading level: plain words and short sentences; words like search engine, PDF and digital footprint are explained",
      "Devices: a smartphone, or a free library or job-center computer; some learners have no device of their own",
      "Time: about 5 minutes a lesson, about 60 minutes in total",
      "Cost: free options only, such as library Wi-Fi and free phone scanning apps",
      "Privacy and rules: practice uses a practice document, never a real ID; learners on parole or probation follow any internet rules they have"
    ],
    prerequisites: "None. Basic Computer Skills or Smartphone and Tablet helps learners who are new to devices."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Given where you live", action: "find a free or low-cost way to get online and list the safety steps for public Wi-Fi and shared computers", standard: "naming at least one real place or program and at least two safety steps" },
    { id: "O2", condition: "Using a search engine", action: "search for the official page of a service you need using clear key words", standard: "reaching the official page while skipping any ads" },
    { id: "O3", condition: "Given a website or post", action: "check whether the information can be trusted using the four questions", standard: "answering who made it, when, what other trusted sources say and whether it rushes you" },
    { id: "O4", condition: "Given an online form on an official site", action: "fill in the form correctly and save proof that you sent it", standard: "with every required field filled in and the confirmation saved" },
    { id: "O5", condition: "Given a paper document and a phone", action: "scan the document and save it as a PDF with a clear file name", standard: "with a flat, readable scan and a name that says whose document it is and what it is" },
    { id: "O6", condition: "Using a search engine and your social media settings", action: "check what others can see about you online and tighten your privacy settings", standard: "with your own name searched and at least one privacy setting changed" }
  ],
  chapters: [
    {
      name: "Chapter 1: Finding information you can trust",
      lessons: [
        {
          objectives: ["O1"],
          title: "Getting connected for free or low cost",
          minutes: 5,
          goal: "Find a free or low-cost way to get online near you.",
          text: [
            "You do not need your own computer to get online. Public libraries usually have free computers, free Wi-Fi and staff who help. Many job centers, reentry and community centers also have computer labs.",
            "Lifeline is a federal program, overseen by the FCC, that gives a monthly discount on phone or internet service to people who qualify, usually by income or by being in a program such as SNAP or Medicaid. The discount amount can change, so check lifelinesupport.org for the current amount and how to apply.",
            "On public Wi-Fi, stick to websites that start with https and show a lock, and avoid banking on shared computers. Always sign out and close the browser when you finish on a shared computer."
          ],
          steps: ["Search for your nearest public library and check its hours.", "Ask staff about free computers, Wi-Fi and help sessions.", "If cost is a problem, read about Lifeline at lifelinesupport.org.", "On shared computers, sign out and close the browser when done."],
          words: [["Wi-Fi", "a wireless internet connection."], ["Lifeline", "a federal program that lowers the monthly cost of phone or internet service for people who qualify."], ["https", "the start of a website address that means the connection is encrypted (scrambled)."]],
          sources: [{ name: "Lifeline Support (USAC, for the FCC)", url: "https://www.lifelinesupport.org/" }],
          slides: [
            { title: "Free places to get online", bullets: ["Public libraries: computers, Wi-Fi, helpers", "Job centers and community centers"] },
            { title: "Lifeline", bullets: ["Federal discount on phone or internet", "For people who qualify by income or programs like SNAP", "Check lifelinesupport.org for current details"] },
            { title: "Safe on shared computers", bullets: ["Look for https and a lock", "No banking on public computers", "Sign out and close the browser"] }
          ],
          tryIt: "Find your nearest public library online. Write down its address, its hours and whether it offers free computer help.",
          youCanNow: "find a free or low-cost way to get online and use shared computers safely.",
          quickCheck: [
            { objective: "O1", q: "Which program gives a monthly discount on phone or internet service to people who qualify?", options: ["A search engine", "Lifeline", "A password manager", "A social media app"], answer: 1, why: "Lifeline is a federal program, overseen by the FCC, that lowers phone or internet costs." },
            { objective: "O1", q: "You finish checking your email on a library computer. What would you do before you leave?", options: ["Leave the browser open for the next person", "Save your password in the browser", "Sign out and close the browser", "Write your password on a sticky note"], answer: 2, why: "Signing out and closing the browser stops the next person from getting into your account." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Searching well",
          minutes: 5,
          goal: "Use a search engine to find a specific official page quickly.",
          text: [
            "A search engine, such as Google or Bing, finds web pages for the words you type. Use a few clear key words, not a full story: \"California DMV renew ID\" works better than \"how do I get my ID back I lost it last year\".",
            "Add your state or city to get local results. Put words in quotation marks to find that exact phrase. Add \"site:.gov\" to see only US government websites.",
            "The top results are often ads, marked \"Sponsored\" or \"Ad\". Ads can be fake or can charge you for something that is free on the official site. Scroll past them to the real results."
          ],
          steps: ["Type 3 to 6 key words.", "Add your state or city.", "Add site:.gov for government pages.", "Skip results marked Sponsored or Ad.", "Open the result and read the web address before you trust it."],
          words: [["Search engine", "a website that finds web pages for the words you type, like Google or Bing."], ["Key words", "the most important words for what you want to find."], ["Sponsored / Ad", "a paid result, not always the official or best one."]],
          slides: [
            { title: "Use key words", bullets: ["\"California DMV renew ID\"", "Not a long story"] },
            { title: "Search tricks", bullets: ["Add your state or city", "\"Quotes\" for an exact phrase", "site:.gov for government sites"] },
            { title: "Skip the ads", bullets: ["Marked Sponsored or Ad", "Can charge for free services", "Scroll to the real results"] }
          ],
          tryIt: "Search for your state's job center or unemployment office. Try once with a long sentence and once with key words plus site:.gov. Which search found the official page faster?",
          youCanNow: "search with key words, skip ads, and find official pages quickly.",
          quickCheck: [
            { objective: "O2", q: "What does putting words in quotation marks do in a search?", options: ["Shows only ads", "Makes the search slower", "Shows only pictures", "Finds that exact phrase"], answer: 3, why: "Quotation marks tell the search engine to find the exact phrase." },
            { objective: "O2", q: "You need to renew your ID in your state. Which search would you type?", options: ["Your state's name, \"renew ID\" and site:.gov", "\"I lost my ID last year and I do not know what to do\"", "\"ID\"", "\"help\""], answer: 0, why: "A few clear key words, your state and site:.gov lead to the official page." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Is it true? Checking information",
          minutes: 5,
          goal: "Decide whether a website or post can be trusted before you act on it.",
          text: [
            "Anyone can post anything online. Before you trust it, ask four questions. Who made it? Look at the web address and the \"About\" page; US government sites end in .gov. When was it written? Rules and prices change. What do other trusted sources say? Check at least one more. Does it try to rush or scare you? That is a warning sign.",
            "Watch for look-alike addresses, like a site that adds extra words or changes one letter of a real name. Watch for photos and videos made or changed with AI; if a picture seems shocking, search for it in news from trusted outlets before sharing.",
            "False information that spreads by mistake is called misinformation. False information spread on purpose is called disinformation. Do not share something until you have checked it."
          ],
          steps: ["Who made it? Read the address and the About page.", "When? Find the date.", "Who else says so? Check one more trusted source.", "Is it rushing or scaring you? Slow down.", "Do not share until you have checked."],
          words: [["Source", "where information comes from."], ["Misinformation", "false information shared by mistake."], ["Disinformation", "false information spread on purpose."], ["Look-alike site", "a fake website with an address made to look like a real one."]],
          slides: [
            { title: "Four questions", bullets: ["Who made it?", "When was it written?", "What do other trusted sources say?", "Is it rushing or scaring me?"] },
            { title: "Watch for fakes", bullets: ["Look-alike web addresses", "AI-made photos and videos", "Shocking claims with no source"] },
            { title: "Before you share", bullets: ["Check it first", "Misinformation spreads by mistake", "Disinformation spreads on purpose"] }
          ],
          tryIt: "Find a post or article about a benefit, a job program or a health tip. Answer the four questions about it and decide: trust it, check more, or ignore it.",
          youCanNow: "check whether online information is trustworthy before you act on it or share it.",
          quickCheck: [
            { objective: "O3", q: "What is misinformation?", options: ["False information that spreads by mistake", "True news from a .gov site", "False information spread on purpose", "An ad at the top of a search"], answer: 0, why: "Misinformation is false information spread by mistake; on purpose it is disinformation." },
            { objective: "O3", q: "A message links to a job site whose address changes one letter of a well-known company's name. What would you do?", options: ["Enter your details quickly", "Share the link with friends", "Assume it is fine because it looks the same", "Treat it as a likely fake and go to the real site another way"], answer: 3, why: "Look-alike addresses are a warning sign of a fake site." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Finding information you can trust",
        questions: [
          { objective: "O1", q: "Where can you usually use a computer and Wi-Fi for free?", options: ["A gas pump", "A car dealership", "A bank vault", "A public library"], answer: 3, why: "Public libraries usually offer free computers, Wi-Fi and help." },
          { objective: "O1", q: "What does Lifeline do?", options: ["Gives free cars", "Pays rent", "Lowers the monthly cost of phone or internet for people who qualify", "Sells phones"], answer: 2, why: "Lifeline is a federal discount on phone or internet service." },
          { objective: "O2", q: "Which search is most likely to find the right page fast?", options: ["\"help me please\"", "\"Texas renew ID site:.gov\"", "\"stuff about ID\"", "\"?\""], answer: 1, why: "Key words, the state and site:.gov narrow the results." },
          { objective: "O2", q: "A top result is marked \"Sponsored\". What does that mean?", options: ["It is the official government page", "It is always free", "It was checked by the government", "It is a paid ad and may not be official"], answer: 3, why: "Sponsored results are ads." },
          { objective: "O3", q: "A post says a new benefit ends tonight and you must click now. What do you do first?", options: ["Click right away", "Share it with everyone", "Check it on the official .gov site", "Send your ID number"], answer: 2, why: "Rushing is a warning sign; check the official source." }
        ]
      }
    },
    {
      name: "Chapter 2: Getting things done online safely",
      lessons: [
        {
          objectives: ["O4"],
          title: "Filling out online forms",
          minutes: 5,
          goal: "Fill out an online form correctly and save proof you sent it.",
          text: [
            "Before you start, gather what the form will ask for: your contact details, dates, work or address history, and any document you need to upload. Have an email address you check often, because most sites send confirmations there.",
            "Fields marked with a star (*) are required. Use the Tab key to move to the next box on a computer. Read every drop-down menu and check box. Many long forms let you save and come back; write down where to log back in.",
            "Before you press Submit, review every page. After you submit, save the confirmation: take a screenshot, download the PDF, or write down the confirmation number. Only type ID numbers into the official site, never into a site you reached from an ad or a text."
          ],
          steps: ["Make sure you are on the official site.", "Gather the details and documents first.", "Fill in required fields (*); use Tab to move.", "Save your progress on long forms.", "Review every page, then Submit.", "Save the confirmation number or screenshot."],
          words: [["Field", "one box on a form where you type an answer."], ["Required (*)", "a field you must fill in before you can submit."], ["Confirmation number", "a code that proves your form was received."], ["Drop-down menu", "a box that opens a list to choose from."]],
          slides: [
            { title: "Before you start", bullets: ["Be on the official site", "Gather details and documents", "Use an email you check often"] },
            { title: "While you fill it in", bullets: ["* means required", "Tab moves to the next box", "Save your progress on long forms"] },
            { title: "Finish strong", bullets: ["Review every page", "Submit", "Save the confirmation number or a screenshot"] }
          ],
          tryIt: "Find a practice or contact form on an official site, such as your library's \"Ask a librarian\" form. Fill it in up to the Submit button without sending, and point out the required fields.",
          youCanNow: "fill out an online form correctly and keep proof you sent it.",
          quickCheck: [
            { objective: "O4", q: "Why have an email address you check often before you fill in forms?", options: ["Forms will not open without one", "It makes the form shorter", "Most sites send confirmations to your email", "It replaces your ID number"], answer: 2, why: "Most sites send confirmations and updates to your email." },
            { objective: "O4", q: "You reach the last page of a benefits application. What would you do before pressing Submit?", options: ["Close the browser", "Review every page", "Skip the required fields", "Start a new application"], answer: 1, why: "Reviewing every page catches mistakes before you send it." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Scanning and uploading documents",
          minutes: 5,
          goal: "Scan a paper document with a phone and save it as a PDF with a clear name.",
          text: [
            "Many forms ask you to upload documents: a résumé, a letter, proof of address. You can scan with a phone. On an iPhone, the Notes app and the Files app have a scan option. On Android, the Google Drive app has a Scan button. Look for a camera or scan icon.",
            "For a good scan: lay the paper flat on a dark surface, use good light, hold the phone straight above it, and let the app crop the edges. Save it as a PDF.",
            "Name the file clearly, like \"Jordan-Lee-Resume-2026.pdf\", not \"IMG_2034\". Only upload ID or private documents to official sites, and delete copies from shared or library computers when you finish."
          ],
          steps: ["Open a scan tool: Notes or Files (iPhone), Google Drive (Android).", "Lay the page flat in good light.", "Hold the phone straight above it and scan.", "Save as PDF with a clear file name.", "Upload only on the official site; delete copies from shared computers."],
          words: [["Scan", "make a clear digital copy of a paper page."], ["Upload", "send a file from your device to a website."], ["File name", "the name a file is saved with, which helps you and others find it."]],
          slides: [
            { title: "Scan with your phone", bullets: ["iPhone: Notes or Files app", "Android: Google Drive Scan button"] },
            { title: "A clear scan", bullets: ["Flat page, dark surface", "Good light, phone straight above", "Save as PDF"] },
            { title: "Name it, guard it", bullets: ["\"Jordan-Lee-Resume-2026.pdf\", not \"IMG_2034\"", "Upload private documents only to official sites", "Delete copies from shared computers"] }
          ],
          tryIt: "Scan one practice page (a letter you wrote, not a real ID) with your phone. Save it as a PDF and give it a clear file name.",
          youCanNow: "scan a paper document with a phone and save it as a clearly named PDF ready to upload.",
          quickCheck: [
            { objective: "O5", q: "Which file name is best for an uploaded letter?", options: ["IMG_2034", "scan", "document1", "Jordan-Lee-Landlord-Letter-2026.pdf"], answer: 3, why: "A clear name says whose document it is and what it is." },
            { objective: "O5", q: "You scanned a document on a library computer and uploaded it. What would you do next?", options: ["Leave it in the Downloads folder", "Delete the copies from the computer", "Rename it IMG_1", "Email it to everyone you know"], answer: 1, why: "Delete copies of private documents from shared or library computers when you finish." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Your digital footprint and privacy",
          minutes: 5,
          goal: "Check and tighten what others can see about you online.",
          text: [
            "Your digital footprint is everything about you online: posts, photos, comments, and what others post about you. Employers, landlords and schools often search a person's name. Posts can stay online even after you delete them, because others can screenshot or share them.",
            "Search your own name in a search engine and see what comes up. In each social media app, open the settings and look for Privacy. Choose who can see your posts, who can tag you and whether strangers can message you.",
            "Think before you post: would you be comfortable if a future boss, your family or your parole or probation officer saw it? Do not post your address, travel plans, ID documents or anything that could be used to pretend to be you."
          ],
          steps: ["Search your full name in quotes.", "Open each social app's Privacy settings.", "Limit who can see posts, tag you and message you.", "Remove or hide posts you would not want an employer to see.", "Think before every new post."],
          words: [["Digital footprint", "everything about you that is online, posted by you or by others."], ["Privacy settings", "choices in an app about who can see your information."], ["Tag", "linking a person's name or account to a post or photo."]],
          slides: [
            { title: "Your digital footprint", bullets: ["Posts, photos, comments", "What others post about you", "Employers and landlords look"] },
            { title: "Check yourself", bullets: ["Search your name in quotes", "Open Privacy in each app", "Limit who sees, tags and messages you"] },
            { title: "Think before you post", bullets: ["Would a future boss be OK seeing it?", "No address, travel plans or ID photos"] }
          ],
          tryIt: "Final task: find the official site for a service you need and prove it is official, find its form or steps, scan a practice page to a clearly named PDF, then search your own name and tighten one privacy setting.",
          youCanNow: "get a real task done online while keeping your private information and reputation safe.",
          quickCheck: [
            { objective: "O6", q: "Why can a post stay online after you delete it?", options: ["Others may have taken a screenshot or shared it", "Deleting never works on any app", "The library keeps a copy", "Search engines print it"], answer: 0, why: "Other people can screenshot or share a post before you delete it." },
            { objective: "O6", q: "Strangers keep messaging you on a social media app. What would you do?", options: ["Post your address so they know you", "Delete your email account", "Open the app's Privacy settings and limit who can message you", "Reply to all of them"], answer: 2, why: "Privacy settings let you choose who can message you, see your posts and tag you." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Getting things done online safely",
        questions: [
          { objective: "O4", q: "What does a star (*) next to a form field usually mean?", options: ["It is optional", "It is required", "It is a prize", "It is an ad"], answer: 1, why: "A star marks a required field." },
          { objective: "O4", q: "After you submit an online application, you should:", options: ["Close the tab right away", "Save the confirmation number or a screenshot", "Submit it five more times", "Delete your email"], answer: 1, why: "The confirmation proves you sent it." },
          { objective: "O5", q: "Which file name is best for an upload?", options: ["IMG_2034.jpg", "scan.pdf", "Jordan-Lee-Resume-2026.pdf", "asdf.pdf"], answer: 2, why: "A clear name helps you and the reader find it." },
          { objective: "O5", q: "How can you scan a page with an Android phone?", options: ["Turn on airplane mode", "Call the library", "Use the calculator", "Google Drive's Scan button"], answer: 3, why: "Google Drive on Android has a Scan button." },
          { objective: "O6", q: "A friend tags you in an embarrassing photo. What can help?", options: ["Ignore privacy settings", "Post your address", "Delete your email", "Use privacy settings to control who can tag you"], answer: 3, why: "Privacy settings control who can tag you." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Digital Literacy Basics",
    questions: [
      { objective: "O3", q: "Digital literacy means:", options: ["Typing very fast", "Owning the newest phone", "Being able to find, judge and use information and services online", "Only playing games"], answer: 2, why: "It is about using information and services well and safely." },
      { objective: "O1", q: "A good free place to get online and ask for help is:", options: ["A text link", "A stranger's Wi-Fi", "A pop-up ad", "A public library"], answer: 3, why: "Libraries offer free computers and help." },
      { objective: "O1", q: "Where can you check current Lifeline details?", options: ["Any ad", "A social media comment", "lifelinesupport.org", "A text from a stranger"], answer: 2, why: "Lifeline Support is the program's official site." },
      { objective: "O1", q: "On a public computer you should NOT:", options: ["Read the news", "Do your banking", "Search for job listings", "Look up library hours"], answer: 1, why: "Avoid banking on shared computers." },
      { objective: "O2", q: "Which is the best search?", options: ["\"I need help with my ID I lost\"", "\"Ohio BMV replace ID\"", "\"ID\"", "\"help\""], answer: 1, why: "Key words with a state find the page fast." },
      { objective: "O2", q: "Adding site:.gov to a search:", options: ["Costs money", "Shows only ads", "Deletes your history", "Shows only US government websites"], answer: 3, why: "It limits results to .gov sites." },
      { objective: "O2", q: "Why skip ads at the top of search results?", options: ["They are always the official site", "They may be fake or charge for free services", "They are slower", "They are illegal to click"], answer: 1, why: "Ads are paid and not always official." },
      { objective: "O3", q: "Which question helps you judge a website?", options: ["Is the font big?", "What color is it?", "Who made it?", "How many pictures?"], answer: 2, why: "Knowing the source tells you if you can trust it." },
      { objective: "O3", q: "A site's address changes one letter of a real company's name. It is probably:", options: ["The official site", "A look-alike fake site", "A government site", "A library"], answer: 1, why: "Look-alike addresses are a common trick." },
      { objective: "O3", q: "False information spread on purpose is called:", options: ["A footprint", "Misinformation", "A confirmation", "Disinformation"], answer: 3, why: "Disinformation is on purpose; misinformation is by mistake." },
      { objective: "O3", q: "A shocking photo is going around. Before sharing it, you should:", options: ["Share it fast", "Check trusted news sources", "Add your address", "Print it"], answer: 1, why: "It may be fake or made with AI." },
      { objective: "O4", q: "Before starting a long online form, you should:", options: ["Gather the details and documents it needs", "Close all windows", "Turn off the internet", "Guess every answer"], answer: 0, why: "Being prepared avoids mistakes and timeouts." },
      { objective: "O4", q: "On a computer, which key moves to the next box on a form?", options: ["Tab", "Escape", "Delete", "Print Screen"], answer: 0, why: "Tab moves to the next field." },
      { objective: "O4", q: "A confirmation number is:", options: ["A code that proves your form was received", "Your password", "Your ID number", "An ad"], answer: 0, why: "It proves the form was sent." },
      { objective: "O4", q: "Where is it safe to type your ID number?", options: ["Only on the official site", "On any site from an ad", "In a text reply", "In a social media post"], answer: 0, why: "Private numbers go only to official sites." },
      { objective: "O5", q: "On an iPhone, which apps can scan a document?", options: ["Notes or Files", "Calculator", "Clock", "Weather"], answer: 0, why: "Notes and Files have a scan option." },
      { objective: "O5", q: "For a clear scan you should:", options: ["Lay the page flat in good light", "Crumple the page", "Use a dark room", "Shake the phone"], answer: 0, why: "Flat paper and good light make a readable scan." },
      { objective: "O6", q: "Your digital footprint is:", options: ["Everything about you that is online", "Your shoe size", "Your phone's battery", "A type of password"], answer: 0, why: "It includes your posts and what others post about you." },
      { objective: "O6", q: "Why search your own name?", options: ["To see what employers or landlords might find", "To get free money", "To delete the internet", "To change your password"], answer: 0, why: "It shows your online reputation." },
      { objective: "O6", q: "Which is safe to post publicly?", options: ["A photo of your ID", "Your home address", "That you finished a training course", "Your travel dates while away"], answer: 2, why: "Good news is fine; IDs, addresses and travel plans put you at risk." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Pre-Test: What Do You Already Know?",
    from: [
      1,
      3,
      4,
      6,
      7,
      9,
      11,
      14,
      15,
      17
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      {
        name: "Finding the official site",
        objective: "O2",
        notYet: "The site found is an ad, a look-alike or not the right service.",
        meets: "The official site for the service is found by search, skipping the ads.",
        exceeds: "Also finds the exact page with the form or steps in a few clicks."
      },
      {
        name: "Checking the site",
        objective: "O3",
        notYet: "No reason is given for trusting the site.",
        meets: "Shows how the site was checked, such as a .gov address and the About page.",
        exceeds: "Also checks a second trusted source or the date the page was updated."
      },
      {
        name: "Scan and file name",
        objective: "O5",
        notYet: "The scan is blurred or cut off, or the file is named like IMG_2034.",
        meets: "A clear PDF scan of a practice document with a clear file name.",
        exceeds: "The scan is cropped neatly and copies are deleted from any shared computer."
      },
      {
        name: "Keeping private information safe",
        objective: "O6",
        notYet: "A real ID was scanned, or the three lines say nothing about privacy.",
        meets: "Three lines explain how the site was checked and how private information was kept safe.",
        exceeds: "Also names one privacy setting checked or changed on a social media app."
      }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and score Meets or Exceeds on every rubric row of the final task",
      "Learners who report completing a real online application, such as for a job, ID or benefits, in the 30 days after the course (follow-up survey)",
      "Learners who report avoiding a fake site, scam or false post because they checked it",
      "Learners who go on to a next course, such as Email and Online Communication or a job-search course"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A smartphone with a camera, or a library or job-center computer with internet",
      "A free email address the learner checks often",
      "A practice document to scan, such as a letter or a page the learner wrote (never a real ID)",
      "About 60 minutes in total, in short sessions"
    ],
    facilitatorNotes: [
      "Many learners have no device; run the course in a library or computer lab, or pair learners so each pair has one phone.",
      "Use only practice documents for scanning and uploading in class, and remind learners to delete copies from shared computers.",
      "For learners on parole or probation, remind them to follow any internet or social media rules in their conditions before changing accounts.",
      "Bring screenshots of a real search page with ads so learners can practise telling ads from real results.",
      "Show learners where the nearest free computers and Wi-Fi are and how to ask library staff for help."
    ]
  }
};
