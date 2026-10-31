"use strict";

// Koach Learn course: Workforce Development (also Africa: Life and Work, Undeserved Community) -> "Migrating for Work Safely" (wave 3, 30 October 2026).
// For job seekers thinking about work in another country. Legal routes only; no legal or visa advice (points to official government and embassy pages).
// Fair recruitment follows the ILO General Principles and Operational Guidelines and IOM IRIS; trafficking follows the UN Protocol definition as UNODC explains it.

module.exports = {
  id: "safe-labor-migration",
  category: "Workforce Development",
  name: "Migrating for Work Safely",
  skills: "Finding official migration information, Checking a recruitment agency licence, Spotting fake recruiters, Reading a job offer and contract, Recognising trafficking and getting help, Making a migration safety checklist",
  outcome: "plan a move abroad for work along a legal route: check the recruiter is licensed, refuse any job that asks you to pay for it, read the contract before you sign, know the signs of trafficking and where to get help, and carry a personal migration safety checklist.",
  about: [
    "Every year millions of people travel to another country to work: nurses from the Philippines and Nigeria, drivers and builders from India and Kenya, farm workers from Mexico, care workers from Ghana and Colombia, shop and hotel workers from Morocco, Egypt and Senegal. Most of them find honest work. Some are cheated by fake recruiters, pay large fees, lose their passports or end up in forced labour.",
    "This course teaches you how to protect yourself before you go and after you arrive. You will learn how to find official information about legal routes, how to check whether a recruitment agency is licensed, the warning signs of a fake job, what a fair job offer and contract must say, the signs of trafficking and where to get help.",
    "The course does not give legal or visa advice, and it does not find you a job. Rules are different in every country and they change, so every lesson shows you where to check the official page of your own government and of the country you want to work in.",
    "Each lesson takes about five minutes. Do the Try it now task on paper or a phone. There is a short check after each lesson and each chapter, and a 20-question quiz at the end. By the end you will have your own migration safety checklist."
  ],
  finalTask: "Make your own migration safety checklist on paper or a phone for one real job you are considering abroad (or a practice job offer). It must have: the official government and embassy pages you will use; the agency's name and how you checked its licence; a list of the costs and who pays them; the job details you need in writing before you sign; the warning signs that would make you stop; and a help plan with copies of your documents, a trusted contact at home, and the embassy and help numbers you looked up yourself.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Young people and adults thinking about working abroad, mostly in Africa, Asia and Latin America (for example Kenya, Nigeria, Ghana, Senegal, Morocco, Egypt, India, the Philippines, Mexico and Colombia), plus their families and community workers who advise them. Many have heard about jobs from friends, social media or local agents. The course is translated into many languages.",
    startingPoint: "Can use a basic phone and messaging apps. Know someone who worked abroad. Have rarely read an employment contract and do not know that recruiters must be licensed or that workers should not pay recruitment fees.",
    gap: "Learners need to tell a legal, fair job offer from a scam or a trafficking trap before they pay money, hand over a passport or travel. Without these skills people lose savings, take on debt and can end up in forced labour far from help.",
    constraints: [
      "Reading level: plain words and short sentences, for second-language readers and translation",
      "Devices: a basic smartphone or shared computer; some tasks are on paper",
      "Rules differ by country and change often: the course points to official pages and does not give legal or visa advice",
      "Safety: no real passport, ID or bank numbers in any practice; learners in danger are told to call local emergency services first",
      "Some learners may already be in a hard situation abroad; the course gives help routes without blame"
    ],
    prerequisites: "None. Learners who are new to the internet can take Internet Basics first."
  },
  // ---- ADDIE: Design ----
  objectives: [
    { id: "O1", condition: "Given a country you want to work in", action: "find the official government and embassy pages for work visas and legal routes", standard: "and tell an official page from an agent's or a stranger's page" },
    { id: "O2", condition: "Given the name of a recruitment agency", action: "check whether the agency is licensed with your country's labour or migration authority", standard: "before you pay anything or hand over documents" },
    { id: "O3", condition: "Given a job advert or recruiter message", action: "list the warning signs of a fake recruiter or job scam", standard: "finding at least 3 of 4 signs in a practice advert" },
    { id: "O4", condition: "Given a job offer or contract", action: "check that the employer, job, pay, hours, place, costs and return terms are written down", standard: "and list every missing or changed item before signing" },
    { id: "O5", condition: "Given a story about a worker abroad", action: "identify the signs of trafficking or forced labour and name where to get help", standard: "naming at least 3 signs and 2 places to get help" },
    { id: "O6", condition: "Before you leave home", action: "write a migration safety checklist with document copies, contacts and help numbers", standard: "that covers every part of the course rubric" }
  ],
  chapters: [
    {
      name: "Chapter 1: Choosing a safe, legal route",
      lessons: [
        {
          title: "Legal routes and where to find official information",
          objectives: ["O1"],
          minutes: 5,
          goal: "Find the official pages for working legally in the country you want to go to.",
          text: [
            "A legal route means you travel with the right visa or work permit for the job, issued by the government of the country where you will work. Working on a tourist visa, or crossing a border with a smuggler, puts you at high risk: you can be arrested, sent home, or trapped by people who know you are afraid of the police.",
            "Only governments decide visas and work permits. Trusted information comes from the official immigration website of the country you want to work in, its embassy or consulate in your country, and your own country's labour or migration ministry. Many countries of origin also have offices that help migrant workers, for example the Department of Migrant Workers in the Philippines and the eMigrate portal of India's Ministry of External Affairs.",
            "Agents, social media pages, video channels and friends can help you get started, but they are not official. Check every fact they tell you on the government page. This course does not give legal or visa advice; if your case is complex, ask the embassy or a licensed lawyer.",
            "Smuggling and trafficking are different. Smuggling is paying someone to cross a border illegally. Trafficking is when someone recruits or moves a person by force, lies or abuse in order to exploit them. Smugglers can turn into traffickers, which is one more reason to use only legal routes."
          ],
          steps: ["Write down the country and the kind of job.", "Search for that country's official immigration or visa website and its embassy in your country.", "Check the address: governments usually use an official ending such as .gov, .gov.ph or .go.ke; look for the government crest and contact page.", "Find the page about work visas or work permits and note what it says you need.", "Find your own country's labour or migration ministry page for people working abroad."],
          words: [["Legal route", "a way to travel and work that the governments allow, with the right visa or permit."], ["Work permit", "official permission to do paid work in a country."], ["Embassy or consulate", "your country's office in another country, or another country's office in yours, that handles visas and helps citizens."], ["Smuggling", "paying someone to take you across a border illegally."], ["Trafficking", "recruiting or moving a person by force, lies or abuse in order to exploit them."]],
          slides: [
            { title: "A legal route", bullets: ["The right visa or work permit for the job", "Issued by the government where you will work", "No tourist visa jobs, no smugglers"] },
            { title: "Where official facts come from", bullets: ["The destination country's immigration website", "Its embassy or consulate in your country", "Your own labour or migration ministry"] },
            { title: "Not official", bullets: ["Agents, social media pages and video channels", "Friends' stories", "Check every fact on the government page"] },
            { title: "Smuggling is not trafficking", bullets: ["Smuggling: paying to cross a border illegally", "Trafficking: force, lies or abuse to exploit a person", "Smugglers can become traffickers"] }
          ],
          sources: [
            { name: "UNODC: Human trafficking and migrant smuggling (Education for Justice)", url: "https://www.unodc.org/e4j/en/secondary/human-trafficking-and-migrant-smuggling.html" },
            { name: "Philippines Department of Migrant Workers (DMW)", url: "https://dmw.gov.ph/" },
            { name: "India Ministry of External Affairs: eMigrate", url: "https://emigrate.gov.in/" }
          ],
          tryIt: "Pick one country you might want to work in. On a phone or computer, find (1) its official immigration or work visa page and (2) its embassy or consulate in your country. Write both addresses on paper and one thing each page says you need.",
          youCanNow: "find the official government and embassy pages for working in another country and tell them apart from agents' pages.",
          quickCheck: [
            { objective: "O1", q: "Who decides whether you get a work visa for another country?", options: ["The recruitment agent", "The government of that country", "A popular video channel about jobs abroad", "Your future employer alone"], answer: 1, why: "Only the government of the destination country issues visas and work permits." },
            { objective: "O1", q: "A friend says you can work there on a tourist visa. What do you do?", options: ["Go, because your friend did it", "Pay an agent to arrange it quickly", "Check the official immigration page or the embassy first", "Ask on social media"], answer: 2, why: "Working on the wrong visa can get you arrested or trapped; the official page tells you what is legal." }
          ]
        },
        {
          title: "Checking that a recruitment agency is licensed",
          objectives: ["O2"],
          minutes: 5,
          goal: "Check an agency's licence on your government's official list.",
          text: [
            "In many countries, agencies that send workers abroad must hold a licence from the government. The licence means the government knows who they are and can act on complaints. An unlicensed agent has no one checking on them.",
            "Examples: in the Philippines, the Department of Migrant Workers (DMW) lets you verify the status of a recruitment agency online. In India, the eMigrate portal lists registered recruiting agents, and the agent should show a valid registration certificate. In Kenya, the National Employment Authority (NEA) keeps the list of registered private employment agencies. In other countries, ask the labour ministry, the public employment service, or an IOM office which list to use.",
            "Check the exact name and licence number. Some fake agents copy the name of a real agency, or use a licence that has expired or been cancelled. Check again close to the date you pay or sign, because licences can be suspended. Also check that the job order or vacancy is approved where your country requires it."
          ],
          steps: ["Ask the agency for its full legal name, address and licence number, in writing.", "Open your government's official list (not a link the agent sends you).", "Search for the name and the licence number and check they match.", "Check the licence is valid today and not suspended or cancelled.", "If the agency is not on the list, stop and report it to the authority."],
          words: [["Recruitment agency", "a business that finds workers for employers, sometimes in other countries."], ["Licence", "official permission from the government to do a kind of business."], ["Job order", "an employer's official request for workers, which some countries must approve."], ["IOM", "the International Organization for Migration, the United Nations agency for migration."]],
          slides: [
            { title: "Why the licence matters", bullets: ["The government knows who the agency is", "You can complain if something goes wrong", "Unlicensed agents have no one checking them"] },
            { title: "Where to check (examples)", bullets: ["Philippines: DMW agency status check", "India: eMigrate list of registered agents", "Kenya: National Employment Authority list"] },
            { title: "How to check", bullets: ["Get the exact name and licence number in writing", "Use the official list, not the agent's link", "Name and number must match and be valid today"] },
            { title: "Not on the list?", bullets: ["Stop: do not pay or hand over documents", "Report it to the labour or migration authority"] }
          ],
          sources: [
            { name: "Philippines DMW: recruitment agencies", url: "https://dmw.gov.ph/archives/poea/services/recruiters.html" },
            { name: "India MEA: FAQ on issues of intending emigrants", url: "https://www.mea.gov.in/issues-of-intending-emigrants.htm" },
            { name: "Kenya National Employment Authority", url: "https://www.nea.go.ke/" },
            { name: "IOM IRIS: Ethical Recruitment", url: "https://iris.iom.int/" }
          ],
          tryIt: "Find your own country's official list of licensed recruitment agencies (or the office that keeps it). Write down the web address. Then look up one agency you have heard of, or any agency on the list, and write its name, licence number and whether the licence is valid.",
          youCanNow: "find your country's official list of licensed agencies and check one agency's name, number and status.",
          quickCheck: [
            { objective: "O2", q: "An agent sends you a link to a page that says the agency is licensed. What is the safest check?", options: ["Trust the link because it looks official", "Ask the agent to send a screenshot", "Count the good reviews on social media", "Open your government's official list yourself and search the name and number"], answer: 3, why: "Fake agents can make fake pages; going to the official list yourself is the real check." },
            { objective: "O2", q: "The agency name matches the official list but the licence number is different. What does this suggest?", options: ["Someone may be copying a real agency's name", "Nothing; numbers are not important", "The agency is extra safe", "You should pay faster"], answer: 0, why: "Fake agents copy real names; the name and number must both match a valid licence." }
          ]
        },
        {
          title: "Spotting fake recruiters and job scams",
          objectives: ["O3"],
          minutes: 5,
          goal: "List the warning signs in a job advert or recruiter message.",
          text: [
            "Fair recruitment has one simple rule you can remember: workers should not pay to get a job. The International Labour Organization (ILO) guidelines on fair recruitment say no recruitment fees or related costs should be charged to workers or job seekers. The employer pays. This is called the employer pays principle. Some countries still allow certain fees by law, so if anyone asks you for money, check your country's official rules first.",
            "Common warning signs: you must pay a placement, training, medical or visa fee to the agent before you see a contract; the pay is far higher than normal for the job; the offer comes only by social media or messaging with no company address; they rush you to decide today; they ask you to travel on a tourist visa; they want to keep your passport; or the job, the employer or the country keeps changing.",
            "Other signs: you are told to lie to officials at the airport, to borrow money from the agent, or to keep the offer secret from your family. A real employer can be checked: it has a real address, a website, and a job order or contract you can read before you pay or travel."
          ],
          steps: ["Read the advert or message slowly.", "Circle any request for money, your passport or secrecy.", "Check whether the pay and the job make sense.", "Check the company and the agency on official pages.", "If you see a warning sign, stop and ask the authority or a trusted adviser."],
          words: [["Recruitment fee", "money charged to a worker to get a job or be placed in it."], ["Employer pays principle", "the rule that the employer, not the worker, pays the costs of recruitment."], ["ILO", "the International Labour Organization, the United Nations agency for work and workers' rights."]],
          slides: [
            { title: "Remember one rule", bullets: ["Workers should not pay to get a job", "The employer pays the recruitment costs", "Asked for money? Check the official rules first"] },
            { title: "Warning signs", bullets: ["Fees to the agent before a contract", "Pay far above normal", "Rushed: decide today", "Tourist visa for a job"] },
            { title: "More warning signs", bullets: ["They want to keep your passport", "Job, employer or country keeps changing", "Lie at the airport, borrow from the agent, keep it secret"] },
            { title: "A real offer can be checked", bullets: ["Real company address and website", "Licensed agency", "A contract you read before paying or travelling"] }
          ],
          sources: [
            { name: "ILO: General principles and operational guidelines for fair recruitment and definition of recruitment fees and related costs", url: "https://www.ilo.org/publications/general-principles-and-operational-guidelines-fair-recruitment-and" },
            { name: "IOM IRIS: Ethical Recruitment (employer pays principle)", url: "https://iris.iom.int/" }
          ],
          tryIt: "Read this practice advert: Hotel jobs in Dubai! Pay 3 times normal. No experience. Send 500 dollars for visa processing today, only 5 places left. WhatsApp only. Write down every warning sign you find (there are at least four).",
          youCanNow: "list the warning signs of a fake recruiter or job scam in an advert or message.",
          quickCheck: [
            { objective: "O3", q: "A recruiter asks you to pay a placement fee before you see a contract. What is this?", options: ["Normal for every job abroad", "A sign the job is very good", "A warning sign; workers should not pay to get a job", "A government tax"], answer: 2, why: "The ILO fair recruitment guidelines say workers should not be charged recruitment fees; paying before a contract is a key scam sign." },
            { objective: "O3", q: "Which message has the MOST warning signs?", options: ["Here is our address and licence number; read the contract first", "Pay today, keep this secret, and travel on a tourist visa", "Please send your CV for the interview", "The employer pays your flight; see the attached contract"], answer: 1, why: "Rushing, secrecy and a tourist visa for a job are all warning signs." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Choosing a safe, legal route",
        questions: [
          { objective: "O1", q: "Which is the most trusted place to check work visa rules?", options: ["A recruiter's social media page", "A video by someone who went abroad", "A friend's advice", "The destination country's official immigration website or embassy"], answer: 3, why: "Only the government decides visas, so its official pages are the trusted source." },
          { objective: "O1", q: "What is the difference between smuggling and trafficking?", options: ["Smuggling is paying to cross a border illegally; trafficking uses force, lies or abuse to exploit a person", "They mean the same thing", "Smuggling is legal", "Trafficking only happens at borders"], answer: 0, why: "Trafficking is about exploiting a person; smuggling is about crossing a border illegally." },
          { objective: "O2", q: "Where should you check whether an agency is licensed?", options: ["On the agency's own website only", "On your government's official list of licensed agencies", "By asking other job seekers in a chat group", "By looking at the agency's office furniture"], answer: 1, why: "The official list from the labour or migration authority shows whether the licence is real and valid." },
          { objective: "O2", q: "The agency is not on the official list. What do you do?", options: ["Pay a smaller deposit", "Give them a copy of your passport to hold", "Stop, and report it to the labour or migration authority", "Ask them to send a nicer website"], answer: 2, why: "An unlicensed agent has no one checking them; stop and report." },
          { objective: "O3", q: "What does the employer pays principle mean?", options: ["The worker pays half", "The government pays the worker's fees", "The agent decides who pays", "The employer, not the worker, pays the costs of recruitment"], answer: 3, why: "Under fair recruitment, recruitment costs are paid by the employer, not by workers." }
        ]
      }
    },
    {
      name: "Chapter 2: Protecting yourself before and after you go",
      lessons: [
        {
          title: "Reading the job offer and contract",
          objectives: ["O4"],
          minutes: 6,
          goal: "Check a job offer for the details it must have in writing.",
          text: [
            "A fair job comes with a written offer or contract that you can read, in a language you understand, before you pay anything, sign or travel. Ask for a copy you can keep. If you do not understand a word, ask the agency, the labour office or a trusted person to explain it.",
            "Check that it names: the employer and its address; the job and its main tasks; where you will work; the pay, how often and how it is paid; the hours, days off and overtime; the length of the contract; housing and food, and whether they are taken from your pay; who pays the flight, visa, medical test and recruitment costs; and how you can end the contract and return home.",
            "Contract substitution is a common trick: you sign one contract at home and are given a different, worse one when you arrive. Keep a photo of every page you sign. If the contract you are given abroad is different, do not sign it in a hurry; contact your embassy or labour office."
          ],
          steps: ["Get the full offer or contract in writing and keep a copy.", "Use a checklist: employer, job, place, pay, hours, days off, length, housing, costs, return.", "Mark anything missing or different from what you were told.", "Ask for answers in writing before you sign.", "Photograph every page you sign and keep the photos safe."],
          words: [["Contract", "a written agreement between you and the employer about the job."], ["Overtime", "work beyond your normal hours, which should be paid."], ["Deduction", "money taken out of your pay, for example for housing."], ["Contract substitution", "when the contract you get abroad is different and worse than the one you signed at home."]],
          slides: [
            { title: "Before you pay, sign or travel", bullets: ["Get the offer in writing", "In a language you understand", "Keep your own copy"] },
            { title: "It must say", bullets: ["Employer, job, place of work", "Pay, hours, days off, overtime", "Length of contract, housing, deductions"] },
            { title: "And it must say", bullets: ["Who pays flight, visa, medical and recruitment costs", "How to end the contract and return home"] },
            { title: "Watch for contract substitution", bullets: ["Photograph every page you sign", "A different contract abroad? Do not rush", "Contact your embassy or labour office"] }
          ],
          sources: [
            { name: "ILO: General principles and operational guidelines for fair recruitment", url: "https://www.ilo.org/publications/general-principles-and-operational-guidelines-fair-recruitment-and" }
          ],
          tryIt: "Write the ten-item contract checklist from this lesson on paper. Then read a practice offer (make one up, or use a real one with your private numbers covered) and tick each item that is written down. Circle each item that is missing.",
          youCanNow: "check a job offer or contract for the details it must have and list anything missing before you sign.",
          quickCheck: [
            { objective: "O4", q: "When should you read the full contract?", options: ["After you arrive in the new country", "Before you pay, sign or travel", "Only if there is a problem", "The agent reads it for you"], answer: 1, why: "You need to know the terms before you commit money, sign or leave home." },
            { objective: "O4", q: "At the new job you are given a different contract with lower pay. What is this called?", options: ["A promotion", "A normal update", "Contract substitution", "A bonus"], answer: 2, why: "Swapping in a worse contract after arrival is called contract substitution, a known abuse." }
          ]
        },
        {
          title: "Knowing the signs of trafficking and forced labour",
          objectives: ["O5"],
          minutes: 5,
          goal: "Name the signs of trafficking and the places to get help.",
          text: [
            "The United Nations defines trafficking in three parts: an act (recruiting, moving, holding or receiving a person), a means (force, threats, lies, abuse of power or of someone's weak position) and a purpose (exploitation, such as forced labour or sexual exploitation). For children under 18, no force or lies are needed for it to be trafficking.",
            "Signs to watch for: your passport or ID is taken and kept by the employer or agent; you owe a debt that keeps growing and you cannot leave until you pay it; you are not paid, or paid much less than promised; you cannot leave the workplace or housing freely; you are threatened, or told the police will arrest you; you work very long hours with no days off; you are cut off from family and phone.",
            "Help exists. Contact your country's embassy or consulate, the labour office or police in the country where you are, an IOM office, or a trusted worker organisation. Many countries have hotlines for migrant workers and trafficking victims: look up the official number now and save it. If you or someone else is in immediate danger, call the local emergency number first."
          ],
          words: [["Forced labour", "work a person is made to do by threats or punishment and did not freely agree to."], ["Debt bondage", "being forced to work to pay off a debt that never seems to end."], ["Exploitation", "using a person unfairly for someone else's gain."]],
          slides: [
            { title: "Trafficking has three parts", bullets: ["Act: recruit, move, hold or receive a person", "Means: force, threats, lies, abuse of power", "Purpose: exploitation such as forced labour"] },
            { title: "Signs to watch for", bullets: ["Passport or ID taken and kept", "A debt that keeps growing", "No pay or much less than promised"] },
            { title: "More signs", bullets: ["Not free to leave work or housing", "Threats, or told police will arrest you", "Cut off from family and phone"] },
            { title: "Where to get help", bullets: ["Danger now: local emergency number first", "Your embassy or consulate, labour office, police", "IOM office, worker groups, official hotlines"] }
          ],
          sources: [
            { name: "UNODC: Human trafficking FAQs", url: "https://www.unodc.org/unodc/en/human-trafficking/faqs.html" },
            { name: "UNODC Education for Justice: crime of trafficking in persons", url: "https://www.unodc.org/e4j/en/tip-and-som/module-6/key-issues/crime-of-trafficking-in-persons.html" },
            { name: "IOM: International Organization for Migration", url: "https://www.iom.int/" }
          ],
          tryIt: "Read this practice story: Amina went abroad to clean houses. On arrival the agent kept her passport to keep it safe. She is told she owes 2,000 dollars for her travel, which grows every month. She works 14 hours a day with no day off and is told the police will arrest her if she leaves. Write down every sign of trafficking or forced labour, and two places Amina could get help.",
          youCanNow: "spot the signs of trafficking and forced labour and name places a worker can get help.",
          quickCheck: [
            { objective: "O5", q: "Your employer abroad says they must keep your passport. What is this?", options: ["A warning sign of forced labour or trafficking", "A normal service to keep it safe", "A legal requirement everywhere", "A sign of a good employer"], answer: 0, why: "Taking and keeping a worker's passport is a common sign of forced labour and trafficking." },
            { objective: "O5", q: "A worker is in danger right now. What is the first step?", options: ["Post about it on social media", "Wait until the contract ends", "Call the local emergency number", "Pay the employer the debt"], answer: 2, why: "In immediate danger, the local emergency number comes first; then the embassy and other help." }
          ]
        },
        {
          title: "Your migration safety checklist",
          objectives: ["O6"],
          minutes: 6,
          goal: "Write a safety plan with your documents, contacts and help numbers before you go.",
          text: [
            "Before you leave, make a plan. Keep your own passport and documents with you. Make copies: a paper copy at home with someone you trust, and a photo in a safe place you can open from any phone, such as your own email. Do not post photos of your passport online.",
            "Write down your contacts: a trusted person at home who expects to hear from you on set days; the employer's and the agency's full names, addresses and phone numbers; your country's embassy or consulate in the destination country; and the official hotlines you looked up on government pages. Agree a code word with your trusted person that means I need help.",
            "Keep a simple record of your work: the dates and hours you work and what you are paid. Keep your contract photos. If something goes wrong, these records help the embassy, the labour office or a lawyer help you. Then put all of this, with the checks from earlier lessons, into one checklist: that is your final task."
          ],
          steps: ["List the official pages you used (immigration, embassy, your labour ministry).", "Write the agency's name, licence number and how you checked it.", "List every cost and who pays it.", "Tick the contract checklist.", "Write your warning signs to stop.", "Write your help plan: document copies, trusted contact, check-in days, code word, embassy and hotline numbers you looked up yourself."],
          words: [["Trusted contact", "a person at home who knows your plans and expects to hear from you."], ["Check-in", "a planned message or call to say you are safe."], ["Code word", "a word you agree on that secretly means I need help."]],
          slides: [
            { title: "Keep your documents", bullets: ["Your passport stays with you", "Paper copy at home with someone you trust", "Photo in a safe place, never posted online"] },
            { title: "Your contacts", bullets: ["Trusted person at home, check-in days, code word", "Employer and agency names and addresses", "Embassy and official hotlines you looked up"] },
            { title: "Keep records", bullets: ["Dates and hours you work", "What you are paid", "Photos of your contract"] },
            { title: "Your checklist", bullets: ["Official pages and agency licence check", "Costs and who pays, contract details", "Warning signs and your help plan"] }
          ],
          sources: [
            { name: "IOM: International Organization for Migration", url: "https://www.iom.int/" },
            { name: "Philippines Department of Migrant Workers (example of a migrant worker office)", url: "https://dmw.gov.ph/" }
          ],
          tryIt: "Final task: make your migration safety checklist for one real or practice job abroad. Include the official pages, the agency licence check, costs and who pays, the contract details, your stop signs and your help plan. Use blanks like [passport number] instead of real numbers.",
          youCanNow: "write a migration safety checklist that keeps your documents, contacts and help numbers ready before you go.",
          quickCheck: [
            { objective: "O6", q: "Where should your passport be when you work abroad?", options: ["With the agent", "With the employer", "With a friend you met on the trip", "With you, with copies kept at home"], answer: 3, why: "Keep your own passport; copies with a trusted person help if it is lost or taken." },
            { objective: "O6", q: "Why agree a code word with a trusted person at home?", options: ["To get a discount on calls", "So you can ask for help without others knowing", "To unlock your phone", "To get a visa faster"], answer: 1, why: "A code word lets you signal danger even if someone is listening." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Protecting yourself before and after you go",
        questions: [
          { objective: "O4", q: "Which item MUST be in writing before you sign?", options: ["Who pays the flight, visa and recruitment costs", "The agent's favourite city", "The colour of your uniform", "Your plans for holidays"], answer: 0, why: "Costs and who pays them protect you from hidden fees and debt." },
          { objective: "O4", q: "The offer does not say how many hours you will work. What do you do?", options: ["Sign; hours do not matter", "Guess the hours", "Ask for the hours in writing before you sign", "Wait and see after you arrive"], answer: 2, why: "Missing terms should be answered in writing before you commit." },
          { objective: "O5", q: "Which is a sign of debt bondage?", options: ["You get a pay slip every month", "A debt that keeps growing and you cannot leave until it is paid", "You have a day off each week", "You can call your family"], answer: 1, why: "A growing debt that stops you leaving is debt bondage, a form of forced labour." },
          { objective: "O5", q: "Which is a place a migrant worker in trouble can get help?", options: ["The agent who took the passport", "A stranger online who asks for a fee", "The employer who is not paying", "Their country's embassy or consulate"], answer: 3, why: "The embassy or consulate helps its citizens abroad, along with the labour office, police, IOM and hotlines." },
          { objective: "O6", q: "Where should you get the hotline numbers for your plan?", options: ["From official government or embassy pages you looked up yourself", "From the recruiter's message", "From a social media comment", "You do not need them"], answer: 0, why: "Numbers from official pages are real; a scammer can send fake help numbers." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Migrating for Work Safely",
    questions: [
      { objective: "O1", q: "What is a legal route for working abroad?", options: ["Travelling on a tourist visa and finding work", "Paying a smuggler to cross the border", "Working with the right visa or work permit from the destination government", "Using a friend's passport"], answer: 2, why: "A legal route uses the visa or permit the destination government issues for that work." },
      { objective: "O1", q: "Which source is official?", options: ["The destination country's embassy website", "A recruiter's video", "A group chat about jobs", "A poster at a bus stop"], answer: 0, why: "Embassies and immigration websites are run by governments." },
      { objective: "O1", q: "Why can smuggling be dangerous for a worker?", options: ["It is always cheaper", "Smugglers can turn into traffickers, and you have no legal protection", "It gives you a work permit", "Embassies prefer it"], answer: 1, why: "Without legal status you are easy to threaten, and smugglers can exploit you." },
      { objective: "O2", q: "Why does a recruitment agency licence matter?", options: ["It makes the job pay more", "It means the job is guaranteed", "It lets the agency charge any fee", "The government knows the agency and can act on complaints"], answer: 3, why: "A licence puts the agency under government rules and complaint systems." },
      { objective: "O2", q: "In the Philippines, which office lets you verify a recruitment agency's status?", options: ["The Department of Migrant Workers (DMW)", "A private social media page", "The airline", "Any bank"], answer: 0, why: "The DMW licenses agencies and offers an online agency status check." },
      { objective: "O2", q: "What two things should match on the official list?", options: ["The agent's phone and email", "The agency's logo and colours", "The agency's exact name and licence number", "The office size and staff number"], answer: 2, why: "Fake agents copy real names, so the name and the licence number must both match a valid licence." },
      { objective: "O3", q: "Under the ILO fair recruitment guidelines, who should pay recruitment fees?", options: ["The worker", "The worker's family", "The employer, not the worker", "The worker's village"], answer: 2, why: "The guidelines say no recruitment fees or related costs should be charged to workers: the employer pays." },
      { objective: "O3", q: "Which is a warning sign of a fake job?", options: ["A written contract before you pay", "A licensed agency with an address", "Normal pay for the job", "Pay far higher than normal for no experience"], answer: 3, why: "Offers that look too good to be true are a common way to trap people." },
      { objective: "O3", q: "A recruiter says to keep the job secret from your family. What does this suggest?", options: ["A warning sign; honest jobs do not need secrecy", "A normal company rule", "A sign of a high salary", "A visa requirement"], answer: 0, why: "Secrecy cuts you off from people who could warn or help you." },
      { objective: "O3", q: "You are told to say you are a tourist at the airport. What do you do?", options: ["Do it; everyone does", "Stop: this is a warning sign of an illegal and unsafe route", "Ask for a higher salary", "Lie but bring extra money"], answer: 1, why: "Being told to lie to officials means the route is not legal and you could be trapped." },
      { objective: "O4", q: "Which is something a fair contract must say?", options: ["The agent's age", "Your religion", "The pay and how it is paid", "Your social media name"], answer: 2, why: "Pay, hours, place, costs and return terms must be written down." },
      { objective: "O4", q: "Why photograph every page you sign?", options: ["To post it online", "To prove what you agreed if the contract is changed later", "To show your friends", "Because the agent asks"], answer: 1, why: "Photos protect you against contract substitution." },
      { objective: "O4", q: "The contract is in a language you cannot read. What is the best step?", options: ["Ask for it in a language you understand, or have a trusted person explain it, before signing", "Sign quickly", "Ask the agent to sign for you", "Ignore it"], answer: 0, why: "You should understand every term before you sign." },
      { objective: "O5", q: "Which is one of the three parts of trafficking in the UN definition?", options: ["A plane ticket", "A job advert", "A visa", "Exploitation as the purpose"], answer: 3, why: "Trafficking has an act, a means and a purpose: exploitation." },
      { objective: "O5", q: "Which is a sign of forced labour?", options: ["Being paid on time", "Being told the police will arrest you if you leave", "Having a day off", "Keeping your own passport"], answer: 1, why: "Threats to stop a worker leaving are a sign of forced labour." },
      { objective: "O5", q: "For a child under 18, what is true about trafficking?", options: ["It is only trafficking if force is used", "Children cannot be trafficked", "No force or lies are needed for it to be trafficking", "Only parents can report it"], answer: 2, why: "Under the UN Protocol, recruiting or moving a child for exploitation is trafficking even without force or lies." },
      { objective: "O5", q: "Which is a place to get help abroad?", options: ["An IOM office", "The employer who holds your passport", "A loan shark", "An unlicensed agent"], answer: 0, why: "IOM, embassies, labour offices, police and official hotlines can help." },
      { objective: "O6", q: "What should you put in your help plan?", options: ["Only your favourite songs", "Your bank PIN", "Your passport given to the agent", "A trusted contact, check-in days, a code word and official help numbers"], answer: 3, why: "These make sure someone notices if you are in trouble and that you know who to call." },
      { objective: "O6", q: "Where should you keep a copy of your passport?", options: ["Posted on social media", "With a trusted person at home and in a safe place you can open", "With the recruiter only", "Nowhere"], answer: 1, why: "Copies with a trusted person and in a private safe place help if your passport is lost or taken." },
      { objective: "O6", q: "Why keep a record of your hours and pay abroad?", options: ["To show off", "The employer asks for it", "It helps the embassy or labour office help you if something goes wrong", "It is needed for a tourist visa"], answer: 2, why: "Records are evidence of what you worked and what you were paid." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Pre-Test: What Do You Already Know?", from: [0, 3, 6, 8, 10, 13, 15, 17] },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      { name: "Official information", objective: "O1", notYet: "Uses only an agent's, a friend's or a social media page.", meets: "Lists the destination's official immigration page and its embassy in your country.", exceeds: "Also lists your own country's labour or migration ministry page and what each page says you need." },
      { name: "Agency checked", objective: "O2", notYet: "No agency check, or the check used a link from the agent.", meets: "Agency name and licence number checked on the official list and valid today.", exceeds: "Also checked that the job order or vacancy is approved where your country requires it." },
      { name: "Costs and warning signs", objective: "O3", notYet: "Costs are not listed, or a fee to the worker is accepted without question.", meets: "Every cost is listed with who pays, and at least four stop signs are written down.", exceeds: "Checked the official rules on fees in your country and wrote where you checked." },
      { name: "Contract details", objective: "O4", notYet: "Fewer than six of the ten contract items are checked.", meets: "All ten contract items are listed and missing ones are marked.", exceeds: "Wrote the questions to ask in writing for each missing item." },
      { name: "Help plan", objective: "O5", notYet: "No help numbers, or numbers taken from the recruiter.", meets: "Embassy and at least one official hotline, looked up on official pages, plus the local emergency number.", exceeds: "Also names an IOM office or worker organisation near the place of work." },
      { name: "Documents and contacts", objective: "O6", notYet: "No document copies or trusted contact.", meets: "Document copies kept at home and in a safe place, a trusted contact and check-in days.", exceeds: "Also a code word and a plan to record hours and pay." }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Learners who report checking an agency's licence before paying or signing (30-day follow-up)",
      "Learners who report refusing or reporting a job offer that asked them to pay a fee or hand over a passport",
      "Partner organisations report fewer learners losing money to fake recruiters"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A phone or computer with internet for looking up official pages",
      "Paper and pen for the checklists and practice stories",
      "The addresses of your country's labour or migration authority and agency list (the facilitator can look these up in advance)",
      "About 60 to 75 minutes in total, in short sessions"
    ],
    facilitatorNotes: [
      "Before the session, find your own country's official list of licensed agencies, the migrant worker office and the official hotline numbers, and check they are current.",
      "Do not give visa or legal advice; send learners to the embassy, the official immigration page or a licensed lawyer.",
      "Never ask learners to share real passport, ID or bank numbers; use blanks like [passport number].",
      "Some learners or their families may have been cheated or exploited. Speak without blame and share local help services privately.",
      "If a learner says they or someone else is in danger now, help them call the local emergency number first."
    ]
  }
};
