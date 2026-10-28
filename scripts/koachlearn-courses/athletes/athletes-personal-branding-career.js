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
  chapters: [
    {
      name: "Chapter 1: Your story and skills",
      lessons: [
        {
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
          youCanNow: "name your transferable skills and prove each with an example."
        },
        {
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
          youCanNow: "tell your 60-second athlete story clearly and naturally."
        },
        {
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
          youCanNow: "explore careers beyond playing and check details with official sources."
        }
      ],
      check: {
        title: "Knowledge Check 1: Your story and skills",
        questions: [
          { q: "Which is proof of leadership?", options: ["\"I'm a leader\"", "\"Leadership!\"", "\"Captain of a 20-player team; ran warm-ups and settled conflicts\"", "\"Everyone likes me\""], answer: 2, why: "A real example proves the skill." },
          { q: "AI says you have \"project management certification\". You don't. You:", options: ["Remove it", "Keep it", "Add more", "Make it bold"], answer: 0, why: "Only keep what is true." },
          { q: "What are the three parts of your 60-second story?", options: ["Wins, losses, ties", "Name, age, address", "Stats, height, weight", "Past, Present, Future"], answer: 3, why: "It shows where you've been, are and are going." },
          { q: "Why plan for life after sport early?", options: ["You must quit now", "Every athlete stops competing one day", "Coaches require it", "It's not useful"], answer: 1, why: "Planning early makes the change easier." },
          { q: "Where should you check a career's education and pay?", options: ["A random comment", "An official career site or a career counselor", "An AI only", "A video game"], answer: 1, why: "Official sources are reliable." }
        ]
      }
    },
    {
      name: "Chapter 2: Résumé, LinkedIn and network",
      lessons: [
        {
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
          youCanNow: "build a one-page résumé that shows your athlete experience in work language."
        },
        {
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
          youCanNow: "set up a professional online profile that matches your résumé."
        },
        {
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
          youCanNow: "ask for and prepare an informational interview to grow your network."
        }
      ],
      check: {
        title: "Knowledge Check 2: Résumé, LinkedIn and network",
        questions: [
          { q: "Which résumé bullet is strongest?", options: ["\"Played sports\"", "\"Was on a team\"", "\"Hard worker\"", "\"Balanced 20 hours a week of training with a 3.4 GPA\""], answer: 3, why: "It uses an action and a number." },
          { q: "What should you NOT paste into AI when making a résumé?", options: ["Your Social Security number", "Your sports roles", "Your school name", "Your job duties"], answer: 0, why: "Private ID numbers stay private." },
          { q: "You are too young for LinkedIn. What can you do?", options: ["Lie about your age", "Use a parent's account", "Make a career page in Google Sites", "Give up"], answer: 2, why: "A simple career page works until you're old enough." },
          { q: "In an informational interview you ask for:", options: ["A job right away", "Money", "Their password", "Advice about their career"], answer: 3, why: "It's for learning, not job hunting." },
          { q: "After an informational interview you should:", options: ["Ask for a job immediately", "Send a thank-you message", "Never contact them again", "Post about them"], answer: 1, why: "Thank-yous build lasting relationships." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Personal Branding and Athlete Career Development",
    questions: [
      { q: "A transferable skill is:", options: ["A trade between teams", "A transfer portal rule", "A skill you can use in many jobs", "A sports drink"], answer: 2, why: "It moves with you across jobs." },
      { q: "Which is a transferable skill from sport?", options: ["Handling pressure", "Your jersey number", "Your shoe brand", "Your mascot"], answer: 0, why: "Employers value handling pressure." },
      { q: "Resilience means:", options: ["Bouncing back after a setback", "Never losing", "Being the tallest", "Running fast"], answer: 0, why: "It's recovering from setbacks." },
      { q: "Employers want:", options: ["Only claims", "Your stats only", "Proof, not just words", "Your followers"], answer: 2, why: "Examples prove skills." },
      { q: "Your 60-second story should sound:", options: ["Robotic", "Natural, not memorized", "Very long", "Like someone else"], answer: 1, why: "Natural sounds confident and real." },
      { q: "The \"Future\" part of your story says:", options: ["Your old scores", "Your password", "Your rival's plans", "The direction you're curious about"], answer: 3, why: "It shows where you're going." },
      { q: "How long should your spoken story be?", options: ["Ten minutes", "Five seconds", "About 60 seconds", "An hour"], answer: 2, why: "Short enough to hold attention." },
      { q: "A career inside sport is:", options: ["Plumbing", "Nursing", "Teaching math", "Athletic training"], answer: 3, why: "Athletic training is a sports career." },
      { q: "The Occupational Outlook Handbook is:", options: ["A US government guide to jobs, education and pay", "A playbook", "A social app", "A sports magazine"], answer: 0, why: "It's an official career source." },
      { q: "A résumé should usually be:", options: ["Ten pages", "One page", "A video", "A tweet"], answer: 1, why: "Short and easy to scan." },
      { q: "Which section shows athletics on a résumé?", options: ["Contact", "Hobbies only", "Experience", "Nowhere"], answer: 2, why: "Sport is real experience." },
      { q: "A résumé bullet should start with:", options: ["An action word", "\"Um\"", "Your password", "An emoji"], answer: 0, why: "Action words show what you did." },
      { q: "After AI drafts your résumé, you should:", options: ["Send it unread", "Add fake jobs", "Make it three pages", "Check every fact and get a human review"], answer: 3, why: "Accuracy and a second look matter." },
      { q: "LinkedIn is:", options: ["A video game", "A professional social network", "A sports league", "A store"], answer: 1, why: "It's for careers and jobs." },
      { q: "A strong LinkedIn headline is:", options: ["\"hi\"", "\"Student-athlete | Business major | Interested in sports marketing\"", "\"bored\"", "Blank"], answer: 1, why: "It says who you are and where you're going." },
      { q: "When connecting on LinkedIn, add:", options: ["Nothing ever", "A demand for a job", "Your address", "A short personal note"], answer: 3, why: "Personal notes get more accepts." },
      { q: "Alumni are:", options: ["People who graduated from your school", "Opponents", "Referees", "Fans only"], answer: 0, why: "They often like helping students from their school." },
      { q: "An informational interview usually lasts:", options: ["5 hours", "1 minute", "15-20 minutes", "All day"], answer: 2, why: "Short asks get more yeses." },
      { q: "Before the interview, prepare:", options: ["A contract", "A gift", "Nothing", "Three questions"], answer: 3, why: "Prepared questions respect their time." },
      { q: "Who is part of an athlete's network?", options: ["Only celebrities", "Former teammates, alumni athletes and coaches' contacts", "Nobody", "Only rivals"], answer: 1, why: "Your sports community is a strong network." }
    ]
  }
};
