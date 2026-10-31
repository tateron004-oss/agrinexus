"use strict";

// Koach Learn course: Workforce Development (wave 3, 30 October 2026) -> "Writing a CV for Jobs Around the World". For job seekers in and outside the US who apply to employers at home, abroad or online.
// Goes past shared/resume-linkedin-interviews.js (one-page US resume, LinkedIn, interviews): country conventions, informal work, explaining foreign qualifications and languages, tailoring to an ad, and recruiter scams.
// Translated into many languages, so the examples are global (Kenya, Nigeria, Ghana, Senegal, Côte d'Ivoire, Morocco, Egypt, India, the Philippines, Mexico, Colombia).

module.exports = {
  id: "international-cv-writing",
  category: "Workforce Development",
  name: "Writing a CV for Jobs Around the World",
  skills: "Choosing a CV format for a country, Writing a header and profile, Describing work with results, Explaining qualifications and languages, Tailoring a CV to a job ad, Spotting fake recruiters",
  outcome: "write a clear, honest two-page CV for a real job ad in your own country or abroad: in the format that country expects, with your work shown as results, your qualifications and languages explained, the key words from the ad, and no private ID numbers, and check that the job is real before you send it.",
  about: [
    "This course is for anyone who needs a CV: school leavers and graduates, people with years of informal or family-business work, people changing careers, and people applying to employers in another country or online. The examples come from Africa, Asia, Latin America, the Middle East, Europe and North America.",
    "You will build your own CV one part at a time: the right format for the country, a header and short profile, your work written as results, your education and languages explained so a foreign employer understands them, and a version matched to one real job ad. You will also learn the warning signs of fake jobs and fake recruiters, because scammers target people looking for work abroad.",
    "Each lesson takes about five minutes and ends with a \"Try it now\" task on paper or in a free tool such as Google Docs, Microsoft Word online or LibreOffice Writer. A two-question quick check follows each lesson, a knowledge check closes each chapter, and a 20-question quiz closes the course. By the end, your CV is finished.",
    "This course teaches you to write a CV. It does not get you a job, a visa or a work permit. For visas and work permits, use only the official government or embassy website of the country you want to work in."
  ],
  finalTask: "Choose one real job ad (in your country, abroad or online). Write a two-page-or-shorter CV for it: the format and personal details that country expects, a header and a 3-4 line profile, at least three work or activity entries written as action + result, education and languages explained for a foreign reader, and at least five key words from the ad used honestly. Save it as a PDF with a clear file name, and fill in the scam checklist for the job before you send anything.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Young people and adults looking for work, in many countries: school leavers, TVET and university graduates, people with informal, farm, market or family-business work, returning migrants, and people applying to jobs abroad or to online employers. The course is translated into many languages.",
    startingPoint: "Most can type a short document on a phone or a shared computer. Many have never written a CV, or have one copied from a template that lists duties, includes private ID numbers or runs to four or more pages. Few know that CV rules change by country.",
    gap: "Employers and recruiters spend little time on each CV. A CV that is too long, in the wrong format for the country, hides informal experience, or uses qualifications a foreign employer cannot understand is often rejected. People seeking work abroad are also targeted by fake recruiters who ask for fees and passports. Learners need one strong, honest CV and the habit of checking a job before they apply.",
    constraints: [
      "Reading level: plain words and short sentences; many learners read English, French or Spanish as a second language",
      "Devices: often a phone or a shared computer in a cyber cafe, library or training center; free tools only",
      "Time: 4 to 6 minute lessons; the whole CV can be built in about two hours over several sessions",
      "Country rules differ: the course teaches common patterns and how to check the employer's or country's own instructions",
      "Safety: never put ID, passport or bank numbers in a CV or a practice file; no visa or legal advice"
    ],
    prerequisites: "Basic typing on a phone or computer. Learners new to computers can take \"Basic Computer Skills\" first; US learners who want a one-page US resume and interview practice can also take \"Resumes, LinkedIn and Job Interviews\"."
  },
  // ---- ADDIE: Design ----
  objectives: [
    { id: "O1", condition: "Given a job in a named country", action: "choose the CV format, length and personal details that the country and employer expect", standard: "following the job ad's instructions and leaving out ID and passport numbers" },
    { id: "O2", condition: "Using your own information", action: "write a CV header and a profile of 3 to 4 lines aimed at one kind of job", standard: "with working contact details and no spelling mistakes" },
    { id: "O3", condition: "Given your work, study or community experience, paid or unpaid", action: "write experience entries that start with an action verb and show a result", standard: "with at least one number or concrete detail in each entry" },
    { id: "O4", condition: "Given your certificates, training and languages", action: "list your qualifications and language levels so an employer in another country can understand them", standard: "naming the school, the country, the year and a level a foreign reader can use" },
    { id: "O5", condition: "Given a real job ad", action: "tailor your CV to the ad by using its key words and a layout that application systems can read", standard: "using at least five key words honestly and saving it as a clearly named PDF" },
    { id: "O6", condition: "Before you send your CV to a job or recruiter", action: "check the offer for the warning signs of a fake job or an illegal recruiter", standard: "paying no fee and handing over no passport or original documents" }
  ],
  chapters: [
    {
      name: "Chapter 1: Building the core of your CV",
      lessons: [
        {
          title: "CV or resume: what changes from country to country",
          objectives: ["O1"],
          minutes: 5,
          goal: "Choose the right CV length, format and personal details for the country you are applying to.",
          text: [
            "A CV (curriculum vitae) is a short document that shows an employer your skills, work and education. In the United States and Canada it is usually called a resume and is often one or two pages. Most countries use the word CV. For most jobs, two pages is a safe maximum; long academic CVs are only for research and university posts.",
            "Personal details change by country. Employers in the US, Canada and the UK usually do not want a photo, your age, marital status or religion, because of rules against discrimination. In many countries in Africa, the Middle East, Asia and Latin America (for example Nigeria, Egypt, Morocco, India, the Philippines, Mexico and Colombia) many employers still expect a photo, date of birth or nationality. In Senegal or Côte d'Ivoire, the CV is usually written in French.",
            "There is no single world rule, so follow three sources in this order: the job ad's own instructions, the employer's careers page, and then the usual practice in that country. If the ad asks for a photo, use a plain, professional head-and-shoulders photo. If you apply in Europe, many employers know the free Europass CV format.",
            "Some things never go in a CV anywhere: your national ID, passport or social security number, bank details, or a copy of your passport. A real employer asks for those only after an offer, through a safe process."
          ],
          steps: ["Read the job ad for instructions: language, format, photo, length, how to apply.", "Check the employer's careers page.", "Look up the usual CV practice for that country.", "Decide: length (1-2 pages), photo or no photo, which personal details.", "Leave out ID, passport and bank numbers every time."],
          words: [["CV", "curriculum vitae: a short document listing your skills, work and education for an employer."], ["Resume", "the usual US and Canadian name for a CV, often one or two pages."], ["Europass", "a free CV format and tool from the European Union, known by many employers in Europe."], ["Discrimination", "treating someone unfairly because of things like age, sex, religion or family status."]],
          slides: [
            { title: "CV or resume", bullets: ["A short document of your skills, work and education", "US and Canada say resume; most countries say CV", "Two pages is a safe maximum for most jobs"] },
            { title: "Personal details change by country", bullets: ["US, Canada, UK: usually no photo, age or marital status", "Many countries still expect a photo or date of birth", "Francophone Africa: the CV is usually in French"] },
            { title: "Follow in this order", bullets: ["1. The job ad's instructions", "2. The employer's careers page", "3. Usual practice in that country"] },
            { title: "Never in any CV", bullets: ["National ID, passport or social security numbers", "Bank details or a copy of your passport"] }
          ],
          sources: [{ name: "Europass: Create your Europass CV (European Union)", url: "https://europass.europa.eu/en/create-europass-cv" }],
          tryIt: "Pick two countries where you might work, for example your own country and one abroad. For each, write on paper: the language of the CV, the length, photo yes or no, and which personal details to include. Then find one real job ad in each and check whether it gives its own instructions.",
          youCanNow: "choose the CV length, language, photo and personal details for a country, and say what never goes in a CV.",
          quickCheck: [
            { objective: "O1", q: "A job ad from a company in Canada asks for a resume. What personal details do you leave out?", options: ["Your email address", "Your city", "Your phone number", "Your photo, age and marital status"], answer: 3, why: "Canadian and US employers usually do not want a photo, age or marital status." },
            { objective: "O1", q: "Which item should never be in a CV, in any country?", options: ["Your passport number", "Your email address", "The languages you speak", "Your most recent job"], answer: 0, why: "ID and passport numbers can be used to steal your identity; employers ask for them only after an offer." }
          ]
        },
        {
          title: "Your header and profile: the first ten seconds",
          objectives: ["O2"],
          minutes: 5,
          goal: "Write a CV header and a 3-4 line profile for one kind of job.",
          text: [
            "Recruiters often look at a CV for only a few seconds before deciding to read on. The top of the page must tell them who you are and what you can do.",
            "The header has your full name, a phone number with the country code (for example +234 for Nigeria, +254 for Kenya, +63 for the Philippines), a professional email address, your city and country, and a LinkedIn link if you have one. A professional email is simple, like firstname.lastname@ plus your email provider, not a nickname.",
            "The profile is 3 to 4 lines under the header. Say what you are (your job or field), your strongest skills or years of experience, one result, and what job you want. Example: \"Customer service agent with 3 years in a busy mobile money shop in Accra. Served 80+ customers a day in English and Twi with very few complaints. Seeking a call center role.\"",
            "Write one profile for one kind of job. If you apply for two different jobs, write two profiles."
          ],
          steps: ["Write your full name in large text.", "Add phone with country code, professional email, city and country.", "Write line 1: what you are and your years of experience.", "Write lines 2-3: your best skills and one result.", "Write the last line: the job you want."],
          words: [["Header", "the top of the CV with your name and contact details."], ["Profile", "3 to 4 lines under the header that sum up who you are and the job you want; also called a summary."], ["Country code", "the number added before a phone number when calling from another country, such as +233 for Ghana."]],
          slides: [
            { title: "The first ten seconds", bullets: ["Recruiters decide fast", "The top of page 1 must say who you are"] },
            { title: "Header", bullets: ["Full name", "Phone with country code, e.g. +254", "Professional email, city and country"] },
            { title: "Profile: 3 to 4 lines", bullets: ["What you are and your experience", "Your best skills and one result", "The job you want"] },
            { title: "One job, one profile", bullets: ["Applying for two kinds of jobs? Write two profiles"] }
          ],
          tryIt: "Write your header. Check that your phone number has the country code and your email is professional. Then write a 3-4 line profile for one job you want. Read it aloud: can someone tell your job and your best result in ten seconds?",
          youCanNow: "write a CV header with working contact details and a short profile aimed at one job.",
          quickCheck: [
            { objective: "O2", q: "Which email address is best for a CV?", options: ["sweetgirl2004@...", "amina.okafor@...", "bigboss_money@...", "dontemailme@..."], answer: 1, why: "A simple name-based email looks professional." },
            { objective: "O2", q: "You are applying from Kenya to an employer in another country. How should your phone number appear?", options: ["Without the first digits", "Only your WhatsApp name", "With the country code, like +254", "You should not give a phone number"], answer: 2, why: "The country code lets an employer abroad call you." }
          ]
        },
        {
          title: "Writing your work as results, including informal work",
          objectives: ["O3"],
          minutes: 6,
          goal: "Write three experience entries that each start with an action verb and show a result.",
          text: [
            "Many CVs list duties: \"Responsible for selling.\" Employers want to know what you achieved. Start each line with an action verb (served, sold, repaired, trained, organized, reduced) and add a result with a number or clear detail.",
            "Duty: \"Responsible for customers.\" Result: \"Served about 60 customers a day and kept the shop's records in a notebook with no missing payments for 12 months.\"",
            "Informal and unpaid work counts. Selling in a market in Lagos, repairing phones in Nairobi, helping run a family farm in Morocco, volunteering at church or a youth club, or doing online gig work are real experience. Give each one a clear title (for example \"Self-employed trader\" or \"Volunteer youth coordinator\"), the place, the dates and your results.",
            "List your most recent work first. Use 2 to 4 lines per job. Never invent jobs, titles or numbers; if you estimate, say \"about\" and be ready to explain it in an interview."
          ],
          steps: ["List every job, business, farm, volunteer or gig role you have had.", "Give each a clear title, place and dates (month and year).", "For each, write 2-4 lines that start with an action verb.", "Add a number or concrete detail to each line.", "Put the most recent first, and check every line is true."],
          words: [["Action verb", "a doing word that starts a CV line, like served, sold or repaired."], ["Result", "what changed because of your work, shown with a number or a clear detail."], ["Informal work", "work without a formal contract, such as market trading, family business or casual jobs."]],
          slides: [
            { title: "Duties vs results", bullets: ["Duty: \"Responsible for customers\"", "Result: \"Served about 60 customers a day with no missing payments\""] },
            { title: "Start with an action verb", bullets: ["Served, sold, repaired, trained, organized, reduced", "Add a number or a clear detail"] },
            { title: "Informal work counts", bullets: ["Market trading, phone repair, family farm", "Volunteering and online gig work", "Give it a title, a place and dates"] },
            { title: "Keep it true", bullets: ["Most recent first, 2 to 4 lines per job", "Say \"about\" for estimates", "Never invent jobs or numbers"] }
          ],
          tryIt: "Choose three experiences, paid or unpaid. For each, write a title, place and dates, then two lines that start with an action verb and include a number or detail. Underline every number and check you could explain it to an interviewer.",
          youCanNow: "turn your paid and unpaid work into honest CV entries that show results.",
          quickCheck: [
            { objective: "O3", q: "Which line shows a result?", options: ["Responsible for the shop", "Worked in sales", "Duties included cleaning", "Sold about 40 phone cases a week and trained 2 new staff"], answer: 3, why: "It starts with an action verb and gives numbers that show what you achieved." },
            { objective: "O3", q: "You sold vegetables in a market for three years without a contract. What do you do?", options: ["List it as \"Self-employed trader\" with dates and results", "Leave it out because it was informal", "Call it a manager job at a large company", "Write only \"market\" with no details"], answer: 0, why: "Informal work is real experience; give it a clear, honest title and results." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Building the core of your CV",
        questions: [
          { objective: "O1", q: "You are applying to a company in Côte d'Ivoire. The ad is in French and says nothing about language. In which language do you write your CV?", options: ["Any language you like", "In French, the language of the ad", "Half in English, half in French", "In code so it is private"], answer: 1, why: "Follow the language of the ad and the country; in Côte d'Ivoire that is usually French." },
          { objective: "O1", q: "Two sources disagree about including a photo. Which comes first?", options: ["A friend's old CV", "A random template online", "The job ad's own instructions", "What you prefer"], answer: 2, why: "The job ad's instructions come first, then the employer's page, then the country's usual practice." },
          { objective: "O2", q: "What belongs in the CV header?", options: ["Your name, phone with country code, email, city and country", "Your bank account number", "Your passport number", "Your full life story"], answer: 0, why: "The header gives just enough for the employer to identify and contact you." },
          { objective: "O2", q: "How long should the profile be?", options: ["One word", "A full page", "Two pages", "3 to 4 lines"], answer: 3, why: "A short profile is read in seconds and shows who you are and the job you want." },
          { objective: "O3", q: "Which experience entry is strongest?", options: ["\"Did many things at the farm\"", "\"Responsible for animals\"", "\"Managed feeding for 200 chickens and cut feed waste by about a fifth in one season\"", "\"Farm\""], answer: 2, why: "It starts with an action verb and shows a result with numbers." }
        ]
      }
    },
    {
      name: "Chapter 2: Making it fit the job, and staying safe",
      lessons: [
        {
          title: "Education, certificates and languages a foreign employer understands",
          objectives: ["O4"],
          minutes: 5,
          goal: "List your qualifications and languages so an employer in another country can understand them.",
          text: [
            "An employer abroad may not know your school or your country's certificates, such as the WAEC or NECO certificate in West Africa, the KCSE in Kenya, the baccalauréat in Senegal or Morocco, or a TESDA National Certificate in the Philippines. For each one, write the full name, the school or awarding body, the city and country, the year, and a short plain explanation, for example \"(national secondary school leaving certificate)\".",
            "For jobs or study in another country, the employer, a licensing board or an immigration office may ask for an official credential evaluation or recognition. In Europe, the ENIC-NARIC network points you to each country's recognition center; in the US and Canada, services such as World Education Services (WES) evaluate foreign qualifications. Ask the employer or the official office which one they accept before you pay for any evaluation.",
            "Languages are a strong skill. Name each language and your level. Many employers understand the Common European Framework levels, A1 and A2 (basic), B1 and B2 (independent) and C1 and C2 (advanced), or simple words like \"native\", \"fluent\" or \"basic\". If you have a test result (for example IELTS, TOEFL or DELF), give the test and the year.",
            "Short courses count too: online certificates, TVET programs, first aid or driving licenses. Put them under \"Certificates and training\" with the provider and year."
          ],
          steps: ["List each qualification with full name, school or awarding body, city, country and year.", "Add a short plain explanation for local certificates.", "List each language with a level (native, fluent, B2, basic).", "Add test names and years if you have them.", "List short courses and licenses with the provider and year."],
          words: [["Credential evaluation", "an official report that explains what a foreign qualification equals in another country."], ["ENIC-NARIC", "a network of national centers that advise on recognizing qualifications from other countries."], ["CEFR", "Common European Framework of Reference: language levels from A1 (beginner) to C2 (very advanced)."], ["TVET", "technical and vocational education and training: practical job training programs."]],
          slides: [
            { title: "Explain local certificates", bullets: ["Full name, school, city, country, year", "Add a plain note: \"(national secondary school leaving certificate)\""] },
            { title: "Recognition abroad", bullets: ["Some employers ask for an official evaluation", "Europe: ENIC-NARIC; US and Canada: services such as WES", "Ask which one they accept before paying"] },
            { title: "Languages", bullets: ["Name each language and a level", "A1-A2 basic, B1-B2 independent, C1-C2 advanced", "Add a test and year if you have one"] },
            { title: "Short courses count", bullets: ["Online certificates, TVET, first aid, driving license", "Give the provider and the year"] }
          ],
          sources: [
            { name: "ENIC-NARIC network: recognition of qualifications", url: "https://www.enic-naric.net/" },
            { name: "World Education Services (WES): credential evaluation for the US and Canada", url: "https://www.wes.org/" },
            { name: "Europass: Common European Framework of Reference for language skills", url: "https://europass.europa.eu/en/common-european-framework-reference-language-skills" }
          ],
          tryIt: "Write your Education, Certificates and Languages sections. Give every local certificate a short plain explanation, and give every language a level. Show it to someone from another country or region, or read it as if you were a foreign employer: is anything unclear?",
          youCanNow: "list your education, certificates and languages so an employer in another country understands them.",
          quickCheck: [
            { objective: "O4", q: "An employer in Germany may not know the KCSE. What do you write?", options: ["Only \"KCSE\"", "Nothing about school", "A higher degree you do not have", "\"KCSE (Kenya Certificate of Secondary Education), [school], Nairobi, Kenya, [year]\""], answer: 3, why: "The full name, school, place and year let a foreign employer understand it." },
            { objective: "O4", q: "You speak Spanish at home and use English at work every day. How could you list them?", options: ["Spanish: native; English: fluent (C1)", "Languages: some", "Spanish and English: perfect in every way", "Leave languages out"], answer: 0, why: "Name each language with a clear level an employer can use." }
          ]
        },
        {
          title: "Tailoring your CV to one job ad",
          objectives: ["O5"],
          minutes: 6,
          goal: "Match your CV to a real job ad using its key words and a layout application systems can read.",
          text: [
            "Sending the same CV to every job rarely works. Read the ad and underline the key words: job titles, skills, tools, languages and certificates (for example \"customer service\", \"Excel\", \"bilingual French-English\", \"forklift license\"). Where they are true for you, use the same words in your profile, skills and experience.",
            "Many large employers and job sites use an applicant tracking system (ATS), software that reads CVs and searches them for key words. Help it read yours: use simple headings (Profile, Experience, Education, Skills, Languages), a common font, no text inside pictures or text boxes, and no tables for important information.",
            "Never copy the whole ad or claim skills you do not have. Hidden or white text with key words can get you rejected, and false claims can cost you the job later.",
            "Save the final CV as a PDF unless the ad asks for Word. Name the file clearly, like \"Amina-Okafor-CV-Customer-Service.pdf\", and keep it to two pages or less."
          ],
          steps: ["Underline the key words in the ad: titles, skills, tools, languages, certificates.", "Mark the ones that are true for you.", "Use those exact words in your profile, skills and experience.", "Use simple headings and a plain layout; no text in pictures.", "Save as a PDF (or Word if asked) with your name and the job in the file name."],
          words: [["Key words", "the important words in a job ad: skills, tools, titles and certificates."], ["ATS", "applicant tracking system: software that collects CVs and searches them for key words."], ["PDF", "a file type that looks the same on every computer and phone."]],
          slides: [
            { title: "One ad, one CV", bullets: ["Underline the key words in the ad", "Use the true ones in your own CV"] },
            { title: "Help the software read it", bullets: ["Simple headings: Profile, Experience, Education, Skills", "Common font, no text in pictures or text boxes", "No tables for important information"] },
            { title: "Stay honest", bullets: ["Do not copy the ad", "No hidden key words", "Claim only skills you have"] },
            { title: "Save and name it", bullets: ["PDF unless the ad asks for Word", "Name-CV-Job.pdf", "Two pages or less"] }
          ],
          tryIt: "Find one real job ad. Underline ten key words. Tick the ones that are true for you and add at least five of them to your CV in the right places. Save it as a PDF with your name and the job in the file name.",
          youCanNow: "tailor your CV to a job ad with its key words and save it in a format employers and their software can read.",
          quickCheck: [
            { objective: "O5", q: "The ad asks for \"bilingual French-English\" and you speak both well. What do you do?", options: ["Ignore it", "Write those words in your profile or languages section", "Write it in white text so only the software sees it", "Say you also speak five more languages"], answer: 1, why: "Using the ad's true key words where a person and the software can see them is honest tailoring." },
            { objective: "O5", q: "Which layout is easiest for an applicant tracking system to read?", options: ["Your experience inside a picture", "Text in many small text boxes", "Simple headings and plain text", "A table with all your skills in tiny cells"], answer: 2, why: "Software reads plain text under simple headings most reliably." }
          ]
        },
        {
          title: "Before you send: spotting fake jobs and illegal recruiters",
          objectives: ["O6"],
          minutes: 6,
          goal: "Check a job offer and a recruiter for scam warning signs before you send your CV.",
          text: [
            "People looking for work, especially abroad, are a favorite target of scammers. The biggest warning sign: someone asks you to pay to get the job, for \"processing\", training, a medical, a visa or a placement. Honest employers do not charge you to get a job, and the International Labour Organization (ILO) fair recruitment principles say workers should not pay recruitment fees or related costs.",
            "Other warning signs: an offer with no interview; very high pay for easy work; messages only on WhatsApp or a free email address; pressure to decide today; a company you cannot find on its own website; a request for your passport, original certificates or bank details; or a check sent to you with a request to send part of the money back.",
            "Check before you apply. Search the company's real website and contact it using details you find yourself. For jobs abroad, check that the recruitment agency is licensed by your government's labor or migrant-worker office (for example the Department of Migrant Workers in the Philippines or the National Employment Authority in Kenya), and look up the destination country's official visa and work-permit pages.",
            "Keep your own passport and original documents; send only copies when a real employer asks after an offer. If you suspect a scam or trafficking, stop contact and report it to your national police, labor ministry or the embassy. The IOM and ILO support migrants and publish fair-recruitment guidance."
          ],
          steps: ["Never pay a fee to get a job or a recruiter's place.", "Find the company's real website and contact it yourself.", "For jobs abroad, check the agency's license with your government's labor or migrant-worker office.", "Read visa and work-permit rules only on official government or embassy websites.", "Keep your passport and originals; send copies only after a real offer.", "Stop and report anything that feels wrong."],
          words: [["Recruitment fee", "money a worker is asked to pay to get a job or a placement; fair recruitment says the worker should not pay it."], ["Licensed agency", "a recruitment agency your government has approved and can check."], ["Trafficking", "moving or holding people by force, fraud or debt to exploit their work."]],
          slides: [
            { title: "The biggest warning sign", bullets: ["They ask you to pay to get the job", "ILO fair recruitment: workers should not pay recruitment fees"] },
            { title: "Other warning signs", bullets: ["No interview, very high pay for easy work", "Only WhatsApp or a free email, pressure to decide today", "They want your passport, originals or bank details"] },
            { title: "Check before you apply", bullets: ["Find the company's real website yourself", "Check the agency's license with your government", "Visa rules: only official government or embassy pages"] },
            { title: "Protect yourself", bullets: ["Keep your passport and original documents", "Send copies only after a real offer", "Stop and report: police, labor ministry, embassy"] }
          ],
          sources: [
            { name: "International Labour Organization (ILO): Fair recruitment", url: "https://www.ilo.org/topics-and-sectors/fair-recruitment" },
            { name: "US Federal Trade Commission: Job scams", url: "https://consumer.ftc.gov/articles/job-scams" }
          ],
          tryIt: "Final task: take your tailored CV and the job ad. Fill in this checklist on paper: Is there any fee? Did I find the company's real website myself? Is the recruiter licensed (for jobs abroad)? Am I keeping my passport and originals? Is my CV free of ID, passport and bank numbers? Only if every answer is safe, send your CV.",
          youCanNow: "check a job and a recruiter for scam warning signs and send an honest, tailored CV safely.",
          quickCheck: [
            { objective: "O6", q: "A recruiter offers you a hotel job in another country and asks for a \"processing fee\" first. What is this?", options: ["Normal for every job abroad", "A sign of a good company", "A warning sign; honest employers do not charge you to get a job", "A tax you must pay"], answer: 2, why: "Asking workers to pay to get a job is the biggest scam warning sign." },
            { objective: "O6", q: "A new employer wants to keep your passport \"for safety\" before you travel. What do you do?", options: ["Keep your own passport and check the offer with official sources", "Send the original by post", "Give it to them; it is normal", "Post a photo of it online"], answer: 0, why: "Keeping your passport protects you; taking workers' passports is a sign of forced labor and trafficking." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Making it fit the job, and staying safe",
        questions: [
          { objective: "O4", q: "Why add a plain explanation after a local certificate like the WAEC?", options: ["To make the CV longer", "So an employer in another country understands what it is", "Because the law requires it everywhere", "To hide your grades"], answer: 1, why: "A short explanation helps a foreign employer understand a certificate they may not know." },
          { objective: "O4", q: "An employer abroad asks for an official evaluation of your degree. What is your first step?", options: ["Pay the first website you see", "Make your own certificate", "Skip the job", "Ask the employer or official office which evaluation they accept"], answer: 3, why: "Different employers and countries accept different evaluations; check before you pay." },
          { objective: "O5", q: "What is an applicant tracking system (ATS)?", options: ["A free CV template", "A type of passport", "Software that collects CVs and searches them for key words", "A recruiter who charges fees"], answer: 2, why: "Many employers use an ATS to sort CVs by key words." },
          { objective: "O5", q: "Which file name is best for your CV?", options: ["Mohamed-Ali-CV-Electrician.pdf", "document1.docx", "cv final final new.pdf", "IMG_2045.jpg"], answer: 0, why: "A clear name with your name and the job is easy for the employer to find." },
          { objective: "O6", q: "A job message promises very high pay, no interview, and asks you to decide today. What do you do?", options: ["Accept quickly", "Send your bank details", "Treat it as a warning sign and check the company yourself", "Send your passport"], answer: 2, why: "High pay, no interview and pressure are common scam signs." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Writing a CV for Jobs Around the World",
    questions: [
      { objective: "O1", q: "What is a CV?", options: ["A short document showing an employer your skills, work and education", "A work visa", "A bank form", "A letter from your school"], answer: 0, why: "A CV sums up your skills, work and education for an employer." },
      { objective: "O1", q: "For most jobs, what is a safe maximum length for a CV?", options: ["Ten pages", "Two pages", "Half a line", "Five pages"], answer: 1, why: "Two pages is a safe maximum for most jobs; long CVs are for academic posts." },
      { objective: "O1", q: "You apply to a US company. Which detail do you usually leave out?", options: ["Your skills", "Your work history", "Your email", "Your photo"], answer: 3, why: "US employers usually do not want a photo, age or marital status." },
      { objective: "O1", q: "An employer in Egypt asks for a photo in the ad. What do you do?", options: ["Send a party photo", "Refuse to apply", "Add a plain, professional head-and-shoulders photo", "Send a copy of your passport"], answer: 2, why: "Follow the ad's instructions with a plain, professional photo." },
      { objective: "O2", q: "What should the profile at the top of your CV say?", options: ["Your full family history", "What you are, your best skills, one result and the job you want", "Your passport number", "Your salary at every job"], answer: 1, why: "The profile tells a recruiter who you are and what you want in seconds." },
      { objective: "O2", q: "Why add the country code to your phone number?", options: ["So an employer abroad can call you", "It is a password", "It makes the CV longer", "To hide your number"], answer: 0, why: "Without the country code, a caller in another country cannot reach you." },
      { objective: "O2", q: "You want both a nursing assistant job and a hotel job. What do you do with your profile?", options: ["Leave out the profile", "Use one profile for both", "Mention neither job", "Write a different profile for each job"], answer: 3, why: "One profile should aim at one kind of job." },
      { objective: "O3", q: "Which word is an action verb to start a CV line?", options: ["Responsible", "Duties", "Repaired", "Various"], answer: 2, why: "Action verbs like repaired, served and trained show what you did." },
      { objective: "O3", q: "Which is the best way to show a result?", options: ["\"Worked hard\"", "\"Trained 5 new cashiers in 3 months\"", "\"Was at the shop\"", "\"Did tasks\""], answer: 1, why: "A number and a clear detail show the result of your work." },
      { objective: "O3", q: "You helped run your family's shop for two years. How do you list it?", options: ["Leave it out", "Call it a multinational company", "Write only \"family\"", "Give it a clear title, place, dates and results"], answer: 3, why: "Family and informal work is real experience when listed honestly with results." },
      { objective: "O3", q: "You are not sure of an exact number in your experience. What do you do?", options: ["Say \"about\" and be ready to explain it", "Make up a bigger number", "Add zeros", "Leave in a number you cannot explain"], answer: 0, why: "Honest estimates marked \"about\" are fine; invented numbers can cost you the job." },
      { objective: "O4", q: "How should you list a local certificate for a foreign employer?", options: ["Only its short code", "Full name, school, city, country, year and a plain note", "Only the year", "Do not list it"], answer: 1, why: "Full details and a plain note let a foreign reader understand it." },
      { objective: "O4", q: "In CEFR language levels, which is the most advanced?", options: ["A1", "B1", "A2", "C2"], answer: 3, why: "CEFR levels run from A1 (beginner) to C2 (very advanced)." },
      { objective: "O4", q: "What does the ENIC-NARIC network help with?", options: ["Recognizing qualifications from other countries", "Booking flights", "Paying recruiters", "Getting a visa"], answer: 0, why: "ENIC-NARIC centers advise on recognizing foreign qualifications." },
      { objective: "O5", q: "What are key words in a job ad?", options: ["Your passwords", "Words in another language", "The important skills, tools, titles and certificates the employer wants", "The company's address"], answer: 2, why: "Key words name what the employer is looking for." },
      { objective: "O5", q: "Which is honest tailoring?", options: ["Copying the whole ad into your CV", "Adding skills you do not have", "Hiding key words in white text", "Using the ad's true key words in your profile and experience"], answer: 3, why: "Use the ad's words only where they are true for you." },
      { objective: "O5", q: "Unless the ad asks for Word, how do you save your CV?", options: ["As a photo", "As a PDF", "As a voice note", "As a spreadsheet"], answer: 1, why: "A PDF looks the same on every device." },
      { objective: "O6", q: "What is the biggest warning sign of a fake job or illegal recruiter?", options: ["They ask you to pay to get the job", "They have a website", "They ask for an interview", "They give a job description"], answer: 0, why: "Honest employers do not charge you to get a job." },
      { objective: "O6", q: "For a job abroad through an agency, what do you check?", options: ["How many followers it has", "Whether its office is big", "That the agency is licensed by your government's labor or migrant-worker office", "Whether it promises the highest pay"], answer: 2, why: "A government license is a check you can verify yourself." },
      { objective: "O6", q: "Where should you read the rules for a work visa?", options: ["A recruiter's WhatsApp message", "A social media post", "A friend's guess", "The official government or embassy website of that country"], answer: 3, why: "Only official government and embassy pages give reliable visa rules." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Pre-Test: What Do You Already Know?", from: [1, 2, 4, 8, 11, 12, 15, 17, 18] },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and check it again.",
    criteria: [
      { name: "Right format for the country", objective: "O1", notYet: "Longer than two pages, or personal details that do not fit the country or ad, or an ID or passport number included.", meets: "Two pages or less, language, photo and personal details follow the ad and country, no ID, passport or bank numbers.", exceeds: "Can explain which source (ad, employer page, country practice) decided each choice." },
      { name: "Header and profile", objective: "O2", notYet: "Missing contact details, no country code, an unprofessional email, or no profile.", meets: "Working contact details with country code and a 3-4 line profile aimed at this job.", exceeds: "The profile includes one clear result and the job title from the ad." },
      { name: "Experience as results", objective: "O3", notYet: "Entries list duties only, or informal work is left out.", meets: "At least three entries, each starting with an action verb and including a number or concrete detail.", exceeds: "Informal or unpaid work is shown with strong results, and every number can be explained." },
      { name: "Qualifications and languages explained", objective: "O4", notYet: "Local certificates are shown only as codes; languages have no level.", meets: "Each qualification has its full name, place, country and year; each language has a level.", exceeds: "Notes which official evaluation the employer accepts, or gives a language test and year." },
      { name: "Tailored to the ad", objective: "O5", notYet: "The CV could be for any job, or uses text in pictures or hidden key words.", meets: "At least five true key words from the ad, simple headings, saved as a clearly named PDF.", exceeds: "Learner can point to where each key word appears and why it is true." },
      { name: "Checked before sending", objective: "O6", notYet: "Checklist not done, or the offer asks for a fee or passport and the learner still applied.", meets: "Scam checklist completed: no fee, company found independently, passport and originals kept.", exceeds: "For a job abroad, the agency's license was checked with the government office." }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish with a completed CV that meets the rubric",
      "Learners who send at least one tailored application within 30 days (follow-up survey)",
      "Learners who get an interview or job offer within 90 days, as reported to the program",
      "Learners who report spotting and avoiding a fake job or fee-charging recruiter"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A phone or computer with a free word processor (Google Docs, Microsoft Word online or LibreOffice Writer), or paper and pen for drafts",
      "One or two real job ads the learner is interested in",
      "Copies of the learner's certificates for reference only (never uploaded to practice tools or shared in class)",
      "About two hours in total, in short sessions: lessons, practice, checks and the final CV"
    ],
    facilitatorNotes: [
      "Ask learners to bring a real job ad; tailoring works best on an ad they actually want.",
      "Pair learners to read each other's profile aloud and give one improvement each.",
      "Help learners with informal work find their results; many undervalue market, farm and family-business experience.",
      "Do not give visa, immigration or legal advice; point learners to official government and embassy pages and to licensed agencies.",
      "Check every final CV for ID, passport and bank numbers before it leaves the room, and score it with the rubric one row at a time."
    ]
  }
};
