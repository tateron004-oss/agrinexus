"use strict";

// Koach Learn course (shared): "Understanding Cryptocurrency and Blockchain" (also the list's Blockchain Basics). Goes in Seniors and Technology (first), Athletes, Re-Entry, Small Business, Non Profits, Youth,
// Veterans (military), Workforce Development and Undeserved Community. Explains how it works and its risks; it does NOT recommend buying (README rule 6). Shape: scripts/koachlearn-courses/README.md.

const FTC_CRYPTO = { name: "FTC: What to know about cryptocurrency and scams", url: "https://consumer.ftc.gov/articles/what-know-about-cryptocurrency-and-scams" };

module.exports = {
  id: "crypto-and-blockchain",
  category: "Seniors and Technology",
  name: "Understanding Cryptocurrency and Blockchain",
  skills: "Explaining blockchain in plain words, Explaining how crypto is sent and stored, Naming the risks, Spotting crypto scams, Reporting a scam",
  outcome: "explain in plain words how a blockchain and a cryptocurrency work, name the main risks, and check any crypto offer or message against the warning signs of a scam, so you can make your own careful decision and know where to report fraud.",
  about: [
    "You hear about Bitcoin and crypto on the news, at work, from family and in ads. Some people make money; many lose it, and crypto is one of the most common ways scammers ask to be paid. This course explains how it works so you can understand it and protect yourself and the people you care about.",
    "In Chapter 1 you learn what a blockchain is, what a cryptocurrency is, and how wallets and keys work. In Chapter 2 you learn the risks, the warning signs of crypto scams, and where to report fraud.",
    "This course does not tell you whether to buy crypto. It is not financial advice. For money decisions, talk to a licensed professional you choose yourself. Each lesson takes about five minutes, with a knowledge check after each chapter and a 20-question quiz at the end."
  ],
  finalTask: "Make a one-page \"crypto safety card\" for yourself or a family member: two sentences on what a blockchain and a cryptocurrency are, three risks, four warning signs of a crypto scam, and the official places to report fraud. Then read one real crypto ad or message (from an email, a text or social media) and mark which warning signs it shows.",
  chapters: [
    {
      name: "Chapter 1: How crypto and blockchain work",
      lessons: [
        {
          title: "What a blockchain is",
          minutes: 5,
          goal: "Explain a blockchain in plain words using a simple picture.",
          text: [
            "Picture a notebook of payments that thousands of computers each keep a copy of. Every few minutes a new page of payments is added. Each page is locked to the page before it with a kind of math fingerprint, so if someone changes an old page, every other copy shows it does not match.",
            "That shared notebook is a blockchain. Each page is a block, and the pages are chained together in order. No single bank or company keeps the notebook; the network of computers does. This is called decentralized.",
            "Because of this design, a payment written into the blockchain is very hard to change or undo. Most blockchains are also public: anyone can look up the payments, even if the names behind them are not shown."
          ],
          words: [["Blockchain", "a shared record of transactions, kept by many computers, where each new block is linked to the one before it."], ["Block", "a group of transactions added to the blockchain together."], ["Decentralized", "run by a network of many computers instead of one bank or company."], ["Ledger", "a record of payments, like an account book."]],
          slides: [
            { title: "Picture a shared notebook", bullets: ["Thousands of computers keep a copy", "New pages of payments are added often", "Each page is locked to the one before"] },
            { title: "Blockchain words", bullets: ["Block = one page of payments", "Chain = pages linked in order", "Decentralized = no single bank in charge"] },
            { title: "What that means for you", bullets: ["Payments are very hard to change or undo", "Most blockchains are public records"] }
          ],
          tryIt: "Explain a blockchain to someone (or out loud to yourself) using the shared-notebook picture. Include the words block, chain and decentralized.",
          youCanNow: "explain what a blockchain is and why its records are hard to change."
        },
        {
          title: "What a cryptocurrency is",
          minutes: 5,
          goal: "Explain what a cryptocurrency is and how it differs from dollars in a bank.",
          text: [
            "A cryptocurrency (crypto) is digital money recorded on a blockchain. Bitcoin was the first; there are now thousands, such as Ether. A stablecoin is a kind of crypto designed to stay close to the value of a regular currency like the US dollar, but it can still fail.",
            "Crypto is not issued by a government, and its price goes up and down with what people are willing to pay. Prices can rise or fall a lot in one day.",
            "Crypto payments are different from card payments. The FTC says crypto payments do not come with the legal protections that credit and debit cards have, and they usually cannot be reversed. Money in crypto is also not the same as money in an insured bank account."
          ],
          words: [["Cryptocurrency (crypto)", "digital money recorded on a blockchain, like Bitcoin or Ether."], ["Stablecoin", "crypto designed to stay close to the value of a regular currency, such as the US dollar."], ["Volatile", "a price that can go up or down a lot, quickly."]],
          sources: [FTC_CRYPTO],
          slides: [
            { title: "Crypto is...", bullets: ["Digital money recorded on a blockchain", "Bitcoin was first; Ether is another", "Stablecoins try to match a currency like the dollar"] },
            { title: "Not like dollars in a bank", bullets: ["Not issued by a government", "Price can swing a lot in one day"] },
            { title: "Not like a card payment", bullets: ["No card-style legal protections (FTC)", "Usually cannot be reversed"] }
          ],
          tryIt: "Write three differences between paying with a debit card and paying with crypto. Use the FTC page in this lesson's sources to check your answer.",
          youCanNow: "explain what a cryptocurrency is and how it is different from bank money and card payments."
        },
        {
          title: "Wallets, keys and exchanges",
          minutes: 5,
          goal: "Explain how crypto is stored and sent, and what must never be shared.",
          text: [
            "Crypto is kept in a wallet: an app, website or small device that holds your keys. The public address is like an account number you can give someone so they can send you crypto. The private key, often shown as a recovery phrase (a list of 12 or 24 words), is like the master key. Whoever has it controls the crypto.",
            "Never share a recovery phrase or private key with anyone: not support staff, not a \"helper\", not an app, not an AI assistant. A real company will never ask for it. If you lose it, the crypto may be gone forever.",
            "An exchange is a company where people buy, sell and hold crypto. Exchanges can be hacked or go out of business. In the United States, check whether a company is registered and read its complaints before trusting it; regulators such as the SEC and CFTC publish warnings."
          ],
          words: [["Wallet", "an app or device that holds the keys to your crypto."], ["Public address", "a code others use to send you crypto, like an account number."], ["Private key / recovery phrase", "the secret that controls the crypto; never share it."], ["Exchange", "a company where people buy, sell and hold crypto."]],
          sources: [FTC_CRYPTO, { name: "SEC: Submit a tip or complaint", url: "https://www.sec.gov/tcr" }, { name: "CFTC: Submit a complaint", url: "https://www.cftc.gov/complaint" }],
          slides: [
            { title: "Wallet and keys", bullets: ["Wallet = app or device that holds your keys", "Public address = like an account number", "Private key / recovery phrase = the master key"] },
            { title: "Never share", bullets: ["Your recovery phrase or private key", "Not with support, helpers, apps or AI", "Real companies never ask for it"] },
            { title: "Exchanges", bullets: ["Companies to buy, sell and hold crypto", "Can be hacked or close", "Check complaints and regulator warnings first"] }
          ],
          tryIt: "Write one sentence each: what a public address is, what a recovery phrase is, and what you would say if a \"support agent\" asked for your recovery phrase.",
          youCanNow: "explain how crypto is stored and sent and why a recovery phrase must never be shared."
        }
      ],
      check: {
        title: "Knowledge Check 1: How crypto and blockchain work",
        questions: [
          { q: "Which picture best describes a blockchain?", options: ["A phone's contact list", "One bank's private spreadsheet", "A paper check", "A shared notebook of payments that many computers each keep a copy of"], answer: 3, why: "A blockchain is a shared record kept by many computers." },
          { q: "Why is it hard to change an old record on a blockchain?", options: ["It is printed on paper", "A judge guards it", "Each block is linked to the one before, so changes do not match other copies", "It is deleted every day"], answer: 2, why: "Linked blocks and many copies make changes show up." },
          { q: "What does the FTC say about crypto payments compared with credit cards?", options: ["They have more protection", "They are the same", "They do not come with the same legal protections and usually cannot be reversed", "They are always insured"], answer: 2, why: "The FTC warns crypto payments lack card-style protections." },
          { q: "What is a stablecoin?", options: ["A coin made of metal", "A type of wallet", "A government savings bond", "Crypto designed to stay close to a currency like the dollar"], answer: 3, why: "Stablecoins aim to track a regular currency, though they can still fail." },
          { q: "Someone from \"wallet support\" asks for your 12-word recovery phrase to fix a problem. What do you do?", options: ["Give it so they can help", "Give half of it", "Type it into an AI to check it", "Refuse; real companies never ask for it"], answer: 3, why: "Whoever has the recovery phrase controls the crypto." }
        ]
      }
    },
    {
      name: "Chapter 2: Risks, scams and reporting",
      lessons: [
        {
          title: "The real risks",
          minutes: 5,
          goal: "Name the main risks of holding or receiving crypto.",
          text: [
            "Price risk: crypto prices can drop sharply, and nobody can promise they will come back. Never put in money you need for rent, food, bills or medicine.",
            "Loss risk: if you lose your recovery phrase, or send crypto to the wrong address, it is usually gone. Payments usually cannot be reversed.",
            "Company risk: exchanges and apps can be hacked or close down. The FDIC says crypto assets are not covered by FDIC deposit insurance, which covers only deposits at FDIC-insured banks. Scam risk: crypto is a favorite payment method of scammers because it is fast and hard to get back.",
            "This course does not tell you whether to buy. If you are thinking about it, talk with a licensed financial professional you choose yourself, and read the official warnings first."
          ],
          words: [["Risk", "the chance of losing money or something going wrong."], ["FDIC insurance", "US government protection for money in insured bank deposit accounts; it does not cover crypto."]],
          sources: [FTC_CRYPTO, { name: "FDIC: Understanding deposit insurance", url: "https://www.fdic.gov/resources/deposit-insurance/understanding-deposit-insurance" }],
          slides: [
            { title: "Price risk", bullets: ["Prices can drop sharply", "Never use rent, food, bill or medicine money"] },
            { title: "Loss risk", bullets: ["Lost recovery phrase = lost crypto", "Wrong address or scam = usually gone"] },
            { title: "Company and scam risk", bullets: ["Apps and exchanges can be hacked or close", "Crypto is not FDIC-insured", "Scammers love crypto payments"] },
            { title: "Not advice", bullets: ["This course does not say buy or sell", "Talk to a licensed professional you choose"] }
          ],
          tryIt: "Write the four risks in your own words: price, loss, company and scam. For each one, write one way a person could protect themselves.",
          youCanNow: "name the main risks of crypto and explain why money you need should never be put at risk."
        },
        {
          title: "Spotting crypto scams",
          minutes: 5,
          goal: "Check a crypto offer or message against the warning signs of a scam.",
          text: [
            "The FTC lists signs of crypto scams. Only scammers demand payment in crypto, especially up front or to \"protect\" your money. Only scammers guarantee profits or big, quick returns. Celebrity endorsements can be fake.",
            "Watch for a new online friend or romantic partner who starts giving investment tips or asks for crypto. Watch for calls or texts claiming to be from a government agency, bank or utility that say you owe money or your account is frozen and you must pay in crypto or at a crypto ATM.",
            "Also watch for jobs that ask you to pay a fee in crypto, and for emails threatening to share private things unless you pay in crypto. When you see any of these, stop. Do not pay, do not click, and talk to someone you trust."
          ],
          steps: ["Does it ask you to pay in crypto or use a crypto ATM?", "Does it promise guaranteed or quick profits?", "Did it come from a new online friend, a romantic contact or a stranger?", "Does it rush you or threaten you?", "Any yes: stop, do not pay, and check with someone you trust."],
          words: [["Scam", "a trick to steal money or information."], ["Crypto ATM", "a machine that turns cash into crypto; scammers often tell victims to use one."], ["Romance scam", "a scam where someone builds an online relationship to get money."]],
          sources: [FTC_CRYPTO],
          slides: [
            { title: "Only scammers...", bullets: ["Demand payment in crypto", "Guarantee profits or quick returns", "Use fake celebrity endorsements"] },
            { title: "Watch for", bullets: ["New online friends giving investment tips", "\"Government\" or \"bank\" calls saying pay in crypto", "Jobs that charge a crypto fee"] },
            { title: "When you spot one", bullets: ["Stop", "Do not pay or click", "Talk to someone you trust"] }
          ],
          tryIt: "Find one crypto ad, message or social media post. Go through the five check questions and write down every warning sign it shows.",
          youCanNow: "check a crypto offer or message against the warning signs and stop before paying."
        },
        {
          title: "Reporting fraud and helping others",
          minutes: 5,
          goal: "Know where to report a crypto scam and what to write down.",
          text: [
            "If you or someone you know was targeted, report it. The FTC lists these places: the FTC at ReportFraud.ftc.gov, the CFTC at cftc.gov/complaint, the SEC at sec.gov/tcr, the FBI's Internet Crime Complaint Center (IC3) at ic3.gov, and the crypto exchange or app used to send the money.",
            "Write down what happened: dates, the amount, the wallet address or transaction ID, the names and phone numbers the scammer used, and screenshots of messages. Do not send more money to anyone who promises to \"recover\" your lost crypto; that is often a second scam.",
            "Talk about scams with family and friends, especially older relatives and young people who are new to money apps. A short conversation can stop a loss."
          ],
          steps: ["Stop all payments and contact with the scammer.", "Write down dates, amounts, wallet addresses, transaction IDs, names and numbers.", "Save screenshots.", "Report at ReportFraud.ftc.gov and ic3.gov, plus the SEC or CFTC if it was an investment.", "Tell the exchange or app you used.", "Ignore anyone who offers to recover your money for a fee."],
          words: [["Transaction ID", "the code that identifies one crypto payment on the blockchain."], ["IC3", "the FBI's Internet Crime Complaint Center, which takes reports of online crime."], ["Recovery scam", "a second scam that promises to get your lost money back for a fee."]],
          sources: [FTC_CRYPTO, { name: "FTC: ReportFraud", url: "https://reportfraud.ftc.gov" }, { name: "FBI Internet Crime Complaint Center (IC3)", url: "https://www.ic3.gov" }, { name: "SEC: Submit a tip or complaint", url: "https://www.sec.gov/tcr" }, { name: "CFTC: Submit a complaint", url: "https://www.cftc.gov/complaint" }],
          slides: [
            { title: "Where to report", bullets: ["ReportFraud.ftc.gov", "ic3.gov (FBI)", "sec.gov/tcr or cftc.gov/complaint for investments", "The exchange or app you used"] },
            { title: "Write it down", bullets: ["Dates and amounts", "Wallet address and transaction ID", "Names, numbers, screenshots"] },
            { title: "Watch for recovery scams", bullets: ["Nobody legitimate charges a fee to \"recover\" crypto", "Do not pay again"] }
          ],
          tryIt: "Final task: make your one-page crypto safety card (what blockchain and crypto are, three risks, four scam signs, where to report). Then mark the warning signs in one real crypto ad or message.",
          youCanNow: "report a crypto scam to the right places and help family and friends avoid one."
        }
      ],
      check: {
        title: "Knowledge Check 2: Risks, scams and reporting",
        questions: [
          { q: "Which money should never be put into crypto?", options: ["Play money in a game", "Money you can afford to lose after advice", "Money you need for rent, food or medicine", "None of it is ever a risk"], answer: 2, why: "Price swings mean you could lose money you need." },
          { q: "According to the FDIC, crypto is:", options: ["Fully FDIC-insured", "Insured only on weekends", "Not covered by FDIC deposit insurance", "Insured if bought on a phone"], answer: 2, why: "FDIC deposit insurance does not cover crypto." },
          { q: "A caller says he is from the government and you must pay a fine at a crypto ATM today. This is:", options: ["A normal government payment", "A tax refund", "A bank rule", "A scam warning sign"], answer: 3, why: "Only scammers demand payment in crypto." },
          { q: "A new online friend promises guaranteed profits if you invest in crypto. What do you do?", options: ["Invest a little to test it", "Send your recovery phrase", "Ask for a bigger guarantee", "Stop; guaranteed profits are a scam sign"], answer: 3, why: "Only scammers guarantee profits." },
          { q: "After losing money to a crypto scam, someone offers to get it back for a fee. This is probably:", options: ["A recovery scam", "The FBI", "Your bank", "A refund"], answer: 0, why: "Paying a fee to recover crypto is a common second scam." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Understanding Cryptocurrency and Blockchain",
    questions: [
      { q: "A blockchain is:", options: ["A shared record of transactions kept by many computers", "A type of bicycle lock", "One company's secret file", "A paper receipt"], answer: 0, why: "Many computers keep copies of the same linked record." },
      { q: "In a blockchain, a \"block\" is:", options: ["A group of transactions added together", "A password", "A crypto ATM", "A bank branch"], answer: 0, why: "Each block holds a group of transactions." },
      { q: "\"Decentralized\" means:", options: ["Run by one bank", "Closed on weekends", "Run by a network of many computers instead of one company", "Only for governments"], answer: 2, why: "No single company keeps the record." },
      { q: "Most blockchains are:", options: ["Secret and hidden", "Deleted every year", "Printed in newspapers", "Public records anyone can look up"], answer: 3, why: "Anyone can look up the transactions, though names are not shown." },
      { q: "Bitcoin is an example of:", options: ["A credit card", "A bank account", "A cryptocurrency", "A stablecoin run by the government"], answer: 2, why: "Bitcoin was the first cryptocurrency." },
      { q: "Crypto prices are called volatile because they:", options: ["Never change", "Only go up", "Are set by law", "Can rise or fall a lot quickly"], answer: 3, why: "Volatile means big, fast price changes." },
      { q: "If you pay a scammer with crypto, the FTC says you:", options: ["Can always cancel it", "Usually cannot reverse the payment", "Get a refund from the bank", "Are insured"], answer: 1, why: "Crypto payments usually cannot be reversed." },
      { q: "A crypto wallet is:", options: ["A leather wallet", "An app or device that holds the keys to your crypto", "A bank account", "An exchange's office"], answer: 1, why: "Wallets hold the keys that control crypto." },
      { q: "Which is safe to give someone who will send you crypto?", options: ["Your public address", "Your recovery phrase", "Your private key", "Your bank password"], answer: 0, why: "The public address is like an account number." },
      { q: "Who controls the crypto in a wallet?", options: ["The phone company", "Whoever has the private key or recovery phrase", "The government", "The person with the public address"], answer: 1, why: "The private key is the master key." },
      { q: "An exchange is:", options: ["A company where people buy, sell and hold crypto", "A government office", "A type of blockchain block", "A recovery phrase"], answer: 0, why: "Exchanges are companies for trading and holding crypto." },
      { q: "Which is a company risk with crypto?", options: ["The exchange could be hacked or close", "The price is fixed", "It is FDIC-insured", "It cannot be stolen"], answer: 0, why: "Exchanges and apps can be hacked or go out of business." },
      { q: "Does this course tell you to buy crypto?", options: ["Yes, always", "Yes, but only Bitcoin", "No; talk to a licensed professional you choose for money decisions", "Yes, with rent money"], answer: 2, why: "The course explains how crypto works and its risks; it is not advice." },
      { q: "You send crypto to the wrong address. What usually happens?", options: ["It comes back automatically", "It is usually gone", "The bank refunds it", "The FTC sends it back"], answer: 1, why: "Blockchain payments usually cannot be undone." },
      { q: "Which is a warning sign of a crypto scam?", options: ["A promise of guaranteed profits", "A clear price list", "A store that takes cards", "A receipt by email"], answer: 0, why: "Only scammers guarantee profits." },
      { q: "A dating-app match you never met asks you to invest in crypto. This is:", options: ["True love", "A common romance-scam sign", "A bank requirement", "A tax rule"], answer: 1, why: "New online contacts who push crypto are a scam sign." },
      { q: "A job offer says you must pay a training fee in crypto. You should:", options: ["Pay it quickly", "Stop; jobs that require a crypto fee are a scam sign", "Pay half", "Send your recovery phrase instead"], answer: 1, why: "The FTC lists crypto-fee jobs as a scam sign." },
      { q: "Where can you report crypto fraud in the US?", options: ["ReportFraud.ftc.gov and ic3.gov", "A random social media group", "The scammer's helpline", "Nowhere"], answer: 0, why: "The FTC and the FBI's IC3 take fraud reports." },
      { q: "What should you write down after a scam?", options: ["Nothing", "Dates, amounts, wallet address, transaction ID and screenshots", "Only your password", "Your recovery phrase"], answer: 1, why: "These details help investigators." },
      { q: "The best way to protect a family member from crypto scams is to:", options: ["Never talk about it", "Share the warning signs and where to report", "Give them your recovery phrase", "Tell them to invest quickly"], answer: 1, why: "A short conversation about warning signs can prevent a loss." }
    ]
  }
};
