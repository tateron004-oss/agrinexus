"use strict";

// Koach Learn course (Igbo translation of agriculture-africa/agri-post-harvest.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

const FAO_LOSS = { name: "FAO: Ibelata nri na-efu na nke a na-atụfu (ihe dị ka pasentị 14 nke nri na-efu n'etiti owuwe ihe ubi na ahịa, 2019)", url: "https://www.fao.org/newsroom/detail/A-major-step-forward-in-reducing-food-loss-and-waste-is-critical-to-achieve-the-SDGs/en" };
const FAO_AFLA = { name: "FAO: Igbochi na ijikwa mycotoxin na mkpụrụ nri: njikwa aflatoxin n'ọka", url: "https://www.fao.org/4/x5036e/x5036e0s.htm" };
const FAO_DRYER = { name: "FAO TECA/STI: Ọka a mịrị nke ọma na-abara onye ọ bụla uru: ihe ịmị ọka anyanwụ", url: "https://sti-portal.fao.org/innovations/well-dried-maize-benefits-all-solar-maize-dryer" };
const IITA_AFLASAFE = { name: "IITA: Aflasafe, ihe njikwa aflatoxin ndụ maka ndị ọrụ ugbo Afrịka", url: "https://www.iita.org/news-item/iita-moves-to-commercialize-and-disseminate-aflatoxin-biocontrol-products-to-africas-farmers/" };
const PICS = { name: "Purdue University: akpa PICS (Purdue Improved Crop Storage) na-adịghị ekwe ikuku banye", url: "https://www.purdue.edu/discoverypark/food/research/pics.php" };
const FAO_ZECC = { name: "FAO TECA/STI: Ọnụ ụlọ oyi na-adịghị eji ọkụ (Zero Energy Cooling Chamber) maka akwụkwọ nri", url: "https://sti-portal.fao.org/innovations/zero-energy-cooling-chamber-vegetables" };

