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
  chapters: [
    {
      name: "Chapter 1: Threats and how attacks work",
      lessons: [
        {
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
          youCanNow: "explain the CIA triad and say which goal an attack breaks."
        },
        {
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
          youCanNow: "name the common attacks and how they usually get in."
        },
        {
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
          youCanNow: "spot a phishing message, avoid its traps and report it the right way."
        }
      ],
      check: {
        title: "Knowledge Check 1: Threats and how attacks work",
        questions: [
          { q: "Ransomware locks a clinic's computers so staff cannot use them. Which goal is broken?", options: ["Confidentiality", "None", "Integrity", "Availability"], answer: 3, why: "Availability means systems work when you need them." },
          { q: "Someone changes the amount on a payment request. Which goal is broken?", options: ["Speed", "Availability", "Confidentiality", "Integrity"], answer: 3, why: "Integrity means information stays correct." },
          { q: "A caller says he is from IT and needs the code just texted to you. This is:", options: ["Normal IT work", "A software update", "Social engineering", "A backup"], answer: 2, why: "Tricking a person into giving a code is social engineering." },
          { q: "You used the same password on a game site that was breached. What is the risk?", options: ["None", "Your phone breaks", "Your screen goes dark", "Attackers may try that password on your other accounts"], answer: 3, why: "Reused passwords from breaches lead to account takeover." },
          { q: "An email says your bank account is locked and gives a link. The safest step is:", options: ["Click the link fast", "Reply with your password", "Go to the bank's real site or call a number you know", "Forward it to friends"], answer: 2, why: "Contact the company through a site or number you already know is real." }
        ]
      }
    },
    {
      name: "Chapter 2: Protecting accounts and devices",
      lessons: [
        {
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
          youCanNow: "create a strong, unique password and keep it in a password manager."
        },
        {
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
          youCanNow: "turn on MFA and keep your devices updated."
        },
        {
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
          youCanNow: "secure an account end to end and respond calmly if it is ever hacked."
        }
      ],
      check: {
        title: "Knowledge Check 2: Protecting accounts and devices",
        questions: [
          { q: "According to CISA, a strong password is:", options: ["Short and easy", "The same for every account", "Your pet's name", "Long, random and unique"], answer: 3, why: "CISA says long (at least 16 characters), random and unique." },
          { q: "What does a password manager do?", options: ["Shares your passwords with friends", "Deletes your accounts", "Creates and stores strong passwords for you", "Turns off MFA"], answer: 2, why: "You remember one main password; it stores the rest." },
          { q: "You get an MFA prompt you did not ask for. What do you do?", options: ["Approve it", "Text the code to a friend", "Ignore it forever", "Deny it and change your password"], answer: 3, why: "An unexpected prompt means someone may have your password." },
          { q: "Why install updates?", options: ["They fix security holes attackers know about", "They make the phone heavier", "They delete your photos", "They are only for games"], answer: 0, why: "Updates patch known security holes." },
          { q: "Your account was hacked. After changing the password, a key step is to:", options: ["Post your new password", "Delete your contacts", "Turn off updates", "Sign out of all other sessions"], answer: 3, why: "Signing out everywhere kicks the attacker out." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Introduction to Cybersecurity",
    questions: [
      { q: "Cybersecurity is:", options: ["Protecting devices, accounts and information from attack", "Making websites colorful", "A type of phone", "A video game"], answer: 0, why: "It protects devices, accounts and information." },
      { q: "In the CIA triad, \"confidentiality\" means:", options: ["The system is fast", "The information is backed up", "Only the right people can see the information", "The power is on"], answer: 2, why: "Confidentiality keeps information private." },
      { q: "A website is knocked offline so customers cannot use it. Which goal is hurt?", options: ["Integrity", "Confidentiality", "Availability", "Authentication"], answer: 2, why: "Availability means it works when needed." },
      { q: "Malware is:", options: ["A helpful update", "A firewall", "A password manager", "Harmful software"], answer: 3, why: "Malware is harmful software." },
      { q: "Ransomware:", options: ["Speeds up your computer", "Locks files and demands payment", "Backs up your photos", "Blocks spam"], answer: 1, why: "Ransomware holds files hostage." },
      { q: "Social engineering is:", options: ["Building bridges", "Tricking people into giving access or information", "Updating apps", "A school subject only"], answer: 1, why: "It attacks people instead of technology." },
      { q: "Which is a common way accounts get taken over?", options: ["Reusing a password that leaked in a breach", "Using MFA", "Installing updates", "Using a password manager"], answer: 0, why: "Leaked, reused passwords let attackers into other accounts." },
      { q: "Phishing is:", options: ["A fake message trying to trick you", "A fishing app", "A backup method", "A type of password"], answer: 0, why: "Phishing tricks you into clicking or sharing." },
      { q: "Which is a phishing sign the FTC lists?", options: ["A message from a friend you were expecting", "A receipt for something you bought", "A claim of suspicious activity with a link to fix it", "A school newsletter"], answer: 2, why: "Fake \"suspicious activity\" alerts are a common trick." },
      { q: "Before clicking a link in an email on a computer, you can:", options: ["Hover over it to see where it really goes", "Click twice", "Reply with your password", "Turn off the computer"], answer: 0, why: "Hovering shows the real web address." },
      { q: "Where does the FTC say to forward phishing texts?", options: ["To all your contacts", "SPAM (7726)", "The sender", "911"], answer: 1, why: "Forward phishing texts to 7726 (SPAM)." },
      { q: "At work you get a suspicious email. What do you do?", options: ["Click to see if it is real", "Report it with the phishing button or tell IT", "Forward it to coworkers", "Reply and ask"], answer: 1, why: "IT can block it for everyone." },
      { q: "CISA's minimum length for a strong password is:", options: ["At least 16 characters", "4 characters", "8 characters exactly", "Any length"], answer: 0, why: "CISA says at least 16 characters; longer is stronger." },
      { q: "Which is a good passphrase?", options: ["password123", "Your birthday", "HorsePurpleHatRun", "abc"], answer: 2, why: "Several unrelated words make it long and hard to guess." },
      { q: "A password manager means you only need to remember:", options: ["Every password", "One strong main password", "No passwords and no device", "Your friend's password"], answer: 1, why: "The manager stores the rest." },
      { q: "MFA protects you because:", options: ["A stolen password alone is not enough to get in", "It makes your password shorter", "It shares your login", "It turns off your phone"], answer: 0, why: "MFA needs a second proof." },
      { q: "Which kind of MFA does CISA call the strongest?", options: ["Writing the code on a sticky note", "Phishing-resistant MFA, like a passkey or security key", "Telling a friend the code", "No second factor"], answer: 1, why: "CISA calls phishing-resistant MFA the standard to aim for; passkeys and security keys are harder to trick than text codes." },
      { q: "CISA's four core steps are: avoid phishing, strong passwords, MFA and:", options: ["Buy a new phone", "Update software", "Turn off Wi-Fi forever", "Share passwords"], answer: 1, why: "Updating software is the fourth core step." },
      { q: "You think you clicked a bad link. The FTC says to:", options: ["Ignore it", "Update security software, run a scan and remove what it flags", "Send the link to friends", "Pay whoever asks"], answer: 1, why: "A scan finds and removes harmful software." },
      { q: "Where can you report online fraud to the FBI?", options: ["ic3.gov", "A social media comment", "The scammer's email", "Nowhere"], answer: 0, why: "IC3 is the FBI's Internet Crime Complaint Center." }
    ]
  }
};
