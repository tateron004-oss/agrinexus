"use strict";

// Koach Learn course (shared): "Introduction to Cybersecurity" (also the list's Cybersecurity Fundamentals). Goes in Youth (first), Veterans (military) and Workforce Development, so the examples mix
// school, home, a first job and a small workplace. Shape: scripts/koachlearn-courses/README.md; model: re-entry/reentry-ai-digital-confidence.js.

const CISA_PASSWORDS = { name: "CISA Secure Our World: Use strong passwords", url: "https://www.cisa.gov/secure-our-world/use-strong-passwords" };
const CISA_SOW = { name: "CISA: Secure Our World", url: "https://www.cisa.gov/secure-our-world" };
const FTC_PHISHING = { name: "FTC: How to recognize and avoid phishing scams", url: "https://consumer.ftc.gov/articles/how-recognize-and-avoid-phishing-scams" };

module.exports = {
  id: "intro-cybersecurity",
  category: "Youth",
  name: "Introduction to Cybersecurity",
  skills: "Explaining the CIA triad, Recognizing common attacks, Spotting and reporting phishing, Securing accounts with strong passwords and MFA, Keeping devices updated, Responding to an incident",
  outcome: "run a security checkup on your own accounts and devices: set a strong unique password with a password manager, turn on multifactor authentication, update your software, pick out a phishing message and report it, and follow a simple plan if an account is hacked.",
  about: [
    "Cybersecurity means protecting computers, phones, accounts and information from attack. It matters for a student's school account, a family's bank login and a small business's customer list, and it is also a growing career field.",
    "In Chapter 1 you learn the basic goals of security, the most common attacks and how to spot phishing. In Chapter 2 you lock down your own accounts and devices and learn what to do when something goes wrong.",
    "The steps follow the four core steps CISA, the US Cybersecurity and Infrastructure Security Agency, teaches everyone. Each lesson takes about five minutes, with a knowledge check after each chapter and a 20-question quiz at the end."
  ],
  finalTask: "Do a security checkup on one important account (email is best): give it a strong, unique password saved in a password manager, turn on multifactor authentication, check that your phone or computer is up to date, and write a five-line plan for what you would do if that account were hacked. Then find one suspicious message in your inbox or texts and list the phishing signs it shows.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Young people and adults who use email, social media, school or work accounts and phones every day: students, youth programs, job seekers, new office workers, volunteers and families.",
    startingPoint: "Can sign in to accounts, use apps and send messages. Many reuse passwords, have not turned on multifactor authentication, skip updates, and are not sure how to tell a phishing message from a real one or what to do if an account is hacked.",
    gap: "Most attacks on everyday people go after whoever is easiest, through reused passwords, phishing and social engineering. A few habits block most of these attacks, protect school, work and money accounts, and make people safer staff and family members.",
    constraints: [
      "Reading level: plain words and short sentences; security terms such as MFA and phishing are explained",
      "Devices: the learner's own phone or computer and one important account, such as email",
      "Time: about 5 minutes a lesson, about 60 minutes in total",
      "Cost: free tools only, such as the password manager built into a browser or phone",
      "Privacy: learners never share a password or MFA code with anyone, including the teacher, and never type one into an AI tool"
    ],
    prerequisites: "None. Learners need one account they can sign in to, such as email."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Given a short description of an attack", action: "explain the three goals of security (confidentiality, integrity and availability) and identify which one the attack breaks", standard: "getting at least 4 of 5 examples right" },
    { id: "O2", condition: "Given examples of malware, ransomware, account takeover and social engineering", action: "name each attack and describe how it usually gets in", standard: "with each attack named correctly and one common way in for each" },
    { id: "O3", condition: "Given a real or sample email or text", action: "identify the phishing signs it shows and report it the right way", standard: "listing at least two signs and choosing a correct place to report it" },
    { id: "O4", condition: "Using a free password manager", action: "create a strong, unique password for one important account and save it in the password manager", standard: "with a password of at least 16 characters that is not used on any other account" },
    { id: "O5", condition: "On one important account and your own device", action: "turn on multifactor authentication and check that the device and apps are up to date", standard: "with MFA working on the account and automatic updates turned on" },
    { id: "O6", condition: "Given signs that an account is hacked or a device is infected", action: "write and follow a step-by-step recovery plan", standard: "with every key step in a safe order: change the password, turn on MFA, sign out other sessions, check recovery details, warn contacts and report" }
  ],
  chapters: [
    {
      name: "Chapter 1: Threats and how attacks work",
      lessons: [
        {
          objectives: ["O1"],
          title: "What cybersecurity protects",
          minutes: 4,
          goal: "Explain the three goals of security using the CIA triad.",
          text: [
            "Security people often use three words, called the CIA triad. Confidentiality: only the right people can see the information, like your grades or medical records. Integrity: the information is correct and has not been changed by someone who should not change it, like a bank balance. Availability: the information and systems work when you need them, like a website that stays up.",
            "Every attack hurts at least one of the three. Someone reading your messages breaks confidentiality. Someone changing a payment amount breaks integrity. Ransomware that locks a hospital's computers breaks availability.",
            "The people who attack are called threat actors. They range from scammers looking for quick money to organized criminal groups. Most attacks on everyday people are not personal; attackers go after whoever is easiest."
          ],
          words: [["Cybersecurity", "protecting computers, phones, accounts and information from attack."], ["CIA triad", "confidentiality, integrity and availability: the three goals of security."], ["Threat actor", "a person or group that attacks computers or accounts."]],
          slides: [
            { title: "The CIA triad", bullets: ["Confidentiality: only the right people see it", "Integrity: it stays correct", "Availability: it works when you need it"] },
            { title: "Attacks break one of the three", bullets: ["Reading your messages: confidentiality", "Changing a payment: integrity", "Locking computers: availability"] },
            { title: "Who attacks", bullets: ["Scammers and criminal groups", "They go after whoever is easiest", "Good habits make you a harder target"] }
          ],
          tryIt: "Think of one app you use, such as a school portal, a bank app or a work schedule app. Write one example of what confidentiality, integrity and availability mean for it.",
          youCanNow: "explain the CIA triad and say which goal an attack breaks.",
          quickCheck: [
            { objective: "O1", q: "In the CIA triad, what does integrity mean?", options: ["The system is always fast", "Only the right people can see the information", "The information is free to everyone", "The information is correct and has not been changed by someone who should not change it"], answer: 3, why: "Integrity means the information is correct and not changed without permission." },
            { objective: "O1", q: "Someone reads a classmate's private messages without permission. Which goal would you say is broken?", options: ["Availability", "Confidentiality", "Integrity", "None of the three"], answer: 1, why: "Confidentiality means only the right people can see the information." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Common attacks: malware, ransomware and account takeover",
          minutes: 5,
          goal: "Name the most common attacks and how each one usually gets in.",
          text: [
            "Malware is harmful software. It often arrives in an email attachment, a fake app, a pirated game or a fake \"update\" pop-up. Ransomware is malware that locks your files and demands payment to unlock them.",
            "Account takeover happens when someone gets into your account. The most common ways are a stolen or guessed password, a password reused from another site that was breached, or tricking you into sharing a one-time code.",
            "Social engineering means tricking a person instead of breaking the technology. A caller pretending to be IT support, a fake delivery text or a message from a \"friend\" asking for a code are all social engineering. People are often the easiest way in, which is why your habits matter."
          ],
          words: [["Malware", "harmful software that can spy, steal or damage."], ["Ransomware", "malware that locks files and demands payment."], ["Data breach", "when a company's stored information, like passwords, is stolen."], ["Social engineering", "tricking a person into giving access or information."]],
          slides: [
            { title: "Malware and ransomware", bullets: ["Harmful software", "Comes in attachments, fake apps, pirated games", "Ransomware locks files and demands payment"] },
            { title: "Account takeover", bullets: ["Stolen or guessed passwords", "Passwords reused from a breached site", "Tricked into sharing a one-time code"] },
            { title: "Social engineering", bullets: ["Tricking people, not machines", "Fake IT calls, fake delivery texts", "Friends' hacked accounts asking for codes"] }
          ],
          tryIt: "For each attack (malware, ransomware, account takeover, social engineering), write one real-life way it could reach you or your family, and one habit that would stop it.",
          youCanNow: "name the common attacks and how they usually get in.",
          quickCheck: [
            { objective: "O2", q: "Which of these is a common way malware gets onto a device?", options: ["A pirated game or a fake \"update\" pop-up", "Turning on automatic updates", "Using a password manager", "Restarting your phone"], answer: 0, why: "Malware often arrives in attachments, fake apps, pirated games and fake update pop-ups." },
            { objective: "O2", q: "A \"friend\" messages you asking for the code your phone just received. What would you do?", options: ["Send the code because it is a friend", "Send half the code", "Do not share the code; this is likely social engineering", "Post the code on social media to check"], answer: 2, why: "Tricking you into sharing a one-time code is a common way accounts are taken over." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Spotting and reporting phishing",
          minutes: 5,
          goal: "Pick out a phishing message and report it the right way.",
          text: [
            "Phishing is a fake email, text or message that tries to get you to click a link, open a file or share information. The FTC lists common tricks: claiming suspicious activity on your account, a problem with your payment, asking you to confirm personal information, an invoice you do not recognize, a link to pay, a government refund, or a coupon for free stuff.",
            "Check the sender's real address, not just the name. Hover over links on a computer (or press and hold on a phone) to see where they really go. Look for urgency: \"act now or your account will close.\"",
            "If you do not know the sender, report it and delete it. If you do have an account with that company, contact it using a website or phone number you already know is real, not the one in the message. The FTC says to forward phishing emails to reportphishing@apwg.org, forward phishing texts to SPAM (7726), and report to ReportFraud.ftc.gov. At school or work, use the \"Report phishing\" button or tell IT."
          ],
          steps: ["Check the sender's real address.", "Hover over or long-press the link to see where it goes.", "Look for urgency, threats or prizes.", "Do not click, reply or open attachments.", "Contact the company using a number or site you already know.", "Report: email to reportphishing@apwg.org, texts to 7726, and ReportFraud.ftc.gov; at school or work tell IT."],
          words: [["Phishing", "a fake message that tries to trick you into clicking, opening a file or sharing information."], ["Smishing", "phishing by text message."], ["Spoofing", "faking a sender's name, number or address so a message looks real."]],
          sources: [FTC_PHISHING, { name: "FTC: ReportFraud", url: "https://reportfraud.ftc.gov" }],
          slides: [
            { title: "Common phishing tricks (FTC)", bullets: ["\"Suspicious activity\" or \"payment problem\"", "\"Confirm your information\"", "Unknown invoices, refunds, free coupons"] },
            { title: "Check before you click", bullets: ["Real sender address, not just the name", "Hover or long-press links", "Urgency and threats are red flags"] },
            { title: "Contact the company yourself", bullets: ["Use a site or number you already know", "Never the one in the message"] },
            { title: "Report it", bullets: ["Emails: reportphishing@apwg.org", "Texts: forward to 7726 (SPAM)", "ReportFraud.ftc.gov; at work or school, tell IT"] }
          ],
          tryIt: "Open your spam or junk folder (or your texts) and find one suspicious message. Without clicking anything, list every phishing sign you see, then report or delete it.",
          youCanNow: "spot a phishing message, avoid its traps and report it the right way.",
          quickCheck: [
            { objective: "O3", q: "On a phone, how can you see where a link really goes before you open it?", options: ["Tap it quickly twice", "Press and hold the link", "Reply to the sender", "Turn the phone off and on"], answer: 1, why: "Pressing and holding shows the real address without opening it." },
            { objective: "O3", q: "A text says your delivery is on hold and you must pay a small fee by link. You have no package coming. What would you do?", options: ["Pay the fee to be safe", "Reply asking which package it is", "Click the link to see what it says", "Forward it to SPAM (7726), report it and delete it"], answer: 3, why: "The FTC says to forward phishing texts to SPAM (7726) and report them." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Threats and how attacks work",
        questions: [
          { objective: "O1", q: "Ransomware locks a clinic's computers so staff cannot use them. Which goal is broken?", options: ["Confidentiality", "None", "Integrity", "Availability"], answer: 3, why: "Availability means systems work when you need them." },
          { objective: "O1", q: "Someone changes the amount on a payment request. Which goal is broken?", options: ["Speed", "Availability", "Confidentiality", "Integrity"], answer: 3, why: "Integrity means information stays correct." },
          { objective: "O2", q: "A caller says he is from IT and needs the code just texted to you. This is:", options: ["Normal IT work", "A software update", "Social engineering", "A backup"], answer: 2, why: "Tricking a person into giving a code is social engineering." },
          { objective: "O2", q: "You used the same password on a game site that was breached. What is the risk?", options: ["None", "Your phone breaks", "Your screen goes dark", "Attackers may try that password on your other accounts"], answer: 3, why: "Reused passwords from breaches lead to account takeover." },
          { objective: "O3", q: "An email says your bank account is locked and gives a link. The safest step is:", options: ["Click the link fast", "Reply with your password", "Go to the bank's real site or call a number you know", "Forward it to friends"], answer: 2, why: "Contact the company through a site or number you already know is real." }
        ]
      }
    },
    {
      name: "Chapter 2: Protecting accounts and devices",
      lessons: [
        {
          objectives: ["O4"],
          title: "Strong passwords and a password manager",
          minutes: 5,
          goal: "Create a strong, unique password and save it in a password manager.",
          text: [
            "CISA says a strong password is long (at least 16 characters), random, and unique (different for every account). A passphrase of four to seven unrelated words, like CISA's example \"HorsePurpleHatRun\", is long and easy to remember.",
            "Nobody can remember a different strong password for every account, so use a password manager. It creates and stores passwords for you; you remember just one strong main password. CISA notes that some are free, including ones built into web browsers and phones.",
            "Never share passwords, never type them into an AI tool, and change a password right away if a company tells you it was in a data breach."
          ],
          steps: ["Open a password manager: the one built into your browser or phone, or a trusted app.", "Choose your most important account, usually email.", "Use the manager to create a long, random password, or make a 4 to 7 word passphrase.", "Save it in the manager.", "Change the password on the account and test signing in."],
          words: [["Password manager", "an app that creates and stores your passwords safely."], ["Passphrase", "a password made of several unrelated words."], ["Unique password", "a password used for only one account."]],
          sources: [CISA_PASSWORDS],
          slides: [
            { title: "Strong passwords (CISA)", bullets: ["Long: at least 16 characters", "Random", "Unique: different for every account"] },
            { title: "Passphrases", bullets: ["4 to 7 unrelated words", "Example: HorsePurpleHatRun"] },
            { title: "Use a password manager", bullets: ["Creates and stores passwords", "You remember one main password", "Some are free, built into browsers and phones"] }
          ],
          tryIt: "Open the password manager on your phone or browser. Use it to create and save a new strong password for one account you care about.",
          youCanNow: "create a strong, unique password and keep it in a password manager.",
          quickCheck: [
            { objective: "O4", q: "What does \"unique\" mean for a password?", options: ["It has your name in it", "It is short and easy to type", "It is different for every account", "It is the same as your phone PIN"], answer: 2, why: "A unique password is used for one account only, so one breach does not open the others." },
            { objective: "O4", q: "A company emails to say your password was in a data breach. What would you do?", options: ["Change that password right away", "Wait to see if anything happens", "Use the same password on a new account", "Share the password with a friend to check it"], answer: 0, why: "Change a password right away when a company says it was in a breach." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Multifactor authentication and updates",
          minutes: 5,
          goal: "Turn on multifactor authentication and update a device.",
          text: [
            "Multifactor authentication (MFA) asks for a second proof after your password, such as a code from an authenticator app, a prompt on your phone, a security key, or a passkey. Even if someone steals your password, they cannot get in without the second factor. Turn it on for email, banking, school and social media first. CISA says any MFA is better than none, and the strongest kind is phishing-resistant MFA (FIDO, used by passkeys and security keys), which is harder to trick than a text code.",
            "Never share an MFA code. If you get a code or login prompt you did not ask for, someone may have your password: deny it and change your password.",
            "Updates fix security holes attackers already know about. Turn on automatic updates for your phone, computer, browser and apps, and restart when asked. CISA lists updating software as one of its four core steps, along with avoiding phishing, strong passwords and MFA."
          ],
          steps: ["Open your email account's security settings.", "Find two-step verification, two-factor or multifactor authentication.", "Follow the steps; a passkey, security key or authenticator app is harder to trick than a text code, but any MFA beats none.", "Save the backup codes somewhere safe and offline.", "Open your phone's or computer's settings and turn on automatic updates."],
          words: [["Multifactor authentication (MFA)", "a second proof, after your password, that it is really you."], ["Authenticator app", "an app that shows sign-in codes that change every few seconds."], ["Passkey", "a sign-in method that uses your device and face, fingerprint or PIN instead of a password."], ["Update / patch", "a fix from the maker that closes security holes."]],
          sources: [CISA_SOW, { name: "CISA: More than a password (MFA)", url: "https://www.cisa.gov/MFA" }],
          slides: [
            { title: "MFA: a second lock", bullets: ["Password + code, prompt, key or passkey", "A stolen password is not enough", "Turn on for email, bank, school, social"] },
            { title: "Unexpected code or prompt?", bullets: ["Never share it", "Deny it", "Change your password"] },
            { title: "Update everything", bullets: ["Phone, computer, browser, apps", "Turn on automatic updates", "Restart when asked"] }
          ],
          tryIt: "Turn on MFA for your email account and save your backup codes. Then check your phone or computer for updates and install any that are waiting.",
          youCanNow: "turn on MFA and keep your devices updated.",
          quickCheck: [
            { objective: "O5", q: "Which of these is an example of a second factor for MFA?", options: ["Your username", "Your favorite color", "Your email address", "A code from an authenticator app"], answer: 3, why: "MFA asks for a second proof after your password, such as an authenticator code." },
            { objective: "O5", q: "Your phone asks to install an update and restart. What would you do?", options: ["Ignore it for months", "Turn off updates so it stops asking", "Install it and restart when asked", "Only update if a friend says to"], answer: 2, why: "Updates fix security holes that attackers already know about." }
          ]
        },
        {
          objectives: ["O6"],
          title: "When something goes wrong",
          minutes: 5,
          goal: "Follow a simple plan if an account is hacked or a device is infected.",
          text: [
            "Signs of trouble: you cannot sign in, friends get strange messages from you, you see logins or purchases you did not make, or your device suddenly shows pop-ups or runs very slowly.",
            "If an account is hacked: from a safe device, change the password, turn on MFA, sign out of all other sessions (most accounts have this in security settings), and check recovery email and phone numbers. Tell your contacts not to click messages from you. If money is involved, call your bank using the number on your card.",
            "If you clicked a bad link or think a device is infected, the FTC says to update your security software, run a scan and remove anything it flags. At school or work, tell IT right away; reporting fast is not getting in trouble, it limits the damage. Report fraud to ReportFraud.ftc.gov or the FBI's ic3.gov."
          ],
          steps: ["Use a safe device.", "Change the password and turn on MFA.", "Sign out of all other sessions.", "Check recovery email and phone.", "Warn contacts; call your bank if money is involved.", "Update security software and run a scan.", "Tell IT at school or work; report fraud to ReportFraud.ftc.gov or ic3.gov."],
          words: [["Incident", "a security problem, like a hacked account or infected device."], ["Session", "a place where you are signed in, like a phone or a browser."], ["Recovery info", "the email and phone a service uses to help you get back into your account."]],
          sources: [FTC_PHISHING, { name: "FBI Internet Crime Complaint Center (IC3)", url: "https://www.ic3.gov" }, { name: "FTC: ReportFraud", url: "https://reportfraud.ftc.gov" }],
          slides: [
            { title: "Signs of trouble", bullets: ["Cannot sign in", "Friends get odd messages from you", "Logins or purchases you did not make"] },
            { title: "Hacked account plan", bullets: ["Change password, turn on MFA", "Sign out of all sessions", "Check recovery email and phone"] },
            { title: "Infected device or money involved", bullets: ["Update security software and scan", "Call your bank on the number on your card"] },
            { title: "Report fast", bullets: ["Tell IT at school or work", "ReportFraud.ftc.gov or ic3.gov"] }
          ],
          tryIt: "Final task: do a security checkup on your email (strong password in a manager, MFA on, device updated), write your five-line hacked-account plan, and list the phishing signs in one suspicious message.",
          youCanNow: "secure an account end to end and respond calmly if it is ever hacked.",
          quickCheck: [
            { objective: "O6", q: "Which of these is a sign an account may be hacked?", options: ["Friends get strange messages from you that you did not send", "You signed in yesterday", "Your password is long", "You turned on MFA"], answer: 0, why: "Strange messages sent from your account are a common sign of a takeover." },
            { objective: "O6", q: "At work you think you clicked a bad link. What would you do?", options: ["Keep quiet so you do not get in trouble", "Tell IT right away", "Click the link again to check", "Turn off MFA"], answer: 1, why: "Reporting fast limits the damage and is not getting in trouble." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Protecting accounts and devices",
        questions: [
          { objective: "O4", q: "According to CISA, a strong password is:", options: ["Short and easy", "The same for every account", "Your pet's name", "Long, random and unique"], answer: 3, why: "CISA says long (at least 16 characters), random and unique." },
          { objective: "O4", q: "What does a password manager do?", options: ["Shares your passwords with friends", "Deletes your accounts", "Creates and stores strong passwords for you", "Turns off MFA"], answer: 2, why: "You remember one main password; it stores the rest." },
          { objective: "O5", q: "You get an MFA prompt you did not ask for. What do you do?", options: ["Approve it", "Text the code to a friend", "Ignore it forever", "Deny it and change your password"], answer: 3, why: "An unexpected prompt means someone may have your password." },
          { objective: "O5", q: "Why install updates?", options: ["They fix security holes attackers know about", "They make the phone heavier", "They delete your photos", "They are only for games"], answer: 0, why: "Updates patch known security holes." },
          { objective: "O6", q: "Your account was hacked. After changing the password, a key step is to:", options: ["Post your new password", "Delete your contacts", "Turn off updates", "Sign out of all other sessions"], answer: 3, why: "Signing out everywhere kicks the attacker out." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Introduction to Cybersecurity",
    questions: [
      { objective: "O1", q: "Cybersecurity is:", options: ["Protecting devices, accounts and information from attack", "Making websites colorful", "A type of phone", "A video game"], answer: 0, why: "It protects devices, accounts and information." },
      { objective: "O1", q: "In the CIA triad, \"confidentiality\" means:", options: ["The system is fast", "The information is backed up", "Only the right people can see the information", "The power is on"], answer: 2, why: "Confidentiality keeps information private." },
      { objective: "O1", q: "A website is knocked offline so customers cannot use it. Which goal is hurt?", options: ["Integrity", "Confidentiality", "Availability", "Authentication"], answer: 2, why: "Availability means it works when needed." },
      { objective: "O2", q: "Malware is:", options: ["A helpful update", "A firewall", "A password manager", "Harmful software"], answer: 3, why: "Malware is harmful software." },
      { objective: "O2", q: "Ransomware:", options: ["Speeds up your computer", "Locks files and demands payment", "Backs up your photos", "Blocks spam"], answer: 1, why: "Ransomware holds files hostage." },
      { objective: "O2", q: "Social engineering is:", options: ["Building bridges", "Tricking people into giving access or information", "Updating apps", "A school subject only"], answer: 1, why: "It attacks people instead of technology." },
      { objective: "O2", q: "Which is a common way accounts get taken over?", options: ["Reusing a password that leaked in a breach", "Using MFA", "Installing updates", "Using a password manager"], answer: 0, why: "Leaked, reused passwords let attackers into other accounts." },
      { objective: "O3", q: "Phishing is:", options: ["A fake message trying to trick you", "A fishing app", "A backup method", "A type of password"], answer: 0, why: "Phishing tricks you into clicking or sharing." },
      { objective: "O3", q: "Which is a phishing sign the FTC lists?", options: ["A message from a friend you were expecting", "A receipt for something you bought", "A claim of suspicious activity with a link to fix it", "A school newsletter"], answer: 2, why: "Fake \"suspicious activity\" alerts are a common trick." },
      { objective: "O3", q: "Before clicking a link in an email on a computer, you can:", options: ["Hover over it to see where it really goes", "Click twice", "Reply with your password", "Turn off the computer"], answer: 0, why: "Hovering shows the real web address." },
      { objective: "O3", q: "Where does the FTC say to forward phishing texts?", options: ["To all your contacts", "SPAM (7726)", "The sender", "911"], answer: 1, why: "Forward phishing texts to 7726 (SPAM)." },
      { objective: "O3", q: "At work you get a suspicious email. What do you do?", options: ["Click to see if it is real", "Report it with the phishing button or tell IT", "Forward it to coworkers", "Reply and ask"], answer: 1, why: "IT can block it for everyone." },
      { objective: "O4", q: "CISA's minimum length for a strong password is:", options: ["At least 16 characters", "4 characters", "8 characters exactly", "Any length"], answer: 0, why: "CISA says at least 16 characters; longer is stronger." },
      { objective: "O4", q: "Which is a good passphrase?", options: ["password123", "Your birthday", "HorsePurpleHatRun", "abc"], answer: 2, why: "Several unrelated words make it long and hard to guess." },
      { objective: "O4", q: "A password manager means you only need to remember:", options: ["Every password", "One strong main password", "No passwords and no device", "Your friend's password"], answer: 1, why: "The manager stores the rest." },
      { objective: "O5", q: "MFA protects you because:", options: ["A stolen password alone is not enough to get in", "It makes your password shorter", "It shares your login", "It turns off your phone"], answer: 0, why: "MFA needs a second proof." },
      { objective: "O5", q: "Which kind of MFA does CISA call the strongest?", options: ["Writing the code on a sticky note", "Phishing-resistant MFA, like a passkey or security key", "Telling a friend the code", "No second factor"], answer: 1, why: "CISA calls phishing-resistant MFA the standard to aim for; passkeys and security keys are harder to trick than text codes." },
      { objective: "O5", q: "CISA's four core steps are: avoid phishing, strong passwords, MFA and:", options: ["Buy a new phone", "Update software", "Turn off Wi-Fi forever", "Share passwords"], answer: 1, why: "Updating software is the fourth core step." },
      { objective: "O6", q: "You think you clicked a bad link. The FTC says to:", options: ["Ignore it", "Update security software, run a scan and remove what it flags", "Send the link to friends", "Pay whoever asks"], answer: 1, why: "A scan finds and removes harmful software." },
      { objective: "O6", q: "Where can you report online fraud to the FBI?", options: ["ic3.gov", "A social media comment", "The scammer's email", "Nowhere"], answer: 0, why: "IC3 is the FBI's Internet Crime Complaint Center." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Pre-Test: What Do You Already Know?",
    from: [
      0,
      2,
      5,
      7,
      8,
      12,
      15,
      18
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      {
        name: "Strong, unique password",
        objective: "O4",
        notYet: "The password is short, reused or not saved anywhere safe.",
        meets: "A password of at least 16 characters, used only on this account, saved in a password manager.",
        exceeds: "Also checks one more important account and makes its password unique."
      },
      {
        name: "Multifactor authentication",
        objective: "O5",
        notYet: "MFA is not turned on.",
        meets: "MFA is on and working for the account.",
        exceeds: "Uses an authenticator app, passkey or security key instead of a text code."
      },
      {
        name: "Device up to date",
        objective: "O5",
        notYet: "Updates were not checked, or automatic updates are off.",
        meets: "The phone or computer is up to date and automatic updates are on.",
        exceeds: "Also checks the browser and main apps."
      },
      {
        name: "Recovery plan",
        objective: "O6",
        notYet: "The plan is missing or has fewer than three correct steps.",
        meets: "Five lines that cover changing the password, MFA, signing out other sessions, checking recovery details and warning contacts.",
        exceeds: "Also says where to report and who to call if money is involved."
      },
      {
        name: "Phishing signs",
        objective: "O3",
        notYet: "No message found, or no correct signs listed.",
        meets: "One suspicious message with at least two correct phishing signs listed.",
        exceeds: "Also says how and where to report it."
      }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and score Meets or Exceeds on every rubric row of the security checkup",
      "Learners who still have MFA and a password manager in use 30 days later (follow-up survey)",
      "Learners who report a phishing message to IT or the FTC, or avoid a scam, in the 30 days after the course",
      "Learners who go on to a next course or certificate in cybersecurity or IT"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "The learner's own phone or computer with internet",
      "One important account they can sign in to, best of all email",
      "A free password manager, such as the one built into the browser or phone",
      "Paper and pen for the five-line recovery plan; about 60 minutes in total"
    ],
    facilitatorNotes: [
      "Never ask to see, collect or write down anyone's password or MFA code; learners do the account steps on their own screens.",
      "Make sure each learner still has access to their recovery email or phone before turning on MFA, so nobody gets locked out in class.",
      "Bring printed or screenshot phishing examples so learners without a suspicious message can still do the phishing task.",
      "On shared or lab computers, do not save passwords in the browser; have learners use their own phone's password manager and sign out at the end.",
      "If a learner discovers a real hacked account, pause and walk them through the recovery plan from a safe device."
    ]
  }
};
