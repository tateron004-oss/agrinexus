"use strict";

// Kenya topics of the "Stay safe online" guide. Written from C:\Users\tater\vr\safety-facts-kenya.txt (pages read on 23 October 2026).
// Not written: ke-safe-children (the sheet has no child-safety tips, only the names of a programme and a site).
// Not stated anywhere: the Directorate of Criminal Investigations hotline and WhatsApp numbers and the 999/112 lines (unverified leads), short code 333, anything from the unreadable
// KE-CIRT/CC, DCI, police and Communications Authority repository pages.

module.exports = {
  SOURCES: {
    cbkFraud: { name: "Central Bank of Kenya: Fraud Safety (the page shows 'Posted On 23-10-2026', the day it was read, so its date is uncertain)", url: "https://www.centralbank.go.ke/fraud-safety/" },
    caMashujaa: { name: "Communications Authority of Kenya: CA Steps Up Public Engagements on Cybersecurity and Consumer Protection at Mashujaa Day Thematic Week in Eldoret (14 October 2026)", url: "https://www.ca.go.ke/ca-steps-public-engagements-cybersecurity-and-consumer-protection-mashujaa-day-thematic-week" },
    keCirt42: { name: "National KE-CIRT/CC: Cybersecurity Report, 42nd Edition, April to June 2026", url: "https://www.ca.go.ke/sites/default/files/2026-07/Cyber%20Security%20Report%20Q4%202025-2026_1.pdf" },
    keCirt38: { name: "National KE-CIRT/CC: Cybersecurity Report, 38th Edition, April to June 2025", url: "https://www.ca.go.ke/sites/default/files/2025-07/Cyber%20Security%20Report%20Q4%202024-2025.pdf" },
    caRole: { name: "Communications Authority of Kenya: Our Role in your Protection (undated page)", url: "https://www.ca.go.ke/index.php/our-role-your-protection" },
    caCyber: { name: "Communications Authority of Kenya: Cyber Security (undated page)", url: "https://www.ca.go.ke/cyber-security" },
    caSimAudit: { name: "Communications Authority of Kenya: Press Statement on Findings of the Forensic Audit on Registration of SIM Cards (18 September 2018)", url: "https://www.ca.go.ke/sites/default/files/2023-06/Press-Statement-on-Forensic-Audit-on-SIM-Card-Registration1.pdf" },
    caConsumerEd: { name: "Communications Authority of Kenya: Consumer Education Outreach (undated page)", url: "https://www.ca.go.ke/index.php/consumer-education-outreach-0" },
    cmaCaution: { name: "Capital Markets Authority: Public Caution Against Investment Scams (11 September 2026)", url: "https://www.cma.or.ke/public-caution-against-investment-scams/" },
    cmaProtection: { name: "Capital Markets Authority: Investor Protection (undated page)", url: "https://www.cma.or.ke/investor-protection/" },
    cakComplaint: { name: "Competition Authority of Kenya: File A Consumer Complaint (undated page)", url: "https://www.cak.go.ke/e-services/file-consumer-complaint" },
    odpcHome: { name: "Office of the Data Protection Commissioner: home page (news items June to July 2026)", url: "https://www.odpc.go.ke/" },
    odpcRights: { name: "Office of the Data Protection Commissioner: Rights Of A Data Subject (undated page)", url: "https://www.odpc.go.ke/rights-of-a-data-subject/" },
    odpcComplaint: { name: "Office of the Data Protection Commissioner: File a Complaint (undated page)", url: "https://www.odpc.go.ke/file-a-complaint/" },
    odpcFaqs: { name: "Office of the Data Protection Commissioner: FAQs (undated page)", url: "https://www.odpc.go.ke/faqs/" },
    odpcBreach: { name: "Office of the Data Protection Commissioner: Report a Data Breach (undated page)", url: "https://www.odpc.go.ke/report-a-data-breach/" },
    cybercrimeAct: { name: "Kenya Law: Computer Misuse and Cybercrimes Act, legislation as at 31 December 2022 (the copy says it is not the latest version)", url: "https://new.kenyalaw.org/akn/ke/act/2018/5/eng@2022-12-31" }
  },

  TOPICS: {
    "ke-safe-fake-messages-calls": {
      title: "Kenya: spotting fake messages, calls, links and money scams",
      kind: "safety",
      sources: ["cbkFraud", "caMashujaa", "keCirt42"],
      text: "Never give your PIN, password, bank account or card details to anyone who contacts you. The Central Bank of Kenya's fraud safety page says a credible institution will not ask you for your password. Do not click links or open attachments in an email or text that asks you to log in or verify a password. Go to the official website directly instead. If someone asks you for money by email or text, call them first to check, because they may be an impersonator. Do not respond to unsolicited emails, letters or calls offering you a benefit, and do not share personal details online or by phone. When unsure, ask a second or third person who is not connected to the sender or the offer. Warning signs the page lists: a message saying you won a competition you never entered, a fee for a free gift or unclaimed money, a request to help a foreigner reach an inherited account, a caller from a company asking for your PIN, a promised high return with no risk, pressure to decide fast, returns that rise the more people you recruit, unclear scheme owners, and a scheme not registered with a regulator. The Communications Authority also urges people to verify suspicious messages and links and to report suspected cyber incidents through the appropriate channels, but its page does not name the channel. A 2026 national cyber centre report says criminals are using fake login pages and voice or video impersonation. These pages do not mention mobile-money fraud, SIM swap or WhatsApp scams by name, and they give no fraud hotline. I cannot check whether a particular message, caller, number or link is real."
    },
    "ke-safe-sim": {
      title: "Kenya: SIM registration and SIM swap",
      kind: "safety",
      sources: ["caSimAudit", "keCirt38", "caConsumerEd", "caCyber"],
      text: "The official pages I could read on SIM cards are not a how-to. A Communications Authority press statement dated 18 September 2018 says mobile operators must register every SIM card before activation, under the 2015 SIM-card registration regulations. You must appear in person and give correct information. Giving incorrect information is an offence, with a fine up to 100,000 shillings, or 6 months in prison, or both. Street selling of SIM cards is also an offence, with a fine up to 500,000 shillings, or 12 months in prison, or both. The statement says an audit found agents who did not ask for ID, SIMs registered several times under different identities, and incomplete operator records, and the Authority told operators to switch off unregistered, wrongly registered and multiple-owner SIMs. That statement is eight years old, so the rules and figures may have changed. On SIM swap, the Authority's 2025 cybersecurity report only names SIM swap fraud as a topic at an awareness session, with no explanation and no steps. The Authority may have an advisory about SIM swap fraud, but the site that would hold it failed a security-certificate check and I could not open it, so I do not know what it says. The pages do not say how to check which SIMs are registered in your name, how to report a SIM you did not register, how to prevent a swap, or what to do if your phone suddenly loses signal. The Authority's general line is +254 703 042 000, and its email is info@ca.go.ke. I cannot check whether your SIM is registered or swapped."
    },
    "ke-safe-hacked-defrauded": {
      title: "Kenya: what to do now if you were defrauded or hacked",
      kind: "safety",
      sources: ["cbkFraud", "caRole", "cmaCaution", "cmaProtection"],
      text: "Here is what the Central Bank of Kenya's fraud safety page says to do if you become a victim. First, if you shared your banking details, tell your bank immediately. Second, change your online account passwords right away. Third, report the fraud to the police. For fraudulent calls or texts, unwanted calls and cyber crime, the Communications Authority says to complain in writing within six months, report to your service provider first, and keep evidence of that contact. If that does not solve it, refer it to the Authority. Filing is free and can be anonymous, though that may limit the investigation. If you dealt with one of the unlicensed investment firms named in the Capital Markets Authority's public caution of 11 September 2026, it asks you to report to your nearest local Directorate of Criminal Investigation office, and it gives no number for that office. The Capital Markets Authority's own lines are +254 20 2264400 and +254 20 2264900, and its email is corporate@cma.or.ke. The Communications Authority's lines are +254 703 042 000 and +254 (20) 424000. The pages I read give no police number, and say nothing about mobile-money providers, freezing a card or reversing a transfer. So I cannot say how to get money back, and no one can promise it. If you are in danger, call your local emergency number. I cannot check whether a particular caller or message is real, and I will never ask for your password, PIN or codes."
    },
    "ke-safe-report-complain": {
      title: "Kenya: where to complain and report, and how long it takes",
      kind: "safety",
      sources: ["caRole", "cakComplaint", "keCirt42", "caCyber"],
      text: "To complain to the Communications Authority about fraudulent calls and texts, unwanted messages, nuisance calls or cyber crime, take these steps. Put it in writing and lodge it within six months of the incident. Report to your service provider first and keep evidence of that contact. If the provider does not solve it, refer it to the Authority. It acknowledges within 3 days and responds in substance within 10 days, and you get a ticket number. Resolution usually takes 1 to 30 days, longer for complex cases. Filing is free, and you may file anonymously, which may limit the investigation. If unhappy, you can ask for a review, or go to the Commission on Administrative Justice, the Communications and Multimedia Appeals Tribunal, or a court. It does not handle matters already in court. Contacts: +254 703 042 000, +254 (20) 424000, complaints@ca.go.ke, chukuahatua@ca.go.ke, or the File a Complaint link on ca.go.ke. The page also lists Chukua Hatua numbers 07374-45555, 07144-44555 and 020-445555; I could not confirm they are current. For unfair trade in consumer goods and services, not hackers or mobile-money theft, the Competition Authority takes complaints by post, email, telephone or in person: complain@cak.go.ke, +254 20 2628233 or +254 20 2779000. The national cyber centre, KE-CIRT/CC, prints a Report an incident email, incidents@ke-cirt.go.ke, and hotlines +254 703 042700 and +254 730 172700. The pages do not say whether the public may use them, so ask the Communications Authority before relying on them. The pages give no short code for reporting spam."
    },
    "ke-safe-data-rights": {
      title: "Kenya: your data rights and complaining to the Data Protection Commissioner",
      kind: "safety",
      sources: ["odpcRights", "odpcComplaint", "odpcFaqs", "odpcBreach", "odpcHome"],
      text: "The Office of the Data Protection Commissioner lists five rights for a data subject, meaning the person the data is about. You have the right to be informed what your personal data will be used for. You have the right of access to personal data held by an organisation that controls or processes it. You have the right to object to all or part of the processing of your data. You have the right to have false or misleading data corrected. And you have the right to have false or misleading data about you deleted. To complain, use the File a Complaint page on odpc.go.ke, which leads to cie.odpc.go.ke. It is for a data subject, or someone acting for one, under Section 56 of the Data Protection Act. Fill in the form. If there is not enough space, add an annex. Attach copies of supporting documents. If you file for someone else, include their authorisation. The page says the information is treated with utmost confidentiality. The FAQs also give the email complaint@odpc.go.ke. Other contacts: info@odpc.go.ke, or call 0207801800, 0796954269 or 0752896867, Monday to Friday, 8:00 am to 5:00 pm. After a data breach, meaning your information was taken from a system without the owner's authorisation, the FAQs say to contact the Office. Its Report a Data Breach form is for organisations, not for individuals, and for misuse of your data by others it points to the complaint portal. The pages give no deadline to complain, no fee either way, no response time, and no examples of misuse. I cannot check whether your data was misused."
    },
    "ke-safe-cybercrime-law": {
      title: "Kenya: what the cybercrime law makes an offence",
      kind: "safety",
      sources: ["cybercrimeAct"],
      text: "This is a plain summary of offences in Kenya's Computer Misuse and Cybercrimes Act, from the copy on Kenya Law as at 31 December 2022. That copy says it is not the latest version, so a lawyer should confirm the current law. This is not legal advice. The figures are the most a court may order on conviction, as a fine, prison, or both. Getting into a computer system by getting round its security: a fine up to 5 million shillings, or up to 3 years, or both. Disclosing a password or access code without authority: the same, but up to 10 million shillings or 5 years if done for wrongful gain or to cause loss. Computer forgery, making fake data to be treated as real: up to 10 million shillings or 5 years. Computer fraud, gaining money or benefit by dishonest means: up to 20 million shillings or 10 years. Cyber harassment, repeated messages likely to cause fear or serious harm: up to 20 million shillings or 10 years. Child pornography in a computer system: up to 20 million shillings or 25 years. Identity theft, dishonestly using someone's password or other unique identification: up to 200,000 shillings or 3 years. Phishing, tricking someone into giving personal information: up to 300,000 shillings or 3 years. Interfering with messages that carry money: up to 200,000 shillings or 7 years. Sharing someone's intimate or obscene image: up to 200,000 shillings or 2 years. Sending a message that misrepresents a fact so a person suffers loss: up to 200,000 shillings or 2 years. A convicting court may order compensation, and a separate civil claim is still possible. The Act does not tell a victim where to report."
    },
    "ke-safe-basics": {
      title: "Kenya: strong passwords, updates and backups",
      kind: "safety",
      sources: ["cbkFraud", "caMashujaa", "keCirt42", "keCirt38"],
      text: "The official pages give only brief tips, not a full guide. The Central Bank of Kenya says to use a strong, unique password for each online account. It also says to turn on multifactor authentication for sensitive accounts where possible, which asks for a code as well as your password, and to limit the personal information on your social media profiles. The Communications Authority says the same about strong unique passwords and two-factor sign-in where available, and to take care with personal information online. A 2026 report from the national cyber centre says to keep software up to date and to apply updates as soon as they are released. For Android phones it says to download apps only from trusted sources, check app permissions, and keep the phone and apps up to date. For home routers and devices it says to use strong passwords, not the default ones, and keep them updated, because devices with default passwords or old software were being abused. It says malware spreads through USB devices, social media and email attachments. Keeping offline backups is advised there for organisations, and the pages give no backup steps for households. They do not say how long a password should be, how to turn on two-step sign-in, or whether to use antivirus software. I cannot check your devices. Never give a password or code to anyone who contacts you."
    }
  },

  PHRASES: {
    "ke-safe-fake-messages-calls": ["How do I know if a text message is a scam?", "Someone called asking for my PIN, is it fake?", "How can I tell if a message is fake?"],
    "ke-safe-sim": ["What is SIM swap and how do I stop it?", "Do I have to register my SIM card?", "My phone lost signal suddenly, could my SIM be swapped?"],
    "ke-safe-hacked-defrauded": ["I think I have been scammed, what do I do now?", "Someone took money from my account, who do I tell?", "My account was hacked, what should I do first?"],
    "ke-safe-report-complain": ["Where do I report a scam call or text?", "How do I complain to the Communications Authority?", "Can I report a cyber attack to KE-CIRT?"],
    "ke-safe-data-rights": ["What are my data rights in Kenya?", "How do I complain to the Data Protection Commissioner?", "What do I do if my personal data was leaked?"],
    "ke-safe-cybercrime-law": ["What does the Computer Misuse and Cybercrimes Act say?", "Is phishing a crime in Kenya?", "What is the penalty for online fraud in Kenya?"],
    "ke-safe-basics": ["How do I make my passwords safe?", "What should I do to keep my phone secure?", "Do I need to back up my files?"]
  },

  KEYS: {
    "ke-safe-fake-messages-calls": "Never give your PIN, password",
    "ke-safe-sim": "every SIM card before activation",
    "ke-safe-hacked-defrauded": "tell your bank immediately",
    "ke-safe-report-complain": "within six months of the incident",
    "ke-safe-data-rights": "five rights for a data subject",
    "ke-safe-cybercrime-law": "as at 31 December 2022",
    "ke-safe-basics": "strong, unique password"
  }
};
