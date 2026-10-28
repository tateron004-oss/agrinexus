"use strict";

// Koach Learn course (shared): "Online Shopping and Banking Safely". Goes in Seniors and Technology and Re-Entry, so the examples are everyday ones: groceries, a pharmacy order, a bill, a paycheck.
// Shape: scripts/koachlearn-courses/README.md; model: re-entry/reentry-ai-digital-confidence.js. Facts checked 27 October 2026 against the FTC, FDIC and NCUA pages in `sources`.

module.exports = {
  id: "online-shopping-banking",
  category: "Seniors and Technology",
  name: "Online Shopping and Banking Safely",
  skills: "Checking that a store is real, Paying the safer way, Tracking and returning an order, Using a bank app safely, Spotting and reporting money scams",
  outcome: "buy something online from a store you have checked, pay the safer way, keep the records, and use your bank's official app or website to check your balance and spot a charge you did not make.",
  about: [
    "Many people now buy groceries, medicine and household items online and pay bills from their phone. Done safely, it saves trips and time. Done carelessly, it can cost money.",
    "This course shows you how to check a store before you buy, pay in the way that protects you most, track and return an order, use your bank's app or website safely, and spot money scams.",
    "Each lesson takes about five minutes. Read the lesson, watch the slides, then do the \"Try it now\" task. There is a short knowledge check after each chapter and a 20-question quiz at the end. This course teaches safe habits; it is not financial advice. For questions about your own account, call the number on the back of your bank card."
  ],
  finalTask: "Choose one item you need. Check the store with three checks (real web address, reviews and complaints, return policy), add it to the cart, and stop at the payment page, noting which payment method you would use and why. Then open your bank's official app or website, check your balance and recent transactions, and point out what you would do if you saw a charge you did not make.",
  chapters: [
    {
      name: "Chapter 1: Shopping online safely",
      lessons: [
        {
          title: "Checking that a store is real",
          minutes: 5,
          goal: "Check a website before you buy from it.",
          text: [
            "Fake stores copy the look of real ones and advertise prices that are too good to be true. Before you buy, take a minute to check.",
            "Type the store's address yourself, or use its official app, instead of clicking an ad or a link in a text. Look at the address bar: is the name spelled right? Look for https and a lock, but know that the Federal Trade Commission (FTC) warns scammers can use these too.",
            "The FTC suggests searching the store or product name with the word \"complaint\" or \"scam\" to see what other buyers say, reading reviews with care since some are fake, and checking the return policy before you buy: how many days you have, and who pays to send it back."
          ],
          steps: ["Type the store's address yourself or use its official app.", "Check the spelling of the web address.", "Search the store name plus \"complaint\" or \"scam\".", "Read several reviews, not just the stars.", "Read the return policy: how many days, and who pays return shipping."],
          words: [["Web address", "the name of a website, shown in the bar at the top of the browser, like target.com."], ["https", "a sign that the connection to a site is protected; scammers can use it too."], ["Return policy", "the store's rules for sending things back."]],
          slides: [
            { title: "Fake stores look real", bullets: ["They copy real logos", "Prices that are too good to be true"] },
            { title: "Get there safely", bullets: ["Type the address yourself or use the official app", "Check the spelling", "https and a lock help, but scammers use them too"] },
            { title: "Three checks before you buy", bullets: ["Search the name plus \"complaint\" or \"scam\"", "Read several reviews, not just stars", "Read the return policy"] }
          ],
          sources: [{ name: "FTC: Online shopping", url: "https://consumer.ftc.gov/articles/online-shopping" }],
          tryIt: "Pick a store you might buy from. Do the three checks: search its name with \"complaint\", read three reviews, and find how many days you have to return an item.",
          youCanNow: "check a store's address, reputation and return policy before you buy."
        },
        {
          title: "Paying the safer way",
          minutes: 5,
          goal: "Choose a payment method that protects you if something goes wrong.",
          text: [
            "How you pay matters. The FTC says paying by credit card gives you strong protection: you can dispute a charge that is wrong, for something that never arrived or was not as described. Act fast and tell your card company as soon as you see a problem.",
            "The FTC warns never to pay an online seller with gift cards, wire transfers, payment apps or cryptocurrency. These are hard to get back, which is why scammers ask for them.",
            "Type your card details only on the payment page of a store you have checked, never in an email, text or chat. On a shared or library computer, do not let the browser save your card."
          ],
          steps: ["Use a credit card when you can, or a trusted checkout from the store you checked.", "Never pay a seller by gift card, wire transfer, payment app or cryptocurrency.", "Type card details only on the checked store's payment page.", "Do not save your card on a shared computer.", "Watch your statement and report problems quickly."],
          words: [["Credit card", "a card that borrows money you pay back later; it has strong protections for disputes."], ["Dispute", "telling your card company a charge is wrong so it can look into it."], ["Wire transfer", "sending money directly from one account to another; very hard to get back."]],
          slides: [
            { title: "How you pay matters", bullets: ["Credit card: strong protection for disputes", "Tell your card company quickly"] },
            { title: "Never pay a seller with", bullets: ["Gift cards", "Wire transfers", "Payment apps", "Cryptocurrency"] },
            { title: "Card details", bullets: ["Only on a checked store's payment page", "Never in an email, text or chat", "Do not save them on shared computers"] }
          ],
          sources: [{ name: "FTC: Online shopping", url: "https://consumer.ftc.gov/articles/online-shopping" }],
          tryIt: "Look at the cards and payment methods you have. Write which one you would use to buy online and why, and which methods you would refuse if a seller asked.",
          youCanNow: "choose the payment method that protects you and refuse the ones scammers ask for."
        },
        {
          title: "Tracking, receiving and returning an order",
          minutes: 4,
          goal: "Keep your order records, track a package and start a return.",
          text: [
            "After you buy, the store sends an order confirmation by email. Keep it. The FTC suggests keeping your order details, the return policy, the seller's shipping promise, your messages with the seller and your payment statement.",
            "Track the package from your account on the store's website or app, not from a link in a surprise text. Fake \"delivery problem\" texts are a common scam.",
            "To return something, sign in to your account, find the order, and choose return. Follow the steps, keep the receipt from the drop-off, and watch for the refund on your statement. If the seller will not fix a problem, you can report it to the FTC at reportfraud.ftc.gov."
          ],
          steps: ["Save the order confirmation email.", "Track the package from your account on the store's site or app.", "Ignore surprise delivery texts with links.", "To return: sign in, find the order, choose return, follow the steps.", "Keep the drop-off receipt and check for the refund."],
          words: [["Order confirmation", "the email that proves what you bought and what you paid."], ["Tracking", "following where your package is on its way to you."], ["Refund", "money given back to you."]],
          slides: [
            { title: "Keep records", bullets: ["Order confirmation", "Return policy and shipping promise", "Messages and your statement"] },
            { title: "Track safely", bullets: ["Use your account on the store's site or app", "Ignore surprise delivery texts with links"] },
            { title: "Returns", bullets: ["Sign in, find the order, choose return", "Keep the drop-off receipt", "Watch for the refund"] }
          ],
          sources: [{ name: "FTC: Online shopping", url: "https://consumer.ftc.gov/articles/online-shopping" }, { name: "FTC: Report fraud", url: "https://reportfraud.ftc.gov/" }],
          tryIt: "Find an order confirmation email in your inbox (or one from a past purchase) and make an email folder or label called \"Orders\" to keep it in. If you have an open order, track it from the store's own app or site.",
          youCanNow: "keep order records, track a package safely and start a return."
        }
      ],
      check: {
        title: "Knowledge Check 1: Shopping online safely",
        questions: [
          { q: "An ad shows a brand-name TV for a tenth of the normal price. What should you do first?", options: ["Buy it before it is gone", "Check the store: search its name with \"complaint\" or \"scam\"", "Pay with a gift card", "Send your card number by text"], answer: 1, why: "Prices that are too good to be true are a warning sign; check first." },
          { q: "What does the FTC say about https and the lock icon?", options: ["They prove a store is honest", "They are only on fake stores", "They mean free shipping", "They help, but scammers can use them too"], answer: 3, why: "Encryption protects the connection, not the honesty of the seller." },
          { q: "Which payment gives you the strongest protection to dispute a wrong charge?", options: ["A credit card", "A gift card", "A wire transfer", "Cryptocurrency"], answer: 0, why: "The FTC says credit cards give the strongest dispute protection." },
          { q: "A seller asks you to pay with gift cards. What do you do?", options: ["Buy the gift cards", "Pay half with gift cards", "Refuse; it is a scam sign", "Send a photo of the cards"], answer: 2, why: "The FTC warns never to pay online sellers with gift cards." },
          { q: "You get a text about a \"delivery problem\" with a link. What is the safest step?", options: ["Click the link", "Reply with your address", "Check your order in the store's own app or website", "Pay the small fee"], answer: 2, why: "Track from your account, not from surprise links." }
        ]
      }
    },
    {
      name: "Chapter 2: Banking online safely",
      lessons: [
        {
          title: "Using your bank's app or website safely",
          minutes: 5,
          goal: "Sign in to your bank's official app or website and check your balance and transactions.",
          text: [
            "Online banking lets you see your balance, check what has been paid in and out, pay bills and move money between your own accounts, from your phone or computer.",
            "Get the bank's app only from the official app store, and check the developer is your real bank. Or type the bank's web address yourself; find it on your card, statement or by asking at the branch. Never sign in from a link in an email or text.",
            "Use a strong password used nowhere else and turn on two-step verification. Do not bank on public Wi-Fi without your phone's own data, and always sign out when you finish, especially on a shared computer."
          ],
          steps: ["Install the official bank app or type the bank's address yourself.", "Sign in with a strong, unique password.", "Turn on two-step verification in security settings.", "Look at your balance and recent transactions.", "Sign out when you finish."],
          words: [["Balance", "how much money is in your account now."], ["Transaction", "one payment in or out of your account."], ["Two-step verification", "a second check, usually a code sent to your phone, when you sign in."]],
          slides: [
            { title: "What online banking does", bullets: ["See your balance and transactions", "Pay bills", "Move money between your own accounts"] },
            { title: "Get there safely", bullets: ["Official app from the app store", "Or type the bank's address yourself", "Never sign in from an email or text link"] },
            { title: "Stay secure", bullets: ["Strong, unique password", "Two-step verification on", "Sign out when you finish"] }
          ],
          tryIt: "Open your bank's official app or website (type the address yourself). Sign in, look at your balance and your last five transactions, then sign out.",
          youCanNow: "sign in to your bank safely and check your balance and transactions."
        },
        {
          title: "Spotting a wrong charge and knowing your money is protected",
          minutes: 5,
          goal: "Review your transactions and know what to do about a charge you did not make.",
          text: [
            "Check your transactions at least once a week. Look for charges you do not recognize, even small ones; thieves sometimes test a card with a tiny charge first. Many banks let you turn on alerts that text or email you when money leaves your account.",
            "If you see a charge you did not make, call the number on the back of your card or in the official app, and act quickly. Many cards and apps let you lock or freeze the card right away.",
            "Money in a bank insured by the FDIC is protected up to $250,000 per depositor, per bank, for each account ownership category. Credit unions insured by the NCUA have the same $250,000 standard limit. The FDIC says crypto assets, stocks, bonds and mutual funds are not insured, even when sold by a bank."
          ],
          steps: ["Review transactions every week.", "Turn on account alerts in the app.", "If a charge is not yours: lock the card in the app if you can.", "Call the number on the back of your card.", "Watch for the bank's follow-up and check your next statement."],
          words: [["Alert", "a text or email your bank sends when something happens on your account."], ["FDIC", "the Federal Deposit Insurance Corporation, which insures money in US banks."], ["NCUA", "the National Credit Union Administration, which insures money in US credit unions."]],
          slides: [
            { title: "Check every week", bullets: ["Look for charges you do not know", "Even small ones", "Turn on account alerts"] },
            { title: "A charge is not yours", bullets: ["Lock the card in the app", "Call the number on the back of your card", "Act quickly"] },
            { title: "Your deposits are insured", bullets: ["FDIC banks: $250,000 per depositor, per bank, per ownership category", "NCUA credit unions: $250,000 standard limit"] },
            { title: "Not insured", bullets: ["Crypto, stocks, bonds and mutual funds", "Even when a bank sells them"] }
          ],
          sources: [{ name: "FDIC: Understanding deposit insurance", url: "https://www.fdic.gov/resources/deposit-insurance/understanding-deposit-insurance" }, { name: "NCUA: Share insurance coverage", url: "https://ncua.gov/consumers/share-insurance-coverage" }],
          tryIt: "In your bank app, find where alerts are set up and turn on an alert for payments. Then find the button that locks or freezes your card (do not press it unless you need to).",
          youCanNow: "check your transactions, set alerts, and act quickly on a charge you did not make."
        },
        {
          title: "Money scams: fake bank calls and payment app tricks",
          minutes: 5,
          goal: "Recognize a money scam and stop it.",
          text: [
            "A common scam: someone calls, texts or emails pretending to be your bank's fraud team. They say your account is in danger and ask for your password, a code sent to your phone, or for you to move money to a \"safe account\". A real bank will never ask for these.",
            "The FTC lists four signs of a scam: they pretend to be someone you trust, there is a problem or a prize, they pressure you to act now, and they want payment in an unusual way, like gift cards, wire transfers, payment apps or cryptocurrency.",
            "If in doubt, hang up. Call the number on the back of your card. Treat money sent through payment apps like cash: send it only to people you know. In the United States, report scams at reportfraud.ftc.gov."
          ],
          steps: ["Never share your password or a code sent to your phone.", "Never move money to a \"safe account\" because a caller says so.", "Hang up and call the number on the back of your card.", "Send payment app money only to people you know.", "Report scams at reportfraud.ftc.gov."],
          words: [["Impersonation", "pretending to be someone else, like your bank or a government office."], ["Payment app", "an app that sends money from person to person, like Venmo, Cash App or Zelle."]],
          slides: [
            { title: "Fake bank calls", bullets: ["\"Your account is in danger\"", "They ask for your password or a code", "Or to move money to a \"safe account\""] },
            { title: "FTC scam signs", bullets: ["Pretends to be someone you trust", "A problem or a prize", "Pressure to act now", "Unusual payment: gift card, wire, app, crypto"] },
            { title: "What to do", bullets: ["Hang up", "Call the number on the back of your card", "Payment apps: only people you know"] },
            { title: "Report it", bullets: ["reportfraud.ftc.gov"] }
          ],
          sources: [{ name: "FTC: How to avoid a scam", url: "https://consumer.ftc.gov/articles/how-avoid-scam" }, { name: "FTC: Report fraud", url: "https://reportfraud.ftc.gov/" }],
          tryIt: "Final task practice: write the phone number from the back of your bank card in a safe place at home. Then do the final task: check a store, choose your payment method, and review your bank transactions.",
          youCanNow: "spot a fake bank call or payment app trick, stop it, and report it."
        }
      ],
      check: {
        title: "Knowledge Check 2: Banking online safely",
        questions: [
          { q: "What is the safest way to reach your bank's website?", options: ["Type the address yourself or use the official app", "Click a link in a text", "Search and click the first ad", "Use a link a caller gives you"], answer: 0, why: "Typing the address or using the official app avoids fake sites." },
          { q: "You see a small charge you do not recognize. What do you do?", options: ["Ignore it because it is small", "Post about it online", "Wait a year", "Lock the card and call the number on the back"], answer: 3, why: "Thieves often test a card with a small charge; act quickly." },
          { q: "What is the standard FDIC insurance amount?", options: ["$1,000 per person", "$250,000 per depositor, per insured bank, per ownership category", "Unlimited", "Nothing; banks are not insured"], answer: 1, why: "The FDIC insures up to $250,000 per depositor, per bank, per ownership category." },
          { q: "A caller from \"your bank\" asks for the code just sent to your phone. What do you do?", options: ["Read it to them", "Hang up and call the number on your card", "Give half of it", "Text it to them"], answer: 1, why: "Real banks never ask for that code." },
          { q: "Which is NOT insured by the FDIC?", options: ["A checking account at an insured bank", "A savings account at an insured bank", "A certificate of deposit at an insured bank", "Crypto assets"], answer: 3, why: "The FDIC says crypto assets are not insured." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Online Shopping and Banking Safely",
    questions: [
      { q: "The safest way to reach an online store is to:", options: ["Type its address yourself or use its official app", "Click an ad on social media", "Use a link from a stranger's text", "Scan any QR code"], answer: 0, why: "This avoids copycat sites." },
      { q: "The FTC suggests searching a store's name with:", options: ["\"free\"", "\"coupon\"", "\"complaint\" or \"scam\"", "\"cheap\""], answer: 2, why: "It shows other buyers' bad experiences." },
      { q: "Reviews should be read:", options: ["Only the stars", "Not at all", "With care, because some are fake", "Only the first one"], answer: 2, why: "The FTC warns some reviews are fake." },
      { q: "Before buying, check the return policy for:", options: ["How many days you have and who pays return shipping", "The owner's name", "The store's logo", "The website colors"], answer: 0, why: "Return terms differ and matter if something goes wrong." },
      { q: "A deal on an expensive brand item that seems too good to be true may be:", options: ["A bank gift", "Always real", "A government offer", "Counterfeit or stolen"], answer: 3, why: "The FTC warns such deals may be fake or stolen goods." },
      { q: "Which payment does the FTC say gives the strongest protection for disputes?", options: ["Wire transfer", "Credit card", "Gift card", "Cryptocurrency"], answer: 1, why: "Credit cards let you dispute wrong charges." },
      { q: "Where should you type your card number?", options: ["In a reply email", "On the payment page of a store you checked", "In a text message", "In a social media chat"], answer: 1, why: "Only the checked store's payment page." },
      { q: "On a library computer, the browser offers to save your card. You:", options: ["Say yes", "Save it twice", "Write it on a sticky note", "Say no"], answer: 3, why: "Never save card details on a shared computer." },
      { q: "Which record should you keep after buying online?", options: ["The order confirmation", "Nothing", "Only the box", "The ad you saw"], answer: 0, why: "It proves what you bought and paid." },
      { q: "A text says your package is stuck and asks you to pay a small fee by link. You should:", options: ["Pay the fee", "Click to see", "Check the order in the store's own app or site", "Reply with your card number"], answer: 2, why: "Fake delivery texts are a common scam." },
      { q: "If a seller will not fix a problem, in the US you can report it to:", options: ["A social media group", "The seller's ad", "reportfraud.ftc.gov", "Nobody"], answer: 2, why: "The FTC takes fraud reports there." },
      { q: "A \"balance\" is:", options: ["How much money is in your account now", "A payment", "A password", "A bank branch"], answer: 0, why: "Balance shows what you have now." },
      { q: "When you finish online banking you should:", options: ["Leave it open", "Save your password in the browser on a shared computer", "Share the screen", "Sign out"], answer: 3, why: "Signing out keeps the next person out." },
      { q: "Two-step verification on your bank account means:", options: ["Two passwords written down", "A second check, like a code sent to your phone", "Two bank cards", "A slower app"], answer: 1, why: "It adds a code a thief would not have." },
      { q: "How often is it wise to check your transactions?", options: ["Once a year", "At least once a week", "Never", "Only when the bank calls"], answer: 1, why: "Weekly checks catch problems quickly." },
      { q: "Credit union deposits are insured by:", options: ["The FTC", "The app store", "Your employer", "The NCUA"], answer: 3, why: "The NCUA insures federally insured credit unions." },
      { q: "A caller says your account is in danger and you must move money to a \"safe account\". This is:", options: ["A scam", "A refund", "A new law", "A normal bank step"], answer: 0, why: "Real banks never ask this; it is a common scam." },
      { q: "Money sent by a payment app should be treated like:", options: ["A loan", "A credit card", "Cash: send only to people you know", "Insured savings"], answer: 2, why: "It is hard to get back, like cash." },
      { q: "Which is one of the FTC's four scam signs?", options: ["A polite greeting", "A paper bill in the mail from your utility", "Pressure to act now", "Paying at a store counter"], answer: 2, why: "Scammers rush you so you do not stop and check." },
      { q: "If in doubt about a call from your bank, the best step is:", options: ["Hang up and call the number on the back of your card", "Give them your password", "Keep talking", "Send a small payment"], answer: 0, why: "Calling a known number reaches the real bank." }
    ]
  }
};
