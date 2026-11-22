"use strict";

// Koach Learn course: Agriculture (Africa) -> "Drones for Agricultural Monitoring 6: Online Drone Piloting Course" (owner's drone outline, module 12).
// Last of the six-part monitoring track: the hands-on piloting skills a student can build online and in a simulator (controls, drills, flight modes, emergency
// procedures, log book), and the path to a remote pilot licence through an approved training organisation. This course does NOT license anyone: only the
// national aviation authority, through approved training and tests, can do that.

const KCAA_UAS = { name: "Kenya Civil Aviation Authority (KCAA): Unmanned Aircraft Systems", url: "https://www.kcaa.or.ke/safety-security-oversight/unmanned-aircraft-systems" };
const KCAA_UTO = { name: "KCAA: Unmanned Aircraft Systems Training Organizations (UTO)", url: "https://www.kcaa.or.ke/safety-security-oversight/unmanned-aircraft-systems/uto" };
const KCAA_PORTAL = { name: "KCAA drone (RPAS) online system", url: "https://rpas.kcaa.or.ke/" };
const NCAA_P21 = { name: "Nigeria Civil Aviation Authority (NCAA): Nig.CARs 2023 Part 21, Remotely Piloted Aircraft Systems", url: "https://www.ncaa.gov.ng/documents/regulations/nig-cars-2023/part-21-remotely-piloted-aircraft-system-rpas/" };

