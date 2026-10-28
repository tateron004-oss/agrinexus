"use strict";

// Koach Learn course: Athletes -> "SEO and Building Your Website with AI". Skill-building course: by the end the student can DO the skill in `outcome`.
// Shape: scripts/koachlearn-courses/README.md. Model: re-entry/reentry-ai-digital-confidence.js.

module.exports = {
  id: "athletes-seo-website-ai",
  category: "Athletes",
  name: "SEO and Building Your Website with AI",
  skills: "Planning a one-page athlete website, Writing page text with AI, Building a free site in Google Sites, Basic SEO: titles, headings, descriptions and alt text, Checking your site on Google",
  outcome: "build and publish a free one-page athlete website with Google Sites, written with help from AI, with a clear title, headings, image alt text and contact method, so coaches and brands can find and understand you.",
  about: [
    "This course is for athletes who want one place online that they control, where coaches, recruiters, brands and fans can see who they are, and for coaches who help them.",
    "Social media changes and can be noisy. A simple website gives you a clean page with your story, stats, highlights and how to contact you. SEO, or search engine optimization, helps people find it on Google.",
    "Each lesson is about five minutes with a \"Try it now\" task. You will plan, write, build and publish a one-page site for free. A knowledge check closes each chapter, and a 20-question quiz closes the course."
  ],
  finalTask: "Publish a one-page athlete website in Google Sites with: a page title that includes your name and sport, an About section written with AI and edited by you, a stats and highlights section, a contact method that does not expose your private details, image alt text, and a link to it from one of your social profiles. Then search Google for your name and sport and note what shows up.",
  chapters: [
    {
      name: "Chapter 1: Planning and writing your site",
      lessons: [
        {
          title: "Why an athlete needs a simple website",
          minutes: 4,
          goal: "Decide who your site is for and what it must show.",
          text: [
            "A website is a page you control. Social apps can change rules or lose your account; your site stays the same. It is also easier for a coach or brand to read than scrolling a feed.",
            "Decide who it is for. A recruiting site needs stats, academics, highlights and coach references. A brand-focused site needs your audience, past partnerships and media kit. A coaching or camp site needs your services, schedule and sign-up.",
            "Keep it to one page at first, with sections: About, Stats or Services, Highlights, and Contact."
          ],
          steps: ["Pick your main audience: coaches, brands or clients.", "List what they need to see.", "Group it into four sections: About, Stats or Services, Highlights, Contact."],
          words: [["Website", "pages on the internet at an address you share, like a link."], ["Section", "one part of a page, with its own heading."]],
          slides: [
            { title: "Why a website", bullets: ["A page you control", "Easier to read than a feed"] },
            { title: "Who is it for?", bullets: ["Coaches: stats, academics, highlights", "Brands: audience, partnerships", "Clients: services and sign-up"] },
            { title: "Start with one page", bullets: ["About", "Stats or Services", "Highlights", "Contact"] }
          ],
          tryIt: "Write your site's main audience and list what they need to see under the four section headings.",
          youCanNow: "plan a one-page athlete site for a clear audience."
        },
        {
          title: "Writing your page with AI",
          minutes: 5,
          goal: "Use an AI assistant to draft your About section and section text, then edit it.",
          text: [
            "Give an AI assistant your facts and ask for a draft: \"I'm a 2027 graduate, 6'1\" outside hitter, 3.6 GPA, team captain, want to study engineering. Write a 100-word About section for my recruiting website in first person, friendly and confident.\"",
            "Check every fact. AI can add things that are not true, like awards you did not win. Remove anything you cannot prove and put it in your own words.",
            "Keep private details off the page: no home address, phone number, full date of birth or school schedule. For contact, use a separate email you made for sports, or a contact form, and if you are a minor, list a parent or coach as a contact too."
          ],
          steps: ["List your true facts.", "Ask AI for a short About section draft.", "Check every fact and remove anything untrue.", "Rewrite in your own voice.", "Decide on a safe contact method."],
          words: [["First person", "writing with \"I\" and \"my\"."], ["Contact form", "a box on a site where visitors send you a message without seeing your email."]],
          slides: [
            { title: "Give AI your facts", bullets: ["Grad year, position, size", "Grades, leadership, goals", "Ask for 100 words, first person"] },
            { title: "Check every fact", bullets: ["AI can invent awards", "Remove what you can't prove", "Use your own voice"] },
            { title: "Safe contact", bullets: ["Separate sports email or a form", "No address, phone or birth date", "Minors: list a parent or coach too"] }
          ],
          tryIt: "Use an AI assistant to draft your About section. Check every fact, edit it into your voice, and set up a separate sports email if you do not have one.",
          youCanNow: "write accurate website text with AI help and choose a safe contact method."
        },
        {
          title: "SEO basics: helping Google understand your page",
          minutes: 5,
          goal: "Write a page title, headings, a short description and image alt text that help search.",
          text: [
            "SEO, or search engine optimization, means making your page easy for search engines like Google to understand, so the right people find it.",
            "Google's own SEO Starter Guide recommends a few basics: a clear, unique page title (for example \"Jordan Lee | Volleyball Outside Hitter, Class of 2027\"), headings that organize the page, helpful, up-to-date text written for people, a short page description, and short descriptive alt text on images.",
            "Write for people first. Do not stuff keywords; just use the words a coach or brand would type, like your name, sport, position, grad year and city or region."
          ],
          steps: ["Write a page title with your name, sport and position or service.", "Use headings for each section.", "Write a one- to two-sentence description of the page.", "Add short alt text to every image.", "Use words your audience would search for."],
          words: [["SEO", "search engine optimization: helping search engines understand your page so people find it."], ["Alt text", "a short written description of an image, used by search engines and screen readers."], ["Keyword", "a word or phrase people type into a search engine."]],
          slides: [
            { title: "SEO in one line", bullets: ["Help Google understand your page", "So the right people find it"] },
            { title: "Google's basics", bullets: ["Clear, unique page title", "Headings for each section", "Short description and helpful text", "Alt text on images"] },
            { title: "Write for people", bullets: ["Name, sport, position, grad year, region", "No keyword stuffing"] }
          ],
          sources: [{ name: "Google Search Central: SEO Starter Guide", url: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide" }],
          tryIt: "Write your page title, the four section headings, a one-sentence page description, and alt text for two photos you plan to use.",
          youCanNow: "write a page title, headings, description and alt text that help people find your page."
        }
      ],
      check: {
        title: "Knowledge Check 1: Planning and writing your site",
        questions: [
          { q: "Why have your own website?", options: ["Social media is illegal", "Coaches only read paper", "It is a page you control that is easy to read", "It replaces practice"], answer: 2, why: "Your site stays the same and is easy for coaches and brands to scan." },
          { q: "AI adds an award you did not win to your About section. What do you do?", options: ["Remove it", "Keep it", "Add more awards", "Hide it in small text"], answer: 0, why: "Only include true facts you can prove." },
          { q: "Which is a safe contact method for a minor?", options: ["Home phone number", "Home address", "Class schedule", "A sports email or form, plus a parent or coach contact"], answer: 3, why: "It lets people reach you without exposing private details." },
          { q: "Which is a strong page title?", options: ["\"Home\"", "\"Jordan Lee | Volleyball Outside Hitter, Class of 2027\"", "\"Welcome!!!\"", "\"Page 1\""], answer: 1, why: "It tells people and Google exactly what the page is." },
          { q: "What is alt text?", options: ["A secret password", "A short description of an image", "A second website", "A hashtag"], answer: 1, why: "Alt text describes images for search engines and screen readers." }
        ]
      }
    },
    {
      name: "Chapter 2: Building and publishing",
      lessons: [
        {
          title: "Building your page in Google Sites",
          minutes: 6,
          goal: "Build your one-page site in Google Sites.",
          text: [
            "Google Sites is a free website builder from Google. You need a Google account. Open sites.google.com, start a new blank site or a template, and add your sections.",
            "Use the builder to add text boxes, images, headings and buttons, and to embed a YouTube highlight video. Pick a simple theme with your team colors and readable text. Use only photos you took or have permission to use, and follow your school's rules on logos.",
            "Keep it clean: one page, four sections, big readable text, and one clear button to contact you or watch highlights."
          ],
          steps: ["Go to sites.google.com and sign in.", "Start a blank site or template.", "Add your page title and four sections with headings.", "Paste your edited text.", "Add photos with alt text and embed your highlight video.", "Add one contact button or form link."],
          words: [["Template", "a ready-made layout you fill in."], ["Embed", "show a video or item from another site inside your page."]],
          slides: [
            { title: "Google Sites", bullets: ["Free website builder", "Needs a Google account", "sites.google.com"] },
            { title: "Add your content", bullets: ["Title and four sections", "Photos with alt text", "Embedded highlight video"] },
            { title: "Keep it clean", bullets: ["Readable text, team colors", "One clear button", "Your photos; follow logo rules"] }
          ],
          tryIt: "Build your page in Google Sites with your title, four sections, at least one photo with alt text, and your highlight video or a placeholder.",
          youCanNow: "build a clean one-page athlete website in Google Sites."
        },
        {
          title: "Publishing and checking your site",
          minutes: 5,
          goal: "Publish your site, test it on a phone and share the link.",
          text: [
            "When your page is ready, use the publish button and choose your site's web address. Pick a short address with your name and sport.",
            "Test it on a phone, since most coaches and fans will open it there. Check that every link and button works, the video plays, and the text is easy to read. Ask a coach or parent to look at it too.",
            "Share the link in your social media bios, your email signature and your recruiting profiles. If you change your contact details, update the site right away."
          ],
          steps: ["Click publish and choose a short web address.", "Open it on a phone.", "Test every link, button and video.", "Ask a coach or parent to review it.", "Add the link to your bios and email signature."],
          words: [["Publish", "make your site live on the internet."], ["URL", "a web address, like the link you share."]],
          slides: [
            { title: "Publish", bullets: ["Choose a short address with your name and sport"] },
            { title: "Test on a phone", bullets: ["Links and buttons work?", "Video plays?", "Text easy to read?"] },
            { title: "Share it", bullets: ["Social media bios", "Email signature", "Recruiting profiles"] }
          ],
          tryIt: "Publish your site, test it on a phone, ask one adult to review it, and add the link to one social profile.",
          youCanNow: "publish, test and share your athlete website."
        },
        {
          title: "Keeping it fresh and checking search",
          minutes: 5,
          goal: "Set an update routine and see how your site shows up in search.",
          text: [
            "Search engines and visitors both like pages that are up to date. Update your stats, highlights and schedule after each season or big event, and change the date in your About section.",
            "New sites can take time to appear in search results. Search Google for your name plus sport and see what shows up. Google offers a free tool called Search Console that site owners can use to see how their site performs in search; the SEO Starter Guide explains it.",
            "Every few months, ask an AI assistant: \"Here is my website text. Suggest three ways to make it clearer for college coaches.\" Then decide what to change."
          ],
          steps: ["Set a reminder to update after each season.", "Search your name plus sport and note what appears.", "Read about Search Console in Google's guide.", "Ask AI for three clarity suggestions and pick what to use."],
          words: [["Search Console", "Google's free tool that shows site owners how their site appears in Google Search."], ["Search results", "the list of pages a search engine shows for a search."]],
          slides: [
            { title: "Stay up to date", bullets: ["Update stats and highlights each season", "Change dates in your About section"] },
            { title: "Check search", bullets: ["New sites can take time to appear", "Search your name plus sport", "Search Console for site owners"] },
            { title: "Improve with AI", bullets: ["Ask for three clarity tips", "You decide what to change"] }
          ],
          sources: [{ name: "Google Search Central: SEO Starter Guide", url: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide" }],
          tryIt: "Final task: make sure your published site has a clear title, AI-assisted and edited About text, stats and highlights, a safe contact method, image alt text and a social link to it. Search Google for your name and sport and note what shows up.",
          youCanNow: "keep your site fresh and check how it shows up in search."
        }
      ],
      check: {
        title: "Knowledge Check 2: Building and publishing",
        questions: [
          { q: "What do you need to use Google Sites?", options: ["A paid plan", "A coding degree", "A server", "A Google account"], answer: 3, why: "Google Sites is free with a Google account." },
          { q: "Which photos can you put on your site?", options: ["Photos you took or have permission to use", "Any photo you find online", "Other athletes' photos", "School logos without asking"], answer: 0, why: "Use only photos you own or may use." },
          { q: "Why test your site on a phone?", options: ["Phones are banned", "It looks worse on computers", "Most visitors will open it on a phone", "No reason"], answer: 2, why: "Coaches and fans often open links on phones." },
          { q: "Your site doesn't show up in Google the day you publish. Why might that be?", options: ["It is broken forever", "Google bans athletes", "You must pay", "New sites can take time to appear"], answer: 3, why: "Search engines need time to find new pages." },
          { q: "When should you update your stats and highlights?", options: ["Never", "After each season or big event", "Once every ten years", "Only when a coach complains"], answer: 1, why: "Fresh content helps visitors and search." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: SEO and Building Your Website with AI",
    questions: [
      { q: "SEO stands for:", options: ["Social everyday output", "Sports event organizer", "Search engine optimization", "Site editing online"], answer: 2, why: "It means helping search engines understand your page." },
      { q: "A recruiting site should show:", options: ["Stats, academics, highlights", "Your home address", "Your password", "Rival gossip"], answer: 0, why: "That's what coaches need." },
      { q: "How many pages should you start with?", options: ["One", "Twenty", "Zero", "A hundred"], answer: 0, why: "One clear page is enough to start." },
      { q: "Which section helps people reach you?", options: ["Footer art", "Theme colors", "Contact", "Fonts"], answer: 2, why: "Contact tells people how to reach you." },
      { q: "When AI drafts your About section, you must:", options: ["Post it unread", "Check every fact", "Add extra awards", "Make it longer"], answer: 1, why: "AI can invent facts." },
      { q: "Which should NOT be on your site?", options: ["Your position", "Your highlight video", "Your grad year", "Your full date of birth and home address"], answer: 3, why: "Those are private details." },
      { q: "A contact form lets people:", options: ["See your password", "Edit your site", "Message you without seeing your email", "Pay you"], answer: 2, why: "It protects your email address." },
      { q: "Which helps Google understand your page?", options: ["All capital letters", "Hidden text", "No words at all", "A clear page title and headings"], answer: 3, why: "Google's guide recommends clear titles and headings." },
      { q: "Keyword stuffing means:", options: ["Repeating search words unnaturally", "Writing for people", "Adding alt text", "Using headings"], answer: 0, why: "Write for people, not stuffed keywords." },
      { q: "Good alt text for an action photo is:", options: ["\"IMG_2034\"", "\"Jordan Lee spiking the ball in the state semifinal\"", "\"photo\"", "Blank"], answer: 1, why: "Short and descriptive." },
      { q: "A page description should be:", options: ["A full essay", "A list of passwords", "One or two sentences about the page", "Empty"], answer: 2, why: "Short descriptions can appear in search results." },
      { q: "Google Sites is:", options: ["A free website builder", "A paid app only", "A social network", "A video game"], answer: 0, why: "It's Google's free builder." },
      { q: "To show your highlight video on your site, you:", options: ["Describe it only", "Email it to visitors", "Print it", "Embed it"], answer: 3, why: "Embedding plays it on your page." },
      { q: "Before using your school logo you should:", options: ["Redraw it", "Follow your school's logo rules", "Ignore rules", "Sell it"], answer: 1, why: "Schools control their logos." },
      { q: "A good site address is:", options: ["Random numbers", "Short, with your name and sport", "Very long", "Your password"], answer: 1, why: "Easy to remember and share." },
      { q: "After publishing, who should review your site?", options: ["Nobody", "A stranger online", "A rival", "A coach or parent"], answer: 3, why: "A second look catches mistakes." },
      { q: "Where should you share your site link?", options: ["Bios, email signature and recruiting profiles", "Nowhere", "Only on paper", "In spam messages"], answer: 0, why: "Those are where coaches and brands look." },
      { q: "Search Console is:", options: ["A game console", "A paid ad", "Google's free tool showing how your site appears in search", "A social app"], answer: 2, why: "Site owners use it to check search performance." },
      { q: "How do you check how your site appears in search?", options: ["Ask AI to guess", "Check the weather", "Restart your phone", "Search your name plus sport"], answer: 3, why: "Searching shows what others see." },
      { q: "AI suggests three changes to your site. You:", options: ["Must use all", "Decide which to use", "Must use none", "Delete your site"], answer: 1, why: "AI suggests; you decide." }
    ]
  }
};
