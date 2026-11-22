"use strict";

// Koach Learn course (Igbo translation of agriculture-africa/agri-soil-health.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

const FAO_SOM = { name: "FAO: Mkpa ihe ndụ rere ure dị n'ala (isi ihe na-eme ka ala guzosie ike n'oge ụkọ mmiri)", url: "https://www.fao.org/4/a0100e/a0100e.pdf" };
const FAO_RUNOFF = { name: "FAO: Ụzọ isi jikwaa mmiri ozuzo na-asọ asọ iji kwụsị mbibi ala", url: "https://www.fao.org/4/t1696e/t1696e02.htm" };
const FAO_MECH = { name: "FAO TECA/STI portal: Ụzọ aka e ji echebe ala iji belata mbibi ala", url: "https://sti-portal.fao.org/innovations/mechanical-soil-conservation-strategies-reduce-soil-erosion" };
const KALRO = { name: "Kenya Agricultural and Livestock Research Organization (KALRO): onye ị ga-akpọ maka nnwale ala", url: "https://www.kalro.org" };
const KALRO_SAMPLING = { name: "KALRO: Ntuziaka maka iwere ihe nlele ala na ikwado ya maka nnwale ọmụmụ ala", url: "https://kalroerepository.kalro.org/items/ab36e6de-6fdf-46dc-bfdc-044815064ec1" };
const CSIR_SRI = { name: "CSIR-Soil Research Institute, Kwadaso, Kumasi (Ghana)", url: "https://sri.csir.org.gh" };
const HANDBOOK_4R = { name: "4R Plant Nutrient Management in African Agriculture: akwụkwọ ntuziaka ndị ndụmọdụ ọrụ ugbo maka iji fatịlaịza", url: "https://alliancebioversityciat.org/publications-data/4r-plant-nutrient-management-african-agriculture-extension-handbook-fertilizer" };

