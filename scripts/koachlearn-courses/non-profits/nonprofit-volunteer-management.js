"use strict";

// Koach Learn course: Non Profits -> "Volunteer Management" (new people-and-leadership course the owner asked for on 28 October 2026). Skill-building course: by the end the
// student can DO the skill in `outcome`. Two chapters of three micro-lessons; a knowledge check closes each chapter; a 20-question quiz closes the course. See scripts/koachlearn-export.js for how it is built.
// Focus is managing volunteers; AI-based recruiting is covered by nonprofit-ai-volunteer-recruitment. IRS Publication 526 (volunteer time not deductible; some out-of-pocket costs may be) checked 28 October 2026.
//
// lesson: { title, minutes, goal, text: [paragraph], steps: [step] (optional), words: [[term, means]], slides: [{ title, bullets }], tryIt, youCanNow }
// question: { q, options: [4], answer: index of the right option, why }

module.exports = {
  id: "nonprofit-volunteer-management",
  category: "Non Profits",
  name: "Volunteer Management",
  skills: "Writing volunteer role descriptions, Recruiting and screening volunteers, Onboarding and training, Scheduling and supervising, Recognition and retention, Tracking volunteer hours",
  outcome: "run a volunteer program from start to finish: write a clear role description, recruit and safely screen volunteers, onboard and train them, schedule and supervise them, thank them in ways that keep them coming back, and track their hours.",
  about: [
    "This course is for volunteer coordinators, nonprofit staff, church and ministry leaders, school parent groups, youth sports leagues, food banks and anyone who depends on volunteers.",
    "Volunteers give their time for free, so how you manage them decides whether they come back. You will learn to write role descriptions, find and screen the right people (including background checks for roles with children or vulnerable adults), train them, schedule and supervise them, thank them and keep them, and track their hours.",
    "Each lesson takes about five minutes, with a \"Try it now\" task you can use for a real volunteer role. There is a knowledge check after each chapter and a 20-question quiz at the end. For legal, insurance and tax questions, check with a professional and the official sources named in the lessons. (If you want to use AI to find volunteers, see the course on AI for volunteer recruitment.)"
  ],
  finalTask: "Build a volunteer kit for one real role: a role description, a recruiting message and the screening steps (with a background check if the role involves children or vulnerable adults), a 30-minute orientation outline, a monthly schedule with a named supervisor, two recognition ideas, and a simple sign-in sheet or spreadsheet that tracks hours.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Volunteer coordinators, nonprofit staff, church and ministry leaders, school parent groups, youth sports leagues, food banks and anyone whose work depends on volunteers.",
    startingPoint: "Have recruited or worked alongside volunteers informally, often by word of mouth. Few use written role descriptions, risk-based screening, a set orientation or a system for tracking hours.",
    gap: "Volunteers give their time for free, so poor organization, missing training or no thanks makes them leave, and weak screening can put children and vulnerable adults at risk. A complete volunteer kit helps organizations keep good volunteers, protect the people they serve and show their impact to funders.",
    constraints: [
      "Coordinators are often part-time or volunteers themselves; 5-minute lessons",
      "Free or low-cost tools: paper, a spreadsheet, a free sign-up form",
      "Background check rules differ by state, program and insurer; learners check with their insurer and a lawyer",
      "Privacy: volunteer and client records stay private; no client names or photos without permission",
      "No tax advice; volunteers are pointed to IRS Publication 526 and a tax professional"
    ],
    prerequisites: "None."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "For one volunteer role your organization needs", action: "write a role description that says the impact, the tasks, the time, the skills and who the volunteer reports to", standard: "with all five parts and an opening sentence about impact" },
    { id: "O2", condition: "Given a volunteer role and who it serves", action: "write a recruiting message and choose the screening steps that match the role's risk", standard: "including references and a background check with written permission for any role with children or vulnerable adults" },
    { id: "O3", condition: "For new volunteers in your role", action: "plan a 30-minute orientation and train the role in four steps: explain, show, try and feedback", standard: "covering safety, privacy, sign-in and how to cancel" },
    { id: "O4", condition: "Using a spreadsheet, shared calendar or paper", action: "build a one-month schedule with a named shift lead, backups and a reminder message", standard: "with every shift covered and a lead named for each" },
    { id: "O5", condition: "For the volunteers you manage", action: "plan specific recognition and identify the common reasons volunteers leave", standard: "with one small thank-you and one bigger moment" },
    { id: "O6", condition: "For one volunteer role", action: "set up a sign-in sheet or spreadsheet that tracks volunteer hours and use the totals", standard: "recording name, date, start, end, hours and role while keeping records private" }
  ],
  chapters: [
    {
      name: "Chapter 1: Bringing volunteers in",
      lessons: [
        {
          objectives: ["O1"],
          title: "Writing a volunteer role description",
          minutes: 5,
          goal: "Write a clear, inviting role description for one volunteer job.",
          text: [
            "Volunteers do their best when they know exactly what is asked of them. A role description is like a short job description: it says what the role is, why it matters, what the volunteer will do, the time needed, the skills or traits needed, any training or screening, and who they report to.",
            "Make it inviting. Start with the impact: \"Help 200 families get groceries every Saturday.\" Be honest about the time, including how long you hope they stay (one event, or six months). Offer short, flexible roles as well as long ones; many people can give two hours but not every week.",
            "Write a separate description for each role. A food bank might have greeters, sorters, drivers and a data-entry helper, each with different needs."
          ],
          steps: ["Name the role and say why it matters.", "List what the volunteer will do.", "Say when, how long, and for how many months.", "List skills, traits and any age limits.", "Note training, screening and who they report to."],
          words: [["Role description", "a short write-up of a volunteer job: what, when, why, and what's needed."], ["Volunteer coordinator", "the person who recruits, organizes and supports volunteers."]],
          slides: [
            { title: "A role description says", bullets: ["The role and why it matters", "What they'll do, when and how long", "Skills needed, training and screening", "Who they report to"] },
            { title: "Make it inviting", bullets: ["Lead with impact: \"Help 200 families every Saturday\"", "Be honest about time", "Offer short, flexible roles too"] },
            { title: "One role, one description", bullets: ["Greeter, sorter, driver, data entry", "Different tasks, different needs"] }
          ],
          tryIt: "Pick one volunteer role your organization needs. Write its role description using all five parts. Start with one sentence about the impact.",
          youCanNow: "write a clear role description that tells volunteers exactly what is asked and why it matters.",
          quickCheck: [
            { objective: "O1", q: "What is a volunteer role description?", options: ["A thank-you card for volunteers", "A short job description that says what the role is, why it matters and what is asked", "A sign-in sheet", "A background check form"], answer: 1, why: "A role description tells volunteers exactly what is asked of them, like a short job description." },
            { objective: "O1", q: "Your description says \"Help out sometimes.\" What do you add first?", options: ["Nothing; vague is friendlier", "A list of every rule you have", "The volunteer's salary", "When and for how long, and the impact the role makes"], answer: 3, why: "Volunteers need honest time details and a reason the role matters." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Recruiting and screening volunteers",
          minutes: 6,
          goal: "Recruit volunteers for a role and choose the right screening steps for it.",
          text: [
            "The most common reason people volunteer is that someone asked them. Ask personally, through current volunteers, places of worship, schools, employers with volunteer programs, community boards and social media. Share the role description and a simple way to sign up.",
            "Screening protects the people you serve, your volunteers and your organization. Match it to the risk of the role. Every role: an application with contact details and an emergency contact, and a short conversation. Higher-risk roles, especially any work with children or vulnerable adults (older adults, people with disabilities), also need reference checks and a background check, done with the person's written permission through a reputable provider.",
            "Rules about background checks for volunteers differ by state and by program, and your insurer may have requirements. Ask your insurance company and a lawyer what applies to you. Add safety rules too: for example, no adult is alone and out of sight with a child, and every concern is reported to a named person."
          ],
          steps: ["Ask people personally; use current volunteers and community partners.", "Share the role description and an easy sign-up.", "For every role: application, emergency contact and a short talk.", "For roles with children or vulnerable adults: references and a background check with written permission.", "Check state rules and your insurer's requirements.", "Set safety rules, like no adult alone and out of sight with a child."],
          words: [["Screening", "the steps you take to check a volunteer is right and safe for a role."], ["Background check", "a search of public records, such as criminal records, done with a person's permission."], ["Vulnerable adult", "an adult who may need extra protection, such as some older adults or people with disabilities."]],
          slides: [
            { title: "Recruit by asking", bullets: ["Most people volunteer because someone asked", "Current volunteers, places of worship, schools", "Employers, community boards, social media"] },
            { title: "Screen by risk", bullets: ["Every role: application, emergency contact, a talk", "Children or vulnerable adults: references + background check", "Always with written permission"] },
            { title: "Check the rules", bullets: ["State rules differ", "Your insurer may have requirements", "Ask your insurer and a lawyer"] },
            { title: "Safety rules", bullets: ["No adult alone and out of sight with a child", "Report every concern to a named person"] }
          ],
          tryIt: "For the role you described in Lesson 1, write a short recruiting message and list three places you will share it. Then list the screening steps the role needs and explain why, based on its risk.",
          youCanNow: "recruit volunteers personally and choose screening steps that match the risk of each role.",
          quickCheck: [
            { objective: "O2", q: "What should every volunteer role, even a low-risk one, include in screening?", options: ["An application with contact details and an emergency contact, and a short talk", "A background check for everyone", "No screening at all", "A credit check"], answer: 0, why: "Every role gets an application, an emergency contact and a short conversation; higher-risk roles add more." },
            { objective: "O2", q: "A new role has volunteers reading with older adults in a care home. What do you add?", options: ["Nothing extra", "A longer thank-you note", "References and a background check with written permission", "A social media post about the residents"], answer: 2, why: "Roles with vulnerable adults need reference checks and a background check done with permission." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Onboarding and training volunteers",
          minutes: 5,
          goal: "Plan a short orientation and role training that gets new volunteers ready and welcome.",
          text: [
            "The first day decides whether many volunteers come back. Onboarding is everything that happens from \"yes\" to being confident in the role: a welcome message, an orientation, training for the role and a friendly first shift.",
            "An orientation covers the mission and who you serve, where things are, who to ask, safety and emergency steps, privacy rules (for example, not sharing clients' names or photos), and how to sign in and cancel a shift. Role training shows them how to do the job: explain, show, let them try, then give feedback. A short checklist or video helps them remember.",
            "Pair new volunteers with an experienced buddy for their first shift, and check in afterward: \"How did it go? What was confusing?\""
          ],
          steps: ["Send a welcome message with time, place and who to ask for.", "Hold an orientation: mission, layout, safety, privacy, sign-in and cancelling.", "Train the role: explain, show, let them try, give feedback.", "Give a simple checklist.", "Pair them with a buddy.", "Check in after the first shift."],
          words: [["Onboarding", "the steps that help a new volunteer get started and feel welcome."], ["Orientation", "a first session that explains the organization, rules and safety."], ["Confidentiality", "keeping private information about the people you serve private."]],
          slides: [
            { title: "The first day matters", bullets: ["Welcome message", "Orientation", "Role training", "A friendly first shift"] },
            { title: "Orientation covers", bullets: ["Mission and who you serve", "Layout, who to ask, safety", "Privacy rules", "Sign-in and cancelling"] },
            { title: "Training that sticks", bullets: ["Explain, show, let them try, give feedback", "A short checklist or video"] },
            { title: "After the first shift", bullets: ["Pair with a buddy", "Ask: \"How did it go? What was confusing?\""] }
          ],
          tryIt: "Write a 30-minute orientation outline for your role, with times for each part. Then write the role's training as four steps: explain, show, try, feedback.",
          youCanNow: "onboard and train new volunteers so they are safe, confident and want to return.",
          quickCheck: [
            { objective: "O3", q: "What is onboarding?", options: ["Only the first email you send", "Ending a volunteer's role", "Everything from \"yes\" to feeling confident in the role", "Counting volunteer hours"], answer: 2, why: "Onboarding includes the welcome, orientation, role training and a friendly first shift." },
            { objective: "O3", q: "A new volunteer starts Saturday. What helps most on the first shift?", options: ["Pair them with an experienced buddy and check in afterward", "Leave them alone to figure it out", "Give them the hardest task", "Skip the orientation to save time"], answer: 0, why: "A buddy gives them someone to ask, and a check-in shows what was confusing." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Bringing volunteers in",
        questions: [
          { objective: "O1", q: "What is the best way to open a volunteer role description?", options: ["With the rules", "With the impact the role makes", "With the deadline", "With the background check"], answer: 1, why: "Leading with impact makes the role inviting." },
          { objective: "O2", q: "What is the most common reason people start volunteering?", options: ["Someone asked them", "A billboard", "A tax form", "A random email"], answer: 0, why: "A personal ask is the strongest recruiting tool." },
          { objective: "O2", q: "A volunteer will tutor children after school. What screening is needed?", options: ["Nothing", "Only a name", "Only a smile at the door", "An application, references and a background check with written permission"], answer: 3, why: "Roles with children need the strongest screening." },
          { objective: "O2", q: "Who should you ask about background check rules for your volunteers?", options: ["A volunteer's friend", "No one", "Your insurer and a lawyer", "A social media post"], answer: 2, why: "Rules differ by state and insurers may have requirements." },
          { objective: "O3", q: "Which belongs in a volunteer orientation?", options: ["Privacy rules about the people you serve", "Clients' home addresses", "Staff salaries", "Gossip about donors"], answer: 0, why: "Volunteers must know how to protect people's privacy." }
        ]
      }
    },
    {
      name: "Chapter 2: Keeping volunteers",
      lessons: [
        {
          objectives: ["O4"],
          title: "Scheduling and supervising volunteers",
          minutes: 5,
          goal: "Build a volunteer schedule with backups and supervise volunteers in a supportive way.",
          text: [
            "Make the schedule easy to see and easy to change. A shared calendar, a free sign-up tool or a simple spreadsheet works. Post shifts early, send a reminder a day or two before, and make cancelling simple so people tell you instead of just not showing up. Plan a backup list for key shifts.",
            "Every shift should have a named supervisor or lead volunteer who welcomes people, gives out tasks, answers questions and handles problems. Supervising volunteers is like managing staff, but lighter: clear tasks, regular check-ins, and quick, kind feedback.",
            "If a volunteer is not working out, talk privately, be specific and ask what would help. Sometimes a different role fits better. If someone breaks safety or conduct rules, follow your policy, which may include ending their volunteer role."
          ],
          steps: ["Use a shared calendar, sign-up tool or spreadsheet.", "Post shifts early and send reminders.", "Make cancelling easy; keep a backup list.", "Name a supervisor for every shift.", "Give clear tasks and quick, kind feedback.", "Handle problems privately; follow policy for safety breaches."],
          words: [["Shift", "a set block of time when a volunteer works."], ["Shift lead", "the person in charge of volunteers during a shift."], ["Backup list", "volunteers you can call when someone cancels."]],
          slides: [
            { title: "A schedule that works", bullets: ["Easy to see, easy to change", "Post early, remind a day or two before", "Easy cancelling and a backup list"] },
            { title: "A named lead every shift", bullets: ["Welcomes people", "Gives tasks, answers questions", "Handles problems"] },
            { title: "Supervising volunteers", bullets: ["Clear tasks and check-ins", "Quick, kind feedback", "Not working out? Talk privately; try another role"] }
          ],
          tryIt: "Make a one-month schedule for your role in a spreadsheet or on paper: dates, shift times, volunteer names, a named shift lead and two backup names. Write the reminder message you will send.",
          youCanNow: "build a volunteer schedule with reminders and backups, and supervise volunteers in a clear, supportive way.",
          quickCheck: [
            { objective: "O4", q: "What is a backup list?", options: ["A copy of the budget", "A list of volunteers who quit", "Old schedules", "People you can call when someone cancels a key shift"], answer: 3, why: "A backup list keeps key shifts covered when plans change." },
            { objective: "O4", q: "A volunteer keeps making mistakes in their role. What do you do first?", options: ["Tell the whole team about it", "Talk privately, be specific and ask what would help", "Stop scheduling them without saying why", "Ignore it"], answer: 1, why: "Handle problems privately and kindly; a different role may fit better." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Recognition and retention",
          minutes: 5,
          goal: "Plan recognition that fits your volunteers and spot why volunteers leave.",
          text: [
            "Volunteers often stop coming because they felt unneeded, poorly organized, untrained, or unthanked, or because life got busy. Keeping them is cheaper and easier than finding new ones.",
            "Thank people often and specifically: \"Your Saturday shifts helped us pack 600 boxes this month.\" Share stories of the impact, with permission from the people served. Mix small, everyday thanks (a note, a shout-out, a text) with bigger moments (an appreciation event, a certificate, a reference letter for a job or school).",
            "Ask volunteers what they want: new skills, friends, leadership, flexibility. Offer growth, like training new volunteers or leading a shift. Ask people who leave why, and use what you learn."
          ],
          steps: ["Thank people often and specifically.", "Share impact stories, with permission.", "Mix small thanks with bigger moments.", "Ask what each volunteer wants from the experience.", "Offer growth roles.", "Ask people who leave why."],
          words: [["Retention", "keeping volunteers coming back over time."], ["Recognition", "showing volunteers that their work is noticed and valued."]],
          slides: [
            { title: "Why volunteers leave", bullets: ["Felt unneeded or untrained", "Poor organization", "Never thanked, or life got busy"] },
            { title: "Thank them well", bullets: ["Often and specific", "Share impact stories, with permission", "Small thanks plus bigger moments"] },
            { title: "Help them grow", bullets: ["Ask what they want", "Offer training and leadership roles", "Ask leavers why"] }
          ],
          tryIt: "Write two recognition ideas for your volunteers: one small thank-you you can give this week and one bigger moment for this year. Then write three questions you will ask a volunteer about what they want from the role.",
          youCanNow: "recognize volunteers in ways that matter to them and act on the reasons volunteers leave.",
          quickCheck: [
            { objective: "O5", q: "Which is a common reason volunteers stop coming?", options: ["They felt unneeded or unthanked", "They were thanked too often", "The shifts were well organized", "They had a buddy"], answer: 0, why: "Feeling unneeded, poorly organized, untrained or unthanked often makes volunteers leave." },
            { objective: "O5", q: "A loyal volunteer says they want to build leadership skills. What do you offer?", options: ["Nothing; volunteers do not grow", "More of the same task", "A chance to lead a shift or train new volunteers", "A smaller role"], answer: 2, why: "Growth roles such as leading a shift help keep volunteers who want more." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Tracking volunteer hours",
          minutes: 5,
          goal: "Set up a simple system to track volunteer hours and use the numbers.",
          text: [
            "Track who volunteered, when, for how long and in what role. A paper sign-in sheet copied into a spreadsheet works for small groups; a free form or volunteer app can work for larger ones. Keep it simple so people actually sign in and out.",
            "The numbers help you: they show impact in grant reports and to your board, help you plan staffing, and help you thank your most faithful volunteers. Many volunteers also need proof of hours for school, scholarships, court or community-service requirements, or job applications. Be ready to sign a letter or form confirming their hours.",
            "Keep volunteer records private and safe, and only collect what you need. A tax note for volunteers: the IRS says the value of volunteer time is not tax-deductible, though some unreimbursed out-of-pocket costs may be. Point volunteers to IRS Publication 526 and a tax professional rather than giving tax advice."
          ],
          steps: ["Choose a sign-in method: paper sheet, form or app.", "Record name, date, start and end time, and role.", "Enter the data in one spreadsheet each week.", "Add up hours by volunteer, by month and by program.", "Use the totals in reports, planning and thank-yous.", "Keep records private; sign proof-of-hours letters when asked."],
          words: [["Sign-in sheet", "a simple form where volunteers write their name and the time they start and finish."], ["Proof of hours", "a signed letter or form confirming how many hours someone volunteered."], ["Grant report", "a report to a funder showing what was done with their money."]],
          slides: [
            { title: "Track the basics", bullets: ["Who, when, how long, which role", "Paper, a free form, or an app", "Keep it simple"] },
            { title: "Use the numbers", bullets: ["Grant reports and board updates", "Planning shifts", "Thanking faithful volunteers"] },
            { title: "Proof of hours", bullets: ["For school, scholarships, court or jobs", "Be ready to sign a letter or form"] },
            { title: "Privacy and tax", bullets: ["Collect only what you need; keep it safe", "Volunteer time isn't tax-deductible (IRS)", "Point to IRS Publication 526 and a tax pro"] }
          ],
          sources: [{ name: "IRS Publication 526, Charitable Contributions", url: "https://www.irs.gov/publications/p526" }],
          tryIt: "Final task: build your volunteer kit for one role: the role description, recruiting message and screening steps, a 30-minute orientation outline, a monthly schedule with a shift lead, two recognition ideas, and a sign-in sheet or spreadsheet with columns for name, date, start, end, hours and role.",
          youCanNow: "track volunteer hours simply and use the numbers for reports, planning, thank-yous and proof of hours.",
          quickCheck: [
            { objective: "O6", q: "Why track volunteer hours?", options: ["To charge volunteers a fee", "To show impact in grant and board reports and to plan staffing", "To share volunteers' details publicly", "Because volunteers are paid by the hour"], answer: 1, why: "Hour totals show impact, help planning and help you thank faithful volunteers." },
            { objective: "O6", q: "A volunteer asks if they can deduct the value of their time on their taxes. What do you do?", options: ["Say yes, at any hourly rate", "Do their taxes for them", "Ignore the question", "Point them to IRS Publication 526 and a tax professional"], answer: 3, why: "The lesson says not to give tax advice; point volunteers to IRS Publication 526 and a tax professional." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Keeping volunteers",
        questions: [
          { objective: "O4", q: "Volunteers keep missing shifts without telling you. What helps first?", options: ["Ban them all", "Stop scheduling", "Send reminders and make cancelling easy", "Double the shift length"], answer: 2, why: "Reminders and easy cancelling cut no-shows." },
          { objective: "O4", q: "Who should be named for every shift?", options: ["A donor", "A shift lead or supervisor", "The newest volunteer", "Nobody"], answer: 1, why: "A named lead welcomes, guides and handles problems." },
          { objective: "O5", q: "Which thank-you is most likely to matter to a volunteer?", options: ["\"Thanks, everyone.\"", "No thanks; it's volunteering", "A generic email once a year", "\"Your Saturday shifts helped us pack 600 boxes this month.\""], answer: 3, why: "Specific thanks that names the impact means the most." },
          { objective: "O6", q: "A teen needs proof of 40 volunteer hours for school. You should:", options: ["Use your hours records and sign a letter confirming them", "Refuse", "Guess the hours", "Tell them to ask the IRS"], answer: 0, why: "Good tracking lets you confirm hours accurately." },
          { objective: "O6", q: "According to the IRS, can a volunteer deduct the value of their time?", options: ["Yes, at any rate they choose", "Yes, at minimum wage", "No, the value of time or services isn't deductible", "Only on weekends"], answer: 2, why: "IRS Publication 526 says the value of your time isn't deductible." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Volunteer Management",
    questions: [
      { objective: "O1", q: "A volunteer role description should include:", options: ["Only the role name", "What they'll do, when, why it matters and who they report to", "The volunteer's salary", "Donor names"], answer: 1, why: "Clear details help volunteers succeed." },
      { objective: "O1", q: "Why offer short, flexible roles?", options: ["Many people can give a little time but not every week", "They are easier to forget", "They need no training", "They replace staff"], answer: 0, why: "Flexible roles open the door to more volunteers." },
      { objective: "O1", q: "A food bank needs greeters, sorters and drivers. How many role descriptions?", options: ["One for all", "None", "One for each role", "Only for drivers"], answer: 2, why: "Each role has different tasks and needs." },
      { objective: "O2", q: "Which recruiting approach usually works best?", options: ["Waiting for people to find you", "Posting once and hoping", "Only asking staff", "Asking people personally, including through current volunteers"], answer: 3, why: "Personal asks bring in the most volunteers." },
      { objective: "O2", q: "Screening should be matched to:", options: ["The risk of the role", "The volunteer's looks", "The weather", "The coordinator's mood"], answer: 0, why: "Higher-risk roles need more screening." },
      { objective: "O2", q: "A background check should be done:", options: ["Secretly", "With the person's written permission", "Only after an incident", "By asking neighbors"], answer: 1, why: "Permission is required and respectful." },
      { objective: "O2", q: "Which is a good safety rule for youth programs?", options: ["Any adult can be alone with a child anywhere", "Concerns are kept quiet", "No adult is alone and out of sight with a child", "Screening is optional"], answer: 2, why: "This rule protects children and volunteers." },
      { objective: "O2", q: "Rules for volunteer background checks:", options: ["Are the same everywhere", "Don't exist", "Are set by volunteers", "Differ by state and program; ask your insurer and a lawyer"], answer: 3, why: "Requirements vary, so check what applies to you." },
      { objective: "O3", q: "Onboarding means:", options: ["Everything that helps a new volunteer get started and feel welcome", "Firing a volunteer", "Fundraising", "Buying equipment"], answer: 0, why: "It covers welcome, orientation, training and first shift." },
      { objective: "O3", q: "The four steps of role training are:", options: ["Read, sign, leave, forget", "Explain, show, let them try, give feedback", "Tell, test, fail, repeat", "Watch, wait, guess, go"], answer: 1, why: "Show-and-try training builds skill and confidence." },
      { objective: "O3", q: "Pairing a new volunteer with a buddy helps because:", options: ["It doubles the paperwork", "It replaces orientation", "They have someone to ask on their first shift", "Buddies do all the work"], answer: 2, why: "A buddy makes the first shift easier and friendlier." },
      { objective: "O3", q: "A volunteer posts a photo of a client online. Which orientation topic was missed?", options: ["Parking", "Privacy rules", "Snacks", "Fundraising"], answer: 1, why: "Volunteers must keep clients' identities private." },
      { objective: "O4", q: "A good volunteer schedule is:", options: ["Easy to see and easy to change", "Kept in one person's head", "Posted the night before", "Never shared"], answer: 0, why: "Visibility and flexibility reduce gaps." },
      { objective: "O4", q: "A backup list is for:", options: ["Firing volunteers", "Grant reports", "Storing old schedules", "Calling when someone cancels a key shift"], answer: 3, why: "Backups keep important shifts covered." },
      { objective: "O4", q: "A volunteer is struggling in a data-entry role but loves talking to people. You could:", options: ["Ignore it", "Embarrass them in public", "Talk privately and offer a greeter role", "Remove them without a word"], answer: 2, why: "A better-fitting role often solves the problem." },
      { objective: "O5", q: "Which is a common reason volunteers stop coming?", options: ["They were thanked too much", "They felt unneeded or never thanked", "The shifts were well organized", "They had clear training"], answer: 1, why: "Feeling unneeded or unthanked drives people away." },
      { objective: "O5", q: "When sharing impact stories about people you serve, you should:", options: ["Get their permission", "Use full names without asking", "Make up details", "Share their home address"], answer: 0, why: "Respect and privacy come first." },
      { objective: "O5", q: "A long-time volunteer wants to grow. You could:", options: ["Keep them in the same task forever", "Ask them to leave", "Give them more cleaning only", "Invite them to train new volunteers or lead a shift"], answer: 3, why: "Growth roles keep committed volunteers engaged." },
      { objective: "O6", q: "A volunteer sign-in record should include:", options: ["Their bank details", "Name, date, start and end time, and role", "Their password", "Only a signature"], answer: 1, why: "These basics let you total hours accurately." },
      { objective: "O6", q: "A volunteer asks whether they can deduct gas for driving to volunteer. You should:", options: ["Say yes, any amount", "Say it's illegal", "Point them to IRS Publication 526 and a tax professional", "Ignore the question"], answer: 2, why: "Some out-of-pocket costs may be deductible; they should check the official source." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Pre-Test: What Do You Already Know?",
    from: [
      0,
      2,
      4,
      6,
      8,
      11,
      12,
      14,
      15,
      18
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      {
        name: "Role description",
        objective: "O1",
        notYet: "Missing the time, tasks or who they report to.",
        meets: "All five parts, opening with the impact.",
        exceeds: "Also offers a short, flexible option for people with less time."
      },
      {
        name: "Recruiting and screening",
        objective: "O2",
        notYet: "No screening, or a role with children or vulnerable adults has no background check.",
        meets: "A recruiting message and screening matched to the role's risk, with written permission for checks.",
        exceeds: "Also adds safety rules and notes to check with the insurer and a lawyer."
      },
      {
        name: "Orientation and training",
        objective: "O3",
        notYet: "No orientation plan, or safety and privacy are missing.",
        meets: "A 30-minute outline with times, covering safety, privacy, sign-in and cancelling, plus explain, show, try, feedback.",
        exceeds: "Also includes a buddy and a check-in after the first shift."
      },
      {
        name: "Schedule and supervision",
        objective: "O4",
        notYet: "Shifts lack a lead or there are no backups.",
        meets: "A one-month schedule with a named shift lead, two backups and a reminder message.",
        exceeds: "Also says how volunteers cancel and who handles problems."
      },
      {
        name: "Recognition and hours",
        objective: "O5",
        notYet: "No thank-you plan or no way to track hours.",
        meets: "One small and one bigger recognition idea, and a sign-in sheet with name, date, start, end, hours and role.",
        exceeds: "Also says how the hour totals will be used in reports and thank-yous."
      }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Volunteers still active 90 days after their first shift, compared with before the course",
      "Roles with children or vulnerable adults that have documented screening and safety rules",
      "Total volunteer hours tracked and reported to the board or in grant reports"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A computer or phone with a free spreadsheet or sign-up tool, or paper",
      "One real volunteer role to plan for",
      "Paper or a document for the volunteer kit",
      "About 60 minutes in total: lessons, practice, checks and the final task"
    ],
    facilitatorNotes: [
      "Have each learner build the kit for a real role at their own organization so it is ready to use.",
      "For roles with children or vulnerable adults, stress screening and safety rules, and tell learners to confirm requirements with their insurer and a lawyer.",
      "Remind learners not to collect more volunteer information than they need and to keep records private.",
      "Pair learners to swap and review each other's role descriptions and orientation outlines.",
      "Score the kit with the rubric and give feedback on one Not yet row at a time."
    ]
  }
};
