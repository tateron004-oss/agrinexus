"use strict";

// Koach Learn course: Veterans (military) -> "AI Consulting Opportunities" (bonus course on the owner's list, 27 October 2026). Written as a skill-building course: by the end the
// student can DO the skill in `outcome`. Two chapters of three micro-lessons; a knowledge check closes each chapter; a 20-question quiz closes the course. See scripts/koachlearn-export.js for how it is built.
//
// lesson: { title, minutes, goal, text: [paragraph], steps: [step] (optional), words: [[term, means]], slides: [{ title, bullets }], sources, tryIt, youCanNow }
// question: { q, options: [4], answer: index of the right option, why }
// Facts checked on the official pages on 27 October 2026 (sba.gov veteran-owned businesses and VetCert; va.gov veteran-owned business support; va.gov ways to use GI Bill benefits).

module.exports = {
  id: "veterans-ai-consulting",
  category: "Veterans (military)",
  name: "AI Consulting Opportunities",
  skills: "Turning expertise into a consulting offer, Finding free veteran business help, Writing an outreach message, Writing a proposal with AI, Protecting client information",
  outcome: "turn your military expertise into a clear consulting offer and write a one-page client proposal with an AI assistant, knowing where to get free official help to set up the business.",
  about: [
    "A consultant is paid to solve a specific problem for a client. Veterans bring skills that many small businesses, nonprofits and contractors lack: planning, safety, logistics, training, security and leading teams. AI tools now help consultants research, write and deliver faster.",
    "In this course you will choose an offer based on what you know, learn where veterans get free official business help, write a first outreach message, and use an AI assistant to draft a one-page proposal. You will also learn the rules that keep client information safe.",
    "Each lesson takes about five minutes. A knowledge check closes each chapter and a 20-question quiz closes the course. This course does not give legal or tax advice: for business setup, use the official offices named here or a qualified professional."
  ],
  finalTask: "Write a one-page consulting proposal for a made-up or real local client: the problem, what you will do, what they will get, the timeline, your price (set by you, not by the AI), and how you will protect their information. Draft it with an AI assistant, then edit it so every claim is true, and list the one free official business office you will contact next.",
  chapters: [
    {
      name: "Chapter 1: Building your consulting offer",
      lessons: [
        {
          title: "What consultants do and where AI fits",
          minutes: 4,
          goal: "Explain what a consultant does and three ways AI helps them.",
          text: [
            "A consultant is an outside expert a client hires for a specific job, for a set time. Examples: setting up a safety program for a construction company, building a training plan for a nonprofit's volunteers, or planning a warehouse layout.",
            "AI helps consultants research a topic fast, draft documents like proposals and reports, and turn notes into checklists or slides. It does not replace your experience: clients pay for your judgment.",
            "AI consulting also includes helping small organizations start using AI tools safely, for example writing a simple AI-use policy or training staff. Your military habits of standard procedures and clear training translate well."
          ],
          words: [["Consultant", "an outside expert paid to solve a specific problem for a client."], ["Client", "the person or organization that pays for your service."], ["Deliverable", "the thing you hand over at the end, such as a plan, report or training."]],
          slides: [
            { title: "A consultant is...", bullets: ["An outside expert", "Hired for a specific job, for a set time", "Paid for judgment and results"] },
            { title: "How AI helps", bullets: ["Fast research", "Drafting proposals and reports", "Turning notes into checklists or slides"] },
            { title: "AI consulting work", bullets: ["Helping small groups use AI safely", "Writing simple AI-use policies", "Training staff"] }
          ],
          tryIt: "Ask an AI assistant: \"What problems do small businesses near me often hire consultants for?\" Circle two that match what you did in the military.",
          youCanNow: "explain what a consultant does and how AI supports the work."
        },
        {
          title: "Turning your expertise into an offer",
          minutes: 5,
          goal: "Write a one-sentence offer: who you help, the problem, and the result.",
          text: [
            "A clear offer has three parts: who you help, what problem you fix, and what result they get. For example: \"I help small construction firms build a written safety program so they pass inspections and cut injuries.\"",
            "Start with what you did often and well in service, then find civilian groups with the same problem. A former logistics NCO might help small distributors plan inventory. A former trainer might help nonprofits onboard volunteers.",
            "Use an AI assistant to brainstorm, then test the offer by asking two or three real people in that field: \"Is this a problem you would pay to fix?\""
          ],
          steps: ["List three things you did often and well in service.", "Ask an AI assistant: \"Which civilian businesses have this problem?\"", "Write: \"I help [who] [fix what] so they [result].\"", "Ask two or three people in that field if they would pay for it."],
          words: [["Offer", "a clear statement of who you help, with what, and the result."], ["Niche", "a small, specific group of clients you focus on."]],
          slides: [
            { title: "Three parts of an offer", bullets: ["Who you help", "The problem you fix", "The result they get"] },
            { title: "Start from your service", bullets: ["What you did often and well", "Which civilians have the same problem?"] },
            { title: "Test it with real people", bullets: ["\"Is this a problem you would pay to fix?\"", "Ask two or three people in the field"] }
          ],
          tryIt: "Write your one-sentence offer using \"I help [who] [fix what] so they [result].\" Ask an AI assistant to make it clearer, then read it to one person in that field.",
          youCanNow: "write a clear consulting offer based on your military expertise."
        },
        {
          title: "Free official help for veteran business owners",
          minutes: 5,
          goal: "Find the free veteran business help near you and know what each office does.",
          text: [
            "The U.S. Small Business Administration (SBA) runs Boots to Business, part of the military Transition Assistance Program, and Boots to Business Reboot for veterans of all eras. Veterans Business Outreach Centers (VBOCs) offer business plan workshops, mentoring and training.",
            "If you want government contracts, the SBA certifies veteran-owned and service-disabled veteran-owned small businesses through its Veteran Small Business Certification program, called VetCert, at certifications.sba.gov. When we checked in October 2026, VA said businesses that work with VA must be registered through SBA.",
            "VA also lists entrepreneurship training as a way to use some GI Bill benefits. Business names, licenses and taxes are set by your state and the IRS, so check your state's business office and irs.gov, or ask a VBOC advisor."
          ],
          steps: ["Open the SBA veteran-owned businesses page.", "Find your nearest Veterans Business Outreach Center.", "Look at Boots to Business or Reboot dates.", "If you want government work, read about VetCert at certifications.sba.gov.", "Check your state business office for licenses and registration."],
          words: [["SBA", "U.S. Small Business Administration, the federal agency that helps small businesses."], ["VBOC", "Veterans Business Outreach Center: SBA-funded centers that help veteran business owners."], ["VetCert", "SBA's certification for veteran-owned and service-disabled veteran-owned small businesses."]],
          slides: [
            { title: "Free SBA help for veterans", bullets: ["Boots to Business (part of TAP)", "Boots to Business Reboot, any era", "Veterans Business Outreach Centers"] },
            { title: "Government contracts", bullets: ["VetCert at certifications.sba.gov", "For veteran-owned and service-disabled businesses", "Working with VA requires SBA registration"] },
            { title: "Setup rules", bullets: ["Names, licenses and taxes: your state and IRS", "Ask a VBOC advisor", "No legal or tax advice from AI alone"] }
          ],
          sources: [
            { name: "SBA: Veteran-owned businesses", url: "https://www.sba.gov/business-guide/grow-your-business/veteran-owned-businesses" },
            { name: "SBA: Veteran contracting assistance (VetCert)", url: "https://www.sba.gov/federal-contracting/contracting-assistance-programs/veteran-contracting-assistance-programs" },
            { name: "VA: Veteran-owned small business support", url: "https://www.va.gov/careers-employment/veteran-owned-business-support/" },
            { name: "VA: How to use your GI Bill benefits", url: "https://www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/" }
          ],
          tryIt: "Find the Veterans Business Outreach Center nearest you on sba.gov. Write down its name, how to contact it, and one question you will ask about starting a consulting business.",
          youCanNow: "find free official help for starting a veteran-owned consulting business."
        }
      ],
      check: {
        title: "Knowledge Check 1: Building your consulting offer",
        questions: [
          { q: "What is a consultant?", options: ["A government inspector", "A full-time employee for life", "An outside expert paid to solve a specific problem", "A salesperson for one product"], answer: 2, why: "Consultants are hired for a specific job and time." },
          { q: "What do clients mainly pay a consultant for?", options: ["Their judgment and results", "Their AI subscription", "Their uniform", "Their typing speed"], answer: 0, why: "AI helps, but clients pay for expertise." },
          { q: "Which is a clear offer?", options: ["\"Call me.\"", "\"I do stuff.\"", "\"I am a veteran.\"", "\"I help small construction firms build a safety program so they pass inspections.\""], answer: 3, why: "It names who, the problem and the result." },
          { q: "How do you test whether your offer is real?", options: ["Ask only the AI", "Ask people in that field if they would pay to fix the problem", "Guess", "Print business cards first"], answer: 1, why: "Real buyers tell you if the problem is worth paying for." },
          { q: "Where can veterans get free business plan help and mentoring?", options: ["A car dealer", "A Veterans Business Outreach Center", "A social media ad", "A crypto group"], answer: 1, why: "VBOCs are SBA-funded centers for veteran owners." }
        ]
      }
    },
    {
      name: "Chapter 2: Winning and doing the work",
      lessons: [
        {
          title: "Writing your first outreach message",
          minutes: 5,
          goal: "Write a short, honest message that asks a possible client for a 15-minute call.",
          text: [
            "Your first clients often come from people who already know you: former leaders, veteran groups, local business groups and nonprofits you volunteer with.",
            "A good outreach message is short: who you are, the problem you help with, one proof (a result from service or past work), and a small ask, such as a 15-minute call.",
            "AI can draft it, but make it sound like you and remove anything that is not true. Never claim a certification, clearance or result you do not have."
          ],
          steps: ["List ten people or groups who know you or share your field.", "Ask an AI assistant for a 5-sentence message: who you are, the problem, one proof, a 15-minute call.", "Edit it to sound like you.", "Check every claim is true.", "Send it to three people."],
          words: [["Outreach", "contacting possible clients to start a conversation."], ["Proof", "a real result that shows you can do the work."]],
          slides: [
            { title: "Start with people who know you", bullets: ["Former leaders and veteran groups", "Local business groups", "Nonprofits you volunteer with"] },
            { title: "A short message", bullets: ["Who you are and the problem you fix", "One real proof", "A small ask: a 15-minute call"] },
            { title: "Keep it honest", bullets: ["Make it sound like you", "No claims you cannot back up"] }
          ],
          tryIt: "Ask an AI assistant to draft a five-sentence outreach message for your offer. Edit it so it sounds like you and every claim is true, then write the names of three people you will send it to.",
          youCanNow: "write an honest outreach message that asks a possible client for a short call."
        },
        {
          title: "Writing a proposal with AI",
          minutes: 6,
          goal: "Draft a one-page proposal with AI and edit it until it is accurate.",
          text: [
            "A proposal is your plan for the client's problem. It works like an operations order: situation (the problem), mission (what you will do), execution (steps and timeline), and what the client gets (deliverables).",
            "Give the AI your notes from the client call, with no private client data, and ask for a one-page proposal using those headings. Then edit hard: cut anything vague, fix dates, and make the scope clear so the work does not keep growing.",
            "You set the price, not the AI. Think about your hours, your costs and what the result is worth to the client. Ask a VBOC advisor or other consultants in your field what is normal."
          ],
          steps: ["Write your notes from the client conversation (no private data).", "Ask an AI assistant for a one-page proposal: problem, what I will do, timeline, deliverables, price.", "Make the scope specific: what is in and what is not.", "Add your own price.", "Read it as the client: is anything unclear?"],
          words: [["Proposal", "a written plan and price for solving a client's problem."], ["Scope", "exactly what work is included and what is not."], ["Scope creep", "when a job keeps growing beyond what was agreed."]],
          slides: [
            { title: "Proposal = operations order", bullets: ["Situation: the problem", "Mission: what you will do", "Execution: steps and timeline", "Deliverables: what they get"] },
            { title: "AI drafts, you edit", bullets: ["Notes in, no private client data", "Cut vague words, fix dates", "Clear scope stops scope creep"] },
            { title: "You set the price", bullets: ["Your hours and costs", "What the result is worth", "Ask a VBOC advisor what is normal"] }
          ],
          tryIt: "Use your offer and a made-up client. Ask an AI assistant for a one-page proposal with the five headings, then edit the scope and add your own price.",
          youCanNow: "draft and edit a clear one-page consulting proposal with AI help."
        },
        {
          title: "Delivering the work and protecting the client",
          minutes: 5,
          goal: "Set rules for using AI on client work that protect the client's information.",
          text: [
            "Clients trust you with their information: staff names, money, plans and problems. Do not paste a client's private or confidential information into a public AI tool unless the client has agreed and the tool is approved for it.",
            "Check every AI output before the client sees it: facts, numbers, names and laws. You are responsible for the work, not the AI.",
            "Be open about how you use AI. A simple line in your proposal works: \"I use AI tools to draft documents; I review all work and do not share your private information with them.\""
          ],
          steps: ["Keep client private data out of public AI tools.", "Use placeholders like [client name] when drafting.", "Check every fact, number and law before delivery.", "Add one line to your proposal about how you use AI."],
          words: [["Confidential", "information the client wants kept private."], ["Approved tool", "an AI tool the client has agreed you may use with their information."]],
          slides: [
            { title: "Protect client information", bullets: ["No private client data in public AI tools", "Use placeholders like [client name]"] },
            { title: "You own the work", bullets: ["Check facts, numbers, names and laws", "The AI is not responsible; you are"] },
            { title: "Be open about AI", bullets: ["Say how you use it in the proposal", "\"I review all work and protect your data\""] }
          ],
          tryIt: "Final task: finish your one-page proposal. Add your AI-use line, check every claim is true, and write the name of the free official business office you will contact next.",
          youCanNow: "offer consulting based on your military expertise, write a proposal with AI, and protect your client's information."
        }
      ],
      check: {
        title: "Knowledge Check 2: Winning and doing the work",
        questions: [
          { q: "Where do first consulting clients often come from?", options: ["Nowhere", "Random pop-up ads", "Only cold calls to strangers", "People and groups who already know you"], answer: 3, why: "Trust from people who know you opens doors fastest." },
          { q: "What is a good small ask in an outreach message?", options: ["A 15-minute call", "A one-year contract", "Their bank details", "A big upfront payment"], answer: 0, why: "A short call is easy to say yes to." },
          { q: "Who should set your price?", options: ["A random website", "The AI", "You, based on hours, costs and value", "The client alone"], answer: 2, why: "Pricing is your business decision." },
          { q: "What is scope creep?", options: ["A fast delivery", "A type of AI", "A legal form", "When a job keeps growing beyond what was agreed"], answer: 3, why: "Clear scope stops work from growing unpaid." },
          { q: "Can you paste a client's confidential plans into a public AI tool?", options: ["Yes, if it saves time", "Always", "Only if the client agreed and the tool is approved for it", "Yes, if you delete it later"], answer: 2, why: "Client information needs their agreement and an approved tool." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: AI Consulting Opportunities",
    questions: [
      { q: "A deliverable is:", options: ["Your car", "What you hand over at the end, like a plan or report", "Your invoice number", "The AI tool"], answer: 1, why: "Deliverables are the results the client receives." },
      { q: "Which is a way AI helps consultants?", options: ["Drafting proposals and reports", "Replacing all judgment", "Signing contracts", "Holding a security clearance"], answer: 0, why: "AI speeds up drafting; you still decide." },
      { q: "AI consulting can include:", options: ["Selling client data", "Hacking competitors", "Helping a small group write a simple AI-use policy", "Guaranteeing profits"], answer: 2, why: "Safe AI adoption is a real consulting need." },
      { q: "The three parts of an offer are:", options: ["Who you help, the problem, and the result", "Logo, color and font", "Rank, unit and base", "Price, tax and fees"], answer: 0, why: "These make the offer clear to a buyer." },
      { q: "A niche is:", options: ["An AI app", "A type of tax", "A military badge", "A small, specific group of clients you focus on"], answer: 3, why: "Focusing makes your offer easier to sell." },
      { q: "A former trainer might offer to:", options: ["Fly airplanes without a license", "Help nonprofits onboard volunteers", "Give legal advice", "Sell crypto"], answer: 1, why: "Training skills transfer directly." },
      { q: "Boots to Business is run by:", options: ["A private bank", "The SBA, as part of the Transition Assistance Program", "A social network", "The IRS"], answer: 1, why: "SBA runs it within TAP." },
      { q: "Boots to Business Reboot is for:", options: ["Only students", "Only active duty officers", "Only civilians", "Veterans of all eras, including Guard and Reserve"], answer: 3, why: "SBA says Reboot serves veterans of all eras." },
      { q: "VetCert is:", options: ["SBA's certification for veteran-owned and service-disabled veteran-owned small businesses", "A tax form", "A job board", "A GI Bill payment"], answer: 0, why: "SBA runs VetCert for government contracting." },
      { q: "Where do you apply for VetCert?", options: ["Any AI chat", "A text message link", "certifications.sba.gov", "A social media page"], answer: 2, why: "SBA's certification site handles applications." },
      { q: "Questions about business licenses and taxes are best taken to:", options: ["Nobody", "Only an AI chat", "A random forum", "Your state business office, irs.gov or a VBOC advisor"], answer: 3, why: "Official offices and advisors give current rules." },
      { q: "A good outreach message includes:", options: ["Your Social Security number", "Your whole life story", "Who you are, the problem, one proof and a small ask", "A demand for payment"], answer: 2, why: "Short and specific gets replies." },
      { q: "An AI draft says you hold a certification you do not have. You should:", options: ["Keep it", "Remove it", "Add two more", "Ask the client not to check"], answer: 1, why: "Every claim must be true." },
      { q: "A proposal is like which military document?", options: ["An operations order", "A leave form", "A uniform inspection", "A pay stub"], answer: 0, why: "Both set out situation, mission and execution." },
      { q: "Scope in a proposal means:", options: ["The price only", "A rifle sight", "Exactly what work is included and what is not", "The client's address"], answer: 2, why: "Clear scope prevents disputes." },
      { q: "When asking AI to draft a proposal, give it:", options: ["Your notes with no private client data", "The client's bank details", "Staff home addresses", "Passwords"], answer: 0, why: "Keep private client data out." },
      { q: "Who is responsible for mistakes in AI-drafted client work?", options: ["The client", "The AI company", "Nobody", "You"], answer: 3, why: "You deliver the work, so you own it." },
      { q: "What should you check before delivering AI-drafted work?", options: ["Only the font", "Facts, numbers, names and laws", "Nothing", "Only spelling"], answer: 1, why: "AI can be wrong about facts." },
      { q: "How should you tell clients about AI use?", options: ["Hide it", "A clear line in the proposal on how you use it and protect their data", "Say AI did everything", "Never mention it"], answer: 1, why: "Openness builds trust." },
      { q: "A placeholder like [client name] helps you:", options: ["Get a certification", "Bill faster", "Skip the proposal", "Draft with AI without sharing private details"], answer: 3, why: "Placeholders keep real names out of AI tools." }
    ]
  }
};
