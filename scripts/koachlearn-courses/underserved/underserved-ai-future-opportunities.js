"use strict";

// Koach Learn course: Undeserved Community -> "AI and Future Opportunities". Skill-building course: by the end the student can DO the skill in `outcome`.
// Two chapters of three micro-lessons; a knowledge check closes each chapter; a 20-question quiz closes the course. Shape: scripts/koachlearn-courses/README.md.

module.exports = {
  id: "underserved-ai-future-opportunities",
  category: "Undeserved Community",
  name: "AI and Future Opportunities",
  skills: "Spotting where AI is changing work, Researching a growing job, Checking job facts on official sites, Finding free training, Making a learning plan",
  outcome: "pick one growing job that interests you, research it with a free AI assistant and the official U.S. job outlook site, and write a simple three-step plan to start learning for it with free training near you.",
  about: [
    "AI is changing many jobs: in stores, offices, warehouses, hospitals, schools and at home. That can feel scary. This course shows you how to turn that change into a chance for you and your family.",
    "You will learn where AI is showing up at work, how to use a free AI assistant to explore jobs, how to check what it says on official sites, and how to find free training through your library, a community college or an American Job Center.",
    "You can do every lesson on a phone or a free library computer. Each lesson takes about five minutes and ends with a \"Try it now\" task. There is a knowledge check after each chapter and a 20-question quiz at the end."
  ],
  finalTask: "Write a one-page plan for one growing job: what the job is, what it pays and how fast it is growing (checked on the official Occupational Outlook Handbook), two skills you need, and three steps you will take in the next month using free training near you.",
  chapters: [
    {
      name: "Chapter 1: How AI is changing work",
      lessons: [
        {
          title: "Where AI shows up at work today",
          minutes: 4,
          goal: "Name three ways AI is already used in jobs around you.",
          text: [
            "AI is computer software that can do tasks that usually need a person, like writing, sorting, answering questions or spotting patterns. You may already see it every day.",
            "At a store, AI helps decide how much stock to order. At a call center, a chatbot answers simple questions before a person takes over. In a clinic, software helps write visit notes. In a warehouse, scanners and robots help track boxes.",
            "In most jobs, AI does not replace the whole job. It takes over some tasks, and people do the rest: talking with customers, solving problems, fixing things, caring for others and making decisions."
          ],
          words: [["AI", "short for artificial intelligence: software that does tasks that usually need a person."], ["Task", "one piece of a job, like answering the phone or counting stock."]],
          slides: [
            { title: "AI is already at work", bullets: ["Stores: ordering stock", "Call centers: chatbots answer simple questions", "Clinics: help writing notes", "Warehouses: tracking boxes"] },
            { title: "AI takes tasks, not whole jobs", bullets: ["Software does some tasks", "People do the rest"] },
            { title: "What people still do best", bullets: ["Talk with and care for people", "Solve new problems", "Fix things and make decisions"] }
          ],
          tryIt: "Think of a job you or a family member has had. Write down two tasks AI could help with and two tasks a person still needs to do.",
          youCanNow: "name ways AI is used at work and explain why people are still needed."
        },
        {
          title: "Growing jobs and the skills they need",
          minutes: 5,
          goal: "Find a growing job and its pay on the official Occupational Outlook Handbook.",
          text: [
            "Some jobs are growing because of technology, and some are growing because people will always need them, like health care, skilled trades and caring for children and older adults.",
            "The U.S. Bureau of Labor Statistics runs a free website called the Occupational Outlook Handbook at bls.gov/ooh. For hundreds of jobs it tells you what the work is, the usual pay, the training needed and how fast the job is expected to grow.",
            "For example, the Handbook expects computer and information technology jobs as a group to grow faster than average from 2025 to 2035. Numbers like these are updated, so always read the current page yourself."
          ],
          steps: ["Go to bls.gov/ooh on a phone or library computer.", "Choose a job group, such as Healthcare or Computer and Information Technology.", "Click one job.", "Write down the pay, the training needed and the job outlook."],
          words: [["Job outlook", "how fast the number of jobs is expected to grow or shrink."], ["Median pay", "the middle pay: half the workers earn more and half earn less."]],
          sources: [{ name: "U.S. Bureau of Labor Statistics: Occupational Outlook Handbook, Computer and Information Technology", url: "https://www.bls.gov/ooh/computer-and-information-technology/home.htm" }],
          slides: [
            { title: "Jobs that are growing", bullets: ["Health care and caregiving", "Skilled trades", "Computers and technology"] },
            { title: "Your free job guide: bls.gov/ooh", bullets: ["What the work is", "Usual pay and training needed", "How fast the job is growing"] },
            { title: "How to use it", bullets: ["Pick a job group", "Click one job", "Write down pay, training and outlook"] }
          ],
          tryIt: "Open bls.gov/ooh, pick one job that interests you, and write down its median pay, the training it needs and its job outlook.",
          youCanNow: "look up any job on the official Occupational Outlook Handbook and read its pay, training and outlook."
        },
        {
          title: "Using AI to explore a job",
          minutes: 5,
          goal: "Ask a free AI assistant clear questions about a job, then check the answers.",
          text: [
            "A free AI assistant such as ChatGPT, Microsoft Copilot or Google Gemini can explain a job in simple words, list the skills it needs and suggest questions to ask people who do it.",
            "Give it your situation without private details. For example: \"I have worked in fast food for 3 years and I like helping people. Explain what a medical assistant does in a normal day, in simple words.\"",
            "AI can be wrong about pay, licenses and training. Check those facts on bls.gov/ooh or your state's official site before you make plans."
          ],
          steps: ["Open a free AI assistant.", "Tell it the job and a little about your experience.", "Ask what a normal day looks like and what skills it needs.", "Check pay and training on bls.gov/ooh."],
          words: [["Prompt", "what you type or say to an AI assistant."], ["License", "official permission from the state to do certain jobs."]],
          slides: [
            { title: "AI can help you explore", bullets: ["Explain a job in simple words", "List the skills needed", "Suggest questions to ask workers"] },
            { title: "A good prompt", bullets: ["The job you want to learn about", "A little about your experience", "How you want the answer: simple words, a list"] },
            { title: "Always check", bullets: ["Pay, licenses and training can be wrong", "Check on bls.gov/ooh or your state's site"] }
          ],
          tryIt: "Ask an AI assistant to explain your chosen job's normal day and its top five skills. Compare one fact with what bls.gov/ooh says.",
          youCanNow: "use AI to learn about a job and check its facts on an official site."
        }
      ],
      check: {
        title: "Knowledge Check 1: How AI is changing work",
        questions: [
          { q: "In most jobs, what does AI do?", options: ["Replaces every worker", "Takes over some tasks while people do the rest", "Nothing at all", "Makes all the decisions"], answer: 1, why: "AI usually handles some tasks; people still do the parts that need judgment and care." },
          { q: "Which free official site shows a job's pay, training and outlook?", options: ["A social media page", "A pop-up ad", "The Occupational Outlook Handbook at bls.gov/ooh", "A text message link"], answer: 2, why: "The Bureau of Labor Statistics runs the Occupational Outlook Handbook." },
          { q: "What does \"median pay\" mean?", options: ["The highest pay", "The lowest pay", "The pay after taxes", "The middle pay: half earn more, half earn less"], answer: 3, why: "Median is the middle number." },
          { q: "AI tells you a job needs no license in your state. What do you do?", options: ["Check on your state's official site or bls.gov/ooh", "Trust it", "Quit your job today", "Tell everyone"], answer: 0, why: "AI can be wrong about licenses; official sites are the source to trust." },
          { q: "Which is the best prompt to explore a job?", options: ["\"jobs\"", "\"I worked 3 years in fast food and like helping people. Explain what a medical assistant does in a day, in simple words.\"", "\"Here is my Social Security number\"", "\"money\""], answer: 1, why: "It names the job, gives your experience and says how you want the answer." }
        ]
      }
    },
    {
      name: "Chapter 2: Getting ready for your next step",
      lessons: [
        {
          title: "Finding free training near you",
          minutes: 5,
          goal: "Find two free or low-cost places to learn the skills for your job.",
          text: [
            "You do not need a lot of money to start learning. Public libraries often offer free computer classes and free online learning. Community colleges offer low-cost certificates, and many students qualify for financial aid.",
            "American Job Centers are run with the U.S. Department of Labor. They help with job search, job referrals and training. Some services have eligibility rules, so ask your local center what you qualify for. Find one with the CareerOneStop American Job Center Finder or call 1-877-US-2JOBS.",
            "Ask a free AI assistant: \"What free ways can I learn basic skills for a medical assistant job?\" Then check each idea with the library, college or job center itself."
          ],
          steps: ["Ask your library what free classes and online learning it offers.", "Look up the nearest community college and its certificate programs.", "Find your nearest American Job Center with the CareerOneStop finder.", "Write down two places, their phone numbers and their hours."],
          words: [["Certificate", "a short training program that proves you learned a job skill."], ["American Job Center", "a local office, run with the U.S. Department of Labor, that helps people find jobs and training."]],
          sources: [{ name: "U.S. Department of Labor: American Job Centers", url: "https://www.dol.gov/agencies/eta/american-job-centers" }, { name: "CareerOneStop: American Job Center Finder", url: "https://www.careeronestop.org/LocalHelp/AmericanJobCenters/find-american-job-centers.aspx" }],
          slides: [
            { title: "Free and low-cost places to learn", bullets: ["Public library classes and online learning", "Community college certificates", "American Job Centers"] },
            { title: "American Job Centers", bullets: ["Help with job search and training", "Some services have eligibility rules", "Find one: CareerOneStop finder or 1-877-US-2JOBS"] },
            { title: "Use AI, then call", bullets: ["Ask AI for free ways to learn", "Check each idea with the place itself"] }
          ],
          tryIt: "Find two places near you where you could learn skills for your job. Write down each name, phone number and hours.",
          youCanNow: "find free or low-cost training near you for the job you want."
        },
        {
          title: "Turning a goal into small steps",
          minutes: 4,
          goal: "Break a job goal into three small steps with dates.",
          text: [
            "A big goal like \"get a better job\" can feel too large. Small steps with dates make it real.",
            "A good step is something you can finish in a week or two: \"Call the library on Tuesday to sign up for the computer class.\" \"Talk to one person who works as a medical assistant by the 15th.\"",
            "You can ask an AI assistant to help: \"Help me break my goal of becoming a medical assistant into three small steps for the next month. I can spend 3 hours a week.\" Then change the plan so it fits your life, your family and your schedule."
          ],
          steps: ["Write your goal in one sentence.", "Ask AI to break it into three small steps.", "Give each step a date.", "Change the plan to fit your time and family."],
          words: [["Goal", "something you want to reach."], ["Deadline", "the date you plan to finish a step."]],
          slides: [
            { title: "Big goals need small steps", bullets: ["\"Get a better job\" is too big", "Small steps make it real"] },
            { title: "A good step", bullets: ["You can finish it in a week or two", "It has a date", "Example: call the library on Tuesday"] },
            { title: "Let AI help, then adjust", bullets: ["Tell it your goal and your time", "Change the plan to fit your life"] }
          ],
          tryIt: "Write your job goal in one sentence. Ask an AI assistant to break it into three steps for the next month, then add a date to each step.",
          youCanNow: "turn a job goal into three small steps with dates."
        },
        {
          title: "Your plan, and staying safe while you look",
          minutes: 5,
          goal: "Finish your one-page plan and spot fake job and training offers.",
          text: [
            "Put it all together on one page: the job, its pay and outlook from bls.gov/ooh, two skills you need, two places to learn, and three dated steps. Keep it on your phone or print it at the library.",
            "Be careful. Scammers post fake jobs and fake training. Warning signs: they ask you to pay to get the job, ask for your bank or Social Security number before an interview, promise high pay for little work, or rush you.",
            "Never type your Social Security number, bank details or passwords into an AI assistant. Check any training program with your library, job center or the school's official website before you pay or sign anything."
          ],
          steps: ["Write the job, pay and outlook.", "Add two skills and two places to learn.", "Add your three dated steps.", "Check every offer for scam warning signs before you share anything."],
          words: [["Scam", "a trick to steal money or information."]],
          slides: [
            { title: "Your one-page plan", bullets: ["Job, pay and outlook (from bls.gov/ooh)", "Two skills and two places to learn", "Three steps with dates"] },
            { title: "Fake job warning signs", bullets: ["You must pay to get the job", "They want bank or SSN before an interview", "High pay for little work, or rushing you"] },
            { title: "Stay safe", bullets: ["No private numbers in AI", "Check training with the library or job center", "Look before you pay or sign"] }
          ],
          tryIt: "Final task: write your one-page plan with the job, pay and outlook, two skills, two places to learn and three dated steps. Check it for anything private before you share it.",
          youCanNow: "make a real, checked plan for a growing job and avoid common job scams."
        }
      ],
      check: {
        title: "Knowledge Check 2: Getting ready for your next step",
        questions: [
          { q: "Where can you often find free computer classes?", options: ["A pop-up ad", "A stranger's text", "Your public library", "A gift card store"], answer: 2, why: "Many public libraries offer free classes and online learning." },
          { q: "What is an American Job Center?", options: ["A local office that helps with jobs and training", "A store", "A bank", "A social media app"], answer: 0, why: "American Job Centers are run with the U.S. Department of Labor to help job seekers." },
          { q: "Which is a good small step?", options: ["\"Be rich\"", "\"Someday learn things\"", "\"Get every job\"", "\"Call the library Tuesday to sign up for the computer class\""], answer: 3, why: "It is small, clear and has a date." },
          { q: "A job post asks you to pay $100 to be hired. This is:", options: ["Normal", "A warning sign of a scam", "A great deal", "A government rule"], answer: 1, why: "Real employers do not charge you to get a job." },
          { q: "An AI suggests a training program. Before you pay, you should:", options: ["Check it with the school's official site, your library or job center", "Pay right away", "Give the AI your bank number", "Ignore all training"], answer: 0, why: "Check any program with a trusted source before paying." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: AI and Future Opportunities",
    questions: [
      { q: "AI is best described as:", options: ["A type of phone", "Software that does tasks that usually need a person", "A government office", "A job title"], answer: 1, why: "AI is software that writes, sorts, answers or spots patterns." },
      { q: "Which is an example of AI at work?", options: ["A chatbot answering simple customer questions", "A stapler", "A paper calendar", "A broom"], answer: 0, why: "Chatbots are AI that answer simple questions." },
      { q: "Which job task is a person still best at?", options: ["Counting the same items over and over", "Sorting emails by date", "Comforting a worried patient", "Copying numbers into a table"], answer: 2, why: "Caring for people needs a human." },
      { q: "What is the Occupational Outlook Handbook?", options: ["A free U.S. government guide to jobs, pay and training", "A paid magazine", "A social media page", "A bank app"], answer: 0, why: "It is run by the Bureau of Labor Statistics at bls.gov/ooh." },
      { q: "\"Job outlook\" tells you:", options: ["The job's dress code", "How fast the number of jobs is expected to grow or shrink", "The boss's name", "The job's address"], answer: 1, why: "Outlook is about expected growth." },
      { q: "Why read the current page instead of trusting an old number?", options: ["Old numbers are always right", "Pages never change", "Pay and outlook numbers are updated over time", "It does not matter"], answer: 2, why: "Job numbers change, so read the latest official page." },
      { q: "Which prompt will get the most useful job answer?", options: ["\"job\"", "\"help\"", "\"stuff about work\"", "\"I like fixing things and have 2 years in maintenance. Explain what an HVAC technician does, in simple words.\""], answer: 3, why: "It gives the job, your experience and the format." },
      { q: "AI gives you a pay number for a job. You should:", options: ["Check it on bls.gov/ooh", "Trust it completely", "Post it online", "Ignore all pay"], answer: 0, why: "AI can be wrong; check pay on the official site." },
      { q: "What is a license?", options: ["A phone app", "Official permission from the state to do certain jobs", "A job post", "A type of resume"], answer: 1, why: "Some jobs need a state license." },
      { q: "Which is a low-cost place to earn a job certificate?", options: ["A pop-up ad", "A community college", "A stranger online", "A gift card shop"], answer: 1, why: "Community colleges offer low-cost certificates, and aid may help." },
      { q: "How can you find an American Job Center?", options: ["Ask a scammer", "Guess", "Use the CareerOneStop finder or call 1-877-US-2JOBS", "Only by mail"], answer: 2, why: "Those are the official ways the Department of Labor lists." },
      { q: "Some American Job Center services have:", options: ["Eligibility rules, so ask what you qualify for", "A secret password", "A required gift card", "No staff at all"], answer: 0, why: "The Department of Labor says some services have eligibility requirements." },
      { q: "Why break a big goal into small steps?", options: ["It makes the goal disappear", "It makes the goal real and doable", "It is required by law", "It costs money"], answer: 1, why: "Small, dated steps are easier to start and finish." },
      { q: "A good step includes:", options: ["No date", "Something you can finish in a week or two, with a date", "Ten years of work", "Only a wish"], answer: 1, why: "Small steps with dates keep you moving." },
      { q: "After AI makes a plan for you, you should:", options: ["Follow it exactly no matter what", "Delete it", "Change it to fit your time and family", "Share your bank number"], answer: 2, why: "You know your life best; adjust the plan." },
      { q: "Your one-page plan should include:", options: ["Your passwords", "Your bank number", "Your Social Security number", "The job, its pay and outlook, skills, places to learn and dated steps"], answer: 3, why: "Those parts make a complete, safe plan." },
      { q: "A job offer asks for your Social Security number before any interview. This is:", options: ["A warning sign", "Normal for every job", "A reward", "Required by AI"], answer: 0, why: "Asking for private numbers too early is a scam sign." },
      { q: "Which should you never type into an AI assistant?", options: ["\"Make it simpler\"", "\"What skills does a cook need?\"", "Your bank account number", "\"Give me three steps\""], answer: 2, why: "Bank details are private information." },
      { q: "\"High pay for little work, start today!\" is most likely:", options: ["A government job", "A scam warning sign", "A library class", "A certificate"], answer: 1, why: "Promises that sound too good are a common scam sign." },
      { q: "Before paying for a training program, check it with:", options: ["A pop-up ad", "The person selling it only", "Nobody", "The school's official site, your library or job center"], answer: 3, why: "Trusted, independent sources help you avoid fake programs." }
    ]
  }
};
