"use strict";

// Koach Learn course (Igbo translation of shared/data-analytics-excel-sql.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

const DATAPLUS = { name: "CompTIA Data+ (DA0-002): ibe gọọmentị ya", url: "https://www.comptia.org/en-us/certifications/data/" };
const SQLITE_ONLINE = { name: "SQLite Online (ebe ide SQL na browser)", url: "https://sqliteonline.com/" };
const DB_BROWSER = { name: "DB Browser for SQLite (ngwa kọmputa n'efu, open-source)", url: "https://sqlitebrowser.org/" };

module.exports = {
  id: "data-analytics-excel-sql-ig",
  lang: "ig",
  translationOf: "data-analytics-excel-sql",
  category: "Workforce Development",
  name: "Nyocha Data site na Spreadsheet na SQL",
  skills: "Ịjụ ajụjụ data, Ihicha data, Pivot table na COUNTIFS/SUMIFS, Ide ajụjụ SQL, Ịkpakọta na ijikọ tebụl, Ịkọ ihe ị chọpụtara",
  outcome: "ịrụ ọrụ dị ka onye nyocha data na-amalite ọrụ: ime ka mkpa azụmahịa ghọọ ajụjụ doro anya, ihicha spreadsheet ruru unyi, iji pivot table na SUMIFS chịkọta ya, iji SQL (SELECT, WHERE, ORDER BY, GROUP BY na JOIN) zaa ajụjụ, na ide ihe ị chọpụtara n'obere okwu na n'eziokwu, nke ị nwere ike igosi onye were gị n'ọrụ.",
  about: [
    "Ndị nyocha data na-eme ka ahịrị nọmba ghọọ azịza ndị mmadụ nwere ike iji mee ihe: ụlọ ahịa na-ere kacha, mmemme na-enyere ndị mmadụ aka kacha, ebe ego na-aga. Ihe fọrọ nke nta ka ọ bụrụ ụdị onye were mmadụ n'ọrụ ọ bụla chọrọ nke a, site n'ụlọ ahịa na ụlọ ọgwụ ruo n'ọfịs obodo na ndị nonprofit.",
    "Ị ga-eji ngwa abụọ ndị nyocha data na-eji kwa ụbọchị: spreadsheet (Google Sheets, n'efu, ma ọ bụ Excel) na SQL, asụsụ e ji ajụ database ajụjụ. Ị ga-eme omume SQL n'efu na web browser gị. Data omume niile bụ nke e chepụtara, ọ dịkwa nta, ya mere ị nwere ike iji aka gị lelee azịza ọ bụla.",
    "Ọ bụrụ na ị chọrọ asambodo, CompTIA Data+ bụ otu maka ndị nyocha data na-amalite. Ihe ọmụmụ a na-enyere gị aka ịkwado ma na-ewulite nka ọ na-akụzi, mana ọ naghị enye Data+ ma ọ bụ asambodo ọ bụla; lelee ibe gọọmentị ya maka ule nke ugbu a, ọnụahịa ya na ụzọ e si ede ule ahụ.",
    "Ọ ga-aba uru ịbụ onye maara spreadsheet nkịtị tupu (\"Excel na Spreadsheet maka Ọrụ\"). Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise, na-ejedebe n'ọrụ \"Nwalee ya ugbu a\" na ajụjụ abụọ dị mkpụmkpụ. E nwere nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe."
  ],
  finalTask: "Mee ọrụ nyocha nwere otu ibe maka portfolio gị: (1) ajụjụ doro anya banyere data ahịa omume (ma ọ bụ obere data ọha ị họrọ); (2) data a sachara na Google Sheets ma ọ bụ Excel, nwere kọlụm Revenue na pivot table na-aza ajụjụ ahụ; (3) opekata mpe ajụjụ SQL abụọ i mere, otu nwere WHERE na ORDER BY, otu nwere GROUP BY, ya na ihe ha weputara; (4) ihe atọ ị chọpụtara n'ahịrịokwu dị mfe nwere nọmba, otu oke data ahụ, na otu nzọụkwụ ọzọ ị na-atụ aro; na (5) otu ahịrị résumé na-akọwa ọrụ ahụ.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị na-achọ ọrụ, ndị ntorobịa, ndị agha mbụ (veterans) na ndị na-agbanwe ọrụ na-achọ ọrụ data mbido (onye nyocha data, onye inyeaka akụkọ, onye nyocha ọrụ ma ọ bụ azụmahịa), ma ọ bụ ndị chọrọ nka data n'ọrụ ha ugbu a. Ha si n'ebe dị iche iche; ọtụtụ ejirila spreadsheet mana ha ejibeghị SQL mgbe ọ bụla.",
    startingPoint: "Ha nwere ike itinye data, jiri SUM na AVERAGE, ma hazie ya na spreadsheet. Ha ahichabeghị data ruru unyi, ewubeghị pivot table, edebeghịkwa ajụjụ SQL. Ole na ole maara otu ndị nyocha data si egosi ihe ha chọpụtara.",
    gap: "Ọrụ data mbido na-achọ nyocha spreadsheet na SQL nkịtị, na ikwu ihe a chọpụtara n'ụzọ doro anya. Ndị na-amụ ihe chọrọ omume aka n'ezi data ruru unyi site na ngwa n'efu, na obere ọrụ ha nwere ike igosi onye were mmadụ n'ọrụ.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ; a na-akọwa okwu ọ bụla",
      "Ngwaọrụ: kọmputa nwere web browser; ihuenyo ekwentị dị obere maka omume SQL",
      "Naanị ngwa n'efu: Google Sheets (ma ọ bụ Excel ma ọ bụrụ na ha nwere ya) na ebe ide SQL n'efu na browser",
      "Data omume bụ nke e chepụtara; etinyela ezi data ndị ahịa, ndị ọrịa ma ọ bụ nke onye were gị n'ọrụ na ngwa ịntanetị",
      "Oge: nkuzi nkeji 4 ruo 6; ọrụ ikpeazụ na-ewe otu awa ma ọ bụ abụọ ọzọ"
    ],
    prerequisites: "Nka spreadsheet nkịtị. \"Excel na Spreadsheet maka Ọrụ\" na-akụzi ha."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe onye isi ọrụ nyere gị mkpa azụmahịa", action: "ide ajụjụ data doro anya nke a pụrụ ịtụ atụ, ma depụta data ọ chọrọ", standard: "nwere onye ma ọ bụ ihe, ihe a na-atụ, na oge" },
    { id: "O2", condition: "Mgbe e nyere gị spreadsheet ruru unyi", action: "ihicha data ahụ site n'iwepụ ahịrị ugboro abụọ, iwepụ oghere karịrị akarị, na ime ka aha na ụdị data dị otu", standard: "n'enweghị ahịrị ugboro abụọ ma ọ bụ aha na-adabaghị fọdụrụ" },
    { id: "O3", condition: "Mgbe e nyere gị data dị ọcha na Google Sheets ma ọ bụ Excel", action: "iwu pivot table na fọmụla SUMIFS ma ọ bụ COUNTIFS na-aza ajụjụ ahụ", standard: "nwere ngụkọ dabara na nke i ji aka lelee" },
    { id: "O4", condition: "Site n'iji ebe ide SQL n'efu na tebụl omume", action: "ide ajụjụ SELECT nwere WHERE na ORDER BY na-eweta ahịrị a chọrọ", standard: "na-eweta kpọmkwem ahịrị ziri ezi n'usoro ziri ezi" },
    { id: "O5", condition: "Site n'iji tebụl omume abụọ", action: "ide ajụjụ na-eji GROUP BY na SUM, COUNT ma ọ bụ AVG, na JOIN n'etiti tebụl abụọ ahụ", standard: "nwere ihe ha weputara dabara na nke i ji aka lelee" },
    { id: "O6", condition: "Mgbe e nyere gị ihe nyocha gị weputara", action: "ide ihe atọ ị chọpụtara nwere nọmba, otu oke data ahụ na otu nzọụkwụ ọzọ", standard: "n'ahịrịokwu dị mfe onye isi ọrụ nwere ike iji mee ihe" }
  ],
  chapters: [
    {
      name: "Isi 1: Nyocha na spreadsheet",
      lessons: [
        {
          title: "Ọrụ onye nyocha data: site na mkpa ruo n'ajụjụ doro anya",
          objectives: ["O1"],
          minutes: 5,
          goal: "Dee ajụjụ data doro anya nke a pụrụ ịtụ atụ site n'arịrịọ onye isi ọrụ.",
          text: [
            "Ndị nyocha data na-eso ụzọ dị mfe: jụọ ajụjụ doro anya, nweta data, hichaa ya, nyochaa ya, ma kọwaa ihe ọ pụtara. Ọtụtụ n'ime ọrụ ahụ na-amalite n'ajụjụ. Arịrịọ na-edoghị anya na-enweta azịza na-edoghị anya.",
            "Onye isi ọrụ kwuru, \"Kedu ka ahịa si aga?\" Nke ahụ bụ mkpa, ọ bụghị ajụjụ. Ajụjụ doro anya na-akpọ aha onye ma ọ bụ ihe, ihe a na-atụ, na oge: \"N'ime ụlọ ahịa anyị atọ, olee nke nwetara revenue kacha site na 1 ruo 4 October?\" Ugbu a, ị maara data ị chọrọ: ụbọchị, ụlọ ahịa, ọnụọgụ na ọnụahịa.",
            "Ezigbo ajụjụ bụ nke a pụrụ ịtụ atụ (ị nwere ike iji nọmba zaa ya), nke doro anya, na nke bara uru (azịza ya na-enyere mmadụ aka ikpebi ihe). Dee data ị chọrọ tupu i meghee faịlụ ọ bụla.",
            "Ọrụ ndị na-eji nka ndị a gụnyere onye nyocha data, onye nyocha akụkọ, onye nyocha ọrụ na onye nyocha azụmahịa. Ọ bụrụ na ị chọrọ asambodo, CompTIA Data+ (ule DA0-002 mgbe anyị lelere na October 2026) na-akụzi echiche data, ịkwado data, nyocha, chaatị na akụkọ, na nlekọta data. Lelee ibe gọọmentị ya maka ozi nke ugbu a."
          ],
          steps: ["Dee mkpa onye isi ọrụ n'okwu nke ya.", "Mee ka ọ ghọọ ajụjụ nwere onye ma ọ bụ ihe, ihe a na-atụ, na oge.", "Lelee: nọmba ọ nwere ike ịza ya?", "Depụta kọlụm data ị chọrọ."],
          words: [["Onye nyocha data (data analyst)", "onye na-eme ka data ghọọ azịza ndị mmadụ nwere ike iji."], ["A pụrụ ịtụ atụ", "a pụrụ iji nọmba ma ọ bụ ọnụọgụ zaa ya."], ["Dataset", "otu ìgwè data, nke na-abụkarị tebụl nwere ahịrị na kọlụm."], ["Revenue", "ego na-abata site n'ire ahịa: ọnụọgụ mụbaa ọnụahịa."]],
          slides: [
            { title: "Ụzọ onye nyocha data", bullets: ["Jụọ, nweta data, hichaa, nyochaa, kọwaa", "Ọ na-amalite n'ajụjụ doro anya"] },
            { title: "Mkpa na ajụjụ", bullets: ["Mkpa: \"Kedu ka ahịa si aga?\"", "Ajụjụ: \"Olee ụlọ ahịa nwetara revenue kacha, 1 ruo 4 October?\""] },
            { title: "Ajụjụ doro anya nwere", bullets: ["Onye ma ọ bụ ihe", "Ihe a na-atụ", "Oge"] },
            { title: "Asambodo ị nwere ike ịkwado", bullets: ["CompTIA Data+ (DA0-002, e lelere Oct 2026)", "Ihe ọmụmụ a na-akwado gị; CompTIA na-enye ya", "Lelee comptia.org maka ozi nke ugbu a"] }
          ],
          sources: [DATAPLUS],
          tryIt: "Mee ka mkpa ọ bụla ghọọ ajụjụ doro anya ma depụta data ọ chọrọ: (a) \"Ọ̀ bụ na ụlọ nri enyemaka (food pantry) na-enwe ndị mmadụ karịa n'oge na-adịbeghị anya?\" (b) \"Olee ngwaahịa anyị kwesịrị ịzụtakwu?\" Dee nke ọ bụla nwere onye ma ọ bụ ihe, ihe a na-atụ, na oge.",
          youCanNow: "ime ka arịrịọ na-edoghị anya ghọọ ajụjụ doro anya nke a pụrụ ịtụ atụ, ma depụta data ọ chọrọ.",
          quickCheck: [
            { objective: "O1", q: "Olee nke bụ ajụjụ data kacha doo anya?", options: ["\"Kedu ka azụmahịa si aga?\"", "\"Gwa m maka ahịa.\"", "\"Ihe ọ na-aga nke ọma?\"", "\"Olee ihe e rere kacha n'ọnụọgụ na September n'ụlọ ahịa North?\""], answer: 3, why: "Ọ na-akpọ aha ihe (ngwaahịa), ihe a na-atụ (ọnụọgụ), ebe na oge." },
            { objective: "O1", q: "Ajụjụ gị bụ \"Olee ụlọ ahịa nwetara revenue kacha n'izu gara aga?\" Data olee ka ị chọrọ?", options: ["Ụlọ ahịa, ụbọchị, ọnụọgụ na ọnụahịa nke ahịa ọ bụla", "Naanị aha ụlọ ahịa", "Adreesị ụlọ ndị ọrụ", "Ihu igwe"], answer: 0, why: "Revenue chọrọ ọnụọgụ na ọnụahịa; ụlọ ahịa na ụbọchị na-ekewa ya site n'ebe na oge." }
          ]
        },
        {
          title: "Ihicha data ruru unyi na spreadsheet",
          objectives: ["O2"],
          minutes: 6,
          goal: "Hichaa tebụl ruru unyi site n'iwepụ ahịrị ugboro abụọ, oghere, na idozi aha.",
          text: [
            "Ezi data na-arụkarị unyi. E nwere ike ide otu ụlọ ahịa ahụ \"North\", \"north\" na \" North\" (nwere oghere). E nwere ike itinye otu ahịa ugboro abụọ. Ụbọchị nwere ike ịdị n'ụdị dị iche iche. Ọ bụrụ na ị hichaghị ya, ngụkọ gị ga-ezighi ezi, n'ihi na spreadsheet na-agụ \"North\" na \"north \" dị ka ụlọ ahịa abụọ dị iche.",
            "Na Google Sheets, họrọ data gị ma jiri Data > Data cleanup > Remove duplicates, na Data > Data cleanup > Trim whitespace. Na Excel, jiri Data > Remove Duplicates, na fọmụla TRIM iji wepụ oghere karịrị akarị. Jiri Find and replace dozie aha, dịka ọmụmaatụ gbanwee \"north\" ka ọ bụrụ \"North\".",
            "Mee ka kọlụm ọ bụla bụrụ otu ụdị: ụbọchị dị ka ụbọchị, nọmba dị ka nọmba (etinyela \"$\"), ederede nwere otu nsụpe oge niile. Wee tinye kọlụm ọ bụla ị chọrọ, dị ka Revenue = Qty mụbaa Price (dịka ọmụmaatụ =D2*E2).",
            "Debe mgbe niile otu mbipụta nke data mbụ (raw data) na taabụ nke ya, ma hichaa mbipụta ọzọ. Dee mgbanwe ọ bụla i mere, ka onye ọzọ nwee ike ịtụkwasị ọrụ gị obi ma mee ya ọzọ."
          ],
          steps: ["Detuo data mbụ gaa na taabụ ọhụrụ a na-akpọ Clean.", "Wepụ ahịrị ugboro abụọ.", "Wepụ oghere karịrị akarị.", "Jiri Find and replace dozie aha ka aha ọ bụla nwee otu nsụpe.", "Mee ka kọlụm ọ bụla bụrụ otu ụdị: ụbọchị, nọmba ma ọ bụ ederede.", "Tinye kọlụm a gbakọrọ, dị ka Revenue = Qty * Price.", "Dee obere ndepụta mgbanwe i mere."],
          words: [["Ihicha data (data cleaning)", "idozi mperi, ahịrị ugboro abụọ na ihe a na-edeghị otu ụzọ ka ihe a ga-enweta zie ezi."], ["Duplicate", "ahịrị pụtara karịa otu ugboro na mperi."], ["Whitespace", "oghere karịrị akarị tupu ma ọ bụ mgbe ederede gasịrị nke ị na-adịghị ahụ ngwa ngwa."], ["Raw data", "data otu i si nweta ya, tupu mgbanwe ọ bụla."]],
          slides: [
            { title: "Gịnị mere a ga-eji hichaa?", bullets: ["A na-agụ \"North\", \"north\" na \" North\" dị ka ihe dị iche", "Ahịrị ugboro abụọ na-agụ ahịa ugboro abụọ", "Data ruru unyi na-enye ngụkọ ezighi ezi"] },
            { title: "Ngwa ihicha", bullets: ["Sheets: Data > Data cleanup > Remove duplicates", "Sheets: Data > Data cleanup > Trim whitespace", "Excel: Remove Duplicates na TRIM", "Find and replace iji dozie aha"] },
            { title: "Otu ụdị na kọlụm ọ bụla", bullets: ["Ụbọchị dị ka ụbọchị, nọmba dị ka nọmba", "Tinye Revenue = Qty * Price"] },
            { title: "Ezigbo omume", bullets: ["Debe data mbụ na taabụ nke ya", "Dee mgbanwe ọ bụla"] }
          ],
          tryIt: "Na Google Sheets, dee tebụl omume a nwere isi kọlụm Date, Store, Item, Qty, Price: 2026-10-01, North, Coffee, 3, 2.50 / 2026-10-01, South, Bagel, 5, 1.75 / 2026-10-02, north , Bagel, 2, 1.75 / 2026-10-02, East, Coffee, 6, 2.50 / 2026-10-02, East, Coffee, 6, 2.50 / 2026-10-03, South, Coffee, 4, 2.50 / 2026-10-03, North, Juice, 1, 3.00 / 2026-10-04, East, Bagel, 8, 1.75 / 2026-10-04, South, Juice, 2, 3.00. Detuo ya gaa na taabụ Clean, wepụ ahịrị East nke ugboro abụọ, gbanwee \"north \" ka ọ bụrụ \"North\", ma tinye kọlụm Revenue. Ị kwesịrị inwe ahịrị 8.",
          youCanNow: "ihicha tebụl ruru unyi ka ngụkọ ọ bụla i wuru na ya zie ezi.",
          quickCheck: [
            { objective: "O2", q: "Ngụkọ maka \"North\" dị ka ọ dị ala karịa. Ụfọdụ ahịrị na-ekwu \"north \" nwere oghere. Gịnị ka ị ga-eme?", options: ["Hichapụ ahịrị ndị ahụ", "Wepụ oghere ma mee ka aha bụrụ \"North\" ebe niile", "Leghara ya anya", "Mee ka mkpụrụ akwụkwọ buo ibu"], answer: 1, why: "Iwepụ oghere na idozi aha na-eme ka ahịrị North niile gụkọta ọnụ." },
            { objective: "O2", q: "Tupu ị hichaa, gịnị ka ị ga-eme na data mbụ?", options: ["Hichapụ ya", "Zigara onye ọ bụla ya n'email", "Debe otu mbipụta na taabụ nke ya ma hichaa mbipụta ọzọ", "Bipụta ya"], answer: 2, why: "Idebe data mbụ na-enye gị ohere ilele ma ọ bụ ime ọrụ gị ọzọ." }
          ]
        },
        {
          title: "Ịchịkọta site na pivot table, SUMIFS na COUNTIFS",
          objectives: ["O3"],
          minutes: 6,
          goal: "Wuo pivot table na fọmụla SUMIFS na-aza ajụjụ gị.",
          text: [
            "Pivot table na-achịkọta tebụl buru ibu n'ime sekọnd: dịka ọmụmaatụ, ngụkọ revenue maka ụlọ ahịa ọ bụla. Na Google Sheets, họrọ data gị dị ọcha ma họrọ Insert > Pivot table. Na Excel, họrọ Insert > PivotTable. Tinye Store n'okpuru Rows na Revenue n'okpuru Values, nke a chịkọtara site na SUM.",
            "Site na data omume a sachara, pivot ahụ kwesịrị igosi East 29.00, South 24.75 na North 14.00. Ya mere East nwetara revenue kacha site na 1 ruo 4 October.",
            "Fọmụla nwere ike ịza otu ajụjụ n'otu oge. SUMIFS na-agbakọ nọmba ndị dabara n'iwu: =SUMIFS(F:F, B:B, \"South\") na-agbakọ kọlụm Revenue (F) ebe kọlụm Store (B) kwuru South, ọ na-enye 24.75. COUNTIFS na-agụ ahịrị dabara: =COUNTIFS(C:C, \"Coffee\") na-agụ ahịa Coffee, ọ na-enye 3. AVERAGEIFS na-arụ otu ụzọ ahụ maka nkezi.",
            "Jiri aka gị lelee otu nọmba mgbe niile. Ọ bụrụ na pivot ahụ na ihe i ji aka lelee adabaghị, ọ nwere ike ịbụ na data ahụ ka chọrọ ihicha."
          ],
          steps: ["Họrọ data dị ọcha, gụnyere isi kọlụm.", "Tinye pivot table na shiit ọhụrụ.", "Tinye ụdị (Store) na Rows.", "Tinye ihe a na-atụ (Revenue) na Values, nke a chịkọtara site na SUM.", "Hazie ya site na nke kacha ukwuu ruo na nke kacha nta.", "Jiri aka ma ọ bụ SUMIFS lelee otu ngụkọ."],
          words: [["Pivot table", "ngwa na-ekekọta ma na-achịkọta tebụl, dịka ọmụmaatụ ngụkọ site n'ụlọ ahịa."], ["SUMIFS", "fọmụla na-agbakọ nọmba dabara n'otu iwu ma ọ bụ karịa."], ["COUNTIFS", "fọmụla na-agụ ahịrị dabara n'otu iwu ma ọ bụ karịa."], ["Ihe a na-atụ (measure)", "nọmba ị na-agbakọ ma ọ bụ na-eme nkezi ya, dị ka revenue."]],
          slides: [
            { title: "Pivot table", bullets: ["Sheets: Insert > Pivot table", "Excel: Insert > PivotTable", "Rows: Store; Values: SUM nke Revenue"] },
            { title: "Azịza omume", bullets: ["East 29.00, South 24.75, North 14.00", "East nwetara revenue kacha, 1 ruo 4 October"] },
            { title: "Fọmụla nwere iwu", bullets: ["=SUMIFS(F:F, B:B, \"South\") na-enye 24.75", "=COUNTIFS(C:C, \"Coffee\") na-enye 3", "AVERAGEIFS maka nkezi"] },
            { title: "Jiri aka lelee", bullets: ["Gbakọọ otu ìgwè n'onwe gị", "Ọ dabaghị? Hichaa data ọzọ"] }
          ],
          tryIt: "Site na data omume gị dị ọcha, wuo pivot table nke revenue site n'ụlọ ahịa ma hazie ya. Wee dee SUMIFS maka East na COUNTIFS maka Bagel. Lelee: East kwesịrị ịbụ 29.00, Bagel kwesịkwara ịgụ ahịrị 3. Mee pivot nke abụọ nke Qty site na Item.",
          youCanNow: "ịchịkọta tebụl site na pivot table ma jiri SUMIFS na COUNTIFS lelee ya.",
          quickCheck: [
            { objective: "O3", q: "Na pivot table nke revenue site n'ụlọ ahịa, ebee ka Store na-aga?", options: ["Rows", "Values", "Naanị Filters", "A naghị eji ya"], answer: 0, why: "Ụdị ị na-ekekọta site na ya na-aga na Rows; nọmba ị na-agbakọ na-aga na Values." },
            { objective: "O3", q: "Olee fọmụla na-agbakọ Revenue (kọlụm F) naanị maka ụlọ ahịa North (kọlụm B)?", options: ["=SUM(F:F)", "=COUNTIFS(B:B, \"North\")", "=AVERAGE(B:B)", "=SUMIFS(F:F, B:B, \"North\")"], answer: 3, why: "SUMIFS na-agbakọ kọlụm ngụkọ (F) ebe kọlụm iwu (B) dabara na North." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Nyocha na spreadsheet",
        questions: [
          { objective: "O1", q: "Olee nke bụ mkpa, ọ bụghị ajụjụ doro anya ka?", options: ["\"Kedu ka anyị si eme?\"", "\"Olee ụlọ ahịa nwetara revenue kacha elu na October?\"", "\"Ahịa Coffee ole ka e nwere na 2 October?\"", "\"Gịnị bụ nkezi ọnụ ahịa e zụrụ n'izu gara aga?\""], answer: 0, why: "O nweghị ihe a na-atụ ma ọ bụ oge, ya mere nọmba enweghị ike ịza ya ka." },
          { objective: "O2", q: "E tinyere otu ahịa ugboro abụọ. Gịnị na-eme ma ọ bụrụ na i wepughị ahịrị nke abụọ ahụ?", options: ["Ọ dịghị ihe na-agbanwe", "Ngụkọ ahụ na-agụ ahịa ahụ ugboro abụọ", "Spreadsheet na-edozi ya", "Ahịa ahụ na-efu"], answer: 1, why: "Ahịrị ugboro abụọ na-agụ ihe ugboro abụọ, ya mere ngụkọ na-adị elu karịa." },
          { objective: "O2", q: "Olee menu Google Sheets na-ewepụ oghere karịrị akarị?", options: ["Insert > Chart", "Format > Theme", "Data > Data cleanup > Trim whitespace", "File > Print"], answer: 2, why: "Trim whitespace na-ewepụ oghere tupu na mgbe ederede gasịrị." },
          { objective: "O3", q: "Gịnị ka =COUNTIFS(C:C, \"Juice\") na-enye maka data omume dị ọcha?", options: ["1", "3", "8", "2"], answer: 3, why: "Juice pụtara n'ahịrị abụọ (North na 3 October na South na 4 October)." },
          { objective: "O3", q: "Ngụkọ pivot gị maka South adabaghị na nke i ji aka lelee. Gịnị bụ ihe kachasị nwee ike ịkpata ya?", options: ["Data ahụ ka nwere ahịrị ugboro abụọ ma ọ bụ aha na-adabaghị", "Pivot table enweghị ike ịgbakọ", "Ị chọrọ ihuenyo ka ibu", "Ihe e ji aka lelee na-ezighi ezi mgbe niile"], answer: 0, why: "Ndabaghị na-egosikarị na data ka chọrọ ihicha." }
        ]
      }
    },
    {
      name: "Isi 2: SQL na ikesa ihe ị chọpụtara",
      lessons: [
        {
          title: "Ajụjụ SQL mbụ gị: SELECT, WHERE na ORDER BY",
          objectives: ["O4"],
          minutes: 6,
          goal: "Dee ajụjụ SELECT nwere WHERE na ORDER BY n'ebe ide SQL n'efu.",
          text: [
            "Nnukwu ụlọ ọrụ na-edebe data na database, ọ bụghị na spreadsheet. SQL (a na-akpọkarị ya \"sequel\") bụ asụsụ e ji ajụ database ajụjụ. Query bụ otu ajụjụ. SQL yiri bekee nkịtị, a na-ejikwa ya n'ihe fọrọ nke nta ka ọ bụrụ ọrụ data niile.",
            "Ị nwere ike ime omume n'efu na browser gị na SQLite Online (sqliteonline.com): dee SQL n'ebe ide ihe ma pịa Run. O nwere ike igosi ihe ndị ọzọ a na-akwụ ụgwọ; ị chọghị ha. DB Browser for SQLite bụ ngwa kọmputa n'efu, open-source. Jiri naanị data omume na ngwa ịntanetị, ọ bụghị ezi data ndị ahịa.",
            "Mepụta tebụl omume site n'ịgba: CREATE TABLE sales (id INTEGER, sale_date TEXT, store TEXT, item TEXT, qty INTEGER, price REAL); wee gbaa INSERT INTO sales VALUES (1,'2026-10-01','North','Coffee',3,2.50),(2,'2026-10-01','South','Bagel',5,1.75),(3,'2026-10-02','North','Bagel',2,1.75),(4,'2026-10-02','East','Coffee',6,2.50),(5,'2026-10-03','South','Coffee',4,2.50),(6,'2026-10-03','North','Juice',1,3.00),(7,'2026-10-04','East','Bagel',8,1.75),(8,'2026-10-04','South','Juice',2,3.00);",
            "Ugbu a, jụọ. SELECT * FROM sales; na-egosi ahịrị niile. SELECT item, qty FROM sales WHERE store = 'North'; na-egosi naanị ngwaahịa North. SELECT * FROM sales WHERE qty >= 4 ORDER BY qty DESC; na-egosi ahịa anọ kacha ukwuu, nke kacha ukwuu na mbụ (8, 6, 5, 4). Ederede na-aba n'ime akara nkọwa otu (single quotes); nọmba anaghị aba."
          ],
          steps: ["Meghee ebe ide SQL n'efu na browser gị.", "Gbaa ahịrị CREATE TABLE, wee gbaa ahịrị INSERT.", "Gbaa SELECT * FROM sales; ka ị hụ ahịrị 8 niile.", "Tinye WHERE ka ị debe naanị ahịrị ị chọrọ.", "Tinye ORDER BY ka ị hazie ya; tinye DESC maka nke kacha ukwuu na mbụ.", "Lelee ihe ọ weputara site n'ilegara ahịrị ndị ahụ anya n'onwe gị."],
          words: [["Database", "ebe a haziri ahazi e debere data, n'ime tebụl."], ["SQL", "Structured Query Language: asụsụ e ji ajụ database ajụjụ."], ["Query", "otu ajụjụ e dere na SQL."], ["SELECT / FROM", "SELECT na-akpọ aha kọlụm ị chọrọ; FROM na-akpọ aha tebụl."], ["WHERE", "na-edebe naanị ahịrị dabara n'iwu."], ["ORDER BY", "na-ahazi ihe e weputara; DESC pụtara nke kacha ukwuu na mbụ."]],
          slides: [
            { title: "SQL n'okwu dị mfe", bullets: ["Asụsụ e ji ajụ database ajụjụ", "Otu ajụjụ = otu query", "A na-eji ya n'ihe fọrọ nke nta ka ọ bụrụ ọrụ data niile"] },
            { title: "Mee omume n'efu", bullets: ["SQLite Online na browser gị: dee, wee pịa Run", "DB Browser for SQLite na kọmputa gị", "Naanị data omume"] },
            { title: "Ajụjụ atọ", bullets: ["SELECT * FROM sales;", "SELECT item, qty FROM sales WHERE store = 'North';", "... WHERE qty >= 4 ORDER BY qty DESC;"] },
            { title: "Iwu ị ga-echeta", bullets: ["Ederede n'ime akara nkọwa otu: 'North'", "Nọmba enweghị akara nkọwa", "Jiri ; mechie ajụjụ ọ bụla"] }
          ],
          sources: [SQLITE_ONLINE, DB_BROWSER],
          tryIt: "Mepụta tebụl sales ma gbaa ajụjụ atọ ahụ. Wee dee nke gị: ahịa Coffee niile, nke e hazịrị site na qty site na nke kacha ukwuu ruo na nke kacha nta. Ị kwesịrị inweta ahịrị 3: qty 6, 4 na 3. Chekwaa ajụjụ ọ bụla na ihe ọ weputara maka ọrụ ikpeazụ gị.",
          youCanNow: "ịmepụta tebụl omume ma dee ajụjụ SQL na-ahọpụta ma na-ahazi ahịrị.",
          quickCheck: [
            { objective: "O4", q: "Olee ajụjụ na-egosi naanị ahịa ụlọ ahịa South?", options: ["SELECT * FROM sales ORDER BY store;", "SELECT * FROM sales WHERE store = 'South';", "SELECT South FROM sales;", "SELECT * WHERE sales = South;"], answer: 1, why: "WHERE store = 'South' na-edebe naanị ahịrị nke ụlọ ahịa ahụ." },
            { objective: "O4", q: "Gịnị ka DESC na-eme n'ime ORDER BY qty DESC?", options: ["Ọ na-ehichapụ kọlụm ahụ", "Ọ na-akọwa tebụl ahụ", "Ọ na-ahazi site na nke kacha ukwuu ruo na nke kacha nta", "Ọ na-edebe naanị otu ahịrị"], answer: 2, why: "DESC pụtara na-agbada: nke kacha ukwuu na mbụ." }
          ]
        },
        {
          title: "Ngụkọ site na GROUP BY, na ijikọ tebụl abụọ",
          objectives: ["O5"],
          minutes: 6,
          goal: "Dee ajụjụ GROUP BY nwere SUM na JOIN n'etiti tebụl abụọ.",
          text: [
            "GROUP BY na-arụ na SQL ihe pivot table na-arụ na spreadsheet. SELECT store, SUM(qty * price) AS revenue FROM sales GROUP BY store ORDER BY revenue DESC; na-enye East 29.0, South 24.75, North 14.0, otu ihe ahụ dị ka pivot gị. AS na-enye kọlụm ọhụrụ ahụ aha.",
            "Ọrụ nchịkọta ndị ọzọ: COUNT(*) na-agụ ahịrị, AVG(qty) na-enye nkezi, MIN na MAX na-enye nke kacha nta na nke kacha ukwuu. SELECT item, SUM(qty) FROM sales GROUP BY item; na-enye Bagel 15, Coffee 13, Juice 3.",
            "A na-ekewakarị data n'ọtụtụ tebụl. Tebụl nke abụọ nwere ike idebe obodo ụlọ ahịa ọ bụla: CREATE TABLE stores (store TEXT, city TEXT); INSERT INTO stores VALUES ('North','Fresno'),('South','Bakersfield'),('East','Modesto'); JOIN na-ejikọ ahịrị ebe otu kọlụm dị otu na tebụl abụọ ahụ.",
            "SELECT sales.item, sales.qty, stores.city FROM sales JOIN stores ON sales.store = stores.store; na-egosi ahịa ọ bụla na obodo ya. Ọ bụrụ na e dere aha ụlọ ahịa n'ụzọ dị iche na tebụl abụọ ahụ, JOIN agaghị ahụ ya; nke a bụ ihe ọzọ mere a ga-eji buru ụzọ hichaa data."
          ],
          steps: ["Họrọ kọlụm ị ga-eji kekọta (store, item, date).", "Họrọ nchịkọta: SUM, COUNT, AVG, MIN ma ọ bụ MAX.", "Dee SELECT column, SUM(...) AS name FROM table GROUP BY column;", "Tinye ORDER BY ka ị hazie ìgwè ndị ahụ n'usoro.", "Maka JOIN, kpọọ aha tebụl abụọ ahụ na kọlụm dabara mgbe ON gasịrị.", "Tụnyere ihe e weputara na pivot table gị."],
          words: [["GROUP BY", "na-ekekọta ahịrị nwere otu uru ka ị nwee ike ịgbakọ ma ọ bụ gụọ ìgwè ọ bụla."], ["Aggregate function", "nchịkọta dị ka SUM, COUNT, AVG, MIN ma ọ bụ MAX."], ["AS", "na-enye kọlụm e weputara aha."], ["JOIN", "na-ejikọ ahịrị site na tebụl abụọ nwere kọlụm dabara."], ["Key", "kọlụm e ji ejikọ ahịrị n'etiti tebụl."]],
          slides: [
            { title: "GROUP BY = pivot na SQL", bullets: ["SELECT store, SUM(qty * price) AS revenue", "FROM sales GROUP BY store ORDER BY revenue DESC;", "East 29.0, South 24.75, North 14.0"] },
            { title: "Ọrụ nchịkọta", bullets: ["COUNT(*), SUM, AVG, MIN, MAX", "Ọnụọgụ site na ngwaahịa: Bagel 15, Coffee 13, Juice 3"] },
            { title: "Ijikọ tebụl abụọ", bullets: ["Tebụl stores: store na city", "JOIN stores ON sales.store = stores.store", "Ahịa ọ bụla na-egosi obodo ya ugbu a"] },
            { title: "Key dị ọcha dị mkpa", bullets: ["Nsụpe dị iche: JOIN na-atụfu ahịrị", "Buru ụzọ hichaa, wee jikọọ"] }
          ],
          sources: [SQLITE_ONLINE],
          tryIt: "Gbaa ajụjụ GROUP BY revenue ma lelee na ọ dabara na pivot table gị. Dee ajụjụ na-agụ ahịa n'ụlọ ahịa ọ bụla (COUNT(*)); ị kwesịrị inweta 3, 3 na 2. Wee mepụta tebụl stores ma gbaa JOIN ahụ. Chekwaa ajụjụ ọ bụla na ihe ọ weputara.",
          youCanNow: "ịgbakọ na ịgụ ìgwè site na GROUP BY ma jikọọ tebụl abụọ site na JOIN.",
          quickCheck: [
            { objective: "O5", q: "Olee ajụjụ na-enye ngụkọ ọnụọgụ e rere maka ngwaahịa ọ bụla?", options: ["SELECT item, SUM(qty) FROM sales GROUP BY item;", "SELECT * FROM sales;", "SELECT item FROM sales WHERE qty = SUM;", "SELECT SUM(item) FROM sales;"], answer: 0, why: "GROUP BY item na-eme otu ìgwè maka ngwaahịa ọ bụla, SUM(qty) na-agbakọkwa nke ọ bụla." },
            { objective: "O5", q: "JOIN n'etiti sales na stores na-atụfu ahịrị North. Gịnị bụ ihe kachasị nwee ike ịkpata ya?", options: ["SQL enweghị ike ijikọ ederede", "Ahịrị dị oke ọtụtụ", "E dere aha ụlọ ahịa ahụ n'ụzọ dị iche na tebụl abụọ ahụ", "JOIN na-arụ ọrụ naanị na Mọnde"], answer: 2, why: "JOIN na-ejikọ kpọmkwem uru; nsụpe dị iche adabaghị." }
          ]
        },
        {
          title: "Ime ka ihe e weputara ghọọ ihe ị chọpụtara, na ọrụ gị",
          objectives: ["O6"],
          minutes: 6,
          goal: "Dee ihe atọ ị chọpụtara nwere nọmba, otu oke na otu nzọụkwụ ọzọ.",
          text: [
            "Naanị nọmba anaghị enyere onye isi ọrụ aka. Ihe a chọpụtara (finding) bụ otu ahịrịokwu na-ekwu ihe data na-egosi, ya na nọmba: \"East nwetara revenue kacha site na 1 ruo 4 October: $29.00, karịrị okpukpu abụọ nke North $14.00.\"",
            "Kwuo eziokwu banyere oke data. Data omume na-ekpuchi naanị ụbọchị 4 na ahịa 8, ya mere ọ pụghị ịgwa gị maka otu afọ dum. Correlation abụghị ihe kpatara ya: ọ bụrụ na e rere Coffee karịa n'ụbọchị oyi, data naanị egosighi na ọ bụ ihu igwe kpatara ya. Kwuo ihe data ahụ na-enweghị ike ịgwa gị.",
            "Jiri nzọụkwụ ọzọ mmadụ nwere ike ime mechie: \"Chịkọta ahịa otu ọnwa dum tupu ikpebi ebe a ga-ezigakwu ngwaahịa.\" Mee ka ọ bụrụ otu ibe, nwere otu chaatị ma ọ bụ tebụl doro anya site na pivot gị.",
            "N'ikpeazụ, mee ka ọrụ ahụ ghọọ ahịrị résumé: \"Hichara ma nyochaa data ahịa na Google Sheets na SQL (GROUP BY, JOIN); chọpụta ụlọ ahịa kacha site na revenue ma kọọ ihe a chọpụtara.\" Nke a na-egosi onye were mmadụ n'ọrụ ihe ị nwere ike ime. Jiri naanị data e chepụtara ma ọ bụ data ọha na portfolio, ọ bụghị data nzuzo nke onye were gị n'ọrụ."
          ],
          steps: ["Dee ajụjụ ahụ n'elu.", "Tinye otu tebụl ma ọ bụ chaatị site na pivot gị.", "Dee ihe atọ ị chọpụtara, nke ọ bụla nwere nọmba.", "Dee otu oke: ihe data ahụ na-enweghị ike ịgwa gị.", "Dee otu nzọụkwụ ọzọ.", "Tinye ajụjụ SQL gị na ihe ha weputara.", "Dee otu ahịrị résumé banyere ọrụ ahụ."],
          words: [["Ihe a chọpụtara (finding)", "otu ahịrịokwu na-ekwu ihe data na-egosi, ya na nọmba."], ["Oke (limitation)", "ihe data ahụ na-enweghị ike ịgwa gị, ma ọ bụ ihe mere a ga-eji kpachara anya na ya."], ["Correlation", "ihe abụọ na-agbanwe ọnụ; ọ naghị egosi na otu na-akpata nke ọzọ."], ["Portfolio", "ìgwè ihe atụ ọrụ gị ị na-egosi ndị were mmadụ n'ọrụ."]],
          slides: [
            { title: "Ezigbo ihe a chọpụtara", bullets: ["Otu ahịrịokwu, otu nọmba", "\"East nwetara revenue kacha: $29.00, okpukpu abụọ nke North $14.00.\""] },
            { title: "Kwuo eziokwu banyere oke", bullets: ["Naanị ụbọchị 4 na ahịa 8", "Correlation abụghị ihe kpatara ya"] },
            { title: "Otu ibe", bullets: ["Ajụjụ, otu chaatị ma ọ bụ tebụl", "Ihe atọ a chọpụtara, otu oke, otu nzọụkwụ ọzọ", "Ajụjụ SQL gị na ihe ha weputara"] },
            { title: "Gosi ya", bullets: ["Dee otu ahịrị résumé", "Jiri naanị data e chepụtara ma ọ bụ data ọha"] }
          ],
          sources: [DATAPLUS],
          tryIt: "Ọrụ ikpeazụ: wuo ọrụ gị nwere otu ibe, nwere ajụjụ, data a sachara na pivot, opekata mpe ajụjụ SQL abụọ na ihe ha weputara, ihe atọ a chọpụtara nwere nọmba, otu oke, otu nzọụkwụ ọzọ, na otu ahịrị résumé. Gụpụta ya n'olu dị elu: onye isi ọrụ na-arụsi ọrụ ike ọ ga-enwe ike iji ya mee ihe n'ime otu nkeji?",
          youCanNow: "ime ka nyocha ghọọ ihe a chọpụtara doro anya na nke eziokwu, na ọrụ ị nwere ike igosi onye were mmadụ n'ọrụ.",
          quickCheck: [
            { objective: "O6", q: "Olee nke bụ ihe a chọpụtara kacha mma?", options: ["\"Ahịa mere.\"", "\"Data ahụ na-adọrọ mmasị.\"", "\"South rere nri na ihe ọṅụṅụ 11 ma nweta $24.75, nke abụọ n'ime ụlọ ahịa atọ.\"", "\"Nọmba rịgoro ma gbadaa.\""], answer: 2, why: "Ọ na-ekwu ihe mere, ya na nọmba na ntụnyere." },
            { objective: "O6", q: "E rere Juice karịa n'ụbọchị kacha kpọọ ọkụ na data gị. Gịnị ka ị nwere ike ikwu n'eziokwu?", options: ["Ihu igwe na-ekpo ọkụ na-akpata ire Juice", "Juice na ụbọchị na-ekpo ọkụ jikọrọ ọnụ ebe a, mana nke a egosighi ihe kpatara ya", "Juice ga-ere karịa mgbe niile n'oge okpomọkụ", "Data ahụ ezighi ezi"], answer: 1, why: "Correlation abụghị ihe kpatara ya; obere data enweghị ike igosi ihe mere." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: SQL na ikesa ihe ị chọpụtara",
        questions: [
          { objective: "O4", q: "Gịnị ka SELECT * FROM sales; na-eme?", options: ["Ọ na-ehichapụ tebụl sales", "Ọ na-egosi kọlụm na ahịrị niile dị na tebụl sales", "Ọ na-agụ ahịrị", "Ọ na-ahazi tebụl ahụ"], answer: 1, why: "* pụtara kọlụm niile, ma ọ bụrụ na enweghị WHERE, a na-eweta ahịrị niile." },
          { objective: "O4", q: "Olee nke e dere nke ọma?", options: ["SELECT * FROM sales WHERE item = 'Bagel';", "SELECT * FROM sales WHERE item = Bagel", "FROM sales SELECT Bagel;", "SELECT Bagel WHERE sales;"], answer: 0, why: "Uru ederede na-aba n'ime akara nkọwa otu, usoro ya bụkwa SELECT, FROM, WHERE." },
          { objective: "O5", q: "Olee akụkụ SQL na-arụ otu ọrụ dị ka Rows nke pivot table?", options: ["ORDER BY", "WHERE", "FROM", "GROUP BY"], answer: 3, why: "GROUP BY na-eme otu ìgwè maka uru ọ bụla, dị ka ahịrị na pivot table." },
          { objective: "O5", q: "Gịnị ka COUNT(*) na-enye maka ụlọ ahịa ọ bụla na data omume?", options: ["Ngụkọ revenue", "Nkezi ọnụahịa", "Ọnụọgụ ahịrị ahịa", "Obodo"], answer: 2, why: "COUNT(*) na-agụ ahịrị n'ìgwè ọ bụla." },
          { objective: "O6", q: "Olee nke kwesịrị ịbanye n'akụkụ oke nke akụkọ gị?", options: ["\"Data ahụ na-ekpuchi naanị ụbọchị 4, ya mere ọ pụghị igosi usoro otu afọ.\"", "\"East bụ ụlọ ahịa kacha mma ruo mgbe ebighị ebi.\"", "\"SQL siri ike.\"", "\"Coffee na-amasị m.\""], answer: 0, why: "Oke na-agwa onye na-agụ ihe data ahụ na-enweghị ike igosi." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Nyocha Data site na Spreadsheet na SQL",
    questions: [
      { objective: "O1", q: "Ajụjụ data doro anya nwere:", options: ["Naanị isiokwu", "Onye ma ọ bụ ihe, ihe a na-atụ, na oge", "Chaatị", "Okwuntughe"], answer: 1, why: "Akụkụ atọ ndị ahụ na-eme ka nọmba nwee ike ịza ya." },
      { objective: "O1", q: "Gịnị bụ nzọụkwụ mbụ n'ụzọ onye nyocha data?", options: ["Ime chaatị", "Ide SQL", "Ịjụ ajụjụ doro anya", "Ikesa ihe a chọpụtara"], answer: 2, why: "Ajụjụ ahụ na-ekpebi data ị chọrọ na otu ị ga-esi nyochaa ya." },
      { objective: "O1", q: "Olee asambodo CompTIA e mere maka ndị nyocha data na-amalite?", options: ["Data+", "A+", "Security+", "Network+"], answer: 0, why: "CompTIA Data+ na-akụzi echiche data, ịkwado data, nyocha, chaatị na nlekọta data." },
      { objective: "O2", q: "Gịnị mere \"North\" na \"north \" ji akpata nsogbu?", options: ["Ọ na-eme ka faịlụ buo ibu", "Spreadsheet enweghị ike ịgụ mkpụrụ akwụkwọ nta", "Ọ na-agbanwe ụdị mkpụrụ akwụkwọ", "A na-agụ ha dị ka ụlọ ahịa abụọ dị iche"], answer: 3, why: "Nsụpe dị iche na-ekewa otu ìgwè ka ọ bụrụ abụọ, ya mere ngụkọ na-ezighi ezi." },
      { objective: "O2", q: "Olee ngwa Excel na-ewepụ ahịrị ugboro abụọ?", options: ["Insert > Chart", "Data > Remove Duplicates", "View > Zoom", "File > Save As"], answer: 1, why: "Remove Duplicates na-ehichapụ ahịrị pụtara karịa otu ugboro." },
      { objective: "O2", q: "Olee nke bụ ezigbo omume ihicha?", options: ["Hichaa naanị otu mbipụta data ị nwere", "Debe data mbụ ma dee mgbanwe ọ bụla", "Hichapụ ahịrị ọ bụla dị ka ihe ọjọọ", "Tinye akara $ n'ime cell nọmba"], answer: 1, why: "Idebe data mbụ na ndepụta mgbanwe na-eme ka a nwee ike ilele ọrụ gị." },
      { objective: "O3", q: "Na pivot table, ebee ka nọmba ị na-agbakọ na-aga?", options: ["Values", "Rows", "Aha isi", "Naanị Filters"], answer: 0, why: "Values na-ejide ihe a na-atụ, nke a chịkọtara site na SUM, COUNT ma ọ bụ AVERAGE." },
      { objective: "O3", q: "Gịnị ka COUNTIFS na-eme?", options: ["Ọ na-agbakọ nọmba", "Ọ na-achọta nkezi", "Ọ na-agụ ahịrị dabara n'otu iwu ma ọ bụ karịa", "Ọ na-ahazi kọlụm"], answer: 2, why: "COUNTIFS na-agụ ahịrị dabara n'iwu ị nyere ya." },
      { objective: "O3", q: "Na data omume dị ọcha, olee ụlọ ahịa nwetara revenue kacha?", options: ["North", "South", "Ha niile hà nhata", "East"], answer: 3, why: "East nwere 29.00, South 24.75 na North 14.00." },
      { objective: "O4", q: "Gịnị ka e ji SQL eme?", options: ["Ise ihe osise", "Ịjụ database ajụjụ", "Iziga email", "Ime slaịdị"], answer: 1, why: "SQL bụ asụsụ e ji ajụ database ajụjụ." },
      { objective: "O4", q: "Olee nke na-edebe naanị ahịrị ebe qty bụ 4 ma ọ bụ karịa?", options: ["ORDER BY qty", "GROUP BY qty", "WHERE qty >= 4", "SELECT qty"], answer: 2, why: "WHERE na-ahọpụta ahịrị site n'iwu." },
      { objective: "O4", q: "Iji hazie ihe e weputara ka nke kacha ukwuu bụrụ nke mbụ, ị na-ede:", options: ["ORDER BY qty DESC", "ORDER BY qty ASC", "WHERE qty BIG", "SORT qty"], answer: 0, why: "DESC na-ahazi site na nke kacha ukwuu ruo na nke kacha nta." },
      { objective: "O4", q: "Olee data dị mma itinye na ngwa omume SQL nke ịntanetị?", options: ["Ndepụta ndị ahịa onye were gị n'ọrụ", "Akwụkwọ ndị ọrịa", "Data omume e chepụtara", "Akwụkwọ ụlọ akụ gị"], answer: 2, why: "Jiri naanị data omume ma ọ bụ data ọha na ngwa ịntanetị." },
      { objective: "O5", q: "SELECT store, SUM(qty * price) FROM sales GROUP BY store; na-enye:", options: ["Ahịa ọ bụla", "Ngụkọ revenue maka ụlọ ahịa ọ bụla", "Ọnụọgụ ụlọ ahịa", "Obodo nke ụlọ ahịa ọ bụla"], answer: 1, why: "GROUP BY store na SUM na-enye otu ngụkọ revenue maka ụlọ ahịa ọ bụla." },
      { objective: "O5", q: "Olee ọrụ na-enye nkezi?", options: ["COUNT", "MAX", "SUM", "AVG"], answer: 3, why: "AVG na-enye nkezi nke kọlụm." },
      { objective: "O5", q: "JOIN na-ejikọ ahịrị site na tebụl abụọ site na:", options: ["Kọlụm nwere otu uru ahụ na ha abụọ", "Agba ahịrị ahụ", "Ịdị ukwuu tebụl ahụ", "Naanị usoro mkpụrụ akwụkwọ"], answer: 0, why: "JOIN ... ON na-ejikọ ahịrị ebe kọlụm key hà nhata." },
      { objective: "O6", q: "Ihe a chọpụtara kwesịrị inwe:", options: ["Naanị chaatị na-enweghị okwu", "Nọmba na ihe ọ pụtara", "Ahịrị data niile", "Echiche gị na-enweghị data"], answer: 1, why: "Ihe a chọpụtara doro anya na-ekwu ihe mere ya na nọmba." },
      { objective: "O6", q: "Data gị na-ekpuchi otu izu. Olee nke bụ eziokwu?", options: ["\"Nke a na-egosi usoro otu afọ.\"", "\"Nke a agaghị agbanwe mgbe ọ bụla.\"", "\"Data ahụ zuru oke.\"", "\"Naanị izu a; anyị chọrọ data ọzọ iji hụ usoro.\""], answer: 3, why: "Ịkpọ aha oke na-egbochi ndị na-agụ ihe ime mkpebi ezighi ezi." },
      { objective: "O6", q: "Olee ahịrị résumé kacha egosi ọrụ a?", options: ["\"Ama m kọmputa nke ọma.\"", "\"Hichara ma nyochaa data ahịa na Google Sheets na SQL (GROUP BY, JOIN) ma kọọ ihe a chọpụtara.\"", "\"Ama m ntakịrị data.\"", "\"Jiri ịntanetị.\""], answer: 1, why: "Ọ na-akpọ aha ngwa, nka na ihe e nwetara." },
      { objective: "O6", q: "Gịnị kwesịrị imechi akụkọ gị nwere otu ibe?", options: ["Nzọụkwụ ọzọ doro anya mmadụ nwere ike ime", "Ogologo ndepụta data mbụ", "Okwuntughe gị", "Ọ dịghị ihe"], answer: 0, why: "Nzọụkwụ ọzọ na-eme ka ihe a chọpụtara ghọọ omume." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [0, 3, 6, 8, 9, 10, 13, 15, 16] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      { name: "Ajụjụ doro anya", objective: "O1", notYet: "Ajụjụ ahụ edoghị anya ma ọ bụ nọmba enweghị ike ịza ya.", meets: "Ajụjụ ahụ na-akpọ aha onye ma ọ bụ ihe, ihe a na-atụ, na oge.", exceeds: "Ọ na-ekwukwa onye ga-eji azịza ahụ na mkpebi ọ na-enyere aka." },
      { name: "Data dị ọcha", objective: "O2", notYet: "Ahịrị ugboro abụọ ma ọ bụ aha na-adabaghị fọdụrụ, ma ọ bụ data mbụ furu efu.", meets: "Enweghị ahịrị ugboro abụọ, aha na ụdị dị otu, e debere data mbụ, e depụtara mgbanwe.", exceeds: "Ndepụta mgbanwe doro anya nke ọma nke na onye ọzọ nwere ike ime ihicha ahụ ọzọ." },
      { name: "Pivot na fọmụla", objective: "O3", notYet: "Enweghị pivot, ma ọ bụ ngụkọ adabaghị na nke e ji aka lelee.", meets: "Pivot na-aza ajụjụ ahụ, SUMIFS ma ọ bụ COUNTIFS dabakwara na ya.", exceeds: "Pivot ma ọ bụ fọmụla nke abụọ na-agbakwunye ntụnyere bara uru." },
      { name: "Ajụjụ na-ahọpụta ahịrị", objective: "O4", notYet: "Enweghị ajụjụ na-arụ ọrụ, ma ọ bụ ọ na-eweta ahịrị ezighi ezi.", meets: "Ajụjụ nwere WHERE na ORDER BY na-eweta kpọmkwem ahịrị ziri ezi.", exceeds: "E dere ajụjụ ndị ahụ nke ọma, nke ọ bụla nwekwara ndetu otu ahịrị na-ekwu ihe ọ na-aza." },
      { name: "Ikekọta na ijikọ", objective: "O5", notYet: "Enweghị ajụjụ GROUP BY, ma ọ bụ ngụkọ ya ezighi ezi.", meets: "Ajụjụ GROUP BY nwere SUM, COUNT ma ọ bụ AVG dabara na pivot ahụ.", exceeds: "O nwekwara JOIN na-arụ ọrụ ma kọwaa kọlụm dabara." },
      { name: "Ihe a chọpụtara na ahịrị résumé", objective: "O6", notYet: "Ihe a chọpụtara enweghị nọmba, ma ọ bụ enweghị oke ma ọ bụ nzọụkwụ ọzọ.", meets: "Ihe atọ a chọpụtara nwere nọmba, otu oke, otu nzọụkwụ ọzọ na otu ahịrị résumé.", exceeds: "Onye isi ọrụ nwere ike iji ya mee ihe n'ime otu nkeji, e dekwara aha chaatị ma ọ bụ tebụl ahụ nke ọma." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ndị na-amụ ihe tinyere ọrụ ahụ na résumé ma ọ bụ portfolio n'ime ụbọchị 30 (nnyocha nsochi)",
      "Ndị na-amụ ihe rịọrọ ma ọ bụ malite ọrụ data, akụkọ ma ọ bụ nyocha, ma ọ bụ jiri nka ndị a n'ọrụ, n'ime ọnwa 6",
      "Ndị na-amụ ihe debanyere aha ma ọ bụ gafee CompTIA Data+ ma ọ bụ asambodo data ọzọ n'ime ọnwa 6"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Kọmputa nwere web browser (ihuenyo ekwentị dị obere maka omume SQL)",
      "Akaụntụ Google n'efu maka Google Sheets, ma ọ bụ Excel ma ọ bụrụ na ọ dị",
      "Ebe ide SQL n'efu: SQLite Online na browser, ma ọ bụ DB Browser for SQLite e wụnyere",
      "Ihe dị ka nkeji 90 maka nkuzi, gbakwunyere awa 1 ruo 2 maka ọrụ ikpeazụ"
    ],
    facilitatorNotes: [
      "Tupu nnọkọ ahụ, meghee ebe ide SQL na kọmputa ụlọ omume ma lelee na ọ na-emeghe; ụfọdụ netwọk na-egbochi saịtị.",
      "Nye ndị na-amụ ihe tebụl omume ahụ dị ka faịlụ ma ọ bụ akwụkwọ e bipụtara ka ha ghara itufu oge n'ide ihe; mana ide ya n'onwe ya bụkwa ezigbo omume.",
      "Kekọta ndị na-amụ ihe abụọ abụọ maka Nkuzi 4 na 5: otu na-ede ajụjụ, nke ọzọ na-eji aka elele ihe ọ weputara, wee gbanwee.",
      "Kwusie iwu nzuzo ike: naanị data e chepụtara ma ọ bụ data ọha na ngwa ịntanetị na portfolio.",
      "Ọ bụrụ na ndị na-amụ ihe chọrọ asambodo, duga ha n'ibe gọọmentị CompTIA Data+; ihe ọmụmụ a na-akwado ha mana ọ naghị enye ya.",
      "Jiri rubric tụọ akara ọrụ ikpeazụ, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};
