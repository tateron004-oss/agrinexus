"use strict";

// Koach Learn course: Workforce Development -> "AI Data Annotation and Online Micro-Jobs" (wave 3 brief, 30 October 2026).
// For young people and adults in the US and abroad (Kenya, Nigeria, Ghana, Senegal, the Philippines, India, Mexico, Colombia, Morocco, Egypt)
// who want to earn from AI data work: what the tasks are, labeling to a written guideline, qualification tests and quality scores,
// checking a platform is real, fake-job and task scams, protecting your own data and the task data, and working out real hourly pay.
// Platforms named were checked on their own pages on 30 October 2026 (Mindrift says Toloka's tasks moved there; Appen's contributor
// site is CrowdGen; Amazon Mechanical Turk's worker site showed a closure notice, so it is NOT named). No pay rates are given:
// pay differs by project, country and platform, and learners read it on the platform's own pages.

const MINDRIFT = { name: "Mindrift (AI training tasks; says Toloka tasks moved here and joining is free)", url: "https://mindrift.ai/welcome" };
const CROWDGEN = { name: "CrowdGen by Appen (contributor projects; says it never asks you to pay to join)", url: "https://crowdgen.com/" };
const CLICKWORKER = { name: "Clickworker (microtasks such as AI training data, surveys and voice recordings)", url: "https://www.clickworker.com/clickworker/" };
const SAMA = { name: "Sama careers (offices in Nairobi, Kenya, and Gulu and Kampala, Uganda)", url: "https://www.sama.com/careers" };
const FTC_JOBS = { name: "US Federal Trade Commission: Job scams", url: "https://consumer.ftc.gov/articles/job-scams" };
const ILO_PLATFORMS = { name: "ILO: The role of digital labour platforms in transforming the world of work", url: "https://www.ilo.org/publications/flagship-reports/role-digital-labour-platforms-transforming-world-work" };
const NDPC = { name: "Nigeria Data Protection Commission", url: "https://ndpc.gov.ng/" };

