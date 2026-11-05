"use strict";

// Koach Learn course (Igbo translation of agriculture-africa/agri-farm-accounting-investment.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

const CBK = { name: "Central Bank of Kenya (Ụlọ Akụ Etiti nke Kenya): ụlọ akụ nwere ikike, ụlọ akụ microfinance na ndị na-enye mbinye ego dijitalụ", url: "https://www.centralbank.go.ke" };
const CBN = { name: "Central Bank of Nigeria (Ụlọ Akụ Etiti nke Naịjirịa): ụlọ akụ nwere ikike na ụlọ akụ microfinance", url: "https://www.cbn.gov.ng" };
const BCEAO = { name: "BCEAO, Ụlọ Akụ Etiti nke Mba Ọdịda Anyanwụ Afrịka: iwu maka ụlọ akụ na microfinance na mba ndị na-eji XOF", url: "https://www.bceao.int" };

module.exports = {
  id: "agri-farm-accounting-investment-ig",
  lang: "ig",
  translationOf: "agri-farm-accounting-investment",
  category: "Agriculture (Africa)",
  name: "Ndekọ Ego Ugbo na Nlekọta Itinye Ego",
  skills: "Ikewa mmefu na-adịgide adịgide na mmefu na-agbanwe agbanwe, Ịgbakọ ego ọ na-efu iwepụta otu kg, akpa ma ọ bụ lita, Idebe ndekọ mmefu, Ịhazi ego na-abata na nke na-apụ kwa ọnwa, Ịchọta ọnụahịa nha nha, Ịtụle itinye ego site na oge nkwụghachi na uru dị mfe",
  outcome: "ịgbakọ ego ọ na-efu gị n'ezie iwepụta otu kg, akpa ma ọ bụ lita, idebe ndekọ mmefu ọ bụla, ịhazi ego gị kwa ọnwa, ịchọta ọnụahịa kacha ala ị nwere ike ire n'enweghị mfu, na ịtụle ma itinye ego dị ka pọmpụ anyanwụ (solar), ụlọ ihe ọkụkụ (greenhouse) ma ọ bụ ehi ndị ọzọ ga-akwụghachi onwe ya.",
  about: [
    "Ihe ọmụmụ a bụ maka obere ndị ọrụ ugbo na ndị ọrụ ugbo azụmahịa na-eto eto, ndị na-elekọta ugbo, ndị ntorobịa na-arụ azụmahịa ugbo na ndị ọrụ extension (ndị nkuzi ndị ọrụ ugbo) na Kenya, Naịjirịa, Ghana, Senegal, Cote d'Ivoire na n'Afrịka niile, ndị na-edebelarị ụfọdụ ndekọ ma chọọ ime mkpebi ego ka mma.",
    "Ọ na-ewuli elu na \"Azụmahịa Ugbo na Nlekọta Ugbo\", nke na-akụzi ndekọ dị mfe na gross margin. Ebe a, ị ga-aga n'ihu. Isi 1 bụ maka ịmata mmefu gị: mmefu na-adịgide adịgide na nke na-agbanwe agbanwe, ego ọ na-efu iwepụta otu nkeji, na ndekọ mmefu. Isi 2 bụ maka ịhazi na itinye ego: atụmatụ ego kwa ọnwa, ọnụahịa nha nha, na ịtụle itinye ego site na oge nkwụghachi ya na uru dị mfe ya.",
    "Ọnụ ego niile bụ ọmụmaatụ e mepụtara na KES, NGN, GHS na XOF iji gosi usoro ahụ; jiri ọnụahịa nke gị. Ihe ọmụmụ a anaghị enye ndụmọdụ itinye ego. Tupu ịzụ ihe buru ibu ma ọ bụ ibinye ego, tụnyere ihe ndị a na-enye, gụchaa nkwekọrịta ọ bụla, ma gwa onye ndụmọdụ i tụkwasịrị obi okwu, dị ka otu mmekọ gị, SACCO, onye ọrụ extension ma ọ bụ onye ndekọ ego (accountant). Nkuzi ọ bụla na-ejedebe n'obere ọrụ omume na nnwale ngwa ngwa nwere ajụjụ 2, isi ọ bụla na nnwale ihe ọmụma, ihe ọmụmụ ahụ na ule nwere ajụjụ 20."
  ],
  finalTask: "Mee mpempe akwụkwọ mmefu na itinye ego maka otu ọrụ ugbo n'ugbo gị (ma ọ bụ ugbo ọmụmaatụ): ndepụta mmefu ya na-adịgide adịgide na nke na-agbanwe agbanwe maka otu oge ọkụkọ, ego ọ na-efu kwa kg, akpa, lita ma ọ bụ akwa, otu ọnwa ndekọ mmefu, atụmatụ ego ọnwa 12 nwere ego fọdụrụ n'ọnwa ọ bụla na ọnwa ụkọ ego e kara akara, ọnụahịa nha nha na ihe ubi nha nha e jiri tụnyere ọnụahịa ị na-atụ anya ya, na oge nkwụghachi na uru dị mfe maka otu itinye ego ị na-eche maka ya, ya na mkpebi gị na ihe mere i ji kpebie ya.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Obere ndị ọrụ ugbo na ndị ọrụ ugbo azụmahịa na-eto eto, ndị na-elekọta ugbo, ndị ntorobịa na-arụ azụmahịa ugbo, ndị isi otu mmekọ na ndị ọrụ extension na Kenya, Naịjirịa, Ghana na mba ndị na-asụ French n'Ọdịda Anyanwụ Afrịka. Ọtụtụ na-akọ ọka, akpụ, osikapa, agwa, akwụkwọ nri, kọfị ma ọ bụ koko, ma ọ bụ na-azụ ehi mmiri ara, ewu, ezi, ọkụkọ ma ọ bụ azụ.",
    startingPoint: "Ha nwere ike ịgbakụ, wepụ, mụbaa na kee site na calculator ekwentị. Ọtụtụ na-edebe ụfọdụ ndekọ ma mara ihe dị ka ihe ha na-emefu na ihe ha na-enweta; ụfọdụ emeela nkuzi gross margin na \"Azụmahịa Ugbo na Nlekọta Ugbo\". Mmadụ ole na ole maara ego ọ na-efu ha kwa kg ma ọ bụ lita, ọnụahịa nha nha ha, ma ọ bụ otu esi atụle ma ngwa ọrụ ga-akwụghachi onwe ya.",
    gap: "Ndị ọrụ ugbo na-erekarị ihe n'ọnụ dị ala karịa ihe o fuuru ha iwepụta ya, ego na-agwụ ha tupu owuwe ihe ubi ọbụlagodi n'afọ dị mma, ma ọ bụ ha na-azụ ngwa ọrụ na anụmanụ na-anaghị akwụghachi ọnụ ha. Ịmata ego ọ na-efu kwa nkeji, nha nha na nkwụghachi na-enyere ha aka ịjụ ọnụahịa ọjọọ, ịhazi ego ma tinye ego n'ihe na-akwụ ụgwọ, ma na-enye ndị na-agbazinye ego na ndị na-azụ ihe ọnụ ọgụgụ ha nwere ike ịtụkwasị obi.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ; a na-akọwa okwu ego ọ bụla",
      "Ngwaọrụ: calculator ekwentị nkịtị na akwụkwọ ndetu ezuru; spreadsheet n'ekwentị bụ nhọrọ",
      "Oge: nkuzi nkeji 5 ruo 6 nke dabara n'etiti ọrụ ugbo",
      "Ego: ọnụ ọgụgụ niile bụ ọmụmaatụ; ọnụahịa, ọmụrụ nwa ego na enyemaka gọọmentị na-agbanwe, ma ga-esi n'obodo onye na-amụ ihe",
      "Enweghị ndụmọdụ itinye ego: ndị na-amụ ihe na-atụnyere nhọrọ ma jụọ onye ndụmọdụ ha tụkwasịrị obi tupu mkpebi ndị buru ibu"
    ],
    prerequisites: "Ọ dịghị, mana \"Azụmahịa Ugbo na Nlekọta Ugbo\" (ndekọ na gross margin) bụ nzọụkwụ mbụ na-enye aka."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe e nyere gị ndepụta mmefu otu ọrụ ugbo maka otu oge ọkụkọ na ihe ubi ya", action: "ikewa mmefu ndị ahụ ka ha bụrụ ndị na-adịgide adịgide na ndị na-agbanwe agbanwe ma gbakọọ ego ọ na-efu iwepụta otu kg, akpa, lita ma ọ bụ akwa", standard: "nke mere na mmefu ọ bụla dị n'otu ziri ezi, ego ọ na-efu kwa nkeji ziri ezi ruo otu nkeji ego zuru oke kacha nso" },
    { id: "O2", condition: "Site n'iji akwụkwọ ndetu ma ọ bụ spreadsheet n'ekwentị", action: "idekọ mmefu ugbo ọ bụla maka otu ọnwa site n'ụbọchị, ụdị na ọrụ ugbo, ma gbakọọ ya site n'ụdị", standard: "n'ahapụghị ụbọchị ọ bụla, ma ọnụ ọgụgụ niile dabara na ndekọ ego aka na ego mobile money gị" },
    { id: "O3", condition: "Mgbe e nyere gị ego a na-atụ anya ya ga-abata na nke ga-apụ n'ọnwa ọ bụla n'afọ", action: "ime atụmatụ ego kwa ọnwa nwere ego mmalite na ego fọdụrụ ma kaa akara ọnwa ụkọ ego", standard: "nke mere na e bugara ego fọdụrụ ọ bụla n'ọnwa na-esote, ma e nwere opekata mpe otu ihe a ga-eme maka ọnwa ụkọ ego ọ bụla" },
    { id: "O4", condition: "Mgbe e nyere gị mmefu niile, ihe ubi a na-atụ anya ya na ọnụahịa onye na-azụ", action: "ịgbakọ ọnụahịa nha nha na ihe ubi nha nha ma kpebie ma ihe a na-enye gị na-ekpuchi mmefu gị", standard: "ziri ezi ruo otu nkeji ego ma ọ bụ nkeji ihe ubi zuru oke kacha nso" },
    { id: "O5", condition: "Mgbe e nyere gị ego itinye ego ga-efu na ego na mmefu ọzọ ọ ga-ewete", action: "ịgbakọ oge nkwụghachi ya na uru dị mfe ya ma dee mkpebi gị na ihe mere i ji kpebie ya", standard: "nke nwere ọnụ ọgụgụ ziri ezi na opekata mpe ihe egwu abụọ e lelere (ogologo ndụ ihe ahụ, ego mbinye ego ma ọ bụ ihe ubi na-adịchaghị mma)" }
  ],
  chapters: [
    {
      name: "Isi 1: Ịmata mmefu gị",
      lessons: [
        {
          title: "Mmefu na-adịgide adịgide na mmefu na-agbanwe agbanwe",
          objectives: ["O1"],
          minutes: 5,
          goal: "Kewaa mmefu otu ọrụ ugbo ka ha bụrụ ndị na-adịgide adịgide na ndị na-agbanwe agbanwe, gụnyere ego ngwa ọrụ na ụlọ na-efu kwa afọ.",
          text: [
            "Mmefu na-agbanwe agbanwe na-arị elu ma ọ bụ na-agbada dị ka ihe ị na-emepụta si dị: mkpụrụ, fatịlaịza, nri anụmanụ, ndị ọrụ ụbọchị, ọrụ dọkịta anụmanụ, akpa, mmanụ ụgbọ na njem. Ọ bụrụ na ị kụọ ọkara ala ma ọ bụ zụọ ọkara ọkụkọ, mmefu ndị a na-agbada.",
            "Mmefu na-adịgide adịgide na-anọ ihe dị ka otu ihe ọ bụla ị mepụtara n'oge ahụ: ụgwọ ala, ụgwọ ọnwa onye ọrụ na-adịgide adịgide, ikike mmiri, mkpuchi (insurance), na ịka nká nke ngwa ọrụ, pọmpụ, ụlọ ugbo na ngere. A na-akpọ ịka nká ahụ depreciation. Ụzọ dị mfe isi gbakọọ ya: (ego i ji zụta - uru fọdụrụ na njedebe) / afọ ọ ga-adị. Ọmụmaatụ (ọnụ ọgụgụ e mepụtara na shilling Kenya): igwe ịgba ọgwụ a na-ebu n'azụ na-efu 6,000, ọ ga-adị afọ 5 ma ọ gaghị aba uru ọ bụla na njedebe, ya mere ọ na-efu ugbo 1,200 kwa afọ.",
            "Ọ bụrụ na ngwa ọrụ ma ọ bụ ụlọ na-arụ ọrụ maka ọtụtụ ọrụ ugbo, kee ego ọ na-efu kwa afọ n'etiti ha, dịka ọmụmaatụ site n'ala ma ọ bụ oge onye ọ bụla na-eji ya. Gụkwa ọrụ ezinụlọ gị, n'ọnụ ụgwọ ụbọchị nke obodo gị, ka ị hụ ezi ego oge gị na-efu."
          ],
          steps: ["Họrọ otu ọrụ ugbo, dị ka ọka, tilapia ma ọ bụ ehi mmiri ara.", "Depụta mmefu ọ bụla maka otu oge ọkụkọ ma ọ bụ otu afọ.", "Kaa nke ọ bụla akara V (na-agbanwe agbanwe: na-agbanwe dị ka ihe ị na-emepụta) ma ọ bụ F (na-adịgide adịgide: na-anọ otu ihe).", "Maka ngwa ọrụ, pọmpụ na ụlọ, gbakọọ depreciation: (ego - uru fọdụrụ) / afọ ndụ ya.", "Kee mmefu na-adịgide adịgide n'etiti ọrụ ugbo ndị na-eji otu ihe ahụ."],
          words: [["Mmefu na-agbanwe agbanwe (variable cost)", "mmefu na-arị elu ma ọ bụ na-agbada dị ka ihe ị na-emepụta si dị, dị ka mkpụrụ ma ọ bụ nri anụmanụ."], ["Mmefu na-adịgide adịgide (fixed cost)", "mmefu na-anọ ihe dị ka otu ihe ọ bụla ị mepụtara n'oge ahụ, dị ka ụgwọ ala."], ["Depreciation", "akụkụ ọnụahịa ngwa ọrụ ma ọ bụ ụlọ nke na-agwụ kwa afọ ka ọ na-aka nká."], ["Ọrụ ugbo (enterprise)", "otu ihe a na-arụ n'ugbo, dị ka ọka, ọkụkọ ma ọ bụ ehi mmiri ara."]],
          slides: [
            { title: "Mmefu na-agbanwe agbanwe", bullets: ["Na-agbanwe dị ka ihe ị na-emepụta si dị", "Mkpụrụ, fatịlaịza, nri anụmanụ, ndị ọrụ ụbọchị, dọkịta anụmanụ, akpa, mmanụ ụgbọ", "Mepụta obere, ha na-agbada"] },
            { title: "Mmefu na-adịgide adịgide", bullets: ["Na-anọ ihe dị ka otu ihe ọ bụla ị mepụtara", "Ụgwọ ala, ụgwọ ọnwa na-adịgide adịgide, ikike, insurance", "Ịka nká nke ngwa ọrụ na ụlọ"] },
            { title: "Depreciation", bullets: ["(Ego - uru fọdụrụ) / afọ ndụ ya", "Igwe ịgba ọgwụ 6,000 KES, afọ 5: 1,200 kwa afọ (ọmụmaatụ)", "Kee ya n'etiti ọrụ ugbo ndị na-eji ya"] },
            { title: "Echefula", bullets: ["Ọrụ ezinụlọ n'ọnụ ụgwọ ụbọchị nke obodo", "Obere mmefu: akpa, kredit ekwentị maka ndị na-azụ, njem"] }
          ],
          tryIt: "Họrọ otu ọrụ ugbo n'ugbo gị. Depụta opekata mpe mmefu asatọ site n'oge ọkụkọ gara aga, kaa nke ọ bụla akara V ma ọ bụ F, ma gbakọọ depreciation kwa afọ nke otu ngwa ọrụ ma ọ bụ ụlọ ị na-eji maka ya.",
          youCanNow: "ikewa mmefu otu ọrụ ugbo ka ha bụrụ ndị na-adịgide adịgide na ndị na-agbanwe agbanwe ma gbakọọ ego ngwa ọrụ na ụlọ gị na-efu kwa afọ.",
          quickCheck: [
            { objective: "O1", q: "Kedu nke bụ mmefu na-agbanwe agbanwe maka ọrụ ugbo ọkụkọ?", options: ["Ịka nká ụlọ ọkụkọ kwa afọ", "Ụgwọ ala ụlọ ahụ guzo na ya", "Nri ọkụkọ", "Ụgwọ ọnwa onye ọrụ na-adịgide adịgide"], answer: 2, why: "Nri na-arị elu ma na-agbada dị ka ọnụ ọgụgụ ọkụkọ ị na-azụ si dị, ya mere ọ na-agbanwe agbanwe." },
            { objective: "O1", q: "Pọmpụ na-efu 50,000, ọ ga-adị afọ 10 ma ọ ga-aba uru 0 na njedebe. Depreciation ya bụ:", options: ["5,000 kwa afọ", "50,000 kwa afọ", "500 kwa afọ", "10,000 kwa afọ"], answer: 0, why: "(50,000 - 0) / afọ 10 = 5,000 kwa afọ." }
          ]
        },
        {
          title: "Ego ọ na-efu iwepụta otu kg, akpa ma ọ bụ lita",
          objectives: ["O1"],
          minutes: 6,
          goal: "Gbakọọ ego ọ na-efu iwepụta otu kg, akpa, lita ma ọ bụ akwa maka otu ọrụ ugbo.",
          text: [
            "Ego kwa nkeji = mmefu niile maka oge ahụ / nkeji e mepụtara n'oge ahụ. Mmefu niile bụ mmefu na-agbanwe agbanwe gbakwunye akụkụ mmefu na-adịgide adịgide nke ọrụ ugbo a. Nkeji bụ otu ị na-ere: otu kg tomato, akpa ọka 100 kg, otu lita mmiri ara, otu tray akwa, otu kg tilapia.",
            "Ọmụmaatụ (ọnụ ọgụgụ e mepụtara na shilling Kenya), otu ehi mmiri ara maka otu ọnwa: nri 9,500, dọkịta anụmanụ na ọrụ ịmụ nwa 1,000, ndị ọrụ 3,000, akụkụ mmefu na-adịgide adịgide (ụlọ ehi, igwe ịkpụ ahịhịa, mmiri) 1,500. Ha niile 15,000. Ehi ahụ nyere lita 300. Ego kwa lita = 15,000 / 300 = shilling 50. Ọ bụrụ na onye na-azụ mmiri ara na-akwụ ihe na-erughị 50, lita ọ bụla na-efu ego.",
            "Ọmụmaatụ (ọnụ ọgụgụ e mepụtara na naira), otu hekta ọka na Naịjirịa: mmefu na-agbanwe agbanwe 600,000, akụkụ mmefu na-adịgide adịgide 150,000, ha niile 750,000, owuwe ihe ubi akpa 30 nke 100 kg. Ego kwa akpa = 750,000 / 30 = 25,000, nke bụ naira 250 kwa kg. Gbakọọ ya oge ọkụkọ ọ bụla: mgbe ihe ubi gbadara ma ọ bụ ọnụahịa ihe ọrụ ugbo rịrị elu, ego kwa nkeji na-arịkwa elu."
          ],
          steps: ["Họrọ nkeji ị na-ere: kg, akpa, lita, akwa ma ọ bụ tray.", "Gbakọọ mmefu na-agbanwe agbanwe maka oge ahụ.", "Gbakwunye akụkụ mmefu na-adịgide adịgide nke ọrụ ugbo a.", "Gụọ nkeji e mepụtara n'otu oge ahụ.", "Ego kwa nkeji = mmefu niile / nkeji e mepụtara.", "Tụnyere ya na ọnụahịa ndị na-azụ na-akwụ."],
          words: [["Ego kwa nkeji (cost per unit)", "ihe ọ na-efu gị iwepụta otu kg, akpa, lita ma ọ bụ akwa: mmefu niile kee nkeji e mepụtara."], ["Nkeji (unit)", "ọnụ ọgụgụ ị na-ere na ya, dị ka kg, akpa 100 kg ma ọ bụ lita."]],
          slides: [
            { title: "Usoro ngụkọ", bullets: ["Ego kwa nkeji = mmefu niile / nkeji e mepụtara", "Mmefu niile = na-agbanwe agbanwe + akụkụ na-adịgide adịgide", "Jiri nkeji ị na-ere na ya"] },
            { title: "Ehi mmiri ara, otu ọnwa (ọmụmaatụ KES)", bullets: ["Nri 9,500 + dọkịta 1,000 + ndị ọrụ 3,000 + na-adịgide adịgide 1,500 = 15,000", "Lita 300: 15,000 / 300 = 50 kwa lita", "Onye na-azụ na-akwụ ihe na-erughị 50 pụtara mfu kwa lita"] },
            { title: "Ọka, otu hekta (ọmụmaatụ NGN)", bullets: ["Mmefu niile 750,000; owuwe akpa 30", "750,000 / 30 = 25,000 kwa akpa = 250 kwa kg"] },
            { title: "Gbakọọ ya oge ọkụkọ ọ bụla", bullets: ["Ihe ubi dị ala = ego kwa nkeji dị elu", "Ọnụahịa ihe ọrụ ugbo dị elu = ego kwa nkeji dị elu"] }
          ],
          tryIt: "Jiri mmefu si na Nkuzi 1. Gbakọọ ha ọnụ, kee ya site na nkeji i mepụtara, ma dee ego ọ na-efu gị kwa kg, akpa, lita ma ọ bụ akwa. Wee dee ọnụahịa ikpeazụ onye na-azụ nyere gị n'akụkụ ya.",
          youCanNow: "ịgbakọ ego ọ na-efu iwepụta otu nkeji nke ihe ị na-ere ma tụnyere ya na ọnụahịa a na-enye gị.",
          quickCheck: [
            { objective: "O1", q: "Mmefu niile maka ubi tomato bụ 40,000, o nyekwara 800 kg. Gịnị bụ ego kwa kg?", options: ["800", "40", "500", "50"], answer: 3, why: "40,000 / 800 kg = 50 kwa kg." },
            { objective: "O1", q: "Ihe ubi gị gbadara mana mmefu gị nọ otu ihe. Gịnị na-eme ego gị kwa nkeji?", options: ["Ọ na-anọ otu ihe", "Ọ na-arị elu", "Ọ na-agbada", "Ọ na-aghọ efu"], answer: 1, why: "Otu mmefu ahụ e kere site na nkeji ole na ole na-enye ego ka elu kwa nkeji." }
          ]
        },
        {
          title: "Ndekọ mmefu ị nwere ike idebe",
          objectives: ["O2"],
          minutes: 5,
          goal: "Hazie ndekọ mmefu ma dekọọ mmefu ugbo ọ bụla maka otu ọnwa.",
          text: [
            "Ndekọ mmefu bụ ndepụta ịkwụ ụgwọ ugbo ọ bụla nwere otu kọlụm ndị ahụ oge niile: ụbọchị, ihe i zụtara, ụdị (mkpụrụ, fatịlaịza, nri anụmanụ, ndị ọrụ, dọkịta anụmanụ, mmanụ ụgbọ, njem, nrụzi, ụgwọ ụlọ ma ọ bụ ala), ọrụ ugbo ọ bụ, F ma ọ bụ V, ego, otu i si kwụọ ụgwọ (ego aka ma ọ bụ mobile money) na ma i debere risịt.",
            "Dee mmefu ọ bụla n'otu ụbọchị ahụ. Na njedebe ọnwa, gbakọọ ụdị ọ bụla na ọrụ ugbo ọ bụla. Ị ga-ahụ ngwa ngwa ebe ego na-aga. Ọmụmaatụ (ọnụ ọgụgụ e mepụtara na cedi Ghana), ugbo ọkụkọ na-eyi akwa n'otu ọnwa: nri 4,200, ndị ọrụ 1,200, dọkịta anụmanụ na ọgwụ mgbochi 400, njem 300, nrụzi 150, ha niile 6,250. Nri bụ ụzọ abụọ n'ime atọ nke mmefu, ya mere nchekwa ego kacha mma ga-esi na nri.",
            "Akwụkwọ ndetu na-arụ ọrụ nke ọma. N'ekwentị, spreadsheet n'efu dị ka Google Sheets ma ọ bụ Microsoft Excel nwere ike ịgbakọrọ gị ụdị ọ bụla site na usoro SUMIF. Lelee ndekọ ahụ na ndekọ ego aka na mobile money gị kwa izu, ka ihe ọ bụla ghara ịfọdụ."
          ],
          steps: ["Mee kọlụm ndị a: ụbọchị, ihe, ụdị, ọrụ ugbo, F ma ọ bụ V, ego, otu i si kwụọ, risịt.", "Dee mmefu ọ bụla n'otu ụbọchị ahụ.", "Kwa izu, lelee ya na ndekọ ego aka na mobile money gị.", "Na njedebe ọnwa, gbakọọ ụdị ọ bụla na ọrụ ugbo ọ bụla.", "Chọta ụdị kacha ukwuu na otu ụzọ isi belata ya."],
          words: [["Ndekọ mmefu (expense tracker)", "ndepụta ịkwụ ụgwọ ugbo ọ bụla nwere otu kọlụm ndị ahụ, ka i nwee ike ịgbakọ ya site n'ụdị."], ["Ụdị (category)", "otu mmefu ndị yiri ibe ha, dị ka nri anụmanụ, ndị ọrụ ma ọ bụ njem."], ["Risịt (receipt)", "akwụkwọ ma ọ bụ ozi na-egosi na i kwụrụ ụgwọ."]],
          slides: [
            { title: "Otu kọlụm ndị ahụ oge niile", bullets: ["Ụbọchị, ihe, ụdị, ọrụ ugbo", "Na-adịgide adịgide ma ọ bụ na-agbanwe agbanwe, ego", "Ego aka ma ọ bụ mobile money, e debere risịt?"] },
            { title: "Ngụkọ njedebe ọnwa (ọmụmaatụ GHS ọkụkọ akwa)", bullets: ["Nri 4,200, ndị ọrụ 1,200, dọkịta anụmanụ 400", "Njem 300, nrụzi 150: ha niile 6,250", "Nri bụ ụzọ abụọ n'ime atọ: bido nchekwa ego ebe ahụ"] },
            { title: "Debe ya n'eziokwu", bullets: ["Dee ya n'otu ụbọchị ahụ", "Lelee ya kwa izu na ndekọ mobile money", "Akwụkwọ ndetu ma ọ bụ spreadsheet n'ekwentị (SUMIF)"] }
          ],
          tryIt: "Hazie ndekọ gị taa nwere kọlụm asatọ niile. Dejupụta mmefu ugbo ọ bụla nke ụbọchị asaa gara aga site n'ihe ị chetara, risịt na ndekọ mobile money gị, wee gbakọọ ha site n'ụdị.",
          youCanNow: "idebe ndekọ mmefu, gbakọọ ya site n'ụdị na ọrụ ugbo, ma chọta ebe ego gị na-aga.",
          quickCheck: [
            { objective: "O2", q: "Gịnị mere a ga-eji tinye kọlụm maka ọrụ ugbo nke mmefu ọ bụla bụ nke ya?", options: ["Ka i nwee ike ịhụ ihe ọrụ ugbo ọ bụla na-efu n'ezie", "N'ihi na ụlọ akụ na-achọ ya kwa ụbọchị", "Ime ka ndepụta ahụ dị ogologo", "Ka ị ghara ịchọ risịt"], answer: 0, why: "Ngụkọ site n'ọrụ ugbo na-aba ozugbo n'ego kwa nkeji nke ọ bụla n'ime ha." },
            { objective: "O2", q: "Ngụkọ ndekọ gị dị ala karịa ihe si n'akpa mobile money gị pụọ n'ọnwa a. Gịnị ka ị ga-eme?", options: ["Hapụ ya; obere ọdịiche adịghị mkpa", "Hichapụ ndekọ ahụ ma bido ọzọ n'afọ ọzọ", "Gaa n'ime ndekọ ahụ ma tinye mmefu ndị fọdụrụ", "Tinye ọnụ ọgụgụ e mepụtara ka ha dakọrịta"], answer: 2, why: "Ndekọ ahụ na-egosi ihe i kwụrụ n'ezie, ya mere ọ na-enyere gị aka ịchọta ma tinye ihe ndị fọdụrụ." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ịmata mmefu gị",
        questions: [
          { objective: "O1", q: "Kedu nke bụ mmefu na-adịgide adịgide maka ugbo ọka?", options: ["Mkpụrụ", "Fatịlaịza", "Ndị ọrụ ụbọchị maka ịchọ ahịhịa", "Ụgwọ ala kwa afọ"], answer: 3, why: "Ụgwọ ala na-anọ otu ihe ọ bụla ị kụrụ n'ala ahụ, ya mere ọ na-adịgide adịgide." },
          { objective: "O1", q: "Igwe ịkpụ ahịhịa na-efu 30,000, ọ na-adị afọ 6 ma ọ na-aba uru 0 na njedebe. Gịnị bụ depreciation ya kwa afọ?", options: ["5,000", "6,000", "30,000", "180,000"], answer: 0, why: "(30,000 - 0) / afọ 6 = 5,000 kwa afọ." },
          { objective: "O1", q: "Mmefu niile maka ọrụ ugbo ezi bụ 90,000, i rekwara anụ ezi 600 kg. Gịnị bụ ego kwa kg?", options: ["600", "150", "90", "1,500"], answer: 1, why: "90,000 / 600 kg = 150 kwa kg." },
          { objective: "O2", q: "Olee mgbe ị ga-ede mmefu na ndekọ?", options: ["Na njedebe oge ọkụkọ", "Naanị mgbe i nwere risịt", "N'otu ụbọchị ahụ i kwụrụ ya", "Naanị maka ịkwụ ụgwọ ndị buru ibu"], answer: 2, why: "Ndekọ e dere n'otu ụbọchị ahụ zuru oke ma ziri ezi." },
          { objective: "O2", q: "Mgbe ọnwa ndekọ gasịrị, nri bụ 65% nke mmefu. Gịnị bụ nzọụkwụ kacha baa uru na-esote?", options: ["Buru ụzọ chọọ ụzọ isi belata ego nri ma ọ bụ nri na-efu efu", "Kwụsị idekọ n'ihi na azịza ahụ doro anya", "Buru ụzọ belata ụdị kacha nta", "Zụtakwuo nri ka i nweta mbelata ọnụahịa, n'agbanyeghị ọnụahịa ya"], answer: 0, why: "Ụdị kacha ukwuu bụ ebe nchekwa ego na-eme mgbanwe kacha ukwuu." }
        ]
      }
    },
    {
      name: "Isi 2: Ịhazi na itinye ego",
      lessons: [
        {
          title: "Atụmatụ ego kwa ọnwa nwere ego fọdụrụ",
          objectives: ["O3"],
          minutes: 6,
          goal: "Mee atụmatụ ego ọnwa 12 nwere ego mmalite na ego fọdụrụ ma kaa akara ọnwa ụkọ ego.",
          text: [
            "Atụmatụ ego (cash-flow plan) na-egosi, ọnwa n'ọnwa, ego ole ị na-atụ anya inwe. Maka ọnwa ọ bụla: ego mmalite (ego i ji bido) + ego na-abata - ego na-apụ = ego fọdụrụ. Ego fọdụrụ na-aghọ ego mmalite nke ọnwa na-esote.",
            "Ọmụmaatụ (ọnụ ọgụgụ e mepụtara na cedi Ghana), ugbo ọka na ọkụkọ. Machị: mmalite 3,000 + na-abata 500 - na-apụ 2,000 = fọdụrụ 1,500. Eprel: mmalite 1,500 + na-abata 500 - na-apụ 2,500 = fọdụrụ -500. Ego fọdụrụ nwere mwepu (-) bụ ụkọ ego: ị gaghị enwe ike ịkwụ ihe niile n'ọnwa ahụ ma ọ bụrụ na ị hazighị ya.",
            "Maka ọnwa ụkọ ego ọ bụla, hazie ihe ị ga-eme tupu ọ bịa: chekwaa ego site n'owuwe ihe ubi gara aga, bufee ịzụ ihe n'ọnwa ọzọ e mesịa, ree ụfọdụ ihe ubi nwayọọ nwayọọ, tinye obere ọrụ ugbo na-ewete ego n'ọnwa ahụ (akwa, akwụkwọ nri, azụ), hazie kredit ihe ọrụ ugbo, ma ọ bụ kwekọọ n'obere mbinye ego n'oge nwere nkwụghachi mgbe owuwe gasịrị. Melite atụmatụ ahụ kwa ọnwa site n'ihe mere n'ezie."
          ],
          steps: ["Mee kọlụm ọnwa 12 na ahịrị anọ: mmalite, ego na-abata, ego na-apụ, fọdụrụ.", "Tinye ego i nwere ugbu a dị ka ego mmalite mbụ.", "Dejupụta ego a na-atụ anya ga-abata na nke ga-apụ n'ọnwa ọ bụla.", "Fọdụrụ = mmalite + na-abata - na-apụ; buga ya na mmalite nke ọnwa na-esote.", "Gbaa gburugburu n'ego fọdụrụ ọ bụla nwere mwepu.", "Dee otu ihe ị ga-eme maka ọnwa ọ bụla e gbara gburugburu ma melite ya kwa ọnwa."],
          words: [["Ego mmalite (opening balance)", "ego i nwere na mmalite ọnwa."], ["Ego fọdụrụ (closing balance)", "ego ị na-atụ anya inwe na njedebe ọnwa: mmalite + ego na-abata - ego na-apụ."], ["Ụkọ ego (shortfall)", "ọnwa ego na-apụ karịrị ego i nwere."]],
          slides: [
            { title: "Otu ahịrị ngụkọ", bullets: ["Mmalite + ego na-abata - ego na-apụ = fọdụrụ", "Fọdụrụ na-aghọ mmalite nke ọnwa na-esote"] },
            { title: "Ọmụmaatụ (GHS, e mepụtara)", bullets: ["Machị: 3,000 + 500 - 2,000 = 1,500", "Eprel: 1,500 + 500 - 2,500 = -500", "Mwepu = ụkọ ego: hazie maka ya ugbu a"] },
            { title: "Idozi ụkọ ego", bullets: ["Chekwaa site n'owuwe; bufee ịzụ ihe n'oge e mesịa", "Ree nwayọọ nwayọọ; tinye ọrụ ugbo na-ewete ego n'oge ahụ", "Kredit ihe ọrụ ugbo ma ọ bụ obere mbinye ego e kwekọrọ n'oge"] },
            { title: "Mee ka ọ dịrị ndụ", bullets: ["Dee ihe mere n'ezie kwa ọnwa", "Melite ọnwa ndị na-abịa"] }
          ],
          tryIt: "Mee atụmatụ ego ọnwa 12 gị, bido n'ego i nwere taa. Gbakọọ ego fọdụrụ ọ bụla, gbaa gburugburu n'ọnwa ụkọ ego, ma dee otu ihe ị ga-eme maka nke ọ bụla.",
          youCanNow: "ime atụmatụ ego kwa ọnwa nwere ego fọdụrụ na-aga n'ihu, hụ ọnwa ụkọ ego n'oge ma hazie ihe ị ga-eme maka ha.",
          quickCheck: [
            { objective: "O3", q: "Ego mmalite 2,000, ego na-abata 1,000, ego na-apụ 2,500. Gịnị bụ ego fọdụrụ?", options: ["5,500", "-500", "3,000", "500"], answer: 3, why: "2,000 + 1,000 - 2,500 = 500." },
            { objective: "O3", q: "Atụmatụ gị na-egosi ụkọ ego n'Ọgọst. Olee mgbe ị ga-ahazi ihe ị ga-eme?", options: ["Ugbu a, ọnwa ole na ole tupu Ọgọst", "N'Ọgọst, mgbe ụgwọ bịara", "Mgbe owuwe ihe ubi gasịrị", "Ọ dịghị mgbe; ọ ga-edozi onwe ya"], answer: 0, why: "Ịhazi n'oge na-enye gị oge ịchekwa ego, bufee ịzụ ihe ma ọ bụ hazie kredit n'usoro dị mma." }
          ]
        },
        {
          title: "Ọnụahịa nha nha na ihe ubi nha nha",
          objectives: ["O4"],
          minutes: 5,
          goal: "Gbakọọ ọnụahịa nha nha na ihe ubi nha nha ma jiri ha tụlee ihe onye na-azụ na-enye.",
          text: [
            "Nha nha (break-even) bụ ebe ego na-abata na-ekpuchi mmefu niile kpọmkwem: enweghị uru, enweghị mfu. Ọnụahịa nha nha = mmefu niile / ihe ubi a na-atụ anya ya. Ọ bụ ọnụahịa kacha ala ị nwere ike ịnabata n'efughị ego. Ihe ubi nha nha = mmefu niile / ọnụahịa ị na-atụ anya ya. Ọ bụ owuwe kacha nta na-ekpuchi mmefu gị n'ọnụahịa ahụ.",
            "Ọmụmaatụ (ọnụ ọgụgụ e mepụtara na naira), hekta ọka si na Nkuzi 2: mmefu niile 750,000, owuwe a na-atụ anya ya akpa 30. Ọnụahịa nha nha = 750,000 / 30 = 25,000 kwa akpa. Onye na-azụ na-enye 28,000: ị na-enweta 3,000 kwa akpa, ma ọ bụ 90,000 n'akpa 30. Ihe ubi nha nha na 28,000 = 750,000 / 28,000 = akpa 26.8, ya mere ị chọrọ opekata mpe akpa 27. Ọ bụrụ na ụkọ mmiri ozuzo belatara owuwe gị ruo akpa 25, ị ga-efu ego ọbụlagodi n'ọnụahịa ahụ.",
            "Jiri nha nha tupu ị kụọ (ihe ọkụkụ a ọ bara uru n'ọnụahịa ga-adị?) na mgbe onye na-azụ nyere ọnụahịa (ọ na-ekpuchi mmefu m?). Ọdịiche dị n'etiti ọnụahịa a na-atụ anya ya na ọnụahịa nha nha gị bụ oghere nchekwa gị: ka ọ na-ebuwanye ibu, ka i nwere ike ịnagide oge ọkụkọ ọjọọ ma ọ bụ ọdịda ọnụahịa."
          ],
          steps: ["Gbakọọ mmefu niile maka ọrụ ugbo ahụ (na-agbanwe agbanwe + akụkụ na-adịgide adịgide).", "Ọnụahịa nha nha = mmefu niile / ihe ubi a na-atụ anya ya.", "Ihe ubi nha nha = mmefu niile / ọnụahịa a na-atụ anya ya.", "Tụnyere ya na ihe onye na-azụ na-enye na ihe ubi i nwere ike inweta.", "Dee oghere nchekwa gị: ọnụahịa a na-atụ anya ya - ọnụahịa nha nha."],
          words: [["Nha nha (break-even)", "ebe ego na-abata na-ekpuchi mmefu niile kpọmkwem: enweghị uru, enweghị mfu."], ["Ọnụahịa nha nha", "ọnụahịa kacha ala kwa nkeji na-ekpuchi mmefu gị: mmefu niile / ihe ubi."], ["Ihe ubi nha nha", "owuwe kacha nta na-ekpuchi mmefu gị n'otu ọnụahịa: mmefu niile / ọnụahịa."], ["Oghere nchekwa (safety margin)", "ole ọnụahịa ma ọ bụ ihe ubi nwere ike ịda tupu ị nwee mfu."]],
          slides: [
            { title: "Ọnụ ọgụgụ nha nha abụọ", bullets: ["Ọnụahịa nha nha = mmefu niile / ihe ubi", "Ihe ubi nha nha = mmefu niile / ọnụahịa"] },
            { title: "Ọmụmaatụ ọka (NGN, e mepụtara)", bullets: ["750,000 / akpa 30 = 25,000 kwa akpa", "Onye na-azụ na-enye 28,000: uru 3,000 kwa akpa, 90,000 n'ozuzu", "Ihe ubi nha nha na 28,000: ihe dị ka akpa 27"] },
            { title: "Mgbe ị ga-eji ya", bullets: ["Tupu ị kụọ: ọ bara uru?", "Mgbe onye na-azụ nyere ọnụahịa: ọ na-ekpuchi mmefu?", "Oghere nchekwa ka ukwuu = ohere ka ukwuu maka oge ọkụkọ ọjọọ"] }
          ],
          tryIt: "Jiri mmefu niile na ihe ubi a na-atụ anya ya nke ọrụ ugbo gị. Gbakọọ ọnụahịa nha nha na ihe ubi nha nha n'ọnụahịa taa, ma dee oghere nchekwa gị. Ị ga-anabata ihe ikpeazụ e nyere gị?",
          youCanNow: "ịgbakọ ọnụahịa nha nha na ihe ubi nha nha maka ọrụ ugbo ma jiri ha nabata ma ọ bụ jụ ihe a na-enye gị.",
          quickCheck: [
            { objective: "O4", q: "Mmefu niile 120,000, ihe ubi a na-atụ anya ya akpa 40. Gịnị bụ ọnụahịa nha nha?", options: ["4,000 kwa akpa", "40 kwa akpa", "3,000 kwa akpa", "160,000 kwa akpa"], answer: 2, why: "120,000 / akpa 40 = 3,000 kwa akpa." },
            { objective: "O4", q: "Ọnụahịa nha nha gị maka mmiri ara bụ 50 kwa lita. Onye na-azụ na-enye 45. Gịnị ka nke a pụtara?", options: ["Ị na-enweta uru 5 na lita ọ bụla", "Ị na-efu ihe dị ka 5 na lita ọ bụla ma ọ bụrụ na ị belataghị mmefu ma ọ bụ chọta onye na-azụ ka mma", "Ọnụahịa ahụ dị mma n'ihi na ọ dị nso", "Nha nha adịghị mkpa maka mmiri ara"], answer: 1, why: "Ọnụahịa dị n'okpuru nha nha pụtara na lita ọ bụla e rere na-efu ego." }
          ]
        },
        {
          title: "Ịtụle itinye ego: oge nkwụghachi na uru dị mfe",
          objectives: ["O5"],
          minutes: 6,
          goal: "Gbakọọ oge nkwụghachi na uru dị mfe nke itinye ego ma kpebie ma ọ bara uru.",
          text: [
            "Itinye ego (investment) bụ ego a na-emefu ugbu a iji nweta karịa n'ọdịnihu: pọmpụ anyanwụ (solar), ụlọ ihe ọkụkụ (greenhouse), ụlọ oyi (cold store), ụlọ ezi ma ọ bụ ehi ndị ọzọ. Buru ụzọ gbakọọ ego ọzọ fọdụrụ kwa afọ: ego ọzọ ọ na-ewete wepụ mmefu ọzọ ọ na-achọ (mmanụ ụgbọ, nrụzi, nri anụmanụ, ndị ọrụ, akụkụ nnọchi). Wee: oge nkwụghachi = ego itinye ego / ego ọzọ fọdụrụ kwa afọ. Uru dị mfe = ego ọzọ fọdụrụ kwa afọ / ego itinye ego x 100.",
            "Ọmụmaatụ (ọnụ ọgụgụ e mepụtara na shilling Kenya), pọmpụ anyanwụ na-enye ohere ịkọ tomato n'oge ọkọchị: ọ na-efu 120,000; ego ọzọ 55,000 kwa afọ wepụ mmefu ọzọ 15,000 = ego ọzọ fọdụrụ 40,000. Oge nkwụghachi = 120,000 / 40,000 = afọ 3. Uru dị mfe = 40,000 / 120,000 x 100 = ihe dị ka 33% kwa afọ. Ọmụmaatụ (ọnụ ọgụgụ e mepụtara na franc CFA), greenhouse na Senegal: ọ na-efu 3,000,000; ego ọzọ fọdụrụ 600,000 kwa afọ. Oge nkwụghachi = afọ 5; uru dị mfe = 20% kwa afọ.",
            "Wee lelee ihe egwu ndị ahụ. Ọ ga-adị ogologo karịa oge nkwụghachi ya (plastik greenhouse na akụkụ pọmpụ na-aka nká)? Ọ bụrụ na i binyere ego, ego mbinye ego ahụ kwa afọ ọ dị ala karịa uru ahụ, ị ga-enwekwa ike ịkwụghachi ya tupu ihe ahụ akwụghachi onwe ya? Gịnị ma ọ bụrụ na ihe ubi ma ọ bụ ọnụahịa dị 20% n'okpuru ihe ị tụrụ anya ya? Jiri ọnụ ọgụgụ e ji nlezianya mee, jụọ onye na-ere ya maka ndị ọrụ ugbo na-eji ya ugbu a, ma gwa onye ndụmọdụ i tụkwasịrị obi okwu tupu ị zụta. Ihe ọmụmụ a na-akọwa usoro ahụ; ọ naghị agwa gị ihe ị ga-azụ."
          ],
          steps: ["Dee ego niile ọ ga-efu: ihe ahụ, ibuga ya, ịwụnye ya, ọzụzụ.", "Mee atụmatụ ego ọzọ ọ ga-ewete kwa afọ, site n'iji ihe ubi na ọnụahịa e ji nlezianya mee.", "Wepụ mmefu ọzọ ọ ga-achọ ka i nweta ego ọzọ fọdụrụ kwa afọ.", "Oge nkwụghachi = ego ọ na-efu / ego ọzọ fọdụrụ kwa afọ.", "Uru dị mfe = ego ọzọ fọdụrụ / ego ọ na-efu x 100.", "Lelee ndụ ihe ahụ, ego mbinye ego na ọnọdụ 20% ka njọ; dee mkpebi gị."],
          words: [["Itinye ego (investment)", "ego a na-emefu ugbu a n'ihe kwesịrị iwete karịa n'ọdịnihu."], ["Ego ọzọ fọdụrụ (extra net income)", "ego ọzọ itinye ego na-ewete kwa afọ wepụ mmefu ọzọ ọ na-achọ."], ["Oge nkwụghachi (payback period)", "afọ ole ọ na-ewe ka ego ọzọ fọdụrụ kwụghachi ihe i mefuru: ego ọ na-efu / ego ọzọ fọdụrụ kwa afọ."], ["Uru dị mfe (simple return)", "ego ọzọ fọdụrụ kwa afọ dị ka pasenti nke ego ọ na-efu."]],
          slides: [
            { title: "Ọnụ ọgụgụ abụọ iji tụlee itinye ego", bullets: ["Oge nkwụghachi = ego ọ na-efu / ego ọzọ fọdụrụ kwa afọ", "Uru dị mfe = ego ọzọ fọdụrụ / ego ọ na-efu x 100", "Ego ọzọ fọdụrụ = ego ọzọ na-abata - mmefu ọzọ"] },
            { title: "Pọmpụ anyanwụ (ọmụmaatụ KES)", bullets: ["Ọ na-efu 120,000; ego ọzọ fọdụrụ 40,000 kwa afọ", "Oge nkwụghachi afọ 3; uru dị mfe ihe dị ka 33%"] },
            { title: "Greenhouse na Senegal (ọmụmaatụ XOF)", bullets: ["Ọ na-efu 3,000,000; ego ọzọ fọdụrụ 600,000 kwa afọ", "Oge nkwụghachi afọ 5; uru dị mfe 20%"] },
            { title: "Lelee tupu ị zụta", bullets: ["Ọ na-adị ogologo karịa oge nkwụghachi ya?", "Ego mbinye ego dị ala karịa uru ahụ?", "Ọ ka na-arụ ọrụ ma ọ bụrụ na ihe ubi ma ọ bụ ọnụahịa dị 20% ala?", "Gwa ndị na-eji ya na onye ndụmọdụ i tụkwasịrị obi okwu"] }
          ],
          sources: [CBK, CBN, BCEAO],
          tryIt: "Ọrụ ikpeazụ: mee mpempe akwụkwọ mmefu na itinye ego ugbo gị. Maka otu ọrụ ugbo, tinye mmefu na-adịgide adịgide na nke na-agbanwe agbanwe, ego kwa nkeji, otu ọnwa ndekọ mmefu, atụmatụ ego ọnwa 12 nwere ọnwa ụkọ ego e kara akara, ọnụahịa nha nha na ihe ubi nha nha, na oge nkwụghachi na uru dị mfe nke otu itinye ego, ya na mkpebi gị na ihe mere i ji kpebie ya.",
          youCanNow: "ịtụle ma itinye ego ga-akwụghachi onwe ya, site n'iji oge nkwụghachi, uru dị mfe na nlele ihe egwu.",
          quickCheck: [
            { objective: "O5", q: "Ụlọ oyi na-efu 200,000 ma na-agbakwunye ego ọzọ fọdụrụ 50,000 kwa afọ. Gịnị bụ oge nkwụghachi ya?", options: ["Afọ 2", "Afọ 25", "Afọ 5", "Afọ 4"], answer: 3, why: "200,000 / 50,000 = afọ 4." },
            { objective: "O5", q: "Ihe na-akwụghachi onwe ya n'afọ 6 mana onye na-ere ya kwuru na ọ na-adị ihe dị ka afọ 4. Gịnị ka nke a na-agwa gị?", options: ["Ọ ga-aka nká tupu ọ kwụghachi onwe ya, ya mere o yikarịrị ka ọ bụ mfu", "Ọ bụ itinye ego magburu onwe ya", "Oge nkwụghachi adịghị mkpa ma ọ bụrụ na ihe ahụ dị ọhụrụ", "I kwesịrị ibinyekwu ego ịzụta abụọ"], answer: 0, why: "Ọ bụrụ na ihe ahụ aka nká tupu oge nkwụghachi, ego ọzọ ọ na-ewete agaghị ekpuchi ego ọ fuuru." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Ịhazi na itinye ego",
        questions: [
          { objective: "O3", q: "N'atụmatụ ego, gịnị bụ ego mmalite nke ọnwa na-esote?", options: ["Efu mgbe niile", "Ego fọdụrụ nke ọnwa a", "Ego na-abata n'ọnwa na-esote", "Uru afọ niile"], answer: 1, why: "Ọnwa ọ bụla na-amalite n'ego ọnwa gara aga ji kwụsị." },
          { objective: "O3", q: "Kedu ihe ezi uche ị ga-eme maka ọnwa ụkọ ego ị na-ahụ na-abịa?", options: ["Chere ma nwee olileanya", "Ree owuwe niile n'ụbọchị mbụ", "Bufee ịzụ ihe n'ọnwa ọzọ e mesịa ma ọ bụ chekwaa ego maka ya site n'owuwe", "Nara mbinye ego ọ bụla e nyere site n'ozi SMS"], answer: 2, why: "Ibufe mmefu ma ọ bụ ịchekwa ego n'oge na-emechi oghere ahụ n'enweghị mbinye ego dị egwu." },
          { objective: "O4", q: "Mmefu niile 300,000; onye na-azụ na-akwụ 6,000 kwa akpa. Gịnị bụ ihe ubi nha nha?", options: ["Akpa 50", "Akpa 60", "Akpa 5", "Akpa 1,800"], answer: 0, why: "300,000 / 6,000 = akpa 50." },
          { objective: "O5", q: "Ego ọzọ fọdụrụ 30,000 kwa afọ n'itinye ego nke 150,000. Gịnị bụ uru dị mfe?", options: ["5%", "50%", "30%", "20%"], answer: 3, why: "30,000 / 150,000 x 100 = 20% kwa afọ." },
          { objective: "O5", q: "Kedu otu ị ga-esi gbakọọ ego ọzọ fọdụrụ maka pọmpụ anyanwụ ọhụrụ?", options: ["Gụọ naanị ego ọzọ na-abata", "Wepụ ọnụahịa pọmpụ ahụ n'otu owuwe ihe ubi", "Ego ọzọ ọ na-ewete wepụ mmefu ọzọ ọ na-achọ", "Jụọ onye na-ere ya ka ọ gwa gị uru ya"], answer: 2, why: "Mmefu dị ka nrụzi na ndị ọrụ na-ebelata ihe pọmpụ ahụ na-ewete n'ezie." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Ndekọ Ego Ugbo na Nlekọta Itinye Ego",
    questions: [
      { objective: "O1", q: "Kedu mmefu na-agbanwe dị ka ihe ị na-emepụta si dị?", options: ["Mmefu na-agbanwe agbanwe, dị ka nri anụmanụ", "Mmefu na-adịgide adịgide, dị ka ụgwọ ala", "Depreciation n'ụlọ ugbo", "Ikike mmiri"], answer: 0, why: "Mmefu na-agbanwe agbanwe na-arị elu ma na-agbada dị ka ihe e mepụtara si dị." },
      { objective: "O1", q: "Ngere fuuru 40,000, ọ ga-adị afọ 8 ma ọ na-aba uru 0 na njedebe. Gịnị bụ depreciation ya kwa afọ?", options: ["8,000", "320,000", "40,000", "5,000"], answer: 3, why: "(40,000 - 0) / 8 = 5,000 kwa afọ." },
      { objective: "O1", q: "Gịnị mere a ga-eji gụọ ọrụ ezinụlọ n'ọnụ ụgwọ ụbọchị nke obodo?", options: ["N'ihi na ọfịs ụtụ isi na-achọ ya", "Ka ị hụ ezi ego ọ na-efu iwepụta nkeji ọ bụla", "Ime ka ugbo ahụ dị ka ọ dara ogbenye", "Ọ dịghị mkpa"], answer: 1, why: "Oge ezinụlọ gị bara uru; ịhapụ ya na-ezo ezi mmefu." },
      { objective: "O1", q: "Mmefu niile maka ọdọ tilapia bụ 60,000, i wetakwara 300 kg. Gịnị bụ ego kwa kg?", options: ["300", "2,000", "200", "20"], answer: 2, why: "60,000 / 300 kg = 200 kwa kg." },
      { objective: "O1", q: "Ọnụahịa ihe ọrụ ugbo rịrị elu mana owuwe gị nọ otu ihe. Ego gị kwa nkeji:", options: ["Na-arị elu", "Na-agbada", "Na-anọ otu ihe", "A pụghị ịgbakọ ya"], answer: 0, why: "Mmefu niile ka ukwuu e kere site n'otu ọnụ ọgụgụ nkeji na-enye ego ka elu kwa nkeji." },
      { objective: "O2", q: "Kedu kọlụm ndị na-eme ndekọ mmefu bara uru?", options: ["Naanị ego", "Ihe na agba ya", "Aha onye na-azụ na ọnụahịa", "Ụbọchị, ihe, ụdị, ọrụ ugbo, F ma ọ bụ V, ego, otu i si kwụọ, risịt"], answer: 3, why: "Kọlụm ndị a na-enye gị ohere ịgbakọ mmefu site n'ụdị na ọrụ ugbo ma lelee ha." },
      { objective: "O2", q: "Ugboro ole ka ị ga-eji lelee ndekọ gị na ndekọ mobile money gị?", options: ["Otu ugboro n'afọ", "Kwa izu", "Ọ dịghị mgbe", "Naanị mgbe onye na-agbazinye ego jụrụ"], answer: 1, why: "Nlele kwa izu na-ejide mmefu ndị fọdụrụ mgbe ị ka na-echeta ha." },
      { objective: "O2", q: "Kedu usoro spreadsheet nwere ike ịgbakọ mmefu niile n'otu ụdị?", options: ["SUMIF", "LEN", "TODAY", "UPPER"], answer: 0, why: "SUMIF na-agbakọ ego ndị dabara n'otu ọnọdụ, dị ka ụdị \"nri anụmanụ\"." },
      { objective: "O3", q: "A na-agbakọ ego fọdụrụ dị ka:", options: ["Naanị ego na-abata - ego na-apụ", "Ego mmalite x ego na-abata", "Ego mmalite + ego na-abata - ego na-apụ", "Ego na-apụ - ego mmalite"], answer: 2, why: "Ị na-amalite n'ego mmalite, gbakwunye ihe na-abata ma wepụ ihe na-apụ." },
      { objective: "O3", q: "Mmalite 4,000, na-abata 0, na-apụ 5,000. Gịnị ka ego fọdụrụ na-agwa gị?", options: ["I nwere 9,000", "Ị ga-enwe ụkọ ego 1,000", "I nwere 1,000 fọdụrụ", "Ọ dịghị ihe bara uru"], answer: 1, why: "4,000 + 0 - 5,000 = -1,000, ụkọ ego." },
      { objective: "O3", q: "Kedu ihe kacha enyere aka n'ọnwa ụkọ ego tupu owuwe ihe ubi?", options: ["Ileghara ya anya ruo mgbe ọ bịara", "Imefu karịa n'ọnwa bu ya ụzọ", "Ibinye ego n'aka onye na-agbazinye ego ị lebeghị anya", "Obere ọrụ ugbo na-ewete ego n'ọnwa ahụ, dị ka akwa ma ọ bụ akwụkwọ nri"], answer: 3, why: "Ego na-abata n'ọnwa agụụ na-emejupụta oghere ahụ n'enweghị ụgwọ dị egwu." },
      { objective: "O3", q: "Gịnị mere a ga-eji melite atụmatụ ego kwa ọnwa?", options: ["Ime ka ọ dabara n'ihe mere n'ezie ma hụ ọnwa ndị na-abịa nke ọma", "N'ihi na ụlọ akụ na-agbanwe ya", "Ka ọnụ ọgụgụ ndị ahụ dị ka ha buru ibu", "I kwesịghị imelite ya"], answer: 0, why: "Atụmatụ na-agbaso eziokwu na-adọ gị aka na ntị n'oge maka oghere ọhụrụ." },
      { objective: "O4", q: "Ọnụahịa nha nha bụ:", options: ["Mmefu niile / ihe ubi a na-atụ anya ya", "Ihe ubi a na-atụ anya ya / mmefu niile", "Ọnụahịa x ihe ubi", "Ego na-abata - mmefu niile"], answer: 0, why: "Ikesa mmefu niile site na nkeji ị na-atụ anya ya na-enye ọnụahịa kacha ala na-ekpuchi mmefu." },
      { objective: "O4", q: "Mmefu niile 200,000; ihe ubi a na-atụ anya ya akpa 50. Onye na-azụ na-enye 3,500 kwa akpa. Ị ga-anabata ya site n'ihe gbasara mmefu?", options: ["Ee, 3,500 na-ekpuchi mmefu", "Ee, ihe ọ bụla e nyere dị mma", "Mba, ọnụahịa nha nha bụ 4,000 kwa akpa", "A pụghị ịmara ya"], answer: 2, why: "200,000 / 50 = 4,000 kwa akpa, ya mere 3,500 na-efu 500 kwa akpa." },
      { objective: "O4", q: "Ihe ubi nha nha na-agwa gị:", options: ["Ọnụahịa kacha mma i nwere ike inweta", "Owuwe kacha nta na-ekpuchi mmefu gị n'otu ọnụahịa", "Fatịlaịza ole ị ga-eji", "Uru gị kwa afọ"], answer: 1, why: "Ọ bụ mmefu niile kee ọnụahịa: owuwe ị chọrọ iji zere mfu." },
      { objective: "O4", q: "Ọnụahịa a na-atụ anya ya 30,000 kwa akpa, ọnụahịa nha nha 25,000 kwa akpa. Oghere nchekwa gị bụ:", options: ["55,000 kwa akpa", "25,000 kwa akpa", "30,000 kwa akpa", "5,000 kwa akpa"], answer: 3, why: "30,000 - 25,000 = 5,000 kwa akpa tupu ị nwee mfu." },
      { objective: "O5", q: "Oge nkwụghachi bụ:", options: ["Ego itinye ego / ego ọzọ fọdụrụ kwa afọ", "Ego ọzọ fọdụrụ / ego ọ na-efu x 100", "Ọmụrụ nwa mbinye ego x afọ", "Ego ọ na-efu - ego na-abata kwa afọ"], answer: 0, why: "Ọ na-egosi afọ ole ego ọzọ fọdụrụ ga-akwụghachi ego ọ fuuru." },
      { objective: "O5", q: "Ehi mmiri ara atọ ọzọ na-efu 450,000 ma na-agbakwunye ego ọzọ fọdụrụ 150,000 kwa afọ. Gịnị bụ uru dị mfe?", options: ["3%", "15%", "33%", "300%"], answer: 2, why: "150,000 / 450,000 x 100 = ihe dị ka 33% kwa afọ." },
      { objective: "O5", q: "Ị ga-ebinye ego maka greenhouse. Kedu nlele kacha mkpa?", options: ["Agba greenhouse ahụ", "Ma ego mbinye ego ahụ kwa afọ dị ala karịa uru ahụ, ma nkwụghachi ya dabara n'atụmatụ ego gị", "Ma ndị agbata obi nwere otu", "Ọ dịghị ihe, ma ọ bụrụ na onye na-ere ya bụ enyi"], answer: 1, why: "Mbinye ego na-efu karịa uru ahụ, ma ọ bụ nke ị na-enweghị ike ịkwụghachi n'oge, na-eme ka itinye ego ahụ ghọọ mfu." },
      { objective: "O5", q: "Onye na-ere ihe kwere nkwa na pọmpụ ga-eme ka ego gị na-abata okpukpu abụọ. Gịnị ka ị ga-eme?", options: ["Zụta ya ozugbo", "Jiri ọnụ ọgụgụ onye na-ere ya dị ka atụmatụ gị", "Kwụọ ego mbido tupu ị jụọ ihe ọ bụla", "Jiri ọnụ ọgụgụ e ji nlezianya mee, gwa ndị ọrụ ugbo na-eji ya okwu ma jụọ onye ndụmọdụ i tụkwasịrị obi"], answer: 3, why: "Ọnụ ọgụgụ e ji nlezianya mee na ahụmịhe ndị na-eji ya n'ezie na-echebe gị pụọ n'okwu ire ahịa na-ekwe nkwa karịa." }
    ]
  },
  // ---- ADDIE: Ntụle ----
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [0, 3, 5, 8, 9, 12, 13, 16, 17] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ nke mpempe akwụkwọ ahụ ma lelee ya ọzọ.",
    criteria: [
      { name: "Mmefu e kewara na ego kwa nkeji", objective: "O1", notYet: "Mmefu na-efu efu ma ọ bụ gwakọtara agwakọta, ma ọ bụ ego kwa nkeji ezighi ezi ma ọ bụ adịghị.", meets: "E kara mmefu ọ bụla akara na-adịgide adịgide ma ọ bụ na-agbanwe agbanwe, e tinyere depreciation, ego kwa nkeji ziri ezi.", exceeds: "E kesara mmefu na-adịgide adịgide n'ụzọ ziri ezi n'etiti ọrụ ugbo, e jiri ọnụ ụgwọ ụbọchị nke obodo gụọ ọrụ ezinụlọ." },
      { name: "Ndekọ mmefu", objective: "O2", notYet: "E dekọrọ ihe na-erughị ọkara ụbọchị, ma ọ bụ enweghị ngụkọ site n'ụdị.", meets: "Otu ọnwa mmefu nwere kọlụm niile, e gbakọrọ site n'ụdị na ọrụ ugbo, dabara n'ego aka na mobile money.", exceeds: "Ọ na-akpọkwa aha ụdị kacha ukwuu na otu ụzọ ezi uche isi belata ya." },
      { name: "Atụmatụ ego", objective: "O3", notYet: "Ọnwa na-efu efu ma ọ bụ e bugaghị ego fọdụrụ n'ihu.", meets: "Ọnwa iri na abụọ nwere ego mmalite na ego fọdụrụ ziri ezi, e gbara gburugburu n'ọnwa ụkọ ego, ihe a ga-eme maka nke ọ bụla.", exceeds: "Ihe a ga-eme nwere ụbọchị na ego ọ ga-efu, e jirikwa otu ọnwa n'ezie melite atụmatụ ahụ." },
      { name: "Nha nha", objective: "O4", notYet: "Ọnụahịa nha nha ma ọ bụ ihe ubi nha nha adịghị ma ọ bụ ezighi ezi.", meets: "Ọnụahịa nha nha na ihe ubi nha nha ziri ezi, e jiri ha tụnyere ọnụahịa na ihe ubi a na-atụ anya ya.", exceeds: "Ọ na-egosikwa oghere nchekwa na ihe ga-eme ma ọ bụrụ na ihe ubi ada 20%." },
      { name: "Mkpebi itinye ego", objective: "O5", notYet: "Enweghị oge nkwụghachi ma ọ bụ uru, ma ọ bụ mkpebi ahụ enweghị ihe kpatara ya.", meets: "Oge nkwụghachi na uru dị mfe ziri ezi, mkpebi ahụ na-enyekwa opekata mpe ihe egwu abụọ e lelere.", exceeds: "Gụnyere ọnọdụ 20% ka njọ, ndụ ihe ahụ na ego mbinye ego ọ bụla, ya na ee, mba ma ọ bụ chere doro anya." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma nweta Ruru eru ma ọ bụ Karịrị n'ahịrị rubric ọ bụla nke mpempe akwụkwọ mmefu na itinye ego",
      "Ndị na-amụ ihe ka na-edebe ndekọ mmefu ụbọchị 30 e mesịa (nnyocha nsochi)",
      "Ndị na-amụ ihe na-akọ na ha jụrụ ọnụahịa dị n'okpuru ọnụahịa nha nha ha ma ọ bụ gbanwee ire ahịa n'ihi ya",
      "Ndị na-amụ ihe na-akọ na ha yigharịrị, gbanwee ma ọ bụ mee mkpebi itinye ego site n'iji oge nkwụghachi na uru dị mfe",
      "Otu mmekọ ma ọ bụ ndị na-agbazinye ego bụ ndị mmekọ na-akọ na ndị otu ka ukwuu na-ewete ọnụ ọgụgụ mmefu na atụmatụ ego n'okwu mbinye ego ma ọ bụ nkwekọrịta"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Akwụkwọ ndetu na mkpịsị ode, ma ọ bụ ekwentị nwere ngwa spreadsheet n'efu (Google Sheets ma ọ bụ Microsoft Excel)",
      "Calculator ekwentị",
      "Mmefu, risịt na ndekọ mobile money nke onye na-amụ ihe maka otu ọrụ ugbo, ma ọ bụ ọnụ ọgụgụ ọmụmaatụ nke ihe ọmụmụ a",
      "Ihe dị ka nkeji 75 n'ozuzu, n'oge nkenke, gbakwunye otu ọnwa ndekọ mmefu maka ọrụ ikpeazụ"
    ],
    facilitatorNotes: [
      "N'otu ndị ọrụ ugbo ma ọ bụ nnọkọ extension: meenụ ule mbido ọnụ, wee mee otu isi n'otu nnọkọ, ndị mmadụ abụọ abụọ na-eme ọrụ \"Nwalee ya ugbu a\" ọnụ.",
      "Weta mmefu ezi ọrụ ugbo ma ọ bụ nke ọmụmaatụ ka ndị na-enweghị ndekọ nwee ike ime omume; hụ na onye ọ bụla jiri calculator lelee ngụkọ ahụ.",
      "Chetara ndị na-amụ ihe na ọnụ ọgụgụ niile n'ihe ọmụmụ a bụ ọmụmaatụ; rịọ ha ka ha jiri ọnụahịa si n'ahịa na ndị na-ere ihe n'obodo ha.",
      "Akwadola ngwa ọrụ, ndị na-agbazinye ego ma ọ bụ ndị na-ere ihe ọ bụla; rịọ ndị na-amụ ihe ka ha tụnyere ihe a na-enye ma gwa onye ndụmọdụ ha tụkwasịrị obi okwu.",
      "Rịọ ndị na-amụ ihe ka ha bido ndekọ mmefu mgbe Nkuzi 3 gasịrị ka ha nwee otu ọnwa zuru oke maka ọrụ ikpeazụ; jiri rubric tụọ akara mpempe akwụkwọ ahụ ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};
