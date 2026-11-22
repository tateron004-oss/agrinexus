"use strict";

// Koach Learn course (Igbo translation of agriculture-africa/agri-community-mobilization.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

const FAO_MECH = { name: "FAO: Igwe ọrụ ugbo na-adigide: ihe FAO na-eme (ọrụ mgbazinye igwe, enyemaka maka obere ndị ọrụ ugbo)", url: "https://www.fao.org/sustainable-agricultural-mechanization/overview/what-fao-does/en/" };
const KEPHIS_SEED = { name: "KEPHIS (Kenya): Ọrụ nkwado mkpụrụ akụkụ na nchebe ụdị osisi", url: "https://www.kephis.go.ke/seed-certification-services" };
const NASC_FAKE = { name: "Voice of Nigeria: National Agricultural Seeds Council (NASC) na-adọ ndị ọrụ ugbo aka na ntị maka mkpụrụ adịgboroja (zụta n'aka ndị ahịa e debanyere aha; akara nkwado)", url: "https://von.gov.ng/nasc-cautions-farmers-over-fake-seeds/" };
const GH_ACT803 = { name: "UNEP LEAP: Iwu Osisi na Fatịlaịza nke Ghana, 2010 (Act 803): ndebanye aha mkpụrụ na fatịlaịza (PPRSD)", url: "https://leap.unep.org/en/countries/gh/national-legislation/plants-and-fertilizer-act-2010-no-803" };
const FAO_PEST_REG = { name: "FAO Pesticide Registration Toolkit: ndepụta ọgwụ ahụhụ e debanyere aha na mba Africa", url: "https://www.fao.org/pesticide-registration-toolkit/information-sources/registrations-elsewhere/africa/en" };
const ICA = { name: "International Cooperative Alliance: njirimara, ụkpụrụ na iwu ndị otu mmekọ (cooperative)", url: "https://ica.coop/en/cooperatives/cooperative-identity" };

