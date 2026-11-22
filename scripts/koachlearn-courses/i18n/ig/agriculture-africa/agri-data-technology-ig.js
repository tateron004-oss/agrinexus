"use strict";

// Koach Learn course (Igbo translation of agriculture-africa/agri-data-technology.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Structure, ids, objective tags, answer indexes and URLs are identical to the English.

const KMD = { name: "Kenya Meteorological Department (amụma ihu igwe na akwụkwọ ozi ihu igwe maka ndị ọrụ ugbo)", url: "https://meteo.go.ke" };
const NIMET = { name: "Nigerian Meteorological Agency (NiMet): ụlọ ọrụ ihu igwe Naịjirịa", url: "https://nimet.gov.ng" };
const COPERNICUS = { name: "Copernicus Browser (foto satịlaịtị Sentinel n'efu)", url: "https://browser.dataspace.copernicus.eu/" };
const FAO_EO = { name: "FAO GIEWS Earth Observation (maapụ mmiri ozuzo, NDVI na nsogbu ọrụ ugbo)", url: "https://www.fao.org/giews/earthobservation/index.jsp" };
const KALRO = { name: "Kenya Agricultural and Livestock Research Organization (KALRO): ụlọ ọrụ nchọpụta ọrụ ugbo Kenya", url: "https://www.kalro.org" };
const KOBO = { name: "KoboToolbox (fọm n'efu maka ịnakọta data)", url: "https://www.kobotoolbox.org" };
const ODPC = { name: "Office of the Data Protection Commissioner (Kenya): ọfịs nchekwa data", url: "https://www.odpc.go.ke" };
const NDPC = { name: "Nigeria Data Protection Commission (NDPC): kọmịshọn nchekwa data Naịjirịa", url: "https://ndpc.gov.ng" };

