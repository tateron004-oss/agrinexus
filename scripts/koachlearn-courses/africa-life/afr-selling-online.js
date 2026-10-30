"use strict";

// Koach Learn course: Africa: Life and Work -> "Selling Online in Africa (WhatsApp Business, Marketplaces and Social Media)" (owner, 30 October 2026: "are there any more courses africans can use to support there lives").
// Written in the ADDIE format (model: re-entry/reentry-ai-digital-confidence.js). For traders, artisans and small business owners across Africa who sell in person and want to take orders by phone:
// choosing where to sell, setting up WhatsApp Business, product photos and listings, answering customers, getting paid safely (fake payment alerts) and delivery, returns and customer data.
// Does not repeat agri-value-addition-marketing.js (making and labelling a food product) or afr-mobile-money-safety (how mobile money works); it uses them. App features and marketplace rules change:
// the course describes the action and tells students to check inside the app or on the marketplace's own seller page. All money figures are examples, not real prices or fees.

const WA_BUSINESS = { name: "WhatsApp Business: the WhatsApp Business app (business profile, showing products and prices, greeting and away messages)", url: "https://whatsappbusiness.com/products/business-app/" };
const NDPC = { name: "Nigeria Data Protection Commission (NDPC): Nigeria Data Protection Act 2023", url: "https://ndpc.gov.ng/" };
const ODPC = { name: "Office of the Data Protection Commissioner, Kenya (Data Protection Act, 2019)", url: "https://www.odpc.go.ke/" };
const CBK_FRAUD = { name: "Central Bank of Kenya: fraud safety", url: "https://www.centralbank.go.ke/fraud-safety/" };
const CBN_CP = { name: "Central Bank of Nigeria: consumer protection", url: "https://www.cbn.gov.ng/Documents/ConsumerProtection.html" };

