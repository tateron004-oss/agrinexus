"use strict";

// Koach Learn course (Igbo translation of shared/excel-spreadsheets.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Formulas, menu names and button names stay in English, as they appear in the apps.

module.exports = {
  id: "excel-spreadsheets-ig",
  lang: "ig",
  translationOf: "excel-spreadsheets",
  category: "Small Business",
  name: "Excel na Spreadsheet maka Ọrụ",
  skills: "Itinye na ịhazi data, Ịgbakọ ngụkọta na nkezi site na SUM na AVERAGE, Ime mkpebi site na IF, Ịhazi n'usoro na ịchacha (filter), Ime obere chaatị, Ịkpọnwụ isi ahịrị na ikesa spreadsheet",
  outcome: "iwu spreadsheet ọrụ dị ọcha na Excel ma ọ bụ Google Sheets: itinye na ịhazi data, ịgbakọ ngụkọta na nkezi site na fọmụla, iji IF dee aha n'ahịrị ọ bụla, ịhazi n'usoro na ịchacha, ime obere chaatị, ịkpọnwụ isi ahịrị, na ikesa ya n'enweghị nsogbu na onye ọrụ ibe gị.",
  about: [
    "A na-eji spreadsheet n'ihe fọrọ nke nta ka ọ bụrụ ebe ọrụ ọ bụla: ụlọ ahịa na-edekọ ihe o rere, otu enyemaka (nonprofit) na-edekọ onyinye na awa ndị ọrụ afọ ofufo, onye isi otu ndị ọrụ na-edekọ oge ọrụ (shift), ezinụlọ na-edekọ atụmatụ ego (budget). Ịmara ya nke ọma bụ nka ndị were mmadụ n'ọrụ na-achọ.",
    "Ihe ọmụmụ a na-arụ ọrụ na Microsoft Excel (na kọmputa, ma ọ bụ n'efu na weebụ na office.com site n'akaụntụ Microsoft) na na Google Sheets (n'efu site n'akaụntụ Google na sheets.google.com). Fọmụla ndị ahụ bụ otu na ha abụọ. Mgbe aha menu dị iche, nkuzi ahụ na-agwa gị ha abụọ ma ọ bụ kọwaa ihe ị ga-eme.",
    "Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise. Gụọ nkuzi ahụ, lee slaịdị, wee mee ọrụ \"Nwalee ya ugbu a\" n'ezi spreadsheet. Ị ga-ewu otu spreadsheet omume n'ihe ọmụmụ a niile. E nwere obere nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe."
  ],
  finalTask: "Wuo spreadsheet \"Weekly Sales\" (ahịa izu) (ma ọ bụ \"Volunteer Hours\" ma ọ bụ \"Shift Hours\") nwere opekata mpe ahịrị 8: isi okwu n'ụdị bold, ego gosiri dị ka currency (ego), ngụkọta SUM na AVERAGE, kọlụm IF na-ede aha n'ahịrị ọ bụla (dịka ọmụmaatụ \"Goal met\" ma ọ bụ \"Below goal\"), data a haziri site na nke kachasị elu ruo nke kachasị ala, filter n'ahịrị isi, chaatị kọlụm, ahịrị mbụ a kpọnwụrụ, na faịlụ ahụ e kesara otu onye dị ka viewer (onye na-ele naanị).",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị nwe obere azụmahịa, ndị ọrụ ha, ndị na-achọ ọrụ na ndị ọrụ afọ ofufo chọrọ idekọ ahịa, awa ọrụ, ngwaahịa ma ọ bụ onyinye n'ọrụ. Ọtụtụ ahụla spreadsheet mana ha ewubeghị otu site na mbido.",
    startingPoint: "Ha nwere ike iji kọmputa ma ọ bụ ekwentị, pịa ederede ma meghee web browser. Ha anaghị eji fọmụla, ịhazi n'usoro, chaatị ma ọ bụ ntọala ikesa, ma ọ bụ na-eji ha ntakịrị.",
    gap: "Ọtụtụ ọrụ na obere azụmahịa na-atụ anya nka spreadsheet ndị bụ isi, ma ndekọ e debere n'akwụkwọ ma ọ bụ na spreadsheet na-adịghị n'usoro na-ebute mperi. Iwu spreadsheet dị ọcha nwere ngụkọta, aha, chaatị na ikesa n'enweghị nsogbu na-echekwa oge ma na-eme ka e nwee ike iwe onye na-amụ ihe n'ọrụ.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na nzọụkwụ dị mkpụmkpụ",
      "Ngwaọrụ: kọmputa nwere Excel, Excel na weebụ ma ọ bụ Google Sheets kacha mma; ekwentị siri ike karị",
      "Oge: ihe dị ka nkeji 5 kwa nkuzi gbakwunyere omume aka",
      "Menu dị iche ntakịrị n'etiti Excel na Google Sheets; e gosiri ha abụọ",
      "Nzuzo: ọ dịghị okwuntughe, nọmba Social Security ma ọ bụ ozi ụlọ akụ na spreadsheet omume ma ọ bụ nke e kesara"
    ],
    prerequisites: "Ọ dịghị. Ndị ọhụrụ na kọmputa nwere ike ibu ụzọ were ihe ọmụmụ nka kọmputa ndị bụ isi."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Na faịlụ Excel ma ọ bụ Google Sheets efu", action: "itinye obere tebụl nwere isi okwu n'ahịrị 1 na otu ndekọ n'ahịrị ọ bụla", standard: "ya na otu ụdị data n'ime kọlụm ọ bụla" },
    { id: "O2", condition: "Mgbe e nyere gị tebụl data", action: "ịhazi isi okwu ka ha bụrụ bold, ego ka ọ bụrụ currency, na kọlụm ka ha dabara", standard: "nke mere na a ga-aghọta ya ozugbo e lere ya anya" },
    { id: "O3", condition: "Mgbe e nyere gị kọlụm nọmba", action: "ide fọmụla SUM, AVERAGE na fọmụla ahịrị, ma detuo ha gbadaa site na fill handle", standard: "nke nwere azịza ziri ezi na enweghị ozi mperi" },
    { id: "O4", condition: "Mgbe e nyere gị iwu dị ka ebumnuche ahịa ma ọ bụ awa 40", action: "ide fọmụla IF na-ede aha n'ahịrị ọ bụla", standard: "ya na aha ziri ezi n'ahịrị ọ bụla" },
    { id: "O5", condition: "Mgbe e nyere gị tebụl nwere opekata mpe ahịrị 8", action: "ịhazi tebụl ahụ niile n'usoro, tinye filter ma kpọnwụọ ahịrị isi", standard: "n'agwakọtaghị ahịrị ọ bụla" },
    { id: "O6", condition: "Mgbe e nyere gị aha na nọmba", action: "ime chaatị kọlụm ma kesaa faịlụ ahụ ya na ikike kacha nta onye ahụ chọrọ", standard: "n'enweghị ozi nzuzo ọ bụla na spreadsheet e kesara" }
  ],
  chapters: [
    {
      name: "Isi 1: Iwu spreadsheet gị",
      lessons: [
        {
          objectives: ["O1"],
          title: "Sel, ahịrị, kọlụm na itinye data",
          minutes: 5,
          goal: "Meghee spreadsheet ọhụrụ ma tinye obere tebụl data nwere isi okwu.",
          text: [
            "Spreadsheet bụ igbe nwere ahịrị na kọlụm. Kọlụm na-agbada site n'elu ruo n'ala, ha nwekwara mkpụrụ akwụkwọ (A, B, C). Ahịrị na-agafe site n'aka ekpe ruo n'aka nri, ha nwekwara nọmba (1, 2, 3). Igbe ọ bụla bụ sel (cell), a na-akpọ ya aha site na kọlụm na ahịrị ya: sel dị n'elu n'aka ekpe bụ A1. Otu faịlụ nwere ike ijide ọtụtụ sheet, e gosiri ha dị ka taabụ n'ala.",
            "Iji tinye data, pịa sel, dee ihe, ma pịa Enter ka ị gbadaa ma ọ bụ Tab ka ị gaa n'aka nri. Tinye isi okwu n'ahịrị 1, dị ka Date, Item, Quantity na Price, na otu ndekọ n'ahịrị ọ bụla n'okpuru ya. Debe otu ụdị data na kọlụm ọ bụla: naanị ụbọchị na kọlụm Date, naanị nọmba na Price.",
            "Iji dozie sel, pịa ya ma dee n'elu ya, ma ọ bụ pịa ya ugboro abụọ (double-click) iji dezie otu akụkụ ya. Undo (Ctrl+Z na Windows, Cmd+Z na Mac) na-ewepụ mgbanwe ikpeazụ i mere. Excel na weebụ na Google Sheets na-echekwa ka ị na-arụ ọrụ; na Excel nke kọmputa, na-echekwa ya ugboro ugboro.",
            "Iji malite: na Google Sheets, gaa na sheets.google.com ma họrọ spreadsheet efu (blank). Na Excel, meghee Excel (ma ọ bụ Excel na weebụ na office.com) ma họrọ blank workbook."
          ],
          steps: ["Meghee spreadsheet efu na Google Sheets ma ọ bụ Excel.", "Pịa sel A1 ma dee isi okwu mbụ gị. Pịa Tab ka ị gaa n'aka nri.", "Dee isi okwu ndị ọzọ n'ahịrị 1.", "Tinye otu ndekọ n'ahịrị ọ bụla, malite n'ahịrị 2.", "Nye faịlụ ahụ aha doro anya, dị ka \"Weekly Sales - March\"."],
          words: [["Sel (cell)", "otu igbe n'ime spreadsheet, a na-akpọ ya site na mkpụrụ akwụkwọ kọlụm na nọmba ahịrị, dị ka B3."], ["Isi okwu (header)", "aha dị n'elu kọlụm na-ekwu ihe dị n'ime ya."], ["Workbook", "faịlụ Excel; o nwere ike ijide ọtụtụ sheet."]],
          slides: [
            { title: "Igbe spreadsheet", bullets: ["Kọlụm nwere mkpụrụ akwụkwọ; ahịrị nwere nọmba", "A na-akpọ sel aha dị ka A1 ma ọ bụ B3", "Taabụ ndị dị n'ala bụ sheet dị iche iche"] },
            { title: "Itinye data", bullets: ["Pịa, dee, wee pịa Enter (gbadaa) ma ọ bụ Tab (n'aka nri)", "Isi okwu n'ahịrị 1", "Otu ndekọ n'ahịrị ọ bụla, otu ụdị data na kọlụm ọ bụla"] },
            { title: "Idozi na ichekwa", bullets: ["Dee n'elu sel ma ọ bụ pịa ya ugboro abụọ iji dezie", "Undo: Ctrl+Z (Windows) ma ọ bụ Cmd+Z (Mac)", "Ụdị weebụ na-echekwa ka ị na-arụ ọrụ"] }
          ],
          tryIt: "Meghee spreadsheet efu. N'ahịrị 1 dee isi okwu Day, Item, Quantity, Price. Tinye ahịrị 8 nke ahịa omume (dịka ọmụmaatụ Mon, Coffee, 12, 3.50). Kpọọ faịlụ ahụ \"Practice Sales\".",
          youCanNow: "imeghe spreadsheet, ịchọta sel ọ bụla site n'aha ya, na itinye tebụl dị ọcha nwere isi okwu.",
          quickCheck: [
            { objective: "O1", q: "Gịnị bụ sel?", options: ["Kọlụm dum", "Taabụ dị n'ala faịlụ", "Otu igbe na spreadsheet, a na-akpọ site na kọlụm na ahịrị ya", "Aha faịlụ ahụ"], answer: 2, why: "Igbe ọ bụla bụ sel, a na-akpọ ya site na mkpụrụ akwụkwọ kọlụm na nọmba ahịrị, dị ka A1." },
            { objective: "O1", q: "Ị na-eme ndepụta ọnụahịa. Gịnị ga-abanye na kọlụm Price?", options: ["Ọnụahịa na aha ngwaahịa agwakọtara ọnụ", "Naanị ọnụahịa", "Ọnụahịa na ndetu gbasara onye ahịa ọ bụla", "Ihe ọ bụla dabara"], answer: 1, why: "Debe otu ụdị data na kọlụm ọ bụla, ya mere kọlụm Price na-ejide naanị nọmba." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ịhazi ya ka ọ dị mfe ịgụ",
          minutes: 4,
          goal: "Hazie isi okwu, ego na obosara kọlụm ka spreadsheet ahụ doo anya.",
          text: [
            "Ịhazi (formatting) na-agbanwe otu data si adị n'anya, ọ bụghị ihe ọ bụ. Ezigbo nhazi na-eme ka a ghọta spreadsheet ozugbo e lere ya anya.",
            "Mee ka isi okwu bụrụ bold: họrọ ahịrị 1 ma pịa bọtịnụ B (Bold) dị na toolbar, ma ọ bụ pịa Ctrl+B (Cmd+B na Mac). Ị nwekwara ike itinye agba n'azụ ahịrị isi.",
            "Gosi ego dị ka currency: họrọ kọlụm Price, wee meghee menu ụdị nọmba (number format) ma họrọ Currency. Na Excel ọ dị na taabụ Home; na Google Sheets ọ dị n'okpuru Format, wee Number, e nwekwara bọtịnụ $ na toolbar.",
            "Mee ka kọlụm dabara: pịa ugboro abụọ ahịrị dị n'etiti mkpụrụ akwụkwọ kọlụm abụọ n'elu, kọlụm dị n'aka ekpe ga-agbasa ruo ka ihe kacha ogologo n'ime ya. Nke a na-arụ ọrụ na Excel na Google Sheets."
          ],
          steps: ["Họrọ ahịrị 1 site n'ịpịa nọmba 1 dị n'aka ekpe.", "Pịa Bold (B) ma ọ bụ pịa Ctrl+B.", "Họrọ kọlụm Price site n'ịpịa mkpụrụ akwụkwọ ya.", "Họrọ Currency na menu ụdị nọmba (Excel: taabụ Home; Sheets: Format > Number, ma ọ bụ bọtịnụ $).", "Pịa ugboro abụọ oke dị n'etiti mkpụrụ akwụkwọ kọlụm ka obosara ya dabara n'onwe ya."],
          words: [["Ịhazi (formatting)", "ịgbanwe otu data si adị n'anya (bold, agba, currency) n'agbanweghị uru ya."], ["Ịhọrọ (select)", "ịpịa ma ọ bụ ịdọkpụ n'elu sel iji họrọ ha tupu i mee ihe na ha."]],
          slides: [
            { title: "Ịhazi na-agbanwe ka o si adị", bullets: ["Ọ bụghị uru dị n'ime ya", "Ọ na-eme ka spreadsheet dị mfe ịgụ"] },
            { title: "Isi okwu bold", bullets: ["Họrọ ahịrị 1", "Pịa B ma ọ bụ pịa Ctrl+B (Cmd+B na Mac)", "Tinye agba n'azụ ya ma ọ bụrụ na ị chọrọ"] },
            { title: "Ego dị ka currency", bullets: ["Họrọ kọlụm ahụ", "Excel: menu ụdị nọmba na taabụ Home", "Sheets: Format > Number, ma ọ bụ bọtịnụ $"] },
            { title: "Mee ka kọlụm dabara", bullets: ["Pịa ugboro abụọ ahịrị dị n'etiti mkpụrụ akwụkwọ kọlụm", "Ọ na-arụ ọrụ na Excel na Google Sheets"] }
          ],
          tryIt: "Na spreadsheet Practice Sales gị, mee ka ahịrị 1 bụrụ bold nwere agba dị nro n'azụ ya, gosi kọlụm Price dị ka currency, ma mee ka kọlụm ọ bụla dabara.",
          youCanNow: "ịhazi isi okwu, ego na obosara kọlụm ka spreadsheet doo anya ma dị ka nke ọkachamara.",
          quickCheck: [
            { objective: "O2", q: "Gịnị ka ịhazi (formatting) na-agbanwe?", options: ["Otu data si adị n'anya, ọ bụghị ihe ọ bụ", "Nọmba ndị dị na sel gị", "Fọmụla ndị dị na spreadsheet gị", "Onye nwere ike imeghe faịlụ ahụ"], answer: 0, why: "Ịhazi na-agbanwe otu data si adị, dị ka bold ma ọ bụ currency, ọ bụghị uru ya." },
            { objective: "O2", q: "Kọlụm dị warara nke ukwuu, ọ na-ebepụ ederede. Gịnị ka ị ga-eme?", options: ["Hichapụ ihe ndị dị ogologo", "Mee ka mkpụrụ akwụkwọ dị obere nke ukwuu", "Dee ederede ahụ ọzọ na sel abụọ", "Pịa ugboro abụọ ahịrị dị n'etiti mkpụrụ akwụkwọ kọlụm n'elu"], answer: 3, why: "Ịpịa oke ahụ ugboro abụọ na-eme ka kọlụm ahụ gbasaa ruo ka ihe kacha ogologo n'ime ya." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ngụkọta na nkezi site na SUM na AVERAGE",
          minutes: 5,
          goal: "Dee fọmụla SUM na AVERAGE ma detuo fọmụla gbadaa kọlụm.",
          text: [
            "Fọmụla na-amalite mgbe niile site n'akara nhata (=). O nwere ike ime mgbakọ site n'iji aha sel: =C2*D2 na-amụba ọnụọgụ dị na C2 site n'ọnụahịa dị na D2. Ọ bụrụ na ị gbanwee C2, azịza ahụ na-agbanwe n'onwe ya.",
            "SUM na-agbakọ ọtụtụ sel ọnụ (range). A na-ede range dị ka sel mbụ, kọlọn (:), sel ikpeazụ: =SUM(E2:E9) na-agbakọ E2 ruo E9. AVERAGE na-achọta nkezi: =AVERAGE(E2:E9). Ha abụọ na-arụ otu ụzọ ahụ na Excel na Google Sheets.",
            "Iji detuo fọmụla gbadaa kọlụm, pịa sel nwere fọmụla ahụ, wee dọkpụ obere igbe dị n'akụkụ ala aka nri ya (fill handle) gbadaa. Aha sel na-agbanwe maka ahịrị ọ bụla: E2 ghọrọ E3, E4 na ndị ọzọ.",
            "Lelee ọrụ gị: ọ bụrụ na fọmụla gosiri mperi dị ka #NAME? ma ọ bụ #VALUE!, chọọ mperi n'aha ọrụ (function) ahụ ma ọ bụ ederede na kọlụm nọmba."
          ],
          steps: ["Na E1 dee isi okwu Total.", "Na E2 dee =C2*D2 ma pịa Enter.", "Dọkpụ fill handle site na E2 gbadaa ruo n'ahịrị ikpeazụ.", "N'okpuru ahịrị ikpeazụ, dee =SUM(E2:E9) maka ngụkọta niile.", "N'okpuru ya, dee =AVERAGE(E2:E9) maka nkezi ahịa."],
          words: [["Fọmụla (formula)", "mgbakọ dị na sel nke na-amalite na = ma na-agbanwe mgbe data gbanwere."], ["Range", "otu ìgwè sel e dere dị ka mbụ:ikpeazụ, dị ka E2:E9."], ["Fill handle", "obere igbe dị n'akụkụ ala aka nri nke sel ahọrọ, nke ị na-adọkpụ iji detuo."]],
          slides: [
            { title: "Fọmụla na-amalite na =", bullets: ["=C2*D2 na-amụba sel abụọ", "Gbanwee data ahụ, azịza ahụ ga-agbanwe"] },
            { title: "SUM na AVERAGE", bullets: ["=SUM(E2:E9) na-agbakọ range", "=AVERAGE(E2:E9) na-achọta nkezi", "Otu ihe ahụ na Excel na Google Sheets"] },
            { title: "Detuo fọmụla gbadaa", bullets: ["Dọkpụ fill handle dị na nkuku sel ahụ", "Aha sel na-agbanwe maka ahịrị ọ bụla"] },
            { title: "Mperi", bullets: ["#NAME?: lelee nsụpe aha ahụ", "#VALUE!: ederede dị ebe nọmba kwesịrị ịdị"] }
          ],
          tryIt: "Na spreadsheet gị, tinye kọlụm Total nwere =C2*D2 e detuuru gbadaa, wee tinye ngụkọta niile site na SUM na nkezi ahịa site na AVERAGE n'okpuru kọlụm ahụ. Gbanwee otu ọnụọgụ ma lee ka ngụkọta na-agbanwe.",
          youCanNow: "ide fọmụla SUM na AVERAGE, ịmụba sel, na idetuo fọmụla gbadaa kọlụm.",
          quickCheck: [
            { objective: "O3", q: "Gịnị ka =C2*D2 na-eme?", options: ["Ọ na-agbakọ C2 na D2", "Ọ na-amụba uru dị na C2 site n'uru dị na D2", "Ọ na-edetuo C2 n'ime D2", "Ọ na-egosi mperi"], answer: 1, why: "Akara * na-amụba, ya mere =C2*D2 na-amụba ọnụọgụ site n'ọnụahịa." },
            { objective: "O3", q: "Ị chọrọ ngụkọta E2 ruo E9. Gịnị ka ị ga-ede?", options: ["SUM E2 to E9", "=E2+E9", "=SUM(E2:E9)", "=TOTAL E2-E9"], answer: 2, why: "SUM na-agbakọ range e dere dị ka sel mbụ, kọlọn, sel ikpeazụ, fọmụla ọ bụla na-amalitekwa na =." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Iwu spreadsheet gị",
        questions: [
          { objective: "O1", q: "Gịnị bụ aha sel dị na kọlụm C, ahịrị 4?", options: ["4C", "C4", "Row C", "Cell 34"], answer: 1, why: "A na-akpọ sel site na mkpụrụ akwụkwọ kọlụm ya, wee nọmba ahịrị ya." },
          { objective: "O1", q: "Ebee ka isi okwu gị kwesịrị ịdị?", options: ["N'ahịrị 1, otu na kọlụm ọ bụla", "N'ala", "Na sel ọ bụla ọ masịrị gị", "Na faịlụ dị iche"], answer: 0, why: "Isi okwu n'ahịrị 1 na-akpọ aha kọlụm data ọ bụla dị n'okpuru." },
          { objective: "O2", q: "Ị chọrọ ka ọnụahịa gosi akara dollar. Gịnị ka ị ga-eme?", options: ["Dee $ tupu nọmba ọ bụla", "Mee ka kọlụm ahụ bụrụ bold", "Hichapụ ọnụahịa ndị ahụ", "Họrọ Currency na menu ụdị nọmba"], answer: 3, why: "Nhazi currency na-etinye akara ahụ na ntụpọ ego na sel ọ bụla." },
          { objective: "O3", q: "Kedu fọmụla na-agbakọ sel B2 ruo B10?", options: ["SUM B2-B10", "=ADD(B2,B10)", "=SUM(B2:B10)", "B2+B10"], answer: 2, why: "Fọmụla na-amalite na =, range na-ejikwa kọlọn." },
          { objective: "O3", q: "Gịnị na-eme mgbe ị dọkpụrụ fill handle gbadaa site na sel nwere =C2*D2?", options: ["E detuo fọmụla ahụ, ọ na-agbanwekwa maka ahịrị ọ bụla", "E hichapụ sel ahụ", "Ahịrị ọ bụla na-enweta kpọmkwem =C2*D2", "E kesaa spreadsheet ahụ"], answer: 0, why: "Aha sel na-agbanwe n'ahịrị n'ahịrị: C3*D3, C4*D4 na ndị ọzọ." }
        ]
      }
    },
    {
      name: "Isi 2: Ịrụ ọrụ na data gị",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ime mkpebi site na IF",
          minutes: 5,
          goal: "Dee fọmụla IF na-ede aha n'ahịrị ọ bụla dabere n'otu iwu.",
          text: [
            "IF na-enyocha otu ọnọdụ, ọ na-egosi otu azịza ma ọ bụrụ eziokwu, na azịza ọzọ ma ọ bụrụ ụgha. Usoro ya bụ =IF(test, value if true, value if false), ya bụ: nnwale, azịza ma ọ bụrụ eziokwu, azịza ma ọ bụrụ ụgha.",
            "Ọmụmaatụ: =IF(E2>=50,\"Goal met\",\"Below goal\") na-ede aha n'ahịa (Goal met: e ruru ebumnuche; Below goal: ọ ruteghị). =IF(C2>40,\"Overtime\",\"Regular\") na-ede aha n'awa ọrụ otu izu. =IF(D2=\"\",\"Missing\",\"OK\") na-egosi sel efu. Azịza ederede na-aba n'ime akara ntụpọ okwu abụọ (\" \"); nọmba anaghị aba.",
            "Akara ntụnyere: > karịrị, < erughị, >= karịrị ma ọ bụ hà nhata, <= erughị ma ọ bụ hà nhata, = hà nhata, <> ahaghị nhata.",
            "IF na-arụ otu ụzọ ahụ na Excel na Google Sheets. Ọ bụrụ na ntọala mpaghara spreadsheet gị na-eji kọma maka ntụpọ ego (decimal), ihe nkewa ahụ nwere ike ịbụ semikọlọn (;) kama kọma; app ahụ ga-egosi gị usoro ya ka ị na-ede."
          ],
          steps: ["Tinye isi okwu, dị ka Status, na kọlụm efu na-esote.", "N'ahịrị 2 dee =IF(", "Dee nnwale ahụ, dị ka E2>=50, wee kọma.", "Dee azịza eziokwu n'ime akara ntụpọ okwu, kọma, azịza ụgha n'ime akara ntụpọ okwu, na ).", "Pịa Enter ma detuo fọmụla ahụ gbadaa site na fill handle."],
          words: [["IF", "ọrụ (function) na-egosi otu azịza mgbe nnwale bụ eziokwu na azịza ọzọ mgbe ọ bụ ụgha."], ["Ọnọdụ (condition)", "nnwale dị na fọmụla IF, dị ka E2>=50."]],
          slides: [
            { title: "Usoro IF", bullets: ["=IF(test, if true, if false)", "Otu ihe ahụ na Excel na Google Sheets"] },
            { title: "Ọmụmaatụ", bullets: ["=IF(E2>=50,\"Goal met\",\"Below goal\")", "=IF(C2>40,\"Overtime\",\"Regular\")", "Ederede n'ime akara ntụpọ okwu abụọ; nọmba na-enweghị ya"] },
            { title: "Akara ntụnyere", bullets: ["> karịrị, < erughị", ">= opekata mpe, <= kacha elu", "= hà nhata, <> ahaghị nhata"] }
          ],
          tryIt: "Tinye kọlụm Status na spreadsheet gị nwere =IF(E2>=50,\"Goal met\",\"Below goal\") ma detuo ya gbadaa. Gbanwee otu ngụkọta ka ọ gafee 50 ma lee ka aha ahụ na-agbanwe.",
          youCanNow: "ide fọmụla IF na-ede aha n'ahịrị n'onwe ya dabere n'otu iwu.",
          quickCheck: [
            { objective: "O4", q: "Gịnị ka ọrụ IF na-eme?", options: ["Ọ na-agbakọ kọlụm nọmba", "Ọ na-ahazi tebụl n'usoro", "Ọ na-eme chaatị", "Ọ na-egosi otu azịza ma nnwale bụ eziokwu na azịza ọzọ ma ọ bụ ụgha"], answer: 3, why: "Usoro ya bụ =IF(test, value if true, value if false)." },
            { objective: "O4", q: "Ị chọrọ ide \"Goal met\" n'ahịa 50 ma ọ bụ karịa. Kedu fọmụla ị ga-ede n'ahịrị 2?", options: ["=IF(E2>=50,\"Goal met\",\"Below goal\")", "=IF(E2<50,Goal met,Below goal)", "=SUM(E2>=50)", "=IF(\"Goal met\")"], answer: 0, why: "Nnwale E2>=50 na-ebu ụzọ, azịza ederede na-abakwa n'ime akara ntụpọ okwu abụọ." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ịhazi n'usoro, ịchacha na ịkpọnwụ ahịrị isi",
          minutes: 5,
          goal: "Hazie data gị n'usoro, chachaa ya ka o gosi naanị ụfọdụ ahịrị, ma kpọnwụọ ahịrị isi.",
          text: [
            "Ịhazi n'usoro (sort) na-etinye ahịrị n'usoro, dị ka ahịa kachasị elu na mbụ ma ọ bụ aha site na A ruo Z. Ịchacha (filter) na-ezo ahịrị ị na-achọghị ugbu a, dị ka igosi naanị ahịrị \"Below goal\". Ha abụọ anaghị ehichapụ data ọ bụla.",
            "Excel: pịa sel ọ bụla na tebụl gị, gaa na taabụ Data, ma họrọ Sort iji họrọ kọlụm na usoro, ma ọ bụ họrọ Filter iji tinye akara mgbada (arrow) n'ahịrị isi. Google Sheets: họrọ data gị, meghee menu Data ma họrọ Sort range (kwado na data ahụ nwere ahịrị isi), ma ọ bụ họrọ Create a filter iji tinye akara mgbada ndị ahụ. Pịa akara mgbada n'isi okwu iji hazie n'usoro ma ọ bụ iji họrọ naanị uru ị chọrọ ịhụ.",
            "Hazie tebụl ahụ niile mgbe niile, ọ bụghị naanị otu kọlụm, ma ọ bụghị ya ahịrị ga-agwakọta. Ịhọrọ otu sel n'ime tebụl na Excel, ma ọ bụ range dum na Sheets, na-edebe ahịrị ọnụ.",
            "Ịkpọnwụ (freeze) na-edebe ahịrị isi na ihuenyo mgbe ị na-agbada ndepụta ogologo. Excel: taabụ View, Freeze Panes, wee Freeze Top Row. Google Sheets: menu View, Freeze, wee 1 row."
          ],
          steps: ["Pịa n'ime tebụl gị (Excel) ma ọ bụ họrọ tebụl ahụ niile (Sheets).", "Sort: Excel taabụ Data > Sort; Sheets Data > Sort range, ya na ahịrị isi.", "Filter: Excel taabụ Data > Filter; Sheets Data > Create a filter.", "Jiri akara mgbada dị n'isi okwu gosi naanị ahịrị ị chọrọ.", "Freeze: Excel View > Freeze Panes > Freeze Top Row; Sheets View > Freeze > 1 row."],
          words: [["Sort (ịhazi n'usoro)", "itinye ahịrị n'usoro site n'otu kọlụm, na-edebe ahịrị ọ bụla ọnụ."], ["Filter (ịchacha)", "ịzo ahịrị ndị na-adabaghị ihe ị họọrọ, n'ehichapụghị ha."], ["Freeze (ịkpọnwụ)", "idebe ahịrị ma ọ bụ kọlụm na ihuenyo ka ị na-agbada."]],
          slides: [
            { title: "Sort na filter", bullets: ["Sort: tinye ahịrị n'usoro", "Filter: gosi naanị ahịrị ị chọrọ", "Ha abụọ anaghị ehichapụ data"] },
            { title: "Na Excel", bullets: ["Taabụ Data > Sort", "Taabụ Data > Filter na-etinye akara mgbada n'isi okwu", "View > Freeze Panes > Freeze Top Row"] },
            { title: "Na Google Sheets", bullets: ["Data > Sort range (data nwere ahịrị isi)", "Data > Create a filter", "View > Freeze > 1 row"] },
            { title: "Debe ahịrị ọnụ", bullets: ["Hazie tebụl ahụ niile, ọ dịghị mgbe ọ bụ naanị otu kọlụm"] }
          ],
          tryIt: "Hazie spreadsheet gị site na Total, site na nke kachasị ukwuu ruo nke kachasị nta. Tinye filter ma gosi naanị ahịrị \"Below goal\", wee kpochapụ filter ahụ. Kpọnwụọ ahịrị mbụ ma gbadaa ka ị hụ na isi okwu ndị ahụ ka nọ.",
          youCanNow: "ịhazi n'usoro na ịchacha data n'enweghị nsogbu, na ịkpọnwụ ahịrị isi.",
          quickCheck: [
            { objective: "O5", q: "Gịnị ka ịkpọnwụ ahịrị isi na-eme?", options: ["Ọ na-akpọchi faịlụ ka onye ọ bụla ghara idezi ya", "Ọ na-edebe ahịrị isi na ihuenyo mgbe ị na-agbada", "Ọ na-ehichapụ ahịrị ndị dị n'okpuru", "Ọ na-eme ka isi okwu bụrụ acha anụnụ"], answer: 1, why: "Ịkpọnwụ na-eme ka a na-ahụ isi okwu ka ị na-agbada ndepụta ogologo." },
            { objective: "O5", q: "Ị chọrọ ịhụ naanị ahịrị \"Below goal\" ugbu a, n'atụfughị data ọ bụla. Gịnị ka ị ga-eji?", options: ["Hichapụ ahịrị ndị ọzọ", "Hazie naanị otu kọlụm n'usoro", "Filter n'ahịrị isi", "Freeze Panes"], answer: 2, why: "Filter na-ezo ahịrị ị na-achọghị ugbu a, ọ naghị ehichapụ ihe ọ bụla." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ime chaatị na ikesa spreadsheet gị",
          minutes: 5,
          goal: "Mee obere chaatị kọlụm ma kesaa spreadsheet ahụ ya na ikike ziri ezi.",
          text: [
            "Chaatị na-eme ka nọmba ghọọ foto. Chaatị kọlụm dị mma maka ịtụnyere ọnụọgụ, dị ka ahịa kwa ụbọchị ma ọ bụ awa ndị ọrụ afọ ofufo kwa onye.",
            "Họrọ kọlụm abụọ: aha (dị ka Day) na nọmba (dị ka Total), gụnyere isi okwu ha. Iji họrọ kọlụm abụọ na-anọghị n'akụkụ ibe ha, jide Ctrl (Cmd na Mac) ka ị na-ahọrọ nke abụọ. Excel: gaa na taabụ Insert ma họrọ column chart (ma ọ bụ Recommended Charts). Google Sheets: meghee menu Insert ma họrọ Chart; chart editor na-emeghe n'aka nri, ebe ị nwere ike ịhọrọ Column chart. Pịa aha chaatị ahụ iji gbanwee ya.",
            "Iji kesaa: na Google Sheets, pịa bọtịnụ Share dị n'elu aka nri, dee email onye ahụ, ma họrọ Viewer, Commenter ma ọ bụ Editor. Na Excel, a ga-echekwarịrị faịlụ ahụ na OneDrive ma ọ bụ SharePoint; wee pịa Share, tinye email ahụ, ma họrọ ma ha nwere ike idezi ma ọ bụ naanị ilele.",
            "Kesaa n'enweghị nsogbu: nye ikike kacha nta onye ahụ chọrọ (naanị ilele ma ọ bụrụ na ọ chọrọ naanị ịgụ ya), ma etinyela okwuntughe, nọmba Social Security ma ọ bụ ozi ụlọ akụ na spreadsheet e kesara."
          ],
          steps: ["Họrọ kọlụm aha na kọlụm nọmba, ya na isi okwu ha.", "Excel: taabụ Insert > column chart. Sheets: Insert > Chart, wee họrọ Column chart.", "Gbanwee aha chaatị ahụ.", "Pịa Share, tinye email onye ahụ.", "Họrọ naanị ilele (view-only) ma ọ bụrụ na ọ dịghị mkpa ka ọ dezie, wee zipu."],
          words: [["Chaatị kọlụm (column chart)", "chaatị nwere ogidi guzoro ọtọ, dị mma maka ịtụnyere ọnụọgụ."], ["Viewer", "onye nwere ike ịhụ faịlụ e kesara mana ọ pụghị ịgbanwe ya."], ["Editor", "onye nwere ike ịgbanwe faịlụ e kesara."]],
          slides: [
            { title: "Họrọ chaatị kwesịrị ekwesị", bullets: ["Chaatị kọlụm: tụnyere ọnụọgụ", "Ọmụmaatụ: ahịa kwa ụbọchị, awa kwa onye"] },
            { title: "Mee chaatị ahụ", bullets: ["Họrọ aha na nọmba ya na isi okwu", "Excel: taabụ Insert > column chart", "Sheets: Insert > Chart > Column chart"] },
            { title: "Kesaa ya", bullets: ["Pịa Share, tinye email", "Họrọ ilele ma ọ bụ idezi", "Faịlụ Excel ga-adịrịrị na OneDrive ma ọ bụ SharePoint"] },
            { title: "Kesaa n'enweghị nsogbu", bullets: ["Nye ikike kacha nta a chọrọ", "Ọ dịghị okwuntughe, nọmba ID ma ọ bụ nọmba ụlọ akụ na spreadsheet e kesara"] }
          ],
          tryIt: "Ọrụ ikpeazụ: mechaa spreadsheet gị ka o nwee opekata mpe ahịrị 8, isi okwu bold, currency, SUM na AVERAGE, kọlụm IF Status, e haziri ya site na nke kachasị elu ruo nke kachasị ala, filter, chaatị kọlụm nke Day na Total, na ahịrị mbụ a kpọnwụrụ. Wee kesaa ya otu onye dị ka viewer.",
          youCanNow: "ime chaatị kọlụm site na data gị na ikesa spreadsheet ya na ikike ziri ezi.",
          quickCheck: [
            { objective: "O6", q: "Kedu chaatị dị mma maka ịtụnyere ọnụọgụ, dị ka awa kwa onye?", options: ["Chaatị kọlụm", "Spreadsheet efu", "Filter", "Ahịrị a kpọnwụrụ"], answer: 0, why: "Nkuzi ahụ kwuru na chaatị kọlụm dị mma maka ịtụnyere ọnụọgụ." },
            { objective: "O6", q: "Onye isi gị chọrọ naanị ịgụ spreadsheet gị. Kedu ikike ị ga-enye mgbe ị na-ekesa ya?", options: ["Editor", "Owner", "Onye ọ bụla nwere njikọ nwere ike idezi", "Viewer"], answer: 3, why: "Nye ikike kacha nta onye ahụ chọrọ; naanị ilele ma ọ bụrụ na ọ chọrọ naanị ịgụ ya." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Ịrụ ọrụ na data gị",
        questions: [
          { objective: "O4", q: "Gịnị ka =IF(C2>40,\"Overtime\",\"Regular\") na-egosi mgbe C2 bụ 45?", options: ["Regular", "45", "Overtime", "Mperi"], answer: 2, why: "45 karịrị 40, ya mere azịza eziokwu na-egosi." },
          { objective: "O4", q: "Na fọmụla IF, ebee ka azịza ederede na-aba?", options: ["N'ime akara ntụpọ okwu abụọ", "N'ime brakịt", "Mgbe akara #", "Ọ dịghị ebe"], answer: 0, why: "Azịza ederede ga-adịrịrị n'ime akara ntụpọ okwu abụọ." },
          { objective: "O5", q: "Gịnị ka filter na-eme?", options: ["Ọ na-ehichapụ ahịrị", "Ọ na-agbanwe nọmba", "Ọ na-ekesa faịlụ", "Ọ na-ezo ahịrị na-adabaghị, n'ehichapụghị ha"], answer: 3, why: "Filter na-ezo naanị ahịrị; ikpochapụ ya na-egosi ha ọzọ." },
          { objective: "O5", q: "Olee otu ị ga-esi debe ahịrị isi na ihuenyo na Google Sheets?", options: ["Format > Bold", "View > Freeze > 1 row", "Insert > Chart", "Data > Sort range"], answer: 1, why: "Ịkpọnwụ ahịrị 1 na-eme ka a na-ahụ ya ka ị na-agbada." },
          { objective: "O6", q: "Onye ọrụ afọ ofufo chọrọ naanị ịgụ spreadsheet gị. Kedu ikike ị ga-enye?", options: ["Editor", "Owner", "Viewer", "Ọ dịghị; zipu okwuntughe gị"], answer: 2, why: "Nye ikike kacha nta onye ahụ chọrọ." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Excel na Spreadsheet maka Ọrụ",
    questions: [
      { objective: "O1", q: "Na spreadsheet, a na-akpọ kọlụm aha site na:", options: ["Nọmba", "Mkpụrụ akwụkwọ", "Agba", "Ụbọchị"], answer: 1, why: "Kọlụm na-eji mkpụrụ akwụkwọ; ahịrị na-eji nọmba." },
      { objective: "O1", q: "Kedu igodo na-ebuga gị otu sel n'aka nri mgbe i dechara ihe?", options: ["Tab", "Enter", "Shift", "Esc"], answer: 0, why: "Tab na-aga n'aka nri; Enter na-agbada." },
      { objective: "O1", q: "Kedu nhazi kacha mma maka ndepụta onyinye?", options: ["Onyinye ọ bụla na faịlụ dị iche", "Data niile n'otu sel", "Sel ọ bụla ọ masịrị gị na spreadsheet", "Isi okwu n'ahịrị 1 na otu onyinye n'ahịrị ọ bụla"], answer: 3, why: "Otu ndekọ n'ahịrị ọ bụla n'okpuru isi okwu doro anya na-eme ka data baa uru." },
      { objective: "O1", q: "I dere nọmba ezighi ezi. Ụzọ kacha ngwa iji wepụ mgbanwe ikpeazụ gị bụ:", options: ["Mechie faịlụ ahụ", "Undo: Ctrl+Z (Cmd+Z na Mac)", "Hichapụ kọlụm ahụ", "Malite faịlụ ọhụrụ"], answer: 1, why: "Undo na-alaghachi ihe ikpeazụ i mere." },
      { objective: "O2", q: "Ịhazi nọmba ka ọ bụrụ currency:", options: ["Na-agbanwe otu o si adị, ọ bụghị uru ya", "Na-amụba uru ya ugboro abụọ", "Na-ehichapụ nọmba ahụ", "Na-eme ya ederede ị na-apụghị ịgbakọ"], answer: 0, why: "Ịhazi na-agbanwe naanị otu o si adị." },
      { objective: "O2", q: "Olee otu ị ga-esi mee ka kọlụm dabara ihe kacha ogologo n'ime ya?", options: ["Dee oghere", "Hichapụ isi okwu", "Pịa ugboro abụọ ahịrị dị n'etiti mkpụrụ akwụkwọ kọlụm", "Pịa Enter ugboro abụọ"], answer: 2, why: "Ịpịa oke ahụ ugboro abụọ na-eme ka kọlụm ahụ dabara n'onwe ya." },
      { objective: "O3", q: "Fọmụla ọ bụla na-amalite na:", options: ["Naanị akara mgbakwunye", "Akara dollar", "Mkpụrụ akwụkwọ", "Akara nhata"], answer: 3, why: "= na-agwa app ahụ na ọ bụ fọmụla." },
      { objective: "O3", q: "Kedu nke na-achọta nkezi D2 ruo D20?", options: ["=AVERAGE(D2:D20)", "=AVG D2 D20", "AVERAGE=D2:D20", "=SUM(D2:D20)"], answer: 0, why: "AVERAGE ya na range e dere dị ka mbụ:ikpeazụ." },
      { objective: "O3", q: "Ị gbanwere ọnụọgụ fọmụla SUM na-eji. Gịnị na-eme ngụkọta ahụ?", options: ["Ọ dịghị ihe", "Ọ na-agbanwe n'onwe ya", "Ọ na-egosi mperi", "E hichapụ ya"], answer: 1, why: "Fọmụla na-agbakọ ọzọ mgbe data ha gbanwere." },
      { objective: "O3", q: "Sel na-egosi #NAME?. Gịnị nwere ike ịkpata ya?", options: ["E kesara faịlụ ahụ", "Kọlụm ahụ bụ bold", "E sụpere aha ọrụ (function) ahụ n'ụzọ ezighi ezi", "A kpọnwụrụ spreadsheet ahụ"], answer: 2, why: "#NAME? na-apụtakarị na app ahụ amataghị aha ọrụ ahụ." },
      { objective: "O3", q: "Gịnị bụ fill handle?", options: ["Menu", "Obere igbe dị n'akụkụ ala aka nri sel, nke e ji edetuo", "Bọtịnụ Share", "Ụdị chaatị"], answer: 1, why: "Ịdọkpụ ya na-edetuo fọmụla ma na-agbanwe aha sel." },
      { objective: "O4", q: "Kedu fọmụla na-egosi \"Missing\" mgbe D2 tọgbọrọ chakoo na \"OK\" mgbe ọ bụghị?", options: ["=IF(D2=\"\",\"Missing\",\"OK\")", "=SUM(D2)", "=IF(D2,OK,Missing)", "=AVERAGE(\"Missing\")"], answer: 0, why: "Nnwale D2=\"\" na-enyocha ma sel ahụ tọgbọrọ chakoo." },
      { objective: "O4", q: "Gịnị ka <> pụtara na fọmụla?", options: ["Karịrị", "Hà nhata", "Erughị", "Ahaghị nhata"], answer: 3, why: "<> pụtara ahaghị nhata." },
      { objective: "O5", q: "Na Excel, ebee ka Sort na Filter dị?", options: ["Taabụ File", "Taabụ Data", "Taabụ Help", "Taabụ Draw"], answer: 1, why: "Sort na Filter dị na taabụ Data nke Excel." },
      { objective: "O5", q: "Na Google Sheets, olee otu ị ga-esi tinye akara mgbada filter n'ahịrị isi?", options: ["Data > Create a filter", "Insert > Chart", "Format > Number", "File > Share"], answer: 0, why: "Create a filter na-etinye akara mgbada n'isi okwu ọ bụla." },
      { objective: "O5", q: "Gịnị mere na ị gaghị ahazi naanị otu kọlụm nke tebụl n'usoro?", options: ["Ọ na-adị nwayọọ nke ukwuu", "Ọ na-ehichapụ spreadsheet ahụ", "Ahịrị na-agwakọta", "Ọ na-ekesa faịlụ ahụ"], answer: 2, why: "Ịhazi naanị otu kọlụm na-ekewapụ uru site n'ahịrị ha ndị ọzọ." },
      { objective: "O5", q: "Na Excel, olee otu ị ga-esi mee ka a na-ahụ ahịrị 1 ka ị na-agbada?", options: ["Insert > Chart", "Home > Bold", "Data > Filter", "View > Freeze Panes > Freeze Top Row"], answer: 3, why: "Freeze Top Row na-edebe isi okwu na ihuenyo." },
      { objective: "O6", q: "Kedu chaatị kacha mma maka ịtụnyere ahịa kwa ụbọchị?", options: ["Chaatị kọlụm", "Ọ dịghị chaatị", "Chaatị na-enweghị aha", "Foto pie i sere"], answer: 0, why: "Chaatị kọlụm na-atụnyere ọnụọgụ n'akụkụ ibe ha." },
      { objective: "O6", q: "Na Google Sheets, olee otu ị ga-esi malite chaatị?", options: ["Data > Sort range", "Insert > Chart", "View > Freeze", "Format > Bold"], answer: 1, why: "Insert > Chart na-emeghe chart editor." },
      { objective: "O6", q: "Gịnị ka ị na-ekwesịghị itinye MGBE Ọ BỤLA na spreadsheet ị na-ekesa?", options: ["Ngụkọta ahịa", "Aha ngwaahịa", "Okwuntughe na nọmba Social Security", "Ụbọchị"], answer: 2, why: "Enwere ike iji nọmba nzuzo mee ihe ọjọọ ma ọ bụrụ na e kesara faịlụ ahụ." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [0, 4, 6, 8, 11, 13, 17, 19] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      { name: "Tebụl data dị ọcha", objective: "O1", notYet: "Ahịrị erughị 8, isi okwu adịghị, ma ọ bụ data agwakọtara na kọlụm.", meets: "Isi okwu n'ahịrị 1, opekata mpe ahịrị 8, otu ụdị data na kọlụm ọ bụla.", exceeds: "Faịlụ ahụ na taabụ sheet ahụ nwere aha doro anya." },
      { name: "Ọ dị mfe ịgụ", objective: "O2", notYet: "Isi okwu dị nkịtị, ego enweghị nhazi currency, ma ọ bụ e bepụrụ ederede.", meets: "Isi okwu bụ bold, ego gosiri dị ka currency, kọlụm dabara ihe dị n'ime ha.", exceeds: "Ahịrị isi nwekwara agba n'azụ ya, spreadsheet ahụ dịkwa ọcha." },
      { name: "Ngụkọta na nkezi", objective: "O3", notYet: "E ji aka dee ngụkọta ma ọ bụ fọmụla na-egosi mperi.", meets: "Ngụkọta SUM na AVERAGE na-enye azịza ziri ezi.", exceeds: "Ngụkọta ahịrị na-eji fọmụla e detuuru gbadaa site na fill handle." },
      { name: "Aha IF", objective: "O4", notYet: "Enweghị kọlụm IF, ma ọ bụ aha ezighi ezi.", meets: "Kọlụm IF na-ede aha ziri ezi n'ahịrị ọ bụla, dị ka \"Goal met\" ma ọ bụ \"Below goal\".", exceeds: "Nwere ike ịkọwa nnwale ahụ ma gbanwee nọmba ebumnuche ka aha ndị ahụ gbanwee." },
      { name: "E haziri n'usoro, chachaa ma kpọnwụọ", objective: "O5", notYet: "Ahịrị agwakọtala, ma ọ bụ sort, filter ma ọ bụ freeze adịghị.", meets: "Data e haziri site na nke kachasị elu ruo nke kachasị ala, filter n'ahịrị isi, na ahịrị mbụ a kpọnwụrụ.", exceeds: "Nwere ike iji filter gosi naanị otu aha wee kpochapụ ya." },
      { name: "Chaatị na ikesa n'enweghị nsogbu", objective: "O6", notYet: "Enweghị chaatị, ma ọ bụ e kesara ya ya na ikike idezi n'onwe ya ma ọ bụ ya na ozi nzuzo.", meets: "Chaatị kọlụm nwere aha, na faịlụ e kesara otu onye dị ka viewer, n'enweghị ozi nzuzo.", exceeds: "Nwere ike ikwu ihe mere o ji họrọ ọkwa ikike ahụ." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ndị na-amụ ihe kwuru na ha jiri spreadsheet n'ọrụ ma ọ bụ n'azụmahịa ha n'ime ụbọchị 30 (nnyocha nsochi)",
      "Ndị na-amụ ihe depụtara nka spreadsheet na résumé ma ọ bụ nweta ọrụ na-eji ya",
      "Ndị na-amụ ihe malitere ihe ọmụmụ Koach Learn ọzọ n'ime ụbọchị 30"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Kọmputa nwere Excel, Excel na weebụ ma ọ bụ Google Sheets (n'efu site n'akaụntụ Google)",
      "Data ọmụmaatụ: ahịa otu izu, awa shift ma ọ bụ awa ndị ọrụ afọ ofufo nwere opekata mpe ahịrị 8",
      "Adreesị email nke otu onye a ga-ekesara spreadsheet e mechara",
      "Ihe dị ka nkeji 60 n'ozuzu, n'oge nkenke: nkuzi, omume, nnwale na ọrụ ikpeazụ"
    ],
    facilitatorNotes: [
      "Gosi nzọụkwụ ọ bụla otu ugboro na ihuenyo e gosipụtara na Excel na Google Sheets, wee hapụ ndị na-amụ ihe ka ha megharịa ya.",
      "Nye ndị na-amụ ihe data ọmụmaatụ dị njikere ka onye ọ bụla ghara iji ezi data ndị ahịa ma ọ bụ data nzuzo.",
      "Lekwasị anya na ndị na-ahazi naanị otu kọlụm n'usoro; mee ka ha pịa Undo ma hazie tebụl ahụ niile.",
      "Chetara ndị na-amụ ihe ka ha kesaa dị ka Viewer belụsọ na onye ahụ chọrọ idezi, na ka ha ghara itinye okwuntughe ma ọ bụ nọmba ID na spreadsheet e kesara.",
      "Jiri rubric tụọ akara ọrụ ikpeazụ, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};
