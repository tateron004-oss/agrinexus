"use strict";

// Koach Learn course (shared, bonus): "AI for Skilled Trades and Logistics". Categories: Re-Entry, Workforce Development. Shape and rules: ../README.md; model: ../re-entry/reentry-ai-digital-confidence.js.

module.exports = {
  id: "ai-skilled-trades-logistics",
  category: "Re-Entry",
  name: "AI for Skilled Trades and Logistics",
  skills: "Explaining manuals and specs with AI, Writing a job estimate, Making a safety checklist, Logging work with photos and notes, Planning routes and loads, Finding apprenticeships and trade jobs",
  outcome: "use a free AI assistant on your phone to understand a manual, write a clear job estimate, build a job safety checklist you check against official rules, keep a work log, plan a delivery or service route, and find apprenticeships and trade jobs.",
  about: [
    "Skilled trades (electrical, plumbing, HVAC, carpentry, welding, auto repair) and logistics (warehousing, forklift, delivery, trucking, shipping) are in demand, and many paths start with an apprenticeship or short training instead of a college degree. Many employers in these fields hire people with records.",
    "AI does not swing the hammer or drive the truck. But on a phone it can explain a manual in plain words, write estimates and work notes, draft safety checklists, and help plan routes, saving time and helping you look professional.",
    "This course is for people coming home, workers in workforce programs and anyone starting in a trade or logistics job. Each lesson is about five minutes with a \"Try it now\" task. A knowledge check closes each chapter and a 20-question quiz closes the course. Safety rules always come from your employer, the manufacturer and OSHA, not from AI."
  ],
  finalTask: "For one real or practice job in a trade or logistics role, create a job packet with AI help: a plain-language summary of a manual or spec section, a written estimate or work order, a job safety checklist checked against an official source, a work log entry with before-and-after photo notes, and a route or load plan. Then find one apprenticeship or trade job you could apply for.",
  chapters: [
    {
      name: "Chapter 1: AI on the job",
      lessons: [
        {
          title: "Understanding manuals and specs with AI",
          minutes: 5,
          goal: "Use AI to explain a technical manual or spec in plain words, then check it against the source.",
          text: [
            "Manuals, spec sheets and installation guides are full of hard words. AI can explain them. Copy or type a section, or take a photo if your AI app reads pictures, and ask: \"Explain this in plain words. What are the steps, what tools do I need, and what are the warnings?\"",
            "Ask follow-ups: \"What does 'torque to 25 ft-lbs' mean?\" or \"What is the difference between a GFCI and a regular outlet?\" AI is a great tutor for terms and concepts.",
            "But the manual wins. Numbers like torque, voltage, pressure, clearances and weight limits must come from the manufacturer's manual, the code your area uses, or your supervisor. If AI and the manual disagree, follow the manual and ask your supervisor."
          ],
          steps: ["Copy, type or photograph the manual section.", "Ask AI to explain it in plain words: steps, tools, warnings.", "Ask follow-ups about terms you do not know.", "Check every number against the manual.", "If they disagree, follow the manual and ask your supervisor."],
          words: [["Spec sheet", "a document listing the exact measurements and requirements for a product."], ["Torque", "how tightly something is turned, like a bolt."], ["Code", "official building or electrical rules an area requires."]],
          slides: [
            { title: "AI as your manual tutor", bullets: ["Paste, type or photo a section", "Ask for steps, tools and warnings", "Ask what terms mean"] },
            { title: "The manual wins", bullets: ["Torque, voltage, pressure, weight limits", "Come from the manual, code or supervisor"] },
            { title: "When they disagree", bullets: ["Follow the manual", "Ask your supervisor"] }
          ],
          tryIt: "Find a manual for something you own (a tool, appliance or vehicle) online or in a drawer. Ask AI to explain one section in plain words, then check every number against the manual.",
          youCanNow: "use AI to understand manuals and specs while trusting the official numbers."
        },
        {
          title: "Writing a clear estimate or work order",
          minutes: 5,
          goal: "Write a professional estimate or work order with AI help.",
          text: [
            "Customers and supervisors trust workers who put things in writing. An estimate tells a customer what you will do and what it will cost before you start. A work order records a job: what was asked, what was done, materials used and time spent.",
            "Tell AI the facts and let it format: \"Write a simple estimate for replacing a bathroom faucet. Labor 2 hours at $60 per hour. Parts: faucet $85, supply lines $15. Valid 30 days. Customer must choose the faucet model.\" Check the math and every detail.",
            "Keep it honest: list what is included and what is not, and say the price may change if you find hidden problems, with the customer's approval first. Use a free template in Google Docs or Word and save a copy of every one."
          ],
          steps: ["Write the job, labor hours and rate, and parts with prices.", "Ask AI to format a simple estimate or work order.", "Check the math and details.", "Add what is included, what is not, and when it expires.", "Save a copy."],
          words: [["Estimate", "a written price for a job before it starts."], ["Work order", "a record of a job: what was asked, what was done, materials and time."], ["Labor", "the cost of the worker's time."]],
          slides: [
            { title: "Put it in writing", bullets: ["Estimate: before the job", "Work order: record of the job"] },
            { title: "Let AI format it", bullets: ["Give it labor, rate and parts", "Check the math"] },
            { title: "Keep it honest", bullets: ["Included and not included", "Changes only with customer approval", "Save every copy"] }
          ],
          tryIt: "Write an estimate for a real or practice job with AI help: labor, parts, total, what is included and an expiry date. Check the math by hand.",
          youCanNow: "write a clear, honest estimate or work order with AI help."
        },
        {
          title: "Making a job safety checklist",
          minutes: 6,
          goal: "Draft a job safety checklist with AI and check it against official safety sources.",
          text: [
            "Many trade and warehouse jobs use a job safety (or hazard) analysis: list the steps of a job, the hazards at each step, and how to control them. Example hazards: falls, electrical shock, lifting injuries, moving equipment like forklifts, chemicals and heat.",
            "AI can draft one: \"Make a job safety checklist for replacing a ceiling light fixture: steps, hazards and controls, including personal protective equipment.\" It will often include good basics like turning off the breaker and testing that power is off.",
            "But AI is not a safety authority. Check the list with your supervisor, the manufacturer's instructions and official sources such as OSHA (osha.gov). OSHA 10-hour and 30-hour Outreach classes teach safety basics; OSHA says the card is voluntary and is not a certification or license, though some employers and states require it."
          ],
          steps: ["List the job's steps.", "Ask AI for hazards and controls at each step, including protective equipment.", "Check it with your supervisor, the manual and osha.gov.", "Fix anything missing or wrong.", "Review it with the crew before starting."],
          words: [["Hazard", "something that could hurt someone."], ["PPE", "personal protective equipment, like gloves, safety glasses, hard hats and steel-toe boots."], ["Job safety analysis", "a list of a job's steps, hazards and controls."]],
          slides: [
            { title: "Job safety analysis", bullets: ["Steps of the job", "Hazards at each step", "Controls and PPE"] },
            { title: "AI drafts, people decide", bullets: ["AI lists common hazards", "Supervisor, manual and OSHA confirm"] },
            { title: "OSHA Outreach cards", bullets: ["10-hour and 30-hour safety classes", "Voluntary; not a certification or license", "Some employers and states require it"] }
          ],
          sources: [{ name: "OSHA Outreach Training Program", url: "https://www.osha.gov/training/outreach" }, { name: "OSHA Outreach Training Program FAQs", url: "https://www.osha.gov/training/outreach/faq" }],
          tryIt: "Ask AI for a job safety checklist for one real task (like lifting heavy boxes or changing a tire). Then find one official safety page or the manual for that task and add anything AI missed.",
          youCanNow: "draft a job safety checklist with AI and check it against official sources."
        }
      ],
      check: {
        title: "Knowledge Check 1: AI on the job",
        questions: [
          { q: "AI says to torque a bolt to 40 ft-lbs, but the manual says 25. What do you do?", options: ["Follow the AI", "Pick the average", "Follow the manual and ask your supervisor", "Tighten as hard as you can"], answer: 2, why: "Official numbers come from the manual." },
          { q: "What is an estimate?", options: ["A written price for a job before it starts", "A receipt after payment", "A safety rule", "A type of tool"], answer: 0, why: "Estimates set expectations before work begins." },
          { q: "You find a hidden problem that raises the price. What should you do?", options: ["Charge more without telling them", "Leave the job", "Hide the problem", "Get the customer's approval before doing extra work"], answer: 3, why: "Price changes need customer approval." },
          { q: "PPE stands for:", options: ["Paid public employee", "Personal protective equipment", "Power plug extension", "Private property entry"], answer: 1, why: "PPE is gear like gloves and safety glasses." },
          { q: "According to OSHA, the OSHA 10-hour card is:", options: ["A federal license", "Voluntary and not a certification or license", "A driver's license", "Required by OSHA for every job"], answer: 1, why: "OSHA says the Outreach card is not a certification or license." }
        ]
      }
    },
    {
      name: "Chapter 2: Logistics, records and careers",
      lessons: [
        {
          title: "Keeping a work log with photos and notes",
          minutes: 5,
          goal: "Keep a daily work log with photos and short notes, using AI to tidy them.",
          text: [
            "A good work log protects you and impresses employers: it shows what you did, when, and that it was done right. Take before-and-after photos, note materials used, problems found, and time spent.",
            "Use voice-to-text on your phone to talk your notes at the end of a job, then ask AI: \"Turn these notes into a short, professional work log entry with date, location, work done, materials, issues and next steps.\" Check it is accurate.",
            "Follow your employer's rules about photos: some sites do not allow photos, and you should never photograph customers, their private papers or security systems without permission. Store logs where your employer says."
          ],
          steps: ["Take before-and-after photos where allowed.", "Speak or type quick notes at the end of the job.", "Ask AI to format a work log entry.", "Check it for accuracy.", "Save it where your employer says."],
          words: [["Work log", "a daily record of the work you did."], ["Voice-to-text", "a phone feature that turns your speech into written words."]],
          slides: [
            { title: "Why keep a log", bullets: ["Proves what you did and when", "Protects you and impresses employers"] },
            { title: "Fast logging", bullets: ["Before-and-after photos", "Speak your notes", "AI formats the entry"] },
            { title: "Photo rules", bullets: ["Follow site rules", "No customers, private papers or security systems", "Save where your employer says"] }
          ],
          tryIt: "Do a small job at home (fix, clean or organize something). Take before-and-after photos, speak your notes, and have AI turn them into a work log entry.",
          youCanNow: "keep a professional work log with photos and AI-tidied notes."
        },
        {
          title: "Planning routes, loads and inventory",
          minutes: 5,
          goal: "Use map apps and AI to plan a route and a simple load or inventory list.",
          text: [
            "Delivery drivers, service techs and warehouse workers plan routes and loads every day. Free map apps like Google Maps let you add several stops and show traffic. Many companies use their own routing software; learn it when you start.",
            "AI can help you think it through: \"I have 6 service calls: [areas and time windows]. Suggest an order that saves driving and meets the time windows.\" Then check it in the map app. For loads: \"Make a loading list for these deliveries so the last stop's items go in first.\"",
            "For inventory, a simple sheet with item, location (aisle, shelf), quantity and reorder point helps. Never let AI override weight limits, load securement rules, or hours-of-service rules for drivers; those come from your employer and official transportation rules."
          ],
          steps: ["List stops with areas and time windows.", "Ask AI to suggest an order.", "Check it in a map app with traffic.", "Make a load list: last stop loaded first.", "Follow weight, securement and driving-hours rules from your employer."],
          words: [["Route", "the order and path of stops."], ["Load securement", "tying down cargo so it cannot shift or fall."], ["Hours of service", "rules limiting how long commercial drivers can drive and work."]],
          slides: [
            { title: "Plan the route", bullets: ["List stops and time windows", "AI suggests an order", "Check it in a map app"] },
            { title: "Plan the load", bullets: ["Last stop loaded first", "Inventory: item, location, quantity"] },
            { title: "Rules come first", bullets: ["Weight limits and securement", "Drivers' hours of service", "From your employer and official rules"] }
          ],
          tryIt: "Pick five real places in your area. Ask AI to suggest the best order to visit them, then check it in a free map app and compare drive times.",
          youCanNow: "plan a route and load with AI and map apps while following the rules."
        },
        {
          title: "Finding apprenticeships and trade jobs",
          minutes: 5,
          goal: "Find a registered apprenticeship or trade job and prepare to apply.",
          text: [
            "A Registered Apprenticeship lets you earn a paycheck while you learn a trade, with classroom training and a recognized credential at the end. The U.S. Department of Labor's Apprenticeship.gov has an Apprenticeship Job Finder. Unions, community colleges and pre-apprenticeship programs also offer paths.",
            "Ask AI to explain a trade: \"What does an HVAC apprentice do day to day, what tools do they use, and what math is involved?\" Then ask it to help turn your experience into a trade résumé, keeping everything true.",
            "Some trades and driving jobs need licenses, tests or a clean driving record, and some licenses consider criminal records; check your state licensing agency and ask your reentry or workforce program which employers and programs welcome people with records. Show up reliable and ready to learn: in trades, that matters most."
          ],
          steps: ["Search Apprenticeship.gov's job finder and local union or college programs.", "Ask AI to explain the trade and the skills it needs.", "Check license and record rules with your state agency.", "Ask your reentry or workforce program for fair-chance employers.", "Build a true trade résumé with AI help."],
          words: [["Registered Apprenticeship", "a paid job with training that leads to a recognized credential."], ["Pre-apprenticeship", "a short program that prepares you to enter an apprenticeship."], ["Journeyworker", "a fully trained worker in a trade."]],
          slides: [
            { title: "Earn while you learn", bullets: ["Registered Apprenticeship: pay plus training", "Recognized credential at the end"] },
            { title: "Where to look", bullets: ["Apprenticeship.gov Job Finder", "Unions and community colleges", "Pre-apprenticeship programs"] },
            { title: "Check the rules", bullets: ["Licenses, tests, driving record", "State licensing agency", "Fair-chance employers via your program"] }
          ],
          sources: [{ name: "Apprenticeship.gov (U.S. Department of Labor)", url: "https://www.apprenticeship.gov/" }],
          tryIt: "Final task: search Apprenticeship.gov or a local program for one apprenticeship or trade job you could apply for. Then finish your job packet: manual summary, estimate or work order, checked safety checklist, work log entry and route or load plan.",
          youCanNow: "use AI to work smarter in a trade or logistics job and find a path into one."
        }
      ],
      check: {
        title: "Knowledge Check 2: Logistics, records and careers",
        questions: [
          { q: "Why keep before-and-after photos in a work log?", options: ["For social media likes", "They are required by every law", "To photograph customers", "They show what you did and that it was done right"], answer: 3, why: "Photos prove the work." },
          { q: "When loading a truck for several stops, which items go in first?", options: ["The last stop's items", "The first stop's items", "The lightest items always", "Random order"], answer: 0, why: "Last stop in first means first stop's items are easy to reach." },
          { q: "Where do weight limits and driving-hours rules come from?", options: ["An AI chatbot", "Your friends", "Your employer and official transportation rules", "A map app"], answer: 2, why: "Official rules set these limits." },
          { q: "What is a Registered Apprenticeship?", options: ["An unpaid internship only", "A college degree", "A license test", "A paid job with training that leads to a recognized credential"], answer: 3, why: "Apprentices earn while they learn." },
          { q: "Which site has the U.S. Department of Labor's Apprenticeship Job Finder?", options: ["A social media app", "A random blog", "Apprenticeship.gov", "A shopping site"], answer: 2, why: "Apprenticeship.gov is run by the Department of Labor." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: AI for Skilled Trades and Logistics",
    questions: [
      { q: "Which is a skilled trade?", options: ["Social media influencer", "Electrician", "Movie critic", "Lottery player"], answer: 1, why: "Electrical work is a skilled trade." },
      { q: "How can AI help with a hard manual?", options: ["Explain it in plain words", "Replace the manual's numbers", "Do the job for you", "Sign off on safety"], answer: 0, why: "AI is a good tutor for terms and steps." },
      { q: "A spec sheet lists:", options: ["Your work schedule", "Your pay", "Exact measurements and requirements for a product", "Customer reviews"], answer: 2, why: "Specs give exact requirements." },
      { q: "Which numbers must come from the manual or code, not AI?", options: ["Voltage, torque and weight limits", "The date", "Your name", "The color of the truck"], answer: 0, why: "Safety-critical numbers need official sources." },
      { q: "Labor on an estimate means:", options: ["The parts", "The tax", "The customer's address", "The cost of the worker's time"], answer: 3, why: "Labor is paid time." },
      { q: "2 hours at $60 plus $100 in parts is:", options: ["$62", "$120", "$160", "$220"], answer: 3, why: "2 x 60 = 120, plus 100 = 220." },
      { q: "A good estimate also says:", options: ["Nothing about the job", "What is included, what is not, and when it expires", "Your Social Security number", "A guaranteed fixed price no matter what"], answer: 1, why: "Clear terms prevent disputes." },
      { q: "A job safety analysis lists:", options: ["Only the price", "The crew's birthdays", "The customer's reviews", "Steps, hazards and controls"], answer: 3, why: "It plans safety for each step." },
      { q: "Which is PPE?", options: ["Safety glasses", "A phone case", "A lunch box", "A map app"], answer: 0, why: "Safety glasses protect your eyes." },
      { q: "Who confirms a safety checklist AI drafted?", options: ["Nobody", "The AI itself", "Your supervisor, the manual and official sources like OSHA", "A random video"], answer: 2, why: "AI is not a safety authority." },
      { q: "The OSHA 10-hour Outreach class:", options: ["Is a contractor's license", "Replaces all job training", "Is run by AI", "Teaches safety basics; the card is voluntary"], answer: 3, why: "OSHA describes it as voluntary training." },
      { q: "Voice-to-text helps you:", options: ["Make phone calls cheaper", "Drive faster", "Speak notes instead of typing", "Read manuals aloud only"], answer: 2, why: "It turns speech into text." },
      { q: "Which photo should you NOT take without permission?", options: ["The finished repair", "A customer's private papers", "The broken part", "Your own toolbox"], answer: 1, why: "Respect customer privacy." },
      { q: "A work log entry includes:", options: ["Date, location, work done, materials, issues and next steps", "Only your opinion", "Customer passwords", "Nothing"], answer: 0, why: "Complete entries are useful records." },
      { q: "After AI suggests a route order, you should:", options: ["Follow it without looking", "Ignore time windows", "Check it in a map app with traffic", "Drive faster"], answer: 2, why: "Map apps show real drive times and traffic." },
      { q: "Load securement means:", options: ["Tying down cargo so it cannot shift or fall", "Locking the office", "Securing a loan", "Saving a file"], answer: 0, why: "Secure loads prevent accidents." },
      { q: "Hours-of-service rules limit:", options: ["Store opening hours", "Lunch breaks for office staff only", "Internet use", "How long commercial drivers can drive and work"], answer: 3, why: "They prevent driver fatigue." },
      { q: "A pre-apprenticeship:", options: ["Is a full license", "Prepares you to enter an apprenticeship", "Is a loan program", "Is a type of tool"], answer: 1, why: "It builds skills to get into an apprenticeship." },
      { q: "Where do you check whether a trade license considers criminal records?", options: ["An AI guess", "Your state licensing agency", "A job ad comment", "Nowhere"], answer: 1, why: "State agencies set licensing rules." },
      { q: "In trades, what matters most to many employers at the start?", options: ["Owning expensive tools", "Having a degree", "Knowing everyone", "Showing up reliable and ready to learn"], answer: 3, why: "Reliability and attitude open doors." }
    ]
  }
};
