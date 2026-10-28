"use strict";

// Koach Learn course: Agriculture (Africa) -> "Agricultural Drones: Mission Planning and Flight Operations".
// Part of the "Agricultural Drones in Africa" set (with agri-drones-regulations, agri-drones-uas-technology, agri-drones-data-precision): running a professional
// agricultural drone job from client brief to delivered data: scope, site survey, airspace and permissions, risk assessment, flight plan, crew, execution, contingencies,
// post-flight checks and incident reporting. Basic height/overlap/sensor choice is taught in agri-drones-flight-imaging; this course builds the professional mission pack.

const KCAA_UAS = { name: "Kenya Civil Aviation Authority (KCAA): Unmanned Aircraft Systems", url: "https://www.kcaa.or.ke/safety-security-oversight/unmanned-aircraft-systems" };
const KCAA_PORTAL = { name: "KCAA drone (RPAS) online system", url: "https://rpas.kcaa.or.ke/" };
const NCAA_P21 = { name: "Nigeria Civil Aviation Authority (NCAA): Nig.CARs 2023 Part 21, Remotely Piloted Aircraft Systems", url: "https://www.ncaa.gov.ng/documents/regulations/nig-cars-2023/part-21-remotely-piloted-aircraft-system-rpas/" };
const KMD = { name: "Kenya Meteorological Department", url: "https://meteo.go.ke" };
const NIMET = { name: "Nigerian Meteorological Agency (NiMet)", url: "https://nimet.gov.ng" };

