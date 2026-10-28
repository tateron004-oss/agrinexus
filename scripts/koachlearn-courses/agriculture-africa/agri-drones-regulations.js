"use strict";

// Koach Learn course: Agriculture (Africa) -> "Agricultural Drones in Africa: Aviation Regulations and Licensing".
// The professional, in-depth law course of the "Agricultural Drones in Africa" set (with agri-drones-uas-technology, agri-drones-mission-planning, agri-drones-data-precision).
// The monitoring track's Course 1 (agri-drones-intro) gives the farmer-level overview; this course goes into Kenya's and Nigeria's actual instruments and a business compliance file.
// Facts checked 27 October 2026 against: KCAA's UAS page and the Kenya Gazette fee schedule (L.N. 4 of 2021) hosted by KCAA; NCAA's Nig.CARs 2023 Part 21 (text read from the official PDF).
// Rules change: every lesson tells the student to confirm on the official page; no fee amounts are given.

const KCAA_UAS = { name: "Kenya Civil Aviation Authority (KCAA): Unmanned Aircraft Systems", url: "https://www.kcaa.or.ke/safety-security-oversight/unmanned-aircraft-systems" };
const KCAA_PORTAL = { name: "KCAA drone (RPAS) online system", url: "https://rpas.kcaa.or.ke/" };
const KCAA_FEES = { name: "KCAA: Civil Aviation (Regulatory Fees and Charges for Unmanned Aircraft Systems) Regulations, 2020 (L.N. 4 of 2021)", url: "https://www.kcaa.or.ke/sites/default/files/docs/uas/UASCharges.pdf" };
const KCAA_ROC = { name: "KCAA: Remote Air Operator Certificate (ROC)", url: "https://www.kcaa.or.ke/safety-security-oversight/unmanned-aircraft-systems/roc" };
const KCAA_UTO = { name: "KCAA: Unmanned Aircraft Systems Training Organizations (UTO)", url: "https://www.kcaa.or.ke/safety-security-oversight/unmanned-aircraft-systems/uto" };
const KCAA_REGS_2026 = { name: "KCAA: Kenya Civil Aviation Regulations 2026 (published regulations)", url: "https://www.kcaa.or.ke/published-regs-2026" };
const KENYA_LAW_UAS = { name: "Kenya Law: The Civil Aviation (Unmanned Aircraft Systems) Regulations, 2020 (L.N. 42 of 2020)", url: "https://new.kenyalaw.org/akn/ke/act/ln/2020/42" };
const NCAA_P21 = { name: "Nigeria Civil Aviation Authority (NCAA): Nig.CARs 2023 Part 21, Remotely Piloted Aircraft Systems", url: "https://www.ncaa.gov.ng/documents/regulations/nig-cars-2023/part-21-remotely-piloted-aircraft-system-rpas/" };
const FAO_WHO_AERIAL = { name: "FAO and WHO: Guidance for aerial application of pesticides (2024)", url: "https://www.who.int/publications/i/item/9789240076785" };
const PCPB = { name: "Pest Control Products Board (Kenya)", url: "https://www.pcpb.go.ke" };
const NAFDAC = { name: "National Agency for Food and Drug Administration and Control (NAFDAC, Nigeria)", url: "https://www.nafdac.gov.ng" };
const ODPC = { name: "Office of the Data Protection Commissioner (Kenya)", url: "https://www.odpc.go.ke" };
const NDPC = { name: "Nigeria Data Protection Commission (NDPC)", url: "https://ndpc.gov.ng" };

