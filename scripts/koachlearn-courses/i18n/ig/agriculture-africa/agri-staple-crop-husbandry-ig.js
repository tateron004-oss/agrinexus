"use strict";

// Koach Learn course (Igbo translation of agriculture-africa/agri-staple-crop-husbandry.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

const KEPHIS = { name: "Kenya Plant Health Inspectorate Service (KEPHIS): ịkwado mkpụrụ na ndepụta ụdị ihe ọkụkụ nke mba (National Crop Variety List)", url: "https://www.kephis.go.ke" };
const NASC = { name: "National Agricultural Seed Council (NASC, Naịjirịa): ịkwado mkpụrụ", url: "https://seedcouncil.gov.ng" };
const KALRO = { name: "Kenya Agricultural and Livestock Research Organization (KALRO)", url: "https://www.kalro.org" };
const IITA = { name: "International Institute of Tropical Agriculture (IITA)", url: "https://www.iita.org" };
const AFRICARICE = { name: "AfricaRice (isi ụlọ ọrụ ya dị n'Abidjan, Côte d'Ivoire)", url: "https://www.africarice.org" };
const IITA_CASSAVA_VIRUS = { name: "IITA: Mgbalị otu IITA iji jikwaa nje virus na-emebi akpụ n'Afrịka (2017)", url: "https://iita.org/?p=16690" };
const CIMMYT_MLN = { name: "CIMMYT: Ịghọta na igbochi ọrịa maize lethal necrosis (MLN) site na mkpụrụ n'Afrịka", url: "https://mln.cimmyt.org/understanding-and-preventing-seed-transmission-of-maize-lethal-necrosis-mln-in-africa" };
const JIRCAS_BLAST = { name: "JIRCAS na AfricaRice: Ọdịiche n'ike osikapa West Africa nwere iguzogide rice blast (2017)", url: "https://www.jircas.go.jp/en/publication/research_results/2017_b01" };
const PCPB = { name: "Pest Control Products Board (Kenya): ngwaahịa edebanyere aha", url: "https://www.pcpb.go.ke" };
const NAFDAC = { name: "NAFDAC (Naịjirịa): ọgwụ ugbo edebanyere aha", url: "https://www.nafdac.gov.ng" };
const HANDBOOK_4R = { name: "4R Plant Nutrient Management in African Agriculture: akwụkwọ ntụaka ndị ndụmọdụ ọrụ ugbo maka njikwa fatịlaịza", url: "https://alliancebioversityciat.org/publications-data/4r-plant-nutrient-management-african-agriculture-extension-handbook-fertilizer" };

