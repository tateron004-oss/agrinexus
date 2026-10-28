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
  chapters: [
    {
      name: "Chapter 1: Learning to fly",
      lessons: [
        {
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
          youCanNow: "say what each stick does in Mode 2, read the flight screen, and find the emergency buttons."
        },
        {
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
          youCanNow: "practise five standard drills in a simulator and track your progress."
        },
        {
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
          youCanNow: "explain the main flight modes and keep control when the drone drifts without GPS."
        }
      ],
      check: {
        title: "Knowledge Check 1: Learning to fly",
        questions: [
          { q: "In Mode 2, what does pushing the left stick up do?", options: ["Moves forward", "Turns right", "Climbs", "Moves sideways"], answer: 2, why: "The left stick controls throttle (height) and yaw in Mode 2." },
          { q: "What is yaw?", options: ["Turning the drone left or right on the spot", "Climbing", "Landing", "Taking a photo"], answer: 0, why: "Yaw rotates the drone around its centre." },
          { q: "Which practice plan builds skill best?", options: ["One three-hour session a month", "Short daily sessions of the same drills", "Only watching videos", "Flying a real drone without training"], answer: 1, why: "Short, regular repetition builds smooth control." },
          { q: "Why practise flying nose-in?", options: ["It is faster", "It saves battery", "Simulators require it", "Controls feel reversed, and many beginners crash there"], answer: 3, why: "Practising it makes the reversed feeling familiar." },
          { q: "In attitude (ATTI) mode the drone:", options: ["Holds height but drifts with the wind", "Lands automatically", "Holds its place perfectly", "Cannot move"], answer: 0, why: "Without GPS positioning it holds height but not place." }
        ]
      }
    },
    {
      name: "Chapter 2: Becoming a licensed pilot",
      lessons: [
        {
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
          youCanNow: "follow the right steps for lost link, low battery and GPS loss."
        },
        {
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
          youCanNow: "keep a complete pilot log book for simulator and real flights."
        },
        {
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
          youCanNow: "fly standard drills and emergency procedures in a simulator, keep a log book, and follow a clear plan to an official remote pilot licence."
        }
      ],
      check: {
        title: "Knowledge Check 2: Becoming a licensed pilot",
        questions: [
          { q: "The controller loses signal with the drone. A good first step is:", options: ["Switch off the controller", "Run after the drone", "Stay calm, point the antennas at the drone and watch for return-to-home", "Turn the drone motors off"], answer: 2, why: "Most drones return home after lost link; better antenna position may restore it." },
          { q: "The low-battery warning sounds with one mapping line left. You should:", options: ["Fly the last line quickly", "Stop the task and fly home or land safely", "Climb higher", "Ignore it"], answer: 1, why: "Never push a low battery; land safely and finish later." },
          { q: "What should a pilot log book record?", options: ["Date, place, aircraft, minutes, type, conditions, problems, lessons", "Only crashes", "Only the drone's price", "Nothing; it is optional"], answer: 0, why: "A full log proves experience and shows patterns." },
          { q: "Does finishing this online course give you a licence?", options: ["Yes, at once", "Yes, after the quiz", "Only in Nigeria", "No; licences come from the aviation authority after approved training and tests"], answer: 3, why: "Only the national authority issues remote pilot licences." },
          { q: "Before paying a drone school, you should:", options: ["Check it is on the aviation authority's approved list", "Trust its advert", "Ask a friend only", "Pay in cash to save time"], answer: 0, why: "Only approved training counts toward a licence." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Drones for Agricultural Monitoring 6: Online Drone Piloting Course",
    questions: [
      { q: "In Mode 2, the right stick controls:", options: ["Height and turning", "Forward/back and sideways", "Camera zoom", "Return-to-home"], answer: 1, why: "The right stick controls pitch and roll in Mode 2." },
      { q: "Throttle controls:", options: ["Turning", "Sideways movement", "Climbing and descending", "The camera"], answer: 2, why: "Throttle moves the drone up and down." },
      { q: "Smooth flying comes from:", options: ["Small, gentle stick movements", "Pushing the sticks fully every time", "Flying fast", "Flying at night"], answer: 0, why: "Gentle inputs give smooth, controlled flight." },
      { q: "Which is NOT normally on the flight screen?", options: ["Battery level", "GPS satellites", "Height", "The farmer's bank balance"], answer: 3, why: "The screen shows flight data, not personal finances." },
      { q: "Why practise in a simulator first?", options: ["It is the law everywhere", "Mistakes cost nothing and break no rules", "It gives you a licence", "Real drones cannot hover"], answer: 1, why: "Simulators let you learn safely before real flights." },
      { q: "How long should a good daily practice session be?", options: ["About 15 to 20 minutes", "Five hours", "One minute", "Only once a year"], answer: 0, why: "Short, regular sessions build skill best." },
      { q: "The lawnmower drill practises:", options: ["Cutting grass", "Landing", "Straight parallel lines like a mapping flight", "Taking selfies"], answer: 2, why: "It builds the control used in mapping patterns." },
      { q: "An orbit drill means:", options: ["Flying straight up", "Hovering", "Landing on a tree", "Circling a point with the camera on it"], answer: 3, why: "Orbits keep the camera on a target while circling." },
      { q: "When flying nose-in, controls feel:", options: ["Reversed left and right", "Exactly the same", "Slower", "Locked"], answer: 0, why: "The drone faces you, so left and right are swapped from your view." },
      { q: "In GPS mode, when you let go of the sticks the drone:", options: ["Falls", "Holds its place", "Flies home", "Spins"], answer: 1, why: "Satellite positioning holds the drone in place." },
      { q: "A drone may drop into attitude mode when:", options: ["The battery is full", "The sky is clear", "GPS is weak, for example under thick trees or near metal structures", "You take a photo"], answer: 2, why: "Weak satellite signal removes position hold." },
      { q: "In attitude mode in wind, the drone will:", options: ["Hold perfectly still", "Land by itself", "Climb forever", "Drift with the wind"], answer: 3, why: "It holds height but not place." },
      { q: "Sport mode usually means:", options: ["Faster flying with less protection", "Slow, smooth filming", "Automatic landing", "No camera"], answer: 0, why: "Sport mode trades safety features for speed." },
      { q: "After any crash or serious incident, you should:", options: ["Hide it", "Make the area safe, check damage, log it, and report if required", "Fly again at once without checks", "Delete the log"], answer: 1, why: "Safety first, then records and any required report." },
      { q: "During GPS loss, the safest plan is to:", options: ["Fly further away", "Climb as high as possible", "Fly gently back by hand against the wind and land soon", "Let go of the sticks and wait"], answer: 2, why: "Manual control and an early landing prevent a fly-away." },
      { q: "A fly-away is:", options: ["A normal mapping flight", "A type of propeller", "A landing pad", "A drone flying off out of the pilot's control"], answer: 3, why: "It is a loss of control, often after GPS or link problems." },
      { q: "In a log book, simulator time and real flight time should be:", options: ["Kept in separate columns", "Added together with no labels", "Not recorded", "Recorded only if over one hour"], answer: 0, why: "Authorities and trainers need to see each kind separately." },
      { q: "In Kenya, approved drone schools are called:", options: ["Drone clubs", "Unmanned Aircraft Systems Training Organizations (UTOs)", "Agrovets", "Plant clinics"], answer: 1, why: "KCAA approves and lists UTOs." },
      { q: "Which topic is part of remote pilot theory training?", options: ["Cooking", "Football rules", "Air law, airspace and weather", "Music"], answer: 2, why: "Pilots must know air law, airspace, weather and their aircraft." },
      { q: "Where should you check the licence fee?", options: ["A social media post", "A seller's advert", "An old friend's memory", "The aviation authority's official fee schedule"], answer: 3, why: "Fees change; only the official schedule is reliable." }
    ]
  }
};
