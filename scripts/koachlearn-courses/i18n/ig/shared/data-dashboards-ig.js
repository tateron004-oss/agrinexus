"use strict";

// Koach Learn course (Igbo translation of shared/data-dashboards.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

const PL300 = { name: "Microsoft Learn: Power BI Data Analyst Associate (ule PL-300)", url: "https://learn.microsoft.com/en-us/credentials/certifications/data-analyst-associate/" };
const DATAPLUS = { name: "CompTIA Data+ (ule DA0-002)", url: "https://www.comptia.org/certifications/data" };
const PBI_DESKTOP = { name: "Microsoft: Power BI Desktop (nbudata n'efu)", url: "https://www.microsoft.com/en-us/power-platform/products/power-bi/desktop" };
const DATA_STUDIO = { name: "Google Cloud: Enyemaka Data Studio (nke a na-akpọbu Looker Studio)", url: "https://docs.cloud.google.com/looker/docs/studio" };
const DS_SHEETS = { name: "Google Cloud: Ijikọ Data Studio na Google Sheets", url: "https://docs.cloud.google.com/looker/docs/studio/connect-to-google-sheets" };

module.exports = {
  id: "data-dashboards-ig",
  lang: "ig",
  translationOf: "data-dashboards",
  category: "Workforce Development",
  name: "Iwu Dashboard Data (Power BI na Data Studio)",
  skills: "Ịhazi dashboard na nọmba ndị bụ isi ya, Ihicha data ka ọ bụrụ tebụl dị ọcha, Ịhọrọ chaatị kwesịrị ekwesị, Iwu dashboard otu peeji nwere filter, Ilele na ikesa dashboard n'enweghị nsogbu",
  outcome: "ịhazi, iwu, ilele na ikesa dashboard otu peeji na Power BI Desktop ma ọ bụ Looker Studio (Data Studio) nke na-aza otu ajụjụ azụmahịa doro anya site na nọmba 3 ruo 5 ndị bụ isi, chaatị kwesịrị ekwesị na filter dị mfe.",
  about: [
    "Azụmahịa, otu enyemaka (nonprofit), ụlọ ọgwụ na ndị agha niile na-eji dashboard: otu ihuenyo na-egosi nọmba ndị mmadụ chọrọ iji mee mkpebi. Iwu ha bụ isi nka maka ọrụ onye nyocha data, ọrụ akụkọ (reporting) na ọrụ nlekọta. Ihe ọmụmụ a bụ maka ndị na-achọ ọrụ, ndị agha lara ezumike, ndị nwe obere azụmahịa na onye ọ bụla jirila spreadsheet ma chọọ nzọụkwụ ọzọ.",
    "Ị ga-ahazi dashboard, hichaa obere data omume na Google Sheets, bubata ya na ngwa n'efu, họrọ chaatị kwesịrị ekwesị, tinye kaadị nọmba isi na filter, lelee nọmba ọ bụla ma kesaa ya n'enweghị nsogbu. Ị nwere ike iji Power BI Desktop (mmemme Windows n'efu sitere na Microsoft) ma ọ bụ Looker Studio, nke Google na-akpọzi Data Studio ugbu a (n'efu na web browser ọ bụla).",
    "Ihe ọmụmụ a na-akwado gị maka ọrụ dashboard na maka akụkụ akụkọ nke ezi ule abụọ: PL-300 nke Microsoft (Power BI Data Analyst Associate) na CompTIA Data+ (DA0-002). Ọ naghị enye gị asambodo nke ọ bụla n'ime ha. Lelee ezi peeji ha dị na isi iyi (sources) maka ihe ule ọ bụla na-ajụ, otu esi ahazi oge ya na ego ọ na-efu taa.",
    "Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise, wee nwee ọrụ \"Nwalee ya ugbu a\". Obere nnwale nwere ajụjụ 2 na-esote nkuzi ọ bụla, nnwale ihe ọmụma na-emechi isi ọ bụla, ule nwere ajụjụ 20 na-emechikwa ihe ọmụmụ a. Data omume niile bụ ihe e chepụtara echepụta."
  ],
  finalTask: "Wuo dashboard otu peeji maka ụzọ ọrụ nke gị: jiri data ire ahịa ụlọ achịcha (bakery) nke ihe ọmụmụ a, ma ọ bụ obere data e chepụtara echepụta site n'ọrụ ị chọrọ (dịka ọmụmaatụ ndepụta ọda ụlọ nkwakọba ngwaahịa ma ọ bụ ndị bịara ụlọ ọgwụ). Dee ajụjụ dashboard ahụ na nọmba 3 ruo 5 ndị bụ isi, hichaa data ka ọ bụrụ tebụl dị ọcha, wuo opekata mpe kaadị nọmba isi 3 na chaatị 2 dabara n'ajụjụ ahụ, tinye filter ụbọchị na otu filter ọzọ, lelee ngụkọta 3 megide data mbụ, wee kesaa ma ọ bụ bupụta ya na nchịkọta ahịrịokwu 3 na-ekwu ihe ọ na-egosi. Chekwaa ya ka ọ bụrụ ihe ngosi ọrụ (portfolio) ị ga-egosi n'ajụjụ ọnụ ọrụ.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị okenye dị iche iche: ndị na-achọ ọrụ data, akụkọ ma ọ bụ nlekọta, ndị agha lara ezumike na-aga n'ọrụ nkịtị, ndị nwe obere azụmahịa, ndị ntorobịa, na ndị na-alọta ụlọ site n'ụlọ mkpọrọ na-ewughachi nka ọrụ ha. Ọtụtụ ejiriwo spreadsheet; mmadụ ole na ole ewuola dashboard.",
    startingPoint: "Ha nwere ike itinye data na spreadsheet, gbakọọ ngụkọta site na SUM ma mee chaatị dị mfe (ma ọ bụ were \"Excel na Spreadsheet maka Ọrụ\"). Ha ejibeghị Power BI ma ọ bụ Looker Studio. Ụfọdụ amaghị chaatị ha ga-eji ma ọ bụ ihe mere nọmba dị n'akụkọ nwere ike ịbụ ihe ezighi ezi.",
    gap: "Ndị were mmadụ n'ọrụ chọrọ ndị nwere ike ime ka data agbazighị agbazi ghọọ otu peeji doro anya nke na-aza ajụjụ azụmahịa, nke a pụkwara ịtụkwasị obi. Ndị na-amụ ihe kwesịrị ịhazi, hichaa, wuo, lelee ma kesaa dashboard, ma gosi otu n'ajụjụ ọnụ ọrụ. Nke a bụkwa nka akụkọ a na-anwale na PL-300 na CompTIA Data+.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ; a na-akọwa okwu data ọ bụla",
      "Ngwaọrụ: Power BI Desktop chọrọ kọmputa Windows; na Mac, Chromebook ma ọ bụ kọmputa ọba akwụkwọ, jiri Data Studio na browser",
      "Naanị ngwa n'efu: Google Sheets, Power BI Desktop, Data Studio (Looker Studio)",
      "Oge: nkuzi nkeji 5 ruo 6 dabara n'etiti ọrụ na ịchọ ọrụ",
      "Nzuzo: data omume bụ ihe e chepụtara echepụta; ebubatala ezi data ndị ahịa, ndị ọrịa ma ọ bụ ndị ọrụ maka omume"
    ],
    prerequisites: "Iji spreadsheet n'ụzọ dị mfe: itinye data, SUM, ịhazi n'usoro (sort) na chaatị dị mfe. Ọ bụrụ na nke a dị gị ọhụrụ, buru ụzọ were \"Excel na Spreadsheet maka Ọrụ\"."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe e nyere gị mkpa azụmahịa dị ka \"Kedu ngwaahịa na-ere nke ọma?\"", action: "ide ajụjụ dashboard n'otu ahịrịokwu, kpọọ aha ndị ga-ele ya ma họrọ nọmba 3 ruo 5 ndị bụ isi (KPI)", standard: "ya na aha nọmba isi ọ bụla, otu esi agbakọ ya na oge ọ na-ekpuchi" },
    { id: "O2", condition: "Mgbe e nyere gị spreadsheet ire ahịa omume gbagọrọ agbagọ", action: "ihicha data ahụ ka ọ bụrụ tebụl dị ọcha nwere otu ahịrị maka ndekọ ọ bụla na otu kọlụm maka ubi (field) ọ bụla", standard: "n'enweghị isiokwu kọlụm efu, ahịrị abụọ yiri onwe ha ma ọ bụ ụdị nhazi karịrị otu na kọlụm ọ bụla" },
    { id: "O3", condition: "Mgbe e nyere gị ajụjụ gbasara mgbanwe n'oge, ntụnyere ma ọ bụ òkè nke ngụkọta", action: "ịhọrọ ma wuo ụdị chaatị dabara n'ajụjụ ahụ na Power BI Desktop ma ọ bụ Data Studio", standard: "na-enweta opekata mpe 4 n'ime nhọrọ chaatị 5 ziri ezi" },
    { id: "O4", condition: "Site n'iji data gị e hichara na Power BI Desktop ma ọ bụ Data Studio", action: "iwu dashboard otu peeji nwere kaadị nọmba isi, opekata mpe chaatị 2, filter ụbọchị na otu filter ọzọ", standard: "nke mere na onye na-ele ya nwere ike ịza ajụjụ dashboard ahụ n'ihe na-erughị otu nkeji" },
    { id: "O5", condition: "Mgbe e nyere gị dashboard emechara na data mbụ ya", action: "ilele opekata mpe ngụkọta 3 dị na dashboard megide data mbụ ma dozie nke ọ bụla na-adabaghị", standard: "tupu onye ọzọ ahụ ya" },
    { id: "O6", condition: "Mgbe dashboard gị dị njikere", action: "ikesa ma ọ bụ ibupụta dashboard ahụ na ikike ile naanị (view-only) ma dee nchịkọta ahịrịokwu 3 nke ihe ọ na-egosi", standard: "n'ekesaghị ozi nzuzo ọ bụla" }
  ],
  chapters: [
    {
      name: "Isi 1: Ịhazi dashboard na ịkwado data",
      lessons: [
        {
          title: "Ịmalite site n'ajụjụ na nọmba ndị bụ isi",
          objectives: ["O1"],
          minutes: 5,
          goal: "Dee ajụjụ dashboard, kpọọ aha ndị ga-ele ya ma họrọ nọmba 3 ruo 5 ndị bụ isi.",
          text: [
            "Dashboard bụ otu ihuenyo nọmba na chaatị na-enyere mmadụ aka ime mkpebi. Ezigbo dashboard na-amalite site n'ajụjụ, ọ bụghị site na chaatị. Jụọ: onye ga-ele nke a, gịnị ka ọ chọrọ ikpebi?",
            "Ọmụmaatụ: onye nwe obere ụlọ achịcha (bakery) na-ajụ, \"Kedu ngwaahịa na ụbọchị ndị na-ewebata ego kacha n'ọnwa ọ bụla?\" Onye ga-ele ya bụ onye nwe ụlọ ahịa ahụ. Mkpebi ahụ bụ ihe ọ ga-eme karịa na mgbe ọ ga-ahazi ndị ọrụ.",
            "Ọzọ, họrọ nọmba 3 ruo 5 ndị bụ isi, a na-akpọ KPI. Maka ụlọ achịcha ahụ: ngụkọta ire ahịa na dollar, ọnụ ọgụgụ ihe e rere, nkezi ire ahịa n'ọda ọ bụla, na ngwaahịa kacha ere. Dee otu esi agbakọ nke ọ bụla na oge ọ na-ekpuchi, dịka ọmụmaatụ \"Ngụkọta ire ahịa = nchịkọta kọlụm Total, ọnwa a\".",
            "Ọ bụrụ na nọmba dị ukwuu, ha na-ezo ndị dị mkpa. Ọ bụrụ na nọmba anaghị enyere aka ịza ajụjụ ahụ, hapụ ya."
          ],
          steps: ["Kpọọ aha ndị ga-ele ya: onye ga-eji dashboard ahụ?", "Dee ajụjụ ahụ n'otu ahịrịokwu.", "Kpọọ aha mkpebi ọ na-enyere ha aka ime.", "Họrọ nọmba 3 ruo 5 ndị bụ isi na-aza ya.", "Maka nke ọ bụla, dee aha ya, otu esi agbakọ ya na oge ọ na-ekpuchi."],
          words: [["Dashboard", "otu ihuenyo nọmba isi na chaatị na-enyere mmadụ aka ime mkpebi."], ["KPI (key performance indicator)", "otu n'ime nọmba ole na ole na-egosi ma ihe na-aga nke ọma, dị ka ngụkọta ire ahịa ọnwa a."], ["Ndị na-ele ya (audience)", "ndị mmadụ ga-ele dashboard ahụ."], ["Metric", "nọmba ọ bụla ị na-atụ, dị ka ihe e rere ma ọ bụ nkezi ire ahịa."]],
          slides: [
            { title: "Malite n'ajụjụ, ọ bụghị na chaatị", bullets: ["Onye ga-ele ya?", "Gịnị ka ọ chọrọ ikpebi?", "Dee ajụjụ ahụ n'otu ahịrịokwu"] },
            { title: "Ọmụmaatụ: obere ụlọ achịcha", bullets: ["Ajụjụ: kedu ngwaahịa na ụbọchị na-ewebata ego kacha?", "Onye ga-ele ya: onye nwe ya", "Mkpebi: ihe a ga-eme na mgbe a ga-etinye ndị ọrụ"] },
            { title: "Họrọ nọmba isi 3 ruo 5 (KPI)", bullets: ["Ngụkọta ire ahịa, ihe e rere, nkezi ire ahịa, nke kacha ere", "Dee otu esi agbakọ nke ọ bụla", "Dee oge ya: ọnwa a, izu a"] },
            { title: "Ntakịrị ka mma", bullets: ["Nọmba dị ukwuu na-ezo ndị dị mkpa", "Ọ bụrụ na ọ naghị aza ajụjụ ahụ, hapụ ya"] }
          ],
          tryIt: "Họrọ ọrụ ị chọrọ (dịka ọmụmaatụ ụlọ nkwakọba ngwaahịa, ihu ụlọ ọgwụ, onye isi ụlọ ahịa ma ọ bụ ọmụmaatụ ụlọ achịcha). N'akwụkwọ, dee ndị ga-ele ya, ajụjụ otu ahịrịokwu, mkpebi ahụ, na nọmba 3 ruo 5 ndị bụ isi ya na otu esi agbakọ nke ọ bụla na oge ya. Debe peeji a: ọ bụ atụmatụ dashboard ikpeazụ gị.",
          youCanNow: "ide ajụjụ dashboard maka ezi ndị ga-ele ya ma họrọ nọmba 3 ruo 5 ndị bụ isi na-aza ya.",
          quickCheck: [
            { objective: "O1", q: "Gịnị ka ị ga-ebu ụzọ mee mgbe ị na-ewu dashboard?", options: ["Dee ajụjụ ahụ na onye ọ bụ maka ya", "Họrọ agba maka chaatị", "Tinye chaatị ọ bụla ngwa ahụ nwere", "Họrọ ụdị mkpụrụ akwụkwọ (font)"], answer: 0, why: "Ajụjụ na ndị ga-ele ya na-ekpebi nọmba na chaatị kwesịrị ịdị na peeji ahụ." },
            { objective: "O1", q: "Kedu nọmba isi kacha mma maka \"Kedu ngwaahịa na-ewebata ego kacha n'ọnwa ọ bụla?\"", options: ["Ọnụ ọgụgụ ndị ọrụ", "Adreesị okporo ụzọ ụlọ achịcha ahụ", "Ngụkọta ire ahịa na dollar site na ngwaahịa, ọnwa a", "Ihu igwe ụbọchị ọ bụla"], answer: 2, why: "Ire ahịa site na ngwaahịa maka ọnwa ahụ na-aza ajụjụ ahụ ozugbo." }
          ],
          sources: [PL300, DATAPLUS]
        },
        {
          title: "Ihicha data ka ọ bụrụ tebụl dị ọcha",
          objectives: ["O2"],
          minutes: 6,
          goal: "Hichaa spreadsheet gbagọrọ agbagọ ka ọ bụrụ tebụl dị ọcha nwere otu ahịrị maka ndekọ ọ bụla na otu kọlụm maka ubi ọ bụla.",
          text: [
            "Ngwa dashboard na-arụ ọrụ kacha mma na tebụl dị ọcha (tidy table): otu ahịrị isiokwu, otu ahịrị maka ndekọ ọ bụla (ire ahịa ọ bụla, ọda ọ bụla) na otu kọlụm maka ubi ọ bụla (Date, Product, Units). Enweghị cell ejikọtara ọnụ (merged), enweghị ahịrị efu, enweghị ngụkọta e dere n'ime data.",
            "Data gbagọrọ agbagọ na-enye nọmba ezighi ezi. Nsogbu a na-ahụkarị: otu ire ahịa e dere ugboro abụọ (duplicate), cell efu, ụbọchị e dere n'ụzọ dị iche iche (10/3/26 na Oct 3), nọmba e chekwara dị ka ederede (\"$4.50\" e dere na oghere), na mkpụrụ okwu dị iche iche (\"Muffin\" na \"muffins\").",
            "Na Google Sheets ị nwere ike idozi ọtụtụ n'ime ndị a: Data > Data cleanup > Remove duplicates, Format > Number iji hazie ụbọchị na ego, na Edit > Find and replace iji dozie mkpụrụ okwu. Debe spreadsheet mbụ ma hichaa otu nnomi ya (copy), ka ị nwee ike ịlaghachi mgbe ọ bụla.",
            "Data omume maka ihe ọmụmụ a (e chepụtara echepụta): kọlụm Date, Product, Category, Units, Price, Total. Dịka ọmụmaatụ 10/1/2026, Muffin, Pastry, 12, 2.50, 30.00."
          ],
          steps: ["Mee nnomi spreadsheet ahụ ma rụọ ọrụ na nnomi ahụ.", "Hụ na e nwere naanị otu ahịrị isiokwu nwere aha doro anya na kọlụm ọ bụla.", "Wepụ ahịrị efu, cell ejikọtara ọnụ na ahịrị ngụkọta ọ bụla dị n'ime data.", "Wepụ ahịrị abụọ yiri onwe ha (duplicate).", "Nye kọlụm ọ bụla otu ụdị nhazi: ụbọchị dị ka ụbọchị, ego dị ka ego, ederede e dere n'otu ụzọ.", "Jiri aka lelee otu ahịrị: Units mụbaa Price kwesịrị ịha nhata Total."],
          words: [["Tebụl dị ọcha (tidy table)", "data nwere otu ahịrị isiokwu, otu ahịrị maka ndekọ ọ bụla na otu kọlụm maka ubi ọ bụla."], ["Ndekọ (record)", "otu ahịrị data, dị ka otu ire ahịa."], ["Ubi (field)", "otu kọlụm data, dị ka Date ma ọ bụ Product."], ["Duplicate", "otu ndekọ ahụ e dere ugboro abụọ."], ["Ụdị data (data type)", "ụdị uru kọlụm na-ejide: nọmba, ụbọchị, ego ma ọ bụ ederede."]],
          slides: [
            { title: "Tebụl dị ọcha", bullets: ["Otu ahịrị isiokwu", "Otu ahịrị maka ndekọ ọ bụla, otu kọlụm maka ubi ọ bụla", "Enweghị cell ejikọtara, ahịrị efu ma ọ bụ ngụkọta e dere ede"] },
            { title: "Nsogbu a na-ahụkarị", bullets: ["Ahịrị abụọ yiri onwe ha", "Ụbọchị e dere n'ụzọ dị iche iche", "Nọmba e chekwara dị ka ederede", "Otu ihe e dere n'ụzọ dị iche iche"] },
            { title: "Ndozi na Google Sheets", bullets: ["Data > Data cleanup > Remove duplicates", "Format > Number maka ụbọchị na ego", "Edit > Find and replace maka mkpụrụ okwu"] },
            { title: "Rụọ ọrụ n'enweghị nsogbu", bullets: ["Hichaa nnomi, debe nke mbụ", "Jiri aka lelee otu ahịrị: Units x Price = Total"] }
          ],
          tryIt: "Na Google Sheets, dee ahịrị 15 nke ire ahịa ụlọ achịcha e chepụtara echepụta (Date, Product, Category, Units, Price, Total) n'ime izu abụọ. N'ebumnuche, tinye ahịrị 1 yiri nke ọzọ, ahịrị efu 1, ụbọchị 1 e dere dị ka ederede (Oct 5) na mkpụrụ okwu 1 dị iche (\"muffins\"). Wee mee nnomi ma hichaa ya site na nzọụkwụ ndị ahụ. Gụọ ole nsogbu i doziri.",
          youCanNow: "ịhụ ma dozie ahịrị abụọ yiri onwe ha, cell efu, nhazi dị iche iche na mkpụrụ okwu dị iche iche iji mee tebụl dị ọcha.",
          quickCheck: [
            { objective: "O2", q: "Spreadsheet gị na-egosi \"Muffin\" na \"muffins\" dị ka ngwaahịa abụọ. Gịnị ka ị ga-eme?", options: ["Hapụ ya; ngwa ahụ ga-eche ya", "Hichapụ ahịrị muffin niile", "Tinye ụzọ ide nke atọ", "Jiri Find and replace ka ahịrị ọ bụla kwuo \"Muffin\""], answer: 3, why: "Otu ụzọ ide maka ihe ọ bụla pụtara na ngwa ahụ ga-agbakọ ha ọnụ nke ọma." },
            { objective: "O2", q: "Kedu nke na-akọwa tebụl dị ọcha?", options: ["Cell isiokwu ejikọtara ọnụ n'elu data", "Otu ahịrị isiokwu, otu ahịrị maka ndekọ ọ bụla, otu kọlụm maka ubi ọ bụla", "Ahịrị ngụkọta n'etiti data", "Ahịrị isiokwu abụọ nwere cell efu"], answer: 1, why: "Ngwa dashboard na-agụ tebụl dị ọcha nke ọma; cell ejikọtara ọnụ na ngụkọta e dere ede na-eme ka ha ghara ịghọta." }
          ],
          sources: [{ name: "Google Docs Editors Help: Kewaa ederede, wepụ ahịrị yiri onwe ha, ma ọ bụ bepụ oghere", url: "https://support.google.com/docs/answer/6325535" }]
        },
        {
          title: "Ibubata data na Power BI Desktop ma ọ bụ Data Studio",
          objectives: ["O2"],
          minutes: 6,
          goal: "Bubata tebụl dị ọcha na Power BI Desktop ma ọ bụ Data Studio ma lelee ụdị data nke kọlụm ọ bụla.",
          text: [
            "Họrọ ngwa gị. Power BI Desktop bụ n'efu site na Microsoft ma na-arụ ọrụ na kọmputa Windows. Looker Studio, nke Google na-akpọzi Data Studio ugbu a, bụ n'efu ma na-arụ ọrụ na web browser, ya mere ọ na-arụ na Mac, Chromebook ma ọ bụ kọmputa ọba akwụkwọ. A na-eji ha abụọ n'ezi ọrụ; nka ndị ahụ na-esi n'otu gaa n'ibe ya.",
            "Power BI Desktop: budata ya naanị site na ezi weebụsaịtị Microsoft. Chekwaa spreadsheet gị e hichara dị ka faịlụ Excel ma ọ bụ CSV. Họrọ Get data, họrọ faịlụ ahụ, ma lee ihe ngosi (preview) ya. Họrọ Transform data ma ọ bụrụ na kọlụm chọrọ ndozi; nke a na-emeghe Power Query Editor, ebe ị nwere ike ịhazi ụdị data nke kọlụm.",
            "Data Studio: banye site na akaụntụ Google, họrọ Create, wee Data source, họrọ njikọ Google Sheets (connector), họrọ spreadsheet gị na peeji ya (worksheet), ma họrọ Connect. Ị ga-ahụ ubi gị edepụtara ya na ụdị ha.",
            "Na ngwa abụọ ahụ, lelee kọlụm ọ bụla: Date kwesịrị ịbụ ụbọchị, Units na Total kwesịrị ịbụ nọmba, Product kwesịrị ịbụ ederede. A pụghị ịgbakọ nọmba e chekwara dị ka ederede. Ubi ndị ị na-agụ ma ọ bụ na-agbakọ (Units, Total) ka a na-akpọkarị measure ma ọ bụ metric; ubi ndị ị na-eji ekewa n'otu n'otu (Product, Date) ka a na-akpọ dimension."
          ],
          steps: ["Họrọ Power BI Desktop (Windows) ma ọ bụ Data Studio (browser ọ bụla).", "Power BI: Get data, họrọ faịlụ Excel ma ọ bụ CSV gị, lee preview, họrọ Load ma ọ bụ Transform data.", "Data Studio: Create, Data source, njikọ Google Sheets, họrọ spreadsheet ahụ, Connect.", "Lelee ụdị kọlụm ọ bụla: ụbọchị, nọmba, ederede.", "Dozie ụdị ọ bụla ezighi ezi tupu i wuo chaatị."],
          words: [["Power BI Desktop", "mmemme Microsoft n'efu maka Windows na-ewu akụkọ na dashboard."], ["Data Studio (Looker Studio)", "ngwa browser n'efu nke Google maka akụkọ na dashboard; Google gbanwere aha Looker Studio ka ọ bụrụ Data Studio."], ["Data source", "faịlụ ma ọ bụ spreadsheet dashboard na-agụ data ya site na ya."], ["Power Query Editor", "akụkụ Power BI ebe ị na-ehicha ma na-ahazi data tupu i wuo visual."], ["Dimension", "ubi ị na-eji ekewa n'otu n'otu, dị ka Product ma ọ bụ Date."], ["Measure (metric)", "nọmba ị na-agbakọ, na-agụ ma ọ bụ na-achọta nkezi ya, dị ka ngụkọta ire ahịa."], ["Faịlụ CSV", "faịlụ ederede nkịtị nwere data, ebe rịkọm (comma) na-ekewa uru ọ bụla."]],
          slides: [
            { title: "Ngwa abụọ n'efu", bullets: ["Power BI Desktop: n'efu, Windows", "Data Studio (bụbu Looker Studio): n'efu, web browser ọ bụla", "Nka na-esi n'otu gaa n'ibe ya"] },
            { title: "Power BI Desktop", bullets: ["Get data, họrọ faịlụ Excel ma ọ bụ CSV gị", "Lelee preview", "Transform data na-emeghe Power Query Editor"] },
            { title: "Data Studio", bullets: ["Create, wee Data source", "Njikọ Google Sheets, họrọ spreadsheet ahụ", "Connect, wee lelee ndepụta ubi"] },
            { title: "Lelee ụdị data ọ bụla", bullets: ["Ụbọchị dị ka ụbọchị, nọmba dị ka nọmba", "Measure: ihe ị na-agbakọ, dị ka Total", "Dimension: ihe ị na-eji ekewa, dị ka Product"] }
          ],
          tryIt: "Bubata spreadsheet ụlọ achịcha gị e hichara na Power BI Desktop ma ọ bụ Data Studio. Dee kọlụm ọ bụla na ụdị data ya. Ọ bụrụ na nọmba ọ bụla na-egosi dị ka ederede, dozie ya na ngwa ahụ ma ọ bụ na spreadsheet, wee bubata ya ọzọ. Wee kpọọ aha ubi ndị bụ dimension na ndị bụ measure.",
          youCanNow: "ibubata tebụl dị ọcha na Power BI Desktop ma ọ bụ Data Studio ma hụ na kọlụm ọ bụla nwere ụdị data ziri ezi.",
          quickCheck: [
            { objective: "O2", q: "Kọlụm Total gị batara dị ka ederede. Gịnị ga-eme ma ọ bụrụ na ị hapụ ya?", options: ["Ngwa ahụ agaghị enwe ike ịgbakọ ngụkọta ahụ nke ọma", "Ọ dịghị ihe; ederede na nọmba na-arụ otu ọrụ", "Dashboard ahụ ga-enwekwu agba", "Faịlụ ahụ ga-adị obere"], answer: 0, why: "Naanị kọlụm nọmba ka a pụrụ ịgbakọ ma ọ bụ chọta nkezi ya." },
            { objective: "O2", q: "Naanị Chromebook ka i nwere. Kedu ngwa ị nwere ike iji maka ihe ọmụmụ a?", options: ["Power BI Desktop", "Ọ dịghị ngwa ga-arụ ọrụ", "Data Studio na web browser", "Naanị akwụkwọ"], answer: 2, why: "Data Studio na-arụ ọrụ na browser; Power BI Desktop chọrọ Windows." }
          ],
          sources: [PBI_DESKTOP, DATA_STUDIO, DS_SHEETS]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ịhazi dashboard na ịkwado data",
        questions: [
          { objective: "O1", q: "Onye isi ụlọ ahịa chọrọ ịma ụbọchị n'izu chọrọ ndị ọrụ karịa. Kedu nọmba isi na-enyere aka kacha?", options: ["Nọmba ekwentị ụlọ ahịa ahụ", "Ọnụ ọgụgụ ngwaahịa dị na ndepụta", "Ọnụ ọgụgụ ndị ahịa site n'ụbọchị n'izu", "Ụbọchị onye isi ahụ malitere ọrụ"], answer: 2, why: "Ndị ahịa site n'ụbọchị na-egosi ozugbo ụbọchị ndị kacha nwee ọrụ." },
          { objective: "O1", q: "Nọmba isi ole ka dashboard otu peeji kwesịrị igosikarị?", options: ["3 ruo 5", "Naanị 1", "Ọtụtụ dị ka o kwere omume", "Opekata mpe 20"], answer: 0, why: "Nọmba isi ole na ole na-eme ka ndị dị mkpa dị mfe ịhụ." },
          { objective: "O2", q: "Kedu nsogbu ga-eme ka ngụkọta ire ahịa dị elu karịa ka o kwesịrị?", options: ["Ahịrị isiokwu doro anya", "Ụbọchị a haziri dị ka ụbọchị", "Otu ụzọ ide maka ngwaahịa ọ bụla", "Otu ire ahịa e dere ugboro abụọ"], answer: 3, why: "Ahịrị abụọ yiri onwe ha na-agụ otu ire ahịa ugboro abụọ." },
          { objective: "O2", q: "Tupu i hichaa spreadsheet, gịnị ka ị ga-eme?", options: ["Hichapụ ahịrị isiokwu", "Mee nnomi ma hichaa nnomi ahụ", "Jikọta cell niile ọnụ", "Dee ngụkọta n'ime data"], answer: 1, why: "Idebe nke mbụ na-eme ka ị laghachi ma ọ bụrụ na ndozi agaghị nke ọma." },
          { objective: "O2", q: "Product na Date bụ ubi ị na-eji ekewa n'otu n'otu. Gịnị ka a na-akpọ ha?", options: ["Measure", "Okwuntughe", "Dimension", "Filter"], answer: 2, why: "Dimension bụ ubi ị na-eji ekewa ma ọ bụ ekere data; measure bụ nọmba ị na-agbakọ ma ọ bụ na-achọta nkezi ya." }
        ]
      }
    },
    {
      name: "Isi 2: Iwu, ilele na ikesa",
      lessons: [
        {
          title: "Ịhọrọ chaatị kwesịrị ekwesị",
          objectives: ["O3"],
          minutes: 6,
          goal: "Họrọ ma wuo chaatị dabara n'ụdị ajụjụ ọ bụla.",
          text: [
            "Mee ka chaatị dabara n'ajụjụ. Mgbanwe n'oge (ire ahịa site n'ụbọchị ma ọ bụ ọnwa) bụ line chart. Ntụnyere n'etiti otu dị iche iche (ire ahịa site na ngwaahịa) bụ bar chart ma ọ bụ column chart, a haziri site na nke kacha ukwuu ruo nke kacha nta. Akụkụ nke ihe zuru ezu (òkè ire ahịa site na category) nwere ike ịbụ pie chart ma ọ bụ donut chart, mana naanị ma ọ bụrụ na mpekere dị ole na ole; bar chart na-adokarị anya karịa.",
            "Otu nọmba isi n'onwe ya bụ card na Power BI ma ọ bụ scorecard na Data Studio. Uru kpọmkwem ndị mmadụ chọrọ ịchọta na-aga na tebụl. Map na-enyere aka naanị mgbe ebe ihe dị dị mkpa.",
            "Iwu ya: na Power BI Desktop, pịa otu visual na Visualizations pane, wee dọrọ dimension (Product) na measure (Total) n'ime ubi ya. Na Data Studio, họrọ Add a chart, họrọ ụdị ya, wee hazie dimension na metric.",
            "Mee ka chaatị kwuo eziokwu: bar chart na-amalite na efu (0), chaatị ọ bụla nwere aha doro anya na-ekwu ihe ọ na-egosi (\"Ire ahịa site na ngwaahịa, Ọktoba\"), ị na-ejikwa otu agba ma ọ bụrụ na agba ahụ apụtaghị ihe."
          ],
          steps: ["Gụọ ajụjụ ahụ: ọ bụ maka oge, ntụnyere otu dị iche iche, akụkụ nke ihe zuru ezu, ka ọ bụ otu nọmba?", "Oge: line chart. Ntụnyere: bar chart a haziri. Akụkụ: pie nwere mpekere ole na ole, ma ọ bụ bar. Otu nọmba: card ma ọ bụ scorecard.", "Tinye chaatị ahụ ma hazie dimension na measure.", "Nye ya aha na-ekwu ihe ọ na-egosi na oge ya.", "Lelee na bar na-amalite na efu."],
          words: [["Line chart", "chaatị na-egosi otu nọmba si agbanwe n'oge."], ["Bar chart", "chaatị nke ogwe (bar) na-atụnyere otu dị iche iche; column chart bụ bar chart guzoro ọtọ."], ["Pie chart", "okirikiri e kere ka mpekere na-egosi akụkụ nke ihe zuru ezu."], ["Card / scorecard", "igbe na-egosi otu nnukwu nọmba, dị ka ngụkọta ire ahịa."], ["Visual", "okwu Power BI maka chaatị, card, tebụl ma ọ bụ map."]],
          slides: [
            { title: "Mee ka chaatị dabara n'ajụjụ", bullets: ["N'oge: line chart", "Ntụnyere otu dị iche iche: bar chart a haziri", "Akụkụ nke ihe zuru ezu: mpekere ole na ole, ma ọ bụ bar", "Otu nọmba: card ma ọ bụ scorecard"] },
            { title: "Wuo ya", bullets: ["Power BI: họrọ visual, dọbata ubi", "Data Studio: Add a chart, hazie dimension na metric"] },
            { title: "Mee ka ọ kwuo eziokwu", bullets: ["Bar na-amalite na efu", "Aha na-ekwu ihe ọ na-egosi na mgbe", "Otu agba ma ọ bụrụ na agba apụtaghị ihe"] }
          ],
          tryIt: "Site n'iji data ụlọ achịcha gị, wuo chaatị atọ: (1) ngụkọta ire ahịa site n'ụbọchị dị ka line chart, (2) ngụkọta ire ahịa site na ngwaahịa dị ka bar chart a haziri ka nke kacha ukwuu bụrụ nke mbụ, (3) ngụkọta ire ahịa dị ka otu card ma ọ bụ scorecard. Nye nke ọ bụla aha doro anya. Wee dee otu ahịrịokwu maka ihe chaatị ọ bụla na-agwa gị.",
          youCanNow: "ịhọrọ line, bar, pie, card ma ọ bụ tebụl dabara n'ajụjụ ma wuo ya nwere aha doro anya.",
          quickCheck: [
            { objective: "O3", q: "Kedu chaatị kacha egosi otu ire ahịa si gbanwee ụbọchị ọ bụla n'ọnwa a?", options: ["Pie chart", "Map", "Otu card", "Line chart"], answer: 3, why: "Line chart na-egosi mgbanwe n'oge." },
            { objective: "O3", q: "Ị chọrọ ịtụnyere ire ahịa ngwaahịa 8. Kedu nke kacha doo anya?", options: ["Pie chart nwere mpekere 8", "Bar chart a haziri site na nke kacha ukwuu ruo nke kacha nta", "Map", "Tebụl ụbọchị"], answer: 1, why: "Bar chart a haziri na-eme ka ntụnyere dị mfe; mpekere pie 8 siri ike ịgụ." }
          ],
          sources: [DATAPLUS, PL300]
        },
        {
          title: "Ịhazi dashboard nwere card na filter",
          objectives: ["O4"],
          minutes: 6,
          goal: "Wuo dashboard otu peeji nwere kaadị nọmba isi, chaatị, filter ụbọchị na otu filter ọzọ.",
          text: [
            "Ndị mmadụ na-agụ ihuenyo site n'akụkụ elu aka ekpe. Tinye kaadị nọmba isi n'ahịrị n'elu, chaatị kacha mkpa n'okpuru ha, na nkọwa ndị ọzọ n'okpuru. Tinye aha maka peeji ahụ dum na oge ụbọchị ọ na-ekpuchi.",
            "Filter na-ekwe ka ndị na-ele ya gbanwee ihe ha na-ahụ. Na Power BI a na-akpọ ha slicer: tinye Slicer visual ma tinye Date n'ime ya, wee tinye ọzọ maka Category. Na Data Studio a na-akpọ ha control: họrọ Add a control, họrọ Date range control, wee tinye Drop-down list control maka Category.",
            "Nwalee filter: họrọ otu category ma hụ na card na chaatị ọ bụla gbanwere. Ọ bụrụ na otu agbanweghị, e jikọtaghị ya na otu data ahụ.",
            "Hapụ oghere, hazie ihe n'ahịrị, ma wepụ ihe ọ bụla na-adịghị enyere aka ịza ajụjụ ahụ. Wee mee nnwale otu nkeji: gosi enyi gị peeji ahụ ma jụọ ya ajụjụ dashboard ahụ. Ọ nwere ike ịza ya n'ihe na-erughị otu nkeji?"
          ],
          steps: ["Tinye aha peeji na oge ụbọchị ya.", "Tinye kaadị nọmba isi 3 ruo 5 n'ahịrị n'elu.", "Tinye chaatị isi n'okpuru card ndị ahụ, chaatị ndị ọzọ n'okpuru.", "Tinye filter ụbọchị (slicer ma ọ bụ date range control).", "Tinye otu filter ọzọ, dị ka Category.", "Nwalee: gbanwee filter ọ bụla ma lee card na chaatị ọ bụla ka ọ gbanwee.", "Mee nnwale otu nkeji ya na onye ọzọ."],
          words: [["Nhazi peeji (layout)", "ebe card na chaatị ọ bụla nọ na peeji ahụ."], ["Filter", "ihe njikwa na-ekwe ka onye na-ele ya gosi naanị ụfọdụ data, dị ka otu ọnwa."], ["Slicer", "aha Power BI maka filter dị na peeji."], ["Control", "aha Data Studio maka filter dị na peeji, dị ka date range control."]],
          slides: [
            { title: "Nhazi peeji", bullets: ["Kaadị nọmba isi n'ahịrị n'elu", "Chaatị isi n'okpuru ha, nkọwa n'okpuru", "Aha peeji na oge ụbọchị ya"] },
            { title: "Filter", bullets: ["Power BI: Slicer visual maka Date na Category", "Data Studio: Date range control na Drop-down list"] },
            { title: "Nwalee ya", bullets: ["Gbanwee filter: ihe niile ọ na-agbanwe?", "Wepụ ihe ọ bụla na-adịghị enyere aka", "Nnwale otu nkeji ya na enyi"] }
          ],
          tryIt: "Tinye chaatị atọ gị site na Nkuzi 4 n'otu peeji. Tinye opekata mpe otu kaadị nọmba isi ọzọ (dịka ọmụmaatụ ihe e rere ma ọ bụ nkezi ire ahịa), filter ụbọchị na filter Category. Hazie ihe niile n'ahịrị. Wee jụọ mmadụ ajụjụ dashboard gị ma gụọ oge o were ịza ya site na peeji ahụ.",
          youCanNow: "ịhazi dashboard otu peeji nwere kaadị nọmba isi, chaatị na filter na-arụ ọrụ nke mmadụ nwere ike ịgụ n'ihe na-erughị otu nkeji.",
          quickCheck: [
            { objective: "O4", q: "Ebee ka kaadị nọmba isi na-agakarị?", options: ["N'ahịrị n'elu", "Ezoro ezo na peeji nke abụọ", "N'okpuru ala kpọmkwem", "N'ime pie chart"], answer: 0, why: "Ndị mmadụ na-agụ site n'elu aka ekpe, ya mere nọmba isi na-ebu ụzọ." },
            { objective: "O4", q: "Ị họrọ otu category na filter, mana otu chaatị agbanweghị. Gịnị ka nke ahụ pụtara?", options: ["Dashboard ahụ emechaala", "E jikọtaghị chaatị ahụ na otu data ma ọ bụ filter ahụ", "Filter anaghị agbanwe chaatị mgbe ọ bụla", "Ị chọrọ ihuenyo ka ukwuu"], answer: 1, why: "Card na chaatị ọ bụla kwesịrị ịgbanwe; nke na-adịghị agbanwe chọrọ ndozi." }
          ],
          sources: [PBI_DESKTOP, DATA_STUDIO]
        },
        {
          title: "Ilele nọmba na ikesa n'enweghị nsogbu",
          objectives: ["O5", "O6"],
          minutes: 6,
          goal: "Lelee ngụkọta 3 dị na dashboard megide data mbụ, wee kesaa ya na ikike ile naanị na obere nchịkọta.",
          text: [
            "Dashboard bara uru naanị ma ọ bụrụ na a pụrụ ịtụkwasị ya obi. Tupu onye ọ bụla ahụ ya, lelee opekata mpe nọmba 3. Ọmụmaatụ: card ahụ kwuru na ngụkọta ire ahịa bụ $1,240. Na spreadsheet gị, jiri SUM na kọlụm Total maka otu ụbọchị ndị ahụ. Ha dabara? Wee lelee otu ngwaahịa na otu ụbọchị n'otu ụzọ ahụ.",
            "Ọ bụrụ na nọmba adabaghị, chọọ ihe ndị na-akpatakarị ya: filter ka hazịrị, ahịrị abụọ yiri onwe ha alaghachila, kọlụm bụ ederede kama nọmba, oge ụbọchị dị iche, ma ọ bụ card na-eji Count kama Sum.",
            "Kesaa n'enweghị nsogbu. Na Data Studio, jiri bọtịnụ Share ma nye ndị mmadụ ikike ile (view), ọ bụghị ikike ịgbanwe (edit). Na Power BI Desktop, bupụta peeji ahụ na PDF ma ọ bụ chekwaa faịlụ ahụ ma zipu ya naanị onye kwesịrị ekwesị; ibipụta ya n'ịntanetị nwere ike ịchọ akaụntụ ọrụ ma ọ bụ nke ụlọ akwụkwọ. Etinyela ezi ozi ndị ahịa, ndị ọrịa ma ọ bụ ndị ọrụ na dashboard omume mgbe ọ bụla.",
            "Tinye nchịkọta ahịrịokwu 3: ihe dashboard ahụ na-egosi, ihe kacha mkpa ị chọpụtara, na otu ihe a tụrụ aro ime. Ọmụmaatụ: \"Nke a na-egosi ire ahịa ụlọ achịcha maka Ọktoba. Muffin wetara ego kacha, Satọde bụkwa ụbọchị kacha nwee ọrụ. Anyị nwere ike ime muffin karịa ma tinye otu onye ọrụ ọzọ na Satọde.\""
          ],
          steps: ["Kpochapụ filter niile.", "Lelee nọmba 3 megide spreadsheet mbụ: ngụkọta, otu ngwaahịa na otu ụbọchị.", "Ọ bụrụ na otu ezighi ezi, lelee filter, ahịrị abụọ yiri onwe ha, ụdị data, ụbọchị, na Sum ma ọ bụ Count.", "Kesaa na ikike ile naanị, ma ọ bụ bupụta na PDF.", "Dee nchịkọta ahịrịokwu 3: ihe ọ na-egosi, ihe isi ị chọpụtara, otu ihe a ga-eme."],
          words: [["Validate", "ilele na nọmba ziri ezi site n'itụnyere ya na data mbụ."], ["Ikike ile naanị (view-only)", "ndị mmadụ nwere ike ilele dashboard ahụ mana ha enweghị ike ịgbanwe ya."], ["Export (ibupụta)", "ichekwa nnomi n'ụdị faịlụ ọzọ, dị ka PDF."], ["Insight", "ihe bara uru a chọpụtara nke na-enyere mmadụ aka ikpebi ihe ọ ga-eme."]],
          slides: [
            { title: "Lelee tupu i kesaa", bullets: ["Kpochapụ filter", "Lelee nọmba 3 megide spreadsheet mbụ", "Ngụkọta, otu ngwaahịa, otu ụbọchị"] },
            { title: "Ọ bụrụ na nọmba ezighi ezi", bullets: ["Filter ka hazịrị", "Ahịrị abụọ yiri onwe ha ma ọ bụ nọmba bụ ederede", "Ụbọchị dị iche, ma ọ bụ Count kama Sum"] },
            { title: "Kesaa n'enweghị nsogbu", bullets: ["Ikike ile naanị, ọ bụghị ịgbanwe", "Ma ọ bụ bupụta na PDF", "Enweghị ezi ozi nzuzo n'ọrụ omume"] },
            { title: "Dee nchịkọta ahịrịokwu 3", bullets: ["Ihe ọ na-egosi", "Ihe isi a chọpụtara", "Otu ihe a tụrụ aro ime"] }
          ],
          tryIt: "Mechaa ọrụ ikpeazụ gị: lelee nọmba 3 dị na dashboard gị megide spreadsheet gị ma dee nke ọ bụla na ibe ya. Dozie nke ọ bụla na-adabaghị. Wee kesaa ya na ikike ile naanị (Data Studio) ma ọ bụ bupụta PDF (Power BI), ma dee nchịkọta ahịrịokwu 3 gị. Jiri rubric tụọ onwe gị akara tupu i kwuo na ị mechaala.",
          youCanNow: "ilele nọmba dashboard megide data mbụ ya, kesaa ya n'enweghị nsogbu, ma kọwaa ihe ọ na-egosi n'ahịrịokwu atọ.",
          quickCheck: [
            { objective: "O5", q: "Card gị kwuru na e rere ihe 340, mana SUM nke Units na spreadsheet kwuru 310. Gịnị ka ị ga-ebu ụzọ lelee?", options: ["Agba chaatị", "Font aha peeji", "Ma filter ka hazịrị ma ọ bụ ahịrị abụọ yiri onwe ha alaghachila", "Ìhè ihuenyo"], answer: 2, why: "Filter na ahịrị abụọ yiri onwe ha bụ ihe ndị na-akpatakarị ngụkọta na-adabaghị." },
            { objective: "O6", q: "Onye isi gị chọrọ naanị ilele dashboard ahụ. Kedu ikike ị ga-enye?", options: ["Okwuntughe gị", "Ikike ịgbanwe (edit)", "Ikike onye nwe ya (owner)", "Ikike ile naanị (view-only)"], answer: 3, why: "Ikike ile naanị na-ekwe ka ọ hụ ya n'agbanweghị ya na mberede." }
          ],
          sources: [DATA_STUDIO, DATAPLUS]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Iwu, ilele na ikesa",
        questions: [
          { objective: "O3", q: "Kedu chaatị na-egosi OTU nnukwu nọmba, dị ka ngụkọta ire ahịa ọnwa a?", options: ["Line chart", "Card ma ọ bụ scorecard", "Map", "Tebụl nwere ahịrị 100"], answer: 1, why: "Card (Power BI) ma ọ bụ scorecard (Data Studio) na-egosi otu nọmba isi." },
          { objective: "O3", q: "Ogwe bar chart na-amalite na 900 kama 0. Gịnị bụ nsogbu ya?", options: ["Obere ọdịiche na-adị ka ha buru ibu karịa ka ha dị", "Ọ dịghị nsogbu; ọ na-adị mma karịa", "Agba ezighi ezi", "Aha dị ogologo nke ukwuu"], answer: 0, why: "Ogwe na-amaliteghị na efu na-eme ka ọdịiche dị ka ọ karịrị ka ọ dị." },
          { objective: "O4", q: "Na Power BI, gịnị ka a na-akpọ filter dị na peeji?", options: ["Card", "Source", "Metric", "Slicer"], answer: 3, why: "Power BI na-akpọ filter peeji slicer; Data Studio na-akpọ ha control." },
          { objective: "O5", q: "Nọmba ole ka ị ga-elele megide data mbụ tupu i kesaa?", options: ["Ọ dịghị; ngwa ahụ na-eziri ezi mgbe niile", "Naanị aha peeji", "Opekata mpe 3, dị ka ngụkọta, otu ngwaahịa na otu ụbọchị", "Naanị nọmba onye isi gị jụrụ maka ha"], answer: 2, why: "Ilele ọtụtụ nọmba na-ejide mperi filter, ahịrị abụọ yiri onwe ha na ụdị data." },
          { objective: "O6", q: "Kedu ahịrịokwu nchịkọta kacha mma ị ga-eji kesaa dashboard?", options: ["\"Lee ụfọdụ chaatị.\"", "\"Muffin wetara ego kacha n'Ọktoba, ya mere anyị nwere ike ime karịa na Satọde.\"", "\"Ejiri m ọtụtụ agba.\"", "\"Lee ya n'onwe gị.\""], answer: 1, why: "Ezigbo nchịkọta na-ekwu ihe a chọpụtara na otu ihe a tụrụ aro ime." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Iwu Dashboard Data (Power BI na Data Studio)",
    questions: [
      { objective: "O1", q: "Gịnị bụ dashboard?", options: ["Ndepụta okwuntughe", "Otu ihuenyo nọmba isi na chaatị na-enyere mmadụ aka ikpebi", "Ụdị formula spreadsheet", "Ntọala igwe mbipụta"], answer: 1, why: "Dashboard na-etinye nọmba isi maka mkpebi n'otu ihuenyo." },
      { objective: "O1", q: "Kedu nke bụ ajụjụ dashboard doro anya?", options: ["\"Gosi m data.\"", "\"Mee ka ọ maa mma.\"", "\"Ihe niile gbasara azụmahịa ahụ.\"", "\"Kedu ngwaahịa na-ewebata ego kacha n'ọnwa ọ bụla?\""], answer: 3, why: "Ọ bụ otu ajụjụ kpọmkwem dashboard nwere ike ịza." },
      { objective: "O1", q: "Maka nọmba isi ọ bụla, ị na-ede aha ya, otu esi agbakọ ya na:", options: ["Oge ọ na-ekpuchi", "Agba ọ kacha hụ n'anya", "Ọnụ ahịa ngwa ahụ", "Okwuntughe gị"], answer: 0, why: "Nọmba isi chọrọ oge, dị ka ọnwa a, ka o nwee ihe ọ pụtara." },
      { objective: "O2", q: "Na tebụl dị ọcha, ahịrị ọ bụla bụ:", options: ["Chaatị", "Ngụkọta", "Otu ndekọ, dị ka otu ire ahịa", "Aha"], answer: 2, why: "Otu ahịrị maka ndekọ ọ bụla na otu kọlụm maka ubi ọ bụla bụ tebụl dị ọcha." },
      { objective: "O2", q: "E dere ụbọchị na spreadsheet gị dị ka \"10/3/26\" na \"Oct 3\". Gịnị ka ị ga-eme?", options: ["Hapụ ha abụọ", "Hichapụ kọlụm ụbọchị", "Tinye ụzọ ide nke atọ", "Hazie kọlụm ahụ ka ụbọchị ọ bụla bụrụ ezi ụbọchị n'otu ụdị"], answer: 3, why: "Otu ụdị ụbọchị na-eme ka ngwa ahụ kewaa ma kpochapụ site n'ụbọchị nke ọma." },
      { objective: "O2", q: "Ebee ka ị ga-enweta Power BI Desktop?", options: ["Weebụsaịtị gọọmentị Microsoft", "Njikọ n'ozi onye ị na-amaghị zitere", "Saịtị nbudata n'efu ọ bụla", "Mgbasa ozi na-apụta na mberede"], answer: 0, why: "Budata mmemme naanị site na ezi weebụsaịtị ụlọ ọrụ ahụ." },
      { objective: "O2", q: "Na Data Studio, kedu otu esi ejikọ Google Sheet?", options: ["Zipu spreadsheet ahụ na Google site na email", "Mepụta data source site na njikọ Google Sheets", "Bipụta ya ma nyochaa ya (scan)", "Dee nọmba ọ bụla ọzọ"], answer: 1, why: "Njikọ Google Sheets na-ejikọ spreadsheet ahụ dị ka data source." },
      { objective: "O3", q: "Kedu ajụjụ dabara na line chart?", options: ["Kedu òkè ire ahịa bụ achịcha (bread)?", "Gịnị bụ nọmba ekwentị anyị?", "Kedu otu ire ahịa izu ọ bụla si gbanwee n'ime ọnwa 3?", "Kedu ụlọ ahịa dị n'obodo ọ bụla?"], answer: 2, why: "Line chart na-egosi mgbanwe n'oge." },
      { objective: "O3", q: "Kedu ajụjụ dabara na bar chart a haziri?", options: ["Kedu n'ime ngwaahịa 6 anyị rere nke kacha?", "Gịnị bụ ngụkọta ire ahịa taa?", "Olee oge ụlọ ahịa na-emeghe?", "Kedu otu ire ahịa si gbanwee awa ọ bụla?"], answer: 0, why: "Bar chart na-atụnyere otu dị iche iche; ịhazi ya na-eme ka nke kacha ukwuu dị mfe ịhụ." },
      { objective: "O3", q: "Olee mgbe pie chart bụ nhọrọ kwesịrị ekwesị?", options: ["Igosi mgbanwe n'ime ọnwa 12", "Igosi òkè nke ngụkọta nwere naanị mpekere ole na ole", "Ịtụnyere ngwaahịa 15", "Igosi otu nọmba"], answer: 1, why: "Pie na-egosi akụkụ nke ihe zuru ezu, a na-agụkwa ya nke ọma naanị mgbe mpekere dị ole na ole." },
      { objective: "O3", q: "Ezigbo aha chaatị:", options: ["Na-ekwu \"Chart 1\"", "Bụ ihe efu", "Dị na obere font", "Na-ekwu ihe ọ na-egosi na oge ya"], answer: 3, why: "\"Ire ahịa site na ngwaahịa, Ọktoba\" na-agwa onye na-ele ya kpọmkwem ihe ọ na-ahụ." },
      { objective: "O4", q: "Na Data Studio, a na-akpọ filter dị na peeji:", options: ["Slicer", "Ụdị data", "Control", "Measure"], answer: 2, why: "Data Studio na-akpọ filter peeji control, dị ka date range control." },
      { objective: "O4", q: "Gịnị bụ nnwale otu nkeji?", options: ["Jụọ mmadụ ajụjụ dashboard ma lee ma ọ nwere ike ịza ya site na peeji ahụ n'ihe na-erughị otu nkeji", "Wuo dashboard ahụ n'otu nkeji", "Gosi peeji ahụ maka otu sekọnd", "Malitegharịa kọmputa"], answer: 0, why: "Ọ bụrụ na onye na-ele ya nwere ike ịza ngwa ngwa, nhazi peeji ahụ na-arụ ọrụ." },
      { objective: "O4", q: "Ị gbanwere filter Category, card na chaatị ọ bụla gbanwekwara. Nke a na-egosi:", options: ["Data ahụ ezighi ezi", "Filter na-arụ ọrụ n'ofe peeji ahụ niile", "Dashboard chọrọ peeji ndị ọzọ", "Agba emebiela"], answer: 1, why: "Ihe niile na-agbanwe ọnụ pụtara na e jikọrọ filter ahụ na visual niile." },
      { objective: "O5", q: "Ngụkọta dashboard bụ $1,240, SUM na spreadsheet maka otu ụbọchị ndị ahụ bụkwa $1,240. Nke a pụtara:", options: ["E lelere ngụkọta ahụ, ọ dabakwara", "Dashboard ahụ ezighi ezi", "Ị kwesịrị ihichapụ spreadsheet ahụ", "Ị chọrọ ngwa ọhụrụ"], answer: 0, why: "Idaba na data mbụ bụ otu esi akwado (validate) nọmba." },
      { objective: "O5", q: "Card na-egosi 52 mgbe ị tụrụ anya ngụkọta ire ahịa nke $1,240. Ihe nwere ike ịkpata ya bụ:", options: ["Aha peeji", "Agba ogwe bar", "E hazịrị card ahụ na Count kama Sum", "Nha font"], answer: 2, why: "Count na-enye ọnụ ọgụgụ ahịrị, ọ bụghị ngụkọta uru ndị ahụ." },
      { objective: "O5", q: "Olee mgbe ị ga-elele nọmba ndị ahụ?", options: ["Ọ dịghị mgbe ọ bụla", "Naanị mgbe onye isi chọpụtara mperi", "Naanị otu ugboro n'afọ", "Tupu onye ọ bụla ọzọ ahụ dashboard ahụ"], answer: 3, why: "Ibu ụzọ lelee na-egbochi nọmba ezighi ezi iduba ná mkpebi ezighi ezi." },
      { objective: "O6", q: "Kedu nke ekwesịghị ịbanye na dashboard omume MGBE Ọ BỤLA?", options: ["Ire ahịa ụlọ achịcha e chepụtara echepụta", "Aha na nọmba ekwentị ezi ndị ahịa", "Category ngwaahịa", "Ụbọchị"], answer: 1, why: "Data omume na-anọgide bụrụ ihe e chepụtara echepụta; a ga-echebe ezi ozi nzuzo." },
      { objective: "O6", q: "Gịnị ka ihe ọmụmụ a na-enye gị?", options: ["Asambodo PL-300", "Asambodo CompTIA Data+", "Akwụkwọ ikike ịnya ụgbọala", "Nkwado na dashboard ngosi ọrụ (portfolio); a na-ewe ule ndị ahụ iche"], answer: 3, why: "Ihe ọmụmụ a na-akwado gị; Microsoft na CompTIA na-enye asambodo ha mgbe ule nke ha gasịrị." },
      { objective: "O6", q: "Ezigbo nchịkọta ahịrịokwu 3 nwere ihe dashboard ahụ na-egosi, ihe isi a chọpụtara na:", options: ["Otu ihe a tụrụ aro ime", "Adreesị ụlọ gị", "Akụkọ ihe mere eme nke ngwa ahụ", "Ndepụta ahịrị ọ bụla"], answer: 0, why: "Ihe a ga-eme na-eme ka ihe a chọpụtara ghọọ mkpebi." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [0, 2, 3, 6, 7, 9, 11, 15, 17] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma lelee ya ọzọ.",
    criteria: [
      { name: "Ajụjụ na nọmba ndị bụ isi", objective: "O1", notYet: "Enweghị ajụjụ doro anya, ma ọ bụ e nwere ihe karịrị nọmba 5 n'enweghị oge ha.", meets: "Ajụjụ otu ahịrịokwu, a kpọrọ aha ndị ga-ele ya, nọmba isi 3 ruo 5 nke ọ bụla nwere otu esi agbakọ ya na oge ya.", exceeds: "Ọ na-akpọkwa aha mkpebi dashboard ahụ na-akwado na ihe mere nọmba ọ bụla ji dị mkpa maka ya." },
      { name: "Data dị ọcha", objective: "O2", notYet: "Ahịrị abụọ yiri onwe ha, ahịrị efu, ụdị ụbọchị dị iche iche ma ọ bụ nọmba e chekwara dị ka ederede ka dị.", meets: "Otu ahịrị isiokwu, otu ahịrị maka ndekọ ọ bụla, ụdị data ziri ezi, enweghị ahịrị abụọ yiri onwe ha.", exceeds: "Debere spreadsheet mbụ na obere ndetu nke ndozi ọ bụla e mere." },
      { name: "Chaatị kwesịrị ekwesị", objective: "O3", notYet: "Ụdị chaatị adabaghị n'ajụjụ, ma ọ bụ aha adịghị.", meets: "Opekata mpe chaatị 2 dabara n'ajụjụ ha, nwere aha doro anya; ogwe bar na-amalite na efu.", exceeds: "Nwere ike ịkọwa ihe mere e ji họrọ ụdị chaatị ọ bụla karịa nke ọzọ." },
      { name: "Nhazi peeji na filter", objective: "O4", notYet: "Card adịghị, ma ọ bụ filter anaghị agbanwe visual ọ bụla.", meets: "Kaadị nọmba isi 3 ma ọ bụ karịa n'elu, filter ụbọchị na otu filter ọzọ na-agbanwe ihe niile; ọ gafere nnwale otu nkeji.", exceeds: "Nhazi dị ọcha, dị n'ahịrị, enweghị ihe karịrị akarị; onye na-ele ya na-aza ya ọsọ ọsọ n'ihe na-erughị otu nkeji." },
      { name: "E lelere nọmba", objective: "O5", notYet: "E leleghị nọmba ọ bụla megide data mbụ.", meets: "E lelere nọmba 3 ma dee ha; e doziri nke ọ bụla na-adabaghị.", exceeds: "Na-akọwa ihe kpatara ndakọrịta na-adabaghị ọ chọtara na otu o si dozie ya." },
      { name: "E kesara ya n'enweghị nsogbu ya na nchịkọta", objective: "O6", notYet: "E kesara ya na ikike ịgbanwe, o nwere ozi nzuzo, ma ọ bụ enweghị nchịkọta.", meets: "E kesara ya na ikike ile naanị ma ọ bụ bupụta ya na PDF, enweghị ozi nzuzo, nchịkọta ahịrịokwu 3 nwere ihe a chọpụtara na ihe a ga-eme.", exceeds: "Nchịkọta ahụ dị njikere ka a gụpụta ya n'olu dị elu n'ajụjụ ọnụ ọrụ dị ka ihe ngosi ọrụ." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma wuo dashboard gafere rubric",
      "Ndị na-amụ ihe tinyere dashboard ahụ na résumé, portfolio ma ọ bụ profaịlụ LinkedIn n'ime ụbọchị 30",
      "Ndị na-amụ ihe hazịrị oge ma ọ bụ gafere PL-300 ma ọ bụ CompTIA Data+, ma ọ bụ malite ọrụ data ma ọ bụ akụkọ, n'ime ọnwa 6 (nnyocha nsochi)",
      "Ndị na-amụ ihe nwe obere azụmahịa jiri dashboard mee mkpebi gbasara ngwaahịa, ndị ọrụ ma ọ bụ ọnụ ahịa"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Kọmputa nwere ịntanetị: Windows maka Power BI Desktop, ma ọ bụ kọmputa ọ bụla nwere browser maka Data Studio",
      "Akaụntụ Google n'efu (Google Sheets na Data Studio), na Power BI Desktop site na ezi weebụsaịtị Microsoft ma ọ bụrụ na-eji Windows",
      "Data ire ahịa ụlọ achịcha e chepụtara echepụta (ndị na-amụ ihe na-ede ahịrị 15 ma ọ bụ karịa) ma ọ bụ data ọzọ e chepụtara echepụta maka ọrụ nke ha",
      "Akwụkwọ na mkpịsị ode maka atụmatụ dashboard",
      "Ihe dị ka awa 2 ruo 3 n'ozuzu: nkuzi, omume, nnwale na ọrụ ikpeazụ"
    ],
    facilitatorNotes: [
      "Buru ụzọ lelee ngwaọrụ: ndị na-amụ ihe nọ na Mac, Chromebook ma ọ bụ kọmputa ọba akwụkwọ na-eji Data Studio; ndị na-eji Windows nwere ike ịhọrọ ngwa ọ bụla.",
      "Nye ule mbido tupu Nkuzi 1 ma tụnyere ya na ule ikpeazụ.",
      "Mee ka ndị na-amụ ihe debe peeji atụmatụ Nkuzi 1 ha; ọ na-eduzi ọrụ ikpeazụ ahụ dum.",
      "Ejila ezi data ndị ahịa, ndị ọrịa ma ọ bụ ndị ọrụ na klas mgbe ọ bụla. Chetara ndị agha lara ezumike na ndị na-achọ ọrụ ka ha jiri nọmba e chepụtara echepụta n'ihe ngosi ọrụ ha kwa.",
      "Jiri rubric tụọ akara dashboard ikpeazụ, ma mee ka onye ọ bụla na-amụ ihe gosi ya n'ime sekọnd 60, dị ka omume maka ajụjụ ọnụ ọrụ.",
      "Duzie ndị na-amụ ihe na ezi peeji PL-300 na CompTIA Data+ maka ihe ule dị ugbu a, ịhazi oge na ego; ekwula ọnụ ahịa site na ncheta."
    ]
  }
};
