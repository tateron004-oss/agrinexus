"use strict";

// Koach Learn course: Entrepreneurs (bonus) -> "Building AI SaaS Products". Skill-building course in the shape of re-entry/reentry-ai-digital-confidence.js (see scripts/koachlearn-courses/README.md).

module.exports = {
  id: "entrepreneurs-ai-saas",
  category: "Entrepreneurs",
  name: "Building AI SaaS Products",
  skills: "Choosing a narrow SaaS niche, Scoping a minimum viable product, Understanding AI APIs and usage costs, Prototyping without heavy coding, Pricing a subscription, Launching with trust and safety",
  outcome: "turn a narrow business problem into a one-page plan for a small AI software-as-a-service product, build a clickable or working prototype of its core feature, work out a subscription price that covers AI usage costs, and prepare an honest, safe launch checklist.",
  about: [
    "SaaS (software as a service) means software people use online and pay for on a subscription, like a monthly plan. Many new SaaS products put an AI model behind a simple screen that does one job very well: writing listings for property managers, summarizing calls for repair shops, turning menus into translations.",
    "This course is for entrepreneurs who want to build a small AI SaaS product, including people who do not code yet. You will choose a narrow niche, define a minimum viable product, learn how AI APIs and their usage costs work, build a prototype, price it, and prepare a launch that is honest about what the AI does and careful with users' data.",
    "Each lesson takes about five minutes plus a hands-on task. There is a knowledge check after each chapter and a 20-question quiz at the end. AI model prices and tool plans change often: always check the provider's own pricing page."
  ],
  finalTask: "Produce an AI SaaS starter pack: a one-page product plan (niche, user, problem, the one core feature), a prototype of the core feature (a clickable mock-up, a no-code app, or a short working notebook), a pricing sheet that shows the AI usage cost per user per month and your price, and a launch checklist covering honest claims, privacy, terms, human review and how users can reach you.",
  chapters: [
    {
      name: "Chapter 1: Define the product",
      lessons: [
        {
          title: "Choosing a narrow niche",
          minutes: 5,
          goal: "Pick a specific user and a specific repeated job for your AI SaaS product.",
          text: [
            "Big, general AI tools already exist and are often free. Small SaaS products win by being narrow: one type of user, one repeated job, done better than a general chat assistant. \"AI writing tool\" is too broad. \"Turns a contractor's job notes into a clean customer quote in two minutes\" is narrow.",
            "Good niches have users who do the same job often, lose time or money on it, and already pay for software. You can reach them through a trade group, a forum or a local network.",
            "Ask AI to brainstorm niches from your own experience: \"I have worked in [field]. List ten repeated writing or sorting jobs people in this field do every week.\" Then talk to three people in the niche before you go further."
          ],
          steps: ["List fields you know well.", "Ask AI for repeated jobs in those fields.", "Pick one user and one job.", "Check: frequent, costly, already pays for software, easy to reach.", "Talk to three people who do that job."],
          words: [["SaaS", "software as a service: online software people pay for by subscription."], ["Niche", "a small, specific group of users with a shared need."]],
          slides: [
            { title: "Narrow wins", bullets: ["One user, one repeated job", "Better than a general chat assistant", "\"Job notes to a quote in two minutes\""] },
            { title: "Good niches", bullets: ["Do the job often", "Lose time or money on it", "Already pay for software; easy to reach"] },
            { title: "Start from what you know", bullets: ["Ask AI for repeated jobs in your field", "Talk to three people before building"] }
          ],
          tryIt: "Use AI to list ten repeated jobs in a field you know, choose one user and one job, and write a one-sentence product idea. Ask at least one person in that niche if it would help.",
          youCanNow: "choose a narrow, reachable niche for an AI SaaS product."
        },
        {
          title: "Scoping a minimum viable product",
          minutes: 5,
          goal: "Define the one core feature your first version must do well.",
          text: [
            "A minimum viable product (MVP) is the smallest version that solves the core problem well enough that someone would pay. For AI SaaS it is usually one screen: the user puts something in, the AI does the job, the user checks and copies the result.",
            "Write your core flow in one line: \"Contractor pastes job notes, picks a template, gets a quote draft, edits, downloads.\" Everything else (accounts, teams, integrations, dashboards) waits until people are paying.",
            "Also decide what the AI must never do, such as invent prices, give legal advice or send anything without the user's click. These rules shape both your instruction prompt and your screen."
          ],
          steps: ["Write the core flow in one line: input, AI job, user check, output.", "List features you will NOT build yet.", "Write three things the AI must never do.", "Sketch the one screen on paper."],
          words: [["MVP", "minimum viable product: the smallest version that solves the core problem well enough to sell."], ["Core flow", "the main path a user takes to get the job done."]],
          slides: [
            { title: "The smallest useful version", bullets: ["One screen", "Input, AI job, user check, output"] },
            { title: "Not yet", bullets: ["Teams and dashboards", "Integrations", "Anything not in the core flow"] },
            { title: "AI must never", bullets: ["Invent prices or facts", "Give legal or medical advice", "Act without the user's click"] }
          ],
          tryIt: "Write your one-line core flow, your not-yet list and three never rules, and sketch the single screen.",
          youCanNow: "scope an AI SaaS MVP around one core feature with clear limits."
        },
        {
          title: "How AI APIs work and what they cost",
          minutes: 6,
          goal: "Explain how an app uses an AI model through an API and estimate the cost per user.",
          text: [
            "An API (application programming interface) lets your app send a request to an AI model and get the answer back. Your app sends your instruction prompt plus the user's input; the model returns text (or an image, or structured data); your app shows it.",
            "Most AI model providers charge by usage, often counted in tokens (small chunks of text, roughly parts of words), with different prices for input and output and for different models. Prices change often, so look them up on the provider's pricing page on the day you plan.",
            "Estimate cost per user: about how many requests a user makes per month, times the average size of each request and answer, times the price. Ask AI to help set up the spreadsheet, and check the math. Keep your API key secret: never paste it into a chat, a web page or a public file."
          ],
          steps: ["Write what your app sends: instruction prompt + user input.", "Estimate requests per user per month.", "Estimate the size of each request and answer.", "Look up current prices on the provider's pricing page.", "Calculate cost per user per month and keep your API key secret."],
          words: [["API", "a way for one program to send requests to another and get answers back."], ["Token", "a small chunk of text that AI providers count to measure usage and price."], ["API key", "a secret code that lets your app use a provider's API and is billed to you."]],
          slides: [
            { title: "How it works", bullets: ["Your app sends prompt + user input", "The model returns an answer", "Your app shows it to the user"] },
            { title: "Usage pricing", bullets: ["Often counted in tokens", "Input and output priced differently", "Check the provider's pricing page"] },
            { title: "Cost per user", bullets: ["Requests per month", "x size of each request and answer", "x current price"] },
            { title: "Keep the API key secret", bullets: ["Never in a chat, web page or public file", "Anyone with it can spend your money"] }
          ],
          tryIt: "Build a small spreadsheet estimating your AI cost per user per month: requests, size and the current price from your chosen provider's pricing page. Check every formula.",
          youCanNow: "explain how an AI SaaS app uses an API and estimate its usage cost per user."
        }
      ],
      check: {
        title: "Knowledge Check 1: Define the product",
        questions: [
          { q: "Which is the best niche for a small AI SaaS product?", options: ["An AI tool for everyone", "Turning contractors' job notes into customer quotes", "A general chat assistant", "All of business"], answer: 1, why: "Narrow user plus repeated job beats general tools." },
          { q: "What is an MVP?", options: ["A finished product with every feature", "The most expensive version", "A sports award", "The smallest version that solves the core problem well enough to sell"], answer: 3, why: "MVP = minimum viable product." },
          { q: "Which feature should wait until people are paying?", options: ["Team dashboards", "The core input-to-output flow", "The user check step", "The AI job itself"], answer: 0, why: "Only the core flow belongs in the MVP." },
          { q: "AI providers often measure usage in:", options: ["Minutes of daylight", "Pages", "Tokens", "Customers"], answer: 2, why: "Tokens are small chunks of text used for pricing." },
          { q: "Where should your API key NEVER go?", options: ["In a password manager", "In a secure settings area of your app", "Into a chat, web page or public file", "In your provider account"], answer: 2, why: "Anyone with the key can use it and spend your money." }
        ]
      }
    },
    {
      name: "Chapter 2: Build, price and launch",
      lessons: [
        {
          title: "Prototyping the core feature",
          minutes: 6,
          goal: "Build a prototype of your core feature and test it with real inputs.",
          text: [
            "Start by testing the AI job itself, before any app: put your instruction prompt and ten real (anonymized) inputs into a chat assistant and check the outputs. If the AI cannot do the job well in a chat, an app will not fix it. Tighten the prompt until 8 or 9 out of 10 results are good.",
            "Then make the prototype at the level you can: a clickable mock-up of the screen (in a design tool such as Canva or a slide deck), a no-code app builder that can call an AI model, or a short Python notebook in Google Colab that calls an API with your key kept secret.",
            "Show the prototype to three people in your niche and watch them use it. Note where they get stuck and where the AI output needed fixing."
          ],
          steps: ["Collect ten real inputs and remove private details.", "Test your instruction prompt in a chat assistant.", "Improve the prompt until most outputs are good.", "Build a prototype: mock-up, no-code app or notebook.", "Watch three niche users try it and note problems."],
          words: [["Prototype", "an early, simple version used to test an idea."], ["Mock-up", "a picture or clickable model of a screen that shows how the app will look."], ["Google Colab", "a free online notebook where you can run Python code in a browser."]],
          slides: [
            { title: "Test the AI job first", bullets: ["Instruction prompt + ten real inputs", "In a chat assistant", "Aim for 8 or 9 good results out of 10"] },
            { title: "Pick your prototype level", bullets: ["Clickable mock-up", "No-code app builder", "Python notebook in Google Colab"] },
            { title: "Watch real users", bullets: ["Three people from your niche", "Where do they get stuck?", "Where did the AI need fixing?"] }
          ],
          tryIt: "Test your prompt on ten anonymized inputs and score the results. Then build the simplest prototype you can and show it to at least one person in your niche.",
          youCanNow: "prove an AI feature works and build a prototype people can try."
        },
        {
          title: "Pricing a subscription",
          minutes: 5,
          goal: "Set a monthly price that covers AI usage and other costs with room for profit.",
          text: [
            "Start from value: how much time or money does your product save a user each month? If it saves a contractor three hours, a price well below the value of those hours is easy to justify.",
            "Then check costs: AI usage per user (from Lesson 3), hosting and tools, payment processing fees, support time, and your own time. Heavy users can cost much more than average users, so consider usage limits per plan.",
            "Many SaaS products offer two or three plans with clear limits, and a free trial. Ask AI to suggest plan structures, but set the final numbers yourself and check them in a spreadsheet. For sales tax and business tax on software, check your state's revenue agency and irs.gov, or ask an accountant, because rules differ."
          ],
          steps: ["Estimate the value to the user each month.", "Add costs per user: AI usage, hosting, payments, support.", "Plan for heavy users with limits.", "Design two or three plans and a trial.", "Check the math and ask an accountant about tax."],
          words: [["Subscription", "paying a regular amount, such as monthly, to keep using a product."], ["Usage limit", "a cap on how much a plan can use, like 100 quotes a month."], ["Free trial", "a short period when people can use the product without paying."]],
          slides: [
            { title: "Start from value", bullets: ["Time or money saved each month", "Price well below that value"] },
            { title: "Cover your costs", bullets: ["AI usage per user", "Hosting, payments, support", "Heavy users: set limits"] },
            { title: "Plans", bullets: ["Two or three plans with clear limits", "A free trial", "Tax rules differ: ask an accountant"] }
          ],
          sources: [{ name: "IRS: Self-Employed Individuals Tax Center", url: "https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center" }],
          tryIt: "Make a pricing sheet: value per user, cost per user (including AI usage), two plans with limits, and the profit per user on each plan. Check every formula.",
          youCanNow: "price an AI subscription that covers usage costs and matches the value to users."
        },
        {
          title: "Launching with trust and safety",
          minutes: 6,
          goal: "Prepare a launch checklist that keeps claims honest and users' data safe.",
          text: [
            "Trust is your biggest asset as a new SaaS. Be honest about what the AI does and its limits: say that outputs are AI-generated and should be checked. The FTC says advertising must be truthful, not misleading and backed by evidence, and it has taken action against companies over false AI claims.",
            "Protect user data. Follow the FTC's data security principles: take stock of what you collect, scale down to what you need, lock it, dispose of what you no longer need, and plan ahead for problems. Check what your AI provider does with data sent through its API, and say so in a privacy policy.",
            "Have a privacy policy and terms of service before you take payment; templates exist, but have a lawyer review them for your situation. Give users an easy way to reach a person, and launch small: a few users from your niche first, then grow."
          ],
          steps: ["Write honest marketing: what it does, its limits, \"check AI outputs\".", "List what user data you collect and cut what you do not need.", "Check your AI provider's data terms.", "Prepare a privacy policy and terms, reviewed by a lawyer.", "Add a way to reach a person and launch to a small group first."],
          words: [["Privacy policy", "a public statement of what data you collect and how you use it."], ["Terms of service", "the rules users agree to when using your product."], ["Launch", "making your product available to users."]],
          slides: [
            { title: "Honest about the AI", bullets: ["Say what it does and its limits", "\"AI-generated: please check\"", "FTC: claims need evidence"] },
            { title: "Protect user data", bullets: ["Take stock, scale down, lock it", "Dispose of what you do not need; plan ahead", "Check your AI provider's data terms"] },
            { title: "Before taking payment", bullets: ["Privacy policy and terms", "Reviewed by a lawyer", "Easy way to reach a person"] },
            { title: "Launch small", bullets: ["A few niche users first", "Fix, then grow"] }
          ],
          sources: [{ name: "FTC: Advertising and Marketing Basics", url: "https://www.ftc.gov/business-guidance/advertising-marketing/advertising-marketing-basics" }, { name: "FTC: Protecting Personal Information, A Guide for Business", url: "https://www.ftc.gov/business-guidance/resources/protecting-personal-information-guide-business" }],
          tryIt: "Final task: write your launch checklist (honest claims, data list, provider terms, privacy policy and terms for a lawyer to review, contact route, small first launch) and put together your AI SaaS starter pack with your plan, prototype and pricing sheet.",
          youCanNow: "plan, prototype, price and prepare an honest, safe launch of a small AI SaaS product."
        }
      ],
      check: {
        title: "Knowledge Check 2: Build, price and launch",
        questions: [
          { q: "What should you test before building any app?", options: ["Whether the AI can do the job well using your prompt in a chat", "The logo", "The pricing page", "The domain name"], answer: 0, why: "If the AI cannot do the job, an app will not fix it." },
          { q: "Which is a quick prototype level for a non-coder?", options: ["Nothing until launch", "A full custom data center", "Hiring 20 engineers", "A clickable mock-up of the screen"], answer: 3, why: "Mock-ups let users react without code." },
          { q: "Why set usage limits on plans?", options: ["To annoy users", "Heavy users can cost much more in AI usage", "Because the law requires it", "To hide prices"], answer: 1, why: "Limits keep AI costs predictable." },
          { q: "What should your marketing say about AI outputs?", options: ["They are AI-generated and should be checked", "They are 100% accurate", "They replace professionals", "Nothing at all"], answer: 0, why: "Honest limits build trust and avoid misleading claims." },
          { q: "Before taking payment, you should have:", options: ["A celebrity endorsement", "A thousand features", "A privacy policy and terms of service reviewed by a lawyer", "No contact information"], answer: 2, why: "They set clear rules and protect you and users." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Building AI SaaS Products",
    questions: [
      { q: "SaaS stands for:", options: ["Sales and a store", "Software as a service", "Simple AI and search", "Secure access app service"], answer: 1, why: "It is online software paid for by subscription." },
      { q: "Small AI SaaS products usually win by:", options: ["Copying a big chat assistant", "Doing everything for everyone", "Being the most expensive", "Doing one job for one type of user very well"], answer: 3, why: "Narrow focus beats general tools." },
      { q: "A good niche has users who:", options: ["Have no budget", "Never do the job", "Cannot be reached", "Do the job often and already pay for software"], answer: 3, why: "Those users are likely to buy." },
      { q: "Before building, you should talk to:", options: ["Nobody", "Three people in the niche", "Only investors", "Only AI"], answer: 1, why: "Real users confirm the problem." },
      { q: "An MVP for AI SaaS is usually:", options: ["A full company", "Ten apps", "One screen: input, AI job, user check, output", "A logo"], answer: 2, why: "The smallest useful version." },
      { q: "Writing what the AI must never do helps:", options: ["Shape your instruction prompt and screen", "Make the app slower", "Raise the price", "Nothing"], answer: 0, why: "Clear limits reduce harmful errors." },
      { q: "An API lets your app:", options: ["Pay taxes", "Print documents", "Send requests to an AI model and get answers", "Hire staff"], answer: 2, why: "That is what an API does." },
      { q: "Where should you check current AI model prices?", options: ["The provider's pricing page", "An old blog post", "A guess", "A competitor's app"], answer: 0, why: "Prices change often." },
      { q: "Cost per user is estimated from:", options: ["Number of logos", "Requests per month x size x price", "Your rent only", "The user's age"], answer: 1, why: "Usage drives AI cost." },
      { q: "If someone gets your API key they can:", options: ["Fix your bugs", "Nothing", "Only read your email", "Use the API and spend your money"], answer: 3, why: "Keys are billed to you." },
      { q: "You test your prompt on ten inputs and 4 are good. What next?", options: ["Improve the prompt before building the app", "Build the app anyway", "Launch tomorrow", "Raise prices"], answer: 0, why: "Aim for most results being good first." },
      { q: "Google Colab is:", options: ["A spreadsheet only", "A payment app", "A social network", "A free online notebook for running Python in a browser"], answer: 3, why: "It lets you test code without installing anything." },
      { q: "When watching users try your prototype, note:", options: ["Their home address", "Their passwords", "Where they get stuck and where AI output needed fixing", "Nothing"], answer: 2, why: "This shows what to fix." },
      { q: "Pricing should start from:", options: ["A random number", "The value the product gives the user", "Your competitor's logo", "The color of your site"], answer: 1, why: "Value sets what users will pay." },
      { q: "Which is a SaaS cost per user?", options: ["A trophy", "The user's lunch", "Your vacation", "AI usage"], answer: 3, why: "AI usage grows with each user." },
      { q: "For sales tax on software, you should:", options: ["Ask users", "Assume it never applies", "Check your state's revenue agency or ask an accountant", "Ignore it"], answer: 2, why: "Rules differ by state." },
      { q: "The FTC's data principle \"scale down\" means:", options: ["Collect and keep only what you need", "Make your logo smaller", "Lower your price", "Hire fewer people"], answer: 0, why: "Less data means less risk." },
      { q: "Why check your AI provider's data terms?", options: ["To change fonts", "To know what happens to user data sent through the API", "To get free credits", "It is not needed"], answer: 1, why: "You must tell users how their data is handled." },
      { q: "Who should review your privacy policy and terms?", options: ["Only an AI chat", "A lawyer", "Your first user", "Nobody"], answer: 1, why: "Legal documents need professional review." },
      { q: "A safe way to launch is:", options: ["To a small group of niche users first", "To everyone at once with no support", "Without a contact route", "Without testing"], answer: 0, why: "A small launch lets you fix problems early." }
    ]
  }
};
