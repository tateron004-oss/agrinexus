"use strict";

// Koach Learn course (Igbo translation of agriculture-africa/agri-fish-farming.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.
// Safety rule kept: no drug or chemical doses; sick fish -> fisheries extension officer or vet. Money figures are examples only.

const FAO_OXYGEN = { name: "FAO, African Regional Aquaculture Centre (Kutty, 1987): oxygen gbazere n'ime mmiri ọdọ azụ", url: "https://www.fao.org/4/AC175E/AC175E04.htm" };
const GHANA_MANUAL = { name: "Akwụkwọ nkuzi ndị ọrụ ugbo maka obere ọdọ azụ tilapia na Ghana (Agyakwah na ndị ọzọ, 2020; ebe nchekwa CGIAR)", url: "https://hdl.handle.net/10568/143338" };
const WORLDFISH_NG = { name: "WorldFish: ịzụ tilapia GIFT na Nigeria (ebe a na-amụpụta ụmụ azụ, uto, ahịa), 2025", url: "https://worldfishcenter.org/impact-story/tilapia-farming-more-lucrative-catfish-inside-nigerias-aquaculture-shift" };
const ALR_CI = { name: "Aquatic Living Resources (2001): azụ tilapia karịrị akarị n'ọdọ na-ebelata ihe a na-ewe na Côte d'Ivoire", url: "https://www.alr-journal.org/articles/alr/abs/2001/05/alr1120/alr1120.html" };
const GHANA_FC = { name: "Fisheries Commission (Ghana): ikike (permit) na akwụkwọ ikike, gụnyere maka ịzụ azụ", url: "https://www.fishcom.gov.gh/" };
const KENYA_ACT = { name: "Kenya: Fisheries Management and Development Act, 2016 (ndebanye aha na ikike maka ịzụ azụ), na FAOLEX", url: "https://faolex.fao.org/docs/pdf/ken160880.pdf" };

