"use strict";

// Kyro "Coming home" guide, United States topics, part C (phone, internet, scams, phone safety, accounts).
// Every fact is from fact sheets reentry-facts-c.txt and reentry-facts-e.txt (official pages read on 26 October 2026).
module.exports = {
  SOURCES: {
    lifelineHome: { name: "Lifeline Support, run by USAC for the FCC: home page (undated)", url: "https://www.lifelinesupport.org/" },
    lifelineAbout: { name: "Lifeline Support, run by USAC for the FCC: About Lifeline (undated)", url: "http://www.lifelinesupport.org/about-lifeline/" },
    lifelineQualify: { name: "Lifeline Support, run by USAC for the FCC: How to Qualify (undated)", url: "https://www.lifelinesupport.org/how-to-qualify/" },
    lifelineApply: { name: "Lifeline Support, run by USAC for the FCC: How to Apply (undated)", url: "https://www.lifelinesupport.org/how-to-apply/" },
    lifelineCompanies: { name: "Lifeline Support, run by USAC for the FCC: Companies Near Me (undated)", url: "https://www.lifelinesupport.org/companies-near-me/" },
    fccLifeline: { name: "FCC: Lifeline Program for Low-Income Consumers (undated)", url: "https://www.fcc.gov/general/lifeline-program-low-income-consumers" },
    usacAcp: { name: "USAC: Affordable Connectivity Program (undated)", url: "https://www.usac.org/about/affordable-connectivity-program/" },
    ftcAvoidScam: { name: "FTC: How To Avoid a Scam (July 2023)", url: "https://consumer.ftc.gov/articles/how-avoid-scam" },
    ftcSpamText: { name: "FTC: How to Recognize and Report Spam Text Messages (July 2022)", url: "https://consumer.ftc.gov/articles/how-recognize-and-report-spam-text-messages" },
    ftcRobocalls: { name: "FTC: Robocalls (September 2023)", url: "https://consumer.ftc.gov/articles/robocalls" },
    ftcScammed: { name: "FTC: What To Do if You Were Scammed (June 2026)", url: "https://consumer.ftc.gov/articles/what-do-if-you-were-scammed" },
    ftcIdTheft: { name: "FTC: What To Know About Identity Theft (September 2024)", url: "https://consumer.ftc.gov/articles/what-know-about-identity-theft" },
    identityTheftGov: { name: "FTC: IdentityTheft.gov home page (undated)", url: "https://www.identitytheft.gov/" },
    ftcPhone: { name: "FTC: How To Protect Your Phone From Hackers (July 2022)", url: "https://consumer.ftc.gov/articles/how-protect-your-phone-hackers" },
    ftcBlockCalls: { name: "FTC: How To Block Unwanted Calls (July 2023)", url: "https://consumer.ftc.gov/articles/how-block-unwanted-calls" },
    ftcPublicWifi: { name: "FTC: Are Public Wi-Fi Networks Safe? What You Need To Know (February 2023)", url: "https://consumer.ftc.gov/articles/are-public-wi-fi-networks-safe-what-you-need-know" },
    cisaChoosing: { name: "CISA: Choosing and Protecting Passwords (released 2009, revised 18 November 2019; marked archived)", url: "https://www.cisa.gov/news-events/news/choosing-and-protecting-passwords" },
    cisaPhysical: { name: "CISA: Protect the Physical Security of Your Digital Devices (undated training page)", url: "https://www.cisa.gov/resources-tools/training/protect-physical-security-your-digital-devices" },
    cisaStrong: { name: "CISA: Use Strong Passwords (undated; marked archived)", url: "https://www.cisa.gov/secure-our-world/use-strong-passwords" },
    ftcProtectInfo: { name: "FTC: Protect Your Personal Information From Hackers and Scammers (November 2024)", url: "https://consumer.ftc.gov/articles/protect-your-personal-information-hackers-and-scammers" },
    loginWhat: { name: "Login.gov (U.S. General Services Administration): What is Login.gov (undated)", url: "https://www.login.gov/what-is-login/" },
    loginCreate: { name: "Login.gov (U.S. General Services Administration): How do I create a Login.gov account (undated)", url: "https://www.login.gov/help/create-account/how-do-i-create-an-account/" },
    vaLogin: { name: "U.S. Department of Veterans Affairs: How to create a Login.gov account for VA (updated 16 July 2026)", url: "https://www.va.gov/resources/how-to-create-a-logingov-account-for-va/" }
  },

  TOPICS: {
    "reentry-phone-lifeline": {
      title: "Lifeline: a discount on a phone or internet bill",
      kind: "reentry",
      sources: ["lifelineHome", "lifelineAbout", "lifelineQualify", "lifelineApply", "lifelineCompanies", "fccLifeline", "usacAcp"],
      text: "Lifeline is a government program that lowers the monthly cost of a phone, internet, or both. The standard discount is up to $9.25 a month. On some Tribal lands it is up to $34.25. You may qualify by your income, or by being in a program such as SNAP, which is food help, or Medicaid, which is health coverage. You do not need to tell me about your case. You can apply online at getinternet.gov, through a phone or internet company, or by mail. Not every company offers Lifeline, so ask first. You may be asked for proof, such as a benefit letter or pay stubs from three months in a row. The pages do not say what to do if you have no ID or no address, so call the help line at (800) 234-9473. It is open every day, 9 a.m. to 9 p.m. Eastern time. Three rules. There is one discount for each household. If you share a home, ask the company how it counts a household. If you pay nothing out of your own pocket, use the service at least once every 30 days, or you can lose it. If you are asked to renew, answer within 60 days. Tell your company within 30 days if you move or stop qualifying. The Affordable Connectivity Program has ended, and no page I read shows it back. I read these pages on 26 October 2026. I can walk you through the first step."
    },

    "reentry-scams": {
      title: "Spotting scams, and what to do if you were scammed",
      kind: "reentry",
      sources: ["ftcAvoidScam", "ftcSpamText", "ftcRobocalls", "ftcScammed", "ftcIdTheft", "identityTheftGov"],
      text: "A scam is a trick to get your money or your private information. The Federal Trade Commission, or FTC, lists four signs. The person pretends to be someone you know, like a government office. They say there is a problem or a prize. They push you to act right now. They ask you to pay in a strange way, like a gift card, a wire transfer, a payment app, or cryptocurrency. Caller ID can be faked. Do not click a link in a text you did not expect. Look up the real number yourself and call it. A real FTC worker will never threaten you or tell you to move your money to protect it. If you were scammed, how you paid matters. Card or bank: tell them right away and ask for a refund. Gift card: tell the company on the card, and keep the card and the receipt. Wire, payment app, or crypto: tell that company and ask them to reverse it. Cash sent by mail: call the Postal Inspection Service at 1-877-876-2455. The page does not promise a refund. Then report it at ReportFraud.ftc.gov. You can forward a scam text to 7726. If a scammer may have your Social Security number, go to IdentityTheft.gov or call 1-877-438-4338. You do not need to tell me the details. Pages read 26 October 2026."
    },

    "reentry-phone-safety": {
      title: "Keeping a phone safe, and using a public computer",
      kind: "reentry",
      sources: ["ftcPhone", "ftcSpamText", "ftcRobocalls", "ftcBlockCalls", "ftcPublicWifi", "cisaChoosing", "cisaPhysical"],
      text: "Here is how to keep a phone safe, from Federal Trade Commission pages. First, lock it with a passcode. The page says to use at least a 6-digit passcode. You can also unlock with a fingerprint or your face. Next, set the phone and its apps to update by themselves. Then turn on the setting that finds a lost phone and lets you lock or erase it. Also back up your data. The pages say nothing about a phone someone gave you, so I cannot say more about that. For calls and texts, do not click a link in a text you did not expect. A robocall is a recorded call. Hang up and do not press any number. To report a spam text, forward it to 7726. Ask your phone company about blocking calls. On a public or library computer, the Cybersecurity and Infrastructure Security Agency, or CISA, says to sign out when you finish. It says to avoid banking and email there. Saved passwords and open sessions can show your information to the next person. Lock the screen if you step away. That CISA page was last changed in 2019 and is marked archived. The pages say little more. Library rules differ, so ask the library staff."
    },

    "reentry-accounts": {
      title: "Login.gov: one account for government websites",
      kind: "reentry",
      sources: ["loginWhat", "loginCreate", "vaLogin", "cisaStrong", "ftcProtectInfo", "cisaChoosing"],
      text: "A Login.gov account is one account you use to sign in to many United States government websites. One the page names is USAJOBS, a government jobs site. The pages do not say if it costs anything. You need an email address you will always be able to reach. I have no official page on how to get one, so a library worker may help. Steps, in order. First, go to secure.login.gov/sign_up/enter_email and enter your email. Next, open the email from Login.gov and click Confirm your email address. Then make a password. Login.gov needs at least 12 characters. Other government pages say 15 or 16. So make it long, because a long password is harder to guess. A few unrelated words works well. Do not use a birthday, a song, or a password from another account. Do not share it or leave it where others can find it. Last, set up a second way to prove it is you, such as a code sent to your phone. Login.gov requires this. Choose more than one way. If you lose all your ways, you may have to start a new account. Never type or say a password to me. On a library computer, sign out when you finish. I can walk you through it."
    }
  },

  PHRASES: {
    "reentry-phone-lifeline": [
      "Is there a way to get a cheaper phone bill?",
      "How do I get the government discount on my phone?",
      "Can I get free or low cost internet?"
    ],
    "reentry-scams": [
      "How can I tell if a text or a call is a scam?",
      "Somebody tricked me out of money, what do I do?",
      "Where do I report a scam?"
    ],
    "reentry-phone-safety": [
      "How do I keep my phone safe?",
      "What should I do before I leave a library computer?",
      "I keep getting spam calls and texts, what do I do?"
    ],
    "reentry-accounts": [
      "What is a Login.gov account?",
      "How do I make an account for a government website?",
      "How do I make a good password?"
    ]
  },

  KEYS: {
    "reentry-phone-lifeline": "lowers the monthly cost",
    "reentry-scams": "four signs",
    "reentry-phone-safety": "lock it with a passcode",
    "reentry-accounts": "one account you use"
  }
};