module.exports = {
  id: "agri-soil-health-ig",
  lang: "ig",
  translationOf: "agri-soil-health",
  category: "Agriculture (Africa)",
  name: "Ahụike Ala na Ọmụmụ Ya",
  skills: "Ịgụ ala gị n'ubi, Iwere ihe nlele ala maka nnwale, Iwulite ihe ndụ rere ure site na kompost na nsị anụmanụ, Ịhazi mgbanwe ihe ọkụkụ na ịkọkọta ya na mkpụrụ agwa, Ịkwụsị mbibi ala site na mulch na ọrụ n'ahịrị ogo, Iji fatịlaịza site na 4R",
  outcome: "ilele ahụike ala gị, iwere ezigbo ihe nlele maka nnwale n'ụlọ nyocha, na ide atụmatụ ala nke otu oge nke na-ewulite ihe ndụ rere ure, na-agbanwe ihe ọkụkụ na mkpụrụ agwa, na-egbochi ala ka mmiri ghara ịsachapụ ya, ma na-eji fatịlaịza n'ezi ụdị, ezi ọnụọgụ, ezi oge na ezi ebe.",
  about: [
    "Ihe ọmụmụ a bụ maka obere ndị ọrụ ugbo na ndị na-eto eto n'ọrụ ugbo, ndị ọrụ n'ugbo na ndị ntorobịa na-akọ ihe na Kenya, Naịjirịa, Ghana na n'Afrịka niile, ndị chọrọ inweta ihe karịa n'otu ala ahụ. Ala gbasiri ike na-ejide mmiri karịa, na-enye ihe ọkụkụ nri nke ọma, ma na-akwụghachi shilling, naira ma ọ bụ cedi ọ bụla i tinyere na mkpụrụ na fatịlaịza.",
    "Isi 1 bụ maka ịmara ala gị: ịgụ ya site n'anya na aka gị, inweta ezigbo nnwale ala, na iwulite ihe ndụ rere ure site na kompost na nsị anụmanụ. Isi 2 bụ maka idebe ya n'ahụike site n'otu oge ruo n'ọzọ: mgbanwe ihe ọkụkụ na ịkọkọta ya na mkpụrụ agwa, mulch na ịkwụsị mbibi ala, na iji fatịlaịza nke ọma.",
    "Ala dị iche site n'otu ubi ruo n'ọzọ. Jiri ihe ọmụmụ a na nsonaazụ nnwale ala gị, na ndụmọdụ site n'aka onye ndụmọdụ ọrụ ugbo (extension officer), ụlọ nchọpụta ma ọ bụ agrovet gị, ma buru ụzọ nwalee omume ọhụrụ n'obere ala. Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise ma na-ejedebe n'ọrụ n'ugbo gị. Obere nnwale ihe ọmụma na-emechi isi ọ bụla, ule nwere ajụjụ 20 na-emechikwa ihe ọmụmụ ahụ."
  ],
  finalTask: "Dee atụmatụ ala nke otu peeji maka otu ubi n'ugbo gị (ma ọ bụ ubi ọmụmaatụ dị ka acre 1 nke ọka na agwa na Kakamega, acre 2 nke akpụ na Oyo, ma ọ bụ acre 1 nke tomato nso Kumasi): ihe ilele ubi gị chọpụtara, mgbe na ebe ị ga-enweta nnwale ala (ma ọ bụ ihe nnwale ahụ kwuru), otu ị ga-esi tinye ihe ndụ rere ure, mgbanwe ihe ọkụkụ gị ma ọ bụ ịkọkọta ya na mkpụrụ agwa, otu ị ga-esi kpuchie ala ma kwụsị mbibi ala, na atụmatụ fatịlaịza gị e dere dị ka ụdị, ọnụọgụ, oge na ebe.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Obere ndị ọrụ ugbo na ndị na-eto eto n'ọrụ ugbo, ndị ọrụ n'ugbo na ndị ntorobịa na-akọ ihe na Kenya, Naịjirịa, Ghana na n'Afrịka niile, ndị chọrọ inweta ihe karịa n'otu ala ahụ, ndị na-akọ ihe ọkụkụ dị ka ọka, agwa, akpụ na tomato.",
    startingPoint: "Ọtụtụ na-akụ ihe kwa oge ma na-eji ntakịrị nsị anụmanụ ma ọ bụ fatịlaịza, ọtụtụ mgbe site n'omume ma ọ bụ ndụmọdụ onye agbata obi. Ọ bụ mmadụ ole na ole lelerela ala ha n'ubi, nwalee ala, mee kompost, hazie mgbanwe ihe ọkụkụ, wuo ihe e ji egbochi mbibi ala n'ahịrị ogo, ma ọ bụ jiri fatịlaịza site na 4R.",
    gap: "Ala ike gwụrụ, ala nwere asịd ma ọ bụ ala mmiri sachapụrụ na-emefu ego e tinyere na mkpụrụ na fatịlaịza, ma na-eme ka ihe ọkụkụ ghara ike n'oge ụkọ mmiri. Ịmara ala ha na iwulite ya kwa oge na-enyere ndị ọrụ ugbo aka ijide mmiri karịa, nye ihe ọkụkụ nri nke ọma, ma nweta owuwe ihe ubi karịa site n'akpa fatịlaịza ọ bụla.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ; a na-akọwa okwu ọ bụla gbasara ala",
      "Ngwaọrụ: shọvel, bọket na ekwentị nkịtị; ọtụtụ omume na-eme n'ubi",
      "Oge: nkuzi dị ihe dị ka nkeji 5 nke dabara n'etiti ọrụ ugbo",
      "Ala dị iche n'ubi n'ubi: ọnụọgụ fatịlaịza na-esi na nnwale ala, ndị ndụmọdụ ma ọ bụ nchọpụta, a na-ebukwa ụzọ nwalee omume ọhụrụ n'obere ala",
      "Ụgwọ ụlọ nyocha, ebe ha dị na oge ichere na-agbanwe: ndị na-amụ ihe na-akpọ oku ma ọ bụ lelee tupu ha aga"
    ],
    prerequisites: "Ọ dịghị."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "N'otu n'ime ubi gị", action: "ilele agba, ụdị ala, ikpuru ala, mgbọrọgwụ, mmiri na ihe ịrịba ama n'ihe ọkụkụ, ma dee ihe ọ na-egosi", standard: "na-ewere ihe ịrịba ama n'ihe ọkụkụ dị ka ihe na-egosi ụzọ, nke nnwale ala ga-akwado" },
    { id: "O2", condition: "Maka otu ubi", action: "iwere ihe nlele ala n'ụzọ ziri ezi ma kwuo ebe a ga-ezigara ya maka nnwale", standard: "site n'ọtụtụ obere ihe nlele a gwakọtara ka ọ bụrụ otu ihe nlele dị ọcha maka akụkụ ubi ọ bụla" },
    { id: "O3", condition: "Site n'iji ihe fọdụrụ n'ubi, akwụkwọ ndụ na nsị anụmanụ", action: "ime ọkpọ kompost ma hazie otu a ga-esi tinye ihe ndụ rere ure", standard: "n'akpọghị ihe fọdụrụ n'ubi ọkụ, n'etinyeghịkwa nsị anụmanụ ọhụrụ n'ihe ọkụkụ na-eto eto" },
    { id: "O4", condition: "Maka otu ubi", action: "ịhazi mgbanwe ihe ọkụkụ nke oge atọ na ịkọkọta ihe na mkpụrụ agwa", standard: "nwere mkpụrụ agwa n'atụmatụ ahụ na ohere na-ekwe ka ihe ọkụkụ abụọ ahụ nweta ìhè" },
    { id: "O5", condition: "Maka ubi dị n'ugwu ma ọ bụ nke tọgbọrọ chakoo", action: "ịhọrọ mulch na ihe e ji egbochi mbibi ala ma tọọ ha n'ahịrị ogo", standard: "na-akara ahịrị ogo ahụ site n'enyemaka ndị ndụmọdụ ebe ọ dị mkpa" },
    { id: "O6", condition: "Maka otu ihe ọkụkụ", action: "ide atụmatụ fatịlaịza site n'iji ezi ụdị, ezi ọnụọgụ, ezi oge na ezi ebe", standard: "na-ewere ọnụọgụ site na nnwale ala ma ọ bụ ndụmọdụ mpaghara" }
  ],
  chapters: [
    {
      name: "Isi 1: Ịmara ala gị na inye ya nri",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ịgụ ala gị site n'anya na aka gị",
          minutes: 5,
          goal: "Mee ilele ala gị dị mfe n'ubi ma dee ihe ọ gwara gị.",
          text: [
            "Ị nwere ike ịmụta ọtụtụ ihe gbasara ala site na shọvel, aka gị na anya gị. Ala gbasiri ike na-acha oji, na-agbaji ngwa ngwa, ma na-esi isi ala. O nwere ikpuru ala (earthworm) na obere anụ ndị ọzọ, mgbọrọgwụ na-abanye n'ime ime, mmiri ozuzo na-abanyekwa n'ime ya kama ịsọpụ. Ala na-adịghị mma na-acha ọcha ma ọ bụ sie ike, na-eme akpụkpọ n'elu mgbe mmiri zochara, na-agbawa nke ukwuu mgbe ọ kpọrọ nkụ, ma ọ bụ na-anọ mmiri mmiri ma na-esi ísì ọjọọ.",
            "Metụ ụdị ala ahụ: mee ka obere ala gbaa mmiri, kpụọ ya ka ọ dị okirikiri, ma tee ya n'etiti mkpịsị aka gị. Ala ájá na-adị ka ájá ma na-agbasa; mmiri na-esi na ya apụ ngwa ngwa, ọ na-atụfukwa nri ala. Ala ụrọ na-arapara n'aka ma ị nwere ike ịkpụ ya ka ọ dị ogologo na mkpa; ọ na-ejide mmiri na nri ala mana mmiri nwere ike ijupụta ya ma ọ sie ike. Ala loam dị n'etiti ha abụọ, ọ kachakwa mfe ịkọ.",
            "Lee ihe ọkụkụ anya kwa. Akwụkwọ ọka dị n'ala na-acha odo odo nwere ike ịpụta na nitrogen adịghị ezu. Akwụkwọ ọka na-eto eto na-acha odo ọbara nwere ike ịpụta na phosphorus adịghị ezu. Ahịhịa dị ka striga (witchweed) na-egosikarị ala ike gwụrụ nke na-enweghị ọmụmụ. Ndị a bụ ihe na-egosi ụzọ, ọ bụghị ihe akaebe: nnwale ala na-agwa gị n'ezie."
          ],
          steps: ["Gwuo olulu dị ihe dị ka otu shọvel n'omimi n'ebe atọ n'ubi ahụ.", "Lee agba, ọkwa ala, mgbọrọgwụ na ọkwa ọ bụla siri ike.", "Gụọ ikpuru ala dị n'otu shọvel ala.", "Mee ka okirikiri ala gbaa mmiri ma metụ ya: dị ka ájá (ala ájá), na-arapara (ala ụrọ) ma ọ bụ n'etiti (loam).", "Mgbe mmiri zochara, dee ebe mmiri na-asọpụ ma ọ bụ na-anọ.", "Dee ihe ịchọpụtara maka akụkụ ubi ọ bụla."],
          words: [["Ụdị ala (soil texture)", "otú ala si bụrụ ájá, silt ma ọ bụ ụrọ; ọ na-ekpebi otú mmiri si esi na ya apụ ngwa ngwa."], ["Loam", "ala nwere ezigbo ngwakọta ájá, silt na ụrọ."], ["Hardpan", "ọkwa siri ike n'okpuru elu ala nke mgbọrọgwụ na mmiri na-enweghị ike ịgafe."], ["Striga", "ahịhịa na-ebi n'ahụ ihe ọkụkụ ndị ọzọ (witchweed) nke na-awakpo ọka, sorghum na millet, a na-ahụkarị ya n'ala na-adịghị mma."]],
          slides: [
            { title: "Ala gbasiri ike", bullets: ["Na-acha oji, na-agbaji ngwa ngwa, na-esi isi ala", "Ikpuru ala na mgbọrọgwụ na-abanye n'ime ime", "Mmiri ozuzo na-abanye n'ime ya, ọ naghị asọpụ"] },
            { title: "Metụ ụdị ala ahụ", bullets: ["Dị ka ájá ma na-agbasa: ala ájá, mmiri na-apụ ngwa ngwa", "Na-arapara, a na-akpụ ya ogologo: ala ụrọ, na-ejide mmiri", "N'etiti ha: loam, kachasị mfe ịkọ"] },
            { title: "Ihe ọkụkụ na-egosi ụzọ (ọ bụghị akaebe)", bullets: ["Akwụkwọ ọka dị n'ala na-acha odo odo: ma eleghị anya nitrogen adịghị ezu", "Akwụkwọ ọka na-eto eto na-acha odo ọbara: ma eleghị anya phosphorus adịghị ezu", "Ọtụtụ striga: na-abụkarị ala ike gwụrụ, nke na-adịghị mma"] },
            { title: "Ilele ubi", bullets: ["Gwuo n'ebe atọ", "Lee anya, sie isi, gụọ ikpuru ala, metụ ụdị ala", "Lee mmiri mgbe mmiri zochara; dee ya"] }
          ],
          tryIt: "Lelee otu n'ime ubi gị: gwuo n'ebe atọ, metụ ụdị ala, gụọ ikpuru ala, ma dee otu ahịrị maka ebe ọ bụla. Were ekwentị see foto olulu ọ bụla ka i wee nwee ike ịtụnyere ya n'oge ọzọ.",
          youCanNow: "ilele ala gị n'ubi ma kọwaa ụdị ala ya, ihe ndụ dị n'ime ya, otú mmiri si apụ na ya, na ihe ịdọ aka na ntị.",
          quickCheck: [
            { objective: "O1", q: "Gịnị ka akwụkwọ ọka dị n'ala na-acha odo odo nwere ike igosi?", options: ["Mmiri karịrị akarị n'akwụkwọ ya", "Anwụ karịrị akarị", "Ezigbo uto", "Nitrogen adịghị ezu"], answer: 3, why: "Akwụkwọ ọka dị n'ala na-acha odo odo nwere ike ịpụta na nitrogen adịghị ezu; nnwale ala na-akwado ya." },
            { objective: "O1", q: "Mgbe mmiri zochara, ubi gị na-eme akpụkpọ siri ike n'elu, mmiri na-asọpụkwa. Gịnị ka ị ga-ede n'ilele ubi gị?", options: ["Ala gbasiri ike; ọ dịghị mgbanwe dị mkpa", "Ihe ịrịba ama nke ala na-adịghị mma, nke nnwale ala ga-akwado", "Ikpuru ala karịrị akarị", "Loam zuru oke"], answer: 1, why: "Akpụkpọ siri ike na mmiri na-asọpụ bụ ihe ịrịba ama nke ala na-adịghị mma; nnwale ala na-agwa gị n'ezie ihe ọ chọrọ." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Inweta nnwale ala na iwere ezigbo ihe nlele",
          minutes: 5,
          goal: "Were ihe nlele ala n'ụzọ ziri ezi ma mara ebe ị ga-ezigara ya maka nnwale.",
          text: [
            "Nnwale ala na-agwa gị ihe anya gị na-enweghị ike ịhụ: otú ala si nwee asịd (pH) na ole nri ala ndị bụ isi o nwere. Ọtụtụ ala n'akụkụ Kenya, Naịjirịa na Ghana ebe mmiri na-ezo nke ukwuu nwere asịd, nke na-akpọchi nri ala ka ihe ọkụkụ ghara inweta ya; nnwale na-agwa gị ma lime ga-enyere aka. Na-enweghị nnwale, ị nwere ike imefu ego na fatịlaịza na-ezighi ezi.",
            "Ebe ị ga-enweta nnwale: na Kenya, KALRO nwere ụlọ nyocha ala (dịka ọmụmaatụ ụlọ nyocha ọmụmụ ala ya dị na Kabete, Nairobi), ụfọdụ county nwekwara ụlọ nyocha ala nke ha. Na Ghana, CSIR-Soil Research Institute dị na Kwadaso, Kumasi na-enye nyocha n'ụlọ nyocha. Na Naịjirịa na n'ebe ndị ọzọ, jụọ ọfịs ndụmọdụ ọrụ ugbo nke steeti gị ma ọ bụ county gị, mahadum ọrụ ugbo ma ọ bụ ụlọ nchọpụta. Ụgwọ, ebe ụlọ nyocha dị na oge ichere na-agbanwe, ya mere kpọọ oku ma ọ bụ lelee tupu ị gaa.",
            "Ntuziaka KALRO n'onwe ya kwuru na iwere ihe nlele bụ ebe kachasị enwe mperi na nnwale ala. Otu aka ala site n'otu ebe anaghị anọchi anya ubi niile. Were ọtụtụ obere ihe nlele n'ubi niile, gwakọta ha, ma zipu otu ihe nlele dị ọcha a gwakọtara maka ubi ọ bụla ma ọ bụ akụkụ ọ bụla dị iche."
          ],
          steps: ["Họrọ otu ubi (ma ọ bụ otu akụkụ yiri onwe ya).", "Jee ije n'ụzọ zigzag ma were obere ihe nlele 10 ruo 20, n'elu 15 ruo 20 cm, site na shọvel ma ọ bụ auger dị ọcha.", "Zere ebe pụrụ iche: ebe a kpọkọbara nsị anụmanụ na mbụ, ntụ, ụzọ, ebe ahụhụ nwere ụlọ, ahịrị fatịlaịza.", "Gwakọta ihe nlele niile nke ọma na bọket dị ọcha (ọ bụghị akpa fatịlaịza).", "Were ihe dị ka ọkara kilo nke ngwakọta ahụ, mee ka ọ kpọọ nkụ na ndò, ma dee aha na ya: aha gị, ubi, ụbọchị, ihe ọkụkụ ị chọrọ ịkụ.", "Buru ya gaa ụlọ nyocha tupu oge ịkụ ihe ka nsonaazụ wee bịa n'oge."],
          words: [["pH", "ọnụọgụ na-egosi otú ala si nwee asịd ma ọ bụ alkali; ọtụtụ ihe ọkụkụ na-achọ ya nso n'etiti."], ["Ala nwere asịd", "ala nwere pH dị ala nke na-akpọchi nri ala dị ka phosphorus."], ["Lime", "nkume a kwọrọ akwọ nke na-ebelata asịd dị n'ala."], ["Ihe nlele a gwakọtara (composite sample)", "ọtụtụ obere ihe nlele site n'otu ubi a gwakọtara ka ọ bụrụ otu."]],
          slides: [
            { title: "Gịnị mere ị ga-eji nwalee?", bullets: ["Na-egosi pH na nri ala ndị bụ isi", "Na-agwa gị ma lime ga-enyere aka", "Na-egbochi imefu ego na fatịlaịza na-ezighi ezi"] },
            { title: "Ebe ị ga-anwale", bullets: ["Kenya: ụlọ nyocha KALRO (dị ka Kabete) na ụfọdụ ụlọ nyocha county", "Ghana: CSIR-Soil Research Institute, Kumasi", "N'ebe ndị ọzọ: ọfịs ndụmọdụ ọrụ ugbo, mahadum, ụlọ nchọpụta"] },
            { title: "Were ezigbo ihe nlele", bullets: ["Zigzag, ebe 10 ruo 20, n'elu 15 ruo 20 cm", "Zere ebe nsị anụmanụ, ntụ, ụzọ, ebe ahụhụ nwere ụlọ", "Gwakọta na bọket dị ọcha; zipu ihe dị ka ọkara kilo"] },
            { title: "Dee aha ma hazie oge", bullets: ["Aha, ubi, ụbọchị, ihe ọkụkụ ị chọrọ ịkụ", "Mee ka ọ kpọọ nkụ na ndò", "Zipu tupu oge ịkụ ihe; buru ụzọ lelee ụgwọ na ụlọ nyocha"] }
          ],
          sources: [KALRO, KALRO_SAMPLING, CSIR_SRI],
          tryIt: "Chọta ebe kacha nso gị na-anwale ala: kpọọ onye ndụmọdụ ọrụ ugbo gị ma ọ bụ lelee KALRO, CSIR-SRI ma ọ bụ ụlọ nchọpụta steeti gị. Dee aha ya, ụgwọ ya na oge ichere. Wee kaa n'eserese ubi gị ụzọ zigzag ị ga-esi jee ije iwere ihe nlele.",
          youCanNow: "iwere ezigbo ihe nlele ala a gwakọtara ma mara ebe a ga-anwale ya.",
          quickCheck: [
            { objective: "O2", q: "Gịnị ka pH ala na-agwa gị?", options: ["Otú ala si nwee asịd", "Ole ikpuru ala o nwere", "Otú mgbọrọgwụ si abanye n'ime", "Ole mmiri zoro"], answer: 0, why: "pH na-egosi otú ala si nwee asịd; ala nwere asịd na-akpọchi nri ala, ọ pụkwara ịchọ lime." },
            { objective: "O2", q: "Mmiri jupụtara otu akụkụ ubi gị, akụkụ nke ọzọ kpọrọ nkụ ma bụrụ ájá. Kedu otu ị ga-esi were ihe nlele?", options: ["Otu aka site n'etiti", "Gwakọta akụkụ mmiri na nke kpọrọ nkụ ka ọ bụrụ otu ihe nlele", "Zipu ihe nlele a gwakọtara iche maka akụkụ ọ bụla dị iche", "Were naanị nso ebe nsị anụmanụ"], answer: 2, why: "Ubi ọ bụla, ma ọ bụ akụkụ ọ bụla dị iche, na-enweta ihe nlele dị ọcha a gwakọtara nke ya." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Iwulite ihe ndụ rere ure site na kompost na nsị anụmanụ",
          minutes: 5,
          goal: "Mee ọkpọ kompost ma jiri nsị anụmanụ n'enweghị nsogbu iwulite ihe ndụ rere ure n'ala.",
          text: [
            "Ihe ndụ rere ure (organic matter) bụ ihe fọdụrụ nke osisi na anụmanụ rere ure, na-acha oji, dị n'ala. FAO kpọrọ ya isi ihe na-eme ka ala guzosie ike n'oge ụkọ mmiri: ọ na-ejide mmiri dị ka ogbo, na-azụ ikpuru ala na ihe ndụ dị n'ala, na-ejide nri ala ka mmiri ozuzo ghara ịsachapụ ya, ma na-eme ka ala na-agbaji ngwa ngwa ka mgbọrọgwụ wee too.",
            "Ị na-etinye ihe ndụ rere ure site n'ịhapụ ihe fọdụrụ n'ubi n'ubi kama ịkpọ ha ọkụ, site n'itinye nsị anụmanụ na kompost, na site n'ịkụ mkpụrụ agwa na ihe ọkụkụ e ji ekpuchi ala. Ịkpọ ihe fọdụrụ ọkụ na ịkọ ala ugboro ugboro na-eri ihe ndụ rere ure abụọ.",
            "Kompost dị mfe ime: wuo ọkpọ ma ọ bụ olulu nwere ọkwa ihe kpọrọ nkụ (okporo ọka, ahịhịa kpọrọ nkụ), ihe ndụ (ahịhịa ọhụrụ, akwụkwọ osisi, ihe fọdụrụ na kichin) na nsị anụmanụ, tinye ntakịrị ala n'etiti ọkwa ọ bụla. Mee ka ọ dị mmiri mmiri dị ka ogbo a pịara apị, ma tụgharịa ya kwa izu abụọ ruo atọ. Ọ na-adị njikere n'ihe dị ka ọnwa abụọ ruo atọ mgbe ọ na-acha oji, na-agbaji ngwa ngwa ma na-esi isi ala. Hapụ nsị anụmanụ ọhụrụ ka ọ ree ure tupu i jiri ya; nsị anụmanụ ọhụrụ na-ekpo ọkụ nwere ike ịgba ihe ọkụkụ na-eto eto ọkụ."
          ],
          steps: ["Họrọ ebe nwere ndò nso ubi na mmiri.", "Tọọ okporo osisi siri ike n'ala ka ikuku wee na-abanye.", "Tinye ọkwa: ihe kpọrọ nkụ, ihe ndụ, nsị anụmanụ, ntakịrị ala; megharịa ya.", "Gbaa ọkwa ọ bụla mmiri ka ọ dị mmiri mmiri, ọ bụghị ka mmiri jupụta ya.", "Tinye osisi n'ime ọkpọ ahụ; ọ bụrụ na ọ na-ekpo ọkụ, ọ na-arụ ọrụ.", "Tụgharịa ọkpọ ahụ kwa izu abụọ ruo atọ.", "Jiri ya mgbe ọ na-acha oji ma na-agbaji ngwa ngwa, n'olulu ịkụ ihe ma ọ bụ n'ahịrị."],
          words: [["Ihe ndụ rere ure (organic matter)", "ihe osisi na anụmanụ rere ure dị n'ala nke na-ejide mmiri na nri ala."], ["Kompost", "ihe fọdụrụ nke osisi na anụmanụ rere ure, e ji enye ala nri."], ["Ihe fọdụrụ n'ubi (crop residues)", "okporo, akwụkwọ na mkpụrụ akpụkpọ fọdụrụ mgbe e wesịrị ihe ubi."], ["Ihe ọkụkụ e ji ekpuchi ala (cover crop)", "ihe ọkụkụ a na-akụ karịsịa iji kpuchie ala ma nye ya nri."]],
          slides: [
            { title: "Gịnị mere ihe ndụ rere ure ji dị mkpa", bullets: ["Na-ejide mmiri dị ka ogbo (FAO)", "Na-azụ ihe ndụ dị n'ala ma na-ejide nri ala", "Na-eme ka ala na-agbaji ngwa ngwa maka mgbọrọgwụ"] },
            { title: "Tinye ya, akpọla ya ọkụ", bullets: ["Hapụ ihe fọdụrụ n'ubi; akpọla ha ọkụ", "Tinye nsị anụmanụ na kompost", "Kụọ mkpụrụ agwa na ihe ọkụkụ e ji ekpuchi ala"] },
            { title: "Mee kompost", bullets: ["Ọkwa: ihe kpọrọ nkụ, ihe ndụ, nsị anụmanụ, ntakịrị ala", "Mmiri mmiri dị ka ogbo a pịara apị", "Tụgharịa kwa izu abụọ ruo atọ; ọ dị njikere n'ọnwa 2 ruo 3"] },
            { title: "Nsị anụmanụ n'enweghị nsogbu", bullets: ["Buru ụzọ hapụ nsị anụmanụ ọhụrụ ka ọ ree ure", "Nsị anụmanụ ọhụrụ na-ekpo ọkụ nwere ike ịgba ihe ọkụkụ na-eto eto ọkụ", "Kwọọ aka gị mgbe i jisịrị ya"] }
          ],
          sources: [FAO_SOM],
          tryIt: "Malite ọkpọ ma ọ bụ olulu kompost n'izu a site n'ihe i nwere: okporo, ahịhịa, ihe fọdụrụ na kichin na nsị anụmanụ. Dee ụbọchị, ọkwa i tinyere, ma tinye ncheta n'ekwentị gị ka ị tụgharịa ya n'izu abụọ.",
          youCanNow: "ime kompost, iji nsị anụmanụ n'enweghị nsogbu, na ịkọwa otu ihe ndụ rere ure si enyere ala gị aka.",
          quickCheck: [
            { objective: "O3", q: "Gịnị na-abanye n'ọkpọ kompost?", options: ["Naanị plastik na tin", "Naanị nsị anụmanụ ọhụrụ", "Ọkwa ihe kpọrọ nkụ, ihe ndụ na nsị anụmanụ, nwere ntakịrị ala n'etiti ha", "Naanị ntụ site n'ihe fọdụrụ a kpọrọ ọkụ"], answer: 2, why: "A na-ewu kompost n'ọkwa ihe kpọrọ nkụ, ihe ndụ na nsị anụmanụ, a na-edebe ya mmiri mmiri ma na-atụgharị ya." },
            { objective: "O3", q: "Mgbe ihe dị ka ọnwa atọ gachara, kompost gị na-acha oji, na-agbaji ngwa ngwa ma na-esi isi ala. Gịnị ka ị ga-eme?", options: ["Jiri ya; ọ dị njikere", "Kpọọ ya ọkụ", "Tụfuo ya", "Hapụ ya afọ abụọ ọzọ"], answer: 0, why: "Kompost dị njikere mgbe ọ na-acha oji, na-agbaji ngwa ngwa ma na-esi isi ala, mgbe ihe dị ka ọnwa abụọ ruo atọ gachara." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ịmara ala gị na inye ya nri",
        questions: [
          { objective: "O1", q: "Ị mere ka okirikiri ala gbaa mmiri, ọ na-adịkwa ka ájá ma na-agbasa. Kedu ụdị ala ọ kachasị ịbụ?", options: ["Ala ụrọ", "Ala ájá", "Loam", "Peat"], answer: 1, why: "Ala dị ka ájá ma na-agbasa bụ ala ájá; mmiri na-esi na ya apụ ngwa ngwa, ọ na-atụfukwa nri ala." },
          { objective: "O1", q: "Ọka na-eto eto nwere akwụkwọ na-acha odo ọbara. Gịnị bụ nzọụkwụ kacha mma ọzọ?", options: ["Zụta fatịlaịza ọ bụla ozugbo", "Kpọọ ubi ahụ ọkụ", "Were ya dị ka ihe na-egosi ụzọ ma jiri nnwale ala kwado ya", "Fopụ ihe ọkụkụ ahụ"], answer: 2, why: "Agba akwụkwọ bụ ihe na-egosi ụzọ, ọ bụghị akaebe; nnwale ala na-agwa gị n'ezie." },
          { objective: "O2", q: "Kedu otu ị ga-esi were ihe nlele ala n'ubi?", options: ["Otu aka site n'ebe kacha mma", "Ala site n'ebe a kpọkọbara nsị anụmanụ na mbụ", "Ala site n'ụzọ, ebe ọ dị mfe igwu", "Obere ihe nlele 10 ruo 20 n'ụzọ zigzag, a gwakọtara ka ọ bụrụ otu"], answer: 3, why: "Ihe nlele a gwakọtara site n'ọtụtụ ebe na-anọchi anya ubi niile; KALRO kwuru na iwere ihe nlele bụ ebe kachasị enwe mperi." },
          { objective: "O2", q: "Na Ghana, kedu ụlọ ọrụ na-enye nyocha ala n'ụlọ nyocha?", options: ["CSIR-Soil Research Institute, Kumasi", "Otu egwuregwu bọọlụ mba", "Ụlọ ọrụ na-ahụ maka ihu igwe", "Ọfịs nzipu ozi (post office)"], answer: 0, why: "CSIR-Soil Research Institute dị na Kwadaso, Kumasi na-enye nyocha n'ụlọ nyocha." },
          { objective: "O3", q: "Gịnị ka ị ga-eme okporo ọka mgbe e wesịrị ihe ubi iji wulite ahụike ala?", options: ["Kpọọ ha ọkụ", "Hapụ ha ma ọ bụ mee ha kompost", "Tụnye ha n'osimiri", "Ree ha niile kwa oge"], answer: 1, why: "Ihe fọdụrụ a hapụrụ n'ubi ma ọ bụ e mere kompost na-etinye ihe ndụ rere ure; ịkpọ ha ọkụ na-eri ya." }
        ]
      }
    },
    {
      name: "Isi 2: Idebe ala n'ahụike site n'otu oge ruo n'ọzọ",
      lessons: [
        {
          objectives: ["O4"],
          title: "Mgbanwe ihe ọkụkụ na ịkọkọta ihe na mkpụrụ agwa",
          minutes: 5,
          goal: "Hazie mgbanwe ihe ọkụkụ nke oge atọ na ịkọkọta ihe na mkpụrụ agwa maka otu ubi.",
          text: [
            "Ịkụ otu ihe ọkụkụ n'otu ubi kwa oge na-ewepụ otu nri ala ahụ ma na-eme ka ụmụ ahụhụ ya, ọrịa ya na ahịhịa ya baa ụba. Mgbanwe ihe ọkụkụ (crop rotation) pụtara ịgbanwe ihe ọkụkụ n'ubi site n'otu oge ruo n'ọzọ, dịka ọmụmaatụ ọka, wee agwa ma ọ bụ ahụekere, wee sorghum ma ọ bụ akpụ.",
            "Mkpụrụ agwa dị ka agwa, akịdị (cowpea), ahụekere, soybean na pigeon pea na-arụkọ ọrụ na nje bacteria dị n'obere ọkpụrụkpụ (nodules) dị na mgbọrọgwụ ha iji were nitrogen site n'ikuku. Ụfọdụ nitrogen ahụ na-anọ na mgbọrọgwụ na akwụkwọ maka ihe ọkụkụ na-esote, karịsịa ma ọ bụrụ na ị hapụ ihe fọdụrụ n'ubi.",
            "Ịkọkọta ihe (intercropping) pụtara ịkụ ihe ọkụkụ abụọ ọnụ, dị ka ọka na agwa, sorghum na akịdị, ma ọ bụ akpụ na ahụekere. Ọ na-ekpuchi ala, na-ekesa ihe egwu, ma nwee ike inye nri karịa n'otu ala ahụ. Debe ohere na-ekwe ka ihe ọkụkụ abụọ ahụ nweta ìhè, ma kụọ mkpụrụ agwa ahụ n'oge ga-ekwe ka o guzosie ike."
          ],
          steps: ["Depụta ubi ndị ị na-akọ na ihe toro n'ubi ọ bụla n'oge gara aga.", "Hazie oge atọ na-abịa ka ubi ọ bụla ghara inwe otu ihe ọkụkụ ugboro abụọ n'usoro.", "Tinye mkpụrụ agwa n'ubi ọ bụla opekata mpe otu ugboro n'ime oge atọ.", "Họrọ otu ụzọ ịkọkọta ihe, dị ka ọka na agwa.", "Hapụ ihe fọdụrụ nke mkpụrụ agwa n'ubi mgbe e wesịrị ihe ubi."],
          words: [["Mgbanwe ihe ọkụkụ (crop rotation)", "ịgbanwe ihe ọkụkụ a na-akụ n'ubi site n'otu oge ruo n'ọzọ."], ["Mkpụrụ agwa (legume)", "ihe ọkụkụ dị ka agwa, akịdị ma ọ bụ ahụekere nke nwere ike itinye nitrogen n'ala."], ["Nodules", "obere ọkpụrụkpụ dị na mgbọrọgwụ mkpụrụ agwa ebe nje bacteria na-ewere nitrogen site n'ikuku."], ["Ịkọkọta ihe (intercropping)", "ịkụ ihe ọkụkụ abụọ ma ọ bụ karịa ọnụ n'otu ubi."]],
          slides: [
            { title: "Gịnị mere a ga-eji gbanwee ihe ọkụkụ", bullets: ["Otu ihe ọkụkụ kwa oge na-ewepụ otu nri ala ahụ", "Ụmụ ahụhụ, ọrịa na ahịhịa na-aba ụba", "Ọmụmaatụ: ọka, wee agwa, wee sorghum"] },
            { title: "Mkpụrụ agwa na-enye ala nri", bullets: ["Agwa, akịdị, ahụekere, soybean, pigeon pea", "Nodules dị na mgbọrọgwụ na-ewere nitrogen site n'ikuku", "Hapụ ihe fọdụrụ ka ihe ọkụkụ na-esote rite uru"] },
            { title: "Ịkọkọta ihe", bullets: ["Ọka + agwa, sorghum + akịdị, akpụ + ahụekere", "Na-ekpuchi ala ma na-ekesa ihe egwu", "Debe ohere ka ihe ọkụkụ abụọ ahụ nweta ìhè"] }
          ],
          sources: [FAO_SOM],
          tryIt: "See tebụl dị mfe: ubi gị n'akụkụ, oge atọ na-abịa n'elu. Dejupụta ihe ọkụkụ n'igbe ọ bụla ka ubi ọ bụla nweta mkpụrụ agwa otu ugboro, ka ubi ọ bụla ghara ịkụgharị otu ihe ọkụkụ. Gwupụta otu osisi agwa ma ọ bụ ahụekere ma lee nodules na mgbọrọgwụ ya.",
          youCanNow: "ịhazi mgbanwe ihe ọkụkụ na ịkọkọta ihe na mkpụrụ agwa nke na-enye ala gị nri.",
          quickCheck: [
            { objective: "O4", q: "Gịnị bụ nodules dị na mgbọrọgwụ mkpụrụ agwa?", options: ["Ihe ịrịba ama nke ọrịa", "Obere ọkpụrụkpụ ebe nje bacteria na-ewere nitrogen site n'ikuku", "Akwa ụmụ ahụhụ", "Nkume dị n'ala"], answer: 1, why: "Mkpụrụ agwa na-arụkọ ọrụ na nje bacteria dị na nodules nke mgbọrọgwụ iji were nitrogen site n'ikuku." },
            { objective: "O4", q: "Ị kụkọtara ọka na agwa, mana agwa ahụ anaghị enweta ìhè. Gịnị ka ị ga-agbanwe?", options: ["Kwụsị ịkụ agwa", "Kpọọ ọka ahụ ọkụ", "Tinye mkpụrụ karịa", "Jiri ohere na-ekwe ka ihe ọkụkụ abụọ ahụ nweta ìhè, ma kụọ agwa ahụ n'oge"], answer: 3, why: "Ịkọkọta ihe chọrọ ohere na-ekwe ka ihe ọkụkụ abụọ ahụ nweta ìhè, a kụọkwa mkpụrụ agwa ahụ n'oge ga-ekwe ka o guzosie ike." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Mulch na ịkwụsị mbibi ala",
          minutes: 5,
          goal: "Họrọ ma tọọ mulch na ụzọ dị mfe e ji egbochi mbibi ala maka ubi dị n'ugwu.",
          text: [
            "Ala tọgbọrọ chakoo bụ ala furu efu. Mmiri ozuzo siri ike na-akụpụ ala, mmiri na-asọ asọ na-ebupụkwa ọkwa elu kacha baa ọgaranya. Mulch, bụ ọkwa ihe fọdụrụ n'ubi, ahịhịa kpọrọ nkụ ma ọ bụ akwụkwọ osisi n'elu ala, na-eme ka mmiri ozuzo dajụọ, na-eme ka ala nọrọ mmiri mmiri ma dị jụụ, ma na-enye ala nri ka ọ na-ere ure. FAO kwuru na n'ala dị n'ugwu, a ga-ekpuchi akụkụ ala karịa site n'ihe fọdụrụ n'ubi iji kwụsị mbibi ala karịa n'ala dị larịị.",
            "N'ala dị n'ugwu, rụọ ọrụ n'ofe ugwu ahụ, ọ bụghị n'elu na n'ala ya. Kụọ ihe ma kpụọ ebe n'ahịrị ogo (contour: ahịrị nwere otu ogo n'ofe ugwu). FAO kọwara ebe a kpụrụ n'ahịrị ogo dị ka ezigbo ụzọ maka obere ndị ọrụ ugbo nwere ngwa aka ma ọ bụ ehi, na ahịrị ahịhịa (dịka ọmụmaatụ ahịhịa Napier) n'ahịrị ogo dị ka ụzọ dị ọnụ ala karịa terraces; ahịhịa ahụ nwekwara ike ịzụ anụ ụlọ.",
            "N'ala dị n'ugwu karịa, ahịrị nkume, contour bunds na bench terraces (dị ka fanya juu terraces na Kenya) na-ejide ala na mmiri. Ha na-ewe ọrụ iwu na idebe, ahịrị a tọrọ n'ụzọ na-ezighi ezi nwekwara ike ime ka mbibi ala ka njọ, ya mere rịọ onye ndụmọdụ ọrụ ugbo gị ka o nyere gị aka kaa ahịrị ogo ahụ."
          ],
          steps: ["Jee ije n'ubi mgbe mmiri zochara ma kaa ebe mmiri na-asọ na ebe ala sachapụrụ.", "Kaa ahịrị ogo n'ofe ugwu site n'iji A-frame dị mfe ma ọ bụ ngwa ọkpọkọ mmiri e ji atụ ogo, ma ọ bụ site n'enyemaka ndị ndụmọdụ.", "Kụọ ihe, kpụọ ebe ma kpacha ahịhịa n'ahịrị ogo.", "Kụọ ahịrị ahịhịa ma ọ bụ wuo ahịrị nkume ma ọ bụ bunds n'ụfọdụ ahịrị ogo.", "Kpuchie ala dị n'etiti ahịrị site na mulch.", "Lelee ma dozie mgbe mmiri ozuzo siri ike ọ bụla zochara."],
          words: [["Mulch", "ọkwa ihe fọdụrụ n'ubi, ahịhịa ma ọ bụ akwụkwọ osisi a gbasara n'elu ala."], ["Mbibi ala (erosion)", "mgbe mmiri sachapụrụ ala ma ọ bụ ikuku fepụrụ ya."], ["Ahịrị ogo (contour)", "ahịrị n'ofe ugwu ebe ebe ọ bụla nwere otu ogo."], ["Terrace", "nzọụkwụ dị larịị a kpụrụ n'ugwu iji jide ala na mmiri."]],
          slides: [
            { title: "Ala tọgbọrọ chakoo bụ ala furu efu", bullets: ["Mmiri ozuzo na-akụpụ ala; mmiri na-asọ asọ na-ebupụ ya", "Mulch na-eme ka mmiri ozuzo dajụọ ma ala nọrọ mmiri mmiri", "Ala dị n'ugwu chọrọ ihe mkpuchi karịa"] },
            { title: "Rụọ ọrụ n'ofe ugwu", bullets: ["Akọla ala n'elu na n'ala ugwu mgbe ọ bụla", "Kpụọ ebe ma kụọ ihe n'ahịrị ogo", "Ahịrị ahịhịa: ọnụ ala, ma bụrụkwa nri anụ ụlọ"] },
            { title: "Ala dị n'ugwu karịa", bullets: ["Ahịrị nkume, contour bunds, terraces", "Tọọ ahịrị nke ọma; jụọ ndị ndụmọdụ", "Dozie mgbe mmiri ozuzo siri ike zochara"] }
          ],
          sources: [FAO_RUNOFF, FAO_MECH],
          tryIt: "Mgbe mmiri ọzọ zochara, jee ije n'ubi gị ma kaa n'eserese ebe mmiri na-asọ na ebe ala sachapụrụ. Họrọ otu ụzọ egbochi ya (mulch, ebe a kpụrụ n'ahịrị ogo, ahịrị ahịhịa ma ọ bụ ahịrị nkume) maka ebe kacha njọ ma dee mgbe ị ga-etinye ya.",
          youCanNow: "ịhụ mbibi ala n'ugbo gị ma họrọ mulch na ụzọ ahịrị ogo iji kwụsị ya.",
          quickCheck: [
            { objective: "O5", q: "Gịnị bụ ahịrị ogo (contour)?", options: ["Ahịrị gbagoro ugwu kpọmkwem", "Ngere", "Okporo ụzọ", "Ahịrị nwere otu ogo n'ofe ugwu"], answer: 3, why: "Ahịrị ogo bụ ahịrị nwere otu ogo n'ofe ugwu; ebe a kpụrụ na ahịrị ahịhịa na-eso ya." },
            { objective: "O5", q: "Ị chọrọ iwu fanya juu terraces n'ubi dị n'ugwu. Gịnị ka ị ga-ebu ụzọ mee?", options: ["Rịọ onye ndụmọdụ ọrụ ugbo gị ka o nyere gị aka kaa ahịrị ogo", "Gwuo kpọmkwem n'elu na n'ala ugwu", "Malite ebe ọ bụla ma dozie ya emesịa", "Buru ụzọ wepụ ahịhịa niile"], answer: 0, why: "Ahịrị a tọrọ n'ụzọ na-ezighi ezi nwere ike ime ka mbibi ala ka njọ, ya mere nweta enyemaka n'ịka ahịrị ogo." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ihe ndabere fatịlaịza: ezi ụdị, ọnụọgụ, oge na ebe",
          minutes: 6,
          goal: "Dee atụmatụ fatịlaịza maka otu ihe ọkụkụ site n'iji 4R.",
          text: [
            "Ihe ọkụkụ chọrọ nitrogen (N), phosphorus (P) na potassium (K), tinyere obere nri ala ndị ọzọ. Fatịlaịza mineral na-enye ha ngwa ngwa ma n'ọnụọgụ a maara. Echiche 4R, nke ndị ndụmọdụ ọrụ ugbo na-eji n'Afrịka niile, na-enyere gị aka inweta uru kacha site n'akpa ọ bụla: ezi ụdị, n'ezi ọnụọgụ, n'ezi oge, n'ezi ebe.",
            "Ezi ụdị (right source): ngwaahịa na-enye ihe nnwale ala gị kwuru na ọ dịghị (dịka ọmụmaatụ fatịlaịza phosphorus n'oge ịkụ ihe, fatịlaịza nitrogen maka topdressing, na lime ma ọ bụrụ na ala nwere asịd). Ezi ọnụọgụ (right rate): ole nnwale ala gị na ndụmọdụ mpaghara gị nyere maka ihe ọkụkụ gị na owuwe ihe ubi ị chọrọ; ịtinye karịa abụghị mgbe niile ka mma, ọ na-emefukwa ego. Ezi oge (right time): mgbe ihe ọkụkụ chọrọ ya, dịka ọmụmaatụ topdressing nitrogen n'ọka mgbe ọ ruru ihe dị ka ikpere, mgbe ala dị mmiri mmiri. Ezi ebe (right place): nso mgbọrọgwụ, dị ka n'olulu ịkụ ihe ma ọ bụ n'ahịrị dị n'akụkụ ahịrị ihe ọkụkụ, ka ọ ghara imetụ mkpụrụ, ma kpuchie ya ka mmiri ozuzo ghara ịsachapụ ya.",
            "Jiri fatịlaịza na ihe ndụ rere ure ọnụ; ha abụọ na-arụ ọrụ nke ọma karịa otu n'ime ha naanị ya. Zụta akpa a kachiri akachi site n'aka ndị na-ere ngwa ọrụ ugbo e debanyere aha (agro-dealers) ma lelee leebụl ya. Ngwa enyemaka AI n'ekwentị nwere ike inyere gị aka ịghọta akwụkwọ nsonaazụ nnwale ala n'okwu dị mfe, mana ọnụọgụ ahụ na-esi n'ụlọ nyocha, onye ndụmọdụ ọrụ ugbo gị ma ọ bụ ndụmọdụ gọọmentị maka mpaghara gị."
          ],
          steps: ["Gụọ nnwale ala gị ma ọ bụ ndụmọdụ mpaghara maka ihe ọkụkụ ahụ.", "Ụdị: dee ngwaahịa na-enye nri ala ọ bụla na-adịghị (na lime ma ọ dị mkpa).", "Ọnụọgụ: dee ole kwa acre ma ọ bụ hectare ndụmọdụ ahụ nyere.", "Oge: kaa ụbọchị ịkụ ihe na nke topdressing na kalenda gị.", "Ebe: hazie itinye ya n'olulu ma ọ bụ n'ahịrị, ka ọ ghara imetụ mkpụrụ, ma kpuchie ya.", "Zụta akpa a kachiri akachi site n'aka agro-dealer e debanyere aha; debe akwụkwọ ọnụ ahịa ya (receipt)."],
          words: [["NPK", "nitrogen (N), phosphorus (P) na potassium (K), nri ala atọ bụ isi nke ihe ọkụkụ."], ["4R", "ezi ụdị, ezi ọnụọgụ, ezi oge, ezi ebe maka fatịlaịza (n'asụsụ bekee: right source, rate, time, place)."], ["Topdressing", "itinye fatịlaịza, nke na-abụkarị nitrogen, n'ihe ọkụkụ na-eto eto."], ["Agro-dealer", "ụlọ ahịa na-ere mkpụrụ, fatịlaịza na ngwa ọrụ ugbo ndị ọzọ."]],
          slides: [
            { title: "4R", bullets: ["Ezi ụdị: ihe ala gị na-enweghị", "Ezi ọnụọgụ: ole a tụrụ aro", "Ezi oge: mgbe ihe ọkụkụ chọrọ ya", "Ezi ebe: nso mgbọrọgwụ, kpuchiri ekpuchi"] },
            { title: "Ọmụmaatụ: ọka", bullets: ["Fatịlaịza phosphorus n'olulu ịkụ ihe, ọ naghị emetụ mkpụrụ", "Topdressing nitrogen mgbe ọka ruru ihe dị ka ikpere, ala dị mmiri mmiri", "Lime ma ọ bụrụ na nnwale kwuru na ala nwere asịd"] },
            { title: "Nweta uru ego gị", bullets: ["Ịtinye karịa abụghị mgbe niile ka mma", "Jikọta ya na kompost na nsị anụmanụ", "Akpa a kachiri akachi site n'aka agro-dealers e debanyere aha"] },
            { title: "AI nwere ike ịkọwa, ọ gaghị enye ọnụọgụ", bullets: ["Rịọ AI n'ekwentị ka ọ kọwaa akwụkwọ nnwale ala gị n'okwu dị mfe", "Ọnụọgụ na-esi n'ụlọ nyocha ma ọ bụ onye ndụmọdụ ọrụ ugbo"] }
          ],
          sources: [HANDBOOK_4R, KALRO],
          tryIt: "Ọrụ ikpeazụ: dee atụmatụ ala gị nke otu peeji maka otu ubi. Tinye ihe ilele ubi gị chọpụtara, atụmatụ nnwale ala gị ma ọ bụ nsonaazụ ya, otu ị ga-esi tinye ihe ndụ rere ure, mgbanwe ihe ọkụkụ gị ma ọ bụ ịkọkọta ihe, otu ị ga-esi kwụsị mbibi ala, na ahịrị fatịlaịza maka nri ala ọ bụla: ụdị, ọnụọgụ, oge na ebe.",
          youCanNow: "iji fatịlaịza site na 4R ma dee atụmatụ ala zuru ezu nke otu oge maka ubi gị.",
          quickCheck: [
            { objective: "O6", q: "Gịnị ka \"ezi ụdị\" (right source) pụtara na 4R?", options: ["Akpa kacha ọnụ ala n'ụlọ ahịa", "Akpa nwere leebụl kacha na-enwu enwu", "Ngwaahịa na-enye ihe nnwale ala gị kwuru na ọ dịghị", "Fatịlaịza ọ bụla onye agbata obi jiri"], answer: 2, why: "Ezi ụdị na-enye nri ala ndị nnwale ala gị kwuru na ha adịghị." },
            { objective: "O6", q: "Onye na-ere ahịa na-enye fatịlaịza dị ọnụ ala site n'akpa ghere oghe na-enweghị leebụl. Gịnị ka ị ga-eme?", options: ["Zụta ya n'ihi na ọ dị ọnụ ala", "Kama nke ahụ, zụta akpa a kachiri akachi nwere leebụl site n'aka agro-dealer e debanyere aha", "Gwakọta ya na fatịlaịza nke gị", "Zụta okpukpu abụọ ya"], answer: 1, why: "Zụta akpa a kachiri akachi site n'aka agro-dealers e debanyere aha ma lelee leebụl ya." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Idebe ala n'ahụike site n'otu oge ruo n'ọzọ",
        questions: [
          { objective: "O4", q: "Gịnị mere mkpụrụ agwa dị ka agwa ji enyere ihe ọkụkụ na-esote aka?", options: ["Ha na-egbu ahịhịa niile", "Mgbọrọgwụ ha na nje bacteria na-arụkọ ọrụ itinye nitrogen", "Ha na-eme ka ala nwekwuo asịd", "Ha anaghị achọ mmiri ozuzo"], answer: 1, why: "Nodules dị na mgbọrọgwụ na-ewere nitrogen site n'ikuku; ụfọdụ na-anọ n'ala maka ihe ọkụkụ na-esote." },
          { objective: "O4", q: "Kedu atụmatụ bụ ezigbo mgbanwe ihe ọkụkụ?", options: ["Ọka, wee agwa, wee sorghum", "Ọka, wee ọka, wee ọka", "Tomato n'azụ tomato kwa oge", "Hapụ ubi ka ọ tọgbọrọ chakoo otu oge n'ime abụọ"], answer: 0, why: "Ịgbanwe ihe ọkụkụ na itinye mkpụrụ agwa na-agbaji usoro ụmụ ahụhụ ma na-enye ala nri." },
          { objective: "O5", q: "N'ubi dị n'ugwu, kedu otu ị ga-esi kọọ ala ma kụọ ihe?", options: ["Kpọmkwem n'elu na n'ala ugwu", "Na gburugburu", "N'ofe ugwu, n'ahịrị ogo", "Naanị n'elu ugwu"], answer: 2, why: "Ịrụ ọrụ n'ahịrị ogo na-eme ka mmiri na-asọ asọ jee nwayọọ ma na-ejide ala n'ebe ọ dị." },
          { objective: "O6", q: "Gịnị ka \"ezi oge\" pụtara maka topdressing nitrogen n'ọka?", options: ["Oge ọ bụla i nwere ego fọdụrụ", "Tupu ị zụta mkpụrụ", "Mgbe e wesịrị ihe ubi", "Mgbe ihe ọkụkụ chọrọ ya, ihe dị ka ogo ikpere, ala dị mmiri mmiri"], answer: 3, why: "A na-eji nitrogen nke ọma mgbe ihe ọkụkụ na-eto eto chọrọ ya, ala dịkwa mmiri mmiri." },
          { objective: "O6", q: "Ebee bụ ezi ebe maka fatịlaịza oge ịkụ ihe?", options: ["N'elu mkpụrụ", "Nso mgbọrọgwụ, ọ naghị emetụ mkpụrụ, kpuchiri ekpuchi", "A gbasara n'okporo ụzọ", "N'ọkpọ kompost"], answer: 1, why: "Itinye fatịlaịza nso mgbọrọgwụ, kpuchiri ekpuchi, ọ naghị emetụ mkpụrụ, na-eme ka e jiri ya nke ọma ma na-egbochi ịgba mkpụrụ ọkụ." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Ahụike Ala na Ọmụmụ Ya",
    questions: [
      { objective: "O1", q: "Kedu nke bụ ihe ịrịba ama nke ala gbasiri ike?", options: ["Na-acha ọcha ma sie ike, nwere akpụkpọ n'elu", "Na-acha oji, na-agbaji ngwa ngwa, nwere ikpuru ala", "Mmiri jupụtara ya mgbe niile", "Mmiri ozuzo na-asọpụ kpọmkwem"], answer: 1, why: "Ala na-acha oji, na-agbaji ngwa ngwa ma nwee ikpuru ala gbasiri ike." },
      { objective: "O1", q: "Ala na-arapara n'aka ma a na-akpụ ya ka ọ dị ogologo na mkpa bụ karịsịa:", options: ["Ájá", "Okwute nta (gravel)", "Ụrọ", "Ntụ"], answer: 2, why: "Ala na-arapara n'aka ma a na-akpụ ya ogologo nwere ọtụtụ ụrọ." },
      { objective: "O1", q: "Ubi nwere ọtụtụ striga (witchweed). Nke a na-abụkarị ihe ịrịba ama nke:", options: ["Ala ike gwụrụ nke na-enweghị ọmụmụ", "Kompost karịrị akarị", "Ala zuru oke", "Ndò karịrị akarị"], answer: 0, why: "A na-ahụkarị striga n'ala ike gwụrụ nke na-adịghị mma." },
      { objective: "O2", q: "Gịnị ka nnwale ala n'ụlọ nyocha na-agwa gị nke anya gị na-enweghị ike ịhụ?", options: ["Agba ala ahụ", "Ole ikpuru ala dị", "Ebe mmiri na-asọ", "pH na ọkwa nri ala"], answer: 3, why: "Nnwale ala na-atụ asịd na nri ala." },
      { objective: "O2", q: "Na Kenya, kedu ụlọ ọrụ mba nwere ụlọ nyocha na-anwale ala?", options: ["KALRO", "Kenya Power", "Kenya Airways", "Kenya Wildlife Service"], answer: 0, why: "KALRO, Kenya Agricultural and Livestock Research Organization, nwere ụlọ nyocha ala dị ka nke dị na Kabete." },
      { objective: "O2", q: "Mgbe ị na-ewere ihe nlele ala, kedu ebe ị ga-ezere?", options: ["Etiti ubi", "Ebe dị n'ụzọ zigzag", "Akụkụ ahịrị ịkụ ihe", "Ebe a kpọkọbara nsị anụmanụ ma ọ bụ ntụ na mbụ"], answer: 3, why: "Ebe pụrụ iche na-enye foto ubi na-ezighi ezi." },
      { objective: "O2", q: "Gịnị ka ị ga-etinye ihe nlele ala iji gwakọta ha?", options: ["Akpa fatịlaịza ochie", "Bọket dị ọcha", "Ihe e ji tinye kemịkal na mbụ", "Akpa uwe gị"], answer: 1, why: "Bọket dị ọcha na-eme ka ihe nlele ahụ ghara inwe fatịlaịza ma ọ bụ kemịkal ga-emebi nsonaazụ ya." },
      { objective: "O3", q: "Dị ka FAO si kwuo, ihe ndụ rere ure n'ala dị mkpa n'ihi na ọ:", options: ["Na-eme ka ala sie ike karịa", "Na-ewepụ nri ala niile", "Na-ejide mmiri na nri ala dị ka ogbo", "Na-egbochi mgbọrọgwụ ito"], answer: 2, why: "Ihe ndụ rere ure na-ejide mmiri na nri ala ma na-azụ ihe ndụ dị n'ala." },
      { objective: "O3", q: "Kedu otu ọkpọ kompost kwesịrị isi dị mmiri mmiri?", options: ["Kpọrọ nkụ kpọmkwem", "Mmiri jupụtara ya", "Mmiri mmiri dị ka ogbo a pịara apị", "Ọ dịghị mkpa"], answer: 2, why: "Kompost chọrọ mmiri mmiri mana mmiri ekwesịghị ijupụta ya." },
      { objective: "O3", q: "Gịnị mere ị ga-eji hapụ nsị anụmanụ ọhụrụ ka ọ ree ure tupu i jiri ya nso ihe ọkụkụ na-eto eto?", options: ["Nsị anụmanụ ọhụrụ na-ekpo ọkụ nwere ike ịgba ihe ọkụkụ na-eto eto ọkụ", "Nsị anụmanụ rere ure dị arọ karịa", "Nsị anụmanụ ọhụrụ enweghị nri ala", "Ọ bụ iwu n'ebe niile"], answer: 0, why: "Nsị anụmanụ ọhụrụ nwere ike ịdị ike nke ukwuu ma kpoo ọkụ nke ukwuu maka ihe ọkụkụ na-eto eto." },
      { objective: "O3", q: "Kedu omume na-eri ihe ndụ rere ure dị n'ala?", options: ["Itinye kompost", "Ịkpọ ihe fọdụrụ n'ubi ọkụ", "Ịkụ mkpụrụ agwa", "Itinye mulch"], answer: 1, why: "Ịkpọ ọkụ na-ebibi ihe fọdụrụ ndị gaara enye ala nri." },
      { objective: "O4", q: "Kedu nke bụ mkpụrụ agwa (legume)?", options: ["Ọka", "Sorghum", "Akpụ", "Akịdị (cowpea)"], answer: 3, why: "Akịdị bụ mkpụrụ agwa nwere ike itinye nitrogen n'ala." },
      { objective: "O4", q: "Ịkụ ọka na agwa ọnụ n'otu ubi ka a na-akpọ:", options: ["Ịkọkọta ihe (intercropping)", "Itinye lime", "Iwu terraces", "Topdressing"], answer: 0, why: "Ịkụ ihe ọkụkụ abụọ ọnụ bụ ịkọkọta ihe." },
      { objective: "O4", q: "Gịnị mere a ga-eji gbanwee ihe ọkụkụ kama ịkụ otu ihe ọkụkụ kwa oge?", options: ["Iji fatịlaịza karịa", "Ime ka ịkpacha ahịhịa sie ike karịa", "Ịgbaji ụba ụmụ ahụhụ na ọrịa ma hazie nri ala", "N'ihi na iwu chọrọ ya"], answer: 2, why: "Mgbanwe ihe ọkụkụ na-agbaji usoro ụmụ ahụhụ ma na-egbochi otu ihe ọkụkụ iwepụ otu nri ala ahụ." },
      { objective: "O5", q: "Gịnị ka mulch na-eme?", options: ["Na-eme ka ala kpoo ọkụ ma kpọọ nkụ karịa", "Na-egbu ikpuru ala", "Na-anọchi fatịlaịza niile", "Na-eme ka mmiri ozuzo dajụọ, na-eme ka ala nọrọ mmiri mmiri ma na-enye ya nri"], answer: 3, why: "Mulch na-echebe ala ma na-enye ya nri." },
      { objective: "O5", q: "Ụzọ dị ọnụ ala iji belata mbibi ala n'ugwu na-adịghị elu, nke nwekwara ike ịzụ anụ ụlọ, bụ:", options: ["Ahịrị ahịhịa n'ahịrị ogo", "Ịkọ ala n'elu na n'ala ugwu", "Ịkpọ ubi ọkụ", "Iwepụ ihe ọkụkụ niile"], answer: 0, why: "FAO kọwara ahịrị ahịhịa dị ka ụzọ dị ọnụ ala karịa terraces." },
      { objective: "O5", q: "Gịnị mere ị ga-eji rịọ onye ndụmọdụ ọrụ ugbo ka o nyere aka kaa ahịrị ogo?", options: ["Ọ dịghị mkpa ma ọlị", "A ga-ete ahịrị ogo agba", "Ahịrị a tọrọ n'ụzọ na-adịghị mma nwere ike ime ka mbibi ala ka njọ", "Ndị ndụmọdụ ọrụ ugbo nwe ala ahụ"], answer: 2, why: "Ahịrị na-adịghị n'otu ogo n'ezie nwere ike iduga mmiri ma mee ka mbibi ala ka njọ." },
      { objective: "O6", q: "Kedu nke na-ABỤGHỊ otu n'ime 4R nke iji fatịlaịza?", options: ["Ezi ụdị", "Ezi ọnụọgụ", "Ezi ebe", "Ezi agba"], answer: 3, why: "4R bụ ụdị, ọnụọgụ, oge na ebe." },
      { objective: "O6", q: "Ebee ka ọnụọgụ fatịlaịza maka ihe ọkụkụ gị kwesịrị isi?", options: ["Echiche efu", "Nnwale ala gị na ndụmọdụ mpaghara", "Ihe ọ bụla onye agbata obi gị jiri", "Akpa kacha ukwuu n'ụlọ ahịa"], answer: 1, why: "Ọnụọgụ kwesịrị ịdabara ala gị na ndụmọdụ gọọmentị." },
      { objective: "O6", q: "Ị jụrụ ngwa enyemaka AI n'ekwentị gbasara nnwale ala gị. Kedu ezi ụzọ isi jiri ya?", options: ["Ka ọ kọwaa akwụkwọ ahụ n'okwu dị mfe, wee lelee ọnụọgụ n'ụlọ nyocha ma ọ bụ n'aka ndị ndụmọdụ", "Ka ọ họrọ ọnụọgụ fatịlaịza kama ụlọ nyocha", "Iziga ya ozi ụlọ akụ gị", "Ka ọ nọchie nnwale ala"], answer: 0, why: "AI nwere ike ịkọwa, mana ọnụọgụ na-esi n'ụlọ nyocha, onye ndụmọdụ ọrụ ugbo ma ọ bụ ndụmọdụ gọọmentị." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: {
    title: "Ule mbido: Gịnị ka ị maraworị?",
    from: [
      0,
      1,
      3,
      5,
      7,
      10,
      12,
      14,
      17,
      18
    ]
  },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ nke atụmatụ ahụ ma lelee ya ọzọ.",
    criteria: [
      {
        name: "Ilele ubi na nnwale ala",
        objective: "O2",
        notYet: "Ọ dịghị ilele ubi, ma ọ bụ ọ dịghị atụmatụ maka nnwale ala.",
        meets: "E dere ihe ilele ubi chọpụtara, ya na mgbe na ebe a ga-ewere nnwale ala, ma ọ bụ ihe ọ kwuru.",
        exceeds: "Na-eji nsonaazụ nnwale ala ahụ ahazi akụkụ ndị ọzọ nke atụmatụ ahụ."
      },
      {
        name: "Ihe ndụ rere ure",
        objective: "O3",
        notYet: "Ọ dịghị ihe ndụ rere ure a tinyere, ma ọ bụ a kpọrọ ihe fọdụrụ n'ubi ọkụ.",
        meets: "Atụmatụ idebe ihe fọdụrụ n'ubi na itinye kompost ma ọ bụ nsị anụmanụ rere ure, ya na oge.",
        exceeds: "Gụnyere ọkpọ kompost a malitelarị n'ugbo ahụ."
      },
      {
        name: "Mgbanwe ihe ọkụkụ na mkpụrụ agwa",
        objective: "O4",
        notYet: "Otu ihe ọkụkụ ahụ kwa oge, na-enweghị mkpụrụ agwa.",
        meets: "Mgbanwe ihe ọkụkụ nke oge atọ ma ọ bụ ịkọkọta ihe na mkpụrụ agwa nwere ohere kwesịrị ekwesị.",
        exceeds: "Ma mgbanwe ihe ọkụkụ ma ịkọkọta ihe, ya na ihe fọdụrụ a hapụrụ n'ubi."
      },
      {
        name: "Ihe mkpuchi na mbibi ala",
        objective: "O5",
        notYet: "A hapụrụ ala ka ọ tọgbọrọ chakoo, ma ọ bụ a na-arụ ọrụ n'elu na n'ala ugwu.",
        meets: "Mulch ma ọ bụ ihe mkpuchi, na ihe e ji egbochi mbibi ala n'ahịrị ogo ebe ubi dị n'ugwu.",
        exceeds: "Na-akpọ aha onye ga-enyere aka kaa ahịrị ogo na otu a ga-esi debe ihe ndị ahụ."
      },
      {
        name: "Fatịlaịza site na 4R",
        objective: "O6",
        notYet: "E depụtara fatịlaịza na-enweghị ebe ọnụọgụ si, oge ma ọ bụ ebe a ga-etinye ya.",
        meets: "E dere ụdị, ọnụọgụ, oge na ebe maka ngwaahịa ọ bụla, ọnụọgụ si na nnwale ala ma ọ bụ ndụmọdụ mpaghara.",
        exceeds: "Na-ejikọta fatịlaịza na ihe ndụ rere ure ma na-ekwu ebe ọnụọgụ ahụ si."
      }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma nweta Ruru eru ma ọ bụ Karịrị n'ahịrị rubric ọ bụla nke atụmatụ ala ahụ",
      "Ndị na-amụ ihe kwuru na ha mere nnwale ala, malite kompost ma ọ bụ kụọ mkpụrụ agwa n'ime otu oge (nnyocha nsochi)",
      "Mgbanwe n'owuwe ihe ubi ma ọ bụ n'ego e mefuru na fatịlaịza nke ndị na-amụ ihe ma ọ bụ otu ha kọrọ mgbe otu oge gachara",
      "Ndị na-amụ ihe malitere ihe ọmụmụ ọrụ ugbo Koach Learn ọzọ n'ime ụbọchị 30"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Shọvel, bọket dị ọcha na akwụkwọ ndetu",
      "Ubi a ga-elele, ọ kachasị mma ma ọ bụrụ nke onye na-amụ ihe n'onwe ya",
      "Ekwentị nkịtị iji kpọọ ụlọ nyocha ala ma ọ bụ ọfịs ndụmọdụ ọrụ ugbo",
      "Ihe dị ka nkeji 60 n'ozuzu, n'oge nkenke, tinyere oge n'ubi na oge ide atụmatụ ala ahụ"
    ],
    facilitatorNotes: [
      "N'otu ndị ọrụ ugbo ma ọ bụ n'ụlọ akwụkwọ n'ubi (field school): meenụ ule mbido ọnụ, wee mee ilele ubi na nnwale ụdị ala n'ezi ubi.",
      "Mee omume iwere ihe nlele ala a gwakọtara ọnụ, ma chọta ụlọ nyocha kacha nso na ụgwọ ya ugbu a tupu nnọkọ ahụ.",
      "Wuo obere ọkpọ kompost dị ka otu iji gosi ọkwa ndị ahụ.",
      "Enyela ọnụọgụ fatịlaịza n'onwe gị; kpọọ onye ndụmọdụ ọrụ ugbo ma ọ bụ jiri ndụmọdụ mpaghara.",
      "Jiri rubric tụọ akara atụmatụ ala ahụ, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};
