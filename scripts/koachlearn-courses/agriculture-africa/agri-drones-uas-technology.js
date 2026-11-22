"use strict";

// Koach Learn course: Agriculture (Africa) -> "Agricultural Drones: UAS Technology and Maintenance".
// Part of the "Agricultural Drones in Africa" set (with agri-drones-regulations, agri-drones-mission-planning, agri-drones-data-precision): how a farm drone system works,
// how to care for batteries and payloads, and how to run inspections, scheduled maintenance, troubleshooting and records in African field conditions.
// Maker manuals rule: every maintenance lesson tells the student to follow the manufacturer's manual and their operations manual first.

const KCAA_UAS = { name: "Kenya Civil Aviation Authority (KCAA): Unmanned Aircraft Systems", url: "https://www.kcaa.or.ke/safety-security-oversight/unmanned-aircraft-systems" };
const NCAA_P21 = { name: "Nigeria Civil Aviation Authority (NCAA): Nig.CARs 2023 Part 21, Remotely Piloted Aircraft Systems", url: "https://www.ncaa.gov.ng/documents/regulations/nig-cars-2023/part-21-remotely-piloted-aircraft-system-rpas/" };
const FAO_ITU_DRONES = { name: "FAO and ITU: E-agriculture in Action: Drones for Agriculture (2018)", url: "https://www.itu.int/pub/D-STR-E_AGRICULT.02-2018" };

