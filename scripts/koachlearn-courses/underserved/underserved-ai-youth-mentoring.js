"use strict";

// Koach Learn course: Undeserved Community -> "AI for Youth Mentoring" (bonus). Skill-building course: by the end the student can DO the skill in `outcome`.
// Two chapters of three micro-lessons; a knowledge check closes each chapter; a 20-question quiz closes the course. Shape: scripts/koachlearn-courses/README.md.
// Audience: adult volunteer mentors in community programs. Safety with minors comes first; mentors are told to follow their organization's policy.

module.exports = {
  id: "underserved-ai-youth-mentoring",
  category: "Undeserved Community",
  name: "AI for Youth Mentoring",
  skills: "Following safety rules for mentoring minors, Planning a mentoring session with AI, Asking good questions and listening, Teaching honest AI use for school, Exploring careers together, Tracking a mentee's progress",
  outcome: "plan and lead a safe, 45-minute mentoring session with a young person, using a free AI assistant to prepare the activity and questions, and showing your mentee how to use AI honestly for school and career goals.",
  about: [
    "Young people in every neighborhood do better with a caring adult in their corner. This course is for volunteer mentors at churches, community centers, schools, sports leagues and youth programs, including mentors who are new to technology.",
    "You will learn the safety rules that protect young people and you, how to plan a session with a free AI assistant, how to ask questions that open up real conversation, how to help your mentee use AI honestly for school, and how to explore careers and track progress together.",
    "Each lesson takes about five minutes and ends with a \"Try it now\" task that builds a real session plan. There is a knowledge check after each chapter and a 20-question quiz at the end. Always follow your mentoring program's own policies; they come before anything in this course."
  ],
  finalTask: "Write and lead (or role-play with another adult) a 45-minute mentoring session plan made with help from a free AI assistant: a goal, a warm-up question, one activity, three open questions, a short demo of honest AI use for homework or careers, and a one-line progress note. The plan must follow your program's safety rules and contain no private details about the young person.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Volunteer mentors in underserved communities at churches, community centers, schools, sports leagues and youth programs, including mentors who are new to technology.",
    startingPoint: "Care about young people and may have raised children or coached, but have not been trained in mentoring safety, open questions or planning a session. Many have used AI little and are unsure how young people should use it for school.",
    gap: "Young people do better with a caring adult, but mentors need safe habits, a plan for each session and a way to guide honest AI use for school and careers. Without this, sessions drift, privacy is put at risk, and young people may misuse AI.",
    constraints: [
      "Reading level: plain words and short sentences (about grade 6 to 7)",
      "Devices: a smartphone or a program computer",
      "Program policy comes first: background checks, public meetings, approved contact and reporting steps",
      "Privacy: no young person's name, school, photos or private stories in AI or loose notes",
      "Schools and AI tools have their own rules and age limits, checked with the teacher and a parent or guardian"
    ],
    prerequisites: "Your mentoring program's own background check and training. Learners new to AI assistants can take \"Introduction to AI and Digital Empowerment\" first."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Every time you meet a young person", action: "follow your program's safety rules and the steps to take if a young person tells you about harm", standard: "naming at least five rules and the reporting steps without help" },
    { id: "O2", condition: "Using a free AI assistant", action: "plan a 45-minute session with a warm-up, an activity, a talk and next steps", standard: "giving AI only general details and checking the plan for safety, cost and fit" },
    { id: "O3", condition: "In a conversation with a young person", action: "ask open questions and repeat back what you heard before giving advice", standard: "using at least three open questions in your own words" },
    { id: "O4", condition: "When a young person uses AI for school", action: "demonstrate honest AI use to explain, quiz and give feedback, and check its answers", standard: "following the school's and the tool's rules and never turning in AI's work" },
    { id: "O5", condition: "Given a young person's interests", action: "explore careers with AI and check one on bls.gov/ooh", standard: "ending with one small next step and a date" },
    { id: "O6", condition: "After each session", action: "write a short, private progress note and celebrate a win", standard: "using initials only and never pasting notes into AI" }
  ],
  chapters: [
    {
      name: "Chapter 1: Safe, strong mentoring with AI",
      lessons: [
        {
          objectives: ["O1"],
          title: "The mentor's role and safety rules",
          minutes: 5,
          goal: "Name the safety rules you will follow every time you meet a young person.",
          text: [
            "A mentor is a trusted adult who listens, encourages and helps a young person set and reach goals. You are not their parent, teacher or therapist; you are a steady, caring guide.",
            "Programs protect young people and mentors with rules. Common ones: a background check before you start, meeting in public or approved places, a second adult nearby instead of being alone with a young person, contact only through approved channels, and never giving rides, gifts or money unless your program allows it. Your program's policy is the rule to follow.",
            "If a young person tells you they are being hurt or are in danger, stay calm, listen, do not promise to keep it secret, and follow your program's reporting steps right away. In an emergency call 911. The Childhelp National Child Abuse Hotline is (800) 422-4453."
          ],
          steps: ["Complete your program's background check and training.", "Meet only in public or approved places, with another adult nearby.", "Use only approved ways to contact your mentee.", "If a young person tells you about harm: listen, do not promise secrecy, follow reporting steps."],
          words: [["Mentor", "a trusted adult who guides and encourages a young person."], ["Mentee", "the young person being mentored."], ["Background check", "a check of a person's records before they work with young people."]],
          sources: [{ name: "Childhelp National Child Abuse Hotline", url: "https://www.childhelphotline.org/" }, { name: "MENTOR: Elements of Effective Practice for Mentoring", url: "https://www.mentoring.org/resource/elements-of-effective-practice-for-mentoring/" }],
          slides: [
            { title: "A mentor is", bullets: ["A trusted, caring adult", "A listener and encourager", "Not a parent, teacher or therapist"] },
            { title: "Common safety rules", bullets: ["Background check first", "Public or approved places, another adult nearby", "Approved contact only; no rides or gifts unless allowed"] },
            { title: "If a young person discloses harm", bullets: ["Stay calm and listen", "Do not promise secrecy", "Follow reporting steps; emergencies: 911"] },
            { title: "Your program's policy comes first", bullets: ["Childhelp hotline: (800) 422-4453"] }
          ],
          tryIt: "Find your program's mentoring policy (or ask the coordinator). Write down five rules you will follow every time you meet your mentee.",
          youCanNow: "explain a mentor's role and the safety rules you follow.",
          quickCheck: [
            { objective: "O1", q: "What is a mentor's role?", options: ["A steady, caring guide who listens and encourages", "A replacement parent", "A therapist", "A teacher who gives grades"], answer: 0, why: "A mentor is a trusted adult guide, not a parent, teacher or therapist." },
            { objective: "O1", q: "Your mentee asks for a ride home after a session. What do you do?", options: ["Give the ride; it is kind", "Follow your program's policy on rides", "Ask them to keep it secret", "Let them walk alone at night"], answer: 1, why: "Never give rides unless your program allows it; the policy is the rule." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Planning a session with AI",
          minutes: 5,
          goal: "Use a free AI assistant to plan a 45-minute session with a clear goal.",
          text: [
            "A good session has four parts: a warm-up (5 minutes), an activity (20 minutes), a talk about what you learned (15 minutes) and a plan for next time (5 minutes).",
            "A free AI assistant such as ChatGPT, Microsoft Copilot or Google Gemini can suggest activities. Describe the young person in general terms only: age group, interests and goal. Example: \"Plan a 45-minute mentoring session for a 14-year-old who loves basketball and wants to raise a math grade. Include a warm-up, a low-cost activity and three questions.\"",
            "Never give AI a young person's name, school, address, photos, family problems or anything they told you in trust. Then check the plan: Is it safe, free or cheap, and right for this young person?"
          ],
          steps: ["Pick one goal for the session.", "Describe the mentee in general terms only: age, interests, goal.", "Ask AI for a warm-up, activity and questions.", "Check the plan for safety, cost and fit, and change what does not fit."],
          words: [["Session", "one meeting between a mentor and mentee."], ["Warm-up", "a short, easy start that helps people relax."]],
          slides: [
            { title: "A 45-minute session", bullets: ["Warm-up: 5 minutes", "Activity: 20 minutes", "Talk: 15 minutes; next steps: 5"] },
            { title: "Ask AI with general details", bullets: ["Age group, interests, goal", "Ask for warm-up, activity, questions"] },
            { title: "Never share with AI", bullets: ["Name, school, address or photos", "Family problems or anything said in trust"] },
            { title: "Check the plan", bullets: ["Safe?", "Free or low-cost?", "Right for this young person?"] }
          ],
          tryIt: "Ask AI to plan a 45-minute session for a young person you mentor or might mentor, using only general details. Change one part so it fits better.",
          youCanNow: "plan a mentoring session with AI while protecting the young person's privacy.",
          quickCheck: [
            { objective: "O2", q: "How long is the activity in the 45-minute session plan?", options: ["5 minutes", "10 minutes", "20 minutes", "40 minutes"], answer: 2, why: "The plan is a 5-minute warm-up, 20-minute activity, 15-minute talk and 5-minute next steps." },
            { objective: "O2", q: "AI suggests a paid trip to a theme park for your session. What do you do?", options: ["Book it", "Ask the mentee's family to pay", "Use it as is", "Change it to a free or low-cost activity that fits"], answer: 3, why: "You check AI's plan for safety, cost and fit, and change what does not fit." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Asking good questions and really listening",
          minutes: 5,
          goal: "Write three open questions and practice listening without fixing.",
          text: [
            "Closed questions get one-word answers: \"Was school good?\" \"Yes.\" Open questions invite a real answer: \"What was the best part of your week?\" \"What is something you want to get better at?\"",
            "Listening matters more than talking. Look at them, put your phone away, nod, and repeat back what you heard: \"So the math test felt unfair because you studied the wrong chapter?\" Do not rush to fix everything; ask what they think they could try.",
            "AI can suggest conversation starters for different moods and interests. Ask it for ten open questions for a teen who loves music, then pick the three that sound most like you."
          ],
          steps: ["Turn closed questions into open ones.", "Put your phone away and give full attention.", "Repeat back what you heard.", "Ask what they think they could try before giving advice."],
          words: [["Open question", "a question that cannot be answered with yes or no."], ["Active listening", "listening closely and repeating back what you heard."]],
          slides: [
            { title: "Closed vs open", bullets: ["Closed: \"Was school good?\"", "Open: \"What was the best part of your week?\""] },
            { title: "Really listen", bullets: ["Phone away, eyes up", "Nod and repeat back", "Ask what they could try before advising"] },
            { title: "AI for conversation starters", bullets: ["Ask for ten open questions", "Pick three that sound like you"] }
          ],
          tryIt: "Ask AI for ten open questions for a young person with a hobby you know about. Pick three, and rewrite them in your own words.",
          youCanNow: "ask open questions and listen in a way that helps young people talk.",
          quickCheck: [
            { objective: "O3", q: "What is an open question?", options: ["One that invites a real answer, not just yes or no", "A question with only one right answer", "A question about grades only", "A question asked in a loud voice"], answer: 0, why: "Open questions invite young people to share more than one word." },
            { objective: "O3", q: "Your mentee says practice was terrible. What do you say first?", options: ["\"Just quit the team.\"", "\"So practice felt really hard today. What happened?\"", "\"I had worse days.\"", "\"Let's talk about something else.\""], answer: 1, why: "Repeating back what you heard and asking more shows you are listening." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Safe, strong mentoring with AI",
        questions: [
          { objective: "O1", q: "Which is a common mentoring safety rule?", options: ["Meet alone in your car", "Meet in public or approved places with another adult nearby", "Text privately late at night", "Give money when asked"], answer: 1, why: "Public or approved places with another adult nearby protect everyone." },
          { objective: "O1", q: "A mentee tells you someone at home is hurting them and asks you to keep it secret. You:", options: ["Promise to keep the secret", "Ignore it", "Listen, do not promise secrecy, and follow your program's reporting steps", "Post about it online"], answer: 2, why: "Safety comes first; follow reporting steps right away." },
          { objective: "O2", q: "Which detail is okay to give AI when planning a session?", options: ["The mentee's full name", "Their school and address", "A story they told you in trust", "\"A 14-year-old who loves basketball\""], answer: 3, why: "General details like age and interests are enough." },
          { objective: "O3", q: "Which is an open question?", options: ["\"What is something you want to get better at?\"", "\"Was school good?\"", "\"Are you tired?\"", "\"Did you eat?\""], answer: 0, why: "It cannot be answered with yes or no." },
          { objective: "O3", q: "Your mentee is upset about a grade. A good first step is:", options: ["Tell them exactly what to do", "Listen and repeat back what you heard", "Check your phone", "Change the subject"], answer: 1, why: "Listening first helps them feel heard and think it through." }
        ]
      }
    },
    {
      name: "Chapter 2: Helping young people use AI well",
      lessons: [
        {
          objectives: ["O4"],
          title: "Honest AI use for school",
          minutes: 5,
          goal: "Show a young person how to use AI as a tutor, not to do their work.",
          text: [
            "Many students already use AI. Schools have different rules: some allow it for some tasks, some do not. Always check the school's and teacher's rules first. Many AI tools also have minimum age rules and may need a parent's or guardian's permission for teens; check each tool's terms with the parent or guardian.",
            "Honest use means AI helps you learn, not that it does the work for you. Good uses: \"Explain fractions like I'm 12.\" \"Quiz me on these vocabulary words.\" \"Give me feedback on my paragraph, but do not rewrite it.\" Copying AI's answers and turning them in as your own is cheating.",
            "Teach them to check AI too. It can be wrong. Compare with the textbook, class notes or the teacher."
          ],
          steps: ["Check the school's and teacher's AI rules.", "Check the tool's age rules with a parent or guardian.", "Use AI to explain, quiz or give feedback.", "Never turn in AI's work as your own.", "Check answers against class materials."],
          words: [["Tutor", "someone or something that helps you learn, not does the work for you."], ["Cheating", "turning in work that is not your own as if it were."]],
          slides: [
            { title: "Rules first", bullets: ["School and teacher AI rules", "Tool age limits and parent permission"] },
            { title: "AI as a tutor", bullets: ["\"Explain fractions like I'm 12\"", "\"Quiz me on these words\"", "\"Give feedback, do not rewrite\""] },
            { title: "Not okay", bullets: ["Copying AI answers as your own", "Trusting AI without checking"] }
          ],
          tryIt: "With your mentee (or on your own to practice), ask AI to explain one topic from school in simple words and then quiz you with three questions. Check one answer against a textbook or class notes.",
          youCanNow: "show a young person how to use AI honestly as a study helper.",
          quickCheck: [
            { objective: "O4", q: "Which is a good AI request for school?", options: ["\"Write my essay for me.\"", "\"Do my math homework.\"", "\"Give me feedback on my paragraph, but do not rewrite it.\"", "\"Answer the test questions.\""], answer: 2, why: "Asking for feedback helps the student learn while doing their own work." },
            { objective: "O4", q: "Your 12-year-old mentee wants to sign up for an AI tool. What do you do first?", options: ["Sign them up with your email", "Tell them to lie about their age", "Skip school rules", "Check the tool's age rules with a parent or guardian"], answer: 3, why: "Many AI tools have age rules that need a parent's or guardian's check." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Exploring careers and goals together",
          minutes: 5,
          goal: "Use AI and an official site to explore one career with your mentee.",
          text: [
            "Young people often know only the jobs they see around them. Exploring careers opens doors. Start with what they love: games, music, sports, fixing things, helping people, drawing.",
            "Ask AI: \"List five careers for a teen who loves video games and art. For each, say what the job is in one sentence and what to study.\" Then look up one job together on the Occupational Outlook Handbook at bls.gov/ooh, the free U.S. government guide, to check its pay, training and job outlook.",
            "Turn interest into a small goal: join a club, take a free class at the library, talk to someone who does that job, or try a free online lesson."
          ],
          steps: ["Ask about what they love.", "Ask AI for five related careers.", "Look up one on bls.gov/ooh together.", "Set one small next step with a date."],
          words: [["Career", "the kind of work someone does over many years."], ["Job outlook", "how fast a job is expected to grow."]],
          sources: [{ name: "U.S. Bureau of Labor Statistics: Occupational Outlook Handbook", url: "https://www.bls.gov/ooh/" }],
          slides: [
            { title: "Start with what they love", bullets: ["Games, music, sports", "Fixing things, helping people, art"] },
            { title: "Explore with AI, check officially", bullets: ["Ask AI for five related careers", "Check one on bls.gov/ooh: pay, training, outlook"] },
            { title: "One small next step", bullets: ["Join a club or free class", "Talk to someone in that job", "Set a date"] }
          ],
          tryIt: "Pick an interest (yours or your mentee's). Ask AI for five related careers, check one on bls.gov/ooh, and write one small next step with a date.",
          youCanNow: "help a young person explore careers and set a small, real next step.",
          quickCheck: [
            { objective: "O5", q: "What does the Occupational Outlook Handbook show for a job?", options: ["Pay, training and job outlook", "Only job openings near you", "Celebrity careers", "School grades"], answer: 0, why: "The Handbook at bls.gov/ooh shows a job's pay, training and outlook." },
            { objective: "O5", q: "Your mentee likes drawing and the AI lists graphic designer. What is a good next step?", options: ["Tell them it is not a real job", "Set one small step, like a free class at the library, with a date", "Pick a different career for them", "Wait until they finish school"], answer: 1, why: "Turning interest into a small dated step builds momentum." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Tracking progress and putting it all together",
          minutes: 5,
          goal: "Keep simple, private progress notes and finish your session plan.",
          text: [
            "Short notes help you remember goals and celebrate wins. After each session, write one or two lines: the goal, what you did, one win and the next step. Use first names or initials only, and keep notes where your program says to keep them.",
            "Celebrate progress, even small steps: a raised grade, a finished application, showing up on time. Young people remember when an adult noticed.",
            "Do not paste notes about a young person into AI. If you want help, ask in general terms: \"What are fun ways to celebrate a teen raising a grade?\""
          ],
          steps: ["After each session, write the goal, what you did, one win and the next step.", "Use initials only and store notes where your program says.", "Celebrate small wins.", "Ask AI only general questions, never about a specific young person."],
          words: [["Progress note", "a short record of what happened and what comes next."]],
          slides: [
            { title: "Simple progress notes", bullets: ["Goal and what you did", "One win and the next step", "Initials only; store as your program says"] },
            { title: "Celebrate small wins", bullets: ["A raised grade", "A finished application", "Showing up on time"] },
            { title: "Keep notes out of AI", bullets: ["Ask general questions only", "Never about a specific young person"] }
          ],
          tryIt: "Final task: write your 45-minute session plan with AI's help: goal, warm-up, activity, three open questions, an honest AI-use demo for school or careers, and a one-line progress note. Check it against your program's safety rules, then lead it or role-play it with another adult.",
          youCanNow: "plan, lead and track safe mentoring sessions that help young people use AI well.",
          quickCheck: [
            { objective: "O6", q: "How should you name your mentee in progress notes?", options: ["Full name and school", "Full name and address", "Initials or first name only", "Their phone number"], answer: 2, why: "Initials or first name only keep the young person's information private." },
            { objective: "O6", q: "You want ideas to celebrate your mentee's better grade. What do you ask AI?", options: ["Paste your full session notes", "Include their name and school", "Upload their report card", "Ask a general question about celebrating a teen's raised grade"], answer: 3, why: "Ask AI only general questions, never about a specific young person." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Helping young people use AI well",
        questions: [
          { objective: "O4", q: "Before your mentee uses AI for homework, check:", options: ["Nothing", "Only the weather", "The school's and teacher's AI rules", "Their social media"], answer: 2, why: "Schools have different AI rules; check them first." },
          { objective: "O4", q: "Which is honest AI use for school?", options: ["Copying AI's essay", "Having AI do the math homework", "Turning in AI work as your own", "\"Quiz me on these vocabulary words\""], answer: 3, why: "Using AI to practice helps you learn." },
          { objective: "O5", q: "AI lists careers for your mentee. How do you check pay and training?", options: ["Look it up on bls.gov/ooh", "Trust AI", "Ask a stranger online", "Skip it"], answer: 0, why: "The Occupational Outlook Handbook is the official source." },
          { objective: "O6", q: "Which progress note is best?", options: ["Full name, school and family problems", "\"J.: goal raise math grade; practiced fractions; win: B on quiz; next: study plan.\"", "Nothing at all", "A photo posted online"], answer: 1, why: "It is short, uses initials and records the goal, win and next step." },
          { objective: "O6", q: "Can you paste your notes about a mentee into AI for advice?", options: ["Yes, always", "Only if short", "No; ask only general questions", "Yes, with their photo"], answer: 2, why: "Information about a young person stays private." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: AI for Youth Mentoring",
    questions: [
      { objective: "O1", q: "A mentor is best described as:", options: ["A trusted adult who listens and encourages", "A young person's boss", "A therapist", "A teacher who gives grades"], answer: 0, why: "Mentors are caring guides, not parents, teachers or therapists." },
      { objective: "O1", q: "Whose rules come first when you mentor?", options: ["The AI's", "Your mentoring program's policy", "Your friends'", "Social media's"], answer: 1, why: "Always follow your program's policy." },
      { objective: "O1", q: "Which is usually required before you mentor young people?", options: ["A gift for the mentee", "A car", "A background check", "A social media account"], answer: 2, why: "Programs commonly require background checks." },
      { objective: "O1", q: "In an emergency involving a young person's safety, you:", options: ["Wait until next week", "Post online", "Ask AI", "Call 911"], answer: 3, why: "Emergencies need immediate help." },
      { objective: "O1", q: "Which number reaches the Childhelp National Child Abuse Hotline?", options: ["(800) 422-4453", "(800) 555-0000", "411", "0"], answer: 0, why: "Childhelp's hotline is (800) 422-4453." },
      { objective: "O2", q: "A good mentoring session has:", options: ["Only phone time", "A warm-up, activity, talk and next steps", "No plan", "A test"], answer: 1, why: "These four parts give the session shape." },
      { objective: "O2", q: "Which is safe to tell AI when planning?", options: ["The mentee's address", "Their school name", "Age group, interests and goal", "Something they told you in trust"], answer: 2, why: "General details are enough to plan." },
      { objective: "O2", q: "After AI suggests a session plan, you should:", options: ["Use it without reading", "Share it on social media", "Add the mentee's name", "Check it is safe, low-cost and right for the young person"], answer: 3, why: "You know the young person; AI does not." },
      { objective: "O3", q: "Which is a closed question?", options: ["\"Was school good?\"", "\"What made you laugh this week?\"", "\"What would you change about your day?\"", "\"What do you want to learn next?\""], answer: 0, why: "It can be answered with yes or no." },
      { objective: "O3", q: "Active listening means:", options: ["Checking your phone while they talk", "Listening closely and repeating back what you heard", "Talking more than them", "Fixing every problem right away"], answer: 1, why: "Repeating back shows you understood." },
      { objective: "O3", q: "Before giving advice, it helps to:", options: ["End the session", "Change the subject", "Ask what they think they could try", "Ask AI about them by name"], answer: 2, why: "Their own ideas build confidence." },
      { objective: "O3", q: "What can AI help a mentor with?", options: ["Keeping secrets", "Making safety decisions", "Replacing the mentor", "Suggesting conversation starters"], answer: 3, why: "AI can suggest questions; you choose and lead." },
      { objective: "O4", q: "Before a teen signs up for an AI tool, check:", options: ["The tool's age rules, with a parent or guardian", "Nothing", "Only the colors", "How many friends use it"], answer: 0, why: "Many tools have age limits and need a parent's permission for teens." },
      { objective: "O4", q: "Turning in AI's essay as your own is:", options: ["Fine", "Cheating", "Required", "Studying"], answer: 1, why: "Work must be your own." },
      { objective: "O4", q: "Which is a good AI study prompt?", options: ["\"Write my essay\"", "\"Do all my homework\"", "\"Explain fractions like I'm 12, then quiz me\"", "\"Answer my test\""], answer: 2, why: "It uses AI as a tutor." },
      { objective: "O4", q: "AI gives your mentee an answer that disagrees with the textbook. They should:", options: ["Trust AI", "Ignore both", "Change the textbook", "Check with class notes or the teacher"], answer: 3, why: "AI can be wrong; check with class materials." },
      { objective: "O5", q: "A good way to start career exploration is to:", options: ["Ask what the young person loves", "Pick a job for them", "Choose the highest-paying job only", "Skip it"], answer: 0, why: "Interests point to careers they will care about." },
      { objective: "O5", q: "The free official guide to job pay and training is:", options: ["A pop-up ad", "The Occupational Outlook Handbook at bls.gov/ooh", "A social media video", "A text from a stranger"], answer: 1, why: "It is run by the U.S. Bureau of Labor Statistics." },
      { objective: "O6", q: "A progress note should use:", options: ["Full names and addresses", "Photos", "Initials and the goal, a win and the next step", "Family secrets"], answer: 2, why: "Short notes with initials protect privacy." },
      { objective: "O6", q: "Why celebrate small wins?", options: ["It is required by law", "To post online", "It replaces goals", "Young people remember when an adult noticed"], answer: 3, why: "Noticing progress builds motivation and trust." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Pre-Test: What Do You Already Know?",
    from: [
      0,
      1,
      5,
      6,
      8,
      9,
      13,
      14,
      16,
      18
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      {
        name: "Session plan",
        objective: "O2",
        notYet: "Missing the goal, warm-up or activity, or it does not fit 45 minutes.",
        meets: "A goal, warm-up, activity, talk and next steps that fit 45 minutes.",
        exceeds: "Changed AI's plan to fit the young person's interests and keep it low-cost."
      },
      {
        name: "Open questions",
        objective: "O3",
        notYet: "Fewer than three questions, or yes-or-no questions.",
        meets: "Three open questions in the mentor's own words.",
        exceeds: "Includes a plan to repeat back what the mentee says."
      },
      {
        name: "Honest AI demo",
        objective: "O4",
        notYet: "The demo has AI doing the work, or skips the school's rules.",
        meets: "Shows AI explaining or quizzing, and checking one answer against class materials.",
        exceeds: "Also covers the tool's age rules and the school's AI rules."
      },
      {
        name: "Progress note",
        objective: "O6",
        notYet: "No note, or it uses the full name or private details.",
        meets: "One line with initials, the goal, a win and the next step.",
        exceeds: "Names where the note will be stored under program rules."
      },
      {
        name: "Safety and privacy",
        objective: "O1",
        notYet: "The plan breaks a program safety rule or has private details about the young person.",
        meets: "Follows the program's safety rules and has no private details.",
        exceeds: "Lists the reporting steps the mentor would follow if a young person disclosed harm."
      }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Mentors who lead at least four planned sessions within 60 days (follow-up survey)",
      "Mentees who set and reach a school or career step, as reported by the program",
      "Programs that report no safety or privacy incidents among trained mentors"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A smartphone or program computer",
      "A free AI assistant: Microsoft Copilot, ChatGPT or Google Gemini",
      "The program's mentoring and safety policy",
      "Paper for the session plan and progress notes",
      "About 60 minutes in total: lessons, practice, checks and the final task"
    ],
    facilitatorNotes: [
      "Start with your program's own safety policy and reporting steps; this course does not replace them.",
      "Have mentors role-play the session with another adult, not with a young person, during training.",
      "Check that no prompt or note includes a young person's name, school, photos or private stories.",
      "Share local contacts for reporting and the Childhelp hotline, and remind mentors to call 911 in an emergency.",
      "Score the final task with the rubric, and give feedback on one Not yet row at a time."
    ]
  }
};
