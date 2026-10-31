"use strict";

// Koach Learn course: Workforce Development -> "Applying for Government Jobs (USAJOBS)" (wave 3, 30 October 2026). Also placed in Veterans (military) and Re-Entry (see catalog.js).
// Skill-building and ADDIE: by the end the learner has a practice federal application packet for one real announcement.
// Facts checked on official pages (30 October 2026): usajobs.gov hiring paths and the Veterans and Open to the public paths; opm.gov General Schedule (15 grades, 10 steps, locality pay); consumer.ftc.gov job scams.
// Not confirmed online (the USAJOBS Help Center and federalregister.gov blocked the fetch): resume page limits, the Fair Chance Act details, exact status names. The course tells learners to check the announcement and USAJOBS Help Center instead of stating them as fixed rules.

module.exports = {
  id: "usajobs-government-jobs",
  category: "Workforce Development",
  name: "Applying for Government Jobs (USAJOBS)",
  skills: "Finding your hiring path, Searching USAJOBS, Reading a job announcement, Writing a federal resume, Answering the questionnaire honestly, Tracking your application safely",
  outcome: "apply for a real U.S. federal job on USAJOBS: find the jobs open to you, read the announcement, write a federal resume that matches it, gather the right documents, answer the questionnaire honestly and track your application without falling for scams.",
  about: [
    "The U.S. federal government hires people in every state and in many kinds of work: office and customer service, trades and maintenance, warehouses, health care, parks, IT and more. Almost all of these jobs are posted on USAJOBS (usajobs.gov), the official site run by the Office of Personnel Management (OPM). It is free to use.",
    "Federal applications are different from most private jobs. The announcement is long, the resume needs more detail, there is often a questionnaire, and special hiring paths help veterans, military spouses, people with disabilities, students and recent graduates. This course walks you through each step with a real announcement of your choice.",
    "This course is for job seekers, veterans, people coming home from prison, young adults and anyone changing careers. It prepares you to apply; it does not get you hired or decide whether you qualify. Each agency decides that from your application. Each lesson takes about five minutes, ends with a quick check and a \"Try it now\" task, and builds your practice application packet."
  ],
  finalTask: "Build a practice application packet for one real USAJOBS announcement you could apply for: (1) a one-page announcement summary (who can apply, grade and pay, closing date, duties, specialized experience, required documents); (2) at least two federal resume job entries that match the announcement, with dates, hours per week, duties and results; (3) a checklist of every required document and where you will get it; (4) an application log with the job number, the date you applied and the next check date.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "U.S. adults and young adults looking for steady work with good benefits: job seekers, veterans and military spouses, people coming home from prison, people with disabilities, students and recent graduates, and career changers. Many have never applied for a federal job, and some have short or uneven work histories.",
    startingPoint: "Can use a phone or computer for email and websites and has applied for at least one ordinary job, or has a basic resume. Most have never read a federal job announcement and do not know about hiring paths, grades or specialized experience.",
    gap: "Federal applications are often rejected for fixable reasons: applying to a job not open to you, a resume missing dates, hours or the experience the announcement asks for, a missing document such as a DD-214, or questionnaire answers the resume does not back up. Learners need a careful, step-by-step way to apply, and need to know that applying is free so they can avoid job scams.",
    constraints: [
      "Reading level: plain words and short sentences (about grade 6 to 8); federal terms explained every time",
      "Devices: a phone or a library or job-center computer; a full computer is easier for the resume",
      "Time: 4 to 6 minute lessons; the final packet takes one to two extra hours",
      "Rules change: page limits, hiring paths and required documents come from each announcement and USAJOBS, not from this course",
      "Privacy: no Social Security numbers or other private numbers in practice tasks or AI tools",
      "Some learners have criminal records or disabilities; the course teaches honest answers and where to find official rules, not legal advice"
    ],
    prerequisites: "Basic computer or phone skills and an email address. \"Resumes, LinkedIn and Interviews\" is a helpful first course but not required."
  },
  // ---- ADDIE: Design ----
  objectives: [
    { id: "O1", condition: "Given a federal job announcement and your own background", action: "identify the hiring paths you may qualify for and check whether a job is open to you", standard: "by reading the \"This job is open to\" section correctly" },
    { id: "O2", condition: "Using a phone or a library computer", action: "create a USAJOBS profile and save a job search filtered by location, pay grade and hiring path", standard: "using only the official usajobs.gov site and paying no one" },
    { id: "O3", condition: "Given a real job announcement", action: "list the duties, qualifications, grade, closing date and required documents", standard: "on a one-page summary sheet with none of the five missing" },
    { id: "O4", condition: "Given the specialized experience an announcement asks for", action: "write federal resume job entries with dates, hours per week, duties and results that match the announcement", standard: "using the announcement's key words and only true information" },
    { id: "O5", condition: "Before you submit an application", action: "answer the questionnaire honestly and collect every document the announcement requires", standard: "so each top-level answer is backed by your resume and no required document is missing" },
    { id: "O6", condition: "After you apply", action: "track your application status and spot fake government job offers", standard: "keeping a dated log and never paying a fee or sharing private numbers outside USAJOBS" }
  ],
  chapters: [
    {
      name: "Chapter 1: Finding a federal job that is open to you",
      lessons: [
        {
          title: "How federal hiring works and your hiring paths",
          objectives: ["O1"],
          minutes: 5,
          goal: "Identify the hiring paths you may qualify for and check who a job is open to.",
          text: [
            "Federal jobs are posted on USAJOBS, the official site run by the Office of Personnel Management (OPM). Each posting is called a job announcement. Each agency (for example the Department of Veterans Affairs, the Forest Service or the IRS) reads applications and decides who qualifies.",
            "Every announcement says who may apply, in a part called \"This job is open to\". USAJOBS groups applicants into hiring paths. Some of them: Open to the public (U.S. citizens and nationals), Veterans, Military spouses, Individuals with disabilities, Students, Recent graduates, Federal employees, and National Guard and reserves.",
            "If a job is open only to federal employees and you are not one, your application will not be considered, however good it is. So always check this part first. Some special paths have their own rules: for example people with disabilities may apply under Schedule A with a proof-of-disability letter, and veterans may have veterans' preference.",
            "Pay for many office and professional jobs uses the General Schedule (GS): 15 grades, from GS-1 to GS-15, each with 10 steps, plus locality pay that depends on where you work. Many trade and labor jobs use a different scale, the Federal Wage System (often shown as WG)."
          ],
          steps: ["Write down which hiring paths might fit you: public, veteran, military spouse, disability, student, recent graduate or another.", "Open an announcement and find \"This job is open to\".", "Check that at least one path listed fits you.", "If none fits, skip that job and find another."],
          words: [["USAJOBS", "the official, free website where U.S. federal jobs are posted."], ["OPM", "the Office of Personnel Management, the agency that runs federal hiring rules and USAJOBS."], ["Job announcement", "the full job posting: who can apply, duties, qualifications, pay and how to apply."], ["Hiring path", "a group of people a job is open to, such as the public, veterans or students."], ["Schedule A", "a hiring authority that lets agencies hire people with disabilities without the usual competition."], ["General Schedule (GS)", "the main federal pay scale, with grades GS-1 to GS-15 and 10 steps in each grade."], ["Locality pay", "extra pay that depends on the area where the job is."]],
          slides: [
            { title: "Where federal jobs are", bullets: ["USAJOBS (usajobs.gov), run by OPM", "Free to search and free to apply", "Each agency decides who qualifies"] },
            { title: "Hiring paths", bullets: ["Open to the public: U.S. citizens and nationals", "Veterans, military spouses, National Guard and reserves", "Individuals with disabilities (Schedule A), students, recent graduates"] },
            { title: "Check \"This job is open to\" first", bullets: ["If no path fits you, your application is not considered", "Skip that job and find one that is open to you"] },
            { title: "How federal pay is shown", bullets: ["GS: grades 1 to 15, 10 steps each, plus locality pay", "Many trade jobs use the Federal Wage System (WG)"] }
          ],
          sources: [
            { name: "USAJOBS: Explore hiring paths", url: "https://www.usajobs.gov/hiringpath/" },
            { name: "USAJOBS: Open to the public", url: "https://www.usajobs.gov/HiringPath/Public" },
            { name: "OPM: General Schedule", url: "https://www.opm.gov/policy-data-oversight/pay-leave/pay-systems/general-schedule/" }
          ],
          tryIt: "On paper, list every hiring path that might fit you and why (for example: \"Open to the public: I am a U.S. citizen\" or \"Veterans: I served in the Army\"). Then open usajobs.gov/hiringpath and read the page for each path on your list.",
          youCanNow: "name the hiring paths that may fit you and check whether a federal job is open to you before you spend time on it.",
          quickCheck: [
            { objective: "O1", q: "An announcement says \"This job is open to: Federal employees - competitive service\". You have never worked for the government. What do you do?", options: ["Apply anyway with a strong resume", "Call the agency to ask for an exception", "Skip it and find a job open to the public", "Apply under a friend's federal status"], answer: 2, why: "If no listed path fits you, the application will not be considered, so your time is better spent on a job open to you." },
            { objective: "O1", q: "Which hiring path is for U.S. citizens and nationals in general?", options: ["Special authorities", "Senior executives", "Federal employees", "Open to the public"], answer: 3, why: "\"Open to the public\" is the path for U.S. citizens and nationals in general." }
          ]
        },
        {
          title: "Setting up USAJOBS and searching smart",
          objectives: ["O2"],
          minutes: 5,
          goal: "Create a USAJOBS profile and save a filtered job search.",
          text: [
            "Go to usajobs.gov and choose to create a profile. USAJOBS uses Login.gov, the government's sign-in service, so you set up a Login.gov account with your email, a strong password and a second sign-in step (such as a code sent to your phone). Type the address yourself; do not follow links in texts or ads.",
            "In your profile you add your contact details and answer questions about yourself, such as whether you are a veteran or a current federal employee. These answers help USAJOBS show you the hiring paths that fit you. The profile is also where your resumes and documents are stored.",
            "To search, type a job word or skill (for example \"maintenance\", \"customer service\" or \"medical support\") and a city or state. Then use the filters: location, pay grade, hiring path, work schedule (full-time or part-time), and remote or telework if you want them. When the results look right, save the search so USAJOBS can email you new jobs.",
            "Using USAJOBS is free. No real government office charges you to create a profile, search or apply."
          ],
          steps: ["Type usajobs.gov into the browser yourself.", "Create a profile and sign in through Login.gov.", "Fill in your profile, including the questions about veterans' status and federal service.", "Search with a job word and a location.", "Add filters: pay grade, hiring path, schedule.", "Save the search and turn on email alerts."],
          words: [["Profile", "your USAJOBS account page, where your details, resumes and documents are kept."], ["Login.gov", "the U.S. government's sign-in service, used to sign in to USAJOBS and other government sites."], ["Filter", "a setting that narrows search results, such as location or pay grade."], ["Saved search", "a search USAJOBS remembers and uses to email you new jobs that match."], ["Telework", "working from home some or all of the time."]],
          slides: [
            { title: "Start on the real site", bullets: ["Type usajobs.gov yourself", "Sign in with Login.gov", "It is free: never pay to apply"] },
            { title: "Fill in your profile", bullets: ["Contact details", "Veteran and federal-employee questions", "Your resumes and documents live here"] },
            { title: "Search, then filter", bullets: ["A job word and a location", "Pay grade, hiring path, schedule, telework", "Save the search and turn on email alerts"] }
          ],
          sources: [
            { name: "USAJOBS", url: "https://www.usajobs.gov/" },
            { name: "Login.gov", url: "https://www.login.gov/" },
            { name: "FTC: Job scams", url: "https://consumer.ftc.gov/articles/job-scams" }
          ],
          tryIt: "Create (or sign in to) your USAJOBS profile. Run one search for a kind of job you could do in your area, add at least two filters, and save it. Write down how many jobs came up and the titles of three.",
          youCanNow: "set up a USAJOBS profile safely and save a search that sends you jobs that fit you.",
          quickCheck: [
            { objective: "O2", q: "A text says: \"Apply for federal jobs here, $25 setup fee\" with a link. What is true?", options: ["It is a scam: USAJOBS is free to use", "It is fine if the link ends in .com", "Federal jobs need a paid account", "You should pay with a gift card to be safe"], answer: 0, why: "Searching and applying for federal jobs is always free, so anyone charging a fee is a scammer." },
            { objective: "O2", q: "You want USAJOBS to tell you about new warehouse jobs near you. What do you do?", options: ["Search again every hour", "Save the search and turn on email alerts", "Ask a friend to watch the site", "Create a new profile each week"], answer: 1, why: "A saved search with alerts emails you new jobs that match your filters." }
          ]
        },
        {
          title: "Reading a federal job announcement",
          objectives: ["O3"],
          minutes: 6,
          goal: "List the duties, qualifications, grade, closing date and required documents from an announcement.",
          text: [
            "Federal announcements are long, but they follow the same pattern. Near the top: the job title, agency, location, pay and grade, the open and closing dates, and who the job is open to. Then come sections such as Duties, Requirements (conditions of employment and qualifications), How you will be evaluated, Required documents and How to apply.",
            "The most important part is Qualifications. Many jobs ask for specialized experience: experience doing the kind of work in the job, often described as one year at a level like the next lower grade. Some jobs let you qualify with education instead, or a mix of the two. Your resume must show this experience clearly, or you may be found not qualified.",
            "Conditions of employment are rules you must meet to be hired, for example U.S. citizenship, passing a background check or a drug test, or holding a driver's license. Read them before you apply.",
            "Watch the closing date. Some announcements also close early once they receive a set number of applications, so apply as soon as you are ready."
          ],
          steps: ["Copy the job title, agency, announcement number, grade and pay.", "Copy the open and closing dates.", "Read \"This job is open to\".", "Copy the specialized experience or education you need.", "List the main duties.", "List every item in Required documents."],
          words: [["Specialized experience", "experience doing the kind of work the job needs, at the level the announcement asks for."], ["Conditions of employment", "rules you must meet to be hired, like citizenship or a background check."], ["Closing date", "the last day you can apply. Some jobs close early."], ["Announcement number", "the code that identifies one job posting; use it to track your application."], ["Required documents", "the papers the announcement says you must upload, such as a resume, transcripts or a DD-214."]],
          slides: [
            { title: "The top of the announcement", bullets: ["Title, agency, location, pay and grade", "Open and closing dates", "This job is open to"] },
            { title: "Qualifications decide a lot", bullets: ["Specialized experience, education, or both", "Your resume must show it clearly"] },
            { title: "Read before you apply", bullets: ["Conditions of employment: citizenship, background check, license", "Required documents: the list you must upload"] },
            { title: "Watch the dates", bullets: ["Apply before the closing date", "Some jobs close early after enough applications"] }
          ],
          sources: [
            { name: "USAJOBS", url: "https://www.usajobs.gov/" },
            { name: "OPM: Federal hiring FAQ", url: "https://www.opm.gov/frequently-asked-questions/employment-faq/federal-hiring/" }
          ],
          tryIt: "Pick one real announcement from your saved search that is open to you. On one sheet of paper make your announcement summary: title, agency, announcement number, grade and pay, closing date, who it is open to, the specialized experience in your own words, three main duties, and every required document.",
          youCanNow: "read a federal job announcement and pull out what you need on one page.",
          quickCheck: [
            { objective: "O3", q: "Which section tells you the experience your resume must show?", options: ["How to apply", "Required documents", "Next steps", "Qualifications (specialized experience)"], answer: 3, why: "Qualifications describes the specialized experience or education you need to qualify." },
            { objective: "O3", q: "An announcement closes on Friday but says it may close early. When should you apply?", options: ["As soon as your application is ready", "On Friday at midnight", "Next week", "Only after the agency calls you"], answer: 0, why: "Jobs that may close early can stop taking applications before the closing date, so apply when you are ready." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Finding a federal job that is open to you",
        questions: [
          { objective: "O1", q: "What should you read first in any announcement to save time?", options: ["The agency's history", "\"This job is open to\"", "The benefits section", "The photo of the office"], answer: 1, why: "If no hiring path fits you, the application will not be considered, so check this first." },
          { objective: "O1", q: "A veteran wants to see which federal jobs give special consideration to veterans. Where can they look?", options: ["The Veterans hiring path on USAJOBS", "A paid job board that charges veterans", "Only military base bulletin boards", "Social media ads promising federal jobs"], answer: 0, why: "USAJOBS has a Veterans hiring path that explains veterans' preference and veteran hiring options." },
          { objective: "O2", q: "How do you sign in to USAJOBS?", options: ["With your Social Security number only", "With a code a recruiter texts you", "With a Login.gov account", "With a paid membership"], answer: 2, why: "USAJOBS uses Login.gov, the government's sign-in service." },
          { objective: "O3", q: "What does \"specialized experience\" mean in an announcement?", options: ["Any job you have ever had", "Experience doing the kind of work the job needs, at the level asked", "A college degree in any subject", "Time spent volunteering only"], answer: 1, why: "Specialized experience is experience in the kind of work the job needs, at the level the announcement asks for." },
          { objective: "O3", q: "An announcement lists \"must pass a background check\" and \"U.S. citizenship\". What are these?", options: ["Duties", "Required documents", "Benefits", "Conditions of employment"], answer: 3, why: "Rules you must meet to be hired are conditions of employment." }
        ]
      }
    },
    {
      name: "Chapter 2: Applying and following up",
      lessons: [
        {
          title: "Writing a federal resume that matches the job",
          objectives: ["O4"],
          minutes: 6,
          goal: "Write federal resume job entries that show the specialized experience the announcement asks for.",
          text: [
            "A federal resume needs more detail than most private resumes. For each job, include the job title, the employer, the start and end dates (month and year) and the hours you worked per week. Agencies use dates and hours to count your experience, so a job without them may not count.",
            "Under each job, write your duties and results in the announcement's own words. If the announcement asks for experience \"maintaining inventory records\", and you did that, write those words and add details: what you did, how much, how often and what got better. For example: \"Kept inventory records for 1,200 items using a handheld scanner; cut count errors in half in six months.\"",
            "Count all real experience: paid jobs, part-time work, military service, volunteer work and jobs held while incarcerated, such as kitchen, maintenance or clerk work. Be honest; never claim experience you do not have.",
            "Read the announcement and the USAJOBS Help Center for any page limit or format rules, because they change. You can build a resume in USAJOBS or upload your own. If you use an AI tool to help with wording, leave out private numbers and check that every line is true."
          ],
          steps: ["Copy the specialized experience sentence from your summary sheet.", "Pick the jobs where you did that kind of work.", "For each job, write the title, employer, start and end month and year, and hours per week.", "Write 3 to 5 lines of duties and results using the announcement's key words.", "Add a number to at least one line: how many, how much or how often.", "Check the announcement for page limits and read it all aloud for truth and spelling."],
          words: [["Federal resume", "a resume for a government job, with dates, hours per week and detailed duties for each job."], ["Key words", "the important words from the announcement that your resume should repeat where true."], ["Result", "what got better because of your work, best with a number."], ["Hours per week", "how many hours a week you worked in a job; agencies use it to count your experience."]],
          slides: [
            { title: "Every job entry needs", bullets: ["Title and employer", "Start and end dates: month and year", "Hours per week", "Duties and results"] },
            { title: "Match the announcement", bullets: ["Use its key words where they are true", "Add numbers: how many, how much, how often"] },
            { title: "All real experience counts", bullets: ["Paid and part-time jobs, military service", "Volunteer work and work done while incarcerated", "Never claim what you did not do"] },
            { title: "Check the rules", bullets: ["Page limits and format: read the announcement", "AI help is fine; no private numbers, every line true"] }
          ],
          sources: [
            { name: "USAJOBS", url: "https://www.usajobs.gov/" },
            { name: "OPM FedsHireVets", url: "https://www.opm.gov/fedshirevets/" }
          ],
          tryIt: "Using your announcement summary, write two federal resume job entries on paper or in a document. Each needs title, employer, month and year dates, hours per week, and 3 to 5 lines of duties and results that use the announcement's key words. Underline each key word you used.",
          youCanNow: "write federal resume entries with the dates, hours and matching experience an agency needs to count your work.",
          quickCheck: [
            { objective: "O4", q: "Which job entry is ready for a federal resume?", options: ["\"Warehouse worker, did lots of stuff\"", "\"Warehouse associate, ABC Supply, 03/2022 to 08/2024, 40 hours per week; kept inventory records for 1,200 items\"", "\"Worked at a warehouse for a while\"", "\"Hard worker, team player\""], answer: 1, why: "It has the title, employer, month and year dates, hours per week and a duty with a number." },
            { objective: "O4", q: "The announcement asks for experience \"operating a forklift\". You drove a forklift while incarcerated. What do you do?", options: ["Leave it out because it does not count", "Say you drove a forklift at a company you never worked for", "Write only \"general labor\"", "List it honestly with dates, hours and what you did"], answer: 3, why: "Real work experience counts, including work while incarcerated, when it is listed honestly with details." }
          ]
        },
        {
          title: "The questionnaire and your documents",
          objectives: ["O5"],
          minutes: 5,
          goal: "Answer the questionnaire honestly and gather every document the announcement requires.",
          text: [
            "Many announcements have an online questionnaire. You rate your own experience on tasks from the job, for example from \"I have no experience\" up to \"I am an expert or have trained others\". Your answers help decide whether you are qualified and how you rank.",
            "Answer honestly, and make sure your resume backs up every high answer. If you say you are an expert at scheduling but your resume never mentions scheduling, a reviewer may lower your score or find you not qualified.",
            "Then gather the documents in the Required documents section. Common ones: your resume; college transcripts if you qualify with education; for veterans a DD-214 that shows the character of service, plus an SF-15 or a VA letter if you claim 10-point preference; a Schedule A proof-of-disability letter if you apply under that path; and a recent personnel form (SF-50) for current or former federal employees. Upload clear, readable copies.",
            "Some forms ask about criminal history. Federal law generally limits when agencies may ask before a conditional job offer, with exceptions for some jobs such as law enforcement. When you are asked, answer truthfully: false answers can cost you the job later. Check the announcement and OPM for the current rules, and ask a re-entry or legal aid program if you have questions."
          ],
          steps: ["Read each questionnaire item slowly.", "Pick the answer that is true for you.", "For each high answer, find the resume line that backs it up; add one if the experience is real but missing.", "List every required document from your summary sheet.", "Write where you will get each one (for example: DD-214 from your records or the National Archives, transcripts from your school).", "Upload clear copies and check each one opens."],
          words: [["Questionnaire", "online questions where you rate your own experience on tasks from the job."], ["DD-214", "the paper that shows a veteran's dates and character of military service."], ["SF-15", "the form used to claim 10-point veterans' preference."], ["Veterans' preference", "extra consideration in federal hiring for eligible veterans."], ["SF-50", "a federal personnel form that shows a federal employee's job, grade and status."], ["Conditional job offer", "a job offer that depends on passing final checks, such as a background check."]],
          slides: [
            { title: "The questionnaire", bullets: ["You rate your own experience", "Answer truthfully", "Your resume must back up every high answer"] },
            { title: "Common required documents", bullets: ["Resume; transcripts if you use education", "Veterans: DD-214; SF-15 or VA letter for 10-point", "Schedule A letter; SF-50 for federal employees"] },
            { title: "Criminal history questions", bullets: ["Rules limit when agencies may ask; some jobs are exceptions", "When asked, always answer truthfully", "Check OPM and a re-entry or legal aid program"] },
            { title: "Before you submit", bullets: ["Every required document uploaded and readable", "Nothing on the list missing"] }
          ],
          sources: [
            { name: "USAJOBS: Veterans hiring path (DD-214, SF-15, VA letter)", url: "https://www.usajobs.gov/HiringPath/Veterans" },
            { name: "OPM FedsHireVets: Veterans' preference", url: "https://www.opm.gov/fedshirevets/current-veteran-employees/veterans-preference/" },
            { name: "USAJOBS: Explore hiring paths (Individuals with disabilities)", url: "https://www.usajobs.gov/hiringpath/" }
          ],
          tryIt: "Make a document checklist for your announcement with three columns: document, where I will get it, done. Then write three questionnaire-style tasks from the job's duties, rate yourself honestly on each, and next to each high rating write the resume line that proves it.",
          youCanNow: "answer a federal questionnaire honestly with your resume behind every answer, and gather all the documents the job asks for.",
          quickCheck: [
            { objective: "O5", q: "You rate yourself \"expert\" at scheduling, but your resume never mentions scheduling. What is likely?", options: ["The reviewer may lower your score or find you not qualified", "Nothing; only the questionnaire counts", "You will be hired faster", "The agency will add it to your resume for you"], answer: 0, why: "Reviewers check that your resume supports your questionnaire answers." },
            { objective: "O5", q: "A veteran is claiming 10-point preference. What should they upload, according to USAJOBS?", options: ["Only a resume", "A letter from a friend", "A DD-214 plus an SF-15 or an acceptable VA letter", "A photo of their uniform"], answer: 2, why: "USAJOBS asks for a DD-214, and an SF-15 or other acceptable proof such as a VA letter for 10-point preference." }
          ]
        },
        {
          title: "Submitting, tracking and staying safe",
          objectives: ["O6", "O4"],
          minutes: 5,
          goal: "Track your application status in USAJOBS and spot fake government job offers.",
          text: [
            "When you apply, USAJOBS sends you to the agency's application system to finish. Make sure you complete every step and get a confirmation; leaving after the questionnaire is a common reason an application never arrives.",
            "Track every application in your USAJOBS profile. The status changes as the agency works: for example received, being reviewed, referred to the hiring manager or not referred, and later selected or not selected. Federal hiring can take weeks or months, so keep applying to other jobs while you wait. If you are not referred, read the notice and fix that part (often missing experience, dates or documents) for the next application.",
            "Keep a simple log: job title, announcement number, agency, date applied, status and the next date you will check. Check about once a week.",
            "Watch for scams. Applying for federal jobs is always free. Be careful with anyone who promises a government job for a fee, asks for payment or gift cards, asks for your Social Security or bank number by text or chat, or interviews you only by text. Real federal emails and websites end in .gov or .mil. If in doubt, type usajobs.gov yourself and check there."
          ],
          steps: ["Finish every step in the agency system and save the confirmation.", "Start your application log.", "Check the status in USAJOBS about once a week.", "If not referred, read why and fix it next time.", "Never pay, and never send private numbers by text or chat."],
          words: [["Referred", "your application was sent to the hiring manager to consider."], ["Not referred", "your application was not sent on, often because the agency found you not qualified or other applicants ranked higher."], ["Application log", "your own list of jobs applied for, with dates and status."], [".gov", "the web address ending used only by U.S. government agencies."]],
          slides: [
            { title: "Finish the application", bullets: ["USAJOBS sends you to the agency system", "Complete every step", "Save the confirmation"] },
            { title: "Track it", bullets: ["Status in your USAJOBS profile", "Referred, not referred, selected, not selected", "Keep applying while you wait"] },
            { title: "Your application log", bullets: ["Title, number, agency, date applied", "Status and next check date"] },
            { title: "Scam warning signs", bullets: ["A fee to get or apply for a government job", "Gift cards, bank or Social Security numbers by text", "Text-only interviews; addresses not ending in .gov or .mil"] }
          ],
          sources: [
            { name: "FTC: Job scams (federal jobs are free to apply for)", url: "https://consumer.ftc.gov/articles/job-scams" },
            { name: "USAJOBS", url: "https://www.usajobs.gov/" }
          ],
          tryIt: "Final task: put your practice application packet together for your announcement: the one-page summary, at least two matching resume entries, the document checklist and an application log with the job number, the date you will apply and the next check date. Then read the packet against the rubric and fix one weak part.",
          youCanNow: "put together a complete federal application, track it, and keep yourself safe from fake job offers.",
          quickCheck: [
            { objective: "O6", q: "Someone on social media offers you a guaranteed job at a federal agency for a $200 processing fee. What is this?", options: ["A normal federal hiring step", "A way to skip the line legally", "A scam: federal jobs are free to apply for", "A fee USAJOBS charges veterans"], answer: 2, why: "The FTC says applying for federal jobs is always free and anyone charging for one is a scammer." },
            { objective: "O6", q: "Your USAJOBS status says \"Not referred\". What is the best next step?", options: ["Stop applying for federal jobs", "Read the notice and fix the weak part in your next application", "Pay someone to change your status", "Apply again to the same closed job"], answer: 1, why: "The notice often shows what was missing, so you can fix it next time." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Applying and following up",
        questions: [
          { objective: "O4", q: "Why does a federal resume need start and end dates and hours per week?", options: ["So the agency can count your experience", "Because it makes the resume look longer", "To show your age", "It does not need them"], answer: 0, why: "Agencies use dates and hours to count how much qualifying experience you have." },
          { objective: "O4", q: "How should you use the announcement's key words in your resume?", options: ["Copy the whole announcement into your resume", "Avoid them so you sound original", "Use them for experience you really have", "Use them even for things you never did"], answer: 2, why: "Using the key words for real experience helps reviewers match your resume to the job." },
          { objective: "O5", q: "What should you do before you submit an application?", options: ["Skip the questionnaire", "Upload only the documents you already have", "Rate yourself \"expert\" on everything", "Check that every required document is uploaded and readable"], answer: 3, why: "A missing or unreadable required document can stop your application." },
          { objective: "O6", q: "Which web address is most likely a real federal agency?", options: ["fedjobs-hiring.com", "agency-careers.net", "a link in a text from an unknown number", "an address ending in .gov"], answer: 3, why: "Only U.S. government agencies use .gov addresses." },
          { objective: "O6", q: "What should your application log include?", options: ["Your Social Security number", "The job title, announcement number, date applied, status and next check date", "Your Login.gov password", "Only the agency name"], answer: 1, why: "These details let you track each application without writing down private numbers." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Applying for Government Jobs (USAJOBS)",
    questions: [
      { objective: "O1", q: "What is USAJOBS?", options: ["A private staffing agency", "A paid job board", "The official, free site where federal jobs are posted", "A union website"], answer: 2, why: "USAJOBS is the federal government's official job site, run by OPM, and it is free." },
      { objective: "O1", q: "Maria is a U.S. citizen who has never worked for the government. Which jobs can she apply to?", options: ["Jobs open to the public", "Only jobs open to federal employees", "Only Senior executive jobs", "Any job, whoever it is open to"], answer: 0, why: "\"Open to the public\" jobs are for U.S. citizens and nationals in general." },
      { objective: "O1", q: "What does GS-7 mean on an announcement?", options: ["A job in the state of Georgia", "Grade 7 on the General Schedule pay scale", "Seven years of experience needed", "Seven open positions"], answer: 1, why: "GS is the General Schedule; it has grades 1 to 15, and 7 is the grade." },
      { objective: "O2", q: "What is the safest way to get to USAJOBS?", options: ["Click a link in a text from a recruiter", "Click a search ad promising government jobs", "Use a link in a social media post", "Type usajobs.gov into the browser yourself"], answer: 3, why: "Typing the official address yourself avoids fake sites." },
      { objective: "O2", q: "Which filters help you find jobs that fit you?", options: ["Location, pay grade and hiring path", "Agency logo colors", "The number of words in the title", "None; filters hide good jobs"], answer: 0, why: "Location, grade and hiring path narrow results to jobs you can and want to do." },
      { objective: "O2", q: "Why do you answer the veteran and federal-employee questions in your USAJOBS profile?", options: ["To pay a lower fee", "So USAJOBS can show the hiring paths that fit you", "Because they are printed on your resume", "So recruiters can text you"], answer: 1, why: "Profile answers help USAJOBS match you with hiring paths; there are no fees." },
      { objective: "O3", q: "Where do you find the list of papers you must upload?", options: ["Duties", "The agency's home page", "Required documents", "This job is open to"], answer: 2, why: "The Required documents section lists what you must upload." },
      { objective: "O3", q: "Which of these is a condition of employment?", options: ["Answering phones", "Passing a background check", "Health insurance", "Paid leave"], answer: 1, why: "A background check is a rule you must meet to be hired, so it is a condition of employment." },
      { objective: "O3", q: "Which five items belong on your announcement summary sheet?", options: ["Agency logo, photos, address, map, history", "Your password, SSN, bank, birthday, address", "Salary only", "Duties, qualifications, grade, closing date, required documents"], answer: 3, why: "These five tell you what the job is, whether you qualify, when to apply and what to upload." },
      { objective: "O3", q: "An announcement says it may close early. What does that mean?", options: ["It may stop taking applications before the closing date", "It will stay open longer", "Only veterans may apply", "The job has been filled already"], answer: 0, why: "Some jobs close once they receive a set number of applications." },
      { objective: "O4", q: "Which line is strongest for a federal resume?", options: ["\"Did customer service\"", "\"Answered about 60 customer calls a day and solved most on the first call\"", "\"People person\"", "\"Responsible for stuff\""], answer: 1, why: "It shows a real duty with a number, which helps a reviewer see your experience." },
      { objective: "O4", q: "James did kitchen work for two years while incarcerated. The job asks for food service experience. What should he do?", options: ["Leave it off", "Say it was at a restaurant", "List it only as \"unemployed\"", "List it honestly with the dates, hours and duties"], answer: 3, why: "Real work counts wherever it happened, when it is listed honestly with details." },
      { objective: "O4", q: "How do you find out a resume's page limit or format rules?", options: ["Read the announcement and the USAJOBS Help Center", "Guess: longer is always better", "Ask a stranger online", "There are never any rules"], answer: 0, why: "Rules can change, so the announcement and USAJOBS are the places to check." },
      { objective: "O4", q: "Which piece of information does every federal resume job entry need?", options: ["Your supervisor's home address", "Your Social Security number", "Hours worked per week", "Your photo"], answer: 2, why: "Hours per week, with dates, let the agency count your experience." },
      { objective: "O5", q: "How should you answer the questionnaire?", options: ["Pick the highest answer every time", "Answer truthfully, with your resume backing each high answer", "Skip any question you find hard", "Copy a friend's answers"], answer: 1, why: "Honest answers that your resume supports are what reviewers check." },
      { objective: "O5", q: "Who needs to upload a Schedule A proof-of-disability letter?", options: ["Everyone", "Only students", "Only current federal employees", "People applying through the Individuals with disabilities path"], answer: 3, why: "The Schedule A letter supports applications under the Individuals with disabilities hiring path." },
      { objective: "O5", q: "A form asks about your criminal history after a conditional offer. What do you do?", options: ["Answer truthfully", "Leave it blank", "Give a false answer", "Ask a friend to answer for you"], answer: 0, why: "False answers can cost you the job later; honest answers are required." },
      { objective: "O6", q: "Where do you check your application status?", options: ["In a text from an unknown number", "In your USAJOBS profile", "On a paid tracking site", "Only by visiting the agency in person"], answer: 1, why: "USAJOBS shows the status of your applications in your profile." },
      { objective: "O6", q: "Which is a warning sign of a fake federal job offer?", options: ["The email ends in .gov", "The posting is on USAJOBS", "They ask for a fee or gift cards", "The announcement has a closing date"], answer: 2, why: "Real federal jobs never charge you; fees and gift cards are signs of a scam." },
      { objective: "O6", q: "You have applied and are waiting. What is the best plan?", options: ["Stop looking until you hear back", "Call the agency every day", "Pay to speed it up", "Keep applying to other jobs and check your status weekly"], answer: 3, why: "Federal hiring can take weeks or months, so keep applying and check regularly." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Pre-Test: What Do You Already Know?", from: [0, 1, 3, 6, 8, 11, 13, 14, 18] },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and check it again.",
    criteria: [
      { name: "Job is open to you", objective: "O1", notYet: "The chosen job is not open to any hiring path that fits the learner.", meets: "The job is open to a hiring path that fits, and the summary names it.", exceeds: "Also lists other paths the learner may use and one more open job." },
      { name: "Announcement summary", objective: "O3", notYet: "One or more of duties, qualifications, grade, closing date or required documents is missing.", meets: "All five are on one page in the learner's own words.", exceeds: "Also notes conditions of employment and whether the job may close early." },
      { name: "Resume entries", objective: "O4", notYet: "Entries lack month and year dates, hours per week or duties that match the job.", meets: "Two or more entries with title, employer, dates, hours and duties using the announcement's key words.", exceeds: "Every entry has at least one result with a number, and all lines are true and clear." },
      { name: "Documents and questionnaire", objective: "O5", notYet: "A required document is missing from the checklist, or a high self-rating has no resume line behind it.", meets: "Every required document is listed with where to get it, and each high rating is backed by a resume line.", exceeds: "Documents are already gathered and checked as readable." },
      { name: "Tracking and safety", objective: "O6", notYet: "No log, or the log or packet contains private numbers.", meets: "A log with job number, dates, status and next check date; no private numbers.", exceeds: "The learner can name three scam warning signs and how to check a job on usajobs.gov." }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Learners who submit at least one real USAJOBS application within 30 days (follow-up survey)",
      "Learners who are referred to a hiring manager, interviewed or hired within 6 months",
      "Partner programs (veteran, re-entry and job centers) report fewer applications rejected for missing documents or details"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A phone or computer with internet; a computer is easier for writing the resume",
      "An email address and a phone for the Login.gov second sign-in step",
      "Paper and pen, or a free document editor such as Google Docs or Microsoft Word online",
      "Any existing resume, and copies of documents such as a DD-214, transcripts or a Schedule A letter if the learner has them",
      "About 60 minutes for lessons and checks, plus one to two hours for the final packet"
    ],
    facilitatorNotes: [
      "In a job center, veteran program or re-entry program, take the pre-test together, then do one chapter per session with a real announcement on the screen.",
      "Have each learner pick an announcement that is truly open to them before Lesson 3; it saves rework.",
      "Pair learners to check each other's resume entries for dates, hours and key words.",
      "Never collect Social Security numbers or other private numbers; learners keep their own documents.",
      "Rules on page limits, hiring paths and criminal history questions change: check the announcement, USAJOBS and OPM before each group, and send legal questions to a legal aid or re-entry program.",
      "Score the final packet with the rubric and give feedback on one Not yet row at a time."
    ]
  }
};