module.exports = {
  id: "agri-community-mobilization-ig",
  lang: "ig",
  translationOf: "agri-community-mobilization",
  category: "Agriculture (Africa)",
  name: "Ịchịkọta Obodo: Ịkekọrịta Igwe Ọrụ Ugbo na Ịkpa Ụka maka Ihe Ọrụ Ugbo",
  skills: "Ịchọpụta mkpa obodo, Ịkpọ na iduzi nzukọ mbụ, Ikwekọrịta ebumnuche na iwu, Ịchịkọta ego maka igwe na mgbazinye traktọ, Ịzụkọ ezi ihe ọrụ ugbo n'ọtụtụ na ịkpa ụka, Idebe ntụkwasị obi site n'ndekọ ghere oghe",
  outcome: "ịchịkọta ndị ọrụ ugbo n'obodo gị gburugburu otu mkpa ha nwekọrọ, ikwekọrịta ebumnuche na iwu ziri ezi, na ide atụmatụ ịzụkọ mkpụrụ na fatịlaịza n'ọtụtụ ma ọ bụ ikekọrịta traktọ ma ọ bụ igwe, ya na ndekọ ghere oghe na-eme ka onye ọ bụla tụkwasị obi.",
  about: [
    "Otu onye ọrụ ugbo naanị ya na-akwụ ọnụ ahịa kachasị elu maka akpa fatịlaịza, ma na-echere traktọ ọtụtụ izu. Ndị ọrụ ugbo iri abụọ jikọrọ aka nwere ike ịkpa ụka maka ọnụ ahịa ka mma, lelee na ihe ọrụ ugbo bụ ezi ihe, ma debe ma ọ bụ kekọrịta igwe n'oge kwesịrị ekwesị. Ihe ọmụmụ a bụ maka ndị isi ọrụ ugbo, ndị isi otu ndị ọrụ ugbo, ndị ọrụ ndụmọdụ ugbo (extension workers), otu ndị ntorobịa na ndị inyom, na onye ọ bụla dị njikere ịchịkọta ndị agbata obi ya na Kenya, Nigeria, Ghana, Burkina Faso na Africa niile.",
    "Ị ga-achọpụta ihe obodo gị chọrọ, kpọọ ma duzie nzukọ mbụ, kwekọrịta otu ebumnuche na iwu dị mfe, hazie ego a chịkọtara maka igwe ma ọ bụ traktọ a gbazinyere, zụkọọ ihe ọrụ ugbo n'ọtụtụ ma kpaa ụka na ndị na-ere ha, zere mkpụrụ na fatịlaịza adịgboroja, dozie esemokwu, debe ndekọ ghere oghe ma hụ na ndị inyom na ndị ntorobịa nwere ezi olu.",
    "Ọ na-ewuli elu n'ihe ọmụmụ \"Otu Mmekọ Ndị Ọrụ Ugbo na Iru Ahịa\", nke na-akọwa ndebanye aha n'iwu, iwu otu (by-laws) na ire ihe dị ka otu, ya mere ọ dịghị ekwughachi ha. Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise ma na-ejedebe n'ọrụ \"Nwalee ya ugbu a\" n'obodo gị. Ọnụ ego niile bụ naanị ọmụmaatụ."
  ],
  finalTask: "Dee atụmatụ maka obodo gị: ma ọ bụ atụmatụ ịzụkọ ihe ọrụ ugbo n'ọtụtụ (ndị otu, ọnụ ọgụgụ, ego mbụ a kwụrụ (deposit), ọnụ ahịa e dere ede site n'aka ndị na-ere atọ, otu ị ga-esi lelee na ihe ọrụ ugbo ahụ bụ ezi ihe, nnyefe na ikesa), ma ọ bụ nkwekọrịta ikekọrịta igwe (igwe ahụ ma ọ bụ ọrụ mgbazinye ahụ, usoro oge ndebe, ego a na-akwụ, ego nlekọta, onye na-anya ya, na ihe ga-eme ma ọ mebie), ya na ndekọ ị ga-egosi ndị otu na otu ndị inyom na ndị ntorobịa si sonye.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị isi ọrụ ugbo, ndị isi otu ndị ọrụ ugbo na ndị isi obodo, ndị ọrụ ndụmọdụ ugbo, na ndị otu ndị inyom na ndị ntorobịa na Kenya, Nigeria, Ghana, West Africa na-asụ French na Africa niile. Ọtụtụ n'ime ha na-akọ obere ala ọka, akpụ, osikapa, ọka okpoko (sorghum), agwa, ahụekere ma ọ bụ akwụkwọ nri.",
    startingPoint: "Ha maara ndị agbata obi ha na nsogbu ha nwekọrọ, dị ka ịkọ ala n'oge na-adịghị, fatịlaịza dị oke ọnụ na mkpụrụ adịgboroja. Ụfọdụ nọ n'otu na-abụghị nke iwu ma ọ bụ otu nchekwa ego. Ọ bụ mmadụ ole na ole duziri nzukọ atụmatụ, chịkọta ego maka ịzụkọ ihe ọnụ, ma ọ bụ kpaa ụka na onye na-ere ihe.",
    gap: "Ndị ọrụ ugbo na-atụfu owuwe ihe ubi na ego mgbe a kọrọ ala n'oge na-adịghị, mgbe ihe ọrụ ugbo dị oke ọnụ ma ọ bụ bụrụ adịgboroja, na mgbe otu na-agbasa n'ihi ego. Ndị isi kwesịrị ịchọpụta mkpa, hazie nzukọ ziri ezi, kwekọrịta iwu, duzie ịzụkọ ihe ọnụ ma ọ bụ atụmatụ ikekọrịta igwe, ma debe ndekọ ghere oghe ka ntụkwasị obi dịgide, ya na ndị inyom na ndị ntorobịa a na-ahapụkarị.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ; ọtụtụ ndị na-amụ ihe na-asụ bekee dị ka asụsụ nke abụọ, a pụkwara ime nzukọ n'asụsụ obodo",
    "Ngwaọrụ: ekwentị nkịtị maka oku, SMS na ego ekwentị (mobile money); akwụkwọ ndekọ",
      "Ego: obere ego a chịkọtara site n'aka ọtụtụ ndị otu; a gaghị ezo ọnwụ ego ọ bụla",
      "Iwu: iwu na ndepụta mkpụrụ, fatịlaịza na ọgwụ ahụhụ dị iche iche site na mba gaa na mba ma na-agbanwe; ndị na-amụ ihe na-elele òtù mba ha",
      "Oge: nzukọ ga-adaba n'etiti ọrụ ugbo, ahịa na ọrụ ụlọ, karịsịa maka ndị inyom"
    ],
    prerequisites: "Ọ dịghị. Ọ ga-enyere aka: \"Otu Mmekọ Ndị Ọrụ Ugbo na Iru Ahịa\", maka ndebanye aha n'iwu e mesịa."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "N'obodo gị ma ọ bụ n'otu ndị ọrụ ugbo gị", action: "ịchọpụta mkpa ọrụ ugbo obodo nwekọrọ ma hazie atọ kachasị", standard: "mgbe ị jụchara opekata mpe ezinụlọ iri, gụnyere ndị inyom na ndị ntorobịa na-akọ ugbo" },
    { id: "O2", condition: "Mgbe e nyere gị mkpa kachasị ha nwekọrọ", action: "ịkpọ na iduzi nzukọ mbụ nke kwekọrịtara otu ebumnuche na iwu e dere ede", standard: "ya na usoro nzukọ (agenda), ndekọ nzukọ (minutes), aha onye isi maka ọrụ ọ bụla na iwu gbasara ego, mkpebi na ịpụ n'otu" },
    { id: "O3", condition: "Mgbe a chọrọ igwe maka ịkọ ala, ịzọcha ọka ma ọ bụ igwe ọzọ", action: "ide atụmatụ ikekọrịta igwe ma ọ bụ ịgbazinye traktọ", standard: "nke na-ekwu maka ịgbazinye ma ọ bụ ịzụta, usoro ndebe ziri ezi, ego a na-akwụ, ego nlekọta, onye na-anya ya na ihe ga-eme ma ọ mebie" },
    { id: "O4", condition: "Mgbe e nyere gị ihe ndị otu chọrọ ịzụ n'mkpụrụ na fatịlaịza", action: "ịhazi ịzụkọ ihe n'ọtụtụ, tụnyere opekata mpe ọnụ ahịa atọ site n'aka ndị na-ere ma kpaa ụka", standard: "ya na ego mbụ e dekọrọ, ihe ọrụ ugbo e lelere na ha bụ ezi ihe e debanyere aha, na nnata ego (receipt) n'aha otu ahụ" },
    { id: "O5", condition: "Mgbe otu ahụ na-ahụ maka ego na mkpebi", action: "idebe ndekọ ghere oghe, dozie esemokwu site n'usoro e kwekọrịtara ma nye ndị inyom na ndị ntorobịa ezi ọrụ", standard: "nke mere na onye otu ọ bụla nwere ike ịhụ ebe ego ọ bụla gara, ndị inyom na ndị ntorobịa na-ejikwa ọrụ ma ọ bụ ọkwa ndu" }
  ],
  chapters: [
    {
      name: "Isi 1: Ịchịkọta obodo ọnụ",
      lessons: [
        {
          title: "Ịchọpụta mkpa obodo gị",
          objectives: ["O1"],
          minutes: 5,
          goal: "Jụọ opekata mpe ezinụlọ iri maka nsogbu ọrụ ugbo ha ma hazie mkpa atọ kachasị ha nwekọrọ.",
          text: [
            "Ndị mmadụ na-abanye n'otu mgbe ọ na-edozi nsogbu ha na-enwe. Ya mere, tupu ị kpọọ nzukọ, chọpụta ihe ndị agbata obi gị chọrọ n'ezie. Echekwala na ị maara: onye isi nwere ike iche na ọ bụ traktọ, ma ọtụtụ ndị ọrụ ugbo na-ekwu na ọ bụ mkpụrụ adịgboroja ma ọ bụ ọnụ ahịa fatịlaịza.",
            "Gaa leta ma ọ bụ kpọọ opekata mpe ezinụlọ iri. Jụọ otu ajụjụ ole na ole ahụ: Kedu ihe ọkụkụ ma ọ bụ anụ ụlọ gị ndị bụ isi? Gịnị kpatara owuwe ihe ubi gị gara aga ji daa? Ego ole ka ị na-akwụ maka ịkọ ala, mkpụrụ na fatịlaịza, oleekwa mgbe ị na-enweta ha? Gịnị ka ị ga-eme ọnụ na ndị agbata obi? Jụọkwa ndị inyom na ndị ntorobịa na-akọ ugbo, ọ bụghị naanị onye isi ezinụlọ; nsogbu ha nwere ike ịdị iche, dị ka enweghị akwụkwọ ala iji nweta mbinye ego ma ọ bụ ịbụ ndị ikpeazụ traktọ na-abịakwute.",
            "Dee azịza ha n'otu mpempe akwụkwọ: otu ahịrị maka ezinụlọ ọ bụla, otu kọlụm maka nsogbu ọ bụla. Gụọ ọnụ ọgụgụ ezinụlọ kpọrọ aha nsogbu ọ bụla. Atọ kachasị bụ mkpa obodo gị nwekọrọ. Ị nwekwara ike ise obere maapụ obodo na-egosi ugbo, ụzọ, ụlọ ahịa ihe ọrụ ugbo na ebe traktọ ma ọ bụ igwe nri dị. Ekwentị nwere ike inyere gị aka ịgụ na ịhazi azịza ndị ahụ."
          ],
          steps: ["Dee ajụjụ anọ ma ọ bụ ise dị mfe.", "Jụọ opekata mpe ezinụlọ iri, gụnyere ndị inyom na ndị ntorobịa na-akọ ugbo.", "Dee azịza ha na tebụl: otu ahịrị maka ezinụlọ ọ bụla.", "Gụọ ọnụ ọgụgụ ndị kpọrọ aha nsogbu ọ bụla.", "Hazie mkpa atọ kachasị ha nwekọrọ."],
          words: [["Ịchịkọta obodo (mobilization)", "ịkpọkọta ndị mmadụ ka ha mee ihe maka mkpa ha nwekọrọ."], ["Maapụ mkpa (needs map)", "ndekọ dị mfe nke nsogbu ezinụlọ nwekọrọ na ebe ihe enyemaka dị."], ["Ezinụlọ", "ndị bi ma na-akọ ugbo ọnụ, na-ekekọrịtakwa nri na ego."]],
          slides: [
            { title: "Malite site na mkpa", bullets: ["Ndị mmadụ na-abanye iji dozie nsogbu ha na-enwe", "Echela na ị maara: buru ụzọ jụọ", "Echiche onye isi nwere ike ọ gaghị abụ mkpa kachasị"] },
            { title: "Jụọ ezinụlọ iri ma ọ bụ karịa", bullets: ["Gịnị kpatara owuwe ihe ubi gị gara aga ji daa?", "Ego ole ka ị na-akwụ maka ịkọ ala, mkpụrụ, fatịlaịza?", "Jụọkwa ndị inyom na ndị ntorobịa na-akọ ugbo"] },
            { title: "Gụọ ma hazie", bullets: ["Otu ahịrị maka ezinụlọ ọ bụla", "Gụọ nsogbu ọ bụla", "Atọ kachasị = mkpa unu nwekọrọ"] }
          ],
          tryIt: "Jụọ opekata mpe ezinụlọ iri n'obodo gị ajụjụ gị. Tinye azịza ha na tebụl, gụọ nsogbu ọ bụla ma dee mkpa atọ kachasị unu nwekọrọ.",
          youCanNow: "ịchọpụta mkpa ọrụ ugbo obodo gị ma hazie nsogbu atọ kachasị unu nwekọrọ.",
          quickCheck: [
            { objective: "O1", q: "Gịnị mere ị ga-eji jụọ ezinụlọ tupu ị kpọọ nzukọ?", options: ["Ịchịkọta ego n'oge", "Ịhọrọ onye isi", "Ire ha ihe ọrụ ugbo", "Ịchọpụta nsogbu ndị mmadụ nwekọrọ n'ezie"], answer: 3, why: "Otu na-adịgide mgbe ọ na-edozi mkpa ọtụtụ ndị otu na-enwe, ọ bụghị naanị echiche onye isi." },
            { objective: "O1", q: "Ònye ka ị ga-agụnye mgbe ị na-ajụ maka mkpa?", options: ["Ndị inyom na ndị ntorobịa na-akọ ugbo, tinyere ndị isi ezinụlọ", "Naanị ụmụ nwoke kacha okenye", "Naanị ndị nwere traktọ", "Naanị ndị maara ịgụ akwụkwọ"], answer: 0, why: "Ndị inyom na ndị ntorobịa nwere ike inwe nsogbu dị iche, ya mere ịhapụ ha na-egosi foto ezighi ezi." }
          ]
        },
        {
          title: "Ịkpọ na iduzi nzukọ mbụ",
          objectives: ["O2"],
          minutes: 5,
          goal: "Duzie nzukọ mbụ nwere usoro nzukọ (agenda) nke na-ejedebe n'ọrụ doro anya na ndekọ nzukọ.",
          text: [
            "Họrọ oge na ebe dabara ọtụtụ ndị mmadụ: mgbe ọrụ ugbo gwụchara, ọ bụghị n'ụbọchị ahịa, n'ebe ndị inyom na ndị ntorobịa nwere ike iru ngwa ngwa, dị ka ụlọ akwụkwọ, ụka, ụlọ alakụba ma ọ bụ n'okpuru osisi a ma ama. Kpọọ ndị mmadụ n'onwe gị, site n'oku, SMS ma ọ bụ ọnụ, na site n'aka ndị a na-asọpụrụ dị ka eze obodo, onye ndu okpukpe ma ọ bụ onye ọrụ ndụmọdụ ugbo. Gwa ha ebumnuche ya n'otu ahịrịokwu: 'Ka anyị kwuo maka otu anyị ga-esi nweta fatịlaịza n'ọnụ ala n'oge ugbo a.'",
            "Debe usoro nzukọ nwere ihe anọ ma ọ bụ ise ma mee ka nzukọ dị mkpụmkpụ: ekele na ebumnuche; ihe maapụ mkpa chọpụtara; echiche maka ihe unu ga-eme ọnụ; ikwekọrịta nzọụkwụ mbụ; onye ga-eme gịnị na mgbe ọ ga-emecha ya. Họrọ onye ga-achị nzukọ na onye ga-ede ndekọ nzukọ. Kwe ka onye ọ bụla kwuo okwu, jụọkwa ndị na-adịghị ekwu okwu ozugbo.",
            "Kwụsị site na mkpebi, ọ bụghị naanị okwu. Dee ọrụ ọ bụla, onye na-ahụ maka ya na ụbọchị ya. Gụpụta ndekọ nzukọ n'olu dị elu ma kwekọrịta nzukọ ọzọ. Ọmụmaatụ: otu ndị na-akọ ọka okpoko (sorghum) na Burkina Faso kwekọrịtara na nzukọ mbụ ha ịchịkọta ihe ndị mmadụ chọrọ n'fatịlaịza n'ime izu abụọ, ndị otu abụọ, otu n'ime ha bụ nwa agbọghọ, ga-anakọta ndepụta ahụ."
          ],
          steps: ["Họrọ oge na ebe dabara ọtụtụ ndị mmadụ, gụnyere ndị inyom na ndị ntorobịa.", "Kpọọ ha n'onwe gị na site n'aka ndị a na-asọpụrụ, ya na ebumnuche n'otu ahịrịokwu.", "Kwadebe usoro nzukọ dị mkpụmkpụ: ebumnuche, mkpa a chọpụtara, echiche, nzọụkwụ mbụ, ọrụ.", "Họrọ onye ga-achị nzukọ na onye ga-ede ndekọ; kwe ka onye ọ bụla kwuo okwu.", "Kwụsị site n'ọrụ, aha na ụbọchị; gụpụta ndekọ nzukọ n'olu dị elu."],
          words: [["Usoro nzukọ (agenda)", "ndepụta ihe nzukọ ga-atụle, n'usoro."], ["Ndekọ nzukọ (minutes)", "ihe e dere ede banyere ihe nzukọ kpebiri na onye ga-eme gịnị."], ["Onye isi nzukọ (chair)", "onye na-edu nzukọ ma na-eme ka ọ gaa n'oge."]],
          slides: [
            { title: "Oge, ebe, akwụkwọ ọkpụkpọ", bullets: ["Mgbe ọrụ ugbo gwụchara, ọ bụghị ụbọchị ahịa", "Ebe ndị inyom na ndị ntorobịa nwere ike iru", "Kpọọ ha n'onwe gị; ebumnuche n'otu ahịrịokwu"] },
            { title: "Usoro nzukọ dị mkpụmkpụ", bullets: ["Ebumnuche; ihe maapụ mkpa chọpụtara", "Echiche; kwekọrịta nzọụkwụ mbụ", "Onye ga-eme gịnị, mgbe ọ ga-emecha ya"] },
            { title: "Kwụsị site na mkpebi", bullets: ["Ọrụ, aha, ụbọchị n'ime ndekọ nzukọ", "Gụpụta ndekọ nzukọ n'olu dị elu", "Kwado nzukọ ọzọ"] }
          ],
          tryIt: "Dee akwụkwọ ọkpụkpọ (otu ahịrịokwu ebumnuche, oge na ebe) na usoro nzukọ nwere ihe ise maka nzukọ mbụ gị. Ọ bụrụ na ị nwere ike, mee ya, ma dee ndekọ nzukọ nwere opekata mpe ọrụ abụọ, aha na ụbọchị.",
          youCanNow: "ịkpọ na iduzi nzukọ mbụ dị mkpụmkpụ nke na-ejedebe n'ọrụ, aha, ụbọchị na ndekọ nzukọ.",
          quickCheck: [
            { objective: "O2", q: "Kedu oge nzukọ na-akachakarị mma maka ndị ọrụ ugbo?", options: ["Ụbọchị ahịa n'ehihie", "Mgbe ọrụ ugbo gwụchara, n'ebe ọtụtụ ndị mmadụ nwere ike iru", "N'isi ụtụtụ, n'ebe dị anya n'obodo", "Mgbe ọ bụla onye isi tọgbọrọ chakoo"], answer: 1, why: "Oge na ebe dabara adaba na-eme ka ọtụtụ ndị otu, gụnyere ndị inyom na ndị ntorobịa, bịa." },
            { objective: "O2", q: "Kedu otu nzukọ mbụ kwesịrị isi kwụsị?", options: ["Site n'okwu ogologo", "Site n'onye ọ bụla ịkwụ ego ozugbo", "Site n'ọrụ, aha na ụbọchị e dere na ndekọ nzukọ", "N'enweghị mkpebi ọ bụla"], answer: 2, why: "Ọrụ doro anya nwere aha na ụbọchị na-eme ka okwu ghọọ omume." }
          ]
        },
        {
          title: "Ebumnuche nwekọrọ, iwu ziri ezi na ịgụnye onye ọ bụla",
          objectives: ["O2", "O5"],
          minutes: 6,
          goal: "Dee ebumnuche unu nwekọrọ na iwu ise dị mfe otu gị kwekọrịtara.",
          text: [
            "Ebumnuche nwekọrọ doro anya ma nwee ụbọchị: 'Tupu 1 March, zụkọọ akpa fatịlaịza 200 ọnụ n'ọnụ ahịa dị ala karịa ihe ndị otu na-akwụ naanị ha.' ma ọ bụ 'N'oge ugbo a, a ga-akọ ala onye otu ọ bụla n'ime izu abụọ mgbe mmiri ozuzo mbụ zochara.' Ebumnuche doro anya na-egosi ndị otu ihe ịga nke ọma pụtara.",
            "Kwekọrịta iwu dị mfe tupu ego ọ bụla agagharị: onye nwere ike ịbanye na ihe ọ ga-akwụ; otu a ga-esi eme mkpebi (dịka ọmụmaatụ otu onye otu, otu votu, dị ka ndị otu mmekọ na-eme); onye na-ejide ego na otu o si ejide ya (akaụntụ ụlọ akụ ma ọ bụ mobile money nke otu ahụ, ya na mmadụ abụọ na-akwado ịkwụ ụgwọ); ihe ga-eme ma onye akwụghị ụgwọ ma ọ bụ ewetaghị ihe; na otu onye otu nwere ike isi pụọ ma nweta ego ya azụ. Dee iwu ndị ahụ ma gụpụta ha n'olu dị elu ka ndị otu na-amaghị ịgụ akwụkwọ kwekọrịtakwa.",
            "Mee ohere maka ndị inyom na ndị ntorobịa n'ụma. Mee nzukọ n'oge ha nwere ike ịbịa, kwe ka ndị otu banye n'aha nke ha ọbụlagodi n'enweghị akwụkwọ ala, ma nye ha ezi ọkwa dị ka onye na-echekwa ego (treasurer), onye na-ahụ maka ndebe traktọ ma ọ bụ onye na-elele ihe ọrụ ugbo. Otu na-agụnye ha na-enwekarị ndị otu ka ukwuu, ntụkwasị obi ka ukwuu na nka ka ukwuu, dị ka ndị otu na-eto eto maara iji ekwentị na mobile money nke ọma. Mgbe otu gị dị njikere idebanye aha n'iwu, lee \"Otu Mmekọ Ndị Ọrụ Ugbo na Iru Ahịa\"."
          ],
          steps: ["Dee otu ebumnuche nwere ọnụ ọgụgụ na ụbọchị.", "Kwekọrịta iwu maka ịbanye, mkpebi, ego, ịghara ịkwụ ụgwọ ma ọ bụ iweta ihe, na ịpụ.", "Gụpụta iwu ndị ahụ n'olu dị elu ma dee nkwekọrịta n'ime ndekọ nzukọ.", "Nye ndị inyom na ndị ntorobịa ezi ọkwa na oge nzukọ dabara ha."],
          words: [["Ebumnuche nwekọrọ", "otu ihe doro anya otu ahụ niile chọrọ, nwere ọnụ ọgụgụ na ụbọchị."], ["Onye mbinye aka (signatory)", "onye e kwere ka ọ kwado ịkwụ ụgwọ site n'akaụntụ otu ahụ."], ["Ịgụnye onye ọ bụla (inclusion)", "ịhụ na onye ọ bụla, gụnyere ndị inyom na ndị na-eto eto, nwere ike ịbanye, kwuo okwu ma duo."]],
          slides: [
            { title: "Ebumnuche nwere ọnụ ọgụgụ na ụbọchị", bullets: ["'Tupu 1 March, zụkọọ akpa 200 ọnụ'", "'A kọọ ala ugbo ọ bụla n'ime izu abụọ mgbe mmiri zochara'", "Ọ na-egosi ihe ịga nke ọma pụtara"] },
            { title: "Iwu tupu ego agagharị", bullets: ["Ịbanye na ego; otu onye otu, otu votu", "Akaụntụ otu ahụ, mmadụ abụọ na-akwado ịkwụ ụgwọ", "Ịghara ịkwụ ma ọ bụ iweta; ịpụ na inweta ego azụ"] },
            { title: "Gụnye ndị inyom na ndị ntorobịa", bullets: ["Oge na ebe ha nwere ike ịbịa", "Ịbanye n'aha nke ha, n'enweghị akwụkwọ ala", "Ezi ọkwa: onye na-echekwa ego, onye ndebe, onye na-elele ihe"] }
          ],
          sources: [ICA],
          tryIt: "Dee ebumnuche otu gị nwekọrọ nwere ọnụ ọgụgụ na ụbọchị, na iwu ise gbasara ịbanye, mkpebi, ego, ịghara ịkwụ ụgwọ ma ọ bụ iweta ihe, na ịpụ. Kpọọ aha otu ọkwa nwanyị ma ọ bụ onye otu na-eto eto ga-ejide.",
          youCanNow: "ide ebumnuche nwekọrọ doro anya na iwu ziri ezi, ma nye ndị inyom na ndị ntorobịa ezi ọrụ n'otu ahụ.",
          quickCheck: [
            { objective: "O2", q: "Kedu ebumnuche nwekọrọ kacha doo anya?", options: ["Tupu 1 March, zụkọọ akpa fatịlaịza 200 ọnụ n'ọnụ ahịa dị ala karịa", "Nyere ndị ọrụ ugbo aka", "Mee ka ihe ka mma", "Nweta fatịlaịza ụfọdụ mgbe ọ bụla"], answer: 0, why: "Ebumnuche nwere ọnụ ọgụgụ na ụbọchị na-egosi kpọmkwem ihe ịga nke ọma pụtara." },
            { objective: "O5", q: "Nwa agbọghọ enweghị akwụkwọ ala mana ọ na-akọ ala nke ya. Gịnị ka iwu otu ahụ kwesịrị ikwe?", options: ["Ọ pụghị ịbanye", "Ọ ga-abanye naanị site n'aka di ya", "Ọ nwere ike ịbịa mana ọ gaghị atụ votu", "Ọ ga-abanye n'aha nke ya ma nwee ike ijide ọkwa"], answer: 3, why: "Ikwe ka ndị inyom na ndị ntorobịa banye ma duo n'aha nke ha na-ewu otu ka ukwuu ma sie ike karịa." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ịchịkọta obodo ọnụ",
        questions: [
          { objective: "O1", q: "Ị jụrụ ezinụlọ iri na abụọ. Asatọ kpọrọ aha mkpụrụ adịgboroja, atọ kpọkwara aha traktọ. Gịnị bụ mkpa kachasị ha nwekọrọ?", options: ["Traktọ", "Ụzọ ọhụrụ", "Mkpụrụ adịgboroja", "Ụlọ akwụkwọ"], answer: 2, why: "Nsogbu ọtụtụ ezinụlọ kpọrọ aha ya bụ mkpa kachasị ha nwekọrọ." },
          { objective: "O1", q: "Gịnị bụ maapụ mkpa?", options: ["Ndekọ dị mfe nke nsogbu ezinụlọ nwekọrọ na ebe ihe enyemaka dị", "Maapụ ụzọ e si aga obodo mepere emepe", "Ndepụta ọnụ ahịa ihe ọkụkụ", "Akwụkwọ akaụntụ ụlọ akụ"], answer: 0, why: "Maapụ mkpa na-egosi nsogbu a nwekọrọ na ihe enyemaka dị n'obodo dị ka ụlọ ahịa ihe ọrụ ugbo na igwe." },
          { objective: "O2", q: "Ònye na-ede ihe nzukọ kpebiri?", options: ["Eze obodo", "Onye na-ere ihe", "Ọ dịghị onye", "Onye na-ede ndekọ nzukọ"], answer: 3, why: "Onye na-ede ndekọ nzukọ na-edekọ mkpebi, ọrụ, aha na ụbọchị." },
          { objective: "O2", q: "Olee mgbe otu kwesịrị ikwekọrịta iwu gbasara ego?", options: ["Mgbe nsogbu mechara mee", "Tupu a chịkọta ego ọ bụla", "Naanị mgbe otu ahụ debanyere aha", "Ọ dịghị mgbe; ntụkwasị obi zuru ezu"], answer: 1, why: "Ibu ụzọ kwekọrịta iwu na-egbochi esemokwu mgbe a chịkọtara ego." },
          { objective: "O5", q: "Gịnị na-enyere ndị inyom aka ịbịa nzukọ otu?", options: ["Nzukọ n'oge na ebe dabara ha", "Nzukọ naanị n'ụbọchị ahịa", "Nzukọ n'abalị n'ebe dị anya", "Nzukọ naanị maka ndị isi ezinụlọ"], answer: 0, why: "Oge na ebe dabara adaba na-ewepụ ihe mgbochi a na-ahụkarị maka ndị inyom." }
        ]
      }
    },
    {
      name: "Isi 2: Ịchịkọta ego, ịzụkọ ihe ọnụ na idebe ntụkwasị obi",
      lessons: [
        {
          title: "Ịchịkọta ego maka igwe na mgbazinye traktọ",
          objectives: ["O3"],
          minutes: 6,
          goal: "Dee atụmatụ ikekọrịta igwe ma ọ bụ ịgbazinye ọrụ traktọ dị ka otu.",
          text: [
            "Buru ụzọ kpebie: ịgbazinye ka ọ bụ ịzụta? Ịzụta traktọ na-efu nnukwu ego ma chọọ mmanụ ụgbọ, ndozi, onye na-anya ya nke a zụrụ azụ na ọrụ zuru ezu ga-eme ka ọ na-arụ ọrụ. Maka ọtụtụ obere otu, ịgbazinye ọrụ traktọ dị ka otu bụ nzọụkwụ mbụ: onye na-agbazinye igwe na-enyekarị oge ma ọ bụ ọnụ ahịa ka mma maka ọtụtụ ugbo dị nso n'ibe ha. FAO na-akwado ọrụ mgbazinye dị ka ụzọ obere ndị ọrụ ugbo ga-esi nweta igwe. App na ndị nnọchi ndebe, dị ka Hello Tractor n'akụkụ ụfọdụ nke Nigeria na Kenya, na-ejikọ ndị ọrụ ugbo na ndị nwe traktọ; chọpụta ihe na-arụ ọrụ n'ebe unu nọ. Obere igwe a na-ekekọrịta, dị ka igwe ịzọcha ọka, igwe ịkpụpụ ọka ma ọ bụ igwe nri, otu nwere ike ịzụta ya.",
            "Hazie usoro oge n'ụzọ ziri ezi. Ịkọ ala ma ọ bụ ịkụ ihe n'oge na-adịghị na-ebelata owuwe ihe ubi, onye ọ bụla na-achọkwa igwe ahụ n'otu ụbọchị ahụ. Kwekọrịta usoro ahụ tupu oge eruo: site n'ebe ugbo dị na ụzọ iji chekwaa mmanụ na njem, site n'ịtụ nza (lottery), ma ọ bụ site n'oge ịkụ ihe, ma gbanwee onye na-ebu ụzọ n'oge ugbo ọ bụla. Dee usoro oge ahụ ma kesaa ya. Kwekọrịta ihe ga-eme ma mmiri ozuzo ma ọ bụ mmebi igwe kwụsị ọrụ.",
            "Kwekọrịta ego a na-akwụ na mmefu: ihe ndị otu na-akwụ kwa acre ma ọ bụ kwa awa (ọnụ ego bụ naanị ọmụmaatụ: XOF, KES, NGN ma ọ bụ GHS kwa acre), ịkwụ ụgwọ tupu ma ọ bụ n'ụbọchị ọrụ, na ego nlekọta dị iche maka igwe otu ahụ nwe ka ndozi ghara ịkwụsị oge ugbo. Kpọọ aha onye na-anya igwe a zụrụ azụ, debe akwụkwọ ndekọ (logbook) nke awa, mmanụ, ugbo a rụrụ na ndozi, ma chekwaa igwe ahụ n'ebe dị mma."
          ],
          steps: ["Kpebie ịgbazinye ma ọ bụ ịzụta, dabere na mmefu, nka na ọrụ ole dị.", "Depụta ugbo ndị otu, nha ha na ụbọchị ha chọrọ igwe ahụ.", "Kwekọrịta usoro oge ziri ezi (site n'ụzọ, ịtụ nza ma ọ bụ oge ịkụ ihe) ma gbanwee onye na-ebu ụzọ.", "Tọọ ego a na-akwụ, oge ịkwụ ụgwọ na ego nlekọta.", "Kpọọ aha onye na-anya ya ma debe logbook; kwekọrịta ihe ga-eme ma ọ mebie."],
          words: [["Ọrụ mgbazinye (hire service)", "onye na-eweta traktọ ma ọ bụ igwe ma rụọ ọrụ ahụ maka ego."], ["Ego nlekọta (maintenance fund)", "ego e wepụtara site n'ego a na-akwụ maka ịkwụ ụgwọ ndozi na nlekọta."], ["Akwụkwọ ndekọ igwe (logbook)", "ndekọ awa igwe rụrụ, mmanụ, ugbo a rụrụ na ndozi."]],
          slides: [
            { title: "Ịgbazinye ka ịzụta?", bullets: ["Ịzụta: nnukwu ego, mmanụ, ndozi, onye na-anya ya", "Ọtụtụ obere otu na-amalite site n'ịgbazinye ọnụ", "Obere igwe a na-ekekọrịta: igwe ịzọcha, ịkpụpụ ọka, igwe nri"] },
            { title: "Usoro oge ziri ezi", bullets: ["Depụta ugbo, nha ha na ụbọchị a chọrọ", "Usoro site n'ụzọ, ịtụ nza ma ọ bụ oge ịkụ ihe", "Gbanwee onye na-ebu ụzọ n'oge ugbo ọ bụla"] },
            { title: "Ego na nlekọta", bullets: ["Ego kwa acre ma ọ bụ kwa awa (ọnụ ego bụ naanị ọmụmaatụ)", "Ego nlekọta maka ndozi", "Onye na-anya ya a zụrụ azụ; logbook nke awa na mmanụ"] }
          ],
          sources: [FAO_MECH],
          tryIt: "Họrọ igwe ma ọ bụ ọrụ mgbazinye otu gị chọrọ. Depụta ugbo ndị otu ise, nha ha na ụbọchị, wee dee usoro ndebe, ego kwa acre, iwu ego nlekọta ma ọ bụrụ na unu nwe igwe ahụ, na ihe ga-eme ma ọ mebie.",
          youCanNow: "ide atụmatụ ziri ezi iji gbazinye ma ọ bụ kekọrịta traktọ ma ọ bụ igwe, ya na usoro oge, ego a na-akwụ na nlekọta.",
          quickCheck: [
            { objective: "O3", q: "Gịnị mere ọtụtụ obere otu ji agbazinye ọrụ traktọ kama ịzụta otu?", options: ["Ịgbazinye na-adị n'efu mgbe niile", "A pụghị ịzụta traktọ n'Africa", "Ịzụta chọrọ ọtụtụ ego, ndozi, onye na-anya ya na ọrụ zuru ezu", "Ọrụ mgbazinye anaghị abịa n'oge mgbe ọ bụla"], answer: 2, why: "Inwe traktọ na-eweta nnukwu mmefu na mkpa; mgbazinye dị ka otu nwere ike inye ohere n'enweghị ha." },
            { objective: "O3", q: "Gịnị ka ego nlekọta bụ maka ya?", options: ["Ịkwụ onye isi nzukọ ụgwọ ọnwa", "Ịkwụ ụgwọ ndozi ka igwe ahụ nọgide na-arụ ọrụ", "Ịzụta mkpụrụ", "Ịkwụ ụgwọ nzukọ"], answer: 1, why: "Iwepụta ego maka ndozi na-egbochi mmebi igwe ịkwụsị oge ugbo." }
          ]
        },
        {
          title: "Ịzụkọ ihe n'ọtụtụ, ịkpa ụka na izere ihe ọrụ ugbo adịgboroja",
          objectives: ["O4"],
          minutes: 6,
          goal: "Hazie ịzụkọ mkpụrụ ma ọ bụ fatịlaịza n'ọtụtụ, tụnyere ọnụ ahịa atọ ma lelee na ihe ọrụ ugbo ahụ bụ ezi ihe.",
          text: [
            "Buru ụzọ chịkọta ihe ndị otu chọrọ: aha onye otu ọ bụla, ihe ọrụ ugbo ahụ, ọnụ ọgụgụ ya na ego mbụ a kwụrụ (deposit), e dere ha niile n'akwụkwọ ndekọ ihe a chọrọ (order book) ma gụghachi ha. Gbakọọ ha niile. Ihe a chọrọ buru ibu ma doo anya na-enye gị ike ịkpa ụka. Rịọ opekata mpe ndị na-ere ihe atọ e debanyere aha (ndị na-ere ihe ọrụ ugbo, ndị na-ekesa ma ọ bụ ụlọ ọrụ) ka ha dee ọnụ ahịa ha (quote): ọnụ ahịa kwa akpa, iweta ya n'obodo unu, ụbọchị, aha ụdị ya na ụdị mkpụrụ, na mbelata ọnụ ahịa ọ bụla maka ibu niile.",
            "Kpaa ụka maka ihe karịrị ọnụ ahịa: iweta ya n'efu ma ọ bụ n'ọnụ ala, ụbọchị nnyefe tupu oge ịkụ ihe, ngosi ma ọ bụ ọzụzụ n'efu, ịkwụ ụfọdụ ego mgbe e wetara ya, na nnata ego (receipt) n'aha otu ahụ. Tụnyere ọnụ ahịa niile site na mmefu niile ruo mgbe e wetara ya, ọ bụghị naanị ọnụ ahịa akpa. Enyela otu onye ego niile n'aka mgbe ọ bụla; kwụọ ụgwọ site n'akaụntụ otu ahụ ma nara receipt.",
            "Mkpụrụ, fatịlaịza na ọgwụ ahụhụ adịgboroja bụ ezi ihe egwu. Zụta naanị n'aka ndị na-ere ihe e debanyere aha. Lelee mkpuchi (seal), akara aha (label), nọmba batch na ụbọchị, na na akpa adọwaghị ma ọ bụ a kwachighị ya ọzọ. Na Kenya, KEPHIS na-achịkwa mkpụrụ a kwadoro; na Nigeria, National Agricultural Seeds Council (NASC) na-agwa ndị ọrụ ugbo ka ha zụta n'aka ndị na-ere ihe ọrụ ugbo e debanyere aha ma chọọ akara nkwado ya; na Ghana, Plant Protection and Regulatory Services Directorate (PPRSD) na-achịkwa mkpụrụ na fatịlaịza n'okpuru Iwu Osisi na Fatịlaịza (Plants and Fertilizer Act). Ọgwụ ahụhụ ga-adịrịrị na ndepụta mba gị. Debe receipt na obere ihe nlele, ma kọọrọ òtù mba ahụ ihe adịgboroja."
          ],
          steps: ["Chịkọta ihe onye otu ọ bụla chọrọ na ego mbụ ya n'order book; gụghachi ya.", "Nweta ọnụ ahịa e dere ede site n'aka opekata mpe ndị na-ere ihe atọ e debanyere aha.", "Kpaa ụka maka ọnụ ahịa, nnyefe, ụbọchị, ọzụzụ na usoro ịkwụ ụgwọ.", "Tụnyere mmefu niile ruo nnyefe ma họrọ; kwụọ ụgwọ site n'akaụntụ otu ahụ ma nara receipt.", "Mgbe e wetara ya, lelee mkpuchi, akara aha, nọmba batch na akara nkwado; kesaa ya ya na receipt maka onye otu ọ bụla."],
          words: [["Ịzụkọ n'ọtụtụ (bulk buying)", "ịzụkọ ọtụtụ ihe ọnụ iji nweta ọnụ ahịa dị ala ma ọ bụ usoro ka mma."], ["Ọnụ ahịa e dere ede (quote)", "ọnụ ahịa na usoro onye na-ere ihe dere tupu ị zụta."], ["Onye na-ere ihe ọrụ ugbo (agro-dealer)", "ụlọ ahịa ma ọ bụ onye ahịa na-ere mkpụrụ, fatịlaịza na ihe ọrụ ugbo ndị ọzọ."], ["Mkpụrụ a kwadoro (certified seed)", "mkpụrụ òtù mkpụrụ mba lelere ma hụ na ọ bụ ezi ụdị na ezi ogo."]],
          slides: [
            { title: "Buru ụzọ chịkọta ihe a chọrọ", bullets: ["Aha, ihe ọrụ ugbo, ọnụ ọgụgụ, ego mbụ", "E dere ya n'order book ma gụghachi ya", "Ihe a chọrọ buru ibu ma doo anya na-enye ike ịkpa ụka"] },
            { title: "Ọnụ ahịa atọ, wee kpaa ụka", bullets: ["Opekata mpe ndị na-ere ihe atọ e debanyere aha, e dere ede", "Ọnụ ahịa, nnyefe, ụbọchị, ọzụzụ, usoro ịkwụ ụgwọ", "Tụnyere mmefu niile ruo nnyefe; receipt n'aha otu"] },
            { title: "Zere ihe ọrụ ugbo adịgboroja", bullets: ["Naanị ndị na-ere ihe e debanyere aha; lelee mkpuchi, akara aha, ụbọchị", "Kenya: KEPHIS; Nigeria: akara NASC; Ghana: PPRSD", "Ọgwụ ahụhụ dị na ndepụta mba; kọọ ihe adịgboroja"] }
          ],
          sources: [KEPHIS_SEED, NASC_FAKE, GH_ACT803, FAO_PEST_REG],
          tryIt: "Mee mpempe akwụkwọ ihe a chọrọ maka opekata mpe ndị otu ise (aha, ihe ọrụ ugbo, ọnụ ọgụgụ, ego mbụ). Dee ajụjụ ị ga-ajụ ndị na-ere ihe atọ e debanyere aha, na ndepụta ihe ị ga-elele n'ụbọchị nnyefe iji chọpụta mkpụrụ ma ọ bụ fatịlaịza adịgboroja.",
          youCanNow: "ịhazi ịzụkọ ihe ọrụ ugbo n'ọtụtụ, kpaa ụka na ndị na-ere ihe atọ ma lelee na mkpụrụ na fatịlaịza bụ ezi ihe.",
          quickCheck: [
            { objective: "O4", q: "Kedu otu ị ga-esi tụnyere ọnụ ahịa ndị na-ere ihe?", options: ["Naanị ọnụ ahịa akpa", "Onye na-ere ihe bụ enyi", "Onye nwere ụlọ ahịa kachasị ukwuu", "Mmefu niile ruo nnyefe, tinyere ụbọchị, ogo na usoro"], answer: 3, why: "Ọnụ ahịa akpa dị ala nwere ike izo ụgwọ njem dị elu ma ọ bụ nnyefe n'oge na-adịghị; tụnyere nkwekọrịta niile." },
            { objective: "O4", q: "Mgbe e wetara ya, ụfọdụ akpa mkpụrụ yiri ka a kwachiri ha ọzọ, ha enweghịkwa akara nkwado. Gịnị ka ị ga-eme?", options: ["Jụ ha, debe ihe akaebe ma kọọrọ òtù mkpụrụ ahụ", "Nara ha iji chekwaa oge", "Kesaa ha na nzuzo", "Gwakọta ha na ezi mkpụrụ"], answer: 0, why: "Akpa a kwachiri ọzọ, na-enweghị akara, bụ ihe ịrịba ama nke mkpụrụ adịgboroja; jụ ha, debe ihe akaebe ma kọọ ya." }
          ]
        },
        {
          title: "Idebe ntụkwasị obi: ndekọ ghere oghe na idozi esemokwu",
          objectives: ["O5"],
          minutes: 5,
          goal: "Debe ndekọ ghere oghe nke ego a chịkọtara ma dozie esemokwu site n'usoro e kwekọrịtara.",
          text: [
            "Otu anaghị adakarị n'ihi enweghị echiche; ha na-ada mgbe ndị otu kwụsịrị ịtụkwasị obi n'ebe ego gara. Mee ka shilling, naira, cedi ma ọ bụ franc ọ bụla dị mfe isochi: order book maka ego mbụ, receipt maka ịkwụ ụgwọ ọ bụla na ego ọ bụla batara, ịkwụ ụgwọ site n'akaụntụ otu ahụ nke mmadụ abụọ na-akwado, na logbook igwe ma ọ bụrụ na unu na-ekekọrịta otu.",
            "Mee ka ndekọ ghere oghe. Gụpụta nchịkọta ego n'olu dị elu na nzukọ ọ bụla: ego batara, ego pụrụ, ego fọdụrụ, na ihe e zụtara maka onye. Tinye ndepụta ihe a chọrọ na usoro oge n'ebe ndị otu ga-ahụ ha, ma ọ bụ zipu foto ya n'ìgwè mkparịta ụka otu ahụ. Kwe ka onye otu ọ bụla lee akwụkwọ ego. Gbanwee ndị na-ejide ego site n'oge ruo n'oge.",
            "Esemokwu ga-adị: onye nwetara traktọ n'oge na-adịghị, akpa furu efu, onye otu akwụghị ụgwọ. Jiri usoro dị n'iwu unu: nke mbụ, kparịta ụka ozugbo; mgbe ahụ kọmitii na-anụ akụkụ abụọ ma lelee ndekọ; mgbe ahụ otu ahụ niile na-ekpebi; ma ọ bụrụ na ọ dị mkpa, rịọ onye a na-asọpụrụ si n'èzí dị ka onye ọrụ ndụmọdụ ugbo, eze obodo ma ọ bụ onye ọrụ otu mmekọ. Kpebie site n'eziokwu dị na ndekọ, ọ bụghị site n'onye na-eti mkpu karịa. Hụ na ndị inyom na ndị ntorobịa nwekwara ike ikwu nsogbu ha, na a na-anụ mkpesa ha."
          ],
          steps: ["Debe order book, receipt, akaụntụ otu nwere ndị nkwado abụọ na logbook.", "Gụpụta nchịkọta ego n'olu dị elu na nzukọ ọ bụla.", "Tinye ndepụta na usoro oge n'ebe ndị otu ga-ahụ ha.", "Dozie esemokwu site n'usoro e kwekọrịtara, jiri ndekọ.", "Gbanwee ọkwa ego ma hụ na onye ọ bụla nwere ike ikwu nsogbu."],
          words: [["Ịghe oghe (transparency)", "idebe ego na mkpebi n'ihu ọha ka onye otu ọ bụla hụ ha."], ["Onye ogbugbo (mediator)", "onye a na-asọpụrụ, na-anaghị akwado akụkụ ọ bụla, na-enyere akụkụ abụọ aka idozi esemokwu."], ["Ego fọdụrụ (balance)", "ego fọdụrụ mgbe e wepụrụ ego pụrụ n'ego batara."]],
          slides: [
            { title: "Ntụkwasị obi na-eso ego", bullets: ["Order book na receipt maka ihe niile", "Akaụntụ otu; ndị nkwado abụọ", "Logbook igwe ma ọ bụrụ na unu na-ekekọrịta otu"] },
            { title: "Mee ka ndekọ ghere oghe", bullets: ["Gụpụta ego batara, pụrụ na nke fọdụrụ n'olu dị elu", "Tinye ndepụta na usoro oge; zipu foto", "Onye otu ọ bụla nwere ike ilele akwụkwọ ego"] },
            { title: "Dozie esemokwu", bullets: ["Kparịta ụka ozugbo; kọmitii na-anụ akụkụ abụọ", "Otu niile na-ekpebi; onye ogbugbo si n'èzí ma ọ dị mkpa", "Kpebie site na ndekọ; nụrụ ndị inyom na ndị ntorobịa"] }
          ],
          tryIt: "Ọrụ ikpeazụ: dee atụmatụ ịzụkọ ihe ọrụ ugbo n'ọtụtụ ma ọ bụ nkwekọrịta ikekọrịta igwe. Gụnye ndị otu, ndekọ unu ga-edebe ma gụpụta n'olu dị elu, usoro idozi esemokwu, na ọkwa ndị inyom na ndị ntorobịa ga-ejide.",
          youCanNow: "idebe ego a chịkọtara n'ụzọ ghere oghe nke a pụrụ isochi, dozie esemokwu n'ụzọ ziri ezi ma debe ntụkwasị obi onye ọ bụla.",
          quickCheck: [
            { objective: "O5", q: "Gịnị na-ewu ntụkwasị obi kachasị n'otu na-achịkọta ego?", options: ["Onye na-echekwa ego na-edebe akwụkwọ ego n'ụlọ ya", "Ịgụpụta ego batara, pụrụ na nke fọdụrụ n'olu dị elu na nzukọ ọ bụla", "Ịkwụ ndị na-ere ihe ego n'aka n'enweghị receipt", "Naanị onye isi maara ego fọdụrụ"], answer: 1, why: "Ndekọ ghere oghe na-eme ka onye otu ọ bụla hụ ebe ego gara." },
            { objective: "O5", q: "Otu onye otu nwanyị kwuru na ọ bụ ya bụ onye ikpeazụ nwetara traktọ ọzọ. Gịnị bụ nzọụkwụ mbụ?", options: ["Chụpụ ya n'otu ahụ", "Leghara ya anya", "Kparịta ụka ozugbo, wee lelee usoro oge na ndekọ", "Nyeghachi ya ego ya ma mechie otu ahụ"], answer: 2, why: "Ịgbaso usoro e kwekọrịtara na ilele ndekọ na-edozi ya n'ụzọ ziri ezi." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Ịchịkọta ego, ịzụkọ ihe ọnụ na idebe ntụkwasị obi",
        questions: [
          { objective: "O3", q: "Gịnị bụ ọrụ mgbazinye?", options: ["Akaụntụ nchekwa ego otu", "Onye na-eweta igwe ma rụọ ọrụ ahụ maka ego", "Ụlọ ọrụ mkpụrụ", "Mbinye ego n'ụlọ akụ"], answer: 1, why: "Ọrụ mgbazinye na-ekwe ka ndị ọrụ ugbo jiri traktọ ma ọ bụ igwe n'enweghị ya." },
          { objective: "O3", q: "Onye ọ bụla chọrọ traktọ n'otu ụbọchị atọ ahụ. Gịnị ziri ezi?", options: ["Ndị enyi onye isi ebute ụzọ", "Onye ọ bụla na-eti mkpu karịa", "Onye ọ bụla na-akwụ ego ọzọ na nzuzo", "Usoro e kwekọrịtara site n'ụzọ, ịtụ nza ma ọ bụ oge ịkụ ihe, na-agbanwe n'oge ugbo ọ bụla"], answer: 3, why: "Usoro e kwekọrịtara nke na-agbanwe ziri ezi ma na-echekwa mmanụ na njem." },
          { objective: "O4", q: "Gịnị mere a ga-eji chịkọta ihe a chọrọ na ego mbụ tupu e kwuo okwu na ndị na-ere ihe?", options: ["Imefu ego ahụ n'oge", "Izere ide ihe ọ bụla", "Ihe a chọrọ buru ibu ma doo anya na-enye ike ịkpa ụka", "Ndị na-ere ihe na-arịọ PIN ndị otu"], answer: 2, why: "Ndị na-ere ihe na-enye usoro ka mma mgbe ha maara na ihe a chọrọ bụ eziokwu ma buru ibu." },
          { objective: "O4", q: "Kedu nke bụ ihe ịrịba ama nke fatịlaịza ma ọ bụ mkpụrụ adịgboroja?", options: ["Akpa adọwara adọwa ma ọ bụ a kwachiri ọzọ, na-enweghị akara aha ma ọ bụ akara nkwado", "Akpa e mechiri emechi nwere nọmba batch", "Receipt site n'aka onye na-ere ihe e debanyere aha", "Akara nkwado"], answer: 0, why: "Mkpuchi gbajiri agbaji na enweghị akara aha ma ọ bụ akara nkwado bụ ihe ịdọ aka na ntị nke ihe ọrụ ugbo adịgboroja." },
          { objective: "O5", q: "Ònye kwesịrị ịkwado ịkwụ ụgwọ site n'akaụntụ otu ahụ?", options: ["Onye ọ bụla jụrụ", "Onye na-ere ihe", "Otu onye naanị ya", "Ndị mbinye aka abụọ e kwekọrịtara"], answer: 3, why: "Ndị nkwado abụọ na-eme ka o siere ike iji ego eme ihe ọjọọ." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Ịchịkọta Obodo: Ịkekọrịta Igwe Ọrụ Ugbo na Ịkpa Ụka maka Ihe Ọrụ Ugbo",
    questions: [
      { objective: "O1", q: "Gịnị bụ ịchịkọta obodo?", options: ["Ịkwaga n'obodo mepere emepe", "Ịkpọkọta ndị mmadụ ka ha mee ihe maka mkpa ha nwekọrọ", "Ịzụta ekwentị", "Ire ihe ọkụkụ naanị gị"], answer: 1, why: "Ịchịkọta obodo pụtara ịhazi ndị mmadụ gburugburu mkpa ha nwekọrọ." },
      { objective: "O1", q: "Ezinụlọ ole ka ị ga-ajụ opekata mpe mgbe ị na-achọpụta mkpa?", options: ["Otu", "Abụọ", "Naanị ndị isi", "Iri"], answer: 3, why: "Ịjụ opekata mpe ezinụlọ iri na-enye foto ziri ezi nke mkpa a nwekọrọ." },
      { objective: "O1", q: "Gịnị mere a ga-eji gụnye ndị ntorobịa na-akọ ugbo na maapụ mkpa?", options: ["Nsogbu ha nwere ike ịdị iche, dị ka enweghị akwụkwọ ala ma ọ bụ ịbụ ndị ikpeazụ a na-arụrụ ọrụ", "Ha nwere ego karịa", "Ha nwe traktọ niile", "Ọ dịghị mkpa"], answer: 0, why: "Ndị ntorobịa na ndị inyom nwere ike inwe ihe mgbochi dị iche nke otu ahụ kwesịrị idozikwa." },
      { objective: "O1", q: "Mgbe i gụchara azịza, gịnị ka ị ga-eme?", options: ["Tụfuo mpempe akwụkwọ ahụ", "Họrọ ihe onye isi kacha amasị", "Hazie mkpa atọ kachasị a nwekọrọ", "Malite ịchịkọta ego"], answer: 2, why: "Ịhazi ha na-egosi mkpa ọtụtụ ezinụlọ nwekọrọ." },
      { objective: "O2", q: "Gịnị ka akwụkwọ ọkpụkpọ nzukọ mbụ kwesịrị inwe?", options: ["Ndepụta ụgwọ ndị otu ji", "Ọ dịghị ihe, naanị oge", "Ịrịọ ego", "Ebumnuche n'otu ahịrịokwu, oge na ebe"], answer: 3, why: "Ebumnuche doro anya na-agwa ndị mmadụ ihe mere o ji kwesị ịbịa." },
      { objective: "O2", q: "Gịnị bụ usoro nzukọ (agenda)?", options: ["Ndepụta ihe nzukọ ga-atụle, n'usoro", "Ndebe traktọ", "Ọnụ ahịa onye na-ere ihe", "Akwụkwọ akaụntụ ụlọ akụ"], answer: 0, why: "Usoro nzukọ na-eme ka nzukọ dị mkpụmkpụ ma gaa n'ụzọ ya." },
      { objective: "O2", q: "Kedu ebumnuche kacha doo anya?", options: ["Mee nke ọma karịa n'afọ a", "Nyere onye ọ bụla aka", "A kọọ ala onye otu ọ bụla n'ime izu abụọ mgbe mmiri ozuzo mbụ zochara", "Nweta igwe otu ụbọchị"], answer: 2, why: "Ọ na-akpọ aha ihe a ga-enweta na oge, ka otu ahụ hụ ma ọ gara nke ọma." },
      { objective: "O2", q: "Kedu iwu a ga-ebu ụzọ kwekọrịta tupu a chịkọta ego?", options: ["Agba uwe otu ahụ", "Otu onye otu nwere ike isi pụọ ma nweta ego ya azụ", "Ebe onye isi bi", "Ọdụ redio a ga-ege"], answer: 1, why: "Iwu gbasara ịpụ na inweta ego azụ na-egbochi esemokwu mgbe a chịkọtara ego." },
      { objective: "O3", q: "Kedu nke na-abụkarị nzọụkwụ mbụ maka igwe n'obere otu?", options: ["Ịzụta nnukwu traktọ na mbinye ego", "Iwu ụlọ ọrụ mmepụta", "Onye otu ọ bụla ịzụta traktọ", "Ịgbazinye ọrụ traktọ ọnụ"], answer: 3, why: "Mgbazinye dị ka otu na-enye ohere n'enweghị nnukwu mmefu nke inwe igwe." },
      { objective: "O3", q: "Gịnị ka logbook igwe na-edekọ?", options: ["Ụbọchị ọmụmụ ndị otu", "Awa, mmanụ, ugbo a rụrụ na ndozi", "Ọnụ ahịa ihe ọkụkụ", "Ndị bịara nzukọ"], answer: 1, why: "Logbook na-egosi otu e si eji igwe ahụ na otu e si elekọta ya." },
      { objective: "O3", q: "Ịkọ ala n'oge na-adịghị na-ebutekarị:", options: ["Owuwe ihe ubi ka ukwuu", "Ọ dịghị mgbanwe", "Owuwe ihe ubi dị ala", "Fatịlaịza n'efu"], answer: 2, why: "Ịkọ ala na ịkụ ihe n'oge na-adịghị na-ebelata owuwe ihe ubi, ọ bụ ya mere usoro oge ziri ezi ji dị mkpa." },
      { objective: "O3", q: "Otu nwe igwe ịkpụpụ ọka. Ebee ka ego ndozi si abịa?", options: ["Ego nlekọta e wepụtara site n'ego a na-akwụ", "Akpa onye isi n'onwe ya", "Onye na-ere ihe", "Ọ dịghị ebe; kwụsị iji ya"], answer: 0, why: "Ego nlekọta site n'ego a na-akwụ na-eme ka igwe ahụ nọgide na-arụ ọrụ." },
      { objective: "O4", q: "Ọnụ ahịa ole e dere ede site n'aka ndị na-ere ihe ka ị ga-atụnyere opekata mpe?", options: ["Atọ", "Otu", "Ọ dịghị", "Iri abụọ"], answer: 0, why: "Ọnụ ahịa atọ na-egosi ọnụ ahịa ziri ezi ma nye gị ohere ịkpa ụka." },
      { objective: "O4", q: "E wezụga ọnụ ahịa, gịnị ọzọ ka ị nwere ike ịkpa ụka maka ya?", options: ["Aha ezinụlọ onye na-ere ihe", "PIN ndị otu", "Iweta ya n'obodo tupu oge ịkụ ihe", "Ọnụ ahịa dị elu karịa"], answer: 2, why: "Nnyefe, oge, ọzụzụ na usoro ịkwụ ụgwọ bara uru dị ka ọnụ ahịa akpa." },
      { objective: "O4", q: "Na Nigeria, kedu òtù na-adọ aka na ntị maka mkpụrụ adịgboroja ma na-eji akara nkwado?", options: ["KEPHIS", "National Agricultural Seeds Council (NASC)", "PPRSD", "KEBS"], answer: 1, why: "NASC na-agwa ndị ọrụ ugbo ka ha zụta n'aka ndị na-ere ihe ọrụ ugbo e debanyere aha ma chọọ akara nkwado ya." },
      { objective: "O4", q: "Kedu otu otu ahụ kwesịrị isi kwụọ onye na-ere ihe ụgwọ?", options: ["Ego e nyere otu onye otu n'aka", "N'akaụntụ onye a na-amaghị", "N'enweghị receipt ọ bụla", "Site n'akaụntụ otu ahụ, nara receipt n'aha otu ahụ"], answer: 3, why: "Ịkwụ ụgwọ otu nwere receipt na-eme ka a pụrụ isochi ego ahụ." },
      { objective: "O5", q: "Gịnị mere a ga-eji gụpụta nchịkọta ego n'olu dị elu na nzukọ?", options: ["Iji mejupụta oge", "Iji mee ndị otu ihere", "N'ihi na iwu chọrọ abụ", "Ka ndị otu na-amaghị ịgụ akwụkwọ hụkwa ebe ego gara"], answer: 3, why: "Ịgụpụta n'olu dị elu na-eme ka ndekọ ghere oghe nye onye otu ọ bụla." },
      { objective: "O5", q: "Ònye nwere ike inye aka ma ọ bụrụ na kọmitii enweghị ike idozi esemokwu?", options: ["Onye a na-asọpụrụ si n'èzí dị ka onye ọrụ ndụmọdụ ugbo ma ọ bụ onye ọrụ otu mmekọ", "Onye na-ere ihe", "Ọ dịghị onye", "Onye otu na-eti mkpu karịa"], answer: 0, why: "Onye ogbugbo na-anaghị akwado akụkụ ọ bụla nwere ike inyere akụkụ abụọ aka ikwekọrịta." },
      { objective: "O5", q: "Gịnị ka mkpebi n'esemokwu kwesịrị ịdabere na ya?", options: ["Onye kara nka", "Onye na-eti mkpu karịa", "Eziokwu dị na ndekọ", "Asịrị"], answer: 2, why: "Ndekọ na-egosi ihe mere n'ezie, ya mere mkpebi na-adị ziri ezi." },
      { objective: "O5", q: "Gịnị na-enyere ndị inyom na ndị ntorobịa aka isonye?", options: ["Ọkwa naanị maka ndị isi ezinụlọ", "Ezi ọkwa dị ka onye na-echekwa ego ma ọ bụ onye na-ahụ maka ndebe", "Nzukọ n'abalị n'ebe dị anya", "Ịbanye n'otu naanị site n'akwụkwọ ala"], answer: 1, why: "Inye ndị inyom na ndị ntorobịa ezi ọrụ na-ewu ntụkwasị obi na otu siri ike karịa." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ nke atụmatụ ahụ ma nwaa ọzọ.",
    criteria: [
      { name: "Maapụ mkpa", objective: "O1", notYet: "Mkpa ahụ bụ ihe onye isi chere, ma ọ bụ a jụrụ ezinụlọ na-erughị iri.", meets: "A jụrụ opekata mpe ezinụlọ iri, gụnyere ndị inyom na ndị ntorobịa, ma hazie mkpa atọ kachasị.", exceeds: "Ọ nwekwara obere maapụ obodo nke ugbo, ụzọ, ụlọ ahịa ihe ọrụ ugbo na igwe." },
      { name: "Ebumnuche na iwu", objective: "O2", notYet: "Enweghị ebumnuche doro anya, ma ọ bụ enweghị iwu e dere ede gbasara ego na ịpụ.", meets: "Ebumnuche nwere ọnụ ọgụgụ na ụbọchị, na iwu e dere ede gbasara ịbanye, mkpebi, ego, ịghara ịkwụ ụgwọ na ịpụ, e kwekọrịtara na ndekọ nzukọ.", exceeds: "A gụpụtara iwu ndị ahụ n'olu dị elu, e dekọkwara nkwekọrịta ndị otu site n'aha ha." },
      { name: "Atụmatụ igwe", objective: "O3", notYet: "Enweghị usoro oge ma ọ bụ ego a na-akwụ, ma ọ bụ enweghị atụmatụ ma igwe ahụ mebie.", meets: "E kpebiri ịgbazinye ma ọ bụ ịzụta, usoro oge ziri ezi, ego a na-akwụ, ego nlekọta ma ọ bụ usoro mgbazinye, onye na-anya ya na iwu mmebi.", exceeds: "Onye na-agbazinye igwe ma ọ bụ onye nwe igwe akwadoro atụmatụ ahụ, onye na-ebu ụzọ na-agbanwekwa n'oge ugbo ọ bụla." },
      { name: "Atụmatụ ịzụkọ n'ọtụtụ", objective: "O4", notYet: "Enweghị order book, ọnụ ahịa na-erughị atọ, ma ọ bụ enweghị nlele maka ihe ọrụ ugbo adịgboroja.", meets: "E dekọrọ ihe a chọrọ na ego mbụ, e tụnyere ọnụ ahịa atọ e dere ede site na mmefu ruo nnyefe, a kwụrụ ụgwọ site n'akaụntụ otu, ma e nwere nlele n'ụbọchị nnyefe maka ezi ihe ọrụ ugbo.", exceeds: "Ọ na-egosi ihe e nwetara n'ịkpa ụka (ọnụ ahịa, nnyefe, ọzụzụ) ma kpọọ aha òtù a ga-akọrọ ihe adịgboroja." },
      { name: "Ntụkwasị obi na ịgụnye onye ọ bụla", objective: "O5", notYet: "Ọ bụ naanị otu onye na-edebe ndekọ, ma ọ bụ ndị inyom na ndị ntorobịa enweghị ọrụ ọ bụla.", meets: "Ndekọ ghere oghe a na-agụpụta n'olu dị elu, usoro e kwekọrịtara maka esemokwu, na ọkwa a kpọrọ aha maka ndị inyom na ndị ntorobịa.", exceeds: "Ọkwa ego na-agbanwe, ndị inyom na ndị ntorobịa na-ejikwa opekata mpe otu ọkwa ndu." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Otu ndị mechara ịzụkọ ihe ọrụ ugbo n'ọtụtụ ma ọ bụ oge ugbo nke ikekọrịta igwe n'ime ọnwa 6 (nnyocha nsochi)",
      "Ndị otu kwuru na ha kwụrụ obere ego kwa akpa ma ọ bụ nweta ịkọ ala n'oge karịa mgbe ha nọ naanị ha",
      "Otu ndị na-enweghị esemokwu ego a na-edozighị mgbe otu oge ugbo gachara, ya na ndekọ a na-agụpụta n'olu dị elu na nzukọ",
      "Ọnụ ọgụgụ ọkwa otu ndị inyom na ndị otu na-eto eto na-ejide"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Ekwentị nkịtị maka oku, SMS na mobile money; smartphone na-enyere aka n'ise foto ndepụta",
      "Akwụkwọ ndetu maka maapụ mkpa, ndekọ nzukọ, order book na logbook",
      "Ụdị iwu na mpempe akwụkwọ ihe a chọrọ dị mfe (onye nkuzi nwere ike idetuo ha site na nkuzi ndị ahụ)",
      "Ihe nlele akpa mkpụrụ na fatịlaịza ma ọ bụ akara aha ha iji mụọ ịmata ihe adịgboroja",
      "Ihe dị ka nkeji 90 n'ozuzu, n'oge nkenke, tinyere oge ileta ezinụlọ na ndị na-ere ihe"
    ],
    facilitatorNotes: [
      "Duzie ihe ọmụmụ a ya na ezi obodo ma ọ bụ ezi otu: meenụ maapụ mkpa na nzukọ mbụ n'ezie, n'etiti nnọkọ.",
      "Mee nnọkọ n'oge ndị inyom na ndị ntorobịa nwere ike ịbịa, ma kpọọ ha ka ha chịa nzukọ ma ọ bụ dee ndekọ nzukọ.",
      "Weta ezi akpa ihe ọrụ ugbo ma ọ bụ akara aha ha ma jụọ òtù mkpụrụ ma ọ bụ nchebe osisi nke mba (KEPHIS, NASC, PPRSD ma ọ bụ òtù mba gị) otu esi elele ha; ekwula ego ma ọ bụ ọnụ ahịa site n'icheta.",
      "Mee egwuregwu omume (role-play) nke ịkpa ụka na onye na-ere ihe na esemokwu maka ndebe traktọ n'oge na-adịghị, jiri ndekọ nlele.",
      "Jiri rubric tụọ akara ọrụ ikpeazụ; mgbe otu ahụ dị njikere idebanye aha n'iwu, duga ha na \"Otu Mmekọ Ndị Ọrụ Ugbo na Iru Ahịa\"."
    ]
  }
};
