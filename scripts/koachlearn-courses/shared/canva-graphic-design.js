"use strict";

// Koach Learn course: Workforce Development -> "Graphic Design with Canva" (wave 3, 30 October 2026). ADDIE course: by the end the learner
// makes a real portfolio piece (a flyer and a matching social post) from a written design brief, using Canva's free plan.
// Goes deeper than the one Canva lesson in shared/ai-digital-marketing.js: design principles, type and color, rights, accessibility, export and portfolio.
//
// lesson: { title, minutes, goal, text: [paragraph], steps: [step] (optional), words: [[term, means]], slides: [{ title, bullets }], tryIt, youCanNow }
// question: { q, options: [4], answer: index of the right option, why }

module.exports = {
  id: "canva-graphic-design",
  category: "Workforce Development",
  name: "Graphic Design with Canva",
  skills: "Writing a design brief, Using layout principles, Choosing colors and fonts, Building designs in Canva, Checking rights and readability, Exporting a portfolio piece",
  outcome: "write a short design brief, then make a clear, readable flyer and a matching social media post in Canva's free plan, check them for rights and readability, and save them as a portfolio piece you can show an employer or client.",
  about: [
    "This course is for young people looking for a first creative job, adults adding a skill to their résumé, small business owners and entrepreneurs who make their own marketing, and nonprofit staff and volunteers who make flyers for events and donors.",
    "You will learn what graphic designers do, the basic rules that make a design easy to read, how to choose colors and fonts, how to build a design in Canva's free plan, how to make sure you have the right to use every image, and how to export your work and add it to a portfolio.",
    "Canva is a free online design tool that works in a web browser or as a phone app. You do not need to buy anything. Each lesson takes about five minutes and ends with a \"Try it now\" task. There is a quick check after each lesson, a knowledge check after each chapter and a 20-question quiz at the end.",
    "This course teaches the basics and helps you build a first portfolio piece. It does not grant a certificate or a degree. If you want a formal credential later, the lessons tell you where to look."
  ],
  finalTask: "For a real or practice client (a local shop, a nonprofit event, a sports team, a church or your own side business), write a one-paragraph design brief. Then make a letter-size (or A4) flyer and a matching square social media post in Canva's free plan, using the same colors and fonts. Check both with the design checklist (hierarchy, contrast, spelling, rights to every image), export the flyer as a PDF and the post as a PNG, and write a 3 to 4 sentence portfolio description of the goal, your choices and the result.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Mixed learners in the US and abroad: young people looking for a first job or a creative side income, adults changing careers, small business owners and entrepreneurs, and nonprofit staff and volunteers who make their own flyers and posts.",
    startingPoint: "Can use a phone or computer and social media. Most have never been taught design rules; many have tried Canva or similar tools by copying a template without knowing why it works.",
    gap: "Employers, clients and organizations want clear, on-brand graphics fast. Learners need to plan a design from a brief, apply basic layout, color and type rules, avoid copyright problems, and show finished work in a portfolio. A portfolio piece is often what gets a first design gig or job.",
    constraints: [
      "Reading level: plain words and short sentences",
      "Cost: Canva's free plan only; no paid elements or subscriptions required",
      "Devices: a computer is easiest; a phone works for most tasks",
      "Time: 4 to 6 minute lessons; the final task takes about 60 to 90 minutes",
      "Rights: only images the learner owns or has a license to use; no logos or photos copied from other businesses"
    ],
    prerequisites: "Basic computer or phone use and an email address to make a free Canva account. Learners new to computers can take \"Basic Computer Skills\" first."
  },
  // ---- ADDIE: Design ----
  objectives: [
    { id: "O1", condition: "Given a design request from a client, employer or your own project", action: "write a design brief that names the audience, the main message, the format and the size", standard: "with all four parts in one short paragraph" },
    { id: "O2", condition: "Given a draft design", action: "arrange text and images using hierarchy, alignment, contrast, repetition and white space", standard: "so a viewer can tell the main message within 3 seconds" },
    { id: "O3", condition: "Using Canva's free plan", action: "build a design at the right size from a template or a blank page, changing the text, colors, fonts and images", standard: "using no more than 2 fonts and 3 main colors and no paid elements" },
    { id: "O4", condition: "Before you share or print a design", action: "check the design for readable contrast, correct spelling and facts, and the right to use every image", standard: "fixing every problem you find" },
    { id: "O5", condition: "When a design is finished", action: "export the design in the right file type and add it to a portfolio with a short description", standard: "PDF for print and PNG or JPG for screens, with a clear file name" }
  ],
  chapters: [
    {
      name: "Chapter 1: Design foundations",
      lessons: [
        {
          title: "What graphic designers do, and the design brief",
          objectives: ["O1"],
          minutes: 5,
          goal: "Write a design brief that names the audience, message, format and size.",
          text: [
            "Graphic designers use pictures, words, colors and layout to get a message across. They make flyers, social media posts, menus, signs, logos, slides and reports. The US Bureau of Labor Statistics says employers look closely at a portfolio: a collection of your best work.",
            "Design work comes in many forms: an in-house job at a company or nonprofit, a social media or marketing assistant role, a print shop, or freelance work for local businesses. Many design jobs ask for a degree or technical training, but a strong portfolio helps at every level. Software certifications, such as Adobe Certified Professional (exams delivered by Certiport), can give an edge later. This course prepares you to make a first portfolio piece; it does not grant a certificate.",
            "Every good design starts with a brief: a short plan that answers four questions. Who is it for (the audience)? What is the one main message? What format is it (flyer, social post, poster, menu)? What size is it? If you cannot answer these, ask the client before you start."
          ],
          steps: ["Ask who the design is for.", "Ask for the one main message and any must-have details (date, place, price, contact).", "Ask what format it is and where it will be used.", "Write down the size, such as letter size for a flyer or square for a social post.", "Read the brief back to the client and get a yes before you design."],
          words: [["Graphic design", "using words, pictures, colors and layout to share a message."], ["Design brief", "a short written plan for a design: audience, message, format and size."], ["Portfolio", "a collection of your best work that you show employers or clients."], ["Freelance", "working for yourself and doing paid projects for different clients."]],
          slides: [
            { title: "What graphic designers make", bullets: ["Flyers, social posts, menus, signs", "Logos, slides and reports", "Employers look closely at your portfolio"] },
            { title: "Where design work is", bullets: ["In-house at a company or nonprofit", "Social media or marketing assistant", "Print shops and freelance work"] },
            { title: "The design brief: 4 parts", bullets: ["Audience: who is it for?", "Message: what is the one main idea?", "Format: flyer, post, poster?", "Size: letter, A4, square?"] },
            { title: "Before you design", bullets: ["Get the must-have details", "Read the brief back to the client", "Get a yes, then start"] }
          ],
          sources: [
            { name: "US Bureau of Labor Statistics: Graphic Designers", url: "https://www.bls.gov/ooh/arts-and-design/graphic-designers.htm" },
            { name: "Certiport: Adobe Certified Professional", url: "https://certiport.pearsonvue.com/Certifications/Adobe/ACP/Overview" }
          ],
          tryIt: "Pick a real or practice client, such as a car wash fundraiser, a barbershop or your own side business. Write a brief in one paragraph that names the audience, the main message, the format and the size. Keep it for the final task.",
          youCanNow: "say what graphic designers make and write a four-part design brief.",
          quickCheck: [
            { objective: "O1", q: "Which of these belongs in a design brief?", options: ["The audience, main message, format and size", "Your favorite color only", "The price of design software", "A list of every font you know"], answer: 0, why: "A brief answers who it is for, what it says, what it is and how big it is." },
            { objective: "O1", q: "A client says, \"Make me a flyer.\" What do you do first?", options: ["Start designing right away", "Copy a flyer from another business", "Ask about the audience, message and size, and write a brief", "Choose five fonts"], answer: 2, why: "Asking first and writing a brief stops wasted work and redesigns." }
          ]
        },
        {
          title: "Layout rules that make a design easy to read",
          objectives: ["O2"],
          minutes: 5,
          goal: "Arrange a design so the main message stands out first.",
          text: [
            "People look at a flyer or post for only a few seconds. Five simple rules help them get the message fast.",
            "Hierarchy: make the most important thing the biggest or boldest, then the next most important, then the details. Alignment: line things up along the same edge or center line so the design looks tidy. Contrast: make important things look different, for example dark text on a light background or a big headline next to small details.",
            "Repetition: use the same colors, fonts and shapes again so the design feels like one piece. White space: leave empty space around things. Empty space is not wasted; it lets the eye rest and makes the main message stand out.",
            "A quick test: show your design to someone for 3 seconds, then hide it. Ask what it was about. If they cannot say the main message, make the headline bigger and cut extra words."
          ],
          steps: ["Choose the one main message and make it the biggest text.", "Put the details (date, place, contact) in smaller text.", "Line up text and images along the same edges.", "Use the same colors and fonts again.", "Remove anything that does not help the message.", "Do the 3-second test with another person."],
          words: [["Hierarchy", "showing what is most important first by making it bigger, bolder or higher on the page."], ["Alignment", "lining things up along the same edge or center line."], ["Contrast", "a clear difference, such as dark on light or big next to small."], ["White space", "empty space around and between things in a design."]],
          slides: [
            { title: "Five layout rules", bullets: ["Hierarchy: most important = biggest", "Alignment: line things up", "Contrast: make key things stand out", "Repetition and white space"] },
            { title: "White space is not wasted", bullets: ["It lets the eye rest", "It makes the main message stand out", "Cut extra words and pictures"] },
            { title: "The 3-second test", bullets: ["Show the design for 3 seconds, then hide it", "Ask: what was it about?", "If they cannot say, make the headline bigger"] }
          ],
          tryIt: "Find a flyer or ad around you (on a wall, in the mail or online). On paper, list the five rules and mark which ones it uses well and which it breaks. Then sketch a better layout for your own brief: headline, picture and details in boxes.",
          youCanNow: "use hierarchy, alignment, contrast, repetition and white space to plan a layout, and test it in 3 seconds.",
          quickCheck: [
            { objective: "O2", q: "On an event flyer, what should usually be the biggest text?", options: ["The phone number", "The fine print", "The website address", "The main message, such as the event name"], answer: 3, why: "Hierarchy puts the main message first so people get it in seconds." },
            { objective: "O2", q: "Your design feels crowded. Which fix follows the layout rules?", options: ["Add more pictures", "Cut extra words and leave more white space", "Use five different fonts", "Make all the text the same size"], answer: 1, why: "White space and fewer words let the main message stand out." }
          ]
        },
        {
          title: "Choosing colors and fonts",
          objectives: ["O2", "O4"],
          minutes: 5,
          goal: "Choose a simple color palette and font pair that are easy to read.",
          text: [
            "Keep it simple: pick 2 or 3 main colors plus a neutral such as white, black or gray. If the client has brand colors, use those. Using the same colors on every piece makes a business easy to recognize.",
            "Use no more than 2 fonts: one for headlines and one for body text. A bold, simple font works for headlines. A plain, easy-to-read font works for details. Fancy script fonts are hard to read at small sizes, so save them for a word or two.",
            "Text must stand out from its background. The web accessibility guidelines (WCAG, from the W3C) ask for a contrast ratio of at least 4.5 to 1 for normal text and 3 to 1 for large text. A free contrast checker, such as WebAIM's, tells you the ratio when you type in the two colors. Light gray text on white, or red on green, often fails."
          ],
          steps: ["Write down 2 or 3 main colors and one neutral.", "Pick one headline font and one body font.", "Check each text color against its background in a contrast checker.", "Change any pair that is below 4.5 to 1 for normal text."],
          words: [["Color palette", "the small set of colors you use in a design."], ["Font", "a style of letters, such as bold block letters or handwriting style."], ["Contrast ratio", "a number that shows how different two colors are in brightness; higher is easier to read."], ["Brand colors", "the set colors a business or group always uses so people recognize it."]],
          slides: [
            { title: "Color", bullets: ["2 or 3 main colors plus a neutral", "Use the client's brand colors if they have them", "Same colors on every piece"] },
            { title: "Fonts", bullets: ["No more than 2 fonts", "Bold, simple font for headlines", "Plain font for details; script fonts for a word or two"] },
            { title: "Readable contrast", bullets: ["At least 4.5 to 1 for normal text", "At least 3 to 1 for large text", "Check with a free contrast checker"] }
          ],
          sources: [
            { name: "W3C: Understanding Contrast (Minimum)", url: "https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html" },
            { name: "WebAIM Contrast Checker", url: "https://webaim.org/resources/contrastchecker/" }
          ],
          tryIt: "For your brief, write down 2 or 3 colors and one neutral, and choose a headline font and a body font. Open a free contrast checker, type in your text color and background color, and write down the ratio. Change any pair under 4.5 to 1.",
          youCanNow: "choose a simple color palette and font pair and check that the text is readable.",
          quickCheck: [
            { objective: "O2", q: "How many fonts should a simple flyer usually use?", options: ["Five or more", "A different font for every line", "No more than two", "Only script fonts"], answer: 2, why: "One headline font and one body font keep a design clean and readable." },
            { objective: "O4", q: "A contrast checker shows your normal-size text is 2.8 to 1. What do you do?", options: ["Make the text darker or the background lighter until it is at least 4.5 to 1", "Leave it; any ratio is fine", "Make the text smaller", "Add a second background color behind it"], answer: 0, why: "WCAG asks for at least 4.5 to 1 for normal text so most people can read it." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Design foundations",
        questions: [
          { objective: "O1", q: "What is a design brief?", options: ["A finished flyer", "A short plan naming the audience, message, format and size", "A bill you send a client", "A list of Canva templates"], answer: 1, why: "The brief is the plan you agree on before you design." },
          { objective: "O1", q: "A food truck owner wants a post for a new menu item. Which brief is most complete?", options: ["\"Make it look nice.\"", "\"Food post.\"", "\"Use red.\"", "\"Square Instagram post for local lunch customers: new spicy chicken taco, $5, Friday only.\""], answer: 3, why: "It names the format and size, the audience and the one main message." },
          { objective: "O2", q: "Lining up the headline, picture and details along the same left edge is an example of:", options: ["Alignment", "Repetition", "Contrast", "Hierarchy"], answer: 0, why: "Alignment means lining things up along the same edge or center line." },
          { objective: "O2", q: "You show your flyer to a friend for 3 seconds and they cannot say what it is about. What is the best fix?", options: ["Add more details", "Use more colors", "Make the main message bigger and cut extra words", "Make the picture smaller"], answer: 2, why: "Stronger hierarchy and fewer words make the main message clear." },
          { objective: "O2", q: "Why use the same colors and fonts on every piece for a client?", options: ["It is required by law", "Canva only allows one color", "It uses less ink", "Repetition makes the business easy to recognize"], answer: 3, why: "Repetition ties pieces together and builds recognition." }
        ]
      }
    },
    {
      name: "Chapter 2: Making it in Canva",
      lessons: [
        {
          title: "Building a design in Canva's free plan",
          objectives: ["O3"],
          minutes: 6,
          goal: "Build a design at the right size from a template and make it your own.",
          text: [
            "Canva works in a web browser at canva.com or in the Canva app. Make a free account with your email. The free plan includes many templates, fonts, photos and graphics. Some items are only for paid plans and are marked as Pro or premium; leave those out so your design stays free.",
            "Start with the size. Use the search or the create button and type the format you need, such as \"Flyer\" or \"Instagram post\". Canva opens a page at that size. You can also set a custom size. Schools, students and nonprofits may qualify for free upgraded plans; check Canva's own Education and Nonprofits pages.",
            "A template is a ready-made design. It is a starting point, not the finished work. Change the words to your brief, change the colors to your palette, use your two fonts, swap in your own photos, and delete anything that does not help the message. Employers can spot a template that was not changed.",
            "Use the side panel to add text, shapes and graphics, and to upload your own photos. Canva saves your work as you go. Give your design a clear name so you can find it again."
          ],
          steps: ["Sign in to Canva on a computer or the app.", "Search for the format you need, such as Flyer, or set a custom size.", "Pick a template that fits your layout sketch, or start blank.", "Replace the text with your brief's message and details.", "Change the colors and fonts to your palette and font pair.", "Upload your own photos or use free images you are allowed to use.", "Delete anything that does not help the message, then name the design."],
          words: [["Template", "a ready-made design you change to make your own."], ["Free plan", "the version of Canva you can use without paying."], ["Pro or premium item", "a template, photo or graphic that needs a paid plan."], ["Custom size", "a page size you type in yourself, in inches, pixels or millimeters."]],
          slides: [
            { title: "Getting started", bullets: ["canva.com in a browser or the Canva app", "Free account with your email", "Leave out items marked Pro or premium"] },
            { title: "Start with the size", bullets: ["Search the format: Flyer, Instagram post", "Or set a custom size", "Check Canva's Education and Nonprofits pages"] },
            { title: "Make the template yours", bullets: ["Your words, colors and two fonts", "Your own photos", "Delete what does not help the message"] },
            { title: "Finish the draft", bullets: ["Upload photos from the side panel", "Canva saves as you go", "Give the design a clear name"] }
          ],
          sources: [
            { name: "Canva", url: "https://www.canva.com/" },
            { name: "Canva for Education (check who qualifies)", url: "https://www.canva.com/education/" },
            { name: "Canva for Nonprofits (check who qualifies)", url: "https://www.canva.com/canva-for-nonprofits/" }
          ],
          tryIt: "Open Canva, search for Flyer and pick a template that matches your sketch from Lesson 2. Change the text, colors and fonts to your brief and palette, add one photo you took yourself, and delete anything extra. Name the design with the client and date.",
          youCanNow: "build a design in Canva's free plan at the right size and change a template so it fits your brief.",
          quickCheck: [
            { objective: "O3", q: "You need a flyer in Canva. What do you do first?", options: ["Download a random image", "Search for the Flyer format or set the right size", "Pick five fonts", "Pay for a plan"], answer: 1, why: "Starting at the right size saves you from redoing the layout later." },
            { objective: "O3", q: "You want your design to stay free. A graphic is marked as Pro. What do you do?", options: ["Use it and hope no one notices", "Take a screenshot of it", "Copy it from another site", "Choose a free graphic instead"], answer: 3, why: "Pro items need a paid plan; choosing free items keeps the design free and properly licensed." }
          ]
        },
        {
          title: "Images, rights and the final check",
          objectives: ["O4"],
          minutes: 5,
          goal: "Check a design for rights, readability, spelling and facts before you share it.",
          text: [
            "Not every picture online is free to use. In the US, a work is protected by copyright as soon as it is created, even without a © mark. That means you cannot copy a photo, logo or drawing from a website or another business just because you found it.",
            "Safe images are ones you took or made yourself, images inside Canva that your plan lets you use (read Canva's license terms on its site), and images from free sources whose license clearly allows your use. Never use another company's logo, a celebrity's photo or a sports team's mark without written permission. If you use AI to make an image, check the tool's rules and check the image for mistakes such as strange hands or wrong text.",
            "Before you share or print, do the final check: Is the main message clear in 3 seconds? Is every text color readable (contrast)? Is every word spelled right, and are the date, time, place, price and contact correct? Do you have the right to use every image and font? Ask the client or another person to read it too. When you post online, add alt text (a short description of the image) if the site allows it, so people who use screen readers know what it shows."
          ],
          steps: ["Do the 3-second test again.", "Check every text color against its background.", "Read every word slowly, out loud, for spelling.", "Check the date, time, place, price and contact against the brief.", "List where each image came from and why you may use it.", "Ask someone else to read it, then fix what they find."],
          words: [["Copyright", "the legal right of the person who made a work to control copies of it."], ["License", "permission, with rules, to use someone else's work."], ["Alt text", "a short written description of an image for people who cannot see it."], ["Proofread", "read slowly to find and fix mistakes."]],
          slides: [
            { title: "Not every picture is free", bullets: ["Work is protected by copyright once it is made", "No © mark does not mean free", "Never copy logos or photos from other businesses"] },
            { title: "Safe images", bullets: ["Photos you took yourself", "Canva images your plan lets you use", "Free sources whose license allows your use"] },
            { title: "The final check", bullets: ["Clear in 3 seconds?", "Readable contrast?", "Spelling and facts right?", "Rights to every image?"] },
            { title: "Before you post", bullets: ["Ask another person to read it", "Add alt text where the site allows it"] }
          ],
          sources: [
            { name: "US Copyright Office: Copyright basics FAQ", url: "https://www.copyright.gov/help/faq/faq-general.html" },
            { name: "W3C: Understanding Contrast (Minimum)", url: "https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html" }
          ],
          tryIt: "Run the final check on your Canva flyer. Write a list of every image and where it came from. Read every word out loud, compare the details with your brief, and check one text color in a contrast checker. Fix every problem you find.",
          youCanNow: "check a design for rights, readability, spelling and facts, and fix it before you share it.",
          quickCheck: [
            { objective: "O4", q: "You find a great photo on another bakery's website with no © mark. Can you use it on your client's flyer?", options: ["No; it is still protected, so use your own or a licensed image", "Yes, because it has no © mark", "Yes, if you make it smaller", "Yes, if you change its color"], answer: 0, why: "Copyright protects a work once it is made, mark or not." },
            { objective: "O4", q: "Which step is part of the final check before printing?", options: ["Adding a third font", "Making the headline smaller", "Comparing the date, place and price with the brief", "Removing all white space"], answer: 2, why: "Wrong details on a printed flyer cost the client money and trust." }
          ]
        },
        {
          title: "Exporting, getting feedback and building a portfolio",
          objectives: ["O5", "O3"],
          minutes: 5,
          goal: "Export a design in the right file type and add it to a portfolio with a description.",
          text: [
            "When the design passes the final check, share it for feedback before the final export. Canva has a Share button where you can send a view link. Ask one clear question, such as \"Is anything unclear or wrong?\", then make the changes the client agrees on.",
            "Export in the right file type. Open Share and choose Download. Use PDF for anything that will be printed, such as a flyer. Use PNG for social media posts and graphics with text, because it keeps text sharp. JPG is fine for photos where a smaller file matters. Name the file clearly, for example: carwash-flyer-2026-11.pdf.",
            "Make a matching piece. Start a new design at the social post size and use the same colors, fonts and photo, so the set looks like one campaign. Clients often want a flyer and a post together.",
            "Add the work to your portfolio. A portfolio can be a folder, a free website or a simple PDF. For each piece, write 3 to 4 sentences: the goal, who it was for, the design choices you made and the result. Only show client work if the client says yes, and never include private details."
          ],
          steps: ["Share a view link and ask one clear feedback question.", "Make the agreed changes.", "Open Share, then Download, and pick PDF for print or PNG for screens.", "Name the file with the project and date.", "Make a matching social post with the same colors and fonts.", "Write a 3 to 4 sentence portfolio description and add both files."],
          words: [["Export", "to save a design as a file you can print, post or send."], ["PDF", "a file type that keeps the layout the same everywhere; best for printing."], ["PNG", "an image file type that keeps text and edges sharp; good for screens."], ["JPG", "an image file type that makes photos smaller; text can look a little blurry."]],
          slides: [
            { title: "Get feedback first", bullets: ["Share a view link", "Ask one clear question", "Make the changes the client agrees on"] },
            { title: "Pick the right file type", bullets: ["PDF for print, like flyers", "PNG for social posts and text", "JPG for photos where size matters"] },
            { title: "Make it a set", bullets: ["New design at the social post size", "Same colors, fonts and photo"] },
            { title: "Portfolio description", bullets: ["The goal and who it was for", "Your design choices", "The result; ask the client before you show it"] }
          ],
          tryIt: "Share your flyer with one person and ask, \"Is anything unclear or wrong?\" Fix what they find. Download the flyer as a PDF, make a matching square post and download it as a PNG, name both files clearly, and write your 3 to 4 sentence portfolio description.",
          youCanNow: "get feedback, export a design in the right file type, make a matching piece and add it to a portfolio with a description.",
          quickCheck: [
            { objective: "O5", q: "Your flyer is going to a print shop. Which file type is best?", options: ["A screenshot", "A JPG of a photo", "A PNG made for a phone", "A PDF"], answer: 3, why: "PDF keeps the layout the same and is the usual choice for printing." },
            { objective: "O5", q: "What belongs in a portfolio description?", options: ["The client's home address", "The goal, who it was for, your design choices and the result", "Only the file name", "Your Canva password"], answer: 1, why: "A short story of the goal, choices and result shows employers how you think." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Making it in Canva",
        questions: [
          { objective: "O3", q: "What is a template in Canva?", options: ["A paid subscription", "A file type for printing", "A ready-made design you change to make your own", "A copyright license"], answer: 2, why: "Templates are starting points; you change the words, colors, fonts and images." },
          { objective: "O3", q: "An employer looks at your design and can tell it is an unchanged template. What should you have done?", options: ["Changed the text, colors, fonts and images to fit the brief", "Used more Pro items", "Added a third font", "Exported it as a JPG"], answer: 0, why: "Making the template your own shows real design skill." },
          { objective: "O4", q: "Which image is safe to use on a client's flyer?", options: ["A sports team's logo from its website", "A photo you took yourself", "A celebrity photo from a news site", "A competitor's product photo"], answer: 1, why: "You own your own photos; the others need written permission." },
          { objective: "O4", q: "Light gray text on a white background is hard to read. Which guideline does this break?", options: ["Hierarchy", "Repetition", "File naming", "Readable contrast"], answer: 3, why: "Text needs enough contrast with its background to be readable." },
          { objective: "O5", q: "Which file type is best for a social media post with words on it?", options: ["PNG", "PDF for print", "A Word document", "A screenshot of your screen"], answer: 0, why: "PNG keeps text and edges sharp on screens." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Graphic Design with Canva",
    questions: [
      { objective: "O1", q: "What do graphic designers do?", options: ["Fix computers", "Write laws about images", "Use words, pictures, colors and layout to share a message", "Sell printers"], answer: 2, why: "Graphic design is visual communication." },
      { objective: "O1", q: "What do employers look at closely when hiring designers?", options: ["A portfolio of your best work", "Your social media follower count", "How many fonts you own", "Your typing speed"], answer: 0, why: "The BLS notes that a portfolio is key for design jobs." },
      { objective: "O1", q: "Which is NOT one of the four parts of a design brief?", options: ["Audience", "Main message", "Size", "Your favorite color"], answer: 3, why: "The brief is about the client's audience, message, format and size." },
      { objective: "O1", q: "A nonprofit asks for \"something for the food drive\". What is your best next step?", options: ["Design a logo", "Ask who it is for, the main message, the format and the size, then write a brief", "Copy last year's flyer from another group", "Pick a template at random"], answer: 1, why: "A brief turns a vague request into a clear plan." },
      { objective: "O2", q: "Making the event name the biggest text on the page uses which rule?", options: ["Repetition", "Hierarchy", "White space", "Alignment"], answer: 1, why: "Hierarchy shows what matters most first." },
      { objective: "O2", q: "What is white space?", options: ["Any white color", "A paid Canva feature", "A printing error", "Empty space around and between things"], answer: 3, why: "White space lets the eye rest and makes the message stand out." },
      { objective: "O2", q: "What is the 3-second test?", options: ["Show the design for 3 seconds and ask what it was about", "Export the design in 3 seconds", "Use 3 fonts", "Post the design 3 times"], answer: 0, why: "If people cannot say the message after 3 seconds, the hierarchy needs work." },
      { objective: "O2", q: "A simple color palette for a flyer is usually:", options: ["Every color in the rainbow", "One color for each line of text", "2 or 3 main colors plus a neutral", "Only red and green"], answer: 2, why: "A small palette looks clean and is easy to repeat." },
      { objective: "O3", q: "In Canva, how do you start a flyer at the right size?", options: ["Search for the Flyer format or set a custom size", "Start with any page and stretch it", "Make it as a social post and print it", "Draw the edges by hand"], answer: 0, why: "Starting at the right size avoids redoing the layout." },
      { objective: "O3", q: "Which is true about Canva's free plan?", options: ["Every template and photo is free", "You must pay before you can make any design", "Some items are marked Pro or premium and need a paid plan", "It only works on phones"], answer: 2, why: "The free plan has many free items, but some need a paid plan." },
      { objective: "O3", q: "How many fonts should most simple designs use?", options: ["One for every sentence", "No more than two", "At least five", "Only script fonts"], answer: 1, why: "A headline font and a body font keep it readable." },
      { objective: "O3", q: "Where do you add your own photos in Canva?", options: ["In the Download menu", "In the file name", "In the contrast checker", "By uploading them from the side panel"], answer: 3, why: "The side panel is where you add text, graphics and your uploads." },
      { objective: "O4", q: "A website photo has no © mark. What is true?", options: ["It is free for anyone", "It belongs to Canva", "It is free if you crop it", "It can still be protected by copyright"], answer: 3, why: "In the US, a work is protected once it is created, with or without a mark." },
      { objective: "O4", q: "WCAG asks for what contrast ratio for normal-size text?", options: ["1 to 1", "At least 4.5 to 1", "At least 2 to 1", "Exactly 10 to 1"], answer: 1, why: "4.5 to 1 is the minimum for normal text; large text needs 3 to 1." },
      { objective: "O4", q: "What is alt text?", options: ["A second font", "A file type", "A short description of an image for people who cannot see it", "A Canva template"], answer: 2, why: "Alt text lets screen readers describe the image." },
      { objective: "O4", q: "Before printing 500 flyers, what is the most important check?", options: ["Spelling, date, place, price and contact match the brief", "That you used every color", "That the file is as large as possible", "That the template was not changed"], answer: 0, why: "Mistakes on printed flyers are costly and hard to fix." },
      { objective: "O5", q: "Which file type is best for a printed flyer?", options: ["JPG", "A screenshot", "PDF", "A text file"], answer: 2, why: "PDF keeps the layout the same and is standard for printing." },
      { objective: "O5", q: "Which is the clearest file name?", options: ["carwash-flyer-2026-11.pdf", "final-final-2.pdf", "untitled.pdf", "aaa.pdf"], answer: 0, why: "It says the project and date so you and the client can find it." },
      { objective: "O5", q: "Before you put a client's flyer in your portfolio, you should:", options: ["Add their private phone number", "Remove your name", "Change it into a JPG", "Ask the client if you may show it"], answer: 3, why: "Showing client work needs the client's okay." },
      { objective: "O5", q: "Why make a social post that matches the flyer?", options: ["Canva requires it", "Clients often want a set that looks like one campaign", "It changes the file type", "It removes copyright"], answer: 1, why: "A matching set with the same colors and fonts builds recognition." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Pre-Test: What Do You Already Know?", from: [2, 4, 5, 9, 12, 13, 16, 18] },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      { name: "Design brief", objective: "O1", notYet: "The brief is missing the audience, the message, the format or the size.", meets: "One short paragraph names all four parts.", exceeds: "It also lists the must-have details and was read back to the client." },
      { name: "Layout", objective: "O2", notYet: "A viewer cannot say the main message after 3 seconds, or the layout looks crowded.", meets: "The main message is clearly first, things line up and there is white space.", exceeds: "The flyer and post use the same layout ideas so they read as one set." },
      { name: "Built in Canva", objective: "O3", notYet: "Wrong size, more than 2 fonts, a paid item, or an unchanged template.", meets: "Right size, no more than 2 fonts and 3 main colors, free items only, and the template is made their own.", exceeds: "Started from a blank page or changed the template so much it is clearly their own design." },
      { name: "Checked", objective: "O4", notYet: "A spelling or detail mistake, unreadable text, or an image with no clear right to use it.", meets: "No mistakes, text passes 4.5 to 1, and every image is listed with where it came from.", exceeds: "Another person proofread it and alt text is written for the post." },
      { name: "Exported and described", objective: "O5", notYet: "Wrong file type, unclear file name, or no description.", meets: "Flyer as PDF, post as PNG, clear file names, and a 3 to 4 sentence description.", exceeds: "The description explains why each design choice fits the audience, and the client agreed to it being shown." }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Learners who add the piece to a portfolio and use it in a job, internship or freelance application within 30 days (follow-up survey)",
      "Learners who report making a paid or volunteer design for a business, team or nonprofit within 30 days",
      "Partner organizations and small businesses report using learner-made flyers and posts"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A computer with internet (easiest) or a smartphone with the Canva app",
      "A free Canva account (an email address is needed to sign up)",
      "A free contrast checker, such as WebAIM's",
      "Paper and pen for layout sketches and the brief",
      "A phone camera for taking your own photos",
      "About 2 to 3 hours in total: lessons, practice, checks and the final task"
    ],
    facilitatorNotes: [
      "Take the pre-test together, then do one chapter per session; demonstrate the 3-second test and a template makeover on a shared screen.",
      "Pair learners with a real local client (a nonprofit, school club or small business) when you can; it makes the brief and portfolio real.",
      "Do not let learners copy logos or photos from the web; have them list the source of every image.",
      "If your school or nonprofit may qualify for Canva's Education or Nonprofits plans, check eligibility on Canva's site before the course, but plan every task to work on the free plan.",
      "Score the final task with the rubric and hold a short gallery walk where learners give one kind and one useful comment on each piece."
    ]
  }
};
