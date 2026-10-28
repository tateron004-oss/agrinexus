"use strict";

// Koach Learn course (Youth): "Staying Safe from Cyberbullying". Asked for by the owner on 28 October 2026 (life skills beyond AI).
// Category: Youth. Shape and rules: ../README.md; model: ../re-entry/reentry-ai-digital-confidence.js.
// Sources: stopbullying.gov is the main US government source, but it refused automated fetches (HTTP 403) on 28 October 2026, so its pages are listed for
// students to check and the steps were confirmed on MedlinePlus (which links to stopbullying.gov), KidsHealth (Nemours) and NCMEC (missingkids.org, takeitdown.ncmec.org).

module.exports = {
  id: "youth-cyberbullying-safety",
  category: "Youth",
  name: "Staying Safe from Cyberbullying",
  skills: "Recognizing cyberbullying, Staying calm and not retaliating, Saving evidence, Blocking and reporting on apps, Telling a trusted adult and the school, Helping someone else as an upstander",
  outcome: "recognize cyberbullying, respond without making it worse, save evidence, block and report the person on the app, tell a trusted adult and the school, know when it is a matter for the police, and help a friend who is being targeted.",
  about: [
    "Cyberbullying is bullying that happens through phones, computers and games: texts, group chats, social media, comments, forums and online games. Because it can follow you home and spread fast, it can feel like there is no escape. There is a lot you can do, and you do not have to handle it alone.",
    "This course is for young people, and for parents, coaches, mentors and youth workers who support them. You will learn what cyberbullying is, how to respond safely, how to save proof, how to block and report, who to tell and how to help someone else.",
    "If you ever feel unsafe or think about hurting yourself, tell a trusted adult right away. In the US you can call or text 988 any time. If someone is in immediate danger, call 911 (or your country's emergency number).",
    "Each lesson takes about five minutes. Read the lesson, watch the slides, then do the \"Try it now\" task. There is a short knowledge check after each chapter and a 20-question quiz at the end."
  ],
  finalTask: "Make your personal cyberbullying safety plan: how to save evidence on your phone (screenshot steps and where you'll keep them), where the block and report buttons are on the two apps you use most, the names of two trusted adults you would tell (and one person at school), what you would say to them, when you would go to the police, and one thing you would do to support a friend who is being targeted.",
  chapters: [
    {
      name: "Chapter 1: Recognizing cyberbullying and responding safely",
      lessons: [
        {
          title: "What cyberbullying is (and is not)",
          minutes: 5,
          goal: "Tell cyberbullying apart from a normal disagreement.",
          text: [
            "Cyberbullying is using technology to hurt, embarrass, threaten or target someone, usually more than once. Examples: mean or threatening messages, spreading rumors, posting embarrassing photos or videos, making fake accounts to mock someone, leaving someone out of a group chat on purpose to hurt them, or sharing private messages or images without permission.",
            "It often happens through texts, social media, comments, direct messages, forums and games. Online posts can be permanent and public unless they are reported and removed, and they can spread to many people quickly.",
            "Not every online argument is bullying. A one-time disagreement between equals is a conflict. Bullying is about hurting someone on purpose, often again and again, and often with a power difference: more people, more popularity, or private information to use against them. Some cyberbullying, like threats or harassment based on race, religion, gender, sexual orientation or disability, can be against the law."
          ],
          steps: ["Ask: is this meant to hurt, embarrass or threaten?", "Ask: is it happening more than once, or spreading?", "Ask: is there a power difference (a group, popularity, private info)?", "If yes, treat it as cyberbullying and use the steps in this course."],
          words: [["Cyberbullying", "using phones, computers or games to hurt, embarrass, threaten or target someone."], ["Harassment", "repeated behavior that upsets, scares or threatens someone."], ["Conflict", "a disagreement between people; not the same as bullying."]],
          slides: [
            { title: "What cyberbullying looks like", bullets: ["Mean or threatening messages, rumors", "Embarrassing photos or videos posted", "Fake accounts, leaving out on purpose", "Sharing private messages or images"] },
            { title: "Where it happens", bullets: ["Texts and group chats", "Social media, comments, DMs", "Forums and online games"] },
            { title: "Bullying or conflict?", bullets: ["Meant to hurt?", "Repeated or spreading?", "Power difference?"] },
            { title: "Some of it is illegal", bullets: ["Threats", "Harassment based on race, religion, gender, sexuality or disability"] }
          ],
          sources: [
            { name: "MedlinePlus: Bullying", url: "https://medlineplus.gov/bullying.html" },
            { name: "StopBullying.gov: What Is Cyberbullying", url: "https://www.stopbullying.gov/cyberbullying/what-is-it" }
          ],
          tryIt: "Read these three situations and label each one bullying or conflict: (1) a friend disagrees with your opinion about a game once; (2) a group keeps posting a fake account mocking a classmate; (3) someone keeps sending you threats after you said stop. Write why for each.",
          youCanNow: "recognize cyberbullying and tell it apart from a normal disagreement."
        },
        {
          title: "Responding without making it worse",
          minutes: 5,
          goal: "Respond to a hurtful message by stepping away instead of fighting back.",
          text: [
            "When someone attacks you online, it is natural to want to hit back. But replying angrily, insulting them back or posting about them usually makes it worse, and it can make you look like part of the problem. KidsHealth advises not responding or retaliating, stepping away and not forwarding the message.",
            "First, step away from the screen. Take a few slow breaths. Remind yourself: this is about their behavior, not your worth, and it is not your fault. Then follow the plan: save evidence, block, report and tell someone. You will learn each step in this course.",
            "Do not forward or share the hurtful post, even to show friends how bad it is; that spreads it further. And do not pretend to be someone else or make fake accounts to get back at them."
          ],
          steps: ["Don't reply or fight back.", "Step away and breathe.", "Remind yourself it's not your fault.", "Don't forward or share the post.", "Next: save evidence, block, report, tell an adult."],
          words: [["Retaliate", "to hurt someone back after they hurt you."], ["Forward", "to send a message or post on to other people."]],
          slides: [
            { title: "Don't fight back", bullets: ["Replying angrily usually makes it worse", "It can make you look like part of the problem"] },
            { title: "Step away", bullets: ["Put the phone down", "Slow breaths", "It is not your fault"] },
            { title: "Don't spread it", bullets: ["Don't forward or share the post", "No fake accounts to get back at them"] },
            { title: "Then follow the plan", bullets: ["Save evidence", "Block and report", "Tell a trusted adult"] }
          ],
          sources: [{ name: "KidsHealth (Nemours): Cyberbullying (for teens)", url: "https://kidshealth.org/en/teens/cyberbullying.html" }],
          tryIt: "Someone comments \"you're a joke, everyone hates you\" under your post. Write what you will NOT do (three things) and what you WILL do in the next five minutes.",
          youCanNow: "stay calm, avoid fighting back or spreading it, and move to a safe plan."
        },
        {
          title: "Saving evidence",
          minutes: 5,
          goal: "Take and store screenshots that prove what happened.",
          text: [
            "Evidence helps adults, schools, apps and police act. Before you block or delete anything, save proof. KidsHealth suggests screenshots or asking a parent to copy or save the messages.",
            "A good screenshot shows: the message or post, the username or account name (and the profile page or link if you can), and the date and time. Save every incident, not just the worst one. Keep a simple log: date, app, what happened, who saw it. Store screenshots in a private folder or send them to a trusted adult.",
            "One important exception: if someone sends or shares a sexual image of a young person, do NOT screenshot, save or forward the image itself; that can be illegal even for you. Save the username, the link and the messages around it, and tell a trusted adult right away. If someone is threatening to share sexual images unless you pay or send more, don't pay or send anything; block them but don't delete the messages, and get help. In the US, report it at report.cybertip.org, and use the free Take It Down service (takeitdown.ncmec.org) to help get images taken when you were under 18 removed."
          ],
          steps: ["Before blocking, take a screenshot of each message or post.", "Make sure it shows the username, the date and the time.", "Save the profile link if you can.", "Write a short log: date, app, what happened.", "Store it privately or send it to a trusted adult."],
          words: [["Evidence", "proof of what happened, like screenshots and saved messages."], ["Screenshot", "a picture of what is on your screen."], ["Sextortion", "threatening to share someone's sexual images unless they pay or send more; it is a crime."]],
          slides: [
            { title: "Save proof first", bullets: ["Before you block or delete", "Evidence helps adults, schools, apps and police act"] },
            { title: "A good screenshot shows", bullets: ["The message or post", "The username or account", "The date and time"] },
            { title: "Keep a log", bullets: ["Date, app, what happened, who saw it", "Store it privately or give it to an adult"] },
            { title: "Sexual images: different rules", bullets: ["Don't screenshot or share the image", "Save username, link and messages; tell an adult", "Report: report.cybertip.org; Take It Down"] }
          ],
          sources: [
            { name: "KidsHealth (Nemours): Cyberbullying (for teens)", url: "https://kidshealth.org/en/teens/cyberbullying.html" },
            { name: "NCMEC: Sextortion", url: "https://www.missingkids.org/theissues/sextortion" },
            { name: "NCMEC: Take It Down", url: "https://takeitdown.ncmec.org/" }
          ],
          tryIt: "Practice taking a screenshot on your phone of any harmless screen (like your weather app). Find where it saved. Make a private folder or album called \"evidence\" and write down the steps so you'll remember them.",
          youCanNow: "take screenshots that prove what happened, keep a log, and handle sexual images safely by telling an adult instead of saving them."
        }
      ],
      check: {
        title: "Knowledge Check 1: Recognizing cyberbullying and responding safely",
        questions: [
          { q: "Which is an example of cyberbullying?", options: ["A friend disagrees with you once about a movie", "A group keeps posting a fake account to mock a classmate", "Someone forgets to reply to a text", "A teacher posts homework online"], answer: 1, why: "It is repeated, meant to hurt, and has a group behind it." },
          { q: "Someone posts a mean comment about you. What is the best first move?", options: ["Insult them back", "Forward it to everyone", "Make a fake account to get back at them", "Don't reply; step away and follow your safety plan"], answer: 3, why: "Fighting back usually makes it worse; stepping away keeps you in control." },
          { q: "When should you save evidence?", options: ["Before you block or delete anything", "Never", "Only after a month", "Only if it happens ten times"], answer: 0, why: "Once you block or delete, the proof may be gone." },
          { q: "What should a good screenshot show?", options: ["Only your own reply", "Your home screen", "The message, the username and the date and time", "Your password"], answer: 2, why: "Those details prove who sent what and when." },
          { q: "Someone sends you a sexual image of a classmate. What should you do?", options: ["Screenshot it and share it as proof", "Forward it to the classmate's friends", "Post it to warn others", "Don't save or share the image; note the username and tell a trusted adult right away"], answer: 3, why: "Saving or sharing such images can be illegal; adults and reporting services can act." }
        ]
      }
    },
    {
      name: "Chapter 2: Taking action and getting support",
      lessons: [
        {
          title: "Blocking and reporting on apps",
          minutes: 5,
          goal: "Find and use the block and report options on the apps you use.",
          text: [
            "Almost every social media app, messaging app and online game lets you block, mute and report. Blocking stops the person from contacting you or seeing your posts. Muting hides them without telling them. Reporting tells the company the person broke its rules; the company may remove posts or ban the account. KidsHealth also suggests reporting to your phone or email provider when bullying comes through them.",
            "The options are usually found by tapping the three dots or the person's name or profile, or by pressing and holding the message. Menu names change, so if you can't find them, search the app's help or safety center for \"block\" and \"report\".",
            "Also lock down your privacy: make your accounts private if you can, limit who can comment or message you, never share your passwords (even with friends), and think before you post personal details like your school, address or where you are right now."
          ],
          steps: ["Save evidence first.", "Open the person's profile or the message, then the menu (often three dots).", "Choose Report and pick the reason that fits.", "Choose Block (or Mute if blocking would make things worse).", "Check your privacy settings: who can message, comment or see your posts."],
          words: [["Block", "stop someone from contacting you or seeing your posts."], ["Report", "tell the app or company that someone broke its rules."], ["Privacy settings", "choices that control who can see your posts and contact you."]],
          slides: [
            { title: "Three tools", bullets: ["Block: they can't contact you", "Mute: hide them quietly", "Report: tell the company they broke the rules"] },
            { title: "Where to find them", bullets: ["Tap the three dots, name or profile", "Or press and hold the message", "Can't find it? Search the app's safety center"] },
            { title: "Lock down privacy", bullets: ["Private account if you can", "Limit who can message or comment", "Never share passwords, even with friends"] }
          ],
          sources: [{ name: "KidsHealth (Nemours): Cyberbullying (for teens)", url: "https://kidshealth.org/en/teens/cyberbullying.html" }],
          tryIt: "On the two apps you use most, find (but don't use) the block and report options for an account. Then check one privacy setting on each app, like who can message you, and change it if you want to.",
          youCanNow: "find and use block, mute and report on your apps and tighten your privacy settings."
        },
        {
          title: "Telling a trusted adult, the school and when to call police",
          minutes: 6,
          goal: "Tell a trusted adult what is happening and know when it goes to the school or police.",
          text: [
            "Many young people don't tell anyone because they worry it will make things worse, they'll lose their phone, or they feel ashamed. But adults can do things you can't: talk to the school, contact the app, or go to the police. KidsHealth says to speak up until you find someone who helps.",
            "Trusted adults include a parent or guardian, another family member, a teacher, a school counselor, a coach, a mentor or a youth leader. Start simply: \"Someone keeps sending me mean messages and I don't know what to do. Can you help? I saved screenshots.\" If the first adult doesn't help, tell another one. Most schools have anti-bullying policies, especially when it involves students; a school counselor or principal can act.",
            "Go to the police, with an adult, when it involves threats of violence, sexual images or messages, photos or videos taken somewhere private (like a bathroom or locker room), stalking, or hate based on who you are. StopBullying.gov explains when to report to police and your state's bullying laws. If anyone is in immediate danger, call 911 (or your country's emergency number). If the bullying leaves you feeling hopeless or thinking about hurting yourself, tell an adult now; in the US, call or text 988."
          ],
          steps: ["Pick a trusted adult.", "Tell them what happened and show your evidence.", "Ask them to help contact the school if students are involved.", "Go to the police with an adult for threats, sexual images, stalking or hate.", "Danger now: call 911. Feeling hopeless: call or text 988."],
          words: [["Trusted adult", "a grown-up you feel safe with who can help, like a parent, teacher, counselor or coach."], ["Stalking", "repeatedly following, watching or contacting someone in a way that makes them afraid."]],
          slides: [
            { title: "Why tell an adult", bullets: ["They can contact the school, app or police", "Speak up until someone helps"] },
            { title: "Who and how", bullets: ["Parent, teacher, counselor, coach, mentor", "\"Someone keeps sending me mean messages.\"", "Show your screenshots"] },
            { title: "When to call police", bullets: ["Threats of violence", "Sexual images or messages", "Private-place photos, stalking, hate"] },
            { title: "Urgent help", bullets: ["Danger now: call 911", "Feeling hopeless: call or text 988 (US)"] }
          ],
          sources: [
            { name: "StopBullying.gov: How to Report Cyberbullying", url: "https://www.stopbullying.gov/cyberbullying/how-to-report" },
            { name: "StopBullying.gov: Laws, Policies and Regulations", url: "https://www.stopbullying.gov/resources/laws" },
            { name: "KidsHealth (Nemours): Cyberbullying (for teens)", url: "https://kidshealth.org/en/teens/cyberbullying.html" },
            { name: "988 Suicide and Crisis Lifeline", url: "https://988lifeline.org/" }
          ],
          tryIt: "Write the names of two trusted adults and one person at school you could tell. Then write the exact two or three sentences you would say to start the conversation.",
          youCanNow: "tell a trusted adult with your evidence, involve the school, and know when it is a matter for the police or emergency help."
        },
        {
          title: "Being an upstander and making your safety plan",
          minutes: 5,
          goal: "Support someone who is being targeted and write your own safety plan.",
          text: [
            "Most cyberbullying has an audience. A bystander watches. An upstander helps. You don't have to confront the bully in public to help; often the safest help is quiet.",
            "Ways to be an upstander: don't like, share or comment on the hurtful post; report it; send the target a private message (\"I saw that. It's not okay. Are you alright?\"); invite them to hang out or sit with you; help them save evidence and tell a trusted adult. If you see threats or signs they may hurt themselves, tell an adult right away.",
            "Now put everything together in your own plan, so you know exactly what to do if it happens to you or a friend."
          ],
          steps: ["Don't like, share or comment on the post.", "Report it on the app.", "Message the target privately with support.", "Help them save evidence and tell a trusted adult.", "Write your own safety plan."],
          words: [["Bystander", "someone who sees bullying but does nothing."], ["Upstander", "someone who sees bullying and safely helps the person being targeted."]],
          slides: [
            { title: "Bystander or upstander?", bullets: ["Bystander: watches", "Upstander: helps safely"] },
            { title: "Quiet ways to help", bullets: ["Don't like or share the post; report it", "Message the target: \"It's not okay. You alright?\"", "Help them save evidence and tell an adult"] },
            { title: "Your safety plan", bullets: ["How to screenshot and where to store it", "Block and report on your top two apps", "Two trusted adults and what to say"] }
          ],
          tryIt: "Final task: write your cyberbullying safety plan: screenshot steps and where you'll keep them, where block and report are on your two main apps, two trusted adults and one person at school with what you'd say, when you'd go to the police, and one way you'd support a friend.",
          youCanNow: "support a friend who is being targeted and follow your own cyberbullying safety plan."
        }
      ],
      check: {
        title: "Knowledge Check 2: Taking action and getting support",
        questions: [
          { q: "What does blocking someone do?", options: ["Stops them from contacting you or seeing your posts", "Deletes their account", "Sends them a warning from the police", "Shares your screenshots"], answer: 0, why: "Blocking cuts off their contact with you." },
          { q: "You can't find the report button in an app. What do you do?", options: ["Give up", "Post your password", "Search the app's help or safety center for \"report\"", "Message the bully to ask"], answer: 2, why: "Menu names change; the help or safety center shows where they are." },
          { q: "The first adult you tell doesn't help. What now?", options: ["Never tell anyone again", "Tell another trusted adult", "Get back at the bully yourself", "Delete your evidence"], answer: 1, why: "Keep speaking up until someone helps." },
          { q: "Which situation should go to the police, with an adult?", options: ["Someone unfollowed you", "A friend didn't reply", "A classmate disagreed in a group chat", "Someone threatens to hurt you"], answer: 3, why: "Threats of violence are a matter for the police." },
          { q: "You see a classmate being mocked in comments. What is a good upstander move?", options: ["Like the post so you fit in", "Report it and message the classmate privately with support", "Share it with more people", "Add your own joke"], answer: 1, why: "Reporting and quiet support help without spreading it." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Staying Safe from Cyberbullying",
    questions: [
      { q: "Cyberbullying is:", options: ["Any online disagreement", "Using technology to hurt, embarrass, threaten or target someone", "Forgetting to text back", "Posting about your weekend"], answer: 1, why: "It is about hurting or targeting someone through technology." },
      { q: "Which makes something more likely to be bullying than conflict?", options: ["It is repeated and meant to hurt", "It happens once between equals", "Both people are joking together", "It is about sports scores"], answer: 0, why: "Bullying is usually on purpose, repeated, and has a power difference." },
      { q: "Why can online bullying feel so hard to escape?", options: ["Phones are heavy", "It only happens at school", "It can follow you home and spread fast", "It is always anonymous"], answer: 2, why: "Online posts reach you anywhere and can spread to many people." },
      { q: "Which is a power difference in bullying?", options: ["Both people are the same age", "Neither knows the other", "Both are friends", "A group targeting one person"], answer: 3, why: "More people, popularity or private info give the bully power." },
      { q: "Replying with insults usually:", options: ["Ends the bullying", "Makes it worse", "Gets the post removed", "Is required by the app"], answer: 1, why: "Fighting back often escalates things." },
      { q: "Why shouldn't you forward a hurtful post to friends?", options: ["It spreads it further", "It costs money", "It breaks your phone", "It is too slow"], answer: 0, why: "Forwarding puts the hurtful content in front of more people." },
      { q: "When you are targeted, it helps to remember:", options: ["You deserved it", "Nobody can help", "It is not your fault", "You should handle it alone"], answer: 2, why: "Bullying is about the bully's behavior, not your worth." },
      { q: "What should you do before blocking someone?", options: ["Delete all the messages", "Send them your address", "Post about them", "Save evidence with screenshots"], answer: 3, why: "Blocking can make proof harder to get." },
      { q: "Which detail is most important in a screenshot?", options: ["The username and the date and time", "Your battery level", "Your wallpaper", "The weather"], answer: 0, why: "Who sent it and when proves what happened." },
      { q: "Someone threatens to share your private images unless you send money. What should you do?", options: ["Pay right away", "Send more images", "Don't pay; keep the messages, block them, tell a trusted adult and report", "Delete everything and say nothing"], answer: 2, why: "NCMEC says paying rarely stops it; keep evidence and get help." },
      { q: "In the US, where can you report online sexual exploitation of a young person?", options: ["report.cybertip.org", "A random comment section", "The bully's DMs", "Nowhere"], answer: 0, why: "The CyberTipline, run by NCMEC, takes these reports." },
      { q: "What does Take It Down (takeitdown.ncmec.org) help with?", options: ["Deleting your whole phone", "Finding new friends", "Paying a blackmailer", "Getting sexual images taken when you were under 18 removed"], answer: 3, why: "It is NCMEC's free service to help remove such images." },
      { q: "Reporting someone on an app means:", options: ["Calling them on the phone", "Telling the company they broke its rules", "Following them back", "Sharing their post"], answer: 1, why: "The company can remove posts or ban the account." },
      { q: "Which privacy step helps protect you?", options: ["Share your password with your best friend", "Post your home address", "Limit who can message or comment on your posts", "Make every account public"], answer: 2, why: "Limiting contact cuts off many bullies." },
      { q: "Who is a trusted adult?", options: ["A stranger you met in a game", "A parent, teacher, school counselor or coach you feel safe with", "The person bullying you", "An anonymous account"], answer: 1, why: "Trusted adults can contact the school, app or police." },
      { q: "What should you bring when you tell an adult?", options: ["Nothing", "Your password", "Your evidence: screenshots and your log", "A gift"], answer: 2, why: "Evidence helps them act quickly." },
      { q: "When should cyberbullying go to the police?", options: ["When someone leaves a group chat", "When someone posts a bad review of a game", "When someone disagrees with you", "When it involves threats, sexual images, stalking or hate"], answer: 3, why: "These can be crimes; StopBullying.gov explains when to report to police." },
      { q: "In the US, if bullying leaves you feeling hopeless, you can call or text:", options: ["988", "411", "611", "211 only on weekends"], answer: 0, why: "988 is the free 24/7 Suicide and Crisis Lifeline." },
      { q: "An upstander is someone who:", options: ["Watches and does nothing", "Safely helps the person being targeted", "Joins in", "Records it for views"], answer: 1, why: "Upstanders help, often quietly." },
      { q: "Which is a quiet, safe way to help a friend being bullied online?", options: ["Post their private messages", "Comment something meaner", "Like the post", "Message them privately and help them tell an adult"], answer: 3, why: "Private support and getting an adult involved help without spreading it." }
    ]
  }
};
