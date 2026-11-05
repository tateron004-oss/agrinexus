"use strict";

// Koach Learn course (Igbo translation of africa-life/afr-women-entrepreneurs.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. All money figures are examples, exactly as in the English; no financial advice.

const UNWOMEN = { name: "UN Women: ịkwalite ụmụ nwanyị n'akụ na ụba (ọrụ nlekọta a na-adịghị akwụ ụgwọ, inweta akụ na ego)", url: "https://www.unwomen.org/en/what-we-do/economic-empowerment" };
const WEF = { name: "Women Enterprise Fund, Kenya (ego gọọmentị maka azụmahịa ụmụ nwanyị)", url: "https://wef.co.ke/" };
const SMEDAN = { name: "SMEDAN, Nigeria: ndebanye aha n'efu, SME Digital Academy na mmemme gụnyere Women In Self-employment Programme", url: "https://smedan.gov.ng/" };
const DERFJ = { name: "DER/FJ, Senegal: Délégation générale à l'Entreprenariat Rapide des Femmes et des Jeunes (ndebanye aha, ọzụzụ, ego)", url: "https://der.sn/" };
const GEA = { name: "Ghana Enterprises Agency: enyemaka maka obere azụmahịa", url: "https://gea.gov.gh/" };
const AFAWA = { name: "African Development Bank: AFAWA, Affirmative Finance Action for Women in Africa", url: "https://www.afdb.org/en/topics-and-sectors/initiatives-partnerships/affirmative-finance-action-for-women-in-africa" };

