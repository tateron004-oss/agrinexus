"use strict";

// Koach Learn course (Igbo translation of agriculture-africa/agri-livestock-health.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.
// Safety rule kept: the course never gives drug or vaccine doses; it tells students to follow the vet and the label.

const WOAH_ND = { name: "World Organisation for Animal Health (WOAH, ụlọ ọrụ ụwa maka ahụike anụmanụ): ọrịa Newcastle", url: "https://www.woah.org/en/disease/newcastle-disease/" };
const FAO_ND_VILLAGE = { name: "FAO: Ọrịa Newcastle n'ọkụkọ obodo", url: "https://www.fao.org/4/y5162e/y5162e05.htm" };
const FAO_BIOSEC = { name: "FAO: Ezi usoro biosecurity n'obere ugbo ọkụkọ azụmahịa na ọkụkọ na-awagharị awagharị na Kenya", url: "https://www.fao.org/4/al838e/al838e00.pdf" };
const FAO_PRUDENT = { name: "FAO: Iji ọgwụ nje (antimicrobials) nke ọma na ezi na ọkụkọ (dọkịta anụmanụ, atụmatụ ahụike, oge nchere)", url: "https://www.fao.org/3/ca6729en/CA6729EN.pdf" };
const VCN = { name: "Veterinary Council of Nigeria (ndepụta aha ndị dọkịta anụmanụ e debanyere aha)", url: "https://vcn.gov.ng" };

