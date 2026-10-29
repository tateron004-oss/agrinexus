"use strict";

// Koach Learn course (shared): "Internet Basics". Goes in Seniors and Technology (first) and Re-Entry, so the examples are everyday: the weather, a doctor's office, a bus schedule, photos of
// grandchildren, a local park. Shape: scripts/koachlearn-courses/README.md; model: re-entry/reentry-ai-digital-confidence.js.

const FTC_TECH = { name: "FTC: How to spot, avoid and report tech support scams", url: "https://consumer.ftc.gov/articles/how-spot-avoid-and-report-tech-support-scams" };

module.exports = {
  id: "internet-basics",
  category: "Seniors and Technology",
  name: "Internet Basics",
  skills: "Connecting to Wi-Fi, Using a web browser, Opening and switching tabs, Searching the web, Reading a web address safely, Saving favorite sites",
  outcome: "connect a phone or computer to Wi-Fi, open a web browser, go to a website by its address, search for what you need, tell a safe web address from a risky one, and save a site you use often so you can get back to it with one tap.",
  about: [
    "The internet lets you check the weather, find a doctor's office hours, read the news, look up a bus schedule and see photos of family. This course starts at the very beginning and assumes no experience.",
    "In Chapter 1 you learn what the internet is, how to connect to Wi-Fi, and how to use a web browser. In Chapter 2 you search for things, learn to read a web address so you can avoid fake sites and scary pop-ups, and save the sites you use most.",
    "Each lesson takes about five minutes. Keep a phone, tablet or computer nearby so you can try each step. A knowledge check ends each chapter and a 20-question quiz ends the course."
  ],
  finalTask: "Plan a simple outing. Connect to Wi-Fi, open a web browser, and search for a place you would like to visit, such as a park, museum or library. Open its official website, check its hours and address, open a second tab with tomorrow's weather, make the text bigger if you need to, and bookmark the official site so you can find it again with one tap.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Adults who are new to the internet or use it only through one or two apps: seniors, their caregivers, people returning to the community, newcomers and anyone who wants to get online with confidence.",
    startingPoint: "Can turn on a phone, tablet or computer and tap or click. Many have never joined a Wi-Fi network themselves, typed a web address, used tabs or bookmarks, or checked whether a web address is real.",
    gap: "Hours, maps, weather, health, benefits and shopping are now found online. People who cannot connect, search and tell a real site from a fake one depend on others, miss information, use up their phone data or fall for fake pop-ups and look-alike sites.",
    constraints: [
      "Reading level: plain words and short sentences; words like router, browser, tab and domain are explained",
      "Devices: a phone, tablet or computer; steps are given for iPhone, Android and computers",
      "Time: about 5 minutes a lesson, about 60 minutes in total",
      "Cost: free Wi-Fi at home, a library or a café; no paid apps",
      "Safety: no banking or private information on public Wi-Fi during practice"
    ],
    prerequisites: "None. Smartphone and Tablet or Basic Computer Skills helps learners who have never used a device."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Without notes", action: "explain what the internet and the web are and the two main ways a device connects", standard: "naming Wi-Fi and mobile data correctly and when Wi-Fi saves your phone plan's data" },
    { id: "O2", condition: "Given a network name and password", action: "join a Wi-Fi network on your phone, tablet or computer and name what to avoid on public Wi-Fi", standard: "connected without help and with banking and private information named as things to avoid" },
    { id: "O3", condition: "Using a web browser", action: "open a website by typing its address, then use the back button, tabs and zoom", standard: "with the right site open, a second tab opened and the text made bigger" },
    { id: "O4", condition: "Given something you need to find", action: "search with a few key words and choose a useful result that is not an ad", standard: "reading the web address before opening the result" },
    { id: "O5", condition: "Given web addresses, a scary pop-up and a site you use often", action: "tell a safe web address from a risky one, close fake pop-ups, and bookmark the official site to get back to it safely", standard: "choosing correctly every time and opening the saved site again with one tap" }
  ],
  chapters: [
    {
      name: "Chapter 1: Getting online",
      lessons: [
        {
          objectives: ["O1"],
          title: "What the internet is",
          minutes: 4,
          goal: "Explain the internet, the web and how a device connects.",
          text: [
            "The internet is a huge network that links computers and phones all over the world so they can share information. The World Wide Web, or the web, is the part you visit with a web browser: websites with pages, pictures and videos. Email and video calls also travel over the internet.",
            "Your device connects in one of two main ways. Wi-Fi is a wireless connection from a box called a router, at home, at a library or at a café. Mobile data comes from your phone company's cell towers and is part of your phone plan.",
            "Wi-Fi at home usually does not use up your phone plan's data, so it is a good choice for videos and big downloads."
          ],
          words: [["Internet", "a worldwide network that connects computers and phones."], ["Web (World Wide Web)", "the websites you visit with a browser."], ["Router", "the box that sends out a Wi-Fi signal."], ["Mobile data", "internet from your phone company's cell towers, part of your phone plan."]],
          slides: [
            { title: "The internet and the web", bullets: ["Internet: a worldwide network of devices", "Web: the websites you visit with a browser", "Email and video calls use the internet too"] },
            { title: "Two ways to connect", bullets: ["Wi-Fi: wireless, from a router", "Mobile data: from cell towers, part of your plan"] },
            { title: "Tip", bullets: ["Use Wi-Fi at home for videos and big downloads", "It saves your phone plan's data"] }
          ],
          tryIt: "On your phone or tablet, look at the top of the screen. Find the Wi-Fi symbol (curved lines) or the mobile data symbol (bars or letters like 5G). Which one is on right now?",
          youCanNow: "explain what the internet and the web are, and tell whether your device is on Wi-Fi or mobile data.",
          quickCheck: [
            { objective: "O1", q: "What is mobile data?", options: ["A box in your home", "A list of websites you saved", "Internet from your phone company's cell towers, part of your phone plan", "A type of web browser"], answer: 2, why: "Mobile data comes from cell towers and is part of your phone plan." },
            { objective: "O1", q: "You want to watch a long video on your phone at home. Which connection would you use?", options: ["Home Wi-Fi, so you do not use up your phone plan's data", "Mobile data, because it is always free", "No connection is needed for videos", "A bookmark"], answer: 0, why: "Home Wi-Fi usually does not use up your phone plan's data." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Connecting to Wi-Fi",
          minutes: 5,
          goal: "Join a Wi-Fi network on a phone, tablet or computer.",
          text: [
            "To join Wi-Fi, you need the network's name and its password. At home, both are often printed on a sticker on the router. At a library or café, ask staff or look for a sign.",
            "On an iPhone or iPad: open Settings, tap Wi-Fi, tap the network name and type the password. On Android: open Settings, tap Network and internet or Connections, then Wi-Fi, choose the network and type the password. On a computer: click the Wi-Fi symbol near the clock, pick the network and type the password.",
            "Public Wi-Fi is handy, but other people share it. On public Wi-Fi, avoid banking and do not type private information. Only join networks whose names you were given by staff, not ones with odd names."
          ],
          steps: ["Find the network name and password (router sticker, staff or a sign).", "Open Settings, then Wi-Fi (on a computer, click the Wi-Fi symbol near the clock).", "Tap or click the network name.", "Type the password carefully; capital letters matter.", "Wait for the Wi-Fi symbol to appear at the top."],
          words: [["Network name", "the name a Wi-Fi connection shows in the list, also called the SSID."], ["Wi-Fi password", "the code you type to join a Wi-Fi network."], ["Public Wi-Fi", "Wi-Fi shared by many people in places like libraries and cafés."]],
          slides: [
            { title: "You need two things", bullets: ["The network name", "The password (router sticker, staff or a sign)"] },
            { title: "How to join", bullets: ["Phone or tablet: Settings, then Wi-Fi", "Computer: Wi-Fi symbol near the clock", "Pick the network, type the password"] },
            { title: "Public Wi-Fi safety", bullets: ["No banking or private information", "Join only the name staff gave you"] }
          ],
          tryIt: "Open your Wi-Fi settings and find the list of networks. If you are at home or a library, join the right one. Check that the Wi-Fi symbol appears at the top.",
          youCanNow: "join a Wi-Fi network and use public Wi-Fi safely.",
          quickCheck: [
            { objective: "O2", q: "What two things do you need to join a Wi-Fi network?", options: ["Your email and phone number", "The network's name and its password", "A browser and a bookmark", "A tab and a search engine"], answer: 1, why: "You choose the network by its name and type its password." },
            { objective: "O2", q: "At a café, you see two networks: one the staff named and one called \"FREE_FAST_WIFI_123\". What would you do?", options: ["Join the odd one because it says free", "Join both at once", "Type your bank details to test the odd one", "Join only the network the staff gave you"], answer: 3, why: "Only join networks whose names staff gave you, not ones with odd names." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Using a web browser",
          minutes: 5,
          goal: "Open a website by its address and move around with the back button and tabs.",
          text: [
            "A web browser is the app you use to visit websites. Common ones are Chrome, Safari, Edge and Firefox. At the top is the address bar, a long box where you type a web address like weather.gov and press Enter or Go.",
            "Useful buttons: the back arrow returns to the page you were on; the circle arrow reloads the page. Tabs let you have several pages open at once, like folders on a desk. Open a new tab with the plus (+) button and switch by tapping or clicking a tab.",
            "If words are too small, you can zoom. On a computer, hold Ctrl and press + (Command and + on a Mac); Ctrl and - makes it smaller. On a phone, spread two fingers apart on the screen."
          ],
          steps: ["Open the browser (Chrome, Safari, Edge or Firefox).", "Tap the address bar at the top.", "Type a web address, such as weather.gov, and press Enter or Go.", "Use the back arrow to return.", "Press + to open a new tab.", "Zoom: Ctrl and + (Command and + on Mac), or spread two fingers on a phone."],
          words: [["Web browser", "the app you use to visit websites, like Chrome, Safari, Edge or Firefox."], ["Address bar", "the box at the top of the browser where you type a web address."], ["Tab", "one open page in the browser; you can have several open at once."], ["Zoom", "make what is on the screen bigger or smaller."]],
          slides: [
            { title: "The browser", bullets: ["Chrome, Safari, Edge or Firefox", "Address bar at the top", "Type an address, press Enter or Go"] },
            { title: "Handy buttons", bullets: ["Back arrow: the page before", "Circle arrow: reload", "+ opens a new tab"] },
            { title: "Make it bigger", bullets: ["Computer: Ctrl and + (Command and + on Mac)", "Phone: spread two fingers apart"] }
          ],
          tryIt: "Open a browser and type weather.gov in the address bar. Then open a new tab and go to your local library's website. Switch between the two tabs and make the text bigger on one of them.",
          youCanNow: "open websites by their address, use the back button, switch tabs and make text bigger.",
          quickCheck: [
            { objective: "O3", q: "What does the circle arrow in a browser do?", options: ["Closes the browser", "Opens a new tab", "Saves a bookmark", "Reloads the page"], answer: 3, why: "The circle arrow reloads the page you are on." },
            { objective: "O3", q: "You are reading a recipe and want to check the weather without losing the recipe. What would you do?", options: ["Open a new tab with the plus (+) button", "Close the recipe page", "Turn off Wi-Fi", "Restart the device"], answer: 0, why: "Tabs let you keep several pages open at once." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Getting online",
        questions: [
          { objective: "O1", q: "What is the web?", options: ["A type of cable", "A spider's home only", "Your phone bill", "The websites you visit with a browser"], answer: 3, why: "The web is the websites you visit with a browser." },
          { objective: "O2", q: "Where is a home Wi-Fi password often printed?", options: ["On the TV remote", "On a sticker on the router", "On your phone case", "In the newspaper"], answer: 1, why: "Routers often have the name and password on a sticker." },
          { objective: "O2", q: "On a computer, where do you usually click to join Wi-Fi?", options: ["The trash can", "The Wi-Fi symbol near the clock", "The printer", "The camera"], answer: 1, why: "The Wi-Fi symbol near the clock shows the networks." },
          { objective: "O2", q: "You are on café Wi-Fi. What should you avoid?", options: ["Checking the weather", "Reading the news", "Online banking", "Looking up a recipe"], answer: 2, why: "Public Wi-Fi is shared, so avoid banking and private details." },
          { objective: "O3", q: "Where do you type a web address like weather.gov?", options: ["In the camera", "In a text message", "In the calculator", "In the address bar at the top of the browser"], answer: 3, why: "The address bar takes you to a website." }
        ]
      }
    },
    {
      name: "Chapter 2: Finding things and staying safe",
      lessons: [
        {
          objectives: ["O4"],
          title: "Searching the web",
          minutes: 5,
          goal: "Search for something specific and open a useful result.",
          text: [
            "If you do not know a web address, search for it. Type a few key words in the address bar or on a search site like Google or Bing, then press Enter. For example: \"Springfield public library hours\".",
            "The results page shows a list of links. Each has a blue title, the web address in small print, and a short description. Read the web address before you tap. Results at the top marked \"Sponsored\" or \"Ad\" are paid ads.",
            "You can also search with your voice. Tap the microphone in the search box and say what you want, such as \"weather tomorrow\"."
          ],
          steps: ["Tap the address bar or a search box.", "Type a few key words, such as the place, the town and what you want.", "Press Enter or the search button.", "Skip results marked Sponsored or Ad.", "Read the web address, then tap the result you want."],
          words: [["Search", "type words to find web pages about them."], ["Results", "the list of web pages the search finds."], ["Link", "words or a picture you tap to go to another page."]],
          slides: [
            { title: "Search with key words", bullets: ["\"Springfield public library hours\"", "Type in the address bar or on Google or Bing"] },
            { title: "Reading results", bullets: ["Blue title, web address, short description", "Sponsored or Ad = paid", "Read the address before you tap"] },
            { title: "Use your voice", bullets: ["Tap the microphone", "Say: \"weather tomorrow\""] }
          ],
          tryIt: "Search for the opening hours of a place near you, such as a pharmacy or a park. Skip any ads, open the official result and find the hours.",
          youCanNow: "search the web and pick a useful, non-ad result.",
          quickCheck: [
            { objective: "O4", q: "On a results page, what does the small print under each blue title show?", options: ["The web address", "The weather", "Your password", "The page's price"], answer: 0, why: "Each result shows its web address in small print, so you can read it before you tap." },
            { objective: "O4", q: "Your hands are busy and you want tomorrow's weather. What would you do?", options: ["Type a long story into the search box", "Open a bookmark for a shopping site", "Tap the microphone in the search box and say \"weather tomorrow\"", "Restart the phone"], answer: 2, why: "You can search with your voice by tapping the microphone." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Reading a web address and avoiding scams",
          minutes: 5,
          goal: "Tell a safe web address from a risky one and handle scary pop-ups.",
          text: [
            "A web address has a main part, the domain, just before the first single slash, such as irs.gov or amazon.com. That main part tells you who runs the site. Fake sites use look-alike names such as \"amaz0n-deals.com\" or \"irs-refund.help\".",
            "Look for https and a lock symbol at the start of the address. It means the connection is private, but scammers can have it too, so the domain name still matters most.",
            "Some fake pop-ups say your computer has a virus and give a phone number to call. The FTC says real security warnings will never ask you to call a phone number, and real tech companies will not call or text you about a problem. Do not call. Close the tab or browser; if it will not close, restart the device. If you are worried, ask someone you trust."
          ],
          steps: ["Find the domain: the name just before the first single slash.", "Check that it is the real name you expected.", "Look for https and the lock, but do not trust them alone.", "Scary pop-up with a phone number? Do not call.", "Close the tab or restart the device.", "Report tech support scams at ReportFraud.ftc.gov."],
          words: [["Domain", "the main name in a web address that tells you who runs the site, like irs.gov."], ["Pop-up", "a small window that suddenly appears on top of a web page."], ["Tech support scam", "a fake warning or call that says your device has a problem to get your money or access."]],
          sources: [FTC_TECH],
          slides: [
            { title: "Find the domain", bullets: ["The name just before the first single slash", "irs.gov is real; irs-refund.help is not"] },
            { title: "https and the lock", bullets: ["The connection is private", "Scammers can have it too", "The domain name matters most"] },
            { title: "Scary pop-ups (FTC)", bullets: ["Real warnings never ask you to call a number", "Do not call", "Close the tab or restart the device"] }
          ],
          tryIt: "Look at three web addresses on your screen or in your email. For each one, point to the domain and say who runs the site.",
          youCanNow: "read a web address to see who runs a site and deal safely with fake virus pop-ups.",
          quickCheck: [
            { objective: "O5", q: "Which part of a web address tells you who runs the site?", options: ["The https at the start", "The words after the first single slash", "The domain, just before the first single slash", "The lock symbol"], answer: 2, why: "The domain, such as irs.gov, tells you who runs the site." },
            { objective: "O5", q: "A pop-up says your computer has a virus and shows a number to call. It will not close. What would you do?", options: ["Call the number right away", "Restart the device and do not call", "Type your card number to pay for a fix", "Leave it on the screen for days"], answer: 1, why: "Real security warnings never ask you to call; restart if the pop-up will not close." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Saving your favorite sites",
          minutes: 4,
          goal: "Bookmark a website and open it again with one tap.",
          text: [
            "A bookmark (also called a favorite) saves a website so you can come back without searching again. It is the safest way back to sites you use often, like your bank, pharmacy or a news site, because you skip fake search results.",
            "On a computer, click the star at the end of the address bar. On an iPhone or iPad in Safari, tap the Share button and choose Add Bookmark. In Chrome on a phone, open the menu (three dots) and tap the star. On many phones you can also choose \"Add to Home screen\" to make an icon like an app.",
            "To open a bookmark later, open the bookmarks list in the browser menu, or tap the icon on your home screen."
          ],
          steps: ["Open the official website you want to save.", "Computer: click the star in the address bar.", "Safari on iPhone or iPad: Share button, then Add Bookmark.", "Chrome on a phone: three-dot menu, then the star.", "To open it later: go to Bookmarks in the menu, or tap the home screen icon."],
          words: [["Bookmark / favorite", "a saved link to a website so you can open it again quickly."], ["Home screen", "the main screen of a phone or tablet that shows app icons."]],
          slides: [
            { title: "Why bookmark?", bullets: ["Back to a site in one tap", "Skips fake search results", "Great for bank, pharmacy, news"] },
            { title: "How to bookmark", bullets: ["Computer: the star in the address bar", "Safari: Share, then Add Bookmark", "Chrome phone: three dots, then the star"] },
            { title: "Open it again", bullets: ["Bookmarks in the browser menu", "Or tap the home screen icon"] }
          ],
          tryIt: "Final task: plan an outing. Search for a park, museum or library, open its official site, check its hours and address, open tomorrow's weather in a second tab, make the text bigger if needed, and bookmark the official site.",
          youCanNow: "go online on your own, find what you need, avoid fake sites and save your favorite sites.",
          quickCheck: [
            { objective: "O5", q: "On a computer, what do you click to bookmark a website?", options: ["The back arrow", "The circle arrow", "The plus (+) button", "The star at the end of the address bar"], answer: 3, why: "The star at the end of the address bar saves a bookmark." },
            { objective: "O5", q: "You order medicine from your pharmacy's website every month. How would you get back to it safely?", options: ["Search for it every time and tap the first ad", "Bookmark the official site and open it from your bookmarks", "Click a link from a text message", "Guess the address each time"], answer: 1, why: "A bookmark from the official site skips fake search results." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Finding things and staying safe",
        questions: [
          { objective: "O4", q: "Which search is clearest?", options: ["\"place\"", "\"Springfield library hours\"", "\"open?\"", "\"help me find it please now\""], answer: 1, why: "A few key words with the place and what you want work best." },
          { objective: "O5", q: "In www.irs.gov/refunds, what is the domain?", options: ["www", "refunds", "irs.gov", "https"], answer: 2, why: "The domain is the name just before the first single slash." },
          { objective: "O5", q: "A pop-up says your computer has a virus and to call a number now. What do you do?", options: ["Call the number", "Pay with a gift card", "Give them remote access", "Do not call; close the tab or restart"], answer: 3, why: "The FTC says real warnings never ask you to call a number." },
          { objective: "O5", q: "A website shows https and a lock. That means:", options: ["It is a government site", "It is definitely honest", "The connection is private, but you still check the domain", "It is free"], answer: 2, why: "Scammers can have https too; the domain matters most." },
          { objective: "O5", q: "What is the safest way back to your pharmacy's website each month?", options: ["Click an ad", "A bookmark you saved from the official site", "A link in a text from a stranger", "Guess the address"], answer: 1, why: "A bookmark skips fake search results and links." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Internet Basics",
    questions: [
      { objective: "O1", q: "The internet is:", options: ["A single website", "A TV channel", "A phone book", "A worldwide network that connects computers and phones"], answer: 3, why: "It links devices all over the world." },
      { objective: "O1", q: "Wi-Fi comes from:", options: ["A battery", "The TV", "A router", "A printer"], answer: 2, why: "A router sends out the Wi-Fi signal." },
      { objective: "O1", q: "Mobile data is:", options: ["A browser", "Free Wi-Fi at the library", "A kind of email", "Internet from cell towers, part of your phone plan"], answer: 3, why: "Mobile data comes through your phone company." },
      { objective: "O1", q: "Why use home Wi-Fi for videos?", options: ["Videos only play on Wi-Fi", "It usually saves your phone plan's data", "It is required by law", "It makes the phone lighter"], answer: 1, why: "Home Wi-Fi usually does not use up your plan's data." },
      { objective: "O2", q: "To join Wi-Fi you need:", options: ["A printer", "Your bank number", "The network name and password", "A new phone"], answer: 2, why: "Name plus password lets you join." },
      { objective: "O2", q: "On an iPhone, Wi-Fi is found in:", options: ["Clock", "Photos", "Calculator", "Settings"], answer: 3, why: "Settings, then Wi-Fi." },
      { objective: "O2", q: "On public Wi-Fi, which is a bad idea?", options: ["Reading the news", "Online banking", "Checking a map", "Looking up hours"], answer: 1, why: "Public Wi-Fi is shared; avoid private tasks." },
      { objective: "O3", q: "Which of these is a web browser?", options: ["Calculator", "Chrome", "Camera", "Clock"], answer: 1, why: "Chrome, Safari, Edge and Firefox are browsers." },
      { objective: "O3", q: "What does the back arrow in a browser do?", options: ["Deletes the website", "Closes the computer", "Goes to the page you were on before", "Prints the page"], answer: 2, why: "Back returns to the previous page." },
      { objective: "O3", q: "Tabs let you:", options: ["Turn off Wi-Fi", "Pay bills automatically", "Charge the battery", "Keep several pages open at once"], answer: 3, why: "Each tab is one open page." },
      { objective: "O3", q: "The words on a web page are too small on a computer. Press:", options: ["Delete", "Ctrl and + (Command and + on Mac)", "Escape", "Shift and 0"], answer: 1, why: "Ctrl and + zooms in." },
      { objective: "O3", q: "On a phone, how do you make a page bigger?", options: ["Spread two fingers apart on the screen", "Shake the phone", "Turn it off", "Press the volume button"], answer: 0, why: "Spreading two fingers zooms in." },
      { objective: "O4", q: "Search results marked \"Sponsored\" are:", options: ["Paid ads", "Always the official site", "Government pages", "Virus warnings"], answer: 0, why: "Sponsored means someone paid for it." },
      { objective: "O4", q: "Before tapping a search result, you should:", options: ["Read its web address", "Close the browser", "Restart the phone", "Tap every result"], answer: 0, why: "The address shows who runs the site." },
      { objective: "O4", q: "How can you search without typing?", options: ["Tap the microphone and speak", "Shake the phone", "Use the calculator", "Turn up the volume"], answer: 0, why: "Voice search lets you say what you want." },
      { objective: "O5", q: "Which address is most likely fake?", options: ["irs.gov", "amazon.com", "amaz0n-deals.com", "weather.gov"], answer: 2, why: "A zero in place of an O is a look-alike trick." },
      { objective: "O5", q: "https and a lock tell you:", options: ["The connection is private", "The site is honest for sure", "The site is free", "The site is a bank"], answer: 0, why: "They protect the connection, not honesty." },
      { objective: "O5", q: "A real security warning on your computer will:", options: ["Never ask you to call a phone number", "Ask for gift cards", "Ask you to call right away", "Ask for your bank password"], answer: 0, why: "The FTC says real warnings never ask you to call a number." },
      { objective: "O5", q: "A pop-up will not close. What do you do?", options: ["Restart the device", "Call the number on it", "Type your password", "Pay the fee"], answer: 0, why: "Restarting clears the pop-up safely." },
      { objective: "O5", q: "A bookmark is:", options: ["A saved link to a website", "A paper page holder only", "A virus", "A password"], answer: 0, why: "Bookmarks bring you back to a site quickly." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Pre-Test: What Do You Already Know?",
    from: [
      0,
      4,
      6,
      8,
      10,
      12,
      13,
      15,
      17,
      19
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      {
        name: "Connecting to Wi-Fi",
        objective: "O2",
        notYet: "The device is not connected, or a network with an unknown name was joined.",
        meets: "The device is connected to a known Wi-Fi network without help.",
        exceeds: "Also explains what to avoid on public Wi-Fi."
      },
      {
        name: "Finding the official site",
        objective: "O4",
        notYet: "The site opened is an ad or not the place's own site.",
        meets: "The place's official website is found by search, and its hours and address are found.",
        exceeds: "The web address was read and checked before tapping."
      },
      {
        name: "Using the browser",
        objective: "O3",
        notYet: "Only one page was opened, or the learner could not get back to the first page.",
        meets: "A second tab shows tomorrow's weather, and the learner switches between tabs.",
        exceeds: "Also zooms the text to a comfortable size and uses the back button."
      },
      {
        name: "Safe address and bookmark",
        objective: "O5",
        notYet: "No bookmark, or a look-alike or ad site was bookmarked.",
        meets: "The official site is bookmarked and opened again with one tap.",
        exceeds: "Also explains how the domain shows the site is real."
      }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and score Meets or Exceeds on every rubric row of the outing plan",
      "Learners who report using the internet on their own for a real need, such as hours, weather or a health site, in the 30 days after the course (follow-up survey)",
      "Learners who report closing a fake pop-up or avoiding a look-alike site",
      "Learners who go on to a next course, such as Email and Online Communication or Digital Literacy Basics"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A phone, tablet or computer the learner can practise on",
      "A Wi-Fi network name and password (home, library or the program's own)",
      "Paper and pen to note the place's hours and address",
      "About 60 minutes in total, in short sessions"
    ],
    facilitatorNotes: [
      "Write the program's Wi-Fi name and password on the board so learners join the right network and not a look-alike.",
      "Group learners by device (iPhone, Android or computer) so the steps on screen match what they see.",
      "Use a local park, library or museum for the outing task so the official site is easy to check.",
      "Show a picture of a fake virus pop-up so learners recognize it, but never open a real scam site in class.",
      "Go slowly with older learners: let them do every tap themselves rather than doing it for them."
    ]
  }
};
