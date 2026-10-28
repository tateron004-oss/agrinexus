"use strict";

// Koach Learn course: Youth -> "AI and Career Exploration". Skill-building course for teens about 13-18: by the end the student can DO the skill in `outcome`.
// Two chapters of three micro-lessons; a knowledge check closes each chapter; a 20-question quiz closes the course. Shape: scripts/koachlearn-courses/README.md.

module.exports = {
  id: "youth-ai-career-exploration",
  category: "Youth",
  name: "AI and Career Exploration",
  skills: "Finding careers that match your interests, Researching a career with official sources, Seeing how AI is changing jobs, Making a career pathway plan, Preparing for a first job",
  outcome: "use a free interest quiz, an AI assistant and official career sites to choose two careers that fit you, check their pay, training and outlook, and make a step-by-step plan from high school to your first job in that field.",
  about: [
    "This course is for teens about 13 to 18 who are wondering \"What could I be?\" You do not need to know yet. This course helps you explore.",
    "You will take a free interest quiz, use AI to brainstorm careers that fit what you like (games, music, sports, helping people, building things), check the real facts on official government career sites, see how AI is changing work, and build a plan you can start this year.",
    "Check each tool's age rule and your school's AI rules, and involve a parent or guardian before you sign up for anything. A school counselor is a great partner for this course too. Each lesson is about five minutes and ends with a \"Try it now\" task."
  ],
  finalTask: "Make a one-page career plan for one career you are curious about: why it fits your interests, its typical training, pay and job outlook from an official site, one way AI is used in that work, and three steps you can take this school year (a class, a club or activity, and a person to talk to).",
  chapters: [
    {
      name: "Chapter 1: Finding careers that fit you",
      lessons: [
        {
          title: "Starting with what you like",
          minutes: 5,
          goal: "Take a free interest quiz and list your top interests.",
          text: [
            "A good career search starts with you: what you enjoy, what you are good at and what matters to you. Maybe you love fixing things, drawing, organizing events, helping friends with problems, or figuring out how a game works.",
            "My Next Move is a free career site from the U.S. Department of Labor. Its interest profiler asks you about kinds of work you might enjoy and suggests careers that match. Your school counselor may have other interest quizzes too.",
            "Write down your results and the three activities you enjoy most. These are your starting clues."
          ],
          steps: ["Go to mynextmove.org.", "Open the interest profiler and answer honestly.", "Write down your top interest areas.", "Add three activities you enjoy most."],
          words: [["Interest profiler", "a quiz that matches what you like with kinds of work."], ["Career", "the kind of work you do over a long time, often with growing skills."]],
          sources: [{ name: "My Next Move (U.S. Department of Labor)", url: "https://www.mynextmove.org/" }],
          slides: [
            { title: "Start with you", bullets: ["What you enjoy", "What you are good at", "What matters to you"] },
            { title: "Take a free interest quiz", bullets: ["My Next Move (mynextmove.org)", "Free, from the U.S. Department of Labor", "Your counselor may have others"] },
            { title: "Write down your clues", bullets: ["Your top interest areas", "Three activities you love"] }
          ],
          tryIt: "Take the interest profiler on mynextmove.org (or one your counselor gives you). Write down your top interest areas and three things you love doing.",
          youCanNow: "describe your interests in a way that helps you search for careers."
        },
        {
          title: "Brainstorming careers with AI",
          minutes: 5,
          goal: "Use AI to turn your interests into a list of careers to explore.",
          text: [
            "Now give your clues to an AI assistant you are allowed to use: \"I am 15. I like video games, drawing and helping younger kids. Suggest 10 careers that mix these, from ones that need a short training program to ones that need college.\"",
            "Ask follow-ups: \"Which of these work with AI?\" \"Which ones can I try in high school?\" \"Explain what a day looks like in career 3.\"",
            "AI is good for ideas but can be wrong about pay, training and job numbers. Treat its list as ideas to check, not facts."
          ],
          steps: ["Give AI your age range and interests (no private details).", "Ask for 10 careers with different training paths.", "Ask follow-ups about a typical day and high school steps.", "Pick two to research."],
          words: [["Training path", "the schooling or practice you need for a job, like a certificate, apprenticeship or college degree."], ["Apprenticeship", "a paid job where you learn a skilled trade while working."]],
          slides: [
            { title: "Give AI your clues", bullets: ["Your interests and age range", "Ask for 10 careers", "Mix short training and college paths"] },
            { title: "Ask follow-ups", bullets: ["\"What does a day look like?\"", "\"What can I try in high school?\""] },
            { title: "Ideas, not facts", bullets: ["AI can be wrong about pay and training", "Pick two careers to check"] }
          ],
          tryIt: "Give an AI assistant your interests and ask for 10 careers with different training paths. Ask what a day looks like in two of them, then pick your two favorites.",
          youCanNow: "use AI to brainstorm careers that match your interests."
        },
        {
          title: "Checking the facts on official career sites",
          minutes: 5,
          goal: "Look up a career's pay, training and job outlook on an official site.",
          text: [
            "The Occupational Outlook Handbook from the U.S. Bureau of Labor Statistics (bls.gov/ooh) is a free, official guide to hundreds of jobs. For each one it shows typical pay, the usual education and training, and how many jobs are expected in the future.",
            "My Next Move also shows what people in each job do, the skills they use and the training they need. Pay changes over time and from place to place, so always look up the current numbers rather than trusting a number from AI or a friend.",
            "Compare what AI told you with what the official site says. Where they disagree, trust the official site."
          ],
          steps: ["Open bls.gov/ooh or mynextmove.org.", "Search for your career.", "Write down pay, typical training and job outlook.", "Compare with what AI said and trust the official site."],
          words: [["Median pay", "the middle pay: half of workers earn more, half earn less."], ["Job outlook", "how many jobs are expected in the future."]],
          sources: [{ name: "Occupational Outlook Handbook (U.S. Bureau of Labor Statistics)", url: "https://www.bls.gov/ooh/" }, { name: "My Next Move (U.S. Department of Labor)", url: "https://www.mynextmove.org/" }],
          slides: [
            { title: "Official career guides", bullets: ["bls.gov/ooh: pay, training, outlook", "mynextmove.org: tasks, skills, training"] },
            { title: "Look up current numbers", bullets: ["Pay changes over time and by place", "Do not trust a number from AI alone"] },
            { title: "Compare and decide", bullets: ["AI vs official site", "When they disagree, trust the official site"] }
          ],
          tryIt: "Look up your two careers on bls.gov/ooh or mynextmove.org. Write down the typical training, pay and job outlook for each, and note one thing AI got different.",
          youCanNow: "research a career's real facts on an official site."
        }
      ],
      check: {
        title: "Knowledge Check 1: Finding careers that fit you",
        questions: [
          { q: "What does an interest profiler do?", options: ["Finds your password", "Matches what you like with kinds of work", "Gives you a job", "Grades your homework"], answer: 1, why: "It suggests careers based on your interests." },
          { q: "Who offers My Next Move?", options: ["A video game company", "A social media app", "Your school cafeteria", "The U.S. Department of Labor"], answer: 3, why: "It is sponsored by the U.S. Department of Labor." },
          { q: "Which prompt is best for brainstorming careers?", options: ["\"I like games, drawing and helping kids. Suggest 10 careers with different training paths.\"", "\"jobs\"", "\"give me a job\"", "\"what is work\""], answer: 0, why: "It gives interests and asks for variety." },
          { q: "AI says a job pays a certain amount. You should:", options: ["Believe it", "Tell everyone", "Check the current pay on an official site", "Pick that job right away"], answer: 2, why: "AI can be wrong; official sites have current numbers." },
          { q: "What is median pay?", options: ["The highest pay", "The lowest pay", "The middle pay: half earn more, half earn less", "Pay for interns only"], answer: 2, why: "Median is the middle point." }
        ]
      }
    },
    {
      name: "Chapter 2: Planning your path",
      lessons: [
        {
          title: "How AI is changing work",
          minutes: 5,
          goal: "Describe one way AI is used in a career you like and the human skills that still matter.",
          text: [
            "AI is changing many jobs. Nurses use it to help with records, mechanics use it to find problems in cars, designers use it to try ideas fast, and game studios use it to test levels. Some tasks get done by AI; new tasks appear.",
            "Human skills matter even more: talking with people, solving new problems, being creative, being reliable and knowing when the AI is wrong.",
            "Ask AI: \"How is AI used today in [career]? What human skills are still most important?\" Then check what it says with a real person in that job or a trusted news or industry site."
          ],
          words: [["Automation", "when machines or software do tasks people used to do."], ["Soft skills", "people skills like communication, teamwork and dependability."]],
          slides: [
            { title: "AI is changing jobs", bullets: ["Nurses, mechanics, designers, game testers", "Some tasks go to AI; new tasks appear"] },
            { title: "Human skills matter more", bullets: ["Talking with people", "Solving new problems", "Creativity and reliability", "Spotting when AI is wrong"] },
            { title: "Find out for your career", bullets: ["Ask AI how it is used", "Check with a real person or trusted site"] }
          ],
          tryIt: "Ask AI how AI is used in one of your two careers and which human skills matter most. Write down one AI use and two human skills, and one question you would ask a real person in that job.",
          youCanNow: "explain how AI touches a career and which human skills still matter."
        },
        {
          title: "Building a pathway from high school",
          minutes: 5,
          goal: "Make a step-by-step plan from now to a first job in a career.",
          text: [
            "A career pathway is the road from where you are now to the job you want. It might include classes, clubs, volunteering, a summer program, a certificate, an apprenticeship, community college or a university.",
            "Ask AI: \"I am in 10th grade and interested in becoming an electrician. Make a step-by-step path from now to my first job, with things I can do this year.\" Then check training rules on official sites, because licenses and programs differ by state.",
            "Your school counselor can tell you which classes and programs your school offers, like career and technical education (CTE) or dual enrollment."
          ],
          steps: ["Name your grade and target career.", "Ask AI for a step-by-step path with this-year actions.", "Check training and license rules on official sites.", "Ask your counselor what your school offers."],
          words: [["Career pathway", "the steps from school to a job in a field."], ["CTE", "career and technical education: school classes that teach job skills."], ["Dual enrollment", "taking college classes while still in high school."]],
          slides: [
            { title: "A pathway is a road", bullets: ["From where you are to the job you want", "Classes, clubs, programs, training"] },
            { title: "Ask AI for the steps", bullets: ["Your grade and target career", "Things you can do this year"] },
            { title: "Check and ask", bullets: ["Licenses and programs differ by state", "Ask your counselor about CTE and dual enrollment"] }
          ],
          tryIt: "Ask AI for a step-by-step path to one of your careers. Pick three things you can do this school year and check one of them with your counselor or an official site.",
          youCanNow: "build a realistic career pathway plan."
        },
        {
          title: "Getting ready for a first job",
          minutes: 5,
          goal: "Know the basic youth work rules and prepare a simple first-job pitch.",
          text: [
            "A first job, volunteering or job shadowing helps you test a career. Under federal law, most jobs need you to be at least 14. If you are 14 or 15, your hours are limited, for example no more than 3 hours on a school day and only between 7 a.m. and 7 p.m. for most of the year (until 9 p.m. from June 1 to Labor Day). At 16 and 17, federal law does not limit hours, but no one under 18 may do hazardous jobs.",
            "Many states have stricter rules and may need a work permit. When federal and state laws both apply, the stricter one counts. Check your state's labor office and talk with a parent or guardian.",
            "AI can help you write a short pitch about yourself: \"I am 15, I am reliable, I help coach my little brother's soccer team, and I want to learn customer service.\" Practice saying it out loud. Do not put your address or phone number into the AI."
          ],
          steps: ["Check federal and state youth work rules.", "Talk with a parent or guardian about work or volunteering.", "Use AI to draft a 3-sentence pitch about yourself.", "Practice it out loud."],
          words: [["Work permit", "a paper some states require before a teen can work."], ["Job shadowing", "following a worker for a day to see what the job is like."], ["Hazardous job", "work that is dangerous and not allowed for anyone under 18."]],
          sources: [{ name: "U.S. Department of Labor Fact Sheet #43: Child labor rules for nonagricultural jobs", url: "https://www.dol.gov/agencies/whd/fact-sheets/43-child-labor-non-agriculture" }, { name: "U.S. Department of Labor: Child labor and state laws", url: "https://www.dol.gov/agencies/whd/child-labor" }],
          slides: [
            { title: "Federal youth work rules", bullets: ["Most jobs: age 14 and up", "14-15: 3 hours max on school days", "14-15: 7 a.m. to 7 p.m. (9 p.m. June 1 to Labor Day)", "No hazardous jobs under 18"] },
            { title: "Check your state", bullets: ["States may need a work permit", "The stricter rule counts", "Talk with a parent or guardian"] },
            { title: "Your first-job pitch", bullets: ["3 sentences about you", "Draft with AI, no private details", "Practice it out loud"] }
          ],
          tryIt: "Final task: make your one-page career plan: why the career fits you, its training, pay and outlook from an official site, one way AI is used in it, and three steps for this school year. Add your 3-sentence first-job pitch at the bottom.",
          youCanNow: "explore careers, check the facts, plan your path and pitch yourself for a first job."
        }
      ],
      check: {
        title: "Knowledge Check 2: Planning your path",
        questions: [
          { q: "Which skill matters MORE as AI spreads?", options: ["Communication and solving new problems", "Ignoring people", "Never learning new tools", "Copying answers"], answer: 0, why: "Human skills become more valuable as AI handles routine tasks." },
          { q: "What is a career pathway?", options: ["A hiking trail", "A video game map", "A type of resume", "The steps from school to a job in a field"], answer: 3, why: "A pathway is the road from now to the job." },
          { q: "Who can tell you which CTE or dual enrollment classes your school offers?", options: ["A pop-up ad", "Your school counselor", "A random app", "Nobody"], answer: 1, why: "Counselors know the school's programs." },
          { q: "Under federal law, a 15-year-old on a school day may work at most:", options: ["3 hours", "8 hours", "12 hours", "No limit"], answer: 0, why: "The federal limit for 14-15 year olds is 3 hours on a school day." },
          { q: "Your state's youth work rule is stricter than the federal rule. Which counts?", options: ["The federal rule", "Neither", "The stricter rule", "Whichever your friend likes"], answer: 2, why: "When both apply, the stricter standard must be followed." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: AI and Career Exploration",
    questions: [
      { q: "A good career search starts with:", options: ["The highest-paying job only", "What you enjoy and are good at", "A random pick", "What a stranger says"], answer: 1, why: "Your interests are the best starting clues." },
      { q: "mynextmove.org is:", options: ["A game store", "A dating site", "A social media app", "A free career site from the U.S. Department of Labor"], answer: 3, why: "It is sponsored by the Department of Labor." },
      { q: "After an interest quiz you should:", options: ["Forget the results", "Post your password", "Quit school", "Write down your top interest areas"], answer: 3, why: "Your results are clues for the next step." },
      { q: "When brainstorming careers with AI, leave out:", options: ["Your interests", "Private details like your address", "Your age range", "Your favorite school subject"], answer: 1, why: "Never put private information into AI." },
      { q: "An apprenticeship is:", options: ["A video game", "An unpaid test", "A paid job where you learn a trade while working", "A college dorm"], answer: 2, why: "Apprentices earn while they learn." },
      { q: "AI's career list should be treated as:", options: ["Ideas to check", "Guaranteed facts", "A job offer", "A school grade"], answer: 0, why: "AI can be wrong about pay and training." },
      { q: "bls.gov/ooh shows each job's:", options: ["Song lyrics", "Pay, training and job outlook", "Game scores", "Weather"], answer: 1, why: "The Occupational Outlook Handbook gives those facts." },
      { q: "AI and bls.gov disagree about training for a job. Trust:", options: ["AI", "Neither", "A meme", "The official site"], answer: 3, why: "Official sites are checked and current." },
      { q: "Job outlook means:", options: ["How many jobs are expected in the future", "The view from the office", "Your outfit for work", "Your boss's mood"], answer: 0, why: "Outlook is about future job numbers." },
      { q: "Automation means:", options: ["Driving a car", "A school rule", "Machines or software doing tasks people used to do", "A music style"], answer: 2, why: "Automation shifts tasks to machines." },
      { q: "Which is a soft skill?", options: ["Typing speed only", "Owning a laptop", "Teamwork", "Knowing a password"], answer: 2, why: "Soft skills are people skills like teamwork." },
      { q: "To check what AI says about AI in a job, you can:", options: ["Ask a real person in that job", "Trust it fully", "Ask a pop-up ad", "Skip checking"], answer: 0, why: "People in the job know how it really works." },
      { q: "Dual enrollment means:", options: ["Having two lockers", "Two phones", "Two lunches", "Taking college classes while in high school"], answer: 3, why: "Students earn college credit early." },
      { q: "Why check licenses on official sites?", options: ["AI is always right", "Rules differ by state", "They never change", "It is not needed"], answer: 1, why: "Training and license rules vary by state." },
      { q: "A good pathway prompt includes:", options: ["Your grade and target career", "Your password", "Your address", "Nothing"], answer: 0, why: "Grade and goal let AI make a fitting plan." },
      { q: "Under federal law, 14- and 15-year-olds may usually work only between:", options: ["Midnight and 6 a.m.", "Any time", "7 a.m. and 7 p.m. (9 p.m. from June 1 to Labor Day)", "Only on school days"], answer: 2, why: "Those are the federal time-of-day limits." },
      { q: "Under federal law, who may not do hazardous jobs?", options: ["Only people under 12", "Anyone under 18", "Adults", "Nobody"], answer: 1, why: "Hazardous jobs are off-limits to anyone under 18." },
      { q: "Before taking a first job you should:", options: ["Lie about your age", "Skip school", "Give AI your phone number", "Check your state's rules and talk with a parent or guardian"], answer: 3, why: "State rules may require a permit, and a parent or guardian should know." },
      { q: "Job shadowing is:", options: ["Hiding from your boss", "A video game mode", "A type of resume", "Following a worker for a day to see the job"], answer: 3, why: "Shadowing lets you see a job up close." },
      { q: "A first-job pitch should be:", options: ["A 10-page essay", "About 3 sentences about you, practiced out loud", "Your address and phone number", "Written by AI and never read"], answer: 1, why: "Short and practiced is easy to say with confidence." }
    ]
  }
};