module.exports = {
  id: "agri-drones-uas-technology",
  category: "Agriculture (Africa)",
  name: "Agricultural Drones: UAS Technology and Maintenance",
  skills: "Naming the parts of a drone system and what each does, Caring for lithium-polymer batteries safely, Choosing and handling payloads, Running pre- and post-flight inspections, Keeping a maintenance schedule and records, Troubleshooting common faults",
  outcome: "explain how each part of an agricultural drone system works, care for its batteries and payloads safely, and run a maintenance program with inspections, a schedule, troubleshooting steps and complete records for one drone.",
  about: [
    "This course is for drone pilots, technicians, drone service businesses, agribusiness and estate staff, and young people who want to keep agricultural drones flying safely in Kenya, Nigeria and across Africa.",
    "Chapter 1 opens up the drone system: airframe, motors and propellers, flight controller and sensors, radio link and ground station, batteries and payloads such as cameras and spray systems. Chapter 2 is maintenance: daily inspections, scheduled maintenance, fixing common faults, firmware updates, records, and keeping drones working in dust, heat, rain and places with unreliable power.",
    "Always follow the manufacturer's manual and your operations manual first; this course teaches the general skills that sit behind them. Aviation authorities expect operators to maintain their aircraft and keep records, so good maintenance is both safety and compliance. A knowledge check closes each chapter and a 20-question quiz closes the course."
  ],
  finalTask: "Write a maintenance program for one agricultural drone (real or example, such as a mapping multirotor used by a cooperative): a parts list with what each part does, a battery care and charging procedure, a pre-flight and post-flight inspection checklist, a maintenance schedule by flight hours and by calendar, a troubleshooting table for at least five common faults, and a maintenance log template with two example entries.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Drone pilots, technicians, drone service businesses, agribusiness and estate staff, and young people in Kenya, Nigeria and across Africa who want to keep agricultural drones flying safely.",
    startingPoint: "Most have seen or flown an agricultural drone and can charge a battery and take off with the app. Few can name every part of the system and what it does, follow a written inspection checklist, plan maintenance by flight hours, or keep a maintenance log.",
    gap: "Drones are expensive and break easily in dust, heat and rain, and badly handled lithium batteries can catch fire. A drone that crashes or is grounded loses clients and money, and authorities, clients and insurers expect maintenance records. Knowing the system and running a maintenance program keeps drones safe, working and compliant.",
    constraints: [
      "Reading level: plain words; every technical term is explained",
      "Devices: a phone or computer for the course; a real drone helps but is not required",
      "Safety: lithium batteries can catch fire; no repairs inside batteries or electronics",
      "The manufacturer's manual and the operations manual come first; the course teaches the general skills behind them",
      "Field conditions: dust, heat, rain and unreliable power in many areas"
    ],
    prerequisites: "\"Drones for Agricultural Monitoring 1: Introduction, Regulations and Safety\" is recommended first."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Given an agricultural drone system", action: "name each main part of the aircraft and ground system and explain what it does", standard: "including the flight controller, sensors, C2 link and payload" },
    { id: "O2", condition: "With a set of drone batteries", action: "describe how to charge, store, transport and retire them safely", standard: "following every safety step, with no swollen or damaged battery used" },
    { id: "O3", condition: "Given a camera, sensor or spray payload", action: "describe how to mount, clean and check it", standard: "with the payload secure, optics clean and spray parts checked for wear" },
    { id: "O4", condition: "Before and after each flight", action: "run a pre-flight and post-flight inspection and record what you find", standard: "checking every item on the checklist" },
    { id: "O5", condition: "For one drone", action: "write a maintenance schedule by flight hours and calendar, a firmware update routine and a maintenance log", standard: "with whichever-comes-first intervals and every log field filled" },
    { id: "O6", condition: "Given a fault or harsh field conditions", action: "troubleshoot step by step and protect the drone from dust, heat, rain and power cuts", standard: "grounding the drone when a safety fault repeats" }
  ],
  chapters: [
    {
      name: "Chapter 1: How a farm drone system works",
      lessons: [
        {
          objectives: ["O1"],
          title: "The parts of a drone system",
          minutes: 6,
          goal: "Name the main parts of a drone system and explain what each does.",
          text: [
            "Authorities call a drone a system (UAS or RPAS) because the aircraft is only one part. The system includes the aircraft, the ground station (controller, phone or tablet, software), the radio link between them (often called the command and control, or C2, link), batteries and chargers, and the payload (camera, sensor or spray system).",
            "On the aircraft: the airframe (body and arms, or wings); motors and propellers that create lift; electronic speed controllers (ESCs) that tell each motor how fast to spin; the flight controller, the drone's brain; and sensors: GNSS (satellite positioning such as GPS), compass, an inertial measurement unit (IMU) that senses tilt and movement, a barometer for height, and often obstacle sensors.",
            "The flight controller reads the sensors hundreds of times a second and adjusts each motor to keep the drone stable and on course. If one sensor gives bad data, such as a compass near metal, the whole drone can behave strangely. That is why calibration and careful take-off spots matter."
          ],
          words: [["Airframe", "the body, arms or wings of the drone."], ["ESC", "electronic speed controller: controls how fast each motor spins."], ["Flight controller", "the drone's on-board computer that keeps it stable and on course."], ["GNSS", "global navigation satellite systems, such as GPS, used for position."], ["IMU", "inertial measurement unit: senses tilt, turning and movement."], ["C2 link", "command and control link: the radio connection between controller and drone."]],
          slides: [
            { title: "A system, not just an aircraft", bullets: ["Aircraft", "Ground station: controller, phone, software", "C2 radio link", "Batteries and payload"] },
            { title: "On the aircraft", bullets: ["Airframe, motors, propellers", "ESCs control each motor", "Flight controller: the brain"] },
            { title: "Sensors", bullets: ["GNSS for position, compass for direction", "IMU for tilt and movement", "Barometer for height, obstacle sensors"] },
            { title: "Why it matters", bullets: ["Bad sensor data = strange behaviour", "Calibrate and choose take-off spots carefully"] }
          ],
          sources: [NCAA_P21],
          tryIt: "Take a drone (or a clear photo or diagram of one) and label at least eight parts: airframe, motors, propellers, flight controller location, GNSS module, camera or payload, battery, controller. Next to each, write its job in one line.",
          youCanNow: "name the parts of a drone system and say what each one does.",
          quickCheck: [
            { objective: "O1", q: "What is the flight controller?", options: ["The pilot's hand controller", "The drone's brain that reads sensors and adjusts the motors", "The battery charger", "The camera mount"], answer: 1, why: "The flight controller reads the sensors many times a second and adjusts each motor to keep the drone stable." },
            { objective: "O1", q: "You are about to take off next to a metal water tank and the drone drifts strangely. What is a likely cause?", options: ["The propellers are too new", "The payload is too clean", "The battery is too full", "Bad compass data from the nearby metal"], answer: 3, why: "A compass near metal gives bad data, and the whole drone can behave strangely." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Batteries: the part that needs the most care",
          minutes: 6,
          goal: "Charge, store, transport and retire drone batteries safely.",
          text: [
            "Most drones use lithium-polymer (LiPo) or similar lithium batteries. They hold a lot of energy for their weight, which is why they can also catch fire if damaged, overcharged, over-discharged or overheated. Battery care is the most important maintenance job.",
            "Charge only with the correct charger, on a non-flammable surface, never unattended, and never a battery that is swollen, punctured or hot. Let a battery cool after flying before charging, and let it cool or warm to normal temperature before flying. Do not leave batteries in a hot car or in direct sun on the field.",
            "For storage longer than a few days, keep batteries at storage charge (partly charged, not full or empty; many smart batteries do this by themselves), in a cool, dry place, ideally in a fire-resistant bag or box. Track each battery's charge cycles and condition. Retire swollen or damaged batteries and dispose of them through a proper e-waste or battery collection point, never in a fire or ordinary rubbish. Carrying batteries on aeroplanes has its own airline rules."
          ],
          steps: ["Number each battery and log its cycles.", "Charge with the correct charger, on a non-flammable surface, attended.", "Never charge or fly a swollen, punctured or hot battery.", "Keep batteries out of hot cars and direct sun.", "Store at storage charge in a cool, dry, fire-resistant container.", "Retire damaged batteries to a proper collection point."],
          words: [["LiPo", "lithium-polymer battery: light and powerful, but can catch fire if mistreated."], ["Charge cycle", "one full use of a battery's capacity, from charged to used and back."], ["Storage charge", "a partial charge level that keeps lithium batteries healthy when not in use."], ["E-waste", "electronic waste, which needs special collection and recycling."]],
          slides: [
            { title: "Power with a risk", bullets: ["LiPo: lots of energy for its weight", "Can catch fire if damaged or mistreated", "Battery care is job number one"] },
            { title: "Charging rules", bullets: ["Correct charger, non-flammable surface", "Never unattended", "Never swollen, punctured or hot"] },
            { title: "Heat and storage", bullets: ["No hot cars or direct sun", "Storage charge, cool and dry", "Fire-resistant bag or box"] },
            { title: "Track and retire", bullets: ["Number batteries, log cycles", "Retire swollen or damaged ones", "Dispose at a proper collection point"] }
          ],
          tryIt: "Write a one-page battery procedure for a drone team: numbering, charging, field handling in heat, storage, a cycle log and retirement. Add a battery log table with columns for battery number, date, cycles, condition and notes.",
          youCanNow: "charge, store, transport and retire drone batteries safely and keep a battery log.",
          quickCheck: [
            { objective: "O2", q: "What is storage charge?", options: ["Partly charged, not full or empty, for storage longer than a few days", "Fully charged", "Completely empty", "Charged in a hot car"], answer: 0, why: "Batteries stored for more than a few days are kept partly charged in a cool, dry place." },
            { objective: "O2", q: "You have just landed and want to fly again soon. The battery is hot. What do you do?", options: ["Charge it right away in the sun", "Charge it in the car and walk away", "Let it cool before charging, and charge it attended on a non-flammable surface", "Put it in the freezer"], answer: 2, why: "Charging a hot battery or charging unattended raises the risk of fire." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Payloads: cameras, sensors and spray systems",
          minutes: 5,
          goal: "Handle, mount and look after the main agricultural drone payloads.",
          text: [
            "The payload is what the drone carries to do the job. Mapping drones carry an RGB camera, often on a gimbal that keeps it steady. Crop health drones may carry a multispectral camera with a sunlight sensor and a calibration panel. Thermal cameras measure heat. Spray drones carry a tank, pump, hoses and nozzles, and some spread granules or seed.",
            "Look after the optics: keep lenses and the sunlight sensor clean with a soft lens cloth, protect them with caps, and keep cameras out of dust and moisture. Check that the gimbal moves freely and the payload is mounted tightly; a loose payload upsets the balance and the flight controller.",
            "Spray systems need extra care: after each use they are rinsed and cleaned as the maker and pesticide label require, nozzles are checked for wear and blockages, and the whole system is calibrated so it applies the right amount. Remember that spraying by drone needs aviation and pesticide approvals; maintenance does not replace them."
          ],
          words: [["Payload", "the equipment the drone carries to do the job, such as a camera or spray tank."], ["Gimbal", "a motorised mount that keeps the camera steady."], ["Sunlight sensor", "a small sensor on top of some multispectral drones that measures incoming light to correct readings."], ["Nozzle", "the tip that turns liquid into spray droplets."]],
          slides: [
            { title: "Common payloads", bullets: ["RGB camera on a gimbal", "Multispectral with sunlight sensor", "Thermal camera", "Spray tank, pump, nozzles; spreaders"] },
            { title: "Care for optics", bullets: ["Clean lenses and sensors with a soft cloth", "Caps on, away from dust and moisture", "Gimbal moves freely, mount tight"] },
            { title: "Spray systems", bullets: ["Rinse and clean as maker and label require", "Check nozzles for wear and blockages", "Calibrate the rate; approvals still needed"] }
          ],
          sources: [FAO_ITU_DRONES],
          tryIt: "Choose one payload (RGB camera, multispectral camera or spray system). Write a care checklist with at least six items for before and after each use.",
          youCanNow: "mount, clean and check the main agricultural drone payloads.",
          quickCheck: [
            { objective: "O3", q: "What is the payload on an agricultural drone?", options: ["The battery", "The ground station", "What the drone carries to do the job, such as a camera or spray system", "The radio link"], answer: 2, why: "The payload is the camera, sensor, spray or spreading system that does the work." },
            { objective: "O3", q: "After a spraying job, what do you do with the spray system?", options: ["Rinse and clean it as the maker and label require, and check the nozzles", "Leave the leftover mix in the tank", "Wash the whole drone with a water jet", "Store it wet in the sun"], answer: 0, why: "Spray systems are rinsed and cleaned after each use, and nozzles are checked for wear and blockages." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: How a farm drone system works",
        questions: [
          { objective: "O1", q: "Why is a drone called a system (UAS or RPAS)?", options: ["It sounds better", "It includes aircraft, ground station, radio link, batteries and payload", "It has many propellers", "It is made in a factory"], answer: 1, why: "All parts together make the drone work." },
          { objective: "O1", q: "What does the IMU sense?", options: ["Tilt, turning and movement", "Soil moisture", "Crop prices", "Battery colour"], answer: 0, why: "The IMU senses the drone's motion so the flight controller can stabilise it." },
          { objective: "O2", q: "A battery is slightly swollen after a flight. You should:", options: ["Charge it quickly", "Press it flat", "Fly it once more", "Stop using it and retire it safely"], answer: 3, why: "Swelling is a sign of damage and fire risk." },
          { objective: "O2", q: "Where should drone batteries be stored for a long break?", options: ["Fully charged in a hot car", "Empty in direct sun", "At storage charge in a cool, dry, fire-resistant container", "In the kitchen fire"], answer: 2, why: "Storage charge and cool conditions keep lithium batteries safe and healthy." },
          { objective: "O3", q: "What does a gimbal do?", options: ["Keeps the camera steady", "Charges the battery", "Sprays pesticide", "Measures height"], answer: 0, why: "A gimbal stabilises the camera for sharp images." }
        ]
      }
    },
    {
      name: "Chapter 2: Maintenance in the field and workshop",
      lessons: [
        {
          objectives: ["O4"],
          title: "Inspections before and after every flight",
          minutes: 5,
          goal: "Run a pre-flight and post-flight inspection and record what you find.",
          text: [
            "Inspections catch small problems before they cause a crash. A pre-flight inspection checks that the drone is fit to fly now; a post-flight inspection finds damage or wear from the flight just done and sets up the next day.",
            "Pre-flight: airframe and arms free of cracks, arms locked; propellers clean, tight and free of chips or cracks; motors spin freely without grinding; payload secure and lens clean; battery seated and latched; sensors and vision windows clean; controller and app ready; firmware status checked before leaving base.",
            "Post-flight: let motors and batteries cool; check for heat in motors (an unusually hot motor may be failing); look for new damage, dust or grass in motors and vents; clean the drone with a soft brush or dry cloth (no water jets on electronics); note flight time, problems and any warning messages in the log."
          ],
          steps: ["Pre-flight: frame, arms, propellers, motors, payload, battery, sensors, controller.", "Fly only if every item passes.", "Post-flight: cool down, check motor heat, look for damage and dirt.", "Clean with a soft brush or dry cloth.", "Log flight time, problems and warnings."],
          words: [["Inspection", "a careful check for damage, wear or faults."], ["Firmware", "the software built into the drone, controller and batteries."]],
          slides: [
            { title: "Two inspections", bullets: ["Pre-flight: fit to fly now?", "Post-flight: damage or wear from today?"] },
            { title: "Pre-flight", bullets: ["Frame, arms locked, propellers undamaged", "Motors spin freely, payload secure", "Battery latched, sensors clean, app ready"] },
            { title: "Post-flight", bullets: ["Cool down; check motor heat", "Damage, dust, grass in motors and vents", "Clean dry, log time, problems, warnings"] }
          ],
          tryIt: "Write a pre-flight and a post-flight inspection checklist of at least eight items each for a mapping drone. If you have a drone, use them once and log the results.",
          youCanNow: "inspect a drone before and after every flight and record what you find.",
          quickCheck: [
            { objective: "O4", q: "What is a pre-flight inspection for?", options: ["Finding damage from the last flight only", "Charging the battery", "Updating the firmware in the field", "Checking that the drone is fit to fly now"], answer: 3, why: "The pre-flight inspection checks that the drone is fit to fly before take-off." },
            { objective: "O4", q: "During the pre-flight check, a motor makes a grinding sound when you turn it. What do you do?", options: ["Fly carefully", "Do not fly; check the motor for sand, grass or damage", "Add oil to the propeller", "Fly a shorter mission"], answer: 1, why: "Motors should spin freely; grinding means a problem to fix before flying." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Scheduled maintenance, firmware and records",
          minutes: 5,
          goal: "Set a maintenance schedule by flight hours and calendar, and keep maintenance records.",
          text: [
            "Some parts wear out with use. Propellers, motors, bearings, gimbals, landing gear and spray pumps and nozzles need replacing on a schedule. The manufacturer's manual gives intervals; your operations manual sets your own schedule. Plan by flight hours (for example every 50 hours) and by calendar (for example every three months), whichever comes first.",
            "Firmware updates fix bugs and add safety features, but an update can also change behaviour. Read the release notes, update before you leave base (not in the field), update the drone, controller and batteries together, and test with a short flight before real work.",
            "Keep a maintenance log for each drone: date, flight hours, what was inspected, replaced or repaired, parts used, firmware version, who did it, and the result. Authorities expect operators to maintain aircraft and keep records; clients and insurers may ask for them too."
          ],
          steps: ["Read the manufacturer's maintenance intervals.", "Write your schedule by flight hours and calendar.", "Plan firmware updates at base, with release notes read and a test flight.", "Keep a maintenance log for each drone.", "Keep spare propellers and common parts in stock."],
          words: [["Scheduled maintenance", "planned checks and part replacements at fixed intervals."], ["Maintenance log", "the record of all maintenance done on a drone."], ["Release notes", "the maker's description of what a software update changes."]],
          slides: [
            { title: "Parts wear out", bullets: ["Propellers, motors, bearings, gimbal", "Landing gear, pumps, nozzles", "Replace on a schedule"] },
            { title: "Hours and calendar", bullets: ["For example every 50 hours or 3 months", "Whichever comes first", "Follow the maker's manual"] },
            { title: "Firmware safely", bullets: ["Read release notes", "Update at base, all parts together", "Test flight before real work"] },
            { title: "Maintenance log", bullets: ["Date, hours, work done, parts, firmware", "Who did it and result", "For safety, authorities, clients, insurers"] }
          ],
          sources: [KCAA_UAS, NCAA_P21],
          tryIt: "Make a maintenance schedule table for one drone with at least six items (propellers, motors, gimbal, landing gear, batteries, firmware), each with an interval in hours and in months, and start a maintenance log with one example entry.",
          youCanNow: "plan scheduled maintenance and firmware updates and keep a proper maintenance log.",
          quickCheck: [
            { objective: "O5", q: "What does \"whichever comes first\" mean in a maintenance schedule?", options: ["Do the work only every three months", "Do the work at the flight-hour limit or the calendar date, whichever is reached first", "Skip the work if the drone flies well", "Do the work only after a crash"], answer: 1, why: "Planning by flight hours and calendar, whichever comes first, keeps parts from wearing out." },
            { objective: "O5", q: "A firmware update appears while you are at a client's farm. What do you do?", options: ["Install it right away in the field", "Update only the drone and not the controller", "Turn off all updates forever", "Wait, then update at base after reading the release notes and test with a short flight"], answer: 3, why: "Updates can change behaviour, so they are done at base, all together, and tested before real work." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Troubleshooting and African field conditions",
          minutes: 6,
          goal: "Diagnose common faults step by step and protect drones from dust, heat, rain and power cuts.",
          text: [
            "Troubleshoot one step at a time: read the warning message in the app, check the simplest causes first, change one thing, and test. Common faults: compass error (move away from metal, vehicles and power lines, then recalibrate if asked); weak GNSS (wait for more satellites, move away from tall trees); vibration or wobble (check for a damaged or loose propeller or bent arm); motor error (check for grass, sand or a damaged motor); short flight times (aging battery, heat or a heavy payload).",
            "Dust and sand get into motors and gimbals: take off from a mat or tarpaulin, clean after flying and store in a closed case. Heat shortens battery life and can overheat electronics: shade batteries and the controller, fly in cooler hours, and give the drone rest between flights. Rain and humidity damage electronics unless the drone is rated for them: do not fly in rain, dry gear and store with moisture-absorbing packets.",
            "Where power is unreliable, plan charging: a vehicle inverter or a solar charging kit, enough batteries for the day, and charging overnight at base. Know when to stop: if a fault repeats or affects safety, ground the drone and send it to the maker's service centre or a qualified technician."
          ],
          steps: ["Read the exact warning message.", "Check the simplest causes first.", "Change one thing at a time, then test.", "Use a landing mat; clean and case the drone after dusty work.", "Shade batteries; fly in cooler hours; no rain flights unless rated.", "Ground the drone if a safety fault repeats."],
          words: [["Troubleshooting", "finding the cause of a fault step by step."], ["Calibration", "a procedure that resets a sensor, such as the compass, so it reads correctly."], ["Grounded", "not allowed to fly until fixed."]],
          slides: [
            { title: "Troubleshoot step by step", bullets: ["Read the warning", "Simplest causes first", "Change one thing, then test"] },
            { title: "Common faults", bullets: ["Compass error: away from metal, recalibrate", "Wobble: propellers or arms", "Short flights: old battery, heat, heavy payload"] },
            { title: "Dust, heat and rain", bullets: ["Landing mat, clean, closed case", "Shade batteries, fly cooler hours", "No rain unless rated; dry and store well"] },
            { title: "Power and limits", bullets: ["Vehicle or solar charging, spare batteries", "Ground the drone if a safety fault repeats"] }
          ],
          tryIt: "Final task: write the maintenance program for one drone: parts list with jobs, battery procedure, pre- and post-flight checklists, schedule by hours and calendar, a troubleshooting table for at least five faults, and a maintenance log template with two example entries.",
          youCanNow: "troubleshoot common drone faults, protect drones in African field conditions, and run a full maintenance program.",
          quickCheck: [
            { objective: "O6", q: "What is the first step in troubleshooting?", options: ["Read the warning message and check the simplest causes first", "Change several parts at once", "Open the battery", "Fly higher to test"], answer: 0, why: "Read the message, check simple causes first, change one thing and test." },
            { objective: "O6", q: "You will fly all day on a hot, dusty farm with no power. What do you plan?", options: ["One battery and take-off from bare sand", "Leave the batteries in the sun to stay warm", "A mat for take-off, shade for batteries, cooler hours and enough charged batteries or a solar or vehicle charger", "Fly without resting the drone"], answer: 2, why: "Mats keep out dust, shade and cooler hours protect batteries, and charging must be planned where power is unreliable." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Maintenance in the field and workshop",
        questions: [
          { objective: "O4", q: "A propeller has a small chip on its edge. You should:", options: ["Fly carefully", "Tape it", "Replace it before flying", "Sand it smooth and fly"], answer: 2, why: "Damaged propellers cause vibration and can fail in flight." },
          { objective: "O4", q: "After a flight, one motor is much hotter than the others. This may mean:", options: ["The motor is failing or blocked", "The drone flew well", "The camera is dirty", "The battery is new"], answer: 0, why: "Unusual heat can signal a bad bearing, debris or a failing motor." },
          { objective: "O5", q: "When should you install a firmware update?", options: ["In the middle of a client's field", "During a flight", "Never", "At base, after reading release notes, then test fly"], answer: 3, why: "Updates can change behaviour; test before real work." },
          { objective: "O6", q: "The app shows a compass error at take-off. A good first step is:", options: ["Take off anyway", "Move away from metal, vehicles and power lines and recalibrate if asked", "Remove the compass", "Fly in sport mode"], answer: 1, why: "Metal and magnetic sources disturb the compass." },
          { objective: "O6", q: "How do you protect a drone from dust on a dry farm?", options: ["Take off from a mat, clean after flying, store in a closed case", "Wash it with a hose", "Fly lower to the ground", "Leave it uncovered"], answer: 0, why: "Dust damages motors and gimbals; mats, cleaning and cases help." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Agricultural Drones: UAS Technology and Maintenance",
    questions: [
      { objective: "O1", q: "The C2 link is:", options: ["A battery type", "The radio connection between controller and drone", "A propeller size", "A camera lens"], answer: 1, why: "Command and control link carries commands and data." },
      { objective: "O1", q: "ESCs control:", options: ["The camera zoom", "Battery storage", "How fast each motor spins", "GPS satellites"], answer: 2, why: "Electronic speed controllers drive the motors." },
      { objective: "O1", q: "The flight controller is:", options: ["The drone's on-board brain that keeps it stable", "The person flying", "The remote control box", "The landing pad"], answer: 0, why: "It reads sensors and adjusts motors many times a second." },
      { objective: "O1", q: "GNSS gives the drone its:", options: ["Colour", "Temperature", "Battery level", "Position from satellites"], answer: 3, why: "GNSS, such as GPS, gives position." },
      { objective: "O1", q: "A barometer on a drone measures:", options: ["Wind direction", "Air pressure, used for height", "Crop health", "Battery cycles"], answer: 1, why: "Air pressure changes with height." },
      { objective: "O2", q: "Why can LiPo batteries be dangerous?", options: ["They are heavy", "They are noisy", "They can catch fire if damaged, overcharged or overheated", "They never charge"], answer: 2, why: "High energy density means high risk when mistreated." },
      { objective: "O2", q: "Batteries should be charged:", options: ["With the correct charger, attended, on a non-flammable surface", "Overnight on a bed", "Inside a hot car", "With any charger that fits"], answer: 0, why: "These steps reduce fire risk." },
      { objective: "O2", q: "A charge cycle is:", options: ["A bicycle part", "A flight plan", "A weather pattern", "One full use of a battery's capacity"], answer: 3, why: "Logging cycles shows battery ageing." },
      { objective: "O2", q: "A retired, damaged drone battery should go to:", options: ["A cooking fire", "A proper e-waste or battery collection point", "Ordinary rubbish", "A river"], answer: 1, why: "Lithium batteries need safe collection and recycling." },
      { objective: "O3", q: "A multispectral drone's sunlight sensor:", options: ["Charges the battery", "Measures wind", "Measures incoming light to correct readings", "Sprays water"], answer: 2, why: "It helps correct for changing light." },
      { objective: "O3", q: "A loose payload can:", options: ["Upset the drone's balance and control", "Improve photos", "Make the drone lighter", "Charge faster"], answer: 0, why: "The flight controller expects a secure, balanced load." },
      { objective: "O3", q: "Spray nozzles should be checked for:", options: ["Colour", "Brand stickers", "Music", "Wear and blockages"], answer: 3, why: "Worn or blocked nozzles apply the wrong amount." },
      { objective: "O3", q: "Does good spray-system maintenance replace spraying approvals?", options: ["Yes", "No; aviation and pesticide approvals are still needed", "Only on small farms", "Only at night"], answer: 1, why: "Maintenance and legal approval are separate requirements." },
      { objective: "O4", q: "A post-flight inspection is done to:", options: ["Charge the controller", "Plan the next client", "Find damage or wear from the flight just done", "Edit photos"], answer: 2, why: "It catches problems before the next flight." },
      { objective: "O4", q: "How should you clean a drone after a dusty flight?", options: ["Soft brush or dry cloth", "High-pressure water", "Sand paper", "Petrol"], answer: 0, why: "Water and chemicals can damage electronics." },
      { objective: "O5", q: "Scheduled maintenance is planned by:", options: ["Only colour", "Only weather", "Only the client", "Flight hours and calendar, whichever comes first"], answer: 3, why: "Parts wear with use and with time." },
      { objective: "O5", q: "A maintenance log records:", options: ["Only the drone's price", "Date, hours, work done, parts, firmware, who did it, result", "Farmers' phone numbers", "Crop prices"], answer: 1, why: "Full records support safety and compliance." },
      { objective: "O6", q: "The drone wobbles in flight. Check first:", options: ["The client's map", "The weather forecast for next month", "Propellers and arms for damage or looseness", "The memory card"], answer: 2, why: "Damaged propellers and bent arms cause vibration." },
      { objective: "O6", q: "In very hot weather you should:", options: ["Shade batteries and fly in cooler hours", "Leave batteries in the sun", "Fly continuously without rest", "Charge batteries while hot"], answer: 0, why: "Heat shortens battery life and stresses electronics." },
      { objective: "O6", q: "A safety fault keeps coming back after your fixes. You should:", options: ["Keep flying", "Hide it from clients", "Cover the warning", "Ground the drone and send it to a qualified technician"], answer: 3, why: "Repeated safety faults need expert repair before flying." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Pre-Test: What Do You Already Know?",
    from: [
      0,
      2,
      5,
      6,
      9,
      12,
      13,
      15,
      17,
      19
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part of the program and check it again.",
    criteria: [
      {
        name: "Parts list",
        objective: "O1",
        notYet: "Main parts are missing, or what they do is not explained.",
        meets: "Every main part of the aircraft and ground system is listed with what it does.",
        exceeds: "Notes which parts wear out and which need calibration."
      },
      {
        name: "Battery care",
        objective: "O2",
        notYet: "Charging, storage or retirement steps are missing or unsafe.",
        meets: "Safe charging, cooling, storage charge, transport and retirement steps, with cycle tracking.",
        exceeds: "Includes a fire plan for the charging area."
      },
      {
        name: "Inspection checklists",
        objective: "O4",
        notYet: "No checklist, or key items such as propellers and battery latch are missing.",
        meets: "Pre-flight and post-flight checklists cover airframe, propellers, motors, payload, battery, sensors and log notes.",
        exceeds: "The payload checks fit the drone's real job, such as mapping or spraying."
      },
      {
        name: "Schedule and log",
        objective: "O5",
        notYet: "No intervals, or the log is missing fields.",
        meets: "A schedule by flight hours and calendar, a firmware routine, and a log template with two example entries.",
        exceeds: "Intervals are taken from the maker's manual and the source is noted."
      },
      {
        name: "Troubleshooting table",
        objective: "O6",
        notYet: "Fewer than five faults, or no steps.",
        meets: "At least five common faults, each with simple first checks and when to ground the drone.",
        exceeds: "Adds steps for dust, heat, rain and power cuts on the learner's own farms."
      }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and score Meets or Exceeds on every rubric row of the maintenance program",
      "Learners who report using a written inspection checklist and maintenance log 30 days later (follow-up survey)",
      "Drone businesses or cooperatives that report fewer crashes, battery incidents or grounded days after training",
      "Learners who take the next drone course or a manufacturer's technician training"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A phone or computer for the lessons; a real agricultural drone, or clear photos of one, for practice",
      "The drone's manufacturer manual, if available",
      "A notebook or spreadsheet for the checklists, schedule and log",
      "About 60 minutes in total, in short sessions, plus time to write the maintenance program"
    ],
    facilitatorNotes: [
      "Take the pre-test together, then walk around a real drone (powered off, propellers removed) to name each part.",
      "Handle batteries only on a non-flammable surface, and never charge, puncture or open a swollen battery in class.",
      "Use the drone's own manual for intervals and procedures; the course gives the general method only.",
      "Do not run spray systems with pesticide in class; practise inspections with clean water or no liquid.",
      "Score the maintenance program with the rubric and give feedback on one Not yet row at a time."
    ]
  }
};