module.exports = {
  id: "agri-post-harvest-ig",
  lang: "ig",
  translationOf: "agri-post-harvest",
  category: "Agriculture (Africa)",
  name: "Ilekọta na Ichekwa Ihe Ubi Mgbe Owuwe Gasịrị",
  skills: "Ịchọta ebe ihe ubi gị na-efu, Iwe ihe ubi n'oge kwesịrị ekwesị, Ịmị mkpụrụ nri ruo mgbe mmiri ya dị mma, Igbochi aflatoxin, Ichekwa mkpụrụ nri n'akpa na-adịghị ekwe ikuku banye, Ime ka mkpụrụ osisi na akwụkwọ nri dị oyi, ịhazi ha n'ọkwa na ịkwakọ ha",
  outcome: "ime atụmatụ mgbe owuwe gasịrị maka otu ihe ọkụkụ: iwe ya n'oge kwesịrị ekwesị, ịmị mkpụrụ nri ruo mgbe mmiri ya dị mma, igbochi aflatoxin, ichekwa ya n'akpa na-adịghị ekwe ikuku banye, na idebe mkpụrụ osisi na akwụkwọ nri ka ha dị oyi, nọrọ n'ọkwa ha ma kwakọọ nke ọma maka onye na-azụ ya.",
  about: [
    "Ihe ọmụmụ a bụ maka obere ndị ọrụ ugbo na ndị na-eto eto, ndị na-arụ n'ubi, ndị ahịa na ndị ntorobịa na-azụ ahịa ugbo na Kenya, Naịjirịa, Ghana na n'Afrịka niile. Ezigbo owuwe ihe ubi ka nwere ike itufu ọtụtụ uru ya mgbe o si n'ubi pụta: ọka na-ebu ebu ma ọ bụ ụmụ ahụhụ eri ya, tomato na-azọpịa, ndị na-azụ ahịa akwụ obere ego ma ọ bụ jụ ya.",
    "Isi 1 na-akụzi otu esi ewebata owuwe ahụ nke ọma: ebe na ihe kpatara ihe ubi ji efu, iwe ya n'oge kwesịrị ekwesị, na ịmị mkpụrụ nri ruo mgbe mmiri ya dị mma. Isi 2 na-akụzi otu esi echekwa ya: igbochi aflatoxin, ichekwa mkpụrụ nri n'akpa na-adịghị ekwe ikuku banye, na idebe mkpụrụ osisi na akwụkwọ nri ka ha dị oyi, nọrọ n'ọkwa ha ma kwakọọ nke ọma.",
    "Ndị na-azụ ahịa na iwu mba nwere iwu nke ha gbasara ịdị mma, ya mere jụọ mgbe niile onye na-azụ gị, otu ndị ọrụ ugbo (cooperative) gị ma ọ bụ onye ndụmọdụ ọrụ ugbo (extension) ihe ha chọrọ. Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise ma jiri ọrụ n'ubi gị ma ọ bụ n'ụlọ nchekwa gị mechie. E nwere nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe."
  ],
  finalTask: "Dee atụmatụ mgbe owuwe gasịrị nke ruru otu peeji maka otu ihe ọkụkụ (nke gị, ma ọ bụ ọmụmaatụ dị ka acre 2 nke ọka na Trans Nzoia, acre 1 nke tomato na Kaduna, ma ọ bụ agwa cowpea na Tamale): mgbe na otu ị ga-esi wee ya, otu ị ga-esi mịa ya ma lelee mmiri dị n'ime ya (maka mkpụrụ nri), otu ị ga-esi gbochie aflatoxin, otu na ebe ị ga-echekwa ya, na otu ị ga-esi mee ka ọ dị oyi, hazie ya n'ọkwa ma kwakọọ ya maka onye na-azụ gị. Dee iwu ịdị mma nke onye na-azụ gị n'elu peeji ahụ.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Obere ndị ọrụ ugbo na ndị na-eto eto, ndị na-arụ n'ubi, ndị ahịa na ndị ntorobịa na-azụ ahịa ugbo na Kenya, Naịjirịa, Ghana na n'Afrịka niile, ndị na-elekọta mkpụrụ nri, agwa na ụdị ya, na mkpụrụ osisi na akwụkwọ nri mgbe owuwe gasịrị.",
    startingPoint: "Ọtụtụ na-ewe ihe ubi mgbe ọ dị ka ọ chara, na-amị mkpụrụ nri n'anwụ n'elu ihe ọ bụla dị nso, na-echekwa ya n'akpa, ma na-ebu mkpụrụ osisi na akwụkwọ nri n'akpa ma ọ bụ n'otu ebe a kpọkọtara ha. Ole na ole na-elele mmiri dị na mkpụrụ nri, mara otu aflatoxin si amalite, na-eji akpa na-adịghị ekwe ikuku banye, ma ọ bụ na-ahazi ma kwakọọ ihe ubi dị ka iwu onye na-azụ ha si dị.",
    gap: "Ọtụtụ ezigbo owuwe na-atụfu ọnụ ọgụgụ ma ọ bụ uru mgbe o si n'ubi pụta: ụmụ ahụhụ ọka (weevil), ebu na oke n'ụlọ nchekwa, ihe ubi a zọpịara, na ọka a jụrụ n'ihi aflatoxin, nke na-emekwa ezinụlọ na-eri ya ihe ọjọọ. Atụmatụ mgbe owuwe gasịrị na-echekwa ọtụtụ ihe ubi ahụ, na-eme ka nri dị mma iri, ma na-enweta ọnụ ahịa ka mma.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ; a na-akọwa okwu ọ bụla",
      "Ngwaọrụ: ekwentị nkịtị; tapolin, akpa na igbe onye na-amụ ihe nweburu ma ọ bụ nwere ike ibiri",
      "Ndị na-azụ ahịa na iwu mba nwere iwu ịdị mma nke ha: ndị na-amụ ihe na-ajụ onye na-azụ ha, otu ndị ọrụ ugbo ma ọ bụ onye ndụmọdụ ọrụ ugbo",
      "Nchekwa nri: erila, eresịla ma ọ bụ nyela anụmanụ ọka ebu bụ mgbe ọ bụla; jiri ihe njikwa ndụ (biocontrol) naanị dị ka a kwadoro ma dee na lebụ ya",
      "Oge: nkuzi dị ihe dị ka nkeji 5 nke dabara n'oge ọrụ owuwe"
    ],
    prerequisites: "Ọ dịghị."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Maka otu ihe ọkụkụ", action: "ise ụzọ ya site n'ubi ruo n'aka onye na-azụ ya ma kaa akara ebe ọ na-atụfu ọnụ ọgụgụ ma ọ bụ uru", standard: "na-akpọ aha opekata mpe ebe atọ ọ na-efu na ihe ga-edozi ha" },
    { id: "O2", condition: "Maka ihe ọkụkụ gị ọ bụla", action: "ịmata ihe na-egosi na ọ chara ma hazie ụbọchị owuwe site n'amụma ihu igwe", standard: "ebe ngwaọrụ, akpa ma ọ bụ igbe na ndị ọrụ dị njikere tupu owuwe" },
    { id: "O3", condition: "Maka mkpụrụ nri e wetara ọhụrụ", action: "ịmị ya ngwa ngwa n'ebe na-abụghị n'elu ala ma lelee na mmiri dị n'ime ya eruola ọkwa dị mma", standard: "ihe dị ka pasentị 13 ruo 14 ma ọ bụ ọkwa onye na-azụ ya kara, e jiri ihe nleta mmiri ma ọ bụ nnwale nnu lelee ya" },
    { id: "O4", condition: "Maka ọka, ahụekere ma ọ bụ ihe ọkụkụ ndị ọzọ nọ n'ihe egwu", action: "ịdepụta ma jiri isi nzọụkwụ ndị na-egbochi aflatoxin", standard: "ebe e wepụrụ mkpụrụ ebu na nke mebiri emebi, a dịghịkwa eri ha, ere ha ma ọ bụ nye anụmanụ ha mgbe ọ bụla" },
    { id: "O5", condition: "Mgbe ị nwere mkpụrụ nri kpọrọ nkụ, dị ọcha, nke a họpụtara nke ọma", action: "ijupụta, imechi na ichekwa akpa na-adịghị ekwe ikuku banye", standard: "ebe e kekọtara akpa ime ọ bụla ka ikuku ghara ịbanye, akpa ahụ adịghị n'ala, ọ dị anya na mgbidi, oke enweghịkwa ike iru ya" },
    { id: "O6", condition: "Maka mkpụrụ osisi na akwụkwọ nri", action: "idebe ha ka ha dị oyi, ịhazi ha n'ọkwa onye na-azụ ha chọrọ, na ịkwakọ ha ka ha ruo n'enweghị ọnya", standard: "n'igbe dị ọcha, nwere oghere ikuku, ma nwee lebụ" }
  ],
  chapters: [
    {
      name: "Isi 1: Iwebata owuwe ihe ubi nke ọma",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ebe ihe ubi na-efu, na ihe kpatara ya",
          minutes: 4,
          goal: "Soro ihe ọkụkụ gị site n'ubi ruo n'aka onye na-azụ ya ma kaa akara ebe ọ na-atụfu ọnụ ọgụgụ ma ọ bụ uru.",
          text: [
            "FAO mere atụmatụ na 2019 na ihe dị ka pasentị 14 nke nri ụwa na-efu n'etiti owuwe na ụlọ ahịa, tupu ọ ruo n'ahịa. N'ọtụtụ ugbo dị n'Afrịka, ihe na-efu maka ụfọdụ ihe ọkụkụ karịrị nke a. Akpa ọ bụla furu efu bụ mkpụrụ, fatịlaịza na ọrụ a tụfuru.",
            "Ihe na-efu na nzọụkwụ ọ bụla: iwe ihe ubi n'oge na-erubeghị ma ọ bụ mgbe oge gafere, ịhapụ ya n'ime mmiri ozuzo, iji ike emetụ ya aka ruo na ọ merụọ, okpomọkụ, ịmị ya nwayọọ nke ukwuu, ụmụ ahụhụ dị ka weevil na larger grain borer, oke, ebu, na ịkwakọ ya n'ụzọ na-adịghị mma n'okporo ụzọ ọjọọ. Ụfọdụ ihe na-efu ị na-ahụ anya (akpa ole na ole); ndị ọzọ ị naghị ahụ (ọkwa dị ala, ọnụ ahịa dị ala, ma ọ bụ ọka na-adịghị mma iri).",
            "Nzọụkwụ mbụ bụ ịchọta ebe ihe kacha efu n'aka gị. Soro ihe ọkụkụ gị site n'ubi ruo n'aka onye na-azụ ya ma jụọ na nzọụkwụ ọ bụla: gịnị na-aga n'ụzọ na-ezighi ezi ebe a, ole na-efu, ole ka ọ ga-efu iji dozie ya?"
          ],
          steps: ["Depụta nzọụkwụ ọ bụla ihe ọkụkụ gị na-agafe: owuwe, ibu, ịmị, ịkụ ma ọ bụ ịkpacha, ichekwa, ịkwakọ, ibufe, ire.", "Na nzọụkwụ ọ bụla, dee ihe na-aga n'ụzọ na-ezighi ezi (mmiri ozuzo, ọnya, ụmụ ahụhụ, oke, ebu).", "Mee atụmatụ ole na-efu ma ọ bụ ole ọnụ ahịa na-ada.", "Gbaa gburugburu n'ebe abụọ ihe kacha efu; ebe ahụ ka ị ga-amalite."],
          words: [["Ihe na-efu mgbe owuwe gasịrị (post-harvest loss)", "nri ma ọ bụ uru na-efu n'etiti owuwe na ire ya."], ["Larger grain borer", "ụdị ebe (beetle) na-egwu n'ime ọka na akpụ e chekwara ma mee ka ha ghọọ ntụ."], ["Ọkwa (grade)", "otu ịdị mma, dị ka ọkwa mbụ ma ọ bụ nke abụọ, nke na-ekpebi ọnụ ahịa."]],
          slides: [
            { title: "Ịdị ukwuu nke ihe na-efu (FAO)", bullets: ["Ihe dị ka pasentị 14 nke nri na-efu n'etiti owuwe na ụlọ ahịa", "Ọ na-akarịkarị maka ụfọdụ ihe ọkụkụ n'ugbo Afrịka", "Akpa ọ bụla furu efu na-atụfu mkpụrụ, fatịlaịza na ọrụ"] },
            { title: "Ihe kpatara ya", bullets: ["Oge owuwe ezighi ezi, mmiri ozuzo, ịmị nwayọọ", "Ọnya, okpomọkụ, ibufe n'ụzọ ọjọọ", "Weevil, grain borer, oke, ebu"] },
            { title: "Chọta ebe ihe kacha efu", bullets: ["Soro ihe ọkụkụ ahụ site n'ubi ruo n'aka onye na-azụ ya", "Jụọ ihe na-aga n'ụzọ na-ezighi ezi na nzọụkwụ ọ bụla", "Malite n'ebe abụọ kacha ukwuu"] }
          ],
          sources: [FAO_LOSS],
          tryIt: "See ụzọ ihe ọkụkụ gị site n'ubi ruo n'aka onye na-azụ ya dị ka ahịrị igbe. N'okpuru igbe ọ bụla, dee ihe na-aga n'ụzọ na-ezighi ezi ebe ahụ na ihe dị ka ole na-efu. Gbaa gburugburu n'ebe abụọ ihe kacha efu.",
          youCanNow: "ise ebe ihe ubi gị na-atụfu ọnụ ọgụgụ ma ọ bụ uru ma họrọ ihe ndị ị ga-ebu ụzọ dozie.",
          quickCheck: [
            { objective: "O1", q: "Kedu ahụhụ a kpọrọ aha dị ka ahụhụ ụlọ nchekwa na-eri ọka?", options: ["Aṅụ", "Ladybird", "Larger grain borer", "Urukurubụba"], answer: 2, why: "Weevil na larger grain borer bụ ụmụ ahụhụ ụlọ nchekwa na-eme ka ọka fuo." },
            { objective: "O1", q: "N'ahịa, a jụrụ ọtụtụ tomato gị n'ihi na ha zọpịara. Gịnị ka ị ga-eme?", options: ["Soro ihe ọkụkụ ahụ azụ, chọta nzọụkwụ ebe ọ na-azọpịa na ole ọ ga-efu iji dozie ya", "Ree onye ọzọ oge ọzọ ma ghara ịgbanwe ihe ọ bụla", "Kụọ ihe ọkụkụ ọzọ", "Ta onye na-azụ ya ụta"], answer: 0, why: "Iso ihe ọkụkụ ahụ nzọụkwụ na nzọụkwụ na-egosi ebe ihe na-efu na ihe ị ga-edozi." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Iwe ihe ubi n'oge kwesịrị ekwesị",
          minutes: 5,
          goal: "Mata ihe na-egosi na ihe ọkụkụ gị ọ bụla chara ma hazie ụbọchị owuwe.",
          text: [
            "Iwe ihe ubi n'oge na-erubeghị na-enye obere mkpụrụ dị mfe ma ọ bụ ihe ubi na-agaghị acha nke ọma; iwe ya mgbe oge gafere na-akpọ mmebi mmiri ozuzo, ụmụ ahụhụ, nnụnụ, ohi na ire ure. Mụta ihe na-egosi na ihe ọkụkụ ọ bụla chara.",
            "Ọka chara mgbe akpụkpọ ya kpọrọ nkụ ma mkpụrụ ya sie ike, nwee akara ojii (black layer) n'okpuru ya; mgbe ahụ ọ nwere ike ịnọ n'osisi ya obere oge ka ọ kpọkwuo nkụ ma ọ bụrụ na ihu igwe kpọrọ nkụ, mana ahapụla ya n'èzí n'oge mmiri ozuzo. Agwa na agwa cowpea chara mgbe ọtụtụ mkpụrụ ha kpọrọ nkụ ma na-ada ụda. Sorghum chara mgbe mkpụrụ ya siri ike nke mbọ aka enweghị ike ịkwanye ya. A na-ewe tomato n'agba onye na-azụ ya chọrọ (ọtụtụ mgbe mgbe ọ malitere ịgbanwe agba maka ahịa dị anya). Kọfị: wee naanị mkpụrụ chara uhie. Tii: kpaa ome nro ahụ, ọtụtụ mgbe akwụkwọ abụọ na otu okoko. Mgbọrọgwụ akpụ na-emebi n'ime ụbọchị ole na ole mgbe e wepụtara ya, ya mere gwupụta naanị ihe ị nwere ike ire ma ọ bụ rụọ ọrụ na ya ngwa ngwa.",
            "Hazie ụbọchị owuwe site n'amụma ihu igwe. Wee mkpụrụ osisi na akwụkwọ nri n'isi ụtụtụ mgbe ọ dị oyi, debe ha na ndò, ma hụ na akpa, igbe, tapolin na ndị ọrụ dị njikere tupu ịmalite."
          ],
          steps: ["Dee ihe na-egosi na ihe ọkụkụ ọ bụla ị na-akụ chara.", "Gagharịa n'ubi ma lelee ihe ndị ahụ kwa izu ka owuwe na-eru nso.", "Lelee amụma ihu igwe ma họrọ ụbọchị kpọrọ nkụ maka mkpụrụ nri.", "Hụ na tapolin, akpa ma ọ bụ igbe na ndị ọrụ dị njikere.", "Wee mkpụrụ osisi na akwụkwọ nri n'ụtụtụ dị oyi ma debe ha na ndò."],
          words: [["Ịcha (maturity)", "mgbe ihe ọkụkụ tozuru oke ma dị njikere maka owuwe."], ["Akara ojii (black layer)", "ntụpọ ojii n'okpuru mkpụrụ ọka nke na-egosi na ọ chara."], ["Akwụkwọ abụọ na otu okoko", "ome tii nro ndị na-akpa tii na-ewe maka tii dị mma."]],
          slides: [
            { title: "N'oge na-erubeghị ma ọ bụ mgbe oge gafere: ha abụọ na-efu gị", bullets: ["N'oge na-erubeghị: obere, dị mfe, anaghị acha nke ọma", "Mgbe oge gafere: mmiri ozuzo, ụmụ ahụhụ, nnụnụ, ohi, ire ure"] },
            { title: "Ihe na-egosi na ọ chara", bullets: ["Ọka: akpụkpọ kpọrọ nkụ, mkpụrụ siri ike, akara ojii", "Agwa: ọtụtụ mkpụrụ kpọrọ nkụ ma na-ada ụda", "Kọfị: naanị mkpụrụ chara uhie; tii: akwụkwọ abụọ na otu okoko"] },
            { title: "Mkpụrụ osisi na akwụkwọ nri", bullets: ["Tomato: agba onye na-azụ ya chọrọ", "Akpụ: gwupụta naanị ihe ị ga-ere n'oge na-adịghị anya", "Wee n'ụtụtụ dị oyi; debe na ndò"] },
            { title: "Dị njikere", bullets: ["Lelee amụma ihu igwe; họrọ ụbọchị kpọrọ nkụ", "Tapolin, akpa, igbe na ndị ọrụ na mbụ"] }
          ],
          tryIt: "Maka ihe ọkụkụ abụọ ị na-akụ, dee ihe na-egosi na ha chara na ụbọchị ị na-atụ anya iwe ha. Jụọ onye na-azụ gị agba ma ọ bụ ịdị mma ọ chọrọ ma dee ya. Tọọ ncheta n'ekwentị ka ị lelee amụma ihu igwe otu izu tupu oge ahụ.",
          youCanNow: "ịmata mgbe ihe ọkụkụ gị chara na ịhazi ụbọchị owuwe na-echebe ịdị mma ha.",
          quickCheck: [
            { objective: "O2", q: "Kedu otu ị ga-esi mata na sorghum dị njikere maka owuwe?", options: ["Akwụkwọ ya ka na-acha akwụkwọ ndụ", "Isi ya dị obere", "Mkpụrụ ya dị nro ma dị ka mmiri ara", "Mkpụrụ ya siri ike nke mbọ aka enweghị ike ịkwanye ya"], answer: 3, why: "Sorghum dị njikere mgbe mkpụrụ ya siri ike nke mbọ aka enweghị ike ịkwanye ya." },
            { objective: "O2", q: "Ọka gị chara, amụma ihu igwe na-ekwukwa na oke mmiri ozuzo ga-ezo n'izu na-abịa. Gịnị ka ị ga-eme?", options: ["Hapụ ya n'osisi ya n'oge mmiri ozuzo", "Wee ya tupu mmiri ozuo, ebe tapolin na akpa dị njikere", "Wee ya naanị mgbe mmiri ozuzo kwụsịrị", "Gbutuo ya ma hapụ ya n'ala"], answer: 1, why: "Hazie owuwe site n'amụma ihu igwe, ahapụkwala ọka chara acha n'èzí n'oge mmiri ozuzo." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ịmị mkpụrụ nri ruo mgbe mmiri ya dị mma",
          minutes: 6,
          goal: "Mịa mkpụrụ nri ngwa ngwa ma lelee na mmiri dị n'ime ya eruola ọkwa dị mma maka nchekwa.",
          text: [
            "Mkpụrụ nri e wetara ọhụrụ nwere ọtụtụ mmiri n'ime ya. Mkpụrụ nri dị mmiri na-ekpo ọkụ, na-ebu ebu ma na-akpọta ụmụ ahụhụ. Ndụmọdụ FAO gbasara ọka na-ekwu na ịmị ya ruo mgbe mmiri dị n'ime ya ruru ihe dị ka pasentị 13 ruo 14 tupu ebu amalite bụ ụzọ kacha atụkwasị obi isi gbochie aflatoxin, nakwa na ịmị ya kwesịrị ịdị ngwa: mkpụrụ nri a hapụrụ ka ọ dị mmiri karịa ihe dị ka ụbọchị abụọ nọ n'ihe egwu ka ukwuu. Onye na-azụ gị, otu ndị ọrụ ugbo gị ma ọ bụ iwu mba gị nwere ike ịkara ọkwa nke ha, ya mere jụọ.",
            "Mịa ya n'elu tapolin dị ọcha, ebe e weliri elu, ute ma ọ bụ ala siment, ọ bụghị mgbe ọ bụla n'elu ala efu. Gbasaa mkpụrụ nri ahụ ka ọ dị ntakịrị n'ọkpụrụkpụ, tụgharịa ya ọtụtụ ugboro kwa ụbọchị, ma kpuchie ya ma ọ bụ bubata ya n'ime ụlọ tupu mmiri ozuo na n'abalị. Mkpụrụ nri a kpachara na-akpọ nkụ ngwa ngwa karịa nke ka nọ n'ogbe ya. Ihe ịmị anyanwụ (solar dryer), bụ obere osisi a kpụrụ nwere plastik doro anya n'elu ya, na-amị ngwa ngwa ma na-egbochi mmiri ozuzo, ájá na anụmanụ.",
            "Lelee mmiri dị n'ime ya tupu i chekwaa ya. Ngwa kacha mma bụ ihe nleta mmiri (moisture meter); otu ndị ọrụ ugbo, ndị na-azụ ahịa, ọfịs ndụmọdụ ọrụ ugbo na ụlọ nkwakọba na-enwekarị otu. Nnwale dị mfe n'ụlọ bụ nnwale nnu: tinye otu aka nnu kpọrọ nkụ na ụfọdụ mkpụrụ nri n'ime karama iko dị ọcha ma kpọọ nkụ, kpaa ya nkeji abụọ ruo atọ, ọ bụrụ na nnu araba n'iko ahụ, mkpụrụ nri ahụ ka dị mmiri nke ukwuu. Mkpụrụ nri gafere nnwale a ka nwere ike ịdị ntakịrị mmiri, ya mere jiri ihe nleta mmiri kwado ya mgbe ị nwere ike."
          ],
          steps: ["Wee ihe ubi n'oge ihu igwe kpọrọ nkụ.", "Gbasaa mkpụrụ nri ka ọ dị ntakịrị n'ọkpụrụkpụ n'elu tapolin, ute, ebe e weliri elu ma ọ bụ siment, ọ bụghị mgbe ọ bụla n'elu ala efu.", "Tụgharịa ya ọtụtụ ugboro kwa ụbọchị; kpuchie ya pụọ na mmiri ozuzo na n'abalị.", "Mịa ya ngwa ngwa: gbalịa ka mmiri ya ruo ọkwa dị mma n'ime ihe dị ka ụbọchị abụọ mgbe a kpachara ya.", "Mee nnwale nnu; jiri ihe nleta mmiri n'otu ndị ọrụ ugbo gị ma ọ bụ n'aka onye na-azụ gị kwado ya.", "Chekwaa ya naanị mgbe ọ kpọrọ nkụ."],
          words: [["Mmiri dị n'ime ya (moisture content)", "ole mmiri dị na mkpụrụ nri, dị ka pasentị nke ịdị arọ ya."], ["Ihe nleta mmiri (moisture meter)", "ngwa na-atụ mmiri dị na mkpụrụ nri."], ["Nnwale nnu", "nnwale dị mfe n'ụlọ: nnu kpọrọ nkụ na-araba na karama ma ọ bụrụ na mkpụrụ nri ka dị mmiri."], ["Ihe ịmị anyanwụ (solar dryer)", "osisi a kpụrụ nwere ihe mkpuchi doro anya nke na-eji anyanwụ amị ihe ọkụkụ ngwa ngwa ma dị ọcha."]],
          slides: [
            { title: "Ihe kpatara ịmị ya", bullets: ["Mkpụrụ nri dị mmiri na-ekpo ọkụ, na-ebu ebu ma na-akpọta ụmụ ahụhụ", "FAO: mịa ọka ruo ihe dị ka pasentị 13 ruo 14", "Ngwa ngwa: n'ime ihe dị ka ụbọchị abụọ"] },
            { title: "Otu esi amị ya", bullets: ["Tapolin, ute, ebe e weliri elu ma ọ bụ siment, ọ bụghị ala efu", "Ọkpụrụkpụ ntakịrị, tụgharịa ya ọtụtụ ugboro", "Kpuchie ya tupu mmiri ozuo na n'abalị"] },
            { title: "Lelee tupu i chekwaa", bullets: ["Nke kacha mma: ihe nleta mmiri (cooperative, onye na-azụ, extension)", "Nnwale dị mfe: nnwale nnu na karama kpọrọ nkụ", "Nnu araba = ọ ka dị mmiri; gaa n'ihu na-amị ya"] }
          ],
          sources: [FAO_AFLA, FAO_DRYER],
          tryIt: "Mee nnwale nnu n'otu aka mkpụrụ nri gị (ma ọ bụ nke onye agbata obi gị): karama kpọrọ nkụ, nnu kpọrọ nkụ, kpaa ya nkeji abụọ ruo atọ, lee iko ahụ. Wee chọpụta onye nọ gị nso nwere ihe nleta mmiri, na ọkwa mmiri kacha elu onye na-azụ gị na-anabata.",
          youCanNow: "ịmị mkpụrụ nri ngwa ngwa n'elu ebe dị ọcha na ilele na mmiri dị n'ime ya eruola ọkwa dị mma tupu nchekwa.",
          quickCheck: [
            { objective: "O3", q: "Gịnị bụ ihe ịmị anyanwụ (solar dryer)?", options: ["Ọvụn ọkụ eletrik", "Osisi a kpụrụ nwere plastik doro anya n'elu ya nke na-amị mkpụrụ nri ngwa ngwa ma na-egbochi mmiri ozuzo na ájá", "Ụlọ nchekwa ígwè (silo)", "Ihe nleta mmiri"], answer: 1, why: "Ihe ịmị anyanwụ bụ osisi a kpụrụ dị mfe nwere ihe mkpuchi doro anya nke na-amị mkpụrụ nri ngwa ngwa ma na-echebe ya." },
            { objective: "O3", q: "Igwe ojii mmiri ozuzo na-agbakọ n'ehihie mgbe ọka gị a kpachara na-akpọ nkụ n'èzí. Gịnị ka ị ga-eme?", options: ["Hapụ ya; ọ ga-akpọ nkụ ma emechaa", "Gbasaa ya ka ọ dịkwuo ntakịrị n'ọkpụrụkpụ", "Wụpụ mmiri n'elu ya mgbe mmiri ozuzo gasịrị", "Kpuchie ya ma ọ bụ bubata ya tupu mmiri ozuo"], answer: 3, why: "Kpuchie mkpụrụ nri ma ọ bụ bubata ya tupu mmiri ozuo na n'abalị, ka ọ ghara ịdị mmiri ọzọ." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Iwebata owuwe ihe ubi nke ọma",
        questions: [
          { objective: "O1", q: "Ihe dị ka ole nke nri ka FAO mere atụmatụ na-efu n'etiti owuwe na ụlọ ahịa (2019)?", options: ["Pasentị 1", "Pasentị 50", "Ihe dị ka pasentị 14", "Ọ dịghị"], answer: 2, why: "Atụmatụ FAO na 2019 bụ na ihe dị ka pasentị 14 na-efu n'etiti owuwe na ahịa." },
          { objective: "O2", q: "Kedu ihe na-egosi na mkpụrụ ọka chara?", options: ["Akpụkpọ na-acha akwụkwọ ndụ ma dị mmiri", "Mkpụrụ dị nro ma dị ka mmiri ara", "Ajị ọka ka na-apụta", "Akara ojii n'okpuru mkpụrụ ahụ"], answer: 3, why: "Akara ojii na-egosi na mkpụrụ ahụ chara." },
          { objective: "O2", q: "I nwere acre 2 nke akpụ ma nwee ike ire naanị otu ụzọ n'ụzọ anọ n'izu a. Gịnị ka ị ga-eme?", options: ["Gwupụta naanị ihe ị nwere ike ire ma ọ bụ rụọ ọrụ na ya n'oge na-adịghị anya", "Gwupụta ya niile otu mgbe", "Gwupụta ya niile ma hapụ ya n'anwụ", "Egwupụtala akpụ mgbe ọ bụla"], answer: 0, why: "Mgbọrọgwụ akpụ na-emebi n'ime ụbọchị ole na ole mgbe e gwupụtara ya." },
          { objective: "O3", q: "Ebee ka ị kwesịrị ịmị ọka?", options: ["N'elu ala efu", "N'elu tapolin dị ọcha, ute, ebe e weliri elu ma ọ bụ ala siment", "N'akpa mechiri emechi n'ime mmiri ozuzo", "N'otu ebe a kpọkọtara ya n'ubi"], answer: 1, why: "Ebe dị ọcha, e weliri elu ma ọ bụ nwere ihe n'okpuru na-eme ka mkpụrụ nri dị ọcha ma kpọọ nkụ ngwa ngwa." },
          { objective: "O3", q: "Na nnwale nnu, nnu arabara n'iko ahụ. Gịnị ka ọ pụtara?", options: ["Mkpụrụ nri ahụ kpọrọ nkụ nke ọma maka nchekwa", "Mkpụrụ nri ahụ nwere aflatoxin", "Mkpụrụ nri ahụ ka dị mmiri nke ukwuu; gaa n'ihu na-amị ya", "Nnu ahụ adịghị mma"], answer: 2, why: "Nnu na-araba n'iko na-egosi na mkpụrụ nri ahụ ka nwere mmiri karịrị akarị." }
        ]
      }
    },
    {
      name: "Isi 2: Idebe owuwe ka ọ dị mma ma bụrụ nke a ga-ere",
      lessons: [
        {
          objectives: ["O4"],
          title: "Aflatoxin: ihe ọ bụ na otu esi egbochi ya",
          minutes: 6,
          goal: "Jiri isi nzọụkwụ ndị na-egbochi aflatoxin n'ọka na ahụekere gị.",
          text: [
            "Aflatoxin bụ nsi ụfọdụ ebu (Aspergillus) na-emepụta, ndị na-eto n'ọka, ahụekere, sorghum na ihe ọkụkụ ndị ọzọ, n'ubi na n'ụlọ nchekwa. Ọtụtụ mgbe, ị naghị ahụ ya anya, isi ya ma ọ bụ detụ ya ire. Iri ya ogologo oge na-emebi imeju, e jikọkwara ya na ọrịa kansa imeju na ụmụaka na-anaghị etolite nke ọma; ọtụtụ n'ime ya nwere ike igbu mmadụ. Ọ na-esikwa na nri anụmanụ banye na mmiri ara ehi na akwa. Ndị na-azụ ahịa na ụlọ ọrụ mba na-ahụ maka ịdị mma nri na-anwale ya ma na-ajụ ọka karịrị oke iwu kwadoro.",
            "Igbochi ya na-amalite n'ubi: ihe ọkụkụ dị mma, ịkụ ihe n'oge, na ijikwa ụmụ ahụhụ na-emebi ogbe ọka na mkpụrụ agwa. Wee ihe ubi n'oge, ahapụla ihe ọkụkụ ahụ n'ala, ma mịa ya ngwa ngwa ruo ọkwa mmiri dị mma. FAO na-ekwu na aflatoxin n'ọka e chekwara na-abawanye ka weevil na-emebi ya, ya mere debe ụlọ nchekwa ka ọ dị ọcha ma gbochie ụmụ ahụhụ.",
            "Họpụta tupu i chekwaa: wepụ mkpụrụ na ogbe ndị na-ebu ebu, gbajiri agbaji, gbanwere agba, ụmụ ahụhụ mebiri, na ndị kpọnwụrụ akpọnwụ. Erila, eresịla ma ọ bụ nyela anụmanụ ọka ebu mgbe ọ bụla. Ihe njikwa ndụ (biocontrol) dị ka Aflasafe, nke IITA mepụtara ma debanye aha ya na mba gụnyere Kenya, Naịjirịa na Ghana, ka a na-agbasa n'ubi tupu ihe ọkụkụ amịa ifuru ka ọ chụpụ ebu na-emepụta nsi; jụọ onye ndụmọdụ ọrụ ugbo gị ma ọ bụ onye na-ere ngwa ọrụ ugbo ma e nwere nke a kwadoro maka ihe ọkụkụ gị na mpaghara gị, ma soro ihe e dere na lebụ ya."
          ],
          steps: ["Jikwaa ụmụ ahụhụ na-emebi ogbe ọka na mkpụrụ agwa n'ubi.", "Wee ihe ubi n'oge; ahapụla ihe ọkụkụ ahụ n'ala.", "Mịa ya ngwa ngwa ruo ọkwa mmiri dị mma.", "Wepụ mkpụrụ ndị na-ebu ebu, gbajiri agbaji, gbanwere agba na ndị ụmụ ahụhụ mebiri.", "Chekwaa ya n'ebe dị ọcha, kpọrọ nkụ, nke ụmụ ahụhụ enweghị ike ịbanye.", "Jụọ onye ndụmọdụ ọrụ ugbo maka ihe njikwa ndụ a kwadoro maka mpaghara gị."],
          words: [["Aflatoxin", "nsi ụfọdụ ebu na-emepụta n'ihe ọkụkụ dị ka ọka na ahụekere."], ["Aspergillus", "otu ebu nwere ike imepụta aflatoxin."], ["Ihe njikwa ndụ (biocontrol)", "iji ihe dị ndụ na-adịghị emerụ ahụ chụpụ ihe na-emerụ ahụ."], ["Ịhọpụta (sorting)", "iwepụ mkpụrụ ma ọ bụ ihe ubi ọjọọ site n'aka ma ọ bụ igwe."]],
          slides: [
            { title: "Ihe aflatoxin bụ", bullets: ["Nsi ụfọdụ ebu na-emepụta", "Ọtụtụ mgbe a naghị ahụ ya: enweghị isi, enweghị ụtọ", "Ọ na-emebi imeju; e jikọrọ ya na kansa na ụmụaka anaghị eto nke ọma"] },
            { title: "Gbochie ya na nzọụkwụ ọ bụla", bullets: ["Ihe ọkụkụ dị mma; jikwaa ụmụ ahụhụ ogbe na mkpụrụ agwa", "Wee n'oge; mịa ngwa ngwa ruo ọkwa mmiri dị mma", "Ụlọ nchekwa dị ọcha, kpọrọ nkụ, nke ụmụ ahụhụ enweghị ike ịbanye"] },
            { title: "Họpụta ma ejila ọka ebu mgbe ọ bụla", bullets: ["Wepụ mkpụrụ na-ebu ebu, gbajiri agbaji, gbanwere agba", "Erila, eresịla ma ọ bụ nyela anụmanụ ọka ebu", "Ọ na-abanye na mmiri ara ehi na akwa"] },
            { title: "Ihe njikwa ndụ (biocontrol)", bullets: ["Aflasafe (IITA): e debanyere ya aha na Kenya, Naịjirịa, Ghana", "A na-agbasa ya n'ubi tupu ifuru amịa", "Jụọ onye ndụmọdụ ọrụ ugbo; soro lebụ ya"] }
          ],
          sources: [FAO_AFLA, IITA_AFLASAFE],
          tryIt: "Were ụfọdụ ọka ma ọ bụ ahụekere e chekwara ma họpụta ya n'elu efere: kewapụ mkpụrụ ndị na-ebu ebu, gbajiri agbaji, gbanwere agba na ndị ụmụ ahụhụ mebiri. Tụọ ịdị arọ ha ma ọ bụ gụọ ha ma dee ole n'ime ya ka i wepụrụ. Dee nzọụkwụ abụọ ị ga-agbanwe n'oge ọkụkụ na-abịa iji belata ya.",
          youCanNow: "ịkọwa ihe mere aflatoxin ji dị egwu na iji nzọụkwụ n'ubi, n'ịmị ihe, n'ịhọpụta na n'ichekwa gbochie ya.",
          quickCheck: [
            { objective: "O4", q: "N'ihe ọkụkụ ndị ole ka ebu aflatoxin nwere ike ito?", options: ["Ọka, ahụekere na sorghum", "Naanị tomato", "Naanị tii", "Naanị akwụkwọ akpụ"], answer: 0, why: "Ebu Aspergillus na-eto n'ọka, ahụekere, sorghum na ihe ọkụkụ ndị ọzọ." },
            { objective: "O4", q: "Ị hụrụ weevil n'ọka gị e chekwara. Gịnị ka ị ga-eme?", options: ["Leghara ha anya; ha adịghị mkpa", "Nye ọkụkọ ọka mebiri emebi ahụ", "Wepụ ọka mebiri emebi ma hichaa ụlọ nchekwa ka ụmụ ahụhụ ghara ịbanye, n'ihi na mmebi weevil na-eme ka aflatoxin baa ụba", "Gwakọta ọka mebiri emebi na ezigbo ọka"], answer: 2, why: "Aflatoxin na-abawanye ka weevil na-emebi ọka; a na-ewepụ ọka mebiri emebi, a dịghịkwa enye anụmanụ ya ma ọ bụ ree ya." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ichekwa mkpụrụ nri n'akpa na-adịghị ekwe ikuku banye",
          minutes: 5,
          goal: "Jupụta, mechie ma chekwaa akpa na-adịghị ekwe ikuku banye ka ụmụ ahụhụ nwụọ n'enweghị ọgwụ.",
          text: [
            "Hermetic pụtara na ikuku enweghị ike ịbanye ma ọ bụ ịpụ. Akpa hermetic, dị ka akpa PICS nke e mepụtara na Purdue University (mahadum dị na America), nwere akpa plastik abụọ n'ime akpa a kpara akpa n'èzí. Mgbe e mechiri ya, ụmụ ahụhụ na mkpụrụ nri ahụ na-eji ikuku (oxygen) dị n'ime ya mechaa, ụmụ ahụhụ ahụ anwụọ ma ọ bụ kwụsị ịmụ nwa, n'enweghị ọgwụ ụmụ ahụhụ ọ bụla. Purdue depụtara ọka, sorghum, agwa, agwa cowpea, ahụekere, osikapa na ihe ọkụkụ ndị ọzọ dị ka ndị dabara n'akpa ndị a.",
            "Akpa ahụ na-arụ ọrụ naanị ma ọ bụrụ na mkpụrụ nri ahụ kpọrọ nkụ ma akpa ahụ adịghị ekwe ikuku banye. Chekwaa naanị mkpụrụ nri kpọrọ nkụ, dị ọcha, nke a họpụtara nke ọma. Jupụta akpa ime nke mbụ, chụpụ ikuku dị ka i nwere ike, gbagọọ olu ya ma kee ya nke ọma; mee otu ihe ahụ n'akpa ime nke abụọ, n'ikpeazụ mee ya n'akpa nke èzí. Lelee ma o nwere oghere tupu iji ya; obere oghere na-ekwe ka ikuku banye, akpa ahụ akwụsịkwa ịrụ ọrụ.",
            "Debe akpa ndị ahụ n'elu pallet ma ọ bụ osisi, ka ha ghara ịnọ n'ala, ka ha dị anya na mgbidi, n'ụlọ nchekwa dị ọcha, kpọrọ nkụ, nwere ndò, ma chebe ha pụọ n'aka oke, n'ihi na oke na-ata oghere n'ime ha. Emegheghị ha ọtụtụ ugboro: oge ọ bụla i mepere ya, ikuku ọhụrụ na-abanye. Akpa ndị ka zuru oke nwere ike iji ọzọ n'oge ọkụkụ na-abịa. Ụzọ ọma ndị ọzọ bụ ụlọ nchekwa ígwè (metal silo) na ọba dị ọcha, e weliri elu, nwere ikuku na-agafe maka ogbe ọka."
          ],
          steps: ["Lelee na mkpụrụ nri ahụ kpọrọ nkụ, dị ọcha ma a họpụtara ya.", "Lelee ma akpa ime nwere oghere.", "Jupụta akpa ime nke mbụ, chụpụ ikuku, gbagọọ ma kee ya nke ọma.", "Kee akpa ime nke abụọ, wee kee akpa nke èzí, n'otu ụzọ ahụ.", "Chekwaa ya n'elu pallet, dị anya na mgbidi, n'ụlọ nchekwa kpọrọ nkụ, nwere ndò, nke oke enweghị ike ịbanye.", "Mepee ya naanị mgbe ọ dị mkpa; jiri akpa ndị ka zuru oke ọzọ."],
          words: [["Hermetic", "ikuku enweghị ike ịbanye ma ọ bụ ịpụ."], ["Akpa ime (liner)", "akpa plastik dị n'ime akpa nke èzí."], ["Pallet", "ihe osisi a kpụrụ nke na-eme ka akpa ghara ịnọ n'ala."], ["Ụlọ nchekwa ígwè (metal silo)", "igbe ígwè e mechiri emechi maka ichekwa mkpụrụ nri."]],
          slides: [
            { title: "Otu akpa hermetic si arụ ọrụ", bullets: ["Akpa plastik abụọ n'ime akpa a kpara akpa (PICS)", "E mechiri ya: oxygen agwụ, ụmụ ahụhụ anwụọ", "Ọ dịghị mkpa ọgwụ ụmụ ahụhụ"] },
            { title: "Mechie ya nke ọma", bullets: ["Naanị mkpụrụ nri kpọrọ nkụ, dị ọcha, a họpụtara", "Chụpụ ikuku; gbagọọ ma kee akpa ọ bụla", "Buru ụzọ lelee ma akpa ime nwere oghere"] },
            { title: "Chekwaa ya nke ọma", bullets: ["N'elu pallet, dị anya na mgbidi", "Ụlọ nchekwa kpọrọ nkụ, nwere ndò, nke oke enweghị ike ịbanye", "Mepee ya obere oge; jiri akpa zuru oke ọzọ"] }
          ],
          sources: [PICS],
          tryIt: "Lee ụlọ nchekwa gị. Dee mgbanwe atọ ga-echebe akpa (pallet, ohere n'etiti ha na mgbidi, igbochi oke, ndò). Ọ bụrụ na ị nwere ike, zụta otu akpa hermetic n'aka onye na-ere ngwa ọrụ ugbo ma were mkpụrụ nri kpọrọ nkụ mụọ ịkee akpa ọ bụla.",
          youCanNow: "imechi na ichekwa mkpụrụ nri n'akpa hermetic ka ọ dịgide n'enweghị ọgwụ.",
          quickCheck: [
            { objective: "O5", q: "Gịnị dị n'ime akpa a kpara akpa nke èzí nke akpa PICS?", options: ["Ihe mkpuchi ígwè", "Ntụ ọgwụ ụmụ ahụhụ", "Akpa plastik abụọ dị n'ime", "Ọ dịghị ihe"], answer: 2, why: "Akpa PICS nwere akpa plastik abụọ n'ime akpa a kpara akpa nke èzí." },
            { objective: "O5", q: "I jupụtala ma kee akpa ime nke mbụ. Gịnị ka ị ga-eme ọzọ?", options: ["Chụpụ ikuku, gbagọọ ma kee akpa ime nke abụọ, wee kee akpa nke èzí", "Hapụ akpa ime nke abụọ ka ọ ghere oghe maka ikuku", "Bọọ oghere ka i lelee mkpụrụ nri ahụ", "Chekwaa ya n'anwụ"], answer: 0, why: "A na-ekesi akpa ime ọ bụla na akpa nke èzí ike ka ikuku ghara ịbanye n'akpa ahụ." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Idebe ihe ubi ka ọ dị oyi, ịhazi ya n'ọkwa na ịkwakọ ya",
          minutes: 5,
          goal: "Debe mkpụrụ osisi na akwụkwọ nri ka ha dị oyi, hazie ha n'ọkwa onye na-azụ ha chọrọ ma kwakọọ ha ka ha ruo n'enweghị ọnya.",
          text: [
            "Mkpụrụ osisi na akwụkwọ nri dị ka tomato, kale, mango na ube oyibo (avocado) ka dị ndụ ma na-eku ume mgbe owuwe gasịrị. Okpomọkụ na-eme ka nke a gaa ngwa ngwa, ha wee na-acha, na-akpọnwụ ma na-ere ure ngwa ngwa. Wee ha n'ụtụtụ dị oyi, debe ha na ndò mgbe niile, ma buga ha n'aka onye na-azụ ha ngwa ngwa.",
            "Ọ bụrụ na enweghị ọkụ eletrik, ihe oyi mmiri na-ekupụ (evaporative cooler) na-enyere aka. Zero Energy Cooling Chamber nke FAO depụtara bụ mgbidi brik abụọ nwere ájá mmiri n'etiti ha na ihe mkpuchi mmiri n'elu ya; ka mmiri na-ekupụ, ọ na-eme ka ime ya dị oyi ma na-eme ka ikuku dị mmiri ka ihe ubi ghara ịkpọnwụ. Ọ na-arụ ọrụ kacha mma n'ebe kpọrọ nkụ ma na-ekpo ọkụ. Ihe oyi ite aja (clay pot) na-arụ otu ọrụ ahụ n'ụzọ dị obere.",
            "Ịhazi n'ọkwa (grading) pụtara ikewa ihe ubi n'otu dị iche iche site n'ịdị ukwuu, ịcha na ịdị mma, na iwepụ ndị mebiri emebi ka ha ghara imebi ndị ọzọ. Ndị na-azụ ahịa na-akwụ ụgwọ karịa maka ihe ubi dị otu, dị ọcha, a hazirila n'ọkwa. Kwakọọ ya n'igbe dị ọcha, siri ike, nwere oghere ikuku kama akpa maka ihe ubi dị nro, ejupụtala ya karịa, ma dee ọkwa, ụbọchị na aha gị na lebụ n'igbe ọ bụla. Foto ekwentị nke otu ọ bụla a hazirila n'ọkwa na-enyere aka idozi esemokwu gị na ndị na-azụ ahịa."
          ],
          steps: ["Jụọ onye na-azụ gị ọkwa ndị ọ chọrọ: ịdị ukwuu, ịcha, ịdị mma.", "Wee ihe ubi n'ụtụtụ dị oyi ma debe ya na ndò.", "Kewaa ya n'ọkwa; wepụ ndị mebiri emebi.", "Jiri ihe oyi mmiri na-ekupụ ma ọ bụrụ na ị ga-ejide ihe ubi ahụ.", "Kwakọọ ya n'igbe dị ọcha, nwere oghere ikuku; ejupụtala ya karịa.", "Dee ọkwa, ụbọchị na aha na lebụ igbe; see foto."],
          words: [["Ihe oyi mmiri na-ekupụ (evaporative cooler)", "ebe nchekwa nke mmiri na-ekupụ site na mgbidi, ájá ma ọ bụ akwa mmiri na-eme ka ọ dị oyi."], ["Ịhazi n'ọkwa (grading)", "ikewa ihe ubi n'otu dị iche iche nke ịdị mma."], ["Igbe nwere oghere ikuku", "igbe nwere oghere na-ekwe ka ikuku gafee gburugburu ihe ubi."]],
          slides: [
            { title: "Okpomọkụ bụ onye iro", bullets: ["Ihe ubi ka na-eku ume mgbe owuwe gasịrị", "Wee n'ụtụtụ dị oyi", "Ndò mgbe niile; ree ngwa ngwa"] },
            { title: "Ime ka ọ dị oyi n'enweghị ọkụ (FAO)", bullets: ["Zero Energy Cooling Chamber: ájá mmiri n'etiti mgbidi brik", "Ime ya dị oyi ma dị mmiri", "Kacha mma n'ebe kpọrọ nkụ ma na-ekpo ọkụ"] },
            { title: "Hazie n'ọkwa ma kwakọọ", bullets: ["Kewaa site n'ịdị ukwuu, ịcha na ịdị mma", "Igbe dị ọcha, nwere oghere ikuku, ọ bụghị akpa", "Dee ọkwa, ụbọchị, aha na lebụ; see foto"] }
          ],
          sources: [FAO_ZECC],
          tryIt: "Ọrụ ikpeazụ: dee atụmatụ mgbe owuwe gasịrị gị nke ruru otu peeji maka otu ihe ọkụkụ. Dee iwu ịdị mma onye na-azụ gị n'elu, wee dee oge owuwe gị, ịmị na ilele mmiri (maka mkpụrụ nri), nzọụkwụ aflatoxin, nchekwa, na otu ị ga-esi mee ka ọ dị oyi, hazie ya n'ọkwa ma kwakọọ ya.",
          youCanNow: "idebe mkpụrụ osisi na akwụkwọ nri ka ha dị oyi, ịhazi na ịkwakọ ha dị ka onye na-azụ ha chọrọ, na ime atụmatụ mgbe owuwe gasịrị zuru oke maka otu ihe ọkụkụ.",
          quickCheck: [
            { objective: "O6", q: "Ebee ka Zero Energy Cooling Chamber na-arụ ọrụ kacha mma?", options: ["N'ebe oyi na-atụ ma dị mmiri", "N'ebe kpọrọ nkụ ma na-ekpo ọkụ", "Naanị n'ime friji", "Naanị n'abalị"], answer: 1, why: "Ihe oyi mmiri na-ekupụ na-arụ ọrụ kacha mma n'ebe kpọrọ nkụ ma na-ekpo ọkụ, ebe mmiri na-ekupụ ngwa ngwa." },
            { objective: "O6", q: "Onye na-azụ ahịa kwuru na igbe gị abụghị ọkwa kwesịrị ekwesị. Gịnị na-enyere aka idozi esemokwu ahụ?", options: ["Iti mkpu", "Ibelata ọnụ ahịa gị ozugbo", "Ibughachi igbe ndị ahụ n'ụlọ", "Lebụ nwere ọkwa na ụbọchị, na foto ekwentị nke otu ọ bụla a hazirila n'ọkwa"], answer: 3, why: "Igbe nwere lebụ na foto nke otu ọ bụla a hazirila n'ọkwa na-enyere aka idozi esemokwu na ndị na-azụ ahịa." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Idebe owuwe ka ọ dị mma ma bụrụ nke a ga-ere",
        questions: [
          { objective: "O4", q: "Gịnị bụ aflatoxin?", options: ["Fatịlaịza", "Nsi ụfọdụ ebu na-emepụta n'ihe ọkụkụ", "Ụdị weevil", "Akpa nchekwa"], answer: 1, why: "Aflatoxin bụ nsi ụfọdụ ebu Aspergillus na-emepụta." },
          { objective: "O4", q: "Ọka gị nwere ụfọdụ ogbe na-ebu ebu. Gịnị ka ị kwesịrị ime ha?", options: ["Nye ọkụkọ ha", "Gwakọta ha na ezigbo ọka", "Ree ha n'ọnụ ala", "Wepụ ha; erila ha, eresịla ha ma ọ bụ nyela anụmanụ ha"], answer: 3, why: "Aflatoxin na-emerụ mmadụ ahụ ma na-esi na nri anụmanụ banye na mmiri ara ehi na akwa." },
          { objective: "O5", q: "Kedu otu akpa hermetic si egbu ụmụ ahụhụ ụlọ nchekwa?", options: ["Oxygen dị n'ime ya na-agwụ mgbe e mechiri ya", "O nwere nsi n'ime ya", "A na-eme ka ọ kpoo ọkụ", "Ọ na-ekwe ka ikuku ọhụrụ banye"], answer: 0, why: "Mgbe e mechiri ya nke ọma, a na-eji oxygen mechaa, ụmụ ahụhụ anwụọ n'enweghị ọgwụ." },
          { objective: "O5", q: "Gịnị mere a ga-eji debe akpa mkpụrụ nri n'elu pallet ma dị anya na mgbidi?", options: ["Naanị ka ọ dị mma ile anya", "Ka ha dịkwuo arọ", "Ka mmiri ghara iru ha, ma ka ọ dị mfe ịhụ oke na ụmụ ahụhụ", "Ka anwụ chaa ha"], answer: 2, why: "Pallet na ohere n'etiti ha na mgbidi na-eme ka akpa kpọọ nkụ ma dị mfe ilele." },
          { objective: "O6", q: "Gịnị bụ ụzọ kacha mma isi kwakọọ tomato chara acha maka ahịa?", options: ["Kpakọọ ha n'akpa", "N'ala ụgbọala na-ebu ibu n'akwakọghị ha", "N'akpa plastik mechiri emechi n'anwụ", "N'igbe dị ọcha, nwere oghere ikuku, nke e jupụtaghị karịa"], answer: 3, why: "Igbe na-echebe ihe ubi dị nro ka ọ ghara ịzọpịa ma na-ekwe ka ikuku gafee." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Ilekọta na Ichekwa Ihe Ubi Mgbe Owuwe Gasịrị",
    questions: [
      { objective: "O1", q: "Kedu ihe na-ebutekarị ihe na-efu mgbe owuwe gasịrị?", options: ["Ịmị ngwa ngwa", "Weevil, oke na ebu n'ụlọ nchekwa", "Igbe dị ọcha", "Ịhazi n'ọkwa"], answer: 1, why: "Ụmụ ahụhụ na ebu n'ụlọ nchekwa bụ isi ihe na-eme ka ihe fuo." },
      { objective: "O1", q: "Gịnị mere ị ga-eji see ụzọ ihe ọkụkụ gị site n'ubi ruo n'aka onye na-azụ ya?", options: ["Ịchọta ebe ihe kacha efu", "Ime ka ụzọ ahụ dị ogologo", "Izere onye na-azụ ya", "Ọ baghị uru"], answer: 0, why: "Ịmara ebe ihe na-efu na-agwa gị ebe ị ga-ebu ụzọ mee ihe." },
      { objective: "O1", q: "Ọnụ ahịa dị ala n'ihi na ịdị mma adịghị mma bụ:", options: ["Ọ bụghị ihe furu efu", "Uru", "Ihe furu efu mgbe owuwe gasịrị nke a na-adịghị ahụ anya", "Ụtụ isi"], answer: 2, why: "Itufu ọkwa ma ọ bụ ọnụ ahịa bụ itufu uru ọbụlagodi ma ọ bụrụ na akpa ọ bụla efughị." },
      { objective: "O2", q: "Agwa dị njikere maka owuwe mgbe:", options: ["Ifuru ya mepere", "Akwụkwọ ya na-acha akwụkwọ ndụ gbara ọchịchịrị", "Mkpụrụ ya ka dị nro", "Ọtụtụ mkpụrụ ya kpọrọ nkụ ma na-ada ụda"], answer: 3, why: "Mkpụrụ kpọrọ nkụ, na-ada ụda na-egosi na agwa ahụ chara." },
      { objective: "O2", q: "Mgbe ị na-ewe kọfị, ị kwesịrị iwe:", options: ["Naanị mkpụrụ chara uhie", "Mkpụrụ na-acha akwụkwọ ndụ", "Akwụkwọ na mkpụrụ ọnụ", "Mkpụrụ dara n'ala"], answer: 0, why: "Mkpụrụ chara uhie na-enye kọfị kacha mma." },
      { objective: "O2", q: "Ụkpụrụ a na-agbasokarị n'ịkpa tii bụ:", options: ["Akwụkwọ ochie siri ike", "Akwụkwọ abụọ na otu okoko", "Alaka osisi niile", "Mgbọrọgwụ"], answer: 1, why: "Ome nro nke akwụkwọ abụọ na otu okoko na-enye ezigbo tii." },
      { objective: "O2", q: "Gịnị mere ị ga-eji wee mkpụrụ osisi na akwụkwọ nri n'ụtụtụ dị oyi?", options: ["Ndị na-azụ ahịa na-ehi ụra ogologo", "Ọ dị ọnụ ala", "Okpomọkụ na-eme ka ịcha, ịkpọnwụ na ire ure gaa ngwa ngwa", "Igirigi ụtụtụ na-eme ka ọ dịkwuo arọ"], answer: 2, why: "Ihe ubi dị oyi na-adịgide ogologo oge." },
      { objective: "O3", q: "Ndụmọdụ FAO na-enye ọkwa mmiri dị mma maka ichekwa ọka dị ka:", options: ["Pasentị 13 ruo 14", "Pasentị 25", "Pasentị 40", "Pasentị 2"], answer: 0, why: "FAO kwuru na ịmị ya ruo ihe dị ka pasentị 13 ruo 14 tupu ebu amalite bụ ụzọ kacha mma isi gbochie aflatoxin." },
      { objective: "O3", q: "Kedu ka ngwa ngwa a ga-esi mịa ọka a kpachara ọhụrụ?", options: ["N'ime ihe dị ka izu abụọ", "Ọ dịghị ọsọ ọsọ", "Mgbe oge mmiri ozuzo na-esote gasịrị", "N'ime ihe dị ka ụbọchị abụọ"], answer: 3, why: "FAO na-ekwu na aflatoxin na-abawanye ngwa ngwa ma ọ bụrụ na ọka ahụ dị mmiri karịa ihe dị ka ụbọchị abụọ." },
      { objective: "O3", q: "Ụzọ kacha ziri ezi isi lelee mmiri dị na mkpụrụ nri bụ:", options: ["Ịta otu mkpụrụ", "Ihe nleta mmiri", "Ile agba ya", "Ịtụ ịdị arọ akpa ahụ"], answer: 1, why: "Ihe nleta mmiri na-atụ ya; nnwale nnu bụ naanị nnwale dị mfe." },
      { objective: "O3", q: "Gịnị mere a na-adịghị amị mkpụrụ nri n'elu ala efu?", options: ["Ọ na-akpọ nkụ ngwa ngwa nke ukwuu", "Ọ megidere iwu niile", "Aja, mmiri na mkpụrụ ebu na-abanye na mkpụrụ nri ahụ", "Aja na-eme ka mkpụrụ nri dịkwuo arọ ma baa uru karịa"], answer: 2, why: "Ala efu na-emerụ mkpụrụ nri ma na-eme ka ọ dị mmiri." },
      { objective: "O4", q: "Aflatoxin dị egwu n'otu akụkụ n'ihi na:", options: ["Isi ya na-esi ike nke ukwuu, ndị mmadụ wee na-ezere ya", "Ọtụtụ mgbe ị naghị ahụ ya anya, isi ya ma ọ bụ detụ ya ire", "Ọ na-emetụta naanị osisi", "Ọ na-apụ mgbe e siri mkpụrụ nri ahụ"], answer: 1, why: "A naghị ahụkarị ya anya, ya mere igbochi ya na inwale ya dị mkpa." },
      { objective: "O4", q: "Aflatoxin dị na nri anụmanụ nwere ike:", options: ["Ịbanye na mmiri ara ehi na akwa", "Ime ka anụmanụ too ngwa ngwa", "Ọ dịghị ihe ọ na-eme anụmanụ", "Ịghọ fatịlaịza"], answer: 0, why: "Aflatoxin si na nri anụmanụ nwere ike ịpụta na mmiri ara ehi na akwa." },
      { objective: "O4", q: "Aflasafe bụ:", options: ["Akpa nchekwa", "Ihe nleta mmiri", "Ụdị mkpụrụ ọka", "Ihe njikwa ndụ na-achụpụ ebu na-emepụta nsi"], answer: 3, why: "Aflasafe, nke IITA, na-eji ebu na-adịghị emerụ ahụ chụpụ ndị na-emepụta nsi." },
      { objective: "O4", q: "Tupu iji ihe njikwa ndụ (biocontrol), ị kwesịrị:", options: ["Igwakọta ya n'ọka e chekwara", "Ijụ onye ndụmọdụ ọrụ ugbo ma a kwadoro ya maka ihe ọkụkụ gị na mpaghara gị, ma soro lebụ ya", "Ime ka ọ dị okpukpu abụọ", "Iji ya naanị mgbe owuwe gasịrị"], answer: 1, why: "Jiri naanị ihe a kwadoro, dị ka lebụ ya si kwuo." },
      { objective: "O5", q: "Gịnị ga-abụrịrị eziokwu tupu mkpụrụ nri abanye n'akpa hermetic?", options: ["Ọ kpọrọ nkụ, dị ọcha ma a họpụtara ya", "Ọ ka dị mmiri", "E gwakọtara ya na ọgwụ ụmụ ahụhụ", "Anwụ na-eme ka ọ ka na-ekpo ọkụ"], answer: 0, why: "Akpa hermetic anaghị amị mkpụrụ nri; mkpụrụ nri dị mmiri ka ga-ebu ebu." },
      { objective: "O5", q: "Akpa ime nke akpa hermetic nwere obere oghere. Gịnị na-eme?", options: ["Ọ dịghị ihe", "Ọ na-arụ ọrụ nke ọma karịa", "Ikuku na-abanye, akpa ahụ akwụsị ịrụ ọrụ", "Mkpụrụ nri ahụ na-akpọ nkụ ngwa ngwa"], answer: 2, why: "Akpa ahụ ga-abụrịrị nke ikuku na-adịghị abanye ka ụmụ ahụhụ ghara inweta oxygen." },
      { objective: "O5", q: "Gịnị mere ị na-ekwesịghị imepe akpa hermetic ọtụtụ ugboro?", options: ["Ha na-adịkwu arọ", "Oge ọ bụla i mepere ya, ikuku ọhụrụ na-abanye", "Imepe ha megidere iwu", "Ụmụ ahụhụ na-amasị ìhè"], answer: 1, why: "Ikuku ọhụrụ na-eweghachi oxygen nye ụmụ ahụhụ." },
      { objective: "O6", q: "Zero Energy Cooling Chamber na-eme ka ihe ubi dị oyi site na:", options: ["Ọkụ eletrik", "Ice e zụtara n'ụlọ ahịa", "Gas", "Mmiri na-ekupụ site n'ájá mmiri dị n'etiti mgbidi brik"], answer: 3, why: "Mmiri na-ekupụ na-eme ka ime ya dị oyi ma na-eme ka ikuku dị mmiri." },
      { objective: "O6", q: "Gịnị mere a ga-eji hazie ihe ubi n'ọkwa tupu ire ya?", options: ["Ndị na-azụ ahịa na-akwụ ụgwọ karịa maka ihe ubi dị otu, dị ọcha, a họpụtara", "Ọ na-eme ka ihe ubi ree ure ngwa ngwa", "Ọ na-ezo ihe ndị mebiri emebi", "Ọ bụ naanị maka ihe a na-ebupụ mba ọzọ"], answer: 0, why: "Ịhazi n'ọkwa na-emezu ụkpụrụ onye na-azụ ya ma na-ewepụ ihe ndị mebiri emebi." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [0, 1, 3, 7, 9, 11, 14, 15, 16, 18] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ nke atụmatụ ahụ ma lelee ya ọzọ.",
    criteria: [
      { name: "Iwu onye na-azụ ya na oge owuwe", objective: "O2", notYet: "Iwu onye na-azụ ya adịghị, ma ọ bụ ihe na-egosi na ọ chara adịghị.", meets: "Iwu ịdị mma onye na-azụ ya dị n'elu, ya na ihe na-egosi na ọ chara na otu a ga-esi hazie ụbọchị owuwe.", exceeds: "Na-egosi ngwaọrụ, akpa ma ọ bụ igbe na ndị ọrụ a kwadoro tupu owuwe." },
      { name: "Ịmị na mmiri dị n'ime ya", objective: "O3", notYet: "Ọ dịghị ebe ịmị ya ma ọ bụ ilele mmiri (maka mkpụrụ nri).", meets: "Ịmị ya n'ebe na-abụghị ala, ịtụgharị ya na ikpuchi ya, na ilele mmiri site n'ihe nleta mmiri ma ọ bụ nnwale nnu.", exceeds: "Na-akpọ aha ebe a ga-eji ihe nleta mmiri, dị ka otu ndị ọrụ ugbo ma ọ bụ onye na-azụ ya." },
      { name: "Igbochi aflatoxin", objective: "O4", notYet: "Ọ dịghị nzọụkwụ megide aflatoxin, ma ọ bụ e debere ọka ebu.", meets: "Nzọụkwụ n'ubi, n'ịmị, n'ịhọpụta na n'ụlọ nchekwa, ebe e wepụrụ ọka ebu, a dịghịkwa eri ya, ere ya ma ọ bụ nye anụmanụ ya mgbe ọ bụla.", exceeds: "Na-ajụ onye ndụmọdụ ọrụ ugbo ma ihe njikwa ndụ a kwadoro dabara n'ihe ọkụkụ ahụ na mpaghara ahụ." },
      { name: "Nchekwa", objective: "O5", notYet: "Ụzọ nchekwa adịghị, ma ọ bụ e chekwara mkpụrụ nri ka ọ dị mmiri.", meets: "Mkpụrụ nri kpọrọ nkụ, dị ọcha, a họpụtara n'akpa hermetic ma ọ bụ ezigbo ụlọ nchekwa ọzọ, ọ dịghị n'ala, oke enweghịkwa ike iru ya.", exceeds: "Na-ekwu ugboro ole a ga-elele akpa ndị ahụ n'emepeghị ha." },
      { name: "Ime ka ọ dị oyi, ịhazi n'ọkwa na ịkwakọ", objective: "O6", notYet: "Mkpụrụ osisi na akwụkwọ nri dị n'akpa ma ọ bụ n'anwụ, ma ọ bụ a hazighị ha n'ọkwa.", meets: "Oge owuwe dị oyi, ndò, ịhazi n'ọkwa dị ka onye na-azụ ya chọrọ, na igbe dị ọcha nwere oghere ikuku na lebụ.", exceeds: "Na-eji ihe oyi mmiri na-ekupụ ma ọ bụ foto nke otu ọ bụla a hazirila n'ọkwa." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma nweta Ruru eru ma ọ bụ Karịrị n'ahịrị rubric ọ bụla nke atụmatụ mgbe owuwe gasịrị",
      "Ndị na-amụ ihe kwuru na ha jiri akpa hermetic, nlele mmiri ma ọ bụ igbe n'ime otu oge ọkụkụ (nnyocha nsochi)",
      "Mgbanwe n'ihe na-efu n'ụlọ nchekwa, ibu a jụrụ ma ọ bụ ọnụ ahịa otu akpa nke ndị na-amụ ihe ma ọ bụ otu ha kọrọ mgbe otu oge ọkụkụ gasịrị",
      "Ndị na-amụ ihe malitere ihe ọmụmụ ọrụ ugbo Koach Learn ọzọ n'ime ụbọchị 30"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Akwụkwọ ndetu, mkpịsị ode na ekwentị nkịtị",
      "Karama iko dị ọcha na nnu kpọrọ nkụ maka nnwale nnu; ihe nleta mmiri ma ọ bụrụ na a ga-ebiri otu",
      "Otu akpa hermetic na otu igbe maka ngosi, ma ọ bụrụ na ha dị",
      "Ihe dị ka nkeji 60 n'ozuzu, n'oge nkenke, gbakwunye oge iji dee atụmatụ mgbe owuwe gasịrị"
    ],
    facilitatorNotes: [
      "N'otu ndị ọrụ ugbo ma ọ bụ n'ụlọ nchekwa: meenụ ule mbido ọnụ, wee soro ụzọ otu ihe ọkụkụ site n'ubi ruo n'aka onye na-azụ ya.",
      "Gosi otu esi eme nnwale nnu, ma ọ bụrụ na ọ ga-ekwe omume, ihe nleta mmiri site n'otu ndị ọrụ ugbo ma ọ bụ onye na-azụ ahịa.",
      "Mụọnụ ijupụta na ikee akpa hermetic dị ka otu.",
      "Edetụla ọka ebu ire ma ọ bụ nye anụmanụ ya n'oge ngosi; gosi otu esi ahọpụta ma wepụ ya n'enweghị nsogbu.",
      "Jiri rubric tụọ akara atụmatụ mgbe owuwe gasịrị, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};
