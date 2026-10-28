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
  chapters: [
    {
      name: "Chapter 1: How a farm drone system works",
      lessons: [
        {
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
          youCanNow: "name the parts of a drone system and say what each one does."
        },
        {
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
          youCanNow: "charge, store, transport and retire drone batteries safely and keep a battery log."
        },
        {
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
          youCanNow: "mount, clean and check the main agricultural drone payloads."
        }
      ],
      check: {
        title: "Knowledge Check 1: How a farm drone system works",
        questions: [
          { q: "Why is a drone called a system (UAS or RPAS)?", options: ["It sounds better", "It includes aircraft, ground station, radio link, batteries and payload", "It has many propellers", "It is made in a factory"], answer: 1, why: "All parts together make the drone work." },
          { q: "What does the IMU sense?", options: ["Tilt, turning and movement", "Soil moisture", "Crop prices", "Battery colour"], answer: 0, why: "The IMU senses the drone's motion so the flight controller can stabilise it." },
          { q: "A battery is slightly swollen after a flight. You should:", options: ["Charge it quickly", "Press it flat", "Fly it once more", "Stop using it and retire it safely"], answer: 3, why: "Swelling is a sign of damage and fire risk." },
          { q: "Where should drone batteries be stored for a long break?", options: ["Fully charged in a hot car", "Empty in direct sun", "At storage charge in a cool, dry, fire-resistant container", "In the kitchen fire"], answer: 2, why: "Storage charge and cool conditions keep lithium batteries safe and healthy." },
          { q: "What does a gimbal do?", options: ["Keeps the camera steady", "Charges the battery", "Sprays pesticide", "Measures height"], answer: 0, why: "A gimbal stabilises the camera for sharp images." }
        ]
      }
    },
    {
      name: "Chapter 2: Maintenance in the field and workshop",
      lessons: [
        {
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
          youCanNow: "inspect a drone before and after every flight and record what you find."
        },
        {
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
          youCanNow: "plan scheduled maintenance and firmware updates and keep a proper maintenance log."
        },
        {
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
          youCanNow: "troubleshoot common drone faults, protect drones in African field conditions, and run a full maintenance program."
        }
      ],
      check: {
        title: "Knowledge Check 2: Maintenance in the field and workshop",
        questions: [
          { q: "A propeller has a small chip on its edge. You should:", options: ["Fly carefully", "Tape it", "Replace it before flying", "Sand it smooth and fly"], answer: 2, why: "Damaged propellers cause vibration and can fail in flight." },
          { q: "After a flight, one motor is much hotter than the others. This may mean:", options: ["The motor is failing or blocked", "The drone flew well", "The camera is dirty", "The battery is new"], answer: 0, why: "Unusual heat can signal a bad bearing, debris or a failing motor." },
          { q: "When should you install a firmware update?", options: ["In the middle of a client's field", "During a flight", "Never", "At base, after reading release notes, then test fly"], answer: 3, why: "Updates can change behaviour; test before real work." },
          { q: "The app shows a compass error at take-off. A good first step is:", options: ["Take off anyway", "Move away from metal, vehicles and power lines and recalibrate if asked", "Remove the compass", "Fly in sport mode"], answer: 1, why: "Metal and magnetic sources disturb the compass." },
          { q: "How do you protect a drone from dust on a dry farm?", options: ["Take off from a mat, clean after flying, store in a closed case", "Wash it with a hose", "Fly lower to the ground", "Leave it uncovered"], answer: 0, why: "Dust damages motors and gimbals; mats, cleaning and cases help." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Agricultural Drones: UAS Technology and Maintenance",
    questions: [
      { q: "The C2 link is:", options: ["A battery type", "The radio connection between controller and drone", "A propeller size", "A camera lens"], answer: 1, why: "Command and control link carries commands and data." },
      { q: "ESCs control:", options: ["The camera zoom", "Battery storage", "How fast each motor spins", "GPS satellites"], answer: 2, why: "Electronic speed controllers drive the motors." },
      { q: "The flight controller is:", options: ["The drone's on-board brain that keeps it stable", "The person flying", "The remote control box", "The landing pad"], answer: 0, why: "It reads sensors and adjusts motors many times a second." },
      { q: "GNSS gives the drone its:", options: ["Colour", "Temperature", "Battery level", "Position from satellites"], answer: 3, why: "GNSS, such as GPS, gives position." },
      { q: "A barometer on a drone measures:", options: ["Wind direction", "Air pressure, used for height", "Crop health", "Battery cycles"], answer: 1, why: "Air pressure changes with height." },
      { q: "Why can LiPo batteries be dangerous?", options: ["They are heavy", "They are noisy", "They can catch fire if damaged, overcharged or overheated", "They never charge"], answer: 2, why: "High energy density means high risk when mistreated." },
      { q: "Batteries should be charged:", options: ["With the correct charger, attended, on a non-flammable surface", "Overnight on a bed", "Inside a hot car", "With any charger that fits"], answer: 0, why: "These steps reduce fire risk." },
      { q: "A charge cycle is:", options: ["A bicycle part", "A flight plan", "A weather pattern", "One full use of a battery's capacity"], answer: 3, why: "Logging cycles shows battery ageing." },
      { q: "A retired, damaged drone battery should go to:", options: ["A cooking fire", "A proper e-waste or battery collection point", "Ordinary rubbish", "A river"], answer: 1, why: "Lithium batteries need safe collection and recycling." },
      { q: "A multispectral drone's sunlight sensor:", options: ["Charges the battery", "Measures wind", "Measures incoming light to correct readings", "Sprays water"], answer: 2, why: "It helps correct for changing light." },
      { q: "A loose payload can:", options: ["Upset the drone's balance and control", "Improve photos", "Make the drone lighter", "Charge faster"], answer: 0, why: "The flight controller expects a secure, balanced load." },
      { q: "Spray nozzles should be checked for:", options: ["Colour", "Brand stickers", "Music", "Wear and blockages"], answer: 3, why: "Worn or blocked nozzles apply the wrong amount." },
      { q: "Does good spray-system maintenance replace spraying approvals?", options: ["Yes", "No; aviation and pesticide approvals are still needed", "Only on small farms", "Only at night"], answer: 1, why: "Maintenance and legal approval are separate requirements." },
      { q: "A post-flight inspection is done to:", options: ["Charge the controller", "Plan the next client", "Find damage or wear from the flight just done", "Edit photos"], answer: 2, why: "It catches problems before the next flight." },
      { q: "How should you clean a drone after a dusty flight?", options: ["Soft brush or dry cloth", "High-pressure water", "Sand paper", "Petrol"], answer: 0, why: "Water and chemicals can damage electronics." },
      { q: "Scheduled maintenance is planned by:", options: ["Only colour", "Only weather", "Only the client", "Flight hours and calendar, whichever comes first"], answer: 3, why: "Parts wear with use and with time." },
      { q: "A maintenance log records:", options: ["Only the drone's price", "Date, hours, work done, parts, firmware, who did it, result", "Farmers' phone numbers", "Crop prices"], answer: 1, why: "Full records support safety and compliance." },
      { q: "The drone wobbles in flight. Check first:", options: ["The client's map", "The weather forecast for next month", "Propellers and arms for damage or looseness", "The memory card"], answer: 2, why: "Damaged propellers and bent arms cause vibration." },
      { q: "In very hot weather you should:", options: ["Shade batteries and fly in cooler hours", "Leave batteries in the sun", "Fly continuously without rest", "Charge batteries while hot"], answer: 0, why: "Heat shortens battery life and stresses electronics." },
      { q: "A safety fault keeps coming back after your fixes. You should:", options: ["Keep flying", "Hide it from clients", "Cover the warning", "Ground the drone and send it to a qualified technician"], answer: 3, why: "Repeated safety faults need expert repair before flying." }
    ]
  }
};
