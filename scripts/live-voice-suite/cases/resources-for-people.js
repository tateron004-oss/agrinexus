"use strict";
// Questions for veterans, older adults, young people and nonprofits, answered from the checked guide (nexus/knowledge/us-community-support.js). Each must put its official sources and the date checked on the screen,
// and the key number or fact for the topic. They change nothing on the account.
const strict = (id, say, key) => ({ id: `res-${id}`, area: "resources", say, timeoutMs: 45000, expect: { screen: ["text", "list"], text: key, notText: "I cannot find|not sure what you" } });

module.exports = Object.freeze([
  strict("vet-crisis", "What is the Veterans Crisis Line?", "838255"),
  strict("vet-overview", "What help is there for veterans?", "877-424-3838"),
  strict("vet-benefits", "What benefits can a veteran get?", "800-827-1000"),
  strict("vet-health", "How does a veteran apply for VA health care?", "10-10EZ"),
  strict("vet-disability", "How do I file a VA disability claim?", "tax-free"),
  strict("vet-gi-bill", "Tell me about the GI Bill.", "888-442-4551"),
  strict("vet-home-loan", "Can a veteran get a VA home loan?", "Certificate of Eligibility"),
  strict("vet-free-help", "Who can help me with my VA claim for free?", "always free"),
  strict("vet-homeless", "I'm a veteran and I'm homeless, what can I do?", "877-424-3838"),
  strict("vet-jobs", "Help me find a job as a veteran.", "1-866-237-0275"),
  strict("vet-business", "Find resources for veteran-owned businesses.", "Veterans Business Outreach"),
  strict("vet-center", "What is a Vet Center?", "877-927-8387"),
  strict("sr-eldercare", "What help is there for seniors?", "1-800-677-1116"),
  strict("sr-medicare", "How do I get help with Medicare?", "1-800-633-4227"),
  strict("sr-extra-help", "What is Extra Help for prescription costs?", "Extra Help"),
  strict("sr-social-security", "What is the Social Security phone number?", "1-800-772-1213"),
  strict("sr-benefits", "How can an older person find benefits they qualify for?", "BenefitsCheckUp"),
  strict("sr-fraud", "I think my grandmother is being scammed, who do I call?", "833-372-8311"),
  strict("sr-abuse", "My dad is being neglected, who do I report it to?", "Adult Protective Services"),
  strict("yt-crisis", "Who can a teenager talk to if they are struggling?", "741741"),
  strict("yt-abuse", "What is the Childhelp hotline?", "422-4453"),
  // ("How do I report child abuse?" is taken by the safety layer first: care, then 988 and 911. That is deliberate, and a person may then ask for the Childhelp number.)
  strict("yt-abuse-safety", "How do I report child abuse?", "immediate danger"),
  strict("yt-runaway", "I want to run away from home, who can help?", "786-2929"),
  strict("yt-lgbtq", "Is there support for LGBTQ youth?", "678-678"),
  strict("yt-trafficking", "What is the human trafficking hotline?", "888-373-7888"),
  strict("yt-work-rules", "How many hours can a 15 year old work?", "18 hours in a school week"),
  strict("yt-job-corps", "What is Job Corps?", "16 through 24"),
  strict("yt-fafsa", "Is the FAFSA free?", "fafsa\\.gov"),
  strict("np-fees", "How much does it cost to apply for 501(c)(3) status?", "\\$275"),
  strict("np-990", "What is Form 990?", "990-N"),
  strict("np-receipts", "Do I have to give donors a receipt?", "\\$250"),
  strict("np-registration", "Do I need to register my nonprofit to fundraise in my state?", "charity"),
  strict("np-grants", "How does a nonprofit register for federal grants on SAM.gov?", "Unique Entity ID"),
  strict("np-check", "How do I check that a charity is real?", "Tax Exempt Organization Search"),
  strict("np-governance", "Does our nonprofit board need a conflict of interest policy?", "conflict of interest"),
  strict("np-association", "How do I find my state association of nonprofits?", "councilofnonprofits")
]);
