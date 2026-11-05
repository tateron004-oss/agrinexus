"use strict";

// Koach Learn course (Igbo translation of agriculture-africa/agri-drones-programs.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

const ODPC = { name: "Office of the Data Protection Commissioner (Kenya)", url: "https://www.odpc.go.ke" };
const NDPC = { name: "Nigeria Data Protection Commission (NDPC)", url: "https://ndpc.gov.ng" };
const QGIS = { name: "QGIS (free, open-source GIS)", url: "https://qgis.org/" };
const COPERNICUS = { name: "Copernicus Browser (free Sentinel satellite images)", url: "https://browser.dataspace.copernicus.eu/" };
const FAO_ITU_DRONES = { name: "FAO and ITU: E-agriculture in Action: Drones for Agriculture (2018)", url: "https://www.itu.int/pub/D-STR-E_AGRICULT.02-2018" };
const KCAA_UAS = { name: "Kenya Civil Aviation Authority (KCAA): Unmanned Aircraft Systems", url: "https://www.kcaa.or.ke/safety-security-oversight/unmanned-aircraft-systems" };
const NCAA_P21 = { name: "Nigeria Civil Aviation Authority (NCAA): Nig.CARs 2023 Part 21, Remotely Piloted Aircraft Systems", url: "https://www.ncaa.gov.ng/documents/regulations/nig-cars-2023/part-21-remotely-piloted-aircraft-system-rpas/" };

