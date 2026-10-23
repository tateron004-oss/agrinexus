"use strict";

// Kyro "Stay safe online" guide, United States topics. Every fact is from the fact sheet safety-facts-us.txt (official US government pages read on 23 October 2026).
module.exports = {
  SOURCES: {
    cisaPasswords: { name: "CISA: Use Strong Passwords (undated; marked Archived Content)", url: "https://www.cisa.gov/secure-our-world/use-strong-passwords" },
    ftcProtect: { name: "FTC: Protect Your Personal Information From Hackers and Scammers (November 2024)", url: "https://consumer.ftc.gov/articles/protect-your-personal-information-hackers-and-scammers" },
    cisaMfa: { name: "CISA: Turn On MFA (undated; marked Archived Content)", url: "https://www.cisa.gov/secure-our-world/turn-mfa" },
    ftc2fa: { name: "FTC: Use Two-Factor Authentication To Protect Your Accounts (September 2022)", url: "https://consumer.ftc.gov/articles/use-two-factor-authentication-protect-your-accounts" },
    ftcSimSwap: { name: "FTC: SIM Swap Scams, How to Protect Yourself (23 October 2019)", url: "https://consumer.ftc.gov/consumer-alerts/2019/10/sim-swap-scams-how-protect-yourself" },
    cisaUpdate: { name: "CISA: Update Software (undated; marked Archived Content)", url: "https://www.cisa.gov/secure-our-world/update-software" },
    cisaDevices: { name: "CISA: How to Protect the Data that is Stored on Your Devices (undated training page)", url: "https://www.cisa.gov/resources-tools/training/how-protect-data-stored-your-devices" },
    cisaBizBackup: { name: "CISA: Back Up Business Data (undated; written for businesses)", url: "https://www.cisa.gov/audiences/small-and-medium-businesses/secure-your-business/back-up-business-data" },
    cisaPhishing: { name: "CISA: Recognize and Report Phishing (undated; marked Archived Content)", url: "https://www.cisa.gov/secure-our-world/recognize-and-report-phishing" },
    ftcPhishing: { name: "FTC: How To Recognize and Avoid Phishing Scams (September 2022)", url: "https://consumer.ftc.gov/articles/how-recognize-and-avoid-phishing-scams" },
    fccRobocalls: { name: "FCC: Stop Unwanted Robocalls and Texts (27 February 2026)", url: "https://www.fcc.gov/consumers/guides/stop-unwanted-robocalls-and-texts" },
    fccSpoofing: { name: "FCC: Caller ID Spoofing (13 November 2024)", url: "https://www.fcc.gov/consumers/guides/spoofing" },
    fccDeepfake: { name: "FCC: Deep-Fake Audio and Video Links Make Robocalls and Scam Texts Harder to Spot (8 June 2024)", url: "https://www.fcc.gov/consumers/guides/deep-fake-audio-and-video-links-make-robocalls-and-scam-texts-harder-spot" },
    ftcFakeEmerg: { name: "FTC: Scammers Use Fake Emergencies To Steal Your Money (September 2023)", url: "https://consumer.ftc.gov/articles/scammers-use-fake-emergencies-steal-your-money" },
    ftcAiFamily: { name: "FTC: Scammers use AI to enhance their family emergency schemes (20 March 2023)", url: "https://consumer.ftc.gov/consumer-alerts/2023/03/scammers-use-ai-enhance-their-family-emergency-schemes" },
    ftcImposter: { name: "FTC: How To Avoid Imposter Scams (undated)", url: "https://consumer.ftc.gov/features/how-avoid-imposter-scams" },
    ftcGovImp: { name: "FTC: How To Avoid a Government Impersonation Scam (November 2023)", url: "https://consumer.ftc.gov/articles/how-avoid-government-impersonation-scam" },
    ssaThink: { name: "SSA Office of the Inspector General: Unexpected Call or Message? Think Scam First (31 July 2025)", url: "https://oig.ssa.gov/scam-alerts/2025-07-31-unexpected-call-or-message-think-scam-first/" },
    ssaTransfer: { name: "SSA Office of the Inspector General: Beware of Fake Call Transfers to Social Security or OIG (29 July 2026)", url: "https://oig.ssa.gov/scam-alerts/2026-07-29-beware-of-fake-call-transfers-to-social-security-or-oig/" },
    irsReport: { name: "IRS: Report fake IRS, Treasury or tax-related emails and messages (reviewed 30 July 2026)", url: "https://www.irs.gov/help/report-fraud/report-fake-irs-treasury-or-tax-related-emails-and-messages" },
    ftcTech: { name: "FTC: How To Spot, Avoid, and Report Tech Support Scams (September 2025)", url: "https://consumer.ftc.gov/articles/how-spot-avoid-and-report-tech-support-scams" },
    ftcRomance: { name: "FTC: What To Know About Romance Scams (August 2022)", url: "https://consumer.ftc.gov/articles/what-know-about-romance-scams" },
    ftcGift: { name: "FTC: Avoiding and Reporting Gift Card Scams (July 2023)", url: "https://consumer.ftc.gov/articles/paying-scammers-gift-cards" },
    ftcScammed: { name: "FTC: What To Do if You Were Scammed (June 2026)", url: "https://consumer.ftc.gov/articles/what-do-if-you-were-scammed" },
    ftcHacked: { name: "FTC: How To Recover Your Hacked Email or Social Media Account (August 2023)", url: "https://consumer.ftc.gov/articles/how-recover-your-hacked-email-or-social-media-account" },
    itgLost: { name: "IdentityTheft.gov: When Information is Lost or Exposed (undated)", url: "https://www.identitytheft.gov/Info-Lost-or-Stolen" },
    itgHome: { name: "IdentityTheft.gov home page (undated)", url: "https://www.identitytheft.gov/" },
    itgSteps: { name: "IdentityTheft.gov: Recovery Steps (undated; headings only read)", url: "https://www.identitytheft.gov/Steps" },
    ftcMalware: { name: "FTC: Malware, How To Protect Against, Detect, and Remove It (April 2025)", url: "https://consumer.ftc.gov/articles/how-recognize-remove-avoid-malware" },
    ftcIdTheft: { name: "FTC: What To Know About Identity Theft (September 2024)", url: "https://consumer.ftc.gov/articles/what-know-about-identity-theft" },
    ftcFreezes: { name: "FTC: Credit Freezes and Fraud Alerts (August 2025)", url: "https://consumer.ftc.gov/articles/credit-freezes-and-fraud-alerts" },
    ftcFreeReports: { name: "FTC: Free Credit Reports (June 2026)", url: "https://consumer.ftc.gov/articles/free-credit-reports" },
    cisaRansom101: { name: "CISA: Ransomware 101 (undated)", url: "https://www.cisa.gov/stopransomware/ransomware-101" },
    cisaStopRansom: { name: "CISA: Stop Ransomware (undated)", url: "https://www.cisa.gov/stopransomware" },
    cisaHitRansom: { name: "CISA: I've Been Hit By Ransomware! (updated May 2023; written for organizations)", url: "https://www.cisa.gov/stopransomware/ive-been-hit-ransomware" },
    cisaRansomGuide: { name: "CISA: #StopRansomware Guide (September 2023; written for organizations)", url: "https://www.cisa.gov/stopransomware/ransomware-guide" },
    reportFraud: { name: "FTC: ReportFraud.ftc.gov (undated)", url: "https://reportfraud.ftc.gov/" },
    ic3: { name: "FBI Internet Crime Complaint Center (IC3) home page (undated)", url: "https://www.ic3.gov/" },
    ssaOigReport: { name: "SSA Office of the Inspector General: Report Fraud (undated)", url: "https://oig.ssa.gov/report/" },
    ssaScam: { name: "SSA: Protect Yourself from Social Security Scams (note dated 29 July 2026)", url: "https://www.ssa.gov/scam/" },
    cfpbComplaint: { name: "CFPB: Submit a complaint (last modified 5 October 2026)", url: "https://www.consumerfinance.gov/complaint/" },
    fccComplaints: { name: "FCC: Consumer Complaint Center (undated)", url: "https://consumercomplaints.fcc.gov/hc/en-us" },
    ovcElder: { name: "Office for Victims of Crime, U.S. Department of Justice: National Elder Fraud Hotline (undated)", url: "https://ovc.ojp.gov/program/stop-elder-fraud/providing-help-restoring-hope" },
    ftcPublicWifi: { name: "FTC: Are Public Wi-Fi Networks Safe? What You Need To Know (February 2023)", url: "https://consumer.ftc.gov/articles/are-public-wi-fi-networks-safe-what-you-need-know" },
    ftcHomeWifi: { name: "FTC: How To Secure Your Home Wi-Fi Network (December 2022)", url: "https://consumer.ftc.gov/articles/how-secure-your-home-wi-fi-network" }
  },

  TOPICS: {
    "safe-overview": {
      title: "Staying safe online: what I can help with",
      kind: "safety",
      sources: ["ftc2fa", "fccRobocalls", "ftcProtect", "ic3"],
      text: "I can help you stay safe from scams, fake messages and calls, hijacked accounts, identity theft and locked files. I can also tell you what to do right now if something has already happened, and where to report it. This is for people in the United States. Here is the one rule. Never give a password, a PIN or a code to someone who contacts you. That includes the code sent to your phone when you sign in. The Federal Trade Commission, or FTC, says never to share a verification code, and not to share one unless you contacted that party first. The Federal Communications Commission, or FCC, says never to share account numbers, Social Security numbers, passwords or PINs over the phone. I will never ask you for a password, a PIN, a code or an account number. I cannot check whether a particular message, caller, number, website, file or person is real. If something might be real, do not use the link or number it gave you. Contact the company using a phone number or website you know is genuine, such as the number on your statement. When something goes wrong, act quickly. You can ask me about passwords, two-step sign-in, updates and backups, fake messages, phone scams, payment scams, a hacked account, identity theft, locked files, where to report, and public Wi-Fi. I only say what official government pages said, and I tell you when a page is old or does not cover your question. If you are in immediate danger, call 911 or your local police."
    },

    "safe-passwords": {
      title: "Strong passwords and password managers",
      kind: "safety",
      sources: ["cisaPasswords", "ftcProtect"],
      text: "A strong password is long, random and different for every account. Do not use simple ones like 12345, or personal details such as birthdays and pet names. The two official pages give different lengths. The CISA page, which is undated and marked Archived Content, says at least 16 characters. The FTC page from November 2024 says at least 15 characters. Both agree it should be long. Random means either a mix of upper and lower case letters, numbers and symbols, or a passphrase, which is four to seven unrelated words, and CISA says spaces are allowed. The FTC says to avoid common phrases, song lyrics and movie quotes. Unique means a different strong password for every account. CISA's example is a person who reused one password, saw it in a breach posted online, and was locked out of her bank and email. Do not try to remember every password, and do not save them in a file on a computer. A password manager is a program that makes, stores and fills in passwords for you, so you only remember one strong password, its own. CISA says browsers have free built in ones. The FTC says to read expert reviews to pick a reputable one, make its master password strong, and protect it like your others. The pages do not give steps for any particular password manager, and do not say what to do if you forget the master password. They do not mention paper notebooks. Never tell me, or anyone who contacts you, your passwords."
    },

    "safe-two-step": {
      title: "Two-step sign-in",
      kind: "safety",
      sources: ["cisaMfa", "ftc2fa", "ftcSimSwap", "ftcProtect"],
      text: "Two-step sign-in, also called two-factor or multi-factor authentication, asks for a second proof besides your password. Then a thief who steals your password still cannot get in. The FTC says to start with your bank, credit cards, email, social media, tax filing website and payment apps. To turn it on, go to the account's settings. Look under your profile for Account Settings, Profile, Preferences, Privacy or Security. Find a setting called two-factor, two-step or multi-factor, switch it on, and pick a method. The FTC lists methods strongest first: a security key, which is a small physical device; an authenticator app, which makes a new code about every 30 seconds, says CISA; and a code sent by text or email, usually six digits and used once. The FTC says a text or email code is better than nothing if it is your only choice. A SIM swap is when a scammer talks your phone company into moving your number to their phone, so they get your texts. The FTC's 2019 alert says to set a PIN or password on your phone account, and to use an authentication app or security key for sensitive accounts. If your phone suddenly loses service, contact your phone company right away. Only let a site remember your device if it is your own, never on a public computer. Never share a code with someone who contacts you. The pages do not say what to do if you lose the phone with your authenticator app or your security key, and give no steps for particular apps or phone companies."
    },

    "safe-sim": {
      title: "SIM swap: when a scammer takes over your phone number",
      kind: "safety",
      sources: ["ftcSimSwap", "ftc2fa"],
      text: "A SIM swap is when a scammer takes over your phone number. The FTC alert on this is from 23 October 2019, so it is an older page. It says the scammer contacts your phone company, says your phone was lost or damaged, and asks to move your number to a new SIM card on a phone the scammer has. A SIM card is the small chip that links a phone to your number. If the company agrees, the scammer gets your calls, texts and data. They can open phone accounts or buy phones in your name. They can also receive the text codes your bank, email and social media send, then change your passwords and lock you out. The FTC's 2022 two-factor page also warns that SIM swaps can let hackers get your texts. Warning signs: your phone suddenly loses data, texting or calling service, or your phone company tells you a SIM was activated on a new device. If it happened, the alert says: contact your phone company right away to get your number back; change your account passwords once you have it back; check your credit card, bank and other money accounts for charges or changes you did not make, and report them to the company; and if your Social Security, credit card or bank account number may be exposed, go to IdentityTheft.gov. To protect yourself, do not answer unexpected requests for personal information by call, email or text; post less personal information online; set a PIN or password on your phone account; and for sensitive accounts use an authentication app or security key instead of text codes. The pages give no phone company numbers or company steps, do not say what else a company can do to lock your number, and give no time limit."
    },

    "safe-updates-backups": {
      title: "Software updates and backups",
      kind: "safety",
      sources: ["cisaUpdate", "ftcProtect", "cisaDevices", "cisaBizBackup"],
      text: "Install updates as soon as you can, because criminals look for weak points before they are fixed. CISA, on an undated page marked Archived Content, says to update your operating system, programs and apps, especially web browsers and antivirus software. It says to avoid choosing Remind me later, and to turn on automatic updates in your device settings, which may be under Software or Security. The FTC, in November 2024, says to turn on automatic updates for security software, your browser, your operating system and mobile apps. Backups matter too, because data can be lost for good if a device is lost, stolen or damaged. A CISA training page, undated, says to back up often, to an external hard drive or a cloud service you have checked is trustworthy. Do not leave the external drive plugged in when you are not backing up, because ransomware, which locks your files, could use the connection to damage your backups. The page names built in tools: Microsoft's cloud backup on Windows, Time Machine or iCloud Drive on a Mac, iCloud for iPhone and iPad, and the Settings app on Android. A CISA page for businesses suggests three copies of important files, on two kinds of storage, with one kept somewhere else. The pages do not say how often beyond often, give no steps for each device, give no costs, and do not say what to do with a device too old to update. For help, ask the device maker or someone you trust."
    },

    "safe-phishing": {
      title: "Fake emails, texts and links",
      kind: "safety",
      sources: ["cisaPhishing", "ftcPhishing", "irsReport", "ftcTech", "ftcScammed"],
      text: "Phishing is a fake email, text, message or call that tries to get you to click a link, open an attachment, or give up passwords, account numbers or your Social Security number. Do not click links or open attachments in an unexpected message. Warning signs from the FTC and CISA: threats or urgent language; a claim of suspicious activity or a problem with your account or payment; a request to confirm personal or financial information; an invoice you do not recognize; a link to make a payment; a refund or free coupon; shortened links; misspelled web addresses. CISA says bad grammar used to be a sign, but AI can now write perfect text. The FTC says real companies will not email or text a link to update your payment information. Delete it. Do not reply, and do not click anything, even an unsubscribe link. If it might be real, contact the company using a number or website you know is genuine, not the one in the message. If you clicked and harmful software may have downloaded, update your security software, run a scan and remove what it flags. If you typed a password, change it, and change it anywhere else you used it. If someone has your Social Security, card or bank account number, go to IdentityTheft.gov. To report: forward fake emails to reportphishing@apwg.org, a non government group the FTC names; forward fake texts to 7726, which spells SPAM, and check with your phone company; and report all phishing at ReportFraud.ftc.gov. For fake IRS messages, email phishing@irs.gov. I cannot tell you if a particular message is real. The FTC page is from 2022 and does not cover QR codes."
    },

    "safe-phone-scams": {
      title: "Scam calls, spoofed numbers and impersonators",
      kind: "safety",
      sources: ["fccRobocalls", "fccSpoofing", "fccDeepfake", "ftcFakeEmerg", "ftcAiFamily", "ftcGovImp", "ssaTransfer", "ftcImposter"],
      text: "If a caller asks for money or personal information, hang up. The FCC says, don't hang on, hang up. Caller ID can be faked, which is called spoofing, so a call can look local or look like your bank or a government agency. Do not answer numbers you do not know. If you do, do not press any button, even to stop calls, and do not answer yes or no questions. Never give account numbers, Social Security numbers, passwords or PINs over the phone. If someone says they are from a company or agency, hang up and call back on a number from your statement or the official website. A caller asking for a gift card is a scammer. Government agencies will not demand money or personal information by call, email, text or social media, and will not take payment by wire, gift card, cryptocurrency or payment app. The Social Security inspector general's July 2026 alert says a call transferred to someone claiming to be Social Security is a scam. The FTC says anyone who tells you to move your money to protect it is a scammer. For a family emergency call, scammers can copy a voice from a short audio clip. Hang up, and call that person on a number you know is right, or reach another relative. The FTC says you can ask a question only the real person would know. AI voice calls are illegal unless you agreed, with exceptions. Set a password on your voicemail. Report to ReportFraud.ftc.gov and at consumercomplaints.fcc.gov. The pages give no way to detect a cloned voice and do not recommend a family code word."
    },

    "safe-payment-scams": {
      title: "Scams that ask for gift cards, wires, crypto or apps",
      kind: "safety",
      sources: ["ftcScammed", "ftcGift", "ftcTech", "ftcRomance", "ftcFakeEmerg"],
      text: "Scammers ask for payments that are hard to get back: gift cards, wire transfers such as Western Union and MoneyGram, cryptocurrency, payment apps and bank transfers. The FTC says anyone who asks you to pay with a gift card is a scammer. If you already paid, act right away. From the FTC page of June 2026: for a bank transfer such as Zelle, tell your bank or credit union and ask them to reverse it. For a payment app such as Venmo, Cash App or PayPal, report to the app. For a wire, tell the wire company you were tricked. For a credit or debit card, tell the card company or your bank, and ask for a refund. For a gift card, call the number on the card, say a scammer tricked you into giving the number and PIN, and keep the card and receipt. For cryptocurrency, contact the exchange or ATM operator; the FTC says crypto has fewer legal protections. For cash sent by U.S. mail, call the Postal Inspection Service at 1-877-876-2455. If a scammer got access to your computer or phone, update your security software, run a scan, change your passwords and turn on two-step sign-in. In a romance scam, the FTC says never send money or gifts to a sweetheart you have not met in person. In a tech support scam, real security pop-ups never ask you to call a number. Report at ReportFraud.ftc.gov. The pages promise no refund. Gift card company numbers on the FTC's 2023 page can change, so use the number on the card."
    },

    "safe-hacked-account": {
      title: "What to do if an account was hacked",
      kind: "safety",
      sources: ["ftcHacked", "itgLost", "ftcScammed", "ftcSimSwap"],
      text: "Signs of a hack: you cannot log in; you get a notice of a password change you did not make, or a login from a place or device you do not know; or friends get messages you did not send. Here is what the FTC says, in order. First, clean your device. Make sure your security software is up to date, run a scan, delete anything suspicious it finds, and restart. Second, recover the account by following the company's own recovery steps. The FTC page links to them for Facebook, Google, Instagram, Microsoft, Yahoo and others. If you cannot log in, contact the company and ask how to recover or shut down the account. Third, once you are back in, change to a strong password, sign out of all devices, turn on two-step sign-in if offered, and check that the recovery email and phone numbers are yours. Fourth, look for signs of the hacker: email forwarding rules you did not make, which you should delete, your Sent and Deleted folders, and posts or new friends you do not know. Fifth, tell your contacts not to click links from you and to ignore pleas for money. Email matters most, because whoever has it can reset your other passwords. Change a password anywhere you reused it. If it is a money account, check for charges or changes you do not recognize. If your phone lost service suddenly, contact your phone company right away. The pages do not cover bank app takeovers or how long recovery takes."
    },

    "safe-identity-theft": {
      title: "Identity theft: steps, credit freeze and fraud alert",
      kind: "safety",
      sources: ["itgSteps", "itgLost", "itgHome", "ftcIdTheft", "ftcFreezes", "ftcFreeReports"],
      text: "Identity theft is when someone uses your personal or financial information without permission. Right away, says IdentityTheft.gov: call the companies where you know fraud happened, place a fraud alert and get your credit reports, and report it at IdentityTheft.gov. That site makes a personal recovery plan. A September 2024 FTC article gives the phone 877-438-4338. A credit freeze means nobody can open a new credit account in your name until you lift it. It is free to place or lift, and lasts until you lift it. Contact all three bureaus: Experian at 888-397-3742, TransUnion at 888-909-8872, Equifax at 800-685-1111. A fraud alert makes businesses check your identity. An initial alert is free and lasts one year; contact one bureau and it must tell the other two. An extended alert lasts seven years and needs an FTC identity theft report or a police report. You can use both together. Free credit reports are at AnnualCreditReport.com, or call 1-877-322-8228. The site offers a free report from each bureau once a week. Fake sites use look-alike addresses, and the real one will not email you for your Social Security number. The FTC says credit monitoring does not alert you to bank withdrawals or a tax return filed in your name. The pages I read do not say how fast a freeze takes effect, and the IRS pages on stolen tax refunds were not read. Numbers can change, so check the official site."
    },

    "safe-ransomware": {
      title: "Ransomware: locked files",
      kind: "safety",
      sources: ["cisaRansom101", "cisaStopRansom", "cisaHitRansom", "cisaRansomGuide", "ftcMalware", "cisaDevices"],
      text: "Ransomware is harmful software that locks the files on a device so you cannot use them. The attacker demands a payment to unlock them, and often threatens to sell or leak stolen data. The official pages I read do not say whether to pay, so I will not say either way. I also could not read the FBI's own ransomware page. CISA's steps are written for organizations, not home users. They say to separate affected devices from the network right away, by unplugging them or taking them off Wi-Fi. Power a device down only if you cannot disconnect it, because powering down loses evidence. Report to CISA, the FBI, the FBI's Internet Crime Complaint Center at ic3.gov, or the Secret Service. CISA's phone is 1-844-Say-CISA, which is 1-844-729-2472. CISA says to ask federal law enforcement about tools to unlock files, and, after clean-up, to reset passwords and restore from offline backups without reinfecting clean systems. The FTC asks you to report any ransomware demanding payment at ReportFraud.ftc.gov. CISA pages call backups the best hope of recovery, and say an external drive left plugged in can let ransomware damage them. The pages give no steps for one home laptop. For help, the FTC says to ask the device maker, a tech support company you know and trust, or a knowledgeable friend or family member. I cannot check your files or tell you what has happened to them."
    },

    "safe-report": {
      title: "Where to report scams and fraud",
      kind: "safety",
      sources: ["reportFraud", "ic3", "itgHome", "ftcIdTheft", "ssaOigReport", "ssaScam", "fccComplaints", "irsReport", "ftcGovImp", "cfpbComplaint", "ovcElder"],
      text: "If you are in immediate danger, call 911 or the local police. Otherwise, report to the right place. Most scams: ReportFraud.ftc.gov. The Social Security page says the FTC phone is 877-382-4357, and press 3 for an interpreter. Cyber crime and online fraud: the FBI's Internet Crime Complaint Center at ic3.gov. It says it will never contact you for information or money, and does not work with law firms or crypto recovery services. Identity theft: IdentityTheft.gov, or 877-438-4338 from a September 2024 article. Social Security scams: oig.ssa.gov/report. Unwanted calls and texts, or a spoofed number: consumercomplaints.fcc.gov; the FCC does not resolve individual complaints. Fake IRS messages: phishing@irs.gov, and the Treasury Inspector General at tigta.gov or 800-366-4484. Problems with a bank, loan, credit report or debt collector: the Consumer Financial Protection Bureau at consumerfinance.gov/complaint, or 855-411-2372, 9 a.m. to 6 p.m. Eastern, Monday to Friday except federal holidays. If you are 60 or older, the National Elder Fraud Hotline: 833-372-8311, free, Monday to Friday, 10 a.m. to 6 p.m. Eastern. Someone who knows you can call for you. Scammers copy that hotline, so if a caller claims to be it, report them to the FTC. The FTC and CFPB pages also say to tell local police and your state attorney general. These pages do not promise to get money back. Check hours and numbers on the official site."
    },

    "safe-public-wifi": {
      title: "Public and home Wi-Fi",
      kind: "safety",
      sources: ["ftcPublicWifi", "ftcHomeWifi"],
      text: "On public Wi-Fi, such as in a cafe or hotel, check for a lock symbol or the letters https in the address bar before you enter sensitive information. The FTC page from February 2023 says widespread encryption, which scrambles data as it travels, now makes public networks usually safe. But scammers can make fake websites that also use encryption, and then your information is still unsafe, so the lock does not prove a site is real. The FTC also says to use strong passwords and two-step sign-in, and to keep your security software, operating system, browser and phone updated, with automatic updates turned on. At home, the FTC's December 2022 page says to set your router to WPA3 Personal or WPA2 Personal, and that older settings are out of date. Change the router's default admin username and password, and the network name, to ones that are not your name, address or router brand. The Wi-Fi password and the router admin password are different, so change both. Keep the router's software updated, turn off remote management, WPS and UPnP, set up a guest network, and make sure the firewall is on. If the internet provider gave you the router, ask them about updates. The pages do not mention VPNs, and do not say whether to avoid banking on public Wi-Fi. They give no steps for particular router brands. I cannot check if a network is safe. Report scammers at ReportFraud.ftc.gov."
    }
  },

  PHRASES: {
    "safe-overview": ["How can you help me stay safe online?", "What should I never give out to someone who calls me?", "I think I'm being scammed, where do I start?"],
    "safe-passwords": ["How do I make a strong password?", "How long should my password be?", "What is a password manager?"],
    "safe-two-step": ["What is two-factor authentication?", "How do I turn on two-step sign-in?", "What is a security code, and who can I give it to?"],
    "safe-sim": ["What is a SIM swap?", "My phone suddenly lost service and I think someone took my number", "How do I stop someone from stealing my phone number?"],
    "safe-updates-backups": ["Why should I update my phone?", "How do I back up my files?", "Should I turn on automatic updates?"],
    "safe-phishing": ["How do I spot a fake text message?", "Is this email a scam?", "What is phishing?"],
    "safe-phone-scams": ["Someone called saying they are from Social Security, is it real?", "How do I know if a call is a scam?", "A caller sounded like my grandson and asked for money"],
    "safe-payment-scams": ["I paid a scammer with a gift card, what do I do?", "Can I get my money back after a scam?", "A man I met online asked me for money"],
    "safe-hacked-account": ["My email got hacked, what do I do?", "Someone is sending messages from my account", "I can't log in to my account anymore"],
    "safe-identity-theft": ["Someone stole my identity, what now?", "How do I protect myself from identity theft?", "What do I do if someone uses my Social Security number?"],
    "safe-ransomware": ["All my files are locked and they want money", "What is ransomware?", "My computer says I have to pay to get my files back"],
    "safe-report": ["Where do I report a scam?", "Who do I call about fraud?", "Is there a number to call to report a scam?"],
    "safe-public-wifi": ["Is public Wi-Fi safe?", "How do I secure my home Wi-Fi?", "Is it safe to use the Wi-Fi at the airport?"]
  },

  KEYS: {
    "safe-overview": "Never give a password, a PIN or a code",
    "safe-passwords": "at least 16 characters",
    "safe-two-step": "second proof besides your password",
    "safe-sim": "takes over your phone number",
    "safe-updates-backups": "Install updates as soon as you can",
    "safe-phishing": "Do not click links or open attachments",
    "safe-phone-scams": "don't hang on, hang up",
    "safe-payment-scams": "hard to get back",
    "safe-hacked-account": "First, clean your device",
    "safe-identity-theft": "call the companies where you know fraud",
    "safe-ransomware": "do not say whether to pay",
    "safe-report": "ReportFraud.ftc.gov",
    "safe-public-wifi": "check for a lock symbol"
  }
};
