"use strict";

// Koach Learn course (shared): "Ordering a Ride or Food with Apps (Uber, Lyft, DoorDash)". Goes in Seniors and Technology and Re-Entry, so the examples are everyday ones: a ride to the doctor or a job
// interview, groceries and a meal delivered. Shape: scripts/koachlearn-courses/README.md; model: re-entry/reentry-ai-digital-confidence.js. Uber facts checked 27 October 2026 against the pages in `sources`.

module.exports = {
  id: "ride-and-food-apps",
  category: "Seniors and Technology",
  name: "Ordering a Ride or Food with Apps (Uber, Lyft, DoorDash)",
  skills: "Setting up a ride or delivery app, Requesting a ride, Checking it is the right car, Ordering food or groceries for delivery, Checking prices, tips and receipts",
  outcome: "set up a ride or delivery app, see the price before you book, request a ride and check it is the right car before you get in, order food or groceries to your door, and check the receipt afterwards.",
  about: [
    "Ride apps like Uber and Lyft send a driver to pick you up. Delivery apps like DoorDash, Uber Eats and Instacart bring meals or groceries to your door. They help when you do not drive, cannot get to the store, or need a ride to the doctor or a job interview.",
    "This course shows you how to set up the apps, see the price before you agree, get in the right car safely, order food, and check what you paid.",
    "Each lesson takes about five minutes. Read the lesson, watch the slides, then do the \"Try it now\" task. There is a short knowledge check after each chapter and a 20-question quiz at the end. App menus change often, so we describe what to do rather than every button name."
  ],
  finalTask: "In a ride app, enter a real pickup and a destination (for example your home to a clinic or library), read the price and arrival time, and find the safety tools (sharing your trip, the emergency button, the ride PIN) without booking unless you need the ride. Then in a delivery app, build a small order, check the item total, fees, tip and delivery address on the checkout screen, and explain what each line means.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Adults who need rides to appointments, work or errands, or food and groceries brought home: seniors who no longer drive, people with disabilities, caregivers, people returning to the community and anyone new to ride and delivery apps.",
    startingPoint: "Can use a smartphone to open apps and type an address, and may have a debit or credit card. Many have never booked a ride or delivery in an app, are unsure how prices, fees and tips work, or do not know the safety checks before getting into a car.",
    gap: "Ride and delivery apps can mean getting to a clinic or job on time and getting food without a trip, but people who do not know the steps can pay far more than they expected, get into the wrong car, or fall for fake app support scams.",
    constraints: [
      "Reading level: plain words and short sentences; words like pickup pin, service fee and substitution are explained",
      "Devices: a smartphone with location turned on and the official app",
      "Time: about 5 minutes a lesson, about 60 minutes in total",
      "Money: no ride or order needs to be booked for the course; prices and fees change by app, time and city",
      "Age and safety: Uber's terms require adults or a parent-set teen account; learners never share passwords or codes with anyone who calls or texts"
    ],
    prerequisites: "Using a Smartphone and Tablet, or the ability to install an app from the official store."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Using the official app store", action: "install a ride app, make an account and add a payment method safely", standard: "with the developer checked and card details typed only inside the app" },
    { id: "O2", condition: "Given a pickup and a destination", action: "enter both in a ride app and read the price and arrival time before you confirm", standard: "with the pickup spot checked on the map and the price read before booking" },
    { id: "O3", condition: "When a booked car arrives", action: "check the plate, car and driver against the app and find the safety tools", standard: "never getting into a car that does not match and finding Share My Trip, the emergency button and the PIN" },
    { id: "O4", condition: "Using a delivery app", action: "enter your delivery address with notes and build an order in the cart", standard: "with the full address, a helpful note and a choice for out-of-stock items" },
    { id: "O5", condition: "Given a checkout screen", action: "explain each line, including the item total, fees, tip and total, before you pay", standard: "naming every charge correctly and checking the total against your budget" },
    { id: "O6", condition: "After a ride or delivery", action: "check the receipt, get help for a problem inside the app and refuse fake support", standard: "using only the in-app Help and never giving a password or code" }
  ],
  chapters: [
    {
      name: "Chapter 1: Getting a ride",
      lessons: [
        {
          objectives: ["O1"],
          title: "Setting up a ride app",
          minutes: 5,
          goal: "Install a ride app, make an account and add a payment method safely.",
          text: [
            "Uber and Lyft are the best-known ride apps in the United States. A driver uses their own car to take you where you want to go, and you pay through the app.",
            "Install the app only from the official app store (Google Play or the App Store) and check the developer is Uber or Lyft. Sign up with your phone number and email. Uber's terms say you must be 18 or older for your own account; teens 13 to 17 can only ride through a teen account a parent or guardian sets up. Check the app's own terms for the current rules.",
            "Add a payment method inside the app, such as a debit or credit card. Type it only in the app, never in a text or email. Add your home as a saved place so it is quick to choose later."
          ],
          steps: ["Open the official app store and search for Uber or Lyft.", "Check the developer name, then install.", "Sign up with your phone number and email.", "Add a payment method inside the app's payment or wallet section.", "Save your home address as a saved place."],
          words: [["Ride app", "an app that sends a driver in their own car to pick you up."], ["Payment method", "the card or account the app charges."], ["Saved place", "an address the app remembers, like home."]],
          slides: [
            { title: "What ride apps do", bullets: ["A driver picks you up in their car", "You pay through the app", "Best known in the US: Uber and Lyft"] },
            { title: "Set up safely", bullets: ["Official app store only", "Check the developer name", "Uber: 18+ for your own account; teen accounts 13-17"] },
            { title: "Add payment", bullets: ["Only inside the app", "Never by text or email", "Save your home address"] }
          ],
          sources: [{ name: "Uber: US Terms of Use (age and teen accounts)", url: "https://www.uber.com/legal/en/document/?name=general-terms-of-use&country=united-states&lang=en" }],
          tryIt: "Install Uber or Lyft from the official app store, create your account, and save your home address. You can wait to add a card until you need a ride.",
          youCanNow: "install a ride app safely, create an account and save your home address.",
          quickCheck: [
            { objective: "O1", q: "In a ride app, who drives the car?", options: ["A city bus driver", "You", "A driver using their own car", "A taxi company only"], answer: 2, why: "A driver uses their own car to take you, and you pay through the app." },
            { objective: "O1", q: "A text asks you to reply with your card number to finish setting up your ride account. What would you do?", options: ["Reply with the card number", "Ignore it and add the card only inside the official app", "Email the card number instead", "Call the number in the text and read it out"], answer: 1, why: "Type your card details only in the app, never in a text or email." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Requesting a ride and seeing the price first",
          minutes: 5,
          goal: "Enter a pickup and destination and read the price before you confirm.",
          text: [
            "Open the app and type where you want to go in the \"Where to?\" box. Check the pickup spot: the app uses your location, but you can move the pin or type the address so the driver finds you.",
            "The app shows ride choices, from cheaper shared or standard rides to bigger or nicer cars, each with a price and an arrival time. The price can be higher at busy times, such as rush hour or after a big event.",
            "Choose the ride, check the price and payment method, and confirm. Then the app shows the driver's name, photo, car and license plate, and a map of the car coming to you."
          ],
          steps: ["Type your destination in the \"Where to?\" box.", "Check the pickup spot; move the pin if needed.", "Compare ride choices: price and arrival time.", "Check the payment method.", "Confirm only when the price is OK.", "Watch the map for your car."],
          words: [["Pickup spot", "where the driver will meet you."], ["Destination", "where you want to go."], ["Busy-time pricing", "higher prices when many people want rides at once."]],
          slides: [
            { title: "Where to?", bullets: ["Type your destination", "Check the pickup spot on the map"] },
            { title: "See the price first", bullets: ["Each ride choice shows a price and time", "Prices can rise at busy times"] },
            { title: "Confirm", bullets: ["Check price and payment", "Then see the driver, car and plate"] }
          ],
          tryIt: "Open the ride app and type a real destination, like a clinic, library or job center. Read two ride choices and their prices. Close the app without booking unless you need the ride.",
          youCanNow: "request a ride and read the price and arrival time before you agree.",
          quickCheck: [
            { objective: "O2", q: "What does the app show you after you confirm a ride?", options: ["The driver's name, photo, car and license plate", "Your bank balance", "A list of restaurants", "Your password"], answer: 0, why: "After you confirm, the app shows the driver, car and plate, and a map." },
            { objective: "O2", q: "The app put your pickup pin across a busy road from where you stand. What would you do?", options: ["Book anyway and run across the road", "Cancel your account", "Choose the most expensive car", "Move the pin or type the address so the driver finds you"], answer: 3, why: "You can move the pin or type the address so the pickup spot is right." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Getting in the right car, safely",
          minutes: 5,
          goal: "Check the car, plate and driver before getting in, and use the safety tools.",
          text: [
            "Before you get in, check three things against the app: the license plate, the car's make and color, and the driver's name and photo. Ask \"Who are you here for?\" and let the driver say your name. If anything does not match, do not get in.",
            "Uber has an optional four-digit PIN: you tell the driver the PIN, and the trip can only start with the right one. Uber's Share My Trip lets trusted family or friends follow your trip live, and its in-app emergency button contacts 911 and shows your location and car details. Lyft has its own safety tools; find them on its safety page or in the app.",
            "Wait indoors until the app shows the car has arrived, and do not get into a car that offers you a ride without being booked in the app."
          ],
          steps: ["Wait inside until the app says the car is here.", "Check the plate, car and driver's photo.", "Ask \"Who are you here for?\"", "Use the PIN if you turned it on.", "Share your trip with a family member or friend.", "Know where the emergency button is."],
          words: [["License plate", "the number plate on the car; check it matches the app."], ["Share My Trip", "Uber's tool that lets people you choose follow your ride live."], ["PIN", "a short number code you tell the driver to start the ride."]],
          slides: [
            { title: "Check before you get in", bullets: ["License plate", "Car make and color", "Driver's name and photo"] },
            { title: "Ask, do not tell", bullets: ["\"Who are you here for?\"", "Let the driver say your name", "No match? Do not get in"] },
            { title: "Safety tools (Uber)", bullets: ["Optional four-digit ride PIN", "Share My Trip with trusted contacts", "Emergency button connects to 911"] },
            { title: "Lyft and others", bullets: ["Have their own safety tools", "Find them in the app or safety page"] }
          ],
          sources: [{ name: "Uber: Rider safety", url: "https://www.uber.com/us/en/ride/safety/" }],
          tryIt: "Open the safety section of your ride app. Find how to share a trip and where the emergency button is. If your app has a ride PIN, turn it on.",
          youCanNow: "check you have the right car and driver, and use the app's safety tools.",
          quickCheck: [
            { objective: "O3", q: "What does Uber's Share My Trip do?", options: ["Splits the price with a stranger", "Lets trusted family or friends follow your trip live", "Posts your trip on social media", "Gives the driver your password"], answer: 1, why: "Share My Trip lets people you trust follow your trip live." },
            { objective: "O3", q: "A driver says \"Are you Maria?\" and you are Maria. What would you do instead of saying yes?", options: ["Get in right away", "Tell the driver your PIN before checking anything", "Ask \"Who are you here for?\" and let the driver say your name", "Give the driver your phone"], answer: 2, why: "Letting the driver say your name shows they really were sent for you." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Getting a ride",
        questions: [
          { objective: "O1", q: "Where should you get the Uber or Lyft app?", options: ["A link in a text", "Any website", "The official app store", "A pop-up ad"], answer: 2, why: "Official stores have the real apps." },
          { objective: "O2", q: "When can you see the price of a ride?", options: ["Before you confirm the ride", "Only after the ride", "Only on your bank statement", "Never"], answer: 0, why: "The app shows each ride choice's price before you agree." },
          { objective: "O2", q: "Why might a ride cost more on a Friday evening?", options: ["The app is broken", "Busy-time pricing when many people want rides", "Your phone is old", "Rides are free on Fridays"], answer: 1, why: "Prices can rise when demand is high." },
          { objective: "O3", q: "A car pulls up but the license plate does not match the app. What do you do?", options: ["Get in anyway", "Get in and ask later", "Pay the driver cash", "Do not get in"], answer: 3, why: "A mismatch means it may not be your ride." },
          { objective: "O3", q: "What is the safer way to check the driver?", options: ["Say \"Are you here for Maria?\"", "Ask \"Who are you here for?\"", "Show them your ID", "Tell them your PIN first"], answer: 1, why: "Letting the driver say your name proves they are your driver." }
        ]
      }
    },
    {
      name: "Chapter 2: Ordering food and groceries",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ordering a meal or groceries for delivery",
          minutes: 5,
          goal: "Find a restaurant or store in a delivery app and build an order.",
          text: [
            "Delivery apps like DoorDash, Uber Eats and Instacart let you order from local restaurants and stores. A delivery person, sometimes called a Dasher or shopper, picks up your order and brings it to you.",
            "Install from the official app store and enter your delivery address carefully, with any apartment or gate number and notes for the driver, like \"blue door, ring the bell\".",
            "Browse or search for a restaurant or store, tap items to add them to your cart, and choose options like size. For groceries, you can usually pick what the shopper should do if an item is out of stock: replace it with something similar, or refund it."
          ],
          steps: ["Install the delivery app from the official store.", "Enter your full delivery address and notes for the driver.", "Search for a restaurant or store.", "Tap items to add them to your cart.", "For groceries, choose what to do if an item is out of stock."],
          words: [["Delivery app", "an app that brings food or goods from local businesses to your door."], ["Cart", "the list of items you plan to buy."], ["Substitution", "a similar item the shopper picks when yours is out of stock."]],
          slides: [
            { title: "Delivery apps", bullets: ["DoorDash, Uber Eats, Instacart and others", "A driver or shopper brings your order"] },
            { title: "Your address", bullets: ["Full address with apartment or gate number", "Notes like \"blue door, ring the bell\""] },
            { title: "Build an order", bullets: ["Search a restaurant or store", "Add items to your cart", "Choose what happens if an item is out of stock"] }
          ],
          tryIt: "Open a delivery app (install it from the official store if needed). Enter your address with a note for the driver, then add two items to a cart. Do not place the order yet.",
          youCanNow: "find a restaurant or store in a delivery app and build an order for your address.",
          quickCheck: [
            { objective: "O4", q: "In a delivery app, who brings your order?", options: ["The restaurant owner only", "The post office", "Nobody; you must collect it", "A delivery person, sometimes called a Dasher or shopper"], answer: 3, why: "A delivery person picks up your order and brings it to you." },
            { objective: "O4", q: "You live in apartment 4B behind a gate. What would you do when you enter your address?", options: ["Add the apartment number, gate details and a note for the driver", "Enter only the street name", "Leave the address blank", "Use a neighbor's address"], answer: 0, why: "Apartment and gate numbers and a note help the driver find you." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Understanding the checkout: fees, tips and total",
          minutes: 5,
          goal: "Read the checkout screen and know what each charge is before you pay.",
          text: [
            "The price on the menu is not the whole cost. The checkout screen lists the item total plus extra charges, which can include a delivery fee, a service fee, sometimes a small-order fee, taxes, and a tip for the driver.",
            "Fees change by app, time, distance and city, and some apps offer paid memberships that lower fees. So always read the checkout screen and look at the total before you tap Place order.",
            "The tip goes to the driver or shopper. You choose the amount, and many apps let you change it after delivery. If the total is more than you planned, remove an item or choose pickup instead of delivery if the app offers it."
          ],
          steps: ["Open your cart and go to checkout.", "Read each line: items, delivery fee, service fee, taxes, tip.", "Check the delivery address and payment method.", "Look at the total.", "Change the order or tip if needed, then tap Place order."],
          words: [["Delivery fee", "a charge for bringing the order to you."], ["Service fee", "a charge the app adds for using its service."], ["Tip", "money you choose to give the driver or shopper."]],
          slides: [
            { title: "Menu price is not the total", bullets: ["Item total", "Delivery fee and service fee", "Taxes and tip"] },
            { title: "Fees change", bullets: ["By app, time, distance and city", "Always read the checkout screen"] },
            { title: "Before you tap Place order", bullets: ["Check address and payment", "Look at the total", "Too much? Remove an item or choose pickup"] }
          ],
          tryIt: "Take the cart from the last lesson to the checkout screen. Write down the item total, each fee, the tip and the final total. Then decide whether to place it or close the app.",
          youCanNow: "read a delivery checkout screen and know the full cost before you pay.",
          quickCheck: [
            { objective: "O5", q: "Who receives the tip on a delivery order?", options: ["The app company", "The driver or shopper", "The city", "The restaurant's landlord"], answer: 1, why: "The tip goes to the driver or shopper." },
            { objective: "O5", q: "Your menu items add up to a small amount, but the total is much higher. What would you do before placing the order?", options: ["Tap Place order without looking", "Add more items to make it worth it", "Read each line on the checkout screen to see the fees, taxes and tip", "Close the app and pay by gift card"], answer: 2, why: "The checkout screen lists every fee, the tax and the tip that make up the total." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Receipts, problems and staying safe",
          minutes: 4,
          goal: "Check a receipt, get help with a wrong order and avoid app scams.",
          text: [
            "After a ride or delivery, the app sends a receipt to your email and keeps it in the app under your trips or orders. Check that the charge matches what you agreed.",
            "If something is wrong, like a missing item, a cold meal or a wrong charge, use the Help or Support section inside the app and choose the order. Report problems soon after they happen.",
            "Scammers pretend to be app support. Real help is in the app. Do not call a support number from a search ad, and never give your password or a code sent to your phone to anyone who calls or texts you. Pay only inside the app, not in cash or gift cards to someone who asks."
          ],
          steps: ["Open your trips or orders in the app.", "Check the receipt matches what you agreed.", "For a problem, go to Help inside the app and pick the order.", "Never give a password or a phone code to a caller.", "Pay only inside the app."],
          words: [["Receipt", "a record of what you paid and for what."], ["Support", "the help section of the app for problems."]],
          slides: [
            { title: "Check the receipt", bullets: ["In your email and in the app", "Does it match what you agreed?"] },
            { title: "Something wrong?", bullets: ["Help or Support inside the app", "Choose the order", "Report it soon"] },
            { title: "Avoid support scams", bullets: ["Real help is inside the app", "Never give a password or phone code", "Pay only inside the app"] }
          ],
          tryIt: "Final task practice: open the trips or orders section of your ride or delivery app and find the Help area. Then do the final task: price a ride and find the safety tools, and read a full delivery checkout screen.",
          youCanNow: "check a receipt, get help for a problem inside the app, and avoid fake support scams.",
          quickCheck: [
            { objective: "O6", q: "Where can you find a receipt for a delivery?", options: ["In your email and in the app under your orders", "Only from the driver", "On a search engine", "Nowhere; apps do not give receipts"], answer: 0, why: "The app emails a receipt and keeps it under your trips or orders." },
            { objective: "O6", q: "Your food never arrived and you search online for the app's support number. An ad shows a phone number. What would you do?", options: ["Call the number from the ad", "Give the caller your password", "Pay a stranger in gift cards for a refund", "Skip the ad and use Help inside the app"], answer: 3, why: "Real help is in the app; support numbers in search ads can be scammers." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Ordering food and groceries",
        questions: [
          { objective: "O4", q: "Why add a note like \"blue door, ring the bell\" to your address?", options: ["It lowers the price", "It helps the driver find you", "It is required by law", "It hides your address"], answer: 1, why: "Clear notes help the driver deliver to the right door." },
          { objective: "O4", q: "What is a substitution in a grocery order?", options: ["A similar item when yours is out of stock", "A coupon", "A delivery fee", "A tip"], answer: 0, why: "Shoppers can replace an out-of-stock item with a similar one." },
          { objective: "O5", q: "Which screen shows the full cost of a delivery order?", options: ["The menu", "The home screen", "The checkout screen", "The app store"], answer: 2, why: "Checkout lists items, fees, taxes, tip and total." },
          { objective: "O6", q: "Your meal arrives with an item missing. What do you do?", options: ["Call a number from a search ad", "Post your password", "Ignore it", "Use Help inside the app and choose the order"], answer: 3, why: "Real support is inside the app." },
          { objective: "O6", q: "Someone texts saying they are DoorDash support and needs the code sent to your phone. What do you do?", options: ["Do not share it; real help is in the app", "Send the code", "Send your password", "Pay them a gift card"], answer: 0, why: "Never give a phone code to someone who contacts you." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Ordering a Ride or Food with Apps (Uber, Lyft, DoorDash)",
    questions: [
      { objective: "O1", q: "What does a ride app like Uber or Lyft do?", options: ["Sends a driver in their own car to pick you up", "Sells cars", "Delivers mail", "Rents bikes only"], answer: 0, why: "Ride apps connect you with a driver." },
      { objective: "O1", q: "When installing a ride app, check:", options: ["The icon color", "That the developer is the real company", "Your bank balance", "The weather"], answer: 1, why: "Fake apps copy real names." },
      { objective: "O1", q: "Under Uber's US terms, teens 13 to 17 can ride:", options: ["With their own adult account", "Never", "Through a teen account set up by a parent or guardian", "Only at night"], answer: 2, why: "Uber's terms allow teen accounts for ages 13-17 with a parent or guardian." },
      { objective: "O1", q: "Where should you type your card details for a ride app?", options: ["In a text to the driver", "In an email", "On social media", "Only inside the app"], answer: 3, why: "Payment is set up inside the app only." },
      { objective: "O2", q: "The \"Where to?\" box is for:", options: ["Your destination", "Your password", "A tip", "Your bank number"], answer: 0, why: "You type where you want to go." },
      { objective: "O2", q: "Why check the pickup spot on the map?", options: ["To change the price", "It is not needed", "To pick the car color", "So the driver finds you"], answer: 3, why: "A correct pickup spot avoids missed rides." },
      { objective: "O2", q: "Ride prices may be higher:", options: ["Never", "Only on your birthday", "At busy times like rush hour", "When you use Wi-Fi"], answer: 2, why: "High demand can raise prices." },
      { objective: "O3", q: "Which should you check before getting in the car?", options: ["The radio station", "The weather", "License plate, car and driver photo", "The driver's home address"], answer: 2, why: "These must match the app." },
      { objective: "O3", q: "Uber's ride PIN works by:", options: ["Paying the driver", "Calling 911", "Unlocking your phone", "You telling the driver a code so the trip can start"], answer: 3, why: "The trip starts only with the correct PIN." },
      { objective: "O3", q: "Share My Trip lets you:", options: ["Split the fare with strangers", "Change drivers", "Let trusted people follow your trip live", "Get a refund"], answer: 2, why: "Trusted contacts can see your trip status." },
      { objective: "O3", q: "Uber's in-app emergency button:", options: ["Rates the driver", "Cancels the ride for free", "Calls your bank", "Contacts 911 and shows your location and car details"], answer: 3, why: "It connects you to 911 with trip details." },
      { objective: "O3", q: "A car you did not book offers you a ride outside a venue. You should:", options: ["Get in; it is faster", "Pay cash", "Decline; ride only in a car booked in the app", "Share your PIN"], answer: 2, why: "Only booked, matched cars are safe." },
      { objective: "O4", q: "Which app is mainly for grocery delivery?", options: ["Lyft", "A calculator", "A weather app", "Instacart"], answer: 3, why: "Instacart delivers groceries." },
      { objective: "O4", q: "A \"cart\" in a delivery app is:", options: ["A car", "A receipt", "The list of items you plan to buy", "A fee"], answer: 2, why: "Your cart holds the items before checkout." },
      { objective: "O5", q: "Which is usually an extra charge on a delivery order?", options: ["A service fee", "A free gift", "Your rating", "Your address"], answer: 0, why: "Service and delivery fees are added at checkout." },
      { objective: "O5", q: "A tip on a delivery order goes to:", options: ["The app store", "The government", "The bank", "The driver or shopper"], answer: 3, why: "Tips are for the person who delivers." },
      { objective: "O5", q: "The total at checkout is more than you planned. A good step is:", options: ["Pay anyway without reading", "Give your card to a stranger", "Remove an item or choose pickup if offered", "Leave a fake address"], answer: 2, why: "Changing the order lowers the total." },
      { objective: "O6", q: "Where can you find a receipt after a ride?", options: ["In your email and in the app's trips section", "Only from the driver", "Nowhere", "In the app store"], answer: 0, why: "Apps keep receipts and email them." },
      { objective: "O6", q: "Where is real help for a wrong order?", options: ["A phone number from a search ad", "A social media comment", "A stranger's text", "Help or Support inside the app"], answer: 3, why: "Real support is inside the app." },
      { objective: "O6", q: "Someone says they are app support and asks for your password. You:", options: ["Give it", "Give half", "Never give it", "Text it later"], answer: 2, why: "Real support never needs your password." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Pre-Test: What Do You Already Know?",
    from: [
      0,
      3,
      5,
      6,
      7,
      11,
      13,
      14,
      16,
      18
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      {
        name: "Price before booking",
        objective: "O2",
        notYet: "The pickup or destination is wrong, or the price and arrival time were not read.",
        meets: "A real pickup and destination are entered, and the price and arrival time are read before any booking.",
        exceeds: "Also compares two ride choices and says why the price may be higher at busy times."
      },
      {
        name: "Safety tools",
        objective: "O3",
        notYet: "Cannot find the safety tools.",
        meets: "Finds Share My Trip, the emergency button and the ride PIN (or the app's own safety tools).",
        exceeds: "Also explains the three checks before getting into the car."
      },
      {
        name: "Delivery order",
        objective: "O4",
        notYet: "The cart is empty or the delivery address is incomplete.",
        meets: "A small order in the cart with a full delivery address.",
        exceeds: "Adds a helpful note for the driver and a choice for out-of-stock items."
      },
      {
        name: "Reading the checkout",
        objective: "O5",
        notYet: "Cannot say what the fees, tip or total are.",
        meets: "Explains the item total, each fee, the tip, the delivery address and the total.",
        exceeds: "Also names one way to lower the total, such as removing an item or choosing pickup."
      }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and score Meets or Exceeds on every rubric row of the final task",
      "Learners who report getting to an appointment, job or errand by ride app on their own in the 30 days after the course (follow-up survey)",
      "Learners who report checking the price and fees before booking and staying within their budget",
      "Learners who report refusing a fake support call or text"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A smartphone with location turned on and internet",
      "A ride app (Uber or Lyft) and a delivery app (DoorDash, Uber Eats or Instacart) from the official store",
      "A real pickup and destination, such as home to a clinic or library",
      "About 60 minutes in total, in short sessions; no booking or payment needed"
    ],
    facilitatorNotes: [
      "Tell learners not to tap Confirm or Place order in class unless they really need the ride or food; the task stops before booking.",
      "Learners may need a card to finish sign-up; let them decide whether to add one, and never ask to see card details.",
      "Practise the \"Who are you here for?\" check as a role play with two learners as rider and driver.",
      "Prices and fees change by city and time of day, so look at real checkout screens rather than quoting figures.",
      "For learners who cannot use a card or smartphone, mention local paratransit or senior ride programs your organization knows of."
    ]
  }
};
