"use strict";

// Koach Learn course: Agriculture (Africa) -> "Drones for Agricultural Monitoring 1: Introduction, Regulations and Safety" (owner's drone outline, modules 1 and 2).
// First of the six-part monitoring track: what drones do on a farm, which kind fits which job, who regulates them, and how to plan a safe flight. The deep legal detail is in
// agri-drones-regulations; this course gives the farmer-level picture. Drone rules are law and change: every rule-related lesson sends the student to the official authority.

const KCAA_UAS = { name: "Kenya Civil Aviation Authority (KCAA): Unmanned Aircraft Systems", url: "https://www.kcaa.or.ke/safety-security-oversight/unmanned-aircraft-systems" };
const KCAA_PORTAL = { name: "KCAA drone (RPAS) online system", url: "https://rpas.kcaa.or.ke/" };
const NCAA_P21 = { name: "Nigeria Civil Aviation Authority (NCAA): Nig.CARs 2023 Part 21, Remotely Piloted Aircraft Systems", url: "https://www.ncaa.gov.ng/documents/regulations/nig-cars-2023/part-21-remotely-piloted-aircraft-system-rpas/" };
const FAO_ITU_DRONES = { name: "FAO and ITU: E-agriculture in Action: Drones for Agriculture (2018)", url: "https://www.itu.int/pub/D-STR-E_AGRICULT.02-2018" };
const FAO_WHO_AERIAL = { name: "FAO and WHO: Guidance for aerial application of pesticides (2024)", url: "https://www.who.int/publications/i/item/9789240076785" };

