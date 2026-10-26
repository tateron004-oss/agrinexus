"use strict";

// Kyro "Coming home" guide, United States federal topics, part B (work, rights and help). Every fact is from fact sheets reentry-facts-b.txt and reentry-facts-e.txt (official US pages read on 26 October 2026).
module.exports = {
  SOURCES: {
    eeocArrest: { name: "U.S. Equal Employment Opportunity Commission: Arrest and Conviction Records, Resources for Job Seekers, Workers and Employers (undated)", url: "https://www.eeoc.gov/arrestandconviction" },
    eeocGuidance: { name: "U.S. Equal Employment Opportunity Commission: Enforcement Guidance on the Consideration of Arrest and Conviction Records in Employment Decisions (issued 25 April 2012; guidance, not law)", url: "https://www.eeoc.gov/laws/guidance/enforcement-guidance-consideration-arrest-and-conviction-records-employment-decisions" },
    eeocBackground: { name: "EEOC with the Federal Trade Commission: Background Checks, What Job Applicants and Employees Should Know (11 March 2014)", url: "https://www.eeoc.gov/laws/guidance/background-checks-what-job-applicants-and-employees-should-know" },
    dolBonding: { name: "U.S. Department of Labor: Federal Bonding Program (undated)", url: "https://www.dol.gov/agencies/eta/federal-bonding-program" },
    bonds4jobs: { name: "The Federal Bonding Program website, linked from the Department of Labor page (undated; the page text does not say who runs the site)", url: "https://bonds4jobs.com/" },
    dolWotc: { name: "U.S. Department of Labor: Work Opportunity Tax Credit (undated)", url: "https://www.dol.gov/agencies/eta/wotc" },
    irsWotc: { name: "Internal Revenue Service: Work Opportunity Tax Credit (page last reviewed 20 July 2026)", url: "https://www.irs.gov/businesses/small-businesses-self-employed/work-opportunity-tax-credit" },
    dolAjc: { name: "U.S. Department of Labor: American Job Centers (undated)", url: "https://www.dol.gov/agencies/eta/american-job-centers" },
    ajcFinder: { name: "CareerOneStop, sponsored by the U.S. Department of Labor: American Job Center Finder (undated)", url: "https://www.careeronestop.org/LocalHelp/AmericanJobCenters/find-american-job-centers.aspx" },
    ftcEmployerChecks: { name: "Federal Trade Commission: Employer Background Checks and Your Rights (August 2025 shown at the bottom of the page)", url: "https://consumer.ftc.gov/articles/employer-background-checks-and-your-rights" },
    ftcFreeReports: { name: "Federal Trade Commission: Free Credit Reports (undated)", url: "https://consumer.ftc.gov/articles/free-credit-reports" },
    cfpbHandout: { name: "Consumer Financial Protection Bureau: Background screening reports, handout (file name says August 2021; no date printed)", url: "https://files.consumerfinance.gov/f/documents/cfpb_background-screening-report_handout_2021-08.pdf" },
    cfpbCompanies: { name: "Consumer Financial Protection Bureau: Consumer reporting companies, companies list (page last modified 13 March 2025)", url: "https://www.consumerfinance.gov/consumer-tools/credit-reports-and-scores/consumer-reporting-companies/companies-list/" },
    nrrcSpotlight: { name: "National Reentry Resource Center, a federally funded center: Reentry Spotlight, Understanding and Mitigating the Impacts of Juvenile and Criminal Records (5 December 2023)", url: "https://nationalreentryresourcecenter.org/resources/reentry-spotlight-understanding-and-mitigating-impacts-juvenile-and-criminal-records" },
    nrrcCleanSlate: { name: "National Reentry Resource Center, a federally funded center: Clean Slate Clearinghouse (undated)", url: "https://nationalreentryresourcecenter.org/cleanslate" },
    nrrcFindLawyer: { name: "National Reentry Resource Center, a federally funded center: Find A Lawyer (undated)", url: "https://nationalreentryresourcecenter.org/cleanslate/find-a-lawyer" },
    uscSupervision: { name: "U.S. Courts: Post-Conviction Supervision (undated)", url: "https://www.uscourts.gov/about-federal-courts/probation-and-pretrial-services/post-conviction-supervision" },
    uscOverview: { name: "U.S. Courts: Overview of Probation and Supervised Release Conditions (undated)", url: "https://www.uscourts.gov/about-federal-courts/probation-and-pretrial-services/post-conviction-supervision/overview-probation-and-supervised-release-conditions" },
    uscInitialReport: { name: "U.S. Courts: Chapter 2, Initial Reporting to Probation Office (undated; sample standard condition)", url: "https://www.uscourts.gov/about-federal-courts/probation-and-pretrial-services/post-conviction-supervision/overview-probation-and-supervised-release-conditions/chapter-2-initial-reporting-probation-office-probation-and" },
    uscReportOfficer: { name: "U.S. Courts: Chapter 2, Reporting to Probation Officer (undated; sample standard condition)", url: "https://www.uscourts.gov/about-federal-courts/probation-and-pretrial-services/post-conviction-supervision/overview-probation-and-supervised-release-conditions/chapter-2-reporting-probation-officer-probation-and-supervised" },
    bjaSupervision: { name: "Bureau of Justice Assistance, U.S. Department of Justice: Community Supervision Strategies (5 April 2024)", url: "https://bja.ojp.gov/news/blog/community-supervision-strategies-making-probation-and-parole-more-effective" },
    usaGovVote: { name: "USAGov: Who can and cannot vote (last updated 23 February 2026)", url: "https://www.usa.gov/who-can-vote" },
    dojVoting: { name: "U.S. Department of Justice, Civil Rights Division: Guide to State Voting Rules That Apply After a Criminal Conviction (up to date through September 2024)", url: "https://www.justice.gov/crt/media/1332106/dl" },
    fcc211: { name: "Federal Communications Commission: Dial 211 for Essential Community Services (reviewed 18 April 2024)", url: "https://www.fcc.gov/consumers/guides/dial-211-essential-community-services" },
    samhsa988: { name: "SAMHSA, U.S. Department of Health and Human Services: 988 Suicide and Crisis Lifeline and 988 Frequently Asked Questions (updated 26 September 2025 and 16 December 2025)", url: "https://www.samhsa.gov/mental-health/988" },
    samhsaHelpline: { name: "SAMHSA, U.S. Department of Health and Human Services: National Helpline for Mental Health, Drug, Alcohol Issues (last updated 9 June 2023)", url: "https://www.samhsa.gov/find-help/helplines/national-helpline" },
    lscHelp: { name: "Legal Services Corporation, an independent nonprofit funded by Congress: I Need Legal Help (undated)", url: "https://www.lsc.gov/about-lsc/what-legal-aid/i-need-legal-help" },
    fsaCriminal: { name: "Federal Student Aid, U.S. Department of Education: Eligibility for Students With Criminal Convictions (undated)", url: "https://studentaid.gov/understand-aid/eligibility/requirements/criminal-convictions" },
    fsaDcl: { name: "Federal Student Aid, U.S. Department of Education: Eligibility of Confined or Incarcerated Individuals to Receive Pell Grants, letter to schools (updated 30 September 2024)", url: "https://fsapartners.ed.gov/knowledge-center/library/dear-colleague-letters/2023-03-29/eligibility-confined-or-incarcerated-individuals-receive-pell-grants-updated-sept-30-2024" },
    fsaHandbook: { name: "Federal Student Aid, U.S. Department of Education: Student Eligibility for Pell Grants, 2026-2027 Handbook, written for schools (last modified 21 August 2026)", url: "https://fsapartners.ed.gov/knowledge-center/fsa-handbook/2026-2027/vol7/ch1-student-eligibility-pell-grants" },
    octaeAefla: { name: "U.S. Department of Education, Office of Career, Technical, and Adult Education: About AEFLA, the Adult Education and Family Literacy Act (undated)", url: "https://octae.ed.gov/aefla/about-aefla" },
    octaeContacts: { name: "U.S. Department of Education, Office of Career, Technical, and Adult Education: State Contacts, Adult Education and Literacy (undated)", url: "https://octae.ed.gov/contacts/state-contacts" }
  },

  TOPICS: {
    "reentry-jobs": {
      title: "Applying for work with a record",
      kind: "reentry",
      sources: ["eeocArrest", "eeocGuidance", "dolBonding", "bonds4jobs", "dolAjc", "ajcFinder", "dolWotc", "irsWotc"],
      text: "Many employers ask about records. The Equal Employment Opportunity Commission, or EEOC, is the federal office for fair hiring. Its page says an employer may look at a record. But the employer may not treat people differently because of race or national origin. The employer should ask if the record matters for the job. That means how serious it was, how long ago it was, and what the job is. An arrest alone is not proof of a crime. These rules cover private employers with 15 or more workers, and your state may add more. If you think an employer treated you unfairly because of your record, you can contact the EEOC to ask if it can help. Its rules are about unfair treatment tied to things like race or national origin, and a record can be part of that. It costs nothing and you do not need a lawyer. The page says you have 180 days to file, or 300 days in some places. For a federal job, you must contact an EEO counselor within 45 days. The number is 1-800-669-4000. For most federal jobs, the page says an agency generally cannot ask about a record until it makes a conditional offer. The Federal Bonding Program covers an employer's loss from employee theft for the first six months, at no cost to you or the employer. Call 1-800-233-2258. American Job Centers help with job searches. There are nearly 2,300. Find one with the CareerOneStop finder, or call 1-877-US-2JOBS. An employer tax credit for hiring some people with records was authorized until December 31, 2025. That date has passed, and the pages do not say if it was extended, so do not count on it."
    },
    "reentry-background-check": {
      title: "Your background report and fixing mistakes",
      kind: "reentry",
      sources: ["ftcEmployerChecks", "cfpbHandout", "cfpbCompanies", "eeocBackground", "ftcFreeReports"],
      text: "Some employers pay a company to make a background report. It can include public records, like arrests and convictions. You do not need to tell me about your case. Here is what the Federal Trade Commission, or FTC, says. The employer must tell you in writing and ask for your written permission. You can say no, but you may not get the job. Before it turns you down because of the report, the employer must give you a copy and a summary of your rights. If you are turned down, you have the right to dispute mistakes with the company. You also have the right to one more free report if you ask within 60 days. The Consumer Financial Protection Bureau says it is a good idea to ask for your own report and check it. When you give permission, ask which company the employer uses. If you find a mistake, tell that company in writing. Send copies, not your originals. The handout says the company generally has 30 days to look into it. You can also tell the employer. To complain, go to ReportFraud.ftc.gov or call 1-877-382-4357. The pages I read do not say how to get your record from a court or the state, or what that costs. A credit report is different. It is free once every 12 months at AnnualCreditReport.com, or call 1-877-322-8228."
    },
    "reentry-record-clearing": {
      title: "Clearing a record: what the pages say",
      kind: "reentry",
      sources: ["nrrcSpotlight", "nrrcCleanSlate", "nrrcFindLawyer", "cfpbHandout", "lscHelp"],
      text: "The pages I read say little about clearing a record, and I cannot tell you if you can clear yours. One page from the National Reentry Resource Center, a federally funded center, says record clearance means the record is removed from public access. That includes online searches and formal background checks. The page is from December 2023. It does not say who qualifies. Whether, when and how a record can be cleared depends on the state. The pages I read do not say if a federal conviction can be cleared. They do not explain the words expunge and seal. The same center runs the Clean Slate Clearinghouse. It lists record clearance rules for all states. It also has a Find A Lawyer tool. You pick your state and it lists legal aid groups, bar associations and others who do this work. The page says the list is for information only, and the center does not recommend anyone. A federal handout on background reports says help from an attorney may be necessary. The Legal Services Corporation, funded by Congress, helps you find free legal aid for civil problems. Its page does not say which problems each office takes, so ask the office. The next step is to look up your state at nationalreentryresourcecenter.org/cleanslate. I can read it with you."
    },
    "reentry-supervision": {
      title: "Reporting while under supervision",
      kind: "reentry",
      sources: ["uscSupervision", "uscOverview", "uscInitialReport", "uscReportOfficer", "bjaSupervision"],
      text: "Your own paperwork tells you your conditions. I cannot tell you what they are, and I cannot say if something breaks one. Ask your officer. You do not need to tell me about your case. Here is what federal court pages say in general. Probation is time in the community instead of prison. Supervised release is time in the community after prison. The court sets the conditions. Some are for everyone, like no new crimes. Others depend on the judge and the person. The page says officers keep regular contact, by phone, video, or in person at the office or in the community. That can include homes or job sites. An officer also makes a plan with goals, and may point you to services like treatment or job help. Sample wording on one court page says to report within 72 hours of release, unless the officer says to report somewhere else or at another time. It is sample wording only. Your own court order controls. These pages are about federal supervision. State probation and parole rules come from each state. I cannot tell you what would happen in your case if a condition is not met. Ask your officer. If you do not understand a condition, ask your officer to explain it."
    },
    "reentry-voting": {
      title: "Voting after a conviction",
      kind: "reentry",
      sources: ["dojVoting", "usaGovVote"],
      text: "Whether you can vote after a conviction depends on your state. You do not need to tell me about your case. The U.S. Department of Justice has a guide with every state. The copy I read says it is up to date through September 2024. Laws can change. It says that in some places a conviction never takes away the right to vote. Maine, Vermont and Washington, D.C. are listed that way. In many states, a person loses the right only while in prison. In others, the right comes back after the whole sentence, including probation or parole. Some also want fines paid or paperwork shown. A misdemeanor usually does not change voting rights. The guide says that once you are eligible, in many states all you need to do is register. Rules can differ if you were convicted in a different state or in federal court, so check your state's entry. To find your state, open the guide at justice.gov, or ask your state or local election office. USAGov, a government site, also says to ask your state or local election office any question about who can vote. You can reach USAGov at 1-844-USAGOV1. I can read your state's page with you. I cannot say if you can vote. Your state decides."
    },
    "reentry-help": {
      title: "Help lines: 211, 988, SAMHSA and free legal aid",
      kind: "reentry",
      sources: ["fcc211", "samhsa988", "samhsaHelpline", "lscHelp"],
      text: "Coming home is hard, and asking for help is smart. If you are in danger, call 911 or your local emergency number. In many states, you can dial 211 to be pointed to health and human service agencies. In many states it connects you to food, shelter, rent and utility help, counseling, and job training. You can also text or use 211.org. A government page from 2024 does not say if it costs anything or is private. Call 988 if you are in a crisis, or worried about someone else. It is for mental health and substance use support, any time, by call, text or chat. SAMHSA says you do not have to give payment or insurance information. Texting may cost data fees. The pages I read do not say that 988 is private, so I cannot promise that. SAMHSA's helpline is 1-800-662-HELP, or 4357. Its page calls it free, confidential, and open every day, at all hours. It sends you to treatment for mental health or drug and alcohol problems. It does not give counseling. The page is from 2023. For a civil legal problem, the Legal Services Corporation, funded by Congress, lists free legal aid for low-income people in every state. Its page does not say if it helps with criminal cases. Go to lsc.gov and search your city."
    },
    "reentry-school": {
      title: "School and training after release",
      kind: "reentry",
      sources: ["fsaCriminal", "fsaDcl", "fsaHandbook", "octaeAefla", "octaeContacts", "ajcFinder"],
      text: "Federal student aid pages say a drug conviction no longer affects your aid. They also say that once you are released, limits tied to being in prison are removed. A person on probation or parole, or in a halfway house, may be eligible. A Pell Grant is federal aid for college. In general it is for undergraduate students. A letter to schools says that while someone is in prison, a Pell Grant is only for an approved prison education program. That letter says a halfway house or home detention does not count as incarcerated for this rule. That letter is written for schools, so these pages do not give plain steps for a person at home. They do not give an amount or a deadline. The next step is the FAFSA, the form for federal aid, on studentaid.gov. I can read it with you. For basic skills, the Department of Education says adult education helps adults build skills for work, family and community life. Each state has an adult education contact. The list is at octae.ed.gov under State Contacts. The pages I read do not cover the GED or other high school equivalency tests. Ask your state adult education office or an American Job Center. CareerOneStop has a finder to search by location."
    }
  },

  PHRASES: {
    "reentry-jobs": ["Can a company refuse to hire me because I have a record?", "Is there a program that helps me get hired after prison?", "Where can I get help finding a job?"],
    "reentry-background-check": ["How do I see what is on my background check?", "There is a mistake on my background report, what do I do?", "Do I get to see the report if I don't get the job?"],
    "reentry-record-clearing": ["Can I get my record cleared?", "How do I find a lawyer to help with my record?", "What does it mean to seal or expunge a record?"],
    "reentry-supervision": ["What do I have to do when I report to my officer?", "How does probation work?", "What does supervised release mean?"],
    "reentry-voting": ["Can I vote if I have a felony?", "Do I get my right to vote back?", "How do I find out if I can vote in my state?"],
    "reentry-help": ["Who can I call when I need help?", "What is 211?", "Is there a free lawyer for me?"],
    "reentry-school": ["Can I go to college after prison?", "Can I get a Pell Grant with a record?", "How do I get my GED?"]
  },

  KEYS: {
    "reentry-jobs": "the federal office for fair hiring",
    "reentry-background-check": "written permission",
    "reentry-record-clearing": "record clearance means",
    "reentry-supervision": "Your own paperwork",
    "reentry-voting": "depends on your state",
    "reentry-help": "dial 211 to be pointed",
    "reentry-school": "once you are released"
  }
};