module.exports = {
  id: "afr-selling-online",
  category: "Africa: Life and Work",
  name: "Selling Online in Africa (WhatsApp Business, Marketplaces and Social Media)",
  skills: "Choosing where to sell online, Setting up WhatsApp Business, Taking product photos and writing listings, Answering customers and closing a sale, Checking payments and avoiding fake alerts, Delivering and keeping customers' trust",
  outcome: "take orders for your products by phone: set up a WhatsApp Business profile and product list, write listings that sell, answer customers and confirm orders, check that the money really arrived before you send goods, and deliver in a way that brings customers back.",
  about: [
    "Many customers now find sellers on WhatsApp, Facebook, Instagram, TikTok and marketplaces such as Jumia and Jiji. This course is for traders, artisans, home cooks, tailors, farmers and small shop owners in Kenya, Nigeria, Ghana, Senegal, Côte d'Ivoire, Morocco and across Africa who want to sell beyond their street.",
    "You will choose where to sell, set up a WhatsApp Business profile and product list, take good photos with a basic phone, write listings with a clear price, answer customers quickly, confirm orders in writing, check payments in your own mobile money or bank app, and plan delivery and returns.",
    "Each lesson takes about five minutes and ends with a \"Try it now\" task for your own business. It works on a basic Android phone and uses little data. Prices and money figures in the course are examples, not real prices or fees."
  ],
  finalTask: "Make a one-page online shop plan for your business: where you will sell and why, your WhatsApp Business profile text, three product listings (photo notes, title, price in your currency, details and delivery), a saved order-confirmation message, your payment-checking rule, and your delivery and returns policy.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Traders, market sellers, artisans, home cooks, tailors, hairdressers, farmers and small shop owners in towns and villages across Africa (Kenya, Nigeria, Ghana, francophone West and Central Africa, North Africa). Many are women and young people; many already chat with customers on WhatsApp.",
    startingPoint: "Can use WhatsApp to chat and send photos, and can receive mobile money. Few have a business profile, a product list, clear prices online, written order confirmations or a rule for checking payments. Some have been cheated by fake payment messages.",
    gap: "Customers search and order on their phones, but many small sellers lose sales through slow replies, unclear prices and poor photos, and lose money and goods to fake payment alerts. Learners need a simple, safe way to show products, take orders, check payment and deliver, so selling online adds income instead of risk.",
    constraints: [
      "Reading level: plain words and short sentences; many learners speak English as a second language (the course is also offered in French and Arabic)",
      "Devices: a basic Android phone, often shared; costly data, so photos and videos are kept small",
      "Money: little or no budget for advertising; free tools first",
      "Rules and fees: app features, marketplace commissions and data protection rules change by country; learners check the app, the marketplace's seller page or the national regulator",
      "Safety: high fraud risk; never share a PIN, password or one-time code"
    ],
    prerequisites: "Able to send WhatsApp messages and photos. Helpful: \"Using Mobile Money Safely\" in this category."
  },
  // ---- ADDIE: Design ----
  objectives: [
    { id: "O1", condition: "Given your products, your customers and two or three online channels", action: "choose where to sell online and write down why", standard: "naming the cost, the effort and who buys there for each channel" },
    { id: "O2", condition: "Using a phone with the WhatsApp Business app", action: "set up a business profile and a product list with prices", standard: "with name, short description, hours, area served and at least three products" },
    { id: "O3", condition: "Given one of your products", action: "take a clear photo and write a listing with a title, price, details and delivery", standard: "so a customer could order without asking a basic question" },
    { id: "O4", condition: "When a customer sends a question or an order", action: "reply politely and confirm the order in writing", standard: "within your stated hours, with item, quantity, price, delivery and payment in one message" },
    { id: "O5", condition: "Before you send goods paid by mobile money or bank transfer", action: "check in your own app or official provider message that the money has arrived", standard: "never trusting a screenshot, a forwarded message or a caller, and never sharing a PIN" },
    { id: "O6", condition: "When you deliver an order", action: "write and follow a delivery and returns policy that protects customers' trust and data", standard: "stating delivery areas, cost, time and returns, and keeping customers' numbers private" }
  ],
  chapters: [
    {
      name: "Chapter 1: Opening your shop online",
      lessons: [
        {
          title: "Choosing where to sell online",
          objectives: ["O1"],
          minutes: 5,
          goal: "Choose one or two places to sell online that fit your products and customers.",
          text: [
            "You do not need to be everywhere. Choose where your customers already are, and where you can keep up with messages. Selling online is like opening a second stall: it only works if someone is there to serve.",
            "Chat apps such as WhatsApp are good for regular customers and neighbours. Social media such as Facebook, Instagram and TikTok helps new people discover you with photos and short videos. Marketplaces such as Jumia, Jiji, Kilimall and Konga already have many buyers searching, but they have rules, and some take a commission (a part of each sale) or charge for promoted adverts.",
            "For each channel, write three things: who buys there, what it costs (data, commission, adverts, delivery) and how much time it takes each day. Example: Ama in Kumasi sells beads. She keeps WhatsApp for her regular customers and adds Instagram to reach new buyers in Accra. A shoemaker in Dakar might start with WhatsApp and Facebook, then add a marketplace later.",
            "Before you join a marketplace, read its seller page: what it charges, how it pays you, when, and what happens with returns. These change, so check the marketplace's own website, not a forwarded message."
          ],
          steps: ["List where your customers already chat, scroll and shop.", "For each channel, write who buys there, the cost and the time it takes.", "Choose one main channel and, at most, one more.", "For a marketplace, read its own seller page for fees, payment and returns."],
          words: [["Channel", "a place where you sell or talk to customers, such as WhatsApp, Facebook or a marketplace."], ["Marketplace", "a website or app where many sellers list products and buyers search, such as Jumia or Jiji."], ["Commission", "a part of each sale that a marketplace keeps as its fee."]],
          slides: [
            { title: "Sell where your customers are", bullets: ["Only where you can answer messages", "Online is a second stall: someone must serve"] },
            { title: "Three kinds of channel", bullets: ["Chat apps: WhatsApp for regular customers", "Social media: Facebook, Instagram, TikTok to be discovered", "Marketplaces: Jumia, Jiji, Kilimall, Konga"] },
            { title: "Compare each channel", bullets: ["Who buys there", "What it costs: data, commission, adverts, delivery", "How much time it takes each day"] },
            { title: "Start small", bullets: ["One main channel, at most one more", "Read a marketplace's own seller page first"] }
          ],
          tryIt: "Draw a small table with your two or three possible channels. For each, write who buys there, what it costs and the time it takes. Circle the one you will start with.",
          youCanNow: "compare online channels by cost, effort and customers, and choose where to start.",
          quickCheck: [
            { objective: "O1", q: "You can answer messages for one hour a day. What is the best start?", options: ["Open accounts on six apps at once", "Start with one main channel you can keep up with", "Post once and never reply", "Pay for adverts before you have a product list"], answer: 1, why: "A channel only works if you answer customers, so start with what you can keep up with." },
            { objective: "O1", q: "Where do you check what a marketplace charges sellers?", options: ["A forwarded WhatsApp message", "A friend's guess", "The marketplace's own seller page", "A comment under a video"], answer: 2, why: "Fees and rules change, and only the marketplace's own page is reliable." }
          ]
        },
        {
          title: "Setting up WhatsApp Business: profile and product list",
          objectives: ["O2"],
          minutes: 6,
          goal: "Set up a WhatsApp Business profile and a product list with prices.",
          text: [
            "WhatsApp Business is a separate app from normal WhatsApp, made by the same company for small businesses. Get it only from the official app store (Google Play on Android). It lets you show a business profile, show your products with prices, and send greeting and away messages.",
            "Your business profile is your shop sign. Fill in your business name, a short description of what you sell, your area or address, your opening hours, and how customers can pay. Use a clear logo or a photo of your stall or best product.",
            "Then add your products to the product list (the app calls it a catalogue in many versions): a photo, a name, a price in your currency and a short description. Customers can look through it and send you an item in the chat. Example: Wanjiku in Nakuru adds \"Maasai beaded sandals, size 37-41, KES 1,200\" (an example price).",
            "Menus differ between phones and versions. If you cannot find a setting, open the app's settings and look for business tools. You can also set a short greeting message for new customers and an away message for when you are closed."
          ],
          steps: ["Install WhatsApp Business from the official app store.", "Fill in the business profile: name, description, area, hours, payment methods.", "Add a logo or a clear photo.", "Add at least three products with photo, name, price and short description.", "Set a greeting message and an away message."],
          words: [["Business profile", "the page that shows your business name, description, hours and location to customers."], ["Product list (catalogue)", "a list of your products with photos and prices that customers can look through in the app."], ["Away message", "an automatic reply sent when you are closed."]],
          slides: [
            { title: "WhatsApp Business", bullets: ["A free app for small businesses", "Install only from the official app store", "Profile, product list, greeting and away messages"] },
            { title: "Your profile is your shop sign", bullets: ["Business name and what you sell", "Area or address and opening hours", "How customers can pay", "A clear logo or photo"] },
            { title: "Your product list", bullets: ["Photo, name, price in your currency", "Short description: size, colour, quantity", "At least three products to start"] },
            { title: "Automatic messages", bullets: ["Greeting for new customers", "Away message when you are closed", "Menus differ: look in settings, business tools"] }
          ],
          tryIt: "Install WhatsApp Business (or open it if you have it). Fill in your profile and add three products with a photo, a name, a price and one line of description. Ask a friend to look at it and tell you one thing that is unclear.",
          youCanNow: "set up a WhatsApp Business profile and a product list that customers can browse.",
          quickCheck: [
            { objective: "O2", q: "Which detail belongs in your business profile?", options: ["Your mobile money PIN", "Your opening hours", "Your customers' phone numbers", "Your password"], answer: 1, why: "Hours tell customers when you will answer; PINs, passwords and customer numbers stay private." },
            { objective: "O2", q: "A product in your list shows a photo but no price. What do you add?", options: ["Nothing; customers like to ask", "Your home address", "A long story about the shop", "The price in your currency"], answer: 3, why: "A clear price saves time and stops customers leaving without asking." }
          ],
          sources: [WA_BUSINESS]
        },
        {
          title: "Photos and listings that sell",
          objectives: ["O3"],
          minutes: 5,
          goal: "Take a clear product photo and write a listing a customer can order from.",
          text: [
            "A customer online cannot touch your product, so the photo and words must do the job. Take photos in daylight near a window or outside in the shade. Use a plain background such as a cloth or a wall. Wipe the camera lens. Show the whole product, then one close-up, and something that shows size, such as a hand.",
            "A good listing answers the customer's questions before they ask: a clear title (what it is), the price in your currency, size, colour, quantity or weight, what it is made of, and how and where you deliver. Example: \"Shea butter body cream, 250 g jar, unscented, GHS 60. Delivery in Tamale today; other towns by bus parcel.\" (an example price).",
            "Be honest. Show the real product, not a picture from the internet, and say if colours vary. Honest photos mean fewer returns and more trust. Keep files small to save data: one clear photo is better than ten blurry ones."
          ],
          steps: ["Clean the product and the camera lens.", "Use daylight and a plain background.", "Take one full photo, one close-up and one that shows size.", "Write title, price, size or weight, material, and delivery.", "Read it as a customer: can you order without asking a question?"],
          words: [["Listing", "the photo and words that show one product for sale."], ["Close-up", "a photo taken near the product to show detail."]],
          slides: [
            { title: "Photos customers trust", bullets: ["Daylight, plain background, clean lens", "Whole product, a close-up, and something for size", "Your real product, never an internet picture"] },
            { title: "A listing that answers questions", bullets: ["Title: what it is", "Price in your currency", "Size, colour, weight, material", "How and where you deliver"] },
            { title: "Save data, build trust", bullets: ["One clear photo beats ten blurry ones", "Say if colours vary", "Honest listings mean fewer returns"] }
          ],
          tryIt: "Choose one product. Take three photos (whole, close-up, size) in daylight on a plain background. Write a listing with title, price, details and delivery. Read it as a customer and fix anything you would have to ask about.",
          youCanNow: "take clear product photos with a basic phone and write a listing that customers can order from.",
          quickCheck: [
            { objective: "O3", q: "Where is the best light for a product photo?", options: ["Daylight near a window or in the shade", "A dark room with the flash on", "Under a coloured lamp", "At night outside"], answer: 0, why: "Soft daylight shows true colours and detail without hard shadows." },
            { objective: "O3", q: "Which listing lets a customer order without asking?", options: ["\"Nice bag. DM.\"", "\"Bag for sale\"", "\"Leather bag\"", "\"Brown leather handbag, 30 x 25 cm, NGN 18,000, delivery in Lagos in 2 days\""], answer: 3, why: "It gives what it is, size, price and delivery, so the customer can decide." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Opening your shop online",
        questions: [
          { objective: "O1", q: "What three things do you compare for each online channel?", options: ["Who buys there, what it costs, and the time it takes", "Its logo, its colour and its age", "How many friends use it for chatting", "Only whether it is new"], answer: 0, why: "Customers, cost and time decide whether a channel will earn money for you." },
          { objective: "O1", q: "A marketplace keeps a part of each sale. What is that called?", options: ["A deposit", "A refund", "A commission", "A greeting"], answer: 2, why: "A commission is the share of each sale a marketplace keeps as its fee." },
          { objective: "O2", q: "Where should you get the WhatsApp Business app?", options: ["A link from an unknown number", "The official app store", "A file a stranger sends you", "A pop-up advert"], answer: 1, why: "The official app store keeps fake apps and malware off your phone." },
          { objective: "O2", q: "You close at 7 pm. What helps customers who message at night?", options: ["Turning your phone off forever", "Deleting their messages", "Answering with your PIN", "An away message saying when you will reply"], answer: 3, why: "An away message tells customers you saw them and when you will answer." },
          { objective: "O3", q: "Your product comes in colours that look different on screens. What do you write?", options: ["Nothing", "\"Colours may vary slightly from the photo\"", "\"No returns ever\"", "Use a nicer picture from the internet"], answer: 1, why: "Being honest about colours prevents complaints and builds trust." }
        ]
      }
    },
    {
      name: "Chapter 2: Selling, getting paid and delivering",
      lessons: [
        {
          title: "Answering customers and closing the sale",
          objectives: ["O4"],
          minutes: 5,
          goal: "Reply to a customer and confirm an order in one clear message.",
          text: [
            "Online, the seller who answers first and clearly often gets the sale. Reply within your opening hours, greet the customer, and answer the exact question. If you do not know, say when you will find out.",
            "Save short replies you send often, such as your price list, delivery areas and payment options. WhatsApp Business lets you save replies and use them again; menus differ, so look in the business tools. This saves typing and keeps your answers the same every time.",
            "When the customer is ready, confirm the order in one message: item, quantity, price, delivery place and cost, delivery day, and how they will pay. Ask them to reply \"Yes\" to confirm. Example from Abidjan: \"Bonjour Awa. Order: 2 wax-print dresses, size M, 15,000 XOF each = 30,000 XOF. Delivery to Cocody on Saturday, 1,000 XOF. Payment by mobile money before delivery. Reply OUI to confirm.\" (example prices).",
            "Stay polite, even when a customer bargains hard or is rude. Never send insults or post a customer's messages publicly."
          ],
          steps: ["Greet the customer and answer the exact question.", "Use a saved reply for price lists, delivery and payment.", "Confirm: item, quantity, price, delivery place, cost and day, payment method.", "Ask the customer to reply \"Yes\" before you prepare the order."],
          words: [["Saved reply (quick reply)", "a message you save in the app and send again with a few taps."], ["Order confirmation", "one message that lists everything the customer agreed to buy and how it will be paid and delivered."]],
          slides: [
            { title: "Fast, clear answers win sales", bullets: ["Reply within your opening hours", "Greet and answer the exact question", "Do not know? Say when you will find out"] },
            { title: "Save replies you send often", bullets: ["Price list", "Delivery areas and costs", "Payment options"] },
            { title: "Confirm every order in writing", bullets: ["Item, quantity and price", "Delivery place, cost and day", "Payment method", "Customer replies \"Yes\" to confirm"] }
          ],
          tryIt: "Write and save an order-confirmation message for your business with spaces for item, quantity, price, delivery and payment. Then fill it in for one pretend order.",
          youCanNow: "answer customers clearly and confirm every order in one written message.",
          quickCheck: [
            { objective: "O4", q: "Which order confirmation is complete?", options: ["\"OK, coming.\"", "\"2 bags, KES 1,500 each = KES 3,000. Delivery to Kisumu town Friday, KES 200. Pay by M-Pesa. Reply YES.\"", "\"Send money.\"", "\"Thanks for chatting!\""], answer: 1, why: "It lists item, quantity, price, delivery and payment, and asks the customer to confirm." },
            { objective: "O4", q: "Why save replies you send often?", options: ["So answers are fast and the same every time", "So the customer pays more", "So you never read messages", "So you can share customers' numbers"], answer: 0, why: "Saved replies save typing and keep your prices and rules consistent." }
          ]
        },
        {
          title: "Getting paid safely: stop fake payment alerts",
          objectives: ["O5"],
          minutes: 6,
          goal: "Check that a payment has really arrived before you hand over goods.",
          text: [
            "Many online sellers are paid by mobile money (M-Pesa, MTN MoMo, Orange Money, Wave) or bank transfer, or cash on delivery. Scammers know this. A common trick is a fake payment alert: a text, a screenshot or a forwarded message that looks like a payment but no money came.",
            "Your rule: goods leave only when the money shows in your own account. Open your own mobile money or banking app, or dial your provider's official code, and check the balance or the transaction. A screenshot from the customer is not proof. A text from an ordinary phone number is not proof.",
            "Another trick: \"I sent you money by mistake, please send it back.\" Do not send anything. Check your balance yourself; if there is a real mistaken payment, your provider can reverse it through its own process. A real provider never asks for your PIN, your password or a one-time code. Never share them, not even with someone who says they are from the company.",
            "For cash on delivery, count the cash before handing over the parcel, and know the notes of your currency. Each central bank publishes fraud warnings, for example the Central Bank of Kenya and the Central Bank of Nigeria."
          ],
          steps: ["Agree the payment method in the order confirmation.", "When the customer says they paid, open your own app or dial your provider's official code.", "Check the amount and the sender in your balance or statement.", "Only then hand over or send the goods.", "Ignore \"send back my mistaken money\" requests; let the provider handle reversals."],
          words: [["Fake payment alert", "a text, screenshot or message made to look like a payment when no money was sent."], ["PIN", "your secret number for mobile money or your bank. Only you should know it."], ["Reversal", "when a payment is sent back; a real one is done by your provider, not by you sending money to a stranger."]],
          slides: [
            { title: "The fake payment trick", bullets: ["A text or screenshot that looks like money arrived", "No money in your account", "The scammer leaves with your goods"] },
            { title: "Your rule", bullets: ["Goods leave only when money is in YOUR account", "Check in your own app or official code", "A screenshot is not proof"] },
            { title: "\"I sent it by mistake\"", bullets: ["Do not send anything back yourself", "Check your own balance", "Real reversals go through your provider"] },
            { title: "Never share", bullets: ["Your PIN or password", "A one-time code", "A real provider never asks for them"] }
          ],
          tryIt: "Write your payment rule on paper and stick it near where you pack orders. Then practise: open your own mobile money or bank app and find where you see your last transaction.",
          youCanNow: "check that money has truly arrived in your own account before sending goods, and refuse fake payment and reversal tricks.",
          quickCheck: [
            { objective: "O5", q: "A customer sends a screenshot of a payment. What do you do?", options: ["Send the goods right away", "Ask for a bigger screenshot", "Check your own app or official code for the money", "Send them your PIN to check"], answer: 2, why: "Only your own account shows whether the money really arrived; screenshots can be faked." },
            { objective: "O5", q: "Someone says they sent you money by mistake and asks you to send it back. What is safest?", options: ["Send it back at once", "Check your own balance and let your provider handle any reversal", "Give them your PIN so they can take it", "Send double to be kind"], answer: 1, why: "This is a common trick; a real mistaken payment is reversed through the provider." }
          ],
          sources: [CBK_FRAUD, CBN_CP]
        },
        {
          title: "Delivery, returns and keeping customers' trust",
          objectives: ["O6"],
          minutes: 5,
          goal: "Write a delivery and returns policy and keep customers' details private.",
          text: [
            "Customers come back when delivery is reliable. Write down your delivery areas, the cost to each, how long it takes and how you send: by hand, a motorbike rider (boda boda or okada), a bus parcel service or a courier. Pack goods well and send the customer a message when the parcel leaves, with the rider's name or the parcel number.",
            "A returns policy says what happens if something is wrong: for example, \"Wrong size? Tell us within 2 days and we will exchange it if it is unused.\" Keep it short and fair, and follow it every time. In Morocco, a seller in Casablanca might say: exchange within 3 days, customer pays return delivery unless the item is faulty.",
            "Customers' phone numbers, addresses and orders are private. Do not share them, post them or add people to groups or broadcast lists without asking. Many countries have data protection laws, for example Kenya's Data Protection Act and the Nigeria Data Protection Act 2023. When you are not sure what applies, check your national data protection office.",
            "After delivery, ask if all is well and invite a review or a photo you may share, with their permission."
          ],
          steps: ["Write delivery areas, costs, times and how you send.", "Pack well and send a message when the parcel leaves.", "Write a short, fair returns policy and follow it.", "Keep customers' numbers and addresses private; ask before adding anyone to a list.", "Ask for feedback after delivery."],
          words: [["Returns policy", "your rule for what happens when a customer wants to return or exchange a product."], ["Broadcast list", "a list in WhatsApp for sending one message to many contacts; only people who saved your number receive it."], ["Personal data", "information about a person, such as their name, phone number or address."]],
          slides: [
            { title: "Reliable delivery", bullets: ["Areas, cost, time and how you send", "Pack well", "Message the customer when it leaves"] },
            { title: "A short, fair returns policy", bullets: ["What can be returned and when", "Who pays return delivery", "Follow it every time"] },
            { title: "Customers' data is private", bullets: ["Do not share or post numbers and addresses", "Ask before adding anyone to a list", "Check your national data protection office"] }
          ],
          tryIt: "Final task: put together your one-page online shop plan: where you sell and why, your profile text, three listings, your saved order confirmation, your payment rule, and your delivery and returns policy.",
          youCanNow: "deliver reliably, handle returns fairly and keep your customers' details private.",
          quickCheck: [
            { objective: "O6", q: "What should a delivery policy include?", options: ["Your PIN", "Your customers' addresses", "Delivery areas, cost, time and how you send", "Only the word \"fast\""], answer: 2, why: "Areas, cost, time and method tell customers exactly what to expect." },
            { objective: "O6", q: "You want to send a weekly price list to customers. What is right?", options: ["Post all their numbers in a public group", "Sell their numbers to another trader", "Add strangers from a bought list", "Ask customers first and keep their numbers private"], answer: 3, why: "Customers' numbers are personal data; ask before you message them in bulk." }
          ],
          sources: [ODPC, NDPC]
        }
      ],
      check: {
        title: "Knowledge Check 2: Selling, getting paid and delivering",
        questions: [
          { objective: "O4", q: "A customer asks a question you cannot answer now. What do you reply?", options: ["Nothing", "Say when you will find out and get back to them", "Tell them to go elsewhere", "Send a long voice note about something else"], answer: 1, why: "A clear time to reply keeps the customer and builds trust." },
          { objective: "O4", q: "What does the customer do after your order confirmation?", options: ["Sends you their PIN", "Nothing", "Replies \"Yes\" to confirm", "Pays double"], answer: 2, why: "A written \"Yes\" shows you both agreed the same order." },
          { objective: "O5", q: "When can goods leave your shop for a mobile money order?", options: ["When you see the money in your own account", "When the customer sends a screenshot", "When someone calls to say it was sent", "When the customer promises"], answer: 0, why: "Only money in your own account is proof of payment." },
          { objective: "O5", q: "A caller says he is from your mobile money company and needs your PIN. What is true?", options: ["Real staff may ask for it", "Give half of it", "Send it by text instead", "A real provider never asks for your PIN; hang up"], answer: 3, why: "Real providers never ask for your PIN; anyone who does is a scammer." },
          { objective: "O6", q: "A customer receives the wrong size. What helps most?", options: ["Ignore the message", "A clear returns policy you follow every time", "Blame the rider", "Post the customer's message online"], answer: 1, why: "A fair policy, followed every time, solves problems and keeps customers." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Selling Online in Africa (WhatsApp Business, Marketplaces and Social Media)",
    questions: [
      { objective: "O1", q: "Where should a small seller start selling online?", options: ["Everywhere at once", "Where customers already are, and where the seller can keep up", "Only where adverts are most expensive", "Where no one else sells anything"], answer: 1, why: "A channel works only if customers are there and you answer them." },
      { objective: "O1", q: "Which is a marketplace?", options: ["Jiji", "A greeting message", "Your PIN", "A broadcast list"], answer: 0, why: "Jiji, Jumia, Kilimall and Konga are marketplaces where buyers search many sellers." },
      { objective: "O1", q: "Social media such as Instagram and TikTok mainly helps you:", options: ["Hide your products", "Check payments", "Be discovered by new customers with photos and videos", "Avoid answering messages"], answer: 2, why: "Social media is good for being found by people who do not know you yet." },
      { objective: "O2", q: "WhatsApp Business is:", options: ["A bank", "A marketplace that takes commission", "A paid advert", "A separate app for small businesses with a profile and product list"], answer: 3, why: "It adds a business profile, products with prices and automatic messages." },
      { objective: "O2", q: "Which belongs in your business profile?", options: ["Your opening hours and area served", "Your password", "Your customers' addresses", "Your one-time code"], answer: 0, why: "Hours and area tell customers when and where you serve." },
      { objective: "O2", q: "Each product in your list should have:", options: ["Only a photo", "A photo, a name, a price and a short description", "Your bank PIN", "No price, so customers ask"], answer: 1, why: "Photo, name, price and description let customers choose without waiting." },
      { objective: "O3", q: "The best background for a product photo is:", options: ["A busy street", "A messy table", "A plain cloth or wall", "A dark corner"], answer: 2, why: "A plain background keeps the eye on the product." },
      { objective: "O3", q: "Why show a hand or a coin next to a product?", options: ["To show its size", "To hide the product", "To make the file bigger", "Customers like hands"], answer: 0, why: "Something familiar in the photo shows how big the product is." },
      { objective: "O3", q: "Is it fine to use a nicer photo of the same product from the internet?", options: ["Yes, always", "Yes, if it is brighter", "Only for expensive items", "No; show your real product so customers get what they see"], answer: 3, why: "Honest photos prevent complaints and returns." },
      { objective: "O4", q: "An order confirmation lists:", options: ["Only the price", "Item, quantity, price, delivery and payment", "Your PIN and password", "Other customers' names"], answer: 1, why: "All the details in one message stop misunderstandings." },
      { objective: "O4", q: "A customer bargains hard and is rude. What do you do?", options: ["Insult them back", "Post their messages publicly", "Stay polite and give your best price", "Block all customers"], answer: 2, why: "Staying polite protects your name, even if this sale does not happen." },
      { objective: "O4", q: "A saved reply (quick reply) is best for:", options: ["Your price list and delivery areas", "Your PIN", "A customer's address", "Gossip"], answer: 0, why: "Messages you send often can be saved and sent with a few taps." },
      { objective: "O5", q: "A text from an ordinary phone number says \"You have received GHS 500\". You:", options: ["Send the goods", "Thank them and send the goods", "Forward it to friends", "Check your own mobile money balance first"], answer: 3, why: "Fake alerts come from ordinary numbers; only your own account is proof." },
      { objective: "O5", q: "Who should know your mobile money PIN?", options: ["Only you", "The customer", "The delivery rider", "Anyone from the company who calls"], answer: 0, why: "A PIN is secret; a real provider never asks for it." },
      { objective: "O5", q: "A \"mistaken payment\" message asks you to send money back. The safest step is:", options: ["Send it back quickly", "Send back double", "Check your own balance and let the provider handle any reversal", "Share your PIN with them"], answer: 2, why: "Real reversals go through the provider, not by you sending money to a stranger." },
      { objective: "O5", q: "For cash on delivery, the rider should:", options: ["Hand over the parcel first", "Count the cash before handing over the parcel", "Accept a promise to pay later", "Take a photo of the customer's PIN"], answer: 1, why: "Counting first means the goods leave only when payment is in hand." },
      { objective: "O6", q: "A good delivery message to a customer says:", options: ["Nothing until it arrives", "The parcel has left, with the rider's name or parcel number", "Other customers' addresses", "Your PIN"], answer: 1, why: "Telling customers it has left, and how, builds trust." },
      { objective: "O6", q: "Customers' phone numbers and addresses are:", options: ["Free to share", "Something to sell", "Personal data you keep private", "For public posts"], answer: 2, why: "They are personal data; many countries protect them by law." },
      { objective: "O6", q: "A returns policy should be:", options: ["Long and secret", "Different for every customer", "Never written down", "Short, fair and followed every time"], answer: 3, why: "A clear, fair policy that you always follow keeps customers' trust." },
      { objective: "O6", q: "Where do you check the data protection rules in your country?", options: ["Your national data protection office", "A rumour on social media", "A customer's opinion", "A marketplace advert"], answer: 0, why: "The national office, such as Kenya's ODPC or Nigeria's NDPC, publishes the rules." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Pre-Test: What Do You Already Know?", from: [0, 3, 5, 7, 9, 12, 14, 17] },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      { name: "Where to sell", objective: "O1", notYet: "No channel chosen, or many channels with no reason.", meets: "One or two channels chosen, with who buys there, the cost and the time for each.", exceeds: "Also says what would make you add or drop a channel after three months." },
      { name: "Profile and product list", objective: "O2", notYet: "Profile missing name, hours or area, or fewer than three products.", meets: "Profile with name, description, area, hours and payment, plus at least three products with prices.", exceeds: "A friend or customer browsed it and one unclear point was fixed." },
      { name: "Listings", objective: "O3", notYet: "Blurry or borrowed photos, or no price or delivery.", meets: "Three listings with real, clear photos, title, price in local currency, details and delivery.", exceeds: "Each listing has a close-up and a size photo, and honest notes such as colour variation." },
      { name: "Order confirmation", objective: "O4", notYet: "No saved confirmation, or details missing.", meets: "A saved message with item, quantity, price, delivery place, cost and day, payment, and a request to reply Yes.", exceeds: "Saved replies for prices, delivery and payment as well." },
      { name: "Payment rule", objective: "O5", notYet: "Goods may leave on a screenshot or promise, or the PIN is shared.", meets: "Written rule: goods leave only when money shows in your own account; never share a PIN or code.", exceeds: "Also covers mistaken-payment requests and counting cash on delivery." },
      { name: "Delivery, returns and data", objective: "O6", notYet: "No delivery details or returns rule, or customer data is shared.", meets: "Delivery areas, cost, time and method, a short returns policy, and a promise to keep customer data private.", exceeds: "Customers are asked before being added to any list, and feedback is asked after delivery." }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Learners who report their first or more online orders within 30 days (follow-up survey)",
      "Learners who report no loss to fake payment alerts within 30 days of the course",
      "Learners who report higher monthly sales after three months (programme follow-up)"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "An Android phone with WhatsApp Business installed from the official app store",
      "Three products (or photos of them) to list",
      "Paper and pen for the channel table, policies and payment rule",
      "About 60 minutes in total, in short sessions"
    ],
    facilitatorNotes: [
      "In a group, take the pre-test together, then do one chapter per session, with learners setting up their profile live and helping each other.",
      "Do the photo lesson outdoors in daylight; have learners swap phones and review each other's listings.",
      "Role-play a fake payment alert and a \"mistaken payment\" call. Never ask learners to show a real PIN, balance or statement.",
      "Remind learners that app menus, marketplace fees and data rules change, and to check the app, the marketplace's seller page or the national regulator.",
      "Score the final task with the rubric and give feedback on one Not yet row at a time."
    ]
  }
};