module.exports = {
  id: "agri-fish-farming-ig",
  lang: "ig",
  translationOf: "agri-fish-farming",
  category: "Agriculture (Africa)",
  name: "Mmalite Ịzụ Azụ (Aquaculture)",
  skills: "Ịhọrọ tilapia ma ọ bụ catfish, Ịhọrọ ebe na iwu ọdọ azụ, Ịlele ịdị mma mmiri, Ịzụta na itinye ezigbo ụmụ azụ, Inye nri na ịgbakọ FCR, Ịgbakọ ego otu okirikiri mmepụta na-efu",
  outcome: "ime atụmatụ ma rụọ otu okirikiri mmepụta nke tilapia ma ọ bụ African catfish n'ọdọ ma ọ bụ na tank: ịhọrọ ụdị azụ na ebe, ịlele ikike (permit), ịnwale mmiri site na ngwa dị mfe, itinye ezigbo ụmụ azụ n'ọnụọgụ na-enweghị nsogbu, inye nri nke ọma ma dekọọ FCR, idozi nsogbu a na-ahụkarị, na iwepụta azụ ma ree ya n'uru i gbakọrọ tupu oge eruo.",
  about: [
    "Ihe ọmụmụ a bụ maka ndị ọhụrụ na obere ndị na-azụ azụ, ndị ọrụ ugbo, ndị ntorobịa na-azụ ahịa ugbo, na ndị ọrụ extension (ndị na-enye ndị ọrụ ugbo ndụmọdụ) na Ghana, Nigeria, Kenya, Côte d'Ivoire na n'Africa niile, ndị chọrọ ịzụ tilapia ma ọ bụ African catfish n'ọdọ ma ọ bụ na tank. Ịzụ azụ nwere ike iweta ezigbo ego ma nye ezinụlọ nri, mana ọtụtụ ọdọ mbụ na-ada n'ihi ụmụ azụ na-adịghị mma, mmiri ọjọọ, na nri na-efu ego karịa ihe a na-ere azụ ahụ.",
    "Isi 1 na-ahazi ugbo azụ: ịhọrọ ụdị azụ, ịhọrọ ebe na iwu ọdọ ma ọ bụ tank na ịlele ikike, na idebe mmiri n'ọnọdụ ziri ezi site na nnwale dị mfe. Isi 2 na-azụ azụ ma na-ere ha: ezigbo ụmụ azụ na ọnụọgụ azụ n'ọdọ, inye nri na FCR na nsogbu a na-ahụkarị, na iwepụta azụ, ire ha na ego otu okirikiri.",
    "Iwu na ikike maka ugbo azụ dị iche site na mba ruo mba, ha na-agbanwekwa; ihe ọmụmụ a na-akpọ aha ụlọ ọrụ ị ga-ajụ. Ọ naghị enye ọnụọgụ ọgwụ ma ọ bụ kemịkalụ: maka azụ na-arịa ọrịa, kpọọ onye ọrụ extension azụ gị ma ọ bụ dọkịta anụmanụ. Ọnụ ego e dere bụ naanị ọmụmaatụ; jiri ọnụ ahịa nke gị. Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise ma na-ejedebe n'ọrụ ị ga-eme n'ugbo gị. E nwere nnwale ihe ọmụma na njedebe isi ọ bụla, na ule nwere ajụjụ 20 na njedebe ihe ọmụmụ a."
  ],
  finalTask: "Dee atụmatụ nwere ego niile maka otu okirikiri n'otu ọdọ (ma ọ bụ tank) n'ugbo gị, ma ọ bụ maka ọmụmaatụ dị ka ọdọ tilapia mita square 300 nso Kumasi ma ọ bụ tank catfish nso Ibadan: ụdị azụ na ihe mere i ji họrọ ya; ebe ahụ, ebe mmiri si na ikike i lelere; nnwale mmiri na ugboro ole ị ga-eme ha; ọnụọgụ ụmụ azụ, ọnụọgụ n'otu mita square na ebe a na-amụpụta ụmụ azụ (hatchery) a kwadoro ị ga-azụta n'aka ya; azụ ole a tụrụ anya ga-adị ndụ, ịdị arọ ha n'oge owuwe na nri a ga-achọ site n'iji FCR a tụrụ anya; ego niile ọ ga-efu; ego a tụrụ anya ị ga-enweta n'ire; uru ma ọ bụ mfu; na ọnụ ahịa break-even gị kwa kilogram.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị ọhụrụ na obere ndị na-azụ azụ, ndị ọrụ ugbo, ndị ntorobịa na-azụ ahịa ugbo, na ndị ọrụ extension na Ghana, Nigeria, Kenya, West Africa na-asụ French na n'ebe ndị ọzọ n'Africa, ndị na-eme atụmatụ ma ọ bụ na-arụ otu ọdọ ala ruo ọdọ ole na ole, ọdọ e tinyere akwa (liner) ma ọ bụ tank nke tilapia ma ọ bụ African catfish.",
    startingPoint: "Ha maara na a pụrụ ịzụ azụ, ụfọdụ nwekwara ebe mmiri si na ntakịrị ala. Ọtụtụ amaghị otu esi anwale mmiri, ha na-azụta ụmụ azụ n'aka onye ọ bụla na-ere ya, ha na-enye nri site n'ịkọ nkọ, ha agbakọbeghịkwa ego otu okirikiri tupu ha amalite.",
    gap: "Ihe na-emekarị ka ugbo azụ daa bụ ụmụ azụ na-adịghị mma ma ọ bụ nke nwoke na nwanyị gwakọtara, azụ karịrị akarị n'ọdọ, oxygen na-ada n'isi ụtụtụ, inye nri karịrị akarị, na nri na-efu ego karịa ihe a na-enweta n'ire azụ. Ndị ọrụ ugbo kwesịrị ide atụmatụ okirikiri n'akwụkwọ, idebe mmiri ka ọ dị mma site na nnwale dị mfe, itinye ọnụọgụ ziri ezi nke ezigbo ụmụ azụ, na idekọ nri megide uto ka ha mara tupu owuwe ma ha ga-enweta uru.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ; ihe ọmụmụ a dịkwa n'asụsụ Spanish, French na Arabic",
      "Ngwaọrụ: ekwentị nkịtị ma ọ bụ smartphone, igwe mgbakọ, na ngwa nnwale dị ọnụ ala (temometa, mpempe pH, Secchi disk e mere n'ụlọ)",
      "Oge: nkuzi nkeji 4 ruo 6 nke dabara n'etiti ọrụ ugbo",
      "Ikike na iwu gbasara ụdị azụ dị iche site na mba ruo mba; ndị na-amụ ihe ga-ajụ ọfịs azụ nke mba ha ma ọ bụ nke county ha",
      "Enweghị ọnụọgụ ọgwụ ma ọ bụ kemịkalụ; a na-akpọ onye ọrụ extension ma ọ bụ dọkịta anụmanụ maka azụ na-arịa ọrịa",
      "Ọnụ ego bụ ọmụmaatụ; ọnụ ahịa nri na azụ dị iche nke ukwuu site n'ebe ruo n'ebe na site n'oge ruo n'oge"
    ],
    prerequisites: "Ọ dịghị. Echiche \"Farm Records and Gross Margin\" (Ndekọ ugbo na uru) site na \"Azụmahịa Ugbo na Nlekọta Ugbo\" ga-enyere aka n'ịgbakọ ego na Nkuzi 6."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe e nyere gị mmiri gị, ala gị, ego gị na ahịa dị nso gị", action: "ịhọrọ tilapia ma ọ bụ African catfish na usoro ọdọ ma ọ bụ tank", standard: "na-enye opekata mpe ihe atọ mere i ji họrọ ya, nke metụtara ebe gị na ndị na-azụ gị" },
    { id: "O2", condition: "Mgbe e nyere gị ebe ị nwere ike iji", action: "ịlele ebe ahụ maka mmiri, ala, mkpọda na idei mmiri ma depụta ikike ị ga-ajụ maka ya", standard: "na-akpọ aha ụlọ ọrụ azụ nke mba gị ị ga-akpọtụrụ" },
    { id: "O3", condition: "Site n'iji temometa, mpempe pH na Secchi disk", action: "ịnwale mmiri ọdọ ma kwuo ihe ị ga-eme mgbe oxygen, okpomọkụ ma ọ bụ pH na-adịghị n'ọnọdụ ziri ezi", standard: "na-edekọ nnwale ọ bụla na ụbọchị na oge ya" },
    { id: "O4", condition: "Mgbe e nyere gị nha ọdọ ma ọ bụ tank", action: "ịgbakọ ọnụọgụ ụmụ azụ ị ga-etinye ma depụta ihe ị ga-elele n'ebe a na-amụpụta ụmụ azụ a kwadoro", standard: "na mgbakọ ahụ ziri ezi, na ọnụọgụ n'otu mita square nke gị na onye ọrụ extension ma ọ bụ hatchery kwekọrịtara" },
    { id: "O5", condition: "Mgbe e nyere gị ndekọ nri na ịdị arọ azụ a tụrụ", action: "ịgbakọ FCR (feed conversion ratio) ma hụ nsogbu a na-ahụkarị n'oge", standard: "ziri ezi ruo otu ọnụọgụ mgbe ntụpọ (decimal) gachara" },
    { id: "O6", condition: "Mgbe e nyere gị ego ọ ga-efu, azụ ole a tụrụ anya ga-adị ndụ, ịdị arọ n'oge owuwe na ọnụ ahịa", action: "ide atụmatụ nwere ego niile maka otu okirikiri, na uru na ọnụ ahịa break-even", standard: "na ego ọ bụla tinyere n'ime ya, na mgbakọ niile ziri ezi" }
  ],
  chapters: [
    {
      name: "Isi 1: Ime atụmatụ ugbo azụ",
      lessons: [
        {
          title: "Ịhọrọ ụdị azụ na usoro",
          objectives: ["O1"],
          minutes: 5,
          goal: "Họrọ tilapia ma ọ bụ African catfish na usoro ọdọ ma ọ bụ tank maka ugbo gị.",
          text: [
            "Azụ abụọ ka a na-azụkarị n'Africa. Nile tilapia bụ nke a ma ama na Ghana, Kenya, Côte d'Ivoire na Egypt. Ọ na-eri nri pellet na nri dị n'ime mmiri na-acha akwụkwọ ndụ, a na-erekwa ya ọhụrụ, e ghere eghe ma ọ bụ e ghere n'ọkụ. Tilapia nwoke na nwanyị gwakọtara na-amụ ụmụ n'ime ọdọ ma jupụta ya n'obere azụ, ya mere ndị ọrụ ugbo na-azụta ụmụ azụ mono-sex (nke ka ukwuu bụ nwoke). Ụdị ndị e mere ka ha ka mma dị ka GIFT na-eto ngwa ngwa; WorldFish na-akọ na ndị ọrụ ugbo na Nigeria na-eru ihe dị ka 600 g n'ime ọnwa isii site na GIFT na ezigbo nri.",
            "African catfish (Clarias) bụ isi azụ a na-azụ na Nigeria, a na-erekwa ya ọhụrụ na nke a mịrị n'anwụrụ ọkụ. Ọ na-eku ume ikuku, ya mere ọ na-anagide oxygen dị ala karịa, a pụkwara itinye ọtụtụ n'otu ebe, nke ka ukwuu na tank. Mana ọ chọrọ nri nwere protein karịa, azụ ndị buru ibu na-erikwa ndị dị obere, ya mere ị ga-ekewa ha site n'ịdị ukwuu ha.",
            "Họrọ usoro: ọdọ ala dị ọnụ ala ịrụ ebe ala na-ejide mmiri; ọdọ e tinyere akwa (liner) ma ọ bụ tank simenti ma ọ bụ plastik na-arụ ọrụ n'ala aja ma ọ bụ n'obere ala, mana ọ na-efu ego karịa iwu ya ma chọọ ịgbanwe mmiri ugboro ugboro. Nke kachasị mkpa: tupu i họrọ, jụọ ndị na-azụ azụ ụdị azụ na nha ha chọrọ, na ọnụ ahịa ha ga-akwụ."
          ],
          steps: ["Jụọ ndị na-azụ atọ (ndị na-ere n'ahịa, họtel, ndị na-amị azụ n'anwụrụ ọkụ) ụdị azụ, nha na ọnụ ahịa ha chọrọ.", "Lelee mmiri gị: ole, ma ọ̀ dị n'afọ niile, na otu o si dị ọcha.", "Lelee ala gị: ọ̀ na-ejide mmiri?", "Họrọ ụdị azụ ndị na-azụ chọrọ, nke mmiri gị nwere ike ịkwado.", "Họrọ ọdọ ma ọ bụ tank site n'ala gị, ohere gị na ego gị."],
          words: [["Aquaculture", "ịzụ azụ na anụmanụ ndị ọzọ bi na mmiri."], ["Fingerling (nwa azụ)", "nwa azụ dị ka mkpịsị aka n'ogo, nke a na-azụta itinye n'ọdọ."], ["Mono-sex", "ụmụ azụ fọrọ nke nta ka ha niile bụrụ otu ụdị (tilapia nwoke), ka ha too kama ịmụ ụmụ."], ["GIFT", "Genetically Improved Farmed Tilapia, ụdị tilapia na-eto ngwa ngwa nke WorldFish mepụtara."]],
          slides: [
            { title: "Nile tilapia", bullets: ["A ma ama na Ghana, Kenya, Côte d'Ivoire", "Ọ na-eri pellet na nri mmiri na-acha akwụkwọ ndụ", "Zụta ụmụ azụ mono-sex; GIFT na-eto ngwa ngwa"] },
            { title: "African catfish", bullets: ["Isi azụ a na-azụ na Nigeria; ọhụrụ ma ọ bụ a mịrị n'anwụrụ ọkụ", "Ọ na-eku ume ikuku; a pụrụ itinye ọtụtụ, na tank", "Ọ chọrọ nri nwere protein; kewaa ha site n'ịdị ukwuu"] },
            { title: "Ọdọ ma ọ bụ tank", bullets: ["Ọdọ ala: ọnụ ala ebe ala na-ejide mmiri", "Ọdọ nwere akwa ma ọ bụ tank: ala aja, obere ala", "Tank na-efu ego karịa, ọ chọrọ ịgbanwe mmiri ugboro ugboro"] },
            { title: "Bido n'onye na-azụ", bullets: ["Kedu azụ? Kedu nha? Kedu ọnụ ahịa?", "Jụọ opekata mpe ndị na-azụ atọ", "Wee họrọ ụdị azụ na usoro"] }
          ],
          sources: [WORLDFISH_NG, GHANA_MANUAL],
          tryIt: "Jụọ opekata mpe ndị na-azụ atọ nọ gị nso ụdị azụ ha chọrọ, na nha na ọnụ ahịa ha. Dee azịza ha, wee họrọ tilapia ma ọ bụ catfish na ọdọ ma ọ bụ tank, ya na ihe atọ mere i ji họrọ ya site n'ebe gị na ndị na-azụ gị.",
          youCanNow: "ịhọrọ n'etiti tilapia na African catfish, na n'etiti ọdọ na tank, site n'iji mmiri gị, ala gị na ndị na-azụ gị.",
          quickCheck: [
            { objective: "O1", q: "Gịnị mere ndị na-azụ tilapia ji azụta ụmụ azụ mono-sex?", options: ["Ha dị ọnụ ala karịa", "Ka azụ ahụ too kama ịmụ ụmụ ma jupụta ọdọ n'obere azụ", "Ha anaghị achọ nri", "Ha na-atọ ụtọ karịa"], answer: 1, why: "Tilapia nwoke na nwanyị gwakọtara na-amụ ụmụ n'ọdọ, ha wee bụrụ ndị na-anaghị eto eto, dị obere." },
            { objective: "O1", q: "Ala gị bụ aja, ọ naghị ejide mmiri. Kedu usoro kacha dabara?", options: ["Ọdọ ala na-enweghị akwa", "Ọ gaghị ekwe omume ịzụ azụ", "Ọdọ n'akụkụ osimiri", "Ọdọ nwere akwa (liner) ma ọ bụ tank"], answer: 3, why: "Akwa ma ọ bụ tank na-ejide mmiri ebe ala anaghị ejide ya." }
          ]
        },
        {
          title: "Ịhọrọ ebe na iwu ọdọ, na ikike",
          objectives: ["O2"],
          minutes: 6,
          goal: "Lelee ebe ọdọ azụ ma depụta ikike ị ga-ajụ maka ya.",
          text: [
            "Ezigbo ebe ọdọ nwere: mmiri n'afọ niile, dị ọcha ma ụlọ ọrụ mmepụta, ebe a na-egwu ala (mine) ma ọ bụ ubi a gbara ọgwụ emetọghị ya; ala nwere ụrọ zuru ezu iji jide mmiri (pịa otu aka ala dị mmiri mmiri: ọ bụrụ na ọ jigide ọdịdị ya, nke ahụ bụ ezigbo ihe ịrịba ama); mkpọda dị nwayọọ ka mmiri wee banye ma pụọ n'ọdọ n'onwe ya; enweghị idei mmiri; ma dịkwa nso nke ọma ka ị lezie ya anya megide ndị ohi na anụmanụ na-eri azụ.",
            "Wuo ọdọ ahụ na mgbidi ala (dike) siri ike, nwere mkpọda, nke a kụrụ ahịhịa n'elu ya iji gbochie ala ịgbapụ, ebe mmiri na-abata (inlet) nwere nzacha ka azụ ọhịa ghara ịbanye, na ebe mmiri na-apụ (outlet) ma ọ bụ ọkpọkọ ka i wee nwee ike ịgbapụ mmiri niile n'oge owuwe. Ọdọ dị narị mita square ole na ole dị mfe ilekọta maka onye na-amalite. Gbaa ya ogige ma ọ bụrụ na i nwere ike, ma debe anụmanụ na ụmụaka n'ebe dị anya. Kwadebe ọdọ tupu itinye azụ: kpọọ ya nkụ, wepụ apịtị na azụ ọhịa, ma tinye lime na fatịlaịza ma ọ bụrụ na onye ọrụ extension gị dụrụ gị ọdụ.",
            "Ugbo azụ na-achọkarị ndebanye aha ma ọ bụ ikike (permit), mgbe ụfọdụ kwa nnabata maka iji mmiri ma ọ bụ maka gburugburu ebe obibi. Na Kenya, Fisheries Management and Development Act, 2016 chọrọ ka e debanye aha ugbo azụ ma nye ya ikike n'aka Kenya Fisheries Service. Na Ghana, Fisheries Commission na-enye ikike ịzụ azụ. Na Nigeria, jụọ Federal Department of Fisheries and Aquaculture na ministri steeti gị; na Côte d'Ivoire, ministri na-ahụ maka azụ. Ebe ụfọdụ na-ekwe naanị ụdị azụ ụfọdụ. Iwu na-agbanwe, ya mere lelee tupu i gwuo ala."
          ],
          steps: ["Lelee ebe mmiri si: ọ̀ zuru ezu n'afọ niile, ọ̀ dịkwa ọcha.", "Mee nnwale ịpị ala; rịọ onye ọrụ extension ka o kwado ya.", "Họrọ ala nwere mkpọda dị nwayọọ, karịa ebe idei mmiri na-eru, nso ebe ị nwere ike ilele ya anya.", "Mee atụmatụ mgbidi ala siri ike, inlet nwere nzacha na outlet maka ịgbapụ mmiri.", "Kpọtụrụ ọfịs azụ: ndebanye aha, ikike, iji mmiri, ụdị azụ a nabatara.", "Kwadebe ọdọ tupu itinye azụ, dịka onye ọrụ extension gị dụrụ ọdụ."],
          words: [["Dike (mgbidi ala)", "akụkụ ala e wuliri elu gbaa ọdọ gburugburu."], ["Inlet na outlet", "ọkpọkọ ma ọ bụ ụzọ mmiri si abata n'ọdọ na ebe o si apụ."], ["Ikike (permit)", "nnabata gọọmentị ị chọrọ tupu ị malite ma ọ bụ rụọ ugbo ahụ."]],
          slides: [
            { title: "Ezigbo ebe", bullets: ["Mmiri dị ọcha n'afọ niile", "Ala nwere ụrọ na-ejide mmiri", "Mkpọda dị nwayọọ; enweghị idei mmiri; dị mfe nche"] },
            { title: "Wuo ya nke ọma", bullets: ["Mgbidi ala siri ike, nwere ahịhịa", "Inlet nwere nzacha; outlet maka ịgbapụ mmiri", "Ogige; debe anụmanụ na ụmụaka n'ebe dị anya"] },
            { title: "Ikike: buru ụzọ lelee", bullets: ["Kenya: debanye aha ma nweta ikike n'aka Kenya Fisheries Service", "Ghana: ikike ịzụ azụ site na Fisheries Commission", "Nigeria na Côte d'Ivoire: ọfịs azụ nke mba na nke steeti"] },
            { title: "Tupu i gwuo ala", bullets: ["Jụọ maka iwu iji mmiri na gburugburu ebe obibi", "Jụọ ụdị azụ a nabatara", "Iwu na-agbanwe: jụọ ọfịs ahụ"] }
          ],
          sources: [GHANA_MANUAL, KENYA_ACT, GHANA_FC],
          tryIt: "Jegharịa n'ebe ị chọrọ iji. Dee ebe mmiri si, ihe nnwale ịpị ala gosiri, mkpọda ya, ihe egwu idei mmiri ọ bụla na otu ị ga-esi chee ya nche. Wee chọta nọmba ekwentị ma ọ bụ ọfịs nke ụlọ ọrụ azụ gị ma depụta ajụjụ atọ ị ga-ajụ maka ikike na ụdị azụ.",
          youCanNow: "ịmata ma ebe dabara maka ọdọ azụ, ime atụmatụ isi akụkụ ya, na ịmara ọfịs azụ ị ga-ajụ maka ikike.",
          quickCheck: [
            { objective: "O2", q: "Ị pịa ala dị mmiri mmiri, o jigide ọdịdị ya. Gịnị ka nke a na-egosi?", options: ["Ala ahụ nwere ụrọ, o nwere ike ijide mmiri", "Ala ahụ nwere aja karịrị akarị", "Idei mmiri ga-eru ebe ahụ", "Mmiri ahụ emetọọla"], answer: 0, why: "Ala ụrọ na-ejigide ọdịdị ya na-ejidekarị mmiri ọdọ; rịọ onye ọrụ extension ka o kwado ya." },
            { objective: "O2", q: "Tupu i gwuo ọdọ azụ na Ghana, onye ka ị ga-ajụ maka ikike?", options: ["Naanị ụlọ akụ", "Ọ dịghị onye; ọdọ azụ anaghị achọ ikike", "Fisheries Commission", "Ụlọ ọrụ na-egbu ụmụ ahụhụ"], answer: 2, why: "Fisheries Commission nke Ghana na-enye ikike ịzụ azụ." }
          ]
        },
        {
          title: "Ịdị mma mmiri site na nnwale dị mfe",
          objectives: ["O3"],
          minutes: 6,
          goal: "Nwalee mmiri ọdọ ma mee ihe mgbe ọ na-adịghị mma.",
          text: [
            "Azụ bi n'ime mmiri, ya mere mmiri ọjọọ na-egbu ha ngwa ngwa. Lezie ihe atọ anya. Oxygen: n'ọdọ na-acha akwụkwọ ndụ, ọ na-adị elu n'ehihie ma dị ala n'isi ụtụtụ, n'ihi na osisi na algae na-eji oxygen n'abalị. Ụbọchị igwe ojii, algae karịrị akarị, nri na-ere ure na nsị anụmanụ na-eme ka ọ ka njọ. Otu akwụkwọ FAO kwuru na tilapia na-akwụsịkarị imegharị ahụ mgbe oxygen dara ruo ihe dị ka 1 ruo 2 mg kwa lita. Okpomọkụ: tilapia na catfish bụ azụ mmiri na-ekpo ọkụ; ha na-eri nri ma na-eto nwayọọ na mmiri dị jụụ, dị ka n'ugwu ma ọ bụ n'oge oyi. pH (otu mmiri si gbaa ụka): mmiri gbara ụka karịrị akarị ma ọ bụ nke alkaline karịrị akarị na-esogbu azụ.",
            "Nnwale dị mfe: temometa maka okpomọkụ; mpempe akwụkwọ pH ma ọ bụ ngwa nnwale (kit); Secchi disk (efere ọcha na ojii n'osisi e debere akara) iji hụ otu mmiri si acha akwụkwọ ndụ; na anya gị n'isi ụtụtụ. Azụ na-ekupụ ọnụ n'elu mmiri n'isi ụtụtụ pụtara na oxygen dị ala. Ọ bụrụ na i nwere ike ịzụta ya, ngwa nnwale oxygen ma ọ bụ mita na-enye ọnụọgụ.",
            "Ọ bụrụ na oxygen dị ala: kwụsị ma ọ bụ belata inye nri ruo mgbe azụ ahụ gbakere, tinye mmiri ọhụrụ, fesaa ma ọ bụ pọmpụ mmiri iji gwakọta ikuku n'ime ya, ma wepụ azụ nwụrụ anwụ. Ọ bụrụ na mmiri na-acha akwụkwọ ndụ nke ukwuu, belata fatịlaịza. Ọ bụrụ na pH ezighi ezi, jụọ onye ọrụ extension gị maka itinye lime. Dekọọ nnwale ọ bụla na ụbọchị na oge ya."
          ],
          steps: ["Lelee ọdọ n'isi ụtụtụ: azụ ọ̀ na-ekupụ ọnụ n'elu mmiri?", "Were temometa tụọ okpomọkụ mmiri.", "Nwalee pH site na mpempe ma ọ bụ kit otu ugboro n'izu.", "Kpanye Secchi disk n'ime mmiri ruo mgbe ọ na-apụ n'anya; dee omimi ya.", "Oxygen dị ala: kwụsị inye nri, tinye mmiri ọhụrụ, fesaa ma ọ bụ tinye ikuku, wepụ azụ nwụrụ anwụ.", "Dee ihe nnwale ọ bụla gosiri na ụbọchị na oge ya."],
          words: [["Oxygen gbazere", "oxygen gwakọtara n'ime mmiri, nke azụ na-eku site n'ọkpụkpụ ume ha (gills)."], ["pH", "ọnụọgụ na-egosi otu mmiri si gbaa ụka ma ọ bụ bụrụ alkaline."], ["Secchi disk", "efere ojii na ọcha a na-akpanye n'ime mmiri iji hụ otu o si doo anya ma ọ bụ acha akwụkwọ ndụ."], ["Aeration", "ịgwakọta ikuku n'ime mmiri, site na pọmpụ, ihe nkụgharị ma ọ bụ ịfesa mmiri."]],
          slides: [
            { title: "Oxygen", bullets: ["Ọ kacha elu n'ehihie, kacha ala n'isi ụtụtụ", "Ọ na-aka njọ n'ụbọchị igwe ojii, na nri na-ere ure", "Tilapia na-adị nwayọọ nso 1 ruo 2 mg kwa lita"] },
            { title: "Okpomọkụ na pH", bullets: ["Mmiri na-ekpo ọkụ: uto ngwa ngwa; mmiri jụrụ oyi: nwayọọ", "Mmiri gbara ụka ma ọ bụ alkaline karịrị akarị na-esogbu azụ", "Jụọ onye ọrụ extension maka lime"] },
            { title: "Nnwale dị mfe", bullets: ["Temometa; mpempe pH", "Secchi disk: otu mmiri si acha akwụkwọ ndụ", "Nlele isi ụtụtụ: azụ na-ekupụ ọnụ = oxygen dị ala"] },
            { title: "Oxygen dị ala: mee ihe ugbu a", bullets: ["Kwụsị ma ọ bụ belata inye nri", "Tinye mmiri ọhụrụ; fesaa ma ọ bụ tinye ikuku", "Wepụ azụ nwụrụ anwụ; dekọọ ya"] }
          ],
          sources: [FAO_OXYGEN, GHANA_MANUAL],
          tryIt: "Mee Secchi disk site n'efere ọcha e tere ojii n'akụkụ abụọ n'ime anọ, kegide ya n'osisi e debere akara kwa 5 cm. Wee mee mpempe ndekọ nnwale mmiri nwere kọlụm maka ụbọchị, oge, okpomọkụ, pH, omimi Secchi, otu azụ si eme na ihe e mere, ma dejupụta otu ahịrị site n'ọdọ ma ọ bụ ebe mmiri dị gị nso.",
          youCanNow: "ịlele oxygen, okpomọkụ, pH na otu mmiri si acha akwụkwọ ndụ site na ngwa dị mfe, na ime ihe ngwa ngwa mgbe mmiri na-adịghị mma.",
          quickCheck: [
            { objective: "O3", q: "Olee mgbe oxygen na-adịkarị ala n'ọdọ azụ na-acha akwụkwọ ndụ?", options: ["N'etiti ehihie", "N'ehihie", "N'isi ụtụtụ", "Ọ naghị agbanwe agbanwe"], answer: 2, why: "N'abalị osisi na algae na-eji oxygen ma ha anaghị emepụta ya, ya mere ọ na-ada ruo isi ụtụtụ." },
            { objective: "O3", q: "N'isi ụtụtụ ị hụrụ azụ na-ekupụ ọnụ n'elu mmiri. Gịnị ka ị ga-ebu ụzọ mee?", options: ["Nye ha nri karịa", "Kwụsị inye nri, tinye mmiri ọhụrụ ma fesaa ma ọ bụ tinye ikuku", "Tinye fatịlaịza", "Chere ruo echi"], answer: 1, why: "Ikupụ ọnụ pụtara oxygen dị ala; nri belatara na mmiri ọhụrụ gwakọtara ikuku na-eweghachi ya." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ime atụmatụ ugbo azụ",
        questions: [
          { objective: "O1", q: "Kedu nke bụ eziokwu banyere African catfish?", options: ["Ọ na-eku ume ikuku ma na-anagide oxygen dị ala karịa", "Ọ na-eri naanị ahịhịa", "Ọ na-amụ ụmụ ma jupụta ọdọ dị ka tilapia nwoke na nwanyị gwakọtara", "A pụghị ịzụ ya na tank"], answer: 0, why: "Catfish nwere akụkụ ahụ na-eku ume ikuku, ya mere ọ na-anagide oxygen dị ala na tank." },
          { objective: "O1", q: "Gịnị ka ị ga-ebu ụzọ chọpụta tupu ị họrọ azụ?", options: ["Agba azụ ahụ", "Azụ nwanne gị na-azụ", "Azụ kacha ibu e nwere ike inweta", "Ụdị azụ, nha na ọnụ ahịa ndị na-azụ gị chọrọ"], answer: 3, why: "Azụ ị na-enweghị ike ire n'ezigbo ọnụ ahịa bụ mfu, n'agbanyeghị otu o si too nke ọma." },
          { objective: "O2", q: "Gịnị mere ọdọ ji chọọ outlet ma ọ bụ ebe mmiri na-apụ?", options: ["Ka azụ ọhịa banye", "Ka i wee nwee ike ịgbapụ mmiri maka owuwe na nhicha", "Iji mee ka mmiri dị ọkụ", "Ọ chọghị ya"], answer: 1, why: "Ịgbapụ mmiri na-eme ka owuwe na nkwadebe ọdọ dị mfe." },
          { objective: "O2", q: "Na Kenya, a ga-edebanye aha ugbo azụ ma nweta ikike n'aka:", options: ["Kenya Dairy Board", "Kenya Wildlife Service", "Kenya Fisheries Service", "Ọfịs okporo ụzọ county"], answer: 2, why: "Fisheries Management and Development Act, 2016 chọrọ ndebanye aha na ikike n'aka Kenya Fisheries Service." },
          { objective: "O3", q: "Gịnị ka Secchi disk na-egosi?", options: ["Otu mmiri si acha akwụkwọ ndụ ma ọ bụ doo anya", "Ịdị arọ azụ", "pH ọdọ", "Oxygen na mg kwa lita"], answer: 0, why: "Omimi ebe disk ahụ na-apụ n'anya na-egosi algae ole dị n'ime mmiri." }
        ]
      }
    },
    {
      name: "Isi 2: Ịzụ na ire azụ",
      lessons: [
        {
          title: "Ezigbo ụmụ azụ na ọnụọgụ azụ n'ọdọ",
          objectives: ["O4"],
          minutes: 5,
          goal: "Gbakọọ ọnụọgụ ụmụ azụ ị ga-etinye ma lelee ebe a na-amụpụta ụmụ azụ.",
          text: [
            "Ezigbo ụmụ azụ bụ ọkara ọrụ ahụ. Zụta n'aka hatchery (ebe a na-amụpụta ụmụ azụ) nke ụlọ ọrụ azụ gị debanyere aha ma ọ bụ kwado, ma ọ bụ nke onye ọrụ extension gị kwadoro. Jụọ: Tilapia ndị a ọ̀ bụ mono-sex, kedu ụdị ha? Ụmụ azụ niile ọ̀ ha nha? Ole na-anwụ n'izu mbụ, ha ga-agbanwekwa ha? Ị nwere ike ịhụ hatchery ahụ? Ụmụ azụ dị ndụ nke ọma na-egwu mmiri ike, enweghị ọnya, ma ha nha. Azụ e si n'ọhịa nweta ma ọ bụ ndị na-aha nha na-eweta ọrịa, ịmụ ụmụ na iri ibe ha.",
            "Stocking density bụ ọnụọgụ azụ n'otu mita square (ọdọ) ma ọ bụ n'otu mita cubic (tank). Azụ karịrị akarị pụtara oxygen dị ala, uto nwayọọ na obere azụ. Otu nnyocha n'ọdọ tilapia na Côte d'Ivoire, ebe e nyere naanị fatịlaịza, chọpụtara na azụ 2 ruo 3 n'otu mita square ebelatalarị ihe a na-ewe. Site n'ezigbo nri pellet, a pụrụ itinye azụ karịa, ma tank nwere mmiri na-asọ ma ọ bụ ikuku a na-etinye pụrụ ịnara karịa ya, nke ka ukwuu maka catfish. Kwekọrịta ọnụọgụ gị na onye ọrụ extension gị ma ọ bụ hatchery maka usoro gị.",
            "Ọmụmaatụ (ọnụọgụ ndị a bụ naanị ọmụmaatụ): ọdọ dị 20 m na 15 m bụ mita square 300. N'ọnụọgụ ọmụmaatụ nke azụ 3 n'otu mita square, ị ga-etinye ụmụ azụ 900. Bụga ụmụ azụ n'oge ụtụtụ dị jụụ, n'akpa nwere oxygen ma ọ bụ na mmiri dị ọcha, ma hapụ akpa ndị ahụ ka ha sere n'elu ọdọ ruo nwa oge ka okpomọkụ ha dakọtara tupu ị hapụ azụ ahụ."
          ],
          steps: ["Tụọ ọdọ: ogologo x obosara = mpaghara na mita square.", "Kwekọrịta ọnụọgụ n'otu mita square na onye ọrụ extension gị ma ọ bụ hatchery.", "Mpaghara x ọnụọgụ n'otu mita square = ọnụọgụ ụmụ azụ.", "Họrọ hatchery e debanyere aha ma ọ bụ a kwadoro; jụọ maka ụdị, mono-sex, nha na ọnwụ.", "Lelee ụmụ azụ: ha na-egwu mmiri ike, enweghị ọnya, ha nha.", "Bụga ha n'ụtụtụ dị jụụ; hapụ akpa ka ha sere ka okpomọkụ dakọtara tupu ị hapụ ha."],
          words: [["Stocking density", "ọnụọgụ azụ n'otu mita square nke ọdọ, ma ọ bụ n'otu mita cubic nke mmiri tank."], ["Hatchery", "ugbo na-amụpụta azụ ma na-azụ ụmụ azụ maka ire."], ["Iri ibe (cannibalism)", "azụ na-eri azụ ndị ọzọ nke ụdị ha, nke a na-ahụkarị na catfish na-aha nha."]],
          slides: [
            { title: "Ezigbo ụmụ azụ", bullets: ["Hatchery e debanyere aha ma ọ bụ a kwadoro", "Tilapia: mono-sex, ụdị a maara", "Ha na-egwu mmiri ike, enweghị ọnya, ha nha"] },
            { title: "Ọnụọgụ azụ dị mkpa", bullets: ["Ha karịrị akarị: oxygen dị ala, uto nwayọọ, obere azụ", "Nnyocha Côte d'Ivoire: 2-3 n'otu m2 karịrị akarị na naanị fatịlaịza", "Kwekọrịta ọnụọgụ na onye ọrụ extension ma ọ bụ hatchery"] },
            { title: "Mgbakọ ọmụmaatụ", bullets: ["20 m x 15 m = 300 m2", "300 m2 x azụ 3 n'otu m2 = ụmụ azụ 900", "Ọnụọgụ ndị a bụ naanị ọmụmaatụ"] },
            { title: "Ụbọchị itinye azụ", bullets: ["Ụtụtụ dị jụụ", "Akpa nwere oxygen ma ọ bụ mmiri dị ọcha", "Hapụ akpa ka ha sere ka okpomọkụ dakọtara"] }
          ],
          sources: [ALR_CI, WORLDFISH_NG, GHANA_MANUAL],
          tryIt: "Tụọ ọdọ ma ọ bụ tank gị (ma ọ bụ jiri 20 m na 15 m). Jụọ onye ọrụ extension ma ọ bụ hatchery ọnụọgụ n'otu mita square maka usoro gị, ma gbakọọ ụmụ azụ ole ị ga-azụta. Wee dee ajụjụ ise ị ga-ajụ hatchery ahụ tupu ị kwụọ ụgwọ.",
          youCanNow: "ịgbakọ ọnụọgụ ụmụ azụ maka ọdọ na ịhọrọ hatchery na-ere ezigbo azụ.",
          quickCheck: [
            { objective: "O4", q: "Ọdọ dị 25 m na 10 m, ọnụọgụ a kwekọrịtara bụ azụ 2 n'otu mita square. Ụmụ azụ ole?", options: ["250", "350", "500", "700"], answer: 2, why: "25 x 10 = mita square 250, ma 250 x 2 = ụmụ azụ 500." },
            { objective: "O4", q: "Kedu ụmụ catfish ka ị ga-ajụ ịzụta?", options: ["Azụ na-egwu mmiri ike, ha nha", "Azụ si na hatchery e debanyere aha", "Azụ na-enweghị ọnya", "Azụ na-aha nha nke ukwuu"], answer: 3, why: "Azụ na-aha nha na-eduga n'iri ibe, n'ihi na catfish buru ibu na-eri ndị dị obere." }
          ]
        },
        {
          title: "Inye nri, FCR na nsogbu a na-ahụkarị",
          objectives: ["O5"],
          minutes: 6,
          goal: "Gbakọọ FCR ma hụ nsogbu n'oge.",
          text: [
            "Nri na-abụkarị ego kacha ukwuu n'ịzụ azụ. Jiri ezigbo nri nwere pellet ha na ọnụ azụ ahụ; pellet na-ese n'elu mmiri na-eme ka ị hụ otu e riri. Nye nri n'otu oge ahụ kwa ụbọchị, ma nye naanị ihe azụ ga-eri n'ime nkeji ole na ole; nri a na-erighị na-ere ure ma na-eri oxygen. Ọnụọgụ nri na-arịgo ka azụ na-eto: kwa izu abụọ ruo anọ, were ụgbụ nweta ụfọdụ azụ ma tụọ ha, gbakọọ ịdị arọ ha n'ozuzu, ma gbanwee nri site n'iji chaatị onye mere nri ahụ ma ọ bụ nke onye ọrụ extension. Debe nri ebe kpọrọ nkụ, n'elu ala; nri nwere ebu bụ nsi.",
            "FCR (feed conversion ratio) na-egosi otu nri si aghọ azụ: FCR = nri e nyere / ịdị arọ e nwetara. Ọmụmaatụ: i nyere nri 400 kg, azụ ahụ nwetara 250 kg, ya mere FCR = 400 / 250 = 1.6. FCR dị ala pụtara nri dị nta maka kg azụ ọ bụla. FCR na-arịgo site n'inye nri karịrị akarị, nri na-adịghị mma, mmiri ọjọọ na azụ na-arịa ọrịa.",
            "Nsogbu a na-ahụkarị: oxygen dị ala n'isi ụtụtụ; anụmanụ na-eri azụ dị ka nnụnụ, agwọ na otter, na ndị ohi; tilapia na-amụ ụmụ mgbe ụmụ azụ bụ nwoke na nwanyị gwakọtara; catfish na-eri ibe ha mgbe ha na-aha nha (kewaa ha); idei mmiri na-asọpụ azụ; na ọrịa. Ihe ịrịba ama azụ na-arịa ọrịa bụ ịghara iri nri, ọnya, igwu mmiri n'ụzọ dị iche ma ọ bụ ọtụtụ ọnwụ. Wepụ azụ nwụrụ anwụ, kwụsị inye nri, lelee mmiri, ma kpọọ onye ọrụ extension azụ gị ma ọ bụ dọkịta anụmanụ; ejila ọgwụ ma ọ bụ kemịkalụ n'enweghị ndụmọdụ ha."
          ],
          steps: ["Nye ezigbo nri ha nha n'oge a kara aka.", "Nye naanị ihe azụ ga-eri n'ime nkeji ole na ole.", "Kwa izu 2 ruo 4, tụọ ụfọdụ azụ ma gbanwee nri site na chaatị.", "Dekọọ nri niile e nyere.", "FCR = nri e nyere / ịdị arọ e nwetara.", "Lezie anya kwa ụbọchị maka nsogbu; kpọọ onye ọrụ extension ma ọ bụ dọkịta anụmanụ maka azụ na-arịa ọrịa."],
          words: [["FCR (feed conversion ratio)", "kilogram nri e ji too otu kilogram azụ."], ["Ịtụ ụfọdụ azụ", "iji ụgbụ nweta ụfọdụ azụ ma tụọ ha iji mata ịdị arọ ha n'ozuzu."], ["Anụ na-eri azụ (predator)", "anụmanụ na-eri azụ, dị ka ụfọdụ nnụnụ, agwọ na otter."]],
          slides: [
            { title: "Nye nri nke ọma", bullets: ["Ezigbo nri, pellet ha nha", "Oge a kara aka; naanị ihe ha ga-eri n'ime nkeji", "Tụọ ụfọdụ azụ kwa izu 2 ruo 4"] },
            { title: "FCR (feed conversion ratio)", bullets: ["FCR = nri e nyere / ịdị arọ e nwetara", "Nri 400 kg / uto 250 kg = 1.6", "Nke dị ala ka mma"] },
            { title: "Nsogbu a na-ahụkarị", bullets: ["Oxygen dị ala; anụ na-eri azụ na ndị ohi", "Tilapia na-amụ ụmụ; catfish na-eri ibe ha", "Idei mmiri; ọrịa"] },
            { title: "Azụ na-arịa ọrịa", bullets: ["Ha anaghị eri nri, ọnya, igwu mmiri dị iche, ọnwụ", "Wepụ azụ nwụrụ anwụ; kwụsị inye nri; lelee mmiri", "Kpọọ onye ọrụ extension ma ọ bụ dọkịta anụmanụ; ọ dịghị ọgwụ n'enweghị ndụmọdụ"] }
          ],
          sources: [GHANA_MANUAL, FAO_OXYGEN],
          tryIt: "Mee ndekọ inye nri nwere kọlụm maka ụbọchị, nri e nyere (kg), ịdị arọ azụ a tụrụ n'ozuzu na ndetu. Wee gbakọọ FCR maka ọmụmaatụ a: e nyere nri 300 kg, azụ ahụ nwetara 200 kg. Dee otu ụzọ isi belata ya.",
          youCanNow: "inye azụ nri nke ọma, ịgbakọ FCR na ịhụ nsogbu a na-ahụkarị n'oge.",
          quickCheck: [
            { objective: "O5", q: "I nyere nri 450 kg, azụ ahụ nwetara 300 kg. Kedu FCR?", options: ["0.7", "1.2", "1.5", "2.0"], answer: 2, why: "450 kewara 300 bụ 1.5." },
            { objective: "O5", q: "Gịnị mere ị ga-eji nye naanị ihe azụ ga-eri n'ime nkeji ole na ole?", options: ["Nri a na-erighị na-ere ure, na-eri oxygen ma na-emefu ego", "Azụ anaghị achọ nri", "Nri bụ n'efu", "Ọ na-eme ka mmiri doo anya maka igwu mmiri"], answer: 0, why: "Nri a na-erighị bụ ego e mefuru, ọ na-emetọkwa mmiri." }
          ]
        },
        {
          title: "Iwepụta azụ, ire ha na ego otu okirikiri",
          objectives: ["O6"],
          minutes: 6,
          goal: "Dee atụmatụ nwere ego niile maka otu okirikiri, na uru na ọnụ ahịa break-even.",
          text: [
            "Mee atụmatụ ire tupu itinye azụ. Kwekọrịta na ndị na-azụ maka nha, ụbọchị na ọnụ ahịa, ma wepụta azụ n'ụtụtụ dị jụụ. Kwụsị inye nri otu ụbọchị tupu oge ahụ ka azụ wee nagide njem nke ọma. Gbapụ ụfọdụ mmiri n'ọdọ ma jiri ụgbụ nweta azụ, ma ọ bụ gbapụ ya niile maka owuwe zuru ezu. Debe azụ ka ha jụọ oyi ma dị ọcha n'elu ice ma ọ bụ na ndò, ma ree ha ngwa ngwa: azụ ọhụrụ na-emebi n'ime awa ole na ole n'okpomọkụ. Ịmị azụ n'anwụrụ ọkụ ma ọ bụ ịkpọ ya nkụ, nke a na-emekarị maka catfish na Nigeria, na-agbakwunye uru ma nye oge karịa iji ree ya. Iwepụta naanị azụ kacha ibu nwere ike ịgbasa ire n'ọtụtụ izu.",
            "Buru ụzọ gbakọọ ego otu okirikiri n'akwụkwọ. Ọmụmaatụ maka ọdọ tilapia mita square 300 na Ghana (ọnụọgụ niile bụ naanị ọmụmaatụ; jiri ọnụ ahịa nke gị): ụmụ azụ 900 n'ọnụ GHS 1.50 = GHS 1,350; nri: owuwe a tụrụ anya bụ azụ 720 (80% dị ndụ) x 0.35 kg = 252 kg, ma n'FCR a tụrụ anya nke 1.6 nke ahụ chọrọ ihe dị ka nri 400 kg n'ọnụ GHS 12 = GHS 4,800; nkwadebe ọdọ GHS 300; ụgwọ ọrụ na nche GHS 1,200; owuwe na njem GHS 300. Ego niile ọ ga-efu GHS 7,950.",
            "Ire: 252 kg n'ọnụ GHS 40 kwa kg = GHS 10,080. Uru = 10,080 - 7,950 = GHS 2,130. Ọnụ ahịa break-even = ego niile ọ ga-efu / kg e wepụtara = 7,950 / 252 = ihe dị ka GHS 31.50 kwa kg. Ọ bụrụ na ọnụ ahịa onye na-azụ dị nso break-even gị, gbanwee atụmatụ ahụ: ụmụ azụ ka mma, nri e mefuru dị nta, ma ọ bụ onye na-azụ ka mma."
          ],
          steps: ["Kwekọrịta nha, ụbọchị na ọnụ ahịa na ndị na-azụ tupu itinye azụ.", "Depụta ego niile ọ ga-efu: ụmụ azụ, nri, nkwadebe ọdọ, ụgwọ ọrụ, nche, owuwe, njem.", "Owuwe a tụrụ anya = ụmụ azụ x ndị dị ndụ x ịdị arọ n'oge owuwe.", "Nri a chọrọ = ịdị arọ e nwetara x FCR a tụrụ anya.", "Uru = ego e nwetara n'ire - ego niile ọ ga-efu.", "Ọnụ ahịa break-even = ego niile ọ ga-efu / kg e wepụtara."],
          words: [["Ọnụọgụ ndị dị ndụ (survival rate)", "akụkụ azụ e tinyere ka dị ndụ n'oge owuwe."], ["Ọnụ ahịa break-even", "ọnụ ahịa kwa kg nke ego e nwetara n'ire ga-akwụ naanị ego niile ọ ga-efu."], ["Owuwe ụfọdụ", "iwepụta azụ kacha ibu ma hapụ ndị fọdụrụ ka ha too."]],
          slides: [
            { title: "Wepụta ma ree", bullets: ["Buru ụzọ kwekọrịta onye na-azụ, nha, ụbọchị na ọnụ ahịa", "Ụtụtụ dị jụụ; kwụsị inye nri otu ụbọchị tupu oge ahụ", "Ice ma ọ bụ ndò; ree ngwa ngwa, ma ọ bụ mịa n'anwụrụ ọkụ ma ọ bụ kpọọ nkụ"] },
            { title: "Ego ọmụmaatụ (GHS)", bullets: ["Ụmụ azụ 1,350; nri 4,800", "Nkwadebe ọdọ 300; ụgwọ ọrụ, nche 1,200; owuwe 300", "Ngụkọta 7,950. Naanị ọmụmaatụ"] },
            { title: "Nsonaazụ ọmụmaatụ", bullets: ["Azụ 720 x 0.35 kg = 252 kg", "252 kg x GHS 40 = GHS 10,080", "Uru ihe dị ka GHS 2,130"] },
            { title: "Ọnụ ahịa break-even", bullets: ["Ego niile ọ ga-efu / kg e wepụtara", "7,950 / 252 = ihe dị ka GHS 31.50 kwa kg", "Ọ dị nso break-even? Gbanwee atụmatụ"] }
          ],
          sources: [GHANA_MANUAL, WORLDFISH_NG],
          tryIt: "Ọrụ ikpeazụ: dee atụmatụ nwere ego niile maka otu okirikiri nke ọdọ ma ọ bụ tank gị (ma ọ bụ ọmụmaatụ ahụ): ụdị azụ, ebe na ikike i lelere, nnwale mmiri, ụmụ azụ na hatchery, ndị a tụrụ anya ga-adị ndụ, ịdị arọ n'oge owuwe na nri, ego niile ọ ga-efu, ego a tụrụ anya ị ga-enweta n'ire, uru na ọnụ ahịa break-even kwa kg.",
          youCanNow: "ime atụmatụ owuwe na ire, na ịgbakọ uru na ọnụ ahịa break-even nke otu okirikiri ịzụ azụ.",
          quickCheck: [
            { objective: "O6", q: "Ego niile ọ ga-efu bụ NGN 900,000, ị tụrụ anya iwepụta catfish 600 kg. Kedu ọnụ ahịa break-even?", options: ["NGN 600 kwa kg", "NGN 1,000 kwa kg", "NGN 1,200 kwa kg", "NGN 1,500 kwa kg"], answer: 3, why: "900,000 kewara 600 bụ 1,500 kwa kg." },
            { objective: "O6", q: "Olee mgbe ị ga-ekwekọrịta ire na ndị na-azụ?", options: ["Mgbe owuwe gachara, mgbe azụ nọ n'elu ice", "Tupu itinye azụ, ma kwado ya ọzọ tupu owuwe", "Ọ dịghị mgbe; ree n'akụkụ okporo ụzọ", "Naanị ma ọ bụrụ na azụ fọdụrụ"], answer: 1, why: "Azụ ọhụrụ na-emebi ngwa ngwa; onye na-azụ e kwekọrịtara na ya n'oge na-egbochi ire n'ọnụ ala n'ike." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Ịzụ na ire azụ",
        questions: [
          { objective: "O4", q: "Ebee ka ị ga-azụta ụmụ azụ?", options: ["N'aka hatchery e debanyere aha ma ọ bụ a kwadoro", "Site n'osimiri dị gị nso", "N'aka onye ọ bụla kacha ọnụ ala", "N'aka onye ọ bụla na-agafe agafe na-ere"], answer: 0, why: "Hatchery e debanyere aha ma ọ bụ a kwadoro na-enye ụdị a maara, tilapia mono-sex na azụ dị ndụ nke ọma." },
          { objective: "O4", q: "Ọdọ dị 30 m na 10 m n'azụ 2 n'otu mita square chọrọ ụmụ azụ ole?", options: ["300", "400", "500", "600"], answer: 3, why: "30 x 10 = mita square 300, ma 300 x 2 = 600." },
          { objective: "O5", q: "Azụ anaghị eri nri, ha nwere ọnya, ụfọdụ na-anwụkwa. Gịnị ka ị ga-eme?", options: ["Nye ha nri karịa", "Zụta ọgwụ n'ahịa ma tinye ya", "Wepụ azụ nwụrụ anwụ, kwụsị inye nri, lelee mmiri ma kpọọ onye ọrụ extension ma ọ bụ dọkịta anụmanụ", "Tinyekwuo ụmụ azụ"], answer: 2, why: "Azụ na-arịa ọrịa chọrọ ndụmọdụ onye ọrụ ma ọ bụ dọkịta anụmanụ; ọgwụ n'enweghị ndụmọdụ nwere ike imerụ azụ na ndị na-azụ ha." },
          { objective: "O5", q: "FCR na-ada n'oge okirikiri na-apụtakarị:", options: ["A na-emefu nri", "Nri na-aghọ azụ nke ọma karịa", "Azụ na-arịa ọrịa", "Ọdọ na-acha akwụkwọ ndụ karịrị akarị"], answer: 1, why: "Nri dị nta maka kg uto ọ bụla pụtara na nri na-aghọ azụ nke ọma karịa." },
          { objective: "O6", q: "Ego e nwetara n'ire bụ GHS 12,000, ego niile ọ ga-efu bụ GHS 9,500. Kedu uru?", options: ["GHS 1,500", "GHS 2,000", "GHS 2,500", "GHS 21,500"], answer: 2, why: "12,000 wepụ 9,500 bụ 2,500." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Mmalite Ịzụ Azụ (Aquaculture)",
    questions: [
      { objective: "O1", q: "Kedu azụ bụ isi azụ a na-azụ na Nigeria?", options: ["African catfish", "Salmon", "Trout", "Carp"], answer: 0, why: "African catfish bụ isi azụ a na-azụ na Nigeria, a na-ere ya ọhụrụ na nke a mịrị n'anwụrụ ọkụ." },
      { objective: "O1", q: "Tilapia nwoke na nwanyị gwakọtara n'ọdọ na-eduga na:", options: ["Azụ buru ibu karịa", "Ire ngwa ngwa", "Ọtụtụ obere azụ na-anaghị eto eto n'ihi ịmụ ụmụ", "Nri dị nta a chọrọ"], answer: 2, why: "Tilapia na-amụ ụmụ n'ọdọ ma jupụta ya n'obere azụ." },
      { objective: "O1", q: "Gịnị bụ tilapia GIFT?", options: ["Onyinye n'efu site n'aka ndị na-azụ", "Ọrịa azụ", "Ụdị ọdọ", "Ụdị tilapia e mere ka ọ ka mma, na-eto ngwa ngwa, nke WorldFish"], answer: 3, why: "GIFT pụtara Genetically Improved Farmed Tilapia." },
      { objective: "O2", q: "Kedu ebe kacha mma maka ọdọ ala?", options: ["Ala aja n'ala osimiri na-ejupụta n'oge idei mmiri", "Ala ụrọ nwere mkpọda dị nwayọọ karịa ebe idei mmiri na-eru, nwere mmiri dị ọcha n'afọ niile", "Elu ugwu nkume na-enweghị mmiri", "N'akụkụ ebe mmiri si n'ebe a na-egwu ala (mine) apụta"], answer: 1, why: "Ụrọ na-ejide mmiri, mkpọda na-eme ka i tinye ma gbapụ mmiri, mmiri dị ọcha na-edobekwa azụ ndụ." },
      { objective: "O2", q: "Gịnị mere a ga-eji tinye nzacha n'inlet ọdọ?", options: ["Iji gbochie azụ ọhịa na anụ na-eri azụ ịbanye", "Iji mee ka mmiri dị ọkụ", "Iji nye azụ nri", "Iji mee ka owuwe dị nwayọọ"], answer: 0, why: "Azụ ọhịa na-asọ mpi maka nri, na-eweta ọrịa ma na-eri ụmụ azụ." },
      { objective: "O2", q: "Tupu i wuo ọdọ azụ, ị kwesịrị:", options: ["Ịmalite igwu ala ma jụọ ma emechaa", "Ịjụ naanị ndị agbata obi gị", "Ịjụ ọfịs azụ nke mba gị ma ọ bụ nke county gị maka ikike na ụdị azụ a nabatara", "Iche na ọ dịghị iwu ọ bụla metụtara gị"], answer: 2, why: "Ọtụtụ mba chọrọ ndebanye aha ma ọ bụ ikike, ụfọdụ na-egbochikwa ụdị azụ ụfọdụ." },
      { objective: "O3", q: "Gịnị na-eme ka oxygen dị ala n'isi ụtụtụ ka njọ?", options: ["Ụbọchị anwụ na algae dị nta", "Ụbọchị igwe ojii, algae karịrị akarị na nri na-ere ure", "Mmiri doro anya, dị ọhụrụ", "Azụ dị nta"], answer: 1, why: "Ihe ndị a na-ebelata mmepụta oxygen ma ọ bụ na-eri oxygen n'abalị." },
      { objective: "O3", q: "Tilapia na catfish na-eto nwayọọ mgbe mmiri:", options: ["Dị jụụ", "Na-ekpo ọkụ", "Dị ọcha", "Na-acha akwụkwọ ndụ"], answer: 0, why: "Ha abụọ bụ azụ mmiri na-ekpo ọkụ; mmiri dị jụụ na-eme ka ha rie nri ma too nwayọọ." },
      { objective: "O3", q: "Kedu ngwa na-atụ otu mmiri ọdọ si gbaa ụka?", options: ["Secchi disk", "Temometa", "Ụgbụ azụ", "Mpempe pH ma ọ bụ kit pH"], answer: 3, why: "Mpempe pH ma ọ bụ kit na-egosi otu mmiri si gbaa ụka ma ọ bụ bụrụ alkaline." },
      { objective: "O3", q: "Ọ bụrụ na oxygen dị ala, kedu omume EZIGHI EZI?", options: ["Itinye mmiri ọhụrụ", "Ịfesa mmiri ma ọ bụ itinye ikuku n'ime ya", "Inye nri karịa ka ọ dị na mbụ", "Iwepụ azụ nwụrụ anwụ"], answer: 2, why: "Nri agbakwunyere na-ere ure ma na-erikwu oxygen." },
      { objective: "O4", q: "Stocking density pụtara:", options: ["Ịdị arọ nri kwa ụbọchị", "Ọnụọgụ azụ n'otu mita square ma ọ bụ mita cubic", "Omimi ọdọ", "Ọnụ ahịa otu nwa azụ"], answer: 1, why: "Density bụ ọnụọgụ azụ na-ekerịta otu ohere ọ bụla." },
      { objective: "O4", q: "Ọdọ mita square 400 n'azụ 2.5 n'otu mita square chọrọ:", options: ["Ụmụ azụ 600", "Ụmụ azụ 800", "Ụmụ azụ 1,000", "Ụmụ azụ 1,600"], answer: 2, why: "400 x 2.5 = 1,000." },
      { objective: "O4", q: "Gịnị mere a ga-eji hapụ akpa ụmụ azụ ka ha sere n'elu ọdọ tupu a hapụ ha?", options: ["Ka okpomọkụ mmiri dakọtara", "Iji gụọ azụ", "Iji nye ha nri", "Iji hichaa akpa"], answer: 0, why: "Mgbanwe okpomọkụ na mberede na-awụ ụmụ azụ akpata oyi, o nwekwara ike igbu ha." },
      { objective: "O5", q: "A na-agbakọ FCR dị ka:", options: ["Azụ e rere / azụ e tinyere", "Ọnụ ahịa / ego ọ na-efu", "Mpaghara ọdọ x ọnụọgụ n'otu mita square", "Nri e nyere / ịdị arọ e nwetara"], answer: 3, why: "Ọ na-egosi kg nri ole na-eme otu kg azụ." },
      { objective: "O5", q: "I nyere nri 600 kg, azụ ahụ nwetara 400 kg. FCR?", options: ["1.5", "0.7", "2.4", "1.0"], answer: 0, why: "600 kewara 400 bụ 1.5." },
      { objective: "O5", q: "Ugboro ole ka ị ga-atụ ụfọdụ azụ iji gbanwee inye nri?", options: ["Ọ dịghị mgbe", "Naanị n'oge owuwe", "Kwa izu 2 ruo 4", "Kwa awa"], answer: 2, why: "Ịtụ azụ mgbe niile na-egosi uto ka nri wee soro ya." },
      { objective: "O5", q: "Catfish na-aha nha nke ukwuu n'otu ọdọ nwere ike iduga na:", options: ["Uto ngwa ngwa maka ha niile", "Iri ibe (cannibalism)", "Mmiri doro anya karịa", "Ego nri dị ala"], answer: 1, why: "Catfish buru ibu na-eri ndị dị obere, ya mere ndị ọrụ ugbo na-ekewa ha site n'ịdị ukwuu." },
      { objective: "O6", q: "A na-achọpụta ịdị arọ owuwe a tụrụ anya site na:", options: ["Nri x ọnụ ahịa", "Mpaghara ọdọ x omimi", "Ụmụ azụ x ndị dị ndụ x ịdị arọ n'oge owuwe", "Ego ọ na-efu / ọnụ ahịa"], answer: 2, why: "Naanị azụ dị ndụ ka a na-agụ, n'ịdị arọ a tụrụ anya ha ga-eru." },
      { objective: "O6", q: "Ọnụ ahịa break-even kwa kg bụ:", options: ["Ọnụ ahịa kacha elu n'ahịa", "Ego niile ọ ga-efu / kg e wepụtara", "Naanị ego nri", "Ọnụ ahịa nwa azụ"], answer: 1, why: "N'ọnụ ahịa a, ego e nwetara n'ire na-akwụ naanị ego niile ọ ga-efu." },
      { objective: "O6", q: "Kedu nke na-abụkarị ego kacha ukwuu n'okirikiri ịzụ azụ?", options: ["Ụgbụ", "Akara aha ọdọ", "Nnwale mmiri", "Nri"], answer: 3, why: "Nri na-ewekarị akụkụ kacha ukwuu n'ego ọ na-efu, ya mere FCR dị mkpa." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [1, 3, 5, 6, 9, 10, 12, 13, 17, 18] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      { name: "Ụdị azụ na ebe", objective: "O1", notYet: "Ọ dịghị ihe e kwuru mere e ji họrọ ụdị azụ ahụ, ma ọ bụ a jụghị onye na-azụ ọ bụla.", meets: "E họrọ ụdị azụ na usoro, ya na ihe atọ mere e ji họrọ ha site n'ebe ahụ na ndị na-azụ.", exceeds: "Ọ na-akpọ aha ndị na-azụ, nha ha chọrọ na ọnụ ahịa ha kwuru." },
      { name: "Ebe na ikike", objective: "O2", notYet: "E leleghị ebe ahụ ma ọ bụ akpọghị aha ụlọ ọrụ azụ ọ bụla.", meets: "E lelere mmiri, ala, mkpọda na idei mmiri; e depụtara ụlọ ọrụ azụ na ajụjụ gbasara ikike.", exceeds: "Akpọtụrụla ọfịs azụ ma dee azịza ha nyere." },
      { name: "Atụmatụ ịdị mma mmiri", objective: "O3", notYet: "Ọ dịghị nnwale mmiri n'atụmatụ ahụ.", meets: "Nlele isi ụtụtụ, nnwale okpomọkụ, pH na Secchi, na ugboro ole na ihe a ga-eme mgbe ha na-adịghị n'ọnọdụ ziri ezi.", exceeds: "Ọ gụnyere ndekọ nnwale e dejupụtara na atụmatụ mberede maka oxygen dị ala." },
      { name: "Ụmụ azụ na itinye ha", objective: "O4", notYet: "Ọnụọgụ ụmụ azụ adịghị ma ọ bụ ezighi ezi, ma ọ bụ akpọghị aha hatchery ọ bụla.", meets: "Ọnụọgụ ziri ezi site na mpaghara na ọnụọgụ a kwekọrịtara; a kpọrọ aha hatchery e debanyere aha ma ọ bụ a kwadoro, ya na ihe a ga-elele.", exceeds: "Ọ na-ekwu ụdị azụ, ma ha bụ mono-sex na iwu hatchery ahụ maka ịgbanwe ụmụ azụ nwụrụ anwụ." },
      { name: "Ego, uru na break-even", objective: "O6", notYet: "Ego ụfọdụ adịghị, ejikọghị nri na FCR, ma ọ bụ mgbakọ ezighi ezi.", meets: "Ego niile, nri site na uto a tụrụ anya x FCR, uru na ọnụ ahịa break-even ziri ezi.", exceeds: "Ọ na-egosi ọnọdụ nke abụọ nwere azụ dị nta dị ndụ ma ọ bụ ọnụ ahịa dị ala, na ihe onye ọrụ ugbo ga-eme." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ndị na-amụ ihe zụtara ụmụ azụ n'aka hatchery e debanyere aha ma ọ bụ a kwadoro n'ime ọnwa 6 (nnyocha nsochi)",
      "Ndị na-amụ ihe debere ndekọ nnwale mmiri na inye nri n'okirikiri niile (nnyocha nsochi)",
      "Ọnụọgụ ndị dị ndụ na FCR a kọrọ n'oge owuwe, e tụnyere ya na atụmatụ",
      "Ndị na-amụ ihe nwetara uru n'okirikiri mbụ ha, ebe ndekọ kwere"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Akwụkwọ ndetu na mkpịsị ode, ma ọ bụ ekwentị nwere spreadsheet ma ọ bụ app ndetu",
      "Igwe mgbakọ (igwe mgbakọ dị n'ekwentị dị mma)",
      "Temometa, mpempe pH na Secchi disk e mere n'ụlọ (efere ọcha, agba, osisi)",
      "Teepu nha maka ọdọ",
      "Ihe dị ka nkeji 75 n'ozuzu, n'oge nkenke, gbakwunyere omume n'ọdọ"
    ],
    facilitatorNotes: [
      "Mee Nkuzi 3 na 4 n'ọdọ na-arụ ọrụ: meenụ nlele isi ụtụtụ, nnwale Secchi na pH na ịtụ ụfọdụ azụ ọnụ.",
      "Kpọọ onye ọrụ extension azụ ka ọ kọwaa ikike na hatchery e debanyere aha na mba gị ma ọ bụ county gị.",
      "Enyela ọnụọgụ ọgwụ ma ọ bụ kemịkalụ mgbe ọ bụla; zigara ndị na-amụ ihe nwere azụ na-arịa ọrịa n'aka onye ọrụ extension ha ma ọ bụ dọkịta anụmanụ.",
      "Gbanwee ọnụ ahịa ọmụmaatụ na ọnụ ahịa obodo maka ụmụ azụ, nri na azụ tupu nkuzi ịgbakọ ego, ma kwuo n'ụzọ doro anya na ha bụ ọmụmaatụ.",
      "Jiri rubric tụọ akara ọrụ ikpeazụ, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};