module.exports = {
  id: "agri-drones-regulations",
  category: "Agriculture (Africa)",
  name: "Agricultural Drones in Africa: Aviation Regulations and Licensing",
  skills: "Finding and reading national drone regulations, Classifying a drone and an operation by risk, Mapping the licences and certificates a job needs, Handling special operations (spraying, BVLOS, near aerodromes), Building a compliance file, Keeping up with rule changes",
  outcome: "read your country's drone regulations, work out which registrations, licences, certificates and authorisations an agricultural drone job needs, and build a complete compliance file for a drone service business.",
  about: [
    "This course is for people who plan to fly drones professionally in African agriculture: drone service entrepreneurs, agribusiness and estate managers, cooperative and extension leaders, and young people training as remote pilots. It goes deeper than the overview in the monitoring track.",
    "Chapter 1 explains how drone law is built, then walks through Kenya's and Nigeria's rules: the Civil Aviation (Unmanned Aircraft Systems) Regulations, 2020 overseen by the Kenya Civil Aviation Authority (KCAA), and Part 21 of the Nigeria Civil Aviation Regulations 2023 overseen by the Nigeria Civil Aviation Authority (NCAA). Chapter 2 covers licensing and operator certification, special operations such as spraying and flights near aerodromes, and building and maintaining a compliance file.",
    "This is education, not legal advice. Drone rules are law, they change, and other African countries have their own authority and rules. Every lesson points to the official source; confirm everything there, or with the authority or a lawyer, before you act. Never fly without the registration, licence and approvals your country requires."
  ],
  finalTask: "Build a compliance file for a drone service business in your country that will map crops for farmers and estates (and, if you plan it, spray): the authority and regulations that apply, with links and the date you checked; your drone's classification and the operation's risk category; every registration, permit, licence, certificate and authorisation needed, who issues it and its status; required documents (operations manual, insurance, maintenance and flight records); the extra approvals for any spraying; data protection steps; and a schedule for checking rule changes and renewals.",
  chapters: [
    {
      name: "Chapter 1: Drone law in Africa",
      lessons: [
        {
          title: "How drone law is built",
          minutes: 5,
          goal: "Find and name the layers of drone law that apply in your country.",
          text: [
            "Countries base their aviation rules on international standards from ICAO, the UN's International Civil Aviation Organization, but each country writes and enforces its own drone law. Usually there is an aviation act passed by parliament; drone regulations made under that act; implementing standards or manuals with the technical detail; a fee schedule; and notices or circulars for special cases.",
            "Most modern drone rules sort operations by risk. Low-risk flying (small drone, in sight, low, away from people and airports) has the lightest requirements. Higher-risk flying (heavy drones, beyond sight, over people, near aerodromes, spraying or dropping things) needs more: authorisation, certified operators, licensed pilots, and sometimes certified aircraft.",
            "To find your country's rules, go to the civil aviation authority's website and look for a section called drones, UAS, RPAS or unmanned aircraft. Download the regulations, the standards and the fee schedule, and note the date. Examples of authorities: KCAA (Kenya), NCAA (Nigeria), and the civil aviation authorities of Ghana, Rwanda, Uganda, Tanzania and South Africa."
          ],
          steps: ["Open your civil aviation authority's website.", "Find the drones / UAS / RPAS section.", "Download the regulations, implementing standards and fee schedule.", "Note the date and version of each.", "List how the rules sort operations by risk."],
          words: [["ICAO", "the International Civil Aviation Organization, a UN agency that sets international aviation standards."], ["Regulations", "legally binding rules made under an act of parliament."], ["Implementing standards", "detailed technical rules that explain how to meet the regulations."], ["Risk category", "a group of operations with similar risk and similar requirements."]],
          slides: [
            { title: "Layers of drone law", bullets: ["Aviation act", "Drone regulations under the act", "Implementing standards and fee schedule", "Notices and circulars"] },
            { title: "Rules follow risk", bullets: ["Low risk: small, in sight, low, away from people", "High risk: heavy, beyond sight, over people", "Spraying or dropping things: more approvals"] },
            { title: "Find your rules", bullets: ["Authority website: drones, UAS or RPAS", "Download regulations, standards, fees", "Note date and version"] }
          ],
          sources: [KCAA_UAS, NCAA_P21],
          tryIt: "For your country, list the aviation authority, the name and year of the drone regulations, whether there are implementing standards and a fee schedule, and the date you checked. Save the documents in one folder.",
          youCanNow: "find the layers of drone law in your country and see how they sort operations by risk."
        },
        {
          title: "Kenya: KCAA and the UAS Regulations 2020",
          minutes: 6,
          goal: "List the Kenyan approvals a commercial agricultural drone operator is likely to need.",
          text: [
            "In Kenya, drones are governed by the Civil Aviation (Unmanned Aircraft Systems) Regulations, 2020, made under the Civil Aviation Act, 2013, and overseen by KCAA. KCAA's drone page also publishes a Manual of Implementing Standards and a fee schedule, the Civil Aviation (Regulatory Fees and Charges for Unmanned Aircraft Systems) Regulations, 2020.",
            "The fee schedule shows the main approvals that exist: an import permit and registration for the drone; certificates of airworthiness; a Remote Air Operator Certificate (ROC) for operators; operation authorisations for Category A and for Categories B and C; licences for people, including a student remote pilot licence, a remote pilot licence (RPL), and ratings such as beyond visual line of sight; and approvals for training organisations and for drone resellers. KCAA lists approved ROC holders and training organisations on its site, and applications go through its online drone system.",
            "KCAA's site also lists newly published Kenya Civil Aviation Regulations for 2026. Check whether any of them change the drone rules before relying on the 2020 versions, and check current fees on the day you apply."
          ],
          words: [["KCAA", "Kenya Civil Aviation Authority, which regulates drones in Kenya."], ["ROC", "Remote Air Operator Certificate: KCAA's approval for an organisation to run drone operations."], ["SRPL / RPL", "student remote pilot licence / remote pilot licence."], ["Certificate of airworthiness", "an official confirmation that an aircraft is fit and safe to fly."]],
          slides: [
            { title: "Kenya's drone law", bullets: ["Civil Aviation (UAS) Regulations, 2020", "Made under the Civil Aviation Act, 2013", "Overseen by KCAA"] },
            { title: "Approvals in the fee schedule", bullets: ["Import permit and registration", "ROC for operators", "Operation authorisations: Category A; B and C", "SRPL, RPL, BVLOS and other ratings"] },
            { title: "Where to apply and check", bullets: ["KCAA online drone system", "Lists of ROC holders and training organisations", "Check 2026 regulations and current fees"] }
          ],
          sources: [KCAA_UAS, KENYA_LAW_UAS, KCAA_FEES, KCAA_ROC, KCAA_UTO, KCAA_PORTAL, KCAA_REGS_2026],
          tryIt: "Open KCAA's drone page and fee schedule. Make a table of every approval a business mapping tea estates for pay would need (drone, people, organisation, operation), with a column for where to apply. Leave fees as \"check on the day\".",
          youCanNow: "list the Kenyan registrations, licences, certificates and authorisations a commercial farm-drone operator is likely to need, and where to apply."
        },
        {
          title: "Nigeria: NCAA and Nig.CARs Part 21",
          minutes: 6,
          goal: "Classify a drone and operation under Nigeria's Part 21 and list what it requires.",
          text: [
            "In Nigeria, drones are covered by Part 21 (Remotely Piloted Aircraft Systems) of the Nigeria Civil Aviation Regulations 2023, document Nig.CARs/2023/021, effective 17 May 2023, overseen by the NCAA. It covers certification, registration, operations and surveillance of RPAS.",
            "Part 21 classifies aircraft by weight: Nano (under 250 g), Micro (250 g to under 2 kg), Small (2 kg to under 25 kg), Medium (25 kg to 150 kg) and Large (over 150 kg), each with conditions and prior authorisation from the Authority. It also uses three operational risk categories: Open (lowest risk, must be registered), Specific (higher risk, needs authorisation) and Certified (aircraft, operator and pilot certified, treated more like manned aviation). It provides for remote pilot licences and RPAS operator certificates.",
            "Part 21 also sets operating limits, for example flights at or below 120 m (400 ft) above ground in many cases, keeping 30 m horizontally from people not involved in the operation, not flying over populated areas, and staying away from aerodromes (such as within 4 km of a controlled aerodrome's movement area, or 10 km for private and recreational flights) unless authorised. Read the full text for the conditions that apply to your operation."
          ],
          words: [["NCAA", "Nigeria Civil Aviation Authority, which regulates drones in Nigeria."], ["Nig.CARs", "Nigeria Civil Aviation Regulations."], ["Open / Specific / Certified", "Part 21's three operational risk categories, from lowest to highest risk."], ["Movement area", "the part of an airport used by aircraft to take off, land and taxi."]],
          slides: [
            { title: "Nigeria's drone law", bullets: ["Nig.CARs 2023 Part 21: RPAS", "Effective 17 May 2023", "Overseen by NCAA"] },
            { title: "Classes by weight", bullets: ["Nano < 250 g; Micro 250 g to < 2 kg", "Small 2 to < 25 kg; Medium 25-150 kg", "Large > 150 kg"] },
            { title: "Risk categories", bullets: ["Open: lowest risk, registered", "Specific: needs authorisation", "Certified: aircraft, operator, pilot certified"] },
            { title: "Examples of limits", bullets: ["120 m (400 ft) AGL in many cases", "30 m from uninvolved people", "Distances from aerodromes unless authorised"] }
          ],
          sources: [NCAA_P21],
          tryIt: "A Nigerian agribusiness wants to map cassava farms in Ogun State with a 1.2 kg multirotor and a 15 kg multirotor for spraying. Using Part 21, write each drone's weight class, the likely risk category of each job, and three questions you would ask the NCAA.",
          youCanNow: "classify a drone and an operation under Nigeria's Part 21 and list what it requires."
        }
      ],
      check: {
        title: "Knowledge Check 1: Drone law in Africa",
        questions: [
          { q: "Where do national drone regulations get their legal power?", options: ["From a drone maker's manual", "From an act of parliament, such as a civil aviation act", "From social media", "From the farmer"], answer: 1, why: "Regulations are made under an act passed by parliament." },
          { q: "Which operation is usually the highest risk?", options: ["A small drone in sight over an empty field", "A hover at 5 metres", "A heavy drone spraying beyond visual line of sight", "A simulator flight"], answer: 2, why: "Weight, BVLOS and spraying all raise the risk and the requirements." },
          { q: "In Kenya, a company mapping estates for pay needs which operator approval?", options: ["A Remote Air Operator Certificate (ROC) from KCAA", "A business card", "A county permit only", "Nothing"], answer: 0, why: "KCAA issues ROCs to drone operators." },
          { q: "Under Nigeria's Part 21, a 1.2 kg drone is in which weight class?", options: ["Nano", "Small", "Large", "Micro"], answer: 3, why: "Micro is 250 g to under 2 kg." },
          { q: "In Part 21, the Specific category means:", options: ["No rules apply", "Higher risk; authorisation is needed to operate", "Only for toys", "Only for manned aircraft"], answer: 1, why: "Specific operations carry more risk and need authorisation." }
        ]
      }
    },
    {
      name: "Chapter 2: Licensing, certification and compliance",
      lessons: [
        {
          title: "Pilot licences and operator certificates",
          minutes: 5,
          goal: "Plan the people and organisation approvals for a drone service business.",
          text: [
            "Two kinds of approval matter for a business. The person who flies needs the pilot licence and any ratings the rules require; in Kenya, the remote pilot licence (RPL), trained at a KCAA-approved training organisation; in Nigeria, a remote pilot licence under Part 21. The organisation that sells drone services usually needs an operator certificate: KCAA's Remote Air Operator Certificate or NCAA's RPAS Operator Certificate.",
            "Operator certification usually asks for evidence that the business can operate safely: an operations manual (how you plan, fly, maintain and report), named responsible people, trained and licensed pilots, registered drones, a maintenance system, records, and insurance. Part 21, for example, lists third-party liability insurance certificates among the documents an operation must carry.",
            "Plan time and money for this. Ask the authority for its current checklist and fees, and ask approved training organisations whether they help with operations manuals."
          ],
          steps: ["List every pilot and the licence and ratings each needs.", "Check the operator certificate your business needs.", "Get the authority's current application checklist.", "Draft an operations manual: planning, flying, maintenance, emergencies, reporting.", "Arrange insurance and record systems."],
          words: [["Operations manual", "a business's written rules for how it plans, flies, maintains drones and handles emergencies."], ["Third-party liability insurance", "insurance that pays if your operation harms other people or their property."]],
          slides: [
            { title: "Two kinds of approval", bullets: ["The person: remote pilot licence and ratings", "The business: operator certificate"] },
            { title: "Operator certificate asks for", bullets: ["Operations manual", "Responsible people, licensed pilots", "Registered drones, maintenance, records", "Insurance"] },
            { title: "Plan for it", bullets: ["Get the current checklist and fees", "Ask approved schools about manuals", "Allow time before taking paid work"] }
          ],
          sources: [KCAA_ROC, KCAA_UTO, NCAA_P21],
          tryIt: "Write the table of contents for an operations manual for a small crop-mapping business, with at least eight sections (for example: organisation, responsibilities, flight planning, pre-flight checks, emergencies, maintenance, records, incident reporting).",
          youCanNow: "plan the pilot licences and operator certificate a drone service business needs, and what an operations manual covers."
        },
        {
          title: "Special operations: spraying, BVLOS and aerodromes",
          minutes: 6,
          goal: "Identify operations that need extra approvals and who gives them.",
          text: [
            "Spraying pesticides or dropping anything from a drone is a special operation. Part 21, for example, forbids dropping or discharging things in a way that creates a hazard and has separate rules for dangerous goods, and Kenya's fee schedule lists separate authorisations for higher-risk categories. Many pesticides are classed as dangerous goods. Expect to need specific aviation authorisation, a heavier certified aircraft, and trained crews.",
            "Spraying also falls under pesticide law. In Kenya, pest control products are regulated by the Pest Control Products Board (PCPB); in Nigeria, agrochemicals are regulated by NAFDAC. Ask them whether the product may be applied from the air and what training and protective equipment applicators need. FAO and WHO have published guidance for aerial application of pesticides. Never spray, or offer spraying, without both aviation and pesticide approvals.",
            "Other special operations include flying beyond visual line of sight (BVLOS), at night, near or at aerodromes, over people or roads, and in restricted or protected areas such as national parks. Each needs specific approval. Large farms near airstrips are common in Africa: check distances and ask before planning."
          ],
          words: [["Dangerous goods", "materials that can harm health, safety or property in transport, such as many pesticides."], ["Pesticide regulator", "the government body that registers pesticides and controls how they are used."], ["BVLOS", "beyond visual line of sight."]],
          slides: [
            { title: "Spraying and dropping", bullets: ["Special, higher-risk operations", "Aviation authorisation, certified aircraft, trained crew", "Many pesticides are dangerous goods"] },
            { title: "Pesticide law too", bullets: ["Kenya: Pest Control Products Board (PCPB)", "Nigeria: NAFDAC", "FAO/WHO aerial application guidance"] },
            { title: "Other special operations", bullets: ["Beyond sight, at night", "Near aerodromes, over people or roads", "Parks and restricted areas"] },
            { title: "The rule", bullets: ["No spraying without aviation AND pesticide approval", "Ask before planning near airstrips"] }
          ],
          sources: [NCAA_P21, KCAA_FEES, PCPB, NAFDAC, FAO_WHO_AERIAL],
          tryIt: "A sugarcane estate 3 km from an airstrip asks you to spray a fungicide by drone. List every approval and check you would need (aviation, pesticide, landowner, aerodrome) and who you would contact for each.",
          youCanNow: "spot special operations and list the aviation and pesticide approvals they need."
        },
        {
          title: "Building and keeping a compliance file",
          minutes: 5,
          goal: "Build a compliance file and a schedule to keep it current.",
          text: [
            "A compliance file holds everything that proves your operation is legal and safe, in one place you can show an inspector, a client or an insurer. Keep a paper copy and a backed-up digital copy.",
            "Include: the regulations and standards you follow (with dates checked); registration certificates for each drone; import permits; pilot licences and ratings; the operator certificate; operation authorisations; the operations manual; insurance certificates; maintenance records; flight logs; incident reports; client agreements and landowner permissions; and your data protection steps (Kenya: ODPC; Nigeria: NDPC) if you hold farmers' personal data.",
            "Rules, fees and forms change. Keep a renewal calendar for every licence and certificate, and check the authority's website on a fixed schedule, for example monthly, and before every new type of job. Write down what you checked and when."
          ],
          steps: ["Create the file: paper and backed-up digital.", "Add regulations, certificates, licences, authorisations, manual, insurance.", "Add maintenance records, flight logs, incident reports, agreements.", "Add data protection registration or steps if you hold personal data.", "Set a renewal calendar and a monthly rules check."],
          words: [["Compliance", "following the laws and rules that apply to you."], ["Renewal", "applying again before a licence or certificate expires."]],
          slides: [
            { title: "One place for proof", bullets: ["For inspectors, clients and insurers", "Paper and backed-up digital copy"] },
            { title: "What goes in", bullets: ["Regulations, registrations, permits", "Licences, operator certificate, authorisations", "Manual, insurance, maintenance, logs, incidents"] },
            { title: "Also include", bullets: ["Client and landowner agreements", "Data protection steps (ODPC, NDPC)"] },
            { title: "Keep it current", bullets: ["Renewal calendar", "Check rules monthly and before new job types", "Write what you checked and when"] }
          ],
          sources: [KCAA_UAS, KCAA_REGS_2026, NCAA_P21, ODPC, NDPC],
          tryIt: "Final task: build the compliance file for a drone service business in your country: authority and regulations with dates, classification and risk category, every approval and its status, required documents, extra spraying approvals if planned, data protection steps, and a renewal and rules-check calendar.",
          youCanNow: "build and maintain a compliance file that shows your drone operation is legal and safe."
        }
      ],
      check: {
        title: "Knowledge Check 2: Licensing, certification and compliance",
        questions: [
          { q: "Who usually needs an operator certificate?", options: ["The organisation that sells drone services", "Every farmer whose field is mapped", "The drone shop", "Nobody"], answer: 0, why: "Operator certificates approve the business that runs operations." },
          { q: "What is an operations manual?", options: ["The drone's user guide", "A business's written rules for planning, flying, maintenance and emergencies", "A sales brochure", "A fee receipt"], answer: 1, why: "Authorities ask operators to show how they operate safely." },
          { q: "In Kenya, which body regulates pest control products?", options: ["KCAA", "ODPC", "Pest Control Products Board (PCPB)", "NDPC"], answer: 2, why: "PCPB regulates pest control products; spraying also needs aviation approval." },
          { q: "A client wants a drone to spray near an airstrip. Your first step is:", options: ["Spray early in the morning", "Spray only half the field", "Ignore the airstrip", "Check the aviation and pesticide approvals and the aerodrome distance rules"], answer: 3, why: "Spraying and aerodrome proximity both need specific approvals." },
          { q: "How often should you check for rule changes?", options: ["On a fixed schedule, such as monthly, and before new job types", "Never", "Only when fined", "Every ten years"], answer: 0, why: "Rules and fees change; a schedule keeps you current." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Agricultural Drones in Africa: Aviation Regulations and Licensing",
    questions: [
      { q: "ICAO is:", options: ["Kenya's drone regulator", "The UN's International Civil Aviation Organization", "A drone brand", "A pesticide"], answer: 1, why: "ICAO sets international standards that countries build on." },
      { q: "Who writes and enforces drone law in each African country?", options: ["ICAO directly", "Drone makers", "Each country's own civil aviation authority", "The African Union only"], answer: 2, why: "Each country controls its airspace and drone rules." },
      { q: "Implementing standards are:", options: ["Detailed technical rules explaining how to meet the regulations", "Advertising standards", "Crop varieties", "Insurance policies"], answer: 0, why: "They hold the technical detail behind the regulations." },
      { q: "Kenya's main drone regulations are:", options: ["Nig.CARs Part 21", "The Data Protection Act 2019", "The Pest Control Products Act", "The Civil Aviation (Unmanned Aircraft Systems) Regulations, 2020"], answer: 3, why: "KCAA oversees the UAS Regulations, 2020." },
      { q: "KCAA's fee schedule lists operation authorisations for:", options: ["Category A, and Categories B and C", "Only toys", "Only manned aircraft", "Only imports"], answer: 0, why: "Kenya authorises operations by risk category." },
      { q: "In Kenya, applications for drone approvals go through:", options: ["A county office", "KCAA's online drone system", "A drone shop", "Social media"], answer: 1, why: "KCAA runs an online RPAS system." },
      { q: "Before relying on Kenya's 2020 drone rules, you should also check:", options: ["Old newspaper articles", "A friend's opinion", "KCAA's newly published regulations and current fees", "Nothing"], answer: 2, why: "Rules and fees can change; KCAA lists new regulations." },
      { q: "Nigeria's drone rules are in:", options: ["Kenya's UAS Regulations", "The FAO guidance", "The Data Protection Act", "Nig.CARs 2023 Part 21"], answer: 3, why: "Part 21 covers RPAS in Nigeria." },
      { q: "Under Part 21, a drone of 15 kg is in which class?", options: ["Small", "Nano", "Micro", "Large"], answer: 0, why: "Small is 2 kg to under 25 kg." },
      { q: "Part 21's Open category:", options: ["Needs no registration", "Is lowest risk but the drone must be registered", "Is for heavy spray drones", "Means flying anywhere"], answer: 1, why: "Open operations are low risk yet still registered." },
      { q: "Part 21 limits many operations to:", options: ["1,000 m above ground", "No limit", "120 m (400 ft) above ground", "10 m above ground"], answer: 2, why: "120 m (400 ft) AGL is a common limit in Part 21." },
      { q: "Part 21 keeps many drone operations at least how far horizontally from uninvolved people?", options: ["1 m", "3 m", "30 m", "300 km"], answer: 2, why: "Part 21 uses 30 m from people not associated with the operation." },
      { q: "A remote pilot licence is for:", options: ["The person who flies", "The drone", "The farm", "The business"], answer: 0, why: "Licences are for people; certificates are for organisations and aircraft." },
      { q: "Third-party liability insurance pays when:", options: ["Your drone is stolen from you", "Your operation harms other people or their property", "Crop prices fall", "You pass an exam"], answer: 1, why: "It covers harm to others." },
      { q: "In Nigeria, agrochemicals are regulated by:", options: ["NCAA", "NDPC", "NAFDAC", "KCAA"], answer: 2, why: "NAFDAC regulates chemicals including agrochemicals." },
      { q: "Many pesticides are classed as:", options: ["Food", "Toys", "Spare parts", "Dangerous goods"], answer: 3, why: "Dangerous goods rules apply to carrying them by air." },
      { q: "Which is a special operation needing specific approval?", options: ["Flying beyond visual line of sight", "A simulator flight", "Reading the regulations", "Charging batteries"], answer: 0, why: "BVLOS is higher risk and needs approval." },
      { q: "A compliance file is:", options: ["A list of clients only", "One place holding all proof your operation is legal and safe", "A drone part", "A pesticide label"], answer: 1, why: "It holds certificates, licences, manuals, records and more." },
      { q: "If your business holds farmers' phone numbers in Kenya, which law also applies?", options: ["None", "Nig.CARs Part 21", "The Data Protection Act 2019, overseen by ODPC", "Only the drone manual"], answer: 2, why: "Personal data is covered by Kenya's data protection law." },
      { q: "This course is:", options: ["Legal advice for your case", "A remote pilot licence", "Permission to fly", "Education; confirm everything with the official authority"], answer: 3, why: "Rules change; official sources and professionals decide." }
    ]
  }
};
