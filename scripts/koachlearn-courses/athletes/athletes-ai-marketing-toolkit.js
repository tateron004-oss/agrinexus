"use strict";

// Koach Learn course: Athletes -> "AI Toolkit for Marketing and Branding". Skill-building course: by the end the student can DO the skill in `outcome`.
// Shape: scripts/koachlearn-courses/README.md. Model: re-entry/reentry-ai-digital-confidence.js.

module.exports = {
  id: "athletes-ai-marketing-toolkit",
  category: "Athletes",
  name: "AI Toolkit for Marketing and Branding",
  skills: "Writing a brand voice guide, Building a prompt library, Using AI for writing, design and video, Scheduling and tracking posts, Reviewing AI output for accuracy, rights and disclosure",
  outcome: "set up your own AI marketing toolkit: a one-page brand voice guide, a library of ten reusable prompts, one tool each for writing, design, video and tracking, and a five-point review checklist you run before anything goes public.",
  about: [
    "This course is for athletes, coaches and team staff who already post and promote, and want a repeatable system that saves time without losing their voice.",
    "A toolkit is not about having the most apps. It is a small set of tools plus a guide and saved prompts so every post sounds like you and goes through the same quality check.",
    "Each lesson is about five minutes with a \"Try it now\" task. A knowledge check closes each chapter, and a 20-question quiz closes the course."
  ],
  finalTask: "Build your toolkit document: a one-page brand voice guide, ten saved prompts (captions, bios, pitch emails, post ideas, replies and more), your chosen tool for writing, design, video and tracking, and a five-point review checklist. Use the toolkit to make and review one post from start to finish.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Athletes, coaches and team staff who already post and promote online and want a repeatable system that saves time without losing their voice.",
    startingPoint: "Post regularly and have tried AI tools for captions or ideas. Most start from zero each time, get generic AI writing, use several overlapping apps, and do not check rights, disclosure or safety in a set way before posting.",
    gap: "Without a system, AI content sounds generic and mistakes about facts, rights, disclosures or privacy slip through, which can cost trust, deals or safety. A voice guide, saved prompts, one tool per job and a review checklist make content faster, more personal and safer.",
    constraints: [
      "Plain language at about a grade 8 reading level",
      "A phone or computer with free tools: an AI assistant, Canva, a video editor and Google Sheets or Docs",
      "About 60 minutes in total",
      "Rights to photos, logos and music; FTC disclosure and school or state NIL rules",
      "No private information or live location in posts; no misleading AI images of real people"
    ],
    prerequisites: "None. \"Social Media Branding for Athletes\" or \"Content Creation for Athletes\" is a helpful first step."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Using five of your own captions and an AI assistant", action: "write a one-page brand voice guide", standard: "with three voice words, words you use and never use, topics to post and avoid, emoji and hashtag habits, and two sample posts" },
    { id: "O2", condition: "Given your most common marketing jobs", action: "create a library of ten reusable prompts with blanks", standard: "each one referring to your voice guide and saved in one document" },
    { id: "O3", condition: "Given the jobs of writing, design, video and tracking", action: "choose one tool for each job", standard: "with each new tool's maker, data use and cost after any trial checked" },
    { id: "O4", condition: "Given any AI-made post", action: "check it with the five-point review: true, voice, rights, disclosure and safe", standard: "passing all five checks before it goes public" },
    { id: "O5", condition: "Given photos, logos, music and brand ties in your content", action: "identify what you may use and write a clear disclosure for any brand connection", standard: "with permission for every item you did not make, licensed music, no misleading AI images and the disclosure in the post itself" },
    { id: "O6", condition: "After a week of posting", action: "record your numbers in a tracking sheet and update your prompts and voice guide from the results", standard: "with top and bottom posts named and any AI reading checked against the sheet" }
  ],
  chapters: [
    {
      name: "Chapter 1: Your voice and your prompts",
      lessons: [
        {
          objectives: ["O1"],
          title: "Writing your brand voice guide",
          minutes: 5,
          goal: "Write a one-page guide that tells any AI tool how you sound.",
          text: [
            "AI writes in a generic voice unless you tell it how you sound. A brand voice guide fixes that, and also helps teammates or family who help with your posts.",
            "Your guide has: three words for your voice (for example \"confident, grateful, funny\"); words and phrases you use; words you never use; topics you post about; topics you avoid; emoji and hashtag habits; and two sample posts that sound exactly like you.",
            "Ask an AI assistant to help: paste five of your best captions and ask, \"Describe the voice in these posts in three words, and list phrases I repeat.\" Then edit the result."
          ],
          steps: ["Collect five captions that sound like you.", "Ask AI to describe your voice.", "Pick three voice words.", "List words you use and never use.", "Add topics to post and avoid, and two sample posts."],
          words: [["Brand voice", "the personality and style of how you write and speak."], ["Style guide", "a document of rules so content stays consistent."]],
          slides: [
            { title: "Why a voice guide", bullets: ["AI is generic unless told", "Helps anyone who helps you post"] },
            { title: "What goes in it", bullets: ["Three voice words", "Words you use and never use", "Topics to post and avoid", "Two sample posts"] },
            { title: "AI helps you find it", bullets: ["Paste five real captions", "Ask it to describe your voice"] }
          ],
          tryIt: "Paste five of your captions into an AI assistant and ask it to describe your voice. Write your one-page guide from the result.",
          youCanNow: "write a brand voice guide that keeps AI output sounding like you.",
          quickCheck: [
            { objective: "O1", q: "Why does AI need a voice guide?", options: ["It writes in a generic voice unless you tell it how you sound", "It cannot write captions without one", "It is required by law", "It makes posts longer"], answer: 0, why: "A voice guide tells AI and helpers how you sound." },
            { objective: "O1", q: "Your little brother helps post for you. How does your voice guide help?", options: ["It gives him your password", "It lets him post anything", "It shows him how you sound and what you never post", "It replaces your review"], answer: 2, why: "The guide helps teammates or family who help with your posts." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Building a prompt library",
          minutes: 5,
          goal: "Save ten reusable prompts for your most common marketing jobs.",
          text: [
            "A prompt library is a document of prompts you reuse. Instead of starting from zero each time, you copy a prompt, fill in the blanks and paste in your voice guide.",
            "Good prompts have blanks in brackets: \"Using my voice guide below, write three captions under 150 characters for a [type] post about [topic]. End with a question.\" Others: bio options, sponsor pitch email, thank-you note, post ideas for a pillar, a polite reply to a negative comment, a weekly recap.",
            "Keep the library in Google Docs or a notes app. Improve a prompt each time it gives you a weak answer."
          ],
          steps: ["List your ten most common marketing jobs.", "Write a prompt for each with [blanks].", "Add \"Using my voice guide below...\" to each.", "Save them in one document.", "Improve a prompt whenever it gives a weak answer."],
          words: [["Prompt library", "a saved collection of prompts you reuse."], ["Template prompt", "a prompt with blanks you fill in each time."]],
          slides: [
            { title: "Prompt library", bullets: ["Reuse, don't restart", "Fill in the [blanks]", "Paste your voice guide"] },
            { title: "Ten common jobs", bullets: ["Captions, bios, post ideas", "Sponsor pitch, thank-you note", "Replies, weekly recap"] },
            { title: "Keep improving", bullets: ["One document", "Fix prompts that give weak answers"] }
          ],
          tryIt: "Write your first five template prompts with [blanks]. Test one with your voice guide and fix it if the answer is weak.",
          youCanNow: "build and use a prompt library for your marketing jobs.",
          quickCheck: [
            { objective: "O2", q: "What is a prompt library?", options: ["A list of apps", "A document of prompts you reuse", "Your followers list", "A library card"], answer: 1, why: "It is a saved set of prompts you copy, fill in and reuse." },
            { objective: "O2", q: "You often reply to negative comments. What do you add to your library?", options: ["Nothing; reply in anger", "A new app", "A list of people to block", "A prompt for a polite reply with [blanks] and your voice guide"], answer: 3, why: "Save a prompt for each common job, including polite replies." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Choosing one tool per job",
          minutes: 5,
          goal: "Pick one tool for writing, design, video and tracking.",
          text: [
            "You need four jobs covered. Writing: an AI assistant such as ChatGPT, Microsoft Copilot or Google Gemini. Design: a tool like Canva, which has templates and AI features. Video: a free editor like CapCut or the editors built into Instagram, TikTok and YouTube. Tracking: each app's insights plus a Google Sheet.",
            "Choose one per job and learn it well. Before signing up for anything new, check who makes it, what data it collects, and what it costs after any free trial.",
            "Many apps also let you schedule posts in advance, either inside the app or with scheduling tools. Scheduling helps during busy weeks, but check scheduled posts still make sense if news or results change."
          ],
          steps: ["Pick a writing tool.", "Pick a design tool.", "Pick a video editor.", "Set up a tracking sheet.", "Write the four choices in your toolkit document."],
          words: [["Scheduling", "setting a post to publish automatically at a later time."], ["Insights", "an app's numbers about how your posts perform."]],
          slides: [
            { title: "Four jobs", bullets: ["Writing: an AI assistant", "Design: Canva", "Video: CapCut or in-app editors", "Tracking: insights + a sheet"] },
            { title: "Before signing up", bullets: ["Who makes it?", "What data does it collect?", "Cost after the free trial?"] },
            { title: "Scheduling", bullets: ["Great for busy weeks", "Check posts still fit if news changes"] }
          ],
          tryIt: "Write your four tool choices in your toolkit document and set up a tracking sheet with columns: Date, Post, Platform, Views, Engagement, Notes.",
          youCanNow: "choose a small set of tools that covers every marketing job.",
          quickCheck: [
            { objective: "O3", q: "Which tool fits the tracking job?", options: ["A video editor", "A design template", "Each app's insights plus a Google Sheet", "An AI image maker"], answer: 2, why: "Tracking uses app insights and a spreadsheet." },
            { objective: "O3", q: "Your game was cancelled and a scheduled post says \"See you tonight!\". What do you do?", options: ["Change or cancel the scheduled post", "Let it post", "Delete your account", "Schedule a second post"], answer: 0, why: "Check scheduled posts still make sense when news changes." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Your voice and your prompts",
        questions: [
          { objective: "O1", q: "Why write a brand voice guide?", options: ["To make posts longer", "To hide your name", "So AI and helpers write the way you sound", "It's required by apps"], answer: 2, why: "AI is generic unless you tell it your voice." },
          { objective: "O1", q: "Which belongs in a voice guide?", options: ["Words you never use", "Your password", "Your bank info", "Your rival's stats"], answer: 0, why: "It shapes how content sounds." },
          { objective: "O2", q: "What makes a prompt reusable?", options: ["Being very short", "Having no instructions", "Using all caps", "Blanks in [brackets] you fill in"], answer: 3, why: "Templates save time each use." },
          { objective: "O2", q: "A saved prompt keeps giving weak answers. You:", options: ["Delete the library", "Improve the prompt", "Use it anyway", "Switch to five new apps"], answer: 1, why: "Prompts get better with edits." },
          { objective: "O3", q: "Before signing up for a new AI tool, check:", options: ["Its logo color", "Who makes it, its data use and cost after the trial", "How many ads it shows", "Nothing"], answer: 1, why: "This protects your data and money." }
        ]
      }
    },
    {
      name: "Chapter 2: Quality, rights and results",
      lessons: [
        {
          objectives: ["O4"],
          title: "The five-point review checklist",
          minutes: 5,
          goal: "Review AI-made content with a five-point checklist before posting.",
          text: [
            "AI saves time, but you are responsible for everything you post. Run every piece through five checks.",
            "1. True: every fact, stat and claim is correct. 2. Voice: it sounds like you (read it out loud). 3. Rights: you own or may use every photo, logo, clip and song. 4. Disclosure: any brand payment or free product is clearly disclosed. 5. Safe: no private info, live location or anything you'd regret.",
            "Put the checklist at the top of your toolkit document. When someone helps you post, they use it too."
          ],
          steps: ["True: check facts and stats.", "Voice: read it out loud.", "Rights: check photos, logos, clips and music.", "Disclosure: brand ties clearly stated.", "Safe: no private info or live location."],
          words: [["Review checklist", "a short list of checks done before anything is published."], ["Responsible", "you answer for what is posted, even if AI wrote it."]],
          slides: [
            { title: "You are responsible", bullets: ["Even if AI wrote it"] },
            { title: "Five checks", bullets: ["1. True  2. Voice", "3. Rights  4. Disclosure", "5. Safe"] },
            { title: "Use it every time", bullets: ["Top of your toolkit", "Helpers use it too"] }
          ],
          tryIt: "Take one AI-written caption and run the five checks. Write what you changed for each check.",
          youCanNow: "review AI content for truth, voice, rights, disclosure and safety.",
          quickCheck: [
            { objective: "O4", q: "What does the \"Rights\" check ask?", options: ["Is the caption long enough?", "Is it trending?", "Did you post today?", "Do you own or have permission for every photo, logo, clip and song?"], answer: 3, why: "Rights means you may use everything in the post." },
            { objective: "O4", q: "An AI caption mentions the park where you train every morning at 6. Which check catches it?", options: ["Voice", "Safe", "True", "Disclosure"], answer: 1, why: "The Safe check removes private info and live location or routine." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Rights, logos, music and disclosure",
          minutes: 5,
          goal: "Identify what you may use in your content and write a clear disclosure for brand ties.",
          text: [
            "Rights: you can use photos and videos you made, and ones you have permission for. Team and game photos taken by others belong to the photographer or school, so ask. School, league and brand logos need permission. Use music from an app's licensed library.",
            "AI images: be careful making AI pictures of real people, teammates, or brand logos. Do not make images that could fool people into thinking something happened that did not.",
            "Disclosure: the FTC says to clearly disclose any payment, free product or other connection to a brand, in the post itself, using clear words like \"Ad\" or \"Thanks [brand] for the free gear\". Student-athletes: check NIL rules with your compliance office or state athletic association."
          ],
          steps: ["Use your own photos or ones you have permission for.", "Ask before using logos.", "Use licensed music.", "Don't make misleading AI images of real people.", "Disclose brand ties clearly in each post."],
          words: [["Copyright", "the owner's legal right to control copies of photos, video, music and writing."], ["Permission", "a clear yes from the owner to use their work."]],
          slides: [
            { title: "Rights", bullets: ["Your own photos and videos", "Others' photos: ask", "Logos need permission; licensed music"] },
            { title: "AI images", bullets: ["Careful with real people and logos", "Nothing that fools people"] },
            { title: "Disclosure", bullets: ["Payment or free product: say it clearly", "In the post, \"Ad\" or a thank-you", "Check NIL rules"] }
          ],
          sources: [
            { name: "FTC: Disclosures 101 for Social Media Influencers", url: "https://www.ftc.gov/business-guidance/resources/disclosures-101-social-media-influencers" },
            { name: "NCAA: Name, Image and Likeness", url: "https://www.ncaa.org/student-athletes/name-image-likeness/" }
          ],
          tryIt: "Look at your last five posts. For each photo, clip and song, write who owns it and whether you had permission. Fix or remove anything that fails.",
          youCanNow: "use only content you have rights to and disclose brand ties correctly.",
          quickCheck: [
            { objective: "O5", q: "Who usually owns game photos taken by a school photographer?", options: ["The photographer or school", "You, because you are in them", "Anyone who sees them", "The other team"], answer: 0, why: "Photos taken by others belong to the photographer or school, so ask." },
            { objective: "O5", q: "You want an AI image of your teammate holding a trophy they never won. What do you do?", options: ["Make it as a joke", "Post it with no caption", "Ask AI to make it more real", "Do not make it; it could fool people"], answer: 3, why: "Do not make AI images that could fool people into thinking something happened." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Tracking results and improving the toolkit",
          minutes: 5,
          goal: "Track results weekly and use them to improve your prompts and plan.",
          text: [
            "Once a week, copy your posts' numbers from each app's insights into your tracking sheet: views, engagement (likes, comments, shares, saves) and anything tied to your goal, like link clicks or sign-ups.",
            "Find your top and bottom posts. Paste the table into an AI assistant and ask: \"Which types of posts did best and what do they have in common? Give me two ideas for next week.\" Check its reading against the sheet.",
            "Then improve your toolkit: update the prompt that made your best post, fix the one behind your worst, and add any new lesson to your voice guide."
          ],
          steps: ["Copy weekly numbers into your sheet.", "Find top and bottom posts.", "Ask AI what the top posts share.", "Check its answer against the sheet.", "Update your prompts and voice guide."],
          words: [["Engagement", "how people interact: likes, comments, shares, saves."], ["Iterate", "improve something step by step based on results."]],
          slides: [
            { title: "Weekly numbers", bullets: ["Views and engagement", "Goal numbers: clicks, sign-ups"] },
            { title: "Learn from them", bullets: ["Top and bottom posts", "AI finds what top posts share", "Check against your sheet"] },
            { title: "Improve the toolkit", bullets: ["Update winning prompts", "Fix weak ones", "Add lessons to your voice guide"] }
          ],
          tryIt: "Final task: finish your toolkit document (voice guide, ten prompts, four tools, five-point checklist), then make one post from start to finish with it and log its numbers in your sheet.",
          youCanNow: "track results and keep improving your AI marketing toolkit.",
          quickCheck: [
            { objective: "O6", q: "How often should you copy your numbers into your tracking sheet?", options: ["Once a year", "Once a week", "Never", "Every hour"], answer: 1, why: "Record numbers weekly." },
            { objective: "O6", q: "Your best post came from one saved prompt. What do you do?", options: ["Delete the prompt", "Stop posting that type", "Update and keep improving that prompt", "Switch all your tools"], answer: 2, why: "Update the prompt that made your best post and fix the one behind your worst." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Quality, rights and results",
        questions: [
          { objective: "O4", q: "Who is responsible for an AI-written post you publish?", options: ["The AI company", "Your followers", "Nobody", "You"], answer: 3, why: "You answer for what you post." },
          { objective: "O4", q: "Which is one of the five checks?", options: ["Rights", "Font size", "Number of emojis", "Post length"], answer: 0, why: "You must own or have permission for everything used." },
          { objective: "O5", q: "A team photographer took a great photo of you. Before posting, you:", options: ["Crop out their watermark", "Post it as yours", "Ask for permission", "Edit it with AI"], answer: 2, why: "The photographer or school may own it." },
          { objective: "O5", q: "Making an AI image that looks like a teammate did something they didn't is:", options: ["Fine if it's funny", "Required", "Good marketing", "Misleading and should be avoided"], answer: 3, why: "Don't make content that fools people." },
          { objective: "O6", q: "AI says your videos did best. You:", options: ["Trust it fully", "Check its reading against your sheet", "Delete your sheet", "Stop posting videos"], answer: 1, why: "AI can misread data." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: AI Toolkit for Marketing and Branding",
    questions: [
      { objective: "O1", q: "A marketing toolkit is:", options: ["As many apps as possible", "A camera bag", "A small set of tools plus a guide and saved prompts", "A paid agency"], answer: 2, why: "Small and repeatable beats many apps." },
      { objective: "O1", q: "Brand voice is:", options: ["The personality and style of how you write", "Your singing voice", "Your volume", "Your logo"], answer: 0, why: "It's how you sound in writing." },
      { objective: "O1", q: "How can AI help find your voice?", options: ["Describe the voice in your real captions", "Invent a new personality", "Copy a celebrity", "Choose your values"], answer: 0, why: "Your real posts show your voice." },
      { objective: "O1", q: "How many voice words should you pick?", options: ["Twenty", "None", "Three", "One hundred"], answer: 2, why: "Three is easy to remember and use." },
      { objective: "O2", q: "A template prompt has:", options: ["No instructions", "Blanks you fill in", "Your password", "Only emojis"], answer: 1, why: "Blanks make it reusable." },
      { objective: "O2", q: "Where should you keep your prompt library?", options: ["In your head", "Scattered in chats", "Nowhere", "One document like Google Docs or notes"], answer: 3, why: "One place is easy to use and update." },
      { objective: "O3", q: "Which tool fits the design job?", options: ["A stopwatch", "A spreadsheet only", "Canva", "A calculator"], answer: 2, why: "Canva has design templates." },
      { objective: "O3", q: "Which fits the video job?", options: ["A word processor", "A calendar", "A thermometer", "CapCut or in-app editors"], answer: 3, why: "They edit video." },
      { objective: "O3", q: "Scheduling posts helps:", options: ["During busy weeks", "Never", "Only at night", "Only for pros"], answer: 0, why: "Posts go out while you train or study." },
      { objective: "O3", q: "A scheduled post may need changing when:", options: ["Never", "News or results change", "It's sunny", "You get one like"], answer: 1, why: "Old posts can look wrong after events change." },
      { objective: "O4", q: "The \"True\" check means:", options: ["It sounds cool", "It's long", "Every fact, stat and claim is correct", "It has music"], answer: 2, why: "Accuracy protects your name." },
      { objective: "O4", q: "The \"Voice\" check is easiest by:", options: ["Reading it out loud", "Counting words", "Adding hashtags", "Asking a stranger"], answer: 0, why: "You'll hear if it sounds like you." },
      { objective: "O4", q: "The \"Safe\" check removes:", options: ["Your sport", "Your highlights", "Your thank-yous", "Private info and live location"], answer: 3, why: "Safety comes first." },
      { objective: "O4", q: "Helpers who post for you should:", options: ["Skip checks", "Use the same checklist", "Post anything", "Use their own voice"], answer: 1, why: "Consistency protects your brand." },
      { objective: "O5", q: "Copyright is:", options: ["A sports rule", "The owner's right to control copies of their work", "A type of hashtag", "A free license for everyone"], answer: 1, why: "Owners control their work." },
      { objective: "O5", q: "Which music is safest in your videos?", options: ["Any radio song", "A movie soundtrack", "A friend's download", "The app's licensed library"], answer: 3, why: "Licensed music avoids takedowns." },
      { objective: "O5", q: "A free product from a brand must be:", options: ["Clearly disclosed in the post", "Hidden", "Only in your bio", "Ignored"], answer: 0, why: "The FTC counts free products." },
      { objective: "O5", q: "Student-athletes should check NIL rules with:", options: ["A fan", "A rival", "Their compliance office or state athletic association", "An AI only"], answer: 2, why: "Rules vary and change." },
      { objective: "O6", q: "Engagement includes:", options: ["Your height", "Your GPA", "The weather", "Likes, comments, shares and saves"], answer: 3, why: "Engagement is interaction." },
      { objective: "O6", q: "To iterate means:", options: ["Start over every day", "Improve step by step based on results", "Never change", "Copy others"], answer: 1, why: "Small improvements add up." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Pre-Test: What Do You Already Know?",
    from: [
      1,
      4,
      6,
      10,
      12,
      15,
      16,
      18
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      {
        name: "Brand voice guide",
        objective: "O1",
        notYet: "Missing voice words, never-use words or sample posts.",
        meets: "One page with three voice words, use and never-use words, topics, habits and two sample posts.",
        exceeds: "Built from real captions and tested by having AI write a post that a friend says sounds like the learner."
      },
      {
        name: "Prompt library",
        objective: "O2",
        notYet: "Fewer than ten prompts, or prompts with no blanks or voice guide.",
        meets: "Ten prompts with [blanks], each using the voice guide, saved in one document.",
        exceeds: "At least one prompt has been improved after a weak answer, with a note on what changed."
      },
      {
        name: "Tool choices",
        objective: "O3",
        notYet: "A job is missing a tool, or tools were not checked.",
        meets: "One tool each for writing, design, video and tracking, with maker, data and cost checked.",
        exceeds: "Includes a note on when scheduling is used and how scheduled posts are checked."
      },
      {
        name: "Review checklist",
        objective: "O4",
        notYet: "Checklist missing or incomplete.",
        meets: "The five checks are at the top of the toolkit document.",
        exceeds: "Helpers who post for the learner have agreed to use it."
      },
      {
        name: "One post start to finish",
        objective: "O5",
        notYet: "The post fails a check, such as rights or disclosure.",
        meets: "One post made with the toolkit that passes all five checks, with permitted media and any disclosure in the post.",
        exceeds: "Its numbers are recorded in the tracking sheet and used to update a prompt."
      }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the toolkit and score Meets or Exceeds on every rubric row",
      "Learners who still use their prompt library and review checklist 30 days later (follow-up survey)",
      "Learners who report saving time on content each week",
      "Learners who report catching a rights, disclosure or safety problem before posting"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A phone or computer with internet",
      "A free AI assistant (ChatGPT, Microsoft Copilot or Google Gemini)",
      "Free Canva and a free video editor (CapCut or in-app editors)",
      "A free Google account for Google Docs and Sheets",
      "Five of your own past captions",
      "About 60 minutes"
    ],
    facilitatorNotes: [
      "Have learners bring five real captions so the voice guide is built from their own writing.",
      "Share one starter prompt library for the group, then have each learner adapt it to their voice.",
      "Review the five-point checklist with team staff who post for athletes so everyone uses the same checks.",
      "Discuss AI images of real people carefully; never create misleading images of teammates or opponents.",
      "Send NIL questions to the compliance office or state association before any sponsored post."
    ]
  }
};
