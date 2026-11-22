"use strict";

// Koach Learn course: Agriculture (Africa) -> "Drones for Agricultural Monitoring 2: Flight Operations, Imaging and Sensors" (owner's drone outline, modules 3 and 4).
// Second of the six-part monitoring track: preparing and flying a drone, planning an automatic mapping flight, and choosing and using sensors to get good farm images.
// Hands-on stick skills and licensing practice are in agri-drones-piloting; professional mission paperwork and crew operations are in agri-drones-mission-planning.

const NCAA_P21 = { name: "Nigeria Civil Aviation Authority (NCAA): Nig.CARs 2023 Part 21, Remotely Piloted Aircraft Systems", url: "https://www.ncaa.gov.ng/documents/regulations/nig-cars-2023/part-21-remotely-piloted-aircraft-system-rpas/" };
const KCAA_UAS = { name: "Kenya Civil Aviation Authority (KCAA): Unmanned Aircraft Systems", url: "https://www.kcaa.or.ke/safety-security-oversight/unmanned-aircraft-systems" };
const FAO_ITU_DRONES = { name: "FAO and ITU: E-agriculture in Action: Drones for Agriculture (2018)", url: "https://www.itu.int/pub/D-STR-E_AGRICULT.02-2018" };

module.exports = {
  id: "agri-drones-flight-imaging",
  category: "Agriculture (Africa)",
  name: "Drones for Agricultural Monitoring 2: Flight Operations, Imaging and Sensors",
  skills: "Running a pre-flight check, Flying within visual line of sight, Planning an automatic mapping flight, Choosing height and overlap, Choosing the right sensor, Capturing clear, even images",
  outcome: "plan and prepare a mapping flight over a farm plot: pick the sensor, height, overlap and time of day, run the pre-flight checks, and capture a full set of clear, even images that can be stitched into a map.",
  about: [
    "This is Course 2 of the drone monitoring track, for farmers, extension officers, agribusiness staff and young drone service providers in Kenya, Nigeria and across Africa. Take Course 1 first, or make sure you already know your country's drone rules and have the registration, licence and approvals they require.",
    "In Chapter 1 you learn to prepare a drone, fly it safely within sight, and plan an automatic mapping flight with the right height and overlap. In Chapter 2 you learn what each sensor shows (colour, multispectral, thermal) and how light, wind and timing make the difference between a useful map and a useless one.",
    "The examples use real farm jobs: a 2-hectare maize plot, a tea block, a cassava field, a horticulture greenhouse. Every lesson ends with a short practice task. A knowledge check closes each chapter and a 20-question quiz closes the course."
  ],
  finalTask: "Write a complete imaging flight plan for a 2-hectare maize plot (real or example): goal of the flight, sensor, flight height and the resulting image detail shown by your flight app, front and side overlap, flight speed, number of batteries, time of day, weather limits, take-off spot, and a pre-flight checklist. If you have a drone and the required approvals, fly it and check every image before you leave the field.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Farmers, extension officers, agribusiness staff and young drone service providers in Kenya, Nigeria and across Africa taking Course 2 of the drone monitoring track.",
    startingPoint: "Learners know what a drone can do on a farm and how to find their country's drone rules (Course 1). Few have run a written pre-flight check, flown a planned mapping grid, set height and overlap for the detail they need, or know which sensor and lighting give a usable map.",
    gap: "Poorly prepared flights cause crashes, and badly planned or badly timed flights give blurred, patchy images that cannot be stitched or compared, wasting batteries, time and clients' money. Planning and preparing a mapping flight properly gives a complete, sharp image set the first time.",
    constraints: [
      "Reading level: plain words; every flying and imaging term is explained",
      "Devices: a phone or tablet with a mapping app helps; a drone is only needed for the optional flight",
      "Rules: flying is only with the registration, licence and approvals the country requires",
      "Field conditions: wind, heat, patchy cloud and no mobile network on many farms",
      "Time: short lessons, plus time to write the flight plan"
    ],
    prerequisites: "\"Drones for Agricultural Monitoring 1: Introduction, Regulations and Safety\"."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Before every flight", action: "run a complete pre-flight check of the aircraft, batteries, controller, settings and papers", standard: "with no checklist item skipped" },
    { id: "O2", condition: "On a practice or approved flight", action: "take off, fly a simple pattern and land while keeping the drone in sight", standard: "within the legal height limit and landing with battery to spare" },
    { id: "O3", condition: "For a field to be mapped", action: "plan a grid mapping flight with height, image detail, overlap, speed and batteries", standard: "with overlap of about 70 to 80 percent forward and 60 to 70 percent to the side" },
    { id: "O4", condition: "Given a high-resolution colour drone image", action: "point out gaps, weeds, water, lodging and damage", standard: "and mark each spot to check on foot" },
    { id: "O5", condition: "Given a farm question", action: "choose between an RGB, multispectral and thermal sensor", standard: "with a reason that fits the question and the cost" },
    { id: "O6", condition: "On the day of a mapping flight", action: "set the time, light and wind limits and check every image before leaving the field", standard: "so the images are sharp, evenly lit and complete" }
  ],
  chapters: [
    {
      name: "Chapter 1: Flight operations",
      lessons: [
        {
          objectives: ["O1"],
          title: "Getting the drone ready: the pre-flight check",
          minutes: 5,
          goal: "Run a complete pre-flight check on a drone before every flight.",
          text: [
            "Most drone accidents start on the ground: a cracked propeller, a half-charged battery, an out-of-date map in the app, or a compass that was not calibrated. A written checklist, used every time, prevents most of them.",
            "Check the aircraft (frame, arms, propellers tight and undamaged, camera clean and secure), the batteries (fully charged, no swelling, contacts clean), the controller and phone or tablet (charged, app updated before you leave home, offline maps downloaded if there is no network in the field), and the settings (return-to-home height above the tallest tree or mast, home point recorded).",
            "Do your paper check too: registration, pilot licence and any flight authorisation your authority requires for this site, carried with you or on your phone."
          ],
          steps: ["Paper check: registration, licence, approvals for this site.", "Aircraft: frame, arms, propellers, camera.", "Batteries: charged, not swollen, clean contacts.", "Controller and phone or tablet: charged, app updated, offline maps ready.", "Settings: return-to-home height, home point, compass calibration if the app asks.", "Look around: people, animals, wind, then start."],
          words: [["Pre-flight check", "a list of checks done before every flight."], ["Return-to-home (RTH)", "a setting that makes the drone fly back to its take-off point by itself, for example when the battery is low or the signal is lost."], ["Home point", "the place the drone will return to, usually where it took off."]],
          slides: [
            { title: "Accidents start on the ground", bullets: ["Cracked propellers, weak batteries", "Old app maps, uncalibrated compass", "A checklist every time prevents most"] },
            { title: "Check the kit", bullets: ["Frame, arms, propellers, camera", "Batteries charged, not swollen", "Controller, phone, app updated, offline maps"] },
            { title: "Check the settings", bullets: ["Return-to-home height above tallest obstacle", "Home point recorded", "Compass calibrated if asked"] },
            { title: "Check the papers", bullets: ["Registration and pilot licence", "Approvals for this site", "Carry them with you"] }
          ],
          sources: [KCAA_UAS, NCAA_P21],
          tryIt: "Write your own pre-flight checklist with at least 12 items under four headings: papers, aircraft, batteries and controller, settings. Keep it on your phone.",
          youCanNow: "prepare a drone with a full pre-flight check covering papers, aircraft, batteries, controller and settings.",
          quickCheck: [
            { objective: "O1", q: "What is the home point?", options: ["The pilot's house", "The place the drone returns to by itself on return-to-home", "The highest point of the farm", "The drone shop"], answer: 1, why: "The home point is recorded before take-off so return-to-home flies the drone back there." },
            { objective: "O1", q: "You are going to a farm with no mobile network. What do you do before you leave home?", options: ["Nothing; the app will work anyway", "Plan to update the app in the field", "Leave the batteries uncharged", "Download offline maps and update the app"], answer: 3, why: "Apps should be updated and offline maps downloaded before you leave, because there may be no network in the field." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Flying safely within sight",
          minutes: 5,
          goal: "Take off, fly a simple pattern and land while keeping the drone in sight.",
          text: [
            "Visual line of sight (VLOS) means you, or your observer, can see the drone with your own eyes, without binoculars, the whole time. Most farm flights by smallholders and new pilots are VLOS. Flying beyond line of sight needs special approval. Nigeria's Part 21, for example, requires VLOS for smaller drones and sets a maximum height of 120 metres (400 feet) above ground for many operations; check your own country's limits.",
            "Take off from your clear spot, climb to a safe height above trees, and hover for a few seconds to check the drone is steady. Fly slowly. Keep the drone in front of you, not overhead or behind you, so you do not lose track of which way it faces.",
            "Watch the battery and wind. Land with enough battery left for a safe landing, never at the last percent. If the drone drifts strongly in the wind, bring it back and land."
          ],
          steps: ["Stand at your take-off spot with your observer.", "Take off and climb above the trees; hover and check it is steady.", "Fly slowly in a square in front of you, keeping it in sight.", "Watch the battery and wind on the screen.", "Return, descend slowly and land with battery to spare."],
          words: [["VLOS", "visual line of sight: you can see the drone with your own eyes the whole flight."], ["BVLOS", "beyond visual line of sight: flying further than you can see; needs special approval."], ["AGL", "above ground level: height measured from the ground below the drone."]],
          slides: [
            { title: "Visual line of sight", bullets: ["You or your observer always see the drone", "No binoculars", "Beyond sight needs special approval"] },
            { title: "Know the height limit", bullets: ["Nigeria Part 21: 120 m (400 ft) AGL for many flights", "Check your own country's limit"] },
            { title: "Fly it well", bullets: ["Climb above trees, hover, check it is steady", "Fly slowly, keep it in front of you", "Watch battery and wind"] },
            { title: "Land with margin", bullets: ["Never at the last percent", "Strong drift: bring it back and land"] }
          ],
          sources: [NCAA_P21, KCAA_UAS],
          tryIt: "If you have a drone and approval, fly a slow square in front of you and land with battery to spare. If not, use a free drone simulator app or watch a training video and write down the steps you saw.",
          youCanNow: "take off, fly a simple pattern within sight, and land safely with battery to spare.",
          quickCheck: [
            { objective: "O2", q: "What does keeping the drone \"in front of you\" help with?", options: ["Charging the battery", "Making the photos brighter", "Knowing which way the drone faces", "Flying beyond sight"], answer: 2, why: "Keeping the drone in front of you, not overhead or behind, helps you keep track of its direction." },
            { objective: "O2", q: "Right after take-off the drone drifts strongly in the wind. What do you do?", options: ["Bring it back and land", "Climb higher to escape the wind", "Fly faster to finish", "Look away and let it fly"], answer: 0, why: "If the drone drifts strongly in the wind, bring it back and land." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Planning an automatic mapping flight",
          minutes: 6,
          goal: "Plan a grid mapping flight with the right height, overlap and speed.",
          text: [
            "To make a map of a field, the drone flies back and forth in straight lines (a grid, sometimes called a lawnmower pattern) and takes photos that overlap. Mapping apps let you draw the field boundary, then plan the lines for you.",
            "Height sets the detail. The higher you fly, the more ground each pixel covers and the less detail you get, but the faster you finish. The app shows this as ground sampling distance (GSD), for example 2 cm per pixel. To count maize plants you need fine detail; to see waterlogged areas, coarser is fine. Never plan above your legal height limit.",
            "Overlap is how much each photo shares with the next. Software needs a lot of overlap to stitch photos into one map; many mapping guides suggest about 70 to 80 percent forward and 60 to 70 percent to the side, more over tall, uniform crops like maize or tea. Fly slowly enough that photos are sharp, and plan enough batteries to finish."
          ],
          steps: ["Draw the field boundary in the mapping app.", "Choose the height: check the GSD it gives and stay under your legal limit.", "Set forward and side overlap (for example 75 and 65 percent).", "Check the flight time and number of batteries.", "Save the plan and review it again before you go to the field."],
          words: [["Grid flight", "a flight in straight back-and-forth lines that covers the whole field."], ["Overlap", "how much each photo shares with the next one, in percent."], ["GSD", "ground sampling distance: how much ground one pixel covers, such as 2 cm."], ["Orthomosaic", "one large, map-accurate picture stitched from many overlapping photos."]],
          slides: [
            { title: "A mapping flight", bullets: ["Straight back-and-forth lines", "Photos overlap", "Software stitches them into one map"] },
            { title: "Height sets the detail", bullets: ["Higher = less detail, faster", "Lower = more detail, more batteries", "Stay under your legal height limit"] },
            { title: "Overlap makes stitching work", bullets: ["About 70-80% forward, 60-70% side is common", "More over tall, uniform crops"] },
            { title: "Before you go", bullets: ["Check GSD, flight time, batteries", "Save the plan and review it"] }
          ],
          tryIt: "Open a free mapping or flight-planning app (or a flight planner inside your drone's app) and draw a 2-hectare field. Try three heights and write down the GSD and flight time for each.",
          youCanNow: "plan a grid mapping flight and choose height, overlap and speed for the job.",
          quickCheck: [
            { objective: "O3", q: "What is a grid or lawnmower pattern?", options: ["Straight back-and-forth lines over the field", "A circle around one tree", "A single photo from very high", "A flight along the road"], answer: 0, why: "Mapping flights fly straight back-and-forth lines so the photos cover the whole field with overlap." },
            { objective: "O3", q: "You want to count maize plants but your plan gives coarse detail. What do you change?", options: ["Fly faster", "Reduce the overlap", "Fly lower for a finer GSD, within the legal limit", "Fly in the evening"], answer: 2, why: "Flying lower gives finer detail per pixel, but never above or beyond your legal limits." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Flight operations",
        questions: [
          { objective: "O1", q: "Why use a written pre-flight checklist every time?", options: ["It looks professional", "Most accidents start with something missed on the ground", "The drone needs it to start", "It replaces the licence"], answer: 1, why: "A checklist catches cracked propellers, weak batteries and wrong settings." },
          { objective: "O1", q: "What should the return-to-home height be set to?", options: ["As low as possible", "Below the tallest tree", "Above the tallest tree or mast on the site", "It does not matter"], answer: 2, why: "The drone must clear every obstacle when it flies home by itself." },
          { objective: "O2", q: "What does VLOS mean?", options: ["You can see the drone with your own eyes the whole flight", "The drone sees you", "The drone flies at night", "The drone flies beyond the horizon"], answer: 0, why: "Visual line of sight means unaided sight of the drone at all times." },
          { objective: "O3", q: "You fly higher on a mapping flight. What happens?", options: ["More detail per pixel", "The photos stop overlapping", "Nothing changes", "Each pixel covers more ground and you finish faster"], answer: 3, why: "Higher flights give coarser GSD but cover the field faster." },
          { objective: "O3", q: "Why do mapping photos need a lot of overlap?", options: ["To use more battery", "So the software can stitch them into one map", "To make photos brighter", "Because the law says 100 percent"], answer: 1, why: "Stitching software matches features shared between overlapping photos." }
        ]
      }
    },
    {
      name: "Chapter 2: Aerial imaging and sensors",
      lessons: [
        {
          objectives: ["O4"],
          title: "Colour (RGB) images: what you can see",
          minutes: 5,
          goal: "Read a high-resolution colour drone image for gaps, weeds, water and damage.",
          text: [
            "A normal colour (RGB) camera is the most useful sensor for most farms, and it comes with almost every drone. At a few centimetres per pixel you can see single maize, bean or cassava plants.",
            "In colour images look for: gaps in rows (poor germination or plants eaten by pests), weed patches between rows, standing water and bare soil, lodged (fallen) maize or sorghum, hail or wind damage, cattle or goats in the wrong place, and blocked drains or broken fences.",
            "Colour images can also hint at nutrient problems or disease (yellowing, uneven green), but they show it later than the eye on the ground or a multispectral camera might. Always mark the spot and check it on foot."
          ],
          steps: ["Open the image or map and zoom out to see the whole field.", "Look for anything uneven: gaps, colour changes, water, bare soil.", "Zoom in on each one.", "Mark each spot with a number and a short note.", "Walk to the spots to check them."],
          words: [["High-resolution image", "an image with fine detail, where each pixel covers a small piece of ground."], ["Lodging", "when stalks of maize, sorghum or wheat bend or fall over."]],
          slides: [
            { title: "RGB: the workhorse sensor", bullets: ["Comes with almost every drone", "Shows single plants at a few cm per pixel"] },
            { title: "What to look for", bullets: ["Gaps in rows, weed patches", "Standing water, bare soil", "Lodged maize, hail or wind damage", "Animals, broken fences, blocked drains"] },
            { title: "Limits", bullets: ["Shows disease and nutrient stress late", "Always check spots on foot"] }
          ],
          tryIt: "Find a drone photo or a satellite view of a farm online (or use your own). List five things you can see, mark where each one is, and say what you would check on the ground.",
          youCanNow: "read a colour drone image and mark gaps, weeds, water and damage to check on the ground.",
          quickCheck: [
            { objective: "O4", q: "In a colour image, what can a gap in a row show?", options: ["Too much fertilizer", "A strong battery", "A good harvest", "Poor germination or plants eaten by pests"], answer: 3, why: "Gaps in rows often mean seeds did not come up or plants were eaten." },
            { objective: "O4", q: "The image shows an uneven, yellowish patch in a bean field. What do you do?", options: ["Spray the whole field", "Mark the spot and check it on foot", "Ignore it", "Delete the image"], answer: 1, why: "Colour images can hint at problems, but the spot must be checked on the ground." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Multispectral and thermal sensors",
          minutes: 6,
          goal: "Choose between RGB, multispectral and thermal sensors for a farm question.",
          text: [
            "Healthy green leaves reflect a lot of near-infrared light, which the eye cannot see. Stressed or sick leaves reflect less. A multispectral camera measures several bands of light, including near-infrared and red edge, so software can calculate vegetation indices such as NDVI that show plant vigour. FAO uses NDVI from satellites to track vegetation health across Africa; drones do the same at field scale.",
            "A thermal camera measures surface temperature. Plants short of water close their pores and warm up, so thermal images can show water stress and blocked irrigation lines. Thermal is also good for finding animals at night or dawn.",
            "These sensors cost more and need careful use (calibration, the right time of day). Choose them when the question needs them: early stress in a tea estate or irrigated vegetables, yes; counting gaps in a 1-acre bean plot, no, colour is enough."
          ],
          words: [["Near-infrared (NIR)", "light just beyond red that people cannot see; healthy leaves reflect a lot of it."], ["Vegetation index", "a number calculated from bands of light that shows how green and vigorous plants are."], ["NDVI", "Normalized Difference Vegetation Index: a common vegetation index from red and near-infrared light, from -1 to +1; higher usually means denser, healthier green plants."]],
          slides: [
            { title: "Multispectral", bullets: ["Measures red, red edge, near-infrared and more", "Software makes vegetation index maps like NDVI", "Shows plant stress earlier than colour"] },
            { title: "Thermal", bullets: ["Measures surface temperature", "Water-stressed plants run warmer", "Finds blocked irrigation and animals at dawn"] },
            { title: "Choose by the question", bullets: ["Gaps and weeds: RGB", "Early stress in high-value crops: multispectral", "Water stress or animals: thermal"] }
          ],
          sources: [{ name: "FAO GIEWS Earth Observation (NDVI and vegetation indicators)", url: "https://www.fao.org/giews/earthobservation/index.jsp" }, FAO_ITU_DRONES],
          tryIt: "For each question, choose RGB, multispectral or thermal and write why: (a) Is my drip line blocked? (b) Where did the beans not germinate? (c) Is one block of tea under stress before the leaves change colour?",
          youCanNow: "say what multispectral and thermal sensors show and choose the right sensor for a farm question.",
          quickCheck: [
            { objective: "O5", q: "What does a thermal camera measure?", options: ["Plant height", "Surface temperature", "Soil nutrients", "Rainfall"], answer: 1, why: "A thermal camera measures surface temperature, which can show water stress." },
            { objective: "O5", q: "A tea estate wants to spot stress early across its blocks. Which sensor do you suggest?", options: ["None", "A thermal camera only for animals", "A phone camera", "A multispectral camera"], answer: 3, why: "Multispectral cameras measure near-infrared and red edge, which show plant stress earlier." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Capturing good images: light, wind and timing",
          minutes: 5,
          goal: "Set up a flight so every image is sharp, evenly lit and usable.",
          text: [
            "Images taken weeks apart can only be compared if they are taken the same way. Fly around the middle of the day, when shadows are short, and in steady light: either full sun or even cloud, not patches of cloud moving over the field. Fly at the same height and settings each time.",
            "Wind shakes the drone and moves leaves, which blurs images and breaks stitching. Fly slower in light wind and not at all in strong wind. Make sure the lens is clean and the camera is set to focus correctly; many mapping apps set the camera for you.",
            "For multispectral cameras, photograph the calibration panel (a card of known reflectance that comes with the sensor) before and after the flight, so software can correct for light. Before leaving the field, look through the photos: if some are blurred, dark or missing, refly that part while you are still there."
          ],
          steps: ["Plan to fly near midday in steady light.", "Check wind; slow down in light wind, cancel in strong wind.", "Clean the lens; check camera settings.", "Multispectral: photograph the calibration panel before and after.", "Before leaving, check the photos and refly any bad section."],
          words: [["Calibration panel", "a card of known brightness photographed before and after a multispectral flight to correct for light."], ["Blur", "when an image is not sharp because the camera or plants moved."]],
          slides: [
            { title: "Same way, every time", bullets: ["Fly near midday: short shadows", "Steady light: full sun or even cloud", "Same height and settings each flight"] },
            { title: "Beat the blur", bullets: ["Slow down in light wind", "Cancel in strong wind", "Clean lens, correct camera settings"] },
            { title: "Multispectral extras", bullets: ["Photograph the calibration panel", "Before AND after the flight"] },
            { title: "Check before you leave", bullets: ["Look through the photos", "Refly blurred, dark or missing parts"] }
          ],
          tryIt: "Final task: write your complete imaging flight plan for a 2-hectare maize plot: goal, sensor, height and GSD, overlap, speed, batteries, time of day, weather limits, take-off spot and checklist. If you have a drone and the required approvals, fly it and check every image before you leave.",
          youCanNow: "plan and capture a set of sharp, evenly lit images that can be stitched into a farm map and compared over time.",
          quickCheck: [
            { objective: "O6", q: "What is a calibration panel?", options: ["A spare propeller", "A battery case", "A card of known reflectance photographed before and after a multispectral flight", "The controller's screen"], answer: 2, why: "Photographing the calibration panel lets software correct for the light that day." },
            { objective: "O6", q: "Patchy clouds are moving fast over the field at midday. What do you do?", options: ["Wait for full sun or even cloud before flying", "Fly now and hope", "Fly at dusk instead", "Fly higher to get above the clouds"], answer: 0, why: "Steady light, either full sun or even cloud, gives evenly lit images that can be compared." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Aerial imaging and sensors",
        questions: [
          { objective: "O4", q: "Which sensor is enough to find gaps in a 1-acre bean plot?", options: ["Thermal only", "Multispectral only", "A normal colour (RGB) camera", "No sensor can do this"], answer: 2, why: "Gaps are easy to see in colour images at a few centimetres per pixel." },
          { objective: "O5", q: "Healthy green leaves reflect a lot of:", options: ["Near-infrared light", "Sound", "Heat only", "Radio waves"], answer: 0, why: "Healthy leaf structure reflects strongly in near-infrared; vegetation indices use this." },
          { objective: "O5", q: "A thermal image shows one block of tomatoes much warmer than the rest. A likely cause to check is:", options: ["Too much fertilizer colour", "The drone was too high", "The block is greener", "Water stress or a blocked drip line"], answer: 3, why: "Plants short of water warm up because they close their pores." },
          { objective: "O6", q: "When is the best time to fly for comparable images?", options: ["At sunrise one week and sunset the next", "Near midday, in steady light, the same way each time", "In patchy moving cloud", "At night"], answer: 1, why: "Short shadows and steady light make images comparable." },
          { objective: "O6", q: "Some photos are blurred when you check them in the field. You should:", options: ["Refly that section before you leave", "Go home and hope stitching works", "Delete the whole set", "Fly faster next time"], answer: 0, why: "Fixing it on site saves another trip and gives a complete map." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Drones for Agricultural Monitoring 2: Flight Operations, Imaging and Sensors",
    questions: [
      { objective: "O1", q: "Where do most drone accidents start?", options: ["In the air only", "On the ground, with something missed in preparation", "In the office", "In the software after landing"], answer: 1, why: "Cracked propellers, weak batteries and wrong settings cause many accidents." },
      { objective: "O1", q: "Which is part of the paper check?", options: ["Propeller tightness", "Lens cleaning", "Registration, licence and approvals for the site", "Battery swelling"], answer: 2, why: "The paper check confirms you are allowed to fly there." },
      { objective: "O1", q: "A battery looks swollen. You should:", options: ["Not use it", "Use it for a short flight", "Squeeze it flat", "Charge it more"], answer: 0, why: "A swollen battery can fail or catch fire; do not fly with it." },
      { objective: "O1", q: "Why download offline maps before going to a rural farm?", options: ["To save money on fuel", "To make the drone faster", "Because the law requires it", "There may be no mobile network in the field"], answer: 3, why: "Without network, the app may not load maps it needs." },
      { objective: "O1", q: "Return-to-home is:", options: ["A setting that flies the drone back to its take-off point by itself", "A button that switches off the motors", "A camera mode", "A type of battery"], answer: 0, why: "RTH brings the drone home on low battery or lost signal." },
      { objective: "O2", q: "Flying beyond visual line of sight:", options: ["Is always allowed", "Needs special approval", "Is required for mapping", "Is safer"], answer: 1, why: "BVLOS is higher risk and needs authorisation." },
      { objective: "O2", q: "Nigeria's Part 21 sets a common maximum height of:", options: ["10 metres", "1,000 metres", "120 metres (400 feet) above ground", "No limit"], answer: 2, why: "Part 21 uses 120 m (400 ft) AGL for many operations; check your country's own limit." },
      { objective: "O2", q: "During a flight, where should you keep the drone?", options: ["Behind you", "Directly overhead", "Out of sight", "In front of you, in view"], answer: 3, why: "In front and in view, you can tell which way it faces." },
      { objective: "O2", q: "When should you land?", options: ["With battery to spare", "At 0 percent", "Only when the drone lands itself", "When the phone is full"], answer: 0, why: "Leave enough battery for a safe descent and landing." },
      { objective: "O3", q: "A mapping flight flies:", options: ["In circles", "In straight back-and-forth lines", "Randomly", "Straight up and down"], answer: 1, why: "A grid pattern covers the whole field with overlapping photos." },
      { objective: "O3", q: "GSD means:", options: ["Ground speed of the drone", "Global safety distance", "How much ground one pixel covers", "Battery size"], answer: 2, why: "Ground sampling distance is image detail, such as 2 cm per pixel." },
      { objective: "O3", q: "To count single maize plants you should:", options: ["Fly as high as possible", "Use only satellites", "Fly at night", "Fly lower for finer detail, within the legal limit"], answer: 3, why: "Finer GSD shows single plants; stay under the height limit." },
      { objective: "O3", q: "A common forward overlap for mapping is about:", options: ["70 to 80 percent", "5 percent", "0 percent", "100 percent exactly"], answer: 0, why: "High overlap lets the software stitch photos." },
      { objective: "O4", q: "Lodging in a colour image means:", options: ["Plants that are too green", "Stalks that have bent or fallen", "Weeds between rows", "Water on the soil"], answer: 1, why: "Lodged maize or sorghum lies flat and is easy to see from above." },
      { objective: "O4", q: "A colour image shows a yellowing patch. The best next step is:", options: ["Spray it", "Ignore it", "Mark it and check it on foot", "Fly higher"], answer: 2, why: "Images show where; you confirm the cause on the ground." },
      { objective: "O5", q: "NDVI is calculated from:", options: ["Sound and heat", "Blue light only", "Soil samples", "Red and near-infrared light"], answer: 3, why: "NDVI compares red and near-infrared reflectance." },
      { objective: "O5", q: "A high NDVI value usually means:", options: ["Dense, healthy green vegetation", "Bare soil", "Water", "A broken camera"], answer: 0, why: "FAO describes high positive NDVI as dense, healthy vegetation." },
      { objective: "O5", q: "A thermal camera is a good choice to:", options: ["Read a number plate", "Find water stress and animals at dawn", "Count seeds in a bag", "See colours more brightly"], answer: 1, why: "Thermal measures heat, linked to water stress and warm-bodied animals." },
      { objective: "O6", q: "Why photograph a calibration panel with a multispectral camera?", options: ["It is a souvenir", "To test the propellers", "So software can correct for the light that day", "To measure wind"], answer: 2, why: "The panel's known reflectance lets software correct the readings." },
      { objective: "O6", q: "Strong, gusty wind on the day of a mapping flight means:", options: ["Fly faster", "Fly higher", "Remove the propellers", "Do not fly; reschedule"], answer: 3, why: "Strong wind risks control and ruins images." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Pre-Test: What Do You Already Know?",
    from: [
      0,
      1,
      5,
      6,
      10,
      12,
      13,
      15,
      17,
      18
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part of the plan and check it again.",
    criteria: [
      {
        name: "Goal and sensor",
        objective: "O5",
        notYet: "No goal, or the sensor does not fit the goal.",
        meets: "A clear goal for the flight and a sensor that fits it, with a reason.",
        exceeds: "Explains why a cheaper or costlier sensor was not chosen."
      },
      {
        name: "Height, detail and overlap",
        objective: "O3",
        notYet: "Height, GSD or overlap is missing, or above the legal height limit.",
        meets: "Height and the GSD shown by the app, forward and side overlap, speed and number of batteries.",
        exceeds: "Shows how the detail fits the job, such as counting plants."
      },
      {
        name: "Light, wind and timing",
        objective: "O6",
        notYet: "No time of day or weather limits.",
        meets: "Time of day, light, wind limits and a plan to check every image before leaving.",
        exceeds: "Includes calibration panel steps or a reserve date."
      },
      {
        name: "Pre-flight checklist",
        objective: "O1",
        notYet: "The checklist misses aircraft, batteries, settings or papers.",
        meets: "Covers aircraft, batteries, controller and app, return-to-home settings and papers.",
        exceeds: "Adds the take-off spot and how the drone stays in sight."
      },
      {
        name: "Safe flying",
        objective: "O2",
        notYet: "No take-off spot, or flying beyond sight without approval.",
        meets: "A clear take-off spot, flying within sight and the legal height, and landing with battery to spare.",
        exceeds: "Names an observer and the steps if the wind rises."
      }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and score Meets or Exceeds on every rubric row of the flight plan",
      "Learners with approvals who report flying a planned mapping flight and getting a complete image set within 60 days (follow-up survey)",
      "Learners who go on to Course 3 of the drone track",
      "Drone service providers who report fewer reflights or crashes after training"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A phone or tablet with a drone mapping app, or screenshots of one",
      "A notebook or printed checklist",
      "A drone with its registration, licence and approvals, only for the optional practice flight",
      "About 60 minutes in total, in short sessions, plus time to write the flight plan"
    ],
    facilitatorNotes: [
      "Take the pre-test together, then plan one example mapping flight on a screen so everyone sees height, GSD and overlap change.",
      "Any practice flight must follow the country's rules, with a licensed pilot and the approvals in place, and spectators kept clear.",
      "Run the pre-flight checklist out loud on a real or pictured drone, and do not use swollen batteries.",
      "Use sample images if no drone is available, so learners can practise reading colour, multispectral and thermal images.",
      "Score the flight plan with the rubric and give feedback on one Not yet row at a time."
    ]
  }
};
