"use strict";

// Koach Learn course (shared): "Online Safety and Responsible AI Use" (also Digital Safety, Ethics and Responsible AI; AI and Ethics). Categories: Re-Entry, Youth, Veterans (military), Workforce Development, Undeserved Community.
// Shape and rules: ../README.md; model: ../re-entry/reentry-ai-digital-confidence.js.

module.exports = {
  id: "online-safety-responsible-ai",
  category: "Re-Entry",
  name: "Online Safety and Responsible AI Use",
  skills: "Making strong passwords, Turning on two-step sign-in, Spotting phishing and AI scams, Reporting scams and identity theft, Checking AI for bias and errors, Using AI honestly at school and work",
  outcome: "lock down your main accounts with strong passphrases and two-step sign-in, spot and report phishing, deepfake and AI-powered scams, and use AI tools honestly and fairly, checking their answers and following the rules at school or work.",
  about: [
    "Being online brings real risks: stolen accounts, scams, and fake messages that look and sound real thanks to AI. It also brings new questions: when is it fair to use AI, and how do you know if it is wrong or unfair?",
    "This course is for everyone: people coming home from prison getting back online, young people, veterans, job seekers and community members. You do not need any tech experience.",
    "In Chapter 1 you will protect yourself. In Chapter 2 you will learn to use AI responsibly. Each lesson is about five minutes with a \"Try it now\" task. A knowledge check closes each chapter and a 20-question quiz closes the course."
  ],
  finalTask: "Complete a personal online safety and responsible AI checklist: change your main email password to a strong passphrase, turn on two-step sign-in for it, check your phone and apps for updates, write down the three places to report scams, and write a five-line personal AI rules card covering privacy, checking answers, honesty, fairness and when not to use AI.",
  chapters: [
    {
      name: "Chapter 1: Protecting yourself online",
      lessons: [
        {
          title: "Strong passwords and two-step sign-in",
          minutes: 5,
          goal: "Make a strong passphrase and turn on two-step sign-in for your email.",
          text: [
            "Your email is the key to everything: if someone gets into it, they can reset your other passwords. Protect it first.",
            "A strong password is long and unique. An easy way is a passphrase: four or more random words, like \"maple-river-tiger-lamp\". Use a different password for every important account. A password manager, built into many phones and browsers, can remember them for you.",
            "Turn on two-step sign-in, also called multifactor authentication or MFA. After your password, you also enter a code from your phone or approve a prompt. Even if someone steals your password, they still cannot get in. The U.S. Cybersecurity and Infrastructure Security Agency (CISA) recommends strong passwords, MFA, a password manager and keeping software updated."
          ],
          steps: ["Make a passphrase of four or more random words.", "Change your email password to it.", "Open your email account's security settings.", "Turn on two-step sign-in (MFA) and follow the steps.", "Save the backup codes somewhere safe and private."],
          words: [["Passphrase", "a password made of several random words."], ["MFA / two-step sign-in", "a second check, like a phone code, after your password."], ["Password manager", "a secure app that stores your passwords."]],
          slides: [
            { title: "Protect your email first", bullets: ["It can reset your other accounts"] },
            { title: "Strong passwords", bullets: ["Long and unique", "Four or more random words", "A different one for each important account"] },
            { title: "Two-step sign-in (MFA)", bullets: ["Password plus a phone code or prompt", "Stops most stolen-password attacks", "Save backup codes safely"] }
          ],
          sources: [{ name: "CISA: Cybersecurity Awareness and Secure Our World", url: "https://www.cisa.gov/secure-our-world" }],
          tryIt: "Change your main email password to a strong passphrase and turn on two-step sign-in. If you cannot do it now, write down the steps and do it today.",
          youCanNow: "create a strong passphrase and protect your email with two-step sign-in."
        },
        {
          title: "Spotting phishing and AI-powered scams",
          minutes: 6,
          goal: "Recognize phishing messages, fake calls and deepfakes before you click or pay.",
          text: [
            "Phishing is a fake message, by email, text or social media, that tries to get you to click a link, share information or send money. The Federal Trade Commission (FTC) lists common signs: a message you did not expect from a company you know, a claim of a problem with your account or payment, a request to confirm personal information, and a link to \"update\" your payment.",
            "AI makes scams more convincing. Scammers can write perfect messages, make fake videos called deepfakes and copy a person's voice from a short clip. A call may sound exactly like your grandson, your boss or a parole officer.",
            "Warning signs stay the same: they rush you, scare you, ask for gift cards, wire transfers or crypto, or ask for a code sent to your phone. Stop. Do not click. Contact the person or company using a number or website you already know is real."
          ],
          steps: ["Pause: is this message unexpected or urgent?", "Do not click links or open attachments.", "Look for requests for money, gift cards, crypto or codes.", "Contact the person or company using a number you already know.", "Report it and delete it."],
          words: [["Phishing", "a fake message that tries to steal information or money."], ["Deepfake", "a fake video, image or voice made with AI to look or sound real."], ["Voice cloning", "using AI to copy someone's voice."]],
          slides: [
            { title: "Phishing signs (FTC)", bullets: ["Unexpected message from a known company", "\"Problem with your account or payment\"", "Asks you to confirm information or click to pay"] },
            { title: "AI makes scams convincing", bullets: ["Perfect writing", "Deepfake videos", "Cloned voices of people you know"] },
            { title: "Same warning signs", bullets: ["Rush or fear", "Gift cards, wires, crypto, phone codes", "Call back on a number you know"] }
          ],
          sources: [{ name: "FTC: How to recognize and avoid phishing scams", url: "https://consumer.ftc.gov/articles/how-recognize-and-avoid-phishing-scams" }],
          tryIt: "Look through your email and text messages for one that could be phishing. List the warning signs it shows. With your family, agree on a safe word to check emergency calls.",
          youCanNow: "spot phishing, deepfake and voice-clone scams and respond safely."
        },
        {
          title: "Reporting scams and recovering from identity theft",
          minutes: 5,
          goal: "Know where to report scams and what to do first if your information is stolen.",
          text: [
            "Reporting helps stop scammers and can help you recover. In the U.S., the FTC says to forward phishing emails to reportphishing@apwg.org, forward scam texts to 7726 (SPAM), and report fraud at ReportFraud.ftc.gov.",
            "If you gave away a Social Security, credit card or bank account number, the FTC says to go to IdentityTheft.gov for steps based on what was lost. Act fast: call your bank, change passwords, and consider a fraud alert or credit freeze.",
            "If you clicked a bad link, update your security software, run a scan and remove anything it flags. Outside the U.S., report to your national police cybercrime unit or consumer protection agency."
          ],
          steps: ["Phishing email: forward to reportphishing@apwg.org.", "Scam text: forward to 7726.", "Fraud: report at ReportFraud.ftc.gov.", "Information stolen: follow IdentityTheft.gov and call your bank.", "Clicked a link: update security software and scan."],
          words: [["Identity theft", "when someone uses your personal information to pretend to be you."], ["Credit freeze", "a lock that stops new credit being opened in your name."]],
          slides: [
            { title: "Where to report (U.S.)", bullets: ["Phishing emails: reportphishing@apwg.org", "Scam texts: forward to 7726", "Fraud: ReportFraud.ftc.gov"] },
            { title: "Information stolen?", bullets: ["IdentityTheft.gov", "Call your bank", "Change passwords; consider a credit freeze"] },
            { title: "Clicked a bad link?", bullets: ["Update security software", "Run a scan", "Remove what it flags"] }
          ],
          sources: [{ name: "FTC: How to recognize and avoid phishing scams", url: "https://consumer.ftc.gov/articles/how-recognize-and-avoid-phishing-scams" }, { name: "IdentityTheft.gov", url: "https://www.identitytheft.gov/" }, { name: "ReportFraud.ftc.gov", url: "https://reportfraud.ftc.gov/" }],
          tryIt: "Write the three U.S. places to report scams (or your country's equivalents) on a card or in your phone's notes.",
          youCanNow: "report scams and take the first steps after identity theft."
        }
      ],
      check: {
        title: "Knowledge Check 1: Protecting yourself online",
        questions: [
          { q: "Which is the strongest password?", options: ["password123", "your birthday", "maple-river-tiger-lamp", "123456"], answer: 2, why: "Long passphrases of random words are strong." },
          { q: "What does two-step sign-in (MFA) do?", options: ["Adds a second check, like a phone code, after your password", "Makes your password shorter", "Shares your password with friends", "Turns off your account"], answer: 0, why: "A second check stops attackers who only have your password." },
          { q: "You get a call in your grandson's voice asking for gift cards right now. What do you do?", options: ["Buy the gift cards fast", "Read them your bank number", "Send crypto", "Hang up and call him back on a number you know"], answer: 3, why: "Voices can be cloned with AI; call back on a known number." },
          { q: "What is a deepfake?", options: ["A deep swimming pool", "A fake video, image or voice made with AI", "A strong password", "A real news report"], answer: 1, why: "Deepfakes are AI-made fakes that look or sound real." },
          { q: "In the U.S., where does the FTC say to forward scam text messages?", options: ["911", "7726 (SPAM)", "The scammer", "Your contacts"], answer: 1, why: "The FTC says to forward scam texts to 7726." }
        ]
      }
    },
    {
      name: "Chapter 2: Using AI responsibly",
      lessons: [
        {
          title: "Protecting privacy when you use AI",
          minutes: 5,
          goal: "Decide what is safe to type into an AI tool and what is not.",
          text: [
            "What you type into an AI chat may be stored and, depending on the tool and settings, used to improve it. Treat it like talking in a public place.",
            "Never type: passwords, Social Security or ID numbers, bank or card numbers, case or inmate numbers, medical details tied to your name, or other people's private information. Use placeholders like \"[my number]\" or general descriptions instead.",
            "Look in the tool's settings for privacy and data controls, such as turning off chat history or training on your chats where offered. At school or work, use only the AI tools your school or employer allows, and follow their rules about what information can go in."
          ],
          steps: ["Read your prompt before sending.", "Remove private numbers, names and medical details.", "Use placeholders like \"[my number]\".", "Check the tool's privacy settings.", "At school or work, use only approved tools."],
          words: [["Privacy settings", "options that control what an app saves and shares about you."], ["Placeholder", "a stand-in like \"[my number]\" instead of real private details."]],
          slides: [
            { title: "AI chat is not a diary", bullets: ["What you type may be stored", "Treat it like a public place"] },
            { title: "Never type", bullets: ["Passwords, SSN, ID or case numbers", "Bank or card numbers", "Other people's private details"] },
            { title: "Stay in control", bullets: ["Use placeholders", "Check privacy settings", "Use approved tools at school or work"] }
          ],
          tryIt: "Open the settings of an AI assistant you use and find its privacy or data controls. Then rewrite this prompt safely: \"My SSN is 123-45-6789, help me fill out this form.\"",
          youCanNow: "keep private information out of AI tools and use their privacy settings."
        },
        {
          title: "Checking AI for errors and bias",
          minutes: 5,
          goal: "Check an AI answer for mistakes and unfair bias before you use it.",
          text: [
            "AI can be confidently wrong. It can invent facts, quotes, laws or sources, which is called a hallucination. Always check facts that matter with an official or trusted source.",
            "AI can also be biased: it learned from human writing, which includes unfair stereotypes. It might describe nurses as women and engineers as men, or treat people differently by name, age, race, disability or a criminal record. In hiring, lending, housing or schooling, that can cause real harm.",
            "Test it: ask the same question with one detail changed, such as a different name, and compare the answers. If the AI treats people unfairly, do not use that answer, and report it using the tool's feedback button."
          ],
          steps: ["Find the facts in the answer and check them with a trusted source.", "Look for stereotypes or unfair assumptions.", "Ask again with one detail changed and compare.", "Do not use unfair or wrong answers.", "Report problems with the tool's feedback button."],
          words: [["Hallucination", "when AI states something false as if it were true."], ["Bias", "unfair treatment or assumptions about a group of people."], ["Stereotype", "an oversimplified belief about a group."]],
          slides: [
            { title: "AI can be confidently wrong", bullets: ["Made-up facts, quotes and sources", "Check what matters with trusted sources"] },
            { title: "AI can be biased", bullets: ["It learned from human writing", "Stereotypes about gender, race, age, records", "Real harm in hiring, housing, school"] },
            { title: "Test and report", bullets: ["Change one detail and compare", "Do not use unfair answers", "Use the feedback button"] }
          ],
          tryIt: "Ask an AI assistant to \"describe a typical nurse and a typical engineer.\" Look for stereotypes. Then ask it to write a job reference for \"Maria\" and again for \"James\" with the same details, and compare.",
          youCanNow: "check AI answers for errors and test them for unfair bias."
        },
        {
          title: "Using AI honestly at school, work and online",
          minutes: 5,
          goal: "Follow the rules for AI use and be honest about when you used it.",
          text: [
            "Rules about AI differ. Some teachers allow AI for brainstorming but not for writing; some jobs require it; some forbid it. Ask or read the rules first. Passing off AI work as your own where it is not allowed is cheating and can cost you a grade, a job or a certificate.",
            "Be honest. If AI helped, say how when it matters: \"I used an AI assistant to check grammar.\" Never use AI to make fake reviews, fake documents, or images or videos of real people without their consent. Making sexual or embarrassing fake images of real people is harmful and, in many places, illegal.",
            "Know when not to use AI: emergencies (call 911), serious health, legal or money decisions (talk to a professional), and anything where you would not want your words stored. You are responsible for what you send or post, even if AI wrote it."
          ],
          steps: ["Read or ask about the AI rules at your school or job.", "Use AI only in the ways allowed.", "Say how AI helped when it matters.", "Never make fakes of real people or documents.", "Skip AI for emergencies and big decisions."],
          words: [["Academic honesty", "doing your own work and giving credit for help you used."], ["Consent", "a person's permission."]],
          slides: [
            { title: "Know the rules", bullets: ["Rules differ by class and job", "Ask or read them first", "Breaking them can cost grades or jobs"] },
            { title: "Be honest", bullets: ["Say how AI helped", "No fake reviews or documents", "No fakes of real people without consent"] },
            { title: "When not to use AI", bullets: ["Emergencies: call 911", "Big health, legal or money decisions", "You are responsible for what you post"] }
          ],
          tryIt: "Final task: finish your safety checklist (passphrase, two-step sign-in, updates, report places) and write a five-line personal AI rules card covering privacy, checking answers, honesty, fairness and when not to use AI.",
          youCanNow: "protect your accounts, avoid and report scams, and use AI safely, honestly and fairly."
        }
      ],
      check: {
        title: "Knowledge Check 2: Using AI responsibly",
        questions: [
          { q: "Which is safe to type into an AI assistant?", options: ["Your Social Security number", "Your bank password", "Your friend's medical history", "\"Help me write a thank-you note to my case manager\""], answer: 3, why: "General requests without private details are safe." },
          { q: "What is an AI hallucination?", options: ["When AI states something false as if it were true", "A dream", "A strong password", "A type of virus"], answer: 0, why: "AI can invent facts confidently." },
          { q: "How can you test an AI tool for bias?", options: ["Trust it", "Ask it if it is biased and believe it", "Ask the same question with one detail changed and compare", "Only use it at night"], answer: 2, why: "Changing one detail shows if it treats people differently." },
          { q: "Your teacher allows AI for brainstorming only. What is honest?", options: ["Have AI write the whole essay and say it is yours", "Copy a friend's AI essay", "Ignore the rule", "Use it to brainstorm, then write the work yourself"], answer: 3, why: "Follow the rules for how AI may be used." },
          { q: "Someone is having a medical emergency. What do you do?", options: ["Ask an AI chatbot", "Post online", "Call 911", "Wait"], answer: 2, why: "Emergencies need emergency services, not AI." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Online Safety and Responsible AI Use",
    questions: [
      { q: "Which account should you protect first?", options: ["A game account", "Your email", "A recipe site", "A weather app"], answer: 1, why: "Email can reset your other passwords." },
      { q: "A passphrase is:", options: ["A password made of several random words", "Your name and birthday", "A short number", "A phone code"], answer: 0, why: "Random words make long, strong passwords." },
      { q: "Should you use the same password everywhere?", options: ["Yes, it is easier", "Only for banks", "No, use a different one for each important account", "Only for email"], answer: 2, why: "One stolen password would open everything." },
      { q: "A password manager:", options: ["Securely stores your passwords", "Shares them online", "Guesses other people's passwords", "Deletes your accounts"], answer: 0, why: "It remembers strong passwords for you." },
      { q: "Which U.S. agency recommends strong passwords, MFA and software updates in its awareness campaign?", options: ["NASA", "The Postal Service", "The National Park Service", "CISA"], answer: 3, why: "CISA leads U.S. cybersecurity awareness." },
      { q: "An unexpected text says your bank account is locked and gives a link. You should:", options: ["Click and enter your login", "Not click; contact the bank using a number you know", "Reply with your card number", "Forward it to friends"], answer: 1, why: "This is a classic phishing sign." },
      { q: "Scammers asking for payment by gift card is:", options: ["Normal for government offices", "A warning sign of a scam", "A safe way to pay bills", "Required by banks"], answer: 1, why: "Real agencies do not ask for gift cards." },
      { q: "Voice cloning means:", options: ["Singing in a choir", "Recording your own voicemail", "A phone upgrade", "Using AI to copy someone's voice"], answer: 3, why: "Scammers can copy voices from short clips." },
      { q: "A family safe word helps you:", options: ["Check whether an emergency call is really from family", "Unlock your phone", "Get discounts", "Reset passwords"], answer: 0, why: "A cloned voice will not know the safe word." },
      { q: "Where do you report fraud in the U.S.?", options: ["A comment section", "The scammer's website", "ReportFraud.ftc.gov", "Nowhere"], answer: 2, why: "The FTC collects fraud reports." },
      { q: "If your Social Security number was stolen, the FTC points you to:", options: ["A social media group", "An AI chatbot", "Nothing", "IdentityTheft.gov"], answer: 3, why: "IdentityTheft.gov gives recovery steps." },
      { q: "A credit freeze:", options: ["Freezes your bank account forever", "Cools your computer", "Stops new credit being opened in your name", "Deletes your credit history"], answer: 2, why: "It blocks new accounts by thieves." },
      { q: "What should you do if you clicked a bad link?", options: ["Nothing", "Update security software and run a scan", "Click more links", "Throw the phone away"], answer: 1, why: "A scan finds and removes harmful software." },
      { q: "Typing into an AI chat is most like:", options: ["Talking in a public place", "Writing in a locked diary", "Thinking silently", "Talking to a lawyer"], answer: 0, why: "Chats may be stored, so be careful." },
      { q: "Instead of typing your case number into AI, use:", options: ["The real number", "Half the number", "A placeholder like \"[my number]\"", "Your SSN"], answer: 2, why: "Placeholders protect private details." },
      { q: "AI bias means:", options: ["Unfair treatment or assumptions about groups of people", "A fast answer", "A long answer", "A type of password"], answer: 0, why: "AI can repeat unfair stereotypes." },
      { q: "An AI tool rates a job applicant lower only because of their name. You should:", options: ["Use it anyway", "Change the applicant's name", "Hide it", "Not use that result and report it"], answer: 3, why: "Unfair AI output must not be used." },
      { q: "If AI helped with your work and it matters, you should:", options: ["Hide it", "Say how AI helped", "Claim you did it alone", "Blame the AI for errors"], answer: 1, why: "Honesty about AI use builds trust." },
      { q: "Making a fake embarrassing image of a real classmate with AI is:", options: ["A harmless joke", "Harmful and illegal in many places", "Required for school", "Good for safety"], answer: 1, why: "Fakes of real people without consent cause real harm." },
      { q: "Who is responsible for a post you share that AI wrote?", options: ["The AI", "Nobody", "The internet provider", "You"], answer: 3, why: "You are responsible for what you send or post." }
    ]
  }
};
