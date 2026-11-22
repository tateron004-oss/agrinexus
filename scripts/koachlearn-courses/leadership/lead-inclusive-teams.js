"use strict";

// Koach Learn course: Leadership Development -> "Leading Inclusive Teams" (new people-and-leadership course the owner asked for on 28 October 2026). Skill-building course: by the end the
// student can DO the skill in `outcome`. Two chapters of three micro-lessons; a knowledge check closes each chapter; a 20-question quiz closes the course. See scripts/koachlearn-export.js for how it is built.
// EEOC facts checked on eeoc.gov/employers and JAN on askjan.org, 28 October 2026.
//
// lesson: { title, minutes, goal, text: [paragraph], steps: [step] (optional), words: [[term, means]], slides: [{ title, bullets }], tryIt, youCanNow }
// question: { q, options: [4], answer: index of the right option, why }

module.exports = {
  id: "lead-inclusive-teams",
  category: "Leadership Development",
  name: "Leading Inclusive Teams",
  skills: "Building belonging, Checking for unconscious bias, Fair hiring and promotion habits, Running meetings where everyone is heard, Accessibility and respectful language, Responding to exclusion or harassment",
  outcome: "lead a team where everyone can contribute: build belonging, check your decisions for bias, hire and promote with fair habits, run meetings where every voice is heard, make work accessible, use respectful language, and respond quickly and properly when someone is excluded or harassed.",
  about: [
    "This course is for team leaders, supervisors, coaches, volunteer coordinators and business owners who want every person on their team to be treated fairly and able to do their best work.",
    "It is practical, not political. You will learn small, everyday habits: how to notice bias in your own decisions, how to make hiring and promotion fairer, how to run a meeting so quieter people are heard, how to make work accessible, and what to do when someone is left out or mistreated.",
    "Each lesson takes about five minutes. Read it, look at the slides, then do the \"Try it now\" task. There is a knowledge check after each chapter and a 20-question quiz at the end. This course is not legal advice; for legal duties, check the official sources named in the lessons or ask a qualified professional."
  ],
  finalTask: "Write a one-page \"inclusion habits\" plan for your team: one belonging habit, one bias check you will use on a real decision, three fair hiring or promotion habits, a meeting routine that makes sure every voice is heard, one accessibility improvement, and the steps you will follow if someone reports exclusion or harassment, including who you will tell and where the official rules are.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Team leads, supervisors, managers, small business owners and nonprofit leaders who want everyone on their team to contribute and be treated fairly.",
    startingPoint: "Want to be fair and can run a team's daily work. Few have a routine for checking decisions for bias, running structured interviews, making meetings and documents accessible, or responding to a harassment report.",
    gap: "Without simple habits, some people go quiet, hiring and promotion drift toward people who seem like us, and leaders mishandle reports of harassment. Leaders need practical habits for belonging, bias checks, fair hiring, inclusive meetings, accessibility and a clear response to exclusion or harassment.",
    constraints: [
      "Reading level: plain words and short sentences",
      "Time: short lessons that fit around a working day",
      "Laws differ by country and organization size; US learners check eeoc.gov and talk to HR or an employment lawyer about their duties",
      "Privacy: accommodation requests and harassment reports are handled privately and follow the organization's policy",
      "Safety: anyone in immediate danger calls emergency services"
    ],
    prerequisites: "None. \"Managing Teams\" is a helpful companion course."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "For a team you lead or know", action: "identify the signs of belonging and choose one habit that builds it", standard: "naming a habit you can repeat every week" },
    { id: "O2", condition: "Given a real decision about people", action: "apply a bias check: set criteria first, write your reasons and ask whether you would decide the same for someone from a different group", standard: "before the decision is final" },
    { id: "O3", condition: "Given a job opening or promotion", action: "plan fair hiring or promotion habits such as job-related requirements and structured interviews", standard: "judging every candidate by the same job-related standards" },
    { id: "O4", condition: "For a regular team meeting", action: "plan a meeting routine that gives every person a fair chance to speak", standard: "including at least two tools such as going around, silent writing or asking remote people first" },
    { id: "O5", condition: "For one part of your team's work", action: "choose one accessibility improvement and use respectful language for names and pronouns", standard: "handling requests privately" },
    { id: "O6", condition: "When someone reports or you see exclusion or harassment", action: "list the steps you will follow, who you will tell and where the official rules are", standard: "acting right away and protecting the person from retaliation" }
  ],
  chapters: [
    {
      name: "Chapter 1: Belonging and fair decisions",
      lessons: [
        {
          objectives: ["O1"],
          title: "What belonging looks like on a team",
          minutes: 5,
          goal: "Name the signs of belonging on a team and pick one habit that builds it.",
          text: [
            "A team has belonging when every person feels respected, safe to speak up, and valued for what they bring. People who feel they belong share ideas, admit mistakes early and stay longer. People who feel left out go quiet, and the team loses their ideas.",
            "Belonging is built by small, repeated actions from the leader: learning how to say each person's name correctly, sharing important information with everyone at the same time, giving stretch tasks fairly, and thanking people for raising problems instead of punishing them.",
            "Ask, do not guess. A short, private question like \"What would make it easier for you to speak up here?\" tells you more than any assumption."
          ],
          steps: ["Notice who speaks up and who stays quiet.", "Share key information with everyone at the same time.", "Spread good assignments fairly.", "Thank people who raise problems.", "Ask privately what would help each person speak up."],
          words: [["Inclusion", "making sure every person can take part fully and fairly."], ["Belonging", "the feeling of being respected and valued as part of a group."], ["Psychological safety", "the shared belief that you can speak up, ask questions or admit mistakes without being punished or mocked."]],
          slides: [
            { title: "Signs of belonging", bullets: ["People feel respected and valued", "They speak up and admit mistakes early", "They stay longer"] },
            { title: "Small habits that build it", bullets: ["Say each name correctly", "Share news with everyone at once", "Spread good assignments fairly", "Thank people who raise problems"] },
            { title: "Ask, don't guess", bullets: ["\"What would make it easier for you to speak up here?\""] }
          ],
          tryIt: "For one week, notice who speaks in your team meetings and who does not. Write down one belonging habit from this lesson you will start, and one person you will ask privately what would help them speak up.",
          youCanNow: "describe what belonging looks like and start one habit that builds it.",
          quickCheck: [
            { objective: "O1", q: "What happens when people on a team feel left out?", options: ["They work harder to prove themselves", "They go quiet and the team loses their ideas", "Nothing changes", "They always leave that day"], answer: 1, why: "People who feel left out go quiet, and their ideas are lost." },
            { objective: "O1", q: "You are not sure why a team member never speaks in meetings. What would you do?", options: ["Ask them privately what would make it easier to speak up", "Assume they have nothing to say", "Call on them first in front of everyone", "Ask the rest of the team about them"], answer: 0, why: "Ask, do not guess; a short private question tells you more." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Spotting unconscious bias",
          minutes: 5,
          goal: "Use a simple check to catch bias in a real decision.",
          text: [
            "Unconscious bias means quick judgments our brains make without our noticing, based on things like someone's age, accent, gender, race, disability, background or where they went to school. Everyone has them. Having them does not make you a bad person, but acting on them can lead to unfair decisions.",
            "Common traps: liking people who remind us of ourselves (affinity bias), letting one good or bad trait color everything (the halo effect), and noticing only facts that fit what we already believe (confirmation bias).",
            "You cannot remove bias by willpower alone, so build checks into decisions. Decide the criteria before you look at people. Write down your reasons. Ask: \"Would I decide the same if this person were from a different group?\" Get a second opinion on important calls."
          ],
          steps: ["Write the criteria before you look at people or options.", "Judge each person against the same criteria.", "Write down the reason for your decision.", "Ask: \"Would I decide the same if this person were from a different group?\"", "Get a second opinion on big decisions."],
          words: [["Unconscious bias", "a quick judgment about people that we make without noticing."], ["Affinity bias", "favoring people who seem like us."], ["Halo effect", "letting one trait make us judge everything else about a person as good or bad."], ["Criteria", "the standards you use to make a decision."]],
          slides: [
            { title: "Everyone has bias", bullets: ["Quick judgments we don't notice", "Not a moral failing", "Acting on it leads to unfair decisions"] },
            { title: "Common traps", bullets: ["Affinity bias: favoring people like us", "Halo effect: one trait colors everything", "Confirmation bias: only seeing what fits"] },
            { title: "Build in checks", bullets: ["Criteria first, people second", "Same criteria for everyone", "Write your reasons", "\"Would I decide the same...?\" plus a second opinion"] }
          ],
          tryIt: "Think of a recent decision about people, like who got a shift, a project or a chance to speak. Write the criteria you should have used, then use the \"would I decide the same?\" question on it. Write one thing you would do differently.",
          youCanNow: "name common biases and use a simple check to make a fairer decision.",
          quickCheck: [
            { objective: "O2", q: "What is confirmation bias?", options: ["Favoring people like us", "Judging everything by one trait", "Noticing only facts that fit what we already believe", "Confirming a meeting time"], answer: 2, why: "Confirmation bias filters facts to fit our existing view." },
            { objective: "O2", q: "You are choosing who leads a new project. What would you do first?", options: ["Pick the person you get along with best", "Decide the criteria before you look at people", "Let the loudest person choose", "Choose quickly and explain later"], answer: 1, why: "Deciding the criteria first is a check built into the decision." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Fair hiring and promotion habits",
          minutes: 6,
          goal: "Set up a hiring or promotion process that judges everyone by the same job-related standards.",
          text: [
            "Fair hiring starts with the job, not the person. Write down what the job really needs and drop requirements that do not matter, like a degree for work that does not need one. Share openings widely, not only through friends of the current team.",
            "Use structured interviews: ask every candidate the same job-related questions, score answers against the same scale, and have more than one person score. Do not ask about things that have nothing to do with the job, such as plans for children, religion or age.",
            "For promotions, make the criteria known and give everyone a fair chance at the stretch work that leads to promotion. In the United States, the Equal Employment Opportunity Commission (EEOC) enforces federal laws against job discrimination based on race, color, religion, sex (the EEOC says this includes pregnancy, sexual orientation and transgender status), national origin, age (40 or older), disability and genetic information. Whether a law covers your organization can depend on its size, so check eeoc.gov and talk to HR or an employment lawyer about your duties."
          ],
          steps: ["List what the job truly needs; remove what it doesn't.", "Post the opening widely.", "Ask every candidate the same job-related questions.", "Score answers on the same scale, with more than one scorer.", "Make promotion criteria known and share stretch work fairly.", "Check eeoc.gov or ask HR about legal duties."],
          words: [["Structured interview", "an interview where every candidate gets the same questions and is scored the same way."], ["EEOC", "the US Equal Employment Opportunity Commission, the federal agency that enforces laws against job discrimination."], ["Protected characteristic", "a trait, such as race, sex, age (40 or older) or disability, that the law says cannot be the basis of job decisions."]],
          slides: [
            { title: "Start with the job", bullets: ["List what the job really needs", "Drop requirements that don't matter", "Post openings widely"] },
            { title: "Structured interviews", bullets: ["Same job-related questions for everyone", "Same scoring scale", "More than one scorer"] },
            { title: "Fair promotions", bullets: ["Make the criteria known", "Share stretch work fairly"] },
            { title: "Know the rules (US)", bullets: ["EEOC enforces federal anti-discrimination laws", "Coverage can depend on employer size", "Check eeoc.gov; ask HR or a lawyer"] }
          ],
          sources: [{ name: "EEOC: Employers", url: "https://www.eeoc.gov/employers" }],
          tryIt: "Pick a real or pretend job on your team. Write three must-have requirements, remove one that is not really needed, and write three interview questions you would ask every candidate, with what a strong answer looks like.",
          youCanNow: "design a hiring or promotion process that treats every candidate by the same job-related standards and know where to check the law.",
          quickCheck: [
            { objective: "O3", q: "What is a structured interview?", options: ["Each interviewer asks whatever they like", "A chat over lunch", "An interview with no scoring", "Every candidate gets the same job-related questions, scored on the same scale"], answer: 3, why: "Same questions and the same scale help judge everyone fairly." },
            { objective: "O3", q: "You want to share a new opening. What would you do?", options: ["Ask only the current team's friends", "Share it widely, not only through friends of the team", "Keep it quiet until you find someone", "Post it only in one private group"], answer: 1, why: "Fair hiring shares openings widely." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Belonging and fair decisions",
        questions: [
          { objective: "O1", q: "Which is a sign of belonging on a team?", options: ["Only the leader talks", "People hide mistakes", "New people are left out of news", "People speak up and admit mistakes early"], answer: 3, why: "When people feel safe, they speak up and share problems early." },
          { objective: "O2", q: "What is affinity bias?", options: ["Favoring people who seem like us", "Liking tidy desks", "Being good at math", "Hiring only experts"], answer: 0, why: "Affinity bias pulls us toward people like ourselves." },
          { objective: "O2", q: "What is the best way to reduce bias in a decision?", options: ["Trust your gut", "Decide the criteria first and judge everyone against them", "Decide quickly", "Only ask your friends"], answer: 1, why: "Set criteria and checks; willpower alone does not remove bias." },
          { objective: "O3", q: "In a structured interview you:", options: ["Ask each person whatever comes to mind", "Ask about their family plans", "Ask every candidate the same job-related questions", "Skip scoring"], answer: 2, why: "The same questions and scoring make comparisons fair." },
          { objective: "O3", q: "In the US, which agency enforces federal laws against job discrimination?", options: ["The IRS", "The Postal Service", "The FAA", "The EEOC"], answer: 3, why: "The Equal Employment Opportunity Commission enforces those laws." }
        ]
      }
    },
    {
      name: "Chapter 2: Everyday inclusion",
      lessons: [
        {
          objectives: ["O4"],
          title: "Running meetings where everyone is heard",
          minutes: 5,
          goal: "Run a meeting routine that gives every person a fair chance to speak.",
          text: [
            "In many meetings, a few people do most of the talking. That is not always because others have nothing to say. They may be newer, quieter, speaking a second language, joining remotely or used to being talked over.",
            "Simple tools help: send the agenda ahead so people can prepare, go around the room, give a minute of silent writing before discussion, ask remote people first, and invite written ideas after the meeting.",
            "Watch for interruptions and for people whose ideas get repeated by someone else and credited to them. Step in kindly: \"Let's let Amina finish,\" or \"That builds on what Luis said earlier.\" Rotate roles like note-taker so the same people do not always get the background tasks."
          ],
          steps: ["Send the agenda ahead.", "Start with a go-around or a minute of silent writing.", "Call on remote people first.", "Stop interruptions kindly and credit ideas to the person who said them.", "Rotate the note-taker.", "Invite written ideas after the meeting."],
          words: [["Go-around", "giving every person a turn to speak, one by one."], ["Hybrid meeting", "a meeting where some people are in the room and some join online."]],
          slides: [
            { title: "Why some voices are missing", bullets: ["Newer or quieter", "Second-language speakers", "Remote, or used to being talked over"] },
            { title: "Tools that help", bullets: ["Agenda ahead", "Go-around or silent writing", "Remote people first", "Written ideas after"] },
            { title: "Step in kindly", bullets: ["\"Let's let Amina finish.\"", "\"That builds on what Luis said.\"", "Rotate the note-taker"] }
          ],
          tryIt: "Plan your next team meeting using at least three tools from this lesson. Write them on the agenda. After the meeting, note who spoke who usually does not.",
          youCanNow: "run a meeting that gives every person a fair chance to speak and be credited.",
          quickCheck: [
            { objective: "O4", q: "Why send the meeting agenda ahead?", options: ["So people can prepare", "So the meeting can be longer", "So no one needs to come", "So the leader can skip planning"], answer: 0, why: "Preparing ahead helps quieter people and second-language speakers contribute." },
            { objective: "O4", q: "The same two people always take notes. What would you do?", options: ["Leave it; they are good at it", "Take notes yourself every time", "Rotate the note-taker role", "Stop taking notes"], answer: 2, why: "Rotating roles stops the same people from always getting background tasks." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Accessibility and respectful language",
          minutes: 5,
          goal: "Make one part of your team's work more accessible and use respectful language.",
          text: [
            "Accessibility means people with disabilities, and everyone else, can use your workplace, documents, tools and meetings. Many disabilities cannot be seen. Simple steps help many people: captions on videos and online meetings, readable fonts and good contrast, documents that work with screen readers, step-free spaces, and quiet places to work.",
            "Make it easy to ask for what someone needs, and handle requests privately. In the US, the Job Accommodation Network (askjan.org) gives free, confidential guidance on workplace accommodations, and the EEOC page for employers explains when denying a needed accommodation can be against the law.",
            "Respectful language means calling people what they ask to be called: say names correctly, use the pronouns people share, and when unsure, ask politely or just use their name. Avoid jokes about someone's identity. If you get it wrong, apologize briefly, correct it and move on."
          ],
          steps: ["Turn on captions in online meetings and videos.", "Use clear fonts, good contrast and headings in documents.", "Tell people how to ask for an accommodation, and keep requests private.", "Use the names and pronouns people share.", "If you get it wrong: apologize briefly, correct it, move on."],
          words: [["Accessibility", "designing places, tools and information so people with disabilities can use them."], ["Accommodation", "a change to a job or workplace that lets a person with a disability, a religious need or a pregnancy-related need do the work."], ["Screen reader", "software that reads screen text aloud for people who are blind or have low vision."]],
          slides: [
            { title: "Accessibility helps everyone", bullets: ["Captions on videos and meetings", "Readable fonts, contrast and headings", "Step-free and quiet spaces"] },
            { title: "Accommodations", bullets: ["Make it easy to ask", "Keep requests private", "Free guidance (US): askjan.org"] },
            { title: "Respectful language", bullets: ["Say names correctly", "Use the pronouns people share", "No jokes about identity"] },
            { title: "Got it wrong?", bullets: ["Apologize briefly", "Correct it", "Move on"] }
          ],
          sources: [{ name: "Job Accommodation Network (JAN)", url: "https://askjan.org/" }, { name: "EEOC: Employers", url: "https://www.eeoc.gov/employers" }],
          tryIt: "Check one thing your team uses often, such as a sign-up form, a training video or the weekly meeting. List two accessibility fixes and do one of them this week.",
          youCanNow: "make team work more accessible, handle accommodation requests respectfully, and use respectful language.",
          quickCheck: [
            { objective: "O5", q: "Which is a simple accessibility step?", options: ["Using tiny fonts to fit more on a page", "Playing videos without sound", "Making documents image-only", "Turning on captions for videos and online meetings"], answer: 3, why: "Captions help many people, including people with hearing disabilities." },
            { objective: "O5", q: "You are not sure how to refer to a new colleague. What would you do?", options: ["Guess and hope", "Ask politely or use their name", "Avoid talking to them", "Ask another coworker to find out"], answer: 1, why: "When unsure, ask politely or just use their name." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Responding to exclusion or harassment",
          minutes: 6,
          goal: "Respond quickly and properly when someone is excluded, mistreated or harassed.",
          text: [
            "Exclusion can be small: always leaving one person off the lunch invite, ignoring their ideas, or making jokes at their expense. Harassment is more serious: unwelcome conduct based on things like race, color, religion, sex, national origin, age, disability or genetic information. As a leader, you cannot ignore either.",
            "If you see it, act. Interrupt calmly in the moment (\"That's not okay here\"), then talk privately with the person affected and ask what they need. If someone tells you about harassment, listen, thank them, do not promise to keep it secret if your policy requires you to report it, write down what they said, and report it to HR or the person named in your policy right away.",
            "Protect people from retaliation: no one should be punished for raising a concern or helping an investigation. In the US, the EEOC explains harassment, retaliation and how to file a complaint on eeoc.gov. If someone is in danger, call emergency services. Get advice from HR or an employment lawyer on your legal duties."
          ],
          steps: ["If you see it, interrupt calmly in the moment.", "Talk privately with the person affected and ask what they need.", "If someone reports harassment: listen, thank them, write it down.", "Don't promise secrecy if your policy says you must report.", "Report to HR or the person named in your policy right away.", "Make sure no one is punished for speaking up."],
          words: [["Harassment", "unwelcome conduct based on a protected characteristic, serious or frequent enough to make work hostile."], ["Retaliation", "punishing someone for complaining about discrimination or helping an investigation."], ["Bystander", "a person who sees something wrong happen to someone else."]],
          slides: [
            { title: "Exclusion and harassment", bullets: ["Exclusion: left out, ignored, mocked", "Harassment: unwelcome conduct based on a protected trait", "Leaders cannot ignore either"] },
            { title: "If you see it", bullets: ["Interrupt calmly: \"That's not okay here\"", "Talk privately with the person affected", "Ask what they need"] },
            { title: "If someone tells you", bullets: ["Listen and thank them", "Write it down", "Don't promise secrecy you can't keep", "Report to HR right away"] },
            { title: "Protect and check", bullets: ["No punishment for speaking up", "US rules: eeoc.gov", "Danger? Call emergency services"] }
          ],
          sources: [{ name: "EEOC: Employers (harassment, retaliation, accommodation)", url: "https://www.eeoc.gov/employers" }],
          tryIt: "Final task: write your one-page inclusion habits plan. Include one belonging habit, one bias check, three fair hiring or promotion habits, a meeting routine, one accessibility fix, and the steps you will follow if someone reports exclusion or harassment, with who you will tell and where to check the rules.",
          youCanNow: "respond to exclusion or harassment quickly and properly, protect people who speak up, and know where to check your legal duties.",
          quickCheck: [
            { objective: "O6", q: "Which is an example of small, everyday exclusion?", options: ["Always leaving one person off the lunch invite", "Giving clear deadlines", "Holding one-on-ones", "Sharing news with everyone at once"], answer: 0, why: "Exclusion can be small but repeated, and leaders should not ignore it." },
            { objective: "O6", q: "Someone who raised a concern is suddenly left off a project by their manager. What is this a sign of?", options: ["Normal scheduling", "Fair promotion", "Possible retaliation, which you must stop", "A structured interview"], answer: 2, why: "No one should be punished for raising a concern." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Everyday inclusion",
        questions: [
          { objective: "O4", q: "A remote team member rarely speaks in hybrid meetings. What helps?", options: ["Ask remote people first", "Turn off their camera", "Stop inviting them", "Only send notes later"], answer: 0, why: "Calling on remote people first gives them a fair turn." },
          { objective: "O4", q: "Someone's idea is repeated by a louder colleague and praised. What do you say?", options: ["Nothing", "\"Great idea!\" to the louder person", "\"That builds on what Luis said earlier.\"", "\"Let's move on.\""], answer: 2, why: "Credit the idea to the person who said it first." },
          { objective: "O5", q: "Which is an accessibility step for online meetings?", options: ["Speaking faster", "Turning on captions", "Using tiny fonts", "Turning off chat"], answer: 1, why: "Captions help people who are deaf or hard of hearing, and many others." },
          { objective: "O5", q: "You use the wrong pronoun for a colleague. What do you do?", options: ["Argue about it", "Make a joke", "Avoid them", "Apologize briefly, correct it and move on"], answer: 3, why: "A short apology and correction is respectful without making it awkward." },
          { objective: "O6", q: "A team member reports harassment and asks you to keep it secret. Your policy requires reporting. You should:", options: ["Explain you must report it, then report it to HR right away", "Promise secrecy", "Ignore it", "Tell the whole team"], answer: 0, why: "Don't promise secrecy you cannot keep; follow your policy." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Leading Inclusive Teams",
    questions: [
      { objective: "O1", q: "Psychological safety means people:", options: ["Never disagree", "Can speak up or admit mistakes without being punished or mocked", "Work alone", "Have no deadlines"], answer: 1, why: "Safety to speak up is the core of it." },
      { objective: "O1", q: "Which habit builds belonging?", options: ["Sharing news with some people first", "Giving the best tasks to friends", "Mispronouncing names", "Thanking people who raise problems"], answer: 3, why: "Thanking people for raising problems makes it safe to speak up." },
      { objective: "O1", q: "To learn what would help someone speak up, you should:", options: ["Ask them privately", "Guess", "Ask their coworkers", "Wait"], answer: 0, why: "Asking beats assuming." },
      { objective: "O2", q: "Unconscious bias is:", options: ["Always on purpose", "Only a problem for bad people", "A quick judgment we make without noticing", "Against the law to have"], answer: 2, why: "Everyone has it; the problem is acting on it." },
      { objective: "O2", q: "The halo effect is when:", options: ["One trait colors how we judge everything else about someone", "We like bright offices", "We work late", "We hire from many places"], answer: 0, why: "One good or bad trait spreads to our whole view." },
      { objective: "O2", q: "A good bias check question is:", options: ["\"Do I like them?\"", "\"Would I decide the same if this person were from a different group?\"", "\"Are they like me?\"", "\"What does my gut say?\""], answer: 1, why: "It tests whether group membership changed your decision." },
      { objective: "O3", q: "The job ad asks for a degree, but the work doesn't need one. Fair hiring says:", options: ["Keep it to cut applicants", "Add two more degrees", "Remove requirements the job doesn't really need", "Hide the ad"], answer: 2, why: "Extra requirements shut out capable people." },
      { objective: "O3", q: "Which interview question should you NOT ask?", options: ["\"Tell me about a time you solved a customer problem.\"", "\"How would you handle a late delivery?\"", "\"What safety steps do you follow?\"", "\"Are you planning to have children?\""], answer: 3, why: "Family plans are not job-related and can lead to discrimination." },
      { objective: "O3", q: "Where can US employers check federal anti-discrimination duties?", options: ["eeoc.gov", "A social media post", "A competitor's website", "Nowhere"], answer: 0, why: "The EEOC's official site explains employer duties." },
      { objective: "O3", q: "Under EEOC rules, age discrimination protection covers people who are:", options: ["Under 25", "40 or older", "Over 70 only", "Any age under 18"], answer: 1, why: "The EEOC lists age 40 or older." },
      { objective: "O4", q: "A minute of silent writing before discussion helps because:", options: ["It ends the meeting faster", "Quieter people get time to form their ideas", "Nobody has to speak", "It replaces the agenda"], answer: 1, why: "It gives everyone time to think before louder voices take over." },
      { objective: "O4", q: "Why rotate the note-taker role?", options: ["So the same people don't always get background tasks", "To confuse people", "Because notes are not needed", "To punish latecomers"], answer: 0, why: "Rotating background tasks is fairer." },
      { objective: "O4", q: "A colleague keeps interrupting Amina. You say:", options: ["Nothing", "\"Amina, be quicker.\"", "\"Let's let Amina finish.\"", "\"Let's take a break.\""], answer: 2, why: "Stepping in kindly protects her turn." },
      { objective: "O5", q: "Which free US service gives confidential guidance on workplace accommodations?", options: ["A search engine ad", "The Job Accommodation Network (askjan.org)", "A video game site", "A shopping app"], answer: 1, why: "JAN gives free, confidential accommodation guidance." },
      { objective: "O5", q: "An employee asks for a change to do their job because of a disability. You should:", options: ["Discuss it with the whole team", "Say no right away", "Ask them to prove it publicly", "Handle it privately and follow your accommodation process"], answer: 3, why: "Requests should be private and taken seriously." },
      { objective: "O5", q: "When you are unsure of someone's pronouns, a respectful option is to:", options: ["Guess loudly", "Avoid talking to them", "Ask politely or use their name", "Make a joke"], answer: 2, why: "Asking politely or using their name is respectful." },
      { objective: "O6", q: "You hear a \"joke\" mocking a coworker's accent. What is the best first step?", options: ["Interrupt calmly: \"That's not okay here,\" then check on the coworker", "Laugh along", "Wait to see if it happens again", "Post about it online"], answer: 0, why: "Act in the moment and support the person affected." },
      { objective: "O6", q: "Retaliation means:", options: ["Giving a raise", "Punishing someone for complaining about discrimination or helping an investigation", "A team party", "A training session"], answer: 1, why: "Retaliation is itself prohibited and must be prevented." },
      { objective: "O6", q: "After someone reports harassment to you, you should:", options: ["Wait a few weeks", "Tell them to handle it", "Confront the accused in front of the team", "Write down what they said and report it to HR right away"], answer: 3, why: "Fast, documented reporting follows good practice and policy." },
      { objective: "O6", q: "Someone is in immediate danger at work. You should:", options: ["Send an email to HR tomorrow", "Call emergency services", "Hold a meeting", "Do nothing"], answer: 1, why: "Safety comes first; call emergency services." }
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
      10,
      12,
      13,
      15,
      16,
      18
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      {
        name: "Belonging habit",
        objective: "O1",
        notYet: "No habit, or a one-time event.",
        meets: "One belonging habit the leader can repeat.",
        exceeds: "Says how they will ask the team whether it helps."
      },
      {
        name: "Bias check",
        objective: "O2",
        notYet: "No check, or the check comes after the decision.",
        meets: "A bias check used on a real decision: criteria first, reasons written down.",
        exceeds: "Also gets a second opinion on the decision."
      },
      {
        name: "Fair hiring or promotion",
        objective: "O3",
        notYet: "Fewer than three habits, or habits not tied to the job.",
        meets: "Three habits that judge everyone by the same job-related standards.",
        exceeds: "Includes structured interview questions scored by more than one person."
      },
      {
        name: "Meetings and accessibility",
        objective: "O4",
        notYet: "No meeting routine or no accessibility improvement.",
        meets: "A meeting routine that gives every voice a turn, and one accessibility improvement.",
        exceeds: "Says how they will step in on interruptions or ideas taken without credit."
      },
      {
        name: "Response steps",
        objective: "O6",
        notYet: "Steps are missing, or the plan promises to keep a report secret against policy.",
        meets: "Steps for a report of exclusion or harassment, who they will tell and where the official rules are.",
        exceeds: "Includes protecting the person from retaliation and calling emergency services if someone is in danger."
      }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Learners who use a structured interview or bias check within 90 days (follow-up survey)",
      "Team members who report they can speak up in meetings",
      "Learners who take another Koach Learn leadership course"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A phone or computer to watch the lessons",
      "Paper or a document for the one-page inclusion habits plan",
      "Your organization's policy on harassment and accommodations, if it has one",
      "About 60 minutes in total: lessons, practice, checks and the final task"
    ],
    facilitatorNotes: [
      "Set ground rules first: no real names or identifying stories from learners' workplaces in group discussion.",
      "Practice stepping in out loud with phrases like \"Let's let Amina finish.\"",
      "Ask learners to find their own organization's reporting policy before writing the response steps.",
      "Remind learners outside the US that laws differ, and to check their own national rules and HR.",
      "Score the final task with the rubric and give feedback on one Not yet row at a time."
    ]
  }
};