module.exports = {
  id: "agri-livestock-health-ig",
  lang: "ig",
  translationOf: "agri-livestock-health",
  category: "Agriculture (Africa)",
  name: "Ahụike na Nlekọta Anụ Ụlọ",
  skills: "Ịmata anụ dị mma na anụ na-arịa ọrịa, Inye nri na mmiri nke ọma, Idebe ụlọ anụ ọcha na nchekwa, Ịhazi ọgwụ mgbochi na dọkịta anụmanụ, Ichebe ọkụkọ pụọ n'ọrịa Newcastle, Ịchịkwa ikpuru na akọrọ ma debe ndekọ ahụike",
  outcome: "ijikwa atụmatụ ahụike dị mfe maka ehi, ewu ma ọ bụ ọkụkọ gị: ilele anụ ọ bụla kwa ụbọchị ma ọ na-arịa ọrịa, inye ha nri na mmiri nke ọma, idebe ụlọ ha ọcha, ịgbaso usoro ọgwụ mgbochi gị na dọkịta anụmanụ mere, igbochi ọrịa Newcastle na ikpuru, idekọ ọgwụgwọ ọ bụla, na ịmata mgbe ị ga-akpọ dọkịta anụmanụ.",
  about: [
    "Ihe ọmụmụ a bụ maka obere ndị na-azụ anụ na ndị na-eto eto n'ịzụ anụ, ndị na-achị anụ, ndị na-azụ ọkụkọ, ndị ọrụ ugbo na ndị ọrụ ugbo na-eto eto na Kenya, Nigeria, Ghana na n'Afrịka niile, ndị na-azụ ehi, ewu, atụrụ ma ọ bụ ọkụkọ. Anụ dị mma na-eto ngwa ngwa, na-enye mmiri ara na akwa karịa, ma na-erekwa ọnụ karịa n'ahịa; otu ọrịa na-efe efe nwere ike ikpochapụ ego e chekwara ọtụtụ afọ.",
    "Isi 1 na-ekwu maka nlekọta kwa ụbọchị: ịmata anụ dị mma na anụ na-arịa ọrịa, nri na mmiri, na ụlọ anụ na ịdị ọcha. Isi 2 na-ekwu maka igbochi na ịgwọ ọrịa: usoro ọgwụ mgbochi na dọkịta anụmanụ, biosecurity ọkụkọ na ọrịa Newcastle, na ikpuru, ndekọ na mgbe ị ga-akpọ dọkịta anụmanụ.",
    "Ihe ọmụmụ a anaghị enye ọnụọgụ ọgwụ ma ọ bụ ọgwụ mgbochi. Ọrịa, ọgwụ mgbochi na ọgwụ a kwadoro dị iche site na mba gaa na mba, site n'ógbè gaa n'ógbè, ya mere gbasoo mgbe niile dọkịta anụmanụ obodo gị ma ọ bụ onye ọrụ ahụike anụmanụ, na ihe e dere n'akara ọgwụ ahụ. Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise ma na-ejedebe n'ọrụ ị ga-eme n'anụ gị. Nnwale ihe ọmụma na-emechi isi ọ bụla, ule nwere ajụjụ 20 na-emechikwa ihe ọmụmụ a."
  ],
  finalTask: "Dee atụmatụ ahụike peeji otu maka anụ gị (nke gị, ma ọ bụ ọmụmaatụ dị ka ehi mmiri ara 3 na Kiambu, ewu 15 na Kano, ma ọ bụ ọkụkọ na-yi akwa 200 dị nso na Kumasi): nlele ahụike gị kwa ụbọchị, atụmatụ nri na mmiri gụnyere oge ọkọchị, iwu abụọ gbasara ụlọ anụ na ịdị ọcha, usoro ọgwụ mgbochi gị na dọkịta anụmanụ kwekọrịtara, iwu biosecurity gị (maka ọkụkọ: ọrịa Newcastle), otu ị ga-esi chịkwaa ikpuru na akọrọ, ndekọ ị ga-edebe, na ihe ịrịba ama ndị pụtara na ị ga-akpọ dọkịta anụmanụ ozugbo, ya na aha na nọmba ekwentị dọkịta anụmanụ ahụ.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Obere ndị na-azụ anụ na ndị na-eto eto n'ịzụ anụ, ndị na-achị anụ, ndị na-azụ ọkụkọ, ndị ọrụ ugbo na ndị ọrụ ugbo na-eto eto na Kenya, Nigeria, Ghana na n'Afrịka niile, ndị na-azụ ehi, ewu, atụrụ ma ọ bụ ọkụkọ.",
    startingPoint: "Ọtụtụ na-ele anụ ha anya kwa ụbọchị ma na-agwọ ọrịa mgbe ha hụrụ ya, na-ejikarị ọgwụ ha zụrụ n'enweghị ndụmọdụ dọkịta anụmanụ. Ole na ole na-agbaso usoro ọgwụ mgbochi e dere ede, na-edebe iwu biosecurity, na-edekọ ọgwụgwọ na oge nchere, ma ọ bụ na-ahazi nri na mmiri maka oge ọkọchị.",
    gap: "Otu ọrịa na-efe efe nwere ike ikpochapụ ego e chekwara ọtụtụ afọ, nri na-adịghị mma, ụlọ ruru unyi, ikpuru na iji ọgwụ n'ụzọ na-ezighi ezi na-ebelata mmiri ara, akwa na uto, ma nwee ike imerụ ndị mmadụ ahụ. Atụmatụ ahụike dị mfe e dere ede ya na dọkịta anụmanụ na-eme ka anụ nọrọ n'ahụike, na-egbochi mfu, ma na-eme ka nri si n'ugbo ahụ dị mma iri.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ; a na-akọwa okwu ahụike anụmanụ ọ bụla",
      "Ngwaọrụ: ekwentị nkịtị na akwụkwọ ndetu maka ndekọ na nọmba dọkịta anụmanụ",
      "Enweghị ọnụọgụ ọgwụ ma ọ bụ ọgwụ mgbochi: ọrịa, ọgwụ mgbochi na ọgwụ a kwadoro dị iche site n'ógbè gaa n'ógbè; ndị na-amụ ihe na-agbaso dọkịta anụmanụ ha na akara ọgwụ",
      "Nchekwa: ụfọdụ ọrịa anụmanụ na-arịa ndị mmadụ; emepela ozu anụ nwụrụ na mberede ma ọbara na-asọpụta",
      "Oge: nkuzi ihe dị ka nkeji 5 nke dabara n'etiti ọrụ nlekọta anụ"
    ],
    prerequisites: "Ọ dịghị."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe ị na-elele anụ gị kwa ụbọchị", action: "ịmata ihe ịrịba ama nke anụ dị mma na nke anụ na-arịa ọrịa ma kewapụ nke nwere ike ịna-arịa ọrịa", standard: "na-akpọ opekata mpe ihe ịrịba ama ịdọ aka na ntị ise ma na-akpọtụrụ dọkịta anụmanụ ma ọ bụ onye ọrụ ahụike anụmanụ" },
    { id: "O2", condition: "Maka anụ gị n'afọ niile", action: "ịhazi nri na mmiri dị ọcha, gụnyere oge ọkọchị", standard: "n'enweghị nri ebu kpuchiri, na-agbanwekwa nri nwayọọ nwayọọ" },
    { id: "O3", condition: "Maka ụlọ anụ gị", action: "ilele ụlọ anụ ma tọọ iwu ịdị ọcha maka ugbo", standard: "na ụlọ kpọrọ nkụ, nwere ndò, na-adịghị juputa, na-edebe anụ ọhụrụ iche ma na-ekewapụ anụ na-arịa ọrịa" },
    { id: "O4", condition: "Ya na dọkịta anụmanụ e debanyere aha ma ọ bụ onye ọrụ ahụike anụmanụ", action: "ikwekọrịta n'usoro ọgwụ mgbochi e dere ede ma debe ọgwụ mgbochi ka ọ jụrụ oyi ma ka oge ya agafebeghị", standard: "na-egosi ọgwụ mgbochi ọ bụla, anụ ndị ahụ, afọ ha na mgbe a ga-eme ya ọzọ" },
    { id: "O5", condition: "Maka igwe ọkụkọ", action: "ịtọ iwu biosecurity na atụmatụ maka mgbe ọrịa Newcastle bilitere", standard: "na-agba ọgwụ mgbochi dị ka usoro dọkịta anụmanụ si dị, na ihe a ga-eme ma ọkụkọ nwụọ na mberede" },
    { id: "O6", condition: "Maka igwe anụ gị", action: "ịhazi nchịkwa ikpuru na akọrọ ya na dọkịta anụmanụ gị, debe ndekọ ọgwụgwọ ma depụta ihe ịrịba ama ndị chọrọ dọkịta anụmanụ ozugbo", standard: "na-edekọ ọgwụgwọ ọ bụla na oge nchere ya" }
  ],
  chapters: [
    {
      name: "Isi 1: Nlekọta kwa ụbọchị",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ihe ịrịba ama nke anụ dị mma na nke anụ na-arịa ọrịa",
          minutes: 5,
          goal: "Mee nlele ahụike ngwa ngwa kwa ụbọchị ma chọpụta anụ nwere ike ịna-arịa ọrịa.",
          text: [
            "Ị maara anụ gị karịa onye ọ bụla. Ilele ha anya kwa ụbọchị, n'oge inye nri ma ọ bụ ịmị mmiri ara, na-achọpụta ọrịa n'oge, mgbe ọgwụgwọ ya kacha dị ọnụ ala na tupu ọ gbasaa.",
            "Anụ dị mma na-amụ anya ma na-achọ ịmata ihe, na-eguzo ma na-eje ije nke ọma, na-eri ma na-aṅụ nke ọma; ehi, ewu na atụrụ na-ataghachi nri (chewing the cud) mgbe ha na-ezu ike. Anya ya na-egbuke egbuke ma dị ọcha, imi ya dị ọcha, ajị ma ọ bụ nku ya dị larịị ma na-egbuke, iku ume ya dị jụụ, nsị na mamịrị ya dịkwa ka o kwesịrị. Ọkụkọ nne dị mma na-agagharị agagharị, nwere ọkpọ isi na-acha uhie uhie, ma na-yi akwa dị ka ọ na-eme.",
            "Ihe ịrịba ama ịdọ aka na ntị: iguzo naanị ya n'ebe dị anya n'igwe anụ, isi ya dị ala, ọ naghị eri nri ma ọ bụ naghị ataghachi nri, anya na-adịghị egbuke ma ọ bụ na-agba mmiri, imi na-agba mmiri, ụkwara ma ọ bụ iku ume ngwa ngwa, afọ ọsịsa ma ọ bụ ọbara na nsị, ịkpụ ụkwụ, ọzịza, ọnya, mmiri ara ma ọ bụ akwa ibelata na mberede, nku nwere ntụrụ, olu ọkụkọ gbagọrọ agbagọ, ma ọ bụ ọnwụ na mberede. Kewapụ anụ na-arịa ọrịa n'ebe ndị ọzọ nọ ma kpọtụrụ dọkịta anụmanụ gị ma ọ bụ onye ọrụ ahụike anụmanụ."
          ],
          steps: ["Lelee anụ ọ bụla otu ugboro kwa ụbọchị, n'oge inye nri ma ọ bụ ịmị mmiri ara.", "Lee anya: ọ na-amụ anya, na-eguzo ma na-eje ije nke ọma, na-eri, na-ataghachi nri.", "Lee nso: anya, imi, ajị ma ọ bụ nku, iku ume, nsị.", "Dee ma mmiri ara ma ọ bụ akwa ọ belatara.", "Kewapụ anụ ọ bụla nwere ihe ịrịba ama ịdọ aka na ntị.", "Dee ihe ị hụrụ ma kpọọ dọkịta anụmanụ gị ma ọ bụ onye ọrụ ahụike anụmanụ."],
          words: [["Ịtaghachi nri (chewing the cud)", "mgbe ehi, ewu na atụrụ na-eweghachi nri n'ọnụ ma taa ya ọzọ; ihe ịrịba ama nke ahụike dị mma."], ["Ikewapụ (isolate)", "idebe anụ na-arịa ọrịa iche n'ebe ndị ọzọ nọ."], ["Onye ọrụ ahụike anụmanụ", "onye ọrụ gọọmentị ma ọ bụ onye nkịtị a zụrụ azụ nke na-enyere ndị ọrụ ugbo aka n'ahụike anụmanụ."]],
          slides: [
            { title: "Anụ dị mma", bullets: ["Ọ na-amụ anya, na-eje ije nke ọma, na-eri ma na-aṅụ", "Ọ na-ataghachi nri; anya na-egbuke, imi dị ọcha", "Ajị ma ọ bụ nku dị larịị; nsị dị ka o kwesịrị"] },
            { title: "Ihe ịrịba ama ịdọ aka na ntị", bullets: ["Naanị ya, isi dị ala, ọ naghị eri", "Anya ma ọ bụ imi na-agba mmiri, ụkwara, afọ ọsịsa", "Ịkpụ ụkwụ, ọzịza, mmiri ara ma ọ bụ akwa belatara"] },
            { title: "Mee ihe n'oge", bullets: ["Lelee anụ ọ bụla kwa ụbọchị", "Kewapụ anụ ọ bụla na-arịa ọrịa", "Kpọọ dọkịta anụmanụ ma ọ bụ onye ọrụ ahụike anụmanụ"] }
          ],
          tryIt: "Echi n'oge inye nri, jiri ndepụta a lelee anụ ọ bụla: ọ na-amụ anya, na-eri, na-ataghachi nri, anya, imi, ajị, iku ume, nsị. Dee otu ahịrị maka anụ ọ bụla (ma ọ bụ maka ụlọ ọ bụla maka ọkụkọ). Kaa akara n'anụ ọ bụla ị ga-eleba anya ma ọ bụ kpọọ dọkịta anụmanụ maka ya.",
          youCanNow: "ime nlele ahụike kwa ụbọchị ma chọpụta ihe ịrịba ama nke anụ na-arịa ọrịa.",
          quickCheck: [
            { objective: "O1", q: "Kedu ihe ịrịba ama bụ ịdọ aka na ntị n'ọkụkọ?", options: ["Ọkpọ isi na-acha uhie uhie", "Ọ na-yi akwa dị ka ọ na-eme", "Ọ na-agagharị ma na-eri nke ọma", "Nku nwere ntụrụ"], answer: 3, why: "Nku nwere ntụrụ bụ ihe ịrịba ama ịdọ aka na ntị; ọkụkọ nne dị mma na-agagharị ma nwee ọkpọ isi na-acha uhie uhie." },
            { objective: "O1", q: "Ọrụ juru gị, ị chọrọ ilele anụ gị naanị otu ugboro n'izu. Gịnị bụ ihe egwu ya?", options: ["Anụ ga-eri karịa", "A ga-achọpụta ọrịa n'oge na-adịghị, mgbe ọgwụgwọ ya dị oke ọnụ ma o nwekwara ike ịgbasa", "Mmiri ara ga-aka mma", "Ọ dịghị ihe egwu ọ bụla"], answer: 1, why: "Ilele anya kwa ụbọchị na-achọpụta ọrịa n'oge, mgbe ọgwụgwọ kacha dị ọnụ ala na tupu ọ gbasaa." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Nri na mmiri",
          minutes: 5,
          goal: "Hazie nri na mmiri dị ọcha maka anụ gị n'afọ niile, gụnyere oge ọkọchị.",
          text: [
            "Mmiri na-ebu ụzọ. Anụ chọrọ mmiri dị ọcha kwa ụbọchị, ma chọkwuo ya n'oge okpomọkụ; ehi a na-amị mmiri ara na-aṅụ mmiri karịa nke a naghị amị, mmiri ara na-ebelatakwa ngwa ngwa ma mmiri ezughị. Debe ihe mmiri anụ (trough) na ihe ọṅụṅụ ọcha ma n'ime ndò, ekwela ka ọkụkọ ṅụọ mmiri ruru unyi nke tọrọ atọ.",
            "Ehi, ewu na atụrụ chọrọ nri ahịhịa (roughage: ahịhịa, nri anụ a kụrụ akụ dị ka Napier grass, Rhodes grass, desmodium ma ọ bụ lucerne, na ihe fọdụrụ n'ubi dị ka osisi ọka na akwụkwọ agwa), gbakwunyere nri ike na protein maka anụ a na-amị mmiri ara, ndị dị ime ma ọ bụ ndị na-eto eto. Ewu na-erikwa akwụkwọ ọhịa na akwụkwọ osisi. Nye ha nnu ma ọ bụ mineral lick dị ka dọkịta anụmanụ gị ma ọ bụ onye ndụmọdụ ugbo (extension officer) si gwa gị. Ọkụkọ a na-azụ maka akwa ma ọ bụ anụ chọrọ nri zuru oke (balanced feed); ọkụkọ obodo na-achọ nri n'onwe ha, mana ha na-yi akwa ma na-eto nke ọma karịa ma e nye ha mkpụrụ ọka, akwụkwọ nri na mmiri dị ọcha.",
            "Kwadebe maka oge ọkọchị: kụọ nri anụ, ma chekwaa hay, silage ma ọ bụ ihe fọdụrụ n'ubi a mịrị amị mgbe ha juru ebe niile. Enyela anụ nri ebu kpuchiri: ebu nwere ike ibu aflatoxin, nke na-emerụ anụ ahụ ma na-abanye na mmiri ara na akwa. Gbanwee nri nwayọọ nwayọọ n'ime ụbọchị ole na ole ka afọ ghara ịkpasu anụ ahụ."
          ],
          steps: ["Nye mmiri dị ọcha kwa ụbọchị; karịa n'oge okpomọkụ na maka anụ a na-amị mmiri ara.", "Sachaa ihe mmiri anụ na ihe ọṅụṅụ; debe ha n'ime ndò.", "Hazie nri ahịhịa: ebe ịta nri, nri anụ a kụrụ akụ na ihe fọdụrụ n'ubi.", "Tinyekwuo nri ike na protein maka anụ a na-amị mmiri ara, ndị dị ime na ndị na-eto eto.", "Chekwaa hay, silage ma ọ bụ ihe fọdụrụ n'ubi maka oge ọkọchị.", "Tụfuo nri ebu kpuchiri; gbanwee nri nwayọọ nwayọọ."],
          words: [["Nri ahịhịa (roughage)", "nri buru ibu dị ka ahịhịa, hay na ihe fọdụrụ n'ubi."], ["Nri anụ a kụrụ akụ (fodder)", "ihe a kụrụ n'ubi iji nye anụ nri, dị ka Napier grass ma ọ bụ lucerne."], ["Silage", "nri anụ ndụ ndụ e chekwara n'ebe ikuku na-adịghị, ka o nwee ike ịdị ọtụtụ ọnwa."], ["Mineral lick", "ngọngọ nnu na mineral nke anụ na-arachi."]],
          slides: [
            { title: "Mmiri na-ebu ụzọ", bullets: ["Mmiri dị ọcha kwa ụbọchị", "Karịa n'okpomọkụ na maka anụ a na-amị mmiri ara", "Ihe ọṅụṅụ dị ọcha, n'ime ndò"] },
            { title: "Nri", bullets: ["Nri ahịhịa: ahịhịa, nri anụ a kụrụ akụ, ihe fọdụrụ n'ubi", "Nri ike na protein ọzọ maka anụ a na-amị mmiri ara na ndị na-eto eto", "Mineral dị ka dọkịta anụmanụ gị si gwa gị"] },
            { title: "Hazie ma chebe", bullets: ["Chekwaa hay, silage ma ọ bụ ihe fọdụrụ n'ubi maka oge ọkọchị", "Enyela nri ebu kpuchiri", "Gbanwee nri nwayọọ nwayọọ"] }
          ],
          tryIt: "Depụta nri anụ gị na-eri ugbu a na ebe nke ọ bụla si. Kaa akara n'ndị na-agwụ n'oge ọkọchị, ma dee otu ụzọ ị ga-esi chekwaa ma ọ bụ kụọ ndị ọzọ tupu oge ahụ. Lelee ihe ọṅụṅụ ọ bụla taa ma sachaa nke ọ bụla ruru unyi.",
          youCanNow: "ịhazi nri na mmiri dị ọcha maka anụ gị n'afọ niile.",
          quickCheck: [
            { objective: "O2", q: "Kedu nke n'ime ndị a bụ nri ahịhịa maka ehi?", options: ["Osisi ọka na akwụkwọ agwa", "Naanị nnu", "Naanị mineral lick", "Mmiri dị ọcha"], answer: 0, why: "Nri ahịhịa gụnyere ahịhịa, nri anụ a kụrụ akụ na ihe fọdụrụ n'ubi dị ka osisi ọka na akwụkwọ agwa." },
            { objective: "O2", q: "N'ụbọchị okpomọkụ, ihe mmiri ehi gị a na-amị mmiri ara tọgbọrọ chakoo ma ruo unyi. Gịnị ka ị ga-eme?", options: ["Chere ruo anyasị", "Nye ya nri kpọrọ nkụ karịa n'ọnọdụ ya", "Sachaa ya ma tinye mmiri dị ọcha n'ime ya, n'ime ndò", "Hapụ ya ka ọ ṅụọ mmiri tọrọ atọ n'ala"], answer: 2, why: "Anụ chọrọ mmiri dị ọcha kwa ụbọchị, karịa n'oge okpomọkụ, mmiri ara na-ebelatakwa ngwa ngwa ma mmiri ezughị." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ụlọ anụ na ịdị ọcha",
          minutes: 5,
          goal: "Lelee ụlọ anụ gị ma tọọ iwu ịdị ọcha atọ maka ugbo gị.",
          text: [
            "Ezigbo ụlọ anụ na-eme ka anụ kpọọ nkụ, nwee ndò, nọrọ na nchekwa pụọ n'aka ndị ohi na anụ ọhịa, ma ghara ijupụta. Ọ chọrọ ikuku dị ọcha n'enweghị oyi ikuku na-efe, ala kpọrọ nkụ nke mmiri na-asọpụ, na ohere zuru ezu ka anụ ọ bụla dina, rie ma ṅụọ. Ụlọ juputara, dị mmiri mmiri, ruru unyi na-agbasa ọrịa, ikpuru na nsogbu ụkwụ.",
            "Debe ya ọcha: na-ewepụ nsị na ihe ndina dị mmiri mmiri mgbe niile (ọ na-eme ezigbo fatịlaịza compost), sachaa ihe nri na ihe ọṅụṅụ, ma chịkwaa ijiji, oke na nnụnụ ọhịa. Maka ọkụkọ, jiri ihe ndina kpọrọ nkụ (litter) ma gbanwee ya mgbe ọ mịrị mmiri. Saa aka gị mgbe i metụchara anụ, karịsịa ndị na-arịa ọrịa.",
            "Gbochie ọrịa ịbata na ịgbasa: debe anụ ọhụrụ iche n'igwe anụ gị ruo oge dọkịta anụmanụ gị kwuru tupu i jikọta ha, debekwa anụ na-arịa ọrịa n'ụlọ dị iche. Ụfọdụ ọrịa anụmanụ na-arịakwa ndị mmadụ, dị ka brucellosis na anthrax. Ọ bụrụ na anụ nwụrụ na mberede ma ọbara na-asọpụta n'imi ya ma ọ bụ n'oghere ndị ọzọ, emepela ozu ya; mee ka ndị mmadụ na anụ ndị ọzọ ghara ịbịaru ya nso ma kpọọ dọkịta anụmanụ ozugbo. Wezuga anụ nwụrụ anwụ n'ụzọ dọkịta anụmanụ gị ma ọ bụ onye ọrụ ahụike anụmanụ si gwa gị."
          ],
          steps: ["Lelee ụlọ: kpọrọ nkụ, nwere ndò, nwere ikuku, mmiri na-asọpụ, na-adịghị juputa.", "Na-ewepụ nsị na ihe ndina dị mmiri mmiri mgbe niile.", "Sachaa ihe nri na ihe ọṅụṅụ; chịkwaa ijiji na oke.", "Debe anụ ọhụrụ iche tupu i jikọta ha, dị ka dọkịta anụmanụ gị si gwa gị.", "Nwee ụlọ dị iche maka anụ na-arịa ọrịa.", "Saa aka mgbe i metụchara anụ; kpọọ dọkịta anụmanụ maka ọnwụ na mberede."],
          words: [["Ihe ndina ọkụkọ (litter)", "ihe ndina kpọrọ nkụ dị ka ntụ osisi a pịrị apị n'ala ụlọ ọkụkọ."], ["Quarantine", "idebe anụ ọhụrụ ma ọ bụ anụ na-arịa ọrịa iche ka ọrịa ghara ịgbasa."], ["Zoonosis", "ọrịa nwere ike isi n'anụmanụ gafee na mmadụ, ma ọ bụ site na mmadụ gafee n'anụmanụ."], ["Ozu anụ (carcass)", "ahụ anụ nwụrụ anwụ."]],
          slides: [
            { title: "Ezigbo ụlọ anụ", bullets: ["Kpọrọ nkụ, nwere ndò, nwere ikuku, enweghị oyi ikuku", "Ala nke mmiri na-asọpụ", "Ohere idina, iri na ịṅụ; nchekwa pụọ n'aka ndị ohi"] },
            { title: "Debe ya ọcha", bullets: ["Na-ewepụ nsị na ihe ndina dị mmiri mmiri mgbe niile", "Sachaa ihe nri na ihe ọṅụṅụ", "Chịkwaa ijiji, oke na nnụnụ ọhịa"] },
            { title: "Gbochie ọrịa ịbata", bullets: ["Debe anụ ọhụrụ iche tupu i jikọta ha", "Ụlọ dị iche maka anụ na-arịa ọrịa", "Saa aka mgbe i metụchara anụ"] },
            { title: "Ọnwụ na mberede", bullets: ["Emepela ozu ya", "Mee ka ndị mmadụ na anụ ndị ọzọ ghara ịbịaru nso", "Kpọọ dọkịta anụmanụ ozugbo"] }
          ],
          sources: [FAO_BIOSEC],
          tryIt: "Jiri ndepụta a gafee n'ụlọ anụ gị ma ọ bụ ogige anụ gị: kpọrọ nkụ, nwere ndò, nwere ikuku, mmiri na-asọpụ, na-adịghị juputa, ihe ọṅụṅụ dị ọcha. Dee otu ihe ị ga-edozi n'izu a, na iwu ịdị ọcha atọ maka onye ọ bụla na-arụ ọrụ n'anụ gị.",
          youCanNow: "ilele ụlọ anụ ma debe ya ọcha, idebe anụ na-arịa ọrịa na anụ ọhụrụ iche, na ime ihe n'enweghị ihe egwu mgbe anụ nwụrụ na mberede.",
          quickCheck: [
            { objective: "O3", q: "Gịnị mere a ga-eji na-ewepụ nsị na ihe ndina dị mmiri mmiri mgbe niile?", options: ["Ka anụ rie obere nri", "Iji chekwaa nri", "Ụlọ ruru unyi, dị mmiri mmiri na-agbasa ọrịa, ikpuru na nsogbu ụkwụ", "Ka ụlọ ahụ yie ka ọ tọgbọrọ chakoo"], answer: 2, why: "Ụlọ juputara, dị mmiri mmiri, ruru unyi na-agbasa ọrịa, ikpuru na nsogbu ụkwụ." },
            { objective: "O3", q: "Mmiri ozuzo banyere n'ụlọ ọkụkọ gị, ihe ndina ọkụkọ amịkwaa mmiri. Gịnị ka ị ga-eme?", options: ["Gbanwee ihe ndina mmiri mịrị were nke kpọrọ nkụ ma dozie ebe mmiri si abata", "Hapụ ya ka ọ kpọọ nkụ n'onwe ya", "Tinye nri n'elu ya", "Kpọpụta ọkụkọ n'ime mmiri ozuzo"], answer: 0, why: "Ọkụkọ chọrọ ihe ndina kpọrọ nkụ; a na-agbanwe ihe ndina mmiri mịrị ma dozie ihe kpatara ya." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Nlekọta kwa ụbọchị",
        questions: [
          { objective: "O1", q: "Kedu nke bụ ihe ịrịba ama nke ehi ma ọ bụ ewu dị mma?", options: ["Iguzo naanị ya, isi ya dị ala", "Ịtaghachi nri mgbe ọ na-ezu ike", "Anya na imi na-agba mmiri", "Ọ naghị aṅụ mmiri"], answer: 1, why: "Ịtaghachi nri na-egosi na afọ anụ ahụ na-arụ ọrụ nke ọma." },
          { objective: "O1", q: "Otu ewu anaghị eri nri ma na-eguzo n'ebe dị anya n'igwe ewu. Gịnị ka ị ga-ebu ụzọ mee?", options: ["Chere otu izu", "Ree ya ozugbo", "Kewapụ ya ma kpọtụrụ dọkịta anụmanụ gị ma ọ bụ onye ọrụ ahụike anụmanụ", "Nye ya ọgwụ ọ bụla si n'ụlọ ahịa"], answer: 2, why: "Ikewapụ ya na-echebe igwe anụ ndị ọzọ, dọkịta anụmanụ ga-achọpụtakwa ihe kpatara ya." },
          { objective: "O2", q: "Ebu ekpuchiela ọka a gwụrụ agwụ (maize bran) gị. Gịnị ka ị kwesịrị ime?", options: ["Tụfuo ya; enyela anụ ya", "Nye ọkụkọ ya", "Gwakọta ya na nri dị mma", "Nye naanị ehi a na-amị mmiri ara ya"], answer: 0, why: "Ebu nwere ike ibu aflatoxin, nke na-emerụ anụ ahụ ma na-abanye na mmiri ara na akwa." },
          { objective: "O2", q: "Kedu otu ị ga-esi kwadebe maka oge ọkọchị?", options: ["Ree ihe mmiri anụ niile", "Nye anụ hay ebu kpuchiri", "Kwụsị inye mmiri", "Kụọ nri anụ ma chekwaa hay, silage ma ọ bụ ihe fọdụrụ n'ubi"], answer: 3, why: "Nri e chekwara na-edu anụ gafee oge ọkọchị." },
          { objective: "O3", q: "Otu ehi nwụrụ na mberede, ọbara na-asọpụta n'imi ya. Gịnị ka ị ga-eme?", options: ["Mepee ya ka ịhụ ihe kpatara ya", "Emepela ya; mee ka ndị mmadụ ghara ịbịaru nso ma kpọọ dọkịta anụmanụ ozugbo", "Ree anụ ya ngwa ngwa", "Hapụrụ nkịta ya"], answer: 1, why: "Ọnwụ na mberede na ọbara na-asọpụta nwere ike ịbụ anthrax, nke nwere ike ịrịa ndị mmadụ; a gaghị emepe ozu ahụ." }
        ]
      }
    },
    {
      name: "Isi 2: Igbochi na ịgwọ ọrịa",
      lessons: [
        {
          objectives: ["O4"],
          title: "Usoro ọgwụ mgbochi ya na dọkịta anụmanụ obodo gị",
          minutes: 5,
          goal: "Kwekọrịta n'usoro ọgwụ mgbochi e dere ede ya na dọkịta anụmanụ e debanyere aha ma mee ka ọgwụ mgbochi rụọ ọrụ.",
          text: [
            "Ọgwụ mgbochi (vaccine) na-egbochi ọtụtụ ọrịa ọjọọ nke anụ ụlọ, ọ dịkwa ọnụ ala karịa ọgwụgwọ nke ukwuu. Ọgwụ mgbochi anụ gị chọrọ, na mgbe ọ chọrọ ya, dabere na mba gị, ógbè gị na ọrịa ndị dị ebe ahụ. Ọmụmaatụ ndị a na-ahụkarị gụnyere foot-and-mouth disease, lumpy skin disease, anthrax na blackquarter n'ehi; peste des petits ruminants (PPR) n'ewu na atụrụ; na ọrịa Newcastle, Gumboro na fowl pox n'ọkụkọ. Naanị dọkịta anụmanụ ma ọ bụ onye ọrụ ahụike anụmanụ maara ógbè gị nwere ike inye gị usoro ziri ezi.",
            "Rịọ dọkịta anụmanụ gị ka o dee kalenda nke afọ: ọgwụ mgbochi ọ bụla, maka anụ ndị ọ bụ, n'afọ ole, na mgbe a ga-eme ya ọzọ. Jiri dọkịta anụmanụ e debanyere aha ma ọ bụ onye ọrụ ahụike anụmanụ a zụrụ azụ. Na Nigeria, Veterinary Council of Nigeria na-edebe ndepụta aha ndị dọkịta anụmanụ; na Kenya, Kenya Veterinary Board na-edebanye aha ndị dọkịta anụmanụ na ndị inyeaka ha (para-vets); na Ghana, Veterinary Services Directorate nke Ministry of Food and Agriculture na-eme ọrụ ahụike anụmanụ na mkpọsa ọgwụ mgbochi. Mkpọsa gọọmentị na-adị mgbe ụfọdụ n'efu ma ọ bụ n'ọnụ ala, ya mere gee ntị n'ọkwa ha.",
            "Ọgwụ mgbochi bụ ihe dị ndụ ma ọ bụ ihe na-emebi ngwa ngwa. Zụta ya naanị n'ụlọ ahịa ọgwụ anụmanụ (agrovet) nwere ikike, lelee ụbọchị njedebe ya, debe ya ka ọ jụrụ oyi (n'igbe oyi ma ọ bụ friji, n'ebe anwụ na-adịghị) site n'ụlọ ahịa ruo n'anụ ahụ, ma jiri ya dị ka akara ọgwụ na dọkịta anụmanụ si kwuo. Ọgwụ mgbochi kpọrọ ọkụ nwere ike ọ gaghị echebe anụ gị."
          ],
          steps: ["Jụọ dọkịta anụmanụ e debanyere aha ma ọ bụ onye ọrụ ahụike anụmanụ ọrịa ndị bụ ihe egwu n'ógbè gị.", "Nweta kalenda afọ e dere ede: ọgwụ mgbochi, anụ, afọ, ụbọchị a ga-eme ya ọzọ.", "Zụta ọgwụ mgbochi naanị n'agrovet nwere ikike; lelee ụbọchị njedebe.", "Debe ọgwụ mgbochi ka ọ jụrụ oyi site n'ụlọ ahịa ruo n'anụ.", "Jiri ha kpọmkwem dị ka akara ọgwụ na dọkịta anụmanụ si kwuo.", "Dekọọ ọgwụ mgbochi ọ bụla: ụbọchị, anụ, ọgwụ mgbochi, nọmba batch, onye nyere ya."],
          words: [["Ọgwụ mgbochi (vaccine)", "ihe na-akụziri ahụ anụ ka o si alụso ọrịa ọgụ tupu ọ rịa ọrịa ahụ."], ["Usoro ọgwụ mgbochi", "kalenda nke ọgwụ mgbochi a ga-enye, anụ a ga-enye ya, na mgbe."], ["Cold chain", "idebe ọgwụ mgbochi ka ọ jụrụ oyi site n'aka onye mere ya ruo n'anụ."], ["PPR", "peste des petits ruminants, ọrịa nje virus na-egbu egbu nke ewu na atụrụ."]],
          slides: [
            { title: "Gịnị mere a ga-eji gba ọgwụ mgbochi", bullets: ["Igbochi dị ọnụ ala karịa ọgwụgwọ nke ukwuu", "Ọgwụ mgbochi a chọrọ dabere n'ógbè gị", "Naanị dọkịta anụmanụ obodo gị nwere ike ịtọ usoro ahụ"] },
            { title: "Ọmụmaatụ ndị a na-ahụkarị", bullets: ["Ehi: foot-and-mouth, lumpy skin, anthrax, blackquarter", "Ewu na atụrụ: PPR", "Ọkụkọ: ọrịa Newcastle, Gumboro, fowl pox"] },
            { title: "Jiri enyemaka e debanyere aha", bullets: ["Nigeria: Veterinary Council of Nigeria", "Kenya: Kenya Veterinary Board", "Ghana: Veterinary Services Directorate (MoFA)"] },
            { title: "Mee ka ọgwụ mgbochi rụọ ọrụ", bullets: ["Agrovet nwere ikike; lelee ụbọchị njedebe", "Debe ya ka ọ jụrụ oyi site n'ụlọ ahịa ruo n'anụ", "Gbasoo akara ọgwụ na dọkịta anụmanụ"] }
          ],
          sources: [VCN],
          tryIt: "Kpọọ ma ọ bụ gaa hụ dọkịta anụmanụ obodo gị ma ọ bụ onye ọrụ ahụike anụmanụ ma jụọ: ọrịa ndị ka m ga-agba anụ m ọgwụ mgbochi maka ha ebe a, na mgbe ole? Dee azịza ya dị ka kalenda ọnwa 12 ma chekwaa nọmba dọkịta anụmanụ ahụ n'ekwentị gị.",
          youCanNow: "inweta usoro ọgwụ mgbochi n'aka dọkịta anụmanụ e debanyere aha ma debe ọgwụ mgbochi ka ọ jụrụ oyi ma rụọ ọrụ nke ọma.",
          quickCheck: [
            { objective: "O4", q: "Kedu ọrịa ọkụkọ ọgwụ mgbochi na-egbochi?", options: ["East Coast fever", "Ọrịa Newcastle", "Brucellosis n'ewu", "Foot rot"], answer: 1, why: "Ọrịa Newcastle, Gumboro na fowl pox bụ ọrịa ọkụkọ a na-ahụkarị nke ọgwụ mgbochi na-egbochi." },
            { objective: "O4", q: "Dọkịta anụmanụ gị nyere ọgwụ mgbochi mbụ mana o deghị ihe ọ bụla. Gịnị ka ị ga-arịọ?", options: ["Ọgwụ mgbochi dị ọnụ ala karịa", "Ọ dịghị ihe; ị ga-echeta", "Ọgwụ mgbochi maka ọrịa ọ bụla n'ụwa", "Kalenda afọ e dere ede: ọgwụ mgbochi ọ bụla, anụ ndị ọ bụ, n'afọ ole na mgbe a ga-eme ya ọzọ"], answer: 3, why: "Kalenda e dere ede site n'aka dọkịta anụmanụ na-eme ka ọgwụ mgbochi ọ bụla bụrụ n'oge." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Biosecurity ọkụkọ na ọrịa Newcastle",
          minutes: 5,
          goal: "Tọọ iwu biosecurity ga-egbochi ọrịa Newcastle na ọrịa ndị ọzọ ịbata n'igwe ọkụkọ gị.",
          text: [
            "Ọrịa Newcastle bụ otu n'ime ọrịa ọkụkọ kacha njọ n'Afrịka. World Organisation for Animal Health (WOAH) na-akọwa ihe ịrịba ama dị ka ịkụ ume n'ike, ụkwara na ịzẹ uzere; ihe ịrịba ama akwara dị ka ịma jijiji, akụkụ ahụ ịkpọnwụ (paralysis) na olu gbagọrọ agbagọ; afọ ọsịsa; na akwa ibelata. Ọnwụ nwere ike iru pasent 100 nke igwe ọkụkọ, ọrịa ahụ nwekwara ike ịrịa ihe fọrọ nke nta ka ọ bụrụ ọkụkọ niile n'igwe n'ime ụbọchị ole na ole.",
            "WOAH na-akọwa na ọ na-agbasa site n'imetụ ọkụkọ na-arịa ọrịa na nsị ha, na site na nri, mmiri, ngwaọrụ na uwe nje metọrọ. Ọ bụ ya mere biosecurity, ya bụ usoro dị mfe kwa ụbọchị na-egbochi nje ịbata, ji dị mkpa dị ka ọgwụ mgbochi. Ndụmọdụ FAO maka obere igwe ọkụkọ na Kenya na-ekwusi ike na ọtụtụ n'ime usoro ndị a anaghị efu ego, ma ọ bụ na-efu ntakịrị.",
            "Gbaa igwe ọkụkọ niile ọgwụ mgbochi ọrịa Newcastle dị ka usoro dọkịta anụmanụ gị nyere si dị. Maka ọkụkọ obodo, FAO na-akọwa ọgwụ mgbochi na-anagide okpomọkụ (dị ka I-2) nke a nwere ike itinye n'anya; jụọ onye ọrụ ahụike anụmanụ gị ndị dị. Ọ bụrụ na ọtụtụ ọkụkọ dara ọrịa ma ọ bụ nwụọ na mberede, kpọchie igwe ọkụkọ ahụ n'ime ụlọ, gwa dọkịta anụmanụ ma ọ bụ onye ọrụ ahụike anụmanụ ozugbo, ereke ma ọ bụ bugharịa ọkụkọ ọ bụla. WOAH na-adụ ọdụ ka a hapụ ụlọ a sachara asacha n'enweghị ọkụkọ ọ bụla ụbọchị 21 tupu e tinye ọkụkọ ọhụrụ mgbe ọrịa bilitere."
          ],
          steps: ["Egbochi ndị ọbịa ịbanye n'ụlọ ọkụkọ; saa aka ma jiri foot dip ma ọ bụ akpụkpọ ụkwụ dị iche.", "Zụta ọkụkọ naanị n'ebe a tụkwasịrị obi, ebe ọkụkọ dị mma; buru ụzọ debe ọkụkọ ọhụrụ iche.", "Gbochie nnụnụ ọhịa, oke na ọkụkọ ndị ọzọ ịbịaru nri na mmiri nso.", "Na-asacha ma gbaa ọgwụ nje n'ihe ọṅụṅụ, ihe nri na igbe ọkụkọ mgbe niile.", "Gbaa igwe ọkụkọ niile ọgwụ mgbochi dị ka usoro dọkịta anụmanụ si dị.", "Ọ bụrụ na ọkụkọ dara ọrịa ma ọ bụ nwụọ na mberede: kpọchie ha, kpọọ dọkịta anụmanụ, ereke ma ọ bụ bugharịa ọkụkọ."],
          words: [["Biosecurity", "usoro dị mfe kwa ụbọchị na-egbochi nje ịbata n'ugbo ma na-akwụsị ya ịgbasa."], ["Ọrịa Newcastle", "ọrịa nje virus nke ọkụkọ na-agbasa ngwa ngwa ma nwee ike igbu igwe ọkụkọ niile."], ["Foot dip", "efere nwere ọgwụ nje ndị mmadụ na-azọ ụkwụ n'ime ya tupu ha abanye n'ụlọ anụ."], ["Ọgwụ mgbochi na-anagide okpomọkụ (thermostable vaccine)", "ọgwụ mgbochi na-anagide okpomọkụ karịa, nke bara uru n'obodo; a ka ga-edebe ya ka ọ jụrụ oyi dị ka o kwere mee."]],
          slides: [
            { title: "Ọrịa Newcastle (WOAH)", bullets: ["Ịkụ ume n'ike, ụkwara, olu gbagọrọ agbagọ, afọ ọsịsa", "Akwa na-ebelata; ọnwụ ruru pasent 100", "Igwe ọkụkọ niile na-arịa ya n'ime ụbọchị ole na ole"] },
            { title: "Otu o si agbasa", bullets: ["Ọkụkọ na-arịa ọrịa na nsị ha", "Nri, mmiri, ngwaọrụ na uwe nje metọrọ", "Biosecurity na-akwụsị ya; ọtụtụ n'ime ya bụ n'efu"] },
            { title: "Iwu biosecurity", bullets: ["Belata ndị ọbịa; saa aka; foot dip", "Buru ụzọ debe ọkụkọ ọhụrụ iche", "Gbochie nnụnụ ọhịa na oke; sachaa ihe ọṅụṅụ"] },
            { title: "Gbaa ọgwụ mgbochi ma mee ihe ngwa ngwa", bullets: ["Igwe ọkụkọ niile, dị ka usoro dọkịta anụmanụ si dị", "Ọkụkọ obodo: jụọ maka ọgwụ mgbochi a na-etinye n'anya", "Ọnwụ na mberede: kpọchie ha, kpọọ dọkịta anụmanụ, ereke"] }
          ],
          sources: [WOAH_ND, FAO_ND_VILLAGE, FAO_BIOSEC],
          tryIt: "Dee iwu biosecurity ise maka ọkụkọ gị ma kwụnye ha n'ọnụ ụzọ ụlọ ọkụkọ. Mgbe ahụ jụọ dọkịta anụmanụ gị ma ọ bụ onye ọrụ ahụike anụmanụ mgbe a ga-agba igwe ọkụkọ gị ọgwụ mgbochi ọrịa Newcastle ọzọ, ma tinye ya na kalenda gị.",
          youCanNow: "ichebe igwe ọkụkọ pụọ n'ọrịa Newcastle site na biosecurity na ọgwụ mgbochi, na ime ihe ngwa ngwa ma ọkụkọ nwụọ.",
          quickCheck: [
            { objective: "O5", q: "Gịnị bụ biosecurity?", options: ["Ụdị ọgwụ mgbochi", "Ụdị ọkụkọ", "Ihe a na-agbakwunye na nri", "Usoro dị mfe kwa ụbọchị na-egbochi nje ịbata n'ugbo"], answer: 3, why: "Biosecurity bụ usoro kwa ụbọchị na-egbochi nje ịbata, ọtụtụ n'ime ha anaghị efu ego ma ọ bụ na-efu ntakịrị." },
            { objective: "O5", q: "Onye agbata obi nke ọkụkọ ya na-arịa ọrịa chọrọ ịgbazite ihe akwa na ihe nri ọkụkọ gị. Gịnị ka ị ga-eme?", options: ["Nye ya ha ma jiri ha ọzọ mgbe o weghachiri ha", "Ekerịtala ngwaọrụ, n'ihi na nje na-agbasa na ha", "Nye ya ha naanị otu ụbọchị", "Gbanwerịta ọkụkọ gị n'ọnọdụ ya"], answer: 1, why: "Ọrịa Newcastle na-agbasa site na nri, mmiri, ngwaọrụ na uwe nje metọrọ." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ikpuru, ndekọ na mgbe ị ga-akpọ dọkịta anụmanụ",
          minutes: 6,
          goal: "Hazie nchịkwa ikpuru na akọrọ ya na dọkịta anụmanụ gị, debe ndekọ ọgwụgwọ, ma mara ihe ịrịba ama ndị chọrọ dọkịta anụmanụ ozugbo.",
          text: [
            "Ikpuru dị n'ime afọ, na akọrọ, mites na fleas dị n'elu ahụ, na-aṅụ ọbara, na-eme ka uto bịa nwayọọ, ma na-agbasa ọrịa; akọrọ na-agbasa East Coast fever n'ehi n'Ọwụwa Anyanwụ Afrịka. Ihe ịrịba ama nke ikpuru gụnyere uto na-adịghị mma, ajị kwụ ọtọ, afọ zara aza, afọ ọsịsa, na ime anya ma ọ bụ chi na-acha ọcha. Belata ikpuru site n'idebe ụlọ ọcha na kpọrọ nkụ, ịkpọga anụ na-ata nri n'ebe ahịhịa ọhụrụ dị, na ịghara ime ka ha jupụta. Dọkịta anụmanụ gị nwere ike ịgwa gị mgbe ị ga-enye ọgwụ ikpuru, mikpuo ma ọ bụ fesa ọgwụ akọrọ, na ọgwụ ị ga-eji. Jiri mgbe niile ọnụọgụ ọgwụ e dere n'akara ma ọ bụ nke dọkịta anụmanụ nyere: ọ bụrụ na ọ dị ntakịrị, ikpuru na akọrọ ga-anagide ọgwụ ahụ (resistance), ọ bụrụ na ọ karịrị akarị, ọ nwere ike imerụ anụ ahụ.",
            "Ọgwụ na-ahapụ ihe fọdụrụ n'ahụ anụ. Ọgwụ ọ bụla nwere oge nchere (withdrawal period): oge mgbe ọgwụgwọ gachara tupu e nwee ike ire ma ọ bụ iri mmiri ara, akwa ma ọ bụ anụ nke anụ ahụ. FAO na-ekwusi ike na ị ga-arụ ọrụ ya na dọkịta anụmanụ gị n'atụmatụ ahụike ma dekọọ ọgwụgwọ ọ bụla na oge nchere ya. Ejila ọgwụ nje (antibiotics) mee ka anụ too ngwa ngwa, ejikwala ya n'enweghị ndụmọdụ dọkịta anụmanụ.",
            "Ndekọ na-eme ka i mara ihe kama ịkọ nkọ. Maka anụ ọ bụla ma ọ bụ igwe anụ ọ bụla, dee: njirimara ya, ịmụ nwa, ọgwụ mgbochi, ọgwụgwọ (ụbọchị, ọgwụ, onye nyere ya, mgbe oge nchere ga-agwụ), ịdị arọ ma ọ bụ ihe ọ na-emepụta, na ọnwụ. Akwụkwọ ndetu na-arụ ọrụ; spreadsheet n'ekwentị na-arụkwa ọrụ. Kpọọ dọkịta anụmanụ ozugbo maka: ọnwụ na mberede, ọtụtụ anụ na-arịa ọrịa n'otu oge, anụ anaghị eri nri ihe karịrị otu ụbọchị, ọmụmụ siri ike, ọbara na-agba nke ukwuu, ihe ịrịba ama akwara, ma ọ bụ ọrịa ọ bụla gọọmentị gị kwuru na a ga-akọrịrị ya."
          ],
          steps: ["Rịọ dọkịta anụmanụ gị maka atụmatụ ikpuru na akọrọ: mgbe a ga-enye ọgwụ ikpuru, mikpuo ma ọ bụ fesa, na ihe a ga-eji.", "Jiri ọnụọgụ ọgwụ e dere n'akara ma ọ bụ nke dọkịta anụmanụ nyere, ọ bụghị nkọ.", "Kpọga anụ na-ata nri n'ebe ahịhịa ọhụrụ dị; debe ụlọ ka ọ kpọrọ nkụ.", "Dekọọ ọgwụgwọ ọ bụla na ụbọchị oge nchere ya ga-agwụ.", "Ereke mmiri ara, akwa ma ọ bụ anụ tupu oge nchere agwụ.", "Kpọọ dọkịta anụmanụ ozugbo maka ọnwụ na mberede, ọtụtụ na-arịa ọrịa, ọmụmụ siri ike ma ọ bụ ihe ịrịba ama akwara."],
          words: [["Ihe na-ebi n'ahụ anụ (parasite)", "ikpuru, akọrọ, mite ma ọ bụ flea na-ebi n'elu ma ọ bụ n'ime anụ ma na-emerụ ya ahụ."], ["Inye ọgwụ ikpuru (deworming)", "inye ọgwụ iji gbuo ikpuru dị n'ime anụ."], ["Oge nchere (withdrawal period)", "oge mgbe ọgwụgwọ gachara tupu e nwee ike ire ma ọ bụ iri mmiri ara, akwa ma ọ bụ anụ."], ["Ịnagide ọgwụ (resistance)", "mgbe ikpuru, akọrọ ma ọ bụ nje na-adị ndụ mgbe e nyere ha ọgwụ na-egbu ha na mbụ."]],
          slides: [
            { title: "Ikpuru na akọrọ", bullets: ["Ikpuru: uto na-adịghị mma, afọ zara aza, ime anya na-acha ọcha", "Akọrọ na-agbasa ọrịa, dịka East Coast fever", "Ụlọ dị ọcha, ahịhịa ọhụrụ, ọ dịghị ijupụta"] },
            { title: "Gwọọ ya n'ụzọ ziri ezi", bullets: ["Atụmatụ dọkịta anụmanụ maka ọgwụ ikpuru na ọgwụ akọrọ", "Ọnụọgụ ọgwụ si n'akara ma ọ bụ dọkịta anụmanụ; ekwela nkọ", "Ọnụọgụ na-ezighi ezi na-eme ka ha nagide ọgwụ"] },
            { title: "Oge nchere", bullets: ["Oge tupu e nwee ike ire mmiri ara, akwa ma ọ bụ anụ", "Dekọọ ụbọchị njedebe maka ọgwụgwọ ọ bụla", "Enweghị ọgwụ nje n'enweghị ndụmọdụ dọkịta anụmanụ"] },
            { title: "Kpọọ dọkịta anụmanụ ozugbo", bullets: ["Ọnwụ na mberede; ọtụtụ na-arịa ọrịa n'otu oge", "Ọ naghị eri nri ihe karịrị otu ụbọchị; ọmụmụ siri ike", "Ọbara na-agba, ihe ịrịba ama akwara, ọrịa a ga-akọrịrị"] }
          ],
          sources: [FAO_PRUDENT, WOAH_ND],
          tryIt: "Ọrụ ikpeazụ: dee atụmatụ ahụike gị peeji otu. Tinye nlele gị kwa ụbọchị, atụmatụ nri na mmiri, iwu ụlọ anụ, kalenda ọgwụ mgbochi site n'aka dọkịta anụmanụ gị, iwu biosecurity, atụmatụ ikpuru na akọrọ, ndekọ ị ga-edebe, na ihe ịrịba ama ndị pụtara na ị ga-akpọ dọkịta anụmanụ, ya na aha na nọmba dọkịta anụmanụ ahụ n'elu peeji ahụ.",
          youCanNow: "ịchịkwa ikpuru na akọrọ ya na dọkịta anụmanụ gị, idebe ndekọ ọgwụgwọ na oge nchere ha, na ịmata mgbe ị ga-akpọ dọkịta anụmanụ.",
          quickCheck: [
            { objective: "O6", q: "Kedu ọrịa akọrọ na-agbasa n'ehi n'Ọwụwa Anyanwụ Afrịka?", options: ["East Coast fever", "Ọrịa Newcastle", "Fowl pox", "PPR"], answer: 0, why: "Akọrọ na-agbasa East Coast fever n'ehi n'Ọwụwa Anyanwụ Afrịka." },
            { objective: "O6", q: "Ị gwọrọ otu ewu taa. Gịnị ka ị ga-ede na ndekọ?", options: ["Ọ dịghị ihe, ma ọ bụrụ na ewu ahụ yiri ka ọ dị mma", "Naanị ọnụ ahịa ọgwụ ahụ", "Ụbọchị, ọgwụ, onye nyere ya na mgbe oge nchere ga-agwụ", "Aha onye agbata obi"], answer: 2, why: "Idekọ ọgwụgwọ ọ bụla na oge nchere ya na-eme ka mmiri ara na anụ dị mma ire na iri." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Igbochi na ịgwọ ọrịa",
        questions: [
          { objective: "O4", q: "Onye kwesịrị ịtọ usoro ọgwụ mgbochi anụ gị?", options: ["Onye agbata obi bi na mba ọzọ", "Akwụkwọ mgbasa ozi nke ụlọ ahịa nri anụ", "Dọkịta anụmanụ e debanyere aha ma ọ bụ onye ọrụ ahụike anụmanụ maara ógbè gị", "Onye ọ bụla n'ịntanetị"], answer: 2, why: "Ọgwụ mgbochi a chọrọ, na mgbe a chọrọ ya, dabere n'ọrịa ndị dị n'ógbè gị." },
          { objective: "O4", q: "Ị zụtara ọgwụ mgbochi ma jee ije awa atọ n'anwụ ịlọta ụlọ. Gịnị bụ ihe egwu ya?", options: ["Okpomọkụ nwere ike imebi ọgwụ mgbochi ahụ, ọ gaghịkwa echebe anụ gị", "Ọ ga-esi ike karịa", "Ọ dịghị ihe egwu ọ bụla", "Ọ ga-aghọ ọgwụ ikpuru"], answer: 0, why: "A ga-edebe ọgwụ mgbochi ka ọ jụrụ oyi site n'ụlọ ahịa ruo n'anụ." },
          { objective: "O5", q: "Kedu ihe ịrịba ama nke ọrịa Newcastle n'ọkụkọ?", options: ["Ọkpọ isi na-egbuke karịa", "Akwa karịa", "Uto ngwa ngwa", "Olu gbagọrọ agbagọ, ịkụ ume n'ike na ọnwụ na mberede"], answer: 3, why: "WOAH depụtara ihe ịrịba ama iku ume na akwara, akwa ibelata na ọnwụ dị elu." },
          { objective: "O5", q: "Ọtụtụ n'ime ọkụkọ gị nwụrụ na mberede. Gịnị ka ị kwesịrị ime?", options: ["Ree ndị fọdụrụ ngwa ngwa n'ahịa", "Kpọchie igwe ọkụkọ ahụ, kpọọ dọkịta anụmanụ, ebugharịla ma ọ bụ ree ọkụkọ", "Nye ndị agbata obi ọkụkọ nwụrụ anwụ", "Zụta ọkụkọ ọhụrụ n'otu ụbọchị ahụ"], answer: 1, why: "Ibugharị ma ọ bụ ire ọkụkọ na-agbasa ọrịa; dọkịta anụmanụ ga-achọpụta ihe kpatara ya." },
          { objective: "O6", q: "Gịnị bụ oge nchere?", options: ["Oge tupu e nwee ike ire ma ọ bụ iri mmiri ara, akwa ma ọ bụ anụ nke anụ a gwọrọ", "Ezumike maka ndị ọrụ ugbo", "Oge ọgwụ mgbochi na-adịgide", "Oge iji mịa mkpụrụ ọka"], answer: 0, why: "Ọ na-egbochi ihe fọdụrụ n'ọgwụ ịbanye na nri." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Ahụike na Nlekọta Anụ Ụlọ",
    questions: [
      { objective: "O1", q: "Olee oge kacha mma maka nlele ahụike kwa ụbọchị?", options: ["Otu ugboro n'ọnwa", "Naanị mgbe anụ nwụrụ", "N'oge inye nri ma ọ bụ ịmị mmiri ara", "Mgbe ọ bụla; anụ na-elekọta onwe ha"], answer: 2, why: "Anụ na-agbakọ ma na-agagharị n'oge inye nri ma ọ bụ ịmị mmiri ara." },
      { objective: "O1", q: "Ọkụkọ nne dị mma na-enwekarị:", options: ["Ọkpọ isi na-acha ọcha, nke kpọnwụrụ akpọnwụ", "Nku nwere ntụrụ", "Olu gbagọrọ agbagọ", "Ọkpọ isi na-acha uhie uhie, ọ na-agagharịkwa"], answer: 3, why: "Ọkpọ isi na-egbuke na ịgagharị bụ ihe ịrịba ama nke ahụike dị mma." },
      { objective: "O1", q: "Kedu ihe ịrịba ama ịdọ aka na ntị n'ehi a na-amị mmiri ara?", options: ["Mmiri ara ibelata na mberede", "Ịtaghachi nri", "Anya na-egbuke", "Iri nri nke ọma"], answer: 0, why: "Mmiri ara ibelata na mberede na-apụtakarị ọrịa." },
      { objective: "O2", q: "Gịnị na-ebu ụzọ n'inye anụ nri?", options: ["Ihe mgbakwunye dị oke ọnụ", "Mmiri dị ọcha kwa ụbọchị", "Naanị mineral lick", "Hay ebu kpuchiri"], answer: 1, why: "Ọ bụrụ na mmiri dị ọcha ezughị, ahụike na mmepụta na-ada ngwa ngwa." },
      { objective: "O2", q: "Napier grass na lucerne bụ ọmụmaatụ nke:", options: ["Ọgwụ mgbochi", "Ọgwụ ikpuru", "Nri anụ a kụrụ akụ (fodder)", "Ihe ndina ọkụkọ"], answer: 2, why: "Ha bụ ihe a kụrụ n'ubi iji nye anụ nri." },
      { objective: "O2", q: "Gịnị mere a ga-eji gbanwee nri anụ nwayọọ nwayọọ n'ime ụbọchị ole na ole?", options: ["Ka afọ ghara ịkpasu anụ ahụ", "N'ihi na nri ọhụrụ na-adị njọ mgbe niile", "Iji chekwaa mmiri", "Ọ dịghị mkpa"], answer: 0, why: "Mgbanwe nri na mberede na-akpasu mgbari nri." },
      { objective: "O3", q: "Ezigbo ụlọ anụ bụ:", options: ["Nke juputara ma kpọọ ọkụ", "Nke dị mmiri mmiri ma gbaa ọchịchịrị", "Nke kpọrọ nkụ, nwere ndò, nwere ikuku ma na-adịghị juputa", "Nke ndị ohi nwere ike ịbanye"], answer: 2, why: "Ụlọ kpọrọ nkụ, nwere ikuku, na-adịghị juputa na-ebelata ọrịa." },
      { objective: "O3", q: "Ị zụtara ewu ọhụrụ atọ. Gịnị ka ị kwesịrị ime tupu i jikọta ha na igwe ewu gị?", options: ["Jikọta ha ozugbo", "Debe ha iche ruo oge dọkịta anụmanụ gị kwuru", "Ree ewu ochie gị", "Nye ha ọgwụ nje ma ọ bụrụ na ihe ga-eme"], answer: 1, why: "Idebe anụ ọhụrụ iche na-egbochi ha iweta ọrịa." },
      { objective: "O3", q: "Zoonosis bụ:", options: ["Ụdị nri anụ a kụrụ akụ", "Ọgwụ mgbochi", "Ọrịa nwere ike isi n'anụmanụ gafee na mmadụ, ma ọ bụ site na mmadụ gafee n'anụmanụ", "Ụlọ ọkụkọ"], answer: 2, why: "Brucellosis na anthrax bụ ọmụmaatụ." },
      { objective: "O4", q: "PPR bụ ọrịa ọjọọ nke:", options: ["Ewu na atụrụ", "Ọkụkọ", "Ọka", "Azụ"], answer: 0, why: "Peste des petits ruminants na-arịa ewu na atụrụ." },
      { objective: "O4", q: "Na Nigeria, kedu ụlọ ọrụ na-edebe ndepụta aha ndị dọkịta anụmanụ?", options: ["Nigerian Meteorological Agency", "Veterinary Council of Nigeria", "Central Bank", "Ụlọ ọrụ na-ere nri anụ"], answer: 1, why: "VCN na-edebanye aha ndị dọkịta anụmanụ." },
      { objective: "O4", q: "Ebee ka ị ga-azụta ọgwụ mgbochi?", options: ["N'aka onye ọ bụla n'akụkụ okporo ụzọ", "N'ịntanetị n'aka ndị na-ere ihe a na-amaghị", "Na friji ochie nke onye agbata obi", "N'agrovet nwere ikike, na-elele ụbọchị njedebe"], answer: 3, why: "Ndị na-ere ihe nwere ikike na ọgwụ mgbochi oge ya agafebeghị nwere ike ịrụ ọrụ karịa." },
      { objective: "O5", q: "Dị ka WOAH si kwuo, ọrịa Newcastle na-agbasa site na:", options: ["Naanị ìhè anyanwụ", "Mmiri dị ọcha", "Naanị ọkụkọ a gbara ọgwụ mgbochi", "Ọkụkọ na-arịa ọrịa, nsị ha, na nri, mmiri, ngwaọrụ na uwe nje metọrọ"], answer: 3, why: "Imetụ ha aka na ihe nje metọrọ na-agbasa nje virus ahụ." },
      { objective: "O5", q: "Kedu usoro biosecurity dị ọnụ ala?", options: ["Ikwe ka ndị ọbịa gafee n'ụlọ ọkụkọ", "Ịkekọrịta igbe ọkụkọ na ugbo ndị ọzọ n'asachaghị ha", "Ịsa aka na iji foot dip tupu ịbanye", "Ikwe ka nnụnụ ọhịa rie n'ihe nri ọkụkọ"], answer: 2, why: "Ịdị ọcha dị mfe na-egbochi nje ịbata." },
      { objective: "O5", q: "Maka ọkụkọ obodo, FAO na-akọwa ọgwụ mgbochi Newcastle ndị:", options: ["A gwakọtara na siminti", "Bụ naanị maka ehi", "Ọ dịghị mgbe a chọrọ ha", "A na-etinye n'anya ma na-anagide okpomọkụ karịa"], answer: 3, why: "Ọgwụ mgbochi na-anagide okpomọkụ dị ka I-2 dabara maka igwe ọkụkọ obodo." },
      { objective: "O5", q: "Mgbe ọrịa Newcastle bilitere, WOAH na-adụ ọdụ ka a hapụ ụlọ a sachara asacha n'enweghị ọkụkọ ruo:", options: ["Ụbọchị 1", "Ụbọchị 21", "Awa 2", "E nwere ike itinye ọkụkọ ọhụrụ ozugbo"], answer: 1, why: "WOAH depụtara ụbọchị 21 n'enweghị ọkụkọ tupu e tinye ọkụkọ ọhụrụ." },
      { objective: "O6", q: "Kedu ihe ịrịba ama nke ikpuru n'ewu?", options: ["Uto ngwa ngwa na ajị na-egbuke", "Ime anya na-acha uhie uhie nke ọma", "Iri nri karịa ka ọ na-eri ma na-ebu ibu", "Uto na-adịghị mma, afọ zara aza na ime anya na-acha ọcha"], answer: 3, why: "Ikpuru na-aṅụ ọbara ma na-ewere ihe na-edozi ahụ, nke a na-akpata ihe ịrịba ama ndị a." },
      { objective: "O6", q: "Kedu otu ị ga-esi mara ọnụọgụ ọgwụ ikpuru ị ga-enye?", options: ["Kọọ nkọ site n'ile anya", "Jiri ọkara ya iji chekwaa ego", "Gbasoo akara ọgwụ ma ọ bụ dọkịta anụmanụ gị", "Jiri okpukpu abụọ ka o doo anya"], answer: 2, why: "Ọnụọgụ ọgwụ na-ezighi ezi na-emerụ anụ ahụ ma ọ bụ na-eme ka ikpuru nagide ọgwụ." },
      { objective: "O6", q: "A gwọrọ otu ehi ụnyaahụ, oge nchere agwụbeghị. Gịnị banyere mmiri ara ya?", options: ["Ree ya dị ka ọ na-adị", "Ereke ma ọ bụ ṅụọ ya ruo mgbe oge nchere gwụrụ", "Gwakọta ya na mmiri ara ndị ọzọ", "Sie ya ma ree ya"], answer: 1, why: "Mmiri ara n'oge nchere nwere ike ibu ihe fọdụrụ n'ọgwụ." },
      { objective: "O6", q: "Kedu ọnọdụ pụtara na ị kwesịrị ịkpọ dọkịta anụmanụ ozugbo?", options: ["Ọtụtụ anụ na-arịa ọrịa n'otu oge", "Anụ na-ataghachi nri", "Ọkụkọ nne na-yi akwa dị ka ọ na-eme", "Nwa ehi na-aṅụ nke ọma"], answer: 0, why: "Ọtụtụ anụ na-arịa ọrịa nwere ike ịpụta ọrịa na-agbasa." }
    ]
  },
  // ---- ADDIE: Ntụle ----
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [0, 2, 3, 6, 7, 9, 11, 12, 16, 19] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ nke atụmatụ ahụ ma lelee ya ọzọ.",
    criteria: [
      { name: "Nlele kwa ụbọchị", objective: "O1", notYet: "Enweghị nlele kwa ụbọchị, ma ọ bụ e depụtaghị ihe ịrịba ama ịdọ aka na ntị.", meets: "Nlele kwa ụbọchị n'oge inye nri ma ọ bụ ịmị mmiri ara, ya na ihe ịrịba ama ịdọ aka na ntị bụ isi na ihe a ga-eme.", exceeds: "Na-eme ka nlele ahụ dabara ụdị anụ ọ bụla a na-azụ." },
      { name: "Nri, mmiri na ụlọ anụ", objective: "O2", notYet: "Enweghị atụmatụ oge ọkọchị, ma ọ bụ iwu ụlọ anụ na ịdị ọcha adịghị.", meets: "Nri na mmiri dị ọcha n'afọ niile ya na atụmatụ oge ọkọchị, na iwu abụọ gbasara ụlọ anụ na ịdị ọcha.", exceeds: "Gụnyere ịkụ ma ọ bụ ichekwa nri anụ na idebe anụ ọhụrụ iche." },
      { name: "Usoro ọgwụ mgbochi", objective: "O4", notYet: "Enweghị usoro, ma ọ bụ nke a na-ekwekọrịtaghị na dọkịta anụmanụ.", meets: "Usoro e dere ede site n'aka dọkịta anụmanụ e debanyere aha, ya na otu a ga-esi debe ọgwụ mgbochi ka ọ jụrụ oyi ma ka oge ya agafebeghị.", exceeds: "Na-ekwu maka mkpọsa gọọmentị na aha na nọmba dọkịta anụmanụ ahụ." },
      { name: "Biosecurity", objective: "O5", notYet: "Enweghị iwu biosecurity.", meets: "Iwu biosecurity, ma maka ọkụkọ, ọgwụ mgbochi Newcastle na ihe a ga-eme ma ọkụkọ nwụọ na mberede.", exceeds: "Usoro dị ọnụ ala dị ka ịsa aka na foot dip na-arụ ọrụ." },
      { name: "Ikpuru, ndekọ na dọkịta anụmanụ", objective: "O6", notYet: "Enweghị ndekọ, ma ọ bụ a kọrọ nkọ n'ọnụọgụ ọgwụ.", meets: "E hazịrị nchịkwa ikpuru na akọrọ ya na dọkịta anụmanụ, ndekọ ọgwụgwọ nwere oge nchere, na ihe ịrịba ama ndị pụtara na a ga-akpọ dọkịta anụmanụ ozugbo.", exceeds: "Ndekọ na-agụnyekwa ịmụ nwa, ịdị arọ ma ọ bụ mmepụta, na ọnwụ." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma nweta Ruru eru ma ọ bụ Karịrị n'ahịrị rubric ọ bụla nke atụmatụ ahụike",
      "Ndị na-amụ ihe kwuru na ha nwetara usoro ọgwụ mgbochi e dere ede site n'aka dọkịta anụmanụ e debanyere aha n'ime ụbọchị 60 (nnyocha nsochi)",
      "Mgbanwe n'ọnwụ anụ ma ọ bụ ọkụkọ, na mmiri ara ma ọ bụ akwa, nke ndị na-amụ ihe kọrọ mgbe ọnwa isii gachara",
      "Ndị na-amụ ihe kwuru na ha na-edebe ndekọ ọgwụgwọ ma na-asọpụrụ oge nchere"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Akwụkwọ ndetu ma ọ bụ spreadsheet n'ekwentị maka ndekọ",
      "Nọmba ekwentị nke dọkịta anụmanụ e debanyere aha ma ọ bụ onye ọrụ ahụike anụmanụ",
      "Ohere ịhụ anụ nke onye na-amụ ihe n'onwe ya maka nlele kwa ụbọchị",
      "Ihe dị ka nkeji 60 n'ozuzu, n'oge nkenke, gbakwunyere oge ide atụmatụ ahụike"
    ],
    facilitatorNotes: [
      "N'otu ndị ọrụ ugbo: meenụ ule mbido ọnụ, wee mee nlele ahụike kwa ụbọchị n'ezi anụ.",
      "Kpọọ dọkịta anụmanụ e debanyere aha ma ọ bụ onye ọrụ ahụike anụmanụ ka ọ kọwaa ọrịa na ọgwụ mgbochi dị n'ógbè ahụ; enyela ọnụọgụ ọgwụ n'onwe gị.",
      "Saa aka mgbe i metụchara anụ, emetụkwala anụ nwụrụ na mberede ma ọbara na-asọpụta.",
      "Nyere onye ọ bụla na-amụ ihe aka ide aha na nọmba dọkịta anụmanụ ya tupu ọ pụọ.",
      "Jiri rubric tụọ akara atụmatụ ahụike ahụ, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};
