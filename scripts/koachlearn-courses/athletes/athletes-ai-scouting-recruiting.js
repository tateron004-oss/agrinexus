"use strict";

// Koach Learn course: Athletes -> "AI Scouting and Recruiting" (bonus). Skill-building course: by the end the student can DO the skill in `outcome`.
// Recruiting contact rules and calendars differ by sport and division and change often: the course gives no dates and sends students to ncaa.org, the NCAA Eligibility Center and their coaches.
// Shape: scripts/koachlearn-courses/README.md. Model: re-entry/reentry-ai-digital-confidence.js.

module.exports = {
  id: "athletes-ai-scouting-recruiting",
  category: "Athletes",
  name: "AI Scouting and Recruiting",
  skills: "Building a target school list in a spreadsheet, Making a recruiting profile and highlight video, Writing personal emails to college coaches with AI, Knowing where to check eligibility and recruiting rules, Organizing fair scouting notes (for coaches)",
  outcome: "run an organized recruiting plan: a target list of 15 schools in a spreadsheet, a one-page recruiting profile and a two-to-four-minute highlight video, and personal emails to three college coaches drafted with AI, while checking the official eligibility and recruiting rules for your sport.",
  about: [
    "This course is for high school and junior college athletes who want to play in college, their parents, and coaches who help them. A short section also helps coaches organize scouting notes fairly.",
    "Recruiting is a process you can manage like a project. You will research schools, show your ability and character clearly, contact coaches professionally, and track everything in one place, using AI to save time but never to fake anything.",
    "Recruiting and eligibility rules depend on your sport, division (NCAA Division I, II, III, NAIA, junior college) and they change often. This course shows you where to check; always confirm with your high school coach, counselor, and the official sites."
  ],
  finalTask: "Build your recruiting plan: a spreadsheet with 15 target schools (reach, target and likely), a one-page recruiting profile, a two-to-four-minute highlight video with your best clips first, and personal emails to three coaches drafted with AI and edited by you. Add a note of which eligibility account you need and where you checked recruiting rules for your sport.",
  chapters: [
    {
      name: "Chapter 1: Getting ready to be recruited",
      lessons: [
        {
          title: "Rules first: eligibility and recruiting basics",
          minutes: 5,
          goal: "Find the eligibility account and recruiting rules that apply to you.",
          text: [
            "College sports have different organizations: NCAA Divisions I, II and III, the NAIA, and junior colleges. Each has its own academic and eligibility rules.",
            "If you plan to play NCAA Division I or II, you will need an account with the NCAA Eligibility Center, which checks your academics and amateur status. The Eligibility Center site describes a Profile Page for younger students and Division III, and certification accounts for Division I and II. The NAIA has its own eligibility center; check its official site.",
            "When college coaches may contact you, and how, depends on your sport and division and changes often. Do not rely on AI or old articles for dates; check ncaa.org, ask your high school coach and counselor, and keep your grades and core courses on track."
          ],
          steps: ["Decide which levels you are aiming for.", "Visit the NCAA Eligibility Center and read which account fits you.", "Check the NAIA's own eligibility site if relevant.", "Ask your counselor about core courses and grades.", "Check recruiting contact rules for your sport on ncaa.org."],
          words: [["Eligibility", "meeting the academic and other rules needed to play college sports."], ["NCAA Eligibility Center", "the NCAA office where future college athletes register so their academics and amateur status can be checked."], ["Division", "a level of college sports, like NCAA Division I, II or III."]],
          slides: [
            { title: "Levels of college sports", bullets: ["NCAA Divisions I, II, III", "NAIA", "Junior colleges"] },
            { title: "Eligibility accounts", bullets: ["NCAA DI and DII: certification account", "Younger students and DIII: Profile Page", "NAIA: its own eligibility center"] },
            { title: "Contact rules change", bullets: ["Depend on sport and division", "Check ncaa.org, not AI", "Ask your coach and counselor"] }
          ],
          sources: [
            { name: "NCAA Eligibility Center", url: "https://web3.ncaa.org/ecwr3/" },
            { name: "NCAA: Name, Image and Likeness (rules for recruits and athletes)", url: "https://www.ncaa.org/student-athletes/name-image-likeness/" }
          ],
          tryIt: "Visit the NCAA Eligibility Center site and write which account type fits you. Then write one question about recruiting rules for your sport to ask your high school coach or counselor.",
          youCanNow: "find the eligibility account and official rules that apply to you."
        },
        {
          title: "Building your target school list",
          minutes: 6,
          goal: "Build a spreadsheet of 15 schools that fit you athletically, academically and personally.",
          text: [
            "The right school is one where you can play, study what you want, afford it and be happy if sport ends. Aim for a mix: reach schools (a stretch), target schools (a good match) and likely schools (where you'd clearly contribute).",
            "Make a Google Sheet with columns: School, Division, Location, Major you want, Roster need at your position, Academic fit, Cost notes, Coach name and email, Status. Get coach names and roster details from each school's official athletics website.",
            "An AI assistant can suggest schools to research: \"I'm a 5'9\" soccer midfielder with a 3.5 GPA who wants to study nursing in the Southeast. Suggest 20 colleges with soccer programs at different levels to research.\" Then check each one yourself; AI lists can be out of date or wrong."
          ],
          steps: ["Create the sheet with the columns above.", "Ask AI for schools to research.", "Check each school's official athletics and academic pages.", "Mark each as reach, target or likely.", "Keep 15 that truly fit."],
          words: [["Target list", "the schools you plan to contact."], ["Roster", "the list of players on a team; shows who is graduating at your position."]],
          slides: [
            { title: "Right school", bullets: ["Can you play?", "Can you study what you want?", "Can you afford it? Happy without sport?"] },
            { title: "Sheet columns", bullets: ["School, Division, Location, Major", "Roster need, Academic fit, Cost notes", "Coach contact, Status"] },
            { title: "AI suggests, you verify", bullets: ["Ask for schools to research", "Check official pages", "Reach, target, likely"] }
          ],
          tryIt: "Create your target list sheet. Use AI for ideas, verify ten schools on their official sites, and mark each as reach, target or likely.",
          youCanNow: "build and verify a balanced target school list."
        },
        {
          title: "Your recruiting profile and highlight video",
          minutes: 6,
          goal: "Make a one-page recruiting profile and plan a two-to-four-minute highlight video.",
          text: [
            "A recruiting profile is one page: name, grad year, position, height and weight (honest), high school and club team, key stats, academic info (GPA, test scores if you have them, intended major), awards, your coaches' contact info, your highlight link, and your contact email.",
            "A highlight video should be short, often two to four minutes, with your best clips in the first 30 seconds. Identify yourself before each clip with an arrow or circle. Add a full-game clip link if coaches in your sport like to see one. Ask your coach what coaches in your sport expect.",
            "AI can help you write the profile from your notes and order your clips list. Every stat must be true and verifiable; coaches check with your coaches. Keep private details like home address off the profile."
          ],
          steps: ["Gather your true stats, grades and awards.", "Ask AI to format a one-page profile.", "Pick your best clips and put the top ones first.", "Mark yourself before each clip.", "Ask your coach to review both."],
          words: [["Recruiting profile", "a one-page summary of you as an athlete and student for college coaches."], ["Highlight video", "a short video of your best plays."]],
          slides: [
            { title: "One-page profile", bullets: ["Grad year, position, honest size", "Stats, GPA, intended major", "Coach contacts, highlight link, your email"] },
            { title: "Highlight video", bullets: ["Often 2-4 minutes", "Best clips in the first 30 seconds", "Mark yourself before each clip"] },
            { title: "Honest and safe", bullets: ["Coaches verify stats", "No home address", "Coach reviews it"] }
          ],
          tryIt: "Use AI to turn your notes into a one-page profile. Write your clip list with the best five first, and ask your coach to review both.",
          youCanNow: "create an honest recruiting profile and a strong highlight video plan."
        }
      ],
      check: {
        title: "Knowledge Check 1: Getting ready to be recruited",
        questions: [
          { q: "You plan to play NCAA Division I. Where do you register for eligibility?", options: ["A social media app", "Your gym", "The NCAA Eligibility Center", "Nowhere"], answer: 2, why: "DI and DII athletes need an Eligibility Center certification account." },
          { q: "Where should you check when coaches can contact you?", options: ["ncaa.org and your high school coach or counselor", "An AI chatbot only", "A 5-year-old article", "A rival"], answer: 0, why: "Rules depend on sport and division and change often." },
          { q: "A balanced target list includes:", options: ["Only the top 5 programs", "Only one school", "Schools you haven't checked", "Reach, target and likely schools"], answer: 3, why: "A mix gives you real options." },
          { q: "AI suggests a school with a program that was cut. What went wrong?", options: ["Nothing", "AI lists can be out of date; verify on official pages", "The school is hiding it", "You should apply anyway"], answer: 1, why: "Always check official sites." },
          { q: "Where should your best clips go in a highlight video?", options: ["At the very end", "In the first 30 seconds", "In the middle", "Hidden"], answer: 1, why: "Coaches decide fast." }
        ]
      }
    },
    {
      name: "Chapter 2: Contacting coaches and staying organized",
      lessons: [
        {
          title: "Writing personal emails to coaches with AI",
          minutes: 6,
          goal: "Write a short, personal introduction email to a college coach.",
          text: [
            "Coaches get many emails. Short and personal wins. Include: subject line with grad year, position and key info (\"2027 Midfielder | 3.5 GPA | Metro FC Club Team\"); why you're interested in their school specifically; your key stats and academics; your highlight link and profile; your upcoming schedule (tournaments, showcases); and your coach's contact.",
            "Ask an AI assistant: \"Write a short email to the head soccer coach at [school]. Use my profile below. Mention that I'm interested in their nursing program and their possession style. Under 150 words.\" Then make it yours and check every detail.",
            "Send from a professional email you check daily. Never send the exact same email to every school; coaches can tell. Send it yourself, not your parents, and follow up politely after a couple of weeks with new information, like a new highlight."
          ],
          steps: ["Write a clear subject line.", "Ask AI for a draft under 150 words using your profile.", "Add one true, specific reason for that school.", "Check every detail and the coach's name.", "Send from your professional email; follow up with new info."],
          words: [["Subject line", "the short title of an email; the first thing a coach sees."], ["Showcase", "an event where athletes play in front of college coaches."]],
          slides: [
            { title: "Short and personal", bullets: ["Subject: grad year, position, key info", "Why this school, specifically", "Stats, academics, highlight link"] },
            { title: "AI drafts, you personalize", bullets: ["Under 150 words", "One true reason for that school", "Check the coach's name"] },
            { title: "Send it right", bullets: ["Professional email, checked daily", "You send it, not your parents", "Follow up with new info"] }
          ],
          tryIt: "Write emails to three coaches on your list with AI help. Make each one personal and have your coach or parent read one before sending.",
          youCanNow: "write a short, personal email to a college coach."
        },
        {
          title: "Tracking your recruiting like a project",
          minutes: 5,
          goal: "Track every contact and next step in your recruiting sheet.",
          text: [
            "Add tracking columns to your target list: Date contacted, Reply (yes/no), What they said, Next step, Next step date. Update it every week.",
            "Watch for signs of real interest: personal replies, questions about your grades, invitations to camps or visits, or a coach watching you play. A generic camp ad is not the same as personal interest.",
            "Recruiting can be stressful. Keep school and training first. Be careful with \"recruiting services\" that guarantee scholarships for a fee; check with your high school coach and counselor before paying anyone."
          ],
          steps: ["Add tracking columns to your sheet.", "Log every email, reply and call.", "Write the next step and its date.", "Update weekly.", "Check any paid recruiting service with your coach first."],
          words: [["Follow-up", "a polite next message with new information."], ["Recruiting service", "a company that charges to help market you to colleges."]],
          slides: [
            { title: "Track everything", bullets: ["Date contacted, reply, what they said", "Next step and date", "Update weekly"] },
            { title: "Real interest", bullets: ["Personal replies", "Questions about grades", "Camp or visit invites"] },
            { title: "Stay balanced", bullets: ["School and training first", "No guaranteed-scholarship fees", "Check with your coach first"] }
          ],
          tryIt: "Add the tracking columns to your sheet and log your three emails with a next step and date for each.",
          youCanNow: "track recruiting contacts and next steps like a project."
        },
        {
          title: "For coaches: fair, organized scouting notes",
          minutes: 5,
          goal: "Organize scouting notes on prospects in a fair, consistent way.",
          text: [
            "Coaches who scout and recommend players can use the same tools. Create a sheet with the same criteria for every player: position skills, athleticism, game sense, coachability, academics and character notes from verified sources.",
            "Use a simple 1-to-5 scale with written descriptions for each number, so ratings mean the same thing across evaluators. AI can summarize your written notes into a short report, but make sure ratings come from what you saw, not AI guesses.",
            "Protect prospects' privacy: many are minors. Keep notes in approved, private places, don't paste personal details into AI tools, follow your organization's recruiting rules, and watch for bias, like judging by size alone or by highlight video quality instead of ability."
          ],
          steps: ["Use the same criteria for every prospect.", "Define each number on a 1-5 scale.", "Write notes from what you saw.", "Use AI to summarize notes, not to rate.", "Keep data private; check for bias."],
          words: [["Rubric", "a scoring guide that describes what each score means."], ["Coachability", "how well a player listens to and uses feedback."]],
          slides: [
            { title: "Same criteria for all", bullets: ["Skills, athleticism, game sense", "Coachability, academics, character"] },
            { title: "Clear 1-5 rubric", bullets: ["Describe each number", "Ratings from what you saw", "AI summarizes, doesn't rate"] },
            { title: "Fair and private", bullets: ["Many prospects are minors", "No personal details in AI", "Watch for bias"] }
          ],
          tryIt: "Final task: athletes, finish your 15-school sheet, profile, highlight plan and three coach emails, plus a note on your eligibility account and where you checked rules. Coaches: build a 1-5 rubric with descriptions for five criteria.",
          youCanNow: "organize recruiting or scouting work clearly, honestly and fairly."
        }
      ],
      check: {
        title: "Knowledge Check 2: Contacting coaches and staying organized",
        questions: [
          { q: "Which subject line is best for a coach email?", options: ["\"Hi\"", "\"Please read!!!\"", "Blank", "\"2027 Midfielder | 3.5 GPA | Metro FC Club Team\""], answer: 3, why: "It gives key info at a glance." },
          { q: "Who should send emails to college coaches?", options: ["The athlete", "Only parents", "A stranger", "An AI bot automatically"], answer: 0, why: "Coaches want to hear from the athlete." },
          { q: "Which is a sign of real interest?", options: ["A mass camp ad", "A like on social media", "A personal reply asking about your grades", "Nothing"], answer: 2, why: "Personal questions show real interest." },
          { q: "A service guarantees a scholarship for a fee. You should:", options: ["Pay right away", "Give your password", "Sign without reading", "Check with your high school coach and counselor first"], answer: 3, why: "No one can guarantee a scholarship." },
          { q: "For coaches, AI should be used to:", options: ["Rate players it hasn't seen", "Summarize written notes, not create ratings", "Store minors' private details", "Replace evaluations"], answer: 1, why: "Ratings come from what the coach saw." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: AI Scouting and Recruiting",
    questions: [
      { q: "Which is a college sports organization?", options: ["The NFL", "A shoe brand", "The NAIA", "A social app"], answer: 2, why: "NAIA is a college athletics association." },
      { q: "The NCAA Eligibility Center checks:", options: ["Academics and amateur status", "Your follower count", "Your height only", "Your music taste"], answer: 0, why: "It certifies eligibility." },
      { q: "Younger students and DIII athletes can start with:", options: ["A Profile Page", "Nothing", "A paid service", "A tryout"], answer: 0, why: "The Eligibility Center describes a Profile Page for them." },
      { q: "Recruiting contact rules depend on:", options: ["Your shoe size", "The weather", "Sport and division", "Your favorite team"], answer: 2, why: "Rules differ by sport and level." },
      { q: "Who helps you keep core courses on track?", options: ["A rival", "Your school counselor", "An influencer", "Nobody"], answer: 1, why: "Counselors know academic requirements." },
      { q: "A \"reach\" school is:", options: ["A sure thing", "Closed", "A junior high", "A stretch for you"], answer: 3, why: "Reach schools are harder to get into or play for." },
      { q: "Where do you find a coach's real email?", options: ["A guess", "An AI", "The school's official athletics website", "A fan page"], answer: 2, why: "Official sites are current." },
      { q: "Why check the roster?", options: ["To copy their bios", "To message players", "It's useless", "To see who is graduating at your position"], answer: 3, why: "Roster needs affect your chances." },
      { q: "Height and weight on your profile should be:", options: ["Honest", "Rounded up a lot", "Left out always", "Guessed"], answer: 0, why: "Coaches verify." },
      { q: "A highlight video is often:", options: ["30 minutes", "2-4 minutes", "5 seconds", "Two hours"], answer: 1, why: "Short and focused works best." },
      { q: "Before each clip, you should:", options: ["Add loud music only", "Show the crowd", "Mark yourself with an arrow or circle", "Skip it"], answer: 2, why: "Coaches need to know which player is you." },
      { q: "Which should NOT be on your profile?", options: ["Your home address", "Your grad year", "Your highlight link", "Your coach's contact"], answer: 0, why: "Keep private details off." },
      { q: "A good coach email is under about:", options: ["1,000 words", "5 words", "No limit", "150 words"], answer: 3, why: "Short emails get read." },
      { q: "Sending the same email to every school:", options: ["Is best", "Coaches can tell; personalize each", "Is required", "Gets more replies"], answer: 1, why: "Personal emails stand out." },
      { q: "A follow-up should include:", options: ["The same email again", "New information, like a new highlight", "A complaint", "Nothing"], answer: 1, why: "New info gives a reason to reply." },
      { q: "A showcase is:", options: ["A trophy case", "A store", "A TV show", "An event where athletes play in front of coaches"], answer: 3, why: "Showcases help coaches see you." },
      { q: "How often should you update your recruiting sheet?", options: ["Weekly", "Once a year", "Never", "Only after signing"], answer: 0, why: "Weekly keeps next steps on time." },
      { q: "What comes first during recruiting?", options: ["Social media", "Paid services", "School and training", "Rumors"], answer: 2, why: "Grades and play matter most." },
      { q: "A rubric is:", options: ["A type of drill", "A shoe", "A trophy", "A scoring guide describing each score"], answer: 3, why: "It keeps ratings consistent." },
      { q: "Judging prospects by video quality instead of ability is:", options: ["Fair", "A form of bias", "Required", "Best practice"], answer: 1, why: "Fair scouting looks at ability." }
    ]
  }
};
