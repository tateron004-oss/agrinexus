"use strict";

// Koach Learn course (Igbo translation of agriculture-africa/agri-value-addition-marketing.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

const NAFDAC_FOOD = { name: "NAFDAC (Naịjirịa): Ndebanye aha nri, ngalaba Made in Nigeria Food Division (ndị na-emepụta obere na ndị na-emepụta nke ọkara/nke ukwuu)", url: "https://www.nafdac.gov.ng/food/food-registration/" };
const GH_FDA_REG = { name: "Ghana Food and Drugs Authority (ụlọ ọrụ na-ahụ maka nri na ọgwụ na Ghana): Ndebanye aha ngwaahịa", url: "https://fdaghana.gov.gh/services-2/product-registration/" };
const GH_FDA_PLS = { name: "Ghana Food and Drugs Authority: Progressive Licensing Scheme maka ndị na-emepụta obere (Pink, Yellow, Green)", url: "https://fdaghana.gov.gh/programmes/progressive-licensing-scheme-2/" };
const KEBS = { name: "Kenya Bureau of Standards (KEBS): Standardization Mark (asambodo ngwaahịa) na akara ịdị mma", url: "https://www.kebs.org" };
const CODEX_HYGIENE = { name: "Codex Alimentarius (FAO/WHO): Kọmitii na-ahụ maka ịdị ọcha nri na General Principles of Food Hygiene (CXC 1-1969)", url: "https://codex.fao.org/codex-committees/general-subject-committees/CCFH" };
const FAO_ZECC = { name: "FAO TECA/STI portal: Zero Energy Cooling Chamber (ụlọ ijide oyi na-anaghị eji ọkụ eletrik) maka akwụkwọ nri", url: "https://sti-portal.fao.org/innovations/zero-energy-cooling-chamber-vegetables" };

