"use strict";

// Koach Learn course: Leadership Development -> "AI for School and Educational Leaders 5: Student Learning and AI Literacy" (course 5 of 8).
// Shape copied from re-entry/reentry-ai-digital-confidence.js. COPPA facts checked on ftc.gov on 27 October 2026.

module.exports = {
  id: "edu-student-ai-literacy",
  category: "Leadership Development",
  name: "AI for School and Educational Leaders 5: Student Learning and AI Literacy",
  skills: "Defining AI literacy for students, Teaching a hands-on AI literacy lesson, Using AI as a learning partner, Setting classroom AI use levels, Teaching students to disclose AI use, Keeping students safe",
  outcome: "teach students to understand, question and use AI responsibly: deliver a 30-minute AI literacy lesson, set clear AI use levels for assignments, teach students to say how they used AI, and explain the safety rules to students and families.",
  about: [
    "This course is for teachers, librarians and media specialists, counselors, coaches and school leaders who shape how students learn with and about AI. Students are already using AI; AI literacy helps them use it to learn, not to skip learning.",
    "Chapter 1 defines AI literacy, gives you a hands-on lesson to teach it, and shows how to use AI as a learning partner that asks questions instead of giving answers. Chapter 2 sets classroom rules: AI use levels for assignments, disclosure, safety and privacy, and a plan for the whole school.",
    "Student use of any AI tool depends on your district's approval, the tool's age rules and, for children under 13, COPPA. A knowledge check closes each chapter and a 20-question quiz closes the course. This is course 5 of 8 in AI for School and Educational Leaders."
  ],
  finalTask: "Prepare a student AI literacy package for one grade: a 30-minute lesson plan in which students test an AI tool (or watch a teacher demo), catch an error and discuss bias; a five-level classroom AI use scale with an example assignment at each level; a one-line disclosure format students will use; and a half-page family letter explaining what students will learn and the safety rules.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Teachers, librarians and media specialists, counselors, coaches and school leaders in US schools who shape how students learn with and about AI.",
    startingPoint: "Know AI basics, student-privacy rules and how to vet tools from earlier courses. Students in their school already use AI, but there is no shared way to teach AI literacy, set rules for assignments or ask students to disclose AI use.",
    gap: "Without AI literacy, students use AI to skip learning, trust wrong or biased answers and share private information. Educators need to teach students to understand and question AI, set clear use levels and disclosure, and explain safety rules to students and families.",
    constraints: [
      "Student use of any AI tool depends on district approval, the tool's age rules and, for children under 13, COPPA",
      "Younger students may learn through teacher demos and unplugged activities with no accounts",
      "Students never share full names, addresses or passwords with AI",
      "AI tools change, so prepared lesson questions are tested shortly before teaching",
      "Time: short lessons fitted around a school day, plus a 30-minute student lesson"
    ],
    prerequisites: "\"AI for School and Educational Leaders 2: AI Tools for Educators\" is recommended."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "For one grade you serve", action: "describe the four student AI literacy skills in student-friendly words", standard: "with one example for each skill" },
    { id: "O2", condition: "Using an approved tool or a teacher demo", action: "plan a 30-minute lesson where students test AI, catch an error and discuss bias", standard: "with five prepared questions tested beforehand, including one the AI gets wrong" },
    { id: "O3", condition: "On a topic you teach", action: "write learning-partner prompts that make AI ask questions instead of giving answers", standard: "and explain why they help a student learn more than an answer-machine prompt" },
    { id: "O4", condition: "Given your upcoming assignments", action: "label each assignment with a level on a five-level AI use scale", standard: "with a reason tied to the learning goal" },
    { id: "O5", condition: "When students use AI on allowed work", action: "teach a one-line disclosure format for AI use", standard: "naming the tool, what it did, the date and what the student did" },
    { id: "O6", condition: "For students and families", action: "explain the student AI safety rules and plan AI literacy across grades", standard: "in a half-page family letter covering the tools used, why, and the safety rules" }
  ],
  chapters: [
    {
      name: "Chapter 1: Teaching students about AI",
      lessons: [
        {
          objectives: ["O1"],
          title: "What AI literacy means for students",
          minutes: 5,
          goal: "Define AI literacy in four student skills you can teach.",
          text: [
            "AI literacy is knowing enough about AI to use it well, question it and make good choices about it. For students, it comes down to four skills. Understand: AI predicts likely answers from patterns; it does not think or know like a person. Question: AI can be wrong, made up or biased, so check it.",
            "Use: ask clear questions, use AI to learn (explain, quiz me, give feedback) rather than to avoid learning, and follow the class rules. Decide: think about privacy, fairness and honesty, such as what to share, whose work it is, and when not to use AI at all.",
            "Grade matters. Younger students can learn the ideas with teacher demos and unplugged activities, without accounts. Older students can use approved tools directly under clear rules."
          ],
          words: [["AI literacy", "knowing enough about AI to use it well, question it and make good choices."], ["Unplugged activity", "a lesson about technology that uses no devices."]],
          slides: [
            { title: "Four student skills", bullets: ["Understand: AI predicts from patterns", "Question: it can be wrong or biased", "Use it to learn; decide wisely"] },
            { title: "Use to learn, not to skip", bullets: ["\"Explain it another way\"", "\"Quiz me\"", "\"Give me feedback on my draft\""] },
            { title: "By grade", bullets: ["Younger: teacher demos, unplugged", "Older: approved tools, clear rules"] }
          ],
          tryIt: "Write the four AI literacy skills in words your students would understand, for one grade you serve, with one example for each.",
          youCanNow: "define AI literacy as four teachable student skills.",
          quickCheck: [
            { objective: "O1", q: "What is AI literacy?", options: ["Knowing how to build AI programs", "Knowing enough about AI to use it well, question it and choose wisely", "Reading books about robots", "Typing fast"], answer: 1, why: "AI literacy is about using AI well and questioning it, not about coding." },
            { objective: "O1", q: "Your second graders have no AI accounts. How would you teach AI literacy?", options: ["Wait until high school", "Have them sign up with a parent's account", "Use teacher demos and unplugged activities", "Skip the topic"], answer: 2, why: "Demos and unplugged activities teach AI literacy without student accounts." }
          ]
        },
        {
          objectives: ["O2"],
          title: "A hands-on AI literacy lesson",
          minutes: 6,
          goal: "Plan a 30-minute lesson where students test AI and catch its mistakes.",
          text: [
            "Students learn AI's limits best by seeing them. Structure: hook (5 minutes): ask \"Is AI always right?\" and take a vote. Investigate (15 minutes): in pairs, or through a teacher demo, ask an AI tool questions you prepared, including one it gets wrong or makes up (a fake source, a tricky math word problem, a local fact).",
            "Fact-check (5 minutes): students check the answers against the textbook, a trusted website or the teacher. Discuss bias (5 minutes): ask the tool to describe \"a scientist\" or \"a nurse\" several times and notice patterns; talk about where those patterns come from.",
            "Close with an exit ticket: \"Name one thing AI is good for and one reason to check it.\" Test your prepared questions before class, because AI tools change and may fix or create errors."
          ],
          steps: ["Hook: \"Is AI always right?\" vote.", "Investigate: prepared questions, including one it gets wrong.", "Fact-check against trusted sources.", "Discuss bias with a describe-a-person test.", "Exit ticket; test your questions before class."],
          words: [["Fact-check", "checking a claim against a trusted source."], ["Bias", "an unfair pattern, such as always describing a job as one kind of person."]],
          slides: [
            { title: "30-minute lesson", bullets: ["Hook: is AI always right?", "Investigate: prepared questions", "Fact-check, discuss bias, exit ticket"] },
            { title: "Show a real mistake", bullets: ["A fake source or tricky word problem", "A local fact it may not know", "Test your questions before class"] },
            { title: "Spot bias", bullets: ["Ask it to describe \"a scientist\" several times", "Notice patterns; discuss where they come from"] }
          ],
          tryIt: "Prepare five questions for the lesson, including at least one the AI gets wrong. Test them in an approved tool and record the answers you will use.",
          youCanNow: "plan a hands-on lesson that teaches students to question AI.",
          quickCheck: [
            { objective: "O2", q: "What do students check AI answers against in the hands-on lesson?", options: ["The textbook, a trusted website or the teacher", "Another AI tool", "A classmate's guess", "Nothing; they trust the first answer"], answer: 0, why: "Trusted sources let students catch AI mistakes themselves." },
            { objective: "O2", q: "The question you prepared to show an AI error now gets a right answer. What do you do?", options: ["Tell students AI never makes mistakes", "Use it anyway and pretend it was wrong", "Cancel the lesson", "Test other questions until you find one the AI gets wrong, and record the answers"], answer: 3, why: "AI tools change, so test questions shortly before the lesson." }
          ]
        },
        {
          objectives: ["O3"],
          title: "AI as a learning partner, not an answer machine",
          minutes: 5,
          goal: "Teach students prompts that make AI help them think.",
          text: [
            "The same tool can do a student's thinking or support it. The difference is the prompt. Answer machine: \"Write my paragraph about the causes of the Civil War.\" Learning partner: \"Ask me questions to help me figure out the causes, one at a time, and do not give me the answer.\"",
            "Teach three learning-partner prompts: \"Explain this another way, with an example\"; \"Quiz me on this and tell me what I got wrong\"; \"Here is my draft. Give me two strengths and one thing to improve, but do not rewrite it.\"",
            "Some education tools are built to tutor this way. With any tool, students should check facts, and the work they hand in should be their own thinking, as the class AI use level allows."
          ],
          steps: ["Show an answer-machine prompt and its result.", "Show a learning-partner prompt and its result.", "Teach three learning-partner prompts.", "Have students practice on today's topic.", "Remind: check facts; hand in your own thinking."],
          words: [["Learning partner prompt", "a prompt that asks AI to help you think rather than do the work."], ["Socratic questioning", "teaching by asking questions that lead the learner to reason it out."]],
          slides: [
            { title: "Same tool, different prompt", bullets: ["Answer machine: \"Write my paragraph\"", "Learning partner: \"Ask me questions, don't tell me\""] },
            { title: "Three learning-partner prompts", bullets: ["\"Explain it another way, with an example\"", "\"Quiz me and tell me what I got wrong\"", "\"Two strengths, one fix, no rewriting\""] },
            { title: "Still the student's work", bullets: ["Check facts", "Hand in your own thinking"] }
          ],
          tryIt: "Try both an answer-machine prompt and a learning-partner prompt on a topic you teach. Write which one would help a student learn more and why.",
          youCanNow: "teach students to use AI to support their thinking, not replace it.",
          quickCheck: [
            { objective: "O3", q: "What is an answer-machine prompt?", options: ["A prompt that asks AI to quiz you", "A prompt that asks AI to do the work for you", "A prompt that asks for hints", "A prompt that asks AI to explain your mistakes"], answer: 1, why: "Answer-machine prompts skip the thinking the assignment builds." },
            { objective: "O3", q: "A student wants AI help studying for a test. Which prompt would you teach?", options: ["\"Give me all the answers.\"", "\"Write my notes for me.\"", "\"Do my homework.\"", "\"Quiz me one question at a time and tell me what I got wrong.\""], answer: 3, why: "A learning-partner prompt keeps the student thinking." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Teaching students about AI",
        questions: [
          { objective: "O1", q: "Which is one of the four student AI literacy skills?", options: ["Memorize AI company names", "Type faster", "Question: AI can be wrong or biased", "Avoid all technology"], answer: 2, why: "Questioning AI is core to AI literacy." },
          { objective: "O1", q: "How can younger students learn AI literacy without accounts?", options: ["Teacher demos and unplugged activities", "They cannot", "Using a parent's password", "Signing up with fake ages"], answer: 0, why: "Demos and unplugged lessons teach the ideas safely." },
          { objective: "O2", q: "Why test your prepared questions before the lesson?", options: ["To make it longer", "It is the law", "Students prefer it", "AI tools change and may fix or create errors"], answer: 3, why: "A planned mistake may no longer appear." },
          { objective: "O3", q: "Which is a learning-partner prompt?", options: ["\"Write my essay.\"", "\"Ask me questions one at a time; do not give the answer.\"", "\"Do my homework.\"", "\"Give me the answers.\""], answer: 1, why: "It supports thinking instead of replacing it." },
          { objective: "O2", q: "Asking AI to describe \"a nurse\" several times helps students notice:", options: ["Spelling", "Cost", "Speed", "Bias in patterns"], answer: 3, why: "Repeated patterns can reveal bias." }
        ]
      }
    },
    {
      name: "Chapter 2: Rules, safety and a school-wide plan",
      lessons: [
        {
          objectives: ["O4"],
          title: "AI use levels for assignments",
          minutes: 6,
          goal: "Set a five-level AI use scale and label assignments with it.",
          text: [
            "Students need to know, for each assignment, what AI use is allowed. A simple five-level scale: Level 0, no AI. Level 1, AI for ideas only (brainstorm, then work on your own). Level 2, AI for feedback (on your own draft; you make the changes). Level 3, AI as a collaborator (you may use AI-generated parts, marked and explained). Level 4, AI exploration (using AI is the point of the task).",
            "Label every assignment with its level, and explain why: a level 0 task might build a skill students must have on their own, like writing a timed paragraph or doing mental math. A level 2 task builds revision skills.",
            "Use the same scale across the school so students do not face different rules in every class. Several published versions of AI assessment scales exist; adapt one or write your own with your staff."
          ],
          steps: ["Agree a five-level scale with staff.", "Label each assignment with its level.", "Explain why that level fits the learning goal.", "Post the scale in class and online.", "Use the same scale across the school."],
          words: [["AI use level", "a label telling students how much AI they may use on a task."], ["Collaborator", "someone (or something) that works with you on a task."]],
          slides: [
            { title: "Five AI use levels", bullets: ["0 No AI; 1 Ideas only", "2 Feedback on your draft", "3 Collaborator, marked and explained", "4 AI exploration"] },
            { title: "Label every assignment", bullets: ["Say the level", "Say why it fits the learning goal"] },
            { title: "One scale, whole school", bullets: ["Same rules in every class", "Adapt a published scale with staff"] }
          ],
          tryIt: "Write the five-level scale in student-friendly words. Then label five of your upcoming assignments with a level and a one-line reason.",
          youCanNow: "tell students clearly how much AI they may use on each task, and why.",
          quickCheck: [
            { objective: "O4", q: "What does Level 0 on the AI use scale mean?", options: ["No AI may be used", "Any AI use is allowed", "AI may write the first draft", "AI may grade the work"], answer: 0, why: "Level 0 is for tasks where students must show their own thinking without AI." },
            { objective: "O4", q: "An assignment's goal is to practice writing a first draft alone. Which label fits?", options: ["Collaborator level, with AI drafting parts", "No level; let students decide", "A low level such as no AI, with the reason tied to that goal", "The highest level, so students learn the tool"], answer: 2, why: "The level should fit the learning goal, with a reason students can see." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Saying how you used AI",
          minutes: 5,
          goal: "Teach students a simple way to disclose and cite AI use.",
          text: [
            "Honesty about AI is a skill. When AI is allowed, students should say how they used it. A one-line disclosure works for most tasks: \"I used [tool] to [what] on [date]. I [what I did with it].\" For example: \"I used Gemini to quiz me on vocabulary on March 3. I wrote all answers myself.\"",
            "For research tasks, older students can follow the citation style your school uses; style guides such as MLA and APA publish guidance for citing AI tools on their own websites. AI is not a reliable source of facts, so students must still find and cite the original source.",
            "Treat honest disclosure as a positive. Students who say what they did with AI are learning integrity; do not punish an honest disclosure of allowed use."
          ],
          steps: ["Teach the one-line disclosure.", "Model it on your own AI-assisted work.", "For research, use your school's citation style guidance.", "Require original sources for facts.", "Praise honest disclosure."],
          words: [["Disclosure", "saying openly how you used AI."], ["Citation", "a note that tells the reader where information came from."]],
          slides: [
            { title: "The one-line disclosure", bullets: ["\"I used [tool] to [what] on [date].\"", "\"I [what I did with it].\""] },
            { title: "Research tasks", bullets: ["Use your school's citation style", "AI is not a source of facts", "Find and cite the original source"] },
            { title: "Reward honesty", bullets: ["Model it yourself", "Never punish honest disclosure of allowed use"] }
          ],
          tryIt: "Write a disclosure line for something you used AI for this week. Then write the instructions you will give students for disclosing AI use.",
          youCanNow: "teach students to disclose and cite AI use honestly.",
          quickCheck: [
            { objective: "O5", q: "What should a one-line AI disclosure include?", options: ["Only the word \"AI\"", "The tool, what it did, the date and what the student did", "The student's password", "A grade"], answer: 1, why: "A full line shows exactly how AI was used." },
            { objective: "O5", q: "A student honestly discloses allowed AI use on their work. How would you respond?", options: ["Treat the disclosure as a positive", "Lower their grade", "Report it as cheating", "Ignore it"], answer: 0, why: "Honest disclosure is the habit you want, so it should be welcomed." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Keeping students safe, and planning school-wide",
          minutes: 6,
          goal: "Teach student safety rules and plan AI literacy across grades.",
          text: [
            "Teach students four safety rules. Do not share personal information (full name, address, school, photos, passwords) with AI tools. Use only tools the school has approved, under the age rules in the tool's terms. AI can create fake images, voices and videos (deepfakes): be careful what you believe and never create fakes of real people. Talk to a trusted adult if an AI conversation becomes upsetting, unsafe or asks for secrets.",
            "For children under 13, COPPA applies to online services; the FTC says a school may consent for parents only when the service collects information for the school's use and benefit, with no other commercial purpose. Your district decides which tools students may use; tell families which ones and why.",
            "Plan AI literacy by grade band, so each year builds on the last: early grades learn what AI is through demos; upper elementary practices questioning and fact-checking; middle school adds bias, disclosure and learning-partner use; high school adds ethics, careers and responsible creation. Share the plan with families."
          ],
          steps: ["Teach the four safety rules.", "Confirm approved tools and age rules; for under 13, COPPA consent.", "Tell families which tools are used and why.", "Map AI literacy skills by grade band.", "Share the plan with families."],
          words: [["Deepfake", "a fake image, voice or video made with AI to look real."], ["Grade band", "a group of grades, such as K-2 or 6-8."]],
          slides: [
            { title: "Four student safety rules", bullets: ["No personal information", "Approved tools only, under age rules", "Beware deepfakes; never fake real people", "Tell a trusted adult"] },
            { title: "Under 13: COPPA", bullets: ["School consent only for school use", "No other commercial purpose", "Tell families which tools and why"] },
            { title: "A plan by grade band", bullets: ["Early: what AI is", "Upper elementary: question and check", "Middle and high: bias, disclosure, ethics"] }
          ],
          sources: [{ name: "FTC: Complying with COPPA, Frequently Asked Questions", url: "https://www.ftc.gov/business-guidance/resources/complying-coppa-frequently-asked-questions" }],
          tryIt: "Final task: assemble your student AI literacy package for one grade: the 30-minute lesson plan, the five-level AI use scale with an example assignment at each level, the one-line disclosure format, and a half-page family letter with the safety rules.",
          youCanNow: "lead student AI literacy with a lesson, clear use levels, honest disclosure and safety rules families understand.",
          quickCheck: [
            { objective: "O6", q: "What is a deepfake?", options: ["A broken computer file", "A strong password", "A fake image, voice or video made with AI", "A kind of search engine"], answer: 2, why: "Deepfakes are AI-made fakes, which is why students never create fakes of real people." },
            { objective: "O6", q: "A student says an AI chat made them upset. What should they have been taught to do?", options: ["Keep chatting until it stops", "Delete the app and say nothing", "Post about it online", "Tell a trusted adult"], answer: 3, why: "Telling a trusted adult is one of the student safety rules." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Rules, safety and a school-wide plan",
        questions: [
          { objective: "O4", q: "On a Level 2 (feedback) assignment, students may:", options: ["Have AI write the whole thing", "Not use AI at all", "Get AI feedback on their own draft and make the changes themselves", "Copy AI text without marking it"], answer: 2, why: "Level 2 is feedback on the student's own work." },
          { objective: "O4", q: "Why use the same AI use scale across the school?", options: ["Students face consistent rules in every class", "It is cheaper", "It bans AI", "Vendors require it"], answer: 0, why: "Consistency prevents confusion." },
          { objective: "O5", q: "A student honestly discloses allowed AI use. You should:", options: ["Lower the grade", "Treat the disclosure as a positive", "Report them", "Ignore it"], answer: 1, why: "Honest disclosure is integrity in action." },
          { objective: "O6", q: "Which is one of the four student safety rules?", options: ["Never create fakes of real people", "Share your address to get better answers", "Use any app you find", "Keep upsetting chats secret"], answer: 0, why: "Deepfakes of real people can cause harm." },
          { objective: "O6", q: "For students under 13, which law applies to online services?", options: ["None", "A traffic law", "Copyright only", "COPPA"], answer: 3, why: "COPPA protects children under 13 online." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: AI for School and Educational Leaders 5: Student Learning and AI Literacy",
    questions: [
      { objective: "O1", q: "AI literacy means:", options: ["Being able to build AI", "Knowing enough about AI to use it well, question it and choose wisely", "Never using AI", "Typing fast"], answer: 1, why: "It is understanding plus judgment." },
      { objective: "O1", q: "Students should understand that AI:", options: ["Knows everything", "Thinks like a person", "Predicts likely answers from patterns", "Never makes mistakes"], answer: 2, why: "That explains both its strengths and errors." },
      { objective: "O1", q: "An unplugged activity:", options: ["Is a power outage", "Requires a laptop", "Teaches about technology without devices", "Is a video"], answer: 2, why: "It suits younger students." },
      { objective: "O2", q: "In the hands-on lesson, students fact-check AI answers against:", options: ["The textbook, a trusted website or the teacher", "Another AI only", "A friend's guess", "Nothing"], answer: 0, why: "Trusted sources reveal errors." },
      { objective: "O2", q: "A good prepared question for the lesson is one that:", options: ["Is very long", "Everyone knows", "Has no answer", "The AI gets wrong or makes up"], answer: 3, why: "Seeing a mistake teaches the checking habit." },
      { objective: "O2", q: "The describe-a-person test helps students see:", options: ["Spelling errors", "Bias", "Prices", "Speed"], answer: 1, why: "Patterns reveal bias." },
      { objective: "O3", q: "\"Quiz me and tell me what I got wrong\" is:", options: ["A password", "Cheating", "An answer-machine prompt", "A learning-partner prompt"], answer: 3, why: "It supports learning." },
      { objective: "O3", q: "\"Write my paragraph for me\" makes AI:", options: ["A fact-checker", "A tutor", "An answer machine", "A teacher"], answer: 2, why: "It replaces the student's thinking." },
      { objective: "O4", q: "Level 0 on the AI use scale means:", options: ["No AI", "AI for everything", "Feedback only", "Ideas only"], answer: 0, why: "Some skills must be built alone." },
      { objective: "O4", q: "Level 3 (collaborator) requires students to:", options: ["Hide AI use", "Mark and explain AI-generated parts", "Use no AI", "Let AI grade it"], answer: 1, why: "Transparency is the condition." },
      { objective: "O4", q: "Each assignment's AI level should come with:", options: ["A reason tied to the learning goal", "A price", "A password", "No explanation"], answer: 0, why: "Students follow rules they understand." },
      { objective: "O5", q: "A one-line AI disclosure includes:", options: ["Nothing", "The student's address", "The tool's price", "The tool, what it did, the date, and what the student did"], answer: 3, why: "It makes AI use transparent." },
      { objective: "O5", q: "For research, facts should be cited from:", options: ["The AI chat only", "The original source", "Memory", "A rumor"], answer: 1, why: "AI is not a reliable source of facts." },
      { objective: "O5", q: "Guidance on citing AI in MLA or APA style is found:", options: ["Nowhere", "In the AI's answer only", "On the style guides' own websites", "On social media"], answer: 2, why: "Style guides publish their own guidance." },
      { objective: "O6", q: "Students should never share with AI:", options: ["A practice topic", "A math question", "Their full name, address and passwords", "A vocabulary word"], answer: 2, why: "Personal information stays private." },
      { objective: "O6", q: "A deepfake is:", options: ["A fake image, voice or video made with AI", "A deep swimming pool", "A long essay", "A secure password"], answer: 0, why: "AI can make realistic fakes." },
      { objective: "O6", q: "If an AI chat becomes upsetting, students should:", options: ["Share personal details", "Keep it secret", "Keep chatting", "Tell a trusted adult"], answer: 3, why: "Adults can help keep students safe." },
      { objective: "O6", q: "Minimum ages for AI tools are found in:", options: ["A colleague's memory", "Each tool's own current terms", "The school menu", "A textbook from 2010"], answer: 1, why: "Each tool sets and updates its own rules." },
      { objective: "O6", q: "A grade-band plan means:", options: ["Only high school learns AI", "One lesson for all ages", "No plan", "AI literacy skills that build year by year"], answer: 3, why: "Skills should build across grades." },
      { objective: "O6", q: "Families should be told:", options: ["Only after problems", "Nothing", "Which AI tools are used, why, and the safety rules", "Only the tool prices"], answer: 2, why: "Openness builds trust and support." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Pre-Test: What Do You Already Know?",
    from: [
      0,
      3,
      5,
      6,
      8,
      10,
      11,
      14,
      16,
      19
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      {
        name: "Hands-on lesson",
        objective: "O2",
        notYet: "Students do not test AI, catch an error or discuss bias.",
        meets: "A 30-minute plan where students test an AI tool or watch a demo, catch an error and discuss bias.",
        exceeds: "Prepared questions were tested beforehand and fit the grade."
      },
      {
        name: "AI use scale",
        objective: "O4",
        notYet: "Fewer than five levels, or levels without example assignments.",
        meets: "A five-level scale with an example assignment at each level.",
        exceeds: "Each example has a reason tied to the learning goal."
      },
      {
        name: "Disclosure format",
        objective: "O5",
        notYet: "No disclosure format, or it is missing key parts.",
        meets: "A one-line format students will use to say how they used AI.",
        exceeds: "Includes the tool, what it did, the date and what the student did, with an example."
      },
      {
        name: "Family letter and safety",
        objective: "O6",
        notYet: "No family letter, or the safety rules are missing.",
        meets: "A half-page letter explaining what students will learn and the safety rules.",
        exceeds: "Also says which tools are used and why, in plain words for families."
      },
      {
        name: "Student-friendly literacy skills",
        objective: "O1",
        notYet: "The package does not teach students to question AI.",
        meets: "The lesson teaches students that AI can be wrong or biased and how to check it.",
        exceeds: "Uses learning-partner prompts so AI helps students think."
      }
    ]
  },
  evaluation: {
    results: [
      "Educators who finish the course and pass the final task (rubric)",
      "Classes that teach the 30-minute AI literacy lesson within 30 days (follow-up survey)",
      "Schools using one shared AI use scale on assignments (follow-up survey)",
      "Families who receive a letter on student AI use and safety"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A computer with internet and an AI tool approved by the district for student or demo use",
      "A list of upcoming assignments for one grade",
      "Paper for unplugged activities with younger students",
      "About 60 minutes in total, plus the 30-minute student lesson"
    ],
    facilitatorNotes: [
      "Take the pre-test together, then run the hands-on lesson with staff as the students.",
      "Check the district's approved tools and each tool's age rules before any student uses it; use teacher demos for children under 13 where needed.",
      "Agree on one AI use scale across the school so students face consistent rules.",
      "Remind staff to welcome honest disclosure rather than punish it.",
      "Score the final task with the rubric, and review the family letter for plain language."
    ]
  }
};
