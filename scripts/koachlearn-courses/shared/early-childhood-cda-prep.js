"use strict";

// Koach Learn course (wave 3): Workforce Development -> "Early Childhood Education and CDA Credential Preparation".
// Prepares learners for the Child Development Associate (CDA) Credential from the Council for Professional Recognition. It does not grant the credential.
// Facts checked on cdacouncil.org, childcare.gov, childwelfare.gov and safetosleep.nichd.nih.gov (30 October 2026). Requirement numbers are for the Preschool setting; other settings have their own pages.

module.exports = {
  id: "early-childhood-cda-prep",
  category: "Workforce Development",
  name: "Early Childhood Education and CDA Credential Preparation",
  skills: "Mapping the CDA requirements, Keeping children safe and healthy, Reporting suspected abuse, Writing observation notes, Planning a learning activity, Making a CDA plan with dates",
  outcome: "start your path to the Child Development Associate (CDA) Credential: list what the Council requires for your setting, keep children safe, write fair observation notes, plan a learning activity, and turn it all into a dated plan for training, experience, portfolio, exam and visit.",
  about: [
    "Child care centers, Head Start programs, preschools and family child care homes need caring, trained adults. The Child Development Associate (CDA) Credential, granted by the Council for Professional Recognition, is the best-known first credential in early childhood education.",
    "This course is for job seekers, parents, young adults, people coming home from prison and anyone who wants to work with young children. It prepares you for the CDA path. It does not grant the credential, and it does not count as the formal training hours unless a program tells you it does.",
    "You will learn the CDA steps, the basics of child safety and mandated reporting, how to watch and write about what a child does, and how to plan a simple activity. You finish with your own CDA plan with real dates.",
    "Each lesson takes about five minutes, with a \"Try it now\" task and two quick questions. There is a knowledge check after each chapter and a 20-question quiz at the end."
  ],
  finalTask: "Make your own CDA preparation plan on paper or in a free document: your setting, where you will get the 120 training hours (with 10 or more in each of the eight subject areas), how you will log your work hours, a date to start your portfolio, target dates for the exam and the Verification Visit, and one written activity plan for a preschool child that could go in your portfolio.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Adults and older teens who want to work in child care, preschool, Head Start or family child care in the US: parents, job seekers, career changers, immigrants, veterans' spouses and people coming home from prison. Many already care for children at home but have no formal training.",
    startingPoint: "Can care for children day to day and read simple instructions. Most have not heard of the CDA subject areas, the portfolio or the Verification Visit, and have not written observation notes or lesson plans.",
    gap: "Many child care jobs and state licensing rules ask for training or a credential such as the CDA. Learners need to know the exact steps, keep children safe from day one, and practice the writing skills the portfolio and exam expect. Without a plan, people take the wrong training, lose track of hours or let the 3-year experience window and 6-month portfolio window pass.",
    constraints: [
      "Reading level: plain words and short sentences (about grade 6 to 8)",
      "Devices: a phone or library computer; every task also works on paper",
      "Time: 4 to 6 minute lessons that fit around work and family",
      "Rules change: CDA requirements and fees are checked on cdacouncil.org; licensing and mandated reporting rules differ by state",
      "Child privacy: practice notes use made-up names or first initials only, never photos or real details of a child",
      "Background checks are part of child care work; learners with a record check their state's rules"
    ],
    prerequisites: "None. A high school diploma or GED is needed before applying for the CDA (or enrollment as a junior or senior in a high school early childhood career and technical program)."
  },
  // ---- ADDIE: Design ----
  objectives: [
    { id: "O1", condition: "Using the Council for Professional Recognition's page for your setting", action: "list the education, experience, portfolio, exam and Verification Visit steps for the CDA", standard: "with the hours and time windows correct" },
    { id: "O2", condition: "Given a child care room or a description of one", action: "check the room for supervision, handwashing, safe sleep and hazard problems", standard: "finding at least 4 of 5 planted problems" },
    { id: "O3", condition: "Given a story where a child may be harmed", action: "describe the steps to report suspected abuse or neglect", standard: "calling 911 first if a child is in danger, and following state law and program policy" },
    { id: "O4", condition: "After watching a child play for five minutes", action: "write an observation note that records only what you saw and heard", standard: "with no labels or guesses, and the date, time and setting included" },
    { id: "O5", condition: "Given a child's age and interest", action: "write a short activity plan with a goal, materials, steps and a safety note", standard: "that fits the age and names one CDA subject area" },
    { id: "O6", condition: "Using your own calendar", action: "make a dated CDA preparation plan from training to Verification Visit", standard: "that keeps experience within 3 years and the portfolio within 6 months of applying" }
  ],
  chapters: [
    {
      name: "Chapter 1: The CDA path and keeping children safe",
      lessons: [
        {
          title: "What the CDA is and the steps to earn it",
          objectives: ["O1"],
          minutes: 6,
          goal: "List the steps to earn the CDA in your setting.",
          text: [
            "The Child Development Associate (CDA) Credential is granted by the Council for Professional Recognition. It shows you can put the CDA Competency Standards into practice with young children. There are pathways for Preschool, Infant-Toddler, Family Child Care and Home Visitor settings, and each has its own requirements page.",
            "For the Preschool setting (children 3 to 5 in a center), the Council's page lists: a high school diploma or GED (or enrollment as a junior or senior in a high school early childhood career program); 120 hours of formal early childhood training, with at least 10 hours in each of the eight CDA subject areas; and 480 hours of work with children ages 3 to 5 within 3 years of applying.",
            "You also build a professional portfolio within 6 months of applying and choose a CDA Professional Development (PD) Specialist. After your application is approved, you take the CDA exam: about 65 questions on a computer at a Pearson VUE test site. Then a PD Specialist does the Verification Visit: reviews your portfolio, watches you work with children and talks with you about your strengths and growth. The Council also offers a faster decision without a visit for some exam results; check its process updates page.",
            "Fees, scholarships and rules change. Check the current amounts on cdacouncil.org, and ask your employer or state about scholarships before you pay. The credential lasts 3 years and is then renewed."
          ],
          steps: ["Choose your setting: Preschool, Infant-Toddler, Family Child Care or Home Visitor.", "Open that setting's page on cdacouncil.org and write down its requirements.", "Find training that covers all eight subject areas.", "Start logging your work hours with children.", "Build your portfolio, apply, take the exam, then have the Verification Visit."],
          words: [["CDA", "Child Development Associate: a national credential for people who work with young children."], ["Council for Professional Recognition", "the organization that grants the CDA."], ["Portfolio", "a collection of your own writing and resources that shows your work with children and families."], ["Verification Visit", "a visit where a PD Specialist watches you work, reviews your portfolio and talks with you."], ["PD Specialist", "a Professional Development Specialist approved by the Council to do your visit."]],
          slides: [
            { title: "The CDA in one line", bullets: ["Granted by the Council for Professional Recognition", "Settings: Preschool, Infant-Toddler, Family Child Care, Home Visitor"] },
            { title: "Preschool: before you apply", bullets: ["Diploma or GED (or HS early childhood program)", "120 training hours, 10+ in each of 8 subject areas", "480 work hours with ages 3-5 within 3 years"] },
            { title: "Then", bullets: ["Portfolio done within 6 months of applying", "CDA exam at a Pearson VUE site", "Verification Visit by a PD Specialist"] },
            { title: "Check before you pay", bullets: ["Fees and rules change: cdacouncil.org", "Ask about scholarships", "Renew every 3 years"] }
          ],
          sources: [
            { name: "CDA Council: Preschool pathway", url: "https://www.cdacouncil.org/en/educator-pathways/preschool/" },
            { name: "CDA Council: Learn about the CDA", url: "https://www.cdacouncil.org/en/about/learn-about-the-cda/" },
            { name: "CDA Council: Process updates", url: "https://www.cdacouncil.org/en/cda-process-updates/" },
            { name: "CDA Council: Find CDA scholarships", url: "https://www.cdacouncil.org/en/find-cda-scholarships/" },
            { name: "CDA Council: Renew CDA", url: "https://www.cdacouncil.org/en/renew-cda/" }
          ],
          tryIt: "Open the CDA Council page for the setting you want (or use the numbers in this lesson for Preschool). On paper, write the five steps in order and the hours or time window next to each one.",
          youCanNow: "list the steps to the CDA for your setting, with the training hours, work hours and time windows.",
          quickCheck: [
            { objective: "O1", q: "For the Preschool CDA, how is the 120 hours of training spread?", options: ["All 120 hours in one subject you like", "At least 10 hours in each of the eight subject areas", "Only hours of work with children", "Any 120 hours of online videos"], answer: 1, why: "The Council asks for 120 training hours with no fewer than 10 in each of the eight subject areas." },
            { objective: "O1", q: "Who grants the CDA Credential?", options: ["Your state's motor vehicle office", "The school your child attends", "Any child care center", "The Council for Professional Recognition"], answer: 3, why: "The Council for Professional Recognition grants the CDA; a course or employer only helps you prepare." }
          ]
        },
        {
          title: "A safe and healthy room: licensing, supervision, handwashing, safe sleep",
          objectives: ["O2"],
          minutes: 6,
          goal: "Check a child care room for common safety and health problems.",
          text: [
            "Child care is licensed by each state or territory. Licensing sets the minimum health and safety rules a program must meet, such as staff background checks, health and safety training, staff qualifications and inspections. Ratios and training rules differ by state, so look up yours on childcare.gov.",
            "Supervision comes first: you can see and hear every child, you count children often (especially when moving rooms or going outside), and you never leave children alone.",
            "Handwashing stops germs: wash with soap and water, scrubbing for at least 20 seconds, after the bathroom or diapering, before eating or handling food, and after outdoor play. Help children wash too.",
            "Safe sleep for babies: place a baby on their back for every nap and at night, on a firm, flat, level surface with only a fitted sheet. Keep pillows, blankets, bumpers and stuffed toys out of the crib. Also look for hazards: outlets, cords, small objects a young child could choke on, cleaning products within reach, and blocked exits."
          ],
          steps: ["Count the children and check you can see and hear all of them.", "Look for hazards: cords, outlets, small objects, chemicals, blocked exits.", "Check the handwashing area has soap and towels and that adults use it.", "In infant rooms: back to sleep, firm flat surface, nothing in the crib but a fitted sheet.", "Fix what you can now and tell your supervisor about the rest."],
          words: [["Licensing", "the state's minimum health and safety rules a program must meet to operate legally."], ["Ratio", "how many children one adult may care for; it is set by the state and differs by age."], ["Supervision", "always being able to see and hear the children in your care."], ["Choking hazard", "a small object a young child can put in the mouth and choke on."]],
          slides: [
            { title: "Licensing is by state", bullets: ["Minimum health and safety rules", "Background checks, training, inspections", "Look up your state on childcare.gov"] },
            { title: "Supervise and count", bullets: ["See and hear every child", "Count at every move", "Never leave children alone"] },
            { title: "Handwashing", bullets: ["Soap and water, scrub 20 seconds", "After bathroom or diapering, before food, after outside"] },
            { title: "Safe sleep for babies", bullets: ["On the back, every sleep", "Firm, flat, level surface, fitted sheet only", "No pillows, blankets, bumpers or toys"] }
          ],
          sources: [
            { name: "Childcare.gov: How is child care regulated?", url: "https://childcare.gov/consumer-education/how-is-child-care-regulated" },
            { name: "Childcare.gov: State and territory resources", url: "https://childcare.gov/state-resources" },
            { name: "Safe to Sleep (NIH): Safe sleep environment", url: "https://safetosleep.nichd.nih.gov/reduce-risk/safe-sleep-environment" }
          ],
          tryIt: "Walk through one room at home (or picture a classroom). List five things you would check for safety and health, and write one fix for each. Then find your state's child care page on childcare.gov and write down who licenses child care there.",
          youCanNow: "check a room for supervision, handwashing, safe sleep and hazard problems, and say who licenses child care in your state.",
          quickCheck: [
            { objective: "O2", q: "A baby falls asleep in a crib. Which setup is safe?", options: ["On the stomach with a soft blanket", "On the side with a pillow for support", "On the back, firm mattress, fitted sheet only", "On the back with stuffed toys for comfort"], answer: 2, why: "Safe to Sleep says back sleeping on a firm, flat surface with only a fitted sheet." },
            { objective: "O2", q: "Your group comes in from the playground. What do you do first?", options: ["Count the children", "Start the next activity right away", "Check your phone", "Let them go to the bathroom alone"], answer: 0, why: "Counting at every move makes sure no child was left behind." }
          ]
        },
        {
          title: "Protecting children: mandated reporting",
          objectives: ["O3"],
          minutes: 5,
          goal: "Describe the steps to report suspected child abuse or neglect.",
          text: [
            "In most states, child care workers are mandated reporters. That means the law requires you to report when you have reason to suspect a child is being abused or neglected. You do not need proof. Each state's law says who must report and how, and your program will have a written policy. Learn both before your first day.",
            "If a child is in immediate danger, call 911 first. Otherwise, follow your state's process (often a state child abuse hotline) and your program's policy. If you are unsure where to call, the Childhelp National Child Abuse Hotline (1-800-422-4453) can help.",
            "Your job is to report, not to investigate. Do not question the child again and again or confront the family. If a child tells you something, stay calm, listen, do not promise to keep it secret, and write down their exact words, the date and the time. Keep it private: share only with the people the law and your policy say."
          ],
          steps: ["If a child is in danger right now, call 911.", "Listen calmly; do not promise to keep a secret.", "Write down what you saw or heard, word for word, with date and time.", "Report as your state law and program policy require.", "Keep it private and do not investigate yourself."],
          words: [["Mandated reporter", "a person the law requires to report suspected child abuse or neglect."], ["Neglect", "not giving a child the basic care they need, such as food, safety, supervision or medical care."], ["Suspect", "to have a reason to think something may be happening, without proof."]],
          slides: [
            { title: "You may be a mandated reporter", bullets: ["Most states include child care workers", "You report a reason to suspect, not proof", "Learn your state law and program policy"] },
            { title: "Danger now? Call 911", bullets: ["Then follow your state's reporting process", "Unsure? Childhelp: 1-800-422-4453"] },
            { title: "Report, don't investigate", bullets: ["Listen calmly; no promise of secrecy", "Write exact words, date and time", "Share only as the law and policy say"] }
          ],
          sources: [
            { name: "Child Welfare Information Gateway: How to report child abuse and neglect", url: "https://www.childwelfare.gov/how-report-child-abuse-and-neglect/" },
            { name: "Childcare.gov: Report a child care concern", url: "https://childcare.gov/health-and-safety-reporting" }
          ],
          tryIt: "Look up how to report suspected child abuse in your state (search your state's name plus \"report child abuse\" and use the .gov page). Write the number or website on a card, with the five steps from this lesson on the back.",
          youCanNow: "describe the steps to report suspected abuse or neglect and find where to report in your state.",
          quickCheck: [
            { objective: "O3", q: "A child tells you a secret about being hurt at home and asks you not to tell. What do you say?", options: ["\"I promise I won't tell anyone.\"", "\"Are you sure? Tell me again.\"", "\"You must be making that up.\"", "\"Thank you for telling me. I need to tell people who can help keep you safe.\""], answer: 3, why: "You stay calm and never promise secrecy, because you must report." },
            { objective: "O3", q: "You see marks that worry you, but you have no proof. What does a mandated reporter do?", options: ["Wait until there is proof", "Report as state law and program policy require", "Call the parent to ask what happened", "Take photos and post them to warn others"], answer: 1, why: "The law asks you to report a reason to suspect; investigating is the agency's job." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: The CDA path and keeping children safe",
        questions: [
          { objective: "O1", q: "For the Preschool CDA, how many hours of work with children ages 3 to 5 do you need, and within what time?", options: ["480 hours within 3 years of applying", "120 hours within 1 year", "1,000 hours at any time", "No work hours are needed"], answer: 0, why: "The Council's Preschool page lists 480 hours within 3 years of submitting your application." },
          { objective: "O1", q: "In what order do the exam and the Verification Visit happen?", options: ["The visit always comes before you apply", "Both happen on the same day", "The exam comes first, then the visit", "Neither is part of the CDA"], answer: 2, why: "After approval you schedule the exam; the visit is scheduled after the exam." },
          { objective: "O2", q: "Who sets child care licensing rules such as ratios and training?", options: ["Each child's parents", "Each state or territory", "The CDA Council", "Each teacher"], answer: 1, why: "Licensing is done by states and territories, so rules differ from place to place." },
          { objective: "O2", q: "Which is a hazard you should fix in a toddler room?", options: ["Coins and beads on a low shelf", "Soap at the sink", "A fitted sheet on the crib mattress", "A list of emergency numbers by the door"], answer: 0, why: "Small objects are choking hazards for young children." },
          { objective: "O3", q: "A child arrives with a serious injury and is in danger right now. What do you do first?", options: ["Write it in your notes for next week", "Ask the child's friends what happened", "Wait for your supervisor to come back from lunch", "Call 911"], answer: 3, why: "Immediate danger means call 911 first, then follow the reporting process." }
        ]
      }
    },
    {
      name: "Chapter 2: Teaching, observing and your CDA plan",
      lessons: [
        {
          title: "Watching and writing: observation notes",
          objectives: ["O4"],
          minutes: 5,
          goal: "Write an observation note that records only what you saw and heard.",
          text: [
            "Observing and recording children's behavior is one of the eight CDA subject areas. Teachers watch children to learn what each child can do, what they like and what they need next. Good notes also help when you talk with families.",
            "A good note is objective: it says what you saw and heard, not what you think it means. Write \"M. stacked six blocks, then knocked them down and laughed\" instead of \"M. is a happy, smart kid\". Labels such as lazy, bad, shy or naughty do not belong in notes.",
            "Include the date, time, setting and the child's first initial. Quote the child's exact words. Keep notes private: they are about a real child and belong to the program."
          ],
          steps: ["Write the date, time, place and the child's first initial.", "Watch for a few minutes.", "Write only actions and exact words.", "Cross out any label or guess.", "Add one question or next step for the child, marked as your idea."],
          words: [["Observation", "watching a child closely to learn what they can do."], ["Objective", "only facts you can see or hear, with no opinions."], ["Anecdotal record", "a short written note about one thing a child did or said."]],
          slides: [
            { title: "Why we observe", bullets: ["Learn what each child can do", "Plan what comes next", "Share facts with families"] },
            { title: "Facts, not labels", bullets: ["Yes: \"stacked 6 blocks, laughed\"", "No: \"smart\", \"shy\", \"bad\"", "Quote the child's exact words"] },
            { title: "Every note has", bullets: ["Date, time, place", "First initial only", "Kept private"] }
          ],
          tryIt: "Watch a child you know (with the parent's okay), or a children's video, for five minutes. Write an observation note with the date, time and setting. Then circle any word that is a label or guess and rewrite it as a fact.",
          youCanNow: "write a fair, objective observation note with no labels.",
          quickCheck: [
            { objective: "O4", q: "Which sentence belongs in an observation note?", options: ["\"J. is a troublemaker.\"", "\"J. seems sad today.\"", "\"J. is smarter than the others.\"", "\"J. said 'my turn' and took the red truck from T.\""], answer: 3, why: "It records only what was seen and heard, with the child's exact words." },
            { objective: "O4", q: "What should every observation note include?", options: ["Date, time, setting and the child's first initial", "The child's full name and home address", "Your opinion of the parents", "A photo of the child posted online"], answer: 0, why: "Date, time, setting and an initial give context while protecting the child's privacy." }
          ]
        },
        {
          title: "Planning a learning activity",
          objectives: ["O5"],
          minutes: 6,
          goal: "Write a short activity plan that fits a child's age.",
          text: [
            "Young children learn through play. A good activity starts from what children enjoy and can almost do, so it is a small, fun stretch. Advancing children's physical and intellectual development is one of the eight CDA subject areas, and so are social and emotional development and building relationships with families.",
            "A short activity plan has six parts: the age group, a goal (what children will do), the materials, the steps, a safety note, and how you will know it worked. Example for 3- and 4-year-olds: Goal: sort leaves by size. Materials: leaves collected outside, three baskets. Steps: show a big, medium and small leaf; children sort; ask \"Which is the biggest?\" Safety: wash hands after, check for sharp sticks. How you know: children put most leaves in the right basket and use the words big and small.",
            "Plan for every child: offer an easier and a harder way to do it, use words and pictures, and invite families to send ideas from home. Keep materials large enough that they are not choking hazards for the age."
          ],
          steps: ["Pick the age group and one thing children enjoy.", "Write one goal children will do.", "List safe, free or low-cost materials.", "Write 3 to 5 steps.", "Add a safety note and how you will know it worked.", "Name the CDA subject area it supports."],
          words: [["Developmentally appropriate", "fits what children of that age can usually do, with a small stretch."], ["Fine motor", "small movements of the hands and fingers, like picking up or cutting."], ["Gross motor", "big movements of the body, like running, jumping or climbing."]],
          slides: [
            { title: "Children learn through play", bullets: ["Start from what they enjoy", "A small, fun stretch"] },
            { title: "Six parts of a plan", bullets: ["Age, goal, materials", "Steps, safety note", "How you will know it worked"] },
            { title: "Plan for every child", bullets: ["An easier and a harder way", "Words and pictures", "Ideas from families"] }
          ],
          tryIt: "Write a one-page activity plan for children ages 3 to 5 using things you have at home (cups, socks, paper, leaves). Include all six parts and name the CDA subject area it supports.",
          youCanNow: "write a short, safe activity plan that fits the children's age and names a CDA subject area.",
          quickCheck: [
            { objective: "O5", q: "Which goal fits 3- and 4-year-olds best?", options: ["Write a full paragraph about leaves", "Sort leaves into big and small", "Do long division with leaves", "Read a science textbook alone"], answer: 1, why: "Sorting by size is a small, playful stretch for preschool children." },
            { objective: "O5", q: "Your plan for 3-year-olds uses small beads. What is missing from the plan?", options: ["A longer list of steps", "A harder goal", "A safety note: beads are a choking hazard, so use larger items", "More beads"], answer: 2, why: "Every plan needs a safety note, and small items are a choking risk for young children." }
          ]
        },
        {
          title: "Your portfolio, the exam, the visit and your plan",
          objectives: ["O6"],
          minutes: 6,
          goal: "Make a dated CDA preparation plan from training to Verification Visit.",
          text: [
            "The portfolio holds your own writing and resources about your work with children and families. The Council's Competency Standards book for your setting (for Preschool, the green edition) explains exactly what goes in it. Get the book early and fill the portfolio as you go; it must be finished within 6 months of applying.",
            "Plan backwards from the dates that matter. Work hours count only if they are within 3 years of your application, so start a simple log now: date, place, ages and hours, signed by a supervisor if your program allows. Pick training that covers all eight subject areas and keep every certificate.",
            "Prepare for the exam by reviewing the eight subject areas, practicing scenario questions like the ones in this course, and booking a Pearson VUE test site after you get your Ready to Schedule notice. Before the Verification Visit, practice talking about your strengths and one area you are growing in. Check every fee and step on cdacouncil.org, and ask about scholarships."
          ],
          steps: ["Write today's date and your setting.", "Pick a training program and a target date to finish the 120 hours.", "Start a work-hours log and set a date to reach the hours your setting needs.", "Set a portfolio start date and an apply date within 6 months of it.", "Add target months for the exam and the Verification Visit.", "Put the dates in your phone calendar or on a paper calendar."],
          words: [["Competency Standards book", "the Council's book for your setting that explains the portfolio and standards."], ["Ready to Schedule notice", "the Council's message that you may now book your exam or visit."], ["Work-hours log", "a record of the dates and hours you worked with children."]],
          slides: [
            { title: "Your portfolio", bullets: ["Get the Competency Standards book for your setting", "Fill it as you go", "Finish within 6 months of applying"] },
            { title: "Plan backwards", bullets: ["Work hours: within 3 years of applying", "Training: all 8 subject areas, keep certificates", "Log hours from day one"] },
            { title: "Exam and visit", bullets: ["Review the 8 subject areas", "Book Pearson VUE after Ready to Schedule", "Practice talking about your strengths"] }
          ],
          sources: [
            { name: "CDA Council: Preschool pathway", url: "https://www.cdacouncil.org/en/educator-pathways/preschool/" },
            { name: "CDA Council: Educator pathways (all settings)", url: "https://www.cdacouncil.org/en/educator-pathways/" },
            { name: "Pearson VUE: CDA exam", url: "https://home.pearsonvue.com/cdaexam" }
          ],
          tryIt: "Final task: make your CDA preparation plan with real dates for training, work hours, portfolio, applying, the exam and the Verification Visit. Attach your activity plan from Lesson 5 as your first portfolio-style piece.",
          youCanNow: "turn the CDA steps into your own plan with dates, ready to start.",
          quickCheck: [
            { objective: "O6", q: "You worked in a preschool four years ago and want to apply next month. What should you check?", options: ["Nothing; all past hours count forever", "Whether you still need a diploma", "Whether the exam is optional", "Whether your hours fall within 3 years of your application"], answer: 3, why: "Experience hours must be within 3 years of submitting your application." },
            { objective: "O6", q: "When should you start your work-hours log?", options: ["Now, from your first day with children", "After you pass the exam", "Only after the Verification Visit", "Never; the Council counts them for you"], answer: 0, why: "A log from day one keeps your hours and dates clear when you apply." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Teaching, observing and your CDA plan",
        questions: [
          { objective: "O4", q: "Which is an objective observation?", options: ["\"A. is lazy at clean-up.\"", "\"A. sat on the rug and watched while others put blocks away.\"", "\"A. never helps.\"", "\"A. is the worst listener.\""], answer: 1, why: "It describes only what was seen, with no label." },
          { objective: "O4", q: "How should you protect a child's privacy in your notes?", options: ["Post the notes in a parent group chat", "Use the child's full name and address", "Use a first initial and keep notes in the program", "Share them with anyone who asks"], answer: 2, why: "Initials and keeping notes in the program protect the child." },
          { objective: "O5", q: "Which part tells you whether an activity worked?", options: ["How you will know it worked", "The materials list", "The age group", "The title"], answer: 0, why: "Saying how you will know it worked lets you check the goal." },
          { objective: "O5", q: "How do you plan for children with different skills in one activity?", options: ["Give everyone the hardest version", "Leave out children who struggle", "Do the activity only once a year", "Offer an easier and a harder way to do it"], answer: 3, why: "Easier and harder versions let every child join and stretch a little." },
          { objective: "O6", q: "The portfolio for the Preschool CDA must be prepared within what time of applying?", options: ["3 years", "6 months", "1 week", "10 years"], answer: 1, why: "The Council's page says to prepare the portfolio within 6 months of submitting your application." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Early Childhood Education and CDA Credential Preparation",
    questions: [
      { objective: "O1", q: "What does this course do for your CDA?", options: ["It grants the CDA", "It replaces the exam", "It prepares you; the Council grants the credential", "It counts as your Verification Visit"], answer: 2, why: "The Council for Professional Recognition grants the CDA; this course prepares you." },
      { objective: "O1", q: "How many CDA subject areas must your 120 training hours cover?", options: ["Eight, with at least 10 hours each", "Two", "Just one of your choice", "Twelve, with 5 hours each"], answer: 0, why: "The Council asks for at least 10 hours in each of the eight subject areas." },
      { objective: "O1", q: "Where is the CDA exam taken?", options: ["At your child care center", "At a Pearson VUE test site", "At the DMV", "By phone"], answer: 1, why: "The CDA exam is computer-based at a Pearson VUE test site." },
      { objective: "O1", q: "What happens during the Verification Visit?", options: ["You pay your fee in cash", "You take the written exam", "A parent grades your teaching", "A PD Specialist reviews your portfolio, watches you work and talks with you"], answer: 3, why: "The PD Specialist reviews the portfolio, observes you with children and holds a reflective dialogue." },
      { objective: "O2", q: "Where can you find your state's child care licensing contacts?", options: ["A social media group", "childcare.gov state resources", "A random blog", "The CDA exam"], answer: 1, why: "Childcare.gov links to each state's and territory's resources." },
      { objective: "O2", q: "How long should you scrub hands with soap?", options: ["At least 20 seconds", "2 seconds", "Only if they look dirty", "Just rinse with water"], answer: 0, why: "Scrubbing with soap for at least 20 seconds removes germs." },
      { objective: "O2", q: "What belongs in a baby's crib for sleep?", options: ["A pillow and a blanket", "Stuffed toys", "Crib bumpers", "Only a fitted sheet on a firm, flat mattress"], answer: 3, why: "Safe to Sleep says nothing in the crib except a fitted sheet on a firm, flat, level surface." },
      { objective: "O2", q: "Ratios (how many children per adult) are:", options: ["The same everywhere", "Chosen by each teacher", "Set by each state's licensing rules", "Set by the parents"], answer: 2, why: "States set ratios, and they differ by state and age." },
      { objective: "O3", q: "A mandated reporter must report when they:", options: ["Have proof", "Have a reason to suspect abuse or neglect", "Get permission from the family", "Finish an investigation"], answer: 1, why: "The law asks for a report on reasonable suspicion; you do not need proof." },
      { objective: "O3", q: "Which is part of YOUR job after a child tells you about harm?", options: ["Write down their exact words, date and time", "Question the child many times", "Confront the parent", "Promise to keep it secret"], answer: 0, why: "You record facts and report; the agency investigates." },
      { objective: "O3", q: "You do not know where to report in your state. Who can help?", options: ["A neighbor", "The child's classmates", "The Childhelp National Child Abuse Hotline", "Nobody, so you wait"], answer: 2, why: "Childhelp (1-800-422-4453) helps you reach the right place; call 911 if a child is in danger." },
      { objective: "O4", q: "Which word does NOT belong in an observation note?", options: ["\"walked\"", "\"said\"", "\"stacked\"", "\"naughty\""], answer: 3, why: "\"Naughty\" is a label; notes record actions and words." },
      { objective: "O4", q: "Why do teachers write observation notes?", options: ["To punish children", "To learn what each child can do and plan next steps", "To post online", "To compare children's families"], answer: 1, why: "Notes help you plan and share facts with families." },
      { objective: "O4", q: "A child says, \"I made a rocket!\" How do you record it?", options: ["Write the exact words in quotation marks", "Write \"the child is creative\"", "Skip it", "Write what you think they meant"], answer: 0, why: "Quoting exact words keeps the note objective." },
      { objective: "O5", q: "Young children learn best through:", options: ["Long lectures", "Worksheets all day", "Play with a small, fun stretch", "Sitting still and waiting"], answer: 2, why: "Play that stretches children a little is how young children learn." },
      { objective: "O5", q: "Which is a complete activity plan?", options: ["\"Do art.\"", "\"Leaves.\"", "\"Have fun.\"", "Age, goal, materials, steps, safety note, and how you will know it worked"], answer: 3, why: "All six parts make a plan someone else could use." },
      { objective: "O5", q: "Running, jumping and climbing are:", options: ["Gross motor skills", "Fine motor skills", "Reading skills", "Math skills"], answer: 0, why: "Gross motor skills use the big muscles of the body." },
      { objective: "O6", q: "Your experience hours count only if they are within:", options: ["10 years of applying", "3 years of applying", "1 month of applying", "Any time in your life"], answer: 1, why: "The Council's page says within 3 years of submitting your application." },
      { objective: "O6", q: "Which book explains what goes in your portfolio?", options: ["Any parenting magazine", "Your state driver's manual", "The Council's Competency Standards book for your setting", "A cookbook"], answer: 2, why: "The Competency Standards book for your setting has the portfolio instructions." },
      { objective: "O6", q: "What is the best first step for your CDA plan?", options: ["Book the Verification Visit today", "Pay every fee before checking", "Wait until you have 480 hours, then think about it", "Choose your setting and write dates for training, hours, portfolio, exam and visit"], answer: 3, why: "A dated plan that starts with your setting keeps you inside the time windows." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Pre-Test: What Do You Already Know?", from: [1, 3, 6, 8, 11, 14, 17, 18] },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and check it again.",
    criteria: [
      { name: "Requirements right", objective: "O1", notYet: "Steps are missing or the hours and time windows are wrong.", meets: "Lists the setting, 120 training hours across all eight subject areas, the work hours, portfolio, exam and visit correctly.", exceeds: "Also notes the current fee, a scholarship to apply for and the renewal date, all checked on cdacouncil.org." },
      { name: "Dated plan", objective: "O6", notYet: "No dates, or dates that break the 3-year or 6-month windows.", meets: "Real target dates for each step that keep experience within 3 years and the portfolio within 6 months of applying.", exceeds: "Includes a work-hours log started today and calendar reminders." },
      { name: "Activity plan", objective: "O5", notYet: "Missing a goal, safety note or way to check it worked.", meets: "Age, goal, materials, steps, safety note, how you will know it worked and a CDA subject area.", exceeds: "Adds an easier and harder version and one way to involve families." },
      { name: "Safety thinking", objective: "O2", notYet: "The activity or plan ignores supervision, handwashing or choking hazards.", meets: "The safety note covers supervision and any hazard in the materials.", exceeds: "Names who licenses child care in their state and one training it requires." },
      { name: "Observation and reporting ready", objective: "O4", notYet: "Sample note uses labels, or no state reporting contact is written down.", meets: "Includes one objective observation note and the state's reporting contact card.", exceeds: "The note leads to a clear next step for the child, marked as the learner's idea." }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Learners who enroll in CDA training covering the eight subject areas within 60 days",
      "Learners who apply for the CDA, and who are awarded it, within 12 to 18 months (follow-up survey)",
      "Learners hired or promoted in a child care, Head Start or preschool job within 6 months",
      "Partner programs report new staff who know safe sleep, supervision and mandated reporting from day one"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A phone or computer with internet to open cdacouncil.org and childcare.gov, or printouts of those pages",
      "Paper, pen and a paper or phone calendar",
      "Everyday items for the activity plan (cups, socks, paper, leaves)",
      "Optional: the Council's Competency Standards book for the learner's setting",
      "About 75 minutes in total, in short sessions"
    ],
    facilitatorNotes: [
      "This course prepares learners; it does not count as CDA training hours unless your program is set up to award them. Point learners to approved training for the 120 hours.",
      "Before teaching, check the current CDA requirements, fees and scholarships on cdacouncil.org, and your state's licensing and mandated reporting rules; they change.",
      "Observation practice: use children's videos or a learner's own child with the parent's okay. Never collect photos or real names of other people's children.",
      "Mandated reporting can bring up hard memories. Give a content note before Lesson 3, allow breaks, and share local support resources.",
      "Learners with a criminal record: background checks are part of child care work. Help them look up their state's rules and connect them with legal aid rather than guessing.",
      "Score the final task with the rubric, and give feedback on one Not yet row at a time."
    ]
  }
};
