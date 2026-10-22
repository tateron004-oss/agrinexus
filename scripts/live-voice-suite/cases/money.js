"use strict";
// A person's questions about their own money, answered from the checked guide (nexus/knowledge/money-guide.js). Each must put its official sources and the date checked on the screen, and the key fact for the topic. They change nothing on the
// account. The two guard cases check the owner's decision of 22 October 2026: "what should I invest in?" is answered by teaching how to choose, and a question that asks for a pick is still refused.
const strict = (id, say, key) => ({ id: `money-${id}`, area: "money", say, timeoutMs: 45000, expect: { screen: ["text", "list"], text: key, notText: "I cannot find|not sure what you" } });

module.exports = Object.freeze([
  strict("overview", "I want to learn about money", "six steps"),
  strict("spending-plan", "How do I make a budget?", "four steps"),
  strict("irregular-income", "My income changes every month, how do I plan?", "estimated tax"),
  strict("bank-account", "What does FDIC insurance cover?", "EDIE"),
  strict("savings", "How much should I save for an emergency fund?", "no dollar or month target"),
  strict("free-help", "How do I find a nonprofit credit counselor?", "Financial Counseling Association"),
  strict("tax-help", "What is the earned income tax credit?", "investment income under"),
  strict("credit", "How do I check my credit report?", "AnnualCreditReport"),
  strict("debt-plan", "Which debt should I pay first?", "debt worksheet"),
  strict("costly-borrowing", "What is a payday loan?", "almost 400 percent"),
  strict("overdraft-bnpl", "How does buy now pay later work?", "no grace period"),
  strict("debt-collectors", "A debt collector keeps calling me, what are my rights?", "validation notice"),
  strict("student-loans", "How do I repay my student loans?", "loan servicers"),
  strict("homeownership", "What are closing costs?", "Loan Estimate"),
  strict("housing-trouble", "I'm behind on my mortgage, what can I do?", "HOPE Hotline"),
  strict("investing-basics", "What is the difference between saving and investing?", "compound interest"),
  strict("investment-types", "What is a target-date fund?", "last in line"),
  strict("cash-like", "What is a certificate of deposit?", "Brokered CDs"),
  strict("what-to-invest", "What should I invest in?", "will not name a stock"),
  strict("fees", "What is an expense ratio?", "12b-1"),
  strict("retirement-accounts", "What is vesting?", "cliff vesting"),
  strict("ira", "What is the difference between a Roth and a traditional IRA?", "sweep program"),
  strict("brokerage-and-kids", "What is SIPC?", "margin account"),
  strict("scams", "How do I spot an investment scam?", "Affinity fraud"),
  strict("account-security", "How do I protect my accounts?", "two-factor authentication"),
  strict("guard-refuses-a-pick", "Which coin should I invest in?", "tell you what to buy")
]);