module.exports = {
  id: "agri-data-technology-ig",
  lang: "ig",
  translationOf: "agri-data-technology",
  category: "Agriculture (Africa)",
  name: "Data na Teknụzụ n'Ọrụ Ugbo",
  skills: "Ịchọta na ịlele ozi ugbo a pụrụ ịtụkwasị obi, Ịnakọta data ugbo gị n'ekwentị, Iji ozi ihu igwe na satịlaịtị n'efu, Inyocha ndekọ ugbo na spreadsheet, Iji ngwa enyemaka AI n'ụzọ kwesịrị ekwesị maka ajụjụ ugbo, Ichebe data ugbo gị",
  outcome: "iji smartphone dị ọnụ ala nakọta data ugbo gị, tinye ozi ihu igwe na satịlaịtị n'efu, nyochaa ya na spreadsheet iji mee mkpebi ugbo ka mma, lelee ndụmọdụ site na app na ngwa AI n'isi iyi a pụrụ ịtụkwasị obi, ma chebe data gị.",
  about: [
    "Ihe ọmụmụ a bụ maka ndị ọrụ ugbo, ndị ntorobịa na-azụ ahịa ugbo, ndị ndu otu ndị ọrụ ugbo na cooperative, na ndị ndụmọdụ ọrụ ugbo (extension officers) na Kenya, Naịjirịa na Afrịka niile ndị nwere smartphone (ọbụlagodi nke dị ọnụ ala) ma chọọ iji ya rụọ ọrụ ugbo ka mma. Ị chọghị kọmputa, mana ọ na-enyere aka na Isi 2.",
    "Isi 1 na-akụzi ịnakọta ozi: ịchọta ndụmọdụ ugbo a pụrụ ịtụkwasị obi ma zere aghụghọ, idekọ data ugbo gị n'ekwentị, na iji amụma ihu igwe na maapụ satịlaịtị n'efu. Isi 2 na-akụzi iji ozi: inyocha ndekọ gị na spreadsheet n'efu, ịjụ ngwa enyemaka AI ezigbo ajụjụ ugbo ma lelee azịza ha, na ichebe data gị.",
    "A na-eji ngwa n'efu n'ebe niile: Google Sheets ma ọ bụ ụdị weebụ n'efu nke Microsoft Excel, ngwa fọm n'efu, ụlọ ọrụ ihu igwe mba, maapụ FAO e si na mbara igwe lee, na ngwa enyemaka AI n'efu. Nkuzi ọ bụla na-ejedebe n'ọrụ. E nwere nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe."
  ],
  finalTask: "Mee mpempe data ugbo maka otu oge (ala ugbo, ihe ọkụkụ, ụdị mkpụrụ, ụbọchị ịkụ, ihe e tinyere na ego e mefuru, ndetu mmiri ozuzo ma ọ bụ amụma ihu igwe, ndetu nlegharị anya, owuwe ihe ubi na ire ere), tinye ezi data ma ọ bụ data ọmụmaatụ maka opekata mpe ala ugbo atọ, mee otu chaatị na-atụnyere ala ndị ahụ, dee otu mkpebi ị ga-eme n'oge na-abịa n'ihi ya, ma dee isi iyi ndị i lelere na otu ị na-esi echebe data ahụ.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị ọrụ ugbo, ndị ntorobịa na-azụ ahịa ugbo, ndị ndu otu ndị ọrụ ugbo na cooperative, na ndị ndụmọdụ ọrụ ugbo na Kenya, Naịjirịa na Afrịka niile ndị nwere smartphone, ọbụlagodi nke dị ọnụ ala, ma chọọ iji ya rụọ ọrụ ugbo ka mma.",
    startingPoint: "Ọtụtụ na-eji ekwentị akpọ oku, maka mobile money (ego ekwentị), WhatsApp na Facebook, ma na-enweta ndụmọdụ ugbo site n'aka ndị agbata obi, ụlọ ahịa ngwa ugbo (agrovet), redio na otu na soshal midia. Ole na ole na-ede ndekọ ugbo, na-eji spreadsheet, na-agụ amụma ihu igwe gọọmentị ma ọ bụ maapụ satịlaịtị, ma ọ bụ na-elele ndụmọdụ AI na app n'isi iyi a pụrụ ịtụkwasị obi.",
    gap: "N'enweghị ndekọ nke ha, ndị ọrụ ugbo enweghị ike ịhụ ala ugbo, ụdị mkpụrụ ma ọ bụ omume na-eweta uru n'ezie, ndụmọdụ ezighi ezi, ngwa ugbo adịgboroja na aghụghọ data na-eri ha ego. Idekọ, inyocha na ịlele ozi n'ekwentị ha nweburu na-enyere ha aka ime mkpebi ka mma, igosi ndị na-agbazinye ego na ndị na-azụ ihe otu ugbo ha si aga, ma chebe data ha.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ; a na-akọwa okwu teknụzụ ọ bụla",
      "Ngwaọrụ: smartphone dị ọnụ ala nwere data ntakịrị; kọmputa na-enyere aka naanị na Isi 2",
      "Netwọk: netwọk adịghị mma n'ime obodo, ya mere fọm na-arụ ọrụ n'enweghị ịntanetị na mpempe e chekwara dị mkpa",
      "Oge: nkuzi dị mkpụmkpụ nke dabara n'etiti ọrụ ugbo",
      "Nzuzo na aghụghọ: edela PIN, nọmba ID ma ọ bụ ozi ụlọ akụ n'ime app, mpempe ma ọ bụ ngwa AI mgbe ọ bụla"
    ],
    prerequisites: "Ọ dịghị. Ndị ọhụrụ n'iji smartphone kwesịrị ibu ụzọ nwee ike imeghe app ma dee ozi."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe e nyere gị ndụmọdụ ugbo site n'ozi, app ma ọ bụ onye agbata obi", action: "ịlele onye na-ekwu ya, ma ọ dabara mpaghara gị na ihe ọkụkụ gị, ma ọ bụ nke ọhụrụ, na ma ha na-ere ihe", standard: "tupu i mefuo ego, na-ahụ ihe ịrịba ama aghụghọ ọ bụla" },
    { id: "O2", condition: "Site n'iji spreadsheet ma ọ bụ app fọm n'efu n'ekwentị gị", action: "ime mpempe data ugbo nwere otu ahịrị maka ihe ọ bụla mere na otu aha na-adịgide maka ala ugbo ọ bụla", standard: "nwere opekata mpe kọlụm ụbọchị, ala ugbo, ọrụ, ọnụọgụ na ego e mefuru" },
    { id: "O3", condition: "Maka mpaghara gị na oge gị", action: "ịchọta amụma ihu igwe gọọmentị na maapụ satịlaịtị ma ọ bụ mmiri ozuzo n'efu ma dee ihe ha gosiri na mpempe ugbo gị", standard: "ya na isi iyi ya na ụbọchị ya" },
    { id: "O4", condition: "Mgbe e nyere gị ndekọ maka opekata mpe ala ugbo atọ", action: "ịgbakọ mkpụrụ na uru kwa acre site na fọmụla, mee chaatị ogwe (bar chart), ma dee otu mkpebi maka oge na-abịa", standard: "na mgbakọ ziri ezi na mkpebi ahụ jikọtara na nọmba ndị ahụ" },
    { id: "O5", condition: "Site n'iji ngwa enyemaka AI n'efu", action: "ide ajụjụ ugbo doro anya ma lelee azịza ya n'aka onye ndụmọdụ ọrụ ugbo, agrovet ma ọ bụ n'akwụkwọ dị n'ihe ahụ (label)", standard: "tupu i mee ihe, n'edeghị ozi nzuzo ọ bụla" },
    { id: "O6", condition: "Mgbe app, onye na-azụ ihe ma ọ bụ otu na-arịọ data ugbo", action: "ikpebi ihe ị ga-ekesa, onye ị ga-ekesara ya na ihe mere, ma chebe nke fọdụrụ", standard: "na-agbaso ikike nchekwa data nke mba gị ma na-arịọ ndị ọzọ nkwenye" }
  ],
  chapters: [
    {
      name: "Isi 1: Ịnakọta ezigbo ozi",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ịchọta ozi ugbo a pụrụ ịtụkwasị obi",
          minutes: 5,
          goal: "Kpebie ma ndụmọdụ ugbo bụ nke a pụrụ ịtụkwasị obi tupu i mee ihe na ya.",
          text: [
            "Ndị ọrụ ugbo na-enweta ndụmọdụ n'ọtụtụ ebe: ndị ndụmọdụ ọrụ ugbo (extension officers), ụlọ ọrụ nchọpụta dị ka KALRO na Kenya, mmemme mmepe ọrụ ugbo na steeti Naịjirịa, FAO na ụlọ ọrụ CGIAR, agrovet, mmemme redio na TV, ọrụ SMS na app, otu WhatsApp na Facebook, na ndị agbata obi. Ụfọdụ dị mma nke ukwuu; ụfọdụ ezighi ezi, agaala oge ya, ma ọ bụ na-achọ ire gị ihe.",
            "Jụọ ajụjụ anọ banyere ndụmọdụ ọ bụla: Onye na-ekwu ya, ọ makwa ihe ọ na-ekwu (ụlọ ọrụ nchọpụta ma ọ bụ onye a zụrụ azụ, ka ọ bụ akaụntụ a na-amaghị)? Ọ bụ maka mpaghara m na ihe ọkụkụ m? Ọ bụ nke ọhụrụ? Ha na-ere ihe? Lelee ndụmọdụ dị mkpa n'isi iyi nke abụọ a pụrụ ịtụkwasị obi tupu i mefuo ego.",
            "Kpachara anya maka aghụghọ: mkpụrụ na fatilaịza adịgboroja, ngwaahịa \"ọrụ ebube\", ọrụ ma ọ bụ onyinye ego (grant) adịgboroja na-arịọ ụgwọ, na ozi na-eme ka ọ bụ mmemme gọọmentị na-arịọ PIN mobile money gị. Zụta ngwa ugbo n'aka ndị ahịa e debanyere aha, ma kọọrọ ndị ọchịchị kwesịrị ekwesị ihe adịgboroja."
          ],
          steps: ["Jụọ: onye na-ekwu ya, ọ makwa ihe ọ na-ekwu?", "Jụọ: ọ bụ maka mpaghara m na ihe ọkụkụ m, ọ bụkwa nke ọhụrụ?", "Jụọ: ha na-ere ihe?", "Lelee n'isi iyi nke abụọ a pụrụ ịtụkwasị obi tupu i mefuo ego.", "Zụta ngwa ugbo n'aka ndị ahịa e debanyere aha; ekesala PIN gị mgbe ọ bụla."],
          words: [["Onye ndụmọdụ ọrụ ugbo (extension officer)", "onye ndụmọdụ a zụrụ azụ site na gọọmentị ma ọ bụ otu ọrụ, nke na-enyere ndị ọrụ ugbo aka."], ["Ụlọ ọrụ nchọpụta", "otu na-anwale ma na-emepụta ụzọ ọrụ ugbo na ụdị mkpụrụ, dị ka KALRO."], ["Aghụghọ (scam)", "wayo e ji ewere ego gị ma ọ bụ ozi gị."]],
          slides: [
            { title: "Ọtụtụ isi iyi", bullets: ["Ndị ndụmọdụ, ụlọ ọrụ nchọpụta, FAO, CGIAR", "Agrovet, redio, SMS na app", "Otu soshal midia na ndị agbata obi"] },
            { title: "Ajụjụ anọ", bullets: ["Onye na-ekwu ya, ọ makwa ihe ọ na-ekwu?", "Ọ bụ maka mpaghara m na ihe ọkụkụ m?", "Ọ bụ nke ọhụrụ?", "Ha na-ere ihe?"] },
            { title: "Kpachara anya maka aghụghọ", bullets: ["Mkpụrụ na fatilaịza adịgboroja, ngwaahịa ọrụ ebube", "Onyinye ego ma ọ bụ ọrụ na-arịọ ụgwọ", "Ekesala PIN gị mgbe ọ bụla"] }
          ],
          sources: [KALRO],
          tryIt: "Chọta otu ndụmọdụ ugbo ị hụrụ n'oge na-adịbeghị anya (na redio, WhatsApp ma ọ bụ n'aka onye na-ere ihe). Zaa ajụjụ anọ ahụ banyere ya, ma lelee ya n'isi iyi nke abụọ a pụrụ ịtụkwasị obi. Dee ma ị ga-eme ihe na ya.",
          youCanNow: "ikpebi ma ndụmọdụ ugbo bụ nke a pụrụ ịtụkwasị obi ma hụ aghụghọ a na-ahụkarị.",
          quickCheck: [
            { objective: "O1", q: "Kedu ajụjụ na-enyere gị aka ikpebi ma ndụmọdụ ugbo dị mma?", options: ["Mmadụ ole masịrị ihe e dere?", "Ọ bụ maka mpaghara m na ihe ọkụkụ m, ọ bụkwa nke ọhụrụ?", "Ozi ahụ ọ dị ogologo?", "O nwere ọtụtụ foto?"], answer: 1, why: "Ịlele onye na-ekwu ya, ma ọ dabara mpaghara gị na ihe ọkụkụ gị, na ma ọ bụ nke ọhụrụ na-egosi ma ndụmọdụ ahụ bụ nke a pụrụ ịtụkwasị obi." },
            { objective: "O1", q: "Ozi kwuru na i nwetala onyinye ego ugbo ma na-arịọ PIN mobile money gị. Gịnị ka ị ga-eme?", options: ["Zipu PIN ahụ ngwa ngwa", "Buru ụzọ kwụọ obere ụgwọ", "Were ya dị ka aghụghọ ma ekesala PIN ahụ", "Zigara ya otu gị ka ha tinye akwụkwọ"], answer: 2, why: "Ezi mmemme anaghị arịọ PIN gị ma ọ bụ ụgwọ tupu ha enye onyinye ego." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Idekọ data ugbo gị n'ekwentị",
          minutes: 6,
          goal: "Hazie usoro dị mfe n'ekwentị iji dekọọ ala ugbo, ihe e tinyere, nlegharị anya na owuwe ihe ubi.",
          text: [
            "Ndekọ nke gị bụ data kacha baa uru i nwere, n'ihi na ọ bụ maka ugbo gị. App spreadsheet (Google Sheets ma ọ bụ Microsoft Excel, ha abụọ dị n'efu n'ekwentị) na-arụ ọrụ nke ọma: otu ahịrị maka ihe ọ bụla mere, nwere kọlụm dị ka ụbọchị, ala ugbo, ihe ọkụkụ, ọrụ, ọnụọgụ, ego e mefuru na ndetu.",
            "Nye ala ugbo ọ bụla obere aha ma ọ bụ nọmba ma debe ya otu ahụ mgbe niile. Dekọọ ebe GPS ma ọ bụ oke ala ya n'ụzọ dị nso maka ala ugbo ọ bụla (ọtụtụ app maapụ na-ekwe ka ị tụnye pin ma kesaa nhazi ebe ahụ). See foto nsogbu ma kpọọ ha aha ụbọchị na ala ugbo. Maka otu na cooperative, ngwa fọm n'efu dị ka KoboToolbox na-ekwe ka ọtụtụ ndị otu dejupụta otu fọm ahụ n'ekwentị ha, ọbụlagodi n'enweghị ịntanetị, ma zipu ya mgbe ha nwetara netwọk.",
            "Mee ka ọ dị mfe nke na ị ga-eme ya oge niile. Kọlụm ise ị na-ejupụta kwa izu ka mma karịa kọlụm iri abụọ ị jupụtara otu ugboro. Chekwaa mpempe ahụ n'ebe ọzọ (backup) (ọtụtụ spreadsheet dị n'ịntanetị na-echekwa onwe ha), etinyela nọmba nzuzo dị ka PIN ma ọ bụ nọmba ID n'ime ya."
          ],
          steps: ["Meghee app spreadsheet n'efu ma mee kọlụm: ụbọchị, ala ugbo, ihe ọkụkụ, ọrụ, ọnụọgụ, ego e mefuru, ndetu.", "Nye ala ugbo ọ bụla aha ma dekọọ pin GPS ya.", "Tinye ahịrị oge ọ bụla ị kụrụ ihe, tinye ihe, legharịa anya, wee ihe ubi ma ọ bụ ree ihe.", "Kpọọ foto aha ụbọchị na ala ugbo.", "Maka otu: tụlee fọm a na-ekerịta nke na-arụ ọrụ n'enweghị ịntanetị."],
          words: [["Spreadsheet", "tebụl nwere ahịrị na kọlụm n'ekwentị ma ọ bụ kọmputa maka idekọ na ịgbakọ."], ["Pin GPS", "ebe e chekwara na maapụ ya na nhazi (coordinates) ya."], ["Offline", "ịrụ ọrụ n'enweghị ịntanetị."]],
          slides: [
            { title: "Data nke gị bụ ọlaedo", bullets: ["Ọ bụ maka UGBO GỊ", "Otu ahịrị maka ihe ọ bụla mere"] },
            { title: "Kọlụm iji malite", bullets: ["Ụbọchị, ala ugbo, ihe ọkụkụ, ọrụ", "Ọnụọgụ, ego e mefuru, ndetu"] },
            { title: "Ezigbo omume", bullets: ["Otu aha ala ugbo mgbe niile", "Pin GPS maka ala ugbo ọ bụla, foto nwere ụbọchị", "Dị mfe ime kwa izu"] },
            { title: "Otu na nchekwa", bullets: ["Fọm a na-ekerịta n'enweghị ịntanetị, dịka KoboToolbox", "Chekwaa n'ebe ọzọ; enweghị PIN ma ọ bụ nọmba ID"] }
          ],
          sources: [KOBO],
          tryIt: "Mee mpempe ugbo gị n'ekwentị nwere kọlụm asaa ahụ. Tinye ala ugbo gị na opekata mpe ahịrị ise nke ezi ọrụ i mere n'oge a. Tụnye pin GPS maka otu ala ugbo ma chekwaa nhazi ya na ndetu.",
          youCanNow: "idekọ ọrụ ugbo gị, ihe i tinyere na owuwe ihe ubi n'ekwentị n'otu ụzọ ahụ mgbe niile.",
          quickCheck: [
            { objective: "O2", q: "Na mpempe data ugbo, gịnị bụ otu ahịrị?", options: ["Otu ihe mere, dị ka ịkụ ihe ma ọ bụ ire ere", "Otu oge zuru ezu", "Otu ihe ọkụkụ maka afọ niile", "Otu nọmba ekwentị"], answer: 0, why: "Otu ahịrị maka ihe ọ bụla mere, nwere ụbọchị, ala ugbo, ọrụ, ọnụọgụ na ego e mefuru, na-eme ka ndekọ dị mfe ịgbakọ." },
            { objective: "O2", q: "Otu ndị ọrụ ugbo gị chọrọ ka ndị otu zipu akụkọ nlegharị anya site n'ebe netwọk adịghị mma. Gịnị ka ị nwere ike iji?", options: ["Oku ekwentị ogologo kwa izu", "Ndetu n'akwụkwọ na-anọ n'ụlọ", "App dị iche maka onye otu ọ bụla", "Ngwa fọm a na-ekerịta dị ka KoboToolbox nke na-arụ ọrụ n'enweghị ịntanetị"], answer: 3, why: "Ngwa fọm dị ka KoboToolbox na-ekwe ka ọtụtụ ndị otu dejupụta otu fọm ahụ n'enweghị ịntanetị ma zipu ya mgbe ha nwetara netwọk." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Iji ozi ihu igwe na satịlaịtị n'efu",
          minutes: 6,
          goal: "Jiri amụma ihu igwe gọọmentị na maapụ satịlaịtị n'efu mee mkpebi ugbo.",
          text: [
            "Ụlọ ọrụ ihu igwe mba na-ebipụta amụma ihu igwe maka ndị ọrụ ugbo: na Kenya, Kenya Meteorological Department (KMD) na-ebipụta amụma oge na akwụkwọ ozi ihu igwe maka ndị ọrụ ugbo (agromet bulletins); na Naịjirịa, NiMet na-ebipụta amụma ihu igwe oge na amụma ndị ọzọ. Dee ihe ha kwuru maka mpaghara gị na mpempe ugbo gị, ya na ụbọchị, ka i wee hụ ma emesịa otu o si dabara oge gị.",
            "Ozi satịlaịtị n'efu na-enyekwa aka. Peeji FAO e si na mbara igwe lee (earth observation) na-egosi maapụ mmiri ozuzo, ahịhịa ndụ (NDVI) na nsogbu ọrụ ugbo maka mba na mpaghara, nke bara uru ịhụ ma oge ọkọchị bụ naanị n'ebe gị ka ọ gbasara ebe niile. Copernicus Browser na-egosi foto satịlaịtị Sentinel-2 n'efu kwa ụbọchị ole na ole, ihe dị ka mita 10 kwa pixel, nke zuru ịhụ ọdịdị ubi na ma nnukwu ubi na-acha akwụkwọ ndụ karịa ma ọ bụ na-acha aja aja karịa ọnwa gara aga.",
            "Ọ bụrụ na ị nwere ike, tụọ mmiri ozuzo n'onwe gị site n'iji obere ihe ntụ mmiri ozuzo (rain gauge) ma dekọọ ya kwa ụbọchị. Ndekọ mmiri ozuzo nke gị, n'akụkụ ụbọchị ịkụ gị na mkpụrụ ị wetara, na-egosi ngwa ngwa ihe na-arụ ọrụ n'ugbo gị."
          ],
          steps: ["Chọta amụma ihu igwe nke ụlọ ọrụ ihu igwe mba gị maka mpaghara gị.", "Dee ya na mpempe ugbo gị ya na ụbọchị.", "Lee maapụ FAO e si na mbara igwe lee maka mba gị.", "Chọta ugbo gị na Copernicus Browser ma tụnyere ụbọchị abụọ.", "Dekọọ mmiri ozuzo kwa ụbọchị site n'obere ihe ntụ mmiri ozuzo ma ọ bụrụ na ị nwere ike."],
          words: [["Akwụkwọ ozi ihu igwe ugbo (agrometeorological bulletin)", "akụkọ ihu igwe e dere maka ndị ọrụ ugbo."], ["Foto satịlaịtị", "foto ụwa e sere site na mbara igwe."], ["Ihe ntụ mmiri ozuzo (rain gauge)", "obere ihe e ji ejide mmiri nwere akara nke na-atụ mmiri ozuzo."]],
          slides: [
            { title: "Amụma ihu igwe gọọmentị", bullets: ["Kenya: amụma oge KMD, akwụkwọ ozi agromet", "Naịjirịa: NiMet", "Dee ha na mpempe gị ya na ụbọchị"] },
            { title: "Ozi satịlaịtị n'efu", bullets: ["FAO: maapụ mmiri ozuzo, NDVI, nsogbu", "Copernicus Browser: Sentinel-2, ihe dị ka mita 10", "Ọkọchị ọ bụ naanị n'ebe gị ka ọ gbasara ebe niile?"] },
            { title: "Ihe ntụ mmiri ozuzo nke gị", bullets: ["Dekọọ mmiri ozuzo kwa ụbọchị", "Tụnyere ya na ụbọchị ịkụ na mkpụrụ ị wetara"] }
          ],
          sources: [KMD, NIMET, FAO_EO, COPERNICUS],
          tryIt: "Chọta amụma ihu igwe nke oge a maka mpaghara gị ma dee ya na mpempe ugbo gị. Wee chọta mpaghara gị na maapụ FAO e si na mbara igwe lee ma ọ bụ na Copernicus Browser ma dee otu ihe ị hụrụ.",
          youCanNow: "iji amụma ihu igwe gọọmentị na maapụ satịlaịtị n'efu n'akụkụ ndekọ ugbo gị.",
          quickCheck: [
            { objective: "O3", q: "Ebee ka amụma ihu igwe oge gọọmentị maka ndị ọrụ ugbo na Naịjirịa si abịa?", options: ["Peeji Facebook", "Ụlọ ọrụ na-ere mkpụrụ", "Onye agbata obi", "NiMet"], answer: 3, why: "NiMet na-ebipụta amụma ihu igwe oge na amụma ndị ọzọ nke Naịjirịa." },
            { objective: "O3", q: "Ị chọrọ ịmara ma oge ọkọchị bụ naanị n'ugbo gị ka ọ gbasara mpaghara niile. Gịnị ka ị ga-elele?", options: ["Ike batrị ekwentị gị", "Maapụ mmiri ozuzo na ahịhịa ndụ FAO e si na mbara igwe lee", "Mgbasa ozi redio", "Akpa mkpụrụ afọ gara aga"], answer: 1, why: "Maapụ FAO e si na mbara igwe lee na-egosi mmiri ozuzo, ahịhịa ndụ na nsogbu maka mba na mpaghara." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ịnakọta ezigbo ozi",
        questions: [
          { objective: "O1", q: "Ozi WhatsApp na-akpọsa \"fatilaịza ọrụ ebube\" site n'aka onye na-ere ihe a na-amaghị. Ị kwesịrị:", options: ["Zụta ya ngwa ngwa tupu ọ gwụ", "Lelee ya n'isi iyi a pụrụ ịtụkwasị obi dị ka onye ndụmọdụ ọrụ ugbo tupu i mefuo ego", "Zigara ya onye ọ bụla", "Zipu PIN gị iji zụta ya"], answer: 1, why: "Ndị na-ere ihe a na-amaghị na nkwupụta ọrụ ebube bụ ihe ịdọ aka na ntị." },
          { objective: "O2", q: "Kedu kọlụm bara uru na mpempe data ugbo?", options: ["PIN mobile money gị", "Nọmba ID gị", "Ụbọchị, ala ugbo na ọrụ", "Okwuntughe gị"], answer: 2, why: "Ndekọ chọrọ ihe mere, ọ bụghị nọmba nzuzo." },
          { objective: "O2", q: "Gịnị mere ị ga-eji nye ala ugbo ọ bụla aha na-adịgide?", options: ["Ka e nwee ike ịtụnyere ndekọ ka oge na-aga", "Ọ mara mma", "Ekwentị chọrọ ya", "Ọ baghị uru"], answer: 0, why: "Aha na-adịgide na-eme ka ị nwee ike ịgbakọ ma tụnyere ala ugbo." },
          { objective: "O3", q: "Gịnị ka foto Sentinel-2 n'efu na Copernicus Browser na-egosi?", options: ["Otu ahụhụ n'otu n'otu", "Ego dị n'akaụntụ ụlọ akụ gị", "Ihu igwe afọ na-abịa", "Ubi n'ihe dị ka mita 10 kwa pixel kwa ụbọchị ole na ole"], answer: 3, why: "Ha dị n'efu, na-abịa ugboro ugboro, ma adịghị nkọ nke ukwuu." },
          { objective: "O3", q: "Gịnị mere ị ga-eji dee amụma ihu igwe na mpempe ugbo gị ya na ụbọchị?", options: ["Iji tụnyere ya ma emesịa na ihe mere n'ezie n'ugbo gị", "Ụlọ ọrụ ihu igwe chọrọ ya", "Iji kesara ndị na-azụ ihe", "Iji jupụta ohere"], answer: 0, why: "Ka oge na-aga, ị ga-amụta otu amụma ihu igwe si dabara ugbo gị." }
        ]
      }
    },
    {
      name: "Isi 2: Iji ozi mee mkpebi",
      lessons: [
        {
          objectives: ["O4"],
          title: "Inyocha ndekọ gị na spreadsheet",
          minutes: 6,
          goal: "Gbakọọ mkpụrụ na uru kwa ala ugbo ma mee chaatị iji tụnyere ha.",
          text: [
            "Ndekọ na-aba uru mgbe ị gbakọrọ ha. Na spreadsheet gị, mee tebụl nchịkọta: otu ahịrị maka ala ugbo ọ bụla nwere nha ya, ego niile e mefuru, owuwe ihe ubi, ego a nwetara, wee mkpụrụ kwa acre na uru kwa acre. Spreadsheet na-eme mgbakọ site na fọmụla dị mfe, dịka ọmụmaatụ =SUM iji gbakọta ego e mefuru na nkewa iji nweta mkpụrụ kwa acre.",
            "Wee mee chaatị. Họrọ aha ala ugbo na mkpụrụ kwa acre (ma ọ bụ uru kwa acre) ma tinye chaatị ogwe (bar chart). Chaatị na-eme ka ọdịiche dị mfe ịhụ na ịkọwara ezinụlọ, otu ma ọ bụ onye na-agbazinye ego.",
            "Chọọ ihe kpatara ya: ala ugbo kacha mma ọ nwetara nsị anụ, ụbọchị ịkụ mbụ, ụdị mkpụrụ dị iche, ka ọ bụ mmiri ozuzo karịrị? Ala ugbo kacha adịghị ike ọ nwere ahụhụ ma ọ bụ mmiri juru ya? Dee otu mkpebi maka oge na-abịa, ma nọgide na-edekọ ka i wee nwalee ya."
          ],
          steps: ["Mee tebụl nchịkọta: ala ugbo, nha, ego niile e mefuru, owuwe ihe ubi, ego a nwetara.", "Jiri =SUM maka mgbakọta ma kee ya iji nweta mkpụrụ na uru kwa acre.", "Họrọ aha ala ugbo na mkpụrụ kwa acre; tinye chaatị ogwe.", "Chọọ ihe kpatara ya na ndetu gị.", "Dee otu mkpebi maka oge na-abịa."],
          words: [["Fọmụla", "ntụziaka n'ime igbe spreadsheet nke na-agbakọ ihe, dị ka =SUM(B2:B10)."], ["Mkpụrụ kwa acre", "ihe ala ugbo mịpụtara e kere site na nha ya."], ["Chaatị ogwe (bar chart)", "chaatị nwere ogwe na-atụnyere ọnụọgụ."]],
          slides: [
            { title: "Gbakọọ ya", bullets: ["Otu ahịrị maka ala ugbo ọ bụla", "Nha, ego e mefuru, owuwe ihe ubi, ego a nwetara", "Mkpụrụ na uru kwa acre"] },
            { title: "Hapụ mpempe ahụ ka o mee mgbakọ", bullets: ["=SUM maka mgbakọta", "Kee ya maka ọnụọgụ kwa acre"] },
            { title: "Mee chaatị", bullets: ["Aha ala ugbo + mkpụrụ kwa acre", "Tinye chaatị ogwe", "Dị mfe ịkọwara ndị ọzọ"] },
            { title: "Chọta ihe kpatara ya, kpebie", bullets: ["Nsị anụ, oge, ụdị mkpụrụ, mmiri ozuzo, ahụhụ?", "Otu mkpebi maka oge na-abịa"] }
          ],
          tryIt: "Mee tebụl nchịkọta maka opekata mpe ala ugbo atọ (ezi nọmba ma ọ bụ nọmba ọmụmaatụ), gbakọọ mkpụrụ na uru kwa acre site na fọmụla, tinye chaatị ogwe, ma dee otu mkpebi maka oge na-abịa.",
          youCanNow: "inyocha ndekọ ugbo na spreadsheet ma jiri chaatị tụnyere ala ugbo ma kpebie.",
          quickCheck: [
            { objective: "O4", q: "Gịnị bụ uru kwa acre?", options: ["Naanị owuwe ihe ubi niile", "Naanị ego niile e mefuru", "Ego a nwetara wepụ ego e mefuru, e kere site na nha ala ugbo n'acre", "Ọnụahịa otu akpa"], answer: 2, why: "Uru kwa acre na-ewe ego a nwetara wepụ ego e mefuru ma kee ya site na nha ala ugbo ka e nwee ike ịtụnyere ala ugbo nha ha dị iche." },
            { objective: "O4", q: "Tebụl nchịkọta gị na-egosi na otu ala ugbo mịrị ọka karịa nke ukwuu. Gịnị ka ị ga-eme ọzọ?", options: ["Chọọ ihe kpatara ya dị ka nsị anụ ma ọ bụ ụbọchị ịkụ ma dee otu mkpebi", "Hichapụ ala ugbo ndị ọzọ na mpempe ahụ", "Kwụsị idekọ", "Kụọ naanị ala ugbo ahụ ruo mgbe ebighị ebi n'eleleghị ya"], answer: 0, why: "Ịchọta ihe kpatara ya na ide otu mkpebi ị nwere ike ịnwale n'oge na-abịa na-eme ka ndekọ wetara ọrụ ugbo ka mma." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Iji ngwa enyemaka AI maka ajụjụ ugbo, n'ụzọ kwesịrị ekwesị",
          minutes: 5,
          goal: "Jụọ ngwa enyemaka AI ajụjụ ugbo doro anya ma lelee azịza ya tupu i mee ihe.",
          text: [
            "Ngwa enyemaka AI n'efu dị ka ChatGPT, Microsoft Copilot na Google Gemini nwere ike ịkọwa echiche ọrụ ugbo, nyere aka hazie oge, dee ozi mbụ nye onye na-azụ ihe, tụgharịa asụsụ, ma ọ bụ nyere aka mee fọmụla spreadsheet. Jụọ ya nke ọma: kwuo ihe ọkụkụ gị, mpaghara gị, oge, nha ugbo gị na ihe ị chọrọ, dịka ọmụmaatụ: \"Ana m akọ acre 2 nke ọka na Bungoma. Mmiri ozuzo dị mkpụmkpụ na-amalite n'ọnwa Ọktoba. Meere m ndepụta dị mfe kwa izu site n'ịkwado ala ruo owuwe ihe ubi. Jiri ahịrịokwu dị mkpụmkpụ.\"",
            "AI nwere ike ezighi ezi, gaa oge ya, ma ọ bụ nye ndụmọdụ maka mba ọzọ. O nwere ike ịkpọ aha ngwaahịa e debanyeghị aha na mba gị ma ọ bụ nye ọnụọgụ ezighi ezi. Emela ihe mgbe ọ bụla na ndụmọdụ AI gbasara ọgwụ ahụhụ, ọnụọgụ fatilaịza, ọgwụ anụmanụ ma ọ bụ ego n'eleleghị ya n'aka onye ndụmọdụ ọrụ ugbo gị, agrovet, akwụkwọ dị n'ihe ahụ (label) ma ọ bụ isi iyi ọzọ a pụrụ ịtụkwasị obi.",
            "Edela ozi nzuzo n'ime ngwa enyemaka AI: nọmba ID gị, PIN mobile money gị, ozi ụlọ akụ ma ọ bụ ozi onwe ndị ọzọ. Jiri AI dị ka mmalite na-enyere aka, ọ bụghị okwu ikpeazụ."
          ],
          steps: ["Kwuo ihe ọkụkụ gị, mpaghara gị, oge, nha ugbo gị na ihe ị chọrọ.", "Rịọ maka ahịrịokwu dị mkpụmkpụ ma ọ bụ ndepụta.", "Jụọ ajụjụ nsochi iji mee ka azịza ka mma.", "Lelee ndụmọdụ gbasara ọgwụ ahụhụ, fatilaịza, ọgwụ na ego n'isi iyi a pụrụ ịtụkwasị obi.", "Edela PIN, nọmba ID ma ọ bụ ozi ụlọ akụ mgbe ọ bụla."],
          words: [["Ngwa enyemaka AI", "mmemme kọmputa ị na-akparịta ụka na ya n'okwu nkịtị nke na-ede azịza."], ["Prompt", "ihe ị na-ede ma ọ bụ na-ekwu nye ngwa enyemaka AI."]],
          slides: [
            { title: "Ihe AI nwere ike inyere aka", bullets: ["Ịkọwa echiche, ịhazi oge", "Ide ozi mbụ, ịtụgharị asụsụ", "Ime fọmụla spreadsheet"] },
            { title: "Jụọ nke ọma", bullets: ["Ihe ọkụkụ, mpaghara, oge, nha ugbo", "Ihe ị chọrọ na otu ị chọrọ ya", "Ahịrịokwu dị mkpụmkpụ, ndepụta"] },
            { title: "Lelee tupu i mee ihe", bullets: ["Ọgwụ ahụhụ, ọnụọgụ, ọgwụ, ego", "Onye ndụmọdụ, agrovet, label", "AI nwere ike ezighi ezi ma ọ bụ bụrụ maka mba ọzọ"] },
            { title: "Debe ozi nzuzo n'azụ", bullets: ["Enweghị PIN, ID ma ọ bụ nọmba ụlọ akụ", "Enweghị ozi ndị ọzọ"] }
          ],
          tryIt: "Rịọ ngwa enyemaka AI n'efu ka o nye gị ndepụta kwa izu maka isi ihe ọkụkụ gị n'oge a, site n'iji ụdị prompt nkuzi a. Mee akara n'ihe ọ bụla chọrọ ilele n'isi iyi a pụrụ ịtụkwasị obi, ma lelee otu n'ime ha.",
          youCanNow: "ịjụ ngwa enyemaka AI ajụjụ ugbo doro anya ma lelee azịza ya tupu i mee ihe.",
          quickCheck: [
            { objective: "O5", q: "Kedu nke bụ ajụjụ ugbo doro anya maka ngwa enyemaka AI?", options: ["\"Ana m akọ acre 1 nke agwa na Kakamega. Mmiri ozuzo ogologo na-amalite n'ọnwa Maachị. Nye m obere ndepụta maka ịkụ ihe.\"", "\"ọrụ ugbo\"", "\"Gwa m ihe niile gbasara ihe ọkụkụ.\"", "\"agwa?\""], answer: 0, why: "Ọ na-enye ihe ọkụkụ, mpaghara, oge, nha ugbo na ihe ị chọrọ." },
            { objective: "O5", q: "Ngwa enyemaka AI nyere gị ọnụọgụ fatilaịza maka ihe ọkụkụ gị. Gịnị ka ị ga-eme?", options: ["Jiri ya taa", "Mee ya okpukpu abụọ ka i nwee nchekwa", "Lelee ya n'aka onye ndụmọdụ ọrụ ugbo gị, agrovet ma ọ bụ n'akwụkwọ dị n'ihe ahụ", "Tinye ya n'otu gị dị ka eziokwu"], answer: 2, why: "AI nwere ike inye ọnụọgụ ezighi ezi ma ọ bụ ndụmọdụ maka mba ọzọ, ya mere a ga-ebu ụzọ lelee ọnụọgụ." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ichebe na ikesa data ugbo gị",
          minutes: 5,
          goal: "Kpebie data ugbo ị ga-ekesa, onye ị ga-ekesara ya, ma chebe nke fọdụrụ.",
          text: [
            "Data ugbo gị nwere uru: ndị na-azụ ihe, ndị na-agbazinye ego, ndị inshọrans, ụlọ ọrụ na-ere ngwa ugbo na app nwere ike ịchọ ya. Ikesa ya nwere ike inyere gị aka inweta mbinye ego, inshọrans ma ọ bụ nkwekọrịta, mana ị kwesịrị ịmara ihe ị na-ekesa, ihe mere na onye ị na-ekesara ya. Gụọ ihe app ma ọ bụ mmemme kwuru na ọ ga-eme na data gị, ma kwuo mba ma ọ bụrụ na obi adịghị gị mma.",
            "Iwu nchekwa data na-enye gị ikike n'ozi onwe gị. Na Kenya, Office of the Data Protection Commissioner (ODPC) na-elekọta Data Protection Act 2019; na Naịjirịa, Nigeria Data Protection Commission (NDPC) na-elekọta Nigeria Data Protection Act 2023. Ọ bụrụ na ị na-anakọta data n'aka ndị ọrụ ugbo ndị ọzọ, dịka ọmụmaatụ dị ka onye ndu otu, ị ga-asọpụrụkwa ikike ha: rịọ nkwenye ha ma chebe ya.",
            "Chebe ekwentị gị na mpempe gị: mkpọchi ihuenyo, okwuntughe siri ike n'akaụntụ gị, ndekọ e chekwara n'ebe ọzọ (backup), na ịkpachara anya n'ekwentị a na-ekerịta. Kesaa nchịkọta (dị ka mkpụrụ kwa acre) kama ihe niile mgbe nke ahụ zuru."
          ],
          steps: ["Tupu i kesaa, jụọ: gịnị, n'ihi gịnị, onye, gịnịkwa ka m ga-enweta?", "Gụọ iwu data nke app ma ọ bụ mmemme ahụ.", "Rịọ ndị ọrụ ugbo ndị ọzọ nkwenye tupu i nakọta data ha.", "Kpọchie ekwentị gị; jiri okwuntughe siri ike; chekwaa n'ebe ọzọ.", "Kesaa nchịkọta kama ihe niile mgbe ọ bụla ị nwere ike."],
          words: [["Ozi onwe (personal data)", "ozi gbasara mmadụ a pụrụ ịmata onye ọ bụ."], ["Nkwenye (consent)", "\"ee\" doro anya mgbe mmadụ ghọtara ihe a ga-eme na data ahụ."], ["Iwu nchekwa data", "iwu na-achịkwa otu e nwere ike isi nakọta ma jiri ozi onwe."]],
          slides: [
            { title: "Data gị nwere uru", bullets: ["Ndị na-azụ ihe, ndị na-agbazinye ego, ndị inshọrans, app chọrọ ya", "Ikesa nwere ike inyere aka: mbinye ego, inshọrans, nkwekọrịta", "Mara gịnị, n'ihi gịnị, onye"] },
            { title: "Ikike gị", bullets: ["Kenya: Data Protection Act 2019, ODPC", "Naịjirịa: Data Protection Act 2023, NDPC", "Sọpụrụkwa data ndị ọrụ ugbo ndị ọzọ"] },
            { title: "Chebe ya", bullets: ["Mkpọchi ihuenyo, okwuntughe siri ike, backup", "Kpachara anya n'ekwentị a na-ekerịta", "Kesaa nchịkọta mgbe ọ zuru"] }
          ],
          sources: [ODPC, NDPC],
          tryIt: "Ọrụ ikpeazụ: mezue mpempe data ugbo gị nke oge a maka opekata mpe ala ugbo atọ, mee otu chaatị ntụnyere, dee otu mkpebi maka oge na-abịa, depụta isi iyi ndị i lelere, ma dee nzọụkwụ atọ ị na-eme iji chebe data ahụ.",
          youCanNow: "ịnakọta, inyocha, ikesa ma chebe data ugbo gị iji mee mkpebi ka mma.",
          quickCheck: [
            { objective: "O6", q: "Kedu ụlọ ọrụ na-elekọta nchekwa data na Kenya?", options: ["Kenya Meteorological Department", "Office of the Data Protection Commissioner (ODPC)", "KALRO", "Netwọk ekwentị gị"], answer: 1, why: "ODPC na-elekọta Data Protection Act 2019 nke Kenya." },
            { objective: "O6", q: "Onye na-agbazinye ego chọrọ ịhụ otu ugbo gị si arụ ọrụ. Gịnị ka ị ga-ekesa?", options: ["Okwuntughe ekwentị gị", "PIN mobile money gị", "Ozi onwe ndị otu niile", "Nchịkọta dị ka mkpụrụ kwa acre, mgbe i gụchara otu ha ga-esi jiri ya"], answer: 3, why: "Nchịkọta na-ezukarị, ị kwesịkwara ịmara ihe ị na-ekesa, ihe mere na onye ị na-ekesara ya." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Iji ozi mee mkpebi",
        questions: [
          { objective: "O4", q: "Kedu fọmụla spreadsheet na-agbakọta kọlụm ego e mefuru?", options: ["=SUM", "=PIN", "=PHOTO", "=RAIN"], answer: 0, why: "=SUM na-agbakọta igbe dị n'otu mpaghara." },
          { objective: "O4", q: "Ala ugbo A mịrị kg 900 na ọkara acre. Mkpụrụ ya kwa acre bụ:", options: ["kg 90", "kg 450", "kg 900", "kg 1,800"], answer: 3, why: "900 e kere site na acre 0.5 bụ kg 1,800 kwa acre." },
          { objective: "O5", q: "Ngwa enyemaka AI tụrụ aro ọgwụ ahụhụ na ọnụọgụ ya. Ị kwesịrị:", options: ["Fesaa ya ozugbo", "Mee ọnụọgụ ahụ okpukpu abụọ ka i nwee nchekwa", "Kesara ya PIN gị", "Lelee ndebanye aha ya na ọnụọgụ ya n'aka onye ndụmọdụ, agrovet ma ọ bụ n'akwụkwọ dị n'ihe ahụ"], answer: 3, why: "AI nwere ike ịkpọ aha ngwaahịa na ọnụọgụ ezighi ezi ma ọ bụ e debanyeghị aha." },
          { objective: "O5", q: "Kedu nke ADỊGHỊ mma ide n'ime ngwa enyemaka AI?", options: ["Ihe ọkụkụ gị na mpaghara gị", "PIN mobile money gị", "Ụbọchị oge gị", "Nha ugbo gị"], answer: 1, why: "PIN na nọmba ID ga-anọrịrị na nzuzo." },
          { objective: "O6", q: "Dị ka onye ndu otu na-anakọta data ugbo ndị otu, ị ga-:", options: ["Arịọ nkwenye ma chebe ya", "Ere ya ndị na-azụ ihe", "Itinye ya n'ịntanetị", "Inakọta ọtụtụ ka o kwere omume"], answer: 0, why: "Iwu nchekwa data na-echebe ozi onwe ndị ọzọ." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Data na Teknụzụ n'Ọrụ Ugbo",
    questions: [
      { objective: "O1", q: "Kedu nke na-abụkarị isi iyi ndụmọdụ ugbo a pụrụ ịtụkwasị obi?", options: ["Akaụntụ a na-amaghị na-ere ngwaahịa ọrụ ebube", "Ụlọ ọrụ nchọpụta dị ka KALRO ma ọ bụ onye ndụmọdụ ọrụ ugbo a zụrụ azụ", "Ozi a na-ezigharị n'aka n'aka", "Mgbasa ozi na-apụta na mberede"], answer: 1, why: "Isi iyi a zụrụ azụ, nke na-aza ajụjụ maka ihe ọ na-ekwu, ka a pụrụ ịtụkwasị obi karịa." },
      { objective: "O1", q: "Tupu i mefuo ego na ndụmọdụ ọhụrụ, ị kwesịrị:", options: ["Ime ihe ozugbo", "Ịjụ onye ị na-amaghị", "Ịlele ya n'isi iyi nke abụọ a pụrụ ịtụkwasị obi", "Ileghara ndụmọdụ niile anya"], answer: 2, why: "Isi iyi nke abụọ na-ejide mperi na aghụghọ." },
      { objective: "O1", q: "Ozi kwuru na onyinye ego gọọmentị chọrọ ụgwọ na PIN gị. Ọ bụ:", options: ["O yikarịrị ka ọ bụ aghụghọ", "Ihe nkịtị", "Ihe iwu chọrọ", "Mbinye ego"], answer: 0, why: "Ezi mmemme anaghị arịọ PIN gị." },
      { objective: "O2", q: "Data ugbo kacha baa uru i nwere na-abụkarị:", options: ["Data gbasara mba ndị ọzọ", "Mgbasa ozi", "Akụkọ ndị a ma ama", "Ndekọ ugbo nke gị"], answer: 3, why: "Ọ bụ maka ala ugbo gị, ihe i tinyere na ihe i nwetara." },
      { objective: "O2", q: "Ezigbo mpempe ugbo nwere:", options: ["Naanị otu kọlụm", "Otu ahịrị maka ihe ọ bụla mere nwere ụbọchị, ala ugbo, ọrụ, ọnụọgụ, ego e mefuru, ndetu", "Naanị foto", "Okwuntughe"], answer: 1, why: "Ahịrị na kọlụm na-adịgide na-eme ka nnyocha kwe omume." },
      { objective: "O2", q: "Pin GPS na-edekọ:", options: ["Mmiri ozuzo", "Ọnụahịa ihe ọkụkụ", "Nhazi (coordinates) nke otu ebe", "pH ala"], answer: 2, why: "Pin na-echekwa otu ebe na maapụ." },
      { objective: "O2", q: "KoboToolbox na-enyere otu aka:", options: ["Ịjupụta otu fọm ahụ n'ekwentị, ọbụlagodi n'enweghị ịntanetị", "Ịfefe drone", "Ịkwụ ụgwọ mbinye ego", "Ịkụ mkpụrụ"], answer: 0, why: "Fọm a na-ekerịta n'enweghị ịntanetị na-eme ka ịnakọta data otu dị mfe." },
      { objective: "O2", q: "Kọlụm ise a na-ejupụta kwa izu:", options: ["Ka njọ karịa kọlụm iri abụọ e jupụtara otu ugboro", "Abaghị uru", "Megidere iwu", "Ka mma karịa kọlụm iri abụọ e jupụtara otu ugboro"], answer: 3, why: "Ndekọ dị mfe a na-eme oge niile bụ ndị bara uru." },
      { objective: "O3", q: "Akwụkwọ ozi ihu igwe ugbo gọọmentị Kenya (agromet bulletins) na-esi na:", options: ["KCAA", "Kenya Meteorological Department", "Ụlọ ọrụ na-ere mkpụrụ", "ODPC"], answer: 1, why: "KMD na-ebipụta amụma ihu igwe na akwụkwọ ozi agromet." },
      { objective: "O3", q: "Maapụ FAO e si na mbara igwe lee nwere ike igosi:", options: ["Ego dị n'akaụntụ ụlọ akụ gị", "Naanị ọnụahịa n'ahịa", "Mmiri ozuzo, ahịhịa ndụ na nsogbu ọrụ ugbo", "Aha ahụhụ"], answer: 2, why: "Maapụ FAO GIEWS na-egosi mmiri ozuzo, NDVI na ihe na-egosi nsogbu." },
      { objective: "O3", q: "Obere ihe ntụ mmiri ozuzo na-enyere gị aka:", options: ["Idekọ mmiri ozuzo nke gị kwa ụbọchị", "Ibu amụma afọ na-abịa", "Ịtụ pH ala", "Ịgụ ọnụọgụ osisi"], answer: 0, why: "Ndekọ mmiri ozuzo nke gị na-ejikọta ihu igwe na mkpụrụ ị na-ewete." },
      { objective: "O4", q: "Mkpụrụ kwa acre bụ:", options: ["Owuwe ihe ubi mụbaa ọnụahịa", "Ego e mefuru e kere site n'ego a nwetara", "Nha ala ugbo mụbaa mmiri ozuzo", "Owuwe ihe ubi e kere site na nha ala ugbo"], answer: 3, why: "Ọ na-eme ka e nwee ike ịtụnyere ala ugbo nha ha dị iche." },
      { objective: "O4", q: "Chaatị ogwe na-enyere gị aka:", options: ["Izo nọmba", "Ịhụ na ịkọwa ọdịiche dị n'etiti ala ugbo", "Ichekwa foto", "Iziga ego"], answer: 1, why: "Ogwe na-eme ka ntụnyere dị mfe ịhụ." },
      { objective: "O4", q: "Mgbe ịchọtara ala ugbo gị kacha mma, nzọụkwụ ọzọ bụ:", options: ["Ihichapụ ndekọ ahụ", "Ịkwụsị idekọ", "Ịchọ ihe kpatara ya ma dee otu mkpebi maka oge na-abịa", "Ire ekwentị ahụ"], answer: 2, why: "Nnyocha kwesịrị iduga na mkpebi ị nwere ike ịnwale." },
      { objective: "O5", q: "Prompt AI doro anya maka ọrụ ugbo nwere:", options: ["Ihe ọkụkụ, mpaghara, oge, nha ugbo na ihe ị chọrọ", "Nọmba ID gị", "Naanị otu okwu", "Ozi ụlọ akụ gị"], answer: 0, why: "Ọnọdụ gị na-enyere ngwa enyemaka ahụ aka inye azịza bara uru." },
      { objective: "O5", q: "Ndụmọdụ AI gbasara ọgwụ anụmanụ kwesịrị ịbụ nke:", options: ["A na-agbaso kpọmkwem", "A na-eleghara anya kpamkpam", "A na-ekesa n'ebe niile", "E lelere n'aka dọkịta anụmanụ ma ọ bụ isi iyi a pụrụ ịtụkwasị obi tupu e mee ihe"], answer: 3, why: "AI nwere ike ezighi ezi; ọgwụ chọrọ ndụmọdụ ọkachamara." },
      { objective: "O6", q: "Na Naịjirịa, onye na-elekọta nchekwa data bụ:", options: ["NCAA", "Nigeria Data Protection Commission (NDPC)", "NiMet", "NAFDAC"], answer: 1, why: "NDPC na-elekọta Nigeria Data Protection Act 2023." },
      { objective: "O6", q: "Tupu app anakọta data ugbo gị, ị kwesịrị:", options: ["Ịghara ịgụ ihe ọ bụla", "Inye data niile", "Ịgụ ihe ọ ga-eme na data ahụ ma kpebie", "Ikesa PIN gị"], answer: 2, why: "Mara ihe ị na-ekesa, ihe mere na onye ị na-ekesara ya." },
      { objective: "O6", q: "Ikesa nchịkọta dị ka mkpụrụ kwa acre kama ihe niile:", options: ["Nwere ike izu ma chebe nzuzo gị", "Ekweghị mgbe ọ bụla", "Bụ aghụghọ", "Abaghị uru"], answer: 0, why: "Kesaa naanị ihe a chọrọ." },
      { objective: "O6", q: "Kedu nke na-eme ka data dị n'ekwentị gị dị nchebe karị?", options: ["Enweghị mkpọchi ihuenyo", "Ikesa okwuntughe", "Ọ dịghị mgbe e chekwara n'ebe ọzọ", "Mkpọchi ihuenyo, okwuntughe siri ike na backup"], answer: 3, why: "Nzọụkwụ ndị a dị mfe na-echebe ndekọ gị." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [0, 2, 4, 8, 9, 11, 12, 14, 17, 19] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ nke mpempe ahụ ma lelee ya ọzọ.",
    criteria: [
      { name: "Mpempe data ugbo", objective: "O2", notYet: "Kọlụm na-efu, ma ọ bụ a kpọrọ ala ugbo aha dị iche iche n'ahịrị dị iche iche.", meets: "Otu ahịrị maka ihe ọ bụla mere nwere ụbọchị, ala ugbo, ọrụ, ọnụọgụ na ego e mefuru, na aha ala ugbo na-adịgide, maka opekata mpe ala ugbo atọ.", exceeds: "O nwekwara ndetu nlegharị anya, foto ma ọ bụ ebe GPS jikọtara na ala ugbo ndị ahụ." },
      { name: "Ndetu ihu igwe na satịlaịtị", objective: "O3", notYet: "Enweghị amụma ihu igwe ma ọ bụ ozi mmiri ozuzo.", meets: "E dere amụma ihu igwe gọọmentị ma ọ bụ maapụ satịlaịtị ma ọ bụ mmiri ozuzo ya na isi iyi ya na ụbọchị ya.", exceeds: "O nwere ndekọ ihe ntụ mmiri ozuzo nke onye na-amụ ihe n'akụkụ amụma ihu igwe." },
      { name: "Nnyocha na chaatị", objective: "O4", notYet: "Enweghị tebụl nchịkọta, ma ọ bụ mgbakọ ezighi ezi.", meets: "Mkpụrụ na uru kwa acre ziri ezi maka ala ugbo ọ bụla ma e gosiri ha na chaatị ogwe.", exceeds: "A kọwara chaatị ahụ n'otu ahịrịokwu ma ọ bụ abụọ nye otu ma ọ bụ onye na-agbazinye ego." },
      { name: "Mkpebi maka oge na-abịa", objective: "O4", notYet: "Enweghị mkpebi, ma ọ bụ na o sitaghị na nọmba ndị ahụ.", meets: "Otu mkpebi doro anya jikọtara n'ihe mpempe ahụ gosiri.", exceeds: "Ọ na-ekwu otu ndekọ oge na-abịa ga-esi nwalee mkpebi ahụ." },
      { name: "Isi iyi e lelere", objective: "O1", notYet: "E jiri ndụmọdụ site na app, AI ma ọ bụ soshal midia n'eleleghị ya.", meets: "O dere isi iyi a pụrụ ịtụkwasị obi e ji lelee ndụmọdụ, gụnyere azịza AI ọ bụla.", exceeds: "Ọ na-akpọ aha isi iyi nke abụọ maka ndụmọdụ ọ bụla dị mkpa." },
      { name: "Data e chebere", objective: "O6", notYet: "Mpempe ahụ nwere PIN, nọmba ID ma ọ bụ data ndị ọzọ n'enweghị nkwenye ha.", meets: "Enweghị nọmba nzuzo; e nwere ndetu gbasara backup, mkpọchi ihuenyo na ihe a na-ekesa na onye a na-ekesara ya.", exceeds: "Ọ na-egosi obere nchịkọta a kwadebere maka ikesa kama mpempe ahụ niile." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma nweta Ruru eru ma ọ bụ Karịrị n'ahịrị rubric ọ bụla nke mpempe data ugbo",
      "Ndị na-amụ ihe ka na-edekọ data ugbo n'ekwentị ha mgbe ụbọchị 30 gachara (nnyocha nsochi)",
      "Ndị na-amụ ihe kwuru na ha mere mkpebi ugbo site na ndekọ nke ha ma ọ bụ lelee ndụmọdụ tupu ha azụta ngwa ugbo",
      "Ndị na-amụ ihe kwuru na ha zeere ngwa ugbo adịgboroja, onyinye ego adịgboroja ma ọ bụ aghụghọ PIN"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Smartphone nwere ịntanetị, ọbụlagodi nke dị ọnụ ala; kọmputa na-enyere aka na Isi 2",
      "Ngwa n'efu: Google Sheets ma ọ bụ ụdị weebụ n'efu nke Microsoft Excel, app maapụ, na ngwa enyemaka AI n'efu",
      "Ezi ndekọ ugbo ma ọ bụ ndekọ ọmụmaatụ maka opekata mpe ala ugbo atọ; obere ihe ntụ mmiri ozuzo ma ọ bụrụ na e nwere",
      "Ihe dị ka nkeji 60 n'ozuzu, n'oge nkenke, gbakwunyere oge iji jupụta mpempe data ugbo"
    ],
    facilitatorNotes: [
      "N'otu ndị ọrụ ugbo ma ọ bụ nnọkọ ndụmọdụ ọrụ ugbo: meenụ ule mbido ọnụ, wee mee otu mpempe ọmụmaatụ a na-ekerịta n'ekwentị ka onye ọ bụla hụ kọlụm ndị ahụ.",
      "Kwadebe data ọmụmaatụ maka ndị na-amụ ihe na-enwebeghị ndekọ, ka onye ọ bụla nwee ike ime omume fọmụla na chaatị.",
      "Ejila mgbe ọ bụla rịọ ndị na-amụ ihe ka ha dee PIN, nọmba ID ma ọ bụ ozi ụlọ akụ n'ime mpempe, fọm ma ọ bụ ngwa AI; jiri ihe nnọchi.",
      "Mgbe otu na-anakọta data ndị otu, kọwaa nkwenye ma kwekọrịta onye nwere ike ịhụ mpempe ahụ.",
      "Jiri rubric tụọ akara mpempe ikpeazụ ahụ, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};