module.exports = {
  id: "agri-staple-crop-husbandry-ig",
  lang: "ig",
  translationOf: "agri-staple-crop-husbandry",
  category: "Agriculture (Africa)",
  name: "Ịkọ Ihe Ọkụkụ Nri n'Ụzọ Ọgbara Ọhụrụ: Ọka, Osikapa, Akpụ na Agwa",
  skills: "Ịhọrọ ụdị ihe ọkụkụ na mkpụrụ akwadoro, Ịgbakọ ọnụọgụ ihe ọkụkụ na mkpụrụ ị chọrọ site n'ohere dị n'etiti ha, Ịhazi oge ịkwado ala, inye nri na iwepụ ahịhịa, Ịmata maize lethal necrosis, nje virus akpụ na rice blast, Ịmata oge owuwe ihe ubi na ịgbakọ mkpụrụ e wetara kwa hekta na kwa acre",
  outcome: "ide atụmatụ ịkọ ihe nke otu oge maka otu ihe ọkụkụ nri (ọka, osikapa, akpụ ma ọ bụ agwa) n'ubi gị: ụdị na mkpụrụ, ọnụọgụ ihe ọkụkụ na mkpụrụ ị chọrọ, kalenda nwere ụbọchị maka ịkwado ala, ịkụ ihe, inye nri na iwepụ ahịhịa, ọrịa ndị bụ isi ị ga-ele anya na ihe ị ga-eme, na ebumnuche mkpụrụ e wetara kwa hekta na kwa acre.",
  about: [
    "Ihe ọmụmụ a bụ maka obere ndị ọrụ ugbo na ndị ọrụ ugbo na-eto eto n'azụmahịa, ndị ọrụ n'ugbo, ndị ntorobịa na-azụ ahịa ọrụ ugbo, na ndị ndụmọdụ ọrụ ugbo (extension workers) na-akọ ihe ọkụkụ na-azụ Afrịka: ọka, osikapa, akpụ, agwa, agwa cowpea, ahụekere na soya. Ihe atụ ndị anyị ga-eji si Kenya, Naịjirịa, Ghana na Côte d'Ivoire.",
    "Isi 1 bụ maka ịmalite ihe ọkụkụ nke ọma: ịhọrọ ụdị site n'ụlọ nchọpụta mba gị na ịzụta mkpụrụ akwadoro ma ọ bụ osisi akpụ dị ọcha, ịkwado ala, ịgbakọ ọnụọgụ ihe ọkụkụ ị chọrọ na mkpụrụ ole ị ga-azụ, na ịhazi oge inye nri na iwepụ ahịhịa. Isi 2 bụ maka ichebe na ịtụ ihe ọkụkụ: ịmata maize lethal necrosis, cassava mosaic na cassava brown streak, na rice blast, ịmata oge owuwe ihe ubi, na ịgbakọ mkpụrụ e wetara kwa hekta na kwa acre.",
    "A na-akụzi nnwale ala na fatịlaịza n'ihe ọmụmụ \"Ahụike Ala na Ọmụmụ Ya\", na nchekwa ihe ubi n'ihe ọmụmụ \"Ilekọta na Ichekwa Ihe Ubi Mgbe Owuwe Gasịrị\", ya mere ihe ọmụmụ a na-ezigara gị n'ebe ahụ kama ikwughachi ha. Ụdị, ohere na ọnụọgụ fatịlaịza dị iche site n'otu mpaghara ruo n'ọzọ, ya mere jiri ihe ọmụmụ a na onye ndụmọdụ ọrụ ugbo gị na ụlọ nchọpụta. Obere nnwale na-esote nkuzi ọ bụla, nnwale ihe ọmụma na-emechi isi ọ bụla, ule nwere ajụjụ 20 na-emechikwa ihe ọmụmụ ahụ."
  ],
  finalTask: "Dee atụmatụ ịkọ ihe maka otu ihe ọkụkụ nri n'ubi gị: nha ubi ahụ na hekta na acre, ụdị ị họọrọ na ebe ị ga-azụta mkpụrụ akwadoro ma ọ bụ osisi akpụ dị ọcha, ohere na ọnụọgụ ihe ọkụkụ i gbakọrọ na mkpụrụ ma ọ bụ osisi ị chọrọ, kalenda nwere ụbọchị (ịkwado ala, ịkụ ihe, fatịlaịza dị ka nnwale ala gị ma ọ bụ onye ndụmọdụ si kwuo, iwepụ ahịhịa ọ bụla), ọrịa abụọ bụ isi ị ga-ele anya na ihe mbụ ị ga-eme maka nke ọ bụla, otu ị ga-esi mata oge owuwe ihe ubi, na ebumnuche mkpụrụ e wetara kwa hekta na kwa acre ya na mgbakọ gị.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Obere ndị ọrụ ugbo na ndị ọrụ ugbo na-eto eto n'azụmahịa, ndị ọrụ n'ugbo, ndị ntorobịa na-azụ ahịa ọrụ ugbo, na ndị ndụmọdụ ọrụ ugbo n'Afrịka niile na-akọ ọka, osikapa, akpụ na agwa dị iche iche (agwa, agwa cowpea, ahụekere, soya), site n'ọkara acre ruo hekta ole na ole.",
    startingPoint: "Ha akọọla ihe ọkụkụ ahụ ọtụtụ afọ, ọtụtụ mgbe na mkpụrụ ha chekwara site n'afọ gara aga ma ọ bụ osisi akpụ e kere ekere, na-awasa mkpụrụ ma ọ bụ na-akụ ya n'ohere na-ahaghị nhata, na-ewepụ ahịhịa n'oge gafere, ma na-adeghị ihe ha wetara. Ọtụtụ amaghị ọnụọgụ ihe ọkụkụ ha, ụdị ha nwere, ma ọ bụ otu esi agbakọ mkpụrụ e wetara kwa hekta ma ọ bụ kwa acre.",
    gap: "Mkpụrụ e wetara n'ihe ọkụkụ nri n'ọtụtụ ugbo n'Afrịka dị ala nke ukwuu karịa ihe ụdị ka mma na ezigbo ọrụ ugbo nwere ike inye. Ndị na-amụ ihe kwesịrị ịhọrọ ụdị dabara adaba na mkpụrụ dị ọcha, ịkụ ọnụọgụ ihe ọkụkụ ziri ezi, inye nri na iwepụ ahịhịa n'oge, ịhụ ọrịa ndị na-ebibi ihe ọkụkụ, iwe ihe ubi n'oge kwesịrị ekwesị, na ịtụ ihe ha wetara ka ha hụ ihe na-arụ ọrụ.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ; ọtụtụ ndị na-amụ ihe na-eji Bekee dị ka asụsụ nke abụọ, ihe ọmụmụ a dịkwa n'asụsụ Spanish, French na Arabic",
      "Mgbakọ: ịba ụba na ikewa dị mfe site n'igwe mgbakọ ekwentị; e gosiri mgbakọ ọ bụla nzọụkwụ n'otu n'otu",
      "Ngwaọrụ: ekwentị nkịtị nwere igwe mgbakọ; teepụ ntụ ma ọ bụ eriri e debere akara na ihe ọtụtụ ga-enye aka",
      "Ụdị, ohere na ọnụọgụ fatịlaịza dị iche site n'otu mpaghara ruo n'ọzọ, ha na-agbanwekwa mgbe e wepụtara ụdị ọhụrụ; ndị na-amụ ihe na-elele ndepụta ụdị mba na onye ndụmọdụ ọrụ ugbo ha",
      "A na-akụzi ọmịiko ala n'ihe ọmụmụ \"Ahụike Ala na Ọmụmụ Ya\"; ihe ọmụmụ a na-ekwu naanị ihe dị iche maka ihe ọkụkụ ọ bụla"
    ],
    prerequisites: "Ọ dịghị, mana a na-atụ aro nke ukwuu ka i were \"Ahụike Ala na Ọmụmụ Ya\" tupu ma ọ bụ n'otu oge ahụ i na-amụ ihe ọmụmụ a."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Maka otu ihe ọkụkụ nri ị ga-akọ n'oge ọzọ", action: "ịhọrọ ụdị site n'ụlọ nchọpụta mba gị ma ọ bụ ndepụta ụdị, ma kpọọ aha otu ebe edebanyere aha ị ga-azụta mkpụrụ akwadoro ma ọ bụ osisi akpụ dị ọcha", standard: "na-elele akara, ihe nkpuchi ma ọ bụ ebe o si tupu i kwụọ ụgwọ" },
    { id: "O2", condition: "Mgbe e nyere gị ohere na nha ubi gị", action: "ịgbakọ ọnụọgụ ihe ọkụkụ kwa hekta na kwa acre na mkpụrụ ma ọ bụ osisi akpụ ị chọrọ", standard: "na-egosi nzọụkwụ ọ bụla nke mgbakọ ahụ" },
    { id: "O3", condition: "Maka ihe ọkụkụ ị họọrọ na ụbọchị ị ga-akụ ya", action: "ịhazi ịkwado ala, ịkụ ihe, inye nri na iwepụ ahịhịa na kalenda nwere ụbọchị", standard: "ka iwepụ ahịhịa dị n'ime izu mbụ dị mkpa nke ihe ọkụkụ ahụ" },
    { id: "O4", condition: "Mgbe e nyere gị ihe ịrịba ama n'ihe ọkụkụ ma ọ bụ ubi na-arịa ọrịa", action: "ịmata maize lethal necrosis, cassava mosaic, cassava brown streak ma ọ bụ rice blast ma họrọ ihe mbụ ị ga-eme", standard: "na-ejikọta ọrịa ọ bụla na nzọụkwụ mbụ ziri ezi" },
    { id: "O5", condition: "Na njedebe oge ịkọ ihe", action: "ịmata mgbe ihe ọkụkụ ahụ dị njikere ma gbakọọ mkpụrụ e wetara kwa hekta na kwa acre site n'ihe ubi a tụrụ n'ihe ọtụtụ", standard: "na-eji nha ala ziri ezi ma na-egosi mgbakọ gị" }
  ],
  chapters: [
    {
      name: "Isi 1: Ịmalite ihe ọkụkụ nke ọma",
      lessons: [
        {
          title: "Ịhọrọ ụdị na ịzụta mkpụrụ akwadoro",
          objectives: ["O1"],
          minutes: 5,
          goal: "Họrọ ụdị dabara mpaghara gị ma kpọọ aha ebe edebanyere aha ị ga-azụta mkpụrụ akwadoro ma ọ bụ osisi akpụ dị ọcha.",
          text: [
            "Ụdị (variety) bụ otu ụdị ihe ọkụkụ a zụlitere maka ụfọdụ àgwà: ịcha ngwa ngwa ma ọ bụ n'oge gafere, iguzogide ụkọ mmiri, iguzogide ọrịa, agba mkpụrụ ma ọ bụ otu o si esi nri. Ụlọ nchọpụta mba na-anwale ma na-ewepụta ụdị maka mpaghara ọ bụla: KALRO na Kenya, ụlọ nchọpụta Naịjirịa na-arụkọ ọrụ na IITA, CSIR-Crops Research Institute na Ghana, na CNRA na Côte d'Ivoire. IITA na-arụ ọrụ n'akpụ, ọka, agwa cowpea na soya, AfricaRice, nke dị n'Abidjan, na-arụkwa n'osikapa. Jụọ onye ndụmọdụ ọrụ ugbo gị ụdị a na-atụ aro maka mpaghara gị, mmiri ozuzo gị na ahịa gị.",
            "Họrọ dị ka ọnọdụ gị si dị: ụdị na-acha ngwa ngwa maka mmiri ozuzo dị mkpụmkpụ ma ọ bụ mpaghara kpọrọ nkụ, ụdị na-anagide ma ọ bụ na-eguzogide ọrịa ebe ọrịa a na-ahụkarị (dịka ọmụmaatụ maize lethal necrosis ma ọ bụ cassava brown streak), na ihe ndị na-azụ ahịa chọrọ (ọka ọcha ma ọ bụ odo, osikapa a na-esi tupu a kpọọ ya (parboiling), akpụ na-atọ ụtọ ma ọ bụ nke na-elu ilu).",
            "Mkpụrụ akwadoro (certified seed) bụ mkpụrụ ụlọ ọrụ mkpụrụ nke mba lelere maka ịdị ọcha ya na ike ya ito. Na Kenya, KEPHIS na-akwado mkpụrụ ma na-ebipụta National Crop Variety List, akpa mkpụrụ akwadoro nwekwara akara KEPHIS ị nwere ike ilele. Na Naịjirịa, National Agricultural Seed Council (NASC) na-akwado mkpụrụ. Zụta akpa e mechiri emechi, nwere akara, site n'aka onye na-ere ahịa edebanyere aha. A ga-azụta mkpụrụ ọka hybrid ọhụrụ kwa oge, n'ihi na mkpụrụ e wetara na-ebelata ma ọ bụrụ na ị kụghachi ọka ya. Ụdị open-pollinated (OPV) na agwa nwere ike ichekwa ruo oge ole na ole ma ọ bụrụ na ị họrọ mkpụrụ dị ọcha site n'ihe ọkụkụ dị mma. Maka akpụ, nweta osisi akpụ dị ọcha site n'aka onye na-amụba osisi a lelere ma ọ bụ ubi dị mma, ọ bụghị mgbe ọ bụla site n'ubi nwere mosaic ma ọ bụ brown streak. Maka soya, jụọ maka inoculant (rhizobium) ebe onye ndụmọdụ tụrụ aro ya."
          ],
          steps: ["Jụọ onye ndụmọdụ ọrụ ugbo ụdị a na-atụ aro maka mpaghara gị na mmiri ozuzo gị.", "Họrọ maka oge ọ na-acha, iguzogide ọrịa na ihe ndị na-azụ ahịa chọrọ.", "Lelee ụdị ahụ na ndepụta mba ebe e bipụtara otu (dịka ọmụmaatụ KEPHIS na Kenya).", "Zụta mkpụrụ akwadoro e mechiri emechi, nwere akara, site n'aka onye na-ere ahịa edebanyere aha; lelee ụbọchị na akara.", "Maka akpụ, nweta osisi akpụ dị ọcha site n'aka onye na-amụba osisi a lelere ma ọ bụ ubi dị mma."],
          words: [["Ụdị (variety)", "otu ụdị ihe ọkụkụ a zụlitere maka ụfọdụ àgwà, dị ka ịcha ngwa ngwa ma ọ bụ iguzogide ọrịa."], ["Mkpụrụ akwadoro (certified seed)", "mkpụrụ ụlọ ọrụ mkpụrụ nke mba lelere maka ịdị ọcha na ike ito."], ["Hybrid", "mkpụrụ si n'ịgwakọta ụdị nne na nna abụọ; ọ na-amị nke ọma mana a ga-azụta ya ọhụrụ kwa oge."], ["OPV", "open-pollinated variety: mkpụrụ ị nwere ike ichekwa ma kụghachi ruo oge ole na ole ma ọ bụrụ na ọ dị ọcha."], ["Inoculant", "ngwaahịa nwere nje bacteria bara uru na-enyere agwa dị ka soya aka ịnara nitrogen."]],
          slides: [
            { title: "Ụdị na-esi n'ụlọ nchọpụta", bullets: ["Kenya: KALRO; Ghana: CSIR-Crops Research Institute", "Côte d'Ivoire: CNRA; osikapa: AfricaRice", "Akpụ, agwa cowpea, soya, ọka: IITA"] },
            { title: "Họrọ dị ka ọnọdụ gị si dị", bullets: ["Ụdị na-acha ngwa ngwa maka oge dị mkpụmkpụ ma ọ bụ kpọrọ nkụ", "Iguzogide ọrịa ndị dị na mpaghara gị", "Ihe ndị na-azụ ahịa gị chọrọ"] },
            { title: "Mkpụrụ akwadoro", bullets: ["Kenya: akara KEPHIS ị nwere ike ilele", "Naịjirịa: nkwado NASC", "E mechiri emechi, nwere akara, onye na-ere ahịa edebanyere aha"] },
            { title: "Hybrid, OPV na osisi akpụ", bullets: ["Ọka hybrid: zụta ọhụrụ kwa oge", "OPV na agwa: chekwaa mkpụrụ dị ọcha ruo oge ole na ole", "Akpụ: osisi dị ọcha, ọ bụghị mgbe ọ bụla site n'ubi na-arịa ọrịa"] }
          ],
          sources: [KEPHIS, NASC, KALRO, IITA, AFRICARICE],
          tryIt: "Maka otu ihe ọkụkụ nri ị ga-akọ n'oge ọzọ, jụọ onye ndụmọdụ ọrụ ugbo gị ma ọ bụ onye na-ere ngwa ọrụ ugbo ụdị abụọ a na-atụ aro. Dee oge ha na-acha, iguzogide ọrịa ha na ebe ị nwere ike ịzụta mkpụrụ akwadoro ma ọ bụ osisi akpụ dị ọcha. Ọ bụrụ na ị nọ na Kenya, lelee ụdị ahụ na onye na-ere ya na ndepụta KEPHIS.",
          youCanNow: "ịhọrọ ụdị dabara mpaghara gị na ịzụta mkpụrụ akwadoro ma ọ bụ osisi akpụ dị ọcha site n'ebe edebanyere aha.",
          quickCheck: [
            { objective: "O1", q: "I kụrụ ọka hybrid n'oge gara aga. Ị nwere ike ịkụghachi ọka i wetara?", options: ["Ee, ọ ga-amị otu ihe ahụ", "Ee, ma ọ bụrụ na ị kụkọta ya nso", "Mba, mkpụrụ e wetara na-ebelata; zụta mkpụrụ hybrid akwadoro ọhụrụ", "Naanị ma ọ bụrụ na i tinye ya na mmiri"], answer: 2, why: "Mkpụrụ hybrid na-atụfu ike ya n'ọgbọ na-esote, ya mere a chọrọ mkpụrụ ọhụrụ kwa oge." },
            { objective: "O1", q: "Akwụkwọ akpụ onye agbata obi gị nwere mosaic odo. Ọ chọrọ inye gị osisi akpụ. Gịnị ka ị ga-eme?", options: ["Were ha; osisi akpụ bụ n'efu", "Jụ ha ma nweta osisi akpụ dị ọcha site n'aka onye na-amụba osisi a lelere ma ọ bụ ubi dị mma", "Were ha kụọ ha n'akụkụ ụzọ", "Were naanị osisi dị n'elu"], answer: 1, why: "Nje virus akpụ na-aga n'osisi akpụ, ya mere ubi na-arịa ọrịa na-agbasa ọrịa ahụ n'ubi gị." }
          ]
        },
        {
          title: "Ịkwado ala na ọnụọgụ ihe ọkụkụ",
          objectives: ["O2"],
          minutes: 6,
          goal: "Gbakọọ ọnụọgụ ihe ọkụkụ kwa hekta na kwa acre site n'ohere, na mkpụrụ ma ọ bụ osisi akpụ ị chọrọ.",
          text: [
            "Kwadoo ala ahụ maka ihe ọkụkụ ahụ. Kpochaa ya n'esureghị ọkụ, ma hapụ ihe fọdụrụ n'ubi ka ọ kpuchie ala ebe ị nwere ike. Ọka, agwa na ahụekere chọrọ ebe ịkụ mkpụrụ siri ike nwere ala dị nro gburugburu mkpụrụ ahụ; ịkọ ala ntakịrị (minimum tillage) ma ọ bụ olulu ịkụ ihe na-arụ ọrụ n'ọtụtụ mpaghara. A na-akụkarị akpụ na Naịjirịa na Ghana n'ebe a gwuru elu (ridges) ma ọ bụ n'ebe a kpọkọtara ala (mounds) nke na-ekwe mmiri ka ọ gafee nke ọma. Osikapa ala mmiri chọrọ bunds, ubi dị larịị na njikwa mmiri dị mma; a na-emekarị ka ala ubi osikapa a na-ebugharị bụrụ apịtị (puddling).",
            "Ọnụọgụ ihe ọkụkụ (plant population) bụ ọnụọgụ ihe ọkụkụ kwa hekta. Ihe ọkụkụ dị ole na ole na-emefu ala; ihe ọkụkụ karịrị akarị na-asọ mpi maka ìhè, mmiri na nri. Jiri ohere akwụkwọ ntụaka onye ndụmọdụ gị nyere maka ụdị gị na mpaghara gị. Iji gbakọọ: ala maka otu ihe ọkụkụ = ohere n'etiti ahịrị x ohere n'etiti ihe ọkụkụ (na mita). Ihe ọkụkụ kwa hekta = 10,000 m2 / ala maka otu ihe ọkụkụ. Ihe ọkụkụ kwa acre = 4,047 m2 / ala maka otu ihe ọkụkụ (otu acre dị ihe dị ka 4,047 m2, otu hekta dịkwa ihe dị ka acre 2.47).",
            "Ihe atụ a gbakọrọ agbakọ, ma ọ bụrụ na akwụkwọ ntụaka gị nyere ohere ndị a: ọka na 75 cm x 25 cm, otu mkpụrụ n'olulu ọ bụla: 0.75 x 0.25 = 0.1875 m2, ya mere 10,000 / 0.1875 = ihe dị ka 53,300 ihe ọkụkụ kwa hekta, ma ọ bụ 4,047 / 0.1875 = ihe dị ka 21,600 kwa acre. Akpụ na 1 m x 1 m: 10,000 ihe ọkụkụ kwa hekta, ihe dị ka 4,000 kwa acre. Osikapa a na-ebugharị na 20 cm x 20 cm: 0.04 m2, ya mere 250,000 ebe a kụrụ ya (hills) kwa hekta. Agwa na 50 cm x 10 cm: 0.05 m2, ya mere 200,000 ihe ọkụkụ kwa hekta.",
            "Mkpụrụ ị chọrọ: ọnụọgụ mkpụrụ / mkpụrụ ole dị n'otu kg (gụọ ma tụọ mkpụrụ 100, ma ọ bụ gụọ ihe dị n'akpa) = kg, gbakwunye ihe dị ka 10% maka oghere. Maka akpụ, gụọ osisi akpụ (ọtụtụ mgbe ihe dị ka 20 ruo 25 cm n'ogologo, site n'osisi tozuru etozu), gbakwunye ole na ole ọzọ. Wee mejupụta oghere n'ime otu izu ma ọ bụ izu abụọ mgbe ihe ọkụkụ pụtara."
          ],
          steps: ["Tụọ ubi gị na mita; nha ala = ogologo x obosara.", "Nweta ohere a na-atụ aro maka ụdị gị na mpaghara gị.", "Ala maka otu ihe ọkụkụ = ohere ahịrị x ohere ihe ọkụkụ (na mita).", "Ihe ọkụkụ kwa hekta = 10,000 / ala maka otu ihe ọkụkụ; kwa acre = 4,047 / ala maka otu ihe ọkụkụ.", "Ihe ọkụkụ n'ubi gị = nha ubi / ala maka otu ihe ọkụkụ.", "Mkpụrụ: ihe ọkụkụ / mkpụrụ kwa kg, gbakwunye ihe dị ka 10%."],
          words: [["Ọnụọgụ ihe ọkụkụ (plant population)", "ọnụọgụ ihe ọkụkụ kwa hekta ma ọ bụ kwa acre."], ["Hekta (ha)", "ala nke ruru 10,000 mita square, ihe dị ka acre 2.47."], ["Acre", "ala nke ruru ihe dị ka 4,047 mita square, ihe dị ka 0.4 hekta."], ["Bund", "obere mgbidi ala gburugburu ubi osikapa nke na-ejide mmiri."], ["Puddling", "ịrụ ala mmiri n'ubi osikapa ka ọ bụrụ apịtị dị nro na-ejide mmiri ma na-egbochi ahịhịa."]],
          slides: [
            { title: "Kwadoo ala maka ihe ọkụkụ ahụ", bullets: ["Esula ọkụ; hapụ ihe fọdụrụ ka ọ kpuchie ala", "Ala dị nro maka ọka, agwa, ahụekere", "Ridges ma ọ bụ mounds maka akpụ; bunds na ubi dị larịị maka osikapa"] },
            { title: "Usoro mgbakọ ọnụọgụ ihe ọkụkụ", bullets: ["Ala maka otu ihe ọkụkụ = ohere ahịrị x ohere ihe ọkụkụ (m)", "Kwa hekta = 10,000 / ala maka otu ihe ọkụkụ", "Kwa acre = 4,047 / ala maka otu ihe ọkụkụ"] },
            { title: "Ihe atụ a gbakọrọ agbakọ", bullets: ["Ọka 75 x 25 cm: ihe dị ka 53,300/ha, 21,600/acre", "Akpụ 1 x 1 m: 10,000/ha", "Osikapa 20 x 20 cm: 250,000 hills/ha"] },
            { title: "Mkpụrụ ole?", bullets: ["Ihe ọkụkụ / mkpụrụ kwa kg, gbakwunye ihe dị ka 10%", "Gụọ ma tụọ mkpụrụ 100 ma ọ bụrụ na akpa ekwughị", "Mejupụta oghere n'ime otu izu ma ọ bụ abụọ"] }
          ],
          sources: [KALRO, IITA],
          tryIt: "Tụọ otu n'ime ubi gị (ma ọ bụ jiri nha ya na acre x 4,047 nweta mita square). Nweta ohere maka ihe ọkụkụ gị site n'aka onye ndụmọdụ, wee gbakọọ ihe ọkụkụ kwa hekta, kwa acre na n'ubi gị, na mkpụrụ ole ma ọ bụ osisi akpụ ole ị ga-azụ.",
          youCanNow: "ịgbakọ ọnụọgụ ihe ọkụkụ kwa hekta na kwa acre site n'ohere, na mkpụrụ ole ma ọ bụ osisi akpụ ole ị chọrọ.",
          quickCheck: [
            { objective: "O2", q: "A kụrụ akpụ na 1 m x 1 m. Ihe ọkụkụ ole dị kwa hekta?", options: ["1,000", "4,047", "100,000", "10,000"], answer: 3, why: "Ihe ọkụkụ ọ bụla na-eji 1 m2, otu hekta bụkwa 10,000 m2." },
            { objective: "O2", q: "Ubi bụ hekta 0.5, ọka chọkwara ihe dị ka 53,300 ihe ọkụkụ kwa hekta. Ihe dị ka ihe ọkụkụ ole ka ị chọrọ?", options: ["26,650", "53,300", "106,600", "5,330"], answer: 0, why: "0.5 x 53,300 = 26,650 ihe ọkụkụ." }
          ]
        },
        {
          title: "Inye nri na iwepụ ahịhịa n'oge",
          objectives: ["O3"],
          minutes: 5,
          goal: "Hazie ịkụ ihe, inye nri na iwepụ ahịhịa na kalenda nwere ụbọchị maka ihe ọkụkụ gị.",
          text: [
            "A na-akụzi nnwale ala, nsị anụmanụ, kompost na fatịlaịza n'ihe ọmụmụ \"Ahụike Ala na Ọmụmụ Ya\"; jiri nnwale ala gị ma ọ bụ ndụmọdụ onye ndụmọdụ ọrụ ugbo gị maka ihe ị ga-etinye na ole. Ihe na-agbanwe site n'otu ihe ọkụkụ ruo n'ọzọ bụ mgbe na ihe nke ọ bụla kacha chọọ. Ọka na-agụ nitrogen agụụ, ọ chọkwara ya n'oge mbụ na ọzọ mgbe ọ na-eto ngwa ngwa. Agwa dị iche iche (agwa, agwa cowpea, ahụekere, soya) na-emepụta ọtụtụ nitrogen nke ha site na root nodules, ya mere ha chọrọ phosphorus karịa nitrogen. Akpụ na-eto n'ala na-adịghị mma, mana ọ na-ewepụ ọtụtụ potassium n'ala ka oge na-aga. A na-enyekarị osikapa nitrogen n'akụkụ dị iche iche (split doses); nitrogen karịrị akarị na-eme ka rice blast ka njọ.",
            "Ahịhịa na-ezu mmiri, ìhè na nri kacha n'izu mbụ mgbe ihe ọkụkụ pụtara. Nke a bụ oge dị mkpa (critical period): ahịhịa na-ebelata mkpụrụ e wetara kacha n'oge ahụ, iwepụ ahịhịa ma emechaa enweghịkwa ike iweghachi ya. Ọtụtụ akwụkwọ ntụaka na-ekwu na iwepụ ahịhịa nke mbụ bụ ihe dị ka izu abụọ ruo atọ mgbe ihe ọkụkụ pụtara, nke abụọ ka izu ole na ole gachara; lelee akwụkwọ ntụaka mpaghara gị. Akpụ na-eto nwayọọ na mbụ, a ga-ahapụkwa ya ka ọ dị ọcha ihe dị ka ọnwa atọ mbụ ya, ruo mgbe akwụkwọ ya kpuchiri ala. N'osikapa ala mmiri, ime ka ubi dị larịị na idebe mmiri n'ubi na-enyere aka igbochi ahịhịa.",
            "Ọgwụ ahịhịa (herbicides) nwere ike ibelata ọrụ aka, mana a ga-edebanyere ha aha maka ihe ọkụkụ gị (PCPB na Kenya, NAFDAC na Naịjirịa) ma jiri ha dị ka akara ha si kwuo, na-eyi uwe nchekwa. Tinye ihe niile na kalenda a gụrụ site n'ụbọchị ịkụ ihe, ka ọrụ na ego dị njikere n'oge."
          ],
          steps: ["Dee ụbọchị ị ga-akụ ihe.", "Tinye ịkwado ala n'izu ndị bu ya ụzọ.", "Tinye inye nri dị ka nnwale ala gị ma ọ bụ onye ndụmọdụ si kwuo, n'ọkwa ihe ọkụkụ kwesịrị ekwesị.", "Tinye iwepụ ahịhịa nke mbụ n'ime izu mbụ dị mkpa, na ndị na-esote ya.", "Dee mgbe ị ga-achọ ndị ọrụ, ngwa ọrụ na ego maka ọrụ ọ bụla."],
          words: [["Oge dị mkpa (critical period)", "izu mbụ mgbe ahịhịa na-akpata mfu kacha ukwuu; a ga-ewepụ ahịhịa n'oge ahụ."], ["Root nodules", "obere ọzịza na mgbọrọgwụ agwa ebe nje bacteria na-eme ka nitrogen si n'ikuku bụrụ nri ihe ọkụkụ."], ["Split dose", "inye fatịlaịza n'akụkụ abụọ ma ọ bụ karịa n'ọkwa ihe ọkụkụ dị iche iche kama inye ya niile otu mgbe."], ["Ọgwụ ahịhịa (herbicide)", "ọgwụ na-egbu ahịhịa; a ga-edebanyere ya aha ma jiri ya dị ka akara ya si kwuo."]],
          slides: [
            { title: "Ọmịiko ala: lee Ahụike Ala na Ọmụmụ Ya", bullets: ["Jiri nnwale ala gị ma ọ bụ ndụmọdụ onye ndụmọdụ", "Nkuzi a: ihe dị iche site n'otu ihe ọkụkụ ruo n'ọzọ"] },
            { title: "Ihe ihe ọkụkụ ọ bụla kacha chọọ", bullets: ["Ọka: nitrogen, n'oge mbụ na mgbe ọ na-eto", "Agwa: phosphorus; ha na-emepụta nitrogen nke ha", "Akpụ: potassium ka oge na-aga; osikapa: nitrogen n'akụkụ"] },
            { title: "Wepụ ahịhịa n'oge dị mkpa", bullets: ["Izu mbụ mgbe ihe ọkụkụ pụtara kacha mkpa", "Ọtụtụ mgbe iwepụ ahịhịa mbụ n'ihe dị ka izu 2 ruo 3; lelee na mpaghara gị", "Akpụ: hapụ ya ka ọ dị ọcha ihe dị ka ọnwa 3 mbụ"] },
            { title: "Tinye ya na kalenda", bullets: ["Gụọ site n'ụbọchị ịkụ ihe", "Ndị ọrụ, ngwa ọrụ na ego dị njikere n'oge", "Ọgwụ ahịhịa: edebanyere aha, akara, uwe nchekwa (PPE)"] }
          ],
          sources: [HANDBOOK_4R, PCPB, NAFDAC],
          tryIt: "Dee kalenda maka ihe ọkụkụ gị malite n'ụbọchị ị chọrọ ịkụ ihe: ịkwado ala, ịkụ ihe, inye nri ọ bụla nnwale ala gị ma ọ bụ onye ndụmọdụ gị tụrụ aro, na iwepụ ahịhịa ọ bụla. Jiri agba dị iche kaa oge dị mkpa maka iwepụ ahịhịa.",
          youCanNow: "ịhazi inye nri na iwepụ ahịhịa na kalenda nwere ụbọchị ka e jikwaa ahịhịa n'izu mbụ dị mkpa.",
          quickCheck: [
            { objective: "O3", q: "Olee mgbe ahịhịa na-ebelata mkpụrụ e wetara kacha?", options: ["Obere oge tupu owuwe ihe ubi", "N'izu mbụ mgbe ihe ọkụkụ pụtara", "Mgbe e wesịrị ihe ubi", "Naanị n'oge ọkọchị"], answer: 1, why: "Oge dị mkpa bụ izu mbụ; iwepụ ahịhịa ma emechaa enweghị ike iweghachi mkpụrụ ahụ." },
            { objective: "O3", q: "Kedu ihe ọkụkụ na-emepụta ọtụtụ nitrogen nke ya site na root nodules?", options: ["Ọka", "Osikapa", "Akpụ", "Agwa"], answer: 3, why: "Agwa dị iche iche na-anara nitrogen site n'enyemaka nje bacteria dị na root nodules ha." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ịmalite ihe ọkụkụ nke ọma",
        questions: [
          { objective: "O1", q: "Na Kenya, kedu ụlọ ọrụ na-akwado mkpụrụ ma na-ebipụta National Crop Variety List?", options: ["KEPHIS", "Ọfịs ụzọ county", "Ahịa obodo", "Ụlọ akụ"], answer: 0, why: "KEPHIS na-akwado mkpụrụ ma na-edepụta ụdị e wepụtara na Kenya." },
          { objective: "O1", q: "Mpaghara gị na-enwekarị mmiri ozuzo dị mkpụmkpụ. Kedu àgwà ụdị kacha mkpa?", options: ["Ịcha n'oge gafere", "Ịcha ngwa ngwa", "Osisi toro ogologo", "Mkpụrụ uhie"], answer: 1, why: "Ụdị na-acha ngwa ngwa na-emecha tupu mmiri ozuzo akwụsị." },
          { objective: "O2", q: "Ọka na 75 cm x 25 cm na-eji ala ole maka otu ihe ọkụkụ?", options: ["1 m2", "0.25 m2", "0.1875 m2", "0.75 m2"], answer: 2, why: "0.75 m x 0.25 m = 0.1875 m2." },
          { objective: "O2", q: "Ihe dị ka mita square ole dị n'otu acre?", options: ["10,000", "1,000", "2,470", "4,047"], answer: 3, why: "Otu acre dị ihe dị ka 4,047 m2; otu hekta bụ 10,000 m2." },
          { objective: "O3", q: "Ebee ka ihe ọmụmụ a na-ezigara gị maka ọnụọgụ fatịlaịza?", options: ["Nnwale ala gị na onye ndụmọdụ ọrụ ugbo gị, dị ka n'ihe ọmụmụ \"Ahụike Ala na Ọmụmụ Ya\"", "Akpa kacha ukwuu n'ụlọ ahịa", "Ihe ọ bụla onye agbata obi jiri", "Otu ọnụọgụ maka ihe ọkụkụ niile"], answer: 0, why: "Ọnụọgụ na-adabere n'ala gị na ihe ọkụkụ gị, ya mere ha na-esi na nnwale ala ma ọ bụ onye ndụmọdụ." }
        ]
      }
    },
    {
      name: "Isi 2: Ichebe na ịtụ ihe ọkụkụ",
      lessons: [
        {
          title: "Ọrịa ndị bụ isi: maize lethal necrosis, nje virus akpụ na rice blast",
          objectives: ["O4"],
          minutes: 6,
          goal: "Mata maize lethal necrosis, cassava mosaic, cassava brown streak na rice blast ma họrọ ihe mbụ ị ga-eme.",
          text: [
            "Maize lethal necrosis (MLN) mebiri Kenya nke ukwuu site n'afọ 2011 ma gbasaa n'East Africa. CIMMYT na-akọwa na ọ na-eme mgbe nje virus abụọ butere ọka otu oge: maize chlorotic mottle virus na potyvirus dị ka sugarcane mosaic virus. Akwụkwọ na-enwe ntụpọ odo (mottling), wee kpọọ nkụ site na nsọtụ ruo n'etiti; etiti osisi ahụ nwere ike ịnwụ, ọka ya dịkwa obere, tọgbọ chakoo ma ọ bụ rere ure. Ụmụ ahụhụ dị ka thrips na aphids na-agbasa ya n'ubi, mkpụrụ butere ọrịa nwekwara ike ibuga ya ebe dị anya. Ihe ị ga-eme: kụọ mkpụrụ akwadoro nke ụdị na-anagide MLN, gị na ndị agbata obi gị kwụsị ịkụ ọka otu oge (rotation), wepụ ọka pụtara n'onwe ya, jikwaa ahịhịa, hopụta ma bibie osisi na-arịa ọrịa n'oge, ma kọọrọ onye ndụmọdụ ọrụ ugbo ya.",
            "Cassava mosaic disease (CMD) na-eme ka akwụkwọ nwee ntụpọ odo na akwụkwọ ndụ (mosaic), gbagọọ agbagọ ma dị obere, ọ na-egbochikwa osisi ahụ ito. Cassava brown streak disease (CBSD) na-egosi ntụpọ odo n'akụkụ akwara akwụkwọ ochie na ahịrị aja aja n'osisi, mana mmebi kacha njọ zoro ezo: mgbọrọgwụ (ji akpụ) na-ere ure, kpọọ nkụ, sie ike ma bụrụ aja aja, mgbe ụfọdụ mgbe akwụkwọ dị ka ha fọrọ nke nta ka ha dị mma. IITA na-eme atụmatụ na ọrịa abụọ a na-efu Afrịka ihe dị ka US$1 billion kwa afọ. Whiteflies na-agbasa ha abụọ, mana ụzọ bụ isi ha si aga ebe dị anya bụ ndị ọrụ ugbo na-ekerịta osisi akpụ butere ọrịa. Ihe ị ga-eme: kụọ osisi akpụ dị ọcha nke ụdị na-anagide ya, hopụta ma bibie osisi na-arịa ọrịa n'oge, ewerela osisi akpụ mgbe ọ bụla site n'ubi na-arịa ọrịa, ma n'East Africa gwuo mgbọrọgwụ ole na ole ka ị lelee ire ure aja aja tupu owuwe ihe ubi.",
            "Rice blast bụ ọrịa fungus na nnukwu nsogbu na West Africa. N'akwụkwọ, ọ na-eme ntụpọ yiri daịmọnd ma ọ bụ anya nwere etiti ntụ ntụ na nsọtụ aja aja. Mgbe ọ wakporo olu dị n'okpuru panicle (isi osikapa), panicle ahụ na-acha ọcha ma tọgbọ chakoo. Nchọpụta e mere na AfricaRice chọpụtara na ụdị na-eguzogide ọrịa bụ ụzọ njikwa kacha dị ọnụ ala maka obere ndị ọrụ ugbo, mana fungus ahụ nwere ike imeri iguzogide ahụ afọ ole na ole mgbe a kụsara ụdị ahụ n'ọtụtụ ebe, ya mere ụdị ọhụrụ dị mkpa. Ihe ị ga-eme: kụọ ụdị a tụrụ aro dị ka nke na-eguzogide ya, ezela nitrogen karịrị akarị, ezere ụkọ mmiri n'osikapa ala elu (upland), jiri mkpụrụ dị ọcha ma kpochapụ ihe fọdụrụ na-arịa ọrịa. Jiri ọgwụ fungus (fungicide) naanị ma ọ bụrụ na onye ndụmọdụ tụrụ aro ya, e debanyekwara ya aha maka osikapa."
          ],
          steps: ["Legharịa ubi kwa izu; tụnyere ihe ị hụrụ na ihe ịrịba ama dị na nkuzi a.", "See foto osisi na-arịa ọrịa ma jụọ onye ndụmọdụ ma ọ bụ ụlọ ọgwụ ihe ọkụkụ (plant clinic) ka ha kwado ya.", "Hopụta ma bibie osisi na-arịa ọrịa n'oge (MLN na nje virus akpụ).", "Oge ọzọ: mkpụrụ akwadoro ma ọ bụ osisi akpụ dị ọcha nke ụdị na-anagide ma ọ bụ na-eguzogide ọrịa.", "Gị na ndị agbata obi kwekọrịta maka rotation na ihe ịkụ dị ọcha."],
          words: [["MLN", "maize lethal necrosis: ọrịa si na nje virus abụọ ọnụ nke nwere ike igbu osisi ọka."], ["CMD", "cassava mosaic disease: ọrịa nje virus na-eme ka akwụkwọ akpụ nwee ntụpọ, gbagọọ ma dị obere."], ["CBSD", "cassava brown streak disease: ọrịa nje virus na-eme ka mgbọrọgwụ akpụ rere ure, kpọọ nkụ ma bụrụ aja aja."], ["Rice blast", "ọrịa fungus nke osikapa na-eme ntụpọ yiri anya n'akwụkwọ ma nwee ike ime ka panicle cha ọcha ma tọgbọ chakoo."], ["Rogue", "ịhopụta na ibibi osisi na-arịa ọrịa ka ha ghara ịgbasa ọrịa."]],
          slides: [
            { title: "Maize lethal necrosis (MLN)", bullets: ["Nje virus abụọ ọnụ (CIMMYT)", "Ntụpọ odo, akwụkwọ na-akpọ nkụ site na nsọtụ", "Ụmụ ahụhụ na mkpụrụ butere ọrịa na-agbasa ya"] },
            { title: "Cassava mosaic na brown streak", bullets: ["CMD: akwụkwọ nwere ntụpọ, gbagọrọ agbagọ, dị obere", "CBSD: odo n'akwara, ahịrị n'osisi, mgbọrọgwụ rere ure aja aja", "Whiteflies na osisi akpụ e kerịtara na-agbasa ya"] },
            { title: "Rice blast", bullets: ["Ntụpọ yiri anya, etiti ntụ ntụ, nsọtụ aja aja", "Neck blast: panicle ọcha, tọgbọ chakoo", "Iguzogide nwere ike ịda mgbe afọ ole na ole gachara"] },
            { title: "Ihe mbụ ị ga-eme", bullets: ["Kwado ya na onye ndụmọdụ ma ọ bụ plant clinic", "Hopụta osisi na-arịa ọrịa n'oge", "Oge ọzọ: mkpụrụ dị ọcha, ụdị na-anagide ya, rotation"] }
          ],
          sources: [CIMMYT_MLN, IITA_CASSAVA_VIRUS, JIRCAS_BLAST, AFRICARICE],
          tryIt: "Jegharịa n'ubi gị (ma ọ bụ nke onye agbata obi) ma chọọ ihe ịrịba ama nke ọrịa kacha mkpa maka ihe ọkụkụ gị. Dee ihe ị hụrụ, see foto ihe ọ bụla na-enye gị obi abụọ, ma dee ihe mbụ ị ga-eme maka ọrịa ahụ.",
          youCanNow: "ịmata maize lethal necrosis, cassava mosaic, cassava brown streak na rice blast na ịhọrọ ihe mbụ ị ga-eme.",
          quickCheck: [
            { objective: "O4", q: "Akwụkwọ akpụ gị dị ka ha fọrọ nke nta ka ha dị mma, mana mgbọrọgwụ i gwupụtara nwere ire ure siri ike, aja aja, kpọrọ nkụ. Ihe kacha yie ka ọ kpatara ya bụ:", options: ["Cassava brown streak disease", "Mmiri ozuzo karịrị akarị n'oge ịkụ ihe", "Fall armyworm", "Rice blast"], answer: 0, why: "CBSD na-eme ka mgbọrọgwụ rere ure, mgbe ụfọdụ naanị na obere ihe ịrịba ama n'akwụkwọ." },
            { objective: "O4", q: "Akwụkwọ osikapa nwere ntụpọ yiri anya nwere etiti ntụ ntụ na nsọtụ aja aja. Gịnị bụ ezigbo ihe ime?", options: ["Tinyekwuo fatịlaịza nitrogen", "Kụghachi otu mkpụrụ ahụ n'oge ọzọ", "Jụọ onye ndụmọdụ ka ọ kwado na ọ bụ blast ma kụọ ụdị na-eguzogide ya n'oge ọzọ", "Mee ka mmiri jupụta n'ụlọ"], answer: 2, why: "Ndị ahụ bụ ntụpọ blast; ụdị na-eguzogide ya na nitrogen ziri ezi bụ ụzọ njikwa bụ isi." }
          ]
        },
        {
          title: "Ịmata oge owuwe ihe ubi",
          objectives: ["O5"],
          minutes: 4,
          goal: "Mata mgbe ọka, osikapa, akpụ ma ọ bụ agwa gị dị njikere iwe.",
          text: [
            "Ọ bụrụ na i wee ya n'oge na-erubeghị, mkpụrụ ya ga-adị mfe ma nwee mmiri; ọ bụrụ na i wee ya n'oge gafere, ị ga-atụfu ihe ubi nye nnụnụ, oke, mmiri ozuzo, ịgbawa (shattering) na ire ure, mkpụrụ ahụ ga-enwekwa ike inweta aflatoxin. A na-akụzi ịkpọ nkụ na nchekwa n'ihe ọmụmụ \"Ilekọta na Ichekwa Ihe Ubi Mgbe Owuwe Gasịrị\".",
            "Ọka tozuru etozu mgbe black layer pụtara n'ebe mkpụrụ jikọrọ n'ọka, akpụkpọ ya akpọọkwa nkụ; wepụ akpụkpọ ole na ole ma gbajie mkpụrụ ole na ole ka ị lelee. Wee mee ka ọ kpọọ nkụ nke ọma tupu i chekwaa ya. Osikapa dị njikere mgbe ọtụtụ mkpụrụ dị na panicle chara odo ọla edo ma sie ike; ichere ogologo oge na-eweta shattering na mfu nye nnụnụ. Agwa na agwa cowpea dị njikere mgbe ọtụtụ mkpụrụ akpa ha kpọrọ nkụ ma na-eme mkpọtụ; tụtụọ ha tupu ha gbawaa. Ahụekere dị njikere mgbe akwụkwọ ya chara odo, ime ọtụtụ okpokoro ya agbachaakwa ọchịchịrị; gwupụta osisi ole na ole ka ị lelee.",
            "Akpụ enweghị otu ụbọchị owuwe: ụdị ọ bụla nwere oge ọ na-ewe itozu, mgbọrọgwụ nwekwara ike ịnọ n'ala obere oge. Mana mgbọrọgwụ a hapụrụ ogologo oge nwere ike ịbụ osisi osisi (woody), ebe brown streak dịkarịkwa, ire ure ahụ na-aka njọ. Ozugbo e gwupụtara ya, akpụ na-emebi n'ime ụbọchị ole na ole, ya mere gwupụta naanị ihe ị nwere ike ire ma ọ bụ rụọ ngwa ngwa. Na Ghana na Naịjirịa, ọtụtụ ndị ọrụ ugbo na-ahazi oge owuwe ha dị ka ike onye na-arụ gari ma ọ bụ fufu si dị."
          ],
          steps: ["Mara oge ụdị gị na-ewe itozu site n'akpa mkpụrụ ma ọ bụ onye ndụmọdụ.", "Lelee osisi ole na ole n'akụkụ dị iche iche nke ubi, ọ bụghị naanị otu.", "Ọka: black layer na akpụkpọ kpọrọ nkụ; osikapa: ọtụtụ mkpụrụ chara odo ọla edo ma sie ike.", "Agwa: akpa mkpụrụ kpọrọ nkụ na-eme mkpọtụ; ahụekere: ime okpokoro gbachara ọchịchịrị.", "Akpụ: gwupụta naanị ihe ị nwere ike ire ma ọ bụ rụọ n'ime ụbọchị ole na ole."],
          words: [["Black layer", "ntụpọ ojii n'ebe mkpụrụ ọka jikọrọ n'ọka; ọ na-egosi na mkpụrụ ahụ akwụsịla ijupụta."], ["Shattering", "mkpụrụ ma ọ bụ akpa mkpụrụ na-ada ma ọ bụ na-agbawa n'ubi tupu owuwe ihe ubi."], ["Oge itozu (maturity period)", "ogologo oge ụdị na-ewe site n'ịkụ ihe ruo owuwe ihe ubi."]],
          slides: [
            { title: "N'oge na-erubeghị ma ọ bụ n'oge gafere, ha abụọ na-efu", bullets: ["Oge na-erubeghị: mkpụrụ dị mfe, nwere mmiri", "Oge gafere: nnụnụ, oke, mmiri ozuzo, shattering, ire ure", "Ịkpọ nkụ na nchekwa: lee ihe ọmụmụ Post-Harvest"] },
            { title: "Ihe ọkụkụ mkpụrụ", bullets: ["Ọka: black layer, akpụkpọ kpọrọ nkụ", "Osikapa: ọtụtụ mkpụrụ chara odo ọla edo ma sie ike", "Lelee osisi ole na ole n'ubi niile"] },
            { title: "Agwa na akpụ", bullets: ["Agwa, agwa cowpea: akpa kpọrọ nkụ, na-eme mkpọtụ", "Ahụekere: ime okpokoro na-agba ọchịchịrị", "Akpụ: na-emebi n'ime ụbọchị ole na ole e gwupụtachaa ya"] }
          ],
          tryIt: "Maka ihe ọkụkụ gị, dee oge ụdị ahụ na-ewe itozu, ihe ịrịba ama ị ga-elele, na ụbọchị ị tụrụ anya ịmalite ilele. Ọ bụrụ na ihe ọkụkụ gị nọ n'ubi ugbu a, lelee osisi ise n'akụkụ dị iche iche nke ubi ma dee ihe ị hụrụ.",
          youCanNow: "ịmata mgbe ihe ọkụkụ nri gị dị njikere iwe.",
          quickCheck: [
            { objective: "O5", q: "Kedu otu ị ga-esi mara na mkpụrụ ọka akwụsịla ijupụta?", options: ["Akwụkwọ ka na-acha akwụkwọ ndụ", "Black layer na-apụta n'ebe mkpụrụ jikọrọ n'ọka", "Okoko (tassel) na-apụta", "Mmiri ezoola ugboro abụọ"], answer: 1, why: "Black layer na-egosi na ọka atozuola (physiological maturity)." },
            { objective: "O5", q: "Gịnị mere ị ga-eji gwupụta naanị akpụ ị nwere ike ire ma ọ bụ rụọ n'ime ụbọchị ole na ole?", options: ["Mgbọrọgwụ akpụ na-emebi ngwa ngwa ozugbo e gwupụtara ya", "Mgbọrọgwụ akpụ na-etoghachi mgbe e gwuchara ya", "Ndị na-azụ ahịa na-ahọrọ mgbọrọgwụ kpọrọ nkụ", "Akwụkwọ bụ ngwaahịa bụ isi"], answer: 0, why: "Mgbọrọgwụ akpụ ọhụrụ na-emebi n'ime ụbọchị ole na ole mgbe e gwupụtara ya." }
          ]
        },
        {
          title: "Ịgbakọ mkpụrụ e wetara na ide atụmatụ ịkọ ihe gị",
          objectives: ["O5", "O2", "O3"],
          minutes: 6,
          goal: "Gbakọọ mkpụrụ e wetara kwa hekta na kwa acre ma dee atụmatụ ịkọ ihe maka otu ihe ọkụkụ nri n'ubi gị.",
          text: [
            "Mkpụrụ e wetara (yield) bụ ibu ihe ubi i wetara kwa nha ala. Iji mara ya, tụọ ihe ubi gị n'ihe ọtụtụ mgbe ọ kpọchara nkụ, ma mara kpọmkwem nha ala o si. Mkpụrụ e wetara kwa hekta = kg e wetara / nha ala na m2 x 10,000. Mkpụrụ e wetara kwa acre = kg e wetara / nha ala na m2 x 4,047. Ma ọ bụ site na kwa hekta gaa na kwa acre: kewaa ya na 2.47.",
            "Ihe atụ, ọka na Kenya: i wetara 1,350 kg ọka kpọrọ nkụ site n'ubi nke ruru 3,000 m2. Kwa hekta: 1,350 / 3,000 x 10,000 = 4,500 kg, ma ọ bụ tọn 4.5. Kwa acre: 4,500 / 2.47 = ihe dị ka 1,820 kg, nke dị ihe dị ka akpa 20 nke 90 kg. Atụmatụ ngwa ngwa tupu owuwe ihe ubi: kaa akara square 10 m x 10 m (100 m2) n'akụkụ ubi dị ka ebe ndị ọzọ, wee ya ma mee ka ọ kpọọ nkụ, tụọ ya, ma ba ya ụba na 100 iji nweta kg kwa hekta. Mee ya n'ebe abụọ ma ọ bụ atọ ma were nkezi ya.",
            "Ugbu a, chịkọta ihe ọmụmụ a niile n'atụmatụ ịkọ ihe maka otu ihe ọkụkụ nri n'ubi gị: nha ubi, ụdị na ebe mkpụrụ si, ohere ya na ọnụọgụ ihe ọkụkụ na mkpụrụ ị chọrọ, kalenda nwere ụbọchị maka ịkwado ala, ịkụ ihe, inye nri na iwepụ ahịhịa, ọrịa ndị bụ isi na ihe mbụ ị ga-eme, otu ị ga-esi mata oge owuwe, na ebumnuche mkpụrụ e wetara kwa hekta na kwa acre. Mgbe owuwe ihe ubi gachara, tụnyere ezi mkpụrụ i wetara na ebumnuche gị ma dee ihe ị ga-agbanwe. Nwaanyị ọrụ ugbo na Côte d'Ivoire nke na-ede mkpụrụ osikapa o wetara kwa oge nwere ike igosi onye na-azụ ahịa, otu nkwado (cooperative) ma ọ bụ onye na-agbazinye ego ihe ubi ya na-amị."
          ],
          steps: ["Tụọ nha ala e wetara ihe na m2.", "Tụọ ihe ubi kpọrọ nkụ na kg.", "Kwa hekta = kg / m2 x 10,000; kwa acre = kg / m2 x 4,047.", "Ma ọ bụ were 100 m2 n'ebe 2 ma ọ bụ 3, tụọ ma ba ya ụba na 100 maka kg/ha.", "Dee atụmatụ: ụdị, mkpụrụ, ọnụọgụ ihe ọkụkụ, kalenda, ọrịa, owuwe, ebumnuche mkpụrụ e wetara.", "Mgbe owuwe gachara, tụnyere ezi mkpụrụ e wetara na ebumnuche."],
          words: [["Mkpụrụ e wetara (yield)", "ọnụọgụ ihe ubi e wetara kwa nha ala, dị ka kg kwa hekta ma ọ bụ akpa kwa acre."], ["Tọn (tonne)", "1,000 kilogram."], ["Obere ala nlele (sample plot)", "obere ala e debere akara, e wee ma tụọ iji mee atụmatụ mkpụrụ ubi niile ga-amị."]],
          slides: [
            { title: "Usoro mgbakọ mkpụrụ e wetara", bullets: ["Kwa ha = kg / nha ala (m2) x 10,000", "Kwa acre = kg / nha ala (m2) x 4,047", "Site na kwa ha gaa na kwa acre: kewaa na 2.47"] },
            { title: "Ihe atụ a gbakọrọ agbakọ: ọka", bullets: ["1,350 kg site na 3,000 m2", "= 4,500 kg/ha (4.5 t/ha)", "= ihe dị ka 1,820 kg/acre, ihe dị ka akpa 20 nke 90 kg"] },
            { title: "Atụmatụ site n'obere ala nlele", bullets: ["Kaa akara 10 m x 10 m (100 m2)", "Wee, mee ka ọ kpọọ nkụ, tụọ; x 100 = kg/ha", "Mee ya n'ebe 2 ma ọ bụ 3 ma were nkezi"] },
            { title: "Atụmatụ ịkọ ihe gị", bullets: ["Ụdị, mkpụrụ, ọnụọgụ ihe ọkụkụ, kalenda", "Ọrịa na ihe mbụ ị ga-eme", "Ihe ịrịba ama owuwe na ebumnuche kwa ha na kwa acre"] }
          ],
          tryIt: "Ọrụ ikpeazụ: dee atụmatụ ịkọ ihe gị maka otu ihe ọkụkụ nri n'ubi gị: nha ubi na hekta na acre, ụdị na ebe mkpụrụ si, ohere ya na ọnụọgụ ihe ọkụkụ na mkpụrụ ị chọrọ a gbakọrọ agbakọ, kalenda nwere ụbọchị (ịkwado ala, ịkụ ihe, inye nri, iwepụ ahịhịa), ọrịa abụọ bụ isi na ihe mbụ ị ga-eme maka nke ọ bụla, ihe ịrịba ama owuwe, na ebumnuche mkpụrụ e wetara kwa hekta na kwa acre ya na mgbakọ gị.",
          youCanNow: "ịgbakọ mkpụrụ e wetara kwa hekta na kwa acre na ide atụmatụ ịkọ ihe maka otu ihe ọkụkụ nri n'ubi gị.",
          quickCheck: [
            { objective: "O5", q: "I wetara 900 kg agwa kpọrọ nkụ site na 4,047 m2. Gịnị bụ mkpụrụ e wetara kwa acre?", options: ["Ihe dị ka 450 kg", "Ihe dị ka 2,224 kg", "900 kg", "Ihe dị ka 4,047 kg"], answer: 2, why: "4,047 m2 bụ otu acre, ya mere mkpụrụ e wetara bụ 900 kg kwa acre." },
            { objective: "O5", q: "Obere ala nlele nke 100 m2 nyere 40 kg ọka kpọrọ nkụ. Gịnị bụ atụmatụ mkpụrụ e wetara kwa hekta?", options: ["40 kg", "400 kg", "40,000 kg", "4,000 kg"], answer: 3, why: "Otu hekta bụ 100 ugboro 100 m2, ya mere 40 x 100 = 4,000 kg kwa hekta." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Ichebe na ịtụ ihe ọkụkụ",
        questions: [
          { objective: "O4", q: "Ihe na-akpata maize lethal necrosis bụ:", options: ["Anwụ karịrị akarị", "Nje virus abụọ na-ebute osisi ahụ otu oge", "Ụkọ potassium", "Naanị fall armyworm"], answer: 1, why: "CIMMYT na-akọwa MLN dị ka nje virus abụọ na-ebute ọka otu oge." },
          { objective: "O4", q: "Gịnị bụ ụzọ bụ isi nje virus akpụ si agbasa ebe dị anya?", options: ["Ikuku na-efe akwụkwọ", "Mmiri ozuzo na-awụsa", "Ikerịta osisi akpụ butere ọrịa", "Nsị nnụnụ"], answer: 2, why: "Whiteflies na-agbasa ha nso; osisi akpụ butere ọrịa na-ebuga ha ebe dị anya." },
          { objective: "O4", q: "Kedu omume na-eme ka rice blast ka njọ?", options: ["Fatịlaịza nitrogen karịrị akarị", "Iji mkpụrụ dị ọcha", "Ịkụ ụdị na-eguzogide ya", "Ikpochapụ ihe fọdụrụ na-arịa ọrịa"], answer: 0, why: "Nitrogen dị ukwuu na-eme ka osikapa ghe oghe karịa nye blast." },
          { objective: "O5", q: "Osikapa dị njikere iwe mgbe:", options: ["Okooko mbụ meghere", "Akwụkwọ na-acha akwụkwọ ndụ gbara ọchịchịrị", "Ọ nọọla n'ubi otu ọnwa", "Ọtụtụ mkpụrụ dị na panicle chara odo ọla edo ma sie ike"], answer: 3, why: "Mkpụrụ chara odo ọla edo ma sie ike na-egosi na ihe ọkụkụ ahụ atozuola; owuwe n'oge gafere na-akpata shattering na mfu nye nnụnụ." },
          { objective: "O5", q: "I wetara 4,940 kg kwa hekta. Ihe dị ka ole ka nke ahụ bụ kwa acre?", options: ["2,000 kg", "12,200 kg", "4,940 kg", "494 kg"], answer: 0, why: "4,940 / 2.47 = 2,000 kg kwa acre." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Ịkọ Ihe Ọkụkụ Nri n'Ụzọ Ọgbara Ọhụrụ: Ọka, Osikapa, Akpụ na Agwa",
    questions: [
      { objective: "O1", q: "Ebee ka ị ga-ebu ụzọ lee maka ụdị dabara mpaghara gị?", options: ["Mgbasa ozi na soshal midia", "Ụlọ nchọpụta mba gị na onye ndụmọdụ ọrụ ugbo gị", "Mkpụrụ kacha dị ọnụ ala n'ahịa", "Ụlọ nchekwa ọka nke oge gara aga"], answer: 1, why: "Ụlọ nchọpụta na-anwale ma na-ewepụta ụdị maka mpaghara ọ bụla." },
      { objective: "O1", q: "Kedu ụlọ ọrụ na-akwado mkpụrụ na Naịjirịa?", options: ["NAFDAC", "Ụlọ akụ etiti", "KEPHIS", "National Agricultural Seed Council (NASC)"], answer: 3, why: "NASC na-akwado mkpụrụ na Naịjirịa." },
      { objective: "O1", q: "Gịnị ka ị ga-elele tupu i kwụọ ụgwọ akpa mkpụrụ akwadoro?", options: ["Ihe nkpuchi, akara na ụbọchị", "Naanị agba akpa ahụ", "Naanị ọnụahịa", "Ọ dịghị ihe"], answer: 0, why: "Akpa e mechiri emechi, nwere akara na ụbọchị, site n'aka onye na-ere ahịa edebanyere aha na-echebe gị pụọ na mkpụrụ adịgboroja." },
      { objective: "O1", q: "Kedu ụlọ ọrụ CGIAR na-arụ ọrụ n'osikapa n'Afrịka?", options: ["IITA", "ICIPE", "AfricaRice", "WorldFish"], answer: 2, why: "AfricaRice, nke dị n'Abidjan, na-arụ ọrụ n'osikapa." },
      { objective: "O2", q: "Mita square ole dị n'otu hekta?", options: ["4,047", "1,000", "100", "10,000"], answer: 3, why: "Otu hekta bụ 100 m x 100 m = 10,000 m2." },
      { objective: "O2", q: "Osikapa a na-ebugharị na 20 cm x 20 cm na-enye hills ole kwa hekta?", options: ["25,000", "250,000", "2,500", "40,000"], answer: 1, why: "0.2 x 0.2 = 0.04 m2; 10,000 / 0.04 = 250,000." },
      { objective: "O2", q: "Agwa na 50 cm x 10 cm chọrọ ihe dị ka ihe ọkụkụ ole kwa acre?", options: ["Ihe dị ka 80,900", "Ihe dị ka 200,000", "Ihe dị ka 8,090", "Ihe dị ka 40,470"], answer: 0, why: "0.5 x 0.1 = 0.05 m2; 4,047 / 0.05 = ihe dị ka 80,900." },
      { objective: "O2", q: "Gịnị mere ị ga-eji gbakwunye ihe dị ka 10% mkpụrụ ọzọ?", options: ["Iji nye nnụnụ nri", "Iji mee ka akpa ahụ dị arọ", "Iji kpuchie mkpụrụ na-adịghị epulite ma mejupụta oghere", "N'ihi na iwu kwuru otu ahụ"], answer: 2, why: "Ụfọdụ mkpụrụ anaghị epulite; mkpụrụ ọzọ na-ekwe ka i mejupụta oghere." },
      { objective: "O3", q: "Gịnị ka agwa dị iche iche chọrọ karịa nitrogen?", options: ["Nnu", "Phosphorus", "Shuga", "Lime kwa izu"], answer: 1, why: "Agwa na-anara ọtụtụ nitrogen nke ha mana ha ka chọrọ phosphorus." },
      { objective: "O3", q: "Olee mgbe a na-ewepụkarị ahịhịa nke mbụ?", options: ["Obere oge tupu owuwe ihe ubi", "Naanị ma ọ bụrụ na ahịhịa amaa okooko", "Mgbe ihe ọkụkụ ruru ikpere ma pụta okoko (tassel)", "N'izu mbụ dị mkpa, ọtụtụ mgbe ihe dị ka izu 2 ruo 3 mgbe ihe ọkụkụ pụtara"], answer: 3, why: "Ahịhịa na-ebelata mkpụrụ e wetara kacha n'izu mbụ." },
      { objective: "O3", q: "Gịnị mere ị ga-eji tinye oge ịkọ ihe gị na kalenda a gụrụ site n'ịkụ ihe?", options: ["Ka ndị ọrụ, ngwa ọrụ na ego dị njikere n'oge", "Iji masị ndị ọbịa", "N'ihi na mkpụrụ na-agụ kalenda", "Ọ baghị uru"], answer: 0, why: "Kalenda nwere ụbọchị na-eme ka e mee ọrụ ọ bụla n'ọkwa ihe ọkụkụ kwesịrị ekwesị." },
      { objective: "O3", q: "Ihe dị ka ogologo oge ole ka a ga-ahapụ akpụ n'enweghị ahịhịa?", options: ["Otu izu", "Naanị mgbe e wesịrị ihe ubi", "Ihe dị ka ọnwa atọ mbụ ya, ruo mgbe akwụkwọ ya kpuchiri ala", "Ọ dịghị mgbe ọ bụla"], answer: 2, why: "Akpụ na-eto nwayọọ na mbụ, ọ chọkwara njikwa ahịhịa n'oge mbụ ruo mgbe akwụkwọ ya kpuchiri ala." },
      { objective: "O4", q: "Ntụpọ odo n'akwụkwọ ọka nke na-akpọ nkụ site na nsọtụ, ya na ọka dị obere ma ọ bụ rere ure, na-egosi:", options: ["Maize lethal necrosis", "Rice blast", "Ezigbo ahụike", "Potassium karịrị akarị"], answer: 0, why: "Ndị ahụ bụ ihe ịrịba ama MLN a na-ahụkarị." },
      { objective: "O4", q: "Akwụkwọ akpụ nwere ntụpọ odo na akwụkwọ ndụ, gbagọrọ agbagọ ma dị obere na-egosi:", options: ["Naanị cassava brown streak", "Ụkọ ìhè anwụ", "Cassava mosaic disease", "Fall armyworm"], answer: 2, why: "Ntụpọ mosaic n'akwụkwọ na ịgbagọ bụ ihe ịrịba ama CMD." },
      { objective: "O4", q: "Gịnị ka ị ga-ebu ụzọ mee maka osisi ole na ole na-egosi ihe ịrịba ama MLN ma ọ bụ nje virus akpụ?", options: ["Were osisi akpụ site na ha", "Kwado ya na onye ndụmọdụ ma hopụta ma bibie ha n'oge", "Fesa fatịlaịza n'ahụ ha", "Hapụ ha ka ha gbakee"], answer: 1, why: "Ịhopụta ha n'oge na-ewepụ ebe nje virus ahụ si." },
      { objective: "O4", q: "Gịnị mere a na-aga n'ihu na-ewepụta ụdị osikapa ọhụrụ na-eguzogide blast?", options: ["Mkpụrụ ochie na-agbanwe agba", "Ike na-agwụ ndị ọrụ ugbo", "Osikapa chọrọ mmiri karịa kwa afọ", "Fungus ahụ nwere ike imeri iguzogide afọ ole na ole mgbe a kụsara ụdị n'ọtụtụ ebe"], answer: 3, why: "Iguzogide blast nwere ike ịda, ya mere ndị na-azụlite ihe ọkụkụ na-aga n'ihu na-emepụta ụdị ọhụrụ." },
      { objective: "O5", q: "Ahụekere dị njikere mgbe:", options: ["Ọ malitere ịma okooko", "Akwụkwọ ya chara odo, ime ọtụtụ okpokoro ya agbachaakwa ọchịchịrị", "Mmiri ezoola otu ugboro", "Akpa ya dị nro ma dị ọcha n'ime"], answer: 1, why: "Ime okpokoro gbachara ọchịchịrị na akwụkwọ na-acha odo na-egosi na ọ tozuola." },
      { objective: "O5", q: "I wetara 600 kg ọka kpọrọ nkụ site na 1,500 m2. Gịnị bụ mkpụrụ e wetara kwa hekta?", options: ["600 kg", "9,000 kg", "1,500 kg", "4,000 kg"], answer: 3, why: "600 / 1,500 x 10,000 = 4,000 kg kwa hekta." },
      { objective: "O5", q: "Iji gbanwee mkpụrụ e wetara kwa hekta ka ọ bụrụ kwa acre, ị ga:", options: ["Kewaa ya na 2.47", "Ba ya ụba na 2.47", "Gbakwunye 4,047", "Kewaa ya na 10"], answer: 0, why: "Otu hekta dị ihe dị ka acre 2.47, ya mere mkpụrụ e wetara kwa acre dị obere karịa." },
      { objective: "O5", q: "Gịnị mere ị ga-eji tụnyere ezi mkpụrụ i wetara na ebumnuche atụmatụ gị mgbe owuwe gachara?", options: ["Ụlọ ọrụ mkpụrụ chọrọ ya", "Iji hụ ihe rụrụ ọrụ na ihe ị ga-agbanwe n'oge ọzọ", "Iji nweta akpa fatịlaịza n'efu", "Ọ baghị uru"], answer: 1, why: "Ịtụnyere ihe i wetara na atụmatụ ahụ na-egosi ebe ị ga-eme ka ọ ka mma." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [0, 2, 4, 5, 9, 12, 13, 17, 18] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ nke atụmatụ ma lelee ya ọzọ na onye ndụmọdụ ọrụ ugbo gị.",
    criteria: [
      { name: "Ụdị na mkpụrụ", objective: "O1", notYet: "A kpọghị aha ụdị ọ bụla, ma ọ bụ mkpụrụ bụ ọka hybrid e chekwara ma ọ bụ osisi akpụ si n'ubi na-arịa ọrịa.", meets: "A kpọrọ aha ụdị a tụrụ aro maka mpaghara ahụ, ya na ebe edebanyere aha a ga-azụta mkpụrụ akwadoro ma ọ bụ osisi akpụ dị ọcha.", exceeds: "A tụnyere ụdị abụọ maka oge itozu, iguzogide ọrịa na ahịa, ma kọwaa nhọrọ ahụ." },
      { name: "Ọnụọgụ ihe ọkụkụ na mkpụrụ a chọrọ", objective: "O2", notYet: "Enweghị ohere ma ọ bụ mgbakọ, ma ọ bụ mgbakọ ahụ ezighi ezi.", meets: "E gbakọrọ ohere, ihe ọkụkụ kwa hekta, kwa acre na n'ubi, na mkpụrụ ma ọ bụ osisi akpụ a chọrọ nke ọma, na-egosi nzọụkwụ.", exceeds: "Ọ na-ahazikwa imejupụta oghere na ịgụ ihe ọkụkụ mgbe ha pụtara iji lelee ezi ọnụọgụ ha." },
      { name: "Kalenda nwere ụbọchị", objective: "O3", notYet: "E depụtara ọrụ n'enweghị ụbọchị, ma ọ bụ iwepụ ahịhịa dị n'oge gafere.", meets: "Ịkwado ala, ịkụ ihe, inye nri (site na nnwale ala ma ọ bụ onye ndụmọdụ) na iwepụ ahịhịa ọ bụla nwere ụbọchị a gụrụ site n'ụbọchị ịkụ ihe, iwepụ ahịhịa nke mbụ dịkwa n'ime oge dị mkpa.", exceeds: "Ndị ọrụ, ngwa ọrụ na ego a chọrọ maka ọrụ ọ bụla dị na kalenda." },
      { name: "Ilele ọrịa", objective: "O4", notYet: "A kpọghị aha ọrịa ọ bụla, ma ọ bụ ihe a ga-eme adabaghị ha.", meets: "A kpọrọ aha ọrịa abụọ bụ isi maka ihe ọkụkụ ahụ, ya na ihe ịrịba ama ha na ihe mbụ ziri ezi a ga-eme maka nke ọ bụla.", exceeds: "Ọ gụnyere mgbochi maka oge ọzọ a kwekọrịtara na ndị agbata obi, dị ka rotation ma ọ bụ ihe ịkụ dị ọcha." },
      { name: "Owuwe na ebumnuche mkpụrụ e wetara", objective: "O5", notYet: "Enweghị ihe ịrịba ama owuwe ma ọ bụ ebumnuche mkpụrụ e wetara, ma ọ bụ mgbakọ mkpụrụ e wetara ezighi ezi.", meets: "Ihe ịrịba ama owuwe maka ihe ọkụkụ ahụ na ebumnuche mkpụrụ e wetara kwa hekta na kwa acre nwere mgbakọ ziri ezi.", exceeds: "Ọ gụnyere usoro obere ala nlele iji mee atụmatụ mkpụrụ e wetara tupu owuwe na atụmatụ ịtụnyere ihe e wetara na ebumnuche." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ndị na-amụ ihe kụrụ mkpụrụ akwadoro ma ọ bụ osisi akpụ dị ọcha nke ụdị a tụrụ aro n'oge na-esote (nnyocha nsochi)",
      "Ndị na-amụ ihe tụrụ ihe ubi ha ma kọọ mkpụrụ e wetara kwa hekta ma ọ bụ kwa acre mgbe oge ịkọ ihe gachara",
      "Mgbanwe na mkpụrụ e wetara kwa hekta a kọrọ maka ihe ọkụkụ nri a họọrọ site n'otu oge ruo n'oge na-esote",
      "Ubi ole na ole ka a tụfuru n'aka maize lethal necrosis ma ọ bụ nje virus akpụ n'otu ndị na-amụ ihe (akụkọ ndị ndụmọdụ ọrụ ugbo)"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Ekwentị nwere igwe mgbakọ, ma ọ bụ akwụkwọ, mkpịsị ode na igwe mgbakọ dị mfe",
      "Teepụ ntụ ma ọ bụ eriri e debere akara kwa mita, na ihe ọtụtụ maka ịtụ ihe ubi",
      "Ohere ịbanye n'ubi ọka, osikapa, akpụ ma ọ bụ agwa",
      "Ndepụta ụdị mba ma ọ bụ ụdị ndị ndụmọdụ ọrụ ugbo tụrụ aro maka mpaghara ahụ",
      "Ihe dị ka nkeji 60 ruo 90 n'ozuzu maka nkuzi, obere nnwale na ule, gbakwunye omume n'ubi"
    ],
    facilitatorNotes: [
      "Meenụ ule mbido ọnụ, wee mee mgbakọ ọnụọgụ ihe ọkụkụ na mkpụrụ e wetara n'ubi site na teepụ ntụ na ezi ihe ọkụkụ.",
      "Nweta ụdị na ohere a tụrụ aro maka mpaghara gị site n'ụlọ nchọpụta ma ọ bụ ndị ndụmọdụ ọrụ ugbo tupu nnọkọ ahụ; echepụtala ha.",
      "Weta foto ma ọ bụ ezi ihe atụ nke MLN, cassava mosaic, cassava brown streak (gụnyere mgbọrọgwụ e gbubiri egbubi) na rice blast ma ọ bụrụ na ha dị na mpaghara gị.",
      "Otu ndị ọrụ ugbo kwekọrịtara maka rotation na ihe ịkụ dị ọcha na-ejikwa MLN na nje virus akpụ nke ọma karịa; jiri nnọkọ ahụ malite mkparịta ụka ahụ.",
      "Jiri rubric tụọ akara atụmatụ ịkọ ihe ahụ, ma lelee mgbakọ ọ bụla na onye na-amụ ihe ahụ.",
      "Lọghachi mgbe owuwe gachara ka ị tụnyere ezi mkpụrụ onye ọ bụla na-amụ ihe wetara na ebumnuche dị n'atụmatụ ya."
    ]
  }
};
