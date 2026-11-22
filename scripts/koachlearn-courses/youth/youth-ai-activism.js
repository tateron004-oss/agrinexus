"use strict";

// Koach Learn course: Youth -> "AI for Activism and Social Impact" (bonus). Skill-building: by the end the student can plan a small, safe, respectful community action and use AI to research, write and share a clear message, with every fact checked.
// Shape: scripts/koachlearn-courses/README.md; model: re-entry/reentry-ai-digital-confidence.js.

module.exports = {
  id: "youth-ai-activism",
  category: "Youth",
  name: "AI for Activism and Social Impact",
  skills: "Choosing a local issue, Researching and fact-checking with AI, Planning a small action, Writing a message to a decision-maker, Spreading the word safely and respectfully",
  outcome: "plan a small, safe action on a school or community issue you care about, using AI to research it, check the facts with trusted sources, write a respectful message to a decision-maker, and make a simple plan to share it.",
  about: [
    "This course is for teens who want to make a difference: a cleaner park, a safer crosswalk near school, more recycling bins, a food drive, or a club that welcomes new students. Small, local actions are a great place to start.",
    "You will choose an issue, use an AI assistant such as ChatGPT, Microsoft Copilot or Google Gemini to research it and brainstorm solutions, check every fact with trusted sources, plan one small action, write a respectful letter or email to someone who can help, and share your message safely.",
    "Check your school's rules on AI and the age rules of every tool, and involve a parent, guardian or teacher before you sign up for anything, contact officials, or organize an event. Each lesson ends with a \"Try it now\" task, a knowledge check closes each chapter, and a 20-question quiz closes the course."
  ],
  finalTask: "Make a one-page action plan for a school or community issue you care about: the problem in one sentence, two facts you checked with trusted sources, one small action with a date and helpers, and the adult who supports you. Use AI to help draft a respectful letter or email to a decision-maker (a principal, school board or city council member), check and rewrite it in your own words, and make a simple plan to share your message safely.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Teens who want to make a difference at school or in their community, such as a cleaner park, a safer crosswalk, more recycling bins, a food drive or a more welcoming club.",
    startingPoint: "Care about issues and see problems around them, and use social media and possibly AI assistants. Few have checked facts against trusted sources, planned an action with permissions, or written to a decision-maker.",
    gap: "Passion without a plan can fizzle out, and AI can spread made-up facts or fake images that break trust. Teens need to pick a change they can make, check every fact, plan safely with an adult, and speak respectfully to people with power to help, so their voice leads to real results.",
    constraints: [
      "Age limits and school AI rules; a parent, guardian or teacher is involved before contacting officials or organizing an event",
      "Safety: permissions for events, never going alone, and no private details online",
      "Facts must be checked with trusted sources; no fake images or quotes",
      "Devices: a phone or school or library computer with free tools",
      "Short lessons and plain words"
    ],
    prerequisites: "None."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Thinking about your school or community", action: "choose one local issue and describe it in one sentence with who is affected and who could fix it", standard: "picking an issue you can work on safely" },
    { id: "O2", condition: "Using an AI assistant and trusted sources", action: "research your issue and check every fact, plus gather your own evidence", standard: "using only facts confirmed by an official site or a real person" },
    { id: "O3", condition: "Given your issue", action: "plan one small action with a date, helpers, needed permissions and an adult supporter", standard: "with permission in place before you start" },
    { id: "O4", condition: "Given your checked facts", action: "write a short, respectful message to a decision-maker with a specific ask", standard: "rewritten in your own words and read by an adult before sending" },
    { id: "O5", condition: "When you share your action", action: "create a poster or post that says what, when, where and why, and share it safely", standard: "from an approved account, with no private details and no personal attacks" },
    { id: "O6", condition: "Before you share anything about your cause", action: "check that it is true, checked and fair, label AI images, and write a one-page action plan", standard: "using no fake images or quotes of real people" }
  ],
  chapters: [
    {
      name: "Chapter 1: From caring to a plan",
      lessons: [
        {
          objectives: ["O1"],
          title: "Picking an issue you can actually change",
          minutes: 4,
          goal: "Choose one local issue and describe it in one clear sentence.",
          text: [
            "Social impact means making things better for other people. Activism means working for a change. You do not have to fix the whole world. A small, local problem you can see, like broken water fountains at school or litter at the bus stop, is easier to change and teaches you how change happens.",
            "Ask: Who is affected? What would better look like? Who has the power to fix it, such as a principal, a club advisor, a school board or a city council?",
            "An AI assistant can help you brainstorm: \"I am 15. What are some small problems teens can help solve at a high school or in a neighborhood?\" Then pick one that matters to you and that you can work on safely."
          ],
          words: [["Social impact", "making things better for other people."], ["Activism", "working for a change in your school, community or the world."], ["Decision-maker", "a person or group with the power to make a change."]],
          slides: [
            { title: "Start small and local", bullets: ["A problem you can see", "Easier to change", "Teaches how change happens"] },
            { title: "Three questions", bullets: ["Who is affected?", "What would better look like?", "Who has the power to fix it?"] },
            { title: "Brainstorm with AI", bullets: ["Ask for ideas teens can work on", "Pick one that matters to you", "Pick one you can work on safely"] }
          ],
          tryIt: "Write your issue in one sentence, like \"Our school has no recycling bins in the cafeteria, so cans go in the trash.\" Add who is affected and who could fix it.",
          youCanNow: "choose a local issue and say who it affects and who can change it.",
          quickCheck: [
            { objective: "O1", q: "What does activism mean?", options: ["Posting about yourself", "Fixing the whole world at once", "Working for a change", "Arguing online"], answer: 2, why: "Activism means working for a change; social impact means making things better for others." },
            { objective: "O1", q: "You care about many problems. Which is the best first choice?", options: ["Litter at your bus stop that you can see and help fix", "Ending all pollution worldwide", "A problem in a country you know nothing about", "Whatever is trending"], answer: 0, why: "A small, local problem is easier to change and teaches you how change happens." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Researching with AI and checking every fact",
          minutes: 6,
          goal: "Use AI to start research, then confirm facts with trusted sources.",
          text: [
            "AI is a good starting point: \"Explain why schools recycle and what usually stops them. Suggest questions I should ask my principal.\" But AI can be wrong or out of date, and it sometimes makes up numbers or sources. This is called a hallucination.",
            "Every fact you plan to use in a message must be checked. Trusted sources include your school or district website, your city's official website, government sites (many end in .gov), and real people like a teacher, librarian or the office in charge.",
            "Your own evidence counts too. Count the overflowing trash cans, take photos of the problem (not of people without permission), or run a short survey of classmates with a teacher's OK."
          ],
          steps: ["Ask AI to explain the issue and suggest questions.", "Write down any facts you want to use.", "Check each fact on an official site or with a real person.", "Collect your own evidence: counts, photos of places, a short survey.", "Throw out any fact you cannot confirm."],
          words: [["Hallucination", "when AI writes something that sounds true but is made up."], ["Evidence", "facts or proof that support what you say."], ["Survey", "a short set of questions you ask many people."]],
          slides: [
            { title: "AI is a starting point", bullets: ["Explains the issue", "Suggests questions to ask", "Can be wrong or make things up"] },
            { title: "Check every fact", bullets: ["School or city website", "Government sites, often .gov", "Teachers, librarians, the office in charge"] },
            { title: "Your own evidence", bullets: ["Counts and photos of places", "A short survey, with a teacher's OK", "No photos of people without permission"] }
          ],
          tryIt: "Ask an AI assistant to explain your issue and give you three facts. Check each fact with a trusted source and mark it \"confirmed\" or \"not confirmed\". Then gather one piece of your own evidence.",
          youCanNow: "research an issue with AI and keep only the facts you confirmed with trusted sources.",
          quickCheck: [
            { objective: "O2", q: "Which is a trusted source for a school district rule?", options: ["A random social media post", "An AI answer with no source", "A friend's guess", "Your school or district website"], answer: 3, why: "Official school, district, city and government sites are trusted sources." },
            { objective: "O2", q: "You want photos to show the litter problem. What do you photograph?", options: ["Strangers dropping trash", "The littered places, not people without permission", "Your classmates' faces", "Your own home address"], answer: 1, why: "Photos of the problem are good evidence; do not photograph people without permission." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Planning one small action",
          minutes: 5,
          goal: "Turn your issue into one small action with a date, helpers and an adult supporter.",
          text: [
            "Good actions are specific: a cleanup day, a recycling-bin proposal to the principal, a supply drive, a speech at a student council meeting. Pick one you can do in the next few weeks.",
            "Ask AI: \"Help me plan a one-hour park cleanup for 10 students. List supplies, safety rules, who to ask for permission and a simple timeline.\" Then check the plan with an adult.",
            "Safety first: get permission from your school or the park's owner, have a parent, guardian or teacher involved, never go alone, and follow any rules about gloves, roads or trash."
          ],
          steps: ["Choose one specific action.", "Ask AI for a checklist: supplies, steps, timeline, permissions.", "Pick a date and helpers.", "Ask a parent, guardian, teacher or advisor to support you.", "Get any permission you need before you start."],
          words: [["Action plan", "a list of what you will do, when, and who helps."], ["Supporter", "an adult who helps and checks your plan."]],
          slides: [
            { title: "One specific action", bullets: ["A cleanup, a proposal, a drive or a speech", "Doable in the next few weeks"] },
            { title: "Plan with AI", bullets: ["Supplies and steps", "Timeline", "Who to ask for permission"] },
            { title: "Safety first", bullets: ["Get permission", "An adult involved", "Never alone; follow the rules"] }
          ],
          tryIt: "Use an AI assistant to plan one small action for your issue. Write down the date, two helpers, the permission you need, and the adult who will support you.",
          youCanNow: "turn an issue into a safe, specific action plan with adult support.",
          quickCheck: [
            { objective: "O3", q: "What makes an action specific?", options: ["It has a clear what, a date and who is helping", "It is very big", "It has no deadline", "It is only an idea"], answer: 0, why: "Specific actions say what you will do, when and with whom." },
            { objective: "O3", q: "You plan a cleanup in a city park. What do you do before the day?", options: ["Just show up", "Go alone early", "Get permission from the park's owner and have an adult involved", "Post your home address for helpers"], answer: 2, why: "Safety first: get permission, involve an adult and never go alone." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: From caring to a plan",
        questions: [
          { objective: "O1", q: "Which issue is the best place to start?", options: ["Ending all world hunger by Friday", "Getting recycling bins in your school cafeteria", "Changing every law", "Fixing the whole internet"], answer: 1, why: "Small, local issues are easier to change and teach you how." },
          { objective: "O1", q: "What is a decision-maker?", options: ["A person or group with power to make the change", "Any social media user", "An AI assistant", "A classmate who agrees with you"], answer: 0, why: "Decision-makers, like a principal or council, can make the change." },
          { objective: "O2", q: "AI gives you a statistic for your letter. What do you do?", options: ["Use it right away", "Make it bigger", "Check it with a trusted source before using it", "Ask AI if it is sure and then use it"], answer: 2, why: "AI can make up numbers; confirm with trusted sources." },
          { objective: "O2", q: "Which is your own evidence?", options: ["A rumor", "A guess", "A made-up story", "A count of overflowing trash cans"], answer: 3, why: "Counts and photos of places are evidence you gather yourself." },
          { objective: "O3", q: "Before a park cleanup, what must you do?", options: ["Go alone at night", "Get permission and involve an adult", "Skip safety rules", "Post your address online"], answer: 1, why: "Permission and adult support keep the action safe." }
        ]
      }
    },
    {
      name: "Chapter 2: Speaking up and spreading the word",
      lessons: [
        {
          objectives: ["O4"],
          title: "Writing a respectful message to a decision-maker",
          minutes: 5,
          goal: "Use AI to draft a clear, respectful letter or email, then make it yours.",
          text: [
            "A strong message is short and polite: who you are (first name, grade, school or neighborhood), the problem in one sentence, one or two checked facts, a specific ask, and a thank you.",
            "Ask AI: \"Help me write a short, respectful email to my principal asking for recycling bins in the cafeteria. I am a 10th grader. Here are my facts: [your checked facts]. Keep it under 150 words.\" Then rewrite it in your own words and remove anything you did not check.",
            "To find who to contact, look at your school or district website, or your city's official website. USA.gov has a page that links to federal, state and local elected officials. Have a parent, guardian or teacher read your message before you send it."
          ],
          steps: ["Say who you are without private details beyond first name and grade.", "State the problem in one sentence.", "Add one or two checked facts.", "Make a specific ask and say thank you.", "Rewrite the AI draft in your own words and have an adult read it before sending."],
          words: [["Specific ask", "the exact thing you want the person to do."], ["Elected official", "a person voted into a job, like a city council member."]],
          slides: [
            { title: "A strong message", bullets: ["Who you are", "The problem in one sentence", "One or two checked facts", "A specific ask and thank you"] },
            { title: "AI drafts, you decide", bullets: ["Give it only checked facts", "Rewrite in your own words", "Keep it under 150 words"] },
            { title: "Who to contact", bullets: ["School or district website", "City's official website", "USA.gov elected officials page"] }
          ],
          sources: [{ name: "USA.gov: Find your elected officials", url: "https://www.usa.gov/elected-officials" }],
          tryIt: "Use an AI assistant to draft a message to the decision-maker for your issue, using only your confirmed facts. Rewrite it in your own words and ask an adult to read it. Do not send it until they have.",
          youCanNow: "write a short, respectful, fact-checked message that asks a decision-maker for a specific change.",
          quickCheck: [
            { objective: "O4", q: "What is a \"specific ask\" in a message?", options: ["A long list of complaints", "A clear request, like adding recycling bins in the cafeteria", "A question about the weather", "Your phone number"], answer: 1, why: "A specific ask tells the decision-maker exactly what you want them to do." },
            { objective: "O4", q: "AI's draft includes a number you never checked. What do you do?", options: ["Leave it in; it sounds good", "Round it up", "Bold it", "Remove it or check it before sending"], answer: 3, why: "Rewrite the draft and remove anything you did not check." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Spreading the word safely",
          minutes: 5,
          goal: "Make a simple poster or post about your action and share it safely.",
          text: [
            "People join when the message is clear: what, when, where and why it matters. AI can help you write a short slogan or post, and free tools like Canva can help you make a poster. Check every date, time and place.",
            "Stay safe online: post from a school club or family-approved account if you can, keep your full name, phone number and home address private, and do not share photos of other people without permission.",
            "Some people will disagree. That is OK. Answer politely or not at all, and never post personal attacks. If someone threatens or harasses you, do not reply; save it, block, report and tell a trusted adult."
          ],
          steps: ["Write what, when, where and why in a few words.", "Ask AI for three slogan ideas and pick or rewrite one.", "Make a poster or post and check every detail.", "Share from a club or family-approved account.", "Keep private details out and tell an adult about any threats."],
          words: [["Slogan", "a short, catchy phrase about your cause."], ["Harassment", "repeated mean or threatening messages."]],
          slides: [
            { title: "A clear message", bullets: ["What, when, where, why", "Short slogan", "Check every detail"] },
            { title: "Share safely", bullets: ["Club or family-approved account", "No phone number or home address", "No photos of others without permission"] },
            { title: "When people disagree", bullets: ["Stay polite or do not reply", "No personal attacks", "Threats: save, block, report, tell an adult"] }
          ],
          tryIt: "Ask an AI assistant for three slogan ideas for your action. Pick one, make a simple poster or post with what, when, where and why, and have an adult check it before sharing.",
          youCanNow: "make a clear message about your cause and share it safely and respectfully.",
          quickCheck: [
            { objective: "O5", q: "What four things should a poster for your action tell people?", options: ["What, when, where and why", "Your full name, phone, address and school", "Only a slogan", "Who to blame"], answer: 0, why: "A clear message says what, when, where and why it matters." },
            { objective: "O5", q: "Someone posts a mean comment calling you names. What do you do?", options: ["Insult them back", "Post their personal details", "Reply politely or not at all, and tell an adult if it becomes a threat", "Delete your whole campaign"], answer: 2, why: "Never post personal attacks; save, block, report and tell an adult about threats." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Responsible AI in activism, and your action plan",
          minutes: 6,
          goal: "Avoid misleading content and finish a one-page action plan.",
          text: [
            "AI makes it easy to create fake images, fake quotes and fake news. Using them, even for a good cause, breaks trust and can spread lies. Never make fake photos or quotes of real people, and label any AI-generated image you use.",
            "Before you share anything, ask: Is it true? Did I check it? Is it fair to the people involved? Would I be OK if the person I am writing about read it?",
            "Now put it together on one page: the problem, two checked facts, one action with a date and helpers, your adult supporter, your message to a decision-maker, and how you will share it. Then reflect: what worked, and what would you do next?"
          ],
          steps: ["Check every image and quote is real or clearly labeled as AI.", "Ask: is it true, checked and fair?", "Write your one-page action plan.", "Attach your message and sharing plan.", "After your action, write what worked and what is next."],
          words: [["Misinformation", "false information, shared by mistake or on purpose."], ["Label", "a note that says something was made with AI."]],
          slides: [
            { title: "No fakes", bullets: ["No fake photos or quotes of real people", "Label AI-generated images", "Fakes break trust, even for good causes"] },
            { title: "Before you share", bullets: ["Is it true?", "Did I check it?", "Is it fair?"] },
            { title: "Your one-page plan", bullets: ["Problem and two checked facts", "One action, date, helpers, adult", "Message and sharing plan"] }
          ],
          tryIt: "Final task: write your one-page action plan with the problem, two checked facts, one action with a date and helpers, your adult supporter, your rewritten message to a decision-maker, and your plan to share it safely.",
          youCanNow: "use AI responsibly to plan, speak up and share a small action that makes a real difference.",
          quickCheck: [
            { objective: "O6", q: "What is misinformation?", options: ["A checked fact", "A label on an AI image", "A poster design", "False information shared by mistake or on purpose"], answer: 3, why: "Misinformation is false information, and AI makes it easy to create." },
            { objective: "O6", q: "A made-up quote from a local leader would help your cause go viral. What do you do?", options: ["Use it once", "Do not use it; fake quotes break trust and spread lies", "Use it but blur the name", "Ask AI to make it sound real"], answer: 1, why: "Fake quotes or photos of real people break trust, even for a good cause." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Speaking up and spreading the word",
        questions: [
          { objective: "O4", q: "Which belongs in a message to a decision-maker?", options: ["A specific ask and a thank you", "Personal insults", "Facts you did not check", "Your home address and phone number"], answer: 0, why: "A clear ask and politeness make a strong message." },
          { objective: "O4", q: "Where can you find links to your elected officials?", options: ["A random social media post", "An AI guess", "USA.gov's elected officials page", "A chain email"], answer: 2, why: "USA.gov links to federal, state and local officials." },
          { objective: "O5", q: "Someone posts a threat on your campaign post. What do you do?", options: ["Reply with a threat", "Share their address", "Ignore it and tell no one", "Save it, block, report and tell a trusted adult"], answer: 3, why: "Threats should be saved, blocked, reported and told to an adult." },
          { objective: "O6", q: "A friend suggests a fake AI photo of the mayor to get attention. You:", options: ["Say no; fakes spread lies and break trust", "Make it but do not label it", "Make it for a good cause", "Post it and delete it later"], answer: 0, why: "Fake images of real people are misleading, even for good causes." },
          { objective: "O6", q: "What should you ask before sharing anything about your cause?", options: ["Will it go viral?", "Is it true, checked and fair?", "Is it the longest post?", "Did AI write all of it?"], answer: 1, why: "Truth, checking and fairness keep your campaign trustworthy." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: AI for Activism and Social Impact",
    questions: [
      { objective: "O1", q: "Social impact means:", options: ["Making things better for other people", "Getting likes", "Winning arguments", "Using AI a lot"], answer: 0, why: "Social impact is improving life for others." },
      { objective: "O1", q: "Why start with a small, local issue?", options: ["It does not matter", "It is easier to change and teaches you how change happens", "Big issues are illegal", "Adults require it"], answer: 1, why: "Small wins build skills and confidence." },
      { objective: "O1", q: "Which is a clear one-sentence problem?", options: ["\"Things are bad\"", "\"Everything should change\"", "\"Our cafeteria has no recycling bins, so cans go in the trash\"", "\"People are annoying\""], answer: 2, why: "It says what the problem is and why it matters." },
      { objective: "O1", q: "Who could fix a problem with school water fountains?", options: ["A video game company", "An AI assistant", "A random follower", "The principal or school district"], answer: 3, why: "School leaders can make school repairs." },
      { objective: "O2", q: "A hallucination in AI means:", options: ["AI wrote something that sounds true but is made up", "AI is broken", "AI is very creative", "AI is slow"], answer: 0, why: "AI can invent facts and sources." },
      { objective: "O2", q: "Which is a trusted source for a city rule?", options: ["A meme", "The city's official website", "An anonymous comment", "An AI answer alone"], answer: 1, why: "Official sites are the place to confirm rules." },
      { objective: "O2", q: "You cannot confirm a fact AI gave you. You should:", options: ["Use it anyway", "Make it sound more certain", "Leave it out", "Credit the AI"], answer: 2, why: "Only use facts you have confirmed." },
      { objective: "O2", q: "Before running a short survey of classmates, you should:", options: ["Ask for their home addresses", "Do it secretly", "Ask for passwords", "Get a teacher's OK"], answer: 3, why: "School surveys should be approved by a teacher." },
      { objective: "O3", q: "Which action is specific?", options: ["A one-hour park cleanup on Saturday the 14th with 10 students", "\"Do something someday\"", "\"Fix the environment\"", "\"Be nicer\""], answer: 0, why: "It has what, when and who." },
      { objective: "O3", q: "What should you ask AI when planning an action?", options: ["To do it for you", "For supplies, steps, a timeline and who to ask for permission", "For people's private information", "To make fake evidence"], answer: 1, why: "AI can make a useful checklist that you then check with an adult." },
      { objective: "O3", q: "Which is a safety rule for a community action?", options: ["Go alone", "Skip permission", "Involve a parent, guardian or teacher", "Work near traffic without a plan"], answer: 2, why: "Adult support and permission keep everyone safe." },
      { objective: "O4", q: "Which belongs in your message to a principal?", options: ["Your phone number for strangers", "Insults", "Unchecked rumors", "Your first name, grade and a specific ask"], answer: 3, why: "Say who you are simply and ask clearly." },
      { objective: "O4", q: "After AI drafts your letter, you should:", options: ["Rewrite it in your own words and remove unchecked facts", "Send it right away", "Make it longer", "Add a fake quote"], answer: 0, why: "Your message should be yours and accurate." },
      { objective: "O4", q: "Who should read your message before you send it?", options: ["Nobody", "A parent, guardian or teacher", "A stranger online", "Only the AI"], answer: 1, why: "An adult can catch mistakes and keep you safe." },
      { objective: "O5", q: "A strong poster tells people:", options: ["Your home address", "Only a slogan", "What, when, where and why", "A long essay"], answer: 2, why: "Those details help people join." },
      { objective: "O5", q: "Which account is best for sharing your campaign?", options: ["A stranger's account", "An account with your phone number in the bio", "A fake account", "A school club or family-approved account"], answer: 3, why: "Approved accounts keep you safer." },
      { objective: "O5", q: "Someone disagrees politely with your post. You:", options: ["Reply politely or not at all", "Insult them", "Share their personal details", "Make a fake post about them"], answer: 0, why: "Respect keeps your cause strong." },
      { objective: "O6", q: "Misinformation is:", options: ["A kind of poster", "False information, shared by mistake or on purpose", "A checked fact", "A survey"], answer: 1, why: "Misinformation is false information." },
      { objective: "O6", q: "You use an AI-generated image of a clean park on your poster. You should:", options: ["Say it is a real photo", "Hide it in small print", "Label it as AI-generated", "Remove the date"], answer: 2, why: "Labels keep you honest with your audience." },
      { objective: "O6", q: "After your action, a good final step is to:", options: ["Delete everything", "Never do it again", "Blame others", "Write what worked and what to do next"], answer: 3, why: "Reflecting helps your next action go better." }
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
      10,
      11,
      13,
      14,
      17
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      {
        name: "Clear problem",
        objective: "O1",
        notYet: "The problem is vague or too big to work on.",
        meets: "The problem in one sentence, with who is affected and who could fix it.",
        exceeds: "Also says what better would look like."
      },
      {
        name: "Checked facts",
        objective: "O2",
        notYet: "Facts are unchecked or come only from AI.",
        meets: "Two facts confirmed with trusted sources, and the sources are named.",
        exceeds: "Also includes the learner's own evidence, such as a count or a survey."
      },
      {
        name: "Action and safety",
        objective: "O3",
        notYet: "No date, helpers or adult supporter, or no permission.",
        meets: "One small action with a date, helpers, an adult supporter and the permission needed.",
        exceeds: "Includes a short safety checklist for the day."
      },
      {
        name: "Message to a decision-maker",
        objective: "O4",
        notYet: "The message is rude, vague or uses unchecked facts.",
        meets: "A short, respectful message with the problem, checked facts, a specific ask and a thank you, in the learner's own words.",
        exceeds: "An adult has read it, and it names the right person to contact."
      },
      {
        name: "Safe and honest sharing",
        objective: "O6",
        notYet: "The sharing plan has private details, fake images or unlabeled AI content.",
        meets: "A plan to share from an approved account with no private details, and any AI image labeled.",
        exceeds: "Also says how the learner will respond to disagreement."
      }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Learners who carry out their planned action within 60 days with an adult supporter",
      "Messages sent to a decision-maker and any responses or changes that followed",
      "Learners who join or start a service club, student council project or community group within 90 days"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A phone or a school or library computer with internet",
      "A free AI assistant the learner is allowed to use, and a free design tool such as Canva",
      "Paper or a document for the one-page action plan",
      "An adult supporter: parent, guardian, teacher or advisor",
      "About 60 minutes in total, plus time for the action itself"
    ],
    facilitatorNotes: [
      "Help learners pick issues they can work on safely and locally; steer away from anything that needs them to go alone or confront people.",
      "Approve permissions and an adult supporter before any event or message is sent.",
      "Read every message and poster before it goes out to check facts, tone and privacy.",
      "Discuss how to respond to disagreement and online harassment, and name who learners should tell.",
      "Score the action plan with the rubric and follow up after the action to help learners reflect."
    ]
  }
};
