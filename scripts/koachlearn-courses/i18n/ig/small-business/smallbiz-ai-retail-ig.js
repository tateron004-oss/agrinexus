"use strict";

// Koach Learn course (Igbo translation of small-business/smallbiz-ai-retail.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

const FTC_ADS = { name: "FTC: Advertising and Marketing basics", url: "https://www.ftc.gov/business-guidance/advertising-marketing" };

module.exports = {
  id: "smallbiz-ai-retail-ig",
  lang: "ig",
  translationOf: "smallbiz-ai-retail",
  category: "Small Business",
  name: "AI maka Azụmahịa Ụlọ Ahịa",
  skills: "Ide nkọwa ngwaahịa, Ime akara ọnụahịa n'elu shelf, Idekọ ngwaahịa na spreadsheet, Ịtọ ọnụ ọgụgụ maka ịzụtaghachi, Ịgụ otu ihe si ere, Ime atụmatụ ire ahịa n'oge mmemme",
  outcome: "ijikwa akụkụ akwụkwọ nke obere ụlọ ahịa site n'enyemaka AI: ide nkọwa ngwaahịa na akara shelf nke eziokwu, idebe mpempe akwụkwọ ngwaahịa nwere ọnụ ọgụgụ ịzụtaghachi, ịhụ ngwaahịa kacha ere na nke na-adịghị ere ngwa, na ime atụmatụ otu mmemme ire ahịa n'oge site na nọmba nke gị.",
  about: [
    "Ihe ọmụmụ a bụ maka ndị nwe na ndị ọrụ obere ụlọ ahịa: ụlọ ahịa uwe, obere ụlọ ahịa n'akụkụ okporo ụzọ (bodega), ụlọ ahịa ihe ịchọ mma, ụlọ ahịa onyinye, ụlọ ahịa ihe e jirila mee ihe, na ndị na-ere n'ịntanetị ma ọ bụ n'ahịa. Ọtụtụ ụmụ akwụkwọ anyị bụ ndị nwe ụlọ ahịa si n'obodo pere mpe, ndị na-arụ ọrụ ya na obere ìgwè.",
    "Ị ga-eji ngwa enyemaka AI n'efu na spreadsheet (Google Sheets ma ọ bụ Excel) dee banyere ngwaahịa gị, debe ngwaahịa gị ka ọ ghara ịgwụ gị ọtụtụ oge, hụ ihe na-ere, ma mee atụmatụ mmemme ire ahịa site n'eziokwu kama ịkọ nkọ.",
    "Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise, nwere ọrụ \"Nwalee ya ugbu a\". E nwere nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe."
  ],
  finalTask: "Mee ngwa ọrụ ụlọ ahịa gị: nkọwa ngwaahịa ise nke eziokwu, akara shelf atọ, mpempe akwụkwọ ngwaahịa nwere opekata mpe ngwaahịa 15 nwere ọnụ ọgụgụ ịzụtaghachi na akara REORDER, obere ndetu banyere ngwaahịa atọ kacha ere na atọ kacha ala, na atụmatụ otu peeji maka otu mmemme ire ahịa n'oge nwere ngwaahịa, ọnụahịa, ụbọchị na otu ị ga-esi tụọ ya.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị nwe na ndị ọrụ obere ụlọ ahịa: ụlọ ahịa uwe, obere ụlọ ahịa n'akụkụ okporo ụzọ (bodega), ụlọ ahịa ihe ịchọ mma, ụlọ ahịa onyinye, ụlọ ahịa ihe e jirila mee ihe, na ndị na-ere n'ịntanetị ma ọ bụ n'ahịa. Ọtụtụ bụ ndị nwe ụlọ ahịa si n'obodo pere mpe, ndị na-arụ ọrụ ya na obere ìgwè.",
    startingPoint: "Ha maara ngwaahịa ha na ndị ahịa ha nke ọma ma na-eji igwe ndekọ ego (register) ma ọ bụ POS. Ha anaghị eji spreadsheet maka ngwaahịa, akụkọ ire ahịa ma ọ bụ AI maka ide ihe, ma na-emekarị atụmatụ mmemme ire ahịa site n'ịkọ nkọ.",
    gap: "Ụlọ ahịa na-atụfu ego mgbe ngwaahịa kacha ere gwụrụ, mgbe ha nwere ọtụtụ ngwaahịa na-adịghị ere ngwa, mgbe ha dere ọnụahịa ezighi ezi, ma ọ bụ mgbe mmemme ire ahịa enweghị uru. Ndị nwe ụlọ ahịa kwesịrị iji AI na spreadsheet dee okwu eziokwu banyere ngwaahịa, debe ngwaahịa, gụọ ire ahịa ma mee atụmatụ mmemme site na nọmba nke ha, ma na-echebe ozi ụlọ ahịa.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ",
      "Ngwaọrụ: kọmputa kacha mma maka spreadsheet; ekwentị na-arụ ọrụ maka ide ihe na akara",
      "Oge: nkuzi ihe dị ka nkeji 5 nke dabara n'oge ụlọ ahịa ghere oghe",
      "Iwu: iwu FTC banyere eziokwu na mgbasa ozi maka ihe a na-ekwu banyere ngwaahịa, na ọnụahịa dị n'akara ga-adabarịrị nke register",
      "Nzuzo na nchekwa: enweghị okwuntughe ndị na-ebubata ngwaahịa ma ọ bụ ozi ndị ahịa n'ime AI; naanị ngụkọta ngwaahịa"
    ],
    prerequisites: "\"Ngwa AI Ndị Dị Mkpa maka Obere Azụmahịa\" na-enye aka nye ndị na-amụ ihe ndị spreadsheet dị ọhụrụ."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe e nyere gị eziokwu site na label ma ọ bụ akwụkwọ ụgwọ (invoice) ngwaahịa", action: "ide obere nkọwa ngwaahịa nke eziokwu site n'enyemaka AI", standard: "ma lelee ihe ọ bụla a kwuru na label ahụ, n'enweghị ihe ị na-enweghị ike igosi" },
    { id: "O2", condition: "Site n'iji ngwa enyemaka AI", action: "ime akara shelf na ọkwa ụlọ ahịa doro anya", standard: "nwere ọnụahịa dabara nke register, ezi ụbọchị njedebe nke ire ahịa ọnụ ala, na ntụgharị asụsụ onye maara asụsụ ahụ nke ọma lelere" },
    { id: "O3", condition: "Site n'iji Google Sheets ma ọ bụ Excel", action: "ime mpempe akwụkwọ ngwaahịa nwere ọnụ ọgụgụ ịzụtaghachi na akara REORDER", standard: "nwere opekata mpe ngwaahịa 15, ọnụ ọgụgụ ịzụtaghachi ziri ezi na formula a nwalere" },
    { id: "O4", condition: "Mgbe e nyere gị ire ahịa izu 4 ruo 8 site na ngwaahịa ọ bụla", action: "ịmata ngwaahịa kacha ere na nke kacha ala site n'enyemaka AI", standard: "ma kpọọ aha atọ kacha ere na atọ kacha ala, ma kwado ihe ọ bụla AI hụrụ na nọmba nke gị" },
    { id: "O5", condition: "Mgbe e nyere gị nọmba ire ahịa na ngwaahịa gị", action: "ime atụmatụ mmemme ire ahịa n'oge", standard: "nwere ngwaahịa, ọnụahịa, uru n'ire ọ bụla, ụbọchị na ngwaahịa zuru ezu, gị onwe gị kpebiri" },
    { id: "O6", condition: "Mgbe e nyere gị mmemme ire ahịa na ozi ụlọ ahịa gị", action: "ịtụ nsonaazụ mmemme ahụ ma chebe ozi ụlọ ahịa", standard: "site n'itunyere ya na otu izu ahụ tupu mgbe ahụ, ịlele mgbakọ AI, na idebe okwuntughe n'ebe AI na-adịghị" }
  ],
  chapters: [
    {
      name: "Isi 1: Ngwaahịa, akara na ngwaahịa n'aka",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ide nkọwa ngwaahịa na-ere, n'eziokwu",
          minutes: 5,
          goal: "Dee obere nkọwa ngwaahịa nke eziokwu site n'enyemaka AI.",
          text: [
            "Nkọwa ngwaahịa na-agwa onye na-azụ ihe ihe ọ bụ, onye ọ bụ maka ya, na ihe mere ha ga-eji chọọ ya. Ọ na-arụ ọrụ n'akara shelf, na weebụsaịtị gị, n'ahịa ịntanetị ma ọ bụ n'ozi mgbasa ozi ọha.",
            "Nye AI eziokwu: \"Dee nkọwa okwu 40 maka ude ahụ shea butter 12 oz, na-enweghị isi, e mere na Ghana, maka akpụkpọ ahụ kpọrọ nkụ. Jiri olu nwere obi ọma. Kwuo nha ya.\" AI na-eme ka okwu ahụ dị ụtọ; gị na-enye eziokwu.",
            "Lelee eziokwu ọ bụla: nha, ihe e ji mee ya, ebe e mere ya, otu e si elekọta ya. Wepụ ihe ị na-enweghị ike igosi, dị ka \"na-agwọ eczema\" ma ọ bụ \"kacha mma n'obodo\". FTC kwuru na ihe a na-ekwu na mgbasa ozi ga-abụ eziokwu, nwee ihe akaebe."
          ],
          steps: ["Dee eziokwu ngwaahịa ahụ: aha, nha, ihe e ji mee ya, ebe o si, onye ọ bụ maka ya.", "Rịọ AI ka o dee obere nkọwa n'olu gị.", "Lelee eziokwu ọ bụla na label ma ọ bụ invoice.", "Wepụ ihe ị na-enweghị ike igosi."],
          words: [["Nkọwa ngwaahịa", "obere ihe e dere na-agwa ndị na-azụ ihe ihe ngwaahịa bụ na ihe mere ha ga-eji chọọ ya."], ["Ihe a na-ekwu (claim)", "okwu na-ekwu eziokwu banyere ngwaahịa, dị ka ihe ọ na-eme."]],
          slides: [
            { title: "Gịnị, onye na ihe mere", bullets: ["Ihe ọ bụ", "Onye ọ bụ maka ya", "Ihe mere ha ga-eji chọọ ya"] },
            { title: "Gị na-enye eziokwu", bullets: ["Aha, nha, ihe e ji mee ya, ebe o si", "AI na-eme ka okwu ahụ dị ụtọ"] },
            { title: "Kwuo eziokwu", bullets: ["Lelee ya na label ma ọ bụ invoice", "Enweghị ihe gbasara ahụike ma ọ bụ \"kacha mma\" ị na-enweghị ike igosi", "FTC: ihe a na-ekwu ga-abụ eziokwu, nwee ihe akaebe"] }
          ],
          sources: [FTC_ADS],
          tryIt: "Họrọ ngwaahịa ise n'ụlọ ahịa gị. Dee eziokwu nke ọ bụla, rịọ AI maka nkọwa okwu 30 ruo 50, ma lelee nke ọ bụla na label ya.",
          youCanNow: "ide nkọwa ngwaahịa nke eziokwu site n'enyemaka AI.",
          quickCheck: [
            { objective: "O1", q: "Ebee ka ị na-elele eziokwu dị na nkọwa ngwaahịa?", options: ["Label ma ọ bụ invoice", "Weebụsaịtị onye asọmpi", "Ihe ọ bụla AI dere", "Ihe onye ahịa chere"], answer: 0, why: "Label ma ọ bụ invoice nwere ezi eziokwu banyere ngwaahịa ahụ." },
            { objective: "O1", q: "AI dere na shampoo \"na-akwụsị ntutu ịda\", mana label ekwughị otu a. Gịnị ka ị ga-eme?", options: ["Hapụ ya ka ọ ree karịa", "Tinye akara ajụjụ", "Wepụ ya ma ọ bụrụ na ị nweghị ike igosi ya", "Dee ya n'obere mkpụrụ akwụkwọ"], answer: 2, why: "Ihe a na-ekwu ga-abụ eziokwu, nwee ihe akaebe." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Akara shelf, kaadị ọnụahịa na ọkwa ụlọ ahịa",
          minutes: 4,
          goal: "Mee akara shelf na ọkwa ụlọ ahịa doro anya ngwa ngwa.",
          text: [
            "Akara na-aza ajụjụ tupu ndị ahịa ajụọ: ọnụahịa, ire ahịa ọnụ ala, ihe ọhụrụ bịarutere, iwu ịlaghachi ihe, \"jụọ anyị banyere...\". Akara doro anya na-echekwa oge ndị ọrụ.",
            "Rịọ AI maka okwu dị mkpụmkpụ: \"Dee akara shelf ise maka ụlọ ahịa ihe ịchọ mma m: ntutu ịkpa isi ọhụrụ bịarutere, zụta 2 nweta 1 n'efu na edge control ruo May 31, iwu ịlaghachi ihe anyị bụ ụbọchị 14 nwere akwụkwọ nnata ego. Ihe na-erughị okwu 12 nke ọ bụla.\" Wee mepụta ha na Canva ma ọ bụ n'akwụkwọ ma bipụta ha.",
            "Ọnụahịa dị n'akara ga-adabarịrị nke register. Akara ire ahịa ọnụ ala chọrọ ezi ụbọchị njedebe na oke ọ bụla. Ọ bụrụ na ị na-ere ndị ahịa na-asụ asụsụ ọzọ, rịọ AI ka ọ tụgharịa ya, wee mee ka onye maara asụsụ ahụ nke ọma lelee ya."
          ],
          steps: ["Depụta akara ndị ị chọrọ.", "Rịọ AI maka okwu dị mkpụmkpụ.", "Mepụta ha ma bipụta ha.", "Lelee na ọnụahịa ọ bụla dabara nke register.", "Mee ka onye maara asụsụ ahụ nke ọma lelee ntụgharị ọ bụla."],
          words: [["Akara shelf", "obere akara dị n'elu shelf na-egosi ọnụahịa, ire ahịa ọnụ ala ma ọ bụ ozi."], ["Iwu ịlaghachi ihe (return policy)", "iwu gị banyere mgbe ndị ahịa nwere ike iweghachi ihe ha zụrụ."]],
          slides: [
            { title: "Akara na-echekwa oge ndị ọrụ", bullets: ["Ọnụahịa, ire ahịa ọnụ ala na ihe ọhụrụ", "Iwu ịlaghachi ihe na \"jụọ anyị banyere\""] },
            { title: "AI na-ede, gị na-emepụta", bullets: ["Rịọ maka okwu dị mkpụmkpụ, na-erughị okwu 12", "Mepụta ya na Canva ma ọ bụ n'akwụkwọ"] },
            { title: "Lelee tupu ị kwụba ya", bullets: ["Ọnụahịa dabara nke register", "Ụbọchị njedebe na oke nke ire ahịa ọnụ ala", "Onye maara asụsụ ahụ nke ọma lelere ntụgharị"] }
          ],
          tryIt: "Rịọ AI maka akara shelf atọ maka ụlọ ahịa gị. Lelee ọnụahịa ọ bụla na register gị, wee mee ha ma bipụta ma ọ bụ chekwaa ha.",
          youCanNow: "ime akara shelf na ọkwa ụlọ ahịa doro anya, ziri ezi, site n'enyemaka AI.",
          quickCheck: [
            { objective: "O2", q: "Gịnị ka akara ire ahịa ọnụ ala kwesịrị igosi?", options: ["Naanị okwu SALE", "Ezi ụbọchị njedebe na oke ọ bụla", "Nọmba ekwentị onye nwe ụlọ ahịa", "Ngwaahịa ọ bụla dị n'ụlọ ahịa"], answer: 1, why: "Akara ire ahịa ọnụ ala chọrọ ezi ụbọchị njedebe na oke ọ bụla ka ọ bụrụ eziokwu." },
            { objective: "O2", q: "AI tụgharịrị akara shelf gị gaa n'asụsụ Spanish. Gịnị ka ị ga-eme tupu i bipụta ya?", options: ["Bipụta ya ozugbo", "Rịọ AI ka o lelee onwe ya", "Wepụ asụsụ bekee", "Mee ka onye maara asụsụ ahụ nke ọma lelee ya"], answer: 3, why: "Onye maara asụsụ ahụ nke ọma nwere ike ịhụ mperi ntụgharị." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Idebe mpempe akwụkwọ ngwaahịa nwere ọnụ ọgụgụ ịzụtaghachi",
          minutes: 6,
          goal: "Mee spreadsheet ngwaahịa na-egosi ihe ị ga-azụtaghachi.",
          text: [
            "Ọ bụrụ na ngwaahịa gị kacha ere agwụ, ị na-atụfu ire ahịa; ọtụtụ ngwaahịa na-adịghị ere ngwa na-ejide ego gị. Obere mpempe akwụkwọ ngwaahịa na-enyere aka. Kọlụm: Item, Supplier, On hand, Sold per week, Days to arrive, Reorder point, Reorder?",
            "Ọnụ ọgụgụ ịzụtaghachi (reorder point) bụ mgbe ị ga-azụ ọzọ. Iwu dị mfe: ọnụ ọgụgụ e rere n'izu x izu ole ọ na-ewe ịbịarute + ntakịrị ihe ndabere (safety stock). Ọ bụrụ na ị na-ere 10 n'izu, ọ na-ewe izu 1 ịbịarute, ị na-edebekwa 5 ọzọ, zụtaghachi mgbe ọ fọdụrụ 15.",
            "Rịọ AI ka o nyere gị aka na formula: \"Na Google Sheets, dee formula na-egosi REORDER mgbe kọlụm C dị ala ma ọ bụ hà nhata kọlụm F.\" Azịza a na-ahụkarị bụ =IF(C2<=F2,\"REORDER\",\"\"). Nwalee ya n'ahịrị ole na ole ka ị hụ na ọ na-arụ ọrụ."
          ],
          steps: ["Mee kọlụm asaa ahụ.", "Dejupụta ngwaahịa 15 gị kacha ere.", "Gbakọọ ọnụ ọgụgụ ịzụtaghachi nke ọ bụla: ire n'izu x izu ịbịarute + safety stock.", "Rịọ AI maka formula IF na-egosi ihe ị ga-azụtaghachi.", "Nwalee ya n'ahịrị ole na ole, ma melite On hand kwa izu."],
          words: [["Ngwaahịa n'aka (stock, inventory)", "ngwaahịa ị nwere n'aka ị ga-ere."], ["Ọnụ ọgụgụ ịzụtaghachi (reorder point)", "ọnụ ọgụgụ fọdụrụ mgbe ị ga-azụ ọzọ."], ["Ihe ndabere (safety stock)", "ngwaahịa ọzọ e debere ma ọ bụrụ na ire ahịa ebili ma ọ bụ na nnyefe egbuo oge."]],
          slides: [
            { title: "Ihe mere ị ga-eji debe ngwaahịa", bullets: ["Ịgwụ ngwaahịa na-atụfu ire ahịa", "Ọtụtụ ngwaahịa na-adịghị ere ngwa na-ejide ego"] },
            { title: "Kọlụm mpempe akwụkwọ ngwaahịa", bullets: ["Item, Supplier, On hand", "Sold per week, Days to arrive", "Reorder point, Reorder?"] },
            { title: "Ọnụ ọgụgụ ịzụtaghachi", bullets: ["Ire n'izu x izu ịbịarute + safety stock", "Ọmụmaatụ: 10 x 1 + 5 = zụtaghachi na 15"] },
            { title: "Hapụ mpempe akwụkwọ ahụ ka o gosi ya", bullets: ["=IF(C2<=F2,\"REORDER\",\"\")", "Nwalee ya n'ahịrị ole na ole", "Melite On hand kwa izu"] }
          ],
          tryIt: "Mee mpempe akwụkwọ ngwaahịa gị nwere opekata mpe ngwaahịa 15, gbakọọ ọnụ ọgụgụ ịzụtaghachi, ma tinye formula IF na-egosi REORDER. Nwalee ya site n'ịgbanwe otu nọmba On hand.",
          youCanNow: "idebe mpempe akwụkwọ ngwaahịa na-agwa gị mgbe ị ga-azụtaghachi.",
          quickCheck: [
            { objective: "O3", q: "Gịnị bụ safety stock?", options: ["Ngwaahịa e debere n'ime ụlọ e kpochiri akpọchi", "Ngwaahịa na-adịghị ere mgbe ọ bụla", "Ngwaahịa ọzọ ma ọ bụrụ na ire ahịa ebili ma ọ bụ na nnyefe egbuo oge", "Ngwaahịa ị na-eweghachi nye onye na-ebubata ya"], answer: 2, why: "Safety stock na-ekpuchi ihe mberede n'ire ahịa ma ọ bụ nnyefe." },
            { objective: "O3", q: "AI dere formula maka akara REORDER gị. Gịnị ka ị ga-eme ọzọ?", options: ["Nwalee ya n'ahịrị ole na ole site n'ịgbanwe nọmba On hand", "Tụkwasị ya obi maka ngwaahịa niile", "Hichapụ formula ahụ", "Detuo ya na mpempe akwụkwọ niile n'eleleghị ya"], answer: 0, why: "Ịnwale formula n'ahịrị ole na ole na-egosi ma ọ na-arụ ọrụ." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ngwaahịa, akara na ngwaahịa n'aka",
        questions: [
          { objective: "O1", q: "Onye na-enye eziokwu dị na nkọwa ngwaahịa?", options: ["Ihe AI chere", "Gị, site na label ma ọ bụ invoice", "Onye asọmpi", "Nyocha onye ahịa"], answer: 1, why: "AI na-ede okwu; gị na-enye eziokwu i lelere." },
          { objective: "O1", q: "AI dere na ude ahụ gị \"na-agwọ eczema\". Gịnị ka ị na-eme?", options: ["Tinye \"e kwere nkwa\"", "Hapụ ya", "Mee ka ọ buo ibu", "Wepụ ya ma ọ bụrụ na ị nweghị ike igosi ya"], answer: 3, why: "FTC chọrọ ihe akaebe maka ihe a na-ekwu." },
          { objective: "O2", q: "Akara ire ahịa ọnụ ala ga-egosi:", options: ["Ezi ụbọchị njedebe na oke ọ bụla", "Enweghị ọnụahịa", "Okwuntughe gị", "Ọnụahịa ochie adịgboroja"], answer: 0, why: "Akara ire ahịa ọnụ ala nke eziokwu nwere ụbọchị na oke." },
          { objective: "O3", q: "Ị na-ere 8 n'izu, nnyefe na-ewe izu 2, safety stock bụ 4. Gịnị bụ ọnụ ọgụgụ ịzụtaghachi?", options: ["8", "12", "14", "20"], answer: 3, why: "8 x 2 + 4 = 20." },
          { objective: "O3", q: "Gịnị ka =IF(C2<=F2,\"REORDER\",\"\") na-eme?", options: ["Ọ na-agbakọ ire ahịa", "Ọ na-ehichapụ ahịrị ahụ", "Ọ na-egosi REORDER mgbe ihe dị n'aka dị na ma ọ bụ n'okpuru ọnụ ọgụgụ ịzụtaghachi", "Ọ na-ezigara onye na-ebubata ngwaahịa ọda"], answer: 2, why: "Ọ na-egosi ngwaahịa ndị chọrọ ịzụtaghachi." }
        ]
      }
    },
    {
      name: "Isi 2: Ịgụ ire ahịa na ime atụmatụ mmemme ire ahịa",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ịchọta ngwaahịa gị kacha ere na nke kacha ala",
          minutes: 5,
          goal: "Jiri akụkọ ire ahịa na enyemaka AI chọta ngwaahịa gị kacha ere na nke kacha ala.",
          text: [
            "Ọtụtụ igwe point-of-sale (POS) nwere ike iwepụta akụkọ ire ahịa site na ngwaahịa ọ bụla dị ka faịlụ ị na-emeghe na spreadsheet. Ọ bụrụ na nke gị enweghị ike, obere ndekọ kwa izu site na ngwaahịa ọ bụla na-arụ ọrụ.",
            "Hazie ya site n'ọnụ ọgụgụ e rere na site n'ego e nwetara. Ngwaahịa gị kacha ere kwesịrị ezigbo ebe n'elu shelf, ha agaghịkwa agwụ. Ngwaahịa gị kacha ala nwere ike ịchọ ebe ka mma, ijikọ ya na ihe ọzọ (bundle), ibelata ọnụahịa ya, ma ọ bụ ịkwụsị ire ya.",
            "Ị nwere ike itinye ngụkọta ngwaahịa (enweghị ozi ndị ahịa) n'ime ngwa enyemaka AI: \"Nke a bụ ire ahịa izu 8 site na ngwaahịa ọ bụla maka ụlọ ahịa onyinye m. Kedu ngwaahịa na-arị elu, na-ada ala, ma ọ bụ na-ere n'oge ụfọdụ? Kedu ajụjụ m kwesịrị ịjụ?\" Were azịza ya dị ka echiche, ma kwado ha n'akụkọ gị."
          ],
          steps: ["Wepụta akụkọ ire ahịa site na ngwaahịa ma ọ bụ dekọọ ya n'aka.", "Hazie ya site n'ọnụ ọgụgụ na site n'ego.", "Kaa akara atọ kacha ere na atọ kacha ala.", "Rịọ AI ka ọ chọta usoro, jiri naanị ngụkọta ngwaahịa.", "Kwado usoro ọ bụla n'akụkọ gị."],
          words: [["POS", "point of sale (ebe ire ahịa): igwe na-edekọ ire ahịa."], ["Wepụta (export)", "ichekwa ozi site n'igwe dị ka faịlụ ị nwere ike imeghe n'ebe ọzọ."], ["Mbelata ọnụahịa (markdown)", "ọnụahịa dị ala iji ree ngwaahịa na-adịghị ere ngwa."]],
          slides: [
            { title: "Nweta nọmba", bullets: ["Wepụta akụkọ ire ahịa site na ngwaahịa na POS gị", "Ma ọ bụ dekọọ ire site na ngwaahịa kwa izu"] },
            { title: "Hazie ya n'ụzọ abụọ", bullets: ["Site n'ọnụ ọgụgụ e rere", "Site n'ego e nwetara", "Kaa akara atọ kacha ere na atọ kacha ala"] },
            { title: "AI maka usoro", bullets: ["Naanị ngụkọta ngwaahịa, enweghị ozi ndị ahịa", "Na-arị elu, na-ada ala, ma ọ bụ n'oge ụfọdụ?", "Kwado ya n'akụkọ gị"] }
          ],
          tryIt: "Nweta ire ahịa izu 4 ruo 8 site na ngwaahịa ọ bụla. Chọta atọ kacha ere na atọ kacha ala, wee jụọ AI usoro ọ hụrụ ma kwado otu n'ime ha.",
          youCanNow: "ịchọta ngwaahịa gị kacha ere na nke kacha ala ma lelee echiche AI na nọmba nke gị.",
          quickCheck: [
            { objective: "O4", q: "Gịnị ka POS pụtara?", options: ["Ọnụahịa n'elu shelf", "Point of sale (ebe ire ahịa)", "Mpempe akwụkwọ ọda ngwaahịa", "Uru ma ọ bụ ire ahịa"], answer: 1, why: "POS pụtara point of sale, igwe na-edekọ ire ahịa gị." },
            { objective: "O4", q: "Ị chọrọ ka AI nyere gị aka ịgụ ire ahịa gị. Gịnị ka ị ga-etinye n'ime ya?", options: ["Aha ndị ahịa na nọmba kaadị ha", "Okwuntughe onye na-ebubata ngwaahịa gị", "Ozi ịbanye POS gị niile", "Naanị ngụkọta ngwaahịa"], answer: 3, why: "Ngụkọta ngwaahịa zuru ezu, ozi nzuzo na-anọkwa n'ebe AI na-adịghị." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ime atụmatụ mmemme ire ahịa n'oge site na nọmba gị",
          minutes: 5,
          goal: "Mee atụmatụ mmemme ire ahịa nwere ngwaahịa, ọnụahịa, ụbọchị na nlele uru.",
          text: [
            "Azụmahịa ụlọ ahịa na-agbaso oge: mmeghe ụlọ akwụkwọ, ezumike, ngụsị akwụkwọ, oge okpomọkụ, mmemme obodo na ememe omenala dị mkpa nye ndị ahịa gị. Mee atụmatụ mmemme ire ahịa otu ọnwa tupu oge ahụ.",
            "Jiri nọmba gị: kwalite ngwaahịa na-ere nke ọma n'oge ahụ, ma ọ bụ jikọọ ngwaahịa na-adịghị ere ngwa na nke kacha ere. Rịọ AI maka echiche: \"Ngwaahịa m kacha ere bụ ntutu ịkpa isi; nke na-adịghị ere ngwa bụ okpu satin. Nye m echiche bundle atọ maka mmeghe ụlọ akwụkwọ nke ga-enye uru.\"",
            "Lelee mgbakọ: ọnụahịa, ego ọ na-efu, uru n'ire ọ bụla, na ole ị ga-ere. Dee ụbọchị na oke, ma zụta ngwaahịa zuru ezu site na mpempe akwụkwọ ịzụtaghachi gị."
          ],
          steps: ["Họrọ oge ma ọ bụ mmemme.", "Họrọ ngwaahịa site n'akụkọ ire ahịa gị.", "Rịọ AI maka echiche mmemme ma ọ bụ bundle.", "Lelee uru n'ire ọ bụla n'akwụkwọ.", "Tọọ ụbọchị, oke ma zụta ngwaahịa."],
          words: [["Mmemme ire ahịa (promotion)", "onyinye pụrụ iche maka oge a kara aka."], ["Bundle", "ngwaahịa abụọ ma ọ bụ karịa e rere ọnụ n'otu ọnụahịa."]],
          slides: [
            { title: "Mee atụmatụ otu ọnwa tupu", bullets: ["Mmeghe ụlọ akwụkwọ, ezumike, ngụsị akwụkwọ", "Mmemme obodo na ememe omenala"] },
            { title: "Jiri nọmba gị", bullets: ["Kwalite ngwaahịa kacha ere n'oge ahụ", "Jikọọ nke na-adịghị ere ngwa na nke kacha ere"] },
            { title: "Lelee tupu ị malite", bullets: ["Ọnụahịa, ego ọ na-efu na uru n'ire ọ bụla", "Ụbọchị na oke", "Ngwaahịa zuru ezu ị zụrụ"] }
          ],
          tryIt: "Mee atụmatụ otu mmemme ire ahịa maka oge na-abịa: ngwaahịa, ọnụahịa, uru n'ire ọ bụla, ụbọchị na ole ngwaahịa ị chọrọ.",
          youCanNow: "ime atụmatụ mmemme ire ahịa n'oge site na nọmba ire ahịa nke gị.",
          quickCheck: [
            { objective: "O5", q: "Gịnị bụ bundle?", options: ["Ngwaahịa e rere ọnụ n'otu ọnụahịa", "Igbe ihe e weghachiri", "Nnyefe site n'aka onye na-ebubata ngwaahịa", "Ụdị akara"], answer: 0, why: "Bundle na-ejikọ ngwaahịa n'otu ọnụahịa, na-ejikọkarị nke na-adịghị ere ngwa na nke kacha ere." },
            { objective: "O5", q: "Ị na-eme atụmatụ mmemme ire ahịa ezumike. Gịnị ka ị ga-elele tupu ị malite ya?", options: ["Naanị otu akara ahụ si dị", "Ihe onye asọmpi na-ere", "Uru n'ire ọ bụla na ma ị nwere ngwaahịa zuru ezu", "Ma AI nwere mmasị n'echiche ahụ"], answer: 2, why: "Mmemme ire ahịa ga-enyerịrị uru, nweekwa ngwaahịa zuru ezu n'azụ ya." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ịtụ mmemme ire ahịa na ichebe ụlọ ahịa gị",
          minutes: 5,
          goal: "Tụọ nsonaazụ mmemme ire ahịa ma chebe ozi ụlọ ahịa.",
          text: [
            "Kpebie otu ị ga-esi tụọ ya tupu ị malite: ọnụ ọgụgụ ngwaahịa a kwalitere e rere, ngụkọta ire ahịa n'ụbọchị ndị ahụ ma e tunyere ya na otu izu ahụ tupu mgbe ahụ, na uru. Promo code ma ọ bụ bọtịnụ POS pụrụ iche maka bundle ahụ na-eme ka ndekọ dị mfe.",
            "Emesịa, rịọ AI ka o nyere gị aka dee obere nchịkọta site na nọmba gị: ihe rụrụ ọrụ, ihe na-arụghị ọrụ, ihe ị ga-anwale oge ọzọ. Lelee mgbakọ ya na mpempe akwụkwọ gị.",
            "Chebe ozi ụlọ ahịa: etinyela aha ndị ahịa, nọmba kaadị, okwuntughe ndị na-ebubata ngwaahịa ma ọ bụ ozi ndị ọrụ n'ime ngwa AI. Kpachara anya maka invoice adịgboroja site n'aha ndị na-ebubata ngwaahịa na arịrịọ ịkwụ ụgwọ \"ozugbo\"; kpọọ onye na-ebubata ngwaahịa ahụ na nọmba ị maara."
          ],
          steps: ["Họrọ ihe ị ga-eji tụọ ya tupu mmemme ahụ.", "Tinye code ma ọ bụ bọtịnụ POS iji dekọọ ya.", "Tunyere ya na otu izu ahụ tupu mgbe ahụ.", "Rịọ AI ka o nyere aka chịkọta ya, ma lelee mgbakọ.", "Debe ozi ndị ahịa na ndị na-ebubata ngwaahịa n'ebe AI na-adịghị."],
          words: [["Oge ntụnyere (compare period)", "oge gara aga ị na-atụnyere nsonaazụ na ya, dị ka otu izu ahụ n'ọnwa gara aga."], ["Promo code", "koodu na-edekọ onye jiri onyinye."]],
          slides: [
            { title: "Buru ụzọ kpebie ihe ị ga-atụ", bullets: ["Ọnụ ọgụgụ ngwaahịa a kwalitere", "Ire ahịa ma e tunyere ya na otu izu ahụ tupu mgbe ahụ", "Uru"] },
            { title: "Mee ka ndekọ dị mfe", bullets: ["Promo code ma ọ bụ bọtịnụ POS maka bundle", "AI na-enyere aka ide nchịkọta; gị na-elele mgbakọ"] },
            { title: "Chebe ụlọ ahịa gị", bullets: ["Enweghị ozi ndị ahịa, kaadị, ndị na-ebubata ngwaahịa ma ọ bụ ndị ọrụ n'ime AI", "Kpọọ ndị na-ebubata ngwaahịa na nọmba ị maara maka invoice"] }
          ],
          tryIt: "Ọrụ ikpeazụ: chịkọta ngwa ọrụ ụlọ ahịa gị: nkọwa ngwaahịa ise, akara shelf atọ, mpempe akwụkwọ ngwaahịa gị nwere akara REORDER, ngwaahịa gị kacha ere na nke kacha ala, na atụmatụ mmemme ire ahịa gị na otu ị ga-esi tụọ ya.",
          youCanNow: "ime ma tụọ mmemme ire ahịa, ma jiri AI n'enweghị nsogbu n'ọrụ akwụkwọ niile nke ụlọ ahịa gị.",
          quickCheck: [
            { objective: "O6", q: "Kedu otu ị ga-esi tụọ mmemme ire ahịa?", options: ["Site n'otu ụlọ ahịa ahụ si dị ka ọ jupụtara", "Site n'itunyere ya na otu izu ahụ tupu mgbe ahụ", "Site n'ịgụ akara ole e bipụtara", "Site n'ịrịọ AI ka ọ kọọ nkọ"], answer: 1, why: "Itunyere ya na otu izu ahụ tupu mgbe ahụ na-egosi ezi mgbanwe ahụ." },
            { objective: "O6", q: "Ozi email kwuru na onye na-ebubata ngwaahịa gị nwere akaụntụ ụlọ akụ ọhụrụ, na ị ga-akwụ ụgwọ taa. Gịnị ka ị ga-eme?", options: ["Kwụọ ụgwọ ozugbo", "Zaghachi ya na ozi ịbanye ụlọ akụ gị", "Zigara ya ndị ahịa", "Kpọọ onye na-ebubata ngwaahịa ahụ na nọmba ị maralarị"], answer: 3, why: "Ịkpọ nọmba ị maara na-elele arịrịọ ịkwụ ụgwọ ngwa ngwa n'enweghị nsogbu." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Ịgụ ire ahịa na ime atụmatụ mmemme ire ahịa",
        questions: [
          { objective: "O4", q: "POS gị enweghị ike iwepụta akụkọ. Gịnị ka ị nwere ike ime?", options: ["Debe obere ndekọ kwa izu site na ngwaahịa ọ bụla", "Kọọ nkọ", "Jụọ onye asọmpi", "Kwụsị idekọ"], answer: 0, why: "Ndekọ n'aka ka na-egosi usoro." },
          { objective: "O4", q: "Gịnị nwere ike inyere ngwaahịa na-adịghị ere ngwa aka?", options: ["Ịzụtakwu ya", "Izochi ya", "Ịbawanye ọnụahịa ya nke ukwuu", "Bundle ya na ngwaahịa kacha ere"], answer: 3, why: "Bundle nwere ike ime ka ngwaahịa na-adịghị ere ngwa ree." },
          { objective: "O5", q: "Tupu ị malite bundle, ị kwesịrị ilele:", options: ["Naanị agba ya", "Uru n'ire ọ bụla", "Akụkọ kpakpando gị", "Ọ dịghị ihe"], answer: 1, why: "Mmemme ire ahịa ka ga-enyerịrị ego." },
          { objective: "O6", q: "Kedu otu ị ga-esi dekọọ mmemme ire ahịa n'ụzọ dị mfe?", options: ["Promo code ma ọ bụ bọtịnụ POS maka ya", "Ncheta", "Ịrịọ AI ka ọ kọọ nkọ", "Ịgụ ụgbọala ndị ahịa"], answer: 0, why: "Code na bọtịnụ na-edekọ ire ọ bụla." },
          { objective: "O6", q: "Ozi email kwuru na onye na-ebubata ngwaahịa gị gbanwere ozi ụlọ akụ ya, ka ị kwụọ ụgwọ taa. Ị ga-eme:", options: ["Zaghachi ya na okwuntughe gị", "Kwụọ ụgwọ ugbu a", "Kpọọ onye na-ebubata ngwaahịa ahụ na nọmba ị maara", "Zigara ya ndị ahịa"], answer: 2, why: "Invoice adịgboroja site n'aha ndị na-ebubata ngwaahịa bụ aghụghọ a na-ahụkarị." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: AI maka Azụmahịa Ụlọ Ahịa",
    questions: [
      { objective: "O1", q: "Nkọwa ngwaahịa na-aza:", options: ["Okwuntughe gị", "Ihe ọ bụ, onye ọ bụ maka ya, ihe mere ha ga-eji chọọ ya", "Ụlọ akụ onye na-ebubata ngwaahịa", "Ọ dịghị ihe"], answer: 1, why: "Akụkụ atọ ndị ahụ na-enyere ndị na-azụ ihe aka ikpebi." },
      { objective: "O1", q: "Ebee ka ị na-elele eziokwu ngwaahịa?", options: ["Onye asọmpi", "AI", "Ozi mgbasa ozi ọha", "Label ma ọ bụ invoice"], answer: 3, why: "Label na invoice nwere ezi eziokwu." },
      { objective: "O1", q: "FTC kwuru na ihe a na-ekwu na mgbasa ozi ga-abụ:", options: ["N'isi mkpụrụ akwụkwọ ukwu", "Ihe na-akpali akpali", "Mkpụmkpụ", "Eziokwu, nwee ihe akaebe"], answer: 3, why: "Nke ahụ bụ iwu FTC." },
      { objective: "O2", q: "Ọnụahịa dị n'akara shelf ga-:", options: ["Abawanye", "Dabara nke register", "Zoro ezo", "Gbanwee kwa ụbọchị"], answer: 1, why: "Ọnụahịa na-adabaghị na-ewe ndị ahịa iwe." },
      { objective: "O2", q: "Akara a tụgharịrị n'asụsụ ọzọ kwesịrị ka onye a lelee ya:", options: ["Onye na-ebipụta ya", "Ọ dịghị onye", "Onye maara asụsụ ahụ nke ọma", "Weebụsaịtị ọ bụla"], answer: 2, why: "Ntụgharị AI nwere ike inwe mperi." },
      { objective: "O2", q: "Ezigbo akara shelf bụ:", options: ["Ihe na-erughị okwu 12", "Peeji zuru ezu", "Ihe na-enweghị ihe e dere", "N'obere mkpụrụ akwụkwọ"], answer: 0, why: "A na-agụ akara dị mkpụmkpụ ngwa ngwa." },
      { objective: "O3", q: "Gịnị bụ safety stock?", options: ["Mkpuchi (insurance)", "Igbe ego e kpochiri akpọchi", "Ngwaahịa ọzọ ma ọ bụrụ na ire ahịa ebili ma ọ bụ na nnyefe egbuo oge", "Ngwaahịa mebiri emebi"], answer: 2, why: "Ọ na-egbochi ngwaahịa ịgwụ." },
      { objective: "O3", q: "E rere 5 n'izu, nnyefe izu 2, safety stock 5. Ọnụ ọgụgụ ịzụtaghachi?", options: ["7", "10", "15", "25"], answer: 2, why: "5 x 2 + 5 = 15." },
      { objective: "O3", q: "Mgbe AI dere formula spreadsheet, ị kwesịrị:", options: ["Ịtụkwasị ya obi", "Ịnwale ya n'ahịrị ole na ole", "Ihichapụ ya", "Ibipụta ya"], answer: 1, why: "Formula nwere ike ịbụ ihe ezighi ezi." },
      { objective: "O3", q: "Gịnị mere ị ga-eji debe ngwaahịa?", options: ["Ime ka ndị ọrụ ghara ịghọta", "Maka egwuregwu", "N'ihi na AI kwuru otu a", "Ka ngwaahịa ghara ịgwụ ọtụtụ oge, ma zere ọtụtụ ngwaahịa na-adịghị ere ngwa"], answer: 3, why: "Ha abụọ na-efu gị ego." },
      { objective: "O4", q: "POS pụtara:", options: ["Point of sale (ebe ire ahịa)", "Ọnụahịa ọrụ", "Akwụkwọ post ọfịs", "Mpempe akwụkwọ ọda ngwaahịa"], answer: 0, why: "Ọ na-edekọ ire ahịa." },
      { objective: "O4", q: "Ịhazi site n'ego e nwetara n'ire ahịa na-egosi:", options: ["Awa ndị ọrụ", "Ndị kacha arọ", "Ndị kacha ọhụrụ", "Ngwaahịa na-ewebata ego kacha ukwuu"], answer: 3, why: "Ego na-egosi ego e nwetara site na ngwaahịa ọ bụla." },
      { objective: "O4", q: "Mgbe ị na-etinye ire ahịa n'ime AI, tinye:", options: ["Nọmba kaadị", "Aha ndị ahịa", "Naanị ngụkọta ngwaahịa", "Okwuntughe ndị na-ebubata ngwaahịa"], answer: 2, why: "Enweghị ozi nzuzo." },
      { objective: "O5", q: "Olee mgbe ị ga-eme atụmatụ mmemme ire ahịa n'oge?", options: ["N'otu ụbọchị ahụ", "Ihe dị ka otu ọnwa tupu oge ahụ", "Mgbe oge ahụ gafere", "Ọ dịghị mgbe"], answer: 1, why: "Oge ịzụta ngwaahịa na ime akara." },
      { objective: "O5", q: "Gịnị bụ bundle?", options: ["Ihe mebiri emebi", "Ụtụ isi", "Mbinye ego", "Ngwaahịa e rere ọnụ n'otu ọnụahịa"], answer: 3, why: "Bundle na-ejikọ ngwaahịa ọnụ." },
      { objective: "O5", q: "Tupu mmemme ire ahịa, jiri mpempe akwụkwọ ịzụtaghachi gị:", options: ["Zoo ọnụahịa", "Hichapụ ngwaahịa", "Hụ na i nwere ngwaahịa zuru ezu", "Kwụọ ndị ọrụ ụgwọ"], answer: 2, why: "Ịgwụ ngwaahịa na-emebi mmemme ire ahịa." },
      { objective: "O6", q: "Tụọ mmemme ire ahịa site n'itunyere ya na:", options: ["Otu izu ahụ tupu mgbe ahụ", "Ihe onye asọmpi chere", "Ọ dịghị ihe", "Afọ na-abịa"], answer: 0, why: "Oge ntụnyere na-egosi mgbanwe ahụ." },
      { objective: "O6", q: "Mgbe AI dere nchịkọta mmemme ire ahịa gị, ị:", options: ["Na-atụkwasị nọmba ọ bụla obi", "Na-elele mgbakọ ya na mpempe akwụkwọ gị", "Na-ahapụ ịgụ ya", "Na-ebipụta ya n'agụghị ya"], answer: 1, why: "AI nwere ike ime mperi mgbakọ." },
      { objective: "O6", q: "Kedu nke a na-ekwesịghị itinye mgbe ọ bụla n'ime ngwa AI?", options: ["Aha ngwaahịa", "Okwuntughe akaụntụ onye na-ebubata ngwaahịa", "Ngụkọta kwa izu", "Aha oge"], answer: 1, why: "Okwuntughe bụ ihe nzuzo." },
      { objective: "O5", q: "Kedu mkpebi ihe ọmụmụ a hapụụrụ gị, ọ bụghị AI?", options: ["Ngwaahịa ị ga-akwalite na ọnụahịa ya", "Otu e si ede okwu n'okpuru foto", "Echiche maka bundle", "Okwu dị n'akara"], answer: 0, why: "AI na-atụ aro; gị na-ekpebi site na nọmba gị." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  pretest: {
    title: "Ule mbido: Gịnị ka ị maraworị?",
    from: [
      0,
      1,
      3,
      6,
      7,
      10,
      12,
      13,
      14,
      16
    ]
  },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      {
        name: "Nkọwa ngwaahịa",
        objective: "O1",
        notYet: "Ihe na-erughị ise, ma ọ bụ ihe a kwuru na-adịghị na label.",
        meets: "Nkọwa ise dị mkpụmkpụ, nke eziokwu, e lelere na label.",
        exceeds: "Nke ọ bụla na-ekwu ihe ọ bụ, onye ọ bụ maka ya na ihe mere ha ga-eji chọọ ya."
      },
      {
        name: "Akara shelf",
        objective: "O2",
        notYet: "Ihe na-erughị atọ, ma ọ bụ ọnụahịa na-adabaghị nke register.",
        meets: "Akara atọ doro anya nwere ọnụahịa dabara nke register.",
        exceeds: "Akara ire ahịa ọnụ ala na-egosi ụbọchị njedebe na oke; e lelere ntụgharị."
      },
      {
        name: "Mpempe akwụkwọ ngwaahịa",
        objective: "O3",
        notYet: "Ihe na-erughị ngwaahịa 15, ma ọ bụ enweghị akara REORDER na-arụ ọrụ.",
        meets: "Ngwaahịa 15 ma ọ bụ karịa nwere ọnụ ọgụgụ ịzụtaghachi na akara REORDER a nwalere.",
        exceeds: "Ọnụ ọgụgụ ịzụtaghachi gụnyere safety stock maka ngwaahịa ọ bụla."
      },
      {
        name: "Ngwaahịa kacha ere na nke kacha ala",
        objective: "O4",
        notYet: "Enweghị ndepụta kacha ere ma ọ bụ kacha ala, ma ọ bụ e mere ya site n'ịkọ nkọ.",
        meets: "Atọ kacha ere na atọ kacha ala site n'ezi nọmba ire ahịa.",
        exceeds: "E kwadoro otu usoro AI hụrụ na nọmba ahụ, ya na echiche maka ngwaahịa na-adịghị ere ngwa."
      },
      {
        name: "Atụmatụ mmemme ire ahịa",
        objective: "O5",
        notYet: "Ngwaahịa, ọnụahịa, ụbọchị ma ọ bụ nlele uru adịghị.",
        meets: "Ngwaahịa, ọnụahịa, uru n'ire ọ bụla, ụbọchị na ngwaahịa a chọrọ.",
        exceeds: "Na-ekwu otu a ga-esi tụọ ya ma e tunyere ya na otu izu ahụ tupu mgbe ahụ."
      }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ndị nwe ụlọ ahịa na-emelite mpempe akwụkwọ ngwaahịa ha kwa izu (nnyocha nsochi ụbọchị 30)",
      "Ndị nwe ụlọ ahịa na-akọ na ngwaahịa kacha ere anaghịzi agwụ ha ọtụtụ oge n'ime ụbọchị 60",
      "Ndị nwe ụlọ ahịa mere mmemme ire ahịa n'oge ma kọọ nsonaazụ ha tụrụ"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Kọmputa nwere Google Sheets ma ọ bụ Excel (ekwentị na-arụ ọrụ maka nkọwa na akara)",
      "Ngwa enyemaka AI n'efu: Microsoft Copilot, ChatGPT ma ọ bụ Google Gemini",
      "Label ma ọ bụ invoice ngwaahịa, na ire ahịa izu 4 ruo 8 site na ngwaahịa ọ bụla site na register ma ọ bụ ndekọ n'aka",
      "Ihe dị ka nkeji 60 n'ozuzu: nkuzi, omume, nnwale na ọrụ ikpeazụ"
    ],
    facilitatorNotes: [
      "Rịọ ndị nwe ụlọ ahịa ka ha weta label ma ọ bụ invoice ngwaahịa na akụkọ ire ahịa ma ọ bụ ndekọ kwa izu.",
      "Rụọ otu ọmụmaatụ ọnụ ọgụgụ ịzụtaghachi ọnụ n'elu bọọdụ tupu ndị nwe ụlọ ahịa emee mpempe akwụkwọ ha.",
      "Etinyela okwuntughe ndị na-ebubata ngwaahịa, aha ndị ahịa ma ọ bụ ozi kaadị n'ime AI mgbe ọ bụla; ngụkọta ngwaahịa zuru ezu.",
      "Chetara ndị nwe ụlọ ahịa na ọ bụ ha, ọ bụghị AI, na-ekpebi ngwaahịa ha ga-akwalite na ọnụahịa ya.",
      "Jiri rubric tụọ akara ngwa ọrụ ụlọ ahịa ahụ, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};
