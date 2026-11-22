"use strict";

// Koach Learn course (Igbo translation of agriculture-africa/agri-livestock-nutrition.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.
// Safety rule kept: the course gives no drug, additive or medicated-feed doses; it tells students to follow the vet and the label. All prices are made-up examples.

const FEEDIPEDIA = { name: "Feedipedia (INRAE, CIRAD, AFZ na FAO): usoro ozi gbasara ihe nri anụmanụ", url: "https://www.feedipedia.org/" };
const FEEDIPEDIA_MAIZE = { name: "Feedipedia: Mkpụrụ ọka (protein dị ihe dị ka pasentị 8 ruo 10.5 nke dry matter)", url: "https://www.feedipedia.org/node/556" };
const FEEDIPEDIA_SOY = { name: "Feedipedia: Soybean meal (protein dịka ụdị ya si dị)", url: "https://www.feedipedia.org/node/674" };
const ICIPE_PUSHPULL = { name: "icipe: Teknụzụ push-pull (desmodium, Napier na Brachiaria dị ka ahịhịa nri)", url: "https://www.icipe.org/impacts/demonstration-research-impacts-communities/push-pull-technology" };
const TENNESSEE_PEARSON = { name: "University of Tennessee Extension: Akwụkwọ omume gbasara ihe nri (Pearson square)", url: "https://animalscience.tennessee.edu/wp-content/uploads/sites/7/2020/07/BeefFeedstuffsActivityPacket.pdf" };
const FAO_SILAGE = { name: "FAO: Usoro iwe ihe ubi na ime silage (ime silage n'ebe okpomọkụ)", url: "https://www.fao.org/4/x8486e/x8486e0w.htm" };
const FAO_SILAGE_SMALL = { name: "FAO: Ime silage maka obere ndị ọrụ ugbo (nchịkọta: silage n'akpa, ụzọ na-adịghị ọnụ)", url: "https://www.fao.org/4/x8486e/x8486e13.htm" };
const ILRI_MYCO = { name: "ILRI: Ihe na-ejide mycotoxin, ụzọ isi nweta mmiri ara dị mma na Kenya?", url: "https://www.ilri.org/knowledge/publications/mycotoxin-binders-option-safer-milk-kenya" };

