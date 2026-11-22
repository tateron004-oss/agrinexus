"use strict";

// Koach Learn course: Undeserved Community -> "AI Web Development". Skill-building course: by the end the student can DO the skill in `outcome`.
// Two chapters of three micro-lessons; a knowledge check closes each chapter; a 20-question quiz closes the course. Shape: scripts/koachlearn-courses/README.md.

module.exports = {
  id: "underserved-ai-web-development",
  category: "Undeserved Community",
  name: "AI Web Development",
  skills: "Planning a one-page website, Building a free site with Google Sites, Writing web text with AI, Reading and editing simple HTML, Adding AI-written code safely, Publishing and checking a site",
  outcome: "plan, build and publish a free one-page website for a family business, club or community group with Google Sites, using a free AI assistant to write the words and a small piece of HTML that you read, test and fix yourself.",
  about: [
    "A website helps people find a church group, a block association, a tutoring program or a small family business. You do not need money or a computer science degree to make one.",
    "In this course you will plan a one-page site, build it with Google Sites (free with a Google account), use a free AI assistant to help write the words, and learn enough HTML, the language of web pages, to read, test and fix a small piece of code the AI writes for you.",
    "You can work on a home or library computer. Each lesson takes about five minutes and ends with a \"Try it now\" task that builds your real site. There is a knowledge check after each chapter and a 20-question quiz at the end."
  ],
  finalTask: "Publish a one-page Google Site for a real or practice community group or small business. It must have a clear title, a short AI-assisted \"About us\" section that you edited in your own words, a small HTML box with hours and contact information that you tested and fixed, no private home address or personal phone number, and it must look right on a phone.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Adults and young adults in underserved communities who want a website for a church group, block association, tutoring program, club or small family business, and people curious about a first step into web work.",
    startingPoint: "Use a phone and browse the web. Have never built a website or read HTML, and may have a Google account but have not used Google Sites. Some have used an AI assistant a little.",
    gap: "Groups and small businesses that cannot be found online miss members and customers, and paying for a website is out of reach. Learners need to plan and publish a free site, use AI for words and code while checking every fact, and protect private information.",
    constraints: [
      "Reading level: plain words and short sentences (about grade 6 to 7)",
      "Devices: a computer is needed to build in Google Sites; a phone to check the live site",
      "Cost: free Google account, Google Sites and online HTML editor only",
      "Safety: test all AI code, simple HTML only, and no scripts you did not ask for",
      "Privacy: no home address, personal phone number or children's photos without written permission"
    ],
    prerequisites: "None. Learners new to AI assistants can take \"Introduction to AI and Digital Empowerment\" first."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Given a real or practice group or business", action: "plan a one-page website with its audience, one action for visitors, sections and photos", standard: "with four or five sections and only photos you may use" },
    { id: "O2", condition: "Using a free Google account", action: "create a Google Site with a title, a text box for each planned section and a readable theme", standard: "without help" },
    { id: "O3", condition: "Given your group's real facts", action: "write an About Us section with an AI assistant and edit it in your own words", standard: "removing every wrong or made-up fact" },
    { id: "O4", condition: "Given a short piece of HTML in an online editor", action: "identify its tags and change the words between them", standard: "so the page still runs correctly" },
    { id: "O5", condition: "Using a free AI assistant", action: "ask for a simple HTML box, test it, fix one problem and embed it in your Google Site", standard: "with every fact right and no scripts you did not ask for" },
    { id: "O6", condition: "When your site is ready", action: "publish it, check it on a phone and remove private information", standard: "with working links, readable text and no private address, personal number or unapproved photos" }
  ],
  chapters: [
    {
      name: "Chapter 1: Plan and build your site",
      lessons: [
        {
          objectives: ["O1"],
          title: "How websites work, and planning your page",
          minutes: 4,
          goal: "Write a simple plan for a one-page website.",
          text: [
            "A website is a set of pages stored on a computer called a server. When you type an address, your browser asks that server for the page and shows it to you.",
            "Before building, plan. Answer four questions: Who is the site for? What is the one thing visitors should do (call, visit, sign up, donate)? What sections do you need? What pictures can you use with permission?",
            "Most small community sites need just a few sections: a title, an \"About us\", what you offer, hours and how to reach you."
          ],
          steps: ["Write who the site is for.", "Write the one action you want visitors to take.", "List four or five sections.", "List photos you own or have permission to use."],
          words: [["Website", "one or more pages people can visit on the internet."], ["Server", "a computer that stores websites and sends pages to visitors."], ["Browser", "the program you use to visit websites, like Chrome, Edge or Safari."]],
          slides: [
            { title: "How a website works", bullets: ["Pages are stored on a server", "Your browser asks for the page", "The server sends it back"] },
            { title: "Plan with four questions", bullets: ["Who is it for?", "What should visitors do?", "What sections do you need?", "Which photos can you use?"] },
            { title: "A simple one-page site", bullets: ["Title", "About us and what you offer", "Hours and how to reach you"] }
          ],
          tryIt: "Choose a real or practice group (for example a youth tutoring club or a family food truck). Write your plan: who it is for, the one action, five sections and two photos you can use.",
          youCanNow: "explain how a website reaches you and plan a one-page site.",
          quickCheck: [
            { objective: "O1", q: "What is a server?", options: ["A computer that stores websites and sends pages", "The screen you look at", "A web address", "A type of phone"], answer: 0, why: "A server stores web pages and sends them when a browser asks." },
            { objective: "O1", q: "Your food truck site should get people to come eat. What is the one action?", options: ["Read the history of tacos", "Find where and when the truck will be", "Leave a long comment", "Download a file"], answer: 1, why: "The one action is what you most want visitors to do, like visit the truck." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Building a free site with Google Sites",
          minutes: 5,
          goal: "Create a Google Site with a title and your planned sections.",
          text: [
            "Google Sites is a free website builder that comes with a Google account. You build by clicking and typing, not by writing code.",
            "Open sites.google.com on a computer and start a new site, either blank or from a template. Give the site a name and type a page title. On the right side you will find Insert (to add text boxes, images and more), Pages and Themes.",
            "Add a text box for each section from your plan. Pick a theme with easy-to-read colors. Google Sites saves your work as you go."
          ],
          steps: ["Go to sites.google.com and sign in with your Google account.", "Start a new site from blank or a template.", "Type the site name and page title.", "Use Insert on the right to add a text box for each section.", "Choose an easy-to-read theme."],
          words: [["Template", "a ready-made design you fill in with your own words."], ["Theme", "the colors and fonts used across your site."]],
          sources: [{ name: "Google Sites Help: Create, name or copy a site", url: "https://support.google.com/sites/answer/6372878" }],
          slides: [
            { title: "Google Sites", bullets: ["Free with a Google account", "Build by clicking and typing", "Saves as you go"] },
            { title: "Start your site", bullets: ["Open sites.google.com", "Start blank or from a template", "Type a site name and page title"] },
            { title: "Add your sections", bullets: ["Insert on the right: text boxes, images", "One text box per section", "Pick an easy-to-read theme"] }
          ],
          tryIt: "Start a new Google Site for your group. Add the title and an empty text box for each section in your plan, and choose a theme.",
          youCanNow: "build the frame of a free website with Google Sites.",
          quickCheck: [
            { objective: "O2", q: "What does a theme in Google Sites change?", options: ["Your web address", "Who can see the site", "Colors and fonts", "The site's facts"], answer: 2, why: "A theme sets the colors and fonts of your site." },
            { objective: "O2", q: "You want to add an \"Hours\" section to your Google Site. What do you click?", options: ["Publish", "Themes", "Pages", "Insert, then a text box"], answer: 3, why: "Insert on the right side adds text boxes, images and more." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Writing your web text with AI",
          minutes: 5,
          goal: "Use a free AI assistant to draft your About section, then make it your own.",
          text: [
            "A free AI assistant such as ChatGPT, Microsoft Copilot or Google Gemini can write a first draft of your web text. Give it the facts and the tone you want.",
            "Example prompt: \"Write a friendly 60-word About Us for a free after-school tutoring club at a community center. We help kids in grades 3 to 8 with reading and math. Use simple words.\"",
            "Then edit. Fix any fact the AI got wrong or made up, cut words that do not sound like you, and never let it invent prices, awards or promises you cannot keep. Your site speaks for your group, so you are responsible for every word."
          ],
          steps: ["Give the AI your group's real facts and the tone you want.", "Ask for a short draft with a word limit.", "Fix wrong or made-up facts.", "Rewrite parts so they sound like you, then paste into your site."],
          words: [["Draft", "a first version you will improve."], ["Tone", "how writing sounds: friendly, serious, cheerful."]],
          slides: [
            { title: "AI writes the first draft", bullets: ["Give it real facts", "Say the tone and the word limit"] },
            { title: "Example prompt", bullets: ["\"Write a friendly 60-word About Us for a free", "after-school tutoring club for grades 3 to 8.", "Use simple words.\""] },
            { title: "You edit it", bullets: ["Fix wrong or made-up facts", "No invented prices, awards or promises", "Make it sound like you"] }
          ],
          tryIt: "Ask an AI assistant for a 60-word About Us for your group. Fix one fact or phrase, then paste the edited version into your Google Site.",
          youCanNow: "use AI to draft web text and edit it so it is true and sounds like you.",
          quickCheck: [
            { objective: "O3", q: "Why give the AI a word limit for your About Us?", options: ["So the draft is short and fits your page", "So it costs less", "So it uses harder words", "So it adds more facts"], answer: 0, why: "A word limit keeps the draft short enough for a small website." },
            { objective: "O3", q: "The AI's draft says your tutoring is \"guaranteed to raise grades\". What do you do?", options: ["Keep it; it sounds good", "Remove the promise you cannot keep", "Make it bigger and bold", "Add a second guarantee"], answer: 1, why: "Never let the AI add promises you cannot keep; you are responsible for every word." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Plan and build your site",
        questions: [
          { objective: "O1", q: "What does a server do?", options: ["Stores websites and sends pages to visitors", "Prints pages", "Charges your phone", "Writes your text"], answer: 0, why: "A server is the computer that holds the site and sends pages." },
          { objective: "O1", q: "Which question belongs in your site plan?", options: ["What is my password?", "What one thing should visitors do?", "What is my bank number?", "What did I eat today?"], answer: 1, why: "Knowing the one action helps you design the page." },
          { objective: "O2", q: "What do you need to use Google Sites for free?", options: ["A paid web host", "A computer science degree", "A Google account", "A credit card"], answer: 2, why: "Google Sites comes free with a Google account." },
          { objective: "O2", q: "In Google Sites, where do you add text boxes and images?", options: ["The trash can", "The address bar", "The printer", "Insert, on the right side"], answer: 3, why: "The Insert panel on the right adds content." },
          { objective: "O3", q: "The AI's draft says your club \"won a national award\" but it did not. What do you do?", options: ["Remove it before publishing", "Keep it, it sounds good", "Make it bigger", "Ask AI for more awards"], answer: 0, why: "You are responsible for every word; remove made-up facts." }
        ]
      }
    },
    {
      name: "Chapter 2: Code, publish and check",
      lessons: [
        {
          objectives: ["O4"],
          title: "Reading simple HTML",
          minutes: 5,
          goal: "Read a short piece of HTML and change its words safely.",
          text: [
            "HTML is the language web pages are written in. It uses tags in angle brackets. Most tags come in pairs: an opening tag like <h2> and a closing tag like </h2>, with words in between.",
            "Common tags: <h2> for a heading, <p> for a paragraph, <ul> and <li> for a bulleted list, <strong> for bold, and <a href=\"...\"> for a link.",
            "You can practice for free, with no account, in an online editor such as the W3Schools Tryit Editor: paste HTML on the left, click Run, and see the page on the right. Change only the words between tags at first, then run it again."
          ],
          steps: ["Open a free online HTML editor.", "Paste a short piece of HTML.", "Click Run to see the result.", "Change the words between two tags and run it again."],
          words: [["HTML", "the language used to write web pages."], ["Tag", "a label in angle brackets, like <p>, that tells the browser what something is."], ["Closing tag", "the end tag with a slash, like </p>."]],
          slides: [
            { title: "HTML builds web pages", bullets: ["Tags in angle brackets", "Opening <p> ... closing </p>"] },
            { title: "Tags to know", bullets: ["<h2> heading, <p> paragraph", "<ul> and <li> bulleted list", "<strong> bold, <a> link"] },
            { title: "Practice for free", bullets: ["Online editor like W3Schools Tryit", "Paste, Run, look", "Change words between tags"] }
          ],
          tryIt: "In a free online HTML editor, type <h2>Our Hours</h2><p>Mondays 3 to 6 pm</p>. Click Run, change the hours, and run it again.",
          youCanNow: "read simple HTML tags and safely change the words inside them.",
          quickCheck: [
            { objective: "O4", q: "Which tag makes a bulleted list item?", options: ["<p>", "<h2>", "<li>", "<strong>"], answer: 2, why: "<li> marks each item in a bulleted list, inside <ul>." },
            { objective: "O4", q: "You want to change \"Mondays\" to \"Tuesdays\" in <p>Mondays 3 to 6 pm</p>. What do you change?", options: ["The <p> tag", "The </p> tag", "Delete the tags", "Only the word between the tags"], answer: 3, why: "At first, change only the words between tags so the HTML still works." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Getting AI to write code, then testing and fixing it",
          minutes: 6,
          goal: "Ask AI for a small HTML box, test it, fix one problem and add it to your site.",
          text: [
            "AI assistants can write HTML. Be specific: \"Write simple HTML only, no JavaScript, for a box with the heading Hours and Contact, a list of our hours (Mon to Thu 3 to 6 pm), and a link to our email. Use a light background and large text.\"",
            "Always test AI code before you use it. Paste it into the online editor, click Run and check: Is every fact right? Does the link work? Is the text easy to read? If something is wrong, tell the AI exactly what to fix, or fix the words yourself.",
            "Do not paste code you do not understand from strangers or from AI that includes scripts you did not ask for. To add your box to Google Sites: click Insert, then Embed, choose Embed code, paste your HTML, click Next and Insert."
          ],
          steps: ["Ask AI for simple HTML only, with your real hours and contact.", "Test it in the online editor.", "Fix one thing: a fact, a link or the text size.", "In Google Sites: Insert, Embed, Embed code, paste, Next, Insert."],
          words: [["Code", "instructions written for a computer, like HTML."], ["Embed", "to place a piece of code or content inside a page."], ["Bug", "a mistake in code that makes it work wrong."]],
          sources: [{ name: "Google Sites Help: Embed HTML or JavaScript in your site", url: "https://support.google.com/sites/answer/90569" }],
          slides: [
            { title: "Ask AI for code clearly", bullets: ["Simple HTML only, no JavaScript", "Your real hours and contact", "Large, easy-to-read text"] },
            { title: "Test before you use", bullets: ["Paste and Run in the editor", "Facts right? Link works? Easy to read?", "Fix it or ask AI to fix one thing"] },
            { title: "Add it to Google Sites", bullets: ["Insert, then Embed", "Choose Embed code and paste", "Next, then Insert"] }
          ],
          tryIt: "Ask AI for a simple HTML Hours and Contact box for your group. Test it, fix one problem, and embed it on your Google Site.",
          youCanNow: "get working HTML from AI, test it, fix it and add it to a site.",
          quickCheck: [
            { objective: "O5", q: "Why ask the AI for \"simple HTML only, no JavaScript\"?", options: ["Simple HTML is safer and easier for a beginner to check", "JavaScript is not allowed online", "HTML costs less", "AI cannot write JavaScript"], answer: 0, why: "Simple HTML is easy to read and test, with no scripts you did not ask for." },
            { objective: "O5", q: "You tested the AI's box and the email link does not work. What do you do?", options: ["Embed it anyway", "Tell the AI exactly what to fix, or fix it yourself, then test again", "Delete your whole site", "Remove the email from the plan"], answer: 1, why: "Fix the one problem and test again before you use the code." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Publishing and checking your site",
          minutes: 5,
          goal: "Publish your site, check it on a phone and protect private information.",
          text: [
            "When your page is ready, click Publish at the top right of Google Sites. Choose a web address and publish. You can make changes later and publish again.",
            "Check your live site on a phone, because most visitors will use one. Is the text big enough? Do the links work? Do pictures load? Ask a friend to try it too.",
            "Protect privacy. Do not post a home address, a personal cell number or photos of children without written permission from a parent or guardian. Use a group email or a public meeting place instead."
          ],
          steps: ["Click Publish, choose the web address, and publish.", "Open the live address on a phone.", "Check text size, links and pictures.", "Remove any private address, personal number or photo without permission."],
          words: [["Publish", "make your site live so anyone with the address can see it."], ["Web address", "the text you type to visit a site, also called a URL."]],
          slides: [
            { title: "Publish", bullets: ["Click Publish at the top right", "Pick a web address", "You can update and publish again"] },
            { title: "Check on a phone", bullets: ["Text big enough?", "Links work?", "Pictures load? Ask a friend to test"] },
            { title: "Protect privacy", bullets: ["No home address or personal cell", "No photos of children without permission", "Use a group email or public place"] }
          ],
          tryIt: "Final task: publish your one-page Google Site with your edited About section and tested Hours and Contact box. Check it on a phone and remove anything private.",
          youCanNow: "publish a working website, check it on a phone and keep private information off it.",
          quickCheck: [
            { objective: "O6", q: "What happens when you click Publish in Google Sites?", options: ["The site is deleted", "Only you can see it", "The site goes live at the web address you chose", "It prints the site"], answer: 2, why: "Publishing makes the site live at its web address." },
            { objective: "O6", q: "Your site shows a member's personal cell number. What do you do?", options: ["Leave it; it helps people call", "Make it smaller", "Ask visitors not to call it", "Replace it with a group email and publish again"], answer: 3, why: "Personal numbers stay off public sites; use a group email instead." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Code, publish and check",
        questions: [
          { objective: "O4", q: "What is HTML?", options: ["A type of phone", "The language used to write web pages", "A password", "An email app"], answer: 1, why: "Web pages are written in HTML." },
          { objective: "O4", q: "Which is a closing tag?", options: ["<p>", "<h2>", "</p>", "<li>"], answer: 2, why: "Closing tags have a slash." },
          { objective: "O5", q: "AI gave you HTML for your site. What do you do first?", options: ["Publish it without looking", "Send it to strangers", "Delete your site", "Test it in an online editor and check the facts"], answer: 3, why: "Testing catches bugs and wrong facts before visitors see them." },
          { objective: "O5", q: "How do you add HTML code to a Google Site?", options: ["Insert, Embed, Embed code, paste, Next, Insert", "Print it", "Email it to Google", "Type it in the page title"], answer: 0, why: "That is the Embed code path in Google Sites." },
          { objective: "O6", q: "Which is safe to put on a community group's public site?", options: ["Your home address", "A group email address", "A child's photo without permission", "Your personal cell number"], answer: 1, why: "A group email lets people reach you without exposing private details." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: AI Web Development",
    questions: [
      { objective: "O1", q: "When you type a web address, what happens?", options: ["Your browser asks a server for the page", "The page is printed", "Your phone writes the page", "Nothing"], answer: 0, why: "The server sends the page to your browser." },
      { objective: "O1", q: "Which is a web browser?", options: ["A spreadsheet", "Chrome", "A printer", "A text message"], answer: 1, why: "Chrome, Edge and Safari are browsers." },
      { objective: "O1", q: "The first step in building a site is to:", options: ["Pay for ads", "Pick colors only", "Make a simple plan", "Publish an empty page"], answer: 2, why: "A plan tells you what the site needs." },
      { objective: "O1", q: "Which section does a small community site usually need?", options: ["Members' home addresses", "Bank numbers", "Passwords", "How to reach you"], answer: 3, why: "Visitors need a way to contact you." },
      { objective: "O2", q: "Google Sites is:", options: ["A free website builder with a Google account", "A paid app only", "A phone company", "A social media feed"], answer: 0, why: "It comes free with a Google account." },
      { objective: "O2", q: "A template is:", options: ["A password", "A ready-made design you fill in", "A type of server", "A bug"], answer: 1, why: "Templates give you a starting design." },
      { objective: "O2", q: "A theme controls:", options: ["Who can visit", "The web address", "Colors and fonts", "Your account"], answer: 2, why: "Themes set the look of the site." },
      { objective: "O3", q: "Which prompt will get the best About Us draft?", options: ["\"website\"", "\"write stuff\"", "\"help\"", "\"Write a friendly 60-word About Us for a free tutoring club for grades 3 to 8. Use simple words.\""], answer: 3, why: "It gives facts, length and tone." },
      { objective: "O3", q: "Who is responsible for every word on your site?", options: ["You and your group", "The AI", "Google", "Nobody"], answer: 0, why: "AI drafts, but you publish and own the words." },
      { objective: "O4", q: "What is a tag in HTML?", options: ["A price sticker", "A label in angle brackets like <p>", "A photo", "A web address"], answer: 1, why: "Tags tell the browser what each part is." },
      { objective: "O4", q: "Which tag makes a paragraph?", options: ["<li>", "<a>", "<p>", "<ul>"], answer: 2, why: "<p> stands for paragraph." },
      { objective: "O4", q: "In an online HTML editor, how do you see your page?", options: ["Print it", "Email it", "Restart the computer", "Click Run"], answer: 3, why: "Run shows the result of your HTML." },
      { objective: "O5", q: "When asking AI for code for a beginner site, a safe request is:", options: ["\"Simple HTML only, no JavaScript\"", "\"Add any scripts you like\"", "\"Copy code from a random site\"", "\"Include my password\""], answer: 0, why: "Simple HTML is easier to read, test and trust." },
      { objective: "O5", q: "A bug is:", options: ["A website theme", "A mistake in code that makes it work wrong", "A web address", "A type of template"], answer: 1, why: "Bugs are errors to find and fix." },
      { objective: "O5", q: "The AI's code shows the wrong closing time. You should:", options: ["Publish anyway", "Delete the whole site", "Fix the words or ask AI to fix that one thing", "Ignore it"], answer: 2, why: "Fix the specific problem, then test again." },
      { objective: "O5", q: "What does \"embed\" mean?", options: ["Delete a page", "Print a page", "Change your password", "Place code or content inside a page"], answer: 3, why: "Embedding puts your HTML box into the site." },
      { objective: "O6", q: "To make your Google Site live, you click:", options: ["Publish", "Delete", "Print", "Undo"], answer: 0, why: "Publish makes the site visible at its address." },
      { objective: "O6", q: "Why check your site on a phone?", options: ["Phones cannot show websites", "Most visitors use a phone", "It changes the address", "It is required by law"], answer: 1, why: "Many visitors will see your site on a phone." },
      { objective: "O6", q: "Which should NOT go on your public site?", options: ["Group hours", "A group email", "A photo of a child without a parent's written permission", "What you offer"], answer: 2, why: "Children's photos need permission from a parent or guardian." },
      { objective: "O6", q: "After publishing, can you change your Google Site?", options: ["No, never", "Only by paying", "Only by starting over", "Yes, edit and publish again"], answer: 3, why: "You can update and republish any time." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Pre-Test: What Do You Already Know?",
    from: [
      0,
      2,
      4,
      7,
      9,
      13,
      15,
      17,
      18
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      {
        name: "Site built",
        objective: "O2",
        notYet: "No clear title or sections missing.",
        meets: "A Google Site with a clear title and the planned sections in a readable theme.",
        exceeds: "The one action for visitors is easy to find."
      },
      {
        name: "About Us",
        objective: "O3",
        notYet: "AI text pasted as is, or with wrong or made-up facts.",
        meets: "Short About Us with true facts, edited in the learner's own words.",
        exceeds: "Can point to what they changed and why."
      },
      {
        name: "Hours and Contact box",
        objective: "O5",
        notYet: "No HTML box, or it was not tested.",
        meets: "A simple HTML box tested in an editor, one problem fixed, and embedded.",
        exceeds: "Can explain what each tag in the box does."
      },
      {
        name: "Published and phone-ready",
        objective: "O6",
        notYet: "Not published, or not checked on a phone.",
        meets: "Published and checked on a phone: text readable, links work, pictures load.",
        exceeds: "A friend also tested it and any problems were fixed."
      },
      {
        name: "Privacy",
        objective: "O6",
        notYet: "A home address, personal number or unapproved child photo is on the site.",
        meets: "Only a group email or public place, and no private details.",
        exceeds: "All photos are owned or used with written permission."
      }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Community groups or small businesses with a live site built by a learner within 30 days (follow-up survey)",
      "Learners who take a next web or coding course within 60 days",
      "Groups that report new members, customers or calls from their site"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A computer with internet (library or home) to build the site, and a phone to check it",
      "A free Google account for Google Sites",
      "A free AI assistant and a free online HTML editor such as the W3Schools Tryit Editor",
      "Real facts about the group: name, what it offers, hours and a group email",
      "About 60 minutes in total: lessons, practice, checks and the final task"
    ],
    facilitatorNotes: [
      "Help with Google account sign-in first; it takes the most time for beginners.",
      "Have learners build for a real group they belong to when they can, with the group's OK.",
      "Check every published site for home addresses, personal numbers and photos of children without permission.",
      "Remind learners to test all AI code and ask for simple HTML only.",
      "Score the final task with the rubric, and give feedback on one Not yet row at a time."
    ]
  }
};