module.exports = {
  id: "agri-drones-intro",
  category: "Agriculture (Africa)",
  name: "Drones for Agricultural Monitoring 1: Introduction, Regulations and Safety",
  skills: "Explaining what farm drones do, Choosing a drone type for a job, Finding your aviation authority's rules, Assessing a flying site for risk, Running a safe pre-flight briefing",
  outcome: "decide whether a drone is the right tool for a farm problem, name the aviation authority and papers you need before flying, and write a simple drone use plan with a safety checklist for one farm.",
  about: [
    "This course is for farmers, extension officers, agribusiness owners and young people in Kenya, Nigeria and across Africa who want to start using drones to watch over crops, animals and land. You do not need to own a drone yet.",
    "In Chapter 1 you learn what a drone can and cannot do on a farm, the main kinds of drones, and how to judge when a drone is worth the cost compared with walking the field or using free satellite images. In Chapter 2 you learn who makes the drone rules in your country, what papers are usually needed, and how to check a flying site and brief your team so nobody gets hurt.",
    "Drone rules are law, and they change. This course never tells you that you may fly: it shows you how to find your country's official rules and follow them. It is Course 1 of a six-part track; the later courses teach flying, imaging, crop health, precision farming and running drone programs.",
    "Each lesson takes about five minutes: read, watch the slides, then do the \"Try it now\" task. A knowledge check closes each chapter and a 20-question quiz closes the course."
  ],
  finalTask: "Write a one-page drone use plan for one real or example farm (for example 3 acres of maize and beans in Nakuru, or 5 hectares of cassava in Oyo State): the problem the drone will help with, the drone type and why, the aviation authority and the papers you must check or get, the site hazards you found, and a pre-flight safety checklist of at least eight items.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Farmers, extension officers, agribusiness owners and young people in Kenya, Nigeria and across Africa who want to start using drones to watch over crops, animals and land. Most do not own a drone yet.",
    startingPoint: "Most have seen drones in videos or at demonstrations and walk their fields to check crops. Few know which drone and camera fit which farm job, when a drone is worth the cost, who makes the drone rules in their country, or how to check a site and brief a team before a flight.",
    gap: "People buy drones that do not fit the job, fly without the registration and licences the law requires, or put people and aircraft at risk. Knowing what a drone can and cannot do, the rules, and basic site safety lets learners decide wisely and start the drone track on a safe, legal footing.",
    constraints: [
      "Reading level: plain words and short sentences; every drone term is explained",
      "Devices: a phone with internet to find the aviation authority's drone page; no drone is needed",
      "Rules are law and change: the course never says a learner may fly; learners check their country's official rules",
      "Time: about 5 minute lessons that fit around farm work",
      "Safety and privacy: no flying in the course; do not film people or homes"
    ],
    prerequisites: "None. This is Course 1 of the six-part drone track."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Given a list of farm problems", action: "identify which ones a drone can help with and which it cannot", standard: "naming at least four jobs it can help with and two it cannot do" },
    { id: "O2", condition: "Given a farm job and the farm's size", action: "choose a drone type and camera that fit the job", standard: "with a reason for each choice" },
    { id: "O3", condition: "For a farm problem", action: "compare a drone, free satellite images and walking the field and choose the best tool", standard: "counting all the costs and the decision the images will change" },
    { id: "O4", condition: "For your country", action: "find the aviation authority and list the drone papers it may require", standard: "using only the authority's own website or office" },
    { id: "O5", condition: "Before any flight on a farm", action: "walk the site and mark the hazards and no-fly areas", standard: "and tell the farmer and neighbours when you will fly" },
    { id: "O6", condition: "Before and during a flight", action: "run a pre-flight briefing and safety checklist and state the first steps in an emergency", standard: "with at least eight checklist items" }
  ],
  chapters: [
    {
      name: "Chapter 1: Drones on the farm",
      lessons: [
        {
          objectives: ["O1"],
          title: "What a drone can do for a farm",
          minutes: 5,
          goal: "Name four farm jobs a drone can help with, and two it cannot do.",
          text: [
            "A drone is a small aircraft with no pilot on board. A person flies it from the ground with a remote controller or a phone, or sets it to fly a planned route by itself. Aviation authorities call it an unmanned aircraft system (UAS) or a remotely piloted aircraft system (RPAS).",
            "On a farm, most drones carry a camera. From above, you can see the whole field at once: gaps where seed did not come up, patches that are yellow or wilting, waterlogged corners, soil erosion, broken fences, and animals out of place. FAO and ITU list crop monitoring, early warning, pest monitoring, animal tracking and forest monitoring among the main farm uses.",
            "Some larger drones spray or spread seed and fertilizer. Spraying pesticides by drone is a special, higher-risk job that needs its own approvals from both the aviation authority and the pesticide regulator, so this course only monitors.",
            "A drone cannot tell you WHY a patch is yellow. It shows you WHERE to look. You still walk to the spot, look at the leaves, soil and insects, and decide what to do. It also cannot fly in heavy rain or strong wind, and its battery usually lasts well under an hour."
          ],
          words: [["Drone", "a small aircraft flown with no pilot on board."], ["UAS / RPAS", "the official names: unmanned aircraft system, remotely piloted aircraft system. The aircraft plus its controller and link."], ["Scouting", "walking a field to look for problems such as pests, disease or weeds."]],
          slides: [
            { title: "A drone is", bullets: ["A small aircraft with no pilot on board", "Flown from the ground, or on a planned route", "Officially called UAS or RPAS"] },
            { title: "What it helps with", bullets: ["Seeing the whole field at once", "Finding gaps, yellow or wilting patches", "Spotting waterlogging, erosion, broken fences", "Counting and finding animals"] },
            { title: "What it cannot do", bullets: ["Tell you WHY a patch is sick: you still walk there", "Fly in heavy rain or strong wind", "Stay up for hours on one battery"] },
            { title: "Spraying is different", bullets: ["Spray drones need extra approvals", "Aviation authority AND pesticide regulator", "This course covers monitoring only"] }
          ],
          sources: [FAO_ITU_DRONES, FAO_WHO_AERIAL],
          tryIt: "Think of one farm you know. Write down three problems on that farm that you could SEE from the air, and one problem a drone could not help with (for example, low market prices).",
          youCanNow: "explain what a farm drone does, name jobs it helps with, and say why you still walk the field.",
          quickCheck: [
            { objective: "O1", q: "What can a camera drone show a farmer?", options: ["Why a plant is sick", "The exact disease name", "Where gaps, yellow patches or waterlogged corners are", "How much the harvest will sell for"], answer: 2, why: "A drone shows where to look; you still walk to the spot to find out why." },
            { objective: "O1", q: "A farmer wants to fly a camera drone during heavy rain to check flooding. What do you tell them?", options: ["Fly higher in the rain", "Wait; drones cannot fly in heavy rain, so check after it stops", "Fly as long as the battery lasts", "Spray the field at the same time"], answer: 1, why: "A drone cannot fly in heavy rain or strong wind." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Choosing the right kind of drone",
          minutes: 5,
          goal: "Match a drone type and camera to a farm job.",
          text: [
            "There are three main kinds of farm drone. A multirotor has four or more propellers, like a small helicopter. It takes off from a small space, can hover, and is easy to learn, but it covers less ground per battery. It suits smallholder plots, greenhouses and spot checks.",
            "A fixed-wing drone looks like a small aeroplane. It glides, so it covers large areas such as a 200-hectare tea estate or a ranch, but it needs space to launch and land and is harder to fly. A hybrid (VTOL) drone takes off straight up like a multirotor and then flies like a plane.",
            "The camera matters as much as the drone. A normal colour (RGB) camera is enough to see gaps, weeds, waterlogging and animals. A multispectral camera measures light the eye cannot see and helps show plant stress earlier. A thermal camera shows heat: useful for water stress, irrigation leaks and finding animals.",
            "Start small. Many extension officers and young service providers begin with a small multirotor with an RGB camera, learn well, and add sensors later."
          ],
          steps: ["Write the job: what do you need to see, and how big is the area?", "Small area or need to hover: multirotor. Large area: fixed-wing or hybrid.", "Pick the camera: RGB for most jobs, multispectral for early plant stress, thermal for heat and water.", "Check the drone is allowed and can be registered in your country before you buy it."],
          words: [["Multirotor", "a drone with four or more propellers that can hover."], ["Fixed-wing", "a drone shaped like a small aeroplane that glides and covers large areas."], ["RGB camera", "a normal colour camera (red, green, blue)."], ["Multispectral camera", "a camera that also measures light the eye cannot see, such as near-infrared."]],
          slides: [
            { title: "Three kinds of farm drone", bullets: ["Multirotor: hovers, small space, smaller areas", "Fixed-wing: glides, large areas, needs launch space", "Hybrid (VTOL): takes off straight up, flies like a plane"] },
            { title: "Three kinds of camera", bullets: ["RGB: normal colour, enough for most jobs", "Multispectral: shows plant stress earlier", "Thermal: shows heat, water stress, animals"] },
            { title: "Match drone to job", bullets: ["2-acre maize plot: small multirotor, RGB", "200-hectare tea estate: fixed-wing or hybrid", "Ranch at dawn: thermal camera to find cattle"] },
            { title: "Start small", bullets: ["Learn on a small multirotor with RGB", "Add sensors when you need them", "Check registration rules before buying"] }
          ],
          tryIt: "For each of these jobs, choose a drone type and camera and write one reason: (a) checking germination on 2 acres of beans, (b) mapping 150 hectares of sugarcane, (c) finding a lost cow in bush at dawn.",
          youCanNow: "choose a drone type and camera that fit a farm job and the size of the area.",
          quickCheck: [
            { objective: "O2", q: "What is a multirotor drone?", options: ["A drone with four or more propellers that can hover", "A drone shaped like an aeroplane", "A satellite", "A drone that only sprays"], answer: 0, why: "A multirotor has four or more propellers, takes off from a small space and can hover." },
            { objective: "O2", q: "You want to find irrigation leaks on a horticulture farm. Which camera do you choose?", options: ["A normal phone camera on a pole", "No camera", "Only an RGB camera at night", "A thermal camera"], answer: 3, why: "A thermal camera shows heat, which is useful for water stress and irrigation leaks." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Is a drone worth it? Drone, satellite or walking",
          minutes: 5,
          goal: "Decide whether a drone, free satellite images or walking the field is the best tool for a farm problem.",
          text: [
            "A drone is not always the best tool. For a quarter-acre kitchen garden, walking the rows is faster and free. For a whole county, free satellite images (for example from the European Sentinel-2 satellites, viewable in free online tools) show broad patterns every few days, but each pixel is about 10 metres, too coarse to see single plants.",
            "Drones sit in the middle. They see down to a few centimetres, on the day you choose, even under thin cloud. That makes them good for medium and large farms, for cooperatives that share one drone across many members' fields, and for high-value crops such as tea, coffee, avocado and horticulture.",
            "Count the costs, not just the drone price: registration and licence fees, training, spare batteries and propellers, a phone or tablet, data, travel and your time. Then ask: what decision will the images change, and is that decision worth more than the cost?"
          ],
          steps: ["Write the decision you want to make (for example: where to replant, or which block to treat).", "Ask how big the area is and how small the thing you need to see is.", "Compare walking, satellite and drone for that size and detail.", "List every cost of the drone option and compare it with the value of a better decision."],
          words: [["Satellite image", "a picture of the earth taken from space; free ones show large areas but less detail."], ["Resolution", "how small a thing an image can show; drone images can show a few centimetres, free satellite images about 10 metres."]],
          slides: [
            { title: "Three ways to watch a farm", bullets: ["Walking: free, best for small plots, slow for big ones", "Satellite: free, big areas, about 10 m detail", "Drone: centimetre detail, on your chosen day"] },
            { title: "Where drones pay off", bullets: ["Medium and large farms", "Cooperatives sharing one drone", "High-value crops: tea, coffee, avocado, vegetables"] },
            { title: "Count every cost", bullets: ["Registration, licence and training", "Batteries, propellers, phone or tablet, data", "Travel and your time"] },
            { title: "The key question", bullets: ["What decision will the images change?", "Is that decision worth more than the cost?"] }
          ],
          tryIt: "Pick one farm problem from Lesson 1. Write which tool you would use (walking, satellite or drone), why, and list at least five costs if you chose the drone.",
          youCanNow: "decide whether a drone is worth it for a farm problem by comparing it with walking and satellite images.",
          quickCheck: [
            { objective: "O3", q: "Why are free satellite images too coarse to see single plants?", options: ["They are only in black and white", "They are taken once a year", "They cost too much", "Each pixel is about 10 metres"], answer: 3, why: "Sentinel-2 pixels are about 10 metres, so they show broad patterns, not single plants." },
            { objective: "O3", q: "A farmer with a quarter-acre vegetable garden asks if she should buy a drone. What do you suggest?", options: ["Walk the rows; it is faster and free for a plot that small", "Buy the biggest fixed-wing drone", "Use a thermal camera every day", "Hire a spray drone"], answer: 0, why: "For a very small plot, walking the rows is faster and costs nothing." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Drones on the farm",
        questions: [
          { objective: "O1", q: "A drone map shows a yellow patch in a maize field. What should you do next?", options: ["Spray the whole field at once", "Walk to the patch and look at the plants, soil and insects", "Ignore it; drone maps are always wrong", "Fly again until the patch disappears"], answer: 1, why: "A drone shows WHERE to look; you find out WHY on the ground." },
          { objective: "O2", q: "Which drone is best for mapping a 200-hectare tea estate?", options: ["A toy drone", "A small indoor drone", "A fixed-wing or hybrid drone", "No drone can do this"], answer: 2, why: "Fixed-wing and hybrid drones glide and cover large areas per battery." },
          { objective: "O2", q: "Which camera helps most to find cattle in bush at dawn?", options: ["Thermal camera", "Normal phone camera only", "A camera with no lens", "A spray nozzle"], answer: 0, why: "A thermal camera shows the heat of animals when light is low." },
          { objective: "O4", q: "Spraying pesticide with a drone:", options: ["Needs no extra paperwork", "Is the same as taking photos", "Needs its own approvals from the aviation authority and the pesticide regulator", "Is allowed anywhere if the field is yours"], answer: 2, why: "Spraying is a special, higher-risk operation with extra approvals." },
          { objective: "O3", q: "For a quarter-acre kitchen garden, the best tool is usually:", options: ["A fixed-wing drone", "A multispectral drone", "Satellite images", "Walking the rows"], answer: 3, why: "On a very small plot, walking is faster, cheaper and shows more." }
        ]
      }
    },
    {
      name: "Chapter 2: Rules and safety",
      lessons: [
        {
          objectives: ["O4"],
          title: "Who makes the drone rules in your country",
          minutes: 6,
          goal: "Find your country's aviation authority and list the drone papers it may require.",
          text: [
            "Every country controls its own airspace. In each country a civil aviation authority makes and enforces drone rules. In Kenya it is the Kenya Civil Aviation Authority (KCAA), under the Civil Aviation (Unmanned Aircraft Systems) Regulations, 2020. In Nigeria it is the Nigeria Civil Aviation Authority (NCAA), under Part 21 of the Nigeria Civil Aviation Regulations 2023. Other countries, such as Ghana, Rwanda, Uganda, Tanzania and South Africa, have their own authority and their own rules.",
            "The papers usually include: registering the drone; a permit to import it; a remote pilot licence for the person flying (especially for commercial or higher-risk work); an operator certificate for a business that flies for pay (KCAA calls it a Remote Air Operator Certificate, NCAA an RPAS Operator Certificate); and authorisation for some kinds of flights. Both KCAA and NCAA have online drone systems.",
            "Do not rely on a friend, a seller or social media for the rules. Read the authority's own drone page, or phone or email the authority. Fees and steps change, so check them on the day you apply.",
            "Never fly before you have the registration, licence and approvals your country requires for that flight. Flying without them can mean fines, a seized drone or worse, and it puts people and aircraft at risk."
          ],
          steps: ["Search for your country's civil aviation authority and open its official website.", "Find the page on drones, UAS or RPAS.", "Write down: registration, import permit, pilot licence, operator certificate, and flight authorisation: which apply to you?", "Note the fees and the online system, and the date you checked.", "If anything is unclear, contact the authority directly."],
          words: [["Civil aviation authority", "the government body that makes and enforces rules for everything that flies in a country."], ["Registration", "recording your drone with the authority so it has an official number."], ["Remote pilot licence (RPL)", "the official licence for a person who flies a drone."], ["Operator certificate", "the approval a business needs to fly drones for pay."]],
          slides: [
            { title: "Each country has an authority", bullets: ["Kenya: KCAA, UAS Regulations 2020", "Nigeria: NCAA, Nig.CARs 2023 Part 21", "Other countries: their own authority and rules"] },
            { title: "Papers you may need", bullets: ["Drone registration and import permit", "Remote pilot licence for the person flying", "Operator certificate to fly for pay", "Authorisation for some flights"] },
            { title: "Get rules from the source", bullets: ["Read the authority's own drone page", "Phone or email the authority", "Check fees and steps on the day you apply"] },
            { title: "The golden rule", bullets: ["No registration, licence or approval: no flight", "Fines, seized drones, danger to people and aircraft"] }
          ],
          sources: [KCAA_UAS, KCAA_PORTAL, NCAA_P21],
          tryIt: "Open your country's civil aviation authority website (KCAA, NCAA or your own). Find the drone page and write a list of the papers it requires, the online system's address, and today's date.",
          youCanNow: "name your aviation authority, find its drone rules, and list the papers you must have before flying.",
          quickCheck: [
            { objective: "O4", q: "What is a remote pilot licence for?", options: ["The drone itself", "The person who flies the drone", "The farm owner", "The drone shop"], answer: 1, why: "The remote pilot licence is for the person flying, especially for commercial or higher-risk work." },
            { objective: "O4", q: "A drone seller says you need no papers to fly for paying farmers. What do you do?", options: ["Trust the seller", "Ask on social media", "Check the aviation authority's own drone page or contact the authority", "Fly and apply later"], answer: 2, why: "Only the authority's own page or office gives the current rules and papers." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Checking a flying site for hazards",
          minutes: 5,
          goal: "Walk a farm and mark the hazards and no-fly areas before any flight.",
          text: [
            "Before any flight, look at the site on the ground and on a map. Many rules keep drones away from airports and airstrips, military sites, prisons, crowds and government areas. For example, Nigeria's Part 21 has distance rules around aerodromes and limits on flying over populated areas and close to people who are not part of the operation. Your country's rules give the exact distances; check them.",
            "On the farm itself, look for power lines, tall trees, telecom masts, buildings, roads, homesteads, schools, markets and grazing animals. Look for a clear, flat take-off and landing spot away from people and dust.",
            "Talk to people: the farmer, neighbours and anyone working nearby. Tell them when you will fly. Ask before flying over a neighbour's land or homestead. Respect privacy: do not film people or homes."
          ],
          steps: ["Open a map app and look at the area around the farm: airstrips, roads, towns, sensitive sites.", "Check your authority's rules for distances from airports and people.", "Walk the farm and mark power lines, trees, masts, buildings and animals.", "Choose a clear take-off and landing spot.", "Tell the farmer and neighbours when you will fly, and ask before crossing their land."],
          words: [["No-fly zone", "an area where drones are not allowed without special permission, such as near airports."], ["Hazard", "anything that could cause harm: power lines, trees, people, animals."], ["Aerodrome", "any airport, airstrip or helipad."]],
          slides: [
            { title: "Look beyond the farm", bullets: ["Airports, airstrips and helipads", "Military sites, prisons, crowds", "Check your country's exact distances"] },
            { title: "Look on the farm", bullets: ["Power lines, tall trees, masts", "Homesteads, roads, schools, markets", "Grazing animals"] },
            { title: "Pick a safe spot", bullets: ["Clear, flat take-off and landing area", "Away from people and dust"] },
            { title: "Talk to people", bullets: ["Tell the farmer and neighbours when you fly", "Ask before crossing their land", "Do not film people or homes"] }
          ],
          sources: [NCAA_P21, KCAA_UAS],
          tryIt: "Draw a simple sketch map of one farm. Mark the take-off spot, every hazard you can find, nearby homes, roads and any airstrip within a few kilometres you can find on a map app.",
          youCanNow: "check a site for hazards and no-fly areas and choose a safe take-off spot.",
          quickCheck: [
            { objective: "O5", q: "Which is a hazard to look for on the farm before flying?", options: ["A clear, flat field", "A healthy maize crop", "A telecom mast or tall trees", "A dry, sunny morning"], answer: 2, why: "Masts, trees, power lines and buildings are hazards to mark before a flight." },
            { objective: "O5", q: "Your planned flight passes over a neighbour's homestead. What do you do?", options: ["Ask the neighbour first, and do not film people or homes", "Fly fast so they do not notice", "Film the homestead for the report", "Fly at night"], answer: 0, why: "Ask before flying over a neighbour's land or homestead, and respect privacy." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Pre-flight briefing and what to do if things go wrong",
          minutes: 5,
          goal: "Run a pre-flight safety briefing and know the first steps in an emergency.",
          text: [
            "Professional drone teams start every flight with a short briefing. Everyone hears the plan: where the drone will fly, how high, for how long, who is the pilot, who is the observer who watches the sky and the drone, and where the landing spot is.",
            "Check the weather: no flying in rain, thunderstorms, strong or gusty wind, dust storms or poor light, unless your drone and your approvals allow it. Check the drone: battery charged, propellers undamaged, camera clean, controller connected.",
            "Agree what you will do if something goes wrong: if the battery is low, land; if a person or animal walks under the drone, move away or land; if a manned aircraft or helicopter appears, descend and land at once. If the drone is lost or crashes, make the area safe, and report serious incidents to your authority as its rules require."
          ],
          steps: ["Brief the team: area, height, time, pilot, observer, landing spot.", "Check the weather: rain, wind, dust, light.", "Check the drone: battery, propellers, camera, controller link.", "Agree the emergency plan: low battery, people below, aircraft nearby, lost drone.", "After the flight, write what happened in a log book."],
          words: [["Observer", "a team member who watches the drone and the sky and warns the pilot."], ["Briefing", "a short talk before a flight so everyone knows the plan."], ["Log book", "a record of every flight: date, place, time, pilot, problems."]],
          slides: [
            { title: "Brief the team", bullets: ["Where, how high, how long", "Who is pilot, who is observer", "Where you will land"] },
            { title: "Check weather and drone", bullets: ["No rain, storms, strong wind or dust", "Battery, propellers, camera, controller"] },
            { title: "If things go wrong", bullets: ["Low battery: land", "People or animals below: move away or land", "Aircraft nearby: descend and land at once"] },
            { title: "After the flight", bullets: ["Write it in the log book", "Report serious incidents as your rules require"] }
          ],
          tryIt: "Final task: write your one-page drone use plan for one farm: the problem, the drone type and camera, the authority and papers, the hazards from your sketch map, and a pre-flight checklist of at least eight items including the emergency plan.",
          youCanNow: "brief a team before a flight, check the weather and drone, and follow a simple emergency plan.",
          quickCheck: [
            { objective: "O6", q: "What happens in a pre-flight briefing?", options: ["The pilot charges the client", "The team writes the final report", "The drone is sold", "Everyone hears where, how high and how long the drone will fly, and who does what"], answer: 3, why: "The briefing shares the plan, roles and landing spot with everyone." },
            { objective: "O6", q: "A helicopter appears while your drone is flying. What do you do?", options: ["Climb higher to see it", "Descend and land at once", "Keep filming", "Fly towards it"], answer: 1, why: "If a manned aircraft or helicopter appears, the drone descends and lands at once." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Rules and safety",
        questions: [
          { objective: "O4", q: "Who makes and enforces drone rules in Kenya?", options: ["The Kenya Civil Aviation Authority (KCAA)", "The county agriculture office", "The drone seller", "The local chief"], answer: 0, why: "KCAA is Kenya's civil aviation authority and regulates drones." },
          { objective: "O4", q: "A friend says you can fly a new drone on a client's farm without any papers. What do you do?", options: ["Fly; your friend has done it before", "Check the official aviation authority rules and get what is required before flying", "Fly very early so nobody sees", "Fly only over the client's land"], answer: 1, why: "Only the official authority's rules count; no papers means no flight." },
          { objective: "O5", q: "Which is a hazard to mark before flying?", options: ["A clear sky", "A dry, flat take-off spot", "Power lines across the field", "A charged battery"], answer: 2, why: "Power lines can catch or damage the drone and are a real danger." },
          { objective: "O6", q: "During a flight a small aeroplane appears nearby. What should the pilot do?", options: ["Climb higher to get a better view", "Keep filming", "Fly towards it", "Descend and land at once"], answer: 3, why: "Manned aircraft always come first; get the drone down and out of the way." },
          { objective: "O6", q: "What is the observer's job?", options: ["Watch the drone and the sky and warn the pilot", "Fly the drone", "Charge the batteries only", "Film the neighbours"], answer: 0, why: "The observer keeps watch so the pilot can concentrate on flying safely." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Drones for Agricultural Monitoring 1: Introduction, Regulations and Safety",
    questions: [
      { objective: "O1", q: "What is a drone?", options: ["A small aircraft with no pilot on board", "A tractor", "A weather satellite", "A phone app"], answer: 0, why: "A drone is flown from the ground or on a planned route, with no one aboard." },
      { objective: "O1", q: "Which farm job can a camera drone help with?", options: ["Raising market prices", "Finding gaps where seed did not come up", "Fixing a broken pump", "Signing a contract"], answer: 1, why: "From above you can see gaps in a crop quickly." },
      { objective: "O1", q: "A drone shows a wilting patch of cassava. The drone tells you:", options: ["Exactly which disease it is", "Which pesticide to buy", "Where to go and look", "Nothing useful"], answer: 2, why: "It shows where; you find why on the ground." },
      { objective: "O2", q: "Which drone can hover and take off from a small space?", options: ["Fixed-wing", "A paper glider", "A satellite", "Multirotor"], answer: 3, why: "Multirotors have several propellers and can hover." },
      { objective: "O2", q: "A multispectral camera is useful because it:", options: ["Measures light the eye cannot see and shows plant stress earlier", "Only takes black-and-white photos", "Makes the drone fly faster", "Sprays fertilizer"], answer: 0, why: "It measures near-infrared and other bands linked to plant health." },
      { objective: "O2", q: "A thermal camera shows:", options: ["Only colours", "Heat", "Soil nutrients directly", "Prices"], answer: 1, why: "Thermal cameras measure heat, useful for water stress and animals." },
      { objective: "O3", q: "A cooperative of 300 small farms wants to monitor members' maize. A good option is:", options: ["Each farmer buys a fixed-wing drone", "Never use drones", "One shared drone service for all members", "Only phone calls"], answer: 2, why: "Sharing one drone across many fields spreads the cost." },
      { objective: "O3", q: "Free satellite images are less useful for single plants because:", options: ["They are always cloudy", "They are in black and white", "They cost a lot", "Each pixel is about 10 metres"], answer: 3, why: "Coarse pixels show patterns over large areas, not single plants." },
      { objective: "O3", q: "Which is a cost of using a drone besides buying it?", options: ["Spare batteries and propellers", "Free rain", "Sunlight", "Nothing else"], answer: 0, why: "Batteries, propellers, fees, training, data and travel all cost money." },
      { objective: "O3", q: "Before buying a drone, the key question is:", options: ["What colour is it?", "What decision will the images change, and is it worth the cost?", "Is it the newest model?", "Do my friends have one?"], answer: 1, why: "A drone pays only if it improves a decision by more than it costs." },
      { objective: "O4", q: "Nigeria's drone rules are found in:", options: ["A seller's brochure", "A social media group", "Nig.CARs 2023 Part 21 from the NCAA", "The farm's receipt book"], answer: 2, why: "NCAA's Part 21 covers registration, certification and operations of RPAS." },
      { objective: "O4", q: "Ghana, Rwanda and Uganda drone rules are:", options: ["Exactly the same as Kenya's", "Not needed", "Set by the United Nations only", "Set by each country's own aviation authority"], answer: 3, why: "Every country controls its own airspace and has its own rules." },
      { objective: "O4", q: "A business that flies drones for paying farmers usually needs:", options: ["An operator certificate from the aviation authority", "Nothing extra", "Only a phone", "Only a business card"], answer: 0, why: "KCAA and NCAA both have operator certificates for commercial drone work." },
      { objective: "O4", q: "Where should you check current drone fees?", options: ["An old newspaper", "The aviation authority's official page on the day you apply", "A rumour", "The drone box"], answer: 1, why: "Fees change; the official page is the reliable source." },
      { objective: "O4", q: "Spraying pesticide by drone needs approval from:", options: ["Only the farmer", "Only the seller", "The aviation authority and the pesticide regulator", "Nobody"], answer: 2, why: "Spraying is a special operation covered by aviation and pesticide rules." },
      { objective: "O5", q: "Which place usually has drone restrictions nearby?", options: ["A maize field far from towns", "A river bank", "A bean plot", "An airstrip"], answer: 3, why: "Rules keep drones away from airports and airstrips." },
      { objective: "O5", q: "Before flying over a neighbour's homestead you should:", options: ["Ask them first", "Fly low to surprise them", "Film them", "Fly at night"], answer: 0, why: "Respect people's land and privacy; ask first." },
      { objective: "O6", q: "Which weather means do not fly a small drone?", options: ["Calm and clear", "Strong, gusty wind or a thunderstorm", "Light cloud with no wind", "Morning sun"], answer: 1, why: "Wind, storms and rain can make you lose control." },
      { objective: "O6", q: "The battery warning says low during a flight. You should:", options: ["Fly one more line", "Climb higher", "Land", "Switch off the controller"], answer: 2, why: "Low battery means bring the drone down safely now." },
      { objective: "O6", q: "After every flight you should:", options: ["Delete all photos", "Sell the drone", "Forget about it", "Write the flight in a log book"], answer: 3, why: "A log book records each flight and any problems." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Pre-Test: What Do You Already Know?",
    from: [
      0,
      2,
      3,
      5,
      6,
      9,
      10,
      12,
      15,
      17
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part of the plan and check it again.",
    criteria: [
      {
        name: "Farm problem",
        objective: "O1",
        notYet: "The problem is vague, or is something a drone cannot do.",
        meets: "Names a clear farm problem a drone can help with, and what will still be checked on foot.",
        exceeds: "Says what decision the images will change."
      },
      {
        name: "Drone and camera",
        objective: "O2",
        notYet: "No drone type or camera, or no reason.",
        meets: "A drone type and camera that fit the job and the farm's size, with a reason.",
        exceeds: "Compares it with a drone, satellite images or walking and explains the cost."
      },
      {
        name: "Authority and papers",
        objective: "O4",
        notYet: "The authority or the papers are missing.",
        meets: "Names the country's aviation authority and the papers to check or get, from its own website.",
        exceeds: "Includes the link and the date the rules were checked."
      },
      {
        name: "Site hazards",
        objective: "O5",
        notYet: "No hazards listed.",
        meets: "Lists the hazards and no-fly areas found, and who will be told about the flight.",
        exceeds: "Includes a simple sketch map with the take-off spot."
      },
      {
        name: "Safety checklist",
        objective: "O6",
        notYet: "Fewer than eight items, or no emergency steps.",
        meets: "At least eight pre-flight items covering weather, drone, team and site, with emergency steps.",
        exceeds: "Names the pilot and observer roles and how incidents are reported."
      }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and score Meets or Exceeds on every rubric row of the drone use plan",
      "Learners who look up their aviation authority's drone rules within 30 days (follow-up survey)",
      "Learners who go on to Course 2 of the drone track",
      "Partner programs that report drone users registering and getting licences before flying"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A phone with internet to open the aviation authority's drone page",
      "A notebook and pen for the drone use plan and checklist",
      "A real or example farm to walk for the site check",
      "About 60 minutes in total, in short sessions, plus time to write the plan"
    ],
    facilitatorNotes: [
      "Take the pre-test together, then open the authority's drone page live with the group.",
      "Do not fly a drone as part of this course unless the pilot, drone and flight have every approval the country requires.",
      "Walk a real farm together to practise spotting hazards, and remind learners not to film people or homes.",
      "Check the authority's site for rule changes before each course run.",
      "Score the drone use plan with the rubric and give feedback on one Not yet row at a time."
    ]
  }
};