module.exports = {
  id: "agri-livestock-nutrition-ig",
  lang: "ig",
  translationOf: "agri-livestock-nutrition",
  category: "Agriculture (Africa)",
  name: "Nri Anụ Ụlọ na Ịgwakọta Nri site n'Ihe Dị n'Obodo",
  skills: "Ime ka nri dabara mkpa anụmanụ, Ịhọrọ ihe nri na ahịhịa nri dị n'obodo, Ịhazi nri site na Pearson square, Ime silage na hay na ichekwa nri n'enweghị nsogbu, Ịhazi nri dịka ọkwa anụmanụ si dị, Ịgbakọ ego nri kwa kg ibu ma ọ bụ kwa lita mmiri ara",
  outcome: "ịgwakọta ma gbakọọ ego nri zuru ezu (ration) site n'ihe dị n'obodo maka otu ụdị anụmanụ: ime ka ike, protein, mineral na mmiri dabara ọkwa ya, iji Pearson square hazie protein, ichekwa nri n'enweghị nsogbu, na ịgbakọ ego nri kwa kg ibu ọ gbara, kwa tree akwa ma ọ bụ kwa lita mmiri ara.",
  about: [
    "Ihe ọmụmụ a bụ maka obere ndị na-azụ anụ ụlọ na ọkụkọ na ndị na-eto eto n'ọrụ a, ndị ọrụ ugbo, ndị ntorobịa na-azụ ahịa ugbo, obere ndị na-agwakọta nri, na ndị ọrụ extension (ndị na-enye ndị ọrụ ugbo ndụmọdụ) na Kenya, Nigeria, Ghana, Côte d'Ivoire, Burkina Faso na n'Africa niile. Nri na-abụkarị ihe kacha efu ego n'ịzụ anụmanụ, ya mere inye nri nke ọma na nke na-adịghị ọnụ na-ekpebi ma ugbo ahụ ọ ga-enweta uru.",
    "Isi 1 na-akọwa ihe anụmanụ chọrọ na ihe i nwere: ihe ndị dị na nri (nutrients), ihe nri dị n'obodo dị ka ọka, bran ọka, bran wheat, soybean cake na cotton seed cake, fish meal, na ahịhịa nri dị ka ahịhịa Napier, desmodium na lablab, na otu esi eji Pearson square hazie nri, nzọụkwụ n'otu n'otu. Isi 2 na-akọwa ichekwa na ịhazi: silage na hay, ichekwa nri ka ebu (mould) na mycotoxin ghara ịbanye ya, inye nri dịka ọkwa anụmanụ si dị site n'atụmatụ nri nwere akụkụ atọ, na ịgbakọ ego nri kwa kg ibu ma ọ bụ kwa lita mmiri ara.",
    "Ọnụ ego niile e dere ebe a bụ naanị ọmụmaatụ: jiri ọnụ ahịa dị n'obodo gị. Ihe dị n'ime ihe nri na-adị iche iche, ya mere lelee ha n'aka onye na-ere gị, ụlọ nyocha nri (feed laboratory) ma ọ bụ onye ọrụ extension gị. Ihe ọmụmụ a anaghị enye ọnụọgụ ọgwụ ma ọ bụ ihe a na-agbakwunye na nri; soro akwụkwọ dị n'ahụ ya (label) na dọkịta anụmanụ gị. Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise ma na-ejedebe n'ọrụ. E nwere nnwale ihe ọmụma na njedebe isi ọ bụla, na ule nwere ajụjụ 20 na njedebe ihe ọmụmụ a."
  ],
  finalTask: "Mee nri e gbakọrọ ego ya maka otu ụdị anụmanụ n'ugbo gị (ma ọ bụ ọmụmaatụ dị ka ọkụkọ na-eyi akwa nso Kumasi, ezi na-eto eto nso Ibadan, ọkụkọ broiler nso Bouake, ma ọ bụ ehi mmiri ara na Kiambu): kpọọ aha ụdị anụmanụ ahụ na ọkwa ya; dee atụmatụ nri nwere akụkụ atọ (nri isi ma ọ bụ ahịhịa nri, concentrate, ihe mgbakwunye) na mmiri; jiri Pearson square hazie protein nke concentrate ahụ, gosi otu i si gbakọọ ya; depụta kg nke ihe nri ọ bụla n'ime kg 100 nke ngwakọta; gbakọọ ego ya kwa kg site n'ọnụ ahịa dị n'obodo gị; ma gbakọọ ego nri kwa kg ibu, kwa tree akwa ma ọ bụ kwa lita mmiri ara.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Obere ndị na-azụ anụ ụlọ na ọkụkọ na ndị na-eto eto n'ịzụ ahịa, ndị ọrụ ugbo, ndị ntorobịa na-azụ ahịa ugbo, obere ndị na-agwakọta nri, na ndị ọrụ extension n'Ọwụwa Anyanwụ, Ọdịda Anyanwụ na Etiti Africa (gụnyere mba ndị na-asụ French).",
    startingPoint: "Ha na-enye anụmanụ nri site n'ịta ahịhịa n'ọhịa, ihe fọdụrụ n'ubi na nri ahịa ha zụtara. Ọtụtụ n'ime ha enweghị ike ịgụ akwụkwọ dị n'ahụ akpa nri ma ọ bụ hazie nri, ha anaghị echekwa ahịhịa nri maka oge ọkọchị, ha amaghịkwa ego nri ha na-efu kwa kg anụ, akwa ma ọ bụ mmiri ara.",
    gap: "Nri a na-azụ n'ahịa dị oke ọnụ, ịdị mma ya na-adịkwa iche iche; nri na-adịghị mma ma ọ bụ nke ebu bara na-ebelata uto, akwa na mmiri ara, ọ nwekwara ike ime ka anụmanụ rịa ọrịa. Ndị ọrụ ugbo nwere ike ịgwakọta nri zuru ezu site n'ihe dị n'obodo, chekwaa ahịhịa nri ma gbakọọ ego nri ha nwere ike ibelata ego ha na-efu, mee ka anụmanụ na-emepụta ihe n'oge ọkọchị, ma were obi ike kpebie ọnụ ahịa ngwaahịa ha.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ; naanị mgbakọ dị mfe (mụbaa, kee, pasentị); ihe ọmụmụ a dịkwa n'asụsụ Spanish, French na Arabic",
      "Ngwaọrụ: akwụkwọ na mkpịsị ode ma ọ bụ igwe mgbakọ dị n'ekwentị; spreadsheet n'ekwentị bụ nhọrọ",
      "Ego: ọnụ ahịa na KES, NGN, GHS na XOF bụ naanị ọmụmaatụ; ndị na-amụ ihe na-eji ọnụ ahịa dị n'obodo ha",
      "Ihe dị n'ime ihe nri na-adị iche iche: ndị na-amụ ihe na-elele ha n'aka ndị na-ere ha, ụlọ nyocha ma ọ bụ onye ọrụ extension",
      "Iwu ahụike anụmanụ: ọ dịghị ọnụọgụ ọgwụ, ihe mgbakwunye ma ọ bụ nri nwere ọgwụ; soro dọkịta anụmanụ na akwụkwọ dị n'ahụ ya"
    ],
    prerequisites: "Nlekọta anụmanụ nkịtị na mgbakọ dị mfe. A na-atụ aro ka i buru ụzọ were \"Livestock Health and Management\" (Ahụike na Nlekọta Anụ Ụlọ)."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe e nyere gị otu ụdị anụmanụ na ọkwa ya", action: "idepụta ihe ndị ọ chọrọ na nri (ike, protein, mineral na mmiri) na otu nri dị n'obodo na-enye nke ọ bụla", standard: "na-akpọ aha otu nri ziri ezi maka ihe ọ bụla" },
    { id: "O2", condition: "Mgbe e nyere gị nri ndị dị nso gị", action: "ikewa ihe nri na ahịhịa nri dị n'obodo ka ha bụrụ nri ike, nri protein, roughage na ihe mgbakwunye", standard: "ma tinye opekata mpe 8 n'ime 10 n'ebe ziri ezi" },
    { id: "O3", condition: "Mgbe e nyere gị ihe nri abụọ na ọkwa protein a chọrọ", action: "ịhazi nri site na Pearson square ma dee kg nke ihe nri ọ bụla n'ime kg 100 nke ngwakọta", standard: "nke mere na ngwakọta ahụ adịghị anya karịa pasentị 0.5 site n'ọkwa a chọrọ" },
    { id: "O4", condition: "Site n'iji ahịhịa nri na nri dị n'ugbo gị", action: "ime silage ma ọ bụ hay ma chekwaa nri ka ọ dị nkụ ma ghara inwe ebu", standard: "na-agbaso nzọụkwụ ọ bụla dị na ndepụta nlele" },
    { id: "O5", condition: "Maka otu ụdị anụmanụ", action: "ide atụmatụ nri dịka ọkwa si dị nwere nri isi ma ọ bụ ahịhịa nri, concentrate na ihe mgbakwunye maka ọkwa ọ bụla", standard: "na-ekpuchi ọkwa ọ bụla site na nwa ruo ahịa, oge iyi akwa ma ọ bụ oge mmiri ara" },
    { id: "O6", condition: "Site n'iji ọnụ ahịa dị n'obodo gị na ndekọ gị", action: "ịgbakọ ego nri kwa kg nke ngwakọta na kwa kg ibu, tree akwa ma ọ bụ lita mmiri ara", standard: "na mgbakọ ziri ezi na ihe nri ọ bụla gụnyere" }
  ],
  chapters: [
    {
      name: "Isi 1: Ihe anụmanụ chọrọ na ihe i nwere",
      lessons: [
        {
          title: "Ihe dị na nri: ike, protein, mineral na mmiri",
          objectives: ["O1"],
          minutes: 5,
          goal: "Depụta ihe anụmanụ chọrọ iri na ịṅụ, na otu nri dị n'obodo maka mkpa ọ bụla.",
          text: [
            "Anụmanụ ọ bụla chọrọ ihe anọ site na nri na mmiri ya. Ike (energy) na-eme ka ọ dị ndụ, kpoo ọkụ ma na-agagharị, ọ na-enyekwa ike maka uto, mmiri ara na akwa; ọ na-esikarị na mkpụrụ nri (ọka, sorghum, akpụ), bran, na ahịhịa ndụ ma ọ bụ nke e chekwara. Protein na-ewu anụ ahụ, mmiri ara, akwa na ụmụ; ọ na-esi na oilseed cake (soybean, cotton seed, ahụekere, sunflower), fish meal, na legume dị ka desmodium na lablab. Mineral na vitamin na-ewu ọkpụkpụ na mkpokoro akwa ma na-eme ka ahụ rụọ ọrụ nke ọma: nnu, calcium site na limestone ma ọ bụ mkpokoro, phosphorus, na premix mineral na vitamin.",
            "Mmiri bụ ihe kacha mkpa na nri, ọ bụkwa nke kacha dị ọnụ ala. Anụmanụ na-akwụsị iri nri ngwa ngwa ma ọ bụrụ na o nweghị mmiri, ehi na-enye mmiri ara na ọkụkọ na-eyi akwa na-aṅụkwa mmiri nke ukwuu. Nye mmiri dị ọcha oge niile, nye karịa n'oge okpomọkụ, n'ime ihe ọṅụṅụ dị ọcha n'ebe ndò.",
            "Mkpa ndị a na-agbanwe dịka anụmanụ na ọkwa ya si dị. Nwa anụmanụ na-eto ngwa ngwa, ọkụkọ na-eyi akwa na ehi na-enye mmiri ara chọrọ protein karịa anụmanụ toro eto nke na-ezu ike. Ehi, ewu na atụrụ bụ ruminant: afọ ha nwere ike ịgbari ahịhịa na ihe fọdụrụ n'ubi, ya mere roughage bụ isi nri ha. Ezi na ọkụkọ enweghị ike ịgbari roughage nke ukwuu, ya mere ha chọrọ mash e ji mkpụrụ nri mee, nke e tinyere protein, mineral na vitamin."
          ],
          words: [["Ihe dị na nri (nutrient)", "akụkụ nri ahụ chọrọ: ike, protein, mineral, vitamin na mmiri."], ["Ruminant", "anụmanụ nwere afọ nwere akụkụ anọ nke nwere ike ịgbari ahịhịa: ehi, ewu na atụrụ."], ["Premix", "ngwakọta mineral na vitamin a zụtara, nke a na-agbakwunye ntakịrị na nri, dịka akwụkwọ dị n'ahụ ya kwuru."], ["Roughage", "nri buru ibu nwere ọtụtụ fibre dị ka ahịhịa, hay, silage na ihe fọdụrụ n'ubi."]],
          slides: [
            { title: "Mkpa anọ", bullets: ["Ike: mkpụrụ nri, bran, akpụ, ahịhịa", "Protein: oilseed cake, fish meal, legume", "Mineral na vitamin: nnu, limestone, premix", "Mmiri: dị ọcha, oge niile"] },
            { title: "Mmiri bụ nke mbụ", bullets: ["Ihe kacha dị ọnụ ala ma kacha mkpa", "Karịa n'okpomọkụ; anụmanụ na-enye mmiri ara ma ọ bụ akwa na-aṅụ nke ukwuu", "Ihe ọṅụṅụ dị ọcha n'ebe ndò"] },
            { title: "Mkpa na-agbanwe dịka ọkwa si dị", bullets: ["Ụmụ anụmanụ, ndị na-eyi akwa na ndị na-enye mmiri ara chọrọ protein karịa", "Ndị toro eto na-ezu ike chọrọ obere"] },
            { title: "Ruminant na ezi na ọkụkọ", bullets: ["Ehi, ewu, atụrụ: roughage bụ isi nri", "Ezi na ọkụkọ: mash mkpụrụ nri nwere protein na premix"] }
          ],
          sources: [FEEDIPEDIA],
          tryIt: "Họrọ otu ụdị anụmanụ n'ugbo gị (dịka ọmụmaatụ ezi na-eto eto, ọkụkọ na-eyi akwa ma ọ bụ ehi na-enye mmiri ara). Dee mkpa anọ ya, na n'akụkụ nke ọ bụla, otu nri ị nwere ike inweta n'obodo gị nke na-enye ya.",
          youCanNow: "idepụta mkpa ike, protein, mineral na mmiri nke anụmanụ ma kpọọ aha otu nri dị n'obodo maka nke ọ bụla.",
          quickCheck: [
            { objective: "O1", q: "Kedu ihe dị na nri kacha dị ọnụ ala ma kacha mkpa?", options: ["Protein", "Ike", "Mmiri", "Vitamin"], answer: 2, why: "Anụmanụ na-akwụsị iri nri na imepụta ihe ngwa ngwa ma ọ bụrụ na o nweghị mmiri dị ọcha." },
            { objective: "O1", q: "Kedu nri na-enyekarị protein?", options: ["Soybean cake", "Mkpụrụ ọka", "Nnu", "Akpụ a mịrị amị"], answer: 0, why: "Oilseed cake dị ka soybean cake nwere ọtụtụ protein; ọka na akpụ na-enyekarị ike." }
          ]
        },
        {
          title: "Ihe nri na ahịhịa nri dị n'obodo",
          objectives: ["O2"],
          minutes: 6,
          goal: "Kewaa nri ndị ị nwere ike inweta ka ha bụrụ nri ike, nri protein, roughage na ihe mgbakwunye.",
          text: [
            "Nri ike: mkpụrụ ọka, sorghum na millet, akpụ (a gbapụrụ, mịa ma ọ bụ dozie ka ọ ghara inwe nsogbu), bran ọka na bran wheat. Bran dị ọnụ ala karịa mkpụrụ nri ma na-enye ntakịrị protein na fibre, mana bran karịrị akarị na mash ọkụkọ na-ebelata ike dị na ya. Mkpụrụ ọka nwere naanị protein dị ihe dị ka pasentị 8 ruo 10, ya mere naanị ya enweghị ike ịzụ anụmanụ na-eto eto.",
            "Nri protein: soybean cake (na-enwekarị protein dị ihe dị ka pasentị 44 ruo 48, dabere n'otu e si mee ya), cotton seed cake, ahụekere cake, sunflower cake na fish meal (dị ka omena na Kenya). Cotton seed cake nwere gossypol, nke nwere ike imerụ ezi, ọkụkọ na ụmụ anụmanụ ahụ, ya mere jiri ya naanị n'ime oke e dere n'akwụkwọ nduzi nri ma ọ bụ nke ọkachamara nri anụmanụ nyere. Fish meal bara ọgaranya mana ọ dị ọnụ, ịdị mma ya na-adịkwa iche iche: zụta ya n'aka onye a pụrụ ịtụkwasị obi ma lelee na e tinyeghị ájá ma ọ bụ nnu n'ime ya.",
            "Ahịhịa nri na roughage maka ruminant: ahịhịa Napier, ahịhịa Brachiaria, osisi ọka kpọrọ nkụ (stover), legume dị ka desmodium na lablab, na akwụkwọ osisi dị ka leucaena na calliandra. Legume nwere ọtụtụ protein ma nwee ike dochie akụkụ concentrate a na-azụ n'ahịa. Usoro push-pull nke icipe na-akọ desmodium n'etiti ahịrị ọka ma kọọ Napier ma ọ bụ Brachiaria gburugburu ubi ahụ: ọ na-echebe ọka pụọ n'aka ụmụ ahụhụ ma na-enye ahịhịa nri dị mma nke ukwuu. Ihe mgbakwunye: nnu, limestone ma ọ bụ mkpokoro maka calcium, na premix mineral na vitamin e ji dịka akwụkwọ dị n'ahụ ya kwuru."
          ],
          steps: ["Depụta nri ọ bụla ị nwere ike ịzụ ma ọ bụ kọọ nso gị.", "Kaa nke ọ bụla akara: ike, protein, roughage ma ọ bụ ihe mgbakwunye.", "Dee ọnụ ahịa ya kwa kg na oge n'afọ ị nwere ike inweta ya.", "Jụọ onye na-ere gị ma ọ bụ onye ọrụ extension gị protein dị na ya.", "Dee oke ọ bụla, dị ka cotton seed cake maka ezi na ọkụkọ."],
          words: [["Concentrate", "nri nwere ọtụtụ ike ma ọ bụ protein, dị ka mkpụrụ nri, bran, oilseed cake ma ọ bụ dairy meal a zụtara."], ["Oilseed cake", "ihe fọdụrụ mgbe a pịchara mmanụ site na mkpụrụ dị ka soybean ma ọ bụ cotton seed; o nwere ọtụtụ protein."], ["Legume", "osisi dị ka desmodium, lablab ma ọ bụ agwa nwere ọtụtụ protein ma na-agbakwunye nitrogen n'ala."], ["Gossypol", "ihe sitere n'okike dị na cotton seed nke nwere ike imerụ ezi, ọkụkọ na ụmụ anụmanụ ahụ."]],
          slides: [
            { title: "Nri ike", bullets: ["Ọka, sorghum, millet, akpụ e doziri nke ọma", "Bran ọka na bran wheat: dị ọnụ ala, fibre karịa", "Naanị ọka: protein dị naanị ihe dị ka pasentị 8 ruo 10"] },
            { title: "Nri protein", bullets: ["Soybean cake, na-enwekarị protein dị ka pasentị 44 ruo 48", "Cotton seed cake, ahụekere cake na sunflower cake", "Fish meal: bara ọgaranya mana lelee ịdị mma ya"] },
            { title: "Ahịhịa nri maka ruminant", bullets: ["Napier, Brachiaria, osisi ọka kpọrọ nkụ", "Legume: desmodium, lablab, leucaena, calliandra", "Push-pull na-enye ahịhịa nri ma na-echebe ọka"] },
            { title: "Ihe mgbakwunye na oke", bullets: ["Nnu, limestone ma ọ bụ mkpokoro, premix dịka label si kwuo", "Cotton seed cake: oke maka ezi, ọkụkọ, ụmụ anụmanụ", "Lelee ihe dị na ya n'aka onye na-ere ma ọ bụ extension"] }
          ],
          sources: [FEEDIPEDIA_MAIZE, FEEDIPEDIA_SOY, ICIPE_PUSHPULL],
          tryIt: "Mee tebụl nke nri 8 ruo 10 ị nwere ike inweta nso gị nwere kọlụm anọ: nri, ụdị (ike, protein, roughage ma ọ bụ ihe mgbakwunye), ọnụ ahịa kwa kg, na ọnwa ị na-enweta ya.",
          youCanNow: "ikewa nri dị nso gị ka ha bụrụ nri ike, nri protein, roughage na ihe mgbakwunye, ma dee ọnụ ahịa na oke ha.",
          quickCheck: [
            { objective: "O2", q: "Kedu legume ahịhịa nri nwere ọtụtụ protein maka ehi na ewu?", options: ["Osisi ọka kpọrọ nkụ", "Bran wheat", "Desmodium", "Akpụkpọ akpụ"], answer: 2, why: "Desmodium bụ legume nwere ọtụtụ protein; ndị ọzọ na-enyekarị ike ma ọ bụ fibre." },
            { objective: "O2", q: "Gịnị mere i ji kpachara anya maka cotton seed cake n'inye ezi na ọkụkọ?", options: ["O nweghị protein", "O nwere gossypol, nke nwere ike imerụ ha ahụ", "Ọ dị oke ọnụ ala", "Ọ bụ naanị maka azụ"], answer: 1, why: "Gossypol dị na cotton seed nwere ike imerụ ezi, ọkụkọ na ụmụ anụmanụ ahụ, ya mere jiri ya n'ime oke akwụkwọ nduzi." }
          ]
        },
        {
          title: "Ịhazi nri site na Pearson square",
          objectives: ["O3"],
          minutes: 6,
          goal: "Hazie ihe nri abụọ ruo ọkwa protein a chọrọ site na Pearson square.",
          text: [
            "Pearson square bụ ihe osise dị mfe na-agwa gị ole nri abụọ ị ga-agwakọta iji ruo otu ọkwa a chọrọ, na-abụkarị protein. Ọ na-arụ ọrụ na otu ihe dị na nri na nri abụọ n'otu oge, ọkwa a chọrọ ga-adịkwa n'etiti ọnụọgụ nri abụọ ahụ. Jiri ọnụọgụ nwere otu ntọala (ha abụọ as-fed ma ọ bụ ha abụọ dry matter).",
            "Ọmụmaatụ e gbakọrọ site n'ọnụọgụ a na-ahụkarị (lelee nke gị): ọka nwere protein pasentị 9, soybean cake nwere pasentị 44, ọkwa a chọrọ bụ pasentị 18. Ọkwa ahụ na-esi n'akwụkwọ nduzi nri, onye ọrụ extension gị ma ọ bụ ọkachamara nri anụmanụ maka anụmanụ ahụ na ọkwa ya. See square. Dee 18 n'etiti, ọka 9 n'elu n'aka ekpe, soybean cake 44 n'ala n'aka ekpe. Wepụ n'akụkụ diagonal ma leghara akara mwepụ anya: 44 wepụ 18 = akụkụ 26 nke ọka (elu n'aka nri); 18 wepụ 9 = akụkụ 9 nke soybean cake (ala n'aka nri). Akụkụ niile = 26 + 9 = 35.",
            "Gbanwee akụkụ ka ha bụrụ kg n'ime kg 100: ọka = 26 / 35 x 100 = kg 74.3; soybean cake = 9 / 35 x 100 = kg 25.7. Lelee: 74.3 x 9 % = kg 6.7 protein, gbakwunye 25.7 x 44 % = kg 11.3, ngụkọta kg 18.0 protein n'ime kg 100: pasentị 18. N'ezi mash, ị ga-ebu ụzọ hapụ ohere maka ihe ndị a kara aka (premix, nnu, limestone maka ọkụkọ na-eyi akwa, dịka label ma ọ bụ akwụkwọ nduzi kwuru), wee jiri square ahụ maka ndị fọdụrụ. Square ahụ na-ahazi naanị protein, ya mere lelee ike, fibre na mineral n'aka onye ọrụ extension gị."
          ],
          steps: ["Dee protein a chọrọ n'etiti square.", "Dee nri A (protein dị ala) n'elu n'aka ekpe na nri B (protein dị elu) n'ala n'aka ekpe.", "Wepụ n'akụkụ diagonal ọ bụla; leghara akara mwepụ anya.", "Elu n'aka nri = akụkụ nri A; ala n'aka nri = akụkụ nri B.", "Kee nke ọ bụla site n'akụkụ niile ma mụbaa ya site na 100 maka kg n'ime kg 100.", "Lelee: kg x pasentị protein nke nri ọ bụla ga-ezuru ọkwa a chọrọ."],
          words: [["Pearson square", "ihe osise dị mfe na-egosi ole nri abụọ ị ga-agwakọta iji ruo otu ọkwa ihe dị na nri."], ["Crude protein", "ọnụọgụ protein e dere n'akwụkwọ dị n'ahụ nri na akwụkwọ ụlọ nyocha, dị ka pasentị."], ["Ration", "nri anụmanụ na-enweta n'otu ụbọchị, ma ọ bụ ngwakọta e si na ya enye ya nri."], ["As-fed", "a tụrụ ya otu nri ahụ si dị, na mmiri dị n'ime ya; ọnụọgụ dry matter na-ewepụ mmiri ahụ."]],
          slides: [
            { title: "Pearson square", bullets: ["Otu ihe dị na nri, nri abụọ", "Ọkwa a chọrọ ga-adị n'etiti ọnụọgụ abụọ ahụ", "Otu ntọala: as-fed ma ọ bụ dry matter"] },
            { title: "Hazie ya", bullets: ["N'etiti: ọkwa a chọrọ pasentị 18", "Elu n'aka ekpe: ọka 9; ala n'aka ekpe: soybean cake 44"] },
            { title: "Gafee diagonal", bullets: ["44 - 18 = akụkụ 26 ọka", "18 - 9 = akụkụ 9 soybean cake", "Ngụkọta akụkụ 35"] },
            { title: "Kwa kg 100, wee lelee", bullets: ["Ọka 26 / 35 x 100 = kg 74.3", "Soybean cake 9 / 35 x 100 = kg 25.7", "6.7 + 11.3 = kg 18.0 protein: o ruru ọkwa a chọrọ"] }
          ],
          sources: [TENNESSEE_PEARSON, FEEDIPEDIA_MAIZE, FEEDIPEDIA_SOY],
          tryIt: "Jiri Pearson square gwakọta bran ọka (jiri protein pasentị 10 dị ka ọnụọgụ omume) na soybean cake (pasentị 44) maka ọkwa pasentị 16. Dee kg n'ime kg 100 ma lelee na protein ahụ zuru. (Azịza: akụkụ 28 bran na akụkụ 6 cake, ya bụ kg 82.4 na kg 17.6.)",
          youCanNow: "ịhazi nri abụọ ruo ọkwa protein a chọrọ site na Pearson square ma lelee nsonaazụ ya.",
          quickCheck: [
            { objective: "O3", q: "Na Pearson square, gịnị ka a na-etinye n'etiti?", options: ["Ọnụ ahịa nri ahụ", "Ibu anụmanụ ahụ", "Ọnụọgụ anụmanụ", "Ọkwa protein a chọrọ"], answer: 3, why: "Ọkwa ihe dị na nri a chọrọ na-aga n'etiti; nri ndị ahụ na-aga n'aka ekpe." },
            { objective: "O3", q: "Ị na-agwakọta ọka (pasentị 9) na soybean cake (pasentị 44) maka pasentị 18. Akụkụ ole nke ọka?", options: ["Akụkụ 26 (44 wepụ 18)", "Akụkụ 9 (18 wepụ 9)", "Akụkụ 35", "Akụkụ 18"], answer: 0, why: "Wepụ n'akụkụ diagonal: 44 - 18 = akụkụ 26 nke ọka." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ihe anụmanụ chọrọ na ihe i nwere",
        questions: [
          { objective: "O1", q: "Gịnị mere ehi na ewu ji nwee ike ibi ndụ n'ahịhịa nke ukwuu mana ezi na ọkụkọ enweghị ike?", options: ["Ezi na ọkụkọ achọghị ike", "Ahịhịa bụ nsi nye ezi", "Ehi na ewu bụ ruminant ma nwee ike ịgbari roughage", "Ọkụkọ na-aṅụ naanị mmiri"], answer: 2, why: "Afọ ruminant na-agbari roughage; ezi na ọkụkọ chọrọ mash e ji mkpụrụ nri mee." },
          { objective: "O1", q: "Kedu anụmanụ chọrọ protein karịa na nri ya?", options: ["Nwa ọkụkọ broiler na-eto ngwa ngwa", "Ewu toro eto na-ezu ike n'oge ọkọchị", "Ehi toro eto na-adịghị ime, na-enyeghị mmiri ara", "Oke ehi toro eto nke ọma na-ezu ike"], answer: 0, why: "Ụmụ anụmanụ na-eto ngwa ngwa, ndị na-eyi akwa na ndị na-enye mmiri ara chọrọ protein karịa." },
          { objective: "O2", q: "Kedu n'ime ndị a bụ nri ike karịsịa?", options: ["Fish meal", "Mkpụrụ ọka", "Soybean cake", "Desmodium"], answer: 1, why: "Mkpụrụ ọka bụ ike ka ukwuu, nwere naanị protein dị ihe dị ka pasentị 8 ruo 10." },
          { objective: "O3", q: "Kedu ụzọ abụọ Pearson square nwere ike ịhazi ruo ọkwa protein pasentị 16?", options: ["Ọka (pasentị 9) na bran ọka (pasentị 10)", "Fish meal (pasentị 60) na soybean cake (pasentị 44)", "Nri abụọ ndị ha abụọ karịrị pasentị 30", "Ọka (pasentị 9) na soybean cake (pasentị 44)"], answer: 3, why: "Ọkwa a chọrọ ga-adị n'etiti ọnụọgụ nri abụọ ahụ: 16 dị n'etiti 9 na 44." },
          { objective: "O3", q: "Mgbe square ahụ gasịrị, akụkụ 26 ọka na akụkụ 9 soybean cake. Kg ole nke soybean cake n'ime kg 100?", options: ["Kg 9", "Kg 35", "Ihe dị ka kg 25.7", "Ihe dị ka kg 74.3"], answer: 2, why: "9 / 35 x 100 = kg 25.7 nke soybean cake n'ime kg 100 nke ngwakọta." }
        ]
      }
    },
    {
      name: "Isi 2: Chekwaa, hazie ma gbakọọ ego nri gị",
      lessons: [
        {
          title: "Silage, hay na ichekwa nri n'enweghị nsogbu",
          objectives: ["O4"],
          minutes: 6,
          goal: "Mee silage ma ọ bụ hay ma chekwaa nri ka ọ dị nkụ ma ghara inwe ebu.",
          text: [
            "N'oge udu mmiri, ahịhịa na-adị oke ukwuu; n'oge ọkọchị ọ na-adị ntakịrị, mmiri ara na ibu anụmanụ na-agbadakwa. Ichekwa ahịhịa nri na-eme ka nke a hara nhata. Silage bụ ahịhịa nri ndụ (ọka, sorghum ma ọ bụ Napier) e chekwara n'enweghị ikuku ka o gbaa ụka (ferment) ma nọgide na-adị mmiri mmiri ma dị mma iri ruo ọtụtụ ọnwa. Hay bụ ahịhịa ma ọ bụ legume a wara ma kpoo n'anwụ ruo mgbe ọ kpọrọ nkụ nke ọma iji chekwaa ya n'emeghị ka ọ rẹọ.",
            "Silage n'ụzọ FAO: bee ya obere obere, jupụta ya ngwa ngwa, kpakọọ ya nke ọma ma mechie ya ka ikuku ghara ịbanye. Wa ọka ma ọ bụ sorghum mgbe mkpụrụ ya dị nro na mmiri ara ruo mgbe ọ na-akpụ dị ka ntụ ọka a gwọrọ agwọ. Bee ahịhịa nri ahụ ka ọ bụrụ obere iberibe, jupụta olulu, tube plastik, akpa ma ọ bụ drum dị ọcha ngwa ngwa, kpakọọ ya site n'ịzọcha ya ma ọ bụ ịkpakọ ya ka ikuku niile pụọ, wee mechie ya na plastik ma tinye ihe dị arọ n'elu ya. Napier na ahịhịa ndị ọzọ nwere obere shuga; ndị ọrụ ugbo na-agbakwunyekarị molasses iji nyere ha aka ịgba ụka (jụọ onye ọrụ extension gị ole). Hapụ ya ka ọ nọrọ mechiri emechi ruo izu ụfọdụ, ma mgbe i meghere ya, wepụta ihe ị chọrọ kwa ụbọchị ma mechie ya ọzọ. Ezigbo silage na-esi ísì ụtọ na mmanya; tụfuo akụkụ ndị nwere ebu ma ọ bụ ndị rere ure.",
            "Ebu dị na nri nwere ike ime mycotoxin, dị ka aflatoxin. Ha bụ nsi a na-adịghị ahụ anya nke na-ebelata uto, mmiri ara na ọmụmụ, na-eme ka anụmanụ rịa ọrịa, ma nwee ike ịbanye na mmiri ara, akwa na anụ. Nnyocha ILRI na Kenya hụrụ aflatoxin n'ọtụtụ nri ehi mmiri ara. Gbochie ya: zụta nri n'ebe a na-egwe nri a pụrụ ịtụkwasị obi, lelee na ọ kpọrọ nkụ, na-asọ asọ ma na-esi ísì ọhụrụ, tinye akpa n'elu pallet n'ala ma pụọ na mgbidi, n'okpuru elu ụlọ na-adịghị ehi mmiri, jiri nri kacha ochie buru ụzọ, ma enyela nri nwere ebu mgbe ọ bụla, ọbụlagodi nye anụmanụ ndị ọzọ."
          ],
          steps: ["Silage: wa ya n'oge kwesịrị ekwesị ma bee ya obere obere.", "Jupụta olulu, tube, akpa ma ọ bụ drum ngwa ngwa ma kpakọọ ya nke ọma ka ikuku pụọ.", "Mechie ya na plastik ka ikuku ghara ịbanye ma tinye ihe dị arọ n'elu ya; hapụ ya ka ọ nọrọ mechiri emechi ruo izu ụfọdụ.", "Hay: wa ya, kpoo ya n'anwụ, na-atụgharị ya ugboro ugboro, chekwaa ya ebe dị nkụ n'okpuru elu ụlọ.", "Ụlọ nri: pallet n'ala, pụọ na mgbidi, elu ụlọ na-adịghị ehi mmiri.", "Jiri nri kacha ochie buru ụzọ; tụfuo ihe ọ bụla nwere ebu, kpụkọrọ akpụkọ ma ọ bụ na-esi ísì ọjọọ."],
          words: [["Silage", "ahịhịa nri ndụ e chekwara n'enweghị ikuku ka o gbaa ụka ma dị mma inye anụmanụ ruo ọtụtụ ọnwa."], ["Hay", "ahịhịa ma ọ bụ legume a wara ma kpoo n'anwụ maka ichekwa ya."], ["Mycotoxin", "nsi ebu na-eme na nri, dị ka aflatoxin; a naghị ahụ ya anya."], ["Pallet", "ihe osisi ma ọ bụ plastik dị elu na-eme ka akpa ghara ịdị n'ala."]],
          slides: [
            { title: "Gịnị mere a ga-eji chekwaa ahịhịa nri", bullets: ["Ahịhịa karịrị akarị n'udu mmiri, ọ na-adị ntakịrị n'ọkọchị", "Silage na hay na-eme ka mmiri ara na uto kwụsie ike"] },
            { title: "Silage na nzọụkwụ anọ (FAO)", bullets: ["Bee ya obere obere", "Jupụta ya ngwa ngwa", "Kpakọọ ya nke ọma ka ikuku pụọ", "Mechie ya ka ikuku ghara ịbanye ma tinye ihe dị arọ"] },
            { title: "Hay", bullets: ["Wa ahịhịa ma ọ bụ legume", "Kpoo ya n'anwụ, na-atụgharị ya ugboro ugboro", "Chekwaa ya ebe dị nkụ, n'okpuru elu ụlọ, ọ bụghị n'ala"] },
            { title: "Gbochie ebu na mycotoxin", bullets: ["Zụta n'ebe a na-egwe nri a tụkwasịrị obi; lelee na ọ kpọrọ nkụ ma na-esi ísì ọhụrụ", "Pallet, pụọ na mgbidi, elu ụlọ na-adịghị ehi mmiri", "Nke ochie buru ụzọ; enyela nri nwere ebu mgbe ọ bụla"] }
          ],
          sources: [FAO_SILAGE, FAO_SILAGE_SMALL, ILRI_MYCO],
          tryIt: "Gaa ebe ị na-echekwa nri. Dee ihe atọ nwere ike ime ka iru mmiri ma ọ bụ ebu banye, na otu ị ga-esi dozie nke ọ bụla. Wee hazie otu ugboro silage ma ọ bụ hay: ahịhịa nri ole, mgbe ị ga-awa ya, na ihe ị ga-echekwa ya n'ime ya.",
          youCanNow: "ime silage ma ọ bụ hay ma chekwaa nri n'ụzọ na-egbochi iru mmiri, ebu na mycotoxin.",
          quickCheck: [
            { objective: "O4", q: "Gịnị bụ ihe kacha mkpa mgbe ị na-eme silage?", options: ["Ịhapụ ya ka ọ ghere oghe ka o kuo ume", "Ịkpapụ ikuku ma mechie ya ka ikuku ghara ịbanye", "Ịgbakwunye mmiri kwa ụbọchị", "Ichekwa ya n'anwụ"], answer: 1, why: "Silage na-adị mma naanị mgbe a kpapụrụ ikuku ma gbochie ya ịbanye, ka o nwee ike ịgba ụka." },
            { objective: "O4", q: "Akpa dairy meal nwere mkpụkọ isi awọ na-esi ísì ebu. Gịnị ka ị ga-eme?", options: ["Nye ya ehi na-enyeghị mmiri ara", "Gwakọta ya na nri ọhụrụ", "Nye ya ọkụkọ kama", "Enyela ya anụmanụ ọ bụla"], answer: 3, why: "Ebu nwere ike iburu mycotoxin nke na-emerụ anụmanụ ọ bụla ahụ ma nwee ike ịbanye na mmiri ara na akwa." }
          ]
        },
        {
          title: "Inye nri dịka ọkwa si dị: atụmatụ nri nwere akụkụ atọ",
          objectives: ["O5"],
          minutes: 5,
          goal: "Dee atụmatụ nri maka ọkwa ọ bụla nke otu ụdị anụmanụ.",
          text: [
            "Anụmanụ chọrọ nri dị iche iche n'ọkwa dị iche iche. Broiler: starter, wee finisher (ụfọdụ ndị ọrụ ugbo na-etinye grower n'etiti). Ọkụkọ na-eyi akwa: chick mash, wee growers mash, wee layers mash site n'oge ha na-amalite iyi akwa (point of lay), na calcium agbakwunyere maka mkpokoro akwa. Ezi: creep ma ọ bụ weaner feed, grower, finisher, wee nri pụrụ iche maka nne ezi dị ime na ndị na-enye ụmụ ara. Ehi mmiri ara: nwa ehi, nwa nne ehi (heifer), ehi na-akwụsị mmiri ara na oge mmiri ara, na concentrate dabara mmiri ara ehi ọ bụla na-enye. Gbanwee site n'otu nri gaa n'ọzọ n'ime ụbọchị ole na ole, ọ bụghị n'otu abalị.",
            "Jiri atụmatụ dị mfe nwere akụkụ atọ maka ọkwa ọ bụla. Akụkụ 1, nri isi: ihe ka ukwuu n'ime nri ahụ. Maka ehi na ewu, ọ bụ ahịhịa nri (ịta ahịhịa n'ọhịa, Napier, hay, silage, osisi ọka kpọrọ nkụ); maka ezi na ọkụkọ, ọ bụ mkpụrụ nri ike na bran dị na mash. Akụkụ 2, concentrate: akụkụ nwere ọtụtụ protein (oilseed cake, fish meal, dairy meal a zụtara ma ọ bụ mash zuru ezu) nke na-agbakwunye ihe na-adịghị na nri isi. Akụkụ 3, ihe mgbakwunye: nnu, mineral, vitamin na calcium, e ji dịka label si kwuo. Tinyekwa mmiri dị ọcha oge niile.",
            "Inye nri dịka ọkwa si dị na-azọpụta ego: ị naghị akwụ ụgwọ starter feed nwere protein dị elu maka anụmanụ na-achọkwaghị ya. Tụọ ma ọ bụ chọpụta ole ọkwa ọ bụla na-eri ma lekwasị anụmanụ ndị ahụ anya: ọ bụrụ na ha dị ahụ ọkpụkpụ, na-eyi obere akwa ma ọ bụ na-enye obere mmiri ara, rịọ onye ọrụ extension gị ka o lelee atụmatụ ahụ. Akwụkwọ dị n'ahụ akpa nri ma ọ bụ akwụkwọ nduzi ụlọ ọrụ na-ekpu ọkụkọ ma ọ bụ nke ụdị anụmanụ ahụ na-ekwu mgbe ị ga-agbanwe nri maka ụdị anụmanụ a na-ere n'ahịa."
          ],
          steps: ["Họrọ otu ụdị anụmanụ.", "Depụta ọkwa ya site na nwa ruo ahịa, oge iyi akwa ma ọ bụ oge mmiri ara.", "Maka ọkwa ọ bụla, dee nri isi.", "Gbakwunye concentrate nke na-emejupụta ya.", "Gbakwunye ihe mgbakwunye na mmiri.", "Dee mgbe ị ga-agbanwe gaa n'ọkwa ọzọ, ma gbanwee ya n'ime ụbọchị ole na ole."],
          words: [["Nri isi (basal feed)", "akụkụ bụ isi nke nri: ahịhịa nri maka ruminant, mkpụrụ nri ike maka ezi na ọkụkọ."], ["Point of lay", "afọ ndụ ụmụ ọkụkọ nwanyị na-achọ ịmalite iyi akwa."], ["Oge mmiri ara (lactation)", "oge anụmanụ nwanyị na-emepụta mmiri ara."]],
          slides: [
            { title: "Nri na-agbanwe dịka ọkwa si dị", bullets: ["Broiler: starter, wee finisher", "Ọkụkọ na-eyi akwa: chick, growers, wee layers mash", "Ezi: weaner, grower, finisher, nne ezi; ehi mmiri ara: dịka mmiri ara"] },
            { title: "Atụmatụ nwere akụkụ atọ", bullets: ["1. Nri isi: ahịhịa nri, ma ọ bụ mkpụrụ nri na bran", "2. Concentrate: mgbakwunye protein", "3. Ihe mgbakwunye: nnu, mineral, vitamin, calcium"] },
            { title: "Mmiri, na gbanwee nwayọọ", bullets: ["Mmiri dị ọcha oge niile", "Gbanwee nri n'ime ụbọchị ole na ole"] },
            { title: "Gịnị mere o ji azọpụta ego", bullets: ["Ọ dịghị starter dị oke ọnụ maka anụmanụ na-achọghị ya", "Lelee ahụ anụmanụ, akwa na mmiri ara"] }
          ],
          sources: [FEEDIPEDIA],
          tryIt: "Họrọ otu ụdị anụmanụ. Dee tebụl nwere otu ahịrị maka ọkwa ọ bụla na kọlụm anọ: nri isi, concentrate, ihe mgbakwunye, na mgbe ị ga-agbanwe gaa n'ọkwa ọzọ.",
          youCanNow: "ide atụmatụ nri dịka ọkwa si dị nwere nri isi, concentrate na ihe mgbakwunye maka ọkwa ọ bụla.",
          quickCheck: [
            { objective: "O5", q: "N'atụmatụ nri nwere akụkụ atọ maka ehi mmiri ara, gịnị bụ nri isi?", options: ["Ahịhịa nri dị ka ahịhịa Napier, hay ma ọ bụ silage", "Premix mineral", "Dairy meal", "Nnu"], answer: 0, why: "Maka ruminant, ahịhịa nri bụ ihe ka ukwuu na nri ha; concentrate na ihe mgbakwunye na-emejupụta ya." },
            { objective: "O5", q: "Ụmụ ọkụkọ nwanyị gị (pullets) fọrọ nke nta ka ha ruo point of lay. Kedu nri ha ga-agbanwe gaa?", options: ["Broiler starter", "Chick mash", "Layers mash, e gbanwere n'ime ụbọchị ole na ole", "Naanị mkpụrụ ọka"], answer: 2, why: "Layers mash na-enye calcium agbakwunyere a chọrọ maka mkpokoro akwa; gbanwee ya nwayọọ n'ime ụbọchị ole na ole." }
          ]
        },
        {
          title: "Ịgbakọ ego nri gị kwa kg ibu ma ọ bụ lita mmiri ara",
          objectives: ["O6"],
          minutes: 6,
          goal: "Gbakọọ ego nri gị kwa kg, na ego nri kwa kg ibu, tree akwa ma ọ bụ lita mmiri ara.",
          text: [
            "Nzọụkwụ 1, ego kwa kg nke ngwakọta. Mụbaa kg nke ihe nri ọ bụla site n'ọnụ ahịa ya, gbakọta ha ma kee site na kg niile. Ọmụmaatụ site n'ọnụ ahịa shilling Kenya e chepụtara echepụta: kg 74.3 ọka na KES 40 = 2,972; kg 25.7 soybean cake na KES 90 = 2,313. Ngụkọta KES 5,285 maka kg 100, ya bụ KES 52.85 kwa kg. Gbakwunye ego igwe nri, ibufe ya na premix ma ọ bụrụ na ị na-akwụ ụgwọ ha.",
            "Nzọụkwụ 2, nri kwa otu ngwaahịa. Maka anụ, dee nri e riri na ibu e nwetara: ọ bụrụ na ezi 10 riri kg 900 nke grower feed ma gbaa ibu kg 300, kg ibu ọ bụla were kg 3 nri (feed conversion ratio, FCR). Ego nri kwa kg ibu = 3 x KES 52.85 = KES 158.55. Maka akwa: nri ọkụkọ niile riri n'otu izu x ọnụ ahịa kwa kg, kee site na tree e chịkọtara. Maka mmiri ara: ego nri ehi ahụ kwa ụbọchị (ahịhịa nri gbakwunye dairy meal) kee site na lita o nyere n'ụbọchị ahụ.",
            "Jiri ọnụọgụ ndị a mee mkpebi. Tụnyere ego nri kwa kg ibu ma ọ bụ kwa lita na ọnụ ahịa ị na-ere ya. Nwaa ihe nri dị ọnụ ala karịa, dị ka legume ahịhịa nri karịa ma ọ bụ bran dị n'obodo, mana lelee na ọ ka ruru ọkwa a chọrọ ma na-ebelataghị uto ma ọ bụ mmiri ara. Rụọ ọrụ n'ego obodo gị, ma ọ bụ NGN, GHS ma ọ bụ XOF: usoro ahụ bụ otu. Ọnụ ahịa na-agbanwe, ya mere melite mpempe akwụkwọ ahụ oge ọ bụla ị zụrụ ihe."
          ],
          steps: ["Depụta ihe nri ọ bụla, kg ya n'ime kg 100 na ọnụ ahịa ya kwa kg.", "Mụbaa kg site n'ọnụ ahịa maka ihe nri ọ bụla ma gbakọta ha.", "Gbakwunye ego igwe nri, ibufe ya na premix; kee site na kg niile.", "Dee nri e riri na ibu e nwetara, akwa ma ọ bụ mmiri ara e mepụtara.", "Ego nri kwa kg ibu = FCR x ego kwa kg nri.", "Ego nri kwa lita ma ọ bụ tree = ego nri maka ụbọchị ma ọ bụ izu / lita ma ọ bụ tree."],
          words: [["Feed conversion ratio (FCR)", "kg nri a chọrọ maka kg 1 nke ibu e nwetara; nke dị ala ka mma."], ["Ego kwa kg ibu", "ego nri e mefuru maka kg ọ bụla anụmanụ ahụ toro."], ["Tree akwa (tray)", "tree nwere akwa 30, ọnụọgụ a na-ejikarị ere akwa."]],
          slides: [
            { title: "Nzọụkwụ 1: ego kwa kg nke ngwakọta", bullets: ["kg x ọnụ ahịa maka ihe nri ọ bụla, wee gbakọta", "Ọmụmaatụ: KES 5,285 kwa kg 100 = KES 52.85 kwa kg", "Gbakwunye igwe nri, ibufe na premix"] },
            { title: "Nzọụkwụ 2: nri kwa kg ibu", bullets: ["Kg 900 nri / kg 300 ibu = FCR nke 3", "3 x KES 52.85 = KES 158.55 kwa kg ibu"] },
            { title: "Akwa na mmiri ara", bullets: ["Akwa: ego nri kwa izu / tree e chịkọtara", "Mmiri ara: ego nri kwa ụbọchị / lita n'ụbọchị ahụ"] },
            { title: "Jiri ya mee mkpebi", bullets: ["Tụnyere ya na ọnụ ahịa ị na-ere", "Nwaa ihe nri dị n'obodo dị ọnụ ala; lelee ọkwa a chọrọ", "Melite ya mgbe ọ bụla ị zụrụ ihe; ọnụ ahịa bụ ọmụmaatụ"] }
          ],
          tryIt: "Ọrụ ikpeazụ: mee nri e gbakọrọ ego ya maka otu ụdị anụmanụ. Dee atụmatụ nwere akụkụ atọ, jiri Pearson square hazie concentrate ahụ, depụta kg n'ime kg 100, gbakọọ ego ya kwa kg site n'ọnụ ahịa dị n'obodo gị, ma gbakọọ ego nri kwa kg ibu, kwa tree akwa ma ọ bụ kwa lita mmiri ara.",
          youCanNow: "ịgbakọ ego nri kwa kg ma chọpụta ego nri gị kwa kg ibu, tree akwa ma ọ bụ lita mmiri ara.",
          quickCheck: [
            { objective: "O6", q: "Kg 100 nke ngwakọta na-efu XOF 20,000 n'ozuzu. Ego ole kwa kg?", options: ["XOF 2,000", "XOF 20", "XOF 100", "XOF 200"], answer: 3, why: "20,000 / kg 100 = XOF 200 kwa kg." },
            { objective: "O6", q: "Ọkụkọ broiler riri kg 400 nri ma gbaa ibu kg 250. Gịnị bụ FCR?", options: ["1.6", "0.6", "2.5", "4.0"], answer: 0, why: "FCR = nri e riri / ibu e nwetara = 400 / 250 = 1.6." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Chekwaa, hazie ma gbakọọ ego nri gị",
        questions: [
          { objective: "O4", q: "Gịnị mere ndị ọrụ ugbo ji agbakwunye molasses mgbe ha na-eme silage ahịhịa Napier?", options: ["Napier nwere obere shuga, molasses na-enyekwa ya aka ịgba ụka", "Ime ka ọ dị ụtọ maka ụmụaka", "Igbochi mmiri ozuzo", "Ịdochi mkpuchi plastik"], answer: 0, why: "Ahịhịa nwere obere shuga anaghị agba ụka nke ọma; molasses na-enye shuga a chọrọ maka ịgba ụka." },
          { objective: "O4", q: "Kedu ụlọ nri na-echebe nri kacha mma pụọ n'ebu?", options: ["Akpa n'ala efu n'akụkụ mgbidi", "Akpa n'èzí n'okpuru osisi", "Akpa n'elu pallet, pụọ na mgbidi, n'okpuru elu ụlọ na-adịghị ehi mmiri", "Ikpo nri ghere oghe n'ụlọ anụmanụ"], answer: 2, why: "Idebe akpa ka ha dị nkụ ma pụọ n'ala na mgbidi na-egbochi iru mmiri, ebu na mycotoxin." },
          { objective: "O5", q: "Gịnị bụ akụkụ atọ nke atụmatụ nri n'ihe ọmụmụ a?", options: ["Nri ụtụtụ, ehihie na abalị", "Nri isi ma ọ bụ ahịhịa nri, concentrate, na ihe mgbakwunye", "Naanị ahịhịa, mmiri na nnu", "Naanị starter, grower na finisher"], answer: 1, why: "Atụmatụ ahụ bụ nri isi, concentrate na ihe mgbakwunye, gbakwunyere mmiri, maka ọkwa ọ bụla." },
          { objective: "O6", q: "Nri na-efu KES 50 kwa kg, FCR bụkwa 3. Ego nri ole kwa kg ibu?", options: ["KES 53", "KES 17", "KES 300", "KES 150"], answer: 3, why: "Ego nri kwa kg ibu = FCR x ọnụ ahịa kwa kg = 3 x 50 = KES 150." },
          { objective: "O6", q: "Nri ehi na-efu NGN 3,000 kwa ụbọchị ọ na-enyekwa lita 10. Ego nri ole kwa lita?", options: ["NGN 30", "NGN 300", "NGN 3,000", "NGN 30,000"], answer: 1, why: "3,000 / lita 10 = NGN 300 kwa lita." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Nri Anụ Ụlọ na Ịgwakọta Nri site n'Ihe Dị n'Obodo",
    questions: [
      { objective: "O1", q: "Gịnị bụ mkpa anọ bụ isi anụmanụ na-enweta site na nri na mmiri?", options: ["Ike, protein, mineral na vitamin, na mmiri", "Ahịhịa, nnu, shuga na mmanụ", "Ọka, agwa, osikapa na mmiri ara", "Okpomọkụ, ìhè, ikuku na ala"], answer: 0, why: "Ike, protein, mineral na vitamin, na mmiri bụ mkpa anọ ahụ." },
      { objective: "O1", q: "Kedu nri na-enyekarị calcium maka mkpokoro akwa?", options: ["Bran ọka", "Ahịhịa Napier", "Limestone ma ọ bụ mkpokoro", "Molasses"], answer: 2, why: "Limestone na mkpokoro e gweriri egwe bụ ebe calcium si maka ọkụkọ na-eyi akwa." },
      { objective: "O1", q: "Kedu anụmanụ chọrọ roughage dị ka isi nri ha?", options: ["Broiler", "Ọkụkọ na-eyi akwa", "Ụmụ ezi a napụrụ ara", "Ehi, ewu na atụrụ"], answer: 3, why: "Ruminant na-agbari roughage; ọ bụ isi nri ha." },
      { objective: "O2", q: "Ihe dị ka protein ole dị na mkpụrụ ọka?", options: ["Ihe dị ka pasentị 8 ruo 10", "Ihe dị ka pasentị 44", "Ihe dị ka pasentị 60", "Ọ dịghị"], answer: 0, why: "Feedipedia na-enye ọka protein dị ihe dị ka pasentị 8 ruo 10.5, ya mere ọ bụ nri ike karịsịa." },
      { objective: "O2", q: "Kedu n'ime ndị a bụ nri protein?", options: ["Akpụ a mịrị amị", "Bran wheat", "Fish meal", "Osisi ọka kpọrọ nkụ"], answer: 2, why: "Fish meal nwere ọtụtụ protein; ndị ọzọ bụ ike ma ọ bụ roughage karịsịa." },
      { objective: "O2", q: "Kedu uru usoro push-pull nke icipe na-enye onye na-azụ ehi mmiri ara?", options: ["Ọ na-anọchi mmiri", "Desmodium na Napier ma ọ bụ Brachiaria na-enye ahịhịa nri dị mma nke ukwuu", "Ọ na-eme ka mineral ghara ịdị mkpa", "Ọ na-eme ehi ka ha bụrụ ruminant"], answer: 1, why: "Push-pull na-echebe ọka, osisi ndị a na-akọ ya na ya bụkwa ahịhịa nri dị mma nke ukwuu." },
      { objective: "O2", q: "Gịnị ka ị ga-elele mgbe ị na-azụ fish meal?", options: ["Na o si n'aka onye a pụrụ ịtụkwasị obi ma e tinyeghị ájá ma ọ bụ nnu n'ime ya", "Na ọ kacha dị ọnụ ala", "Na ọ dị mmiri mmiri", "Na ọ na-esi ísì ebu"], answer: 0, why: "Ịdị mma fish meal na-adị iche iche, a pụkwara ịgwakọ ya ihe ọzọ, ya mere zụta ya n'aka ndị a pụrụ ịtụkwasị obi." },
      { objective: "O3", q: "Pearson square na-ahazi ihe ole dị na nri n'otu oge?", options: ["Ha niile", "Atọ", "Abụọ", "Otu"], answer: 3, why: "Ọ na-ahazi otu ihe dị na nri, na-abụkarị protein, n'etiti nri abụọ." },
      { objective: "O3", q: "Ọka (pasentị 9) na soybean cake (pasentị 44), ọkwa a chọrọ 18. Akụkụ ole nke soybean cake?", options: ["26", "9", "35", "44"], answer: 1, why: "18 - 9 = akụkụ 9 nke soybean cake." },
      { objective: "O3", q: "Gịnị mere i jighị ike iji ọka (pasentị 9) na bran (pasentị 10) ruo protein pasentị 18?", options: ["Ọkwa a chọrọ ga-adị n'etiti ọnụọgụ nri abụọ ahụ", "Bran dị oke ọnụ ala", "Square ahụ na-arụ ọrụ naanị maka ehi", "Ọka enweghị protein"], answer: 0, why: "18 karịrị nri abụọ ahụ, ya mere ọ dịghị ngwakọta ha ga-eru ya." },
      { objective: "O3", q: "Mgbe square ahụ gasịrị, olee otu ị ga-esi lelee ngwakọta gị?", options: ["Jụọ onye agbata obi", "Sie ya ísì", "kg x pasentị protein nke nri ọ bụla ga-ezuru ọkwa a chọrọ", "Tụọ ibu anụmanụ n'otu ụbọchị ahụ"], answer: 2, why: "Ịgbakọta protein si n'ihe nri ọ bụla na-egosi na ngwakọta ahụ ruru ọkwa a chọrọ." },
      { objective: "O4", q: "Gịnị bụ nzọụkwụ anọ nke silage FAO na-akụzi?", options: ["Bee, saa, kpoo, kpọọ ọkụ", "Bee obere obere, jupụta ngwa ngwa, kpakọọ, mechie", "Kọọ, gbaa mmiri, wepụ ahịhịa, ree", "Gbanye mmiri, sie, mee ka ọ jụọ, tinye n'akpa"], answer: 1, why: "Ibe obere obere, ijupụta ngwa ngwa, ịkpakọ na imechi na-eme ezigbo silage." },
      { objective: "O4", q: "Gịnị bụ mycotoxin?", options: ["Vitamin dị na nri", "Ụdị ahịhịa", "Ihe mgbakwunye protein", "Nsi a na-adịghị ahụ anya nke ebu na-eme na nri"], answer: 3, why: "Ebu nwere ike ime mycotoxin dị ka aflatoxin, nke na-emerụ anụmanụ ahụ ma nwee ike ịbanye na mmiri ara." },
      { objective: "O4", q: "Kedu iwu na-enyere aka idebe nri e chekwara n'enweghị nsogbu?", options: ["Jiri nri kacha ochie buru ụzọ", "Chekwaa akpa n'ala n'akụkụ mgbidi", "Debe nri n'ụlọ anụmanụ", "Gwakọta nri nwere ebu na nri ọhụrụ"], answer: 0, why: "Nke batara mbụ na-apụ mbụ na-egbochi nri ịnọdụ ruo mgbe ọ mebiri." },
      { objective: "O5", q: "Gịnị mere a ga-eji nye nri dịka ọkwa si dị?", options: ["Ọ na-eme ka anụmanụ rie karịa", "Ọkwa ọ bụla nwere mkpa dị iche, ya mere ị naghị akwụ ụgwọ ihe ha na-achọghị", "Ụlọ ọrụ nri chọrọ ya", "Ọ na-eme ka mmiri ghara ịdị mkpa"], answer: 1, why: "Ime ka nri dabara ọkwa na-egbo mkpa ma na-azọpụta ego." },
      { objective: "O5", q: "Olee otu ị ga-esi gbanwee site n'otu nri gaa n'ọzọ?", options: ["N'otu abalị", "Naanị mgbe anụmanụ na-arịa ọrịa", "N'ime ụbọchị ole na ole", "Agbanwela nri mgbe ọ bụla"], answer: 2, why: "Mgbanwe nwayọọ nwayọọ na-egbochi inye afọ anụmanụ nsogbu na ime ka o rie obere." },
      { objective: "O5", q: "Maka ezi na ọkụkọ, gịnị bụ akụkụ nri isi nke nri ha?", options: ["Ahịhịa Napier", "Nnu", "Fish meal", "Mkpụrụ nri ike na bran dị na mash"], answer: 3, why: "Ezi na ọkụkọ enweghị ike ịgbari roughage nke ukwuu, ya mere mkpụrụ nri na bran bụ isi nri ha." },
      { objective: "O6", q: "Gịnị ka feed conversion ratio nke 2 pụtara?", options: ["Kg 2 nri maka kg 1 ọ bụla nke ibu e nwetara", "Nri ugboro abụọ kwa ụbọchị", "Anụmanụ 2 kwa ebe nri", "Protein pasentị 2"], answer: 0, why: "FCR bụ kg nri a chọrọ maka kg 1 nke ibu." },
      { objective: "O6", q: "Kg 50 ọka na GHS 4 na kg 50 bran na GHS 2. Ego ole kwa kg nke ngwakọta ahụ?", options: ["GHS 6", "GHS 3", "GHS 300", "GHS 2"], answer: 1, why: "(50 x 4) + (50 x 2) = 300 maka kg 100, ya bụ GHS 3 kwa kg." },
      { objective: "O6", q: "Ọkụkọ na-eyi akwa gị na-eri nri na-efu KES 7,000 kwa izu, ị na-achịkọtakwa tree 70. Ego nri ole kwa tree?", options: ["KES 10", "KES 70", "KES 100", "KES 490"], answer: 2, why: "7,000 / tree 70 = KES 100 nri kwa tree." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [0, 2, 4, 7, 8, 12, 14, 17, 18] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ nke nri ahụ ma lelee ya ọzọ.",
    criteria: [
      { name: "Ụdị anụmanụ, ọkwa na atụmatụ nwere akụkụ atọ", objective: "O5", notYet: "Ọ dịghị ụdị anụmanụ ma ọ bụ ọkwa a kpọrọ aha, ma ọ bụ otu n'ime nri isi, concentrate na ihe mgbakwunye adịghị.", meets: "Ọ na-akpọ aha ụdị anụmanụ na ọkwa ya ma nye nri isi, concentrate, ihe mgbakwunye na mmiri.", exceeds: "Ọ na-egosikwa ọkwa na-esote na mgbe na otu a ga-esi gbanwee nri." },
      { name: "Ihe nri e kewara nke ọma ma dabara", objective: "O2", notYet: "E kewaghị ihe nri nke ọma ma ọ bụ ha nwere nsogbu (dịka ọmụmaatụ nwere ebu, ma ọ bụ cotton seed cake n'enweghị oke maka ọkụkọ).", meets: "Ọ na-eji ihe nri dị n'obodo e kewara nke ọma ka ha bụrụ ike, protein, roughage na ihe mgbakwunye.", exceeds: "Ọ na-eji legume ma ọ bụ bran dị n'obodo dị ọnụ ala ma kọwaa otu ọ ka si eru ọkwa a chọrọ." },
      { name: "Pearson square", objective: "O3", notYet: "Ọ dịghị mgbakọ e gosiri, ma ọ bụ ọkwa a chọrọ adịghị n'etiti nri abụọ ahụ.", meets: "E sere square ahụ, akụkụ na kg n'ime kg 100 ziri ezi, nlele ahụ ezurukwa ọkwa a chọrọ n'ime pasentị 0.5.", exceeds: "Ọ na-ebu ụzọ hapụ ohere maka ihe ndị a kara aka dị ka premix, wee hazie ndị fọdụrụ." },
      { name: "Ịgbakọ ego", objective: "O6", notYet: "Ego kwa kg adịghị ma ọ bụ mgbakọ ahụ ezighi ezi.", meets: "Ego ziri ezi kwa kg nke ngwakọta na ego nri kwa kg ibu, tree akwa ma ọ bụ lita mmiri ara, n'ego obodo.", exceeds: "Ọ na-atụnyere ya na ọnụ ahịa ire ma gosi otu ụzọ isi belata ego ahụ." },
      { name: "Ịdị mma nri na ichekwa ya", objective: "O4", notYet: "Ọ dịghị ihe o kwuru banyere ebe a na-edebe nri ma ọ bụ otu esi egbochi ebu.", meets: "Ọ na-ekwu ebe a na-echekwa nri na otu e si edebe ya ka ọ dị nkụ ma ghara inwe ebu, nke ochie buru ụzọ.", exceeds: "Ọ gụnyere atụmatụ silage ma ọ bụ hay maka oge ọkọchị." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ndị na-amụ ihe gwakọtara ma ọ bụ meziri opekata mpe otu nri site na Pearson square n'ime ụbọchị 30 (nnyocha nsochi)",
      "Ndị na-amụ ihe mere silage ma ọ bụ hay tupu oge ọkọchị na-esote",
      "Mgbanwe n'ego nri kwa kg ibu, kwa tree akwa ma ọ bụ kwa lita mmiri ara nke ndị na-amụ ihe kọrọ mgbe ọnwa atọ gasịrị",
      "Mbelata n'akụkọ nri nwere ebu na ọrịa sitere na nri n'anụ ụlọ na ọkụkọ ndị na-amụ ihe"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Akwụkwọ, mkpịsị ode na igwe mgbakọ dị n'ekwentị; spreadsheet n'ekwentị bụ nhọrọ",
      "Ọnụ ahịa dị n'obodo maka nri 8 ruo 10, na label ma ọ bụ ọnụọgụ protein ha site n'aka ndị na-ere ha",
      "Maka ngosi n'otu: ahịhịa nri e bere ebe, akpa ma ọ bụ tube plastik siri ike, na igwe ọtụtụ",
      "Ihe dị ka nkeji 70 ruo 80 n'ozuzu, n'oge nkenke: nkuzi, omume, nnwale na ọrụ ikpeazụ"
    ],
    facilitatorNotes: [
      "Tupu nnọkọ ahụ, chịkọta ọnụ ahịa nri dị n'obodo na ọnụọgụ protein (label ndị na-ere, ụlọ nyocha nri ma ọ bụ ọfịs extension) ka ndị na-amụ ihe were ezi ọnụọgụ mee omume.",
      "Meenụ Pearson square ọnụ n'elu bọọdụ ma ọ bụ flip chart site n'otu ọmụmaatụ dị n'obodo, wee hapụ ka ndị mmadụ abụọ abụọ mee nke abụọ.",
      "Mee ngosi silage n'akpa ma ọ bụrụ na oge kwere, ma meghee ya na ndị otu ahụ mgbe izu ole na ole gasịrị.",
      "Enyela ọnụọgụ nri nwere ọgwụ, ihe mgbakwunye ma ọ bụ ọgwụ; zigara ajụjụ ndị ahụ dọkịta anụmanụ na label.",
      "Jiri rubric tụọ akara nri e gbakọrọ ego ya, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};
