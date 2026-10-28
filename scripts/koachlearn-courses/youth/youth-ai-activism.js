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
  chapters: [
    {
      name: "Chapter 1: From caring to a plan",
      lessons: [
        {
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
          youCanNow: "choose a local issue and say who it affects and who can change it."
        },
        {
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
          youCanNow: "research an issue with AI and keep only the facts you confirmed with trusted sources."
        },
        {
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
          youCanNow: "turn an issue into a safe, specific action plan with adult support."
        }
      ],
      check: {
        title: "Knowledge Check 1: From caring to a plan",
        questions: [
          { q: "Which issue is the best place to start?", options: ["Ending all world hunger by Friday", "Getting recycling bins in your school cafeteria", "Changing every law", "Fixing the whole internet"], answer: 1, why: "Small, local issues are easier to change and teach you how." },
          { q: "What is a decision-maker?", options: ["A person or group with power to make the change", "Any social media user", "An AI assistant", "A classmate who agrees with you"], answer: 0, why: "Decision-makers, like a principal or council, can make the change." },
          { q: "AI gives you a statistic for your letter. What do you do?", options: ["Use it right away", "Make it bigger", "Check it with a trusted source before using it", "Ask AI if it is sure and then use it"], answer: 2, why: "AI can make up numbers; confirm with trusted sources." },
          { q: "Which is your own evidence?", options: ["A rumor", "A guess", "A made-up story", "A count of overflowing trash cans"], answer: 3, why: "Counts and photos of places are evidence you gather yourself." },
          { q: "Before a park cleanup, what must you do?", options: ["Go alone at night", "Get permission and involve an adult", "Skip safety rules", "Post your address online"], answer: 1, why: "Permission and adult support keep the action safe." }
        ]
      }
    },
    {
      name: "Chapter 2: Speaking up and spreading the word",
      lessons: [
        {
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
          youCanNow: "write a short, respectful, fact-checked message that asks a decision-maker for a specific change."
        },
        {
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
          youCanNow: "make a clear message about your cause and share it safely and respectfully."
        },
        {
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
          youCanNow: "use AI responsibly to plan, speak up and share a small action that makes a real difference."
        }
      ],
      check: {
        title: "Knowledge Check 2: Speaking up and spreading the word",
        questions: [
          { q: "Which belongs in a message to a decision-maker?", options: ["A specific ask and a thank you", "Personal insults", "Facts you did not check", "Your home address and phone number"], answer: 0, why: "A clear ask and politeness make a strong message." },
          { q: "Where can you find links to your elected officials?", options: ["A random social media post", "An AI guess", "USA.gov's elected officials page", "A chain email"], answer: 2, why: "USA.gov links to federal, state and local officials." },
          { q: "Someone posts a threat on your campaign post. What do you do?", options: ["Reply with a threat", "Share their address", "Ignore it and tell no one", "Save it, block, report and tell a trusted adult"], answer: 3, why: "Threats should be saved, blocked, reported and told to an adult." },
          { q: "A friend suggests a fake AI photo of the mayor to get attention. You:", options: ["Say no; fakes spread lies and break trust", "Make it but do not label it", "Make it for a good cause", "Post it and delete it later"], answer: 0, why: "Fake images of real people are misleading, even for good causes." },
          { q: "What should you ask before sharing anything about your cause?", options: ["Will it go viral?", "Is it true, checked and fair?", "Is it the longest post?", "Did AI write all of it?"], answer: 1, why: "Truth, checking and fairness keep your campaign trustworthy." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: AI for Activism and Social Impact",
    questions: [
      { q: "Social impact means:", options: ["Making things better for other people", "Getting likes", "Winning arguments", "Using AI a lot"], answer: 0, why: "Social impact is improving life for others." },
      { q: "Why start with a small, local issue?", options: ["It does not matter", "It is easier to change and teaches you how change happens", "Big issues are illegal", "Adults require it"], answer: 1, why: "Small wins build skills and confidence." },
      { q: "Which is a clear one-sentence problem?", options: ["\"Things are bad\"", "\"Everything should change\"", "\"Our cafeteria has no recycling bins, so cans go in the trash\"", "\"People are annoying\""], answer: 2, why: "It says what the problem is and why it matters." },
      { q: "Who could fix a problem with school water fountains?", options: ["A video game company", "An AI assistant", "A random follower", "The principal or school district"], answer: 3, why: "School leaders can make school repairs." },
      { q: "A hallucination in AI means:", options: ["AI wrote something that sounds true but is made up", "AI is broken", "AI is very creative", "AI is slow"], answer: 0, why: "AI can invent facts and sources." },
      { q: "Which is a trusted source for a city rule?", options: ["A meme", "The city's official website", "An anonymous comment", "An AI answer alone"], answer: 1, why: "Official sites are the place to confirm rules." },
      { q: "You cannot confirm a fact AI gave you. You should:", options: ["Use it anyway", "Make it sound more certain", "Leave it out", "Credit the AI"], answer: 2, why: "Only use facts you have confirmed." },
      { q: "Before running a short survey of classmates, you should:", options: ["Ask for their home addresses", "Do it secretly", "Ask for passwords", "Get a teacher's OK"], answer: 3, why: "School surveys should be approved by a teacher." },
      { q: "Which action is specific?", options: ["A one-hour park cleanup on Saturday the 14th with 10 students", "\"Do something someday\"", "\"Fix the environment\"", "\"Be nicer\""], answer: 0, why: "It has what, when and who." },
      { q: "What should you ask AI when planning an action?", options: ["To do it for you", "For supplies, steps, a timeline and who to ask for permission", "For people's private information", "To make fake evidence"], answer: 1, why: "AI can make a useful checklist that you then check with an adult." },
      { q: "Which is a safety rule for a community action?", options: ["Go alone", "Skip permission", "Involve a parent, guardian or teacher", "Work near traffic without a plan"], answer: 2, why: "Adult support and permission keep everyone safe." },
      { q: "Which belongs in your message to a principal?", options: ["Your phone number for strangers", "Insults", "Unchecked rumors", "Your first name, grade and a specific ask"], answer: 3, why: "Say who you are simply and ask clearly." },
      { q: "After AI drafts your letter, you should:", options: ["Rewrite it in your own words and remove unchecked facts", "Send it right away", "Make it longer", "Add a fake quote"], answer: 0, why: "Your message should be yours and accurate." },
      { q: "Who should read your message before you send it?", options: ["Nobody", "A parent, guardian or teacher", "A stranger online", "Only the AI"], answer: 1, why: "An adult can catch mistakes and keep you safe." },
      { q: "A strong poster tells people:", options: ["Your home address", "Only a slogan", "What, when, where and why", "A long essay"], answer: 2, why: "Those details help people join." },
      { q: "Which account is best for sharing your campaign?", options: ["A stranger's account", "An account with your phone number in the bio", "A fake account", "A school club or family-approved account"], answer: 3, why: "Approved accounts keep you safer." },
      { q: "Someone disagrees politely with your post. You:", options: ["Reply politely or not at all", "Insult them", "Share their personal details", "Make a fake post about them"], answer: 0, why: "Respect keeps your cause strong." },
      { q: "Misinformation is:", options: ["A kind of poster", "False information, shared by mistake or on purpose", "A checked fact", "A survey"], answer: 1, why: "Misinformation is false information." },
      { q: "You use an AI-generated image of a clean park on your poster. You should:", options: ["Say it is a real photo", "Hide it in small print", "Label it as AI-generated", "Remove the date"], answer: 2, why: "Labels keep you honest with your audience." },
      { q: "After your action, a good final step is to:", options: ["Delete everything", "Never do it again", "Blame others", "Write what worked and what to do next"], answer: 3, why: "Reflecting helps your next action go better." }
    ]
  }
};
