"use strict";

// Koach Learn course: Entrepreneurs (bonus) -> "AI for Creators and Influencers". Skill-building course in the shape of re-entry/reentry-ai-digital-confidence.js (see scripts/koachlearn-courses/README.md).

module.exports = {
  id: "entrepreneurs-ai-creators",
  category: "Entrepreneurs",
  name: "AI for Creators and Influencers",
  skills: "Defining your niche and content pillars, Scripting with AI, Editing and repurposing content, Labeling AI content on platforms, Disclosing brand deals, Protecting your rights and others'",
  outcome: "plan, script and produce a week of creator content with AI help, repurpose one video into several posts, label realistic AI content correctly, disclose brand deals the way the FTC expects, and respect copyright and other people's voices and faces.",
  about: [
    "Creators and influencers run small media businesses: they make content, grow an audience, and earn through brand deals, affiliate links, products and platform programs. AI can help with ideas, scripts, editing, captions and repurposing, so one person can do the work of a small team.",
    "This course is for creators at any size who want to work faster without losing their voice or their audience's trust. In Chapter 1 you will set your niche and content pillars, script with AI, and edit and repurpose. In Chapter 2 you will learn when to label AI content on platforms, how to disclose brand deals under FTC guidance, and how to protect your rights and respect others'.",
    "Each lesson takes about five minutes with a hands-on task. There is a knowledge check after each chapter and a 20-question quiz at the end. Platform rules change often; check each platform's help pages. This is not legal advice; talk to a lawyer about contracts and rights."
  ],
  finalTask: "Produce a creator content kit: your niche statement and three content pillars, a 7-day content plan, one full video script with a strong hook (written with AI, in your voice), one long video or post repurposed into at least three short pieces with captions, an AI-labeling checklist for your platforms, and a sample sponsored post with a correct, clear disclosure.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Creators and influencers, new or growing, who run a small media business on platforms like YouTube, TikTok or Instagram and earn through brand deals, affiliate links, products or platform programs.",
    startingPoint: "Can film on a phone, post content and use social apps. Some have tried AI tools for captions or ideas, but without a plan, a set voice or a clear view of labeling, disclosure and copyright rules.",
    gap: "Creators who post without a plan burn out, and those who use AI carelessly can lose their voice, post wrong facts, break platform labeling rules or miss FTC disclosure rules. Learners need a repeatable AI-assisted workflow that keeps their content honest, legal and theirs.",
    constraints: [
      "Reading level: plain words and short sentences",
      "Devices: a phone or computer with internet and a free AI assistant",
      "Time: about 5-minute lessons that fit around posting schedules",
      "Rules: platform AI-labeling rules, FTC endorsement rules and copyright apply and can change",
      "Privacy and rights: never clone another person's voice or face, and keep private details out of AI tools"
    ],
    prerequisites: "None. Learners new to AI tools can take \"Introduction to AI and Digital Confidence\" first."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Using an AI assistant for ideas", action: "write a niche statement, three content pillars and a 7-day content plan", standard: "so each post in the plan fits one of the pillars" },
    { id: "O2", condition: "Given samples of your own captions or speech", action: "write a short video script with a strong hook with AI help", standard: "so it sounds like you when read out loud and every fact is checked" },
    { id: "O3", condition: "Given one long video or post", action: "repurpose it into at least three short pieces with captions", standard: "with every caption error fixed and each piece making sense alone" },
    { id: "O4", condition: "Given a list of posts and your platform's rules", action: "decide which posts need an AI label and write a labeling checklist", standard: "labeling every realistic AI post and labeling when unsure" },
    { id: "O5", condition: "Given a brand deal or free product", action: "write a sponsored post with a clear disclosure at the start", standard: "with the disclosure shown and said early and every claim honest" },
    { id: "O6", condition: "Using AI tools and brand contracts", action: "list rules for using others' work and protecting your own content and likeness", standard: "with at least three rules, including no voice or face copying without permission" }
  ],
  chapters: [
    {
      name: "Chapter 1: Create faster with AI",
      lessons: [
        {
          objectives: ["O1"],
          title: "Your niche and content pillars",
          minutes: 5,
          goal: "Write a niche statement and three content pillars for your channel.",
          text: [
            "Audiences follow creators who are clearly about something. A niche statement says who you make content for and what they get: \"Budget home cooking for college students\", \"Beginner weightlifting for women over 40\", \"Small-business tips for barbers\".",
            "Content pillars are the three or four topics you return to again and again. For budget cooking: cheap recipes, grocery hacks, kitchen basics, and day-in-my-life. Pillars make planning easy and help the audience know what to expect.",
            "Ask AI: \"My niche is [niche]. Suggest five content pillars and ten video ideas for each.\" Keep the ideas that match your real experience and personality; your voice is what AI cannot copy."
          ],
          steps: ["Write who you make content for and what they get.", "Ask AI for five possible pillars and ideas for each.", "Choose three pillars that fit your real experience.", "Make a 7-day plan from the ideas."],
          words: [["Niche", "the specific topic and audience your content serves."], ["Content pillar", "a main topic you post about again and again."]],
          slides: [
            { title: "Be clearly about something", bullets: ["Who it is for", "What they get", "\"Budget cooking for college students\""] },
            { title: "Content pillars", bullets: ["Three or four repeat topics", "Easy planning", "Audience knows what to expect"] },
            { title: "AI for ideas", bullets: ["Pillars and ten ideas each", "Keep what fits your real experience", "Your voice is yours"] }
          ],
          tryIt: "Write your niche statement, choose three pillars with AI's help, and build a 7-day content plan.",
          youCanNow: "define your niche and plan content around clear pillars.",
          quickCheck: [
            { objective: "O1", q: "What does a niche statement tell people?", options: ["How many followers you have", "Which apps you use", "Who you make content for and what they get", "How often you post"], answer: 2, why: "A niche statement names your audience and what they get from you." },
            { objective: "O1", q: "AI suggests a post idea that does not fit any of your three pillars. What would you do?", options: ["Post it anyway because AI suggested it", "Skip it or reshape it to fit a pillar", "Add a new pillar for every idea", "Delete your pillars and start again"], answer: 1, why: "Pillars keep your plan focused, so ideas should fit one of them." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Scripting with AI in your own voice",
          minutes: 5,
          goal: "Write a short video script with a strong hook, with AI help, that sounds like you.",
          text: [
            "Short videos live or die in the first seconds. The hook is the opening line that makes people stay: a surprising fact, a bold promise you can keep, or a question your audience is already asking.",
            "Help AI sound like you: paste two of your own captions or a transcript of you talking, and say \"Match this voice.\" Then ask: \"Write a 45-second script on [idea]. Give me five hook options, then the script with a clear point and a call to action.\" Pick a hook and edit the script out loud.",
            "Check facts, especially on health, money, fitness or legal topics. AI can make up studies and numbers. If you cannot confirm a fact, cut it or say where viewers can check it."
          ],
          steps: ["Give AI samples of your real voice.", "Ask for five hooks and a short script.", "Choose a hook and read the script out loud.", "Edit until it sounds like you.", "Check every fact; cut what you cannot confirm."],
          words: [["Hook", "the opening line that makes people keep watching."], ["Call to action", "what you ask viewers to do next, like follow or comment."], ["Transcript", "the written words of something spoken."]],
          slides: [
            { title: "The first seconds matter", bullets: ["A surprising fact", "A promise you can keep", "A question they already ask"] },
            { title: "Make AI sound like you", bullets: ["Paste your own captions or transcript", "\"Match this voice\"", "Five hooks, then the script"] },
            { title: "Check facts", bullets: ["AI can invent studies and numbers", "Health, money, fitness, legal: confirm", "Cannot confirm? Cut it"] }
          ],
          tryIt: "Write one 45-second script with AI help using samples of your own voice. Choose a hook, read it out loud, edit it, and check every fact.",
          youCanNow: "script content with AI that grabs attention and sounds like you.",
          quickCheck: [
            { objective: "O2", q: "What is the job of a script's hook?", options: ["To keep people watching from the first line", "To list your sponsors", "To end the video", "To show your channel name"], answer: 0, why: "The hook is the opening line that makes people stay." },
            { objective: "O2", q: "AI's script sounds stiff and nothing like you. What would you do?", options: ["Post it as it is", "Ask AI to make it longer", "Give AI samples of your own words, then read it aloud and edit", "Use a different topic"], answer: 2, why: "Your own samples and a read-aloud edit make the script sound like you." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Editing and repurposing with AI",
          minutes: 5,
          goal: "Turn one long video or post into several short pieces with captions.",
          text: [
            "Repurposing means turning one piece of content into many. A 10-minute video can become three short clips, a carousel post, a newsletter paragraph and a few quotes. AI tools can find highlight moments, cut clips, add captions and resize for each platform.",
            "Many editing apps (for example CapCut, Canva, Descript or your platform's own editor) now include AI features such as auto-captions, background removal and clip suggestions. Features and plans change; check each app's help pages.",
            "Always review AI captions for errors, especially names, numbers and slang, and check that a clip still makes sense on its own and does not twist what you or a guest said."
          ],
          steps: ["Choose one long video or post.", "Use AI to find three to five highlight moments.", "Cut clips and add auto-captions.", "Fix caption errors and resize for each platform.", "Write a caption for each with AI help."],
          words: [["Repurpose", "turn one piece of content into several others."], ["Auto-captions", "subtitles made automatically from the audio."], ["Carousel", "a post with several images people swipe through."]],
          slides: [
            { title: "One piece, many posts", bullets: ["Short clips", "Carousel and quotes", "Newsletter paragraph"] },
            { title: "AI editing features", bullets: ["Highlight finding and clip cuts", "Auto-captions and resizing", "Check each app's help pages"] },
            { title: "Review everything", bullets: ["Fix names, numbers, slang", "Clips must make sense alone", "Never twist what someone said"] }
          ],
          tryIt: "Repurpose one long video or post into at least three short pieces with captions. Fix every caption error.",
          youCanNow: "repurpose content with AI tools while keeping it accurate.",
          quickCheck: [
            { objective: "O3", q: "What does repurposing content mean?", options: ["Deleting old posts", "Copying another creator's video", "Posting the same clip on one day many times", "Turning one piece of content into several pieces"], answer: 3, why: "Repurposing makes several pieces, like short clips, from one long piece." },
            { objective: "O3", q: "You cut a short clip, but alone it makes the guest seem to say the opposite of what they meant. What would you do?", options: ["Post it because it will get views", "Choose a different cut that keeps their real meaning", "Add a caption saying it was edited", "Post it only on one platform"], answer: 1, why: "A short clip must make sense alone and not twist what was said." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Create faster with AI",
        questions: [
          { objective: "O1", q: "Which is a clear niche statement?", options: ["Content", "Budget home cooking for college students", "Videos about stuff", "Everything for everyone"], answer: 1, why: "It says who it is for and what they get." },
          { objective: "O1", q: "What are content pillars?", options: ["Your camera gear", "Pillars in your filming room", "Your follower count", "Three or four topics you post about again and again"], answer: 3, why: "Pillars guide planning." },
          { objective: "O2", q: "How can you help AI write in your voice?", options: ["Paste samples of your own captions or speech", "Ask it to copy another creator", "Give it your password", "Use more emojis"], answer: 0, why: "Samples show the AI your style." },
          { objective: "O2", q: "AI's fitness script cites a study you cannot find. What do you do?", options: ["Make up a link", "Keep it", "Cut it or point viewers to where they can check", "Say it louder"], answer: 2, why: "AI can invent studies; do not share unconfirmed facts." },
          { objective: "O3", q: "Auto-captions spelled a guest's name wrong. What do you do?", options: ["Remove the guest", "Post it anyway", "Fix it before posting", "Turn off sound"], answer: 2, why: "Review AI captions for errors." }
        ]
      }
    },
    {
      name: "Chapter 2: Keep your audience's trust",
      lessons: [
        {
          objectives: ["O4"],
          title: "Labeling AI content on platforms",
          minutes: 5,
          goal: "Decide when a platform requires you to label realistic AI content, and label it.",
          text: [
            "Platforms are adding rules for AI content. YouTube, for example, requires creators to disclose content that seems realistic and was made or meaningfully altered with AI: making a real person appear to say or do something they did not, altering footage of a real event or place, or generating a realistic scene that did not happen. You disclose with the AI-use setting when uploading.",
            "YouTube does not require disclosure for clearly unrealistic content, minor edits like color fixes, beauty filters or background blur, or using AI for ideas, scripts, titles or thumbnails. Creators who repeatedly fail to disclose can face labels, removal or loss of partner program access.",
            "Other platforms, such as TikTok and Meta's apps, have their own labeling rules; check each platform's help pages. When unsure, label it: honesty keeps your audience's trust."
          ],
          steps: ["Ask: does this look realistic, and did AI make or meaningfully change it?", "If yes, use the platform's AI label or disclosure setting.", "Check each platform's help page for its rules.", "When unsure, label it."],
          words: [["Synthetic content", "images, video or audio made or changed by AI."], ["Disclosure setting", "an option when posting that labels content as AI-made or altered."]],
          slides: [
            { title: "YouTube: disclose when realistic", bullets: ["A real person saying what they did not", "Altered real events or places", "Realistic scenes that did not happen"] },
            { title: "YouTube: not required", bullets: ["Clearly unrealistic content", "Color fixes, filters, background blur", "AI for ideas, scripts, titles, thumbnails"] },
            { title: "Every platform differs", bullets: ["Check TikTok and Meta help pages", "When unsure, label it"] }
          ],
          sources: [{ name: "YouTube Help: Disclosing use of altered or synthetic content", url: "https://support.google.com/youtube/answer/14328491" }],
          tryIt: "Look at your last five posts or your next week's plan. For each, decide whether it needs an AI label on your platform and why. Write a short labeling checklist.",
          youCanNow: "label realistic AI content correctly on your platforms.",
          quickCheck: [
            { objective: "O4", q: "Which kind of post is most likely to need an AI label?", options: ["A realistic AI video of a real place that looks real", "A script AI helped you write", "A video with auto-captions", "A photo with a simple color filter"], answer: 0, why: "Platforms ask you to label realistic AI content that viewers could mistake for real." },
            { objective: "O4", q: "You are not sure whether a post needs an AI label. What would you do?", options: ["Leave it unlabeled", "Delete the post", "Label it", "Ask followers in the comments"], answer: 2, why: "When unsure, labeling is the safe choice." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Disclosing brand deals the FTC way",
          minutes: 5,
          goal: "Write a sponsored post with a clear, correct disclosure.",
          text: [
            "If a brand pays you, gives you free products, a commission or a trip, and your audience would not expect that connection, you must disclose it, even if you keep a free product and even for small gifts. Disclose on every sponsored post; you cannot assume viewers saw earlier ones.",
            "The FTC's endorsement guidance says disclosures must be easy to notice and understand. \"#ad\" or \"Ad:\" at the start, or \"Sponsored by XYZ\", work well. Vague tags like \"#partner\", \"#ambassador\" or \"#sp\", or disclosures hidden in comments, at the end of long captions, or behind \"more\", often do not. In videos, disclose in the video itself, ideally both said and shown, and early; repeat it during live streams.",
            "Only say what you honestly believe from real use, and never post fake reviews. Platform disclosure tools help but may not be enough on their own; add your own. AI can draft sponsored captions, but you are responsible for the disclosure and every claim."
          ],
          steps: ["Check if you have a material connection: payment, free product, commission, trip.", "Put \"#ad\" or \"Sponsored\" at the start of the caption.", "In videos, say and show it early; repeat during lives.", "Only make claims from your honest experience.", "Use platform tools AND your own disclosure."],
          words: [["Material connection", "a relationship like payment or free products that viewers might not expect."], ["Endorsement", "a message that viewers think shows your honest opinion of a product."]],
          slides: [
            { title: "When to disclose", bullets: ["Paid, free products, commissions, trips", "Even small gifts", "On every sponsored post"] },
            { title: "How to disclose", bullets: ["\"#ad\" or \"Ad:\" at the start", "\"Sponsored by XYZ\"", "Not hidden in comments or after \"more\""] },
            { title: "In videos and lives", bullets: ["Say it and show it", "Early in the video", "Repeat during live streams"] },
            { title: "Honest claims", bullets: ["Only your real experience", "Add your own disclosure too"] }
          ],
          sources: [{ name: "FTC: Endorsement Guides, What People Are Asking", url: "https://www.ftc.gov/business-guidance/resources/ftcs-endorsement-guides-what-people-are-asking" }],
          tryIt: "Write a sample sponsored post with AI help for a product you really use. Put a clear disclosure at the start, write the spoken disclosure for the video, and check every claim is honest.",
          youCanNow: "disclose brand deals clearly and honestly the way the FTC expects.",
          quickCheck: [
            { objective: "O5", q: "Where should a brand-deal disclosure appear in a caption?", options: ["At the very end, after the hashtags", "Only in your profile bio", "In a comment under the post", "At the start, where people see it first"], answer: 3, why: "A clear disclosure goes where viewers see it right away." },
            { objective: "O5", q: "You are paid to mention a product in a video. What would you do?", options: ["Mention the deal only in the description", "Say and show the disclosure early in the video", "Skip the disclosure because the brand is well known", "Disclose only if a viewer asks"], answer: 1, why: "In a video the disclosure should be said and shown early." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Protecting your rights and respecting others'",
          minutes: 5,
          goal: "Use AI without copying others, and protect your own content and likeness.",
          text: [
            "Do not use AI to copy another creator's videos, a brand's logo, or someone's voice or face without permission. Making a real person appear to say or do things they did not can mislead viewers, break platform rules and lead to legal claims. Use music and clips you have the rights to, or the platform's licensed library.",
            "Ownership: the US Copyright Office says purely AI-generated material is not protected by copyright, but your own creative work, including your human edits and arrangement, can be. The more your content is your own voice, footage and ideas, the more it is yours.",
            "Protect yourself: read brand contracts for who owns the content, how long they can use it, and whether they can use your face or voice with AI. Keep originals of your work. Have a lawyer review any contract that gives away rights to your content or likeness."
          ],
          steps: ["Never use AI to copy another creator, brand or person's voice or face without permission.", "Use licensed music and clips.", "Put your own voice, footage and ideas at the center.", "Read contracts for ownership, usage time and AI use of your likeness.", "Have a lawyer review contracts that give away rights."],
          words: [["Likeness", "your face, voice and identity."], ["License", "permission to use something under set terms."], ["Usage rights", "what a brand may do with your content and for how long."]],
          slides: [
            { title: "Respect others", bullets: ["No copying creators, logos, voices or faces", "Use licensed music and clips"] },
            { title: "Copyright and AI", bullets: ["Purely AI-made material: not protected", "Your human creative work can be", "Your voice and footage = yours"] },
            { title: "Protect yourself", bullets: ["Who owns the content? For how long?", "Can they use your face or voice with AI?", "Lawyer review for rights deals"] }
          ],
          sources: [{ name: "US Copyright Office: Copyright and Artificial Intelligence", url: "https://www.copyright.gov/ai/" }, { name: "US Copyright Office: Part 2 Copyrightability report announcement", url: "https://www.copyright.gov/newsnet/2025/1060.html" }],
          tryIt: "Final task: write three rules you will follow on using others' work and your own rights, then assemble your creator content kit: niche and pillars, 7-day plan, script, repurposed pieces, AI-labeling checklist and sample sponsored post.",
          youCanNow: "create with AI as a creator while keeping your audience's trust and protecting everyone's rights.",
          quickCheck: [
            { objective: "O6", q: "What should you check in a brand contract?", options: ["Who owns the content, for how long, and AI use of your likeness", "Only the payment amount", "Only the posting date", "The brand's logo colors"], answer: 0, why: "Ownership, time limits and likeness rights protect you and your work." },
            { objective: "O6", q: "A fan asks you to use AI to copy a famous creator's voice for a joke video. What would you do?", options: ["Do it, since it is only a joke", "Do it but add a small note", "Do it only on one platform", "Say no unless you have that creator's permission"], answer: 3, why: "Copying another person's voice without permission is not okay." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Keep your audience's trust",
        questions: [
          { objective: "O4", q: "On YouTube, which needs an AI disclosure?", options: ["A realistic video of a real person saying something they never said", "A color correction", "Using AI to brainstorm titles", "A cartoon dragon"], answer: 0, why: "Realistic altered content showing a real person needs disclosure." },
          { objective: "O4", q: "Does YouTube require disclosure when AI only helped write your script?", options: ["Only for long videos", "Yes, always", "Only on Sundays", "No"], answer: 3, why: "Using AI for ideas or scripts does not require disclosure." },
          { objective: "O5", q: "A brand sent you free sneakers and you post about them. What should you do?", options: ["Nothing, you kept them", "Disclose it clearly, like \"Gifted by XYZ\" or \"#ad\" at the start", "Hide it in comments", "Use \"#sp\" at the end"], answer: 1, why: "Free products are a material connection needing clear disclosure." },
          { objective: "O5", q: "In a sponsored video, the disclosure should be:", options: ["In the video itself, said and shown, early", "Only in the description", "Only in a link", "At the very end only"], answer: 0, why: "FTC guidance says disclose in the video, ideally both ways." },
          { objective: "O6", q: "Can you use AI to clone another creator's voice for your video without permission?", options: ["Only if short", "Yes", "No", "Only for jokes"], answer: 2, why: "Copying someone's voice without permission can mislead and violate rights." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: AI for Creators and Influencers",
    questions: [
      { objective: "O1", q: "Creators often earn through:", options: ["Only lottery wins", "Brand deals, affiliate links, products and platform programs", "Government grants only", "Nothing"], answer: 1, why: "These are common creator income sources." },
      { objective: "O1", q: "A niche statement says:", options: ["Your follower count", "Your camera brand", "Your password", "Who you make content for and what they get"], answer: 3, why: "It defines your audience and value." },
      { objective: "O1", q: "Why have content pillars?", options: ["They hide ads", "They are required by law", "They replace scripts", "They make planning easy and set audience expectations"], answer: 3, why: "Pillars give structure." },
      { objective: "O2", q: "The hook is:", options: ["The last frame", "The opening line that makes people stay", "A sponsor's logo", "The thumbnail size"], answer: 1, why: "The first seconds decide if people stay." },
      { objective: "O2", q: "After AI drafts a script, you should:", options: ["Copy it to another creator", "Post it unread", "Read it out loud and edit it to sound like you", "Add made-up facts"], answer: 2, why: "Your voice keeps your audience." },
      { objective: "O2", q: "On health or money topics, AI facts should be:", options: ["Confirmed before sharing", "Trusted fully", "Exaggerated", "Hidden"], answer: 0, why: "AI can invent facts and studies." },
      { objective: "O3", q: "Repurposing means:", options: ["Buying followers", "Deleting old videos", "Turning one piece of content into several", "Reposting someone else's video"], answer: 2, why: "One video can become many posts." },
      { objective: "O3", q: "Before posting AI captions, check:", options: ["Names, numbers and slang", "Nothing", "Only the font", "Only the emoji"], answer: 0, why: "Auto-captions often make mistakes there." },
      { objective: "O3", q: "A short clip must:", options: ["Be shocking at any cost", "Make sense alone and not twist what was said", "Remove all context", "Change a guest's words"], answer: 1, why: "Accuracy keeps trust." },
      { objective: "O4", q: "On YouTube, AI disclosure is made:", options: ["Not at all", "Only in comments", "By email to YouTube", "With the AI-use setting when uploading"], answer: 3, why: "YouTube Studio has an AI-use setting at upload." },
      { objective: "O4", q: "Which does NOT need disclosure on YouTube?", options: ["A beauty filter", "A realistic fake news event", "A real person made to say false things", "A realistic scene that never happened"], answer: 0, why: "Minor aesthetic edits are exempt." },
      { objective: "O4", q: "Repeatedly failing to disclose on YouTube can lead to:", options: ["Nothing", "More views", "A bonus", "Labels, removal or loss of partner program access"], answer: 3, why: "YouTube's help page lists these consequences." },
      { objective: "O4", q: "When you are unsure whether to label AI content, you should:", options: ["Delete your account", "Hide it", "Label it", "Ask viewers to guess"], answer: 2, why: "Honesty protects trust." },
      { objective: "O5", q: "A material connection is:", options: ["Your internet cable", "A relationship like payment or free products viewers might not expect", "A friend's comment", "Your editing software"], answer: 1, why: "That is what must be disclosed." },
      { objective: "O5", q: "Which disclosure is clear?", options: ["\"#partner\" after \"more\"", "\"#sp\" at the end", "A note in the comments", "\"#ad\" at the start of the caption"], answer: 3, why: "The FTC lists \"#ad\" at the start as likely effective." },
      { objective: "O5", q: "During a live stream with a sponsor, you should:", options: ["Never mention it", "Say it once before going live", "Repeat the disclosure during the stream", "Put it in an old post"], answer: 2, why: "People join live streams at different times." },
      { objective: "O5", q: "Is the platform's paid-partnership tool always enough on its own?", options: ["Not always; add your own disclosure too", "Yes, always", "It is not allowed", "Only for big creators"], answer: 0, why: "FTC guidance says platform tools are not a guarantee." },
      { objective: "O6", q: "According to the Copyright Office, purely AI-generated material is:", options: ["Owned by the platform", "Not protected by copyright", "Owned by you automatically", "Public property of the brand"], answer: 1, why: "Copyright protects human authorship." },
      { objective: "O6", q: "In a brand contract, you should check:", options: ["Only the logo", "Who owns the content, for how long, and AI use of your likeness", "Nothing", "Only the emoji style"], answer: 1, why: "These terms affect your rights." },
      { objective: "O6", q: "Who should review a contract that gives away rights to your face or voice?", options: ["A lawyer", "Only AI", "Your followers", "Nobody"], answer: 0, why: "A lawyer can protect your rights." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Pre-Test: What Do You Already Know?",
    from: [
      1,
      3,
      5,
      6,
      9,
      12,
      14,
      17
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      {
        name: "Niche, pillars and plan",
        objective: "O1",
        notYet: "The niche is vague, or the plan has posts that fit no pillar.",
        meets: "A clear niche statement, three pillars and a 7-day plan where each post fits a pillar.",
        exceeds: "The plan also mixes formats and says what the audience gets from each post."
      },
      {
        name: "Script in your voice",
        objective: "O2",
        notYet: "The script has no hook, sounds unlike you, or has unchecked facts.",
        meets: "A short script with a strong hook that sounds like you, with facts checked.",
        exceeds: "You tried more than one hook and can say why you chose this one."
      },
      {
        name: "Repurposed pieces",
        objective: "O3",
        notYet: "Fewer than three pieces, or captions with errors.",
        meets: "At least three short pieces with correct captions that each make sense alone.",
        exceeds: "Each piece is shaped for the platform it will go on."
      },
      {
        name: "AI-labeling checklist",
        objective: "O4",
        notYet: "No checklist, or realistic AI content left unlabeled.",
        meets: "A checklist that says when to label AI content on your platforms, including when unsure.",
        exceeds: "It also says where to find each platform's own rule so you can check for changes."
      },
      {
        name: "Sponsored post disclosure",
        objective: "O5",
        notYet: "The disclosure is missing, hidden or late.",
        meets: "A clear disclosure at the start, plus a spoken disclosure for video, and honest claims.",
        exceeds: "It also plans a repeat disclosure for live streams or long videos."
      },
      {
        name: "Rights rules",
        objective: "O6",
        notYet: "Fewer than three rules, or a rule that allows copying others' work or likeness.",
        meets: "Three clear rules on using others' work and protecting your own.",
        exceeds: "The rules also cover what to check in a brand contract before signing."
      }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Learners who post on their 7-day plan for at least one full week (follow-up survey)",
      "Learners who land a brand deal or affiliate income within 90 days, with correct disclosure",
      "Learners who start another Koach Learn business course within 30 days"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A phone or computer with internet and a phone camera",
      "A free AI assistant (such as ChatGPT, Microsoft Copilot or Google Gemini) and a free video editor with auto-captions",
      "One long video or post of your own to repurpose",
      "About 60 minutes in total: lessons, practice, checks and the final task"
    ],
    facilitatorNotes: [
      "Ask each learner to bring samples of their own captions or a recorded clip so AI drafts can match their voice.",
      "Open each platform's own AI-labeling help page together, since rules change; do not rely on AI summaries.",
      "Use only content the learner made or has permission to use in practice tasks.",
      "Remind learners that a lawyer should review contracts that give away rights to their face or voice.",
      "Score the content kit with the rubric and give feedback on one Not yet row at a time."
    ]
  }
};