module.exports = {
  id: "afr-women-entrepreneurs-ig",
  lang: "ig",
  translationOf: "afr-women-entrepreneurs",
  category: "Africa: Life and Work",
  name: "Ụmụ Nwanyị Ndị Ọchụnta Ego: Ịmalite na Ịzụlite Azụmahịa",
  skills: "Ịhọrọ echiche azụmahịa dabara ndụ gị, Ịnwale echiche na ezi ndị ahịa, Ịkpọ ọnụahịa nwere uru na ịkwụ onwe gị ụgwọ, Ịhazi oge na enyemaka ezinụlọ, Ịchọta ego na enyemaka n'enweghị nsogbu, Iwulite njikọ na atụmatụ uto",
  outcome: "ịmalite ma ọ bụ ịzụlite obere azụmahịa dabara ndụ gị: ịhọrọ echiche, ịnwale ya na ezi ndị ahịa, ịkpọ ọnụahịa na-eweta uru ma kwụọ gị ụgwọ, ịhazi izu gị na enyemaka ị chọrọ, ịchọta ego na enyemaka n'enweghị nsogbu, na ide atụmatụ uto nke ọnwa isii.",
  about: [
    "Ụmụ nwanyị na-arụ ọtụtụ obere azụmahịa n'Africa niile: n'ahịa, n'ụlọ isi, na kichin, n'ugbo, n'ụlọ ahịa na n'ịntanetị. Ọtụtụ na-eme ya mgbe ha na-elekọta ụmụaka na ezinụlọ, ọtụtụ mgbe na-enweghị ohere zuru oke inweta mbinye ego, ala na oge. Ihe ọmụmụ a bụ maka ụmụ nwanyị nọ na Kenya, Nigeria, Ghana, Senegal, Cameroon, Egypt na n'Africa niile chọrọ ịmalite azụmahịa ma ọ bụ ime ka nke ha nwere na-ewetakwu ego.",
    "Ị ga-ahọrọ echiche dabara nka gị, oge gị na ihe ndị mmadụ chọrọ n'obodo gị, nwalee ya n'obere ego tupu i tinye ego buru ibu, kpọọ ihe ị na-ere ọnụahịa nke na-eweta uru ma kwụọ gị ụgwọ, hazie izu gị na enyemaka ị chọrọ n'ụlọ, chọta ego na mmemme enyemaka ma lelee na ha bụ eziokwu, ma wulite njikọ na atụmatụ ọnwa isii.",
    "Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise ma na-ejedebe n'ọrụ \"Nwalee ya ugbu a\" maka azụmahịa nke gị. Ọnụ ego niile bụ naanị ọmụmaatụ. Ihe ọmụmụ a na-akọwa nhọrọ; ọ bụghị ndụmọdụ ego. Maka nkọwa ndị ọzọ, lee ihe ọmụmụ gbasara otu nchekwa ego, ire ahịa n'ịntanetị na ịdebanye aha azụmahịa n'otu a."
  ],
  finalTask: "Dee atụmatụ azụmahịa nke otu peeji maka onwe gị: echiche ị họrọ na akara ya, ihe ị mụtara mgbe i nwalere ya na ezi ndị ahịa, ọnụ ego, ọnụahịa na uru maka otu ngwaahịa na ego ị ga-akwụ onwe gị, atụmatụ oge kwa izu na onye na-enyere aka, otu nhọrọ ego ma ọ bụ enyemaka i lelere na weebụsaịtị gọọmentị ya, na ebumnuche atọ maka ọnwa isii na-abịa na otu onye ndụmọdụ ma ọ bụ otu ị ga-akpọtụrụ.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ụmụ nwanyị n'Africa niile, n'obodo mepere emepe na n'ime obodo, ndị na-arụ ma ọ bụ chọrọ ịmalite obere azụmahịa: ndị ahịa, ndị na-esi nri maka ọha, ndị na-akwa akwa, ndị na-edozi isi, ndị ọrụ ugbo na-edozi ma na-ere ihe ha kụrụ, ndị nwe ụlọ ahịa na ndị na-ere n'ịntanetị. Afọ ndụ na agụmakwụkwọ ha dị iche iche nke ukwuu; ọtụtụ bụ nne na ndị na-elekọta mmadụ.",
    startingPoint: "Ọtụtụ na-enwetalarị ego site n'ire ahịa ma ọ bụ nka, ọtụtụ nọkwa n'otu nchekwa ego. Ole na ole na-anwale echiche tupu ha etinye ego, na-agụkọ ọnụ ego ngwaahịa ha niile, na-akwụ onwe ha ego a kara aka ma ọ bụ na-ede ebumnuche. Ụfọdụ anaghị achịkwa ego ha na-enweta ma ọ bụ anaghị edebe PIN mobile money ha na nzuzo.",
    gap: "Ụmụ nwanyị ndị ọchụnta ego na-enwekarị obere oge, obere ohere inweta ego, na obere njikọ azụmahịa, ọtụtụ azụmahịa na-anọgidekwa nta ma ọ bụ mechie n'ihi na ọnụahịa anaghị ekpuchi ọnụ ego ma ọ bụ ọrụ karịrị onye nwe ya. Ndị na-amụ ihe kwesịrị ịhọrọ ma nwalee echiche nke ọma, kpọọ ọnụahịa nwere uru, hazie oge na enyemaka ha, nweta ego na mmemme n'enweghị nsogbu, ma too site na njikọ.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ; ọtụtụ ndị na-amụ ihe na-asụ bekee dị ka asụsụ nke abụọ (a na-enyekwa ihe ọmụmụ a n'asụsụ French na Arabic)",
      "Oge: ọtụtụ ọrụ nlekọta na ọrụ ụlọ; nkuzi nkeji 4 ruo 6 dabara n'etiti ha",
      "Ngwaọrụ: ekwentị nkịtị, mgbe ụfọdụ a na-ekerịta ya na ezinụlọ; data dị oke ọnụ",
      "Ego: obere ego; ọ dịghị ndụmọdụ ego; aha mmemme na iwu ha na-agbanwe, ya mere ndị na-amụ ihe na-elele weebụsaịtị gọọmentị",
      "Nchekwa: aghụghọ na-arịọ ụmụ nwanyị ego tupu ha enweta onyinye ego ma ọ bụ mbinye ego; ụfọdụ ụmụ nwanyị na-enwe nrụgide ma ọ bụ onye na-achịkwa ego ha"
    ],
    prerequisites: "Ọ dịghị. Ọ ga-enyere aka: \"Otu Nchekwa Ego na Microfinance\" n'otu a."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe e nyere gị echiche azụmahịa abụọ ma ọ bụ atọ", action: "inye echiche ọ bụla akara maka nka gị, oge gị, ego mmalite na ihe ndị mmadụ chọrọ n'obodo gị, ma họrọ otu", standard: "site n'iji otu akara ahụ maka echiche ọ bụla na ide ihe mere nke meriri ji dabara" },
    { id: "O2", condition: "Tupu i tinye ọtụtụ ego gị n'echiche ọhụrụ", action: "ịnwale echiche ahụ n'obere ngwaahịa na opekata mpe ezi ndị ahịa iri", standard: "site n'ide ole zụtara, ọnụahịa ha kwụrụ na otu mgbanwe ị ga-eme" },
    { id: "O3", condition: "Mgbe e nyere gị ọnụ ego otu ngwaahịa ma ọ bụ ọrụ", action: "ịgbakọ ọnụ ego otu ngwaahịa, ịkpọ ọnụahịa nwere uru, na ịkara ego ị ga-akwụ onwe gị", standard: "na ọnụ ego niile gụnyere ma mgbakọ ahụ ziri ezi" },
    { id: "O4", condition: "Mgbe e nyere gị ọrụ azụmahịa na ọrụ ụlọ gị maka otu izu", action: "ide atụmatụ oge kwa izu nke na-egosi oge azụmahịa, ọrụ nlekọta na onye ga-enyere aka", standard: "nke gị na opekata mpe otu onye ezinụlọ ma ọ bụ onye enyemaka kwekọrịtara" },
    { id: "O5", condition: "Mgbe ị na-achọ mbinye ego, onyinye ego ma ọ bụ mmemme enyemaka", action: "ịlele na ihe a na-enye bụ eziokwu na weebụsaịtị gọọmentị ya ma na-achịkwa ego gị na PIN gị", standard: "n'akwụghị ndị ị na-amaghị \"ego nhazi\" ọ bụla ma n'ekesaghị PIN gị na onye ọ bụla" },
    { id: "O6", condition: "Maka ọnwa isii na-abịa", action: "ide ebumnuche azụmahịa atọ a pụrụ ịtụ atụ ma kpọọ aha otu onye ndụmọdụ, otu ma ọ bụ njikọ ị ga-akpọtụrụ", standard: "ebumnuche ọ bụla nwere nọmba na ụbọchị" }
  ],
  chapters: [
    {
      name: "Isi 1: Ịmalite nke ọma",
      lessons: [
        {
          title: "Ịhọrọ azụmahịa dabara ndụ gị",
          objectives: ["O1"],
          minutes: 5,
          goal: "Nye echiche azụmahịa abụọ ma ọ bụ atọ akara ma họrọ nke kacha dabara gị.",
          text: [
            "Azụmahịa kacha mma maka gị bụ nke ndị nọ nso chọrọ, nke na-eji nka i nwere, nke dabakwara oge na ego i nwere n'ezie. Azụmahịa chọrọ ka ị nọrọ n'ahịa site n'elekere 5 nke ụtụtụ nwere ike ọ gaghị adaba ma ọ bụrụ na ị na-akpọga ụmụaka ụlọ akwụkwọ.",
            "Dee echiche abụọ ma ọ bụ atọ. Nye nke ọ bụla akara site na 1 (adịghị mma) ruo 3 (dị mma) n'ihe anọ: nka gị, oge ọ chọrọ ma e jiri ya tụnyere oge i nwere, ego mmalite ma e jiri ya tụnyere ego i nwere, na ihe ndị mmadụ chọrọ n'obodo (ndị mmadụ ọ na-azụta ihe a nso, ohere ọ dị maka onye ọzọ na-ere ya?). Gbakọta akara ndị ahụ.",
            "Ọmụmaatụ: Halima nọ na Kaduna nyere echiche atọ akara. Ire mmanya kunu n'akụkụ ụlọ akwụkwọ: nka 3, oge 2, ego 3, mkpa 3 = 11. Ịkwa akwa: nka 2, oge 2, ego 1, mkpa 2 = 7. Ire kredit ekwentị: nka 2, oge 3, ego 2, mkpa 1 = 8 (ọtụtụ ndị na-ere ya ugbu a). Ọ họrọ mmanya ahụ. Aïcha nọ na Dakar nwere ike inye ebe a na-ere nri ụtọ thiakry, ịkpa isi na obere ụlọ ahịa akara n'otu ụzọ ahụ.",
            "Akara na-enyere gị aka iche echiche; ọ bụghị ha na-ekpebi maka gị. Jụọkwa: ọ ga-atọ m ụtọ ime nke a, m ga-enwe ike ịzụlite ya ma emechaa?"
          ],
          steps: ["Dee echiche abụọ ma ọ bụ atọ.", "Nye nke ọ bụla akara 1 ruo 3 maka nka, oge, ego mmalite na ihe ndị mmadụ chọrọ n'obodo.", "Gbakọta akara ndị ahụ.", "Họrọ otu ma dee ihe mere o ji dabara ndụ gị."],
          words: [["Ego mmalite", "ego ị chọrọ iji malite: ngwa ọrụ, ngwaahịa mbụ, ebe ire ahịa ma ọ bụ akwụkwọ ikike."], ["Mkpa (demand)", "ọnụ ọgụgụ ndị chọrọ ịzụta ihe, na otu ha chọrọ ya."]],
          slides: [
            { title: "Azụmahịa dabara gị", bullets: ["Ndị nọ nso chọrọ ya", "Ọ na-eji nka i nwere", "Ọ dabara oge na ego i nwere n'ezie"] },
            { title: "Nye echiche ọ bụla akara 1 ruo 3", bullets: ["Nka gị", "Oge ọ chọrọ ma e tụnyere ya na oge i nwere", "Ego mmalite ma e tụnyere ya na ego i nwere", "Ihe ndị mmadụ chọrọ n'obodo"] },
            { title: "Ọmụmaatụ: Halima nọ na Kaduna", bullets: ["Mmanya kunu n'akụkụ ụlọ akwụkwọ: 11", "Ịkwa akwa: 7", "Kredit ekwentị: 8, ndị na-ere ya karịrị akarị"] },
            { title: "Wee jụọ onwe gị", bullets: ["Ọ ga-atọ m ụtọ ime nke a?", "M ga-enwe ike ịzụlite ya ma emechaa?"] }
          ],
          tryIt: "Dee echiche azụmahịa abụọ ma ọ bụ atọ. Nye nke ọ bụla akara 1 ruo 3 maka nka, oge, ego mmalite na ihe ndị mmadụ chọrọ n'obodo, gbakọta akara ndị ahụ, ma dee otu ahịrịokwu banyere ihe mere echiche kacha elu ji dabara ndụ gị.",
          youCanNow: "ịtụnyere echiche azụmahịa site n'akara dị mfe ma họrọ otu dabara ndụ gị.",
          quickCheck: [
            { objective: "O1", q: "Kedu ihe anọ ị na-enye echiche ọ bụla akara?", options: ["Agba, aha, akara njirimara, nha ụlọ ahịa", "Nka, oge, ego mmalite na ihe ndị mmadụ chọrọ n'obodo", "Ihe ndị enyi masịrị, ihu igwe, egwu, ejiji", "Naanị ego ole o nwere ike iweta"], answer: 1, why: "Nka, oge, ego na mkpa na-egosi ma echiche dabara gị na ahịa gị." },
            { objective: "O1", q: "Echiche nwere akara dị elu maka nka, mana ndị iri na-ere ya n'okporo ámá gị ugbu a. Kedu akara dị ala?", options: ["Nka", "Oge", "Ihe ndị mmadụ chọrọ n'obodo", "Ego mmalite"], answer: 2, why: "Ọtụtụ ndị na-ere nso pụtara na ohere adịghị maka onye ọzọ, ya mere mkpa dị ala." }
          ]
        },
        {
          title: "Ịnwale echiche gị na ezi ndị ahịa",
          objectives: ["O2"],
          minutes: 5,
          goal: "Nwalee echiche n'obere ngwaahịa na opekata mpe ezi ndị ahịa iri tupu i tinye ego buru ibu.",
          text: [
            "Ọtụtụ azụmahịa na-ada n'ihi na onye nwe ya na-etinye ego nchekwa ya niile tupu ọ mata ma ndị mmadụ ga-azụta. Buru ụzọ nwalee n'obere: mee ma ọ bụ zụta obere ngwaahịa, nye ezi ndị ahịa ya, ma lee ihe ga-eme.",
            "Mee obere ngwaahịa, dịka ọmụmaatụ iko zobo 20, uwe 5 ma ọ bụ ọhụhụ ndị ahịa isi 10. Nye ya opekata mpe ndị mmadụ iri na-abụghị ezinụlọ gị dị nso. Dee: ole zụtara, ọnụahịa ha kwụrụ, ihe masịrị ha, na ihe ha rịọrọ. Ihe ndị mmadụ na-eme dị mkpa karịa okwu ọma ha: \"Aga m azụta n'izu na-abịa\" abụghị ire ahịa.",
            "Ọmụmaatụ: Esther nọ na Kisumu na-anwale ncha mmiri. Ọ mere karama 15, rere 12 n'ọnụahịa KES 150 (ọnụahịa ọmụmaatụ), ndị ahịa atọ rịọkwara maka karama buru ibu. Mgbanwe ya: ịgbakwunye nha buru ibu. Nwanyị nọ na Alexandria na-anwale pickles o mere n'ụlọ nwere ike ime otu ihe ahụ na ndị agbata obi ya na obere ụlọ ahịa.",
            "Mgbe nnwale ahụ gasịrị, kpebie: gaa n'ihu, gbanwee ihe, ma ọ bụ nwaa echiche gị ọzọ. Nnwale dara ada na-efu obere ego ma na-echekwara gị ọtụtụ ego."
          ],
          steps: ["Mee ma ọ bụ zụta obere ngwaahịa.", "Nye ya opekata mpe ndị mmadụ iri na-abụghị ezinụlọ gị dị nso.", "Dee ole zụtara, ọnụahịa, ihe masịrị ha na ihe ha rịọrọ.", "Kpebie: gaa n'ihu, gbanwee otu ihe, ma ọ bụ nwaa echiche nke ọzọ."],
          words: [["Obere ngwaahịa (small batch)", "obere ihe e mere ma ọ bụ zụta iji nwalee tupu e mewe ọtụtụ."], ["Nnwale", "ịnwale echiche n'obere ụzọ iji mụta ihe tupu i tinye ọtụtụ ego."]],
          slides: [
            { title: "Nwalee tupu i tinye ego buru ibu", bullets: ["Ebula ụzọ tinye ego nchekwa gị niile", "Mee obere ngwaahịa", "Nye ezi ndị ahịa ya"] },
            { title: "Dee", bullets: ["Ole zụtara", "Ọnụahịa ha kwụrụ", "Ihe masịrị ha na ihe ha rịọrọ"] },
            { title: "Omume ka okwu ọma mma", bullets: ["\"Aga m azụta n'izu na-abịa\" abụghị ire ahịa", "Gụọ ezi ihe e rere", "Jụọ ndị na-abụghị ezinụlọ gị dị nso"] },
            { title: "Mgbe nnwale gasịrị", bullets: ["Gaa n'ihu", "Gbanwee otu ihe", "Ma ọ bụ nwaa echiche nke ọzọ"] }
          ],
          tryIt: "Hazie nnwale maka echiche ị họrọ: obere ngwaahịa ị ga-eme, ọnụahịa ị ga-anwa, na ndị mmadụ iri ị ga-enye ya n'izu a. Mgbe nnwale ahụ gasịrị, dee ole zụtara na otu mgbanwe ị ga-eme.",
          youCanNow: "ịnwale echiche azụmahịa n'obere ego na ezi ndị ahịa ma kpebie ihe ị ga-eme ọzọ.",
          quickCheck: [
            { objective: "O2", q: "Kedu ihe kacha egosi na ndị ahịa chọrọ ngwaahịa gị?", options: ["Nne gị kwuru na ọ dị mma", "Ndị enyi kwuru na ha ga-azụta n'ọnwa na-abịa", "Ọ na-amasị gị nke ukwuu", "Ndị na-abụghị ezinụlọ na-akwụ ụgwọ maka ya"], answer: 3, why: "Ezi ire ahịa nye ezi ndị ahịa na-egosi ezi mkpa." },
            { objective: "O2", q: "Nnwale gị rere 3 n'ime 20. Kedu ezigbo nzọụkwụ ọzọ?", options: ["Jụọ ndị zụtara ihe ị ga-agbanwe, gbanwee otu ihe, ma nwalee ọzọ", "Tinye ego nchekwa gị niile n'ịzụta ngwaahịa ọzọ", "Hapụ azụmahịa ruo mgbe ebighị ebi", "Mee ọnụahịa ahụ okpukpu abụọ"], answer: 0, why: "Nnwale na-adịghị ike bụ nkuzi dị ọnụ ala: mụta ihe, gbanwee otu ihe ma nwaa ọzọ." }
          ]
        },
        {
          title: "Ịkpọ ọnụahịa nwere uru na ịkwụ onwe gị ụgwọ",
          objectives: ["O3"],
          minutes: 6,
          goal: "Gbakọọ ọnụ ego otu ngwaahịa, kpọọ ọnụahịa nwere uru, ma kara ego ị ga-akwụ onwe gị.",
          text: [
            "Ọtụtụ ụmụ nwanyị na-ere ọnụ ala karịa ka o kwesịrị, karịsịa mgbe ha na-ere nye ndị agbata obi, ma na-arụsi ọrụ ike n'enweghị ezi uru. Gụọ ọnụ ego niile: ihe e ji esi nri ma ọ bụ ihe e ji arụ ya, ihe nkwakọ, ụgbọ njem, unyi ma ọ bụ gas, data ekwentị, ego ebe ire ahịa, na oge nke gị.",
            "Ọnụ ego otu ngwaahịa = ọnụ ego niile nke otu ngwaahịa e mere kewara site n'ọnụ ọgụgụ ihe ndị e mere. Wee tinye uru. Ọmụmaatụ si Kumasi: Abena mere meat pie 40. Ntụ ọka, anụ, mmanụ na gas efuru GHS 160, akpa GHS 10 na ụgbọ njem GHS 10: GHS 180 n'ozuzu, ya bụ GHS 4.50 maka otu pie. Ọ na-ere ya GHS 7 (ọnụ ego ọmụmaatụ), ya mere pie ọ bụla na-ewete uru GHS 2.50. Lelee na ndị ahịa ga-akwụ ọnụahịa gị site n'ile ndị na-ere ihe yiri ya.",
            "Kwụọ onwe gị ụgwọ. Kpebie ego a kara aka ị ga-ewepụta n'azụmahịa kwa izu, ma hapụ nke fọdụrụ n'azụmahịa maka ngwaahịa na uto. Ọ bụrụ na i were ego niile, azụmahịa agaghị eto; ọ bụrụ na i weghị ihe ọ bụla, ị na-arụ ọrụ n'efu. Dee ihe i were n'akwụkwọ ndekọ gị.",
            "Ọ bụrụ na ọnụahịa gị ekpuchighị ọnụ ego gị, gbanwee ihe: nha dị obere, onye na-ere ngwaahịa ka mma, ịzụta n'ọtụtụ na ndị ọzọ, ma ọ bụ ọnụahịa dị elu maka ihe ka mma."
          ],
          steps: ["Depụta ọnụ ego niile nke otu ngwaahịa e mere, gụnyere ụgbọ njem, mmanụ ọkụ, data na ego ndị ọzọ.", "Kewaa ọnụ ego niile site n'ọnụ ọgụgụ ihe ndị e mere iji nweta ọnụ ego otu ngwaahịa.", "Tinye uru iji kpọọ ọnụahịa; tụnyere ya na ndị na-ere ihe yiri ya.", "Kpebie ego a kara aka kwa izu ị ga-akwụ onwe gị; hapụ nke fọdụrụ n'azụmahịa."],
          words: [["Ọnụ ego otu ngwaahịa", "ọnụ ego niile nke otu ngwaahịa e mere kewara site n'ọnụ ọgụgụ ihe e mere."], ["Uru (profit)", "ego fọdụrụ mgbe a kwụchara ọnụ ego niile."], ["Ịkwụ onwe gị ụgwọ", "ego a kara aka onye nwe azụmahịa na-ewepụta, ka nke fọdụrụ nọrọ maka ngwaahịa na uto."]],
          slides: [
            { title: "Gụọ ọnụ ego niile", bullets: ["Ihe e ji arụ ya na ihe nkwakọ", "Ụgbọ njem, mmanụ ọkụ, data, ego ebe ire ahịa", "Oge nke gị"] },
            { title: "Ọnụ ego otu ngwaahịa", bullets: ["Ọnụ ego niile / ọnụ ọgụgụ ihe e mere", "Abena: GHS 180 / pie 40 = GHS 4.50", "Ọ na-ere GHS 7 = uru GHS 2.50 (ọmụmaatụ)"] },
            { title: "Kwụọ onwe gị ego a kara aka", bullets: ["Were ego a kara aka kwa izu", "Hapụ nke fọdụrụ maka ngwaahịa na uto", "Dee ya n'akwụkwọ ndekọ gị"] },
            { title: "Ọnụahịa dị oke ala?", bullets: ["Nha dị obere ma ọ bụ onye na-ere ngwaahịa ka mma", "Zụta n'ọtụtụ na ndị ọzọ", "Ọnụahịa dị elu maka ihe ka mma"] }
          ],
          tryIt: "Họrọ otu ngwaahịa. Depụta ọnụ ego niile nke otu ngwaahịa e mere, gbakọọ ọnụ ego otu ngwaahịa, kpọọ ọnụahịa nwere uru, ma kpebie ego ole ị ga-akwụ onwe gị kwa izu.",
          youCanNow: "ịkpọ ngwaahịa ọnụahịa nke na-eweta uru ma kwụọ onwe gị ego a kara aka.",
          quickCheck: [
            { objective: "O3", q: "Akpa 20 e mere efuru 10,000 NGN n'ozuzu. Gịnị bụ ọnụ ego otu akpa?", options: ["200 NGN", "20 NGN", "500 NGN", "10,000 NGN"], answer: 2, why: "10,000 kewara site na 20 bụ 500 NGN maka otu akpa." },
            { objective: "O3", q: "Gịnị mere ị ga-eji kwụọ onwe gị ego a kara aka kama iwere ego niile?", options: ["Ka ị ghara inweta ihe ọ bụla", "Ka ego fọdụ n'azụmahịa maka ngwaahịa na uto", "Ka ndị ahịa kwụkwuo ụgwọ", "Ụlọ akụ niile chọrọ ya"], answer: 1, why: "Ego a kara aka na-akwụ gị ụgwọ ma na-ahapụ ego iji mee ka azụmahịa gaa n'ihu ma too." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ịmalite nke ọma",
        questions: [
          { objective: "O1", q: "Echiche A nwere akara 11, echiche B nwere 7, mana echiche A anaghị amasị gị ma ọlị. Gịnị ka ị ga-eme?", options: ["Họrọ mgbe niile nke nwere akara kacha elu", "Ahọrọla nke ọ bụla ma kwụsị", "Nye akara ọzọ ruo mgbe B meriri", "Jiri akara ndị ahụ chee echiche, jụọkwa ma ọ ga-atọ gị ụtọ"], answer: 3, why: "Akara na-enyere gị aka iche echiche; ọrụ ịtọ gị ụtọ dịkwa mkpa." },
          { objective: "O2", q: "Onye ka ị ga-enye obere ngwaahịa nnwale gị?", options: ["Opekata mpe ndị mmadụ iri na-abụghị ezinụlọ gị dị nso", "Naanị di gị", "Naanị ezigbo enyi gị", "Ọ dịghị onye; naanị chee echiche"], answer: 0, why: "Ezi ndị ahịa na-aza n'eziokwu site n'ihe ha zụtara." },
          { objective: "O2", q: "Gịnị mere ị ga-eji nwalee n'obere ngwaahịa?", options: ["Iji mefuo ego karịa", "Iji mụta ihe tupu i tinye ego buru ibu", "N'ihi na ọtụtụ ngwaahịa megidere iwu", "Iji zere ndị ahịa"], answer: 1, why: "Obere nnwale na-efu obere ego ma na-egosi ma ndị mmadụ ga-azụta." },
          { objective: "O3", q: "Kedu ọnụ ego ọtụtụ ndị na-ere ahịa na-echefu?", options: ["Ihe ndị bụ isi e ji esi nri", "Ngwaahịa ahụ n'onwe ya", "Ụgbọ njem, mmanụ ọkụ, data na oge nke ha", "Ọnụahịa ire"], answer: 2, why: "Obere ọnụ ego dị ka ụgbọ njem na mmanụ ọkụ na-agbakọ ma rie uru." },
          { objective: "O3", q: "Ọnụ ego otu ngwaahịa bụ GHS 4.50, ọnụahịa bụ GHS 7. Gịnị bụ uru otu ngwaahịa?", options: ["GHS 11.50", "GHS 7", "GHS 4.50", "GHS 2.50"], answer: 3, why: "7 wepụ 4.50 bụ 2.50." }
        ]
      }
    },
    {
      name: "Isi 2: Ịto n'ike",
      lessons: [
        {
          title: "Ịchọta oge: ezinụlọ, nlekọta na enyemaka",
          objectives: ["O4"],
          minutes: 5,
          goal: "Dee atụmatụ oge kwa izu nwere oge azụmahịa, ọrụ nlekọta na onye na-enyere aka.",
          text: [
            "N'ọtụtụ ebe, ụmụ nwanyị na-arụ ọtụtụ ọrụ nlekọta a na-adịghị akwụ ụgwọ n'ụlọ: isi nri, ihicha ụlọ, ịga mmiri, na ilekọta ụmụaka, ndị ọrịa na ndị okenye. UN Women kwuru na nke a na-ahapụrụ ụmụ nwanyị obere oge maka ọrụ a na-akwụ ụgwọ. Azụmahịa chọkwara oge, ya mere hazie ya.",
            "See izu: ụbọchị asaa na ụtụtụ, ehihie na anyasị. Kaa akara ọrụ nlekọta, wee kaa oge azụmahịa gị: ịzụta ngwaahịa, ime ya, ire ya, ịza ozi na ndekọ. Chọọ ebe ha na-agbakọ na ebe oge tọgbọrọ chakoo.",
            "Wee rịọ maka enyemaka. Gwa di gị ma ọ bụ onye gị na ya bi, ụmụaka toro eto, nwanne nwanyị ma ọ bụ onye agbata obi okwu maka ikerịta ọrụ dị ka ịga mmiri, ịkpọga ụmụaka ụlọ akwụkwọ ma ọ bụ isi nri n'ụbọchị ahịa jupụtara. Ụfọdụ ụmụ nwanyị na-agbanwerịta ilekọta ụmụaka na nne ndị ọzọ, ma ọ bụ na-arụ ọrụ nso ụlọ n'ụbọchị ụfọdụ. Ọmụmaatụ: Mariam nọ na Yaoundé na-ere ahịa na Tuzde, Fraịde na Satọde; nwanne ya nwanyị na-ewere ụmụaka n'ụtụtụ ndị ahụ, Mariam na-edozikwa ya isi n'ọnọdụ ya.",
            "Gosi ezinụlọ gị atụmatụ ahụ ma kwekọrịta na ya. Lekọtakwa onwe gị: izu ike na ahụike na-eme ka azụmahịa gaa n'ihu."
          ],
          steps: ["See ụbọchị asaa nwere ụtụtụ, ehihie na anyasị.", "Kaa akara ọrụ nlekọta na ọrụ ụlọ.", "Kaa akara oge azụmahịa: ịzụta, ime, ire, ozi, ndekọ.", "Chọta ebe ha na-agbakọ ma rịọ onye ezinụlọ ma ọ bụ onye enyemaka ka o kerịta ọrụ.", "Kwekọrịtanụ n'atụmatụ ahụ ma tinye oge izu ike."],
          words: [["Ọrụ nlekọta a na-adịghị akwụ ụgwọ", "ọrụ n'ụlọ a na-adịghị akwụ ụgwọ, dị ka isi nri, ihicha ụlọ na ilekọta ụmụaka, ndị ọrịa na ndị okenye."], ["Ịgbanwerịta ilekọta ụmụaka", "nne na-eme otu n'otu ilekọta ụmụaka ibe ha."]],
          slides: [
            { title: "Oge gị bụ akụkụ nke azụmahịa", bullets: ["Ụmụ nwanyị na-arụ ọtụtụ ọrụ nlekọta n'efu", "Azụmahịa chọkwara oge", "Ya mere hazie ya"] },
            { title: "See izu gị", bullets: ["Ụbọchị asaa: ụtụtụ, ehihie, anyasị", "Kaa akara ọrụ nlekọta", "Kaa akara oge azụmahịa", "Chọta ebe ha na-agbakọ"] },
            { title: "Rịọ maka enyemaka", bullets: ["Di gị, ụmụaka toro eto, nwanne nwanyị, onye agbata obi", "Kerịta ịga mmiri, ụlọ akwụkwọ, isi nri", "Gbanwerịta ilekọta ụmụaka na nne ndị ọzọ"] },
            { title: "Kwekọrịtanụ na ya ọnụ", bullets: ["Gosi ezinụlọ gị atụmatụ ahụ", "Tinye izu ike na ahụike"] }
          ],
          tryIt: "Dee atụmatụ oge gị kwa izu nwere ọrụ nlekọta na oge azụmahịa. Kaa akara otu ebe ha na-agbakọ, dee onye nwere ike inyere aka na ya, ma gwa onye ahụ okwu n'izu a.",
          youCanNow: "ịhazi izu gị ka azụmahịa gị na ọrụ nlekọta gị dabara, na enyemaka ị chọrọ.",
          quickCheck: [
            { objective: "O4", q: "Ụbọchị ahịa gị na oge ịkpọga ụmụaka ụlọ akwụkwọ na-agbakọ. Kedu ezigbo nzọụkwụ?", options: ["Rịọ onye ezinụlọ ma ọ bụ nne ọzọ ka o kerịta ịkpọga ha ụlọ akwụkwọ", "Mechie azụmahịa", "Agala ahịa ọzọ ruo mgbe ebighị ebi", "Hapụ ụmụaka naanị ha"], answer: 0, why: "Ikerịta ọrụ na-ewepụta oge maka azụmahịa n'emerụghị ezinụlọ ahụ." },
            { objective: "O4", q: "Gịnị mere ị ga-eji gosi ezinụlọ gị atụmatụ oge gị?", options: ["Ịrịọ ikike ịdị ndụ", "Ka ha kwekọrịta ma nyere aka", "Ka ha were ego gị", "Ọ dịghị mkpa"], answer: 1, why: "Mgbe ezinụlọ kwekọrịtara n'atụmatụ ahụ, ha na-enyekarị aka." }
          ],
          sources: [UNWOMEN]
        },
        {
          title: "Ịchọta ego na enyemaka n'enweghị nsogbu",
          objectives: ["O5"],
          minutes: 6,
          goal: "Lelee na mbinye ego, onyinye ego ma ọ bụ mmemme bụ eziokwu ma na-achịkwa ego gị.",
          text: [
            "E nwere mmemme maka ụmụ nwanyị na obere azụmahịa. Ọmụmaatụ: Women Enterprise Fund nke Kenya, ego gọọmentị maka azụmahịa ụmụ nwanyị; SMEDAN nke Nigeria, nke ndebanye aha n'efu ya na-emeghe mmemme dị ka Women In Self-employment Programme; DER/FJ nke Senegal, nke na-enye ọzụzụ, ndebanye aha na ego maka ụmụ nwanyị na ndị ntorobịa; Ghana Enterprises Agency; na AFAWA nke African Development Bank, nke na-arụ ọrụ na ụlọ akụ na ndị na-agbazinye ego ka ha gbazinyekwuo ụmụ nwanyị ego. E nwere ihe ọmụmụ nke ya maka otu nchekwa ego na microfinance.",
            "Aha, iwu na ụbọchị mmeghe na-agbanwe, ya mere lelee mgbe niile na weebụsaịtị gọọmentị ma ọ bụ ọfịs mmemme ahụ. Ndị aghụghọ na-eme ka ha na-enye ụmụ nwanyị onyinye ego na mbinye ego ma rịọ ego \"nhazi\" ma ọ bụ \"ndebanye aha\" tupu. Ezi mmemme na-ekwu ego ọ na-anara na weebụsaịtị gọọmentị ya; akwụla onye ị na-amaghị ego mgbe ọ bụla iji nweta onyinye ego.",
            "Chịkwaa ego gị. Nwee akaụntụ ma ọ bụ ahịrị mobile money n'aha gị, ma debe PIN gị na nzuzo n'ebe onye ọ bụla nọ, gụnyere ezinụlọ. Ezi ụlọ ọrụ anaghị arịọ PIN gị mgbe ọ bụla. Ọ bụrụ na mmadụ ji ike ma ọ bụ iyi egwu were ego i nwetara, nke ahụ bụ mmegbu; gwa onye ị tụkwasịrị obi, otu ụmụ nwanyị ma ọ bụ ebe enyemaka dị n'obodo gị.",
            "Tupu i gbazite ego, mara ego niile ị ga-akwụghachi, mgbe ị ga-akwụ ya, na ihe ga-eme ma ọ bụrụ na i gbuo oge. Gbazite ego maka ihe ga-ewete ego, ọ bụghị iji kpuchie mmefu ụlọ kwa ụbọchị."
          ],
          steps: ["Chọta weebụsaịtị gọọmentị ma ọ bụ ọfịs mmemme ahụ.", "Lelee ihe ọ na-enye, onye nwere ike itinye akwụkwọ, ụbọchị mmeghe ya na ego ọ na-anara.", "Jụ onye ọ bụla na-arịọ ka i zipu ego n'akaụntụ ndị ị na-amaghị.", "Nwee ahịrị mobile money ma ọ bụ akaụntụ n'aha gị na PIN nzuzo.", "Tupu i gbazite ego, dee ego niile ị ga-akwụghachi, mgbe, na iwu maka igbu oge."],
          words: [["Onyinye ego (grant)", "ego e nyere maka otu ebumnuche nke a na-akwụghachighị."], ["Mbinye ego (loan)", "ego e gbaziri nke a ga-akwụghachi, na-abụkarị na ego mgbakwunye (interest)."], ["Aghụghọ ego tupu (advance-fee scam)", "wayo ebe mmadụ na-ekwe nkwa ego mana na-arịọ ka i buru ụzọ kwụọ ego."]],
          slides: [
            { title: "Enyemaka maka azụmahịa ụmụ nwanyị", bullets: ["Kenya: Women Enterprise Fund", "Nigeria: mmemme SMEDAN", "Senegal: DER/FJ; Ghana: Ghana Enterprises Agency", "AfDB AFAWA: na-arụ ọrụ site n'ụlọ akụ na ndị na-agbazinye ego"] },
            { title: "Lelee na ọ bụ eziokwu", bullets: ["Naanị weebụsaịtị gọọmentị ma ọ bụ ọfịs", "Onye nwere ike itinye akwụkwọ, ụbọchị na ego", "Akwụla onye ị na-amaghị ego iji nweta onyinye ego"] },
            { title: "Chịkwaa ego gị", bullets: ["Akaụntụ ma ọ bụ ahịrị mobile money n'aha gị", "PIN na nzuzo n'ebe onye ọ bụla nọ, ọbụna ezinụlọ", "Ezi ụlọ ọrụ anaghị arịọ PIN gị"] },
            { title: "Tupu i gbazite ego", bullets: ["Ego niile ị ga-akwụghachi na mgbe", "Ihe ga-eme ma i gbuo oge", "Gbazite iji nweta ego, ọ bụghị maka mmefu kwa ụbọchị"] }
          ],
          tryIt: "Họrọ otu mmemme site na nkuzi a ma ọ bụ nke ị maara. Chọta weebụsaịtị gọọmentị ya ma ọ bụ ọfịs ya, ma dee ihe ọ na-enye, onye nwere ike itinye akwụkwọ, ma ọ ghere oghe ugbu a, na ụbọchị i lelere ya.",
          youCanNow: "ịchọta enyemaka maka azụmahịa gị, ịlele na ọ bụ eziokwu, na ịchịkwa ego nke gị.",
          quickCheck: [
            { objective: "O5", q: "Ozi kwuru na i meriri onyinye ego azụmahịa ụmụ nwanyị; buru ụzọ kwụọ 5,000 KES \"ego nhazi\". Gịnị bụ nke a?", options: ["Nzọụkwụ mmemme nkịtị", "Aghụghọ; lelee weebụsaịtị gọọmentị ma akwụla onye ị na-amaghị", "Mbinye ego ị ga-anabatarịrị", "Ụtụ isi"], answer: 1, why: "Ịrịọ ego tupu e nye onyinye ego bụ aghụghọ ego tupu a ma ama." },
            { objective: "O5", q: "Onye kwesịrị ịmara PIN mobile money gị?", options: ["Di gị", "Onye ahịa gị kacha mma", "Onye ejenti kpọrọ gị", "Naanị gị"], answer: 3, why: "PIN gị na-echebe ego gị; ezi ụlọ ọrụ anaghị arịọ ya mgbe ọ bụla." }
          ],
          sources: [WEF, SMEDAN, DERFJ, GEA, AFAWA]
        },
        {
          title: "Njikọ, ndị ndụmọdụ na atụmatụ uto ọnwa isii",
          objectives: ["O6"],
          minutes: 5,
          goal: "Dee ebumnuche atọ a pụrụ ịtụ atụ maka ọnwa isii ma kpọọ aha otu onye ndụmọdụ ma ọ bụ otu ị ga-akpọtụrụ.",
          text: [
            "Ọtụtụ ụmụ nwanyị na-eto ngwa ngwa mgbe ha na ndị ọzọ jikọrọ aka: onye ndụmọdụ meworo ya, njikọ azụmahịa ụmụ nwanyị, njikọ ndị ahịa ma ọ bụ ndị otu ọrụ, otu mmekọ (cooperative), chamber of commerce ma ọ bụ ebe enyemaka azụmahịa. Ha na-ekerịta ndị ahịa, ndị na-ere ngwaahịa, ndụmọdụ na obi ike.",
            "Onye ndụmọdụ (mentor) bụ onye nwere ahụmahụ karịa gị na-enye gị ndụmọdụ. Rịọ nwanyị na-amasị gị maka nkeji 20 nke ndụmọdụ, jiri ajụjụ abụọ doro anya. Sonye n'otu ebe ndị ahịa gị ma ọ bụ ndị na-ere gị ngwaahịa na-ezukọ. Gaa ngosi ahịa (trade fair) ma ọ bụ ụbọchị ahịa n'obodo ka ukwuu mgbe ị nwere ike.",
            "Wee dee ebumnuche atọ maka ọnwa isii na-abịa. Mee ka nke ọ bụla bụrụ nke a pụrụ ịtụ atụ, nwere nọmba na ụbọchị: \"Ree karama ncha 60 kwa izu tupu ngwụcha March\", \"Chekwaa GHS 500 maka igwe ịkwa akwa nke abụọ tupu June\" (ọnụ ego ọmụmaatụ), \"Nweta ụlọ ahịa ise ọhụrụ ga na-azụ ihe n'aka m tupu May\". Lelee ebumnuche gị otu ugboro n'ọnwa ma dee ihe i mere.",
            "Ọmụmaatụ: Ngozi nọ na Enugu, onye na-ere akpa Ankara, sonyere n'otu ụmụ nwanyị ndị ahịa, chọta onye ndụmọdụ na-ezipụ akpa na mba ọzọ, ma dee ebumnuche maka ire ahịa, nchekwa ego na ebe ire ahịa mbụ ya na ngosi ahịa."
          ],
          steps: ["Depụta ndị mmadụ na otu ndị nwere ike inyere aka: ndị ndụmọdụ, njikọ, otu mmekọ, ebe enyemaka.", "Họrọ otu ị ga-akpọtụrụ n'ọnwa a, jiri ajụjụ abụọ doro anya.", "Dee ebumnuche atọ, nke ọ bụla nwere nọmba na ụbọchị.", "Lelee ebumnuche gị otu ugboro n'ọnwa ma dee ihe i mere."],
          words: [["Onye ndụmọdụ (mentor)", "onye nwere ahụmahụ na-enye gị ndụmọdụ na nkwado."], ["Ebumnuche a pụrụ ịtụ atụ", "ebumnuche nwere nọmba na ụbọchị, ka ị hụ ma i ruru ya."], ["Njikọ (association)", "otu ndị nọ n'otu ọrụ ma ọ bụ n'otu ọnọdụ na-akwado ibe ha."]],
          slides: [
            { title: "Too na ndị ọzọ", bullets: ["Ndị ndụmọdụ na njikọ ụmụ nwanyị", "Otu ndị ahịa, otu mmekọ, chamber", "Ebe enyemaka azụmahịa"] },
            { title: "Chọta onye ndụmọdụ", bullets: ["Nwanyị na-amasị gị", "Rịọ nkeji 20", "Bịa na ajụjụ abụọ doro anya"] },
            { title: "Ebumnuche atọ a pụrụ ịtụ atụ", bullets: ["Nke ọ bụla nwere nọmba na ụbọchị", "Ire ahịa, nchekwa ego, ndị ahịa ọhụrụ", "Lelee ha otu ugboro n'ọnwa"] }
          ],
          tryIt: "Ọrụ ikpeazụ: dee atụmatụ azụmahịa gị nke otu peeji nwere echiche gị na akara ya, nsonaazụ nnwale, ọnụahịa na uru, ego ị na-akwụ onwe gị, atụmatụ oge gị kwa izu, otu nhọrọ enyemaka i lelere, ebumnuche atọ maka ọnwa isii na otu onye ndụmọdụ ma ọ bụ otu ị ga-akpọtụrụ.",
          youCanNow: "iwulite njikọ ma dee atụmatụ uto ọnwa isii nwere ebumnuche a pụrụ ịtụ atụ.",
          quickCheck: [
            { objective: "O6", q: "Kedu ebumnuche a pụrụ ịtụ atụ?", options: ["\"Mee nke ọma karị\"", "\"Bụrụ onye a ma ama\"", "\"Ree uwe 40 kwa ọnwa tupu ngwụcha June\"", "\"Rụsie ọrụ ike\""], answer: 2, why: "O nwere nọmba na ụbọchị, ya mere ị nwere ike ilele ma i ruru ya." },
            { objective: "O6", q: "Kedu otu ị ga-esi rịọ onye nwere ike ịbụ onye ndụmọdụ maka enyemaka?", options: ["Rịọ nkeji 20 jiri ajụjụ abụọ doro anya", "Rịọ ya ka o nye gị ego", "Rịọ ya ka ọ rụọ azụmahịa gị", "Arịọla mgbe ọ bụla; chere ya"], answer: 0, why: "Arịrịọ dị mkpụmkpụ ma doo anya na-akwanyere oge ya ùgwù ma na-enweta ndụmọdụ bara uru." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Ịto n'ike",
        questions: [
          { objective: "O4", q: "Gịnị bụ ọrụ nlekọta a na-adịghị akwụ ụgwọ?", options: ["Ọrụ n'ụlọ akụ", "Ọrụ n'ụlọ a na-adịghị akwụ ụgwọ, dị ka isi nri na ilekọta ụmụaka", "Ire ahịa n'ahịa", "Ọrụ gọọmentị"], answer: 1, why: "Ọrụ nlekọta a na-adịghị akwụ ụgwọ bụ ọrụ ụlọ na nlekọta na-ewe oge mana anaghị ewete ụgwọ." },
          { objective: "O4", q: "Atụmatụ oge kwa izu kwesịrị igosi:", options: ["Naanị oge azụmahịa", "Naanị izu ike", "Oge azụmahịa, ọrụ nlekọta na onye na-enyere aka", "Naanị oge ụlọ akwụkwọ ụmụaka gị"], answer: 2, why: "Ịhụ ha niile ọnụ na-egosi ebe ha na-agbakọ na ebe a chọrọ enyemaka." },
          { objective: "O5", q: "Ebee ka ị ga-elele ma mmemme mbinye ego ụmụ nwanyị bụ eziokwu?", options: ["Weebụsaịtị gọọmentị ya ma ọ bụ ọfịs ya", "Ozi e zigaara gị site n'aka onye ọzọ", "Onye ị na-amaghị n'ekwentị", "Okwu e dere na soshal midia"], answer: 0, why: "Naanị isi iyi gọọmentị na-egosi ezi mmemme ahụ, ụbọchị ya na ego ọ na-anara." },
          { objective: "O5", q: "Tupu i gbazite ego, gịnị ka ị ga-amarịrị?", options: ["Naanị aha onye na-agbazinye ego", "Naanị otu ọ ga-esi bịa ngwa ngwa", "Ọ dịghị ihe; naanị bịanye aka", "Ego niile ị ga-akwụghachi, mgbe, na ihe ga-eme ma i gbuo oge"], answer: 3, why: "Ịmara ọnụ ego niile na iwu igbu oge na-echebe gị pụọ n'ụgwọ ị na-agaghị enwe ike ịkwụ." },
          { objective: "O6", q: "Ugboro ole ka ị ga-elele ebumnuche ọnwa isii gị?", options: ["Ọ dịghị mgbe", "Otu ugboro n'ọnwa", "Naanị na ngwụcha ọnwa isii", "Kwa afọ iri"], answer: 1, why: "Ilele kwa ọnwa na-egosi ọganihu n'oge, ka i nwee ike ịgbanwe ụzọ." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Ụmụ Nwanyị Ndị Ọchụnta Ego: Ịmalite na Ịzụlite Azụmahịa",
    questions: [
      { objective: "O1", q: "Ezigbo azụmahịa maka gị bụ nke:", options: ["Dabara nka gị, oge gị, ego gị na ihe ndị mmadụ chọrọ n'obodo", "Onye agbata obi gị na-eme nke ọma ugbu a", "Chọrọ ego kacha ukwuu", "A kacha mara aha ya"], answer: 0, why: "Azụmahịa dabara gị na ahịa gị nwere ike ịdịte aka." },
      { objective: "O1", q: "Ego mmalite pụtara:", options: ["Uru gị kwa izu", "Ego ị chọrọ iji malite", "Ọnụahịa ndị ahịa na-akwụ", "Mbinye ego ị ga-ewerịrị"], answer: 1, why: "Ọ bụ ego maka ngwa ọrụ, ngwaahịa mbụ, ebe ire ahịa ma ọ bụ akwụkwọ ikike." },
      { objective: "O1", q: "Gịnị mere ị ga-eji nye echiche ọ bụla akara n'otu ihe anọ ahụ?", options: ["Iji mee ka ọ dị ogologo", "Iji mee ka echiche ọ bụla merie", "Ka i nwee ike ịtụnyere echiche ndị ahụ n'ụzọ ziri ezi", "N'ihi na ụlọ akụ chọrọ ya"], answer: 2, why: "Otu akara ahụ maka echiche ọ bụla na-eme ka ntụnyere ahụ ziri ezi." },
      { objective: "O2", q: "\"Aga m azụta n'izu na-abịa\" site n'aka enyi bụ:", options: ["Ire ahịa", "Nkwekọrịta iwu", "Mbinye ego", "Ọ bụbeghị ire ahịa; gụọ ezi ihe a zụtara"], answer: 3, why: "Naanị ezi ịzụ ahịa na-egosi mkpa." },
      { objective: "O2", q: "N'oge nnwale, ị na-ede:", options: ["Ole zụtara, ọnụahịa, na ihe masịrị ha na ihe ha rịọrọ", "Naanị ọnụ ego gị", "Ọ dịghị ihe", "Naanị aha ndị enyi gị"], answer: 0, why: "Ndetu ndị a na-egosi mkpa na ihe a ga-eme ka ọ ka mma." },
      { objective: "O2", q: "Mgbe nnwale gasịrị, ị nwere ike:", options: ["Naanị ịhapụ ya", "Ịga n'ihu, ịgbanwe otu ihe, ma ọ bụ ịnwa echiche nke ọzọ", "Naanị itinye ego nchekwa gị niile", "Naanị ime ọnụahịa okpukpu abụọ"], answer: 1, why: "Nnwale na-enyere gị aka ịhọrọ nzọụkwụ ọzọ nke ọma." },
      { objective: "O3", q: "Ọnụ ego otu ngwaahịa bụ:", options: ["Ọnụahịa ị na-atụ anya ya", "Ọnụahịa onye agbata obi gị", "Ọnụ ego niile nke ngwaahịa e mere kewara site n'ọnụ ọgụgụ ihe e mere", "Uru gị"], answer: 2, why: "Ikewa ọnụ ego niile site n'ọnụ ọgụgụ ihe e mere na-enye ọnụ ego nke ọ bụla." },
      { objective: "O3", q: "Ngwaahịa e mere efuru 30,000 XAF ma mepụta ihe 60. Ọnụ ego otu ngwaahịa bụ:", options: ["600 XAF", "60 XAF", "1,800 XAF", "500 XAF"], answer: 3, why: "30,000 kewara site na 60 bụ 500 XAF." },
      { objective: "O3", q: "Ọ bụrụ na ọnụahịa gị ekpuchighị ọnụ ego gị, ị nwere ike:", options: ["Ịgbanwe nha, onye na-ere ngwaahịa, ịzụta n'ọtụtụ na ndị ọzọ ma ọ bụ ịkwalite ọnụahịa maka ihe ka mma", "Ịnọgide na-ere n'ọnwụ ruo mgbe ebighị ebi", "Ịkwụsị idekọ ọnụ ego", "Ịgbazite ego iji kpuchie ya kwa izu"], answer: 0, why: "Ịgbanwe ọnụ ego ma ọ bụ ọnụahịa bụ otu ị ga-esi laghachi n'uru." },
      { objective: "O3", q: "Ịkwụ onwe gị ego a kara aka kwa izu pụtara:", options: ["Iwere ego niile", "Ọ dịghị mgbe ị ga-ewere ihe ọ bụla", "Iwere ego a kara aka ma hapụ nke fọdụrụ maka azụmahịa", "Ịkwụ ndị ahịa gị ụgwọ"], answer: 2, why: "Ego a kara aka na-akwụ gị ụgwọ ma na-eme ka azụmahịa nwee ego." },
      { objective: "O4", q: "UN Women kwuru na ọrụ nlekọta a na-adịghị akwụ ụgwọ:", options: ["Onye ọ bụla na-arụ ya n'otu ọkwa", "Na-ahapụrụ ọtụtụ ụmụ nwanyị obere oge maka ọrụ a na-akwụ ụgwọ", "Adịghị adị", "Gọọmentị na-akwụ ụgwọ ya"], answer: 1, why: "Ụmụ nwanyị na-arụ ọtụtụ ọrụ nlekọta a na-adịghị akwụ ụgwọ, nke na-egbochi oge ha maka azụmahịa." },
      { objective: "O4", q: "Ịgbanwerịta ilekọta ụmụaka bụ:", options: ["Nne na-eme otu n'otu ilekọta ụmụaka ibe ha", "Ire uwe ụmụaka", "Ego ụlọ akwụkwọ", "Akaụntụ ụlọ akụ"], answer: 0, why: "Ime otu n'otu na-ewepụta oge maka ọrụ nne ọ bụla." },
      { objective: "O4", q: "Atụmatụ oge gị kwesịkwara itinye:", options: ["Enweghị izu ike ọ bụla", "Naanị ọrụ", "Atụmatụ ndị agbata obi gị", "Izu ike na ahụike"], answer: 3, why: "Izu ike na-eme ka gị na azụmahịa gaa n'ihu." },
      { objective: "O5", q: "Onyinye ego (grant) bụ:", options: ["Mbinye ego nwere interest dị elu", "Ego e nyere maka otu ebumnuche nke ị na-akwụghachighị", "Ego ị na-ebu ụzọ kwụọ", "Ụtụ isi"], answer: 1, why: "A naghị akwụghachi onyinye ego; a na-akwụghachi mbinye ego." },
      { objective: "O5", q: "Mmadụ na-arịọ ego tupu o nye gị onyinye ego ụmụ nwanyị. O yikarịrị ka ọ bụ:", options: ["Nzọụkwụ nkịtị", "Iwu ụlọ akụ", "Aghụghọ ego tupu", "Ụtụ isi gọọmentị"], answer: 2, why: "Ezi mmemme na-ebipụta ego ha na-anara na weebụsaịtị gọọmentị ha; ndị ị na-amaghị na-arịọ ego bụ ndị aghụghọ." },
      { objective: "O5", q: "Onye kwesịrị ijide PIN mobile money gị?", options: ["Naanị gị", "Onye gị na ya bi", "Onye kpọrọ gị si n'ụlọ ọrụ ahụ", "Nwa gị nke okenye"], answer: 0, why: "PIN gị na-echebe ego gị; debe ya na nzuzo n'ebe onye ọ bụla nọ." },
      { objective: "O5", q: "AFAWA, nke African Development Bank, na-eme nke ka ukwuu:", options: ["Ịgbazinye nwanyị ọ bụla ego site na WhatsApp", "Ịnara ụmụ nwanyị ego site n'ekwentị", "Ịnọchi otu nchekwa ego niile", "Ịrụ ọrụ na ụlọ akụ na ndị na-agbazinye ego ka ha gbazinyekwuo ụmụ nwanyị ego"], answer: 3, why: "AFAWA na-arụ ọrụ site n'ụlọ ọrụ ego iji mee ka mbinye ego nye ụmụ nwanyị bawanye." },
      { objective: "O6", q: "Onye ndụmọdụ (mentor) bụ:", options: ["Onye ahịa ji gị ụgwọ", "Onye nwere ahụmahụ na-enye ndụmọdụ", "Onye ọrụ ụtụ isi", "Mbinye ego"], answer: 1, why: "Onye ndụmọdụ na-ekerịta ahụmahụ ya iji nyere gị aka ito." },
      { objective: "O6", q: "Kedu ebumnuche nwere nọmba na ụbọchị?", options: ["\"Too ka ukwuu\"", "\"Bụrụ onye kacha mma\"", "\"Chekwaa NGN 50,000 maka friza tupu July\"", "\"Nwalekwuo ike\""], answer: 2, why: "Nọmba na ụbọchị na-eme ka ebumnuche ahụ bụrụ nke a pụrụ ịtụ atụ." },
      { objective: "O6", q: "Isonye na njikọ ụmụ nwanyị ma ọ bụ njikọ ndị ahịa nwere ike inyere gị aka:", options: ["Ịchọta ndị ahịa, ndị na-ere ngwaahịa, ndụmọdụ na nkwado", "Ịzere ndị ahịa niile", "Ịhapụ ndekọ gị", "Ịghara ịchọ atụmatụ mgbe ọ bụla"], answer: 0, why: "Otu na-ekerịta njikọ, ihe ọmụma na agbamume." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [0, 3, 6, 7, 10, 14, 15, 18] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      { name: "Echiche a họrọ", objective: "O1", notYet: "Otu echiche na-enweghị akara, ma ọ bụ akara na-enweghị ihe kpatara ya.", meets: "Echiche abụọ ma ọ bụ atọ nwere akara maka nka, oge, ego na mkpa, na ihe mere nke meriri ji dabara.", exceeds: "O dekwara otu echiche ahụ nwere ike isi too ma emechaa." },
      { name: "Echiche a nwalere", objective: "O2", notYet: "Ọ dịghị nnwale, ma ọ bụ naanị ezinụlọ ka a jụrụ.", meets: "E nyere opekata mpe ezi ndị ahịa iri obere ngwaahịa, e dekwara ire ahịa, ọnụahịa na otu mgbanwe.", exceeds: "E mere mgbanwe ahụ ma nwalee ya ugboro nke abụọ." },
      { name: "Ọnụahịa, uru na ụgwọ onwe", objective: "O3", notYet: "Ọnụ ego ụfọdụ adịghị, mgbakọ ezighi ezi, ma ọ bụ enweghị ego a ga-akwụ onwe gị.", meets: "E depụtara ọnụ ego niile, ọnụ ego otu ngwaahịa ziri ezi, ọnụahịa nwere uru, na ego a kara aka kwa izu a ga-akwụ onwe gị.", exceeds: "E tụnyere ọnụahịa ya na ndị na-ere ihe yiri ya, nwee atụmatụ ma ọnụ ego rịgoo." },
      { name: "Atụmatụ oge na enyemaka", objective: "O4", notYet: "Ọ dịghị atụmatụ oge, ma ọ bụ a kpọghị aha onye ga-enyere aka.", meets: "Atụmatụ kwa izu nwere oge azụmahịa, ọrụ nlekọta na onye na-enyere aka, nke ya na opekata mpe otu onye kwekọrịtara.", exceeds: "O nwere oge izu ike na onye enyemaka ọzọ ma onye mbụ ahụ adịghị." },
      { name: "E lelere ego na enyemaka n'enweghị nsogbu", objective: "O5", notYet: "Nhọrọ si n'ozi e zigaara site n'aka onye ọzọ ma ọ bụ onye a na-amaghị, ma ọ bụ e kesara PIN.", meets: "E lelere otu nhọrọ na weebụsaịtị gọọmentị ya, na onye nwere ike itinye akwụkwọ na ụbọchị e lelere ya; ego dị n'aha onye ahụ n'onwe ya.", exceeds: "O dekwara ego niile a ga-akwụghachi, mgbe, na iwu igbu oge maka mbinye ego ọ bụla." },
      { name: "Ebumnuche na njikọ", objective: "O6", notYet: "Ebumnuche edoghị anya, ma ọ bụ a kpọghị aha onye ndụmọdụ ma ọ bụ otu.", meets: "Ebumnuche atọ nwere nọmba na ụbọchị, na otu onye ndụmọdụ ma ọ bụ otu a ga-akpọtụrụ.", exceeds: "E kpọtụrụla onye ahụ, a hazikwala nlele mbụ kwa ọnwa." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ndị na-amụ ihe malitere ma ọ bụ nwalere azụmahịa, ma ọ bụ tinyere ngwaahịa ọhụrụ, n'ime ụbọchị 30 (nnyocha nsochi)",
      "Ndị na-amụ ihe kwuru na ha na-akwụ onwe ha ego a kara aka ma na-edebe ndekọ mgbe ọnwa atọ gasịrị",
      "Ndị na-amụ ihe ruru opekata mpe otu n'ime ebumnuche ọnwa isii ha, ma kwuo na ha atụfughị ego n'aghụghọ onyinye ego ma ọ bụ mbinye ego"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Akwụkwọ, mkpịsị ode na igwe mgbakọ (igwe mgbakọ dị n'ekwentị dị mma)",
      "Ekwentị iji lelee weebụsaịtị gọọmentị nke mmemme",
      "Ihe e ji eme obere ngwaahịa nnwale (nhọrọ onye na-amụ ihe n'onwe ya)",
      "Ihe dị ka nkeji 60 n'ozuzu, n'oge nkenke, gbakwunyere otu izu ma ọ bụ abụọ iji mee nnwale ahụ"
    ],
    facilitatorNotes: [
      "Mee ihe ọmụmụ a na otu ụmụ nwanyị, otu nchekwa ego ma ọ bụ otu mmekọ; zukọọ n'oge dabara nne, ma kwe ka ụmụ ọhụrụ nọrọ n'ime ụlọ ahụ.",
      "Tupu ihe ọmụmụ a, lelee na weebụsaịtị gọọmentị mmemme ụmụ nwanyị na obere azụmahịa ndị ghere oghe na mba gị, ma bịa na adreesị ha.",
      "Ejila mgbe ọ bụla rịọ ndị na-amụ ihe ka ha kesaa PIN, ego dị n'akaụntụ ma ọ bụ nkọwa akaụntụ. Mụọ ịhụ aghụghọ onyinye ego na mbinye ego site n'ozi e chepụtara echepụta.",
      "Ụfọdụ ndị na-amụ ihe nwere ike na-enwe nrụgide ma ọ bụ onye na-achịkwa ego ha n'ụlọ; kwuo maka ya nke ọma, na nzuzo, ma mara ebe enyemaka ụmụ nwanyị dị n'obodo ị ga-ezigara ha.",
      "Jiri rubric tụọ akara ọrụ ikpeazụ, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};
