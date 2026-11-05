"use strict";

// Koach Learn course (Igbo translation of africa-life/afr-selling-online.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

const WA_BUSINESS = { name: "WhatsApp Business: app WhatsApp Business (profaịlụ azụmahịa, igosi ngwaahịa na ọnụahịa, ozi nnabata na ozi mgbe ị nọghị)", url: "https://whatsappbusiness.com/products/business-app/" };
const NDPC = { name: "Nigeria Data Protection Commission (NDPC): Iwu Nchekwa Data Naịjirịa 2023 (Nigeria Data Protection Act 2023)", url: "https://ndpc.gov.ng/" };
const ODPC = { name: "Office of the Data Protection Commissioner, Kenya (Iwu Nchekwa Data, 2019)", url: "https://www.odpc.go.ke/" };
const CBK_FRAUD = { name: "Central Bank of Kenya: nchekwa pụọ n'aghụghọ", url: "https://www.centralbank.go.ke/fraud-safety/" };
const CBN_CP = { name: "Central Bank of Nigeria: nchekwa ndị ahịa", url: "https://www.cbn.gov.ng/Documents/ConsumerProtection.html" };

module.exports = {
  id: "afr-selling-online-ig",
  lang: "ig",
  translationOf: "afr-selling-online",
  category: "Africa: Life and Work",
  name: "Ire Ahịa n'Ịntanetị n'Africa (WhatsApp Business, Ahịa n'Ịntanetị na Soshal Midia)",
  skills: "Ịhọrọ ebe ị ga-ere ahịa n'ịntanetị, Ịhazi WhatsApp Business, Ise foto ngwaahịa na ide nkọwa ha, Ịza ndị ahịa na imechi ahịa, Ịlele ịkwụ ụgwọ na izere ozi ụgwọ adịgboroja, Iziga ngwaahịa na idebe ntụkwasị obi ndị ahịa",
  outcome: "ịnara ọda (order) maka ngwaahịa gị site n'ekwentị: ịhazi profaịlụ WhatsApp Business na ndepụta ngwaahịa, ide nkọwa ngwaahịa na-ere ahịa, ịza ndị ahịa na ikwenye ọda, ịlele na ego ahụ abatala n'ezie tupu i ziga ngwaahịa, na iziga ngwaahịa n'ụzọ ga-eme ka ndị ahịa lọghachi.",
  about: [
    "Ugbu a ọtụtụ ndị ahịa na-achọta ndị na-ere ahịa na WhatsApp, Facebook, Instagram, TikTok na ahịa n'ịntanetị dị ka Jumia na Jiji. Ihe ọmụmụ a bụ maka ndị ahịa, ndị omenka, ndị na-esi nri n'ụlọ, ndị na-akwa akwa, ndị ọrụ ugbo na ndị nwere obere ụlọ ahịa na Kenya, Naịjirịa, Ghana, Senegal, Côte d'Ivoire, Morocco na n'Africa niile, ndị chọrọ ire karịa n'okporo ụzọ ha.",
    "Ị ga-ahọrọ ebe ị ga-ere ahịa, hazie profaịlụ WhatsApp Business na ndepụta ngwaahịa, see foto mara mma n'ekwentị nkịtị, dee nkọwa ngwaahịa nwere ọnụahịa doro anya, zaa ndị ahịa ngwa ngwa, kwenye ọda n'ederede, lelee ịkwụ ụgwọ n'app mobile money ma ọ bụ app ụlọ akụ nke gị, ma hazie iziga ngwaahịa na ịnara ihe a lọghachiri.",
    "Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise ma na-ejedebe n'ọrụ \"Nwalee ya ugbu a\" maka azụmahịa gị. Ọ na-arụ ọrụ n'ekwentị Android nkịtị ma na-eji obere data. Ọnụahịa na ego ndị dị n'ihe ọmụmụ a bụ ọmụmaatụ, ọ bụghị ezi ọnụahịa ma ọ bụ ụgwọ."
  ],
  finalTask: "Mee atụmatụ ụlọ ahịa n'ịntanetị nke otu peeji maka azụmahịa gị: ebe ị ga-ere ahịa na ihe mere, ederede profaịlụ WhatsApp Business gị, nkọwa ngwaahịa atọ (ndetu foto, aha, ọnụahịa n'ego obodo gị, nkọwa na iziga ya), ozi nkwenye ọda echekwara, iwu gị maka ịlele ịkwụ ụgwọ, na iwu gị maka iziga ngwaahịa na ịnara ihe a lọghachiri.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị ahịa, ndị na-ere n'ahịa, ndị omenka, ndị na-esi nri n'ụlọ, ndị na-akwa akwa, ndị na-edozi isi, ndị ọrụ ugbo na ndị nwere obere ụlọ ahịa n'obodo mepere emepe na n'ime obodo n'Africa niile (Kenya, Naịjirịa, Ghana, West na Central Africa na-asụ French, North Africa). Ọtụtụ bụ ụmụ nwanyị na ndị na-eto eto; ọtụtụ na-akparịtarịrị ụka na ndị ahịa na WhatsApp.",
    startingPoint: "Ha nwere ike iji WhatsApp kparịta ụka ma ziga foto, ma nwee ike ịnata mobile money. Ole na ole nwere profaịlụ azụmahịa, ndepụta ngwaahịa, ọnụahịa doro anya n'ịntanetị, nkwenye ọda e dere ede ma ọ bụ iwu maka ịlele ịkwụ ụgwọ. Ụfọdụ ka ozi ụgwọ adịgboroja ghọgburu.",
    gap: "Ndị ahịa na-achọ ma na-enye ọda n'ekwentị ha, mana ọtụtụ obere ndị na-ere ahịa na-atụfu ahịa n'ihi na ha anaghị aza ngwa ngwa, ọnụahịa adịghị doro anya, foto adịghịkwa mma, ha na-atụfukwa ego na ngwaahịa n'ihi ozi ụgwọ adịgboroja. Ndị na-amụ ihe chọrọ ụzọ dị mfe na nke enweghị nsogbu isi gosi ngwaahịa, nara ọda, lelee ịkwụ ụgwọ ma ziga ngwaahịa, ka ire ahịa n'ịntanetị wee tinye ego kama ihe egwu.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ; ọtụtụ ndị na-amụ ihe na-asụ Bekee dị ka asụsụ nke abụọ (a na-enyekwa ihe ọmụmụ a n'asụsụ French na Arabic)",
      "Ngwaọrụ: ekwentị Android nkịtị, nke a na-ekekọrịta mgbe ụfọdụ; data dị oke ọnụ, ya mere foto na vidiyo kwesịrị ịdị obere",
      "Ego: obere ego ma ọ bụ enweghị ego maka mgbasa ozi; were ngwa n'efu buru ụzọ",
      "Iwu na ụgwọ: ihe app nwere, commission ahịa n'ịntanetị na iwu nchekwa data na-agbanwe site na mba ruo mba; ndị na-amụ ihe na-elele n'app ahụ, peeji ndị na-ere ahịa nke ahịa ahụ ma ọ bụ ọfịs gọọmentị nke mba ha",
      "Nchekwa: ihe egwu aghụghọ dị elu; ekesala PIN, okwuntughe ma ọ bụ koodu otu oge mgbe ọ bụla"
    ],
    prerequisites: "Inwe ike iziga ozi na foto na WhatsApp. Ọ ga-enyere aka: \"Iji Mobile Money n'Enweghị Nsogbu\" n'otu ngalaba a."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe e nyere gị ngwaahịa gị, ndị ahịa gị na ọwa (channel) abụọ ma ọ bụ atọ n'ịntanetị", action: "ịhọrọ ebe ị ga-ere ahịa n'ịntanetị ma dee ihe mere", standard: "na-akpọ ego ọ na-efu, ike ọ na-ewe na ndị na-azụ ihe n'ebe ahụ maka ọwa ọ bụla" },
    { id: "O2", condition: "Site n'iji ekwentị nwere app WhatsApp Business", action: "ịhazi profaịlụ azụmahịa na ndepụta ngwaahịa nwere ọnụahịa", standard: "nwere aha, nkọwa dị mkpụmkpụ, oge mmeghe, ebe ị na-eje ozi na opekata mpe ngwaahịa atọ" },
    { id: "O3", condition: "Mgbe e nyere gị otu n'ime ngwaahịa gị", action: "ise foto doro anya ma dee nkọwa ngwaahịa nwere aha, ọnụahịa, nkọwa na iziga ya", standard: "nke mere na onye ahịa ga-enye ọda n'ajụghị ajụjụ ndị bụ isi" },
    { id: "O4", condition: "Mgbe onye ahịa zitere ajụjụ ma ọ bụ ọda", action: "ịza ya nke ọma ma kwenye ọda ahụ n'ederede", standard: "n'ime oge mmeghe i kwuru, nwere ihe ahụ, ọnụọgụ, ọnụahịa, iziga ya na ịkwụ ụgwọ n'otu ozi" },
    { id: "O5", condition: "Tupu i ziga ngwaahịa a kwụrụ ụgwọ ya site na mobile money ma ọ bụ transfer ụlọ akụ", action: "ịlele n'app nke gị ma ọ bụ n'ezi ozi onye na-enye ọrụ na ego ahụ abatala", standard: "n'atụkwasịghị obi na screenshot, ozi e zigaghachiri ma ọ bụ onye kpọrọ oku, n'ekesaghịkwa PIN mgbe ọ bụla" },
    { id: "O6", condition: "Mgbe ị na-eziga ọda", action: "ide ma gbasoo iwu iziga ngwaahịa na ịnara ihe a lọghachiri nke na-echebe ntụkwasị obi na data ndị ahịa", standard: "na-ekwu ebe ị na-eziga, ego ọ na-efu, oge ọ na-ewe na ịlọghachi ihe, ma na-edebe nọmba ndị ahịa na nzuzo" }
  ],
  chapters: [
    {
      name: "Isi 1: Imeghe ụlọ ahịa gị n'ịntanetị",
      lessons: [
        {
          title: "Ịhọrọ ebe ị ga-ere ahịa n'ịntanetị",
          objectives: ["O1"],
          minutes: 5,
          goal: "Họrọ otu ebe ma ọ bụ ebe abụọ ị ga-ere ahịa n'ịntanetị nke dabara ngwaahịa gị na ndị ahịa gị.",
          text: [
            "Ọ dịghị mkpa ka ị nọrọ ebe niile. Họrọ ebe ndị ahịa gị nọworị, na ebe ị ga-enwe ike ịza ozi. Ire ahịa n'ịntanetị dị ka imeghe ụlọ ahịa nke abụọ: ọ na-arụ ọrụ naanị ma ọ bụrụ na mmadụ nọ ebe ahụ ijere ndị ahịa ozi.",
            "App nkata dị ka WhatsApp dị mma maka ndị ahịa na-azụ mgbe niile na ndị agbata obi. Soshal midia dị ka Facebook, Instagram na TikTok na-enyere ndị ọhụrụ aka ịchọta gị site na foto na obere vidiyo. Ahịa n'ịntanetị (marketplace) dị ka Jumia, Jiji, Kilimall na Konga nweworị ọtụtụ ndị na-azụ ihe na-achọ ihe, mana ha nwere iwu, ụfọdụ na-ewerekwa commission (akụkụ nke ahịa ọ bụla) ma ọ bụ na-ana ụgwọ maka mgbasa ozi a kwalitere.",
            "Maka ọwa ọ bụla, dee ihe atọ: ndị na-azụ ihe n'ebe ahụ, ego ọ na-efu (data, commission, mgbasa ozi, iziga ngwaahịa) na oge ole ọ na-ewe kwa ụbọchị. Ọmụmaatụ: Ama nọ na Kumasi na-ere mkpụrụ olu (beads). Ọ na-eji WhatsApp maka ndị ahịa ya na-azụ mgbe niile, ma tinye Instagram iji ruo ndị ọhụrụ na Accra. Onye na-akpụ akpụkpọ ụkwụ na Dakar nwere ike ibido na WhatsApp na Facebook, wee tinye ahịa n'ịntanetị ma emechaa.",
            "Tupu ị banye n'ahịa n'ịntanetị, gụọ peeji ndị na-ere ahịa nke ya: ihe ọ na-ana, otu o si akwụ gị ụgwọ, mgbe ọ na-akwụ, na ihe na-eme ma a lọghachi ihe. Ihe ndị a na-agbanwe, ya mere lelee na weebụsaịtị nke ahịa ahụ n'onwe ya, ọ bụghị n'ozi e zigaghachiri."
          ],
          steps: ["Depụta ebe ndị ahịa gị na-akparịta ụka, na-ele ihe ma na-azụ ihe.", "Maka ọwa ọ bụla, dee ndị na-azụ ihe n'ebe ahụ, ego ọ na-efu na oge ọ na-ewe.", "Họrọ otu ọwa bụ isi, ma tinye opekata mpe otu ọzọ, ọ bụghị karịa.", "Maka ahịa n'ịntanetị, gụọ peeji ndị na-ere ahịa nke ya maka ụgwọ, ịkwụ ụgwọ na ịlọghachi ihe."],
          words: [["Ọwa (channel)", "ebe ị na-ere ahịa ma ọ bụ na-agwa ndị ahịa okwu, dị ka WhatsApp, Facebook ma ọ bụ ahịa n'ịntanetị."], ["Ahịa n'ịntanetị (marketplace)", "weebụsaịtị ma ọ bụ app ebe ọtụtụ ndị na-ere ahịa na-etinye ngwaahịa ha, ndị na-azụ ihe na-achọkwa ihe, dị ka Jumia ma ọ bụ Jiji."], ["Commission", "akụkụ nke ahịa ọ bụla nke ahịa n'ịntanetị na-edebe dị ka ụgwọ ya."]],
          slides: [
            { title: "Ree ahịa ebe ndị ahịa gị nọ", bullets: ["Naanị ebe ị ga-enwe ike ịza ozi", "Ịntanetị bụ ụlọ ahịa nke abụọ: mmadụ ga-ejere ozi"] },
            { title: "Ụdị ọwa atọ", bullets: ["App nkata: WhatsApp maka ndị ahịa na-azụ mgbe niile", "Soshal midia: Facebook, Instagram, TikTok ka a chọta gị", "Ahịa n'ịntanetị: Jumia, Jiji, Kilimall, Konga"] },
            { title: "Tụnyere ọwa ọ bụla", bullets: ["Ndị na-azụ ihe n'ebe ahụ", "Ego ọ na-efu: data, commission, mgbasa ozi, iziga ngwaahịa", "Oge ole ọ na-ewe kwa ụbọchị"] },
            { title: "Bido n'obere", bullets: ["Otu ọwa bụ isi, opekata mpe otu ọzọ", "Buru ụzọ gụọ peeji ndị na-ere ahịa nke ahịa ahụ"] }
          ],
          tryIt: "See obere tebụl nwere ọwa abụọ ma ọ bụ atọ ị nwere ike iji. Maka nke ọ bụla, dee ndị na-azụ ihe n'ebe ahụ, ego ọ na-efu na oge ọ na-ewe. Gbaa gburugburu nke ị ga-eji bido.",
          youCanNow: "ịtụnyere ọwa ịntanetị site n'ego, ike na ndị ahịa, ma họrọ ebe ị ga-ebido.",
          quickCheck: [
            { objective: "O1", q: "Ị nwere ike ịza ozi otu awa kwa ụbọchị. Gịnị bụ mmalite kacha mma?", options: ["Meghee akaụntụ n'app isii n'otu oge", "Bido n'otu ọwa bụ isi ị ga-enwe ike ijikwa", "Tinye ihe otu ugboro ma ghara ịza ọzọ", "Kwụọ ụgwọ mgbasa ozi tupu i nwee ndepụta ngwaahịa"], answer: 1, why: "Ọwa na-arụ ọrụ naanị ma ọ bụrụ na ị na-aza ndị ahịa, ya mere bido n'ihe ị ga-enwe ike ijikwa." },
            { objective: "O1", q: "Ebee ka ị ga-elele ihe ahịa n'ịntanetị na-ana ndị na-ere ahịa?", options: ["Ozi WhatsApp e zigaghachiri", "Echiche enyi gị", "Peeji ndị na-ere ahịa nke ahịa ahụ n'onwe ya", "Okwu e dere n'okpuru vidiyo"], answer: 2, why: "Ụgwọ na iwu na-agbanwe, ọ bụkwa naanị peeji nke ahịa ahụ n'onwe ya ka a pụrụ ịtụkwasị obi." }
          ]
        },
        {
          title: "Ịhazi WhatsApp Business: profaịlụ na ndepụta ngwaahịa",
          objectives: ["O2"],
          minutes: 6,
          goal: "Hazie profaịlụ WhatsApp Business na ndepụta ngwaahịa nwere ọnụahịa.",
          text: [
            "WhatsApp Business bụ app dị iche na WhatsApp nkịtị, otu ụlọ ọrụ ahụ mere ya maka obere azụmahịa. Nweta ya naanị site n'ezi ụlọ ahịa app (Google Play na Android). Ọ na-ekwe ka ị gosi profaịlụ azụmahịa, gosi ngwaahịa gị na ọnụahịa ha, ma ziga ozi nnabata na ozi mgbe ị nọghị.",
            "Profaịlụ azụmahịa gị bụ akara ụlọ ahịa gị. Dejupụta aha azụmahịa gị, obere nkọwa ihe ị na-ere, ebe ị nọ ma ọ bụ adreesị gị, oge mmeghe gị, na otu ndị ahịa ga-esi kwụọ ụgwọ. Jiri logo doro anya ma ọ bụ foto ụlọ ahịa gị ma ọ bụ ngwaahịa gị kacha mma.",
            "Wee tinye ngwaahịa gị na ndepụta ngwaahịa (n'ọtụtụ ụdị app, a na-akpọ ya catalogue): foto, aha, ọnụahịa n'ego obodo gị na obere nkọwa. Ndị ahịa nwere ike ilegharị ya anya ma ziga gị otu ihe na nkata. Ọmụmaatụ: Wanjiku nọ na Nakuru tinyere \"Akpụkpọ ụkwụ Maasai nwere mkpụrụ olu, size 37-41, KES 1,200\" (ọnụahịa ọmụmaatụ).",
            "Menu dị iche site n'ekwentị ruo ekwentị na site n'ụdị app ruo ụdị. Ọ bụrụ na ịchọtaghị otu ntọala, meghee settings nke app ahụ ma chọọ business tools. Ị nwekwara ike ịtọ obere ozi nnabata maka ndị ahịa ọhụrụ na ozi mgbe ị nọghị maka mgbe ị mechiri ụlọ ahịa."
          ],
          steps: ["Wụnye WhatsApp Business site n'ezi ụlọ ahịa app.", "Dejupụta profaịlụ azụmahịa: aha, nkọwa, ebe ị nọ, oge mmeghe, ụzọ ịkwụ ụgwọ.", "Tinye logo ma ọ bụ foto doro anya.", "Tinye opekata mpe ngwaahịa atọ nwere foto, aha, ọnụahịa na obere nkọwa.", "Tọọ ozi nnabata na ozi mgbe ị nọghị."],
          words: [["Profaịlụ azụmahịa", "peeji na-egosi ndị ahịa aha azụmahịa gị, nkọwa ya, oge mmeghe na ebe ọ dị."], ["Ndepụta ngwaahịa (catalogue)", "ndepụta ngwaahịa gị nwere foto na ọnụahịa nke ndị ahịa nwere ike ilegharị anya n'app ahụ."], ["Ozi mgbe ị nọghị (away message)", "azịza na-aga n'onwe ya mgbe ị mechiri ụlọ ahịa."]],
          slides: [
            { title: "WhatsApp Business", bullets: ["App n'efu maka obere azụmahịa", "Wụnye naanị site n'ezi ụlọ ahịa app", "Profaịlụ, ndepụta ngwaahịa, ozi nnabata na ozi mgbe ị nọghị"] },
            { title: "Profaịlụ gị bụ akara ụlọ ahịa gị", bullets: ["Aha azụmahịa na ihe ị na-ere", "Ebe ị nọ ma ọ bụ adreesị na oge mmeghe", "Otu ndị ahịa ga-esi kwụọ ụgwọ", "Logo ma ọ bụ foto doro anya"] },
            { title: "Ndepụta ngwaahịa gị", bullets: ["Foto, aha, ọnụahịa n'ego obodo gị", "Obere nkọwa: size, agba, ọnụọgụ", "Opekata mpe ngwaahịa atọ iji bido"] },
            { title: "Ozi na-aga n'onwe ha", bullets: ["Ozi nnabata maka ndị ahịa ọhụrụ", "Ozi mgbe ị nọghị mgbe ị mechiri", "Menu dị iche: lee na settings, business tools"] }
          ],
          tryIt: "Wụnye WhatsApp Business (ma ọ bụ meghee ya ma ọ bụrụ na i nwere ya). Dejupụta profaịlụ gị ma tinye ngwaahịa atọ nwere foto, aha, ọnụahịa na otu ahịrị nkọwa. Rịọ enyi gị ka o lee ya ma gwa gị otu ihe na-edoghị anya.",
          youCanNow: "ịhazi profaịlụ WhatsApp Business na ndepụta ngwaahịa ndị ahịa nwere ike ilegharị anya.",
          quickCheck: [
            { objective: "O2", q: "Kedu ihe kwesịrị ịdị na profaịlụ azụmahịa gị?", options: ["PIN mobile money gị", "Oge mmeghe gị", "Nọmba ekwentị ndị ahịa gị", "Okwuntughe gị"], answer: 1, why: "Oge mmeghe na-agwa ndị ahịa mgbe ị ga-aza ha; PIN, okwuntughe na nọmba ndị ahịa na-anọ na nzuzo." },
            { objective: "O2", q: "Otu ngwaahịa na ndepụta gị nwere foto mana o nweghị ọnụahịa. Gịnị ka ị ga-etinye?", options: ["Ọ dịghị ihe; ndị ahịa na-achọ ịjụ", "Adreesị ụlọ gị", "Akụkọ ogologo gbasara ụlọ ahịa ahụ", "Ọnụahịa ya n'ego obodo gị"], answer: 3, why: "Ọnụahịa doro anya na-echekwa oge ma na-egbochi ndị ahịa ịpụ n'ajụghị ajụjụ." }
          ],
          sources: [WA_BUSINESS]
        },
        {
          title: "Foto na nkọwa ngwaahịa na-ere ahịa",
          objectives: ["O3"],
          minutes: 5,
          goal: "See foto ngwaahịa doro anya ma dee nkọwa onye ahịa nwere ike iji nye ọda.",
          text: [
            "Onye ahịa nọ n'ịntanetị enweghị ike imetụ ngwaahịa gị aka, ya mere foto na okwu ga-arụ ọrụ ahụ. See foto n'ìhè ehihie n'akụkụ windo ma ọ bụ n'èzí n'okpuru ndò. Jiri ihe dị n'azụ na-enweghị ihe ọ bụla dị ya, dị ka akwa ma ọ bụ mgbidi. Hichaa enyo igwefoto ahụ. Gosi ngwaahịa ahụ niile, wee see otu foto nso, na ihe na-egosi otu o si buo, dị ka aka.",
            "Ezigbo nkọwa ngwaahịa na-aza ajụjụ onye ahịa tupu ọ jụọ: aha doro anya (ihe ọ bụ), ọnụahịa n'ego obodo gị, size, agba, ọnụọgụ ma ọ bụ ịdị arọ, ihe e ji mee ya, na otu na ebe ị na-eziga ya. Ọmụmaatụ: \"Ude ahụ shea butter, ite 250 g, enweghị isi ọ bụla, GHS 60. Iziga ya na Tamale taa; obodo ndị ọzọ site na ngwugwu ụgbọ ala.\" (ọnụahịa ọmụmaatụ).",
            "Kwuo eziokwu. Gosi ezi ngwaahịa gị, ọ bụghị foto si n'ịntanetị, ma kwuo ma ọ bụrụ na agba nwere ike ịdị iche. Foto eziokwu na-eme ka a ghara ịlọghachi ihe nke ukwuu, ma na-eme ka a tụkwasị gị obi. Mee ka faịlụ dị obere iji chekwaa data: otu foto doro anya ka foto iri na-adịghị nke ọma mma."
          ],
          steps: ["Hichaa ngwaahịa ahụ na enyo igwefoto.", "Jiri ìhè ehihie na ihe dị n'azụ na-enweghị ihe ọ bụla dị ya.", "See otu foto zuru ezu, otu foto nso na otu na-egosi otu o si buo.", "Dee aha, ọnụahịa, size ma ọ bụ ịdị arọ, ihe e ji mee ya, na iziga ya.", "Gụọ ya dị ka onye ahịa: ị nwere ike inye ọda n'ajụghị ajụjụ?"],
          words: [["Nkọwa ngwaahịa (listing)", "foto na okwu na-egosi otu ngwaahịa a na-ere."], ["Foto nso (close-up)", "foto e sere nso na ngwaahịa ahụ iji gosi ihe ndị dị nta n'ahụ ya."]],
          slides: [
            { title: "Foto ndị ahịa na-atụkwasị obi", bullets: ["Ìhè ehihie, azụ na-enweghị ihe, enyo dị ọcha", "Ngwaahịa niile, foto nso, na ihe na-egosi otu o si buo", "Ezi ngwaahịa gị, ọ bụghị foto si n'ịntanetị"] },
            { title: "Nkọwa na-aza ajụjụ", bullets: ["Aha: ihe ọ bụ", "Ọnụahịa n'ego obodo gị", "Size, agba, ịdị arọ, ihe e ji mee ya", "Otu na ebe ị na-eziga ya"] },
            { title: "Chekwaa data, wulite ntụkwasị obi", bullets: ["Otu foto doro anya ka foto iri na-adịghị nke ọma", "Kwuo ma agba nwere ike ịdị iche", "Nkọwa eziokwu = ịlọghachi ihe na-ebelata"] }
          ],
          tryIt: "Họrọ otu ngwaahịa. See foto atọ (niile, nso, otu o si buo) n'ìhè ehihie n'azụ na-enweghị ihe. Dee nkọwa nwere aha, ọnụahịa, nkọwa na iziga ya. Gụọ ya dị ka onye ahịa ma dozie ihe ọ bụla ị ga-ajụ ajụjụ maka ya.",
          youCanNow: "ise foto ngwaahịa doro anya n'ekwentị nkịtị ma dee nkọwa ndị ahịa nwere ike iji nye ọda.",
          quickCheck: [
            { objective: "O3", q: "Ebee ka ìhè kacha mma maka foto ngwaahịa dị?", options: ["Ìhè ehihie n'akụkụ windo ma ọ bụ n'okpuru ndò", "Ime ụlọ gbara ọchịchịrị nwere flash", "N'okpuru ọkụ nwere agba", "N'èzí n'abalị"], answer: 0, why: "Ìhè ehihie dị nro na-egosi ezi agba na ihe ndị dị nta n'enweghị onyinyo siri ike." },
            { objective: "O3", q: "Kedu nkọwa na-ekwe ka onye ahịa nye ọda n'ajụghị ajụjụ?", options: ["\"Akpa mara mma. DM.\"", "\"A na-ere akpa\"", "\"Akpa akpụkpọ\"", "\"Akpa aka akpụkpọ agba aja aja, 30 x 25 cm, NGN 18,000, iziga ya na Lagos n'ime ụbọchị 2\""], answer: 3, why: "Ọ na-ekwu ihe ọ bụ, size, ọnụahịa na iziga ya, ka onye ahịa wee kpebie." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Imeghe ụlọ ahịa gị n'ịntanetị",
        questions: [
          { objective: "O1", q: "Kedu ihe atọ ị na-atụnyere maka ọwa ịntanetị ọ bụla?", options: ["Ndị na-azụ ihe n'ebe ahụ, ego ọ na-efu, na oge ọ na-ewe", "Logo ya, agba ya na afọ ole o dịworị", "Ndị enyi ole na-eji ya akparịta ụka", "Naanị ma ọ bụ ihe ọhụrụ"], answer: 0, why: "Ndị ahịa, ego na oge na-ekpebi ma ọwa ga-ewetara gị ego." },
          { objective: "O1", q: "Ahịa n'ịntanetị na-edebe akụkụ nke ahịa ọ bụla. Gịnị ka a na-akpọ ya?", options: ["Ego nkwụnye (deposit)", "Nkwụghachi ego (refund)", "Commission", "Ozi nnabata"], answer: 2, why: "Commission bụ akụkụ nke ahịa ọ bụla nke ahịa n'ịntanetị na-edebe dị ka ụgwọ ya." },
          { objective: "O2", q: "Ebee ka i kwesịrị inweta app WhatsApp Business?", options: ["Njikọ (link) site na nọmba ị na-amaghị", "Ezi ụlọ ahịa app", "Faịlụ onye ọbịa zitere gị", "Mgbasa ozi na-apụta na mberede"], answer: 1, why: "Ezi ụlọ ahịa app na-egbochi app adịgboroja na malware ịbanye n'ekwentị gị." },
          { objective: "O2", q: "Ị na-emechi n'elekere 7 nke abalị. Gịnị na-enyere ndị ahịa na-ezite ozi n'abalị aka?", options: ["Ịgbanyụ ekwentị gị ruo mgbe ebighị ebi", "Ihichapụ ozi ha", "Iji PIN gị zaa ha", "Ozi mgbe ị nọghị na-ekwu mgbe ị ga-aza"], answer: 3, why: "Ozi mgbe ị nọghị na-agwa ndị ahịa na ị hụrụ ozi ha na mgbe ị ga-aza ha." },
          { objective: "O3", q: "Ngwaahịa gị nwere agba ndị na-adị iche na ihuenyo. Gịnị ka ị ga-ede?", options: ["Ọ dịghị ihe", "\"Agba nwere ike ịdị ntakịrị iche na foto\"", "\"Anaghị anara ihe a lọghachiri mgbe ọ bụla\"", "Jiri foto ka mma si n'ịntanetị"], answer: 1, why: "Ikwu eziokwu gbasara agba na-egbochi mkpesa ma na-ewulite ntụkwasị obi." }
        ]
      }
    },
    {
      name: "Isi 2: Ire ahịa, inweta ụgwọ na iziga ngwaahịa",
      lessons: [
        {
          title: "Ịza ndị ahịa na imechi ahịa",
          objectives: ["O4"],
          minutes: 5,
          goal: "Zaa onye ahịa ma kwenye ọda n'otu ozi doro anya.",
          text: [
            "N'ịntanetị, onye na-ere ahịa buru ụzọ zaa nke ọma na-enwetakarị ahịa ahụ. Zaa n'ime oge mmeghe gị, kelee onye ahịa ahụ, ma zaa kpọmkwem ajụjụ ya. Ọ bụrụ na ịmaghị, kwuo mgbe ị ga-achọpụta.",
            "Chekwaa obere azịza ndị ị na-ezigakarị, dị ka ndepụta ọnụahịa gị, ebe ị na-eziga ngwaahịa na ụzọ ịkwụ ụgwọ. WhatsApp Business na-ekwe ka ị chekwaa azịza ma jiri ha ọzọ; menu dị iche, ya mere lee na business tools. Nke a na-echekwa ide ihe ma na-eme ka azịza gị dị otu mgbe niile.",
            "Mgbe onye ahịa dị njikere, kwenye ọda ahụ n'otu ozi: ihe ahụ, ọnụọgụ, ọnụahịa, ebe a ga-eziga ya na ego iziga ya, ụbọchị a ga-eziga ya, na otu ọ ga-esi kwụọ ụgwọ. Rịọ ya ka ọ zaa \"Ee\" iji kwenye. Ọmụmaatụ site na Abidjan: \"Bonjour Awa. Ọda: uwe wax-print 2, size M, 15,000 XOF nke ọ bụla = 30,000 XOF. Iziga ya na Cocody na Satọdee, 1,000 XOF. Ịkwụ ụgwọ site na mobile money tupu iziga ya. Zaa OUI iji kwenye.\" (ọnụahịa ọmụmaatụ).",
            "Nọgide na-akwanyere ugwu, ọbụlagodi mgbe onye ahịa na-agba mgba ọnụahịa nke ukwuu ma ọ bụ na-akparị gị. Ezigala okwu nkọcha mgbe ọ bụla, etinyekwala ozi onye ahịa n'ihu ọha."
          ],
          steps: ["Kelee onye ahịa ma zaa kpọmkwem ajụjụ ya.", "Jiri azịza echekwara maka ndepụta ọnụahịa, iziga ngwaahịa na ịkwụ ụgwọ.", "Kwenye: ihe ahụ, ọnụọgụ, ọnụahịa, ebe a ga-eziga ya, ego na ụbọchị, ụzọ ịkwụ ụgwọ.", "Rịọ onye ahịa ka ọ zaa \"Ee\" tupu ị kwadebe ọda ahụ."],
          words: [["Azịza echekwara (quick reply)", "ozi ị chekwara n'app ma na-ezigaghachi site n'imetụ ihuenyo ugboro ole na ole."], ["Nkwenye ọda (order confirmation)", "otu ozi na-edepụta ihe niile onye ahịa kwenyere ịzụ na otu a ga-esi kwụọ ụgwọ ya ma ziga ya."]],
          slides: [
            { title: "Azịza ngwa ngwa, doro anya na-enweta ahịa", bullets: ["Zaa n'ime oge mmeghe gị", "Kelee ma zaa kpọmkwem ajụjụ", "Ị maghị? Kwuo mgbe ị ga-achọpụta"] },
            { title: "Chekwaa azịza ị na-ezigakarị", bullets: ["Ndepụta ọnụahịa", "Ebe ị na-eziga ngwaahịa na ego ọ na-efu", "Ụzọ ịkwụ ụgwọ"] },
            { title: "Kwenye ọda ọ bụla n'ederede", bullets: ["Ihe ahụ, ọnụọgụ na ọnụahịa", "Ebe a ga-eziga ya, ego na ụbọchị", "Ụzọ ịkwụ ụgwọ", "Onye ahịa na-aza \"Ee\" iji kwenye"] }
          ],
          tryIt: "Dee ma chekwaa ozi nkwenye ọda maka azụmahịa gị nwere oghere maka ihe ahụ, ọnụọgụ, ọnụahịa, iziga ya na ịkwụ ụgwọ. Wee dejupụta ya maka otu ọda ọmụmaatụ.",
          youCanNow: "ịza ndị ahịa nke ọma ma kwenye ọda ọ bụla n'otu ozi e dere ede.",
          quickCheck: [
            { objective: "O4", q: "Kedu nkwenye ọda zuru ezu?", options: ["\"Ọ dị mma, ọ na-abịa.\"", "\"Akpa 2, KES 1,500 nke ọ bụla = KES 3,000. Iziga ya na Kisumu town na Fraịdee, KES 200. Kwụọ site na M-Pesa. Zaa EE.\"", "\"Ziga ego.\"", "\"Daalụ maka nkata!\""], answer: 1, why: "Ọ na-edepụta ihe ahụ, ọnụọgụ, ọnụahịa, iziga ya na ịkwụ ụgwọ, ma rịọ onye ahịa ka o kwenye." },
            { objective: "O4", q: "Gịnị mere ị ga-eji chekwaa azịza ị na-ezigakarị?", options: ["Ka azịza dị ngwa ma dị otu mgbe niile", "Ka onye ahịa kwụọ ụgwọ karịa", "Ka ị ghara ịgụ ozi mgbe ọ bụla", "Ka i nwee ike ikesa nọmba ndị ahịa"], answer: 0, why: "Azịza echekwara na-echekwa ide ihe ma na-eme ka ọnụahịa na iwu gị dị otu." }
          ]
        },
        {
          title: "Inweta ụgwọ n'enweghị nsogbu: kwụsị ozi ụgwọ adịgboroja",
          objectives: ["O5"],
          minutes: 6,
          goal: "Lelee na ego abatala n'ezie tupu i nyefee ngwaahịa.",
          text: [
            "Ọtụtụ ndị na-ere ahịa n'ịntanetị na-anata ụgwọ site na mobile money (M-Pesa, MTN MoMo, Orange Money, Wave) ma ọ bụ transfer ụlọ akụ, ma ọ bụ ego aka mgbe a na-eziga ngwaahịa (cash on delivery). Ndị aghụghọ maara nke a. Otu aghụghọ a na-ahụkarị bụ ozi ụgwọ adịgboroja: ozi ederede, screenshot ma ọ bụ ozi e zigaghachiri nke yiri ụgwọ mana ego ọ bụla abataghị.",
            "Iwu gị: ngwaahịa na-apụ naanị mgbe ego ahụ pụtara n'akaụntụ nke gị. Meghee app mobile money ma ọ bụ app ụlọ akụ nke gị, ma ọ bụ pịa ezi koodu onye na-enye gị ọrụ, ma lelee ego fọdụrụ ma ọ bụ azụmahịa ahụ. Screenshot onye ahịa abụghị ihe akaebe. Ozi ederede site na nọmba ekwentị nkịtị abụghị ihe akaebe.",
            "Aghụghọ ọzọ: \"Eziri m gị ego na mperi, biko zighachi ya.\" Ezigala ihe ọ bụla. Lelee ego gị n'onwe gị; ọ bụrụ na e nwere ezi ego e zitere na mperi, onye na-enye gị ọrụ nwere ike ịlọghachi ya site n'usoro nke ya. Ezi onye na-enye ọrụ anaghị arịọ PIN gị, okwuntughe gị ma ọ bụ koodu otu oge mgbe ọ bụla. Ekesala ha, ọbụlagodi onye kwuru na o si n'ụlọ ọrụ ahụ.",
            "Maka ego aka mgbe a na-eziga ngwaahịa, gụọ ego ahụ tupu i nyefee ngwugwu ahụ, ma mara akwụkwọ ego obodo gị. Central bank ọ bụla na-ebipụta ịdọ aka na ntị gbasara aghụghọ, dịka ọmụmaatụ Central Bank of Kenya na Central Bank of Nigeria."
          ],
          steps: ["Kwekọrịta ụzọ ịkwụ ụgwọ na nkwenye ọda.", "Mgbe onye ahịa kwuru na ọ kwụọla, meghee app nke gị ma ọ bụ pịa ezi koodu onye na-enye gị ọrụ.", "Lelee ego ahụ na onye zitere ya na ego fọdụrụ ma ọ bụ akụkọ akaụntụ gị.", "Naanị mgbe ahụ ka ị ga-enyefe ma ọ bụ ziga ngwaahịa ahụ.", "Leghara arịrịọ \"zighachi ego m e zitere na mperi\" anya; hapụ onye na-enye ọrụ ka ọ hazie nlọghachi."],
          words: [["Ozi ụgwọ adịgboroja", "ozi ederede, screenshot ma ọ bụ ozi e mere ka ọ dị ka ụgwọ mgbe e zitaghị ego ọ bụla."], ["PIN", "nọmba nzuzo gị maka mobile money ma ọ bụ ụlọ akụ gị. Naanị gị kwesịrị ịma ya."], ["Nlọghachi ego (reversal)", "mgbe a lọghachiri ụgwọ; ezi nlọghachi bụ onye na-enye gị ọrụ na-eme ya, ọ bụghị gị iziga onye ọbịa ego."]],
          slides: [
            { title: "Aghụghọ ozi ụgwọ adịgboroja", bullets: ["Ozi ederede ma ọ bụ screenshot yiri ka ego abatala", "Ọ dịghị ego n'akaụntụ gị", "Onye aghụghọ ahụ ewere ngwaahịa gị pụọ"] },
            { title: "Iwu gị", bullets: ["Ngwaahịa na-apụ naanị mgbe ego dị n'akaụntụ NKE GỊ", "Lelee n'app nke gị ma ọ bụ ezi koodu", "Screenshot abụghị ihe akaebe"] },
            { title: "\"Eziri m ya na mperi\"", bullets: ["Ezighachila ihe ọ bụla n'onwe gị", "Lelee ego dị n'akaụntụ gị", "Ezi nlọghachi na-esi n'aka onye na-enye gị ọrụ"] },
            { title: "Ekesala mgbe ọ bụla", bullets: ["PIN gị ma ọ bụ okwuntughe gị", "Koodu otu oge", "Ezi onye na-enye ọrụ anaghị arịọ ha"] }
          ],
          tryIt: "Dee iwu ịkwụ ụgwọ gị n'akwụkwọ ma maado ya n'akụkụ ebe ị na-akwakọ ọda. Wee mee omume: meghee app mobile money ma ọ bụ app ụlọ akụ nke gị ma chọta ebe ị na-ahụ azụmahịa gị ikpeazụ.",
          youCanNow: "ịlele na ego abatala n'ezie n'akaụntụ nke gị tupu i ziga ngwaahịa, ma jụ aghụghọ ụgwọ adịgboroja na nlọghachi ego.",
          quickCheck: [
            { objective: "O5", q: "Onye ahịa zitere screenshot nke ụgwọ. Gịnị ka ị ga-eme?", options: ["Ziga ngwaahịa ahụ ozugbo", "Rịọ maka screenshot buru ibu karịa", "Lelee app nke gị ma ọ bụ ezi koodu maka ego ahụ", "Ziga ha PIN gị ka ha lelee"], answer: 2, why: "Naanị akaụntụ nke gị na-egosi ma ego ahụ abatala n'ezie; a pụrụ ịmepụta screenshot adịgboroja." },
            { objective: "O5", q: "Mmadụ kwuru na o zitere gị ego na mperi ma rịọ ka i zighachi ya. Gịnị kacha enweghị nsogbu?", options: ["Zighachi ya ozugbo", "Lelee ego dị n'akaụntụ gị ma hapụ onye na-enye gị ọrụ ka ọ hazie nlọghachi ọ bụla", "Nye ha PIN gị ka ha were ya", "Ziga okpukpu abụọ ka i gosi obiọma"], answer: 1, why: "Nke a bụ aghụghọ a na-ahụkarị; onye na-enye ọrụ na-alọghachi ezi ego e zitere na mperi." }
          ],
          sources: [CBK_FRAUD, CBN_CP]
        },
        {
          title: "Iziga ngwaahịa, ịnara ihe a lọghachiri na idebe ntụkwasị obi ndị ahịa",
          objectives: ["O6"],
          minutes: 5,
          goal: "Dee iwu iziga ngwaahịa na ịnara ihe a lọghachiri, ma debe ozi ndị ahịa na nzuzo.",
          text: [
            "Ndị ahịa na-alọghachi mgbe iziga ngwaahịa na-aga nke ọma mgbe niile. Dee ebe ị na-eziga, ego ọ na-efu iru ebe ọ bụla, oge ole ọ na-ewe na otu ị na-esi eziga: n'aka, onye na-agba ọgba tum tum (boda boda ma ọ bụ okada), ọrụ ngwugwu ụgbọ ala ma ọ bụ courier. Kwakọọ ngwaahịa nke ọma ma ziga onye ahịa ozi mgbe ngwugwu ahụ hapụrụ, nwere aha onye na-agba ọgba tum tum ma ọ bụ nọmba ngwugwu ahụ.",
            "Iwu ịnara ihe a lọghachiri na-ekwu ihe na-eme ma ọ bụrụ na ihe adịghị mma: dịka ọmụmaatụ, \"Size ezighi ezi? Gwa anyị n'ime ụbọchị 2 anyị ga-agbanwere gị ya ma ọ bụrụ na e jibeghị ya.\" Mee ka ọ dị mkpụmkpụ ma ziri ezi, ma gbasoo ya mgbe niile. Na Morocco, onye na-ere ahịa na Casablanca nwere ike ikwu: mgbanwe n'ime ụbọchị 3, onye ahịa na-akwụ ego iziga ya azụ ma e wezụga na ihe ahụ mebiri emebi.",
            "Nọmba ekwentị ndị ahịa, adreesị ha na ọda ha bụ nzuzo. Ekesala ha, etinyela ha n'ịntanetị, ma ọ bụ tinye ndị mmadụ n'otu (group) ma ọ bụ broadcast list n'ajụghị ha. Ọtụtụ mba nwere iwu nchekwa data, dịka ọmụmaatụ Data Protection Act nke Kenya na Nigeria Data Protection Act 2023. Mgbe ị maghị nke metụtara gị, lelee ọfịs nchekwa data nke mba gị.",
            "Mgbe i zigachara, jụọ ma ihe niile dị mma, ma rịọ ha ka ha dee echiche ha (review) ma ọ bụ ziga foto ị nwere ike ikesa, site n'ikike ha."
          ],
          steps: ["Dee ebe ị na-eziga, ego, oge na otu ị na-esi eziga.", "Kwakọọ nke ọma ma ziga ozi mgbe ngwugwu ahụ hapụrụ.", "Dee iwu ịnara ihe a lọghachiri dị mkpụmkpụ ma ziri ezi, ma gbasoo ya.", "Debe nọmba na adreesị ndị ahịa na nzuzo; jụọ tupu i tinye onye ọ bụla na ndepụta.", "Rịọ maka echiche ha mgbe i zigachara."],
          words: [["Iwu ịnara ihe a lọghachiri (returns policy)", "iwu gị maka ihe na-eme mgbe onye ahịa chọrọ ịlọghachi ma ọ bụ ịgbanwe ngwaahịa."], ["Broadcast list", "ndepụta na WhatsApp maka iziga otu ozi nye ọtụtụ ndị; naanị ndị chekwara nọmba gị na-anata ya."], ["Data onwe onye (personal data)", "ozi gbasara mmadụ, dị ka aha ya, nọmba ekwentị ya ma ọ bụ adreesị ya."]],
          slides: [
            { title: "Iziga ngwaahịa a pụrụ ịtụkwasị obi", bullets: ["Ebe, ego, oge na otu ị na-esi eziga", "Kwakọọ nke ọma", "Ziga onye ahịa ozi mgbe ọ hapụrụ"] },
            { title: "Iwu ịlọghachi ihe dị mkpụmkpụ, ziri ezi", bullets: ["Ihe a pụrụ ịlọghachi na mgbe", "Onye na-akwụ ego iziga ya azụ", "Gbasoo ya mgbe niile"] },
            { title: "Data ndị ahịa bụ nzuzo", bullets: ["Ekesala ma ọ bụ tinye nọmba na adreesị n'ịntanetị", "Jụọ tupu i tinye onye ọ bụla na ndepụta", "Lelee ọfịs nchekwa data nke mba gị"] }
          ],
          tryIt: "Ọrụ ikpeazụ: chịkọta atụmatụ ụlọ ahịa n'ịntanetị gị nke otu peeji: ebe ị na-ere ahịa na ihe mere, ederede profaịlụ gị, nkọwa ngwaahịa atọ, nkwenye ọda gị echekwara, iwu ịkwụ ụgwọ gị, na iwu iziga ngwaahịa na ịnara ihe a lọghachiri.",
          youCanNow: "iziga ngwaahịa n'ụzọ a pụrụ ịtụkwasị obi, ịnara ihe a lọghachiri n'ụzọ ziri ezi, na idebe ozi ndị ahịa gị na nzuzo.",
          quickCheck: [
            { objective: "O6", q: "Gịnị kwesịrị ịdị n'iwu iziga ngwaahịa?", options: ["PIN gị", "Adreesị ndị ahịa gị", "Ebe ị na-eziga, ego, oge na otu ị na-esi eziga", "Naanị okwu \"ngwa ngwa\""], answer: 2, why: "Ebe, ego, oge na ụzọ na-agwa ndị ahịa kpọmkwem ihe ha ga-atụ anya ya." },
            { objective: "O6", q: "Ị chọrọ iziga ndị ahịa ndepụta ọnụahịa kwa izu. Gịnị ziri ezi?", options: ["Tinye nọmba ha niile n'otu ọha", "Ree nọmba ha nye onye ahịa ọzọ", "Tinye ndị ọbịa site na ndepụta i zụtara", "Buru ụzọ jụọ ndị ahịa ma debe nọmba ha na nzuzo"], answer: 3, why: "Nọmba ndị ahịa bụ data onwe onye; jụọ tupu i ziga ha ozi n'ọtụtụ." }
          ],
          sources: [ODPC, NDPC]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Ire ahịa, inweta ụgwọ na iziga ngwaahịa",
        questions: [
          { objective: "O4", q: "Onye ahịa jụrụ ajụjụ ị na-enweghị ike ịza ugbu a. Gịnị ka ị ga-aza?", options: ["Ọ dịghị ihe", "Kwuo mgbe ị ga-achọpụta ma laghachikwute ya", "Gwa ya ka ọ gaa ebe ọzọ", "Ziga ozi olu ogologo gbasara ihe ọzọ"], answer: 1, why: "Oge doro anya ị ga-aza na-edebe onye ahịa ma na-ewulite ntụkwasị obi." },
          { objective: "O4", q: "Gịnị ka onye ahịa na-eme mgbe nkwenye ọda gị gasịrị?", options: ["Na-eziga gị PIN ya", "Ọ dịghị ihe", "Na-aza \"Ee\" iji kwenye", "Na-akwụ okpukpu abụọ"], answer: 2, why: "\"Ee\" e dere ede na-egosi na unu abụọ kwekọrịtara n'otu ọda ahụ." },
          { objective: "O5", q: "Mgbe ole ka ngwaahịa nwere ike ịpụ n'ụlọ ahịa gị maka ọda mobile money?", options: ["Mgbe ị hụrụ ego ahụ n'akaụntụ nke gị", "Mgbe onye ahịa zitere screenshot", "Mgbe mmadụ kpọrọ oku kwuo na e zigala ya", "Mgbe onye ahịa kwere nkwa"], answer: 0, why: "Naanị ego dị n'akaụntụ nke gị bụ ihe akaebe nke ịkwụ ụgwọ." },
          { objective: "O5", q: "Onye kpọrọ oku kwuru na o si n'ụlọ ọrụ mobile money gị ma chọọ PIN gị. Gịnị bụ eziokwu?", options: ["Ezi ndị ọrụ nwere ike ịrịọ ya", "Nye ọkara ya", "Ziga ya n'ozi ederede kama", "Ezi onye na-enye ọrụ anaghị arịọ PIN gị; kwụsị oku ahụ"], answer: 3, why: "Ezi ndị na-enye ọrụ anaghị arịọ PIN gị; onye ọ bụla rịọrọ ya bụ onye aghụghọ." },
          { objective: "O6", q: "Onye ahịa natara size ezighi ezi. Gịnị kacha enyere aka?", options: ["Leghara ozi ahụ anya", "Iwu ịnara ihe a lọghachiri doro anya nke ị na-agbaso mgbe niile", "Ta onye na-agba ọgba tum tum ụta", "Tinye ozi onye ahịa n'ịntanetị"], answer: 1, why: "Iwu ziri ezi, nke a na-agbaso mgbe niile, na-edozi nsogbu ma na-edebe ndị ahịa." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Ire Ahịa n'Ịntanetị n'Africa (WhatsApp Business, Ahịa n'Ịntanetị na Soshal Midia)",
    questions: [
      { objective: "O1", q: "Ebee ka obere onye na-ere ahịa kwesịrị ibido ire ahịa n'ịntanetị?", options: ["Ebe niile n'otu oge", "Ebe ndị ahịa nọworị, na ebe onye na-ere ahịa ga-enwe ike ijikwa", "Naanị ebe mgbasa ozi kacha dị oke ọnụ", "Ebe onye ọ bụla anaghị ere ihe ọ bụla"], answer: 1, why: "Ọwa na-arụ ọrụ naanị ma ọ bụrụ na ndị ahịa nọ ebe ahụ ma ị na-aza ha." },
      { objective: "O1", q: "Kedu nke bụ ahịa n'ịntanetị (marketplace)?", options: ["Jiji", "Ozi nnabata", "PIN gị", "Broadcast list"], answer: 0, why: "Jiji, Jumia, Kilimall na Konga bụ ahịa n'ịntanetị ebe ndị na-azụ ihe na-achọ n'etiti ọtụtụ ndị na-ere ahịa." },
      { objective: "O1", q: "Soshal midia dị ka Instagram na TikTok na-enyere gị aka karịsịa:", options: ["Izo ngwaahịa gị", "Ịlele ịkwụ ụgwọ", "Ka ndị ahịa ọhụrụ chọta gị site na foto na vidiyo", "Izere ịza ozi"], answer: 2, why: "Soshal midia dị mma ka ndị na-amabeghị gị chọta gị." },
      { objective: "O2", q: "WhatsApp Business bụ:", options: ["Ụlọ akụ", "Ahịa n'ịntanetị na-ewe commission", "Mgbasa ozi a na-akwụ ụgwọ ya", "App dị iche maka obere azụmahịa nwere profaịlụ na ndepụta ngwaahịa"], answer: 3, why: "Ọ na-etinye profaịlụ azụmahịa, ngwaahịa nwere ọnụahịa na ozi na-aga n'onwe ha." },
      { objective: "O2", q: "Kedu ihe kwesịrị ịdị na profaịlụ azụmahịa gị?", options: ["Oge mmeghe gị na ebe ị na-eje ozi", "Okwuntughe gị", "Adreesị ndị ahịa gị", "Koodu otu oge gị"], answer: 0, why: "Oge mmeghe na ebe na-agwa ndị ahịa mgbe na ebe ị na-ejere ha ozi." },
      { objective: "O2", q: "Ngwaahịa ọ bụla na ndepụta gị kwesịrị inwe:", options: ["Naanị foto", "Foto, aha, ọnụahịa na obere nkọwa", "PIN ụlọ akụ gị", "Enweghị ọnụahịa, ka ndị ahịa jụọ"], answer: 1, why: "Foto, aha, ọnụahịa na nkọwa na-ekwe ka ndị ahịa họrọ n'echeghị." },
      { objective: "O3", q: "Ihe kacha mma n'azụ foto ngwaahịa bụ:", options: ["Okporo ụzọ jupụtara na mmadụ", "Tebụl na-adịghị ọcha", "Akwa ma ọ bụ mgbidi na-enweghị ihe ọ bụla dị ya", "Akụkụ gbara ọchịchịrị"], answer: 2, why: "Azụ na-enweghị ihe na-eme ka anya nọrọ na ngwaahịa ahụ." },
      { objective: "O3", q: "Gịnị mere ị ga-eji gosi aka ma ọ bụ mkpụrụ ego n'akụkụ ngwaahịa?", options: ["Iji gosi otu o si buo", "Izo ngwaahịa ahụ", "Ime ka faịlụ buo ibu", "Ndị ahịa na-amasị aka"], answer: 0, why: "Ihe a maara nke ọma na foto na-egosi otu ngwaahịa ahụ si buo." },
      { objective: "O3", q: "Ọ dị mma iji foto ka mma nke otu ngwaahịa ahụ si n'ịntanetị?", options: ["Ee, mgbe niile", "Ee, ma ọ bụrụ na o nwere ìhè karịa", "Naanị maka ihe dị oke ọnụ", "Mba; gosi ezi ngwaahịa gị ka ndị ahịa nweta ihe ha hụrụ"], answer: 3, why: "Foto eziokwu na-egbochi mkpesa na ịlọghachi ihe." },
      { objective: "O4", q: "Nkwenye ọda na-edepụta:", options: ["Naanị ọnụahịa", "Ihe ahụ, ọnụọgụ, ọnụahịa, iziga ya na ịkwụ ụgwọ", "PIN gị na okwuntughe gị", "Aha ndị ahịa ndị ọzọ"], answer: 1, why: "Nkọwa niile n'otu ozi na-egbochi nghọtahie." },
      { objective: "O4", q: "Onye ahịa na-agba mgba ọnụahịa nke ukwuu ma na-akparị gị. Gịnị ka ị ga-eme?", options: ["Kparịkwa ya", "Tinye ozi ya n'ihu ọha", "Nọgide na-akwanyere ugwu ma nye ọnụahịa gị kacha mma", "Gbochie ndị ahịa niile"], answer: 2, why: "Ịnọgide na-akwanyere ugwu na-echebe aha gị, ọbụlagodi ma ahịa a emeghị." },
      { objective: "O4", q: "Azịza echekwara (quick reply) kacha mma maka:", options: ["Ndepụta ọnụahịa gị na ebe ị na-eziga ngwaahịa", "PIN gị", "Adreesị onye ahịa", "Asịrị"], answer: 0, why: "Ozi ị na-ezigakarị nwere ike ichekwa ma ziga ya site n'imetụ ihuenyo ugboro ole na ole." },
      { objective: "O5", q: "Ozi ederede site na nọmba ekwentị nkịtị kwuru \"I natala GHS 500\". Ị ga-:", options: ["Ziga ngwaahịa ahụ", "Kelee ha ma ziga ngwaahịa ahụ", "Ziga ya ndị enyi gị", "Buru ụzọ lelee ego dị na mobile money nke gị"], answer: 3, why: "Ozi adịgboroja na-esi na nọmba nkịtị; naanị akaụntụ nke gị bụ ihe akaebe." },
      { objective: "O5", q: "Onye kwesịrị ịma PIN mobile money gị?", options: ["Naanị gị", "Onye ahịa", "Onye na-eziga ngwaahịa", "Onye ọ bụla si n'ụlọ ọrụ ahụ kpọrọ oku"], answer: 0, why: "PIN bụ nzuzo; ezi onye na-enye ọrụ anaghị arịọ ya." },
      { objective: "O5", q: "Ozi \"ego e zitere na mperi\" na-arịọ ka i zighachi ego. Nzọụkwụ kacha enweghị nsogbu bụ:", options: ["Zighachi ya ngwa ngwa", "Zighachi okpukpu abụọ", "Lelee ego dị n'akaụntụ gị ma hapụ onye na-enye ọrụ ka ọ hazie nlọghachi ọ bụla", "Kesaa PIN gị na ha"], answer: 2, why: "Ezi nlọghachi na-esi n'aka onye na-enye ọrụ, ọ bụghị gị iziga onye ọbịa ego." },
      { objective: "O5", q: "Maka ego aka mgbe a na-eziga ngwaahịa, onye na-eziga ya kwesịrị:", options: ["Ibu ụzọ nyefee ngwugwu ahụ", "Ịgụ ego ahụ tupu o nyefee ngwugwu ahụ", "Ịnabata nkwa ịkwụ ụgwọ ma emechaa", "Ise foto PIN onye ahịa"], answer: 1, why: "Ibu ụzọ gụọ ego pụtara na ngwaahịa na-apụ naanị mgbe ego dị n'aka." },
      { objective: "O6", q: "Ezigbo ozi iziga ngwaahịa nye onye ahịa na-ekwu:", options: ["Ọ dịghị ihe ruo mgbe ọ rutere", "Ngwugwu ahụ ahapụla, nwere aha onye na-agba ọgba tum tum ma ọ bụ nọmba ngwugwu", "Adreesị ndị ahịa ndị ọzọ", "PIN gị"], answer: 1, why: "Ịgwa ndị ahịa na ọ hapụla, na otu o si aga, na-ewulite ntụkwasị obi." },
      { objective: "O6", q: "Nọmba ekwentị na adreesị ndị ahịa bụ:", options: ["Ihe a na-ekesa n'efu", "Ihe a ga-ere", "Data onwe onye ị na-edebe na nzuzo", "Maka itinye n'ihu ọha"], answer: 2, why: "Ha bụ data onwe onye; ọtụtụ mba na-eji iwu echebe ha." },
      { objective: "O6", q: "Iwu ịnara ihe a lọghachiri kwesịrị ịdị:", options: ["Ogologo ma bụrụ nzuzo", "Dị iche maka onye ahịa ọ bụla", "Ọ dịghị mgbe e dere ya ede", "Mkpụmkpụ, ziri ezi ma a na-agbaso ya mgbe niile"], answer: 3, why: "Iwu doro anya, ziri ezi, nke ị na-agbaso mgbe niile na-edebe ntụkwasị obi ndị ahịa." },
      { objective: "O6", q: "Ebee ka ị na-elele iwu nchekwa data na mba gị?", options: ["Ọfịs nchekwa data nke mba gị", "Asịrị na soshal midia", "Echiche onye ahịa", "Mgbasa ozi ahịa n'ịntanetị"], answer: 0, why: "Ọfịs mba ahụ, dị ka ODPC nke Kenya ma ọ bụ NDPC nke Naịjirịa, na-ebipụta iwu ndị ahụ." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [0, 3, 5, 7, 9, 12, 14, 17] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      { name: "Ebe a ga-ere ahịa", objective: "O1", notYet: "Ọ dịghị ọwa a họrọ, ma ọ bụ ọtụtụ ọwa n'enweghị ihe mere.", meets: "E họrọ otu ọwa ma ọ bụ abụọ, nwere ndị na-azụ ihe n'ebe ahụ, ego ọ na-efu na oge ọ na-ewe maka nke ọ bụla.", exceeds: "Na-ekwukwa ihe ga-eme ka i tinye ma ọ bụ wepụ ọwa mgbe ọnwa atọ gachara." },
      { name: "Profaịlụ na ndepụta ngwaahịa", objective: "O2", notYet: "Profaịlụ enweghị aha, oge mmeghe ma ọ bụ ebe, ma ọ bụ ngwaahịa erughị atọ.", meets: "Profaịlụ nwere aha, nkọwa, ebe, oge mmeghe na ịkwụ ụgwọ, tinyere opekata mpe ngwaahịa atọ nwere ọnụahịa.", exceeds: "Enyi ma ọ bụ onye ahịa legharịrị ya anya, e dozikwara otu ihe na-edoghị anya." },
      { name: "Nkọwa ngwaahịa", objective: "O3", notYet: "Foto na-adịghị nke ọma ma ọ bụ nke e weere n'aka ndị ọzọ, ma ọ bụ enweghị ọnụahịa ma ọ bụ iziga ya.", meets: "Nkọwa ngwaahịa atọ nwere ezi foto doro anya, aha, ọnụahịa n'ego obodo, nkọwa na iziga ya.", exceeds: "Nkọwa ọ bụla nwere foto nso na foto na-egosi otu o si buo, na ndetu eziokwu dị ka agba nwere ike ịdị iche." },
      { name: "Nkwenye ọda", objective: "O4", notYet: "Ọ dịghị nkwenye echekwara, ma ọ bụ nkọwa ụfọdụ adịghị.", meets: "Ozi echekwara nwere ihe ahụ, ọnụọgụ, ọnụahịa, ebe a ga-eziga ya, ego na ụbọchị, ịkwụ ụgwọ, na arịrịọ ka a zaa Ee.", exceeds: "Azịza echekwara maka ọnụahịa, iziga ngwaahịa na ịkwụ ụgwọ kwa." },
      { name: "Iwu ịkwụ ụgwọ", objective: "O5", notYet: "Ngwaahịa nwere ike ịpụ site na screenshot ma ọ bụ nkwa, ma ọ bụ a na-ekesa PIN.", meets: "Iwu e dere ede: ngwaahịa na-apụ naanị mgbe ego pụtara n'akaụntụ nke gị; ekesala PIN ma ọ bụ koodu mgbe ọ bụla.", exceeds: "Na-ekwukwa maka arịrịọ ego e zitere na mperi na ịgụ ego aka mgbe a na-eziga ngwaahịa." },
      { name: "Iziga ngwaahịa, ịlọghachi ihe na data", objective: "O6", notYet: "Ọ dịghị nkọwa iziga ngwaahịa ma ọ bụ iwu ịlọghachi ihe, ma ọ bụ a na-ekesa data ndị ahịa.", meets: "Ebe a na-eziga, ego, oge na ụzọ, iwu ịlọghachi ihe dị mkpụmkpụ, na nkwa idebe data ndị ahịa na nzuzo.", exceeds: "A na-ajụ ndị ahịa tupu e tinye ha na ndepụta ọ bụla, a na-arịọkwa maka echiche ha mgbe e zigachara." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ndị na-amụ ihe kwuru na ha nwetara ọda mbụ ha ma ọ bụ karịa n'ịntanetị n'ime ụbọchị 30 (nnyocha nsochi)",
      "Ndị na-amụ ihe kwuru na ha atụfughị ihe ọ bụla n'ihi ozi ụgwọ adịgboroja n'ime ụbọchị 30 mgbe ihe ọmụmụ ahụ gachara",
      "Ndị na-amụ ihe kwuru na ahịa ha kwa ọnwa rịgoro mgbe ọnwa atọ gachara (nsochi mmemme)"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Ekwentị Android nwere WhatsApp Business e wụnyere site n'ezi ụlọ ahịa app",
      "Ngwaahịa atọ (ma ọ bụ foto ha) a ga-etinye na ndepụta",
      "Akwụkwọ na mkpịsị ode maka tebụl ọwa, iwu na iwu ịkwụ ụgwọ",
      "Ihe dị ka nkeji 60 n'ozuzu, n'oge nkenke"
    ],
    facilitatorNotes: [
      "N'otu: meenụ ule mbido ọnụ, wee mee otu isi n'otu nnọkọ, ka ndị na-amụ ihe na-ahazi profaịlụ ha n'oge ahụ ma na-enyere ibe ha aka.",
      "Mee nkuzi foto n'èzí n'ìhè ehihie; ka ndị na-amụ ihe gbanwere ekwentị ma lelee nkọwa ngwaahịa ibe ha.",
      "Mee ihe ngosi (role-play) nke ozi ụgwọ adịgboroja na oku \"ego e zitere na mperi\". Ejila mgbe ọ bụla rịọ ndị na-amụ ihe ka ha gosi ezi PIN, ego fọdụrụ ma ọ bụ akụkọ akaụntụ ha.",
      "Chetara ndị na-amụ ihe na menu app, ụgwọ ahịa n'ịntanetị na iwu data na-agbanwe, na ha kwesịrị ilele n'app ahụ, peeji ndị na-ere ahịa nke ahịa ahụ ma ọ bụ ọfịs gọọmentị nke mba ha.",
      "Jiri rubric tụọ akara ọrụ ikpeazụ, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};
