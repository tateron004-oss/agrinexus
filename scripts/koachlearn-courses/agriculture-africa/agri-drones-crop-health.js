"use strict";

// Koach Learn course: Agriculture (Africa) -> "Drones for Agricultural Monitoring 3: Crop Health, Pests and Data Processing" (owner's drone outline, modules 5 and 6).
// Third of the six-part monitoring track: reading crop health maps, spotting early pest, disease and stress patterns, and turning drone photos into a map and a field report with free tools.
// Advanced analytics (accuracy, several indices, zonal statistics, prescriptions) are in agri-drones-data-precision.

const FAO_EO = { name: "FAO GIEWS Earth Observation (NDVI and vegetation indicators)", url: "https://www.fao.org/giews/earthobservation/index.jsp" };
const FAO_FAMEWS = { name: "FAO: mobile application to support the fight against Fall Armyworm in Africa (FAMEWS)", url: "https://www.fao.org/newsroom/detail/FAO-launches-mobile-application-to-support-fight-against-Fall-Armyworm-in-Africa/en" };
const ODM = { name: "OpenDroneMap (free, open-source drone mapping software)", url: "https://www.opendronemap.org/" };
const QGIS = { name: "QGIS (free, open-source GIS)", url: "https://qgis.org/" };

module.exports = {
  id: "agri-drones-crop-health",
  category: "Agriculture (Africa)",
  name: "Drones for Agricultural Monitoring 3: Crop Health, Pests and Data Processing",
  skills: "Reading an NDVI crop health map, Spotting early pest, disease and stress patterns, Ground-truthing problem zones, Stitching drone photos into a map, Making an index map in QGIS, Writing a field action report",
  outcome: "turn a set of drone photos of a field into a crop health map, find the problem zones, check them on the ground, and write a short action report the farmer can use.",
  about: [
    "This is Course 3 of the drone monitoring track, for extension officers, agronomists, farm managers and young drone service providers in Kenya, Nigeria and across Africa. You should know how to capture a set of overlapping drone images (Course 2) or have a set to work with; free sample datasets are available online.",
    "Chapter 1 teaches you to read crop health maps and recognise the patterns that early pest, disease, water and nutrient problems make on maize, cassava, beans, tea and coffee, and how to confirm them on the ground. Chapter 2 teaches you to stitch photos into a map with free software, make an NDVI map in QGIS, and write a report that leads to action.",
    "A drone map never replaces the farmer's eyes or the extension officer's diagnosis. It shows where to look first, so scarce time and money go to the right spot. Each lesson takes about five minutes plus a practice task; a knowledge check closes each chapter and a 20-question quiz closes the course."
  ],
  finalTask: "Using a drone map of a real field or a free sample dataset: make an NDVI or colour map, mark at least three problem zones, write a ground-truthing plan (what to look for at each zone), and write a one-page action report for the farmer with a map picture, what was found or suspected, the recommended next step for each zone, and who to contact for confirmation.",
  chapters: [
    {
      name: "Chapter 1: Reading crop health",
      lessons: [
        {
          title: "Reading an NDVI crop health map",
          minutes: 5,
          goal: "Read an NDVI map using its colour scale and find the weak and strong zones.",
          text: [
            "NDVI (Normalized Difference Vegetation Index) compares near-infrared and red light reflected by plants. Values run from -1 to +1. FAO explains that high positive values suggest dense, healthy vegetation, while low or negative values suggest sparse cover, bare soil or water.",
            "On a drone NDVI map, each pixel gets a colour from a scale, often red for low values to green for high. Always read the legend: colours are relative to that map. A field that is all red early in the season may just be small plants and bare soil.",
            "Look for differences within the field, not the colour alone. A low patch in an otherwise even maize field is worth a visit. Compare with earlier maps of the same field: a patch that is growing week after week matters more than one that stays the same."
          ],
          steps: ["Read the legend: which colour is low and which is high?", "Note the crop and growth stage: young crops show more soil.", "Look for patches that differ from the rest of the field.", "Compare with an earlier map: is the patch new or growing?", "Mark the zones to visit."],
          words: [["NDVI", "a vegetation index from -1 to +1; higher usually means denser, healthier green plants."], ["Legend", "the key that shows what each colour on a map means."], ["Growth stage", "how far the crop has developed, from seedling to harvest."]],
          slides: [
            { title: "NDVI in one line", bullets: ["Compares near-infrared and red light", "From -1 to +1", "High = dense, healthy green; low = sparse, soil or water"] },
            { title: "Read the legend first", bullets: ["Colours are relative to the map", "Young crops show more soil"] },
            { title: "Look for differences", bullets: ["Patches that differ from the rest", "New or growing patches matter most", "Mark the zones to visit"] }
          ],
          sources: [FAO_EO],
          tryIt: "Find a sample NDVI map online (search for an NDVI map of a maize field) or use one of your own. Read the legend, mark two weak zones and one strong zone, and write what growth stage the crop might be at.",
          youCanNow: "read an NDVI map's legend and find the weak and strong zones worth visiting."
        },
        {
          title: "Spotting early pest, disease and stress patterns",
          minutes: 6,
          goal: "Recognise the map patterns that point to pests, disease, water or nutrient problems.",
          text: [
            "Different problems leave different shapes on a map. Patches that start small and spread outward over weeks can point to pests or disease, such as fall armyworm in maize or virus diseases in cassava. Problems along one edge may come from a neighbour's field, a road or wind. Straight stripes usually follow people or machines: a skipped fertilizer row, a blocked irrigation line, a planter fault.",
            "Low, wet corners and dips point to waterlogging; high, sandy or sloping ground to water stress, especially on thermal images in the afternoon. Even yellowing across a whole field can point to a nutrient shortage such as nitrogen, but also to drought.",
            "A pattern is a clue, not a diagnosis. Diseases and pests look alike from the air, and the treatments are very different. Fall armyworm sightings can be recorded with FAO's FAMEWS app where it is in use; confirm any suspected pest or disease with an extension officer or plant clinic before acting."
          ],
          words: [["Pattern", "the shape and spread of a problem on a map: patch, edge, stripe, low spot."], ["Fall armyworm", "a caterpillar pest that eats maize and other crops; it spread across Africa from 2016."], ["Plant clinic", "a place where trained staff diagnose plant problems brought by farmers."]],
          slides: [
            { title: "Shapes tell a story", bullets: ["Spreading patches: pests or disease?", "One edge: neighbour, road or wind?", "Straight stripes: machines, fertilizer or irrigation"] },
            { title: "Water and nutrients", bullets: ["Low wet dips: waterlogging", "High sandy slopes: water stress", "Even yellowing: nutrients or drought"] },
            { title: "A clue, not a diagnosis", bullets: ["Pests and diseases look alike from the air", "Treatments are very different", "Confirm with extension or a plant clinic"] }
          ],
          sources: [FAO_FAMEWS],
          tryIt: "Draw four small sketches of a field: one with a spreading patch, one with a problem along an edge, one with stripes, one with a low wet corner. Under each, write two possible causes.",
          youCanNow: "recognise common problem patterns on a crop map and list the likely causes to check."
        },
        {
          title: "Ground-truthing: checking the zones on foot",
          minutes: 5,
          goal: "Visit each problem zone with a plan and record what you find.",
          text: [
            "Ground-truthing means going to the exact spot on the map and checking what is really there. Load the map on your phone with GPS (many free map and GIS apps can show your position on a drone map), or note the coordinates of each zone.",
            "At each zone, look at the plants, leaves (top and underside), stems and roots, the soil and moisture, and insects. Compare with healthy plants a few metres away in a strong zone. Take clear photos and short notes.",
            "Record findings in the same way every time: zone number, coordinates, crop and stage, what you saw, likely cause, how sure you are, and photo numbers. Good records make the next map easier to read, and they help an expert who confirms the cause."
          ],
          steps: ["Number each zone and note its coordinates.", "Walk to it using a GPS map on your phone.", "Check plants, leaves, stems, roots, soil, moisture and insects.", "Compare with a healthy spot nearby.", "Record zone, coordinates, what you saw, likely cause, how sure, photo numbers."],
          words: [["Ground-truthing", "checking on the ground what a map or image shows."], ["Coordinates", "the latitude and longitude numbers that give an exact place."]],
          slides: [
            { title: "Go to the exact spot", bullets: ["Map with GPS on your phone", "Or note each zone's coordinates"] },
            { title: "Look closely", bullets: ["Leaves top and underside, stems, roots", "Soil and moisture, insects", "Compare with a healthy spot nearby"] },
            { title: "Record the same way every time", bullets: ["Zone, coordinates, crop and stage", "What you saw, likely cause, how sure", "Photo numbers"] }
          ],
          tryIt: "Make a ground-truthing form (on paper or in a phone spreadsheet) with these columns: zone, coordinates, crop and stage, what I saw, likely cause, how sure, photos. Fill one row for a real or example zone.",
          youCanNow: "plan and carry out a ground-truthing visit and record findings in a clear form."
        }
      ],
      check: {
        title: "Knowledge Check 1: Reading crop health",
        questions: [
          { q: "An NDVI map of a field is mostly red early in the season. The most likely reason is:", options: ["The drone was broken", "Small plants and a lot of bare soil", "Everything is dead", "It rained"], answer: 1, why: "Young crops cover little ground, so soil pulls the values down." },
          { q: "Which patch should you visit first?", options: ["A patch that is the same as last month", "The strongest green area", "A low patch that has grown since the last map", "The field border with grass"], answer: 2, why: "A growing patch suggests an active, spreading problem." },
          { q: "Straight stripes of weak crop in a field usually point to:", options: ["Machines, fertilizer or irrigation lines", "A virus spreading from one plant", "Wind from one side", "Nothing"], answer: 0, why: "Straight lines follow how people and machines work the field." },
          { q: "A drone map strongly suggests a disease. Before spraying, you should:", options: ["Spray the strongest chemical", "Post the map online", "Spray the whole farm", "Confirm the cause with an extension officer or plant clinic"], answer: 3, why: "Pests and diseases look alike from the air and need different treatments." },
          { q: "Why compare a weak zone with healthy plants a few metres away?", options: ["To see what is different", "To save battery", "Because the law says so", "To find a better phone signal"], answer: 0, why: "Side-by-side comparison shows what is wrong with the weak plants." }
        ]
      }
    },
    {
      name: "Chapter 2: Processing drone data",
      lessons: [
        {
          title: "Stitching photos into a map",
          minutes: 6,
          goal: "Turn a set of overlapping drone photos into one orthomosaic map.",
          text: [
            "Stitching software matches features shared by overlapping photos, works out where each was taken, and builds one map-accurate image called an orthomosaic. It can also make an elevation model (the height of the ground and crop).",
            "Free options exist. OpenDroneMap is free, open-source software, and its WebODM interface lets you upload photos in a web browser on your own computer. There are also paid cloud services and the drone maker's own apps; check their current prices and where they store your data.",
            "Processing needs a reasonably strong computer and time: a few hundred photos can take an hour or more. Copy the photos off the drone into a folder named with the farm, field and date, back them up, then process. Check the result: holes, blurry areas or bent rows mean the overlap or photos were poor."
          ],
          steps: ["Copy photos to a folder named farm_field_date (for example Kitale_Block3_2026-11-04).", "Back up the folder.", "Open the stitching software and create a new task.", "Add the photos and start processing.", "Check the orthomosaic for holes, blur and bent rows.", "Export it as a GeoTIFF (a map image with location built in)."],
          words: [["Orthomosaic", "one large, map-accurate picture stitched from many overlapping photos."], ["GeoTIFF", "an image file that carries its location on the earth, so map software can place it correctly."], ["Elevation model", "a map of the height of the ground or crop surface."]],
          slides: [
            { title: "Photos into a map", bullets: ["Software matches overlapping photos", "Builds one orthomosaic", "Can also build an elevation model"] },
            { title: "Free and paid tools", bullets: ["OpenDroneMap / WebODM: free, open source", "Paid cloud services and drone maker apps", "Check prices and where your data is stored"] },
            { title: "Good habits", bullets: ["Folder named farm_field_date", "Back up before processing", "Check for holes, blur, bent rows", "Export as GeoTIFF"] }
          ],
          sources: [ODM],
          tryIt: "Download a free sample drone dataset (OpenDroneMap links to sample datasets) or use your own photos. Name and back up the folder, and if your computer allows, process it into an orthomosaic. If not, write each step you would follow.",
          youCanNow: "organise drone photos and stitch them into an orthomosaic map with free software."
        },
        {
          title: "Making an NDVI map in QGIS",
          minutes: 6,
          goal: "Calculate and colour an NDVI map from a multispectral orthomosaic in QGIS.",
          text: [
            "QGIS is free, open-source GIS software used by governments, universities and NGOs across Africa. It can open your GeoTIFF and do maths on its bands.",
            "If your orthomosaic has red and near-infrared bands, use the Raster Calculator to compute NDVI = (NIR - Red) / (NIR + Red). Then style the result with a colour ramp (for example red to green) and set the range so differences in the field stand out.",
            "Only colour cameras? You can still make a rough greenness index from red, green and blue bands, but it is less reliable than NDVI; treat it as a guide only. Add the field boundary and your ground-truthing points as layers so the map shows exactly where the zones are."
          ],
          steps: ["Open QGIS and add your orthomosaic GeoTIFF.", "Check which band is red and which is near-infrared.", "Open the Raster Calculator and enter (NIR - Red) / (NIR + Red) using those bands.", "Style the new layer with a red-to-green colour ramp.", "Add the field boundary and ground-truthing points.", "Export a picture of the map for your report."],
          words: [["GIS", "geographic information system: software for making and analysing maps."], ["Band", "one layer of light in an image, such as red, green, blue or near-infrared."], ["Raster", "an image made of pixels, each with a value, like a drone map."], ["Layer", "one set of map data, such as a field boundary or points, shown on top of others."]],
          slides: [
            { title: "QGIS", bullets: ["Free, open-source GIS", "Opens your GeoTIFF", "Does maths on image bands"] },
            { title: "NDVI formula", bullets: ["NDVI = (NIR - Red) / (NIR + Red)", "Use the Raster Calculator", "Style red to green"] },
            { title: "Colour camera only?", bullets: ["Rough greenness index from RGB bands", "Less reliable than NDVI: a guide only"] },
            { title: "Finish the map", bullets: ["Add field boundary and zone points", "Export a picture for the report"] }
          ],
          sources: [QGIS, FAO_EO],
          tryIt: "Install QGIS (free) and open your orthomosaic or a sample multispectral image. Calculate NDVI with the Raster Calculator, colour it, and mark three zones as points.",
          youCanNow: "make a coloured NDVI map in QGIS and add zones and field boundaries to it."
        },
        {
          title: "Writing a field action report",
          minutes: 5,
          goal: "Write a one-page report that tells the farmer what was found and what to do next.",
          text: [
            "A map alone does not help a busy farmer. A short report turns it into action. Keep it to one page, in plain words, in the language the farmer prefers. Many farmers will read it on a basic smartphone, so a picture and a few lines work better than a long document.",
            "Include: farm, field, date and crop stage; the map picture with numbered zones; for each zone, what you saw on the ground, the likely cause and how sure you are; the next step (for example: replant gaps, clear a drain, ask the plant clinic to confirm a disease, check the irrigation line); and who to contact.",
            "Never recommend a pesticide or dose from a drone map. Point the farmer to an extension officer, agrovet or plant clinic for any chemical advice, and to the label for safe use. Agree when to fly again to see if the action worked."
          ],
          steps: ["Header: farm, field, date, crop and stage.", "Map picture with numbered zones.", "For each zone: what you saw, likely cause, how sure.", "Next step for each zone and who to contact.", "Date for the next flight to check results."],
          words: [["Action report", "a short report that says what was found and what to do."], ["Agrovet", "a shop that sells farm inputs such as seed, fertilizer and animal medicines, often with advice."]],
          slides: [
            { title: "A map is not enough", bullets: ["One page, plain words", "Farmer's preferred language", "Picture plus a few lines"] },
            { title: "What goes in", bullets: ["Farm, field, date, crop stage", "Map with numbered zones", "Finding, likely cause, how sure, next step"] },
            { title: "Stay safe and honest", bullets: ["No pesticide or dose from a map", "Send to extension, agrovet or plant clinic", "Agree when to fly again"] }
          ],
          tryIt: "Final task: using your map and ground-truthing form, write the one-page action report for the farmer: header, map picture with at least three numbered zones, finding and likely cause for each, next step, contacts and the next flight date.",
          youCanNow: "turn drone data into a clear one-page action report a farmer can use."
        }
      ],
      check: {
        title: "Knowledge Check 2: Processing drone data",
        questions: [
          { q: "What is an orthomosaic?", options: ["A single photo", "A type of drone", "One map-accurate picture stitched from many photos", "A pest"], answer: 2, why: "Stitching software builds one map from overlapping photos." },
          { q: "Your stitched map has holes and bent rows. The most likely cause is:", options: ["Too little overlap or poor photos", "Too much battery", "The farmer's phone", "Too much sun on the screen"], answer: 0, why: "Stitching needs plenty of sharp, overlapping photos." },
          { q: "Which is the NDVI formula?", options: ["(Red + Blue) / 2", "NIR x Red", "Green - Blue", "(NIR - Red) / (NIR + Red)"], answer: 3, why: "NDVI compares near-infrared and red light." },
          { q: "What is QGIS?", options: ["A paid drone", "Free, open-source GIS software for maps", "A pesticide", "A phone network"], answer: 1, why: "QGIS is free software used to make and analyse maps." },
          { q: "In your report, a farmer asks which pesticide to spray on zone 2. You should:", options: ["Guess one from the map", "Send them to an extension officer, agrovet or plant clinic and the label", "Tell them to spray double", "Say nothing"], answer: 1, why: "Chemical advice needs a confirmed diagnosis and qualified advice." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Drones for Agricultural Monitoring 3: Crop Health, Pests and Data Processing",
    questions: [
      { q: "NDVI values range from:", options: ["-100 to 0", "-1 to +1", "0 to 100", "1 to 10"], answer: 1, why: "NDVI is a ratio between -1 and +1." },
      { q: "On an NDVI map, the first thing to read is:", options: ["The file size", "The legend", "The drone's name", "The weather"], answer: 1, why: "The legend says which colours mean low and high values." },
      { q: "A patch has stayed the same for three maps. A new patch is spreading. Which matters more?", options: ["The old patch", "Neither", "The spreading patch", "Both are equally urgent"], answer: 2, why: "A spreading patch suggests an active problem." },
      { q: "Weak crop along one edge next to a neighbour's field may come from:", options: ["Too much overlap", "The legend", "The drone battery", "Pests or spray drift from that side"], answer: 3, why: "Edge patterns often point to something coming from outside the field." },
      { q: "Low, wet dips with weak crop most likely show:", options: ["Waterlogging", "Too much sun", "A good harvest", "A broken camera"], answer: 0, why: "Water collects in dips and harms roots." },
      { q: "A drone map pattern is:", options: ["A final diagnosis", "A clue that needs checking on the ground", "Always a pest", "Always a disease"], answer: 1, why: "Patterns show where to look; ground checks find the cause." },
      { q: "FAO's FAMEWS app was made to record:", options: ["Rainfall", "Market prices", "Fall armyworm sightings", "Drone flights"], answer: 2, why: "FAMEWS is FAO's Fall Armyworm Monitoring and Early Warning System." },
      { q: "Ground-truthing means:", options: ["Flying lower", "Buying new software", "Cleaning the lens", "Checking on the ground what the map shows"], answer: 3, why: "You visit the spot to see what is really there." },
      { q: "During a ground check you should look at:", options: ["Leaves top and underside, stems, roots, soil and insects", "Only the top of one leaf", "Only the sky", "Only the drone"], answer: 0, why: "A full check finds pests, disease and soil problems." },
      { q: "Why record findings the same way every time?", options: ["It is required by the drone", "It makes records comparable and helps experts", "To fill time", "It makes photos sharper"], answer: 1, why: "Consistent records help compare and confirm causes." },
      { q: "Coordinates are:", options: ["Colours on a map", "The drone's speed", "Latitude and longitude numbers for an exact place", "A type of crop"], answer: 2, why: "They let you find the exact zone again." },
      { q: "OpenDroneMap is:", options: ["A drone brand", "A pesticide", "A satellite", "Free, open-source software to stitch drone photos"], answer: 3, why: "OpenDroneMap and WebODM turn photos into maps for free." },
      { q: "Before processing photos you should:", options: ["Name the folder and back it up", "Delete half the photos", "Rename every photo by hand", "Turn off the computer"], answer: 0, why: "Good naming and a backup prevent lost data." },
      { q: "A GeoTIFF is:", options: ["A video format", "An image that carries its location on earth", "A drone part", "A text message"], answer: 1, why: "Map software uses the built-in location to place it." },
      { q: "In QGIS, NDVI is calculated with the:", options: ["Print tool", "Email button", "Raster Calculator", "Volume control"], answer: 2, why: "The Raster Calculator does maths on image bands." },
      { q: "With only a colour camera, a greenness index is:", options: ["Exactly the same as NDVI", "Impossible", "Better than NDVI", "A rough guide, less reliable than NDVI"], answer: 3, why: "RGB indices lack near-infrared, so they are a rough guide." },
      { q: "A layer in GIS is:", options: ["One set of map data shown on top of others", "A drone battery", "A crop disease", "A legal document"], answer: 0, why: "Boundaries, points and images are each a layer." },
      { q: "A good field action report is:", options: ["Twenty pages of numbers", "One page, plain words, with a map and next steps", "Only the raw photos", "Only the NDVI formula"], answer: 1, why: "Busy farmers need a short, clear plan." },
      { q: "Which should NOT be in your report?", options: ["The date and crop stage", "Numbered zones", "A pesticide and dose chosen from the map alone", "Who to contact"], answer: 2, why: "Chemical advice needs a confirmed diagnosis from a qualified source." },
      { q: "Why agree a date for the next flight?", options: ["To use up batteries", "Because the law says weekly", "To sell more flights", "To see whether the action worked"], answer: 3, why: "A follow-up map shows whether the problem is fixed." }
    ]
  }
};
