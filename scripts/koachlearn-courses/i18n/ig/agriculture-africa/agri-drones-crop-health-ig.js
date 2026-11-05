"use strict";

// Koach Learn course (Igbo translation of agriculture-africa/agri-drones-crop-health.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

const FAO_EO = { name: "FAO GIEWS Earth Observation (NDVI and vegetation indicators)", url: "https://www.fao.org/giews/earthobservation/index.jsp" };
const FAO_FAMEWS = { name: "FAO: mobile application to support the fight against Fall Armyworm in Africa (FAMEWS)", url: "https://www.fao.org/newsroom/detail/FAO-launches-mobile-application-to-support-fight-against-Fall-Armyworm-in-Africa/en" };
const ODM = { name: "OpenDroneMap (free, open-source drone mapping software)", url: "https://www.opendronemap.org/" };
const QGIS = { name: "QGIS (free, open-source GIS)", url: "https://qgis.org/" };

module.exports = {
  id: "agri-drones-crop-health-ig",
  lang: "ig",
  translationOf: "agri-drones-crop-health",
  category: "Agriculture (Africa)",
  name: "Drone maka Nlekọta Ugbo 3: Ahụike Ihe Ọkụkụ, Ụmụ Ahụhụ na Nhazi Data",
  skills: "Ịgụ maapụ ahụike ihe ọkụkụ NDVI, Ịhụ ihe ịrịba ama mbụ nke ụmụ ahụhụ, ọrịa na nsogbu, Ịlele mpaghara nsogbu n'ala, Ijikọ foto drone ka ọ bụrụ maapụ, Ime maapụ index na QGIS, Ide akụkọ ihe a ga-eme n'ugbo",
  outcome: "ịgbanwe foto drone nke otu ugbo ka ọ bụrụ maapụ ahụike ihe ọkụkụ, ịchọta mpaghara nsogbu, ịlele ha n'ala, na ide obere akụkọ ihe a ga-eme nke onye ọrụ ugbo ga-eji.",
  about: [
    "Nke a bụ Ihe ọmụmụ 3 nke usoro nlekọta site na drone, maka ndị ọrụ extension (ndị na-enye ndị ọrụ ugbo ndụmọdụ), ndị ọkachamara ihe ọkụkụ (agronomists), ndị njikwa ugbo na ndị ntorobịa na-enye ọrụ drone na Kenya, Nigeria na n'Afrịka niile. Ị kwesịrị ịma otu esi ese foto drone ndị na-ekpuchi ibe ha (Ihe ọmụmụ 2) ma ọ bụ nwee otu foto ị ga-eji rụọ ọrụ; e nwere data nlele n'efu n'ịntanetị.",
    "Isi 1 na-akụzi ịgụ maapụ ahụike ihe ọkụkụ na ịmata ụdị ihe nsogbu mbụ nke ụmụ ahụhụ, ọrịa, mmiri na nri ala na-eme na ọka, akpụ, agwa, tii na kọfị, na otu esi ekwenye ha n'ala. Isi 2 na-akụzi ijikọ foto ka ọ bụrụ maapụ site na sọftwia n'efu, ime maapụ NDVI na QGIS, na ide akụkọ na-eduga n'omume.",
    "Maapụ drone anaghị anọchi anya onye ọrụ ugbo ma ọ bụ nchọpụta onye ọrụ extension. Ọ na-egosi ebe a ga-ebu ụzọ lee, ka oge na ego dị ụkọ gaa n'ebe kwesịrị ekwesị. Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise na ọrụ omume; e nwere nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe."
  ],
  finalTask: "Jiri maapụ drone nke ezi ugbo ma ọ bụ data nlele n'efu: mee maapụ NDVI ma ọ bụ maapụ agba, kaa akara opekata mpe mpaghara nsogbu atọ, dee atụmatụ ilele n'ala (ihe ị ga-achọ na mpaghara ọ bụla), ma dee akụkọ ihe a ga-eme, otu peeji, nye onye ọrụ ugbo: foto maapụ, ihe a hụrụ ma ọ bụ a na-enyo enyo, nzọụkwụ ọzọ a tụrụ aro maka mpaghara ọ bụla, na onye a ga-akpọ ka o kwenye.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị ọrụ extension, ndị ọkachamara ihe ọkụkụ, ndị njikwa ugbo na ndị ntorobịa na-enye ọrụ drone na Kenya, Nigeria na n'Afrịka niile na-amụ Ihe ọmụmụ 3 nke usoro nlekọta drone, na-arụ ọrụ na ihe ọkụkụ dị ka ọka, akpụ, agwa, tii na kọfị.",
    startingPoint: "Ndị na-amụ ihe nwere ike ịse foto drone ndị na-ekpuchi ibe ha (Ihe ọmụmụ 2) ma ọ bụ nwee data nlele. Ole na ole jikọrọla foto ka ọ bụrụ maapụ, mee maapụ NDVI na QGIS, gụọ ihe nsogbu dị na maapụ maka ụmụ ahụhụ, ọrịa na nsogbu, lelee mpaghara n'ala ma ọ bụ dee akụkọ onye ọrụ ugbo na-eme ihe na ya.",
    gap: "Foto drone na-aba uru naanị mgbe ha ghọrọ maapụ, e jiri ụkwụ lelee mpaghara ndị na-adịghị ike, onye ọrụ ugbo enwetakwa nzọụkwụ ọzọ doro anya. Ọ bụrụ na nke a adịghị, a na-achọpụta nsogbu n'oge, a na-ekpe ọgwụgwọ n'echiche, ego na-efukwa. Ịgbanwe foto ka ọ bụrụ akụkọ ihe a ga-eme nke e lelere na-eziga oge na ego dị ụkọ n'ebe kwesịrị ekwesị.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe; a na-akọwa okwu ọ bụla gbasara maapụ na GIS",
      "Ngwaọrụ: kọmputa nwere ike ịgba QGIS na OpenDroneMap n'efu, na ekwentị nwere GPS maka ilele n'ala",
      "Data: ezi data drone ma ọ bụ data nlele n'efu; nhazi nwere ike iwe otu awa ma ọ bụ karịa",
      "Maapụ drone anaghị anọchi anya onye ọrụ ugbo ma ọ bụ nchọpụta ọkachamara; enweghị ndụmọdụ ọgwụ ahụhụ site na maapụ",
      "A na-ekesa data na maapụ ndị ọrụ ugbo naanị mgbe ha kwere"
    ],
    prerequisites: "\"Drones maka Ilekọta Ugbo 2: Ịkwọ Drone, Ịse Foto na Sensọ\", ma ọ bụ otu foto drone ndị na-ekpuchi ibe ha ị ga-eji rụọ ọrụ."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe e nyere gị maapụ ahụike ihe ọkụkụ NDVI ma ọ bụ maapụ agba", action: "ịgụ legend ma chọta mpaghara na-adịghị ike na nke siri ike", standard: "site n'itụnyere ọdịiche dị n'ime ugbo ahụ na maapụ ndị gara aga" },
    { id: "O2", condition: "Mgbe e nyere gị ihe nsogbu dị na maapụ otu ugbo", action: "ịkọwa ihe ụdị ọ bụla nwere ike igosi, dị ka ụmụ ahụhụ, ọrịa, mmiri, igwe ma ọ bụ nri ala", standard: "na-ewere ụdị ọ bụla dị ka ihe ngosi a ga-ekwenye, ọ bụghị nchọpụta ọrịa" },
    { id: "O3", condition: "Maka mpaghara nsogbu ọ bụla dị na maapụ", action: "ide atụmatụ ilele n'ala ma dekọọ ihe ị hụrụ n'ebe ahụ", standard: "nwere nọmba mpaghara, coordinates, ihe ị hụrụ, ihe nwere ike ịkpata ya, otu i si jide n'aka na foto" },
    { id: "O4", condition: "Mgbe e nyere gị foto drone ndị na-ekpuchi ibe ha", action: "ijikọ ha ka ọ bụrụ orthomosaic site na sọftwia n'efu ma lelee ya maka oghere na ihe na-adịghị nkọ", standard: "e nyela foto ndị ahụ aha, chekwaa ha n'ebe ọzọ, ma lelee ihe pụtara" },
    { id: "O5", condition: "Site n'iji QGIS na orthomosaic multispectral", action: "ịgbakọ ma tinye agba na maapụ NDVI nke na-egosi oke ugbo na ebe e lelere n'ala", standard: "site n'iji usoro (NIR - Red) / (NIR + Red)" },
    { id: "O6", condition: "Mgbe i lelechara n'ala", action: "ide akụkọ ihe a ga-eme n'ugbo, otu peeji, nye onye ọrụ ugbo", standard: "nwere foto maapụ, ihe a hụrụ, nzọụkwụ ọzọ maka mpaghara ọ bụla na onye a ga-akpọ, na-enweghị ndụmọdụ ọgwụ ahụhụ site na maapụ" }
  ],
  chapters: [
    {
      name: "Isi 1: Ịgụ ahụike ihe ọkụkụ",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ịgụ maapụ ahụike ihe ọkụkụ NDVI",
          minutes: 5,
          goal: "Gụọ maapụ NDVI site n'iji ọkwa agba ya ma chọta mpaghara na-adịghị ike na nke siri ike.",
          text: [
            "NDVI (Normalized Difference Vegetation Index) na-atụnyere ìhè near-infrared na ìhè uhie nke osisi na-emeghachi. Ọnụ ọgụgụ ya sị na -1 ruo +1. FAO na-akọwa na ọnụ ọgụgụ dị elu na-egosi osisi juru eju ma dị mma, ebe ọnụ ọgụgụ dị ala ma ọ bụ nke dị n'okpuru 0 na-egosi osisi dị ntakịrị, ala tọgbọrọ chakoo ma ọ bụ mmiri.",
            "Na maapụ NDVI drone, pixel ọ bụla na-enweta agba site n'ọkwa agba, ọtụtụ mgbe uhie maka ọnụ ọgụgụ dị ala ruo akwụkwọ ndụ maka nke dị elu. Gụọ legend mgbe niile: agba ndị ahụ dabere na maapụ ahụ. Ugbo nke dị naanị uhie na mmalite oge ọkụkọ nwere ike ịbụ naanị obere osisi na ala tọgbọrọ chakoo.",
            "Chọọ ọdịiche dị n'ime ugbo ahụ, ọ bụghị naanị agba. Obere ebe dị ala n'ugbo ọka nke dị otu n'ebe ndị ọzọ kwesịrị ileta. Tụnyere ya na maapụ mbụ nke otu ugbo ahụ: ebe na-eto kwa izu dị mkpa karịa nke na-anọ otu ebe."
          ],
          steps: ["Gụọ legend: kedu agba dị ala, kedu nke dị elu?", "Dee ihe ọkụkụ na ọkwa uto ya: ihe ọkụkụ na-eto eto na-egosi ala karịa.", "Chọọ ebe dị iche na ugbo ndị ọzọ.", "Tụnyere ya na maapụ mbụ: ebe ahụ ọ bụ ọhụrụ ka ọ na-eto?", "Kaa akara mpaghara ị ga-eleta."],
          words: [["NDVI", "index osisi sị na -1 ruo +1; ọnụ ọgụgụ dị elu na-apụtakarị osisi akwụkwọ ndụ juru eju ma dị mma."], ["Legend", "igodo na-egosi ihe agba ọ bụla dị na maapụ pụtara."], ["Ọkwa uto (growth stage)", "otu ihe ọkụkụ si too, site na mkpụrụ pụtara ọhụrụ ruo owuwe ihe ubi."]],
          slides: [
            { title: "NDVI n'otu ahịrị", bullets: ["Na-atụnyere ìhè near-infrared na ìhè uhie", "Sị na -1 ruo +1", "Elu = osisi akwụkwọ ndụ juru eju; ala = osisi dị ntakịrị, ala ma ọ bụ mmiri"] },
            { title: "Buru ụzọ gụọ legend", bullets: ["Agba dabere na maapụ ahụ", "Ihe ọkụkụ na-eto eto na-egosi ala karịa"] },
            { title: "Chọọ ọdịiche", bullets: ["Ebe dị iche na ndị ọzọ", "Ebe ọhụrụ ma ọ bụ na-eto kacha mkpa", "Kaa akara mpaghara ị ga-eleta"] }
          ],
          sources: [FAO_EO],
          tryIt: "Chọta maapụ NDVI nlele n'ịntanetị (chọọ maapụ NDVI nke ugbo ọka) ma ọ bụ jiri nke gị. Gụọ legend, kaa akara mpaghara abụọ na-adịghị ike na otu siri ike, ma dee ọkwa uto ihe ọkụkụ ahụ nwere ike ịnọ.",
          youCanNow: "ịgụ legend maapụ NDVI ma chọta mpaghara na-adịghị ike na nke siri ike kwesịrị ileta.",
          quickCheck: [
            { objective: "O1", q: "Gịnị ka ọnụ ọgụgụ NDVI dị elu na-egosi?", options: ["Ala tọgbọrọ chakoo", "Mmiri", "Drone mebiri emebi", "Osisi juru eju ma dị mma"], answer: 3, why: "Ọnụ ọgụgụ NDVI dị elu na-egosi osisi juru eju ma dị mma; ọnụ ọgụgụ dị ala na-egosi osisi dị ntakịrị, ala ma ọ bụ mmiri." },
            { objective: "O1", q: "Ugbo ọka dị otu akwụkwọ ndụ ma e wezụga otu ebe dị ala. Gịnị ka ị ga-eme?", options: ["Kaa akara ebe ahụ ka i leta ya ma tụnyere ya na maapụ mbụ", "Leghara ya anya n'ihi na ọtụtụ ugbo ahụ dị akwụkwọ ndụ", "Gbaa ugbo ahụ niile ọgwụ", "Hichapụ maapụ ahụ"], answer: 0, why: "Ebe dị ala n'ugbo nke dị otu n'ebe ndị ọzọ kwesịrị ileta, maapụ mbụ na-egosikwa ma ọ na-eto." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ịhụ ihe ịrịba ama mbụ nke ụmụ ahụhụ, ọrịa na nsogbu",
          minutes: 6,
          goal: "Mata ụdị ihe dị na maapụ na-egosi ụmụ ahụhụ, ọrịa, mmiri ma ọ bụ nsogbu nri ala.",
          text: [
            "Nsogbu dị iche iche na-ahapụ ọdịdị dị iche na maapụ. Ebe na-amalite obere ma na-agbasa n'izu ole na ole nwere ike igosi ụmụ ahụhụ ma ọ bụ ọrịa, dị ka fall armyworm na ọka ma ọ bụ ọrịa virus na akpụ. Nsogbu dị n'otu akụkụ nwere ike isi n'ugbo onye agbata obi, okporo ụzọ ma ọ bụ ifufe. Ahịrị kwụ ọtọ na-esokarị ndị mmadụ ma ọ bụ igwe: ahịrị fatịlaịza a hapụrụ, ọkpọkọ mmiri e gbochiri, ma ọ bụ nsogbu igwe ịkụ mkpụrụ.",
            "Akụkụ dị ala ma dị mmiri mmiri na-egosi mmiri jupụtara n'ala; ala dị elu, nwere ájá ma ọ bụ dị ndịda na-egosi ụkọ mmiri, karịsịa na foto thermal (okpomọkụ) n'ehihie. Ịcha odo n'otu ụdị n'ugbo niile nwere ike igosi ụkọ nri ala dị ka nitrogen, mana ọ nwekwara ike ịbụ ụkọ mmiri ozuzo.",
            "Ụdị ihe a hụrụ bụ ihe ngosi, ọ bụghị nchọpụta ọrịa. Ọrịa na ụmụ ahụhụ yiri ibe ha site n'elu, ọgwụgwọ ha dịkwa iche nke ukwuu. Ebe a na-eji app FAMEWS nke FAO, a pụrụ iji ya dekọọ ebe a hụrụ fall armyworm; kwenye ahụhụ ma ọ bụ ọrịa ọ bụla a na-enyo enyo na onye ọrụ extension ma ọ bụ plant clinic tupu i mee ihe."
          ],
          words: [["Ụdị ihe nsogbu (pattern)", "ọdịdị na mgbasa nsogbu na maapụ: ebe, akụkụ, ahịrị, ebe dị ala."], ["Fall armyworm", "ikpuru ahụhụ na-eri ọka na ihe ọkụkụ ndị ọzọ; ọ gbasara n'Afrịka niile site na 2016."], ["Plant clinic", "ebe ndị a zụrụ azụ na-achọpụta nsogbu osisi ndị ọrụ ugbo wetara."]],
          slides: [
            { title: "Ọdịdị na-akọ akụkọ", bullets: ["Ebe na-agbasa: ụmụ ahụhụ ma ọ bụ ọrịa?", "Otu akụkụ: onye agbata obi, okporo ụzọ ma ọ bụ ifufe?", "Ahịrị kwụ ọtọ: igwe, fatịlaịza ma ọ bụ mmiri ịgba ugbo"] },
            { title: "Mmiri na nri ala", bullets: ["Ebe dị ala, dị mmiri mmiri: mmiri jupụtara", "Ala dị elu, nwere ájá: ụkọ mmiri", "Ịcha odo n'otu ụdị: nri ala ma ọ bụ ụkọ mmiri ozuzo"] },
            { title: "Ihe ngosi, ọ bụghị nchọpụta", bullets: ["Ụmụ ahụhụ na ọrịa yiri ibe ha site n'elu", "Ọgwụgwọ ha dị iche nke ukwuu", "Kwenye ya na extension ma ọ bụ plant clinic"] }
          ],
          sources: [FAO_FAMEWS],
          tryIt: "See obere foto anọ nke ugbo: otu nwere ebe na-agbasa, otu nwere nsogbu n'otu akụkụ, otu nwere ahịrị, otu nwere akụkụ dị ala ma dị mmiri mmiri. N'okpuru nke ọ bụla, dee ihe abụọ nwere ike ịkpata ya.",
          youCanNow: "ịmata ụdị nsogbu a na-ahụkarị na maapụ ihe ọkụkụ ma depụta ihe nwere ike ịkpata ha a ga-elele.",
          quickCheck: [
            { objective: "O2", q: "Gịnị ka ebe na-amalite obere ma na-agbasa n'izu ole na ole nwere ike igosi?", options: ["Nsogbu igwe ịkụ mkpụrụ", "Ụmụ ahụhụ ma ọ bụ ọrịa", "Okporo ụzọ", "Naanị ọwa mmiri e gbochiri"], answer: 1, why: "Ebe na-agbasa n'izu ole na ole nwere ike igosi ụmụ ahụhụ ma ọ bụ ọrịa dị ka fall armyworm ma ọ bụ virus akpụ." },
            { objective: "O2", q: "Maapụ ahụ na-egosi ihe ọkụkụ na-adịghị ike n'akụkụ ugbo dị elu ma nwee ájá n'ehihie okpomọkụ. Gịnị ka ị ga-ebu ụzọ enyo?", options: ["Mmiri jupụtara n'ala", "Fatịlaịza karịrị akarị", "Ụkọ mmiri", "Ahịrị ịkụ mkpụrụ a hapụrụ"], answer: 2, why: "Ala dị elu, nwere ájá ma ọ bụ dị ndịda na-egosikarị ụkọ mmiri, karịsịa na foto thermal n'ehihie." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ilele n'ala: iji ụkwụ lelee mpaghara ndị ahụ",
          minutes: 5,
          goal: "Leta mpaghara nsogbu ọ bụla nwere atụmatụ ma dekọọ ihe ị hụrụ.",
          text: [
            "Ilele n'ala (ground-truthing) pụtara ịga n'ebe ahụ kpọmkwem dị na maapụ ma lelee ihe dị n'ezie n'ebe ahụ. Tinye maapụ ahụ n'ekwentị gị nwere GPS (ọtụtụ app maapụ na GIS n'efu nwere ike igosi ebe ị nọ na maapụ drone), ma ọ bụ dee coordinates nke mpaghara ọ bụla.",
            "Na mpaghara ọ bụla, lee osisi, akwụkwọ (n'elu na n'okpuru), okporo osisi na mgbọrọgwụ, ala na mmiri dị n'ime ya, na ụmụ ahụhụ. Tụnyere ha na osisi dị mma dị mita ole na ole n'ebe ahụ, na mpaghara siri ike. See foto doro anya ma dee obere ndetu.",
            "Dekọọ ihe ị hụrụ n'otu ụzọ ahụ mgbe niile: nọmba mpaghara, coordinates, ihe ọkụkụ na ọkwa uto, ihe ị hụrụ, ihe nwere ike ịkpata ya, otu i si jide n'aka, na nọmba foto. Ezigbo ndekọ na-eme ka maapụ ọzọ dị mfe ịgụ, ma na-enyere ọkachamara na-ekwenye ihe kpatara ya aka."
          ],
          steps: ["Nye mpaghara ọ bụla nọmba ma dee coordinates ya.", "Jee ije ruo ya site n'iji maapụ GPS n'ekwentị gị.", "Lelee osisi, akwụkwọ, okporo osisi, mgbọrọgwụ, ala, mmiri na ụmụ ahụhụ.", "Tụnyere ya na ebe dị mma dị nso.", "Dekọọ mpaghara, coordinates, ihe ị hụrụ, ihe nwere ike ịkpata ya, otu i si jide n'aka, nọmba foto."],
          words: [["Ilele n'ala (ground-truthing)", "ilele n'ala ihe maapụ ma ọ bụ foto na-egosi."], ["Coordinates", "nọmba latitude na longitude na-egosi ebe kpọmkwem."]],
          slides: [
            { title: "Gaa n'ebe ahụ kpọmkwem", bullets: ["Maapụ nwere GPS n'ekwentị gị", "Ma ọ bụ dee coordinates nke mpaghara ọ bụla"] },
            { title: "Lee anya nke ọma", bullets: ["Akwụkwọ n'elu na n'okpuru, okporo osisi, mgbọrọgwụ", "Ala na mmiri, ụmụ ahụhụ", "Tụnyere ya na ebe dị mma dị nso"] },
            { title: "Dekọọ n'otu ụzọ mgbe niile", bullets: ["Mpaghara, coordinates, ihe ọkụkụ na ọkwa uto", "Ihe ị hụrụ, ihe nwere ike ịkpata ya, otu i si jide n'aka", "Nọmba foto"] }
          ],
          tryIt: "Mee fọm ilele n'ala (n'akwụkwọ ma ọ bụ na spreadsheet n'ekwentị) nwere kọlụm ndị a: mpaghara, coordinates, ihe ọkụkụ na ọkwa uto, ihe m hụrụ, ihe nwere ike ịkpata ya, otu m si jide n'aka, foto. Dejupụta otu ahịrị maka mpaghara n'ezie ma ọ bụ ọmụmaatụ.",
          youCanNow: "ịhazi ma mee nleta ilele n'ala ma dekọọ ihe ị hụrụ na fọm doro anya.",
          quickCheck: [
            { objective: "O3", q: "Kedu otu ị ga-esi chọta ebe kpọmkwem mpaghara dị na maapụ mgbe ị nọ n'ugbo?", options: ["Kpee site n'agba ihe ọkụkụ", "Jụọ onye agbata obi", "Tinye maapụ ahụ n'ekwentị nwere GPS, ma ọ bụ dee coordinates nke mpaghara ahụ", "Jee ije ruo mgbe osisi dị njọ"], answer: 2, why: "Ekwentị na-egosi ebe ị nọ na maapụ drone, ma ọ bụ coordinates nke mpaghara ahụ, na-eduru gị n'ebe ahụ kpọmkwem." },
            { objective: "O3", q: "I rutere mpaghara 2 ma hụ ọka na-akpọnwụ. Gịnị ka ị ga-edekọ?", options: ["Naanị \"osisi ọjọọ\"", "Ọ dịghị ihe; ị ga-echeta", "Foto na-enweghị ndetu", "Nọmba mpaghara, coordinates, ọkwa uto, ihe ị hụrụ, ihe nwere ike ịkpata ya, otu i si jide n'aka na nọmba foto"], answer: 3, why: "Idekọ otu ihe ndị ahụ mgbe niile na-eme ka ndekọ dị mfe ịtụnyere ma na-enyere ọkachamara aka ikwenye ihe kpatara ya." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ịgụ ahụike ihe ọkụkụ",
        questions: [
          { objective: "O1", q: "Maapụ NDVI nke otu ugbo dị ọtụtụ uhie na mmalite oge ọkụkọ. Ihe kachasị nwee ike ịkpata ya bụ:", options: ["Drone ahụ mebiri emebi", "Obere osisi na ọtụtụ ala tọgbọrọ chakoo", "Ihe niile anwụọla", "Mmiri zoro"], answer: 1, why: "Ihe ọkụkụ na-eto eto na-ekpuchi obere ala, ya mere ala na-eme ka ọnụ ọgụgụ dị ala." },
          { objective: "O1", q: "Kedu ebe ị ga-ebu ụzọ leta?", options: ["Ebe dị ka o si dị n'ọnwa gara aga", "Ebe akwụkwọ ndụ kacha sie ike", "Ebe dị ala nke tolitere kemgbe maapụ ikpeazụ", "Oke ugbo nwere ahịhịa"], answer: 2, why: "Ebe na-eto na-egosi nsogbu na-arụ ọrụ ma na-agbasa." },
          { objective: "O2", q: "Ahịrị kwụ ọtọ nke ihe ọkụkụ na-adịghị ike n'ugbo na-egosikarị:", options: ["Igwe, fatịlaịza ma ọ bụ ọkpọkọ mmiri ịgba ugbo", "Virus na-agbasa site n'otu osisi", "Ifufe si n'otu akụkụ", "Ọ dịghị ihe"], answer: 0, why: "Ahịrị kwụ ọtọ na-eso otu ndị mmadụ na igwe si arụ ọrụ n'ugbo." },
          { objective: "O2", q: "Maapụ drone na-egosi nke ọma na e nwere ọrịa. Tupu ị gbaa ọgwụ, ị kwesịrị:", options: ["Ịgba ọgwụ kacha sie ike", "Itinye maapụ ahụ n'ịntanetị", "Ịgba ugbo niile ọgwụ", "Ikwenye ihe kpatara ya na onye ọrụ extension ma ọ bụ plant clinic"], answer: 3, why: "Ụmụ ahụhụ na ọrịa yiri ibe ha site n'elu, ha chọkwara ọgwụgwọ dị iche." },
          { objective: "O3", q: "Gịnị mere ị ga-eji tụnyere mpaghara na-adịghị ike na osisi dị mma dị mita ole na ole n'ebe ahụ?", options: ["Ịhụ ihe dị iche", "Ichekwa batrị", "N'ihi na iwu kwuru ya", "Ịchọta ebe ekwentị na-ejide nke ọma"], answer: 0, why: "Itụnyere ha n'akụkụ ibe ha na-egosi ihe na-adịghị mma n'osisi ndị na-adịghị ike." }
        ]
      }
    },
    {
      name: "Isi 2: Ịhazi data drone",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ijikọ foto ka ọ bụrụ maapụ",
          minutes: 6,
          goal: "Gbanwee foto drone ndị na-ekpuchi ibe ha ka ọ bụrụ otu maapụ orthomosaic.",
          text: [
            "Sọftwia ijikọ foto na-achọta ihe ndị foto na-ekpuchi ibe ha nwekọrọ, na-achọpụta ebe e sere nke ọ bụla, ma na-ewu otu foto ziri ezi dị ka maapụ a na-akpọ orthomosaic. O nwekwara ike ime elevation model (ogo ala na ihe ọkụkụ).",
            "E nwere nhọrọ n'efu. OpenDroneMap bụ sọftwia n'efu, open-source, ihe nhazi ya WebODM na-ekwe ka i bulite foto na web browser na kọmputa nke gị. E nwekwara ọrụ cloud a na-akwụ ụgwọ na app nke ụlọ ọrụ mere drone ahụ; lelee ọnụ ahịa ha ugbu a na ebe ha na-echekwa data gị.",
            "Nhazi chọrọ kọmputa siri ike nke ọma na oge: narị foto ole na ole nwere ike iwe otu awa ma ọ bụ karịa. Detuo foto ndị ahụ site na drone gaa na folda nwere aha ugbo, mpaghara ugbo na ụbọchị, chekwaa ha n'ebe ọzọ, wee hazie ha. Lelee ihe pụtara: oghere, ebe na-adịghị nkọ ma ọ bụ ahịrị gbagọrọ agbagọ pụtara na ikpuchi ibe ha ma ọ bụ foto ndị ahụ adịghị mma."
          ],
          steps: ["Detuo foto gaa na folda aha ya bụ ugbo_mpaghara_ụbọchị (dịka ọmụmaatụ Kitale_Block3_2026-11-04).", "Chekwaa folda ahụ n'ebe ọzọ.", "Meghee sọftwia ijikọ foto ma mepụta ọrụ ọhụrụ.", "Tinye foto ndị ahụ ma malite nhazi.", "Lelee orthomosaic maka oghere, ihe na-adịghị nkọ na ahịrị gbagọrọ agbagọ.", "Bupụta ya dị ka GeoTIFF (foto maapụ nwere ebe ọ dị n'ime ya)."],
          words: [["Orthomosaic", "otu nnukwu foto ziri ezi dị ka maapụ, e jikọrọ site n'ọtụtụ foto na-ekpuchi ibe ha."], ["GeoTIFF", "faịlụ foto na-ebu ebe ọ dị n'ụwa, ka sọftwia maapụ wee tinye ya n'ebe ziri ezi."], ["Elevation model", "maapụ ogo ala ma ọ bụ elu ihe ọkụkụ."]],
          slides: [
            { title: "Foto ka ọ bụrụ maapụ", bullets: ["Sọftwia na-achọta ihe foto na-ekpuchi ibe ha nwekọrọ", "Na-ewu otu orthomosaic", "Nwekwara ike ime elevation model"] },
            { title: "Ngwa n'efu na nke a na-akwụ ụgwọ", bullets: ["OpenDroneMap / WebODM: n'efu, open source", "Ọrụ cloud a na-akwụ ụgwọ na app ndị mere drone", "Lelee ọnụ ahịa na ebe a na-echekwa data gị"] },
            { title: "Ezigbo omume", bullets: ["Folda aha ya bụ ugbo_mpaghara_ụbọchị", "Chekwaa ya n'ebe ọzọ tupu nhazi", "Lelee maka oghere, ihe na-adịghị nkọ, ahịrị gbagọrọ agbagọ", "Bupụta ya dị ka GeoTIFF"] }
          ],
          sources: [ODM],
          tryIt: "Budata data drone nlele n'efu (OpenDroneMap nwere njikọ gaa na data nlele) ma ọ bụ jiri foto nke gị. Nye folda ahụ aha ma chekwaa ya n'ebe ọzọ, ma ọ bụrụ na kọmputa gị nwere ike, hazie ya ka ọ bụrụ orthomosaic. Ọ bụrụ na ọ nweghị ike, dee nzọụkwụ ọ bụla ị ga-agbaso.",
          youCanNow: "ịhazi foto drone ma jikọọ ha ka ọ bụrụ maapụ orthomosaic site na sọftwia n'efu.",
          quickCheck: [
            { objective: "O4", q: "E wezụga orthomosaic, gịnị ọzọ ka sọftwia ijikọ foto nwere ike ime?", options: ["Elevation model nke ogo ala na ihe ọkụkụ", "Akara ọgwụ ahụhụ", "Amụma ihu igwe", "Nnwale ala"], answer: 0, why: "Sọftwia ijikọ foto nwekwara ike ime elevation model na-egosi ogo ala na ihe ọkụkụ." },
            { objective: "O4", q: "Ị kwatara drone ugbu a nwere foto 400. Gịnị ka ị ga-eme tupu nhazi?", options: ["Hichapụ ndị na-adịghị nkọ naanị na drone", "Detuo ha gaa na folda nwere aha ugbo, mpaghara ugbo na ụbọchị, ma chekwaa ha n'ebe ọzọ", "Hazie ha ozugbo site na kaadị drone", "Zigara onye ọrụ ugbo ha n'email"], answer: 1, why: "Inye folda aha na ichekwa foto n'ebe ọzọ tupu nhazi na-echebe data ahụ." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ime maapụ NDVI na QGIS",
          minutes: 6,
          goal: "Gbakọọ ma tinye agba na maapụ NDVI site na orthomosaic multispectral na QGIS.",
          text: [
            "QGIS bụ sọftwia GIS n'efu, open-source, nke gọọmentị, mahadum na NGO na-eji n'Afrịka niile. O nwere ike imeghe GeoTIFF gị ma gbakọọ ihe na bands ya.",
            "Ọ bụrụ na orthomosaic gị nwere band uhie na band near-infrared, jiri Raster Calculator gbakọọ NDVI = (NIR - Red) / (NIR + Red). Wee tinye agba na ihe pụtara site na colour ramp (dịka ọmụmaatụ uhie ruo akwụkwọ ndụ) ma setịpụ oke ya ka ọdịiche dị n'ugbo pụta ìhè.",
            "Ọ bụ naanị igwefoto agba ka ị nwere? Ị ka nwere ike ime index akwụkwọ ndụ siri ike site na band uhie, akwụkwọ ndụ na anụnụ anụnụ, mana a pụghị ịtụkwasị ya obi dị ka NDVI; were ya naanị dị ka ntụzịaka. Tinye oke ugbo na ebe i lelere n'ala dị ka layers ka maapụ ahụ gosi ebe mpaghara ndị ahụ dị kpọmkwem."
          ],
          steps: ["Meghee QGIS ma tinye GeoTIFF orthomosaic gị.", "Lelee kedu band bụ uhie na kedu bụ near-infrared.", "Meghee Raster Calculator ma dee (NIR - Red) / (NIR + Red) site n'iji bands ndị ahụ.", "Tinye agba na layer ọhụrụ ahụ site na colour ramp uhie ruo akwụkwọ ndụ.", "Tinye oke ugbo na ebe i lelere n'ala.", "Bupụta foto maapụ ahụ maka akụkọ gị."],
          words: [["GIS", "geographic information system: sọftwia maka ime na inyocha maapụ."], ["Band", "otu layer ìhè dị na foto, dị ka uhie, akwụkwọ ndụ, anụnụ anụnụ ma ọ bụ near-infrared."], ["Raster", "foto e ji pixel mee, nke ọ bụla nwere ọnụ ọgụgụ, dị ka maapụ drone."], ["Layer", "otu data maapụ, dị ka oke ugbo ma ọ bụ ebe a kara akara, e gosiri n'elu ndị ọzọ."]],
          slides: [
            { title: "QGIS", bullets: ["GIS n'efu, open-source", "Na-emeghe GeoTIFF gị", "Na-agbakọ ihe na bands foto"] },
            { title: "Usoro NDVI", bullets: ["NDVI = (NIR - Red) / (NIR + Red)", "Jiri Raster Calculator", "Tinye agba uhie ruo akwụkwọ ndụ"] },
            { title: "Naanị igwefoto agba?", bullets: ["Index akwụkwọ ndụ siri ike site na bands RGB", "A pụghị ịtụkwasị ya obi dị ka NDVI: naanị ntụzịaka"] },
            { title: "Mechaa maapụ ahụ", bullets: ["Tinye oke ugbo na ebe mpaghara dị", "Bupụta foto maka akụkọ"] }
          ],
          sources: [QGIS, FAO_EO],
          tryIt: "Wụnye QGIS (n'efu) ma meghee orthomosaic gị ma ọ bụ foto multispectral nlele. Gbakọọ NDVI site na Raster Calculator, tinye ya agba, ma kaa akara mpaghara atọ dị ka ebe (points).",
          youCanNow: "ime maapụ NDVI nwere agba na QGIS ma tinye mpaghara na oke ugbo na ya.",
          quickCheck: [
            { objective: "O5", q: "Gịnị ka Raster Calculator nke QGIS nwere ike ime?", options: ["Ijikọ foto", "Ịfe drone", "Iziga akụkọ", "Ịgbakọ ihe na bands foto, dị ka ịgbakọ NDVI"], answer: 3, why: "Raster Calculator na-agbakọ ihe na bands, dị ka (NIR - Red) / (NIR + Red)." },
            { objective: "O5", q: "Maapụ NDVI gị dị naanị otu agba. Gịnị ka ị ga-agbanwe?", options: ["Fee drone ọzọ n'abalị", "Hichapụ band near-infrared", "Setịpụ oke colour ramp ka ọdịiche dị n'ugbo pụta ìhè", "Jiri ugbo ọzọ"], answer: 2, why: "Itinye agba site na colour ramp na isetịpụ oke ya na-eme ka ọdịiche dị n'ime ugbo pụta ìhè." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ide akụkọ ihe a ga-eme n'ugbo",
          minutes: 5,
          goal: "Dee akụkọ otu peeji na-agwa onye ọrụ ugbo ihe a hụrụ na ihe ọ ga-eme ọzọ.",
          text: [
            "Naanị maapụ anaghị enyere onye ọrụ ugbo na-arụsi ọrụ ike aka. Obere akụkọ na-eme ka ọ ghọọ omume. Mee ka ọ bụrụ otu peeji, n'okwu dị mfe, n'asụsụ onye ọrụ ugbo ahụ kacha mma. Ọtụtụ ndị ọrụ ugbo ga-agụ ya na smartphone nkịtị, ya mere foto na ahịrị ole na ole ka mma karịa akwụkwọ ogologo.",
            "Tinye: ugbo, mpaghara ugbo, ụbọchị na ọkwa uto ihe ọkụkụ; foto maapụ nwere mpaghara e nyere nọmba; maka mpaghara ọ bụla, ihe ị hụrụ n'ala, ihe nwere ike ịkpata ya na otu i si jide n'aka; nzọụkwụ ọzọ (dịka ọmụmaatụ: kụgharịa ebe tọgbọrọ chakoo, kpochapụ ọwa mmiri, rịọ plant clinic ka o kwenye ọrịa, lelee ọkpọkọ mmiri ịgba ugbo); na onye a ga-akpọ.",
            "Atụla aro ọgwụ ahụhụ ma ọ bụ ọnụ ọgụgụ ọgwụ (dose) site na maapụ drone mgbe ọ bụla. Duzie onye ọrụ ugbo gaa n'aka onye ọrụ extension, agrovet ma ọ bụ plant clinic maka ndụmọdụ ọgwụ ọ bụla, na akara (label) ọgwụ maka iji ya n'enweghị nsogbu. Kwekọrịta mgbe a ga-efe drone ọzọ ka a hụ ma ihe e mere rụrụ ọrụ."
          ],
          steps: ["Isi akụkọ: ugbo, mpaghara ugbo, ụbọchị, ihe ọkụkụ na ọkwa uto.", "Foto maapụ nwere mpaghara e nyere nọmba.", "Maka mpaghara ọ bụla: ihe ị hụrụ, ihe nwere ike ịkpata ya, otu i si jide n'aka.", "Nzọụkwụ ọzọ maka mpaghara ọ bụla na onye a ga-akpọ.", "Ụbọchị a ga-efe drone ọzọ ka a lelee ihe pụtara."],
          words: [["Akụkọ ihe a ga-eme (action report)", "obere akụkọ na-ekwu ihe a hụrụ na ihe a ga-eme."], ["Agrovet", "ụlọ ahịa na-ere ihe a na-eji arụ ọrụ ugbo dị ka mkpụrụ, fatịlaịza na ọgwụ anụmanụ, na-enyekarịkwa ndụmọdụ."]],
          slides: [
            { title: "Naanị maapụ ezughị", bullets: ["Otu peeji, okwu dị mfe", "Asụsụ onye ọrụ ugbo kacha mma", "Foto na ahịrị ole na ole"] },
            { title: "Ihe a ga-etinye", bullets: ["Ugbo, mpaghara ugbo, ụbọchị, ọkwa uto", "Maapụ nwere mpaghara e nyere nọmba", "Ihe a hụrụ, ihe nwere ike ịkpata ya, otu i si jide n'aka, nzọụkwụ ọzọ"] },
            { title: "Nọrọ n'udo ma kwuo eziokwu", bullets: ["Enweghị ọgwụ ahụhụ ma ọ bụ dose site na maapụ", "Zipu ya na extension, agrovet ma ọ bụ plant clinic", "Kwekọrịta mgbe a ga-efe ọzọ"] }
          ],
          tryIt: "Ọrụ ikpeazụ: jiri maapụ gị na fọm ilele n'ala gị dee akụkọ ihe a ga-eme, otu peeji, nye onye ọrụ ugbo: isi akụkọ, foto maapụ nwere opekata mpe mpaghara atọ e nyere nọmba, ihe a hụrụ na ihe nwere ike ịkpata ya maka nke ọ bụla, nzọụkwụ ọzọ, ndị a ga-akpọ na ụbọchị a ga-efe ọzọ.",
          youCanNow: "ịgbanwe data drone ka ọ bụrụ akụkọ ihe a ga-eme, otu peeji, doro anya, nke onye ọrụ ugbo ga-eji.",
          quickCheck: [
            { objective: "O6", q: "Ole ka akụkọ ihe a ga-eme n'ugbo kwesịrị ịdị ogologo?", options: ["Peeji iri", "Otu peeji", "Naanị maapụ na-enweghị okwu", "Ogologo dị ka o kwere mee"], answer: 1, why: "Akụkọ otu peeji n'okwu dị mfe, nwere maapụ na nzọụkwụ ọzọ, bụ ihe onye ọrụ ugbo na-arụsi ọrụ ike nwere ike iji." },
            { objective: "O6", q: "Maapụ gị na ilele n'ala na-egosi ọrịa na mpaghara 3. Kedu nzọụkwụ ọzọ ị ga-ede?", options: ["Rịọ plant clinic ma ọ bụ onye ọrụ extension ka o kwenye ọrịa ahụ", "Gbaa fungicide siri ike na dose okpukpu abụọ", "Hopụ ugbo niile", "Chere otu afọ"], answer: 0, why: "Atụla aro ọgwụ ahụhụ ma ọ bụ dose site na maapụ; buru ụzọ zipu onye ọrụ ugbo n'aka ọkachamara ka o kwenye." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Ịhazi data drone",
        questions: [
          { objective: "O4", q: "Gịnị bụ orthomosaic?", options: ["Otu foto", "Ụdị drone", "Otu foto ziri ezi dị ka maapụ, e jikọrọ site n'ọtụtụ foto", "Ahụhụ"], answer: 2, why: "Sọftwia ijikọ foto na-ewu otu maapụ site na foto ndị na-ekpuchi ibe ha." },
          { objective: "O4", q: "Maapụ i jikọrọ nwere oghere na ahịrị gbagọrọ agbagọ. Ihe kachasị nwee ike ịkpata ya bụ:", options: ["Foto ekpuchighị ibe ha nke ọma ma ọ bụ foto adịghị mma", "Batrị karịrị akarị", "Ekwentị onye ọrụ ugbo", "Anyanwụ karịrị akarị na ihuenyo"], answer: 0, why: "Ijikọ foto chọrọ ọtụtụ foto doro anya na-ekpuchi ibe ha." },
          { objective: "O5", q: "Kedu nke bụ usoro NDVI?", options: ["(Red + Blue) / 2", "NIR x Red", "Green - Blue", "(NIR - Red) / (NIR + Red)"], answer: 3, why: "NDVI na-atụnyere ìhè near-infrared na ìhè uhie." },
          { objective: "O5", q: "Gịnị bụ QGIS?", options: ["Drone a na-akwụ ụgwọ", "Sọftwia GIS n'efu, open-source, maka maapụ", "Ọgwụ ahụhụ", "Netwọk ekwentị"], answer: 1, why: "QGIS bụ sọftwia n'efu e ji eme ma nyochaa maapụ." },
          { objective: "O6", q: "N'akụkọ gị, onye ọrụ ugbo jụrụ ọgwụ ahụhụ ọ ga-agba na mpaghara 2. Ị kwesịrị:", options: ["Ịkpe otu site na maapụ", "Iziga ya n'aka onye ọrụ extension, agrovet ma ọ bụ plant clinic na akara ọgwụ", "Ịgwa ya ka ọ gbaa okpukpu abụọ", "Ịghara ikwu ihe ọ bụla"], answer: 1, why: "Ndụmọdụ ọgwụ chọrọ nchọpụta e kwenyere na ndụmọdụ onye tozuru etozu." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Drone maka Nlekọta Ugbo 3: Ahụike Ihe Ọkụkụ, Ụmụ Ahụhụ na Nhazi Data",
    questions: [
      { objective: "O1", q: "Ọnụ ọgụgụ NDVI sị na:", options: ["-100 ruo 0", "-1 ruo +1", "0 ruo 100", "1 ruo 10"], answer: 1, why: "NDVI bụ ọnụọgụ dị n'etiti -1 na +1." },
      { objective: "O1", q: "Na maapụ NDVI, ihe mbụ ị ga-agụ bụ:", options: ["Nha faịlụ", "Legend", "Aha drone", "Ihu igwe"], answer: 1, why: "Legend na-ekwu agba ndị pụtara ọnụ ọgụgụ dị ala na nke dị elu." },
      { objective: "O1", q: "Otu ebe anọwo otu ebe na maapụ atọ. Ebe ọhụrụ na-agbasa. Kedu nke kacha mkpa?", options: ["Ebe ochie ahụ", "Ọ dịghị nke ọ bụla", "Ebe na-agbasa", "Ha abụọ dị mkpa otu"], answer: 2, why: "Ebe na-agbasa na-egosi nsogbu na-arụ ọrụ." },
      { objective: "O2", q: "Ihe ọkụkụ na-adịghị ike n'otu akụkụ dị n'akụkụ ugbo onye agbata obi nwere ike isi na:", options: ["Foto karịrị akarị na-ekpuchi ibe ha", "Legend", "Batrị drone", "Ụmụ ahụhụ ma ọ bụ ọgwụ ifufe bufere site n'akụkụ ahụ"], answer: 3, why: "Nsogbu dị n'akụkụ na-egosikarị ihe si n'èzí ugbo ahụ." },
      { objective: "O2", q: "Ebe dị ala, dị mmiri mmiri nwere ihe ọkụkụ na-adịghị ike na-egosikarị:", options: ["Mmiri jupụtara n'ala", "Anyanwụ karịrị akarị", "Ezigbo owuwe ihe ubi", "Igwefoto mebiri emebi"], answer: 0, why: "Mmiri na-agbakọ n'ebe dị ala ma na-emerụ mgbọrọgwụ." },
      { objective: "O2", q: "Ụdị ihe nsogbu dị na maapụ drone bụ:", options: ["Nchọpụta ikpeazụ", "Ihe ngosi chọrọ ilele n'ala", "Ahụhụ mgbe niile", "Ọrịa mgbe niile"], answer: 1, why: "Ụdị ihe ndị a na-egosi ebe a ga-elele; ilele n'ala na-achọta ihe kpatara ya." },
      { objective: "O2", q: "E mere app FAMEWS nke FAO ka e jiri ya dekọọ:", options: ["Mmiri ozuzo", "Ọnụ ahịa n'ahịa", "Ebe a hụrụ fall armyworm", "Ụgbọ drone fere"], answer: 2, why: "FAMEWS bụ usoro FAO maka nlekọta na ịdọ aka na ntị n'oge banyere fall armyworm." },
      { objective: "O3", q: "Ilele n'ala (ground-truthing) pụtara:", options: ["Ife drone n'ala karịa", "Ịzụta sọftwia ọhụrụ", "Ihicha lenz", "Ilele n'ala ihe maapụ na-egosi"], answer: 3, why: "Ị na-eleta ebe ahụ ka ị hụ ihe dị n'ezie n'ebe ahụ." },
      { objective: "O3", q: "N'oge ilele n'ala, ị kwesịrị ilele:", options: ["Akwụkwọ n'elu na n'okpuru, okporo osisi, mgbọrọgwụ, ala na ụmụ ahụhụ", "Naanị elu otu akwụkwọ", "Naanị mbara igwe", "Naanị drone"], answer: 0, why: "Ilele zuru oke na-achọta ụmụ ahụhụ, ọrịa na nsogbu ala." },
      { objective: "O3", q: "Gịnị mere ị ga-eji dekọọ ihe ị hụrụ n'otu ụzọ mgbe niile?", options: ["Drone chọrọ ya", "Ọ na-eme ka ndekọ dị mfe ịtụnyere ma na-enyere ndị ọkachamara aka", "Iji mejupụta oge", "Ọ na-eme ka foto doo anya karịa"], answer: 1, why: "Ndekọ dị otu na-enyere aka ịtụnyere ma kwenye ihe kpatara ya." },
      { objective: "O3", q: "Coordinates bụ:", options: ["Agba dị na maapụ", "Ọsọ drone", "Nọmba latitude na longitude maka ebe kpọmkwem", "Ụdị ihe ọkụkụ"], answer: 2, why: "Ha na-enyere gị aka ịchọta mpaghara ahụ kpọmkwem ọzọ." },
      { objective: "O4", q: "OpenDroneMap bụ:", options: ["Aha ụlọ ọrụ drone", "Ọgwụ ahụhụ", "Satịlaịtị", "Sọftwia n'efu, open-source, iji jikọọ foto drone"], answer: 3, why: "OpenDroneMap na WebODM na-agbanwe foto ka ọ bụrụ maapụ n'efu." },
      { objective: "O4", q: "Tupu ị hazie foto, ị kwesịrị:", options: ["Inye folda aha ma chekwaa ya n'ebe ọzọ", "Ihichapụ ọkara foto", "Iji aka gbanwee aha foto ọ bụla", "Igbanyụ kọmputa"], answer: 0, why: "Ezigbo aha na nchekwa n'ebe ọzọ na-egbochi data ifu." },
      { objective: "O5", q: "GeoTIFF bụ:", options: ["Ụdị vidiyo", "Foto na-ebu ebe ọ dị n'ụwa", "Akụkụ drone", "Ozi ederede"], answer: 1, why: "Sọftwia maapụ na-eji ebe ahụ dị n'ime ya etinye ya n'ọnọdụ ya." },
      { objective: "O5", q: "Na QGIS, a na-agbakọ NDVI site na:", options: ["Ngwa mbipụta", "Bọtịnụ email", "Raster Calculator", "Njikwa olu"], answer: 2, why: "Raster Calculator na-agbakọ ihe na bands foto." },
      { objective: "O5", q: "Mgbe ọ bụ naanị igwefoto agba ka ị nwere, index akwụkwọ ndụ bụ:", options: ["Otu ihe ahụ dị ka NDVI kpọmkwem", "Ihe na-agaghị ekwe omume", "Ka mma karịa NDVI", "Ntụzịaka siri ike, nke a na-apụghị ịtụkwasị obi dị ka NDVI"], answer: 3, why: "Index RGB enweghị near-infrared, ya mere ọ bụ naanị ntụzịaka siri ike." },
      { objective: "O5", q: "Layer na GIS bụ:", options: ["Otu data maapụ e gosiri n'elu ndị ọzọ", "Batrị drone", "Ọrịa ihe ọkụkụ", "Akwụkwọ iwu"], answer: 0, why: "Oke ugbo, ebe a kara akara na foto bụ layer nke ọ bụla." },
      { objective: "O6", q: "Ezigbo akụkọ ihe a ga-eme n'ugbo bụ:", options: ["Peeji iri abụọ nke nọmba", "Otu peeji, okwu dị mfe, nwere maapụ na nzọụkwụ ọzọ", "Naanị foto ndị e sere", "Naanị usoro NDVI"], answer: 1, why: "Ndị ọrụ ugbo na-arụsi ọrụ ike chọrọ atụmatụ dị mkpụmkpụ ma doo anya." },
      { objective: "O6", q: "Kedu nke na-ekwesịghị ịdị n'akụkọ gị?", options: ["Ụbọchị na ọkwa uto ihe ọkụkụ", "Mpaghara e nyere nọmba", "Ọgwụ ahụhụ na dose a họọrọ naanị site na maapụ", "Onye a ga-akpọ"], answer: 2, why: "Ndụmọdụ ọgwụ chọrọ nchọpụta e kwenyere site n'aka onye tozuru etozu." },
      { objective: "O6", q: "Gịnị mere a ga-eji kwekọrịta ụbọchị a ga-efe drone ọzọ?", options: ["Iji mefuo batrị", "N'ihi na iwu kwuru kwa izu", "Iji ree ọtụtụ ụgbọ efe", "Ịhụ ma ihe e mere rụrụ ọrụ"], answer: 3, why: "Maapụ nsochi na-egosi ma e doziri nsogbu ahụ." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [0, 1, 3, 5, 7, 8, 11, 14, 17, 18] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma lelee ya ọzọ.",
    criteria: [
      { name: "Maapụ ahụike ihe ọkụkụ", objective: "O5", notYet: "Enweghị maapụ, ma ọ bụ enweghị legend na oke ugbo.", meets: "Maapụ NDVI ma ọ bụ maapụ agba nwere legend, oke agba na-egosi ọdịiche, na oke ugbo.", exceeds: "Na-ekwu usoro NDVI ma ọ bụ index e ji mee ya na oke ike ya." },
      { name: "Mpaghara nsogbu", objective: "O1", notYet: "Mpaghara erughị atọ, ma ọ bụ mpaghara a họọrọ naanị site n'agba.", meets: "Opekata mpe mpaghara nsogbu atọ e nyere nọmba, dabere n'ọdịiche dị n'ime ugbo ahụ.", exceeds: "Na-atụnyere mpaghara ndị ahụ na maapụ mbụ nke otu ugbo ahụ." },
      { name: "Atụmatụ ilele n'ala", objective: "O3", notYet: "Enweghị atụmatụ, ma ọ bụ naanị \"gaa lee\".", meets: "Maka mpaghara ọ bụla, ihe a ga-achọ, nwere coordinates na otu a ga-esi dekọọ ihe a hụrụ.", exceeds: "Na-akpọ aha ihe nwere ike ịkpata ya a ga-elele na mpaghara ọ bụla site n'ụdị ihe nsogbu ya na maapụ." },
      { name: "Akụkọ ihe a ga-eme", objective: "O6", notYet: "Ogologo karịrị otu peeji, ma ọ bụ enweghị nzọụkwụ ọzọ.", meets: "Otu peeji nwere maapụ, ihe a hụrụ, ihe nwere ike ịkpata ya, otu e si jide n'aka, nzọụkwụ ọzọ maka mpaghara ọ bụla na onye a ga-akpọ.", exceeds: "E dere ya n'asụsụ onye ọrụ ugbo ma kwekọrịta mgbe a ga-efe ọzọ." },
      { name: "Ndụmọdụ n'enweghị nsogbu", objective: "O2", notYet: "Na-atụ aro ọgwụ ahụhụ ma ọ bụ dose site na maapụ.", meets: "Na-ewere ụdị ihe nsogbu dị ka ihe ngosi ma na-eziga ajụjụ gbasara ọgwụ n'aka onye ọrụ extension, agrovet ma ọ bụ plant clinic.", exceeds: "Na-akọwara onye ọrụ ugbo ihe mere ụdị ihe ahụ ji chọọ nkwenye." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma nweta Ruru eru ma ọ bụ Karịrị n'ahịrị rubric ọ bụla",
      "Ndị na-amụ ihe kwuru na ha nyere onye ọrụ ugbo akụkọ ihe a ga-eme n'ime ụbọchị 60 (nnyocha nsochi)",
      "Ndị ọrụ ugbo kwuru na ha mere ihe dabere n'akụkọ ma jụọ ọkachamara tupu ha agba ọgwụ",
      "Ndị na-amụ ihe gara n'ihu na Ihe ọmụmụ 4 nke usoro drone"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Kọmputa e wụnyere QGIS na OpenDroneMap (WebODM) n'efu",
      "Data drone site n'ezi ugbo, ma ọ bụ data nlele n'efu",
      "Ekwentị nwere GPS na app maapụ maka ilele n'ala",
      "Ihe dị ka nkeji 60 n'ozuzu, n'oge nkenke, gbakwunyere oge nhazi na oge ide akụkọ"
    ],
    facilitatorNotes: [
      "Meenụ ule mbido ọnụ, wee hazie otu data nlele unu niile ga-eji tupu klas, n'ihi na ijikọ foto nwere ike iwe otu awa ma ọ bụ karịa.",
      "Mee nzọụkwụ NDVI n'ihu ha na QGIS ka ndị na-amụ ihe hụ Raster Calculator na colour ramp.",
      "Ọ bụrụ na o kwere mee, jeenụ ije n'ezi ugbo ma lelee mpaghara abụọ n'ala ọnụ.",
      "Ekwela ka ndị na-amụ ihe tụọ aro ọgwụ ahụhụ ma ọ bụ dose site na maapụ mgbe ọ bụla; kpọta onye ọrụ extension ma ọ bụ plant clinic maka nchọpụta.",
      "Jiri rubric tụọ akara akụkọ ahụ, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};
