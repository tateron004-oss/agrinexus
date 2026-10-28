"use strict";

// Koach Learn course: Athletes -> "Social Media Branding for Athletes". Skill-building course: by the end the student can DO the skill in `outcome`.
// Shape: scripts/koachlearn-courses/README.md. Model: re-entry/reentry-ai-digital-confidence.js.

module.exports = {
  id: "athletes-social-media-branding",
  category: "Athletes",
  name: "Social Media Branding for Athletes",
  skills: "Defining your athlete brand, Writing a strong bio, Choosing content pillars, Auditing your old posts, Setting privacy and safety settings",
  outcome: "set up or clean up one social media profile as a clear, safe athlete brand: a brand statement, a strong bio and profile photo, three content pillars, an audit of your old posts, and safe privacy settings.",
  about: [
    "This course is for athletes who know coaches, recruiters, brands and future employers look at their social media, and want it to help, not hurt. Coaches can use it to teach their teams.",
    "Your brand is what people think of when they see your name. You will decide what you want that to be, build a profile that shows it, choose what to post about, clean up your old posts, and protect your safety.",
    "Each lesson is about five minutes with a \"Try it now\" task. A knowledge check closes each chapter, and a 20-question quiz closes the course."
  ],
  finalTask: "Brand one social media profile: write your brand statement, update your bio and profile photo, write three content pillars with two post ideas each, audit your last 30 posts and fix anything off-brand, and check your privacy and safety settings.",
  chapters: [
    {
      name: "Chapter 1: Defining your brand",
      lessons: [
        {
          title: "What an athlete brand is",
          minutes: 4,
          goal: "Write a one-sentence brand statement.",
          text: [
            "A brand is the picture people have in their heads when they hear your name. You already have one, whether you planned it or not. Coaches, brands and fans form it from your posts, comments and how you act.",
            "Your brand is more than your sport. It is your sport plus your values plus what makes you you: \"A hard-working point guard who loves teaching younger kids and wants to study nursing.\"",
            "Write a brand statement: \"I am a [sport and position] who [what you value or do] and [something else true about you].\" Use an AI assistant to suggest wording, but pick words that are honest."
          ],
          steps: ["List your sport and position.", "List three values (like hard work, faith, family, leadership).", "List one interest outside sport.", "Write one brand statement sentence."],
          words: [["Brand", "the picture people have in mind when they hear your name."], ["Values", "the things that matter most to you and guide how you act."]],
          slides: [
            { title: "You already have a brand", bullets: ["Built from posts, comments and actions", "Seen by coaches, brands, fans"] },
            { title: "Brand = ", bullets: ["Your sport", "Plus your values", "Plus what makes you you"] },
            { title: "Brand statement", bullets: ["\"I am a [sport/position] who [value]", "and [something true about you].\""] }
          ],
          tryIt: "Write your brand statement. Ask an AI assistant for three other ways to word it, then choose or mix the one that sounds most like you.",
          youCanNow: "describe your athlete brand in one honest sentence."
        },
        {
          title: "Profile photo, name and bio",
          minutes: 5,
          goal: "Write a clear bio and choose a profile photo that match your brand.",
          text: [
            "Your profile is your front door. In a few seconds, people should know who you are, what you play, and why to follow you.",
            "Use a clear, well-lit photo of your face or you in action. Use a name people can find. A strong bio is short: sport and position, level or team (if allowed), one value or interest, and one link or call to action, like your highlight video.",
            "Do not put your home address, phone number, class schedule or exact school location in your bio. If you are a minor, ask a parent or guardian before listing your school or city."
          ],
          steps: ["Choose a clear, well-lit photo.", "Use a findable name.", "Write sport, position and level.", "Add one value or interest.", "Add one link or call to action.", "Remove private details."],
          words: [["Bio", "the short description at the top of your profile."], ["Handle", "your @username on a social app."]],
          slides: [
            { title: "Your front door", bullets: ["Who are you?", "What do you play?", "Why follow you?"] },
            { title: "Strong bio", bullets: ["Sport, position, level", "One value or interest", "One link: highlights or contact"] },
            { title: "Keep out of your bio", bullets: ["Home address or phone", "Class schedule", "Minors: ask a parent about school or city"] }
          ],
          tryIt: "Ask an AI assistant for five bio options using your brand statement, under the platform's character limit. Pick one, edit it, and update your profile.",
          youCanNow: "write a clear bio and choose a profile photo that match your brand."
        },
        {
          title: "Choosing your content pillars",
          minutes: 5,
          goal: "Pick three content pillars and two post ideas for each.",
          text: [
            "Content pillars are the three or four main topics you post about. They keep your feed focused, so people know what to expect.",
            "Athlete pillars might be: Training (workouts, practice clips), Game day (highlights, team moments), Off the field (school, faith, family, hobbies, community service), and Lessons (what you are learning). Pick the ones that match your brand statement.",
            "An AI assistant is good at brainstorming post ideas for each pillar. Ask for ten, then keep the ones you would actually post."
          ],
          steps: ["Read your brand statement.", "Pick three pillars that fit it.", "Ask AI for ten ideas per pillar.", "Keep two you will actually post for each."],
          words: [["Content pillar", "one of the few main topics you regularly post about."], ["Feed", "the stream of posts on your profile."]],
          slides: [
            { title: "Content pillars", bullets: ["3-4 main topics", "Keep your feed focused"] },
            { title: "Athlete pillars", bullets: ["Training", "Game day", "Off the field", "Lessons"] },
            { title: "Use AI to brainstorm", bullets: ["Ask for ten ideas per pillar", "Keep the ones you'd really post"] }
          ],
          tryIt: "Write your three content pillars. Use an AI assistant to brainstorm ideas and keep two real post ideas for each pillar.",
          youCanNow: "choose content pillars that match your brand and plan posts for them."
        }
      ],
      check: {
        title: "Knowledge Check 1: Defining your brand",
        questions: [
          { q: "What is your athlete brand?", options: ["Your jersey number", "Your shoe sponsor", "The picture people have in mind when they hear your name", "Your follower count"], answer: 2, why: "Your brand is how people see you." },
          { q: "Which is a brand statement?", options: ["\"I am a hard-working point guard who loves coaching kids and wants to study nursing.\"", "\"Follow me\"", "\"Best ever\"", "\"No comment\""], answer: 0, why: "It names your sport, values and something true about you." },
          { q: "Which belongs in a strong bio?", options: ["Your home address", "Your class schedule", "Your phone number", "Sport, position and a link to highlights"], answer: 3, why: "A bio shows who you are without private details." },
          { q: "What are content pillars?", options: ["Stadium columns", "The 3-4 main topics you post about", "Hashtags", "Followers"], answer: 1, why: "Pillars keep your feed focused." },
          { q: "AI gives you ten post ideas. What do you do?", options: ["Post all ten today", "Keep the ones you would actually post", "Ignore them all", "Copy another athlete's posts"], answer: 1, why: "Only post what fits you and your brand." }
        ]
      }
    },
    {
      name: "Chapter 2: Protecting your brand",
      lessons: [
        {
          title: "Auditing your old posts",
          minutes: 5,
          goal: "Review your past posts and fix anything that hurts your brand.",
          text: [
            "Coaches, admissions officers, brands and employers often scroll back through old posts. One old joke, mean comment or reposted video can cost an opportunity.",
            "Do an audit: scroll your last 30 posts, comments, reposts and tagged photos. For each, ask: Would I be okay if a coach, a sponsor or my grandparent saw this? Does it fit my brand? If not, archive, hide or delete it, and untag yourself where you can.",
            "Remember that screenshots last forever. The best protection is posting with care from now on: think before you post, especially when angry after a loss."
          ],
          steps: ["Scroll your last 30 posts, comments, reposts and tags.", "Ask the coach, sponsor and grandparent test.", "Archive, hide or delete what fails.", "Untag yourself where needed.", "Make a rule: no posting when angry."],
          words: [["Audit", "a careful check of everything, to find and fix problems."], ["Archive", "hide a post from your profile without deleting it."]],
          slides: [
            { title: "People scroll back", bullets: ["Coaches, admissions, brands, employers", "One old post can cost a chance"] },
            { title: "The audit", bullets: ["Last 30 posts, comments, reposts, tags", "Coach, sponsor and grandparent test", "Archive, hide, delete or untag"] },
            { title: "From now on", bullets: ["Screenshots last forever", "No posting when angry"] }
          ],
          tryIt: "Audit your last 30 posts and tagged photos. Write how many you kept, archived and deleted.",
          youCanNow: "audit your social media and remove posts that hurt your brand."
        },
        {
          title: "Privacy and safety settings",
          minutes: 5,
          goal: "Set your accounts so you control who sees and contacts you.",
          text: [
            "Being public helps you get seen, but it also lets strangers find you. Many athletes keep one public athlete account and one private personal account.",
            "Check your settings on each app: who can message you, who can comment, who can tag you, whether your location is added to posts, and two-step verification to protect your login. Settings menus change, so look for privacy, security and messaging in the app's settings.",
            "Never post your live location, travel plans in real time, home or daily routine. Be careful with direct messages from people you do not know, including fake recruiters and fake brands. If someone threatens you or asks for private photos, do not reply; save proof, block, report, and tell a trusted adult or your coach."
          ],
          steps: ["Decide: public athlete account and private personal account?", "Limit who can message, comment and tag you.", "Turn off location on posts.", "Turn on two-step verification.", "Know how to block and report."],
          words: [["Two-step verification", "a second check, like a code, when you log in, so others cannot get in with just your password."], ["Direct message (DM)", "a private message sent on a social app."]],
          slides: [
            { title: "Public vs private", bullets: ["Public athlete account to be seen", "Private personal account for friends"] },
            { title: "Check these settings", bullets: ["Who can message, comment, tag", "Location on posts: off", "Two-step verification: on"] },
            { title: "Stay safe", bullets: ["No live location or routine", "Careful with stranger DMs", "Threats: save proof, block, report, tell an adult"] }
          ],
          tryIt: "Open the settings on one account. Limit who can message and tag you, turn off location on posts, and turn on two-step verification.",
          youCanNow: "set your accounts so you control who sees and contacts you."
        },
        {
          title: "Staying on-brand: rules, brands and judgment",
          minutes: 5,
          goal: "Write your personal posting rules, including how to handle sponsored posts.",
          text: [
            "Your team, school or league may have social media rules, especially about team news, injuries, recruiting and rivals. Ask your coach for them and follow them.",
            "As your brand grows, brands may offer free products or money to post. The FTC says you must clearly disclose any paid deal or free product right in the post. College athletes may also have NIL reporting rules, and high school rules vary by state. Ask your compliance office or state athletic association before accepting.",
            "Write a short list of your own posting rules: what you post, what you never post, and how you handle negative comments (do not argue; mute, hide or block)."
          ],
          steps: ["Get your team's social media rules from your coach.", "Write three \"I always\" rules.", "Write three \"I never\" rules.", "Write how you handle negative comments.", "Add: \"I disclose any brand deal and check NIL rules first.\""],
          words: [["NIL", "name, image and likeness: an athlete earning money from their name, photo or personal brand."], ["Disclosure", "a clear statement in the post that you were paid or given something."]],
          slides: [
            { title: "Know the rules", bullets: ["Team and school social media rules", "Injuries, recruiting, rivals"] },
            { title: "Brand deals", bullets: ["Disclose paid deals and free products in the post", "Check NIL rules with compliance or your state"] },
            { title: "Your posting rules", bullets: ["Three \"I always\"", "Three \"I never\"", "Negative comments: don't argue; mute, hide or block"] }
          ],
          sources: [
            { name: "FTC: Disclosures 101 for Social Media Influencers", url: "https://www.ftc.gov/business-guidance/resources/disclosures-101-social-media-influencers" },
            { name: "NCAA: Name, Image and Likeness", url: "https://www.ncaa.org/student-athletes/name-image-likeness/" }
          ],
          tryIt: "Final task: write your posting rules, then finish branding one profile: brand statement, bio and photo, three pillars with two ideas each, a 30-post audit and safe settings.",
          youCanNow: "keep your brand on track with clear posting rules and honest handling of brand deals."
        }
      ],
      check: {
        title: "Knowledge Check 2: Protecting your brand",
        questions: [
          { q: "What is the audit test for an old post?", options: ["Did it get 100 likes?", "Is it funny?", "Is it old?", "Would a coach, sponsor or grandparent be okay seeing it?"], answer: 3, why: "If it fails that test, it may hurt your brand." },
          { q: "Which setting protects your login?", options: ["Two-step verification", "A cool font", "More hashtags", "A public location"], answer: 0, why: "Two-step verification blocks people with only your password." },
          { q: "Which should you never post?", options: ["A practice clip", "A thank-you to your coach", "Your live location", "A community service photo"], answer: 2, why: "Live location can put you at risk." },
          { q: "Someone threatens you in a DM. What do you do?", options: ["Argue back", "Send what they ask", "Ignore it and tell no one", "Save proof, block, report and tell a trusted adult"], answer: 3, why: "Protect yourself and get help." },
          { q: "A brand sends you free headphones to post about. What must you do?", options: ["Nothing", "Clearly disclose the free product in the post and check NIL rules", "Hide the brand name", "Delete the post later"], answer: 1, why: "The FTC requires clear disclosure, and NIL rules may apply." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Social Media Branding for Athletes",
    questions: [
      { q: "Who forms your brand?", options: ["Only you", "Only your coach", "People who see your posts, comments and actions", "Nobody"], answer: 2, why: "Your brand lives in other people's minds." },
      { q: "A brand is your sport plus:", options: ["Your values and what makes you you", "Your password", "Your rival", "Your shoe size"], answer: 0, why: "Values and personality make you stand out." },
      { q: "A brand statement should be:", options: ["Honest", "Made up", "Copied", "Very long"], answer: 0, why: "A brand only works if it is true." },
      { q: "Your profile is like:", options: ["Your locker", "A secret", "Your front door", "A scoreboard"], answer: 2, why: "It's the first thing people see." },
      { q: "A good profile photo is:", options: ["Blurry", "Clear and well-lit", "A random meme", "Someone else"], answer: 1, why: "People should recognize you." },
      { q: "Which is NOT good for a bio?", options: ["Your sport", "Your position", "A highlight link", "Your phone number"], answer: 3, why: "Phone numbers are private." },
      { q: "If you are a minor, before listing your school or city you should:", options: ["Post it anyway", "Ask a stranger", "Ask a parent or guardian", "Add your address too"], answer: 2, why: "Parents help you decide what is safe to share." },
      { q: "How many content pillars should you have?", options: ["20", "None", "1 post", "3-4"], answer: 3, why: "A few pillars keep your feed focused." },
      { q: "Which is an off-the-field pillar post?", options: ["Volunteering at a youth clinic", "A game highlight", "A workout clip", "A stat graphic"], answer: 0, why: "It shows who you are beyond sport." },
      { q: "How should you use AI for post ideas?", options: ["Post everything it says", "Brainstorm many, keep the ones that fit you", "Never use it", "Let it run your account"], answer: 1, why: "You choose what fits your brand." },
      { q: "How many recent posts should your audit cover at least?", options: ["1", "0", "30", "Only today's"], answer: 2, why: "Scroll back far enough to see what others see." },
      { q: "Archiving a post means:", options: ["Hiding it from your profile without deleting", "Posting it again", "Making it public", "Selling it"], answer: 0, why: "Archive hides without deleting." },
      { q: "After a tough loss, a good rule is:", options: ["Post right away", "Call out the ref online", "Blame teammates", "No posting when angry"], answer: 3, why: "Angry posts often hurt your brand." },
      { q: "Many athletes keep:", options: ["Ten public accounts", "A public athlete account and a private personal one", "No privacy at all", "Their password in their bio"], answer: 1, why: "It separates being seen from personal life." },
      { q: "Turning off location on posts helps you:", options: ["Get more likes", "Stay safe", "Post faster", "Look older"], answer: 1, why: "Strangers can't track where you are." },
      { q: "A stranger DMs as a recruiter asking for money. This is:", options: ["Normal", "Required", "A scholarship", "A warning sign"], answer: 3, why: "Fake recruiters ask for money." },
      { q: "Where do you find your team's social media rules?", options: ["Ask your coach", "Guess", "A rival", "An ad"], answer: 0, why: "Teams and schools set their own rules." },
      { q: "NIL stands for:", options: ["National Interest League", "No Internet Limits", "Name, image and likeness", "New Influencer Level"], answer: 2, why: "NIL is earning from your name, image and likeness." },
      { q: "A high school athlete is offered an NIL deal. They should first:", options: ["Sign right away", "Hide it", "Ask a fan", "Check their state athletic association and school rules"], answer: 3, why: "High school NIL rules vary by state." },
      { q: "How should you handle negative comments?", options: ["Argue in all caps", "Don't argue; mute, hide or block", "Post their address", "Quit social media forever"], answer: 1, why: "Arguing spreads negativity and hurts your brand." }
    ]
  }
};
