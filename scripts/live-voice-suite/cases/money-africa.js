"use strict";
// Questions about money in Kenya and in Nigeria, answered from the checked guide (nexus/knowledge/money-guide.js) with those countries' own regulators as the sources. Each names the country, a SACCO, the NDIC and so on, because the live
// rig is a guest and sends no country of its own. Each must put its official sources and the date checked on the screen, and the key fact for the topic. They change nothing on the account.
const strict = (id, say, key) => ({ id: `money-${id}`, area: "money", say, timeoutMs: 45000, expect: { screen: ["text", "list"], text: key, notText: "I cannot find|not sure what you" } });

module.exports = Object.freeze([
  strict("ke-bank", "Is my money safe in a Kenyan bank?", "KSh 500,000"),
  strict("ke-sacco", "How do I check if a SACCO is licensed?", "Sacco Societies Act"),
  strict("ke-mobile-money", "How is M-Pesa regulated in Kenya?", "National Payment System Act"),
  strict("ke-digital-loans", "Are digital loan apps in Kenya legal?", "Digital Credit Providers"),
  strict("ke-credit", "How do I get my CRB report?", "once a year"),
  strict("ke-saving", "How do I buy Treasury bills in Kenya?", "lodged and approved"),
  strict("ke-pension", "What is NSSF in Kenya?", "Lower Earnings Limit"),
  strict("ke-tax", "How do I file my KRA returns?", "iTax"),
  strict("ke-scams", "How do I spot an investment scam in Kenya?", "public caution"),
  strict("ke-chama", "What is a chama?", "table banking"),
  strict("ng-bank", "How much does the NDIC cover?", "will not pick one"),
  strict("ng-microfinance", "What is ajo?", "Central Bank lists microfinance banks"),
  strict("ng-mobile-money", "How do I complain about a wrong transfer in Nigeria?", "licensed names"),
  strict("ng-digital-loans", "How do I check a loan app in Nigeria?", "watchlist"),
  strict("ng-credit", "How do I get my credit report in Nigeria?", "credit register"),
  strict("ng-saving", "How do I buy FGN savings bonds?", "Find a Registered Operator"),
  strict("ng-pension", "How do I open a PenCom RSA?", "Contributory Pension Scheme"),
  strict("ng-tax", "How does personal income tax work in Nigeria?", "Tax ID"),
  strict("ng-scams", "How do I spot a Ponzi scheme in Nigeria?", "whistleblowing form")
]);
