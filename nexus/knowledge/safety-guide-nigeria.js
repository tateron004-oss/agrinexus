"use strict";
// Stay safe online, Nigeria. Written from the fact sheet safety-facts-nigeria.txt (pages read 23 October 2026). Facts only from that sheet.
module.exports = {
  SOURCES: {
    nccDnd2026: { name: "NCC Consumer Portal: Do-Not-Disturb (DND) Service in Nigeria (published 6 March 2026)", url: "https://consumer.ncc.gov.ng/articles/111-do-not-disturb-dnd-service-in-nigeria" },
    nccDnd2022: { name: "NCC Consumer Portal: Understanding DND (published 28 March 2022)", url: "https://consumer.ncc.gov.ng/articles/67-understanding-dnd" },
    nccUnsolicited: { name: "NCC Consumer Portal: Rules on Unsolicited Calls and SMS (published 17 August 2018)", url: "https://consumer.ncc.gov.ng/articles/33-rules-on-unsolicited-calls-and-sms" },
    nccPress622: { name: "NCC press release: NCC urges consumers to take advantage of 622 toll-free line and DND 2442 (event of 26 September 2019)", url: "https://www.ncc.gov.ng/media-centre/press-releases/ncc-urges-consumers-take-advantage-622-toll-free-line-and-dnd-2442" },
    nccTelemarketers: { name: "NCC public notice: Unauthorised use of telecom subscriber's phone numbers and other personal information by telemarketers (undated)", url: "https://www.ncc.gov.ng/media-center/public-notices/unauthorised-use-telecom-subscribers-phone-numbers-and-other-personal" },
    nccPortalHome: { name: "NCC Consumer Portal home page (complaints, undated)", url: "https://consumer.ncc.gov.ng/" },
    nccWangiri: { name: "NCC Consumer Portal: Wangiri Mobile Fraud, Beware of the Missed Call Scam (published 12 December 2023)", url: "https://consumer.ncc.gov.ng/articles/81-wangiri-mobile-fraud-beware-of-the-missed-call-scam" },
    nccSimReplace: { name: "NCC news release: NCC demands MNOs, agents, consumers compliance with SIM replacement guidelines (undated, appears to be about November 2024)", url: "https://ncc.gov.ng/media-centre/press-releases/news-release-ncc-demands-mnos-agents-consumers-compliance-sim" },
    nccSimFaq: { name: "NCC Consumer Portal FAQ: Compliance Monitoring and Enforcement (undated)", url: "https://consumer.ncc.gov.ng/information-education/faqs/46-compliance-monitoring-and-enforcement" },
    nccSimNin: { name: "NCC Consumer Portal FAQ: SIM-NIN Linkage (undated)", url: "https://consumer.ncc.gov.ng/information-education/faqs/82-sim-nin-linkage" },
    nccDeadline: { name: "NCC Consumer Portal: NCC announces final deadline for NIN-SIM linkage compliance, 14 September 2024 (published 29 August 2024)", url: "https://consumer.ncc.gov.ng/articles/92-ncc-announces-final-deadline-for-nin-sim-linkage-compliance-september-14-2024" },
    nccNin2021: { name: "NCC news release: Don't allow your NIN to be linked to another person's SIM (18 October 2021)", url: "https://ncc.gov.ng/media-centre/press-releases/news-release-dont-allow-your-nin-be-linked-another-persons-sim-ncc" },
    csirtSimSwap: { name: "NCC-CSIRT advisory ngCERT-2023-0035: Cyber criminals using SIM swapping attack to steal millions of dollars from the public (undated, appears to be about August 2023)", url: "https://csirt.ncc.gov.ng/index.php/resources/security-advisories/148-cyber-criminals-using-sim-swapping-attack-to-steal-millions-of-dollars-from-the-public" },
    efccRedAlert: { name: "EFCC booklet: Red Alert on Scam (undated, an old booklet)", url: "https://www.efcc.gov.ng/images/pdfs/RED_ALERT_ON_SCAM.pdf" },
    npfncccHome: { name: "Nigeria Police Force National Cybercrime Centre (NPF-NCCC): E-Reporting Portal home (page footer 2 October 2026)", url: "https://nccc.npf.gov.ng/" },
    npfncccContact: { name: "NPF-NCCC: Contact Us (page footer 2 October 2026)", url: "https://nccc.npf.gov.ng/contact" },
    npfncccOct: { name: "NPF-NCCC: October Global Cyber Awareness Campaign (18 October 2025)", url: "https://nccc.npf.gov.ng/news/october-global-cyber-awareness" },
    npfncccNews: { name: "NPF-NCCC news: cyberstalking and cyberbullying (29 August 2025)", url: "https://nccc.npf.gov.ng/news" },
    efccPetition: { name: "EFCC: Petition, Submit Petition (undated, copyright 2026)", url: "https://efcc.gov.ng/SubmitPetition" },
    csirtAdvisories: { name: "NCC-CSIRT: Security Advisories listing (shows advisories up to 21 October 2026)", url: "https://csirt.ncc.gov.ng/index.php/resources/security-advisories" },
    nccCyber: { name: "NCC: CyberSecurity (sections last updated between 4 November 2024 and 4 June 2025)", url: "https://ncc.gov.ng/industry/cybersecurity" },
    csirtFreeData: { name: "NCC-CSIRT advisory NCC-CSIRT-2026-032: Fraudulent Free Data and Airtime phishing campaign (undated)", url: "https://csirt.ncc.gov.ng/index.php/resources/security-advisories/431-fraudulent-free-data-and-airtime-phishing-campaign-hosted-on-ibaidad-com" },
    csirtGoogle: { name: "NCC-CSIRT advisory ngCERT-2024-0001: Cybercriminals compromising Google accounts without their passwords (undated)", url: "https://csirt.ncc.gov.ng/index.php/resources/security-advisories/202-cybercriminals-compromising-google-accounts-without-their-passwords" },
    cbnFraud: { name: "Central Bank of Nigeria: Fraud and Scam Awareness (undated)", url: "https://www.cbn.gov.ng/supervision/cpdfraudandscam.html" },
    cbnComplaints: { name: "Central Bank of Nigeria: Complaints Management (undated)", url: "https://www.cbn.gov.ng/supervision/cpdcomgt.html" },
    cbnLodge: { name: "Central Bank of Nigeria: Complaint Lodgment (undated)", url: "https://www.cbn.gov.ng/FinInc/FinLit/LodgeComplaint.html" },
    ndpcPolicy: { name: "Nigeria Data Protection Commission: Our Data Privacy Policy (undated, copyright 2025)", url: "https://ndpc.gov.ng/our-data-privacy-policy/" },
    ndpcFaq: { name: "Nigeria Data Protection Commission: FAQs (undated)", url: "https://ndpc.gov.ng/faqs/" },
    ndpcContact: { name: "Nigeria Data Protection Commission: Contact (undated)", url: "https://ndpc.gov.ng/contact/" },
    nccChildBooklet: { name: "NCC booklet: Keeping Children Safe Online, advice to parents and caregivers (undated, written during COVID-19)", url: "https://ncc.gov.ng/sites/default/files/Keeping%20Children%20Safe%20Online.pdf" },
    nccChildPage: { name: "NCC: Child Online Protection (undated)", url: "https://ncc.gov.ng/consumers/child-online-protection" }
  },

  TOPICS: {
    "ng-safe-dnd-spam": {
      title: "Unwanted calls and texts: Do Not Disturb 2442",
      kind: "safety",
      sources: ["nccDnd2026", "nccDnd2022", "nccUnsolicited", "nccPress622", "nccTelemarketers", "nccPortalHome", "nccWangiri"],
      text: "To cut unwanted promotional texts, the NCC runs Do Not Disturb on the short code 2442. An NCC page published 6 March 2026 says it works on all networks, at no extra cost, on feature phones and smartphones. To block everything it offers, text STOP to 2442. To block only some kinds, text HELP to 2442, then text the number of each kind you still want to 2442. The kinds are: 1 banking, insurance and financial products; 2 real estate; 3 education; 4 health; 5 consumer goods and cars; 6 communication, broadcasting, entertainment and IT; 7 tourism and leisure; 8 sports; 9 religion; 10 news of new products from your own network; 11 news alerts. Text ALLOW to 2442 to switch it off, and STATUS to see your setting. Dial *305# to see and cancel paid subscriptions. The pages differ on what full blocking stops: the 2026 page says unsolicited texts and calls, a 2022 page says all texts from any provider. Neither covers scam messages from criminals, and none says whether STOP also blocks bank alerts or one-time codes, so ask your bank or a professional before you use it. To report illegal telemarketing, the NCC says to call its toll-free line 622. For a call from an international number that looks local, email consumerportal@ncc.gov.ng with the number, date and time. One ring and then silence from a foreign number may be a trick to make you call back a costly number, so do not call back. NCC phones: +234-209-461-7000 and +234-209-461-7514. The pages do not say how to report scam texts. I cannot check any message. Never give a PIN or one-time code to someone who contacts you."
    },

    "ng-safe-sim-nin": {
      title: "SIM swap, SIM replacement and NIN-SIM linking",
      kind: "safety",
      sources: ["nccSimReplace", "nccSimFaq", "csirtSimSwap", "nccSimNin", "nccDeadline", "nccNin2021"],
      text: "If your SIM stops working and you fear a swap, the pages I read give no steps for a victim and no way to report it. The NCC says only that an illegal SIM swap is a crime, so it is referred to the Police, and that who pays, the operator or the bank, is still in contention. Ask your network provider at its outlet, and a professional. What the pages do say: a SIM replacement must be done by your provider or its licensed agent, and your NIN, the National Identification Number, is compulsory for it. Some people falsely claim to work for operators and ask for the one-time password sent to you after a replacement. Do not share it. Never give your password or PIN over the phone, even to someone who says they are from your carrier; dial the carrier's official customer service line yourself. An NCC-CSIRT advisory adds: use a different password for each account, do not post your mobile number or home address, watch for unexpected changes to text service on your phone, and protect accounts with an authenticator app, a physical token or biometrics, not only text codes. Linking a NIN to a SIM, from an undated NCC page: confirm your NIN with your NIMC slip or dial *346#; make a Virtual NIN with *346*3*YourNIN*AgentCode# or the NIMC Mobile ID app; send it to your provider; dial *996# to confirm. The final deadline, 14 September 2024, has passed; I found nothing newer, so ask your provider about your line. Do not let anyone register a SIM with your NIN. I cannot check your line."
    },

    "ng-safe-scam-types": {
      title: "The 17 kinds of scam in the EFCC booklet",
      kind: "safety",
      sources: ["efccRedAlert"],
      text: "The EFCC's Red Alert on Scam booklet lists 17 kinds of scam. It is old, has no date, and gives no EFCC phone number or email. It says advance-fee fraud, called 419, promises a large sum but demands payments up front, and that education or status does not protect you. The kinds: 1, banking scams, fake letters asking you to update your login, PIN or password, often with a deadline; the booklet says banks never ask for your identification details. 2, Ponzi schemes, high returns with little risk, early investors paid from new money. 3, romance scams, such as a lover with an accident who needs money; ask for a live video chat. 4, job scams, fees to process an application. 5, identity theft and phishing, including sim card cloning, then your contacts are asked for money; confirm distress messages by phone. 6, contract scams, asking for your bank details to pay for a contract you never did. 7, inheritance scams, trapped funds, then fees. 8, charity scams, fake appeals with photos. 9, juju scams, paying for rituals. 10, lottery scams, a prize you never entered, fees first. 11, crude oil or mineral sales at big discounts. 12, wash-wash, paying to clean marked dollars; report it to the nearest police station or EFCC office. 13, scholarship scams, a payment demanded. 14, auction scams, bogus charges, or a cheque bigger than the price that you must refund. 15, emergency scams, a call saying a relative had an accident and needs money; call your relative. 16, visa scams from agents; pay fees only into the embassy account. 17, Local Purchase Order scams, a fake order, and payment never comes. It does not cover fake bank alerts, USSD or hijacked WhatsApp. I cannot tell if a message is real."
    },

    "ng-safe-report-cybercrime": {
      title: "Where to report online fraud and cybercrime",
      kind: "safety",
      sources: ["cbnFraud", "npfncccHome", "npfncccContact", "npfncccOct", "efccPetition", "csirtAdvisories", "nccCyber", "nccTelemarketers"],
      text: "If you were cheated online, first secure your accounts: change your passwords from a clean device and turn on two-factor sign-in, which asks for a code as well as your password. If bank details are involved, tell your bank at once. Then report. The Nigeria Police Force National Cybercrime Centre has a portal at nccc.npf.gov.ng. Its page says: create an account with BVN or NIN checks, send a report with evidence such as bank records and screenshots, then track it. It also says anonymous reporting is available and that it is open all day, every day. The page does not say what to do without a BVN or NIN, and gives no phone number. Its email is info@nccc.npf.gov.ng. The EFCC takes petitions at efcc.gov.ng under Submit Petition, or on paper at a zonal office, and an officer writes down and reads back a complaint from someone who cannot write. Its page shows +234 809 332 2644, +234 (9) 9044751 and info@efcc.gov.ng. Its cybercrime centre is marked coming soon. NCC-CSIRT has an online form at csirt.ncc.gov.ng, address Plot 423 Aguiyi Ironsi Street, Maitama, Abuja, and no phone. Its page shows the email contact@csirt.ncc.gov.ng but the mail link points to info@csirt.ncc.gov.ng, so check which is right. For illegal telemarketing, the NCC says call 622. I could not read ngCERT's own site, which blocked me. The pages give no police emergency number; if you are in danger, call your local emergency number. I cannot say what any agency will do with your report."
    },

    "ng-safe-bank-fraud": {
      title: "Bank fraud and complaints to the Central Bank",
      kind: "safety",
      sources: ["cbnFraud", "cbnComplaints", "cbnLodge"],
      text: "If your banking details were compromised, the Central Bank of Nigeria says to contact your bank immediately, so it can freeze accounts and reverse unauthorised transactions. It does not promise a reversal. Then report to the authorities it lists: the EFCC, the DSS, the Nigerian Police Force and the ICPC. It also lists the FBI Internet Fraud Complaint Center, a United States body; the page gives no link or contact for any of them. Change your passwords and turn on two-factor sign-in, which asks for a code as well as your password. For a complaint about a bank, the Central Bank says: report first to the bank or branch where the problem began, and allow about 2 weeks, maybe less at some banks. Another page says complaints about excess charges and loans must be settled within 30 days. If it is not solved, write to the Consumer Protection Department, by email to cpd@cbn.gov.ng or by letter to the Director, Consumer Protection Department, Central Bank of Nigeria, Central Business District, Abuja, left at the head office or any branch. You cannot go there before the waiting time ends. Include your name, address, phone and email, the bank's name, the date and history of the problem, the amount, your papers, and proof you complained to the bank first. Never put your PIN or passwords in it. The pages do not say whether the 2 weeks applies to fraud or if there is a faster route. They say nothing about fake bank alerts, transfers, ATM, POS or USSD fraud, and give no phone number. Ask your bank or a professional."
    },

    "ng-safe-data-rights": {
      title: "Your data rights and the Data Protection Commission",
      kind: "safety",
      sources: ["ndpcPolicy", "ndpcFaq", "ndpcContact"],
      text: "The Nigeria Data Protection Commission's privacy policy lists your rights over your personal data: to be informed, including where it may be sent; to see it; to have it corrected; to object to its use; to take it with you; to have it erased; to ask for a human when a machine decides; and to lodge a complaint with the Commission. You can give, refuse or withdraw consent. For a complaint, the policy names the Commission's Data Privacy Service Unit, email dpo@ndpc.gov.ng, which it says shall act to put a grievance right within 7 working days. If more time is needed, you are told. But that policy is about the Commission's own handling of your data. It is not clearly a way to complain about a bank, an app or another company, and I found no steps, form or deadline for that. The Commission's FAQ says that under Section 48(2) of the Nigeria Data Protection Act a person whose rights are breached can seek remedies, including compensation and an order to put it right, and may go to court. General contact: info@ndpc.gov.ng and +234 916 061 5551, at 1919 Cadastral Zone C06, Mbora District, Life Camp, Abuja. To report a data breach, the Commission links services.ndpc.gov.ng/breach. I am not a lawyer; for a claim against a company, ask a legal professional."
    },

    "ng-safe-children": {
      title: "Keeping children safe online",
      kind: "safety",
      sources: ["nccChildBooklet", "nccChildPage", "npfncccNews"],
      text: "The NCC's booklet Keeping Children Safe Online, for parents and caregivers, prints these numbers on every page: the NCC toll-free line 622, and the Cece Yara Foundation on 08008008001 for children, toll free, and 07007007001 for adults, not toll free. The booklet names Cece Yara but does not say what it does; I do not vouch for it. If a child is in danger, call your local emergency number. The booklet is from the COVID period, so app names may be out of date. It says to learn what devices and sites your child uses, set up a content filter and time limits before giving a device, set ground rules, and watch for changes in behaviour; if you see one, talk calmly without judging. Use parental controls on the browser, search tools, router, phones and TVs, but they are not foolproof and nothing replaces watching. Tell children never to give their name, address, school or phone number to online friends they do not know, to use nicknames, to avoid junk email and unknown attachments, and to tell you at once about bullying. Ask your child if anyone asked for a nude picture, and if one was sent. Pictures may never leave the internet. Do not blame a child who was bullied. The booklet gives no steps for after a child has been groomed, blackmailed or sent images, and no child-specific reporting channel. The police cybercrime centre says cyberstalking and cyberbullying are crimes to report to it; its email is info@nccc.npf.gov.ng. Ask a professional."
    },

    "ng-safe-basics": {
      title: "Basic habits: passwords, updates and backups",
      kind: "safety",
      sources: ["nccCyber", "csirtAdvisories", "csirtGoogle"],
      text: "The NCC's cybersecurity page and the NCC-CSIRT advisories give a few plain habits. Use a strong password and a different one for every account, and change them regularly. Turn on two-factor sign-in, which asks for a code as well as your password, on email, banking and other sensitive accounts. Keep your phone, apps and browser up to date, and install updates when they appear. Back up your data so you can recover it if a device is lost, stolen or attacked. The page does not say how often or where to keep backups. The NCC page says to consider a trusted password manager, and also not to save passwords in your browser. Do not do your banking over public Wi-Fi, and do not open your bank through links: type its address yourself. Do not open emails or attachments from unknown senders, and lock your phone when you are not using it. If you think your device is breached, the advisories say to isolate it, keep the evidence, and change your passwords from a clean device. For a Google account, an advisory says to sign out of all browser profiles, then reset the password and sign in again, because stolen sign-in tokens can still work after a reset. The pages say nothing about ransomware, or about phone settings. I cannot check your device. Never give your password or one-time code to anyone who contacts you."
    },

    "ng-safe-phishing": {
      title: "Spotting fake messages, emails and offers",
      kind: "safety",
      sources: ["cbnFraud", "nccCyber", "csirtFreeData"],
      text: "Fraudsters pretend to be your bank or a service provider by email, text or phone to steal your passwords and card numbers, says the Central Bank of Nigeria. Do not click suspicious links. Check who is really asking by contacting the organisation yourself. The NCC adds: do not open emails from unknown senders; typing and grammar mistakes often show a fake; hover over a link to see where it goes, and be wary of shortened links; type your bank's address yourself. Be careful with any urgent request for your National Identity Number, bank details or passwords. An NCC-CSIRT advisory describes a fake page offering 10GB of free data and 5,000 naira airtime. It asks for your phone number, then tells you to share the link with WhatsApp contacts to qualify. That spreads the trick and collects numbers. The advice: do not give your phone number or details to unsolicited offers on websites or messaging apps; check any promotion only through your telecom provider's official channels; and think before forwarding links to unlock a reward. The page does not say what to do if you already entered your number. I cannot check whether a message, number, link or website is real. Never give your PIN, password or one-time code to someone who contacts you."
    }
  },

  PHRASES: {
    "ng-safe-dnd-spam": ["How do I stop spam texts and calls on my phone?", "What is 2442 and how do I use it?", "Someone keeps calling me and hanging up, what should I do?"],
    "ng-safe-sim-nin": ["What is a SIM swap and how do I stay safe?", "How do I link my NIN to my SIM?", "A person asked for the code sent to my phone after I changed my SIM"],
    "ng-safe-scam-types": ["What kinds of scam are there in Nigeria?", "Is this a 419 scam?", "What does a romance or lottery scam look like?"],
    "ng-safe-report-cybercrime": ["Where do I report online fraud in Nigeria?", "How do I report a cybercrime to the police?", "How do I make a petition to the EFCC?"],
    "ng-safe-bank-fraud": ["Money was taken from my bank account, what do I do?", "How do I complain to the Central Bank about my bank?", "My bank has not fixed my problem, who do I tell next?"],
    "ng-safe-data-rights": ["What are my data rights in Nigeria?", "How do I complain to the Data Protection Commission?", "A company is misusing my personal information, what can I do?"],
    "ng-safe-children": ["How do I keep my child safe online?", "Who can I call about my child being bullied online?", "What should I tell my children about strangers online?"],
    "ng-safe-basics": ["How do I make my accounts safer?", "What is a strong password?", "How should I back up my phone?"],
    "ng-safe-phishing": ["How do I spot a fake text message or email?", "Is this free data offer real?", "What is phishing?"]
  },

  KEYS: {
    "ng-safe-dnd-spam": "text STOP to 2442",
    "ng-safe-sim-nin": "give no steps for a victim",
    "ng-safe-scam-types": "lists 17 kinds of scam",
    "ng-safe-report-cybercrime": "first secure your accounts",
    "ng-safe-bank-fraud": "contact your bank immediately",
    "ng-safe-data-rights": "lists your rights over your personal",
    "ng-safe-children": "Cece Yara Foundation on 08008008001",
    "ng-safe-basics": "different one for every account",
    "ng-safe-phishing": "Do not click suspicious links"
  }
};
