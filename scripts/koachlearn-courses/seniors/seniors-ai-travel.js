"use strict";

// Koach Learn course: Seniors and Technology -> "AI Travel Companions" (bonus). Shape and rules: scripts/koachlearn-courses/README.md; model: re-entry/reentry-ai-digital-confidence.js.
// Facts checked 27 October 2026 on tsa.gov/real-id: REAL ID enforcement for domestic flights began 7 May 2025; a passport is accepted instead; TSA lists other acceptable IDs and a fee for travelers without one.

module.exports = {
  id: "seniors-ai-travel",
  category: "Seniors and Technology",
  name: "AI Travel Companions",
  skills: "Planning a trip itinerary with AI, Checking travel facts on official sites, Making a packing list, Using maps and translation apps, Staying safe and connected while traveling",
  outcome: "use an AI assistant to plan a short trip at a comfortable pace, check the important facts on official sites, make a packing list, and use your phone's maps and translation tools on the road.",
  about: [
    "This course is for older adults who want to travel, whether to visit grandchildren across the country, take a bus tour, or finally see a place they have always dreamed about.",
    "You will use a free AI assistant such as ChatGPT, Microsoft Copilot or Google Gemini to plan a relaxed trip that fits your energy and needs, then check the facts that matter (ID rules, opening hours, prices) on official websites. You will also use maps, translation and location sharing on your phone.",
    "Each lesson takes about five minutes. The \"Try it now\" tasks build a real plan for a trip you would like to take. A knowledge check closes each chapter and a 20-question quiz closes the course."
  ],
  finalTask: "Plan a three-day trip with an AI assistant: a day-by-day plan at a comfortable pace with rest time, a packing list including your medicines and ID, and three facts you checked on official websites (such as the ID you need to fly and the opening hours of a place you will visit). Share the plan with a family member.",
  chapters: [
    {
      name: "Chapter 1: Planning your trip",
      lessons: [
        {
          title: "Planning a relaxed itinerary with AI",
          minutes: 5,
          goal: "Ask an AI assistant for a day-by-day trip plan that fits your pace.",
          text: [
            "An itinerary is a day-by-day plan for a trip. An AI assistant can draft one in seconds, and change it as often as you like.",
            "Tell it where, when, how long, who is going, and what you need: \"Plan a relaxed three-day trip to Savannah, Georgia in April for two people in their 70s. We like history and gardens, walk slowly, and want a rest every afternoon. No more than two activities a day.\"",
            "Ask for changes until it fits: \"Add a place to sit and have lunch near each morning activity.\" \"Which places have elevators or are easy for someone with a cane?\""
          ],
          steps: ["Say where, when and how long.", "Say who is going and what you enjoy.", "Say your pace and any needs, such as rest or easy walking.", "Ask for changes until it fits you."],
          words: [["Itinerary", "a day-by-day plan for a trip."], ["Accessible", "easy to reach and use for people with limited mobility, hearing or sight."]],
          slides: [
            { title: "A plan in seconds", bullets: ["An itinerary is a day-by-day plan", "AI drafts it, you shape it"] },
            { title: "Tell the assistant", bullets: ["Where, when, how long", "Who is going and what you enjoy", "Your pace and needs"] },
            { title: "Make it fit", bullets: ["\"Add a rest every afternoon.\"", "\"Which places are easy with a cane?\""] }
          ],
          tryIt: "Pick a trip you would like to take. Ask an AI assistant for a relaxed three-day itinerary with your pace and needs, then ask for one change.",
          youCanNow: "ask AI for a trip plan that fits your pace and needs."
        },
        {
          title: "Checking travel facts on official sites",
          minutes: 5,
          goal: "Check the important facts in an AI trip plan before you rely on them.",
          text: [
            "AI trip plans can include mistakes: a museum that closed, old opening hours, wrong prices or rules that changed. Always check the facts that could spoil your trip.",
            "Check opening hours and prices on the place's own website. Check flights and train times with the airline or rail company. For ID: since May 7, 2025, travelers flying within the United States need a REAL ID-compliant license or ID card, or another accepted ID such as a passport. TSA's website, tsa.gov, lists all accepted IDs.",
            "Ask the assistant: \"What in this plan should I double-check?\" It can point out the facts that matter, but you check them on the official sites."
          ],
          steps: ["Ask AI which facts to double-check.", "Check hours and prices on each place's own website.", "Check flight or train times with the company.", "Check ID rules on tsa.gov before flying."],
          words: [["REAL ID", "a driver's license or state ID that meets federal rules; it usually has a star in the corner."], ["TSA", "the Transportation Security Administration, which screens travelers at US airports."]],
          slides: [
            { title: "AI plans can be out of date", bullets: ["Closed places", "Old hours or prices", "Changed rules"] },
            { title: "Check on official sites", bullets: ["Hours and prices: the place's website", "Flights and trains: the company", "ID rules: tsa.gov"] },
            { title: "Flying in the US", bullets: ["REAL ID or another accepted ID needed since May 2025", "A passport is accepted", "See the full list on tsa.gov"] }
          ],
          sources: [{ name: "TSA: REAL ID", url: "https://www.tsa.gov/real-id" }],
          tryIt: "Ask the assistant which facts in your itinerary to double-check. Then check the opening hours of one place on its own website, and check whether your ID is REAL ID-compliant (look for the star) or what else tsa.gov accepts.",
          youCanNow: "check the key facts in an AI trip plan on official websites."
        },
        {
          title: "Making a smart packing list",
          minutes: 4,
          goal: "Ask AI for a packing list that fits your trip and your health needs.",
          text: [
            "A packing list stops the classic travel worry: \"Did I forget something?\" Ask the assistant for one based on your trip, the season and the activities.",
            "For example: \"Make a packing list for three days in Savannah in April. I take daily medicines and use reading glasses and a hearing aid. Group it by: documents, medicines and health, clothes, and electronics.\"",
            "Keep medicines in your carry-on bag in their original containers, with a little extra in case of delays, and bring a list of your medicines and doctor's phone number. Your pharmacist can advise on travel with medicines."
          ],
          steps: ["Tell AI the place, season, length and activities.", "Mention health needs, such as medicines or hearing aids.", "Ask it to group the list.", "Keep medicines and ID in your carry-on bag."],
          words: [["Carry-on bag", "the bag you keep with you on a plane, bus or train."]],
          slides: [
            { title: "Never forget again", bullets: ["Ask AI for a packing list", "Based on place, season and activities"] },
            { title: "Group the list", bullets: ["Documents", "Medicines and health", "Clothes and electronics"] },
            { title: "Medicines travel with you", bullets: ["In your carry-on, original containers", "A little extra for delays", "A list of medicines and your doctor's number"] }
          ],
          tryIt: "Ask an AI assistant for a grouped packing list for your trip, including your health needs. Add anything it forgot, and save or print the list.",
          youCanNow: "make a packing list with AI that includes your health needs."
        }
      ],
      check: {
        title: "Knowledge Check 1: Planning your trip",
        questions: [
          { q: "What is an itinerary?", options: ["A plane ticket", "A suitcase", "A day-by-day trip plan", "A passport"], answer: 2, why: "An itinerary lays out each day of a trip." },
          { q: "Which request will get the best trip plan?", options: ["\"Plan a relaxed 3-day trip to Savannah in April for two people in their 70s who like gardens and need an afternoon rest.\"", "\"trip\"", "\"travel\"", "\"go somewhere\""], answer: 0, why: "It gives place, time, people, interests and pace." },
          { q: "The AI says a museum opens at 9 am. How do you check?", options: ["Guess", "Trust the AI", "Ask a stranger", "On the museum's own website"], answer: 3, why: "The place's own website has current hours." },
          { q: "Since May 2025, to fly within the US you need:", options: ["Only a library card", "A REAL ID-compliant ID or another accepted ID such as a passport", "No ID at all", "A bank card"], answer: 1, why: "TSA requires REAL ID or another accepted ID." },
          { q: "Where should medicines go when you travel?", options: ["In checked luggage only", "In your carry-on bag", "Left at home", "In a stranger's bag"], answer: 1, why: "Keeping them with you avoids losing them." }
        ]
      }
    },
    {
      name: "Chapter 2: On the road",
      lessons: [
        {
          title: "Using maps and directions on your phone",
          minutes: 5,
          goal: "Get walking or driving directions with a maps app.",
          text: [
            "Maps apps such as Google Maps and Apple Maps show where you are and how to get where you are going, by car, on foot or by public transit.",
            "Open the maps app and type the place in the search box, or say it to your voice assistant: \"Hey Siri, walking directions to Forsyth Park.\" Tap Directions, choose walking, driving or transit, then tap Start. The app speaks each turn.",
            "Before a trip, save your hotel as a favorite place, so getting back is just one tap. Directions use your phone's battery, so bring a charger or small battery pack."
          ],
          steps: ["Open your maps app.", "Type or say where you want to go.", "Tap Directions and choose walking, driving or transit.", "Tap Start and follow the spoken turns.", "Save your hotel as a favorite."],
          words: [["GPS", "a system that lets your phone know where you are on a map."], ["Transit", "public transportation such as buses and trains."]],
          slides: [
            { title: "Your phone knows the way", bullets: ["Google Maps or Apple Maps", "Car, walking or transit"] },
            { title: "Get directions", bullets: ["Type or say the place", "Tap Directions, choose how", "Tap Start for spoken turns"] },
            { title: "Travel tips", bullets: ["Save your hotel as a favorite", "Bring a charger or battery pack"] }
          ],
          tryIt: "Use your maps app to get walking directions from your home to a nearby store or park. Tap Start and listen to the first instruction.",
          youCanNow: "get and follow directions with a maps app."
        },
        {
          title: "Talking and reading in another language",
          minutes: 5,
          goal: "Use a translation app to read a sign or have a simple conversation.",
          text: [
            "Traveling abroad, or meeting a new in-law who speaks another language? Translation apps such as Google Translate and the iPhone's Translate app can help.",
            "Type or speak a sentence and it shows and speaks the translation. Conversation mode lets two people take turns speaking. Camera mode lets you point your phone at a sign or menu and see it in your language.",
            "Translations are good but not perfect. For important matters, such as medical needs or allergies, carry a card in the local language written ahead of time, and check it with a hotel or pharmacy staff member. Many apps let you download a language before you go, so it works without internet."
          ],
          steps: ["Open a translation app and choose the two languages.", "Type or speak your sentence.", "Use conversation mode to take turns.", "Use camera mode for signs and menus.", "Download the language before you travel."],
          words: [["Translate", "to change words from one language into another."], ["Offline", "working without an internet connection."]],
          slides: [
            { title: "Your pocket translator", bullets: ["Google Translate or the Translate app", "Type, speak, or use the camera"] },
            { title: "Three ways to use it", bullets: ["Speak a sentence", "Conversation mode: take turns", "Camera mode: signs and menus"] },
            { title: "Be prepared", bullets: ["Not perfect for medical matters", "Carry a written allergy or medical card", "Download the language before you go"] }
          ],
          tryIt: "Open a translation app. Translate \"Where is the restroom, please?\" into a language you might need, and listen to it spoken aloud.",
          youCanNow: "use a translation app to speak, read signs and menus, and prepare for important needs."
        },
        {
          title: "Staying safe and connected while traveling",
          minutes: 5,
          goal: "Share your plans and location with family and avoid travel scams.",
          text: [
            "Let family know where you are. Share your itinerary with a family member, and consider sharing your location from your phone for the trip (on iPhone, the Find My app; on Android, Google Maps location sharing). You can stop sharing anytime.",
            "Watch out for travel scams: fake booking websites, calls saying you \"won\" a trip, and messages about problems with your flight that ask you to call a strange number or pay. Book through the airline's, hotel's or train company's own website or a trusted agent, and check any message by calling the number on their official website.",
            "Keep a copy of your ID and medicine list in a safe place apart from the originals, and avoid entering bank details on public Wi-Fi in hotels or airports."
          ],
          steps: ["Share your itinerary with a family member.", "Turn on location sharing for the trip if you wish.", "Book only through official sites or trusted agents.", "Check travel messages on the company's official number.", "Avoid banking on public Wi-Fi."],
          words: [["Location sharing", "letting chosen people see where your phone is on a map."], ["Public Wi-Fi", "free wireless internet in places like hotels and airports, which others can share."]],
          slides: [
            { title: "Keep family in the loop", bullets: ["Share your itinerary", "Share your location for the trip", "Stop sharing anytime"] },
            { title: "Travel scams", bullets: ["Fake booking sites", "\"You won a trip!\"", "Flight problem messages with strange numbers"] },
            { title: "Stay safe", bullets: ["Book on official sites", "Call numbers from official websites", "No banking on public Wi-Fi"] }
          ],
          tryIt: "Final task: finish your three-day trip plan with a comfortable pace and rest time, your packing list with medicines and ID, and three facts you checked on official websites. Share the plan with a family member.",
          youCanNow: "plan a trip with AI, check it, pack for it, find your way, and stay safe and connected."
        }
      ],
      check: {
        title: "Knowledge Check 2: On the road",
        questions: [
          { q: "In a maps app, after choosing where to go you tap:", options: ["Share password", "Delete", "Camera", "Directions, then Start"], answer: 3, why: "Directions and Start begin spoken guidance." },
          { q: "Why save your hotel as a favorite?", options: ["Getting back is one tap", "It makes the room cheaper", "It cancels the booking", "It sends your password"], answer: 0, why: "Favorites make it quick to navigate back." },
          { q: "Camera mode in a translation app lets you:", options: ["Call home", "Take selfies", "Point at a sign or menu to read it in your language", "Pay for meals"], answer: 2, why: "It translates text the camera sees." },
          { q: "For a serious food allergy abroad, the best plan is:", options: ["Guess", "Rely only on the app in the moment", "Say nothing", "Carry a written card in the local language and check it with staff"], answer: 3, why: "Translation apps are not perfect for medical needs." },
          { q: "A text says your flight has a problem and to call a number in the message. You:", options: ["Pay right away", "Call the number in the text", "Call the number on the airline's official website instead", "Send your card number"], answer: 2, why: "Official numbers are safe; numbers in messages may be scams." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: AI Travel Companions",
    questions: [
      { q: "An AI assistant can help a trip by:", options: ["Buying tickets without you", "Drafting a day-by-day plan", "Guaranteeing prices", "Packing your bag"], answer: 1, why: "It drafts plans you then shape and check." },
      { q: "Telling AI your pace and needs helps it:", options: ["Make a plan that fits you", "Charge less", "Book hotels", "Call family"], answer: 0, why: "Details make the plan realistic." },
      { q: "\"Accessible\" means:", options: ["Easy to use for people with limited mobility, hearing or sight", "Expensive", "Far away", "Closed"], answer: 0, why: "Accessible places are easy for everyone to use." },
      { q: "AI trip plans can include:", options: ["Only perfect facts", "Out-of-date hours or closed places", "Your passport", "Real tickets"], answer: 1, why: "AI can be wrong or out of date." },
      { q: "A good question to ask AI about your plan is:", options: ["\"Book everything now.\"", "\"What is my password?\"", "\"What in this plan should I double-check?\"", "\"Pay for me.\""], answer: 2, why: "It points out facts to verify." },
      { q: "Where do you check ID rules for flying in the US?", options: ["A travel scam text", "A pop-up ad", "A social media post", "tsa.gov"], answer: 3, why: "TSA sets airport ID rules." },
      { q: "A REAL ID card usually has:", options: ["A barcode only", "No photo", "A star in the corner", "Your password"], answer: 2, why: "The star marks REAL ID-compliant cards." },
      { q: "Besides REAL ID, an accepted ID for US flights is:", options: ["A passport", "A library card", "A store receipt", "A business card"], answer: 0, why: "TSA accepts a passport." },
      { q: "A grouped packing list might have sections for:", options: ["Nothing", "Only shoes", "Only snacks", "Documents, medicines, clothes and electronics"], answer: 3, why: "Grouping makes it easy to check." },
      { q: "Medicines should be packed:", options: ["Loose in checked bags", "In your carry-on, in original containers", "At home", "In a friend's luggage"], answer: 1, why: "Keep them with you and clearly labeled." },
      { q: "Who can advise you about traveling with medicines?", options: ["A random website", "Your pharmacist", "A pop-up ad", "A stranger"], answer: 1, why: "Pharmacists know medicines." },
      { q: "GPS lets your phone:", options: ["Take photos", "Translate languages", "Pay bills", "Know where you are on a map"], answer: 3, why: "GPS finds your location." },
      { q: "\"Transit\" in a maps app means:", options: ["Buses and trains", "Walking only", "Flying", "Driving only"], answer: 0, why: "Transit is public transportation." },
      { q: "Directions use battery, so bring:", options: ["A second ID", "Extra passwords", "A charger or battery pack", "A camera"], answer: 2, why: "Navigation drains the battery." },
      { q: "Conversation mode in a translation app:", options: ["Turns off sound", "Calls home", "Books hotels", "Lets two people take turns speaking"], answer: 3, why: "It translates back and forth." },
      { q: "Downloading a language before you go lets the app work:", options: ["Faster on Wi-Fi only", "Only at home", "Offline, without internet", "Never"], answer: 2, why: "Downloaded languages work offline." },
      { q: "Location sharing lets:", options: ["Strangers track you", "Chosen family see where your phone is", "Hotels charge more", "Airlines cancel flights"], answer: 1, why: "Only people you choose can see it." },
      { q: "A call says you won a free trip but must pay a fee. This is:", options: ["Likely a scam", "A real prize", "A tax rule", "Normal"], answer: 0, why: "Prizes that require fees are scams." },
      { q: "The safest way to book travel is:", options: ["Through official websites or trusted agents", "Through links in unexpected texts", "Through pop-up ads", "By sending gift cards"], answer: 0, why: "Official sites avoid fake booking scams." },
      { q: "On public Wi-Fi at an airport, avoid:", options: ["Reading the news", "Entering bank details", "Checking the weather", "Looking at maps"], answer: 1, why: "Public Wi-Fi can be shared by others." }
    ]
  }
};