module.exports = {
  id: "agri-value-addition-marketing-ig",
  lang: "ig",
  translationOf: "agri-value-addition-marketing",
  category: "Agriculture (Africa)",
  name: "Ịbawanye Uru Ihe Ugbo, Ịkwakọ Ngwaahịa na Ịre Ihe Ugbo",
  skills: "Ịhọrọ ngwaahịa e meziri emezi, Ịgbakọ ọnụ ego na ịkpọ ọnụahịa, Imepụta ihe n'ụzọ dị ọcha, Ịkwakọ na itinye akara (label), Ichebe ngwaahịa n'ụzọ, Ire ihe ozugbo nye ndị na-azụ",
  outcome: "ime ka otu ihe ubi ma ọ bụ mmiri ara si n'ugbo gị bụrụ ngwaahịa e kwakọrọ ma tinye akara: ịhọrọ ya, ịgbakọ ọnụ ya, imepụta ya n'ụzọ dị ọcha, ịchọpụta ndebanye aha ọ chọrọ, na inye ya ozugbo nye ụlọ ahịa, ụlọ akwụkwọ, họtel ma ọ bụ onye na-azụ n'ịntanetị n'ọnụahịa na-eweta uru.",
  about: [
    "Ihe ugbo a na-emeghị ihe na-adịkarị ọnụ ala n'oge owuwe ihe ubi, mgbe onye ọ bụla na-ere otu ihe ahụ. Ime ya ka ọ bụrụ ngwaahịa dị ka mango a mịrị amị, ụtara akpụ (cassava flour), ose ahụekere (groundnut paste) ma ọ bụ yoghurt nwere ike iweta ego karịa, ịdịte aka karịa ma ruo ndị ọhụrụ na-azụ. Ihe ọmụmụ a bụ maka ndị ọrụ ugbo nta, otu ụmụ nwanyị na otu ndị ntorobịa, ndị ntorobịa na-arụ azụmahịa ugbo na ndị ndụmọdụ ugbo (extension workers) na Kenya, Naịjirịa, Ghana, mba Afrịka Ọdịda Anyanwụ na-asụ French na Afrịka niile.",
    "Ị ga-ahọrọ otu ngwaahịa dabara n'ugbo gị na ezi onye na-azụ, gbakọọ ihe otu ngwugwu na-efu na ihe ị ga-ere ya, hazie imepụta ihe n'ụzọ dị ọcha, chepụta akara (label), chọpụta ụlọ ọrụ mba nke ga-akwado ya, hazie otu ọ ga-esi dị nchebe n'ụzọ ruo n'aka onye na-azụ, ma kwado okwu mkpọsa (pitch) iji ree ya ozugbo.",
    "Ọ na-ewuli n'elu ihe ọmụmụ \"Ilekọta na Ichekwa Ihe Ubi Mgbe Owuwe Gasịrị\" na \"Otu Mmekọ Ndị Ọrụ Ugbo na Iru Ahịa\", ya mere ọ naghị ekwughachi nchekwa, ịmịrị ihe ma ọ bụ ire ihe dị ka otu. Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise ma na-emechi na ọrụ \"Nwalee ya ugbu a\" maka ugbo gị. Ọnụ ego niile dị n'ihe ọmụmụ a bụ ọmụmaatụ, ọ bụghị ezi ọnụahịa."
  ],
  finalTask: "Dee atụmatụ ngwaahịa nwere otu peeji maka otu ngwaahịa e meziri emezi si n'ugbo gị: ngwaahịa ahụ na onye na-azụ ya, mpempe akwụkwọ ọnụ ego nwere ọnụ ego na ọnụahịa otu ngwugwu, ndepụta ihe ịdị ọcha maka imepụta ya, akara (label) mbụ ya na ụlọ ọrụ mba ị ga-ajụ, otu ị ga-esi chebe ya n'ụzọ, na obere okwu mkpọsa nye otu onye na-azụ ozugbo.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị ọrụ ugbo nta na ndị na-eto eto, ndị ọrụ n'ugbo, otu ụmụ nwanyị na otu ndị ntorobịa, ndị ntorobịa na-arụ azụmahịa ugbo na ndị ndụmọdụ ugbo na Kenya, Naịjirịa, Ghana, mba Afrịka Ọdịda Anyanwụ na-asụ French na Afrịka niile. Ọtụtụ na-ere ihe ugbo a na-emeghị ihe n'ọnụ ugbo ma ọ bụ n'ahịa obodo, chọọ ọnụahịa ka mma.",
    startingPoint: "Ha maara ịkọ ma wee ihe ubi ma ọ bụ mepụta mmiri ara, ma mara otu esi echekwa ma mịa ya nke ọma (lee Ilekọta na Ichekwa Ihe Ubi Mgbe Owuwe Gasịrị). Ụfọdụ na-emeworị obere ngwaahịa maka ezinụlọ ma ọ bụ ndị agbata obi, n'agbakọghị ọnụ ego, n'enweghị akara ma ọ bụ ndebanye aha.",
    gap: "A na-akpọ ọnụahịa ọtụtụ ngwaahịa ugbo site n'ịkọ nkọ, a na-emepụta ha n'enweghị usoro ịdị ọcha, a na-ere ha n'enweghị ezi akara, a na-enyekwa ha ndị etiti (middlemen) na-akwụ ụgwọ n'oge ma ọ bụ na-akwụ obere. Ndị ọrụ ugbo kwesịrị ịhọrọ ngwaahịa onye na-azụ chọrọ n'ezie, gbakọọ ọnụ ya, mepụta ya n'enweghị ihe egwu, tinye ya akara, lelee nkwado mba ọ chọrọ ma ree ya ozugbo, ka ịbawanye uru weta ego kama ịla ego n'iyi.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ; ọtụtụ ndị na-amụ ihe na-eji Bekee dị ka asụsụ nke abụọ",
      "Ngwaọrụ: ekwentị nkịtị ma ọ bụ smartphone, nke a na-ekekọrịta mgbe ụfọdụ; igwe mgbakọ (calculator); akwụkwọ",
      "Ego: obere ego; malite site na obere ngwaahịa na ngwa ọrụ dị ọnụ ala",
      "Iwu: iwu ndebanye aha na akara nri dị iche site na mba ruo mba ma na-agbanwe; ndị na-amụ ihe na-ajụ ụlọ ọrụ mba ha",
      "Oge: nkuzi nkeji 4 ruo 6 nke dabara n'etiti ọrụ ugbo"
    ],
    prerequisites: "Ọ ga-enyere aka: Ilekọta na Ichekwa Ihe Ubi Mgbe Owuwe Gasịrị, na Otu Mmekọ Ndị Ọrụ Ugbo na Iru Ahịa. Mgbakọ dị mfe: ịgbakwunye, ịmụba na ịkekọ."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe e nyere gị ihe ubi ma ọ bụ mmiri ara bụ isi n'ugbo gị na ihe ndị na-azụ nọ gị nso na-achọ", action: "ịhọrọ otu ngwaahịa e meziri emezi ị ga-emepụta na onye ị ga-erere ya", standard: "mgbe i tụnyere opekata mpe nhọrọ abụọ n'ihe gbasara ndị na-achọ ya, akụrụngwa, ngwa ọrụ na iwu" },
    { id: "O2", condition: "Mgbe e nyere gị ọnụ ego otu ngwaahịa (batch)", action: "ịgbakọ ọnụ ego otu ngwugwu na ịkpọ ọnụahịa ị ga-ere ya", standard: "na-agụnye akụrụngwa, ihe nkwakọ, ike ọkụ, ọrụ aka, njem na ihe furu efu, ya na ọnụahịa kpuchiri mmefu ọ bụla gbakwunye uru (margin)" },
    { id: "O3", condition: "Maka ngwaahịa i họọrọ, site n'imepụta ya ruo n'aka onye na-azụ", action: "ide ndepụta ihe ịdị ọcha na nchekwa oyi (cold chain)", standard: "na-ekpuchi aka, mmiri, ebe a na-arụ ọrụ, akụrụngwa, nkwakọ na ichebe ngwaahịa ahụ n'ebe nchekwa na n'ụzọ" },
    { id: "O4", condition: "Mgbe e nyere gị ngwaahịa gị na mba gị", action: "ide akara (label) mbụ na ịkpọ aha ụlọ ọrụ mba ga-akwado ngwaahịa ahụ", standard: "nwere aha ngwaahịa, ihe e ji mee ya, ịdị arọ ihe dị n'ime, onye mepụtara ya na otu esi akpọtụrụ ya, nọmba batch na ụbọchị, na ndetu ka a lelee iwu ụlọ ọrụ ahụ nke ugbu a" },
    { id: "O5", condition: "Mgbe e nyere gị otu ụlọ ahịa, ụlọ akwụkwọ, họtel ma ọ bụ onye na-azụ n'ịntanetị", action: "ịkwado okwu mkpọsa (pitch) maka ire ozugbo ya na nkwekọrịta e dere ede", standard: "na-ekwu ngwaahịa ahụ, ọnụahịa, ọnụ ọgụgụ, nnyefe, ụbọchị ịkwụ ụgwọ na otu a ga-esi edozi mkpesa" }
  ],
  chapters: [
    {
      name: "Isi 1: Imepụta ngwaahịa na-eweta uru",
      lessons: [
        {
          title: "Ịhọrọ ngwaahịa e meziri emezi",
          objectives: ["O1"],
          minutes: 5,
          goal: "Tụnyere ngwaahịa abụọ e meziri emezi maka ugbo gị ma họrọ otu nwere ezi onye na-azụ.",
          text: [
            "Ịbawanye uru (value addition) pụtara ime ihe n'ihe ugbo gị nke na-eme ka onye na-azụ kwụọ ụgwọ karịa: ịmịrị ya, ịgwe ya, ịsụ ya, ịhụ ya n'ọkụ, ime ka o gbaa ụka (fermenting), ịsacha ya, ịhọcha ya n'ngwugwu ma ọ bụ naanị ịkwakọ ya nke ọma. Mango ọhụrụ na-ere ure n'otu izu nwere ike ịbụ mango a mịrị amị nke na-adịte ọtụtụ ọnwa. Akpụ (cassava) nwere ike ịbụ ụtara ma ọ bụ garị, ahụekere nwere ike ịbụ ose ahụekere, mmiri ara nwekwara ike ịbụ yoghurt.",
            "Malite n'onye na-azụ, ọ bụghị n'igwe. Jụọ ụlọ ahịa, ndị na-esi nri n'ụlọ akwụkwọ, họtel na ndị ahịa nọ gị nso ihe ha na-azụ, ole, ugboro ole, n'ụdị ngwugwu dị aṅaa na n'ọnụahịa ole. Ngwaahịa onye ọ bụla nọ nso na-achọghị bụ ihe egwu.",
            "Mgbe ahụ lelee ihe anọ: ndị na-achọ ya (onye ga-azụ ya na ole), akụrụngwa (ị ma ọ bụ ndị agbata obi gị nwere ihe zuru ezu, n'afọ niile ka ọ bụ naanị n'oge ya), ngwa ọrụ na nka (ị nwere ike ịmalite obere, dịka ọmụmaatụ site na igwe ịmịrị ihe nke anyanwụ ma ọ bụ igwe ọgwe i gbaziri), na iwu (ngwaahịa mmiri ara na anụ nwere ihe egwu karịa ma na-achọkarị nkwado karịa ụtara kpọrọ nkụ). Tụnyere opekata mpe nhọrọ abụọ tupu ị họrọ."
          ],
          steps: ["Depụta ngwaahịa abụọ ma ọ bụ atọ ị nwere ike imepụta site n'ihe ubi ma ọ bụ mmiri ara gị.", "Jụọ opekata mpe ndị na-azụ atọ ihe ha na-azụ, ole na n'ọnụahịa ole.", "Nye ngwaahịa ọ bụla akara n'ihe gbasara ndị na-achọ ya, akụrụngwa, ngwa ọrụ na nka, na iwu.", "Họrọ nke nwere akara kachasị mma na onye na-azụ ị maara aha ya."],
          words: [["Ịbawanye uru (value addition)", "ịgbanwe ma ọ bụ ịkwakọ ihe ugbo gị ka onye na-azụ kwụọ ụgwọ karịa maka ya."], ["Oge ndụ ngwaahịa (shelf life)", "ogologo oge ngwaahịa na-adị mma ma dị nchebe iri."], ["Ihe na-emebi ngwa ngwa (perishable)", "ngwaahịa na-emebi ọsọ ọsọ, dị ka mmiri ara, yoghurt ma ọ bụ tomato ọhụrụ."]],
          slides: [
            { title: "Ihe ịbawanye uru pụtara", bullets: ["Mịa, gwee, sụọ, hụọ n'ọkụ, mee ka o gbaa ụka ma ọ bụ kwakọọ ihe ugbo gị", "Mango ka ọ bụrụ mango a mịrị amị; akpụ ka ọ bụrụ ụtara ma ọ bụ garị", "Ahụekere ka ọ bụrụ ose ahụekere; mmiri ara ka ọ bụrụ yoghurt"] },
            { title: "Malite n'onye na-azụ", bullets: ["Jụọ ụlọ ahịa, ndị na-esi nri n'ụlọ akwụkwọ, họtel na ndị ahịa", "Ihe ha na-azụ, ole, ugboro ole", "Ụdị ngwugwu na ọnụahịa ha na-akwụ"] },
            { title: "Nye nhọrọ ọ bụla akara", bullets: ["Ndị na-achọ ya: onye na-azụ na ole", "Akụrụngwa: ọ zuru ezu, n'ọnwa ole", "Ngwa ọrụ na nka; iwu (mmiri ara nwere ihe egwu karịa)"] }
          ],
          tryIt: "Họrọ ngwaahịa abụọ ị nwere ike imepụta. Jụọ ndị na-azụ atọ nọ gị nso maka nke ọ bụla, wee nye ha abụọ akara n'ihe gbasara ndị na-achọ ya, akụrụngwa, ngwa ọrụ na iwu. Dee ngwaahịa ị họọrọ na onye na-azụ ị ga-elekwasị anya.",
          youCanNow: "ịtụnyere ngwaahịa e meziri emezi n'ihe gbasara ndị na-achọ ya, akụrụngwa, ngwa ọrụ na iwu, na ịhọrọ otu nwere ezi onye na-azụ.",
          quickCheck: [
            { objective: "O1", q: "Ị chọrọ ịbawanye uru mango gị. Gịnị ka ị ga-ebu ụzọ mee?", options: ["Zụta nnukwu igwe ịmịrị ihe n'akwụghị ụgwọ ozugbo (credit)", "Detuo ihe onye agbata obi gị na-emepụta", "Jụọ ndị na-azụ nọ gị nso ihe ha na-azụ na n'ọnụahịa ole", "Mepụta ihe niile ị nwere ike, wee chọọ ndị na-azụ emesịa"], answer: 2, why: "Ịmalite n'ezi ndị na-azụ na-egosi ma e nwere ndị na-achọ ya tupu ị mefuo ego." },
            { objective: "O1", q: "Kedu ngwaahịa na-achọkarị nkwado na nlekọta KARỊA iji mepụta ya n'enweghị ihe egwu?", options: ["Yoghurt e ji mmiri ara mee", "Ụtara akpụ", "Mpekere mango a mịrị amị", "Agwa a sachara ma họchaa n'ngwugwu"], answer: 0, why: "Ngwaahịa mmiri ara na-emebi ngwa ngwa ma nwee ike ibu nje, ya mere ha nwere ihe egwu karịa ma iwu na-achịkwa ha nke ọma karịa." }
          ]
        },
        {
          title: "Ịgbakọ ọnụ ego na ịkpọ ọnụahịa ngwaahịa gị",
          objectives: ["O2"],
          minutes: 6,
          goal: "Gbakọọ ọnụ ego otu ngwugwu ma kpọọ ọnụahịa kpuchiri mmefu ọ bụla gbakwunye uru (margin).",
          text: [
            "Ọtụtụ ndị na-emepụta obere na-ala ego n'iyi n'amaghị, n'ihi na ha na-agụ naanị akụrụngwa. Gụọ mmefu ọ bụla nke otu batch: akụrụngwa, ihe nkwakọ na akara, ike ọkụ (mmanụ, unyi, ọkụ eletrik, ụgwọ igwe ọgwe), mmiri, ọrụ aka (gụnyere oge nke gị), njem, na ụgwọ dị ka ndebanye aha ma ọ bụ ụgwọ ahịa e kesara n'afọ niile.",
            "Mgbe ahụ gụọ ihe furu efu: ụfọdụ ngwaahịa na-emebi, na-awụfu ma ọ bụ a na-enye ya dị ka ihe nlele. Kee mkpokọta ọnụ ego batch ahụ site na ọnụ ọgụgụ ngwugwu ị nwere ike ire n'ezie. Ọmụmaatụ (ọnụ ego ndị a bụ naanị ọmụmaatụ): otu otu na Ghana na-eme ose ahụekere. Ahụekere GHS 400, ite na akara GHS 150, ọgwe na mmanụ GHS 50, ọrụ aka GHS 100, njem GHS 50: mkpokọta GHS 750. Ha jupụtara ite 50 mana ha na-atụ anya ire 48, ya mere otu ite na-efu ihe dị ka GHS 15.60.",
            "Ọnụahịa gị ga-ekpuchirịrị ọnụ ego otu ngwugwu gbakwunye uru maka ọganihu, nchekwa ego na ndozi. Mgbe ahụ tụnyere ọnụahịa ahụ na ngwaahịa yiri ya n'ụlọ ahịa. Ọ bụrụ na ọnụahịa gị karịrị nke ha nke ukwuu, chọta ụzọ dị ọnụ ala isi mepụta ya, ngwugwu pere mpe, ma ọ bụ onye na-azụ na-akwụ ụgwọ maka ịdị mma. Otu usoro a na-arụ ọrụ maka mango a mịrị amị na KES, garị na NGN ma ọ bụ yoghurt na XOF."
          ],
          steps: ["Depụta mmefu ọ bụla nke otu batch, gụnyere ọrụ aka nke gị.", "Gụọ ngwugwu ole ị nwere ike ire n'ezie mgbe ihe furu efu gasịrị.", "Kee mkpokọta ọnụ ego site na ngwugwu ị nwere ike ire: nke ahụ bụ ọnụ ego otu ngwugwu.", "Gbakwunye uru (margin) iji nweta ọnụahịa gị.", "Tụnyere ya na ngwaahịa yiri ya n'ụlọ ahịa ma gbanwee atụmatụ gị ma ọ dị mkpa."],
          words: [["Ọnụ ego otu ngwugwu (cost per unit)", "ihe ọ na-efu gị imepụta otu ngwugwu."], ["Uru (margin)", "ego fọdụrụ n'ire ọ bụla mgbe a kwụchara mmefu."], ["Batch", "otu ugboro imepụta ngwaahịa ahụ, dịka ọmụmaatụ ite 50 e mere n'otu ụbọchị."]],
          slides: [
            { title: "Gụọ mmefu ọ bụla nke otu batch", bullets: ["Akụrụngwa, ihe nkwakọ, akara", "Mmanụ, ọkụ eletrik, ọgwe, mmiri", "Ọrụ aka (nke gị kwa), njem, ụgwọ"] },
            { title: "Ọnụ ego otu ngwugwu", bullets: ["Mkpokọta ọnụ ego batch / ngwugwu ị nwere ike ire n'ezie", "Ọmụmaatụ: GHS 750 / ite 48 = ihe dị ka GHS 15.60", "Ọnụ ego ndị a bụ naanị ọmụmaatụ"] },
            { title: "Kpọọ ọnụahịa", bullets: ["Ọnụ ego otu ngwugwu + uru = ọnụahịa", "Lelee ngwaahịa yiri ya n'ụlọ ahịa", "Ọ dị oke elu? Ụzọ dị ọnụ ala, ngwugwu pere mpe ma ọ bụ onye ọzọ na-azụ"] }
          ],
          tryIt: "Mee mpempe akwụkwọ ọnụ ego maka otu batch nke ngwaahịa i họọrọ. Depụta mmefu ọ bụla, ngwugwu ị na-atụ anya ire, ọnụ ego otu ngwugwu na ọnụahịa ị ga-ere ya. Tụnyere ya na otu ngwaahịa yiri ya n'ụlọ ahịa.",
          youCanNow: "ịkwadebe mpempe akwụkwọ ọnụ ego, ịgbakọ ọnụ ego otu ngwugwu na ịkpọ ọnụahịa kpuchiri ya ya na uru.",
          quickCheck: [
            { objective: "O2", q: "Kedu mmefu ndị na-emepụta obere na-echefukarị?", options: ["Akụrụngwa", "Ọrụ aka nke ha na ihe furu efu", "Ọnụahịa n'ụlọ ahịa", "Aha ngwaahịa ahụ"], answer: 1, why: "Oge nke gị na ngwugwu mebiri emebi ma ọ bụ nke e nyere dị ka ihe nlele bụ ezi mmefu, ịhapụ ha na-ezo ọnwụ ego." },
            { objective: "O2", q: "Otu batch na-efu KES 6,000 ị nwere ike ire ngwugwu 40. Gịnị bụ ọnụ ego otu ngwugwu?", options: ["KES 240", "KES 600", "KES 1,500", "KES 150"], answer: 3, why: "Ọnụ ego otu ngwugwu bụ mkpokọta ọnụ ego batch kee site na ngwugwu e rere: 6,000 / 40 = KES 150." }
          ]
        },
        {
          title: "Ịdị ọcha na nchekwa nri mgbe ị na-emepụta",
          objectives: ["O3"],
          minutes: 6,
          goal: "Dee ndepụta ihe ịdị ọcha na-echebe ngwaahịa gị mgbe ị na-emepụta ya.",
          text: [
            "Onye na-azụ agaghị alọghachi, ụlọ ọrụ gọọmentị nwekwara ike ịkwụsị ire ihe gị, ma ọ bụrụ na ngwaahịa emee ka mmadụ daa ọrịa. Codex Alimentarius General Principles of Food Hygiene (iwu mba ụwa gbasara ịdị ọcha nri) na-ekpuchi usoro niile, site n'ugbo ruo n'aka onye na-eri nri ahụ. Ụlọ ọrụ nri mba gị na-eji echiche ndị dị otu a mgbe ọ na-enyocha gị.",
            "Ihe ndị bụ isi: mmiri dị ọcha na nchebe; ịsa aka na ncha tupu ọrụ na mgbe i si n'ụlọ mposi; ịghara ịrụ ọrụ mgbe ọ na-arị gị ọrịa; ikpuchi ntutu na ọnya; ebe ọrụ, ngwa ọrụ na ihe nchekwa dị ọcha; ikewapụ akụrụngwa na ngwaahịa emechara; igbochi anụmanụ, ụmụ ahụhụ na oke; na ebe dị ọcha kpọrọ nkụ iji chekwaa ngwugwu ndị ahụ.",
            "Malite na akụrụngwa dị ọcha. Ejila ahụekere ma ọ bụ ọka nwere ebu (mould) mee ihe mgbe ọ bụla, n'ihi na ha nwere ike ibu aflatoxin (lee Ilekọta na Ichekwa Ihe Ubi Mgbe Owuwe Gasịrị). Mmiri ara maka yoghurt ga-ekpo ọkụ ma a ga-eji usoro a nwalere anwale nke onye ndụmọdụ ugbo mmiri ara ma ọ bụ ụlọ ọrụ ọkọlọtọ gị nyere lekọta ya, ma debe ya n'oyi. Dee nzọụkwụ gị ka e mee batch ọ bụla n'otu ụzọ, ma nye batch ọ bụla nọmba na ụbọchị."
          ],
          steps: ["Dee nzọụkwụ imepụta ngwaahịa gị site n'akụrụngwa ruo ngwugwu e mechiri emechi.", "Maka nzọụkwụ ọ bụla, dee ihe nwere ike ime ka ọ ghara ịdị nchebe (unyi, nje, ebu, ụmụ ahụhụ).", "Dee iwu ịdị ọcha na-egbochi ya.", "Nye batch ọ bụla nọmba na ụbọchị, ma dee onye mere ya."],
          words: [["Nchekwa nri (food safety)", "idebe nri ka ọ ghara inwe nje, nsi na unyi nwere ike ime ka ndị mmadụ daa ọrịa."], ["Mmetọ (contamination)", "mgbe unyi, nje ma ọ bụ kemịkal banyere n'ime nri."], ["Nọmba batch", "koodu dị na ngwugwu ọ bụla na-agwa gị mgbe na otu e si mee ya, ka i wee chọpụta ebe nsogbu si."]],
          slides: [
            { title: "Ihe mere ịdị ọcha ji dị mkpa", bullets: ["Otu onye na-azụ dara ọrịa nwere ike imebi azụmahịa gị", "Iwu ịdị ọcha Codex: site n'ugbo ruo n'efere", "Ndị nyocha na-ele ihe ndị a bụ isi"] },
            { title: "Ihe ndị bụ isi", bullets: ["Mmiri dị nchebe; saa aka na ncha", "Arụla ọrụ mgbe ọ na-arị gị; kpuchie ntutu na ọnya", "Ngwa ọrụ dị ọcha; kewapụ akụrụngwa na ngwaahịa emechara"] },
            { title: "Malite ọcha, dee ya ede", bullets: ["Ejila ọka ma ọ bụ ahụekere nwere ebu mee ihe", "Mmiri ara: usoro a nwalere anwale, debe ya n'oyi", "Otu nzọụkwụ ahụ na batch ọ bụla; nọmba batch na ụbọchị"] }
          ],
          sources: [CODEX_HYGIENE],
          tryIt: "Dee nzọụkwụ imepụta ngwaahịa gị. N'akụkụ nzọụkwụ ọ bụla, dee otu ihe nwere ike ime ka ọ ghara ịdị nchebe na iwu na-egbochi ya. Nke a bụ ndepụta ihe ịdị ọcha gị.",
          youCanNow: "ide ndepụta ihe ịdị ọcha maka ngwaahịa gị na inye batch ọ bụla nọmba na ụbọchị.",
          quickCheck: [
            { objective: "O3", q: "Otu onye ọrụ nwere afọ ọsịsa n'ụbọchị imepụta ihe. Gịnị kwesịrị ime?", options: ["Ọ ga-anọpụ n'imepụta ihe ruo mgbe ahụ dịrị ya mma", "Ọ ga-arụ ọrụ ma saa aka otu ugboro", "Ọ ga-arụ ọrụ naanị n'uwe aka (gloves)", "Ọ ga-akwakọ kama ịgwakọ"], answer: 0, why: "Ndị ọrụ na-arịa ọrịa nwere ike ibuga nje n'ime nri, ya mere ha ekwesịghị imetụ ya aka ruo mgbe ahụ dịrị ha mma." },
            { objective: "O3", q: "Ụfọdụ ahụekere dị n'akpa nwere ebu. Gịnị ka ị ga-eme?", options: ["Hụọ ha ogologo oge iji gbuo ebu ahụ", "Gwakọta ha na ahụekere ndị dị mma", "Wepụ ha ma ejila ha mee ose", "Ree ha n'ọnụahịa dị ala"], answer: 2, why: "Ebu nwere ike ibu aflatoxin, nke isi nri anaghị ewepụ, ya mere a gaghị eji ahụekere nwere ebu mee ihe." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Imepụta ngwaahịa na-eweta uru",
        questions: [
          { objective: "O1", q: "Kedu nke bụ ọmụmaatụ ịbawanye uru?", options: ["Ire akpụ ọhụrụ n'ọnụ ugbo", "Ịgwe akpụ ka ọ bụrụ ụtara ma kwakọọ ya", "Ịkọkwu akpụ", "Ịhapụ akpụ n'ala ogologo oge"], answer: 1, why: "Ịgwe na ịkwakọ na-eme ka ihe ugbo bụrụ ngwaahịa onye na-azụ na-akwụ ụgwọ karịa maka ya." },
          { objective: "O1", q: "Ị nwere mmiri ara naanị n'oge udu mmiri. Kedu nlele kachasị mkpa tupu ị họrọ yoghurt?", options: ["Agba akara ahụ", "Aha brand gị", "Ihe ndị enyi gị na-amasị", "Ma ị nwere akụrụngwa zuru ezu n'afọ niile na onye na-azụ ya"], answer: 3, why: "Inweta akụrụngwa na ndị na-achọ ya na-ekpebi ma ngwaahịa ahụ nwere ike idebe onye na-azụ." },
          { objective: "O2", q: "Gịnị bụ ọnụ ego otu ngwugwu?", options: ["Mkpokọta ọnụ ego batch kee site na ngwugwu ị nwere ike ire n'ezie", "Ọnụahịa ụlọ ahịa wepụ ọrụ aka gị", "Naanị ọnụ ego akụrụngwa", "Ihe ọ bụla onye agbata obi gị na-ere"], answer: 0, why: "Ike mmefu batch niile site na ngwugwu a pụrụ ire na-enye ezi ọnụ ego otu ngwugwu." },
          { objective: "O3", q: "Kedu nke bụ iwu ịdị ọcha bụ isi maka imepụta ihe?", options: ["Hapụ ọkụkọ ka ha na-agagharị n'ebe ọrụ", "Jiri mmiri ọ bụla ị nwere", "Saa aka na ncha tupu ọrụ na mgbe i si n'ụlọ mposi", "Debe akụrụngwa na ngwaahịa emechara ọnụ"], answer: 2, why: "Ịsa aka na ncha na-egbochi nje si n'aka ịbanye n'ime nri." },
          { objective: "O3", q: "Gịnị mere a ga-eji nye batch ọ bụla nọmba na ụbọchị?", options: ["Iji mee ka ngwugwu ahụ maa mma", "Iji chọpụta ma dozie nsogbu ma ọ bụrụ na otu batch mebiri", "N'ihi na ndị na-azụ na-ahụ nọmba n'anya", "Iji bulie ọnụahịa"], answer: 1, why: "Nọmba batch na-enyere gị aka ịchọta ngwugwu ndị si na batch nwere nsogbu na mgbe e mere ya." }
        ]
      }
    },
    {
      name: "Isi 2: Ịkwakọ, itinye akara na ire ozugbo",
      lessons: [
        {
          title: "Nkwakọ, akara, brand na ndebanye aha",
          objectives: ["O4"],
          minutes: 6,
          goal: "Dee akara mbụ maka ngwaahịa gị ma chọta ụlọ ọrụ mba ga-akwado ya.",
          text: [
            "Ezigbo nkwakọ na-echebe ngwaahịa ahụ ma na-eme ka ndị na-azụ tụkwasị ya obi. Họrọ ihe nkwakọ e mere maka nri (food-grade) nke na-egbochi ikuku, mmiri na ụmụ ahụhụ: akpa e mechiri emechi maka mango a mịrị amị na ụtara, ite dị ọcha nwere mkpuchi siri ike maka ose ahụekere, na iko dị ọcha e mechiri emechi maka yoghurt. Brand gị bụ aha gị, akara (logo) gị na nkwa gị, dịka ọmụmaatụ 'dị ọcha, si n'obodo, enweghị shuga a gbakwunyere'. Mee ka ọ dị mfe ma bụrụ otu na ngwugwu ọ bụla.",
            "Akara (label) na-egosikarị: aha ngwaahịa, ihe e ji mee ya, ịdị arọ ma ọ bụ olu ihe dị n'ime, aha onye mepụtara ya na otu esi akpọtụrụ ya, nọmba batch, ụbọchị e mere ya na ụbọchị a ga-eji ya tupu ma ọ bụ ụbọchị ọ kacha mma tupu (best-before), otu esi echekwa ya, na nọmba ndebanye aha ma ọ bụ akara ọ bụla. Mba gị nwere ike ịchọ ihe ndị ọzọ, ya mere lelee tupu i bipụta ọtụtụ akara.",
            "Ọtụtụ nri a kwakọrọ achọ nkwado tupu e ree ha n'ụlọ ahịa. Na Kenya, KEBS na-enye Standardization Mark maka ngwaahịa ruru Kenya Standard. Na Naịjirịa, NAFDAC na-edebanye aha nri e mere n'obodo site na ngalaba Made in Nigeria Food Division ya, nwere ụzọ maka ndị na-emepụta obere yana ndị nke ọkara na nke ukwuu. Na Ghana, Food and Drugs Authority na-edebanye aha ngwaahịa, Progressive Licensing Scheme ya na-ekwekwa ka ndị na-emepụta nke ukwuu obere (mmadụ otu ruo ise) mezuo iwu n'usoro n'usoro. Na Côte d'Ivoire, jụọ ụlọ ọrụ ọkọlọtọ mba ahụ, CODINORM; mba ndị ọzọ nwere nke ha. Iwu, fọm na ụgwọ na-agbanwe, ya mere kpọtụrụ ụlọ ọrụ ahụ tupu ị malite."
          ],
          steps: ["Họrọ ihe nkwakọ e mere maka nri nke na-egbochi ikuku, mmiri na ụmụ ahụhụ.", "Dee aha brand gị na nkwa gị n'otu ahịrị.", "Dee akara mbụ: aha, ihe e ji mee ya, ịdị arọ ihe dị n'ime, onye mepụtara ya na otu esi akpọtụrụ ya, nọmba batch, ụbọchị, nchekwa.", "Chọta ụlọ ọrụ mba gị (KEBS, NAFDAC, Ghana FDA, CODINORM ma ọ bụ nke ọzọ) ma jụọ ihe ngwaahịa gị chọrọ.", "Bipụta akara naanị mgbe ị matara iwu ndị ahụ."],
          words: [["Brand", "aha, akara (logo) na nkwa na-eme ka ndị na-azụ mata ma tụkwasị ngwaahịa gị obi."], ["Ịdị arọ ihe dị n'ime (net weight)", "ịdị arọ nri dị n'ime ngwugwu ahụ, a gụghị ihe nkwakọ ahụ."], ["Ndebanye aha (registration)", "nkwado gọọmentị site n'aka ụlọ ọrụ mba na e nwere ike ire otu nri."], ["Ụbọchị ọ kacha mma tupu (best-before)", "ụbọchị ngwaahịa ahụ ga-adịgide n'ịdị mma ya kachasị ma ọ bụrụ na e chekwara ya otu akara si kwuo."]],
          slides: [
            { title: "Ihe nkwakọ na-echebe", bullets: ["E mere maka nri; na-egbochi ikuku, mmiri na ụmụ ahụhụ", "Akpa e mechiri emechi, ite dị ọcha, iko e mechiri emechi", "Otu brand dị mfe na ngwugwu ọ bụla"] },
            { title: "Ihe akara na-egosikarị", bullets: ["Aha, ihe e ji mee ya, ịdị arọ ihe dị n'ime", "Aha onye mepụtara ya na otu esi akpọtụrụ ya", "Nọmba batch, ụbọchị e mere ya, best-before ma ọ bụ use-by", "Nchekwa; nọmba ndebanye aha ma ọ bụ akara"] },
            { title: "Onye na-akwado (lelee iwu ugbu a)", bullets: ["Kenya: KEBS Standardization Mark", "Naịjirịa: ndebanye aha NAFDAC (nwere ụzọ maka ndị na-emepụta obere)", "Ghana: FDA; Progressive Licensing Scheme maka ndị na-emepụta nke ukwuu obere"] },
            { title: "Tupu i bipụta", bullets: ["Côte d'Ivoire: CODINORM; mba ndị ọzọ: ụlọ ọrụ nke ha", "Iwu, fọm na ụgwọ na-agbanwe", "Buru ụzọ jụọ ụlọ ọrụ ahụ, wee bipụta akara"] }
          ],
          sources: [KEBS, NAFDAC_FOOD, GH_FDA_REG, GH_FDA_PLS],
          tryIt: "Dee akara mbụ maka ngwaahịa gị n'akwụkwọ ma ọ bụ site na ngwa n'efu dị ka Canva. Mgbe ahụ chọta weebụsaịtị ma ọ bụ ọfịs ụlọ ọrụ nri mba gị ma dee ajụjụ ị ga-ajụ ya maka ndebanye aha na akara.",
          youCanNow: "ide akara mbụ maka ngwaahịa na ịkpọ aha ụlọ ọrụ mba ị ga-ajụ tupu ị ree n'ụlọ ahịa.",
          quickCheck: [
            { objective: "O4", q: "Kedu ihe akara nri na-achọkarị?", options: ["PIN ụlọ akụ onye ọrụ ugbo", "Ọnụahịa ahụekere a na-emeghị ihe", "Foto ugbo ahụ", "Nọmba batch na ụbọchị best-before"], answer: 3, why: "Nọmba batch na ụbọchị na-eme ka ndị na-azụ na ndị nyocha mata mgbe e mere ya na ogologo oge ọ ga-adịte." },
            { objective: "O4", q: "Onye na-emepụta obere na Ghana nwere ndị ọrụ atọ chọrọ nkwado FDA. Kedu mmemme nwere ike inyere ha aka imezu iwu n'usoro n'usoro?", options: ["Standardization Mark", "Progressive Licensing Scheme", "GLOBALG.A.P.", "Made in Nigeria Food Division"], answer: 1, why: "Progressive Licensing Scheme nke Ghana FDA bụ maka ndị na-emepụta obere nwere mmadụ otu ruo ise." }
          ]
        },
        {
          title: "Ichebe ngwaahịa n'ụzọ: cold chain na njem",
          objectives: ["O3"],
          minutes: 5,
          goal: "Hazie otu ngwaahịa gị ga-esi dị nchebe ma ghara imebi site n'ebe nchekwa gị ruo n'aka onye na-azụ.",
          text: [
            "E nwere ike imepụta ngwaahịa nke ọma ma o mebie n'ụzọ. Ngwaahịa na-emebi ngwa ngwa dị ka yoghurt na mmiri mkpụrụ osisi ọhụrụ (juice) chọrọ cold chain: ha ga-adị oyi na nzọụkwụ ọ bụla, site n'imepụta ha ruo na friji onye na-azụ. Ọ bụrụ na ha ekpoo ọkụ n'ụzọ, nje na-amụba, ngwaahịa ahụ nwekwara ike ime ka ndị mmadụ daa ọrịa, ọbụlagodi ma ọ bụrụ na ọ dị ka ọ dị mma.",
            "Maka obere njem, jiri igbe oyi (cool box) dị ọcha nwere ice pack ma bugara ya n'isi ụtụtụ. Kwekọrịta na onye na-azụ na ọ ga-etinye ya na friji ozugbo. Emela ka yoghurt kpoworo ọkụ kpụkọọ ọzọ ma ọ bụ ree ya ọzọ mgbe ọ bụla. Ngwaahịa kpọrọ nkụ dị ka ụtara akpụ, mango a mịrị amị na ose ahụekere achọghị oyi, mana ha ga-anọrịrị n'ebe kpọrọ nkụ, mechiri emechi, nwee ndò ma dị anya na mmanụ, kemịkal na ụmụ ahụhụ.",
            "Hazie njem ahụ: onye ga-ebu ya, gịnị ka a ga-eji (ọgba tum tum, matatu, okada, bọs ma ọ bụ ụgbọ ala ibu), ogologo oge ọ ga-ewe, na otu a ga-esi chebe ngwugwu ka ha ghara ịpịa, ka anyanwụ na mmiri ozuzo ghara imetụ ha. Ụzọ ime ka ihe dị oyi dị ọnụ ala dị ka zero energy cooling chamber nke FAO nwere ike idebe ihe ugbo n'oyi tupu i mepụta ya. Dee nzọụkwụ cold chain na njem gị na ndepụta ihe ịdị ọcha gị."
          ],
          steps: ["Kpebie ma ngwaahịa gị na-emebi ngwa ngwa (chọrọ oyi) ka ọ kpọrọ nkụ (chọrọ ịkpọ nkụ na imechi emechi).", "Maka ngwaahịa oyi: igbe oyi, ice pack, nnyefe n'isi ụtụtụ, friji onye na-azụ ozugbo.", "Maka ngwaahịa kpọrọ nkụ: mechiri emechi, n'ndò, dị anya na kemịkal na ụmụ ahụhụ.", "Hazie onye ga-ebu ya, otu, ogologo oge, na otu a ga-esi chebe ngwugwu.", "Tinye nzọụkwụ ndị a na ndepụta ihe ịdị ọcha gị."],
          words: [["Cold chain", "idebe ngwaahịa n'oyi na nzọụkwụ ọ bụla site n'imepụta ya ruo n'ire ya."], ["Igbe oyi (cool box)", "igbe e kpuchiri ekpuchi nke na-eji ice ma ọ bụ ice pack edebe ihe n'oyi."]],
          slides: [
            { title: "Cold chain maka ihe na-emebi ngwa ngwa", bullets: ["Yoghurt na juice ga-adị oyi n'ụzọ niile", "Ọ kpoo ọkụ n'ụzọ = nje na-amụba, ọbụlagodi ma ọ dị ka ọ dị mma", "Erela yoghurt kpoworo ọkụ ọzọ mgbe ọ bụla"] },
            { title: "Obere njem, ọnụ ala", bullets: ["Igbe oyi dị ọcha nwere ice pack", "Bugara ya n'isi ụtụtụ", "Onye na-azụ ga-etinye ya na friji ozugbo"] },
            { title: "Ngwaahịa kpọrọ nkụ", bullets: ["Debe ya ka ọ kpọọ nkụ, mechie emechi, nọrọ n'ndò", "Dị anya na mmanụ, kemịkal na ụmụ ahụhụ", "Chebe ngwugwu ka ha ghara ịpịa ma ọ bụ mmiri ozuzo ịba ha"] }
          ],
          sources: [FAO_ZECC],
          tryIt: "Dee njem ngwaahịa gị site n'ebe nchekwa gị ruo n'aka onye na-azụ gị: onye ga-ebu ya, otu, ogologo oge, na ihe ga-eme ka ọ dị oyi ma ọ bụ kpọọ nkụ ma ghara imebi. Tinye ya na ndepụta ihe ịdị ọcha gị.",
          youCanNow: "ịhazi cold chain ma ọ bụ ụzọ njem maka ngwaahịa kpọrọ nkụ nke na-echebe ngwaahịa gị ruo mgbe ọ ruru onye na-azụ n'aka.",
          quickCheck: [
            { objective: "O3", q: "Yoghurt gị nọrọ n'anwụ awa atọ n'ime bọs gbara egbu. Gịnị ka ị ga-eme?", options: ["Ree ya ngwa ngwa n'ọnụahịa dị ala", "Tinyeghachi ya na friji ma ree ya echi", "Erela ya; ọ dịghịzi nchebe", "Detụ ya ire ma ree ya ma ọ dị ka ọ dị mma"], answer: 2, why: "Yoghurt kpoworo ọkụ nwere ike ịmụ nje ị na-apụghị ịhụ ma ọ bụ idetụ ire, ya mere e kwesịghị ire ya." },
            { objective: "O3", q: "Gịnị ka mango a mịrị amị kacha chọọ n'ụzọ ịga n'aka onye na-azụ?", options: ["Ka ọ kpọọ nkụ, mechie emechi ma nọrọ n'ndò", "Ka ọ kpụkọọ (frozen)", "Ka ọ nọrọ n'ikuku oghe", "Ka ọ nọrọ n'akụkụ gaalọn mmanụ"], answer: 0, why: "Ngwaahịa kpọrọ nkụ na-emebi mgbe ha nwere mmiri, kpoo ọkụ nke ukwuu ma ọ bụ nọrọ nso kemịkal, ọ bụghị n'ihi na ha adịghị oyi." }
          ]
        },
        {
          title: "Ire ozugbo: ụlọ ahịa, ụlọ akwụkwọ, họtel na ịntanetị",
          objectives: ["O5"],
          minutes: 6,
          goal: "Kwado okwu mkpọsa na nkwekọrịta e dere ede iji ree ngwaahịa gị ozugbo nye otu onye na-azụ.",
          text: [
            "Ọ bụghị onye etiti (middleman) ọ bụla dị njọ: ụfọdụ ndị ahịa na-akwụ ụgwọ n'ụzọ ziri ezi ma na-ebu ihe ugbo ị na-apụghị ibu. Mana lezie anya maka ihe ịdọ aka na ntị nke mmegbu: ihe ọtụtụ (scale) a gbanwere aghụghọ, ọnụahịa a gbanwere mgbe e nyefechara, ịkwụ ụgwọ na-abịa ọnwa ole na ole emesịa ma ọ bụ ọ dịghị mgbe ọ bịara, na 'zụọ ugbu a, kwụọ emesịa' site n'aka ndị ị na-amaghị ndị na-efu emesịa. Ire ozugbo nwere ike inye gị ọnụahịa ka mma na onye na-azụ na-adịgide.",
            "Onye na-azụ ọ bụla chọrọ ihe dị iche. Ụlọ ahịa obodo na supamaket chọrọ akara, ngwaahịa na-abịa mgbe niile, ma mgbe ụfọdụ na-ere n'usoro consignment (ha na-akwụ ụgwọ naanị mgbe ngwaahịa ahụ rere), nke bụ ihe egwu. Ụlọ akwụkwọ na ụlọ ọgwụ na-azụ ọtụtụ n'otu oge n'usoro oge, na-achọkarị quote (ọnụahịa e dere ede), invoice na mgbe ụfọdụ ndebanye aha. Họtel na ụlọ nri chọrọ otu ịdị mma ahụ oge niile. Ndị na-azụ n'ịntanetị na WhatsApp, Facebook ma ọ bụ ahịa n'ịntanetị chọrọ foto doro anya, ọnụahịa na nnyefe ngwa ngwa.",
            "Ezigbo okwu mkpọsa dị mkpụmkpụ: ihe ngwaahịa ahụ bụ, ihe mere o ji dị mma (dị ọcha, si n'obodo, dị ọhụrụ), ọnụahịa, nha ngwugwu, ole ị nwere ike inye na ugboro ole, na nnyefe. Mgbe ahụ kwekọrịta n'ihe e dere ede, ọbụlagodi n'obere ozi: ọnụ ọgụgụ, ọnụahịa, ụbọchị nnyefe, ụbọchị na ụzọ ịkwụ ụgwọ (dịka ọmụmaatụ mobile money), na ihe ga-eme ma ọ bụrụ na ngwugwu mebiri. Debe otu nnomi ya. Ekesala PIN ma ọ bụ okwuntughe gị na onye na-azụ ọ bụla mgbe ọ bụla. Maka nnukwu nkwekọrịta ma ọ bụ nke ogologo oge, rịọ onye ndụmọdụ i tụkwasịrị obi ka o buru ụzọ gụọ ya."
          ],
          steps: ["Họrọ otu onye na-azụ: ụlọ ahịa, ụlọ akwụkwọ, họtel ma ọ bụ ndị na-azụ n'ịntanetị.", "Dee obere okwu mkpọsa: ngwaahịa, ihe mere o ji dị mma, ọnụahịa, nha ngwugwu, ole ị ga-enye, nnyefe.", "Bute ihe nlele na akara gị.", "Kwekọrịta n'ihe e dere ede: ọnụ ọgụgụ, ọnụahịa, nnyefe, ụbọchị na ụzọ ịkwụ ụgwọ, ngwugwu mebiri emebi.", "Debe nnomi ya ma dee nnyefe na ịkwụ ụgwọ ọ bụla."],
          words: [["Onye etiti (middleman)", "onye ahịa na-azụ n'aka ndị ọrụ ugbo ma na-erere ndị ọzọ."], ["Consignment", "ụlọ ahịa na-anara ngwaahịa gị ma na-akwụ gị ụgwọ naanị mgbe ha rere."], ["Okwu mkpọsa (pitch)", "obere onyinye doro anya nye onye na-azụ."], ["Invoice", "akwụkwọ ụgwọ e dere ede na-arịọ onye na-azụ ka ọ kwụọ ụgwọ maka ngwaahịa e nyefere."]],
          slides: [
            { title: "Lezie anya maka mmegbu", bullets: ["Ihe ọtụtụ aghụghọ; ọnụahịa a gbanwere mgbe e nyefechara", "Ịkwụ ụgwọ ọnwa ole na ole emesịa ma ọ bụ ọ dịghị mgbe", "Ndị ị na-amaghị 'ga-akwụ emesịa' wee efu"] },
            { title: "Ihe onye na-azụ ọ bụla chọrọ", bullets: ["Ụlọ ahịa: akara, ngwaahịa mgbe niile; ihe egwu consignment", "Ụlọ akwụkwọ: ọtụtụ, n'usoro oge, quote na invoice", "Họtel: otu ịdị mma oge niile; ịntanetị: foto, nnyefe ngwa ngwa"] },
            { title: "Obere okwu mkpọsa", bullets: ["Ihe ọ bụ na ihe mere o ji dị mma", "Ọnụahịa, nha ngwugwu, ole na ugboro ole", "Nnyefe; bute ihe nlele na akara"] },
            { title: "Dee nkwekọrịta ede", bullets: ["Ọnụ ọgụgụ, ọnụahịa, ụbọchị nnyefe", "Ụbọchị na ụzọ ịkwụ ụgwọ; ngwugwu mebiri emebi", "Debe nnomi; ekesala PIN mgbe ọ bụla"] }
          ],
          tryIt: "Ọrụ ikpeazụ: dee atụmatụ ngwaahịa gị nwere otu peeji. Tinye ngwaahịa na onye na-azụ, mpempe akwụkwọ ọnụ ego na ọnụahịa gị, ndepụta ihe ịdị ọcha na cold chain gị, akara mbụ gị na ụlọ ọrụ mba, na obere okwu mkpọsa ya na nkwekọrịta ị ga-arịọ onye na-azụ ka o kwenye n'ihe e dere ede.",
          youCanNow: "inye onye na-azụ ozugbo okwu mkpọsa maka ngwaahịa gị na ikwekọrịta n'ihe e dere ede doro anya gbasara ọnụahịa, nnyefe na ịkwụ ụgwọ.",
          quickCheck: [
            { objective: "O5", q: "Otu ụlọ ahịa chọrọ ịnara ose ahụekere gị n'usoro consignment. Gịnị bụ ihe egwu ya?", options: ["Ị ga-ebu ụzọ kwụọ ụlọ ahịa ahụ ụgwọ", "A ga-akwụ gị naanị mgbe o rere, ngwugwu a na-erereghị nwekwara ike ịlọghachi", "Ụlọ ahịa ahụ ga-agbanwe akara gị", "Ọ dịghị ihe egwu ọ bụla"], answer: 1, why: "N'usoro consignment, ị na-ebu ihe egwu ahụ ruo mgbe ngwaahịa ahụ rere, ya mere kwekọrịta ogologo oge na ihe ga-eme ngwugwu a na-erereghị." },
            { objective: "O5", q: "Otu họtel kwenyere ịzụ yoghurt kwa izu. Gịnị ka ị ga-ekwekọrịta n'ihe e dere ede?", options: ["Naanị aha họtel ahụ", "PIN mobile money gị", "Ọ dịghị ihe; ịkwe aka zuru ezu", "Ọnụ ọgụgụ, ọnụahịa, ụbọchị nnyefe, ụbọchị ịkwụ ụgwọ na ihe ga-eme ngwugwu mebiri emebi"], answer: 3, why: "Nkwekọrịta e dere ede gbasara ọnụ ọgụgụ, ọnụahịa, nnyefe na ịkwụ ụgwọ na-egbochi esemokwu emesịa." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Ịkwakọ, itinye akara na ire ozugbo",
        questions: [
          { objective: "O4", q: "Kedu ụlọ ọrụ na-enye Standardization Mark maka ngwaahịa na Kenya?", options: ["NAFDAC", "Ghana FDA", "KEBS", "CODINORM"], answer: 2, why: "KEBS, Kenya Bureau of Standards, na-enye Standardization Mark." },
          { objective: "O4", q: "Olee mgbe ị ga-ebipụta ọtụtụ akara?", options: ["Mgbe i lelechara ihe ụlọ ọrụ mba gị chọrọ", "Tupu ị họrọ ngwaahịa ahụ", "Tupu gị na onye na-azụ ọ bụla akparịta ụka", "Naanị mgbe onye na-azụ mere mkpesa"], answer: 0, why: "Iwu akara dị iche site na mba ruo mba ma na-agbanwe, ya mere buru ụzọ lelee ka ị ghara ịla akara n'iyi." },
          { objective: "O3", q: "Kedu ngwaahịa chọrọ cold chain?", options: ["Ụtara akpụ", "Mango a mịrị amị", "Ose ahụekere n'ite e mechiri emechi", "Yoghurt"], answer: 3, why: "Yoghurt na-emebi ngwa ngwa, ọ ga-adịkwa oyi site n'imepụta ya ruo n'aka onye na-azụ." },
          { objective: "O5", q: "Kedu nke bụ ihe ịdọ aka na ntị nke onye etiti na-emegbu mmadụ?", options: ["Ịkwụ ụgwọ n'ụbọchị a kwekọrịtara", "Ịgbanwe ọnụahịa mgbe i nyefechara", "Ịtụ ihe n'ihu gị", "Inye nnata (receipt)"], answer: 1, why: "Ịgbanwe ọnụahịa mgbe e nyefechara na-ebufe ọnwụ ego n'isi gị ma na-emebi ntụkwasị obi." },
          { objective: "O5", q: "Gịnị kwesịrị ịdị n'obere okwu mkpọsa nye onye na-esi nri n'ụlọ akwụkwọ?", options: ["Akụkọ ndụ gị", "Ọnụahịa onye agbata obi gị", "Ngwaahịa, ọnụahịa, nha ngwugwu, ole ị ga-enye na nnyefe", "PIN ụlọ akụ gị"], answer: 2, why: "Onye na-azụ kwesịrị ịmata ihe ị na-enye, n'ọnụahịa ole, ole na otu ọ ga-esi ruo ya aka." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Ịbawanye Uru Ihe Ugbo, Ịkwakọ Ngwaahịa na Ịre Ihe Ugbo",
    questions: [
      { objective: "O1", q: "Gịnị ka ịbawanye uru pụtara?", options: ["Ịgbanwe ma ọ bụ ịkwakọ ihe ugbo ka ndị na-azụ kwụọ ụgwọ karịa", "Ịkọ ihe ubi ọhụrụ", "Ire n'ọnụ ugbo", "Ịgbazite ego maka mkpụrụ"], answer: 0, why: "Ịmịrị, ịgwe, imezi ma ọ bụ ịkwakọ nke ọma nwere ike iweta ọnụahịa dị elu." },
      { objective: "O1", q: "Gịnị kwesịrị ibu ụzọ duzie nhọrọ ngwaahịa gị?", options: ["Igwe kachasị ọnụ ala ị nwere ike ịchọta", "Ihe mara mma n'akara", "Ihe ndị na-azụ nọ gị nso na-azụ n'ezie", "Ihe a ma ama na televishọn"], answer: 2, why: "Ngwaahịa nwere ezi onye na-azụ nwere obere ihe egwu karịa nke e mere n'olileanya." },
      { objective: "O1", q: "Kedu ihe anọ ị ga-eji nye nhọrọ ngwaahịa ọ bụla akara?", options: ["Agba, ụtọ, isi, nha", "Ndị na-achọ ya, akụrụngwa, ngwa ọrụ na nka, iwu", "Ọnụahịa, brand, logo, okwu mkpọsa", "Mmiri ozuzo, anwụ, ikuku, ala"], answer: 1, why: "Ihe anọ ndị a na-egosi ma ị nwere ike imepụta ya, ree ya ma mee ya n'ụzọ iwu kwadoro." },
      { objective: "O1", q: "Osisi mango gị na-amị mkpụrụ ọnwa abụọ n'afọ. Gịnị ka nke a pụtara maka mango a mịrị amị?", options: ["Ị nweghị ike ime mango a mịrị amị", "Ị ga-ere ya niile ka ọ dị ọhụrụ", "Ọnụahịa adịghị mkpa", "Hazie akụrụngwa: zụta n'aka ndị agbata obi ma ọ bụ mee nke zuru ezu iji ree n'afọ niile"], answer: 3, why: "Akụrụngwa na-abịa n'oge ya na-emetụta ogologo oge ị nwere ike inye onye na-azụ ihe." },
      { objective: "O2", q: "Kedu mmefu kwesịrị ịdị na mpempe akwụkwọ ọnụ ego gị?", options: ["Naanị akụrụngwa", "Oge ọrụ aka nke gị", "Njem onye na-azụ ịla ụlọ", "Ụgwọ akwụkwọ ụmụ onye agbata obi gị"], answer: 1, why: "Ọrụ aka nke gị bụ ezi mmefu; ịhapụ ya na-ezo ma ngwaahịa ahụ na-eweta uru." },
      { objective: "O2", q: "Otu batch garị na-efu NGN 60,000 ị nwere ike ire akpa 120. Gịnị bụ ọnụ ego otu akpa?", options: ["NGN 500", "NGN 200", "NGN 1,200", "NGN 7,200"], answer: 0, why: "60,000 kee site n'akpa 120 bụ NGN 500 n'otu akpa." },
      { objective: "O2", q: "Kedu otu ị ga-esi kpọọ ọnụahịa gị?", options: ["Detuo ọnụahịa kachasị ala n'ahịa", "Were ihe onye mbụ na-azụ kwuru", "Ọnụ ego otu ngwugwu gbakwunye uru, wee lelee ọnụahịa ụlọ ahịa", "Were otu ọnụahịa ahụ dị ka ihe ugbo a na-emeghị ihe"], answer: 2, why: "Ọnụahịa ga-ekpuchirịrị mmefu niile ya na uru ma ka nwee isi nye ndị na-azụ." },
      { objective: "O2", q: "Ọnụahịa gị karịrị nke ngwaahịa yiri ya n'ụlọ ahịa nke ukwuu. Gịnị bụ ezigbo nzọụkwụ ọzọ?", options: ["Kwụsị ozugbo", "Bulikwuo ọnụahịa ahụ", "Zoo ọnụahịa ahụ", "Chọọ ụzọ dị ọnụ ala, ngwugwu pere mpe ma ọ bụ onye na-azụ na-akwụ ụgwọ maka ịdị mma"], answer: 3, why: "Ịgbanwe ọnụ ego, nha ngwugwu ma ọ bụ onye na-azụ nwere ike ime ka ngwaahịa ahụ nwee ike ịsọ mpi." },
      { objective: "O3", q: "Kedu nke so na ndepụta ihe ịdị ọcha?", options: ["Ịsa aka na ncha tupu ọrụ", "Ịhapụ anụmanụ n'ebe ọrụ", "Ịchekwa akụrụngwa na ngwaahịa emechara ọnụ", "Mmiri ọ bụla ị nwere ike ịchọta"], answer: 0, why: "Ịsa aka na ncha na-egbochi nje ịbanye n'ime nri." },
      { objective: "O3", q: "Gịnị mere ị na-agaghị eji ahụekere nwere ebu mee ose mgbe ọ bụla?", options: ["Ha dị oke arọ", "Ha nwere ike ibu aflatoxin, nke isi nri anaghị ewepụ", "Ha na-eme ka ite ahụ ruo unyi", "Agba ha anaghị amasị ndị na-azụ"], answer: 1, why: "Aflatoxin bụ nsi zoro ezo nke ịhụ n'ọkụ anaghị emebi." },
      { objective: "O3", q: "E nyefere yoghurt n'igbe oyi nwere ice pack n'isi ụtụtụ. Nke a bụ ọmụmaatụ:", options: ["Brand", "Consignment", "Cold chain", "Ndebanye aha"], answer: 2, why: "Idebe ngwaahịa na-emebi ngwa ngwa n'oyi na nzọụkwụ ọ bụla bụ cold chain." },
      { objective: "O3", q: "Kedu otu ụtara akpụ kwesịrị isi gaa n'aka onye na-azụ?", options: ["N'akpa oghe na mmiri ozuzo", "N'akụkụ mmanụ na kemịkal", "Kpụkọrọ akpụkọ (frozen)", "Kpọrọ nkụ, mechiri emechi, n'ndò ma dị anya na ụmụ ahụhụ"], answer: 3, why: "Ngwaahịa kpọrọ nkụ na-emebi mgbe ha nwere mmiri ma ọ bụ e metọrọ ha, ya mere ha ga-anọrịrị n'ebe kpọrọ nkụ ma dị nchebe." },
      { objective: "O4", q: "Kedu ihe na-adịkarị n'akara nri?", options: ["Ihe e ji mee ya na ịdị arọ ihe dị n'ime", "PIN onye ọrụ ugbo", "Aha onye na-azụ", "Ọnụahịa fatịlaịza"], answer: 0, why: "Ihe e ji mee ya na ịdị arọ ihe dị n'ime na-agwa ndị na-azụ ihe dị n'ime na ole ọ dị." },
      { objective: "O4", q: "Na Naịjirịa, kedu ụlọ ọrụ na-edebanye aha nri a kwakọrọ e mere n'obodo?", options: ["KEBS", "Ghana FDA", "CODINORM", "NAFDAC"], answer: 3, why: "NAFDAC na-edebanye aha nri e mere na Naịjirịa, gụnyere nke ndị na-emepụta obere." },
      { objective: "O4", q: "Gịnị bụ brand?", options: ["Ụdị ite", "Aha, logo na nkwa ndị na-azụ na-amata", "Ikikere gọọmentị", "Nọmba batch"], answer: 1, why: "Brand na-enyere ndị na-azụ aka ịmata ma tụkwasị ngwaahịa gị obi." },
      { objective: "O4", q: "Iwu ndebanye aha maka ngwaahịa gị edoghị anya. Gịnị ka ị ga-eme?", options: ["Ree ya n'agbanyeghị ma chere", "Jụọ onye ahịa ihe o chere", "Kpọtụrụ ụlọ ọrụ nri ma ọ bụ ụlọ ọrụ ọkọlọtọ mba gị ma lelee iwu ya nke ugbu a", "Detuo nọmba ndebanye aha brand ọzọ"], answer: 2, why: "Naanị ụlọ ọrụ mba ahụ nwere ike ikwu ihe ngwaahịa gị chọrọ; iwu na ụgwọ na-agbanwe." },
      { objective: "O5", q: "Kedu ezigbo ihe mere ị ga-eji ree ozugbo nye ụlọ akwụkwọ?", options: ["Ọtụtụ ịzụ ihe na-adịgide n'usoro oge", "Ọ dịghị akwụkwọ ọ bụla mgbe ọ bụla", "Ụlọ akwụkwọ anaghị akwụ ụgwọ n'oge mgbe ọ bụla", "Ịdị mma adịghị mkpa"], answer: 0, why: "Ụlọ akwụkwọ na-azụkarị ọtụtụ mgbe niile, mana ha chọrọ quote, invoice na otu ịdị mma ahụ." },
      { objective: "O5", q: "Gịnị ka họtel na-elebakarị anya kachasị?", options: ["Ihe nlele n'efu kwa izu", "Agba uwe gị", "Nha ugbo gị", "Otu ịdị mma ahụ oge niile"], answer: 3, why: "Họtel na-eje ozi ndị ọbịa kwa ụbọchị ma chọọ ịdị mma na ngwaahịa na-adịgide." },
      { objective: "O5", q: "Ị na-ere mango a mịrị amị na WhatsApp. Gịnị na-enyere ndị na-azụ n'ịntanetị aka?", options: ["Ọ dịghị ọnụahịa e gosiri", "Foto doro anya, ọnụahịa na nnyefe ngwa ngwa", "Ịrịọ PIN ụlọ akụ ha", "Ogologo ozi olu"], answer: 1, why: "Ndị na-azụ n'ịntanetị na-ekpebi site na foto na ọnụahịa doro anya, ma na-atụ anya nnyefe ngwa ngwa." },
      { objective: "O5", q: "Onye na-azụ kwenyere n'ekwentị ịzụ ite 50 kwa izu. Gịnị bụ nzọụkwụ kacha mma ọzọ?", options: ["Nyefee ya ma nwee olileanya na ha ga-akwụ", "Ziga ha PIN mobile money gị", "Dee ọnụ ọgụgụ, ọnụahịa, ụbọchị nnyefe na ụbọchị ịkwụ ụgwọ n'ozi ma debe nnomi ya", "Chere ka ha kwuo nkwekọrịta emesịa"], answer: 2, why: "Nkwekọrịta e dere ede, ọbụlagodi n'ozi, na-echebe akụkụ abụọ ahụ ma esemokwu bilie." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ nke atụmatụ ngwaahịa ahụ ma nwaa ọzọ.",
    criteria: [
      { name: "Ngwaahịa na onye na-azụ", objective: "O1", notYet: "A kpọrọ aha ngwaahịa n'enweghị onye na-azụ, ma ọ bụ a tụnyereghị nhọrọ ahụ na nhọrọ ọzọ.", meets: "Otu ngwaahịa na otu onye na-azụ a kpọrọ aha, a họọrọ mgbe a tụnyere nhọrọ abụọ n'ihe gbasara ndị na-achọ ya, akụrụngwa, ngwa ọrụ na iwu.", exceeds: "Ọ na-egosikwa otu a ga-esi nweta akụrụngwa n'afọ niile, dịka ọmụmaatụ site n'aka ndị agbata obi ma ọ bụ otu." },
      { name: "Mpempe akwụkwọ ọnụ ego na ọnụahịa", objective: "O2", notYet: "A gụrụ naanị akụrụngwa, ma ọ bụ ọ dịghị ọnụ ego otu ngwugwu.", meets: "Mmefu ọ bụla nke batch, gụnyere ọrụ aka na ihe furu efu, na-enye ọnụ ego otu ngwugwu na ọnụahịa nwere uru.", exceeds: "E lelere ọnụahịa ahụ na ọnụahịa ụlọ ahịa, atụmatụ ahụ na-egosikwa ihe a ga-agbanwe ma ọ dị oke elu." },
      { name: "Ịdị ọcha na cold chain", objective: "O3", notYet: "Ọ dịghị nzọụkwụ e dere ede, ma ọ bụ ihe egwu ndị bụ isi dị ka ịsa aka, ebu ma ọ bụ idebe ya n'oyi adịghị.", meets: "Ndepụta na-ekpuchi mmiri, aka, ebe ọrụ, akụrụngwa, nkwakọ, nọmba batch na njem n'enweghị ihe egwu.", exceeds: "Nzọụkwụ ọ bụla na-akpọ aha ihe egwu na iwu ya, onye ọzọ nwekwara ike ịgbaso ya n'enweghị enyemaka." },
      { name: "Akara na ndebanye aha", objective: "O4", notYet: "Akara ahụ enweghị ihe e ji mee ya, ịdị arọ ihe dị n'ime, otu esi akpọtụrụ ma ọ bụ ụbọchị, ma ọ bụ a kpọghị aha ụlọ ọrụ mba ọ bụla.", meets: "Akara ahụ na-egosi aha, ihe e ji mee ya, ịdị arọ ihe dị n'ime, onye mepụtara ya na otu esi akpọtụrụ ya, nọmba batch, ụbọchị na nchekwa, ma kpọọ aha ụlọ ọrụ a ga-ajụ.", exceeds: "Onye na-amụ ihe akpọtụrụla ụlọ ọrụ ahụ ma dee ihe ọ chọrọ na ihe ọ na-efu." },
      { name: "Okwu mkpọsa na nkwekọrịta", objective: "O5", notYet: "Ọ dịghị okwu mkpọsa, ma ọ bụ ọ dịghị nkwekọrịta e dere ede gbasara ọnụahịa, nnyefe na ịkwụ ụgwọ.", meets: "Obere okwu mkpọsa gbakwunye nkwekọrịta e dere ede: ọnụ ọgụgụ, ọnụahịa, ụbọchị nnyefe, ụbọchị na ụzọ ịkwụ ụgwọ, ngwugwu mebiri emebi.", exceeds: "E nyere ezi onye na-azụ okwu mkpọsa ahụ, onye na-amụ ihe dekwara azịza ya." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ndị na-amụ ihe rere opekata mpe otu batch nke ngwaahịa e meziri emezi n'ime ụbọchị 90 (nnyocha nsochi)",
      "Ndị na-amụ ihe kwuru na ha nwetara ọnụahịa dị elu n'otu kilo ihe ugbo karịa ire ya otu o si dị (nnyocha nsochi)",
      "Ndị na-amụ ihe kpọtụrụ ma ọ bụ debanyere aha n'ụlọ ọrụ nri ma ọ bụ ụlọ ọrụ ọkọlọtọ mba ha",
      "Ndị na-amụ ihe kwuru na ha nwere obere ọnwụ n'oge owuwe ihe ubi n'ihi na ha mepụtara ihe ugbo kama ire ya n'ọnụ ala"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Ekwentị (smartphone ga-enyere aka) na igwe mgbakọ (calculator)",
      "Akwụkwọ na mkpịsị ode maka mpempe akwụkwọ ọnụ ego, ndepụta ihe ịdị ọcha na akara",
      "Ọ bụrụ na ịchọrọ: ngwa nhazi n'efu dị ka Canva maka akara",
      "Ihe nlele nke ihe ugbo gị a na-emeghị ihe na ngwaahịa yiri ya si n'ụlọ ahịa obodo iji tụnyere",
      "Ihe dị ka nkeji 90 n'ozuzu, n'oge nkenke, gbakwunye oge ịga hụ ndị na-azụ"
    ],
    facilitatorNotes: [
      "Kee ndị na-amụ ihe n'otu site na ngwaahịa (dịka ọmụmaatụ mango a mịrị amị, ụtara akpụ, ose ahụekere, yoghurt) ka ha kekọrịta ihe ha chọpụtara gbasara ndị na-azụ na ọnụ ego.",
      "Mee nkuzi ịgbakọ ọnụ ego site na ezi batch otu ahụ mere, ma hapụ ndị na-amụ ihe ka ha lelee mgbakọ ibe ha.",
      "Kpọọ onye ọrụ si n'ụlọ ọrụ nri ma ọ bụ ụlọ ọrụ ọkọlọtọ mba (KEBS, NAFDAC, Ghana FDA, CODINORM ma ọ bụ ụlọ ọrụ mba gị) ka ọ kọwaa usoro ndebanye aha nke ugbu a; ekwula ụgwọ site n'ihe i chetara.",
      "Mee nleta aka n'ọrụ maka ịdị ọcha n'ezi ebe a na-emepụta ihe, ma kwusie ike na ngwaahịa mmiri ara chọrọ usoro a nwalere anwale na cold chain.",
      "Jiri rubric tụọ akara ọrụ ikpeazụ ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge; mee ka otu onye na-amụ ihe bụrụ onye na-azụ iji mee omume okwu mkpọsa."
    ]
  }
};