module.exports = {
  id: "agri-drones-programs-ig",
  lang: "ig",
  translationOf: "agri-drones-programs",
  category: "Agriculture (Africa)",
  name: "Drone maka Nlekọta Ugbo 5: Ijikọ Data, GIS na Ịhazi Mmemme",
  skills: "Ịhazi na ichekwa data drone n'ebe ọzọ, Ijikọ maapụ drone na layer GIS na foto satellite, Ichebe data ndị ọrụ ugbo na inweta nkwenye ha, Ịkọwa ebumnuche mmemme nlekọta na ndị ọ ga-erite uru, Ịhazi otu ndị ọrụ, ngwaọrụ, usoro oge na mmefu ego, Ịtụ na ịkọ ihe si na ya pụta",
  outcome: "ịhazi mmemme nlekọta ugbo site na drone maka otu ndị ọrụ ugbo: ebumnuche ya, ndị ọ ga-erite uru, atụmatụ data ya na GIS na nchedo data, otu ndị ọrụ, usoro oge, mmefu ego, otu ọ ga-esi kwụọ onwe ya ụgwọ, na otu ị ga-esi tụọ ma kọọ ihe si na ya pụta.",
  about: [
    "Nke a bụ Ihe ọmụmụ 5 nke usoro nlekọta site na drone. Ọ bụ maka ndị njikwa extension, ndị ndu cooperative na otu ndị ọrụ ugbo, ndị ọrụ ugbo nke county na steeti, ndị na-elekọta mmemme NGO, ndị njikwa azụmahịa ugbo na ndị na-enye ọrụ drone na Kenya, Nigeria na n'Afrịka niile, bụ ndị chọrọ iji drone lekọta ọtụtụ ugbo, ọ bụghị naanị otu.",
    "Isi 1 gbasara data: ịkpọ aha, ichekwa na idebe data drone n'ebe ọzọ; itinye maapụ drone, oke ugbo, foto satellite na ndekọ ugbo ọnụ na GIS; na ichebe ozi nzuzo ndị ọrụ ugbo n'okpuru iwu dị ka Data Protection Act 2019 nke Kenya na Nigeria Data Protection Act 2023. Isi 2 gbasara ịhazi mmemme: ịmalite site n'ezi nsogbu na ezi ndị ọ ga-erite uru, ịhazi ndị mmadụ, ngwaọrụ, ịfe drone na ego, na igosi na mmemme ahụ na-arụ ọrụ.",
    "Na njedebe, ị ga-enwe atụmatụ mmemme ị nwere ike igosi ndị isi cooperative, ọfịs county ma ọ bụ steeti, onye na-enye onyinye ma ọ bụ onye na-etinye ego. E nwere nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe."
  ],
  finalTask: "Dee atụmatụ mmemme nlekọta site na drone, peeji abụọ, maka cooperative nwere obere ndị ọrụ ugbo 200 (dịka ọmụmaatụ ọka na agwa na Trans Nzoia, kọfị na Nyeri, ma ọ bụ akpụ na Ogun State): nsogbu na ebumnuche, ndị ọ ga-erite uru na ihe onye ọ bụla ga-enweta, atụmatụ data (nchekwa, layer GIS, iji satellite, nkwenye na nchedo data), otu ndị ọrụ na ngwaọrụ, usoro ịfe drone maka otu oge ọkụkọ, obere mmefu ego na otu a ga-esi kwụọ ụgwọ ọrụ ahụ, ihe a ga-eji tụọ ọganihu, na otu a ga-esi kọọ ihe si na ya pụta.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị njikwa extension, ndị ndu cooperative na otu ndị ọrụ ugbo, ndị ọrụ ugbo nke county na steeti, ndị na-elekọta mmemme NGO, ndị njikwa azụmahịa ugbo na ndị na-enye ọrụ drone na Kenya, Nigeria na n'Afrịka niile, bụ ndị chọrọ iji drone lekọta ọtụtụ ugbo.",
    startingPoint: "Ndị na-amụ ihe nwere ike ime ma gụọ maapụ drone, ha ahụkwala ọrụ drone n'otu ugbo (Ihe ọmụmụ 1 ruo 4). Ole na ole haziri data site n'ọtụtụ narị ugbo, jikọta maapụ drone na foto satellite na ndekọ na GIS, jiri ozi nzuzo ndị ọrụ ugbo rụọ ọrụ n'okpuru iwu, ma ọ bụ hazie ma mee mmefu ego maka mmemme na-adịgide karịa onyinye (grant).",
    gap: "Ọtụtụ ọrụ drone na-amalite site na drone kama nsogbu, na-efu data, na-emejọ ozi nzuzo ndị ọrụ ugbo ma ọ bụ na-akwụsị mgbe onyinye gwụrụ. Atụmatụ mmemme doro anya nwere atụmatụ data, nkwenye, otu ndị ọrụ, usoro oge, mmefu ego na ihe a ga-eji tụọ ọganihu na-eme ka cooperative, county ma ọ bụ azụmahịa nwee ike ịgba ọrụ ndị ọrụ ugbo tụkwasịrị obi, nke na-akwụkwa onwe ya ụgwọ.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe; a na-akọwa okwu ọ bụla gbasara data na GIS",
      "Ngwaọrụ: kọmputa nwere QGIS n'efu na spreadsheet; data drone na satellite ma ọ bụ ọmụmaatụ",
      "Iwu: iwu nchedo data na-emetụta ya (Data Protection Act 2019 nke Kenya, Nigeria Data Protection Act 2023 ma ọ bụ iwu obodo onye na-amụ ihe)",
      "Iwu ụgbọ elu: ndị na-efe drone chọrọ akwụkwọ ikike, ụlọ ọrụ ahụ nwekwara ike ịchọ asambodo onye na-arụ ọrụ (operator certificate)",
      "Ọnụ ahịa na ụgwọ dị iche n'obodo n'obodo ma na-agbanwe: ndị na-amụ ihe na-eji ezi ọnụ ahịa nke ebe ha"
    ],
    prerequisites: "\"Drone maka Nlekọta Ugbo 4: Ọrụ Ugbo Ziri Ezi, Ihu Igwe na Nlekọta Anụ Ụlọ\", ma ọ bụ ahụmahụ yiri ya na maapụ drone."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Maka data drone site n'ọtụtụ ugbo", action: "ịhazi folda, iwu ịkpọ aha, ndekọ ịfe drone na nchekwa 3-2-1", standard: "site n'iji Farm ID kama aha, na ilele na nchekwa ndị ahụ na-emeghe" },
    { id: "O2", condition: "Mgbe e nyere gị maapụ drone, oke ugbo, foto satellite na ndekọ ugbo", action: "ịhazi ọrụ GIS nke na-etinye ha n'elu ibe ha ma jikọta ndekọ na ugbo site na ID", standard: "ebe layer ọ bụla na-eji otu coordinate system" },
    { id: "O3", condition: "Mgbe mmemme na-anakọta ozi nzuzo ndị ọrụ ugbo", action: "ide okwu nkwenye na nzọụkwụ nchedo data ndị na-agbaso iwu", standard: "na-ekwu ihe a na-anakọta, ihe mere, onye ga-ahụ ya, ogologo oge a ga-edebe ya, na na ndị ọrụ ugbo nwere ike ịsị mba" },
    { id: "O4", condition: "Maka otu ndị ọrụ ugbo", action: "ide ebumnuche mmemme nwere nọmba na ụbọchị ma depụta ndị ọ ga-erite uru na ihe onye ọ bụla ga-enweta", standard: "na-amalite site na nsogbu ndị ahụ na-eche banyere ya ma nwee ike ime ihe banyere ya" },
    { id: "O5", condition: "Maka otu oge ọkụkọ nke mmemme ahụ", action: "ịhazi otu ndị ọrụ, ngwaọrụ, usoro ịfe drone na mmefu ego, na otu a ga-esi kwụọ ụgwọ ọrụ ahụ", standard: "gụnyere akwụkwọ ikike, ụgwọ a na-akwụ otu ugboro na ụgwọ na-aga n'ihu, na atụmatụ maka mgbe onyinye ọ bụla gwụrụ" },
    { id: "O6", condition: "Na njedebe oge ọkụkọ", action: "ịhọrọ ihe a ga-eji tụọ ọganihu ma kọọrọ onye ọ bụla ga-erite uru ihe si na ya pụta", standard: "e tụnyere ya na baseline, na-ekwukwa eziokwu banyere ihe na-arụghị ọrụ" }
  ],
  chapters: [
    {
      name: "Isi 1: Njikwa na njikọ data",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ịhazi, ichekwa na idebe data drone n'ebe ọzọ",
          minutes: 5,
          goal: "Hazie folda, ịkpọ aha na nchekwa maka data drone site n'ọtụtụ ugbo.",
          text: [
            "Otu ịfe drone maka maapụ nwere ike iwepụta ọtụtụ narị foto na ọtụtụ maapụ buru ibu. N'ugbo 200 na n'otu oge ọkụkọ niile, ọ na-aghọ ọtụtụ puku faịlụ. Ọ bụrụ na enweghị usoro, data na-efu, na-agwakọta ma ọ bụ a na-ede ihe ọhụrụ n'elu ya, mmemme ahụ ewee tụfuo ntụkwasị obi.",
            "Jiri otu usoro folda doro anya na otu iwu ịkpọ aha maka onye ọ bụla: dịka ọmụmaatụ Mmemme / Farm ID / Field ID / Ụbọchị / raw, processed, reports. Jiri nọmba Farm ID kama aha onye ọrụ ugbo n'aha faịlụ. Debe obere ndekọ (spreadsheet) nke ịfe drone ọ bụla: ụbọchị, Farm ID, ubi, onye fere ya, drone, faịlụ, e haziri ya ee ma ọ bụ mba.",
            "Gbasoo echiche nchekwa 3-2-1: mbipụta atọ, n'ụdị ebe nchekwa abụọ dị iche (dịka ọmụmaatụ kọmputa na external drive), ebe otu mbipụta dị n'ebe ọzọ ma ọ bụ na cloud a tụkwasịrị obi. Lelee na nchekwa ndị ahụ na-emeghe. Kpebie ogologo oge ị ga-edebe foto raw, n'ihi na ha na-ejupụta ebe nchekwa ngwa ngwa."
          ],
          steps: ["Kwekọrịta otu usoro folda na otu iwu ịkpọ aha maka otu ndị ọrụ niile.", "Nye ugbo na ubi ọ bụla nọmba ID; ewepụ aha n'aha faịlụ.", "Debe spreadsheet ndekọ ịfe drone.", "Chekwaa: mbipụta atọ, ụdị ebe nchekwa abụọ, otu n'ebe ọzọ.", "Kpebie ogologo oge a ga-edebe foto raw."],
          words: [["Data raw", "foto na ndekọ mbụ ndị si na drone ozugbo."], ["Nchekwa (backup)", "mbipụta ọzọ nke data e debere ma ọ bụrụ na nke mbụ efuo."], ["Ndekọ (register)", "ndepụta na-edekọ ịfe drone ọ bụla na faịlụ ya."]],
          slides: [
            { title: "Data na-eto ngwa ngwa", bullets: ["Ọtụtụ narị foto n'otu ịfe drone", "Ọtụtụ puku faịlụ n'otu oge ọkụkọ", "Data furu efu ma ọ bụ gwakọtara na-ewepụ ntụkwasị obi"] },
            { title: "Otu usoro maka onye ọ bụla", bullets: ["Mmemme / Farm ID / Field ID / Ụbọchị", "Raw, processed, reports", "ID, ọ bụghị aha, n'aha faịlụ"] },
            { title: "Debe ndekọ ịfe drone", bullets: ["Ụbọchị, ugbo, ubi, onye fere ya, drone", "Faịlụ na ma e haziri ha"] },
            { title: "Nchekwa 3-2-1", bullets: ["Mbipụta atọ", "Ụdị ebe nchekwa abụọ", "Otu mbipụta n'ebe ọzọ"] }
          ],
          tryIt: "Mepụta usoro folda na kọmputa ma ọ bụ ekwentị gị maka mmemme ọmụmaatụ nwere ugbo atọ, ma malite spreadsheet ndekọ ịfe drone nwere kọlụm ndị dị na nkuzi a. Tinye ịfe drone ọmụmaatụ abụọ.",
          youCanNow: "ịhazi, idekọ na ichekwa data drone maka mmemme nwere ọtụtụ ugbo.",
          quickCheck: [
            { objective: "O1", q: "Gịnị mere a ga-eji kpebie ogologo oge a ga-edebe foto raw?", options: ["Iwu machibidoro idebe foto raw", "Ndị ọrụ ugbo na-arịọ ha kwa ụbọchị", "Foto raw na-ejupụta ebe nchekwa ngwa ngwa", "A pụghị iji ha mee maapụ"], answer: 2, why: "Foto raw na-ejupụta ebe nchekwa ngwa ngwa, ya mere mmemme ahụ na-ekpebi ogologo oge a ga-edebe ha." },
            { objective: "O1", q: "Ndị na-efe drone abụọ na-akpọ faịlụ otu ugbo ahụ aha n'ụzọ dị iche. Gịnị ka ị ga-eme?", options: ["Kwekọrịta otu usoro folda na otu iwu ịkpọ aha maka onye ọ bụla", "Hapụ onye ọ bụla ka o jiri usoro nke ya", "Jiri aha onye ọrụ ugbo na faịlụ ọ bụla", "Hichapụ faịlụ ndị ochie"], answer: 0, why: "Otu usoro folda na otu iwu ịkpọ aha doro anya maka onye ọ bụla na-egbochi data ifu efu ma ọ bụ ịgwakọta." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ijikọ maapụ drone na GIS, satellite na ndekọ ugbo",
          minutes: 6,
          goal: "Mee ọrụ GIS nke na-etinye maapụ drone, oke ugbo, foto satellite na ndekọ ugbo n'elu ibe ha.",
          text: [
            "GIS na-ekwe ka ị tinye ụdị data dị iche iche n'elu ibe ha n'otu maapụ. Maka mmemme, layer ndị dị n'okpuru bụ oke ubi (e jiri GPS ekwentị gaa gburugburu ya ma ọ bụ e sere ya na maapụ drone) na ntụpọ ugbo. N'elu ha ka orthomosaic drone na maapụ NDVI, foto satellite n'efu, na ndekọ dị ka ụbọchị a kụrụ ihe, ụdị mkpụrụ, ihe e tinyere n'ugbo na owuwe ihe ubi na-aga.",
            "Foto satellite Sentinel-2 n'efu, nke ị nwere ike ilele na Copernicus Browser, na-abịa kwa ụbọchị ole na ole, ihe dị ka mita 10 n'otu pixel. Ha adịghị nkọ nke ọma iji hụ otu osisi, mana ha dị mma maka ilekọta ugbo 200 niile n'etiti ịfe drone. Jiri satellite kpebie ugbo ndị chọrọ nleta drone, jirikwa drone hụ ihe n'ụzọ zuru ezu.",
            "Jikọta ndekọ na ubi site na Field ID, ka i nwee ike ịjụ ajụjụ dị ka: ubi ndị nwetara ndụmọdụ drone ọ̀ wetara ihe ubi karịa? QGIS nwere ike ijikọ spreadsheet na layer ubi site na ID. Jiri otu coordinate system maka layer ọ bụla, ma ọ bụghị ya ha agaghị adaba n'elu ibe ha."
          ],
          steps: ["Mee layer oke ubi nwere Field ID maka ubi ọ bụla.", "Tinye maapụ drone nke ubi ndị i fere drone n'elu ha.", "Tinye foto satellite n'efu nke mpaghara ahụ maka otu oge ahụ.", "Jikọta spreadsheet ndekọ gị na layer ubi site na Field ID.", "Lelee na layer ọ bụla dabara (otu coordinate system)."],
          words: [["Oke ubi (field boundary)", "ụdị a na-ese na maapụ nke na-egosi oke ubi."], ["Sentinel-2", "satellite abụọ nke Europe nke foto ha bụ n'efu; ihe dị ka mita 10 n'otu pixel."], ["Njikọ (join)", "ijikọ tebụl na ụdị dị na maapụ site n'iji otu ID ha nwekọrọ."], ["Coordinate system", "iwu maapụ na-eji etinye ihe n'ụwa; layer ga-enwerịrị otu ka ha dabaa."]],
          slides: [
            { title: "Tinye layer gị n'elu ibe ha", bullets: ["Oke ubi na ntụpọ ugbo", "Maapụ drone na NDVI", "Foto satellite", "Ndekọ ịkụ ihe, ihe e tinyere, owuwe ihe ubi"] },
            { title: "Satellite na drone", bullets: ["Sentinel-2: n'efu, kwa ụbọchị ole na ole, ihe dị ka 10 m", "Lekọta ugbo niile n'etiti ịfe drone", "Ziga drone ebe a chọrọ nkọwa zuru ezu"] },
            { title: "Jikọta ndekọ site na Field ID", bullets: ["Jikọta spreadsheet na ubi na QGIS", "Jụọ: ubi e nyere ndụmọdụ ọ̀ wetara ihe karịa?", "Otu coordinate system maka layer niile"] }
          ],
          sources: [QGIS, COPERNICUS],
          tryIt: "Meghee Copernicus Browser ma chọta mpaghara gị. Wee na QGIS, see oke ubi ọmụmaatụ abụọ, nye ha Field ID, ma jikọta obere spreadsheet nwere ụbọchị a kụrụ ihe na ụdị mkpụrụ maka nke ọ bụla.",
          youCanNow: "ijikọ maapụ drone, foto satellite, oke ubi na ndekọ ugbo n'otu ọrụ GIS.",
          quickCheck: [
            { objective: "O2", q: "Gịnị ka GIS na-ekwe ka i mee?", options: ["Ịfe drone n'onwe ya", "Itinye ụdị data dị iche iche n'elu ibe ha n'otu maapụ", "Ịchaji batrị ngwa ngwa", "Ịkwụ ndị ọrụ ugbo ụgwọ site na mobile money"], answer: 1, why: "GIS na-etinye layer dị ka oke ubi, maapụ drone, foto satellite na ndekọ n'elu ibe ha n'otu maapụ." },
            { objective: "O2", q: "Cooperative chọrọ ilekọta ugbo 200 niile kwa izu mana o nwere naanị otu drone. Gịnị ka ị ga-ahazi?", options: ["Fee ugbo ọ bụla kwa ụbọchị", "Hapụ nlekọta", "Fee naanị ugbo onye isi oche", "Jiri foto satellite n'efu lekọta ugbo niile ma ziga drone ebe ha gosiri nsogbu"], answer: 3, why: "Satellite na-elekọta ugbo niile n'etiti ịfe drone; drone na-enye nkọwa zuru ezu ebe a chọrọ ya." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ichebe data ndị ọrụ ugbo na inweta nkwenye",
          minutes: 5,
          goal: "Nakọta ma jiri data ndị ọrụ ugbo dị ka iwu si kwuo, site na nkwenye doro anya na nchekwa dị mma.",
          text: [
            "Mmemme nlekọta na-ejide ozi nzuzo: aha, nọmba ekwentị, nọmba mobile money, ebe ugbo dị, ihe ubi a wetara na foto ụlọ. Iwu nchedo data na-emetụta ya. Na Kenya, Office of the Data Protection Commissioner (ODPC) na-elekọta Data Protection Act 2019, ọ na-edebanyekwa aha data controllers na processors. Na Nigeria, Nigeria Data Protection Commission (NDPC) na-elekọta Nigeria Data Protection Act 2023. Obodo ndị ọzọ nwere iwu nke ha. Lelee ma ụlọ ọrụ gị ga-edebanye aha na ihe iwu ahụ chọrọ.",
            "Nweta nkwenye doro anya n'asụsụ onye ọrụ ugbo: ihe ị na-anakọta, ihe mere, onye ga-ahụ ya, ogologo oge ị ga-edebe ya, na na ha nwere ike ịsị mba ma ọ bụ rịọ ka e wepụ ya. Nakọta naanị ihe ị chọrọ. Ekesala data nye ndị na-azụ ihe, ndị na-agbazinye ego ma ọ bụ ndị ọzọ na-enweghị ikike.",
            "Chekwaa data nke ọma: okwuntughe na kọmputa na ekwentị, ọ bụ naanị ndị kwesịrị ekwesị na-ahụ ya, ma debe ozi nzuzo iche na maapụ ebe ọ ga-ekwe omume. Ndị ọrụ ugbo kwesịrị irite uru na data nke ha, dị ka maapụ na akụkọ ha, ọ bụghị naanị inye ya n'efu."
          ],
          steps: ["Depụta ozi nzuzo mmemme ahụ ga-ejide.", "Lelee iwu nchedo data obodo gị ma ị ga-edebanye aha.", "Dee obere okwu nkwenye n'asụsụ onye ọrụ ugbo.", "Nakọta naanị ihe ị chọrọ; chekwaa ya site n'okwuntughe na ndị ole na ole na-ahụ ya.", "Nye ndị ọrụ ugbo maapụ na akụkọ nke ha."],
          words: [["Ozi nzuzo (personal data)", "ozi gbasara mmadụ a pụrụ ịmata, dị ka aha, nọmba ekwentị ma ọ bụ ebe ugbo dị."], ["Nkwenye (consent)", "ee doro anya site n'aka mmadụ, mgbe ọ ghọtara ihe ga-eme data ya."], ["Data controller", "ụlọ ọrụ na-ekpebi ihe mere na otu a ga-esi jiri ozi nzuzo."]],
          slides: [
            { title: "Mmemme gị na-ejide ozi nzuzo", bullets: ["Aha, ekwentị, nọmba mobile money", "Ebe ugbo dị, ihe ubi a wetara, foto"] },
            { title: "Iwu na-emetụta ya", bullets: ["Kenya: Data Protection Act 2019, ODPC", "Nigeria: Data Protection Act 2023, NDPC", "Obodo ndị ọzọ: iwu nke ha"] },
            { title: "Nkwenye na data dị mkpa naanị", bullets: ["Gịnị, gịnị mere, onye na-ahụ ya, ruo ole oge", "Ndị ọrụ ugbo nwere ike ịsị mba", "Nakọta naanị ihe ị chọrọ"] },
            { title: "Chekwaa ya, mee ihe ziri ezi", bullets: ["Okwuntughe, ndị ole na ole na-ahụ ya", "Ọ dịghị ikesa na-enweghị ikike", "Ndị ọrụ ugbo na-enweta maapụ nke ha"] }
          ],
          sources: [ODPC, NDPC],
          tryIt: "Dee okwu nkwenye nwere ahịrịokwu ise maka ndị ọrụ ugbo na-abanye na mmemme nlekọta drone, n'okwu dị mfe (na n'asụsụ obodo ma ọ bụrụ na ị nwere ike): ihe ị na-anakọta, ihe mere, onye ga-ahụ ya, ogologo oge ị ga-edebe ya, na otu ha ga-esi sị mba.",
          youCanNow: "ịnakọta na iji data ndị ọrụ ugbo site na nkwenye, na-agbaso iwu nchedo data obodo gị.",
          quickCheck: [
            { objective: "O3", q: "Na Kenya, ònye ka ODPC na-edebanye aha?", options: ["Ndị na-efe drone", "Ndị na-ere mkpụrụ", "Naanị ndị na-azụ ihe ubi", "Data controllers na processors"], answer: 3, why: "ODPC nke Kenya na-edebanye aha data controllers na processors n'okpuru Data Protection Act 2019." },
            { objective: "O3", q: "Otu nwanyị na-arụ ọrụ ugbo rịọrọ gị ka i wepụ data ya na mmemme ahụ. Gịnị ka ị ga-eme?", options: ["Jụ, n'ihi na data ahụ bụ nke mmemme", "Sọpụrụ arịrịọ ya ma wepụ ya, dị ka okwu nkwenye kwuru na o nwere ike", "Buru ụzọ ree ya, wee wepụ ya", "Leghara arịrịọ ahụ anya"], answer: 1, why: "Okwu nkwenye na-agwa ndị ọrụ ugbo na ha nwere ike ịsị mba ma ọ bụ rịọ ka e wepụ data ha." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Njikwa na njikọ data",
        questions: [
          { objective: "O1", q: "Gịnị mere a ga-eji jiri Farm ID kama aha ndị ọrụ ugbo n'aha faịlụ?", options: ["Aha dị ogologo nke ukwuu", "Ọ na-echebe ozi nzuzo ma na-eme ka ịkpọ aha bụrụ otu", "Sọftwia apụghị ịgụ aha", "Drone chọrọ ya"], answer: 1, why: "ID na-echebe ozi nzuzo ma na-eme ka faịlụ dị n'usoro." },
          { objective: "O1", q: "Echiche nchekwa 3-2-1 pụtara:", options: ["Mbipụta atọ, ụdị ebe nchekwa abụọ, otu n'ebe ọzọ", "Drone atọ, ndị na-efe ya abụọ, otu ugbo", "Chekwaa otu ugboro n'afọ atọ ọ bụla", "Hichapụ mbipụta abụọ"], answer: 0, why: "Ọtụtụ mbipụta n'ebe dị iche iche na-echebe ya pụọ n'ifu efu." },
          { objective: "O2", q: "Ụzọ kacha mma isi jiri foto Sentinel-2 n'efu na mmemme bụ:", options: ["Ịgụ otu osisi n'otu n'otu", "Ịnọchi anya ịfe drone niile", "Ịgụ aha ndị ọrụ ugbo", "Ilekọta ugbo niile n'etiti ịfe drone na ịhọrọ ebe a ga-eziga drone"], answer: 3, why: "N'ihe dị ka mita 10, ha na-egosi ụdị ihe n'ozuzu, ọ bụghị otu osisi." },
          { objective: "O2", q: "Layer maapụ abụọ adabaghị n'elu ibe ha. Ihe nwere ike ịkpata ya bụ:", options: ["Mkpuchi karịrị akarị", "Ekwentị onye ọrụ ugbo", "Coordinate system dị iche iche", "Ugbo karịrị akarị"], answer: 2, why: "Layer ga-enwerịrị otu coordinate system ka ha dabaa." },
          { objective: "O3", q: "Ònye na-elekọta nchedo data na Kenya?", options: ["Office of the Data Protection Commissioner (ODPC)", "KCAA", "Onye na-ere drone", "Ụlọ omebe iwu county"], answer: 0, why: "ODPC na-elekọta Data Protection Act 2019 nke Kenya." }
        ]
      }
    },
    {
      name: "Isi 2: Ịhazi mmemme nlekọta site na drone",
      lessons: [
        {
          objectives: ["O4"],
          title: "Malite site na nsogbu na ndị ọ ga-erite uru",
          minutes: 5,
          goal: "Dee ebumnuche mmemme doro anya ma depụta ndị ọ ga-erite uru na ihe onye ọ bụla ga-enweta.",
          text: [
            "Ọtụtụ ọrụ drone na-ada n'ihi na ha na-amalite site na drone, ọ bụghị nsogbu. Malite site na nsogbu ndị ọrụ ugbo na ndị ha na ha na-arụkọ ọrụ na-eche banyere ya ma nwee ike ime ihe banyere ya: ịhụ fall armyworm (ụmụ ahụhụ na-eri ọka) n'oge na-adịghị na cooperative ọka, ogo tii na-adịghị otu n'ugbo dị iche iche, akpụ na-adịghị eto nke ọma n'ugbo ndị outgrower, ma ọ bụ mmebi idei mmiri n'ugbo osikapa.",
            "Dee otu ahịrịokwu ebumnuche nwere nọmba na ụbọchị, dịka ọmụmaatụ: Ka ọ na-erule njedebe oge mmiri ozuzo ogologo (long rains) 2027, chọta ebe fall armyworm juru n'ugbo ndị otu 200 n'ime otu izu mmebi mbụ, ma nyefee onye ọrụ ugbo ọ bụla o metụtara ndụmọdụ e kwenyere n'ime ụbọchị atọ.",
            "Depụta ndị ọ ga-erite uru na ihe onye ọ bụla ga-enweta: ndị ọrụ ugbo (maapụ na ndụmọdụ dị mfe n'ekwentị ha), ndị ọrụ extension (ebe a ga-ebu ụzọ gaa), ndị isi cooperative (nchịkọta oge ọkụkọ), ndị na-azụ ihe ma ọ bụ ndị na-emezi ihe ubi (ọnụ ọgụgụ a na-atụ anya ya, na-enweghị ozi nzuzo ma ọ bụrụ na ndị ọrụ ugbo ekweghị), na ọfịs ọrụ ugbo nke county ma ọ bụ steeti ma ọ bụrụ na ọ bụ onye mmekọ."
          ],
          steps: ["Kpọọ aha nsogbu ahụ n'otu ahịrịokwu.", "Lelee na ndị ọ ga-erite uru na-eche banyere ya ma nwee ike ime ihe banyere ya.", "Dee otu ebumnuche nwere nọmba na ụbọchị.", "Depụta otu ndị ọ ga-erite uru ọ bụla na ihe ọ na-enweta, na n'ụdị ole."],
          words: [["Mmemme (program)", "ọrụ a haziri ahazi nke na-aga n'ihu ruo oge maka ọtụtụ mmadụ, ọ bụghị naanị otu ịfe drone."], ["Onye ga-erite uru (user)", "onye ma ọ bụ otu na-anata ihe mmemme ahụ wepụtara ma mee ihe na ya."]],
          slides: [
            { title: "Nsogbu na mbụ, drone na nke abụọ", bullets: ["Nsogbu ndị mmadụ na-eche banyere ya", "Ma nwee ike ime ihe banyere ya"] },
            { title: "Ebumnuche nwere nọmba na ụbọchị", bullets: ["Chọta ebe FAW juru n'ugbo 200", "N'ime otu izu mmebi mbụ", "Ndụmọdụ n'ime ụbọchị atọ"] },
            { title: "Ndị ọ ga-erite uru na ihe ha ga-enweta", bullets: ["Ndị ọrụ ugbo: maapụ na ndụmọdụ dị mfe n'ekwentị", "Extension: ebe a ga-ebu ụzọ gaa", "Ndị isi na ndị mmekọ: nchịkọta oge ọkụkọ"] }
          ],
          tryIt: "Dee nsogbu ahụ, otu ahịrịokwu ebumnuche nwere nọmba na ụbọchị, na tebụl nke opekata mpe otu ndị ọ ga-erite uru anọ na ihe onye ọ bụla ga-anata, maka mmemme ị nwere ike ịgba.",
          youCanNow: "ịkọwa nsogbu, ebumnuche na ndị ga-erite uru na mmemme drone n'ụzọ doro anya.",
          quickCheck: [
            { objective: "O4", q: "Gịnị na-eme ka ebumnuche mmemme doo anya?", options: ["Otu ahịrịokwu nwere nọmba na ụbọchị", "Ndepụta ogologo nke ihe niile drone nwere ike ime", "Aha ụdị drone ahụ", "Foto ugbo ahụ"], answer: 0, why: "Ebumnuche doro anya bụ otu ahịrịokwu nwere nọmba na ụbọchị, ka ị mara mgbe e mezuru ya." },
            { objective: "O4", q: "Otu onye isi cooperative chọrọ ibu ụzọ zụta drone, ma chọta ihe a ga-eji ya mee ma emechaa. Gịnị ka ị ga-adụ ya ọdụ?", options: ["Zụta drone kacha ọnụ", "Zụta drone ma kpebie n'afọ ọzọ", "Malite site na nsogbu ndị ọrụ ugbo na-eche banyere ya ma nwee ike ime ihe banyere ya", "Jụọ onye na-ere drone ihe a ga-eme"], answer: 2, why: "Ọtụtụ ọrụ drone na-ada n'ihi na ha na-amalite site na drone, ọ bụghị nsogbu." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ịhazi ndị mmadụ, ngwaọrụ, usoro oge na ego",
          minutes: 6,
          goal: "Hazie otu ndị ọrụ, ngwaọrụ, usoro ịfe drone na mmefu ego maka otu oge ọkụkọ.",
          text: [
            "Ndị mmadụ: ndị na-efe drone nwere akwụkwọ ikike (licensed remote pilots) na ndị na-ele anya, onye ga-ahazi ma nyochaa data, ndị ọrụ extension ga-elele ihe n'ala ma nye ndụmọdụ, na onye nhazi. Ọ bụrụ na mmemme gị na-efe drone maka ndị ọzọ ma ọ bụ maka ụgwọ, ụlọ ọrụ gị nwere ike ịchọ operator certificate site n'aka ndị na-ahụ maka ụgbọ elu, onye ọ bụla na-efe drone chọkwara akwụkwọ ikike iwu gị chọrọ.",
            "Ngwaọrụ: drone (na otu nke ọzọ), batrị maka otu ụbọchị zuru ezu, chaja (ụzọ ịchaji site n'anyanwụ ma ọ bụ ụgbọala ebe ọkụ anaghị adị mgbe niile), kọmputa nwere ike ịhazi maapụ, ebe nchekwa, ekwentị ma ọ bụ tablet, ihe nchebe na njem. Usoro oge: see kalenda ihe ọkụkụ ma kpebie ugboro ole a ga-efe drone n'ugbo ọ bụla n'otu oge ọkụkọ; chịkọta ugbo site na mpaghara ka otu ndị ọrụ nwee ike ileta ọtụtụ n'otu ụbọchị.",
            "Ego: depụta ụgwọ a na-akwụ otu ugboro (drone, kọmputa, ọzụzụ, akwụkwọ ikike na asambodo) na ụgwọ na-aga n'ihu (ndị ọrụ, njem, data bundle, nrụzi, insurance, ụgwọ ndị ọzọ). Wee kpebie otu a ga-esi kwụọ ya: ụgwọ n'acre ma ọ bụ n'hectare a na-anakọta site na mobile money, levy cooperative n'ihe a na-ebuga, onye na-azụ ihe ma ọ bụ onye na-emezi ihe ubi na-erite uru, onyinye gọọmentị ma ọ bụ onye na-enye onyinye maka oge mmalite. Hazie maka mgbe onyinye ahụ gwụrụ."
          ],
          steps: ["Depụta ọrụ ọ bụla na akwụkwọ ikike ma ọ bụ asambodo ọ chọrọ.", "Depụta ngwaọrụ, gụnyere ndị ọzọ e debere na ịchaji.", "See usoro oge ọkụkọ site na kalenda ihe ọkụkụ; chịkọta ugbo site na mpaghara.", "Depụta ụgwọ a na-akwụ otu ugboro na ụgwọ na-aga n'ihu.", "Họrọ otu a ga-esi kwụọ ụgwọ ọrụ ahụ, na otu ọ ga-esi gaa n'ihu mgbe onyinye ọ bụla gwụrụ."],
          words: [["Ụgwọ otu ugboro (one-off cost)", "ụgwọ a na-akwụ otu mgbe, dị ka ịzụta drone."], ["Ụgwọ na-aga n'ihu (running cost)", "ụgwọ na-alọghachi, dị ka njem na ụgwọ ndị ọrụ."], ["Levy", "obere ụgwọ a na-anakọta n'aka ndị otu, dịka ọmụmaatụ n'otu kilogram ọ bụla e bugara."]],
          slides: [
            { title: "Ndị mmadụ", bullets: ["Ndị na-efe drone nwere akwụkwọ ikike na ndị na-ele anya", "Onye na-ahazi ma nyochaa data", "Ndị ọrụ extension na onye nhazi", "Operator certificate ma ọ bụrụ na iwu gị chọrọ ya"] },
            { title: "Ngwaọrụ", bullets: ["Drone na nke ọzọ, batrị maka otu ụbọchị", "Ịchaji site n'anyanwụ ma ọ bụ ụgbọala", "Kọmputa, ebe nchekwa, ekwentị, njem"] },
            { title: "Usoro oge", bullets: ["Gbasoo kalenda ihe ọkụkụ", "Ugboro ole a ga-efe n'ugbo ọ bụla n'oge ọkụkọ", "Chịkọta ugbo site na mpaghara"] },
            { title: "Ego", bullets: ["Ụgwọ otu ugboro na ụgwọ na-aga n'ihu", "Ụgwọ n'hectare site na mobile money, levy, onye na-azụ ihe, onyinye", "Hazie maka mgbe onyinye gwụrụ"] }
          ],
          sources: [KCAA_UAS, NCAA_P21, FAO_ITU_DRONES],
          tryIt: "Maka mmemme gị site na Nkuzi 4, dee ndepụta otu ndị ọrụ, ndepụta ngwaọrụ, usoro oge ọkụkọ (izu ndị ị ga-efe drone na ebe ọ bụla) na obere tebụl mmefu ego nke ụgwọ otu ugboro na ụgwọ na-aga n'ihu, na otu a ga-esi kwụọ nke ọ bụla.",
          youCanNow: "ịhazi otu ndị ọrụ, ngwaọrụ, usoro oge na mmefu ego nke mmemme nlekọta drone.",
          quickCheck: [
            { objective: "O5", q: "Kedu nke bụ ụgwọ otu ugboro maka mmemme drone?", options: ["Njem kwa izu", "Data bundle kwa ọnwa", "Ịzụta drone na kọmputa", "Ụgwọ ọnwa ndị ọrụ"], answer: 2, why: "Ngwaọrụ dị ka drone na kọmputa bụ ụgwọ otu ugboro; njem, data na ụgwọ ọnwa bụ ụgwọ na-aga n'ihu." },
            { objective: "O5", q: "Onye ọrụ afọ ofufo kwuru na ya ga-efe drone maka mmemme ahụ mana o nweghị akwụkwọ ikike remote pilot. Gịnị ka ị ga-eme?", options: ["Ekwela ka o fee ruo mgbe o nwetara akwụkwọ ikike iwu chọrọ", "Kwe ka o fee naanị n'obere ugbo", "Kwe ka o fee ma ọ bụrụ na onye nhazi na-ele anya", "Kwe ka o fee na ngwụcha izu"], answer: 0, why: "Onye ọ bụla na-efe drone chọrọ akwụkwọ ikike iwu obodo ahụ chọrọ." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ịtụ ihe si na ya pụta na ịkọ akụkọ",
          minutes: 5,
          goal: "Họrọ ihe a ga-eji tụọ ọganihu ma kọọrọ ndị ọrụ ugbo na ndị mmekọ ihe si na ya pụta n'eziokwu.",
          text: [
            "Mmemme kwesịrị ịga n'ihu naanị ma ọ bụrụ na ọ na-eweta mgbanwe. Họrọ ihe ole na ole a ga-eji tụọ ya nke jikọtara na ebumnuche gị: ọsọ e ji chọta nsogbu, ndị ọrụ ugbo ole nwetara ndụmọdụ n'oge, ole mere ihe na ya, ihe ubi ma ọ bụ ogo e tụnyere ya na ugbo ma ọ bụ oge ọkụkọ na-enweghị mmemme ahụ, na ụgwọ n'otu ugbo.",
            "Nakọta baseline tupu ị malite (dịka ọmụmaatụ ihe ubi oge ọkụkọ gara aga ma ọ bụ oge e ji chọta nsogbu), ka i nwee ike itunyere. Jụkwa ndị ọrụ ugbo: ndụmọdụ ahụ ọ̀ doro anya ma baa uru, hà ga-akwụ ụgwọ maka ya? Azịza ha dị mkpa dị ka nọmba ndị ahụ.",
            "Kọọ akụkọ n'ụdị onye ọ bụla ga-eji: obere ozi nye ndị ọrụ ugbo, nchịkọta otu peeji na maapụ nye ndị isi, akụkọ zuru ezu karịa nye ndị mmekọ. Kwuo eziokwu banyere ihe na-arụghị ọrụ. Wee mee ka atụmatụ ahụ ka mma maka oge ọkụkọ ọzọ."
          ],
          steps: ["Họrọ ihe atọ ruo ise a ga-eji tụọ ya nke jikọtara na ebumnuche ahụ.", "Dekọọ baseline tupu mmemme ahụ amalite.", "Nakọta ihe ndị a tụrụ na echiche ndị ọrụ ugbo n'oge ọkụkọ.", "Kọọ akụkọ n'ụdị kwesịrị onye ọ bụla ga-erite uru.", "Depụta ihe a ga-eme ka ọ ka mma n'oge ọkụkọ ọzọ."],
          words: [["Baseline", "ọnọdụ tupu mmemme amalite, nke a na-eji atụnyere."], ["Ihe e ji atụ ọganihu (measure of success)", "nọmba na-egosi ma mmemme ahụ ruru ebumnuche ya."]],
          slides: [
            { title: "Tụọ ihe dị mkpa", bullets: ["Ọsọ e ji chọta nsogbu", "Ndị ọrụ ugbo nwetara ndụmọdụ n'oge, na ndị mere ihe", "Ihe ubi ma ọ bụ ogo ma e tụnyere ya na baseline", "Ụgwọ n'otu ugbo"] },
            { title: "Baseline na echiche ndị ọrụ ugbo", bullets: ["Dekọọ ebe ị malitere", "Jụọ ndị ọrụ ugbo: ọ̀ bara uru? ị ga-akwụ ụgwọ?"] },
            { title: "Kọọ akụkọ ma mee ka ọ ka mma", bullets: ["Obere ozi nye ndị ọrụ ugbo", "Otu peeji na maapụ nye ndị isi", "Kwuo eziokwu; mee ka ọ ka mma n'oge ọkụkọ ọzọ"] }
          ],
          tryIt: "Ọrụ ikpeazụ: dee atụmatụ mmemme gị, peeji abụọ, maka cooperative nwere obere ndị ọrụ ugbo 200: nsogbu na ebumnuche, ndị ọ ga-erite uru, atụmatụ data nwere GIS na nkwenye, otu ndị ọrụ na ngwaọrụ, usoro oge ọkụkọ, mmefu ego na otu a ga-esi kwụọ ụgwọ, ihe a ga-eji tụọ ọganihu na baseline, na ịkọ akụkọ.",
          youCanNow: "ịtụ, ịkọ akụkọ na ime ka mmemme nlekọta drone ka mma, na igosi atụmatụ mmemme zuru ezu.",
          quickCheck: [
            { objective: "O6", q: "Kedu nke bụ ọmụmaatụ baseline?", options: ["Ebumnuche oge ọkụkọ na-abịa", "Ihe ubi oge ọkụkọ gara aga ma ọ bụ oge e ji chọta nsogbu, e dekọrọ tupu ị malite", "Ọnụ ahịa drone ahụ", "Ụbọchị nzukọ ndị isi"], answer: 1, why: "Baseline bụ ọnọdụ tupu mmemme ahụ, ka e nwee ike itunyere ihe si na ya pụta." },
            { objective: "O6", q: "Ndị ọrụ ugbo kwuru na maapụ ndị ahụ ziri ezi mana ndụmọdụ ahụ siri ike ịghọta. Gịnị ka ị ga-eme?", options: ["Hapụ ya n'akụkọ", "Kọọ naanị maapụ ndị ziri ezi", "Kwụsị mmemme ahụ", "Kọọ ya n'eziokwu ma gbanwee otu a ga-esi nye ndụmọdụ n'oge ọkụkọ ọzọ"], answer: 3, why: "Kwuo eziokwu banyere ihe na-arụghị ọrụ, wee mee ka atụmatụ ahụ ka mma maka oge ọkụkọ ọzọ." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Ịhazi mmemme nlekọta site na drone",
        questions: [
          { objective: "O4", q: "Gịnị mere ọtụtụ ọrụ drone ji ada?", options: ["Drone dị obere nke ukwuu", "Ha na-amalite site na drone kama ezi nsogbu", "Ndị ọrụ ugbo anaghị achọ maapụ", "Batrị buru ibu nke ukwuu"], answer: 1, why: "Mmemme na-arụ ọrụ mgbe ha na-edozi nsogbu ndị ga-erite uru na-eche banyere ya." },
          { objective: "O4", q: "Kedu nke bụ ebumnuche mmemme kacha mma?", options: ["Fee drone nke ukwuu", "Jiri teknụzụ", "Chọta ebe FAW juru n'ugbo 200 n'ime otu izu mmebi mbụ ka ọ na-erule njedebe long rains 2027", "Bụrụ onye ọhụụ"], answer: 2, why: "O nwere nọmba doro anya, oge na ihe a ga-enweta." },
          { objective: "O5", q: "Mmemme gị ga-efe drone maka ndị ọrụ ugbo na-akwụ ụgwọ. Gịnị ka ị ga-elele?", options: ["Ma ụlọ ọrụ gị chọrọ operator certificate na ma ndị na-efe drone chọrọ akwụkwọ ikike", "Naanị agba drone ahụ", "Naanị ihu igwe", "Ọ dịghị ihe; ndị ọrụ ugbo kwere"], answer: 0, why: "Ịfe drone maka ego na-achọkarị operator certificate na ndị na-efe ya nwere akwụkwọ ikike." },
          { objective: "O5", q: "Kedu nke bụ ụgwọ na-aga n'ihu?", options: ["Ịzụta drone mbụ", "Ịzụta kọmputa", "Ọzụzụ mbụ", "Njem gaa n'ugbo kwa izu"], answer: 3, why: "Ụgwọ na-aga n'ihu na-alọghachi n'oge mmemme ahụ niile." },
          { objective: "O6", q: "Gịnị mere a ga-eji nakọta baseline?", options: ["Iji dejupụta fọm", "Iji tụnyere ihe si na ya pụta na ọnọdụ tupu mmemme ahụ", "Iji hichapụ data ochie", "Iji họrọ drone"], answer: 1, why: "Ọ bụrụ na enweghị ebe ị malitere, ị pụghị igosi mgbanwe." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Drone maka Nlekọta Ugbo 5: Ijikọ Data, GIS na Ịhazi Mmemme",
    questions: [
      { objective: "O1", q: "Ọ bụrụ na enweghị usoro data, mmemme drone buru ibu nwere ike:", options: ["Ịtụfu, ịgwakọta ma ọ bụ ide ihe ọhụrụ n'elu faịlụ", "Inwe maapụ ka mma", "Ịfe drone ngwa ngwa", "Inwe drone dị ọnụ ala"], answer: 0, why: "Ọtụtụ puku faịlụ chọrọ usoro doro anya." },
      { objective: "O1", q: "Ndekọ ịfe drone na-edekọ:", options: ["Ọnụ ahịa ihe ubi", "Ụbọchị, ugbo, ubi, onye fere ya, drone, faịlụ na ọnọdụ", "Naanị ihu igwe", "Ozi ụlọ akụ ndị ọrụ ugbo"], answer: 1, why: "Ọ na-esochi ịfe drone ọ bụla na data ya." },
      { objective: "O1", q: "Kedu nke bụ ezigbo iwu folda?", options: ["Aha ọ bụla", "Aha zuru ezu na nọmba ekwentị onye ọrụ ugbo", "Mmemme / Farm ID / Field ID / Ụbọchị", "Ihe niile n'otu folda"], answer: 2, why: "Usoro dabere na ID, nke na-adị otu mgbe niile, na-eme ka data dị n'usoro ma bụrụ nzuzo." },
      { objective: "O1", q: "N'iwu 3-2-1, 1 pụtara:", options: ["Otu drone", "Otu onye ọrụ ugbo", "Otu ụbọchị", "Otu mbipụta n'ebe ọzọ"], answer: 3, why: "Mbipụta dị n'ebe ọzọ na-afọdụ ma ọ bụrụ na ohi, ọkụ ma ọ bụ mmebi mere n'ọfịs." },
      { objective: "O2", q: "Na GIS, layer ndị dị n'okpuru maka mmemme na-agụnyekarị:", options: ["Oke ubi na ntụpọ ugbo", "Faịlụ egwu", "Naanị foto otu ndị ọrụ", "Akwụkwọ ụgwọ"], answer: 0, why: "A na-etinye ihe ndị ọzọ niile n'elu ubi na ugbo." },
      { objective: "O2", q: "Foto Sentinel-2 bụ ihe dị ka mita ole n'otu pixel?", options: ["0.01", "10", "1,000", "100,000"], answer: 1, why: "Foto Sentinel-2 n'efu bụ ihe dị ka mita 10 n'otu pixel." },
      { objective: "O2", q: "Ijikọ spreadsheet na layer ubi chọrọ:", options: ["Otu agba", "Drone", "ID ha nwekọrọ, dị ka Field ID", "Igwe mbipụta"], answer: 2, why: "ID na-ejikọ ahịrị ọ bụla na ubi ya." },
      { objective: "O2", q: "Kedu ajụjụ ọrụ GIS e jikọrọ nwere ike inye aka zaa?", options: ["Gịnị bụ okwuntughe onye ọrụ ugbo?", "Kedu agba drone ahụ?", "Ònye meriri egwuregwu bọọlụ?", "Ubi ndị nwetara ndụmọdụ drone ọ̀ wetara ihe karịa?"], answer: 3, why: "Ijikọ ndekọ na ubi na-ekwe ka e mee ụdị ntụnyere a." },
      { objective: "O3", q: "Ònye na-elekọta iwu nchedo data Nigeria?", options: ["Nigeria Data Protection Commission (NDPC)", "NCAA", "Onye mere drone", "Otu cooperative"], answer: 0, why: "E hiwere NDPC n'okpuru Nigeria Data Protection Act 2023." },
      { objective: "O3", q: "Nkwenye ziri ezi pụtara na onye ọrụ ugbo:", options: ["Agwaghị ya ihe ọ bụla", "Ghọtara ihe ị na-anakọta, ihe mere, onye ga-ahụ ya, ma nwee ike ịsị mba", "Bịanyere aka n'agụghị ya", "Nyere PIN ya"], answer: 1, why: "Nkwenye ga-abụrịrị nke e ji ọmụma nye, n'enweghị mmanye." },
      { objective: "O3", q: "Onye na-azụ ihe rịọrọ ndepụta aha ndị ọrụ ugbo na ihe ubi ha wetara. Ị kwesịrị:", options: ["Iziga ya ozugbo", "Itinye ya ebe onye ọ bụla ga-ahụ ya", "Ikesa ya naanị ma ndị ọrụ ugbo kwere", "Ire ya"], answer: 2, why: "A naghị ekesa ozi nzuzo na-enweghị ikike." },
      { objective: "O3", q: "Ịnakọta naanị ihe ị chọrọ ka a na-akpọ:", options: ["Ịchịkọba data", "Nchekwa", "Mkpuchi", "Data minimisation"], answer: 3, why: "Data dị ntakịrị pụtara ihe egwu dị ntakịrị, ọ bụkwa otu iwu nchedo data." },
      { objective: "O4", q: "Mmemme kwesịrị ịmalite site na:", options: ["Nsogbu ndị ga-erite uru na-eche banyere ya ma nwee ike ime ihe banyere ya", "Drone kacha ọhụrụ", "Logo", "Ozi nye ndị nta akụkọ"], answer: 0, why: "Mmemme na-amalite site na nsogbu na-eweta uru." },
      { objective: "O4", q: "Gịnị ka ndị ọrụ ugbo kacha chọọ n'aka mmemme ahụ?", options: ["Faịlụ foto raw", "Maapụ na ndụmọdụ dị mfe n'ekwentị ha", "Sọftwia GIS", "Akwụkwọ ikike onye na-efe drone"], answer: 1, why: "Ozi dị mfe nke a ga-eme ihe na ya na-enyere ndị ọrụ ugbo aka ime ihe." },
      { objective: "O5", q: "Ebe ọkụ anaghị adị mgbe niile, hazie maka:", options: ["Enweghị batrị", "Ịfe naanị n'abalị", "Ịchaji site n'anyanwụ ma ọ bụ ụgbọala", "Otu ịfe n'afọ"], answer: 2, why: "Ụzọ ịchaji na-eme ka otu ndị ọrụ nwee ike ịfe drone otu ụbọchị zuru ezu." },
      { objective: "O5", q: "Ịchịkọta ugbo site na mpaghara n'usoro oge na-enyere aka:", options: ["Iji mmanụ ụgbọala karịa", "Ime ka maapụ ghara ịdị nkọ", "Ịzere akwụkwọ ikike", "Ileta ọtụtụ ugbo n'otu ụbọchị"], answer: 3, why: "Njem dị ntakịrị pụtara ugbo ka ukwuu n'otu ụbọchị na ụgwọ dị ala." },
      { objective: "O5", q: "Otu ụzọ a ga-esi kwụọ ụgwọ ọrụ drone cooperative bụ:", options: ["Obere ụgwọ n'hectare a na-akwụ site na mobile money", "N'efu ruo mgbe ebighị ebi na-enweghị atụmatụ", "Ire data ndị ọrụ ugbo", "Ịhapụ nrụzi"], answer: 0, why: "Ụgwọ, levy, ndị na-azụ ihe ma ọ bụ onyinye nwere ike ịkwụ ụgwọ ọrụ ahụ n'eziokwu." },
      { objective: "O5", q: "Gịnị mere a ga-eji hazie maka mgbe onyinye gwụrụ?", options: ["Onyinye anaghị agwụ agwụ", "Ka ọrụ ahụ gaa n'ihu mgbe onyinye ahụ kwụsịrị", "Iji mefuo ego ngwa ngwa", "Ọ dịghị mkpa"], answer: 1, why: "Mmemme ndị dabere naanị n'onyinye na-akwụsịkarị." },
      { objective: "O6", q: "Kedu nke bụ ihe e ji atụ ọganihu?", options: ["Ọnụ ọgụgụ foto drone e sere", "Agba drone ahụ", "Ndị ọrụ ugbo nwetara ndụmọdụ n'ime ụbọchị atọ e chọtara nsogbu", "Ịdị ukwuu nke ọfịs"], answer: 2, why: "Ọ na-atụ ihe si na ya pụta nke ndị ga-erite uru na-eche banyere ya." },
      { objective: "O6", q: "Mgbe ị na-akọ akụkọ, ị kwesịrị:", options: ["Izo ihe na-arụghị ọrụ", "Iziga onye ọ bụla otu akụkọ peeji 50", "Ịkọrọ naanị onye nyere onyinye", "Ikwu eziokwu ma jiri ụdị onye ọ bụla ga-eji"], answer: 3, why: "Akụkọ eziokwu, nke dabara onye ọ bụla, na-ewulite ntụkwasị obi na mmezi." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [0, 3, 4, 6, 9, 10, 12, 13, 16, 18] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ nke atụmatụ ahụ ma lelee ya ọzọ.",
    criteria: [
      { name: "Nsogbu, ebumnuche na ndị ga-erite uru", objective: "O4", notYet: "Ọ na-amalite site na drone, ma ọ bụ ebumnuche ahụ enweghị nọmba ma ọ bụ ụbọchị.", meets: "Ezi nsogbu, ebumnuche nwere nọmba na ụbọchị, na onye ọ bụla ga-erite uru na ihe ọ ga-enweta.", exceeds: "Ọ na-egosi na ndị ga-erite uru kwenyere na nsogbu ahụ, dịka ọmụmaatụ site na nzukọ ndị ọrụ ugbo." },
      { name: "Atụmatụ data", objective: "O1", notYet: "Enweghị atụmatụ nchekwa, ịkpọ aha ma ọ bụ backup.", meets: "Usoro folda, Farm ID, ndekọ ịfe drone na nchekwa 3-2-1.", exceeds: "Ọ na-ekwu ogologo oge a ga-edebe foto raw na onye ga-elele nchekwa ndị ahụ." },
      { name: "Iji GIS na satellite", objective: "O2", notYet: "Enweghị layer GIS ma ọ bụ iji satellite.", meets: "E depụtara layer GIS, e jikọtara ndekọ site na Field ID, e jirikwa satellite họrọ ebe a ga-efe drone.", exceeds: "Ọ na-akpọ aha ajụjụ data e jikọrọ ga-aza, dị ka ihe ubi mgbe e nyere ndụmọdụ na mgbe e nyeghị." },
      { name: "Nkwenye na nchedo data", objective: "O3", notYet: "Enweghị nkwenye ma ọ bụ nzọụkwụ nchedo data.", meets: "Nkwenye n'asụsụ onye ọrụ ugbo, data minimisation, nchekwa dị mma na enweghị ikesa na-enweghị ikike, n'okpuru iwu kwesịrị ekwesị.", exceeds: "Ọ na-elele ma ụlọ ọrụ ahụ ga-edebanye aha n'ụlọ ọrụ na-ahụ maka nchedo data." },
      { name: "Otu ndị ọrụ, usoro oge na mmefu ego", objective: "O5", notYet: "Akwụkwọ ikike, usoro oge ma ọ bụ otu a ga-esi kwụọ ụgwọ adịghị.", meets: "Otu ndị ọrụ nwere akwụkwọ ikike, ngwaọrụ, usoro ịfe drone maka oge ọkụkọ, ụgwọ otu ugboro na ụgwọ na-aga n'ihu, na otu a ga-esi kwụọ ụgwọ ọrụ ahụ.", exceeds: "Ọ na-egosi atụmatụ maka mgbe onyinye ọ bụla gwụrụ." },
      { name: "Ihe e ji atụ na ịkọ akụkọ", objective: "O6", notYet: "Enweghị ihe e ji atụ ma ọ bụ baseline.", meets: "Ihe ole na ole e ji atụ nke jikọtara na ebumnuche ahụ, baseline, na ụdị akụkọ maka onye ọ bụla ga-erite uru.", exceeds: "Ọ gụnyere echiche ndị ọrụ ugbo banyere ma ndụmọdụ ahụ bara uru ma kwesị ịkwụ ụgwọ maka ya." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma nweta Ruru eru ma ọ bụ Karịrị n'ahịrị rubric ọ bụla nke atụmatụ mmemme ahụ",
      "Ndị na-amụ ihe gosiri atụmatụ mmemme ha nye ndị isi cooperative, ọfịs county ma ọ bụ steeti, onye na-enye onyinye ma ọ bụ onye na-etinye ego n'ime ụbọchị 90 (nnyocha nsochi)",
      "Mmemme e haziri n'ihe ọmụmụ a malitere oge ọkụkọ nnwale site na nkwenye ndị ọrụ ugbo e dere ede",
      "Ndị na-amụ ihe gara n'ihu n'Ihe ọmụmụ 6 nke usoro drone"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Kọmputa nwere QGIS n'efu na spreadsheet",
      "Maapụ drone ọmụmaatụ, oke ubi na ndekọ ugbo, ma ọ bụ nke onye na-amụ ihe n'onwe ya",
      "Ọnụ ahịa nke ebe ahụ maka drone, njem, data na insurance, ma ọ bụrụ na ọ dị",
      "Ihe dị ka nkeji 60 n'ozuzu, n'oge nkenke, gbakwunyere oge ide atụmatụ peeji abụọ ahụ"
    ],
    facilitatorNotes: [
      "Meenụ ule mbido ọnụ, wee rụọ ọrụ n'otu cooperative ọmụmaatụ dị ka otu tupu ndị na-amụ ihe dee atụmatụ nke ha.",
      "Jiri Farm ID, ọ bụghị ezi aha ma ọ bụ nọmba ndị ọrụ ugbo, n'ọmụmaatụ niile na klas.",
      "Rịọ ndị na-amụ ihe ka ha lelee saịtị ụlọ ọrụ na-ahụ maka nchedo data n'obodo ha maka iwu ndebanye aha.",
      "Gbaa ndị na-amụ ihe ume ka ha nwalee ebumnuche na mmefu ego ha na ezi cooperative ma ọ bụ onye mmekọ tupu ha emechaa.",
      "Jiri rubric tụọ akara atụmatụ mmemme ahụ, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};
