"use strict";

// Koach Learn course: Entrepreneurs -> "AI Ethics, Risks and Legal Considerations". Skill-building course in the shape of re-entry/reentry-ai-digital-confidence.js (see scripts/koachlearn-courses/README.md).
// Legal points checked on official pages 27 October 2026: ftc.gov (advertising basics, AI-claims orders, endorsement guides, fake-review rule, data security guide) and copyright.gov (AI reports). Not legal advice; every lesson tells students to talk to a lawyer about their situation.

module.exports = {
  id: "entrepreneurs-ai-ethics-legal",
  category: "Entrepreneurs",
  name: "AI Ethics, Risks and Legal Considerations",
  skills: "Spotting AI risks in a business, Reviewing AI output for accuracy and bias, Protecting customer data, Making honest AI claims, Understanding copyright for AI-made work, Writing an AI use policy",
  outcome: "spot the main risks of using AI in your business, put checks in place for accuracy, bias and privacy, make only honest AI claims, understand the basics of copyright for AI-made work, and write a one-page AI use policy for your business.",
  about: [
    "AI can save a small business a lot of time, but it brings real risks: wrong answers, unfair results, leaked customer data, misleading marketing and copyright surprises. This course is for owners who want to use AI responsibly and stay out of trouble.",
    "In Chapter 1 you will learn the main risks and how to check AI work for accuracy and bias, and how to protect customer data. In Chapter 2 you will learn what US agencies say about AI marketing claims, endorsements and reviews, and AI-generated work and copyright. You finish by writing an AI use policy for your business.",
    "Each lesson is about five minutes with a hands-on task. There is a knowledge check after each chapter and a 20-question quiz at the end. The legal points were checked on official US government pages (ftc.gov and copyright.gov) and are listed in each lesson. This course is education, not legal advice: laws change and differ by state and country, so talk to a lawyer about your own situation."
  ],
  finalTask: "Write a one-page AI use policy for your business that covers: which AI tools are approved, what information must never go into them, which outputs need a human check (facts, money, legal, health, anything customers see), how you make honest AI claims and disclose paid endorsements, how you handle copyright for AI-made content, who to ask when unsure (including a lawyer), and when you will review the policy.",
  chapters: [
    {
      name: "Chapter 1: Know the risks and check the work",
      lessons: [
        {
          title: "The main risks of AI in a business",
          minutes: 5,
          goal: "Name the main AI risks and find where they show up in your business.",
          text: [
            "Five risks show up again and again. Accuracy: AI can make up facts, prices or rules. Fairness: AI can treat groups of people unfairly because of patterns in what it learned. Privacy: customer data you type in may be stored or used. Honesty: marketing claims about AI, or AI-made reviews, can mislead. Ownership: who owns AI-made work, and whether it copies someone else's.",
            "Being ethical with AI means being honest, fair and careful with people's information, and keeping a human responsible. Usually, doing the ethical thing also keeps you on the right side of the law.",
            "Make a risk list for your business: where you use AI, what could go wrong, how bad it would be, and what check you will add."
          ],
          steps: ["List every place you use or plan to use AI.", "For each, ask which of the five risks apply.", "Rate how bad a mistake would be: low, medium or high.", "Write one check for each medium or high risk."],
          words: [["Ethics", "ideas about what is right and fair."], ["Risk", "something that could go wrong, and how much harm it would cause."], ["Bias", "results that are unfair to some groups of people."]],
          slides: [
            { title: "Five AI risks", bullets: ["Accuracy: made-up facts", "Fairness: unfair results", "Privacy: customer data", "Honesty and ownership"] },
            { title: "Ethical AI use", bullets: ["Honest, fair, careful with data", "A human stays responsible", "Ethics usually keeps you legal too"] },
            { title: "Your risk list", bullets: ["Where you use AI", "What could go wrong, how bad", "One check for each serious risk"] }
          ],
          tryIt: "Make a risk list with at least three ways your business uses AI. Mark which of the five risks apply, rate each, and write one check for the serious ones.",
          youCanNow: "name the main AI risks and map them to your own business."
        },
        {
          title: "Checking AI work for accuracy and fairness",
          minutes: 5,
          goal: "Set up a human review step that catches wrong facts and unfair results.",
          text: [
            "Anything AI makes that a customer will see, or that affects money, law, health or safety, needs a human check. Check facts against your own records or official sources, redo the math, and remove any claim you cannot prove.",
            "Check for fairness too. If you use AI to screen job applicants, set prices, approve customers or write job ads, look at whether it treats people differently because of race, sex, age, disability, religion, national origin or similar traits. Anti-discrimination laws still apply when a computer helps make the decision.",
            "For high-stakes decisions, such as hiring, firing, lending, housing or anything about health, do not let AI decide. Use it to organize information, keep the decision with a person, and talk to a lawyer about the rules that apply to you."
          ],
          steps: ["Mark which AI outputs customers see or that affect money, law, health or safety.", "For those, check facts, math and claims every time.", "Look at AI-assisted decisions for unfair differences between groups.", "Keep high-stakes decisions with a person.", "Ask a lawyer about rules for hiring, lending or housing decisions."],
          words: [["Human review", "a person checks AI work before it is used."], ["High-stakes decision", "a choice that seriously affects someone's job, money, home or health."], ["Discrimination", "treating people unfairly because of who they are."]],
          slides: [
            { title: "What needs a human check", bullets: ["Anything customers see", "Anything about money, law, health or safety"] },
            { title: "Check for fairness", bullets: ["Hiring, pricing, approvals, job ads", "Different results for different groups?", "Anti-discrimination laws still apply"] },
            { title: "High-stakes = a person decides", bullets: ["Hiring, firing, lending, housing, health", "AI organizes; a person decides", "Ask a lawyer about the rules"] }
          ],
          tryIt: "Pick one AI output your customers see. Check it for facts, math, unprovable claims and unfair wording. Write the review step you will use every time.",
          youCanNow: "review AI work for accuracy and fairness before it affects customers or decisions."
        },
        {
          title: "Protecting customer data",
          minutes: 5,
          goal: "Decide what data may and may not go into AI tools, using the FTC's five principles.",
          text: [
            "The FTC's guide for businesses on protecting personal information has five principles: take stock (know what personal information you have), scale down (keep only what you need), lock it (protect what you keep), pitch it (dispose of what you no longer need) and plan ahead (have a plan for a security problem).",
            "Apply them to AI. Do not put Social Security numbers, card or bank numbers, passwords, health details or full customer contact lists into AI chat tools. Use placeholders or summaries. Check each tool's privacy settings and terms, and prefer business plans that promise not to train on your data if you must use customer information.",
            "Be honest in your own privacy notice: if you use AI tools that process customer information, say so. Privacy laws differ by state and country; ask a lawyer what applies to you."
          ],
          steps: ["Take stock: list the customer information you hold.", "Scale down: stop collecting what you do not need.", "Write a never-in-AI list: ID numbers, card and bank numbers, passwords, health details.", "Check each AI tool's privacy settings and terms.", "Make a short plan for what you will do if data leaks."],
          words: [["Personal information", "details that identify a person, like name with address, ID numbers or card numbers."], ["Privacy notice", "a statement telling customers what data you collect and how you use it."], ["Security incident", "when data is lost, stolen or seen by someone who should not see it."]],
          slides: [
            { title: "FTC's five principles", bullets: ["Take stock, scale down", "Lock it, pitch it", "Plan ahead"] },
            { title: "Never in AI chat tools", bullets: ["ID, card or bank numbers", "Passwords and health details", "Full customer contact lists"] },
            { title: "Safer use", bullets: ["Placeholders and summaries", "Check privacy settings and terms", "Business plans that do not train on your data"] },
            { title: "Be honest", bullets: ["Say in your privacy notice if AI processes data", "Laws differ; ask a lawyer"] }
          ],
          sources: [{ name: "FTC: Protecting Personal Information, A Guide for Business", url: "https://www.ftc.gov/business-guidance/resources/protecting-personal-information-guide-business" }],
          tryIt: "Take stock of the customer information you hold, write your never-in-AI list, and check the privacy settings of the AI tool you use most.",
          youCanNow: "decide what customer data may go into AI tools and protect the rest."
        }
      ],
      check: {
        title: "Knowledge Check 1: Know the risks and check the work",
        questions: [
          { q: "Which is an accuracy risk?", options: ["AI uses your brand colors", "AI makes up a price you never set", "AI writes a short email", "AI makes a list"], answer: 1, why: "Made-up facts are the accuracy risk." },
          { q: "You use AI to sort job applications. What else must you check?", options: ["The weather", "Only the font", "Nothing, AI is neutral", "Whether it treats groups of people unfairly"], answer: 3, why: "Anti-discrimination laws still apply when AI helps decide." },
          { q: "Who should make a hiring decision?", options: ["A person, with AI only organizing information", "The AI alone", "A random tool", "The applicant"], answer: 0, why: "High-stakes decisions stay with a person." },
          { q: "Which is one of the FTC's five data principles?", options: ["Share data with all tools", "Collect everything forever", "Scale down: keep only what you need", "Never plan ahead"], answer: 2, why: "Scale down is one of the five." },
          { q: "Which should never go into an AI chat tool?", options: ["A summary with no names", "Your opening hours", "A customer's card number", "Your list of services"], answer: 2, why: "Card numbers are sensitive personal information." }
        ]
      }
    },
    {
      name: "Chapter 2: Honest claims, ownership and your policy",
      lessons: [
        {
          title: "Honest AI claims, endorsements and reviews",
          minutes: 5,
          goal: "Check your marketing for misleading AI claims, undisclosed endorsements and fake reviews.",
          text: [
            "The FTC says advertising must be truthful, not misleading, and backed by evidence, and that applies to AI claims. Do not say your product \"uses AI\" if it does not, and do not exaggerate what AI does or how accurate it is. In 2026 the FTC finalized orders against firms that claimed their AI marketing service listened to people's conversations through smart devices, when it did not.",
            "If you pay or give free products to someone to promote you, the connection must be clearly disclosed, such as \"#ad\" at the start of a post or in the video itself. You are responsible for what your promoters say.",
            "The FTC's rule on fake reviews bans fake reviews and testimonials, including AI-generated reviews from people who do not exist, and bans rewards given only for positive reviews. Talk to a lawyer if you are unsure whether a claim or campaign is allowed."
          ],
          steps: ["List every claim your marketing makes about AI or results.", "Keep only claims that are true and that you can prove.", "Check that every paid or gifted promotion has a clear disclosure.", "Make sure every review is real and was not paid for with a reward for a good rating.", "Ask a lawyer when unsure."],
          words: [["Substantiate", "back up a claim with evidence."], ["Material connection", "a link like payment or free products between a business and someone who promotes it."]],
          slides: [
            { title: "Honest AI claims", bullets: ["Truthful, not misleading, with evidence", "No \"uses AI\" if it does not", "No exaggerated accuracy"] },
            { title: "FTC enforcement example", bullets: ["2026 orders over false claims about an AI ad service", "It claimed to use voice data; it did not"] },
            { title: "Endorsements and reviews", bullets: ["Disclose paid or gifted promotion clearly", "Fake and AI-made reviews are banned", "No rewards only for positive reviews"] }
          ],
          sources: [{ name: "FTC: Advertising and Marketing Basics", url: "https://www.ftc.gov/business-guidance/advertising-marketing/advertising-marketing-basics" }, { name: "FTC: Orders against Cox Media Group and two other firms over AI marketing claims (2026)", url: "https://www.ftc.gov/news-events/news/press-releases/2026/08/ftc-finalizes-orders-cox-media-group-two-other-firms-settling-charges-they-deceived-customers-about" }, { name: "FTC: Endorsement Guides, What People Are Asking", url: "https://www.ftc.gov/business-guidance/resources/ftcs-endorsement-guides-what-people-are-asking" }, { name: "FTC: Final rule banning fake reviews and testimonials (press release)", url: "https://www.ftc.gov/news-events/news/press-releases/2024/08/federal-trade-commission-announces-final-rule-banning-fake-reviews-testimonials" }],
          tryIt: "Go through your website or social posts. List each claim about AI or results, and mark it keep (true and provable), fix, or remove. Check any paid post for a clear disclosure.",
          youCanNow: "check your marketing for honest AI claims, proper disclosures and real reviews."
        },
        {
          title: "Copyright and AI-made work",
          minutes: 5,
          goal: "Explain who can own AI-assisted work and how to reduce copying risks.",
          text: [
            "The US Copyright Office's report on copyrightability (January 2025) says copyright protects human authorship. Purely AI-generated material is not protected, and simply writing a prompt does not make you the author of the output. But using AI as a tool does not block protection: your own creative arrangement, edits, or human-made work that shows in the result can be protected.",
            "What this means for a business: if you need to own something, such as your logo, product designs or a book, put real human creativity into it and keep records of what you did. When registering a work that includes AI-generated material, the Office has guidance about disclosing it.",
            "The other risk is copying. AI output can sometimes look like someone else's work or brand. Do not ask AI to copy a living artist, a brand's logo or a famous character, and check important outputs. Copyright law around AI is still changing, with court cases ongoing; talk to a lawyer before relying on AI-made work for something important."
          ],
          steps: ["Mark which business assets you need to own (logo, designs, books, courses).", "For those, add real human creative work and keep notes or drafts.", "Do not ask AI to copy a specific artist, brand or character.", "Check important outputs for resemblance to others' work.", "Talk to a lawyer before registering or relying on AI-assisted work."],
          words: [["Copyright", "the legal right to control copying of an original creative work."], ["Human authorship", "creative choices made by a person, which copyright protects."], ["Register", "file a work with the Copyright Office to record your claim."]],
          slides: [
            { title: "What the Copyright Office says", bullets: ["Copyright protects human authorship", "Purely AI-generated material: not protected", "A prompt alone does not make you the author"] },
            { title: "AI as a tool is OK", bullets: ["Your creative edits and arrangement can be protected", "Your human-made parts that show in the result"] },
            { title: "Owning what matters", bullets: ["Add real human creativity", "Keep drafts and notes", "Follow the Office's guidance on disclosing AI"] },
            { title: "Avoid copying", bullets: ["No copying artists, logos or characters", "Law is still changing: ask a lawyer"] }
          ],
          sources: [{ name: "US Copyright Office: Copyright and Artificial Intelligence", url: "https://www.copyright.gov/ai/" }, { name: "US Copyright Office: Part 2 Copyrightability report announcement (January 2025)", url: "https://www.copyright.gov/newsnet/2025/1060.html" }],
          tryIt: "List three business assets you have made or plan to make with AI. For each, write whether you need to own it and what human creative work you will add, and note any that need a lawyer's advice.",
          youCanNow: "explain the basics of copyright for AI-made work and lower your copying risk."
        },
        {
          title: "Writing your AI use policy",
          minutes: 6,
          goal: "Write a one-page AI use policy for your business.",
          text: [
            "An AI use policy is a short set of rules for how you and anyone who works with you use AI. It turns everything in this course into habits. It helps new helpers, reassures customers, and shows you took care if something goes wrong.",
            "A simple policy has seven parts: approved tools; never-in-AI information; outputs that always need a human check; honest claims and disclosures; copyright and ownership; who to ask when unsure (including a lawyer); and a review date.",
            "AI can draft it: give it your risk list and the rules from this course and ask for a one-page policy in plain words. Then edit it so every rule is something you will really do, share it with anyone who helps you, and review it every six months."
          ],
          steps: ["Gather your risk list, never-in-AI list and claims check from earlier lessons.", "Ask AI for a one-page policy with the seven parts, in plain words.", "Edit every rule so it is true for your business.", "Share it with anyone who helps you.", "Set a review date six months from now."],
          words: [["AI use policy", "a short set of rules for how a business uses AI."], ["Review date", "the day you will check and update the policy."]],
          slides: [
            { title: "Why a policy", bullets: ["Turns good rules into habits", "Guides helpers, reassures customers"] },
            { title: "Seven parts", bullets: ["Approved tools; never-in-AI information", "Human checks; honest claims and disclosures", "Copyright; who to ask; review date"] },
            { title: "Make it real", bullets: ["Let AI draft from your notes", "Edit every rule to fit you", "Share it, review every six months"] }
          ],
          tryIt: "Final task: write your one-page AI use policy with all seven parts, edit it to fit your business, and set a review date.",
          youCanNow: "run your business's AI use under a clear, honest, written policy, and know when to call a lawyer."
        }
      ],
      check: {
        title: "Knowledge Check 2: Honest claims, ownership and your policy",
        questions: [
          { q: "Your app does not use AI. Can you advertise it as \"AI-powered\"?", options: ["No, that is a false claim", "Yes, everyone does", "Only in small print", "Only online"], answer: 0, why: "Ad claims, including AI claims, must be truthful." },
          { q: "Which review practice does the FTC rule ban?", options: ["Showing real reviews with permission", "Asking customers for honest reviews", "Replying to reviews", "Posting AI-generated reviews from people who do not exist"], answer: 3, why: "The rule bans fake reviews, including AI-generated ones." },
          { q: "According to the US Copyright Office, does writing a prompt make you the author of the AI's output?", options: ["Yes, always", "No, a prompt alone is not enough", "Only for long prompts", "Only for images"], answer: 1, why: "The Office says prompts alone do not make someone the author." },
          { q: "How can you make AI-assisted work more likely to be protected?", options: ["Add real human creative work and keep records", "Use more prompts", "Add the word \"copyright\"", "Use a paid AI tool"], answer: 0, why: "Human creative contributions can be protected." },
          { q: "How often should you review your AI use policy?", options: ["Only after a lawsuit", "Never", "On a set date, such as every six months", "Every day"], answer: 2, why: "Tools and laws change, so regular reviews keep it current." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: AI Ethics, Risks and Legal Considerations",
    questions: [
      { q: "Which is NOT one of the five AI risks in this course?", options: ["Accuracy", "Battery life", "Privacy", "Fairness"], answer: 1, why: "The five are accuracy, fairness, privacy, honesty and ownership." },
      { q: "Being ethical with AI includes:", options: ["Collecting all data you can", "Letting AI decide everything", "Hiding AI use from everyone", "Keeping a human responsible"], answer: 3, why: "A person stays responsible for AI use." },
      { q: "A risk list records:", options: ["Your social media followers", "Your competitors' passwords", "Only your tool prices", "Where you use AI, what could go wrong, how bad, and a check"], answer: 3, why: "That makes risks manageable." },
      { q: "Which AI output needs a human check every time?", options: ["A private brainstorm you will throw away", "A price list customers will see", "A list of lunch ideas", "A joke for yourself"], answer: 1, why: "Customer-facing money information must be checked." },
      { q: "Bias in AI means:", options: ["A spelling error", "A slow answer", "Results that are unfair to some groups", "A type of tool"], answer: 2, why: "That is the definition." },
      { q: "Do anti-discrimination laws apply when AI helps make a hiring decision?", options: ["Yes", "No, computers are exempt", "Only for big companies abroad", "Only on paper applications"], answer: 0, why: "The law applies to the decision, however it is made." },
      { q: "For lending or housing decisions, AI should:", options: ["Be hidden from the customer", "Decide alone", "Organize information while a person decides", "Replace your lawyer"], answer: 2, why: "High-stakes decisions stay with a person." },
      { q: "\"Take stock\" in the FTC guide means:", options: ["Know what personal information you have", "Buy shares", "Count your inventory only", "Delete everything"], answer: 0, why: "It is the first of the five principles." },
      { q: "\"Pitch it\" in the FTC guide means:", options: ["Make a sales pitch", "Dispose of information you no longer need properly", "Throw a ball", "Post it online"], answer: 1, why: "Old data you do not need is a risk." },
      { q: "If you must use customer information with an AI tool, prefer:", options: ["Emailing it to yourself", "Any free tool without reading terms", "Posting it publicly", "A plan whose terms say it will not train on your data"], answer: 3, why: "Business terms can protect data better." },
      { q: "If AI tools process customer data, your privacy notice should:", options: ["Say so honestly", "Hide it", "Say you never use computers", "Be removed"], answer: 0, why: "Honesty with customers is required and ethical." },
      { q: "FTC advertising rules say claims must be:", options: ["Approved by an AI tool", "Funny", "Short", "Truthful, not misleading and backed by evidence"], answer: 3, why: "That is the truth-in-advertising standard." },
      { q: "The 2026 FTC orders discussed in this course were about:", options: ["Store opening hours", "Late tax filing", "False claims about what an AI marketing service did", "Shipping delays"], answer: 2, why: "The firms claimed to use voice data when they did not." },
      { q: "An influencer you paid posts about you. They must:", options: ["Hide it in comments", "Clearly disclose it, like \"#ad\" at the start", "Say nothing", "Mention it once a year"], answer: 1, why: "Material connections must be disclosed clearly." },
      { q: "Who is responsible for what your paid promoters say about you?", options: ["Nobody", "Only the promoter", "The platform", "You, the business"], answer: 3, why: "The FTC says businesses are responsible for their promoters' claims." },
      { q: "Offering a discount only to customers who leave 5-star reviews is:", options: ["Required", "A great idea", "Banned by the FTC's fake-review rule", "Fine if disclosed in tiny print"], answer: 2, why: "Rewards conditioned on positive reviews are banned." },
      { q: "According to the Copyright Office, purely AI-generated material is:", options: ["Not protected by copyright", "Automatically yours", "Owned by the AI", "Protected for 100 years"], answer: 0, why: "Copyright requires human authorship." },
      { q: "Using AI as a tool in your creative work:", options: ["Always cancels copyright", "Does not by itself block copyright for your human contributions", "Makes everything public domain", "Is illegal"], answer: 1, why: "The Office says AI-assisted works can be protected where human creativity shows." },
      { q: "Which request raises copying risk?", options: ["\"Give me ideas for a bakery logo\"", "\"Make a logo exactly like [famous brand]'s\"", "\"Suggest colors for a cleaning business\"", "\"Write a slogan about fresh bread\""], answer: 1, why: "Copying a brand's logo can infringe trademark or copyright." },
      { q: "When unsure about a legal question for your business, you should:", options: ["Talk to a lawyer about your situation", "Trust whatever an AI says", "Ignore it", "Copy what a competitor does"], answer: 0, why: "Laws change and differ by place; a lawyer can advise you." }
    ]
  }
};
