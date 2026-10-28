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
  chapters: [
    {
      name: "Chapter 1: Your voice and your prompts",
      lessons: [
        {
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
          youCanNow: "write a brand voice guide that keeps AI output sounding like you."
        },
        {
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
          youCanNow: "build and use a prompt library for your marketing jobs."
        },
        {
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
          youCanNow: "choose a small set of tools that covers every marketing job."
        }
      ],
      check: {
        title: "Knowledge Check 1: Your voice and your prompts",
        questions: [
          { q: "Why write a brand voice guide?", options: ["To make posts longer", "To hide your name", "So AI and helpers write the way you sound", "It's required by apps"], answer: 2, why: "AI is generic unless you tell it your voice." },
          { q: "Which belongs in a voice guide?", options: ["Words you never use", "Your password", "Your bank info", "Your rival's stats"], answer: 0, why: "It shapes how content sounds." },
          { q: "What makes a prompt reusable?", options: ["Being very short", "Having no instructions", "Using all caps", "Blanks in [brackets] you fill in"], answer: 3, why: "Templates save time each use." },
          { q: "A saved prompt keeps giving weak answers. You:", options: ["Delete the library", "Improve the prompt", "Use it anyway", "Switch to five new apps"], answer: 1, why: "Prompts get better with edits." },
          { q: "Before signing up for a new AI tool, check:", options: ["Its logo color", "Who makes it, its data use and cost after the trial", "How many ads it shows", "Nothing"], answer: 1, why: "This protects your data and money." }
        ]
      }
    },
    {
      name: "Chapter 2: Quality, rights and results",
      lessons: [
        {
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
          youCanNow: "review AI content for truth, voice, rights, disclosure and safety."
        },
        {
          title: "Rights, logos, music and disclosure",
          minutes: 5,
          goal: "Know what you may use in your content and how to disclose brand ties.",
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
          youCanNow: "use only content you have rights to and disclose brand ties correctly."
        },
        {
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
          youCanNow: "track results and keep improving your AI marketing toolkit."
        }
      ],
      check: {
        title: "Knowledge Check 2: Quality, rights and results",
        questions: [
          { q: "Who is responsible for an AI-written post you publish?", options: ["The AI company", "Your followers", "Nobody", "You"], answer: 3, why: "You answer for what you post." },
          { q: "Which is one of the five checks?", options: ["Rights", "Font size", "Number of emojis", "Post length"], answer: 0, why: "You must own or have permission for everything used." },
          { q: "A team photographer took a great photo of you. Before posting, you:", options: ["Crop out their watermark", "Post it as yours", "Ask for permission", "Edit it with AI"], answer: 2, why: "The photographer or school may own it." },
          { q: "Making an AI image that looks like a teammate did something they didn't is:", options: ["Fine if it's funny", "Required", "Good marketing", "Misleading and should be avoided"], answer: 3, why: "Don't make content that fools people." },
          { q: "AI says your videos did best. You:", options: ["Trust it fully", "Check its reading against your sheet", "Delete your sheet", "Stop posting videos"], answer: 1, why: "AI can misread data." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: AI Toolkit for Marketing and Branding",
    questions: [
      { q: "A marketing toolkit is:", options: ["As many apps as possible", "A camera bag", "A small set of tools plus a guide and saved prompts", "A paid agency"], answer: 2, why: "Small and repeatable beats many apps." },
      { q: "Brand voice is:", options: ["The personality and style of how you write", "Your singing voice", "Your volume", "Your logo"], answer: 0, why: "It's how you sound in writing." },
      { q: "How can AI help find your voice?", options: ["Describe the voice in your real captions", "Invent a new personality", "Copy a celebrity", "Choose your values"], answer: 0, why: "Your real posts show your voice." },
      { q: "How many voice words should you pick?", options: ["Twenty", "None", "Three", "One hundred"], answer: 2, why: "Three is easy to remember and use." },
      { q: "A template prompt has:", options: ["No instructions", "Blanks you fill in", "Your password", "Only emojis"], answer: 1, why: "Blanks make it reusable." },
      { q: "Where should you keep your prompt library?", options: ["In your head", "Scattered in chats", "Nowhere", "One document like Google Docs or notes"], answer: 3, why: "One place is easy to use and update." },
      { q: "Which tool fits the design job?", options: ["A stopwatch", "A spreadsheet only", "Canva", "A calculator"], answer: 2, why: "Canva has design templates." },
      { q: "Which fits the video job?", options: ["A word processor", "A calendar", "A thermometer", "CapCut or in-app editors"], answer: 3, why: "They edit video." },
      { q: "Scheduling posts helps:", options: ["During busy weeks", "Never", "Only at night", "Only for pros"], answer: 0, why: "Posts go out while you train or study." },
      { q: "A scheduled post may need changing when:", options: ["Never", "News or results change", "It's sunny", "You get one like"], answer: 1, why: "Old posts can look wrong after events change." },
      { q: "The \"True\" check means:", options: ["It sounds cool", "It's long", "Every fact, stat and claim is correct", "It has music"], answer: 2, why: "Accuracy protects your name." },
      { q: "The \"Voice\" check is easiest by:", options: ["Reading it out loud", "Counting words", "Adding hashtags", "Asking a stranger"], answer: 0, why: "You'll hear if it sounds like you." },
      { q: "The \"Safe\" check removes:", options: ["Your sport", "Your highlights", "Your thank-yous", "Private info and live location"], answer: 3, why: "Safety comes first." },
      { q: "Helpers who post for you should:", options: ["Skip checks", "Use the same checklist", "Post anything", "Use their own voice"], answer: 1, why: "Consistency protects your brand." },
      { q: "Copyright is:", options: ["A sports rule", "The owner's right to control copies of their work", "A type of hashtag", "A free license for everyone"], answer: 1, why: "Owners control their work." },
      { q: "Which music is safest in your videos?", options: ["Any radio song", "A movie soundtrack", "A friend's download", "The app's licensed library"], answer: 3, why: "Licensed music avoids takedowns." },
      { q: "A free product from a brand must be:", options: ["Clearly disclosed in the post", "Hidden", "Only in your bio", "Ignored"], answer: 0, why: "The FTC counts free products." },
      { q: "Student-athletes should check NIL rules with:", options: ["A fan", "A rival", "Their compliance office or state athletic association", "An AI only"], answer: 2, why: "Rules vary and change." },
      { q: "Engagement includes:", options: ["Your height", "Your GPA", "The weather", "Likes, comments, shares and saves"], answer: 3, why: "Engagement is interaction." },
      { q: "To iterate means:", options: ["Start over every day", "Improve step by step based on results", "Never change", "Copy others"], answer: 1, why: "Small improvements add up." }
    ]
  }
};
