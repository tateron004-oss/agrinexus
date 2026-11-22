"use strict";

// Koach Learn course: Non Profits -> "AI for Marketing and Community Outreach". Written as a skill-building course: by the end the student can DO the skill in `outcome`. Two chapters of three micro-lessons; a
// knowledge check closes each chapter; a 20-question quiz closes the course. Model: scripts/koachlearn-courses/re-entry/reentry-ai-digital-confidence.js. See scripts/koachlearn-export.js for how it is built.
//
// lesson: { title, minutes, goal, text: [paragraph], steps: [step] (optional), words: [[term, means]], slides: [{ title, bullets }], sources (optional), tryIt, youCanNow }
// question: { q, options: [4], answer: index of the right option, why }

module.exports = {
  id: "nonprofit-ai-marketing-outreach",
  category: "Non Profits",
  name: "AI for Marketing and Community Outreach",
  skills: "Defining your audience and message, Writing social media posts with AI, Drafting newsletters, Making outreach clear and accessible, Planning a month of outreach",
  outcome: "use AI to plan and draft one month of outreach for a nonprofit program: a key message for one audience, four social media posts, a short newsletter article and a plain-language flyer, all checked, accessible and in your organization's voice.",
  about: [
    "This course is for nonprofit and faith-based staff and volunteers who handle social media, newsletters, flyers and community announcements, often on top of everything else.",
    "You will learn to name your audience and message, then use AI to draft posts, newsletters and flyers quickly, make them clear and accessible to everyone in your community, and plan a month of outreach.",
    "Each lesson takes about five minutes and ends with a hands-on task that becomes part of your outreach plan. A knowledge check closes each chapter and a 20-question quiz closes the course."
  ],
  finalTask: "Make a one-month outreach plan for one real program or event. Include one audience and one key message, four social media posts with image descriptions, a 200-word newsletter article, and a plain-language flyer text, all drafted with AI, checked for facts and privacy, and edited to sound like your organization. Put them on a simple four-week calendar.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Nonprofit and faith-based staff and volunteers who handle social media, newsletters, flyers and community announcements, often on top of everything else.",
    startingPoint: "Post on social media and send emails or flyers now and then, usually in a rush. Many have not planned outreach ahead, written image descriptions or used AI for drafts.",
    gap: "Outreach that is rushed, unclear or hard to read misses the people a program is for, including people who read in another language or use a screen reader. Learners need to plan a month of clear, accessible, honest outreach quickly with AI, without risking anyone's privacy.",
    constraints: [
      "Time: outreach is done on top of other jobs, so lessons are about 5 minutes each",
      "Privacy: written consent for photos of children and clients; no identifying details in stories without agreement",
      "AI translations are checked by a fluent speaker from the community",
      "Email newsletters need a clear way to unsubscribe",
      "Devices: a phone or computer with free tools"
    ],
    prerequisites: "\"Introduction to AI for Nonprofits\", or some experience using an AI assistant."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Given one program and one audience", action: "write a key message that says what it is, why it matters to them and what to do next", standard: "in one or two sentences" },
    { id: "O2", condition: "Given your key message", action: "draft four social media posts with AI: an announcement, a behind-the-scenes post, a thank-you and a last-chance reminder", standard: "each short, ending with one action, and using only photos and stories with consent" },
    { id: "O3", condition: "Given your program notes", action: "write a 200-word newsletter article with one story, one true number and how to help", standard: "with every number, name, date and quote checked" },
    { id: "O4", condition: "Given an outreach draft", action: "rewrite it in plain language and draft a translation for your community", standard: "with the translation checked by a fluent speaker before sharing" },
    { id: "O5", condition: "Given your posts and flyer", action: "write alt text and make them accessible with captions, contrast and readable hashtags", standard: "with alt text that matches what is really in each image" },
    { id: "O6", condition: "Given your outreach pieces and event date", action: "create a four-week outreach calendar with week, channel, piece and who posts", standard: "with dates checked against your real calendar" }
  ],
  chapters: [
    {
      name: "Chapter 1: Message and channels",
      lessons: [
        {
          objectives: ["O1"],
          title: "Knowing your audience and your message",
          minutes: 5,
          goal: "Write one clear key message for one audience.",
          text: [
            "Good outreach speaks to one group at a time. Volunteers, donors, families you serve, church members and local businesses each care about different things.",
            "A key message says, in one or two sentences, what you want that audience to know and do. Example for parents: \"Free after-school tutoring starts September 8 at the community center. Sign up by September 1 so your child has a seat.\"",
            "AI can help you sharpen it. Ask: \"Here is our program: [public details]. Write three versions of a one-sentence message for [audience]. Each should say what it is, why it matters to them, and what to do next.\""
          ],
          steps: ["Choose one program and one audience.", "Write what you want them to know and do.", "Ask AI for three one-sentence versions.", "Pick the clearest one and edit it."],
          words: [["Audience", "the group of people you are trying to reach."], ["Key message", "the one or two sentences you most want your audience to remember and act on."]],
          slides: [
            { title: "One audience at a time", bullets: ["Volunteers, donors, families, members", "Each cares about different things"] },
            { title: "A key message says", bullets: ["What it is", "Why it matters to them", "What to do next"] },
            { title: "Sharpen it with AI", bullets: ["Ask for three one-sentence versions", "Pick the clearest", "Edit it to sound like you"] }
          ],
          tryIt: "Pick one program and one audience. Use AI to get three versions of a key message, then write your final one at the top of a page titled \"Outreach plan\".",
          youCanNow: "write a clear key message for one audience.",
          quickCheck: [
            { objective: "O1", q: "Why should outreach speak to one group at a time?", options: ["Different groups care about different things", "It is cheaper to print", "Social media allows only one group", "Donors and volunteers are the same people"], answer: 0, why: "Volunteers, donors, families and businesses each care about different things." },
            { objective: "O1", q: "Your message to volunteers does not say what to do next. What do you add?", options: ["A longer history of the organization", "One clear action, such as \"Sign up by Friday\"", "More hashtags", "A list of every program"], answer: 1, why: "A key message says what it is, why it matters and what to do next." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Writing social media posts with AI",
          minutes: 5,
          goal: "Draft four social media posts for one program with AI.",
          text: [
            "Social media posts work best when they are short, show a real moment, and end with one clear action. Different platforms suit different lengths: a Facebook post can be longer, an Instagram caption goes with a photo, and a post on a short-text platform must be brief.",
            "Ask: \"Using this key message: [message], write four social media posts for [platform] over four weeks: an announcement, a behind-the-scenes post, a volunteer or participant thank-you, and a last-chance reminder. Under 60 words each, friendly, with one call to action.\"",
            "Use your own photos with permission. Never post photos of children or clients without written consent, and never share someone's story with details that could identify them unless they agreed."
          ],
          steps: ["Give AI your key message and platform.", "Ask for four post types over four weeks.", "Edit each to sound like your organization.", "Pick photos you have permission to use."],
          words: [["Platform", "a social media service, like Facebook or Instagram."], ["Caption", "the text that goes with a photo or video post."], ["Consent", "a person's agreement, ideally written, to be shown or quoted."]],
          slides: [
            { title: "Posts that work", bullets: ["Short", "A real moment", "One clear action"] },
            { title: "Four post types", bullets: ["Announcement", "Behind the scenes", "Thank-you", "Last-chance reminder"] },
            { title: "Photos and stories", bullets: ["Use your own photos with permission", "Written consent for children and clients"] }
          ],
          tryIt: "Use AI to draft four posts for one platform from your key message. Edit them and add them to your outreach plan.",
          youCanNow: "draft a series of social media posts with AI.",
          quickCheck: [
            { objective: "O2", q: "Which kind of post must be brief?", options: ["A Facebook post", "A newsletter article", "A post on a short-text platform", "A printed flyer"], answer: 2, why: "A post on a short-text platform must be brief; a Facebook post can be longer." },
            { objective: "O2", q: "A participant shared a moving story but did not agree to be named. How do you post it?", options: ["Post it with their name", "Post their photo with the story", "Post it and ask later", "Share it only without identifying details, or not at all"], answer: 3, why: "Never share someone's story with identifying details unless they agreed." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Drafting a newsletter article",
          minutes: 5,
          goal: "Turn program notes into a short newsletter article with AI.",
          text: [
            "Newsletters keep donors, volunteers and members close. A short article tells one story: what happened, who it helped (no private details), what it means for the mission, and what readers can do next.",
            "Give AI your notes: \"Turn these notes into a 200-word newsletter article for our supporters. Use a friendly headline, one short story, one true number, and end with how to help: [notes].\"",
            "Check the number and every name and date. Add a quote only if a real person said it and agreed to be quoted. If you send email newsletters, include a clear way to unsubscribe and follow your email tool's rules."
          ],
          steps: ["Write rough notes about one recent moment.", "Ask AI for a 200-word article with a headline, story, number and how to help.", "Check every fact and quote.", "Add it to your newsletter with a photo you may use."],
          words: [["Newsletter", "a regular update sent to supporters by email or on paper."], ["Unsubscribe", "a link that lets someone stop getting your emails."]],
          slides: [
            { title: "One story per article", bullets: ["What happened", "Who it helped, no private details", "What readers can do"] },
            { title: "The prompt", bullets: ["200 words, friendly headline", "One story, one true number", "End with how to help"] },
            { title: "Before sending", bullets: ["Check facts and quotes", "Real quotes only, with agreement", "Include an unsubscribe link"] }
          ],
          tryIt: "Write five lines of notes about a recent program moment. Use AI to turn them into a 200-word newsletter article. Check every fact.",
          youCanNow: "turn program notes into a checked newsletter article.",
          quickCheck: [
            { objective: "O3", q: "How many stories should a short newsletter article tell?", options: ["One", "Five", "None", "As many as fit"], answer: 0, why: "A short article tells one story." },
            { objective: "O3", q: "AI's newsletter draft adds a quote from a volunteer who never said it. What do you do?", options: ["Keep it; it sounds nice", "Remove it, or ask the volunteer for a real quote they agree to", "Change the volunteer's name", "Move it to the end"], answer: 1, why: "Add a quote only if a real person said it and agreed to be quoted." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Message and channels",
        questions: [
          { objective: "O1", q: "What is a key message?", options: ["One or two sentences you want an audience to remember and act on", "Your full annual report", "A password", "A donor list"], answer: 0, why: "A key message is short and leads to action." },
          { objective: "O1", q: "Which is the best key message for parents?", options: ["\"We do many things.\"", "\"Free tutoring starts September 8 at the community center. Sign up by September 1.\"", "\"Learn more.\"", "\"Support us.\""], answer: 1, why: "It says what, why and what to do next." },
          { objective: "O2", q: "You want to post a photo of children at your program. You need:", options: ["Nothing", "A filter", "Written consent from a parent or guardian", "An AI caption"], answer: 2, why: "Children's photos need permission." },
          { objective: "O3", q: "A newsletter article quote should come from:", options: ["The AI", "A made-up volunteer", "A famous person you never spoke to", "A real person who agreed to be quoted"], answer: 3, why: "Invented quotes are dishonest." },
          { objective: "O3", q: "Why include an unsubscribe link in email newsletters?", options: ["So people can stop getting emails", "To get more donations", "It is decoration", "To share data"], answer: 0, why: "People should be able to opt out." }
        ]
      }
    },
    {
      name: "Chapter 2: Reaching everyone",
      lessons: [
        {
          objectives: ["O4"],
          title: "Plain language and other languages",
          minutes: 5,
          goal: "Use AI to rewrite outreach in plain language and draft a translation for review.",
          text: [
            "Many people in your community read in a second language, read at a basic level, or are busy and skim. Plain language helps everyone: short sentences, common words, the most important thing first.",
            "Ask: \"Rewrite this at a 6th-grade reading level. Short sentences. Put the date, place and how to sign up first.\" Then: \"Translate this into Spanish for families in our community.\"",
            "AI translations can be wrong or sound strange. Always have a fluent speaker from your community check a translation before you share it."
          ],
          steps: ["Ask AI to rewrite your text at a 6th-grade reading level.", "Put date, place and action first.", "Ask for a translation into a language your community uses.", "Have a fluent speaker check it."],
          words: [["Plain language", "writing people can understand the first time they read it."], ["Reading level", "how easy text is to read; a lower grade level is easier."]],
          slides: [
            { title: "Plain language helps everyone", bullets: ["Short sentences, common words", "Most important thing first"] },
            { title: "Ask AI", bullets: ["\"Rewrite at a 6th-grade reading level\"", "\"Translate this into Spanish\""] },
            { title: "Check translations", bullets: ["AI can get them wrong", "A fluent community member reviews"] }
          ],
          tryIt: "Take your key message and one post. Ask AI to rewrite them in plain language and translate them into a language your community uses. Note who could check the translation.",
          youCanNow: "make outreach plain and draft translations for a fluent speaker to check.",
          quickCheck: [
            { objective: "O4", q: "Which is part of plain language?", options: ["Long sentences", "Technical words", "Short sentences and common words", "The most important thing last"], answer: 2, why: "Plain language uses short sentences, common words and the most important thing first." },
            { objective: "O4", q: "AI translated your flyer into Vietnamese and no one on staff speaks it. What do you do?", options: ["Share it anyway", "Ask AI to check its own translation", "Use only English", "Find a fluent speaker from your community to check it first"], answer: 3, why: "AI translations can be wrong, so a fluent community speaker checks them before sharing." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Making outreach accessible",
          minutes: 4,
          goal: "Write image descriptions and make posts and flyers easier for everyone to use.",
          text: [
            "Accessible outreach works for people who are blind or have low vision, are deaf, or use a screen reader. Alt text is a short description of an image that a screen reader reads aloud.",
            "AI can draft alt text: \"Write alt text under 125 characters for a photo of volunteers sorting cans at a food drive.\" Check it describes what really is in the photo.",
            "Other easy wins: put captions on videos, use strong color contrast on flyers, do not put important words only inside an image, and write hashtags with capital letters (#FeedOurCity) so screen readers say them correctly."
          ],
          steps: ["Write alt text for every image (AI can draft it).", "Add captions to videos.", "Use strong contrast on flyers.", "Keep key details in the text, not only in the image.", "Capitalize each word in hashtags."],
          words: [["Alt text", "a short written description of an image, read aloud by screen readers."], ["Screen reader", "software that reads screen text aloud for people who are blind or have low vision."], ["Contrast", "how different the text color is from the background."]],
          slides: [
            { title: "Accessible outreach", bullets: ["Works for people who are blind, low vision or deaf", "Alt text describes images"] },
            { title: "AI drafts alt text", bullets: ["Under 125 characters", "Check it matches the photo"] },
            { title: "Easy wins", bullets: ["Captions on videos", "Strong contrast", "Key details in text, not only images", "#CapitalizeHashtags"] }
          ],
          tryIt: "Write alt text for the photos with your four posts, using AI to draft and you to check. Fix any hashtags so each word starts with a capital.",
          youCanNow: "make posts and flyers accessible with alt text, captions and clear design.",
          quickCheck: [
            { objective: "O5", q: "Who does alt text help?", options: ["People who use a screen reader", "Only search engines", "Only staff", "People with fast internet"], answer: 0, why: "A screen reader reads alt text aloud for people who are blind or have low vision." },
            { objective: "O5", q: "Your flyer has the date and place only inside a picture. What do you change?", options: ["Nothing", "Put the important details in the text too", "Make the picture bigger", "Add more pictures"], answer: 1, why: "Screen readers cannot read words inside an image." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Planning a month of outreach",
          minutes: 5,
          goal: "Put your outreach pieces on a four-week calendar.",
          text: [
            "A simple calendar keeps outreach steady. List four weeks. For each week, write what goes out, on which channel, and who posts it.",
            "AI can suggest a schedule: \"Here are my pieces: [list]. Our event is on [date]. Make a four-week outreach calendar as a table: week, channel, piece, who posts.\" Check the dates against your real calendar.",
            "Afterward, look at what worked: sign-ups, comments, shares, replies. Keep doing what brought people in."
          ],
          steps: ["List your pieces: posts, newsletter, flyer.", "Ask AI for a four-week calendar table.", "Check dates against your real calendar.", "Assign who posts each piece.", "After the month, note what brought people in."],
          words: [["Content calendar", "a schedule of what you will post or send, and when."], ["Channel", "a way you reach people: social media, email, flyers, announcements."]],
          slides: [
            { title: "A simple calendar", bullets: ["Four weeks", "What goes out, where, and who posts"] },
            { title: "Ask AI for a table", bullets: ["Week, channel, piece, who posts", "Check dates yourself"] },
            { title: "Learn from results", bullets: ["Sign-ups, comments, shares", "Keep what brought people in"] }
          ],
          tryIt: "Final task: finish your one-month outreach plan. Put your key message, four posts with alt text, newsletter article and plain-language flyer text on a four-week calendar.",
          youCanNow: "plan and draft a month of nonprofit outreach with AI.",
          quickCheck: [
            { objective: "O6", q: "What do you look at after a month of outreach?", options: ["Only how many posts you made", "The color of the flyers", "Sign-ups, comments, shares and replies", "Other groups' posts"], answer: 2, why: "Look at what worked: sign-ups, comments, shares and replies." },
            { objective: "O6", q: "AI's calendar puts the last-chance reminder after your event date. What do you do?", options: ["Use it as it is", "Delete the reminder", "Post it twice", "Move it to before the event, checking dates against your real calendar"], answer: 3, why: "Check AI's dates against your real calendar." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Reaching everyone",
        questions: [
          { objective: "O4", q: "What is plain language?", options: ["Writing with no punctuation", "Writing people understand the first time", "Very long sentences", "Only technical words"], answer: 1, why: "Plain language is clear on first reading." },
          { objective: "O4", q: "AI translated your flyer into Spanish. Before sharing it, you should:", options: ["Share it right away", "Translate it again with AI", "Have a fluent speaker check it", "Shorten it"], answer: 2, why: "AI translations can be wrong." },
          { objective: "O5", q: "What is alt text?", options: ["A backup password", "A second post", "A type of font", "A short description of an image read by screen readers"], answer: 3, why: "Alt text makes images accessible." },
          { objective: "O5", q: "Which hashtag is easiest for a screen reader?", options: ["#FeedOurCity", "#feedourcity", "#FEEDOURCITY", "#f_o_c"], answer: 0, why: "Capital letters help screen readers say each word." },
          { objective: "O6", q: "What is a content calendar?", options: ["A holiday list", "A schedule of what you post or send, and when", "A donor birthday list", "A tax form"], answer: 1, why: "It keeps outreach steady and organized." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: AI for Marketing and Community Outreach",
    questions: [
      { objective: "O1", q: "Good outreach speaks to:", options: ["Everyone with the same message", "Nobody in particular", "One audience at a time", "Only the board"], answer: 2, why: "Different audiences care about different things." },
      { objective: "O1", q: "A key message should say:", options: ["Your entire history", "Only your logo", "Your budget", "What it is, why it matters to them, and what to do next"], answer: 3, why: "Those parts lead to action." },
      { objective: "O1", q: "A good way to sharpen a message with AI is to:", options: ["Ask for three short versions and pick the clearest", "Ask for one very long version", "Ask it to choose your audience", "Skip editing"], answer: 0, why: "Comparing versions helps you pick." },
      { objective: "O2", q: "Social media posts work best when they are:", options: ["Long and general", "Short, real and end with one action", "Without any action", "Full of jargon"], answer: 1, why: "Short and specific posts get responses." },
      { objective: "O2", q: "Which is one of the four post types in the lesson?", options: ["A tax return", "A legal contract", "A last-chance reminder", "A password reset"], answer: 2, why: "Reminders help people act before a deadline." },
      { objective: "O2", q: "What is a caption?", options: ["A hat", "A donor gift", "A web address", "Text that goes with a photo or video"], answer: 3, why: "Captions explain the image or video." },
      { objective: "O2", q: "Before sharing a client's story, you need:", options: ["Their consent and no identifying details unless they agreed", "Nothing", "Their bank details", "A famous quote"], answer: 0, why: "Stories require consent and privacy." },
      { objective: "O3", q: "A newsletter article should tell:", options: ["Every event of the year", "One story with one true number and how to help", "Only donor names", "Nothing about the mission"], answer: 1, why: "One focused story is easier to read." },
      { objective: "O3", q: "What should you check in an AI newsletter draft?", options: ["Only the headline color", "Nothing", "Every number, name, date and quote", "The word count only"], answer: 2, why: "AI can get facts wrong." },
      { objective: "O3", q: "An unsubscribe link lets people:", options: ["Donate twice", "Volunteer", "Change your password", "Stop getting your emails"], answer: 3, why: "People should be able to opt out." },
      { objective: "O4", q: "Which prompt makes text easier to read?", options: ["\"Rewrite at a 6th-grade reading level with short sentences.\"", "\"Make it more complex.\"", "\"Add jargon.\"", "\"Make it longer.\""], answer: 0, why: "Lower reading levels are easier." },
      { objective: "O4", q: "In plain language, what goes first?", options: ["A long history", "The most important thing, like date, place and action", "Thank-yous to the board", "Legal notes"], answer: 1, why: "Busy readers see the key details first." },
      { objective: "O4", q: "Who should check an AI translation?", options: ["The AI again", "Nobody", "A fluent speaker from your community", "A random website"], answer: 2, why: "Fluent people catch errors." },
      { objective: "O5", q: "A screen reader is:", options: ["A person who reads screens", "A TV", "A printer", "Software that reads screen text aloud"], answer: 3, why: "It helps people who are blind or have low vision." },
      { objective: "O5", q: "AI drafted alt text for a photo. You should:", options: ["Check it matches what is really in the photo", "Use it without looking", "Delete the photo", "Make it 500 words"], answer: 0, why: "AI can describe images wrongly." },
      { objective: "O5", q: "Which is an easy accessibility win for videos?", options: ["Turn off sound", "Add captions", "Make it longer", "Use tiny text"], answer: 1, why: "Captions help people who are deaf or watching muted." },
      { objective: "O5", q: "Why avoid putting key details only inside an image?", options: ["Images are illegal", "It costs more", "Screen readers cannot read words in an image", "Donors dislike images"], answer: 2, why: "Text in the post reaches everyone." },
      { objective: "O6", q: "A content calendar table should include:", options: ["Only colors", "Donor gift amounts", "Passwords", "Week, channel, piece and who posts"], answer: 3, why: "This keeps outreach organized." },
      { objective: "O6", q: "AI made your outreach calendar. Before using it:", options: ["Check its dates against your real calendar", "Post everything today", "Trust every date", "Delete it"], answer: 0, why: "AI can get dates wrong." },
      { objective: "O6", q: "After a month of outreach, you should:", options: ["Never look at results", "Note what brought people in and keep doing it", "Delete all posts", "Stop all outreach"], answer: 1, why: "Results show what works." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Pre-Test: What Do You Already Know?",
    from: [
      1,
      3,
      7,
      10,
      14,
      17
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      {
        name: "Audience and key message",
        objective: "O1",
        notYet: "No single audience, or the message has no next step.",
        meets: "One audience and a one- or two-sentence message with what, why and what to do next.",
        exceeds: "Learner tried three versions and can say why they chose this one."
      },
      {
        name: "Four social posts",
        objective: "O2",
        notYet: "Fewer than four posts, or a photo or story without consent.",
        meets: "Four short posts of the four types, each ending with one action, with consent for all photos and stories.",
        exceeds: "Each post fits its platform's length."
      },
      {
        name: "Newsletter article",
        objective: "O3",
        notYet: "A number, name, date or quote is not checked.",
        meets: "About 200 words, one story, one true number and how to help, all checked.",
        exceeds: "Includes a real quote the person agreed to."
      },
      {
        name: "Plain and accessible",
        objective: "O5",
        notYet: "Flyer is hard to read, or images have no alt text.",
        meets: "Plain-language flyer with key details first, and alt text for every image that matches the photo.",
        exceeds: "Also has a translation checked by a fluent speaker and readable hashtags."
      },
      {
        name: "Four-week calendar",
        objective: "O6",
        notYet: "No calendar, or dates do not match the real calendar.",
        meets: "A four-week table with week, channel, piece and who posts, dates checked.",
        exceeds: "Notes how results will be tracked after the month."
      }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Organizations that run a planned month of outreach within 60 days (follow-up survey)",
      "Program sign-ups or event attendance reported before and after the outreach month",
      "Organizations that add alt text and translations to their outreach"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A phone or computer with internet",
      "A free AI assistant",
      "Public details for one real program or event, and photos you have permission to use",
      "About 60 minutes in total: lessons, practice, checks and the final task"
    ],
    facilitatorNotes: [
      "Have learners pick one real upcoming program or event before the session.",
      "Remind learners about written consent for photos of children and clients.",
      "Invite a fluent community member to check any translations made in the session.",
      "Try a screen reader on a phone together so learners hear why alt text and hashtags matter.",
      "Score the final task with the rubric, and give feedback on one Not yet row at a time."
    ]
  }
};
