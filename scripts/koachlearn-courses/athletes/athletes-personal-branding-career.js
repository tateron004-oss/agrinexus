"use strict";

// Koach Learn course: Athletes -> "Personal Branding and Athlete Career Development". Skill-building course: by the end the student can DO the skill in `outcome`.
// Shape: scripts/koachlearn-courses/README.md. Model: re-entry/reentry-ai-digital-confidence.js.

module.exports = {
  id: "athletes-personal-branding-career",
  category: "Athletes",
  name: "Personal Branding and Athlete Career Development",
  skills: "Naming your transferable skills, Writing your athlete story, Building a résumé with AI, Setting up a LinkedIn profile, Networking and informational interviews",
  outcome: "turn your athlete experience into career tools: a list of transferable skills with proof, a 60-second story, a one-page résumé built with AI, a LinkedIn profile, and one informational interview request sent to someone in a career you are curious about.",
  about: [
    "This course is for high school, college and early-career athletes thinking about life during and after sport, and for coaches who mentor them. Most athletes will have a career outside playing, and sport has already taught you skills employers want.",
    "You will name those skills, tell your story in a way employers understand, build a résumé and a LinkedIn profile with help from AI, and start building a network.",
    "Each lesson is about five minutes with a \"Try it now\" task. A knowledge check closes each chapter, and a 20-question quiz closes the course."
  ],
  finalTask: "Build your career starter kit: a list of five transferable skills with a sports example for each, a 60-second story, a one-page résumé made with AI and checked by you, a LinkedIn profile (if you meet its age rules) or a career portfolio page, and one polite informational interview request sent to a real person.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "High school, college and early-career athletes thinking about life during and after sport, and coaches who mentor them.",
    startingPoint: "Have years of sport experience, often with leadership roles, and use a smartphone daily. Many have no résumé, cannot describe their skills in work language, have not explored careers beyond playing, and have never asked a professional for advice.",
    gap: "Most athletes will have a career outside playing, and the change can be hard if they start late. Turning sport experience into proof of skills, a clear story, a résumé and a network gives them confidence and options now and after sport.",
    constraints: [
      "Plain language at about a grade 8 reading level",
      "A phone or computer with a free AI assistant; LinkedIn only if the learner meets its current age rules, otherwise Google Sites",
      "About 60 minutes in total",
      "No Social Security numbers or other private numbers pasted into AI",
      "Athletes under 18 should involve a parent or guardian before contacting adults they do not know"
    ],
    prerequisites: "None"
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Given your roles, routines and challenges in sport", action: "list five transferable skills with a real sports example for each", standard: "with every example true and specific enough to count as proof" },
    { id: "O2", condition: "Using the Past, Present and Future structure", action: "write and say a 60-second story about who you are and where you are going", standard: "about 150 words, in your own voice, and practiced out loud until it sounds natural" },
    { id: "O3", condition: "Given your interests and an AI assistant", action: "list three careers to explore and one way to learn about each", standard: "with education and pay checked on an official career site or with a career counselor" },
    { id: "O4", condition: "Using your notes and an AI assistant", action: "create a one-page résumé that describes sport in work language", standard: "with action-word bullets, numbers where true, every fact checked, no private numbers shared and a human review" },
    { id: "O5", condition: "If you meet LinkedIn's age rules, or using Google Sites if not", action: "set up a professional profile with a photo, headline, About section, experience and skills", standard: "consistent with your résumé and with five connections made using a short personal note" },
    { id: "O6", condition: "Given one person in a career you are curious about", action: "write and send a polite informational interview request", standard: "with who you are, how you found them, why their career interests you, a small ask, three prepared questions and a thank-you after" }
  ],
  chapters: [
    {
      name: "Chapter 1: Your story and skills",
      lessons: [
        {
          objectives: ["O1"],
          title: "Your transferable skills",
          minutes: 5,
          goal: "Name five skills from sport that transfer to work, each with a real example.",
          text: [
            "Transferable skills are skills you can use in many jobs. Sport builds lots of them: teamwork, leadership, time management, handling pressure, taking feedback, discipline, communication and resilience after losses.",
            "Employers want proof, not just words. \"Leadership\" is a claim. \"Captain of a 20-player team; ran warm-ups and settled conflicts\" is proof.",
            "An AI assistant can help you find skills you did not notice: \"I've played four years of varsity soccer, was captain senior year, balanced practice with a part-time job, and came back from an ACL injury. What transferable skills does this show, with one example each?\" Keep only what is true."
          ],
          steps: ["List what you did in sport: roles, routines, challenges.", "Ask AI which skills they show.", "Pick five skills.", "Write a real example for each.", "Remove anything that is not true."],
          words: [["Transferable skill", "a skill you can use in many different jobs."], ["Resilience", "bouncing back after a setback."]],
          slides: [
            { title: "Sport builds work skills", bullets: ["Teamwork, leadership", "Time management, pressure", "Feedback, discipline, resilience"] },
            { title: "Claim vs proof", bullets: ["Claim: \"leadership\"", "Proof: \"Captain of 20 players; ran warm-ups\""] },
            { title: "AI helps you spot them", bullets: ["Describe what you did", "Keep only what is true"] }
          ],
          tryIt: "Use an AI assistant to find skills in your sports experience. Write your top five, each with a true example.",
          youCanNow: "name your transferable skills and prove each with an example.",
          quickCheck: [
            { objective: "O1", q: "Which is a transferable skill?", options: ["Your jersey number", "Your team's record", "Taking feedback", "Your favorite drill"], answer: 2, why: "Transferable skills, like taking feedback, can be used in many jobs." },
            { objective: "O1", q: "You wrote \"teamwork\" on your list. How do you make it proof?", options: ["Add a real example, like organizing team study sessions before away games", "Write it in capital letters", "Add more skills", "Ask AI to make it sound bigger"], answer: 0, why: "Employers want proof, so add a real example." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Your 60-second athlete story",
          minutes: 5,
          goal: "Write and practice a 60-second story about who you are and where you are going.",
          text: [
            "People will ask \"Tell me about yourself\" in interviews, networking and even recruiting. Have a 60-second answer ready.",
            "Use three parts: Past (sport and what it taught you), Present (what you are doing now: school, work, training), Future (the direction you are curious about). Example: \"I've played basketball for ten years, and being captain taught me how to lead a group under pressure. Now I'm studying business and working part-time at a gym. I'm interested in sports marketing and want to learn how teams build fan communities.\"",
            "Ask an AI assistant to tighten it to about 150 words, then practice it out loud until it sounds natural, not memorized."
          ],
          steps: ["Write your Past, Present and Future in a sentence or two each.", "Ask AI to tighten it to about 150 words.", "Edit it into your voice.", "Practice out loud three times.", "Time yourself: about 60 seconds."],
          words: [["Elevator pitch", "a short spoken introduction you could give in an elevator ride."], ["Networking", "building relationships with people who can share advice and opportunities."]],
          slides: [
            { title: "\"Tell me about yourself\"", bullets: ["Interviews, networking, recruiting", "Have 60 seconds ready"] },
            { title: "Three parts", bullets: ["Past: sport and what it taught you", "Present: school, work, training", "Future: where you're curious"] },
            { title: "Polish it", bullets: ["AI tightens to ~150 words", "Practice out loud", "Natural, not memorized"] }
          ],
          tryIt: "Write your Past-Present-Future story, tighten it with AI, and record yourself saying it on your phone. Listen back once and fix one thing.",
          youCanNow: "tell your 60-second athlete story clearly and naturally.",
          quickCheck: [
            { objective: "O2", q: "What does the \"Present\" part of your story say?", options: ["Your childhood", "Your dream salary", "Your best game", "What you are doing now: school, work, training"], answer: 3, why: "Past is sport, Present is what you do now, Future is your direction." },
            { objective: "O2", q: "Your story sounds stiff and memorized. What do you do?", options: ["Read it off your phone", "Practice it out loud until it sounds natural", "Make it five minutes long", "Stop using it"], answer: 1, why: "Practice out loud until it sounds natural, not memorized." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Life after sport: exploring careers",
          minutes: 5,
          goal: "List three careers to explore and one way to learn about each.",
          text: [
            "Every athlete stops competing one day, by choice, injury or age. Planning early makes that change easier and gives you confidence now.",
            "Explore careers connected to your interests, not just sport. Inside sport: coaching, athletic training, sports marketing, broadcasting, analytics, facility management. Outside sport: business, health, tech, trades, teaching, public service and more.",
            "Use an AI assistant to brainstorm and explain careers, then check real details like education needed and pay on official career sites, such as the US Bureau of Labor Statistics' Occupational Outlook Handbook, or with a school career counselor."
          ],
          steps: ["List your interests outside winning.", "Ask AI for careers that match.", "Pick three to explore.", "Check each on an official career site or with a career counselor.", "Write one way to learn more about each."],
          words: [["Career counselor", "a person at school or in the community who helps you explore jobs."], ["Occupational Outlook Handbook", "a US government guide to jobs, education needed and pay."]],
          slides: [
            { title: "Every athlete transitions", bullets: ["Choice, injury or age", "Plan early, feel confident now"] },
            { title: "Explore widely", bullets: ["In sport: coaching, training, marketing, analytics", "Outside: business, health, tech, trades, teaching"] },
            { title: "Check real details", bullets: ["AI to brainstorm", "Official career sites for education and pay", "Talk to a career counselor"] }
          ],
          sources: [{ name: "US Bureau of Labor Statistics: Occupational Outlook Handbook", url: "https://www.bls.gov/ooh/" }],
          tryIt: "Ask an AI assistant for ten careers that fit your interests. Pick three and look up each one's education needs on an official career site or ask your career counselor.",
          youCanNow: "explore careers beyond playing and check details with official sources.",
          quickCheck: [
            { objective: "O3", q: "Which is a career outside sport?", options: ["Coaching", "Athletic training", "Sports broadcasting", "Teaching"], answer: 3, why: "Teaching is outside sport; the others are careers inside sport." },
            { objective: "O3", q: "AI tells you the pay for a career you like. What do you do next?", options: ["Check it on an official career site or with a career counselor", "Trust it completely", "Post it online", "Choose that career right away"], answer: 0, why: "Check real details like pay and education on official sources." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Your story and skills",
        questions: [
          { objective: "O1", q: "Which is proof of leadership?", options: ["\"I'm a leader\"", "\"Leadership!\"", "\"Captain of a 20-player team; ran warm-ups and settled conflicts\"", "\"Everyone likes me\""], answer: 2, why: "A real example proves the skill." },
          { objective: "O1", q: "AI says you have \"project management certification\". You don't. You:", options: ["Remove it", "Keep it", "Add more", "Make it bold"], answer: 0, why: "Only keep what is true." },
          { objective: "O2", q: "What are the three parts of your 60-second story?", options: ["Wins, losses, ties", "Name, age, address", "Stats, height, weight", "Past, Present, Future"], answer: 3, why: "It shows where you've been, are and are going." },
          { objective: "O3", q: "Why plan for life after sport early?", options: ["You must quit now", "Every athlete stops competing one day", "Coaches require it", "It's not useful"], answer: 1, why: "Planning early makes the change easier." },
          { objective: "O3", q: "Where should you check a career's education and pay?", options: ["A random comment", "An official career site or a career counselor", "An AI only", "A video game"], answer: 1, why: "Official sources are reliable." }
        ]
      }
    },
    {
      name: "Chapter 2: Résumé, LinkedIn and network",
      lessons: [
        {
          objectives: ["O4"],
          title: "Building a résumé with AI",
          minutes: 6,
          goal: "Build a one-page résumé that turns sports into work language.",
          text: [
            "A résumé is a one-page summary of your education, experience and skills. Athletes should include sport as experience, written in work language.",
            "Sections: Contact (name, city, professional email, phone), Education, Experience (jobs, internships, volunteering and athletics), Skills, and Honors. Write bullets that start with action words and include numbers: \"Balanced 20 hours a week of training with a 3.4 GPA\".",
            "Ask an AI assistant: \"Turn these notes into a one-page résumé for a sports marketing internship. Use action words and numbers.\" Do not paste private numbers like your Social Security number. Check every detail, and have a teacher, coach or career counselor review it."
          ],
          steps: ["Gather your education, jobs, volunteering and sports roles.", "Ask AI for a one-page résumé draft.", "Check every fact and number.", "Use action words and numbers.", "Have a counselor, teacher or coach review it."],
          words: [["Résumé", "a one-page summary of your education, experience and skills."], ["Action word", "a strong verb that starts a bullet, like led, organized or trained."]],
          slides: [
            { title: "Résumé sections", bullets: ["Contact and Education", "Experience, including athletics", "Skills and Honors"] },
            { title: "Strong bullets", bullets: ["Start with an action word", "Add a number", "\"Balanced 20 hrs/week training with a 3.4 GPA\""] },
            { title: "Use AI safely", bullets: ["No private ID numbers", "Check every fact", "Get a human review"] }
          ],
          tryIt: "Use AI to turn your notes into a one-page résumé. Fix any wrong facts and ask one adult to review it.",
          youCanNow: "build a one-page résumé that shows your athlete experience in work language.",
          quickCheck: [
            { objective: "O4", q: "Which section of a résumé includes your phone number and professional email?", options: ["Honors", "Skills", "Contact", "Education"], answer: 2, why: "Contact has your name, city, professional email and phone." },
            { objective: "O4", q: "Your AI résumé draft is ready. What do you do before sending it?", options: ["Send it right away", "Add your Social Security number", "Make it three pages", "Check every fact and have a counselor, teacher or coach review it"], answer: 3, why: "Check every detail and get a human review." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Your LinkedIn profile",
          minutes: 5,
          goal: "Set up a professional LinkedIn profile (or a career portfolio page if you are not old enough).",
          text: [
            "LinkedIn is a professional social network where employers, recruiters and alumni connect. Check LinkedIn's current minimum age rules before signing up; if you are too young, make a simple career page in Google Sites instead.",
            "A strong profile has: a clear, professional photo; a headline that says who you are and where you're going (\"Student-athlete | Business major | Interested in sports marketing\"); an About section adapted from your 60-second story; experience including athletics; and skills.",
            "Keep it professional and consistent with your résumé. Connect with coaches, teachers, teammates, alumni of your school and people in careers you like, with a short personal note."
          ],
          steps: ["Check LinkedIn's current age rules.", "Add a professional photo and headline.", "Adapt your 60-second story for About.", "Add experience, including athletics.", "Connect with five people with a short note."],
          words: [["LinkedIn", "a professional social network for careers and jobs."], ["Headline", "the short line under your name on LinkedIn."], ["Alumni", "people who graduated from your school."]],
          slides: [
            { title: "LinkedIn", bullets: ["Professional social network", "Check its current age rules"] },
            { title: "Strong profile", bullets: ["Professional photo", "Headline: who you are and where you're going", "About: your 60-second story"] },
            { title: "Connect", bullets: ["Coaches, teachers, alumni", "People in careers you like", "Add a short personal note"] }
          ],
          tryIt: "Set up or update your LinkedIn profile (or a Google Sites career page if you're too young). Ask AI for three headline options and pick one.",
          youCanNow: "set up a professional online profile that matches your résumé.",
          quickCheck: [
            { objective: "O5", q: "What should a LinkedIn headline say?", options: ["Who you are and where you are going", "Your phone number", "Your last game score", "A joke"], answer: 0, why: "A strong headline says who you are and where you are going." },
            { objective: "O5", q: "You want to connect with an alum who works in sports marketing. What do you do?", options: ["Send a request with no message", "Send a short personal note with the request", "Ask them for a job right away", "Message them every day"], answer: 1, why: "Connect with a short personal note." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Networking and informational interviews",
          minutes: 5,
          goal: "Write and send a polite informational interview request.",
          text: [
            "An informational interview is a short conversation, often 15 to 20 minutes, where you ask someone about their career. You are asking for advice, not a job.",
            "Athletes have a great network: former teammates, alumni athletes, coaches' contacts and local business owners who support your team. Many like helping student-athletes.",
            "Write a short request: who you are, how you found them, why their career interests you, and a clear, small ask (\"Could I ask you a few questions for 15 minutes in the next few weeks?\"). Prepare three questions, be on time, and send a thank-you message after."
          ],
          steps: ["Pick one person in a career you are curious about.", "Use AI to draft a short request.", "Make it personal and polite.", "Prepare three questions.", "Send a thank-you after the talk."],
          words: [["Informational interview", "a short talk to learn about someone's career, not to ask for a job."], ["Network", "the people you know who can share advice and opportunities."]],
          slides: [
            { title: "Informational interview", bullets: ["15-20 minutes", "Ask for advice, not a job"] },
            { title: "Your athlete network", bullets: ["Former teammates and alumni athletes", "Coaches' contacts", "Local supporters"] },
            { title: "The request", bullets: ["Who you are, how you found them", "Why their career interests you", "A small, clear ask"] }
          ],
          tryIt: "Final task: finish your skills list, 60-second story, résumé and online profile, then send one informational interview request to a real person and prepare three questions.",
          youCanNow: "ask for and prepare an informational interview to grow your network.",
          quickCheck: [
            { objective: "O6", q: "What are you asking for in an informational interview?", options: ["A job offer", "Money", "Advice about their career", "A reference letter"], answer: 2, why: "You ask for advice, not a job." },
            { objective: "O6", q: "An alum agreed to talk for 15 minutes next week. How do you prepare?", options: ["Prepare three questions and be on time", "Plan to talk about yourself the whole time", "Ask for an hour instead", "Bring your résumé and ask for a job"], answer: 0, why: "Prepare three questions, be on time and send a thank-you after." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Résumé, LinkedIn and network",
        questions: [
          { objective: "O4", q: "Which résumé bullet is strongest?", options: ["\"Played sports\"", "\"Was on a team\"", "\"Hard worker\"", "\"Balanced 20 hours a week of training with a 3.4 GPA\""], answer: 3, why: "It uses an action and a number." },
          { objective: "O4", q: "What should you NOT paste into AI when making a résumé?", options: ["Your Social Security number", "Your sports roles", "Your school name", "Your job duties"], answer: 0, why: "Private ID numbers stay private." },
          { objective: "O5", q: "You are too young for LinkedIn. What can you do?", options: ["Lie about your age", "Use a parent's account", "Make a career page in Google Sites", "Give up"], answer: 2, why: "A simple career page works until you're old enough." },
          { objective: "O6", q: "In an informational interview you ask for:", options: ["A job right away", "Money", "Their password", "Advice about their career"], answer: 3, why: "It's for learning, not job hunting." },
          { objective: "O6", q: "After an informational interview you should:", options: ["Ask for a job immediately", "Send a thank-you message", "Never contact them again", "Post about them"], answer: 1, why: "Thank-yous build lasting relationships." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Personal Branding and Athlete Career Development",
    questions: [
      { objective: "O1", q: "A transferable skill is:", options: ["A trade between teams", "A transfer portal rule", "A skill you can use in many jobs", "A sports drink"], answer: 2, why: "It moves with you across jobs." },
      { objective: "O1", q: "Which is a transferable skill from sport?", options: ["Handling pressure", "Your jersey number", "Your shoe brand", "Your mascot"], answer: 0, why: "Employers value handling pressure." },
      { objective: "O1", q: "Resilience means:", options: ["Bouncing back after a setback", "Never losing", "Being the tallest", "Running fast"], answer: 0, why: "It's recovering from setbacks." },
      { objective: "O1", q: "Employers want:", options: ["Only claims", "Your stats only", "Proof, not just words", "Your followers"], answer: 2, why: "Examples prove skills." },
      { objective: "O2", q: "Your 60-second story should sound:", options: ["Robotic", "Natural, not memorized", "Very long", "Like someone else"], answer: 1, why: "Natural sounds confident and real." },
      { objective: "O2", q: "The \"Future\" part of your story says:", options: ["Your old scores", "Your password", "Your rival's plans", "The direction you're curious about"], answer: 3, why: "It shows where you're going." },
      { objective: "O2", q: "How long should your spoken story be?", options: ["Ten minutes", "Five seconds", "About 60 seconds", "An hour"], answer: 2, why: "Short enough to hold attention." },
      { objective: "O3", q: "A career inside sport is:", options: ["Plumbing", "Nursing", "Teaching math", "Athletic training"], answer: 3, why: "Athletic training is a sports career." },
      { objective: "O3", q: "The Occupational Outlook Handbook is:", options: ["A US government guide to jobs, education and pay", "A playbook", "A social app", "A sports magazine"], answer: 0, why: "It's an official career source." },
      { objective: "O4", q: "A résumé should usually be:", options: ["Ten pages", "One page", "A video", "A tweet"], answer: 1, why: "Short and easy to scan." },
      { objective: "O4", q: "Which section shows athletics on a résumé?", options: ["Contact", "Hobbies only", "Experience", "Nowhere"], answer: 2, why: "Sport is real experience." },
      { objective: "O4", q: "A résumé bullet should start with:", options: ["An action word", "\"Um\"", "Your password", "An emoji"], answer: 0, why: "Action words show what you did." },
      { objective: "O4", q: "After AI drafts your résumé, you should:", options: ["Send it unread", "Add fake jobs", "Make it three pages", "Check every fact and get a human review"], answer: 3, why: "Accuracy and a second look matter." },
      { objective: "O5", q: "LinkedIn is:", options: ["A video game", "A professional social network", "A sports league", "A store"], answer: 1, why: "It's for careers and jobs." },
      { objective: "O5", q: "A strong LinkedIn headline is:", options: ["\"hi\"", "\"Student-athlete | Business major | Interested in sports marketing\"", "\"bored\"", "Blank"], answer: 1, why: "It says who you are and where you're going." },
      { objective: "O5", q: "When connecting on LinkedIn, add:", options: ["Nothing ever", "A demand for a job", "Your address", "A short personal note"], answer: 3, why: "Personal notes get more accepts." },
      { objective: "O5", q: "Alumni are:", options: ["People who graduated from your school", "Opponents", "Referees", "Fans only"], answer: 0, why: "They often like helping students from their school." },
      { objective: "O6", q: "An informational interview usually lasts:", options: ["5 hours", "1 minute", "15-20 minutes", "All day"], answer: 2, why: "Short asks get more yeses." },
      { objective: "O6", q: "Before the interview, prepare:", options: ["A contract", "A gift", "Nothing", "Three questions"], answer: 3, why: "Prepared questions respect their time." },
      { objective: "O6", q: "Who is part of an athlete's network?", options: ["Only celebrities", "Former teammates, alumni athletes and coaches' contacts", "Nobody", "Only rivals"], answer: 1, why: "Your sports community is a strong network." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Pre-Test: What Do You Already Know?",
    from: [
      0,
      3,
      5,
      8,
      11,
      14,
      17
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      {
        name: "Transferable skills",
        objective: "O1",
        notYet: "Fewer than five skills, or skills with no real example.",
        meets: "Five skills, each with a true, specific sports example.",
        exceeds: "Each example includes a number or result, such as team size or hours balanced."
      },
      {
        name: "60-second story",
        objective: "O2",
        notYet: "Missing Past, Present or Future, or much longer than a minute.",
        meets: "About 60 seconds with Past, Present and Future, in the athlete's own voice.",
        exceeds: "Delivered out loud naturally and adapted for the LinkedIn About section."
      },
      {
        name: "Résumé",
        objective: "O4",
        notYet: "Over one page, untrue details, or sport left out.",
        meets: "One page, with sport in work language, action-word bullets, checked facts and a human review.",
        exceeds: "Tailored to one career or internship from the athlete's explored list."
      },
      {
        name: "Profile",
        objective: "O5",
        notYet: "No profile, or it does not match the résumé.",
        meets: "A LinkedIn profile or career page with photo, headline, About, experience and skills, matching the résumé.",
        exceeds: "Five connections made with personal notes, including alumni."
      },
      {
        name: "Informational interview request",
        objective: "O6",
        notYet: "No request sent, or it asks for a job.",
        meets: "A polite request sent to a real person with who, how found, why and a small ask, plus three questions ready.",
        exceeds: "The talk happened and a thank-you message was sent."
      }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the career starter kit and score Meets or Exceeds on every rubric row",
      "Learners who complete at least one informational interview within 30 days (follow-up survey)",
      "Learners who apply for or get an internship, job or volunteer role using their résumé",
      "Learners who take a next course, such as AI Entrepreneurship for Athletes"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A phone or computer with internet",
      "A free AI assistant (ChatGPT, Microsoft Copilot or Google Gemini)",
      "A LinkedIn account if you meet its age rules, or a free Google account for Google Sites",
      "Notes on your education, jobs, volunteering and sports roles",
      "About 60 minutes"
    ],
    facilitatorNotes: [
      "Invite a school career counselor or alumni athletes to review résumés and practice 60-second stories.",
      "Remind learners never to paste Social Security numbers or other private numbers into AI.",
      "Check LinkedIn's current age rules with the group and offer Google Sites for younger learners.",
      "For athletes under 18, involve parents or guardians before they contact adults they do not know, and suggest meeting in public or by video.",
      "Be sensitive with athletes facing injury or the end of their playing career, and point them to support if they need it."
    ]
  }
};
