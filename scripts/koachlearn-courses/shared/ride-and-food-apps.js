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
  chapters: [
    {
      name: "Chapter 1: Getting a ride",
      lessons: [
        {
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
          youCanNow: "install a ride app safely, create an account and save your home address."
        },
        {
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
          youCanNow: "request a ride and read the price and arrival time before you agree."
        },
        {
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
          youCanNow: "check you have the right car and driver, and use the app's safety tools."
        }
      ],
      check: {
        title: "Knowledge Check 1: Getting a ride",
        questions: [
          { q: "Where should you get the Uber or Lyft app?", options: ["A link in a text", "Any website", "The official app store", "A pop-up ad"], answer: 2, why: "Official stores have the real apps." },
          { q: "When can you see the price of a ride?", options: ["Before you confirm the ride", "Only after the ride", "Only on your bank statement", "Never"], answer: 0, why: "The app shows each ride choice's price before you agree." },
          { q: "Why might a ride cost more on a Friday evening?", options: ["The app is broken", "Busy-time pricing when many people want rides", "Your phone is old", "Rides are free on Fridays"], answer: 1, why: "Prices can rise when demand is high." },
          { q: "A car pulls up but the license plate does not match the app. What do you do?", options: ["Get in anyway", "Get in and ask later", "Pay the driver cash", "Do not get in"], answer: 3, why: "A mismatch means it may not be your ride." },
          { q: "What is the safer way to check the driver?", options: ["Say \"Are you here for Maria?\"", "Ask \"Who are you here for?\"", "Show them your ID", "Tell them your PIN first"], answer: 1, why: "Letting the driver say your name proves they are your driver." }
        ]
      }
    },
    {
      name: "Chapter 2: Ordering food and groceries",
      lessons: [
        {
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
          youCanNow: "find a restaurant or store in a delivery app and build an order for your address."
        },
        {
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
          youCanNow: "read a delivery checkout screen and know the full cost before you pay."
        },
        {
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
          youCanNow: "check a receipt, get help for a problem inside the app, and avoid fake support scams."
        }
      ],
      check: {
        title: "Knowledge Check 2: Ordering food and groceries",
        questions: [
          { q: "Why add a note like \"blue door, ring the bell\" to your address?", options: ["It lowers the price", "It helps the driver find you", "It is required by law", "It hides your address"], answer: 1, why: "Clear notes help the driver deliver to the right door." },
          { q: "What is a substitution in a grocery order?", options: ["A similar item when yours is out of stock", "A coupon", "A delivery fee", "A tip"], answer: 0, why: "Shoppers can replace an out-of-stock item with a similar one." },
          { q: "Which screen shows the full cost of a delivery order?", options: ["The menu", "The home screen", "The checkout screen", "The app store"], answer: 2, why: "Checkout lists items, fees, taxes, tip and total." },
          { q: "Your meal arrives with an item missing. What do you do?", options: ["Call a number from a search ad", "Post your password", "Ignore it", "Use Help inside the app and choose the order"], answer: 3, why: "Real support is inside the app." },
          { q: "Someone texts saying they are DoorDash support and needs the code sent to your phone. What do you do?", options: ["Do not share it; real help is in the app", "Send the code", "Send your password", "Pay them a gift card"], answer: 0, why: "Never give a phone code to someone who contacts you." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Ordering a Ride or Food with Apps (Uber, Lyft, DoorDash)",
    questions: [
      { q: "What does a ride app like Uber or Lyft do?", options: ["Sends a driver in their own car to pick you up", "Sells cars", "Delivers mail", "Rents bikes only"], answer: 0, why: "Ride apps connect you with a driver." },
      { q: "When installing a ride app, check:", options: ["The icon color", "That the developer is the real company", "Your bank balance", "The weather"], answer: 1, why: "Fake apps copy real names." },
      { q: "Under Uber's US terms, teens 13 to 17 can ride:", options: ["With their own adult account", "Never", "Through a teen account set up by a parent or guardian", "Only at night"], answer: 2, why: "Uber's terms allow teen accounts for ages 13-17 with a parent or guardian." },
      { q: "Where should you type your card details for a ride app?", options: ["In a text to the driver", "In an email", "On social media", "Only inside the app"], answer: 3, why: "Payment is set up inside the app only." },
      { q: "The \"Where to?\" box is for:", options: ["Your destination", "Your password", "A tip", "Your bank number"], answer: 0, why: "You type where you want to go." },
      { q: "Why check the pickup spot on the map?", options: ["To change the price", "It is not needed", "To pick the car color", "So the driver finds you"], answer: 3, why: "A correct pickup spot avoids missed rides." },
      { q: "Ride prices may be higher:", options: ["Never", "Only on your birthday", "At busy times like rush hour", "When you use Wi-Fi"], answer: 2, why: "High demand can raise prices." },
      { q: "Which should you check before getting in the car?", options: ["The radio station", "The weather", "License plate, car and driver photo", "The driver's home address"], answer: 2, why: "These must match the app." },
      { q: "Uber's ride PIN works by:", options: ["Paying the driver", "Calling 911", "Unlocking your phone", "You telling the driver a code so the trip can start"], answer: 3, why: "The trip starts only with the correct PIN." },
      { q: "Share My Trip lets you:", options: ["Split the fare with strangers", "Change drivers", "Let trusted people follow your trip live", "Get a refund"], answer: 2, why: "Trusted contacts can see your trip status." },
      { q: "Uber's in-app emergency button:", options: ["Rates the driver", "Cancels the ride for free", "Calls your bank", "Contacts 911 and shows your location and car details"], answer: 3, why: "It connects you to 911 with trip details." },
      { q: "A car you did not book offers you a ride outside a venue. You should:", options: ["Get in; it is faster", "Pay cash", "Decline; ride only in a car booked in the app", "Share your PIN"], answer: 2, why: "Only booked, matched cars are safe." },
      { q: "Which app is mainly for grocery delivery?", options: ["Lyft", "A calculator", "A weather app", "Instacart"], answer: 3, why: "Instacart delivers groceries." },
      { q: "A \"cart\" in a delivery app is:", options: ["A car", "A receipt", "The list of items you plan to buy", "A fee"], answer: 2, why: "Your cart holds the items before checkout." },
      { q: "Which is usually an extra charge on a delivery order?", options: ["A service fee", "A free gift", "Your rating", "Your address"], answer: 0, why: "Service and delivery fees are added at checkout." },
      { q: "A tip on a delivery order goes to:", options: ["The app store", "The government", "The bank", "The driver or shopper"], answer: 3, why: "Tips are for the person who delivers." },
      { q: "The total at checkout is more than you planned. A good step is:", options: ["Pay anyway without reading", "Give your card to a stranger", "Remove an item or choose pickup if offered", "Leave a fake address"], answer: 2, why: "Changing the order lowers the total." },
      { q: "Where can you find a receipt after a ride?", options: ["In your email and in the app's trips section", "Only from the driver", "Nowhere", "In the app store"], answer: 0, why: "Apps keep receipts and email them." },
      { q: "Where is real help for a wrong order?", options: ["A phone number from a search ad", "A social media comment", "A stranger's text", "Help or Support inside the app"], answer: 3, why: "Real support is inside the app." },
      { q: "Someone says they are app support and asks for your password. You:", options: ["Give it", "Give half", "Never give it", "Text it later"], answer: 2, why: "Real support never needs your password." }
    ]
  }
};