module.exports = {
  id: "data-annotation-online-work",
  category: "Workforce Development",
  name: "AI Data Annotation and Online Micro-Jobs",
  skills: "Recognizing data annotation and micro-task work, Labeling data by following a guideline, Passing qualification tests and keeping quality high, Checking a platform is real and refusing fake jobs, Protecting personal and task data, Working out your real hourly pay",
  outcome: "label data for AI by following a written guideline, check that an online work platform is real before you join, protect your own data and the data you see, and work out what the work really pays you per hour.",
  about: [
    "AI tools learn from examples that people prepare: photos with boxes drawn around cars, sentences marked as positive or negative, recordings typed out, and AI answers rated from best to worst. This work is called data annotation or data labeling. Many people do it online as small paid tasks, called micro-jobs, from Nairobi to Lagos, Accra, Dakar, Manila, Hyderabad, Bogotá, Mexico City, Casablanca, Cairo and towns across the US.",
    "This course is for young people and adults with a phone or computer who want to try this work safely. You will learn the main kinds of tasks, practice labeling with a written guideline on paper, learn how qualification tests and quality scores work, check that a platform is real, refuse the many fake \"AI jobs\" that ask for money, protect private data, and work out your real hourly pay.",
    "Be honest with yourself about the money. Pay is uneven: some weeks there are many tasks and some weeks very few, and time spent on tests and searching for tasks is often unpaid. A real platform never asks you to pay to start. The course does not promise income; it helps you decide with clear eyes.",
    "Each lesson takes about five minutes, with a \"Try it now\" task you can do on paper or a phone. There are 2 quick questions after each lesson, a knowledge check after each chapter and a 20-question quiz at the end."
  ],
  finalTask: "Make your micro-work starter plan: (1) a practice set of 10 items you labeled with your own one-page guideline, with the unclear items flagged; (2) two platforms you checked, with what you found for each check (official site, free to join, your country accepted, how pay is sent); (3) your scam stop-list of five warning signs; (4) your three data-safety rules; and (5) a weekly time-and-pay log with a 4-week plan and dates, including how you will work out your real hourly pay.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Young people and adults in the US and abroad (Kenya, Nigeria, Ghana, Senegal, Côte d'Ivoire, the Philippines, India, Mexico, Colombia, Morocco, Egypt): school leavers, graduates, parents at home, people looking for extra income, and job seekers who keep seeing \"earn with AI\" adverts. The course is translated into ten languages.",
    startingPoint: "Can use a smartphone, WhatsApp and social media; some have a laptop or use a cyber café or library. Most have never labeled data, read a task guideline or taken a qualification test. Many have seen task-based \"work from home\" offers that asked for a deposit.",
    gap: "Learners need to know what real AI data work looks like, label carefully to a guideline, judge whether a platform is real, protect private data, and work out real pay, so they can earn where real work exists and avoid losing money and identity documents to fake jobs.",
    constraints: [
      "Reading level: plain words and short sentences; translated into ten languages",
      "Devices: often a smartphone only; data is costly; power can be unreliable",
      "Time: 4 to 6 minute lessons; practice on paper",
      "Platforms, the countries they accept, payment methods and pay change often: learners check each platform's own pages",
      "Never pay to start; never share passwords, PINs, one-time codes or ID documents outside a platform's official verification"
    ],
    prerequisites: "Basic phone or computer skills and an email address. Careful reading in the language of the tasks."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Given a list of eight online tasks", action: "identify which ones are data annotation or micro-tasks and name the skill each one needs", standard: "getting at least 6 of 8 right" },
    { id: "O2", condition: "Given a short labeling guideline and ten sample items", action: "label each item by following the guideline and flag the unclear ones", standard: "matching the answer key on at least 8 of 10" },
    { id: "O3", condition: "Before you start a qualification test", action: "list the steps you will take to read the guideline, practice and check your own work", standard: "so you can explain how you will keep your quality score high" },
    { id: "O4", condition: "Given a platform or a job offer", action: "check that it is real and name any fake-job warning signs", standard: "before you pay anything or share any documents" },
    { id: "O5", condition: "While you do tasks", action: "keep your own private details and the task data private", standard: "sharing no passwords, codes or task content outside the platform" },
    { id: "O6", condition: "After a week of practice or real tasks", action: "record your time and pay and work out your real hourly earnings", standard: "counting unpaid time such as tests and searching for tasks" }
  ],
  chapters: [
    {
      name: "Chapter 1: Doing the work well",
      lessons: [
        {
          title: "What data annotation and micro-jobs are",
          objectives: ["O1"],
          minutes: 5,
          goal: "Identify the main kinds of AI data tasks and the skill each one needs.",
          text: [
            "AI tools learn from examples. People prepare those examples by adding labels: this photo shows a bicycle, this message is a complaint, this sentence is in Hausa, this AI answer is better than that one. Adding labels is called data annotation or data labeling.",
            "Common task types: image labeling (drawing a box around each car, or choosing a category), text labeling (is this review positive, negative or neutral?), audio work (typing what a speaker says, or recording your own voice reading sentences), and AI response rating (reading two answers from an AI and choosing the better one, with a reason). Some newer projects ask for experts, such as nurses, accountants or people who speak two languages well.",
            "Micro-jobs are small online tasks paid one at a time, often taking seconds to minutes. Some people do them on open platforms from home; others are hired as employees in an office, for example by companies with data teams in Nairobi or Kampala. Either way, the key skills are careful reading, following rules exactly, steady attention and honesty."
          ],
          words: [["Data annotation (data labeling)", "adding labels to photos, text, audio or video so an AI tool can learn from them."], ["Micro-job (micro-task)", "a small online task, paid one at a time."], ["AI response rating", "reading answers from an AI tool and judging which is better, using rules."], ["Transcription", "typing out exactly what is said in a recording."]],
          slides: [
            { title: "AI learns from labeled examples", bullets: ["People add the labels", "This is called data annotation or data labeling"] },
            { title: "Common task types", bullets: ["Images: boxes or categories", "Text: positive, negative or neutral", "Audio: type what is said, or record your voice", "AI answers: choose the better one, with a reason"] },
            { title: "Where the work is", bullets: ["Open online platforms, task by task", "Office jobs at data companies, as an employee", "Expert projects for people with a profession or two languages"] },
            { title: "Skills that matter most", bullets: ["Careful reading", "Following rules exactly", "Steady attention and honesty"] }
          ],
          sources: [SAMA, ILO_PLATFORMS],
          tryIt: "Write the four task types (image, text, audio, AI rating) on paper. Next to each, write one skill you already have that fits it, for example \"I speak English and Twi\" next to audio, or \"I notice small details\" next to images.",
          youCanNow: "name the main kinds of AI data tasks and match each to a skill you already have.",
          quickCheck: [
            { objective: "O1", q: "Which of these is a data annotation task?", options: ["Selling phones online", "Delivering food on a motorbike", "Drawing a box around every car in a street photo", "Repairing a laptop screen"], answer: 2, why: "Drawing boxes around objects is image labeling, one of the main annotation tasks." },
            { objective: "O1", q: "A task shows you two AI answers and asks which is better and why. What kind of task is it?", options: ["AI response rating", "Transcription", "Image labeling", "Data entry of invoices"], answer: 0, why: "Judging AI answers with a reason is AI response rating." }
          ]
        },
        {
          title: "Labeling by the guideline",
          objectives: ["O2"],
          minutes: 6,
          goal: "Label ten sample items by following a written guideline and flag the unclear ones.",
          text: [
            "Every project has a guideline: the rules for how to label. It says what each label means, gives examples, and explains the hard cases. Your opinion does not matter as much as the guideline. If the guideline says \"a person on a poster counts as a person\", you label it, even if it feels strange.",
            "Read the whole guideline before your first task, then keep it open. Look for the examples and the edge cases: the items that could fit two labels. Most mistakes happen there.",
            "When an item is truly unclear, do not guess wildly. Use the skip or flag option if there is one, or follow what the guideline says to do with unclear items. Careful and consistent beats fast."
          ],
          steps: ["Read the whole guideline once, slowly.", "Write down each label and its meaning in your own words.", "Study the examples and the edge cases.", "Label each item, checking the guideline when you are not sure.", "Flag or skip items the guideline does not cover, as it tells you to."],
          words: [["Guideline", "the written rules for a labeling project: what each label means and how to handle hard cases."], ["Edge case", "an item that could fit more than one label, so the rule must be checked."], ["Flag", "mark an item as unclear or broken so a reviewer can look at it."]],
          slides: [
            { title: "The guideline is the boss", bullets: ["It says what each label means", "It gives examples and hard cases", "Follow it, even over your own opinion"] },
            { title: "How to label well", bullets: ["Read the whole guideline first", "Keep it open while you work", "Check it whenever you are unsure"] },
            { title: "Edge cases and unclear items", bullets: ["Most mistakes happen on edge cases", "Use flag or skip as the guideline says", "Careful and consistent beats fast"] }
          ],
          tryIt: "Practice on paper. Guideline: label each message POSITIVE (happy with the service), NEGATIVE (unhappy) or NEUTRAL (a question or fact); if it is both happy and unhappy, label it by the main request. Label these ten: 1 \"Thank you, delivery was fast!\" 2 \"Where is your shop in Kumasi?\" 3 \"The bread was stale again.\" 4 \"Great price, but the box was broken. Please replace it.\" 5 \"Open on Sunday?\" 6 \"Best tailor in Dakar!\" 7 \"I waited two hours.\" 8 \"Order 2231 arrived.\" 9 \"Love it, but I need a refund for the second one.\" 10 \"asdf\". Answer key: 1 POS, 2 NEU, 3 NEG, 4 NEG, 5 NEU, 6 POS, 7 NEG, 8 NEU, 9 NEG, 10 flag (not a real message).",
          youCanNow: "read a labeling guideline, apply it to each item, and flag the items it does not cover.",
          quickCheck: [
            { objective: "O2", q: "The guideline says a cartoon person counts as a person. You think it should not. What do you do?", options: ["Follow your own opinion", "Label it as a person, as the guideline says", "Skip every cartoon", "Ask a friend on WhatsApp to decide"], answer: 1, why: "In labeling work, the guideline decides, not personal opinion." },
            { objective: "O2", q: "An item does not fit any label in the guideline. What is the best move?", options: ["Pick a label at random to save time", "Give it the most common label", "Leave the platform", "Flag or skip it as the guideline tells you"], answer: 3, why: "Flagging unclear items keeps the data clean and protects your quality score." }
          ]
        },
        {
          title: "Qualification tests and quality scores",
          objectives: ["O3"],
          minutes: 5,
          goal: "List the steps you will take to pass a qualification test and keep your quality score high.",
          text: [
            "Most projects start with a qualification test: a short set of practice tasks with known answers. You usually need a good result to get paid work. On many platforms this test time is not paid, so prepare well and take it when you are rested.",
            "After you start, the platform keeps checking your work. Some items have hidden known answers, and reviewers check samples. Together these make your quality score. A high score can bring more tasks; a low score can remove you from a project.",
            "To keep quality high: read any feedback, reread the guideline when it changes, slow down on edge cases, take breaks, and never use tricks or copy answers. Some projects do not allow AI tools to do the task for you; follow the project's rules."
          ],
          steps: ["Read the guideline fully before the test.", "Do any practice tasks offered.", "Take the test when you are rested, with steady internet.", "After each batch, read the feedback and note your mistakes.", "Reread the guideline whenever it is updated."],
          words: [["Qualification test", "a short test of practice tasks you must pass before you get paid work on a project."], ["Quality score", "a measure of how often your labels are right, used to decide whether you get more tasks."], ["Gold question", "a hidden task with a known answer, used to check your accuracy."]],
          slides: [
            { title: "Before paid work: a test", bullets: ["Practice tasks with known answers", "Often unpaid, so prepare first", "Take it rested, with steady internet"] },
            { title: "Your work is always checked", bullets: ["Hidden known answers", "Reviewers check samples", "Together they make your quality score"] },
            { title: "Keep your score high", bullets: ["Read feedback and note mistakes", "Reread the guideline when it changes", "Slow down on edge cases; take breaks", "Follow the project's rules on AI tools"] }
          ],
          tryIt: "Mark your ten practice labels from the last lesson against the answer key. Write your score out of 10, the items you got wrong, and one rule you will check more carefully next time. Then write your five-step plan for your first real qualification test.",
          youCanNow: "prepare for a qualification test, check your own work against an answer key and explain how you will keep your quality score high.",
          quickCheck: [
            { objective: "O3", q: "What is a qualification test on a labeling project?", options: ["A short set of practice tasks you must pass before paid work", "A school exam you pay for", "A loan application", "A video interview with the client's boss"], answer: 0, why: "Projects use a qualification test to check you can follow the guideline before giving paid tasks." },
            { objective: "O3", q: "Your quality score drops after a guideline update. What should you do first?", options: ["Work faster to make up for it", "Open a second account", "Reread the updated guideline and your feedback", "Ignore it; scores do not matter"], answer: 2, why: "Score drops after an update usually mean a rule changed; rereading it and the feedback fixes the cause." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Doing the work well",
        questions: [
          { objective: "O1", q: "Typing out exactly what a speaker says in a recording is called:", options: ["Image labeling", "AI response rating", "Bookkeeping", "Transcription"], answer: 3, why: "Transcription means typing exactly what is said." },
          { objective: "O1", q: "Which skill matters most for labeling work?", options: ["Fast typing with many mistakes", "Careful reading and following rules exactly", "Owning an expensive computer", "Knowing how to code"], answer: 1, why: "Labeling depends on reading the rules carefully and applying them the same way every time." },
          { objective: "O2", q: "Guideline: label a message NEGATIVE if the person is unhappy. \"The food was cold and late.\" Which label?", options: ["NEGATIVE", "POSITIVE", "NEUTRAL", "Flag it"], answer: 0, why: "The person is unhappy with the food, so the guideline says NEGATIVE." },
          { objective: "O2", q: "Where do most labeling mistakes happen?", options: ["On the first item only", "On items with clear examples", "On edge cases that could fit two labels", "On items you flag"], answer: 2, why: "Edge cases can fit more than one label, so they need a careful check of the rules." },
          { objective: "O3", q: "Which habit helps keep your quality score high?", options: ["Copying answers from a group chat", "Reading the feedback after each batch and noting mistakes", "Working without breaks for ten hours", "Guessing quickly on hard items"], answer: 1, why: "Feedback shows exactly which rules you are missing, so you can fix them." }
        ]
      }
    },
    {
      name: "Chapter 2: Working safely and earning honestly",
      lessons: [
        {
          title: "Checking a platform is real and refusing fake jobs",
          objectives: ["O4"],
          minutes: 6,
          goal: "Check whether a platform or job offer is real and name the warning signs of a fake one.",
          text: [
            "Real platforms exist. Examples that say on their own sites that joining is free include Appen's CrowdGen, Mindrift (where Toloka's tasks have moved) and Clickworker. Platforms change, close and accept different countries, so always check the platform's own website for your country, the work on offer and how pay is sent.",
            "Fake \"AI jobs\" are everywhere, on WhatsApp, Telegram, TikTok and Facebook. The biggest sign: they ask you to pay. A real job never asks you to pay a fee to join, to unlock tasks, for training, for a starter kit or to withdraw your earnings. The US Federal Trade Commission says honest employers do not charge you to get a job.",
            "Other warning signs: pay that sounds too good for easy work; a recruiter who only talks on WhatsApp or Telegram; tasks like liking videos or rating products where you must deposit money (often crypto) to continue; being paid and then asked to send part of it back; requests for your ID, bank PIN or one-time code in a chat; and pressure to decide today."
          ],
          steps: ["Find the platform's official website yourself; do not use the link in the message.", "Check that joining is free and read its pay and payment pages.", "Check that it accepts workers from your country.", "Search the platform's name with the word \"scam\" and read what others report.", "Refuse any offer that asks you to pay, deposit or send money back."],
          words: [["Task scam", "a fake job where you do simple tasks, see fake earnings, and are told to deposit money to continue or withdraw."], ["Recruiter", "a person who finds workers for a company. Real ones do not charge you."], ["Official website", "the platform's own site, which you find yourself, not through a link someone sends you."]],
          slides: [
            { title: "Real platforms: check them yourself", bullets: ["Find the official website on your own", "Joining should be free", "Check your country, the work and how pay is sent"] },
            { title: "The number one warning sign", bullets: ["They ask you to pay", "To join, unlock tasks, train or withdraw", "Real jobs never charge you to work"] },
            { title: "More warning signs", bullets: ["Too much pay for easy work", "Chat-only recruiters on WhatsApp or Telegram", "Deposits to keep going, or send money back", "Requests for your ID, PIN or code in a chat"] }
          ],
          sources: [CROWDGEN, MINDRIFT, CLICKWORKER, FTC_JOBS],
          tryIt: "Pick two platforms (from this lesson, or one a friend uses). For each, write: the official website you found yourself, whether joining is free, whether it accepts your country, how pay is sent, and anything you found when you searched its name with \"scam\". Then write your scam stop-list of five warning signs.",
          youCanNow: "check a platform on its own website and refuse a fake job by naming its warning signs.",
          quickCheck: [
            { objective: "O4", q: "A WhatsApp message offers \"AI rating work\" but asks for a $20 activation fee. What is this?", options: ["A normal start-up cost", "A fair training fee", "A warning sign of a scam: real jobs never charge you to start", "A tax payment"], answer: 2, why: "Asking you to pay to start is the clearest sign of a fake job." },
            { objective: "O4", q: "How should you open a platform you heard about?", options: ["Click the link in the recruiter's message", "Find its official website yourself and read its pages", "Ask the recruiter to send screenshots", "Download a file the recruiter sends"], answer: 1, why: "Finding the site yourself avoids fake look-alike pages and harmful files." }
          ]
        },
        {
          title: "Protecting your data and the task data",
          objectives: ["O5"],
          minutes: 5,
          goal: "Write three rules that keep your own details and the task data private.",
          text: [
            "Protect yourself. Use a strong, unique password and turn on two-step sign-in. Never share a one-time code, PIN or password with anyone, even someone who says they are from the platform. Real platforms may ask for ID to verify you, but only inside their official site or app, never in a chat.",
            "Protect the data you see. Tasks can show people's photos, voices, messages or medical and money details. Many projects make you agree to keep tasks confidential. Never screenshot tasks, post them in groups, or paste them into other AI tools unless the project allows it. Countries have data protection laws and regulators, for example the Nigeria Data Protection Commission.",
            "Protect your account. Do not share or sell your account, and do not let someone else work on it. Platforms can close accounts for this, and you may lose unpaid earnings. Use only your own real identity."
          ],
          steps: ["Use a strong, unique password and two-step sign-in.", "Share ID only inside the platform's official site or app.", "Never share codes, PINs or passwords.", "Keep task content inside the platform: no screenshots or sharing.", "Never share, rent or sell your account."],
          words: [["Two-step sign-in", "a second check, like a code sent to your phone, when you sign in."], ["Confidential", "private: you must not share it with anyone outside the work."], ["One-time code", "a short code sent to you to confirm it is really you. Never share it."]],
          slides: [
            { title: "Protect yourself", bullets: ["Strong, unique password and two-step sign-in", "Never share codes, PINs or passwords", "ID only inside the official site or app"] },
            { title: "Protect the task data", bullets: ["Tasks may show real people's details", "No screenshots, no group sharing", "No pasting into other AI tools unless allowed"] },
            { title: "Protect your account", bullets: ["Do not share, rent or sell it", "Use only your own identity", "Breaking this can cost you unpaid earnings"] }
          ],
          sources: [NDPC],
          tryIt: "Write your three data-safety rules in your own words: one for your account, one for your ID and codes, and one for the task data. Then turn on two-step sign-in for your email account if it is not on yet.",
          youCanNow: "keep your own details safe and keep the task data private.",
          quickCheck: [
            { objective: "O5", q: "Someone says they are platform support and asks for the code just sent to your phone. What do you do?", options: ["Never share it, and contact support through the official site", "Send it, because support needs it", "Send half of the code", "Post it in a group to ask"], answer: 0, why: "One-time codes are only for you; sharing one lets someone take over your account." },
            { objective: "O5", q: "A task shows a photo of a stranger's medical letter. What is right?", options: ["Screenshot it for practice", "Share it in your study group", "Paste it into a free AI tool to read it", "Label it inside the platform and share it with no one"], answer: 3, why: "Task data is confidential and stays inside the platform." }
          ]
        },
        {
          title: "Working out your real pay and making a plan",
          objectives: ["O6"],
          minutes: 6,
          goal: "Record your time and pay and work out your real hourly earnings.",
          text: [
            "Pay for micro-jobs is uneven. It differs by project, country and platform; some weeks there are many tasks and some weeks none. Time on tests, training and searching for tasks is often unpaid. The International Labour Organization has studied platform work and calls for it to be decent work, with fair pay and conditions.",
            "So measure it. Keep a log of every session: date, minutes worked (including tests and waiting), tasks done, and money earned. Real hourly pay = total money earned ÷ total hours, counting all the time. Example: you earned 6 dollars in a week and spent 4 hours in total, so your real hourly pay is 1.50 dollars.",
            "Then decide. Compare it with other options near you. Many people treat micro-work as extra income or a first step toward better-paid roles, such as quality reviewer, expert projects, or a full-time job at a data company. Keep records of what you are paid, and ask your national tax authority whether and how to declare it."
          ],
          steps: ["Log each session: date, total minutes (with tests and waiting), tasks, money.", "Add up the week's money and the week's hours.", "Divide money by hours to get your real hourly pay.", "Compare it with your other options.", "Plan next month: hours, platforms, and one skill to grow."],
          words: [["Real hourly pay", "all the money you earned divided by all the hours you spent, including unpaid time."], ["Unpaid time", "time on tests, training and searching for tasks that earns nothing."], ["Log", "a simple written record you fill in each time you work."]],
          slides: [
            { title: "Pay is uneven", bullets: ["Differs by project, country and platform", "Busy weeks and empty weeks", "Tests and searching are often unpaid"] },
            { title: "Measure it with a log", bullets: ["Date, total minutes, tasks, money", "Count tests and waiting time too"] },
            { title: "Your real hourly pay", bullets: ["Total money ÷ total hours", "Example: 6 dollars ÷ 4 hours = 1.50 dollars an hour"] },
            { title: "Decide and plan", bullets: ["Compare with other options near you", "Plan hours, platforms and one skill to grow", "Keep records; ask your tax authority"] }
          ],
          sources: [ILO_PLATFORMS],
          tryIt: "Draw a log with five columns: date, minutes (all of them), tasks, money, notes. Fill one row from today's practice (money 0). Then write a 4-week plan with dates: which two platforms you will check or join, how many hours a week, and the day each week you will work out your real hourly pay.",
          youCanNow: "keep a time-and-pay log, work out your real hourly pay and plan your next four weeks.",
          quickCheck: [
            { objective: "O6", q: "You earned 10 dollars and spent 5 hours in total, including 1 unpaid test hour. What is your real hourly pay?", options: ["10 dollars an hour", "2.50 dollars an hour", "2 dollars an hour", "5 dollars an hour"], answer: 2, why: "Real hourly pay counts all the time: 10 dollars ÷ 5 hours = 2 dollars an hour." },
            { objective: "O6", q: "What should your work log include?", options: ["Only the money you earned", "Only the days you were paid", "Your password, so you remember it", "Date, all minutes including tests and waiting, tasks and money"], answer: 3, why: "Counting every minute and every payment shows what the work really pays." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Working safely and earning honestly",
        questions: [
          { objective: "O4", q: "A \"task job\" on Telegram shows your earnings growing but says you must deposit crypto to withdraw. What is it?", options: ["A normal bonus system", "A task scam", "A bank fee", "A government tax"], answer: 1, why: "Asking for a deposit to continue or withdraw is the pattern of a task scam." },
          { objective: "O4", q: "Which is the best first check of a platform?", options: ["Find its official website yourself and confirm joining is free", "Trust the recruiter's profile photo", "Count the likes on its advert", "Pay a small fee to test it"], answer: 0, why: "The official site, found by you, shows whether it is free, real and open to your country." },
          { objective: "O5", q: "A real platform asks you to verify your ID. Where should you upload it?", options: ["In a WhatsApp chat with the recruiter", "By email to any address they give", "Only inside the platform's official site or app", "In a public group"], answer: 2, why: "ID belongs only in the official verification step, never in a chat." },
          { objective: "O5", q: "A friend offers to pay to use your platform account. What do you do?", options: ["Rent it for one month", "Share the password but keep the earnings", "Let them use it at night only", "Refuse: sharing or selling an account breaks the rules and risks your earnings"], answer: 3, why: "Platforms close shared accounts, and you can lose unpaid earnings." },
          { objective: "O6", q: "Why count unpaid test time in your log?", options: ["To see your real hourly pay", "Because the platform pays for it later", "It is not needed", "To share it online"], answer: 0, why: "Unpaid time lowers what you really earn per hour, so it must be counted." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: AI Data Annotation and Online Micro-Jobs",
    questions: [
      { objective: "O1", q: "What is data annotation?", options: ["Fixing computers", "Adding labels to data so AI tools can learn from it", "Writing news articles", "Selling data to banks"], answer: 1, why: "Annotation means adding labels to photos, text, audio or video for AI training." },
      { objective: "O1", q: "Which is a micro-job?", options: ["A two-year contract as a manager", "Owning a shop", "Choosing the category of a product photo, paid per task", "Driving a bus"], answer: 2, why: "Micro-jobs are small online tasks paid one at a time." },
      { objective: "O1", q: "You speak Yoruba and English well. Which task might fit you?", options: ["Typing out or checking Yoruba recordings", "Repairing phones", "Driving deliveries", "Building houses"], answer: 0, why: "Language skills fit audio and text tasks in that language." },
      { objective: "O2", q: "What does a project guideline do?", options: ["Sets your pay", "Lists your friends' scores", "Gives you a password", "Says what each label means and how to handle hard cases"], answer: 3, why: "The guideline is the set of rules for how to label." },
      { objective: "O2", q: "Guideline: label NEUTRAL if the message is only a question or fact. \"What time do you close?\" Which label?", options: ["POSITIVE", "NEGATIVE", "NEUTRAL", "Flag it"], answer: 2, why: "It is only a question, so the guideline says NEUTRAL." },
      { objective: "O2", q: "\"Nice shoes, but one is torn. I want a refund.\" The guideline says to label mixed messages by the main request. Which label?", options: ["NEGATIVE", "POSITIVE", "NEUTRAL", "Skip without reading"], answer: 0, why: "The main request is a refund for a torn shoe, so it is NEGATIVE." },
      { objective: "O2", q: "An audio clip is only silence. What do you do?", options: ["Type something to finish fast", "Flag or skip it as the guideline says", "Copy another worker's answer", "Leave the project"], answer: 1, why: "Broken or empty items are flagged, not guessed." },
      { objective: "O3", q: "What is a gold question?", options: ["A bonus payment", "A question for gold sellers", "A hidden task with a known answer that checks your accuracy", "A paid test you buy"], answer: 2, why: "Platforms hide known-answer tasks among your work to measure quality." },
      { objective: "O3", q: "When is the best time to take a qualification test?", options: ["Right away, without reading anything", "After reading the guideline and practicing, when rested with steady internet", "Late at night with weak data", "While doing another job"], answer: 1, why: "Preparation and good conditions give you the best chance, and test time is often unpaid." },
      { objective: "O3", q: "What can happen if your quality score stays low?", options: ["You get more tasks", "Your pay doubles", "Nothing ever happens", "You can be removed from the project"], answer: 3, why: "Platforms use quality scores to decide who keeps getting tasks." },
      { objective: "O3", q: "The project rules say not to use AI tools to do the tasks. What do you do?", options: ["Follow the rule and do the tasks yourself", "Use AI tools secretly", "Ask a friend to use AI for you", "Stop reading the rules"], answer: 0, why: "Breaking project rules can cost you the project and your account." },
      { objective: "O4", q: "Which offer is most likely real?", options: ["\"Pay 5,000 naira to unlock tasks\"", "\"Deposit crypto to withdraw your earnings\"", "A platform you found yourself whose site says joining is free", "\"Earn 200 dollars a day liking videos\""], answer: 2, why: "Free to join and found on its official site are signs of a real platform; the others are scam patterns." },
      { objective: "O4", q: "A \"recruiter\" pays you 30 dollars and then asks you to send 25 back. What is this?", options: ["A scam: real employers do not ask you to send money back", "A normal refund", "A tax", "A training bonus"], answer: 0, why: "The FTC warns that being paid then asked to send money back is a scam." },
      { objective: "O4", q: "Which is NOT a warning sign of a fake job?", options: ["They ask for a fee to start", "They only talk on Telegram and press you to decide today", "They ask for your bank PIN", "The platform's own site explains its tasks and says joining is free"], answer: 3, why: "A clear official site with free joining is a good sign; the others are warning signs." },
      { objective: "O5", q: "Which is a strong account habit?", options: ["Using the same password everywhere", "A unique password and two-step sign-in", "Writing your password in your profile", "Sharing your login with family"], answer: 1, why: "A unique password and two-step sign-in protect your account and earnings." },
      { objective: "O5", q: "Can you post interesting task images in your WhatsApp group?", options: ["Yes, if you blur them a little", "Yes, after the task is done", "No: task data stays inside the platform", "Yes, if the group is small"], answer: 2, why: "Task data is confidential; sharing it breaks the rules and can harm real people." },
      { objective: "O5", q: "Who should ever get your one-time sign-in code?", options: ["No one", "Platform support in a chat", "A recruiter", "A friend who helps you"], answer: 0, why: "One-time codes are only for you; anyone asking for one is trying to take your account." },
      { objective: "O6", q: "You earned 12 dollars in a week and spent 8 hours in total. What is your real hourly pay?", options: ["12 dollars", "8 dollars", "4 dollars", "1.50 dollars"], answer: 3, why: "12 dollars ÷ 8 hours = 1.50 dollars an hour." },
      { objective: "O6", q: "Which statement about micro-job pay is true?", options: ["It is the same every week", "It is uneven and differs by project, country and platform", "It is always more than a local job", "It is set by the government"], answer: 1, why: "Task supply and pay rates change, so pay is uneven." },
      { objective: "O6", q: "You keep records of your online earnings. Who do you ask about declaring them for tax?", options: ["A recruiter on Telegram", "No one, online pay is never taxed", "Your national tax authority", "The other workers in your group"], answer: 2, why: "Tax rules differ by country, so the national tax authority is the right source." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  // pre-test: these quiz questions, taken before Lesson 1, so the quiz shows how much each learner gained
  pretest: { title: "Pre-Test: What Do You Already Know?", from: [0, 4, 7, 9, 11, 12, 15, 17] },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      { name: "Practice labels", objective: "O2", notYet: "Fewer than 8 of 10 match the key, or unclear items were guessed.", meets: "At least 8 of 10 match the key and the unclear item is flagged.", exceeds: "10 of 10, with a one-page guideline in your own words that covers the edge cases." },
      { name: "Test and quality plan", objective: "O3", notYet: "No plan, or the plan is only \"work fast\".", meets: "Five steps: read the guideline, practice, test rested, read feedback, reread updates.", exceeds: "Also lists your own mistakes from practice and the rule you will check for each." },
      { name: "Platforms checked", objective: "O4", notYet: "A platform was chosen from a link in a message, or a fee was accepted.", meets: "Two platforms checked on official sites: free to join, your country, how pay is sent.", exceeds: "Also includes a scam search for each and a five-sign scam stop-list in your own words." },
      { name: "Data-safety rules", objective: "O5", notYet: "Rules are missing, or the plan shares codes, ID or task data in a chat.", meets: "Three clear rules: account, ID and codes, and task data.", exceeds: "Two-step sign-in is turned on and the rules say what to do if someone asks for a code." },
      { name: "Pay log and plan", objective: "O6", notYet: "No log, or the log counts only paid time.", meets: "A log that counts all minutes, the real hourly pay formula, and a 4-week plan with dates.", exceeds: "Also compares the result with another option and names one skill to grow for better-paid work." }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Learners who pass a qualification test on a real, free platform within 60 days (follow-up survey)",
      "Learners who report paying a fee or deposit to an \"online job\" after the course (target: none)",
      "Learners who can state their real hourly pay from their own log at the 30-day follow-up",
      "Learners who move to a better-paid role (reviewer, expert project, or a data company job) within 6 months"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A smartphone or computer with internet (practice works on paper)",
      "Paper and pen for labeling practice, the scam stop-list and the pay log",
      "An email account with two-step sign-in",
      "About 60 to 75 minutes in total, in short sessions"
    ],
    facilitatorNotes: [
      "Take the pre-test together. Then do the labeling practice as a group and compare answers: disagreements are the best way to teach edge cases.",
      "Bring real scam messages (with names and numbers removed) and let the group find the warning signs.",
      "Do not recommend one platform as a sure income. Platforms change and accept different countries; learners check each one's own pages.",
      "Never collect learners' passwords, codes or ID documents, and do not ask them to sign up during the session if they are not ready.",
      "Be honest about pay. Help learners compare micro-work with local options and with training for better-paid roles.",
      "Score the final task with the rubric and give feedback on one Not yet row at a time."
    ]
  }
};