module.exports = {
  id: "agri-drones-mission-planning",
  category: "Agriculture (Africa)",
  name: "Agricultural Drones: Mission Planning and Flight Operations",
  skills: "Turning a client request into a mission scope, Surveying a site and checking airspace and permissions, Writing a risk assessment, Building a flight plan with contingencies, Leading a crew briefing and flying the mission, Running post-flight checks and incident reporting",
  outcome: "plan and run a professional agricultural drone mission from the client's request to delivered data, with a complete mission pack: scope, site survey, airspace and permission checks, risk assessment, flight plan, crew briefing, contingencies and post-flight records.",
  about: [
    "This course is for remote pilots, drone service businesses, estate and agribusiness drone teams, and extension programs in Kenya, Nigeria and across Africa that fly drone missions for others. It assumes you already know the basics of flying and mapping and your country's drone rules (see the monitoring track and the regulations course).",
    "Chapter 1 is planning: agreeing what the client really needs, surveying the site, checking airspace and permissions, assessing risk, and building a flight plan with height, overlap, battery and timing worked out. Chapter 2 is operations: crew roles and the briefing, flying and monitoring the mission, handling things that go wrong, and closing the job with data checks, logs and any incident reports.",
    "The examples are real kinds of jobs: mapping 40 hectares of avocado for an exporter in Murang'a, a stand count on 25 cassava outgrower farms in Oyo State, inspecting irrigation on a horticulture farm near Naivasha. Never fly a mission without the registration, licences, operator certificate and authorisations your country requires. A knowledge check closes each chapter and a 20-question quiz closes the course."
  ],
  finalTask: "Build a complete mission pack for one agricultural drone job (real or example, such as mapping 40 hectares of avocado for an exporter): the mission scope agreed with the client, a site survey with hazards and a sketch map, airspace and permission checks with sources, a risk assessment table, the flight plan (area, height, image detail, overlap, speed, batteries, timing, weather limits), crew roles and briefing notes, contingency plans, and the post-flight checklist and log you will complete.",
  chapters: [
    {
      name: "Chapter 1: Planning the mission",
      lessons: [
        {
          title: "From client request to mission scope",
          minutes: 5,
          goal: "Turn a client's request into a clear written mission scope.",
          text: [
            "Clients often ask for \"a drone flight\" when they need an answer: Which blocks have poor stand? Where is the irrigation leaking? How many trees do we have? Start by asking what decision they want to make and what they will do with the results.",
            "Then agree the scope in writing: the area (with a map or boundary file), the question and the deliverables (for example an orthomosaic, an NDVI map, a tree count, a one-page report), the level of detail needed, the date window, access arrangements, who on the farm is the contact, the price and payment method (such as mobile money on delivery), and how data will be shared and stored.",
            "Say clearly what the drone cannot do. A map can show where trees are stressed; it cannot by itself say which disease it is. A clear scope protects you and the client from disappointment and disputes."
          ],
          steps: ["Ask what decision the client wants to make.", "Agree the area and get a boundary or sketch.", "Agree deliverables, detail, dates and contacts.", "Agree price, payment and data sharing.", "State the limits of what the drone can show.", "Write it down and both confirm."],
          words: [["Mission scope", "the written agreement of what a drone job will cover and deliver."], ["Deliverable", "a product the client receives, such as a map or report."]],
          slides: [
            { title: "Find the real question", bullets: ["What decision will the client make?", "What will they do with the results?"] },
            { title: "Agree in writing", bullets: ["Area and boundary", "Deliverables and detail", "Dates, access, farm contact", "Price, payment, data sharing"] },
            { title: "State the limits", bullets: ["Maps show where, not always why", "Clear scope prevents disputes"] }
          ],
          tryIt: "An avocado exporter says: \"Fly our 40 hectares next week.\" Write five questions you would ask, then write a one-paragraph mission scope with area, deliverables, dates, contact, price placeholder and limits.",
          youCanNow: "turn a vague client request into a clear written mission scope."
        },
        {
          title: "Site survey, airspace and permissions",
          minutes: 6,
          goal: "Survey a site and confirm airspace limits and every permission before the flight.",
          text: [
            "Do a desk survey first: look at the area on a map app and satellite view for airstrips, airports, roads, towns, power lines, masts, rivers, protected areas and security sites. Then check your authority's rules and maps for restricted areas and aerodrome distances, and whether the job needs a specific operation authorisation. Allow time for any approval to come through.",
            "Then survey on the ground if you can, or ask the farm contact for photos: take-off and landing spots, obstacles and their heights, people and animals, homesteads, access roads, mobile network coverage, and where the crew can shelter from sun and rain.",
            "Confirm permissions: the landowner or manager in writing, neighbours if you will cross their land, any community leaders where that is expected, and the aviation authority as required. Record everything in the mission pack with dates and sources."
          ],
          steps: ["Desk survey: map and satellite view of the area.", "Check aviation rules: restricted areas, aerodrome distances, authorisations.", "Ground survey or farm photos: take-off spots, obstacles, people, network.", "Get landowner and neighbour permissions in writing.", "Record all checks with dates and sources."],
          words: [["Desk survey", "checking a site using maps and documents before going there."], ["Restricted area", "airspace where flying is limited or needs special permission."], ["Operation authorisation", "permission from the aviation authority for a particular kind of operation."]],
          slides: [
            { title: "Desk survey", bullets: ["Map and satellite view", "Airstrips, roads, towns, power lines, masts", "Protected and security areas"] },
            { title: "Airspace and approvals", bullets: ["Restricted areas and aerodrome distances", "Specific operation authorisation needed?", "Allow time for approval"] },
            { title: "Ground survey", bullets: ["Take-off spots, obstacles, heights", "People, animals, homesteads, network", "Shelter for the crew"] },
            { title: "Permissions in writing", bullets: ["Landowner or manager", "Neighbours, community leaders", "Aviation authority as required"] }
          ],
          sources: [KCAA_UAS, KCAA_PORTAL, NCAA_P21],
          tryIt: "For a farm you can find on a map app, do a desk survey: list every airstrip, road, power line, settlement and protected area within a few kilometres, and write which aviation rules you must check and which permissions you need.",
          youCanNow: "survey a site, check airspace limits and secure every permission before a mission."
        },
        {
          title: "Risk assessment and the flight plan",
          minutes: 6,
          goal: "Write a risk assessment and a complete flight plan with contingencies.",
          text: [
            "A risk assessment lists what could go wrong, how likely and how serious it is, and what you will do to reduce it. For example: hazard, a power line along the north boundary; risk, collision; control, plan lines 30 m away and set return-to-home above it. Other common hazards: people walking into the area, livestock, birds of prey, strong afternoon winds, heat, lost link behind hills, and an airstrip nearby.",
            "The flight plan sets: the area split into flights that each fit one battery; height and the image detail it gives (within the legal height limit); overlap; speed; the number of batteries, with spares; take-off and landing points; the time window (for example 10:00 to 14:00 for even light); and weather limits (maximum wind, no rain, visibility). Check the forecast from your national weather service the day before and the morning of the job.",
            "Contingencies say what you will do if things change: wind above your limit, so pause; rain, so pack up and come back on the reserve date; a person enters the area, so hold or land; lost link, so return-to-home is set; a battery fault, so land at the alternate landing point."
          ],
          steps: ["List hazards; rate likelihood and severity; write a control for each.", "Split the area into one-battery flights.", "Set height, detail, overlap, speed and batteries with spares.", "Set time window and weather limits; check the forecast.", "Write contingencies and alternate landing points."],
          words: [["Risk assessment", "a written check of what could go wrong and how you will reduce the risk."], ["Control", "an action that reduces a risk."], ["Contingency", "a pre-planned action if something changes or goes wrong."]],
          slides: [
            { title: "Risk assessment", bullets: ["Hazard, likelihood, severity, control", "Power lines, people, livestock, birds", "Wind, heat, lost link, airstrips"] },
            { title: "The flight plan", bullets: ["One-battery flights, spares", "Height, detail, overlap, speed", "Take-off, landing, time window"] },
            { title: "Weather", bullets: ["Set limits: wind, rain, visibility", "Check the national forecast day before and morning of"] },
            { title: "Contingencies", bullets: ["Wind: pause. Rain: reserve date", "Person enters: hold or land", "Lost link: RTH set. Fault: alternate landing"] }
          ],
          sources: [KMD, NIMET, NCAA_P21],
          tryIt: "Write a risk assessment table with at least six hazards for the 40-hectare avocado job, then write its flight plan and five contingencies.",
          youCanNow: "write a risk assessment and a complete flight plan with contingencies."
        }
      ],
      check: {
        title: "Knowledge Check 1: Planning the mission",
        questions: [
          { q: "A client asks for \"a drone flight\". Your first question should be:", options: ["What colour drone do you want?", "What decision do you want to make with the results?", "Can I fly today?", "Do you have a drone?"], answer: 1, why: "The decision defines what data and deliverables are needed." },
          { q: "Which belongs in a written mission scope?", options: ["The pilot's favourite music", "Only the price", "Nothing; agree by phone", "Area, deliverables, dates, contact, price and data sharing"], answer: 3, why: "A clear written scope prevents disputes." },
          { q: "During the desk survey you find an airstrip 3 km away. You should:", options: ["Check aerodrome distance rules and any authorisation needed", "Ignore it", "Fly only in the morning", "Fly higher"], answer: 0, why: "Many rules limit drones near aerodromes." },
          { q: "In a risk assessment, a control is:", options: ["The remote controller", "An action that reduces a risk", "A client complaint", "A battery"], answer: 1, why: "Controls lower likelihood or severity." },
          { q: "The forecast shows strong afternoon winds. A sensible plan is:", options: ["Fly in the afternoon anyway", "Cancel the job forever", "Set the time window for calmer hours and keep a reserve date", "Remove the propellers"], answer: 2, why: "Plan around weather limits with a reserve date." }
        ]
      }
    },
    {
      name: "Chapter 2: Flying the mission",
      lessons: [
        {
          title: "Crew roles and the briefing",
          minutes: 5,
          goal: "Assign crew roles and lead a clear pre-mission briefing.",
          text: [
            "Even small missions go better with clear roles. The remote pilot in command is responsible for the safety of the flight and has the final say. The observer watches the drone and the sky and warns of aircraft, birds, people and animals. A ground or payload operator may manage batteries, the camera, the landing area and the client.",
            "Before the first flight, the pilot in command briefs everyone, including the farm contact: the area and flight lines, height, time on each battery, take-off and landing points, hazards and controls from the risk assessment, weather limits, the contingency plans, the words you will use (for example \"hold\", \"land now\"), and who can call a stop. Anyone can call stop for safety.",
            "Check that each crew member has water, sun protection and safety gear such as high-visibility vests, and that the take-off area is marked and kept clear of onlookers."
          ],
          steps: ["Assign pilot in command, observer and ground or payload operator.", "Brief: area, height, batteries, take-off and landing, hazards, weather limits.", "Agree contingencies and standard calls (hold, land now).", "Confirm anyone can call stop.", "Mark the take-off area; check water, sun protection and vests."],
          words: [["Pilot in command", "the remote pilot responsible for the safety of the flight, with the final say."], ["Standard calls", "short, agreed words the crew uses so everyone understands at once."]],
          slides: [
            { title: "Crew roles", bullets: ["Pilot in command: final say on safety", "Observer: drone, sky, people, animals", "Ground or payload operator: batteries, camera, client"] },
            { title: "The briefing", bullets: ["Area, height, batteries, take-off, landing", "Hazards, weather limits, contingencies", "Standard calls: hold, land now"] },
            { title: "Look after the crew", bullets: ["Anyone can call stop", "Water, sun protection, vests", "Take-off area marked, onlookers clear"] }
          ],
          tryIt: "Write a one-page briefing script for the avocado mission that a pilot in command could read out in three minutes, covering every item from this lesson.",
          youCanNow: "assign crew roles and lead a clear pre-mission briefing."
        },
        {
          title: "Executing and monitoring the mission",
          minutes: 5,
          goal: "Fly a planned mission, monitor it and make go or no-go decisions.",
          text: [
            "Before each flight, run the pre-flight checklist and confirm the conditions are within limits. Upload or check the planned route, confirm the home point and return-to-home height, and confirm the observer is in position.",
            "During the flight, the pilot watches the drone and the telemetry (battery, signal, satellites, wind warnings, height, progress along the lines). The observer watches the sky and the ground. Be ready to take manual control at any moment. Swap batteries between flights following your battery procedure, and mark which lines are done.",
            "Make go or no-go decisions all day. If the wind rises above your limit, a person walks into the area, a storm builds, or a warning repeats, pause or land. Finishing tomorrow is better than an accident today. Keep the client informed of progress and any changes."
          ],
          steps: ["Pre-flight checklist; conditions within limits?", "Check route, home point and return-to-home height.", "Fly; pilot watches drone and telemetry, observer watches sky and ground.", "Swap batteries safely; mark completed lines.", "Pause or land if limits are exceeded; tell the client."],
          words: [["Telemetry", "live data the drone sends to the controller: battery, height, position, signal, warnings."], ["Go / no-go", "the decision whether it is safe to fly or continue."]],
          slides: [
            { title: "Before each flight", bullets: ["Checklist and limits", "Route, home point, RTH height", "Observer in position"] },
            { title: "During the flight", bullets: ["Pilot: drone and telemetry", "Observer: sky and ground", "Ready for manual control"] },
            { title: "Go or no-go, all day", bullets: ["Wind, people, storms, repeated warnings", "Pause or land", "Tomorrow beats an accident"] }
          ],
          sources: [KCAA_UAS, NCAA_P21],
          tryIt: "Write a go / no-go card for your mission: five conditions that mean go, and five that mean stop or land, in short words a crew could read in the field.",
          youCanNow: "fly and monitor a planned mission and make sound go or no-go decisions."
        },
        {
          title: "Closing the mission: data checks, logs and incidents",
          minutes: 5,
          goal: "Check data, complete logs and handle incident reports before leaving the site.",
          text: [
            "Before you leave the site, check the data: count the images per flight, look at a sample for blur and exposure, check for gaps in coverage, and if possible run a quick low-resolution stitch on a laptop. Refly any gaps while the crew and conditions are there. Back up the data to a second device.",
            "Complete the records: flight logs for each flight (time, battery, pilot, problems), battery and maintenance notes, and the mission pack's actual conditions. Thank the farm contact and confirm when they will receive the deliverables.",
            "If anything went wrong (a crash, a near miss with an aircraft, injury, damage to property, a fly-away), make the area safe first, then record what happened and report it to your aviation authority as its rules require, and to your insurer. Review the incident with the crew and update your procedures so it does not happen again."
          ],
          steps: ["Count images, sample for blur, check coverage gaps.", "Refly gaps; back up data to a second device.", "Complete flight, battery and maintenance logs.", "Confirm delivery date with the client.", "For any incident: make safe, record, report as required, review and update procedures."],
          words: [["Near miss", "an event where an accident almost happened."], ["Coverage gap", "an area with missing or poor images."]],
          slides: [
            { title: "Check data on site", bullets: ["Count images, sample for blur", "Look for coverage gaps; quick stitch", "Refly gaps, back up to a second device"] },
            { title: "Complete the records", bullets: ["Flight, battery and maintenance logs", "Actual conditions in the mission pack", "Confirm delivery date"] },
            { title: "If something went wrong", bullets: ["Make the area safe", "Record and report as required; tell insurer", "Review and update procedures"] }
          ],
          sources: [KCAA_UAS, NCAA_P21],
          tryIt: "Final task: assemble your complete mission pack: scope, site survey and sketch map, airspace and permission checks with sources, risk assessment, flight plan, crew roles and briefing, contingencies, go / no-go card, and the post-flight checklist and log template.",
          youCanNow: "close a mission professionally with data checks, complete logs and correct incident handling."
        }
      ],
      check: {
        title: "Knowledge Check 2: Flying the mission",
        questions: [
          { q: "Who has the final say on the safety of a flight?", options: ["The client", "The observer", "The pilot in command", "The drone maker"], answer: 2, why: "The pilot in command is responsible for flight safety." },
          { q: "Who can call stop for safety during a mission?", options: ["Anyone on the crew", "Only the client", "Only the observer", "Nobody once the drone is flying"], answer: 0, why: "Anyone who sees a danger can call stop." },
          { q: "Telemetry shows the wind is now above your limit. You should:", options: ["Fly faster to finish", "Turn off warnings", "Climb higher", "Pause or land"], answer: 3, why: "Exceeding limits means stop; finish later." },
          { q: "Before leaving the site you should:", options: ["Delete photos to free space", "Check images for blur and gaps, and refly gaps", "Leave without telling the client", "Format the memory card"], answer: 1, why: "Fixing gaps on site saves a second trip." },
          { q: "Your drone has a near miss with a small aircraft. After making things safe you should:", options: ["Record it and report it as your authority requires", "Keep it secret", "Fly away fast", "Blame the aircraft"], answer: 0, why: "Reporting helps safety and is often required by the rules." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Agricultural Drones: Mission Planning and Flight Operations",
    questions: [
      { q: "A mission scope is:", options: ["The drone's camera", "The written agreement of what a job covers and delivers", "A weather report", "A flight log"], answer: 1, why: "It sets area, deliverables, dates, price and limits." },
      { q: "Which is a deliverable?", options: ["The pilot's licence", "A battery", "An NDVI map and one-page report", "A propeller"], answer: 2, why: "Deliverables are what the client receives." },
      { q: "Why state the limits of a drone map in the scope?", options: ["To avoid disappointment and disputes", "To charge more", "To confuse the client", "It is not needed"], answer: 0, why: "Clear limits set honest expectations." },
      { q: "A desk survey uses:", options: ["Only a shovel", "The drone in flight", "A tractor", "Maps and satellite views before going to the site"], answer: 3, why: "Desk surveys find hazards and airspace issues early." },
      { q: "Which should you confirm in writing before flying a client's farm?", options: ["The pilot's shoe size", "The landowner or manager's permission", "The crop price", "Nothing"], answer: 1, why: "Written permission protects everyone." },
      { q: "Why check mobile network coverage on the ground survey?", options: ["For music", "For social media", "Apps, maps and communication may need it", "It is not useful"], answer: 2, why: "No network can affect maps, coordination and emergencies." },
      { q: "A risk assessment lists:", options: ["Hazards, likelihood, severity and controls", "Only costs", "Client names", "Crop varieties"], answer: 0, why: "It shows what could go wrong and how to reduce it." },
      { q: "A power line runs along the field edge. A good control is:", options: ["Fly closer for better photos", "Ignore it", "Fly at night", "Keep flight lines well away and set RTH height above it"], answer: 3, why: "Distance and safe RTH height reduce collision risk." },
      { q: "Why split a large area into one-battery flights?", options: ["To use fewer images", "So each flight finishes safely on one battery", "To confuse the software", "Because overlap requires it"], answer: 1, why: "Planning by battery prevents low-battery emergencies." },
      { q: "Where should you get the weather forecast?", options: ["A guess", "A friend's opinion", "Your national weather service, the day before and the morning of", "Last year's diary"], answer: 2, why: "Official forecasts are the most reliable." },
      { q: "A contingency is:", options: ["A pre-planned action if something changes or goes wrong", "A camera setting", "A payment", "A drone part"], answer: 0, why: "Contingencies let the crew act fast and safely." },
      { q: "The observer's main job is to:", options: ["Process data", "Pay the crew", "Fly the drone", "Watch the drone, sky and ground and warn the pilot"], answer: 3, why: "The observer keeps watch for hazards." },
      { q: "Standard calls like \"hold\" and \"land now\" help because:", options: ["They sound professional", "Everyone understands them at once", "They are required by the drone", "They save battery"], answer: 1, why: "Short, agreed words reduce confusion in a hurry." },
      { q: "Telemetry includes:", options: ["Crop prices", "Farmers' names", "Battery, height, position, signal and warnings", "Weather next month"], answer: 2, why: "Telemetry is live flight data." },
      { q: "A person walks into the flight area. The crew should:", options: ["Hold or land the drone", "Fly lower over them", "Keep flying the lines", "Ask them to run"], answer: 0, why: "People in the area raise the risk; pause or land." },
      { q: "\"Finishing tomorrow beats an accident today\" means:", options: ["Always fly late", "Never finish jobs", "Charge extra for delays", "Stop when conditions are unsafe, even if the job is not done"], answer: 3, why: "Safety comes before schedule." },
      { q: "Why back up data to a second device before leaving?", options: ["To fill storage", "So data survives if one device fails or is lost", "Because the drone requires it", "To share with strangers"], answer: 1, why: "A second copy protects the client's data and your work." },
      { q: "Flight logs after a mission record:", options: ["Only the client's name", "Only the price", "Time, battery, pilot and problems for each flight", "Nothing"], answer: 2, why: "Logs support safety, maintenance and compliance." },
      { q: "After an incident, the first priority is to:", options: ["Make the area safe", "Post photos online", "Leave quickly", "Delete the logs"], answer: 0, why: "People and property come first." },
      { q: "Why review an incident with the crew?", options: ["To blame someone", "To fill time", "It is not useful", "To update procedures so it does not happen again"], answer: 3, why: "Learning from incidents improves safety." }
    ]
  }
};