module.exports = {
  id: "agri-drones-piloting",
  category: "Agriculture (Africa)",
  name: "Drones for Agricultural Monitoring 6: Online Drone Piloting Course",
  skills: "Using the control sticks, Practising flight drills in a simulator, Choosing and switching flight modes, Handling emergencies (lost link, low battery, GPS loss), Keeping a pilot log book, Planning your route to a remote pilot licence",
  outcome: "fly a set of standard drills smoothly in a drone simulator, handle the main emergencies calmly, keep a proper log book, and follow a clear personal plan to earn a remote pilot licence from your country's aviation authority.",
  about: [
    "This is the final course of the drone monitoring track, for anyone in Kenya, Nigeria or elsewhere in Africa who wants to become a skilled, licensed drone pilot for agriculture. It is built to be done online: most practice happens in a free or low-cost drone simulator on a computer or phone, so you can make mistakes without crashing a real drone or breaking any rule.",
    "Chapter 1 teaches the controls, a set of practice drills, and the flight modes your drone may have. Chapter 2 teaches emergency procedures, how to keep a log book, and the steps to a remote pilot licence.",
    "Important: this course does not give you a licence and does not allow you to fly. In Kenya and Nigeria, as in most countries, a remote pilot licence comes from the civil aviation authority after training at an approved organisation and passing its tests. Never fly a real drone without the registration, licence and approvals your country requires."
  ],
  finalTask: "In a drone simulator, complete the five drills from this course (hover, box, figure eight, orbit, and a lawnmower grid) until you can fly each one smoothly three times in a row, practise the three emergency drills, record every session in a log book, and write a one-page personal licensing plan: your country's authority, the approved training organisations you found, the licence you need, the steps, the documents, the estimated cost from official sources, and your target dates.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Anyone in Kenya, Nigeria or elsewhere in Africa who wants to become a skilled, licensed drone pilot for agriculture, taking the final course of the drone monitoring track online.",
    startingPoint: "Learners know what drones do on farms, the basic rules and how mapping works (Courses 1 to 5). Many have little or no stick time, have never practised emergencies, keep no flight log, and do not know the steps, documents and approved schools for a remote pilot licence.",
    gap: "New pilots crash when they panic in an emergency, lose GPS or fly nose-in, and some pay unapproved schools or fly without a licence. Practising drills and emergencies in a simulator, keeping a log book and following a clear licensing plan lets learners arrive at approved training ready to learn fast and fly legally.",
    constraints: [
      "Devices: a computer or phone that can run a free or low-cost drone simulator; a controller helps",
      "This course gives no licence and no permission to fly; licences come from the aviation authority after approved training and tests",
      "Never fly a real drone without the registration, licence and approvals the country requires",
      "Time: short daily practice sessions of 15 to 20 minutes",
      "Fees and steps change: learners check the authority's official pages"
    ],
    prerequisites: "\"Drones for Agricultural Monitoring 1: Introduction, Regulations and Safety\"; Courses 2 to 5 help but are not required."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Using a drone controller or simulator", action: "name what each stick movement does and read the main items on the flight screen", standard: "and find the return-to-home and pause buttons without looking" },
    { id: "O2", condition: "In a drone simulator", action: "fly the hover, box, figure eight, orbit and lawnmower drills and record every session in a log book", standard: "flying each drill smoothly three times in a row" },
    { id: "O3", condition: "When GPS is strong or weak", action: "explain the main flight modes and fly calmly when the drone drops into attitude mode", standard: "keeping the drone in sight and landing safely" },
    { id: "O4", condition: "In a simulated lost link, low battery or GPS loss", action: "follow the right emergency steps", standard: "calmly and in the right order, then logging the event" },
    { id: "O5", condition: "For your country", action: "write a personal plan to earn a remote pilot licence", standard: "with the authority, approved schools, steps, documents, costs from official sources and target dates" }
  ],
  chapters: [
    {
      name: "Chapter 1: Learning to fly",
      lessons: [
        {
          objectives: ["O1"],
          title: "The controls: sticks, buttons and screen",
          minutes: 5,
          goal: "Name what each stick movement does and read the main items on the flight screen.",
          text: [
            "Most drone controllers have two sticks. In Mode 2, the most common setup, the left stick controls height (throttle: up to climb, down to descend) and turning on the spot (yaw: left and right). The right stick moves the drone forward and back (pitch) and sideways (roll). Some pilots use other modes; check yours in the app settings.",
            "Small, smooth stick movements make smooth flight. Beginners push too far and too fast. Practise moving the sticks gently, then letting them return to centre, where most drones hold position.",
            "The flight screen shows battery level, signal strength, GPS satellites, height, distance from home and the camera view. Learn to glance at it, then look back at the drone. Know where the return-to-home and pause or brake buttons are without looking."
          ],
          words: [["Throttle", "up and down movement (climb or descend)."], ["Yaw", "turning the drone left or right on the spot."], ["Pitch", "moving forward or back."], ["Roll", "moving sideways left or right."], ["Mode 2", "the most common stick setup: left stick throttle and yaw, right stick pitch and roll."]],
          slides: [
            { title: "Mode 2 sticks", bullets: ["Left stick: up/down (throttle), turn (yaw)", "Right stick: forward/back (pitch), sideways (roll)", "Check your mode in the app"] },
            { title: "Gentle hands", bullets: ["Small, smooth movements", "Let sticks return to centre", "Most drones then hold position"] },
            { title: "The flight screen", bullets: ["Battery, signal, GPS satellites", "Height, distance from home, camera view", "Glance, then look back at the drone"] },
            { title: "Know your buttons", bullets: ["Return-to-home", "Pause or brake", "Find them without looking"] }
          ],
          tryIt: "Install a drone simulator on a computer or phone (search your app store or computer for a drone flight simulator; some drone makers offer one in their app). Find the stick mode setting, set Mode 2, and move each stick gently to see what it does.",
          youCanNow: "say what each stick does in Mode 2, read the flight screen, and find the emergency buttons.",
          quickCheck: [
            { objective: "O1", q: "What is pitch?", options: ["Turning on the spot", "Moving the drone forward and back", "Climbing", "Returning home"], answer: 1, why: "Pitch moves the drone forward and back; in Mode 2 it is on the right stick." },
            { objective: "O1", q: "Your drone is drifting towards a tree and you must stop it fast. What should you already know?", options: ["The drone's price", "The farmer's phone number", "How to change the camera colour", "Where the pause or brake button is, without looking"], answer: 3, why: "Pilots learn where the pause or brake and return-to-home buttons are so they can act without looking." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Practice drills in a simulator",
          minutes: 6,
          goal: "Fly five standard drills smoothly in a simulator.",
          text: [
            "Good pilots build skill with the same drills, many times. Practise each drill until you can fly it smoothly three times in a row, then move on. Short daily sessions of 15 to 20 minutes work better than one long session a week.",
            "Drill 1, hover: take off to eye height and hold the drone still for one minute. Drill 2, box: fly a square with the nose always facing forward, then again with the nose turning at each corner. Drill 3, figure eight: fly a smooth figure eight. Drill 4, orbit: circle a point (such as a tree) while keeping the camera on it. Drill 5, lawnmower: fly straight parallel lines across a field, like a mapping flight, by hand.",
            "Also practise with the drone facing you (nose-in), when left and right feel reversed. This is where most beginners crash. After each session, write what went well and what to improve."
          ],
          steps: ["Hover at eye height for one minute.", "Box: nose forward, then nose turning at corners.", "Figure eight, smooth and level.", "Orbit a tree with the camera on it.", "Lawnmower lines across a field.", "Repeat each one nose-in."],
          words: [["Drill", "a short exercise repeated to build a skill."], ["Nose-in", "flying with the front of the drone facing you, so controls feel reversed."], ["Orbit", "flying in a circle around a point."]],
          slides: [
            { title: "How to practise", bullets: ["Same drills, many times", "Three smooth runs in a row, then move on", "15-20 minutes daily beats one long session"] },
            { title: "Five drills", bullets: ["1 Hover  2 Box  3 Figure eight", "4 Orbit a tree  5 Lawnmower lines"] },
            { title: "The hard one: nose-in", bullets: ["Left and right feel reversed", "Where most beginners crash", "Practise every drill nose-in too"] }
          ],
          tryIt: "In your simulator, fly drills 1 and 2 today. Write in a notebook: date, minutes, which drills, how many smooth runs, one thing to improve.",
          youCanNow: "practise five standard drills in a simulator and track your progress.",
          quickCheck: [
            { objective: "O2", q: "What is the box drill?", options: ["Flying a square, first with the nose forward, then turning at each corner", "Hovering in one spot", "Circling a tree", "Flying in a figure eight"], answer: 0, why: "The box drill flies a square with the nose facing forward, then with the nose turning at each corner." },
            { objective: "O2", q: "You have flown the hover drill smoothly once. What do you do next?", options: ["Move straight to real flying", "Stop practising hover forever", "Keep practising until it is smooth three times in a row, then move on", "Skip to the hardest drill"], answer: 2, why: "Practise each drill until you can fly it smoothly three times in a row." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Flight modes and when to use them",
          minutes: 5,
          goal: "Explain the main flight modes and switch safely when GPS is weak.",
          text: [
            "Most camera drones fly in a positioning or GPS mode. The drone uses satellites and sensors to hold its place when you let go of the sticks, which makes flying easier and allows return-to-home and automatic mapping.",
            "Some drones also have an attitude mode (some brands call it ATTI). The drone holds its height but not its place, so it drifts with the wind like a boat on a river. A drone can drop into this mode by itself when GPS is weak, for example near tall metal structures, under thick trees, or in a deep valley. Pilots who have practised it stay calm; those who have not often crash.",
            "Other modes include sport (faster, less protection), tripod or cine (slow and smooth for filming), and automatic missions. Many simulators let you fly without GPS help. Practise it so drift does not surprise you."
          ],
          words: [["GPS mode", "a flight mode where the drone uses satellites to hold its place."], ["Attitude mode (ATTI)", "a mode where the drone holds height but drifts with the wind."], ["Drift", "the drone moving away by itself, usually with the wind."]],
          slides: [
            { title: "GPS / positioning mode", bullets: ["Holds its place when you let go", "Allows return-to-home and mapping", "Normal mode for farm work"] },
            { title: "Attitude mode (ATTI)", bullets: ["Holds height, not place", "Drifts with the wind", "Can switch on by itself when GPS is weak"] },
            { title: "Other modes", bullets: ["Sport: fast, less protection", "Tripod / cine: slow and smooth", "Practise flying without GPS help"] }
          ],
          tryIt: "In your simulator, switch off GPS help or choose attitude mode, add some wind, and hold a hover for 30 seconds by correcting drift. Then fly the box drill in this mode.",
          youCanNow: "explain the main flight modes and keep control when the drone drifts without GPS.",
          quickCheck: [
            { objective: "O3", q: "What does tripod or cine mode do?", options: ["Flies as fast as possible", "Turns off the motors", "Maps automatically", "Flies slowly and smoothly for filming"], answer: 3, why: "Tripod or cine mode is slow and smooth, for filming." },
            { objective: "O3", q: "You will map a field next to a tall metal grain silo. What do you prepare for?", options: ["Nothing; GPS always works", "The drone dropping into attitude mode and drifting, so you practise flying without GPS help", "Flying in sport mode", "Flying nose-in only"], answer: 1, why: "Near tall metal structures GPS can be weak, and the drone may drift in attitude mode." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Learning to fly",
        questions: [
          { objective: "O1", q: "In Mode 2, what does pushing the left stick up do?", options: ["Moves forward", "Turns right", "Climbs", "Moves sideways"], answer: 2, why: "The left stick controls throttle (height) and yaw in Mode 2." },
          { objective: "O1", q: "What is yaw?", options: ["Turning the drone left or right on the spot", "Climbing", "Landing", "Taking a photo"], answer: 0, why: "Yaw rotates the drone around its centre." },
          { objective: "O2", q: "Which practice plan builds skill best?", options: ["One three-hour session a month", "Short daily sessions of the same drills", "Only watching videos", "Flying a real drone without training"], answer: 1, why: "Short, regular repetition builds smooth control." },
          { objective: "O2", q: "Why practise flying nose-in?", options: ["It is faster", "It saves battery", "Simulators require it", "Controls feel reversed, and many beginners crash there"], answer: 3, why: "Practising it makes the reversed feeling familiar." },
          { objective: "O3", q: "In attitude (ATTI) mode the drone:", options: ["Holds height but drifts with the wind", "Lands automatically", "Holds its place perfectly", "Cannot move"], answer: 0, why: "Without GPS positioning it holds height but not place." }
        ]
      }
    },
    {
      name: "Chapter 2: Becoming a licensed pilot",
      lessons: [
        {
          objectives: ["O4"],
          title: "Emergency drills: lost link, low battery, GPS loss",
          minutes: 6,
          goal: "Follow the right steps in three common emergencies.",
          text: [
            "Emergencies are rare but fast. Pilots handle them well because they have practised the steps until they are automatic. Before each real flight, check that return-to-home height and the action on lost signal are set correctly.",
            "Lost link (the controller loses signal): stay calm, point the controller's antennas towards the drone, move to a higher spot if safe. Most drones start return-to-home after a few seconds; watch the sky and be ready to take control when the link returns. Low battery: stop the task and fly home directly, or land at the nearest safe spot; never try to finish one more line.",
            "GPS loss or sudden drift: switch your mind to attitude flying, keep the drone in sight, fly it gently back towards you against the wind, and land as soon as it is safe. After any emergency or crash, make the area safe, check for damage, write it in your log book, and report it to the authority if your rules require."
          ],
          steps: ["Lost link: stay calm, point antennas, move higher if safe, watch for return-to-home.", "Low battery: stop the task, fly home or land at the nearest safe spot.", "GPS loss: fly gently by hand, against the wind, land soon.", "After any incident: make safe, check damage, log it, report if required."],
          words: [["Lost link", "when the drone and controller lose their radio connection."], ["Fly-away", "when a drone flies off out of the pilot's control."], ["Incident", "an unplanned event that caused, or could have caused, harm or damage."]],
          slides: [
            { title: "Practise until automatic", bullets: ["Emergencies are rare but fast", "Check RTH height and lost-signal action first"] },
            { title: "Lost link", bullets: ["Stay calm, point the antennas", "Move higher if safe", "Watch for return-to-home"] },
            { title: "Low battery and GPS loss", bullets: ["Low battery: stop, go home or land now", "GPS loss: fly by hand, against wind, land soon"] },
            { title: "After any incident", bullets: ["Make the area safe", "Check damage, log it", "Report if your rules require"] }
          ],
          sources: [NCAA_P21, KCAA_UAS],
          tryIt: "In your simulator, practise each emergency: set a low-battery warning and fly home, switch off GPS mid-flight and land by hand, and (if the simulator allows) trigger a signal loss and watch return-to-home. Write the steps from memory afterwards.",
          youCanNow: "follow the right steps for lost link, low battery and GPS loss.",
          quickCheck: [
            { objective: "O4", q: "Before every real flight, what do you check to prepare for a lost link?", options: ["The camera's colour setting", "The farmer's address", "That return-to-home height and the lost-signal action are set correctly", "The log book's last page"], answer: 2, why: "Correct return-to-home height and lost-signal action let the drone come home safely if the link is lost." },
            { objective: "O4", q: "After a hard landing with a real drone, it looks fine. What do you do?", options: ["Check it for damage and write it in the log book", "Fly again at once without checking", "Forget about it", "Hide it from your instructor"], answer: 0, why: "After any emergency or crash, check for damage and log it; report it if the rules require." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Keeping a pilot log book",
          minutes: 4,
          goal: "Record every simulator and real flight in a log book.",
          text: [
            "A log book is your flying record. Training organisations and aviation authorities use flight logs to check experience, and employers and clients trust pilots who keep them. Keep simulator time and real flight time in separate columns.",
            "For each session record: date, place (or simulator), drone or simulator name, total minutes, type of flying (drills, mapping, inspection), conditions (wind, light), any problems or incidents, and what you learned. For real flights also note the registration of the drone and any approval used.",
            "Use a paper notebook, a spreadsheet or a logging app, but keep it every time and back it up. Ask your training organisation which format it accepts for licence applications."
          ],
          steps: ["Choose paper, spreadsheet or app, and back it up.", "Separate columns for simulator and real flights.", "Record date, place, aircraft, minutes, type, conditions, problems, lessons.", "For real flights, add registration and approval used.", "Ask your training organisation which format it accepts."],
          words: [["Log book", "a record of every flight a pilot makes."], ["Flight time", "the minutes or hours a pilot has spent flying."]],
          slides: [
            { title: "Why keep a log", bullets: ["Proves your experience", "Used by training organisations and authorities", "Builds trust with clients"] },
            { title: "What to record", bullets: ["Date, place, drone or simulator", "Minutes, type of flying, conditions", "Problems, incidents, lessons"] },
            { title: "Keep it well", bullets: ["Every session, backed up", "Simulator and real time separate", "Use the format your trainer accepts"] }
          ],
          tryIt: "Start your log book now as a spreadsheet with the columns from this lesson, and enter every simulator session you have done in this course so far.",
          youCanNow: "keep a complete pilot log book for simulator and real flights.",
          quickCheck: [
            { objective: "O2", q: "Why do training organisations and authorities look at flight logs?", options: ["To set the drone's price", "To check a pilot's experience", "To choose the weather", "To change the stick mode"], answer: 1, why: "Flight logs show a pilot's experience to schools, authorities, employers and clients." },
            { objective: "O2", q: "You flew a real drone today under an approval. What do you add to the log entry?", options: ["Nothing more than the date", "The weather next week", "Your bank details", "The drone's registration and the approval used"], answer: 3, why: "For real flights, also note the drone's registration and any approval used." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Your path to a remote pilot licence",
          minutes: 6,
          goal: "Write a personal plan to earn a remote pilot licence in your country.",
          text: [
            "Each country decides how remote pilots are licensed. In Kenya, KCAA approves Unmanned Aircraft Systems Training Organizations (UTOs) and lists them on its website; its fee schedule includes a student remote pilot licence, a remote pilot licence (RPL) and extra ratings such as beyond visual line of sight. Applications run through KCAA's online drone system. In Nigeria, NCAA's Part 21 sets out remote pilot licensing and other RPAS requirements. Other countries have their own rules.",
            "The usual path: choose an approved training organisation; study the theory (air law, airspace and maps, weather, the aircraft, human factors, emergency procedures); take flying lessons and a practical test; pass the authority's requirements; apply for the licence; and keep it valid by renewing it as required.",
            "Check every step, document and fee on the authority's official pages or by calling it, and check that a school is on the authority's approved list before you pay. Your simulator log shows you are ready to learn fast, but it does not replace approved training."
          ],
          steps: ["Find your aviation authority's drone pages.", "Find its list of approved training organisations; pick two to contact.", "Ask each: course length, theory and practical content, cost, test, documents needed.", "Check the licence fee on the official fee schedule.", "Write target dates for training, test and application."],
          words: [["Approved training organisation", "a drone school approved by the aviation authority to train pilots for a licence (KCAA calls them UTOs)."], ["Rating", "an extra permission on a licence for a type of flying, such as beyond visual line of sight."], ["Air law", "the rules about flying and airspace."]],
          slides: [
            { title: "Each country licenses its pilots", bullets: ["Kenya: KCAA approves UTOs; RPL via online system", "Nigeria: NCAA Part 21 covers remote pilot licensing", "Others: their own authority"] },
            { title: "The usual path", bullets: ["Approved school", "Theory: air law, airspace, weather, aircraft", "Practical training and test", "Apply, then renew"] },
            { title: "Check before you pay", bullets: ["School on the authority's approved list?", "Fees from the official schedule", "Simulator time helps, but is not a licence"] }
          ],
          sources: [KCAA_UTO, KCAA_PORTAL, KCAA_UAS, NCAA_P21],
          tryIt: "Final task: finish the five drills and three emergency drills in your simulator, keep every session in your log book, and write your one-page licensing plan: authority, approved schools found, licence needed, steps, documents, cost from official sources, and target dates.",
          youCanNow: "fly standard drills and emergency procedures in a simulator, keep a log book, and follow a clear plan to an official remote pilot licence.",
          quickCheck: [
            { objective: "O5", q: "Which is a usual step on the path to a remote pilot licence?", options: ["Training at an approved organisation, then a practical test", "Buying the biggest drone", "Finishing an online course only", "Flying for a client first"], answer: 0, why: "The usual path is approved training, theory, flying lessons and a test, then the licence application." },
            { objective: "O5", q: "A website offers a remote pilot licence online in one day with no test, for a fee. What do you do?", options: ["Pay quickly before the offer ends", "Pay half now", "Check the authority's official pages and approved list before paying anything", "Share it with friends"], answer: 2, why: "Licences come from the aviation authority; check that a school is on its approved list before you pay." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Becoming a licensed pilot",
        questions: [
          { objective: "O4", q: "The controller loses signal with the drone. A good first step is:", options: ["Switch off the controller", "Run after the drone", "Stay calm, point the antennas at the drone and watch for return-to-home", "Turn the drone motors off"], answer: 2, why: "Most drones return home after lost link; better antenna position may restore it." },
          { objective: "O4", q: "The low-battery warning sounds with one mapping line left. You should:", options: ["Fly the last line quickly", "Stop the task and fly home or land safely", "Climb higher", "Ignore it"], answer: 1, why: "Never push a low battery; land safely and finish later." },
          { objective: "O2", q: "What should a pilot log book record?", options: ["Date, place, aircraft, minutes, type, conditions, problems, lessons", "Only crashes", "Only the drone's price", "Nothing; it is optional"], answer: 0, why: "A full log proves experience and shows patterns." },
          { objective: "O5", q: "Does finishing this online course give you a licence?", options: ["Yes, at once", "Yes, after the quiz", "Only in Nigeria", "No; licences come from the aviation authority after approved training and tests"], answer: 3, why: "Only the national authority issues remote pilot licences." },
          { objective: "O5", q: "Before paying a drone school, you should:", options: ["Check it is on the aviation authority's approved list", "Trust its advert", "Ask a friend only", "Pay in cash to save time"], answer: 0, why: "Only approved training counts toward a licence." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Drones for Agricultural Monitoring 6: Online Drone Piloting Course",
    questions: [
      { objective: "O1", q: "In Mode 2, the right stick controls:", options: ["Height and turning", "Forward/back and sideways", "Camera zoom", "Return-to-home"], answer: 1, why: "The right stick controls pitch and roll in Mode 2." },
      { objective: "O1", q: "Throttle controls:", options: ["Turning", "Sideways movement", "Climbing and descending", "The camera"], answer: 2, why: "Throttle moves the drone up and down." },
      { objective: "O1", q: "Smooth flying comes from:", options: ["Small, gentle stick movements", "Pushing the sticks fully every time", "Flying fast", "Flying at night"], answer: 0, why: "Gentle inputs give smooth, controlled flight." },
      { objective: "O1", q: "Which is NOT normally on the flight screen?", options: ["Battery level", "GPS satellites", "Height", "The farmer's bank balance"], answer: 3, why: "The screen shows flight data, not personal finances." },
      { objective: "O2", q: "Why practise in a simulator first?", options: ["It is the law everywhere", "Mistakes cost nothing and break no rules", "It gives you a licence", "Real drones cannot hover"], answer: 1, why: "Simulators let you learn safely before real flights." },
      { objective: "O2", q: "How long should a good daily practice session be?", options: ["About 15 to 20 minutes", "Five hours", "One minute", "Only once a year"], answer: 0, why: "Short, regular sessions build skill best." },
      { objective: "O2", q: "The lawnmower drill practises:", options: ["Cutting grass", "Landing", "Straight parallel lines like a mapping flight", "Taking selfies"], answer: 2, why: "It builds the control used in mapping patterns." },
      { objective: "O2", q: "An orbit drill means:", options: ["Flying straight up", "Hovering", "Landing on a tree", "Circling a point with the camera on it"], answer: 3, why: "Orbits keep the camera on a target while circling." },
      { objective: "O2", q: "When flying nose-in, controls feel:", options: ["Reversed left and right", "Exactly the same", "Slower", "Locked"], answer: 0, why: "The drone faces you, so left and right are swapped from your view." },
      { objective: "O3", q: "In GPS mode, when you let go of the sticks the drone:", options: ["Falls", "Holds its place", "Flies home", "Spins"], answer: 1, why: "Satellite positioning holds the drone in place." },
      { objective: "O3", q: "A drone may drop into attitude mode when:", options: ["The battery is full", "The sky is clear", "GPS is weak, for example under thick trees or near metal structures", "You take a photo"], answer: 2, why: "Weak satellite signal removes position hold." },
      { objective: "O3", q: "In attitude mode in wind, the drone will:", options: ["Hold perfectly still", "Land by itself", "Climb forever", "Drift with the wind"], answer: 3, why: "It holds height but not place." },
      { objective: "O3", q: "Sport mode usually means:", options: ["Faster flying with less protection", "Slow, smooth filming", "Automatic landing", "No camera"], answer: 0, why: "Sport mode trades safety features for speed." },
      { objective: "O4", q: "After any crash or serious incident, you should:", options: ["Hide it", "Make the area safe, check damage, log it, and report if required", "Fly again at once without checks", "Delete the log"], answer: 1, why: "Safety first, then records and any required report." },
      { objective: "O4", q: "During GPS loss, the safest plan is to:", options: ["Fly further away", "Climb as high as possible", "Fly gently back by hand against the wind and land soon", "Let go of the sticks and wait"], answer: 2, why: "Manual control and an early landing prevent a fly-away." },
      { objective: "O4", q: "A fly-away is:", options: ["A normal mapping flight", "A type of propeller", "A landing pad", "A drone flying off out of the pilot's control"], answer: 3, why: "It is a loss of control, often after GPS or link problems." },
      { objective: "O2", q: "In a log book, simulator time and real flight time should be:", options: ["Kept in separate columns", "Added together with no labels", "Not recorded", "Recorded only if over one hour"], answer: 0, why: "Authorities and trainers need to see each kind separately." },
      { objective: "O5", q: "In Kenya, approved drone schools are called:", options: ["Drone clubs", "Unmanned Aircraft Systems Training Organizations (UTOs)", "Agrovets", "Plant clinics"], answer: 1, why: "KCAA approves and lists UTOs." },
      { objective: "O5", q: "Which topic is part of remote pilot theory training?", options: ["Cooking", "Football rules", "Air law, airspace and weather", "Music"], answer: 2, why: "Pilots must know air law, airspace, weather and their aircraft." },
      { objective: "O5", q: "Where should you check the licence fee?", options: ["A social media post", "A seller's advert", "An old friend's memory", "The aviation authority's official fee schedule"], answer: 3, why: "Fees change; only the official schedule is reliable." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Pre-Test: What Do You Already Know?",
    from: [
      0,
      1,
      4,
      8,
      9,
      11,
      13,
      14,
      16,
      17
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, practise or fix that part and check it again.",
    criteria: [
      {
        name: "Five drills",
        objective: "O2",
        notYet: "One or more drills are not yet smooth three times in a row.",
        meets: "Hover, box, figure eight, orbit and lawnmower each flown smoothly three times in a row.",
        exceeds: "Also flies the box and figure eight smoothly nose-in."
      },
      {
        name: "Emergency drills",
        objective: "O4",
        notYet: "Panics or skips steps in an emergency drill.",
        meets: "Follows the right steps for lost link, low battery and GPS loss.",
        exceeds: "Lands safely from attitude mode against the wind without help."
      },
      {
        name: "Log book",
        objective: "O2",
        notYet: "Sessions are missing or entries lack key fields.",
        meets: "Every session logged with date, simulator, minutes, type, conditions, problems and lessons.",
        exceeds: "Simulator and real time are in separate columns and the log is backed up."
      },
      {
        name: "Licensing plan",
        objective: "O5",
        notYet: "The authority, licence or steps are missing, or costs are guessed.",
        meets: "Authority, approved schools found, licence needed, steps, documents, cost from official sources and target dates.",
        exceeds: "Has contacted a school on the approved list and noted the date checked."
      }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and score Meets or Exceeds on every rubric row",
      "Learners who enrol with an approved training organisation within 90 days (follow-up survey)",
      "Learners who earn a remote pilot licence within a year",
      "Learners who report flying only with the registration, licence and approvals their country requires"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A computer or phone with a free or low-cost drone simulator; a controller if available",
      "A paper log book, spreadsheet or logging app",
      "Internet access to the aviation authority's pages and approved school list",
      "About 60 minutes of lessons, plus short daily simulator sessions of 15 to 20 minutes over several weeks"
    ],
    facilitatorNotes: [
      "Take the pre-test together, then run the first drills on a shared screen so learners see the stick movements.",
      "Make clear that the course gives no licence and no permission to fly real drones.",
      "Hold short drill check-ins where learners show each drill three times in a row.",
      "Check the approved training organisation lists with learners and warn against paying unlisted schools.",
      "Score the drills, log book and licensing plan with the rubric and give feedback on one Not yet row at a time."
    ]
  }
};
